// app.part28-de-30.js
                        h = void 0,
                          f = [],
                          m = [],
                          g = r.globals.comboCharts ? n[e] : e,
                          v = i.barHelpers.getGroupIndex(g).columnGroupIndex,
                          _ = o.group({
                            class: "apexcharts-series",
                            seriesName: O.escapeString(
                              r.globals.seriesNames[g]
                            ),
                            rel: e + 1,
                            "data:realIndex": g,
                          });
                        i.ctx.series.addCollapsedClassToSeries(_, g),
                          t[e].length > 0 && (i.visibleI = i.visibleI + 1);
                        var y,
                          M,
                          w = 0;
                        i.yRatio.length > 1 &&
                          ((i.yaxisIndex =
                            r.globals.seriesYAxisReverseMap[g][0]),
                          (w = g));
                        var A = i.barHelpers.initialPositions();
                        (h = A.y),
                          (y = A.barHeight),
                          (l = A.yDivision),
                          (u = A.zeroW),
                          (p = A.x),
                          (M = A.barWidth),
                          (a = A.xDivision),
                          (d = A.zeroH),
                          m.push(p + M / 2);
                        for (
                          var x = o.group({
                              class: "apexcharts-datalabels",
                              "data:realIndex": g,
                            }),
                            z = function (n) {
                              var o = i.barHelpers.getStrokeWidth(e, n, g),
                                c = null,
                                O = {
                                  indexes: {
                                    i: e,
                                    j: n,
                                    realIndex: g,
                                    translationsIndex: w,
                                  },
                                  x: p,
                                  y: h,
                                  strokeWidth: o,
                                  elSeries: _,
                                };
                              (c = i.isHorizontal
                                ? i.drawHorizontalBoxPaths(
                                    b(
                                      b({}, O),
                                      {},
                                      { yDivision: l, barHeight: y, zeroW: u }
                                    )
                                  )
                                : i.drawVerticalBoxPaths(
                                    b(
                                      b({}, O),
                                      {},
                                      { xDivision: a, barWidth: M, zeroH: d }
                                    )
                                  )),
                                (h = c.y),
                                (p = c.x),
                                n > 0 && m.push(p + M / 2),
                                f.push(h),
                                c.pathTo.forEach(function (a, l) {
                                  var d =
                                      !i.isBoxPlot &&
                                      i.candlestickOptions.wick.useFillColor
                                        ? c.color[l]
                                        : r.globals.stroke.colors[e],
                                    u = s.fillPath({
                                      seriesNumber: g,
                                      dataPointIndex: n,
                                      color: c.color[l],
                                      value: t[e][n],
                                    });
                                  i.renderSeries({
                                    realIndex: g,
                                    pathFill: u,
                                    lineFill: d,
                                    j: n,
                                    i: e,
                                    pathFrom: c.pathFrom,
                                    pathTo: a,
                                    strokeWidth: o,
                                    elSeries: _,
                                    x: p,
                                    y: h,
                                    series: t,
                                    columnGroupIndex: v,
                                    barHeight: y,
                                    barWidth: M,
                                    elDataLabelsWrap: x,
                                    visibleSeries: i.visibleI,
                                    type: r.config.chart.type,
                                  });
                                });
                            },
                            C = 0;
                          C < r.globals.dataPoints;
                          C++
                        )
                          z(C);
                        (r.globals.seriesXvalues[g] = m),
                          (r.globals.seriesYvalues[g] = f),
                          c.add(_);
                      },
                      u = 0;
                    u < t.length;
                    u++
                  )
                    d(u);
                  return c;
                },
              },
              {
                key: "drawVerticalBoxPaths",
                value: function (t) {
                  var e = t.indexes,
                    n = t.x;
                  t.y;
                  var i = t.xDivision,
                    r = t.barWidth,
                    o = t.zeroH,
                    a = t.strokeWidth,
                    s = this.w,
                    l = new x(this.ctx),
                    c = e.i,
                    d = e.j,
                    u = !0,
                    p = s.config.plotOptions.candlestick.colors.upward,
                    h = s.config.plotOptions.candlestick.colors.downward,
                    f = "";
                  this.isBoxPlot &&
                    (f = [
                      this.boxOptions.colors.lower,
                      this.boxOptions.colors.upper,
                    ]);
                  var b = this.yRatio[e.translationsIndex],
                    m = e.realIndex,
                    g = this.getOHLCValue(m, d),
                    v = o,
                    _ = o;
                  g.o > g.c && (u = !1);
                  var y = Math.min(g.o, g.c),
                    M = Math.max(g.o, g.c),
                    O = g.m;
                  s.globals.isXNumeric &&
                    (n =
                      (s.globals.seriesX[m][d] - s.globals.minX) / this.xRatio -
                      r / 2);
                  var w = n + r * this.visibleI;
                  void 0 === this.series[c][d] || null === this.series[c][d]
                    ? ((y = o), (M = o))
                    : ((y = o - y / b),
                      (M = o - M / b),
                      (v = o - g.h / b),
                      (_ = o - g.l / b),
                      (O = o - g.m / b));
                  var A = l.move(w, o),
                    z = l.move(w + r / 2, y);
                  return (
                    s.globals.previousPaths.length > 0 &&
                      (z = this.getPreviousPath(m, d, !0)),
                    (A = this.isBoxPlot
                      ? [
                          l.move(w, y) +
                            l.line(w + r / 2, y) +
                            l.line(w + r / 2, v) +
                            l.line(w + r / 4, v) +
                            l.line(w + r - r / 4, v) +
                            l.line(w + r / 2, v) +
                            l.line(w + r / 2, y) +
                            l.line(w + r, y) +
                            l.line(w + r, O) +
                            l.line(w, O) +
                            l.line(w, y + a / 2),
                          l.move(w, O) +
                            l.line(w + r, O) +
                            l.line(w + r, M) +
                            l.line(w + r / 2, M) +
                            l.line(w + r / 2, _) +
                            l.line(w + r - r / 4, _) +
                            l.line(w + r / 4, _) +
                            l.line(w + r / 2, _) +
                            l.line(w + r / 2, M) +
                            l.line(w, M) +
                            l.line(w, O) +
                            "z",
                        ]
                      : [
                          l.move(w, M) +
                            l.line(w + r / 2, M) +
                            l.line(w + r / 2, v) +
                            l.line(w + r / 2, M) +
                            l.line(w + r, M) +
                            l.line(w + r, y) +
                            l.line(w + r / 2, y) +
                            l.line(w + r / 2, _) +
                            l.line(w + r / 2, y) +
                            l.line(w, y) +
                            l.line(w, M - a / 2),
                        ]),
                    (z += l.move(w, y)),
                    s.globals.isXNumeric || (n += i),
                    {
                      pathTo: A,
                      pathFrom: z,
                      x: n,
                      y: M,
                      barXPosition: w,
                      color: this.isBoxPlot ? f : u ? [p] : [h],
                    }
                  );
                },
              },
              {
                key: "drawHorizontalBoxPaths",
                value: function (t) {
                  var e = t.indexes;
                  t.x;
                  var n = t.y,
                    i = t.yDivision,
                    r = t.barHeight,
                    o = t.zeroW,
                    a = t.strokeWidth,
                    s = this.w,
                    l = new x(this.ctx),
                    c = e.i,
                    d = e.j,
                    u = this.boxOptions.colors.lower;
                  this.isBoxPlot &&
                    (u = [
                      this.boxOptions.colors.lower,
                      this.boxOptions.colors.upper,
                    ]);
                  var p = this.invertedYRatio,
                    h = e.realIndex,
                    f = this.getOHLCValue(h, d),
                    b = o,
                    m = o,
                    g = Math.min(f.o, f.c),
                    v = Math.max(f.o, f.c),
                    _ = f.m;
                  s.globals.isXNumeric &&
                    (n =
                      (s.globals.seriesX[h][d] - s.globals.minX) /
                        this.invertedXRatio -
                      r / 2);
                  var y = n + r * this.visibleI;
                  void 0 === this.series[c][d] || null === this.series[c][d]
                    ? ((g = o), (v = o))
                    : ((g = o + g / p),
                      (v = o + v / p),
                      (b = o + f.h / p),
                      (m = o + f.l / p),
                      (_ = o + f.m / p));
                  var M = l.move(o, y),
                    O = l.move(g, y + r / 2);
                  return (
                    s.globals.previousPaths.length > 0 &&
                      (O = this.getPreviousPath(h, d, !0)),
                    (M = [
                      l.move(g, y) +
                        l.line(g, y + r / 2) +
                        l.line(b, y + r / 2) +
                        l.line(b, y + r / 2 - r / 4) +
                        l.line(b, y + r / 2 + r / 4) +
                        l.line(b, y + r / 2) +
                        l.line(g, y + r / 2) +
                        l.line(g, y + r) +
                        l.line(_, y + r) +
                        l.line(_, y) +
                        l.line(g + a / 2, y),
                      l.move(_, y) +
                        l.line(_, y + r) +
                        l.line(v, y + r) +
                        l.line(v, y + r / 2) +
                        l.line(m, y + r / 2) +
                        l.line(m, y + r - r / 4) +
                        l.line(m, y + r / 4) +
                        l.line(m, y + r / 2) +
                        l.line(v, y + r / 2) +
                        l.line(v, y) +
                        l.line(_, y) +
                        "z",
                    ]),
                    (O += l.move(g, y)),
                    s.globals.isXNumeric || (n += i),
                    {
                      pathTo: M,
                      pathFrom: O,
                      x: v,
                      y: n,
                      barYPosition: y,
                      color: u,
                    }
                  );
                },
              },
              {
                key: "getOHLCValue",
                value: function (t, e) {
                  var n = this.w;
                  return {
                    o: this.isBoxPlot
                      ? n.globals.seriesCandleH[t][e]
                      : n.globals.seriesCandleO[t][e],
                    h: this.isBoxPlot
                      ? n.globals.seriesCandleO[t][e]
                      : n.globals.seriesCandleH[t][e],
                    m: n.globals.seriesCandleM[t][e],
                    l: this.isBoxPlot
                      ? n.globals.seriesCandleC[t][e]
                      : n.globals.seriesCandleL[t][e],
                    c: this.isBoxPlot
                      ? n.globals.seriesCandleL[t][e]
                      : n.globals.seriesCandleC[t][e],
                  };
                },
              },
            ]),
            n
          );
        })(Ct),
        Tt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "checkColorRange",
                value: function () {
                  var t = this.w,
                    e = !1,
                    n = t.config.plotOptions[t.config.chart.type];
                  return (
                    n.colorScale.ranges.length > 0 &&
                      n.colorScale.ranges.map(function (t, n) {
                        t.from <= 0 && (e = !0);
                      }),
                    e
                  );
                },
              },
              {
                key: "getShadeColor",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = 1,
                    a = r.config.plotOptions[t].shadeIntensity,
                    s = this.determineColor(t, e, n);
                  r.globals.hasNegs || i
                    ? (o = r.config.plotOptions[t].reverseNegativeShade
                        ? s.percent < 0
                          ? (s.percent / 100) * (1.25 * a)
                          : (1 - s.percent / 100) * (1.25 * a)
                        : s.percent <= 0
                        ? 1 - (1 + s.percent / 100) * a
                        : (1 - s.percent / 100) * a)
                    : ((o = 1 - s.percent / 100),
                      "treemap" === t &&
                        (o = (1 - s.percent / 100) * (1.25 * a)));
                  var l = s.color,
                    c = new O();
                  if (r.config.plotOptions[t].enableShades)
                    if ("dark" === this.w.config.theme.mode) {
                      var d = c.shadeColor(-1 * o, s.color);
                      l = O.hexToRgba(
                        O.isColorHex(d) ? d : O.rgb2hex(d),
                        r.config.fill.opacity
                      );
                    } else {
                      var u = c.shadeColor(o, s.color);
                      l = O.hexToRgba(
                        O.isColorHex(u) ? u : O.rgb2hex(u),
                        r.config.fill.opacity
                      );
                    }
                  return { color: l, colorProps: s };
                },
              },
              {
                key: "determineColor",
                value: function (t, e, n) {
                  var i = this.w,
                    r = i.globals.series[e][n],
                    o = i.config.plotOptions[t],
                    a = o.colorScale.inverse ? n : e;
                  o.distributed && "treemap" === i.config.chart.type && (a = n);
                  var s = i.globals.colors[a],
                    l = null,
                    c = Math.min.apply(Math, v(i.globals.series[e])),
                    d = Math.max.apply(Math, v(i.globals.series[e]));
                  o.distributed ||
                    "heatmap" !== t ||
                    ((c = i.globals.minY), (d = i.globals.maxY)),
                    void 0 !== o.colorScale.min &&
                      ((c =
                        o.colorScale.min < i.globals.minY
                          ? o.colorScale.min
                          : i.globals.minY),
                      (d =
                        o.colorScale.max > i.globals.maxY
                          ? o.colorScale.max
                          : i.globals.maxY));
                  var u = Math.abs(d) + Math.abs(c),
                    p = (100 * r) / (0 === u ? u - 1e-6 : u);
                  return (
                    o.colorScale.ranges.length > 0 &&
                      o.colorScale.ranges.map(function (t, e) {
                        if (r >= t.from && r <= t.to) {
                          (s = t.color),
                            (l = t.foreColor ? t.foreColor : null),
                            (c = t.from),
                            (d = t.to);
                          var n = Math.abs(d) + Math.abs(c);
                          p = (100 * r) / (0 === n ? n - 1e-6 : n);
                        }
                      }),
                    { color: s, foreColor: l, percent: p }
                  );
                },
              },
              {
                key: "calculateDataLabels",
                value: function (t) {
                  var e = t.text,
                    n = t.x,
                    i = t.y,
                    r = t.i,
                    o = t.j,
                    a = t.colorProps,
                    s = t.fontSize,
                    l = this.w.config.dataLabels,
                    c = new x(this.ctx),
                    d = new X(this.ctx),
                    u = null;
                  if (l.enabled) {
                    u = c.group({ class: "apexcharts-data-labels" });
                    var p = l.offsetX,
                      h = l.offsetY,
                      f = n + p,
                      b = i + parseFloat(l.style.fontSize) / 3 + h;
                    d.plotDataLabelsText({
                      x: f,
                      y: b,
                      text: e,
                      i: r,
                      j: o,
                      color: a.foreColor,
                      parent: u,
                      fontSize: s,
                      dataLabelsConfig: l,
                    });
                  }
                  return u;
                },
              },
              {
                key: "addListeners",
                value: function (t) {
                  var e = new x(this.ctx);
                  t.node.addEventListener(
                    "mouseenter",
                    e.pathMouseEnter.bind(this, t)
                  ),
                    t.node.addEventListener(
                      "mouseleave",
                      e.pathMouseLeave.bind(this, t)
                    ),
                    t.node.addEventListener(
                      "mousedown",
                      e.pathMouseDown.bind(this, t)
                    );
                },
              },
            ]),
            t
          );
        })(),
        Dt = (function () {
          function t(e, n) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.xRatio = n.xRatio),
              (this.yRatio = n.yRatio),
              (this.dynamicAnim =
                this.w.config.chart.animations.dynamicAnimation),
              (this.helpers = new Tt(e)),
              (this.rectRadius = this.w.config.plotOptions.heatmap.radius),
              (this.strokeWidth = this.w.config.stroke.show
                ? this.w.config.stroke.width
                : 0);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = n.group({ class: "apexcharts-heatmap" });
                  i.attr(
                    "clip-path",
                    "url(#gridRectMask".concat(e.globals.cuid, ")")
                  );
                  var r = e.globals.gridWidth / e.globals.dataPoints,
                    o = e.globals.gridHeight / e.globals.series.length,
                    a = 0,
                    s = !1;
                  this.negRange = this.helpers.checkColorRange();
                  var l = t.slice();
                  e.config.yaxis[0].reversed && ((s = !0), l.reverse());
                  for (
                    var c = s ? 0 : l.length - 1;
                    s ? c < l.length : c >= 0;
                    s ? c++ : c--
                  ) {
                    var d = n.group({
                      class: "apexcharts-series apexcharts-heatmap-series",
                      seriesName: O.escapeString(e.globals.seriesNames[c]),
                      rel: c + 1,
                      "data:realIndex": c,
                    });
                    if (
                      (this.ctx.series.addCollapsedClassToSeries(d, c),
                      e.config.chart.dropShadow.enabled)
                    ) {
                      var u = e.config.chart.dropShadow;
                      new A(this.ctx).dropShadow(d, u, c);
                    }
                    for (
                      var p = 0,
                        h = e.config.plotOptions.heatmap.shadeIntensity,
                        f = 0;
                      f < l[c].length;
                      f++
                    ) {
                      var b = this.helpers.getShadeColor(
                          e.config.chart.type,
                          c,
                          f,
                          this.negRange
                        ),
                        m = b.color,
                        g = b.colorProps;
                      "image" === e.config.fill.type &&
                        (m = new H(this.ctx).fillPath({
                          seriesNumber: c,
                          dataPointIndex: f,
                          opacity: e.globals.hasNegs
                            ? g.percent < 0
                              ? 1 - (1 + g.percent / 100)
                              : h + g.percent / 100
                            : g.percent / 100,
                          patternID: O.randomId(),
                          width: e.config.fill.image.width
                            ? e.config.fill.image.width
                            : r,
                          height: e.config.fill.image.height
                            ? e.config.fill.image.height
                            : o,
                        }));
                      var v = this.rectRadius,
                        _ = n.drawRect(p, a, r, o, v);
                      if (
                        (_.attr({ cx: p, cy: a }),
                        _.node.classList.add("apexcharts-heatmap-rect"),
                        d.add(_),
                        _.attr({
                          fill: m,
                          i: c,
                          index: c,
                          j: f,
                          val: t[c][f],
                          "stroke-width": this.strokeWidth,
                          stroke: e.config.plotOptions.heatmap
                            .useFillColorAsStroke
                            ? m
                            : e.globals.stroke.colors[0],
                          color: m,
                        }),
                        this.helpers.addListeners(_),
                        e.config.chart.animations.enabled &&
                          !e.globals.dataChanged)
                      ) {
                        var y = 1;
                        e.globals.resized ||
                          (y = e.config.chart.animations.speed),
                          this.animateHeatMap(_, p, a, r, o, y);
                      }
                      if (e.globals.dataChanged) {
                        var M = 1;
                        if (
                          this.dynamicAnim.enabled &&
                          e.globals.shouldAnimate
                        ) {
                          M = this.dynamicAnim.speed;
                          var w =
                            e.globals.previousPaths[c] &&
                            e.globals.previousPaths[c][f] &&
                            e.globals.previousPaths[c][f].color;
                          w || (w = "rgba(255, 255, 255, 0)"),
                            this.animateHeatColor(
                              _,
                              O.isColorHex(w) ? w : O.rgb2hex(w),
                              O.isColorHex(m) ? m : O.rgb2hex(m),
                              M
                            );
                        }
                      }
                      var z = (0, e.config.dataLabels.formatter)(
                          e.globals.series[c][f],
                          {
                            value: e.globals.series[c][f],
                            seriesIndex: c,
                            dataPointIndex: f,
                            w: e,
                          }
                        ),
                        C = this.helpers.calculateDataLabels({
                          text: z,
                          x: p + r / 2,
                          y: a + o / 2,
                          i: c,
                          j: f,
                          colorProps: g,
                          series: l,
                        });
                      null !== C && d.add(C), (p += r);
                    }
                    (a += o), i.add(d);
                  }
                  var k = e.globals.yAxisScale[0].result.slice();
                  return (
                    e.config.yaxis[0].reversed ? k.unshift("") : k.push(""),
                    (e.globals.yAxisScale[0].result = k),
                    i
                  );
                },
              },
              {
                key: "animateHeatMap",
                value: function (t, e, n, i, r, o) {
                  var a = new w(this.ctx);
                  a.animateRect(
                    t,
                    { x: e + i / 2, y: n + r / 2, width: 0, height: 0 },
                    { x: e, y: n, width: i, height: r },
                    o,
                    function () {
                      a.animationCompleted(t);
                    }
                  );
                },
              },
              {
                key: "animateHeatColor",
                value: function (t, e, n, i) {
                  t.attr({ fill: e }).animate(i).attr({ fill: n });
                },
              },
            ]),
            t
          );
        })(),
        Lt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "drawYAxisTexts",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = r.config.yaxis[0],
                    a = r.globals.yLabelFormatters[0];
                  return new x(this.ctx).drawText({
                    x: t + o.labels.offsetX,
                    y: e + o.labels.offsetY,
                    text: a(i, n),
                    textAnchor: "middle",
                    fontSize: o.labels.style.fontSize,
                    fontFamily: o.labels.style.fontFamily,
                    foreColor: Array.isArray(o.labels.style.colors)
                      ? o.labels.style.colors[n]
                      : o.labels.style.colors,
                  });
                },
              },
            ]),
            t
          );
        })(),
        qt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
            var n = this.w;
            (this.chartType = this.w.config.chart.type),
              (this.initialAnim = this.w.config.chart.animations.enabled),
              (this.dynamicAnim =
                this.initialAnim &&
                this.w.config.chart.animations.dynamicAnimation.enabled),
              (this.animBeginArr = [0]),
              (this.animDur = 0),
              (this.donutDataLabels =
                this.w.config.plotOptions.pie.donut.labels),
              (this.lineColorArr =
                void 0 !== n.globals.stroke.colors
                  ? n.globals.stroke.colors
                  : n.globals.colors),
              (this.defaultSize = Math.min(
                n.globals.gridWidth,
                n.globals.gridHeight
              )),
              (this.centerY = this.defaultSize / 2),
              (this.centerX = n.globals.gridWidth / 2),
              "radialBar" === n.config.chart.type
                ? (this.fullAngle = 360)
                : (this.fullAngle = Math.abs(
                    n.config.plotOptions.pie.endAngle -
                      n.config.plotOptions.pie.startAngle
                  )),
              (this.initialAngle =
                n.config.plotOptions.pie.startAngle % this.fullAngle),
              (n.globals.radialSize =
                this.defaultSize / 2.05 -
                n.config.stroke.width -
                (n.config.chart.sparkline.enabled
                  ? 0
                  : n.config.chart.dropShadow.blur)),
              (this.donutSize =
                (n.globals.radialSize *
                  parseInt(n.config.plotOptions.pie.donut.size, 10)) /
                100);
            var i = n.config.plotOptions.pie.customScale,
              r = n.globals.gridWidth / 2,
              o = n.globals.gridHeight / 2;
            (this.translateX = r - r * i),
              (this.translateY = o - o * i),
              (this.dataLabelsGroup = new x(this.ctx).group({
                class: "apexcharts-datalabels-group",
                transform: "translate("
                  .concat(this.translateX, ", ")
                  .concat(this.translateY, ") scale(")
                  .concat(i, ")"),
              })),
              (this.maxY = 0),
              (this.sliceLabels = []),
              (this.sliceSizes = []),
              (this.prevSectorAngleArr = []);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = new x(this.ctx),
                    r = i.group({ class: "apexcharts-pie" });
                  if (n.globals.noData) return r;
                  for (var o = 0, a = 0; a < t.length; a++)
                    o += O.negToZero(t[a]);
                  var s = [],
                    l = i.group();
                  0 === o && (o = 1e-5),
                    t.forEach(function (t) {
                      e.maxY = Math.max(e.maxY, t);
                    }),
                    n.config.yaxis[0].max &&
                      (this.maxY = n.config.yaxis[0].max),
                    "back" === n.config.grid.position &&
                      "polarArea" === this.chartType &&
                      this.drawPolarElements(r);
                  for (var c = 0; c < t.length; c++) {
                    var d = (this.fullAngle * O.negToZero(t[c])) / o;
                    s.push(d),
                      "polarArea" === this.chartType
                        ? ((s[c] = this.fullAngle / t.length),
                          this.sliceSizes.push(
                            (n.globals.radialSize * t[c]) / this.maxY
                          ))
                        : this.sliceSizes.push(n.globals.radialSize);
                  }
                  if (n.globals.dataChanged) {
                    for (
                      var u, p = 0, h = 0;
                      h < n.globals.previousPaths.length;
                      h++
                    )
                      p += O.negToZero(n.globals.previousPaths[h]);
                    for (var f = 0; f < n.globals.previousPaths.length; f++)
                      (u =
                        (this.fullAngle *
                          O.negToZero(n.globals.previousPaths[f])) /
                        p),
                        this.prevSectorAngleArr.push(u);
                  }
                  if (
                    (this.donutSize < 0 && (this.donutSize = 0),
                    "donut" === this.chartType)
                  ) {
                    var b = i.drawCircle(this.donutSize);
                    b.attr({
                      cx: this.centerX,
                      cy: this.centerY,
                      fill: n.config.plotOptions.pie.donut.background
                        ? n.config.plotOptions.pie.donut.background
                        : "transparent",
                    }),
                      l.add(b);
                  }
                  var m = this.drawArcs(s, t);
                  if (
                    (this.sliceLabels.forEach(function (t) {
                      m.add(t);
                    }),
                    l.attr({
                      transform: "translate("
                        .concat(this.translateX, ", ")
                        .concat(this.translateY, ") scale(")
                        .concat(n.config.plotOptions.pie.customScale, ")"),
                    }),
                    l.add(m),
                    r.add(l),
                    this.donutDataLabels.show)
                  ) {
                    var g = this.renderInnerDataLabels(
                      this.dataLabelsGroup,
                      this.donutDataLabels,
                      {
                        hollowSize: this.donutSize,
                        centerX: this.centerX,
                        centerY: this.centerY,
                        opacity: this.donutDataLabels.show,
                      }
                    );
                    r.add(g);
                  }
                  return (
                    "front" === n.config.grid.position &&
                      "polarArea" === this.chartType &&
                      this.drawPolarElements(r),
                    r
                  );
                },
              },
              {
                key: "drawArcs",
                value: function (t, e) {
                  var n = this.w,
                    i = new A(this.ctx),
                    r = new x(this.ctx),
                    o = new H(this.ctx),
                    a = r.group({ class: "apexcharts-slices" }),
                    s = this.initialAngle,
                    l = this.initialAngle,
                    c = this.initialAngle,
                    d = this.initialAngle;
                  this.strokeWidth = n.config.stroke.show
                    ? n.config.stroke.width
                    : 0;
                  for (var u = 0; u < t.length; u++) {
                    var p = r.group({
                      class: "apexcharts-series apexcharts-pie-series",
                      seriesName: O.escapeString(n.globals.seriesNames[u]),
                      rel: u + 1,
                      "data:realIndex": u,
                    });
                    a.add(p),
                      (l = d),
                      (c = (s = c) + t[u]),
                      (d = l + this.prevSectorAngleArr[u]);
                    var h = c < s ? this.fullAngle + c - s : c - s,
                      f = o.fillPath({
                        seriesNumber: u,
                        size: this.sliceSizes[u],
                        value: e[u],
                      }),
                      b = this.getChangedPath(l, d),
                      m = r.drawPath({
                        d: b,
                        stroke: Array.isArray(this.lineColorArr)
                          ? this.lineColorArr[u]
                          : this.lineColorArr,
                        strokeWidth: 0,
                        fill: f,
                        fillOpacity: n.config.fill.opacity,
                        classes: "apexcharts-pie-area apexcharts-"
                          .concat(this.chartType.toLowerCase(), "-slice-")
                          .concat(u),
                      });
                    if (
                      (m.attr({ index: 0, j: u }),
                      i.setSelectionFilter(m, 0, u),
                      n.config.chart.dropShadow.enabled)
                    ) {
                      var g = n.config.chart.dropShadow;
                      i.dropShadow(m, g, u);
                    }
                    this.addListeners(m, this.donutDataLabels),
                      x.setAttrs(m.node, {
                        "data:angle": h,
                        "data:startAngle": s,
                        "data:strokeWidth": this.strokeWidth,
                        "data:value": e[u],
                      });
                    var v = { x: 0, y: 0 };
                    "pie" === this.chartType || "polarArea" === this.chartType
                      ? (v = O.polarToCartesian(
                          this.centerX,
                          this.centerY,
                          n.globals.radialSize / 1.25 +
                            n.config.plotOptions.pie.dataLabels.offset,
                          (s + h / 2) % this.fullAngle
                        ))
                      : "donut" === this.chartType &&
                        (v = O.polarToCartesian(
                          this.centerX,
                          this.centerY,
                          (n.globals.radialSize + this.donutSize) / 2 +
                            n.config.plotOptions.pie.dataLabels.offset,
                          (s + h / 2) % this.fullAngle
                        )),
                      p.add(m);
                    var _ = 0;
                    if (
                      (!this.initialAnim ||
                      n.globals.resized ||
                      n.globals.dataChanged
                        ? this.animBeginArr.push(0)
                        : (0 ==
                            (_ =
                              (h / this.fullAngle) *
                              n.config.chart.animations.speed) && (_ = 1),
                          (this.animDur = _ + this.animDur),
                          this.animBeginArr.push(this.animDur)),
                      this.dynamicAnim && n.globals.dataChanged
                        ? this.animatePaths(m, {
                            size: this.sliceSizes[u],
                            endAngle: c,
                            startAngle: s,
                            prevStartAngle: l,
                            prevEndAngle: d,
                            animateStartingPos: !0,
                            i: u,
                            animBeginArr: this.animBeginArr,
                            shouldSetPrevPaths: !0,
                            dur: n.config.chart.animations.dynamicAnimation
                              .speed,
                          })
                        : this.animatePaths(m, {
                            size: this.sliceSizes[u],
                            endAngle: c,
                            startAngle: s,
                            i: u,
                            totalItems: t.length - 1,
                            animBeginArr: this.animBeginArr,
                            dur: _,
                          }),
                      n.config.plotOptions.pie.expandOnClick &&
                        "polarArea" !== this.chartType &&
                        m.node.addEventListener(
                          "mouseup",
                          this.pieClicked.bind(this, u)
                        ),
                      void 0 !== n.globals.selectedDataPoints[0] &&
                        n.globals.selectedDataPoints[0].indexOf(u) > -1 &&
                        this.pieClicked(u),
                      n.config.dataLabels.enabled)
                    ) {
                      var y = v.x,
                        M = v.y,
                        w = (100 * h) / this.fullAngle + "%";
                      if (
                        0 !== h &&
                        n.config.plotOptions.pie.dataLabels
                          .minAngleToShowLabel < t[u]
                      ) {
                        var z = n.config.dataLabels.formatter;
                        void 0 !== z &&
                          (w = z(n.globals.seriesPercent[u][0], {
                            seriesIndex: u,
                            w: n,
                          }));
                        var C = n.globals.dataLabels.style.colors[u],
                          k = r.group({ class: "apexcharts-datalabels" }),
                          S = r.drawText({
                            x: y,
                            y: M,
                            text: w,
                            textAnchor: "middle",
                            fontSize: n.config.dataLabels.style.fontSize,
                            fontFamily: n.config.dataLabels.style.fontFamily,
                            fontWeight: n.config.dataLabels.style.fontWeight,
                            foreColor: C,
                          });
                        if (
                          (k.add(S), n.config.dataLabels.dropShadow.enabled)
                        ) {
                          var T = n.config.dataLabels.dropShadow;
                          i.dropShadow(S, T);
                        }
                        S.node.classList.add("apexcharts-pie-label"),
                          n.config.chart.animations.animate &&
                            !1 === n.globals.resized &&
                            (S.node.classList.add("apexcharts-pie-label-delay"),
                            (S.node.style.animationDelay =
                              n.config.chart.animations.speed / 940 + "s")),
                          this.sliceLabels.push(k);
                      }
                    }
                  }
                  return a;
                },
              },
              {
                key: "addListeners",
                value: function (t, e) {
                  var n = new x(this.ctx);
                  t.node.addEventListener(
                    "mouseenter",
                    n.pathMouseEnter.bind(this, t)
                  ),
                    t.node.addEventListener(
                      "mouseleave",
                      n.pathMouseLeave.bind(this, t)
                    ),
                    t.node.addEventListener(
                      "mouseleave",
                      this.revertDataLabelsInner.bind(this, t.node, e)
                    ),
                    t.node.addEventListener(
                      "mousedown",
                      n.pathMouseDown.bind(this, t)
                    ),
                    this.donutDataLabels.total.showAlways ||
                      (t.node.addEventListener(
                        "mouseenter",
                        this.printDataLabelsInner.bind(this, t.node, e)
                      ),
                      t.node.addEventListener(
                        "mousedown",
                        this.printDataLabelsInner.bind(this, t.node, e)
                      ));
                },
              },
              {
                key: "animatePaths",
                value: function (t, e) {
                  var n = this.w,
                    i =
                      e.endAngle < e.startAngle
                        ? this.fullAngle + e.endAngle - e.startAngle
                        : e.endAngle - e.startAngle,
                    r = i,
                    o = e.startAngle,
                    a = e.startAngle;
                  void 0 !== e.prevStartAngle &&
                    void 0 !== e.prevEndAngle &&
                    ((o = e.prevEndAngle),
                    (r =
                      e.prevEndAngle < e.prevStartAngle
                        ? this.fullAngle + e.prevEndAngle - e.prevStartAngle
                        : e.prevEndAngle - e.prevStartAngle)),
                    e.i === n.config.series.length - 1 &&
                      (i + a > this.fullAngle
                        ? (e.endAngle = e.endAngle - (i + a))
                        : i + a < this.fullAngle &&
                          (e.endAngle =
                            e.endAngle + (this.fullAngle - (i + a)))),
                    i === this.fullAngle && (i = this.fullAngle - 0.01),
                    this.animateArc(t, o, a, i, r, e);
                },
              },
              {
                key: "animateArc",
                value: function (t, e, n, i, r, o) {
                  var a,
                    s = this,
                    l = this.w,
                    c = new w(this.ctx),
                    d = o.size;
                  (isNaN(e) || isNaN(r)) && ((e = n), (r = i), (o.dur = 0));
                  var u = i,
                    p = n,
                    h = e < n ? this.fullAngle + e - n : e - n;
                  l.globals.dataChanged &&
                    o.shouldSetPrevPaths &&
                    o.prevEndAngle &&
                    ((a = s.getPiePath({
                      me: s,
                      startAngle: o.prevStartAngle,
                      angle:
                        o.prevEndAngle < o.prevStartAngle
                          ? this.fullAngle + o.prevEndAngle - o.prevStartAngle
                          : o.prevEndAngle - o.prevStartAngle,
                      size: d,
                    })),
                    t.attr({ d: a })),
                    0 !== o.dur
                      ? t
                          .animate(o.dur, l.globals.easing, o.animBeginArr[o.i])
                          .afterAll(function () {
                            ("pie" !== s.chartType &&
                              "donut" !== s.chartType &&
                              "polarArea" !== s.chartType) ||
                              this.animate(
                                l.config.chart.animations.dynamicAnimation.speed
                              ).attr({ "stroke-width": s.strokeWidth }),
                              o.i === l.config.series.length - 1 &&
                                c.animationCompleted(t);
                          })
                          .during(function (l) {
                            (u = h + (i - h) * l),
                              o.animateStartingPos &&
                                ((u = r + (i - r) * l),
                                (p = e - r + (n - (e - r)) * l)),
                              (a = s.getPiePath({
                                me: s,
                                startAngle: p,
                                angle: u,
                                size: d,
                              })),
                              t.node.setAttribute("data:pathOrig", a),
                              t.attr({ d: a });
                          })
                      : ((a = s.getPiePath({
                          me: s,
                          startAngle: p,
                          angle: i,
                          size: d,
                        })),
                        o.isTrack || (l.globals.animationEnded = !0),
                        t.node.setAttribute("data:pathOrig", a),
                        t.attr({ d: a, "stroke-width": s.strokeWidth }));
                },
              },
              {
                key: "pieClicked",
                value: function (t) {
                  var e,
                    n = this.w,
                    i = this,
                    r =
                      i.sliceSizes[t] +
                      (n.config.plotOptions.pie.expandOnClick ? 4 : 0),
                    o = n.globals.dom.Paper.select(
                      ".apexcharts-"
                        .concat(i.chartType.toLowerCase(), "-slice-")
                        .concat(t)
                    ).members[0];
                  if ("true" !== o.attr("data:pieClicked")) {
                    var a = n.globals.dom.baseEl.getElementsByClassName(
                      "apexcharts-pie-area"
                    );
                    Array.prototype.forEach.call(a, function (t) {
                      t.setAttribute("data:pieClicked", "false");
                      var e = t.getAttribute("data:pathOrig");
                      e && t.setAttribute("d", e);
                    }),
                      (n.globals.capturedDataPointIndex = t),
                      o.attr("data:pieClicked", "true");
                    var s = parseInt(o.attr("data:startAngle"), 10),
                      l = parseInt(o.attr("data:angle"), 10);
                    (e = i.getPiePath({
                      me: i,
                      startAngle: s,
                      angle: l,
                      size: r,
                    })),
                      360 !== l && o.plot(e);
                  } else {
                    o.attr({ "data:pieClicked": "false" }),
                      this.revertDataLabelsInner(o.node, this.donutDataLabels);
                    var c = o.attr("data:pathOrig");
                    o.attr({ d: c });
                  }
                },
              },
              {
                key: "getChangedPath",
                value: function (t, e) {
                  var n = "";
                  return (
                    this.dynamicAnim &&
                      this.w.globals.dataChanged &&
                      (n = this.getPiePath({
                        me: this,
                        startAngle: t,
                        angle: e - t,
                        size: this.size,
                      })),
                    n
                  );
                },
              },
              {
                key: "getPiePath",
                value: function (t) {
                  var e,
                    n = t.me,
                    i = t.startAngle,
                    r = t.angle,
                    o = t.size,
                    a = new x(this.ctx),
                    s = i,
                    l = (Math.PI * (s - 90)) / 180,
                    c = r + i;
                  Math.ceil(c) >=
                    this.fullAngle +
                      (this.w.config.plotOptions.pie.startAngle %
                        this.fullAngle) &&
                    (c =
                      this.fullAngle +
                      (this.w.config.plotOptions.pie.startAngle %
                        this.fullAngle) -
                      0.01),
                    Math.ceil(c) > this.fullAngle && (c -= this.fullAngle);
                  var d = (Math.PI * (c - 90)) / 180,
                    u = n.centerX + o * Math.cos(l),
                    p = n.centerY + o * Math.sin(l),
                    h = n.centerX + o * Math.cos(d),
                    f = n.centerY + o * Math.sin(d),
                    b = O.polarToCartesian(
                      n.centerX,
                      n.centerY,
                      n.donutSize,
                      c
                    ),
                    m = O.polarToCartesian(
                      n.centerX,
                      n.centerY,
                      n.donutSize,
                      s
                    ),
                    g = r > 180 ? 1 : 0,
                    v = ["M", u, p, "A", o, o, 0, g, 1, h, f];
                  return (
                    (e =
                      "donut" === n.chartType
                        ? []
                            .concat(v, [
                              "L",
                              b.x,
                              b.y,
                              "A",
                              n.donutSize,
                              n.donutSize,
                              0,
                              g,
                              0,
                              m.x,
                              m.y,
                              "L",
                              u,
                              p,
                              "z",
                            ])
                            .join(" ")
                        : "pie" === n.chartType || "polarArea" === n.chartType
                        ? []
                            .concat(v, ["L", n.centerX, n.centerY, "L", u, p])
                            .join(" ")
                        : [].concat(v).join(" ")),
                    a.roundPathCorners(e, 2 * this.strokeWidth)
                  );
                },
              },
              {
                key: "drawPolarElements",
                value: function (t) {
                  var e = this.w,
                    n = new Q(this.ctx),
                    i = new x(this.ctx),
                    r = new Lt(this.ctx),
                    o = i.group(),
                    a = i.group(),
                    s = n.niceScale(0, Math.ceil(this.maxY), 0),
                    l = s.result.reverse(),
                    c = s.result.length;
                  this.maxY = s.niceMax;
                  for (
                    var d = e.globals.radialSize, u = d / (c - 1), p = 0;
                    p < c - 1;
                    p++
                  ) {
                    var h = i.drawCircle(d);
                    if (
                      (h.attr({
                        cx: this.centerX,
                        cy: this.centerY,
                        fill: "none",
                        "stroke-width":
                          e.config.plotOptions.polarArea.rings.strokeWidth,
                        stroke:
                          e.config.plotOptions.polarArea.rings.strokeColor,
                      }),
                      e.config.yaxis[0].show)
                    ) {
                      var f = r.drawYAxisTexts(
                        this.centerX,
                        this.centerY -
                          d +
                          parseInt(
                            e.config.yaxis[0].labels.style.fontSize,
                            10
                          ) /
                            2,
                        p,
                        l[p]
                      );
                      a.add(f);
                    }
                    o.add(h), (d -= u);
                  }
                  this.drawSpokes(t), t.add(o), t.add(a);
                },
              },
              {
                key: "renderInnerDataLabels",
                value: function (t, e, n) {
                  var i = this.w,
                    r = new x(this.ctx),
                    o = e.total.show;
                  (t.node.innerHTML = ""), (t.node.style.opacity = n.opacity);
                  var a,
                    s,
                    l = n.centerX,
                    c = this.donutDataLabels.total.label
                      ? n.centerY
                      : n.centerY - n.centerY / 6;
                  a =
                    void 0 === e.name.color
                      ? i.globals.colors[0]
                      : e.name.color;
                  var d = e.name.fontSize,
                    u = e.name.fontFamily,
                    p = e.name.fontWeight;
                  s =
                    void 0 === e.value.color
                      ? i.config.chart.foreColor
                      : e.value.color;
                  var h = e.value.formatter,
                    f = "",
                    b = "";
                  if (
                    (o
                      ? ((a = e.total.color),
                        (d = e.total.fontSize),
                        (u = e.total.fontFamily),
                        (p = e.total.fontWeight),
                        (b = this.donutDataLabels.total.label
                          ? e.total.label
                          : ""),
                        (f = e.total.formatter(i)))
                      : 1 === i.globals.series.length &&
                        ((f = h(i.globals.series[0], i)),
                        (b = i.globals.seriesNames[0])),
                    b && (b = e.name.formatter(b, e.total.show, i)),
                    e.name.show)
                  ) {
                    var m = r.drawText({
                      x: l,
                      y: c + parseFloat(e.name.offsetY),
                      text: b,
                      textAnchor: "middle",
                      foreColor: a,
                      fontSize: d,
                      fontWeight: p,
                      fontFamily: u,
                    });
                    m.node.classList.add("apexcharts-datalabel-label"),
                      t.add(m);
                  }
                  if (e.value.show) {
                    var g = e.name.show
                        ? parseFloat(e.value.offsetY) + 16
                        : e.value.offsetY,
                      v = r.drawText({
                        x: l,
                        y: c + g,
                        text: f,
                        textAnchor: "middle",
                        foreColor: s,
                        fontWeight: e.value.fontWeight,
                        fontSize: e.value.fontSize,
                        fontFamily: e.value.fontFamily,
                      });
                    v.node.classList.add("apexcharts-datalabel-value"),
                      t.add(v);
                  }
                  return t;
                },
              },
              {
                key: "printInnerLabels",
                value: function (t, e, n, i) {
                  var r,
                    o = this.w;
                  i
                    ? (r =
                        void 0 === t.name.color
                          ? o.globals.colors[
                              parseInt(i.parentNode.getAttribute("rel"), 10) - 1
                            ]
                          : t.name.color)
                    : o.globals.series.length > 1 &&
                      t.total.show &&
                      (r = t.total.color);
                  var a = o.globals.dom.baseEl.querySelector(
                      ".apexcharts-datalabel-label"
                    ),
                    s = o.globals.dom.baseEl.querySelector(
                      ".apexcharts-datalabel-value"
                    );
                  (n = (0, t.value.formatter)(n, o)),
                    i ||
                      "function" != typeof t.total.formatter ||
                      (n = t.total.formatter(o));
                  var l = e === t.total.label;
                  (e = this.donutDataLabels.total.label
                    ? t.name.formatter(e, l, o)
                    : ""),
                    null !== a && (a.textContent = e),
                    null !== s && (s.textContent = n),
                    null !== a && (a.style.fill = r);
                },
              },
              {
                key: "printDataLabelsInner",
                value: function (t, e) {
                  var n = this.w,
                    i = t.getAttribute("data:value"),
                    r =
                      n.globals.seriesNames[
                        parseInt(t.parentNode.getAttribute("rel"), 10) - 1
                      ];
                  n.globals.series.length > 1 &&
                    this.printInnerLabels(e, r, i, t);
                  var o = n.globals.dom.baseEl.querySelector(
                    ".apexcharts-datalabels-group"
                  );
                  null !== o && (o.style.opacity = 1);
                },
              },
              {
                key: "drawSpokes",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = new x(this.ctx),
                    r = n.config.plotOptions.polarArea.spokes;
                  if (0 !== r.strokeWidth) {
                    for (
                      var o = [], a = 360 / n.globals.series.length, s = 0;
                      s < n.globals.series.length;
                      s++
                    )
                      o.push(
                        O.polarToCartesian(
                          this.centerX,
                          this.centerY,
                          n.globals.radialSize,
                          n.config.plotOptions.pie.startAngle + a * s
                        )
                      );
                    o.forEach(function (n, o) {
                      var a = i.drawLine(
                        n.x,
                        n.y,
                        e.centerX,
                        e.centerY,
                        Array.isArray(r.connectorColors)
                          ? r.connectorColors[o]
                          : r.connectorColors
                      );
                      t.add(a);
                    });
                  }
                },
              },
              {
                key: "revertDataLabelsInner",
                value: function () {
                  var t = this.w;
                  if (this.donutDataLabels.show) {
                    var e = t.globals.dom.Paper.select(
                        ".apexcharts-datalabels-group"
                      ).members[0],
                      n = this.renderInnerDataLabels(e, this.donutDataLabels, {
                        hollowSize: this.donutSize,
                        centerX: this.centerX,
                        centerY: this.centerY,
                        opacity: this.donutDataLabels.show,
                      });
                    t.globals.dom.Paper.select(
                      ".apexcharts-radialbar, .apexcharts-pie"
                    ).members[0].add(n);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Et = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.chartType = this.w.config.chart.type),
              (this.initialAnim = this.w.config.chart.animations.enabled),
              (this.dynamicAnim =
                this.initialAnim &&
                this.w.config.chart.animations.dynamicAnimation.enabled),
              (this.animDur = 0);
            var n = this.w;
            (this.graphics = new x(this.ctx)),
              (this.lineColorArr =
                void 0 !== n.globals.stroke.colors
                  ? n.globals.stroke.colors
                  : n.globals.colors),
              (this.defaultSize =
                n.globals.svgHeight < n.globals.svgWidth
                  ? n.globals.gridHeight
                  : n.globals.gridWidth),
              (this.isLog = n.config.yaxis[0].logarithmic),
              (this.logBase = n.config.yaxis[0].logBase),
              (this.coreUtils = new z(this.ctx)),
              (this.maxValue = this.isLog
                ? this.coreUtils.getLogVal(this.logBase, n.globals.maxY, 0)
                : n.globals.maxY),
              (this.minValue = this.isLog
                ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0)
                : n.globals.minY),
              (this.polygons = n.config.plotOptions.radar.polygons),
              (this.strokeWidth = n.config.stroke.show
                ? n.config.stroke.width
                : 0),
              (this.size =
                this.defaultSize / 2.1 -
                this.strokeWidth -
                n.config.chart.dropShadow.blur),
              n.config.xaxis.labels.show &&
                (this.size = this.size - n.globals.xAxisLabelsWidth / 1.75),
              void 0 !== n.config.plotOptions.radar.size &&
                (this.size = n.config.plotOptions.radar.size),
              (this.dataRadiusOfPercent = []),
              (this.dataRadius = []),
              (this.angleArr = []),
              (this.yaxisLabelsTextsPos = []);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = new H(this.ctx),
                    r = [],
                    o = new X(this.ctx);
                  t.length &&
                    (this.dataPointsLen =
                      t[n.globals.maxValsInArrayIndex].length),
                    (this.disAngle = (2 * Math.PI) / this.dataPointsLen);
                  var a = n.globals.gridWidth / 2,
                    s = n.globals.gridHeight / 2,
                    l = a + n.config.plotOptions.radar.offsetX,
                    c = s + n.config.plotOptions.radar.offsetY,
                    d = this.graphics.group({
                      class: "apexcharts-radar-series apexcharts-plot-series",
                      transform: "translate("
                        .concat(l || 0, ", ")
                        .concat(c || 0, ")"),
                    }),
                    u = [],
                    p = null,
                    h = null;
                  if (
                    ((this.yaxisLabels = this.graphics.group({
                      class: "apexcharts-yaxis",
                    })),
                    t.forEach(function (t, a) {
                      var s = t.length === n.globals.dataPoints,
                        l = e.graphics
                          .group()
                          .attr({
                            class: "apexcharts-series",
                            "data:longestSeries": s,
                            seriesName: O.escapeString(
                              n.globals.seriesNames[a]
                            ),
                            rel: a + 1,
                            "data:realIndex": a,
                          });
                      (e.dataRadiusOfPercent[a] = []),
                        (e.dataRadius[a] = []),
                        (e.angleArr[a] = []),
                        t.forEach(function (t, n) {
                          var i = Math.abs(e.maxValue - e.minValue);
                          (t -= e.minValue),
                            e.isLog &&
                              (t = e.coreUtils.getLogVal(e.logBase, t, 0)),
                            (e.dataRadiusOfPercent[a][n] = t / i),
                            (e.dataRadius[a][n] =
                              e.dataRadiusOfPercent[a][n] * e.size),
                            (e.angleArr[a][n] = n * e.disAngle);
                        }),
                        (u = e.getDataPointsPos(
                          e.dataRadius[a],
                          e.angleArr[a]
                        ));
                      var c = e.createPaths(u, { x: 0, y: 0 });
                      (p = e.graphics.group({
                        class:
                          "apexcharts-series-markers-wrap apexcharts-element-hidden",
                      })),
                        (h = e.graphics.group({
                          class: "apexcharts-datalabels",
                          "data:realIndex": a,
                        })),
                        n.globals.delayedElements.push({
                          el: p.node,
                          index: a,
                        });
                      var d = {
                          i: a,
                          realIndex: a,
                          animationDelay: a,
                          initialSpeed: n.config.chart.animations.speed,
                          dataChangeSpeed:
                            n.config.chart.animations.dynamicAnimation.speed,
                          className: "apexcharts-radar",
                          shouldClipToGrid: !1,
                          bindEventsOnPaths: !1,
                          stroke: n.globals.stroke.colors[a],
                          strokeLineCap: n.config.stroke.lineCap,
                        },
                        f = null;
                      n.globals.previousPaths.length > 0 &&
                        (f = e.getPreviousPath(a));
                      for (var m = 0; m < c.linePathsTo.length; m++) {
                        var g = e.graphics.renderPaths(
                          b(
                            b({}, d),
                            {},
                            {
                              pathFrom: null === f ? c.linePathsFrom[m] : f,
                              pathTo: c.linePathsTo[m],
                              strokeWidth: Array.isArray(e.strokeWidth)
                                ? e.strokeWidth[a]
                                : e.strokeWidth,
                              fill: "none",
                              drawShadow: !1,
                            }
                          )
                        );
                        l.add(g);
                        var v = i.fillPath({ seriesNumber: a }),
                          _ = e.graphics.renderPaths(
                            b(
                              b({}, d),
                              {},
                              {
                                pathFrom: null === f ? c.areaPathsFrom[m] : f,
                                pathTo: c.areaPathsTo[m],
                                strokeWidth: 0,
                                fill: v,
                                drawShadow: !1,
                              }
                            )
                          );
                        if (n.config.chart.dropShadow.enabled) {
                          var y = new A(e.ctx),
                            M = n.config.chart.dropShadow;
                          y.dropShadow(
                            _,
                            Object.assign({}, M, { noUserSpaceOnUse: !0 }),
                            a
                          );
                        }
                        l.add(_);
                      }
                      t.forEach(function (t, i) {
                        var r = new Y(e.ctx).getMarkerConfig({
                            cssClass: "apexcharts-marker",
                            seriesIndex: a,
                            dataPointIndex: i,
                          }),
                          s = e.graphics.drawMarker(u[i].x, u[i].y, r);
                        s.attr("rel", i),
                          s.attr("j", i),
                          s.attr("index", a),
                          s.node.setAttribute("default-marker-size", r.pSize);
                        var c = e.graphics.group({
                          class: "apexcharts-series-markers",
                        });
                        c && c.add(s), p.add(c), l.add(p);
                        var d = n.config.dataLabels;
                        if (d.enabled) {
                          var f = d.formatter(n.globals.series[a][i], {
                            seriesIndex: a,
                            dataPointIndex: i,
                            w: n,
                          });
                          o.plotDataLabelsText({
                            x: u[i].x,
                            y: u[i].y,
                            text: f,
                            textAnchor: "middle",
                            i: a,
                            j: a,
                            parent: h,
                            offsetCorrection: !1,
                            dataLabelsConfig: b({}, d),
                          });
                        }
                        l.add(h);
                      }),
                        r.push(l);
                    }),
                    this.drawPolygons({ parent: d }),
                    n.config.xaxis.labels.show)
                  ) {
                    var f = this.drawXAxisTexts();
                    d.add(f);
                  }
                  return (
                    r.forEach(function (t) {
                      d.add(t);
                    }),
                    d.add(this.yaxisLabels),
                    d
                  );
                },
              },
              {
                key: "drawPolygons",
                value: function (t) {
                  for (
                    var e = this,
                      n = this.w,
                      i = t.parent,
                      r = new Lt(this.ctx),
                      o = n.globals.yAxisScale[0].result.reverse(),
                      a = o.length,
                      s = [],
                      l = this.size / (a - 1),
                      c = 0;
                    c < a;
                    c++
                  )
                    s[c] = l * c;
                  s.reverse();
                  var d = [],
                    u = [];
                  s.forEach(function (t, n) {
                    var i = O.getPolygonPos(t, e.dataPointsLen),
                      r = "";
                    i.forEach(function (t, i) {
                      if (0 === n) {
                        var o = e.graphics.drawLine(
                          t.x,
                          t.y,
                          0,
                          0,
                          Array.isArray(e.polygons.connectorColors)
                            ? e.polygons.connectorColors[i]
                            : e.polygons.connectorColors
                        );
                        u.push(o);
                      }
                      0 === i && e.yaxisLabelsTextsPos.push({ x: t.x, y: t.y }),
                        (r += t.x + "," + t.y + " ");
                    }),
                      d.push(r);
                  }),
                    d.forEach(function (t, r) {
                      var o = e.polygons.strokeColors,
                        a = e.polygons.strokeWidth,
                        s = e.graphics.drawPolygon(
                          t,
                          Array.isArray(o) ? o[r] : o,
                          Array.isArray(a) ? a[r] : a,
                          n.globals.radarPolygons.fill.colors[r]
                        );
                      i.add(s);
                    }),
                    u.forEach(function (t) {
                      i.add(t);
                    }),
                    n.config.yaxis[0].show &&
                      this.yaxisLabelsTextsPos.forEach(function (t, n) {
                        var i = r.drawYAxisTexts(t.x, t.y, n, o[n]);
                        e.yaxisLabels.add(i);
                      });
                },
              },
              {
                key: "drawXAxisTexts",
                value: function () {
                  var t = this,
                    e = this.w,
                    n = e.config.xaxis.labels,
                    i = this.graphics.group({ class: "apexcharts-xaxis" }),
                    r = O.getPolygonPos(this.size, this.dataPointsLen);
                  return (
                    e.globals.labels.forEach(function (o, a) {
                      var s = e.config.xaxis.labels.formatter,
                        l = new X(t.ctx);
                      if (r[a]) {
                        var c = t.getTextPos(r[a], t.size),
                          d = s(o, {
                            seriesIndex: -1,
                            dataPointIndex: a,
                            w: e,
                          });
                        l.plotDataLabelsText({
                          x: c.newX,
                          y: c.newY,
                          text: d,
                          textAnchor: c.textAnchor,
                          i: a,
                          j: a,
                          parent: i,
                          className: "apexcharts-xaxis-label",
                          color:
                            Array.isArray(n.style.colors) && n.style.colors[a]
                              ? n.style.colors[a]
                              : "#a8a8a8",
                          dataLabelsConfig: b(
                            {
                              textAnchor: c.textAnchor,
                              dropShadow: { enabled: !1 },
                            },
                            n
                          ),
                          offsetCorrection: !1,
                        }).on("click", function (n) {
                          if (
                            "function" ==
                            typeof e.config.chart.events.xAxisLabelClick
                          ) {
                            var i = Object.assign({}, e, { labelIndex: a });
                            e.config.chart.events.xAxisLabelClick(n, t.ctx, i);
                          }
                        });
                      }
                    }),
                    i
                  );
                },
              },
              {
                key: "createPaths",
                value: function (t, e) {
                  var n = this,
                    i = [],
                    r = [],
                    o = [],
                    a = [];
                  if (t.length) {
                    (r = [this.graphics.move(e.x, e.y)]),
                      (a = [this.graphics.move(e.x, e.y)]);
                    var s = this.graphics.move(t[0].x, t[0].y),
                      l = this.graphics.move(t[0].x, t[0].y);
                    t.forEach(function (e, i) {
                      (s += n.graphics.line(e.x, e.y)),
                        (l += n.graphics.line(e.x, e.y)),
                        i === t.length - 1 && ((s += "Z"), (l += "Z"));
                    }),
                      i.push(s),
                      o.push(l);
                  }
                  return {
                    linePathsFrom: r,
                    linePathsTo: i,
                    areaPathsFrom: a,
                    areaPathsTo: o,
                  };
                },
              },
              {
                key: "getTextPos",
                value: function (t, e) {
                  var n = "middle",
                    i = t.x,
                    r = t.y;
                  return (
                    Math.abs(t.x) >= 10
                      ? t.x > 0
                        ? ((n = "start"), (i += 10))
                        : t.x < 0 && ((n = "end"), (i -= 10))
                      : (n = "middle"),
                    Math.abs(t.y) >= e - 10 &&
                      (t.y < 0 ? (r -= 10) : t.y > 0 && (r += 10)),
                    { textAnchor: n, newX: i, newY: r }
                  );
                },
              },
              {
                key: "getPreviousPath",
                value: function (t) {
                  for (
                    var e = this.w, n = null, i = 0;
                    i < e.globals.previousPaths.length;
                    i++
                  ) {
                    var r = e.globals.previousPaths[i];
                    r.paths.length > 0 &&
                      parseInt(r.realIndex, 10) === parseInt(t, 10) &&
                      void 0 !== e.globals.previousPaths[i].paths[0] &&
                      (n = e.globals.previousPaths[i].paths[0].d);
                  }
                  return n;
                },
              },
              {
                key: "getDataPointsPos",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : this.dataPointsLen;
                  (t = t || []), (e = e || []);
                  for (var i = [], r = 0; r < n; r++) {
                    var o = {};
                    (o.x = t[r] * Math.sin(e[r])),
                      (o.y = -t[r] * Math.cos(e[r])),
                      i.push(o);
                  }
                  return i;
                },
              },
            ]),
            t
          );
        })(),
        jt = (function (t) {
          h(n, t);
          var e = d(n);
          function n(t) {
            var i;
            a(this, n),
              ((i = e.call(this, t)).ctx = t),
              (i.w = t.w),
              (i.animBeginArr = [0]),
              (i.animDur = 0);
            var r = i.w;
            return (
              (i.startAngle = r.config.plotOptions.radialBar.startAngle),
              (i.endAngle = r.config.plotOptions.radialBar.endAngle),
              (i.totalAngle = Math.abs(
                r.config.plotOptions.radialBar.endAngle -
                  r.config.plotOptions.radialBar.startAngle
              )),
              (i.trackStartAngle =
                r.config.plotOptions.radialBar.track.startAngle),
              (i.trackEndAngle = r.config.plotOptions.radialBar.track.endAngle),
              (i.barLabels = i.w.config.plotOptions.radialBar.barLabels),
              (i.donutDataLabels = i.w.config.plotOptions.radialBar.dataLabels),
              (i.radialDataLabels = i.donutDataLabels),
              i.trackStartAngle || (i.trackStartAngle = i.startAngle),
              i.trackEndAngle || (i.trackEndAngle = i.endAngle),
              360 === i.endAngle && (i.endAngle = 359.99),
              (i.margin = parseInt(
                r.config.plotOptions.radialBar.track.margin,
                10
              )),
              (i.onBarLabelClick = i.onBarLabelClick.bind(o(i))),
              i
            );
          }
          return (
            l(n, [
              {
                key: "draw",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = n.group({ class: "apexcharts-radialbar" });
                  if (e.globals.noData) return i;
                  var r = n.group(),
                    o = this.defaultSize / 2,
                    a = e.globals.gridWidth / 2,
                    s = this.defaultSize / 2.05;
                  e.config.chart.sparkline.enabled ||
                    (s =
                      s -
                      e.config.stroke.width -
                      e.config.chart.dropShadow.blur);
                  var l = e.globals.fill.colors;
                  if (e.config.plotOptions.radialBar.track.show) {
                    var c = this.drawTracks({
                      size: s,
                      centerX: a,
                      centerY: o,
                      colorArr: l,
                      series: t,
                    });
                    r.add(c);
                  }
                  var d = this.drawArcs({
                      size: s,
                      centerX: a,
                      centerY: o,
                      colorArr: l,
                      series: t,
                    }),
                    u = 360;
                  e.config.plotOptions.radialBar.startAngle < 0 &&
                    (u = this.totalAngle);
                  var p = (360 - u) / 360;
                  if (
                    ((e.globals.radialSize = s - s * p),
                    this.radialDataLabels.value.show)
                  ) {
                    var h = Math.max(
                      this.radialDataLabels.value.offsetY,
                      this.radialDataLabels.name.offsetY
                    );
                    e.globals.radialSize += h * p;
                  }
                  return (
                    r.add(d.g),
                    "front" ===
                      e.config.plotOptions.radialBar.hollow.position &&
                      (d.g.add(d.elHollow),
                      d.dataLabels && d.g.add(d.dataLabels)),
                    i.add(r),
                    i
                  );
                },
              },
              {
                key: "drawTracks",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = n.group({ class: "apexcharts-tracks" }),
                    r = new A(this.ctx),
                    o = new H(this.ctx),
                    a = this.getStrokeWidth(t);
                  t.size = t.size - a / 2;
                  for (var s = 0; s < t.series.length; s++) {
                    var l = n.group({
                      class: "apexcharts-radialbar-track apexcharts-track",
                    });
                    i.add(l),
                      l.attr({ rel: s + 1 }),
                      (t.size = t.size - a - this.margin);
                    var c = e.config.plotOptions.radialBar.track,
                      d = o.fillPath({
                        seriesNumber: 0,
                        size: t.size,
                        fillColors: Array.isArray(c.background)
                          ? c.background[s]
                          : c.background,
                        solid: !0,
                      }),
                      u = this.trackStartAngle,
                      p = this.trackEndAngle;
                    Math.abs(p) + Math.abs(u) >= 360 &&
                      (p = 360 - Math.abs(this.startAngle) - 0.1);
                    var h = n.drawPath({
                      d: "",
                      stroke: d,
                      strokeWidth: (a * parseInt(c.strokeWidth, 10)) / 100,
                      fill: "none",
                      strokeOpacity: c.opacity,
                      classes: "apexcharts-radialbar-area",
                    });
                    if (c.dropShadow.enabled) {
                      var f = c.dropShadow;
                      r.dropShadow(h, f);
                    }
                    l.add(h),
                      h.attr("id", "apexcharts-radialbarTrack-" + s),
                      this.animatePaths(h, {
                        centerX: t.centerX,
                        centerY: t.centerY,
                        endAngle: p,
                        startAngle: u,
                        size: t.size,
                        i: s,
                        totalItems: 2,
                        animBeginArr: 0,
                        dur: 0,
                        isTrack: !0,
                        easing: e.globals.easing,
                      });
                  }
                  return i;
                },
              },
              {
                key: "drawArcs",
                value: function (t) {
                  var e = this.w,
                    n = new x(this.ctx),
                    i = new H(this.ctx),
                    r = new A(this.ctx),
                    o = n.group(),
                    a = this.getStrokeWidth(t);
                  t.size = t.size - a / 2;
                  var s = e.config.plotOptions.radialBar.hollow.background,
                    l =
                      t.size -
                      a * t.series.length -
                      this.margin * t.series.length -
                      (a *
                        parseInt(
                          e.config.plotOptions.radialBar.track.strokeWidth,
                          10
                        )) /
                        100 /
                        2,
                    c = l - e.config.plotOptions.radialBar.hollow.margin;
                  void 0 !== e.config.plotOptions.radialBar.hollow.image &&
                    (s = this.drawHollowImage(t, o, l, s));
                  var d = this.drawHollow({
                    size: c,
                    centerX: t.centerX,
                    centerY: t.centerY,
                    fill: s || "transparent",
                  });
                  if (
                    e.config.plotOptions.radialBar.hollow.dropShadow.enabled
                  ) {
                    var u = e.config.plotOptions.radialBar.hollow.dropShadow;
                    r.dropShadow(d, u);
                  }
                  var p = 1;
                  !this.radialDataLabels.total.show &&
                    e.globals.series.length > 1 &&
                    (p = 0);
                  var h = null;
                  if (this.radialDataLabels.show) {
                    var f = e.globals.dom.Paper.select(
                      ".apexcharts-datalabels-group"
                    ).members[0];
                    h = this.renderInnerDataLabels(f, this.radialDataLabels, {
                      hollowSize: l,
                      centerX: t.centerX,
                      centerY: t.centerY,
                      opacity: p,
                    });
                  }
                  "back" === e.config.plotOptions.radialBar.hollow.position &&
                    (o.add(d), h && o.add(h));
                  var b = !1;
                  e.config.plotOptions.radialBar.inverseOrder && (b = !0);
                  for (
                    var m = b ? t.series.length - 1 : 0;
                    b ? m >= 0 : m < t.series.length;
                    b ? m-- : m++
                  ) {
                    var g = n.group({
                      class: "apexcharts-series apexcharts-radial-series",
                      seriesName: O.escapeString(e.globals.seriesNames[m]),
                    });
                    o.add(g),
                      g.attr({ rel: m + 1, "data:realIndex": m }),
                      this.ctx.series.addCollapsedClassToSeries(g, m),
                      (t.size = t.size - a - this.margin);
                    var v = i.fillPath({
                        seriesNumber: m,
                        size: t.size,
                        value: t.series[m],
                      }),
                      _ = this.startAngle,
                      y = void 0,
                      M =
                        O.negToZero(t.series[m] > 100 ? 100 : t.series[m]) /
                        100,
                      w = Math.round(this.totalAngle * M) + this.startAngle,
                      z = void 0;
                    e.globals.dataChanged &&
                      ((y = this.startAngle),
                      (z =
                        Math.round(
                          (this.totalAngle *
                            O.negToZero(e.globals.previousPaths[m])) /
                            100
                        ) + y)),
                      Math.abs(w) + Math.abs(_) > 360 && (w -= 0.01),
                      Math.abs(z) + Math.abs(y) > 360 && (z -= 0.01);
                    var C = w - _,
                      k = Array.isArray(e.config.stroke.dashArray)
                        ? e.config.stroke.dashArray[m]
                        : e.config.stroke.dashArray,
                      S = n.drawPath({
                        d: "",
                        stroke: v,
                        strokeWidth: a,
                        fill: "none",
                        fillOpacity: e.config.fill.opacity,
                        classes:
                          "apexcharts-radialbar-area apexcharts-radialbar-slice-" +
                          m,
                        strokeDashArray: k,
                      });
                    if (
                      (x.setAttrs(S.node, {
                        "data:angle": C,
                        "data:value": t.series[m],
                      }),
                      e.config.chart.dropShadow.enabled)
                    ) {
                      var T = e.config.chart.dropShadow;
                      r.dropShadow(S, T, m);
                    }
                    if (
                      (r.setSelectionFilter(S, 0, m),
                      this.addListeners(S, this.radialDataLabels),
                      g.add(S),
                      S.attr({ index: 0, j: m }),
                      this.barLabels.enabled)
                    ) {
                      var D = O.polarToCartesian(
                          t.centerX,
                          t.centerY,
                          t.size,
                          _
                        ),
                        L = this.barLabels.formatter(e.globals.seriesNames[m], {
                          seriesIndex: m,
                          w: e,
                        }),
                        q = ["apexcharts-radialbar-label"];
                      this.barLabels.onClick || q.push("apexcharts-no-click");
                      var E = this.barLabels.useSeriesColors
                        ? e.globals.colors[m]
                        : e.config.chart.foreColor;
                      E || (E = e.config.chart.foreColor);
                      var j = D.x + this.barLabels.offsetX,
                        P = D.y + this.barLabels.offsetY,
                        R = n.drawText({
                          x: j,
                          y: P,
                          text: L,
                          textAnchor: "end",
                          dominantBaseline: "middle",
                          fontFamily: this.barLabels.fontFamily,
                          fontWeight: this.barLabels.fontWeight,
                          fontSize: this.barLabels.fontSize,
                          foreColor: E,
                          cssClass: q.join(" "),
                        });
                      R.on("click", this.onBarLabelClick),
                        R.attr({ rel: m + 1 }),
                        0 !== _ &&
                          R.attr({
                            "transform-origin": "".concat(j, " ").concat(P),
                            transform: "rotate(".concat(_, " 0 0)"),
                          }),
                        g.add(R);
                    }
                    var I = 0;
                    !this.initialAnim ||
                      e.globals.resized ||
                      e.globals.dataChanged ||
                      (I = e.config.chart.animations.speed),
                      e.globals.dataChanged &&
                        (I = e.config.chart.animations.dynamicAnimation.speed),
                      (this.animDur =
                        I / (1.2 * t.series.length) + this.animDur),
                      this.animBeginArr.push(this.animDur),
                      this.animatePaths(S, {
                        centerX: t.centerX,
                        centerY: t.centerY,
                        endAngle: w,
                        startAngle: _,
                        prevEndAngle: z,
                        prevStartAngle: y,
                        size: t.size,
                        i: m,
                        totalItems: 2,
                        animBeginArr: this.animBeginArr,
                        dur: I,
                        shouldSetPrevPaths: !0,
                        easing: e.globals.easing,
                      });
                  }
                  return { g: o, elHollow: d, dataLabels: h };
                },
              },
              {
                key: "drawHollow",
                value: function (t) {
                  var e = new x(this.ctx).drawCircle(2 * t.size);
                  return (
                    e.attr({
                      class: "apexcharts-radialbar-hollow",
                      cx: t.centerX,
                      cy: t.centerY,
                      r: t.size,
                      fill: t.fill,
                    }),
                    e
                  );
                },
              },
              {
                key: "drawHollowImage",
                value: function (t, e, n, i) {
                  var r = this.w,
                    o = new H(this.ctx),
                    a = O.randomId(),
                    s = r.config.plotOptions.radialBar.hollow.image;
                  if (r.config.plotOptions.radialBar.hollow.imageClipped)
                    o.clippedImgArea({
                      width: n,
                      height: n,
                      image: s,
                      patternID: "pattern".concat(r.globals.cuid).concat(a),
                    }),
                      (i = "url(#pattern"
                        .concat(r.globals.cuid)
                        .concat(a, ")"));
                  else {
                    var l = r.config.plotOptions.radialBar.hollow.imageWidth,
                      c = r.config.plotOptions.radialBar.hollow.imageHeight;
                    if (void 0 === l && void 0 === c) {
                      var d = r.globals.dom.Paper.image(s).loaded(function (e) {
                        this.move(
                          t.centerX -
                            e.width / 2 +
                            r.config.plotOptions.radialBar.hollow.imageOffsetX,
                          t.centerY -
                            e.height / 2 +
                            r.config.plotOptions.radialBar.hollow.imageOffsetY
                        );
                      });
                      e.add(d);
                    } else {
                      var u = r.globals.dom.Paper.image(s).loaded(function (e) {
                        this.move(
                          t.centerX -
                            l / 2 +
                            r.config.plotOptions.radialBar.hollow.imageOffsetX,
                          t.centerY -
                            c / 2 +
                            r.config.plotOptions.radialBar.hollow.imageOffsetY
                        ),
                          this.size(l, c);
                      });
                      e.add(u);
                    }
                  }
                  return i;
                },
              },
              {
                key: "getStrokeWidth",
                value: function (t) {
                  var e = this.w;
                  return (
                    (t.size *
                      (100 -
                        parseInt(
                          e.config.plotOptions.radialBar.hollow.size,
                          10
                        ))) /
                      100 /
                      (t.series.length + 1) -
                    this.margin
                  );
                },
              },
              {
                key: "onBarLabelClick",
                value: function (t) {
                  var e = parseInt(t.target.getAttribute("rel"), 10) - 1,
                    n = this.barLabels.onClick,
                    i = this.w;
                  n && n(i.globals.seriesNames[e], { w: i, seriesIndex: e });
                },
              },
            ]),
            n
          );
        })(qt),
        Pt = (function (t) {
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
                  var n = this.w,
                    i = new x(this.ctx);
                  (this.rangeBarOptions = this.w.config.plotOptions.rangeBar),
                    (this.series = t),
                    (this.seriesRangeStart = n.globals.seriesRangeStart),
                    (this.seriesRangeEnd = n.globals.seriesRangeEnd),
                    this.barHelpers.initVariables(t);
                  for (
                    var r = i.group({
                        class:
                          "apexcharts-rangebar-series apexcharts-plot-series",
                      }),
                      o = 0;
                    o < t.length;
                    o++
                  ) {
                    var a,
                      s,
                      l,
                      c,
                      d = void 0,
                      u = void 0,
                      p = n.globals.comboCharts ? e[o] : o,
                      h = this.barHelpers.getGroupIndex(p).columnGroupIndex,
                      f = i.group({
                        class: "apexcharts-series",
                        seriesName: O.escapeString(n.globals.seriesNames[p]),
                        rel: o + 1,
                        "data:realIndex": p,
                      });
                    this.ctx.series.addCollapsedClassToSeries(f, p),
                      t[o].length > 0 && (this.visibleI = this.visibleI + 1);
                    var m = 0,
                      g = 0,
                      v = 0;
                    this.yRatio.length > 1 &&
                      ((this.yaxisIndex =
                        n.globals.seriesYAxisReverseMap[p][0]),
                      (v = p));
                    var _ = this.barHelpers.initialPositions();
                    (u = _.y),
                      (c = _.zeroW),
                      (d = _.x),
                      (g = _.barWidth),
                      (m = _.barHeight),
                      (a = _.xDivision),
                      (s = _.yDivision),
                      (l = _.zeroH);
                    for (
                      var y = i.group({
                          class: "apexcharts-datalabels",
                          "data:realIndex": p,
                        }),
                        M = i.group({
                          class: "apexcharts-rangebar-goals-markers",
                        }),
                        w = 0;
                      w < n.globals.dataPoints;
                      w++
                    ) {
                      var A = this.barHelpers.getStrokeWidth(o, w, p),
                        z = this.seriesRangeStart[o][w],
                        C = this.seriesRangeEnd[o][w],
                        k = null,
                        S = null,
                        T = null,
                        D = { x: d, y: u, strokeWidth: A, elSeries: f },
                        L = this.seriesLen;
                      if (
                        (n.config.plotOptions.bar.rangeBarGroupRows && (L = 1),
                        void 0 === n.config.series[o].data[w])
                      )
                        break;
                      if (this.isHorizontal) {
                        T = u + m * this.visibleI;
                        var q = (s - m * L) / 2;
                        if (n.config.series[o].data[w].x) {
                          var E = this.detectOverlappingBars({
                            i: o,
                            j: w,
                            barYPosition: T,
                            srty: q,
                            barHeight: m,
                            yDivision: s,
                            initPositions: _,
                          });
                          (m = E.barHeight), (T = E.barYPosition);
                        }
                        g = (k = this.drawRangeBarPaths(
                          b(
                            {
                              indexes: { i: o, j: w, realIndex: p },
                              barHeight: m,
                              barYPosition: T,
                              zeroW: c,
                              yDivision: s,
                              y1: z,
                              y2: C,
                            },
                            D
                          )
                        )).barWidth;
                      } else {
                        n.globals.isXNumeric &&
                          (d =
                            (n.globals.seriesX[o][w] - n.globals.minX) /
                              this.xRatio -
                            g / 2),
                          (S = d + g * this.visibleI);
                        var j = (a - g * L) / 2;
                        if (n.config.series[o].data[w].x) {
                          var P = this.detectOverlappingBars({
                            i: o,
                            j: w,
                            barXPosition: S,
                            srtx: j,
                            barWidth: g,
                            xDivision: a,
                            initPositions: _,
                          });
                          (g = P.barWidth), (S = P.barXPosition);
                        }
                        m = (k = this.drawRangeColumnPaths(
                          b(
                            {
                              indexes: {
                                i: o,
                                j: w,
                                realIndex: p,
                                translationsIndex: v,
                              },
                              barWidth: g,
                              barXPosition: S,
                              zeroH: l,
                              xDivision: a,
                            },
                            D
                          )
                        )).barHeight;
                      }
                      var R = this.barHelpers.drawGoalLine({
                        barXPosition: k.barXPosition,
                        barYPosition: T,
                        goalX: k.goalX,
                        goalY: k.goalY,
                        barHeight: m,
                        barWidth: g,
                      });
                      R && M.add(R), (u = k.y), (d = k.x);
                      var I = this.barHelpers.getPathFillColor(t, o, w, p),
                        W = n.globals.stroke.colors[p];
                      this.renderSeries({
                        realIndex: p,
                        pathFill: I,
                        lineFill: W,
                        j: w,
                        i: o,
                        x: d,
                        y: u,
                        y1: z,
                        y2: C,
                        pathFrom: k.pathFrom,
                        pathTo: k.pathTo,
                        strokeWidth: A,
                        elSeries: f,
                        series: t,
                        barHeight: m,
                        barWidth: g,
                        barXPosition: S,
                        barYPosition: T,
                        columnGroupIndex: h,
                        elDataLabelsWrap: y,
                        elGoalsMarkers: M,
                        visibleSeries: this.visibleI,
                        type: "rangebar",
                      });
                    }
                    r.add(f);
                  }
                  return r;
                },
              },
              {
                key: "detectOverlappingBars",
                value: function (t) {
                  var e = t.i,
                    n = t.j,
                    i = t.barYPosition,
                    r = t.barXPosition,
                    o = t.srty,
                    a = t.srtx,
                    s = t.barHeight,
                    l = t.barWidth,
                    c = t.yDivision,
                    d = t.xDivision,
                    u = t.initPositions,
                    p = this.w,
                    h = [],
                    f = p.config.series[e].data[n].rangeName,
                    b = p.config.series[e].data[n].x,
                    m = Array.isArray(b) ? b.join(" ") : b,
                    g = p.globals.labels
                      .map(function (t) {
                        return Array.isArray(t) ? t.join(" ") : t;
                      })
                      .indexOf(m),
                    v = p.globals.seriesRange[e].findIndex(function (t) {
                      return t.x === m && t.overlaps.length > 0;
                    });
                  return (
                    this.isHorizontal
                      ? ((i = p.config.plotOptions.bar.rangeBarGroupRows
                          ? o + c * g
                          : o + s * this.visibleI + c * g),
                        v > -1 &&
                          !p.config.plotOptions.bar.rangeBarOverlap &&
                          (h = p.globals.seriesRange[e][v].overlaps).indexOf(
                            f
                          ) > -1 &&
                          (i =
                            (s = u.barHeight / h.length) * this.visibleI +
                            (c *
                              (100 - parseInt(this.barOptions.barHeight, 10))) /
                              100 /
                              2 +
                            s * (this.visibleI + h.indexOf(f)) +
                            c * g))
                      : (g > -1 &&
                          !p.globals.timescaleLabels.length &&
                          (r = p.config.plotOptions.bar.rangeBarGroupRows
                            ? a + d * g
                            : a + l * this.visibleI + d * g),
                        v > -1 &&
                          !p.config.plotOptions.bar.rangeBarOverlap &&
                          (h = p.globals.seriesRange[e][v].overlaps).indexOf(
                            f
                          ) > -1 &&
                          (r =
                            (l = u.barWidth / h.length) * this.visibleI +
                            (d *
                              (100 - parseInt(this.barOptions.barWidth, 10))) /
                              100 /
                              2 +
                            l * (this.visibleI + h.indexOf(f)) +
                            d * g)),
                    {
                      barYPosition: i,
                      barXPosition: r,
                      barHeight: s,
                      barWidth: l,
                    }
                  );
                },
              },
              {
                key: "drawRangeColumnPaths",
                value: function (t) {
                  var e = t.indexes,
                    n = t.x,
                    i = t.xDivision,
                    r = t.barWidth,
                    o = t.barXPosition,
                    a = t.zeroH,
                    s = this.w,
                    l = e.i,
                    c = e.j,
                    d = e.realIndex,
                    u = e.translationsIndex,
                    p = this.yRatio[u],
                    h = this.getRangeValue(d, c),
                    f = Math.min(h.start, h.end),
                    b = Math.max(h.start, h.end);
                  void 0 === this.series[l][c] || null === this.series[l][c]
                    ? (f = a)
                    : ((f = a - f / p), (b = a - b / p));
                  var m = Math.abs(b - f),
                    g = this.barHelpers.getColumnPaths({
                      barXPosition: o,
                      barWidth: r,
                      y1: f,
                      y2: b,
                      strokeWidth: this.strokeWidth,
                      series: this.seriesRangeEnd,
                      realIndex: d,
                      i: d,
                      j: c,
                      w: s,
                    });
                  if (s.globals.isXNumeric) {
                    var v = this.getBarXForNumericXAxis({
                      x: n,
                      j: c,
                      realIndex: d,
                      barWidth: r,
                    });
                    (n = v.x), (o = v.barXPosition);
                  } else n += i;
                  return {
                    pathTo: g.pathTo,
                    pathFrom: g.pathFrom,
                    barHeight: m,
                    x: n,
                    y: h.start < 0 && h.end < 0 ? f : b,
                    goalY: this.barHelpers.getGoalValues("y", null, a, l, c, u),
                    barXPosition: o,
                  };
                },
              },
              {
                key: "preventBarOverflow",
                value: function (t) {
                  var e = this.w;
                  return (
                    t < 0 && (t = 0),
                    t > e.globals.gridWidth && (t = e.globals.gridWidth),
                    t
                  );
                },
              },
              {
                key: "drawRangeBarPaths",
                value: function (t) {
                  var e = t.indexes,
                    n = t.y,
                    i = t.y1,
                    r = t.y2,
                    o = t.yDivision,
                    a = t.barHeight,
                    s = t.barYPosition,
                    l = t.zeroW,
                    c = this.w,
                    d = e.realIndex,
                    u = e.j,
                    p = this.preventBarOverflow(l + i / this.invertedYRatio),
                    h = this.preventBarOverflow(l + r / this.invertedYRatio),
                    f = this.getRangeValue(d, u),
                    b = Math.abs(h - p),
                    m = this.barHelpers.getBarpaths({
                      barYPosition: s,
                      barHeight: a,
                      x1: p,
                      x2: h,
                      strokeWidth: this.strokeWidth,
                      series: this.seriesRangeEnd,
                      i: d,
                      realIndex: d,
                      j: u,
                      w: c,
                    });
                  return (
                    c.globals.isXNumeric || (n += o),
                    {
                      pathTo: m.pathTo,
                      pathFrom: m.pathFrom,
                      barWidth: b,
                      x: f.start < 0 && f.end < 0 ? p : h,
                      goalX: this.barHelpers.getGoalValues("x", l, null, d, u),
                      y: n,
                    }
                  );
                },
              },
              {
                key: "getRangeValue",
                value: function (t, e) {
                  var n = this.w;
                  return {
                    start: n.globals.seriesRangeStart[t][e],
                    end: n.globals.seriesRangeEnd[t][e],
                  };
                },
              },
            ]),
            n
          );
        })(Ct),
        Rt = (function () {
          function t(e) {
            a(this, t), (this.w = e.w), (this.lineCtx = e);
          }
          return (
            l(t, [
              {
                key: "sameValueSeriesFix",
                value: function (t, e) {
                  var n = this.w;
                  if (
                    ("gradient" === n.config.fill.type ||
                      "gradient" === n.config.fill.type[t]) &&
                    new z(this.lineCtx.ctx, n).seriesHaveSameValues(t)
                  ) {
                    var i = e[t].slice();
                    (i[i.length - 1] = i[i.length - 1] + 1e-6), (e[t] = i);
                  }
                  return e;
                },
              },
              {
                key: "calculatePoints",
                value: function (t) {
                  var e = t.series,
                    n = t.realIndex,
                    i = t.x,
                    r = t.y,
                    o = t.i,
                    a = t.j,
                    s = t.prevY,
                    l = this.w,
                    c = [],
                    d = [];
                  if (0 === a) {
                    var u =
                      this.lineCtx.categoryAxisCorrection +
                      l.config.markers.offsetX;
                    l.globals.isXNumeric &&
                      (u =
                        (l.globals.seriesX[n][0] - l.globals.minX) /
                          this.lineCtx.xRatio +
                        l.config.markers.offsetX),
                      c.push(u),
                      d.push(
                        O.isNumber(e[o][0])
                          ? s + l.config.markers.offsetY
                          : null
                      ),
                      c.push(i + l.config.markers.offsetX),
                      d.push(
                        O.isNumber(e[o][a + 1])
                          ? r + l.config.markers.offsetY
                          : null
                      );
                  } else
                    c.push(i + l.config.markers.offsetX),
                      d.push(
                        O.isNumber(e[o][a + 1])
                          ? r + l.config.markers.offsetY
                          : null
                      );
                  return { x: c, y: d };
                },
              },
              {
                key: "checkPreviousPaths",
                value: function (t) {
                  for (
                    var e = t.pathFromLine,
                      n = t.pathFromArea,
                      i = t.realIndex,
                      r = this.w,
                      o = 0;
                    o < r.globals.previousPaths.length;
                    o++
                  ) {
                    var a = r.globals.previousPaths[o];
                    ("line" === a.type || "area" === a.type) &&
                      a.paths.length > 0 &&
                      parseInt(a.realIndex, 10) === parseInt(i, 10) &&
                      ("line" === a.type
                        ? ((this.lineCtx.appendPathFrom = !1),
                          (e = r.globals.previousPaths[o].paths[0].d))
                        : "area" === a.type &&
                          ((this.lineCtx.appendPathFrom = !1),
                          (n = r.globals.previousPaths[o].paths[0].d),
                          r.config.stroke.show &&
                            r.globals.previousPaths[o].paths[1] &&
                            (e = r.globals.previousPaths[o].paths[1].d)));
                  }
                  return { pathFromLine: e, pathFromArea: n };
                },
              },
              {
                key: "determineFirstPrevY",
                value: function (t) {
                  var e,
                    n,
                    i,
                    r = t.i,
                    o = t.realIndex,
                    a = t.series,
                    s = t.prevY,
                    l = t.lineYPosition,
                    c = t.translationsIndex,
                    d = this.w,
                    u =
                      (d.config.chart.stacked && !d.globals.comboCharts) ||
                      (d.config.chart.stacked &&
                        d.globals.comboCharts &&
                        (!this.w.config.chart.stackOnlyBar ||
                          "bar" ===
                            (null === (e = this.w.config.series[o]) ||
                            void 0 === e
                              ? void 0
                              : e.type) ||
                          "column" ===
                            (null === (n = this.w.config.series[o]) ||
                            void 0 === n
                              ? void 0
                              : n.type)));
                  if (
                    void 0 !==
                    (null === (i = a[r]) || void 0 === i ? void 0 : i[0])
                  )
                    s =
                      (l =
                        u && r > 0
                          ? this.lineCtx.prevSeriesY[r - 1][0]
                          : this.lineCtx.zeroY) -
                      a[r][0] / this.lineCtx.yRatio[c] +
                      2 *
                        (this.lineCtx.isReversed
                          ? a[r][0] / this.lineCtx.yRatio[c]
                          : 0);
                  else if (u && r > 0 && void 0 === a[r][0])
                    for (var p = r - 1; p >= 0; p--)
                      if (null !== a[p][0] && void 0 !== a[p][0]) {
                        s = l = this.lineCtx.prevSeriesY[p][0];
                        break;
                      }
                  return { prevY: s, lineYPosition: l };
                },
              },
            ]),
            t
          );
        })(),
        It = function (t, e, n) {
          var i = t.slice(e, n);
          if (e) {
            if (n - e > 1 && i[1].length < 6) {
              var r = i[0].length;
              i[1] = [
                2 * i[0][r - 2] - i[0][r - 4],
                2 * i[0][r - 1] - i[0][r - 3],
              ].concat(i[1]);
            }
            i[0] = i[0].slice(-2);
          }
          return i;
        };
      function Wt(t, e) {
        return (e[1] - t[1]) / (e[0] - t[0]);
      }
      var Nt = (function () {
        function t(e, n, i) {
          a(this, t),
            (this.ctx = e),
            (this.w = e.w),
            (this.xyRatios = n),
            (this.pointsChart =
              !(
                "bubble" !== this.w.config.chart.type &&
                "scatter" !== this.w.config.chart.type
              ) || i),
            (this.scatter = new U(this.ctx)),
            (this.noNegatives = this.w.globals.minX === Number.MAX_VALUE),
            (this.lineHelpers = new Rt(this)),
            (this.markers = new Y(this.ctx)),
            (this.prevSeriesY = []),
            (this.categoryAxisCorrection = 0),
            (this.yaxisIndex = 0);
        }
        return (
          l(t, [
            {
              key: "draw",
              value: function (t, e, n, i) {
                var r,
                  o = this.w,
                  a = new x(this.ctx),
                  s = o.globals.comboCharts ? e : o.config.chart.type,
                  l = a.group({
                    class: "apexcharts-".concat(
                      s,
                      "-series apexcharts-plot-series"
                    ),
                  }),
                  c = new z(this.ctx, o);
                (this.yRatio = this.xyRatios.yRatio),
                  (this.zRatio = this.xyRatios.zRatio),
                  (this.xRatio = this.xyRatios.xRatio),
                  (this.baseLineY = this.xyRatios.baseLineY),
                  (t = c.getLogSeries(t)),
                  (this.yRatio = c.getLogYRatios(this.yRatio)),
                  (this.prevSeriesY = []);
                for (var d = [], u = 0; u < t.length; u++) {
                  t = this.lineHelpers.sameValueSeriesFix(u, t);
                  var p = o.globals.comboCharts ? n[u] : u,
                    h = this.yRatio.length > 1 ? p : 0;
                  this._initSerieVariables(t, u, p);
                  var f = [],
                    m = [],
                    g = [],
                    v = o.globals.padHorizontal + this.categoryAxisCorrection;
                  this.ctx.series.addCollapsedClassToSeries(this.elSeries, p),
                    o.globals.isXNumeric &&
                      o.globals.seriesX.length > 0 &&
                      (v =
                        (o.globals.seriesX[p][0] - o.globals.minX) /
                        this.xRatio),
                    g.push(v);
                  var _,
                    y = v,
                    M = void 0,
                    O = y,
                    w = this.zeroY,
                    A = this.zeroY;
                  (w = this.lineHelpers.determineFirstPrevY({
                    i: u,
                    realIndex: p,
                    series: t,
                    prevY: w,
                    lineYPosition: 0,
                    translationsIndex: h,
                  }).prevY),
                    "monotoneCubic" === o.config.stroke.curve &&
                    null === t[u][0]
                      ? f.push(null)
                      : f.push(w),
                    (_ = w),
                    "rangeArea" === s &&
                      ((M = A =
                        this.lineHelpers.determineFirstPrevY({
                          i: u,
                          realIndex: p,
                          series: i,
                          prevY: A,
                          lineYPosition: 0,
                          translationsIndex: h,
                        }).prevY),
                      m.push(null !== f[0] ? A : null));
                  var C = this._calculatePathsFrom({
                      type: s,
                      series: t,
                      i: u,
                      realIndex: p,
                      translationsIndex: h,
                      prevX: O,
                      prevY: w,
                      prevY2: A,
                    }),
                    k = [f[0]],
                    S = [m[0]],
                    T = {
                      type: s,
                      series: t,
                      realIndex: p,
                      translationsIndex: h,
                      i: u,
                      x: v,
                      y: 1,
                      pX: y,
                      pY: _,
                      pathsFrom: C,
                      linePaths: [],
                      areaPaths: [],
                      seriesIndex: n,
                      lineYPosition: 0,
                      xArrj: g,
                      yArrj: f,
                      y2Arrj: m,
                      seriesRangeEnd: i,
                    },
                    D = this._iterateOverDataPoints(
                      b(
                        b({}, T),
                        {},
                        {
                          iterations:
                            "rangeArea" === s ? t[u].length - 1 : void 0,
                          isRangeStart: !0,
                        }
                      )
                    );
                  if ("rangeArea" === s) {
                    for (
                      var L = this._calculatePathsFrom({
                          series: i,
                          i: u,
                          realIndex: p,
                          prevX: O,
                          prevY: A,
                        }),
                        q = this._iterateOverDataPoints(
                          b(
                            b({}, T),
                            {},
                            {
                              series: i,
                              xArrj: [v],
                              yArrj: k,
                              y2Arrj: S,
                              pY: M,
                              areaPaths: D.areaPaths,
                              pathsFrom: L,
                              iterations: i[u].length - 1,
                              isRangeStart: !1,
                            }
                          )
                        ),
                        E = D.linePaths.length / 2,
                        j = 0;
                      j < E;
                      j++
                    )
                      D.linePaths[j] = q.linePaths[j + E] + D.linePaths[j];
                    D.linePaths.splice(E),
                      (D.pathFromLine = q.pathFromLine + D.pathFromLine);
                  } else D.pathFromArea += "z";
                  this._handlePaths({ type: s, realIndex: p, i: u, paths: D }),
                    this.elSeries.add(this.elPointsMain),
                    this.elSeries.add(this.elDataLabelsWrap),
                    d.push(this.elSeries);
                }
                if (
                  (void 0 !==
                    (null === (r = o.config.series[0]) || void 0 === r
                      ? void 0
                      : r.zIndex) &&
                    d.sort(function (t, e) {
                      return (
                        Number(t.node.getAttribute("zIndex")) -
                        Number(e.node.getAttribute("zIndex"))
                      );
                    }),
                  o.config.chart.stacked)
                )
                  for (var P = d.length - 1; P >= 0; P--) l.add(d[P]);
                else for (var R = 0; R < d.length; R++) l.add(d[R]);
                return l;
              },
            },
            {
              key: "_initSerieVariables",
              value: function (t, e, n) {
                var i = this.w,
                  r = new x(this.ctx);
                (this.xDivision =
                  i.globals.gridWidth /
                  (i.globals.dataPoints -
                    ("on" === i.config.xaxis.tickPlacement ? 1 : 0))),
                  (this.strokeWidth = Array.isArray(i.config.stroke.width)
                    ? i.config.stroke.width[n]
                    : i.config.stroke.width);
                var o = 0;
                this.yRatio.length > 1 &&
                  ((this.yaxisIndex = i.globals.seriesYAxisReverseMap[n]),
                  (o = n)),
                  (this.isReversed =
                    i.config.yaxis[this.yaxisIndex] &&
                    i.config.yaxis[this.yaxisIndex].reversed),
                  (this.zeroY =
                    i.globals.gridHeight -
                    this.baseLineY[o] -
                    (this.isReversed ? i.globals.gridHeight : 0) +
                    (this.isReversed ? 2 * this.baseLineY[o] : 0)),
                  (this.areaBottomY = this.zeroY),
                  (this.zeroY > i.globals.gridHeight ||
                    "end" === i.config.plotOptions.area.fillTo) &&
                    (this.areaBottomY = i.globals.gridHeight),
                  (this.categoryAxisCorrection = this.xDivision / 2),
                  (this.elSeries = r.group({
                    class: "apexcharts-series",
                    zIndex:
                      void 0 !== i.config.series[n].zIndex
                        ? i.config.series[n].zIndex
                        : n,
                    seriesName: O.escapeString(i.globals.seriesNames[n]),
                  })),
                  (this.elPointsMain = r.group({
                    class: "apexcharts-series-markers-wrap",
                    "data:realIndex": n,
                  })),
                  (this.elDataLabelsWrap = r.group({
                    class: "apexcharts-datalabels",
                    "data:realIndex": n,
                  }));
                var a = t[e].length === i.globals.dataPoints;
                this.elSeries.attr({
                  "data:longestSeries": a,
                  rel: e + 1,
                  "data:realIndex": n,
                }),
                  (this.appendPathFrom = !0);
              },
            },
            {
              key: "_calculatePathsFrom",
              value: function (t) {
                var e,
                  n,
                  i,
                  r,
                  o = t.type,
                  a = t.series,
                  s = t.i,
                  l = t.realIndex,
                  c = t.translationsIndex,
                  d = t.prevX,
                  u = t.prevY,
                  p = t.prevY2,
                  h = this.w,
                  f = new x(this.ctx);
                if (null === a[s][0]) {
                  for (var b = 0; b < a[s].length; b++)
                    if (null !== a[s][b]) {
                      (d = this.xDivision * b),
                        (u = this.zeroY - a[s][b] / this.yRatio[c]),
                        (e = f.move(d, u)),
                        (n = f.move(d, this.areaBottomY));
                      break;
                    }
                } else
                  (e = f.move(d, u)),
                    "rangeArea" === o && (e = f.move(d, p) + f.line(d, u)),
                    (n = f.move(d, this.areaBottomY) + f.line(d, u));
                if (
                  ((i = f.move(0, this.zeroY) + f.line(0, this.zeroY)),
                  (r = f.move(0, this.zeroY) + f.line(0, this.zeroY)),
                  h.globals.previousPaths.length > 0)
                ) {
                  var m = this.lineHelpers.checkPreviousPaths({
                    pathFromLine: i,
                    pathFromArea: r,
                    realIndex: l,
                  });
                  (i = m.pathFromLine), (r = m.pathFromArea);
                }
                return {
                  prevX: d,
                  prevY: u,
                  linePath: e,
                  areaPath: n,
                  pathFromLine: i,
                  pathFromArea: r,
                };
              },
            },
            {
              key: "_handlePaths",
              value: function (t) {
                var e = t.type,
                  n = t.realIndex,
                  i = t.i,
                  r = t.paths,
                  o = this.w,
                  a = new x(this.ctx),
                  s = new H(this.ctx);
                this.prevSeriesY.push(r.yArrj),
                  (o.globals.seriesXvalues[n] = r.xArrj),
                  (o.globals.seriesYvalues[n] = r.yArrj);
                var l = o.config.forecastDataPoints;
                if (l.count > 0 && "rangeArea" !== e) {
                  var c =
                      o.globals.seriesXvalues[n][
                        o.globals.seriesXvalues[n].length - l.count - 1
                      ],
                    d = a.drawRect(
                      c,
                      0,
                      o.globals.gridWidth,
                      o.globals.gridHeight,
                      0
                    );
                  o.globals.dom.elForecastMask.appendChild(d.node);
                  var u = a.drawRect(0, 0, c, o.globals.gridHeight, 0);
                  o.globals.dom.elNonForecastMask.appendChild(u.node);
                }
                this.pointsChart ||
                  o.globals.delayedElements.push({
                    el: this.elPointsMain.node,
                    index: n,
                  });
                var p = {
                  i: i,
                  realIndex: n,
                  animationDelay: i,
                  initialSpeed: o.config.chart.animations.speed,
                  dataChangeSpeed:
                    o.config.chart.animations.dynamicAnimation.speed,
                  className: "apexcharts-".concat(e),
                };
                if ("area" === e)
                  for (
                    var h = s.fillPath({ seriesNumber: n }), f = 0;
                    f < r.areaPaths.length;
                    f++
                  ) {
                    var m = a.renderPaths(
                      b(
                        b({}, p),
                        {},
                        {
                          pathFrom: r.pathFromArea,
                          pathTo: r.areaPaths[f],
                          stroke: "none",
                          strokeWidth: 0,
                          strokeLineCap: null,
                          fill: h,
                        }
                      )
                    );
                    this.elSeries.add(m);
                  }
                if (o.config.stroke.show && !this.pointsChart) {
                  var g = null;
                  if ("line" === e) g = s.fillPath({ seriesNumber: n, i: i });
                  else if ("solid" === o.config.stroke.fill.type)
                    g = o.globals.stroke.colors[n];
                  else {
                    var v = o.config.fill;
                    (o.config.fill = o.config.stroke.fill),
                      (g = s.fillPath({ seriesNumber: n, i: i })),
                      (o.config.fill = v);
                  }
                  for (var _ = 0; _ < r.linePaths.length; _++) {
                    var y = g;
                    "rangeArea" === e && (y = s.fillPath({ seriesNumber: n }));
                    var M = b(
                        b({}, p),
                        {},
                        {
                          pathFrom: r.pathFromLine,
                          pathTo: r.linePaths[_],
                          stroke: g,
                          strokeWidth: this.strokeWidth,
                          strokeLineCap: o.config.stroke.lineCap,
                          fill: "rangeArea" === e ? y : "none",
                        }
                      ),
                      O = a.renderPaths(M);
                    if (
                      (this.elSeries.add(O),
                      O.attr("fill-rule", "evenodd"),
                      l.count > 0 && "rangeArea" !== e)
                    ) {
                      var w = a.renderPaths(M);
                      w.node.setAttribute("stroke-dasharray", l.dashArray),
                        l.strokeWidth &&
                          w.node.setAttribute("stroke-width", l.strokeWidth),
                        this.elSeries.add(w),
                        w.attr(
                          "clip-path",
                          "url(#forecastMask".concat(o.globals.cuid, ")")
                        ),
                        O.attr(
                          "clip-path",
                          "url(#nonForecastMask".concat(o.globals.cuid, ")")
                        );
                    }
                  }
                }
              },
            },
            {
              key: "_iterateOverDataPoints",
              value: function (t) {
                var e,
                  n,
                  i = this,
                  r = t.type,
                  o = t.series,
                  a = t.iterations,
                  s = t.realIndex,
                  l = t.translationsIndex,
                  c = t.i,
                  d = t.x,
                  u = t.y,
                  p = t.pX,
                  h = t.pY,
                  f = t.pathsFrom,
                  b = t.linePaths,
                  m = t.areaPaths,
                  g = t.seriesIndex,
                  v = t.lineYPosition,
                  _ = t.xArrj,
                  y = t.yArrj,
                  M = t.y2Arrj,
                  w = t.isRangeStart,
                  A = t.seriesRangeEnd,
                  z = this.w,
                  C = new x(this.ctx),
                  k = this.yRatio,
                  S = f.prevY,
                  T = f.linePath,
                  D = f.areaPath,
                  L = f.pathFromLine,
                  q = f.pathFromArea,
                  E = O.isNumber(z.globals.minYArr[s])
                    ? z.globals.minYArr[s]
                    : z.globals.minY;
                a ||
                  (a =
                    z.globals.dataPoints > 1
                      ? z.globals.dataPoints - 1
                      : z.globals.dataPoints);
                var j = function (t, e) {
                    return e - t / k[l] + 2 * (i.isReversed ? t / k[l] : 0);
                  },
                  P = u,
                  R =
                    (z.config.chart.stacked && !z.globals.comboCharts) ||
                    (z.config.chart.stacked &&
                      z.globals.comboCharts &&
                      (!this.w.config.chart.stackOnlyBar ||
                        "bar" ===
                          (null === (e = this.w.config.series[s]) ||
                          void 0 === e
                            ? void 0
                            : e.type) ||
                        "column" ===
                          (null === (n = this.w.config.series[s]) ||
                          void 0 === n
                            ? void 0
                            : n.type))),
                  I = z.config.stroke.curve;
                Array.isArray(I) && (I = Array.isArray(g) ? I[g[c]] : I[c]);
                for (var W, N = 0, B = 0; B < a; B++) {
                  var F = void 0 === o[c][B + 1] || null === o[c][B + 1];
                  if (z.globals.isXNumeric) {
                    var $ = z.globals.seriesX[s][B + 1];
                    void 0 === z.globals.seriesX[s][B + 1] &&
                      ($ = z.globals.seriesX[s][a - 1]),
                      (d = ($ - z.globals.minX) / this.xRatio);
                  } else d += this.xDivision;
                  (v =
                    R &&
                    c > 0 &&
                    z.globals.collapsedSeries.length <
                      z.config.series.length - 1
                      ? this.prevSeriesY[
                          (function (t) {
                            for (var e = t; e > 0; e--) {
                              if (
                                !(
                                  z.globals.collapsedSeriesIndices.indexOf(
                                    (null == g ? void 0 : g[e]) || e
                                  ) > -1
                                )
                              )
                                return e;
                              e--;
                            }
                            return 0;
                          })(c - 1)
                        ][B + 1]
                      : this.zeroY),
                    F
                      ? (u = j(E, v))
                      : ((u = j(o[c][B + 1], v)),
                        "rangeArea" === r && (P = j(A[c][B + 1], v))),
                    _.push(d),
                    !F ||
                    ("smooth" !== z.config.stroke.curve &&
                      "monotoneCubic" !== z.config.stroke.curve)
                      ? (y.push(u), M.push(P))
                      : (y.push(null), M.push(null));
                  var H = this.lineHelpers.calculatePoints({
                      series: o,
                      x: d,
                      y: u,
                      realIndex: s,
                      i: c,
                      j: B,
                      prevY: S,
                    }),
                    Y = this._createPaths({
                      type: r,
                      series: o,
                      i: c,
                      realIndex: s,
                      j: B,
                      x: d,
                      y: u,
                      y2: P,
                      xArrj: _,
                      yArrj: y,
                      y2Arrj: M,
                      pX: p,
                      pY: h,
                      pathState: N,
                      segmentStartX: W,
                      linePath: T,
                      areaPath: D,
                      linePaths: b,
                      areaPaths: m,
                      curve: I,
                      isRangeStart: w,
                    });
                  (m = Y.areaPaths),
                    (b = Y.linePaths),
                    (p = Y.pX),
                    (h = Y.pY),
                    (N = Y.pathState),
                    (W = Y.segmentStartX),
                    (D = Y.areaPath),
                    (T = Y.linePath),
                    !this.appendPathFrom ||
                      ("monotoneCubic" === I && "rangeArea" === r) ||
                      ((L += C.line(d, this.zeroY)),
                      (q += C.line(d, this.zeroY))),
                    this.handleNullDataPoints(o, H, c, B, s),
                    this._handleMarkersAndLabels({
                      type: r,
                      pointsPos: H,
                      i: c,
                      j: B,
                      realIndex: s,
                      isRangeStart: w,
                    });
                }
                return {
                  yArrj: y,
                  xArrj: _,
                  pathFromArea: q,
                  areaPaths: m,
                  pathFromLine: L,
                  linePaths: b,
                  linePath: T,
                  areaPath: D,
                };
              },
            },
            {
              key: "_handleMarkersAndLabels",
              value: function (t) {
                var e = t.type,
                  n = t.pointsPos,
                  i = t.isRangeStart,
                  r = t.i,
                  o = t.j,
                  a = t.realIndex,
                  s = this.w,
                  l = new X(this.ctx);
                if (this.pointsChart)
                  this.scatter.draw(this.elSeries, o, {
                    realIndex: a,
                    pointsPos: n,
                    zRatio: this.zRatio,
                    elParent: this.elPointsMain,
                  });
                else {
                  s.globals.series[r].length > 1 &&
                    this.elPointsMain.node.classList.add(
                      "apexcharts-element-hidden"
                    );
                  var c = this.markers.plotChartMarkers(n, a, o + 1);
                  null !== c && this.elPointsMain.add(c);
                }
                var d = l.drawDataLabel({
                  type: e,
                  isRangeStart: i,
                  pos: n,
                  i: a,
                  j: o + 1,
                });
                null !== d && this.elDataLabelsWrap.add(d);
              },
            },
            {
              key: "_createPaths",
              value: function (t) {
                var e = t.type,
                  n = t.series,
                  i = t.i;
                t.realIndex;
                var r,
                  o = t.j,
                  a = t.x,
                  s = t.y,
                  l = t.xArrj,
                  c = t.yArrj,
                  d = t.y2,
                  u = t.y2Arrj,
                  p = t.pX,
                  h = t.pY,
                  f = t.pathState,
                  b = t.segmentStartX,
                  m = t.linePath,
                  g = t.areaPath,
                  v = t.linePaths,
                  _ = t.areaPaths,
                  y = t.curve,
                  M = t.isRangeStart,
                  O = new x(this.ctx),
                  w = this.areaBottomY,
                  A = "rangeArea" === e,
                  z = "rangeArea" === e && M;
                switch (y) {
                  case "monotoneCubic":
                    var C = M ? c : u;
                    switch (f) {
                      case 0:
                        if (null === C[o + 1]) break;
                        f = 1;
                      case 1:
                        if (
                          !(A
                            ? l.length === n[i].length
                            : o === n[i].length - 2)
                        )
                          break;
                      case 2:
                        var k = M ? l : l.slice().reverse(),
                          S = M ? C : C.slice().reverse(),
                          T =
                            ((r = S),
                            k
                              .map(function (t, e) {
                                return [t, r[e]];
                              })
                              .filter(function (t) {
                                return null !== t[1];
                              })),
                          D =
                            T.length > 1
                              ? (function (t) {
                                  var e = (function (t) {
                                      for (
                                        var e,
                                          n,
                                          i,
                                          r,
                                          o = (function (t) {
                                            for (
                                              var e = [],
                                                n = t[0],
                                                i = t[1],
                                                r = (e[0] = Wt(n, i)),
                                                o = 1,
                                                a = t.length - 1;
                                              o < a;
                                              o++
                                            )
                                              (n = i),
                                                (i = t[o + 1]),
                                                (e[o] =
                                                  0.5 * (r + (r = Wt(n, i))));
                                            return (e[o] = r), e;
                                          })(t),
                                          a = t.length - 1,
                                          s = [],
                                          l = 0;
                                        l < a;
                                        l++
                                      )
                                        (i = Wt(t[l], t[l + 1])),
                                          Math.abs(i) < 1e-6
                                            ? (o[l] = o[l + 1] = 0)
                                            : (r =
                                                (e = o[l] / i) * e +
                                                (n = o[l + 1] / i) * n) > 9 &&
                                              ((r = (3 * i) / Math.sqrt(r)),
                                              (o[l] = r * e),
                                              (o[l + 1] = r * n));
                                      for (var c = 0; c <= a; c++)
                                        (r =
                                          (t[Math.min(a, c + 1)][0] -
                                            t[Math.max(0, c - 1)][0]) /
                                          (6 * (1 + o[c] * o[c]))),
                                          s.push([r || 0, o[c] * r || 0]);
                                      return s;
                                    })(t),
                                    n = t[1],
                                    i = t[0],
                                    r = [],
                                    o = e[1],
                                    a = e[0];
                                  r.push(i, [
                                    i[0] + a[0],
                                    i[1] + a[1],
                                    n[0] - o[0],
                                    n[1] - o[1],
                                    n[0],
                                    n[1],
                                  ]);
                                  for (var s = 2, l = e.length; s < l; s++) {
                                    var c = t[s],
                                      d = e[s];
                                    r.push([
                                      c[0] - d[0],
                                      c[1] - d[1],
                                      c[0],
                                      c[1],
                                    ]);
                                  }
                                  return r;
                                })(T)
                              : T,
                          L = [];
                        A && (z ? (_ = T) : (L = _.reverse()));
                        var q = 0,
                          E = 0;
                        if (
                          ((function (t, e) {
                            for (
                              var n = (function (t) {
                                  var e = [],
                                    n = 0;
                                  return (
                                    t.forEach(function (t) {
                                      null !== t
                                        ? n++
                                        : n > 0 && (e.push(n), (n = 0));
                                    }),
                                    n > 0 && e.push(n),
                                    e
                                  );
                                })(t),
                                i = [],
                                r = 0,
                                o = 0;
                              r < n.length;
                              o += n[r++]
                            )
                              i[r] = It(e, o, o + n[r]);
                            return i;
                          })(S, D).forEach(function (t) {
                            q++;
                            var e = (function (t) {
                                for (var e = "", n = 0; n < t.length; n++) {
                                  var i = t[n],
                                    r = i.length;
                                  r > 4
                                    ? ((e += "C"
                                        .concat(i[0], ", ")
                                        .concat(i[1])),
                                      (e += ", "
                                        .concat(i[2], ", ")
                                        .concat(i[3])),
                                      (e += ", "
                                        .concat(i[4], ", ")
                                        .concat(i[5])))
                                    : r > 2 &&
                                      ((e += "S"
                                        .concat(i[0], ", ")
                                        .concat(i[1])),
                                      (e += ", "
                                        .concat(i[2], ", ")
                                        .concat(i[3])));
                                }
                                return e;
                              })(t),
                              n = E,
                              i = (E += t.length) - 1;
                            z
                              ? (m = O.move(T[n][0], T[n][1]) + e)
                              : A
                              ? (m =
                                  O.move(L[n][0], L[n][1]) +
                                  O.line(T[n][0], T[n][1]) +
                                  e +
                                  O.line(L[i][0], L[i][1]))
                              : ((m = O.move(T[n][0], T[n][1]) + e),
                                (g =
                                  m +
                                  O.line(T[i][0], w) +
                                  O.line(T[n][0], w) +
                                  "z"),
                                _.push(g)),
                              v.push(m);
                          }),
                          A && q > 1 && !z)
                        ) {
                          var j = v.slice(q).reverse();
                          v.splice(q),
                            j.forEach(function (t) {
                              return v.push(t);
                            });
                        }
                        f = 0;
                    }
                    break;
                  case "smooth":
                    var P = 0.35 * (a - p);
                    if (null === n[i][o]) f = 0;
                    else
                      switch (f) {
                        case 0:
                          if (
                            ((b = p),
                            (m = z
                              ? O.move(p, u[o]) + O.line(p, h)
                              : O.move(p, h)),
                            (g = O.move(p, h)),
                            null === n[i][o + 1])
                          ) {
                            v.push(m), _.push(g);
                            break;
                          }
                          if (((f = 1), o < n[i].length - 2)) {
                            var R = O.curve(p + P, h, a - P, s, a, s);
                            (m += R), (g += R);
                            break;
                          }
                        case 1:
                          if (null === n[i][o + 1])
                            (m += z ? O.line(p, d) : O.move(p, h)),
                              (g += O.line(p, w) + O.line(b, w) + "z"),
                              v.push(m),
                              _.push(g),
                              (f = -1);
                          else {
                            var I = O.curve(p + P, h, a - P, s, a, s);
                            (m += I),
                              (g += I),
                              o >= n[i].length - 2 &&
                                (z &&
                                  (m +=
                                    O.curve(a, s, a, s, a, d) + O.move(a, d)),
                                (g +=
                                  O.curve(a, s, a, s, a, w) +
                                  O.line(b, w) +
                                  "z"),
                                v.push(m),
                                _.push(g),
                                (f = -1));
                          }
                      }
                    (p = a), (h = s);
                    break;
                  default:
                    var W = function (t, e, n) {
                      var i = [];
                      switch (t) {
                        case "stepline":
                          i = O.line(e, null, "H") + O.line(null, n, "V");
                          break;
                        case "linestep":
                          i = O.line(null, n, "V") + O.line(e, null, "H");
                          break;
                        case "straight":
                          i = O.line(e, n);
                      }
                      return i;
                    };
                    if (null === n[i][o]) f = 0;
                    else
                      switch (f) {
                        case 0:
                          if (
                            ((b = p),
                            (m = z
                              ? O.move(p, u[o]) + O.line(p, h)
                              : O.move(p, h)),
                            (g = O.move(p, h)),
                            null === n[i][o + 1])
                          ) {
                            v.push(m), _.push(g);
                            break;
                          }
                          if (((f = 1), o < n[i].length - 2)) {
                            var N = W(y, a, s);
                            (m += N), (g += N);
                            break;
                          }
                        case 1:
                          if (null === n[i][o + 1])
                            (m += z ? O.line(p, d) : O.move(p, h)),
                              (g += O.line(p, w) + O.line(b, w) + "z"),
                              v.push(m),
                              _.push(g),
                              (f = -1);
                          else {
                            var B = W(y, a, s);
                            (m += B),
                              (g += B),
                              o >= n[i].length - 2 &&
                                (z && (m += O.line(a, d)),
                                (g += O.line(a, w) + O.line(b, w) + "z"),
                                v.push(m),
                                _.push(g),
                                (f = -1));
                          }
                      }
                    (p = a), (h = s);
                }
                return {
                  linePaths: v,
                  areaPaths: _,
                  pX: p,
                  pY: h,
                  pathState: f,
                  segmentStartX: b,
                  linePath: m,
                  areaPath: g,
                };
              },
            },
            {
              key: "handleNullDataPoints",
              value: function (t, e, n, i, r) {
                var o = this.w;
                if (
                  (null === t[n][i] && o.config.markers.showNullDataPoints) ||
                  1 === t[n].length
                ) {
                  var a = this.strokeWidth - o.config.markers.strokeWidth / 2;
                  a > 0 || (a = 0);
                  var s = this.markers.plotChartMarkers(e, r, i + 1, a, !0);
                  null !== s && this.elPointsMain.add(s);
                }
              },
            },
          ]),
          t
        );
      })();
      (window.TreemapSquared = {}),
        (window.TreemapSquared.generate = (function () {
          function t(e, n, i, r) {
            (this.xoffset = e),
              (this.yoffset = n),
              (this.height = r),
              (this.width = i),
              (this.shortestEdge = function () {
                return Math.min(this.height, this.width);
              }),
              (this.getCoordinates = function (t) {
                var e,
                  n = [],
                  i = this.xoffset,
                  r = this.yoffset,
                  a = o(t) / this.height,
                  s = o(t) / this.width;
                if (this.width >= this.height)
                  for (e = 0; e < t.length; e++)
                    n.push([i, r, i + a, r + t[e] / a]), (r += t[e] / a);
                else
                  for (e = 0; e < t.length; e++)
                    n.push([i, r, i + t[e] / s, r + s]), (i += t[e] / s);
                return n;
              }),
              (this.cutArea = function (e) {
                var n;
                if (this.width >= this.height) {
                  var i = e / this.height,
                    r = this.width - i;
                  n = new t(this.xoffset + i, this.yoffset, r, this.height);
                } else {
                  var o = e / this.width,
                    a = this.height - o;
                  n = new t(this.xoffset, this.yoffset + o, this.width, a);
                }
                return n;
              });
          }
          function e(e, i, r, a, s) {
            return (
              (a = void 0 === a ? 0 : a),
              (s = void 0 === s ? 0 : s),
              (function (t) {
                var e,
                  n,
                  i = [];
                for (e = 0; e < t.length; e++)
                  for (n = 0; n < t[e].length; n++) i.push(t[e][n]);
                return i;
              })(
                n(
                  (function (t, e) {
                    var n,
                      i = [],
                      r = e / o(t);
                    for (n = 0; n < t.length; n++) i[n] = t[n] * r;
                    return i;
                  })(e, i * r),
                  [],
                  new t(a, s, i, r),
                  []
                )
              )
            );
          }
          function n(t, e, r, a) {
            var s, l, c;
            if (0 !== t.length)
              return (
                (s = r.shortestEdge()),
                (function (t, e, n) {
                  var r;
                  return (
                    0 === t.length ||
                    ((r = t.slice()).push(e), i(t, n) >= i(r, n))
                  );
                })(e, (l = t[0]), s)
                  ? (e.push(l), n(t.slice(1), e, r, a))
                  : ((c = r.cutArea(o(e), a)),
                    a.push(r.getCoordinates(e)),
                    n(t, [], c, a)),
                a
              );
            a.push(r.getCoordinates(e));
          }
          function i(t, e) {
            var n = Math.min.apply(Math, t),
              i = Math.max.apply(Math, t),
              r = o(t);
            return Math.max(
              (Math.pow(e, 2) * i) / Math.pow(r, 2),
              Math.pow(r, 2) / (Math.pow(e, 2) * n)
            );
          }
          function r(t) {
            return t && t.constructor === Array;
          }
          function o(t) {
            var e,
              n = 0;
            for (e = 0; e < t.length; e++) n += t[e];
            return n;
          }
          function a(t) {
            var e,
              n = 0;
            if (r(t[0])) for (e = 0; e < t.length; e++) n += a(t[e]);
            else n = o(t);
            return n;
          }
          return function t(n, i, o, s, l) {
            (s = void 0 === s ? 0 : s), (l = void 0 === l ? 0 : l);
            var c,
              d,
              u = [],
              p = [];
            if (r(n[0])) {
              for (d = 0; d < n.length; d++) u[d] = a(n[d]);
              for (c = e(u, i, o, s, l), d = 0; d < n.length; d++)
                p.push(
                  t(
                    n[d],
                    c[d][2] - c[d][0],
                    c[d][3] - c[d][1],
                    c[d][0],
                    c[d][1]
                  )
                );
            } else p = e(n, i, o, s, l);
            return p;
          };
        })());
      var Bt,
        Ft,
        $t = (function () {
          function t(e, n) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.strokeWidth = this.w.config.stroke.width),
              (this.helpers = new Tt(e)),
              (this.dynamicAnim =
                this.w.config.chart.animations.dynamicAnimation),
              (this.labels = []);
          }
          return (
            l(t, [
              {
                key: "draw",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = new x(this.ctx),
                    r = new H(this.ctx),
                    o = i.group({ class: "apexcharts-treemap" });
                  if (n.globals.noData) return o;
                  var a = [];
                  return (
                    t.forEach(function (t) {
                      var e = t.map(function (t) {
                        return Math.abs(t);
                      });
                      a.push(e);
                    }),
                    (this.negRange = this.helpers.checkColorRange()),
                    n.config.series.forEach(function (t, n) {
                      t.data.forEach(function (t) {
                        Array.isArray(e.labels[n]) || (e.labels[n] = []),
                          e.labels[n].push(t.x);
                      });
                    }),
                    window.TreemapSquared.generate(
                      a,
                      n.globals.gridWidth,
                      n.globals.gridHeight
                    ).forEach(function (a, s) {
                      var l = i.group({
                        class: "apexcharts-series apexcharts-treemap-series",
                        seriesName: O.escapeString(n.globals.seriesNames[s]),
                        rel: s + 1,
                        "data:realIndex": s,
                      });
                      if (n.config.chart.dropShadow.enabled) {
                        var c = n.config.chart.dropShadow;
                        new A(e.ctx).dropShadow(o, c, s);
                      }
                      var d = i.group({ class: "apexcharts-data-labels" });
                      a.forEach(function (o, a) {
                        var c = o[0],
                          d = o[1],
                          u = o[2],
                          p = o[3],
                          h = i.drawRect(
                            c,
                            d,
                            u - c,
                            p - d,
                            n.config.plotOptions.treemap.borderRadius,
                            "#fff",
                            1,
                            e.strokeWidth,
                            n.config.plotOptions.treemap.useFillColorAsStroke
                              ? b
                              : n.globals.stroke.colors[s]
                          );
                        h.attr({
                          cx: c,
                          cy: d,
                          index: s,
                          i: s,
                          j: a,
                          width: u - c,
                          height: p - d,
                        });
                        var f = e.helpers.getShadeColor(
                            n.config.chart.type,
                            s,
                            a,
                            e.negRange
                          ),
                          b = f.color;
                        void 0 !== n.config.series[s].data[a] &&
                          n.config.series[s].data[a].fillColor &&
                          (b = n.config.series[s].data[a].fillColor);
                        var m = r.fillPath({
                          color: b,
                          seriesNumber: s,
                          dataPointIndex: a,
                        });
                        h.node.classList.add("apexcharts-treemap-rect"),
                          h.attr({ fill: m }),
                          e.helpers.addListeners(h);
                        var g = {
                            x: c + (u - c) / 2,
                            y: d + (p - d) / 2,
                            width: 0,
                            height: 0,
                          },
                          v = { x: c, y: d, width: u - c, height: p - d };
                        if (
                          n.config.chart.animations.enabled &&
                          !n.globals.dataChanged
                        ) {
                          var _ = 1;
                          n.globals.resized ||
                            (_ = n.config.chart.animations.speed),
                            e.animateTreemap(h, g, v, _);
                        }
                        if (n.globals.dataChanged) {
                          var y = 1;
                          e.dynamicAnim.enabled &&
                            n.globals.shouldAnimate &&
                            ((y = e.dynamicAnim.speed),
                            n.globals.previousPaths[s] &&
                              n.globals.previousPaths[s][a] &&
                              n.globals.previousPaths[s][a].rect &&
                              (g = n.globals.previousPaths[s][a].rect),
                            e.animateTreemap(h, g, v, y));
                        }
                        var M = e.getFontSize(o),
                          O = n.config.dataLabels.formatter(e.labels[s][a], {
                            value: n.globals.series[s][a],
                            seriesIndex: s,
                            dataPointIndex: a,
                            w: n,
                          });
                        "truncate" ===
                          n.config.plotOptions.treemap.dataLabels.format &&
                          ((M = parseInt(
                            n.config.dataLabels.style.fontSize,
                            10
                          )),
                          (O = e.truncateLabels(O, M, c, d, u, p)));
                        var w = null;
                        n.globals.series[s][a] &&
                          (w = e.helpers.calculateDataLabels({
                            text: O,
                            x: (c + u) / 2,
                            y: (d + p) / 2 + e.strokeWidth / 2 + M / 3,
                            i: s,
                            j: a,
                            colorProps: f,
                            fontSize: M,
                            series: t,
                          })),
                          n.config.dataLabels.enabled &&
                            w &&
                            e.rotateToFitLabel(w, M, O, c, d, u, p),
                          l.add(h),
                          null !== w && l.add(w);
                      }),
                        l.add(d),
                        o.add(l);
                    }),
                    o
                  );
                },
              },
              {
                key: "getFontSize",
                value: function (t) {
                  var e,
                    n,
                    i = this.w,
                    r =
                      (function t(e) {
                        var n,
                          i = 0;
                        if (Array.isArray(e[0]))
                          for (n = 0; n < e.length; n++) i += t(e[n]);
                        else for (n = 0; n < e.length; n++) i += e[n].length;
                        return i;
                      })(this.labels) /
                      (function t(e) {
                        var n,
                          i = 0;
                        if (Array.isArray(e[0]))
                          for (n = 0; n < e.length; n++) i += t(e[n]);
                        else for (n = 0; n < e.length; n++) i += 1;
                        return i;
                      })(this.labels);
                  return (
                    (e = (t[2] - t[0]) * (t[3] - t[1])),
                    (n = Math.pow(e, 0.5)),
                    Math.min(
                      n / r,
                      parseInt(i.config.dataLabels.style.fontSize, 10)
                    )
                  );
                },
              },
              {
                key: "rotateToFitLabel",
                value: function (t, e, n, i, r, o, a) {
                  var s = new x(this.ctx),
                    l = s.getTextRects(n, e);
                  if (
                    l.width + this.w.config.stroke.width + 5 > o - i &&
                    l.width <= a - r
                  ) {
                    var c = s.rotateAroundCenter(t.node);
                    t.node.setAttribute(
                      "transform",
                      "rotate(-90 "
                        .concat(c.x, " ")
                        .concat(c.y, ") translate(")
                        .concat(l.height / 3, ")")
                    );
                  }
                },
              },
              {
                key: "truncateLabels",
                value: function (t, e, n, i, r, o) {
                  var a = new x(this.ctx),
                    s =
                      a.getTextRects(t, e).width +
                        this.w.config.stroke.width +
                        5 >
                        r - n && o - i > r - n
                        ? o - i
                        : r - n,
                    l = a.getTextBasedOnMaxWidth({
                      text: t,
                      maxWidth: s,
                      fontSize: e,
                    });
                  return t.length !== l.length && s / e < 5 ? "" : l;
                },
              },
              {
                key: "animateTreemap",
                value: function (t, e, n, i) {
                  var r = new w(this.ctx);
                  r.animateRect(
                    t,
                    { x: e.x, y: e.y, width: e.width, height: e.height },
                    { x: n.x, y: n.y, width: n.width, height: n.height },
                    i,
                    function () {
                      r.animationCompleted(t);
                    }
                  );
                },
              },
            ]),
            t
          );
        })(),
        Ht = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              (this.timeScaleArray = []),
              (this.utc = this.w.config.xaxis.labels.datetimeUTC);
          }
          return (
            l(t, [
              {
                key: "calculateTimeScaleTicks",
                value: function (t, e) {
                  var n = this,
                    i = this.w;
                  if (i.globals.allSeriesCollapsed)
                    return (
                      (i.globals.labels = []),
                      (i.globals.timescaleLabels = []),
                      []
                    );
                  var r = new S(this.ctx),
                    o = (e - t) / 864e5;
                  this.determineInterval(o),
                    (i.globals.disableZoomIn = !1),
                    (i.globals.disableZoomOut = !1),
                    o < 10 / 86400
                      ? (i.globals.disableZoomIn = !0)
                      : o > 5e4 && (i.globals.disableZoomOut = !0);
                  var a = r.getTimeUnitsfromTimestamp(t, e, this.utc),
                    s = i.globals.gridWidth / o,
                    l = s / 24,
                    c = l / 60,
                    d = c / 60,
                    u = Math.floor(24 * o),
                    p = Math.floor(1440 * o),
                    h = Math.floor(86400 * o),
                    f = Math.floor(o),
                    m = Math.floor(o / 30),
                    g = Math.floor(o / 365),
                    v = {
                      minMillisecond: a.minMillisecond,
                      minSecond: a.minSecond,
                      minMinute: a.minMinute,
                      minHour: a.minHour,
                      minDate: a.minDate,
                      minMonth: a.minMonth,
                      minYear: a.minYear,
                    },
                    _ = {
                      firstVal: v,
                      currentMillisecond: v.minMillisecond,
                      currentSecond: v.minSecond,
                      currentMinute: v.minMinute,
                      currentHour: v.minHour,
                      currentMonthDate: v.minDate,
                      currentDate: v.minDate,
                      currentMonth: v.minMonth,
                      currentYear: v.minYear,
                      daysWidthOnXAxis: s,
                      hoursWidthOnXAxis: l,
                      minutesWidthOnXAxis: c,
                      secondsWidthOnXAxis: d,
                      numberOfSeconds: h,
                      numberOfMinutes: p,
                      numberOfHours: u,
                      numberOfDays: f,
                      numberOfMonths: m,
                      numberOfYears: g,
                    };
                  switch (this.tickInterval) {
                    case "years":
                      this.generateYearScale(_);
                      break;
                    case "months":
                    case "half_year":
                      this.generateMonthScale(_);
                      break;
                    case "months_days":
                    case "months_fortnight":
                    case "days":
                    case "week_days":
                      this.generateDayScale(_);
                      break;
                    case "hours":
                      this.generateHourScale(_);
                      break;
                    case "minutes_fives":
                    case "minutes":
                      this.generateMinuteScale(_);
                      break;
                    case "seconds_tens":
                    case "seconds_fives":
                    case "seconds":
                      this.generateSecondScale(_);
                  }
                  var y = this.timeScaleArray.map(function (t) {
                    var e = {
                      position: t.position,
                      unit: t.unit,
                      year: t.year,
                      day: t.day ? t.day : 1,
                      hour: t.hour ? t.hour : 0,
                      month: t.month + 1,
                    };
                    return "month" === t.unit
                      ? b(b({}, e), {}, { day: 1, value: t.value + 1 })
                      : "day" === t.unit || "hour" === t.unit
                      ? b(b({}, e), {}, { value: t.value })
                      : "minute" === t.unit
                      ? b(b({}, e), {}, { value: t.value, minute: t.value })
                      : "second" === t.unit
                      ? b(
                          b({}, e),
                          {},
                          { value: t.value, minute: t.minute, second: t.second }
                        )
                      : t;
                  });
                  return y.filter(function (t) {
                    var e = 1,
                      r = Math.ceil(i.globals.gridWidth / 120),
                      o = t.value;
                    void 0 !== i.config.xaxis.tickAmount &&
                      (r = i.config.xaxis.tickAmount),
                      y.length > r && (e = Math.floor(y.length / r));
                    var a = !1,
                      s = !1;
                    switch (n.tickInterval) {
                      case "years":
                        "year" === t.unit && (a = !0);
                        break;
                      case "half_year":
                        (e = 7), "year" === t.unit && (a = !0);
                        break;
                      case "months":
                        (e = 1), "year" === t.unit && (a = !0);
                        break;
                      case "months_fortnight":
                        (e = 15),
                          ("year" !== t.unit && "month" !== t.unit) || (a = !0),
                          30 === o && (s = !0);
                        break;
                      case "months_days":
                        (e = 10),
                          "month" === t.unit && (a = !0),
                          30 === o && (s = !0);
                        break;
                      case "week_days":
                        (e = 8), "month" === t.unit && (a = !0);
                        break;
                      case "days":
                        (e = 1), "month" === t.unit && (a = !0);
                        break;
                      case "hours":
                        "day" === t.unit && (a = !0);
                        break;
                      case "minutes_fives":
                      case "seconds_fives":
                        o % 5 != 0 && (s = !0);
                        break;
                      case "seconds_tens":
                        o % 10 != 0 && (s = !0);
                    }
                    if (
                      "hours" === n.tickInterval ||
                      "minutes_fives" === n.tickInterval ||
                      "seconds_tens" === n.tickInterval ||
                      "seconds_fives" === n.tickInterval
                    ) {
                      if (!s) return !0;
                    } else if ((o % e == 0 || a) && !s) return !0;
                  });
                },
              },
              {
                key: "recalcDimensionsBasedOnFormat",
                value: function (t, e) {
                  var n = this.w,
                    i = this.formatDates(t),
                    r = this.removeOverlappingTS(i);
                  (n.globals.timescaleLabels = r.slice()),
                    new ht(this.ctx).plotCoords();
                },
              },
              {
                key: "determineInterval",
                value: function (t) {
                  var e = 24 * t,
                    n = 60 * e;
                  switch (!0) {
                    case t / 365 > 5:
                      this.tickInterval = "years";
                      break;
                    case t > 800:
                      this.tickInterval = "half_year";
                      break;
                    case t > 180:
                      this.tickInterval = "months";
                      break;
                    case t > 90:
                      this.tickInterval = "months_fortnight";
                      break;
                    case t > 60:
                      this.tickInterval = "months_days";
                      break;
                    case t > 30:
                      this.tickInterval = "week_days";
                      break;
                    case t > 2:
                      this.tickInterval = "days";
                      break;
                    case e > 2.4:
                      this.tickInterval = "hours";
                      break;
                    case n > 15:
                      this.tickInterval = "minutes_fives";
                      break;
                    case n > 5:
                      this.tickInterval = "minutes";
                      break;
                    case n > 1:
                      this.tickInterval = "seconds_tens";
                      break;
                    case 60 * n > 20:
                      this.tickInterval = "seconds_fives";
                      break;
                    default:
                      this.tickInterval = "seconds";
                  }
                },
              },
              {
                key: "generateYearScale",
                value: function (t) {
                  var e = t.firstVal,
                    n = t.currentMonth,
                    i = t.currentYear,
                    r = t.daysWidthOnXAxis,
                    o = t.numberOfYears,
                    a = e.minYear,
                    s = 0,
                    l = new S(this.ctx),
                    c = "year";
                  if (e.minDate > 1 || e.minMonth > 0) {
                    var d = l.determineRemainingDaysOfYear(
                      e.minYear,
                      e.minMonth,
                      e.minDate
                    );
                    (s = (l.determineDaysOfYear(e.minYear) - d + 1) * r),
                      (a = e.minYear + 1),
                      this.timeScaleArray.push({
                        position: s,
                        value: a,
                        unit: c,
                        year: a,
                        month: O.monthMod(n + 1),
                      });
                  } else
                    1 === e.minDate &&
                      0 === e.minMonth &&
                      this.timeScaleArray.push({
                        position: s,
                        value: a,
                        unit: c,
                        year: i,
                        month: O.monthMod(n + 1),
                      });
                  for (var u = a, p = s, h = 0; h < o; h++)
                    u++,
                      (p = l.determineDaysOfYear(u - 1) * r + p),
                      this.timeScaleArray.push({
                        position: p,
                        value: u,
                        unit: c,
                        year: u,
                        month: 1,
                      });
                },
              },
              {
                key: "generateMonthScale",
                value: function (t) {
                  var e = t.firstVal,
                    n = t.currentMonthDate,
                    i = t.currentMonth,
                    r = t.currentYear,
                    o = t.daysWidthOnXAxis,
                    a = t.numberOfMonths,
                    s = i,
                    l = 0,
                    c = new S(this.ctx),
                    d = "month",
                    u = 0;
                  if (e.minDate > 1) {
                    (l =
                      (c.determineDaysOfMonths(i + 1, e.minYear) - n + 1) * o),
                      (s = O.monthMod(i + 1));
                    var p = r + u,
                      h = O.monthMod(s),
                      f = s;
                    0 === s && ((d = "year"), (f = p), (h = 1), (p += u += 1)),
                      this.timeScaleArray.push({
                        position: l,
                        value: f,
                        unit: d,
                        year: p,
                        month: h,
                      });
                  } else
                    this.timeScaleArray.push({
                      position: l,
                      value: s,
                      unit: d,
                      year: r,
                      month: O.monthMod(i),
                    });
                  for (var b = s + 1, m = l, g = 0, v = 1; g < a; g++, v++) {
                    0 === (b = O.monthMod(b))
                      ? ((d = "year"), (u += 1))
                      : (d = "month");
                    var _ = this._getYear(r, b, u);
                    m = c.determineDaysOfMonths(b, _) * o + m;
                    var y = 0 === b ? _ : b;
                    this.timeScaleArray.push({
                      position: m,
                      value: y,
                      unit: d,
                      year: _,
                      month: 0 === b ? 1 : b,
                    }),
                      b++;
                  }
                },
              },
              {
                key: "generateDayScale",
                value: function (t) {
                  var e = t.firstVal,
                    n = t.currentMonth,
                    i = t.currentYear,
                    r = t.hoursWidthOnXAxis,
                    o = t.numberOfDays,
                    a = new S(this.ctx),
                    s = "day",
                    l = e.minDate + 1,
                    c = l,
                    d = function (t, e, n) {
                      return t > a.determineDaysOfMonths(e + 1, n)
                        ? ((c = 1), (s = "month"), (p = e += 1), e)
                        : e;
                    },
                    u = (24 - e.minHour) * r,
                    p = l,
                    h = d(c, n, i);
                  0 === e.minHour && 1 === e.minDate
                    ? ((u = 0),
                      (p = O.monthMod(e.minMonth)),
                      (s = "month"),
                      (c = e.minDate))
                    : 1 !== e.minDate &&
                      0 === e.minHour &&
                      0 === e.minMinute &&
                      ((u = 0),
                      (l = e.minDate),
                      (p = l),
                      (h = d((c = l), n, i))),
                    this.timeScaleArray.push({
                      position: u,
                      value: p,
                      unit: s,
                      year: this._getYear(i, h, 0),
                      month: O.monthMod(h),
                      day: c,
                    });
                  for (var f = u, b = 0; b < o; b++) {
                    (s = "day"), (h = d((c += 1), h, this._getYear(i, h, 0)));
                    var m = this._getYear(i, h, 0);
                    f = 24 * r + f;
                    var g = 1 === c ? O.monthMod(h) : c;
                    this.timeScaleArray.push({
                      position: f,
                      value: g,
                      unit: s,
                      year: m,
                      month: O.monthMod(h),
                      day: g,
                    });
                  }
                },
              },
              {
                key: "generateHourScale",
                value: function (t) {
                  var e = t.firstVal,
                    n = t.currentDate,
                    i = t.currentMonth,
                    r = t.currentYear,
                    o = t.minutesWidthOnXAxis,
                    a = t.numberOfHours,
                    s = new S(this.ctx),
                    l = "hour",
                    c = function (t, e) {
                      return (
                        t > s.determineDaysOfMonths(e + 1, r) &&
                          ((b = 1), (e += 1)),
                        { month: e, date: b }
                      );
                    },
                    d = function (t, e) {
                      return t > s.determineDaysOfMonths(e + 1, r)
                        ? (e += 1)
                        : e;
                    },
                    u = 60 - (e.minMinute + e.minSecond / 60),
                    p = u * o,
                    h = e.minHour + 1,
                    f = h;
                  60 === u && ((p = 0), (f = h = e.minHour));
                  var b = n;
                  f >= 24 && ((f = 0), (b += 1), (l = "day"));
                  var m = c(b, i).month;
                  (m = d(b, m)),
                    this.timeScaleArray.push({
                      position: p,
                      value: h,
                      unit: l,
                      day: b,
                      hour: f,
                      year: r,
                      month: O.monthMod(m),
                    }),
                    f++;
                  for (var g = p, v = 0; v < a; v++) {
                    (l = "hour"),
                      f >= 24 &&
                        ((f = 0),
                        (l = "day"),
                        (m = c((b += 1), m).month),
                        (m = d(b, m)));
                    var _ = this._getYear(r, m, 0);
                    g = 60 * o + g;
                    var y = 0 === f ? b : f;
                    this.timeScaleArray.push({
                      position: g,
                      value: y,
                      unit: l,
                      hour: f,
                      day: b,
                      year: _,
                      month: O.monthMod(m),
                    }),
                      f++;
                  }
                },
              },
              {
                key: "generateMinuteScale",
                value: function (t) {
                  for (
                    var e = t.currentMillisecond,
                      n = t.currentSecond,
                      i = t.currentMinute,
                      r = t.currentHour,
                      o = t.currentDate,
                      a = t.currentMonth,
                      s = t.currentYear,
                      l = t.minutesWidthOnXAxis,
                      c = t.secondsWidthOnXAxis,
                      d = t.numberOfMinutes,
                      u = i + 1,
                      p = o,
                      h = a,
                      f = s,
                      b = r,
                      m = (60 - n - e / 1e3) * c,
                      g = 0;
                    g < d;
                    g++
                  )
                    u >= 60 && ((u = 0), 24 === (b += 1) && (b = 0)),
                      this.timeScaleArray.push({
                        position: m,
                        value: u,
                        unit: "minute",
                        hour: b,
                        minute: u,
                        day: p,
                        year: this._getYear(f, h, 0),
                        month: O.monthMod(h),
                      }),
                      (m += l),
                      u++;
                },
              },
              {
                key: "generateSecondScale",
                value: function (t) {
                  for (
                    var e = t.currentMillisecond,
                      n = t.currentSecond,
                      i = t.currentMinute,
                      r = t.currentHour,
                      o = t.currentDate,
                      a = t.currentMonth,
                      s = t.currentYear,
                      l = t.secondsWidthOnXAxis,
                      c = t.numberOfSeconds,
                      d = n + 1,
                      u = i,
                      p = o,
                      h = a,
                      f = s,
                      b = r,
                      m = ((1e3 - e) / 1e3) * l,
                      g = 0;
                    g < c;
                    g++
                  )
                    d >= 60 &&
                      ((d = 0), ++u >= 60 && ((u = 0), 24 == ++b && (b = 0))),
                      this.timeScaleArray.push({
                        position: m,
                        value: d,
                        unit: "second",
                        hour: b,
                        minute: u,
                        second: d,
                        day: p,
                        year: this._getYear(f, h, 0),
                        month: O.monthMod(h),
                      }),
                      (m += l),
                      d++;
                },
              },
              {
                key: "createRawDateString",
                value: function (t, e) {
                  var n = t.year;
                  return (
                    0 === t.month && (t.month = 1),
                    (n += "-" + ("0" + t.month.toString()).slice(-2)),
                    "day" === t.unit
                      ? (n +=
                          "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01")
                      : (n += "-" + ("0" + (t.day ? t.day : "1")).slice(-2)),
                    "hour" === t.unit
                      ? (n +=
                          "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00")
                      : (n += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2)),
                    "minute" === t.unit
                      ? (n += ":" + ("0" + e).slice(-2))
                      : (n +=
                          ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00")),
                    "second" === t.unit
                      ? (n += ":" + ("0" + e).slice(-2))
                      : (n += ":00"),
                    this.utc && (n += ".000Z"),
                    n
                  );
                },
              },
              {
                key: "formatDates",
                value: function (t) {
                  var e = this,
                    n = this.w;
                  return t.map(function (t) {
                    var i = t.value.toString(),
                      r = new S(e.ctx),
                      o = e.createRawDateString(t, i),
                      a = r.getDate(r.parseDate(o));
                    if (
                      (e.utc || (a = r.getDate(r.parseDateWithTimezone(o))),
                      void 0 === n.config.xaxis.labels.format)
                    ) {
                      var s = "dd MMM",
                        l = n.config.xaxis.labels.datetimeFormatter;
                      "year" === t.unit && (s = l.year),
                        "month" === t.unit && (s = l.month),
                        "day" === t.unit && (s = l.day),
                        "hour" === t.unit && (s = l.hour),
                        "minute" === t.unit && (s = l.minute),
                        "second" === t.unit && (s = l.second),
                        (i = r.formatDate(a, s));
                    } else i = r.formatDate(a, n.config.xaxis.labels.format);
                    return {
                      dateString: o,
                      position: t.position,
                      value: i,
                      unit: t.unit,
                      year: t.year,
                      month: t.month,
                    };
                  });
                },
              },
              {
                key: "removeOverlappingTS",
                value: function (t) {
                  var e,
                    n = this,
                    i = new x(this.ctx),
                    r = !1;
                  t.length > 0 &&
                    t[0].value &&
                    t.every(function (e) {
                      return e.value.length === t[0].value.length;
                    }) &&
                    ((r = !0), (e = i.getTextRects(t[0].value).width));
                  var o = 0,
                    a = t.map(function (a, s) {
                      if (
                        s > 0 &&
                        n.w.config.xaxis.labels.hideOverlappingLabels
                      ) {
                        var l = r ? e : i.getTextRects(t[o].value).width,
                          c = t[o].position;
                        return a.position > c + l + 10 ? ((o = s), a) : null;
                      }
                      return a;
                    });
                  return a.filter(function (t) {
                    return null !== t;
                  });
                },
              },
              {
                key: "_getYear",
                value: function (t, e, n) {
                  return t + Math.floor(e / 12) + n;
                },
              },
            ]),
            t
          );
        })(),
        Yt = (function () {
          function t(e, n) {
            a(this, t), (this.ctx = n), (this.w = n.w), (this.el = e);
          }
          return (
            l(t, [
              {
                key: "setupElements",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = t.config,
                    i = n.chart.type;
                  (e.axisCharts = [
                    "line",
                    "area",
                    "bar",
                    "rangeBar",
                    "rangeArea",
                    "candlestick",
                    "boxPlot",
                    "scatter",
                    "bubble",
                    "radar",
                    "heatmap",
                    "treemap",
                  ].includes(i)),
                    (e.xyCharts = [
                      "line",
                      "area",
                      "bar",
                      "rangeBar",
                      "rangeArea",
                      "candlestick",
                      "boxPlot",
                      "scatter",
                      "bubble",
                    ].includes(i)),
                    (e.isBarHorizontal =
                      ["bar", "rangeBar", "boxPlot"].includes(i) &&
                      n.plotOptions.bar.horizontal),
                    (e.chartClass = ".apexcharts".concat(e.chartID)),
                    (e.dom.baseEl = this.el),
                    (e.dom.elWrap = document.createElement("div")),
                    x.setAttrs(e.dom.elWrap, {
                      id: e.chartClass.substring(1),
                      class: "apexcharts-canvas ".concat(
                        e.chartClass.substring(1)
                      ),
                    }),
                    this.el.appendChild(e.dom.elWrap),
                    (e.dom.Paper = new window.SVG.Doc(e.dom.elWrap)),
                    e.dom.Paper.attr({
                      class: "apexcharts-svg",
                      "xmlns:data": "ApexChartsNS",
                      transform: "translate("
                        .concat(n.chart.offsetX, ", ")
                        .concat(n.chart.offsetY, ")"),
                    }),
                    (e.dom.Paper.node.style.background =
                      "dark" !== n.theme.mode || n.chart.background
                        ? "light" !== n.theme.mode || n.chart.background
                          ? n.chart.background
                          : "#fff"
                        : "#424242"),
                    this.setSVGDimensions(),
                    (e.dom.elLegendForeign = document.createElementNS(
                      e.SVGNS,
                      "foreignObject"
                    )),
                    x.setAttrs(e.dom.elLegendForeign, {
                      x: 0,
                      y: 0,
                      width: e.svgWidth,
                      height: e.svgHeight,
                    }),
                    (e.dom.elLegendWrap = document.createElement("div")),
                    e.dom.elLegendWrap.classList.add("apexcharts-legend"),
                    e.dom.elLegendWrap.setAttribute(
                      "xmlns",
                      "http://www.w3.org/1999/xhtml"
                    ),
                    e.dom.elLegendForeign.appendChild(e.dom.elLegendWrap),
                    e.dom.Paper.node.appendChild(e.dom.elLegendForeign),
                    (e.dom.elGraphical = e.dom.Paper.group().attr({
                      class: "apexcharts-inner apexcharts-graphical",
                    })),
                    (e.dom.elDefs = e.dom.Paper.defs()),
                    e.dom.Paper.add(e.dom.elGraphical),
                    e.dom.elGraphical.add(e.dom.elDefs);
                },
              },
              {
                key: "plotChartType",
                value: function (t, e) {
                  var n = this.w,
                    i = this.ctx,
                    r = n.config,
                    o = n.globals,
                    a = {
                      line: { series: [], i: [] },
                      area: { series: [], i: [] },
                      scatter: { series: [], i: [] },
                      bubble: { series: [], i: [] },
                      column: { series: [], i: [] },
                      candlestick: { series: [], i: [] },
                      boxPlot: { series: [], i: [] },
                      rangeBar: { series: [], i: [] },
                      rangeArea: { series: [], seriesRangeEnd: [], i: [] },
                    },
                    s = r.chart.type || "line",
                    l = 0;
                  o.series.forEach(function (e, i) {
                    var r = t[i].type || s;
                    a[r]
                      ? ("rangeArea" === r
                          ? (a[r].series.push(o.seriesRangeStart[i]),
                            a[r].seriesRangeEnd.push(o.seriesRangeEnd[i]))
                          : a[r].series.push(e),
                        a[r].i.push(i),
                        ("column" !== r && "bar" !== r) ||
                          (n.globals.columnSeries = a.column))
                      : [
                          "heatmap",
                          "treemap",
                          "pie",
                          "donut",
                          "polarArea",
                          "radialBar",
                          "radar",
                        ].includes(r) ||
                        ("bar" === r &&
                          (a.column.series.push(e), a.column.i.push(i))),
                      s !== r && "scatter" !== r && l++;
                  }),
                    l > 0 &&
                      a.column.series.length > 0 &&
                      r.plotOptions.bar.horizontal &&
                      ((l -= a.column.series.length),
                      (a.column = { series: [], i: [] }),
                      (n.globals.columnSeries = { series: [], i: [] })),
                    o.comboCharts || (o.comboCharts = l > 0);
                  var c = new Nt(i, e),
                    d = new St(i, e);
                  i.pie = new qt(i);
                  var u = new jt(i);
                  i.rangeBar = new Pt(i, e);
                  var p = new Et(i),
                    h = [];
                  if (o.comboCharts) {
                    var f,
                      b,
                      m = new z(i);
                    if (
                      (a.area.series.length > 0 &&
                        (f = h).push.apply(
                          f,
                          v(
                            m.drawSeriesByGroup(a.area, o.areaGroups, "area", c)
                          )
                        ),
                      a.column.series.length > 0)
                    )
                      if (r.chart.stacked) {
                        var g = new kt(i, e);
                        h.push(g.draw(a.column.series, a.column.i));
                      } else
                        (i.bar = new Ct(i, e)),
                          h.push(i.bar.draw(a.column.series, a.column.i));
                    if (
                      (a.rangeArea.series.length > 0 &&
                        h.push(
                          c.draw(
                            a.rangeArea.series,
                            "rangeArea",
                            a.rangeArea.i,
                            a.rangeArea.seriesRangeEnd
                          )
                        ),
                      a.line.series.length > 0 &&
                        (b = h).push.apply(
                          b,
                          v(
                            m.drawSeriesByGroup(a.line, o.lineGroups, "line", c)
                          )
                        ),
                      a.candlestick.series.length > 0 &&
                        h.push(
                          d.draw(
                            a.candlestick.series,
                            "candlestick",
                            a.candlestick.i
                          )
                        ),
                      a.boxPlot.series.length > 0 &&
                        h.push(
                          d.draw(a.boxPlot.series, "boxPlot", a.boxPlot.i)
                        ),
                      a.rangeBar.series.length > 0 &&
                        h.push(
                          i.rangeBar.draw(a.rangeBar.series, a.rangeBar.i)
                        ),
                      a.scatter.series.length > 0)
                    ) {
                      var _ = new Nt(i, e, !0);
                      h.push(_.draw(a.scatter.series, "scatter", a.scatter.i));
                    }
                    if (a.bubble.series.length > 0) {
                      var y = new Nt(i, e, !0);
                      h.push(y.draw(a.bubble.series, "bubble", a.bubble.i));
                    }
                  } else
                    switch (r.chart.type) {
                      case "line":
                        h = c.draw(o.series, "line");
                        break;
                      case "area":
                        h = c.draw(o.series, "area");
                        break;
                      case "bar":
                        r.chart.stacked
                          ? (h = new kt(i, e).draw(o.series))
                          : ((i.bar = new Ct(i, e)),
                            (h = i.bar.draw(o.series)));
                        break;
                      case "candlestick":
                        h = new St(i, e).draw(o.series, "candlestick");
                        break;
                      case "boxPlot":
                        h = new St(i, e).draw(o.series, r.chart.type);
                        break;
                      case "rangeBar":
                        h = i.rangeBar.draw(o.series);
                        break;
                      case "rangeArea":
                        h = c.draw(
                          o.seriesRangeStart,
                          "rangeArea",
                          void 0,
                          o.seriesRangeEnd
                        );
                        break;
                      case "heatmap":
                        h = new Dt(i, e).draw(o.series);
                        break;
                      case "treemap":
                        h = new $t(i, e).draw(o.series);
                        break;
                      case "pie":
                      case "donut":
                      case "polarArea":
                        h = i.pie.draw(o.series);
                        break;
                      case "radialBar":
                        h = u.draw(o.series);
                        break;
                      case "radar":
                        h = p.draw(o.series);
                        break;
                      default:
                        h = c.draw(o.series);
                    }
                  return h;
                },
              },
              {
                key: "setSVGDimensions",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = t.config;
                  (n.chart.width = n.chart.width || "100%"),
                    (n.chart.height = n.chart.height || "auto"),
                    (e.svgWidth = n.chart.width),
                    (e.svgHeight = n.chart.height);
                  var i = O.getDimensions(this.el),
                    r = n.chart.width
                      .toString()
                      .split(/[0-9]+/g)
                      .pop();
                  "%" === r
                    ? O.isNumber(i[0]) &&
                      (0 === i[0].width &&
                        (i = O.getDimensions(this.el.parentNode)),
                      (e.svgWidth = (i[0] * parseInt(n.chart.width, 10)) / 100))
                    : ("px" !== r && "" !== r) ||
                      (e.svgWidth = parseInt(n.chart.width, 10));
                  var o = String(n.chart.height)
                    .toString()
                    .split(/[0-9]+/g)
                    .pop();
                  if ("auto" !== e.svgHeight && "" !== e.svgHeight)
                    if ("%" === o) {
                      var a = O.getDimensions(this.el.parentNode);
                      e.svgHeight = (a[1] * parseInt(n.chart.height, 10)) / 100;
                    } else e.svgHeight = parseInt(n.chart.height, 10);
                  else
                    e.svgHeight = e.axisCharts
                      ? e.svgWidth / 1.61
                      : e.svgWidth / 1.2;
                  if (
                    ((e.svgWidth = Math.max(e.svgWidth, 0)),
                    (e.svgHeight = Math.max(e.svgHeight, 0)),
                    x.setAttrs(e.dom.Paper.node, {
                      width: e.svgWidth,
                      height: e.svgHeight,
                    }),
                    "%" !== o)
                  ) {
                    var s = n.chart.sparkline.enabled
                      ? 0
                      : e.axisCharts
                      ? n.chart.parentHeightOffset
                      : 0;
                    e.dom.Paper.node.parentNode.parentNode.style.minHeight =
                      "".concat(e.svgHeight + s, "px");
                  }
                  (e.dom.elWrap.style.width = "".concat(e.svgWidth, "px")),
                    (e.dom.elWrap.style.height = "".concat(e.svgHeight, "px"));
                },
              },
              {
                key: "shiftGraphPosition",
                value: function () {
                  var t = this.w.globals,
                    e = t.translateY,
                    n = t.translateX;
                  x.setAttrs(t.dom.elGraphical.node, {
                    transform: "translate(".concat(n, ", ").concat(e, ")"),
                  });
                },
              },
              {
                key: "resizeNonAxisCharts",
                value: function () {
                  var t = this.w,
                    e = t.globals,
                    n = 0,
                    i = t.config.chart.sparkline.enabled ? 1 : 15;
                  (i += t.config.grid.padding.bottom),
                    ["top", "bottom"].includes(t.config.legend.position) &&
                      t.config.legend.show &&
                      !t.config.legend.floating &&
                      (n =
                        new bt(this.ctx).legendHelpers.getLegendDimensions()
                          .clwh + 7);
                  var r = t.globals.dom.baseEl.querySelector(
                      ".apexcharts-radialbar, .apexcharts-pie"
                    ),
                    o = 2.05 * t.globals.radialSize;
                  if (
                    r &&
                    !t.config.chart.sparkline.enabled &&
                    0 !== t.config.plotOptions.radialBar.startAngle
                  ) {
                    var a = O.getBoundingClientRect(r);
                    o = a.bottom;
                    var s = a.bottom - a.top;
                    o = Math.max(2.05 * t.globals.radialSize, s);
                  }
                  var l = Math.ceil(o + e.translateY + n + i);
                  e.dom.elLegendForeign &&
                    e.dom.elLegendForeign.setAttribute("height", l),
                    (t.config.chart.height &&
                      String(t.config.chart.height).includes("%")) ||
                      ((e.dom.elWrap.style.height = "".concat(l, "px")),
                      x.setAttrs(e.dom.Paper.node, { height: l }),
                      (e.dom.Paper.node.parentNode.parentNode.style.minHeight =
                        "".concat(l, "px")));
                },
              },
              {
                key: "coreCalculations",
                value: function () {
                  new tt(this.ctx).init();
                },
              },
              {
                key: "resetGlobals",
                value: function () {
                  var t = this,
                    e = function () {
                      return t.w.config.series.map(function () {
                        return [];
                      });
                    },
                    n = new F(),
                    i = this.w.globals;
                  n.initGlobalVars(i),
                    (i.seriesXvalues = e()),
                    (i.seriesYvalues = e());
                },
              },
              {
                key: "isMultipleY",
                value: function () {
                  return (
                    !!(
                      Array.isArray(this.w.config.yaxis) &&
                      this.w.config.yaxis.length > 1
                    ) && ((this.w.globals.isMultipleYAxis = !0), !0)
                  );
                },
              },
              {
                key: "xySettings",
                value: function () {
                  var t = this.w,
                    e = null;
                  if (t.globals.axisCharts) {
                    if (
                      ("back" === t.config.xaxis.crosshairs.position &&
                        new ot(this.ctx).drawXCrosshairs(),
                      "back" === t.config.yaxis[0].crosshairs.position &&
                        new ot(this.ctx).drawYCrosshairs(),
                      "datetime" === t.config.xaxis.type &&
                        void 0 === t.config.xaxis.labels.formatter)
                    ) {
                      this.ctx.timeScale = new Ht(this.ctx);
                      var n = [];
                      isFinite(t.globals.minX) &&
                      isFinite(t.globals.maxX) &&
                      !t.globals.isBarHorizontal
                        ? (n = this.ctx.timeScale.calculateTimeScaleTicks(
                            t.globals.minX,
                            t.globals.maxX
                          ))
                        : t.globals.isBarHorizontal &&
                          (n = this.ctx.timeScale.calculateTimeScaleTicks(
                            t.globals.minY,
                            t.globals.maxY
                          )),
                        this.ctx.timeScale.recalcDimensionsBasedOnFormat(n);
                    }
                    e = new z(this.ctx).getCalculatedRatios();
                  }
                  return e;
                },
              },
              {
                key: "updateSourceChart",
                value: function (t) {
                  (this.ctx.w.globals.selection = void 0),
                    this.ctx.updateHelpers._updateOptions(
                      {
                        chart: {
                          selection: {
                            xaxis: {
                              min: t.w.globals.minX,
                              max: t.w.globals.maxX,
                            },
                          },
                        },
                      },
                      !1,
                      !1
                    );
                },
              },
              {
                key: "setupBrushHandler",
                value: function () {
                  var t = this,
                    e = this.w;
                  if (
                    e.config.chart.brush.enabled &&
                    "function" != typeof e.config.chart.events.selection
                  ) {
                    var n = Array.isArray(e.config.chart.brush.targets)
                      ? e.config.chart.brush.targets
                      : [e.config.chart.brush.target];
                    n.forEach(function (e) {
                      var n = ApexCharts.getChartByID(e);
                      (n.w.globals.brushSource = t.ctx),
                        "function" != typeof n.w.config.chart.events.zoomed &&
                          (n.w.config.chart.events.zoomed = function () {
                            return t.updateSourceChart(n);
                          }),
                        "function" != typeof n.w.config.chart.events.scrolled &&
                          (n.w.config.chart.events.scrolled = function () {
                            return t.updateSourceChart(n);
                          });
                    }),
                      (e.config.chart.events.selection = function (t, e) {
                        n.forEach(function (t) {
                          ApexCharts.getChartByID(
                            t
                          ).ctx.updateHelpers._updateOptions(
                            { xaxis: { min: e.xaxis.min, max: e.xaxis.max } },
                            !1,
                            !1,
                            !1,
                            !1
                          );
                        });
                      });
                  }
                },
              },
            ]),
            t
          );
        })(),
        Ut = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "_updateOptions",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    o =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                  return new Promise(function (a) {
                    var s = [e.ctx];
                    r && (s = e.ctx.getSyncedCharts()),
                      e.ctx.w.globals.isExecCalled &&
                        ((s = [e.ctx]), (e.ctx.w.globals.isExecCalled = !1)),
                      s.forEach(function (r, l) {
                        var c = r.w;
                        if (
                          ((c.globals.shouldAnimate = i),
                          n ||
                            ((c.globals.resized = !0),
                            (c.globals.dataChanged = !0),
                            i && r.series.getPreviousPaths()),
                          t &&
                            "object" === y(t) &&
                            ((r.config = new B(t)),
                            (t = z.extendArrayProps(r.config, t, c)),
                            r.w.globals.chartID !== e.ctx.w.globals.chartID &&
                              delete t.series,
                            (c.config = O.extend(c.config, t)),
                            o &&
                              ((c.globals.lastXAxis = t.xaxis
                                ? O.clone(t.xaxis)
                                : []),
                              (c.globals.lastYAxis = t.yaxis
                                ? O.clone(t.yaxis)
                                : []),
                              (c.globals.initialConfig = O.extend(
                                {},
                                c.config
                              )),
                              (c.globals.initialSeries = O.clone(
                                c.config.series
                              )),
                              t.series)))
                        ) {
                          for (
                            var d = 0;
                            d < c.globals.collapsedSeriesIndices.length;
                            d++
                          ) {
                            var u =
                              c.config.series[
                                c.globals.collapsedSeriesIndices[d]
                              ];
                            c.globals.collapsedSeries[d].data = c.globals
                              .axisCharts
                              ? u.data.slice()
                              : u;
                          }
                          for (
                            var p = 0;
                            p <
                            c.globals.ancillaryCollapsedSeriesIndices.length;
                            p++
                          ) {
                            var h =
                              c.config.series[
                                c.globals.ancillaryCollapsedSeriesIndices[p]
                              ];
                            c.globals.ancillaryCollapsedSeries[p].data = c
                              .globals.axisCharts
                              ? h.data.slice()
                              : h;
                          }
                          r.series.emptyCollapsedSeries(c.config.series);
                        }
                        return r.update(t).then(function () {
                          l === s.length - 1 && a(r);
                        });
                      });
                  });
                },
              },
              {
                key: "_updateSeries",
                value: function (t, e) {
                  var n = this,
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  return new Promise(function (r) {
                    var o,
                      a = n.w;
                    return (
                      (a.globals.shouldAnimate = e),
                      (a.globals.dataChanged = !0),
                      e && n.ctx.series.getPreviousPaths(),
                      a.globals.axisCharts
                        ? (0 ===
                            (o = t.map(function (t, e) {
                              return n._extendSeries(t, e);
                            })).length && (o = [{ data: [] }]),
                          (a.config.series = o))
                        : (a.config.series = t.slice()),
                      i &&
                        ((a.globals.initialConfig.series = O.clone(
                          a.config.series
                        )),
                        (a.globals.initialSeries = O.clone(a.config.series))),
                      n.ctx.update().then(function () {
                        r(n.ctx);
                      })
                    );
                  });
                },
              },
              {
                key: "_extendSeries",
                value: function (t, e) {
                  var n = this.w,
                    i = n.config.series[e];
                  return b(
                    b({}, n.config.series[e]),
                    {},
                    {
                      name: t.name ? t.name : null == i ? void 0 : i.name,
                      color: t.color ? t.color : null == i ? void 0 : i.color,
                      type: t.type ? t.type : null == i ? void 0 : i.type,
                      group: t.group ? t.group : null == i ? void 0 : i.group,
                      hidden:
                        void 0 !== t.hidden
                          ? t.hidden
                          : null == i
                          ? void 0
                          : i.hidden,
                      data: t.data ? t.data : null == i ? void 0 : i.data,
                      zIndex: void 0 !== t.zIndex ? t.zIndex : e,
                    }
                  );
                },
              },
              {
                key: "toggleDataPointSelection",
                value: function (t, e) {
                  var n = this.w,
                    i = null,
                    r = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
                  return (
                    n.globals.axisCharts
                      ? (i = n.globals.dom.Paper.select(
                          ""
                            .concat(r, " path[j='")
                            .concat(e, "'], ")
                            .concat(r, " circle[j='")
                            .concat(e, "'], ")
                            .concat(r, " rect[j='")
                            .concat(e, "']")
                        ).members[0])
                      : void 0 === e &&
                        ((i = n.globals.dom.Paper.select(
                          "".concat(r, " path[j='").concat(t, "']")
                        ).members[0]),
                        ("pie" !== n.config.chart.type &&
                          "polarArea" !== n.config.chart.type &&
                          "donut" !== n.config.chart.type) ||
                          this.ctx.pie.pieClicked(t)),
                    i
                      ? (new x(this.ctx).pathMouseDown(i, null),
                        i.node ? i.node : null)
                      : null
                  );
                },
              },
              {
                key: "forceXAxisUpdate",
                value: function (t) {
                  var e = this.w;
                  if (
                    (["min", "max"].forEach(function (n) {
                      void 0 !== t.xaxis[n] &&
                        ((e.config.xaxis[n] = t.xaxis[n]),
                        (e.globals.lastXAxis[n] = t.xaxis[n]));
                    }),
                    t.xaxis.categories &&
                      t.xaxis.categories.length &&
                      (e.config.xaxis.categories = t.xaxis.categories),
                    e.config.xaxis.convertedCatToNumeric)
                  ) {
                    var n = new N(t);
                    t = n.convertCatToNumericXaxis(t, this.ctx);
                  }
                  return t;
                },
              },
              {
                key: "forceYAxisUpdate",
                value: function (t) {
                  return (
                    t.chart &&
                      t.chart.stacked &&
                      "100%" === t.chart.stackType &&
                      (Array.isArray(t.yaxis)
                        ? t.yaxis.forEach(function (e, n) {
                            (t.yaxis[n].min = 0), (t.yaxis[n].max = 100);
                          })
                        : ((t.yaxis.min = 0), (t.yaxis.max = 100))),
                    t
                  );
                },
              },
              {
                key: "revertDefaultAxisMinMax",
                value: function (t) {
                  var e = this,
                    n = this.w,
                    i = n.globals.lastXAxis,
                    r = n.globals.lastYAxis;
                  t && t.xaxis && (i = t.xaxis),
                    t && t.yaxis && (r = t.yaxis),
                    (n.config.xaxis.min = i.min),
                    (n.config.xaxis.max = i.max),
                    n.config.yaxis.map(function (t, i) {
                      n.globals.zoomed || void 0 !== r[i]
                        ? (function (t) {
                            void 0 !== r[t] &&
                              ((n.config.yaxis[t].min = r[t].min),
                              (n.config.yaxis[t].max = r[t].max));
                          })(i)
                        : void 0 !== e.ctx.opts.yaxis[i] &&
                          ((t.min = e.ctx.opts.yaxis[i].min),
                          (t.max = e.ctx.opts.yaxis[i].max));
                    });
                },
              },
            ]),
            t
          );
        })();
      (Bt = "undefined" != typeof window ? window : void 0),
        (Ft = function (t, e) {
          var n = ((void 0 !== this ? this : t).SVG = function (t) {
            if (n.supported)
              return (t = new n.Doc(t)), n.parser.draw || n.prepare(), t;
          });
          if (
            ((n.ns = "http://www.w3.org/2000/svg"),
            (n.xmlns = "http://www.w3.org/2000/xmlns/"),
            (n.xlink = "http://www.w3.org/1999/xlink"),
            (n.svgjs = "http://svgjs.dev"),
            (n.supported = !0),
            !n.supported)
          )
            return !1;
          (n.did = 1e3),
            (n.eid = function (t) {
              return "Svgjs" + d(t) + n.did++;
            }),
            (n.create = function (t) {
              var n = e.createElementNS(this.ns, t);
              return n.setAttribute("id", this.eid(t)), n;
            }),
            (n.extend = function () {
              var t, e;
              e = (t = [].slice.call(arguments)).pop();
              for (var i = t.length - 1; i >= 0; i--)
                if (t[i]) for (var r in e) t[i].prototype[r] = e[r];
              n.Set && n.Set.inherit && n.Set.inherit();
            }),
            (n.invent = function (t) {
              var e =
                "function" == typeof t.create
                  ? t.create
                  : function () {
                      this.constructor.call(this, n.create(t.create));
                    };
              return (
                t.inherit && (e.prototype = new t.inherit()),
                t.extend && n.extend(e, t.extend),
                t.construct && n.extend(t.parent || n.Container, t.construct),
                e
              );
            }),
            (n.adopt = function (e) {
              return e
                ? e.instance
                  ? e.instance
                  : (((i =
                      "svg" == e.nodeName
                        ? e.parentNode instanceof t.SVGElement
                          ? new n.Nested()
                          : new n.Doc()
                        : "linearGradient" == e.nodeName
                        ? new n.Gradient("linear")
                        : "radialGradient" == e.nodeName
                        ? new n.Gradient("radial")
                        : n[d(e.nodeName)]
                        ? new n[d(e.nodeName)]()
                        : new n.Element(e)).type = e.nodeName),
                    (i.node = e),
                    (e.instance = i),
                    i instanceof n.Doc && i.namespace().defs(),
                    i.setData(JSON.parse(e.getAttribute("svgjs:data")) || {}),
                    i)
                : null;
              var i;
            }),
            (n.prepare = function () {
              var t = e.getElementsByTagName("body")[0],
                i = (
                  t ? new n.Doc(t) : n.adopt(e.documentElement).nested()
                ).size(2, 0);
              n.parser = {
                body: t || e.documentElement,
                draw: i.style(
                  "opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden"
                ).node,
                poly: i.polyline().node,
                path: i.path().node,
                native: n.create("svg"),
              };
            }),
            (n.parser = { native: n.create("svg") }),
            e.addEventListener(
              "DOMContentLoaded",
              function () {
                n.parser.draw || n.prepare();
              },
              !1
            ),
            (n.regex = {
              numberAndUnit:
                /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
              hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
              rgb: /rgb\((\d+),(\d+),(\d+)\)/,
              reference: /#([a-z0-9\-_]+)/i,
              transforms: /\)\s*,?\s*/,
              whitespace: /\s/g,
              isHex: /^#[a-f0-9]{3,6}$/i,
              isRgb: /^rgb\(/,
              isCss: /[^:]+:[^;]+;?/,
              isBlank: /^(\s+)?$/,
              isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
              isPercent: /^-?[\d\.]+%$/,
              isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
              delimiter: /[\s,]+/,
              hyphen: /([^e])\-/gi,
              pathLetters: /[MLHVCSQTAZ]/gi,
              isPathLetter: /[MLHVCSQTAZ]/i,
              numbersWithDots:
                /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
              dots: /\./g,
            }),
            (n.utils = {
              map: function (t, e) {
                for (var n = t.length, i = [], r = 0; r < n; r++)
                  i.push(e(t[r]));
                return i;
              },
              filter: function (t, e) {
                for (var n = t.length, i = [], r = 0; r < n; r++)
                  e(t[r]) && i.push(t[r]);
                return i;
              },
              filterSVGElements: function (e) {
                return this.filter(e, function (e) {
                  return e instanceof t.SVGElement;
                });
              },
            }),
            (n.defaults = {
              attrs: {
                "fill-opacity": 1,
                "stroke-opacity": 1,
                "stroke-width": 0,
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                fill: "#000000",
                stroke: "#000000",
                opacity: 1,
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                width: 0,
                height: 0,
                r: 0,
                rx: 0,
                ry: 0,
                offset: 0,
                "stop-opacity": 1,
                "stop-color": "#000000",
                "font-size": 16,
                "font-family": "Helvetica, Arial, sans-serif",
                "text-anchor": "start",
              },
            }),
            (n.Color = function (t) {
              var e, i;
              (this.r = 0),
                (this.g = 0),
                (this.b = 0),
                t &&
                  ("string" == typeof t
                    ? n.regex.isRgb.test(t)
                      ? ((e = n.regex.rgb.exec(
                          t.replace(n.regex.whitespace, "")
                        )),
                        (this.r = parseInt(e[1])),
                        (this.g = parseInt(e[2])),
                        (this.b = parseInt(e[3])))
                      : n.regex.isHex.test(t) &&
                        ((e = n.regex.hex.exec(
                          4 == (i = t).length
                            ? [
                                "#",
                                i.substring(1, 2),
                                i.substring(1, 2),
                                i.substring(2, 3),
                                i.substring(2, 3),
                                i.substring(3, 4),
                                i.substring(3, 4),
                              ].join("")
                            : i
                        )),
                        (this.r = parseInt(e[1], 16)),
                        (this.g = parseInt(e[2], 16)),
                        (this.b = parseInt(e[3], 16)))
                    : "object" === y(t) &&
                      ((this.r = t.r), (this.g = t.g), (this.b = t.b)));
            }),
            n.extend(n.Color, {
              toString: function () {
                return this.toHex();
              },
              toHex: function () {
                return "#" + u(this.r) + u(this.g) + u(this.b);
              },
              toRgb: function () {
                return "rgb(" + [this.r, this.g, this.b].join() + ")";
              },
              brightness: function () {
                return (
                  (this.r / 255) * 0.3 +
                  (this.g / 255) * 0.59 +
                  (this.b / 255) * 0.11
                );
              },
              morph: function (t) {
                return (this.destination = new n.Color(t)), this;
              },
              at: function (t) {
                return this.destination
                  ? ((t = t < 0 ? 0 : t > 1 ? 1 : t),
                    new n.Color({
                      r: ~~(this.r + (this.destination.r - this.r) * t),
                      g: ~~(this.g + (this.destination.g - this.g) * t),
                      b: ~~(this.b + (this.destination.b - this.b) * t),
                    }))
                  : this;
              },
            }),
            (n.Color.test = function (t) {
              return (t += ""), n.regex.isHex.test(t) || n.regex.isRgb.test(t);
            }),
            (n.Color.isRgb = function (t) {
              return (
                t &&
                "number" == typeof t.r &&
                "number" == typeof t.g &&
                "number" == typeof t.b
              );
            }),
            (n.Color.isColor = function (t) {
              return n.Color.isRgb(t) || n.Color.test(t);
            }),
            (n.Array = function (t, e) {
              0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()),
                (this.value = this.parse(t));
            }),
            n.extend(n.Array, {
              toString: function () {
                return this.value.join(" ");
              },
              valueOf: function () {
                return this.value;
              },
              parse: function (t) {
                return (t = t.valueOf()), Array.isArray(t) ? t : this.split(t);
              },
            }),
            (n.PointArray = function (t, e) {
              n.Array.call(this, t, e || [[0, 0]]);
            }),
            (n.PointArray.prototype = new n.Array()),
            (n.PointArray.prototype.constructor = n.PointArray);
          for (
            var i = {
                M: function (t, e, n) {
                  return (
                    (e.x = n.x = t[0]), (e.y = n.y = t[1]), ["M", e.x, e.y]
                  );
                },
                L: function (t, e) {
                  return (e.x = t[0]), (e.y = t[1]), ["L", t[0], t[1]];
                },
                H: function (t, e) {
                  return (e.x = t[0]), ["H", t[0]];
                },
                V: function (t, e) {
                  return (e.y = t[0]), ["V", t[0]];
                },
                C: function (t, e) {
                  return (
                    (e.x = t[4]),
                    (e.y = t[5]),
                    ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                  );
                },
                Q: function (t, e) {
                  return (
                    (e.x = t[2]), (e.y = t[3]), ["Q", t[0], t[1], t[2], t[3]]
                  );
                },
                S: function (t, e) {
                  return (
                    (e.x = t[2]), (e.y = t[3]), ["S", t[0], t[1], t[2], t[3]]
                  );
                },
                Z: function (t, e, n) {
                  return (e.x = n.x), (e.y = n.y), ["Z"];
                },
              },
              r = "mlhvqtcsaz".split(""),
              o = 0,
              a = r.length;
            o < a;
            ++o
          )
            i[r[o]] = (function (t) {
              return function (e, n, r) {
                if ("H" == t) e[0] = e[0] + n.x;
                else if ("V" == t) e[0] = e[0] + n.y;
                else if ("A" == t) (e[5] = e[5] + n.x), (e[6] = e[6] + n.y);
                else
                  for (var o = 0, a = e.length; o < a; ++o)
                    e[o] = e[o] + (o % 2 ? n.y : n.x);
                if (i && "function" == typeof i[t]) return i[t](e, n, r);
              };
            })(r[o].toUpperCase());
          (n.PathArray = function (t, e) {
            n.Array.call(this, t, e || [["M", 0, 0]]);
          }),
            (n.PathArray.prototype = new n.Array()),
            (n.PathArray.prototype.constructor = n.PathArray),
            n.extend(n.PathArray, {
              toString: function () {
                return (function (t) {
                  for (var e = 0, n = t.length, i = ""; e < n; e++)
                    (i += t[e][0]),
                      null != t[e][1] &&
                        ((i += t[e][1]),
                        null != t[e][2] &&
                          ((i += " "),
                          (i += t[e][2]),
                          null != t[e][3] &&
                            ((i += " "),
                            (i += t[e][3]),
                            (i += " "),
                            (i += t[e][4]),
                            null != t[e][5] &&
                              ((i += " "),
                              (i += t[e][5]),
                              (i += " "),
                              (i += t[e][6]),
                              null != t[e][7] &&
                                ((i += " "), (i += t[e][7]))))));
                  return i + " ";
                })(this.value);
              },
              move: function (t, e) {
                var n = this.bbox();
                return n.x, n.y, this;
              },
              at: function (t) {
                if (!this.destination) return this;
                for (
                  var e = this.value,
                    i = this.destination.value,
                    r = [],
                    o = new n.PathArray(),
                    a = 0,
                    s = e.length;
                  a < s;
                  a++
                ) {
                  r[a] = [e[a][0]];
                  for (var l = 1, c = e[a].length; l < c; l++)
                    r[a][l] = e[a][l] + (i[a][l] - e[a][l]) * t;
                  "A" === r[a][0] &&
                    ((r[a][4] = +(0 != r[a][4])), (r[a][5] = +(0 != r[a][5])));
                }
                return (o.value = r), o;
              },
              parse: function (t) {
                if (t instanceof n.PathArray) return t.valueOf();
                var e,
                  r = {
                    M: 2,
                    L: 2,
                    H: 1,
                    V: 1,
                    C: 6,
                    S: 4,
                    Q: 4,
                    T: 2,
                    A: 7,
                    Z: 0,
                  };
                t =
                  "string" == typeof t
                    ? t
                        .replace(n.regex.numbersWithDots, l)
                        .replace(n.regex.pathLetters, " $& ")
                        .replace(n.regex.hyphen, "$1 -")
                        .trim()
                        .split(n.regex.delimiter)
                    : t.reduce(function (t, e) {
                        return [].concat.call(t, e);
                      }, []);
                var o = [],
                  a = new n.Point(),
                  s = new n.Point(),
                  c = 0,
                  d = t.length;
                do {
                  n.regex.isPathLetter.test(t[c])
                    ? ((e = t[c]), ++c)
                    : "M" == e
                    ? (e = "L")
                    : "m" == e && (e = "l"),
                    o.push(
                      i[e].call(
                        null,
                        t.slice(c, (c += r[e.toUpperCase()])).map(parseFloat),
                        a,
                        s
                      )
                    );
                } while (d > c);
                return o;
              },
              bbox: function () {
                return (
                  n.parser.draw || n.prepare(),
                  n.parser.path.setAttribute("d", this.toString()),
                  n.parser.path.getBBox()
                );
              },
            }),
            (n.Number = n.invent({
              create: function (t, e) {
                (this.value = 0),
                  (this.unit = e || ""),
                  "number" == typeof t
                    ? (this.value = isNaN(t)
                        ? 0
                        : isFinite(t)
                        ? t
                        : t < 0
                        ? -34e37
                        : 34e37)
                    : "string" == typeof t
                    ? (e = t.match(n.regex.numberAndUnit)) &&
                      ((this.value = parseFloat(e[1])),
                      "%" == e[5]
                        ? (this.value /= 100)
                        : "s" == e[5] && (this.value *= 1e3),
                      (this.unit = e[5]))
                    : t instanceof n.Number &&
                      ((this.value = t.valueOf()), (this.unit = t.unit));
              },
              extend: {
                toString: function () {
                  return (
                    ("%" == this.unit
                      ? ~~(1e8 * this.value) / 1e6
                      : "s" == this.unit
                      ? this.value / 1e3
                      : this.value) + this.unit
                  );
                },
                toJSON: function () {
                  return this.toString();
                },
                valueOf: function () {
                  return this.value;
                },
                plus: function (t) {
                  return (
                    (t = new n.Number(t)),
                    new n.Number(this + t, this.unit || t.unit)
                  );
                },
                minus: function (t) {
                  return (
                    (t = new n.Number(t)),
                    new n.Number(this - t, this.unit || t.unit)
                  );
                },
                times: function (t) {
                  return (
                    (t = new n.Number(t)),
                    new n.Number(this * t, this.unit || t.unit)
                  );
                },
                divide: function (t) {
                  return (
                    (t = new n.Number(t)),
                    new n.Number(this / t, this.unit || t.unit)
                  );
                },
                to: function (t) {
                  var e = new n.Number(this);
                  return "string" == typeof t && (e.unit = t), e;
                },
                morph: function (t) {
                  return (
                    (this.destination = new n.Number(t)),
                    t.relative && (this.destination.value += this.value),
                    this
                  );
                },
                at: function (t) {
                  return this.destination
                    ? new n.Number(this.destination)
                        .minus(this)
                        .times(t)
                        .plus(this)
                    : this;
                },
              },
            })),
            (n.Element = n.invent({
              create: function (t) {
                (this._stroke = n.defaults.attrs.stroke),
                  (this._event = null),
                  (this.dom = {}),
                  (this.node = t) &&
                    ((this.type = t.nodeName),
                    (this.node.instance = this),
                    (this._stroke = t.getAttribute("stroke") || this._stroke));
              },
              extend: {
                x: function (t) {
                  return this.attr("x", t);
                },
                y: function (t) {
                  return this.attr("y", t);
                },
                cx: function (t) {
                  return null == t
                    ? this.x() + this.width() / 2
                    : this.x(t - this.width() / 2);
                },
                cy: function (t) {
                  return null == t
                    ? this.y() + this.height() / 2
                    : this.y(t - this.height() / 2);
                },
                move: function (t, e) {
                  return this.x(t).y(e);
                },
                center: function (t, e) {
                  return this.cx(t).cy(e);
                },
                width: function (t) {
                  return this.attr("width", t);
                },
                height: function (t) {
                  return this.attr("height", t);
                },
                size: function (t, e) {
                  var i = p(this, t, e);
                  return this.width(new n.Number(i.width)).height(
                    new n.Number(i.height)
                  );
                },
                clone: function (t) {
                  this.writeDataToDom();
                  var e = b(this.node.cloneNode(!0));
                  return t ? t.add(e) : this.after(e), e;
                },
                remove: function () {
                  return (
                    this.parent() && this.parent().removeElement(this), this
                  );
                },
                replace: function (t) {
                  return this.after(t).remove(), t;
                },
                addTo: function (t) {
                  return t.put(this);
                },
                putIn: function (t) {
                  return t.add(this);
                },
                id: function (t) {
                  return this.attr("id", t);
                },
                show: function () {
                  return this.style("display", "");
                },
                hide: function () {
                  return this.style("display", "none");
                },
                visible: function () {
                  return "none" != this.style("display");
                },
                toString: function () {
                  return this.attr("id");
                },
                classes: function () {
                  var t = this.attr("class");
                  return null == t ? [] : t.trim().split(n.regex.delimiter);
                },
                hasClass: function (t) {
                  return -1 != this.classes().indexOf(t);
                },
                addClass: function (t) {
                  if (!this.hasClass(t)) {
                    var e = this.classes();
                    e.push(t), this.attr("class", e.join(" "));
                  }
                  return this;
                },
                removeClass: function (t) {
                  return (
                    this.hasClass(t) &&
                      this.attr(
                        "class",
                        this.classes()
                          .filter(function (e) {
                            return e != t;
                          })
                          .join(" ")
                      ),
                    this
                  );
                },
                toggleClass: function (t) {
                  return this.hasClass(t)
                    ? this.removeClass(t)
                    : this.addClass(t);
                },
                reference: function (t) {
                  return n.get(this.attr(t));
                },
                parent: function (e) {
                  var i = this;
                  if (!i.node.parentNode) return null;
                  if (((i = n.adopt(i.node.parentNode)), !e)) return i;
                  for (; i && i.node instanceof t.SVGElement; ) {
                    if ("string" == typeof e ? i.matches(e) : i instanceof e)
                      return i;
                    if (
                      !i.node.parentNode ||
                      "#document" == i.node.parentNode.nodeName
                    )
                      return null;
                    i = n.adopt(i.node.parentNode);
                  }
                },
                doc: function () {
                  return this instanceof n.Doc ? this : this.parent(n.Doc);
                },
                parents: function (t) {
                  var e = [],
                    n = this;
                  do {
                    if (!(n = n.parent(t)) || !n.node) break;
                    e.push(n);
                  } while (n.parent);
                  return e;
                },
                matches: function (t) {
                  return (function (t, e) {
                    return (
                      t.matches ||
                      t.matchesSelector ||
                      t.msMatchesSelector ||
                      t.mozMatchesSelector ||
                      t.webkitMatchesSelector ||
                      t.oMatchesSelector
                    ).call(t, e);
                  })(this.node, t);
                },
                native: function () {
                  return this.node;
                },
                svg: function (t) {
                  var i = e.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  );
                  if (!(t && this instanceof n.Parent))
                    return (
                      i.appendChild(
                        (t = e.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "svg"
                        ))
                      ),
                      this.writeDataToDom(),
                      t.appendChild(this.node.cloneNode(!0)),
                      i.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "")
                    );
                  i.innerHTML =
                    "<svg>" +
                    t
                      .replace(/\n/, "")
                      .replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") +
                    "</svg>";
                  for (
                    var r = 0, o = i.firstChild.childNodes.length;
                    r < o;
                    r++
                  )
                    this.node.appendChild(i.firstChild.firstChild);
                  return this;
                },
                writeDataToDom: function () {
                  return (
                    (this.each || this.lines) &&
                      (this.each ? this : this.lines()).each(function () {
                        this.writeDataToDom();
                      }),
                    this.node.removeAttribute("svgjs:data"),
                    Object.keys(this.dom).length &&
                      this.node.setAttribute(
                        "svgjs:data",
                        JSON.stringify(this.dom)
                      ),
                    this
                  );
                },
                setData: function (t) {
                  return (this.dom = t), this;
                },
                is: function (t) {
                  return (function (t, e) {
                    return t instanceof e;
                  })(this, t);
                },
              },
            })),
            (n.easing = {
              "-": function (t) {
                return t;
              },
              "<>": function (t) {
                return -Math.cos(t * Math.PI) / 2 + 0.5;
              },
              ">": function (t) {
                return Math.sin((t * Math.PI) / 2);
              },
              "<": function (t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              },
            }),
            (n.morph = function (t) {
              return function (e, i) {
                return new n.MorphObj(e, i).at(t);
              };
            }),
            (n.Situation = n.invent({
              create: function (t) {
                (this.init = !1),
                  (this.reversed = !1),
                  (this.reversing = !1),
                  (this.duration = new n.Number(t.duration).valueOf()),
                  (this.delay = new n.Number(t.delay).valueOf()),
                  (this.start = +new Date() + this.delay),
                  (this.finish = this.start + this.duration),
                  (this.ease = t.ease),
                  (this.loop = 0),
                  (this.loops = !1),
                  (this.animations = {}),
                  (this.attrs = {}),
                  (this.styles = {}),
                  (this.transforms = []),
                  (this.once = {});
              },
            })),
            (n.FX = n.invent({
              create: function (t) {
                (this._target = t),
                  (this.situations = []),
                  (this.active = !1),
                  (this.situation = null),
                  (this.paused = !1),
                  (this.lastPos = 0),
                  (this.pos = 0),
                  (this.absPos = 0),
                  (this._speed = 1);
              },
              extend: {
                animate: function (t, e, i) {
                  "object" === y(t) &&
                    ((e = t.ease), (i = t.delay), (t = t.duration));
                  var r = new n.Situation({
                    duration: t || 1e3,
                    delay: i || 0,
                    ease: n.easing[e || "-"] || e,
                  });
                  return this.queue(r), this;
                },
                target: function (t) {
                  return t && t instanceof n.Element
                    ? ((this._target = t), this)
                    : this._target;
                },
                timeToAbsPos: function (t) {
                  return (
                    (t - this.situation.start) /
                    (this.situation.duration / this._speed)
                  );
                },
                absPosToTime: function (t) {
                  return (
                    (this.situation.duration / this._speed) * t +
                    this.situation.start
                  );
                },
                startAnimFrame: function () {
                  this.stopAnimFrame(),
                    (this.animationFrame = t.requestAnimationFrame(
                      function () {
                        this.step();
                      }.bind(this)
                    ));
                },
                stopAnimFrame: function () {
                  t.cancelAnimationFrame(this.animationFrame);
                },
                start: function () {
                  return (
                    !this.active &&
                      this.situation &&
                      ((this.active = !0), this.startCurrent()),
                    this
                  );
                },
                startCurrent: function () {
                  return (
                    (this.situation.start =
                      +new Date() + this.situation.delay / this._speed),
                    (this.situation.finish =
                      this.situation.start +
                      this.situation.duration / this._speed),
                    this.initAnimations().step()
                  );
                },
                queue: function (t) {
                  return (
                    ("function" == typeof t || t instanceof n.Situation) &&
                      this.situations.push(t),
                    this.situation ||
                      (this.situation = this.situations.shift()),
                    this
                  );
                },
                dequeue: function () {
                  return (
                    this.stop(),
                    (this.situation = this.situations.shift()),
                    this.situation &&
                      (this.situation instanceof n.Situation
                        ? this.start()
                        : this.situation.call(this)),
                    this
                  );
                },
                initAnimations: function () {
                  var t,
                    e = this.situation;
                  if (e.init) return this;
                  for (var i in e.animations) {
                    (t = this.target()[i]()),
                      Array.isArray(t) || (t = [t]),
                      Array.isArray(e.animations[i]) ||
                        (e.animations[i] = [e.animations[i]]);
                    for (var r = t.length; r--; )
                      e.animations[i][r] instanceof n.Number &&
                        (t[r] = new n.Number(t[r])),
                        (e.animations[i][r] = t[r].morph(e.animations[i][r]));
                  }
                  for (var i in e.attrs)
                    e.attrs[i] = new n.MorphObj(
                      this.target().attr(i),
                      e.attrs[i]
                    );
                  for (var i in e.styles)
                    e.styles[i] = new n.MorphObj(
                      this.target().style(i),
                      e.styles[i]
                    );
                  return (
                    (e.initialTransformation = this.target().matrixify()),
                    (e.init = !0),
                    this
                  );
                },
                clearQueue: function () {
                  return (this.situations = []), this;
                },
                clearCurrent: function () {
                  return (this.situation = null), this;
                },
                stop: function (t, e) {
                  var n = this.active;
                  return (
                    (this.active = !1),
                    e && this.clearQueue(),
                    t &&
                      this.situation &&
                      (!n && this.startCurrent(), this.atEnd()),
                    this.stopAnimFrame(),
                    this.clearCurrent()
                  );
                },
                after: function (t) {
                  var e = this.last();
                  return (
                    this.target().on("finished.fx", function n(i) {
                      i.detail.situation == e &&
                        (t.call(this, e), this.off("finished.fx", n));
                    }),
                    this._callStart()
                  );
                },
                during: function (t) {
                  var e = this.last(),
                    i = function (i) {
                      i.detail.situation == e &&
                        t.call(
                          this,
                          i.detail.pos,
                          n.morph(i.detail.pos),
                          i.detail.eased,
                          e
                        );
                    };
                  return (
                    this.target().off("during.fx", i).on("during.fx", i),
                    this.after(function () {
                      this.off("during.fx", i);
                    }),
                    this._callStart()
                  );
                },
                afterAll: function (t) {
                  var e = function e(n) {
                    t.call(this), this.off("allfinished.fx", e);
                  };
                  return (
                    this.target()
                      .off("allfinished.fx", e)
                      .on("allfinished.fx", e),
                    this._callStart()
                  );
                },
                last: function () {
                  return this.situations.length
                    ? this.situations[this.situations.length - 1]
                    : this.situation;
                },
                add: function (t, e, n) {
                  return (
                    (this.last()[n || "animations"][t] = e), this._callStart()
                  );
                },
                step: function (t) {
                  var e, n, i;
                  t || (this.absPos = this.timeToAbsPos(+new Date())),
                    !1 !== this.situation.loops
                      ? ((e = Math.max(this.absPos, 0)),
                        (n = Math.floor(e)),
                        !0 === this.situation.loops || n < this.situation.loops
                          ? ((this.pos = e - n),
                            (i = this.situation.loop),
                            (this.situation.loop = n))
                          : ((this.absPos = this.situation.loops),
                            (this.pos = 1),
                            (i = this.situation.loop - 1),
                            (this.situation.loop = this.situation.loops)),
                        this.situation.reversing &&
                          (this.situation.reversed =
                            this.situation.reversed !=
                            Boolean((this.situation.loop - i) % 2)))
                      : ((this.absPos = Math.min(this.absPos, 1)),
                        (this.pos = this.absPos)),
                    this.pos < 0 && (this.pos = 0),
                    this.situation.reversed && (this.pos = 1 - this.pos);
                  var r = this.situation.ease(this.pos);
                  for (var o in this.situation.once)
                    o > this.lastPos &&
                      o <= r &&
                      (this.situation.once[o].call(this.target(), this.pos, r),
                      delete this.situation.once[o]);
                  return (
                    this.active &&
                      this.target().fire("during", {
                        pos: this.pos,
                        eased: r,
                        fx: this,
                        situation: this.situation,
                      }),
                    this.situation
                      ? (this.eachAt(),
                        (1 == this.pos && !this.situation.reversed) ||
                        (this.situation.reversed && 0 == this.pos)
                          ? (this.stopAnimFrame(),
                            this.target().fire("finished", {
                              fx: this,
                              situation: this.situation,
                            }),
                            this.situations.length ||
                              (this.target().fire("allfinished"),
                              this.situations.length ||
                                (this.target().off(".fx"), (this.active = !1))),
                            this.active ? this.dequeue() : this.clearCurrent())
                          : !this.paused &&
                            this.active &&
                            this.startAnimFrame(),
                        (this.lastPos = r),
                        this)
                      : this
                  );
                },
                eachAt: function () {
                  var t,
                    e = this,
                    i = this.target(),
                    r = this.situation;
                  for (var o in r.animations)
                    (t = [].concat(r.animations[o]).map(function (t) {
                      return "string" != typeof t && t.at
                        ? t.at(r.ease(e.pos), e.pos)
                        : t;
                    })),
                      i[o].apply(i, t);
                  for (var o in r.attrs)
                    (t = [o].concat(r.attrs[o]).map(function (t) {
                      return "string" != typeof t && t.at
                        ? t.at(r.ease(e.pos), e.pos)
                        : t;
                    })),
                      i.attr.apply(i, t);
                  for (var o in r.styles)
                    (t = [o].concat(r.styles[o]).map(function (t) {
                      return "string" != typeof t && t.at
                        ? t.at(r.ease(e.pos), e.pos)
                        : t;
                    })),
                      i.style.apply(i, t);
                  if (r.transforms.length) {
                    (t = r.initialTransformation), (o = 0);
                    for (var a = r.transforms.length; o < a; o++) {
                      var s = r.transforms[o];
                      s instanceof n.Matrix
                        ? (t = s.relative
                            ? t.multiply(
                                new n.Matrix().morph(s).at(r.ease(this.pos))
                              )
                            : t.morph(s).at(r.ease(this.pos)))
                        : (s.relative || s.undo(t.extract()),
                          (t = t.multiply(s.at(r.ease(this.pos)))));
                    }
                    i.matrix(t);
                  }
                  return this;
                },
                once: function (t, e, n) {
                  var i = this.last();
                  return n || (t = i.ease(t)), (i.once[t] = e), this;
                },
                _callStart: function () {
                  return (
                    setTimeout(
                      function () {
                        this.start();
                      }.bind(this),
                      0
                    ),
                    this
                  );
                },
              },
              parent: n.Element,
              construct: {
                animate: function (t, e, i) {
                  return (this.fx || (this.fx = new n.FX(this))).animate(
                    t,
                    e,
                    i
                  );
                },
                delay: function (t) {
                  return (this.fx || (this.fx = new n.FX(this))).delay(t);
                },
                stop: function (t, e) {
                  return this.fx && this.fx.stop(t, e), this;
                },
                finish: function () {
                  return this.fx && this.fx.finish(), this;
                },
              },
            })),
            (n.MorphObj = n.invent({
              create: function (t, e) {
                return n.Color.isColor(e)
                  ? new n.Color(t).morph(e)
                  : n.regex.delimiter.test(t)
                  ? n.regex.pathLetters.test(t)
                    ? new n.PathArray(t).morph(e)
                    : new n.Array(t).morph(e)
                  : n.regex.numberAndUnit.test(e)
                  ? new n.Number(t).morph(e)
                  : ((this.value = t), void (this.destination = e));
              },
              extend: {
                at: function (t, e) {
                  return e < 1 ? this.value : this.destination;
                },
                valueOf: function () {
                  return this.value;
                },
              },
            })),
            n.extend(n.FX, {
              attr: function (t, e, n) {
                if ("object" === y(t)) for (var i in t) this.attr(i, t[i]);
                else this.add(t, e, "attrs");
                return this;
              },
              plot: function (t, e, n, i) {
                return 4 == arguments.length
                  ? this.plot([t, e, n, i])
                  : this.add("plot", new (this.target().morphArray)(t));
              },
            }),
            (n.Box = n.invent({
              create: function (t, e, i, r) {
                if (!("object" !== y(t) || t instanceof n.Element))
                  return n.Box.call(
                    this,
                    null != t.left ? t.left : t.x,
                    null != t.top ? t.top : t.y,
                    t.width,
                    t.height
                  );
                var o;
                4 == arguments.length &&
                  ((this.x = t),
                  (this.y = e),
                  (this.width = i),
                  (this.height = r)),
                  null == (o = this).x &&
                    ((o.x = 0), (o.y = 0), (o.width = 0), (o.height = 0)),
                  (o.w = o.width),
                  (o.h = o.height),
                  (o.x2 = o.x + o.width),
                  (o.y2 = o.y + o.height),
                  (o.cx = o.x + o.width / 2),
                  (o.cy = o.y + o.height / 2);
              },
            })),
            (n.BBox = n.invent({
              create: function (t) {
                if (
                  (n.Box.apply(this, [].slice.call(arguments)),
                  t instanceof n.Element)
                ) {
                  var i;
                  try {
                    if (!e.documentElement.contains) {
                      for (var r = t.node; r.parentNode; ) r = r.parentNode;
                      if (r != e) throw new Error("Element not in the dom");
                    }
                    i = t.node.getBBox();
                  } catch (e) {
                    if (t instanceof n.Shape) {
                      n.parser.draw || n.prepare();
                      var o = t.clone(n.parser.draw.instance).show();
                      o &&
                        o.node &&
                        "function" == typeof o.node.getBBox &&
                        (i = o.node.getBBox()),
                        o && "function" == typeof o.remove && o.remove();
                    } else
                      i = {
                        x: t.node.clientLeft,
                        y: t.node.clientTop,
                        width: t.node.clientWidth,
                        height: t.node.clientHeight,
                      };
                  }
                  n.Box.call(this, i);
                }
              },
              inherit: n.Box,
              parent: n.Element,
              construct: {
                bbox: function () {
                  return new n.BBox(this);
                },
              },
            })),
            (n.BBox.prototype.constructor = n.BBox),
            (n.Matrix = n.invent({
              create: function (t) {
                var e = f([1, 0, 0, 1, 0, 0]);
                t =
                  null === t
                    ? e
                    : t instanceof n.Element
                    ? t.matrixify()
                    : "string" == typeof t
                    ? f(t.split(n.regex.delimiter).map(parseFloat))
                    : 6 == arguments.length
                    ? f([].slice.call(arguments))
                    : Array.isArray(t)
                    ? f(t)
                    : t && "object" === y(t)
                    ? t
                    : e;
                for (var i = g.length - 1; i >= 0; --i)
                  this[g[i]] = null != t[g[i]] ? t[g[i]] : e[g[i]];
              },
              extend: {
                extract: function () {
                  var t = h(this, 0, 1);
                  h(this, 1, 0);
                  var e = (180 / Math.PI) * Math.atan2(t.y, t.x) - 90;
                  return {
                    x: this.e,
                    y: this.f,
                    transformedX:
                      (this.e * Math.cos((e * Math.PI) / 180) +
                        this.f * Math.sin((e * Math.PI) / 180)) /
                      Math.sqrt(this.a * this.a + this.b * this.b),
                    transformedY:
                      (this.f * Math.cos((e * Math.PI) / 180) +
                        this.e * Math.sin((-e * Math.PI) / 180)) /
                      Math.sqrt(this.c * this.c + this.d * this.d),
                    rotation: e,
                    a: this.a,
                    b: this.b,
                    c: this.c,
                    d: this.d,
                    e: this.e,
                    f: this.f,
                    matrix: new n.Matrix(this),
                  };
                },
                clone: function () {
                  return new n.Matrix(this);
                },
                morph: function (t) {
                  return (this.destination = new n.Matrix(t)), this;
                },
                multiply: function (t) {
                  return new n.Matrix(
                    this.native().multiply(
                      (function (t) {
                        return (
                          t instanceof n.Matrix || (t = new n.Matrix(t)), t
                        );
                      })(t).native()
                    )
                  );
                },
                inverse: function () {
                  return new n.Matrix(this.native().inverse());
                },
                translate: function (t, e) {
                  return new n.Matrix(this.native().translate(t || 0, e || 0));
                },
                native: function () {
                  for (
                    var t = n.parser.native.createSVGMatrix(), e = g.length - 1;
                    e >= 0;
                    e--
                  )
                    t[g[e]] = this[g[e]];
                  return t;
                },
                toString: function () {
                  return (
                    "matrix(" +
                    m(this.a) +
                    "," +
                    m(this.b) +
                    "," +
                    m(this.c) +
                    "," +
                    m(this.d) +
                    "," +
                    m(this.e) +
                    "," +
                    m(this.f) +
                    ")"
                  );
                },
              },
              parent: n.Element,
              construct: {
                ctm: function () {
                  return new n.Matrix(this.node.getCTM());
                },
                screenCTM: function () {
                  if (this instanceof n.Nested) {
                    var t = this.rect(1, 1),
                      e = t.node.getScreenCTM();
                    return t.remove(), new n.Matrix(e);
                  }
                  return new n.Matrix(this.node.getScreenCTM());
                },
              },
            })),
            (n.Point = n.invent({
              create: function (t, e) {
                var n;
                (n = Array.isArray(t)
                  ? { x: t[0], y: t[1] }
                  : "object" === y(t)
                  ? { x: t.x, y: t.y }
                  : null != t
                  ? { x: t, y: null != e ? e : t }
                  : { x: 0, y: 0 }),
                  (this.x = n.x),
                  (this.y = n.y);
              },
              extend: {
                clone: function () {
                  return new n.Point(this);
                },
                morph: function (t, e) {
                  return (this.destination = new n.Point(t, e)), this;
                },
              },
            })),
            n.extend(n.Element, {
              point: function (t, e) {
                return new n.Point(t, e).transform(this.screenCTM().inverse());
              },
            }),
            n.extend(n.Element, {
              attr: function (t, e, i) {
                if (null == t) {
                  for (
                    t = {}, i = (e = this.node.attributes).length - 1;
                    i >= 0;
                    i--
                  )
                    t[e[i].nodeName] = n.regex.isNumber.test(e[i].nodeValue)
                      ? parseFloat(e[i].nodeValue)
                      : e[i].nodeValue;
                  return t;
                }
                if ("object" === y(t)) for (var r in t) this.attr(r, t[r]);
                else if (null === e) this.node.removeAttribute(t);
                else {
                  if (null == e)
                    return null == (e = this.node.getAttribute(t))
                      ? n.defaults.attrs[t]
                      : n.regex.isNumber.test(e)
                      ? parseFloat(e)
                      : e;
                  "stroke-width" == t
                    ? this.attr(
                        "stroke",
                        parseFloat(e) > 0 ? this._stroke : null
                      )
                    : "stroke" == t && (this._stroke = e),
                    ("fill" != t && "stroke" != t) ||
                      (n.regex.isImage.test(e) &&
                        (e = this.doc().defs().image(e, 0, 0)),
                      e instanceof n.Image &&
                        (e = this.doc()
                          .defs()
                          .pattern(0, 0, function () {
                            this.add(e);
                          }))),
                    "number" == typeof e
                      ? (e = new n.Number(e))
                      : n.Color.isColor(e)
                      ? (e = new n.Color(e))
                      : Array.isArray(e) && (e = new n.Array(e)),
                    "leading" == t
                      ? this.leading && this.leading(e)
                      : "string" == typeof i
                      ? this.node.setAttributeNS(i, t, e.toString())
                      : this.node.setAttribute(t, e.toString()),
                    !this.rebuild ||
                      ("font-size" != t && "x" != t) ||
                      this.rebuild(t, e);
                }
                return this;
              },
            }),
            n.extend(n.Element, {
              transform: function (t, e) {
                var i;
                return "object" !== y(t)
                  ? ((i = new n.Matrix(this).extract()),
                    "string" == typeof t ? i[t] : i)
                  : ((i = new n.Matrix(this)),
                    (e = !!e || !!t.relative),
                    null != t.a &&
                      (i = e ? i.multiply(new n.Matrix(t)) : new n.Matrix(t)),
                    this.attr("transform", i));
              },
            }),
            n.extend(n.Element, {
              untransform: function () {
                return this.attr("transform", null);
              },
              matrixify: function () {
                return (this.attr("transform") || "")
                  .split(n.regex.transforms)
                  .slice(0, -1)
                  .map(function (t) {
                    var e = t.trim().split("(");
                    return [
                      e[0],
                      e[1].split(n.regex.delimiter).map(function (t) {
                        return parseFloat(t);
                      }),
                    ];
                  })
                  .reduce(function (t, e) {
                    return "matrix" == e[0]
                      ? t.multiply(f(e[1]))
                      : t[e[0]].apply(t, e[1]);
                  }, new n.Matrix());
              },
              toParent: function (t) {
                if (this == t) return this;
                var e = this.screenCTM(),
                  n = t.screenCTM().inverse();
                return (
                  this.addTo(t).untransform().transform(n.multiply(e)), this
                );
              },
              toDoc: function () {
                return this.toParent(this.doc());
              },
            }),
            (n.Transformation = n.invent({
              create: function (t, e) {
                if (arguments.length > 1 && "boolean" != typeof e)
                  return this.constructor.call(this, [].slice.call(arguments));
                if (Array.isArray(t))
                  for (var n = 0, i = this.arguments.length; n < i; ++n)
                    this[this.arguments[n]] = t[n];
                else if (t && "object" === y(t))
                  for (n = 0, i = this.arguments.length; n < i; ++n)
                    this[this.arguments[n]] = t[this.arguments[n]];
                (this.inversed = !1), !0 === e && (this.inversed = !0);
              },
            })),
            (n.Translate = n.invent({
              parent: n.Matrix,
              inherit: n.Transformation,
              create: function (t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
              },
              extend: {
                arguments: ["transformedX", "transformedY"],
                method: "translate",
              },
            })),
            n.extend(n.Element, {
              style: function (t, e) {
                if (0 == arguments.length) return this.node.style.cssText || "";
                if (arguments.length < 2)
                  if ("object" === y(t)) for (var i in t) this.style(i, t[i]);
                  else {
                    if (!n.regex.isCss.test(t)) return this.node.style[c(t)];
                    for (
                      t = t
                        .split(/\s*;\s*/)
                        .filter(function (t) {
                          return !!t;
                        })
                        .map(function (t) {
                          return t.split(/\s*:\s*/);
                        });
                      (e = t.pop());

                    )
                      this.style(e[0], e[1]);
                  }
                else
                  this.node.style[c(t)] =
                    null === e || n.regex.isBlank.test(e) ? "" : e;
                return this;
              },
            }),
            (n.Parent = n.invent({
              create: function (t) {
                this.constructor.call(this, t);
              },
              inherit: n.Element,
              extend: {
                children: function () {
                  return n.utils.map(
                    n.utils.filterSVGElements(this.node.childNodes),
                    function (t) {
                      return n.adopt(t);
                    }
                  );
                },
                add: function (t, e) {
                  return (
                    null == e
                      ? this.node.appendChild(t.node)
                      : t.node != this.node.childNodes[e] &&
                        this.node.insertBefore(t.node, this.node.childNodes[e]),
                    this
                  );
                },
                put: function (t, e) {
                  return this.add(t, e), t;
                },
                has: function (t) {
                  return this.index(t) >= 0;
                },
                index: function (t) {
                  return [].slice.call(this.node.childNodes).indexOf(t.node);
                },
                get: function (t) {
                  return n.adopt(this.node.childNodes[t]);
                },
                first: function () {
                  return this.get(0);
                },
                last: function () {
                  return this.get(this.node.childNodes.length - 1);
                },
                each: function (t, e) {
                  for (var i = this.children(), r = 0, o = i.length; r < o; r++)
                    i[r] instanceof n.Element && t.apply(i[r], [r, i]),
                      e && i[r] instanceof n.Container && i[r].each(t, e);
                  return this;
                },
                removeElement: function (t) {
                  return this.node.removeChild(t.node), this;
                },
                clear: function () {
                  for (; this.node.hasChildNodes(); )
                    this.node.removeChild(this.node.lastChild);
                  return delete this._defs, this;
                },
                defs: function () {
                  return this.doc().defs();
                },
              },
            })),
            n.extend(n.Parent, {
              ungroup: function (t, e) {
                return (
                  0 === e ||
                    this instanceof n.Defs ||
                    this.node == n.parser.draw ||
                    ((t =
                      t ||
                      (this instanceof n.Doc ? this : this.parent(n.Parent))),
                    (e = e || 1 / 0),
                    this.each(function () {
                      return this instanceof n.Defs
                        ? this
                        : this instanceof n.Parent
                        ? this.ungroup(t, e - 1)
                        : this.toParent(t);
                    }),
                    this.node.firstChild || this.remove()),
                  this
                );
              },
              flatten: function (t, e) {
                return this.ungroup(t, e);
              },
            }),
            (n.Container = n.invent({
              create: function (t) {
                this.constructor.call(this, t);
              },
              inherit: n.Parent,
            })),
            (n.ViewBox = n.invent({ parent: n.Container, construct: {} })),
            [
              "click",
              "dblclick",
              "mousedown",
              "mouseup",
              "mouseover",
              "mouseout",
              "mousemove",
              "touchstart",
              "touchmove",
              "touchleave",
              "touchend",
              "touchcancel",
            ].forEach(function (t) {
              n.Element.prototype[t] = function (e) {
                return n.on(this.node, t, e), this;
              };
            }),
            (n.listeners = []),
            (n.handlerMap = []),
            (n.listenerId = 0),
            (n.on = function (t, e, i, r, o) {
              var a = i.bind(r || t.instance || t),
                s = (n.handlerMap.indexOf(t) + 1 || n.handlerMap.push(t)) - 1,
                l = e.split(".")[0],
                c = e.split(".")[1] || "*";
              (n.listeners[s] = n.listeners[s] || {}),
                (n.listeners[s][l] = n.listeners[s][l] || {}),
                (n.listeners[s][l][c] = n.listeners[s][l][c] || {}),
                i._svgjsListenerId || (i._svgjsListenerId = ++n.listenerId),
                (n.listeners[s][l][c][i._svgjsListenerId] = a),
                t.addEventListener(l, a, o || { passive: !1 });
            }),
            (n.off = function (t, e, i) {
              var r = n.handlerMap.indexOf(t),
                o = e && e.split(".")[0],
                a = e && e.split(".")[1],
                s = "";
              if (-1 != r)
                if (i) {
                  if (("function" == typeof i && (i = i._svgjsListenerId), !i))
                    return;
                  n.listeners[r][o] &&
                    n.listeners[r][o][a || "*"] &&
                    (t.removeEventListener(
                      o,
                      n.listeners[r][o][a || "*"][i],
                      !1
                    ),
                    delete n.listeners[r][o][a || "*"][i]);
                } else if (a && o) {
                  if (n.listeners[r][o] && n.listeners[r][o][a]) {
                    for (var l in n.listeners[r][o][a])
                      n.off(t, [o, a].join("."), l);
                    delete n.listeners[r][o][a];
                  }
                } else if (a)
                  for (var c in n.listeners[r])
                    for (var s in n.listeners[r][c])
                      a === s && n.off(t, [c, a].join("."));
                else if (o) {
                  if (n.listeners[r][o]) {
                    for (var s in n.listeners[r][o]) n.off(t, [o, s].join("."));
                    delete n.listeners[r][o];
                  }
                } else {
                  for (var c in n.listeners[r]) n.off(t, c);
                  delete n.listeners[r], delete n.handlerMap[r];
                }
            }),
            n.extend(n.Element, {
              on: function (t, e, i, r) {
                return n.on(this.node, t, e, i, r), this;
              },
              off: function (t, e) {
                return n.off(this.node, t, e), this;
              },
              fire: function (e, i) {
                return (
                  e instanceof t.Event
                    ? this.node.dispatchEvent(e)
                    : this.node.dispatchEvent(
                        (e = new n.CustomEvent(e, {
                          detail: i,
                          cancelable: !0,
                        }))
                      ),
                  (this._event = e),
                  this
                );
              },
              event: function () {
                return this._event;
              },
            }),
            (n.Defs = n.invent({ create: "defs", inherit: n.Container })),
            (n.G = n.invent({
              create: "g",
              inherit: n.Container,
              extend: {
                x: function (t) {
                  return null == t
                    ? this.transform("x")
                    : this.transform({ x: t - this.x() }, !0);
                },
              },
              construct: {
                group: function () {
                  return this.put(new n.G());
                },
              },
            })),
            (n.Doc = n.invent({
              create: function (t) {
                t &&
                  ("svg" ==
                  (t = "string" == typeof t ? e.getElementById(t) : t).nodeName
                    ? this.constructor.call(this, t)
                    : (this.constructor.call(this, n.create("svg")),
                      t.appendChild(this.node),
                      this.size("100%", "100%")),
                  this.namespace().defs());
              },
              inherit: n.Container,
              extend: {
                namespace: function () {
                  return this.attr({ xmlns: n.ns, version: "1.1" })
                    .attr("xmlns:xlink", n.xlink, n.xmlns)
                    .attr("xmlns:svgjs", n.svgjs, n.xmlns);
                },
                defs: function () {
                  var t;
                  return (
                    this._defs ||
                      ((t = this.node.getElementsByTagName("defs")[0])
                        ? (this._defs = n.adopt(t))
                        : (this._defs = new n.Defs()),
                      this.node.appendChild(this._defs.node)),
                    this._defs
                  );
                },
                parent: function () {
                  return this.node.parentNode &&
                    "#document" != this.node.parentNode.nodeName
                    ? this.node.parentNode
                    : null;
                },
                remove: function () {
                  return (
                    this.parent() && this.parent().removeChild(this.node), this
                  );
                },
                clear: function () {
                  for (; this.node.hasChildNodes(); )
                    this.node.removeChild(this.node.lastChild);
                  return (
                    delete this._defs,
                    n.parser.draw &&
                      !n.parser.draw.parentNode &&
                      this.node.appendChild(n.parser.draw),
                    this
                  );
                },
                clone: function (t) {
                  this.writeDataToDom();
                  var e = this.node,
                    n = b(e.cloneNode(!0));
                  return (
                    t
                      ? (t.node || t).appendChild(n.node)
                      : e.parentNode.insertBefore(n.node, e.nextSibling),
                    n
                  );
                },
              },
            })),
            n.extend(n.Element, {}),
            (n.Gradient = n.invent({
              create: function (t) {
                this.constructor.call(this, n.create(t + "Gradient")),
                  (this.type = t);
              },
              inherit: n.Container,
              extend: {
                at: function (t, e, i) {
                  return this.put(new n.Stop()).update(t, e, i);
                },
                update: function (t) {
                  return (
                    this.clear(),
                    "function" == typeof t && t.call(this, this),
                    this
                  );
                },
                fill: function () {
                  return "url(#" + this.id() + ")";
                },
                toString: function () {
                  return this.fill();
                },
                attr: function (t, e, i) {
                  return (
                    "transform" == t && (t = "gradientTransform"),
                    n.Container.prototype.attr.call(this, t, e, i)
                  );
                },
              },
              construct: {
                gradient: function (t, e) {
                  return this.defs().gradient(t, e);
                },
              },
            })),
            n.extend(n.Gradient, n.FX, {
              from: function (t, e) {
                return "radial" == (this._target || this).type
                  ? this.attr({ fx: new n.Number(t), fy: new n.Number(e) })
                  : this.attr({ x1: new n.Number(t), y1: new n.Number(e) });
              },
              to: function (t, e) {
                return "radial" == (this._target || this).type
                  ? this.attr({ cx: new n.Number(t), cy: new n.Number(e) })
                  : this.attr({ x2: new n.Number(t), y2: new n.Number(e) });
              },
            }),
            n.extend(n.Defs, {
              gradient: function (t, e) {
                return this.put(new n.Gradient(t)).update(e);
              },
            }),
            (n.Stop = n.invent({
              create: "stop",
              inherit: n.Element,
              extend: {
                update: function (t) {
                  return (
                    ("number" == typeof t || t instanceof n.Number) &&
                      (t = {
                        offset: arguments[0],
                        color: arguments[1],
                        opacity: arguments[2],
                      }),
                    null != t.opacity && this.attr("stop-opacity", t.opacity),
                    null != t.color && this.attr("stop-color", t.color),
                    null != t.offset &&
                      this.attr("offset", new n.Number(t.offset)),
                    this
                  );
                },
              },
            })),
            (n.Pattern = n.invent({
              create: "pattern",
              inherit: n.Container,
              extend: {
                fill: function () {
                  return "url(#" + this.id() + ")";
                },
                update: function (t) {
                  return (
                    this.clear(),
                    "function" == typeof t && t.call(this, this),
                    this
                  );
                },
                toString: function () {
                  return this.fill();
                },
                attr: function (t, e, i) {
                  return (
                    "transform" == t && (t = "patternTransform"),
                    n.Container.prototype.attr.call(this, t, e, i)
                  );
                },
              },
              construct: {
                pattern: function (t, e, n) {
                  return this.defs().pattern(t, e, n);
                },
              },
            })),
            n.extend(n.Defs, {
              pattern: function (t, e, i) {
                return this.put(new n.Pattern())
                  .update(i)
                  .attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse",
                  });
              },
            }),
            (n.Shape = n.invent({
              create: function (t) {
                this.constructor.call(this, t);
              },
              inherit: n.Element,
            })),
            (n.Symbol = n.invent({
              create: "symbol",
              inherit: n.Container,
              construct: {
                symbol: function () {
                  return this.put(new n.Symbol());
                },
              },
            })),
            (n.Use = n.invent({
              create: "use",
              inherit: n.Shape,
              extend: {
                element: function (t, e) {
                  return this.attr("href", (e || "") + "#" + t, n.xlink);
                },
              },
              construct: {
                use: function (t, e) {
                  return this.put(new n.Use()).element(t, e);
                },
              },
            })),
            (n.Rect = n.invent({
              create: "rect",
              inherit: n.Shape,
              construct: {
                rect: function (t, e) {
                  return this.put(new n.Rect()).size(t, e);
                },
              },
            })),
            (n.Circle = n.invent({
              create: "circle",
              inherit: n.Shape,
              construct: {
                circle: function (t) {
                  return this.put(new n.Circle())
                    .rx(new n.Number(t).divide(2))
                    .move(0, 0);
                },
              },
            })),
            n.extend(n.Circle, n.FX, {
              rx: function (t) {
                return this.attr("r", t);
              },
              ry: function (t) {
                return this.rx(t);
              },
            }),
            (n.Ellipse = n.invent({
              create: "ellipse",
              inherit: n.Shape,
              construct: {
                ellipse: function (t, e) {
                  return this.put(new n.Ellipse()).size(t, e).move(0, 0);
                },
              },
            })),
            n.extend(n.Ellipse, n.Rect, n.FX, {
              rx: function (t) {
                return this.attr("rx", t);
              },
              ry: function (t) {
                return this.attr("ry", t);
              },
            }),
            n.extend(n.Circle, n.Ellipse, {
              x: function (t) {
                return null == t
                  ? this.cx() - this.rx()
                  : this.cx(t + this.rx());
              },
              y: function (t) {
                return null == t
                  ? this.cy() - this.ry()
                  : this.cy(t + this.ry());
              },
              cx: function (t) {
                return null == t ? this.attr("cx") : this.attr("cx", t);
              },
              cy: function (t) {
                return null == t ? this.attr("cy") : this.attr("cy", t);
              },
              width: function (t) {
                return null == t
                  ? 2 * this.rx()
                  : this.rx(new n.Number(t).divide(2));
              },
              height: function (t) {
                return null == t
                  ? 2 * this.ry()
                  : this.ry(new n.Number(t).divide(2));
              },
              size: function (t, e) {
                var i = p(this, t, e);
                return this.rx(new n.Number(i.width).divide(2)).ry(
                  new n.Number(i.height).divide(2)
                );
              },
            }),
            (n.Line = n.invent({
              create: "line",
              inherit: n.Shape,
              extend: {
                array: function () {
                  return new n.PointArray([
                    [this.attr("x1"), this.attr("y1")],
                    [this.attr("x2"), this.attr("y2")],
                  ]);
                },
                plot: function (t, e, i, r) {
                  return null == t
                    ? this.array()
                    : ((t =
                        void 0 !== e
                          ? { x1: t, y1: e, x2: i, y2: r }
                          : new n.PointArray(t).toLine()),
                      this.attr(t));
                },
                move: function (t, e) {
                  return this.attr(this.array().move(t, e).toLine());
                },
                size: function (t, e) {
                  var n = p(this, t, e);
                  return this.attr(
                    this.array().size(n.width, n.height).toLine()
                  );
                },
              },
              construct: {
                line: function (t, e, i, r) {
                  return n.Line.prototype.plot.apply(
                    this.put(new n.Line()),
                    null != t ? [t, e, i, r] : [0, 0, 0, 0]
                  );
                },
              },
            })),
            (n.Polyline = n.invent({
              create: "polyline",
              inherit: n.Shape,
              construct: {
                polyline: function (t) {
                  return this.put(new n.Polyline()).plot(
                    t || new n.PointArray()
                  );
                },
              },
            })),
            (n.Polygon = n.invent({
              create: "polygon",
              inherit: n.Shape,
              construct: {
                polygon: function (t) {
                  return this.put(new n.Polygon()).plot(
                    t || new n.PointArray()
                  );
                },
              },
            })),
            n.extend(n.Polyline, n.Polygon, {
              array: function () {
                return (
                  this._array ||
                  (this._array = new n.PointArray(this.attr("points")))
                );
              },
              plot: function (t) {
                return null == t
                  ? this.array()
                  : this.clear().attr(
                      "points",
                      "string" == typeof t
                        ? t
                        : (this._array = new n.PointArray(t))
                    );
              },
              clear: function () {
                return delete this._array, this;
              },
              move: function (t, e) {
                return this.attr("points", this.array().move(t, e));
              },
              size: function (t, e) {
                var n = p(this, t, e);
                return this.attr(
                  "points",
                  this.array().size(n.width, n.height)
                );
              },
            }),
            n.extend(n.Line, n.Polyline, n.Polygon, {
              morphArray: n.PointArray,
              x: function (t) {
                return null == t ? this.bbox().x : this.move(t, this.bbox().y);
              },
              y: function (t) {
                return null == t ? this.bbox().y : this.move(this.bbox().x, t);
              },
              width: function (t) {
                var e = this.bbox();
                return null == t ? e.width : this.size(t, e.height);
              },
              height: function (t) {
                var e = this.bbox();
                return null == t ? e.height : this.size(e.width, t);
              },
            }),
            (n.Path = n.invent({
              create: "path",
              inherit: n.Shape,
              extend: {
                morphArray: n.PathArray,
                array: function () {
                  return (
                    this._array ||
                    (this._array = new n.PathArray(this.attr("d")))
                  );
                },
                plot: function (t) {
                  return null == t
                    ? this.array()
                    : this.clear().attr(
                        "d",
                        "string" == typeof t
                          ? t
                          : (this._array = new n.PathArray(t))
                      );
                },
                clear: function () {
                  return delete this._array, this;
                },
              },
              construct: {
                path: function (t) {
                  return this.put(new n.Path()).plot(t || new n.PathArray());
                },
              },
            })),
            (n.Image = n.invent({
              create: "image",
              inherit: n.Shape,
              extend: {
                load: function (e) {
                  if (!e) return this;
                  var i = this,
                    r = new t.Image();
                  return (
                    n.on(r, "load", function () {
                      n.off(r);
                      var t = i.parent(n.Pattern);
                      null !== t &&
                        (0 == i.width() &&
                          0 == i.height() &&
                          i.size(r.width, r.height),
                        t &&
                          0 == t.width() &&
                          0 == t.height() &&
                          t.size(i.width(), i.height()),
                        "function" == typeof i._loaded &&
                          i._loaded.call(i, {
                            width: r.width,
                            height: r.height,
                            ratio: r.width / r.height,
                            url: e,
                          }));
                    }),
                    n.on(r, "error", function (t) {
                      n.off(r),
                        "function" == typeof i._error && i._error.call(i, t);
                    }),
                    this.attr("href", (r.src = this.src = e), n.xlink)
                  );
                },
                loaded: function (t) {
                  return (this._loaded = t), this;
                },
                error: function (t) {
                  return (this._error = t), this;
                },
              },
              construct: {
                image: function (t, e, i) {
                  return this.put(new n.Image())
                    .load(t)
                    .size(e || 0, i || e || 0);
                },
              },
            })),
            (n.Text = n.invent({
              create: function () {
                this.constructor.call(this, n.create("text")),
                  (this.dom.leading = new n.Number(1.3)),
                  (this._rebuild = !0),
                  (this._build = !1),
                  this.attr("font-family", n.defaults.attrs["font-family"]);
              },
              inherit: n.Shape,
              extend: {
                x: function (t) {
                  return null == t ? this.attr("x") : this.attr("x", t);
                },
                text: function (t) {
                  if (void 0 === t) {
                    t = "";
                    for (
                      var e = this.node.childNodes, i = 0, r = e.length;
                      i < r;
                      ++i
                    )
                      0 != i &&
                        3 != e[i].nodeType &&
                        1 == n.adopt(e[i]).dom.newLined &&
                        (t += "\n"),
                        (t += e[i].textContent);
                    return t;
                  }
                  if ((this.clear().build(!0), "function" == typeof t))
                    t.call(this, this);
                  else {
                    i = 0;
                    for (var o = (t = t.split("\n")).length; i < o; i++)
                      this.tspan(t[i]).newLine();
                  }
                  return this.build(!1).rebuild();
                },
                size: function (t) {
                  return this.attr("font-size", t).rebuild();
                },
                leading: function (t) {
                  return null == t
                    ? this.dom.leading
                    : ((this.dom.leading = new n.Number(t)), this.rebuild());
                },
                lines: function () {
                  var t = ((this.textPath && this.textPath()) || this).node,
                    e = n.utils.map(
                      n.utils.filterSVGElements(t.childNodes),
                      function (t) {
                        return n.adopt(t);
                      }
                    );
                  return new n.Set(e);
                },
                rebuild: function (t) {
                  if (
                    ("boolean" == typeof t && (this._rebuild = t),
                    this._rebuild)
                  ) {
                    var e = this,
                      i = 0,
                      r =
                        this.dom.leading * new n.Number(this.attr("font-size"));
                    this.lines().each(function () {
                      this.dom.newLined &&
                        (e.textPath() || this.attr("x", e.attr("x")),
                        "\n" == this.text()
                          ? (i += r)
                          : (this.attr("dy", r + i), (i = 0)));
                    }),
                      this.fire("rebuild");
                  }
                  return this;
                },
                build: function (t) {
                  return (this._build = !!t), this;
                },
                setData: function (t) {
                  return (
                    (this.dom = t),
                    (this.dom.leading = new n.Number(t.leading || 1.3)),
                    this
                  );
                },
              },
              construct: {
                text: function (t) {
                  return this.put(new n.Text()).text(t);
                },
                plain: function (t) {
                  return this.put(new n.Text()).plain(t);
                },
              },
            })),
            (n.Tspan = n.invent({
              create: "tspan",
              inherit: n.Shape,
              extend: {
                text: function (t) {
                  return null == t
                    ? this.node.textContent + (this.dom.newLined ? "\n" : "")
                    : ("function" == typeof t
                        ? t.call(this, this)
                        : this.plain(t),
                      this);
                },
                dx: function (t) {
                  return this.attr("dx", t);
                },
                dy: function (t) {
                  return this.attr("dy", t);
                },
                newLine: function () {
                  var t = this.parent(n.Text);
                  return (
                    (this.dom.newLined = !0),
                    this.dy(t.dom.leading * t.attr("font-size")).attr(
                      "x",
                      t.x()
                    )
                  );
                },
              },
            })),
            n.extend(n.Text, n.Tspan, {
              plain: function (t) {
                return (
                  !1 === this._build && this.clear(),
                  this.node.appendChild(e.createTextNode(t)),
                  this
                );
              },
              tspan: function (t) {
                var e = ((this.textPath && this.textPath()) || this).node,
                  i = new n.Tspan();
                return (
                  !1 === this._build && this.clear(),
                  e.appendChild(i.node),
                  i.text(t)
                );
              },
              clear: function () {
                for (
                  var t = ((this.textPath && this.textPath()) || this).node;
                  t.hasChildNodes();

                )
                  t.removeChild(t.lastChild);
                return this;
              },
              length: function () {
                return this.node.getComputedTextLength();
              },
            }),
            (n.TextPath = n.invent({
              create: "textPath",
              inherit: n.Parent,
              parent: n.Text,
              construct: {
                morphArray: n.PathArray,
                array: function () {
                  var t = this.track();
                  return t ? t.array() : null;
                },
                plot: function (t) {
                  var e = this.track(),
                    n = null;
                  return e && (n = e.plot(t)), null == t ? n : this;
                },
                track: function () {
                  var t = this.textPath();
                  if (t) return t.reference("href");
                },
                textPath: function () {
                  if (
                    this.node.firstChild &&
                    "textPath" == this.node.firstChild.nodeName
                  )
                    return n.adopt(this.node.firstChild);
                },
              },
            })),
            (n.Nested = n.invent({
              create: function () {
                this.constructor.call(this, n.create("svg")),
                  this.style("overflow", "visible");
              },
              inherit: n.Container,
              construct: {
                nested: function () {
                  return this.put(new n.Nested());
                },
              },
            }));
          var s = {
            stroke: [
              "color",
              "width",
              "opacity",
              "linecap",
              "linejoin",
              "miterlimit",
              "dasharray",
              "dashoffset",
            ],
            fill: ["color", "opacity", "rule"],
            prefix: function (t, e) {
              return "color" == e ? t : t + "-" + e;
            },
          };
          function l(t, e, i, r) {
            return i + r.replace(n.regex.dots, " .");
          }
          function c(t) {
            return t.toLowerCase().replace(/-(.)/g, function (t, e) {
              return e.toUpperCase();
            });
          }
          function d(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }
          function u(t) {
            var e = t.toString(16);
            return 1 == e.length ? "0" + e : e;
          }
          function p(t, e, n) {
            if (null == e || null == n) {
              var i = t.bbox();
              null == e
                ? (e = (i.width / i.height) * n)
                : null == n && (n = (i.height / i.width) * e);
            }
            return { width: e, height: n };
          }
          function h(t, e, n) {
            return { x: e * t.a + n * t.c + 0, y: e * t.b + n * t.d + 0 };
          }
          function f(t) {
            return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
          }
          function b(e) {
            for (var i = e.childNodes.length - 1; i >= 0; i--)
              e.childNodes[i] instanceof t.SVGElement && b(e.childNodes[i]);
            return n.adopt(e).id(n.eid(e.nodeName));
          }
          function m(t) {
            return Math.abs(t) > 1e-37 ? t : 0;
          }
          ["fill", "stroke"].forEach(function (t) {
            var e = {};
            (e[t] = function (e) {
              if (void 0 === e) return this;
              if (
                "string" == typeof e ||
                n.Color.isRgb(e) ||
                (e && "function" == typeof e.fill)
              )
                this.attr(t, e);
              else
                for (var i = s[t].length - 1; i >= 0; i--)
                  null != e[s[t][i]] &&
                    this.attr(s.prefix(t, s[t][i]), e[s[t][i]]);
              return this;
            }),
              n.extend(n.Element, n.FX, e);
          }),
            n.extend(n.Element, n.FX, {
              translate: function (t, e) {
                return this.transform({ x: t, y: e });
              },
              matrix: function (t) {
                return this.attr(
                  "transform",
                  new n.Matrix(
                    6 == arguments.length ? [].slice.call(arguments) : t
                  )
                );
              },
              opacity: function (t) {
                return this.attr("opacity", t);
              },
              dx: function (t) {
                return this.x(
                  new n.Number(t).plus(this instanceof n.FX ? 0 : this.x()),
                  !0
                );
              },
              dy: function (t) {
                return this.y(
                  new n.Number(t).plus(this instanceof n.FX ? 0 : this.y()),
                  !0
                );
              },
            }),
            n.extend(n.Path, {
              length: function () {
                return this.node.getTotalLength();
              },
              pointAt: function (t) {
                return this.node.getPointAtLength(t);
              },
            }),
            (n.Set = n.invent({
              create: function (t) {
                Array.isArray(t) ? (this.members = t) : this.clear();
              },
              extend: {
                add: function () {
                  for (
                    var t = [].slice.call(arguments), e = 0, n = t.length;
                    e < n;
                    e++
                  )
                    this.members.push(t[e]);
                  return this;
                },
                remove: function (t) {
                  var e = this.index(t);
                  return e > -1 && this.members.splice(e, 1), this;
                },
                each: function (t) {
                  for (var e = 0, n = this.members.length; e < n; e++)
                    t.apply(this.members[e], [e, this.members]);
                  return this;
                },
                clear: function () {
                  return (this.members = []), this;
                },
                length: function () {
                  return this.members.length;
                },
                has: function (t) {
                  return this.index(t) >= 0;
                },
                index: function (t) {
                  return this.members.indexOf(t);
                },
                get: function (t) {
                  return this.members[t];
                },
                first: function () {
                  return this.get(0);
                },
                last: function () {
                  return this.get(this.members.length - 1);
                },
                valueOf: function () {
                  return this.members;
                },
              },
              construct: {
                set: function (t) {
                  return new n.Set(t);
                },
              },
            })),
            (n.FX.Set = n.invent({
              create: function (t) {
                this.set = t;
              },
            })),
            (n.Set.inherit = function () {
              var t = [];
              for (var e in n.Shape.prototype)
                "function" == typeof n.Shape.prototype[e] &&
                  "function" != typeof n.Set.prototype[e] &&
                  t.push(e);
              for (var e in (t.forEach(function (t) {
                n.Set.prototype[t] = function () {
                  for (var e = 0, i = this.members.length; e < i; e++)
                    this.members[e] &&
                      "function" == typeof this.members[e][t] &&
                      this.members[e][t].apply(this.members[e], arguments);
                  return "animate" == t
                    ? this.fx || (this.fx = new n.FX.Set(this))
                    : this;
                };
              }),
              (t = []),
              n.FX.prototype))
                "function" == typeof n.FX.prototype[e] &&
                  "function" != typeof n.FX.Set.prototype[e] &&
                  t.push(e);
              t.forEach(function (t) {
                n.FX.Set.prototype[t] = function () {
                  for (var e = 0, n = this.set.members.length; e < n; e++)
                    this.set.members[e].fx[t].apply(
                      this.set.members[e].fx,
                      arguments
                    );
                  return this;
                };
              });
            }),
            n.extend(n.Element, {}),
            n.extend(n.Element, {
              remember: function (t, e) {
                if ("object" === y(arguments[0]))
                  for (var n in t) this.remember(n, t[n]);
                else {
                  if (1 == arguments.length) return this.memory()[t];
                  this.memory()[t] = e;
                }
                return this;
              },
              forget: function () {
                if (0 == arguments.length) this._memory = {};
                else
                  for (var t = arguments.length - 1; t >= 0; t--)
                    delete this.memory()[arguments[t]];
                return this;
              },
              memory: function () {
                return this._memory || (this._memory = {});
              },
            }),
            (n.get = function (t) {
              var i = e.getElementById(
                (function (t) {
                  var e = (t || "").toString().match(n.regex.reference);
                  if (e) return e[1];
                })(t) || t
              );
              return n.adopt(i);
            }),
            (n.select = function (t, i) {
              return new n.Set(
                n.utils.map((i || e).querySelectorAll(t), function (t) {
                  return n.adopt(t);
                })
              );
            }),
            n.extend(n.Parent, {
              select: function (t) {
                return n.select(t, this.node);
              },
            });
          var g = "abcdef".split("");
          if ("function" != typeof t.CustomEvent) {
            var v = function (t, n) {
              n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
              var i = e.createEvent("CustomEvent");
              return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
            };
            (v.prototype = t.Event.prototype), (n.CustomEvent = v);
          } else n.CustomEvent = t.CustomEvent;
          return n;
        }),
        void 0 !==
          (i = function () {
            return Ft(Bt, Bt.document);
          }.call(e, n, e, t)) && (t.exports = i),
        function () {
          (SVG.Filter = SVG.invent({
            create: "filter",
            inherit: SVG.Parent,
            extend: {
              source: "SourceGraphic",
              sourceAlpha: "SourceAlpha",
              background: "BackgroundImage",
              backgroundAlpha: "BackgroundAlpha",
              fill: "FillPaint",
              stroke: "StrokePaint",
              autoSetIn: !0,
              put: function (t, e) {
                return (
                  this.add(t, e),
                  !t.attr("in") && this.autoSetIn && t.attr("in", this.source),
                  t.attr("result") || t.attr("result", t),
                  t
                );
              },
              blend: function (t, e, n) {
                return this.put(new SVG.BlendEffect(t, e, n));
              },
              colorMatrix: function (t, e) {
                return this.put(new SVG.ColorMatrixEffect(t, e));
              },
              convolveMatrix: function (t) {
                return this.put(new SVG.ConvolveMatrixEffect(t));
              },
              componentTransfer: function (t) {
                return this.put(new SVG.ComponentTransferEffect(t));
              },
              composite: function (t, e, n) {
                return this.put(new SVG.CompositeEffect(t, e, n));
              },
              flood: function (t, e) {
                return this.put(new SVG.FloodEffect(t, e));
              },
              offset: function (t, e) {
                return this.put(new SVG.OffsetEffect(t, e));
              },
              image: function (t) {
                return this.put(new SVG.ImageEffect(t));
              },
              merge: function () {
                var t = [void 0];
                for (var e in arguments) t.push(arguments[e]);
                return this.put(
                  new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))()
                );
              },
              gaussianBlur: function (t, e) {
                return this.put(new SVG.GaussianBlurEffect(t, e));
              },
              morphology: function (t, e) {
                return this.put(new SVG.MorphologyEffect(t, e));
              },
              diffuseLighting: function (t, e, n) {
                return this.put(new SVG.DiffuseLightingEffect(t, e, n));
              },
              displacementMap: function (t, e, n, i, r) {
                return this.put(new SVG.DisplacementMapEffect(t, e, n, i, r));
              },
              specularLighting: function (t, e, n, i) {
                return this.put(new SVG.SpecularLightingEffect(t, e, n, i));
              },
              tile: function () {
                return this.put(new SVG.TileEffect());
              },
              turbulence: function (t, e, n, i, r) {
                return this.put(new SVG.TurbulenceEffect(t, e, n, i, r));
              },
              toString: function () {
                return "url(#" + this.attr("id") + ")";
              },
            },
          })),
            SVG.extend(SVG.Defs, {
              filter: function (t) {
                var e = this.put(new SVG.Filter());
                return "function" == typeof t && t.call(e, e), e;
              },
            }),
            SVG.extend(SVG.Container, {
              filter: function (t) {
                return this.defs().filter(t);
              },
            }),
            SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
              filter: function (t) {
                return (
                  (this.filterer =
                    t instanceof SVG.Element ? t : this.doc().filter(t)),
                  this.doc() &&
                    this.filterer.doc() !== this.doc() &&
                    this.doc().defs().add(this.filterer),
                  this.attr("filter", this.filterer),
                  this.filterer
                );
              },
              unfilter: function (t) {
                return (
                  this.filterer && !0 === t && this.filterer.remove(),
                  delete this.filterer,
                  this.attr("filter", null)
                );
              },
            }),
            (SVG.Effect = SVG.invent({
              create: function () {
                this.constructor.call(this);
              },
              inherit: SVG.Element,
              extend: {
                in: function (t) {
                  return null == t
                    ? (this.parent() &&
                        this.parent()
                          .select('[result="' + this.attr("in") + '"]')
                          .get(0)) ||
                        this.attr("in")
                    : this.attr("in", t);
                },
                result: function (t) {
                  return null == t
                    ? this.attr("result")
                    : this.attr("result", t);
                },
                toString: function () {
                  return this.result();
                },
              },
            })),
            (SVG.ParentEffect = SVG.invent({
              create: function () {
                this.constructor.call(this);
              },
              inherit: SVG.Parent,
              extend: {
                in: function (t) {
                  return null == t
                    ? (this.parent() &&
                        this.parent()
                          .select('[result="' + this.attr("in") + '"]')
                          .get(0)) ||
                        this.attr("in")
                    : this.attr("in", t);
                },
                result: function (t) {
                  return null == t
                    ? this.attr("result")
                    : this.attr("result", t);
                },
                toString: function () {
                  return this.result();
                },
              },
            }));
          var t = {
            blend: function (t, e) {
              return this.parent() && this.parent().blend(this, t, e);
            },
            colorMatrix: function (t, e) {
              return this.parent() && this.parent().colorMatrix(t, e).in(this);
            },
            convolveMatrix: function (t) {
              return this.parent() && this.parent().convolveMatrix(t).in(this);
            },
            componentTransfer: function (t) {
              return (
                this.parent() && this.parent().componentTransfer(t).in(this)
              );
            },
            composite: function (t, e) {
              return this.parent() && this.parent().composite(this, t, e);
            },
            flood: function (t, e) {
              return this.parent() && this.parent().flood(t, e);
            },
            offset: function (t, e) {
              return this.parent() && this.parent().offset(t, e).in(this);
            },
            image: function (t) {
              return this.parent() && this.parent().image(t);
            },
            merge: function () {
              return (
                this.parent() &&
                this.parent().merge.apply(
                  this.parent(),
                  [this].concat(arguments)
                )
              );
            },
            gaussianBlur: function (t, e) {
              return this.parent() && this.parent().gaussianBlur(t, e).in(this);
            },
            morphology: function (t, e) {
              return this.parent() && this.parent().morphology(t, e).in(this);
            },
            diffuseLighting: function (t, e, n) {
              return (
                this.parent() && this.parent().diffuseLighting(t, e, n).in(this)
              );
            },
            displacementMap: function (t, e, n, i) {
              return (
                this.parent() && this.parent().displacementMap(this, t, e, n, i)
              );
            },
            specularLighting: function (t, e, n, i) {
              return (
                this.parent() &&
                this.parent().specularLighting(t, e, n, i).in(this)
              );
            },
            tile: function () {
              return this.parent() && this.parent().tile().in(this);
            },
            turbulence: function (t, e, n, i, r) {
              return (
                this.parent() &&
                this.parent().turbulence(t, e, n, i, r).in(this)
              );
            },
          };
          SVG.extend(SVG.Effect, t),
            SVG.extend(SVG.ParentEffect, t),
            (SVG.ChildEffect = SVG.invent({
              create: function () {
                this.constructor.call(this);
              },
              inherit: SVG.Element,
              extend: {
                in: function (t) {
                  this.attr("in", t);
                },
              },
            }));
          var e = {
              blend: function (t, e, n) {
                this.attr({ in: t, in2: e, mode: n || "normal" });
              },
              colorMatrix: function (t, e) {
                "matrix" == t && (e = r(e)),
                  this.attr({ type: t, values: void 0 === e ? null : e });
              },
              convolveMatrix: function (t) {
                (t = r(t)),
                  this.attr({
                    order: Math.sqrt(t.split(" ").length),
                    kernelMatrix: t,
                  });
              },
              composite: function (t, e, n) {
                this.attr({ in: t, in2: e, operator: n });
              },
              flood: function (t, e) {
                this.attr("flood-color", t),
                  null != e && this.attr("flood-opacity", e);
              },
              offset: function (t, e) {
                this.attr({ dx: t, dy: e });
              },
              image: function (t) {
                this.attr("href", t, SVG.xlink);
              },
              displacementMap: function (t, e, n, i, r) {
                this.attr({
                  in: t,
                  in2: e,
                  scale: n,
                  xChannelSelector: i,
                  yChannelSelector: r,
                });
              },
              gaussianBlur: function (t, e) {
                null != t || null != e
                  ? this.attr(
                      "stdDeviation",
                      (function (t) {
                        if (!Array.isArray(t)) return t;
                        for (var e = 0, n = t.length, i = []; e < n; e++)
                          i.push(t[e]);
                        return i.join(" ");
                      })(Array.prototype.slice.call(arguments))
                    )
                  : this.attr("stdDeviation", "0 0");
              },
              morphology: function (t, e) {
                this.attr({ operator: t, radius: e });
              },
              tile: function () {},
              turbulence: function (t, e, n, i, r) {
                this.attr({
                  numOctaves: e,
                  seed: n,
                  stitchTiles: i,
                  baseFrequency: t,
                  type: r,
                });
              },
            },
            n = {
              merge: function () {
                var t;
                if (arguments[0] instanceof SVG.Set) {
                  var e = this;
                  arguments[0].each(function (t) {
                    this instanceof SVG.MergeNode
                      ? e.put(this)
                      : (this instanceof SVG.Effect ||
                          this instanceof SVG.ParentEffect) &&
                        e.put(new SVG.MergeNode(this));
                  });
                } else {
                  t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                  for (var n = 0; n < t.length; n++)
                    t[n] instanceof SVG.MergeNode
                      ? this.put(t[n])
                      : this.put(new SVG.MergeNode(t[n]));
                }
              },
              componentTransfer: function (t) {
                if (
                  ((this.rgb = new SVG.Set()),
                  ["r", "g", "b", "a"].forEach(
                    function (t) {
                      (this[t] = new SVG["Func" + t.toUpperCase()]("identity")),
                        this.rgb.add(this[t]),
                        this.node.appendChild(this[t].node);
                    }.bind(this)
                  ),
                  t)
                )
                  for (var e in (t.rgb &&
                    (["r", "g", "b"].forEach(
                      function (e) {
                        this[e].attr(t.rgb);
                      }.bind(this)
                    ),
                    delete t.rgb),
                  t))
                    this[e].attr(t[e]);
              },
              diffuseLighting: function (t, e, n) {
                this.attr({
                  surfaceScale: t,
                  diffuseConstant: e,
                  kernelUnitLength: n,
                });
              },
              specularLighting: function (t, e, n, i) {
                this.attr({
                  surfaceScale: t,
                  diffuseConstant: e,
                  specularExponent: n,
                  kernelUnitLength: i,
                });
              },
            },
            i = {
              distantLight: function (t, e) {
                this.attr({ azimuth: t, elevation: e });
              },
              pointLight: function (t, e, n) {
                this.attr({ x: t, y: e, z: n });
              },
              spotLight: function (t, e, n, i, r, o) {
                this.attr({
                  x: t,
                  y: e,
                  z: n,
                  pointsAtX: i,
                  pointsAtY: r,
                  pointsAtZ: o,
                });
              },
              mergeNode: function (t) {
                this.attr("in", t);
              },
            };
          function r(t) {
            return (
              Array.isArray(t) && (t = new SVG.Array(t)),
              t
                .toString()
                .replace(/^\s+/, "")
                .replace(/\s+$/, "")
                .replace(/\s+/g, " ")
            );
          }
          function o() {
            var t = function () {};
            for (var e in ("function" ==
              typeof arguments[arguments.length - 1] &&
              ((t = arguments[arguments.length - 1]),
              Array.prototype.splice.call(arguments, arguments.length - 1, 1)),
            arguments))
              for (var n in arguments[e]) t(arguments[e][n], n, arguments[e]);
          }
          ["r", "g", "b", "a"].forEach(function (t) {
            i["Func" + t.toUpperCase()] = function (t) {
              switch ((this.attr("type", t), t)) {
                case "table":
                  this.attr("tableValues", arguments[1]);
                  break;
                case "linear":
                  this.attr("slope", arguments[1]),
                    this.attr("intercept", arguments[2]);
                  break;
                case "gamma":
                  this.attr("amplitude", arguments[1]),
                    this.attr("exponent", arguments[2]),
                    this.attr("offset", arguments[2]);
              }
            };
          }),
            o(e, function (t, e) {
              var n = e.charAt(0).toUpperCase() + e.slice(1);
              SVG[n + "Effect"] = SVG.invent({
                create: function () {
                  this.constructor.call(this, SVG.create("fe" + n)),
                    t.apply(this, arguments),
                    this.result(this.attr("id") + "Out");
                },
                inherit: SVG.Effect,
                extend: {},
              });
            }),
            o(n, function (t, e) {
              var n = e.charAt(0).toUpperCase() + e.slice(1);
              SVG[n + "Effect"] = SVG.invent({
                create: function () {
                  this.constructor.call(this, SVG.create("fe" + n)),
                    t.apply(this, arguments),
                    this.result(this.attr("id") + "Out");
                },
                inherit: SVG.ParentEffect,
                extend: {},
              });
            }),
            o(i, function (t, e) {
              var n = e.charAt(0).toUpperCase() + e.slice(1);
              SVG[n] = SVG.invent({
                create: function () {
                  this.constructor.call(this, SVG.create("fe" + n)),
                    t.apply(this, arguments);
                },
                inherit: SVG.ChildEffect,
                extend: {},
              });
            }),
            SVG.extend(SVG.MergeEffect, {
              in: function (t) {
                return (
                  t instanceof SVG.MergeNode
                    ? this.add(t, 0)
                    : this.add(new SVG.MergeNode(t), 0),
                  this
                );
              },
            }),
            SVG.extend(
              SVG.CompositeEffect,
              SVG.BlendEffect,
              SVG.DisplacementMapEffect,
              {
                in2: function (t) {
                  return null == t
                    ? (this.parent() &&
                        this.parent()
                          .select('[result="' + this.attr("in2") + '"]')
                          .get(0)) ||
                        this.attr("in2")
                    : this.attr("in2", t);
                },
              }
            ),
            (SVG.filter = {
              sepiatone: [
                0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172,
                0.334, 0.111, 0, 0, 0, 0, 0, 1, 0,
              ],
            });
        }.call(void 0),
        (function () {
          function t(t, r, o, a, s, l, c) {
            for (
              var d = t.slice(r, o || c),
                u = a.slice(s, l || c),
                p = 0,
                h = { pos: [0, 0], start: [0, 0] },
                f = { pos: [0, 0], start: [0, 0] };
              (d[p] = e.call(h, d[p])),
                (u[p] = e.call(f, u[p])),
                d[p][0] != u[p][0] ||
                "M" == d[p][0] ||
                ("A" == d[p][0] && (d[p][4] != u[p][4] || d[p][5] != u[p][5]))
                  ? (Array.prototype.splice.apply(
                      d,
                      [p, 1].concat(i.call(h, d[p]))
                    ),
                    Array.prototype.splice.apply(
                      u,
                      [p, 1].concat(i.call(f, u[p]))
                    ))
                  : ((d[p] = n.call(h, d[p])), (u[p] = n.call(f, u[p]))),
                ++p != d.length || p != u.length;

            )
              p == d.length &&
                d.push([
                  "C",
                  h.pos[0],
                  h.pos[1],
                  h.pos[0],
                  h.pos[1],
                  h.pos[0],
                  h.pos[1],
                ]),
                p == u.length &&
                  u.push([
                    "C",
                    f.pos[0],
                    f.pos[1],
                    f.pos[0],
                    f.pos[1],
                    f.pos[0],
                    f.pos[1],
                  ]);
            return { start: d, dest: u };
          }
          function e(t) {
            switch (t[0]) {
              case "z":
              case "Z":
                (t[0] = "L"), (t[1] = this.start[0]), (t[2] = this.start[1]);
                break;
              case "H":
                (t[0] = "L"), (t[2] = this.pos[1]);
                break;
              case "V":
                (t[0] = "L"), (t[2] = t[1]), (t[1] = this.pos[0]);
                break;
              case "T":
                (t[0] = "Q"),
                  (t[3] = t[1]),
                  (t[4] = t[2]),
                  (t[1] = this.reflection[1]),
                  (t[2] = this.reflection[0]);
                break;
              case "S":
                (t[0] = "C"),
                  (t[6] = t[4]),
                  (t[5] = t[3]),
                  (t[4] = t[2]),
                  (t[3] = t[1]),
                  (t[2] = this.reflection[1]),
                  (t[1] = this.reflection[0]);
            }
            return t;
          }
          function n(t) {
            var e = t.length;
            return (
              (this.pos = [t[e - 2], t[e - 1]]),
              -1 != "SCQT".indexOf(t[0]) &&
                (this.reflection = [
                  2 * this.pos[0] - t[e - 4],
                  2 * this.pos[1] - t[e - 3],
                ]),
              t
            );
          }
          function i(t) {
            var e = [t];
            switch (t[0]) {
              case "M":
                return (this.pos = this.start = [t[1], t[2]]), e;
              case "L":
                (t[5] = t[3] = t[1]),
                  (t[6] = t[4] = t[2]),
                  (t[1] = this.pos[0]),
                  (t[2] = this.pos[1]);
                break;
              case "Q":
                (t[6] = t[4]),
                  (t[5] = t[3]),
                  (t[4] = (1 * t[4]) / 3 + (2 * t[2]) / 3),
                  (t[3] = (1 * t[3]) / 3 + (2 * t[1]) / 3),
                  (t[2] = (1 * this.pos[1]) / 3 + (2 * t[2]) / 3),
                  (t[1] = (1 * this.pos[0]) / 3 + (2 * t[1]) / 3);
                break;
              case "A":
                t = (e = (function (t, e) {
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
                    h,
                    f,
                    b,
                    m,
                    g,
                    v,
                    _,
                    y,
                    M,
                    O,
                    w,
                    A,
                    x,
                    z,
                    C,
                    k = Math.abs(e[1]),
                    S = Math.abs(e[2]),
                    T = e[3] % 360,
                    D = e[4],
                    L = e[5],
                    q = e[6],
                    E = e[7],
                    j = new SVG.Point(t),
                    P = new SVG.Point(q, E),
                    R = [];
                  if (0 === k || 0 === S || (j.x === P.x && j.y === P.y))
                    return [["C", j.x, j.y, P.x, P.y, P.x, P.y]];
                  for (
                    (i =
                      ((n = new SVG.Point(
                        (j.x - P.x) / 2,
                        (j.y - P.y) / 2
                      ).transform(new SVG.Matrix().rotate(T))).x *
                        n.x) /
                        (k * k) +
                      (n.y * n.y) / (S * S)) > 1 &&
                      ((k *= i = Math.sqrt(i)), (S *= i)),
                      r = new SVG.Matrix()
                        .rotate(T)
                        .scale(1 / k, 1 / S)
                        .rotate(-T),
                      j = j.transform(r),
                      s =
                        (o = [(P = P.transform(r)).x - j.x, P.y - j.y])[0] *
                          o[0] +
                        o[1] * o[1],
                      a = Math.sqrt(s),
                      o[0] /= a,
                      o[1] /= a,
                      l = s < 4 ? Math.sqrt(1 - s / 4) : 0,
                      D === L && (l *= -1),
                      c = new SVG.Point(
                        (P.x + j.x) / 2 + l * -o[1],
                        (P.y + j.y) / 2 + l * o[0]
                      ),
                      d = new SVG.Point(j.x - c.x, j.y - c.y),
                      u = new SVG.Point(P.x - c.x, P.y - c.y),
                      p = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)),
                      d.y < 0 && (p *= -1),
                      h = Math.acos(u.x / Math.sqrt(u.x * u.x + u.y * u.y)),
                      u.y < 0 && (h *= -1),
                      L && p > h && (h += 2 * Math.PI),
                      !L && p < h && (h -= 2 * Math.PI),
                      g = [],
                      v = p,
                      f =
                        (h - p) /
                        (b = Math.ceil((2 * Math.abs(p - h)) / Math.PI)),
                      m = (4 * Math.tan(f / 4)) / 3,
                      O = 0;
                    O <= b;
                    O++
                  )
                    (y = Math.cos(v)),
                      (_ = Math.sin(v)),
                      (M = new SVG.Point(c.x + y, c.y + _)),
                      (g[O] = [
                        new SVG.Point(M.x + m * _, M.y - m * y),
                        M,
                        new SVG.Point(M.x - m * _, M.y + m * y),
                      ]),
                      (v += f);
                  for (
                    g[0][0] = g[0][1].clone(),
                      g[g.length - 1][2] = g[g.length - 1][1].clone(),
                      r = new SVG.Matrix().rotate(T).scale(k, S).rotate(-T),
                      O = 0,
                      w = g.length;
                    O < w;
                    O++
                  )
                    (g[O][0] = g[O][0].transform(r)),
                      (g[O][1] = g[O][1].transform(r)),
                      (g[O][2] = g[O][2].transform(r));
                  for (O = 1, w = g.length; O < w; O++)
                    (A = (M = g[O - 1][2]).x),
                      (x = M.y),
                      (z = (M = g[O][0]).x),
                      (C = M.y),
                      (q = (M = g[O][1]).x),
                      (E = M.y),
                      R.push(["C", A, x, z, C, q, E]);
                  return R;
                })(this.pos, t))[0];
            }
            return (
              (t[0] = "C"),
              (this.pos = [t[5], t[6]]),
              (this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]]),
              e
            );
          }
          function r(t, e) {
            if (!1 === e) return !1;
            for (var n = e, i = t.length; n < i; ++n)
              if ("M" == t[n][0]) return n;
            return !1;
          }
          SVG.extend(SVG.PathArray, {
            morph: function (e) {
              for (
                var n = this.value,
                  i = this.parse(e),
                  o = 0,
                  a = 0,
                  s = !1,
                  l = !1;
                !1 !== o || !1 !== a;

              ) {
                var c;
                (s = r(n, !1 !== o && o + 1)),
                  (l = r(i, !1 !== a && a + 1)),
                  !1 === o &&
                    (o =
                      0 == (c = new SVG.PathArray(d.start).bbox()).height ||
                      0 == c.width
                        ? n.push(n[0]) - 1
                        : n.push(["M", c.x + c.width / 2, c.y + c.height / 2]) -
                          1),
                  !1 === a &&
                    (a =
                      0 == (c = new SVG.PathArray(d.dest).bbox()).height ||
                      0 == c.width
                        ? i.push(i[0]) - 1
                        : i.push(["M", c.x + c.width / 2, c.y + c.height / 2]) -
                          1);
                var d = t(n, o, s, i, a, l);
                (n = n.slice(0, o).concat(d.start, !1 === s ? [] : n.slice(s))),
                  (i = i
                    .slice(0, a)
                    .concat(d.dest, !1 === l ? [] : i.slice(l))),
                  (o = !1 !== s && o + d.start.length),
                  (a = !1 !== l && a + d.dest.length);
              }
              return (
                (this.value = n),
                (this.destination = new SVG.PathArray()),
                (this.destination.value = i),
                this
              );
            },
          });
        })(),
        function () {
          function t(t) {
            t.remember("_draggable", this), (this.el = t);
          }
          (t.prototype.init = function (t, e) {
            var n = this;
            (this.constraint = t),
              (this.value = e),
              this.el.on("mousedown.drag", function (t) {
                n.start(t);
              }),
              this.el.on("touchstart.drag", function (t) {
                n.start(t);
              });
          }),
            (t.prototype.transformPoint = function (t, e) {
              var n =
                ((t = t || window.event).changedTouches &&
                  t.changedTouches[0]) ||
                t;
              return (
                (this.p.x = n.clientX - (e || 0)),
                (this.p.y = n.clientY),
                this.p.matrixTransform(this.m)
              );
            }),
            (t.prototype.getBBox = function () {
              var t = this.el.bbox();
              return (
                this.el instanceof SVG.Nested && (t = this.el.rbox()),
                (this.el instanceof SVG.G ||
                  this.el instanceof SVG.Use ||
                  this.el instanceof SVG.Nested) &&
                  ((t.x = this.el.x()), (t.y = this.el.y())),
                t
              );
            }),
            (t.prototype.start = function (t) {
              if (
                ("click" != t.type &&
                  "mousedown" != t.type &&
                  "mousemove" != t.type) ||
                1 == (t.which || t.buttons)
              ) {
                var e = this;
                if (
                  (this.el.fire("beforedrag", { event: t, handler: this }),
                  !this.el.event().defaultPrevented)
                ) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    (this.parent =
                      this.parent ||
                      this.el.parent(SVG.Nested) ||
                      this.el.parent(SVG.Doc)),
                    (this.p = this.parent.node.createSVGPoint()),
                    (this.m = this.el.node.getScreenCTM().inverse());
                  var n,
                    i = this.getBBox();
                  if (this.el instanceof SVG.Text)
                    switch (
                      ((n = this.el.node.getComputedTextLength()),
                      this.el.attr("text-anchor"))
                    ) {
                      case "middle":
                        n /= 2;
                        break;
                      case "start":
                        n = 0;
                    }
                  (this.startPoints = {
                    point: this.transformPoint(t, n),
                    box: i,
                    transform: this.el.transform(),
                  }),
                    SVG.on(window, "mousemove.drag", function (t) {
                      e.drag(t);
                    }),
                    SVG.on(window, "touchmove.drag", function (t) {
                      e.drag(t);
                    }),
                    SVG.on(window, "mouseup.drag", function (t) {
                      e.end(t);
                    }),
                    SVG.on(window, "touchend.drag", function (t) {
                      e.end(t);
                    }),
                    this.el.fire("dragstart", {
                      event: t,
                      p: this.startPoints.point,
                      m: this.m,
                      handler: this,
                    });
                }
              }
            }),
            (t.prototype.drag = function (t) {
              var e = this.getBBox(),
                n = this.transformPoint(t),
                i = this.startPoints.box.x + n.x - this.startPoints.point.x,
                r = this.startPoints.box.y + n.y - this.startPoints.point.y,
                o = this.constraint,
                a = n.x - this.startPoints.point.x,
                s = n.y - this.startPoints.point.y;
              if (
                (this.el.fire("dragmove", {
                  event: t,
                  p: n,
                  m: this.m,
                  handler: this,
                }),
                this.el.event().defaultPrevented)
              )
                return n;
              if ("function" == typeof o) {
                var l = o.call(this.el, i, r, this.m);
                "boolean" == typeof l && (l = { x: l, y: l }),
                  !0 === l.x ? this.el.x(i) : !1 !== l.x && this.el.x(l.x),
                  !0 === l.y ? this.el.y(r) : !1 !== l.y && this.el.y(l.y);
              } else
                "object" == typeof o &&
                  (null != o.minX && i < o.minX
                    ? (a = (i = o.minX) - this.startPoints.box.x)
                    : null != o.maxX &&
                      i > o.maxX - e.width &&
                      (a = (i = o.maxX - e.width) - this.startPoints.box.x),
                  null != o.minY && r < o.minY
                    ? (s = (r = o.minY) - this.startPoints.box.y)
                    : null != o.maxY &&
                      r > o.maxY - e.height &&
                      (s = (r = o.maxY - e.height) - this.startPoints.box.y),
                  null != o.snapToGrid &&
                    ((i -= i % o.snapToGrid),
                    (r -= r % o.snapToGrid),
                    (a -= a % o.snapToGrid),
                    (s -= s % o.snapToGrid)),
                  this.el instanceof SVG.G
                    ? this.el
                        .matrix(this.startPoints.transform)
                        .transform({ x: a, y: s }, !0)
                    : this.el.move(i, r));
              return n;
            }),
            (t.prototype.end = function (t) {
              var e = this.drag(t);
              this.el.fire("dragend", {
                event: t,
                p: e,
                m: this.m,
                handler: this,
              }),
                SVG.off(window, "mousemove.drag"),
                SVG.off(window, "touchmove.drag"),
                SVG.off(window, "mouseup.drag"),
                SVG.off(window, "touchend.drag");
            }),
            SVG.extend(SVG.Element, {
              draggable: function (e, n) {
                ("function" != typeof e && "object" != typeof e) ||
                  ((n = e), (e = !0));
                var i = this.remember("_draggable") || new t(this);
                return (
                  (e = void 0 === e || e)
                    ? i.init(n || {}, e)
                    : (this.off("mousedown.drag"), this.off("touchstart.drag")),
                  this
                );
              },
            });
        }.call(void 0),
        (function () {
          function t(t) {
            (this.el = t),
              t.remember("_selectHandler", this),
              (this.pointSelection = { isSelected: !1 }),
              (this.rectSelection = { isSelected: !1 }),
              (this.pointsList = {
                lt: [0, 0],
                rt: ["width", 0],
                rb: ["width", "height"],
                lb: [0, "height"],
                t: ["width", 0],
                r: ["width", "height"],
                b: ["width", "height"],
                l: [0, "height"],
              }),
              (this.pointCoord = function (t, e, n) {
                var i = "string" != typeof t ? t : e[t];
                return n ? i / 2 : i;
              }),
              (this.pointCoords = function (t, e) {
                var n = this.pointsList[t];
                return {
                  x: this.pointCoord(n[0], e, "t" === t || "b" === t),
                  y: this.pointCoord(n[1], e, "r" === t || "l" === t),
                };
              });
          }
          (t.prototype.init = function (t, e) {
            var n = this.el.bbox();
            this.options = {};
            var i = this.el.selectize.defaults.points;
            for (var r in this.el.selectize.defaults)
              (this.options[r] = this.el.selectize.defaults[r]),
                void 0 !== e[r] && (this.options[r] = e[r]);
            var o = ["points", "pointsExclude"];
            for (var r in o) {
              var a = this.options[o[r]];
              "string" == typeof a
                ? (a = a.length > 0 ? a.split(/\s*,\s*/i) : [])
                : "boolean" == typeof a &&
                  "points" === o[r] &&
                  (a = a ? i : []),
                (this.options[o[r]] = a);
            }
            (this.options.points = [i, this.options.points].reduce(function (
              t,
              e
            ) {
              return t.filter(function (t) {
                return e.indexOf(t) > -1;
              });
            })),
              (this.options.points = [
                this.options.points,
                this.options.pointsExclude,
              ].reduce(function (t, e) {
                return t.filter(function (t) {
                  return e.indexOf(t) < 0;
                });
              })),
              (this.parent = this.el.parent()),
              (this.nested = this.nested || this.parent.group()),
              this.nested.matrix(new SVG.Matrix(this.el).translate(n.x, n.y)),
              this.options.deepSelect &&
              -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type)
                ? this.selectPoints(t)
                : this.selectRect(t),
              this.observe(),
              this.cleanup();
          }),
            (t.prototype.selectPoints = function (t) {
              return (
                (this.pointSelection.isSelected = t),
                this.pointSelection.set ||
                  ((this.pointSelection.set = this.parent.set()),
                  this.drawPoints()),
                this
              );
            }),
            (t.prototype.getPointArray = function () {
              var t = this.el.bbox();
              return this.el
                .array()
                .valueOf()
                .map(function (e) {
                  return [e[0] - t.x, e[1] - t.y];
                });
            }),
            (t.prototype.drawPoints = function () {
              for (
                var t = this, e = this.getPointArray(), n = 0, i = e.length;
                n < i;
                ++n
              ) {
                var r = (function (e) {
                    return function (n) {
                      (n = n || window.event).preventDefault
                        ? n.preventDefault()
                        : (n.returnValue = !1),
                        n.stopPropagation();
                      var i = n.pageX || n.touches[0].pageX,
                        r = n.pageY || n.touches[0].pageY;
                      t.el.fire("point", { x: i, y: r, i: e, event: n });
                    };
                  })(n),
                  o = this.drawPoint(e[n][0], e[n][1])
                    .addClass(this.options.classPoints)
                    .addClass(this.options.classPoints + "_point")
                    .on("touchstart", r)
                    .on("mousedown", r);
                this.pointSelection.set.add(o);
              }
            }),
            (t.prototype.drawPoint = function (t, e) {
              var n = this.options.pointType;
              switch (n) {
                case "circle":
                  return this.drawCircle(t, e);
                case "rect":
                  return this.drawRect(t, e);
                default:
                  if ("function" == typeof n) return n.call(this, t, e);
                  throw new Error("Unknown " + n + " point type!");
              }
            }),
            (t.prototype.drawCircle = function (t, e) {
              return this.nested.circle(this.options.pointSize).center(t, e);
            }),
            (t.prototype.drawRect = function (t, e) {
              return this.nested
                .rect(this.options.pointSize, this.options.pointSize)
                .center(t, e);
            }),
            (t.prototype.updatePointSelection = function () {
              var t = this.getPointArray();
              this.pointSelection.set.each(function (e) {
                (this.cx() === t[e][0] && this.cy() === t[e][1]) ||
                  this.center(t[e][0], t[e][1]);
              });
            }),
            (t.prototype.updateRectSelection = function () {
              var t = this,
                e = this.el.bbox();
              if (
                (this.rectSelection.set
                  .get(0)
                  .attr({ width: e.width, height: e.height }),
                this.options.points.length &&
                  this.options.points.map(function (n, i) {
                    var r = t.pointCoords(n, e);
                    t.rectSelection.set.get(i + 1).center(r.x, r.y);
                  }),
                this.options.rotationPoint)
              ) {
                var n = this.rectSelection.set.length();
                this.rectSelection.set.get(n - 1).center(e.width / 2, 20);
              }
            }),
            (t.prototype.selectRect = function (t) {
              var e = this,
                n = this.el.bbox();
              function i(t) {
                return function (n) {
                  (n = n || window.event).preventDefault
                    ? n.preventDefault()
                    : (n.returnValue = !1),
                    n.stopPropagation();
                  var i = n.pageX || n.touches[0].pageX,
                    r = n.pageY || n.touches[0].pageY;
                  e.el.fire(t, { x: i, y: r, event: n });
                };
              }
              if (
                ((this.rectSelection.isSelected = t),
                (this.rectSelection.set =
                  this.rectSelection.set || this.parent.set()),
                this.rectSelection.set.get(0) ||
                  this.rectSelection.set.add(
                    this.nested
                      .rect(n.width, n.height)
                      .addClass(this.options.classRect)
                  ),
                this.options.points.length &&
                  this.rectSelection.set.length() < 2 &&
                  (this.options.points.map(function (t, r) {
                    var o = e.pointCoords(t, n),
                      a = e
                        .drawPoint(o.x, o.y)
                        .attr("class", e.options.classPoints + "_" + t)
                        .on("mousedown", i(t))
                        .on("touchstart", i(t));
                    e.rectSelection.set.add(a);
                  }),
                  this.rectSelection.set.each(function () {
                    this.addClass(e.options.classPoints);
                  })),
                this.options.rotationPoint &&
                  ((this.options.points && !this.rectSelection.set.get(9)) ||
                    (!this.options.points && !this.rectSelection.set.get(1))))
              ) {
                var r = function (t) {
                    (t = t || window.event).preventDefault
                      ? t.preventDefault()
                      : (t.returnValue = !1),
                      t.stopPropagation();
                    var n = t.pageX || t.touches[0].pageX,
                      i = t.pageY || t.touches[0].pageY;
                    e.el.fire("rot", { x: n, y: i, event: t });
                  },
                  o = this.drawPoint(n.width / 2, 20)
                    .attr("class", this.options.classPoints + "_rot")
                    .on("touchstart", r)
                    .on("mousedown", r);
                this.rectSelection.set.add(o);
              }
            }),
            (t.prototype.handler = function () {
              var t = this.el.bbox();
              this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)),
                this.rectSelection.isSelected && this.updateRectSelection(),
                this.pointSelection.isSelected && this.updatePointSelection();
            }),
            (t.prototype.observe = function () {
              var t = this;
              if (MutationObserver)
                if (
                  this.rectSelection.isSelected ||
                  this.pointSelection.isSelected
                )
                  (this.observerInst =
                    this.observerInst ||
                    new MutationObserver(function () {
                      t.handler();
                    })),
                    this.observerInst.observe(this.el.node, { attributes: !0 });
                else
                  try {
                    this.observerInst.disconnect(), delete this.observerInst;
                  } catch (t) {}
              else
                this.el.off("DOMAttrModified.select"),
                  (this.rectSelection.isSelected ||
                    this.pointSelection.isSelected) &&
                    this.el.on("DOMAttrModified.select", function () {
                      t.handler();
                    });
            }),
            (t.prototype.cleanup = function () {
              !this.rectSelection.isSelected &&
                this.rectSelection.set &&
                (this.rectSelection.set.each(function () {
                  this.remove();
                }),
                this.rectSelection.set.clear(),
                delete this.rectSelection.set),
                !this.pointSelection.isSelected &&
                  this.pointSelection.set &&
                  (this.pointSelection.set.each(function () {
                    this.remove();
                  }),
                  this.pointSelection.set.clear(),
                  delete this.pointSelection.set),
                this.pointSelection.isSelected ||
                  this.rectSelection.isSelected ||
                  (this.nested.remove(), delete this.nested);
            }),
            SVG.extend(SVG.Element, {
              selectize: function (e, n) {
                return (
                  "object" == typeof e && ((n = e), (e = !0)),
                  (this.remember("_selectHandler") || new t(this)).init(
                    void 0 === e || e,
                    n || {}
                  ),
                  this
                );
              },
            }),
            (SVG.Element.prototype.selectize.defaults = {
              points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"],
              pointsExclude: [],
              classRect: "svg_select_boundingRect",
              classPoints: "svg_select_points",
              pointSize: 7,
              rotationPoint: !0,
              deepSelect: !1,
              pointType: "circle",
            });
        })(),
        (function () {
          (function () {
            function t(t) {
              t.remember("_resizeHandler", this),
                (this.el = t),
                (this.parameters = {}),
                (this.lastUpdateCall = null),
                (this.p = t.doc().node.createSVGPoint());
            }
            (t.prototype.transformPoint = function (t, e, n) {
              return (
                (this.p.x = t - (this.offset.x - window.pageXOffset)),
                (this.p.y = e - (this.offset.y - window.pageYOffset)),
                this.p.matrixTransform(n || this.m)
              );
            }),
              (t.prototype._extractPosition = function (t) {
                return {
                  x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                  y: null != t.clientY ? t.clientY : t.touches[0].clientY,
                };
              }),
              (t.prototype.init = function (t) {
                var e = this;
                if ((this.stop(), "stop" !== t)) {
                  for (var n in ((this.options = {}), this.el.resize.defaults))
                    (this.options[n] = this.el.resize.defaults[n]),
                      void 0 !== t[n] && (this.options[n] = t[n]);
                  this.el.on("lt.resize", function (t) {
                    e.resize(t || window.event);
                  }),
                    this.el.on("rt.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("rb.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("lb.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("t.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("r.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("b.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("l.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("rot.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.el.on("point.resize", function (t) {
                      e.resize(t || window.event);
                    }),
                    this.update();
                }
              }),
              (t.prototype.stop = function () {
                return (
                  this.el.off("lt.resize"),
                  this.el.off("rt.resize"),
                  this.el.off("rb.resize"),
                  this.el.off("lb.resize"),
                  this.el.off("t.resize"),
                  this.el.off("r.resize"),
                  this.el.off("b.resize"),
                  this.el.off("l.resize"),
                  this.el.off("rot.resize"),
                  this.el.off("point.resize"),
                  this
                );
              }),
              (t.prototype.resize = function (t) {
                var e = this;
                (this.m = this.el.node.getScreenCTM().inverse()),
                  (this.offset = {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                  });
                var n = this._extractPosition(t.detail.event);
                if (
                  ((this.parameters = {
                    type: this.el.type,
                    p: this.transformPoint(n.x, n.y),
                    x: t.detail.x,
                    y: t.detail.y,
                    box: this.el.bbox(),
                    rotation: this.el.transform().rotation,
                  }),
                  "text" === this.el.type &&
                    (this.parameters.fontSize = this.el.attr()["font-size"]),
                  void 0 !== t.detail.i)
                ) {
                  var i = this.el.array().valueOf();
                  (this.parameters.i = t.detail.i),
                    (this.parameters.pointCoords = [
                      i[t.detail.i][0],
                      i[t.detail.i][1],
                    ]);
                }
                switch (t.type) {
                  case "lt":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e);
                      if (
                        this.parameters.box.width - n[0] > 0 &&
                        this.parameters.box.height - n[1] > 0
                      ) {
                        if ("text" === this.parameters.type)
                          return (
                            this.el.move(
                              this.parameters.box.x + n[0],
                              this.parameters.box.y
                            ),
                            void this.el.attr(
                              "font-size",
                              this.parameters.fontSize - n[0]
                            )
                          );
                        (n = this.checkAspectRatio(n)),
                          this.el
                            .move(
                              this.parameters.box.x + n[0],
                              this.parameters.box.y + n[1]
                            )
                            .size(
                              this.parameters.box.width - n[0],
                              this.parameters.box.height - n[1]
                            );
                      }
                    };
                    break;
                  case "rt":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 2);
                      if (
                        this.parameters.box.width + n[0] > 0 &&
                        this.parameters.box.height - n[1] > 0
                      ) {
                        if ("text" === this.parameters.type)
                          return (
                            this.el.move(
                              this.parameters.box.x - n[0],
                              this.parameters.box.y
                            ),
                            void this.el.attr(
                              "font-size",
                              this.parameters.fontSize + n[0]
                            )
                          );
                        (n = this.checkAspectRatio(n, !0)),
                          this.el
                            .move(
                              this.parameters.box.x,
                              this.parameters.box.y + n[1]
                            )
                            .size(
                              this.parameters.box.width + n[0],
                              this.parameters.box.height - n[1]
                            );
                      }
                    };
                    break;
                  case "rb":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 0);
                      if (
                        this.parameters.box.width + n[0] > 0 &&
                        this.parameters.box.height + n[1] > 0
                      ) {
                        if ("text" === this.parameters.type)
                          return (
                            this.el.move(
                              this.parameters.box.x - n[0],
                              this.parameters.box.y
                            ),
                            void this.el.attr(
                              "font-size",
                              this.parameters.fontSize + n[0]
                            )
                          );
                        (n = this.checkAspectRatio(n)),
                          this.el
                            .move(this.parameters.box.x, this.parameters.box.y)
                            .size(
                              this.parameters.box.width + n[0],
                              this.parameters.box.height + n[1]
                            );
                      }
                    };
                    break;
                  case "lb":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 1);
                      if (
                        this.parameters.box.width - n[0] > 0 &&
                        this.parameters.box.height + n[1] > 0
                      ) {
                        if ("text" === this.parameters.type)
                          return (
                            this.el.move(
                              this.parameters.box.x + n[0],
                              this.parameters.box.y
                            ),
                            void this.el.attr(
                              "font-size",
                              this.parameters.fontSize - n[0]
                            )
                          );
                        (n = this.checkAspectRatio(n, !0)),
                          this.el
                            .move(
                              this.parameters.box.x + n[0],
                              this.parameters.box.y
                            )
                            .size(
                              this.parameters.box.width - n[0],
                              this.parameters.box.height + n[1]
                            );
                      }
                    };
                    break;
                  case "t":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 2);
                      if (this.parameters.box.height - n[1] > 0) {
                        if ("text" === this.parameters.type) return;
                        this.el
                          .move(
                            this.parameters.box.x,
                            this.parameters.box.y + n[1]
                          )
                          .height(this.parameters.box.height - n[1]);
                      }
                    };
                    break;
                  case "r":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 0);
                      if (this.parameters.box.width + n[0] > 0) {
                        if ("text" === this.parameters.type) return;
                        this.el
                          .move(this.parameters.box.x, this.parameters.box.y)
                          .width(this.parameters.box.width + n[0]);
                      }
                    };
                    break;
                  case "b":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 0);
                      if (this.parameters.box.height + n[1] > 0) {
                        if ("text" === this.parameters.type) return;
                        this.el
                          .move(this.parameters.box.x, this.parameters.box.y)
                          .height(this.parameters.box.height + n[1]);
                      }
                    };
                    break;
                  case "l":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(t, e, 1);
                      if (this.parameters.box.width - n[0] > 0) {
                        if ("text" === this.parameters.type) return;
                        this.el
                          .move(
                            this.parameters.box.x + n[0],
                            this.parameters.box.y
                          )
                          .width(this.parameters.box.width - n[0]);
                      }
                    };
                    break;
                  case "rot":
                    this.calc = function (t, e) {
                      var n = t + this.parameters.p.x,
                        i = e + this.parameters.p.y,
                        r = Math.atan2(
                          this.parameters.p.y -
                            this.parameters.box.y -
                            this.parameters.box.height / 2,
                          this.parameters.p.x -
                            this.parameters.box.x -
                            this.parameters.box.width / 2
                        ),
                        o = Math.atan2(
                          i -
                            this.parameters.box.y -
                            this.parameters.box.height / 2,
                          n -
                            this.parameters.box.x -
                            this.parameters.box.width / 2
                        ),
                        a =
                          this.parameters.rotation +
                          (180 * (o - r)) / Math.PI +
                          this.options.snapToAngle / 2;
                      this.el
                        .center(this.parameters.box.cx, this.parameters.box.cy)
                        .rotate(
                          a - (a % this.options.snapToAngle),
                          this.parameters.box.cx,
                          this.parameters.box.cy
                        );
                    };
                    break;
                  case "point":
                    this.calc = function (t, e) {
                      var n = this.snapToGrid(
                          t,
                          e,
                          this.parameters.pointCoords[0],
                          this.parameters.pointCoords[1]
                        ),
                        i = this.el.array().valueOf();
                      (i[this.parameters.i][0] =
                        this.parameters.pointCoords[0] + n[0]),
                        (i[this.parameters.i][1] =
                          this.parameters.pointCoords[1] + n[1]),
                        this.el.plot(i);
                    };
                }
                this.el.fire("resizestart", {
                  dx: this.parameters.x,
                  dy: this.parameters.y,
                  event: t,
                }),
                  SVG.on(window, "touchmove.resize", function (t) {
                    e.update(t || window.event);
                  }),
                  SVG.on(window, "touchend.resize", function () {
                    e.done();
                  }),
                  SVG.on(window, "mousemove.resize", function (t) {
                    e.update(t || window.event);
                  }),
                  SVG.on(window, "mouseup.resize", function () {
                    e.done();
                  });
              }),
              (t.prototype.update = function (t) {
                if (t) {
                  var e = this._extractPosition(t),
                    n = this.transformPoint(e.x, e.y),
                    i = n.x - this.parameters.p.x,
                    r = n.y - this.parameters.p.y;
                  (this.lastUpdateCall = [i, r]),
                    this.calc(i, r),
                    this.el.fire("resizing", { dx: i, dy: r, event: t });
                } else
                  this.lastUpdateCall &&
                    this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
              }),
              (t.prototype.done = function () {
                (this.lastUpdateCall = null),
                  SVG.off(window, "mousemove.resize"),
                  SVG.off(window, "mouseup.resize"),
                  SVG.off(window, "touchmove.resize"),
                  SVG.off(window, "touchend.resize"),
                  this.el.fire("resizedone");
              }),
              (t.prototype.snapToGrid = function (t, e, n, i) {
                var r;
                return (
                  void 0 !== i
                    ? (r = [
                        (n + t) % this.options.snapToGrid,
                        (i + e) % this.options.snapToGrid,
                      ])
                    : ((n = null == n ? 3 : n),
                      (r = [
                        (this.parameters.box.x +
                          t +
                          (1 & n ? 0 : this.parameters.box.width)) %
                          this.options.snapToGrid,
                        (this.parameters.box.y +
                          e +
                          (2 & n ? 0 : this.parameters.box.height)) %
                          this.options.snapToGrid,
                      ])),
                  t < 0 && (r[0] -= this.options.snapToGrid),
                  e < 0 && (r[1] -= this.options.snapToGrid),
                  (t -=
                    Math.abs(r[0]) < this.options.snapToGrid / 2
                      ? r[0]
                      : r[0] -
                        (t < 0
                          ? -this.options.snapToGrid
                          : this.options.snapToGrid)),
                  (e -=
                    Math.abs(r[1]) < this.options.snapToGrid / 2
                      ? r[1]
                      : r[1] -
                        (e < 0
                          ? -this.options.snapToGrid
                          : this.options.snapToGrid)),
                  this.constraintToBox(t, e, n, i)
                );
              }),
              (t.prototype.constraintToBox = function (t, e, n, i) {
                var r,
                  o,
                  a = this.options.constraint || {};
                return (
                  void 0 !== i
                    ? ((r = n), (o = i))
                    : ((r =
                        this.parameters.box.x +
                        (1 & n ? 0 : this.parameters.box.width)),
                      (o =
                        this.parameters.box.y +
                        (2 & n ? 0 : this.parameters.box.height))),
                  void 0 !== a.minX && r + t < a.minX && (t = a.minX - r),
                  void 0 !== a.maxX && r + t > a.maxX && (t = a.maxX - r),
                  void 0 !== a.minY && o + e < a.minY && (e = a.minY - o),
                  void 0 !== a.maxY && o + e > a.maxY && (e = a.maxY - o),
                  [t, e]
                );
              }),
              (t.prototype.checkAspectRatio = function (t, e) {
                if (!this.options.saveAspectRatio) return t;
                var n = t.slice(),
                  i = this.parameters.box.width / this.parameters.box.height,
                  r = this.parameters.box.width + t[0],
                  o = this.parameters.box.height - t[1],
                  a = r / o;
                return (
                  a < i
                    ? ((n[1] = r / i - this.parameters.box.height),
                      e && (n[1] = -n[1]))
                    : a > i &&
                      ((n[0] = this.parameters.box.width - o * i),
                      e && (n[0] = -n[0])),
                  n
                );
              }),
              SVG.extend(SVG.Element, {
                resize: function (e) {
                  return (
                    (this.remember("_resizeHandler") || new t(this)).init(
                      e || {}
                    ),
                    this
                  );
                },
              }),
              (SVG.Element.prototype.resize.defaults = {
                snapToAngle: 0.1,
                snapToGrid: 1,
                constraint: {},
                saveAspectRatio: !1,
              });
          }).call(this);
        })(),
        void 0 === window.Apex && (window.Apex = {});
      var Xt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "initModules",
                value: function () {
                  (this.ctx.publicMethods = [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "isSeriesHidden",
                    "highlightSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "exportToCSV",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy",
                  ]),
                    (this.ctx.eventList = [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend",
                    ]),
                    (this.ctx.animations = new w(this.ctx)),
                    (this.ctx.axes = new rt(this.ctx)),
                    (this.ctx.core = new Yt(this.ctx.el, this.ctx)),
                    (this.ctx.config = new B({})),
                    (this.ctx.data = new G(this.ctx)),
                    (this.ctx.grid = new J(this.ctx)),
                    (this.ctx.graphics = new x(this.ctx)),
                    (this.ctx.coreUtils = new z(this.ctx)),
                    (this.ctx.crosshairs = new ot(this.ctx)),
                    (this.ctx.events = new nt(this.ctx)),
                    (this.ctx.exports = new K(this.ctx)),
                    (this.ctx.fill = new H(this.ctx)),
                    (this.ctx.localization = new it(this.ctx)),
                    (this.ctx.options = new P()),
                    (this.ctx.responsive = new at(this.ctx)),
                    (this.ctx.series = new V(this.ctx)),
                    (this.ctx.theme = new st(this.ctx)),
                    (this.ctx.formatters = new T(this.ctx)),
                    (this.ctx.titleSubtitle = new lt(this.ctx)),
                    (this.ctx.legend = new bt(this.ctx)),
                    (this.ctx.toolbar = new mt(this.ctx)),
                    (this.ctx.tooltip = new At(this.ctx)),
                    (this.ctx.dimensions = new ht(this.ctx)),
                    (this.ctx.updateHelpers = new Ut(this.ctx)),
                    (this.ctx.zoomPanSelection = new gt(this.ctx)),
                    (this.ctx.w.globals.tooltip = new At(this.ctx));
                },
              },
            ]),
            t
          );
        })(),
        Vt = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "clear",
                value: function (t) {
                  var e = t.isUpdating;
                  this.ctx.zoomPanSelection &&
                    this.ctx.zoomPanSelection.destroy(),
                    this.ctx.toolbar && this.ctx.toolbar.destroy(),
                    (this.ctx.animations = null),
                    (this.ctx.axes = null),
                    (this.ctx.annotations = null),
                    (this.ctx.core = null),
                    (this.ctx.data = null),
                    (this.ctx.grid = null),
                    (this.ctx.series = null),
                    (this.ctx.responsive = null),
                    (this.ctx.theme = null),
                    (this.ctx.formatters = null),
                    (this.ctx.titleSubtitle = null),
                    (this.ctx.legend = null),
                    (this.ctx.dimensions = null),
                    (this.ctx.options = null),
                    (this.ctx.crosshairs = null),
                    (this.ctx.zoomPanSelection = null),
                    (this.ctx.updateHelpers = null),
                    (this.ctx.toolbar = null),
                    (this.ctx.localization = null),
                    (this.ctx.w.globals.tooltip = null),
                    this.clearDomElements({ isUpdating: e });
                },
              },
              {
                key: "killSVG",
                value: function (t) {
                  t.each(function () {
                    this.removeClass("*"), this.off(), this.stop();
                  }, !0),
                    t.ungroup(),
                    t.clear();
                },
              },
              {
                key: "clearDomElements",
                value: function (t) {
                  var e = this,
                    n = t.isUpdating,
                    i = this.w.globals.dom.Paper.node;
                  i.parentNode &&
                    i.parentNode.parentNode &&
                    !n &&
                    (i.parentNode.parentNode.style.minHeight = "unset");
                  var r = this.w.globals.dom.baseEl;
                  r &&
                    this.ctx.eventList.forEach(function (t) {
                      r.removeEventListener(t, e.ctx.events.documentEvent);
                    });
                  var o = this.w.globals.dom;
                  if (null !== this.ctx.el)
                    for (; this.ctx.el.firstChild; )
                      this.ctx.el.removeChild(this.ctx.el.firstChild);
                  this.killSVG(o.Paper),
                    o.Paper.remove(),
                    (o.elWrap = null),
                    (o.elGraphical = null),
                    (o.elLegendWrap = null),
                    (o.elLegendForeign = null),
                    (o.baseEl = null),
                    (o.elGridRect = null),
                    (o.elGridRectMask = null),
                    (o.elGridRectBarMask = null),
                    (o.elGridRectMarkerMask = null),
                    (o.elForecastMask = null),
                    (o.elNonForecastMask = null),
                    (o.elDefs = null);
                },
              },
            ]),
            t
          );
        })(),
        Gt = new WeakMap();
      return (function () {
        function t(e, n) {
          a(this, t),
            (this.opts = n),
            (this.ctx = this),
            (this.w = new $(n).init()),
            (this.el = e),
            (this.w.globals.cuid = O.randomId()),
            (this.w.globals.chartID = this.w.config.chart.id
              ? O.escapeString(this.w.config.chart.id)
              : this.w.globals.cuid),
            new Xt(this).initModules(),
            (this.create = O.bind(this.create, this)),
            (this.windowResizeHandler = this._windowResizeHandler.bind(this)),
            (this.parentResizeHandler = this._parentResizeCallback.bind(this));
        }
        return (
          l(
            t,
            [
              {
                key: "render",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    if (null !== t.el) {
                      void 0 === Apex._chartInstances &&
                        (Apex._chartInstances = []),
                        t.w.config.chart.id &&
                          Apex._chartInstances.push({
                            id: t.w.globals.chartID,
                            group: t.w.config.chart.group,
                            chart: t,
                          }),
                        t.setLocale(t.w.config.chart.defaultLocale);
                      var i = t.w.config.chart.events.beforeMount;
                      "function" == typeof i && i(t, t.w),
                        t.events.fireEvent("beforeMount", [t, t.w]),
                        window.addEventListener(
                          "resize",
                          t.windowResizeHandler
                        ),
                        (function (t, e) {
                          var n = !1;
                          if (t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                            var i = t.getBoundingClientRect();
                            ("none" !== t.style.display && 0 !== i.width) ||
                              (n = !0);
                          }
                          var r = new ResizeObserver(function (i) {
                            n && e.call(t, i), (n = !0);
                          });
                          t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                            ? Array.from(t.children).forEach(function (t) {
                                return r.observe(t);
                              })
                            : r.observe(t),
                            Gt.set(e, r);
                        })(t.el.parentNode, t.parentResizeHandler);
                      var r = t.el.getRootNode && t.el.getRootNode(),
                        o = O.is("ShadowRoot", r),
                        a = t.el.ownerDocument,
                        s = o
                          ? r.getElementById("apexcharts-css")
                          : a.getElementById("apexcharts-css");
                      if (!s) {
                        var l;
                        ((s = document.createElement("style")).id =
                          "apexcharts-css"),
                          (s.textContent =
                            '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,\n.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,\n.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,\n.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n');
                        var c =
                          (null === (l = t.opts.chart) || void 0 === l
                            ? void 0
                            : l.nonce) || t.w.config.chart.nonce;
                        c && s.setAttribute("nonce", c),
                          o ? r.prepend(s) : a.head.appendChild(s);
                      }
                      var d = t.create(t.w.config.series, {});
                      if (!d) return e(t);
                      t.mount(d)
                        .then(function () {
                          "function" ==
                            typeof t.w.config.chart.events.mounted &&
                            t.w.config.chart.events.mounted(t, t.w),
                            t.events.fireEvent("mounted", [t, t.w]),
                            e(d);
                        })
                        .catch(function (t) {
                          n(t);
                        });
                    } else n(new Error("Element not found"));
                  });
                },
              },
              {
                key: "create",
                value: function (t, e) {
                  var n = this,
                    i = this.w;
                  new Xt(this).initModules();
                  var r = this.w.globals;
                  if (
                    ((r.noData = !1),
                    (r.animationEnded = !1),
                    this.responsive.checkResponsiveConfig(e),
                    i.config.xaxis.convertedCatToNumeric &&
                      new N(i.config).convertCatToNumericXaxis(
                        i.config,
                        this.ctx
                      ),
                    null === this.el)
                  )
                    return (r.animationEnded = !0), null;
                  if (
                    (this.core.setupElements(),
                    "treemap" === i.config.chart.type &&
                      ((i.config.grid.show = !1),
                      (i.config.yaxis[0].show = !1)),
                    0 === r.svgWidth)
                  )
                    return (r.animationEnded = !0), null;
                  var o = t;
                  t.forEach(function (t, e) {
                    t.hidden &&
                      (o = n.legend.legendHelpers.getSeriesAfterCollapsing({
                        realIndex: e,
                      }));
                  });
                  var a = z.checkComboSeries(o, i.config.chart.type);
                  (r.comboCharts = a.comboCharts),
                    (r.comboBarCount = a.comboBarCount);
                  var s = o.every(function (t) {
                    return t.data && 0 === t.data.length;
                  });
                  (0 === o.length || (s && r.collapsedSeries.length < 1)) &&
                    this.series.handleNoData(),
                    this.events.setupEventHandlers(),
                    this.data.parseData(o),
                    this.theme.init(),
                    new Y(this).setGlobalMarkerSize(),
                    this.formatters.setLabelFormatters(),
                    this.titleSubtitle.draw(),
                    (r.noData &&
                      r.collapsedSeries.length !== r.series.length &&
                      !i.config.legend.showForSingleSeries) ||
                      this.legend.init(),
                    this.series.hasAllSeriesEqualX(),
                    r.axisCharts &&
                      (this.core.coreCalculations(),
                      "category" !== i.config.xaxis.type &&
                        this.formatters.setLabelFormatters(),
                      (this.ctx.toolbar.minX = i.globals.minX),
                      (this.ctx.toolbar.maxX = i.globals.maxX)),
                    this.formatters.heatmapLabelFormatters(),
                    new z(this).getLargestMarkerSize(),
                    this.dimensions.plotCoords();
                  var l = this.core.xySettings();
                  this.grid.createGridMask();
                  var c = this.core.plotChartType(o, l),
                    d = new X(this);
                  return (
                    d.bringForward(),
                    i.config.dataLabels.background.enabled &&
                      d.dataLabelsBackground(),
                    this.core.shiftGraphPosition(),
                    {
                      elGraph: c,
                      xyRatios: l,
                      dimensions: {
                        plot: {
                          left: i.globals.translateX,
                          top: i.globals.translateY,
                          width: i.globals.gridWidth,
                          height: i.globals.gridHeight,
                        },
                      },
                    }
                  );
                },
              },
              {
                key: "mount",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n = this,
                    i = n.w;
                  return new Promise(function (r, o) {
                    if (null === n.el)
                      return o(
                        new Error(
                          "Not enough data to display or target element not found"
                        )
                      );
                    (null === e || i.globals.allSeriesCollapsed) &&
                      n.series.handleNoData(),
                      (n.grid = new J(n));
                    var a,
                      s,
                      l = n.grid.drawGrid();
                    if (
                      ((n.annotations = new R(n)),
                      n.annotations.drawImageAnnos(),
                      n.annotations.drawTextAnnos(),
                      "back" === i.config.grid.position &&
                        (l && i.globals.dom.elGraphical.add(l.el),
                        null != l &&
                          null !== (a = l.elGridBorders) &&
                          void 0 !== a &&
                          a.node &&
                          i.globals.dom.elGraphical.add(l.elGridBorders)),
                      Array.isArray(e.elGraph))
                    )
                      for (var c = 0; c < e.elGraph.length; c++)
                        i.globals.dom.elGraphical.add(e.elGraph[c]);
                    else i.globals.dom.elGraphical.add(e.elGraph);
                    "front" === i.config.grid.position &&
                      (l && i.globals.dom.elGraphical.add(l.el),
                      null != l &&
                        null !== (s = l.elGridBorders) &&
                        void 0 !== s &&
                        s.node &&
                        i.globals.dom.elGraphical.add(l.elGridBorders)),
                      "front" === i.config.xaxis.crosshairs.position &&
                        n.crosshairs.drawXCrosshairs(),
                      "front" === i.config.yaxis[0].crosshairs.position &&
                        n.crosshairs.drawYCrosshairs(),
                      "treemap" !== i.config.chart.type &&
                        n.axes.drawAxis(i.config.chart.type, l);
                    var d = new Z(t.ctx, l),
                      u = new et(t.ctx, l);
                    if (
                      (null !== l &&
                        (d.xAxisLabelCorrections(l.xAxisTickWidth),
                        u.setYAxisTextAlignments(),
                        i.config.yaxis.map(function (t, e) {
                          -1 === i.globals.ignoreYAxisIndexes.indexOf(e) &&
                            u.yAxisTitleRotate(e, t.opposite);
                        })),
                      n.annotations.drawAxesAnnotations(),
                      !i.globals.noData)
                    ) {
                      if (
                        (i.config.tooltip.enabled &&
                          !i.globals.noData &&
                          n.w.globals.tooltip.drawTooltip(e.xyRatios),
                        i.globals.axisCharts &&
                          (i.globals.isXNumeric ||
                            i.config.xaxis.convertedCatToNumeric ||
                            i.globals.isRangeBar))
                      )
                        (i.config.chart.zoom.enabled ||
                          (i.config.chart.selection &&
                            i.config.chart.selection.enabled) ||
                          (i.config.chart.pan && i.config.chart.pan.enabled)) &&
                          n.zoomPanSelection.init({ xyRatios: e.xyRatios });
                      else {
                        var p = i.config.chart.toolbar.tools;
                        [
                          "zoom",
                          "zoomin",
                          "zoomout",
                          "selection",
                          "pan",
                          "reset",
                        ].forEach(function (t) {
                          p[t] = !1;
                        });
                      }
                      i.config.chart.toolbar.show &&
                        !i.globals.allSeriesCollapsed &&
                        n.toolbar.createToolbar();
                    }
                    i.globals.memory.methodsToExec.length > 0 &&
                      i.globals.memory.methodsToExec.forEach(function (t) {
                        t.method(t.params, !1, t.context);
                      }),
                      i.globals.axisCharts ||
                        i.globals.noData ||
                        n.core.resizeNonAxisCharts(),
                      r(n);
                  });
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t, e;
                  window.removeEventListener(
                    "resize",
                    this.windowResizeHandler
                  ),
                    this.el.parentNode,
                    (t = this.parentResizeHandler),
                    (e = Gt.get(t)) && (e.disconnect(), Gt.delete(t));
                  var n = this.w.config.chart.id;
                  n &&
                    Apex._chartInstances.forEach(function (t, e) {
                      t.id === O.escapeString(n) &&
                        Apex._chartInstances.splice(e, 1);
                    }),
                    new Vt(this.ctx).clear({ isUpdating: !1 });
                },
              },
              {
                key: "updateOptions",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    o =
                      !(arguments.length > 4 && void 0 !== arguments[4]) ||
                      arguments[4],
                    a = this.w;
                  return (
                    (a.globals.selection = void 0),
                    t.series &&
                      (this.series.resetSeries(!1, !0, !1),
                      t.series.length &&
                        t.series[0].data &&
                        (t.series = t.series.map(function (t, n) {
                          return e.updateHelpers._extendSeries(t, n);
                        })),
                      this.updateHelpers.revertDefaultAxisMinMax()),
                    t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)),
                    t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)),
                    a.globals.collapsedSeriesIndices.length > 0 &&
                      this.series.clearPreviousPaths(),
                    t.theme && (t = this.theme.updateThemeOptions(t)),
                    this.updateHelpers._updateOptions(t, n, i, r, o)
                  );
                },
              },
              {
                key: "updateSeries",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                  return (
                    this.series.resetSeries(!1),
                    this.updateHelpers.revertDefaultAxisMinMax(),
                    this.updateHelpers._updateSeries(t, e, n)
                  );
                },
              },
              {
                key: "appendSeries",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    i = this.w.config.series.slice();
                  return (
                    i.push(t),
                    this.series.resetSeries(!1),
                    this.updateHelpers.revertDefaultAxisMinMax(),
                    this.updateHelpers._updateSeries(i, e, n)
                  );
                },
              },
              {
                key: "appendData",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this;
                  (n.w.globals.dataChanged = !0), n.series.getPreviousPaths();
                  for (
                    var i = n.w.config.series.slice(), r = 0;
                    r < i.length;
                    r++
                  )
                    if (null !== t[r] && void 0 !== t[r])
                      for (var o = 0; o < t[r].data.length; o++)
                        i[r].data.push(t[r].data[o]);
                  return (
                    (n.w.config.series = i),
                    e &&
                      (n.w.globals.initialSeries = O.clone(n.w.config.series)),
                    this.update()
                  );
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    new Vt(e.ctx).clear({ isUpdating: !0 });
                    var r = e.create(e.w.config.series, t);
                    if (!r) return n(e);
                    e.mount(r)
                      .then(function () {
                        "function" == typeof e.w.config.chart.events.updated &&
                          e.w.config.chart.events.updated(e, e.w),
                          e.events.fireEvent("updated", [e, e.w]),
                          (e.w.globals.isDirty = !0),
                          n(e);
                      })
                      .catch(function (t) {
                        i(t);
                      });
                  });
                },
              },
              {
                key: "getSyncedCharts",
                value: function () {
                  var t = this.getGroupedCharts(),
                    e = [this];
                  return (
                    t.length &&
                      ((e = []),
                      t.forEach(function (t) {
                        e.push(t);
                      })),
                    e
                  );
                },
              },
              {
                key: "getGroupedCharts",
                value: function () {
                  var t = this;
                  return Apex._chartInstances
                    .filter(function (t) {
                      if (t.group) return !0;
                    })
                    .map(function (e) {
                      return t.w.config.chart.group === e.group ? e.chart : t;
                    });
                },
              },
              {
                key: "toggleSeries",
                value: function (t) {
                  return this.series.toggleSeries(t);
                },
              },
              {
                key: "highlightSeriesOnLegendHover",
                value: function (t, e) {
                  return this.series.toggleSeriesOnHover(t, e);
                },
              },
              {
                key: "showSeries",
                value: function (t) {
                  this.series.showSeries(t);
                },
              },
              {
                key: "hideSeries",
                value: function (t) {
                  this.series.hideSeries(t);
                },
              },
              {
                key: "highlightSeries",
                value: function (t) {
                  this.series.highlightSeries(t);
                },
              },
              {
                key: "isSeriesHidden",
                value: function (t) {
                  this.series.isSeriesHidden(t);
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
                      arguments[1];
                  this.series.resetSeries(t, e);
                },
              },
              {
                key: "addEventListener",
                value: function (t, e) {
                  this.events.addEventListener(t, e);
                },
              },
              {
                key: "removeEventListener",
                value: function (t, e) {
                  this.events.removeEventListener(t, e);
                },
              },
              {
                key: "addXaxisAnnotation",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0,
                    i = this;
                  n && (i = n),
                    i.annotations.addXaxisAnnotationExternal(t, e, i);
                },
              },
              {
                key: "addYaxisAnnotation",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0,
                    i = this;
                  n && (i = n),
                    i.annotations.addYaxisAnnotationExternal(t, e, i);
                },
              },
              {
                key: "addPointAnnotation",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0,
                    i = this;
                  n && (i = n),
                    i.annotations.addPointAnnotationExternal(t, e, i);
                },
              },
              {
                key: "clearAnnotations",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : void 0,
                    e = this;
                  t && (e = t), e.annotations.clearAnnotations(e);
                },
              },
              {
                key: "removeAnnotation",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    n = this;
                  e && (n = e), n.annotations.removeAnnotation(n, t);
                },
              },
              {
                key: "getChartArea",
                value: function () {
                  return this.w.globals.dom.baseEl.querySelector(
                    ".apexcharts-inner"
                  );
                },
              },
              {
                key: "getSeriesTotalXRange",
                value: function (t, e) {
                  return this.coreUtils.getSeriesTotalsXRange(t, e);
                },
              },
              {
                key: "getHighestValueInSeries",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return new tt(this.ctx).getMinYMaxY(t).highestY;
                },
              },
              {
                key: "getLowestValueInSeries",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return new tt(this.ctx).getMinYMaxY(t).lowestY;
                },
              },
              {
                key: "getSeriesTotal",
                value: function () {
                  return this.w.globals.seriesTotals;
                },
              },
              {
                key: "toggleDataPointSelection",
                value: function (t, e) {
                  return this.updateHelpers.toggleDataPointSelection(t, e);
                },
              },
              {
                key: "zoomX",
                value: function (t, e) {
                  this.ctx.toolbar.zoomUpdateOptions(t, e);
                },
              },
              {
                key: "setLocale",
                value: function (t) {
                  this.localization.setCurrentLocaleValues(t);
                },
              },
              {
                key: "dataURI",
                value: function (t) {
                  return new K(this.ctx).dataURI(t);
                },
              },
              {
                key: "exportToCSV",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return new K(this.ctx).exportToCSV(t);
                },
              },
              {
                key: "paper",
                value: function () {
                  return this.w.globals.dom.Paper;
                },
              },
              {
                key: "_parentResizeCallback",
                value: function () {
                  this.w.globals.animationEnded &&
                    this.w.config.chart.redrawOnParentResize &&
                    this._windowResize();
                },
              },
              {
                key: "_windowResize",
                value: function () {
                  var t = this;
                  clearTimeout(this.w.globals.resizeTimer),
                    (this.w.globals.resizeTimer = window.setTimeout(
                      function () {
                        (t.w.globals.resized = !0),
                          (t.w.globals.dataChanged = !1),
                          t.ctx.update();
                      },
                      150
                    ));
                },
              },
              {
                key: "_windowResizeHandler",
                value: function () {
                  var t = this.w.config.chart.redrawOnWindowResize;
                  "function" == typeof t && (t = t()),
                    t && this._windowResize();
                },
              },
            ],
            [
              {
                key: "getChartByID",
                value: function (t) {
                  var e = O.escapeString(t);
                  if (Apex._chartInstances) {
                    var n = Apex._chartInstances.filter(function (t) {
                      return t.id === e;
                    })[0];
                    return n && n.chart;
                  }
                },
              },
              {
                key: "initOnLoad",
                value: function () {
                  for (
                    var e = document.querySelectorAll("[data-apexcharts]"),
                      n = 0;
                    n < e.length;
                    n++
                  )
                    new t(
                      e[n],
                      JSON.parse(e[n].getAttribute("data-options"))
                    ).render();
                },
              },
              {
                key: "exec",
                value: function (t, e) {
                  var n = this.getChartByID(t);
                  if (n) {
                    n.w.globals.isExecCalled = !0;
                    var i = null;
                    if (-1 !== n.publicMethods.indexOf(e)) {
                      for (
                        var r = arguments.length,
                          o = new Array(r > 2 ? r - 2 : 0),
                          a = 2;
                        a < r;
                        a++
                      )
                        o[a - 2] = arguments[a];
                      i = n[e].apply(n, o);
                    }
                    return i;
                  }
                },
              },
              {
                key: "merge",
                value: function (t, e) {
                  return O.extend(t, e);
                },
              },
            ]
          ),
          t
        );
      })();
    })();
  },
  function (t, e, n) {
    "use strict";
    n(548);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".appointment-widget-service-list[data-v-3fe84369]{border:1px solid #d0cece;padding:10px 12px;border-radius:.25rem}.badge[data-v-3fe84369]{text-transform:unset!important}.custom-option[data-v-3fe84369]{display:flex;justify-content:space-between;align-items:center}.icon-wrapper[data-v-3fe84369]{margin-left:auto}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(549);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#doc_birthdate[data-v-6eef988a]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-6eef988a] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-6eef988a] ::placeholder{color:#8c9cad}#customFormDataForm .invalid-feedback-new[data-v-6eef988a]{width:100%;margin-top:.25rem;font-size:100%;color:#f6993f}",
      "",
    ]);
  },
  function (t, e, n) {
    (function (t) {
      !(function (t) {
        var e = 0,
          n = "iframe",
          i = "popup",
          r = "loose",
          o = "html5",
          a = {
            mode: n,
            standard: o,
            popHt: 500,
            popWd: 400,
            popX: 200,
            popY: 200,
            popTitle: "",
            popClose: !1,
            extraCss: "",
            extraHead: "",
            retainAttr: ["id", "class", "style"],
          },
          s = {};
        t.fn.printArea = function (n) {
          t.extend(s, a, n),
            e++,
            t("[id^=printArea_]").remove(),
            (s.id = "printArea_" + e);
          var i = t(this),
            r = l.getPrintWindow();
          l.write(r.doc, i),
            setTimeout(function () {
              l.print(r);
            }, 1e3);
        };
        var l = {
          print: function (e) {
            var n = e.win;
            t(e.doc).ready(function () {
              n.focus(),
                n.print(),
                s.mode == i &&
                  s.popClose &&
                  setTimeout(function () {
                    n.close();
                  }, 2e3);
            });
          },
          write: function (t, e) {
            t.open(),
              t.write(
                l.docType() + "<html>" + l.getHead() + l.getBody(e) + "</html>"
              ),
              t.close();
          },
          docType: function () {
            return s.mode == n
              ? ""
              : s.standard == o
              ? "<!DOCTYPE html>"
              : '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' +
                (s.standard == r ? " Transitional" : "") +
                '//EN" "http://www.w3.org/TR/html4/' +
                (s.standard == r ? "loose" : "strict") +
                '.dtd">';
          },
          getHead: function () {
            var e = "",
              n = "";
            return (
              s.extraHead &&
                s.extraHead.replace(/([^,]+)/g, function (t) {
                  e += t;
                }),
              t(document)
                .find("link")
                .filter(function () {
                  var e = t(this).attr("rel");
                  return (
                    ("undefined" === t.type(e)) == 0 &&
                    "stylesheet" == e.toLowerCase()
                  );
                })
                .filter(function () {
                  var e = t(this).attr("media");
                  return (
                    "undefined" === t.type(e) ||
                    "" == e ||
                    "print" == e.toLowerCase() ||
                    "all" == e.toLowerCase()
                  );
                })
                .each(function () {
                  n +=
                    '<link type="text/css" rel="stylesheet" href="' +
                    t(this).attr("href") +
                    '" >';
                }),
              s.extraCss &&
                s.extraCss.replace(/([^,\s]+)/g, function (t) {
                  n +=
                    '<link type="text/css" rel="stylesheet" href="' + t + '">';
                }),
              "<head><title>" + s.popTitle + "</title>" + e + n + "</head>"
            );
          },
          getBody: function (e) {
            var n = "",
              i = s.retainAttr;
            return (
              e.each(function () {
                for (
                  var e = l.getFormData(t(this)), r = "", o = 0;
                  o < i.length;
                  o++
                ) {
                  var a = t(e).attr(i[o]);
                  a && (r += (r.length > 0 ? " " : "") + i[o] + "='" + a + "'");
                }
                n += "<div " + r + ">" + t(e).html() + "</div>";
              }),
              "<body>" + n + "</body>"
            );
          },
          getFormData: function (e) {
            var n = e.clone(),
              i = t("input,select,textarea", n);
            return (
              t("input,select,textarea", e).each(function (e) {
                var n = t(this).attr("type");
                "undefined" === t.type(n) &&
                  (n = t(this).is("select")
                    ? "select"
                    : t(this).is("textarea")
                    ? "textarea"
                    : "");
                var r = i.eq(e);
                "radio" == n || "checkbox" == n
                  ? r.attr("checked", t(this).is(":checked"))
                  : "text" == n || "" == n
                  ? r.attr("value", t(this).val())
                  : "select" == n
                  ? t(this)
                      .find("option")
                      .each(function (e) {
                        t(this).is(":selected") &&
                          t("option", r).eq(e).attr("selected", !0);
                      })
                  : "textarea" == n && r.text(t(this).val());
              }),
              n
            );
          },
          getPrintWindow: function () {
            switch (s.mode) {
              case n:
                var t = new l.Iframe();
                return { win: t.contentWindow || t, doc: t.doc };
              case i:
                var e = new l.Popup();
                return { win: e, doc: e.doc };
            }
          },
          Iframe: function () {
            var e,
              n = s.id;
            try {
              (e = document.createElement("iframe")),
                document.body.appendChild(e),
                t(e).attr({
                  style:
                    "border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;",
                  id: n,
                  src: "#" + new Date().getTime(),
                }),
                (e.doc = null),
                (e.doc = e.contentDocument
                  ? e.contentDocument
                  : e.contentWindow
                  ? e.contentWindow.document
                  : e.document);
            } catch (t) {
              throw t + ". iframes may not be supported in this browser.";
            }
            if (null == e.doc) throw "Cannot find document.";
            return e;
          },
          Popup: function () {
            var t =
              "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
            (t += ",width=" + s.popWd + ",height=" + s.popHt),
              (t +=
                ",resizable=yes,screenX=" +
                s.popX +
                ",screenY=" +
                s.popY +
                ",personalbar=no,scrollbars=yes");
            var e = window.open("", "_blank", t);
            return (e.doc = e.document), e;
          },
        };
      })(t);
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    n(550);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".cpt[data-v-3802272d]{cursor:pointer}.custom-control[data-v-3802272d]{padding-left:3.75rem!important}@media (max-width:767px){.text-heading[data-v-3802272d]{display:none}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(551);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-4998f8d6]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-4998f8d6]::-webkit-inner-spin-button{display:none}[type=date][data-v-4998f8d6]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-4998f8d6]{display:block}#doc_birthdate[data-v-4998f8d6]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-4998f8d6] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-4998f8d6] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(552);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-f4a3bf56]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-f4a3bf56]::-webkit-inner-spin-button{display:none}[type=date][data-v-f4a3bf56]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-f4a3bf56]{display:block}#doc_birthdate[data-v-f4a3bf56]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-f4a3bf56] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-f4a3bf56] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(553);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-463b6fc6]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-463b6fc6]::-webkit-inner-spin-button{display:none}[type=date][data-v-463b6fc6]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-463b6fc6]{display:block}#doc_birthdate[data-v-463b6fc6]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-463b6fc6] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-463b6fc6] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".vue__time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.vue__time-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue__time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.vue__time-picker input.has-custom-icon{padding-left:1.8em}.vue__time-picker input.display-time.invalid:not(.skip-error-style){border-color:#c03;outline-color:#c03}.vue__time-picker input.display-time.disabled,.vue__time-picker input.display-time:disabled{color:#d2d2d2}.vue__time-picker .controls{position:absolute;top:0;bottom:0;right:0;z-index:3;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;pointer-events:none}.vue__time-picker .controls,.vue__time-picker .controls>*{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.vue__time-picker .controls>*{cursor:pointer;width:auto;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .35em;color:#d2d2d2;line-height:100%;font-style:normal;pointer-events:auto;-webkit-transition:color .2s,opacity .2s;transition:color .2s,opacity .2s}.vue__time-picker .controls>:hover{color:#797979}.vue__time-picker .controls>:active,.vue__time-picker .controls>:focus{outline:0}.vue__time-picker .controls .char{font-size:1.1em;line-height:100%;-webkit-margin-before:-.15em}.vue__time-picker .custom-icon{z-index:2;position:absolute;left:0;top:0;bottom:0;width:1.8em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}.vue__time-picker .controls img,.vue__time-picker .controls svg,.vue__time-picker .custom-icon img,.vue__time-picker .custom-icon svg{display:inline-block;vertical-align:middle;margin:0;border:0;outline:0;max-width:1em;height:auto}.vue__time-picker .time-picker-overlay{z-index:4;position:fixed;top:0;left:0;right:0;bottom:0}.vue__time-picker-dropdown,.vue__time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.15);box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.vue__time-picker-dropdown{position:fixed;z-index:100}.vue__time-picker-dropdown.drop-up,.vue__time-picker .dropdown.drop-up{top:auto;bottom:calc(2.2em + 1px)}.vue__time-picker-dropdown .select-list,.vue__time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue__time-picker-dropdown .select-list:active,.vue__time-picker-dropdown .select-list:focus,.vue__time-picker .dropdown .select-list:active,.vue__time-picker .dropdown .select-list:focus{outline:0}.vue__time-picker-dropdown ul,.vue__time-picker .dropdown ul{padding:0;margin:0;list-style:none;outline:0;-webkit-box-flex:1;-ms-flex:1 1 0.00001px;flex:1 1 0.00001px;overflow-x:hidden;overflow-y:auto}.vue__time-picker-dropdown ul.apms,.vue__time-picker-dropdown ul.minutes,.vue__time-picker-dropdown ul.seconds,.vue__time-picker .dropdown ul.apms,.vue__time-picker .dropdown ul.minutes,.vue__time-picker .dropdown ul.seconds{border-left:1px solid #fff}.vue__time-picker-dropdown ul li,.vue__time-picker .dropdown ul li{list-style:none;text-align:center;padding:.3em 0;color:#161616}.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):hover,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.vue__time-picker-dropdown ul li:not([disabled]).active,.vue__time-picker-dropdown ul li:not([disabled]).active:focus,.vue__time-picker-dropdown ul li:not([disabled]).active:hover,.vue__time-picker .dropdown ul li:not([disabled]).active,.vue__time-picker .dropdown ul li:not([disabled]).active:focus,.vue__time-picker .dropdown ul li:not([disabled]).active:hover{background:#41b883;color:#fff}.vue__time-picker-dropdown ul li[disabled],.vue__time-picker-dropdown ul li[disabled]:hover,.vue__time-picker .dropdown ul li[disabled],.vue__time-picker .dropdown ul li[disabled]:hover{background:transparent;opacity:.3;cursor:not-allowed}.vue__time-picker-dropdown .hint,.vue__time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(555);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "label[data-v-3be2841a]{display:unset!important}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(556);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".kc-telemed-service{position:absolute;bottom:0;left:30px;background:var(--primary);color:var(--white);width:18px;height:18px;line-height:18px;display:inline-block;border-radius:50px;text-align:center;font-size:10px}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(557);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#verifymodal header{min-height:unset}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(558);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([t.i, "canvas{width:100%;height:100%}", ""]);
  },
  function (t, e, n) {
    "use strict";
    n(559);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-5f7bbb85]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-5f7bbb85]::-webkit-inner-spin-button{display:none}[type=date][data-v-5f7bbb85]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-5f7bbb85]{display:block}#doc_birthdate[data-v-5f7bbb85]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-5f7bbb85] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-5f7bbb85] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(560);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#doctor_profile [type=date]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}#doctor_profile [type=date]::-webkit-inner-spin-button{display:none}#doctor_profile [type=date]::-webkit-calendar-picker-indicator{opacity:0}#doctor_profile label{display:block}#doc_birthdate{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate ::-moz-placeholder{color:#8c9cad}#doc_birthdate ::placeholder{color:#8c9cad}#doctor_profile .nav.nav-tabs{margin-bottom:1rem}#doctor_profile .nav-tabs .nav-link.active{color:var(--primary)}#doctor_profile .nav-tabs .nav-link{font-size:1rem;font-weight:400;background-color:#fff;border-bottom-color:#dee2e6}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(561);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#printPatientData .vgt-table thead th{vertical-align:middle}@media (max-width:576px){#printPatientData .vgt-compact td:before{width:42%;padding-left:0}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(562);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-41f4af7d]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-41f4af7d]::-webkit-inner-spin-button{display:none}[type=date][data-v-41f4af7d]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-41f4af7d]{display:block}#doc_birthdate[data-v-41f4af7d]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-41f4af7d] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-41f4af7d] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(563);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date]::-webkit-inner-spin-button{display:none}[type=date]::-webkit-calendar-picker-indicator{opacity:0}label{display:block}#doc_birthdate{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate ::-moz-placeholder{color:#8c9cad}#doc_birthdate ::placeholder{color:#8c9cad}#patient_profile .nav.nav-tabs{margin-bottom:1rem}#patient_profile .nav-tabs .nav-link.active{color:var(--primary)}#patient_profile .nav-tabs .nav-link{font-size:1rem;font-weight:400;background-color:#fff;border-bottom-color:#dee2e6}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(564);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".kivicare-pagination .page-item.active button{border-color:var(--primary)!important;background-color:var(--primary)!important}.kivicare-pagination .page-link{border-color:var(--primary)!important}.font-size-10{font-size:10px!important}.kc-row-gap{row-gap:1em}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(565);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "li[data-v-5e30814e]{border-radius:4px;cursor:pointer}.active-li[data-v-5e30814e]{background-color:var(--primary)!important}.active-li i[data-v-5e30814e],.active-li span[data-v-5e30814e]{color:#fff!important}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        function i(t) {
          return (i =
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
        function r(t, e, n) {
          return (
            e in t
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
        function o() {
          return (o =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        function a(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
              )),
              i.forEach(function (e) {
                r(t, e, n[e]);
              });
          }
          return t;
        }
        function s(t, e) {
          if (null == t) return {};
          var n,
            i,
            r = (function (t, e) {
              if (null == t) return {};
              var n,
                i,
                r = {},
                o = Object.keys(t);
              for (i = 0; i < o.length; i++)
                (n = o[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (i = 0; i < o.length; i++)
              (n = o[i]),
                e.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (r[n] = t[n]));
          }
          return r;
        }
        function l(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                  n[e] = t[e];
                return n;
              }
            })(t) ||
            (function (t) {
              if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
              )
                return Array.from(t);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        function c(t) {
          if ("undefined" != typeof window && window.navigator)
            return !!navigator.userAgent.match(t);
        }
        n.d(e, "MultiDrag", function () {
          return ve;
        }),
          n.d(e, "Sortable", function () {
            return Wt;
          }),
          n.d(e, "Swap", function () {
            return se;
          });
        var d = c(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
          u = c(/Edge/i),
          p = c(/firefox/i),
          h = c(/safari/i) && !c(/chrome/i) && !c(/android/i),
          f = c(/iP(ad|od|hone)/i),
          b = c(/chrome/i) && c(/android/i),
          m = { capture: !1, passive: !1 };
        function g(t, e, n) {
          t.addEventListener(e, n, !d && m);
        }
        function v(t, e, n) {
          t.removeEventListener(e, n, !d && m);
        }
        function _(t, e) {
          if (e) {
            if ((">" === e[0] && (e = e.substring(1)), t))
              try {
                if (t.matches) return t.matches(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
              } catch (t) {
                return !1;
              }
            return !1;
          }
        }
        function y(t) {
          return t.host && t !== document && t.host.nodeType
            ? t.host
            : t.parentNode;
        }
        function M(t, e, n, i) {
          if (t) {
            n = n || document;
            do {
              if (
                (null != e &&
                  (">" === e[0] ? t.parentNode === n && _(t, e) : _(t, e))) ||
                (i && t === n)
              )
                return t;
              if (t === n) break;
            } while ((t = y(t)));
          }
          return null;
        }
        var O,
          w = /\s+/g;
        function A(t, e, n) {
          if (t && e)
            if (t.classList) t.classList[n ? "add" : "remove"](e);
            else {
              var i = (" " + t.className + " ")
                .replace(w, " ")
                .replace(" " + e + " ", " ");
              t.className = (i + (n ? " " + e : "")).replace(w, " ");
            }
        }
        function x(t, e, n) {
          var i = t && t.style;
          if (i) {
            if (void 0 === n)
              return (
                document.defaultView && document.defaultView.getComputedStyle
                  ? (n = document.defaultView.getComputedStyle(t, ""))
                  : t.currentStyle && (n = t.currentStyle),
                void 0 === e ? n : n[e]
              );
            e in i || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e),
              (i[e] = n + ("string" == typeof n ? "" : "px"));
          }
        }
        function z(t, e) {
          var n = "";
          if ("string" == typeof t) n = t;
          else
            do {
              var i = x(t, "transform");
              i && "none" !== i && (n = i + " " + n);
            } while (!e && (t = t.parentNode));
          var r =
            window.DOMMatrix ||
            window.WebKitCSSMatrix ||
            window.CSSMatrix ||
            window.MSCSSMatrix;
          return r && new r(n);
        }
        function C(t, e, n) {
          if (t) {
            var i = t.getElementsByTagName(e),
              r = 0,
              o = i.length;
            if (n) for (; r < o; r++) n(i[r], r);
            return i;
          }
          return [];
        }
        function k() {
          return document.scrollingElement || document.documentElement;
        }
        function S(t, e, n, i, r) {
          if (t.getBoundingClientRect || t === window) {
            var o, a, s, l, c, u, p;
            if (
              (t !== window && t !== k()
                ? ((a = (o = t.getBoundingClientRect()).top),
                  (s = o.left),
                  (l = o.bottom),
                  (c = o.right),
                  (u = o.height),
                  (p = o.width))
                : ((a = 0),
                  (s = 0),
                  (l = window.innerHeight),
                  (c = window.innerWidth),
                  (u = window.innerHeight),
                  (p = window.innerWidth)),
              (e || n) && t !== window && ((r = r || t.parentNode), !d))
            )
              do {
                if (
                  r &&
                  r.getBoundingClientRect &&
                  ("none" !== x(r, "transform") ||
                    (n && "static" !== x(r, "position")))
                ) {
                  var h = r.getBoundingClientRect();
                  (a -= h.top + parseInt(x(r, "border-top-width"))),
                    (s -= h.left + parseInt(x(r, "border-left-width"))),
                    (l = a + o.height),
                    (c = s + o.width);
                  break;
                }
              } while ((r = r.parentNode));
            if (i && t !== window) {
              var f = z(r || t),
                b = f && f.a,
                m = f && f.d;
              f && ((l = (a /= m) + (u /= m)), (c = (s /= b) + (p /= b)));
            }
            return {
              top: a,
              left: s,
              bottom: l,
              right: c,
              width: p,
              height: u,
            };
          }
        }
        function T(t, e, n) {
          for (var i = j(t, !0), r = S(t)[e]; i; ) {
            var o = S(i)[n];
            if (!("top" === n || "left" === n ? r >= o : r <= o)) return i;
            if (i === k()) break;
            i = j(i, !1);
          }
          return !1;
        }
        function D(t, e, n) {
          for (var i = 0, r = 0, o = t.children; r < o.length; ) {
            if (
              "none" !== o[r].style.display &&
              o[r] !== Wt.ghost &&
              o[r] !== Wt.dragged &&
              M(o[r], n.draggable, t, !1)
            ) {
              if (i === e) return o[r];
              i++;
            }
            r++;
          }
          return null;
        }
        function L(t, e) {
          for (
            var n = t.lastElementChild;
            n &&
            (n === Wt.ghost || "none" === x(n, "display") || (e && !_(n, e)));

          )
            n = n.previousElementSibling;
          return n || null;
        }
        function q(t, e) {
          var n = 0;
          if (!t || !t.parentNode) return -1;
          for (; (t = t.previousElementSibling); )
            "TEMPLATE" === t.nodeName.toUpperCase() ||
              t === Wt.clone ||
              (e && !_(t, e)) ||
              n++;
          return n;
        }
        function E(t) {
          var e = 0,
            n = 0,
            i = k();
          if (t)
            do {
              var r = z(t),
                o = r.a,
                a = r.d;
              (e += t.scrollLeft * o), (n += t.scrollTop * a);
            } while (t !== i && (t = t.parentNode));
          return [e, n];
        }
        function j(t, e) {
          if (!t || !t.getBoundingClientRect) return k();
          var n = t,
            i = !1;
          do {
            if (
              n.clientWidth < n.scrollWidth ||
              n.clientHeight < n.scrollHeight
            ) {
              var r = x(n);
              if (
                (n.clientWidth < n.scrollWidth &&
                  ("auto" == r.overflowX || "scroll" == r.overflowX)) ||
                (n.clientHeight < n.scrollHeight &&
                  ("auto" == r.overflowY || "scroll" == r.overflowY))
              ) {
                if (!n.getBoundingClientRect || n === document.body) return k();
                if (i || e) return n;
                i = !0;
              }
            }
          } while ((n = n.parentNode));
          return k();
        }
        function P(t, e) {
          return (
            Math.round(t.top) === Math.round(e.top) &&
            Math.round(t.left) === Math.round(e.left) &&
            Math.round(t.height) === Math.round(e.height) &&
            Math.round(t.width) === Math.round(e.width)
          );
        }
        function R(t, e) {
          return function () {
            if (!O) {
              var n = arguments,
                i = this;
              1 === n.length ? t.call(i, n[0]) : t.apply(i, n),
                (O = setTimeout(function () {
                  O = void 0;
                }, e));
            }
          };
        }
        function I(t, e, n) {
          (t.scrollLeft += e), (t.scrollTop += n);
        }
        function W(e) {
          var n = window.Polymer,
            i = t || window.Zepto;
          return n && n.dom
            ? n.dom(e).cloneNode(!0)
            : i
            ? i(e).clone(!0)[0]
            : e.cloneNode(!0);
        }
        function N(t, e) {
          x(t, "position", "absolute"),
            x(t, "top", e.top),
            x(t, "left", e.left),
            x(t, "width", e.width),
            x(t, "height", e.height);
        }
        function B(t) {
          x(t, "position", ""),
            x(t, "top", ""),
            x(t, "left", ""),
            x(t, "width", ""),
            x(t, "height", "");
        }
        var F = "Sortable" + new Date().getTime(),
          $ = [],
          H = { initializeByDefault: !0 },
          Y = {
            mount: function (t) {
              for (var e in H)
                H.hasOwnProperty(e) && !(e in t) && (t[e] = H[e]);
              $.push(t);
            },
            pluginEvent: function (t, e, n) {
              var i = this;
              (this.eventCanceled = !1),
                (n.cancel = function () {
                  i.eventCanceled = !0;
                });
              var r = t + "Global";
              $.forEach(function (i) {
                e[i.pluginName] &&
                  (e[i.pluginName][r] &&
                    e[i.pluginName][r](a({ sortable: e }, n)),
                  e.options[i.pluginName] &&
                    e[i.pluginName][t] &&
                    e[i.pluginName][t](a({ sortable: e }, n)));
              });
            },
            initializePlugins: function (t, e, n, i) {
              for (var r in ($.forEach(function (i) {
                var r = i.pluginName;
                if (t.options[r] || i.initializeByDefault) {
                  var a = new i(t, e, t.options);
                  (a.sortable = t),
                    (a.options = t.options),
                    (t[r] = a),
                    o(n, a.defaults);
                }
              }),
              t.options))
                if (t.options.hasOwnProperty(r)) {
                  var a = this.modifyOption(t, r, t.options[r]);
                  void 0 !== a && (t.options[r] = a);
                }
            },
            getEventProperties: function (t, e) {
              var n = {};
              return (
                $.forEach(function (i) {
                  "function" == typeof i.eventProperties &&
                    o(n, i.eventProperties.call(e[i.pluginName], t));
                }),
                n
              );
            },
            modifyOption: function (t, e, n) {
              var i;
              return (
                $.forEach(function (r) {
                  t[r.pluginName] &&
                    r.optionListeners &&
                    "function" == typeof r.optionListeners[e] &&
                    (i = r.optionListeners[e].call(t[r.pluginName], n));
                }),
                i
              );
            },
          };
        function U(t) {
          var e = t.sortable,
            n = t.rootEl,
            i = t.name,
            r = t.targetEl,
            o = t.cloneEl,
            s = t.toEl,
            l = t.fromEl,
            c = t.oldIndex,
            p = t.newIndex,
            h = t.oldDraggableIndex,
            f = t.newDraggableIndex,
            b = t.originalEvent,
            m = t.putSortable,
            g = t.extraEventProperties;
          if ((e = e || (n && n[F]))) {
            var v,
              _ = e.options,
              y = "on" + i.charAt(0).toUpperCase() + i.substr(1);
            !window.CustomEvent || d || u
              ? (v = document.createEvent("Event")).initEvent(i, !0, !0)
              : (v = new CustomEvent(i, { bubbles: !0, cancelable: !0 })),
              (v.to = s || n),
              (v.from = l || n),
              (v.item = r || n),
              (v.clone = o),
              (v.oldIndex = c),
              (v.newIndex = p),
              (v.oldDraggableIndex = h),
              (v.newDraggableIndex = f),
              (v.originalEvent = b),
              (v.pullMode = m ? m.lastPutMode : void 0);
            var M = a({}, g, Y.getEventProperties(i, e));
            for (var O in M) v[O] = M[O];
            n && n.dispatchEvent(v), _[y] && _[y].call(e, v);
          }
        }
        var X = function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = n.evt,
            r = s(n, ["evt"]);
          Y.pluginEvent.bind(Wt)(
            t,
            e,
            a(
              {
                dragEl: G,
                parentEl: K,
                ghostEl: Z,
                rootEl: J,
                nextEl: Q,
                lastDownEl: tt,
                cloneEl: et,
                cloneHidden: nt,
                dragStarted: bt,
                putSortable: lt,
                activeSortable: Wt.active,
                originalEvent: i,
                oldIndex: it,
                oldDraggableIndex: ot,
                newIndex: rt,
                newDraggableIndex: at,
                hideGhostForTarget: jt,
                unhideGhostForTarget: Pt,
                cloneNowHidden: function () {
                  nt = !0;
                },
                cloneNowShown: function () {
                  nt = !1;
                },
                dispatchSortableEvent: function (t) {
                  V({ sortable: e, name: t, originalEvent: i });
                },
              },
              r
            )
          );
        };
        function V(t) {
          U(
            a(
              {
                putSortable: lt,
                cloneEl: et,
                targetEl: G,
                rootEl: J,
                oldIndex: it,
                oldDraggableIndex: ot,
                newIndex: rt,
                newDraggableIndex: at,
              },
              t
            )
          );
        }
        var G,
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
          lt,
          ct,
          dt,
          ut,
          pt,
          ht,
          ft,
          bt,
          mt,
          gt,
          vt,
          _t,
          yt = !1,
          Mt = !1,
          Ot = [],
          wt = !1,
          At = !1,
          xt = [],
          zt = !1,
          Ct = [],
          kt = "undefined" != typeof document,
          St = f,
          Tt = u || d ? "cssFloat" : "float",
          Dt = kt && !b && !f && "draggable" in document.createElement("div"),
          Lt = (function () {
            if (kt) {
              if (d) return !1;
              var t = document.createElement("x");
              return (
                (t.style.cssText = "pointer-events:auto"),
                "auto" === t.style.pointerEvents
              );
            }
          })(),
          qt = function (t, e) {
            var n = x(t),
              i =
                parseInt(n.width) -
                parseInt(n.paddingLeft) -
                parseInt(n.paddingRight) -
                parseInt(n.borderLeftWidth) -
                parseInt(n.borderRightWidth),
              r = D(t, 0, e),
              o = D(t, 1, e),
              a = r && x(r),
              s = o && x(o),
              l =
                a &&
                parseInt(a.marginLeft) + parseInt(a.marginRight) + S(r).width,
              c =
                s &&
                parseInt(s.marginLeft) + parseInt(s.marginRight) + S(o).width;
            if ("flex" === n.display)
              return "column" === n.flexDirection ||
                "column-reverse" === n.flexDirection
                ? "vertical"
                : "horizontal";
            if ("grid" === n.display)
              return n.gridTemplateColumns.split(" ").length <= 1
                ? "vertical"
                : "horizontal";
            if (r && a.float && "none" !== a.float) {
              var d = "left" === a.float ? "left" : "right";
              return !o || ("both" !== s.clear && s.clear !== d)
                ? "horizontal"
                : "vertical";
            }
            return r &&
              ("block" === a.display ||
                "flex" === a.display ||
                "table" === a.display ||
                "grid" === a.display ||
                (l >= i && "none" === n[Tt]) ||
                (o && "none" === n[Tt] && l + c > i))
              ? "vertical"
              : "horizontal";
          },
          Et = function (t) {
            function e(t, n) {
              return function (i, r, o, a) {
                var s =
                  i.options.group.name &&
                  r.options.group.name &&
                  i.options.group.name === r.options.group.name;
                if (null == t && (n || s)) return !0;
                if (null == t || !1 === t) return !1;
                if (n && "clone" === t) return t;
                if ("function" == typeof t)
                  return e(t(i, r, o, a), n)(i, r, o, a);
                var l = (n ? i : r).options.group.name;
                return (
                  !0 === t ||
                  ("string" == typeof t && t === l) ||
                  (t.join && t.indexOf(l) > -1)
                );
              };
            }
            var n = {},
              r = t.group;
            (r && "object" == i(r)) || (r = { name: r }),
              (n.name = r.name),
              (n.checkPull = e(r.pull, !0)),
              (n.checkPut = e(r.put)),
              (n.revertClone = r.revertClone),
              (t.group = n);
          },
          jt = function () {
            !Lt && Z && x(Z, "display", "none");
          },
          Pt = function () {
            !Lt && Z && x(Z, "display", "");
          };
        kt &&
          document.addEventListener(
            "click",
            function (t) {
              if (Mt)
                return (
                  t.preventDefault(),
                  t.stopPropagation && t.stopPropagation(),
                  t.stopImmediatePropagation && t.stopImmediatePropagation(),
                  (Mt = !1),
                  !1
                );
            },
            !0
          );
        var Rt = function (t) {
            if (G) {
              t = t.touches ? t.touches[0] : t;
              var e =
                ((r = t.clientX),
                (o = t.clientY),
                Ot.some(function (t) {
                  if (!L(t)) {
                    var e = S(t),
                      n = t[F].options.emptyInsertThreshold,
                      i = r >= e.left - n && r <= e.right + n,
                      s = o >= e.top - n && o <= e.bottom + n;
                    return n && i && s ? (a = t) : void 0;
                  }
                }),
                a);
              if (e) {
                var n = {};
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                (n.target = n.rootEl = e),
                  (n.preventDefault = void 0),
                  (n.stopPropagation = void 0),
                  e[F]._onDragOver(n);
              }
            }
            var r, o, a;
          },
          It = function (t) {
            G && G.parentNode[F]._isOutsideThisEl(t.target);
          };
        function Wt(t, e) {
          if (!t || !t.nodeType || 1 !== t.nodeType)
            throw "Sortable: `el` must be an HTMLElement, not ".concat(
              {}.toString.call(t)
            );
          (this.el = t), (this.options = e = o({}, e)), (t[F] = this);
          var n = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function () {
              return qt(t, this.options);
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function (t, e) {
              t.setData("Text", e.textContent);
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold:
              (Number.parseInt ? Number : window).parseInt(
                window.devicePixelRatio,
                10
              ) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: { x: 0, y: 0 },
            supportPointer:
              !1 !== Wt.supportPointer && "PointerEvent" in window,
            emptyInsertThreshold: 5,
          };
          for (var i in (Y.initializePlugins(this, t, n), n))
            !(i in e) && (e[i] = n[i]);
          for (var r in (Et(e), this))
            "_" === r.charAt(0) &&
              "function" == typeof this[r] &&
              (this[r] = this[r].bind(this));
          (this.nativeDraggable = !e.forceFallback && Dt),
            this.nativeDraggable && (this.options.touchStartThreshold = 1),
            e.supportPointer
              ? g(t, "pointerdown", this._onTapStart)
              : (g(t, "mousedown", this._onTapStart),
                g(t, "touchstart", this._onTapStart)),
            this.nativeDraggable &&
              (g(t, "dragover", this), g(t, "dragenter", this)),
            Ot.push(this.el),
            e.store && e.store.get && this.sort(e.store.get(this) || []),
            o(
              this,
              (function () {
                var t,
                  e = [];
                return {
                  captureAnimationState: function () {
                    (e = []),
                      this.options.animation &&
                        [].slice.call(this.el.children).forEach(function (t) {
                          if ("none" !== x(t, "display") && t !== Wt.ghost) {
                            e.push({ target: t, rect: S(t) });
                            var n = a({}, e[e.length - 1].rect);
                            if (t.thisAnimationDuration) {
                              var i = z(t, !0);
                              i && ((n.top -= i.f), (n.left -= i.e));
                            }
                            t.fromRect = n;
                          }
                        });
                  },
                  addAnimationState: function (t) {
                    e.push(t);
                  },
                  removeAnimationState: function (t) {
                    e.splice(
                      (function (t, e) {
                        for (var n in t)
                          if (t.hasOwnProperty(n))
                            for (var i in e)
                              if (e.hasOwnProperty(i) && e[i] === t[n][i])
                                return Number(n);
                        return -1;
                      })(e, { target: t }),
                      1
                    );
                  },
                  animateAll: function (n) {
                    var i = this;
                    if (!this.options.animation)
                      return (
                        clearTimeout(t), void ("function" == typeof n && n())
                      );
                    var r = !1,
                      o = 0;
                    e.forEach(function (t) {
                      var e = 0,
                        n = t.target,
                        a = n.fromRect,
                        s = S(n),
                        l = n.prevFromRect,
                        c = n.prevToRect,
                        d = t.rect,
                        u = z(n, !0);
                      u && ((s.top -= u.f), (s.left -= u.e)),
                        (n.toRect = s),
                        n.thisAnimationDuration &&
                          P(l, s) &&
                          !P(a, s) &&
                          (d.top - s.top) / (d.left - s.left) ==
                            (a.top - s.top) / (a.left - s.left) &&
                          (e = (function (t, e, n, i) {
                            return (
                              (Math.sqrt(
                                Math.pow(e.top - t.top, 2) +
                                  Math.pow(e.left - t.left, 2)
                              ) /
                                Math.sqrt(
                                  Math.pow(e.top - n.top, 2) +
                                    Math.pow(e.left - n.left, 2)
                                )) *
                              i.animation
                            );
                          })(d, l, c, i.options)),
                        P(s, a) ||
                          ((n.prevFromRect = a),
                          (n.prevToRect = s),
                          e || (e = i.options.animation),
                          i.animate(n, d, s, e)),
                        e &&
                          ((r = !0),
                          (o = Math.max(o, e)),
                          clearTimeout(n.animationResetTimer),
                          (n.animationResetTimer = setTimeout(function () {
                            (n.animationTime = 0),
                              (n.prevFromRect = null),
                              (n.fromRect = null),
                              (n.prevToRect = null),
                              (n.thisAnimationDuration = null);
                          }, e)),
                          (n.thisAnimationDuration = e));
                    }),
                      clearTimeout(t),
                      r
                        ? (t = setTimeout(function () {
                            "function" == typeof n && n();
                          }, o))
                        : "function" == typeof n && n(),
                      (e = []);
                  },
                  animate: function (t, e, n, i) {
                    if (i) {
                      x(t, "transition", ""), x(t, "transform", "");
                      var r = z(this.el),
                        o = r && r.a,
                        a = r && r.d,
                        s = (e.left - n.left) / (o || 1),
                        l = (e.top - n.top) / (a || 1);
                      (t.animatingX = !!s),
                        (t.animatingY = !!l),
                        x(
                          t,
                          "transform",
                          "translate3d(" + s + "px," + l + "px,0)"
                        ),
                        (function (t) {
                          t.offsetWidth;
                        })(t),
                        x(
                          t,
                          "transition",
                          "transform " +
                            i +
                            "ms" +
                            (this.options.easing
                              ? " " + this.options.easing
                              : "")
                        ),
                        x(t, "transform", "translate3d(0,0,0)"),
                        "number" == typeof t.animated &&
                          clearTimeout(t.animated),
                        (t.animated = setTimeout(function () {
                          x(t, "transition", ""),
                            x(t, "transform", ""),
                            (t.animated = !1),
                            (t.animatingX = !1),
                            (t.animatingY = !1);
                        }, i));
                    }
                  },
                };
              })()
            );
        }
        function Nt(t, e, n, i, r, o, a, s) {
          var l,
            c,
            p = t[F],
            h = p.options.onMove;
          return (
            !window.CustomEvent || d || u
              ? (l = document.createEvent("Event")).initEvent("move", !0, !0)
              : (l = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
            (l.to = e),
            (l.from = t),
            (l.dragged = n),
            (l.draggedRect = i),
            (l.related = r || e),
            (l.relatedRect = o || S(e)),
            (l.willInsertAfter = s),
            (l.originalEvent = a),
            t.dispatchEvent(l),
            h && (c = h.call(p, l, a)),
            c
          );
        }
        function Bt(t) {
          t.draggable = !1;
        }
        function Ft() {
          zt = !1;
        }
        function $t(t) {
          for (
            var e = t.tagName + t.className + t.src + t.href + t.textContent,
              n = e.length,
              i = 0;
            n--;

          )
            i += e.charCodeAt(n);
          return i.toString(36);
        }
        function Ht(t) {
          return setTimeout(t, 0);
        }
        function Yt(t) {
          return clearTimeout(t);
        }
        (Wt.prototype = {
          constructor: Wt,
          _isOutsideThisEl: function (t) {
            this.el.contains(t) || t === this.el || (mt = null);
          },
          _getDirection: function (t, e) {
            return "function" == typeof this.options.direction
              ? this.options.direction.call(this, t, e, G)
              : this.options.direction;
          },
          _onTapStart: function (t) {
            if (t.cancelable) {
              var e = this,
                n = this.el,
                i = this.options,
                r = i.preventOnFilter,
                o = t.type,
                a =
                  (t.touches && t.touches[0]) ||
                  (t.pointerType && "touch" === t.pointerType && t),
                s = (a || t).target,
                l =
                  (t.target.shadowRoot &&
                    ((t.path && t.path[0]) ||
                      (t.composedPath && t.composedPath()[0]))) ||
                  s,
                c = i.filter;
              if (
                ((function (t) {
                  Ct.length = 0;
                  for (
                    var e = t.getElementsByTagName("input"), n = e.length;
                    n--;

                  ) {
                    var i = e[n];
                    i.checked && Ct.push(i);
                  }
                })(n),
                !G &&
                  !(
                    (/mousedown|pointerdown/.test(o) && 0 !== t.button) ||
                    i.disabled ||
                    l.isContentEditable ||
                    ((s = M(s, i.draggable, n, !1)) && s.animated) ||
                    tt === s
                  ))
              ) {
                if (
                  ((it = q(s)),
                  (ot = q(s, i.draggable)),
                  "function" == typeof c)
                ) {
                  if (c.call(this, t, s, this))
                    return (
                      V({
                        sortable: e,
                        rootEl: l,
                        name: "filter",
                        targetEl: s,
                        toEl: n,
                        fromEl: n,
                      }),
                      X("filter", e, { evt: t }),
                      void (r && t.cancelable && t.preventDefault())
                    );
                } else if (
                  c &&
                  (c = c.split(",").some(function (i) {
                    if ((i = M(l, i.trim(), n, !1)))
                      return (
                        V({
                          sortable: e,
                          rootEl: i,
                          name: "filter",
                          targetEl: s,
                          fromEl: n,
                          toEl: n,
                        }),
                        X("filter", e, { evt: t }),
                        !0
                      );
                  }))
                )
                  return void (r && t.cancelable && t.preventDefault());
                (i.handle && !M(l, i.handle, n, !1)) ||
                  this._prepareDragStart(t, a, s);
              }
            }
          },
          _prepareDragStart: function (t, e, n) {
            var i,
              r = this,
              o = r.el,
              a = r.options,
              s = o.ownerDocument;
            if (n && !G && n.parentNode === o) {
              var l = S(n);
              if (
                ((J = o),
                (K = (G = n).parentNode),
                (Q = G.nextSibling),
                (tt = n),
                (st = a.group),
                (Wt.dragged = G),
                (ct = {
                  target: G,
                  clientX: (e || t).clientX,
                  clientY: (e || t).clientY,
                }),
                (ht = ct.clientX - l.left),
                (ft = ct.clientY - l.top),
                (this._lastX = (e || t).clientX),
                (this._lastY = (e || t).clientY),
                (G.style["will-change"] = "all"),
                (i = function () {
                  X("delayEnded", r, { evt: t }),
                    Wt.eventCanceled
                      ? r._onDrop()
                      : (r._disableDelayedDragEvents(),
                        !p && r.nativeDraggable && (G.draggable = !0),
                        r._triggerDragStart(t, e),
                        V({ sortable: r, name: "choose", originalEvent: t }),
                        A(G, a.chosenClass, !0));
                }),
                a.ignore.split(",").forEach(function (t) {
                  C(G, t.trim(), Bt);
                }),
                g(s, "dragover", Rt),
                g(s, "mousemove", Rt),
                g(s, "touchmove", Rt),
                g(s, "mouseup", r._onDrop),
                g(s, "touchend", r._onDrop),
                g(s, "touchcancel", r._onDrop),
                p &&
                  this.nativeDraggable &&
                  ((this.options.touchStartThreshold = 4), (G.draggable = !0)),
                X("delayStart", this, { evt: t }),
                !a.delay ||
                  (a.delayOnTouchOnly && !e) ||
                  (this.nativeDraggable && (u || d)))
              )
                i();
              else {
                if (Wt.eventCanceled) return void this._onDrop();
                g(s, "mouseup", r._disableDelayedDrag),
                  g(s, "touchend", r._disableDelayedDrag),
                  g(s, "touchcancel", r._disableDelayedDrag),
                  g(s, "mousemove", r._delayedDragTouchMoveHandler),
                  g(s, "touchmove", r._delayedDragTouchMoveHandler),
                  a.supportPointer &&
                    g(s, "pointermove", r._delayedDragTouchMoveHandler),
                  (r._dragStartTimer = setTimeout(i, a.delay));
              }
            }
          },
          _delayedDragTouchMoveHandler: function (t) {
            var e = t.touches ? t.touches[0] : t;
            Math.max(
              Math.abs(e.clientX - this._lastX),
              Math.abs(e.clientY - this._lastY)
            ) >=
              Math.floor(
                this.options.touchStartThreshold /
                  ((this.nativeDraggable && window.devicePixelRatio) || 1)
              ) && this._disableDelayedDrag();
          },
          _disableDelayedDrag: function () {
            G && Bt(G),
              clearTimeout(this._dragStartTimer),
              this._disableDelayedDragEvents();
          },
          _disableDelayedDragEvents: function () {
            var t = this.el.ownerDocument;
            v(t, "mouseup", this._disableDelayedDrag),
              v(t, "touchend", this._disableDelayedDrag),
              v(t, "touchcancel", this._disableDelayedDrag),
              v(t, "mousemove", this._delayedDragTouchMoveHandler),
              v(t, "touchmove", this._delayedDragTouchMoveHandler),
              v(t, "pointermove", this._delayedDragTouchMoveHandler);
          },
          _triggerDragStart: function (t, e) {
            (e = e || ("touch" == t.pointerType && t)),
              !this.nativeDraggable || e
                ? this.options.supportPointer
                  ? g(document, "pointermove", this._onTouchMove)
                  : g(
                      document,
                      e ? "touchmove" : "mousemove",
                      this._onTouchMove
                    )
                : (g(G, "dragend", this), g(J, "dragstart", this._onDragStart));
            try {
              document.selection
                ? Ht(function () {
                    document.selection.empty();
                  })
                : window.getSelection().removeAllRanges();
            } catch (t) {}
          },
          _dragStarted: function (t, e) {
            if (((yt = !1), J && G)) {
              X("dragStarted", this, { evt: e }),
                this.nativeDraggable && g(document, "dragover", It);
              var n = this.options;
              !t && A(G, n.dragClass, !1),
                A(G, n.ghostClass, !0),
                (Wt.active = this),
                t && this._appendGhost(),
                V({ sortable: this, name: "start", originalEvent: e });
            } else this._nulling();
          },
          _emulateDragOver: function () {
            if (dt) {
              (this._lastX = dt.clientX), (this._lastY = dt.clientY), jt();
              for (
                var t = document.elementFromPoint(dt.clientX, dt.clientY),
                  e = t;
                t &&
                t.shadowRoot &&
                (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY)) !==
                  e;

              )
                e = t;
              if ((G.parentNode[F]._isOutsideThisEl(t), e))
                do {
                  if (
                    e[F] &&
                    e[F]._onDragOver({
                      clientX: dt.clientX,
                      clientY: dt.clientY,
                      target: t,
                      rootEl: e,
                    }) &&
                    !this.options.dragoverBubble
                  )
                    break;
                  t = e;
                } while ((e = e.parentNode));
              Pt();
            }
          },
          _onTouchMove: function (t) {
            if (ct) {
              var e = this.options,
                n = e.fallbackTolerance,
                i = e.fallbackOffset,
                r = t.touches ? t.touches[0] : t,
                o = Z && z(Z, !0),
                a = Z && o && o.a,
                s = Z && o && o.d,
                l = St && _t && E(_t),
                c =
                  (r.clientX - ct.clientX + i.x) / (a || 1) +
                  (l ? l[0] - xt[0] : 0) / (a || 1),
                d =
                  (r.clientY - ct.clientY + i.y) / (s || 1) +
                  (l ? l[1] - xt[1] : 0) / (s || 1);
              if (!Wt.active && !yt) {
                if (
                  n &&
                  Math.max(
                    Math.abs(r.clientX - this._lastX),
                    Math.abs(r.clientY - this._lastY)
                  ) < n
                )
                  return;
                this._onDragStart(t, !0);
              }
              if (Z) {
                o
                  ? ((o.e += c - (ut || 0)), (o.f += d - (pt || 0)))
                  : (o = { a: 1, b: 0, c: 0, d: 1, e: c, f: d });
                var u = "matrix("
                  .concat(o.a, ",")
                  .concat(o.b, ",")
                  .concat(o.c, ",")
                  .concat(o.d, ",")
                  .concat(o.e, ",")
                  .concat(o.f, ")");
                x(Z, "webkitTransform", u),
                  x(Z, "mozTransform", u),
                  x(Z, "msTransform", u),
                  x(Z, "transform", u),
                  (ut = c),
                  (pt = d),
                  (dt = r);
              }
              t.cancelable && t.preventDefault();
            }
          },
          _appendGhost: function () {
            if (!Z) {
              var t = this.options.fallbackOnBody ? document.body : J,
                e = S(G, !0, St, !0, t),
                n = this.options;
              if (St) {
                for (
                  _t = t;
                  "static" === x(_t, "position") &&
                  "none" === x(_t, "transform") &&
                  _t !== document;

                )
                  _t = _t.parentNode;
                _t !== document.body && _t !== document.documentElement
                  ? (_t === document && (_t = k()),
                    (e.top += _t.scrollTop),
                    (e.left += _t.scrollLeft))
                  : (_t = k()),
                  (xt = E(_t));
              }
              A((Z = G.cloneNode(!0)), n.ghostClass, !1),
                A(Z, n.fallbackClass, !0),
                A(Z, n.dragClass, !0),
                x(Z, "transition", ""),
                x(Z, "transform", ""),
                x(Z, "box-sizing", "border-box"),
                x(Z, "margin", 0),
                x(Z, "top", e.top),
                x(Z, "left", e.left),
                x(Z, "width", e.width),
                x(Z, "height", e.height),
                x(Z, "opacity", "0.8"),
                x(Z, "position", St ? "absolute" : "fixed"),
                x(Z, "zIndex", "100000"),
                x(Z, "pointerEvents", "none"),
                (Wt.ghost = Z),
                t.appendChild(Z),
                x(
                  Z,
                  "transform-origin",
                  (ht / parseInt(Z.style.width)) * 100 +
                    "% " +
                    (ft / parseInt(Z.style.height)) * 100 +
                    "%"
                );
            }
          },
          _onDragStart: function (t, e) {
            var n = this,
              i = t.dataTransfer,
              r = n.options;
            X("dragStart", this, { evt: t }),
              Wt.eventCanceled
                ? this._onDrop()
                : (X("setupClone", this),
                  Wt.eventCanceled ||
                    (((et = W(G)).draggable = !1),
                    (et.style["will-change"] = ""),
                    this._hideClone(),
                    A(et, this.options.chosenClass, !1),
                    (Wt.clone = et)),
                  (n.cloneId = Ht(function () {
                    X("clone", n),
                      Wt.eventCanceled ||
                        (n.options.removeCloneOnHide || J.insertBefore(et, G),
                        n._hideClone(),
                        V({ sortable: n, name: "clone" }));
                  })),
                  !e && A(G, r.dragClass, !0),
                  e
                    ? ((Mt = !0),
                      (n._loopId = setInterval(n._emulateDragOver, 50)))
                    : (v(document, "mouseup", n._onDrop),
                      v(document, "touchend", n._onDrop),
                      v(document, "touchcancel", n._onDrop),
                      i &&
                        ((i.effectAllowed = "move"),
                        r.setData && r.setData.call(n, i, G)),
                      g(document, "drop", n),
                      x(G, "transform", "translateZ(0)")),
                  (yt = !0),
                  (n._dragStartId = Ht(n._dragStarted.bind(n, e, t))),
                  g(document, "selectstart", n),
                  (bt = !0),
                  h && x(document.body, "user-select", "none"));
          },
          _onDragOver: function (t) {
            var e,
              n,
              i,
              r,
              o = this.el,
              s = t.target,
              l = this.options,
              c = l.group,
              d = Wt.active,
              u = st === c,
              p = l.sort,
              h = lt || d,
              f = this,
              b = !1;
            if (!zt) {
              if (
                (void 0 !== t.preventDefault &&
                  t.cancelable &&
                  t.preventDefault(),
                (s = M(s, l.draggable, o, !0)),
                P("dragOver"),
                Wt.eventCanceled)
              )
                return b;
              if (
                G.contains(t.target) ||
                (s.animated && s.animatingX && s.animatingY) ||
                f._ignoreWhileAnimating === s
              )
                return W(!1);
              if (
                ((Mt = !1),
                d &&
                  !l.disabled &&
                  (u
                    ? p || (i = !J.contains(G))
                    : lt === this ||
                      ((this.lastPutMode = st.checkPull(this, d, G, t)) &&
                        c.checkPut(this, d, G, t))))
              ) {
                if (
                  ((r = "vertical" === this._getDirection(t, s)),
                  (e = S(G)),
                  P("dragOverValid"),
                  Wt.eventCanceled)
                )
                  return b;
                if (i)
                  return (
                    (K = J),
                    R(),
                    this._hideClone(),
                    P("revert"),
                    Wt.eventCanceled ||
                      (Q ? J.insertBefore(G, Q) : J.appendChild(G)),
                    W(!0)
                  );
                var m = L(o, l.draggable);
                if (
                  !m ||
                  ((function (t, e, n) {
                    var i = S(L(n.el, n.options.draggable));
                    return e
                      ? t.clientX > i.right + 10 ||
                          (t.clientX <= i.right &&
                            t.clientY > i.bottom &&
                            t.clientX >= i.left)
                      : (t.clientX > i.right && t.clientY > i.top) ||
                          (t.clientX <= i.right && t.clientY > i.bottom + 10);
                  })(t, r, this) &&
                    !m.animated)
                ) {
                  if (m === G) return W(!1);
                  if (
                    (m && o === t.target && (s = m),
                    s && (n = S(s)),
                    !1 !== Nt(J, o, G, e, s, n, t, !!s))
                  )
                    return R(), o.appendChild(G), (K = o), N(), W(!0);
                } else if (s.parentNode === o) {
                  n = S(s);
                  var g,
                    v,
                    _,
                    y = G.parentNode !== o,
                    O = !(function (t, e, n) {
                      var i = n ? t.left : t.top,
                        r = n ? t.right : t.bottom,
                        o = n ? t.width : t.height,
                        a = n ? e.left : e.top,
                        s = n ? e.right : e.bottom,
                        l = n ? e.width : e.height;
                      return i === a || r === s || i + o / 2 === a + l / 2;
                    })(
                      (G.animated && G.toRect) || e,
                      (s.animated && s.toRect) || n,
                      r
                    ),
                    w = r ? "top" : "left",
                    z = T(s, "top", "top") || T(G, "top", "top"),
                    C = z ? z.scrollTop : void 0;
                  if (
                    (mt !== s &&
                      ((v = n[w]), (wt = !1), (At = (!O && l.invertSwap) || y)),
                    0 !==
                      (g = (function (t, e, n, i, r, o, a, s) {
                        var l = i ? t.clientY : t.clientX,
                          c = i ? n.height : n.width,
                          d = i ? n.top : n.left,
                          u = i ? n.bottom : n.right,
                          p = !1;
                        if (!a)
                          if (s && vt < c * r) {
                            if (
                              (!wt &&
                                (1 === gt
                                  ? l > d + (c * o) / 2
                                  : l < u - (c * o) / 2) &&
                                (wt = !0),
                              wt)
                            )
                              p = !0;
                            else if (1 === gt ? l < d + vt : l > u - vt)
                              return -gt;
                          } else if (
                            l > d + (c * (1 - r)) / 2 &&
                            l < u - (c * (1 - r)) / 2
                          )
                            return (function (t) {
                              return q(G) < q(t) ? 1 : -1;
                            })(e);
                        return (p = p || a) &&
                          (l < d + (c * o) / 2 || l > u - (c * o) / 2)
                          ? l > d + c / 2
                            ? 1
                            : -1
                          : 0;
                      })(
                        t,
                        s,
                        n,
                        r,
                        O ? 1 : l.swapThreshold,
                        null == l.invertedSwapThreshold
                          ? l.swapThreshold
                          : l.invertedSwapThreshold,
                        At,
                        mt === s
                      )))
                  ) {
                    var k = q(G);
                    do {
                      (k -= g), (_ = K.children[k]);
                    } while (_ && ("none" === x(_, "display") || _ === Z));
                  }
                  if (0 === g || _ === s) return W(!1);
                  (mt = s), (gt = g);
                  var D = s.nextElementSibling,
                    E = !1,
                    j = Nt(J, o, G, e, s, n, t, (E = 1 === g));
                  if (!1 !== j)
                    return (
                      (1 !== j && -1 !== j) || (E = 1 === j),
                      (zt = !0),
                      setTimeout(Ft, 30),
                      R(),
                      E && !D
                        ? o.appendChild(G)
                        : s.parentNode.insertBefore(G, E ? D : s),
                      z && I(z, 0, C - z.scrollTop),
                      (K = G.parentNode),
                      void 0 === v || At || (vt = Math.abs(v - S(s)[w])),
                      N(),
                      W(!0)
                    );
                }
                if (o.contains(G)) return W(!1);
              }
              return !1;
            }
            function P(l, c) {
              X(
                l,
                f,
                a(
                  {
                    evt: t,
                    isOwner: u,
                    axis: r ? "vertical" : "horizontal",
                    revert: i,
                    dragRect: e,
                    targetRect: n,
                    canSort: p,
                    fromSortable: h,
                    target: s,
                    completed: W,
                    onMove: function (n, i) {
                      return Nt(J, o, G, e, n, S(n), t, i);
                    },
                    changed: N,
                  },
                  c
                )
              );
            }
            function R() {
              P("dragOverAnimationCapture"),
                f.captureAnimationState(),
                f !== h && h.captureAnimationState();
            }
            function W(e) {
              return (
                P("dragOverCompleted", { insertion: e }),
                e &&
                  (u ? d._hideClone() : d._showClone(f),
                  f !== h &&
                    (A(
                      G,
                      lt ? lt.options.ghostClass : d.options.ghostClass,
                      !1
                    ),
                    A(G, l.ghostClass, !0)),
                  lt !== f && f !== Wt.active
                    ? (lt = f)
                    : f === Wt.active && lt && (lt = null),
                  h === f && (f._ignoreWhileAnimating = s),
                  f.animateAll(function () {
                    P("dragOverAnimationComplete"),
                      (f._ignoreWhileAnimating = null);
                  }),
                  f !== h &&
                    (h.animateAll(), (h._ignoreWhileAnimating = null))),
                ((s === G && !G.animated) || (s === o && !s.animated)) &&
                  (mt = null),
                l.dragoverBubble ||
                  t.rootEl ||
                  s === document ||
                  (G.parentNode[F]._isOutsideThisEl(t.target), !e && Rt(t)),
                !l.dragoverBubble && t.stopPropagation && t.stopPropagation(),
                (b = !0)
              );
            }
            function N() {
              (rt = q(G)),
                (at = q(G, l.draggable)),
                V({
                  sortable: f,
                  name: "change",
                  toEl: o,
                  newIndex: rt,
                  newDraggableIndex: at,
                  originalEvent: t,
                });
            }
          },
          _ignoreWhileAnimating: null,
          _offMoveEvents: function () {
            v(document, "mousemove", this._onTouchMove),
              v(document, "touchmove", this._onTouchMove),
              v(document, "pointermove", this._onTouchMove),
              v(document, "dragover", Rt),
              v(document, "mousemove", Rt),
              v(document, "touchmove", Rt);
          },
          _offUpEvents: function () {
            var t = this.el.ownerDocument;
            v(t, "mouseup", this._onDrop),
              v(t, "touchend", this._onDrop),
              v(t, "pointerup", this._onDrop),
              v(t, "touchcancel", this._onDrop),
              v(document, "selectstart", this);
          },
          _onDrop: function (t) {
            var e = this.el,
              n = this.options;
            (rt = q(G)),
              (at = q(G, n.draggable)),
              X("drop", this, { evt: t }),
              (K = G && G.parentNode),
              (rt = q(G)),
              (at = q(G, n.draggable)),
              Wt.eventCanceled ||
                ((yt = !1),
                (At = !1),
                (wt = !1),
                clearInterval(this._loopId),
                clearTimeout(this._dragStartTimer),
                Yt(this.cloneId),
                Yt(this._dragStartId),
                this.nativeDraggable &&
                  (v(document, "drop", this),
                  v(e, "dragstart", this._onDragStart)),
                this._offMoveEvents(),
                this._offUpEvents(),
                h && x(document.body, "user-select", ""),
                x(G, "transform", ""),
                t &&
                  (bt &&
                    (t.cancelable && t.preventDefault(),
                    !n.dropBubble && t.stopPropagation()),
                  Z && Z.parentNode && Z.parentNode.removeChild(Z),
                  (J === K || (lt && "clone" !== lt.lastPutMode)) &&
                    et &&
                    et.parentNode &&
                    et.parentNode.removeChild(et),
                  G &&
                    (this.nativeDraggable && v(G, "dragend", this),
                    Bt(G),
                    (G.style["will-change"] = ""),
                    bt &&
                      !yt &&
                      A(
                        G,
                        lt ? lt.options.ghostClass : this.options.ghostClass,
                        !1
                      ),
                    A(G, this.options.chosenClass, !1),
                    V({
                      sortable: this,
                      name: "unchoose",
                      toEl: K,
                      newIndex: null,
                      newDraggableIndex: null,
                      originalEvent: t,
                    }),
                    J !== K
                      ? (rt >= 0 &&
                          (V({
                            rootEl: K,
                            name: "add",
                            toEl: K,
                            fromEl: J,
                            originalEvent: t,
                          }),
                          V({
                            sortable: this,
                            name: "remove",
                            toEl: K,
                            originalEvent: t,
                          }),
                          V({
                            rootEl: K,
                            name: "sort",
                            toEl: K,
                            fromEl: J,
                            originalEvent: t,
                          }),
                          V({
                            sortable: this,
                            name: "sort",
                            toEl: K,
                            originalEvent: t,
                          })),
                        lt && lt.save())
                      : rt !== it &&
                        rt >= 0 &&
                        (V({
                          sortable: this,
                          name: "update",
                          toEl: K,
                          originalEvent: t,
                        }),
                        V({
                          sortable: this,
                          name: "sort",
                          toEl: K,
                          originalEvent: t,
                        })),
                    Wt.active &&
                      ((null != rt && -1 !== rt) || ((rt = it), (at = ot)),
                      V({
                        sortable: this,
                        name: "end",
                        toEl: K,
                        originalEvent: t,
                      }),
                      this.save())))),
              this._nulling();
          },
          _nulling: function () {
            X("nulling", this),
              (J =
                G =
                K =
                Z =
                Q =
                et =
                tt =
                nt =
                ct =
                dt =
                bt =
                rt =
                at =
                it =
                ot =
                mt =
                gt =
                lt =
                st =
                Wt.dragged =
                Wt.ghost =
                Wt.clone =
                Wt.active =
                  null),
              Ct.forEach(function (t) {
                t.checked = !0;
              }),
              (Ct.length = ut = pt = 0);
          },
          handleEvent: function (t) {
            switch (t.type) {
              case "drop":
              case "dragend":
                this._onDrop(t);
                break;
              case "dragenter":
              case "dragover":
                G &&
                  (this._onDragOver(t),
                  (function (t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
                      t.cancelable && t.preventDefault();
                  })(t));
                break;
              case "selectstart":
                t.preventDefault();
            }
          },
          toArray: function () {
            for (
              var t,
                e = [],
                n = this.el.children,
                i = 0,
                r = n.length,
                o = this.options;
              i < r;
              i++
            )
              M((t = n[i]), o.draggable, this.el, !1) &&
                e.push(t.getAttribute(o.dataIdAttr) || $t(t));
            return e;
          },
          sort: function (t) {
            var e = {},
              n = this.el;
            this.toArray().forEach(function (t, i) {
              var r = n.children[i];
              M(r, this.options.draggable, n, !1) && (e[t] = r);
            }, this),
              t.forEach(function (t) {
                e[t] && (n.removeChild(e[t]), n.appendChild(e[t]));
              });
          },
          save: function () {
            var t = this.options.store;
            t && t.set && t.set(this);
          },
          closest: function (t, e) {
            return M(t, e || this.options.draggable, this.el, !1);
          },
          option: function (t, e) {
            var n = this.options;
            if (void 0 === e) return n[t];
            var i = Y.modifyOption(this, t, e);
            (n[t] = void 0 !== i ? i : e), "group" === t && Et(n);
          },
          destroy: function () {
            X("destroy", this);
            var t = this.el;
            (t[F] = null),
              v(t, "mousedown", this._onTapStart),
              v(t, "touchstart", this._onTapStart),
              v(t, "pointerdown", this._onTapStart),
              this.nativeDraggable &&
                (v(t, "dragover", this), v(t, "dragenter", this)),
              Array.prototype.forEach.call(
                t.querySelectorAll("[draggable]"),
                function (t) {
                  t.removeAttribute("draggable");
                }
              ),
              this._onDrop(),
              this._disableDelayedDragEvents(),
              Ot.splice(Ot.indexOf(this.el), 1),
              (this.el = t = null);
          },
          _hideClone: function () {
            if (!nt) {
              if ((X("hideClone", this), Wt.eventCanceled)) return;
              x(et, "display", "none"),
                this.options.removeCloneOnHide &&
                  et.parentNode &&
                  et.parentNode.removeChild(et),
                (nt = !0);
            }
          },
          _showClone: function (t) {
            if ("clone" === t.lastPutMode) {
              if (nt) {
                if ((X("showClone", this), Wt.eventCanceled)) return;
                J.contains(G) && !this.options.group.revertClone
                  ? J.insertBefore(et, G)
                  : Q
                  ? J.insertBefore(et, Q)
                  : J.appendChild(et),
                  this.options.group.revertClone && this.animate(G, et),
                  x(et, "display", ""),
                  (nt = !1);
              }
            } else this._hideClone();
          },
        }),
          kt &&
            g(document, "touchmove", function (t) {
              (Wt.active || yt) && t.cancelable && t.preventDefault();
            }),
          (Wt.utils = {
            on: g,
            off: v,
            css: x,
            find: C,
            is: function (t, e) {
              return !!M(t, e, t, !1);
            },
            extend: function (t, e) {
              if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              return t;
            },
            throttle: R,
            closest: M,
            toggleClass: A,
            clone: W,
            index: q,
            nextTick: Ht,
            cancelNextTick: Yt,
            detectDirection: qt,
            getChild: D,
          }),
          (Wt.get = function (t) {
            return t[F];
          }),
          (Wt.mount = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e[0].constructor === Array && (e = e[0]),
              e.forEach(function (t) {
                if (!t.prototype || !t.prototype.constructor)
                  throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
                    {}.toString.call(t)
                  );
                t.utils && (Wt.utils = a({}, Wt.utils, t.utils)), Y.mount(t);
              });
          }),
          (Wt.create = function (t, e) {
            return new Wt(t, e);
          }),
          (Wt.version = "1.10.2");
        var Ut,
          Xt,
          Vt,
          Gt,
          Kt,
          Zt,
          Jt = [],
          Qt = !1;
        function te() {
          Jt.forEach(function (t) {
            clearInterval(t.pid);
          }),
            (Jt = []);
        }
        function ee() {
          clearInterval(Zt);
        }
        var ne,
          ie = R(function (t, e, n, i) {
            if (e.scroll) {
              var r,
                o = (t.touches ? t.touches[0] : t).clientX,
                a = (t.touches ? t.touches[0] : t).clientY,
                s = e.scrollSensitivity,
                l = e.scrollSpeed,
                c = k(),
                d = !1;
              Xt !== n &&
                ((Xt = n),
                te(),
                (Ut = e.scroll),
                (r = e.scrollFn),
                !0 === Ut && (Ut = j(n, !0)));
              var u = 0,
                p = Ut;
              do {
                var h = p,
                  f = S(h),
                  b = f.top,
                  m = f.bottom,
                  g = f.left,
                  v = f.right,
                  _ = f.width,
                  y = f.height,
                  M = void 0,
                  O = void 0,
                  w = h.scrollWidth,
                  A = h.scrollHeight,
                  z = x(h),
                  C = h.scrollLeft,
                  T = h.scrollTop;
                h === c
                  ? ((M =
                      _ < w &&
                      ("auto" === z.overflowX ||
                        "scroll" === z.overflowX ||
                        "visible" === z.overflowX)),
                    (O =
                      y < A &&
                      ("auto" === z.overflowY ||
                        "scroll" === z.overflowY ||
                        "visible" === z.overflowY)))
                  : ((M =
                      _ < w &&
                      ("auto" === z.overflowX || "scroll" === z.overflowX)),
                    (O =
                      y < A &&
                      ("auto" === z.overflowY || "scroll" === z.overflowY)));
                var D =
                    M &&
                    (Math.abs(v - o) <= s && C + _ < w) -
                      (Math.abs(g - o) <= s && !!C),
                  L =
                    O &&
                    (Math.abs(m - a) <= s && T + y < A) -
                      (Math.abs(b - a) <= s && !!T);
                if (!Jt[u]) for (var q = 0; q <= u; q++) Jt[q] || (Jt[q] = {});
                (Jt[u].vx == D && Jt[u].vy == L && Jt[u].el === h) ||
                  ((Jt[u].el = h),
                  (Jt[u].vx = D),
                  (Jt[u].vy = L),
                  clearInterval(Jt[u].pid),
                  (0 == D && 0 == L) ||
                    ((d = !0),
                    (Jt[u].pid = setInterval(
                      function () {
                        i && 0 === this.layer && Wt.active._onTouchMove(Kt);
                        var e = Jt[this.layer].vy ? Jt[this.layer].vy * l : 0,
                          n = Jt[this.layer].vx ? Jt[this.layer].vx * l : 0;
                        ("function" == typeof r &&
                          "continue" !==
                            r.call(
                              Wt.dragged.parentNode[F],
                              n,
                              e,
                              t,
                              Kt,
                              Jt[this.layer].el
                            )) ||
                          I(Jt[this.layer].el, n, e);
                      }.bind({ layer: u }),
                      24
                    )))),
                  u++;
              } while (e.bubbleScroll && p !== c && (p = j(p, !1)));
              Qt = d;
            }
          }, 30),
          re = function (t) {
            var e = t.originalEvent,
              n = t.putSortable,
              i = t.dragEl,
              r = t.activeSortable,
              o = t.dispatchSortableEvent,
              a = t.hideGhostForTarget,
              s = t.unhideGhostForTarget;
            if (e) {
              var l = n || r;
              a();
              var c =
                  e.changedTouches && e.changedTouches.length
                    ? e.changedTouches[0]
                    : e,
                d = document.elementFromPoint(c.clientX, c.clientY);
              s(),
                l &&
                  !l.el.contains(d) &&
                  (o("spill"), this.onSpill({ dragEl: i, putSortable: n }));
            }
          };
        function oe() {}
        function ae() {}
        function se() {
          function t() {
            this.defaults = { swapClass: "sortable-swap-highlight" };
          }
          return (
            (t.prototype = {
              dragStart: function (t) {
                var e = t.dragEl;
                ne = e;
              },
              dragOverValid: function (t) {
                var e = t.completed,
                  n = t.target,
                  i = t.onMove,
                  r = t.activeSortable,
                  o = t.changed,
                  a = t.cancel;
                if (r.options.swap) {
                  var s = this.sortable.el,
                    l = this.options;
                  if (n && n !== s) {
                    var c = ne;
                    !1 !== i(n)
                      ? (A(n, l.swapClass, !0), (ne = n))
                      : (ne = null),
                      c && c !== ne && A(c, l.swapClass, !1);
                  }
                  o(), e(!0), a();
                }
              },
              drop: function (t) {
                var e = t.activeSortable,
                  n = t.putSortable,
                  i = t.dragEl,
                  r = n || this.sortable,
                  o = this.options;
                ne && A(ne, o.swapClass, !1),
                  ne &&
                    (o.swap || (n && n.options.swap)) &&
                    i !== ne &&
                    (r.captureAnimationState(),
                    r !== e && e.captureAnimationState(),
                    (function (t, e) {
                      var n,
                        i,
                        r = t.parentNode,
                        o = e.parentNode;
                      r &&
                        o &&
                        !r.isEqualNode(e) &&
                        !o.isEqualNode(t) &&
                        ((n = q(t)),
                        (i = q(e)),
                        r.isEqualNode(o) && n < i && i++,
                        r.insertBefore(e, r.children[n]),
                        o.insertBefore(t, o.children[i]));
                    })(i, ne),
                    r.animateAll(),
                    r !== e && e.animateAll());
              },
              nulling: function () {
                ne = null;
              },
            }),
            o(t, {
              pluginName: "swap",
              eventProperties: function () {
                return { swapItem: ne };
              },
            })
          );
        }
        (oe.prototype = {
          startIndex: null,
          dragStart: function (t) {
            var e = t.oldDraggableIndex;
            this.startIndex = e;
          },
          onSpill: function (t) {
            var e = t.dragEl,
              n = t.putSortable;
            this.sortable.captureAnimationState(),
              n && n.captureAnimationState();
            var i = D(this.sortable.el, this.startIndex, this.options);
            i
              ? this.sortable.el.insertBefore(e, i)
              : this.sortable.el.appendChild(e),
              this.sortable.animateAll(),
              n && n.animateAll();
          },
          drop: re,
        }),
          o(oe, { pluginName: "revertOnSpill" }),
          (ae.prototype = {
            onSpill: function (t) {
              var e = t.dragEl,
                n = t.putSortable || this.sortable;
              n.captureAnimationState(),
                e.parentNode && e.parentNode.removeChild(e),
                n.animateAll();
            },
            drop: re,
          }),
          o(ae, { pluginName: "removeOnSpill" });
        var le,
          ce,
          de,
          ue,
          pe,
          he = [],
          fe = [],
          be = !1,
          me = !1,
          ge = !1;
        function ve() {
          function t(t) {
            for (var e in this)
              "_" === e.charAt(0) &&
                "function" == typeof this[e] &&
                (this[e] = this[e].bind(this));
            t.options.supportPointer
              ? g(document, "pointerup", this._deselectMultiDrag)
              : (g(document, "mouseup", this._deselectMultiDrag),
                g(document, "touchend", this._deselectMultiDrag)),
              g(document, "keydown", this._checkKeyDown),
              g(document, "keyup", this._checkKeyUp),
              (this.defaults = {
                selectedClass: "sortable-selected",
                multiDragKey: null,
                setData: function (e, n) {
                  var i = "";
                  he.length && ce === t
                    ? he.forEach(function (t, e) {
                        i += (e ? ", " : "") + t.textContent;
                      })
                    : (i = n.textContent),
                    e.setData("Text", i);
                },
              });
          }
          return (
            (t.prototype = {
              multiDragKeyDown: !1,
              isMultiDrag: !1,
              delayStartGlobal: function (t) {
                var e = t.dragEl;
                de = e;
              },
              delayEnded: function () {
                this.isMultiDrag = ~he.indexOf(de);
              },
              setupClone: function (t) {
                var e = t.sortable,
                  n = t.cancel;
                if (this.isMultiDrag) {
                  for (var i = 0; i < he.length; i++)
                    fe.push(W(he[i])),
                      (fe[i].sortableIndex = he[i].sortableIndex),
                      (fe[i].draggable = !1),
                      (fe[i].style["will-change"] = ""),
                      A(fe[i], this.options.selectedClass, !1),
                      he[i] === de && A(fe[i], this.options.chosenClass, !1);
                  e._hideClone(), n();
                }
              },
              clone: function (t) {
                var e = t.sortable,
                  n = t.rootEl,
                  i = t.dispatchSortableEvent,
                  r = t.cancel;
                this.isMultiDrag &&
                  (this.options.removeCloneOnHide ||
                    (he.length && ce === e && (_e(!0, n), i("clone"), r())));
              },
              showClone: function (t) {
                var e = t.cloneNowShown,
                  n = t.rootEl,
                  i = t.cancel;
                this.isMultiDrag &&
                  (_e(!1, n),
                  fe.forEach(function (t) {
                    x(t, "display", "");
                  }),
                  e(),
                  (pe = !1),
                  i());
              },
              hideClone: function (t) {
                var e = this,
                  n = (t.sortable, t.cloneNowHidden),
                  i = t.cancel;
                this.isMultiDrag &&
                  (fe.forEach(function (t) {
                    x(t, "display", "none"),
                      e.options.removeCloneOnHide &&
                        t.parentNode &&
                        t.parentNode.removeChild(t);
                  }),
                  n(),
                  (pe = !0),
                  i());
              },
              dragStartGlobal: function (t) {
                t.sortable,
                  !this.isMultiDrag && ce && ce.multiDrag._deselectMultiDrag(),
                  he.forEach(function (t) {
                    t.sortableIndex = q(t);
                  }),
                  (he = he.sort(function (t, e) {
                    return t.sortableIndex - e.sortableIndex;
                  })),
                  (ge = !0);
              },
              dragStarted: function (t) {
                var e = this,
                  n = t.sortable;
                if (this.isMultiDrag) {
                  if (
                    this.options.sort &&
                    (n.captureAnimationState(), this.options.animation)
                  ) {
                    he.forEach(function (t) {
                      t !== de && x(t, "position", "absolute");
                    });
                    var i = S(de, !1, !0, !0);
                    he.forEach(function (t) {
                      t !== de && N(t, i);
                    }),
                      (me = !0),
                      (be = !0);
                  }
                  n.animateAll(function () {
                    (me = !1),
                      (be = !1),
                      e.options.animation &&
                        he.forEach(function (t) {
                          B(t);
                        }),
                      e.options.sort && ye();
                  });
                }
              },
              dragOver: function (t) {
                var e = t.target,
                  n = t.completed,
                  i = t.cancel;
                me && ~he.indexOf(e) && (n(!1), i());
              },
              revert: function (t) {
                var e = t.fromSortable,
                  n = t.rootEl,
                  i = t.sortable,
                  r = t.dragRect;
                he.length > 1 &&
                  (he.forEach(function (t) {
                    i.addAnimationState({ target: t, rect: me ? S(t) : r }),
                      B(t),
                      (t.fromRect = r),
                      e.removeAnimationState(t);
                  }),
                  (me = !1),
                  (function (t, e) {
                    he.forEach(function (n, i) {
                      var r = e.children[n.sortableIndex + (t ? Number(i) : 0)];
                      r ? e.insertBefore(n, r) : e.appendChild(n);
                    });
                  })(!this.options.removeCloneOnHide, n));
              },
              dragOverCompleted: function (t) {
                var e = t.sortable,
                  n = t.isOwner,
                  i = t.insertion,
                  r = t.activeSortable,
                  o = t.parentEl,
                  a = t.putSortable,
                  s = this.options;
                if (i) {
                  if (
                    (n && r._hideClone(),
                    (be = !1),
                    s.animation &&
                      he.length > 1 &&
                      (me || (!n && !r.options.sort && !a)))
                  ) {
                    var l = S(de, !1, !0, !0);
                    he.forEach(function (t) {
                      t !== de && (N(t, l), o.appendChild(t));
                    }),
                      (me = !0);
                  }
                  if (!n)
                    if ((me || ye(), he.length > 1)) {
                      var c = pe;
                      r._showClone(e),
                        r.options.animation &&
                          !pe &&
                          c &&
                          fe.forEach(function (t) {
                            r.addAnimationState({ target: t, rect: ue }),
                              (t.fromRect = ue),
                              (t.thisAnimationDuration = null);
                          });
                    } else r._showClone(e);
                }
              },
              dragOverAnimationCapture: function (t) {
                var e = t.dragRect,
                  n = t.isOwner,
                  i = t.activeSortable;
                if (
                  (he.forEach(function (t) {
                    t.thisAnimationDuration = null;
                  }),
                  i.options.animation && !n && i.multiDrag.isMultiDrag)
                ) {
                  ue = o({}, e);
                  var r = z(de, !0);
                  (ue.top -= r.f), (ue.left -= r.e);
                }
              },
              dragOverAnimationComplete: function () {
                me && ((me = !1), ye());
              },
              drop: function (t) {
                var e = t.originalEvent,
                  n = t.rootEl,
                  i = t.parentEl,
                  r = t.sortable,
                  o = t.dispatchSortableEvent,
                  a = t.oldIndex,
                  s = t.putSortable,
                  l = s || this.sortable;
                if (e) {
                  var c = this.options,
                    d = i.children;
                  if (!ge)
                    if (
                      (c.multiDragKey &&
                        !this.multiDragKeyDown &&
                        this._deselectMultiDrag(),
                      A(de, c.selectedClass, !~he.indexOf(de)),
                      ~he.indexOf(de))
                    )
                      he.splice(he.indexOf(de), 1),
                        (le = null),
                        U({
                          sortable: r,
                          rootEl: n,
                          name: "deselect",
                          targetEl: de,
                          originalEvt: e,
                        });
                    else {
                      if (
                        (he.push(de),
                        U({
                          sortable: r,
                          rootEl: n,
                          name: "select",
                          targetEl: de,
                          originalEvt: e,
                        }),
                        e.shiftKey && le && r.el.contains(le))
                      ) {
                        var u,
                          p,
                          h = q(le),
                          f = q(de);
                        if (~h && ~f && h !== f)
                          for (
                            f > h ? ((p = h), (u = f)) : ((p = f), (u = h + 1));
                            p < u;
                            p++
                          )
                            ~he.indexOf(d[p]) ||
                              (A(d[p], c.selectedClass, !0),
                              he.push(d[p]),
                              U({
                                sortable: r,
                                rootEl: n,
                                name: "select",
                                targetEl: d[p],
                                originalEvt: e,
                              }));
                      } else le = de;
                      ce = l;
                    }
                  if (ge && this.isMultiDrag) {
                    if ((i[F].options.sort || i !== n) && he.length > 1) {
                      var b = S(de),
                        m = q(de, ":not(." + this.options.selectedClass + ")");
                      if (
                        (!be &&
                          c.animation &&
                          (de.thisAnimationDuration = null),
                        l.captureAnimationState(),
                        !be &&
                          (c.animation &&
                            ((de.fromRect = b),
                            he.forEach(function (t) {
                              if (
                                ((t.thisAnimationDuration = null), t !== de)
                              ) {
                                var e = me ? S(t) : b;
                                (t.fromRect = e),
                                  l.addAnimationState({ target: t, rect: e });
                              }
                            })),
                          ye(),
                          he.forEach(function (t) {
                            d[m] ? i.insertBefore(t, d[m]) : i.appendChild(t),
                              m++;
                          }),
                          a === q(de)))
                      ) {
                        var g = !1;
                        he.forEach(function (t) {
                          t.sortableIndex === q(t) || (g = !0);
                        }),
                          g && o("update");
                      }
                      he.forEach(function (t) {
                        B(t);
                      }),
                        l.animateAll();
                    }
                    ce = l;
                  }
                  (n === i || (s && "clone" !== s.lastPutMode)) &&
                    fe.forEach(function (t) {
                      t.parentNode && t.parentNode.removeChild(t);
                    });
                }
              },
              nullingGlobal: function () {
                (this.isMultiDrag = ge = !1), (fe.length = 0);
              },
              destroyGlobal: function () {
                this._deselectMultiDrag(),
                  v(document, "pointerup", this._deselectMultiDrag),
                  v(document, "mouseup", this._deselectMultiDrag),
                  v(document, "touchend", this._deselectMultiDrag),
                  v(document, "keydown", this._checkKeyDown),
                  v(document, "keyup", this._checkKeyUp);
              },
              _deselectMultiDrag: function (t) {
                if (
                  !(
                    (void 0 !== ge && ge) ||
                    ce !== this.sortable ||
                    (t &&
                      M(
                        t.target,
                        this.options.draggable,
                        this.sortable.el,
                        !1
                      )) ||
                    (t && 0 !== t.button)
                  )
                )
                  for (; he.length; ) {
                    var e = he[0];
                    A(e, this.options.selectedClass, !1),
                      he.shift(),
                      U({
                        sortable: this.sortable,
                        rootEl: this.sortable.el,
                        name: "deselect",
                        targetEl: e,
                        originalEvt: t,
                      });
                  }
              },
              _checkKeyDown: function (t) {
                t.key === this.options.multiDragKey &&
                  (this.multiDragKeyDown = !0);
              },
              _checkKeyUp: function (t) {
                t.key === this.options.multiDragKey &&
                  (this.multiDragKeyDown = !1);
              },
            }),
            o(t, {
              pluginName: "multiDrag",
              utils: {
                select: function (t) {
                  var e = t.parentNode[F];
                  e &&
                    e.options.multiDrag &&
                    !~he.indexOf(t) &&
                    (ce &&
                      ce !== e &&
                      (ce.multiDrag._deselectMultiDrag(), (ce = e)),
                    A(t, e.options.selectedClass, !0),
                    he.push(t));
                },
                deselect: function (t) {
                  var e = t.parentNode[F],
                    n = he.indexOf(t);
                  e &&
                    e.options.multiDrag &&
                    ~n &&
                    (A(t, e.options.selectedClass, !1), he.splice(n, 1));
                },
              },
              eventProperties: function () {
                var t = this,
                  e = [],
                  n = [];
                return (
                  he.forEach(function (i) {
                    var r;
                    e.push({ multiDragElement: i, index: i.sortableIndex }),
                      (r =
                        me && i !== de
                          ? -1
                          : me
                          ? q(i, ":not(." + t.options.selectedClass + ")")
                          : q(i)),
                      n.push({ multiDragElement: i, index: r });
                  }),
                  {
                    items: l(he),
                    clones: [].concat(fe),
                    oldIndicies: e,
                    newIndicies: n,
                  }
                );
              },
              optionListeners: {
                multiDragKey: function (t) {
                  return (
                    "ctrl" === (t = t.toLowerCase())
                      ? (t = "Control")
                      : t.length > 1 &&
                        (t = t.charAt(0).toUpperCase() + t.substr(1)),
                    t
                  );
                },
              },
            })
          );
        }
        function _e(t, e) {
          fe.forEach(function (n, i) {
            var r = e.children[n.sortableIndex + (t ? Number(i) : 0)];
            r ? e.insertBefore(n, r) : e.appendChild(n);
          });
        }
        function ye() {
          he.forEach(function (t) {
            t !== de && t.parentNode && t.parentNode.removeChild(t);
          });
        }
        Wt.mount(
          new (function () {
            function t() {
              for (var t in ((this.defaults = {
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0,
              }),
              this))
                "_" === t.charAt(0) &&
                  "function" == typeof this[t] &&
                  (this[t] = this[t].bind(this));
            }
            return (
              (t.prototype = {
                dragStarted: function (t) {
                  var e = t.originalEvent;
                  this.sortable.nativeDraggable
                    ? g(document, "dragover", this._handleAutoScroll)
                    : this.options.supportPointer
                    ? g(document, "pointermove", this._handleFallbackAutoScroll)
                    : e.touches
                    ? g(document, "touchmove", this._handleFallbackAutoScroll)
                    : g(document, "mousemove", this._handleFallbackAutoScroll);
                },
                dragOverCompleted: function (t) {
                  var e = t.originalEvent;
                  this.options.dragOverBubble ||
                    e.rootEl ||
                    this._handleAutoScroll(e);
                },
                drop: function () {
                  this.sortable.nativeDraggable
                    ? v(document, "dragover", this._handleAutoScroll)
                    : (v(
                        document,
                        "pointermove",
                        this._handleFallbackAutoScroll
                      ),
                      v(document, "touchmove", this._handleFallbackAutoScroll),
                      v(document, "mousemove", this._handleFallbackAutoScroll)),
                    ee(),
                    te(),
                    clearTimeout(O),
                    (O = void 0);
                },
                nulling: function () {
                  (Kt = Xt = Ut = Qt = Zt = Vt = Gt = null), (Jt.length = 0);
                },
                _handleFallbackAutoScroll: function (t) {
                  this._handleAutoScroll(t, !0);
                },
                _handleAutoScroll: function (t, e) {
                  var n = this,
                    i = (t.touches ? t.touches[0] : t).clientX,
                    r = (t.touches ? t.touches[0] : t).clientY,
                    o = document.elementFromPoint(i, r);
                  if (((Kt = t), e || u || d || h)) {
                    ie(t, this.options, o, e);
                    var a = j(o, !0);
                    !Qt ||
                      (Zt && i === Vt && r === Gt) ||
                      (Zt && ee(),
                      (Zt = setInterval(function () {
                        var o = j(document.elementFromPoint(i, r), !0);
                        o !== a && ((a = o), te()), ie(t, n.options, o, e);
                      }, 10)),
                      (Vt = i),
                      (Gt = r));
                  } else {
                    if (!this.options.bubbleScroll || j(o, !0) === k())
                      return void te();
                    ie(t, this.options, j(o, !1), !1);
                  }
                },
              }),
              o(t, { pluginName: "scroll", initializeByDefault: !0 })
            );
          })()
        ),
          Wt.mount(ae, oe),
          (e.default = Wt);
      }.call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    n(566);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '.buttons[data-v-68aeff36]{margin-top:35px}.ghost[data-v-68aeff36]{opacity:.5;background:#c8ebfb}.my_handle[data-v-68aeff36]{float:right}*[data-v-68aeff36],[data-v-68aeff36]:before{box-sizing:inherit}.double-lines-spinner[data-v-68aeff36]{width:64px!important;height:64px!important;border-radius:50%!important;position:relative!important}.double-lines-spinner[data-v-68aeff36]:before{content:""!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;display:block!important;border-radius:50%!important;border:2px solid rgba(0,0,0,.05)!important;border-right:2px solid var(--color-spinner)!important;animation:kivi-spin-68aeff36 .5s linear 0s infinite!important}@keyframes kivi-spin-68aeff36{to{transform:rotate(1turn)!important;-webkit-transform:rotate(1turn)}}',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(567);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "@media (max-width:576px){#clinicPrint .vgt-compact td:before{width:42%;padding-left:0}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(568);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-06c61725]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-06c61725]::-webkit-inner-spin-button{display:none}[type=date][data-v-06c61725]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-06c61725]{display:block}#doc_birthdate[data-v-06c61725]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-06c61725] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-06c61725] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(569);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-5a127a5c]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-5a127a5c]::-webkit-inner-spin-button{display:none}[type=date][data-v-5a127a5c]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-5a127a5c]{display:block}#doc_birthdate[data-v-5a127a5c]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-5a127a5c] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-5a127a5c] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(570);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".kc-thm-st[data-v-1a304e20]{display:grid}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(571);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".tanslation-key-scroll[data-v-489d96c8]{width:100%;overflow-y:scroll;height:500px}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(572);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([t.i, "@media print{@page{margin:10px}}", ""]);
  },
  function (t, e, n) {
    "use strict";
    n(573);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "@media (max-width:576px){.vgt-compact td:before{padding-left:0!important}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(574);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([t.i, "@page{margin-bottom:0}", ""]);
  },
  function (t, e, n) {
    "use strict";
    n(575);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".nameheading[data-v-5fea796d]{margin:0;font-weight:500;font-size:20px}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(576);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#verifymodal header{min-height:unset}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(577);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-5c0ae6dc]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-5c0ae6dc]::-webkit-inner-spin-button{display:none}[type=date][data-v-5c0ae6dc]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-5c0ae6dc]{display:block}#doc_birthdate[data-v-5c0ae6dc]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-5c0ae6dc] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-5c0ae6dc] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(578);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-5b7b4e2e]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-5b7b4e2e]::-webkit-inner-spin-button{display:none}[type=date][data-v-5b7b4e2e]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-5b7b4e2e]{display:block}#doc_birthdate[data-v-5b7b4e2e]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate[data-v-5b7b4e2e] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-5b7b4e2e] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(579);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".ql-editor[data-v-145dad3a]{min-height:300px!important}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(580);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "@-moz-document url-prefix(){[type=date][data-v-100a48c0]{background-image:none}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(581);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '.accordion .card-header[data-v-00ed942a]:has(button.not-collapsed):after{content:"\\F077"!important}',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(582);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '.accordion .card-header:has(button.not-collapsed):after{content:"\\F077"!important}',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(583);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "header.card-header[data-v-c6abc22c]{min-height:unset}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(584);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".form-group.country-code-inline-box #country_code .flex-1{display:none}#user_registration .custom-switch .custom-control-label:before{left:-2.5rem}#user_registration .custom-switch .custom-control-label:after{left:calc(-2.5rem + 2px)}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(585);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '.accordion .card-header[data-v-78409e14]:has(button.not-collapsed):after{content:"\\F077"!important}',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(586);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "[type=date][data-v-dbecefd8]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat}[type=date][data-v-dbecefd8]::-webkit-inner-spin-button{display:none}[type=date][data-v-dbecefd8]::-webkit-calendar-picker-indicator{opacity:0}label[data-v-dbecefd8]{display:block}#doc_birthdate[data-v-dbecefd8]{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad;cursor:pointer}#doc_birthdate[data-v-dbecefd8] ::-moz-placeholder{color:#8c9cad}#doc_birthdate[data-v-dbecefd8] ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(587);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#billingTable table tbody tr:last-child td{color:var(--primary);font-weight:600}@media (max-width:576px){#billingTable .vgt-compact td:before{width:52%;padding-left:0}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(588);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "button[data-v-a7753ebc]:focus{box-shadow:none;transform:none}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(589);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#api-builder .nav.nav-tabs{margin-bottom:1rem}#api-builder .nav-tabs .nav-link.active{color:var(--primary)}#api-builder .nav-tabs .nav-link{font-size:1rem;font-weight:400;background-color:#fff;border-bottom-color:#dee2e6}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(590);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#doc_birthdate{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate ::-moz-placeholder{color:#8c9cad}#doc_birthdate ::placeholder{color:#8c9cad}.field-border{border-style:solid;border:1px dashed var(--primary)}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(591);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".file-label[data-v-6dc96458]{min-width:150px;max-width:150px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;-webkit-line-clamp:3;display:block}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(592);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "@media (max-width:576px){#bodyChartPrint .vgt-compact td:before{width:42%;padding-left:0}}",
      "",
    ]);
  },
  function (t, e, n) {
    var i = n(727);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '/*!\n * TOAST UI Color Picker\n * @version 2.2.8\n * @author NHN Cloud FE Development Team <dl_javascript@nhn.com>\n * @license MIT\n */.tui-colorpicker-clearfix{zoom:1}.tui-colorpicker-clearfix:after{content:"";display:block;clear:both}.tui-colorpicker-vml{behavior:url(#default#VML);display:block}.tui-colorpicker-container,.tui-colorpicker-palette-container{width:152px}.tui-colorpicker-palette-container ul{width:152px;margin:0;padding:0}.tui-colorpicker-palette-container li{float:left;margin:0;padding:0 3px 3px 0;list-style:none}.tui-colorpicker-palette-button{display:block;overflow:hidden;outline:none;margin:0;padding:0;width:16px;height:16px;border:1px solid #ccc;cursor:pointer}.tui-colorpicker-palette-button.tui-colorpicker-selected{border:2px solid #000}.tui-colorpicker-palette-button.tui-colorpicker-color-transparent{barckground-repeat:repeat;background-repeat:no-repeat;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CghrN1AAAABzSURBVCgVldKxEYAgDAXQD5VOpLuwgi4jlrTMqF00oOd5Aia/CcV/F4oYOgNlrLjvVyCEVJchBjEC25538PeaWTzRMBLxvIL7UZwFwL06qoA6aoAy+gFfJABvJAQPUoCMlICRRd8BzgHzJL4ok9aJ67l4AK9AxVKhHryUAAAAAElFTkSuQmCC")}.tui-colorpicker-palette-hex{font-family:monospace;width:60px}.tui-colorpicker-palette-hex,.tui-colorpicker-palette-preview{display:inline-block;*display:inline;zoom:1;vertical-align:middle}.tui-colorpicker-palette-preview{width:12px;height:12px;border:1px solid #ccc;overflow:hidden}.tui-colorpicker-palette-toggle-slider{display:inline-block;*display:inline;zoom:1;vertical-align:middle;float:right}.tui-colorpicker-slider-container{margin:5px 0 0;height:122px;zoom:1}.tui-colorpicker-slider-container:after{content:"";display:block;clear:both}.tui-colorpicker-slider-left{float:left;width:120px;height:120px}.tui-colorpicker-slider-right{float:right;width:32px;height:120px}.tui-colorpicker-svg{display:block}.tui-colorpicker-slider-handle{position:absolute;overflow:visible;top:0;left:0;width:1px;height:1px;z-index:2;opacity:.9}.tui-colorpicker-svg-slider,.tui-colorpicker-vml-slider{width:120px;height:120px;border:1px solid #ccc;overflow:hidden}.tui-colorpicker-vml-slider{position:relative}.tui-colorpicker-vml-slider-bg{position:absolute;margin:-1px 0 0 -1px;top:0;left:0;width:122px;height:122px}.tui-colorpicker-svg-huebar{float:right;width:18px;height:120px;border:1px solid #ccc;overflow:visible}.tui-colorpicker-vml-huebar{width:32px;position:relative}.tui-colorpicker-vml-huebar-bg{position:absolute;top:0;right:0;width:18px;height:121px}',
      "",
    ]);
  },
  function (t, e, n) {
    var i = n(729);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '/*!\n * TOAST UI ImageEditor\n * @version 3.15.3\n * @license MIT\n */body>textarea{position:fixed!important}.tui-image-editor-container{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:300px;height:100%;position:relative;background-color:#282828;overflow:hidden;letter-spacing:.3px}.tui-image-editor-container div,.tui-image-editor-container input,.tui-image-editor-container label,.tui-image-editor-container li,.tui-image-editor-container ul{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;-ms-user-select:none;-moz-user-select:-moz-none;-webkit-user-select:none;user-select:none}.tui-image-editor-container .tui-image-editor-header{min-width:533px;position:absolute;background-color:#151515;top:0;width:100%}.tui-image-editor-container .tui-image-editor-controls-buttons,.tui-image-editor-container .tui-image-editor-header-buttons{float:right;margin:8px}.tui-image-editor-container .tui-image-editor-controls-logo,.tui-image-editor-container .tui-image-editor-header-logo{float:left;width:30%;padding:17px}.tui-image-editor-container .tui-image-editor-controls-buttons,.tui-image-editor-container .tui-image-editor-controls-logo{width:270px;height:100%;display:none}.tui-image-editor-container .tui-image-editor-controls-buttons button,.tui-image-editor-container .tui-image-editor-controls-buttons div,.tui-image-editor-container .tui-image-editor-header-buttons button,.tui-image-editor-container .tui-image-editor-header-buttons div{display:inline-block;position:relative;width:120px;height:40px;padding:0;line-height:40px;outline:none;border-radius:20px;border:1px solid #ddd;font-family:Noto Sans,sans-serif;font-size:12px;font-weight:700;cursor:pointer;vertical-align:middle;letter-spacing:.3px;text-align:center}.tui-image-editor-container .tui-image-editor-download-btn{background-color:#fdba3b;border-color:#fdba3b;color:#fff}.tui-image-editor-container .tui-image-editor-load-btn{position:absolute;left:0;right:0;display:inline-block;top:0;bottom:0;width:100%;cursor:pointer;opacity:0}.tui-image-editor-container .tui-image-editor-main-container{position:absolute;width:100%;top:0;bottom:64px}.tui-image-editor-container .tui-image-editor-main{position:absolute;text-align:center;top:64px;bottom:0;right:0;left:0}.tui-image-editor-container .tui-image-editor-wrap{bottom:0;width:100%;overflow:auto}.tui-image-editor-container .tui-image-editor-wrap .tui-image-editor-size-wrap{display:table;width:100%;height:100%}.tui-image-editor-container .tui-image-editor-wrap .tui-image-editor-size-wrap .tui-image-editor-align-wrap{display:table-cell;vertical-align:middle}.tui-image-editor-container .tui-image-editor{position:relative;display:inline-block}.tui-image-editor-container .tui-image-editor-help-menu,.tui-image-editor-container .tui-image-editor-menu{width:auto;list-style:none;padding:0;margin:0 auto;display:table-cell;text-align:center;vertical-align:middle;white-space:nowrap}.tui-image-editor-container .tui-image-editor-help-menu>.tui-image-editor-item,.tui-image-editor-container .tui-image-editor-menu>.tui-image-editor-item{position:relative;display:inline-block;border-radius:2px;padding:7px 8px 3px;cursor:pointer;margin:0 4px}.tui-image-editor-container .tui-image-editor-help-menu>.tui-image-editor-item[tooltip-content]:hover:before,.tui-image-editor-container .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:hover:before{content:"";position:absolute;display:inline-block;margin:0 auto;width:0;height:0;border-right:7px solid transparent;border-top:7px solid #2f2f2f;border-left:7px solid transparent;left:13px;top:-2px}.tui-image-editor-container .tui-image-editor-help-menu>.tui-image-editor-item[tooltip-content]:hover:after,.tui-image-editor-container .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:hover:after{content:attr(tooltip-content);position:absolute;display:inline-block;background-color:#2f2f2f;color:#fff;padding:5px 8px;font-size:11px;font-weight:lighter;border-radius:3px;max-height:23px;top:-25px;left:0;min-width:24px}.tui-image-editor-container .tui-image-editor-help-menu>.tui-image-editor-item.active,.tui-image-editor-container .tui-image-editor-menu>.tui-image-editor-item.active{background-color:#fff;-webkit-transition:all .3s ease;transition:all .3s ease}.tui-image-editor-container .tui-image-editor-wrap{position:absolute}.tui-image-editor-container .tui-image-editor-grid-visual{display:none;position:absolute;width:100%;height:100%;border:1px solid hsla(0,0%,100%,.7)}.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-flip .tui-image-editor,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-rotate .tui-image-editor{-webkit-transition:none;transition:none}.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-flip .tui-image-editor-grid-visual,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-resize .tui-image-editor-grid-visual,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-rotate .tui-image-editor-grid-visual{display:block}.tui-image-editor-container .tui-image-editor-grid-visual table{width:100%;height:100%;border-collapse:collapse}.tui-image-editor-container .tui-image-editor-grid-visual table td{border:1px solid hsla(0,0%,100%,.3)}.tui-image-editor-container .tui-image-editor-grid-visual table td.dot:before{content:"";position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:10px;height:10px;border:0;-webkit-box-shadow:0 0 1px 0 rgba(0,0,0,.3);box-shadow:0 0 1px 0 rgba(0,0,0,.3);border-radius:100%;background-color:#fff}.tui-image-editor-container .tui-image-editor-grid-visual table td.dot.left-top:before{top:-5px;left:-5px}.tui-image-editor-container .tui-image-editor-grid-visual table td.dot.right-top:before{top:-5px;right:-5px}.tui-image-editor-container .tui-image-editor-grid-visual table td.dot.left-bottom:before{bottom:-5px;left:-5px}.tui-image-editor-container .tui-image-editor-grid-visual table td.dot.right-bottom:before{bottom:-5px;right:-5px}.tui-image-editor-container .tui-image-editor-submenu{display:none;position:absolute;bottom:0;width:100%;height:150px;white-space:nowrap;z-index:2}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button:hover svg>use.active{display:block}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item li{display:inline-block;vertical-align:top}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-image-editor-newline{display:block;margin-top:0}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-image-editor-button{position:relative;cursor:pointer;display:inline-block;font-weight:400;font-size:11px;margin:0 9px}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-image-editor-button.preset{margin:0 9px 20px 5px}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item label>span{display:inline-block;cursor:pointer;padding-top:5px;font-family:Noto Sans,sans-serif;font-size:11px}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-image-editor-button.apply label,.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-image-editor-button.cancel label{vertical-align:7px}.tui-image-editor-container .tui-image-editor-submenu>div{display:none;vertical-align:bottom}.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-submenu-style{opacity:.95;z-index:-1;position:absolute;top:0;bottom:0;left:0;right:0;display:block}.tui-image-editor-container .tui-image-editor-partition>div{width:1px;height:52px;border-left:1px solid #3c3c3c;margin:0 8px}.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-filter .tui-image-editor-partition>div{height:108px;margin:0 29px 0 0}.tui-image-editor-container .tui-image-editor-submenu-align{text-align:left;margin-right:30px}.tui-image-editor-container .tui-image-editor-submenu-align label>span{width:55px;white-space:nowrap}.tui-image-editor-container .tui-image-editor-submenu-align:first-child{margin-right:0}.tui-image-editor-container .tui-image-editor-submenu-align:first-child label>span{width:70px}.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-crop .tui-image-editor-submenu>div.tui-image-editor-menu-crop,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-draw .tui-image-editor-submenu>div.tui-image-editor-menu-draw,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-filter .tui-image-editor-submenu>div.tui-image-editor-menu-filter,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-flip .tui-image-editor-submenu>div.tui-image-editor-menu-flip,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-icon .tui-image-editor-submenu>div.tui-image-editor-menu-icon,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-mask .tui-image-editor-submenu>div.tui-image-editor-menu-mask,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-resize .tui-image-editor-submenu>div.tui-image-editor-menu-resize,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-rotate .tui-image-editor-submenu>div.tui-image-editor-menu-rotate,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-shape .tui-image-editor-submenu>div.tui-image-editor-menu-shape,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-text .tui-image-editor-submenu>div.tui-image-editor-menu-text,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-zoom .tui-image-editor-submenu>div.tui-image-editor-menu-zoom{display:table-cell}.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-crop .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-draw .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-filter .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-flip .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-icon .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-mask .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-resize .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-rotate .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-shape .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-text .tui-image-editor-submenu,.tui-image-editor-container .tui-image-editor-main.tui-image-editor-menu-zoom .tui-image-editor-submenu{display:table}.tui-image-editor-container .tui-image-editor-help-menu{list-style:none;padding:0;margin:0 auto;text-align:center;vertical-align:middle;border-radius:20px;background-color:hsla(0,0%,100%,.06);z-index:2;position:absolute}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history{display:none;background-color:#fff;color:#444;position:absolute;width:196px;height:276px;padding:4px 2px;-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.15);box-shadow:0 2px 6px 0 rgba(0,0,0,.15);cursor:auto;-webkit-transform:translateX(calc(-50% + 12px));transform:translateX(calc(-50% + 12px))}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list{height:268px;padding:0;overflow:hidden scroll;list-style:none}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item{height:24px;font-size:11px;line-height:24px}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item .tui-image-editor-history-item{position:relative;height:24px;cursor:pointer}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item .tui-image-editor-history-item svg{width:24px;height:24px}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item .tui-image-editor-history-item span{display:inline-block;width:128px;height:24px;text-align:left}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item .tui-image-editor-history-item .history-item-icon{display:inline-block;width:24px;height:24px;position:absolute;top:6px;left:6px}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item .tui-image-editor-history-item .history-item-checkbox{display:none;width:24px;height:24px;position:absolute;top:5px;right:-6px}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item.selected-item{background-color:hsla(0,0%,46.7%,.12)}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item.selected-item .history-item-checkbox{display:inline-block}.tui-image-editor-container .tui-image-editor-help-menu .tie-panel-history .history-list .history-item.disabled-item{color:#333;opacity:.3}.tui-image-editor-container .tui-image-editor-help-menu .opened .tie-panel-history{display:block}.tui-image-editor-container .tui-image-editor-help-menu .opened .tie-panel-history:before{content:"";position:absolute;display:inline-block;margin:0 auto;width:0;height:0}.tui-image-editor-container .filter-color-item{display:inline-block}.tui-image-editor-container .filter-color-item .tui-image-editor-checkbox{display:block}.tui-image-editor-container .tui-image-editor-checkbox-wrap{display:inline-block!important;text-align:left}.tui-image-editor-container .tui-image-editor-checkbox-wrap.fixed-width{width:187px;white-space:normal}.tui-image-editor-container .tui-image-editor-checkbox{display:inline-block;margin:1px 0}.tui-image-editor-container .tui-image-editor-checkbox input{width:14px;height:14px;opacity:0}.tui-image-editor-container .tui-image-editor-checkbox>label>span{color:#fff;height:14px;position:relative}.tui-image-editor-container .tui-image-editor-checkbox>label>span:before,.tui-image-editor-container .tui-image-editor-checkbox input+label:before{content:"";position:absolute;width:14px;height:14px;background-color:#fff;top:6px;left:-19px;display:inline-block;margin:0;text-align:center;font-size:11px;border:0;border-radius:2px;padding-top:1px;-webkit-box-sizing:border-box;box-sizing:border-box}.tui-image-editor-container .tui-image-editor-checkbox input[type=checkbox]:checked+span:before{background-size:cover;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAMBJREFUKBWVkjEOwjAMRe2WgZW7IIHEDdhghhuwcQ42rlJugAQS54Cxa5cq1QM5TUpByZfS2j9+dlJVt/tX5ZxbS4ZU9VLkQvSHKTIGRaVJYFmKrBbTCJxE2UgCdDzMZDkHrOV6b95V0US6UmgKodujEZbJg0B0ZgEModO5lrY1TMQf1TpyJGBEjD+E2NPN7ukIUDiF/BfEXgRiGEw8NgkffYGYwCi808fpn/6OvfUfsDr/Vc1IfRf8sKnFVqeiVQfDu0tf/nWH9gAAAABJRU5ErkJggg==)}.tui-image-editor-container .tui-image-editor-selectlist-wrap{position:relative}.tui-image-editor-container .tui-image-editor-selectlist-wrap select{width:100%;height:28px;margin-top:4px;outline:0;border-radius:0;border:1px solid #cbdbdb;background-color:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 7px 0 10px}.tui-image-editor-container .tui-image-editor-selectlist-wrap .tui-image-editor-selectlist{display:none;position:relative;top:-1px;border:1px solid #ccc;background-color:#fff;border-top:0;padding:4px 0}.tui-image-editor-container .tui-image-editor-selectlist-wrap .tui-image-editor-selectlist li{display:block;text-align:left;padding:7px 10px;font-family:Noto Sans,sans-serif}.tui-image-editor-container .tui-image-editor-selectlist-wrap .tui-image-editor-selectlist li:hover{background-color:rgba(81,92,230,.05)}.tui-image-editor-container .tui-image-editor-selectlist-wrap:before{content:"";position:absolute;display:inline-block;width:14px;height:14px;right:5px;top:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAHlJREFUKBVjYBgFOEOAEVkmPDxc89+/f6eAYjzI4kD2FyYmJrOVK1deh4kzwRggGiQBVJCELAZig8SQNYHEmEEEMrh69eo1HR0dfqCYJUickZGxf9WqVf3IakBsFBthklpaWmVA9mEQhrJhUoTp0NBQCRAmrHL4qgAAuu4cWZOZIGsAAAAASUVORK5CYII=);background-size:cover}.tui-image-editor-container .tui-image-editor-selectlist-wrap select::-ms-expand{display:none}.tui-image-editor-container .tui-image-editor-virtual-range-bar .tui-image-editor-disabled,.tui-image-editor-container .tui-image-editor-virtual-range-pointer .tui-image-editor-disabled,.tui-image-editor-container .tui-image-editor-virtual-range-subbar .tui-image-editor-disabled{backbround-color:red}.tui-image-editor-container .tui-image-editor-range{position:relative;top:5px;width:166px;height:17px;display:inline-block}.tui-image-editor-container .tui-image-editor-virtual-range-bar{top:7px;position:absolute;width:100%;height:2px;background-color:#666}.tui-image-editor-container .tui-image-editor-virtual-range-subbar{position:absolute;height:100%;left:0;right:0;background-color:#d1d1d1}.tui-image-editor-container .tui-image-editor-virtual-range-pointer{position:absolute;cursor:pointer;top:-5px;left:0;width:12px;height:12px;background-color:#fff;border-radius:100%}.tui-image-editor-container .tui-image-editor-range-wrap{display:inline-block;margin-left:4px}.tui-image-editor-container .tui-image-editor-range-wrap.short .tui-image-editor-range{width:100px}.tui-image-editor-container .color-picker-control .tui-image-editor-range{width:108px;margin-left:10px}.tui-image-editor-container .color-picker-control .tui-image-editor-virtual-range-pointer{background-color:#333}.tui-image-editor-container .color-picker-control .tui-image-editor-virtual-range-bar{background-color:#ccc}.tui-image-editor-container .color-picker-control .tui-image-editor-virtual-range-subbar{background-color:#606060}.tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short{margin-top:-2px;margin-left:19px}.tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label{color:#8e8e8e;font-weight:400}.tui-image-editor-container .tui-image-editor-range-wrap label{vertical-align:baseline;font-size:11px;margin-right:7px;color:#fff}.tui-image-editor-container .tui-image-editor-range-value{cursor:default;width:40px;height:24px;outline:none;border-radius:2px;-webkit-box-shadow:none;box-shadow:none;border:1px solid #d5d5d5;text-align:center;background-color:#1c1c1c;color:#fff;font-weight:lighter;vertical-align:baseline;font-family:Noto Sans,sans-serif;margin-top:15px;margin-left:4px}.tui-image-editor-container .tui-image-editor-controls{position:absolute;background-color:#151515;width:100%;height:64px;display:table;bottom:0;z-index:2}.tui-image-editor-container .tui-image-editor-icpartition{display:inline-block;background-color:#444;width:1px;height:24px}.tui-image-editor-container.left .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:before{left:28px;top:11px;border-right:7px solid #2f2f2f;border-top:7px solid transparent;border-bottom:7px solid transparent}.tui-image-editor-container.left .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:after{top:7px;left:42px;white-space:nowrap}.tui-image-editor-container.left .tui-image-editor-submenu{left:0;height:100%;width:248px}.tui-image-editor-container.left .tui-image-editor-main-container{left:64px;width:calc(100% - 64px);height:100%}.tui-image-editor-container.left .tui-image-editor-controls{width:64px;height:100%;display:table}.tui-image-editor-container.left .tui-image-editor-menu,.tui-image-editor-container.right .tui-image-editor-menu{white-space:inherit}.tui-image-editor-container.left .tui-image-editor-submenu,.tui-image-editor-container.right .tui-image-editor-submenu{white-space:normal}.tui-image-editor-container.left .tui-image-editor-submenu>div,.tui-image-editor-container.right .tui-image-editor-submenu>div{vertical-align:middle}.tui-image-editor-container.left .tui-image-editor-controls li,.tui-image-editor-container.right .tui-image-editor-controls li{display:inline-block;margin:4px auto}.tui-image-editor-container.left .tui-image-editor-icpartition,.tui-image-editor-container.right .tui-image-editor-icpartition{position:relative;top:-7px;width:24px;height:1px}.tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-partition,.tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-partition{display:block;width:75%;margin:auto}.tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-partition>div,.tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-partition>div{border-left:0;height:10px;border-bottom:1px solid #3c3c3c;width:100%;margin:0}.tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-submenu-align,.tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-submenu-align{margin-right:0}.tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-submenu-item li,.tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-submenu-item li{margin-top:15px}.tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-colorpicker-clearfix li,.tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-submenu-item .tui-colorpicker-clearfix li{margin-top:0}.tui-image-editor-container.left .tui-image-editor-checkbox-wrap.fixed-width,.tui-image-editor-container.right .tui-image-editor-checkbox-wrap.fixed-width{width:182px;white-space:normal}.tui-image-editor-container.left .tui-image-editor-range-wrap.tui-image-editor-newline label.range,.tui-image-editor-container.right .tui-image-editor-range-wrap.tui-image-editor-newline label.range{display:block;text-align:left;width:75%;margin:auto}.tui-image-editor-container.left .tui-image-editor-range,.tui-image-editor-container.right .tui-image-editor-range{width:136px}.tui-image-editor-container.right .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:before{left:-3px;top:11px;border-left:7px solid #2f2f2f;border-top:7px solid transparent;border-bottom:7px solid transparent}.tui-image-editor-container.right .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:after{top:7px;left:unset;right:43px;white-space:nowrap}.tui-image-editor-container.right .tui-image-editor-submenu{right:0;height:100%;width:248px}.tui-image-editor-container.right .tui-image-editor-main-container{right:64px;width:calc(100% - 64px);height:100%}.tui-image-editor-container.right .tui-image-editor-controls{right:0;width:64px;height:100%;display:table}.tui-image-editor-container.bottom .tui-image-editor-submenu .tui-image-editor-partition.only-left-right,.tui-image-editor-container.top .tui-image-editor-submenu .tui-image-editor-partition.only-left-right{display:none}.tui-image-editor-container.bottom .tui-image-editor-submenu>div{padding-bottom:24px}.tui-image-editor-container.top .color-picker-control .triangle{top:-8px;border-right:7px solid transparent;border-top:0;border-left:7px solid transparent;border-bottom:8px solid #fff}.tui-image-editor-container.top .tui-image-editor-size-wrap{height:100%}.tui-image-editor-container.top .tui-image-editor-main-container{bottom:0}.tui-image-editor-container.top .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:before{left:13px;border-top:0;border-bottom:7px solid #2f2f2f;top:33px}.tui-image-editor-container.top .tui-image-editor-menu>.tui-image-editor-item[tooltip-content]:after{top:38px}.tui-image-editor-container.top .tui-image-editor-submenu{top:0;bottom:auto}.tui-image-editor-container.top .tui-image-editor-submenu>div{padding-top:24px;vertical-align:top}.tui-image-editor-container.top .tui-image-editor-controls-buttons,.tui-image-editor-container.top .tui-image-editor-controls-logo{display:table-cell}.tui-image-editor-container.top .tui-image-editor-main{top:64px;height:calc(100% - 64px)}.tui-image-editor-container.top .tui-image-editor-controls{top:0;bottom:inherit}.tui-image-editor-container .tui-image-editor-help-menu.top{white-space:nowrap;width:506px;height:40px;top:8px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tui-image-editor-container .tui-image-editor-help-menu.top .tie-panel-history{top:45px}.tui-image-editor-container .tui-image-editor-help-menu.top .opened .tie-panel-history:before{border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:8px solid #fff;left:90px;top:-8px}.tui-image-editor-container .tui-image-editor-help-menu.top>.tui-image-editor-item[tooltip-content]:before{left:13px;top:35px;border:7px solid transparent;border-top:none;border-bottom:7px solid #2f2f2f}.tui-image-editor-container .tui-image-editor-help-menu.top>.tui-image-editor-item[tooltip-content]:after{top:41px;left:-4px;white-space:nowrap}.tui-image-editor-container .tui-image-editor-help-menu.top>.tui-image-editor-item[tooltip-content].opened:after,.tui-image-editor-container .tui-image-editor-help-menu.top>.tui-image-editor-item[tooltip-content].opened:before{content:none}.tui-image-editor-container .tui-image-editor-help-menu.bottom{white-space:nowrap;width:506px;height:40px;bottom:8px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tui-image-editor-container .tui-image-editor-help-menu.bottom .tie-panel-history{bottom:45px}.tui-image-editor-container .tui-image-editor-help-menu.bottom .opened .tie-panel-history:before{border-right:8px solid transparent;border-left:8px solid transparent;border-top:8px solid #fff;left:90px;bottom:-8px}.tui-image-editor-container .tui-image-editor-help-menu.bottom>.tui-image-editor-item[tooltip-content]:before{left:13px;top:auto;bottom:36px;border:7px solid transparent;border-top-color:#2f2f2f;border-bottom:none}.tui-image-editor-container .tui-image-editor-help-menu.bottom>.tui-image-editor-item[tooltip-content]:after{top:auto;left:-4px;bottom:41px;white-space:nowrap}.tui-image-editor-container .tui-image-editor-help-menu.bottom>.tui-image-editor-item[tooltip-content].opened:after,.tui-image-editor-container .tui-image-editor-help-menu.bottom>.tui-image-editor-item[tooltip-content].opened:before{content:none}.tui-image-editor-container .tui-image-editor-help-menu.left{white-space:inherit;width:40px;height:506px;left:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tui-image-editor-container .tui-image-editor-help-menu.left .tie-panel-history{left:140px;top:-4px}.tui-image-editor-container .tui-image-editor-help-menu.left .opened .tie-panel-history:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #fff;left:-8px;top:14px}.tui-image-editor-container .tui-image-editor-help-menu.left .tui-image-editor-item{margin:4px auto;padding:6px 8px}.tui-image-editor-container .tui-image-editor-help-menu.left>.tui-image-editor-item[tooltip-content]:before{left:27px;top:11px;border:7px solid transparent;border-right-color:#2f2f2f;border-left:none}.tui-image-editor-container .tui-image-editor-help-menu.left>.tui-image-editor-item[tooltip-content]:after{top:7px;left:40px;white-space:nowrap}.tui-image-editor-container .tui-image-editor-help-menu.left>.tui-image-editor-item[tooltip-content].opened:after,.tui-image-editor-container .tui-image-editor-help-menu.left>.tui-image-editor-item[tooltip-content].opened:before{content:none}.tui-image-editor-container .tui-image-editor-help-menu.right{white-space:inherit;width:40px;height:506px;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tui-image-editor-container .tui-image-editor-help-menu.right .tie-panel-history{right:-30px;top:-4px}.tui-image-editor-container .tui-image-editor-help-menu.right .opened .tie-panel-history:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #fff;right:-8px;top:14px}.tui-image-editor-container .tui-image-editor-help-menu.right .tui-image-editor-item{margin:4px auto;padding:6px 8px}.tui-image-editor-container .tui-image-editor-help-menu.right>.tui-image-editor-item[tooltip-content]:before{left:-6px;top:11px;border:7px solid transparent;border-right:none;border-left:7px solid #2f2f2f}.tui-image-editor-container .tui-image-editor-help-menu.right>.tui-image-editor-item[tooltip-content]:after{top:7px;left:auto;right:39px;white-space:nowrap}.tui-image-editor-container .tui-image-editor-help-menu.right>.tui-image-editor-item[tooltip-content].opened:after,.tui-image-editor-container .tui-image-editor-help-menu.right>.tui-image-editor-item[tooltip-content].opened:before{content:none}.tui-image-editor-container .tie-icon-add-button .tui-image-editor-button{min-width:42px}.tui-image-editor-container .svg_ic-helpmenu,.tui-image-editor-container .svg_ic-menu{width:24px;height:24px}.tui-image-editor-container .svg_ic-submenu{width:32px;height:32px}.tui-image-editor-container .svg_img-bi{width:257px;height:26px}.tui-image-editor-container .tui-image-editor-controls svg>use,.tui-image-editor-container .tui-image-editor-help-menu svg>use{display:none}.tui-image-editor-container .tui-image-editor-controls .enabled svg:hover>use.hover,.tui-image-editor-container .tui-image-editor-controls .normal svg:hover>use.hover,.tui-image-editor-container .tui-image-editor-help-menu .enabled svg:hover>use.hover,.tui-image-editor-container .tui-image-editor-help-menu .normal svg:hover>use.hover{display:block}.tui-image-editor-container .tui-image-editor-controls .active svg:hover>use.hover,.tui-image-editor-container .tui-image-editor-help-menu .active svg:hover>use.hover{display:none}.tui-image-editor-container .tui-image-editor-controls .active svg>use.active,.tui-image-editor-container .tui-image-editor-controls .enabled svg>use.enabled,.tui-image-editor-container .tui-image-editor-controls .on svg>use.hover,.tui-image-editor-container .tui-image-editor-controls .opened svg>use.hover,.tui-image-editor-container .tui-image-editor-controls svg>use.normal,.tui-image-editor-container .tui-image-editor-help-menu .active svg>use.active,.tui-image-editor-container .tui-image-editor-help-menu .enabled svg>use.enabled,.tui-image-editor-container .tui-image-editor-help-menu .on svg>use.hover,.tui-image-editor-container .tui-image-editor-help-menu .opened svg>use.hover,.tui-image-editor-container .tui-image-editor-help-menu svg>use.normal{display:block}.tui-image-editor-container .tui-image-editor-controls .active svg>use.normal,.tui-image-editor-container .tui-image-editor-controls .enabled svg>use.normal,.tui-image-editor-container .tui-image-editor-help-menu .active svg>use.normal,.tui-image-editor-container .tui-image-editor-help-menu .enabled svg>use.normal{display:none}.tui-image-editor-container .tui-image-editor-controls .help.enabled svg>use.normal,.tui-image-editor-container .tui-image-editor-controls .help svg>use.disabled,.tui-image-editor-container .tui-image-editor-help-menu .help.enabled svg>use.normal,.tui-image-editor-container .tui-image-editor-help-menu .help svg>use.disabled{display:block}.tui-image-editor-container .tui-image-editor-controls .help.enabled svg>use.disabled,.tui-image-editor-container .tui-image-editor-help-menu .help.enabled svg>use.disabled{display:none}.tui-image-editor-container .tui-image-editor-controls:hover{z-index:3}.tui-image-editor-container div.tui-colorpicker-clearfix{width:159px;height:28px;border:1px solid #d5d5d5;border-radius:2px;background-color:#f5f5f5;margin-top:6px;padding:4px 7px}.tui-image-editor-container .tui-colorpicker-palette-hex{width:114px;background-color:#f5f5f5;border:0;font-size:11px;margin-top:2px;font-family:Noto Sans,sans-serif}.tui-image-editor-container .tui-colorpicker-palette-hex[value=""]+.tui-colorpicker-palette-preview,.tui-image-editor-container .tui-colorpicker-palette-hex[value="#ffffff"]+.tui-colorpicker-palette-preview{border:1px solid #ccc}.tui-image-editor-container .tui-colorpicker-palette-hex[value=""]+.tui-colorpicker-palette-preview{background-size:cover;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAdBJREFUWAnFl0FuwjAQRZ0ukiugHqFSOQNdseuKW3ALzkA4BateICvUGyCxrtRFd4WuunH/TzykaYJrnLEYaTJJsP2+x8GZZCbQrLU5mj7Bn+EP8HvnCObd+R7xBV5lWfaNON4AnsA38E94qLEt+0yiFaBzAV/Bv+Cxxr4co7hKCDpw1q9wLeNYYdlAwyn8TYt8Hme3+8D5ozcTaMCZ68PXa2tnM2sbEcOZAJhrrpl2DAcTOGNjZPSfCdzkw6JrfbiMv+osBe4y9WOedhm4jZfhbENWuxS44H9Wz/xw4WzqLOAqh1+zycgAwzEMzr5k5gaHOa9ULBwuuDkFlHI1Kl4PJ66kgIpnoywOTmRFAYcbwYk9UMApWkD8zAV5ihcwHk4Rx7gl0IFTQL0EFc+CTQ9OZHWH3YhlVJiVpTHbrTGLhTHLZVgff6s9lyBsI9KduSS83oj+34rTwJutmBmCnMsvozRwZqB5GTkBw6/jdPDu69iJ6BYk6eCcfbcgcQIK/MByaaiMqm8rHcjol2TnpWDhyAKSGdA3FrxtJUToX0ODqatetfGE+8tyEUOV8GY5dGRwLP/MBS4RHQr4bT7NRAQjlcOTfZxmv2G+c4hI8nn+Ax5PG/zhI393AAAAAElFTkSuQmCC)}.tui-image-editor-container .tui-colorpicker-palette-preview{border-radius:100%;float:left;width:17px;height:17px;border:0}.tui-image-editor-container .color-picker-control{position:absolute;display:none;z-index:99;width:192px;background-color:#fff;-webkit-box-shadow:0 3px 22px 6px rgba(0,0,0,.15);box-shadow:0 3px 22px 6px rgba(0,0,0,.15);padding:16px;border-radius:2px}.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-toggle-slider{display:none}.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-button{border:0;border-radius:100%;margin:2px;background-size:cover;font-size:1px}.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-button[title=""],.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-button[title="#ffffff"]{border:1px solid #ccc}.tui-image-editor-container .color-picker-control .triangle{width:0;height:0;border-right:7px solid transparent;border-top:8px solid #fff;border-left:7px solid transparent;position:absolute;bottom:-8px;left:84px}.tui-image-editor-container .color-picker-control .tui-colorpicker-container,.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-container,.tui-image-editor-container .color-picker-control .tui-colorpicker-palette-container ul{width:100%;height:auto}.tui-image-editor-container .filter-color-item .color-picker-control label{font-color:#333;font-weight:400;margin-right:7pxleft}.tui-image-editor-container .filter-color-item .tui-image-editor-checkbox{margin-top:0}.tui-image-editor-container .filter-color-item .tui-image-editor-checkbox>label:before,.tui-image-editor-container .filter-color-item .tui-image-editor-checkbox input+label:before{left:-16px}.tui-image-editor-container .color-picker{width:100%;height:auto}.tui-image-editor-container .color-picker-value{width:32px;height:32px;border:0;border-radius:100%;margin:auto auto 1px}.tui-image-editor-container .color-picker-value.transparent{border:1px solid #cbcbcb;background-size:cover;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAdBJREFUWAnFl0FuwjAQRZ0ukiugHqFSOQNdseuKW3ALzkA4BateICvUGyCxrtRFd4WuunH/TzykaYJrnLEYaTJJsP2+x8GZZCbQrLU5mj7Bn+EP8HvnCObd+R7xBV5lWfaNON4AnsA38E94qLEt+0yiFaBzAV/Bv+Cxxr4co7hKCDpw1q9wLeNYYdlAwyn8TYt8Hme3+8D5ozcTaMCZ68PXa2tnM2sbEcOZAJhrrpl2DAcTOGNjZPSfCdzkw6JrfbiMv+osBe4y9WOedhm4jZfhbENWuxS44H9Wz/xw4WzqLOAqh1+zycgAwzEMzr5k5gaHOa9ULBwuuDkFlHI1Kl4PJ66kgIpnoywOTmRFAYcbwYk9UMApWkD8zAV5ihcwHk4Rx7gl0IFTQL0EFc+CTQ9OZHWH3YhlVJiVpTHbrTGLhTHLZVgff6s9lyBsI9KduSS83oj+34rTwJutmBmCnMsvozRwZqB5GTkBw6/jdPDu69iJ6BYk6eCcfbcgcQIK/MByaaiMqm8rHcjol2TnpWDhyAKSGdA3FrxtJUToX0ODqatetfGE+8tyEUOV8GY5dGRwLP/MBS4RHQr4bT7NRAQjlcOTfZxmv2G+c4hI8nn+Ax5PG/zhI393AAAAAElFTkSuQmCC)}.tui-image-editor-container .color-picker-value+label{color:#fff}.tui-image-editor-container .tui-image-editor-submenu svg>use{display:none}.tie-icon-add-button.icon-arrow-2 .tui-image-editor-button[data-icontype=icon-arrow-2] svg>use.active,.tie-icon-add-button.icon-arrow-3 .tui-image-editor-button[data-icontype=icon-arrow-3] svg>use.active,.tie-icon-add-button.icon-arrow .tui-image-editor-button[data-icontype=icon-arrow] svg>use.active,.tie-icon-add-button.icon-bubble .tui-image-editor-button[data-icontype=icon-bubble] svg>use.active,.tie-icon-add-button.icon-heart .tui-image-editor-button[data-icontype=icon-heart] svg>use.active,.tie-icon-add-button.icon-location .tui-image-editor-button[data-icontype=icon-location] svg>use.active,.tie-icon-add-button.icon-polygon .tui-image-editor-button[data-icontype=icon-polygon] svg>use.active,.tie-icon-add-button.icon-star-2 .tui-image-editor-button[data-icontype=icon-star-2] svg>use.active,.tie-icon-add-button.icon-star .tui-image-editor-button[data-icontype=icon-star] svg>use.active,.tui-image-editor-container .tui-image-editor-submenu svg>use.normal{display:block}.tie-draw-line-select-button.free .tui-image-editor-button.free svg>use.normal,.tie-draw-line-select-button.line .tui-image-editor-button.line svg>use.normal{display:none}.tie-draw-line-select-button.free .tui-image-editor-button.free svg>use.active,.tie-draw-line-select-button.line .tui-image-editor-button.line svg>use.active{display:block}.tie-flip-button.flipX .tui-image-editor-button.flipX svg>use.normal,.tie-flip-button.flipY .tui-image-editor-button.flipY svg>use.normal,.tie-flip-button.resetFlip .tui-image-editor-button.resetFlip svg>use.normal{display:none}.tie-flip-button.flipX .tui-image-editor-button.flipX svg>use.active,.tie-flip-button.flipY .tui-image-editor-button.flipY svg>use.active,.tie-flip-button.resetFlip .tui-image-editor-button.resetFlip svg>use.active{display:block}.tie-mask-apply.apply.active .tui-image-editor-button.apply label{color:#fff}.tie-mask-apply.apply.active .tui-image-editor-button.apply svg>use.active{display:block}.tie-crop-button .tui-image-editor-button.apply,.tie-crop-preset-button .tui-image-editor-button.apply{margin-right:24px}.tie-crop-button .tui-image-editor-button.apply.active svg>use.active,.tie-crop-button .tui-image-editor-button.preset.active svg>use.active,.tie-crop-preset-button .tui-image-editor-button.apply.active svg>use.active,.tie-crop-preset-button .tui-image-editor-button.preset.active svg>use.active{display:block}.tie-resize-button .tui-image-editor-button.apply,.tie-resize-preset-button .tui-image-editor-button.apply{margin-right:24px}.tie-resize-button .tui-image-editor-button.apply.active svg>use.active,.tie-resize-button .tui-image-editor-button.preset.active svg>use.active,.tie-resize-preset-button .tui-image-editor-button.apply.active svg>use.active,.tie-resize-preset-button .tui-image-editor-button.preset.active svg>use.active{display:block}.tie-shape-button.circle .tui-image-editor-button.circle svg>use.normal,.tie-shape-button.rect .tui-image-editor-button.rect svg>use.normal,.tie-shape-button.triangle .tui-image-editor-button.triangle svg>use.normal{display:none}.tie-shape-button.circle .tui-image-editor-button.circle svg>use.active,.tie-shape-button.rect .tui-image-editor-button.rect svg>use.active,.tie-shape-button.triangle .tui-image-editor-button.triangle svg>use.active,.tie-text-align-button.tie-text-align-center .tui-image-editor-button.center svg>use.active,.tie-text-align-button.tie-text-align-left .tui-image-editor-button.left svg>use.active,.tie-text-align-button.tie-text-align-right .tui-image-editor-button.right svg>use.active,.tie-text-effect-button .tui-image-editor-button.active svg>use.active{display:block}.tie-icon-image-file,.tie-mask-image-file{opacity:0;position:absolute;width:100%;height:100%;border:1px solid green;cursor:inherit;left:0;top:0}.tie-zoom-button.flipX .tui-image-editor-button.flipX svg>use.normal,.tie-zoom-button.flipY .tui-image-editor-button.flipY svg>use.normal,.tie-zoom-button.resetFlip .tui-image-editor-button.resetFlip svg>use.normal{display:none}.tie-zoom-button.flipX .tui-image-editor-button.flipX svg>use.active,.tie-zoom-button.flipY .tui-image-editor-button.flipY svg>use.active,.tie-zoom-button.resetFlip .tui-image-editor-button.resetFlip svg>use.active{display:block}.tui-image-editor-container.top.tui-image-editor-top-optimization .tui-image-editor-controls ul{text-align:right}.tui-image-editor-container.top.tui-image-editor-top-optimization .tui-image-editor-controls-logo{display:none}',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    (e.byteLength = function (t) {
      var e = c(t),
        n = e[0],
        i = e[1];
      return (3 * (n + i)) / 4 - i;
    }),
      (e.toByteArray = function (t) {
        var e,
          n,
          i = c(t),
          a = i[0],
          s = i[1],
          l = new o(
            (function (t, e, n) {
              return (3 * (e + n)) / 4 - n;
            })(0, a, s)
          ),
          d = 0,
          u = s > 0 ? a - 4 : a;
        for (n = 0; n < u; n += 4)
          (e =
            (r[t.charCodeAt(n)] << 18) |
            (r[t.charCodeAt(n + 1)] << 12) |
            (r[t.charCodeAt(n + 2)] << 6) |
            r[t.charCodeAt(n + 3)]),
            (l[d++] = (e >> 16) & 255),
            (l[d++] = (e >> 8) & 255),
            (l[d++] = 255 & e);
        return (
          2 === s &&
            ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)),
            (l[d++] = 255 & e)),
          1 === s &&
            ((e =
              (r[t.charCodeAt(n)] << 10) |
              (r[t.charCodeAt(n + 1)] << 4) |
              (r[t.charCodeAt(n + 2)] >> 2)),
            (l[d++] = (e >> 8) & 255),
            (l[d++] = 255 & e)),
          l
        );
      }),
      (e.fromByteArray = function (t) {
        for (
          var e, n = t.length, r = n % 3, o = [], a = 0, s = n - r;
          a < s;
          a += 16383
        )
          o.push(d(t, a, a + 16383 > s ? s : a + 16383));
        return (
          1 === r
            ? ((e = t[n - 1]), o.push(i[e >> 2] + i[(e << 4) & 63] + "=="))
            : 2 === r &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(i[e >> 10] + i[(e >> 4) & 63] + i[(e << 2) & 63] + "=")),
          o.join("")
        );
      });
    for (
      var i = [],
        r = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        l = a.length;
      s < l;
      ++s
    )
      (i[s] = a[s]), (r[a.charCodeAt(s)] = s);
    function c(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
    }
    function d(t, e, n) {
      for (var r, o, a = [], s = e; s < n; s += 3)
        (r =
          ((t[s] << 16) & 16711680) +
          ((t[s + 1] << 8) & 65280) +
          (255 & t[s + 2])),
          a.push(
            i[((o = r) >> 18) & 63] +
              i[(o >> 12) & 63] +
              i[(o >> 6) & 63] +
              i[63 & o]
          );
      return a.join("");
    }
    (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
  },
  function (t, e) {
    (e.read = function (t, e, n, i, r) {
      var o,
        a,
        s = 8 * r - i - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        d = -7,
        u = n ? r - 1 : 0,
        p = n ? -1 : 1,
        h = t[e + u];
      for (
        u += p, o = h & ((1 << -d) - 1), h >>= -d, d += s;
        d > 0;
        o = 256 * o + t[e + u], u += p, d -= 8
      );
      for (
        a = o & ((1 << -d) - 1), o >>= -d, d += i;
        d > 0;
        a = 256 * a + t[e + u], u += p, d -= 8
      );
      if (0 === o) o = 1 - c;
      else {
        if (o === l) return a ? NaN : (1 / 0) * (h ? -1 : 1);
        (a += Math.pow(2, i)), (o -= c);
      }
      return (h ? -1 : 1) * a * Math.pow(2, o - i);
    }),
      (e.write = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          c = 8 * o - r - 1,
          d = (1 << c) - 1,
          u = d >> 1,
          p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = i ? 0 : o - 1,
          f = i ? 1 : -1,
          b = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((s = isNaN(e) ? 1 : 0), (a = d))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                (e += a + u >= 1 ? p / l : p * Math.pow(2, 1 - u)) * l >= 2 &&
                  (a++, (l /= 2)),
                a + u >= d
                  ? ((s = 0), (a = d))
                  : a + u >= 1
                  ? ((s = (e * l - 1) * Math.pow(2, r)), (a += u))
                  : ((s = e * Math.pow(2, u - 1) * Math.pow(2, r)), (a = 0)));
          r >= 8;
          t[n + h] = 255 & s, h += f, s /= 256, r -= 8
        );
        for (
          a = (a << r) | s, c += r;
          c > 0;
          t[n + h] = 255 & a, h += f, a /= 256, c -= 8
        );
        t[n + h - f] |= 128 * b;
      });
  },
  function (t, e) {
    var n = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == n.call(t);
      };
  },
  function (t, e, n) {
    var i;
    window,
      (i = function () {
        return (function (t) {
          var e = {};
          function n(i) {
            if (e[i]) return e[i].exports;
            var r = (e[i] = { i: i, l: !1, exports: {} });
            return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, i) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var i = Object.create(null);
              if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var r in t)
                  n.d(
                    i,
                    r,
                    function (e) {
                      return t[e];
                    }.bind(null, r)
                  );
              return i;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = "dist"),
            n((n.s = 33))
          );
        })([
          function (t, e, n) {
            "use strict";
            t.exports = function (t, e) {
              var n,
                i,
                r,
                o,
                a = Object.prototype.hasOwnProperty;
              for (r = 1, o = arguments.length; r < o; r += 1)
                for (i in (n = arguments[r])) a.call(n, i) && (t[i] = n[i]);
              return t;
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return t instanceof Array;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(1),
              r = n(6),
              o = n(7);
            t.exports = function (t, e, n) {
              i(t) ? r(t, e, n) : o(t, e, n);
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return void 0 === t;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(22),
              r = n(2),
              o = n(6),
              a = n(7),
              s = n(37),
              l = 0,
              c = {
                getLength: function (t) {
                  var e = 0;
                  return (
                    a(t, function () {
                      e += 1;
                    }),
                    e
                  );
                },
                map: function (t, e, n) {
                  var i = [];
                  return (
                    r(t, function () {
                      i.push(e.apply(n || null, arguments));
                    }),
                    i
                  );
                },
                filter: function (t, e, n) {
                  var i = [];
                  return (
                    o(t, function (t) {
                      e.apply(n || null, arguments) && i.push(t);
                    }),
                    i
                  );
                },
                generateId: function () {
                  return (l += 1);
                },
                isOldBrowser: i.msie && i.version < 9,
                sendHostName: function () {
                  s("color-picker", "UA-129987462-1");
                },
              };
            t.exports = c;
          },
          function (t, e, n) {
            "use strict";
            var i = n(1);
            t.exports = function (t, e, n) {
              var r, o;
              if (((n = n || 0), !i(e))) return -1;
              if (Array.prototype.indexOf)
                return Array.prototype.indexOf.call(e, t, n);
              for (o = e.length, r = n; n >= 0 && r < o; r += 1)
                if (e[r] === t) return r;
              return -1;
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t, e, n) {
              var i = 0,
                r = t.length;
              for (
                n = n || null;
                i < r && !1 !== e.call(n, t[i], i, t);
                i += 1
              );
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t, e, n) {
              var i;
              for (i in ((n = n || null), t))
                if (t.hasOwnProperty(i) && !1 === e.call(n, t[i], i, t)) break;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(39),
              r = n(13),
              o = n(41),
              a = n(3),
              s = n(9),
              l = n(19),
              c = n(4);
            function d(t, e) {
              var n = c.generateId();
              (t = t || {}),
                a(e) && (e = s.appendHTMLElement("div")),
                i(e, "tui-view-" + n),
                (this.id = n),
                (this.container = e),
                (this.childs = new l(function (t) {
                  return t.id;
                })),
                (this.parent = null);
            }
            (d.prototype.addChild = function (t, e) {
              e && e.call(t, this), (t.parent = this), this.childs.add(t);
            }),
              (d.prototype.removeChild = function (t, e) {
                var n = o(t) ? this.childs.items[t] : t;
                e && e.call(n, this), this.childs.remove(n.id);
              }),
              (d.prototype.render = function () {
                this.childs.each(function (t) {
                  t.render();
                });
              }),
              (d.prototype.recursive = function (t, e) {
                r(t) &&
                  (e || t(this),
                  this.childs.each(function (e) {
                    e.recursive(t);
                  }));
              }),
              (d.prototype.resize = function () {
                for (
                  var t = Array.prototype.slice.call(arguments),
                    e = this.parent;
                  e;

                )
                  r(e._onResize) && e._onResize.apply(e, t), (e = e.parent);
              }),
              (d.prototype._beforeDestroy = function () {}),
              (d.prototype._destroy = function () {
                this._beforeDestroy(),
                  (this.container.innerHTML = ""),
                  (this.id = this.parent = this.childs = this.container = null);
              }),
              (d.prototype.destroy = function (t) {
                this.childs &&
                  (this.childs.each(function (t) {
                    t.destroy(!0), t._destroy();
                  }),
                  this.childs.clear()),
                  t || this._destroy();
              }),
              (d.prototype.getViewBound = function () {
                var t = this.container.getBoundingClientRect();
                return {
                  x: t.left,
                  y: t.top,
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                };
              }),
              (t.exports = d);
          },
          function (t, e, n) {
            "use strict";
            var i = {
              appendHTMLElement: function (t, e, n) {
                var i = document.createElement(t);
                return (
                  (i.className = n || ""),
                  e ? e.appendChild(i) : document.body.appendChild(i),
                  i
                );
              },
            };
            t.exports = i;
          },
          function (t, e, n) {
            "use strict";
            var i = n(0),
              r = n(20),
              o = n(11),
              a = n(21),
              s = n(1),
              l = n(13),
              c = n(2),
              d = /\s+/g;
            function u() {
              (this.events = null), (this.contexts = null);
            }
            (u.mixin = function (t) {
              i(t.prototype, u.prototype);
            }),
              (u.prototype._getHandlerItem = function (t, e) {
                var n = { handler: t };
                return e && (n.context = e), n;
              }),
              (u.prototype._safeEvent = function (t) {
                var e,
                  n = this.events;
                return (
                  n || (n = this.events = {}),
                  t && ((e = n[t]) || ((e = []), (n[t] = e)), (n = e)),
                  n
                );
              }),
              (u.prototype._safeContext = function () {
                var t = this.contexts;
                return t || (t = this.contexts = []), t;
              }),
              (u.prototype._indexOfContext = function (t) {
                for (var e = this._safeContext(), n = 0; e[n]; ) {
                  if (t === e[n][0]) return n;
                  n += 1;
                }
                return -1;
              }),
              (u.prototype._memorizeContext = function (t) {
                var e, n;
                r(t) &&
                  ((e = this._safeContext()),
                  (n = this._indexOfContext(t)) > -1
                    ? (e[n][1] += 1)
                    : e.push([t, 1]));
              }),
              (u.prototype._forgetContext = function (t) {
                var e, n;
                r(t) &&
                  ((e = this._safeContext()),
                  (n = this._indexOfContext(t)) > -1 &&
                    ((e[n][1] -= 1), e[n][1] <= 0 && e.splice(n, 1)));
              }),
              (u.prototype._bindEvent = function (t, e, n) {
                var i = this._safeEvent(t);
                this._memorizeContext(n), i.push(this._getHandlerItem(e, n));
              }),
              (u.prototype.on = function (t, e, n) {
                var i = this;
                o(t)
                  ? ((t = t.split(d)),
                    c(t, function (t) {
                      i._bindEvent(t, e, n);
                    }))
                  : a(t) &&
                    ((n = e),
                    c(t, function (t, e) {
                      i.on(e, t, n);
                    }));
              }),
              (u.prototype.once = function (t, e, n) {
                var i = this;
                if (a(t))
                  return (
                    (n = e),
                    void c(t, function (t, e) {
                      i.once(e, t, n);
                    })
                  );
                this.on(
                  t,
                  function r() {
                    e.apply(n, arguments), i.off(t, r, n);
                  },
                  n
                );
              }),
              (u.prototype._spliceMatches = function (t, e) {
                var n,
                  i = 0;
                if (s(t))
                  for (n = t.length; i < n; i += 1)
                    !0 === e(t[i]) && (t.splice(i, 1), (n -= 1), (i -= 1));
              }),
              (u.prototype._matchHandler = function (t) {
                var e = this;
                return function (n) {
                  var i = t === n.handler;
                  return i && e._forgetContext(n.context), i;
                };
              }),
              (u.prototype._matchContext = function (t) {
                var e = this;
                return function (n) {
                  var i = t === n.context;
                  return i && e._forgetContext(n.context), i;
                };
              }),
              (u.prototype._matchHandlerAndContext = function (t, e) {
                var n = this;
                return function (i) {
                  var r = t === i.handler,
                    o = e === i.context,
                    a = r && o;
                  return a && n._forgetContext(i.context), a;
                };
              }),
              (u.prototype._offByEventName = function (t, e) {
                var n = this,
                  i = l(e),
                  r = n._matchHandler(e);
                (t = t.split(d)),
                  c(t, function (t) {
                    var e = n._safeEvent(t);
                    i
                      ? n._spliceMatches(e, r)
                      : (c(e, function (t) {
                          n._forgetContext(t.context);
                        }),
                        (n.events[t] = []));
                  });
              }),
              (u.prototype._offByHandler = function (t) {
                var e = this,
                  n = this._matchHandler(t);
                c(this._safeEvent(), function (t) {
                  e._spliceMatches(t, n);
                });
              }),
              (u.prototype._offByObject = function (t, e) {
                var n,
                  i = this;
                this._indexOfContext(t) < 0
                  ? c(t, function (t, e) {
                      i.off(e, t);
                    })
                  : o(e)
                  ? ((n = this._matchContext(t)),
                    i._spliceMatches(this._safeEvent(e), n))
                  : l(e)
                  ? ((n = this._matchHandlerAndContext(e, t)),
                    c(this._safeEvent(), function (t) {
                      i._spliceMatches(t, n);
                    }))
                  : ((n = this._matchContext(t)),
                    c(this._safeEvent(), function (t) {
                      i._spliceMatches(t, n);
                    }));
              }),
              (u.prototype.off = function (t, e) {
                o(t)
                  ? this._offByEventName(t, e)
                  : arguments.length
                  ? l(t)
                    ? this._offByHandler(t)
                    : a(t) && this._offByObject(t, e)
                  : ((this.events = {}), (this.contexts = []));
              }),
              (u.prototype.fire = function (t) {
                this.invoke.apply(this, arguments);
              }),
              (u.prototype.invoke = function (t) {
                var e, n, i, r;
                if (!this.hasListener(t)) return !0;
                for (
                  e = this._safeEvent(t),
                    n = Array.prototype.slice.call(arguments, 1),
                    i = 0;
                  e[i];

                ) {
                  if (!1 === (r = e[i]).handler.apply(r.context, n)) return !1;
                  i += 1;
                }
                return !0;
              }),
              (u.prototype.hasListener = function (t) {
                return this.getListenerLength(t) > 0;
              }),
              (u.prototype.getListenerLength = function (t) {
                return this._safeEvent(t).length;
              }),
              (t.exports = u);
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return "string" == typeof t || t instanceof String;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
              r = {
                leadingZero: function (t, e) {
                  var n = "",
                    i = 0;
                  if ((t + "").length > e) return t + "";
                  for (; i < e - 1; i += 1) n += "0";
                  return (n + t).slice(-1 * e);
                },
                isValidRGB: function (t) {
                  return i.test(t);
                },
                hexToRGB: function (t) {
                  return (
                    !!r.isValidRGB(t) &&
                    ((t = t.substring(1)),
                    [
                      parseInt(t.substr(0, 2), 16),
                      parseInt(t.substr(2, 2), 16),
                      parseInt(t.substr(4, 2), 16),
                    ])
                  );
                },
                rgbToHEX: function (t, e, n) {
                  var i =
                    "#" +
                    r.leadingZero(t.toString(16), 2) +
                    r.leadingZero(e.toString(16), 2) +
                    r.leadingZero(n.toString(16), 2);
                  return !!r.isValidRGB(i) && i;
                },
                rgbToHSV: function (t, e, n) {
                  var i, r, o, a, s, l;
                  if (
                    ((t /= 255),
                    (e /= 255),
                    (n /= 255),
                    (s = i = Math.max(t, e, n)),
                    (l = i - (r = Math.min(t, e, n))),
                    (a = 0 === i ? 0 : l / i),
                    i === r)
                  )
                    o = 0;
                  else {
                    switch (i) {
                      case t:
                        o = (e - n) / l + (e < n ? 6 : 0);
                        break;
                      case e:
                        o = (n - t) / l + 2;
                        break;
                      case n:
                        o = (t - e) / l + 4;
                    }
                    o /= 6;
                  }
                  return [
                    Math.round(360 * o),
                    Math.round(100 * a),
                    Math.round(100 * s),
                  ];
                },
                hsvToRGB: function (t, e, n) {
                  var i, r, o, a, s, l, c, d;
                  if (
                    ((t = Math.max(0, Math.min(360, t))),
                    (e = Math.max(0, Math.min(100, e))),
                    (n = Math.max(0, Math.min(100, n))),
                    (n /= 100),
                    0 == (e /= 100))
                  )
                    return (
                      (i = r = o = n),
                      [
                        Math.round(255 * i),
                        Math.round(255 * r),
                        Math.round(255 * o),
                      ]
                    );
                  switch (
                    ((l = n * (1 - e)),
                    (c = n * (1 - e * (s = (t /= 60) - (a = Math.floor(t))))),
                    (d = n * (1 - e * (1 - s))),
                    a)
                  ) {
                    case 0:
                      (i = n), (r = d), (o = l);
                      break;
                    case 1:
                      (i = c), (r = n), (o = l);
                      break;
                    case 2:
                      (i = l), (r = n), (o = d);
                      break;
                    case 3:
                      (i = l), (r = c), (o = n);
                      break;
                    case 4:
                      (i = d), (r = l), (o = n);
                      break;
                    default:
                      (i = n), (r = l), (o = c);
                  }
                  return [
                    Math.round(255 * i),
                    Math.round(255 * r),
                    Math.round(255 * o),
                  ];
                },
              };
            t.exports = r;
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return t instanceof Function;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(11),
              r = n(2),
              o = n(26);
            function a(t, e, n, i) {
              function a(e) {
                n.call(i || t, e || window.event);
              }
              "addEventListener" in t
                ? t.addEventListener(e, a)
                : "attachEvent" in t && t.attachEvent("on" + e, a),
                (function (t, e, n, i) {
                  var a = o(t, e),
                    s = !1;
                  r(a, function (t) {
                    return t.handler !== n || ((s = !0), !1);
                  }),
                    s || a.push({ handler: n, wrappedHandler: i });
                })(t, e, n, a);
            }
            t.exports = function (t, e, n, o) {
              i(e)
                ? r(e.split(/\s+/g), function (e) {
                    a(t, e, n, o);
                  })
                : r(e, function (e, i) {
                    a(t, i, e, n);
                  });
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
              });
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(11),
              r = n(2),
              o = n(26);
            function a(t, e, n) {
              var i,
                a = o(t, e);
              n
                ? (r(a, function (r, o) {
                    return (
                      n !== r.handler ||
                      (s(t, e, r.wrappedHandler), (i = o), !1)
                    );
                  }),
                  a.splice(i, 1))
                : (r(a, function (n) {
                    s(t, e, n.wrappedHandler);
                  }),
                  a.splice(0, a.length));
            }
            function s(t, e, n) {
              "removeEventListener" in t
                ? t.removeEventListener(e, n)
                : "detachEvent" in t && t.detachEvent("on" + e, n);
            }
            t.exports = function (t, e, n) {
              i(e)
                ? r(e.split(/\s+/g), function (e) {
                    a(t, e, n);
                  })
                : r(e, function (e, n) {
                    a(t, n, e);
                  });
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(50);
            t.exports = function (t, e) {
              var n = i(e.prototype);
              (n.constructor = t), (t.prototype = n);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(6),
              r = n(7),
              o = n(0),
              a = n(1),
              s = n(20),
              l = n(13),
              c = n(21),
              d = n(4),
              u = Array.prototype.slice;
            function p(t) {
              (this.items = {}),
                (this.length = 0),
                l(t) && (this.getItemID = t);
            }
            (p.and = function (t) {
              var e;
              return (
                (t = u.call(arguments)),
                (e = t.length),
                function (n) {
                  for (var i = 0; i < e; i += 1)
                    if (!t[i].call(null, n)) return !1;
                  return !0;
                }
              );
            }),
              (p.or = function (t) {
                var e;
                return (
                  (t = u.call(arguments)),
                  (e = t.length),
                  function (n) {
                    for (var i = 1, r = t[0].call(null, n); i < e; i += 1)
                      r = r || t[i].call(null, n);
                    return r;
                  }
                );
              }),
              (p.merge = function (t) {
                var e = {},
                  n = new p(t.getItemID);
                return (
                  i(arguments, function (t) {
                    o(e, t.items);
                  }),
                  (n.items = e),
                  (n.length = d.getLength(n.items)),
                  n
                );
              }),
              (p.prototype.getItemID = function (t) {
                return t._id + "";
              }),
              (p.prototype.add = function (t) {
                var e, n;
                arguments.length > 1
                  ? i(
                      u.call(arguments),
                      function (t) {
                        this.add(t);
                      },
                      this
                    )
                  : ((e = this.getItemID(t)),
                    (n = this.items)[e] || (this.length += 1),
                    (n[e] = t));
              }),
              (p.prototype.remove = function (t) {
                var e,
                  n,
                  i = [];
                return this.length
                  ? arguments.length > 1
                    ? (i = d.map(
                        u.call(arguments),
                        function (t) {
                          return this.remove(t);
                        },
                        this
                      ))
                    : ((e = this.items),
                      c(t) && (t = this.getItemID(t)),
                      e[t]
                        ? ((this.length -= 1), (n = e[t]), delete e[t], n)
                        : i)
                  : i;
              }),
              (p.prototype.clear = function () {
                (this.items = {}), (this.length = 0);
              }),
              (p.prototype.has = function (t) {
                var e, n;
                return (
                  !!this.length &&
                  ((e = l(t)),
                  (n = !1),
                  e
                    ? this.each(function (e) {
                        return !0 !== t(e) || ((n = !0), !1);
                      })
                    : ((t = c(t) ? this.getItemID(t) : t),
                      (n = s(this.items[t]))),
                  n)
                );
              }),
              (p.prototype.doWhenHas = function (t, e, n) {
                var i = this.items[t];
                s(i) && e.call(n || this, i);
              }),
              (p.prototype.find = function (t) {
                var e = new p();
                return (
                  this.hasOwnProperty("getItemID") &&
                    (e.getItemID = this.getItemID),
                  this.each(function (n) {
                    !0 === t(n) && e.add(n);
                  }),
                  e
                );
              }),
              (p.prototype.groupBy = function (t, e) {
                var n,
                  r,
                  o = {},
                  s = l(t),
                  c = this.getItemID;
                if (a(t)) {
                  if (
                    (i(t, function (t) {
                      o[t + ""] = new p(c);
                    }),
                    !e)
                  )
                    return o;
                  (t = e), (s = !0);
                }
                return (
                  this.each(function (e) {
                    s ? (r = t(e)) : ((r = e[t]), l(r) && (r = r.apply(e))),
                      (n = o[r]) || (n = o[r] = new p(c)),
                      n.add(e);
                  }),
                  o
                );
              }),
              (p.prototype.single = function () {
                var t;
                return (
                  this.each(function (e) {
                    return (t = e), !1;
                  }, this),
                  t
                );
              }),
              (p.prototype.sort = function (t) {
                var e = [];
                return (
                  this.each(function (t) {
                    e.push(t);
                  }),
                  l(t) && (e = e.sort(t)),
                  e
                );
              }),
              (p.prototype.each = function (t, e) {
                r(this.items, t, e || this);
              }),
              (p.prototype.toArray = function () {
                return this.length
                  ? d.map(this.items, function (t) {
                      return t;
                    })
                  : [];
              }),
              (t.exports = p);
          },
          function (t, e, n) {
            "use strict";
            var i = n(3),
              r = n(36);
            t.exports = function (t) {
              return !i(t) && !r(t);
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return t === Object(t);
            };
          },
          function (t, e, n) {
            "use strict";
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              d,
              u,
              p,
              h = {
                chrome: !1,
                firefox: !1,
                safari: !1,
                msie: !1,
                edge: !1,
                others: !1,
                version: 0,
              };
            "undefined" != typeof window &&
              window.navigator &&
              ((a = (o = window.navigator).appName.replace(/\s/g, "_")),
              (s = o.userAgent),
              (l = /MSIE\s([0-9]+[.0-9]*)/),
              (c = /Trident.*rv:11\./),
              (d = /Edge\/(\d+)\./),
              (u = {
                firefox: /Firefox\/(\d+)\./,
                chrome: /Chrome\/(\d+)\./,
                safari: /Version\/([\d.]+).*Safari\/(\d+)/,
              }),
              (p = {
                Microsoft_Internet_Explorer: function () {
                  var t = s.match(l);
                  t
                    ? ((h.msie = !0), (h.version = parseFloat(t[1])))
                    : (h.others = !0);
                },
                Netscape: function () {
                  var t = !1;
                  if (c.exec(s)) (h.msie = !0), (h.version = 11), (t = !0);
                  else if (d.exec(s))
                    (h.edge = !0), (h.version = s.match(d)[1]), (t = !0);
                  else
                    for (i in u)
                      if (
                        u.hasOwnProperty(i) &&
                        (r = s.match(u[i])) &&
                        r.length > 1
                      ) {
                        (h[i] = t = !0), (h.version = parseFloat(r[1] || 0));
                        break;
                      }
                  t || (h.others = !0);
                },
              })[a] && p[a]()),
              (t.exports = h);
          },
          function (t, e, n) {
            "use strict";
            var i = n(3);
            t.exports = function (t) {
              return t && t.className
                ? i(t.className.baseVal)
                  ? t.className
                  : t.className.baseVal
                : "";
            };
          },
          function (t, e, n) {
            "use strict";
            (function (e) {
              var i = n(10),
                r = n(42),
                o = n(44),
                a = n(47),
                s = n(28),
                l = n(17),
                c = n(14),
                d = n(15),
                u = n(0);
              function p(t, e) {
                c(e, "mousedown", this._onMouseDown, this),
                  (this.options = u({ distance: 10 }, t)),
                  (this.container = e),
                  (this._isMoved = !1),
                  (this._distance = 0),
                  (this._dragStartFired = !1),
                  (this._dragStartEventData = null);
              }
              (p.prototype.destroy = function () {
                l(this.container, "mousedown", this._onMouseDown),
                  (this.options =
                    this.container =
                    this._isMoved =
                    this._distance =
                    this._dragStartFired =
                    this._dragStartEventData =
                      null);
              }),
                (p.prototype._toggleDragEvent = function (t) {
                  var n = this.container;
                  t
                    ? (r(n),
                      c(window, "dragstart", d),
                      c(
                        e.document,
                        {
                          mousemove: this._onMouseMove,
                          mouseup: this._onMouseUp,
                        },
                        this
                      ))
                    : (o(n),
                      l(window, "dragstart", d),
                      l(e.document, {
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                      }));
                }),
                (p.prototype._getEventData = function (t) {
                  return { target: s(t), originEvent: t };
                }),
                (p.prototype._onMouseDown = function (t) {
                  0 === a(t) &&
                    ((this._distance = 0),
                    (this._dragStartFired = !1),
                    (this._dragStartEventData = this._getEventData(t)),
                    this._toggleDragEvent(!0));
                }),
                (p.prototype._onMouseMove = function (t) {
                  var e = this.options.distance;
                  d(t),
                    (this._isMoved = !0),
                    this._distance < e
                      ? (this._distance += 1)
                      : this._dragStartFired ||
                        ((this._dragStartFired = !0),
                        this.invoke("dragStart", this._dragStartEventData))
                      ? this.fire("drag", this._getEventData(t))
                      : this._toggleDragEvent(!1);
                }),
                (p.prototype._onMouseUp = function (t) {
                  if ((this._toggleDragEvent(!1), this._isMoved))
                    return (
                      (this._isMoved = !1),
                      void this.fire("dragEnd", this._getEventData(t))
                    );
                  this.fire("click", this._getEventData(t));
                }),
                i.mixin(p),
                (t.exports = p);
            }).call(this, n(25));
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function("return this")();
            } catch (t) {
              "object" == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t, e) {
              var n,
                i = t._feEventKey;
              return (
                i || (i = t._feEventKey = {}), (n = i[e]) || (n = i[e] = []), n
              );
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              var e,
                n,
                i = document.documentElement.style;
              for (e = 0, n = t.length; e < n; e += 1)
                if (t[e] in i) return t[e];
              return !1;
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return t.target || t.srcElement;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(10),
              r = n(28),
              o = n(17),
              a = n(14),
              s = n(30),
              l = n(0),
              c = n(18),
              d = n(9),
              u = n(12),
              p = n(8),
              h = n(51);
            function f(t, e) {
              (this.options = l(
                {
                  cssPrefix: "tui-colorpicker-",
                  preset: [
                    "#181818",
                    "#282828",
                    "#383838",
                    "#585858",
                    "#B8B8B8",
                    "#D8D8D8",
                    "#E8E8E8",
                    "#F8F8F8",
                    "#AB4642",
                    "#DC9656",
                    "#F7CA88",
                    "#A1B56C",
                    "#86C1B9",
                    "#7CAFC2",
                    "#BA8BAF",
                    "#A16946",
                  ],
                  detailTxt: "Detail",
                },
                t
              )),
                (e = d.appendHTMLElement(
                  "div",
                  e,
                  this.options.cssPrefix + "palette-container"
                )),
                p.call(this, t, e);
            }
            c(f, p),
              (f.prototype._onClick = function (t) {
                var e = this.options,
                  n = r(t),
                  i = {};
                if (s(n, e.cssPrefix + "palette-button"))
                  return (i.color = n.value), void this.fire("_selectColor", i);
                s(n, e.cssPrefix + "palette-toggle-slider") &&
                  this.fire("_toggleSlider");
              }),
              (f.prototype._onChange = function (t) {
                var e = this.options,
                  n = r(t),
                  i = {};
                s(n, e.cssPrefix + "palette-hex") &&
                  ((i.color = n.value), this.fire("_selectColor", i));
              }),
              (f.prototype._beforeDestroy = function () {
                this._toggleEvent(!1);
              }),
              (f.prototype._toggleEvent = function (t) {
                var e,
                  n = this.options,
                  i = this.container,
                  r = t ? a : o;
                r(i, "click", this._onClick, this),
                  (e = i.querySelector("." + n.cssPrefix + "palette-hex", i)) &&
                    r(e, "change", this._onChange, this);
              }),
              (f.prototype.render = function (t) {
                var e,
                  n = this.options;
                this._toggleEvent(!1),
                  (e = h({
                    cssPrefix: n.cssPrefix,
                    preset: n.preset,
                    detailTxt: n.detailTxt,
                    color: t,
                    isValidRGB: u.isValidRGB,
                    getItemClass: function (t) {
                      return t ? "" : " " + n.cssPrefix + "color-transparent";
                    },
                    isSelected: function (e) {
                      return e === t ? " " + n.cssPrefix + "selected" : "";
                    },
                  })),
                  (this.container.innerHTML = e),
                  this._toggleEvent(!0);
              }),
              i.mixin(f),
              (t.exports = f);
          },
          function (t, e, n) {
            "use strict";
            var i = n(5),
              r = n(23);
            t.exports = function (t, e) {
              var n;
              return t.classList
                ? t.classList.contains(e)
                : ((n = r(t).split(/\s+/)), i(e, n) > -1);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(10),
              r = n(53),
              o = n(54),
              a = n(30),
              s = n(0),
              l = n(18),
              c = n(9),
              d = n(32),
              u = n(12),
              p = n(8),
              h = n(24),
              f = n(57);
            function b(t, e) {
              ((e = c.appendHTMLElement(
                "div",
                e,
                t.cssPrefix + "slider-container"
              )).style.display = "none"),
                p.call(this, t, e),
                (this.options = s(
                  { color: "#f8f8f8", cssPrefix: "tui-colorpicker-" },
                  t
                )),
                (this._dragDataCache = {}),
                (this.sliderHandleElement = null),
                (this.huebarHandleElement = null),
                (this.baseColorElement = null),
                (this.drag = new h({ distance: 0 }, e)),
                (this.colorSliderPosLimitRange = [-7, 112]),
                (this.huebarPosLimitRange = [-3, 115]),
                this.drag.on(
                  {
                    dragStart: this._onDragStart,
                    drag: this._onDrag,
                    dragEnd: this._onDragEnd,
                    click: this._onClick,
                  },
                  this
                );
            }
            l(b, p),
              (b.prototype._beforeDestroy = function () {
                this.drag.off(),
                  (this.drag =
                    this.options =
                    this._dragDataCache =
                    this.sliderHandleElement =
                    this.huebarHandleElement =
                    this.baseColorElement =
                      null);
              }),
              (b.prototype.toggle = function (t) {
                this.container.style.display = t ? "block" : "none";
              }),
              (b.prototype.isVisible = function () {
                return "block" === this.container.style.display;
              }),
              (b.prototype.render = function (t) {
                var e,
                  n,
                  i = this.container,
                  r = this.options,
                  o = f.layout;
                u.isValidRGB(t) &&
                  ((o = (o = (o = (o = o.replace(
                    /{{slider}}/,
                    f.slider
                  )).replace(/{{huebar}}/, f.huebar)).replace(
                    /{{cssPrefix}}/g,
                    r.cssPrefix
                  )).replace(/{{id}}/g, r.id)),
                  (this.container.innerHTML = o),
                  (this.sliderSvgElement = i.querySelector(
                    "." + r.cssPrefix + "svg-slider"
                  )),
                  (this.huebarSvgElement = i.querySelector(
                    "." + r.cssPrefix + "svg-huebar"
                  )),
                  (this.sliderHandleElement = i.querySelector(
                    "." + r.cssPrefix + "slider-handle"
                  )),
                  (this.huebarHandleElement = i.querySelector(
                    "." + r.cssPrefix + "huebar-handle"
                  )),
                  (this.baseColorElement = i.querySelector(
                    "." + r.cssPrefix + "slider-basecolor"
                  )),
                  (e = u.hexToRGB(t)),
                  (n = u.rgbToHSV.apply(null, e)),
                  this.moveHue(n[0], !0),
                  this.moveSaturationAndValue(n[1], n[2], !0));
              }),
              (b.prototype._setColorSliderPosMax = function () {
                var t = this.sliderSvgElement.getClientRects()[0];
                t && (this.colorSliderPosLimitRange[1] = t.height - 10);
              }),
              (b.prototype._moveColorSliderHandle = function (t, e, n) {
                var i,
                  r = this.sliderHandleElement;
                (e = Math.max(this.colorSliderPosLimitRange[0], e)),
                  (e = Math.min(this.colorSliderPosLimitRange[1], e)),
                  (t = Math.max(this.colorSliderPosLimitRange[0], t)),
                  (t = Math.min(this.colorSliderPosLimitRange[1], t)),
                  d.setTranslateXY(r, t, e),
                  (i = e > 50 ? "white" : "black"),
                  d.setStrokeColor(r, i),
                  n ||
                    this.fire("_selectColor", {
                      color: u.rgbToHEX.apply(null, this.getRGB()),
                    });
              }),
              (b.prototype.moveSaturationAndValue = function (t, e, n) {
                var i, r, o, a;
                (t = t || 0),
                  (e = e || 0),
                  (i = Math.abs(this.colorSliderPosLimitRange[0])),
                  (o = (t * (r = this.colorSliderPosLimitRange[1])) / 100 - i),
                  (a = r - (e * r) / 100 - i),
                  this._moveColorSliderHandle(o, a, n);
              }),
              (b.prototype._moveColorSliderByPosition = function (t, e) {
                var n = this.colorSliderPosLimitRange[0];
                this._moveColorSliderHandle(t + n, e + n);
              }),
              (b.prototype.getSaturationAndValue = function () {
                var t = Math.abs(this.colorSliderPosLimitRange[0]),
                  e = t + this.colorSliderPosLimitRange[1],
                  n = d.getTranslateXY(this.sliderHandleElement);
                return [((n[1] + t) / e) * 100, 100 - ((n[0] + t) / e) * 100];
              }),
              (b.prototype._setHueBarPosMax = function () {
                var t = this.huebarSvgElement.getClientRects()[0];
                t && (this.huebarPosLimitRange[1] = t.height - 7);
              }),
              (b.prototype._moveHueHandle = function (t, e) {
                var n,
                  i,
                  r = this.huebarHandleElement,
                  o = this.baseColorElement;
                (t = Math.max(this.huebarPosLimitRange[0], t)),
                  (t = Math.min(this.huebarPosLimitRange[1], t)),
                  d.setTranslateY(r, t),
                  (n = u.hsvToRGB(this.getHue(), 100, 100)),
                  (i = u.rgbToHEX.apply(null, n)),
                  d.setGradientColorStop(o, i),
                  e ||
                    this.fire("_selectColor", {
                      color: u.rgbToHEX.apply(null, this.getRGB()),
                    });
              }),
              (b.prototype.moveHue = function (t, e) {
                var n, i;
                (n =
                  (((i = Math.abs(this.huebarPosLimitRange[0])) +
                    this.huebarPosLimitRange[1]) *
                    (t = t || 0)) /
                    359.99 -
                  i),
                  this._moveHueHandle(n, e);
              }),
              (b.prototype._moveHueByPosition = function (t) {
                var e = this.huebarPosLimitRange[0];
                this._moveHueHandle(t + e);
              }),
              (b.prototype.getHue = function () {
                var t,
                  e,
                  n = this.huebarHandleElement,
                  i = d.getTranslateXY(n);
                return (
                  (e =
                    (t = Math.abs(this.huebarPosLimitRange[0])) +
                    this.huebarPosLimitRange[1]),
                  (359.99 * (i[0] + t)) / e
                );
              }),
              (b.prototype.getHSV = function () {
                var t = this.getSaturationAndValue();
                return [this.getHue()].concat(t);
              }),
              (b.prototype.getRGB = function () {
                return u.hsvToRGB.apply(null, this.getHSV());
              }),
              (b.prototype._prepareColorSliderForMouseEvent = function (t) {
                var e = this.options,
                  n = o(t.target, "." + e.cssPrefix + "slider-part");
                return (this._dragDataCache = {
                  isColorSlider: a(n, e.cssPrefix + "slider-left"),
                  parentElement: n,
                });
              }),
              (b.prototype._onClick = function (t) {
                var e = this._prepareColorSliderForMouseEvent(t),
                  n = r(t.originEvent, e.parentElement);
                e.isColorSlider
                  ? this._moveColorSliderByPosition(n[0], n[1])
                  : this._moveHueByPosition(n[1]),
                  (this._dragDataCache = null);
              }),
              (b.prototype._onDragStart = function (t) {
                this._setColorSliderPosMax(),
                  this._setHueBarPosMax(),
                  this._prepareColorSliderForMouseEvent(t);
              }),
              (b.prototype._onDrag = function (t) {
                var e = this._dragDataCache,
                  n = r(t.originEvent, e.parentElement);
                e.isColorSlider
                  ? this._moveColorSliderByPosition(n[0], n[1])
                  : this._moveHueByPosition(n[1]);
              }),
              (b.prototype._onDragEnd = function () {
                this._dragDataCache = null;
              }),
              i.mixin(b),
              (t.exports = b);
          },
          function (t, e, n) {
            "use strict";
            var i = n(4).isOldBrowser,
              r = /[\.\-0-9]+/g,
              o = {
                getTranslateXY: function (t) {
                  var e;
                  return i
                    ? ((e = t.style), [parseFloat(e.top), parseFloat(e.left)])
                    : (e = t.getAttribute("transform"))
                    ? ((e = e.match(r)), [parseFloat(e[1]), parseFloat(e[0])])
                    : [0, 0];
                },
                setTranslateXY: function (t, e, n) {
                  i
                    ? ((t.style.left = e + "px"), (t.style.top = n + "px"))
                    : t.setAttribute(
                        "transform",
                        "translate(" + e + "," + n + ")"
                      );
                },
                setTranslateY: function (t, e) {
                  i
                    ? (t.style.top = e + "px")
                    : t.setAttribute("transform", "translate(-6," + e + ")");
                },
                setStrokeColor: function (t, e) {
                  i ? (t.strokecolor = e) : t.setAttribute("stroke", e);
                },
                setGradientColorStop: function (t, e) {
                  i ? (t.color = e) : t.setAttribute("stop-color", e);
                },
              };
            t.exports = o;
          },
          function (t, e, n) {
            n(34), (t.exports = n(35));
          },
          function (t, e, n) {},
          function (t, e, n) {
            "use strict";
            var i = {
              Collection: n(19),
              View: n(8),
              Drag: n(24),
              create: n(48),
              Palette: n(29),
              Slider: n(31),
              colorutil: n(12),
              svgvml: n(32),
            };
            t.exports = i;
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return null === t;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(3),
              r = n(38);
            t.exports = function (t, e) {
              var n = location.hostname,
                o = "TOAST UI " + t + " for " + n + ": Statistics",
                a = window.localStorage.getItem(o);
              (i(window.tui) || !1 !== window.tui.usageStatistics) &&
                ((a &&
                  !(function (t) {
                    return new Date().getTime() - t > 6048e5;
                  })(a)) ||
                  (window.localStorage.setItem(o, new Date().getTime()),
                  setTimeout(function () {
                    ("interactive" !== document.readyState &&
                      "complete" !== document.readyState) ||
                      r("https://www.google-analytics.com/collect", {
                        v: 1,
                        t: "event",
                        tid: e,
                        cid: n,
                        dp: n,
                        dh: t,
                        el: t,
                        ec: "use",
                      });
                  }, 1e3)));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(7);
            t.exports = function (t, e) {
              var n = document.createElement("img"),
                r = "";
              return (
                i(e, function (t, e) {
                  r += "&" + e + "=" + t;
                }),
                (r = r.substring(1)),
                (n.src = t + "?" + r),
                (n.style.display = "none"),
                document.body.appendChild(n),
                document.body.removeChild(n),
                n
              );
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(2),
              r = n(5),
              o = n(23),
              a = n(40);
            t.exports = function (t) {
              var e,
                n = Array.prototype.slice.call(arguments, 1),
                s = t.classList,
                l = [];
              s
                ? i(n, function (e) {
                    t.classList.add(e);
                  })
                : ((e = o(t)) && (n = [].concat(e.split(/\s+/), n)),
                  i(n, function (t) {
                    r(t, l) < 0 && l.push(t);
                  }),
                  a(t, l));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(1),
              r = n(3);
            t.exports = function (t, e) {
              (e = (e = i(e) ? e.join(" ") : e).replace(
                /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ""
              )),
                r(t.className.baseVal)
                  ? (t.className = e)
                  : (t.className.baseVal = e);
            };
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              return "number" == typeof t || t instanceof Number;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(14),
              r = n(15),
              o = n(43),
              a = n(27),
              s = "onselectstart" in document,
              l = a([
                "userSelect",
                "WebkitUserSelect",
                "OUserSelect",
                "MozUserSelect",
                "msUserSelect",
              ]);
            t.exports = function (t) {
              t || (t = document),
                s
                  ? i(t, "selectstart", r)
                  : ((t = t === document ? document.documentElement : t),
                    o(t, "prevUserSelect", t.style[l]),
                    (t.style[l] = "none"));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(16);
            t.exports = function (t, e, n) {
              t.dataset
                ? (t.dataset[e] = n)
                : t.setAttribute("data-" + i(e), n);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(17),
              r = n(15),
              o = n(45),
              a = n(46),
              s = n(27),
              l = "onselectstart" in document,
              c = s([
                "userSelect",
                "WebkitUserSelect",
                "OUserSelect",
                "MozUserSelect",
                "msUserSelect",
              ]);
            t.exports = function (t) {
              t || (t = document),
                l
                  ? i(t, "selectstart", r)
                  : (((t = t === document ? document.documentElement : t).style[
                      c
                    ] = o(t, "prevUserSelect") || "auto"),
                    a(t, "prevUserSelect"));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(16);
            t.exports = function (t, e) {
              return t.dataset ? t.dataset[e] : t.getAttribute("data-" + i(e));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(16);
            t.exports = function (t, e) {
              t.dataset
                ? delete t.dataset[e]
                : t.removeAttribute("data-" + i(e));
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(22),
              r = n(5),
              o = ["0", "1", "3", "5", "7"],
              a = ["2", "6"],
              s = ["4"];
            t.exports = function (t) {
              return i.msie && i.version <= 8
                ? (function (t) {
                    var e = String(t.button);
                    return r(e, o) > -1
                      ? 0
                      : r(e, a) > -1
                      ? 2
                      : r(e, s) > -1
                      ? 1
                      : null;
                  })(t)
                : t.button;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(10),
              r = n(0),
              o = n(4),
              a = n(12),
              s = n(49),
              l = n(29),
              c = n(31),
              d = 0;
            function u(t) {
              var e;
              if (!(this instanceof u)) return new u(t);
              if (
                !(t = this.options =
                  r(
                    {
                      container: null,
                      color: "#f8f8f8",
                      preset: [
                        "#181818",
                        "#282828",
                        "#383838",
                        "#585858",
                        "#b8b8b8",
                        "#d8d8d8",
                        "#e8e8e8",
                        "#f8f8f8",
                        "#ab4642",
                        "#dc9656",
                        "#f7ca88",
                        "#a1b56c",
                        "#86c1b9",
                        "#7cafc2",
                        "#ba8baf",
                        "#a16946",
                      ],
                      cssPrefix: "tui-colorpicker-",
                      detailTxt: "Detail",
                      id: (d += 1),
                      usageStatistics: !0,
                    },
                    t
                  )).container
              )
                throw new Error("ColorPicker(): need container option.");
              (e = this.layout = new s(t, t.container)),
                (this.palette = new l(t, e.container)),
                this.palette.on(
                  {
                    _selectColor: this._onSelectColorInPalette,
                    _toggleSlider: this._onToggleSlider,
                  },
                  this
                ),
                (this.slider = new c(t, e.container)),
                this.slider.on(
                  "_selectColor",
                  this._onSelectColorInSlider,
                  this
                ),
                e.addChild(this.palette),
                e.addChild(this.slider),
                this.render(t.color),
                t.usageStatistics && o.sendHostName();
            }
            (u.prototype._onSelectColorInPalette = function (t) {
              var e = t.color,
                n = this.options;
              a.isValidRGB(e) || "" === e
                ? (this.fire("selectColor", { color: e, origin: "palette" }),
                  n.color !== e && ((n.color = e), this.render(e)))
                : this.render();
            }),
              (u.prototype._onToggleSlider = function () {
                this.slider.toggle(!this.slider.isVisible());
              }),
              (u.prototype._onSelectColorInSlider = function (t) {
                var e = t.color,
                  n = this.options;
                this.fire("selectColor", { color: e, origin: "slider" }),
                  n.color !== e && ((n.color = e), this.palette.render(e));
              }),
              (u.prototype.setColor = function (t) {
                if (!a.isValidRGB(t))
                  throw new Error(
                    "ColorPicker#setColor(): need valid hex string color value"
                  );
                (this.options.color = t), this.render(t);
              }),
              (u.prototype.getColor = function () {
                return this.options.color;
              }),
              (u.prototype.toggle = function (t) {
                this.layout.container.style.display = t ? "block" : "none";
              }),
              (u.prototype.render = function (t) {
                this.layout.render(t || this.options.color);
              }),
              (u.prototype.destroy = function () {
                this.layout.destroy(),
                  (this.options.container.innerHTML = ""),
                  (this.layout =
                    this.slider =
                    this.palette =
                    this.options =
                      null);
              }),
              i.mixin(u),
              (t.exports = u);
          },
          function (t, e, n) {
            "use strict";
            var i = n(0),
              r = n(18),
              o = n(9),
              a = n(8);
            function s(t, e) {
              (this.options = i({ cssPrefix: "tui-colorpicker-" }, t)),
                (e = o.appendHTMLElement(
                  "div",
                  e,
                  this.options.cssPrefix + "container"
                )),
                a.call(this, t, e),
                this.render();
            }
            r(s, a),
              (s.prototype.render = function (t) {
                this.recursive(function (e) {
                  e.render(t);
                }, !0);
              }),
              (t.exports = s);
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              function e() {}
              return (e.prototype = t), new e();
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(52);
            t.exports = function (t) {
              var e = [
                '<ul class="{{cssPrefix}}clearfix">',
                "{{each preset}}",
                [
                  '<li><input class="{{cssPrefix}}palette-button{{isSelected @this}}{{getItemClass @this}}" type="button"',
                  "{{if isValidRGB @this}}",
                  ' style="background-color:{{@this}};color:{{@this}}"',
                  "{{/if}}",
                  ' title="{{@this}}" value="{{@this}}" /></li>',
                ].join(""),
                "{{/each}}",
                "</ul>",
                '<div class="{{cssPrefix}}clearfix" style="overflow:hidden">',
                '<input type="button" class="{{cssPrefix}}palette-toggle-slider" value="{{detailTxt}}" />',
                '<input type="text" class="{{cssPrefix}}palette-hex" value="{{color}}" maxlength="7" />',
                '<span class="{{cssPrefix}}palette-preview" style="background-color:{{color}};color:{{color}}">{{color}}</span>',
                "</div>",
              ].join("\n");
              return i(e, t);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(5),
              r = n(2),
              o = n(1),
              a = n(11),
              s = n(0),
              l = /{{\s?|\s?}}/g,
              c = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,
              d = /\[\s?|\s?\]/,
              u = /^[a-zA-Z_]+\.[a-zA-Z_]+$/,
              p = /\./,
              h = /^["']\w+["']$/,
              f = /"|'/g,
              b = /^-?\d+\.?\d*$/,
              m = {
                if: function (t, e, n) {
                  var i = (function (t, e) {
                      var n = [t],
                        i = [],
                        o = 0,
                        a = 0;
                      return (
                        r(e, function (t, r) {
                          0 === t.indexOf("if")
                            ? (o += 1)
                            : "/if" === t
                            ? (o -= 1)
                            : o ||
                              (0 !== t.indexOf("elseif") && "else" !== t) ||
                              (n.push(
                                "else" === t ? ["true"] : t.split(" ").slice(1)
                              ),
                              i.push(e.slice(a, r)),
                              (a = r + 1));
                        }),
                        i.push(e.slice(a)),
                        { exps: n, sourcesInsideIf: i }
                      );
                    })(t, e),
                    o = !1,
                    a = "";
                  return (
                    r(i.exps, function (t, e) {
                      return (
                        (o = y(t, n)) && (a = M(i.sourcesInsideIf[e], n)), !o
                      );
                    }),
                    a
                  );
                },
                each: function (t, e, n) {
                  var i = y(t, n),
                    a = o(i) ? "@index" : "@key",
                    l = {},
                    c = "";
                  return (
                    r(i, function (t, i) {
                      (l[a] = i),
                        (l["@this"] = t),
                        s(n, l),
                        (c += M(e.slice(), n));
                    }),
                    c
                  );
                },
                with: function (t, e, n) {
                  var r = i("as", t),
                    o = t[r + 1],
                    a = y(t.slice(0, r), n),
                    l = {};
                  return (l[o] = a), M(e, s(n, l)) || "";
                },
              },
              g =
                3 === "a".split(/a/).length
                  ? function (t, e) {
                      return t.split(e);
                    }
                  : function (t, e) {
                      var n,
                        i,
                        r = [],
                        o = 0;
                      for (
                        e.global || (e = new RegExp(e, "g")), n = e.exec(t);
                        null !== n;

                      )
                        (i = n.index),
                          r.push(t.slice(o, i)),
                          (o = i + n[0].length),
                          (n = e.exec(t));
                      return r.push(t.slice(o)), r;
                    };
            function v(t, e) {
              var n,
                i = e[t];
              return (
                "true" === t
                  ? (i = !0)
                  : "false" === t
                  ? (i = !1)
                  : h.test(t)
                  ? (i = t.replace(f, ""))
                  : c.test(t)
                  ? (i = v((n = t.split(d))[0], e)[v(n[1], e)])
                  : u.test(t)
                  ? (i = v((n = t.split(p))[0], e)[n[1]])
                  : b.test(t) && (i = parseFloat(t)),
                i
              );
            }
            function _(t, e, n) {
              for (var i, r, o, s = m[t], l = 1, c = 2, d = e[c]; l && a(d); )
                0 === d.indexOf(t)
                  ? (l += 1)
                  : 0 === d.indexOf("/" + t) && ((l -= 1), (i = c)),
                  (d = e[(c += 2)]);
              if (l) throw Error(t + " needs {{/" + t + "}} expression.");
              return (
                (e[0] = s(
                  e[0].split(" ").slice(1),
                  ((r = i), (o = e.splice(1, r - 0)).pop(), o),
                  n
                )),
                e
              );
            }
            function y(t, e) {
              var n = v(t[0], e);
              return n instanceof Function
                ? (function (t, e, n) {
                    var i = [];
                    return (
                      r(e, function (t) {
                        i.push(v(t, n));
                      }),
                      t.apply(null, i)
                    );
                  })(n, t.slice(1), e)
                : n;
            }
            function M(t, e) {
              for (var n, i, r, o = 1, s = t[o]; a(s); )
                (i = (n = s.split(" "))[0]),
                  m[i]
                    ? ((r = _(i, t.splice(o, t.length - o), e)),
                      (t = t.concat(r)))
                    : (t[o] = y(n, e)),
                  (s = t[(o += 2)]);
              return t.join("");
            }
            t.exports = function (t, e) {
              return M(g(t, l), e);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(1);
            t.exports = function (t, e) {
              var n,
                r = i(t),
                o = r ? t[0] : t.clientX,
                a = r ? t[1] : t.clientY;
              return e
                ? [
                    o - (n = e.getBoundingClientRect()).left - e.clientLeft,
                    a - n.top - e.clientTop,
                  ]
                : [o, a];
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(55);
            t.exports = function (t, e) {
              var n = t.parentNode;
              if (i(t, e)) return t;
              for (; n && n !== document; ) {
                if (i(n, e)) return n;
                n = n.parentNode;
              }
              return null;
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(5),
              r = n(56),
              o = Element.prototype,
              a =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.msMatchesSelector ||
                function (t) {
                  var e = this.document || this.ownerDocument;
                  return i(this, r(e.querySelectorAll(t))) > -1;
                };
            t.exports = function (t, e) {
              return a.call(t, e);
            };
          },
          function (t, e, n) {
            "use strict";
            var i = n(6);
            t.exports = function (t) {
              var e;
              try {
                e = Array.prototype.slice.call(t);
              } catch (n) {
                (e = []),
                  i(t, function (t) {
                    e.push(t);
                  });
              }
              return e;
            };
          },
          function (t, e, n) {
            "use strict";
            (function (e) {
              var i = n(4).isOldBrowser,
                r = [
                  '<div class="{{cssPrefix}}slider-left {{cssPrefix}}slider-part">{{slider}}</div>',
                  '<div class="{{cssPrefix}}slider-right {{cssPrefix}}slider-part">{{huebar}}</div>',
                ].join("\n"),
                o = [
                  '<svg class="{{cssPrefix}}svg {{cssPrefix}}svg-slider">',
                  "<defs>",
                  '<linearGradient id="{{cssPrefix}}svg-fill-color-{{id}}" x1="0%" y1="0%" x2="100%" y2="0%">',
                  '<stop offset="0%" stop-color="rgb(255,255,255)" />',
                  '<stop class="{{cssPrefix}}slider-basecolor" offset="100%" stop-color="rgb(255,0,0)" />',
                  "</linearGradient>",
                  '<linearGradient id="{{cssPrefix}}svn-fill-black-{{id}}" x1="0%" y1="0%" x2="0%" y2="100%">',
                  '<stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0" />',
                  '<stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />',
                  "</linearGradient>",
                  "</defs>",
                  '<rect width="100%" height="100%" fill="url(#{{cssPrefix}}svg-fill-color-{{id}})"></rect>',
                  '<rect width="100%" height="100%" fill="url(#{{cssPrefix}}svn-fill-black-{{id}})"></rect>',
                  '<path transform="translate(0,0)" class="{{cssPrefix}}slider-handle" d="M0 7.5 L15 7.5 M7.5 15 L7.5 0 M2 7 a5.5 5.5 0 1 1 0 1 Z" stroke="black" stroke-width="0.75" fill="none" />',
                  "</svg>",
                ].join("\n"),
                a = [
                  '<div class="{{cssPrefix}}vml-slider">',
                  '<v:rect strokecolor="none" class="{{cssPrefix}}vml {{cssPrefix}}vml-slider-bg">',
                  '<v:fill class="{{cssPrefix}}vml {{cssPrefix}}slider-basecolor" type="gradient" method="none" color="#ff0000" color2="#fff" angle="90" />',
                  "</v:rect>",
                  '<v:rect strokecolor="#ccc" class="{{cssPrefix}}vml {{cssPrefix}}vml-slider-bg">',
                  '<v:fill type="gradient" method="none" color="black" color2="white" o:opacity2="0%" class="{{cssPrefix}}vml" />',
                  "</v:rect>",
                  '<v:shape class="{{cssPrefix}}vml {{cssPrefix}}slider-handle" coordsize="1 1" style="width:1px;height:1px;"path="m 0,7 l 14,7 m 7,14 l 7,0 ar 12,12 2,2 z" filled="false" stroked="true" />',
                  "</div>",
                ].join("\n"),
                s = [
                  '<svg class="{{cssPrefix}}svg {{cssPrefix}}svg-huebar">',
                  "<defs>",
                  '<linearGradient id="g-{{id}}" x1="0%" y1="0%" x2="0%" y2="100%">',
                  '<stop offset="0%" stop-color="rgb(255,0,0)" />',
                  '<stop offset="16.666%" stop-color="rgb(255,255,0)" />',
                  '<stop offset="33.333%" stop-color="rgb(0,255,0)" />',
                  '<stop offset="50%" stop-color="rgb(0,255,255)" />',
                  '<stop offset="66.666%" stop-color="rgb(0,0,255)" />',
                  '<stop offset="83.333%" stop-color="rgb(255,0,255)" />',
                  '<stop offset="100%" stop-color="rgb(255,0,0)" />',
                  "</linearGradient>",
                  "</defs>",
                  '<rect width="18px" height="100%" fill="url(#g-{{id}})"></rect>',
                  '<path transform="translate(-6,-3)" class="{{cssPrefix}}huebar-handle" d="M0 0 L4 4 L0 8 L0 0 Z" fill="black" stroke="none" />',
                  "</svg>",
                ].join("\n"),
                l = [
                  '<div class="{{cssPrefix}}vml-huebar">',
                  '<v:rect strokecolor="#ccc" class="{{cssPrefix}}vml {{cssPrefix}}vml-huebar-bg">',
                  '<v:fill type="gradient" method="none" colors="0% rgb(255,0,0), 16.666% rgb(255,255,0), 33.333% rgb(0,255,0), 50% rgb(0,255,255), 66.666% rgb(0,0,255), 83.333% rgb(255,0,255), 100% rgb(255,0,0)" angle="180" class="{{cssPrefix}}vml" />',
                  "</v:rect>",
                  '<v:shape class="{{cssPrefix}}vml {{cssPrefix}}huebar-handle" coordsize="1 1" style="width:1px;height:1px;position:absolute;z-index:1;right:22px;top:-3px;"path="m 0,0 l 4,4 l 0,8 l 0,0 z" filled="true" fillcolor="black" stroked="false" />',
                  "</div>",
                ].join("\n");
              i &&
                e.document.namespaces.add("v", "urn:schemas-microsoft-com:vml"),
                (t.exports = {
                  layout: r,
                  slider: i ? a : o,
                  huebar: i ? l : s,
                });
            }).call(this, n(25));
          },
        ]);
      }),
      (t.exports = i());
  },
  function (t, e, n) {
    "use strict";
    n(593);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".WhiteTheme[data-v-8b6c1e50] .tui-image-editor-container .tui-image-editor-controls,.WhiteTheme[data-v-8b6c1e50] .tui-image-editor-container .tui-image-editor-help-menu,.WhiteTheme[data-v-8b6c1e50] .tui-image-editor-container .tui-image-editor-main-container{background-color:#fff!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-help-menu.bottom{height:50px!important;width:100%!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-help-menu.top{height:50px!important;width:100%!important;top:0!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-help-menu.left{height:100%!important;width:50px!important;flex-direction:column;left:0!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-help-menu.right{height:100%!important;width:50px!important;flex-direction:column;right:0!important}.tui-image-editor-container[data-v-8b6c1e50] .tie-btn-delete,.tui-image-editor-container[data-v-8b6c1e50] .tie-btn-deleteAll,.tui-image-editor-container[data-v-8b6c1e50] .tie-btn-reset{display:none!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-item:has(.tui-image-editor-icpartition){display:none!important}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-header-buttons,.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-header-logo{display:none!important}.tui-image-editor-container[data-v-8b6c1e50] .editor-container.right .tui-image-editor-help-menu li{display:inline-block;margin:4px auto}.tui-image-editor-container[data-v-8b6c1e50] .tui-image-editor-help-menu{background-color:#151515!important;display:flex;justify-content:center;align-items:center;border-radius:unset!important;flex-direction:row}.tui-image-editor-container[data-v-8b6c1e50].top .tui-image-editor-controls-buttons,.tui-image-editor-container[data-v-8b6c1e50].top .tui-image-editor-controls-logo{display:none!important}",
      "",
    ]);
  },
  function (t, e, n) {
    var i = n(737);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(345);
    (t.exports = n(31)(!1)).push([
      t.i,
      'div.jsoneditor .jsoneditor-search input{height:auto;border:inherit}div.jsoneditor .jsoneditor-search input:focus{border:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}div.jsoneditor table{border-collapse:collapse;width:auto}div.jsoneditor td,div.jsoneditor th{padding:0;display:table-cell;text-align:left;vertical-align:inherit;border-radius:inherit}div.jsoneditor-field,div.jsoneditor-readonly,div.jsoneditor-value{border:1px solid transparent;min-height:16px;min-width:32px;padding:2px;margin:1px;word-wrap:break-word;float:left}div.jsoneditor-field p,div.jsoneditor-value p{margin:0}div.jsoneditor-value{word-break:break-word}div.jsoneditor-readonly{min-width:16px;color:grey}div.jsoneditor-empty{border-color:#d3d3d3;border-style:dashed;border-radius:2px}div.jsoneditor-field.jsoneditor-empty:after,div.jsoneditor-value.jsoneditor-empty:after{pointer-events:none;color:#d3d3d3;font-size:8pt}div.jsoneditor-field.jsoneditor-empty:after{content:"field"}div.jsoneditor-value.jsoneditor-empty:after{content:"value"}a.jsoneditor-value.jsoneditor-url,div.jsoneditor-value.jsoneditor-url{color:green;text-decoration:underline}a.jsoneditor-value.jsoneditor-url{display:inline-block;padding:2px;margin:2px}a.jsoneditor-value.jsoneditor-url:focus,a.jsoneditor-value.jsoneditor-url:hover{color:#ee422e}div.jsoneditor td.jsoneditor-separator{padding:3px 0;vertical-align:top;color:grey}div.jsoneditor-field.jsoneditor-highlight,div.jsoneditor-field[contenteditable=true]:focus,div.jsoneditor-field[contenteditable=true]:hover,div.jsoneditor-value.jsoneditor-highlight,div.jsoneditor-value[contenteditable=true]:focus,div.jsoneditor-value[contenteditable=true]:hover{background-color:#ffffab;border:1px solid #ff0;border-radius:2px}div.jsoneditor-field.jsoneditor-highlight-active,div.jsoneditor-field.jsoneditor-highlight-active:focus,div.jsoneditor-field.jsoneditor-highlight-active:hover,div.jsoneditor-value.jsoneditor-highlight-active,div.jsoneditor-value.jsoneditor-highlight-active:focus,div.jsoneditor-value.jsoneditor-highlight-active:hover{background-color:#fe0;border:1px solid #ffc700;border-radius:2px}div.jsoneditor-value.jsoneditor-string{color:green}div.jsoneditor-value.jsoneditor-array,div.jsoneditor-value.jsoneditor-object{min-width:16px;color:grey}div.jsoneditor-value.jsoneditor-number{color:#ee422e}div.jsoneditor-value.jsoneditor-boolean{color:#ff8c00}div.jsoneditor-value.jsoneditor-null{color:#004ed0}div.jsoneditor-value.jsoneditor-invalid{color:#000}div.jsoneditor-tree button{width:24px;height:24px;padding:0;margin:0;border:none;cursor:pointer;background:transparent url(' +
        i(n(116)) +
        ")}div.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree,div.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree{cursor:pointer}div.jsoneditor-tree button.jsoneditor-collapsed{background-position:0 -48px}div.jsoneditor-tree button.jsoneditor-expanded{background-position:0 -72px}div.jsoneditor-tree button.jsoneditor-contextmenu{background-position:-48px -72px}div.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,div.jsoneditor-tree button.jsoneditor-contextmenu:focus,div.jsoneditor-tree button.jsoneditor-contextmenu:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu{background-position:-48px -48px}div.jsoneditor-tree :focus{outline:none}div.jsoneditor-tree button:focus{background-color:#f5f5f5;outline:1px solid #e5e5e5}div.jsoneditor-tree button.jsoneditor-invisible{visibility:hidden;background:none}div.jsoneditor{color:#1a1a1a;border:1px solid #3883fa;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;overflow:hidden;position:relative;padding:0;line-height:100%}div.jsoneditor-tree table.jsoneditor-tree{border-collapse:collapse;border-spacing:0;width:100%;margin:0}div.jsoneditor-outer{position:static;width:100%;height:100%;margin:-35px 0 0;padding:35px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box}.ace-jsoneditor,textarea.jsoneditor-text{min-height:150px}div.jsoneditor-tree{width:100%;height:100%;position:relative;overflow:auto}textarea.jsoneditor-text{width:100%;height:100%;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline-width:0;border:none;background-color:#fff;resize:none}tr.jsoneditor-highlight,tr.jsoneditor-selected{background-color:#e6e6e6}tr.jsoneditor-selected button.jsoneditor-contextmenu,tr.jsoneditor-selected button.jsoneditor-dragarea{visibility:hidden}tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{visibility:visible}div.jsoneditor-tree button.jsoneditor-dragarea{background:url(" +
        i(n(116)) +
        ") -72px -72px;cursor:move}div.jsoneditor-tree button.jsoneditor-dragarea:focus,div.jsoneditor-tree button.jsoneditor-dragarea:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{background-position:-72px -48px}div.jsoneditor td,div.jsoneditor th,div.jsoneditor tr{padding:0;margin:0}div.jsoneditor td,div.jsoneditor td.jsoneditor-tree{vertical-align:top}.jsoneditor-schema-error,div.jsoneditor-field,div.jsoneditor-value,div.jsoneditor td,div.jsoneditor textarea,div.jsoneditor th{font-family:droid sans mono,consolas,monospace,courier new,courier,sans-serif;font-size:10pt;color:#1a1a1a}.jsoneditor-schema-error{cursor:default;display:inline-block;height:24px;line-height:24px;position:relative;text-align:center;width:24px}div.jsoneditor-tree .jsoneditor-schema-error{width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(" +
        i(n(116)) +
        ') -168px -48px}.jsoneditor-schema-error .jsoneditor-popover{background-color:#4c4c4c;border-radius:3px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.4);box-shadow:0 0 5px rgba(0,0,0,.4);color:#fff;display:none;padding:7px 10px;position:absolute;width:200px;z-index:4}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above{bottom:32px;left:-98px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below{top:32px;left:-98px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left{top:-7px;right:32px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right{top:-7px;left:32px}.jsoneditor-schema-error .jsoneditor-popover:before{border-right:7px solid transparent;border-left:7px solid transparent;content:"";display:block;left:50%;margin-left:-7px;position:absolute}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above:before{border-top:7px solid #4c4c4c;bottom:-7px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below:before{border-bottom:7px solid #4c4c4c;top:-7px}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left:before{border-left:7px solid #4c4c4c;right:-14px;left:inherit}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left:before,.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right:before{border-top:7px solid transparent;border-bottom:7px solid transparent;content:"";top:19px;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right:before{border-right:7px solid #4c4c4c;left:-14px}.jsoneditor-schema-error:focus .jsoneditor-popover,.jsoneditor-schema-error:hover .jsoneditor-popover{display:block;-webkit-animation:fade-in .3s linear 1,move-up .3s linear 1;-moz-animation:fade-in .3s linear 1,move-up .3s linear 1;-ms-animation:fade-in .3s linear 1,move-up .3s linear 1}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}.jsoneditor .jsoneditor-text-errors{width:100%;border-collapse:collapse;background-color:#ffef8b;border-top:1px solid gold}.jsoneditor .jsoneditor-text-errors td{padding:3px 6px;vertical-align:middle}.jsoneditor-text-errors .jsoneditor-schema-error{border:none;width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(' +
        i(n(116)) +
        ") -168px -48px}div.jsoneditor-contextmenu-root{position:relative;width:0;height:0}div.jsoneditor-contextmenu{position:absolute;z-index:99999}div.jsoneditor-contextmenu,div.jsoneditor-contextmenu li,div.jsoneditor-contextmenu ul{-webkit-box-sizing:content-box;box-sizing:content-box}div.jsoneditor-contextmenu ul{position:relative;left:0;top:0;width:124px;background:#fff;border:1px solid #d3d3d3;-webkit-box-shadow:2px 2px 12px hsla(0,0%,50.2%,.3);box-shadow:2px 2px 12px hsla(0,0%,50.2%,.3);list-style:none;margin:0;padding:0}div.jsoneditor-contextmenu ul li button{padding:0;margin:0;width:124px;height:24px;border:none;cursor:pointer;color:#4d4d4d;background:transparent;font-size:10pt;font-family:arial,sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:26px;text-align:left}div.jsoneditor-contextmenu ul li button::-moz-focus-inner{padding:0;border:0}div.jsoneditor-contextmenu ul li button:focus,div.jsoneditor-contextmenu ul li button:hover{color:#1a1a1a;background-color:#f5f5f5;outline:none}div.jsoneditor-contextmenu ul li button.jsoneditor-default{width:92px}div.jsoneditor-contextmenu ul li button.jsoneditor-expand{float:right;width:32px;height:24px;border-left:1px solid #e5e5e5}div.jsoneditor-contextmenu div.jsoneditor-icon{float:left;width:24px;height:24px;border:none;padding:0;margin:0;background-image:url(" +
        i(n(116)) +
        ")}div.jsoneditor-contextmenu ul li button div.jsoneditor-expand{float:right;width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(" +
        i(n(116)) +
        ") 0 -72px;opacity:.4}div.jsoneditor-contextmenu ul li.jsoneditor-selected div.jsoneditor-expand,div.jsoneditor-contextmenu ul li button.jsoneditor-expand:focus div.jsoneditor-expand,div.jsoneditor-contextmenu ul li button.jsoneditor-expand:hover div.jsoneditor-expand,div.jsoneditor-contextmenu ul li button:focus div.jsoneditor-expand,div.jsoneditor-contextmenu ul li button:hover div.jsoneditor-expand{opacity:1}div.jsoneditor-contextmenu div.jsoneditor-separator{height:0;border-top:1px solid #e5e5e5;padding-top:5px;margin-top:5px}div.jsoneditor-contextmenu button.jsoneditor-remove>div.jsoneditor-icon{background-position:-24px -24px}div.jsoneditor-contextmenu button.jsoneditor-remove:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-remove:hover>div.jsoneditor-icon{background-position:-24px 0}div.jsoneditor-contextmenu button.jsoneditor-append>div.jsoneditor-icon{background-position:0 -24px}div.jsoneditor-contextmenu button.jsoneditor-append:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-append:hover>div.jsoneditor-icon{background-position:0 0}div.jsoneditor-contextmenu button.jsoneditor-insert>div.jsoneditor-icon{background-position:0 -24px}div.jsoneditor-contextmenu button.jsoneditor-insert:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-insert:hover>div.jsoneditor-icon{background-position:0 0}div.jsoneditor-contextmenu button.jsoneditor-duplicate>div.jsoneditor-icon{background-position:-48px -24px}div.jsoneditor-contextmenu button.jsoneditor-duplicate:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-duplicate:hover>div.jsoneditor-icon{background-position:-48px 0}div.jsoneditor-contextmenu button.jsoneditor-sort-asc>div.jsoneditor-icon{background-position:-168px -24px}div.jsoneditor-contextmenu button.jsoneditor-sort-asc:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-sort-asc:hover>div.jsoneditor-icon{background-position:-168px 0}div.jsoneditor-contextmenu button.jsoneditor-sort-desc>div.jsoneditor-icon{background-position:-192px -24px}div.jsoneditor-contextmenu button.jsoneditor-sort-desc:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-sort-desc:hover>div.jsoneditor-icon{background-position:-192px 0}div.jsoneditor-contextmenu ul li button.jsoneditor-selected,div.jsoneditor-contextmenu ul li button.jsoneditor-selected:focus,div.jsoneditor-contextmenu ul li button.jsoneditor-selected:hover{color:#fff;background-color:#ee422e}div.jsoneditor-contextmenu ul li{overflow:hidden}div.jsoneditor-contextmenu ul li ul{display:none;position:relative;left:-10px;top:0;border:none;-webkit-box-shadow:inset 0 0 10px hsla(0,0%,50.2%,.5);box-shadow:inset 0 0 10px hsla(0,0%,50.2%,.5);padding:0 10px;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}div.jsoneditor-contextmenu ul li ul li button{padding-left:24px;-webkit-animation:all 1s ease-in-out;animation:all 1s ease-in-out}div.jsoneditor-contextmenu ul li ul li button:focus,div.jsoneditor-contextmenu ul li ul li button:hover{background-color:#f5f5f5}div.jsoneditor-contextmenu button.jsoneditor-type-string>div.jsoneditor-icon{background-position:-144px -24px}div.jsoneditor-contextmenu button.jsoneditor-type-string.jsoneditor-selected>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-string:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-string:hover>div.jsoneditor-icon{background-position:-144px 0}div.jsoneditor-contextmenu button.jsoneditor-type-auto>div.jsoneditor-icon{background-position:-120px -24px}div.jsoneditor-contextmenu button.jsoneditor-type-auto.jsoneditor-selected>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-auto:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-auto:hover>div.jsoneditor-icon{background-position:-120px 0}div.jsoneditor-contextmenu button.jsoneditor-type-object>div.jsoneditor-icon{background-position:-72px -24px}div.jsoneditor-contextmenu button.jsoneditor-type-object.jsoneditor-selected>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-object:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-object:hover>div.jsoneditor-icon{background-position:-72px 0}div.jsoneditor-contextmenu button.jsoneditor-type-array>div.jsoneditor-icon{background-position:-96px -24px}div.jsoneditor-contextmenu button.jsoneditor-type-array.jsoneditor-selected>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-array:focus>div.jsoneditor-icon,div.jsoneditor-contextmenu button.jsoneditor-type-array:hover>div.jsoneditor-icon{background-position:-96px 0}div.jsoneditor-contextmenu button.jsoneditor-type-modes>div.jsoneditor-icon{background-image:none;width:6px}div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa}div.jsoneditor-menu>button,div.jsoneditor-menu>div.jsoneditor-modes>button{width:26px;height:26px;margin:2px;padding:0;border-radius:2px;border:1px solid transparent;background:transparent url(" +
        i(n(116)) +
        ");color:#fff;opacity:.8;font-family:arial,sans-serif;font-size:10pt;float:left}div.jsoneditor-menu>button:hover,div.jsoneditor-menu>div.jsoneditor-modes>button:hover{background-color:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.4)}div.jsoneditor-menu>button:active,div.jsoneditor-menu>button:focus,div.jsoneditor-menu>div.jsoneditor-modes>button:active,div.jsoneditor-menu>div.jsoneditor-modes>button:focus{background-color:hsla(0,0%,100%,.3)}div.jsoneditor-menu>button:disabled,div.jsoneditor-menu>div.jsoneditor-modes>button:disabled{opacity:.5}div.jsoneditor-menu>button.jsoneditor-collapse-all{background-position:0 -96px}div.jsoneditor-menu>button.jsoneditor-expand-all{background-position:0 -120px}div.jsoneditor-menu>button.jsoneditor-undo{background-position:-24px -96px}div.jsoneditor-menu>button.jsoneditor-undo:disabled{background-position:-24px -120px}div.jsoneditor-menu>button.jsoneditor-redo{background-position:-48px -96px}div.jsoneditor-menu>button.jsoneditor-redo:disabled{background-position:-48px -120px}div.jsoneditor-menu>button.jsoneditor-compact{background-position:-72px -96px}div.jsoneditor-menu>button.jsoneditor-format{background-position:-72px -120px}div.jsoneditor-menu>div.jsoneditor-modes{display:inline-block;float:left}div.jsoneditor-menu>div.jsoneditor-modes>button{background-image:none;width:auto;padding-left:6px;padding-right:6px}div.jsoneditor-menu>button.jsoneditor-separator,div.jsoneditor-menu>div.jsoneditor-modes>button.jsoneditor-separator{margin-left:10px}div.jsoneditor-menu a{font-family:arial,sans-serif;font-size:10pt;color:#fff;opacity:.8;vertical-align:middle}div.jsoneditor-menu a:hover{opacity:1}div.jsoneditor-menu a.jsoneditor-poweredBy{font-size:8pt;position:absolute;right:0;top:0;padding:10px}table.jsoneditor-search div.jsoneditor-results,table.jsoneditor-search input{font-family:arial,sans-serif;font-size:10pt;color:#1a1a1a;background:transparent}table.jsoneditor-search div.jsoneditor-results{color:#fff;padding-right:5px;line-height:24px}table.jsoneditor-search{position:absolute;right:4px;top:4px;border-collapse:collapse;border-spacing:0}table.jsoneditor-search div.jsoneditor-frame{border:1px solid transparent;background-color:#fff;padding:0 2px;margin:0}table.jsoneditor-search div.jsoneditor-frame table{border-collapse:collapse}table.jsoneditor-search input{width:120px;border:none;outline:none;margin:1px;line-height:20px}table.jsoneditor-search button{width:16px;height:24px;padding:0;margin:0;border:none;background:url(" +
        i(n(116)) +
        ");vertical-align:top}table.jsoneditor-search button:hover{background-color:transparent}table.jsoneditor-search button.jsoneditor-refresh{width:18px;background-position:-99px -73px}table.jsoneditor-search button.jsoneditor-next{cursor:pointer;background-position:-124px -73px}table.jsoneditor-search button.jsoneditor-next:hover{background-position:-124px -49px}table.jsoneditor-search button.jsoneditor-previous{cursor:pointer;background-position:-148px -73px;margin-right:2px}table.jsoneditor-search button.jsoneditor-previous:hover{background-position:-148px -49px}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(594);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".ace_line_group[data-v-9b72cb1a]{text-align:left}.json-editor-container[data-v-9b72cb1a]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.json-editor-container .tree-mode[data-v-9b72cb1a]{width:50%}.json-editor-container .code-mode[data-v-9b72cb1a]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.jsoneditor-btns[data-v-9b72cb1a]{text-align:center;margin-top:10px}.jsoneditor-vue .jsoneditor-outer[data-v-9b72cb1a]{min-height:150px}.jsoneditor-vue div.jsoneditor-tree[data-v-9b72cb1a]{min-height:350px}.json-save-btn[data-v-9b72cb1a]{background-color:#20a0ff;border:none;color:#fff;padding:5px 10px;border-radius:5px;cursor:pointer}.json-save-btn[data-v-9b72cb1a]:focus{outline:none}.json-save-btn[disabled][data-v-9b72cb1a]{background-color:#1d8ce0;cursor:not-allowed}code[data-v-9b72cb1a]{background-color:#f5f5f5}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(595);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".jsoneditor-menu{display:none}div.jsoneditor{border:1px solid var(--primary)}",
      "",
    ]);
  },
  function (t, e, n) {
    (t.exports = n(743)).tz.load(n(744));
  },
  function (t, e, n) {
    var i, r, o;
    !(function (a, s) {
      "use strict";
      t.exports
        ? (t.exports = s(n(16)))
        : ((r = [n(16)]),
          void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) ||
            (t.exports = o));
    })(0, function (t) {
      "use strict";
      void 0 === t.version && t.default && (t = t.default);
      var e,
        n = {},
        i = {},
        r = {},
        o = {},
        a = {};
      (t && "string" == typeof t.version) ||
        k(
          "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"
        );
      var s = t.version.split("."),
        l = +s[0],
        c = +s[1];
      function d(t) {
        return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48;
      }
      function u(t) {
        var e = 0,
          n = t.split("."),
          i = n[0],
          r = n[1] || "",
          o = 1,
          a = 0,
          s = 1;
        for (45 === t.charCodeAt(0) && ((e = 1), (s = -1)); e < i.length; e++)
          a = 60 * a + d(i.charCodeAt(e));
        for (e = 0; e < r.length; e++) (o /= 60), (a += d(r.charCodeAt(e)) * o);
        return a * s;
      }
      function p(t) {
        for (var e = 0; e < t.length; e++) t[e] = u(t[e]);
      }
      function h(t, e) {
        var n,
          i = [];
        for (n = 0; n < e.length; n++) i[n] = t[e[n]];
        return i;
      }
      function f(t) {
        var e = t.split("|"),
          n = e[2].split(" "),
          i = e[3].split(""),
          r = e[4].split(" ");
        return (
          p(n),
          p(i),
          p(r),
          (function (t, e) {
            for (var n = 0; n < e; n++)
              t[n] = Math.round((t[n - 1] || 0) + 6e4 * t[n]);
            t[e - 1] = 1 / 0;
          })(r, i.length),
          {
            name: e[0],
            abbrs: h(e[1].split(" "), i),
            offsets: h(n, i),
            untils: r,
            population: 0 | e[5],
          }
        );
      }
      function b(t) {
        t && this._set(f(t));
      }
      function m(t, e) {
        (this.name = t), (this.zones = e);
      }
      function g(t) {
        var e = t.toTimeString(),
          n = e.match(/\([a-z ]+\)/i);
        "GMT" ===
          (n =
            n && n[0]
              ? (n = n[0].match(/[A-Z]/g))
                ? n.join("")
                : void 0
              : (n = e.match(/[A-Z]{3,5}/g))
              ? n[0]
              : void 0) && (n = void 0),
          (this.at = +t),
          (this.abbr = n),
          (this.offset = t.getTimezoneOffset());
      }
      function v(t) {
        (this.zone = t), (this.offsetScore = 0), (this.abbrScore = 0);
      }
      function _(t, e) {
        for (var n, i; (i = 6e4 * (((e.at - t.at) / 12e4) | 0)); )
          (n = new g(new Date(t.at + i))).offset === t.offset
            ? (t = n)
            : (e = n);
        return t;
      }
      function y(t, e) {
        return t.offsetScore !== e.offsetScore
          ? t.offsetScore - e.offsetScore
          : t.abbrScore !== e.abbrScore
          ? t.abbrScore - e.abbrScore
          : t.zone.population !== e.zone.population
          ? e.zone.population - t.zone.population
          : e.zone.name.localeCompare(t.zone.name);
      }
      function M(t, e) {
        var n, i;
        for (p(e), n = 0; n < e.length; n++)
          (i = e[n]), (a[i] = a[i] || {}), (a[i][t] = !0);
      }
      function O(t) {
        var e,
          n,
          i,
          r,
          s = t.length,
          l = {},
          c = [],
          d = {};
        for (e = 0; e < s; e++)
          if (((i = t[e].offset), !d.hasOwnProperty(i))) {
            for (n in (r = a[i] || {})) r.hasOwnProperty(n) && (l[n] = !0);
            d[i] = !0;
          }
        for (e in l) l.hasOwnProperty(e) && c.push(o[e]);
        return c;
      }
      function w(t) {
        return (t || "").toLowerCase().replace(/\//g, "_");
      }
      function A(t) {
        var e, i, r, a;
        for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++)
          (a = w((i = (r = t[e].split("|"))[0]))),
            (n[a] = t[e]),
            (o[a] = i),
            M(a, r[2].split(" "));
      }
      function x(t, e) {
        t = w(t);
        var r,
          a = n[t];
        return a instanceof b
          ? a
          : "string" == typeof a
          ? ((a = new b(a)), (n[t] = a), a)
          : i[t] && e !== x && (r = x(i[t], x))
          ? ((a = n[t] =