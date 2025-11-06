// app.part27-de-30.js
       },
                },
                {
                  key: "getLogYRatios",
                  value: function (t) {
                    var e = this,
                      n = this.w,
                      i = this.w.globals;
                    return (
                      (i.yLogRatio = t.slice()),
                      (i.logYRange = i.yRange.map(function (t, r) {
                        var o = n.globals.seriesYAxisReverseMap[r];
                        if (
                          n.config.yaxis[o] &&
                          e.w.config.yaxis[o].logarithmic
                        ) {
                          var a,
                            s = -Number.MAX_VALUE,
                            l = Number.MIN_VALUE;
                          return (
                            i.seriesLog.forEach(function (t, e) {
                              t.forEach(function (t) {
                                n.config.yaxis[e] &&
                                  n.config.yaxis[e].logarithmic &&
                                  ((s = Math.max(t, s)), (l = Math.min(t, l)));
                              });
                            }),
                            (a = Math.pow(
                              i.yRange[r],
                              Math.abs(l - s) / i.yRange[r]
                            )),
                            (i.yLogRatio[r] = a / i.gridHeight),
                            a
                          );
                        }
                      })),
                      i.invalidLogScale ? t.slice() : i.yLogRatio
                    );
                  },
                },
                {
                  key: "drawSeriesByGroup",
                  value: function (t, e, n, i) {
                    var r = this.w,
                      o = [];
                    return (
                      t.series.length > 0 &&
                        e.forEach(function (e) {
                          var a = [],
                            s = [];
                          t.i.forEach(function (n, i) {
                            r.config.series[n].group === e &&
                              (a.push(t.series[i]), s.push(n));
                          }),
                            a.length > 0 && o.push(i.draw(a, n, s));
                        }),
                      o
                    );
                  },
                },
              ],
              [
                {
                  key: "checkComboSeries",
                  value: function (t, e) {
                    var n = !1,
                      i = 0,
                      r = 0;
                    return (
                      void 0 === e && (e = "line"),
                      t.length &&
                        void 0 !== t[0].type &&
                        t.forEach(function (t) {
                          ("bar" !== t.type &&
                            "column" !== t.type &&
                            "candlestick" !== t.type &&
                            "boxPlot" !== t.type) ||
                            i++,
                            void 0 !== t.type && t.type !== e && r++;
                        }),
                      r > 0 && (n = !0),
                      { comboBarCount: i, comboCharts: n }
                    );
                  },
                },
                {
                  key: "extendArrayProps",
                  value: function (t, e, n) {
                    var i, r, o, a, s, l;
                    return (
                      null !== (i = e) &&
                        void 0 !== i &&
                        i.yaxis &&
                        (e = t.extendYAxis(e, n)),
                      null !== (r = e) &&
                        void 0 !== r &&
                        r.annotations &&
                        (e.annotations.yaxis &&
                          (e = t.extendYAxisAnnotations(e)),
                        null !== (o = e) &&
                          void 0 !== o &&
                          null !== (a = o.annotations) &&
                          void 0 !== a &&
                          a.xaxis &&
                          (e = t.extendXAxisAnnotations(e)),
                        null !== (s = e) &&
                          void 0 !== s &&
                          null !== (l = s.annotations) &&
                          void 0 !== l &&
                          l.points &&
                          (e = t.extendPointAnnotations(e))),
                      e
                    );
                  },
                },
              ]
            ),
            t
          );
        })(),
        C = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.annoCtx = e);
          }
          return (
            l(t, [
              {
                key: "setOrientations",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n = this.w;
                  if ("vertical" === t.label.orientation) {
                    var i = null !== e ? e : 0,
                      r = n.globals.dom.baseEl.querySelector(
                        ".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(
                          i,
                          "']"
                        )
                      );
                    if (null !== r) {
                      var o = r.getBoundingClientRect();
                      r.setAttribute(
                        "x",
                        parseFloat(r.getAttribute("x")) - o.height + 4
                      );
                      var a = "top" === t.label.position ? o.width : -o.width;
                      r.setAttribute("y", parseFloat(r.getAttribute("y")) + a);
                      var s = this.annoCtx.graphics.rotateAroundCenter(r),
                        l = s.x,
                        c = s.y;
                      r.setAttribute(
                        "transform",
                        "rotate(-90 ".concat(l, " ").concat(c, ")")
                      );
                    }
                  }
                },
              },
              {
                key: "addBackgroundToAnno",
                value: function (t, e) {
                  var n = this.w;
                  if (!t || !e.label.text || !String(e.label.text).trim())
                    return null;
                  var i = n.globals.dom.baseEl
                      .querySelector(".apexcharts-grid")
                      .getBoundingClientRect(),
                    r = t.getBoundingClientRect(),
                    o = e.label.style.padding,
                    a = o.left,
                    s = o.right,
                    l = o.top,
                    c = o.bottom;
                  if ("vertical" === e.label.orientation) {
                    var d = [a, s, l, c];
                    (l = d[0]), (c = d[1]), (a = d[2]), (s = d[3]);
                  }
                  var u = r.left - i.left - a,
                    p = r.top - i.top - l,
                    h = this.annoCtx.graphics.drawRect(
                      u - n.globals.barPadForNumericAxis,
                      p,
                      r.width + a + s,
                      r.height + l + c,
                      e.label.borderRadius,
                      e.label.style.background,
                      1,
                      e.label.borderWidth,
                      e.label.borderColor,
                      0
                    );
                  return e.id && h.node.classList.add(e.id), h;
                },
              },
              {
                key: "annotationsBackground",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = function (n, i, r) {
                      var o = e.globals.dom.baseEl.querySelector(
                        ".apexcharts-"
                          .concat(r, "-annotations .apexcharts-")
                          .concat(r, "-annotation-label[rel='")
                          .concat(i, "']")
                      );
                      if (o) {
                        var a = o.parentNode,
                          s = t.addBackgroundToAnno(o, n);
                        s &&
                          (a.insertBefore(s.node, o),
                          n.label.mouseEnter &&
                            s.node.addEventListener(
                              "mouseenter",
                              n.label.mouseEnter.bind(t, n)
                            ),
                          n.label.mouseLeave &&
                            s.node.addEventListener(
                              "mouseleave",
                              n.label.mouseLeave.bind(t, n)
                            ),
                          n.label.click &&
                            s.node.addEventListener(
                              "click",
                              n.label.click.bind(t, n)
                            ));
                      }
                    };
                  e.config.annotations.xaxis.forEach(function (t, e) {
                    return n(t, e, "xaxis");
                  }),
                    e.config.annotations.yaxis.forEach(function (t, e) {
                      return n(t, e, "yaxis");
                    }),
                    e.config.annotations.points.forEach(function (t, e) {
                      return n(t, e, "point");
                    });
                },
              },
              {
                key: "getY1Y2",
                value: function (t, e) {
                  var n,
                    i = this.w,
                    r = "y1" === t ? e.y : e.y2,
                    o = !1;
                  if (this.annoCtx.invertAxis) {
                    var a = i.config.xaxis.convertedCatToNumeric
                        ? i.globals.categoryLabels
                        : i.globals.labels,
                      s = a.indexOf(r),
                      l = i.globals.dom.baseEl.querySelector(
                        ".apexcharts-yaxis-texts-g text:nth-child(".concat(
                          s + 1,
                          ")"
                        )
                      );
                    (n = l
                      ? parseFloat(l.getAttribute("y"))
                      : (i.globals.gridHeight / a.length - 1) * (s + 1) -
                        i.globals.barHeight),
                      void 0 !== e.seriesIndex &&
                        i.globals.barHeight &&
                        (n -=
                          (i.globals.barHeight / 2) *
                            (i.globals.series.length - 1) -
                          i.globals.barHeight * e.seriesIndex);
                  } else {
                    var c,
                      d = i.globals.seriesYAxisMap[e.yAxisIndex][0],
                      u = i.config.yaxis[e.yAxisIndex].logarithmic
                        ? new z(this.annoCtx.ctx).getLogVal(
                            i.config.yaxis[e.yAxisIndex].logBase,
                            r,
                            d
                          ) / i.globals.yLogRatio[d]
                        : (r - i.globals.minYArr[d]) /
                          (i.globals.yRange[d] / i.globals.gridHeight);
                    (n =
                      i.globals.gridHeight -
                      Math.min(Math.max(u, 0), i.globals.gridHeight)),
                      (o = u > i.globals.gridHeight || u < 0),
                      !e.marker || (void 0 !== e.y && null !== e.y) || (n = 0),
                      null !== (c = i.config.yaxis[e.yAxisIndex]) &&
                        void 0 !== c &&
                        c.reversed &&
                        (n = u);
                  }
                  return (
                    "string" == typeof r &&
                      r.includes("px") &&
                      (n = parseFloat(r)),
                    { yP: n, clipped: o }
                  );
                },
              },
              {
                key: "getX1X2",
                value: function (t, e) {
                  var n = this.w,
                    i = "x1" === t ? e.x : e.x2,
                    r = this.annoCtx.invertAxis
                      ? n.globals.minY
                      : n.globals.minX,
                    o = this.annoCtx.invertAxis
                      ? n.globals.maxY
                      : n.globals.maxX,
                    a = this.annoCtx.invertAxis
                      ? n.globals.yRange[0]
                      : n.globals.xRange,
                    s = !1,
                    l = this.annoCtx.inversedReversedAxis
                      ? (o - i) / (a / n.globals.gridWidth)
                      : (i - r) / (a / n.globals.gridWidth);
                  return (
                    ("category" !== n.config.xaxis.type &&
                      !n.config.xaxis.convertedCatToNumeric) ||
                      this.annoCtx.invertAxis ||
                      n.globals.dataFormatXNumeric ||
                      n.config.chart.sparkline.enabled ||
                      (l = this.getStringX(i)),
                    "string" == typeof i &&
                      i.includes("px") &&
                      (l = parseFloat(i)),
                    null == i && e.marker && (l = n.globals.gridWidth),
                    void 0 !== e.seriesIndex &&
                      n.globals.barWidth &&
                      !this.annoCtx.invertAxis &&
                      (l -=
                        (n.globals.barWidth / 2) *
                          (n.globals.series.length - 1) -
                        n.globals.barWidth * e.seriesIndex),
                    l > n.globals.gridWidth
                      ? ((l = n.globals.gridWidth), (s = !0))
                      : l < 0 && ((l = 0), (s = !0)),
                    { x: l, clipped: s }
                  );
                },
              },
              {
                key: "getStringX",
                value: function (t) {
                  var e = this.w,
                    n = t;
                  e.config.xaxis.convertedCatToNumeric &&
                    e.globals.categoryLabels.length &&
                    (t = e.globals.categoryLabels.indexOf(t) + 1);
                  var i = e.globals.labels
                      .map(function (t) {
                        return Array.isArray(t) ? t.join(" ") : t;
                      })
                      .indexOf(t),
                    r = e.globals.dom.baseEl.querySelector(
                      ".apexcharts-xaxis-texts-g text:nth-child(".concat(
                        i + 1,
                        ")"
                      )
                    );
                  return r && (n = parseFloat(r.getAttribute("x"))), n;
                },
              },
            ]),
            t
          );
        })(),
        k = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.annoCtx = e),
              (this.invertAxis = this.annoCtx.invertAxis),
              (this.helpers = new C(this.annoCtx));
          }
          return (
            l(t, [
              {
                key: "addXaxisAnnotation",
                value: function (t, e, n) {
                  var i,
                    r = this.w,
                    o = this.helpers.getX1X2("x1", t),
                    a = o.x,
                    s = o.clipped,
                    l = !0,
                    c = t.label.text,
                    d = t.strokeDashArray;
                  if (O.isNumber(a)) {
                    if (null === t.x2 || void 0 === t.x2) {
                      if (!s) {
                        var u = this.annoCtx.graphics.drawLine(
                          a + t.offsetX,
                          0 + t.offsetY,
                          a + t.offsetX,
                          r.globals.gridHeight + t.offsetY,
                          t.borderColor,
                          d,
                          t.borderWidth
                        );
                        e.appendChild(u.node),
                          t.id && u.node.classList.add(t.id);
                      }
                    } else {
                      var p = this.helpers.getX1X2("x2", t);
                      if (((i = p.x), (l = p.clipped), !s || !l)) {
                        if (i < a) {
                          var h = a;
                          (a = i), (i = h);
                        }
                        var f = this.annoCtx.graphics.drawRect(
                          a + t.offsetX,
                          0 + t.offsetY,
                          i - a,
                          r.globals.gridHeight + t.offsetY,
                          0,
                          t.fillColor,
                          t.opacity,
                          1,
                          t.borderColor,
                          d
                        );
                        f.node.classList.add("apexcharts-annotation-rect"),
                          f.attr(
                            "clip-path",
                            "url(#gridRectMask".concat(r.globals.cuid, ")")
                          ),
                          e.appendChild(f.node),
                          t.id && f.node.classList.add(t.id);
                      }
                    }
                    if (!s || !l) {
                      var b = this.annoCtx.graphics.getTextRects(
                          c,
                          parseFloat(t.label.style.fontSize)
                        ),
                        m =
                          "top" === t.label.position
                            ? 4
                            : "center" === t.label.position
                            ? r.globals.gridHeight / 2 +
                              ("vertical" === t.label.orientation
                                ? b.width / 2
                                : 0)
                            : r.globals.gridHeight,
                        g = this.annoCtx.graphics.drawText({
                          x: a + t.label.offsetX,
                          y:
                            m +
                            t.label.offsetY -
                            ("vertical" === t.label.orientation
                              ? "top" === t.label.position
                                ? b.width / 2 - 12
                                : -b.width / 2
                              : 0),
                          text: c,
                          textAnchor: t.label.textAnchor,
                          fontSize: t.label.style.fontSize,
                          fontFamily: t.label.style.fontFamily,
                          fontWeight: t.label.style.fontWeight,
                          foreColor: t.label.style.color,
                          cssClass: "apexcharts-xaxis-annotation-label "
                            .concat(t.label.style.cssClass, " ")
                            .concat(t.id ? t.id : ""),
                        });
                      g.attr({ rel: n }),
                        e.appendChild(g.node),
                        this.annoCtx.helpers.setOrientations(t, n);
                    }
                  }
                },
              },
              {
                key: "drawXAxisAnnotations",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = this.annoCtx.graphics.group({
                      class: "apexcharts-xaxis-annotations",
                    });
                  return (
                    e.config.annotations.xaxis.map(function (e, i) {
                      t.addXaxisAnnotation(e, n.node, i);
                    }),
                    n
                  );
                },
              },
            ]),
            t
          );
        })(),
        S = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.months31 = [1, 3, 5, 7, 8, 10, 12]),
              (this.months30 = [2, 4, 6, 9, 11]),
              (this.daysCntOfYear = [
                0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
              ]);
          }
          return (
            l(t, [
              {
                key: "isValidDate",
                value: function (t) {
                  return "number" != typeof t && !isNaN(this.parseDate(t));
                },
              },
              {
                key: "getTimeStamp",
                value: function (t) {
                  return Date.parse(t)
                    ? this.w.config.xaxis.labels.datetimeUTC
                      ? new Date(
                          new Date(t).toISOString().substr(0, 25)
                        ).getTime()
                      : new Date(t).getTime()
                    : t;
                },
              },
              {
                key: "getDate",
                value: function (t) {
                  return this.w.config.xaxis.labels.datetimeUTC
                    ? new Date(new Date(t).toUTCString())
                    : new Date(t);
                },
              },
              {
                key: "parseDate",
                value: function (t) {
                  var e = Date.parse(t);
                  if (!isNaN(e)) return this.getTimeStamp(t);
                  var n = Date.parse(
                    t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")
                  );
                  return this.getTimeStamp(n);
                },
              },
              {
                key: "parseDateWithTimezone",
                value: function (t) {
                  return Date.parse(
                    t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")
                  );
                },
              },
              {
                key: "formatDate",
                value: function (t, e) {
                  var n = this.w.globals.locale,
                    i = this.w.config.xaxis.labels.datetimeUTC,
                    r = ["\0"].concat(v(n.months)),
                    o = [""].concat(v(n.shortMonths)),
                    a = [""].concat(v(n.days)),
                    s = [""].concat(v(n.shortDays));
                  function l(t, e) {
                    var n = t + "";
                    for (e = e || 2; n.length < e; ) n = "0" + n;
                    return n;
                  }
                  var c = i ? t.getUTCFullYear() : t.getFullYear();
                  e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(
                    /(^|[^\\])yy/g,
                    "$1" + c.toString().substr(2, 2)
                  )).replace(/(^|[^\\])y/g, "$1" + c);
                  var d = (i ? t.getUTCMonth() : t.getMonth()) + 1;
                  e = (e = (e = (e = e.replace(
                    /(^|[^\\])MMMM+/g,
                    "$1" + r[0]
                  )).replace(/(^|[^\\])MMM/g, "$1" + o[0])).replace(
                    /(^|[^\\])MM/g,
                    "$1" + l(d)
                  )).replace(/(^|[^\\])M/g, "$1" + d);
                  var u = i ? t.getUTCDate() : t.getDate();
                  e = (e = (e = (e = e.replace(
                    /(^|[^\\])dddd+/g,
                    "$1" + a[0]
                  )).replace(/(^|[^\\])ddd/g, "$1" + s[0])).replace(
                    /(^|[^\\])dd/g,
                    "$1" + l(u)
                  )).replace(/(^|[^\\])d/g, "$1" + u);
                  var p = i ? t.getUTCHours() : t.getHours(),
                    h = p > 12 ? p - 12 : 0 === p ? 12 : p;
                  e = (e = (e = (e = e.replace(
                    /(^|[^\\])HH+/g,
                    "$1" + l(p)
                  )).replace(/(^|[^\\])H/g, "$1" + p)).replace(
                    /(^|[^\\])hh+/g,
                    "$1" + l(h)
                  )).replace(/(^|[^\\])h/g, "$1" + h);
                  var f = i ? t.getUTCMinutes() : t.getMinutes();
                  e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(f))).replace(
                    /(^|[^\\])m/g,
                    "$1" + f
                  );
                  var b = i ? t.getUTCSeconds() : t.getSeconds();
                  e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(b))).replace(
                    /(^|[^\\])s/g,
                    "$1" + b
                  );
                  var m = i ? t.getUTCMilliseconds() : t.getMilliseconds();
                  (e = e.replace(/(^|[^\\])fff+/g, "$1" + l(m, 3))),
                    (m = Math.round(m / 10)),
                    (e = e.replace(/(^|[^\\])ff/g, "$1" + l(m))),
                    (m = Math.round(m / 10));
                  var g = p < 12 ? "AM" : "PM";
                  e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + m)).replace(
                    /(^|[^\\])TT+/g,
                    "$1" + g
                  )).replace(/(^|[^\\])T/g, "$1" + g.charAt(0));
                  var _ = g.toLowerCase();
                  e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + _)).replace(
                    /(^|[^\\])t/g,
                    "$1" + _.charAt(0)
                  );
                  var y = -t.getTimezoneOffset(),
                    M = i || !y ? "Z" : y > 0 ? "+" : "-";
                  if (!i) {
                    var O = (y = Math.abs(y)) % 60;
                    M += l(Math.floor(y / 60)) + ":" + l(O);
                  }
                  e = e.replace(/(^|[^\\])K/g, "$1" + M);
                  var w = (i ? t.getUTCDay() : t.getDay()) + 1;
                  return (e = (e = (e = (e = e.replace(
                    new RegExp(a[0], "g"),
                    a[w]
                  )).replace(new RegExp(s[0], "g"), s[w])).replace(
                    new RegExp(r[0], "g"),
                    r[d]
                  )).replace(new RegExp(o[0], "g"), o[d])).replace(
                    /\\(.)/g,
                    "$1"
                  );
                },
              },
              {
                key: "getTimeUnitsfromTimestamp",
                value: function (t, e, n) {
                  var i = this.w;
                  void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min),
                    void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                  var r = this.getDate(t),
                    o = this.getDate(e),
                    a = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(
                      " "
                    ),
                    s = this.formatDate(o, "yyyy MM dd HH mm ss fff").split(
                      " "
                    );
                  return {
                    minMillisecond: parseInt(a[6], 10),
                    maxMillisecond: parseInt(s[6], 10),
                    minSecond: parseInt(a[5], 10),
                    maxSecond: parseInt(s[5], 10),
                    minMinute: parseInt(a[4], 10),
                    maxMinute: parseInt(s[4], 10),
                    minHour: parseInt(a[3], 10),
                    maxHour: parseInt(s[3], 10),
                    minDate: parseInt(a[2], 10),
                    maxDate: parseInt(s[2], 10),
                    minMonth: parseInt(a[1], 10) - 1,
                    maxMonth: parseInt(s[1], 10) - 1,
                    minYear: parseInt(a[0], 10),
                    maxYear: parseInt(s[0], 10),
                  };
                },
              },
              {
                key: "isLeapYear",
                value: function (t) {
                  return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
                },
              },
              {
                key: "calculcateLastDaysOfMonth",
                value: function (t, e, n) {
                  return this.determineDaysOfMonths(t, e) - n;
                },
              },
              {
                key: "determineDaysOfYear",
                value: function (t) {
                  var e = 365;
                  return this.isLeapYear(t) && (e = 366), e;
                },
              },
              {
                key: "determineRemainingDaysOfYear",
                value: function (t, e, n) {
                  var i = this.daysCntOfYear[e] + n;
                  return e > 1 && this.isLeapYear() && i++, i;
                },
              },
              {
                key: "determineDaysOfMonths",
                value: function (t, e) {
                  var n = 30;
                  switch (((t = O.monthMod(t)), !0)) {
                    case this.months30.indexOf(t) > -1:
                      2 === t && (n = this.isLeapYear(e) ? 29 : 28);
                      break;
                    case this.months31.indexOf(t) > -1:
                    default:
                      n = 31;
                  }
                  return n;
                },
              },
            ]),
            t
          );
        })(),
        T = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.tooltipKeyFormat = "dd MMM");
          }
          return (
            l(t, [
              {
                key: "xLabelFormat",
                value: function (t, e, n, i) {
                  var r = this.w;
                  if (
                    "datetime" === r.config.xaxis.type &&
                    void 0 === r.config.xaxis.labels.formatter &&
                    void 0 === r.config.tooltip.x.formatter
                  ) {
                    var o = new S(this.ctx);
                    return o.formatDate(
                      o.getDate(e),
                      r.config.tooltip.x.format
                    );
                  }
                  return t(e, n, i);
                },
              },
              {
                key: "defaultGeneralFormatter",
                value: function (t) {
                  return Array.isArray(t)
                    ? t.map(function (t) {
                        return t;
                      })
                    : t;
                },
              },
              {
                key: "defaultYFormatter",
                value: function (t, e, n) {
                  var i = this.w;
                  if (O.isNumber(t))
                    if (0 !== i.globals.yValueDecimal)
                      t = t.toFixed(
                        void 0 !== e.decimalsInFloat
                          ? e.decimalsInFloat
                          : i.globals.yValueDecimal
                      );
                    else {
                      var r = t.toFixed(0);
                      t = t == r ? r : t.toFixed(1);
                    }
                  return t;
                },
              },
              {
                key: "setLabelFormatters",
                value: function () {
                  var t = this,
                    e = this.w;
                  return (
                    (e.globals.xaxisTooltipFormatter = function (e) {
                      return t.defaultGeneralFormatter(e);
                    }),
                    (e.globals.ttKeyFormatter = function (e) {
                      return t.defaultGeneralFormatter(e);
                    }),
                    (e.globals.ttZFormatter = function (t) {
                      return t;
                    }),
                    (e.globals.legendFormatter = function (e) {
                      return t.defaultGeneralFormatter(e);
                    }),
                    void 0 !== e.config.xaxis.labels.formatter
                      ? (e.globals.xLabelFormatter =
                          e.config.xaxis.labels.formatter)
                      : (e.globals.xLabelFormatter = function (t) {
                          if (O.isNumber(t)) {
                            if (
                              !e.config.xaxis.convertedCatToNumeric &&
                              "numeric" === e.config.xaxis.type
                            ) {
                              if (O.isNumber(e.config.xaxis.decimalsInFloat))
                                return t.toFixed(
                                  e.config.xaxis.decimalsInFloat
                                );
                              var n = e.globals.maxX - e.globals.minX;
                              return n > 0 && n < 100
                                ? t.toFixed(1)
                                : t.toFixed(0);
                            }
                            return e.globals.isBarHorizontal &&
                              e.globals.maxY - e.globals.minYArr < 4
                              ? t.toFixed(1)
                              : t.toFixed(0);
                          }
                          return t;
                        }),
                    "function" == typeof e.config.tooltip.x.formatter
                      ? (e.globals.ttKeyFormatter =
                          e.config.tooltip.x.formatter)
                      : (e.globals.ttKeyFormatter = e.globals.xLabelFormatter),
                    "function" == typeof e.config.xaxis.tooltip.formatter &&
                      (e.globals.xaxisTooltipFormatter =
                        e.config.xaxis.tooltip.formatter),
                    (Array.isArray(e.config.tooltip.y) ||
                      void 0 !== e.config.tooltip.y.formatter) &&
                      (e.globals.ttVal = e.config.tooltip.y),
                    void 0 !== e.config.tooltip.z.formatter &&
                      (e.globals.ttZFormatter = e.config.tooltip.z.formatter),
                    void 0 !== e.config.legend.formatter &&
                      (e.globals.legendFormatter = e.config.legend.formatter),
                    e.config.yaxis.forEach(function (n, i) {
                      void 0 !== n.labels.formatter
                        ? (e.globals.yLabelFormatters[i] = n.labels.formatter)
                        : (e.globals.yLabelFormatters[i] = function (r) {
                            return e.globals.xyCharts
                              ? Array.isArray(r)
                                ? r.map(function (e) {
                                    return t.defaultYFormatter(e, n, i);
                                  })
                                : t.defaultYFormatter(r, n, i)
                              : r;
                          });
                    }),
                    e.globals
                  );
                },
              },
              {
                key: "heatmapLabelFormatters",
                value: function () {
                  var t = this.w;
                  if ("heatmap" === t.config.chart.type) {
                    t.globals.yAxisScale[0].result =
                      t.globals.seriesNames.slice();
                    var e = t.globals.seriesNames.reduce(function (t, e) {
                      return t.length > e.length ? t : e;
                    }, 0);
                    (t.globals.yAxisScale[0].niceMax = e),
                      (t.globals.yAxisScale[0].niceMin = e);
                  }
                },
              },
            ]),
            t
          );
        })(),
        D = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "getLabel",
                value: function (t, e, n, i) {
                  var r,
                    o,
                    a =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : [],
                    s =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : "12px",
                    l =
                      !(arguments.length > 6 && void 0 !== arguments[6]) ||
                      arguments[6],
                    c = this.w,
                    d = void 0 === t[i] ? "" : t[i],
                    u = d,
                    p = c.globals.xLabelFormatter,
                    h = c.config.xaxis.labels.formatter,
                    f = !1,
                    b = new T(this.ctx),
                    m = d;
                  l &&
                    ((u = b.xLabelFormat(p, d, m, {
                      i: i,
                      dateFormatter: new S(this.ctx).formatDate,
                      w: c,
                    })),
                    void 0 !== h &&
                      (u = h(d, t[i], {
                        i: i,
                        dateFormatter: new S(this.ctx).formatDate,
                        w: c,
                      }))),
                    e.length > 0
                      ? ((r = e[i].unit),
                        (o = null),
                        e.forEach(function (t) {
                          "month" === t.unit
                            ? (o = "year")
                            : "day" === t.unit
                            ? (o = "month")
                            : "hour" === t.unit
                            ? (o = "day")
                            : "minute" === t.unit && (o = "hour");
                        }),
                        (f = o === r),
                        (n = e[i].position),
                        (u = e[i].value))
                      : "datetime" === c.config.xaxis.type &&
                        void 0 === h &&
                        (u = ""),
                    void 0 === u && (u = ""),
                    (u = Array.isArray(u) ? u : u.toString());
                  var g = new x(this.ctx),
                    v = {};
                  v =
                    c.globals.rotateXLabels && l
                      ? g.getTextRects(
                          u,
                          parseInt(s, 10),
                          null,
                          "rotate(".concat(
                            c.config.xaxis.labels.rotate,
                            " 0 0)"
                          ),
                          !1
                        )
                      : g.getTextRects(u, parseInt(s, 10));
                  var _ =
                    !c.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
                  return (
                    !Array.isArray(u) &&
                      ("NaN" === String(u) || (a.indexOf(u) >= 0 && _)) &&
                      (u = ""),
                    { x: n, text: u, textRect: v, isBold: f }
                  );
                },
              },
              {
                key: "checkLabelBasedOnTickamount",
                value: function (t, e, n) {
                  var i = this.w,
                    r = i.config.xaxis.tickAmount;
                  return (
                    "dataPoints" === r &&
                      (r = Math.round(i.globals.gridWidth / 120)),
                    r > n || t % Math.round(n / (r + 1)) == 0 || (e.text = ""),
                    e
                  );
                },
              },
              {
                key: "checkForOverflowingLabels",
                value: function (t, e, n, i, r) {
                  var o = this.w;
                  if (
                    (0 === t &&
                      o.globals.skipFirstTimelinelabel &&
                      (e.text = ""),
                    t === n - 1 &&
                      o.globals.skipLastTimelinelabel &&
                      (e.text = ""),
                    o.config.xaxis.labels.hideOverlappingLabels && i.length > 0)
                  ) {
                    var a = r[r.length - 1];
                    e.x <
                      a.textRect.width /
                        (o.globals.rotateXLabels
                          ? Math.abs(o.config.xaxis.labels.rotate) / 12
                          : 1.01) +
                        a.x && (e.text = "");
                  }
                  return e;
                },
              },
              {
                key: "checkForReversedLabels",
                value: function (t, e) {
                  var n = this.w;
                  return (
                    n.config.yaxis[t] &&
                      n.config.yaxis[t].reversed &&
                      e.reverse(),
                    e
                  );
                },
              },
              {
                key: "yAxisAllSeriesCollapsed",
                value: function (t) {
                  var e = this.w.globals;
                  return !e.seriesYAxisMap[t].some(function (t) {
                    return -1 === e.collapsedSeriesIndices.indexOf(t);
                  });
                },
              },
              {
                key: "translateYAxisIndex",
                value: function (t) {
                  var e = this.w,
                    n = e.globals,
                    i = e.config.yaxis;
                  return n.series.length > i.length ||
                    i.some(function (t) {
                      return Array.isArray(t.seriesName);
                    })
                    ? t
                    : n.seriesYAxisReverseMap[t];
                },
              },
              {
                key: "isYAxisHidden",
                value: function (t) {
                  var e = this.w,
                    n = e.config.yaxis[t];
                  if (!n.show || this.yAxisAllSeriesCollapsed(t)) return !0;
                  if (!n.showForNullSeries) {
                    var i = e.globals.seriesYAxisMap[t],
                      r = new z(this.ctx);
                    return i.every(function (t) {
                      return r.isSeriesNull(t);
                    });
                  }
                  return !1;
                },
              },
              {
                key: "getYAxisForeColor",
                value: function (t, e) {
                  var n = this.w;
                  return (
                    Array.isArray(t) &&
                      n.globals.yAxisScale[e] &&
                      this.ctx.theme.pushExtraColors(
                        t,
                        n.globals.yAxisScale[e].result.length,
                        !1
                      ),
                    t
                  );
                },
              },
              {
                key: "drawYAxisTicks",
                value: function (t, e, n, i, r, o, a) {
                  var s = this.w,
                    l = new x(this.ctx),
                    c = s.globals.translateY + s.config.yaxis[r].labels.offsetY;
                  if (
                    (s.globals.isBarHorizontal
                      ? (c = 0)
                      : "heatmap" === s.config.chart.type && (c += o / 2),
                    i.show && e > 0)
                  ) {
                    !0 === s.config.yaxis[r].opposite && (t += i.width);
                    for (var d = e; d >= 0; d--) {
                      var u = l.drawLine(
                        t + n.offsetX - i.width + i.offsetX,
                        c + i.offsetY,
                        t + n.offsetX + i.offsetX,
                        c + i.offsetY,
                        i.color
                      );
                      a.add(u), (c += o);
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        L = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.annoCtx = e),
              (this.helpers = new C(this.annoCtx)),
              (this.axesUtils = new D(this.annoCtx));
          }
          return (
            l(t, [
              {
                key: "addYaxisAnnotation",
                value: function (t, e, n) {
                  var i,
                    r = this.w,
                    o = t.strokeDashArray,
                    a = this.helpers.getY1Y2("y1", t),
                    s = a.yP,
                    l = a.clipped,
                    c = !0,
                    d = !1,
                    u = t.label.text;
                  if (null === t.y2 || void 0 === t.y2) {
                    if (!l) {
                      d = !0;
                      var p = this.annoCtx.graphics.drawLine(
                        0 + t.offsetX,
                        s + t.offsetY,
                        this._getYAxisAnnotationWidth(t),
                        s + t.offsetY,
                        t.borderColor,
                        o,
                        t.borderWidth
                      );
                      e.appendChild(p.node), t.id && p.node.classList.add(t.id);
                    }
                  } else {
                    if (
                      ((i = (a = this.helpers.getY1Y2("y2", t)).yP),
                      (c = a.clipped),
                      i > s)
                    ) {
                      var h = s;
                      (s = i), (i = h);
                    }
                    if (!l || !c) {
                      d = !0;
                      var f = this.annoCtx.graphics.drawRect(
                        0 + t.offsetX,
                        i + t.offsetY,
                        this._getYAxisAnnotationWidth(t),
                        s - i,
                        0,
                        t.fillColor,
                        t.opacity,
                        1,
                        t.borderColor,
                        o
                      );
                      f.node.classList.add("apexcharts-annotation-rect"),
                        f.attr(
                          "clip-path",
                          "url(#gridRectMask".concat(r.globals.cuid, ")")
                        ),
                        e.appendChild(f.node),
                        t.id && f.node.classList.add(t.id);
                    }
                  }
                  if (d) {
                    var b =
                        "right" === t.label.position
                          ? r.globals.gridWidth
                          : "center" === t.label.position
                          ? r.globals.gridWidth / 2
                          : 0,
                      m = this.annoCtx.graphics.drawText({
                        x: b + t.label.offsetX,
                        y: (null != i ? i : s) + t.label.offsetY - 3,
                        text: u,
                        textAnchor: t.label.textAnchor,
                        fontSize: t.label.style.fontSize,
                        fontFamily: t.label.style.fontFamily,
                        fontWeight: t.label.style.fontWeight,
                        foreColor: t.label.style.color,
                        cssClass: "apexcharts-yaxis-annotation-label "
                          .concat(t.label.style.cssClass, " ")
                          .concat(t.id ? t.id : ""),
                      });
                    m.attr({ rel: n }), e.appendChild(m.node);
                  }
                },
              },
              {
                key: "_getYAxisAnnotationWidth",
                value: function (t) {
                  var e = this.w;
                  return (
                    e.globals.gridWidth,
                    (t.width.indexOf("%") > -1
                      ? (e.globals.gridWidth * parseInt(t.width, 10)) / 100
                      : parseInt(t.width, 10)) + t.offsetX
                  );
                },
              },
              {
                key: "drawYAxisAnnotations",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = this.annoCtx.graphics.group({
                      class: "apexcharts-yaxis-annotations",
                    });
                  return (
                    e.config.annotations.yaxis.forEach(function (e, i) {
                      (e.yAxisIndex = t.axesUtils.translateYAxisIndex(
                        e.yAxisIndex
                      )),
                        (t.axesUtils.isYAxisHidden(e.yAxisIndex) &&
                          t.axesUtils.yAxisAllSeriesCollapsed(e.yAxisIndex)) ||
                          t.addYaxisAnnotation(e, n.node, i);
                    }),
                    n
                  );
                },
              },
            ]),
            t
          );
        })(),
        q = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.annoCtx = e),
              (this.helpers = new C(this.annoCtx));
          }
          return (
            l(t, [
              {
                key: "addPointAnnotation",
                value: function (t, e, n) {
                  if (
                    !(
                      this.w.globals.collapsedSeriesIndices.indexOf(
                        t.seriesIndex
                      ) > -1
                    )
                  ) {
                    var i = this.helpers.getX1X2("x1", t),
                      r = i.x,
                      o = i.clipped,
                      a = (i = this.helpers.getY1Y2("y1", t)).yP,
                      s = i.clipped;
                    if (O.isNumber(r) && !s && !o) {
                      var l = {
                          pSize: t.marker.size,
                          pointStrokeWidth: t.marker.strokeWidth,
                          pointFillColor: t.marker.fillColor,
                          pointStrokeColor: t.marker.strokeColor,
                          shape: t.marker.shape,
                          pRadius: t.marker.radius,
                          class: "apexcharts-point-annotation-marker "
                            .concat(t.marker.cssClass, " ")
                            .concat(t.id ? t.id : ""),
                        },
                        c = this.annoCtx.graphics.drawMarker(
                          r + t.marker.offsetX,
                          a + t.marker.offsetY,
                          l
                        );
                      e.appendChild(c.node);
                      var d = t.label.text ? t.label.text : "",
                        u = this.annoCtx.graphics.drawText({
                          x: r + t.label.offsetX,
                          y:
                            a +
                            t.label.offsetY -
                            t.marker.size -
                            parseFloat(t.label.style.fontSize) / 1.6,
                          text: d,
                          textAnchor: t.label.textAnchor,
                          fontSize: t.label.style.fontSize,
                          fontFamily: t.label.style.fontFamily,
                          fontWeight: t.label.style.fontWeight,
                          foreColor: t.label.style.color,
                          cssClass: "apexcharts-point-annotation-label "
                            .concat(t.label.style.cssClass, " ")
                            .concat(t.id ? t.id : ""),
                        });
                      if (
                        (u.attr({ rel: n }),
                        e.appendChild(u.node),
                        t.customSVG.SVG)
                      ) {
                        var p = this.annoCtx.graphics.group({
                          class:
                            "apexcharts-point-annotations-custom-svg " +
                            t.customSVG.cssClass,
                        });
                        p.attr({
                          transform: "translate("
                            .concat(r + t.customSVG.offsetX, ", ")
                            .concat(a + t.customSVG.offsetY, ")"),
                        }),
                          (p.node.innerHTML = t.customSVG.SVG),
                          e.appendChild(p.node);
                      }
                      if (t.image.path) {
                        var h = t.image.width ? t.image.width : 20,
                          f = t.image.height ? t.image.height : 20;
                        c = this.annoCtx.addImage({
                          x: r + t.image.offsetX - h / 2,
                          y: a + t.image.offsetY - f / 2,
                          width: h,
                          height: f,
                          path: t.image.path,
                          appendTo: ".apexcharts-point-annotations",
                        });
                      }
                      t.mouseEnter &&
                        c.node.addEventListener(
                          "mouseenter",
                          t.mouseEnter.bind(this, t)
                        ),
                        t.mouseLeave &&
                          c.node.addEventListener(
                            "mouseleave",
                            t.mouseLeave.bind(this, t)
                          ),
                        t.click &&
                          c.node.addEventListener(
                            "click",
                            t.click.bind(this, t)
                          );
                    }
                  }
                },
              },
              {
                key: "drawPointAnnotations",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = this.annoCtx.graphics.group({
                      class: "apexcharts-point-annotations",
                    });
                  return (
                    e.config.annotations.points.map(function (e, i) {
                      t.addPointAnnotation(e, n.node, i);
                    }),
                    n
                  );
                },
              },
            ]),
            t
          );
        })(),
        E = {
          name: "en",
          options: {
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            shortMonths: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            toolbar: {
              exportToSVG: "Download SVG",
              exportToPNG: "Download PNG",
              exportToCSV: "Download CSV",
              menu: "Menu",
              selection: "Selection",
              selectionZoom: "Selection Zoom",
              zoomIn: "Zoom In",
              zoomOut: "Zoom Out",
              pan: "Panning",
              reset: "Reset Zoom",
            },
          },
        },
        P = (function () {
          function t() {
            a(this, t),
              (this.yAxis = {
                show: !0,
                showAlways: !1,
                showForNullSeries: !0,
                seriesName: void 0,
                opposite: !1,
                reversed: !1,
                logarithmic: !1,
                logBase: 10,
                tickAmount: void 0,
                stepSize: void 0,
                forceNiceScale: !1,
                max: void 0,
                min: void 0,
                floating: !1,
                decimalsInFloat: void 0,
                labels: {
                  show: !0,
                  showDuplicates: !1,
                  minWidth: 0,
                  maxWidth: 160,
                  offsetX: 0,
                  offsetY: 0,
                  align: void 0,
                  rotate: 0,
                  padding: 20,
                  style: {
                    colors: [],
                    fontSize: "11px",
                    fontWeight: 400,
                    fontFamily: void 0,
                    cssClass: "",
                  },
                  formatter: void 0,
                },
                axisBorder: {
                  show: !1,
                  color: "#e0e0e0",
                  width: 1,
                  offsetX: 0,
                  offsetY: 0,
                },
                axisTicks: {
                  show: !1,
                  color: "#e0e0e0",
                  width: 6,
                  offsetX: 0,
                  offsetY: 0,
                },
                title: {
                  text: void 0,
                  rotate: -90,
                  offsetY: 0,
                  offsetX: 0,
                  style: {
                    color: void 0,
                    fontSize: "11px",
                    fontWeight: 900,
                    fontFamily: void 0,
                    cssClass: "",
                  },
                },
                tooltip: { enabled: !1, offsetX: 0 },
                crosshairs: {
                  show: !0,
                  position: "front",
                  stroke: { color: "#b6b6b6", width: 1, dashArray: 0 },
                },
              }),
              (this.pointAnnotation = {
                id: void 0,
                x: 0,
                y: null,
                yAxisIndex: 0,
                seriesIndex: void 0,
                mouseEnter: void 0,
                mouseLeave: void 0,
                click: void 0,
                marker: {
                  size: 4,
                  fillColor: "#fff",
                  strokeWidth: 2,
                  strokeColor: "#333",
                  shape: "circle",
                  offsetX: 0,
                  offsetY: 0,
                  cssClass: "",
                },
                label: {
                  borderColor: "#c2c2c2",
                  borderWidth: 1,
                  borderRadius: 2,
                  text: void 0,
                  textAnchor: "middle",
                  offsetX: 0,
                  offsetY: 0,
                  mouseEnter: void 0,
                  mouseLeave: void 0,
                  click: void 0,
                  style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: { left: 5, right: 5, top: 2, bottom: 2 },
                  },
                },
                customSVG: {
                  SVG: void 0,
                  cssClass: void 0,
                  offsetX: 0,
                  offsetY: 0,
                },
                image: {
                  path: void 0,
                  width: 20,
                  height: 20,
                  offsetX: 0,
                  offsetY: 0,
                },
              }),
              (this.yAxisAnnotation = {
                id: void 0,
                y: 0,
                y2: null,
                strokeDashArray: 1,
                fillColor: "#c2c2c2",
                borderColor: "#c2c2c2",
                borderWidth: 1,
                opacity: 0.3,
                offsetX: 0,
                offsetY: 0,
                width: "100%",
                yAxisIndex: 0,
                label: {
                  borderColor: "#c2c2c2",
                  borderWidth: 1,
                  borderRadius: 2,
                  text: void 0,
                  textAnchor: "end",
                  position: "right",
                  offsetX: 0,
                  offsetY: -3,
                  mouseEnter: void 0,
                  mouseLeave: void 0,
                  click: void 0,
                  style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: { left: 5, right: 5, top: 2, bottom: 2 },
                  },
                },
              }),
              (this.xAxisAnnotation = {
                id: void 0,
                x: 0,
                x2: null,
                strokeDashArray: 1,
                fillColor: "#c2c2c2",
                borderColor: "#c2c2c2",
                borderWidth: 1,
                opacity: 0.3,
                offsetX: 0,
                offsetY: 0,
                label: {
                  borderColor: "#c2c2c2",
                  borderWidth: 1,
                  borderRadius: 2,
                  text: void 0,
                  textAnchor: "middle",
                  orientation: "vertical",
                  position: "top",
                  offsetX: 0,
                  offsetY: 0,
                  mouseEnter: void 0,
                  mouseLeave: void 0,
                  click: void 0,
                  style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: { left: 5, right: 5, top: 2, bottom: 2 },
                  },
                },
              }),
              (this.text = {
                x: 0,
                y: 0,
                text: "",
                textAnchor: "start",
                foreColor: void 0,
                fontSize: "13px",
                fontFamily: void 0,
                fontWeight: 400,
                appendTo: ".apexcharts-annotations",
                backgroundColor: "transparent",
                borderColor: "#c2c2c2",
                borderRadius: 0,
                borderWidth: 0,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 2,
                paddingBottom: 2,
              });
          }
          return (
            l(t, [
              {
                key: "init",
                value: function () {
                  return {
                    annotations: {
                      yaxis: [this.yAxisAnnotation],
                      xaxis: [this.xAxisAnnotation],
                      points: [this.pointAnnotation],
                      texts: [],
                      images: [],
                      shapes: [],
                    },
                    chart: {
                      animations: {
                        enabled: !0,
                        easing: "easeinout",
                        speed: 800,
                        animateGradually: { delay: 150, enabled: !0 },
                        dynamicAnimation: { enabled: !0, speed: 350 },
                      },
                      background: "",
                      locales: [E],
                      defaultLocale: "en",
                      dropShadow: {
                        enabled: !1,
                        enabledOnSeries: void 0,
                        top: 2,
                        left: 2,
                        blur: 4,
                        color: "#000",
                        opacity: 0.35,
                      },
                      events: {
                        animationEnd: void 0,
                        beforeMount: void 0,
                        mounted: void 0,
                        updated: void 0,
                        click: void 0,
                        mouseMove: void 0,
                        mouseLeave: void 0,
                        xAxisLabelClick: void 0,
                        legendClick: void 0,
                        markerClick: void 0,
                        selection: void 0,
                        dataPointSelection: void 0,
                        dataPointMouseEnter: void 0,
                        dataPointMouseLeave: void 0,
                        beforeZoom: void 0,
                        beforeResetZoom: void 0,
                        zoomed: void 0,
                        scrolled: void 0,
                        brushScrolled: void 0,
                      },
                      foreColor: "#373d3f",
                      fontFamily: "Helvetica, Arial, sans-serif",
                      height: "auto",
                      parentHeightOffset: 15,
                      redrawOnParentResize: !0,
                      redrawOnWindowResize: !0,
                      id: void 0,
                      group: void 0,
                      nonce: void 0,
                      offsetX: 0,
                      offsetY: 0,
                      selection: {
                        enabled: !1,
                        type: "x",
                        fill: { color: "#24292e", opacity: 0.1 },
                        stroke: {
                          width: 1,
                          color: "#24292e",
                          opacity: 0.4,
                          dashArray: 3,
                        },
                        xaxis: { min: void 0, max: void 0 },
                        yaxis: { min: void 0, max: void 0 },
                      },
                      sparkline: { enabled: !1 },
                      brush: {
                        enabled: !1,
                        autoScaleYaxis: !0,
                        target: void 0,
                        targets: void 0,
                      },
                      stacked: !1,
                      stackOnlyBar: !0,
                      stackType: "normal",
                      toolbar: {
                        show: !0,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                          download: !0,
                          selection: !0,
                          zoom: !0,
                          zoomin: !0,
                          zoomout: !0,
                          pan: !0,
                          reset: !0,
                          customIcons: [],
                        },
                        export: {
                          csv: {
                            filename: void 0,
                            columnDelimiter: ",",
                            headerCategory: "category",
                            headerValue: "value",
                            categoryFormatter: void 0,
                            valueFormatter: void 0,
                          },
                          png: { filename: void 0 },
                          svg: { filename: void 0 },
                          scale: void 0,
                          width: void 0,
                        },
                        autoSelected: "zoom",
                      },
                      type: "line",
                      width: "100%",
                      zoom: {
                        enabled: !0,
                        type: "x",
                        autoScaleYaxis: !1,
                        allowMouseWheelZoom: !0,
                        zoomedArea: {
                          fill: { color: "#90CAF9", opacity: 0.4 },
                          stroke: { color: "#0D47A1", opacity: 0.4, width: 1 },
                        },
                      },
                    },
                    plotOptions: {
                      line: { isSlopeChart: !1 },
                      area: { fillTo: "origin" },
                      bar: {
                        horizontal: !1,
                        columnWidth: "70%",
                        barHeight: "70%",
                        distributed: !1,
                        borderRadius: 0,
                        borderRadiusApplication: "around",
                        borderRadiusWhenStacked: "last",
                        rangeBarOverlap: !0,
                        rangeBarGroupRows: !1,
                        hideZeroBarsWhenGrouped: !1,
                        isDumbbell: !1,
                        dumbbellColors: void 0,
                        isFunnel: !1,
                        isFunnel3d: !0,
                        colors: {
                          ranges: [],
                          backgroundBarColors: [],
                          backgroundBarOpacity: 1,
                          backgroundBarRadius: 0,
                        },
                        dataLabels: {
                          position: "top",
                          maxItems: 100,
                          hideOverflowingLabels: !0,
                          orientation: "horizontal",
                          total: {
                            enabled: !1,
                            formatter: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                              color: "#373d3f",
                              fontSize: "12px",
                              fontFamily: void 0,
                              fontWeight: 600,
                            },
                          },
                        },
                      },
                      bubble: {
                        zScaling: !0,
                        minBubbleRadius: void 0,
                        maxBubbleRadius: void 0,
                      },
                      candlestick: {
                        colors: { upward: "#00B746", downward: "#EF403C" },
                        wick: { useFillColor: !0 },
                      },
                      boxPlot: {
                        colors: { upper: "#00E396", lower: "#008FFB" },
                      },
                      heatmap: {
                        radius: 2,
                        enableShades: !0,
                        shadeIntensity: 0.5,
                        reverseNegativeShade: !1,
                        distributed: !1,
                        useFillColorAsStroke: !1,
                        colorScale: {
                          inverse: !1,
                          ranges: [],
                          min: void 0,
                          max: void 0,
                        },
                      },
                      treemap: {
                        enableShades: !0,
                        shadeIntensity: 0.5,
                        distributed: !1,
                        reverseNegativeShade: !1,
                        useFillColorAsStroke: !1,
                        borderRadius: 4,
                        dataLabels: { format: "scale" },
                        colorScale: {
                          inverse: !1,
                          ranges: [],
                          min: void 0,
                          max: void 0,
                        },
                      },
                      radialBar: {
                        inverseOrder: !1,
                        startAngle: 0,
                        endAngle: 360,
                        offsetX: 0,
                        offsetY: 0,
                        hollow: {
                          margin: 5,
                          size: "50%",
                          background: "transparent",
                          image: void 0,
                          imageWidth: 150,
                          imageHeight: 150,
                          imageOffsetX: 0,
                          imageOffsetY: 0,
                          imageClipped: !0,
                          position: "front",
                          dropShadow: {
                            enabled: !1,
                            top: 0,
                            left: 0,
                            blur: 3,
                            color: "#000",
                            opacity: 0.5,
                          },
                        },
                        track: {
                          show: !0,
                          startAngle: void 0,
                          endAngle: void 0,
                          background: "#f2f2f2",
                          strokeWidth: "97%",
                          opacity: 1,
                          margin: 5,
                          dropShadow: {
                            enabled: !1,
                            top: 0,
                            left: 0,
                            blur: 3,
                            color: "#000",
                            opacity: 0.5,
                          },
                        },
                        dataLabels: {
                          show: !0,
                          name: {
                            show: !0,
                            fontSize: "16px",
                            fontFamily: void 0,
                            fontWeight: 600,
                            color: void 0,
                            offsetY: 0,
                            formatter: function (t) {
                              return t;
                            },
                          },
                          value: {
                            show: !0,
                            fontSize: "14px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            color: void 0,
                            offsetY: 16,
                            formatter: function (t) {
                              return t + "%";
                            },
                          },
                          total: {
                            show: !1,
                            label: "Total",
                            fontSize: "16px",
                            fontWeight: 600,
                            fontFamily: void 0,
                            color: void 0,
                            formatter: function (t) {
                              return (
                                t.globals.seriesTotals.reduce(function (t, e) {
                                  return t + e;
                                }, 0) /
                                  t.globals.series.length +
                                "%"
                              );
                            },
                          },
                        },
                        barLabels: {
                          enabled: !1,
                          offsetX: 0,
                          offsetY: 0,
                          useSeriesColors: !0,
                          fontFamily: void 0,
                          fontWeight: 600,
                          fontSize: "16px",
                          formatter: function (t) {
                            return t;
                          },
                          onClick: void 0,
                        },
                      },
                      pie: {
                        customScale: 1,
                        offsetX: 0,
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 360,
                        expandOnClick: !0,
                        dataLabels: { offset: 0, minAngleToShowLabel: 10 },
                        donut: {
                          size: "65%",
                          background: "transparent",
                          labels: {
                            show: !1,
                            name: {
                              show: !0,
                              fontSize: "16px",
                              fontFamily: void 0,
                              fontWeight: 600,
                              color: void 0,
                              offsetY: -10,
                              formatter: function (t) {
                                return t;
                              },
                            },
                            value: {
                              show: !0,
                              fontSize: "20px",
                              fontFamily: void 0,
                              fontWeight: 400,
                              color: void 0,
                              offsetY: 10,
                              formatter: function (t) {
                                return t;
                              },
                            },
                            total: {
                              show: !1,
                              showAlways: !1,
                              label: "Total",
                              fontSize: "16px",
                              fontWeight: 400,
                              fontFamily: void 0,
                              color: void 0,
                              formatter: function (t) {
                                return t.globals.seriesTotals.reduce(function (
                                  t,
                                  e
                                ) {
                                  return t + e;
                                },
                                0);
                              },
                            },
                          },
                        },
                      },
                      polarArea: {
                        rings: { strokeWidth: 1, strokeColor: "#e8e8e8" },
                        spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" },
                      },
                      radar: {
                        size: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        polygons: {
                          strokeWidth: 1,
                          strokeColors: "#e8e8e8",
                          connectorColors: "#e8e8e8",
                          fill: { colors: void 0 },
                        },
                      },
                    },
                    colors: void 0,
                    dataLabels: {
                      enabled: !0,
                      enabledOnSeries: void 0,
                      formatter: function (t) {
                        return null !== t ? t : "";
                      },
                      textAnchor: "middle",
                      distributed: !1,
                      offsetX: 0,
                      offsetY: 0,
                      style: {
                        fontSize: "12px",
                        fontFamily: void 0,
                        fontWeight: 600,
                        colors: void 0,
                      },
                      background: {
                        enabled: !0,
                        foreColor: "#fff",
                        borderRadius: 2,
                        padding: 4,
                        opacity: 0.9,
                        borderWidth: 1,
                        borderColor: "#fff",
                        dropShadow: {
                          enabled: !1,
                          top: 1,
                          left: 1,
                          blur: 1,
                          color: "#000",
                          opacity: 0.45,
                        },
                      },
                      dropShadow: {
                        enabled: !1,
                        top: 1,
                        left: 1,
                        blur: 1,
                        color: "#000",
                        opacity: 0.45,
                      },
                    },
                    fill: {
                      type: "solid",
                      colors: void 0,
                      opacity: 0.85,
                      gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: void 0,
                        inverseColors: !0,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100],
                        colorStops: [],
                      },
                      image: { src: [], width: void 0, height: void 0 },
                      pattern: {
                        style: "squares",
                        width: 6,
                        height: 6,
                        strokeWidth: 2,
                      },
                    },
                    forecastDataPoints: {
                      count: 0,
                      fillOpacity: 0.5,
                      strokeWidth: void 0,
                      dashArray: 4,
                    },
                    grid: {
                      show: !0,
                      borderColor: "#e0e0e0",
                      strokeDashArray: 0,
                      position: "back",
                      xaxis: { lines: { show: !1 } },
                      yaxis: { lines: { show: !0 } },
                      row: { colors: void 0, opacity: 0.5 },
                      column: { colors: void 0, opacity: 0.5 },
                      padding: { top: 0, right: 10, bottom: 0, left: 12 },
                    },
                    labels: [],
                    legend: {
                      show: !0,
                      showForSingleSeries: !1,
                      showForNullSeries: !0,
                      showForZeroSeries: !0,
                      floating: !1,
                      position: "bottom",
                      horizontalAlign: "center",
                      inverseOrder: !1,
                      fontSize: "12px",
                      fontFamily: void 0,
                      fontWeight: 400,
                      width: void 0,
                      height: void 0,
                      formatter: void 0,
                      tooltipHoverFormatter: void 0,
                      offsetX: -20,
                      offsetY: 4,
                      customLegendItems: [],
                      labels: { colors: void 0, useSeriesColors: !1 },
                      markers: {
                        size: 7,
                        fillColors: void 0,
                        strokeWidth: 1,
                        shape: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        customHTML: void 0,
                        onClick: void 0,
                      },
                      itemMargin: { horizontal: 5, vertical: 4 },
                      onItemClick: { toggleDataSeries: !0 },
                      onItemHover: { highlightDataSeries: !0 },
                    },
                    markers: {
                      discrete: [],
                      size: 0,
                      colors: void 0,
                      strokeColors: "#fff",
                      strokeWidth: 2,
                      strokeOpacity: 0.9,
                      strokeDashArray: 0,
                      fillOpacity: 1,
                      shape: "circle",
                      offsetX: 0,
                      offsetY: 0,
                      showNullDataPoints: !0,
                      onClick: void 0,
                      onDblClick: void 0,
                      hover: { size: void 0, sizeOffset: 3 },
                    },
                    noData: {
                      text: void 0,
                      align: "center",
                      verticalAlign: "middle",
                      offsetX: 0,
                      offsetY: 0,
                      style: {
                        color: void 0,
                        fontSize: "14px",
                        fontFamily: void 0,
                      },
                    },
                    responsive: [],
                    series: void 0,
                    states: {
                      normal: { filter: { type: "none", value: 0 } },
                      hover: { filter: { type: "lighten", value: 0.1 } },
                      active: {
                        allowMultipleDataPointsSelection: !1,
                        filter: { type: "darken", value: 0.5 },
                      },
                    },
                    title: {
                      text: void 0,
                      align: "left",
                      margin: 5,
                      offsetX: 0,
                      offsetY: 0,
                      floating: !1,
                      style: {
                        fontSize: "14px",
                        fontWeight: 900,
                        fontFamily: void 0,
                        color: void 0,
                      },
                    },
                    subtitle: {
                      text: void 0,
                      align: "left",
                      margin: 5,
                      offsetX: 0,
                      offsetY: 30,
                      floating: !1,
                      style: {
                        fontSize: "12px",
                        fontWeight: 400,
                        fontFamily: void 0,
                        color: void 0,
                      },
                    },
                    stroke: {
                      show: !0,
                      curve: "smooth",
                      lineCap: "butt",
                      width: 2,
                      colors: void 0,
                      dashArray: 0,
                      fill: {
                        type: "solid",
                        colors: void 0,
                        opacity: 0.85,
                        gradient: {
                          shade: "dark",
                          type: "horizontal",
                          shadeIntensity: 0.5,
                          gradientToColors: void 0,
                          inverseColors: !0,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 50, 100],
                          colorStops: [],
                        },
                      },
                    },
                    tooltip: {
                      enabled: !0,
                      enabledOnSeries: void 0,
                      shared: !0,
                      hideEmptySeries: !1,
                      followCursor: !1,
                      intersect: !1,
                      inverseOrder: !1,
                      custom: void 0,
                      fillSeriesColor: !1,
                      theme: "light",
                      cssClass: "",
                      style: { fontSize: "12px", fontFamily: void 0 },
                      onDatasetHover: { highlightDataSeries: !1 },
                      x: { show: !0, format: "dd MMM", formatter: void 0 },
                      y: {
                        formatter: void 0,
                        title: {
                          formatter: function (t) {
                            return t ? t + ": " : "";
                          },
                        },
                      },
                      z: { formatter: void 0, title: "Size: " },
                      marker: { show: !0, fillColors: void 0 },
                      items: { display: "flex" },
                      fixed: {
                        enabled: !1,
                        position: "topRight",
                        offsetX: 0,
                        offsetY: 0,
                      },
                    },
                    xaxis: {
                      type: "category",
                      categories: [],
                      convertedCatToNumeric: !1,
                      offsetX: 0,
                      offsetY: 0,
                      overwriteCategories: void 0,
                      labels: {
                        show: !0,
                        rotate: -45,
                        rotateAlways: !1,
                        hideOverlappingLabels: !0,
                        trim: !1,
                        minHeight: void 0,
                        maxHeight: 120,
                        showDuplicates: !0,
                        style: {
                          colors: [],
                          fontSize: "12px",
                          fontWeight: 400,
                          fontFamily: void 0,
                          cssClass: "",
                        },
                        offsetX: 0,
                        offsetY: 0,
                        format: void 0,
                        formatter: void 0,
                        datetimeUTC: !0,
                        datetimeFormatter: {
                          year: "yyyy",
                          month: "MMM 'yy",
                          day: "dd MMM",
                          hour: "HH:mm",
                          minute: "HH:mm:ss",
                          second: "HH:mm:ss",
                        },
                      },
                      group: {
                        groups: [],
                        style: {
                          colors: [],
                          fontSize: "12px",
                          fontWeight: 400,
                          fontFamily: void 0,
                          cssClass: "",
                        },
                      },
                      axisBorder: {
                        show: !0,
                        color: "#e0e0e0",
                        width: "100%",
                        height: 1,
                        offsetX: 0,
                        offsetY: 0,
                      },
                      axisTicks: {
                        show: !0,
                        color: "#e0e0e0",
                        height: 6,
                        offsetX: 0,
                        offsetY: 0,
                      },
                      stepSize: void 0,
                      tickAmount: void 0,
                      tickPlacement: "on",
                      min: void 0,
                      max: void 0,
                      range: void 0,
                      floating: !1,
                      decimalsInFloat: void 0,
                      position: "bottom",
                      title: {
                        text: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                          color: void 0,
                          fontSize: "12px",
                          fontWeight: 900,
                          fontFamily: void 0,
                          cssClass: "",
                        },
                      },
                      crosshairs: {
                        show: !0,
                        width: 1,
                        position: "back",
                        opacity: 0.9,
                        stroke: { color: "#b6b6b6", width: 1, dashArray: 3 },
                        fill: {
                          type: "solid",
                          color: "#B1B9C4",
                          gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                          },
                        },
                        dropShadow: {
                          enabled: !1,
                          left: 0,
                          top: 0,
                          blur: 1,
                          opacity: 0.4,
                        },
                      },
                      tooltip: {
                        enabled: !0,
                        offsetY: 0,
                        formatter: void 0,
                        style: { fontSize: "12px", fontFamily: void 0 },
                      },
                    },
                    yaxis: this.yAxis,
                    theme: {
                      mode: "",
                      palette: "palette1",
                      monochrome: {
                        enabled: !1,
                        color: "#008FFB",
                        shadeTo: "light",
                        shadeIntensity: 0.65,
                      },
                    },
                  };
                },
              },
            ]),
            t
          );
        })(),
        R = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.graphics = new x(this.ctx)),
              this.w.globals.isBarHorizontal && (this.invertAxis = !0),
              (this.helpers = new C(this)),
              (this.xAxisAnnotations = new k(this)),
              (this.yAxisAnnotations = new L(this)),
              (this.pointsAnnotations = new q(this)),
              this.w.globals.isBarHorizontal &&
                this.w.config.yaxis[0].reversed &&
                (this.inversedReversedAxis = !0),
              (this.xDivision =
                this.w.globals.gridWidth / this.w.globals.dataPoints);
          }
          return (
            l(t, [
              {
                key: "drawAxesAnnotations",
                value: function () {
                  var t = this.w;
                  if (t.globals.axisCharts && t.globals.dataPoints) {
                    for (
                      var e = this.yAxisAnnotations.drawYAxisAnnotations(),
                        n = this.xAxisAnnotations.drawXAxisAnnotations(),
                        i = this.pointsAnnotations.drawPointAnnotations(),
                        r = t.config.chart.animations.enabled,
                        o = [e, n, i],
                        a = [n.node, e.node, i.node],
                        s = 0;
                      s < 3;
                      s++
                    )
                      t.globals.dom.elGraphical.add(o[s]),
                        !r ||
                          t.globals.resized ||
                          t.globals.dataChanged ||
                          ("scatter" !== t.config.chart.type &&
                            "bubble" !== t.config.chart.type &&
                            t.globals.dataPoints > 1 &&
                            a[s].classList.add("apexcharts-element-hidden")),
                        t.globals.delayedElements.push({ el: a[s], index: 0 });
                    this.helpers.annotationsBackground();
                  }
                },
              },
              {
                key: "drawImageAnnos",
                value: function () {
                  var t = this;
                  this.w.config.annotations.images.map(function (e, n) {
                    t.addImage(e, n);
                  });
                },
              },
              {
                key: "drawTextAnnos",
                value: function () {
                  var t = this;
                  this.w.config.annotations.texts.map(function (e, n) {
                    t.addText(e, n);
                  });
                },
              },
              {
                key: "addXaxisAnnotation",
                value: function (t, e, n) {
                  this.xAxisAnnotations.addXaxisAnnotation(t, e, n);
                },
              },
              {
                key: "addYaxisAnnotation",
                value: function (t, e, n) {
                  this.yAxisAnnotations.addYaxisAnnotation(t, e, n);
                },
              },
              {
                key: "addPointAnnotation",
                value: function (t, e, n) {
                  this.pointsAnnotations.addPointAnnotation(t, e, n);
                },
              },
              {
                key: "addText",
                value: function (t, e) {
                  var n = t.x,
                    i = t.y,
                    r = t.text,
                    o = t.textAnchor,
                    a = t.foreColor,
                    s = t.fontSize,
                    l = t.fontFamily,
                    c = t.fontWeight,
                    d = t.cssClass,
                    u = t.backgroundColor,
                    p = t.borderWidth,
                    h = t.strokeDashArray,
                    f = t.borderRadius,
                    b = t.borderColor,
                    m = t.appendTo,
                    g = void 0 === m ? ".apexcharts-svg" : m,
                    v = t.paddingLeft,
                    _ = void 0 === v ? 4 : v,
                    y = t.paddingRight,
                    M = void 0 === y ? 4 : y,
                    O = t.paddingBottom,
                    w = void 0 === O ? 2 : O,
                    A = t.paddingTop,
                    x = void 0 === A ? 2 : A,
                    z = this.w,
                    C = this.graphics.drawText({
                      x: n,
                      y: i,
                      text: r,
                      textAnchor: o || "start",
                      fontSize: s || "12px",
                      fontWeight: c || "regular",
                      fontFamily: l || z.config.chart.fontFamily,
                      foreColor: a || z.config.chart.foreColor,
                      cssClass: d,
                    }),
                    k = z.globals.dom.baseEl.querySelector(g);
                  k && k.appendChild(C.node);
                  var S = C.bbox();
                  if (r) {
                    var T = this.graphics.drawRect(
                      S.x - _,
                      S.y - x,
                      S.width + _ + M,
                      S.height + w + x,
                      f,
                      u || "transparent",
                      1,
                      p,
                      b,
                      h
                    );
                    k.insertBefore(T.node, C.node);
                  }
                },
              },
              {
                key: "addImage",
                value: function (t, e) {
                  var n = this.w,
                    i = t.path,
                    r = t.x,
                    o = void 0 === r ? 0 : r,
                    a = t.y,
                    s = void 0 === a ? 0 : a,
                    l = t.width,
                    c = void 0 === l ? 20 : l,
                    d = t.height,
                    u = void 0 === d ? 20 : d,
                    p = t.appendTo,
                    h = void 0 === p ? ".apexcharts-svg" : p,
                    f = n.globals.dom.Paper.image(i);
                  f.size(c, u).move(o, s);
                  var b = n.globals.dom.baseEl.querySelector(h);
                  return b && b.appendChild(f.node), f;
                },
              },
              {
                key: "addXaxisAnnotationExternal",
                value: function (t, e, n) {
                  return (
                    this.addAnnotationExternal({
                      params: t,
                      pushToMemory: e,
                      context: n,
                      type: "xaxis",
                      contextMethod: n.addXaxisAnnotation,
                    }),
                    n
                  );
                },
              },
              {
                key: "addYaxisAnnotationExternal",
                value: function (t, e, n) {
                  return (
                    this.addAnnotationExternal({
                      params: t,
                      pushToMemory: e,
                      context: n,
                      type: "yaxis",
                      contextMethod: n.addYaxisAnnotation,
                    }),
                    n
                  );
                },
              },
              {
                key: "addPointAnnotationExternal",
                value: function (t, e, n) {
                  return (
                    void 0 === this.invertAxis &&
                      (this.invertAxis = n.w.globals.isBarHorizontal),
                    this.addAnnotationExternal({
                      params: t,
                      pushToMemory: e,
                      context: n,
                      type: "point",
                      contextMethod: n.addPointAnnotation,
                    }),
                    n
                  );
                },
              },
              {
                key: "addAnnotationExternal",
                value: function (t) {
                  var e = t.params,
                    n = t.pushToMemory,
                    i = t.context,
                    r = t.type,
                    o = t.contextMethod,
                    a = i,
                    s = a.w,
                    l = s.globals.dom.baseEl.querySelector(
                      ".apexcharts-".concat(r, "-annotations")
                    ),
                    c = l.childNodes.length + 1,
                    d = new P(),
                    u = Object.assign(
                      {},
                      "xaxis" === r
                        ? d.xAxisAnnotation
                        : "yaxis" === r
                        ? d.yAxisAnnotation
                        : d.pointAnnotation
                    ),
                    p = O.extend(u, e);
                  switch (r) {
                    case "xaxis":
                      this.addXaxisAnnotation(p, l, c);
                      break;
                    case "yaxis":
                      this.addYaxisAnnotation(p, l, c);
                      break;
                    case "point":
                      this.addPointAnnotation(p, l, c);
                  }
                  var h = s.globals.dom.baseEl.querySelector(
                      ".apexcharts-"
                        .concat(r, "-annotations .apexcharts-")
                        .concat(r, "-annotation-label[rel='")
                        .concat(c, "']")
                    ),
                    f = this.helpers.addBackgroundToAnno(h, p);
                  return (
                    f && l.insertBefore(f.node, h),
                    n &&
                      s.globals.memory.methodsToExec.push({
                        context: a,
                        id: p.id ? p.id : O.randomId(),
                        method: o,
                        label: "addAnnotation",
                        params: e,
                      }),
                    i
                  );
                },
              },
              {
                key: "clearAnnotations",
                value: function (t) {
                  for (
                    var e = t.w,
                      n = e.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"
                      ),
                      i = e.globals.memory.methodsToExec.length - 1;
                    i >= 0;
                    i--
                  )
                    ("addText" !== e.globals.memory.methodsToExec[i].label &&
                      "addAnnotation" !==
                        e.globals.memory.methodsToExec[i].label) ||
                      e.globals.memory.methodsToExec.splice(i, 1);
                  (n = O.listToArray(n)),
                    Array.prototype.forEach.call(n, function (t) {
                      for (; t.firstChild; ) t.removeChild(t.firstChild);
                    });
                },
              },
              {
                key: "removeAnnotation",
                value: function (t, e) {
                  var n = t.w,
                    i = n.globals.dom.baseEl.querySelectorAll(".".concat(e));
                  i &&
                    (n.globals.memory.methodsToExec.map(function (t, i) {
                      t.id === e && n.globals.memory.methodsToExec.splice(i, 1);
                    }),
                    Array.prototype.forEach.call(i, function (t) {
                      t.parentElement.removeChild(t);
                    }));
                },
              },
            ]),
            t
          );
        })(),
        I = function (t) {
          var e,
            n = t.isTimeline,
            i = t.ctx,
            r = t.seriesIndex,
            o = t.dataPointIndex,
            a = t.y1,
            s = t.y2,
            l = t.w,
            c = l.globals.seriesRangeStart[r][o],
            d = l.globals.seriesRangeEnd[r][o],
            u = l.globals.labels[o],
            p = l.config.series[r].name ? l.config.series[r].name : "",
            h = l.globals.ttKeyFormatter,
            f = l.config.tooltip.y.title.formatter,
            b = { w: l, seriesIndex: r, dataPointIndex: o, start: c, end: d };
          "function" == typeof f && (p = f(p, b)),
            null !== (e = l.config.series[r].data[o]) &&
              void 0 !== e &&
              e.x &&
              (u = l.config.series[r].data[o].x),
            n ||
              ("datetime" === l.config.xaxis.type &&
                (u = new T(i).xLabelFormat(l.globals.ttKeyFormatter, u, u, {
                  i: void 0,
                  dateFormatter: new S(i).formatDate,
                  w: l,
                }))),
            "function" == typeof h && (u = h(u, b)),
            Number.isFinite(a) && Number.isFinite(s) && ((c = a), (d = s));
          var m = "",
            g = "",
            v = l.globals.colors[r];
          if (void 0 === l.config.tooltip.x.formatter)
            if ("datetime" === l.config.xaxis.type) {
              var _ = new S(i);
              (m = _.formatDate(_.getDate(c), l.config.tooltip.x.format)),
                (g = _.formatDate(_.getDate(d), l.config.tooltip.x.format));
            } else (m = c), (g = d);
          else
            (m = l.config.tooltip.x.formatter(c)),
              (g = l.config.tooltip.x.formatter(d));
          return {
            start: c,
            end: d,
            startVal: m,
            endVal: g,
            ylabel: u,
            color: v,
            seriesName: p,
          };
        },
        W = function (t) {
          var e = t.color,
            n = t.seriesName,
            i = t.ylabel,
            r = t.start,
            o = t.end,
            a = t.seriesIndex,
            s = t.dataPointIndex,
            l = t.ctx.tooltip.tooltipLabels.getFormatters(a);
          (r = l.yLbFormatter(r)), (o = l.yLbFormatter(o));
          var c = l.yLbFormatter(t.w.globals.series[a][s]),
            d = '<span class="value start-value">\n  '
              .concat(
                r,
                '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  '
              )
              .concat(o, "\n  </span>");
          return (
            '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' +
            e +
            '">' +
            (n || "") +
            '</span></div><div> <span class="category">' +
            i +
            ": </span> " +
            (t.w.globals.comboCharts
              ? "rangeArea" === t.w.config.series[a].type ||
                "rangeBar" === t.w.config.series[a].type
                ? d
                : "<span>".concat(c, "</span>")
              : d) +
            " </div></div>"
          );
        },
        N = (function () {
          function t(e) {
            a(this, t), (this.opts = e);
          }
          return (
            l(t, [
              {
                key: "hideYAxis",
                value: function () {
                  (this.opts.yaxis[0].show = !1),
                    (this.opts.yaxis[0].title.text = ""),
                    (this.opts.yaxis[0].axisBorder.show = !1),
                    (this.opts.yaxis[0].axisTicks.show = !1),
                    (this.opts.yaxis[0].floating = !0);
                },
              },
              {
                key: "line",
                value: function () {
                  return {
                    chart: { animations: { easing: "swing" } },
                    dataLabels: { enabled: !1 },
                    stroke: { width: 5, curve: "straight" },
                    markers: { size: 0, hover: { sizeOffset: 6 } },
                    xaxis: { crosshairs: { width: 1 } },
                  };
                },
              },
              {
                key: "sparkline",
                value: function (t) {
                  return (
                    this.hideYAxis(),
                    O.extend(t, {
                      grid: {
                        show: !1,
                        padding: { left: 0, right: 0, top: 0, bottom: 0 },
                      },
                      legend: { show: !1 },
                      xaxis: {
                        labels: { show: !1 },
                        tooltip: { enabled: !1 },
                        axisBorder: { show: !1 },
                        axisTicks: { show: !1 },
                      },
                      chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } },
                      dataLabels: { enabled: !1 },
                    })
                  );
                },
              },
              {
                key: "slope",
                value: function () {
                  return (
                    this.hideYAxis(),
                    {
                      chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } },
                      dataLabels: {
                        enabled: !0,
                        formatter: function (t, e) {
                          var n = e.w.config.series[e.seriesIndex].name;
                          return null !== t ? n + ": " + t : "";
                        },
                        background: { enabled: !1 },
                        offsetX: -5,
                      },
                      grid: {
                        xaxis: { lines: { show: !0 } },
                        yaxis: { lines: { show: !1 } },
                      },
                      xaxis: {
                        position: "top",
                        labels: { style: { fontSize: 14, fontWeight: 900 } },
                        tooltip: { enabled: !1 },
                        crosshairs: { show: !1 },
                      },
                      markers: { size: 8, hover: { sizeOffset: 1 } },
                      legend: { show: !1 },
                      tooltip: { shared: !1, intersect: !0, followCursor: !0 },
                      stroke: { width: 5, curve: "straight" },
                    }
                  );
                },
              },
              {
                key: "bar",
                value: function () {
                  return {
                    chart: { stacked: !1, animations: { easing: "swing" } },
                    plotOptions: {
                      bar: { dataLabels: { position: "center" } },
                    },
                    dataLabels: {
                      style: { colors: ["#fff"] },
                      background: { enabled: !1 },
                    },
                    stroke: { width: 0, lineCap: "round" },
                    fill: { opacity: 0.85 },
                    legend: { markers: { shape: "square" } },
                    tooltip: { shared: !1, intersect: !0 },
                    xaxis: {
                      tooltip: { enabled: !1 },
                      tickPlacement: "between",
                      crosshairs: {
                        width: "barWidth",
                        position: "back",
                        fill: { type: "gradient" },
                        dropShadow: { enabled: !1 },
                        stroke: { width: 0 },
                      },
                    },
                  };
                },
              },
              {
                key: "funnel",
                value: function () {
                  return (
                    this.hideYAxis(),
                    b(
                      b({}, this.bar()),
                      {},
                      {
                        chart: {
                          animations: {
                            easing: "linear",
                            speed: 800,
                            animateGradually: { enabled: !1 },
                          },
                        },
                        plotOptions: {
                          bar: {
                            horizontal: !0,
                            borderRadiusApplication: "around",
                            borderRadius: 0,
                            dataLabels: { position: "center" },
                          },
                        },
                        grid: { show: !1, padding: { left: 0, right: 0 } },
                        xaxis: {
                          labels: { show: !1 },
                          tooltip: { enabled: !1 },
                          axisBorder: { show: !1 },
                          axisTicks: { show: !1 },
                        },
                      }
                    )
                  );
                },
              },
              {
                key: "candlestick",
                value: function () {
                  var t = this;
                  return {
                    stroke: { width: 1, colors: ["#333"] },
                    fill: { opacity: 1 },
                    dataLabels: { enabled: !1 },
                    tooltip: {
                      shared: !0,
                      custom: function (e) {
                        var n = e.seriesIndex,
                          i = e.dataPointIndex,
                          r = e.w;
                        return t._getBoxTooltip(
                          r,
                          n,
                          i,
                          ["Open", "High", "", "Low", "Close"],
                          "candlestick"
                        );
                      },
                    },
                    states: { active: { filter: { type: "none" } } },
                    xaxis: { crosshairs: { width: 1 } },
                  };
                },
              },
              {
                key: "boxPlot",
                value: function () {
                  var t = this;
                  return {
                    chart: {
                      animations: { dynamicAnimation: { enabled: !1 } },
                    },
                    stroke: { width: 1, colors: ["#24292e"] },
                    dataLabels: { enabled: !1 },
                    tooltip: {
                      shared: !0,
                      custom: function (e) {
                        var n = e.seriesIndex,
                          i = e.dataPointIndex,
                          r = e.w;
                        return t._getBoxTooltip(
                          r,
                          n,
                          i,
                          ["Minimum", "Q1", "Median", "Q3", "Maximum"],
                          "boxPlot"
                        );
                      },
                    },
                    markers: { size: 7, strokeWidth: 1, strokeColors: "#111" },
                    xaxis: { crosshairs: { width: 1 } },
                  };
                },
              },
              {
                key: "rangeBar",
                value: function () {
                  return {
                    chart: { animations: { animateGradually: !1 } },
                    stroke: { width: 0, lineCap: "square" },
                    plotOptions: {
                      bar: {
                        borderRadius: 0,
                        dataLabels: { position: "center" },
                      },
                    },
                    dataLabels: {
                      enabled: !1,
                      formatter: function (t, e) {
                        e.ctx;
                        var n = e.seriesIndex,
                          i = e.dataPointIndex,
                          r = e.w,
                          o = function () {
                            var t = r.globals.seriesRangeStart[n][i];
                            return r.globals.seriesRangeEnd[n][i] - t;
                          };
                        return r.globals.comboCharts
                          ? "rangeBar" === r.config.series[n].type ||
                            "rangeArea" === r.config.series[n].type
                            ? o()
                            : t
                          : o();
                      },
                      background: { enabled: !1 },
                      style: { colors: ["#fff"] },
                    },
                    markers: { size: 10 },
                    tooltip: {
                      shared: !1,
                      followCursor: !0,
                      custom: function (t) {
                        return t.w.config.plotOptions &&
                          t.w.config.plotOptions.bar &&
                          t.w.config.plotOptions.bar.horizontal
                          ? (function (t) {
                              var e = I(b(b({}, t), {}, { isTimeline: !0 })),
                                n = e.color,
                                i = e.seriesName,
                                r = e.ylabel,
                                o = e.startVal,
                                a = e.endVal;
                              return W(
                                b(
                                  b({}, t),
                                  {},
                                  {
                                    color: n,
                                    seriesName: i,
                                    ylabel: r,
                                    start: o,
                                    end: a,
                                  }
                                )
                              );
                            })(t)
                          : (function (t) {
                              var e = I(t),
                                n = e.color,
                                i = e.seriesName,
                                r = e.ylabel,
                                o = e.start,
                                a = e.end;
                              return W(
                                b(
                                  b({}, t),
                                  {},
                                  {
                                    color: n,
                                    seriesName: i,
                                    ylabel: r,
                                    start: o,
                                    end: a,
                                  }
                                )
                              );
                            })(t);
                      },
                    },
                    xaxis: {
                      tickPlacement: "between",
                      tooltip: { enabled: !1 },
                      crosshairs: { stroke: { width: 0 } },
                    },
                  };
                },
              },
              {
                key: "dumbbell",
                value: function (t) {
                  var e, n;
                  return (
                    (null !== (e = t.plotOptions.bar) &&
                      void 0 !== e &&
                      e.barHeight) ||
                      (t.plotOptions.bar.barHeight = 2),
                    (null !== (n = t.plotOptions.bar) &&
                      void 0 !== n &&
                      n.columnWidth) ||
                      (t.plotOptions.bar.columnWidth = 2),
                    t
                  );
                },
              },
              {
                key: "area",
                value: function () {
                  return {
                    stroke: {
                      width: 4,
                      fill: {
                        type: "solid",
                        gradient: {
                          inverseColors: !1,
                          shade: "light",
                          type: "vertical",
                          opacityFrom: 0.65,
                          opacityTo: 0.5,
                          stops: [0, 100, 100],
                        },
                      },
                    },
                    fill: {
                      type: "gradient",
                      gradient: {
                        inverseColors: !1,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.65,
                        opacityTo: 0.5,
                        stops: [0, 100, 100],
                      },
                    },
                    markers: { size: 0, hover: { sizeOffset: 6 } },
                    tooltip: { followCursor: !1 },
                  };
                },
              },
              {
                key: "rangeArea",
                value: function () {
                  return {
                    stroke: { curve: "straight", width: 0 },
                    fill: { type: "solid", opacity: 0.6 },
                    markers: { size: 0 },
                    states: {
                      hover: { filter: { type: "none" } },
                      active: { filter: { type: "none" } },
                    },
                    tooltip: {
                      intersect: !1,
                      shared: !0,
                      followCursor: !0,
                      custom: function (t) {
                        return (function (t) {
                          var e = I(t),
                            n = e.color,
                            i = e.seriesName,
                            r = e.ylabel,
                            o = e.start,
                            a = e.end;
                          return W(
                            b(
                              b({}, t),
                              {},
                              {
                                color: n,
                                seriesName: i,
                                ylabel: r,
                                start: o,
                                end: a,
                              }
                            )
                          );
                        })(t);
                      },
                    },
                  };
                },
              },
              {
                key: "brush",
                value: function (t) {
                  return O.extend(t, {
                    chart: {
                      toolbar: { autoSelected: "selection", show: !1 },
                      zoom: { enabled: !1 },
                    },
                    dataLabels: { enabled: !1 },
                    stroke: { width: 1 },
                    tooltip: { enabled: !1 },
                    xaxis: { tooltip: { enabled: !1 } },
                  });
                },
              },
              {
                key: "stacked100",
                value: function (t) {
                  (t.dataLabels = t.dataLabels || {}),
                    (t.dataLabels.formatter = t.dataLabels.formatter || void 0);
                  var e = t.dataLabels.formatter;
                  return (
                    t.yaxis.forEach(function (e, n) {
                      (t.yaxis[n].min = 0), (t.yaxis[n].max = 100);
                    }),
                    "bar" === t.chart.type &&
                      (t.dataLabels.formatter =
                        e ||
                        function (t) {
                          return "number" == typeof t && t
                            ? t.toFixed(0) + "%"
                            : t;
                        }),
                    t
                  );
                },
              },
              {
                key: "stackedBars",
                value: function () {
                  var t = this.bar();
                  return b(
                    b({}, t),
                    {},
                    {
                      plotOptions: b(
                        b({}, t.plotOptions),
                        {},
                        {
                          bar: b(
                            b({}, t.plotOptions.bar),
                            {},
                            {
                              borderRadiusApplication: "end",
                              borderRadiusWhenStacked: "last",
                            }
                          ),
                        }
                      ),
                    }
                  );
                },
              },
              {
                key: "convertCatToNumeric",
                value: function (t) {
                  return (t.xaxis.convertedCatToNumeric = !0), t;
                },
              },
              {
                key: "convertCatToNumericXaxis",
                value: function (t, e, n) {
                  (t.xaxis.type = "numeric"),
                    (t.xaxis.labels = t.xaxis.labels || {}),
                    (t.xaxis.labels.formatter =
                      t.xaxis.labels.formatter ||
                      function (t) {
                        return O.isNumber(t) ? Math.floor(t) : t;
                      });
                  var i = t.xaxis.labels.formatter,
                    r =
                      t.xaxis.categories && t.xaxis.categories.length
                        ? t.xaxis.categories
                        : t.labels;
                  return (
                    n &&
                      n.length &&
                      (r = n.map(function (t) {
                        return Array.isArray(t) ? t : String(t);
                      })),
                    r &&
                      r.length &&
                      (t.xaxis.labels.formatter = function (t) {
                        return O.isNumber(t) ? i(r[Math.floor(t) - 1]) : i(t);
                      }),
                    (t.xaxis.categories = []),
                    (t.labels = []),
                    (t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints"),
                    t
                  );
                },
              },
              {
                key: "bubble",
                value: function () {
                  return {
                    dataLabels: { style: { colors: ["#fff"] } },
                    tooltip: { shared: !1, intersect: !0 },
                    xaxis: { crosshairs: { width: 0 } },
                    fill: {
                      type: "solid",
                      gradient: {
                        shade: "light",
                        inverse: !0,
                        shadeIntensity: 0.55,
                        opacityFrom: 0.4,
                        opacityTo: 0.8,
                      },
                    },
                  };
                },
              },
              {
                key: "scatter",
                value: function () {
                  return {
                    dataLabels: { enabled: !1 },
                    tooltip: { shared: !1, intersect: !0 },
                    markers: {
                      size: 6,
                      strokeWidth: 1,
                      hover: { sizeOffset: 2 },
                    },
                  };
                },
              },
              {
                key: "heatmap",
                value: function () {
                  return {
                    chart: { stacked: !1 },
                    fill: { opacity: 1 },
                    dataLabels: { style: { colors: ["#fff"] } },
                    stroke: { colors: ["#fff"] },
                    tooltip: {
                      followCursor: !0,
                      marker: { show: !1 },
                      x: { show: !1 },
                    },
                    legend: { position: "top", markers: { shape: "square" } },
                    grid: { padding: { right: 20 } },
                  };
                },
              },
              {
                key: "treemap",
                value: function () {
                  return {
                    chart: { zoom: { enabled: !1 } },
                    dataLabels: {
                      style: {
                        fontSize: 14,
                        fontWeight: 600,
                        colors: ["#fff"],
                      },
                    },
                    stroke: { show: !0, width: 2, colors: ["#fff"] },
                    legend: { show: !1 },
                    fill: { opacity: 1, gradient: { stops: [0, 100] } },
                    tooltip: { followCursor: !0, x: { show: !1 } },
                    grid: { padding: { left: 0, right: 0 } },
                    xaxis: {
                      crosshairs: { show: !1 },
                      tooltip: { enabled: !1 },
                    },
                  };
                },
              },
              {
                key: "pie",
                value: function () {
                  return {
                    chart: { toolbar: { show: !1 } },
                    plotOptions: { pie: { donut: { labels: { show: !1 } } } },
                    dataLabels: {
                      formatter: function (t) {
                        return t.toFixed(1) + "%";
                      },
                      style: { colors: ["#fff"] },
                      background: { enabled: !1 },
                      dropShadow: { enabled: !0 },
                    },
                    stroke: { colors: ["#fff"] },
                    fill: {
                      opacity: 1,
                      gradient: { shade: "light", stops: [0, 100] },
                    },
                    tooltip: { theme: "dark", fillSeriesColor: !0 },
                    legend: { position: "right" },
                    grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                  };
                },
              },
              {
                key: "donut",
                value: function () {
                  return {
                    chart: { toolbar: { show: !1 } },
                    dataLabels: {
                      formatter: function (t) {
                        return t.toFixed(1) + "%";
                      },
                      style: { colors: ["#fff"] },
                      background: { enabled: !1 },
                      dropShadow: { enabled: !0 },
                    },
                    stroke: { colors: ["#fff"] },
                    fill: {
                      opacity: 1,
                      gradient: {
                        shade: "light",
                        shadeIntensity: 0.35,
                        stops: [80, 100],
                        opacityFrom: 1,
                        opacityTo: 1,
                      },
                    },
                    tooltip: { theme: "dark", fillSeriesColor: !0 },
                    legend: { position: "right" },
                    grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                  };
                },
              },
              {
                key: "polarArea",
                value: function () {
                  return {
                    chart: { toolbar: { show: !1 } },
                    dataLabels: {
                      formatter: function (t) {
                        return t.toFixed(1) + "%";
                      },
                      enabled: !1,
                    },
                    stroke: { show: !0, width: 2 },
                    fill: { opacity: 0.7 },
                    tooltip: { theme: "dark", fillSeriesColor: !0 },
                    legend: { position: "right" },
                    grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                  };
                },
              },
              {
                key: "radar",
                value: function () {
                  return (
                    (this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0]
                      .labels.offsetY
                      ? this.opts.yaxis[0].labels.offsetY
                      : 6),
                    {
                      dataLabels: { enabled: !1, style: { fontSize: "11px" } },
                      stroke: { width: 2 },
                      markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 },
                      fill: { opacity: 0.2 },
                      tooltip: { shared: !1, intersect: !0, followCursor: !0 },
                      grid: {
                        show: !1,
                        padding: { left: 0, right: 0, top: 0, bottom: 0 },
                      },
                      xaxis: {
                        labels: {
                          formatter: function (t) {
                            return t;
                          },
                          style: { colors: ["#a8a8a8"], fontSize: "11px" },
                        },
                        tooltip: { enabled: !1 },
                        crosshairs: { show: !1 },
                      },
                    }
                  );
                },
              },
              {
                key: "radialBar",
                value: function () {
                  return {
                    chart: {
                      animations: {
                        dynamicAnimation: { enabled: !0, speed: 800 },
                      },
                      toolbar: { show: !1 },
                    },
                    fill: {
                      gradient: {
                        shade: "dark",
                        shadeIntensity: 0.4,
                        inverseColors: !1,
                        type: "diagonal2",
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [70, 98, 100],
                      },
                    },
                    legend: { show: !1, position: "right" },
                    tooltip: { enabled: !1, fillSeriesColor: !0 },
                    grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                  };
                },
              },
              {
                key: "_getBoxTooltip",
                value: function (t, e, n, i, r) {
                  var o = t.globals.seriesCandleO[e][n],
                    a = t.globals.seriesCandleH[e][n],
                    s = t.globals.seriesCandleM[e][n],
                    l = t.globals.seriesCandleL[e][n],
                    c = t.globals.seriesCandleC[e][n];
                  return t.config.series[e].type &&
                    t.config.series[e].type !== r
                    ? '<div class="apexcharts-custom-tooltip">\n          '
                        .concat(
                          t.config.series[e].name
                            ? t.config.series[e].name
                            : "series-" + (e + 1),
                          ": <strong>"
                        )
                        .concat(
                          t.globals.series[e][n],
                          "</strong>\n        </div>"
                        )
                    : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(
                        t.config.chart.type,
                        '">'
                      ) +
                        "<div>".concat(i[0], ': <span class="value">') +
                        o +
                        "</span></div>" +
                        "<div>".concat(i[1], ': <span class="value">') +
                        a +
                        "</span></div>" +
                        (s
                          ? "<div>".concat(i[2], ': <span class="value">') +
                            s +
                            "</span></div>"
                          : "") +
                        "<div>".concat(i[3], ': <span class="value">') +
                        l +
                        "</span></div>" +
                        "<div>".concat(i[4], ': <span class="value">') +
                        c +
                        "</span></div></div>";
                },
              },
            ]),
            t
          );
        })(),
        B = (function () {
          function t(e) {
            a(this, t), (this.opts = e);
          }
          return (
            l(t, [
              {
                key: "init",
                value: function (t) {
                  var e = t.responsiveOverride,
                    n = this.opts,
                    i = new P(),
                    r = new N(n);
                  (this.chartType = n.chart.type),
                    (n = this.extendYAxis(n)),
                    (n = this.extendAnnotations(n));
                  var o = i.init(),
                    a = {};
                  if (n && "object" === y(n)) {
                    var s,
                      l,
                      c,
                      d,
                      u,
                      p,
                      h,
                      f,
                      b,
                      m,
                      g = {};
                    (g =
                      -1 !==
                      [
                        "line",
                        "area",
                        "bar",
                        "candlestick",
                        "boxPlot",
                        "rangeBar",
                        "rangeArea",
                        "bubble",
                        "scatter",
                        "heatmap",
                        "treemap",
                        "pie",
                        "polarArea",
                        "donut",
                        "radar",
                        "radialBar",
                      ].indexOf(n.chart.type)
                        ? r[n.chart.type]()
                        : r.line()),
                      null !== (s = n.plotOptions) &&
                        void 0 !== s &&
                        null !== (l = s.bar) &&
                        void 0 !== l &&
                        l.isFunnel &&
                        (g = r.funnel()),
                      n.chart.stacked &&
                        "bar" === n.chart.type &&
                        (g = r.stackedBars()),
                      null !== (c = n.chart.brush) &&
                        void 0 !== c &&
                        c.enabled &&
                        (g = r.brush(g)),
                      null !== (d = n.plotOptions) &&
                        void 0 !== d &&
                        null !== (u = d.line) &&
                        void 0 !== u &&
                        u.isSlopeChart &&
                        (g = r.slope()),
                      n.chart.stacked &&
                        "100%" === n.chart.stackType &&
                        (n = r.stacked100(n)),
                      null !== (p = n.plotOptions) &&
                        void 0 !== p &&
                        null !== (h = p.bar) &&
                        void 0 !== h &&
                        h.isDumbbell &&
                        (n = r.dumbbell(n)),
                      this.checkForDarkTheme(window.Apex),
                      this.checkForDarkTheme(n),
                      (n.xaxis = n.xaxis || window.Apex.xaxis || {}),
                      e || (n.xaxis.convertedCatToNumeric = !1),
                      ((null !==
                        (f = (n = this.checkForCatToNumericXAxis(
                          this.chartType,
                          g,
                          n
                        )).chart.sparkline) &&
                        void 0 !== f &&
                        f.enabled) ||
                        (null !== (b = window.Apex.chart) &&
                          void 0 !== b &&
                          null !== (m = b.sparkline) &&
                          void 0 !== m &&
                          m.enabled)) &&
                        (g = r.sparkline(g)),
                      (a = O.extend(o, g));
                  }
                  var v = O.extend(a, window.Apex);
                  return (o = O.extend(v, n)), this.handleUserInputErrors(o);
                },
              },
              {
                key: "checkForCatToNumericXAxis",
                value: function (t, e, n) {
                  var i,
                    r,
                    o = new N(n),
                    a =
                      ("bar" === t || "boxPlot" === t) &&
                      (null === (i = n.plotOptions) ||
                      void 0 === i ||
                      null === (r = i.bar) ||
                      void 0 === r
                        ? void 0
                        : r.horizontal),
                    s =
                      "pie" === t ||
                      "polarArea" === t ||
                      "donut" === t ||
                      "radar" === t ||
                      "radialBar" === t ||
                      "heatmap" === t,
                    l =
                      "datetime" !== n.xaxis.type && "numeric" !== n.xaxis.type,
                    c = n.xaxis.tickPlacement
                      ? n.xaxis.tickPlacement
                      : e.xaxis && e.xaxis.tickPlacement;
                  return (
                    a ||
                      s ||
                      !l ||
                      "between" === c ||
                      (n = o.convertCatToNumeric(n)),
                    n
                  );
                },
              },
              {
                key: "extendYAxis",
                value: function (t, e) {
                  var n = new P();
                  (void 0 === t.yaxis ||
                    !t.yaxis ||
                    (Array.isArray(t.yaxis) && 0 === t.yaxis.length)) &&
                    (t.yaxis = {}),
                    t.yaxis.constructor !== Array &&
                      window.Apex.yaxis &&
                      window.Apex.yaxis.constructor !== Array &&
                      (t.yaxis = O.extend(t.yaxis, window.Apex.yaxis)),
                    t.yaxis.constructor !== Array
                      ? (t.yaxis = [O.extend(n.yAxis, t.yaxis)])
                      : (t.yaxis = O.extendArray(t.yaxis, n.yAxis));
                  var i = !1;
                  t.yaxis.forEach(function (t) {
                    t.logarithmic && (i = !0);
                  });
                  var r = t.series;
                  return (
                    e && !r && (r = e.config.series),
                    i &&
                      r.length !== t.yaxis.length &&
                      r.length &&
                      (t.yaxis = r.map(function (e, i) {
                        if (
                          (e.name || (r[i].name = "series-".concat(i + 1)),
                          t.yaxis[i])
                        )
                          return (
                            (t.yaxis[i].seriesName = r[i].name), t.yaxis[i]
                          );
                        var o = O.extend(n.yAxis, t.yaxis[0]);
                        return (o.show = !1), o;
                      })),
                    i && r.length > 1 && (r.length, t.yaxis.length),
                    t
                  );
                },
              },
              {
                key: "extendAnnotations",
                value: function (t) {
                  return (
                    void 0 === t.annotations &&
                      ((t.annotations = {}),
                      (t.annotations.yaxis = []),
                      (t.annotations.xaxis = []),
                      (t.annotations.points = [])),
                    (t = this.extendYAxisAnnotations(t)),
                    (t = this.extendXAxisAnnotations(t)),
                    this.extendPointAnnotations(t)
                  );
                },
              },
              {
                key: "extendYAxisAnnotations",
                value: function (t) {
                  var e = new P();
                  return (
                    (t.annotations.yaxis = O.extendArray(
                      void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [],
                      e.yAxisAnnotation
                    )),
                    t
                  );
                },
              },
              {
                key: "extendXAxisAnnotations",
                value: function (t) {
                  var e = new P();
                  return (
                    (t.annotations.xaxis = O.extendArray(
                      void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [],
                      e.xAxisAnnotation
                    )),
                    t
                  );
                },
              },
              {
                key: "extendPointAnnotations",
                value: function (t) {
                  var e = new P();
                  return (
                    (t.annotations.points = O.extendArray(
                      void 0 !== t.annotations.points
                        ? t.annotations.points
                        : [],
                      e.pointAnnotation
                    )),
                    t
                  );
                },
              },
              {
                key: "checkForDarkTheme",
                value: function (t) {
                  t.theme &&
                    "dark" === t.theme.mode &&
                    (t.tooltip || (t.tooltip = {}),
                    "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"),
                    t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"),
                    t.theme.palette || (t.theme.palette = "palette4"));
                },
              },
              {
                key: "handleUserInputErrors",
                value: function (t) {
                  var e = t;
                  if (e.tooltip.shared && e.tooltip.intersect)
                    throw new Error(
                      "tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false."
                    );
                  if ("bar" === e.chart.type && e.plotOptions.bar.horizontal) {
                    if (e.yaxis.length > 1)
                      throw new Error(
                        "Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false"
                      );
                    e.yaxis[0].reversed && (e.yaxis[0].opposite = !0),
                      (e.xaxis.tooltip.enabled = !1),
                      (e.yaxis[0].tooltip.enabled = !1),
                      (e.chart.zoom.enabled = !1);
                  }
                  return (
                    ("bar" !== e.chart.type && "rangeBar" !== e.chart.type) ||
                      (e.tooltip.shared &&
                        "barWidth" === e.xaxis.crosshairs.width &&
                        e.series.length > 1 &&
                        (e.xaxis.crosshairs.width = "tickWidth")),
                    ("candlestick" !== e.chart.type &&
                      "boxPlot" !== e.chart.type) ||
                      (e.yaxis[0].reversed && (e.yaxis[0].reversed = !1)),
                    e
                  );
                },
              },
            ]),
            t
          );
        })(),
        F = (function () {
          function t() {
            a(this, t);
          }
          return (
            l(t, [
              {
                key: "initGlobalVars",
                value: function (t) {
                  (t.series = []),
                    (t.seriesCandleO = []),
                    (t.seriesCandleH = []),
                    (t.seriesCandleM = []),
                    (t.seriesCandleL = []),
                    (t.seriesCandleC = []),
                    (t.seriesRangeStart = []),
                    (t.seriesRangeEnd = []),
                    (t.seriesRange = []),
                    (t.seriesPercent = []),
                    (t.seriesGoals = []),
                    (t.seriesX = []),
                    (t.seriesZ = []),
                    (t.seriesNames = []),
                    (t.seriesTotals = []),
                    (t.seriesLog = []),
                    (t.seriesColors = []),
                    (t.stackedSeriesTotals = []),
                    (t.seriesXvalues = []),
                    (t.seriesYvalues = []),
                    (t.labels = []),
                    (t.hasXaxisGroups = !1),
                    (t.groups = []),
                    (t.barGroups = []),
                    (t.lineGroups = []),
                    (t.areaGroups = []),
                    (t.hasSeriesGroups = !1),
                    (t.seriesGroups = []),
                    (t.categoryLabels = []),
                    (t.timescaleLabels = []),
                    (t.noLabelsProvided = !1),
                    (t.resizeTimer = null),
                    (t.selectionResizeTimer = null),
                    (t.lastWheelExecution = 0),
                    (t.delayedElements = []),
                    (t.pointsArray = []),
                    (t.dataLabelsRects = []),
                    (t.isXNumeric = !1),
                    (t.skipLastTimelinelabel = !1),
                    (t.skipFirstTimelinelabel = !1),
                    (t.isDataXYZ = !1),
                    (t.isMultiLineX = !1),
                    (t.isMultipleYAxis = !1),
                    (t.maxY = -Number.MAX_VALUE),
                    (t.minY = Number.MIN_VALUE),
                    (t.minYArr = []),
                    (t.maxYArr = []),
                    (t.maxX = -Number.MAX_VALUE),
                    (t.minX = Number.MAX_VALUE),
                    (t.initialMaxX = -Number.MAX_VALUE),
                    (t.initialMinX = Number.MAX_VALUE),
                    (t.maxDate = 0),
                    (t.minDate = Number.MAX_VALUE),
                    (t.minZ = Number.MAX_VALUE),
                    (t.maxZ = -Number.MAX_VALUE),
                    (t.minXDiff = Number.MAX_VALUE),
                    (t.yAxisScale = []),
                    (t.xAxisScale = null),
                    (t.xAxisTicksPositions = []),
                    (t.yLabelsCoords = []),
                    (t.yTitleCoords = []),
                    (t.barPadForNumericAxis = 0),
                    (t.padHorizontal = 0),
                    (t.xRange = 0),
                    (t.yRange = []),
                    (t.zRange = 0),
                    (t.dataPoints = 0),
                    (t.xTickAmount = 0),
                    (t.multiAxisTickAmount = 0);
                },
              },
              {
                key: "globalVars",
                value: function (t) {
                  return {
                    chartID: null,
                    cuid: null,
                    events: {
                      beforeMount: [],
                      mounted: [],
                      updated: [],
                      clicked: [],
                      selection: [],
                      dataPointSelection: [],
                      zoomed: [],
                      scrolled: [],
                    },
                    colors: [],
                    clientX: null,
                    clientY: null,
                    fill: { colors: [] },
                    stroke: { colors: [] },
                    dataLabels: { style: { colors: [] } },
                    radarPolygons: { fill: { colors: [] } },
                    markers: {
                      colors: [],
                      size: t.markers.size,
                      largestSize: 0,
                    },
                    animationEnded: !1,
                    isTouchDevice:
                      "ontouchstart" in window || navigator.msMaxTouchPoints,
                    isDirty: !1,
                    isExecCalled: !1,
                    initialConfig: null,
                    initialSeries: [],
                    lastXAxis: [],
                    lastYAxis: [],
                    columnSeries: null,
                    labels: [],
                    timescaleLabels: [],
                    noLabelsProvided: !1,
                    allSeriesCollapsed: !1,
                    collapsedSeries: [],
                    collapsedSeriesIndices: [],
                    ancillaryCollapsedSeries: [],
                    ancillaryCollapsedSeriesIndices: [],
                    risingSeries: [],
                    dataFormatXNumeric: !1,
                    capturedSeriesIndex: -1,
                    capturedDataPointIndex: -1,
                    selectedDataPoints: [],
                    invalidLogScale: !1,
                    ignoreYAxisIndexes: [],
                    maxValsInArrayIndex: 0,
                    radialSize: 0,
                    selection: void 0,
                    zoomEnabled:
                      "zoom" === t.chart.toolbar.autoSelected &&
                      t.chart.toolbar.tools.zoom &&
                      t.chart.zoom.enabled,
                    panEnabled:
                      "pan" === t.chart.toolbar.autoSelected &&
                      t.chart.toolbar.tools.pan,
                    selectionEnabled:
                      "selection" === t.chart.toolbar.autoSelected &&
                      t.chart.toolbar.tools.selection,
                    yaxis: null,
                    mousedown: !1,
                    lastClientPosition: {},
                    visibleXRange: void 0,
                    yValueDecimal: 0,
                    total: 0,
                    SVGNS: "http://www.w3.org/2000/svg",
                    svgWidth: 0,
                    svgHeight: 0,
                    noData: !1,
                    locale: {},
                    dom: {},
                    memory: { methodsToExec: [] },
                    shouldAnimate: !0,
                    skipLastTimelinelabel: !1,
                    skipFirstTimelinelabel: !1,
                    delayedElements: [],
                    axisCharts: !0,
                    isDataXYZ: !1,
                    isSlopeChart: t.plotOptions.line.isSlopeChart,
                    resized: !1,
                    resizeTimer: null,
                    comboCharts: !1,
                    dataChanged: !1,
                    previousPaths: [],
                    allSeriesHasEqualX: !0,
                    pointsArray: [],
                    dataLabelsRects: [],
                    lastDrawnDataLabelsIndexes: [],
                    hasNullValues: !1,
                    easing: null,
                    zoomed: !1,
                    gridWidth: 0,
                    gridHeight: 0,
                    rotateXLabels: !1,
                    defaultLabels: !1,
                    xLabelFormatter: void 0,
                    yLabelFormatters: [],
                    xaxisTooltipFormatter: void 0,
                    ttKeyFormatter: void 0,
                    ttVal: void 0,
                    ttZFormatter: void 0,
                    LINE_HEIGHT_RATIO: 1.618,
                    xAxisLabelsHeight: 0,
                    xAxisGroupLabelsHeight: 0,
                    xAxisLabelsWidth: 0,
                    yAxisLabelsWidth: 0,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0,
                    translateY: 0,
                    translateYAxisX: [],
                    yAxisWidths: [],
                    translateXAxisY: 0,
                    translateXAxisX: 0,
                    tooltip: null,
                    niceScaleAllowedMagMsd: [
                      [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10],
                      [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10],
                    ],
                    niceScaleDefaultTicks: [
                      1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12,
                      12, 12, 12, 12, 12, 12, 12, 12, 24,
                    ],
                    seriesYAxisMap: [],
                    seriesYAxisReverseMap: [],
                  };
                },
              },
              {
                key: "init",
                value: function (t) {
                  var e = this.globalVars(t);
                  return (
                    this.initGlobalVars(e),
                    (e.initialConfig = O.extend({}, t)),
                    (e.initialSeries = O.clone(t.series)),
                    (e.lastXAxis = O.clone(e.initialConfig.xaxis)),
                    (e.lastYAxis = O.clone(e.initialConfig.yaxis)),
                    e
                  );
                },
              },
            ]),
            t
          );
        })(),
        $ = (function () {
          function t(e) {
            a(this, t), (this.opts = e);
          }
          return (
            l(t, [
              {
                key: "init",
                value: function () {
                  var t = new B(this.opts).init({ responsiveOverride: !1 });
                  return { config: t, globals: new F().init(t) };
                },
              },
            ]),
            t
          );
        })(),
        H = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.opts = null),
              (this.seriesIndex = 0),
              (this.patternIDs = []);
          }
          return (
            l(t, [
              {
                key: "clippedImgArea",
                value: function (t) {
                  var e = this.w,
                    n = e.config,
                    i = parseInt(e.globals.gridWidth, 10),
                    r = parseInt(e.globals.gridHeight, 10),
                    o = i > r ? i : r,
                    a = t.image,
                    s = 0,
                    l = 0;
                  void 0 === t.width && void 0 === t.height
                    ? void 0 !== n.fill.image.width &&
                      void 0 !== n.fill.image.height
                      ? ((s = n.fill.image.width + 1),
                        (l = n.fill.image.height))
                      : ((s = o + 1), (l = o))
                    : ((s = t.width), (l = t.height));
                  var c = document.createElementNS(e.globals.SVGNS, "pattern");
                  x.setAttrs(c, {
                    id: t.patternID,
                    patternUnits: t.patternUnits
                      ? t.patternUnits
                      : "userSpaceOnUse",
                    width: s + "px",
                    height: l + "px",
                  });
                  var d = document.createElementNS(e.globals.SVGNS, "image");
                  c.appendChild(d),
                    d.setAttributeNS(window.SVG.xlink, "href", a),
                    x.setAttrs(d, {
                      x: 0,
                      y: 0,
                      preserveAspectRatio: "none",
                      width: s + "px",
                      height: l + "px",
                    }),
                    (d.style.opacity = t.opacity),
                    e.globals.dom.elDefs.node.appendChild(c);
                },
              },
              {
                key: "getSeriesIndex",
                value: function (t) {
                  var e = this.w,
                    n = e.config.chart.type;
                  return (
                    (("bar" === n || "rangeBar" === n) &&
                      e.config.plotOptions.bar.distributed) ||
                    "heatmap" === n ||
                    "treemap" === n
                      ? (this.seriesIndex = t.seriesNumber)
                      : (this.seriesIndex =
                          t.seriesNumber % e.globals.series.length),
                    this.seriesIndex
                  );
                },
              },
              {
                key: "fillPath",
                value: function (t) {
                  var e = this.w;
                  this.opts = t;
                  var n,
                    i,
                    r,
                    o = this.w.config;
                  this.seriesIndex = this.getSeriesIndex(t);
                  var a = this.getFillColors()[this.seriesIndex];
                  void 0 !== e.globals.seriesColors[this.seriesIndex] &&
                    (a = e.globals.seriesColors[this.seriesIndex]),
                    "function" == typeof a &&
                      (a = a({
                        seriesIndex: this.seriesIndex,
                        dataPointIndex: t.dataPointIndex,
                        value: t.value,
                        w: e,
                      }));
                  var s = t.fillType
                      ? t.fillType
                      : this.getFillType(this.seriesIndex),
                    l = Array.isArray(o.fill.opacity)
                      ? o.fill.opacity[this.seriesIndex]
                      : o.fill.opacity;
                  t.color && (a = t.color), a || (a = "#fff");
                  var c = a;
                  if (
                    (-1 === a.indexOf("rgb")
                      ? a.length < 9 && (c = O.hexToRgba(a, l))
                      : a.indexOf("rgba") > -1 && (l = O.getOpacityFromRGBA(a)),
                    t.opacity && (l = t.opacity),
                    "pattern" === s &&
                      (i = this.handlePatternFill({
                        fillConfig: t.fillConfig,
                        patternFill: i,
                        fillColor: a,
                        fillOpacity: l,
                        defaultColor: c,
                      })),
                    "gradient" === s &&
                      (r = this.handleGradientFill({
                        fillConfig: t.fillConfig,
                        fillColor: a,
                        fillOpacity: l,
                        i: this.seriesIndex,
                      })),
                    "image" === s)
                  ) {
                    var d = o.fill.image.src,
                      u = t.patternID ? t.patternID : "",
                      p = "pattern"
                        .concat(e.globals.cuid)
                        .concat(t.seriesNumber + 1)
                        .concat(u);
                    -1 === this.patternIDs.indexOf(p) &&
                      (this.clippedImgArea({
                        opacity: l,
                        image: Array.isArray(d)
                          ? t.seriesNumber < d.length
                            ? d[t.seriesNumber]
                            : d[0]
                          : d,
                        width: t.width ? t.width : void 0,
                        height: t.height ? t.height : void 0,
                        patternUnits: t.patternUnits,
                        patternID: p,
                      }),
                      this.patternIDs.push(p)),
                      (n = "url(#".concat(p, ")"));
                  } else n = "gradient" === s ? r : "pattern" === s ? i : c;
                  return t.solid && (n = c), n;
                },
              },
              {
                key: "getFillType",
                value: function (t) {
                  var e = this.w;
                  return Array.isArray(e.config.fill.type)
                    ? e.config.fill.type[t]
                    : e.config.fill.type;
                },
              },
              {
                key: "getFillColors",
                value: function () {
                  var t = this.w,
                    e = t.config,
                    n = this.opts,
                    i = [];
                  return (
                    t.globals.comboCharts
                      ? "line" === t.config.series[this.seriesIndex].type
                        ? Array.isArray(t.globals.stroke.colors)
                          ? (i = t.globals.stroke.colors)
                          : i.push(t.globals.stroke.colors)
                        : Array.isArray(t.globals.fill.colors)
                        ? (i = t.globals.fill.colors)
                        : i.push(t.globals.fill.colors)
                      : "line" === e.chart.type
                      ? Array.isArray(t.globals.stroke.colors)
                        ? (i = t.globals.stroke.colors)
                        : i.push(t.globals.stroke.colors)
                      : Array.isArray(t.globals.fill.colors)
                      ? (i = t.globals.fill.colors)
                      : i.push(t.globals.fill.colors),
                    void 0 !== n.fillColors &&
                      ((i = []),
                      Array.isArray(n.fillColors)
                        ? (i = n.fillColors.slice())
                        : i.push(n.fillColors)),
                    i
                  );
                },
              },
              {
                key: "handlePatternFill",
                value: function (t) {
                  var e = t.fillConfig,
                    n = (t.patternFill, t.fillColor),
                    i = t.fillOpacity,
                    r = t.defaultColor,
                    o = this.w.config.fill;
                  e && (o = e);
                  var a = this.opts,
                    s = new x(this.ctx),
                    l = Array.isArray(o.pattern.strokeWidth)
                      ? o.pattern.strokeWidth[this.seriesIndex]
                      : o.pattern.strokeWidth,
                    c = n;
                  return Array.isArray(o.pattern.style)
                    ? void 0 !== o.pattern.style[a.seriesNumber]
                      ? s.drawPattern(
                          o.pattern.style[a.seriesNumber],
                          o.pattern.width,
                          o.pattern.height,
                          c,
                          l,
                          i
                        )
                      : r
                    : s.drawPattern(
                        o.pattern.style,
                        o.pattern.width,
                        o.pattern.height,
                        c,
                        l,
                        i
                      );
                },
              },
              {
                key: "handleGradientFill",
                value: function (t) {
                  var e = t.fillColor,
                    n = t.fillOpacity,
                    i = t.fillConfig,
                    r = t.i,
                    o = this.w.config.fill;
                  i && (o = b(b({}, o), i));
                  var a,
                    s = this.opts,
                    l = new x(this.ctx),
                    c = new O(),
                    d = o.gradient.type,
                    u = e,
                    p =
                      void 0 === o.gradient.opacityFrom
                        ? n
                        : Array.isArray(o.gradient.opacityFrom)
                        ? o.gradient.opacityFrom[r]
                        : o.gradient.opacityFrom;
                  u.indexOf("rgba") > -1 && (p = O.getOpacityFromRGBA(u));
                  var h =
                    void 0 === o.gradient.opacityTo
                      ? n
                      : Array.isArray(o.gradient.opacityTo)
                      ? o.gradient.opacityTo[r]
                      : o.gradient.opacityTo;
                  if (
                    void 0 === o.gradient.gradientToColors ||
                    0 === o.gradient.gradientToColors.length
                  )
                    a =
                      "dark" === o.gradient.shade
                        ? c.shadeColor(
                            -1 * parseFloat(o.gradient.shadeIntensity),
                            e.indexOf("rgb") > -1 ? O.rgb2hex(e) : e
                          )
                        : c.shadeColor(
                            parseFloat(o.gradient.shadeIntensity),
                            e.indexOf("rgb") > -1 ? O.rgb2hex(e) : e
                          );
                  else if (o.gradient.gradientToColors[s.seriesNumber]) {
                    var f = o.gradient.gradientToColors[s.seriesNumber];
                    (a = f),
                      f.indexOf("rgba") > -1 && (h = O.getOpacityFromRGBA(f));
                  } else a = e;
                  if (
                    (o.gradient.gradientFrom && (u = o.gradient.gradientFrom),
                    o.gradient.gradientTo && (a = o.gradient.gradientTo),
                    o.gradient.inverseColors)
                  ) {
                    var m = u;
                    (u = a), (a = m);
                  }
                  return (
                    u.indexOf("rgb") > -1 && (u = O.rgb2hex(u)),
                    a.indexOf("rgb") > -1 && (a = O.rgb2hex(a)),
                    l.drawGradient(
                      d,
                      u,
                      a,
                      p,
                      h,
                      s.size,
                      o.gradient.stops,
                      o.gradient.colorStops,
                      r
                    )
                  );
                },
              },
            ]),
            t
          );
        })(),
        Y = (function () {
          function t(e, n) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "setGlobalMarkerSize",
                value: function () {
                  var t = this.w;
                  if (
                    ((t.globals.markers.size = Array.isArray(
                      t.config.markers.size
                    )
                      ? t.config.markers.size
                      : [t.config.markers.size]),
                    t.globals.markers.size.length > 0)
                  ) {
                    if (
                      t.globals.markers.size.length <
                      t.globals.series.length + 1
                    )
                      for (var e = 0; e <= t.globals.series.length; e++)
                        void 0 === t.globals.markers.size[e] &&
                          t.globals.markers.size.push(
                            t.globals.markers.size[0]
                          );
                  } else
                    t.globals.markers.size = t.config.series.map(function (e) {
                      return t.config.markers.size;
                    });
                },
              },
              {
                key: "plotChartMarkers",
                value: function (t, e, n, i) {
                  var r,
                    o =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4],
                    a = this.w,
                    s = e,
                    l = t,
                    c = null,
                    d = new x(this.ctx),
                    u =
                      a.config.markers.discrete &&
                      a.config.markers.discrete.length;
                  if (
                    ((a.globals.markers.size[e] > 0 || o || u) &&
                      (c = d.group({
                        class: o || u ? "" : "apexcharts-series-markers",
                      })).attr(
                        "clip-path",
                        "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")
                      ),
                    Array.isArray(l.x))
                  )
                    for (var p = 0; p < l.x.length; p++) {
                      var h = n;
                      1 === n && 0 === p && (h = 0),
                        1 === n && 1 === p && (h = 1);
                      var f = "apexcharts-marker";
                      if (
                        (("line" !== a.config.chart.type &&
                          "area" !== a.config.chart.type) ||
                          a.globals.comboCharts ||
                          a.config.tooltip.intersect ||
                          (f += " no-pointer-events"),
                        (Array.isArray(a.config.markers.size)
                          ? a.globals.markers.size[e] > 0
                          : a.config.markers.size > 0) ||
                          o ||
                          u)
                      ) {
                        O.isNumber(l.y[p])
                          ? (f += " w".concat(O.randomId()))
                          : (f = "apexcharts-nullpoint");
                        var b = this.getMarkerConfig({
                          cssClass: f,
                          seriesIndex: e,
                          dataPointIndex: h,
                        });
                        a.config.series[s].data[h] &&
                          (a.config.series[s].data[h].fillColor &&
                            (b.pointFillColor =
                              a.config.series[s].data[h].fillColor),
                          a.config.series[s].data[h].strokeColor &&
                            (b.pointStrokeColor =
                              a.config.series[s].data[h].strokeColor)),
                          void 0 !== i && (b.pSize = i),
                          (l.x[p] < -a.globals.markers.largestSize ||
                            l.x[p] >
                              a.globals.gridWidth +
                                a.globals.markers.largestSize ||
                            l.y[p] < -a.globals.markers.largestSize ||
                            l.y[p] >
                              a.globals.gridHeight +
                                a.globals.markers.largestSize) &&
                            (b.pSize = 0),
                          (r = d.drawMarker(l.x[p], l.y[p], b)).attr("rel", h),
                          r.attr("j", h),
                          r.attr("index", e),
                          r.node.setAttribute("default-marker-size", b.pSize),
                          new A(this.ctx).setSelectionFilter(r, e, h),
                          this.addEvents(r),
                          c && c.add(r);
                      } else
                        void 0 === a.globals.pointsArray[e] &&
                          (a.globals.pointsArray[e] = []),
                          a.globals.pointsArray[e].push([l.x[p], l.y[p]]);
                    }
                  return c;
                },
              },
              {
                key: "getMarkerConfig",
                value: function (t) {
                  var e = t.cssClass,
                    n = t.seriesIndex,
                    i = t.dataPointIndex,
                    r = void 0 === i ? null : i,
                    o = t.radius,
                    a = void 0 === o ? null : o,
                    s = t.size,
                    l = void 0 === s ? null : s,
                    c = t.strokeWidth,
                    d = void 0 === c ? null : c,
                    u = this.w,
                    p = this.getMarkerStyle(n),
                    h = null === l ? u.globals.markers.size[n] : l,
                    f = u.config.markers;
                  return (
                    null !== r &&
                      f.discrete.length &&
                      f.discrete.map(function (t) {
                        t.seriesIndex === n &&
                          t.dataPointIndex === r &&
                          ((p.pointStrokeColor = t.strokeColor),
                          (p.pointFillColor = t.fillColor),
                          (h = t.size),
                          (p.pointShape = t.shape));
                      }),
                    {
                      pSize: null === a ? h : a,
                      pRadius: null !== a ? a : f.radius,
                      pointStrokeWidth:
                        null !== d
                          ? d
                          : Array.isArray(f.strokeWidth)
                          ? f.strokeWidth[n]
                          : f.strokeWidth,
                      pointStrokeColor: p.pointStrokeColor,
                      pointFillColor: p.pointFillColor,
                      shape:
                        p.pointShape ||
                        (Array.isArray(f.shape) ? f.shape[n] : f.shape),
                      class: e,
                      pointStrokeOpacity: Array.isArray(f.strokeOpacity)
                        ? f.strokeOpacity[n]
                        : f.strokeOpacity,
                      pointStrokeDashArray: Array.isArray(f.strokeDashArray)
                        ? f.strokeDashArray[n]
                        : f.strokeDashArray,
                      pointFillOpacity: Array.isArray(f.fillOpacity)
                        ? f.fillOpacity[n]
                        : f.fillOpacity,
                      seriesIndex: n,
                    }
                  );
                },
              },
              {
                key: "addEvents",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx);
                  t.node.addEventListener(
                    "mouseenter",
                    n.pathMouseEnter.bind(this.ctx, t)
                  ),
                    t.node.addEventListener(
                      "mouseleave",
                      n.pathMouseLeave.bind(this.ctx, t)
                    ),
                    t.node.addEventListener(
                      "mousedown",
                      n.pathMouseDown.bind(this.ctx, t)
                    ),
                    t.node.addEventListener("click", e.config.markers.onClick),
                    t.node.addEventListener(
                      "dblclick",
                      e.config.markers.onDblClick
                    ),
                    t.node.addEventListener(
                      "touchstart",
                      n.pathMouseDown.bind(this.ctx, t),
                      { passive: !0 }
                    );
                },
              },
              {
                key: "getMarkerStyle",
                value: function (t) {
                  var e = this.w,
                    n = e.globals.markers.colors,
                    i =
                      e.config.markers.strokeColor ||
                      e.config.markers.strokeColors;
                  return {
                    pointStrokeColor: Array.isArray(i) ? i[t] : i,
                    pointFillColor: Array.isArray(n) ? n[t] : n,
                  };
                },
              },
            ]),
            t
          );
        })(),
        U = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.initialAnim = this.w.config.chart.animations.enabled);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t, e, n) {
                  var i = this.w,
                    r = new x(this.ctx),
                    o = n.realIndex,
                    a = n.pointsPos,
                    s = n.zRatio,
                    l = n.elParent,
                    c = r.group({
                      class:
                        "apexcharts-series-markers apexcharts-series-".concat(
                          i.config.chart.type
                        ),
                    });
                  if (
                    (c.attr(
                      "clip-path",
                      "url(#gridRectMarkerMask".concat(i.globals.cuid, ")")
                    ),
                    Array.isArray(a.x))
                  )
                    for (var d = 0; d < a.x.length; d++) {
                      var u = e + 1,
                        p = !0;
                      0 === e && 0 === d && (u = 0),
                        0 === e && 1 === d && (u = 1);
                      var h = i.globals.markers.size[o];
                      if (s !== 1 / 0) {
                        var f = i.config.plotOptions.bubble;
                        (h = i.globals.seriesZ[o][u]),
                          f.zScaling && (h /= s),
                          f.minBubbleRadius &&
                            h < f.minBubbleRadius &&
                            (h = f.minBubbleRadius),
                          f.maxBubbleRadius &&
                            h > f.maxBubbleRadius &&
                            (h = f.maxBubbleRadius);
                      }
                      var b = a.x[d],
                        m = a.y[d];
                      if (
                        ((h = h || 0),
                        (null !== m && void 0 !== i.globals.series[o][u]) ||
                          (p = !1),
                        p)
                      ) {
                        var g = this.drawPoint(b, m, h, o, u, e);
                        c.add(g);
                      }
                      l.add(c);
                    }
                },
              },
              {
                key: "drawPoint",
                value: function (t, e, n, i, r, o) {
                  var a = this.w,
                    s = i,
                    l = new w(this.ctx),
                    c = new A(this.ctx),
                    d = new H(this.ctx),
                    u = new Y(this.ctx),
                    p = new x(this.ctx),
                    h = u.getMarkerConfig({
                      cssClass: "apexcharts-marker",
                      seriesIndex: s,
                      dataPointIndex: r,
                      radius:
                        "bubble" === a.config.chart.type ||
                        (a.globals.comboCharts &&
                          a.config.series[i] &&
                          "bubble" === a.config.series[i].type)
                          ? n
                          : null,
                    }),
                    f = d.fillPath({
                      seriesNumber: i,
                      dataPointIndex: r,
                      color: h.pointFillColor,
                      patternUnits: "objectBoundingBox",
                      value: a.globals.series[i][o],
                    }),
                    b = p.drawMarker(t, e, h);
                  if (
                    (a.config.series[s].data[r] &&
                      a.config.series[s].data[r].fillColor &&
                      (f = a.config.series[s].data[r].fillColor),
                    b.attr({ fill: f }),
                    a.config.chart.dropShadow.enabled)
                  ) {
                    var m = a.config.chart.dropShadow;
                    c.dropShadow(b, m, i);
                  }
                  if (
                    !this.initialAnim ||
                    a.globals.dataChanged ||
                    a.globals.resized
                  )
                    a.globals.animationEnded = !0;
                  else {
                    var g = a.config.chart.animations.speed;
                    l.animateMarker(b, g, a.globals.easing, function () {
                      window.setTimeout(function () {
                        l.animationCompleted(b);
                      }, 100);
                    });
                  }
                  return (
                    b.attr({
                      rel: r,
                      j: r,
                      index: i,
                      "default-marker-size": h.pSize,
                    }),
                    c.setSelectionFilter(b, i, r),
                    u.addEvents(b),
                    b.node.classList.add("apexcharts-marker"),
                    b
                  );
                },
              },
              {
                key: "centerTextInBubble",
                value: function (t) {
                  var e = this.w;
                  return {
                    y: (t +=
                      parseInt(e.config.dataLabels.style.fontSize, 10) / 4),
                  };
                },
              },
            ]),
            t
          );
        })(),
        X = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "dataLabelsCorrection",
                value: function (t, e, n, i, r, o, a) {
                  var s = this.w,
                    l = !1,
                    c = new x(this.ctx).getTextRects(n, a),
                    d = c.width,
                    u = c.height;
                  e < 0 && (e = 0),
                    e > s.globals.gridHeight + u &&
                      (e = s.globals.gridHeight + u / 2),
                    void 0 === s.globals.dataLabelsRects[i] &&
                      (s.globals.dataLabelsRects[i] = []),
                    s.globals.dataLabelsRects[i].push({
                      x: t,
                      y: e,
                      width: d,
                      height: u,
                    });
                  var p = s.globals.dataLabelsRects[i].length - 2,
                    h =
                      void 0 !== s.globals.lastDrawnDataLabelsIndexes[i]
                        ? s.globals.lastDrawnDataLabelsIndexes[i][
                            s.globals.lastDrawnDataLabelsIndexes[i].length - 1
                          ]
                        : 0;
                  if (void 0 !== s.globals.dataLabelsRects[i][p]) {
                    var f = s.globals.dataLabelsRects[i][h];
                    (t > f.x + f.width ||
                      e > f.y + f.height ||
                      e + u < f.y ||
                      t + d < f.x) &&
                      (l = !0);
                  }
                  return (
                    (0 === r || o) && (l = !0),
                    { x: t, y: e, textRects: c, drawnextLabel: l }
                  );
                },
              },
              {
                key: "drawDataLabel",
                value: function (t) {
                  var e = this,
                    n = t.type,
                    i = t.pos,
                    r = t.i,
                    o = t.j,
                    a = t.isRangeStart,
                    s = t.strokeWidth,
                    l = void 0 === s ? 2 : s,
                    c = this.w,
                    d = new x(this.ctx),
                    u = c.config.dataLabels,
                    p = 0,
                    h = 0,
                    f = o,
                    b = null;
                  if (
                    -1 !== c.globals.collapsedSeriesIndices.indexOf(r) ||
                    !u.enabled ||
                    !Array.isArray(i.x)
                  )
                    return b;
                  b = d.group({ class: "apexcharts-data-labels" });
                  for (var m = 0; m < i.x.length; m++)
                    if (
                      ((p = i.x[m] + u.offsetX),
                      (h = i.y[m] + u.offsetY + l),
                      !isNaN(p))
                    ) {
                      1 === o && 0 === m && (f = 0),
                        1 === o && 1 === m && (f = 1);
                      var g = c.globals.series[r][f];
                      "rangeArea" === n &&
                        (g = a
                          ? c.globals.seriesRangeStart[r][f]
                          : c.globals.seriesRangeEnd[r][f]);
                      var v = "",
                        _ = function (t) {
                          return c.config.dataLabels.formatter(t, {
                            ctx: e.ctx,
                            seriesIndex: r,
                            dataPointIndex: f,
                            w: c,
                          });
                        };
                      "bubble" === c.config.chart.type
                        ? ((v = _((g = c.globals.seriesZ[r][f]))),
                          (h = i.y[m]),
                          (h = new U(this.ctx).centerTextInBubble(h, r, f).y))
                        : void 0 !== g && (v = _(g));
                      var y = c.config.dataLabels.textAnchor;
                      c.globals.isSlopeChart &&
                        (y =
                          0 === f
                            ? "end"
                            : f === c.config.series[r].data.length - 1
                            ? "start"
                            : "middle"),
                        this.plotDataLabelsText({
                          x: p,
                          y: h,
                          text: v,
                          i: r,
                          j: f,
                          parent: b,
                          offsetCorrection: !0,
                          dataLabelsConfig: c.config.dataLabels,
                          textAnchor: y,
                        });
                    }
                  return b;
                },
              },
              {
                key: "plotDataLabelsText",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = t.x,
                    r = t.y,
                    o = t.i,
                    a = t.j,
                    s = t.text,
                    l = t.textAnchor,
                    c = t.fontSize,
                    d = t.parent,
                    u = t.dataLabelsConfig,
                    p = t.color,
                    h = t.alwaysDrawDataLabel,
                    f = t.offsetCorrection,
                    b = t.className,
                    m = null;
                  if (
                    Array.isArray(e.config.dataLabels.enabledOnSeries) &&
                    e.config.dataLabels.enabledOnSeries.indexOf(o) < 0
                  )
                    return m;
                  var g = { x: i, y: r, drawnextLabel: !0, textRects: null };
                  f &&
                    (g = this.dataLabelsCorrection(
                      i,
                      r,
                      s,
                      o,
                      a,
                      h,
                      parseInt(u.style.fontSize, 10)
                    )),
                    e.globals.zoomed || ((i = g.x), (r = g.y)),
                    g.textRects &&
                      (i < -20 - g.textRects.width ||
                        i > e.globals.gridWidth + g.textRects.width + 30) &&
                      (s = "");
                  var v = e.globals.dataLabels.style.colors[o];
                  ((("bar" === e.config.chart.type ||
                    "rangeBar" === e.config.chart.type) &&
                    e.config.plotOptions.bar.distributed) ||
                    e.config.dataLabels.distributed) &&
                    (v = e.globals.dataLabels.style.colors[a]),
                    "function" == typeof v &&
                      (v = v({
                        series: e.globals.series,
                        seriesIndex: o,
                        dataPointIndex: a,
                        w: e,
                      })),
                    p && (v = p);
                  var _ = u.offsetX,
                    y = u.offsetY;
                  if (
                    (("bar" !== e.config.chart.type &&
                      "rangeBar" !== e.config.chart.type) ||
                      ((_ = 0), (y = 0)),
                    e.globals.isSlopeChart &&
                      (0 !== a && (_ = -2 * u.offsetX + 5),
                      0 !== a &&
                        a !== e.config.series[o].data.length - 1 &&
                        (_ = 0)),
                    g.drawnextLabel)
                  ) {
                    if (
                      ((m = n.drawText({
                        width: 100,
                        height: parseInt(u.style.fontSize, 10),
                        x: i + _,
                        y: r + y,
                        foreColor: v,
                        textAnchor: l || u.textAnchor,
                        text: s,
                        fontSize: c || u.style.fontSize,
                        fontFamily: u.style.fontFamily,
                        fontWeight: u.style.fontWeight || "normal",
                      })).attr({
                        class: b || "apexcharts-datalabel",
                        cx: i,
                        cy: r,
                      }),
                      u.dropShadow.enabled)
                    ) {
                      var M = u.dropShadow;
                      new A(this.ctx).dropShadow(m, M);
                    }
                    d.add(m),
                      void 0 === e.globals.lastDrawnDataLabelsIndexes[o] &&
                        (e.globals.lastDrawnDataLabelsIndexes[o] = []),
                      e.globals.lastDrawnDataLabelsIndexes[o].push(a);
                  }
                  return m;
                },
              },
              {
                key: "addBackgroundToDataLabel",
                value: function (t, e) {
                  var n = this.w,
                    i = n.config.dataLabels.background,
                    r = i.padding,
                    o = i.padding / 2,
                    a = e.width,
                    s = e.height,
                    l = new x(this.ctx).drawRect(
                      e.x - r,
                      e.y - o / 2,
                      a + 2 * r,
                      s + o,
                      i.borderRadius,
                      "transparent" !== n.config.chart.background &&
                        n.config.chart.background
                        ? n.config.chart.background
                        : "#fff",
                      i.opacity,
                      i.borderWidth,
                      i.borderColor
                    );
                  return (
                    i.dropShadow.enabled &&
                      new A(this.ctx).dropShadow(l, i.dropShadow),
                    l
                  );
                },
              },
              {
                key: "dataLabelsBackground",
                value: function () {
                  var t = this.w;
                  if ("bubble" !== t.config.chart.type)
                    for (
                      var e = t.globals.dom.baseEl.querySelectorAll(
                          ".apexcharts-datalabels text"
                        ),
                        n = 0;
                      n < e.length;
                      n++
                    ) {
                      var i = e[n],
                        r = i.getBBox(),
                        o = null;
                      if (
                        (r.width &&
                          r.height &&
                          (o = this.addBackgroundToDataLabel(i, r)),
                        o)
                      ) {
                        i.parentNode.insertBefore(o.node, i);
                        var a = i.getAttribute("fill");
                        !t.config.chart.animations.enabled ||
                        t.globals.resized ||
                        t.globals.dataChanged
                          ? o.attr({ fill: a })
                          : o.animate().attr({ fill: a }),
                          i.setAttribute(
                            "fill",
                            t.config.dataLabels.background.foreColor
                          );
                      }
                    }
                },
              },
              {
                key: "bringForward",
                value: function () {
                  for (
                    var t = this.w,
                      e = t.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-datalabels"
                      ),
                      n = t.globals.dom.baseEl.querySelector(
                        ".apexcharts-plot-series:last-child"
                      ),
                      i = 0;
                    i < e.length;
                    i++
                  )
                    n && n.insertBefore(e[i], n.nextSibling);
                },
              },
            ]),
            t
          );
        })(),
        V = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.legendInactiveClass = "legend-mouseover-inactive");
          }
          return (
            l(t, [
              {
                key: "getAllSeriesEls",
                value: function () {
                  return this.w.globals.dom.baseEl.getElementsByClassName(
                    "apexcharts-series"
                  );
                },
              },
              {
                key: "getSeriesByName",
                value: function (t) {
                  return this.w.globals.dom.baseEl.querySelector(
                    ".apexcharts-inner .apexcharts-series[seriesName='".concat(
                      O.escapeString(t),
                      "']"
                    )
                  );
                },
              },
              {
                key: "isSeriesHidden",
                value: function (t) {
                  var e = this.getSeriesByName(t),
                    n = parseInt(e.getAttribute("data:realIndex"), 10);
                  return {
                    isHidden: e.classList.contains(
                      "apexcharts-series-collapsed"
                    ),
                    realIndex: n,
                  };
                },
              },
              {
                key: "addCollapsedClassToSeries",
                value: function (t, e) {
                  var n = this.w;
                  function i(n) {
                    for (var i = 0; i < n.length; i++)
                      n[i].index === e &&
                        t.node.classList.add("apexcharts-series-collapsed");
                  }
                  i(n.globals.collapsedSeries),
                    i(n.globals.ancillaryCollapsedSeries);
                },
              },
              {
                key: "toggleSeries",
                value: function (t) {
                  var e = this.isSeriesHidden(t);
                  return (
                    this.ctx.legend.legendHelpers.toggleDataSeries(
                      e.realIndex,
                      e.isHidden
                    ),
                    e.isHidden
                  );
                },
              },
              {
                key: "showSeries",
                value: function (t) {
                  var e = this.isSeriesHidden(t);
                  e.isHidden &&
                    this.ctx.legend.legendHelpers.toggleDataSeries(
                      e.realIndex,
                      !0
                    );
                },
              },
              {
                key: "hideSeries",
                value: function (t) {
                  var e = this.isSeriesHidden(t);
                  e.isHidden ||
                    this.ctx.legend.legendHelpers.toggleDataSeries(
                      e.realIndex,
                      !1
                    );
                },
              },
              {
                key: "resetSeries",
                value: function () {
                  var t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    i = this.w,
                    r = O.clone(i.globals.initialSeries);
                  (i.globals.previousPaths = []),
                    n
                      ? ((i.globals.collapsedSeries = []),
                        (i.globals.ancillaryCollapsedSeries = []),
                        (i.globals.collapsedSeriesIndices = []),
                        (i.globals.ancillaryCollapsedSeriesIndices = []))
                      : (r = this.emptyCollapsedSeries(r)),
                    (i.config.series = r),
                    t &&
                      (e &&
                        ((i.globals.zoomed = !1),
                        this.ctx.updateHelpers.revertDefaultAxisMinMax()),
                      this.ctx.updateHelpers._updateSeries(
                        r,
                        i.config.chart.animations.dynamicAnimation.enabled
                      ));
                },
              },
              {
                key: "emptyCollapsedSeries",
                value: function (t) {
                  for (var e = this.w, n = 0; n < t.length; n++)
                    e.globals.collapsedSeriesIndices.indexOf(n) > -1 &&
                      (t[n].data = []);
                  return t;
                },
              },
              {
                key: "highlightSeries",
                value: function (t) {
                  var e = this.w,
                    n = this.getSeriesByName(t),
                    i = parseInt(
                      null == n ? void 0 : n.getAttribute("data:realIndex"),
                      10
                    ),
                    r = e.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"
                    ),
                    o = null,
                    a = null,
                    s = null;
                  if (
                    e.globals.axisCharts ||
                    "radialBar" === e.config.chart.type
                  )
                    if (e.globals.axisCharts) {
                      (o = e.globals.dom.baseEl.querySelector(
                        ".apexcharts-series[data\\:realIndex='".concat(i, "']")
                      )),
                        (a = e.globals.dom.baseEl.querySelector(
                          ".apexcharts-datalabels[data\\:realIndex='".concat(
                            i,
                            "']"
                          )
                        ));
                      var l = e.globals.seriesYAxisReverseMap[i];
                      s = e.globals.dom.baseEl.querySelector(
                        ".apexcharts-yaxis[rel='".concat(l, "']")
                      );
                    } else
                      o = e.globals.dom.baseEl.querySelector(
                        ".apexcharts-series[rel='".concat(i + 1, "']")
                      );
                  else
                    o = e.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[rel='".concat(i + 1, "'] path")
                    );
                  for (var c = 0; c < r.length; c++)
                    r[c].classList.add(this.legendInactiveClass);
                  if (o)
                    e.globals.axisCharts ||
                      o.parentNode.classList.remove(this.legendInactiveClass),
                      o.classList.remove(this.legendInactiveClass),
                      null !== a &&
                        a.classList.remove(this.legendInactiveClass),
                      null !== s &&
                        s.classList.remove(this.legendInactiveClass);
                  else
                    for (var d = 0; d < r.length; d++)
                      r[d].classList.remove(this.legendInactiveClass);
                },
              },
              {
                key: "toggleSeriesOnHover",
                value: function (t, e) {
                  var n = this.w;
                  e || (e = t.target);
                  var i = n.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"
                  );
                  if ("mousemove" === t.type) {
                    var r = parseInt(e.getAttribute("rel"), 10) - 1;
                    this.highlightSeries(n.globals.seriesNames[r]);
                  } else if ("mouseout" === t.type)
                    for (var o = 0; o < i.length; o++)
                      i[o].classList.remove(this.legendInactiveClass);
                },
              },
              {
                key: "highlightRangeInSeries",
                value: function (t, e) {
                  var n = this,
                    i = this.w,
                    r = i.globals.dom.baseEl.getElementsByClassName(
                      "apexcharts-heatmap-rect"
                    ),
                    o = function (t) {
                      for (var e = 0; e < r.length; e++)
                        r[e].classList[t](n.legendInactiveClass);
                    };
                  if ("mousemove" === t.type) {
                    var a = parseInt(e.getAttribute("rel"), 10) - 1;
                    o("add");
                    var s = i.config.plotOptions.heatmap.colorScale.ranges;
                    !(function (t, e) {
                      for (var i = 0; i < r.length; i++) {
                        var o = Number(r[i].getAttribute("val"));
                        o >= t.from &&
                          (o < t.to || (t.to === e && o === e)) &&
                          r[i].classList.remove(n.legendInactiveClass);
                      }
                    })(
                      s[a],
                      s.reduce(function (t, e) {
                        return Math.max(t, e.to);
                      }, 0)
                    );
                  } else "mouseout" === t.type && o("remove");
                },
              },
              {
                key: "getActiveConfigSeriesIndex",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "asc",
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    n = this.w,
                    i = 0;
                  if (n.config.series.length > 1)
                    for (
                      var r = n.config.series.map(function (t, i) {
                          return t.data &&
                            t.data.length > 0 &&
                            -1 ===
                              n.globals.collapsedSeriesIndices.indexOf(i) &&
                            (!n.globals.comboCharts ||
                              0 === e.length ||
                              (e.length &&
                                e.indexOf(n.config.series[i].type) > -1))
                            ? i
                            : -1;
                        }),
                        o = "asc" === t ? 0 : r.length - 1;
                      "asc" === t ? o < r.length : o >= 0;
                      "asc" === t ? o++ : o--
                    )
                      if (-1 !== r[o]) {
                        i = r[o];
                        break;
                      }
                  return i;
                },
              },
              {
                key: "getBarSeriesIndices",
                value: function () {
                  return this.w.globals.comboCharts
                    ? this.w.config.series
                        .map(function (t, e) {
                          return "bar" === t.type || "column" === t.type
                            ? e
                            : -1;
                        })
                        .filter(function (t) {
                          return -1 !== t;
                        })
                    : this.w.config.series.map(function (t, e) {
                        return e;
                      });
                },
              },
              {
                key: "getPreviousPaths",
                value: function () {
                  var t = this.w;
                  function e(e, n, i) {
                    for (
                      var r = e[n].childNodes,
                        o = {
                          type: i,
                          paths: [],
                          realIndex: e[n].getAttribute("data:realIndex"),
                        },
                        a = 0;
                      a < r.length;
                      a++
                    )
                      if (r[a].hasAttribute("pathTo")) {
                        var s = r[a].getAttribute("pathTo");
                        o.paths.push({ d: s });
                      }
                    t.globals.previousPaths.push(o);
                  }
                  (t.globals.previousPaths = []),
                    [
                      "line",
                      "area",
                      "bar",
                      "rangebar",
                      "rangeArea",
                      "candlestick",
                      "radar",
                    ].forEach(function (n) {
                      for (
                        var i,
                          r =
                            ((i = n),
                            t.globals.dom.baseEl.querySelectorAll(
                              ".apexcharts-".concat(
                                i,
                                "-series .apexcharts-series"
                              )
                            )),
                          o = 0;
                        o < r.length;
                        o++
                      )
                        e(r, o, n);
                    }),
                    this.handlePrevBubbleScatterPaths("bubble"),
                    this.handlePrevBubbleScatterPaths("scatter");
                  var n = t.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-".concat(
                      t.config.chart.type,
                      " .apexcharts-series"
                    )
                  );
                  if (n.length > 0)
                    for (
                      var i = function (e) {
                          for (
                            var n = t.globals.dom.baseEl.querySelectorAll(
                                ".apexcharts-"
                                  .concat(
                                    t.config.chart.type,
                                    " .apexcharts-series[data\\:realIndex='"
                                  )
                                  .concat(e, "'] rect")
                              ),
                              i = [],
                              r = function (t) {
                                var e = function (e) {
                                    return n[t].getAttribute(e);
                                  },
                                  r = {
                                    x: parseFloat(e("x")),
                                    y: parseFloat(e("y")),
                                    width: parseFloat(e("width")),
                                    height: parseFloat(e("height")),
                                  };
                                i.push({
                                  rect: r,
                                  color: n[t].getAttribute("color"),
                                });
                              },
                              o = 0;
                            o < n.length;
                            o++
                          )
                            r(o);
                          t.globals.previousPaths.push(i);
                        },
                        r = 0;
                      r < n.length;
                      r++
                    )
                      i(r);
                  t.globals.axisCharts ||
                    (t.globals.previousPaths = t.globals.series);
                },
              },
              {
                key: "handlePrevBubbleScatterPaths",
                value: function (t) {
                  var e = this.w,
                    n = e.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-".concat(t, "-series .apexcharts-series")
                    );
                  if (n.length > 0)
                    for (var i = 0; i < n.length; i++) {
                      for (
                        var r = e.globals.dom.baseEl.querySelectorAll(
                            ".apexcharts-"
                              .concat(
                                t,
                                "-series .apexcharts-series[data\\:realIndex='"
                              )
                              .concat(i, "'] circle")
                          ),
                          o = [],
                          a = 0;
                        a < r.length;
                        a++
                      )
                        o.push({
                          x: r[a].getAttribute("cx"),
                          y: r[a].getAttribute("cy"),
                          r: r[a].getAttribute("r"),
                        });
                      e.globals.previousPaths.push(o);
                    }
                },
              },
              {
                key: "clearPreviousPaths",
                value: function () {
                  var t = this.w;
                  (t.globals.previousPaths = []),
                    (t.globals.allSeriesCollapsed = !1);
                },
              },
              {
                key: "handleNoData",
                value: function () {
                  var t = this.w,
                    e = t.config.noData,
                    n = new x(this.ctx),
                    i = t.globals.svgWidth / 2,
                    r = t.globals.svgHeight / 2,
                    o = "middle";
                  if (
                    ((t.globals.noData = !0),
                    (t.globals.animationEnded = !0),
                    "left" === e.align
                      ? ((i = 10), (o = "start"))
                      : "right" === e.align &&
                        ((i = t.globals.svgWidth - 10), (o = "end")),
                    "top" === e.verticalAlign
                      ? (r = 50)
                      : "bottom" === e.verticalAlign &&
                        (r = t.globals.svgHeight - 50),
                    (i += e.offsetX),
                    (r = r + parseInt(e.style.fontSize, 10) + 2 + e.offsetY),
                    void 0 !== e.text && "" !== e.text)
                  ) {
                    var a = n.drawText({
                      x: i,
                      y: r,
                      text: e.text,
                      textAnchor: o,
                      fontSize: e.style.fontSize,
                      fontFamily: e.style.fontFamily,
                      foreColor: e.style.color,
                      opacity: 1,
                      class: "apexcharts-text-nodata",
                    });
                    t.globals.dom.Paper.add(a);
                  }
                },
              },
              {
                key: "setNullSeriesToZeroValues",
                value: function (t) {
                  for (var e = this.w, n = 0; n < t.length; n++)
                    if (0 === t[n].length)
                      for (
                        var i = 0;
                        i < t[e.globals.maxValsInArrayIndex].length;
                        i++
                      )
                        t[n].push(0);
                  return t;
                },
              },
              {
                key: "hasAllSeriesEqualX",
                value: function () {
                  for (
                    var t = !0, e = this.w, n = this.filteredSeriesX(), i = 0;
                    i < n.length - 1;
                    i++
                  )
                    if (n[i][0] !== n[i + 1][0]) {
                      t = !1;
                      break;
                    }
                  return (e.globals.allSeriesHasEqualX = t), t;
                },
              },
              {
                key: "filteredSeriesX",
                value: function () {
                  return this.w.globals.seriesX.map(function (t) {
                    return t.length > 0 ? t : [];
                  });
                },
              },
            ]),
            t
          );
        })(),
        G = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.twoDSeries = []),
              (this.threeDSeries = []),
              (this.twoDSeriesX = []),
              (this.seriesGoals = []),
              (this.coreUtils = new z(this.ctx));
          }
          return (
            l(t, [
              {
                key: "isMultiFormat",
                value: function () {
                  return this.isFormatXY() || this.isFormat2DArray();
                },
              },
              {
                key: "isFormatXY",
                value: function () {
                  var t = this.w.config.series.slice(),
                    e = new V(this.ctx);
                  if (
                    ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
                    void 0 !== t[this.activeSeriesIndex].data &&
                      t[this.activeSeriesIndex].data.length > 0 &&
                      null !== t[this.activeSeriesIndex].data[0] &&
                      void 0 !== t[this.activeSeriesIndex].data[0].x &&
                      null !== t[this.activeSeriesIndex].data[0])
                  )
                    return !0;
                },
              },
              {
                key: "isFormat2DArray",
                value: function () {
                  var t = this.w.config.series.slice(),
                    e = new V(this.ctx);
                  if (
                    ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
                    void 0 !== t[this.activeSeriesIndex].data &&
                      t[this.activeSeriesIndex].data.length > 0 &&
                      void 0 !== t[this.activeSeriesIndex].data[0] &&
                      null !== t[this.activeSeriesIndex].data[0] &&
                      t[this.activeSeriesIndex].data[0].constructor === Array)
                  )
                    return !0;
                },
              },
              {
                key: "handleFormat2DArray",
                value: function (t, e) {
                  for (
                    var n = this.w.config,
                      i = this.w.globals,
                      r =
                        "boxPlot" === n.chart.type ||
                        "boxPlot" === n.series[e].type,
                      o = 0;
                    o < t[e].data.length;
                    o++
                  )
                    if (
                      (void 0 !== t[e].data[o][1] &&
                        (Array.isArray(t[e].data[o][1]) &&
                        4 === t[e].data[o][1].length &&
                        !r
                          ? this.twoDSeries.push(
                              O.parseNumber(t[e].data[o][1][3])
                            )
                          : t[e].data[o].length >= 5
                          ? this.twoDSeries.push(O.parseNumber(t[e].data[o][4]))
                          : this.twoDSeries.push(
                              O.parseNumber(t[e].data[o][1])
                            ),
                        (i.dataFormatXNumeric = !0)),
                      "datetime" === n.xaxis.type)
                    ) {
                      var a = new Date(t[e].data[o][0]);
                      (a = new Date(a).getTime()), this.twoDSeriesX.push(a);
                    } else this.twoDSeriesX.push(t[e].data[o][0]);
                  for (var s = 0; s < t[e].data.length; s++)
                    void 0 !== t[e].data[s][2] &&
                      (this.threeDSeries.push(t[e].data[s][2]),
                      (i.isDataXYZ = !0));
                },
              },
              {
                key: "handleFormatXY",
                value: function (t, e) {
                  var n = this.w.config,
                    i = this.w.globals,
                    r = new S(this.ctx),
                    o = e;
                  i.collapsedSeriesIndices.indexOf(e) > -1 &&
                    (o = this.activeSeriesIndex);
                  for (var a = 0; a < t[e].data.length; a++)
                    void 0 !== t[e].data[a].y &&
                      (Array.isArray(t[e].data[a].y)
                        ? this.twoDSeries.push(
                            O.parseNumber(
                              t[e].data[a].y[t[e].data[a].y.length - 1]
                            )
                          )
                        : this.twoDSeries.push(O.parseNumber(t[e].data[a].y))),
                      void 0 !== t[e].data[a].goals &&
                      Array.isArray(t[e].data[a].goals)
                        ? (void 0 === this.seriesGoals[e] &&
                            (this.seriesGoals[e] = []),
                          this.seriesGoals[e].push(t[e].data[a].goals))
                        : (void 0 === this.seriesGoals[e] &&
                            (this.seriesGoals[e] = []),
                          this.seriesGoals[e].push(null));
                  for (var s = 0; s < t[o].data.length; s++) {
                    var l = "string" == typeof t[o].data[s].x,
                      c = Array.isArray(t[o].data[s].x),
                      d = !c && !!r.isValidDate(t[o].data[s].x);
                    if (l || d)
                      if (l || n.xaxis.convertedCatToNumeric) {
                        var u = i.isBarHorizontal && i.isRangeData;
                        "datetime" !== n.xaxis.type || u
                          ? ((this.fallbackToCategory = !0),
                            this.twoDSeriesX.push(t[o].data[s].x),
                            isNaN(t[o].data[s].x) ||
                              "category" === this.w.config.xaxis.type ||
                              "string" == typeof t[o].data[s].x ||
                              (i.isXNumeric = !0))
                          : this.twoDSeriesX.push(r.parseDate(t[o].data[s].x));
                      } else
                        "datetime" === n.xaxis.type
                          ? this.twoDSeriesX.push(
                              r.parseDate(t[o].data[s].x.toString())
                            )
                          : ((i.dataFormatXNumeric = !0),
                            (i.isXNumeric = !0),
                            this.twoDSeriesX.push(parseFloat(t[o].data[s].x)));
                    else
                      c
                        ? ((this.fallbackToCategory = !0),
                          this.twoDSeriesX.push(t[o].data[s].x))
                        : ((i.isXNumeric = !0),
                          (i.dataFormatXNumeric = !0),
                          this.twoDSeriesX.push(t[o].data[s].x));
                  }
                  if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                    for (var p = 0; p < t[e].data.length; p++)
                      this.threeDSeries.push(t[e].data[p].z);
                    i.isDataXYZ = !0;
                  }
                },
              },
              {
                key: "handleRangeData",
                value: function (t, e) {
                  var n = this.w.globals,
                    i = {};
                  return (
                    this.isFormat2DArray()
                      ? (i = this.handleRangeDataFormat("array", t, e))
                      : this.isFormatXY() &&
                        (i = this.handleRangeDataFormat("xy", t, e)),
                    n.seriesRangeStart.push(void 0 === i.start ? [] : i.start),
                    n.seriesRangeEnd.push(void 0 === i.end ? [] : i.end),
                    n.seriesRange.push(i.rangeUniques),
                    n.seriesRange.forEach(function (t, e) {
                      t &&
                        t.forEach(function (t, e) {
                          t.y.forEach(function (e, n) {
                            for (var i = 0; i < t.y.length; i++)
                              if (n !== i) {
                                var r = e.y1,
                                  o = e.y2,
                                  a = t.y[i].y1;
                                r <= t.y[i].y2 &&
                                  a <= o &&
                                  (t.overlaps.indexOf(e.rangeName) < 0 &&
                                    t.overlaps.push(e.rangeName),
                                  t.overlaps.indexOf(t.y[i].rangeName) < 0 &&
                                    t.overlaps.push(t.y[i].rangeName));
                              }
                          });
                        });
                    }),
                    i
                  );
                },
              },
              {
                key: "handleCandleStickBoxData",
                value: function (t, e) {
                  var n = this.w.globals,
                    i = {};
                  return (
                    this.isFormat2DArray()
                      ? (i = this.handleCandleStickBoxDataFormat("array", t, e))
                      : this.isFormatXY() &&
                        (i = this.handleCandleStickBoxDataFormat("xy", t, e)),
                    (n.seriesCandleO[e] = i.o),
                    (n.seriesCandleH[e] = i.h),
                    (n.seriesCandleM[e] = i.m),
                    (n.seriesCandleL[e] = i.l),
                    (n.seriesCandleC[e] = i.c),
                    i
                  );
                },
              },
              {
                key: "handleRangeDataFormat",
                value: function (t, e, n) {
                  var i = [],
                    r = [],
                    o = e[n].data
                      .filter(function (t, e, n) {
                        return (
                          e ===
                          n.findIndex(function (e) {
                            return e.x === t.x;
                          })
                        );
                      })
                      .map(function (t, e) {
                        return { x: t.x, overlaps: [], y: [] };
                      });
                  if ("array" === t)
                    for (var a = 0; a < e[n].data.length; a++)
                      Array.isArray(e[n].data[a])
                        ? (i.push(e[n].data[a][1][0]),
                          r.push(e[n].data[a][1][1]))
                        : (i.push(e[n].data[a]), r.push(e[n].data[a]));
                  else if ("xy" === t)
                    for (
                      var s = function (t) {
                          var a = Array.isArray(e[n].data[t].y),
                            s = O.randomId(),
                            l = e[n].data[t].x,
                            c = {
                              y1: a ? e[n].data[t].y[0] : e[n].data[t].y,
                              y2: a ? e[n].data[t].y[1] : e[n].data[t].y,
                              rangeName: s,
                            };
                          e[n].data[t].rangeName = s;
                          var d = o.findIndex(function (t) {
                            return t.x === l;
                          });
                          o[d].y.push(c), i.push(c.y1), r.push(c.y2);
                        },
                        l = 0;
                      l < e[n].data.length;
                      l++
                    )
                      s(l);
                  return { start: i, end: r, rangeUniques: o };
                },
              },
              {
                key: "handleCandleStickBoxDataFormat",
                value: function (t, e, n) {
                  var i = this.w,
                    r =
                      "boxPlot" === i.config.chart.type ||
                      "boxPlot" === i.config.series[n].type,
                    o = [],
                    a = [],
                    s = [],
                    l = [],
                    c = [];
                  if ("array" === t)
                    if (
                      (r && 6 === e[n].data[0].length) ||
                      (!r && 5 === e[n].data[0].length)
                    )
                      for (var d = 0; d < e[n].data.length; d++)
                        o.push(e[n].data[d][1]),
                          a.push(e[n].data[d][2]),
                          r
                            ? (s.push(e[n].data[d][3]),
                              l.push(e[n].data[d][4]),
                              c.push(e[n].data[d][5]))
                            : (l.push(e[n].data[d][3]),
                              c.push(e[n].data[d][4]));
                    else
                      for (var u = 0; u < e[n].data.length; u++)
                        Array.isArray(e[n].data[u][1]) &&
                          (o.push(e[n].data[u][1][0]),
                          a.push(e[n].data[u][1][1]),
                          r
                            ? (s.push(e[n].data[u][1][2]),
                              l.push(e[n].data[u][1][3]),
                              c.push(e[n].data[u][1][4]))
                            : (l.push(e[n].data[u][1][2]),
                              c.push(e[n].data[u][1][3])));
                  else if ("xy" === t)
                    for (var p = 0; p < e[n].data.length; p++)
                      Array.isArray(e[n].data[p].y) &&
                        (o.push(e[n].data[p].y[0]),
                        a.push(e[n].data[p].y[1]),
                        r
                          ? (s.push(e[n].data[p].y[2]),
                            l.push(e[n].data[p].y[3]),
                            c.push(e[n].data[p].y[4]))
                          : (l.push(e[n].data[p].y[2]),
                            c.push(e[n].data[p].y[3])));
                  return { o: o, h: a, m: s, l: l, c: c };
                },
              },
              {
                key: "parseDataAxisCharts",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.ctx,
                    i = this.w.config,
                    r = this.w.globals,
                    o = new S(n),
                    a =
                      i.labels.length > 0
                        ? i.labels.slice()
                        : i.xaxis.categories.slice();
                  (r.isRangeBar =
                    "rangeBar" === i.chart.type && r.isBarHorizontal),
                    (r.hasXaxisGroups =
                      "category" === i.xaxis.type &&
                      i.xaxis.group.groups.length > 0),
                    r.hasXaxisGroups && (r.groups = i.xaxis.group.groups),
                    t.forEach(function (t, e) {
                      void 0 !== t.name
                        ? r.seriesNames.push(t.name)
                        : r.seriesNames.push("series-" + parseInt(e + 1, 10));
                    }),
                    this.coreUtils.setSeriesYAxisMappings();
                  var s = [],
                    l = v(
                      new Set(
                        i.series.map(function (t) {
                          return t.group;
                        })
                      )
                    );
                  i.series.forEach(function (t, e) {
                    var n = l.indexOf(t.group);
                    s[n] || (s[n] = []), s[n].push(r.seriesNames[e]);
                  }),
                    (r.seriesGroups = s);
                  for (
                    var c = function () {
                        for (var t = 0; t < a.length; t++)
                          if ("string" == typeof a[t]) {
                            if (!o.isValidDate(a[t]))
                              throw new Error(
                                "You have provided invalid Date format. Please provide a valid JavaScript Date"
                              );
                            e.twoDSeriesX.push(o.parseDate(a[t]));
                          } else e.twoDSeriesX.push(a[t]);
                      },
                      d = 0;
                    d < t.length;
                    d++
                  ) {
                    if (
                      ((this.twoDSeries = []),
                      (this.twoDSeriesX = []),
                      (this.threeDSeries = []),
                      void 0 === t[d].data)
                    )
                      return;
                    if (
                      (("rangeBar" !== i.chart.type &&
                        "rangeArea" !== i.chart.type &&
                        "rangeBar" !== t[d].type &&
                        "rangeArea" !== t[d].type) ||
                        ((r.isRangeData = !0),
                        ("rangeBar" !== i.chart.type &&
                          "rangeArea" !== i.chart.type) ||
                          this.handleRangeData(t, d)),
                      this.isMultiFormat())
                    )
                      this.isFormat2DArray()
                        ? this.handleFormat2DArray(t, d)
                        : this.isFormatXY() && this.handleFormatXY(t, d),
                        ("candlestick" !== i.chart.type &&
                          "candlestick" !== t[d].type &&
                          "boxPlot" !== i.chart.type &&
                          "boxPlot" !== t[d].type) ||
                          this.handleCandleStickBoxData(t, d),
                        r.series.push(this.twoDSeries),
                        r.labels.push(this.twoDSeriesX),
                        r.seriesX.push(this.twoDSeriesX),
                        (r.seriesGoals = this.seriesGoals),
                        d !== this.activeSeriesIndex ||
                          this.fallbackToCategory ||
                          (r.isXNumeric = !0);
                    else {
                      "datetime" === i.xaxis.type
                        ? ((r.isXNumeric = !0),
                          c(),
                          r.seriesX.push(this.twoDSeriesX))
                        : "numeric" === i.xaxis.type &&
                          ((r.isXNumeric = !0),
                          a.length > 0 &&
                            ((this.twoDSeriesX = a),
                            r.seriesX.push(this.twoDSeriesX))),
                        r.labels.push(this.twoDSeriesX);
                      var u = t[d].data.map(function (t) {
                        return O.parseNumber(t);
                      });
                      r.series.push(u);
                    }
                    r.seriesZ.push(this.threeDSeries),
                      void 0 !== t[d].color
                        ? r.seriesColors.push(t[d].color)
                        : r.seriesColors.push(void 0);
                  }
                  return this.w;
                },
              },
              {
                key: "parseDataNonAxisCharts",
                value: function (t) {
                  var e = this.w.globals,
                    n = this.w.config;
                  (e.series = t.slice()), (e.seriesNames = n.labels.slice());
                  for (var i = 0; i < e.series.length; i++)
                    void 0 === e.seriesNames[i] &&
                      e.seriesNames.push("series-" + (i + 1));
                  return this.w;
                },
              },
              {
                key: "handleExternalLabelsData",
                value: function (t) {
                  var e = this.w.config,
                    n = this.w.globals;
                  e.xaxis.categories.length > 0
                    ? (n.labels = e.xaxis.categories)
                    : e.labels.length > 0
                    ? (n.labels = e.labels.slice())
                    : this.fallbackToCategory
                    ? ((n.labels = n.labels[0]),
                      n.seriesRange.length &&
                        (n.seriesRange.map(function (t) {
                          t.forEach(function (t) {
                            n.labels.indexOf(t.x) < 0 &&
                              t.x &&
                              n.labels.push(t.x);
                          });
                        }),
                        (n.labels = Array.from(
                          new Set(n.labels.map(JSON.stringify)),
                          JSON.parse
                        ))),
                      e.xaxis.convertedCatToNumeric &&
                        (new N(e).convertCatToNumericXaxis(
                          e,
                          this.ctx,
                          n.seriesX[0]
                        ),
                        this._generateExternalLabels(t)))
                    : this._generateExternalLabels(t);
                },
              },
              {
                key: "_generateExternalLabels",
                value: function (t) {
                  var e = this.w.globals,
                    n = this.w.config,
                    i = [];
                  if (e.axisCharts) {
                    if (e.series.length > 0)
                      if (this.isFormatXY())
                        for (
                          var r = n.series.map(function (t, e) {
                              return t.data.filter(function (t, e, n) {
                                return (
                                  n.findIndex(function (e) {
                                    return e.x === t.x;
                                  }) === e
                                );
                              });
                            }),
                            o = r.reduce(function (t, e, n, i) {
                              return i[t].length > e.length ? t : n;
                            }, 0),
                            a = 0;
                          a < r[o].length;
                          a++
                        )
                          i.push(a + 1);
                      else
                        for (
                          var s = 0;
                          s < e.series[e.maxValsInArrayIndex].length;
                          s++
                        )
                          i.push(s + 1);
                    e.seriesX = [];
                    for (var l = 0; l < t.length; l++) e.seriesX.push(i);
                    this.w.globals.isBarHorizontal || (e.isXNumeric = !0);
                  }
                  if (0 === i.length) {
                    i = e.axisCharts
                      ? []
                      : e.series.map(function (t, e) {
                          return e + 1;
                        });
                    for (var c = 0; c < t.length; c++) e.seriesX.push(i);
                  }
                  (e.labels = i),
                    n.xaxis.convertedCatToNumeric &&
                      (e.categoryLabels = i.map(function (t) {
                        return n.xaxis.labels.formatter(t);
                      })),
                    (e.noLabelsProvided = !0);
                },
              },
              {
                key: "parseData",
                value: function (t) {
                  var e = this.w,
                    n = e.config,
                    i = e.globals;
                  if (
                    (this.excludeCollapsedSeriesInYAxis(),
                    (this.fallbackToCategory = !1),
                    this.ctx.core.resetGlobals(),
                    this.ctx.core.isMultipleY(),
                    i.axisCharts
                      ? (this.parseDataAxisCharts(t),
                        this.coreUtils.getLargestSeries())
                      : this.parseDataNonAxisCharts(t),
                    n.chart.stacked)
                  ) {
                    var r = new V(this.ctx);
                    i.series = r.setNullSeriesToZeroValues(i.series);
                  }
                  this.coreUtils.getSeriesTotals(),
                    i.axisCharts &&
                      ((i.stackedSeriesTotals =
                        this.coreUtils.getStackedSeriesTotals()),
                      (i.stackedSeriesTotalsByGroups =
                        this.coreUtils.getStackedSeriesTotalsByGroups())),
                    this.coreUtils.getPercentSeries(),
                    i.dataFormatXNumeric ||
                      (i.isXNumeric &&
                        ("numeric" !== n.xaxis.type ||
                          0 !== n.labels.length ||
                          0 !== n.xaxis.categories.length)) ||
                      this.handleExternalLabelsData(t);
                  for (
                    var o = this.coreUtils.getCategoryLabels(i.labels), a = 0;
                    a < o.length;
                    a++
                  )
                    if (Array.isArray(o[a])) {
                      i.isMultiLineX = !0;
                      break;
                    }
                },
              },
              {
                key: "excludeCollapsedSeriesInYAxis",
                value: function () {
                  var t = this.w,
                    e = [];
                  t.globals.seriesYAxisMap.forEach(function (n, i) {
                    var r = 0;
                    n.forEach(function (e) {
                      -1 !== t.globals.collapsedSeriesIndices.indexOf(e) && r++;
                    }),
                      r > 0 && r == n.length && e.push(i);
                  }),
                    (t.globals.ignoreYAxisIndexes = e.map(function (t) {
                      return t;
                    }));
                },
              },
            ]),
            t
          );
        })(),
        K = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "scaleSvgNode",
                value: function (t, e) {
                  var n = parseFloat(t.getAttributeNS(null, "width")),
                    i = parseFloat(t.getAttributeNS(null, "height"));
                  t.setAttributeNS(null, "width", n * e),
                    t.setAttributeNS(null, "height", i * e),
                    t.setAttributeNS(null, "viewBox", "0 0 " + n + " " + i);
                },
              },
              {
                key: "getSvgString",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    var n = t.w,
                      i = n.config.chart.toolbar.export.width,
                      r =
                        n.config.chart.toolbar.export.scale ||
                        i / n.globals.svgWidth;
                    r || (r = 1);
                    var o = t.w.globals.dom.Paper.svg(),
                      a = t.w.globals.dom.Paper.node.cloneNode(!0);
                    1 !== r && t.scaleSvgNode(a, r),
                      t.convertImagesToBase64(a).then(function () {
                        (o = new XMLSerializer().serializeToString(a)),
                          e(o.replace(/&nbsp;/g, "&#160;"));
                      });
                  });
                },
              },
              {
                key: "convertImagesToBase64",
                value: function (t) {
                  var e = this,
                    n = t.getElementsByTagName("image"),
                    i = Array.from(n).map(function (t) {
                      var n = t.getAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href"
                      );
                      return n && !n.startsWith("data:")
                        ? e
                            .getBase64FromUrl(n)
                            .then(function (e) {
                              t.setAttributeNS(
                                "http://www.w3.org/1999/xlink",
                                "href",
                                e
                              );
                            })
                            .catch(function (t) {})
                        : Promise.resolve();
                    });
                  return Promise.all(i);
                },
              },
              {
                key: "getBase64FromUrl",
                value: function (t) {
                  return new Promise(function (e, n) {
                    var i = new Image();
                    (i.crossOrigin = "Anonymous"),
                      (i.onload = function () {
                        var t = document.createElement("canvas");
                        (t.width = i.width),
                          (t.height = i.height),
                          t.getContext("2d").drawImage(i, 0, 0),
                          e(t.toDataURL());
                      }),
                      (i.onerror = n),
                      (i.src = t);
                  });
                },
              },
              {
                key: "cleanup",
                value: function () {
                  var t = this.w,
                    e = t.globals.dom.baseEl.getElementsByClassName(
                      "apexcharts-xcrosshairs"
                    ),
                    n = t.globals.dom.baseEl.getElementsByClassName(
                      "apexcharts-ycrosshairs"
                    ),
                    i = t.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-zoom-rect, .apexcharts-selection-rect"
                    );
                  Array.prototype.forEach.call(i, function (t) {
                    t.setAttribute("width", 0);
                  }),
                    e &&
                      e[0] &&
                      (e[0].setAttribute("x", -500),
                      e[0].setAttribute("x1", -500),
                      e[0].setAttribute("x2", -500)),
                    n &&
                      n[0] &&
                      (n[0].setAttribute("y", -100),
                      n[0].setAttribute("y1", -100),
                      n[0].setAttribute("y2", -100));
                },
              },
              {
                key: "svgUrl",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    t.cleanup(),
                      t.getSvgString().then(function (t) {
                        var n = new Blob([t], {
                          type: "image/svg+xml;charset=utf-8",
                        });
                        e(URL.createObjectURL(n));
                      });
                  });
                },
              },
              {
                key: "dataURI",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n) {
                    var i = e.w,
                      r = t ? t.scale || t.width / i.globals.svgWidth : 1;
                    e.cleanup();
                    var o = document.createElement("canvas");
                    (o.width = i.globals.svgWidth * r),
                      (o.height =
                        parseInt(i.globals.dom.elWrap.style.height, 10) * r);
                    var a =
                        "transparent" !== i.config.chart.background &&
                        i.config.chart.background
                          ? i.config.chart.background
                          : "#fff",
                      s = o.getContext("2d");
                    (s.fillStyle = a),
                      s.fillRect(0, 0, o.width * r, o.height * r),
                      e.getSvgString().then(function (t) {
                        var e = "data:image/svg+xml," + encodeURIComponent(t),
                          i = new Image();
                        (i.crossOrigin = "anonymous"),
                          (i.onload = function () {
                            if ((s.drawImage(i, 0, 0), o.msToBlob)) {
                              var t = o.msToBlob();
                              n({ blob: t });
                            } else {
                              var e = o.toDataURL("image/png");
                              n({ imgURI: e });
                            }
                          }),
                          (i.src = e);
                      });
                  });
                },
              },
              {
                key: "exportToSVG",
                value: function () {
                  var t = this;
                  this.svgUrl().then(function (e) {
                    t.triggerDownload(
                      e,
                      t.w.config.chart.toolbar.export.svg.filename,
                      ".svg"
                    );
                  });
                },
              },
              {
                key: "exportToPng",
                value: function () {
                  var t = this,
                    e = this.w.config.chart.toolbar.export.scale,
                    n = this.w.config.chart.toolbar.export.width,
                    i = e ? { scale: e } : n ? { width: n } : void 0;
                  this.dataURI(i).then(function (e) {
                    var n = e.imgURI,
                      i = e.blob;
                    i
                      ? navigator.msSaveOrOpenBlob(
                          i,
                          t.w.globals.chartID + ".png"
                        )
                      : t.triggerDownload(
                          n,
                          t.w.config.chart.toolbar.export.png.filename,
                          ".png"
                        );
                  });
                },
              },
              {
                key: "exportToCSV",
                value: function (t) {
                  var e = this,
                    n = t.series,
                    i = t.fileName,
                    r = t.columnDelimiter,
                    o = void 0 === r ? "," : r,
                    a = t.lineDelimiter,
                    s = void 0 === a ? "\n" : a,
                    l = this.w;
                  n || (n = l.config.series);
                  var c,
                    d,
                    u = [],
                    p = [],
                    h = "",
                    f = l.globals.series.map(function (t, e) {
                      return -1 === l.globals.collapsedSeriesIndices.indexOf(e)
                        ? t
                        : [];
                    }),
                    b = function (t) {
                      return "function" ==
                        typeof l.config.chart.toolbar.export.csv
                          .categoryFormatter
                        ? l.config.chart.toolbar.export.csv.categoryFormatter(t)
                        : "datetime" === l.config.xaxis.type &&
                          String(t).length >= 10
                        ? new Date(t).toDateString()
                        : O.isNumber(t)
                        ? t
                        : t.split(o).join("");
                    },
                    m = function (t) {
                      return "function" ==
                        typeof l.config.chart.toolbar.export.csv.valueFormatter
                        ? l.config.chart.toolbar.export.csv.valueFormatter(t)
                        : t;
                    },
                    g = Math.max.apply(
                      Math,
                      v(
                        n.map(function (t) {
                          return t.data ? t.data.length : 0;
                        })
                      )
                    ),
                    _ = new G(this.ctx),
                    y = new D(this.ctx),
                    M = function (t) {
                      var n = "";
                      if (l.globals.axisCharts) {
                        if (
                          "category" === l.config.xaxis.type ||
                          l.config.xaxis.convertedCatToNumeric
                        )
                          if (l.globals.isBarHorizontal) {
                            var i = l.globals.yLabelFormatters[0],
                              r = new V(e.ctx).getActiveConfigSeriesIndex();
                            n = i(l.globals.labels[t], {
                              seriesIndex: r,
                              dataPointIndex: t,
                              w: l,
                            });
                          } else
                            n = y.getLabel(
                              l.globals.labels,
                              l.globals.timescaleLabels,
                              0,
                              t
                            ).text;
                        "datetime" === l.config.xaxis.type &&
                          (l.config.xaxis.categories.length
                            ? (n = l.config.xaxis.categories[t])
                            : l.config.labels.length &&
                              (n = l.config.labels[t]));
                      } else n = l.config.labels[t];
                      return null === n
                        ? "nullvalue"
                        : (Array.isArray(n) && (n = n.join(" ")),
                          O.isNumber(n) ? n : n.split(o).join(""));
                    };
                  u.push(l.config.chart.toolbar.export.csv.headerCategory),
                    "boxPlot" === l.config.chart.type
                      ? (u.push("minimum"),
                        u.push("q1"),
                        u.push("median"),
                        u.push("q3"),
                        u.push("maximum"))
                      : "candlestick" === l.config.chart.type
                      ? (u.push("open"),
                        u.push("high"),
                        u.push("low"),
                        u.push("close"))
                      : "rangeBar" === l.config.chart.type
                      ? (u.push("minimum"), u.push("maximum"))
                      : n.map(function (t, e) {
                          var n = (t.name ? t.name : "series-".concat(e)) + "";
                          l.globals.axisCharts &&
                            u.push(
                              n.split(o).join("")
                                ? n.split(o).join("")
                                : "series-".concat(e)
                            );
                        }),
                    l.globals.axisCharts ||
                      (u.push(l.config.chart.toolbar.export.csv.headerValue),
                      p.push(u.join(o))),
                    l.globals.allSeriesHasEqualX ||
                    !l.globals.axisCharts ||
                    l.config.xaxis.categories.length ||
                    l.config.labels.length
                      ? n.map(function (t, e) {
                          l.globals.axisCharts
                            ? (function (t, e) {
                                if (
                                  (u.length && 0 === e && p.push(u.join(o)),
                                  t.data)
                                ) {
                                  t.data =
                                    (t.data.length && t.data) ||
                                    v(Array(g)).map(function () {
                                      return "";
                                    });
                                  for (var i = 0; i < t.data.length; i++) {
                                    u = [];
                                    var r = M(i);
                                    if ("nullvalue" !== r) {
                                      if (
                                        (r ||
                                          (_.isFormatXY()
                                            ? (r = n[e].data[i].x)
                                            : _.isFormat2DArray() &&
                                              (r = n[e].data[i]
                                                ? n[e].data[i][0]
                                                : "")),
                                        0 === e)
                                      ) {
                                        u.push(b(r));
                                        for (
                                          var a = 0;
                                          a < l.globals.series.length;
                                          a++
                                        ) {
                                          var s,
                                            c = _.isFormatXY()
                                              ? null === (s = n[a].data[i]) ||
                                                void 0 === s
                                                ? void 0
                                                : s.y
                                              : f[a][i];
                                          u.push(m(c));
                                        }
                                      }
                                      ("candlestick" === l.config.chart.type ||
                                        (t.type && "candlestick" === t.type)) &&
                                        (u.pop(),
                                        u.push(l.globals.seriesCandleO[e][i]),
                                        u.push(l.globals.seriesCandleH[e][i]),
                                        u.push(l.globals.seriesCandleL[e][i]),
                                        u.push(l.globals.seriesCandleC[e][i])),
                                        ("boxPlot" === l.config.chart.type ||
                                          (t.type && "boxPlot" === t.type)) &&
                                          (u.pop(),
                                          u.push(l.globals.seriesCandleO[e][i]),
                                          u.push(l.globals.seriesCandleH[e][i]),
                                          u.push(l.globals.seriesCandleM[e][i]),
                                          u.push(l.globals.seriesCandleL[e][i]),
                                          u.push(
                                            l.globals.seriesCandleC[e][i]
                                          )),
                                        "rangeBar" === l.config.chart.type &&
                                          (u.pop(),
                                          u.push(
                                            l.globals.seriesRangeStart[e][i]
                                          ),
                                          u.push(
                                            l.globals.seriesRangeEnd[e][i]
                                          )),
                                        u.length && p.push(u.join(o));
                                    }
                                  }
                                }
                              })(t, e)
                            : ((u = []).push(b(l.globals.labels[e])),
                              u.push(m(f[e])),
                              p.push(u.join(o)));
                        })
                      : ((c = new Set()),
                        (d = {}),
                        n.forEach(function (t, e) {
                          null == t ||
                            t.data.forEach(function (t) {
                              var i, r;
                              if (_.isFormatXY()) (i = t.x), (r = t.y);
                              else {
                                if (!_.isFormat2DArray()) return;
                                (i = t[0]), (r = t[1]);
                              }
                              d[i] || (d[i] = Array(n.length).fill("")),
                                (d[i][e] = m(r)),
                                c.add(i);
                            });
                        }),
                        u.length && p.push(u.join(o)),
                        Array.from(c)
                          .sort()
                          .forEach(function (t) {
                            p.push([b(t), d[t].join(o)]);
                          })),
                    (h += p.join(s)),
                    this.triggerDownload(
                      "data:text/csv; charset=utf-8," +
                        encodeURIComponent("\ufeff" + h),
                      i || l.config.chart.toolbar.export.csv.filename,
                      ".csv"
                    );
                },
              },
              {
                key: "triggerDownload",
                value: function (t, e, n) {
                  var i = document.createElement("a");
                  (i.href = t),
                    (i.download = (e || this.w.globals.chartID) + n),
                    document.body.appendChild(i),
                    i.click(),
                    document.body.removeChild(i);
                },
              },
            ]),
            t
          );
        })(),
        Z = (function () {
          function t(e, n) {
            a(this, t), (this.ctx = e), (this.elgrid = n), (this.w = e.w);
            var i = this.w;
            (this.axesUtils = new D(e)),
              (this.xaxisLabels = i.globals.labels.slice()),
              i.globals.timescaleLabels.length > 0 &&
                !i.globals.isBarHorizontal &&
                (this.xaxisLabels = i.globals.timescaleLabels.slice()),
              i.config.xaxis.overwriteCategories &&
                (this.xaxisLabels = i.config.xaxis.overwriteCategories),
              (this.drawnLabels = []),
              (this.drawnLabelsRects = []),
              "top" === i.config.xaxis.position
                ? (this.offY = 0)
                : (this.offY = i.globals.gridHeight),
              (this.offY = this.offY + i.config.xaxis.axisBorder.offsetY),
              (this.isCategoryBarHorizontal =
                "bar" === i.config.chart.type &&
                i.config.plotOptions.bar.horizontal),
              (this.xaxisFontSize = i.config.xaxis.labels.style.fontSize),
              (this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily),
              (this.xaxisForeColors = i.config.xaxis.labels.style.colors),
              (this.xaxisBorderWidth = i.config.xaxis.axisBorder.width),
              this.isCategoryBarHorizontal &&
                (this.xaxisBorderWidth =
                  i.config.yaxis[0].axisBorder.width.toString()),
              this.xaxisBorderWidth.indexOf("%") > -1
                ? (this.xaxisBorderWidth =
                    (i.globals.gridWidth *
                      parseInt(this.xaxisBorderWidth, 10)) /
                    100)
                : (this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10)),
              (this.xaxisBorderHeight = i.config.xaxis.axisBorder.height),
              (this.yaxis = i.config.yaxis[0]);
          }
          return (
            l(t, [
              {
                key: "drawXaxis",
                value: function () {
                  var t = this.w,
                    e = new x(this.ctx),
                    n = e.group({
                      class: "apexcharts-xaxis",
                      transform: "translate("
                        .concat(t.config.xaxis.offsetX, ", ")
                        .concat(t.config.xaxis.offsetY, ")"),
                    }),
                    i = e.group({
                      class: "apexcharts-xaxis-texts-g",
                      transform: "translate("
                        .concat(t.globals.translateXAxisX, ", ")
                        .concat(t.globals.translateXAxisY, ")"),
                    });
                  n.add(i);
                  for (var r = [], o = 0; o < this.xaxisLabels.length; o++)
                    r.push(this.xaxisLabels[o]);
                  if (
                    (this.drawXAxisLabelAndGroup(
                      !0,
                      e,
                      i,
                      r,
                      t.globals.isXNumeric,
                      function (t, e) {
                        return e;
                      }
                    ),
                    t.globals.hasXaxisGroups)
                  ) {
                    var a = t.globals.groups;
                    r = [];
                    for (var s = 0; s < a.length; s++) r.push(a[s].title);
                    var l = {};
                    t.config.xaxis.group.style &&
                      ((l.xaxisFontSize = t.config.xaxis.group.style.fontSize),
                      (l.xaxisFontFamily =
                        t.config.xaxis.group.style.fontFamily),
                      (l.xaxisForeColors = t.config.xaxis.group.style.colors),
                      (l.fontWeight = t.config.xaxis.group.style.fontWeight),
                      (l.cssClass = t.config.xaxis.group.style.cssClass)),
                      this.drawXAxisLabelAndGroup(
                        !1,
                        e,
                        i,
                        r,
                        !1,
                        function (t, e) {
                          return a[t].cols * e;
                        },
                        l
                      );
                  }
                  if (void 0 !== t.config.xaxis.title.text) {
                    var c = e.group({ class: "apexcharts-xaxis-title" }),
                      d = e.drawText({
                        x:
                          t.globals.gridWidth / 2 +
                          t.config.xaxis.title.offsetX,
                        y:
                          this.offY +
                          parseFloat(this.xaxisFontSize) +
                          ("bottom" === t.config.xaxis.position
                            ? t.globals.xAxisLabelsHeight
                            : -t.globals.xAxisLabelsHeight - 10) +
                          t.config.xaxis.title.offsetY,
                        text: t.config.xaxis.title.text,
                        textAnchor: "middle",
                        fontSize: t.config.xaxis.title.style.fontSize,
                        fontFamily: t.config.xaxis.title.style.fontFamily,
                        fontWeight: t.config.xaxis.title.style.fontWeight,
                        foreColor: t.config.xaxis.title.style.color,
                        cssClass:
                          "apexcharts-xaxis-title-text " +
                          t.config.xaxis.title.style.cssClass,
                      });
                    c.add(d), n.add(c);
                  }
                  if (t.config.xaxis.axisBorder.show) {
                    var u = t.globals.barPadForNumericAxis,
                      p = e.drawLine(
                        t.globals.padHorizontal +
                          t.config.xaxis.axisBorder.offsetX -
                          u,
                        this.offY,
                        this.xaxisBorderWidth + u,
                        this.offY,
                        t.config.xaxis.axisBorder.color,
                        0,
                        this.xaxisBorderHeight
                      );
                    this.elgrid &&
                    this.elgrid.elGridBorders &&
                    t.config.grid.show
                      ? this.elgrid.elGridBorders.add(p)
                      : n.add(p);
                  }
                  return n;
                },
              },
              {
                key: "drawXAxisLabelAndGroup",
                value: function (t, e, n, i, r, o) {
                  var a,
                    s = this,
                    l =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : {},
                    c = [],
                    d = [],
                    u = this.w,
                    p = l.xaxisFontSize || this.xaxisFontSize,
                    h = l.xaxisFontFamily || this.xaxisFontFamily,
                    f = l.xaxisForeColors || this.xaxisForeColors,
                    b = l.fontWeight || u.config.xaxis.labels.style.fontWeight,
                    m = l.cssClass || u.config.xaxis.labels.style.cssClass,
                    g = u.globals.padHorizontal,
                    v = i.length,
                    _ =
                      "category" === u.config.xaxis.type
                        ? u.globals.dataPoints
                        : v;
                  if ((0 === _ && v > _ && (_ = v), r)) {
                    var y = _ > 1 ? _ - 1 : _;
                    (a = u.globals.gridWidth / Math.min(y, v - 1)),
                      (g = g + o(0, a) / 2 + u.config.xaxis.labels.offsetX);
                  } else
                    (a = u.globals.gridWidth / _),
                      (g = g + o(0, a) + u.config.xaxis.labels.offsetX);
                  for (
                    var M = function (r) {
                        var l = g - o(r, a) / 2 + u.config.xaxis.labels.offsetX;
                        0 === r &&
                          1 === v &&
                          a / 2 === g &&
                          1 === _ &&
                          (l = u.globals.gridWidth / 2);
                        var y = s.axesUtils.getLabel(
                            i,
                            u.globals.timescaleLabels,
                            l,
                            r,
                            c,
                            p,
                            t
                          ),
                          M = 28;
                        if (
                          (u.globals.rotateXLabels && t && (M = 22),
                          u.config.xaxis.title.text &&
                            "top" === u.config.xaxis.position &&
                            (M +=
                              parseFloat(u.config.xaxis.title.style.fontSize) +
                              2),
                          t ||
                            (M =
                              M +
                              parseFloat(p) +
                              (u.globals.xAxisLabelsHeight -
                                u.globals.xAxisGroupLabelsHeight) +
                              (u.globals.rotateXLabels ? 10 : 0)),
                          (y =
                            void 0 !== u.config.xaxis.tickAmount &&
                            "dataPoints" !== u.config.xaxis.tickAmount &&
                            "datetime" !== u.config.xaxis.type
                              ? s.axesUtils.checkLabelBasedOnTickamount(r, y, v)
                              : s.axesUtils.checkForOverflowingLabels(
                                  r,
                                  y,
                                  v,
                                  c,
                                  d
                                )),
                          u.config.xaxis.labels.show)
                        ) {
                          var O = e.drawText({
                            x: y.x,
                            y:
                              s.offY +
                              u.config.xaxis.labels.offsetY +
                              M -
                              ("top" === u.config.xaxis.position
                                ? u.globals.xAxisHeight +
                                  u.config.xaxis.axisTicks.height -
                                  2
                                : 0),
                            text: y.text,
                            textAnchor: "middle",
                            fontWeight: y.isBold ? 600 : b,
                            fontSize: p,
                            fontFamily: h,
                            foreColor: Array.isArray(f)
                              ? t && u.config.xaxis.convertedCatToNumeric
                                ? f[u.globals.minX + r - 1]
                                : f[r]
                              : f,
                            isPlainText: !1,
                            cssClass:
                              (t
                                ? "apexcharts-xaxis-label "
                                : "apexcharts-xaxis-group-label ") + m,
                          });
                          if (
                            (n.add(O),
                            O.on("click", function (t) {
                              if (
                                "function" ==
                                typeof u.config.chart.events.xAxisLabelClick
                              ) {
                                var e = Object.assign({}, u, { labelIndex: r });
                                u.config.chart.events.xAxisLabelClick(
                                  t,
                                  s.ctx,
                                  e
                                );
                              }
                            }),
                            t)
                          ) {
                            var w = document.createElementNS(
                              u.globals.SVGNS,
                              "title"
                            );
                            (w.textContent = Array.isArray(y.text)
                              ? y.text.join(" ")
                              : y.text),
                              O.node.appendChild(w),
                              "" !== y.text && (c.push(y.text), d.push(y));
                          }
                        }
                        r < v - 1 && (g += o(r + 1, a));
                      },
                      O = 0;
                    O <= v - 1;
                    O++
                  )
                    M(O);
                },
              },
              {
                key: "drawXaxisInversed",
                value: function (t) {
                  var e,
                    n,
                    i = this,
                    r = this.w,
                    o = new x(this.ctx),
                    a = r.config.yaxis[0].opposite
                      ? r.globals.translateYAxisX[t]
                      : 0,
                    s = o.group({
                      class: "apexcharts-yaxis apexcharts-xaxis-inversed",
                      rel: t,
                    }),
                    l = o.group({
                      class:
                        "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                      transform: "translate(" + a + ", 0)",
                    });
                  s.add(l);
                  var c = [];
                  if (r.config.yaxis[t].show)
                    for (var d = 0; d < this.xaxisLabels.length; d++)
                      c.push(this.xaxisLabels[d]);
                  (e = r.globals.gridHeight / c.length), (n = -e / 2.2);
                  var u = r.globals.yLabelFormatters[0],
                    p = r.config.yaxis[0].labels;
                  if (p.show)
                    for (
                      var h = function (a) {
                          var s = void 0 === c[a] ? "" : c[a];
                          s = u(s, { seriesIndex: t, dataPointIndex: a, w: r });
                          var d = i.axesUtils.getYAxisForeColor(
                              p.style.colors,
                              t
                            ),
                            h = 0;
                          Array.isArray(s) &&
                            (h =
                              (s.length / 2) * parseInt(p.style.fontSize, 10));
                          var f = p.offsetX - 15,
                            b = "end";
                          i.yaxis.opposite && (b = "start"),
                            "left" === r.config.yaxis[0].labels.align
                              ? ((f = p.offsetX), (b = "start"))
                              : "center" === r.config.yaxis[0].labels.align
                              ? ((f = p.offsetX), (b = "middle"))
                              : "right" === r.config.yaxis[0].labels.align &&
                                (b = "end");
                          var m = o.drawText({
                            x: f,
                            y: n + e + p.offsetY - h,
                            text: s,
                            textAnchor: b,
                            foreColor: Array.isArray(d) ? d[a] : d,
                            fontSize: p.style.fontSize,
                            fontFamily: p.style.fontFamily,
                            fontWeight: p.style.fontWeight,
                            isPlainText: !1,
                            cssClass:
                              "apexcharts-yaxis-label " + p.style.cssClass,
                            maxWidth: p.maxWidth,
                          });
                          l.add(m),
                            m.on("click", function (t) {
                              if (
                                "function" ==
                                typeof r.config.chart.events.xAxisLabelClick
                              ) {
                                var e = Object.assign({}, r, { labelIndex: a });
                                r.config.chart.events.xAxisLabelClick(
                                  t,
                                  i.ctx,
                                  e
                                );
                              }
                            });
                          var g = document.createElementNS(
                            r.globals.SVGNS,
                            "title"
                          );
                          if (
                            ((g.textContent = Array.isArray(s)
                              ? s.join(" ")
                              : s),
                            m.node.appendChild(g),
                            0 !== r.config.yaxis[t].labels.rotate)
                          ) {
                            var v = o.rotateAroundCenter(m.node);
                            m.node.setAttribute(
                              "transform",
                              "rotate("
                                .concat(r.config.yaxis[t].labels.rotate, " 0 ")
                                .concat(v.y, ")")
                            );
                          }
                          n += e;
                        },
                        f = 0;
                      f <= c.length - 1;
                      f++
                    )
                      h(f);
                  if (void 0 !== r.config.yaxis[0].title.text) {
                    var b = o.group({
                        class:
                          "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                        transform: "translate(" + a + ", 0)",
                      }),
                      m = o.drawText({
                        x: r.config.yaxis[0].title.offsetX,
                        y:
                          r.globals.gridHeight / 2 +
                          r.config.yaxis[0].title.offsetY,
                        text: r.config.yaxis[0].title.text,
                        textAnchor: "middle",
                        foreColor: r.config.yaxis[0].title.style.color,
                        fontSize: r.config.yaxis[0].title.style.fontSize,
                        fontWeight: r.config.yaxis[0].title.style.fontWeight,
                        fontFamily: r.config.yaxis[0].title.style.fontFamily,
                        cssClass:
                          "apexcharts-yaxis-title-text " +
                          r.config.yaxis[0].title.style.cssClass,
                      });
                    b.add(m), s.add(b);
                  }
                  var g = 0;
                  this.isCategoryBarHorizontal &&
                    r.config.yaxis[0].opposite &&
                    (g = r.globals.gridWidth);
                  var v = r.config.xaxis.axisBorder;
                  if (v.show) {
                    var _ = o.drawLine(
                      r.globals.padHorizontal + v.offsetX + g,
                      1 + v.offsetY,
                      r.globals.padHorizontal + v.offsetX + g,
                      r.globals.gridHeight + v.offsetY,
                      v.color,
                      0
                    );
                    this.elgrid &&
                    this.elgrid.elGridBorders &&
                    r.config.grid.show
                      ? this.elgrid.elGridBorders.add(_)
                      : s.add(_);
                  }
                  return (
                    r.config.yaxis[0].axisTicks.show &&
                      this.axesUtils.drawYAxisTicks(
                        g,
                        c.length,
                        r.config.yaxis[0].axisBorder,
                        r.config.yaxis[0].axisTicks,
                        0,
                        e,
                        s
                      ),
                    s
                  );
                },
              },
              {
                key: "drawXaxisTicks",
                value: function (t, e, n) {
                  var i = this.w,
                    r = t;
                  if (!(t < 0 || t - 2 > i.globals.gridWidth)) {
                    var o = this.offY + i.config.xaxis.axisTicks.offsetY;
                    if (
                      ((e = e + o + i.config.xaxis.axisTicks.height),
                      "top" === i.config.xaxis.position &&
                        (e = o - i.config.xaxis.axisTicks.height),
                      i.config.xaxis.axisTicks.show)
                    ) {
                      var a = new x(this.ctx).drawLine(
                        t + i.config.xaxis.axisTicks.offsetX,
                        o + i.config.xaxis.offsetY,
                        r + i.config.xaxis.axisTicks.offsetX,
                        e + i.config.xaxis.offsetY,
                        i.config.xaxis.axisTicks.color
                      );
                      n.add(a), a.node.classList.add("apexcharts-xaxis-tick");
                    }
                  }
                },
              },
              {
                key: "getXAxisTicksPositions",
                value: function () {
                  var t = this.w,
                    e = [],
                    n = this.xaxisLabels.length,
                    i = t.globals.padHorizontal;
                  if (t.globals.timescaleLabels.length > 0)
                    for (var r = 0; r < n; r++)
                      (i = this.xaxisLabels[r].position), e.push(i);
                  else
                    for (var o = n, a = 0; a < o; a++) {
                      var s = o;
                      t.globals.isXNumeric &&
                        "bar" !== t.config.chart.type &&
                        (s -= 1),
                        (i += t.globals.gridWidth / s),
                        e.push(i);
                    }
                  return e;
                },
              },
              {
                key: "xAxisLabelCorrections",
                value: function () {
                  var t = this.w,
                    e = new x(this.ctx),
                    n = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-xaxis-texts-g"
                    ),
                    i = t.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"
                    ),
                    r = t.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-yaxis-inversed text"
                    ),
                    o = t.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-xaxis-inversed-texts-g text tspan"
                    );
                  if (
                    t.globals.rotateXLabels ||
                    t.config.xaxis.labels.rotateAlways
                  )
                    for (var a = 0; a < i.length; a++) {
                      var s = e.rotateAroundCenter(i[a]);
                      (s.y = s.y - 1),
                        (s.x = s.x + 1),
                        i[a].setAttribute(
                          "transform",
                          "rotate("
                            .concat(t.config.xaxis.labels.rotate, " ")
                            .concat(s.x, " ")
                            .concat(s.y, ")")
                        ),
                        i[a].setAttribute("text-anchor", "end"),
                        n.setAttribute(
                          "transform",
                          "translate(0, ".concat(-10, ")")
                        );
                      var l = i[a].childNodes;
                      t.config.xaxis.labels.trim &&
                        Array.prototype.forEach.call(l, function (n) {
                          e.placeTextWithEllipsis(
                            n,
                            n.textContent,
                            t.globals.xAxisLabelsHeight -
                              ("bottom" === t.config.legend.position ? 20 : 10)
                          );
                        });
                    }
                  else
                    !(function () {
                      for (
                        var n =
                            t.globals.gridWidth / (t.globals.labels.length + 1),
                          r = 0;
                        r < i.length;
                        r++
                      ) {
                        var o = i[r].childNodes;
                        t.config.xaxis.labels.trim &&
                          "datetime" !== t.config.xaxis.type &&
                          Array.prototype.forEach.call(o, function (t) {
                            e.placeTextWithEllipsis(t, t.textContent, n);
                          });
                      }
                    })();
                  if (r.length > 0) {
                    var c = r[r.length - 1].getBBox(),
                      d = r[0].getBBox();
                    c.x < -20 &&
                      r[r.length - 1].parentNode.removeChild(r[r.length - 1]),
                      d.x + d.width > t.globals.gridWidth &&
                        !t.globals.isBarHorizontal &&
                        r[0].parentNode.removeChild(r[0]);
                    for (var u = 0; u < o.length; u++)
                      e.placeTextWithEllipsis(
                        o[u],
                        o[u].textContent,
                        t.config.yaxis[0].labels.maxWidth -
                          (t.config.yaxis[0].title.text
                            ? 2 *
                              parseFloat(t.config.yaxis[0].title.style.fontSize)
                            : 0) -
                          15
                      );
                  }
                },
              },
            ]),
            t
          );
        })(),
        J = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
            var n = this.w;
            (this.xaxisLabels = n.globals.labels.slice()),
              (this.axesUtils = new D(e)),
              (this.isRangeBar =
                n.globals.seriesRange.length && n.globals.isBarHorizontal),
              n.globals.timescaleLabels.length > 0 &&
                (this.xaxisLabels = n.globals.timescaleLabels.slice());
          }
          return (
            l(t, [
              {
                key: "drawGridArea",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    e = this.w,
                    n = new x(this.ctx);
                  t || (t = n.group({ class: "apexcharts-grid" }));
                  var i = n.drawLine(
                      e.globals.padHorizontal,
                      1,
                      e.globals.padHorizontal,
                      e.globals.gridHeight,
                      "transparent"
                    ),
                    r = n.drawLine(
                      e.globals.padHorizontal,
                      e.globals.gridHeight,
                      e.globals.gridWidth,
                      e.globals.gridHeight,
                      "transparent"
                    );
                  return t.add(r), t.add(i), t;
                },
              },
              {
                key: "drawGrid",
                value: function () {
                  if (this.w.globals.axisCharts) {
                    var t = this.renderGrid();
                    return this.drawGridArea(t.el), t;
                  }
                  return null;
                },
              },
              {
                key: "createGridMask",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = new x(this.ctx),
                    i = Array.isArray(t.config.stroke.width)
                      ? Math.max.apply(Math, v(t.config.stroke.width))
                      : t.config.stroke.width,
                    r = function (t) {
                      var n = document.createElementNS(e.SVGNS, "clipPath");
                      return n.setAttribute("id", t), n;
                    };
                  (e.dom.elGridRectMask = r("gridRectMask".concat(e.cuid))),
                    (e.dom.elGridRectBarMask = r(
                      "gridRectBarMask".concat(e.cuid)
                    )),
                    (e.dom.elGridRectMarkerMask = r(
                      "gridRectMarkerMask".concat(e.cuid)
                    )),
                    (e.dom.elForecastMask = r("forecastMask".concat(e.cuid))),
                    (e.dom.elNonForecastMask = r(
                      "nonForecastMask".concat(e.cuid)
                    ));
                  var o = 0,
                    a = 0;
                  (["bar", "rangeBar", "candlestick", "boxPlot"].includes(
                    t.config.chart.type
                  ) ||
                    t.globals.comboBarCount > 0) &&
                    t.globals.isXNumeric &&
                    !t.globals.isBarHorizontal &&
                    ((o = Math.max(
                      t.config.grid.padding.left,
                      e.barPadForNumericAxis
                    )),
                    (a = Math.max(
                      t.config.grid.padding.right,
                      e.barPadForNumericAxis
                    ))),
                    (e.dom.elGridRect = n.drawRect(
                      0,
                      0,
                      e.gridWidth,
                      e.gridHeight,
                      0,
                      "#fff"
                    )),
                    (e.dom.elGridRectBar = n.drawRect(
                      -i / 2 - o - 2,
                      -i / 2 - 2,
                      e.gridWidth + i + a + o + 4,
                      e.gridHeight + i + 4,
                      0,
                      "#fff"
                    ));
                  var s = t.globals.markers.largestSize;
                  (e.dom.elGridRectMarker = n.drawRect(
                    -s,
                    -s,
                    e.gridWidth + 2 * s,
                    e.gridHeight + 2 * s,
                    0,
                    "#fff"
                  )),
                    e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),
                    e.dom.elGridRectBarMask.appendChild(
                      e.dom.elGridRectBar.node
                    ),
                    e.dom.elGridRectMarkerMask.appendChild(
                      e.dom.elGridRectMarker.node
                    );
                  var l = e.dom.baseEl.querySelector("defs");
                  l.appendChild(e.dom.elGridRectMask),
                    l.appendChild(e.dom.elGridRectBarMask),
                    l.appendChild(e.dom.elGridRectMarkerMask),
                    l.appendChild(e.dom.elForecastMask),
                    l.appendChild(e.dom.elNonForecastMask);
                },
              },
              {
                key: "_drawGridLines",
                value: function (t) {
                  var e = t.i,
                    n = t.x1,
                    i = t.y1,
                    r = t.x2,
                    o = t.y2,
                    a = t.xCount,
                    s = t.parent,
                    l = this.w;
                  if (
                    !(
                      (0 === e && l.globals.skipFirstTimelinelabel) ||
                      (e === a - 1 &&
                        l.globals.skipLastTimelinelabel &&
                        !l.config.xaxis.labels.formatter) ||
                      "radar" === l.config.chart.type
                    )
                  ) {
                    l.config.grid.xaxis.lines.show &&
                      this._drawGridLine({
                        i: e,
                        x1: n,
                        y1: i,
                        x2: r,
                        y2: o,
                        xCount: a,
                        parent: s,
                      });
                    var c = 0;
                    if (
                      l.globals.hasXaxisGroups &&
                      "between" === l.config.xaxis.tickPlacement
                    ) {
                      var d = l.globals.groups;
                      if (d) {
                        for (var u = 0, p = 0; u < e && p < d.length; p++)
                          u += d[p].cols;
                        u === e && (c = 0.6 * l.globals.xAxisLabelsHeight);
                      }
                    }
                    new Z(this.ctx).drawXaxisTicks(
                      n,
                      c,
                      l.globals.dom.elGraphical
                    );
                  }
                },
              },
              {
                key: "_drawGridLine",
                value: function (t) {
                  var e = t.i,
                    n = t.x1,
                    i = t.y1,
                    r = t.x2,
                    o = t.y2,
                    a = t.xCount,
                    s = t.parent,
                    l = this.w,
                    c = s.node.classList.contains(
                      "apexcharts-gridlines-horizontal"
                    ),
                    d = l.globals.barPadForNumericAxis,
                    u =
                      (0 === i && 0 === o) ||
                      (0 === n && 0 === r) ||
                      (i === l.globals.gridHeight &&
                        o === l.globals.gridHeight) ||
                      (l.globals.isBarHorizontal && (0 === e || e === a - 1)),
                    p = new x(this).drawLine(
                      n - (c ? d : 0),
                      i,
                      r + (c ? d : 0),
                      o,
                      l.config.grid.borderColor,
                      l.config.grid.strokeDashArray
                    );
                  p.node.classList.add("apexcharts-gridline"),
                    u && l.config.grid.show
                      ? this.elGridBorders.add(p)
                      : s.add(p);
                },
              },
              {
                key: "_drawGridBandRect",
                value: function (t) {
                  var e = t.c,
                    n = t.x1,
                    i = t.y1,
                    r = t.x2,
                    o = t.y2,
                    a = t.type,
                    s = this.w,
                    l = new x(this.ctx),
                    c = s.globals.barPadForNumericAxis,
                    d = s.config.grid[a].colors[e],
                    u = l.drawRect(
                      n - ("row" === a ? c : 0),
                      i,
                      r + ("row" === a ? 2 * c : 0),
                      o,
                      0,
                      d,
                      s.config.grid[a].opacity
                    );
                  this.elg.add(u),
                    u.attr(
                      "clip-path",
                      "url(#gridRectMask".concat(s.globals.cuid, ")")
                    ),
                    u.node.classList.add("apexcharts-grid-".concat(a));
                },
              },
              {
                key: "_drawXYLines",
                value: function (t) {
                  var e = this,
                    n = t.xCount,
                    i = t.tickAmount,
                    r = this.w;
                  if (
                    r.config.grid.xaxis.lines.show ||
                    r.config.xaxis.axisTicks.show
                  ) {
                    var o,
                      a = r.globals.padHorizontal,
                      s = r.globals.gridHeight;
                    r.globals.timescaleLabels.length
                      ? (function (t) {
                          for (
                            var i = t.xC,
                              r = t.x1,
                              o = t.y1,
                              a = t.x2,
                              s = t.y2,
                              l = 0;
                            l < i;
                            l++
                          )
                            (r = e.xaxisLabels[l].position),
                              (a = e.xaxisLabels[l].position),
                              e._drawGridLines({
                                i: l,
                                x1: r,
                                y1: o,
                                x2: a,
                                y2: s,
                                xCount: n,
                                parent: e.elgridLinesV,
                              });
                        })({ xC: n, x1: a, y1: 0, x2: o, y2: s })
                      : (r.globals.isXNumeric &&
                          (n = r.globals.xAxisScale.result.length),
                        (function (t) {
                          for (
                            var i = t.xC,
                              o = t.x1,
                              a = t.y1,
                              s = t.x2,
                              l = t.y2,
                              c = 0;
                            c < i + (r.globals.isXNumeric ? 0 : 1);
                            c++
                          )
                            0 === c &&
                              1 === i &&
                              1 === r.globals.dataPoints &&
                              (s = o = r.globals.gridWidth / 2),
                              e._drawGridLines({
                                i: c,
                                x1: o,
                                y1: a,
                                x2: s,
                                y2: l,
                                xCount: n,
                                parent: e.elgridLinesV,
                              }),
                              (s = o +=
                                r.globals.gridWidth /
                                (r.globals.isXNumeric ? i - 1 : i));
                        })({ xC: n, x1: a, y1: 0, x2: o, y2: s }));
                  }
                  if (r.config.grid.yaxis.lines.show) {
                    var l = 0,
                      c = 0,
                      d = r.globals.gridWidth,
                      u = i + 1;
                    this.isRangeBar && (u = r.globals.labels.length);
                    for (var p = 0; p < u + (this.isRangeBar ? 1 : 0); p++)
                      this._drawGridLine({
                        i: p,
                        xCount: u + (this.isRangeBar ? 1 : 0),
                        x1: 0,
                        y1: l,
                        x2: d,
                        y2: c,
                        parent: this.elgridLinesH,
                      }),
                        (c = l +=
                          r.globals.gridHeight / (this.isRangeBar ? u : i));
                  }
                },
              },
              {
                key: "_drawInvertedXYLines",
                value: function (t) {
                  var e = t.xCount,
                    n = this.w;
                  if (
                    n.config.grid.xaxis.lines.show ||
                    n.config.xaxis.axisTicks.show
                  )
                    for (
                      var i,
                        r = n.globals.padHorizontal,
                        o = n.globals.gridHeight,
                        a = 0;
                      a < e + 1;
                      a++
                    )
                      n.config.grid.xaxis.lines.show &&
                        this._drawGridLine({
                          i: a,
                          xCount: e + 1,
                          x1: r,
                          y1: 0,
                          x2: i,
                          y2: o,
                          parent: this.elgridLinesV,
                        }),
                        new Z(this.ctx).drawXaxisTicks(
                          r,
                          0,
                          n.globals.dom.elGraphical
                        ),
                        (i = r += n.globals.gridWidth / e);
                  if (n.config.grid.yaxis.lines.show)
                    for (
                      var s = 0, l = 0, c = n.globals.gridWidth, d = 0;
                      d < n.globals.dataPoints + 1;
                      d++
                    )
                      this._drawGridLine({
                        i: d,
                        xCount: n.globals.dataPoints + 1,
                        x1: 0,
                        y1: s,
                        x2: c,
                        y2: l,
                        parent: this.elgridLinesH,
                      }),
                        (l = s += n.globals.gridHeight / n.globals.dataPoints);
                },
              },
              {
                key: "renderGrid",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = new x(this.ctx);
                  (this.elg = n.group({ class: "apexcharts-grid" })),
                    (this.elgridLinesH = n.group({
                      class: "apexcharts-gridlines-horizontal",
                    })),
                    (this.elgridLinesV = n.group({
                      class: "apexcharts-gridlines-vertical",
                    })),
                    (this.elGridBorders = n.group({
                      class: "apexcharts-grid-borders",
                    })),
                    this.elg.add(this.elgridLinesH),
                    this.elg.add(this.elgridLinesV),
                    t.config.grid.show ||
                      (this.elgridLinesV.hide(),
                      this.elgridLinesH.hide(),
                      this.elGridBorders.hide());
                  for (
                    var i = 0;
                    i < e.seriesYAxisMap.length &&
                    e.ignoreYAxisIndexes.includes(i);

                  )
                    i++;
                  i === e.seriesYAxisMap.length && (i = 0);
                  var r,
                    o,
                    a,
                    s,
                    l = e.yAxisScale[i].result.length - 1;
                  return (
                    !e.isBarHorizontal || this.isRangeBar
                      ? ((r = this.xaxisLabels.length),
                        this.isRangeBar &&
                          ((l = e.labels.length),
                          t.config.xaxis.tickAmount &&
                            t.config.xaxis.labels.formatter &&
                            (r = t.config.xaxis.tickAmount),
                          (null === (o = e.yAxisScale) ||
                          void 0 === o ||
                          null === (a = o[i]) ||
                          void 0 === a ||
                          null === (s = a.result) ||
                          void 0 === s
                            ? void 0
                            : s.length) > 0 &&
                            "datetime" !== t.config.xaxis.type &&
                            (r = e.yAxisScale[i].result.length - 1)),
                        this._drawXYLines({ xCount: r, tickAmount: l }))
                      : ((r = l),
                        (l = e.xTickAmount),
                        this._drawInvertedXYLines({
                          xCount: r,
                          tickAmount: l,
                        })),
                    this.drawGridBands(r, l),
                    {
                      el: this.elg,
                      elGridBorders: this.elGridBorders,
                      xAxisTickWidth: e.gridWidth / r,
                    }
                  );
                },
              },
              {
                key: "drawGridBands",
                value: function (t, e) {
                  var n,
                    i,
                    r = this,
                    o = this.w;
                  if (
                    ((null === (n = o.config.grid.row.colors) || void 0 === n
                      ? void 0
                      : n.length) > 0 &&
                      (function (t, n, i, a, s, l) {
                        for (var c = 0, d = 0; c < n; c++, d++)
                          d >= o.config.grid.row.colors.length && (d = 0),
                            r._drawGridBandRect({
                              c: d,
                              x1: 0,
                              y1: a,
                              x2: s,
                              y2: l,
                              type: "row",
                            }),
                            (a += o.globals.gridHeight / e);
                      })(
                        0,
                        e,
                        0,
                        0,
                        o.globals.gridWidth,
                        o.globals.gridHeight / e
                      ),
                    (null === (i = o.config.grid.column.colors) || void 0 === i
                      ? void 0
                      : i.length) > 0)
                  ) {
                    var a =
                      o.globals.isBarHorizontal ||
                      "on" !== o.config.xaxis.tickPlacement ||
                      ("category" !== o.config.xaxis.type &&
                        !o.config.xaxis.convertedCatToNumeric)
                        ? t
                        : t - 1;
                    o.globals.isXNumeric &&
                      (a = o.globals.xAxisScale.result.length - 1);
                    for (
                      var s = o.globals.padHorizontal,
                        l = o.globals.padHorizontal + o.globals.gridWidth / a,
                        c = o.globals.gridHeight,
                        d = 0,
                        u = 0;
                      d < t;
                      d++, u++
                    ) {
                      var p;
                      u >= o.config.grid.column.colors.length && (u = 0),
                        "datetime" === o.config.xaxis.type &&
                          ((s = this.xaxisLabels[d].position),
                          (l =
                            ((null === (p = this.xaxisLabels[d + 1]) ||
                            void 0 === p
                              ? void 0
                              : p.position) || o.globals.gridWidth) -
                            this.xaxisLabels[d].position)),
                        this._drawGridBandRect({
                          c: u,
                          x1: s,
                          y1: 0,
                          x2: l,
                          y2: c,
                          type: "column",
                        }),
                        (s += o.globals.gridWidth / a);
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        Q = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.coreUtils = new z(this.ctx));
          }
          return (
            l(t, [
              {
                key: "niceScale",
                value: function (t, e) {
                  var n,
                    i,
                    r,
                    o,
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    s = 1e-11,
                    l = this.w,
                    c = l.globals;
                  c.isBarHorizontal
                    ? ((n = l.config.xaxis),
                      (i = Math.max((c.svgWidth - 100) / 25, 2)))
                    : ((n = l.config.yaxis[a]),
                      (i = Math.max((c.svgHeight - 100) / 15, 2))),
                    O.isNumber(i) || (i = 10),
                    (r = void 0 !== n.min && null !== n.min),
                    (o = void 0 !== n.max && null !== n.min);
                  var d = void 0 !== n.stepSize && null !== n.stepSize,
                    u = void 0 !== n.tickAmount && null !== n.tickAmount,
                    p = u
                      ? n.tickAmount
                      : c.niceScaleDefaultTicks[
                          Math.min(
                            Math.round(i / 2),
                            c.niceScaleDefaultTicks.length - 1
                          )
                        ];
                  if (
                    (c.isMultipleYAxis &&
                      !u &&
                      c.multiAxisTickAmount > 0 &&
                      ((p = c.multiAxisTickAmount), (u = !0)),
                    (p =
                      "dataPoints" === p
                        ? c.dataPoints - 1
                        : Math.abs(Math.round(p))),
                    ((t === Number.MIN_VALUE && 0 === e) ||
                      (!O.isNumber(t) && !O.isNumber(e)) ||
                      (t === Number.MIN_VALUE && e === -Number.MAX_VALUE)) &&
                      ((t = O.isNumber(n.min) ? n.min : 0),
                      (e = O.isNumber(n.max) ? n.max : t + p),
                      (c.allSeriesCollapsed = !1)),
                    t > e)
                  ) {
                    var h = e;
                    (e = t), (t = h);
                  } else
                    t === e &&
                      ((t = 0 === t ? 0 : t - 1), (e = 0 === e ? 2 : e + 1));
                  var f = [];
                  p < 1 && (p = 1);
                  var b = p,
                    m = Math.abs(e - t);
                  !r && t > 0 && t / m < 0.15 && ((t = 0), (r = !0)),
                    !o && e < 0 && -e / m < 0.15 && ((e = 0), (o = !0));
                  var g = (m = Math.abs(e - t)) / b,
                    v = g,
                    _ = Math.floor(Math.log10(v)),
                    y = Math.pow(10, _),
                    M = Math.ceil(v / y);
                  if (
                    ((g = v =
                      (M =
                        c.niceScaleAllowedMagMsd[0 === c.yValueDecimal ? 0 : 1][
                          M
                        ]) * y),
                    c.isBarHorizontal && n.stepSize && "datetime" !== n.type
                      ? ((g = n.stepSize), (d = !0))
                      : d && (g = n.stepSize),
                    d && n.forceNiceScale)
                  ) {
                    var w = Math.floor(Math.log10(g));
                    g *= Math.pow(10, _ - w);
                  }
                  if (r && o) {
                    var A = m / b;
                    if (u)
                      if (d)
                        if (0 != O.mod(m, g)) {
                          var x = O.getGCD(g, A);
                          g = A / x < 10 ? x : A;
                        } else 0 == O.mod(g, A) ? (g = A) : ((A = g), (u = !1));
                      else g = A;
                    else if (d) 0 == O.mod(m, g) ? (A = g) : (g = A);
                    else if (0 == O.mod(m, g)) A = g;
                    else {
                      A = m / (b = Math.ceil(m / g));
                      var z = O.getGCD(m, g);
                      m / z < i && (A = z), (g = A);
                    }
                    b = Math.round(m / g);
                  } else {
                    if (r || o) {
                      if (o)
                        if (u) t = e - g * b;
                        else {
                          var C = t;
                          (t = g * Math.floor(t / g)),
                            Math.abs(e - t) / O.getGCD(m, g) > i &&
                              ((t = e - g * p),
                              (t += g * Math.floor((C - t) / g)));
                        }
                      else if (r)
                        if (u) e = t + g * b;
                        else {
                          var k = e;
                          (e = g * Math.ceil(e / g)),
                            Math.abs(e - t) / O.getGCD(m, g) > i &&
                              ((e = t + g * p),
                              (e += g * Math.ceil((k - e) / g)));
                        }
                    } else if (c.isMultipleYAxis && u) {
                      var S = g * Math.floor(t / g),
                        T = S + g * b;
                      T < e && (g *= 2),
                        (T = e),
                        (e = (t = S) + g * b),
                        (m = Math.abs(e - t)),
                        t > 0 && t < Math.abs(T - e) && ((t = 0), (e = g * b)),
                        e < 0 &&
                          -e < Math.abs(S - t) &&
                          ((e = 0), (t = -g * b));
                    } else
                      (t = g * Math.floor(t / g)), (e = g * Math.ceil(e / g));
                    (m = Math.abs(e - t)),
                      (g = O.getGCD(m, g)),
                      (b = Math.round(m / g));
                  }
                  if (
                    (u ||
                      r ||
                      o ||
                      ((b = Math.ceil((m - s) / (g + s))) > 16 &&
                        O.getPrimeFactors(b).length < 2 &&
                        b++),
                    !u &&
                      n.forceNiceScale &&
                      0 === c.yValueDecimal &&
                      b > m &&
                      ((b = m), (g = Math.round(m / b))),
                    b > i && ((!u && !d) || n.forceNiceScale))
                  ) {
                    var D = O.getPrimeFactors(b),
                      L = D.length - 1,
                      q = b;
                    t: for (var E = 0; E < L; E++)
                      for (var j = 0; j <= L - E; j++) {
                        for (
                          var P = Math.min(j + E, L), R = q, I = 1, W = j;
                          W <= P;
                          W++
                        )
                          I *= D[W];
                        if ((R /= I) < i) {
                          q = R;
                          break t;
                        }
                      }
                    (g = q === b ? m : m / q), (b = Math.round(m / g));
                  }
                  c.isMultipleYAxis &&
                    0 == c.multiAxisTickAmount &&
                    c.ignoreYAxisIndexes.indexOf(a) < 0 &&
                    (c.multiAxisTickAmount = b);
                  var N = t - g,
                    B = g * s;
                  do {
                    (N += g), f.push(O.stripNumber(N, 7));
                  } while (e - N > B);
                  return { result: f, niceMin: f[0], niceMax: f[f.length - 1] };
                },
              },
              {
                key: "linearScale",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 10,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    r =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : void 0,
                    o = Math.abs(e - t),
                    a = [];
                  if (t === e)
                    return {
                      result: (a = [t]),
                      niceMin: a[0],
                      niceMax: a[a.length - 1],
                    };
                  "dataPoints" ===
                    (n = this._adjustTicksForSmallRange(n, i, o)) &&
                    (n = this.w.globals.dataPoints - 1),
                    r || (r = o / n),
                    (r = Math.round(10 * (r + Number.EPSILON)) / 10),
                    n === Number.MAX_VALUE && ((n = 5), (r = 1));
                  for (var s = t; n >= 0; )
                    a.push(s), (s = O.preciseAddition(s, r)), (n -= 1);
                  return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
                },
              },
              {
                key: "logarithmicScaleNice",
                value: function (t, e, n) {
                  e <= 0 && (e = Math.max(t, n)),
                    t <= 0 && (t = Math.min(e, n));
                  for (
                    var i = [],
                      r = Math.ceil(Math.log(e) / Math.log(n) + 1),
                      o = Math.floor(Math.log(t) / Math.log(n));
                    o < r;
                    o++
                  )
                    i.push(Math.pow(n, o));
                  return { result: i, niceMin: i[0], niceMax: i[i.length - 1] };
                },
              },
              {
                key: "logarithmicScale",
                value: function (t, e, n) {
                  e <= 0 && (e = Math.max(t, n)),
                    t <= 0 && (t = Math.min(e, n));
                  for (
                    var i = [],
                      r = Math.log(e) / Math.log(n),
                      o = Math.log(t) / Math.log(n),
                      a = r - o,
                      s = Math.round(a),
                      l = a / s,
                      c = 0,
                      d = o;
                    c < s;
                    c++, d += l
                  )
                    i.push(Math.pow(n, d));
                  return (
                    i.push(Math.pow(n, r)),
                    { result: i, niceMin: t, niceMax: e }
                  );
                },
              },
              {
                key: "_adjustTicksForSmallRange",
                value: function (t, e, n) {
                  var i = t;
                  if (
                    void 0 !== e &&
                    this.w.config.yaxis[e].labels.formatter &&
                    void 0 === this.w.config.yaxis[e].tickAmount
                  ) {
                    var r = Number(this.w.config.yaxis[e].labels.formatter(1));
                    O.isNumber(r) &&
                      0 === this.w.globals.yValueDecimal &&
                      (i = Math.ceil(n));
                  }
                  return i < t ? i : t;
                },
              },
              {
                key: "setYScaleForIndex",
                value: function (t, e, n) {
                  var i = this.w.globals,
                    r = this.w.config,
                    o = i.isBarHorizontal ? r.xaxis : r.yaxis[t];
                  void 0 === i.yAxisScale[t] && (i.yAxisScale[t] = []);
                  var a = Math.abs(n - e);
                  o.logarithmic && a <= 5 && (i.invalidLogScale = !0),
                    o.logarithmic && a > 5
                      ? ((i.allSeriesCollapsed = !1),
                        (i.yAxisScale[t] = o.forceNiceScale
                          ? this.logarithmicScaleNice(e, n, o.logBase)
                          : this.logarithmicScale(e, n, o.logBase)))
                      : n !== -Number.MAX_VALUE &&
                        O.isNumber(n) &&
                        e !== Number.MAX_VALUE &&
                        O.isNumber(e)
                      ? ((i.allSeriesCollapsed = !1),
                        (i.yAxisScale[t] = this.niceScale(e, n, t)))
                      : (i.yAxisScale[t] = this.niceScale(
                          Number.MIN_VALUE,
                          0,
                          t
                        ));
                },
              },
              {
                key: "setXScale",
                value: function (t, e) {
                  var n = this.w,
                    i = n.globals,
                    r = Math.abs(e - t);
                  if (e !== -Number.MAX_VALUE && O.isNumber(e)) {
                    var o = i.xTickAmount + 1;
                    r < 10 && r > 1 && (o = r),
                      (i.xAxisScale = this.linearScale(
                        t,
                        e,
                        o,
                        0,
                        n.config.xaxis.stepSize
                      ));
                  } else i.xAxisScale = this.linearScale(0, 10, 10);
                  return i.xAxisScale;
                },
              },
              {
                key: "scaleMultipleYAxes",
                value: function () {
                  var t = this,
                    e = this.w.config,
                    n = this.w.globals;
                  this.coreUtils.setSeriesYAxisMappings();
                  var i = n.seriesYAxisMap,
                    r = n.minYArr,
                    o = n.maxYArr;
                  (n.allSeriesCollapsed = !0),
                    (n.barGroups = []),
                    i.forEach(function (i, a) {
                      var s = [];
                      i.forEach(function (t) {
                        var n = e.series[t].group;
                        s.indexOf(n) < 0 && s.push(n);
                      }),
                        i.length > 0
                          ? (function () {
                              var l,
                                c,
                                d = Number.MAX_VALUE,
                                u = -Number.MAX_VALUE,
                                p = d,
                                h = u;
                              if (e.chart.stacked)
                                !(function () {
                                  var t = new Array(n.dataPoints).fill(0),
                                    r = [],
                                    o = [],
                                    f = [];
                                  s.forEach(function () {
                                    r.push(
                                      t.map(function () {
                                        return Number.MIN_VALUE;
                                      })
                                    ),
                                      o.push(
                                        t.map(function () {
                                          return Number.MIN_VALUE;
                                        })
                                      ),
                                      f.push(
                                        t.map(function () {
                                          return Number.MIN_VALUE;
                                        })
                                      );
                                  });
                                  for (
                                    var b = function (t) {
                                        !l &&
                                          e.series[i[t]].type &&
                                          (l = e.series[i[t]].type);
                                        var d = i[t];
                                        (c = e.series[d].group
                                          ? e.series[d].group
                                          : "axis-".concat(a)),
                                          !(
                                            n.collapsedSeriesIndices.indexOf(
                                              d
                                            ) < 0 &&
                                            n.ancillaryCollapsedSeriesIndices.indexOf(
                                              d
                                            ) < 0
                                          ) ||
                                            ((n.allSeriesCollapsed = !1),
                                            s.forEach(function (t, i) {
                                              if (e.series[d].group === t)
                                                for (
                                                  var a = 0;
                                                  a < n.series[d].length;
                                                  a++
                                                ) {
                                                  var s = n.series[d][a];
                                                  s >= 0
                                                    ? (o[i][a] += s)
                                                    : (f[i][a] += s),
                                                    (r[i][a] += s),
                                                    (p = Math.min(p, s)),
                                                    (h = Math.max(h, s));
                                                }
                                            })),
                                          ("bar" !== l && "column" !== l) ||
                                            n.barGroups.push(c);
                                      },
                                      m = 0;
                                    m < i.length;
                                    m++
                                  )
                                    b(m);
                                  l || (l = e.chart.type),
                                    "bar" === l || "column" === l
                                      ? s.forEach(function (t, e) {
                                          (d = Math.min(
                                            d,
                                            Math.min.apply(null, f[e])
                                          )),
                                            (u = Math.max(
                                              u,
                                              Math.max.apply(null, o[e])
                                            ));
                                        })
                                      : (s.forEach(function (t, e) {
                                          (p = Math.min(
                                            p,
                                            Math.min.apply(null, r[e])
                                          )),
                                            (h = Math.max(
                                              h,
                                              Math.max.apply(null, r[e])
                                            ));
                                        }),
                                        (d = p),
                                        (u = h)),
                                    d === Number.MIN_VALUE &&
                                      u === Number.MIN_VALUE &&
                                      (u = -Number.MAX_VALUE);
                                })();
                              else
                                for (var f = 0; f < i.length; f++) {
                                  var b = i[f];
                                  (d = Math.min(d, r[b])),
                                    (u = Math.max(u, o[b])),
                                    !(
                                      n.collapsedSeriesIndices.indexOf(b) < 0 &&
                                      n.ancillaryCollapsedSeriesIndices.indexOf(
                                        b
                                      ) < 0
                                    ) || (n.allSeriesCollapsed = !1);
                                }
                              void 0 !== e.yaxis[a].min &&
                                (d =
                                  "function" == typeof e.yaxis[a].min
                                    ? e.yaxis[a].min(d)
                                    : e.yaxis[a].min),
                                void 0 !== e.yaxis[a].max &&
                                  (u =
                                    "function" == typeof e.yaxis[a].max
                                      ? e.yaxis[a].max(u)
                                      : e.yaxis[a].max),
                                (n.barGroups = n.barGroups.filter(function (
                                  t,
                                  e,
                                  n
                                ) {
                                  return n.indexOf(t) === e;
                                })),
                                t.setYScaleForIndex(a, d, u),
                                i.forEach(function (t) {
                                  (r[t] = n.yAxisScale[a].niceMin),
                                    (o[t] = n.yAxisScale[a].niceMax);
                                });
                            })()
                          : t.setYScaleForIndex(a, 0, -Number.MAX_VALUE);
                    });
                },
              },
            ]),
            t
          );
        })(),
        tt = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.scales = new Q(e));
          }
          return (
            l(t, [
              {
                key: "init",
                value: function () {
                  this.setYRange(), this.setXRange(), this.setZRange();
                },
              },
              {
                key: "getMinYMaxY",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Number.MAX_VALUE,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : -Number.MAX_VALUE,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    r = this.w.config,
                    o = this.w.globals,
                    a = -Number.MAX_VALUE,
                    s = Number.MIN_VALUE;
                  null === i && (i = t + 1);
                  var l = o.series,
                    c = l,
                    d = l;
                  "candlestick" === r.chart.type
                    ? ((c = o.seriesCandleL), (d = o.seriesCandleH))
                    : "boxPlot" === r.chart.type
                    ? ((c = o.seriesCandleO), (d = o.seriesCandleC))
                    : o.isRangeData &&
                      ((c = o.seriesRangeStart), (d = o.seriesRangeEnd));
                  var u = !1;
                  if (o.seriesX.length >= i) {
                    var p,
                      h =
                        null === (p = o.brushSource) || void 0 === p
                          ? void 0
                          : p.w.config.chart.brush;
                    ((r.chart.zoom.enabled && r.chart.zoom.autoScaleYaxis) ||
                      (null != h &&
                        h.enabled &&
                        null != h &&
                        h.autoScaleYaxis)) &&
                      (u = !0);
                  }
                  for (var f = t; f < i; f++) {
                    o.dataPoints = Math.max(o.dataPoints, l[f].length);
                    var b = r.series[f].type;
                    o.categoryLabels.length &&
                      (o.dataPoints = o.categoryLabels.filter(function (t) {
                        return void 0 !== t;
                      }).length),
                      o.labels.length &&
                        "datetime" !== r.xaxis.type &&
                        0 !==
                          o.series.reduce(function (t, e) {
                            return t + e.length;
                          }, 0) &&
                        (o.dataPoints = Math.max(
                          o.dataPoints,
                          o.labels.length
                        ));
                    var m = 0,
                      g = l[f].length - 1;
                    if (u) {
                      if (r.xaxis.min)
                        for (; m < g && o.seriesX[f][m] < r.xaxis.min; m++);
                      if (r.xaxis.max)
                        for (; g > m && o.seriesX[f][g] > r.xaxis.max; g--);
                    }
                    for (var v = m; v <= g && v < o.series[f].length; v++) {
                      var _ = l[f][v];
                      if (null !== _ && O.isNumber(_)) {
                        switch (
                          (void 0 !== d[f][v] &&
                            ((a = Math.max(a, d[f][v])),
                            (e = Math.min(e, d[f][v]))),
                          void 0 !== c[f][v] &&
                            ((e = Math.min(e, c[f][v])),
                            (n = Math.max(n, c[f][v]))),
                          b)
                        ) {
                          case "candlestick":
                            void 0 !== o.seriesCandleC[f][v] &&
                              ((a = Math.max(a, o.seriesCandleH[f][v])),
                              (e = Math.min(e, o.seriesCandleL[f][v])));
                            break;
                          case "boxPlot":
                            void 0 !== o.seriesCandleC[f][v] &&
                              ((a = Math.max(a, o.seriesCandleC[f][v])),
                              (e = Math.min(e, o.seriesCandleO[f][v])));
                        }
                        b &&
                          "candlestick" !== b &&
                          "boxPlot" !== b &&
                          "rangeArea" !== b &&
                          "rangeBar" !== b &&
                          ((a = Math.max(a, o.series[f][v])),
                          (e = Math.min(e, o.series[f][v]))),
                          (n = a),
                          o.seriesGoals[f] &&
                            o.seriesGoals[f][v] &&
                            Array.isArray(o.seriesGoals[f][v]) &&
                            o.seriesGoals[f][v].forEach(function (t) {
                              s !== Number.MIN_VALUE &&
                                ((s = Math.min(s, t.value)), (e = s)),
                                (a = Math.max(a, t.value)),
                                (n = a);
                            }),
                          O.isFloat(_) &&
                            ((_ = O.noExponents(_)),
                            (o.yValueDecimal = Math.max(
                              o.yValueDecimal,
                              _.toString().split(".")[1].length
                            ))),
                          s > c[f][v] && c[f][v] < 0 && (s = c[f][v]);
                      } else o.hasNullValues = !0;
                    }
                    ("bar" !== b && "column" !== b) ||
                      (s < 0 && a < 0 && ((a = 0), (n = Math.max(n, 0))),
                      s === Number.MIN_VALUE &&
                        ((s = 0), (e = Math.min(e, 0))));
                  }
                  return (
                    "rangeBar" === r.chart.type &&
                      o.seriesRangeStart.length &&
                      o.isBarHorizontal &&
                      (s = e),
                    "bar" === r.chart.type &&
                      (s < 0 && a < 0 && (a = 0),
                      s === Number.MIN_VALUE && (s = 0)),
                    { minY: s, maxY: a, lowestY: e, highestY: n }
                  );
                },
              },
              {
                key: "setYRange",
                value: function () {
                  var t = this.w.globals,
                    e = this.w.config;
                  (t.maxY = -Number.MAX_VALUE), (t.minY = Number.MIN_VALUE);
                  var n,
                    i = Number.MAX_VALUE;
                  if (t.isMultipleYAxis) {
                    i = Number.MAX_VALUE;
                    for (var r = 0; r < t.series.length; r++)
                      (n = this.getMinYMaxY(r)),
                        (t.minYArr[r] = n.lowestY),
                        (t.maxYArr[r] = n.highestY),
                        (i = Math.min(i, n.lowestY));
                  }
                  return (
                    (n = this.getMinYMaxY(0, i, null, t.series.length)),
                    "bar" === e.chart.type
                      ? ((t.minY = n.minY), (t.maxY = n.maxY))
                      : ((t.minY = n.lowestY), (t.maxY = n.highestY)),
                    (i = n.lowestY),
                    e.chart.stacked && this._setStackedMinMax(),
                    "line" === e.chart.type ||
                    "area" === e.chart.type ||
                    "scatter" === e.chart.type ||
                    "candlestick" === e.chart.type ||
                    "boxPlot" === e.chart.type ||
                    ("rangeBar" === e.chart.type && !t.isBarHorizontal)
                      ? t.minY === Number.MIN_VALUE &&
                        i !== -Number.MAX_VALUE &&
                        i !== t.maxY &&
                        (t.minY = i)
                      : (t.minY =
                          t.minY !== Number.MIN_VALUE
                            ? Math.min(n.minY, t.minY)
                            : n.minY),
                    e.yaxis.forEach(function (e, n) {
                      void 0 !== e.max &&
                        ("number" == typeof e.max
                          ? (t.maxYArr[n] = e.max)
                          : "function" == typeof e.max &&
                            (t.maxYArr[n] = e.max(
                              t.isMultipleYAxis ? t.maxYArr[n] : t.maxY
                            )),
                        (t.maxY = t.maxYArr[n])),
                        void 0 !== e.min &&
                          ("number" == typeof e.min
                            ? (t.minYArr[n] = e.min)
                            : "function" == typeof e.min &&
                              (t.minYArr[n] = e.min(
                                t.isMultipleYAxis
                                  ? t.minYArr[n] === Number.MIN_VALUE
                                    ? 0
                                    : t.minYArr[n]
                                  : t.minY
                              )),
                          (t.minY = t.minYArr[n]));
                    }),
                    t.isBarHorizontal &&
                      ["min", "max"].forEach(function (n) {
                        void 0 !== e.xaxis[n] &&
                          "number" == typeof e.xaxis[n] &&
                          ("min" === n
                            ? (t.minY = e.xaxis[n])
                            : (t.maxY = e.xaxis[n]));
                      }),
                    t.isMultipleYAxis
                      ? (this.scales.scaleMultipleYAxes(), (t.minY = i))
                      : (this.scales.setYScaleForIndex(0, t.minY, t.maxY),
                        (t.minY = t.yAxisScale[0].niceMin),
                        (t.maxY = t.yAxisScale[0].niceMax),
                        (t.minYArr[0] = t.minY),
                        (t.maxYArr[0] = t.maxY)),
                    (t.barGroups = []),
                    (t.lineGroups = []),
                    (t.areaGroups = []),
                    e.series.forEach(function (n) {
                      switch (n.type || e.chart.type) {
                        case "bar":
                        case "column":
                          t.barGroups.push(n.group);
                          break;
                        case "line":
                          t.lineGroups.push(n.group);
                          break;
                        case "area":
                          t.areaGroups.push(n.group);
                      }
                    }),
                    (t.barGroups = t.barGroups.filter(function (t, e, n) {
                      return n.indexOf(t) === e;
                    })),
                    (t.lineGroups = t.lineGroups.filter(function (t, e, n) {
                      return n.indexOf(t) === e;
                    })),
                    (t.areaGroups = t.areaGroups.filter(function (t, e, n) {
                      return n.indexOf(t) === e;
                    })),
                    {
                      minY: t.minY,
                      maxY: t.maxY,
                      minYArr: t.minYArr,
                      maxYArr: t.maxYArr,
                      yAxisScale: t.yAxisScale,
                    }
                  );
                },
              },
              {
                key: "setXRange",
                value: function () {
                  var t = this.w.globals,
                    e = this.w.config,
                    n =
                      "numeric" === e.xaxis.type ||
                      "datetime" === e.xaxis.type ||
                      ("category" === e.xaxis.type && !t.noLabelsProvided) ||
                      t.noLabelsProvided ||
                      t.isXNumeric;
                  if (
                    (t.isXNumeric &&
                      (function () {
                        for (var e = 0; e < t.series.length; e++)
                          if (t.labels[e])
                            for (var n = 0; n < t.labels[e].length; n++)
                              null !== t.labels[e][n] &&
                                O.isNumber(t.labels[e][n]) &&
                                ((t.maxX = Math.max(t.maxX, t.labels[e][n])),
                                (t.initialMaxX = Math.max(
                                  t.maxX,
                                  t.labels[e][n]
                                )),
                                (t.minX = Math.min(t.minX, t.labels[e][n])),
                                (t.initialMinX = Math.min(
                                  t.minX,
                                  t.labels[e][n]
                                )));
                      })(),
                    t.noLabelsProvided &&
                      0 === e.xaxis.categories.length &&
                      ((t.maxX = t.labels[t.labels.length - 1]),
                      (t.initialMaxX = t.labels[t.labels.length - 1]),
                      (t.minX = 1),
                      (t.initialMinX = 1)),
                    t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric)
                  ) {
                    var i = 10;
                    if (void 0 === e.xaxis.tickAmount)
                      (i = Math.round(t.svgWidth / 150)),
                        "numeric" === e.xaxis.type &&
                          t.dataPoints < 30 &&
                          (i = t.dataPoints - 1),
                        i > t.dataPoints &&
                          0 !== t.dataPoints &&
                          (i = t.dataPoints - 1);
                    else if ("dataPoints" === e.xaxis.tickAmount) {
                      if (
                        (t.series.length > 1 &&
                          (i = t.series[t.maxValsInArrayIndex].length - 1),
                        t.isXNumeric)
                      ) {
                        var r = t.maxX - t.minX;
                        r < 30 && (i = r - 1);
                      }
                    } else i = e.xaxis.tickAmount;
                    if (
                      ((t.xTickAmount = i),
                      void 0 !== e.xaxis.max &&
                        "number" == typeof e.xaxis.max &&
                        (t.maxX = e.xaxis.max),
                      void 0 !== e.xaxis.min &&
                        "number" == typeof e.xaxis.min &&
                        (t.minX = e.xaxis.min),
                      void 0 !== e.xaxis.range &&
                        (t.minX = t.maxX - e.xaxis.range),
                      t.minX !== Number.MAX_VALUE &&
                        t.maxX !== -Number.MAX_VALUE)
                    )
                      if (
                        e.xaxis.convertedCatToNumeric &&
                        !t.dataFormatXNumeric
                      ) {
                        for (var o = [], a = t.minX - 1; a < t.maxX; a++)
                          o.push(a + 1);
                        t.xAxisScale = {
                          result: o,
                          niceMin: o[0],
                          niceMax: o[o.length - 1],
                        };
                      } else
                        t.xAxisScale = this.scales.setXScale(t.minX, t.maxX);
                    else
                      (t.xAxisScale = this.scales.linearScale(
                        0,
                        i,
                        i,
                        0,
                        e.xaxis.stepSize
                      )),
                        t.noLabelsProvided &&
                          t.labels.length > 0 &&
                          ((t.xAxisScale = this.scales.linearScale(
                            1,
                            t.labels.length,
                            i - 1,
                            0,
                            e.xaxis.stepSize
                          )),
                          (t.seriesX = t.labels.slice()));
                    n && (t.labels = t.xAxisScale.result.slice());
                  }
                  return (
                    t.isBarHorizontal &&
                      t.labels.length &&
                      (t.xTickAmount = t.labels.length),
                    this._handleSingleDataPoint(),
                    this._getMinXDiff(),
                    { minX: t.minX, maxX: t.maxX }
                  );
                },
              },
              {
                key: "setZRange",
                value: function () {
                  var t = this.w.globals;
                  if (t.isDataXYZ)
                    for (var e = 0; e < t.series.length; e++)
                      if (void 0 !== t.seriesZ[e])
                        for (var n = 0; n < t.seriesZ[e].length; n++)
                          null !== t.seriesZ[e][n] &&
                            O.isNumber(t.seriesZ[e][n]) &&
                            ((t.maxZ = Math.max(t.maxZ, t.seriesZ[e][n])),
                            (t.minZ = Math.min(t.minZ, t.seriesZ[e][n])));
                },
              },
              {
                key: "_handleSingleDataPoint",
                value: function () {
                  var t = this.w.globals,
                    e = this.w.config;
                  if (t.minX === t.maxX) {
                    var n = new S(this.ctx);
                    if ("datetime" === e.xaxis.type) {
                      var i = n.getDate(t.minX);
                      e.xaxis.labels.datetimeUTC
                        ? i.setUTCDate(i.getUTCDate() - 2)
                        : i.setDate(i.getDate() - 2),
                        (t.minX = new Date(i).getTime());
                      var r = n.getDate(t.maxX);
                      e.xaxis.labels.datetimeUTC
                        ? r.setUTCDate(r.getUTCDate() + 2)
                        : r.setDate(r.getDate() + 2),
                        (t.maxX = new Date(r).getTime());
                    } else
                      ("numeric" === e.xaxis.type ||
                        ("category" === e.xaxis.type && !t.noLabelsProvided)) &&
                        ((t.minX = t.minX - 2),
                        (t.initialMinX = t.minX),
                        (t.maxX = t.maxX + 2),
                        (t.initialMaxX = t.maxX));
                  }
                },
              },
              {
                key: "_getMinXDiff",
                value: function () {
                  var t = this.w.globals;
                  t.isXNumeric &&
                    t.seriesX.forEach(function (e, n) {
                      1 === e.length &&
                        e.push(
                          t.seriesX[t.maxValsInArrayIndex][
                            t.seriesX[t.maxValsInArrayIndex].length - 1
                          ]
                        );
                      var i = e.slice();
                      i.sort(function (t, e) {
                        return t - e;
                      }),
                        i.forEach(function (e, n) {
                          if (n > 0) {
                            var r = e - i[n - 1];
                            r > 0 && (t.minXDiff = Math.min(r, t.minXDiff));
                          }
                        }),
                        (1 !== t.dataPoints &&
                          t.minXDiff !== Number.MAX_VALUE) ||
                          (t.minXDiff = 0.5);
                    });
                },
              },
              {
                key: "_setStackedMinMax",
                value: function () {
                  var t = this,
                    e = this.w.globals;
                  if (e.series.length) {
                    var n = e.seriesGroups;
                    n.length ||
                      (n = [
                        this.w.globals.seriesNames.map(function (t) {
                          return t;
                        }),
                      ]);
                    var i = {},
                      r = {};
                    n.forEach(function (n) {
                      (i[n] = []),
                        (r[n] = []),
                        t.w.config.series
                          .map(function (t, i) {
                            return n.indexOf(e.seriesNames[i]) > -1 ? i : null;
                          })
                          .filter(function (t) {
                            return null !== t;
                          })
                          .forEach(function (o) {
                            for (
                              var a = 0;
                              a < e.series[e.maxValsInArrayIndex].length;
                              a++
                            ) {
                              var s, l, c, d;
                              void 0 === i[n][a] &&
                                ((i[n][a] = 0), (r[n][a] = 0)),
                                ((t.w.config.chart.stacked && !e.comboCharts) ||
                                  (t.w.config.chart.stacked &&
                                    e.comboCharts &&
                                    (!t.w.config.chart.stackOnlyBar ||
                                      "bar" ===
                                        (null === (s = t.w.config.series) ||
                                        void 0 === s ||
                                        null === (l = s[o]) ||
                                        void 0 === l
                                          ? void 0
                                          : l.type) ||
                                      "column" ===
                                        (null === (c = t.w.config.series) ||
                                        void 0 === c ||
                                        null === (d = c[o]) ||
                                        void 0 === d
                                          ? void 0
                                          : d.type)))) &&
                                  null !== e.series[o][a] &&
                                  O.isNumber(e.series[o][a]) &&
                                  (e.series[o][a] > 0
                                    ? (i[n][a] +=
                                        parseFloat(e.series[o][a]) + 1e-4)
                                    : (r[n][a] += parseFloat(e.series[o][a])));
                            }
                          });
                    }),
                      Object.entries(i).forEach(function (t) {
                        var n = g(t, 1)[0];
                        i[n].forEach(function (t, o) {
                          (e.maxY = Math.max(e.maxY, i[n][o])),
                            (e.minY = Math.min(e.minY, r[n][o]));
                        });
                      });
                  }
                },
              },
            ]),
            t
          );
        })(),
        et = (function () {
          function t(e, n) {
            a(this, t), (this.ctx = e), (this.elgrid = n), (this.w = e.w);
            var i = this.w;
            (this.xaxisFontSize = i.config.xaxis.labels.style.fontSize),
              (this.axisFontFamily = i.config.xaxis.labels.style.fontFamily),
              (this.xaxisForeColors = i.config.xaxis.labels.style.colors),
              (this.isCategoryBarHorizontal =
                "bar" === i.config.chart.type &&
                i.config.plotOptions.bar.horizontal),
              (this.xAxisoffX =
                "bottom" === i.config.xaxis.position
                  ? i.globals.gridHeight
                  : 0),
              (this.drawnLabels = []),
              (this.axesUtils = new D(e));
          }
          return (
            l(t, [
              {
                key: "drawYaxis",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = e.config.yaxis[t].labels.style,
                    r = i.fontSize,
                    o = i.fontFamily,
                    a = i.fontWeight,
                    s = n.group({
                      class: "apexcharts-yaxis",
                      rel: t,
                      transform: "translate(".concat(
                        e.globals.translateYAxisX[t],
                        ", 0)"
                      ),
                    });
                  if (this.axesUtils.isYAxisHidden(t)) return s;
                  var l = n.group({ class: "apexcharts-yaxis-texts-g" });
                  s.add(l);
                  var c = e.globals.yAxisScale[t].result.length - 1,
                    d = e.globals.gridHeight / c,
                    u = e.globals.yLabelFormatters[t],
                    p = this.axesUtils.checkForReversedLabels(
                      t,
                      e.globals.yAxisScale[t].result.slice()
                    );
                  if (e.config.yaxis[t].labels.show) {
                    var h =
                      e.globals.translateY + e.config.yaxis[t].labels.offsetY;
                    e.globals.isBarHorizontal
                      ? (h = 0)
                      : "heatmap" === e.config.chart.type && (h -= d / 2),
                      (h += parseInt(r, 10) / 3);
                    for (var f = c; f >= 0; f--) {
                      var b = u(p[f], f, e),
                        m = e.config.yaxis[t].labels.padding;
                      e.config.yaxis[t].opposite &&
                        0 !== e.config.yaxis.length &&
                        (m *= -1);
                      var g = this.getTextAnchor(
                          e.config.yaxis[t].labels.align,
                          e.config.yaxis[t].opposite
                        ),
                        v = this.axesUtils.getYAxisForeColor(i.colors, t),
                        _ = Array.isArray(v) ? v[f] : v,
                        y = O.listToArray(
                          e.globals.dom.baseEl.querySelectorAll(
                            ".apexcharts-yaxis[rel='".concat(
                              t,
                              "'] .apexcharts-yaxis-label tspan"
                            )
                          )
                        ).map(function (t) {
                          return t.textContent;
                        }),
                        M = n.drawText({
                          x: m,
                          y: h,
                          text:
                            y.includes(b) &&
                            !e.config.yaxis[t].labels.showDuplicates
                              ? ""
                              : b,
                          textAnchor: g,
                          fontSize: r,
                          fontFamily: o,
                          fontWeight: a,
                          maxWidth: e.config.yaxis[t].labels.maxWidth,
                          foreColor: _,
                          isPlainText: !1,
                          cssClass: "apexcharts-yaxis-label ".concat(
                            i.cssClass
                          ),
                        });
                      l.add(M),
                        this.addTooltip(M, b),
                        0 !== e.config.yaxis[t].labels.rotate &&
                          this.rotateLabel(
                            n,
                            M,
                            firstLabel,
                            e.config.yaxis[t].labels.rotate
                          ),
                        (h += d);
                    }
                  }
                  return (
                    this.addYAxisTitle(n, s, t),
                    this.addAxisBorder(n, s, t, c, d),
                    s
                  );
                },
              },
              {
                key: "getTextAnchor",
                value: function (t, e) {
                  return "left" === t
                    ? "start"
                    : "center" === t
                    ? "middle"
                    : "right" === t
                    ? "end"
                    : e
                    ? "start"
                    : "end";
                },
              },
              {
                key: "addTooltip",
                value: function (t, e) {
                  var n = document.createElementNS(
                    this.w.globals.SVGNS,
                    "title"
                  );
                  (n.textContent = Array.isArray(e) ? e.join(" ") : e),
                    t.node.appendChild(n);
                },
              },
              {
                key: "rotateLabel",
                value: function (t, e, n, i) {
                  var r = t.rotateAroundCenter(n.node),
                    o = t.rotateAroundCenter(e.node);
                  e.node.setAttribute(
                    "transform",
                    "rotate(".concat(i, " ").concat(r.x, " ").concat(o.y, ")")
                  );
                },
              },
              {
                key: "addYAxisTitle",
                value: function (t, e, n) {
                  var i = this.w;
                  if (void 0 !== i.config.yaxis[n].title.text) {
                    var r = t.group({ class: "apexcharts-yaxis-title" }),
                      o = i.config.yaxis[n].opposite
                        ? i.globals.translateYAxisX[n]
                        : 0,
                      a = t.drawText({
                        x: o,
                        y:
                          i.globals.gridHeight / 2 +
                          i.globals.translateY +
                          i.config.yaxis[n].title.offsetY,
                        text: i.config.yaxis[n].title.text,
                        textAnchor: "end",
                        foreColor: i.config.yaxis[n].title.style.color,
                        fontSize: i.config.yaxis[n].title.style.fontSize,
                        fontWeight: i.config.yaxis[n].title.style.fontWeight,
                        fontFamily: i.config.yaxis[n].title.style.fontFamily,
                        cssClass: "apexcharts-yaxis-title-text ".concat(
                          i.config.yaxis[n].title.style.cssClass
                        ),
                      });
                    r.add(a), e.add(r);
                  }
                },
              },
              {
                key: "addAxisBorder",
                value: function (t, e, n, i, r) {
                  var o = this.w,
                    a = o.config.yaxis[n].axisBorder,
                    s = 31 + a.offsetX;
                  if (
                    (o.config.yaxis[n].opposite && (s = -31 - a.offsetX),
                    a.show)
                  ) {
                    var l = t.drawLine(
                      s,
                      o.globals.translateY + a.offsetY - 2,
                      s,
                      o.globals.gridHeight +
                        o.globals.translateY +
                        a.offsetY +
                        2,
                      a.color,
                      0,
                      a.width
                    );
                    e.add(l);
                  }
                  o.config.yaxis[n].axisTicks.show &&
                    this.axesUtils.drawYAxisTicks(
                      s,
                      i,
                      a,
                      o.config.yaxis[n].axisTicks,
                      n,
                      r,
                      e
                    );
                },
              },
              {
                key: "drawYaxisInversed",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = n.group({
                      class: "apexcharts-xaxis apexcharts-yaxis-inversed",
                    }),
                    r = n.group({
                      class: "apexcharts-xaxis-texts-g",
                      transform: "translate("
                        .concat(e.globals.translateXAxisX, ", ")
                        .concat(e.globals.translateXAxisY, ")"),
                    });
                  i.add(r);
                  var o = e.globals.yAxisScale[t].result.length - 1,
                    a = e.globals.gridWidth / o + 0.1,
                    s = a + e.config.xaxis.labels.offsetX,
                    l = e.globals.xLabelFormatter,
                    c = this.axesUtils.checkForReversedLabels(
                      t,
                      e.globals.yAxisScale[t].result.slice()
                    ),
                    d = e.globals.timescaleLabels;
                  if (
                    (d.length > 0 &&
                      ((this.xaxisLabels = d.slice()),
                      (o = (c = d.slice()).length)),
                    e.config.xaxis.labels.show)
                  )
                    for (
                      var u = d.length ? 0 : o;
                      d.length ? u < d.length : u >= 0;
                      d.length ? u++ : u--
                    ) {
                      var p = l(c[u], u, e),
                        h =
                          e.globals.gridWidth +
                          e.globals.padHorizontal -
                          (s - a + e.config.xaxis.labels.offsetX);
                      if (d.length) {
                        var f = this.axesUtils.getLabel(
                          c,
                          d,
                          h,
                          u,
                          this.drawnLabels,
                          this.xaxisFontSize
                        );
                        (h = f.x),
                          (p = f.text),
                          this.drawnLabels.push(f.text),
                          0 === u &&
                            e.globals.skipFirstTimelinelabel &&
                            (p = ""),
                          u === c.length - 1 &&
                            e.globals.skipLastTimelinelabel &&
                            (p = "");
                      }
                      var b = n.drawText({
                        x: h,
                        y:
                          this.xAxisoffX +
                          e.config.xaxis.labels.offsetY +
                          30 -
                          ("top" === e.config.xaxis.position
                            ? e.globals.xAxisHeight +
                              e.config.xaxis.axisTicks.height -
                              2
                            : 0),
                        text: p,
                        textAnchor: "middle",
                        foreColor: Array.isArray(this.xaxisForeColors)
                          ? this.xaxisForeColors[t]
                          : this.xaxisForeColors,
                        fontSize: this.xaxisFontSize,
                        fontFamily: this.xaxisFontFamily,
                        fontWeight: e.config.xaxis.labels.style.fontWeight,
                        isPlainText: !1,
                        cssClass: "apexcharts-xaxis-label ".concat(
                          e.config.xaxis.labels.style.cssClass
                        ),
                      });
                      r.add(b), b.tspan(p), this.addTooltip(b, p), (s += a);
                    }
                  return (
                    this.inversedYAxisTitleText(i),
                    this.inversedYAxisBorder(i),
                    i
                  );
                },
              },
              {
                key: "inversedYAxisBorder",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = e.config.xaxis.axisBorder;
                  if (i.show) {
                    var r = 0;
                    "bar" === e.config.chart.type &&
                      e.globals.isXNumeric &&
                      (r -= 15);
                    var o = n.drawLine(
                      e.globals.padHorizontal + r + i.offsetX,
                      this.xAxisoffX,
                      e.globals.gridWidth,
                      this.xAxisoffX,
                      i.color,
                      0,
                      i.height
                    );
                    this.elgrid &&
                    this.elgrid.elGridBorders &&
                    e.config.grid.show
                      ? this.elgrid.elGridBorders.add(o)
                      : t.add(o);
                  }
                },
              },
              {
                key: "inversedYAxisTitleText",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx);
                  if (void 0 !== e.config.xaxis.title.text) {
                    var i = n.group({
                        class:
                          "apexcharts-xaxis-title apexcharts-yaxis-title-inversed",
                      }),
                      r = n.drawText({
                        x:
                          e.globals.gridWidth / 2 +
                          e.config.xaxis.title.offsetX,
                        y:
                          this.xAxisoffX +
                          parseFloat(this.xaxisFontSize) +
                          parseFloat(e.config.xaxis.title.style.fontSize) +
                          e.config.xaxis.title.offsetY +
                          20,
                        text: e.config.xaxis.title.text,
                        textAnchor: "middle",
                        fontSize: e.config.xaxis.title.style.fontSize,
                        fontFamily: e.config.xaxis.title.style.fontFamily,
                        fontWeight: e.config.xaxis.title.style.fontWeight,
                        foreColor: e.config.xaxis.title.style.color,
                        cssClass: "apexcharts-xaxis-title-text ".concat(
                          e.config.xaxis.title.style.cssClass
                        ),
                      });
                    i.add(r), t.add(i);
                  }
                },
              },
              {
                key: "yAxisTitleRotate",
                value: function (t, e) {
                  var n = this.w,
                    i = new x(this.ctx),
                    r = n.globals.dom.baseEl.querySelector(
                      ".apexcharts-yaxis[rel='".concat(
                        t,
                        "'] .apexcharts-yaxis-texts-g"
                      )
                    ),
                    o = r ? r.getBoundingClientRect() : { width: 0, height: 0 },
                    a = n.globals.dom.baseEl.querySelector(
                      ".apexcharts-yaxis[rel='".concat(
                        t,
                        "'] .apexcharts-yaxis-title text"
                      )
                    ),
                    s = a ? a.getBoundingClientRect() : { width: 0, height: 0 };
                  if (a) {
                    var l = this.xPaddingForYAxisTitle(t, o, s, e);
                    a.setAttribute("x", l.xPos - (e ? 10 : 0));
                    var c = i.rotateAroundCenter(a);
                    a.setAttribute(
                      "transform",
                      "rotate("
                        .concat(
                          e
                            ? -1 * n.config.yaxis[t].title.rotate
                            : n.config.yaxis[t].title.rotate,
                          " "
                        )
                        .concat(c.x, " ")
                        .concat(c.y, ")")
                    );
                  }
                },
              },
              {
                key: "xPaddingForYAxisTitle",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = 0,
                    a = 10;
                  return void 0 === r.config.yaxis[t].title.text || t < 0
                    ? { xPos: o, padd: 0 }
                    : (i
                        ? (o =
                            e.width +
                            r.config.yaxis[t].title.offsetX +
                            n.width / 2 +
                            a / 2)
                        : ((o =
                            -1 * e.width +
                            r.config.yaxis[t].title.offsetX +
                            a / 2 +
                            n.width / 2),
                          r.globals.isBarHorizontal &&
                            ((a = 25),
                            (o =
                              -1 * e.width -
                              r.config.yaxis[t].title.offsetX -
                              a))),
                      { xPos: o, padd: a });
                },
              },
              {
                key: "setYAxisXPosition",
                value: function (t, e) {
                  var n = this.w,
                    i = 0,
                    r = 0,
                    o = 18,
                    a = 1;
                  n.config.yaxis.length > 1 && (this.multipleYs = !0),
                    n.config.yaxis.forEach(function (s, l) {
                      var c =
                          n.globals.ignoreYAxisIndexes.includes(l) ||
                          !s.show ||
                          s.floating ||
                          0 === t[l].width,
                        d = t[l].width + e[l].width;
                      s.opposite
                        ? n.globals.isBarHorizontal
                          ? ((r =
                              n.globals.gridWidth + n.globals.translateX - 1),
                            (n.globals.translateYAxisX[l] =
                              r - s.labels.offsetX))
                          : ((r =
                              n.globals.gridWidth + n.globals.translateX + a),
                            c || (a += d + 20),
                            (n.globals.translateYAxisX[l] =
                              r - s.labels.offsetX + 20))
                        : ((i = n.globals.translateX - o),
                          c || (o += d + 20),
                          (n.globals.translateYAxisX[l] =
                            i + s.labels.offsetX));
                    });
                },
              },
              {
                key: "setYAxisTextAlignments",
                value: function () {
                  var t = this.w;
                  O.listToArray(
                    t.globals.dom.baseEl.getElementsByClassName(
                      "apexcharts-yaxis"
                    )
                  ).forEach(function (e, n) {
                    var i = t.config.yaxis[n];
                    if (i && !i.floating && void 0 !== i.labels.align) {
                      var r = t.globals.dom.baseEl.querySelector(
                          ".apexcharts-yaxis[rel='".concat(
                            n,
                            "'] .apexcharts-yaxis-texts-g"
                          )
                        ),
                        o = O.listToArray(
                          t.globals.dom.baseEl.querySelectorAll(
                            ".apexcharts-yaxis[rel='".concat(
                              n,
                              "'] .apexcharts-yaxis-label"
                            )
                          )
                        ),
                        a = r.getBoundingClientRect();
                      o.forEach(function (t) {
                        t.setAttribute("text-anchor", i.labels.align);
                      }),
                        "left" !== i.labels.align || i.opposite
                          ? "center" === i.labels.align
                            ? r.setAttribute(
                                "transform",
                                "translate(".concat(
                                  (a.width / 2) * (i.opposite ? 1 : -1),
                                  ", 0)"
                                )
                              )
                            : "right" === i.labels.align &&
                              i.opposite &&
                              r.setAttribute(
                                "transform",
                                "translate(".concat(a.width, ", 0)")
                              )
                          : r.setAttribute(
                              "transform",
                              "translate(-".concat(a.width, ", 0)")
                            );
                    }
                  });
                },
              },
            ]),
            t
          );
        })(),
        nt = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.documentEvent = O.bind(this.documentEvent, this));
          }
          return (
            l(t, [
              {
                key: "addEventListener",
                value: function (t, e) {
                  var n = this.w;
                  n.globals.events.hasOwnProperty(t)
                    ? n.globals.events[t].push(e)
                    : (n.globals.events[t] = [e]);
                },
              },
              {
                key: "removeEventListener",
                value: function (t, e) {
                  var n = this.w;
                  if (n.globals.events.hasOwnProperty(t)) {
                    var i = n.globals.events[t].indexOf(e);
                    -1 !== i && n.globals.events[t].splice(i, 1);
                  }
                },
              },
              {
                key: "fireEvent",
                value: function (t, e) {
                  var n = this.w;
                  if (n.globals.events.hasOwnProperty(t)) {
                    (e && e.length) || (e = []);
                    for (
                      var i = n.globals.events[t], r = i.length, o = 0;
                      o < r;
                      o++
                    )
                      i[o].apply(null, e);
                  }
                },
              },
              {
                key: "setupEventHandlers",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = this.ctx,
                    i = e.globals.dom.baseEl.querySelector(
                      e.globals.chartClass
                    );
                  this.ctx.eventList.forEach(function (t) {
                    i.addEventListener(
                      t,
                      function (t) {
                        var i = Object.assign({}, e, {
                          seriesIndex: e.globals.axisCharts
                            ? e.globals.capturedSeriesIndex
                            : 0,
                          dataPointIndex: e.globals.capturedDataPointIndex,
                        });
                        "mousemove" === t.type || "touchmove" === t.type
                          ? "function" ==
                              typeof e.config.chart.events.mouseMove &&
                            e.config.chart.events.mouseMove(t, n, i)
                          : "mouseleave" === t.type || "touchleave" === t.type
                          ? "function" ==
                              typeof e.config.chart.events.mouseLeave &&
                            e.config.chart.events.mouseLeave(t, n, i)
                          : (("mouseup" === t.type && 1 === t.which) ||
                              "touchend" === t.type) &&
                            ("function" == typeof e.config.chart.events.click &&
                              e.config.chart.events.click(t, n, i),
                            n.ctx.events.fireEvent("click", [t, n, i]));
                      },
                      { capture: !1, passive: !0 }
                    );
                  }),
                    this.ctx.eventList.forEach(function (n) {
                      e.globals.dom.baseEl.addEventListener(
                        n,
                        t.documentEvent,
                        { passive: !0 }
                      );
                    }),
                    this.ctx.core.setupBrushHandler();
                },
              },
              {
                key: "documentEvent",
                value: function (t) {
                  var e = this.w,
                    n = t.target.className;
                  if ("click" === t.type) {
                    var i =
                      e.globals.dom.baseEl.querySelector(".apexcharts-menu");
                    i &&
                      i.classList.contains("apexcharts-menu-open") &&
                      "apexcharts-menu-icon" !== n &&
                      i.classList.remove("apexcharts-menu-open");
                  }
                  (e.globals.clientX =
                    "touchmove" === t.type ? t.touches[0].clientX : t.clientX),
                    (e.globals.clientY =
                      "touchmove" === t.type
                        ? t.touches[0].clientY
                        : t.clientY);
                },
              },
            ]),
            t
          );
        })(),
        it = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "setCurrentLocaleValues",
                value: function (t) {
                  var e = this.w.config.chart.locales;
                  window.Apex.chart &&
                    window.Apex.chart.locales &&
                    window.Apex.chart.locales.length > 0 &&
                    (e = this.w.config.chart.locales.concat(
                      window.Apex.chart.locales
                    ));
                  var n = e.filter(function (e) {
                    return e.name === t;
                  })[0];
                  if (!n)
                    throw new Error(
                      "Wrong locale name provided. Please make sure you set the correct locale name in options"
                    );
                  var i = O.extend(E, n);
                  this.w.globals.locale = i.options;
                },
              },
            ]),
            t
          );
        })(),
        rt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "drawAxis",
                value: function (t, e) {
                  var n,
                    i,
                    r = this,
                    o = this.w.globals,
                    a = this.w.config,
                    s = new Z(this.ctx, e),
                    l = new et(this.ctx, e);
                  o.axisCharts &&
                    "radar" !== t &&
                    (o.isBarHorizontal
                      ? ((i = l.drawYaxisInversed(0)),
                        (n = s.drawXaxisInversed(0)),
                        o.dom.elGraphical.add(n),
                        o.dom.elGraphical.add(i))
                      : ((n = s.drawXaxis()),
                        o.dom.elGraphical.add(n),
                        a.yaxis.map(function (t, e) {
                          if (
                            -1 === o.ignoreYAxisIndexes.indexOf(e) &&
                            ((i = l.drawYaxis(e)),
                            o.dom.Paper.add(i),
                            "back" === r.w.config.grid.position)
                          ) {
                            var n = o.dom.Paper.children()[1];
                            n.remove(), o.dom.Paper.add(n);
                          }
                        })));
                },
              },
            ]),
            t
          );
        })(),
        ot = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "drawXCrosshairs",
                value: function () {
                  var t = this.w,
                    e = new x(this.ctx),
                    n = new A(this.ctx),
                    i = t.config.xaxis.crosshairs.fill.gradient,
                    r = t.config.xaxis.crosshairs.dropShadow,
                    o = t.config.xaxis.crosshairs.fill.type,
                    a = i.colorFrom,
                    s = i.colorTo,
                    l = i.opacityFrom,
                    c = i.opacityTo,
                    d = i.stops,
                    u = r.enabled,
                    p = r.left,
                    h = r.top,
                    f = r.blur,
                    b = r.color,
                    m = r.opacity,
                    g = t.config.xaxis.crosshairs.fill.color;
                  if (t.config.xaxis.crosshairs.show) {
                    "gradient" === o &&
                      (g = e.drawGradient(
                        "vertical",
                        a,
                        s,
                        l,
                        c,
                        null,
                        d,
                        null
                      ));
                    var v = e.drawRect();
                    1 === t.config.xaxis.crosshairs.width && (v = e.drawLine());
                    var _ = t.globals.gridHeight;
                    (!O.isNumber(_) || _ < 0) && (_ = 0);
                    var y = t.config.xaxis.crosshairs.width;
                    (!O.isNumber(y) || y < 0) && (y = 0),
                      v.attr({
                        class: "apexcharts-xcrosshairs",
                        x: 0,
                        y: 0,
                        y2: _,
                        width: y,
                        height: _,
                        fill: g,
                        filter: "none",
                        "fill-opacity": t.config.xaxis.crosshairs.opacity,
                        stroke: t.config.xaxis.crosshairs.stroke.color,
                        "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                        "stroke-dasharray":
                          t.config.xaxis.crosshairs.stroke.dashArray,
                      }),
                      u &&
                        (v = n.dropShadow(v, {
                          left: p,
                          top: h,
                          blur: f,
                          color: b,
                          opacity: m,
                        })),
                      t.globals.dom.elGraphical.add(v);
                  }
                },
              },
              {
                key: "drawYCrosshairs",
                value: function () {
                  var t = this.w,
                    e = new x(this.ctx),
                    n = t.config.yaxis[0].crosshairs,
                    i = t.globals.barPadForNumericAxis;
                  if (t.config.yaxis[0].crosshairs.show) {
                    var r = e.drawLine(
                      -i,
                      0,
                      t.globals.gridWidth + i,
                      0,
                      n.stroke.color,
                      n.stroke.dashArray,
                      n.stroke.width
                    );
                    r.attr({ class: "apexcharts-ycrosshairs" }),
                      t.globals.dom.elGraphical.add(r);
                  }
                  var o = e.drawLine(
                    -i,
                    0,
                    t.globals.gridWidth + i,
                    0,
                    n.stroke.color,
                    0,
                    0
                  );
                  o.attr({ class: "apexcharts-ycrosshairs-hidden" }),
                    t.globals.dom.elGraphical.add(o);
                },
              },
            ]),
            t
          );
        })(),
        at = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "checkResponsiveConfig",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = n.config;
                  if (0 !== i.responsive.length) {
                    var r = i.responsive.slice();
                    r.sort(function (t, e) {
                      return t.breakpoint > e.breakpoint
                        ? 1
                        : e.breakpoint > t.breakpoint
                        ? -1
                        : 0;
                    }).reverse();
                    var o = new B({}),
                      a = function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          i = r[0].breakpoint,
                          a =
                            window.innerWidth > 0
                              ? window.innerWidth
                              : screen.width;
                        if (a > i) {
                          var s = O.clone(n.globals.initialConfig);
                          s.series = O.clone(n.config.series);
                          var l = z.extendArrayProps(o, s, n);
                          (t = O.extend(l, t)),
                            (t = O.extend(n.config, t)),
                            e.overrideResponsiveOptions(t);
                        } else
                          for (var c = 0; c < r.length; c++)
                            a < r[c].breakpoint &&
                              ((t = z.extendArrayProps(o, r[c].options, n)),
                              (t = O.extend(n.config, t)),
                              e.overrideResponsiveOptions(t));
                      };
                    if (t) {
                      var s = z.extendArrayProps(o, t, n);
                      (s = O.extend(n.config, s)), a((s = O.extend(s, t)));
                    } else a({});
                  }
                },
              },
              {
                key: "overrideResponsiveOptions",
                value: function (t) {
                  var e = new B(t).init({ responsiveOverride: !0 });
                  this.w.config = e;
                },
              },
            ]),
            t
          );
        })(),
        st = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.colors = []),
              (this.isColorFn = !1),
              (this.isHeatmapDistributed = this.checkHeatmapDistributed()),
              (this.isBarDistributed = this.checkBarDistributed());
          }
          return (
            l(t, [
              {
                key: "checkHeatmapDistributed",
                value: function () {
                  var t = this.w.config,
                    e = t.chart,
                    n = t.plotOptions;
                  return (
                    ("treemap" === e.type &&
                      n.treemap &&
                      n.treemap.distributed) ||
                    ("heatmap" === e.type && n.heatmap && n.heatmap.distributed)
                  );
                },
              },
              {
                key: "checkBarDistributed",
                value: function () {
                  var t = this.w.config,
                    e = t.chart,
                    n = t.plotOptions;
                  return (
                    n.bar &&
                    n.bar.distributed &&
                    ("bar" === e.type || "rangeBar" === e.type)
                  );
                },
              },
              {
                key: "init",
                value: function () {
                  this.setDefaultColors();
                },
              },
              {
                key: "setDefaultColors",
                value: function () {
                  var t = this.w,
                    e = new O();
                  t.globals.dom.elWrap.classList.add(
                    "apexcharts-theme-".concat(t.config.theme.mode)
                  );
                  var n = v(t.config.colors || t.config.fill.colors || []);
                  (t.globals.colors = this.getColors(n)),
                    this.applySeriesColors(
                      t.globals.seriesColors,
                      t.globals.colors
                    ),
                    t.config.theme.monochrome.enabled &&
                      (t.globals.colors = this.getMonochromeColors(
                        t.config.theme.monochrome,
                        t.globals.series,
                        e
                      ));
                  var i = t.globals.colors.slice();
                  this.pushExtraColors(t.globals.colors),
                    this.applyColorTypes(["fill", "stroke"], i),
                    this.applyDataLabelsColors(i),
                    this.applyRadarPolygonsColors(),
                    this.applyMarkersColors(i);
                },
              },
              {
                key: "getColors",
                value: function (t) {
                  var e = this,
                    n = this.w;
                  return t && 0 !== t.length
                    ? Array.isArray(t) &&
                      t.length > 0 &&
                      "function" == typeof t[0]
                      ? ((this.isColorFn = !0),
                        n.config.series.map(function (i, r) {
                          var o = t[r] || t[0];
                          return "function" == typeof o
                            ? o({
                                value: n.globals.axisCharts
                                  ? n.globals.series[r][0] || 0
                                  : n.globals.series[r],
                                seriesIndex: r,
                                dataPointIndex: r,
                                w: e.w,
                              })
                            : o;
                        }))
                      : t
                    : this.predefined();
                },
              },
              {
                key: "applySeriesColors",
                value: function (t, e) {
                  t.forEach(function (t, n) {
                    t && (e[n] = t);
                  });
                },
              },
              {
                key: "getMonochromeColors",
                value: function (t, e, n) {
                  var i = t.color,
                    r = t.shadeIntensity,
                    o = t.shadeTo,
                    a =
                      this.isBarDistributed || this.isHeatmapDistributed
                        ? e[0].length * e.length
                        : e.length,
                    s = 1 / (a / r),
                    l = 0;
                  return Array.from({ length: a }, function () {
                    var t =
                      "dark" === o
                        ? n.shadeColor(-1 * l, i)
                        : n.shadeColor(l, i);
                    return (l += s), t;
                  });
                },
              },
              {
                key: "applyColorTypes",
                value: function (t, e) {
                  var n = this,
                    i = this.w;
                  t.forEach(function (t) {
                    (i.globals[t].colors =
                      void 0 === i.config[t].colors
                        ? n.isColorFn
                          ? i.config.colors
                          : e
                        : i.config[t].colors.slice()),
                      n.pushExtraColors(i.globals[t].colors);
                  });
                },
              },
              {
                key: "applyDataLabelsColors",
                value: function (t) {
                  var e = this.w;
                  (e.globals.dataLabels.style.colors =
                    void 0 === e.config.dataLabels.style.colors
                      ? t
                      : e.config.dataLabels.style.colors.slice()),
                    this.pushExtraColors(e.globals.dataLabels.style.colors, 50);
                },
              },
              {
                key: "applyRadarPolygonsColors",
                value: function () {
                  var t = this.w;
                  (t.globals.radarPolygons.fill.colors =
                    void 0 === t.config.plotOptions.radar.polygons.fill.colors
                      ? ["dark" === t.config.theme.mode ? "#424242" : "none"]
                      : t.config.plotOptions.radar.polygons.fill.colors.slice()),
                    this.pushExtraColors(
                      t.globals.radarPolygons.fill.colors,
                      20
                    );
                },
              },
              {
                key: "applyMarkersColors",
                value: function (t) {
                  var e = this.w;
                  (e.globals.markers.colors =
                    void 0 === e.config.markers.colors
                      ? t
                      : e.config.markers.colors.slice()),
                    this.pushExtraColors(e.globals.markers.colors);
                },
              },
              {
                key: "pushExtraColors",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i = this.w,
                    r = e || i.globals.series.length;
                  if (
                    (null === n &&
                      (n =
                        this.isBarDistributed ||
                        this.isHeatmapDistributed ||
                        ("heatmap" === i.config.chart.type &&
                          i.config.plotOptions.heatmap &&
                          i.config.plotOptions.heatmap.colorScale.inverse)),
                    n &&
                      i.globals.series.length &&
                      (r =
                        i.globals.series[i.globals.maxValsInArrayIndex].length *
                        i.globals.series.length),
                    t.length < r)
                  )
                    for (var o = r - t.length, a = 0; a < o; a++) t.push(t[a]);
                },
              },
              {
                key: "updateThemeOptions",
                value: function (t) {
                  (t.chart = t.chart || {}), (t.tooltip = t.tooltip || {});
                  var e = t.theme.mode,
                    n =
                      "dark" === e
                        ? "palette4"
                        : "light" === e
                        ? "palette1"
                        : t.theme.palette || "palette1",
                    i =
                      "dark" === e
                        ? "#f6f7f8"
                        : "light" === e
                        ? "#373d3f"
                        : t.chart.foreColor || "#373d3f";
                  return (
                    (t.tooltip.theme = e || "light"),
                    (t.chart.foreColor = i),
                    (t.theme.palette = n),
                    t
                  );
                },
              },
              {
                key: "predefined",
                value: function () {
                  var t = {
                    palette1: [
                      "#008FFB",
                      "#00E396",
                      "#FEB019",
                      "#FF4560",
                      "#775DD0",
                    ],
                    palette2: [
                      "#3f51b5",
                      "#03a9f4",
                      "#4caf50",
                      "#f9ce1d",
                      "#FF9800",
                    ],
                    palette3: [
                      "#33b2df",
                      "#546E7A",
                      "#d4526e",
                      "#13d8aa",
                      "#A5978B",
                    ],
                    palette4: [
                      "#4ecdc4",
                      "#c7f464",
                      "#81D4FA",
                      "#fd6a6a",
                      "#546E7A",
                    ],
                    palette5: [
                      "#2b908f",
                      "#f9a3a4",
                      "#90ee7e",
                      "#fa4443",
                      "#69d2e7",
                    ],
                    palette6: [
                      "#449DD1",
                      "#F86624",
                      "#EA3546",
                      "#662E9B",
                      "#C5D86D",
                    ],
                    palette7: [
                      "#D7263D",
                      "#1B998B",
                      "#2E294E",
                      "#F46036",
                      "#E2C044",
                    ],
                    palette8: [
                      "#662E9B",
                      "#F86624",
                      "#F9C80E",
                      "#EA3546",
                      "#43BCCD",
                    ],
                    palette9: [
                      "#5C4742",
                      "#A5978B",
                      "#8D5B4C",
                      "#5A2A27",
                      "#C4BBAF",
                    ],
                    palette10: [
                      "#A300D6",
                      "#7D02EB",
                      "#5653FE",
                      "#2983FF",
                      "#00B1F2",
                    ],
                    default: [
                      "#008FFB",
                      "#00E396",
                      "#FEB019",
                      "#FF4560",
                      "#775DD0",
                    ],
                  };
                  return t[this.w.config.theme.palette] || t.default;
                },
              },
            ]),
            t
          );
        })(),
        lt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function () {
                  this.drawTitleSubtitle("title"),
                    this.drawTitleSubtitle("subtitle");
                },
              },
              {
                key: "drawTitleSubtitle",
                value: function (t) {
                  var e = this.w,
                    n = "title" === t ? e.config.title : e.config.subtitle,
                    i = e.globals.svgWidth / 2,
                    r = n.offsetY,
                    o = "middle";
                  if (
                    ("left" === n.align
                      ? ((i = 10), (o = "start"))
                      : "right" === n.align &&
                        ((i = e.globals.svgWidth - 10), (o = "end")),
                    (i += n.offsetX),
                    (r = r + parseInt(n.style.fontSize, 10) + n.margin / 2),
                    void 0 !== n.text)
                  ) {
                    var a = new x(this.ctx).drawText({
                      x: i,
                      y: r,
                      text: n.text,
                      textAnchor: o,
                      fontSize: n.style.fontSize,
                      fontFamily: n.style.fontFamily,
                      fontWeight: n.style.fontWeight,
                      foreColor: n.style.color,
                      opacity: 1,
                    });
                    a.node.setAttribute(
                      "class",
                      "apexcharts-".concat(t, "-text")
                    ),
                      e.globals.dom.Paper.add(a);
                  }
                },
              },
            ]),
            t
          );
        })(),
        ct = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.dCtx = e);
          }
          return (
            l(t, [
              {
                key: "getTitleSubtitleCoords",
                value: function (t) {
                  var e = this.w,
                    n = 0,
                    i = 0,
                    r =
                      "title" === t
                        ? e.config.title.floating
                        : e.config.subtitle.floating,
                    o = e.globals.dom.baseEl.querySelector(
                      ".apexcharts-".concat(t, "-text")
                    );
                  if (null !== o && !r) {
                    var a = o.getBoundingClientRect();
                    (n = a.width),
                      (i = e.globals.axisCharts ? a.height + 5 : a.height);
                  }
                  return { width: n, height: i };
                },
              },
              {
                key: "getLegendsRect",
                value: function () {
                  var t = this.w,
                    e = t.globals.dom.elLegendWrap;
                  t.config.legend.height ||
                    ("top" !== t.config.legend.position &&
                      "bottom" !== t.config.legend.position) ||
                    (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
                  var n = Object.assign({}, O.getBoundingClientRect(e));
                  return (
                    null !== e &&
                    !t.config.legend.floating &&
                    t.config.legend.show
                      ? (this.dCtx.lgRect = {
                          x: n.x,
                          y: n.y,
                          height: n.height,
                          width: 0 === n.height ? 0 : n.width,
                        })
                      : (this.dCtx.lgRect = {
                          x: 0,
                          y: 0,
                          height: 0,
                          width: 0,
                        }),
                    ("left" !== t.config.legend.position &&
                      "right" !== t.config.legend.position) ||
                      (1.5 * this.dCtx.lgRect.width > t.globals.svgWidth &&
                        (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5)),
                    this.dCtx.lgRect
                  );
                },
              },
              {
                key: "getDatalabelsRect",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = [];
                  e.config.series.forEach(function (r, o) {
                    r.data.forEach(function (r, a) {
                      var s;
                      (s = e.globals.series[o][a]),
                        (i = e.config.dataLabels.formatter(s, {
                          ctx: t.dCtx.ctx,
                          seriesIndex: o,
                          dataPointIndex: a,
                          w: e,
                        })),
                        n.push(i);
                    });
                  });
                  var i = O.getLargestStringFromArr(n),
                    r = new x(this.dCtx.ctx),
                    o = e.config.dataLabels.style,
                    a = r.getTextRects(i, parseInt(o.fontSize), o.fontFamily);
                  return { width: 1.05 * a.width, height: a.height };
                },
              },
              {
                key: "getLargestStringFromMultiArr",
                value: function (t, e) {
                  var n = t;
                  if (this.w.globals.isMultiLineX) {
                    var i = e.map(function (t, e) {
                        return Array.isArray(t) ? t.length : 1;
                      }),
                      r = Math.max.apply(Math, v(i));
                    n = e[i.indexOf(r)];
                  }
                  return n;
                },
              },
            ]),
            t
          );
        })(),
        dt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.dCtx = e);
          }
          return (
            l(t, [
              {
                key: "getxAxisLabelsCoords",
                value: function () {
                  var t,
                    e = this.w,
                    n = e.globals.labels.slice();
                  if (
                    (e.config.xaxis.convertedCatToNumeric &&
                      0 === n.length &&
                      (n = e.globals.categoryLabels),
                    e.globals.timescaleLabels.length > 0)
                  ) {
                    var i = this.getxAxisTimeScaleLabelsCoords();
                    (t = { width: i.width, height: i.height }),
                      (e.globals.rotateXLabels = !1);
                  } else {
                    this.dCtx.lgWidthForSideLegends =
                      ("left" !== e.config.legend.position &&
                        "right" !== e.config.legend.position) ||
                      e.config.legend.floating
                        ? 0
                        : this.dCtx.lgRect.width;
                    var r = e.globals.xLabelFormatter,
                      o = O.getLargestStringFromArr(n),
                      a = this.dCtx.dimHelpers.getLargestStringFromMultiArr(
                        o,
                        n
                      );
                    e.globals.isBarHorizontal &&
                      (a = o =
                        e.globals.yAxisScale[0].result.reduce(function (t, e) {
                          return t.length > e.length ? t : e;
                        }, 0));
                    var s = new T(this.dCtx.ctx),
                      l = o;
                    (o = s.xLabelFormat(r, o, l, {
                      i: void 0,
                      dateFormatter: new S(this.dCtx.ctx).formatDate,
                      w: e,
                    })),
                      (a = s.xLabelFormat(r, a, l, {
                        i: void 0,
                        dateFormatter: new S(this.dCtx.ctx).formatDate,
                        w: e,
                      })),
                      ((e.config.xaxis.convertedCatToNumeric && void 0 === o) ||
                        "" === String(o).trim()) &&
                        (a = o = "1");
                    var c = new x(this.dCtx.ctx),
                      d = c.getTextRects(
                        o,
                        e.config.xaxis.labels.style.fontSize
                      ),
                      u = d;
                    if (
                      (o !== a &&
                        (u = c.getTextRects(
                          a,
                          e.config.xaxis.labels.style.fontSize
                        )),
                      ((t = {
                        width: d.width >= u.width ? d.width : u.width,
                        height: d.height >= u.height ? d.height : u.height,
                      }).width *
                        n.length >
                        e.globals.svgWidth -
                          this.dCtx.lgWidthForSideLegends -
                          this.dCtx.yAxisWidth -
                          this.dCtx.gridPad.left -
                          this.dCtx.gridPad.right &&
                        0 !== e.config.xaxis.labels.rotate) ||
                        e.config.xaxis.labels.rotateAlways)
                    ) {
                      if (!e.globals.isBarHorizontal) {
                        e.globals.rotateXLabels = !0;
                        var p = function (t) {
                          return c.getTextRects(
                            t,
                            e.config.xaxis.labels.style.fontSize,
                            e.config.xaxis.labels.style.fontFamily,
                            "rotate(".concat(
                              e.config.xaxis.labels.rotate,
                              " 0 0)"
                            ),
                            !1
                          );
                        };
                        (d = p(o)),
                          o !== a && (u = p(a)),
                          (t.height =
                            (d.height > u.height ? d.height : u.height) / 1.5),
                          (t.width = d.width > u.width ? d.width : u.width);
                      }
                    } else e.globals.rotateXLabels = !1;
                  }
                  return (
                    e.config.xaxis.labels.show || (t = { width: 0, height: 0 }),
                    { width: t.width, height: t.height }
                  );
                },
              },
              {
                key: "getxAxisGroupLabelsCoords",
                value: function () {
                  var t,
                    e = this.w;
                  if (!e.globals.hasXaxisGroups) return { width: 0, height: 0 };
                  var n,
                    i =
                      (null === (t = e.config.xaxis.group.style) || void 0 === t
                        ? void 0
                        : t.fontSize) || e.config.xaxis.labels.style.fontSize,
                    r = e.globals.groups.map(function (t) {
                      return t.title;
                    }),
                    o = O.getLargestStringFromArr(r),
                    a = this.dCtx.dimHelpers.getLargestStringFromMultiArr(o, r),
                    s = new x(this.dCtx.ctx),
                    l = s.getTextRects(o, i),
                    c = l;
                  return (
                    o !== a && (c = s.getTextRects(a, i)),
                    (n = {
                      width: l.width >= c.width ? l.width : c.width,
                      height: l.height >= c.height ? l.height : c.height,
                    }),
                    e.config.xaxis.labels.show || (n = { width: 0, height: 0 }),
                    { width: n.width, height: n.height }
                  );
                },
              },
              {
                key: "getxAxisTitleCoords",
                value: function () {
                  var t = this.w,
                    e = 0,
                    n = 0;
                  if (void 0 !== t.config.xaxis.title.text) {
                    var i = new x(this.dCtx.ctx).getTextRects(
                      t.config.xaxis.title.text,
                      t.config.xaxis.title.style.fontSize
                    );
                    (e = i.width), (n = i.height);
                  }
                  return { width: e, height: n };
                },
              },
              {
                key: "getxAxisTimeScaleLabelsCoords",
                value: function () {
                  var t,
                    e = this.w;
                  this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice();
                  var n = this.dCtx.timescaleLabels.map(function (t) {
                      return t.value;
                    }),
                    i = n.reduce(function (t, e) {
                      return void 0 === t ? 0 : t.length > e.length ? t : e;
                    }, 0);
                  return (
                    1.05 *
                      (t = new x(this.dCtx.ctx).getTextRects(
                        i,
                        e.config.xaxis.labels.style.fontSize
                      )).width *
                      n.length >
                      e.globals.gridWidth &&
                      0 !== e.config.xaxis.labels.rotate &&
                      (e.globals.overlappingXLabels = !0),
                    t
                  );
                },
              },
              {
                key: "additionalPaddingXLabels",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = n.globals,
                    r = n.config,
                    o = r.xaxis.type,
                    a = t.width;
                  (i.skipLastTimelinelabel = !1),
                    (i.skipFirstTimelinelabel = !1);
                  var s =
                      n.config.yaxis[0].opposite && n.globals.isBarHorizontal,
                    l = function (t, s) {
                      (r.yaxis.length > 1 &&
                        (function (t) {
                          return -1 !== i.collapsedSeriesIndices.indexOf(t);
                        })(s)) ||
                        (function (t) {
                          if (
                            e.dCtx.timescaleLabels &&
                            e.dCtx.timescaleLabels.length
                          ) {
                            var s = e.dCtx.timescaleLabels[0],
                              l =
                                e.dCtx.timescaleLabels[
                                  e.dCtx.timescaleLabels.length - 1
                                ].position +
                                a / 1.75 -
                                e.dCtx.yAxisWidthRight,
                              c = s.position - a / 1.75 + e.dCtx.yAxisWidthLeft,
                              d =
                                "right" === n.config.legend.position &&
                                e.dCtx.lgRect.width > 0
                                  ? e.dCtx.lgRect.width
                                  : 0;
                            l > i.svgWidth - i.translateX - d &&
                              (i.skipLastTimelinelabel = !0),
                              c <
                                -((t.show && !t.floating) ||
                                ("bar" !== r.chart.type &&
                                  "candlestick" !== r.chart.type &&
                                  "rangeBar" !== r.chart.type &&
                                  "boxPlot" !== r.chart.type)
                                  ? 10
                                  : a / 1.75) &&
                                (i.skipFirstTimelinelabel = !0);
                          } else
                            "datetime" === o
                              ? e.dCtx.gridPad.right < a &&
                                !i.rotateXLabels &&
                                (i.skipLastTimelinelabel = !0)
                              : "datetime" !== o &&
                                e.dCtx.gridPad.right <
                                  a / 2 - e.dCtx.yAxisWidthRight &&
                                !i.rotateXLabels &&
                                !n.config.xaxis.labels.trim &&
                                (e.dCtx.xPadRight = a / 2 + 1);
                        })(t);
                    };
                  r.yaxis.forEach(function (t, n) {
                    s
                      ? (e.dCtx.gridPad.left < a &&
                          (e.dCtx.xPadLeft = a / 2 + 1),
                        (e.dCtx.xPadRight = a / 2 + 1))
                      : l(t, n);
                  });
                },
              },
            ]),
            t
          );
        })(),
        ut = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.dCtx = e);
          }
          return (
            l(t, [
              {
                key: "getyAxisLabelsCoords",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = [],
                    i = 10,
                    r = new D(this.dCtx.ctx);
                  return (
                    e.config.yaxis.map(function (o, a) {
                      var s = { seriesIndex: a, dataPointIndex: -1, w: e },
                        l = e.globals.yAxisScale[a],
                        c = 0;
                      if (
                        (!r.isYAxisHidden(a) &&
                          o.labels.show &&
                          void 0 !== o.labels.minWidth &&
                          (c = o.labels.minWidth),
                        !r.isYAxisHidden(a) && o.labels.show && l.result.length)
                      ) {
                        var d = e.globals.yLabelFormatters[a],
                          u = l.niceMin === Number.MIN_VALUE ? 0 : l.niceMin,
                          p = l.result.reduce(function (t, e) {
                            var n, i;
                            return (null === (n = String(d(t, s))) ||
                            void 0 === n
                              ? void 0
                              : n.length) >
                              (null === (i = String(d(e, s))) || void 0 === i
                                ? void 0
                                : i.length)
                              ? t
                              : e;
                          }, u),
                          h = (p = d(p, s));
                        if (
                          ((void 0 !== p && 0 !== p.length) || (p = l.niceMax),
                          e.globals.isBarHorizontal)
                        ) {
                          i = 0;
                          var f = e.globals.labels.slice();
                          (p = O.getLargestStringFromArr(f)),
                            (p = d(p, {
                              seriesIndex: a,
                              dataPointIndex: -1,
                              w: e,
                            })),
                            (h = t.dCtx.dimHelpers.getLargestStringFromMultiArr(
                              p,
                              f
                            ));
                        }
                        var b = new x(t.dCtx.ctx),
                          m = "rotate(".concat(o.labels.rotate, " 0 0)"),
                          g = b.getTextRects(
                            p,
                            o.labels.style.fontSize,
                            o.labels.style.fontFamily,
                            m,
                            !1
                          ),
                          v = g;
                        p !== h &&
                          (v = b.getTextRects(
                            h,
                            o.labels.style.fontSize,
                            o.labels.style.fontFamily,
                            m,
                            !1
                          )),
                          n.push({
                            width:
                              (c > v.width || c > g.width
                                ? c
                                : v.width > g.width
                                ? v.width
                                : g.width) + i,
                            height: v.height > g.height ? v.height : g.height,
                          });
                      } else n.push({ width: 0, height: 0 });
                    }),
                    n
                  );
                },
              },
              {
                key: "getyAxisTitleCoords",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = [];
                  return (
                    e.config.yaxis.map(function (e, i) {
                      if (e.show && void 0 !== e.title.text) {
                        var r = new x(t.dCtx.ctx),
                          o = "rotate(".concat(e.title.rotate, " 0 0)"),
                          a = r.getTextRects(
                            e.title.text,
                            e.title.style.fontSize,
                            e.title.style.fontFamily,
                            o,
                            !1
                          );
                        n.push({ width: a.width, height: a.height });
                      } else n.push({ width: 0, height: 0 });
                    }),
                    n
                  );
                },
              },
              {
                key: "getTotalYAxisWidth",
                value: function () {
                  var t = this.w,
                    e = 0,
                    n = 0,
                    i = 0,
                    r = t.globals.yAxisScale.length > 1 ? 10 : 0,
                    o = new D(this.dCtx.ctx),
                    a = function (a, s) {
                      var l = t.config.yaxis[s].floating,
                        c = 0;
                      a.width > 0 && !l
                        ? ((c = a.width + r),
                          (function (e) {
                            return t.globals.ignoreYAxisIndexes.indexOf(e) > -1;
                          })(s) && (c = c - a.width - r))
                        : (c = l || o.isYAxisHidden(s) ? 0 : 5),
                        t.config.yaxis[s].opposite ? (i += c) : (n += c),
                        (e += c);
                    };
                  return (
                    t.globals.yLabelsCoords.map(function (t, e) {
                      a(t, e);
                    }),
                    t.globals.yTitleCoords.map(function (t, e) {
                      a(t, e);
                    }),
                    t.globals.isBarHorizontal &&
                      !t.config.yaxis[0].floating &&
                      (e =
                        t.globals.yLabelsCoords[0].width +
                        t.globals.yTitleCoords[0].width +
                        15),
                    (this.dCtx.yAxisWidthLeft = n),
                    (this.dCtx.yAxisWidthRight = i),
                    e
                  );
                },
              },
            ]),
            t
          );
        })(),
        pt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.dCtx = e);
          }
          return (
            l(t, [
              {
                key: "gridPadForColumnsInNumericAxis",
                value: function (t) {
                  var e = this.w,
                    n = e.config,
                    i = e.globals;
                  if (
                    i.noData ||
                    i.collapsedSeries.length +
                      i.ancillaryCollapsedSeries.length ===
                      n.series.length
                  )
                    return 0;
                  var r = function (t) {
                      return [
                        "bar",
                        "rangeBar",
                        "candlestick",
                        "boxPlot",
                      ].includes(t);
                    },
                    o = n.chart.type,
                    a = 0,
                    s = r(o) ? n.series.length : 1;
                  i.comboBarCount > 0 && (s = i.comboBarCount),
                    i.collapsedSeries.forEach(function (t) {
                      r(t.type) && (s -= 1);
                    }),
                    n.chart.stacked && (s = 1);
                  var l = r(o) || i.comboBarCount > 0,
                    c = Math.abs(i.initialMaxX - i.initialMinX);
                  if (
                    l &&
                    i.isXNumeric &&
                    !i.isBarHorizontal &&
                    s > 0 &&
                    0 !== c
                  ) {
                    c <= 3 && (c = i.dataPoints);
                    var d = c / t,
                      u = i.minXDiff && i.minXDiff / d > 0 ? i.minXDiff / d : 0;
                    u > t / 2 && (u /= 2),
                      (a =
                        (u * parseInt(n.plotOptions.bar.columnWidth, 10)) /
                        100) < 1 && (a = 1),
                      (i.barPadForNumericAxis = a);
                  }
                  return a;
                },
              },
              {
                key: "gridPadFortitleSubtitle",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = e.globals,
                    i = this.dCtx.isSparkline || !n.axisCharts ? 0 : 10;
                  ["title", "subtitle"].forEach(function (r) {
                    void 0 !== e.config[r].text
                      ? (i += e.config[r].margin)
                      : (i += t.dCtx.isSparkline || !n.axisCharts ? 0 : 5);
                  }),
                    !e.config.legend.show ||
                      "bottom" !== e.config.legend.position ||
                      e.config.legend.floating ||
                      n.axisCharts ||
                      (i += 10);
                  var r = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),
                    o = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
                  (n.gridHeight -= r.height + o.height + i),
                    (n.translateY += r.height + o.height + i);
                },
              },
              {
                key: "setGridXPosForDualYAxis",
                value: function (t, e) {
                  var n = this.w,
                    i = new D(this.dCtx.ctx);
                  n.config.yaxis.forEach(function (r, o) {
                    -1 !== n.globals.ignoreYAxisIndexes.indexOf(o) ||
                      r.floating ||
                      i.isYAxisHidden(o) ||
                      (r.opposite &&
                        (n.globals.translateX -=
                          e[o].width +
                          t[o].width +
                          parseInt(r.labels.style.fontSize, 10) / 1.2 +
                          12),
                      n.globals.translateX < 2 && (n.globals.translateX = 2));
                  });
                },
              },
            ]),
            t
          );
        })(),
        ht = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.lgRect = {}),
              (this.yAxisWidth = 0),
              (this.yAxisWidthLeft = 0),
              (this.yAxisWidthRight = 0),
              (this.xAxisHeight = 0),
              (this.isSparkline = this.w.config.chart.sparkline.enabled),
              (this.dimHelpers = new ct(this)),
              (this.dimYAxis = new ut(this)),
              (this.dimXAxis = new dt(this)),
              (this.dimGrid = new pt(this)),
              (this.lgWidthForSideLegends = 0),
              (this.gridPad = this.w.config.grid.padding),
              (this.xPadRight = 0),
              (this.xPadLeft = 0);
          }
          return (
            l(t, [
              {
                key: "plotCoords",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = e.globals;
                  (this.lgRect = this.dimHelpers.getLegendsRect()),
                    (this.datalabelsCoords = { width: 0, height: 0 });
                  var i = Array.isArray(e.config.stroke.width)
                    ? Math.max.apply(Math, v(e.config.stroke.width))
                    : e.config.stroke.width;
                  this.isSparkline &&
                    ((e.config.markers.discrete.length > 0 ||
                      e.config.markers.size > 0) &&
                      Object.entries(this.gridPad).forEach(function (e) {
                        var n = g(e, 2),
                          i = n[0],
                          r = n[1];
                        t.gridPad[i] = Math.max(
                          r,
                          t.w.globals.markers.largestSize / 1.5
                        );
                      }),
                    (this.gridPad.top = Math.max(i / 2, this.gridPad.top)),
                    (this.gridPad.bottom = Math.max(
                      i / 2,
                      this.gridPad.bottom
                    ))),
                    n.axisCharts
                      ? this.setDimensionsForAxisCharts()
                      : this.setDimensionsForNonAxisCharts(),
                    this.dimGrid.gridPadFortitleSubtitle(),
                    (n.gridHeight =
                      n.gridHeight - this.gridPad.top - this.gridPad.bottom),
                    (n.gridWidth =
                      n.gridWidth -
                      this.gridPad.left -
                      this.gridPad.right -
                      this.xPadRight -
                      this.xPadLeft);
                  var r = this.dimGrid.gridPadForColumnsInNumericAxis(
                    n.gridWidth
                  );
                  (n.gridWidth = n.gridWidth - 2 * r),
                    (n.translateX =
                      n.translateX +
                      this.gridPad.left +
                      this.xPadLeft +
                      (r > 0 ? r : 0)),
                    (n.translateY = n.translateY + this.gridPad.top);
                },
              },
              {
                key: "setDimensionsForAxisCharts",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = e.globals,
                    i = this.dimYAxis.getyAxisLabelsCoords(),
                    r = this.dimYAxis.getyAxisTitleCoords();
                  n.isSlopeChart &&
                    (this.datalabelsCoords =
                      this.dimHelpers.getDatalabelsRect()),
                    (e.globals.yLabelsCoords = []),
                    (e.globals.yTitleCoords = []),
                    e.config.yaxis.map(function (t, n) {
                      e.globals.yLabelsCoords.push({
                        width: i[n].width,
                        index: n,
                      }),
                        e.globals.yTitleCoords.push({
                          width: r[n].width,
                          index: n,
                        });
                    }),
                    (this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth());
                  var o = this.dimXAxis.getxAxisLabelsCoords(),
                    a = this.dimXAxis.getxAxisGroupLabelsCoords(),
                    s = this.dimXAxis.getxAxisTitleCoords();
                  this.conditionalChecksForAxisCoords(o, s, a),
                    (n.translateXAxisY = e.globals.rotateXLabels
                      ? this.xAxisHeight / 8
                      : -4),
                    (n.translateXAxisX =
                      e.globals.rotateXLabels &&
                      e.globals.isXNumeric &&
                      e.config.xaxis.labels.rotate <= -45
                        ? -this.xAxisWidth / 4
                        : 0),
                    e.globals.isBarHorizontal &&
                      ((n.rotateXLabels = !1),
                      (n.translateXAxisY =
                        (parseInt(e.config.xaxis.labels.style.fontSize, 10) /
                          1.5) *
                        -1)),
                    (n.translateXAxisY =
                      n.translateXAxisY + e.config.xaxis.labels.offsetY),
                    (n.translateXAxisX =
                      n.translateXAxisX + e.config.xaxis.labels.offsetX);
                  var l = this.yAxisWidth,
                    c = this.xAxisHeight;
                  (n.xAxisLabelsHeight = this.xAxisHeight - s.height),
                    (n.xAxisGroupLabelsHeight = n.xAxisLabelsHeight - o.height),
                    (n.xAxisLabelsWidth = this.xAxisWidth),
                    (n.xAxisHeight = this.xAxisHeight);
                  var d = 10;
                  ("radar" === e.config.chart.type || this.isSparkline) &&
                    ((l = 0), (c = 0)),
                    this.isSparkline && (this.lgRect = { height: 0, width: 0 }),
                    (this.isSparkline || "treemap" === e.config.chart.type) &&
                      ((l = 0), (c = 0), (d = 0)),
                    this.isSparkline ||
                      "treemap" === e.config.chart.type ||
                      this.dimXAxis.additionalPaddingXLabels(o);
                  var u = function () {
                    (n.translateX = l + t.datalabelsCoords.width),
                      (n.gridHeight =
                        n.svgHeight -
                        t.lgRect.height -
                        c -
                        (t.isSparkline || "treemap" === e.config.chart.type
                          ? 0
                          : e.globals.rotateXLabels
                          ? 10
                          : 15)),
                      (n.gridWidth =
                        n.svgWidth - l - 2 * t.datalabelsCoords.width);
                  };
                  switch (
                    ("top" === e.config.xaxis.position &&
                      (d = n.xAxisHeight - e.config.xaxis.axisTicks.height - 5),
                    e.config.legend.position)
                  ) {
                    case "bottom":
                      (n.translateY = d), u();
                      break;
                    case "top":
                      (n.translateY = this.lgRect.height + d), u();
                      break;
                    case "left":
                      (n.translateY = d),
                        (n.translateX =
                          this.lgRect.width + l + this.datalabelsCoords.width),
                        (n.gridHeight = n.svgHeight - c - 12),
                        (n.gridWidth =
                          n.svgWidth -
                          this.lgRect.width -
                          l -
                          2 * this.datalabelsCoords.width);
                      break;
                    case "right":
                      (n.translateY = d),
                        (n.translateX = l + this.datalabelsCoords.width),
                        (n.gridHeight = n.svgHeight - c - 12),
                        (n.gridWidth =
                          n.svgWidth -
                          this.lgRect.width -
                          l -
                          2 * this.datalabelsCoords.width -
                          5);
                      break;
                    default:
                      throw new Error("Legend position not supported");
                  }
                  this.dimGrid.setGridXPosForDualYAxis(r, i),
                    new et(this.ctx).setYAxisXPosition(i, r);
                },
              },
              {
                key: "setDimensionsForNonAxisCharts",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = t.config,
                    i = 0;
                  t.config.legend.show && !t.config.legend.floating && (i = 20);
                  var r =
                      "pie" === n.chart.type ||
                      "polarArea" === n.chart.type ||
                      "donut" === n.chart.type
                        ? "pie"
                        : "radialBar",
                    o = n.plotOptions[r].offsetY,
                    a = n.plotOptions[r].offsetX;
                  if (!n.legend.show || n.legend.floating) {
                    e.gridHeight = e.svgHeight;
                    var s = e.dom.elWrap.getBoundingClientRect().width;
                    return (
                      (e.gridWidth = Math.min(s, e.gridHeight)),
                      (e.translateY = o),
                      void (e.translateX = a + (e.svgWidth - e.gridWidth) / 2)
                    );
                  }
                  switch (n.legend.position) {
                    case "bottom":
                      (e.gridHeight = e.svgHeight - this.lgRect.height),
                        (e.gridWidth = e.svgWidth),
                        (e.translateY = o - 10),
                        (e.translateX = a + (e.svgWidth - e.gridWidth) / 2);
                      break;
                    case "top":
                      (e.gridHeight = e.svgHeight - this.lgRect.height),
                        (e.gridWidth = e.svgWidth),
                        (e.translateY = this.lgRect.height + o + 10),
                        (e.translateX = a + (e.svgWidth - e.gridWidth) / 2);
                      break;
                    case "left":
                      (e.gridWidth = e.svgWidth - this.lgRect.width - i),
                        (e.gridHeight =
                          "auto" !== n.chart.height
                            ? e.svgHeight
                            : e.gridWidth),
                        (e.translateY = o),
                        (e.translateX = a + this.lgRect.width + i);
                      break;
                    case "right":
                      (e.gridWidth = e.svgWidth - this.lgRect.width - i - 5),
                        (e.gridHeight =
                          "auto" !== n.chart.height
                            ? e.svgHeight
                            : e.gridWidth),
                        (e.translateY = o),
                        (e.translateX = a + 10);
                      break;
                    default:
                      throw new Error("Legend position not supported");
                  }
                },
              },
              {
                key: "conditionalChecksForAxisCoords",
                value: function (t, e, n) {
                  var i = this.w,
                    r = i.globals.hasXaxisGroups ? 2 : 1,
                    o = n.height + t.height + e.height,
                    a = i.globals.isMultiLineX
                      ? 1.2
                      : i.globals.LINE_HEIGHT_RATIO,
                    s = i.globals.rotateXLabels ? 22 : 10,
                    l =
                      i.globals.rotateXLabels &&
                      "bottom" === i.config.legend.position
                        ? 10
                        : 0;
                  (this.xAxisHeight = o * a + r * s + l),
                    (this.xAxisWidth = t.width),
                    this.xAxisHeight - e.height >
                      i.config.xaxis.labels.maxHeight &&
                      (this.xAxisHeight = i.config.xaxis.labels.maxHeight),
                    i.config.xaxis.labels.minHeight &&
                      this.xAxisHeight < i.config.xaxis.labels.minHeight &&
                      (this.xAxisHeight = i.config.xaxis.labels.minHeight),
                    i.config.xaxis.floating && (this.xAxisHeight = 0);
                  var c = 0,
                    d = 0;
                  i.config.yaxis.forEach(function (t) {
                    (c += t.labels.minWidth), (d += t.labels.maxWidth);
                  }),
                    this.yAxisWidth < c && (this.yAxisWidth = c),
                    this.yAxisWidth > d && (this.yAxisWidth = d);
                },
              },
            ]),
            t
          );
        })(),
        ft = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.lgCtx = e);
          }
          return (
            l(t, [
              {
                key: "getLegendStyles",
                value: function () {
                  var t,
                    e,
                    n,
                    i = document.createElement("style");
                  i.setAttribute("type", "text/css");
                  var r =
                    (null === (t = this.lgCtx.ctx) ||
                    void 0 === t ||
                    null === (e = t.opts) ||
                    void 0 === e ||
                    null === (n = e.chart) ||
                    void 0 === n
                      ? void 0
                      : n.nonce) || this.w.config.chart.nonce;
                  r && i.setAttribute("nonce", r);
                  var o = document.createTextNode(
                    "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }"
                  );
                  return i.appendChild(o), i;
                },
              },
              {
                key: "getLegendDimensions",
                value: function () {
                  var t = this.w.globals.dom.baseEl
                      .querySelector(".apexcharts-legend")
                      .getBoundingClientRect(),
                    e = t.width;
                  return { clwh: t.height, clww: e };
                },
              },
              {
                key: "appendToForeignObject",
                value: function () {
                  this.w.globals.dom.elLegendForeign.appendChild(
                    this.getLegendStyles()
                  );
                },
              },
              {
                key: "toggleDataSeries",
                value: function (t, e) {
                  var n = this,
                    i = this.w;
                  if (
                    i.globals.axisCharts ||
                    "radialBar" === i.config.chart.type
                  ) {
                    i.globals.resized = !0;
                    var r = null,
                      o = null;
                    (i.globals.risingSeries = []),
                      i.globals.axisCharts
                        ? ((r = i.globals.dom.baseEl.querySelector(
                            ".apexcharts-series[data\\:realIndex='".concat(
                              t,
                              "']"
                            )
                          )),
                          (o = parseInt(r.getAttribute("data:realIndex"), 10)))
                        : ((r = i.globals.dom.baseEl.querySelector(
                            ".apexcharts-series[rel='".concat(t + 1, "']")
                          )),
                          (o = parseInt(r.getAttribute("rel"), 10) - 1)),
                      e
                        ? [
                            {
                              cs: i.globals.collapsedSeries,
                              csi: i.globals.collapsedSeriesIndices,
                            },
                            {
                              cs: i.globals.ancillaryCollapsedSeries,
                              csi: i.globals.ancillaryCollapsedSeriesIndices,
                            },
                          ].forEach(function (t) {
                            n.riseCollapsedSeries(t.cs, t.csi, o);
                          })
                        : this.hideSeries({ seriesEl: r, realIndex: o });
                  } else {
                    var a = i.globals.dom.Paper.select(
                        " .apexcharts-series[rel='".concat(t + 1, "'] path")
                      ),
                      s = i.config.chart.type;
                    if ("pie" === s || "polarArea" === s || "donut" === s) {
                      var l = i.config.plotOptions.pie.donut.labels;
                      new x(this.lgCtx.ctx).pathMouseDown(a.members[0], null),
                        this.lgCtx.ctx.pie.printDataLabelsInner(
                          a.members[0].node,
                          l
                        );
                    }
                    a.fire("click");
                  }
                },
              },
              {
                key: "getSeriesAfterCollapsing",
                value: function (t) {
                  var e = t.realIndex,
                    n = this.w,
                    i = n.globals,
                    r = O.clone(n.config.series);
                  if (i.axisCharts) {
                    var o = n.config.yaxis[i.seriesYAxisReverseMap[e]],
                      a = {
                        index: e,
                        data: r[e].data.slice(),
                        type: r[e].type || n.config.chart.type,
                      };
                    if (o && o.show && o.showAlways)
                      i.ancillaryCollapsedSeriesIndices.indexOf(e) < 0 &&
                        (i.ancillaryCollapsedSeries.push(a),
                        i.ancillaryCollapsedSeriesIndices.push(e));
                    else if (i.collapsedSeriesIndices.indexOf(e) < 0) {
                      i.collapsedSeries.push(a),
                        i.collapsedSeriesIndices.push(e);
                      var s = i.risingSeries.indexOf(e);
                      i.risingSeries.splice(s, 1);
                    }
                  } else
                    i.collapsedSeries.push({ index: e, data: r[e] }),
                      i.collapsedSeriesIndices.push(e);
                  return (
                    (i.allSeriesCollapsed =
                      i.collapsedSeries.length +
                        i.ancillaryCollapsedSeries.length ===
                      n.config.series.length),
                    this._getSeriesBasedOnCollapsedState(r)
                  );
                },
              },
              {
                key: "hideSeries",
                value: function (t) {
                  for (
                    var e = t.seriesEl,
                      n = t.realIndex,
                      i = this.w,
                      r = this.getSeriesAfterCollapsing({ realIndex: n }),
                      o = e.childNodes,
                      a = 0;
                    a < o.length;
                    a++
                  )
                    o[a].classList.contains("apexcharts-series-markers-wrap") &&
                      (o[a].classList.contains("apexcharts-hide")
                        ? o[a].classList.remove("apexcharts-hide")
                        : o[a].classList.add("apexcharts-hide"));
                  this.lgCtx.ctx.updateHelpers._updateSeries(
                    r,
                    i.config.chart.animations.dynamicAnimation.enabled
                  );
                },
              },
              {
                key: "riseCollapsedSeries",
                value: function (t, e, n) {
                  var i = this.w,
                    r = O.clone(i.config.series);
                  if (t.length > 0) {
                    for (var o = 0; o < t.length; o++)
                      t[o].index === n &&
                        (i.globals.axisCharts
                          ? (r[n].data = t[o].data.slice())
                          : (r[n] = t[o].data),
                        (r[n].hidden = !1),
                        t.splice(o, 1),
                        e.splice(o, 1),
                        i.globals.risingSeries.push(n));
                    (r = this._getSeriesBasedOnCollapsedState(r)),
                      this.lgCtx.ctx.updateHelpers._updateSeries(
                        r,
                        i.config.chart.animations.dynamicAnimation.enabled
                      );
                  }
                },
              },
              {
                key: "_getSeriesBasedOnCollapsedState",
                value: function (t) {
                  var e = this.w,
                    n = 0;
                  return (
                    e.globals.axisCharts
                      ? t.forEach(function (i, r) {
                          (e.globals.collapsedSeriesIndices.indexOf(r) < 0 &&
                            e.globals.ancillaryCollapsedSeriesIndices.indexOf(
                              r
                            ) < 0) ||
                            ((t[r].data = []), n++);
                        })
                      : t.forEach(function (i, r) {
                          !e.globals.collapsedSeriesIndices.indexOf(r) < 0 &&
                            ((t[r] = 0), n++);
                        }),
                    (e.globals.allSeriesCollapsed = n === t.length),
                    t
                  );
                },
              },
            ]),
            t
          );
        })(),
        bt = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.onLegendClick = this.onLegendClick.bind(this)),
              (this.onLegendHovered = this.onLegendHovered.bind(this)),
              (this.isBarsDistributed =
                "bar" === this.w.config.chart.type &&
                this.w.config.plotOptions.bar.distributed &&
                1 === this.w.config.series.length),
              (this.legendHelpers = new ft(this));
          }
          return (
            l(t, [
              {
                key: "init",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = t.config,
                    i =
                      (n.legend.showForSingleSeries && 1 === e.series.length) ||
                      this.isBarsDistributed ||
                      e.series.length > 1;
                  if (
                    (this.legendHelpers.appendToForeignObject(),
                    (i || !e.axisCharts) && n.legend.show)
                  ) {
                    for (; e.dom.elLegendWrap.firstChild; )
                      e.dom.elLegendWrap.removeChild(
                        e.dom.elLegendWrap.firstChild
                      );
                    this.drawLegends(),
                      "bottom" === n.legend.position ||
                      "top" === n.legend.position
                        ? this.legendAlignHorizontal()
                        : ("right" !== n.legend.position &&
                            "left" !== n.legend.position) ||
                          this.legendAlignVertical();
                  }
                },
              },
              {
                key: "createLegendMarker",
                value: function (t) {
                  var e = t.i,
                    n = t.fillcolor,
                    i = this.w,
                    r = document.createElement("span");
                  r.classList.add("apexcharts-legend-marker");
                  var o =
                      i.config.legend.markers.shape || i.config.markers.shape,
                    a = o;
                  Array.isArray(o) && (a = o[e]);
                  var s = Array.isArray(i.config.legend.markers.size)
                      ? parseFloat(i.config.legend.markers.size[e])
                      : parseFloat(i.config.legend.markers.size),
                    l = Array.isArray(i.config.legend.markers.offsetX)
                      ? parseFloat(i.config.legend.markers.offsetX[e])
                      : parseFloat(i.config.legend.markers.offsetX),
                    c = Array.isArray(i.config.legend.markers.offsetY)
                      ? parseFloat(i.config.legend.markers.offsetY[e])
                      : parseFloat(i.config.legend.markers.offsetY),
                    d = Array.isArray(i.config.legend.markers.strokeWidth)
                      ? parseFloat(i.config.legend.markers.strokeWidth[e])
                      : parseFloat(i.config.legend.markers.strokeWidth),
                    u = r.style;
                  if (
                    ((u.height = 2 * (s + d) + "px"),
                    (u.width = 2 * (s + d) + "px"),
                    (u.left = l + "px"),
                    (u.top = c + "px"),
                    i.config.legend.markers.customHTML)
                  )
                    (u.background = "transparent"),
                      (u.color = n[e]),
                      Array.isArray(i.config.legend.markers.customHTML)
                        ? i.config.legend.markers.customHTML[e] &&
                          (r.innerHTML =
                            i.config.legend.markers.customHTML[e]())
                        : (r.innerHTML = i.config.legend.markers.customHTML());
                  else {
                    var p = new Y(this.ctx).getMarkerConfig({
                        cssClass:
                          "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(
                            a
                          ),
                        seriesIndex: e,
                        strokeWidth: d,
                        size: s,
                      }),
                      h = SVG(r).size("100%", "100%"),
                      f = new x(this.ctx).drawMarker(
                        0,
                        0,
                        b(
                          b({}, p),
                          {},
                          {
                            pointFillColor: Array.isArray(n)
                              ? n[e]
                              : p.pointFillColor,
                            shape: a,
                          }
                        )
                      );
                    SVG.select(
                      ".apexcharts-legend-marker.apexcharts-marker"
                    ).members.forEach(function (t) {
                      t.node.classList.contains("apexcharts-marker-triangle")
                        ? (t.node.style.transform = "translate(50%, 45%)")
                        : (t.node.style.transform = "translate(50%, 50%)");
                    }),
                      h.add(f);
                  }
                  return r;
                },
              },
              {
                key: "drawLegends",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = e.config.legend.fontFamily,
                    i = e.globals.seriesNames,
                    r = e.config.legend.markers.fillColors
                      ? e.config.legend.markers.fillColors.slice()
                      : e.globals.colors.slice();
                  if ("heatmap" === e.config.chart.type) {
                    var o = e.config.plotOptions.heatmap.colorScale.ranges;
                    (i = o.map(function (t) {
                      return t.name ? t.name : t.from + " - " + t.to;
                    })),
                      (r = o.map(function (t) {
                        return t.color;
                      }));
                  } else
                    this.isBarsDistributed && (i = e.globals.labels.slice());
                  e.config.legend.customLegendItems.length &&
                    (i = e.config.legend.customLegendItems);
                  for (
                    var a = e.globals.legendFormatter,
                      s = e.config.legend.inverseOrder,
                      l = s ? i.length - 1 : 0;
                    s ? l >= 0 : l <= i.length - 1;
                    s ? l-- : l++
                  ) {
                    var c,
                      d = a(i[l], { seriesIndex: l, w: e }),
                      u = !1,
                      p = !1;
                    if (e.globals.collapsedSeries.length > 0)
                      for (var h = 0; h < e.globals.collapsedSeries.length; h++)
                        e.globals.collapsedSeries[h].index === l && (u = !0);
                    if (e.globals.ancillaryCollapsedSeriesIndices.length > 0)
                      for (
                        var f = 0;
                        f < e.globals.ancillaryCollapsedSeriesIndices.length;
                        f++
                      )
                        e.globals.ancillaryCollapsedSeriesIndices[f] === l &&
                          (p = !0);
                    var b = this.createLegendMarker({ i: l, fillcolor: r });
                    x.setAttrs(b, { rel: l + 1, "data:collapsed": u || p }),
                      (u || p) && b.classList.add("apexcharts-inactive-legend");
                    var m = document.createElement("div"),
                      g = document.createElement("span");
                    g.classList.add("apexcharts-legend-text"),
                      (g.innerHTML = Array.isArray(d) ? d.join(" ") : d);
                    var v = e.config.legend.labels.useSeriesColors
                      ? e.globals.colors[l]
                      : Array.isArray(e.config.legend.labels.colors)
                      ? null === (c = e.config.legend.labels.colors) ||
                        void 0 === c
                        ? void 0
                        : c[l]
                      : e.config.legend.labels.colors;
                    v || (v = e.config.chart.foreColor),
                      (g.style.color = v),
                      (g.style.fontSize =
                        parseFloat(e.config.legend.fontSize) + "px"),
                      (g.style.fontWeight = e.config.legend.fontWeight),
                      (g.style.fontFamily = n || e.config.chart.fontFamily),
                      x.setAttrs(g, {
                        rel: l + 1,
                        i: l,
                        "data:default-text": encodeURIComponent(d),
                        "data:collapsed": u || p,
                      }),
                      m.appendChild(b),
                      m.appendChild(g);
                    var _ = new z(this.ctx);
                    e.config.legend.showForZeroSeries ||
                      (0 === _.getSeriesTotalByIndex(l) &&
                        _.seriesHaveSameValues(l) &&
                        !_.isSeriesNull(l) &&
                        -1 === e.globals.collapsedSeriesIndices.indexOf(l) &&
                        -1 ===
                          e.globals.ancillaryCollapsedSeriesIndices.indexOf(
                            l
                          ) &&
                        m.classList.add("apexcharts-hidden-zero-series")),
                      e.config.legend.showForNullSeries ||
                        (_.isSeriesNull(l) &&
                          -1 === e.globals.collapsedSeriesIndices.indexOf(l) &&
                          -1 ===
                            e.globals.ancillaryCollapsedSeriesIndices.indexOf(
                              l
                            ) &&
                          m.classList.add("apexcharts-hidden-null-series")),
                      e.globals.dom.elLegendWrap.appendChild(m),
                      e.globals.dom.elLegendWrap.classList.add(
                        "apexcharts-align-".concat(
                          e.config.legend.horizontalAlign
                        )
                      ),
                      e.globals.dom.elLegendWrap.classList.add(
                        "apx-legend-position-" + e.config.legend.position
                      ),
                      m.classList.add("apexcharts-legend-series"),
                      (m.style.margin = ""
                        .concat(e.config.legend.itemMargin.vertical, "px ")
                        .concat(e.config.legend.itemMargin.horizontal, "px")),
                      (e.globals.dom.elLegendWrap.style.width = e.config.legend
                        .width
                        ? e.config.legend.width + "px"
                        : ""),
                      (e.globals.dom.elLegendWrap.style.height = e.config.legend
                        .height
                        ? e.config.legend.height + "px"
                        : ""),
                      x.setAttrs(m, {
                        rel: l + 1,
                        seriesName: O.escapeString(i[l]),
                        "data:collapsed": u || p,
                      }),
                      (u || p) && m.classList.add("apexcharts-inactive-legend"),
                      e.config.legend.onItemClick.toggleDataSeries ||
                        m.classList.add("apexcharts-no-click");
                  }
                  e.globals.dom.elWrap.addEventListener(
                    "click",
                    t.onLegendClick,
                    !0
                  ),
                    e.config.legend.onItemHover.highlightDataSeries &&
                      0 === e.config.legend.customLegendItems.length &&
                      (e.globals.dom.elWrap.addEventListener(
                        "mousemove",
                        t.onLegendHovered,
                        !0
                      ),
                      e.globals.dom.elWrap.addEventListener(
                        "mouseout",
                        t.onLegendHovered,
                        !0
                      ));
                },
              },
              {
                key: "setLegendWrapXY",
                value: function (t, e) {
                  var n = this.w,
                    i = n.globals.dom.elLegendWrap,
                    r = i.clientHeight,
                    o = 0,
                    a = 0;
                  if ("bottom" === n.config.legend.position)
                    a =
                      n.globals.svgHeight -
                      Math.min(r, n.globals.svgHeight / 2) -
                      5;
                  else if ("top" === n.config.legend.position) {
                    var s = new ht(this.ctx),
                      l = s.dimHelpers.getTitleSubtitleCoords("title").height,
                      c =
                        s.dimHelpers.getTitleSubtitleCoords("subtitle").height;
                    a = (l > 0 ? l - 10 : 0) + (c > 0 ? c - 10 : 0);
                  }
                  (i.style.position = "absolute"),
                    (o = o + t + n.config.legend.offsetX),
                    (a = a + e + n.config.legend.offsetY),
                    (i.style.left = o + "px"),
                    (i.style.top = a + "px"),
                    "right" === n.config.legend.position &&
                      ((i.style.left = "auto"),
                      (i.style.right = 25 + n.config.legend.offsetX + "px")),
                    ["width", "height"].forEach(function (t) {
                      i.style[t] &&
                        (i.style[t] = parseInt(n.config.legend[t], 10) + "px");
                    });
                },
              },
              {
                key: "legendAlignHorizontal",
                value: function () {
                  var t = this.w;
                  t.globals.dom.elLegendWrap.style.right = 0;
                  var e = new ht(this.ctx),
                    n = e.dimHelpers.getTitleSubtitleCoords("title"),
                    i = e.dimHelpers.getTitleSubtitleCoords("subtitle"),
                    r = 0;
                  "top" === t.config.legend.position &&
                    (r =
                      n.height +
                      i.height +
                      t.config.title.margin +
                      t.config.subtitle.margin -
                      10),
                    this.setLegendWrapXY(20, r);
                },
              },
              {
                key: "legendAlignVertical",
                value: function () {
                  var t = this.w,
                    e = this.legendHelpers.getLegendDimensions(),
                    n = 0;
                  "left" === t.config.legend.position && (n = 20),
                    "right" === t.config.legend.position &&
                      (n = t.globals.svgWidth - e.clww - 10),
                    this.setLegendWrapXY(n, 20);
                },
              },
              {
                key: "onLegendHovered",
                value: function (t) {
                  var e = this.w,
                    n =
                      t.target.classList.contains("apexcharts-legend-series") ||
                      t.target.classList.contains("apexcharts-legend-text") ||
                      t.target.classList.contains("apexcharts-legend-marker");
                  if (
                    "heatmap" === e.config.chart.type ||
                    this.isBarsDistributed
                  ) {
                    if (n) {
                      var i = parseInt(t.target.getAttribute("rel"), 10) - 1;
                      this.ctx.events.fireEvent("legendHover", [
                        this.ctx,
                        i,
                        this.w,
                      ]),
                        new V(this.ctx).highlightRangeInSeries(t, t.target);
                    }
                  } else
                    !t.target.classList.contains(
                      "apexcharts-inactive-legend"
                    ) &&
                      n &&
                      new V(this.ctx).toggleSeriesOnHover(t, t.target);
                },
              },
              {
                key: "onLegendClick",
                value: function (t) {
                  var e = this.w;
                  if (
                    !e.config.legend.customLegendItems.length &&
                    (t.target.classList.contains("apexcharts-legend-series") ||
                      t.target.classList.contains("apexcharts-legend-text") ||
                      t.target.classList.contains("apexcharts-legend-marker"))
                  ) {
                    var n = parseInt(t.target.getAttribute("rel"), 10) - 1,
                      i = "true" === t.target.getAttribute("data:collapsed"),
                      r = this.w.config.chart.events.legendClick;
                    "function" == typeof r && r(this.ctx, n, this.w),
                      this.ctx.events.fireEvent("legendClick", [
                        this.ctx,
                        n,
                        this.w,
                      ]);
                    var o = this.w.config.legend.markers.onClick;
                    "function" == typeof o &&
                      t.target.classList.contains("apexcharts-legend-marker") &&
                      (o(this.ctx, n, this.w),
                      this.ctx.events.fireEvent("legendMarkerClick", [
                        this.ctx,
                        n,
                        this.w,
                      ])),
                      "treemap" !== e.config.chart.type &&
                        "heatmap" !== e.config.chart.type &&
                        !this.isBarsDistributed &&
                        e.config.legend.onItemClick.toggleDataSeries &&
                        this.legendHelpers.toggleDataSeries(n, i);
                  }
                },
              },
            ]),
            t
          );
        })(),
        mt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
            var n = this.w;
            (this.ev = this.w.config.chart.events),
              (this.selectedClass = "apexcharts-selected"),
              (this.localeValues = this.w.globals.locale.toolbar),
              (this.minX = n.globals.minX),
              (this.maxX = n.globals.maxX);
          }
          return (
            l(t, [
              {
                key: "createToolbar",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = function () {
                      return document.createElement("div");
                    },
                    i = n();
                  if (
                    (i.setAttribute("class", "apexcharts-toolbar"),
                    (i.style.top = e.config.chart.toolbar.offsetY + "px"),
                    (i.style.right = 3 - e.config.chart.toolbar.offsetX + "px"),
                    e.globals.dom.elWrap.appendChild(i),
                    (this.elZoom = n()),
                    (this.elZoomIn = n()),
                    (this.elZoomOut = n()),
                    (this.elPan = n()),
                    (this.elSelection = n()),
                    (this.elZoomReset = n()),
                    (this.elMenuIcon = n()),
                    (this.elMenu = n()),
                    (this.elCustomIcons = []),
                    (this.t = e.config.chart.toolbar.tools),
                    Array.isArray(this.t.customIcons))
                  )
                    for (var r = 0; r < this.t.customIcons.length; r++)
                      this.elCustomIcons.push(n());
                  var o = [],
                    a = function (n, i, r) {
                      var a = n.toLowerCase();
                      t.t[a] &&
                        e.config.chart.zoom.enabled &&
                        o.push({
                          el: i,
                          icon: "string" == typeof t.t[a] ? t.t[a] : r,
                          title: t.localeValues[n],
                          class: "apexcharts-".concat(a, "-icon"),
                        });
                    };
                  a(
                    "zoomIn",
                    this.elZoomIn,
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
                  ),
                    a(
                      "zoomOut",
                      this.elZoomOut,
                      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
                    );
                  var s = function (n) {
                    t.t[n] &&
                      e.config.chart[n].enabled &&
                      o.push({
                        el: "zoom" === n ? t.elZoom : t.elSelection,
                        icon:
                          "string" == typeof t.t[n]
                            ? t.t[n]
                            : "zoom" === n
                            ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>'
                            : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                        title:
                          t.localeValues[
                            "zoom" === n ? "selectionZoom" : "selection"
                          ],
                        class: e.globals.isTouchDevice
                          ? "apexcharts-element-hidden"
                          : "apexcharts-".concat(n, "-icon"),
                      });
                  };
                  s("zoom"),
                    s("selection"),
                    this.t.pan &&
                      e.config.chart.zoom.enabled &&
                      o.push({
                        el: this.elPan,
                        icon:
                          "string" == typeof this.t.pan
                            ? this.t.pan
                            : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                        title: this.localeValues.pan,
                        class: e.globals.isTouchDevice
                          ? "apexcharts-element-hidden"
                          : "apexcharts-pan-icon",
                      }),
                    a(
                      "reset",
                      this.elZoomReset,
                      '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'
                    ),
                    this.t.download &&
                      o.push({
                        el: this.elMenuIcon,
                        icon:
                          "string" == typeof this.t.download
                            ? this.t.download
                            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                        title: this.localeValues.menu,
                        class: "apexcharts-menu-icon",
                      });
                  for (var l = 0; l < this.elCustomIcons.length; l++)
                    o.push({
                      el: this.elCustomIcons[l],
                      icon: this.t.customIcons[l].icon,
                      title: this.t.customIcons[l].title,
                      index: this.t.customIcons[l].index,
                      class:
                        "apexcharts-toolbar-custom-icon " +
                        this.t.customIcons[l].class,
                    });
                  o.forEach(function (t, e) {
                    t.index && O.moveIndexInArray(o, e, t.index);
                  });
                  for (var c = 0; c < o.length; c++)
                    x.setAttrs(o[c].el, {
                      class: o[c].class,
                      title: o[c].title,
                    }),
                      (o[c].el.innerHTML = o[c].icon),
                      i.appendChild(o[c].el);
                  this._createHamburgerMenu(i),
                    e.globals.zoomEnabled
                      ? this.elZoom.classList.add(this.selectedClass)
                      : e.globals.panEnabled
                      ? this.elPan.classList.add(this.selectedClass)
                      : e.globals.selectionEnabled &&
                        this.elSelection.classList.add(this.selectedClass),
                    this.addToolbarEventListeners();
                },
              },
              {
                key: "_createHamburgerMenu",
                value: function (t) {
                  (this.elMenuItems = []),
                    t.appendChild(this.elMenu),
                    x.setAttrs(this.elMenu, { class: "apexcharts-menu" });
                  for (
                    var e = [
                        {
                          name: "exportSVG",
                          title: this.localeValues.exportToSVG,
                        },
                        {
                          name: "exportPNG",
                          title: this.localeValues.exportToPNG,
                        },
                        {
                          name: "exportCSV",
                          title: this.localeValues.exportToCSV,
                        },
                      ],
                      n = 0;
                    n < e.length;
                    n++
                  )
                    this.elMenuItems.push(document.createElement("div")),
                      (this.elMenuItems[n].innerHTML = e[n].title),
                      x.setAttrs(this.elMenuItems[n], {
                        class: "apexcharts-menu-item ".concat(e[n].name),
                        title: e[n].title,
                      }),
                      this.elMenu.appendChild(this.elMenuItems[n]);
                },
              },
              {
                key: "addToolbarEventListeners",
                value: function () {
                  var t = this;
                  this.elZoomReset.addEventListener(
                    "click",
                    this.handleZoomReset.bind(this)
                  ),
                    this.elSelection.addEventListener(
                      "click",
                      this.toggleZoomSelection.bind(this, "selection")
                    ),
                    this.elZoom.addEventListener(
                      "click",
                      this.toggleZoomSelection.bind(this, "zoom")
                    ),
                    this.elZoomIn.addEventListener(
                      "click",
                      this.handleZoomIn.bind(this)
                    ),
                    this.elZoomOut.addEventListener(
                      "click",
                      this.handleZoomOut.bind(this)
                    ),
                    this.elPan.addEventListener(
                      "click",
                      this.togglePanning.bind(this)
                    ),
                    this.elMenuIcon.addEventListener(
                      "click",
                      this.toggleMenu.bind(this)
                    ),
                    this.elMenuItems.forEach(function (e) {
                      e.classList.contains("exportSVG")
                        ? e.addEventListener(
                            "click",
                            t.handleDownload.bind(t, "svg")
                          )
                        : e.classList.contains("exportPNG")
                        ? e.addEventListener(
                            "click",
                            t.handleDownload.bind(t, "png")
                          )
                        : e.classList.contains("exportCSV") &&
                          e.addEventListener(
                            "click",
                            t.handleDownload.bind(t, "csv")
                          );
                    });
                  for (var e = 0; e < this.t.customIcons.length; e++)
                    this.elCustomIcons[e].addEventListener(
                      "click",
                      this.t.customIcons[e].click.bind(
                        this,
                        this.ctx,
                        this.ctx.w
                      )
                    );
                },
              },
              {
                key: "toggleZoomSelection",
                value: function (t) {
                  this.ctx.getSyncedCharts().forEach(function (e) {
                    e.ctx.toolbar.toggleOtherControls();
                    var n =
                        "selection" === t
                          ? e.ctx.toolbar.elSelection
                          : e.ctx.toolbar.elZoom,
                      i =
                        "selection" === t ? "selectionEnabled" : "zoomEnabled";
                    (e.w.globals[i] = !e.w.globals[i]),
                      n.classList.contains(e.ctx.toolbar.selectedClass)
                        ? n.classList.remove(e.ctx.toolbar.selectedClass)
                        : n.classList.add(e.ctx.toolbar.selectedClass);
                  });
                },
              },
              {
                key: "getToolbarIconsReference",
                value: function () {
                  var t = this.w;
                  this.elZoom ||
                    (this.elZoom = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-zoom-icon"
                    )),
                    this.elPan ||
                      (this.elPan = t.globals.dom.baseEl.querySelector(
                        ".apexcharts-pan-icon"
                      )),
                    this.elSelection ||
                      (this.elSelection = t.globals.dom.baseEl.querySelector(
                        ".apexcharts-selection-icon"
                      ));
                },
              },
              {
                key: "enableZoomPanFromToolbar",
                value: function (t) {
                  this.toggleOtherControls(),
                    "pan" === t
                      ? (this.w.globals.panEnabled = !0)
                      : (this.w.globals.zoomEnabled = !0);
                  var e = "pan" === t ? this.elPan : this.elZoom,
                    n = "pan" === t ? this.elZoom : this.elPan;
                  e && e.classList.add(this.selectedClass),
                    n && n.classList.remove(this.selectedClass);
                },
              },
              {
                key: "togglePanning",
                value: function () {
                  this.ctx.getSyncedCharts().forEach(function (t) {
                    t.ctx.toolbar.toggleOtherControls(),
                      (t.w.globals.panEnabled = !t.w.globals.panEnabled),
                      t.ctx.toolbar.elPan.classList.contains(
                        t.ctx.toolbar.selectedClass
                      )
                        ? t.ctx.toolbar.elPan.classList.remove(
                            t.ctx.toolbar.selectedClass
                          )
                        : t.ctx.toolbar.elPan.classList.add(
                            t.ctx.toolbar.selectedClass
                          );
                  });
                },
              },
              {
                key: "toggleOtherControls",
                value: function () {
                  var t = this,
                    e = this.w;
                  (e.globals.panEnabled = !1),
                    (e.globals.zoomEnabled = !1),
                    (e.globals.selectionEnabled = !1),
                    this.getToolbarIconsReference(),
                    [this.elPan, this.elSelection, this.elZoom].forEach(
                      function (e) {
                        e && e.classList.remove(t.selectedClass);
                      }
                    );
                },
              },
              {
                key: "handleZoomIn",
                value: function () {
                  var t = this.w;
                  t.globals.isRangeBar &&
                    ((this.minX = t.globals.minY),
                    (this.maxX = t.globals.maxY));
                  var e = (this.minX + this.maxX) / 2,
                    n = (this.minX + e) / 2,
                    i = (this.maxX + e) / 2,
                    r = this._getNewMinXMaxX(n, i);
                  t.globals.disableZoomIn ||
                    this.zoomUpdateOptions(r.minX, r.maxX);
                },
              },
              {
                key: "handleZoomOut",
                value: function () {
                  var t = this.w;
                  if (
                    (t.globals.isRangeBar &&
                      ((this.minX = t.globals.minY),
                      (this.maxX = t.globals.maxY)),
                    !(
                      "datetime" === t.config.xaxis.type &&
                      new Date(this.minX).getUTCFullYear() < 1e3
                    ))
                  ) {
                    var e = (this.minX + this.maxX) / 2,
                      n = this.minX - (e - this.minX),
                      i = this.maxX - (e - this.maxX),
                      r = this._getNewMinXMaxX(n, i);
                    t.globals.disableZoomOut ||
                      this.zoomUpdateOptions(r.minX, r.maxX);
                  }
                },
              },
              {
                key: "_getNewMinXMaxX",
                value: function (t, e) {
                  var n = this.w.config.xaxis.convertedCatToNumeric;
                  return {
                    minX: n ? Math.floor(t) : t,
                    maxX: n ? Math.floor(e) : e,
                  };
                },
              },
              {
                key: "zoomUpdateOptions",
                value: function (t, e) {
                  var n = this.w;
                  if (void 0 !== t || void 0 !== e) {
                    if (
                      !(
                        n.config.xaxis.convertedCatToNumeric &&
                        (t < 1 && ((t = 1), (e = n.globals.dataPoints)),
                        e - t < 2)
                      )
                    ) {
                      var i = { min: t, max: e },
                        r = this.getBeforeZoomRange(i);
                      r && (i = r.xaxis);
                      var o = { xaxis: i },
                        a = O.clone(n.globals.initialConfig.yaxis);
                      n.config.chart.group || (o.yaxis = a),
                        (this.w.globals.zoomed = !0),
                        this.ctx.updateHelpers._updateOptions(
                          o,
                          !1,
                          this.w.config.chart.animations.dynamicAnimation
                            .enabled
                        ),
                        this.zoomCallback(i, a);
                    }
                  } else this.handleZoomReset();
                },
              },
              {
                key: "zoomCallback",
                value: function (t, e) {
                  "function" == typeof this.ev.zoomed &&
                    this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e });
                },
              },
              {
                key: "getBeforeZoomRange",
                value: function (t, e) {
                  var n = null;
                  return (
                    "function" == typeof this.ev.beforeZoom &&
                      (n = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })),
                    n
                  );
                },
              },
              {
                key: "toggleMenu",
                value: function () {
                  var t = this;
                  window.setTimeout(function () {
                    t.elMenu.classList.contains("apexcharts-menu-open")
                      ? t.elMenu.classList.remove("apexcharts-menu-open")
                      : t.elMenu.classList.add("apexcharts-menu-open");
                  }, 0);
                },
              },
              {
                key: "handleDownload",
                value: function (t) {
                  var e = this.w,
                    n = new K(this.ctx);
                  switch (t) {
                    case "svg":
                      n.exportToSVG(this.ctx);
                      break;
                    case "png":
                      n.exportToPng(this.ctx);
                      break;
                    case "csv":
                      n.exportToCSV({
                        series: e.config.series,
                        columnDelimiter:
                          e.config.chart.toolbar.export.csv.columnDelimiter,
                      });
                  }
                },
              },
              {
                key: "handleZoomReset",
                value: function (t) {
                  this.ctx.getSyncedCharts().forEach(function (t) {
                    var e = t.w;
                    if (
                      ((e.globals.lastXAxis.min =
                        e.globals.initialConfig.xaxis.min),
                      (e.globals.lastXAxis.max =
                        e.globals.initialConfig.xaxis.max),
                      t.updateHelpers.revertDefaultAxisMinMax(),
                      "function" ==
                        typeof e.config.chart.events.beforeResetZoom)
                    ) {
                      var n = e.config.chart.events.beforeResetZoom(t, e);
                      n && t.updateHelpers.revertDefaultAxisMinMax(n);
                    }
                    "function" == typeof e.config.chart.events.zoomed &&
                      t.ctx.toolbar.zoomCallback({
                        min: e.config.xaxis.min,
                        max: e.config.xaxis.max,
                      }),
                      (e.globals.zoomed = !1);
                    var i = t.ctx.series.emptyCollapsedSeries(
                      O.clone(e.globals.initialSeries)
                    );
                    t.updateHelpers._updateSeries(
                      i,
                      e.config.chart.animations.dynamicAnimation.enabled
                    );
                  });
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.elZoom = null),
                    (this.elZoomIn = null),
                    (this.elZoomOut = null),
                    (this.elPan = null),
                    (this.elSelection = null),
                    (this.elZoomReset = null),
                    (this.elMenuIcon = null);
                },
              },
            ]),
            t
          );
        })(),
        gt = (function (t) {
          h(n, t);
          var e = d(n);
          function n(t) {
            var i;
            return (
              a(this, n),
              ((i = e.call(this, t)).ctx = t),
              (i.w = t.w),
              (i.dragged = !1),
              (i.graphics = new x(i.ctx)),
              (i.eventList = [
                "mousedown",
                "mouseleave",
                "mousemove",
                "touchstart",
                "touchmove",
                "mouseup",
                "touchend",
                "wheel",
              ]),
              (i.clientX = 0),
              (i.clientY = 0),
              (i.startX = 0),
              (i.endX = 0),
              (i.dragX = 0),
              (i.startY = 0),
              (i.endY = 0),
              (i.dragY = 0),
              (i.moveDirection = "none"),
              (i.debounceTimer = null),
              (i.debounceDelay = 100),
              (i.wheelDelay = 400),
              i
            );
          }
          return (
            l(n, [
              {
                key: "init",
                value: function (t) {
                  var e = this,
                    n = t.xyRatios,
                    i = this.w,
                    r = this;
                  (this.xyRatios = n),
                    (this.zoomRect = this.graphics.drawRect(0, 0, 0, 0)),
                    (this.selectionRect = this.graphics.drawRect(0, 0, 0, 0)),
                    (this.gridRect =
                      i.globals.dom.baseEl.querySelector(".apexcharts-grid")),
                    this.zoomRect.node.classList.add("apexcharts-zoom-rect"),
                    this.selectionRect.node.classList.add(
                      "apexcharts-selection-rect"
                    ),
                    i.globals.dom.elGraphical.add(this.zoomRect),
                    i.globals.dom.elGraphical.add(this.selectionRect),
                    "x" === i.config.chart.selection.type
                      ? (this.slDraggableRect = this.selectionRect
                          .draggable({
                            minX: 0,
                            minY: 0,
                            maxX: i.globals.gridWidth,
                            maxY: i.globals.gridHeight,
                          })
                          .on(
                            "dragmove",
                            this.selectionDragging.bind(this, "dragging")
                          ))
                      : "y" === i.config.chart.selection.type
                      ? (this.slDraggableRect = this.selectionRect
                          .draggable({ minX: 0, maxX: i.globals.gridWidth })
                          .on(
                            "dragmove",
                            this.selectionDragging.bind(this, "dragging")
                          ))
                      : (this.slDraggableRect = this.selectionRect
                          .draggable()
                          .on(
                            "dragmove",
                            this.selectionDragging.bind(this, "dragging")
                          )),
                    this.preselectedSelection(),
                    (this.hoverArea = i.globals.dom.baseEl.querySelector(
                      "".concat(i.globals.chartClass, " .apexcharts-svg")
                    )),
                    this.hoverArea.classList.add("apexcharts-zoomable"),
                    this.eventList.forEach(function (t) {
                      e.hoverArea.addEventListener(
                        t,
                        r.svgMouseEvents.bind(r, n),
                        { capture: !1, passive: !0 }
                      );
                    }),
                    i.config.chart.zoom.allowMouseWheelZoom &&
                      this.hoverArea.addEventListener(
                        "wheel",
                        r.mouseWheelEvent.bind(r),
                        { capture: !1, passive: !1 }
                      );
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.slDraggableRect &&
                    (this.slDraggableRect.draggable(!1),
                    this.slDraggableRect.off(),
                    this.selectionRect.off()),
                    (this.selectionRect = null),
                    (this.zoomRect = null),
                    (this.gridRect = null);
                },
              },
              {
                key: "svgMouseEvents",
                value: function (t, e) {
                  var n = this.w,
                    i = this,
                    r = this.ctx.toolbar,
                    o = n.globals.zoomEnabled
                      ? n.config.chart.zoom.type
                      : n.config.chart.selection.type,
                    a = n.config.chart.toolbar.autoSelected;
                  if (
                    (e.shiftKey
                      ? ((this.shiftWasPressed = !0),
                        r.enableZoomPanFromToolbar(
                          "pan" === a ? "zoom" : "pan"
                        ))
                      : this.shiftWasPressed &&
                        (r.enableZoomPanFromToolbar(a),
                        (this.shiftWasPressed = !1)),
                    e.target)
                  ) {
                    var s,
                      l = e.target.classList;
                    if (
                      (e.target.parentNode &&
                        null !== e.target.parentNode &&
                        (s = e.target.parentNode.classList),
                      !(
                        l.contains("apexcharts-selection-rect") ||
                        l.contains("apexcharts-legend-marker") ||
                        l.contains("apexcharts-legend-text") ||
                        (s && s.contains("apexcharts-toolbar"))
                      ))
                    ) {
                      if (
                        ((i.clientX =
                          "touchmove" === e.type || "touchstart" === e.type
                            ? e.touches[0].clientX
                            : "touchend" === e.type
                            ? e.changedTouches[0].clientX
                            : e.clientX),
                        (i.clientY =
                          "touchmove" === e.type || "touchstart" === e.type
                            ? e.touches[0].clientY
                            : "touchend" === e.type
                            ? e.changedTouches[0].clientY
                            : e.clientY),
                        "mousedown" === e.type && 1 === e.which)
                      ) {
                        var c = i.gridRect.getBoundingClientRect();
                        (i.startX = i.clientX - c.left),
                          (i.startY = i.clientY - c.top),
                          (i.dragged = !1),
                          (i.w.globals.mousedown = !0);
                      }
                      if (
                        ((("mousemove" === e.type && 1 === e.which) ||
                          "touchmove" === e.type) &&
                          ((i.dragged = !0),
                          n.globals.panEnabled
                            ? ((n.globals.selection = null),
                              i.w.globals.mousedown &&
                                i.panDragging({
                                  context: i,
                                  zoomtype: o,
                                  xyRatios: t,
                                }))
                            : ((i.w.globals.mousedown &&
                                n.globals.zoomEnabled) ||
                                (i.w.globals.mousedown &&
                                  n.globals.selectionEnabled)) &&
                              (i.selection = i.selectionDrawing({
                                context: i,
                                zoomtype: o,
                              }))),
                        "mouseup" === e.type ||
                          "touchend" === e.type ||
                          "mouseleave" === e.type)
                      ) {
                        var d,
                          u =
                            null === (d = i.gridRect) || void 0 === d
                              ? void 0
                              : d.getBoundingClientRect();
                        u &&
                          i.w.globals.mousedown &&
                          ((i.endX = i.clientX - u.left),
                          (i.endY = i.clientY - u.top),
                          (i.dragX = Math.abs(i.endX - i.startX)),
                          (i.dragY = Math.abs(i.endY - i.startY)),
                          (n.globals.zoomEnabled ||
                            n.globals.selectionEnabled) &&
                            i.selectionDrawn({ context: i, zoomtype: o }),
                          n.globals.panEnabled &&
                            n.config.xaxis.convertedCatToNumeric &&
                            i.delayedPanScrolled()),
                          n.globals.zoomEnabled &&
                            i.hideSelectionRect(this.selectionRect),
                          (i.dragged = !1),
                          (i.w.globals.mousedown = !1);
                      }
                      this.makeSelectionRectDraggable();
                    }
                  }
                },
              },
              {
                key: "mouseWheelEvent",
                value: function (t) {
                  var e = this,
                    n = this.w;
                  t.preventDefault();
                  var i = Date.now();
                  i - n.globals.lastWheelExecution > this.wheelDelay &&
                    (this.executeMouseWheelZoom(t),
                    (n.globals.lastWheelExecution = i)),
                    this.debounceTimer && clearTimeout(this.debounceTimer),
                    (this.debounceTimer = setTimeout(function () {
                      i - n.globals.lastWheelExecution > e.wheelDelay &&
                        (e.executeMouseWheelZoom(t),
                        (n.globals.lastWheelExecution = i));
                    }, this.debounceDelay));
                },
              },
              {
                key: "executeMouseWheelZoom",
                value: function (t) {
                  var e,
                    n = this.w;
                  (this.minX = n.globals.isRangeBar
                    ? n.globals.minY
                    : n.globals.minX),
                    (this.maxX = n.globals.isRangeBar
                      ? n.globals.maxY
                      : n.globals.maxX);
                  var i =
                    null === (e = this.gridRect) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect();
                  if (i) {
                    var r,
                      o,
                      a,
                      s = (t.clientX - i.left) / i.width,
                      l = this.minX,
                      c = this.maxX,
                      d = c - l;
                    if (t.deltaY < 0) {
                      var u = l + s * d;
                      (o = u - (r = 0.5 * d) / 2), (a = u + r / 2);
                    } else (o = l - (r = 1.5 * d) / 2), (a = c + r / 2);
                    if (!n.globals.isRangeBar) {
                      (o = Math.max(o, n.globals.initialMinX)),
                        (a = Math.min(a, n.globals.initialMaxX));
                      var p =
                        0.01 * (n.globals.initialMaxX - n.globals.initialMinX);
                      if (a - o < p) {
                        var h = (o + a) / 2;
                        (o = h - p / 2), (a = h + p / 2);
                      }
                    }
                    var f = this._getNewMinXMaxX(o, a);
                    isNaN(f.minX) ||
                      isNaN(f.maxX) ||
                      this.zoomUpdateOptions(f.minX, f.maxX);
                  }
                },
              },
              {
                key: "makeSelectionRectDraggable",
                value: function () {
                  var t = this.w;
                  if (this.selectionRect) {
                    var e = this.selectionRect.node.getBoundingClientRect();
                    e.width > 0 &&
                      e.height > 0 &&
                      this.slDraggableRect
                        .selectize({
                          points: "l, r",
                          pointSize: 8,
                          pointType: "rect",
                        })
                        .resize({
                          constraint: {
                            minX: 0,
                            minY: 0,
                            maxX: t.globals.gridWidth,
                            maxY: t.globals.gridHeight,
                          },
                        })
                        .on(
                          "resizing",
                          this.selectionDragging.bind(this, "resizing")
                        );
                  }
                },
              },
              {
                key: "preselectedSelection",
                value: function () {
                  var t = this.w,
                    e = this.xyRatios;
                  if (!t.globals.zoomEnabled)
                    if (
                      void 0 !== t.globals.selection &&
                      null !== t.globals.selection
                    )
                      this.drawSelectionRect(t.globals.selection);
                    else if (
                      void 0 !== t.config.chart.selection.xaxis.min &&
                      void 0 !== t.config.chart.selection.xaxis.max
                    ) {
                      var n =
                          (t.config.chart.selection.xaxis.min -
                            t.globals.minX) /
                          e.xRatio,
                        i =
                          t.globals.gridWidth -
                          (t.globals.maxX -
                            t.config.chart.selection.xaxis.max) /
                            e.xRatio -
                          n;
                      t.globals.isRangeBar &&
                        ((n =
                          (t.config.chart.selection.xaxis.min -
                            t.globals.yAxisScale[0].niceMin) /
                          e.invertedYRatio),
                        (i =
                          (t.config.chart.selection.xaxis.max -
                            t.config.chart.selection.xaxis.min) /
                          e.invertedYRatio));
                      var r = {
                        x: n,
                        y: 0,
                        width: i,
                        height: t.globals.gridHeight,
                        translateX: 0,
                        translateY: 0,
                        selectionEnabled: !0,
                      };
                      this.drawSelectionRect(r),
                        this.makeSelectionRectDraggable(),
                        "function" == typeof t.config.chart.events.selection &&
                          t.config.chart.events.selection(this.ctx, {
                            xaxis: {
                              min: t.config.chart.selection.xaxis.min,
                              max: t.config.chart.selection.xaxis.max,
                            },
                            yaxis: {},
                          });
                    }
                },
              },
              {
                key: "drawSelectionRect",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.width,
                    r = t.height,
                    o = t.translateX,
                    a = void 0 === o ? 0 : o,
                    s = t.translateY,
                    l = void 0 === s ? 0 : s,
                    c = this.w,
                    d = this.zoomRect,
                    u = this.selectionRect;
                  if (this.dragged || null !== c.globals.selection) {
                    var p = { transform: "translate(" + a + ", " + l + ")" };
                    c.globals.zoomEnabled &&
                      this.dragged &&
                      (i < 0 && (i = 1),
                      d.attr({
                        x: e,
                        y: n,
                        width: i,
                        height: r,
                        fill: c.config.chart.zoom.zoomedArea.fill.color,
                        "fill-opacity":
                          c.config.chart.zoom.zoomedArea.fill.opacity,
                        stroke: c.config.chart.zoom.zoomedArea.stroke.color,
                        "stroke-width":
                          c.config.chart.zoom.zoomedArea.stroke.width,
                        "stroke-opacity":
                          c.config.chart.zoom.zoomedArea.stroke.opacity,
                      }),
                      x.setAttrs(d.node, p)),
                      c.globals.selectionEnabled &&
                        (u.attr({
                          x: e,
                          y: n,
                          width: i > 0 ? i : 0,
                          height: r > 0 ? r : 0,
                          fill: c.config.chart.selection.fill.color,
                          "fill-opacity": c.config.chart.selection.fill.opacity,
                          stroke: c.config.chart.selection.stroke.color,
                          "stroke-width": c.config.chart.selection.stroke.width,
                          "stroke-dasharray":
                            c.config.chart.selection.stroke.dashArray,
                          "stroke-opacity":
                            c.config.chart.selection.stroke.opacity,
                        }),
                        x.setAttrs(u.node, p));
                  }
                },
              },
              {
                key: "hideSelectionRect",
                value: function (t) {
                  t && t.attr({ x: 0, y: 0, width: 0, height: 0 });
                },
              },
              {
                key: "selectionDrawing",
                value: function (t) {
                  var e,
                    n = t.context,
                    i = t.zoomtype,
                    r = this.w,
                    o = n,
                    a = this.gridRect.getBoundingClientRect(),
                    s = o.startX - 1,
                    l = o.startY,
                    c = !1,
                    d = !1,
                    u = o.clientX - a.left - s,
                    p = o.clientY - a.top - l;
                  return (
                    Math.abs(u + s) > r.globals.gridWidth
                      ? (u = r.globals.gridWidth - s)
                      : o.clientX - a.left < 0 && (u = s),
                    s > o.clientX - a.left && ((c = !0), (u = Math.abs(u))),
                    l > o.clientY - a.top && ((d = !0), (p = Math.abs(p))),
                    (e =
                      "x" === i
                        ? {
                            x: c ? s - u : s,
                            y: 0,
                            width: u,
                            height: r.globals.gridHeight,
                          }
                        : "y" === i
                        ? {
                            x: 0,
                            y: d ? l - p : l,
                            width: r.globals.gridWidth,
                            height: p,
                          }
                        : {
                            x: c ? s - u : s,
                            y: d ? l - p : l,
                            width: u,
                            height: p,
                          }),
                    o.drawSelectionRect(e),
                    o.selectionDragging("resizing"),
                    e
                  );
                },
              },
              {
                key: "selectionDragging",
                value: function (t, e) {
                  var n = this,
                    i = this.w,
                    r = this.xyRatios,
                    o = this.selectionRect,
                    a = 0;
                  "resizing" === t && (a = 30);
                  var s = function (t) {
                      return parseFloat(o.node.getAttribute(t));
                    },
                    l = {
                      x: s("x"),
                      y: s("y"),
                      width: s("width"),
                      height: s("height"),
                    };
                  (i.globals.selection = l),
                    "function" == typeof i.config.chart.events.selection &&
                      i.globals.selectionEnabled &&
                      (clearTimeout(this.w.globals.selectionResizeTimer),
                      (this.w.globals.selectionResizeTimer = window.setTimeout(
                        function () {
                          var t,
                            e,
                            a,
                            s,
                            l = n.gridRect.getBoundingClientRect(),
                            c = o.node.getBoundingClientRect();
                          i.globals.isRangeBar
                            ? ((t =
                                i.globals.yAxisScale[0].niceMin +
                                (c.left - l.left) * r.invertedYRatio),
                              (e =
                                i.globals.yAxisScale[0].niceMin +
                                (c.right - l.left) * r.invertedYRatio),
                              (a = 0),
                              (s = 1))
                            : ((t =
                                i.globals.xAxisScale.niceMin +
                                (c.left - l.left) * r.xRatio),
                              (e =
                                i.globals.xAxisScale.niceMin +
                                (c.right - l.left) * r.xRatio),
                              (a =
                                i.globals.yAxisScale[0].niceMin +
                                (l.bottom - c.bottom) * r.yRatio[0]),
                              (s =
                                i.globals.yAxisScale[0].niceMax -
                                (c.top - l.top) * r.yRatio[0]));
                          var d = {
                            xaxis: { min: t, max: e },
                            yaxis: { min: a, max: s },
                          };
                          i.config.chart.events.selection(n.ctx, d),
                            i.config.chart.brush.enabled &&
                              void 0 !== i.config.chart.events.brushScrolled &&
                              i.config.chart.events.brushScrolled(n.ctx, d);
                        },
                        a
                      )));
                },
              },
              {
                key: "selectionDrawn",
                value: function (t) {
                  var e = t.context,
                    n = t.zoomtype,
                    i = this.w,
                    r = e,
                    o = this.xyRatios,
                    a = this.ctx.toolbar;
                  if (r.startX > r.endX) {
                    var s = r.startX;
                    (r.startX = r.endX), (r.endX = s);
                  }
                  if (r.startY > r.endY) {
                    var l = r.startY;
                    (r.startY = r.endY), (r.endY = l);
                  }
                  var c = void 0,
                    d = void 0;
                  i.globals.isRangeBar
                    ? ((c =
                        i.globals.yAxisScale[0].niceMin +
                        r.startX * o.invertedYRatio),
                      (d =
                        i.globals.yAxisScale[0].niceMin +
                        r.endX * o.invertedYRatio))
                    : ((c = i.globals.xAxisScale.niceMin + r.startX * o.xRatio),
                      (d = i.globals.xAxisScale.niceMin + r.endX * o.xRatio));
                  var u = [],
                    p = [];
                  if (
                    (i.config.yaxis.forEach(function (t, e) {
                      var n = i.globals.seriesYAxisMap[e][0];
                      u.push(
                        i.globals.yAxisScale[e].niceMax - o.yRatio[n] * r.startY
                      ),
                        p.push(
                          i.globals.yAxisScale[e].niceMax - o.yRatio[n] * r.endY
                        );
                    }),
                    r.dragged && (r.dragX > 10 || r.dragY > 10) && c !== d)
                  )
                    if (i.globals.zoomEnabled) {
                      var h = O.clone(i.globals.initialConfig.yaxis),
                        f = O.clone(i.globals.initialConfig.xaxis);
                      if (
                        ((i.globals.zoomed = !0),
                        i.config.xaxis.convertedCatToNumeric &&
                          ((c = Math.floor(c)),
                          (d = Math.floor(d)),
                          c < 1 && ((c = 1), (d = i.globals.dataPoints)),
                          d - c < 2 && (d = c + 1)),
                        ("xy" !== n && "x" !== n) || (f = { min: c, max: d }),
                        ("xy" !== n && "y" !== n) ||
                          h.forEach(function (t, e) {
                            (h[e].min = p[e]), (h[e].max = u[e]);
                          }),
                        a)
                      ) {
                        var b = a.getBeforeZoomRange(f, h);
                        b &&
                          ((f = b.xaxis ? b.xaxis : f),
                          (h = b.yaxis ? b.yaxis : h));
                      }
                      var m = { xaxis: f };
                      i.config.chart.group || (m.yaxis = h),
                        r.ctx.updateHelpers._updateOptions(
                          m,
                          !1,
                          r.w.config.chart.animations.dynamicAnimation.enabled
                        ),
                        "function" == typeof i.config.chart.events.zoomed &&
                          a.zoomCallback(f, h);
                    } else if (i.globals.selectionEnabled) {
                      var g,
                        v = null;
                      (g = { min: c, max: d }),
                        ("xy" !== n && "y" !== n) ||
                          (v = O.clone(i.config.yaxis)).forEach(function (
                            t,
                            e
                          ) {
                            (v[e].min = p[e]), (v[e].max = u[e]);
                          }),
                        (i.globals.selection = r.selection),
                        "function" == typeof i.config.chart.events.selection &&
                          i.config.chart.events.selection(r.ctx, {
                            xaxis: g,
                            yaxis: v,
                          });
                    }
                },
              },
              {
                key: "panDragging",
                value: function (t) {
                  var e = t.context,
                    n = this.w,
                    i = e;
                  if (void 0 !== n.globals.lastClientPosition.x) {
                    var r = n.globals.lastClientPosition.x - i.clientX,
                      o = n.globals.lastClientPosition.y - i.clientY;
                    Math.abs(r) > Math.abs(o) && r > 0
                      ? (this.moveDirection = "left")
                      : Math.abs(r) > Math.abs(o) && r < 0
                      ? (this.moveDirection = "right")
                      : Math.abs(o) > Math.abs(r) && o > 0
                      ? (this.moveDirection = "up")
                      : Math.abs(o) > Math.abs(r) &&
                        o < 0 &&
                        (this.moveDirection = "down");
                  }
                  n.globals.lastClientPosition = { x: i.clientX, y: i.clientY };
                  var a = n.globals.isRangeBar
                      ? n.globals.minY
                      : n.globals.minX,
                    s = n.globals.isRangeBar ? n.globals.maxY : n.globals.maxX;
                  n.config.xaxis.convertedCatToNumeric || i.panScrolled(a, s);
                },
              },
              {
                key: "delayedPanScrolled",
                value: function () {
                  var t = this.w,
                    e = t.globals.minX,
                    n = t.globals.maxX,
                    i = (t.globals.maxX - t.globals.minX) / 2;
                  "left" === this.moveDirection
                    ? ((e = t.globals.minX + i), (n = t.globals.maxX + i))
                    : "right" === this.moveDirection &&
                      ((e = t.globals.minX - i), (n = t.globals.maxX - i)),
                    (e = Math.floor(e)),
                    (n = Math.floor(n)),
                    this.updateScrolledChart(
                      { xaxis: { min: e, max: n } },
                      e,
                      n
                    );
                },
              },
              {
                key: "panScrolled",
                value: function (t, e) {
                  var n = this.w,
                    i = this.xyRatios,
                    r = O.clone(n.globals.initialConfig.yaxis),
                    o = i.xRatio,
                    a = n.globals.minX,
                    s = n.globals.maxX;
                  n.globals.isRangeBar &&
                    ((o = i.invertedYRatio),
                    (a = n.globals.minY),
                    (s = n.globals.maxY)),
                    "left" === this.moveDirection
                      ? ((t = a + (n.globals.gridWidth / 15) * o),
                        (e = s + (n.globals.gridWidth / 15) * o))
                      : "right" === this.moveDirection &&
                        ((t = a - (n.globals.gridWidth / 15) * o),
                        (e = s - (n.globals.gridWidth / 15) * o)),
                    n.globals.isRangeBar ||
                      ((t < n.globals.initialMinX ||
                        e > n.globals.initialMaxX) &&
                        ((t = a), (e = s)));
                  var l = { xaxis: { min: t, max: e } };
                  n.config.chart.group || (l.yaxis = r),
                    this.updateScrolledChart(l, t, e);
                },
              },
              {
                key: "updateScrolledChart",
                value: function (t, e, n) {
                  var i = this.w;
                  this.ctx.updateHelpers._updateOptions(t, !1, !1),
                    "function" == typeof i.config.chart.events.scrolled &&
                      i.config.chart.events.scrolled(this.ctx, {
                        xaxis: { min: e, max: n },
                      });
                },
              },
            ]),
            n
          );
        })(mt),
        vt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.ttCtx = e), (this.ctx = e.ctx);
          }
          return (
            l(t, [
              {
                key: "getNearestValues",
                value: function (t) {
                  var e = t.hoverArea,
                    n = t.elGrid,
                    i = t.clientX,
                    r = t.clientY,
                    o = this.w,
                    a = n.getBoundingClientRect(),
                    s = a.width,
                    l = a.height,
                    c = s / (o.globals.dataPoints - 1),
                    d = l / o.globals.dataPoints,
                    u = this.hasBars();
                  (!o.globals.comboCharts && !u) ||
                    o.config.xaxis.convertedCatToNumeric ||
                    (c = s / o.globals.dataPoints);
                  var p = i - a.left - o.globals.barPadForNumericAxis,
                    h = r - a.top;
                  p < 0 || h < 0 || p > s || h > l
                    ? (e.classList.remove("hovering-zoom"),
                      e.classList.remove("hovering-pan"))
                    : o.globals.zoomEnabled
                    ? (e.classList.remove("hovering-pan"),
                      e.classList.add("hovering-zoom"))
                    : o.globals.panEnabled &&
                      (e.classList.remove("hovering-zoom"),
                      e.classList.add("hovering-pan"));
                  var f = Math.round(p / c),
                    b = Math.floor(h / d);
                  u &&
                    !o.config.xaxis.convertedCatToNumeric &&
                    ((f = Math.ceil(p / c)), (f -= 1));
                  var m = null,
                    g = null,
                    v = o.globals.seriesXvalues.map(function (t) {
                      return t.filter(function (t) {
                        return O.isNumber(t);
                      });
                    }),
                    _ = o.globals.seriesYvalues.map(function (t) {
                      return t.filter(function (t) {
                        return O.isNumber(t);
                      });
                    });
                  if (o.globals.isXNumeric) {
                    var y = this.ttCtx.getElGrid().getBoundingClientRect(),
                      M = p * (y.width / s),
                      w = h * (y.height / l);
                    (m = (g = this.closestInMultiArray(M, w, v, _)).index),
                      (f = g.j),
                      null !== m &&
                        ((v = o.globals.seriesXvalues[m]),
                        (f = (g = this.closestInArray(M, v)).index));
                  }
                  return (
                    (o.globals.capturedSeriesIndex = null === m ? -1 : m),
                    (!f || f < 1) && (f = 0),
                    o.globals.isBarHorizontal
                      ? (o.globals.capturedDataPointIndex = b)
                      : (o.globals.capturedDataPointIndex = f),
                    {
                      capturedSeries: m,
                      j: o.globals.isBarHorizontal ? b : f,
                      hoverX: p,
                      hoverY: h,
                    }
                  );
                },
              },
              {
                key: "closestInMultiArray",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = 0,
                    a = null,
                    s = -1;
                  r.globals.series.length > 1
                    ? (o = this.getFirstActiveXArray(n))
                    : (a = 0);
                  var l = n[o][0],
                    c = Math.abs(t - l);
                  if (
                    (n.forEach(function (e) {
                      e.forEach(function (e, n) {
                        var i = Math.abs(t - e);
                        i <= c && ((c = i), (s = n));
                      });
                    }),
                    -1 !== s)
                  ) {
                    var d = i[o][s],
                      u = Math.abs(e - d);
                    (a = o),
                      i.forEach(function (t, n) {
                        var i = Math.abs(e - t[s]);
                        i <= u && ((u = i), (a = n));
                      });
                  }
                  return { index: a, j: s };
                },
              },
              {
                key: "getFirstActiveXArray",
                value: function (t) {
                  for (
                    var e = this.w,
                      n = 0,
                      i = t.map(function (t, e) {
                        return t.length > 0 ? e : -1;
                      }),
                      r = 0;
                    r < i.length;
                    r++
                  )
                    if (
                      -1 !== i[r] &&
                      -1 === e.globals.collapsedSeriesIndices.indexOf(r) &&
                      -1 ===
                        e.globals.ancillaryCollapsedSeriesIndices.indexOf(r)
                    ) {
                      n = i[r];
                      break;
                    }
                  return n;
                },
              },
              {
                key: "closestInArray",
                value: function (t, e) {
                  for (
                    var n = e[0], i = null, r = Math.abs(t - n), o = 0;
                    o < e.length;
                    o++
                  ) {
                    var a = Math.abs(t - e[o]);
                    a < r && ((r = a), (i = o));
                  }
                  return { index: i };
                },
              },
              {
                key: "isXoverlap",
                value: function (t) {
                  var e = [],
                    n = this.w.globals.seriesX.filter(function (t) {
                      return void 0 !== t[0];
                    });
                  if (n.length > 0)
                    for (var i = 0; i < n.length - 1; i++)
                      void 0 !== n[i][t] &&
                        void 0 !== n[i + 1][t] &&
                        n[i][t] !== n[i + 1][t] &&
                        e.push("unEqual");
                  return 0 === e.length;
                },
              },
              {
                key: "isInitialSeriesSameLen",
                value: function () {
                  for (
                    var t = !0, e = this.w.globals.initialSeries, n = 0;
                    n < e.length - 1;
                    n++
                  )
                    if (e[n].data.length !== e[n + 1].data.length) {
                      t = !1;
                      break;
                    }
                  return t;
                },
              },
              {
                key: "getBarsHeight",
                value: function (t) {
                  return v(t).reduce(function (t, e) {
                    return t + e.getBBox().height;
                  }, 0);
                },
              },
              {
                key: "getElMarkers",
                value: function (t) {
                  return "number" == typeof t
                    ? this.w.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series[data\\:realIndex='".concat(
                          t,
                          "'] .apexcharts-series-markers-wrap > *"
                        )
                      )
                    : this.w.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series-markers-wrap > *"
                      );
                },
              },
              {
                key: "getAllMarkers",
                value: function () {
                  var t = this.w.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-series-markers-wrap"
                  );
                  (t = v(t)).sort(function (t, e) {
                    var n = Number(t.getAttribute("data:realIndex")),
                      i = Number(e.getAttribute("data:realIndex"));
                    return i < n ? 1 : i > n ? -1 : 0;
                  });
                  var e = [];
                  return (
                    t.forEach(function (t) {
                      e.push(t.querySelector(".apexcharts-marker"));
                    }),
                    e
                  );
                },
              },
              {
                key: "hasMarkers",
                value: function (t) {
                  return this.getElMarkers(t).length > 0;
                },
              },
              {
                key: "getPathFromPoint",
                value: function (t, e) {
                  var n = Number(t.getAttribute("cx")),
                    i = Number(t.getAttribute("cy")),
                    r = t.getAttribute("shape");
                  return new x(this.ctx).getMarkerPath(n, i, r, e);
                },
              },
              {
                key: "getElBars",
                value: function () {
                  return this.w.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series"
                  );
                },
              },
              {
                key: "hasBars",
                value: function () {
                  return this.getElBars().length > 0;
                },
              },
              {
                key: "getHoverMarkerSize",
                value: function (t) {
                  var e = this.w,
                    n = e.config.markers.hover.size;
                  return (
                    void 0 === n &&
                      (n =
                        e.globals.markers.size[t] +
                        e.config.markers.hover.sizeOffset),
                    n
                  );
                },
              },
              {
                key: "toggleAllTooltipSeriesGroups",
                value: function (t) {
                  var e = this.w,
                    n = this.ttCtx;
                  0 === n.allTooltipSeriesGroups.length &&
                    (n.allTooltipSeriesGroups =
                      e.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-tooltip-series-group"
                      ));
                  for (
                    var i = n.allTooltipSeriesGroups, r = 0;
                    r < i.length;
                    r++
                  )
                    "enable" === t
                      ? (i[r].classList.add("apexcharts-active"),
                        (i[r].style.display = e.config.tooltip.items.display))
                      : (i[r].classList.remove("apexcharts-active"),
                        (i[r].style.display = "none"));
                },
              },
            ]),
            t
          );
        })(),
        _t = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.ctx = e.ctx),
              (this.ttCtx = e),
              (this.tooltipUtil = new vt(e));
          }
          return (
            l(t, [
              {
                key: "drawSeriesTexts",
                value: function (t) {
                  var e = t.shared,
                    n = void 0 === e || e,
                    i = t.ttItems,
                    r = t.i,
                    o = void 0 === r ? 0 : r,
                    a = t.j,
                    s = void 0 === a ? null : a,
                    l = t.y1,
                    c = t.y2,
                    d = t.e,
                    u = this.w;
                  void 0 !== u.config.tooltip.custom
                    ? this.handleCustomTooltip({
                        i: o,
                        j: s,
                        y1: l,
                        y2: c,
                        w: u,
                      })
                    : this.toggleActiveInactiveSeries(n, o);
                  var p = this.getValuesToPrint({ i: o, j: s });
                  this.printLabels({
                    i: o,
                    j: s,
                    values: p,
                    ttItems: i,
                    shared: n,
                    e: d,
                  });
                  var h = this.ttCtx.getElTooltip();
                  (this.ttCtx.tooltipRect.ttWidth =
                    h.getBoundingClientRect().width),
                    (this.ttCtx.tooltipRect.ttHeight =
                      h.getBoundingClientRect().height);
                },
              },
              {
                key: "printLabels",
                value: function (t) {
                  var e,
                    n = this,
                    i = t.i,
                    r = t.j,
                    o = t.values,
                    a = t.ttItems,
                    s = t.shared,
                    l = t.e,
                    c = this.w,
                    d = [],
                    u = function (t) {
                      return (
                        c.globals.seriesGoals[t] &&
                        c.globals.seriesGoals[t][r] &&
                        Array.isArray(c.globals.seriesGoals[t][r])
                      );
                    },
                    p = o.xVal,
                    h = o.zVal,
                    f = o.xAxisTTVal,
                    m = "",
                    g = c.globals.colors[i];
                  null !== r &&
                    c.config.plotOptions.bar.distributed &&
                    (g = c.globals.colors[r]);
                  for (
                    var v = function (t, o) {
                        var v = n.getFormatters(i);
                        (m = n.getSeriesName({
                          fn: v.yLbTitleFormatter,
                          index: i,
                          seriesIndex: i,
                          j: r,
                        })),
                          "treemap" === c.config.chart.type &&
                            (m = v.yLbTitleFormatter(
                              String(c.config.series[i].data[r].x),
                              {
                                series: c.globals.series,
                                seriesIndex: i,
                                dataPointIndex: r,
                                w: c,
                              }
                            ));
                        var _ = c.config.tooltip.inverseOrder ? o : t;
                        if (c.globals.axisCharts) {
                          var y = function (t) {
                            var e, n, i, o;
                            return c.globals.isRangeData
                              ? v.yLbFormatter(
                                  null === (e = c.globals.seriesRangeStart) ||
                                    void 0 === e ||
                                    null === (n = e[t]) ||
                                    void 0 === n
                                    ? void 0
                                    : n[r],
                                  {
                                    series: c.globals.seriesRangeStart,
                                    seriesIndex: t,
                                    dataPointIndex: r,
                                    w: c,
                                  }
                                ) +
                                  " - " +
                                  v.yLbFormatter(
                                    null === (i = c.globals.seriesRangeEnd) ||
                                      void 0 === i ||
                                      null === (o = i[t]) ||
                                      void 0 === o
                                      ? void 0
                                      : o[r],
                                    {
                                      series: c.globals.seriesRangeEnd,
                                      seriesIndex: t,
                                      dataPointIndex: r,
                                      w: c,
                                    }
                                  )
                              : v.yLbFormatter(c.globals.series[t][r], {
                                  series: c.globals.series,
                                  seriesIndex: t,
                                  dataPointIndex: r,
                                  w: c,
                                });
                          };
                          if (s)
                            (v = n.getFormatters(_)),
                              (m = n.getSeriesName({
                                fn: v.yLbTitleFormatter,
                                index: _,
                                seriesIndex: i,
                                j: r,
                              })),
                              (g = c.globals.colors[_]),
                              (e = y(_)),
                              u(_) &&
                                (d = c.globals.seriesGoals[_][r].map(function (
                                  t
                                ) {
                                  return {
                                    attrs: t,
                                    val: v.yLbFormatter(t.value, {
                                      seriesIndex: _,
                                      dataPointIndex: r,
                                      w: c,
                                    }),
                                  };
                                }));
                          else {
                            var M,
                              O =
                                null == l ||
                                null === (M = l.target) ||
                                void 0 === M
                                  ? void 0
                                  : M.getAttribute("fill");
                            O &&
                              (-1 !== O.indexOf("url")
                                ? -1 !== O.indexOf("Pattern") &&
                                  (g = c.globals.dom.baseEl
                                    .querySelector(O.substr(4).slice(0, -1))
                                    .childNodes[0].getAttribute("stroke"))
                                : (g = O)),
                              (e = y(i)),
                              u(i) &&
                                Array.isArray(c.globals.seriesGoals[i][r]) &&
                                (d = c.globals.seriesGoals[i][r].map(function (
                                  t
                                ) {
                                  return {
                                    attrs: t,
                                    val: v.yLbFormatter(t.value, {
                                      seriesIndex: i,
                                      dataPointIndex: r,
                                      w: c,
                                    }),
                                  };
                                }));
                          }
                        }
                        null === r &&
                          (e = v.yLbFormatter(
                            c.globals.series[i],
                            b(
                              b({}, c),
                              {},
                              { seriesIndex: i, dataPointIndex: i }
                            )
                          )),
                          n.DOMHandling({
                            i: i,
                            t: _,
                            j: r,
                            ttItems: a,
                            values: {
                              val: e,
                              goalVals: d,
                              xVal: p,
                              xAxisTTVal: f,
                              zVal: h,
                            },
                            seriesName: m,
                            shared: s,
                            pColor: g,
                          });
                      },
                      _ = 0,
                      y = c.globals.series.length - 1;
                    _ < c.globals.series.length;
                    _++, y--
                  )
                    v(_, y);
                },
              },
              {
                key: "getFormatters",
                value: function (t) {
                  var e,
                    n = this.w,
                    i = n.globals.yLabelFormatters[t];
                  return (
                    void 0 !== n.globals.ttVal
                      ? Array.isArray(n.globals.ttVal)
                        ? ((i =
                            n.globals.ttVal[t] && n.globals.ttVal[t].formatter),
                          (e =
                            n.globals.ttVal[t] &&
                            n.globals.ttVal[t].title &&
                            n.globals.ttVal[t].title.formatter))
                        : ((i = n.globals.ttVal.formatter),
                          "function" ==
                            typeof n.globals.ttVal.title.formatter &&
                            (e = n.globals.ttVal.title.formatter))
                      : (e = n.config.tooltip.y.title.formatter),
                    "function" != typeof i &&
                      (i = n.globals.yLabelFormatters[0]
                        ? n.globals.yLabelFormatters[0]
                        : function (t) {
                            return t;
                          }),
                    "function" != typeof e &&
                      (e = function (t) {
                        return t;
                      }),
                    { yLbFormatter: i, yLbTitleFormatter: e }
                  );
                },
              },
              {
                key: "getSeriesName",
                value: function (t) {
                  var e = t.fn,
                    n = t.index,
                    i = t.seriesIndex,
                    r = t.j,
                    o = this.w;
                  return e(String(o.globals.seriesNames[n]), {
                    series: o.globals.series,
                    seriesIndex: i,
                    dataPointIndex: r,
                    w: o,
                  });
                },
              },
              {
                key: "DOMHandling",
                value: function (t) {
                  t.i;
                  var e = t.t,
                    n = t.j,
                    i = t.ttItems,
                    r = t.values,
                    o = t.seriesName,
                    a = t.shared,
                    s = t.pColor,
                    l = this.w,
                    c = this.ttCtx,
                    d = r.val,
                    u = r.goalVals,
                    p = r.xVal,
                    h = r.xAxisTTVal,
                    f = r.zVal,
                    b = null;
                  (b = i[e].children),
                    l.config.tooltip.fillSeriesColor &&
                      ((i[e].style.backgroundColor = s),
                      (b[0].style.display = "none")),
                    c.showTooltipTitle &&
                      (null === c.tooltipTitle &&
                        (c.tooltipTitle = l.globals.dom.baseEl.querySelector(
                          ".apexcharts-tooltip-title"
                        )),
                      (c.tooltipTitle.innerHTML = p)),
                    c.isXAxisTooltipEnabled &&
                      (c.xaxisTooltipText.innerHTML = "" !== h ? h : p);
                  var m = i[e].querySelector(
                    ".apexcharts-tooltip-text-y-label"
                  );
                  m && (m.innerHTML = o || "");
                  var g = i[e].querySelector(
                    ".apexcharts-tooltip-text-y-value"
                  );
                  g && (g.innerHTML = void 0 !== d ? d : ""),
                    b[0] &&
                      b[0].classList.contains("apexcharts-tooltip-marker") &&
                      (l.config.tooltip.marker.fillColors &&
                        Array.isArray(l.config.tooltip.marker.fillColors) &&
                        (s = l.config.tooltip.marker.fillColors[e]),
                      (b[0].style.backgroundColor = s)),
                    l.config.tooltip.marker.show ||
                      (b[0].style.display = "none");
                  var v = i[e].querySelector(
                      ".apexcharts-tooltip-text-goals-label"
                    ),
                    _ = i[e].querySelector(
                      ".apexcharts-tooltip-text-goals-value"
                    );
                  if (u.length && l.globals.seriesGoals[e]) {
                    var y = function () {
                      var t = "<div >",
                        e = "<div>";
                      u.forEach(function (n, i) {
                        (t +=
                          ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '
                            .concat(
                              n.attrs.strokeColor,
                              '; height: 3px; border-radius: 0; top: 5px;"></span> '
                            )
                            .concat(n.attrs.name, "</div>")),
                          (e += "<div>".concat(n.val, "</div>"));
                      }),
                        (v.innerHTML = t + "</div>"),
                        (_.innerHTML = e + "</div>");
                    };
                    a
                      ? l.globals.seriesGoals[e][n] &&
                        Array.isArray(l.globals.seriesGoals[e][n])
                        ? y()
                        : ((v.innerHTML = ""), (_.innerHTML = ""))
                      : y();
                  } else (v.innerHTML = ""), (_.innerHTML = "");
                  if (
                    (null !== f &&
                      ((i[e].querySelector(
                        ".apexcharts-tooltip-text-z-label"
                      ).innerHTML = l.config.tooltip.z.title),
                      (i[e].querySelector(
                        ".apexcharts-tooltip-text-z-value"
                      ).innerHTML = void 0 !== f ? f : "")),
                    a && b[0])
                  ) {
                    if (l.config.tooltip.hideEmptySeries) {
                      var M = i[e].querySelector(".apexcharts-tooltip-marker"),
                        O = i[e].querySelector(".apexcharts-tooltip-text");
                      0 == parseFloat(d)
                        ? ((M.style.display = "none"),
                          (O.style.display = "none"))
                        : ((M.style.display = "block"),
                          (O.style.display = "block"));
                    }
                    null == d ||
                    l.globals.ancillaryCollapsedSeriesIndices.indexOf(e) > -1 ||
                    l.globals.collapsedSeriesIndices.indexOf(e) > -1 ||
                    (Array.isArray(c.tConfig.enabledOnSeries) &&
                      -1 === c.tConfig.enabledOnSeries.indexOf(e))
                      ? (b[0].parentNode.style.display = "none")
                      : (b[0].parentNode.style.display =
                          l.config.tooltip.items.display);
                  } else
                    Array.isArray(c.tConfig.enabledOnSeries) &&
                      -1 === c.tConfig.enabledOnSeries.indexOf(e) &&
                      (b[0].parentNode.style.display = "none");
                },
              },
              {
                key: "toggleActiveInactiveSeries",
                value: function (t, e) {
                  var n = this.w;
                  if (t)
                    this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                  else {
                    this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                    var i = n.globals.dom.baseEl.querySelector(
                      ".apexcharts-tooltip-series-group-".concat(e)
                    );
                    i &&
                      (i.classList.add("apexcharts-active"),
                      (i.style.display = n.config.tooltip.items.display));
                  }
                },
              },
              {
                key: "getValuesToPrint",
                value: function (t) {
                  var e = t.i,
                    n = t.j,
                    i = this.w,
                    r = this.ctx.series.filteredSeriesX(),
                    o = "",
                    a = "",
                    s = null,
                    l = null,
                    c = {
                      series: i.globals.series,
                      seriesIndex: e,
                      dataPointIndex: n,
                      w: i,
                    },
                    d = i.globals.ttZFormatter;
                  null === n
                    ? (l = i.globals.series[e])
                    : i.globals.isXNumeric && "treemap" !== i.config.chart.type
                    ? ((o = r[e][n]),
                      0 === r[e].length &&
                        (o = r[this.tooltipUtil.getFirstActiveXArray(r)][n]))
                    : (o = new G(this.ctx).isFormatXY()
                        ? void 0 !== i.config.series[e].data[n]
                          ? i.config.series[e].data[n].x
                          : ""
                        : void 0 !== i.globals.labels[n]
                        ? i.globals.labels[n]
                        : "");
                  var u = o;
                  return (
                    (o =
                      i.globals.isXNumeric && "datetime" === i.config.xaxis.type
                        ? new T(this.ctx).xLabelFormat(
                            i.globals.ttKeyFormatter,
                            u,
                            u,
                            {
                              i: void 0,
                              dateFormatter: new S(this.ctx).formatDate,
                              w: this.w,
                            }
                          )
                        : i.globals.isBarHorizontal
                        ? i.globals.yLabelFormatters[0](u, c)
                        : i.globals.xLabelFormatter(u, c)),
                    void 0 !== i.config.tooltip.x.formatter &&
                      (o = i.globals.ttKeyFormatter(u, c)),
                    i.globals.seriesZ.length > 0 &&
                      i.globals.seriesZ[e].length > 0 &&
                      (s = d(i.globals.seriesZ[e][n], i)),
                    (a =
                      "function" == typeof i.config.xaxis.tooltip.formatter
                        ? i.globals.xaxisTooltipFormatter(u, c)
                        : o),
                    {
                      val: Array.isArray(l) ? l.join(" ") : l,
                      xVal: Array.isArray(o) ? o.join(" ") : o,
                      xAxisTTVal: Array.isArray(a) ? a.join(" ") : a,
                      zVal: s,
                    }
                  );
                },
              },
              {
                key: "handleCustomTooltip",
                value: function (t) {
                  var e = t.i,
                    n = t.j,
                    i = t.y1,
                    r = t.y2,
                    o = t.w,
                    a = this.ttCtx.getElTooltip(),
                    s = o.config.tooltip.custom;
                  Array.isArray(s) && s[e] && (s = s[e]),
                    (a.innerHTML = s({
                      ctx: this.ctx,
                      series: o.globals.series,
                      seriesIndex: e,
                      dataPointIndex: n,
                      y1: i,
                      y2: r,
                      w: o,
                    }));
                },
              },
            ]),
            t
          );
        })(),
        yt = (function () {
          function t(e) {
            a(this, t), (this.ttCtx = e), (this.ctx = e.ctx), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "moveXCrosshairs",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n = this.ttCtx,
                    i = this.w,
                    r = n.getElXCrosshairs(),
                    o = t - n.xcrosshairsWidth / 2,
                    a = i.globals.labels.slice().length;
                  if (
                    (null !== e && (o = (i.globals.gridWidth / a) * e),
                    null === r ||
                      i.globals.isBarHorizontal ||
                      (r.setAttribute("x", o),
                      r.setAttribute("x1", o),
                      r.setAttribute("x2", o),
                      r.setAttribute("y2", i.globals.gridHeight),
                      r.classList.add("apexcharts-active")),
                    o < 0 && (o = 0),
                    o > i.globals.gridWidth && (o = i.globals.gridWidth),
                    n.isXAxisTooltipEnabled)
                  ) {
                    var s = o;
                    ("tickWidth" !== i.config.xaxis.crosshairs.width &&
                      "barWidth" !== i.config.xaxis.crosshairs.width) ||
                      (s = o + n.xcrosshairsWidth / 2),
                      this.moveXAxisTooltip(s);
                  }
                },
              },
              {
                key: "moveYCrosshairs",
                value: function (t) {
                  var e = this.ttCtx;
                  null !== e.ycrosshairs &&
                    x.setAttrs(e.ycrosshairs, { y1: t, y2: t }),
                    null !== e.ycrosshairsHidden &&
                      x.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t });
                },
              },
              {
                key: "moveXAxisTooltip",
                value: function (t) {
                  var e = this.w,
                    n = this.ttCtx;
                  if (null !== n.xaxisTooltip && 0 !== n.xcrosshairsWidth) {
                    n.xaxisTooltip.classList.add("apexcharts-active");
                    var i,
                      r =
                        n.xaxisOffY +
                        e.config.xaxis.tooltip.offsetY +
                        e.globals.translateY +
                        1 +
                        e.config.xaxis.offsetY;
                    (t -= n.xaxisTooltip.getBoundingClientRect().width / 2),
                      isNaN(t) ||
                        ((t += e.globals.translateX),
                        (i = new x(this.ctx).getTextRects(
                          n.xaxisTooltipText.innerHTML
                        )),
                        (n.xaxisTooltipText.style.minWidth = i.width + "px"),
                        (n.xaxisTooltip.style.left = t + "px"),
                        (n.xaxisTooltip.style.top = r + "px"));
                  }
                },
              },
              {
                key: "moveYAxisTooltip",
                value: function (t) {
                  var e = this.w,
                    n = this.ttCtx;
                  null === n.yaxisTTEls &&
                    (n.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-yaxistooltip"
                    ));
                  var i = parseInt(n.ycrosshairsHidden.getAttribute("y1"), 10),
                    r = e.globals.translateY + i,
                    o = n.yaxisTTEls[t].getBoundingClientRect().height,
                    a = e.globals.translateYAxisX[t] - 2;
                  e.config.yaxis[t].opposite && (a -= 26),
                    (r -= o / 2),
                    -1 === e.globals.ignoreYAxisIndexes.indexOf(t)
                      ? (n.yaxisTTEls[t].classList.add("apexcharts-active"),
                        (n.yaxisTTEls[t].style.top = r + "px"),
                        (n.yaxisTTEls[t].style.left =
                          a + e.config.yaxis[t].tooltip.offsetX + "px"))
                      : n.yaxisTTEls[t].classList.remove("apexcharts-active");
                },
              },
              {
                key: "moveTooltip",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i = this.w,
                    r = this.ttCtx,
                    o = r.getElTooltip(),
                    a = r.tooltipRect,
                    s = null !== n ? parseFloat(n) : 1,
                    l = parseFloat(t) + s + 5,
                    c = parseFloat(e) + s / 2;
                  if (
                    (l > i.globals.gridWidth / 2 &&
                      (l = l - a.ttWidth - s - 10),
                    l > i.globals.gridWidth - a.ttWidth - 10 &&
                      (l = i.globals.gridWidth - a.ttWidth),
                    l < -20 && (l = -20),
                    i.config.tooltip.followCursor)
                  ) {
                    var d = r.getElGrid().getBoundingClientRect();
                    (l = r.e.clientX - d.left) > i.globals.gridWidth / 2 &&
                      (l -= r.tooltipRect.ttWidth),
                      (c = r.e.clientY + i.globals.translateY - d.top) >
                        i.globals.gridHeight / 2 &&
                        (c -= r.tooltipRect.ttHeight);
                  } else
                    i.globals.isBarHorizontal ||
                      (a.ttHeight / 2 + c > i.globals.gridHeight &&
                        (c =
                          i.globals.gridHeight -
                          a.ttHeight +
                          i.globals.translateY));
                  isNaN(l) ||
                    ((l += i.globals.translateX),
                    (o.style.left = l + "px"),
                    (o.style.top = c + "px"));
                },
              },
              {
                key: "moveMarkers",
                value: function (t, e) {
                  var n = this.w,
                    i = this.ttCtx;
                  if (n.globals.markers.size[t] > 0)
                    for (
                      var r = n.globals.dom.baseEl.querySelectorAll(
                          " .apexcharts-series[data\\:realIndex='".concat(
                            t,
                            "'] .apexcharts-marker"
                          )
                        ),
                        o = 0;
                      o < r.length;
                      o++
                    )
                      parseInt(r[o].getAttribute("rel"), 10) === e &&
                        (i.marker.resetPointsSize(),
                        i.marker.enlargeCurrentPoint(e, r[o]));
                  else
                    i.marker.resetPointsSize(),
                      this.moveDynamicPointOnHover(e, t);
                },
              },
              {
                key: "moveDynamicPointOnHover",
                value: function (t, e) {
                  var n,
                    i,
                    r,
                    o,
                    a = this.w,
                    s = this.ttCtx,
                    l = new x(this.ctx),
                    c = a.globals.pointsArray,
                    d = s.tooltipUtil.getHoverMarkerSize(e),
                    u = a.config.series[e].type;
                  if (
                    !u ||
                    ("column" !== u && "candlestick" !== u && "boxPlot" !== u)
                  ) {
                    (r =
                      null === (n = c[e][t]) || void 0 === n ? void 0 : n[0]),
                      (o =
                        (null === (i = c[e][t]) || void 0 === i
                          ? void 0
                          : i[1]) || 0);
                    var p = a.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[data\\:realIndex='".concat(
                        e,
                        "'] .apexcharts-series-markers path"
                      )
                    );
                    if (p && o < a.globals.gridHeight && o > 0) {
                      var h = p.getAttribute("shape"),
                        f = l.getMarkerPath(r, o, h, 1.5 * d);
                      p.setAttribute("d", f);
                    }
                    this.moveXCrosshairs(r),
                      s.fixedTooltip || this.moveTooltip(r, o, d);
                  }
                },
              },
              {
                key: "moveDynamicPointsOnHover",
                value: function (t) {
                  var e,
                    n = this.ttCtx,
                    i = n.w,
                    r = 0,
                    o = 0,
                    a = i.globals.pointsArray,
                    s = new V(this.ctx),
                    l = new x(this.ctx);
                  e = s.getActiveConfigSeriesIndex("asc", [
                    "line",
                    "area",
                    "scatter",
                    "bubble",
                  ]);
                  var c = n.tooltipUtil.getHoverMarkerSize(e);
                  a[e] && ((r = a[e][t][0]), (o = a[e][t][1]));
                  var d = n.tooltipUtil.getAllMarkers();
                  if (null !== d)
                    for (var u = 0; u < i.globals.series.length; u++) {
                      var p = a[u];
                      if (
                        (i.globals.comboCharts &&
                          void 0 === p &&
                          d.splice(u, 0, null),
                        p && p.length)
                      ) {
                        var h = a[u][t][1],
                          f = void 0;
                        d[u].setAttribute("cx", r);
                        var b = d[u].getAttribute("shape");
                        if (
                          "rangeArea" === i.config.chart.type &&
                          !i.globals.comboCharts
                        ) {
                          var m = t + i.globals.series[u].length;
                          (f = a[u][m][1]), (h -= Math.abs(h - f) / 2);
                        }
                        if (
                          null !== h &&
                          !isNaN(h) &&
                          h < i.globals.gridHeight + c &&
                          h + c > 0
                        ) {
                          var g = l.getMarkerPath(r, h, b, c);
                          d[u].setAttribute("d", g);
                        } else d[u].setAttribute("d", "");
                      }
                    }
                  this.moveXCrosshairs(r),
                    n.fixedTooltip ||
                      this.moveTooltip(r, o || i.globals.gridHeight, c);
                },
              },
              {
                key: "moveStickyTooltipOverBars",
                value: function (t, e) {
                  var n = this.w,
                    i = this.ttCtx,
                    r = n.globals.columnSeries
                      ? n.globals.columnSeries.length
                      : n.globals.series.length,
                    o =
                      r >= 2 && r % 2 == 0
                        ? Math.floor(r / 2)
                        : Math.floor(r / 2) + 1;
                  n.globals.isBarHorizontal &&
                    (o =
                      new V(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
                  var a = n.globals.dom.baseEl.querySelector(
                    ".apexcharts-bar-series .apexcharts-series[rel='"
                      .concat(o, "'] path[j='")
                      .concat(
                        t,
                        "'], .apexcharts-candlestick-series .apexcharts-series[rel='"
                      )
                      .concat(o, "'] path[j='")
                      .concat(
                        t,
                        "'], .apexcharts-boxPlot-series .apexcharts-series[rel='"
                      )
                      .concat(o, "'] path[j='")
                      .concat(
                        t,
                        "'], .apexcharts-rangebar-series .apexcharts-series[rel='"
                      )
                      .concat(o, "'] path[j='")
                      .concat(t, "']")
                  );
                  a ||
                    "number" != typeof e ||
                    (a = n.globals.dom.baseEl.querySelector(
                      ".apexcharts-bar-series .apexcharts-series[data\\:realIndex='"
                        .concat(e, "'] path[j='")
                        .concat(
                          t,
                          "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='"
                        )
                        .concat(e, "'] path[j='")
                        .concat(
                          t,
                          "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='"
                        )
                        .concat(e, "'] path[j='")
                        .concat(
                          t,
                          "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='"
                        )
                        .concat(e, "'] path[j='")
                        .concat(t, "']")
                    ));
                  var s = a ? parseFloat(a.getAttribute("cx")) : 0,
                    l = a ? parseFloat(a.getAttribute("cy")) : 0,
                    c = a ? parseFloat(a.getAttribute("barWidth")) : 0,
                    d = i.getElGrid().getBoundingClientRect(),
                    u =
                      a &&
                      (a.classList.contains("apexcharts-candlestick-area") ||
                        a.classList.contains("apexcharts-boxPlot-area"));
                  n.globals.isXNumeric
                    ? (a && !u && (s -= r % 2 != 0 ? c / 2 : 0),
                      a && u && n.globals.comboCharts && (s -= c / 2))
                    : n.globals.isBarHorizontal ||
                      ((s =
                        i.xAxisTicksPositions[t - 1] +
                        i.dataPointsDividedWidth / 2),
                      isNaN(s) &&
                        (s =
                          i.xAxisTicksPositions[t] -
                          i.dataPointsDividedWidth / 2)),
                    n.globals.isBarHorizontal
                      ? (l -= i.tooltipRect.ttHeight)
                      : n.config.tooltip.followCursor
                      ? (l = i.e.clientY - d.top - i.tooltipRect.ttHeight / 2)
                      : l + i.tooltipRect.ttHeight + 15 >
                          n.globals.gridHeight && (l = n.globals.gridHeight),
                    n.globals.isBarHorizontal || this.moveXCrosshairs(s),
                    i.fixedTooltip ||
                      this.moveTooltip(s, l || n.globals.gridHeight);
                },
              },
            ]),
            t
          );
        })(),
        Mt = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.ttCtx = e),
              (this.ctx = e.ctx),
              (this.tooltipPosition = new yt(e));
          }
          return (
            l(t, [
              {
                key: "drawDynamicPoints",
                value: function () {
                  var t = this.w,
                    e = new x(this.ctx),
                    n = new Y(this.ctx),
                    i =
                      t.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series"
                      );
                  (i = v(i)),
                    t.config.chart.stacked &&
                      i.sort(function (t, e) {
                        return (
                          parseFloat(t.getAttribute("data:realIndex")) -
                          parseFloat(e.getAttribute("data:realIndex"))
                        );
                      });
                  for (var r = 0; r < i.length; r++) {
                    var o = i[r].querySelector(
                      ".apexcharts-series-markers-wrap"
                    );
                    if (null !== o) {
                      var a = void 0,
                        s = "apexcharts-marker w".concat(
                          (Math.random() + 1).toString(36).substring(4)
                        );
                      ("line" !== t.config.chart.type &&
                        "area" !== t.config.chart.type) ||
                        t.globals.comboCharts ||
                        t.config.tooltip.intersect ||
                        (s += " no-pointer-events");
                      var l = n.getMarkerConfig({
                        cssClass: s,
                        seriesIndex: Number(o.getAttribute("data:realIndex")),
                      });
                      (a = e.drawMarker(0, 0, l)).node.setAttribute(
                        "default-marker-size",
                        0
                      );
                      var c = document.createElementNS(t.globals.SVGNS, "g");
                      c.classList.add("apexcharts-series-markers"),
                        c.appendChild(a.node),
                        o.appendChild(c);
                    }
                  }
                },
              },
              {
                key: "enlargeCurrentPoint",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    r = this.w;
                  "bubble" !== r.config.chart.type && this.newPointSize(t, e);
                  var o = e.getAttribute("cx"),
                    a = e.getAttribute("cy");
                  if (
                    (null !== n && null !== i && ((o = n), (a = i)),
                    this.tooltipPosition.moveXCrosshairs(o),
                    !this.fixedTooltip)
                  ) {
                    if ("radar" === r.config.chart.type) {
                      var s = this.ttCtx.getElGrid().getBoundingClientRect();
                      o = this.ttCtx.e.clientX - s.left;
                    }
                    this.tooltipPosition.moveTooltip(
                      o,
                      a,
                      r.config.markers.hover.size
                    );
                  }
                },
              },
              {
                key: "enlargePoints",
                value: function (t) {
                  for (
                    var e = this.w,
                      n = this,
                      i = this.ttCtx,
                      r = t,
                      o = e.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"
                      ),
                      a = e.config.markers.hover.size,
                      s = 0;
                    s < o.length;
                    s++
                  ) {
                    var l = o[s].getAttribute("rel"),
                      c = o[s].getAttribute("index");
                    if (
                      (void 0 === a &&
                        (a =
                          e.globals.markers.size[c] +
                          e.config.markers.hover.sizeOffset),
                      r === parseInt(l, 10))
                    ) {
                      n.newPointSize(r, o[s]);
                      var d = o[s].getAttribute("cx"),
                        u = o[s].getAttribute("cy");
                      n.tooltipPosition.moveXCrosshairs(d),
                        i.fixedTooltip ||
                          n.tooltipPosition.moveTooltip(d, u, a);
                    } else n.oldPointSize(o[s]);
                  }
                },
              },
              {
                key: "newPointSize",
                value: function (t, e) {
                  var n = this.w,
                    i = n.config.markers.hover.size,
                    r =
                      0 === t
                        ? e.parentNode.firstChild
                        : e.parentNode.lastChild;
                  if ("0" !== r.getAttribute("default-marker-size")) {
                    var o = parseInt(r.getAttribute("index"), 10);
                    void 0 === i &&
                      (i =
                        n.globals.markers.size[o] +
                        n.config.markers.hover.sizeOffset),
                      i < 0 && (i = 0);
                    var a = this.ttCtx.tooltipUtil.getPathFromPoint(e, i);
                    e.setAttribute("d", a);
                  }
                },
              },
              {
                key: "oldPointSize",
                value: function (t) {
                  var e = parseFloat(t.getAttribute("default-marker-size")),
                    n = this.ttCtx.tooltipUtil.getPathFromPoint(t, e);
                  t.setAttribute("d", n);
                },
              },
              {
                key: "resetPointsSize",
                value: function () {
                  for (
                    var t = this.w.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"
                      ),
                      e = 0;
                    e < t.length;
                    e++
                  ) {
                    var n = parseFloat(
                      t[e].getAttribute("default-marker-size")
                    );
                    if (O.isNumber(n) && n >= 0) {
                      var i = this.ttCtx.tooltipUtil.getPathFromPoint(t[e], n);
                      t[e].setAttribute("d", i);
                    } else t[e].setAttribute("d", "M0,0");
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ot = (function () {
          function t(e) {
            a(this, t), (this.w = e.w);
            var n = this.w;
            (this.ttCtx = e),
              (this.isVerticalGroupedRangeBar =
                !n.globals.isBarHorizontal &&
                "rangeBar" === n.config.chart.type &&
                n.config.plotOptions.bar.rangeBarGroupRows);
          }
          return (
            l(t, [
              {
                key: "getAttr",
                value: function (t, e) {
                  return parseFloat(t.target.getAttribute(e));
                },
              },
              {
                key: "handleHeatTreeTooltip",
                value: function (t) {
                  var e = t.e,
                    n = t.opt,
                    i = t.x,
                    r = t.y,
                    o = t.type,
                    a = this.ttCtx,
                    s = this.w;
                  if (
                    e.target.classList.contains(
                      "apexcharts-".concat(o, "-rect")
                    )
                  ) {
                    var l = this.getAttr(e, "i"),
                      c = this.getAttr(e, "j"),
                      d = this.getAttr(e, "cx"),
                      u = this.getAttr(e, "cy"),
                      p = this.getAttr(e, "width"),
                      h = this.getAttr(e, "height");
                    if (
                      (a.tooltipLabels.drawSeriesTexts({
                        ttItems: n.ttItems,
                        i: l,
                        j: c,
                        shared: !1,
                        e: e,
                      }),
                      (s.globals.capturedSeriesIndex = l),
                      (s.globals.capturedDataPointIndex = c),
                      (i = d + a.tooltipRect.ttWidth / 2 + p),
                      (r = u + a.tooltipRect.ttHeight / 2 - h / 2),
                      a.tooltipPosition.moveXCrosshairs(d + p / 2),
                      i > s.globals.gridWidth / 2 &&
                        (i = d - a.tooltipRect.ttWidth / 2 + p),
                      a.w.config.tooltip.followCursor)
                    ) {
                      var f = s.globals.dom.elWrap.getBoundingClientRect();
                      (i =
                        s.globals.clientX -
                        f.left -
                        (i > s.globals.gridWidth / 2
                          ? a.tooltipRect.ttWidth
                          : 0)),
                        (r =
                          s.globals.clientY -
                          f.top -
                          (r > s.globals.gridHeight / 2
                            ? a.tooltipRect.ttHeight
                            : 0));
                    }
                  }
                  return { x: i, y: r };
                },
              },
              {
                key: "handleMarkerTooltip",
                value: function (t) {
                  var e,
                    n,
                    i = t.e,
                    r = t.opt,
                    o = t.x,
                    a = t.y,
                    s = this.w,
                    l = this.ttCtx;
                  if (i.target.classList.contains("apexcharts-marker")) {
                    var c = parseInt(r.paths.getAttribute("cx"), 10),
                      d = parseInt(r.paths.getAttribute("cy"), 10),
                      u = parseFloat(r.paths.getAttribute("val"));
                    if (
                      ((n = parseInt(r.paths.getAttribute("rel"), 10)),
                      (e =
                        parseInt(
                          r.paths.parentNode.parentNode.parentNode.getAttribute(
                            "rel"
                          ),
                          10
                        ) - 1),
                      l.intersect)
                    ) {
                      var p = O.findAncestor(r.paths, "apexcharts-series");
                      p && (e = parseInt(p.getAttribute("data:realIndex"), 10));
                    }
                    if (
                      (l.tooltipLabels.drawSeriesTexts({
                        ttItems: r.ttItems,
                        i: e,
                        j: n,
                        shared: !l.showOnIntersect && s.config.tooltip.shared,
                        e: i,
                      }),
                      "mouseup" === i.type && l.markerClick(i, e, n),
                      (s.globals.capturedSeriesIndex = e),
                      (s.globals.capturedDataPointIndex = n),
                      (o = c),
                      (a =
                        d +
                        s.globals.translateY -
                        1.4 * l.tooltipRect.ttHeight),
                      l.w.config.tooltip.followCursor)
                    ) {
                      var h = l.getElGrid().getBoundingClientRect();
                      a = l.e.clientY + s.globals.translateY - h.top;
                    }
                    u < 0 && (a = d),
                      l.marker.enlargeCurrentPoint(n, r.paths, o, a);
                  }
                  return { x: o, y: a };
                },
              },
              {
                key: "handleBarTooltip",
                value: function (t) {
                  var e,
                    n,
                    i = t.e,
                    r = t.opt,
                    o = this.w,
                    a = this.ttCtx,
                    s = a.getElTooltip(),
                    l = 0,
                    c = 0,
                    d = 0,
                    u = this.getBarTooltipXY({ e: i, opt: r });
                  e = u.i;
                  var p = u.j;
                  (o.globals.capturedSeriesIndex = e),
                    (o.globals.capturedDataPointIndex = p),
                    (o.globals.isBarHorizontal && a.tooltipUtil.hasBars()) ||
                    !o.config.tooltip.shared
                      ? ((c = u.x),
                        (d = u.y),
                        (n = Array.isArray(o.config.stroke.width)
                          ? o.config.stroke.width[e]
                          : o.config.stroke.width),
                        (l = c))
                      : o.globals.comboCharts ||
                        o.config.tooltip.shared ||
                        (l /= 2),
                    isNaN(d) &&
                      (d = o.globals.svgHeight - a.tooltipRect.ttHeight);
                  var h = parseInt(
                    r.paths.parentNode.getAttribute("data:realIndex"),
                    10
                  );
                  if (
                    (o.globals.isMultipleYAxis
                      ? o.config.yaxis[h] && o.config.yaxis[h].reversed
                      : o.config.yaxis[0].reversed,
                    c + a.tooltipRect.ttWidth > o.globals.gridWidth
                      ? (c -= a.tooltipRect.ttWidth)
                      : c < 0 && (c = 0),
                    a.w.config.tooltip.followCursor)
                  ) {
                    var f = a.getElGrid().getBoundingClientRect();
                    d = a.e.clientY - f.top;
                  }
                  null === a.tooltip &&
                    (a.tooltip = o.globals.dom.baseEl.querySelector(
                      ".apexcharts-tooltip"
                    )),
                    o.config.tooltip.shared ||
                      (o.globals.comboBarCount > 0
                        ? a.tooltipPosition.moveXCrosshairs(l + n / 2)
                        : a.tooltipPosition.moveXCrosshairs(l)),
                    !a.fixedTooltip &&
                      (!o.config.tooltip.shared ||
                        (o.globals.isBarHorizontal &&
                          a.tooltipUtil.hasBars())) &&
                      ((d =
                        d + o.globals.translateY - a.tooltipRect.ttHeight / 2),
                      (s.style.left = c + o.globals.translateX + "px"),
                      (s.style.top = d + "px"));
                },
              },
              {
                key: "getBarTooltipXY",
                value: function (t) {
                  var e = this,
                    n = t.e,
                    i = t.opt,
                    r = this.w,
                    o = null,
                    a = this.ttCtx,
                    s = 0,
                    l = 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    p = n.target.classList;
                  if (
                    p.contains("apexcharts-bar-area") ||
                    p.contains("apexcharts-candlestick-area") ||
                    p.contains("apexcharts-boxPlot-area") ||
                    p.contains("apexcharts-rangebar-area")
                  ) {
                    var h = n.target,
                      f = h.getBoundingClientRect(),
                      b = i.elGrid.getBoundingClientRect(),
                      m = f.height;
                    u = f.height;
                    var g = f.width,
                      v = parseInt(h.getAttribute("cx"), 10),
                      _ = parseInt(h.getAttribute("cy"), 10);
                    d = parseFloat(h.getAttribute("barWidth"));
                    var y =
                      "touchmove" === n.type ? n.touches[0].clientX : n.clientX;
                    (o = parseInt(h.getAttribute("j"), 10)),
                      (s = parseInt(h.parentNode.getAttribute("rel"), 10) - 1);
                    var M = h.getAttribute("data-range-y1"),
                      O = h.getAttribute("data-range-y2");
                    r.globals.comboCharts &&
                      (s = parseInt(
                        h.parentNode.getAttribute("data:realIndex"),
                        10
                      ));
                    var w = function (t) {
                        return r.globals.isXNumeric
                          ? v - g / 2
                          : e.isVerticalGroupedRangeBar
                          ? v + g / 2
                          : v - a.dataPointsDividedWidth + g / 2;
                      },
                      A = function () {
                        return (
                          _ -
                          a.dataPointsDividedHeight +
                          m / 2 -
                          a.tooltipRect.ttHeight / 2
                        );
                      };
                    a.tooltipLabels.drawSeriesTexts({
                      ttItems: i.ttItems,
                      i: s,
                      j: o,
                      y1: M ? parseInt(M, 10) : null,
                      y2: O ? parseInt(O, 10) : null,
                      shared: !a.showOnIntersect && r.config.tooltip.shared,
                      e: n,
                    }),
                      r.config.tooltip.followCursor
                        ? r.globals.isBarHorizontal
                          ? ((l = y - b.left + 15), (c = A()))
                          : ((l = w()),
                            (c =
                              n.clientY -
                              b.top -
                              a.tooltipRect.ttHeight / 2 -
                              15))
                        : r.globals.isBarHorizontal
                        ? ((l = v) < a.xyRatios.baseLineInvertedY &&
                            (l = v - a.tooltipRect.ttWidth),
                          (c = A()))
                        : ((l = w()), (c = _));
                  }
                  return { x: l, y: c, barHeight: u, barWidth: d, i: s, j: o };
                },
              },
            ]),
            t
          );
        })(),
        wt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.ttCtx = e);
          }
          return (
            l(t, [
              {
                key: "drawXaxisTooltip",
                value: function () {
                  var t = this.w,
                    e = this.ttCtx,
                    n = "bottom" === t.config.xaxis.position;
                  e.xaxisOffY = n
                    ? t.globals.gridHeight + 1
                    : -t.globals.xAxisHeight -
                      t.config.xaxis.axisTicks.height +
                      3;
                  var i = n
                      ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom"
                      : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                    r = t.globals.dom.elWrap;
                  e.isXAxisTooltipEnabled &&
                    null ===
                      t.globals.dom.baseEl.querySelector(
                        ".apexcharts-xaxistooltip"
                      ) &&
                    ((e.xaxisTooltip = document.createElement("div")),
                    e.xaxisTooltip.setAttribute(
                      "class",
                      i + " apexcharts-theme-" + t.config.tooltip.theme
                    ),
                    r.appendChild(e.xaxisTooltip),
                    (e.xaxisTooltipText = document.createElement("div")),
                    e.xaxisTooltipText.classList.add(
                      "apexcharts-xaxistooltip-text"
                    ),
                    (e.xaxisTooltipText.style.fontFamily =
                      t.config.xaxis.tooltip.style.fontFamily ||
                      t.config.chart.fontFamily),
                    (e.xaxisTooltipText.style.fontSize =
                      t.config.xaxis.tooltip.style.fontSize),
                    e.xaxisTooltip.appendChild(e.xaxisTooltipText));
                },
              },
              {
                key: "drawYaxisTooltip",
                value: function () {
                  for (
                    var t = this.w, e = this.ttCtx, n = 0;
                    n < t.config.yaxis.length;
                    n++
                  ) {
                    var i =
                      t.config.yaxis[n].opposite ||
                      t.config.yaxis[n].crosshairs.opposite;
                    e.yaxisOffX = i ? t.globals.gridWidth + 1 : 1;
                    var r =
                        "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(
                          n,
                          i
                            ? " apexcharts-yaxistooltip-right"
                            : " apexcharts-yaxistooltip-left"
                        ),
                      o = t.globals.dom.elWrap;
                    null ===
                      t.globals.dom.baseEl.querySelector(
                        ".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(
                          n
                        )
                      ) &&
                      ((e.yaxisTooltip = document.createElement("div")),
                      e.yaxisTooltip.setAttribute(
                        "class",
                        r + " apexcharts-theme-" + t.config.tooltip.theme
                      ),
                      o.appendChild(e.yaxisTooltip),
                      0 === n && (e.yaxisTooltipText = []),
                      (e.yaxisTooltipText[n] = document.createElement("div")),
                      e.yaxisTooltipText[n].classList.add(
                        "apexcharts-yaxistooltip-text"
                      ),
                      e.yaxisTooltip.appendChild(e.yaxisTooltipText[n]));
                  }
                },
              },
              {
                key: "setXCrosshairWidth",
                value: function () {
                  var t = this.w,
                    e = this.ttCtx,
                    n = e.getElXCrosshairs();
                  if (
                    ((e.xcrosshairsWidth = parseInt(
                      t.config.xaxis.crosshairs.width,
                      10
                    )),
                    t.globals.comboCharts)
                  ) {
                    var i = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-bar-area"
                    );
                    if (
                      null !== i &&
                      "barWidth" === t.config.xaxis.crosshairs.width
                    ) {
                      var r = parseFloat(i.getAttribute("barWidth"));
                      e.xcrosshairsWidth = r;
                    } else if (
                      "tickWidth" === t.config.xaxis.crosshairs.width
                    ) {
                      var o = t.globals.labels.length;
                      e.xcrosshairsWidth = t.globals.gridWidth / o;
                    }
                  } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                    var a = t.globals.labels.length;
                    e.xcrosshairsWidth = t.globals.gridWidth / a;
                  } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                    var s = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-bar-area"
                    );
                    if (null !== s) {
                      var l = parseFloat(s.getAttribute("barWidth"));
                      e.xcrosshairsWidth = l;
                    } else e.xcrosshairsWidth = 1;
                  }
                  t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0),
                    null !== n &&
                      e.xcrosshairsWidth > 0 &&
                      n.setAttribute("width", e.xcrosshairsWidth);
                },
              },
              {
                key: "handleYCrosshair",
                value: function () {
                  var t = this.w,
                    e = this.ttCtx;
                  (e.ycrosshairs = t.globals.dom.baseEl.querySelector(
                    ".apexcharts-ycrosshairs"
                  )),
                    (e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-ycrosshairs-hidden"
                    ));
                },
              },
              {
                key: "drawYaxisTooltipText",
                value: function (t, e, n) {
                  var i = this.ttCtx,
                    r = this.w,
                    o = r.globals,
                    a = o.seriesYAxisMap[t];
                  if (i.yaxisTooltips[t] && a.length > 0) {
                    var s = o.yLabelFormatters[t],
                      l = i.getElGrid().getBoundingClientRect(),
                      c = a[0],
                      d = 0;
                    n.yRatio.length > 1 && (d = c);
                    var u = (e - l.top) * n.yRatio[d],
                      p = o.maxYArr[c] - o.minYArr[c],
                      h = o.minYArr[c] + (p - u);
                    r.config.yaxis[t].reversed && (h = o.maxYArr[c] - (p - u)),
                      i.tooltipPosition.moveYCrosshairs(e - l.top),
                      (i.yaxisTooltipText[t].innerHTML = s(h)),
                      i.tooltipPosition.moveYAxisTooltip(t);
                  }
                },
              },
            ]),
            t
          );
        })(),
        At = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
            var n = this.w;
            (this.tConfig = n.config.tooltip),
              (this.tooltipUtil = new vt(this)),
              (this.tooltipLabels = new _t(this)),
              (this.tooltipPosition = new yt(this)),
              (this.marker = new Mt(this)),
              (this.intersect = new Ot(this)),
              (this.axesTooltip = new wt(this)),
              (this.showOnIntersect = this.tConfig.intersect),
              (this.showTooltipTitle = this.tConfig.x.show),
              (this.fixedTooltip = this.tConfig.fixed.enabled),
              (this.xaxisTooltip = null),
              (this.yaxisTTEls = null),
              (this.isBarShared =
                !n.globals.isBarHorizontal && this.tConfig.shared),
              (this.lastHoverTime = Date.now());
          }
          return (
            l(t, [
              {
                key: "getElTooltip",
                value: function (t) {
                  return (
                    t || (t = this),
                    t.w.globals.dom.baseEl
                      ? t.w.globals.dom.baseEl.querySelector(
                          ".apexcharts-tooltip"
                        )
                      : null
                  );
                },
              },
              {
                key: "getElXCrosshairs",
                value: function () {
                  return this.w.globals.dom.baseEl.querySelector(
                    ".apexcharts-xcrosshairs"
                  );
                },
              },
              {
                key: "getElGrid",
                value: function () {
                  return this.w.globals.dom.baseEl.querySelector(
                    ".apexcharts-grid"
                  );
                },
              },
              {
                key: "drawTooltip",
                value: function (t) {
                  var e = this.w;
                  (this.xyRatios = t),
                    (this.isXAxisTooltipEnabled =
                      e.config.xaxis.tooltip.enabled && e.globals.axisCharts),
                    (this.yaxisTooltips = e.config.yaxis.map(function (t, n) {
                      return !!(
                        t.show &&
                        t.tooltip.enabled &&
                        e.globals.axisCharts
                      );
                    })),
                    (this.allTooltipSeriesGroups = []),
                    e.globals.axisCharts || (this.showTooltipTitle = !1);
                  var n = document.createElement("div");
                  if (
                    (n.classList.add("apexcharts-tooltip"),
                    e.config.tooltip.cssClass &&
                      n.classList.add(e.config.tooltip.cssClass),
                    n.classList.add(
                      "apexcharts-theme-".concat(this.tConfig.theme)
                    ),
                    e.globals.dom.elWrap.appendChild(n),
                    e.globals.axisCharts)
                  ) {
                    this.axesTooltip.drawXaxisTooltip(),
                      this.axesTooltip.drawYaxisTooltip(),
                      this.axesTooltip.setXCrosshairWidth(),
                      this.axesTooltip.handleYCrosshair();
                    var i = new Z(this.ctx);
                    this.xAxisTicksPositions = i.getXAxisTicksPositions();
                  }
                  if (
                    ((!e.globals.comboCharts &&
                      !this.tConfig.intersect &&
                      "rangeBar" !== e.config.chart.type) ||
                      this.tConfig.shared ||
                      (this.showOnIntersect = !0),
                    (0 !== e.config.markers.size &&
                      0 !== e.globals.markers.largestSize) ||
                      this.marker.drawDynamicPoints(this),
                    e.globals.collapsedSeries.length !==
                      e.globals.series.length)
                  ) {
                    (this.dataPointsDividedHeight =
                      e.globals.gridHeight / e.globals.dataPoints),
                      (this.dataPointsDividedWidth =
                        e.globals.gridWidth / e.globals.dataPoints),
                      this.showTooltipTitle &&
                        ((this.tooltipTitle = document.createElement("div")),
                        this.tooltipTitle.classList.add(
                          "apexcharts-tooltip-title"
                        ),
                        (this.tooltipTitle.style.fontFamily =
                          this.tConfig.style.fontFamily ||
                          e.config.chart.fontFamily),
                        (this.tooltipTitle.style.fontSize =
                          this.tConfig.style.fontSize),
                        n.appendChild(this.tooltipTitle));
                    var r = e.globals.series.length;
                    (e.globals.xyCharts || e.globals.comboCharts) &&
                      this.tConfig.shared &&
                      (r = this.showOnIntersect ? 1 : e.globals.series.length),
                      (this.legendLabels =
                        e.globals.dom.baseEl.querySelectorAll(
                          ".apexcharts-legend-text"
                        )),
                      (this.ttItems = this.createTTElements(r)),
                      this.addSVGEvents();
                  }
                },
              },
              {
                key: "createTTElements",
                value: function (t) {
                  for (
                    var e = this,
                      n = this.w,
                      i = [],
                      r = this.getElTooltip(),
                      o = function (o) {
                        var a = document.createElement("div");
                        a.classList.add(
                          "apexcharts-tooltip-series-group",
                          "apexcharts-tooltip-series-group-".concat(o)
                        ),
                          (a.style.order = n.config.tooltip.inverseOrder
                            ? t - o
                            : o + 1);
                        var s = document.createElement("span");
                        s.classList.add("apexcharts-tooltip-marker"),
                          (s.style.backgroundColor = n.globals.colors[o]),
                          a.appendChild(s);
                        var l = document.createElement("div");
                        l.classList.add("apexcharts-tooltip-text"),
                          (l.style.fontFamily =
                            e.tConfig.style.fontFamily ||
                            n.config.chart.fontFamily),
                          (l.style.fontSize = e.tConfig.style.fontSize),
                          ["y", "goals", "z"].forEach(function (t) {
                            var e = document.createElement("div");
                            e.classList.add(
                              "apexcharts-tooltip-".concat(t, "-group")
                            );
                            var n = document.createElement("span");
                            n.classList.add(
                              "apexcharts-tooltip-text-".concat(t, "-label")
                            ),
                              e.appendChild(n);
                            var i = document.createElement("span");
                            i.classList.add(
                              "apexcharts-tooltip-text-".concat(t, "-value")
                            ),
                              e.appendChild(i),
                              l.appendChild(e);
                          }),
                          a.appendChild(l),
                          r.appendChild(a),
                          i.push(a);
                      },
                      a = 0;
                    a < t;
                    a++
                  )
                    o(a);
                  return i;
                },
              },
              {
                key: "addSVGEvents",
                value: function () {
                  var t = this.w,
                    e = t.config.chart.type,
                    n = this.getElTooltip(),
                    i = !(
                      "bar" !== e &&
                      "candlestick" !== e &&
                      "boxPlot" !== e &&
                      "rangeBar" !== e
                    ),
                    r =
                      "area" === e ||
                      "line" === e ||
                      "scatter" === e ||
                      "bubble" === e ||
                      "radar" === e,
                    o = t.globals.dom.Paper.node,
                    a = this.getElGrid();
                  a && (this.seriesBound = a.getBoundingClientRect());
                  var s,
                    l = [],
                    c = [],
                    d = {
                      hoverArea: o,
                      elGrid: a,
                      tooltipEl: n,
                      tooltipY: l,
                      tooltipX: c,
                      ttItems: this.ttItems,
                    };
                  if (
                    t.globals.axisCharts &&
                    (r
                      ? (s = t.globals.dom.baseEl.querySelectorAll(
                          ".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"
                        ))
                      : i
                      ? (s = t.globals.dom.baseEl.querySelectorAll(
                          ".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"
                        ))
                      : ("heatmap" !== e && "treemap" !== e) ||
                        (s = t.globals.dom.baseEl.querySelectorAll(
                          ".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap"
                        )),
                    s && s.length)
                  )
                    for (var u = 0; u < s.length; u++)
                      l.push(s[u].getAttribute("cy")),
                        c.push(s[u].getAttribute("cx"));
                  if (
                    (t.globals.xyCharts && !this.showOnIntersect) ||
                    (t.globals.comboCharts && !this.showOnIntersect) ||
                    (i && this.tooltipUtil.hasBars() && this.tConfig.shared)
                  )
                    this.addPathsEventListeners([o], d);
                  else if (
                    (i && !t.globals.comboCharts) ||
                    (r && this.showOnIntersect)
                  )
                    this.addDatapointEventsListeners(d);
                  else if (
                    !t.globals.axisCharts ||
                    "heatmap" === e ||
                    "treemap" === e
                  ) {
                    var p =
                      t.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-series"
                      );
                    this.addPathsEventListeners(p, d);
                  }
                  if (this.showOnIntersect) {
                    var h = t.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker"
                    );
                    h.length > 0 && this.addPathsEventListeners(h, d),
                      this.tooltipUtil.hasBars() &&
                        !this.tConfig.shared &&
                        this.addDatapointEventsListeners(d);
                  }
                },
              },
              {
                key: "drawFixedTooltipRect",
                value: function () {
                  var t = this.w,
                    e = this.getElTooltip(),
                    n = e.getBoundingClientRect(),
                    i = n.width + 10,
                    r = n.height + 10,
                    o = this.tConfig.fixed.offsetX,
                    a = this.tConfig.fixed.offsetY,
                    s = this.tConfig.fixed.position.toLowerCase();
                  return (
                    s.indexOf("right") > -1 &&
                      (o = o + t.globals.svgWidth - i + 10),
                    s.indexOf("bottom") > -1 &&
                      (a = a + t.globals.svgHeight - r - 10),
                    (e.style.left = o + "px"),
                    (e.style.top = a + "px"),
                    { x: o, y: a, ttWidth: i, ttHeight: r }
                  );
                },
              },
              {
                key: "addDatapointEventsListeners",
                value: function (t) {
                  var e = this.w.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area"
                  );
                  this.addPathsEventListeners(e, t);
                },
              },
              {
                key: "addPathsEventListeners",
                value: function (t, e) {
                  for (
                    var n = this,
                      i = function (i) {
                        var r = {
                          paths: t[i],
                          tooltipEl: e.tooltipEl,
                          tooltipY: e.tooltipY,
                          tooltipX: e.tooltipX,
                          elGrid: e.elGrid,
                          hoverArea: e.hoverArea,
                          ttItems: e.ttItems,
                        };
                        [
                          "mousemove",
                          "mouseup",
                          "touchmove",
                          "mouseout",
                          "touchend",
                        ].map(function (e) {
                          return t[i].addEventListener(
                            e,
                            n.onSeriesHover.bind(n, r),
                            { capture: !1, passive: !0 }
                          );
                        });
                      },
                      r = 0;
                    r < t.length;
                    r++
                  )
                    i(r);
                },
              },
              {
                key: "onSeriesHover",
                value: function (t, e) {
                  var n = this,
                    i = Date.now() - this.lastHoverTime;
                  i >= 100
                    ? this.seriesHover(t, e)
                    : (clearTimeout(this.seriesHoverTimeout),
                      (this.seriesHoverTimeout = setTimeout(function () {
                        n.seriesHover(t, e);
                      }, 100 - i)));
                },
              },
              {
                key: "seriesHover",
                value: function (t, e) {
                  var n = this;
                  this.lastHoverTime = Date.now();
                  var i = [],
                    r = this.w;
                  r.config.chart.group && (i = this.ctx.getGroupedCharts()),
                    (r.globals.axisCharts &&
                      ((r.globals.minX === -1 / 0 &&
                        r.globals.maxX === 1 / 0) ||
                        0 === r.globals.dataPoints)) ||
                      (i.length
                        ? i.forEach(function (i) {
                            var r = n.getElTooltip(i),
                              o = {
                                paths: t.paths,
                                tooltipEl: r,
                                tooltipY: t.tooltipY,
                                tooltipX: t.tooltipX,
                                elGrid: t.elGrid,
                                hoverArea: t.hoverArea,
                                ttItems: i.w.globals.tooltip.ttItems,
                              };
                            i.w.globals.minX === n.w.globals.minX &&
                              i.w.globals.maxX === n.w.globals.maxX &&
                              i.w.globals.tooltip.seriesHoverByContext({
                                chartCtx: i,
                                ttCtx: i.w.globals.tooltip,
                                opt: o,
                                e: e,
                              });
                          })
                        : this.seriesHoverByContext({
                            chartCtx: this.ctx,
                            ttCtx: this.w.globals.tooltip,
                            opt: t,
                            e: e,
                          }));
                },
              },
              {
                key: "seriesHoverByContext",
                value: function (t) {
                  var e = t.chartCtx,
                    n = t.ttCtx,
                    i = t.opt,
                    r = t.e,
                    o = e.w,
                    a = this.getElTooltip(e);
                  a &&
                    ((n.tooltipRect = {
                      x: 0,
                      y: 0,
                      ttWidth: a.getBoundingClientRect().width,
                      ttHeight: a.getBoundingClientRect().height,
                    }),
                    (n.e = r),
                    !n.tooltipUtil.hasBars() ||
                      o.globals.comboCharts ||
                      n.isBarShared ||
                      (this.tConfig.onDatasetHover.highlightDataSeries &&
                        new V(e).toggleSeriesOnHover(r, r.target.parentNode)),
                    n.fixedTooltip && n.drawFixedTooltipRect(),
                    o.globals.axisCharts
                      ? n.axisChartsTooltips({
                          e: r,
                          opt: i,
                          tooltipRect: n.tooltipRect,
                        })
                      : n.nonAxisChartsTooltips({
                          e: r,
                          opt: i,
                          tooltipRect: n.tooltipRect,
                        }));
                },
              },
              {
                key: "axisChartsTooltips",
                value: function (t) {
                  var e,
                    n,
                    i = t.e,
                    r = t.opt,
                    o = this.w,
                    a = r.elGrid.getBoundingClientRect(),
                    s =
                      "touchmove" === i.type ? i.touches[0].clientX : i.clientX,
                    l =
                      "touchmove" === i.type ? i.touches[0].clientY : i.clientY;
                  if (
                    ((this.clientY = l),
                    (this.clientX = s),
                    (o.globals.capturedSeriesIndex = -1),
                    (o.globals.capturedDataPointIndex = -1),
                    l < a.top || l > a.top + a.height)
                  )
                    this.handleMouseOut(r);
                  else {
                    if (
                      Array.isArray(this.tConfig.enabledOnSeries) &&
                      !o.config.tooltip.shared
                    ) {
                      var c = parseInt(r.paths.getAttribute("index"), 10);
                      if (this.tConfig.enabledOnSeries.indexOf(c) < 0)
                        return void this.handleMouseOut(r);
                    }
                    var d = this.getElTooltip(),
                      u = this.getElXCrosshairs(),
                      p = [];
                    o.config.chart.group && (p = this.ctx.getSyncedCharts());
                    var h =
                      o.globals.xyCharts ||
                      ("bar" === o.config.chart.type &&
                        !o.globals.isBarHorizontal &&
                        this.tooltipUtil.hasBars() &&
                        this.tConfig.shared) ||
                      (o.globals.comboCharts && this.tooltipUtil.hasBars());
                    if (
                      "mousemove" === i.type ||
                      "touchmove" === i.type ||
                      "mouseup" === i.type
                    ) {
                      if (
                        o.globals.collapsedSeries.length +
                          o.globals.ancillaryCollapsedSeries.length ===
                        o.globals.series.length
                      )
                        return;
                      null !== u && u.classList.add("apexcharts-active");
                      var f = this.yaxisTooltips.filter(function (t) {
                        return !0 === t;
                      });
                      if (
                        (null !== this.ycrosshairs &&
                          f.length &&
                          this.ycrosshairs.classList.add("apexcharts-active"),
                        (h && !this.showOnIntersect) || p.length > 1)
                      )
                        this.handleStickyTooltip(i, s, l, r);
                      else if (
                        "heatmap" === o.config.chart.type ||
                        "treemap" === o.config.chart.type
                      ) {
                        var b = this.intersect.handleHeatTreeTooltip({
                          e: i,
                          opt: r,
                          x: e,
                          y: n,
                          type: o.config.chart.type,
                        });
                        (e = b.x),
                          (n = b.y),
                          (d.style.left = e + "px"),
                          (d.style.top = n + "px");
                      } else
                        this.tooltipUtil.hasBars() &&
                          this.intersect.handleBarTooltip({ e: i, opt: r }),
                          this.tooltipUtil.hasMarkers() &&
                            this.intersect.handleMarkerTooltip({
                              e: i,
                              opt: r,
                              x: e,
                              y: n,
                            });
                      if (this.yaxisTooltips.length)
                        for (var m = 0; m < o.config.yaxis.length; m++)
                          this.axesTooltip.drawYaxisTooltipText(
                            m,
                            l,
                            this.xyRatios
                          );
                      o.globals.dom.baseEl.classList.add(
                        "apexcharts-tooltip-active"
                      ),
                        r.tooltipEl.classList.add("apexcharts-active");
                    } else
                      ("mouseout" !== i.type && "touchend" !== i.type) ||
                        this.handleMouseOut(r);
                  }
                },
              },
              {
                key: "nonAxisChartsTooltips",
                value: function (t) {
                  var e = t.e,
                    n = t.opt,
                    i = t.tooltipRect,
                    r = this.w,
                    o = n.paths.getAttribute("rel"),
                    a = this.getElTooltip(),
                    s = r.globals.dom.elWrap.getBoundingClientRect();
                  if ("mousemove" === e.type || "touchmove" === e.type) {
                    r.globals.dom.baseEl.classList.add(
                      "apexcharts-tooltip-active"
                    ),
                      a.classList.add("apexcharts-active"),
                      this.tooltipLabels.drawSeriesTexts({
                        ttItems: n.ttItems,
                        i: parseInt(o, 10) - 1,
                        shared: !1,
                      });
                    var l = r.globals.clientX - s.left - i.ttWidth / 2,
                      c = r.globals.clientY - s.top - i.ttHeight - 10;
                    if (
                      ((a.style.left = l + "px"),
                      (a.style.top = c + "px"),
                      r.config.legend.tooltipHoverFormatter)
                    ) {
                      var d = o - 1,
                        u = (0, r.config.legend.tooltipHoverFormatter)(
                          this.legendLabels[d].getAttribute(
                            "data:default-text"
                          ),
                          { seriesIndex: d, dataPointIndex: d, w: r }
                        );
                      this.legendLabels[d].innerHTML = u;
                    }
                  } else
                    ("mouseout" !== e.type && "touchend" !== e.type) ||
                      (a.classList.remove("apexcharts-active"),
                      r.globals.dom.baseEl.classList.remove(
                        "apexcharts-tooltip-active"
                      ),
                      r.config.legend.tooltipHoverFormatter &&
                        this.legendLabels.forEach(function (t) {
                          var e = t.getAttribute("data:default-text");
                          t.innerHTML = decodeURIComponent(e);
                        }));
                },
              },
              {
                key: "handleStickyTooltip",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = this.tooltipUtil.getNearestValues({
                      context: this,
                      hoverArea: i.hoverArea,
                      elGrid: i.elGrid,
                      clientX: e,
                      clientY: n,
                    }),
                    a = o.j,
                    s = o.capturedSeries;
                  r.globals.collapsedSeriesIndices.includes(s) && (s = null);
                  var l = i.elGrid.getBoundingClientRect();
                  if (o.hoverX < 0 || o.hoverX > l.width)
                    this.handleMouseOut(i);
                  else if (null !== s)
                    this.handleStickyCapturedSeries(t, s, i, a);
                  else if (
                    this.tooltipUtil.isXoverlap(a) ||
                    r.globals.isBarHorizontal
                  ) {
                    var c = r.globals.series.findIndex(function (t, e) {
                      return !r.globals.collapsedSeriesIndices.includes(e);
                    });
                    this.create(t, this, c, a, i.ttItems);
                  }
                },
              },
              {
                key: "handleStickyCapturedSeries",
                value: function (t, e, n, i) {
                  var r = this.w;
                  if (this.tConfig.shared || null !== r.globals.series[e][i]) {
                    if (void 0 !== r.globals.series[e][i])
                      this.tConfig.shared &&
                      this.tooltipUtil.isXoverlap(i) &&
                      this.tooltipUtil.isInitialSeriesSameLen()
                        ? this.create(t, this, e, i, n.ttItems)
                        : this.create(t, this, e, i, n.ttItems, !1);
                    else if (this.tooltipUtil.isXoverlap(i)) {
                      var o = r.globals.series.findIndex(function (t, e) {
                        return !r.globals.collapsedSeriesIndices.includes(e);
                      });
                      this.create(t, this, o, i, n.ttItems);
                    }
                  } else this.handleMouseOut(n);
                },
              },
              {
                key: "deactivateHoverFilter",
                value: function () {
                  for (
                    var t = this.w,
                      e = new x(this.ctx),
                      n = t.globals.dom.Paper.select(".apexcharts-bar-area"),
                      i = 0;
                    i < n.length;
                    i++
                  )
                    e.pathMouseLeave(n[i]);
                },
              },
              {
                key: "handleMouseOut",
                value: function (t) {
                  var e = this.w,
                    n = this.getElXCrosshairs();
                  if (
                    (e.globals.dom.baseEl.classList.remove(
                      "apexcharts-tooltip-active"
                    ),
                    t.tooltipEl.classList.remove("apexcharts-active"),
                    this.deactivateHoverFilter(),
                    "bubble" !== e.config.chart.type &&
                      this.marker.resetPointsSize(),
                    null !== n && n.classList.remove("apexcharts-active"),
                    null !== this.ycrosshairs &&
                      this.ycrosshairs.classList.remove("apexcharts-active"),
                    this.isXAxisTooltipEnabled &&
                      this.xaxisTooltip.classList.remove("apexcharts-active"),
                    this.yaxisTooltips.length)
                  ) {
                    null === this.yaxisTTEls &&
                      (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(
                        ".apexcharts-yaxistooltip"
                      ));
                    for (var i = 0; i < this.yaxisTTEls.length; i++)
                      this.yaxisTTEls[i].classList.remove("apexcharts-active");
                  }
                  e.config.legend.tooltipHoverFormatter &&
                    this.legendLabels.forEach(function (t) {
                      var e = t.getAttribute("data:default-text");
                      t.innerHTML = decodeURIComponent(e);
                    });
                },
              },
              {
                key: "markerClick",
                value: function (t, e, n) {
                  var i = this.w;
                  "function" == typeof i.config.chart.events.markerClick &&
                    i.config.chart.events.markerClick(t, this.ctx, {
                      seriesIndex: e,
                      dataPointIndex: n,
                      w: i,
                    }),
                    this.ctx.events.fireEvent("markerClick", [
                      t,
                      this.ctx,
                      { seriesIndex: e, dataPointIndex: n, w: i },
                    ]);
                },
              },
              {
                key: "create",
                value: function (t, e, n, i, r) {
                  var o,
                    a,
                    s,
                    l,
                    c,
                    d,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    _,
                    y,
                    M,
                    O =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : null,
                    w = this.w,
                    A = e;
                  "mouseup" === t.type && this.markerClick(t, n, i),
                    null === O && (O = this.tConfig.shared);
                  var z = this.tooltipUtil.hasMarkers(n),
                    C = this.tooltipUtil.getElBars();
                  if (w.config.legend.tooltipHoverFormatter) {
                    var k = w.config.legend.tooltipHoverFormatter,
                      S = Array.from(this.legendLabels);
                    S.forEach(function (t) {
                      var e = t.getAttribute("data:default-text");
                      t.innerHTML = decodeURIComponent(e);
                    });
                    for (var T = 0; T < S.length; T++) {
                      var D = S[T],
                        L = parseInt(D.getAttribute("i"), 10),
                        q = decodeURIComponent(
                          D.getAttribute("data:default-text")
                        ),
                        E = k(q, {
                          seriesIndex: O ? L : n,
                          dataPointIndex: i,
                          w: w,
                        });
                      if (O)
                        D.innerHTML =
                          w.globals.collapsedSeriesIndices.indexOf(L) < 0
                            ? E
                            : q;
                      else if (((D.innerHTML = L === n ? E : q), n === L))
                        break;
                    }
                  }
                  var j = b(
                    b(
                      { ttItems: r, i: n, j: i },
                      void 0 !==
                        (null === (o = w.globals.seriesRange) ||
                        void 0 === o ||
                        null === (a = o[n]) ||
                        void 0 === a ||
                        null === (s = a[i]) ||
                        void 0 === s ||
                        null === (l = s.y[0]) ||
                        void 0 === l
                          ? void 0
                          : l.y1) && {
                        y1:
                          null === (c = w.globals.seriesRange) ||
                          void 0 === c ||
                          null === (d = c[n]) ||
                          void 0 === d ||
                          null === (u = d[i]) ||
                          void 0 === u ||
                          null === (p = u.y[0]) ||
                          void 0 === p
                            ? void 0
                            : p.y1,
                      }
                    ),
                    void 0 !==
                      (null === (h = w.globals.seriesRange) ||
                      void 0 === h ||
                      null === (f = h[n]) ||
                      void 0 === f ||
                      null === (m = f[i]) ||
                      void 0 === m ||
                      null === (g = m.y[0]) ||
                      void 0 === g
                        ? void 0
                        : g.y2) && {
                      y2:
                        null === (v = w.globals.seriesRange) ||
                        void 0 === v ||
                        null === (_ = v[n]) ||
                        void 0 === _ ||
                        null === (y = _[i]) ||
                        void 0 === y ||
                        null === (M = y.y[0]) ||
                        void 0 === M
                          ? void 0
                          : M.y2,
                    }
                  );
                  if (O) {
                    if (
                      (A.tooltipLabels.drawSeriesTexts(
                        b(
                          b({}, j),
                          {},
                          {
                            shared:
                              !this.showOnIntersect && this.tConfig.shared,
                          }
                        )
                      ),
                      z)
                    )
                      w.globals.markers.largestSize > 0
                        ? A.marker.enlargePoints(i)
                        : A.tooltipPosition.moveDynamicPointsOnHover(i);
                    else if (
                      this.tooltipUtil.hasBars() &&
                      ((this.barSeriesHeight =
                        this.tooltipUtil.getBarsHeight(C)),
                      this.barSeriesHeight > 0)
                    ) {
                      var P = new x(this.ctx),
                        R = w.globals.dom.Paper.select(
                          ".apexcharts-bar-area[j='".concat(i, "']")
                        );
                      this.deactivateHoverFilter(),
                        this.tooltipPosition.moveStickyTooltipOverBars(i, n);
                      for (var I = 0; I < R.length; I++) P.pathMouseEnter(R[I]);
                    }
                  } else
                    A.tooltipLabels.drawSeriesTexts(b({ shared: !1 }, j)),
                      this.tooltipUtil.hasBars() &&
                        A.tooltipPosition.moveStickyTooltipOverBars(i, n),
                      z && A.tooltipPosition.moveMarkers(n, i);
                },
              },
            ]),
            t
          );
        })(),
        xt = (function () {
          function t(e) {
            a(this, t),
              (this.w = e.w),
              (this.barCtx = e),
              (this.totalFormatter =
                this.w.config.plotOptions.bar.dataLabels.total.formatter),
              this.totalFormatter ||
                (this.totalFormatter = this.w.config.dataLabels.formatter);
          }
          return (
            l(t, [
              {
                key: "handleBarDataLabels",
                value: function (t) {
                  var e,
                    n,
                    i = t.x,
                    r = t.y,
                    o = t.y1,
                    a = t.y2,
                    s = t.i,
                    l = t.j,
                    c = t.realIndex,
                    d = t.columnGroupIndex,
                    u = t.series,
                    p = t.barHeight,
                    h = t.barWidth,
                    f = t.barXPosition,
                    m = t.barYPosition,
                    g = t.visibleSeries,
                    v = t.renderedPath,
                    _ = this.w,
                    y = new x(this.barCtx.ctx),
                    M = Array.isArray(this.barCtx.strokeWidth)
                      ? this.barCtx.strokeWidth[c]
                      : this.barCtx.strokeWidth;
                  _.globals.isXNumeric && !_.globals.isBarHorizontal
                    ? ((e = i + parseFloat(h * (g + 1))),
                      (n = r + parseFloat(p * (g + 1)) - M))
                    : ((e = i + parseFloat(h * g)),
                      (n = r + parseFloat(p * g)));
                  var O,
                    w,
                    A = null,
                    z = i,
                    C = r,
                    k = _.config.dataLabels,
                    S = this.barCtx.barOptions.dataLabels,
                    T = this.barCtx.barOptions.dataLabels.total;
                  void 0 !== m && this.barCtx.isRangeBar && ((n = m), (C = m)),
                    void 0 !== f &&
                      this.barCtx.isVerticalGroupedRangeBar &&
                      ((e = f), (z = f));
                  var D = k.offsetX,
                    L = k.offsetY,
                    q = { width: 0, height: 0 };
                  if (_.config.dataLabels.enabled) {
                    var E = _.globals.series[s][l];
                    q = y.getTextRects(
                      _.config.dataLabels.formatter
                        ? _.config.dataLabels.formatter(
                            E,
                            b(
                              b({}, _),
                              {},
                              { seriesIndex: s, dataPointIndex: l, w: _ }
                            )
                          )
                        : _.globals.yLabelFormatters[0](E),
                      parseFloat(k.style.fontSize)
                    );
                  }
                  var j = {
                    x: i,
                    y: r,
                    i: s,
                    j: l,
                    realIndex: c,
                    columnGroupIndex: d,
                    renderedPath: v,
                    bcx: e,
                    bcy: n,
                    barHeight: p,
                    barWidth: h,
                    textRects: q,
                    strokeWidth: M,
                    dataLabelsX: z,
                    dataLabelsY: C,
                    dataLabelsConfig: k,
                    barDataLabelsConfig: S,
                    barTotalDataLabelsConfig: T,
                    offX: D,
                    offY: L,
                  };
                  return (
                    (w = this.barCtx.isHorizontal
                      ? this.calculateBarsDataLabelsPosition(j)
                      : this.calculateColumnsDataLabelsPosition(j)),
                    v.attr({
                      cy: w.bcy,
                      cx: w.bcx,
                      j: l,
                      val: _.globals.series[s][l],
                      barHeight: p,
                      barWidth: h,
                    }),
                    (O = this.drawCalculatedDataLabels({
                      x: w.dataLabelsX,
                      y: w.dataLabelsY,
                      val: this.barCtx.isRangeBar
                        ? [o, a]
                        : "100%" === _.config.chart.stackType
                        ? u[c][l]
                        : _.globals.series[c][l],
                      i: c,
                      j: l,
                      barWidth: h,
                      barHeight: p,
                      textRects: q,
                      dataLabelsConfig: k,
                    })),
                    _.config.chart.stacked &&
                      T.enabled &&
                      (A = this.drawTotalDataLabels({
                        x: w.totalDataLabelsX,
                        y: w.totalDataLabelsY,
                        barWidth: h,
                        barHeight: p,
                        realIndex: c,
                        textAnchor: w.totalDataLabelsAnchor,
                        val: this.getStackedTotalDataLabel({
                          realIndex: c,
                          j: l,
                        }),
                        dataLabelsConfig: k,
                        barTotalDataLabelsConfig: T,
                      })),
                    { dataLabels: O, totalDataLabels: A }
                  );
                },
              },
              {
                key: "getStackedTotalDataLabel",
                value: function (t) {
                  var e = t.realIndex,
                    n = t.j,
                    i = this.w,
                    r = this.barCtx.stackedSeriesTotals[n];
                  return (
                    this.totalFormatter &&
                      (r = this.totalFormatter(
                        r,
                        b(
                          b({}, i),
                          {},
                          { seriesIndex: e, dataPointIndex: n, w: i }
                        )
                      )),
                    r
                  );
                },
              },
              {
                key: "calculateColumnsDataLabelsPosition",
                value: function (t) {
                  var e = this.w,
                    n = t.i,
                    i = t.j,
                    r = t.realIndex;
                  t.columnGroupIndex;
                  var o,
                    a,
                    s = t.y,
                    l = t.bcx,
                    c = t.barWidth,
                    d = t.barHeight,
                    u = t.textRects,
                    p = t.dataLabelsX,
                    h = t.dataLabelsY,
                    f = t.dataLabelsConfig,
                    b = t.barDataLabelsConfig,
                    m = t.barTotalDataLabelsConfig,
                    g = t.strokeWidth,
                    v = t.offX,
                    _ = t.offY,
                    y = l;
                  d = Math.abs(d);
                  var M =
                      "vertical" ===
                      e.config.plotOptions.bar.dataLabels.orientation,
                    O = this.barCtx.barHelpers.getZeroValueEncounters({
                      i: n,
                      j: i,
                    }).zeroEncounters;
                  l -= g / 2;
                  var w = e.globals.gridWidth / e.globals.dataPoints;
                  this.barCtx.isVerticalGroupedRangeBar
                    ? (p += c / 2)
                    : ((p = e.globals.isXNumeric
                        ? l - c / 2 + v
                        : l - w + c / 2 + v),
                      O > 0 &&
                        e.config.plotOptions.bar.hideZeroBarsWhenGrouped &&
                        (p -= c * O)),
                    M && (p = p + u.height / 2 - g / 2 - 2);
                  var A = e.globals.series[n][i] < 0,
                    z = s;
                  switch (
                    (this.barCtx.isReversed && (z = s + (A ? d : -d)),
                    b.position)
                  ) {
                    case "center":
                      h = M
                        ? A
                          ? z - d / 2 + _
                          : z + d / 2 - _
                        : A
                        ? z - d / 2 + u.height / 2 + _
                        : z + d / 2 + u.height / 2 - _;
                      break;
                    case "bottom":
                      h = M
                        ? A
                          ? z - d + _
                          : z + d - _
                        : A
                        ? z - d + u.height + g + _
                        : z + d - u.height / 2 + g - _;
                      break;
                    case "top":
                      h = M
                        ? A
                          ? z + _
                          : z - _
                        : A
                        ? z - u.height / 2 - _
                        : z + u.height + _;
                  }
                  if (this.barCtx.lastActiveBarSerieIndex === r && m.enabled) {
                    var C = new x(this.barCtx.ctx).getTextRects(
                      this.getStackedTotalDataLabel({ realIndex: r, j: i }),
                      f.fontSize
                    );
                    o = A
                      ? z - C.height / 2 - _ - m.offsetY + 18
                      : z + C.height + _ + m.offsetY - 18;
                    var k = w;
                    a =
                      y +
                      (e.globals.isXNumeric
                        ? (-c * e.globals.barGroups.length) / 2
                        : (e.globals.barGroups.length * c) / 2 -
                          (e.globals.barGroups.length - 1) * c -
                          k) +
                      m.offsetX;
                  }
                  return (
                    e.config.chart.stacked ||
                      (h < 0
                        ? (h = 0 + g)
                        : h + u.height / 3 > e.globals.gridHeight &&
                          (h = e.globals.gridHeight - g)),
                    {
                      bcx: l,
                      bcy: s,
                      dataLabelsX: p,
                      dataLabelsY: h,
                      totalDataLabelsX: a,
                      totalDataLabelsY: o,
                      totalDataLabelsAnchor: "middle",
                    }
                  );
                },
              },
              {
                key: "calculateBarsDataLabelsPosition",
                value: function (t) {
                  var e = this.w,
                    n = t.x,
                    i = t.i,
                    r = t.j,
                    o = t.realIndex,
                    a = t.bcy,
                    s = t.barHeight,
                    l = t.barWidth,
                    c = t.textRects,
                    d = t.dataLabelsX,
                    u = t.strokeWidth,
                    p = t.dataLabelsConfig,
                    h = t.barDataLabelsConfig,
                    f = t.barTotalDataLabelsConfig,
                    b = t.offX,
                    m = t.offY,
                    g = e.globals.gridHeight / e.globals.dataPoints;
                  l = Math.abs(l);
                  var v,
                    _,
                    y =
                      a -
                      (this.barCtx.isRangeBar ? 0 : g) +
                      s / 2 +
                      c.height / 2 +
                      m -
                      3,
                    M = "start",
                    O = e.globals.series[i][r] < 0,
                    w = n;
                  switch (
                    (this.barCtx.isReversed &&
                      ((w = n + (O ? -l : l)), (M = O ? "start" : "end")),
                    h.position)
                  ) {
                    case "center":
                      d = O
                        ? w + l / 2 - b
                        : Math.max(c.width / 2, w - l / 2) + b;
                      break;
                    case "bottom":
                      d = O ? w + l - u - b : w - l + u + b;
                      break;
                    case "top":
                      d = O ? w - u - b : w - u + b;
                  }
                  if (this.barCtx.lastActiveBarSerieIndex === o && f.enabled) {
                    var A = new x(this.barCtx.ctx).getTextRects(
                      this.getStackedTotalDataLabel({ realIndex: o, j: r }),
                      p.fontSize
                    );
                    O
                      ? ((v = w - u - b - f.offsetX), (M = "end"))
                      : (v =
                          w +
                          b +
                          f.offsetX +
                          (this.barCtx.isReversed ? -(l + u) : u)),
                      (_ = y - c.height / 2 + A.height / 2 + f.offsetY + u);
                  }
                  return (
                    e.config.chart.stacked ||
                      ("start" === p.textAnchor
                        ? d - c.width < 0
                          ? (d = O ? c.width + u : u)
                          : d + c.width > e.globals.gridWidth &&
                            (d = O
                              ? e.globals.gridWidth - u
                              : e.globals.gridWidth - c.width - u)
                        : "middle" === p.textAnchor
                        ? d - c.width / 2 < 0
                          ? (d = c.width / 2 + u)
                          : d + c.width / 2 > e.globals.gridWidth &&
                            (d = e.globals.gridWidth - c.width / 2 - u)
                        : "end" === p.textAnchor &&
                          (d < 1
                            ? (d = c.width + u)
                            : d + 1 > e.globals.gridWidth &&
                              (d = e.globals.gridWidth - c.width - u))),
                    {
                      bcx: n,
                      bcy: a,
                      dataLabelsX: d,
                      dataLabelsY: y,
                      totalDataLabelsX: v,
                      totalDataLabelsY: _,
                      totalDataLabelsAnchor: M,
                    }
                  );
                },
              },
              {
                key: "drawCalculatedDataLabels",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.val,
                    r = t.i,
                    o = t.j,
                    a = t.textRects,
                    s = t.barHeight,
                    l = t.barWidth,
                    c = t.dataLabelsConfig,
                    d = this.w,
                    u = "rotate(0)";
                  "vertical" ===
                    d.config.plotOptions.bar.dataLabels.orientation &&
                    (u = "rotate(-90, ".concat(e, ", ").concat(n, ")"));
                  var p = new X(this.barCtx.ctx),
                    h = new x(this.barCtx.ctx),
                    f = c.formatter,
                    m = null,
                    g = d.globals.collapsedSeriesIndices.indexOf(r) > -1;
                  if (c.enabled && !g) {
                    m = h.group({
                      class: "apexcharts-data-labels",
                      transform: u,
                    });
                    var v = "";
                    void 0 !== i &&
                      (v = f(
                        i,
                        b(
                          b({}, d),
                          {},
                          { seriesIndex: r, dataPointIndex: o, w: d }
                        )
                      )),
                      !i &&
                        d.config.plotOptions.bar.hideZeroBarsWhenGrouped &&
                        (v = "");
                    var _ = d.globals.series[r][o] < 0,
                      y = d.config.plotOptions.bar.dataLabels.position;
                    "vertical" ===
                      d.config.plotOptions.bar.dataLabels.orientation &&
                      ("top" === y && (c.textAnchor = _ ? "end" : "start"),
                      "center" === y && (c.textAnchor = "middle"),
                      "bottom" === y && (c.textAnchor = _ ? "end" : "start")),
                      this.barCtx.isRangeBar &&
                        this.barCtx.barOptions.dataLabels
                          .hideOverflowingLabels &&
                        l <
                          h.getTextRects(v, parseFloat(c.style.fontSize))
                            .width &&
                        (v = ""),
                      d.config.chart.stacked &&
                        this.barCtx.barOptions.dataLabels
                          .hideOverflowingLabels &&
                        (this.barCtx.isHorizontal
                          ? a.width / 1.6 > Math.abs(l) && (v = "")
                          : a.height / 1.6 > Math.abs(s) && (v = ""));
                    var M = b({}, c);
                    this.barCtx.isHorizontal &&
                      i < 0 &&
                      ("start" === c.textAnchor
                        ? (M.textAnchor = "end")
                        : "end" === c.textAnchor && (M.textAnchor = "start")),
                      p.plotDataLabelsText({
                        x: e,
                        y: n,
                        text: v,
                        i: r,
                        j: o,
                        parent: m,
                        dataLabelsConfig: M,
                        alwaysDrawDataLabel: !0,
                        offsetCorrection: !0,
                      });
                  }
                  return m;
                },
              },
              {
                key: "drawTotalDataLabels",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.val,
                    r = t.realIndex,
                    o = t.textAnchor,
                    a = t.barTotalDataLabelsConfig;
                  this.w;
                  var s,
                    l = new x(this.barCtx.ctx);
                  return (
                    a.enabled &&
                      void 0 !== e &&
                      void 0 !== n &&
                      this.barCtx.lastActiveBarSerieIndex === r &&
                      (s = l.drawText({
                        x: e,
                        y: n,
                        foreColor: a.style.color,
                        text: i,
                        textAnchor: o,
                        fontFamily: a.style.fontFamily,
                        fontSize: a.style.fontSize,
                        fontWeight: a.style.fontWeight,
                      })),
                    s
                  );
                },
              },
            ]),
            t
          );
        })(),
        zt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.barCtx = e);
          }
          return (
            l(t, [
              {
                key: "initVariables",
                value: function (t) {
                  var e = this.w;
                  (this.barCtx.series = t),
                    (this.barCtx.totalItems = 0),
                    (this.barCtx.seriesLen = 0),
                    (this.barCtx.visibleI = -1),
                    (this.barCtx.visibleItems = 1);
                  for (var n = 0; n < t.length; n++)
                    if (
                      (t[n].length > 0 &&
                        ((this.barCtx.seriesLen = this.barCtx.seriesLen + 1),
                        (this.barCtx.totalItems += t[n].length)),
                      e.globals.isXNumeric)
                    )
                      for (var i = 0; i < t[n].length; i++)
                        e.globals.seriesX[n][i] > e.globals.minX &&
                          e.globals.seriesX[n][i] < e.globals.maxX &&
                          this.barCtx.visibleItems++;
                    else this.barCtx.visibleItems = e.globals.dataPoints;
                  (this.arrBorderRadius = this.createBorderRadiusArr(
                    e.globals.series
                  )),
                    0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1),
                    (this.barCtx.zeroSerieses = []),
                    e.globals.comboCharts ||
                      this.checkZeroSeries({ series: t });
                },
              },
              {
                key: "initialPositions",
                value: function () {
                  var t,
                    e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l = this.w,
                    c = l.globals.dataPoints;
                  this.barCtx.isRangeBar && (c = l.globals.labels.length);
                  var d = this.barCtx.seriesLen;
                  if (
                    (l.config.plotOptions.bar.rangeBarGroupRows && (d = 1),
                    this.barCtx.isHorizontal)
                  )
                    (r = (n = l.globals.gridHeight / c) / d),
                      l.globals.isXNumeric &&
                        (r =
                          (n = l.globals.gridHeight / this.barCtx.totalItems) /
                          this.barCtx.seriesLen),
                      (r =
                        (r * parseInt(this.barCtx.barOptions.barHeight, 10)) /
                        100),
                      -1 ===
                        String(this.barCtx.barOptions.barHeight).indexOf("%") &&
                        (r = parseInt(this.barCtx.barOptions.barHeight, 10)),
                      (s =
                        this.barCtx.baseLineInvertedY +
                        l.globals.padHorizontal +
                        (this.barCtx.isReversed ? l.globals.gridWidth : 0) -
                        (this.barCtx.isReversed
                          ? 2 * this.barCtx.baseLineInvertedY
                          : 0)),
                      this.barCtx.isFunnel && (s = l.globals.gridWidth / 2),
                      (e = (n - r * this.barCtx.seriesLen) / 2);
                  else {
                    if (
                      ((i = l.globals.gridWidth / this.barCtx.visibleItems),
                      l.config.xaxis.convertedCatToNumeric &&
                        (i = l.globals.gridWidth / l.globals.dataPoints),
                      (o =
                        ((i / d) *
                          parseInt(this.barCtx.barOptions.columnWidth, 10)) /
                        100),
                      l.globals.isXNumeric)
                    ) {
                      var u = this.barCtx.xRatio;
                      l.globals.minXDiff &&
                        0.5 !== l.globals.minXDiff &&
                        l.globals.minXDiff / u > 0 &&
                        (i = l.globals.minXDiff / u),
                        (o =
                          ((i / d) *
                            parseInt(this.barCtx.barOptions.columnWidth, 10)) /
                          100) < 1 && (o = 1);
                    }
                    -1 ===
                      String(this.barCtx.barOptions.columnWidth).indexOf("%") &&
                      (o = parseInt(this.barCtx.barOptions.columnWidth, 10)),
                      (a =
                        l.globals.gridHeight -
                        this.barCtx.baseLineY[this.barCtx.translationsIndex] -
                        (this.barCtx.isReversed ? l.globals.gridHeight : 0) +
                        (this.barCtx.isReversed
                          ? 2 *
                            this.barCtx.baseLineY[this.barCtx.translationsIndex]
                          : 0)),
                      (t =
                        l.globals.padHorizontal +
                        (i - o * this.barCtx.seriesLen) / 2);
                  }
                  return (
                    (l.globals.barHeight = r),
                    (l.globals.barWidth = o),
                    {
                      x: t,
                      y: e,
                      yDivision: n,
                      xDivision: i,
                      barHeight: r,
                      barWidth: o,
                      zeroH: a,
                      zeroW: s,
                    }
                  );
                },
              },
              {
                key: "initializeStackedPrevVars",
                value: function (t) {
                  t.w.globals.seriesGroups.forEach(function (e) {
                    t[e] || (t[e] = {}),
                      (t[e].prevY = []),
                      (t[e].prevX = []),
                      (t[e].prevYF = []),
                      (t[e].prevXF = []),
                      (t[e].prevYVal = []),
                      (t[e].prevXVal = []);
                  });
                },
              },
              {
                key: "initializeStackedXYVars",
                value: function (t) {
                  t.w.globals.seriesGroups.forEach(function (e) {
                    t[e] || (t[e] = {}),
                      (t[e].xArrj = []),
                      (t[e].xArrjF = []),
                      (t[e].xArrjVal = []),
                      (t[e].yArrj = []),
                      (t[e].yArrjF = []),
                      (t[e].yArrjVal = []);
                  });
                },
              },
              {
                key: "getPathFillColor",
                value: function (t, e, n, i) {
                  var r,
                    o,
                    a,
                    s,
                    l,
                    c = this.w,
                    d = this.barCtx.ctx.fill,
                    u = null,
                    p = this.barCtx.barOptions.distributed ? n : e;
                  return (
                    this.barCtx.barOptions.colors.ranges.length > 0 &&
                      this.barCtx.barOptions.colors.ranges.map(function (i) {
                        t[e][n] >= i.from && t[e][n] <= i.to && (u = i.color);
                      }),
                    null !== (r = c.config.series[e].data[n]) &&
                      void 0 !== r &&
                      r.fillColor &&
                      (u = c.config.series[e].data[n].fillColor),
                    d.fillPath({
                      seriesNumber: this.barCtx.barOptions.distributed ? p : i,
                      dataPointIndex: n,
                      color: u,
                      value: t[e][n],
                      fillConfig:
                        null === (o = c.config.series[e].data[n]) ||
                        void 0 === o
                          ? void 0
                          : o.fill,
                      fillType:
                        null !== (a = c.config.series[e].data[n]) &&
                        void 0 !== a &&
                        null !== (s = a.fill) &&
                        void 0 !== s &&
                        s.type
                          ? null === (l = c.config.series[e].data[n]) ||
                            void 0 === l
                            ? void 0
                            : l.fill.type
                          : Array.isArray(c.config.fill.type)
                          ? c.config.fill.type[i]
                          : c.config.fill.type,
                    })
                  );
                },
              },
              {
                key: "getStrokeWidth",
                value: function (t, e, n) {
                  var i = 0,
                    r = this.w;
                  return (
                    this.barCtx.series[t][e]
                      ? (this.barCtx.isNullValue = !1)
                      : (this.barCtx.isNullValue = !0),
                    r.config.stroke.show &&
                      (this.barCtx.isNullValue ||
                        (i = Array.isArray(this.barCtx.strokeWidth)
                          ? this.barCtx.strokeWidth[n]
                          : this.barCtx.strokeWidth)),
                    i
                  );
                },
              },
              {
                key: "createBorderRadiusArr",
                value: function (t) {
                  var e = this.w,
                    n =
                      !this.w.config.chart.stacked ||
                      "last" !==
                        e.config.plotOptions.bar.borderRadiusWhenStacked ||
                      e.config.plotOptions.bar.borderRadius <= 0,
                    i = t.length,
                    r = t[0].length,
                    o = Array.from({ length: i }, function () {
                      return Array(r).fill(n ? "top" : "none");
                    });
                  if (n) return o;
                  for (var a = 0; a < r; a++) {
                    for (var s = [], l = [], d = 0, u = 0; u < i; u++) {
                      var p = t[u][a];
                      p > 0 ? (s.push(u), d++) : p < 0 && (l.push(u), d++);
                    }
                    if (s.length > 0 && 0 === l.length)
                      if (1 === s.length) o[s[0]][a] = "both";
                      else {
                        var h,
                          f = s[0],
                          b = s[s.length - 1],
                          m = c(s);
                        try {
                          for (m.s(); !(h = m.n()).done; ) {
                            var g = h.value;
                            o[g][a] =
                              g === f ? "bottom" : g === b ? "top" : "none";
                          }
                        } catch (t) {
                          m.e(t);
                        } finally {
                          m.f();
                        }
                      }
                    else if (l.length > 0 && 0 === s.length)
                      if (1 === l.length) o[l[0]][a] = "both";
                      else {
                        var v,
                          _ = l[0],
                          y = l[l.length - 1],
                          M = c(l);
                        try {
                          for (M.s(); !(v = M.n()).done; ) {
                            var O = v.value;
                            o[O][a] =
                              O === _ ? "bottom" : O === y ? "top" : "none";
                          }
                        } catch (t) {
                          M.e(t);
                        } finally {
                          M.f();
                        }
                      }
                    else if (s.length > 0 && l.length > 0) {
                      var w,
                        A = s[s.length - 1],
                        x = c(s);
                      try {
                        for (x.s(); !(w = x.n()).done; ) {
                          var z = w.value;
                          o[z][a] = z === A ? "top" : "none";
                        }
                      } catch (t) {
                        x.e(t);
                      } finally {
                        x.f();
                      }
                      var C,
                        k = l[l.length - 1],
                        S = c(l);
                      try {
                        for (S.s(); !(C = S.n()).done; ) {
                          var T = C.value;
                          o[T][a] = T === k ? "bottom" : "none";
                        }
                      } catch (t) {
                        S.e(t);
                      } finally {
                        S.f();
                      }
                    } else 1 === d && (o[s[0] || l[0]][a] = "both");
                  }
                  return o;
                },
              },
              {
                key: "barBackground",
                value: function (t) {
                  var e = t.j,
                    n = t.i,
                    i = t.x1,
                    r = t.x2,
                    o = t.y1,
                    a = t.y2,
                    s = t.elSeries,
                    l = this.w,
                    c = new x(this.barCtx.ctx),
                    d = new V(this.barCtx.ctx).getActiveConfigSeriesIndex();
                  if (
                    this.barCtx.barOptions.colors.backgroundBarColors.length >
                      0 &&
                    d === n
                  ) {
                    e >=
                      this.barCtx.barOptions.colors.backgroundBarColors
                        .length &&
                      (e %=
                        this.barCtx.barOptions.colors.backgroundBarColors
                          .length);
                    var u =
                        this.barCtx.barOptions.colors.backgroundBarColors[e],
                      p = c.drawRect(
                        void 0 !== i ? i : 0,
                        void 0 !== o ? o : 0,
                        void 0 !== r ? r : l.globals.gridWidth,
                        void 0 !== a ? a : l.globals.gridHeight,
                        this.barCtx.barOptions.colors.backgroundBarRadius,
                        u,
                        this.barCtx.barOptions.colors.backgroundBarOpacity
                      );
                    s.add(p), p.node.classList.add("apexcharts-backgroundBar");
                  }
                },
              },
              {
                key: "getColumnPaths",
                value: function (t) {
                  var e,
                    n = t.barWidth,
                    i = t.barXPosition,
                    r = t.y1,
                    o = t.y2,
                    a = t.strokeWidth,
                    s = t.isReversed,
                    l = t.series,
                    c = t.seriesGroup,
                    d = t.realIndex,
                    u = t.i,
                    p = t.j,
                    h = t.w,
                    f = new x(this.barCtx.ctx);
                  (a = Array.isArray(a) ? a[d] : a) || (a = 0);
                  var b = n,
                    m = i;
                  null !== (e = h.config.series[d].data[p]) &&
                    void 0 !== e &&
                    e.columnWidthOffset &&
                    ((m = i - h.config.series[d].data[p].columnWidthOffset / 2),
                    (b = n + h.config.series[d].data[p].columnWidthOffset));
                  var g = a / 2,
                    v = m + g,
                    _ = m + b - g,
                    y = (l[u][p] >= 0 ? 1 : -1) * (s ? -1 : 1);
                  (r += 0.001 - g * y), (o += 0.001 + g * y);
                  var M = f.move(v, r),
                    O = f.move(v, r),
                    w = f.line(_, r);
                  if (
                    (h.globals.previousPaths.length > 0 &&
                      (O = this.barCtx.getPreviousPath(d, p, !1)),
                    (M =
                      M +
                      f.line(v, o) +
                      f.line(_, o) +
                      w +
                      ("around" ===
                        h.config.plotOptions.bar.borderRadiusApplication ||
                      "both" === this.arrBorderRadius[d][p]
                        ? " Z"
                        : " z")),
                    (O =
                      O +
                      f.line(v, r) +
                      w +
                      w +
                      w +
                      w +
                      w +
                      f.line(v, r) +
                      ("around" ===
                        h.config.plotOptions.bar.borderRadiusApplication ||
                      "both" === this.arrBorderRadius[d][p]
                        ? " Z"
                        : " z")),
                    "none" !== this.arrBorderRadius[d][p] &&
                      (M = f.roundPathCorners(
                        M,
                        h.config.plotOptions.bar.borderRadius
                      )),
                    h.config.chart.stacked)
                  ) {
                    var A = this.barCtx;
                    (A = this.barCtx[c]).yArrj.push(o - g * y),
                      A.yArrjF.push(Math.abs(r - o + a * y)),
                      A.yArrjVal.push(this.barCtx.series[u][p]);
                  }
                  return { pathTo: M, pathFrom: O };
                },
              },
              {
                key: "getBarpaths",
                value: function (t) {
                  var e,
                    n = t.barYPosition,
                    i = t.barHeight,
                    r = t.x1,
                    o = t.x2,
                    a = t.strokeWidth,
                    s = t.isReversed,
                    l = t.series,
                    c = t.seriesGroup,
                    d = t.realIndex,
                    u = t.i,
                    p = t.j,
                    h = t.w,
                    f = new x(this.barCtx.ctx);
                  (a = Array.isArray(a) ? a[d] : a) || (a = 0);
                  var b = n,
                    m = i;
                  null !== (e = h.config.series[d].data[p]) &&
                    void 0 !== e &&
                    e.barHeightOffset &&
                    ((b = n - h.config.series[d].data[p].barHeightOffset / 2),
                    (m = i + h.config.series[d].data[p].barHeightOffset));
                  var g = a / 2,
                    v = b + g,
                    _ = b + m - g,
                    y = (l[u][p] >= 0 ? 1 : -1) * (s ? -1 : 1);
                  (r += 0.001 + g * y), (o += 0.001 - g * y);
                  var M = f.move(r, v),
                    O = f.move(r, v);
                  h.globals.previousPaths.length > 0 &&
                    (O = this.barCtx.getPreviousPath(d, p, !1));
                  var w = f.line(r, _);
                  if (
                    ((M =
                      M +
                      f.line(o, v) +
                      f.line(o, _) +
                      w +
                      ("around" ===
                        h.config.plotOptions.bar.borderRadiusApplication ||
                      "both" === this.arrBorderRadius[d][p]
                        ? " Z"
                        : " z")),
                    (O =
                      O +
                      f.line(r, v) +
                      w +
                      w +
                      w +
                      w +
                      w +
                      f.line(r, v) +
                      ("around" ===
                        h.config.plotOptions.bar.borderRadiusApplication ||
                      "both" === this.arrBorderRadius[d][p]
                        ? " Z"
                        : " z")),
                    "none" !== this.arrBorderRadius[d][p] &&
                      (M = f.roundPathCorners(
                        M,
                        h.config.plotOptions.bar.borderRadius
                      )),
                    h.config.chart.stacked)
                  ) {
                    var A = this.barCtx;
                    (A = this.barCtx[c]).xArrj.push(o + g * y),
                      A.xArrjF.push(Math.abs(r - o - a * y)),
                      A.xArrjVal.push(this.barCtx.series[u][p]);
                  }
                  return { pathTo: M, pathFrom: O };
                },
              },
              {
                key: "checkZeroSeries",
                value: function (t) {
                  for (var e = t.series, n = this.w, i = 0; i < e.length; i++) {
                    for (
                      var r = 0, o = 0;
                      o < e[n.globals.maxValsInArrayIndex].length;
                      o++
                    )
                      r += e[i][o];
                    0 === r && this.barCtx.zeroSerieses.push(i);
                  }
                },
              },
              {
                key: "getXForValue",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    !arguments[2]
                      ? null
                      : e;
                  return (
                    null != t &&
                      (n =
                        e +
                        t / this.barCtx.invertedYRatio -
                        2 *
                          (this.barCtx.isReversed
                            ? t / this.barCtx.invertedYRatio
                            : 0)),
                    n
                  );
                },
              },
              {
                key: "getYForValue",
                value: function (t, e, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                      ? null
                      : e;
                  return (
                    null != t &&
                      (i =
                        e -
                        t / this.barCtx.yRatio[n] +
                        2 *
                          (this.barCtx.isReversed
                            ? t / this.barCtx.yRatio[n]
                            : 0)),
                    i
                  );
                },
              },
              {
                key: "getGoalValues",
                value: function (t, e, n, i, r, o) {
                  var a = this,
                    s = this.w,
                    l = [],
                    c = function (i, r) {
                      var s;
                      l.push(
                        (u(
                          (s = {}),
                          t,
                          "x" === t
                            ? a.getXForValue(i, e, !1)
                            : a.getYForValue(i, n, o, !1)
                        ),
                        u(s, "attrs", r),
                        s)
                      );
                    };
                  if (
                    (s.globals.seriesGoals[i] &&
                      s.globals.seriesGoals[i][r] &&
                      Array.isArray(s.globals.seriesGoals[i][r]) &&
                      s.globals.seriesGoals[i][r].forEach(function (t) {
                        c(t.value, t);
                      }),
                    this.barCtx.barOptions.isDumbbell &&
                      s.globals.seriesRange.length)
                  ) {
                    var d = this.barCtx.barOptions.dumbbellColors
                        ? this.barCtx.barOptions.dumbbellColors
                        : s.globals.colors,
                      p = {
                        strokeHeight: "x" === t ? 0 : s.globals.markers.size[i],
                        strokeWidth: "x" === t ? s.globals.markers.size[i] : 0,
                        strokeDashArray: 0,
                        strokeLineCap: "round",
                        strokeColor: Array.isArray(d[i]) ? d[i][0] : d[i],
                      };
                    c(s.globals.seriesRangeStart[i][r], p),
                      c(
                        s.globals.seriesRangeEnd[i][r],
                        b(
                          b({}, p),
                          {},
                          { strokeColor: Array.isArray(d[i]) ? d[i][1] : d[i] }
                        )
                      );
                  }
                  return l;
                },
              },
              {
                key: "drawGoalLine",
                value: function (t) {
                  var e = t.barXPosition,
                    n = t.barYPosition,
                    i = t.goalX,
                    r = t.goalY,
                    o = t.barWidth,
                    a = t.barHeight,
                    s = new x(this.barCtx.ctx),
                    l = s.group({ className: "apexcharts-bar-goals-groups" });
                  l.node.classList.add("apexcharts-element-hidden"),
                    this.barCtx.w.globals.delayedElements.push({ el: l.node }),
                    l.attr(
                      "clip-path",
                      "url(#gridRectMarkerMask".concat(
                        this.barCtx.w.globals.cuid,
                        ")"
                      )
                    );
                  var c = null;
                  return (
                    this.barCtx.isHorizontal
                      ? Array.isArray(i) &&
                        i.forEach(function (t) {
                          if (t.x >= -1 && t.x <= s.w.globals.gridWidth + 1) {
                            var e =
                                void 0 !== t.attrs.strokeHeight
                                  ? t.attrs.strokeHeight
                                  : a / 2,
                              i = n + e + a / 2;
                            (c = s.drawLine(
                              t.x,
                              i - 2 * e,
                              t.x,
                              i,
                              t.attrs.strokeColor
                                ? t.attrs.strokeColor
                                : void 0,
                              t.attrs.strokeDashArray,
                              t.attrs.strokeWidth ? t.attrs.strokeWidth : 2,
                              t.attrs.strokeLineCap
                            )),
                              l.add(c);
                          }
                        })
                      : Array.isArray(r) &&
                        r.forEach(function (t) {
                          if (t.y >= -1 && t.y <= s.w.globals.gridHeight + 1) {
                            var n =
                                void 0 !== t.attrs.strokeWidth
                                  ? t.attrs.strokeWidth
                                  : o / 2,
                              i = e + n + o / 2;
                            (c = s.drawLine(
                              i - 2 * n,
                              t.y,
                              i,
                              t.y,
                              t.attrs.strokeColor
                                ? t.attrs.strokeColor
                                : void 0,
                              t.attrs.strokeDashArray,
                              t.attrs.strokeHeight ? t.attrs.strokeHeight : 2,
                              t.attrs.strokeLineCap
                            )),
                              l.add(c);
                          }
                        }),
                    l
                  );
                },
              },
              {
                key: "drawBarShadow",
                value: function (t) {
                  var e = t.prevPaths,
                    n = t.currPaths,
                    i = t.color,
                    r = this.w,
                    o = e.x,
                    a = e.x1,
                    s = e.barYPosition,
                    l = n.x,
                    c = n.x1,
                    d = n.barYPosition,
                    u = s + n.barHeight,
                    p = new x(this.barCtx.ctx),
                    h = new O(),
                    f =
                      p.move(a, u) +
                      p.line(o, u) +
                      p.line(l, d) +
                      p.line(c, d) +
                      p.line(a, u) +
                      ("around" ===
                        r.config.plotOptions.bar.borderRadiusApplication ||
                      "both" === this.arrBorderRadius[realIndex][j]
                        ? " Z"
                        : " z");
                  return p.drawPath({
                    d: f,
                    fill: h.shadeColor(0.5, O.rgb2hex(i)),
                    stroke: "none",
                    strokeWidth: 0,
                    fillOpacity: 1,
                    classes: "apexcharts-bar-shadows",
                  });
                },
              },
              {
                key: "getZeroValueEncounters",
                value: function (t) {
                  var e,
                    n = t.i,
                    i = t.j,
                    r = this.w,
                    o = 0,
                    a = 0;
                  return (
                    (r.config.plotOptions.bar.horizontal
                      ? r.globals.series.map(function (t, e) {
                          return e;
                        })
                      : (null === (e = r.globals.columnSeries) || void 0 === e
                          ? void 0
                          : e.i.map(function (t) {
                              return t;
                            })) || []
                    ).forEach(function (t) {
                      var e = r.globals.seriesPercent[t][i];
                      e && o++, t < n && 0 === e && a++;
                    }),
                    { nonZeroColumns: o, zeroEncounters: a }
                  );
                },
              },
              {
                key: "getGroupIndex",
                value: function (t) {
                  var e = this.w,
                    n = e.globals.seriesGroups.findIndex(function (n) {
                      return n.indexOf(e.globals.seriesNames[t]) > -1;
                    }),
                    i = this.barCtx.columnGroupIndices,
                    r = i.indexOf(n);
                  return (
                    r < 0 && (i.push(n), (r = i.length - 1)),
                    { groupIndex: n, columnGroupIndex: r }
                  );
                },
              },
            ]),
            t
          );
        })(),
        Ct = (function () {
          function t(e, n) {
            a(this, t), (this.ctx = e), (this.w = e.w);
            var i = this.w;
            (this.barOptions = i.config.plotOptions.bar),
              (this.isHorizontal = this.barOptions.horizontal),
              (this.strokeWidth = i.config.stroke.width),
              (this.isNullValue = !1),
              (this.isRangeBar =
                i.globals.seriesRange.length && this.isHorizontal),
              (this.isVerticalGroupedRangeBar =
                !i.globals.isBarHorizontal &&
                i.globals.seriesRange.length &&
                i.config.plotOptions.bar.rangeBarGroupRows),
              (this.isFunnel = this.barOptions.isFunnel),
              (this.xyRatios = n),
              null !== this.xyRatios &&
                ((this.xRatio = n.xRatio),
                (this.yRatio = n.yRatio),
                (this.invertedXRatio = n.invertedXRatio),
                (this.invertedYRatio = n.invertedYRatio),
                (this.baseLineY = n.baseLineY),
                (this.baseLineInvertedY = n.baseLineInvertedY)),
              (this.yaxisIndex = 0),
              (this.translationsIndex = 0),
              (this.seriesLen = 0),
              (this.pathArr = []);
            var r = new V(this.ctx);
            (this.lastActiveBarSerieIndex = r.getActiveConfigSeriesIndex(
              "desc",
              ["bar", "column"]
            )),
              (this.columnGroupIndices = []);
            var o = r.getBarSeriesIndices(),
              s = new z(this.ctx);
            (this.stackedSeriesTotals = s.getStackedSeriesTotals(
              this.w.config.series
                .map(function (t, e) {
                  return -1 === o.indexOf(e) ? e : -1;
                })
                .filter(function (t) {
                  return -1 !== t;
                })
            )),
              (this.barHelpers = new zt(this));
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t, e) {
                  var n = this.w,
                    i = new x(this.ctx),
                    r = new z(this.ctx, n);
                  (t = r.getLogSeries(t)),
                    (this.series = t),
                    (this.yRatio = r.getLogYRatios(this.yRatio)),
                    this.barHelpers.initVariables(t);
                  var o = i.group({
                    class: "apexcharts-bar-series apexcharts-plot-series",
                  });
                  n.config.dataLabels.enabled &&
                    (this.totalItems, this.barOptions.dataLabels.maxItems);
                  for (var a = 0, s = 0; a < t.length; a++, s++) {
                    var l,
                      c,
                      d,
                      u,
                      p = void 0,
                      h = void 0,
                      f = [],
                      m = [],
                      g = n.globals.comboCharts ? e[a] : a,
                      v = this.barHelpers.getGroupIndex(g).columnGroupIndex,
                      _ = i.group({
                        class: "apexcharts-series",
                        rel: a + 1,
                        seriesName: O.escapeString(n.globals.seriesNames[g]),
                        "data:realIndex": g,
                      });
                    this.ctx.series.addCollapsedClassToSeries(_, g),
                      t[a].length > 0 && (this.visibleI = this.visibleI + 1);
                    var y = 0,
                      M = 0;
                    this.yRatio.length > 1 &&
                      ((this.yaxisIndex = n.globals.seriesYAxisReverseMap[g]),
                      (this.translationsIndex = g));
                    var w = this.translationsIndex;
                    this.isReversed =
                      n.config.yaxis[this.yaxisIndex] &&
                      n.config.yaxis[this.yaxisIndex].reversed;
                    var A = this.barHelpers.initialPositions();
                    (h = A.y),
                      (y = A.barHeight),
                      (c = A.yDivision),
                      (u = A.zeroW),
                      (p = A.x),
                      (M = A.barWidth),
                      (l = A.xDivision),
                      (d = A.zeroH),
                      this.horizontal || m.push(p + M / 2);
                    var C = i.group({
                      class: "apexcharts-datalabels",
                      "data:realIndex": g,
                    });
                    n.globals.delayedElements.push({ el: C.node }),
                      C.node.classList.add("apexcharts-element-hidden");
                    var k = i.group({ class: "apexcharts-bar-goals-markers" }),
                      S = i.group({ class: "apexcharts-bar-shadows" });
                    n.globals.delayedElements.push({ el: S.node }),
                      S.node.classList.add("apexcharts-element-hidden");
                    for (var T = 0; T < t[a].length; T++) {
                      var D = this.barHelpers.getStrokeWidth(a, T, g),
                        L = null,
                        q = {
                          indexes: {
                            i: a,
                            j: T,
                            realIndex: g,
                            translationsIndex: w,
                            bc: s,
                          },
                          x: p,
                          y: h,
                          strokeWidth: D,
                          elSeries: _,
                        };
                      this.isHorizontal
                        ? ((L = this.drawBarPaths(
                            b(
                              b({}, q),
                              {},
                              { barHeight: y, zeroW: u, yDivision: c }
                            )
                          )),
                          (M = this.series[a][T] / this.invertedYRatio))
                        : ((L = this.drawColumnPaths(
                            b(
                              b({}, q),
                              {},
                              { xDivision: l, barWidth: M, zeroH: d }
                            )
                          )),
                          (y = this.series[a][T] / this.yRatio[w]));
                      var E = this.barHelpers.getPathFillColor(t, a, T, g);
                      if (
                        this.isFunnel &&
                        this.barOptions.isFunnel3d &&
                        this.pathArr.length &&
                        T > 0
                      ) {
                        var j = this.barHelpers.drawBarShadow({
                          color:
                            "string" == typeof E &&
                            -1 === (null == E ? void 0 : E.indexOf("url"))
                              ? E
                              : O.hexToRgba(n.globals.colors[a]),
                          prevPaths: this.pathArr[this.pathArr.length - 1],
                          currPaths: L,
                        });
                        j && S.add(j);
                      }
                      this.pathArr.push(L);
                      var P = this.barHelpers.drawGoalLine({
                        barXPosition: L.barXPosition,
                        barYPosition: L.barYPosition,
                        goalX: L.goalX,
                        goalY: L.goalY,
                        barHeight: y,
                        barWidth: M,
                      });
                      P && k.add(P),
                        (h = L.y),
                        (p = L.x),
                        T > 0 && m.push(p + M / 2),
                        f.push(h),
                        this.renderSeries({
                          realIndex: g,
                          pathFill: E,
                          j: T,
                          i: a,
                          columnGroupIndex: v,
                          pathFrom: L.pathFrom,
                          pathTo: L.pathTo,
                          strokeWidth: D,
                          elSeries: _,
                          x: p,
                          y: h,
                          series: t,
                          barHeight: Math.abs(L.barHeight ? L.barHeight : y),
                          barWidth: Math.abs(L.barWidth ? L.barWidth : M),
                          elDataLabelsWrap: C,
                          elGoalsMarkers: k,
                          elBarShadows: S,
                          visibleSeries: this.visibleI,
                          type: "bar",
                        });
                    }
                    (n.globals.seriesXvalues[g] = m),
                      (n.globals.seriesYvalues[g] = f),
                      o.add(_);
                  }
                  return o;
                },
              },
              {
                key: "renderSeries",
                value: function (t) {
                  var e = t.realIndex,
                    n = t.pathFill,
                    i = t.lineFill,
                    r = t.j,
                    o = t.i,
                    a = t.columnGroupIndex,
                    s = t.pathFrom,
                    l = t.pathTo,
                    c = t.strokeWidth,
                    d = t.elSeries,
                    u = t.x,
                    p = t.y,
                    h = t.y1,
                    f = t.y2,
                    b = t.series,
                    m = t.barHeight,
                    g = t.barWidth,
                    v = t.barXPosition,
                    _ = t.barYPosition,
                    y = t.elDataLabelsWrap,
                    M = t.elGoalsMarkers,
                    O = t.elBarShadows,
                    w = t.visibleSeries,
                    z = t.type,
                    C = t.classes,
                    k = this.w,
                    S = new x(this.ctx);
                  if (!i) {
                    var T =
                      "function" == typeof k.globals.stroke.colors[e]
                        ? (function (t) {
                            var e,
                              n = k.config.stroke.colors;
                            return Array.isArray(n) &&
                              n.length > 0 &&
                              ((e = n[t]) || (e = ""), "function" == typeof e)
                              ? e({
                                  value: k.globals.series[t][r],
                                  dataPointIndex: r,
                                  w: k,
                                })
                              : e;
                          })(e)
                        : k.globals.stroke.colors[e];
                    i = this.barOptions.distributed
                      ? k.globals.stroke.colors[r]
                      : T;
                  }
                  k.config.series[o].data[r] &&
                    k.config.series[o].data[r].strokeColor &&
                    (i = k.config.series[o].data[r].strokeColor),
                    this.isNullValue && (n = "none");
                  var D =
                      ((r / k.config.chart.animations.animateGradually.delay) *
                        (k.config.chart.animations.speed /
                          k.globals.dataPoints)) /
                      2.4,
                    L = S.renderPaths({
                      i: o,
                      j: r,
                      realIndex: e,
                      pathFrom: s,
                      pathTo: l,
                      stroke: i,
                      strokeWidth: c,
                      strokeLineCap: k.config.stroke.lineCap,
                      fill: n,
                      animationDelay: D,
                      initialSpeed: k.config.chart.animations.speed,
                      dataChangeSpeed:
                        k.config.chart.animations.dynamicAnimation.speed,
                      className: "apexcharts-".concat(z, "-area ").concat(C),
                      chartType: z,
                    });
                  L.attr(
                    "clip-path",
                    "url(#gridRectBarMask".concat(k.globals.cuid, ")")
                  );
                  var q = k.config.forecastDataPoints;
                  q.count > 0 &&
                    r >= k.globals.dataPoints - q.count &&
                    (L.node.setAttribute("stroke-dasharray", q.dashArray),
                    L.node.setAttribute("stroke-width", q.strokeWidth),
                    L.node.setAttribute("fill-opacity", q.fillOpacity)),
                    void 0 !== h &&
                      void 0 !== f &&
                      (L.attr("data-range-y1", h), L.attr("data-range-y2", f)),
                    new A(this.ctx).setSelectionFilter(L, e, r),
                    d.add(L);
                  var E = new xt(this).handleBarDataLabels({
                    x: u,
                    y: p,
                    y1: h,
                    y2: f,
                    i: o,
                    j: r,
                    series: b,
                    realIndex: e,
                    columnGroupIndex: a,
                    barHeight: m,
                    barWidth: g,
                    barXPosition: v,
                    barYPosition: _,
                    renderedPath: L,
                    visibleSeries: w,
                  });
                  return (
                    null !== E.dataLabels && y.add(E.dataLabels),
                    E.totalDataLabels && y.add(E.totalDataLabels),
                    d.add(y),
                    M && d.add(M),
                    O && d.add(O),
                    d
                  );
                },
              },
              {
                key: "drawBarPaths",
                value: function (t) {
                  var e,
                    n = t.indexes,
                    i = t.barHeight,
                    r = t.strokeWidth,
                    o = t.zeroW,
                    a = t.x,
                    s = t.y,
                    l = t.yDivision,
                    c = t.elSeries,
                    d = this.w,
                    u = n.i,
                    p = n.j;
                  if (d.globals.isXNumeric)
                    e =
                      (s =
                        (d.globals.seriesX[u][p] - d.globals.minX) /
                          this.invertedXRatio -
                        i) +
                      i * this.visibleI;
                  else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
                    var h = 0,
                      f = 0;
                    d.globals.seriesPercent.forEach(function (t, e) {
                      t[p] && h++, e < u && 0 === t[p] && f++;
                    }),
                      h > 0 && (i = (this.seriesLen * i) / h),
                      (e = s + i * this.visibleI),
                      (e -= i * f);
                  } else e = s + i * this.visibleI;
                  this.isFunnel &&
                    (o -=
                      (this.barHelpers.getXForValue(this.series[u][p], o) - o) /
                      2),
                    (a = this.barHelpers.getXForValue(this.series[u][p], o));
                  var b = this.barHelpers.getBarpaths({
                    barYPosition: e,
                    barHeight: i,
                    x1: o,
                    x2: a,
                    strokeWidth: r,
                    isReversed: this.isReversed,
                    series: this.series,
                    realIndex: n.realIndex,
                    i: u,
                    j: p,
                    w: d,
                  });
                  return (
                    d.globals.isXNumeric || (s += l),
                    this.barHelpers.barBackground({
                      j: p,
                      i: u,
                      y1: e - i * this.visibleI,
                      y2: i * this.seriesLen,
                      elSeries: c,
                    }),
                    {
                      pathTo: b.pathTo,
                      pathFrom: b.pathFrom,
                      x1: o,
                      x: a,
                      y: s,
                      goalX: this.barHelpers.getGoalValues("x", o, null, u, p),
                      barYPosition: e,
                      barHeight: i,
                    }
                  );
                },
              },
              {
                key: "drawColumnPaths",
                value: function (t) {
                  var e,
                    n = t.indexes,
                    i = t.x,
                    r = t.y,
                    o = t.xDivision,
                    a = t.barWidth,
                    s = t.zeroH,
                    l = t.strokeWidth,
                    c = t.elSeries,
                    d = this.w,
                    u = n.realIndex,
                    p = n.translationsIndex,
                    h = n.i,
                    f = n.j,
                    b = n.bc;
                  if (d.globals.isXNumeric) {
                    var m = this.getBarXForNumericXAxis({
                      x: i,
                      j: f,
                      realIndex: u,
                      barWidth: a,
                    });
                    (i = m.x), (e = m.barXPosition);
                  } else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
                    var g = this.barHelpers.getZeroValueEncounters({
                        i: h,
                        j: f,
                      }),
                      v = g.nonZeroColumns,
                      _ = g.zeroEncounters;
                    v > 0 && (a = (this.seriesLen * a) / v),
                      (e = i + a * this.visibleI),
                      (e -= a * _);
                  } else e = i + a * this.visibleI;
                  r = this.barHelpers.getYForValue(this.series[h][f], s, p);
                  var y = this.barHelpers.getColumnPaths({
                    barXPosition: e,
                    barWidth: a,
                    y1: s,
                    y2: r,
                    strokeWidth: l,
                    isReversed: this.isReversed,
                    series: this.series,
                    realIndex: u,
                    i: h,
                    j: f,
                    w: d,
                  });
                  return (
                    d.globals.isXNumeric || (i += o),
                    this.barHelpers.barBackground({
                      bc: b,
                      j: f,
                      i: h,
                      x1: e - l / 2 - a * this.visibleI,
                      x2: a * this.seriesLen + l / 2,
                      elSeries: c,
                    }),
                    {
                      pathTo: y.pathTo,
                      pathFrom: y.pathFrom,
                      x: i,
                      y: r,
                      goalY: this.barHelpers.getGoalValues(
                        "y",
                        null,
                        s,
                        h,
                        f,
                        p
                      ),
                      barXPosition: e,
                      barWidth: a,
                    }
                  );
                },
              },
              {
                key: "getBarXForNumericXAxis",
                value: function (t) {
                  var e = t.x,
                    n = t.barWidth,
                    i = t.realIndex,
                    r = t.j,
                    o = this.w,
                    a = i;
                  return (
                    o.globals.seriesX[i].length ||
                      (a = o.globals.maxValsInArrayIndex),
                    o.globals.seriesX[a][r] &&
                      (e =
                        (o.globals.seriesX[a][r] - o.globals.minX) /
                          this.xRatio -
                        (n * this.seriesLen) / 2),
                    { barXPosition: e + n * this.visibleI, x: e }
                  );
                },
              },
              {
                key: "getPreviousPath",
                value: function (t, e) {
                  for (
                    var n, i = this.w, r = 0;
                    r < i.globals.previousPaths.length;
                    r++
                  ) {
                    var o = i.globals.previousPaths[r];
                    o.paths &&
                      o.paths.length > 0 &&
                      parseInt(o.realIndex, 10) === parseInt(t, 10) &&
                      void 0 !== i.globals.previousPaths[r].paths[e] &&
                      (n = i.globals.previousPaths[r].paths[e].d);
                  }
                  return n;
                },
              },
            ]),
            t
          );
        })(),
        kt = (function (t) {
          h(n, t);
          var e = d(n);
          function n() {
            return a(this, n), e.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "draw",
                value: function (t, e) {
                  var n = this,
                    i = this.w;
                  (this.graphics = new x(this.ctx)),
                    (this.bar = new Ct(this.ctx, this.xyRatios));
                  var r = new z(this.ctx, i);
                  (t = r.getLogSeries(t)),
                    (this.yRatio = r.getLogYRatios(this.yRatio)),
                    this.barHelpers.initVariables(t),
                    "100%" === i.config.chart.stackType &&
                      (t = i.globals.comboCharts
                        ? e.map(function (t) {
                            return i.globals.seriesPercent[t];
                          })
                        : i.globals.seriesPercent.slice()),
                    (this.series = t),
                    this.barHelpers.initializeStackedPrevVars(this);
                  for (
                    var o = this.graphics.group({
                        class: "apexcharts-bar-series apexcharts-plot-series",
                      }),
                      a = 0,
                      s = 0,
                      l = function (r, l) {
                        var c = void 0,
                          d = void 0,
                          u = void 0,
                          p = void 0,
                          h = i.globals.comboCharts ? e[r] : r,
                          f = n.barHelpers.getGroupIndex(h),
                          m = f.groupIndex,
                          g = f.columnGroupIndex;
                        n.groupCtx = n[i.globals.seriesGroups[m]];
                        var v = [],
                          _ = [],
                          y = 0;
                        n.yRatio.length > 1 &&
                          ((n.yaxisIndex =
                            i.globals.seriesYAxisReverseMap[h][0]),
                          (y = h)),
                          (n.isReversed =
                            i.config.yaxis[n.yaxisIndex] &&
                            i.config.yaxis[n.yaxisIndex].reversed);
                        var M = n.graphics.group({
                          class: "apexcharts-series",
                          seriesName: O.escapeString(i.globals.seriesNames[h]),
                          rel: r + 1,
                          "data:realIndex": h,
                        });
                        n.ctx.series.addCollapsedClassToSeries(M, h);
                        var w = n.graphics.group({
                            class: "apexcharts-datalabels",
                            "data:realIndex": h,
                          }),
                          A = n.graphics.group({
                            class: "apexcharts-bar-goals-markers",
                          }),
                          x = 0,
                          z = 0,
                          C = n.initialPositions(a, s, c, d, u, p, y);
                        (s = C.y),
                          (x = C.barHeight),
                          (d = C.yDivision),
                          (p = C.zeroW),
                          (a = C.x),
                          (z = C.barWidth),
                          (c = C.xDivision),
                          (u = C.zeroH),
                          (i.globals.barHeight = x),
                          (i.globals.barWidth = z),
                          n.barHelpers.initializeStackedXYVars(n),
                          1 === n.groupCtx.prevY.length &&
                            n.groupCtx.prevY[0].every(function (t) {
                              return isNaN(t);
                            }) &&
                            ((n.groupCtx.prevY[0] = n.groupCtx.prevY[0].map(
                              function () {
                                return u;
                              }
                            )),
                            (n.groupCtx.prevYF[0] = n.groupCtx.prevYF[0].map(
                              function () {
                                return 0;
                              }
                            )));
                        for (var k = 0; k < i.globals.dataPoints; k++) {
                          var S = n.barHelpers.getStrokeWidth(r, k, h),
                            T = {
                              indexes: {
                                i: r,
                                j: k,
                                realIndex: h,
                                translationsIndex: y,
                                bc: l,
                              },
                              strokeWidth: S,
                              x: a,
                              y: s,
                              elSeries: M,
                              columnGroupIndex: g,
                              seriesGroup: i.globals.seriesGroups[m],
                            },
                            D = null;
                          n.isHorizontal
                            ? ((D = n.drawStackedBarPaths(
                                b(
                                  b({}, T),
                                  {},
                                  { zeroW: p, barHeight: x, yDivision: d }
                                )
                              )),
                              (z = n.series[r][k] / n.invertedYRatio))
                            : ((D = n.drawStackedColumnPaths(
                                b(
                                  b({}, T),
                                  {},
                                  { xDivision: c, barWidth: z, zeroH: u }
                                )
                              )),
                              (x = n.series[r][k] / n.yRatio[y]));
                          var L = n.barHelpers.drawGoalLine({
                            barXPosition: D.barXPosition,
                            barYPosition: D.barYPosition,
                            goalX: D.goalX,
                            goalY: D.goalY,
                            barHeight: x,
                            barWidth: z,
                          });
                          L && A.add(L),
                            (s = D.y),
                            (a = D.x),
                            v.push(a),
                            _.push(s);
                          var q = n.barHelpers.getPathFillColor(t, r, k, h),
                            E = "";
                          i.globals.isBarHorizontal
                            ? "bottom" === n.barHelpers.arrBorderRadius[h][k] &&
                              i.globals.series[h][k] > 0 &&
                              (E = "apexcharts-flip-x")
                            : "bottom" === n.barHelpers.arrBorderRadius[h][k] &&
                              i.globals.series[h][k] > 0 &&
                              (E = "apexcharts-flip-y"),
                            (M = n.renderSeries({
                              realIndex: h,
                              pathFill: q,
                              j: k,
                              i: r,
                              columnGroupIndex: g,
                              pathFrom: D.pathFrom,
                              pathTo: D.pathTo,
                              strokeWidth: S,
                              elSeries: M,
                              x: a,
                              y: s,
                              series: t,
                              barHeight: x,
                              barWidth: z,
                              elDataLabelsWrap: w,
                              elGoalsMarkers: A,
                              type: "bar",
                              visibleSeries: g,
                              classes: E,
                            }));
                        }
                        (i.globals.seriesXvalues[h] = v),
                          (i.globals.seriesYvalues[h] = _),
                          n.groupCtx.prevY.push(n.groupCtx.yArrj),
                          n.groupCtx.prevYF.push(n.groupCtx.yArrjF),
                          n.groupCtx.prevYVal.push(n.groupCtx.yArrjVal),
                          n.groupCtx.prevX.push(n.groupCtx.xArrj),
                          n.groupCtx.prevXF.push(n.groupCtx.xArrjF),
                          n.groupCtx.prevXVal.push(n.groupCtx.xArrjVal),
                          o.add(M);
                      },
                      c = 0,
                      d = 0;
                    c < t.length;
                    c++, d++
                  )
                    l(c, d);
                  return o;
                },
              },
              {
                key: "initialPositions",
                value: function (t, e, n, i, r, o, a) {
                  var s,
                    l,
                    c = this.w;
                  if (this.isHorizontal) {
                    i = c.globals.gridHeight / c.globals.dataPoints;
                    var d = c.config.plotOptions.bar.barHeight;
                    (s =
                      -1 === String(d).indexOf("%")
                        ? parseInt(d, 10)
                        : (i * parseInt(d, 10)) / 100),
                      (o =
                        c.globals.padHorizontal +
                        (this.isReversed
                          ? c.globals.gridWidth - this.baseLineInvertedY
                          : this.baseLineInvertedY)),
                      (e = (i - s) / 2);
                  } else {
                    l = n = c.globals.gridWidth / c.globals.dataPoints;
                    var u = c.config.plotOptions.bar.columnWidth;
                    c.globals.isXNumeric && c.globals.dataPoints > 1
                      ? (l =
                          ((n = c.globals.minXDiff / this.xRatio) *
                            parseInt(this.barOptions.columnWidth, 10)) /
                          100)
                      : -1 === String(u).indexOf("%")
                      ? (l = parseInt(u, 10))
                      : (l *= parseInt(u, 10) / 100),
                      (r = this.isReversed
                        ? this.baseLineY[a]
                        : c.globals.gridHeight - this.baseLineY[a]),
                      (t = c.globals.padHorizontal + (n - l) / 2);
                  }
                  var p = c.globals.barGroups.length || 1;
                  return {
                    x: t,
                    y: e,
                    yDivision: i,
                    xDivision: n,
                    barHeight: s / p,
                    barWidth: l / p,
                    zeroH: r,
                    zeroW: o,
                  };
                },
              },
              {
                key: "drawStackedBarPaths",
                value: function (t) {
                  for (
                    var e,
                      n = t.indexes,
                      i = t.barHeight,
                      r = t.strokeWidth,
                      o = t.zeroW,
                      a = t.x,
                      s = t.y,
                      l = t.columnGroupIndex,
                      c = t.seriesGroup,
                      d = t.yDivision,
                      u = t.elSeries,
                      p = this.w,
                      h = s + l * i,
                      f = n.i,
                      b = n.j,
                      m = n.realIndex,
                      g = n.translationsIndex,
                      v = 0,
                      _ = 0;
                    _ < this.groupCtx.prevXF.length;
                    _++
                  )
                    v += this.groupCtx.prevXF[_][b];
                  var y;
                  if ((y = c.indexOf(p.config.series[m].name)) > 0) {
                    var M = o;
                    this.groupCtx.prevXVal[y - 1][b] < 0
                      ? (M =
                          this.series[f][b] >= 0
                            ? this.groupCtx.prevX[y - 1][b] +
                              v -
                              2 * (this.isReversed ? v : 0)
                            : this.groupCtx.prevX[y - 1][b])
                      : this.groupCtx.prevXVal[y - 1][b] >= 0 &&
                        (M =
                          this.series[f][b] >= 0
                            ? this.groupCtx.prevX[y - 1][b]
                            : this.groupCtx.prevX[y - 1][b] -
                              v +
                              2 * (this.isReversed ? v : 0)),
                      (e = M);
                  } else e = o;
                  a =
                    null === this.series[f][b]
                      ? e
                      : e +
                        this.series[f][b] / this.invertedYRatio -
                        2 *
                          (this.isReversed
                            ? this.series[f][b] / this.invertedYRatio
                            : 0);
                  var O = this.barHelpers.getBarpaths({
                    barYPosition: h,
                    barHeight: i,
                    x1: e,
                    x2: a,
                    strokeWidth: r,
                    isReversed: this.isReversed,
                    series: this.series,
                    realIndex: n.realIndex,
                    seriesGroup: c,
                    i: f,
                    j: b,
                    w: p,
                  });
                  return (
                    this.barHelpers.barBackground({
                      j: b,
                      i: f,
                      y1: h,
                      y2: i,
                      elSeries: u,
                    }),
                    (s += d),
                    {
                      pathTo: O.pathTo,
                      pathFrom: O.pathFrom,
                      goalX: this.barHelpers.getGoalValues(
                        "x",
                        o,
                        null,
                        f,
                        b,
                        g
                      ),
                      barXPosition: e,
                      barYPosition: h,
                      x: a,
                      y: s,
                    }
                  );
                },
              },
              {
                key: "drawStackedColumnPaths",
                value: function (t) {
                  var e = t.indexes,
                    n = t.x,
                    i = t.y,
                    r = t.xDivision,
                    o = t.barWidth,
                    a = t.zeroH,
                    s = t.columnGroupIndex,
                    l = t.seriesGroup,
                    c = t.elSeries,
                    d = this.w,
                    u = e.i,
                    p = e.j,
                    h = e.bc,
                    f = e.realIndex,
                    b = e.translationsIndex;
                  if (d.globals.isXNumeric) {
                    var m = d.globals.seriesX[f][p];
                    m || (m = 0),
                      (n =
                        (m - d.globals.minX) / this.xRatio -
                        (o / 2) * d.globals.barGroups.length);
                  }
                  for (
                    var g, v = n + s * o, _ = 0, y = 0;
                    y < this.groupCtx.prevYF.length;
                    y++
                  )
                    _ += isNaN(this.groupCtx.prevYF[y][p])
                      ? 0
                      : this.groupCtx.prevYF[y][p];
                  var M = u;
                  if (
                    (l && (M = l.indexOf(d.globals.seriesNames[f])),
                    (M > 0 && !d.globals.isXNumeric) ||
                      (M > 0 &&
                        d.globals.isXNumeric &&
                        d.globals.seriesX[f - 1][p] ===
                          d.globals.seriesX[f][p]))
                  ) {
                    var O,
                      w,
                      A,
                      x = Math.min(this.yRatio.length + 1, f + 1);
                    if (
                      void 0 !== this.groupCtx.prevY[M - 1] &&
                      this.groupCtx.prevY[M - 1].length
                    )
                      for (var z = 1; z < x; z++) {
                        var C;
                        if (
                          !isNaN(
                            null === (C = this.groupCtx.prevY[M - z]) ||
                              void 0 === C
                              ? void 0
                              : C[p]
                          )
                        ) {
                          A = this.groupCtx.prevY[M - z][p];
                          break;
                        }
                      }
                    for (var k = 1; k < x; k++) {
                      var S, T;
                      if (
                        (null === (S = this.groupCtx.prevYVal[M - k]) ||
                        void 0 === S
                          ? void 0
                          : S[p]) < 0
                      ) {
                        w =
                          this.series[u][p] >= 0
                            ? A - _ + 2 * (this.isReversed ? _ : 0)
                            : A;
                        break;
                      }
                      if (
                        (null === (T = this.groupCtx.prevYVal[M - k]) ||
                        void 0 === T
                          ? void 0
                          : T[p]) >= 0
                      ) {
                        w =
                          this.series[u][p] >= 0
                            ? A
                            : A + _ - 2 * (this.isReversed ? _ : 0);
                        break;
                      }
                    }
                    void 0 === w && (w = d.globals.gridHeight),
                      (g =
                        null !== (O = this.groupCtx.prevYF[0]) &&
                        void 0 !== O &&
                        O.every(function (t) {
                          return 0 === t;
                        }) &&
                        this.groupCtx.prevYF.slice(1, M).every(function (t) {
                          return t.every(function (t) {
                            return isNaN(t);
                          });
                        })
                          ? a
                          : w);
                  } else g = a;
                  i = this.series[u][p]
                    ? g -
                      this.series[u][p] / this.yRatio[b] +
                      2 *
                        (this.isReversed
                          ? this.series[u][p] / this.yRatio[b]
                          : 0)
                    : g;
                  var D = this.barHelpers.getColumnPaths({
                    barXPosition: v,
                    barWidth: o,
                    y1: g,
                    y2: i,
                    yRatio: this.yRatio[b],
                    strokeWidth: this.strokeWidth,
                    isReversed: this.isReversed,
                    series: this.series,
                    seriesGroup: l,
                    realIndex: e.realIndex,
                    i: u,
                    j: p,
                    w: d,
                  });
                  return (
                    this.barHelpers.barBackground({
                      bc: h,
                      j: p,
                      i: u,
                      x1: v,
                      x2: o,
                      elSeries: c,
                    }),
                    {
                      pathTo: D.pathTo,
                      pathFrom: D.pathFrom,
                      goalY: this.barHelpers.getGoalValues("y", null, a, u, p),
                      barXPosition: v,
                      x: d.globals.isXNumeric ? n : n + r,
                      y: i,
                    }
                  );
                },
              },
            ]),
            n
          );
        })(Ct),
        St = (function (t) {
          h(n, t);
          var e = d(n);
          function n() {
            return a(this, n), e.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "draw",
                value: function (t, e, n) {
                  var i = this,
                    r = this.w,
                    o = new x(this.ctx),
                    a = r.globals.comboCharts ? e : r.config.chart.type,
                    s = new H(this.ctx);
                  (this.candlestickOptions =
                    this.w.config.plotOptions.candlestick),
                    (this.boxOptions = this.w.config.plotOptions.boxPlot),
                    (this.isHorizontal = r.config.plotOptions.bar.horizontal);
                  var l = new z(this.ctx, r);
                  (t = l.getLogSeries(t)),
                    (this.series = t),
                    (this.yRatio = l.getLogYRatios(this.yRatio)),
                    this.barHelpers.initVariables(t);
                  for (
                    var c = o.group({
                        class: "apexcharts-".concat(
                          a,
                          "-series apexcharts-plot-series"
                        ),
                      }),
                      d = function (e) {
                        i.isBoxPlot =
                          "boxPlot" === r.config.chart.type ||
                          "boxPlot" === r.config.series[e].type;
                        var a,
                          l,
                          d,
                          u,
                          p = void 0,
  