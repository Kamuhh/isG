// app.part12-de-30.js
                     })
                        ) {
                          (d = s[p]), (c = "normal");
                          break;
                        }
                      }
                      if ("" === d)
                        for (var f = 0; f < s.length; f++)
                          if (u[s[f]]) {
                            d = u[s[f]];
                            break;
                          }
                      (d = "" === d ? "Times" : d), this.pdf.setFont(d, c);
                    }
                  }
                },
              }),
              Object.defineProperty(this, "globalCompositeOperation", {
                get: function () {
                  return this.ctx.globalCompositeOperation;
                },
                set: function (t) {
                  this.ctx.globalCompositeOperation = t;
                },
              }),
              Object.defineProperty(this, "globalAlpha", {
                get: function () {
                  return this.ctx.globalAlpha;
                },
                set: function (t) {
                  this.ctx.globalAlpha = t;
                },
              }),
              Object.defineProperty(this, "lineDashOffset", {
                get: function () {
                  return this.ctx.lineDashOffset;
                },
                set: function (t) {
                  (this.ctx.lineDashOffset = t), N.call(this);
                },
              }),
              Object.defineProperty(this, "lineDash", {
                get: function () {
                  return this.ctx.lineDash;
                },
                set: function (t) {
                  (this.ctx.lineDash = t), N.call(this);
                },
              }),
              Object.defineProperty(this, "ignoreClearRect", {
                get: function () {
                  return this.ctx.ignoreClearRect;
                },
                set: function (t) {
                  this.ctx.ignoreClearRect = Boolean(t);
                },
              });
          };
          (h.prototype.setLineDash = function (t) {
            this.lineDash = t;
          }),
            (h.prototype.getLineDash = function () {
              return this.lineDash.length % 2
                ? this.lineDash.concat(this.lineDash)
                : this.lineDash.slice();
            }),
            (h.prototype.fill = function () {
              w.call(this, "fill", !1);
            }),
            (h.prototype.stroke = function () {
              w.call(this, "stroke", !1);
            }),
            (h.prototype.beginPath = function () {
              this.path = [{ type: "begin" }];
            }),
            (h.prototype.moveTo = function (t, e) {
              if (isNaN(t) || isNaN(e))
                throw (
                  (l.error(
                    "jsPDF.context2d.moveTo: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.moveTo"
                  ))
                );
              var n = this.ctx.transform.applyToPoint(new s(t, e));
              this.path.push({ type: "mt", x: n.x, y: n.y }),
                (this.ctx.lastPoint = new s(t, e));
            }),
            (h.prototype.closePath = function () {
              var t = new s(0, 0),
                e = 0;
              for (e = this.path.length - 1; -1 !== e; e--)
                if (
                  "begin" === this.path[e].type &&
                  "object" === r()(this.path[e + 1]) &&
                  "number" == typeof this.path[e + 1].x
                ) {
                  t = new s(this.path[e + 1].x, this.path[e + 1].y);
                  break;
                }
              this.path.push({ type: "close" }),
                (this.ctx.lastPoint = new s(t.x, t.y));
            }),
            (h.prototype.lineTo = function (t, e) {
              if (isNaN(t) || isNaN(e))
                throw (
                  (l.error(
                    "jsPDF.context2d.lineTo: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.lineTo"
                  ))
                );
              var n = this.ctx.transform.applyToPoint(new s(t, e));
              this.path.push({ type: "lt", x: n.x, y: n.y }),
                (this.ctx.lastPoint = new s(n.x, n.y));
            }),
            (h.prototype.clip = function () {
              (this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))),
                w.call(this, null, !0);
            }),
            (h.prototype.quadraticCurveTo = function (t, e, n, i) {
              if (isNaN(n) || isNaN(i) || isNaN(t) || isNaN(e))
                throw (
                  (l.error(
                    "jsPDF.context2d.quadraticCurveTo: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.quadraticCurveTo"
                  ))
                );
              var r = this.ctx.transform.applyToPoint(new s(n, i)),
                o = this.ctx.transform.applyToPoint(new s(t, e));
              this.path.push({ type: "qct", x1: o.x, y1: o.y, x: r.x, y: r.y }),
                (this.ctx.lastPoint = new s(r.x, r.y));
            }),
            (h.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
              if (
                isNaN(r) ||
                isNaN(o) ||
                isNaN(t) ||
                isNaN(e) ||
                isNaN(n) ||
                isNaN(i)
              )
                throw (
                  (l.error(
                    "jsPDF.context2d.bezierCurveTo: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.bezierCurveTo"
                  ))
                );
              var a = this.ctx.transform.applyToPoint(new s(r, o)),
                c = this.ctx.transform.applyToPoint(new s(t, e)),
                d = this.ctx.transform.applyToPoint(new s(n, i));
              this.path.push({
                type: "bct",
                x1: c.x,
                y1: c.y,
                x2: d.x,
                y2: d.y,
                x: a.x,
                y: a.y,
              }),
                (this.ctx.lastPoint = new s(a.x, a.y));
            }),
            (h.prototype.arc = function (t, e, n, i, r, o) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i) || isNaN(r))
                throw (
                  (l.error("jsPDF.context2d.arc: Invalid arguments", arguments),
                  new Error("Invalid arguments passed to jsPDF.context2d.arc"))
                );
              if (((o = Boolean(o)), !this.ctx.transform.isIdentity)) {
                var a = this.ctx.transform.applyToPoint(new s(t, e));
                (t = a.x), (e = a.y);
                var c = this.ctx.transform.applyToPoint(new s(0, n)),
                  d = this.ctx.transform.applyToPoint(new s(0, 0));
                n = Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2));
              }
              Math.abs(r - i) >= 2 * Math.PI && ((i = 0), (r = 2 * Math.PI)),
                this.path.push({
                  type: "arc",
                  x: t,
                  y: e,
                  radius: n,
                  startAngle: i,
                  endAngle: r,
                  counterclockwise: o,
                });
            }),
            (h.prototype.arcTo = function (t, e, n, i, r) {
              throw new Error("arcTo not implemented.");
            }),
            (h.prototype.rect = function (t, e, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i))
                throw (
                  (l.error(
                    "jsPDF.context2d.rect: Invalid arguments",
                    arguments
                  ),
                  new Error("Invalid arguments passed to jsPDF.context2d.rect"))
                );
              this.moveTo(t, e),
                this.lineTo(t + n, e),
                this.lineTo(t + n, e + i),
                this.lineTo(t, e + i),
                this.lineTo(t, e),
                this.lineTo(t + n, e),
                this.lineTo(t, e);
            }),
            (h.prototype.fillRect = function (t, e, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i))
                throw (
                  (l.error(
                    "jsPDF.context2d.fillRect: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.fillRect"
                  ))
                );
              if (!m.call(this)) {
                var r = {};
                "butt" !== this.lineCap &&
                  ((r.lineCap = this.lineCap), (this.lineCap = "butt")),
                  "miter" !== this.lineJoin &&
                    ((r.lineJoin = this.lineJoin), (this.lineJoin = "miter")),
                  this.beginPath(),
                  this.rect(t, e, n, i),
                  this.fill(),
                  r.hasOwnProperty("lineCap") && (this.lineCap = r.lineCap),
                  r.hasOwnProperty("lineJoin") && (this.lineJoin = r.lineJoin);
              }
            }),
            (h.prototype.strokeRect = function (t, e, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i))
                throw (
                  (l.error(
                    "jsPDF.context2d.strokeRect: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.strokeRect"
                  ))
                );
              g.call(this) ||
                (this.beginPath(), this.rect(t, e, n, i), this.stroke());
            }),
            (h.prototype.clearRect = function (t, e, n, i) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i))
                throw (
                  (l.error(
                    "jsPDF.context2d.clearRect: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.clearRect"
                  ))
                );
              this.ignoreClearRect ||
                ((this.fillStyle = "#ffffff"), this.fillRect(t, e, n, i));
            }),
            (h.prototype.save = function (t) {
              t = "boolean" != typeof t || t;
              for (
                var e = this.pdf.internal.getCurrentPageInfo().pageNumber,
                  n = 0;
                n < this.pdf.internal.getNumberOfPages();
                n++
              )
                this.pdf.setPage(n + 1), this.pdf.internal.out("q");
              if ((this.pdf.setPage(e), t)) {
                this.ctx.fontSize = this.pdf.internal.getFontSize();
                var i = new p(this.ctx);
                this.ctxStack.push(this.ctx), (this.ctx = i);
              }
            }),
            (h.prototype.restore = function (t) {
              t = "boolean" != typeof t || t;
              for (
                var e = this.pdf.internal.getCurrentPageInfo().pageNumber,
                  n = 0;
                n < this.pdf.internal.getNumberOfPages();
                n++
              )
                this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
              this.pdf.setPage(e),
                t &&
                  0 !== this.ctxStack.length &&
                  ((this.ctx = this.ctxStack.pop()),
                  (this.fillStyle = this.ctx.fillStyle),
                  (this.strokeStyle = this.ctx.strokeStyle),
                  (this.font = this.ctx.font),
                  (this.lineCap = this.ctx.lineCap),
                  (this.lineWidth = this.ctx.lineWidth),
                  (this.lineJoin = this.ctx.lineJoin),
                  (this.lineDash = this.ctx.lineDash),
                  (this.lineDashOffset = this.ctx.lineDashOffset));
            }),
            (h.prototype.toDataURL = function () {
              throw new Error("toDataUrl not implemented.");
            });
          var f = function (t) {
              var e, n, i, r;
              if ((!0 === t.isCanvasGradient && (t = t.getColor()), !t))
                return { r: 0, g: 0, b: 0, a: 0, style: t };
              if (
                /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(
                  t
                )
              )
                (e = 0), (n = 0), (i = 0), (r = 0);
              else {
                var o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                if (null !== o)
                  (e = parseInt(o[1])),
                    (n = parseInt(o[2])),
                    (i = parseInt(o[3])),
                    (r = 1);
                else if (
                  null !==
                  (o =
                    /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(
                      t
                    ))
                )
                  (e = parseInt(o[1])),
                    (n = parseInt(o[2])),
                    (i = parseInt(o[3])),
                    (r = parseFloat(o[4]));
                else {
                  if (((r = 1), "string" == typeof t && "#" !== t.charAt(0))) {
                    var a = new b(t);
                    t = a.ok ? a.toHex() : "#000000";
                  }
                  4 === t.length
                    ? ((e = t.substring(1, 2)),
                      (e += e),
                      (n = t.substring(2, 3)),
                      (n += n),
                      (i = t.substring(3, 4)),
                      (i += i))
                    : ((e = t.substring(1, 3)),
                      (n = t.substring(3, 5)),
                      (i = t.substring(5, 7))),
                    (e = parseInt(e, 16)),
                    (n = parseInt(n, 16)),
                    (i = parseInt(i, 16));
                }
              }
              return { r: e, g: n, b: i, a: r, style: t };
            },
            m = function () {
              return this.ctx.isFillTransparent || 0 == this.globalAlpha;
            },
            g = function () {
              return Boolean(
                this.ctx.isStrokeTransparent || 0 == this.globalAlpha
              );
            };
          (h.prototype.fillText = function (t, e, n, i) {
            if (isNaN(e) || isNaN(n) || "string" != typeof t)
              throw (
                (l.error(
                  "jsPDF.context2d.fillText: Invalid arguments",
                  arguments
                ),
                new Error(
                  "Invalid arguments passed to jsPDF.context2d.fillText"
                ))
              );
            if (((i = isNaN(i) ? void 0 : i), !m.call(this))) {
              var r = R(this.ctx.transform.rotation),
                o = this.ctx.transform.scaleX;
              D.call(this, {
                text: t,
                x: e,
                y: n,
                scale: o,
                angle: r,
                align: this.textAlign,
                maxWidth: i,
              });
            }
          }),
            (h.prototype.strokeText = function (t, e, n, i) {
              if (isNaN(e) || isNaN(n) || "string" != typeof t)
                throw (
                  (l.error(
                    "jsPDF.context2d.strokeText: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.strokeText"
                  ))
                );
              if (!g.call(this)) {
                i = isNaN(i) ? void 0 : i;
                var r = R(this.ctx.transform.rotation),
                  o = this.ctx.transform.scaleX;
                D.call(this, {
                  text: t,
                  x: e,
                  y: n,
                  scale: o,
                  renderingMode: "stroke",
                  angle: r,
                  align: this.textAlign,
                  maxWidth: i,
                });
              }
            }),
            (h.prototype.measureText = function (t) {
              if ("string" != typeof t)
                throw (
                  (l.error(
                    "jsPDF.context2d.measureText: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.measureText"
                  ))
                );
              var e = this.pdf,
                n = this.pdf.internal.scaleFactor,
                i = e.internal.getFontSize(),
                r = (e.getStringUnitWidth(t) * i) / e.internal.scaleFactor,
                o = function (t) {
                  var e = (t = t || {}).width || 0;
                  return (
                    Object.defineProperty(this, "width", {
                      get: function () {
                        return e;
                      },
                    }),
                    this
                  );
                };
              return new o({
                width: (r *= Math.round(((96 * n) / 72) * 1e4) / 1e4),
              });
            }),
            (h.prototype.scale = function (t, e) {
              if (isNaN(t) || isNaN(e))
                throw (
                  (l.error(
                    "jsPDF.context2d.scale: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.scale"
                  ))
                );
              var n = new d(t, 0, 0, e, 0, 0);
              this.ctx.transform = this.ctx.transform.multiply(n);
            }),
            (h.prototype.rotate = function (t) {
              if (isNaN(t))
                throw (
                  (l.error(
                    "jsPDF.context2d.rotate: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.rotate"
                  ))
                );
              var e = new d(
                Math.cos(t),
                Math.sin(t),
                -Math.sin(t),
                Math.cos(t),
                0,
                0
              );
              this.ctx.transform = this.ctx.transform.multiply(e);
            }),
            (h.prototype.translate = function (t, e) {
              if (isNaN(t) || isNaN(e))
                throw (
                  (l.error(
                    "jsPDF.context2d.translate: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.translate"
                  ))
                );
              var n = new d(1, 0, 0, 1, t, e);
              this.ctx.transform = this.ctx.transform.multiply(n);
            }),
            (h.prototype.transform = function (t, e, n, i, r, o) {
              if (
                isNaN(t) ||
                isNaN(e) ||
                isNaN(n) ||
                isNaN(i) ||
                isNaN(r) ||
                isNaN(o)
              )
                throw (
                  (l.error(
                    "jsPDF.context2d.transform: Invalid arguments",
                    arguments
                  ),
                  new Error(
                    "Invalid arguments passed to jsPDF.context2d.transform"
                  ))
                );
              var a = new d(t, e, n, i, r, o);
              this.ctx.transform = this.ctx.transform.multiply(a);
            }),
            (h.prototype.setTransform = function (t, e, n, i, r, o) {
              (t = isNaN(t) ? 1 : t),
                (e = isNaN(e) ? 0 : e),
                (n = isNaN(n) ? 0 : n),
                (i = isNaN(i) ? 1 : i),
                (r = isNaN(r) ? 0 : r),
                (o = isNaN(o) ? 0 : o),
                (this.ctx.transform = new d(t, e, n, i, r, o));
            });
          var v = function () {
            return (
              this.margin[0] > 0 ||
              this.margin[1] > 0 ||
              this.margin[2] > 0 ||
              this.margin[3] > 0
            );
          };
          h.prototype.drawImage = function (t, e, n, i, r, o, a, s, l) {
            var u = this.pdf.getImageProperties(t),
              p = 1,
              h = 1,
              f = 1,
              b = 1;
            void 0 !== i &&
              void 0 !== s &&
              ((f = s / i),
              (b = l / r),
              (p = ((u.width / i) * s) / i),
              (h = ((u.height / r) * l) / r)),
              void 0 === o && ((o = e), (a = n), (e = 0), (n = 0)),
              void 0 !== i && void 0 === s && ((s = i), (l = r)),
              void 0 === i && void 0 === s && ((s = u.width), (l = u.height));
            for (
              var m,
                g = this.ctx.transform.decompose(),
                y = R(g.rotate.shx),
                w = new d(),
                x = (w = (w = (w = w.multiply(g.translate)).multiply(
                  g.skew
                )).multiply(g.scale)).applyToRectangle(
                  new c(o - e * f, a - n * b, i * p, r * h)
                ),
                z = _.call(this, x),
                C = [],
                k = 0;
              k < z.length;
              k += 1
            )
              -1 === C.indexOf(z[k]) && C.push(z[k]);
            if ((O(C), this.autoPaging))
              for (var S = C[0], T = C[C.length - 1], D = S; D < T + 1; D++) {
                this.pdf.setPage(D);
                var L =
                    this.pdf.internal.pageSize.width -
                    this.margin[3] -
                    this.margin[1],
                  q = 1 === D ? this.posY + this.margin[0] : this.margin[0],
                  E =
                    this.pdf.internal.pageSize.height -
                    this.posY -
                    this.margin[0] -
                    this.margin[2],
                  j =
                    this.pdf.internal.pageSize.height -
                    this.margin[0] -
                    this.margin[2],
                  P = 1 === D ? 0 : E + (D - 2) * j;
                if (0 !== this.ctx.clip_path.length) {
                  var I = this.path;
                  (m = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                    (this.path = M(
                      m,
                      this.posX + this.margin[3],
                      -P + q + this.ctx.prevPageLastElemOffset
                    )),
                    A.call(this, "fill", !0),
                    (this.path = I);
                }
                var W = JSON.parse(JSON.stringify(x));
                W = M(
                  [W],
                  this.posX + this.margin[3],
                  -P + q + this.ctx.prevPageLastElemOffset
                )[0];
                var N = (D > S || D < T) && v.call(this);
                N &&
                  (this.pdf.saveGraphicsState(),
                  this.pdf
                    .rect(this.margin[3], this.margin[0], L, j, null)
                    .clip()
                    .discardPath()),
                  this.pdf.addImage(
                    t,
                    "JPEG",
                    W.x,
                    W.y,
                    W.w,
                    W.h,
                    null,
                    null,
                    y
                  ),
                  N && this.pdf.restoreGraphicsState();
              }
            else
              this.pdf.addImage(t, "JPEG", x.x, x.y, x.w, x.h, null, null, y);
          };
          var _ = function (t, e, n) {
              var i = [];
              (e = e || this.pdf.internal.pageSize.width),
                (n =
                  n ||
                  this.pdf.internal.pageSize.height -
                    this.margin[0] -
                    this.margin[2]);
              var r = this.posY + this.ctx.prevPageLastElemOffset;
              switch (t.type) {
                default:
                case "mt":
                case "lt":
                  i.push(Math.floor((t.y + r) / n) + 1);
                  break;
                case "arc":
                  i.push(Math.floor((t.y + r - t.radius) / n) + 1),
                    i.push(Math.floor((t.y + r + t.radius) / n) + 1);
                  break;
                case "qct":
                  var o = I(
                    this.ctx.lastPoint.x,
                    this.ctx.lastPoint.y,
                    t.x1,
                    t.y1,
                    t.x,
                    t.y
                  );
                  i.push(Math.floor((o.y + r) / n) + 1),
                    i.push(Math.floor((o.y + o.h + r) / n) + 1);
                  break;
                case "bct":
                  var a = W(
                    this.ctx.lastPoint.x,
                    this.ctx.lastPoint.y,
                    t.x1,
                    t.y1,
                    t.x2,
                    t.y2,
                    t.x,
                    t.y
                  );
                  i.push(Math.floor((a.y + r) / n) + 1),
                    i.push(Math.floor((a.y + a.h + r) / n) + 1);
                  break;
                case "rect":
                  i.push(Math.floor((t.y + r) / n) + 1),
                    i.push(Math.floor((t.y + t.h + r) / n) + 1);
              }
              for (var s = 0; s < i.length; s += 1)
                for (; this.pdf.internal.getNumberOfPages() < i[s]; )
                  y.call(this);
              return i;
            },
            y = function () {
              var t = this.fillStyle,
                e = this.strokeStyle,
                n = this.font,
                i = this.lineCap,
                r = this.lineWidth,
                o = this.lineJoin;
              this.pdf.addPage(),
                (this.fillStyle = t),
                (this.strokeStyle = e),
                (this.font = n),
                (this.lineCap = i),
                (this.lineWidth = r),
                (this.lineJoin = o);
            },
            M = function (t, e, n) {
              for (var i = 0; i < t.length; i++)
                switch (t[i].type) {
                  case "bct":
                    (t[i].x2 += e), (t[i].y2 += n);
                  case "qct":
                    (t[i].x1 += e), (t[i].y1 += n);
                  case "mt":
                  case "lt":
                  case "arc":
                  default:
                    (t[i].x += e), (t[i].y += n);
                }
              return t;
            },
            O = function (t) {
              return t.sort(function (t, e) {
                return t - e;
              });
            },
            w = function (t, e) {
              for (
                var n,
                  i,
                  r = this.fillStyle,
                  o = this.strokeStyle,
                  a = this.lineCap,
                  s = this.lineWidth,
                  l = Math.abs(s * this.ctx.transform.scaleX),
                  c = this.lineJoin,
                  d = JSON.parse(JSON.stringify(this.path)),
                  u = JSON.parse(JSON.stringify(this.path)),
                  p = [],
                  h = 0;
                h < u.length;
                h++
              )
                if (void 0 !== u[h].x)
                  for (var f = _.call(this, u[h]), b = 0; b < f.length; b += 1)
                    -1 === p.indexOf(f[b]) && p.push(f[b]);
              for (var m = 0; m < p.length; m++)
                for (; this.pdf.internal.getNumberOfPages() < p[m]; )
                  y.call(this);
              if ((O(p), this.autoPaging))
                for (var g = p[0], w = p[p.length - 1], x = g; x < w + 1; x++) {
                  this.pdf.setPage(x),
                    (this.fillStyle = r),
                    (this.strokeStyle = o),
                    (this.lineCap = a),
                    (this.lineWidth = l),
                    (this.lineJoin = c);
                  var z =
                      this.pdf.internal.pageSize.width -
                      this.margin[3] -
                      this.margin[1],
                    C = 1 === x ? this.posY + this.margin[0] : this.margin[0],
                    k =
                      this.pdf.internal.pageSize.height -
                      this.posY -
                      this.margin[0] -
                      this.margin[2],
                    S =
                      this.pdf.internal.pageSize.height -
                      this.margin[0] -
                      this.margin[2],
                    T = 1 === x ? 0 : k + (x - 2) * S;
                  if (0 !== this.ctx.clip_path.length) {
                    var D = this.path;
                    (n = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                      (this.path = M(
                        n,
                        this.posX + this.margin[3],
                        -T + C + this.ctx.prevPageLastElemOffset
                      )),
                      A.call(this, t, !0),
                      (this.path = D);
                  }
                  if (
                    ((i = JSON.parse(JSON.stringify(d))),
                    (this.path = M(
                      i,
                      this.posX + this.margin[3],
                      -T + C + this.ctx.prevPageLastElemOffset
                    )),
                    !1 === e || 0 === x)
                  ) {
                    var L = (x > g || x < w) && v.call(this);
                    L &&
                      (this.pdf.saveGraphicsState(),
                      this.pdf
                        .rect(this.margin[3], this.margin[0], z, S, null)
                        .clip()
                        .discardPath()),
                      A.call(this, t, e),
                      L && this.pdf.restoreGraphicsState();
                  }
                  this.lineWidth = s;
                }
              else
                (this.lineWidth = l), A.call(this, t, e), (this.lineWidth = s);
              this.path = d;
            },
            A = function (t, e) {
              if (
                ("stroke" !== t || e || !g.call(this)) &&
                ("stroke" === t || e || !m.call(this))
              ) {
                for (
                  var n, i, r = [], o = this.path, a = 0;
                  a < o.length;
                  a++
                ) {
                  var s = o[a];
                  switch (s.type) {
                    case "begin":
                      r.push({ begin: !0 });
                      break;
                    case "close":
                      r.push({ close: !0 });
                      break;
                    case "mt":
                      r.push({ start: s, deltas: [], abs: [] });
                      break;
                    case "lt":
                      var l = r.length;
                      if (
                        o[a - 1] &&
                        !isNaN(o[a - 1].x) &&
                        ((n = [s.x - o[a - 1].x, s.y - o[a - 1].y]), l > 0)
                      )
                        for (; l >= 0; l--)
                          if (!0 !== r[l - 1].close && !0 !== r[l - 1].begin) {
                            r[l - 1].deltas.push(n), r[l - 1].abs.push(s);
                            break;
                          }
                      break;
                    case "bct":
                      (n = [
                        s.x1 - o[a - 1].x,
                        s.y1 - o[a - 1].y,
                        s.x2 - o[a - 1].x,
                        s.y2 - o[a - 1].y,
                        s.x - o[a - 1].x,
                        s.y - o[a - 1].y,
                      ]),
                        r[r.length - 1].deltas.push(n);
                      break;
                    case "qct":
                      var c = o[a - 1].x + (2 / 3) * (s.x1 - o[a - 1].x),
                        d = o[a - 1].y + (2 / 3) * (s.y1 - o[a - 1].y),
                        u = s.x + (2 / 3) * (s.x1 - s.x),
                        p = s.y + (2 / 3) * (s.y1 - s.y),
                        h = s.x,
                        f = s.y;
                      (n = [
                        c - o[a - 1].x,
                        d - o[a - 1].y,
                        u - o[a - 1].x,
                        p - o[a - 1].y,
                        h - o[a - 1].x,
                        f - o[a - 1].y,
                      ]),
                        r[r.length - 1].deltas.push(n);
                      break;
                    case "arc":
                      r.push({ deltas: [], abs: [], arc: !0 }),
                        Array.isArray(r[r.length - 1].abs) &&
                          r[r.length - 1].abs.push(s);
                  }
                }
                i = e ? null : "stroke" === t ? "stroke" : "fill";
                for (var b = !1, v = 0; v < r.length; v++)
                  if (r[v].arc)
                    for (var _ = r[v].abs, y = 0; y < _.length; y++) {
                      var M = _[y];
                      "arc" === M.type
                        ? C.call(
                            this,
                            M.x,
                            M.y,
                            M.radius,
                            M.startAngle,
                            M.endAngle,
                            M.counterclockwise,
                            void 0,
                            e,
                            !b
                          )
                        : L.call(this, M.x, M.y),
                        (b = !0);
                    }
                  else if (!0 === r[v].close)
                    this.pdf.internal.out("h"), (b = !1);
                  else if (!0 !== r[v].begin) {
                    var O = r[v].start.x,
                      w = r[v].start.y;
                    q.call(this, r[v].deltas, O, w), (b = !0);
                  }
                i && k.call(this, i), e && S.call(this);
              }
            },
            x = function (t) {
              var e =
                  this.pdf.internal.getFontSize() /
                  this.pdf.internal.scaleFactor,
                n = e * (this.pdf.internal.getLineHeightFactor() - 1);
              switch (this.ctx.textBaseline) {
                case "bottom":
                  return t - n;
                case "top":
                  return t + e - n;
                case "hanging":
                  return t + e - 2 * n;
                case "middle":
                  return t + e / 2 - n;
                case "ideographic":
                  return t;
                case "alphabetic":
                default:
                  return t;
              }
            },
            z = function (t) {
              return (
                t +
                (this.pdf.internal.getFontSize() /
                  this.pdf.internal.scaleFactor) *
                  (this.pdf.internal.getLineHeightFactor() - 1)
              );
            };
          (h.prototype.createLinearGradient = function () {
            var t = function () {};
            return (
              (t.colorStops = []),
              (t.addColorStop = function (t, e) {
                this.colorStops.push([t, e]);
              }),
              (t.getColor = function () {
                return 0 === this.colorStops.length
                  ? "#000000"
                  : this.colorStops[0][1];
              }),
              (t.isCanvasGradient = !0),
              t
            );
          }),
            (h.prototype.createPattern = function () {
              return this.createLinearGradient();
            }),
            (h.prototype.createRadialGradient = function () {
              return this.createLinearGradient();
            });
          var C = function (t, e, n, i, r, o, a, s, l) {
              for (var c = j.call(this, n, i, r, o), d = 0; d < c.length; d++) {
                var u = c[d];
                0 === d &&
                  (l
                    ? T.call(this, u.x1 + t, u.y1 + e)
                    : L.call(this, u.x1 + t, u.y1 + e)),
                  E.call(this, t, e, u.x2, u.y2, u.x3, u.y3, u.x4, u.y4);
              }
              s ? S.call(this) : k.call(this, a);
            },
            k = function (t) {
              switch (t) {
                case "stroke":
                  this.pdf.internal.out("S");
                  break;
                case "fill":
                  this.pdf.internal.out("f");
              }
            },
            S = function () {
              this.pdf.clip(), this.pdf.discardPath();
            },
            T = function (t, e) {
              this.pdf.internal.out(n(t) + " " + i(e) + " m");
            },
            D = function (t) {
              var e;
              switch (t.align) {
                case "right":
                case "end":
                  e = "right";
                  break;
                case "center":
                  e = "center";
                  break;
                case "left":
                case "start":
                default:
                  e = "left";
              }
              var n = this.pdf.getTextDimensions(t.text),
                i = x.call(this, t.y),
                r = z.call(this, i) - n.h,
                o = this.ctx.transform.applyToPoint(new s(t.x, i)),
                a = this.ctx.transform.decompose(),
                l = new d();
              l = (l = (l = l.multiply(a.translate)).multiply(a.skew)).multiply(
                a.scale
              );
              for (
                var u,
                  p,
                  h,
                  f = this.ctx.transform.applyToRectangle(
                    new c(t.x, i, n.w, n.h)
                  ),
                  b = l.applyToRectangle(new c(t.x, r, n.w, n.h)),
                  m = _.call(this, b),
                  g = [],
                  y = 0;
                y < m.length;
                y += 1
              )
                -1 === g.indexOf(m[y]) && g.push(m[y]);
              if ((O(g), this.autoPaging))
                for (var w = g[0], C = g[g.length - 1], k = w; k < C + 1; k++) {
                  this.pdf.setPage(k);
                  var S = 1 === k ? this.posY + this.margin[0] : this.margin[0],
                    T =
                      this.pdf.internal.pageSize.height -
                      this.posY -
                      this.margin[0] -
                      this.margin[2],
                    D = this.pdf.internal.pageSize.height - this.margin[2],
                    L = D - this.margin[0],
                    q = this.pdf.internal.pageSize.width - this.margin[1],
                    E = q - this.margin[3],
                    j = 1 === k ? 0 : T + (k - 2) * L;
                  if (0 !== this.ctx.clip_path.length) {
                    var P = this.path;
                    (u = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                      (this.path = M(
                        u,
                        this.posX + this.margin[3],
                        -1 * j + S
                      )),
                      A.call(this, "fill", !0),
                      (this.path = P);
                  }
                  var R = M(
                    [JSON.parse(JSON.stringify(b))],
                    this.posX + this.margin[3],
                    -j + S + this.ctx.prevPageLastElemOffset
                  )[0];
                  t.scale >= 0.01 &&
                    ((p = this.pdf.internal.getFontSize()),
                    this.pdf.setFontSize(p * t.scale),
                    (h = this.lineWidth),
                    (this.lineWidth = h * t.scale));
                  var I = "text" !== this.autoPaging;
                  if (I || R.y + R.h <= D) {
                    if (I || (R.y >= S && R.x <= q)) {
                      var W = I
                          ? t.text
                          : this.pdf.splitTextToSize(
                              t.text,
                              t.maxWidth || q - R.x
                            )[0],
                        N = M(
                          [JSON.parse(JSON.stringify(f))],
                          this.posX + this.margin[3],
                          -j + S + this.ctx.prevPageLastElemOffset
                        )[0],
                        B = I && (k > w || k < C) && v.call(this);
                      B &&
                        (this.pdf.saveGraphicsState(),
                        this.pdf
                          .rect(this.margin[3], this.margin[0], E, L, null)
                          .clip()
                          .discardPath()),
                        this.pdf.text(W, N.x, N.y, {
                          angle: t.angle,
                          align: e,
                          renderingMode: t.renderingMode,
                        }),
                        B && this.pdf.restoreGraphicsState();
                    }
                  } else
                    R.y < D && (this.ctx.prevPageLastElemOffset += D - R.y);
                  t.scale >= 0.01 &&
                    (this.pdf.setFontSize(p), (this.lineWidth = h));
                }
              else
                t.scale >= 0.01 &&
                  ((p = this.pdf.internal.getFontSize()),
                  this.pdf.setFontSize(p * t.scale),
                  (h = this.lineWidth),
                  (this.lineWidth = h * t.scale)),
                  this.pdf.text(t.text, o.x + this.posX, o.y + this.posY, {
                    angle: t.angle,
                    align: e,
                    renderingMode: t.renderingMode,
                    maxWidth: t.maxWidth,
                  }),
                  t.scale >= 0.01 &&
                    (this.pdf.setFontSize(p), (this.lineWidth = h));
            },
            L = function (t, e, r, o) {
              (r = r || 0),
                (o = o || 0),
                this.pdf.internal.out(n(t + r) + " " + i(e + o) + " l");
            },
            q = function (t, e, n) {
              return this.pdf.lines(t, e, n, null, null);
            },
            E = function (t, n, i, r, s, l, c, d) {
              this.pdf.internal.out(
                [
                  e(o(i + t)),
                  e(a(r + n)),
                  e(o(s + t)),
                  e(a(l + n)),
                  e(o(c + t)),
                  e(a(d + n)),
                  "c",
                ].join(" ")
              );
            },
            j = function (t, e, n, i) {
              for (var r = 2 * Math.PI, o = Math.PI / 2; e > n; ) e -= r;
              var a = Math.abs(n - e);
              a < r && i && (a = r - a);
              for (var s = [], l = i ? -1 : 1, c = e; a > 1e-5; ) {
                var d = c + l * Math.min(a, o);
                s.push(P.call(this, t, c, d)), (a -= Math.abs(d - c)), (c = d);
              }
              return s;
            },
            P = function (t, e, n) {
              var i = (n - e) / 2,
                r = t * Math.cos(i),
                o = t * Math.sin(i),
                a = r,
                s = -o,
                l = a * a + s * s,
                c = l + a * r + s * o,
                d = ((4 / 3) * (Math.sqrt(2 * l * c) - c)) / (a * o - s * r),
                u = a - d * s,
                p = s + d * a,
                h = u,
                f = -p,
                b = i + e,
                m = Math.cos(b),
                g = Math.sin(b);
              return {
                x1: t * Math.cos(e),
                y1: t * Math.sin(e),
                x2: u * m - p * g,
                y2: u * g + p * m,
                x3: h * m - f * g,
                y3: h * g + f * m,
                x4: t * Math.cos(n),
                y4: t * Math.sin(n),
              };
            },
            R = function (t) {
              return (180 * t) / Math.PI;
            },
            I = function (t, e, n, i, r, o) {
              var a = t + 0.5 * (n - t),
                s = e + 0.5 * (i - e),
                l = r + 0.5 * (n - r),
                d = o + 0.5 * (i - o),
                u = Math.min(t, r, a, l),
                p = Math.max(t, r, a, l),
                h = Math.min(e, o, s, d),
                f = Math.max(e, o, s, d);
              return new c(u, h, p - u, f - h);
            },
            W = function (t, e, n, i, r, o, a, s) {
              var l,
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
                w = n - t,
                A = i - e,
                x = r - n,
                z = o - i,
                C = a - r,
                k = s - o;
              for (d = 0; d < 41; d++)
                (g =
                  (b = (u = t + (l = d / 40) * w) + l * ((h = n + l * x) - u)) +
                  l * (h + l * (r + l * C - h) - b)),
                  (v =
                    (m = (p = e + l * A) + l * ((f = i + l * z) - p)) +
                    l * (f + l * (o + l * k - f) - m)),
                  0 == d
                    ? ((_ = g), (y = v), (M = g), (O = v))
                    : ((_ = Math.min(_, g)),
                      (y = Math.min(y, v)),
                      (M = Math.max(M, g)),
                      (O = Math.max(O, v)));
              return new c(
                Math.round(_),
                Math.round(y),
                Math.round(M - _),
                Math.round(O - y)
              );
            },
            N = function () {
              if (
                this.prevLineDash ||
                this.ctx.lineDash.length ||
                this.ctx.lineDashOffset
              ) {
                var t,
                  e,
                  n =
                    ((t = this.ctx.lineDash),
                    (e = this.ctx.lineDashOffset),
                    JSON.stringify({ lineDash: t, lineDashOffset: e }));
                this.prevLineDash !== n &&
                  (this.pdf.setLineDash(
                    this.ctx.lineDash,
                    this.ctx.lineDashOffset
                  ),
                  (this.prevLineDash = n));
              }
            };
        })(W.API),
          (function (t) {
            var e = function (t) {
                var e, n, i, r, o, a, s, l, c, d;
                for (
                  /[^\x00-\xFF]/.test(t),
                    n = [],
                    i = 0,
                    r = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length;
                  r > i;
                  i += 4
                )
                  0 !==
                  (o =
                    (t.charCodeAt(i) << 24) +
                    (t.charCodeAt(i + 1) << 16) +
                    (t.charCodeAt(i + 2) << 8) +
                    t.charCodeAt(i + 3))
                    ? ((a =
                        (o =
                          ((o =
                            ((o =
                              ((o = (o - (d = o % 85)) / 85) - (c = o % 85)) /
                              85) -
                              (l = o % 85)) /
                            85) -
                            (s = o % 85)) /
                          85) % 85),
                      n.push(a + 33, s + 33, l + 33, c + 33, d + 33))
                    : n.push(122);
                return (
                  (function (t, e) {
                    for (var n = e; n > 0; n--) t.pop();
                  })(n, e.length),
                  String.fromCharCode.apply(String, n) + "~>"
                );
              },
              n = function (t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a = String,
                  s = "length",
                  l = 255,
                  c = "charCodeAt",
                  d = "slice",
                  u = "replace";
                for (
                  t[d](-2),
                    t = t[d](0, -2)[u](/\s/g, "")[u]("z", "!!!!!"),
                    i = [],
                    r = 0,
                    o = (t += e = "uuuuu"[d](t[s] % 5 || 5))[s];
                  o > r;
                  r += 5
                )
                  (n =
                    52200625 * (t[c](r) - 33) +
                    614125 * (t[c](r + 1) - 33) +
                    7225 * (t[c](r + 2) - 33) +
                    85 * (t[c](r + 3) - 33) +
                    (t[c](r + 4) - 33)),
                    i.push(l & (n >> 24), l & (n >> 16), l & (n >> 8), l & n);
                return (
                  (function (t, e) {
                    for (var n = e; n > 0; n--) t.pop();
                  })(i, e[s]),
                  a.fromCharCode.apply(a, i)
                );
              },
              i = function (t) {
                var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
                if (
                  (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") &&
                    (t = t.substr(0, t.indexOf(">"))),
                  t.length % 2 && (t += "0"),
                  !1 === e.test(t))
                )
                  return "";
                for (var n = "", i = 0; i < t.length; i += 2)
                  n += String.fromCharCode("0x" + (t[i] + t[i + 1]));
                return n;
              },
              r = function (t) {
                for (var e = new Uint8Array(t.length), n = t.length; n--; )
                  e[n] = t.charCodeAt(n);
                return (e = Object(o.b)(e)).reduce(function (t, e) {
                  return t + String.fromCharCode(e);
                }, "");
              };
            t.processDataByFilters = function (t, o) {
              var a = 0,
                s = t || "",
                l = [];
              for (
                "string" == typeof (o = o || []) && (o = [o]), a = 0;
                a < o.length;
                a += 1
              )
                switch (o[a]) {
                  case "ASCII85Decode":
                  case "/ASCII85Decode":
                    (s = n(s)), l.push("/ASCII85Encode");
                    break;
                  case "ASCII85Encode":
                  case "/ASCII85Encode":
                    (s = e(s)), l.push("/ASCII85Decode");
                    break;
                  case "ASCIIHexDecode":
                  case "/ASCIIHexDecode":
                    (s = i(s)), l.push("/ASCIIHexEncode");
                    break;
                  case "ASCIIHexEncode":
                  case "/ASCIIHexEncode":
                    (s =
                      s
                        .split("")
                        .map(function (t) {
                          return ("0" + t.charCodeAt().toString(16)).slice(-2);
                        })
                        .join("") + ">"),
                      l.push("/ASCIIHexDecode");
                    break;
                  case "FlateEncode":
                  case "/FlateEncode":
                    (s = r(s)), l.push("/FlateDecode");
                    break;
                  default:
                    throw new Error(
                      'The filter: "' + o[a] + '" is not implemented'
                    );
                }
              return { data: s, reverseChain: l.reverse().join(" ") };
            };
          })(W.API),
          (function (t) {
            (t.loadFile = function (t, e, n) {
              return (function (t, e, n) {
                (e = !1 !== e),
                  (n = "function" == typeof n ? n : function () {});
                var i = void 0;
                try {
                  i = (function (t, e, n) {
                    var i = new XMLHttpRequest(),
                      r = 0,
                      o = function (t) {
                        var e = t.length,
                          n = [],
                          i = String.fromCharCode;
                        for (r = 0; r < e; r += 1)
                          n.push(i(255 & t.charCodeAt(r)));
                        return n.join("");
                      };
                    if (
                      (i.open("GET", t, !e),
                      i.overrideMimeType("text/plain; charset=x-user-defined"),
                      !1 === e &&
                        (i.onload = function () {
                          200 === i.status
                            ? n(o(this.responseText))
                            : n(void 0);
                        }),
                      i.send(null),
                      e && 200 === i.status)
                    )
                      return o(i.responseText);
                  })(t, e, n);
                } catch (t) {}
                return i;
              })(t, e, n);
            }),
              (t.loadImageFile = t.loadFile);
          })(W.API),
          (function (t) {
            function e() {
              return (
                a.html2canvas
                  ? Promise.resolve(a.html2canvas)
                  : n.e(4).then(n.t.bind(null, 545, 7))
              )
                .catch(function (t) {
                  return Promise.reject(
                    new Error("Could not load html2canvas: " + t)
                  );
                })
                .then(function (t) {
                  return t.default ? t.default : t;
                });
            }
            function i() {
              return (
                a.DOMPurify
                  ? Promise.resolve(a.DOMPurify)
                  : n.e(3).then(n.t.bind(null, 546, 7))
              )
                .catch(function (t) {
                  return Promise.reject(
                    new Error("Could not load dompurify: " + t)
                  );
                })
                .then(function (t) {
                  return t.default ? t.default : t;
                });
            }
            var o = function (t) {
                var e = r()(t);
                return "undefined" === e
                  ? "undefined"
                  : "string" === e || t instanceof String
                  ? "string"
                  : "number" === e || t instanceof Number
                  ? "number"
                  : "function" === e || t instanceof Function
                  ? "function"
                  : t && t.constructor === Array
                  ? "array"
                  : t && 1 === t.nodeType
                  ? "element"
                  : "object" === e
                  ? "object"
                  : "unknown";
              },
              s = function (t, e) {
                var n = document.createElement(t);
                for (var i in (e.className && (n.className = e.className),
                e.innerHTML &&
                  e.dompurify &&
                  (n.innerHTML = e.dompurify.sanitize(e.innerHTML)),
                e.style))
                  n.style[i] = e.style[i];
                return n;
              },
              l = function t(e) {
                var n = Object.assign(
                    t.convert(Promise.resolve()),
                    JSON.parse(JSON.stringify(t.template))
                  ),
                  i = t.convert(Promise.resolve(), n);
                return (i = i.setProgress(1, t, 1, [t])).set(e);
              };
            ((l.prototype = Object.create(Promise.prototype)).constructor = l),
              (l.convert = function (t, e) {
                return (t.__proto__ = e || l.prototype), t;
              }),
              (l.template = {
                prop: {
                  src: null,
                  container: null,
                  overlay: null,
                  canvas: null,
                  img: null,
                  pdf: null,
                  pageSize: null,
                  callback: function () {},
                },
                progress: { val: 0, state: null, n: 0, stack: [] },
                opt: {
                  filename: "file.pdf",
                  margin: [0, 0, 0, 0],
                  enableLinks: !0,
                  x: 0,
                  y: 0,
                  html2canvas: {},
                  jsPDF: {},
                  backgroundColor: "transparent",
                },
              }),
              (l.prototype.from = function (t, e) {
                return this.then(function () {
                  switch (
                    (e =
                      e ||
                      (function (t) {
                        switch (o(t)) {
                          case "string":
                            return "string";
                          case "element":
                            return "canvas" === t.nodeName.toLowerCase()
                              ? "canvas"
                              : "element";
                          default:
                            return "unknown";
                        }
                      })(t))
                  ) {
                    case "string":
                      return this.then(i).then(function (e) {
                        return this.set({
                          src: s("div", { innerHTML: t, dompurify: e }),
                        });
                      });
                    case "element":
                      return this.set({ src: t });
                    case "canvas":
                      return this.set({ canvas: t });
                    case "img":
                      return this.set({ img: t });
                    default:
                      return this.error("Unknown source type.");
                  }
                });
              }),
              (l.prototype.to = function (t) {
                switch (t) {
                  case "container":
                    return this.toContainer();
                  case "canvas":
                    return this.toCanvas();
                  case "img":
                    return this.toImg();
                  case "pdf":
                    return this.toPdf();
                  default:
                    return this.error("Invalid target.");
                }
              }),
              (l.prototype.toContainer = function () {
                return this.thenList([
                  function () {
                    return (
                      this.prop.src ||
                      this.error("Cannot duplicate - no source HTML.")
                    );
                  },
                  function () {
                    return this.prop.pageSize || this.setPageSize();
                  },
                ]).then(function () {
                  var t = {
                      position: "relative",
                      display: "inline-block",
                      width:
                        ("number" != typeof this.opt.width ||
                        isNaN(this.opt.width) ||
                        "number" != typeof this.opt.windowWidth ||
                        isNaN(this.opt.windowWidth)
                          ? Math.max(
                              this.prop.src.clientWidth,
                              this.prop.src.scrollWidth,
                              this.prop.src.offsetWidth
                            )
                          : this.opt.windowWidth) + "px",
                      left: 0,
                      right: 0,
                      top: 0,
                      margin: "auto",
                      backgroundColor: this.opt.backgroundColor,
                    },
                    e = (function t(e, n) {
                      for (
                        var i =
                            3 === e.nodeType
                              ? document.createTextNode(e.nodeValue)
                              : e.cloneNode(!1),
                          r = e.firstChild;
                        r;
                        r = r.nextSibling
                      )
                        (!0 !== n &&
                          1 === r.nodeType &&
                          "SCRIPT" === r.nodeName) ||
                          i.appendChild(t(r, n));
                      return (
                        1 === e.nodeType &&
                          ("CANVAS" === e.nodeName
                            ? ((i.width = e.width),
                              (i.height = e.height),
                              i.getContext("2d").drawImage(e, 0, 0))
                            : ("TEXTAREA" !== e.nodeName &&
                                "SELECT" !== e.nodeName) ||
                              (i.value = e.value),
                          i.addEventListener(
                            "load",
                            function () {
                              (i.scrollTop = e.scrollTop),
                                (i.scrollLeft = e.scrollLeft);
                            },
                            !0
                          )),
                        i
                      );
                    })(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                  "BODY" === e.tagName &&
                    (t.height =
                      Math.max(
                        document.body.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.clientHeight,
                        document.documentElement.scrollHeight,
                        document.documentElement.offsetHeight
                      ) + "px"),
                    (this.prop.overlay = s("div", {
                      className: "html2pdf__overlay",
                      style: {
                        position: "fixed",
                        overflow: "hidden",
                        zIndex: 1e3,
                        left: "-100000px",
                        right: 0,
                        bottom: 0,
                        top: 0,
                      },
                    })),
                    (this.prop.container = s("div", {
                      className: "html2pdf__container",
                      style: t,
                    })),
                    this.prop.container.appendChild(e),
                    this.prop.container.firstChild.appendChild(
                      s("div", {
                        style: {
                          clear: "both",
                          border: "0 none transparent",
                          margin: 0,
                          padding: 0,
                          height: 0,
                        },
                      })
                    ),
                    (this.prop.container.style.float = "none"),
                    this.prop.overlay.appendChild(this.prop.container),
                    document.body.appendChild(this.prop.overlay),
                    (this.prop.container.firstChild.style.position =
                      "relative"),
                    (this.prop.container.height =
                      Math.max(
                        this.prop.container.firstChild.clientHeight,
                        this.prop.container.firstChild.scrollHeight,
                        this.prop.container.firstChild.offsetHeight
                      ) + "px");
                });
              }),
              (l.prototype.toCanvas = function () {
                var t = [
                  function () {
                    return (
                      document.body.contains(this.prop.container) ||
                      this.toContainer()
                    );
                  },
                ];
                return this.thenList(t)
                  .then(e)
                  .then(function (t) {
                    var e = Object.assign({}, this.opt.html2canvas);
                    return delete e.onrendered, t(this.prop.container, e);
                  })
                  .then(function (t) {
                    (this.opt.html2canvas.onrendered || function () {})(t),
                      (this.prop.canvas = t),
                      document.body.removeChild(this.prop.overlay);
                  });
              }),
              (l.prototype.toContext2d = function () {
                var t = [
                  function () {
                    return (
                      document.body.contains(this.prop.container) ||
                      this.toContainer()
                    );
                  },
                ];
                return this.thenList(t)
                  .then(e)
                  .then(function (t) {
                    var e = this.opt.jsPDF,
                      n = this.opt.fontFaces,
                      i =
                        "number" != typeof this.opt.width ||
                        isNaN(this.opt.width) ||
                        "number" != typeof this.opt.windowWidth ||
                        isNaN(this.opt.windowWidth)
                          ? 1
                          : this.opt.width / this.opt.windowWidth,
                      r = Object.assign(
                        {
                          async: !0,
                          allowTaint: !0,
                          scale: i,
                          scrollX: this.opt.scrollX || 0,
                          scrollY: this.opt.scrollY || 0,
                          backgroundColor: "#ffffff",
                          imageTimeout: 15e3,
                          logging: !0,
                          proxy: null,
                          removeContainer: !0,
                          foreignObjectRendering: !1,
                          useCORS: !1,
                        },
                        this.opt.html2canvas
                      );
                    if (
                      (delete r.onrendered,
                      (e.context2d.autoPaging =
                        void 0 === this.opt.autoPaging || this.opt.autoPaging),
                      (e.context2d.posX = this.opt.x),
                      (e.context2d.posY = this.opt.y),
                      (e.context2d.margin = this.opt.margin),
                      (e.context2d.fontFaces = n),
                      n)
                    )
                      for (var o = 0; o < n.length; ++o) {
                        var a = n[o],
                          s = a.src.find(function (t) {
                            return "truetype" === t.format;
                          });
                        s && e.addFont(s.url, a.ref.name, a.ref.style);
                      }
                    return (
                      (r.windowHeight = r.windowHeight || 0),
                      (r.windowHeight =
                        0 == r.windowHeight
                          ? Math.max(
                              this.prop.container.clientHeight,
                              this.prop.container.scrollHeight,
                              this.prop.container.offsetHeight
                            )
                          : r.windowHeight),
                      e.context2d.save(!0),
                      t(this.prop.container, r)
                    );
                  })
                  .then(function (t) {
                    this.opt.jsPDF.context2d.restore(!0),
                      (this.opt.html2canvas.onrendered || function () {})(t),
                      (this.prop.canvas = t),
                      document.body.removeChild(this.prop.overlay);
                  });
              }),
              (l.prototype.toImg = function () {
                return this.thenList([
                  function () {
                    return this.prop.canvas || this.toCanvas();
                  },
                ]).then(function () {
                  var t = this.prop.canvas.toDataURL(
                    "image/" + this.opt.image.type,
                    this.opt.image.quality
                  );
                  (this.prop.img = document.createElement("img")),
                    (this.prop.img.src = t);
                });
              }),
              (l.prototype.toPdf = function () {
                return this.thenList([
                  function () {
                    return this.toContext2d();
                  },
                ]).then(function () {
                  this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
                });
              }),
              (l.prototype.output = function (t, e, n) {
                return "img" === (n = n || "pdf").toLowerCase() ||
                  "image" === n.toLowerCase()
                  ? this.outputImg(t, e)
                  : this.outputPdf(t, e);
              }),
              (l.prototype.outputPdf = function (t, e) {
                return this.thenList([
                  function () {
                    return this.prop.pdf || this.toPdf();
                  },
                ]).then(function () {
                  return this.prop.pdf.output(t, e);
                });
              }),
              (l.prototype.outputImg = function (t) {
                return this.thenList([
                  function () {
                    return this.prop.img || this.toImg();
                  },
                ]).then(function () {
                  switch (t) {
                    case void 0:
                    case "img":
                      return this.prop.img;
                    case "datauristring":
                    case "dataurlstring":
                      return this.prop.img.src;
                    case "datauri":
                    case "dataurl":
                      return (document.location.href = this.prop.img.src);
                    default:
                      throw 'Image output type "' + t + '" is not supported.';
                  }
                });
              }),
              (l.prototype.save = function (t) {
                return this.thenList([
                  function () {
                    return this.prop.pdf || this.toPdf();
                  },
                ])
                  .set(t ? { filename: t } : null)
                  .then(function () {
                    this.prop.pdf.save(this.opt.filename);
                  });
              }),
              (l.prototype.doCallback = function () {
                return this.thenList([
                  function () {
                    return this.prop.pdf || this.toPdf();
                  },
                ]).then(function () {
                  this.prop.callback(this.prop.pdf);
                });
              }),
              (l.prototype.set = function (t) {
                if ("object" !== o(t)) return this;
                var e = Object.keys(t || {}).map(function (e) {
                  if (e in l.template.prop)
                    return function () {
                      this.prop[e] = t[e];
                    };
                  switch (e) {
                    case "margin":
                      return this.setMargin.bind(this, t.margin);
                    case "jsPDF":
                      return function () {
                        return (this.opt.jsPDF = t.jsPDF), this.setPageSize();
                      };
                    case "pageSize":
                      return this.setPageSize.bind(this, t.pageSize);
                    default:
                      return function () {
                        this.opt[e] = t[e];
                      };
                  }
                }, this);
                return this.then(function () {
                  return this.thenList(e);
                });
              }),
              (l.prototype.get = function (t, e) {
                return this.then(function () {
                  var n = t in l.template.prop ? this.prop[t] : this.opt[t];
                  return e ? e(n) : n;
                });
              }),
              (l.prototype.setMargin = function (t) {
                return this.then(function () {
                  switch (o(t)) {
                    case "number":
                      t = [t, t, t, t];
                    case "array":
                      if (
                        (2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
                        4 === t.length)
                      )
                        break;
                    default:
                      return this.error("Invalid margin array.");
                  }
                  this.opt.margin = t;
                }).then(this.setPageSize);
              }),
              (l.prototype.setPageSize = function (t) {
                function e(t, e) {
                  return Math.floor(((t * e) / 72) * 96);
                }
                return this.then(function () {
                  (t = t || W.getPageSize(this.opt.jsPDF)).hasOwnProperty(
                    "inner"
                  ) ||
                    ((t.inner = {
                      width: t.width - this.opt.margin[1] - this.opt.margin[3],
                      height:
                        t.height - this.opt.margin[0] - this.opt.margin[2],
                    }),
                    (t.inner.px = {
                      width: e(t.inner.width, t.k),
                      height: e(t.inner.height, t.k),
                    }),
                    (t.inner.ratio = t.inner.height / t.inner.width)),
                    (this.prop.pageSize = t);
                });
              }),
              (l.prototype.setProgress = function (t, e, n, i) {
                return (
                  null != t && (this.progress.val = t),
                  null != e && (this.progress.state = e),
                  null != n && (this.progress.n = n),
                  null != i && (this.progress.stack = i),
                  (this.progress.ratio =
                    this.progress.val / this.progress.state),
                  this
                );
              }),
              (l.prototype.updateProgress = function (t, e, n, i) {
                return this.setProgress(
                  t ? this.progress.val + t : null,
                  e || null,
                  n ? this.progress.n + n : null,
                  i ? this.progress.stack.concat(i) : null
                );
              }),
              (l.prototype.then = function (t, e) {
                var n = this;
                return this.thenCore(t, e, function (t, e) {
                  return (
                    n.updateProgress(null, null, 1, [t]),
                    Promise.prototype.then
                      .call(this, function (e) {
                        return n.updateProgress(null, t), e;
                      })
                      .then(t, e)
                      .then(function (t) {
                        return n.updateProgress(1), t;
                      })
                  );
                });
              }),
              (l.prototype.thenCore = function (t, e, n) {
                (n = n || Promise.prototype.then),
                  t && (t = t.bind(this)),
                  e && (e = e.bind(this));
                var i =
                    -1 !== Promise.toString().indexOf("[native code]") &&
                    "Promise" === Promise.name
                      ? this
                      : l.convert(Object.assign({}, this), Promise.prototype),
                  r = n.call(i, t, e);
                return l.convert(r, this.__proto__);
              }),
              (l.prototype.thenExternal = function (t, e) {
                return Promise.prototype.then.call(this, t, e);
              }),
              (l.prototype.thenList = function (t) {
                var e = this;
                return (
                  t.forEach(function (t) {
                    e = e.thenCore(t);
                  }),
                  e
                );
              }),
              (l.prototype.catch = function (t) {
                t && (t = t.bind(this));
                var e = Promise.prototype.catch.call(this, t);
                return l.convert(e, this);
              }),
              (l.prototype.catchExternal = function (t) {
                return Promise.prototype.catch.call(this, t);
              }),
              (l.prototype.error = function (t) {
                return this.then(function () {
                  throw new Error(t);
                });
              }),
              (l.prototype.using = l.prototype.set),
              (l.prototype.saveAs = l.prototype.save),
              (l.prototype.export = l.prototype.output),
              (l.prototype.run = l.prototype.then),
              (W.getPageSize = function (t, e, n) {
                if ("object" === r()(t)) {
                  var i = t;
                  (t = i.orientation), (e = i.unit || e), (n = i.format || n);
                }
                (e = e || "mm"),
                  (n = n || "a4"),
                  (t = ("" + (t || "P")).toLowerCase());
                var o,
                  a = ("" + n).toLowerCase(),
                  s = {
                    a0: [2383.94, 3370.39],
                    a1: [1683.78, 2383.94],
                    a2: [1190.55, 1683.78],
                    a3: [841.89, 1190.55],
                    a4: [595.28, 841.89],
                    a5: [419.53, 595.28],
                    a6: [297.64, 419.53],
                    a7: [209.76, 297.64],
                    a8: [147.4, 209.76],
                    a9: [104.88, 147.4],
                    a10: [73.7, 104.88],
                    b0: [2834.65, 4008.19],
                    b1: [2004.09, 2834.65],
                    b2: [1417.32, 2004.09],
                    b3: [1000.63, 1417.32],
                    b4: [708.66, 1000.63],
                    b5: [498.9, 708.66],
                    b6: [354.33, 498.9],
                    b7: [249.45, 354.33],
                    b8: [175.75, 249.45],
                    b9: [124.72, 175.75],
                    b10: [87.87, 124.72],
                    c0: [2599.37, 3676.54],
                    c1: [1836.85, 2599.37],
                    c2: [1298.27, 1836.85],
                    c3: [918.43, 1298.27],
                    c4: [649.13, 918.43],
                    c5: [459.21, 649.13],
                    c6: [323.15, 459.21],
                    c7: [229.61, 323.15],
                    c8: [161.57, 229.61],
                    c9: [113.39, 161.57],
                    c10: [79.37, 113.39],
                    dl: [311.81, 623.62],
                    letter: [612, 792],
                    "government-letter": [576, 756],
                    legal: [612, 1008],
                    "junior-legal": [576, 360],
                    ledger: [1224, 792],
                    tabloid: [792, 1224],
                    "credit-card": [153, 243],
                  };
                switch (e) {
                  case "pt":
                    o = 1;
                    break;
                  case "mm":
                    o = 72 / 25.4;
                    break;
                  case "cm":
                    o = 72 / 2.54;
                    break;
                  case "in":
                    o = 72;
                    break;
                  case "px":
                    o = 0.75;
                    break;
                  case "pc":
                  case "em":
                    o = 12;
                    break;
                  case "ex":
                    o = 6;
                    break;
                  default:
                    throw "Invalid unit: " + e;
                }
                var l,
                  c = 0,
                  d = 0;
                if (s.hasOwnProperty(a)) (c = s[a][1] / o), (d = s[a][0] / o);
                else
                  try {
                    (c = n[1]), (d = n[0]);
                  } catch (t) {
                    throw new Error("Invalid format: " + n);
                  }
                if ("p" === t || "portrait" === t)
                  (t = "p"), d > c && ((l = d), (d = c), (c = l));
                else {
                  if ("l" !== t && "landscape" !== t)
                    throw "Invalid orientation: " + t;
                  (t = "l"), c > d && ((l = d), (d = c), (c = l));
                }
                return { width: d, height: c, unit: e, k: o, orientation: t };
              }),
              (t.html = function (t, e) {
                ((e = e || {}).callback = e.callback || function () {}),
                  (e.html2canvas = e.html2canvas || {}),
                  (e.html2canvas.canvas = e.html2canvas.canvas || this.canvas),
                  (e.jsPDF = e.jsPDF || this),
                  (e.fontFaces = e.fontFaces ? e.fontFaces.map(jt) : null);
                var n = new l(e);
                return e.worker ? n : n.from(t).doCallback();
              });
          })(W.API),
          (W.API.addJS = function (t) {
            return (
              (Yt = t),
              this.internal.events.subscribe("postPutResources", function () {
                ($t = this.internal.newObject()),
                  this.internal.out("<<"),
                  this.internal.out(
                    "/Names [(EmbeddedJS) " + ($t + 1) + " 0 R]"
                  ),
                  this.internal.out(">>"),
                  this.internal.out("endobj"),
                  (Ht = this.internal.newObject()),
                  this.internal.out("<<"),
                  this.internal.out("/S /JavaScript"),
                  this.internal.out("/JS (" + Yt + ")"),
                  this.internal.out(">>"),
                  this.internal.out("endobj");
              }),
              this.internal.events.subscribe("putCatalog", function () {
                void 0 !== $t &&
                  void 0 !== Ht &&
                  this.internal.out("/Names <</JavaScript " + $t + " 0 R>>");
              }),
              this
            );
          }),
          (function (t) {
            var e;
            t.events.push([
              "postPutResources",
              function () {
                var t = this,
                  n = /^(\d+) 0 obj$/;
                if (this.outline.root.children.length > 0)
                  for (
                    var i = t.outline.render().split(/\r\n/), r = 0;
                    r < i.length;
                    r++
                  ) {
                    var o = i[r],
                      a = n.exec(o);
                    if (null != a) {
                      var s = a[1];
                      t.internal.newObjectDeferredBegin(s, !1);
                    }
                    t.internal.write(o);
                  }
                if (this.outline.createNamedDestinations) {
                  var l = this.internal.pages.length,
                    c = [];
                  for (r = 0; r < l; r++) {
                    var d = t.internal.newObject();
                    c.push(d);
                    var u = t.internal.getPageInfo(r + 1);
                    t.internal.write(
                      "<< /D[" + u.objId + " 0 R /XYZ null null null]>> endobj"
                    );
                  }
                  var p = t.internal.newObject();
                  for (
                    t.internal.write("<< /Names [ "), r = 0;
                    r < c.length;
                    r++
                  )
                    t.internal.write("(page_" + (r + 1) + ")" + c[r] + " 0 R");
                  t.internal.write(" ] >>", "endobj"),
                    (e = t.internal.newObject()),
                    t.internal.write("<< /Dests " + p + " 0 R"),
                    t.internal.write(">>", "endobj");
                }
              },
            ]),
              t.events.push([
                "putCatalog",
                function () {
                  this.outline.root.children.length > 0 &&
                    (this.internal.write(
                      "/Outlines",
                      this.outline.makeRef(this.outline.root)
                    ),
                    this.outline.createNamedDestinations &&
                      this.internal.write("/Names " + e + " 0 R"));
                },
              ]),
              t.events.push([
                "initialized",
                function () {
                  var t = this;
                  (t.outline = {
                    createNamedDestinations: !1,
                    root: { children: [] },
                  }),
                    (t.outline.add = function (t, e, n) {
                      var i = { title: e, options: n, children: [] };
                      return (
                        null == t && (t = this.root), t.children.push(i), i
                      );
                    }),
                    (t.outline.render = function () {
                      return (
                        (this.ctx = {}),
                        (this.ctx.val = ""),
                        (this.ctx.pdf = t),
                        this.genIds_r(this.root),
                        this.renderRoot(this.root),
                        this.renderItems(this.root),
                        this.ctx.val
                      );
                    }),
                    (t.outline.genIds_r = function (e) {
                      e.id = t.internal.newObjectDeferred();
                      for (var n = 0; n < e.children.length; n++)
                        this.genIds_r(e.children[n]);
                    }),
                    (t.outline.renderRoot = function (t) {
                      this.objStart(t),
                        this.line("/Type /Outlines"),
                        t.children.length > 0 &&
                          (this.line("/First " + this.makeRef(t.children[0])),
                          this.line(
                            "/Last " +
                              this.makeRef(t.children[t.children.length - 1])
                          )),
                        this.line("/Count " + this.count_r({ count: 0 }, t)),
                        this.objEnd();
                    }),
                    (t.outline.renderItems = function (e) {
                      for (
                        var n =
                            this.ctx.pdf.internal.getVerticalCoordinateString,
                          i = 0;
                        i < e.children.length;
                        i++
                      ) {
                        var r = e.children[i];
                        this.objStart(r),
                          this.line("/Title " + this.makeString(r.title)),
                          this.line("/Parent " + this.makeRef(e)),
                          i > 0 &&
                            this.line(
                              "/Prev " + this.makeRef(e.children[i - 1])
                            ),
                          i < e.children.length - 1 &&
                            this.line(
                              "/Next " + this.makeRef(e.children[i + 1])
                            ),
                          r.children.length > 0 &&
                            (this.line("/First " + this.makeRef(r.children[0])),
                            this.line(
                              "/Last " +
                                this.makeRef(r.children[r.children.length - 1])
                            ));
                        var o = (this.count = this.count_r({ count: 0 }, r));
                        if (
                          (o > 0 && this.line("/Count " + o),
                          r.options && r.options.pageNumber)
                        ) {
                          var a = t.internal.getPageInfo(r.options.pageNumber);
                          this.line(
                            "/Dest [" + a.objId + " 0 R /XYZ 0 " + n(0) + " 0]"
                          );
                        }
                        this.objEnd();
                      }
                      for (var s = 0; s < e.children.length; s++)
                        this.renderItems(e.children[s]);
                    }),
                    (t.outline.line = function (t) {
                      this.ctx.val += t + "\r\n";
                    }),
                    (t.outline.makeRef = function (t) {
                      return t.id + " 0 R";
                    }),
                    (t.outline.makeString = function (e) {
                      return "(" + t.internal.pdfEscape(e) + ")";
                    }),
                    (t.outline.objStart = function (t) {
                      this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
                    }),
                    (t.outline.objEnd = function () {
                      this.ctx.val += ">> \r\nendobj\r\n";
                    }),
                    (t.outline.count_r = function (t, e) {
                      for (var n = 0; n < e.children.length; n++)
                        t.count++, this.count_r(t, e.children[n]);
                      return t.count;
                    });
                },
              ]);
          })(W.API),
          (function (t) {
            var e = [192, 193, 194, 195, 196, 197, 198, 199];
            t.processJPEG = function (t, n, i, r, o, a) {
              var s,
                l = this.decode.DCT_DECODE,
                c = null;
              if (
                "string" == typeof t ||
                this.__addimage__.isArrayBuffer(t) ||
                this.__addimage__.isArrayBufferView(t)
              ) {
                switch (
                  ((t = o || t),
                  (t = this.__addimage__.isArrayBuffer(t)
                    ? new Uint8Array(t)
                    : t),
                  (s = (function (t) {
                    for (
                      var n,
                        i = 256 * t.charCodeAt(4) + t.charCodeAt(5),
                        r = t.length,
                        o = { width: 0, height: 0, numcomponents: 1 },
                        a = 4;
                      a < r;
                      a += 2
                    ) {
                      if (((a += i), -1 !== e.indexOf(t.charCodeAt(a + 1)))) {
                        (n = 256 * t.charCodeAt(a + 5) + t.charCodeAt(a + 6)),
                          (o = {
                            width:
                              256 * t.charCodeAt(a + 7) + t.charCodeAt(a + 8),
                            height: n,
                            numcomponents: t.charCodeAt(a + 9),
                          });
                        break;
                      }
                      i = 256 * t.charCodeAt(a + 2) + t.charCodeAt(a + 3);
                    }
                    return o;
                  })(
                    (t = this.__addimage__.isArrayBufferView(t)
                      ? this.__addimage__.arrayBufferToBinaryString(t)
                      : t)
                  )).numcomponents)
                ) {
                  case 1:
                    a = this.color_spaces.DEVICE_GRAY;
                    break;
                  case 4:
                    a = this.color_spaces.DEVICE_CMYK;
                    break;
                  case 3:
                    a = this.color_spaces.DEVICE_RGB;
                }
                c = {
                  data: t,
                  width: s.width,
                  height: s.height,
                  colorSpace: a,
                  bitsPerComponent: 8,
                  filter: l,
                  index: n,
                  alias: i,
                };
              }
              return c;
            };
          })(W.API);
        var Xt,
          Vt,
          Gt,
          Kt,
          Zt,
          Jt = (function () {
            var t, e, n;
            function i(t) {
              var e, n, i, r, o, a, s, l, c, d, u, p, h, f;
              for (
                this.data = t,
                  this.pos = 8,
                  this.palette = [],
                  this.imgData = [],
                  this.transparency = {},
                  this.animation = null,
                  this.text = {},
                  a = null;
                ;

              ) {
                switch (
                  ((e = this.readUInt32()),
                  (c = function () {
                    var t, e;
                    for (e = [], t = 0; t < 4; ++t)
                      e.push(String.fromCharCode(this.data[this.pos++]));
                    return e;
                  }
                    .call(this)
                    .join("")))
                ) {
                  case "IHDR":
                    (this.width = this.readUInt32()),
                      (this.height = this.readUInt32()),
                      (this.bits = this.data[this.pos++]),
                      (this.colorType = this.data[this.pos++]),
                      (this.compressionMethod = this.data[this.pos++]),
                      (this.filterMethod = this.data[this.pos++]),
                      (this.interlaceMethod = this.data[this.pos++]);
                    break;
                  case "acTL":
                    this.animation = {
                      numFrames: this.readUInt32(),
                      numPlays: this.readUInt32() || 1 / 0,
                      frames: [],
                    };
                    break;
                  case "PLTE":
                    this.palette = this.read(e);
                    break;
                  case "fcTL":
                    a && this.animation.frames.push(a),
                      (this.pos += 4),
                      (a = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32(),
                      }),
                      (o = this.readUInt16()),
                      (r = this.readUInt16() || 100),
                      (a.delay = (1e3 * o) / r),
                      (a.disposeOp = this.data[this.pos++]),
                      (a.blendOp = this.data[this.pos++]),
                      (a.data = []);
                    break;
                  case "IDAT":
                  case "fdAT":
                    for (
                      "fdAT" === c && ((this.pos += 4), (e -= 4)),
                        t = (null != a ? a.data : void 0) || this.imgData,
                        p = 0;
                      0 <= e ? p < e : p > e;
                      0 <= e ? ++p : --p
                    )
                      t.push(this.data[this.pos++]);
                    break;
                  case "tRNS":
                    switch (((this.transparency = {}), this.colorType)) {
                      case 3:
                        if (
                          ((i = this.palette.length / 3),
                          (this.transparency.indexed = this.read(e)),
                          this.transparency.indexed.length > i)
                        )
                          throw new Error(
                            "More transparent colors than palette size"
                          );
                        if ((d = i - this.transparency.indexed.length) > 0)
                          for (
                            h = 0;
                            0 <= d ? h < d : h > d;
                            0 <= d ? ++h : --h
                          )
                            this.transparency.indexed.push(255);
                        break;
                      case 0:
                        this.transparency.grayscale = this.read(e)[0];
                        break;
                      case 2:
                        this.transparency.rgb = this.read(e);
                    }
                    break;
                  case "tEXt":
                    (s = (u = this.read(e)).indexOf(0)),
                      (l = String.fromCharCode.apply(String, u.slice(0, s))),
                      (this.text[l] = String.fromCharCode.apply(
                        String,
                        u.slice(s + 1)
                      ));
                    break;
                  case "IEND":
                    return (
                      a && this.animation.frames.push(a),
                      (this.colors = function () {
                        switch (this.colorType) {
                          case 0:
                          case 3:
                          case 4:
                            return 1;
                          case 2:
                          case 6:
                            return 3;
                        }
                      }.call(this)),
                      (this.hasAlphaChannel =
                        4 === (f = this.colorType) || 6 === f),
                      (n = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                      (this.pixelBitlength = this.bits * n),
                      (this.colorSpace = function () {
                        switch (this.colors) {
                          case 1:
                            return "DeviceGray";
                          case 3:
                            return "DeviceRGB";
                        }
                      }.call(this)),
                      void (this.imgData = new Uint8Array(this.imgData))
                    );
                  default:
                    this.pos += e;
                }
                if (((this.pos += 4), this.pos > this.data.length))
                  throw new Error("Incomplete or corrupt PNG file");
              }
            }
            (i.prototype.read = function (t) {
              var e, n;
              for (n = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
                n.push(this.data[this.pos++]);
              return n;
            }),
              (i.prototype.readUInt32 = function () {
                return (
                  (this.data[this.pos++] << 24) |
                  (this.data[this.pos++] << 16) |
                  (this.data[this.pos++] << 8) |
                  this.data[this.pos++]
                );
              }),
              (i.prototype.readUInt16 = function () {
                return (this.data[this.pos++] << 8) | this.data[this.pos++];
              }),
              (i.prototype.decodePixels = function (t) {
                var e = this.pixelBitlength / 8,
                  n = new Uint8Array(this.width * this.height * e),
                  i = 0,
                  r = this;
                if ((null == t && (t = this.imgData), 0 === t.length))
                  return new Uint8Array(0);
                function a(o, a, s, l) {
                  var c,
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
                    k,
                    S,
                    T = Math.ceil((r.width - o) / s),
                    D = Math.ceil((r.height - a) / l),
                    L = r.width == T && r.height == D;
                  for (
                    O = e * T,
                      y = L ? n : new Uint8Array(O * D),
                      f = t.length,
                      M = 0,
                      d = 0;
                    M < D && i < f;

                  ) {
                    switch (t[i++]) {
                      case 0:
                        for (p = x = 0; x < O; p = x += 1) y[d++] = t[i++];
                        break;
                      case 1:
                        for (p = z = 0; z < O; p = z += 1)
                          (c = t[i++]),
                            (h = p < e ? 0 : y[d - e]),
                            (y[d++] = (c + h) % 256);
                        break;
                      case 2:
                        for (p = C = 0; C < O; p = C += 1)
                          (c = t[i++]),
                            (u = (p - (p % e)) / e),
                            (w = M && y[(M - 1) * O + u * e + (p % e)]),
                            (y[d++] = (w + c) % 256);
                        break;
                      case 3:
                        for (p = k = 0; k < O; p = k += 1)
                          (c = t[i++]),
                            (u = (p - (p % e)) / e),
                            (h = p < e ? 0 : y[d - e]),
                            (w = M && y[(M - 1) * O + u * e + (p % e)]),
                            (y[d++] = (c + Math.floor((h + w) / 2)) % 256);
                        break;
                      case 4:
                        for (p = S = 0; S < O; p = S += 1)
                          (c = t[i++]),
                            (u = (p - (p % e)) / e),
                            (h = p < e ? 0 : y[d - e]),
                            0 === M
                              ? (w = A = 0)
                              : ((w = y[(M - 1) * O + u * e + (p % e)]),
                                (A =
                                  u && y[(M - 1) * O + (u - 1) * e + (p % e)])),
                            (b = h + w - A),
                            (m = Math.abs(b - h)),
                            (v = Math.abs(b - w)),
                            (_ = Math.abs(b - A)),
                            (g = m <= v && m <= _ ? h : v <= _ ? w : A),
                            (y[d++] = (c + g) % 256);
                        break;
                      default:
                        throw new Error(
                          "Invalid filter algorithm: " + t[i - 1]
                        );
                    }
                    if (!L) {
                      var q = ((a + M * l) * r.width + o) * e,
                        E = M * O;
                      for (p = 0; p < T; p += 1) {
                        for (var j = 0; j < e; j += 1) n[q++] = y[E++];
                        q += (s - 1) * e;
                      }
                    }
                    M++;
                  }
                }
                return (
                  (t = Object(o.a)(t)),
                  1 == r.interlaceMethod
                    ? (a(0, 0, 8, 8),
                      a(4, 0, 8, 8),
                      a(0, 4, 4, 8),
                      a(2, 0, 4, 4),
                      a(0, 2, 2, 4),
                      a(1, 0, 2, 2),
                      a(0, 1, 1, 2))
                    : a(0, 0, 1, 1),
                  n
                );
              }),
              (i.prototype.decodePalette = function () {
                var t, e, n, i, r, o, a, s, l;
                for (
                  n = this.palette,
                    o = this.transparency.indexed || [],
                    r = new Uint8Array((o.length || 0) + n.length),
                    i = 0,
                    t = 0,
                    e = a = 0,
                    s = n.length;
                  a < s;
                  e = a += 3
                )
                  (r[i++] = n[e]),
                    (r[i++] = n[e + 1]),
                    (r[i++] = n[e + 2]),
                    (r[i++] = null != (l = o[t++]) ? l : 255);
                return r;
              }),
              (i.prototype.copyToImageData = function (t, e) {
                var n, i, r, o, a, s, l, c, d, u, p;
                if (
                  ((i = this.colors),
                  (d = null),
                  (n = this.hasAlphaChannel),
                  this.palette.length &&
                    ((d =
                      null != (p = this._decodedPalette)
                        ? p
                        : (this._decodedPalette = this.decodePalette())),
                    (i = 4),
                    (n = !0)),
                  (c = (r = t.data || t).length),
                  (a = d || e),
                  (o = s = 0),
                  1 === i)
                )
                  for (; o < c; )
                    (l = d ? 4 * e[o / 4] : s),
                      (u = a[l++]),
                      (r[o++] = u),
                      (r[o++] = u),
                      (r[o++] = u),
                      (r[o++] = n ? a[l++] : 255),
                      (s = l);
                else
                  for (; o < c; )
                    (l = d ? 4 * e[o / 4] : s),
                      (r[o++] = a[l++]),
                      (r[o++] = a[l++]),
                      (r[o++] = a[l++]),
                      (r[o++] = n ? a[l++] : 255),
                      (s = l);
              }),
              (i.prototype.decode = function () {
                var t;
                return (
                  (t = new Uint8Array(this.width * this.height * 4)),
                  this.copyToImageData(t, this.decodePixels()),
                  t
                );
              });
            var r = function () {
              if ("[object Window]" === Object.prototype.toString.call(a)) {
                try {
                  (e = a.document.createElement("canvas")),
                    (n = e.getContext("2d"));
                } catch (t) {
                  return !1;
                }
                return !0;
              }
              return !1;
            };
            return (
              r(),
              (t = function (t) {
                var i;
                if (!0 === r())
                  return (
                    (n.width = t.width),
                    (n.height = t.height),
                    n.clearRect(0, 0, t.width, t.height),
                    n.putImageData(t, 0, 0),
                    ((i = new Image()).src = e.toDataURL()),
                    i
                  );
                throw new Error(
                  "This method requires a Browser with Canvas-capability."
                );
              }),
              (i.prototype.decodeFrames = function (e) {
                var n, i, r, o, a, s, l, c;
                if (this.animation) {
                  for (
                    c = [], i = a = 0, s = (l = this.animation.frames).length;
                    a < s;
                    i = ++a
                  )
                    (n = l[i]),
                      (r = e.createImageData(n.width, n.height)),
                      (o = this.decodePixels(new Uint8Array(n.data))),
                      this.copyToImageData(r, o),
                      (n.imageData = r),
                      c.push((n.image = t(r)));
                  return c;
                }
              }),
              (i.prototype.renderFrame = function (t, e) {
                var n, i, r;
                return (
                  (n = (i = this.animation.frames)[e]),
                  (r = i[e - 1]),
                  0 === e && t.clearRect(0, 0, this.width, this.height),
                  1 === (null != r ? r.disposeOp : void 0)
                    ? t.clearRect(r.xOffset, r.yOffset, r.width, r.height)
                    : 2 === (null != r ? r.disposeOp : void 0) &&
                      t.putImageData(r.imageData, r.xOffset, r.yOffset),
                  0 === n.blendOp &&
                    t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
                  t.drawImage(n.image, n.xOffset, n.yOffset)
                );
              }),
              (i.prototype.animate = function (t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s = this;
                return (
                  (n = 0),
                  (a = this.animation),
                  (r = a.numFrames),
                  (i = a.frames),
                  (o = a.numPlays),
                  (e = function () {
                    var a, l;
                    if (
                      ((a = n++ % r),
                      (l = i[a]),
                      s.renderFrame(t, a),
                      r > 1 && n / r < o)
                    )
                      return (s.animation._timeout = setTimeout(e, l.delay));
                  })()
                );
              }),
              (i.prototype.stopAnimation = function () {
                var t;
                return clearTimeout(
                  null != (t = this.animation) ? t._timeout : void 0
                );
              }),
              (i.prototype.render = function (t) {
                var e, n;
                return (
                  t._png && t._png.stopAnimation(),
                  (t._png = this),
                  (t.width = this.width),
                  (t.height = this.height),
                  (e = t.getContext("2d")),
                  this.animation
                    ? (this.decodeFrames(e), this.animate(e))
                    : ((n = e.createImageData(this.width, this.height)),
                      this.copyToImageData(n, this.decodePixels()),
                      e.putImageData(n, 0, 0))
                );
              }),
              i
            );
          })();
        function Qt(t) {
          var e = 0;
          if (
            71 !== t[e++] ||
            73 !== t[e++] ||
            70 !== t[e++] ||
            56 !== t[e++] ||
            56 != ((t[e++] + 1) & 253) ||
            97 !== t[e++]
          )
            throw new Error("Invalid GIF 87a/89a header.");
          var n = t[e++] | (t[e++] << 8),
            i = t[e++] | (t[e++] << 8),
            r = t[e++],
            o = r >> 7,
            a = 1 << (1 + (7 & r));
          t[e++], t[e++];
          var s = null,
            l = null;
          o && ((s = e), (l = a), (e += 3 * a));
          var c = !0,
            d = [],
            u = 0,
            p = null,
            h = 0,
            f = null;
          for (this.width = n, this.height = i; c && e < t.length; )
            switch (t[e++]) {
              case 33:
                switch (t[e++]) {
                  case 255:
                    if (
                      11 !== t[e] ||
                      (78 == t[e + 1] &&
                        69 == t[e + 2] &&
                        84 == t[e + 3] &&
                        83 == t[e + 4] &&
                        67 == t[e + 5] &&
                        65 == t[e + 6] &&
                        80 == t[e + 7] &&
                        69 == t[e + 8] &&
                        50 == t[e + 9] &&
                        46 == t[e + 10] &&
                        48 == t[e + 11] &&
                        3 == t[e + 12] &&
                        1 == t[e + 13] &&
                        0 == t[e + 16])
                    )
                      (e += 14), (f = t[e++] | (t[e++] << 8)), e++;
                    else
                      for (e += 12; ; ) {
                        if (!((C = t[e++]) >= 0))
                          throw Error("Invalid block size");
                        if (0 === C) break;
                        e += C;
                      }
                    break;
                  case 249:
                    if (4 !== t[e++] || 0 !== t[e + 4])
                      throw new Error("Invalid graphics extension block.");
                    var b = t[e++];
                    (u = t[e++] | (t[e++] << 8)),
                      (p = t[e++]),
                      0 == (1 & b) && (p = null),
                      (h = (b >> 2) & 7),
                      e++;
                    break;
                  case 254:
                    for (;;) {
                      if (!((C = t[e++]) >= 0))
                        throw Error("Invalid block size");
                      if (0 === C) break;
                      e += C;
                    }
                    break;
                  default:
                    throw new Error(
                      "Unknown graphic control label: 0x" +
                        t[e - 1].toString(16)
                    );
                }
                break;
              case 44:
                var m = t[e++] | (t[e++] << 8),
                  g = t[e++] | (t[e++] << 8),
                  v = t[e++] | (t[e++] << 8),
                  _ = t[e++] | (t[e++] << 8),
                  y = t[e++],
                  M = (y >> 6) & 1,
                  O = 1 << (1 + (7 & y)),
                  w = s,
                  A = l,
                  x = !1;
                y >> 7 && ((x = !0), (w = e), (A = O), (e += 3 * O));
                var z = e;
                for (e++; ; ) {
                  var C;
                  if (!((C = t[e++]) >= 0)) throw Error("Invalid block size");
                  if (0 === C) break;
                  e += C;
                }
                d.push({
                  x: m,
                  y: g,
                  width: v,
                  height: _,
                  has_local_palette: x,
                  palette_offset: w,
                  palette_size: A,
                  data_offset: z,
                  data_length: e - z,
                  transparent_index: p,
                  interlaced: !!M,
                  delay: u,
                  disposal: h,
                });
                break;
              case 59:
                c = !1;
                break;
              default:
                throw new Error(
                  "Unknown gif block: 0x" + t[e - 1].toString(16)
                );
            }
          (this.numFrames = function () {
            return d.length;
          }),
            (this.loopCount = function () {
              return f;
            }),
            (this.frameInfo = function (t) {
              if (t < 0 || t >= d.length)
                throw new Error("Frame index out of range.");
              return d[t];
            }),
            (this.decodeAndBlitFrameBGRA = function (e, i) {
              var r = this.frameInfo(e),
                o = r.width * r.height,
                a = new Uint8Array(o);
              te(t, r.data_offset, a, o);
              var s = r.palette_offset,
                l = r.transparent_index;
              null === l && (l = 256);
              var c = r.width,
                d = n - c,
                u = c,
                p = 4 * (r.y * n + r.x),
                h = 4 * ((r.y + r.height) * n + r.x),
                f = p,
                b = 4 * d;
              !0 === r.interlaced && (b += 4 * n * 7);
              for (var m = 8, g = 0, v = a.length; g < v; ++g) {
                var _ = a[g];
                if (
                  (0 === u &&
                    ((u = c),
                    (f += b) >= h &&
                      ((b = 4 * d + 4 * n * (m - 1)),
                      (f = p + (c + d) * (m << 1)),
                      (m >>= 1))),
                  _ === l)
                )
                  f += 4;
                else {
                  var y = t[s + 3 * _],
                    M = t[s + 3 * _ + 1],
                    O = t[s + 3 * _ + 2];
                  (i[f++] = O), (i[f++] = M), (i[f++] = y), (i[f++] = 255);
                }
                --u;
              }
            }),
            (this.decodeAndBlitFrameRGBA = function (e, i) {
              var r = this.frameInfo(e),
                o = r.width * r.height,
                a = new Uint8Array(o);
              te(t, r.data_offset, a, o);
              var s = r.palette_offset,
                l = r.transparent_index;
              null === l && (l = 256);
              var c = r.width,
                d = n - c,
                u = c,
                p = 4 * (r.y * n + r.x),
                h = 4 * ((r.y + r.height) * n + r.x),
                f = p,
                b = 4 * d;
              !0 === r.interlaced && (b += 4 * n * 7);
              for (var m = 8, g = 0, v = a.length; g < v; ++g) {
                var _ = a[g];
                if (
                  (0 === u &&
                    ((u = c),
                    (f += b) >= h &&
                      ((b = 4 * d + 4 * n * (m - 1)),
                      (f = p + (c + d) * (m << 1)),
                      (m >>= 1))),
                  _ === l)
                )
                  f += 4;
                else {
                  var y = t[s + 3 * _],
                    M = t[s + 3 * _ + 1],
                    O = t[s + 3 * _ + 2];
                  (i[f++] = y), (i[f++] = M), (i[f++] = O), (i[f++] = 255);
                }
                --u;
              }
            });
        }
        function te(t, e, n, i) {
          for (
            var r = t[e++],
              o = 1 << r,
              a = o + 1,
              s = a + 1,
              c = r + 1,
              d = (1 << c) - 1,
              u = 0,
              p = 0,
              h = 0,
              f = t[e++],
              b = new Int32Array(4096),
              m = null;
            ;

          ) {
            for (; u < 16 && 0 !== f; )
              (p |= t[e++] << u), (u += 8), 1 === f ? (f = t[e++]) : --f;
            if (u < c) break;
            var g = p & d;
            if (((p >>= c), (u -= c), g !== o)) {
              if (g === a) break;
              for (var v = g < s ? g : m, _ = 0, y = v; y > o; )
                (y = b[y] >> 8), ++_;
              var M = y;
              if (h + _ + (v !== g ? 1 : 0) > i)
                return void l.log("Warning, gif stream longer than expected.");
              n[h++] = M;
              var O = (h += _);
              for (v !== g && (n[h++] = M), y = v; _--; )
                (y = b[y]), (n[--O] = 255 & y), (y >>= 8);
              null !== m &&
                s < 4096 &&
                ((b[s++] = (m << 8) | M),
                s >= d + 1 && c < 12 && (++c, (d = (d << 1) | 1))),
                (m = g);
            } else (s = a + 1), (d = (1 << (c = r + 1)) - 1), (m = null);
          }
          return (
            h !== i && l.log("Warning, gif stream shorter than expected."), n
          );
        }
        function ee(t) {
          var e,
            n,
            i,
            r,
            o,
            a = Math.floor,
            s = new Array(64),
            l = new Array(64),
            c = new Array(64),
            d = new Array(64),
            u = new Array(65535),
            p = new Array(65535),
            h = new Array(64),
            f = new Array(64),
            b = [],
            m = 0,
            g = 7,
            v = new Array(64),
            _ = new Array(64),
            y = new Array(64),
            M = new Array(256),
            O = new Array(2048),
            w = [
              0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12,
              17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32,
              39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47,
              50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63,
            ],
            A = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            z = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
            C = [
              1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113,
              20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36,
              51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41,
              42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74,
              83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105,
              106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134,
              135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154,
              162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181,
              182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201,
              202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227,
              228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246,
              247, 248, 249, 250,
            ],
            k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            T = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
            D = [
              0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34,
              50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21,
              98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38,
              39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72,
              73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103,
              104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131,
              132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
              152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178,
              179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198,
              199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218,
              226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245,
              246, 247, 248, 249, 250,
            ];
          function L(t, e) {
            for (var n = 0, i = 0, r = new Array(), o = 1; o <= 16; o++) {
              for (var a = 1; a <= t[o]; a++)
                (r[e[i]] = []), (r[e[i]][0] = n), (r[e[i]][1] = o), i++, n++;
              n *= 2;
            }
            return r;
          }
          function q(t) {
            for (var e = t[0], n = t[1] - 1; n >= 0; )
              e & (1 << n) && (m |= 1 << g),
                n--,
                --g < 0 && (255 == m ? (E(255), E(0)) : E(m), (g = 7), (m = 0));
          }
          function E(t) {
            b.push(t);
          }
          function j(t) {
            E((t >> 8) & 255), E(255 & t);
          }
          function P(t, e, n, i, r) {
            for (
              var o,
                a = r[0],
                s = r[240],
                l = (function (t, e) {
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
                    p = 0;
                  for (d = 0; d < 8; ++d) {
                    (n = t[p]),
                      (i = t[p + 1]),
                      (r = t[p + 2]),
                      (o = t[p + 3]),
                      (a = t[p + 4]),
                      (s = t[p + 5]),
                      (l = t[p + 6]);
                    var f = n + (c = t[p + 7]),
                      b = n - c,
                      m = i + l,
                      g = i - l,
                      v = r + s,
                      _ = r - s,
                      y = o + a,
                      M = o - a,
                      O = f + y,
                      w = f - y,
                      A = m + v,
                      x = m - v;
                    (t[p] = O + A), (t[p + 4] = O - A);
                    var z = 0.707106781 * (x + w);
                    (t[p + 2] = w + z), (t[p + 6] = w - z);
                    var C = 0.382683433 * ((O = M + _) - (x = g + b)),
                      k = 0.5411961 * O + C,
                      S = 1.306562965 * x + C,
                      T = 0.707106781 * (A = _ + g),
                      D = b + T,
                      L = b - T;
                    (t[p + 5] = L + k),
                      (t[p + 3] = L - k),
                      (t[p + 1] = D + S),
                      (t[p + 7] = D - S),
                      (p += 8);
                  }
                  for (p = 0, d = 0; d < 8; ++d) {
                    (n = t[p]),
                      (i = t[p + 8]),
                      (r = t[p + 16]),
                      (o = t[p + 24]),
                      (a = t[p + 32]),
                      (s = t[p + 40]),
                      (l = t[p + 48]);
                    var q = n + (c = t[p + 56]),
                      E = n - c,
                      j = i + l,
                      P = i - l,
                      R = r + s,
                      I = r - s,
                      W = o + a,
                      N = o - a,
                      B = q + W,
                      F = q - W,
                      $ = j + R,
                      H = j - R;
                    (t[p] = B + $), (t[p + 32] = B - $);
                    var Y = 0.707106781 * (H + F);
                    (t[p + 16] = F + Y), (t[p + 48] = F - Y);
                    var U = 0.382683433 * ((B = N + I) - (H = P + E)),
                      X = 0.5411961 * B + U,
                      V = 1.306562965 * H + U,
                      G = 0.707106781 * ($ = I + P),
                      K = E + G,
                      Z = E - G;
                    (t[p + 40] = Z + X),
                      (t[p + 24] = Z - X),
                      (t[p + 8] = K + V),
                      (t[p + 56] = K - V),
                      p++;
                  }
                  for (d = 0; d < 64; ++d)
                    (u = t[d] * e[d]),
                      (h[d] = u > 0 ? (u + 0.5) | 0 : (u - 0.5) | 0);
                  return h;
                })(t, e),
                c = 0;
              c < 64;
              ++c
            )
              f[w[c]] = l[c];
            var d = f[0] - n;
            (n = f[0]), 0 == d ? q(i[0]) : (q(i[p[(o = 32767 + d)]]), q(u[o]));
            for (var b = 63; b > 0 && 0 == f[b]; ) b--;
            if (0 == b) return q(a), n;
            for (var m, g = 1; g <= b; ) {
              for (var v = g; 0 == f[g] && g <= b; ) ++g;
              var _ = g - v;
              if (_ >= 16) {
                m = _ >> 4;
                for (var y = 1; y <= m; ++y) q(s);
                _ &= 15;
              }
              (o = 32767 + f[g]), q(r[(_ << 4) + p[o]]), q(u[o]), g++;
            }
            return 63 != b && q(a), n;
          }
          function R(t) {
            (t = Math.min(Math.max(t, 1), 100)),
              o != t &&
                ((function (t) {
                  for (
                    var e = [
                        16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58,
                        60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29,
                        51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24,
                        35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121,
                        120, 101, 72, 92, 95, 98, 112, 100, 103, 99,
                      ],
                      n = 0;
                    n < 64;
                    n++
                  ) {
                    var i = a((e[n] * t + 50) / 100);
                    (i = Math.min(Math.max(i, 1), 255)), (s[w[n]] = i);
                  }
                  for (
                    var r = [
                        17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99,
                        99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                      ],
                      o = 0;
                    o < 64;
                    o++
                  ) {
                    var u = a((r[o] * t + 50) / 100);
                    (u = Math.min(Math.max(u, 1), 255)), (l[w[o]] = u);
                  }
                  for (
                    var p = [
                        1, 1.387039845, 1.306562965, 1.175875602, 1,
                        0.785694958, 0.5411961, 0.275899379,
                      ],
                      h = 0,
                      f = 0;
                    f < 8;
                    f++
                  )
                    for (var b = 0; b < 8; b++)
                      (c[h] = 1 / (s[w[h]] * p[f] * p[b] * 8)),
                        (d[h] = 1 / (l[w[h]] * p[f] * p[b] * 8)),
                        h++;
                })(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
                (o = t));
          }
          (this.encode = function (t, o) {
            o && R(o),
              (b = new Array()),
              (m = 0),
              (g = 7),
              j(65496),
              j(65504),
              j(16),
              E(74),
              E(70),
              E(73),
              E(70),
              E(0),
              E(1),
              E(1),
              E(0),
              j(1),
              j(1),
              E(0),
              E(0),
              (function () {
                j(65499), j(132), E(0);
                for (var t = 0; t < 64; t++) E(s[t]);
                E(1);
                for (var e = 0; e < 64; e++) E(l[e]);
              })(),
              (function (t, e) {
                j(65472),
                  j(17),
                  E(8),
                  j(e),
                  j(t),
                  E(3),
                  E(1),
                  E(17),
                  E(0),
                  E(2),
                  E(17),
                  E(1),
                  E(3),
                  E(17),
                  E(1);
              })(t.width, t.height),
              (function () {
                j(65476), j(418), E(0);
                for (var t = 0; t < 16; t++) E(A[t + 1]);
                for (var e = 0; e <= 11; e++) E(x[e]);
                E(16);
                for (var n = 0; n < 16; n++) E(z[n + 1]);
                for (var i = 0; i <= 161; i++) E(C[i]);
                E(1);
                for (var r = 0; r < 16; r++) E(k[r + 1]);
                for (var o = 0; o <= 11; o++) E(S[o]);
                E(17);
                for (var a = 0; a < 16; a++) E(T[a + 1]);
                for (var s = 0; s <= 161; s++) E(D[s]);
              })(),
              j(65498),
              j(12),
              E(3),
              E(1),
              E(0),
              E(2),
              E(17),
              E(3),
              E(17),
              E(0),
              E(63),
              E(0);
            var a = 0,
              u = 0,
              p = 0;
            (m = 0), (g = 7), (this.encode.displayName = "_encode_");
            for (
              var h,
                f,
                M,
                w,
                L,
                I,
                W,
                N,
                B,
                F = t.data,
                $ = t.width,
                H = t.height,
                Y = 4 * $,
                U = 0;
              U < H;

            ) {
              for (h = 0; h < Y; ) {
                for (L = Y * U + h, W = -1, N = 0, B = 0; B < 64; B++)
                  (I = L + (N = B >> 3) * Y + (W = 4 * (7 & B))),
                    U + N >= H && (I -= Y * (U + 1 + N - H)),
                    h + W >= Y && (I -= h + W - Y + 4),
                    (f = F[I++]),
                    (M = F[I++]),
                    (w = F[I++]),
                    (v[B] =
                      ((O[f] + O[(M + 256) >> 0] + O[(w + 512) >> 0]) >> 16) -
                      128),
                    (_[B] =
                      ((O[(f + 768) >> 0] +
                        O[(M + 1024) >> 0] +
                        O[(w + 1280) >> 0]) >>
                        16) -
                      128),
                    (y[B] =
                      ((O[(f + 1280) >> 0] +
                        O[(M + 1536) >> 0] +
                        O[(w + 1792) >> 0]) >>
                        16) -
                      128);
                (a = P(v, c, a, e, i)),
                  (u = P(_, d, u, n, r)),
                  (p = P(y, d, p, n, r)),
                  (h += 32);
              }
              U += 8;
            }
            if (g >= 0) {
              var X = [];
              (X[1] = g + 1), (X[0] = (1 << (g + 1)) - 1), q(X);
            }
            return j(65497), new Uint8Array(b);
          }),
            (t = t || 50),
            (function () {
              for (var t = String.fromCharCode, e = 0; e < 256; e++)
                M[e] = t(e);
            })(),
            (e = L(A, x)),
            (n = L(k, S)),
            (i = L(z, C)),
            (r = L(T, D)),
            (function () {
              for (var t = 1, e = 2, n = 1; n <= 15; n++) {
                for (var i = t; i < e; i++)
                  (p[32767 + i] = n),
                    (u[32767 + i] = []),
                    (u[32767 + i][1] = n),
                    (u[32767 + i][0] = i);
                for (var r = -(e - 1); r <= -t; r++)
                  (p[32767 + r] = n),
                    (u[32767 + r] = []),
                    (u[32767 + r][1] = n),
                    (u[32767 + r][0] = e - 1 + r);
                (t <<= 1), (e <<= 1);
              }
            })(),
            (function () {
              for (var t = 0; t < 256; t++)
                (O[t] = 19595 * t),
                  (O[(t + 256) >> 0] = 38470 * t),
                  (O[(t + 512) >> 0] = 7471 * t + 32768),
                  (O[(t + 768) >> 0] = -11059 * t),
                  (O[(t + 1024) >> 0] = -21709 * t),
                  (O[(t + 1280) >> 0] = 32768 * t + 8421375),
                  (O[(t + 1536) >> 0] = -27439 * t),
                  (O[(t + 1792) >> 0] = -5329 * t);
            })(),
            R(t);
        }
        function ne(t, e) {
          if (
            ((this.pos = 0),
            (this.buffer = t),
            (this.datav = new DataView(t.buffer)),
            (this.is_with_alpha = !!e),
            (this.bottom_up = !0),
            (this.flag =
              String.fromCharCode(this.buffer[0]) +
              String.fromCharCode(this.buffer[1])),
            (this.pos += 2),
            -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
          )
            throw new Error("Invalid BMP File");
          this.parseHeader(), this.parseBGR();
        }
        function ie(t) {
          function e(t) {
            if (!t) throw Error("assert :P");
          }
          function n(t, e, n) {
            for (var i = 0; 4 > i; i++)
              if (t[e + i] != n.charCodeAt(i)) return !0;
            return !1;
          }
          function i(t, e, n, i, r) {
            for (var o = 0; o < r; o++) t[e + o] = n[i + o];
          }
          function r(t, e, n, i) {
            for (var r = 0; r < i; r++) t[e + r] = n;
          }
          function o(t) {
            return new Int32Array(t);
          }
          function a(t, e) {
            for (var n = [], i = 0; i < t; i++) n.push(new e());
            return n;
          }
          function s(t, e) {
            var n = [];
            return (
              (function t(n, i, r) {
                for (
                  var o = r[i], a = 0;
                  a < o &&
                  (n.push(r.length > i + 1 ? [] : new e()),
                  !(r.length < i + 1));
                  a++
                )
                  t(n[a], i + 1, r);
              })(n, 0, t),
              n
            );
          }
          var l = function () {
            var t = this;
            function l(t, e) {
              for (var n = (1 << (e - 1)) >>> 0; t & n; ) n >>>= 1;
              return n ? (t & (n - 1)) + n : t;
            }
            function c(t, n, i, r, o) {
              e(!(r % i));
              do {
                t[n + (r -= i)] = o;
              } while (0 < r);
            }
            function d(t, n, i, r, a) {
              if ((e(2328 >= a), 512 >= a)) var s = o(512);
              else if (null == (s = o(a))) return 0;
              return (function (t, n, i, r, a, s) {
                var d,
                  p,
                  h = n,
                  f = 1 << i,
                  b = o(16),
                  m = o(16);
                for (
                  e(0 != a), e(null != r), e(null != t), e(0 < i), p = 0;
                  p < a;
                  ++p
                ) {
                  if (15 < r[p]) return 0;
                  ++b[r[p]];
                }
                if (b[0] == a) return 0;
                for (m[1] = 0, d = 1; 15 > d; ++d) {
                  if (b[d] > 1 << d) return 0;
                  m[d + 1] = m[d] + b[d];
                }
                for (p = 0; p < a; ++p) (d = r[p]), 0 < r[p] && (s[m[d]++] = p);
                if (1 == m[15])
                  return (
                    ((r = new u()).g = 0), (r.value = s[0]), c(t, h, 1, f, r), f
                  );
                var g,
                  v = -1,
                  _ = f - 1,
                  y = 0,
                  M = 1,
                  O = 1,
                  w = 1 << i;
                for (p = 0, d = 1, a = 2; d <= i; ++d, a <<= 1) {
                  if (((M += O <<= 1), 0 > (O -= b[d]))) return 0;
                  for (; 0 < b[d]; --b[d])
                    ((r = new u()).g = d),
                      (r.value = s[p++]),
                      c(t, h + y, a, w, r),
                      (y = l(y, d));
                }
                for (d = i + 1, a = 2; 15 >= d; ++d, a <<= 1) {
                  if (((M += O <<= 1), 0 > (O -= b[d]))) return 0;
                  for (; 0 < b[d]; --b[d]) {
                    if (((r = new u()), (y & _) != v)) {
                      for (
                        h += w, g = 1 << ((v = d) - i);
                        15 > v && !(0 >= (g -= b[v]));

                      )
                        ++v, (g <<= 1);
                      (f += w = 1 << (g = v - i)),
                        (t[n + (v = y & _)].g = g + i),
                        (t[n + v].value = h - n - v);
                    }
                    (r.g = d - i),
                      (r.value = s[p++]),
                      c(t, h + (y >> i), a, w, r),
                      (y = l(y, d));
                  }
                }
                return M != 2 * m[15] - 1 ? 0 : f;
              })(t, n, i, r, a, s);
            }
            function u() {
              this.value = this.g = 0;
            }
            function p() {
              this.value = this.g = 0;
            }
            function h() {
              (this.G = a(5, u)),
                (this.H = o(5)),
                (this.jc = this.Qb = this.qb = this.nd = 0),
                (this.pd = a(Wn, p));
            }
            function f(t, n, i, r) {
              e(null != t),
                e(null != n),
                e(2147483648 > r),
                (t.Ca = 254),
                (t.I = 0),
                (t.b = -8),
                (t.Ka = 0),
                (t.oa = n),
                (t.pa = i),
                (t.Jd = n),
                (t.Yc = i + r),
                (t.Zc = 4 <= r ? i + r - 4 + 1 : i),
                z(t);
            }
            function b(t, e) {
              for (var n = 0; 0 < e--; ) n |= k(t, 128) << e;
              return n;
            }
            function m(t, e) {
              var n = b(t, e);
              return C(t) ? -n : n;
            }
            function g(t, n, i, r) {
              var o,
                a = 0;
              for (
                e(null != t),
                  e(null != n),
                  e(4294967288 > r),
                  t.Sb = r,
                  t.Ra = 0,
                  t.u = 0,
                  t.h = 0,
                  4 < r && (r = 4),
                  o = 0;
                o < r;
                ++o
              )
                a += n[i + o] << (8 * o);
              (t.Ra = a), (t.bb = r), (t.oa = n), (t.pa = i);
            }
            function v(t) {
              for (; 8 <= t.u && t.bb < t.Sb; )
                (t.Ra >>>= 8),
                  (t.Ra += (t.oa[t.pa + t.bb] << (Fn - 8)) >>> 0),
                  ++t.bb,
                  (t.u -= 8);
              w(t) && ((t.h = 1), (t.u = 0));
            }
            function _(t, n) {
              if ((e(0 <= n), !t.h && n <= Bn)) {
                var i = O(t) & Nn[n];
                return (t.u += n), v(t), i;
              }
              return (t.h = 1), (t.u = 0);
            }
            function y() {
              (this.b = this.Ca = this.I = 0),
                (this.oa = []),
                (this.pa = 0),
                (this.Jd = []),
                (this.Yc = 0),
                (this.Zc = []),
                (this.Ka = 0);
            }
            function M() {
              (this.Ra = 0),
                (this.oa = []),
                (this.h = this.u = this.bb = this.Sb = this.pa = 0);
            }
            function O(t) {
              return (t.Ra >>> (t.u & (Fn - 1))) >>> 0;
            }
            function w(t) {
              return e(t.bb <= t.Sb), t.h || (t.bb == t.Sb && t.u > Fn);
            }
            function A(t, e) {
              (t.u = e), (t.h = w(t));
            }
            function x(t) {
              t.u >= $n && (e(t.u >= $n), v(t));
            }
            function z(t) {
              e(null != t && null != t.oa),
                t.pa < t.Zc
                  ? ((t.I = (t.oa[t.pa++] | (t.I << 8)) >>> 0), (t.b += 8))
                  : (e(null != t && null != t.oa),
                    t.pa < t.Yc
                      ? ((t.b += 8), (t.I = t.oa[t.pa++] | (t.I << 8)))
                      : t.Ka
                      ? (t.b = 0)
                      : ((t.I <<= 8), (t.b += 8), (t.Ka = 1)));
            }
            function C(t) {
              return b(t, 1);
            }
            function k(t, e) {
              var n = t.Ca;
              0 > t.b && z(t);
              var i = t.b,
                r = (n * e) >>> 8,
                o = (t.I >>> i > r) + 0;
              for (
                o ? ((n -= r), (t.I -= ((r + 1) << i) >>> 0)) : (n = r + 1),
                  i = n,
                  r = 0;
                256 <= i;

              )
                (r += 8), (i >>= 8);
              return (
                (i = 7 ^ (r + Hn[i])), (t.b -= i), (t.Ca = (n << i) - 1), o
              );
            }
            function S(t, e, n) {
              (t[e + 0] = (n >> 24) & 255),
                (t[e + 1] = (n >> 16) & 255),
                (t[e + 2] = (n >> 8) & 255),
                (t[e + 3] = (n >> 0) & 255);
            }
            function T(t, e) {
              return (t[e + 0] << 0) | (t[e + 1] << 8);
            }
            function D(t, e) {
              return T(t, e) | (t[e + 2] << 16);
            }
            function L(t, e) {
              return T(t, e) | (T(t, e + 2) << 16);
            }
            function q(t, n) {
              var i = 1 << n;
              return (
                e(null != t),
                e(0 < n),
                (t.X = o(i)),
                null == t.X ? 0 : ((t.Mb = 32 - n), (t.Xa = n), 1)
              );
            }
            function E(t, n) {
              e(null != t),
                e(null != n),
                e(t.Xa == n.Xa),
                i(n.X, 0, t.X, 0, 1 << n.Xa);
            }
            function j() {
              (this.X = []), (this.Xa = this.Mb = 0);
            }
            function P(t, n, i, r) {
              e(null != i), e(null != r);
              var o = i[0],
                a = r[0];
              return (
                0 == o && (o = (t * a + n / 2) / n),
                0 == a && (a = (n * o + t / 2) / t),
                0 >= o || 0 >= a ? 0 : ((i[0] = o), (r[0] = a), 1)
              );
            }
            function R(t, e) {
              return (t + (1 << e) - 1) >>> e;
            }
            function I(t, e) {
              return (
                (((((4278255360 & t) + (4278255360 & e)) >>> 0) & 4278255360) +
                  ((((16711935 & t) + (16711935 & e)) >>> 0) & 16711935)) >>>
                0
              );
            }
            function W(e, n) {
              t[n] = function (n, i, r, o, a, s, l) {
                var c;
                for (c = 0; c < a; ++c) {
                  var d = t[e](s[l + c - 1], r, o + c);
                  s[l + c] = I(n[i + c], d);
                }
              };
            }
            function N() {
              this.ud = this.hd = this.jd = 0;
            }
            function B(t, e) {
              return (((4278124286 & (t ^ e)) >>> 1) + (t & e)) >>> 0;
            }
            function F(t) {
              return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
            }
            function $(t, e) {
              return F(t + ((t - e + 0.5) >> 1));
            }
            function H(t, e, n) {
              return Math.abs(e - n) - Math.abs(t - n);
            }
            function Y(t, e, n, i, r, o, a) {
              for (i = o[a - 1], n = 0; n < r; ++n)
                o[a + n] = i = I(t[e + n], i);
            }
            function U(t, e, n, i, r) {
              var o;
              for (o = 0; o < n; ++o) {
                var a = t[e + o],
                  s = (a >> 8) & 255,
                  l = 16711935 & (l = (l = 16711935 & a) + ((s << 16) + s));
                i[r + o] = ((4278255360 & a) + l) >>> 0;
              }
            }
            function X(t, e) {
              (e.jd = (t >> 0) & 255),
                (e.hd = (t >> 8) & 255),
                (e.ud = (t >> 16) & 255);
            }
            function V(t, e, n, i, r, o) {
              var a;
              for (a = 0; a < i; ++a) {
                var s = e[n + a],
                  l = s >>> 8,
                  c = s,
                  d =
                    255 &
                    (d =
                      (d = s >>> 16) +
                      ((((t.jd << 24) >> 24) * ((l << 24) >> 24)) >>> 5));
                (c =
                  255 &
                  (c =
                    (c += (((t.hd << 24) >> 24) * ((l << 24) >> 24)) >>> 5) +
                    ((((t.ud << 24) >> 24) * ((d << 24) >> 24)) >>> 5))),
                  (r[o + a] = (4278255360 & s) + (d << 16) + c);
              }
            }
            function G(e, n, i, r, o) {
              (t[n] = function (t, e, n, i, a, s, l, c, d) {
                for (i = l; i < c; ++i)
                  for (l = 0; l < d; ++l) a[s++] = o(n[r(t[e++])]);
              }),
                (t[e] = function (e, n, a, s, l, c, d) {
                  var u = 8 >> e.b,
                    p = e.Ea,
                    h = e.K[0],
                    f = e.w;
                  if (8 > u)
                    for (e = (1 << e.b) - 1, f = (1 << u) - 1; n < a; ++n) {
                      var b,
                        m = 0;
                      for (b = 0; b < p; ++b)
                        b & e || (m = r(s[l++])),
                          (c[d++] = o(h[m & f])),
                          (m >>= u);
                    }
                  else t["VP8LMapColor" + i](s, l, h, f, c, d, n, a, p);
                });
            }
            function K(t, e, n, i, r) {
              for (n = e + n; e < n; ) {
                var o = t[e++];
                (i[r++] = (o >> 16) & 255),
                  (i[r++] = (o >> 8) & 255),
                  (i[r++] = (o >> 0) & 255);
              }
            }
            function Z(t, e, n, i, r) {
              for (n = e + n; e < n; ) {
                var o = t[e++];
                (i[r++] = (o >> 16) & 255),
                  (i[r++] = (o >> 8) & 255),
                  (i[r++] = (o >> 0) & 255),
                  (i[r++] = (o >> 24) & 255);
              }
            }
            function J(t, e, n, i, r) {
              for (n = e + n; e < n; ) {
                var o = (((a = t[e++]) >> 16) & 240) | ((a >> 12) & 15),
                  a = ((a >> 0) & 240) | ((a >> 28) & 15);
                (i[r++] = o), (i[r++] = a);
              }
            }
            function Q(t, e, n, i, r) {
              for (n = e + n; e < n; ) {
                var o = (((a = t[e++]) >> 16) & 248) | ((a >> 13) & 7),
                  a = ((a >> 5) & 224) | ((a >> 3) & 31);
                (i[r++] = o), (i[r++] = a);
              }
            }
            function tt(t, e, n, i, r) {
              for (n = e + n; e < n; ) {
                var o = t[e++];
                (i[r++] = (o >> 0) & 255),
                  (i[r++] = (o >> 8) & 255),
                  (i[r++] = (o >> 16) & 255);
              }
            }
            function et(t, e, n, r, o, a) {
              if (0 == a)
                for (n = e + n; e < n; )
                  S(
                    r,
                    (((a = t[e++])[0] >> 24) |
                      ((a[1] >> 8) & 65280) |
                      ((a[2] << 8) & 16711680) |
                      (a[3] << 24)) >>>
                      0
                  ),
                    (o += 32);
              else i(r, o, t, e, n);
            }
            function nt(e, n) {
              (t[n][0] = t[e + "0"]),
                (t[n][1] = t[e + "1"]),
                (t[n][2] = t[e + "2"]),
                (t[n][3] = t[e + "3"]),
                (t[n][4] = t[e + "4"]),
                (t[n][5] = t[e + "5"]),
                (t[n][6] = t[e + "6"]),
                (t[n][7] = t[e + "7"]),
                (t[n][8] = t[e + "8"]),
                (t[n][9] = t[e + "9"]),
                (t[n][10] = t[e + "10"]),
                (t[n][11] = t[e + "11"]),
                (t[n][12] = t[e + "12"]),
                (t[n][13] = t[e + "13"]),
                (t[n][14] = t[e + "0"]),
                (t[n][15] = t[e + "0"]);
            }
            function it(t) {
              return t == $i || t == Hi || t == Yi || t == Ui;
            }
            function rt() {
              (this.eb = []), (this.size = this.A = this.fb = 0);
            }
            function ot() {
              (this.y = []),
                (this.f = []),
                (this.ea = []),
                (this.F = []),
                (this.Tc =
                  this.Ed =
                  this.Cd =
                  this.Fd =
                  this.lb =
                  this.Db =
                  this.Ab =
                  this.fa =
                  this.J =
                  this.W =
                  this.N =
                  this.O =
                    0);
            }
            function at() {
              (this.Rd = this.height = this.width = this.S = 0),
                (this.f = {}),
                (this.f.RGBA = new rt()),
                (this.f.kb = new ot()),
                (this.sd = null);
            }
            function st() {
              (this.width = [0]),
                (this.height = [0]),
                (this.Pd = [0]),
                (this.Qd = [0]),
                (this.format = [0]);
            }
            function lt() {
              this.Id =
                this.fd =
                this.Md =
                this.hb =
                this.ib =
                this.da =
                this.bd =
                this.cd =
                this.j =
                this.v =
                this.Da =
                this.Sd =
                this.ob =
                  0;
            }
            function ct(t) {
              return alert("todo:WebPSamplerProcessPlane"), t.T;
            }
            function dt(t, e) {
              var n = t.T,
                r = e.ba.f.RGBA,
                o = r.eb,
                a = r.fb + t.ka * r.A,
                s = gr[e.ba.S],
                l = t.y,
                c = t.O,
                d = t.f,
                u = t.N,
                p = t.ea,
                h = t.W,
                f = e.cc,
                b = e.dc,
                m = e.Mc,
                g = e.Nc,
                v = t.ka,
                _ = t.ka + t.T,
                y = t.U,
                M = (y + 1) >> 1;
              for (
                0 == v
                  ? s(
                      l,
                      c,
                      null,
                      null,
                      d,
                      u,
                      p,
                      h,
                      d,
                      u,
                      p,
                      h,
                      o,
                      a,
                      null,
                      null,
                      y
                    )
                  : (s(
                      e.ec,
                      e.fc,
                      l,
                      c,
                      f,
                      b,
                      m,
                      g,
                      d,
                      u,
                      p,
                      h,
                      o,
                      a - r.A,
                      o,
                      a,
                      y
                    ),
                    ++n);
                v + 2 < _;
                v += 2
              )
                (f = d),
                  (b = u),
                  (m = p),
                  (g = h),
                  (u += t.Rc),
                  (h += t.Rc),
                  (a += 2 * r.A),
                  s(
                    l,
                    (c += 2 * t.fa) - t.fa,
                    l,
                    c,
                    f,
                    b,
                    m,
                    g,
                    d,
                    u,
                    p,
                    h,
                    o,
                    a - r.A,
                    o,
                    a,
                    y
                  );
              return (
                (c += t.fa),
                t.j + _ < t.o
                  ? (i(e.ec, e.fc, l, c, y),
                    i(e.cc, e.dc, d, u, M),
                    i(e.Mc, e.Nc, p, h, M),
                    n--)
                  : 1 & _ ||
                    s(
                      l,
                      c,
                      null,
                      null,
                      d,
                      u,
                      p,
                      h,
                      d,
                      u,
                      p,
                      h,
                      o,
                      a + r.A,
                      null,
                      null,
                      y
                    ),
                n
              );
            }
            function ut(t, n, i) {
              var r = t.F,
                o = [t.J];
              if (null != r) {
                var a = t.U,
                  s = n.ba.S,
                  l = s == Ni || s == Yi;
                n = n.ba.f.RGBA;
                var c = [0],
                  d = t.ka;
                (c[0] = t.T),
                  t.Kb &&
                    (0 == d ? --c[0] : (--d, (o[0] -= t.width)),
                    t.j + t.ka + t.T == t.o && (c[0] = t.o - t.j - d));
                var u = n.eb;
                (d = n.fb + d * n.A),
                  (t = xi(r, o[0], t.width, a, c, u, d + (l ? 0 : 3), n.A)),
                  e(i == c),
                  t && it(s) && wi(u, d, l, a, c, n.A);
              }
              return 0;
            }
            function pt(t) {
              var e = t.ma,
                n = e.ba.S,
                i = 11 > n,
                r =
                  n == Ri || n == Wi || n == Ni || n == Bi || 12 == n || it(n);
              if (
                ((e.memory = null),
                (e.Ib = null),
                (e.Jb = null),
                (e.Nd = null),
                !Pn(e.Oa, t, r ? 11 : 12))
              )
                return 0;
              if ((r && it(n) && _n(), t.da)) alert("todo:use_scaling");
              else {
                if (i) {
                  if (((e.Ib = ct), t.Kb)) {
                    if (
                      ((n = (t.U + 1) >> 1),
                      (e.memory = o(t.U + 2 * n)),
                      null == e.memory)
                    )
                      return 0;
                    (e.ec = e.memory),
                      (e.fc = 0),
                      (e.cc = e.ec),
                      (e.dc = e.fc + t.U),
                      (e.Mc = e.cc),
                      (e.Nc = e.dc + n),
                      (e.Ib = dt),
                      _n();
                  }
                } else alert("todo:EmitYUV");
                r && ((e.Jb = ut), i && gn());
              }
              if (i && !Dr) {
                for (t = 0; 256 > t; ++t)
                  (Lr[t] = (89858 * (t - 128) + zr) >> xr),
                    (jr[t] = -22014 * (t - 128) + zr),
                    (Er[t] = -45773 * (t - 128)),
                    (qr[t] = (113618 * (t - 128) + zr) >> xr);
                for (t = Cr; t < kr; ++t)
                  (e = (76283 * (t - 16) + zr) >> xr),
                    (Pr[t - Cr] = Yt(e, 255)),
                    (Rr[t - Cr] = Yt((e + 8) >> 4, 15));
                Dr = 1;
              }
              return 1;
            }
            function ht(t) {
              var n = t.ma,
                i = t.U,
                r = t.T;
              return (
                e(!(1 & t.ka)),
                0 >= i || 0 >= r
                  ? 0
                  : ((i = n.Ib(t, n)),
                    null != n.Jb && n.Jb(t, n, i),
                    (n.Dc += i),
                    1)
              );
            }
            function ft(t) {
              t.ma.memory = null;
            }
            function bt(t, e, n, i) {
              return 47 != _(t, 8)
                ? 0
                : ((e[0] = _(t, 14) + 1),
                  (n[0] = _(t, 14) + 1),
                  (i[0] = _(t, 1)),
                  0 != _(t, 3) ? 0 : !t.h);
            }
            function mt(t, e) {
              if (4 > t) return t + 1;
              var n = (t - 2) >> 1;
              return ((2 + (1 & t)) << n) + _(e, n) + 1;
            }
            function gt(t, e) {
              return 120 < e
                ? e - 120
                : 1 <= (n = ((n = Ji[e - 1]) >> 4) * t + (8 - (15 & n)))
                ? n
                : 1;
              var n;
            }
            function vt(t, e, n) {
              var i = O(n),
                r = t[(e += 255 & i)].g - 8;
              return (
                0 < r &&
                  (A(n, n.u + 8),
                  (i = O(n)),
                  (e += t[e].value),
                  (e += i & ((1 << r) - 1))),
                A(n, n.u + t[e].g),
                t[e].value
              );
            }
            function _t(t, n, i) {
              return (
                (i.g += t.g),
                (i.value += (t.value << n) >>> 0),
                e(8 >= i.g),
                t.g
              );
            }
            function yt(t, n, i) {
              var r = t.xc;
              return (
                e((n = 0 == r ? 0 : t.vc[t.md * (i >> r) + (n >> r)]) < t.Wb),
                t.Ya[n]
              );
            }
            function Mt(t, n, r, o) {
              var a = t.ab,
                s = t.c * n,
                l = t.C;
              n = l + n;
              var c = r,
                d = o;
              for (o = t.Ta, r = t.Ua; 0 < a--; ) {
                var u = t.gc[a],
                  p = l,
                  h = n,
                  f = c,
                  b = d,
                  m = ((d = o), (c = r), u.Ea);
                switch ((e(p < h), e(h <= u.nc), u.hc)) {
                  case 2:
                    Xn(f, b, (h - p) * m, d, c);
                    break;
                  case 0:
                    var g = p,
                      v = h,
                      _ = d,
                      y = c,
                      M = (z = u).Ea;
                    0 == g &&
                      (Yn(f, b, null, null, 1, _, y),
                      Y(f, b + 1, 0, 0, M - 1, _, y + 1),
                      (b += M),
                      (y += M),
                      ++g);
                    for (
                      var O = 1 << z.b,
                        w = O - 1,
                        A = R(M, z.b),
                        x = z.K,
                        z = z.w + (g >> z.b) * A;
                      g < v;

                    ) {
                      var C = x,
                        k = z,
                        S = 1;
                      for (Un(f, b, _, y - M, 1, _, y); S < M; ) {
                        var T = (S & ~w) + O;
                        T > M && (T = M),
                          (0, Jn[(C[k++] >> 8) & 15])(
                            f,
                            b + +S,
                            _,
                            y + S - M,
                            T - S,
                            _,
                            y + S
                          ),
                          (S = T);
                      }
                      (b += M), (y += M), ++g & w || (z += A);
                    }
                    h != u.nc && i(d, c - m, d, c + (h - p - 1) * m, m);
                    break;
                  case 1:
                    for (
                      m = f,
                        v = b,
                        M = (f = u.Ea) - (y = f & ~(_ = (b = 1 << u.b) - 1)),
                        g = R(f, u.b),
                        O = u.K,
                        u = u.w + (p >> u.b) * g;
                      p < h;

                    ) {
                      for (
                        w = O, A = u, x = new N(), z = v + y, C = v + f;
                        v < z;

                      )
                        X(w[A++], x), Qn(x, m, v, b, d, c), (v += b), (c += b);
                      v < C &&
                        (X(w[A++], x),
                        Qn(x, m, v, M, d, c),
                        (v += M),
                        (c += M)),
                        ++p & _ || (u += g);
                    }
                    break;
                  case 3:
                    if (f == d && b == c && 0 < u.b) {
                      for (
                        v = d,
                          f = m =
                            c + (h - p) * m - (y = (h - p) * R(u.Ea, u.b)),
                          b = d,
                          _ = c,
                          g = [],
                          y = (M = y) - 1;
                        0 <= y;
                        --y
                      )
                        g[y] = b[_ + y];
                      for (y = M - 1; 0 <= y; --y) v[f + y] = g[y];
                      Vn(u, p, h, d, m, d, c);
                    } else Vn(u, p, h, f, b, d, c);
                }
                (c = o), (d = r);
              }
              d != r && i(o, r, c, d, s);
            }
            function Ot(t, n) {
              var i = t.V,
                r = t.Ba + t.c * t.C,
                o = n - t.C;
              if ((e(n <= t.l.o), e(16 >= o), 0 < o)) {
                var a = t.l,
                  s = t.Ta,
                  l = t.Ua,
                  c = a.width;
                if (
                  (Mt(t, o, i, r),
                  (o = l = [l]),
                  e((i = t.C) < (r = n)),
                  e(a.v < a.va),
                  r > a.o && (r = a.o),
                  i < a.j)
                ) {
                  var d = a.j - i;
                  (i = a.j), (o[0] += d * c);
                }
                if (
                  (i >= r
                    ? (i = 0)
                    : ((o[0] += 4 * a.v),
                      (a.ka = i - a.j),
                      (a.U = a.va - a.v),
                      (a.T = r - i),
                      (i = 1)),
                  i)
                ) {
                  if (((l = l[0]), 11 > (i = t.ca).S)) {
                    var u = i.f.RGBA,
                      p = ((r = i.S), (o = a.U), (a = a.T), (d = u.eb), u.A),
                      h = a;
                    for (u = u.fb + t.Ma * u.A; 0 < h--; ) {
                      var f = s,
                        b = l,
                        m = o,
                        g = d,
                        v = u;
                      switch (r) {
                        case Pi:
                          ti(f, b, m, g, v);
                          break;
                        case Ri:
                          ei(f, b, m, g, v);
                          break;
                        case $i:
                          ei(f, b, m, g, v), wi(g, v, 0, m, 1, 0);
                          break;
                        case Ii:
                          ri(f, b, m, g, v);
                          break;
                        case Wi:
                          et(f, b, m, g, v, 1);
                          break;
                        case Hi:
                          et(f, b, m, g, v, 1), wi(g, v, 0, m, 1, 0);
                          break;
                        case Ni:
                          et(f, b, m, g, v, 0);
                          break;
                        case Yi:
                          et(f, b, m, g, v, 0), wi(g, v, 1, m, 1, 0);
                          break;
                        case Bi:
                          ni(f, b, m, g, v);
                          break;
                        case Ui:
                          ni(f, b, m, g, v), Ai(g, v, m, 1, 0);
                          break;
                        case Fi:
                          ii(f, b, m, g, v);
                          break;
                        default:
                          e(0);
                      }
                      (l += c), (u += p);
                    }
                    t.Ma += a;
                  } else alert("todo:EmitRescaledRowsYUVA");
                  e(t.Ma <= i.height);
                }
              }
              (t.C = n), e(t.C <= t.i);
            }
            function wt(t) {
              var e;
              if (0 < t.ua) return 0;
              for (e = 0; e < t.Wb; ++e) {
                var n = t.Ya[e].G,
                  i = t.Ya[e].H;
                if (
                  0 < n[1][i[1] + 0].g ||
                  0 < n[2][i[2] + 0].g ||
                  0 < n[3][i[3] + 0].g
                )
                  return 0;
              }
              return 1;
            }
            function At(t, n, i, r, o, a) {
              if (0 != t.Z) {
                var s = t.qd,
                  l = t.rd;
                for (e(null != mr[t.Z]); n < i; ++n)
                  mr[t.Z](s, l, r, o, r, o, a), (s = r), (l = o), (o += a);
                (t.qd = s), (t.rd = l);
              }
            }
            function xt(t, n) {
              var i = t.l.ma,
                r = 0 == i.Z || 1 == i.Z ? t.l.j : t.C;
              if (((r = t.C < r ? r : t.C), e(n <= t.l.o), n > r)) {
                var o = t.l.width,
                  a = i.ca,
                  s = i.tb + o * r,
                  l = t.V,
                  c = t.Ba + t.c * r,
                  d = t.gc;
                e(1 == t.ab),
                  e(3 == d[0].hc),
                  Kn(d[0], r, n, l, c, a, s),
                  At(i, r, n, a, s, o);
              }
              t.C = t.Ma = n;
            }
            function zt(t, n, i, r, o, a, s) {
              var l = t.$ / r,
                c = t.$ % r,
                d = t.m,
                u = t.s,
                p = i + t.$,
                h = p;
              o = i + r * o;
              var f = i + r * a,
                b = 280 + u.ua,
                m = t.Pb ? l : 16777216,
                g = 0 < u.ua ? u.Wa : null,
                v = u.wc,
                _ = p < f ? yt(u, c, l) : null;
              e(t.C < a), e(f <= o);
              var y = !1;
              t: for (;;) {
                for (; y || p < f; ) {
                  var M = 0;
                  if (l >= m) {
                    var z = p - i;
                    e((m = t).Pb),
                      (m.wd = m.m),
                      (m.xd = z),
                      0 < m.s.ua && E(m.s.Wa, m.s.vb),
                      (m = l + tr);
                  }
                  if (
                    (c & v || (_ = yt(u, c, l)),
                    e(null != _),
                    _.Qb && ((n[p] = _.qb), (y = !0)),
                    !y)
                  )
                    if ((x(d), _.jc)) {
                      (M = d), (z = n);
                      var C = p,
                        k = _.pd[O(M) & (Wn - 1)];
                      e(_.jc),
                        256 > k.g
                          ? (A(M, M.u + k.g), (z[C] = k.value), (M = 0))
                          : (A(M, M.u + k.g - 256),
                            e(256 <= k.value),
                            (M = k.value)),
                        0 == M && (y = !0);
                    } else M = vt(_.G[0], _.H[0], d);
                  if (d.h) break;
                  if (y || 256 > M) {
                    if (!y)
                      if (_.nd) n[p] = (_.qb | (M << 8)) >>> 0;
                      else {
                        if (
                          (x(d),
                          (y = vt(_.G[1], _.H[1], d)),
                          x(d),
                          (z = vt(_.G[2], _.H[2], d)),
                          (C = vt(_.G[3], _.H[3], d)),
                          d.h)
                        )
                          break;
                        n[p] = ((C << 24) | (y << 16) | (M << 8) | z) >>> 0;
                      }
                    if (
                      ((y = !1),
                      ++p,
                      ++c >= r &&
                        ((c = 0),
                        ++l,
                        null != s && l <= a && !(l % 16) && s(t, l),
                        null != g))
                    )
                      for (; h < p; )
                        (M = n[h++]),
                          (g.X[((506832829 * M) & 4294967295) >>> g.Mb] = M);
                  } else if (280 > M) {
                    if (
                      ((M = mt(M - 256, d)),
                      (z = vt(_.G[4], _.H[4], d)),
                      x(d),
                      (z = gt(r, (z = mt(z, d)))),
                      d.h)
                    )
                      break;
                    if (p - i < z || o - p < M) break t;
                    for (C = 0; C < M; ++C) n[p + C] = n[p + C - z];
                    for (p += M, c += M; c >= r; )
                      (c -= r),
                        ++l,
                        null != s && l <= a && !(l % 16) && s(t, l);
                    if ((e(p <= o), c & v && (_ = yt(u, c, l)), null != g))
                      for (; h < p; )
                        (M = n[h++]),
                          (g.X[((506832829 * M) & 4294967295) >>> g.Mb] = M);
                  } else {
                    if (!(M < b)) break t;
                    for (y = M - 280, e(null != g); h < p; )
                      (M = n[h++]),
                        (g.X[((506832829 * M) & 4294967295) >>> g.Mb] = M);
                    (M = p), e(!(y >>> (z = g).Xa)), (n[M] = z.X[y]), (y = !0);
                  }
                  y || e(d.h == w(d));
                }
                if (t.Pb && d.h && p < o)
                  e(t.m.h),
                    (t.a = 5),
                    (t.m = t.wd),
                    (t.$ = t.xd),
                    0 < t.s.ua && E(t.s.vb, t.s.Wa);
                else {
                  if (d.h) break t;
                  null != s && s(t, l > a ? a : l), (t.a = 0), (t.$ = p - i);
                }
                return 1;
              }
              return (t.a = 3), 0;
            }
            function Ct(t) {
              e(null != t), (t.vc = null), (t.yc = null), (t.Ya = null);
              var n = t.Wa;
              null != n && (n.X = null), (t.vb = null), e(null != t);
            }
            function kt() {
              var e = new sn();
              return null == e
                ? null
                : ((e.a = 0),
                  (e.xb = br),
                  nt("Predictor", "VP8LPredictors"),
                  nt("Predictor", "VP8LPredictors_C"),
                  nt("PredictorAdd", "VP8LPredictorsAdd"),
                  nt("PredictorAdd", "VP8LPredictorsAdd_C"),
                  (Xn = U),
                  (Qn = V),
                  (ti = K),
                  (ei = Z),
                  (ni = J),
                  (ii = Q),
                  (ri = tt),
                  (t.VP8LMapColor32b = Gn),
                  (t.VP8LMapColor8b = Zn),
                  e);
            }
            function St(t, n, i, s, l) {
              var c = 1,
                p = [t],
                f = [n],
                b = s.m,
                m = s.s,
                g = null,
                v = 0;
              t: for (;;) {
                if (i)
                  for (; c && _(b, 1); ) {
                    var y = p,
                      M = f,
                      w = s,
                      z = 1,
                      C = w.m,
                      k = w.gc[w.ab],
                      S = _(C, 2);
                    if (w.Oc & (1 << S)) c = 0;
                    else {
                      switch (
                        ((w.Oc |= 1 << S),
                        (k.hc = S),
                        (k.Ea = y[0]),
                        (k.nc = M[0]),
                        (k.K = [null]),
                        ++w.ab,
                        e(4 >= w.ab),
                        S)
                      ) {
                        case 0:
                        case 1:
                          (k.b = _(C, 3) + 2),
                            (z = St(R(k.Ea, k.b), R(k.nc, k.b), 0, w, k.K)),
                            (k.K = k.K[0]);
                          break;
                        case 3:
                          var T,
                            D = _(C, 8) + 1,
                            L = 16 < D ? 0 : 4 < D ? 1 : 2 < D ? 2 : 3;
                          if (
                            ((y[0] = R(k.Ea, L)),
                            (k.b = L),
                            (T = z = St(D, 1, 0, w, k.K)))
                          ) {
                            var E,
                              j = D,
                              P = k,
                              W = 1 << (8 >> P.b),
                              N = o(W);
                            if (null == N) T = 0;
                            else {
                              var B = P.K[0],
                                F = P.w;
                              for (N[0] = P.K[0][0], E = 1; E < 1 * j; ++E)
                                N[E] = I(B[F + E], N[E - 1]);
                              for (; E < 4 * W; ++E) N[E] = 0;
                              (P.K[0] = null), (P.K[0] = N), (T = 1);
                            }
                          }
                          z = T;
                          break;
                        case 2:
                          break;
                        default:
                          e(0);
                      }
                      c = z;
                    }
                  }
                if (
                  ((p = p[0]),
                  (f = f[0]),
                  c && _(b, 1) && !(c = 1 <= (v = _(b, 4)) && 11 >= v))
                ) {
                  s.a = 3;
                  break t;
                }
                var $;
                if (($ = c))
                  e: {
                    var H,
                      Y,
                      U,
                      X = s,
                      V = p,
                      G = f,
                      K = v,
                      Z = i,
                      J = X.m,
                      Q = X.s,
                      tt = [null],
                      et = 1,
                      nt = 0,
                      it = Qi[K];
                    n: for (;;) {
                      if (Z && _(J, 1)) {
                        var rt = _(J, 3) + 2,
                          ot = R(V, rt),
                          at = R(G, rt),
                          st = ot * at;
                        if (!St(ot, at, 0, X, tt)) break n;
                        for (tt = tt[0], Q.xc = rt, H = 0; H < st; ++H) {
                          var lt = (tt[H] >> 8) & 65535;
                          (tt[H] = lt), lt >= et && (et = lt + 1);
                        }
                      }
                      if (J.h) break n;
                      for (Y = 0; 5 > Y; ++Y) {
                        var ct = Gi[Y];
                        !Y && 0 < K && (ct += 1 << K), nt < ct && (nt = ct);
                      }
                      var dt = a(et * it, u),
                        ut = et,
                        pt = a(ut, h);
                      if (null == pt) var ht = null;
                      else e(65536 >= ut), (ht = pt);
                      var ft = o(nt);
                      if (null == ht || null == ft || null == dt) {
                        X.a = 1;
                        break n;
                      }
                      var bt = dt;
                      for (H = U = 0; H < et; ++H) {
                        var mt = ht[H],
                          gt = mt.G,
                          vt = mt.H,
                          yt = 0,
                          Mt = 1,
                          Ot = 0;
                        for (Y = 0; 5 > Y; ++Y) {
                          (ct = Gi[Y]),
                            (gt[Y] = bt),
                            (vt[Y] = U),
                            !Y && 0 < K && (ct += 1 << K);
                          i: {
                            var wt,
                              At = ct,
                              xt = X,
                              kt = ft,
                              Tt = bt,
                              Dt = U,
                              Lt = 0,
                              qt = xt.m,
                              Et = _(qt, 1);
                            if ((r(kt, 0, 0, At), Et)) {
                              var jt = _(qt, 1) + 1,
                                Pt = _(qt, 1),
                                Rt = _(qt, 0 == Pt ? 1 : 8);
                              (kt[Rt] = 1),
                                2 == jt && (kt[(Rt = _(qt, 8))] = 1);
                              var It = 1;
                            } else {
                              var Wt = o(19),
                                Nt = _(qt, 4) + 4;
                              if (19 < Nt) {
                                xt.a = 3;
                                var Bt = 0;
                                break i;
                              }
                              for (wt = 0; wt < Nt; ++wt) Wt[Zi[wt]] = _(qt, 3);
                              var Ft = void 0,
                                $t = void 0,
                                Ht = xt,
                                Yt = Wt,
                                Ut = At,
                                Xt = kt,
                                Vt = 0,
                                Gt = Ht.m,
                                Kt = 8,
                                Zt = a(128, u);
                              r: for (; d(Zt, 0, 7, Yt, 19); ) {
                                if (_(Gt, 1)) {
                                  var Jt = 2 + 2 * _(Gt, 3);
                                  if ((Ft = 2 + _(Gt, Jt)) > Ut) break r;
                                } else Ft = Ut;
                                for ($t = 0; $t < Ut && Ft--; ) {
                                  x(Gt);
                                  var Qt = Zt[0 + (127 & O(Gt))];
                                  A(Gt, Gt.u + Qt.g);
                                  var te = Qt.value;
                                  if (16 > te)
                                    (Xt[$t++] = te), 0 != te && (Kt = te);
                                  else {
                                    var ee = 16 == te,
                                      ne = te - 16,
                                      ie = Vi[ne],
                                      re = _(Gt, Xi[ne]) + ie;
                                    if ($t + re > Ut) break r;
                                    for (var oe = ee ? Kt : 0; 0 < re--; )
                                      Xt[$t++] = oe;
                                  }
                                }
                                Vt = 1;
                                break r;
                              }
                              Vt || (Ht.a = 3), (It = Vt);
                            }
                            (It = It && !qt.h) && (Lt = d(Tt, Dt, 8, kt, At)),
                              It && 0 != Lt
                                ? (Bt = Lt)
                                : ((xt.a = 3), (Bt = 0));
                          }
                          if (0 == Bt) break n;
                          if (
                            (Mt && 1 == Ki[Y] && (Mt = 0 == bt[U].g),
                            (yt += bt[U].g),
                            (U += Bt),
                            3 >= Y)
                          ) {
                            var ae,
                              se = ft[0];
                            for (ae = 1; ae < ct; ++ae)
                              ft[ae] > se && (se = ft[ae]);
                            Ot += se;
                          }
                        }
                        if (
                          ((mt.nd = Mt),
                          (mt.Qb = 0),
                          Mt &&
                            ((mt.qb =
                              ((gt[3][vt[3] + 0].value << 24) |
                                (gt[1][vt[1] + 0].value << 16) |
                                gt[2][vt[2] + 0].value) >>>
                              0),
                            0 == yt &&
                              256 > gt[0][vt[0] + 0].value &&
                              ((mt.Qb = 1),
                              (mt.qb += gt[0][vt[0] + 0].value << 8))),
                          (mt.jc = !mt.Qb && 6 > Ot),
                          mt.jc)
                        ) {
                          var le,
                            ce = mt;
                          for (le = 0; le < Wn; ++le) {
                            var de = le,
                              ue = ce.pd[de],
                              pe = ce.G[0][ce.H[0] + de];
                            256 <= pe.value
                              ? ((ue.g = pe.g + 256), (ue.value = pe.value))
                              : ((ue.g = 0),
                                (ue.value = 0),
                                (de >>= _t(pe, 8, ue)),
                                (de >>= _t(ce.G[1][ce.H[1] + de], 16, ue)),
                                (de >>= _t(ce.G[2][ce.H[2] + de], 0, ue)),
                                _t(ce.G[3][ce.H[3] + de], 24, ue));
                          }
                        }
                      }
                      (Q.vc = tt),
                        (Q.Wb = et),
                        (Q.Ya = ht),
                        (Q.yc = dt),
                        ($ = 1);
                      break e;
                    }
                    $ = 0;
                  }
                if (!(c = $)) {
                  s.a = 3;
                  break t;
                }
                if (0 < v) {
                  if (((m.ua = 1 << v), !q(m.Wa, v))) {
                    (s.a = 1), (c = 0);
                    break t;
                  }
                } else m.ua = 0;
                var he = s,
                  fe = p,
                  be = f,
                  me = he.s,
                  ge = me.xc;
                if (
                  ((he.c = fe),
                  (he.i = be),
                  (me.md = R(fe, ge)),
                  (me.wc = 0 == ge ? -1 : (1 << ge) - 1),
                  i)
                ) {
                  s.xb = fr;
                  break t;
                }
                if (null == (g = o(p * f))) {
                  (s.a = 1), (c = 0);
                  break t;
                }
                c = (c = zt(s, g, 0, p, f, f, null)) && !b.h;
                break t;
              }
              return (
                c
                  ? (null != l ? (l[0] = g) : (e(null == g), e(i)),
                    (s.$ = 0),
                    i || Ct(m))
                  : Ct(m),
                c
              );
            }
            function Tt(t, n) {
              var i = t.c * t.i,
                r = i + n + 16 * n;
              return (
                e(t.c <= n),
                (t.V = o(r)),
                null == t.V
                  ? ((t.Ta = null), (t.Ua = 0), (t.a = 1), 0)
                  : ((t.Ta = t.V), (t.Ua = t.Ba + i + n), 1)
              );
            }
            function Dt(t, n) {
              var i = t.C,
                r = n - i,
                o = t.V,
                a = t.Ba + t.c * i;
              for (e(n <= t.l.o); 0 < r; ) {
                var s = 16 < r ? 16 : r,
                  l = t.l.ma,
                  c = t.l.width,
                  d = c * s,
                  u = l.ca,
                  p = l.tb + c * i,
                  h = t.Ta,
                  f = t.Ua;
                Mt(t, s, o, a),
                  zi(h, f, u, p, d),
                  At(l, i, i + s, u, p, c),
                  (r -= s),
                  (o += s * t.c),
                  (i += s);
              }
              e(i == n), (t.C = t.Ma = n);
            }
            function Lt() {
              this.ub = this.yd = this.td = this.Rb = 0;
            }
            function qt() {
              this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
            }
            function Et() {
              (this.Fb = this.Bb = this.Cb = 0),
                (this.Zb = o(4)),
                (this.Lb = o(4));
            }
            function jt() {
              this.Yb = (function () {
                var t = [];
                return (
                  (function t(e, n, i) {
                    for (
                      var r = i[n], o = 0;
                      o < r &&
                      (e.push(i.length > n + 1 ? [] : 0), !(i.length < n + 1));
                      o++
                    )
                      t(e[o], n + 1, i);
                  })(t, 0, [3, 11]),
                  t
                );
              })();
            }
            function Pt() {
              (this.jb = o(3)),
                (this.Wc = s([4, 8], jt)),
                (this.Xc = s([4, 17], jt));
            }
            function Rt() {
              (this.Pc = this.wb = this.Tb = this.zd = 0),
                (this.vd = new o(4)),
                (this.od = new o(4));
            }
            function It() {
              this.ld = this.La = this.dd = this.tc = 0;
            }
            function Wt() {
              this.Na = this.la = 0;
            }
            function Nt() {
              (this.Sc = [0, 0]),
                (this.Eb = [0, 0]),
                (this.Qc = [0, 0]),
                (this.ia = this.lc = 0);
            }
            function Bt() {
              (this.ad = o(384)),
                (this.Za = 0),
                (this.Ob = o(16)),
                (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0);
            }
            function Ft() {
              (this.uc = this.M = this.Nb = 0),
                (this.wa = Array(new It())),
                (this.Y = 0),
                (this.ya = Array(new Bt())),
                (this.aa = 0),
                (this.l = new Ut());
            }
            function $t() {
              (this.y = o(16)), (this.f = o(8)), (this.ea = o(8));
            }
            function Ht() {
              (this.cb = this.a = 0),
                (this.sc = ""),
                (this.m = new y()),
                (this.Od = new Lt()),
                (this.Kc = new qt()),
                (this.ed = new Rt()),
                (this.Qa = new Et()),
                (this.Ic = this.$c = this.Aa = 0),
                (this.D = new Ft()),
                (this.Xb =
                  this.Va =
                  this.Hb =
                  this.zb =
                  this.yb =
                  this.Ub =
                  this.za =
                    0),
                (this.Jc = a(8, y)),
                (this.ia = 0),
                (this.pb = a(4, Nt)),
                (this.Pa = new Pt()),
                (this.Bd = this.kc = 0),
                (this.Ac = []),
                (this.Bc = 0),
                (this.zc = [0, 0, 0, 0]),
                (this.Gd = Array(new $t())),
                (this.Hd = 0),
                (this.rb = Array(new Wt())),
                (this.sb = 0),
                (this.wa = Array(new It())),
                (this.Y = 0),
                (this.oc = []),
                (this.pc = 0),
                (this.sa = []),
                (this.ta = 0),
                (this.qa = []),
                (this.ra = 0),
                (this.Ha = []),
                (this.B = this.R = this.Ia = 0),
                (this.Ec = []),
                (this.M = this.ja = this.Vb = this.Fc = 0),
                (this.ya = Array(new Bt())),
                (this.L = this.aa = 0),
                (this.gd = s([4, 2], It)),
                (this.ga = null),
                (this.Fa = []),
                (this.Cc = this.qc = this.P = 0),
                (this.Gb = []),
                (this.Uc = 0),
                (this.mb = []),
                (this.nb = 0),
                (this.rc = []),
                (this.Ga = this.Vc = 0);
            }
            function Yt(t, e) {
              return 0 > t ? 0 : t > e ? e : t;
            }
            function Ut() {
              (this.T = this.U = this.ka = this.height = this.width = 0),
                (this.y = []),
                (this.f = []),
                (this.ea = []),
                (this.Rc = this.fa = this.W = this.N = this.O = 0),
                (this.ma = "void"),
                (this.put = "VP8IoPutHook"),
                (this.ac = "VP8IoSetupHook"),
                (this.bc = "VP8IoTeardownHook"),
                (this.ha = this.Kb = 0),
                (this.data = []),
                (this.hb =
                  this.ib =
                  this.da =
                  this.o =
                  this.j =
                  this.va =
                  this.v =
                  this.Da =
                  this.ob =
                  this.w =
                    0),
                (this.F = []),
                (this.J = 0);
            }
            function Xt() {
              var t = new Ht();
              return (
                null != t &&
                  ((t.a = 0),
                  (t.sc = "OK"),
                  (t.cb = 0),
                  (t.Xb = 0),
                  ir || (ir = Zt)),
                t
              );
            }
            function Vt(t, e, n) {
              return 0 == t.a && ((t.a = e), (t.sc = n), (t.cb = 0)), 0;
            }
            function Gt(t, e, n) {
              return (
                3 <= n && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2]
              );
            }
            function Kt(t, n) {
              if (null == t) return 0;
              if (((t.a = 0), (t.sc = "OK"), null == n))
                return Vt(t, 2, "null VP8Io passed to VP8GetHeaders()");
              var i = n.data,
                o = n.w,
                a = n.ha;
              if (4 > a) return Vt(t, 7, "Truncated header.");
              var s = i[o + 0] | (i[o + 1] << 8) | (i[o + 2] << 16),
                l = t.Od;
              if (
                ((l.Rb = !(1 & s)),
                (l.td = (s >> 1) & 7),
                (l.yd = (s >> 4) & 1),
                (l.ub = s >> 5),
                3 < l.td)
              )
                return Vt(t, 3, "Incorrect keyframe parameters.");
              if (!l.yd) return Vt(t, 4, "Frame not displayable.");
              (o += 3), (a -= 3);
              var c = t.Kc;
              if (l.Rb) {
                if (7 > a) return Vt(t, 7, "cannot parse picture header");
                if (!Gt(i, o, a)) return Vt(t, 3, "Bad code word");
                (c.c = 16383 & ((i[o + 4] << 8) | i[o + 3])),
                  (c.Td = i[o + 4] >> 6),
                  (c.i = 16383 & ((i[o + 6] << 8) | i[o + 5])),
                  (c.Ud = i[o + 6] >> 6),
                  (o += 7),
                  (a -= 7),
                  (t.za = (c.c + 15) >> 4),
                  (t.Ub = (c.i + 15) >> 4),
                  (n.width = c.c),
                  (n.height = c.i),
                  (n.Da = 0),
                  (n.j = 0),
                  (n.v = 0),
                  (n.va = n.width),
                  (n.o = n.height),
                  (n.da = 0),
                  (n.ib = n.width),
                  (n.hb = n.height),
                  (n.U = n.width),
                  (n.T = n.height),
                  r((s = t.Pa).jb, 0, 255, s.jb.length),
                  e(null != (s = t.Qa)),
                  (s.Cb = 0),
                  (s.Bb = 0),
                  (s.Fb = 1),
                  r(s.Zb, 0, 0, s.Zb.length),
                  r(s.Lb, 0, 0, s.Lb);
              }
              if (l.ub > a) return Vt(t, 7, "bad partition length");
              f((s = t.m), i, o, l.ub),
                (o += l.ub),
                (a -= l.ub),
                l.Rb && ((c.Ld = C(s)), (c.Kd = C(s))),
                (c = t.Qa);
              var d,
                u = t.Pa;
              if ((e(null != s), e(null != c), (c.Cb = C(s)), c.Cb)) {
                if (((c.Bb = C(s)), C(s))) {
                  for (c.Fb = C(s), d = 0; 4 > d; ++d)
                    c.Zb[d] = C(s) ? m(s, 7) : 0;
                  for (d = 0; 4 > d; ++d) c.Lb[d] = C(s) ? m(s, 6) : 0;
                }
                if (c.Bb)
                  for (d = 0; 3 > d; ++d) u.jb[d] = C(s) ? b(s, 8) : 255;
              } else c.Bb = 0;
              if (s.Ka) return Vt(t, 3, "cannot parse segment header");
              if (
                (((c = t.ed).zd = C(s)),
                (c.Tb = b(s, 6)),
                (c.wb = b(s, 3)),
                (c.Pc = C(s)),
                c.Pc && C(s))
              ) {
                for (u = 0; 4 > u; ++u) C(s) && (c.vd[u] = m(s, 6));
                for (u = 0; 4 > u; ++u) C(s) && (c.od[u] = m(s, 6));
              }
              if (((t.L = 0 == c.Tb ? 0 : c.zd ? 1 : 2), s.Ka))
                return Vt(t, 3, "cannot parse filter header");
              var p = a;
              if (
                ((a = d = o),
                (o = d + p),
                (c = p),
                (t.Xb = (1 << b(t.m, 2)) - 1),
                p < 3 * (u = t.Xb))
              )
                i = 7;
              else {
                for (d += 3 * u, c -= 3 * u, p = 0; p < u; ++p) {
                  var h = i[a + 0] | (i[a + 1] << 8) | (i[a + 2] << 16);
                  h > c && (h = c),
                    f(t.Jc[+p], i, d, h),
                    (d += h),
                    (c -= h),
                    (a += 3);
                }
                f(t.Jc[+u], i, d, c), (i = d < o ? 0 : 5);
              }
              if (0 != i) return Vt(t, i, "cannot parse partitions");
              for (
                i = b((d = t.m), 7),
                  a = C(d) ? m(d, 4) : 0,
                  o = C(d) ? m(d, 4) : 0,
                  c = C(d) ? m(d, 4) : 0,
                  u = C(d) ? m(d, 4) : 0,
                  d = C(d) ? m(d, 4) : 0,
                  p = t.Qa,
                  h = 0;
                4 > h;
                ++h
              ) {
                if (p.Cb) {
                  var g = p.Zb[h];
                  p.Fb || (g += i);
                } else {
                  if (0 < h) {
                    t.pb[h] = t.pb[0];
                    continue;
                  }
                  g = i;
                }
                var v = t.pb[h];
                (v.Sc[0] = er[Yt(g + a, 127)]),
                  (v.Sc[1] = nr[Yt(g + 0, 127)]),
                  (v.Eb[0] = 2 * er[Yt(g + o, 127)]),
                  (v.Eb[1] = (101581 * nr[Yt(g + c, 127)]) >> 16),
                  8 > v.Eb[1] && (v.Eb[1] = 8),
                  (v.Qc[0] = er[Yt(g + u, 117)]),
                  (v.Qc[1] = nr[Yt(g + d, 127)]),
                  (v.lc = g + d);
              }
              if (!l.Rb) return Vt(t, 4, "Not a key frame.");
              for (C(s), l = t.Pa, i = 0; 4 > i; ++i) {
                for (a = 0; 8 > a; ++a)
                  for (o = 0; 3 > o; ++o)
                    for (c = 0; 11 > c; ++c)
                      (u = k(s, cr[i][a][o][c]) ? b(s, 8) : sr[i][a][o][c]),
                        (l.Wc[i][a].Yb[o][c] = u);
                for (a = 0; 17 > a; ++a) l.Xc[i][a] = l.Wc[i][dr[a]];
              }
              return (t.kc = C(s)), t.kc && (t.Bd = b(s, 8)), (t.cb = 1);
            }
            function Zt(t, e, n, i, r, o, a) {
              var s = e[r].Yb[n];
              for (n = 0; 16 > r; ++r) {
                if (!k(t, s[n + 0])) return r;
                for (; !k(t, s[n + 1]); )
                  if (((s = e[++r].Yb[0]), (n = 0), 16 == r)) return 16;
                var l = e[r + 1].Yb;
                if (k(t, s[n + 2])) {
                  var c = t,
                    d = 0;
                  if (k(c, (p = s)[(u = n) + 3]))
                    if (k(c, p[u + 6])) {
                      for (
                        s = 0,
                          u =
                            2 * (d = k(c, p[u + 8])) + (p = k(c, p[u + 9 + d])),
                          d = 0,
                          p = rr[u];
                        p[s];
                        ++s
                      )
                        d += d + k(c, p[s]);
                      d += 3 + (8 << u);
                    } else
                      k(c, p[u + 7])
                        ? ((d = 7 + 2 * k(c, 165)), (d += k(c, 145)))
                        : (d = 5 + k(c, 159));
                  else d = k(c, p[u + 4]) ? 3 + k(c, p[u + 5]) : 2;
                  s = l[2];
                } else (d = 1), (s = l[1]);
                (l = a + or[r]), 0 > (c = t).b && z(c);
                var u,
                  p = c.b,
                  h = ((u = c.Ca >> 1) - (c.I >> p)) >> 31;
                --c.b,
                  (c.Ca += h),
                  (c.Ca |= 1),
                  (c.I -= ((u + 1) & h) << p),
                  (o[l] = ((d ^ h) - h) * i[(0 < r) + 0]);
              }
              return 16;
            }
            function Jt(t) {
              var e = t.rb[t.sb - 1];
              (e.la = 0), (e.Na = 0), r(t.zc, 0, 0, t.zc.length), (t.ja = 0);
            }
            function Qt(t, n) {
              if (null == t) return 0;
              if (null == n)
                return Vt(t, 2, "NULL VP8Io parameter in VP8Decode().");
              if (!t.cb && !Kt(t, n)) return 0;
              if ((e(t.cb), null == n.ac || n.ac(n))) {
                n.ob && (t.L = 0);
                var s = Wr[t.L];
                if (
                  (2 == t.L
                    ? ((t.yb = 0), (t.zb = 0))
                    : ((t.yb = (n.v - s) >> 4),
                      (t.zb = (n.j - s) >> 4),
                      0 > t.yb && (t.yb = 0),
                      0 > t.zb && (t.zb = 0)),
                  (t.Va = (n.o + 15 + s) >> 4),
                  (t.Hb = (n.va + 15 + s) >> 4),
                  t.Hb > t.za && (t.Hb = t.za),
                  t.Va > t.Ub && (t.Va = t.Ub),
                  0 < t.L)
                ) {
                  var l = t.ed;
                  for (s = 0; 4 > s; ++s) {
                    var c;
                    if (t.Qa.Cb) {
                      var d = t.Qa.Lb[s];
                      t.Qa.Fb || (d += l.Tb);
                    } else d = l.Tb;
                    for (c = 0; 1 >= c; ++c) {
                      var u = t.gd[s][c],
                        p = d;
                      if (
                        (l.Pc && ((p += l.vd[0]), c && (p += l.od[0])),
                        0 < (p = 0 > p ? 0 : 63 < p ? 63 : p))
                      ) {
                        var h = p;
                        0 < l.wb &&
                          (h = 4 < l.wb ? h >> 2 : h >> 1) > 9 - l.wb &&
                          (h = 9 - l.wb),
                          1 > h && (h = 1),
                          (u.dd = h),
                          (u.tc = 2 * p + h),
                          (u.ld = 40 <= p ? 2 : 15 <= p ? 1 : 0);
                      } else u.tc = 0;
                      u.La = c;
                    }
                  }
                }
                s = 0;
              } else Vt(t, 6, "Frame setup failed"), (s = t.a);
              if ((s = 0 == s)) {
                if (s) {
                  (t.$c = 0), 0 < t.Aa || (t.Ic = Br);
                  t: {
                    (s = t.Ic), (l = 4 * (h = t.za));
                    var f = 32 * h,
                      b = h + 1,
                      m = 0 < t.L ? h * (0 < t.Aa ? 2 : 1) : 0,
                      g = (2 == t.Aa ? 2 : 1) * h;
                    if (
                      (u =
                        l +
                        832 +
                        (c = ((3 * (16 * s + Wr[t.L])) / 2) * f) +
                        (d =
                          null != t.Fa && 0 < t.Fa.length
                            ? t.Kc.c * t.Kc.i
                            : 0)) != u
                    )
                      s = 0;
                    else {
                      if (u > t.Vb) {
                        if (
                          ((t.Vb = 0), (t.Ec = o(u)), (t.Fc = 0), null == t.Ec)
                        ) {
                          s = Vt(
                            t,
                            1,
                            "no memory during frame initialization."
                          );
                          break t;
                        }
                        t.Vb = u;
                      }
                      (u = t.Ec),
                        (p = t.Fc),
                        (t.Ac = u),
                        (t.Bc = p),
                        (p += l),
                        (t.Gd = a(f, $t)),
                        (t.Hd = 0),
                        (t.rb = a(b + 1, Wt)),
                        (t.sb = 1),
                        (t.wa = m ? a(m, It) : null),
                        (t.Y = 0),
                        (t.D.Nb = 0),
                        (t.D.wa = t.wa),
                        (t.D.Y = t.Y),
                        0 < t.Aa && (t.D.Y += h),
                        e(!0),
                        (t.oc = u),
                        (t.pc = p),
                        (p += 832),
                        (t.ya = a(g, Bt)),
                        (t.aa = 0),
                        (t.D.ya = t.ya),
                        (t.D.aa = t.aa),
                        2 == t.Aa && (t.D.aa += h),
                        (t.R = 16 * h),
                        (t.B = 8 * h),
                        (h = (f = Wr[t.L]) * t.R),
                        (f = (f / 2) * t.B),
                        (t.sa = u),
                        (t.ta = p + h),
                        (t.qa = t.sa),
                        (t.ra = t.ta + 16 * s * t.R + f),
                        (t.Ha = t.qa),
                        (t.Ia = t.ra + 8 * s * t.B + f),
                        (t.$c = 0),
                        (p += c),
                        (t.mb = d ? u : null),
                        (t.nb = d ? p : null),
                        e(p + d <= t.Fc + t.Vb),
                        Jt(t),
                        r(t.Ac, t.Bc, 0, l),
                        (s = 1);
                    }
                  }
                  if (s) {
                    if (
                      ((n.ka = 0),
                      (n.y = t.sa),
                      (n.O = t.ta),
                      (n.f = t.qa),
                      (n.N = t.ra),
                      (n.ea = t.Ha),
                      (n.Vd = t.Ia),
                      (n.fa = t.R),
                      (n.Rc = t.B),
                      (n.F = null),
                      (n.J = 0),
                      !Di)
                    ) {
                      for (s = -255; 255 >= s; ++s)
                        Ci[255 + s] = 0 > s ? -s : s;
                      for (s = -1020; 1020 >= s; ++s)
                        ki[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                      for (s = -112; 112 >= s; ++s)
                        Si[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                      for (s = -255; 510 >= s; ++s)
                        Ti[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                      Di = 1;
                    }
                    (oi = ce),
                      (ai = oe),
                      (li = ae),
                      (ci = se),
                      (di = le),
                      (si = re),
                      (ui = Ve),
                      (pi = Ge),
                      (hi = Je),
                      (fi = Qe),
                      (bi = Ke),
                      (mi = Ze),
                      (gi = tn),
                      (vi = en),
                      (_i = Fe),
                      (yi = $e),
                      (Mi = He),
                      (Oi = Ye),
                      (pr[0] = Ae),
                      (pr[1] = ue),
                      (pr[2] = Oe),
                      (pr[3] = we),
                      (pr[4] = xe),
                      (pr[5] = Ce),
                      (pr[6] = ze),
                      (pr[7] = ke),
                      (pr[8] = Te),
                      (pr[9] = Se),
                      (ur[0] = ge),
                      (ur[1] = he),
                      (ur[2] = fe),
                      (ur[3] = be),
                      (ur[4] = ve),
                      (ur[5] = _e),
                      (ur[6] = ye),
                      (hr[0] = Ee),
                      (hr[1] = pe),
                      (hr[2] = De),
                      (hr[3] = Le),
                      (hr[4] = Pe),
                      (hr[5] = je),
                      (hr[6] = Re),
                      (s = 1);
                  } else s = 0;
                }
                s &&
                  (s = (function (t, n) {
                    for (t.M = 0; t.M < t.Va; ++t.M) {
                      var a,
                        s = t.Jc[t.M & t.Xb],
                        l = t.m,
                        c = t;
                      for (a = 0; a < c.za; ++a) {
                        var d = l,
                          u = c,
                          p = u.Ac,
                          h = u.Bc + 4 * a,
                          f = u.zc,
                          b = u.ya[u.aa + a];
                        if (
                          (u.Qa.Bb
                            ? (b.$b = k(d, u.Pa.jb[0])
                                ? 2 + k(d, u.Pa.jb[2])
                                : k(d, u.Pa.jb[1]))
                            : (b.$b = 0),
                          u.kc && (b.Ad = k(d, u.Bd)),
                          (b.Za = !k(d, 145) + 0),
                          b.Za)
                        ) {
                          var m = b.Ob,
                            g = 0;
                          for (u = 0; 4 > u; ++u) {
                            var v,
                              _ = f[0 + u];
                            for (v = 0; 4 > v; ++v) {
                              _ = lr[p[h + v]][_];
                              for (var y = ar[k(d, _[0])]; 0 < y; )
                                y = ar[2 * y + k(d, _[y])];
                              (_ = -y), (p[h + v] = _);
                            }
                            i(m, g, p, h, 4), (g += 4), (f[0 + u] = _);
                          }
                        } else
                          (_ = k(d, 156)
                            ? k(d, 128)
                              ? 1
                              : 3
                            : k(d, 163)
                            ? 2
                            : 0),
                            (b.Ob[0] = _),
                            r(p, h, _, 4),
                            r(f, 0, _, 4);
                        b.Dd = k(d, 142)
                          ? k(d, 114)
                            ? k(d, 183)
                              ? 1
                              : 3
                            : 2
                          : 0;
                      }
                      if (c.m.Ka)
                        return Vt(
                          t,
                          7,
                          "Premature end-of-partition0 encountered."
                        );
                      for (; t.ja < t.za; ++t.ja) {
                        if (
                          ((c = s),
                          (d = (l = t).rb[l.sb - 1]),
                          (p = l.rb[l.sb + l.ja]),
                          (a = l.ya[l.aa + l.ja]),
                          (h = l.kc ? a.Ad : 0))
                        )
                          (d.la = p.la = 0),
                            a.Za || (d.Na = p.Na = 0),
                            (a.Hc = 0),
                            (a.Gc = 0),
                            (a.ia = 0);
                        else {
                          var M, O;
                          if (
                            ((d = p),
                            (p = c),
                            (h = l.Pa.Xc),
                            (f = l.ya[l.aa + l.ja]),
                            (b = l.pb[f.$b]),
                            (u = f.ad),
                            (m = 0),
                            (g = l.rb[l.sb - 1]),
                            (_ = v = 0),
                            r(u, m, 0, 384),
                            f.Za)
                          )
                            var w = 0,
                              A = h[3];
                          else {
                            y = o(16);
                            var x = d.Na + g.Na;
                            if (
                              ((x = ir(p, h[1], x, b.Eb, 0, y, 0)),
                              (d.Na = g.Na = (0 < x) + 0),
                              1 < x)
                            )
                              oi(y, 0, u, m);
                            else {
                              var z = (y[0] + 3) >> 3;
                              for (y = 0; 256 > y; y += 16) u[m + y] = z;
                            }
                            (w = 1), (A = h[0]);
                          }
                          var C = 15 & d.la,
                            S = 15 & g.la;
                          for (y = 0; 4 > y; ++y) {
                            var T = 1 & S;
                            for (z = O = 0; 4 > z; ++z)
                              (C =
                                (C >> 1) |
                                ((T =
                                  (x = ir(
                                    p,
                                    A,
                                    (x = T + (1 & C)),
                                    b.Sc,
                                    w,
                                    u,
                                    m
                                  )) > w) <<
                                  7)),
                                (O =
                                  (O << 2) |
                                  (3 < x ? 3 : 1 < x ? 2 : 0 != u[m + 0])),
                                (m += 16);
                            (C >>= 4),
                              (S = (S >> 1) | (T << 7)),
                              (v = ((v << 8) | O) >>> 0);
                          }
                          for (A = C, w = S >> 4, M = 0; 4 > M; M += 2) {
                            for (
                              O = 0,
                                C = d.la >> (4 + M),
                                S = g.la >> (4 + M),
                                y = 0;
                              2 > y;
                              ++y
                            ) {
                              for (T = 1 & S, z = 0; 2 > z; ++z)
                                (x = T + (1 & C)),
                                  (C =
                                    (C >> 1) |
                                    ((T =
                                      0 <
                                      (x = ir(p, h[2], x, b.Qc, 0, u, m))) <<
                                      3)),
                                  (O =
                                    (O << 2) |
                                    (3 < x ? 3 : 1 < x ? 2 : 0 != u[m + 0])),
                                  (m += 16);
                              (C >>= 2), (S = (S >> 1) | (T << 5));
                            }
                            (_ |= O << (4 * M)),
                              (A |= (C << 4) << M),
                              (w |= (240 & S) << M);
                          }
                          (d.la = A),
                            (g.la = w),
                            (f.Hc = v),
                            (f.Gc = _),
                            (f.ia = 43690 & _ ? 0 : b.ia),
                            (h = !(v | _));
                        }
                        if (
                          (0 < l.L &&
                            ((l.wa[l.Y + l.ja] = l.gd[a.$b][a.Za]),
                            (l.wa[l.Y + l.ja].La |= !h)),
                          c.Ka)
                        )
                          return Vt(t, 7, "Premature end-of-file encountered.");
                      }
                      if (
                        (Jt(t),
                        (l = n),
                        (c = 1),
                        (a = (s = t).D),
                        (d = 0 < s.L && s.M >= s.zb && s.M <= s.Va),
                        0 == s.Aa)
                      )
                        t: {
                          if (
                            ((a.M = s.M),
                            (a.uc = d),
                            En(s, a),
                            (c = 1),
                            (a = (O = s.D).Nb),
                            (d = (_ = Wr[s.L]) * s.R),
                            (p = (_ / 2) * s.B),
                            (y = 16 * a * s.R),
                            (z = 8 * a * s.B),
                            (h = s.sa),
                            (f = s.ta - d + y),
                            (b = s.qa),
                            (u = s.ra - p + z),
                            (m = s.Ha),
                            (g = s.Ia - p + z),
                            (S = 0 == (C = O.M)),
                            (v = C >= s.Va - 1),
                            2 == s.Aa && En(s, O),
                            O.uc)
                          )
                            for (
                              T = (x = s).D.M, e(x.D.uc), O = x.yb;
                              O < x.Hb;
                              ++O
                            ) {
                              (w = O), (A = T);
                              var D = (L = (B = x).D).Nb;
                              M = B.R;
                              var L = L.wa[L.Y + w],
                                q = B.sa,
                                E = B.ta + 16 * D * M + 16 * w,
                                j = L.dd,
                                P = L.tc;
                              if (0 != P)
                                if ((e(3 <= P), 1 == B.L))
                                  0 < w && yi(q, E, M, P + 4),
                                    L.La && Oi(q, E, M, P),
                                    0 < A && _i(q, E, M, P + 4),
                                    L.La && Mi(q, E, M, P);
                                else {
                                  var R = B.B,
                                    I = B.qa,
                                    W = B.ra + 8 * D * R + 8 * w,
                                    N = B.Ha,
                                    B = B.Ia + 8 * D * R + 8 * w;
                                  (D = L.ld),
                                    0 < w &&
                                      (pi(q, E, M, P + 4, j, D),
                                      fi(I, W, N, B, R, P + 4, j, D)),
                                    L.La &&
                                      (mi(q, E, M, P, j, D),
                                      vi(I, W, N, B, R, P, j, D)),
                                    0 < A &&
                                      (ui(q, E, M, P + 4, j, D),
                                      hi(I, W, N, B, R, P + 4, j, D)),
                                    L.La &&
                                      (bi(q, E, M, P, j, D),
                                      gi(I, W, N, B, R, P, j, D));
                                }
                            }
                          if (
                            (s.ia && alert("todo:DitherRow"), null != l.put)
                          ) {
                            if (
                              ((O = 16 * C),
                              (C = 16 * (C + 1)),
                              S
                                ? ((l.y = s.sa),
                                  (l.O = s.ta + y),
                                  (l.f = s.qa),
                                  (l.N = s.ra + z),
                                  (l.ea = s.Ha),
                                  (l.W = s.Ia + z))
                                : ((O -= _),
                                  (l.y = h),
                                  (l.O = f),
                                  (l.f = b),
                                  (l.N = u),
                                  (l.ea = m),
                                  (l.W = g)),
                              v || (C -= _),
                              C > l.o && (C = l.o),
                              (l.F = null),
                              (l.J = null),
                              null != s.Fa &&
                                0 < s.Fa.length &&
                                O < C &&
                                ((l.J = pn(s, l, O, C - O)),
                                (l.F = s.mb),
                                null == l.F && 0 == l.F.length))
                            ) {
                              c = Vt(s, 3, "Could not decode alpha data.");
                              break t;
                            }
                            O < l.j &&
                              ((_ = l.j - O),
                              (O = l.j),
                              e(!(1 & _)),
                              (l.O += s.R * _),
                              (l.N += s.B * (_ >> 1)),
                              (l.W += s.B * (_ >> 1)),
                              null != l.F && (l.J += l.width * _)),
                              O < C &&
                                ((l.O += l.v),
                                (l.N += l.v >> 1),
                                (l.W += l.v >> 1),
                                null != l.F && (l.J += l.v),
                                (l.ka = O - l.j),
                                (l.U = l.va - l.v),
                                (l.T = C - O),
                                (c = l.put(l)));
                          }
                          a + 1 != s.Ic ||
                            v ||
                            (i(s.sa, s.ta - d, h, f + 16 * s.R, d),
                            i(s.qa, s.ra - p, b, u + 8 * s.B, p),
                            i(s.Ha, s.Ia - p, m, g + 8 * s.B, p));
                        }
                      if (!c) return Vt(t, 6, "Output aborted.");
                    }
                    return 1;
                  })(t, n)),
                  null != n.bc && n.bc(n),
                  (s &= 1);
              }
              return s ? ((t.cb = 0), s) : 0;
            }
            function te(t, e, n, i, r) {
              (r = t[e + n + 32 * i] + (r >> 3)),
                (t[e + n + 32 * i] = -256 & r ? (0 > r ? 0 : 255) : r);
            }
            function ee(t, e, n, i, r, o) {
              te(t, e, 0, n, i + r),
                te(t, e, 1, n, i + o),
                te(t, e, 2, n, i - o),
                te(t, e, 3, n, i - r);
            }
            function ne(t) {
              return ((20091 * t) >> 16) + t;
            }
            function ie(t, e, n, i) {
              var r,
                a = 0,
                s = o(16);
              for (r = 0; 4 > r; ++r) {
                var l = t[e + 0] + t[e + 8],
                  c = t[e + 0] - t[e + 8],
                  d = ((35468 * t[e + 4]) >> 16) - ne(t[e + 12]),
                  u = ne(t[e + 4]) + ((35468 * t[e + 12]) >> 16);
                (s[a + 0] = l + u),
                  (s[a + 1] = c + d),
                  (s[a + 2] = c - d),
                  (s[a + 3] = l - u),
                  (a += 4),
                  e++;
              }
              for (r = a = 0; 4 > r; ++r)
                (l = (t = s[a + 0] + 4) + s[a + 8]),
                  (c = t - s[a + 8]),
                  (d = ((35468 * s[a + 4]) >> 16) - ne(s[a + 12])),
                  te(
                    n,
                    i,
                    0,
                    0,
                    l + (u = ne(s[a + 4]) + ((35468 * s[a + 12]) >> 16))
                  ),
                  te(n, i, 1, 0, c + d),
                  te(n, i, 2, 0, c - d),
                  te(n, i, 3, 0, l - u),
                  a++,
                  (i += 32);
            }
            function re(t, e, n, i) {
              var r = t[e + 0] + 4,
                o = (35468 * t[e + 4]) >> 16,
                a = ne(t[e + 4]),
                s = (35468 * t[e + 1]) >> 16;
              ee(n, i, 0, r + a, (t = ne(t[e + 1])), s),
                ee(n, i, 1, r + o, t, s),
                ee(n, i, 2, r - o, t, s),
                ee(n, i, 3, r - a, t, s);
            }
            function oe(t, e, n, i, r) {
              ie(t, e, n, i), r && ie(t, e + 16, n, i + 4);
            }
            function ae(t, e, n, i) {
              ai(t, e + 0, n, i, 1), ai(t, e + 32, n, i + 128, 1);
            }
            function se(t, e, n, i) {
              var r;
              for (t = t[e + 0] + 4, r = 0; 4 > r; ++r)
                for (e = 0; 4 > e; ++e) te(n, i, e, r, t);
            }
            function le(t, e, n, i) {
              t[e + 0] && ci(t, e + 0, n, i),
                t[e + 16] && ci(t, e + 16, n, i + 4),
                t[e + 32] && ci(t, e + 32, n, i + 128),
                t[e + 48] && ci(t, e + 48, n, i + 128 + 4);
            }
            function ce(t, e, n, i) {
              var r,
                a = o(16);
              for (r = 0; 4 > r; ++r) {
                var s = t[e + 0 + r] + t[e + 12 + r],
                  l = t[e + 4 + r] + t[e + 8 + r],
                  c = t[e + 4 + r] - t[e + 8 + r],
                  d = t[e + 0 + r] - t[e + 12 + r];
                (a[0 + r] = s + l),
                  (a[8 + r] = s - l),
                  (a[4 + r] = d + c),
                  (a[12 + r] = d - c);
              }
              for (r = 0; 4 > r; ++r)
                (s = (t = a[0 + 4 * r] + 3) + a[3 + 4 * r]),
                  (l = a[1 + 4 * r] + a[2 + 4 * r]),
                  (c = a[1 + 4 * r] - a[2 + 4 * r]),
                  (d = t - a[3 + 4 * r]),
                  (n[i + 0] = (s + l) >> 3),
                  (n[i + 16] = (d + c) >> 3),
                  (n[i + 32] = (s - l) >> 3),
                  (n[i + 48] = (d - c) >> 3),
                  (i += 64);
            }
            function de(t, e, n) {
              var i,
                r = e - 32,
                o = Ei,
                a = 255 - t[r - 1];
              for (i = 0; i < n; ++i) {
                var s,
                  l = o,
                  c = a + t[e - 1];
                for (s = 0; s < n; ++s) t[e + s] = l[c + t[r + s]];
                e += 32;
              }
            }
            function ue(t, e) {
              de(t, e, 4);
            }
            function pe(t, e) {
              de(t, e, 8);
            }
            function he(t, e) {
              de(t, e, 16);
            }
            function fe(t, e) {
              var n;
              for (n = 0; 16 > n; ++n) i(t, e + 32 * n, t, e - 32, 16);
            }
            function be(t, e) {
              var n;
              for (n = 16; 0 < n; --n) r(t, e, t[e - 1], 16), (e += 32);
            }
            function me(t, e, n) {
              var i;
              for (i = 0; 16 > i; ++i) r(e, n + 32 * i, t, 16);
            }
            function ge(t, e) {
              var n,
                i = 16;
              for (n = 0; 16 > n; ++n) i += t[e - 1 + 32 * n] + t[e + n - 32];
              me(i >> 5, t, e);
            }
            function ve(t, e) {
              var n,
                i = 8;
              for (n = 0; 16 > n; ++n) i += t[e - 1 + 32 * n];
              me(i >> 4, t, e);
            }
            function _e(t, e) {
              var n,
                i = 8;
              for (n = 0; 16 > n; ++n) i += t[e + n - 32];
              me(i >> 4, t, e);
            }
            function ye(t, e) {
              me(128, t, e);
            }
            function Me(t, e, n) {
              return (t + 2 * e + n + 2) >> 2;
            }
            function Oe(t, e) {
              var n,
                r = e - 32;
              for (
                r = new Uint8Array([
                  Me(t[r - 1], t[r + 0], t[r + 1]),
                  Me(t[r + 0], t[r + 1], t[r + 2]),
                  Me(t[r + 1], t[r + 2], t[r + 3]),
                  Me(t[r + 2], t[r + 3], t[r + 4]),
                ]),
                  n = 0;
                4 > n;
                ++n
              )
                i(t, e + 32 * n, r, 0, r.length);
            }
            function we(t, e) {
              var n = t[e - 1],
                i = t[e - 1 + 32],
                r = t[e - 1 + 64],
                o = t[e - 1 + 96];
              S(t, e + 0, 16843009 * Me(t[e - 1 - 32], n, i)),
                S(t, e + 32, 16843009 * Me(n, i, r)),
                S(t, e + 64, 16843009 * Me(i, r, o)),
                S(t, e + 96, 16843009 * Me(r, o, o));
            }
            function Ae(t, e) {
              var n,
                i = 4;
              for (n = 0; 4 > n; ++n) i += t[e + n - 32] + t[e - 1 + 32 * n];
              for (i >>= 3, n = 0; 4 > n; ++n) r(t, e + 32 * n, i, 4);
            }
            function xe(t, e) {
              var n = t[e - 1 + 0],
                i = t[e - 1 + 32],
                r = t[e - 1 + 64],
                o = t[e - 1 - 32],
                a = t[e + 0 - 32],
                s = t[e + 1 - 32],
                l = t[e + 2 - 32],
                c = t[e + 3 - 32];
              (t[e + 0 + 96] = Me(i, r, t[e - 1 + 96])),
                (t[e + 1 + 96] = t[e + 0 + 64] = Me(n, i, r)),
                (t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = Me(o, n, i)),
                (t[e + 3 + 96] =
                  t[e + 2 + 64] =
                  t[e + 1 + 32] =
                  t[e + 0 + 0] =
                    Me(a, o, n)),
                (t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = Me(s, a, o)),
                (t[e + 3 + 32] = t[e + 2 + 0] = Me(l, s, a)),
                (t[e + 3 + 0] = Me(c, l, s));
            }
            function ze(t, e) {
              var n = t[e + 1 - 32],
                i = t[e + 2 - 32],
                r = t[e + 3 - 32],
                o = t[e + 4 - 32],
                a = t[e + 5 - 32],
                s = t[e + 6 - 32],
                l = t[e + 7 - 32];
              (t[e + 0 + 0] = Me(t[e + 0 - 32], n, i)),
                (t[e + 1 + 0] = t[e + 0 + 32] = Me(n, i, r)),
                (t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = Me(i, r, o)),
                (t[e + 3 + 0] =
                  t[e + 2 + 32] =
                  t[e + 1 + 64] =
                  t[e + 0 + 96] =
                    Me(r, o, a)),
                (t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = Me(o, a, s)),
                (t[e + 3 + 64] = t[e + 2 + 96] = Me(a, s, l)),
                (t[e + 3 + 96] = Me(s, l, l));
            }
            function Ce(t, e) {
              var n = t[e - 1 + 0],
                i = t[e - 1 + 32],
                r = t[e - 1 + 64],
                o = t[e - 1 - 32],
                a = t[e + 0 - 32],
                s = t[e + 1 - 32],
                l = t[e + 2 - 32],
                c = t[e + 3 - 32];
              (t[e + 0 + 0] = t[e + 1 + 64] = (o + a + 1) >> 1),
                (t[e + 1 + 0] = t[e + 2 + 64] = (a + s + 1) >> 1),
                (t[e + 2 + 0] = t[e + 3 + 64] = (s + l + 1) >> 1),
                (t[e + 3 + 0] = (l + c + 1) >> 1),
                (t[e + 0 + 96] = Me(r, i, n)),
                (t[e + 0 + 64] = Me(i, n, o)),
                (t[e + 0 + 32] = t[e + 1 + 96] = Me(n, o, a)),
                (t[e + 1 + 32] = t[e + 2 + 96] = Me(o, a, s)),
                (t[e + 2 + 32] = t[e + 3 + 96] = Me(a, s, l)),
                (t[e + 3 + 32] = Me(s, l, c));
            }
            function ke(t, e) {
              var n = t[e + 0 - 32],
                i = t[e + 1 - 32],
                r = t[e + 2 - 32],
                o = t[e + 3 - 32],
                a = t[e + 4 - 32],
                s = t[e + 5 - 32],
                l = t[e + 6 - 32],
                c = t[e + 7 - 32];
              (t[e + 0 + 0] = (n + i + 1) >> 1),
                (t[e + 1 + 0] = t[e + 0 + 64] = (i + r + 1) >> 1),
                (t[e + 2 + 0] = t[e + 1 + 64] = (r + o + 1) >> 1),
                (t[e + 3 + 0] = t[e + 2 + 64] = (o + a + 1) >> 1),
                (t[e + 0 + 32] = Me(n, i, r)),
                (t[e + 1 + 32] = t[e + 0 + 96] = Me(i, r, o)),
                (t[e + 2 + 32] = t[e + 1 + 96] = Me(r, o, a)),
                (t[e + 3 + 32] = t[e + 2 + 96] = Me(o, a, s)),
                (t[e + 3 + 64] = Me(a, s, l)),
                (t[e + 3 + 96] = Me(s, l, c));
            }
            function Se(t, e) {
              var n = t[e - 1 + 0],
                i = t[e - 1 + 32],
                r = t[e - 1 + 64],
                o = t[e - 1 + 96];
              (t[e + 0 + 0] = (n + i + 1) >> 1),
                (t[e + 2 + 0] = t[e + 0 + 32] = (i + r + 1) >> 1),
                (t[e + 2 + 32] = t[e + 0 + 64] = (r + o + 1) >> 1),
                (t[e + 1 + 0] = Me(n, i, r)),
                (t[e + 3 + 0] = t[e + 1 + 32] = Me(i, r, o)),
                (t[e + 3 + 32] = t[e + 1 + 64] = Me(r, o, o)),
                (t[e + 3 + 64] =
                  t[e + 2 + 64] =
                  t[e + 0 + 96] =
                  t[e + 1 + 96] =
                  t[e + 2 + 96] =
                  t[e + 3 + 96] =
                    o);
            }
            function Te(t, e) {
              var n = t[e - 1 + 0],
                i = t[e - 1 + 32],
                r = t[e - 1 + 64],
                o = t[e - 1 + 96],
                a = t[e - 1 - 32],
                s = t[e + 0 - 32],
                l = t[e + 1 - 32],
                c = t[e + 2 - 32];
              (t[e + 0 + 0] = t[e + 2 + 32] = (n + a + 1) >> 1),
                (t[e + 0 + 32] = t[e + 2 + 64] = (i + n + 1) >> 1),
                (t[e + 0 + 64] = t[e + 2 + 96] = (r + i + 1) >> 1),
                (t[e + 0 + 96] = (o + r + 1) >> 1),
                (t[e + 3 + 0] = Me(s, l, c)),
                (t[e + 2 + 0] = Me(a, s, l)),
                (t[e + 1 + 0] = t[e + 3 + 32] = Me(n, a, s)),
                (t[e + 1 + 32] = t[e + 3 + 64] = Me(i, n, a)),
                (t[e + 1 + 64] = t[e + 3 + 96] = Me(r, i, n)),
                (t[e + 1 + 96] = Me(o, r, i));
            }
            function De(t, e) {
              var n;
              for (n = 0; 8 > n; ++n) i(t, e + 32 * n, t, e - 32, 8);
            }
            function Le(t, e) {
              var n;
              for (n = 0; 8 > n; ++n) r(t, e, t[e - 1], 8), (e += 32);
            }
            function qe(t, e, n) {
              var i;
              for (i = 0; 8 > i; ++i) r(e, n + 32 * i, t, 8);
            }
            function Ee(t, e) {
              var n,
                i = 8;
              for (n = 0; 8 > n; ++n) i += t[e + n - 32] + t[e - 1 + 32 * n];
              qe(i >> 4, t, e);
            }
            function je(t, e) {
              var n,
                i = 4;
              for (n = 0; 8 > n; ++n) i += t[e + n - 32];
              qe(i >> 3, t, e);
            }
            function Pe(t, e) {
              var n,
                i = 4;
              for (n = 0; 8 > n; ++n) i += t[e - 1 + 32 * n];
              qe(i >> 3, t, e);
            }
            function Re(t, e) {
              qe(128, t, e);
            }
            function Ie(t, e, n) {
              var i = t[e - n],
                r = t[e + 0],
                o = 3 * (r - i) + Li[1020 + t[e - 2 * n] - t[e + n]],
                a = qi[112 + ((o + 4) >> 3)];
              (t[e - n] = Ei[255 + i + qi[112 + ((o + 3) >> 3)]]),
                (t[e + 0] = Ei[255 + r - a]);
            }
            function We(t, e, n, i) {
              var r = t[e + 0],
                o = t[e + n];
              return (
                ji[255 + t[e - 2 * n] - t[e - n]] > i || ji[255 + o - r] > i
              );
            }
            function Ne(t, e, n, i) {
              return (
                4 * ji[255 + t[e - n] - t[e + 0]] +
                  ji[255 + t[e - 2 * n] - t[e + n]] <=
                i
              );
            }
            function Be(t, e, n, i, r) {
              var o = t[e - 3 * n],
                a = t[e - 2 * n],
                s = t[e - n],
                l = t[e + 0],
                c = t[e + n],
                d = t[e + 2 * n],
                u = t[e + 3 * n];
              return 4 * ji[255 + s - l] + ji[255 + a - c] > i
                ? 0
                : ji[255 + t[e - 4 * n] - o] <= r &&
                    ji[255 + o - a] <= r &&
                    ji[255 + a - s] <= r &&
                    ji[255 + u - d] <= r &&
                    ji[255 + d - c] <= r &&
                    ji[255 + c - l] <= r;
            }
            function Fe(t, e, n, i) {
              var r = 2 * i + 1;
              for (i = 0; 16 > i; ++i) Ne(t, e + i, n, r) && Ie(t, e + i, n);
            }
            function $e(t, e, n, i) {
              var r = 2 * i + 1;
              for (i = 0; 16 > i; ++i)
                Ne(t, e + i * n, 1, r) && Ie(t, e + i * n, 1);
            }
            function He(t, e, n, i) {
              var r;
              for (r = 3; 0 < r; --r) Fe(t, (e += 4 * n), n, i);
            }
            function Ye(t, e, n, i) {
              var r;
              for (r = 3; 0 < r; --r) $e(t, (e += 4), n, i);
            }
            function Ue(t, e, n, i, r, o, a, s) {
              for (o = 2 * o + 1; 0 < r--; ) {
                if (Be(t, e, n, o, a))
                  if (We(t, e, n, s)) Ie(t, e, n);
                  else {
                    var l = t,
                      c = e,
                      d = n,
                      u = l[c - 2 * d],
                      p = l[c - d],
                      h = l[c + 0],
                      f = l[c + d],
                      b = l[c + 2 * d],
                      m =
                        (27 * (v = Li[1020 + 3 * (h - p) + Li[1020 + u - f]]) +
                          63) >>
                        7,
                      g = (18 * v + 63) >> 7,
                      v = (9 * v + 63) >> 7;
                    (l[c - 3 * d] = Ei[255 + l[c - 3 * d] + v]),
                      (l[c - 2 * d] = Ei[255 + u + g]),
                      (l[c - d] = Ei[255 + p + m]),
                      (l[c + 0] = Ei[255 + h - m]),
                      (l[c + d] = Ei[255 + f - g]),
                      (l[c + 2 * d] = Ei[255 + b - v]);
                  }
                e += i;
              }
            }
            function Xe(t, e, n, i, r, o, a, s) {
              for (o = 2 * o + 1; 0 < r--; ) {
                if (Be(t, e, n, o, a))
                  if (We(t, e, n, s)) Ie(t, e, n);
                  else {
                    var l = t,
                      c = e,
                      d = n,
                      u = l[c - d],
                      p = l[c + 0],
                      h = l[c + d],
                      f = qi[112 + ((4 + (b = 3 * (p - u))) >> 3)],
                      b = qi[112 + ((b + 3) >> 3)],
                      m = (f + 1) >> 1;
                    (l[c - 2 * d] = Ei[255 + l[c - 2 * d] + m]),
                      (l[c - d] = Ei[255 + u + b]),
                      (l[c + 0] = Ei[255 + p - f]),
                      (l[c + d] = Ei[255 + h - m]);
                  }
                e += i;
              }
            }
            function Ve(t, e, n, i, r, o) {
              Ue(t, e, n, 1, 16, i, r, o);
            }
            function Ge(t, e, n, i, r, o) {
              Ue(t, e, 1, n, 16, i, r, o);
            }
            function Ke(t, e, n, i, r, o) {
              var a;
              for (a = 3; 0 < a; --a) Xe(t, (e += 4 * n), n, 1, 16, i, r, o);
            }
            function Ze(t, e, n, i, r, o) {
              var a;
              for (a = 3; 0 < a; --a) Xe(t, (e += 4), 1, n, 16, i, r, o);
            }
            function Je(t, e, n, i, r, o, a, s) {
              Ue(t, e, r, 1, 8, o, a, s), Ue(n, i, r, 1, 8, o, a, s);
            }
            function Qe(t, e, n, i, r, o, a, s) {
              Ue(t, e, 1, r, 8, o, a, s), Ue(n, i, 1, r, 8, o, a, s);
            }
            function tn(t, e, n, i, r, o, a, s) {
              Xe(t, e + 4 * r, r, 1, 8, o, a, s),
                Xe(n, i + 4 * r, r, 1, 8, o, a, s);
            }
            function en(t, e, n, i, r, o, a, s) {
              Xe(t, e + 4, 1, r, 8, o, a, s), Xe(n, i + 4, 1, r, 8, o, a, s);
            }
            function nn() {
              (this.ba = new at()),
                (this.ec = []),
                (this.cc = []),
                (this.Mc = []),
                (this.Dc = this.Nc = this.dc = this.fc = 0),
                (this.Oa = new lt()),
                (this.memory = 0),
                (this.Ib = "OutputFunc"),
                (this.Jb = "OutputAlphaFunc"),
                (this.Nd = "OutputRowFunc");
            }
            function rn() {
              (this.data = []),
                (this.offset = this.kd = this.ha = this.w = 0),
                (this.na = []),
                (this.xa = this.gb = this.Ja = this.Sa = this.P = 0);
            }
            function on() {
              (this.nc = this.Ea = this.b = this.hc = 0),
                (this.K = []),
                (this.w = 0);
            }
            function an() {
              (this.ua = 0),
                (this.Wa = new j()),
                (this.vb = new j()),
                (this.md = this.xc = this.wc = 0),
                (this.vc = []),
                (this.Wb = 0),
                (this.Ya = new h()),
                (this.yc = new u());
            }
            function sn() {
              (this.xb = this.a = 0),
                (this.l = new Ut()),
                (this.ca = new at()),
                (this.V = []),
                (this.Ba = 0),
                (this.Ta = []),
                (this.Ua = 0),
                (this.m = new M()),
                (this.Pb = 0),
                (this.wd = new M()),
                (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
                (this.s = new an()),
                (this.ab = 0),
                (this.gc = a(4, on)),
                (this.Oc = 0);
            }
            function ln() {
              (this.Lc = this.Z = this.$a = this.i = this.c = 0),
                (this.l = new Ut()),
                (this.ic = 0),
                (this.ca = []),
                (this.tb = 0),
                (this.qd = null),
                (this.rd = 0);
            }
            function cn(t, e, n, i, r, o, a) {
              for (t = null == t ? 0 : t[e + 0], e = 0; e < a; ++e)
                (r[o + e] = (t + n[i + e]) & 255), (t = r[o + e]);
            }
            function dn(t, e, n, i, r, o, a) {
              var s;
              if (null == t) cn(null, null, n, i, r, o, a);
              else
                for (s = 0; s < a; ++s) r[o + s] = (t[e + s] + n[i + s]) & 255;
            }
            function un(t, e, n, i, r, o, a) {
              if (null == t) cn(null, null, n, i, r, o, a);
              else {
                var s,
                  l = t[e + 0],
                  c = l,
                  d = l;
                for (s = 0; s < a; ++s)
                  (c = d + (l = t[e + s]) - c),
                    (d = (n[i + s] + (-256 & c ? (0 > c ? 0 : 255) : c)) & 255),
                    (c = l),
                    (r[o + s] = d);
              }
            }
            function pn(t, n, r, a) {
              var s = n.width,
                l = n.o;
              if ((e(null != t && null != n), 0 > r || 0 >= a || r + a > l))
                return null;
              if (!t.Cc) {
                if (null == t.ga) {
                  var c;
                  if (
                    ((t.ga = new ln()),
                    (c = null == t.ga) ||
                      ((c = n.width * n.o),
                      e(0 == t.Gb.length),
                      (t.Gb = o(c)),
                      (t.Uc = 0),
                      null == t.Gb
                        ? (c = 0)
                        : ((t.mb = t.Gb),
                          (t.nb = t.Uc),
                          (t.rc = null),
                          (c = 1)),
                      (c = !c)),
                    !c)
                  ) {
                    c = t.ga;
                    var d = t.Fa,
                      u = t.P,
                      p = t.qc,
                      h = t.mb,
                      f = t.nb,
                      b = u + 1,
                      m = p - 1,
                      v = c.l;
                    if (
                      (e(null != d && null != h && null != n),
                      (mr[0] = null),
                      (mr[1] = cn),
                      (mr[2] = dn),
                      (mr[3] = un),
                      (c.ca = h),
                      (c.tb = f),
                      (c.c = n.width),
                      (c.i = n.height),
                      e(0 < c.c && 0 < c.i),
                      1 >= p)
                    )
                      n = 0;
                    else if (
                      ((c.$a = (d[u + 0] >> 0) & 3),
                      (c.Z = (d[u + 0] >> 2) & 3),
                      (c.Lc = (d[u + 0] >> 4) & 3),
                      (u = (d[u + 0] >> 6) & 3),
                      0 > c.$a || 1 < c.$a || 4 <= c.Z || 1 < c.Lc || u)
                    )
                      n = 0;
                    else if (
                      ((v.put = ht),
                      (v.ac = pt),
                      (v.bc = ft),
                      (v.ma = c),
                      (v.width = n.width),
                      (v.height = n.height),
                      (v.Da = n.Da),
                      (v.v = n.v),
                      (v.va = n.va),
                      (v.j = n.j),
                      (v.o = n.o),
                      c.$a)
                    )
                      t: {
                        e(1 == c.$a), (n = kt());
                        e: for (;;) {
                          if (null == n) {
                            n = 0;
                            break t;
                          }
                          if (
                            (e(null != c),
                            (c.mc = n),
                            (n.c = c.c),
                            (n.i = c.i),
                            (n.l = c.l),
                            (n.l.ma = c),
                            (n.l.width = c.c),
                            (n.l.height = c.i),
                            (n.a = 0),
                            g(n.m, d, b, m),
                            !St(c.c, c.i, 1, n, null))
                          )
                            break e;
                          if (
                            (1 == n.ab && 3 == n.gc[0].hc && wt(n.s)
                              ? ((c.ic = 1),
                                (d = n.c * n.i),
                                (n.Ta = null),
                                (n.Ua = 0),
                                (n.V = o(d)),
                                (n.Ba = 0),
                                null == n.V ? ((n.a = 1), (n = 0)) : (n = 1))
                              : ((c.ic = 0), (n = Tt(n, c.c))),
                            !n)
                          )
                            break e;
                          n = 1;
                          break t;
                        }
                        (c.mc = null), (n = 0);
                      }
                    else n = m >= c.c * c.i;
                    c = !n;
                  }
                  if (c) return null;
                  1 != t.ga.Lc ? (t.Ga = 0) : (a = l - r);
                }
                e(null != t.ga), e(r + a <= l);
                t: {
                  if (((n = (d = t.ga).c), (l = d.l.o), 0 == d.$a)) {
                    if (
                      ((b = t.rc),
                      (m = t.Vc),
                      (v = t.Fa),
                      (u = t.P + 1 + r * n),
                      (p = t.mb),
                      (h = t.nb + r * n),
                      e(u <= t.P + t.qc),
                      0 != d.Z)
                    )
                      for (e(null != mr[d.Z]), c = 0; c < a; ++c)
                        mr[d.Z](b, m, v, u, p, h, n),
                          (b = p),
                          (m = h),
                          (h += n),
                          (u += n);
                    else
                      for (c = 0; c < a; ++c)
                        i(p, h, v, u, n), (b = p), (m = h), (h += n), (u += n);
                    (t.rc = b), (t.Vc = m);
                  } else {
                    if (
                      (e(null != d.mc),
                      (n = r + a),
                      e(null != (c = d.mc)),
                      e(n <= c.i),
                      c.C >= n)
                    )
                      n = 1;
                    else if ((d.ic || gn(), d.ic)) {
                      (d = c.V), (b = c.Ba), (m = c.c);
                      var _ = c.i,
                        y =
                          ((v = 1),
                          (u = c.$ / m),
                          (p = c.$ % m),
                          (h = c.m),
                          (f = c.s),
                          c.$),
                        M = m * _,
                        O = m * n,
                        A = f.wc,
                        z = y < O ? yt(f, p, u) : null;
                      e(y <= M), e(n <= _), e(wt(f));
                      e: for (;;) {
                        for (; !h.h && y < O; ) {
                          if (
                            (p & A || (z = yt(f, p, u)),
                            e(null != z),
                            x(h),
                            256 > (_ = vt(z.G[0], z.H[0], h)))
                          )
                            (d[b + y] = _),
                              ++y,
                              ++p >= m &&
                                ((p = 0), ++u <= n && !(u % 16) && xt(c, u));
                          else {
                            if (!(280 > _)) {
                              v = 0;
                              break e;
                            }
                            _ = mt(_ - 256, h);
                            var C,
                              k = vt(z.G[4], z.H[4], h);
                            if (
                              (x(h),
                              !(y >= (k = gt(m, (k = mt(k, h)))) && M - y >= _))
                            ) {
                              v = 0;
                              break e;
                            }
                            for (C = 0; C < _; ++C)
                              d[b + y + C] = d[b + y + C - k];
                            for (y += _, p += _; p >= m; )
                              (p -= m), ++u <= n && !(u % 16) && xt(c, u);
                            y < O && p & A && (z = yt(f, p, u));
                          }
                          e(h.h == w(h));
                        }
                        xt(c, u > n ? n : u);
                        break e;
                      }
                      !v || (h.h && y < M)
                        ? ((v = 0), (c.a = h.h ? 5 : 3))
                        : (c.$ = y),
                        (n = v);
                    } else n = zt(c, c.V, c.Ba, c.c, c.i, n, Dt);
                    if (!n) {
                      a = 0;
                      break t;
                    }
                  }
                  r + a >= l && (t.Cc = 1), (a = 1);
                }
                if (!a) return null;
                if (
                  t.Cc &&
                  (null != (a = t.ga) && (a.mc = null), (t.ga = null), 0 < t.Ga)
                )
                  return alert("todo:WebPDequantizeLevels"), null;
              }
              return t.nb + r * s;
            }
            function hn(t, e, n, i, r, o) {
              for (; 0 < r--; ) {
                var a,
                  s = t,
                  l = e + (n ? 1 : 0),
                  c = t,
                  d = e + (n ? 0 : 3);
                for (a = 0; a < i; ++a) {
                  var u = c[d + 4 * a];
                  255 != u &&
                    ((u *= 32897),
                    (s[l + 4 * a + 0] = (s[l + 4 * a + 0] * u) >> 23),
                    (s[l + 4 * a + 1] = (s[l + 4 * a + 1] * u) >> 23),
                    (s[l + 4 * a + 2] = (s[l + 4 * a + 2] * u) >> 23));
                }
                e += o;
              }
            }
            function fn(t, e, n, i, r) {
              for (; 0 < i--; ) {
                var o;
                for (o = 0; o < n; ++o) {
                  var a = t[e + 2 * o + 0],
                    s = 15 & (c = t[e + 2 * o + 1]),
                    l = 4369 * s,
                    c = (((240 & c) | (c >> 4)) * l) >> 16;
                  (t[e + 2 * o + 0] =
                    (((((240 & a) | (a >> 4)) * l) >> 16) & 240) |
                    ((((((15 & a) | (a << 4)) * l) >> 16) >> 4) & 15)),
                    (t[e + 2 * o + 1] = (240 & c) | s);
                }
                e += r;
              }
            }
            function bn(t, e, n, i, r, o, a, s) {
              var l,
                c,
                d = 255;
              for (c = 0; c < r; ++c) {
                for (l = 0; l < i; ++l) {
                  var u = t[e + l];
                  (o[a + 4 * l] = u), (d &= u);
                }
                (e += n), (a += s);
              }
              return 255 != d;
            }
            function mn(t, e, n, i, r) {
              var o;
              for (o = 0; o < r; ++o) n[i + o] = t[e + o] >> 8;
            }
            function gn() {
              (wi = hn), (Ai = fn), (xi = bn), (zi = mn);
            }
            function vn(n, i, r) {
              t[n] = function (
                t,
                n,
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
                _
              ) {
                var y,
                  M = (_ - 1) >> 1,
                  O = s[l + 0] | (c[d + 0] << 16),
                  w = u[p + 0] | (h[f + 0] << 16);
                e(null != t);
                var A = (3 * O + w + 131074) >> 2;
                for (
                  i(t[n + 0], 255 & A, A >> 16, b, m),
                    null != o &&
                      ((A = (3 * w + O + 131074) >> 2),
                      i(o[a + 0], 255 & A, A >> 16, g, v)),
                    y = 1;
                  y <= M;
                  ++y
                ) {
                  var x = s[l + y] | (c[d + y] << 16),
                    z = u[p + y] | (h[f + y] << 16),
                    C = O + x + w + z + 524296,
                    k = (C + 2 * (x + w)) >> 3;
                  (A = (k + O) >> 1),
                    (O = ((C = (C + 2 * (O + z)) >> 3) + x) >> 1),
                    i(
                      t[n + 2 * y - 1],
                      255 & A,
                      A >> 16,
                      b,
                      m + (2 * y - 1) * r
                    ),
                    i(
                      t[n + 2 * y - 0],
                      255 & O,
                      O >> 16,
                      b,
                      m + (2 * y - 0) * r
                    ),
                    null != o &&
                      ((A = (C + w) >> 1),
                      (O = (k + z) >> 1),
                      i(
                        o[a + 2 * y - 1],
                        255 & A,
                        A >> 16,
                        g,
                        v + (2 * y - 1) * r
                      ),
                      i(
                        o[a + 2 * y + 0],
                        255 & O,
                        O >> 16,
                        g,
                        v + (2 * y + 0) * r
                      )),
                    (O = x),
                    (w = z);
                }
                1 & _ ||
                  ((A = (3 * O + w + 131074) >> 2),
                  i(t[n + _ - 1], 255 & A, A >> 16, b, m + (_ - 1) * r),
                  null != o &&
                    ((A = (3 * w + O + 131074) >> 2),
                    i(o[a + _ - 1], 255 & A, A >> 16, g, v + (_ - 1) * r)));
              };
            }
            function _n() {
              (gr[Pi] = vr),
                (gr[Ri] = yr),
                (gr[Ii] = _r),
                (gr[Wi] = Mr),
                (gr[Ni] = Or),
                (gr[Bi] = wr),
                (gr[Fi] = Ar),
                (gr[$i] = yr),
                (gr[Hi] = Mr),
                (gr[Yi] = Or),
                (gr[Ui] = wr);
            }
            function yn(t) {
              return t & ~Tr ? (0 > t ? 0 : 255) : t >> Sr;
            }
            function Mn(t, e) {
              return yn(((19077 * t) >> 8) + ((26149 * e) >> 8) - 14234);
            }
            function On(t, e, n) {
              return yn(
                ((19077 * t) >> 8) -
                  ((6419 * e) >> 8) -
                  ((13320 * n) >> 8) +
                  8708
              );
            }
            function wn(t, e) {
              return yn(((19077 * t) >> 8) + ((33050 * e) >> 8) - 17685);
            }
            function An(t, e, n, i, r) {
              (i[r + 0] = Mn(t, n)),
                (i[r + 1] = On(t, e, n)),
                (i[r + 2] = wn(t, e));
            }
            function xn(t, e, n, i, r) {
              (i[r + 0] = wn(t, e)),
                (i[r + 1] = On(t, e, n)),
                (i[r + 2] = Mn(t, n));
            }
            function zn(t, e, n, i, r) {
              var o = On(t, e, n);
              (e = ((o << 3) & 224) | (wn(t, e) >> 3)),
                (i[r + 0] = (248 & Mn(t, n)) | (o >> 5)),
                (i[r + 1] = e);
            }
            function Cn(t, e, n, i, r) {
              var o = (240 & wn(t, e)) | 15;
              (i[r + 0] = (240 & Mn(t, n)) | (On(t, e, n) >> 4)),
                (i[r + 1] = o);
            }
            function kn(t, e, n, i, r) {
              (i[r + 0] = 255), An(t, e, n, i, r + 1);
            }
            function Sn(t, e, n, i, r) {
              xn(t, e, n, i, r), (i[r + 3] = 255);
            }
            function Tn(t, e, n, i, r) {
              An(t, e, n, i, r), (i[r + 3] = 255);
            }
            function Yt(t, e) {
              return 0 > t ? 0 : t > e ? e : t;
            }
            function Dn(e, n, i) {
              t[e] = function (t, e, r, o, a, s, l, c, d) {
                for (var u = c + (-2 & d) * i; c != u; )
                  n(t[e + 0], r[o + 0], a[s + 0], l, c),
                    n(t[e + 1], r[o + 0], a[s + 0], l, c + i),
                    (e += 2),
                    ++o,
                    ++s,
                    (c += 2 * i);
                1 & d && n(t[e + 0], r[o + 0], a[s + 0], l, c);
              };
            }
            function Ln(t, e, n) {
              return 0 == n ? (0 == t ? (0 == e ? 6 : 5) : 0 == e ? 4 : 0) : n;
            }
            function qn(t, e, n, i, r) {
              switch (t >>> 30) {
                case 3:
                  ai(e, n, i, r, 0);
                  break;
                case 2:
                  si(e, n, i, r);
                  break;
                case 1:
                  ci(e, n, i, r);
              }
            }
            function En(t, e) {
              var n,
                o,
                a = e.M,
                s = e.Nb,
                l = t.oc,
                c = t.pc + 40,
                d = t.oc,
                u = t.pc + 584,
                p = t.oc,
                h = t.pc + 600;
              for (n = 0; 16 > n; ++n) l[c + 32 * n - 1] = 129;
              for (n = 0; 8 > n; ++n)
                (d[u + 32 * n - 1] = 129), (p[h + 32 * n - 1] = 129);
              for (
                0 < a
                  ? (l[c - 1 - 32] = d[u - 1 - 32] = p[h - 1 - 32] = 129)
                  : (r(l, c - 32 - 1, 127, 21),
                    r(d, u - 32 - 1, 127, 9),
                    r(p, h - 32 - 1, 127, 9)),
                  o = 0;
                o < t.za;
                ++o
              ) {
                var f = e.ya[e.aa + o];
                if (0 < o) {
                  for (n = -1; 16 > n; ++n)
                    i(l, c + 32 * n - 4, l, c + 32 * n + 12, 4);
                  for (n = -1; 8 > n; ++n)
                    i(d, u + 32 * n - 4, d, u + 32 * n + 4, 4),
                      i(p, h + 32 * n - 4, p, h + 32 * n + 4, 4);
                }
                var b = t.Gd,
                  m = t.Hd + o,
                  g = f.ad,
                  v = f.Hc;
                if (
                  (0 < a &&
                    (i(l, c - 32, b[m].y, 0, 16),
                    i(d, u - 32, b[m].f, 0, 8),
                    i(p, h - 32, b[m].ea, 0, 8)),
                  f.Za)
                ) {
                  var _ = l,
                    y = c - 32 + 16;
                  for (
                    0 < a &&
                      (o >= t.za - 1
                        ? r(_, y, b[m].y[15], 4)
                        : i(_, y, b[m + 1].y, 0, 4)),
                      n = 0;
                    4 > n;
                    n++
                  )
                    _[y + 128 + n] =
                      _[y + 256 + n] =
                      _[y + 384 + n] =
                        _[y + 0 + n];
                  for (n = 0; 16 > n; ++n, v <<= 2)
                    (_ = l),
                      (y = c + Ir[n]),
                      pr[f.Ob[n]](_, y),
                      qn(v, g, 16 * +n, _, y);
                } else if (((_ = Ln(o, a, f.Ob[0])), ur[_](l, c), 0 != v))
                  for (n = 0; 16 > n; ++n, v <<= 2)
                    qn(v, g, 16 * +n, l, c + Ir[n]);
                for (
                  n = f.Gc,
                    _ = Ln(o, a, f.Dd),
                    hr[_](d, u),
                    hr[_](p, h),
                    v = g,
                    _ = d,
                    y = u,
                    255 & (f = n >> 0) &&
                      (170 & f ? li(v, 256, _, y) : di(v, 256, _, y)),
                    f = p,
                    v = h,
                    255 & (n >>= 8) &&
                      (170 & n ? li(g, 320, f, v) : di(g, 320, f, v)),
                    a < t.Ub - 1 &&
                      (i(b[m].y, 0, l, c + 480, 16),
                      i(b[m].f, 0, d, u + 224, 8),
                      i(b[m].ea, 0, p, h + 224, 8)),
                    n = 8 * s * t.B,
                    b = t.sa,
                    m = t.ta + 16 * o + 16 * s * t.R,
                    g = t.qa,
                    f = t.ra + 8 * o + n,
                    v = t.Ha,
                    _ = t.Ia + 8 * o + n,
                    n = 0;
                  16 > n;
                  ++n
                )
                  i(b, m + n * t.R, l, c + 32 * n, 16);
                for (n = 0; 8 > n; ++n)
                  i(g, f + n * t.B, d, u + 32 * n, 8),
                    i(v, _ + n * t.B, p, h + 32 * n, 8);
              }
            }
            function jn(t, i, r, o, a, s, l, c, d) {
              var u = [0],
                p = [0],
                h = 0,
                f = null != d ? d.kd : 0,
                b = null != d ? d : new rn();
              if (null == t || 12 > r) return 7;
              (b.data = t),
                (b.w = i),
                (b.ha = r),
                (i = [i]),
                (r = [r]),
                (b.gb = [b.gb]);
              t: {
                var m = i,
                  v = r,
                  _ = b.gb;
                if (
                  (e(null != t),
                  e(null != v),
                  e(null != _),
                  (_[0] = 0),
                  12 <= v[0] && !n(t, m[0], "RIFF"))
                ) {
                  if (n(t, m[0] + 8, "WEBP")) {
                    _ = 3;
                    break t;
                  }
                  var y = L(t, m[0] + 4);
                  if (12 > y || 4294967286 < y) {
                    _ = 3;
                    break t;
                  }
                  if (f && y > v[0] - 8) {
                    _ = 7;
                    break t;
                  }
                  (_[0] = y), (m[0] += 12), (v[0] -= 12);
                }
                _ = 0;
              }
              if (0 != _) return _;
              for (y = 0 < b.gb[0], r = r[0]; ; ) {
                t: {
                  var O = t;
                  (v = i), (_ = r);
                  var w = u,
                    A = p,
                    x = (m = [0]);
                  if ((((k = h = [h])[0] = 0), 8 > _[0])) _ = 7;
                  else {
                    if (!n(O, v[0], "VP8X")) {
                      if (10 != L(O, v[0] + 4)) {
                        _ = 3;
                        break t;
                      }
                      if (18 > _[0]) {
                        _ = 7;
                        break t;
                      }
                      var z = L(O, v[0] + 8),
                        C = 1 + D(O, v[0] + 12);
                      if (2147483648 <= C * (O = 1 + D(O, v[0] + 15))) {
                        _ = 3;
                        break t;
                      }
                      null != x && (x[0] = z),
                        null != w && (w[0] = C),
                        null != A && (A[0] = O),
                        (v[0] += 18),
                        (_[0] -= 18),
                        (k[0] = 1);
                    }
                    _ = 0;
                  }
                }
                if (((h = h[0]), (m = m[0]), 0 != _)) return _;
                if (((v = !!(2 & m)), !y && h)) return 3;
                if (
                  (null != s && (s[0] = !!(16 & m)),
                  null != l && (l[0] = v),
                  null != c && (c[0] = 0),
                  (l = u[0]),
                  (m = p[0]),
                  h && v && null == d)
                ) {
                  _ = 0;
                  break;
                }
                if (4 > r) {
                  _ = 7;
                  break;
                }
                if ((y && h) || (!y && !h && !n(t, i[0], "ALPH"))) {
                  (r = [r]), (b.na = [b.na]), (b.P = [b.P]), (b.Sa = [b.Sa]);
                  t: {
                    (z = t), (_ = i), (y = r);
                    var k = b.gb;
                    (w = b.na),
                      (A = b.P),
                      (x = b.Sa),
                      (C = 22),
                      e(null != z),
                      e(null != y),
                      (O = _[0]);
                    var S = y[0];
                    for (
                      e(null != w),
                        e(null != x),
                        w[0] = null,
                        A[0] = null,
                        x[0] = 0;
                      ;

                    ) {
                      if (((_[0] = O), (y[0] = S), 8 > S)) {
                        _ = 7;
                        break t;
                      }
                      var T = L(z, O + 4);
                      if (4294967286 < T) {
                        _ = 3;
                        break t;
                      }
                      var q = (8 + T + 1) & -2;
                      if (((C += q), 0 < k && C > k)) {
                        _ = 3;
                        break t;
                      }
                      if (!n(z, O, "VP8 ") || !n(z, O, "VP8L")) {
                        _ = 0;
                        break t;
                      }
                      if (S[0] < q) {
                        _ = 7;
                        break t;
                      }
                      n(z, O, "ALPH") ||
                        ((w[0] = z), (A[0] = O + 8), (x[0] = T)),
                        (O += q),
                        (S -= q);
                    }
                  }
                  if (
                    ((r = r[0]),
                    (b.na = b.na[0]),
                    (b.P = b.P[0]),
                    (b.Sa = b.Sa[0]),
                    0 != _)
                  )
                    break;
                }
                (r = [r]), (b.Ja = [b.Ja]), (b.xa = [b.xa]);
                t: if (
                  ((k = t),
                  (_ = i),
                  (y = r),
                  (w = b.gb[0]),
                  (A = b.Ja),
                  (x = b.xa),
                  (z = _[0]),
                  (O = !n(k, z, "VP8 ")),
                  (C = !n(k, z, "VP8L")),
                  e(null != k),
                  e(null != y),
                  e(null != A),
                  e(null != x),
                  8 > y[0])
                )
                  _ = 7;
                else {
                  if (O || C) {
                    if (((k = L(k, z + 4)), 12 <= w && k > w - 12)) {
                      _ = 3;
                      break t;
                    }
                    if (f && k > y[0] - 8) {
                      _ = 7;
                      break t;
                    }
                    (A[0] = k), (_[0] += 8), (y[0] -= 8), (x[0] = C);
                  } else
                    (x[0] = 5 <= y[0] && 47 == k[z + 0] && !(k[z + 4] >> 5)),
                      (A[0] = y[0]);
                  _ = 0;
                }
                if (
                  ((r = r[0]),
                  (b.Ja = b.Ja[0]),
                  (b.xa = b.xa[0]),
                  (i = i[0]),
                  0 != _)
                )
                  break;
                if (4294967286 < b.Ja) return 3;
                if (
                  (null == c || v || (c[0] = b.xa ? 2 : 1),
                  (l = [l]),
                  (m = [m]),
                  b.xa)
                ) {
                  if (5 > r) {
                    _ = 7;
                    break;
                  }
                  (c = l),
                    (f = m),
                    (v = s),
                    null == t || 5 > r
                      ? (t = 0)
                      : 5 <= r && 47 == t[i + 0] && !(t[i + 4] >> 5)
                      ? ((y = [0]),
                        (k = [0]),
                        (w = [0]),
                        g((A = new M()), t, i, r),
                        bt(A, y, k, w)
                          ? (null != c && (c[0] = y[0]),
                            null != f && (f[0] = k[0]),
                            null != v && (v[0] = w[0]),
                            (t = 1))
                          : (t = 0))
                      : (t = 0);
                } else {
                  if (10 > r) {
                    _ = 7;
                    break;
                  }
                  (c = m),
                    null == t || 10 > r || !Gt(t, i + 3, r - 3)
                      ? (t = 0)
                      : ((f = t[i + 0] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                        (v = 16383 & ((t[i + 7] << 8) | t[i + 6])),
                        (t = 16383 & ((t[i + 9] << 8) | t[i + 8])),
                        1 & f ||
                        3 < ((f >> 1) & 7) ||
                        !((f >> 4) & 1) ||
                        f >> 5 >= b.Ja ||
                        !v ||
                        !t
                          ? (t = 0)
                          : (l && (l[0] = v), c && (c[0] = t), (t = 1)));
                }
                if (!t) return 3;
                if (((l = l[0]), (m = m[0]), h && (u[0] != l || p[0] != m)))
                  return 3;
                null != d &&
                  ((d[0] = b),
                  (d.offset = i - d.w),
                  e(4294967286 > i - d.w),
                  e(d.offset == d.ha - r));
                break;
              }
              return 0 == _ || (7 == _ && h && null == d)
                ? (null != s && (s[0] |= null != b.na && 0 < b.na.length),
                  null != o && (o[0] = l),
                  null != a && (a[0] = m),
                  0)
                : _;
            }
            function Pn(t, e, n) {
              var i = e.width,
                r = e.height,
                o = 0,
                a = 0,
                s = i,
                l = r;
              if (
                ((e.Da = null != t && 0 < t.Da),
                e.Da &&
                  ((s = t.cd),
                  (l = t.bd),
                  (o = t.v),
                  (a = t.j),
                  11 > n || ((o &= -2), (a &= -2)),
                  0 > o || 0 > a || 0 >= s || 0 >= l || o + s > i || a + l > r))
              )
                return 0;
              if (
                ((e.v = o),
                (e.j = a),
                (e.va = o + s),
                (e.o = a + l),
                (e.U = s),
                (e.T = l),
                (e.da = null != t && 0 < t.da),
                e.da)
              ) {
                if (!P(s, l, (n = [t.ib]), (o = [t.hb]))) return 0;
                (e.ib = n[0]), (e.hb = o[0]);
              }
              return (
                (e.ob = null != t && t.ob),
                (e.Kb = null == t || !t.Sd),
                e.da &&
                  ((e.ob = e.ib < (3 * i) / 4 && e.hb < (3 * r) / 4),
                  (e.Kb = 0)),
                1
              );
            }
            function Rn(t) {
              if (null == t) return 2;
              if (11 > t.S) {
                var e = t.f.RGBA;
                (e.fb += (t.height - 1) * e.A), (e.A = -e.A);
              } else
                (e = t.f.kb),
                  (t = t.height),
                  (e.O += (t - 1) * e.fa),
                  (e.fa = -e.fa),
                  (e.N += ((t - 1) >> 1) * e.Ab),
                  (e.Ab = -e.Ab),
                  (e.W += ((t - 1) >> 1) * e.Db),
                  (e.Db = -e.Db),
                  null != e.F && ((e.J += (t - 1) * e.lb), (e.lb = -e.lb));
              return 0;
            }
            function In(t, e, n, i) {
              if (null == i || 0 >= t || 0 >= e) return 2;
              if (null != n) {
                if (n.Da) {
                  var r = n.cd,
                    a = n.bd,
                    s = -2 & n.v,
                    l = -2 & n.j;
                  if (
                    0 > s ||
                    0 > l ||
                    0 >= r ||
                    0 >= a ||
                    s + r > t ||
                    l + a > e
                  )
                    return 2;
                  (t = r), (e = a);
                }
                if (n.da) {
                  if (!P(t, e, (r = [n.ib]), (a = [n.hb]))) return 2;
                  (t = r[0]), (e = a[0]);
                }
              }
              (i.width = t), (i.height = e);
              t: {
                var c = i.width,
                  d = i.height;
                if (((t = i.S), 0 >= c || 0 >= d || !(t >= Pi && 13 > t)))
                  t = 2;
                else {
                  if (0 >= i.Rd && null == i.sd) {
                    s = a = r = e = 0;
                    var u = (l = c * Fr[t]) * d;
                    if (
                      (11 > t ||
                        ((a = ((d + 1) / 2) * (e = (c + 1) / 2)),
                        12 == t && (s = (r = c) * d)),
                      null == (d = o(u + 2 * a + s)))
                    ) {
                      t = 1;
                      break t;
                    }
                    (i.sd = d),
                      11 > t
                        ? (((c = i.f.RGBA).eb = d),
                          (c.fb = 0),
                          (c.A = l),
                          (c.size = u))
                        : (((c = i.f.kb).y = d),
                          (c.O = 0),
                          (c.fa = l),
                          (c.Fd = u),
                          (c.f = d),
                          (c.N = 0 + u),
                          (c.Ab = e),
                          (c.Cd = a),
                          (c.ea = d),
                          (c.W = 0 + u + a),
                          (c.Db = e),
                          (c.Ed = a),
                          12 == t && ((c.F = d), (c.J = 0 + u + 2 * a)),
                          (c.Tc = s),
                          (c.lb = r));
                  }
                  if (
                    ((e = 1),
                    (r = i.S),
                    (a = i.width),
                    (s = i.height),
                    r >= Pi && 13 > r)
                  )
                    if (11 > r)
                      (t = i.f.RGBA),
                        (e &= (l = Math.abs(t.A)) * (s - 1) + a <= t.size),
                        (e &= l >= a * Fr[r]),
                        (e &= null != t.eb);
                    else {
                      (t = i.f.kb),
                        (l = (a + 1) / 2),
                        (u = (s + 1) / 2),
                        (c = Math.abs(t.fa)),
                        (d = Math.abs(t.Ab));
                      var p = Math.abs(t.Db),
                        h = Math.abs(t.lb),
                        f = h * (s - 1) + a;
                      (e &= c * (s - 1) + a <= t.Fd),
                        (e &= d * (u - 1) + l <= t.Cd),
                        (e =
                          (e &= p * (u - 1) + l <= t.Ed) &
                          (c >= a) &
                          (d >= l) &
                          (p >= l)),
                        (e &= null != t.y),
                        (e &= null != t.f),
                        (e &= null != t.ea),
                        12 == r &&
                          ((e &= h >= a), (e &= f <= t.Tc), (e &= null != t.F));
                    }
                  else e = 0;
                  t = e ? 0 : 2;
                }
              }
              return 0 != t || (null != n && n.fd && (t = Rn(i))), t;
            }
            var Wn = 64,
              Nn = [
                0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191,
                16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151,
                4194303, 8388607, 16777215,
              ],
              Bn = 24,
              Fn = 32,
              $n = 8,
              Hn = [
                0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7,
              ];
            W("Predictor0", "PredictorAdd0"),
              (t.Predictor0 = function () {
                return 4278190080;
              }),
              (t.Predictor1 = function (t) {
                return t;
              }),
              (t.Predictor2 = function (t, e, n) {
                return e[n + 0];
              }),
              (t.Predictor3 = function (t, e, n) {
                return e[n + 1];
              }),
              (t.Predictor4 = function (t, e, n) {
                return e[n - 1];
              }),
              (t.Predictor5 = function (t, e, n) {
                return B(B(t, e[n + 1]), e[n + 0]);
              }),
              (t.Predictor6 = function (t, e, n) {
                return B(t, e[n - 1]);
              }),
              (t.Predictor7 = function (t, e, n) {
                return B(t, e[n + 0]);
              }),
              (t.Predictor8 = function (t, e, n) {
                return B(e[n - 1], e[n + 0]);
              }),
              (t.Predictor9 = function (t, e, n) {
                return B(e[n + 0], e[n + 1]);
              }),
              (t.Predictor10 = function (t, e, n) {
                return B(B(t, e[n - 1]), B(e[n + 0], e[n + 1]));
              }),
              (t.Predictor11 = function (t, e, n) {
                var i = e[n + 0];
                return 0 >=
                  H(
                    (i >> 24) & 255,
                    (t >> 24) & 255,
                    ((e = e[n - 1]) >> 24) & 255
                  ) +
                    H((i >> 16) & 255, (t >> 16) & 255, (e >> 16) & 255) +
                    H((i >> 8) & 255, (t >> 8) & 255, (e >> 8) & 255) +
                    H(255 & i, 255 & t, 255 & e)
                  ? i
                  : t;
              }),
              (t.Predictor12 = function (t, e, n) {
                var i = e[n + 0];
                return (
                  ((F(
                    ((t >> 24) & 255) +
                      ((i >> 24) & 255) -
                      (((e = e[n - 1]) >> 24) & 255)
                  ) <<
                    24) |
                    (F(
                      ((t >> 16) & 255) + ((i >> 16) & 255) - ((e >> 16) & 255)
                    ) <<
                      16) |
                    (F(
                      ((t >> 8) & 255) + ((i >> 8) & 255) - ((e >> 8) & 255)
                    ) <<
                      8) |
                    F((255 & t) + (255 & i) - (255 & e))) >>>
                  0
                );
              }),
              (t.Predictor13 = function (t, e, n) {
                var i = e[n - 1];
                return (
                  (($(((t = B(t, e[n + 0])) >> 24) & 255, (i >> 24) & 255) <<
                    24) |
                    ($((t >> 16) & 255, (i >> 16) & 255) << 16) |
                    ($((t >> 8) & 255, (i >> 8) & 255) << 8) |
                    $((t >> 0) & 255, (i >> 0) & 255)) >>>
                  0
                );
              });
            var Yn = t.PredictorAdd0;
            (t.PredictorAdd1 = Y),
              W("Predictor2", "PredictorAdd2"),
              W("Predictor3", "PredictorAdd3"),
              W("Predictor4", "PredictorAdd4"),
              W("Predictor5", "PredictorAdd5"),
              W("Predictor6", "PredictorAdd6"),
              W("Predictor7", "PredictorAdd7"),
              W("Predictor8", "PredictorAdd8"),
              W("Predictor9", "PredictorAdd9"),
              W("Predictor10", "PredictorAdd10"),
              W("Predictor11", "PredictorAdd11"),
              W("Predictor12", "PredictorAdd12"),
              W("Predictor13", "PredictorAdd13");
            var Un = t.PredictorAdd2;
            G(
              "ColorIndexInverseTransform",
              "MapARGB",
              "32b",
              function (t) {
                return (t >> 8) & 255;
              },
              function (t) {
                return t;
              }
            ),
              G(
                "VP8LColorIndexInverseTransformAlpha",
                "MapAlpha",
                "8b",
                function (t) {
                  return t;
                },
                function (t) {
                  return (t >> 8) & 255;
                }
              );
            var Xn,
              Vn = t.ColorIndexInverseTransform,
              Gn = t.MapARGB,
              Kn = t.VP8LColorIndexInverseTransformAlpha,
              Zn = t.MapAlpha,
              Jn = (t.VP8LPredictorsAdd = []);
            (Jn.length = 16),
              ((t.VP8LPredictors = []).length = 16),
              ((t.VP8LPredictorsAdd_C = []).length = 16),
              ((t.VP8LPredictors_C = []).length = 16);
            var Qn,
              ti,
              ei,
              ni,
              ii,
              ri,
              oi,
              ai,
              si,
              li,
              ci,
              di,
              ui,
              pi,
              hi,
              fi,
              bi,
              mi,
              gi,
              vi,
              _i,
              yi,
              Mi,
              Oi,
              wi,
              Ai,
              xi,
              zi,
              Ci = o(511),
              ki = o(2041),
              Si = o(225),
              Ti = o(767),
              Di = 0,
              Li = ki,
              qi = Si,
              Ei = Ti,
              ji = Ci,
              Pi = 0,
              Ri = 1,
              Ii = 2,
              Wi = 3,
              Ni = 4,
              Bi = 5,
              Fi = 6,
              $i = 7,
              Hi = 8,
              Yi = 9,
              Ui = 10,
              Xi = [2, 3, 7],
              Vi = [3, 3, 11],
              Gi = [280, 256, 256, 256, 40],
              Ki = [0, 1, 1, 1, 0],
              Zi = [
                17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                15,
              ],
              Ji = [
                24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21,
                27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36,
                44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68,
                76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46,
                84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17,
                31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99,
                109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125,
                81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112,
              ],
              Qi = [
                2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468,
                3980, 5004,
              ],
              tr = 8,
              er = [
                4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18,
                19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29,
                30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44,
                45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
                76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91,
                93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114,
                116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143,
                145, 148, 151, 154, 157,
              ],
              nr = [
                4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
                53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
                80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108,
                110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143,
                146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185,
                189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239,
                245, 249, 254, 259, 264, 269, 274, 279, 284,
              ],
              ir = null,
              rr = [
                [173, 148, 140, 0],
                [176, 155, 140, 135, 0],
                [180, 157, 141, 134, 130, 0],
                [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0],
              ],
              or = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
              ar = [
                -0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9,
              ],
              sr = [
                [
                  [
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                  [
                    [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
                    [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
                    [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128],
                  ],
                  [
                    [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
                    [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
                    [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128],
                  ],
                  [
                    [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
                    [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
                    [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
                    [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
                    [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128],
                  ],
                  [
                    [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
                    [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
                    [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
                    [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
                    [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                ],
                [
                  [
                    [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
                    [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
                    [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128],
                  ],
                  [
                    [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
                    [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
                    [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128],
                  ],
                  [
                    [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
                    [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
                    [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128],
                  ],
                  [
                    [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
                    [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
                    [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128],
                  ],
                  [
                    [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
                    [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
                    [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128],
                  ],
                  [
                    [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
                    [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
                    [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128],
                  ],
                  [
                    [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
                    [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
                    [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128],
                  ],
                  [
                    [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
                    [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                    [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128],
                  ],
                ],
                [
                  [
                    [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
                    [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
                    [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128],
                  ],
                  [
                    [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
                    [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
                    [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128],
                  ],
                  [
                    [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
                    [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
                    [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128],
                  ],
                  [
                    [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
                    [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
                    [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                    [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
                    [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                  [
                    [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
                    [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
                    [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                  [
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                    [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                ],
                [
                  [
                    [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
                    [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
                    [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128],
                  ],
                  [
                    [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
                    [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
                    [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128],
                  ],
                  [
                    [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
                    [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
                    [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128],
                  ],
                  [
                    [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
                    [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
                    [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128],
                  ],
                  [
                    [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
                    [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
                    [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128],
                  ],
                  [
                    [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
                    [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
                    [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128],
                  ],
                  [
                    [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
                    [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
                    [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128],
                  ],
                  [
                    [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                    [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                  ],
                ],
              ],
              lr = [
                [
                  [231, 120, 48, 89, 115, 113, 120, 152, 112],
                  [152, 179, 64, 126, 170, 118, 46, 70, 95],
                  [175, 69, 143, 80, 85, 82, 72, 155, 103],
                  [56, 58, 10, 171, 218, 189, 17, 13, 152],
                  [114, 26, 17, 163, 44, 195, 21, 10, 173],
                  [121, 24, 80, 195, 26, 62, 44, 64, 85],
                  [144, 71, 10, 38, 171, 213, 144, 34, 26],
                  [170, 46, 55, 19, 136, 160, 33, 206, 71],
                  [63, 20, 8, 114, 114, 208, 12, 9, 226],
                  [81, 40, 11, 96, 182, 84, 29, 16, 36],
                ],
                [
                  [134, 183, 89, 137, 98, 101, 106, 165, 148],
                  [72, 187, 100, 130, 157, 111, 32, 75, 80],
                  [66, 102, 167, 99, 74, 62, 40, 234, 128],
                  [41, 53, 9, 178, 241, 141, 26, 8, 107],
                  [74, 43, 26, 146, 73, 166, 49, 23, 157],
                  [65, 38, 105, 160, 51, 52, 31, 115, 128],
                  [104, 79, 12, 27, 217, 255, 87, 17, 7],
                  [87, 68, 71, 44, 114, 51, 15, 186, 23],
                  [47, 41, 14, 110, 182, 183, 21, 17, 194],
                  [66, 45, 25, 102, 197, 189, 23, 18, 22],
                ],
                [
                  [88, 88, 147, 150, 42, 46, 45, 196, 205],
                  [43, 97, 183, 117, 85, 38, 35, 179, 61],
                  [39, 53, 200, 87, 26, 21, 43, 232, 171],
                  [56, 34, 51, 104, 114, 102, 29, 93, 77],
                  [39, 28, 85, 171, 58, 165, 90, 98, 64],
                  [34, 22, 116, 206, 23, 34, 43, 166, 73],
                  [107, 54, 32, 26, 51, 1, 81, 43, 31],
                  [68, 25, 106, 22, 64, 171, 36, 225, 114],
                  [34, 19, 21, 102, 132, 188, 16, 76, 124],
                  [62, 18, 78, 95, 85, 57, 50, 48, 51],
                ],
                [
                  [193, 101, 35, 159, 215, 111, 89, 46, 111],
                  [60, 148, 31, 172, 219, 228, 21, 18, 111],
                  [112, 113, 77, 85, 179, 255, 38, 120, 114],
                  [40, 42, 1, 196, 245, 209, 10, 25, 109],
                  [88, 43, 29, 140, 166, 213, 37, 43, 154],
                  [61, 63, 30, 155, 67, 45, 68, 1, 209],
                  [100, 80, 8, 43, 154, 1, 51, 26, 71],
                  [142, 78, 78, 16, 255, 128, 34, 197, 171],
                  [41, 40, 5, 102, 211, 183, 4, 1, 221],
                  [51, 50, 17, 168, 209, 192, 23, 25, 82],
                ],
                [
                  [138, 31, 36, 171, 27, 166, 38, 44, 229],
                  [67, 87, 58, 169, 82, 115, 26, 59, 179],
                  [63, 59, 90, 180, 59, 166, 93, 73, 154],
                  [40, 40, 21, 116, 143, 209, 34, 39, 175],
                  [47, 15, 16, 183, 34, 223, 49, 45, 183],
                  [46, 17, 33, 183, 6, 98, 15, 32, 183],
                  [57, 46, 22, 24, 128, 1, 54, 17, 37],
                  [65, 32, 73, 115, 28, 128, 23, 128, 205],
                  [40, 3, 9, 115, 51, 192, 18, 6, 223],
                  [87, 37, 9, 115, 59, 77, 64, 21, 47],
                ],
                [
                  [104, 55, 44, 218, 9, 54, 53, 130, 226],
                  [64, 90, 70, 205, 40, 41, 23, 26, 57],
                  [54, 57, 112, 184, 5, 41, 38, 166, 213],
                  [30, 34, 26, 133, 152, 116, 10, 32, 134],
                  [39, 19, 53, 221, 26, 114, 32, 73, 255],
                  [31, 9, 65, 234, 2, 15, 1, 118, 73],
                  [75, 32, 12, 51, 192, 255, 160, 43, 51],
                  [88, 31, 35, 67, 102, 85, 55, 186, 85],
                  [56, 21, 23, 111, 59, 205, 45, 37, 192],
                  [55, 38, 70, 124, 73, 102, 1, 34, 98],
                ],
                [
                  [125, 98, 42, 88, 104, 85, 117, 175, 82],
                  [95, 84, 53, 89, 128, 100, 113, 101, 45],
                  [75, 79, 123, 47, 51, 128, 81, 171, 1],
                  [57, 17, 5, 71, 102, 57, 53, 41, 49],
                  [38, 33, 13, 121, 57, 73, 26, 1, 85],
                  [41, 10, 67, 138, 77, 110, 90, 47, 114],
                  [115, 21, 2, 10, 102, 255, 166, 23, 6],
                  [101, 29, 16, 10, 85, 128, 101, 196, 26],
                  [57, 18, 10, 102, 102, 213, 34, 20, 43],
                  [117, 20, 15, 36, 163, 128, 68, 1, 26],
                ],
                [
                  [102, 61, 71, 37, 34, 53, 31, 243, 192],
                  [69, 60, 71, 38, 73, 119, 28, 222, 37],
                  [68, 45, 128, 34, 1, 47, 11, 245, 171],
                  [62, 17, 19, 70, 146, 85, 55, 62, 70],
                  [37, 43, 37, 154, 100, 163, 85, 160, 1],
                  [63, 9, 92, 136, 28, 64, 32, 201, 85],
                  [75, 15, 9, 9, 64, 255, 184, 119, 16],
                  [86, 6, 28, 5, 64, 255, 25, 248, 1],
                  [56, 8, 17, 132, 137, 255, 55, 116, 128],
                  [58, 15, 20, 82, 135, 57, 26, 121, 40],
                ],
                [
                  [164, 50, 31, 137, 154, 133, 25, 35, 218],
                  [51, 103, 44, 131, 131, 123, 31, 6, 158],
                  [86, 40, 64, 135, 148, 224, 45, 183, 128],
                  [22, 26, 17, 131, 240, 154, 14, 1, 209],
                  [45, 16, 21, 91, 64, 222, 7, 1, 197],
                  [56, 21, 39, 155, 60, 138, 23, 102, 213],
                  [83, 12, 13, 54, 192, 255, 68, 47, 28],
                  [85, 26, 85, 85, 128, 128, 32, 146, 171],
                  [18, 11, 7, 63, 144, 171, 4, 4, 246],
                  [35, 27, 10, 146, 174, 171, 12, 26, 128],
                ],
                [
                  [190, 80, 35, 99, 180, 80, 126, 54, 45],
                  [85, 126, 47, 87, 176, 51, 41, 20, 32],
                  [101, 75, 128, 139, 118, 146, 116, 128, 85],
                  [56, 41, 15, 176, 236, 85, 37, 9, 62],
                  [71, 30, 17, 119, 118, 255, 17, 18, 138],
                  [101, 38, 60, 138, 55, 70, 43, 26, 142],
                  [146, 36, 19, 30, 171, 255, 97, 27, 20],
                  [138, 45, 61, 62, 219, 1, 81, 188, 64],
                  [32, 41, 20, 117, 151, 142, 20, 21, 163],
                  [112, 19, 12, 61, 195, 128, 48, 4, 24],
                ],
              ],
              cr = [
                [
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                    [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                    [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
                    [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
                    [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                ],
                [
                  [
                    [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
                    [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255],
                  ],
                  [
                    [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                ],
                [
                  [
                    [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
                    [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
                    [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255],
                  ],
                  [
                    [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                ],
                [
                  [
                    [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
                    [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                    [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                    [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                  [
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                    [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                  ],
                ],
              ],
              dr = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
              ur = [],
              pr = [],
              hr = [],
              fr = 1,
              br = 2,
              mr = [],
              gr = [];
            vn("UpsampleRgbLinePair", An, 3),
              vn("UpsampleBgrLinePair", xn, 3),
              vn("UpsampleRgbaLinePair", Tn, 4),
              vn("UpsampleBgraLinePair", Sn, 4),
              vn("UpsampleArgbLinePair", kn, 4),
              vn("UpsampleRgba4444LinePair", Cn, 2),
              vn("UpsampleRgb565LinePair", zn, 2);
            var vr = t.UpsampleRgbLinePair,
              _r = t.UpsampleBgrLinePair,
              yr = t.UpsampleRgbaLinePair,
              Mr = t.UpsampleBgraLinePair,
              Or = t.UpsampleArgbLinePair,
              wr = t.UpsampleRgba4444LinePair,
              Ar = t.UpsampleRgb565LinePair,
              xr = 16,
              zr = 1 << (xr - 1),
              Cr = -227,
              kr = 482,
              Sr = 6,
              Tr = (256 << Sr) - 1,
              Dr = 0,
              Lr = o(256),
              qr = o(256),
              Er = o(256),
              jr = o(256),
              Pr = o(kr - Cr),
              Rr = o(kr - Cr);
            Dn("YuvToRgbRow", An, 3),
              Dn("YuvToBgrRow", xn, 3),
              Dn("YuvToRgbaRow", Tn, 4),
              Dn("YuvToBgraRow", Sn, 4),
              Dn("YuvToArgbRow", kn, 4),
              Dn("YuvToRgba4444Row", Cn, 2),
              Dn("YuvToRgb565Row", zn, 2);
            var Ir = [
                0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388,
                392, 396,
              ],
              Wr = [0, 2, 8],
              Nr = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
              Br = 1;
            this.WebPDecodeRGBA = function (t, n, i, r, o) {
              var a = Ri,
                s = new nn(),
                l = new at();
              (s.ba = l),
                (l.S = a),
                (l.width = [l.width]),
                (l.height = [l.height]);
              var c = l.width,
                d = l.height,
                u = new st();
              if (null == u || null == t) var p = 2;
              else
                e(null != u),
                  (p = jn(
                    t,
                    n,
                    i,
                    u.width,
                    u.height,
                    u.Pd,
                    u.Qd,
                    u.format,
                    null
                  ));
              if (
                (0 != p
                  ? (c = 0)
                  : (null != c && (c[0] = u.width[0]),
                    null != d && (d[0] = u.height[0]),
                    (c = 1)),
                c)
              ) {
                (l.width = l.width[0]),
                  (l.height = l.height[0]),
                  null != r && (r[0] = l.width),
                  null != o && (o[0] = l.height);
                t: {
                  if (
                    ((r = new Ut()),
                    ((o = new rn()).data = t),
                    (o.w = n),
                    (o.ha = i),
                    (o.kd = 1),
                    (n = [0]),
                    e(null != o),
                    (0 ==
                      (t = jn(
                        o.data,
                        o.w,
                        o.ha,
                        null,
                        null,
                        null,
                        n,
                        null,
                        o
                      )) ||
                      7 == t) &&
                      n[0] &&
                      (t = 4),
                    0 == (n = t))
                  ) {
                    if (
                      (e(null != s),
                      (r.data = o.data),
                      (r.w = o.w + o.offset),
                      (r.ha = o.ha - o.offset),
                      (r.put = ht),
                      (r.ac = pt),
                      (r.bc = ft),
                      (r.ma = s),
                      o.xa)
                    ) {
                      if (null == (t = kt())) {
                        s = 1;
                        break t;
                      }
                      if (
                        (function (t, n) {
                          var i = [0],
                            r = [0],
                            o = [0];
                          e: for (;;) {
                            if (null == t) return 0;
                            if (null == n) return (t.a = 2), 0;
                            if (
                              ((t.l = n),
                              (t.a = 0),
                              g(t.m, n.data, n.w, n.ha),
                              !bt(t.m, i, r, o))
                            ) {
                              t.a = 3;
                              break e;
                            }
                            if (
                              ((t.xb = br),
                              (n.width = i[0]),
                              (n.height = r[0]),
                              !St(i[0], r[0], 1, t, null))
                            )
                              break e;
                            return 1;
                          }
                          return e(0 != t.a), 0;
                        })(t, r)
                      ) {
                        if (
                          (r = 0 == (n = In(r.width, r.height, s.Oa, s.ba)))
                        ) {
                          e: {
                            r = t;
                            n: for (;;) {
                              if (null == r) {
                                r = 0;
                                break e;
                              }
                              if (
                                (e(null != r.s.yc),
                                e(null != r.s.Ya),
                                e(0 < r.s.Wb),
                                e(null != (i = r.l)),
                                e(null != (o = i.ma)),
                                0 != r.xb)
                              ) {
                                if (
                                  ((r.ca = o.ba),
                                  (r.tb = o.tb),
                                  e(null != r.ca),
                                  !Pn(o.Oa, i, Wi))
                                ) {
                                  r.a = 2;
                                  break n;
                                }
                                if (!Tt(r, i.width)) break n;
                                if (i.da) break n;
                                if (
                                  ((i.da || it(r.ca.S)) && gn(),
                                  11 > r.ca.S ||
                                    (alert("todo:WebPInitConvertARGBToYUV"),
                                    null != r.ca.f.kb.F && gn()),
                                  r.Pb &&
                                    0 < r.s.ua &&
                                    null == r.s.vb.X &&
                                    !q(r.s.vb, r.s.Wa.Xa))
                                ) {
                                  r.a = 1;
                                  break n;
                                }
                                r.xb = 0;
                              }
                              if (!zt(r, r.V, r.Ba, r.c, r.i, i.o, Ot)) break n;
                              (o.Dc = r.Ma), (r = 1);
                              break e;
                            }
                            e(0 != r.a), (r = 0);
                          }
                          r = !r;
                        }
                        r && (n = t.a);
                      } else n = t.a;
                    } else {
                      if (null == (t = new Xt())) {
                        s = 1;
                        break t;
                      }
                      if (
                        ((t.Fa = o.na), (t.P = o.P), (t.qc = o.Sa), Kt(t, r))
                      ) {
                        if (0 == (n = In(r.width, r.height, s.Oa, s.ba))) {
                          if (
                            ((t.Aa = 0),
                            (i = s.Oa),
                            e(null != (o = t)),
                            null != i)
                          ) {
                            if (
                              0 <
                              (c =
                                0 > (c = i.Md)
                                  ? 0
                                  : 100 < c
                                  ? 255
                                  : (255 * c) / 100)
                            ) {
                              for (d = u = 0; 4 > d; ++d)
                                12 > (p = o.pb[d]).lc &&
                                  (p.ia = (c * Nr[0 > p.lc ? 0 : p.lc]) >> 3),
                                  (u |= p.ia);
                              u && (alert("todo:VP8InitRandom"), (o.ia = 1));
                            }
                            (o.Ga = i.Id),
                              100 < o.Ga
                                ? (o.Ga = 100)
                                : 0 > o.Ga && (o.Ga = 0);
                          }
                          Qt(t, r) || (n = t.a);
                        }
                      } else n = t.a;
                    }
                    0 == n && null != s.Oa && s.Oa.fd && (n = Rn(s.ba));
                  }
                  s = n;
                }
                a = 0 != s ? null : 11 > a ? l.f.RGBA.eb : l.f.kb.y;
              } else a = null;
              return a;
            };
            var Fr = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
          };
          function c(t, e) {
            for (var n = "", i = 0; i < 4; i++)
              n += String.fromCharCode(t[e++]);
            return n;
          }
          function d(t, e) {
            return ((t[e + 0] << 0) | (t[e + 1] << 8) | (t[e + 2] << 16)) >>> 0;
          }
          function u(t, e) {
            return (
              ((t[e + 0] << 0) |
                (t[e + 1] << 8) |
                (t[e + 2] << 16) |
                (t[e + 3] << 24)) >>>
              0
            );
          }
          new l();
          var p = [0],
            h = [0],
            f = [],
            b = new l(),
            m = t,
            g = (function (t, e) {
              var n = {},
                i = 0,
                r = !1,
                o = 0,
                a = 0;
              if (
                ((n.frames = []),
                !(function (t, e, n, i) {
                  for (var r = 0; r < 4; r++)
                    if (t[e + r] != "RIFF".charCodeAt(r)) return !0;
                  return !1;
                })(t, e))
              ) {
                var s, l;
                for (u(t, (e += 4)), e += 8; e < t.length; ) {
                  var p = c(t, e),
                    h = u(t, (e += 4));
                  e += 4;
                  var f = h + (1 & h);
                  switch (p) {
                    case "VP8 ":
                    case "VP8L":
                      void 0 === n.frames[i] && (n.frames[i] = {}),
                        ((g = n.frames[i]).src_off = r ? a : e - 8),
                        (g.src_size = o + h + 8),
                        i++,
                        r && ((r = !1), (o = 0), (a = 0));
                      break;
                    case "VP8X":
                      (g = n.header = {}).feature_flags = t[e];
                      var b = e + 4;
                      (g.canvas_width = 1 + d(t, b)),
                        (b += 3),
                        (g.canvas_height = 1 + d(t, b)),
                        (b += 3);
                      break;
                    case "ALPH":
                      (r = !0), (o = f + 8), (a = e - 8);
                      break;
                    case "ANIM":
                      ((g = n.header).bgcolor = u(t, e)),
                        (b = e + 4),
                        (g.loop_count =
                          ((s = t)[(l = b) + 0] << 0) | (s[l + 1] << 8)),
                        (b += 2);
                      break;
                    case "ANMF":
                      var m, g;
                      ((g = n.frames[i] = {}).offset_x = 2 * d(t, e)),
                        (e += 3),
                        (g.offset_y = 2 * d(t, e)),
                        (e += 3),
                        (g.width = 1 + d(t, e)),
                        (e += 3),
                        (g.height = 1 + d(t, e)),
                        (e += 3),
                        (g.duration = d(t, e)),
                        (e += 3),
                        (m = t[e++]),
                        (g.dispose = 1 & m),
                        (g.blend = (m >> 1) & 1);
                  }
                  "ANMF" != p && (e += f);
                }
                return n;
              }
            })(m, 0);
          (g.response = m), (g.rgbaoutput = !0), (g.dataurl = !1);
          var v = g.header ? g.header : null,
            _ = g.frames ? g.frames : null;
          if (v) {
            (v.loop_counter = v.loop_count),
              (p = [v.canvas_height]),
              (h = [v.canvas_width]);
            for (var y = 0; y < _.length && 0 != _[y].blend; y++);
          }
          var M = _[0],
            O = b.WebPDecodeRGBA(m, M.src_off, M.src_size, h, p);
          (M.rgba = O), (M.imgwidth = h[0]), (M.imgheight = p[0]);
          for (var w = 0; w < h[0] * p[0] * 4; w++) f[w] = O[w];
          return (this.width = h), (this.height = p), (this.data = f), this;
        }
        !(function (t) {
          var e = function (e, i, c, d) {
              var u = 4,
                p = a;
              switch (d) {
                case t.image_compression.FAST:
                  (u = 1), (p = r);
                  break;
                case t.image_compression.MEDIUM:
                  (u = 6), (p = s);
                  break;
                case t.image_compression.SLOW:
                  (u = 9), (p = l);
              }
              e = n(e, i, c, p);
              var h = Object(o.b)(e, { level: u });
              return t.__addimage__.arrayBufferToBinaryString(h);
            },
            n = function (t, e, n, i) {
              for (
                var r,
                  o,
                  a,
                  s = t.length / e,
                  l = new Uint8Array(t.length + s),
                  c = d(),
                  p = 0;
                p < s;
                p += 1
              ) {
                if (((a = p * e), (r = t.subarray(a, a + e)), i))
                  l.set(i(r, n, o), a + p);
                else {
                  for (var h, f = c.length, b = []; h < f; h += 1)
                    b[h] = c[h](r, n, o);
                  var m = u(b.concat());
                  l.set(b[m], a + p);
                }
                o = r;
              }
              return l;
            },
            i = function (t) {
              var e = Array.apply([], t);
              return e.unshift(0), e;
            },
            r = function (t, e) {
              var n,
                i = [],
                r = t.length;
              i[0] = 1;
              for (var o = 0; o < r; o += 1)
                (n = t[o - e] || 0), (i[o + 1] = (t[o] - n + 256) & 255);
              return i;
            },
            a = function (t, e, n) {
              var i,
                r = [],
                o = t.length;
              r[0] = 2;
              for (var a = 0; a < o; a += 1)
                (i = (n && n[a]) || 0), (r[a + 1] = (t[a] - i + 256) & 255);
              return r;
            },
            s = function (t, e, n) {
              var i,
                r,
                o = [],
                a = t.length;
              o[0] = 3;
              for (var s = 0; s < a; s += 1)
                (i = t[s - e] || 0),
                  (r = (n && n[s]) || 0),
                  (o[s + 1] = (t[s] + 256 - ((i + r) >>> 1)) & 255);
              return o;
            },
            l = function (t, e, n) {
              var i,
                r,
                o,
                a,
                s = [],
                l = t.length;
              s[0] = 4;
              for (var d = 0; d < l; d += 1)
                (i = t[d - e] || 0),
                  (r = (n && n[d]) || 0),
                  (o = (n && n[d - e]) || 0),
                  (a = c(i, r, o)),
                  (s[d + 1] = (t[d] - a + 256) & 255);
              return s;
            },
            c = function (t, e, n) {
              if (t === e && e === n) return t;
              var i = Math.abs(e - n),
                r = Math.abs(t - n),
                o = Math.abs(t + e - n - n);
              return i <= r && i <= o ? t : r <= o ? e : n;
            },
            d = function () {
              return [i, r, a, s, l];
            },
            u = function (t) {
              var e = t.map(function (t) {
                return t.reduce(function (t, e) {
                  return t + Math.abs(e);
                }, 0);
              });
              return e.indexOf(Math.min.apply(null, e));
            };
          t.processPNG = function (n, i, r, a) {
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
              g,
              v,
              _,
              y,
              M,
              O = this.decode.FLATE_DECODE,
              w = "";
            if (
              (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)),
              this.__addimage__.isArrayBufferView(n))
            ) {
              if (
                ((n = (c = new Jt(n)).imgData),
                (l = c.bits),
                (s = c.colorSpace),
                (u = c.colors),
                -1 !== [4, 6].indexOf(c.colorType))
              ) {
                if (8 === c.bits) {
                  (b = (f =
                    32 == c.pixelBitlength
                      ? new Uint32Array(c.decodePixels().buffer)
                      : 16 == c.pixelBitlength
                      ? new Uint16Array(c.decodePixels().buffer)
                      : new Uint8Array(c.decodePixels().buffer)).length),
                    (g = new Uint8Array(b * c.colors)),
                    (m = new Uint8Array(b));
                  var A,
                    x = c.pixelBitlength - c.bits;
                  for (y = 0, M = 0; y < b; y++) {
                    for (_ = f[y], A = 0; A < x; )
                      (g[M++] = (_ >>> A) & 255), (A += c.bits);
                    m[y] = (_ >>> A) & 255;
                  }
                }
                if (16 === c.bits) {
                  (b = (f = new Uint32Array(c.decodePixels().buffer)).length),
                    (g = new Uint8Array(
                      b * (32 / c.pixelBitlength) * c.colors
                    )),
                    (m = new Uint8Array(b * (32 / c.pixelBitlength))),
                    (v = c.colors > 1),
                    (y = 0),
                    (M = 0);
                  for (var z = 0; y < b; )
                    (_ = f[y++]),
                      (g[M++] = (_ >>> 0) & 255),
                      v &&
                        ((g[M++] = (_ >>> 16) & 255),
                        (_ = f[y++]),
                        (g[M++] = (_ >>> 0) & 255)),
                      (m[z++] = (_ >>> 16) & 255);
                  l = 8;
                }
                a !== t.image_compression.NONE && "function" == typeof o.b
                  ? ((n = e(g, c.width * c.colors, c.colors, a)),
                    (h = e(m, c.width, 1, a)))
                  : ((n = g), (h = m), (O = void 0));
              }
              if (
                3 === c.colorType &&
                ((s = this.color_spaces.INDEXED),
                (p = c.palette),
                c.transparency.indexed)
              ) {
                var C = c.transparency.indexed,
                  k = 0;
                for (y = 0, b = C.length; y < b; ++y) k += C[y];
                if ((k /= 255) == b - 1 && -1 !== C.indexOf(0))
                  d = [C.indexOf(0)];
                else if (k !== b) {
                  for (
                    f = c.decodePixels(),
                      m = new Uint8Array(f.length),
                      y = 0,
                      b = f.length;
                    y < b;
                    y++
                  )
                    m[y] = C[f[y]];
                  h = e(m, c.width, 1);
                }
              }
              var S = (function (e) {
                var n;
                switch (e) {
                  case t.image_compression.FAST:
                    n = 11;
                    break;
                  case t.image_compression.MEDIUM:
                    n = 13;
                    break;
                  case t.image_compression.SLOW:
                    n = 14;
                    break;
                  default:
                    n = 12;
                }
                return n;
              })(a);
              return (
                O === this.decode.FLATE_DECODE && (w = "/Predictor " + S + " "),
                (w +=
                  "/Colors " +
                  u +
                  " /BitsPerComponent " +
                  l +
                  " /Columns " +
                  c.width),
                (this.__addimage__.isArrayBuffer(n) ||
                  this.__addimage__.isArrayBufferView(n)) &&
                  (n = this.__addimage__.arrayBufferToBinaryString(n)),
                ((h && this.__addimage__.isArrayBuffer(h)) ||
                  this.__addimage__.isArrayBufferView(h)) &&
                  (h = this.__addimage__.arrayBufferToBinaryString(h)),
                {
                  alias: r,
                  data: n,
                  index: i,
                  filter: O,
                  decodeParameters: w,
                  transparency: d,
                  palette: p,
                  sMask: h,
                  predictor: S,
                  width: c.width,
                  height: c.height,
                  bitsPerComponent: l,
                  colorSpace: s,
                }
              );
            }
          };
        })(W.API),
          (function (t) {
            (t.processGIF89A = function (e, n, i, r) {
              var o = new Qt(e),
                a = o.width,
                s = o.height,
                l = [];
              o.decodeAndBlitFrameRGBA(0, l);
              var c = { data: l, width: a, height: s },
                d = new ee(100).encode(c, 100);
              return t.processJPEG.call(this, d, n, i, r);
            }),
              (t.processGIF87A = t.processGIF89A);
          })(W.API),
          (ne.prototype.parseHeader = function () {
            if (
              ((this.fileSize = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.reserved = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.offset = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.headerSize = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.width = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.height = this.datav.getInt32(this.pos, !0)),
              (this.pos += 4),
              (this.planes = this.datav.getUint16(this.pos, !0)),
              (this.pos += 2),
              (this.bitPP = this.datav.getUint16(this.pos, !0)),
              (this.pos += 2),
              (this.compress = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.rawSize = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.hr = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.vr = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.colors = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              (this.importantColors = this.datav.getUint32(this.pos, !0)),
              (this.pos += 4),
              16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
              this.bitPP < 15)
            ) {
              var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
              this.palette = new Array(t);
              for (var e = 0; e < t; e++) {
                var n = this.datav.getUint8(this.pos++, !0),
                  i = this.datav.getUint8(this.pos++, !0),
                  r = this.datav.getUint8(this.pos++, !0),
                  o = this.datav.getUint8(this.pos++, !0);
                this.palette[e] = { red: r, green: i, blue: n, quad: o };
              }
            }
            this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
          }),
          (ne.prototype.parseBGR = function () {
            this.pos = this.offset;
            try {
              var t = "bit" + this.bitPP,
                e = this.width * this.height * 4;
              (this.data = new Uint8Array(e)), this[t]();
            } catch (t) {
              l.log("bit decode error:" + t);
            }
          }),
          (ne.prototype.bit1 = function () {
            var t,
              e = Math.ceil(this.width / 8),
              n = e % 4;
            for (t = this.height - 1; t >= 0; t--) {
              for (
                var i = this.bottom_up ? t : this.height - 1 - t, r = 0;
                r < e;
                r++
              )
                for (
                  var o = this.datav.getUint8(this.pos++, !0),
                    a = i * this.width * 4 + 8 * r * 4,
                    s = 0;
                  s < 8 && 8 * r + s < this.width;
                  s++
                ) {
                  var l = this.palette[(o >> (7 - s)) & 1];
                  (this.data[a + 4 * s] = l.blue),
                    (this.data[a + 4 * s + 1] = l.green),
                    (this.data[a + 4 * s + 2] = l.red),
                    (this.data[a + 4 * s + 3] = 255);
                }
              0 !== n && (this.pos += 4 - n);
            }
          }),
          (ne.prototype.bit4 = function () {
            for (
              var t = Math.ceil(this.width / 2), e = t % 4, n = this.height - 1;
              n >= 0;
              n--
            ) {
              for (
                var i = this.bottom_up ? n : this.height - 1 - n, r = 0;
                r < t;
                r++
              ) {
                var o = this.datav.getUint8(this.pos++, !0),
                  a = i * this.width * 4 + 2 * r * 4,
                  s = o >> 4,
                  l = 15 & o,
                  c = this.palette[s];
                if (
                  ((this.data[a] = c.blue),
                  (this.data[a + 1] = c.green),
                  (this.data[a + 2] = c.red),
                  (this.data[a + 3] = 255),
                  2 * r + 1 >= this.width)
                )
                  break;
                (c = this.palette[l]),
                  (this.data[a + 4] = c.blue),
                  (this.data[a + 4 + 1] = c.green),
                  (this.data[a + 4 + 2] = c.red),
                  (this.data[a + 4 + 3] = 255);
              }
              0 !== e && (this.pos += 4 - e);
            }
          }),
          (ne.prototype.bit8 = function () {
            for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
              for (
                var n = this.bottom_up ? e : this.height - 1 - e, i = 0;
                i < this.width;
                i++
              ) {
                var r = this.datav.getUint8(this.pos++, !0),
                  o = n * this.width * 4 + 4 * i;
                if (r < this.palette.length) {
                  var a = this.palette[r];
                  (this.data[o] = a.red),
                    (this.data[o + 1] = a.green),
                    (this.data[o + 2] = a.blue),
                    (this.data[o + 3] = 255);
                } else
                  (this.data[o] = 255),
                    (this.data[o + 1] = 255),
                    (this.data[o + 2] = 255),
                    (this.data[o + 3] = 255);
              }
              0 !== t && (this.pos += 4 - t);
            }
          }),
          (ne.prototype.bit15 = function () {
            for (
              var t = this.width % 3,
                e = parseInt("11111", 2),
                n = this.height - 1;
              n >= 0;
              n--
            ) {
              for (
                var i = this.bottom_up ? n : this.height - 1 - n, r = 0;
                r < this.width;
                r++
              ) {
                var o = this.datav.getUint16(this.pos, !0);
                this.pos += 2;
                var a = (((o & e) / e) * 255) | 0,
                  s = ((((o >> 5) & e) / e) * 255) | 0,
                  l = ((((o >> 10) & e) / e) * 255) | 0,
                  c = o >> 15 ? 255 : 0,
                  d = i * this.width * 4 + 4 * r;
                (this.data[d] = l),
                  (this.data[d + 1] = s),
                  (this.data[d + 2] = a),
                  (this.data[d + 3] = c);
              }
              this.pos += t;
            }
          }),
          (ne.prototype.bit16 = function () {
            for (
              var t = this.width % 3,
                e = parseInt("11111", 2),
                n = parseInt("111111", 2),
                i = this.height - 1;
              i >= 0;
              i--
            ) {
              for (
                var r = this.bottom_up ? i : this.height - 1 - i, o = 0;
                o < this.width;
                o++
              ) {
                var a = this.datav.getUint16(this.pos, !0);
                this.pos += 2;
                var s = (((a & e) / e) * 255) | 0,
                  l = ((((a >> 5) & n) / n) * 255) | 0,
                  c = (((a >> 11) / e) * 255) | 0,
                  d = r * this.width * 4 + 4 * o;
                (this.data[d] = c),
                  (this.data[d + 1] = l),
                  (this.data[d + 2] = s),
                  (this.data[d + 3] = 255);
              }
              this.pos += t;
            }
          }),
          (ne.prototype.bit24 = function () {
            for (var t = this.height - 1; t >= 0; t--) {
              for (
                var e = this.bottom_up ? t : this.height - 1 - t, n = 0;
                n < this.width;
                n++
              ) {
                var i = this.datav.getUint8(this.pos++, !0),
                  r = this.datav.getUint8(this.pos++, !0),
                  o = this.datav.getUint8(this.pos++, !0),
                  a = e * this.width * 4 + 4 * n;
                (this.data[a] = o),
                  (this.data[a + 1] = r),
                  (this.data[a + 2] = i),
                  (this.data[a + 3] = 255);
              }
              this.pos += this.width % 4;
            }
          }),
          (ne.prototype.bit32 = function () {
            for (var t = this.height - 1; t >= 0; t--)
              for (
                var e = this.bottom_up ? t : this.height - 1 - t, n = 0;
                n < this.width;
                n++
              ) {
                var i = this.datav.getUint8(this.pos++, !0),
                  r = this.datav.getUint8(this.pos++, !0),
                  o = this.datav.getUint8(this.pos++, !0),
                  a = this.datav.getUint8(this.pos++, !0),
                  s = e * this.width * 4 + 4 * n;
                (this.data[s] = o),
                  (this.data[s + 1] = r),
                  (this.data[s + 2] = i),
                  (this.data[s + 3] = a);
              }
          }),
          (ne.prototype.getData = function () {
            return this.data;
          }),
          (function (t) {
            t.processBMP = function (e, n, i, r) {
              var o = new ne(e, !1),
                a = o.width,
                s = o.height,
                l = { data: o.getData(), width: a, height: s },
                c = new ee(100).encode(l, 100);
              return t.processJPEG.call(this, c, n, i, r);
            };
          })(W.API),
          (ie.prototype.getData = function () {
            return this.data;
          }),
          (function (t) {
            t.processWEBP = function (e, n, i, r) {
              var o = new ie(e, !1),
                a = o.width,
                s = o.height,
                l = { data: o.getData(), width: a, height: s },
                c = new ee(100).encode(l, 100);
              return t.processJPEG.call(this, c, n, i, r);
            };
          })(W.API),
          (W.API.processRGBA = function (t, e, n) {
            for (
              var i = t.data,
                r = i.length,
                o = new Uint8Array((r / 4) * 3),
                a = new Uint8Array(r / 4),
                s = 0,
                l = 0,
                c = 0;
              c < r;
              c += 4
            ) {
              var d = i[c],
                u = i[c + 1],
                p = i[c + 2],
                h = i[c + 3];
              (o[s++] = d), (o[s++] = u), (o[s++] = p), (a[l++] = h);
            }
            var f = this.__addimage__.arrayBufferToBinaryString(o);
            return {
              alpha: this.__addimage__.arrayBufferToBinaryString(a),
              data: f,
              index: e,
              alias: n,
              colorSpace: "DeviceRGB",
              bitsPerComponent: 8,
              width: t.width,
              height: t.height,
            };
          }),
          (W.API.setLanguage = function (t) {
            return (
              void 0 === this.internal.languageSettings &&
                ((this.internal.languageSettings = {}),
                (this.internal.languageSettings.isSubscribed = !1)),
              void 0 !==
                {
                  af: "Afrikaans",
                  sq: "Albanian",
                  ar: "Arabic (Standard)",
                  "ar-DZ": "Arabic (Algeria)",
                  "ar-BH": "Arabic (Bahrain)",
                  "ar-EG": "Arabic (Egypt)",
                  "ar-IQ": "Arabic (Iraq)",
                  "ar-JO": "Arabic (Jordan)",
                  "ar-KW": "Arabic (Kuwait)",
                  "ar-LB": "Arabic (Lebanon)",
                  "ar-LY": "Arabic (Libya)",
                  "ar-MA": "Arabic (Morocco)",
                  "ar-OM": "Arabic (Oman)",
                  "ar-QA": "Arabic (Qatar)",
                  "ar-SA": "Arabic (Saudi Arabia)",
                  "ar-SY": "Arabic (Syria)",
                  "ar-TN": "Arabic (Tunisia)",
                  "ar-AE": "Arabic (U.A.E.)",
                  "ar-YE": "Arabic (Yemen)",
                  an: "Aragonese",
                  hy: "Armenian",
                  as: "Assamese",
                  ast: "Asturian",
                  az: "Azerbaijani",
                  eu: "Basque",
                  be: "Belarusian",
                  bn: "Bengali",
                  bs: "Bosnian",
                  br: "Breton",
                  bg: "Bulgarian",
                  my: "Burmese",
                  ca: "Catalan",
                  ch: "Chamorro",
                  ce: "Chechen",
                  zh: "Chinese",
                  "zh-HK": "Chinese (Hong Kong)",
                  "zh-CN": "Chinese (PRC)",
                  "zh-SG": "Chinese (Singapore)",
                  "zh-TW": "Chinese (Taiwan)",
                  cv: "Chuvash",
                  co: "Corsican",
                  cr: "Cree",
                  hr: "Croatian",
                  cs: "Czech",
                  da: "Danish",
                  nl: "Dutch (Standard)",
                  "nl-BE": "Dutch (Belgian)",
                  en: "English",
                  "en-AU": "English (Australia)",
                  "en-BZ": "English (Belize)",
                  "en-CA": "English (Canada)",
                  "en-IE": "English (Ireland)",
                  "en-JM": "English (Jamaica)",
                  "en-NZ": "English (New Zealand)",
                  "en-PH": "English (Philippines)",
                  "en-ZA": "English (South Africa)",
                  "en-TT": "English (Trinidad & Tobago)",
                  "en-GB": "English (United Kingdom)",
                  "en-US": "English (United States)",
                  "en-ZW": "English (Zimbabwe)",
                  eo: "Esperanto",
                  et: "Estonian",
                  fo: "Faeroese",
                  fj: "Fijian",
                  fi: "Finnish",
                  fr: "French (Standard)",
                  "fr-BE": "French (Belgium)",
                  "fr-CA": "French (Canada)",
                  "fr-FR": "French (France)",
                  "fr-LU": "French (Luxembourg)",
                  "fr-MC": "French (Monaco)",
                  "fr-CH": "French (Switzerland)",
                  fy: "Frisian",
                  fur: "Friulian",
                  gd: "Gaelic (Scots)",
                  "gd-IE": "Gaelic (Irish)",
                  gl: "Galacian",
                  ka: "Georgian",
                  de: "German (Standard)",
                  "de-AT": "German (Austria)",
                  "de-DE": "German (Germany)",
                  "de-LI": "German (Liechtenstein)",
                  "de-LU": "German (Luxembourg)",
                  "de-CH": "German (Switzerland)",
                  el: "Greek",
                  gu: "Gujurati",
                  ht: "Haitian",
                  he: "Hebrew",
                  hi: "Hindi",
                  hu: "Hungarian",
                  is: "Icelandic",
                  id: "Indonesian",
                  iu: "Inuktitut",
                  ga: "Irish",
                  it: "Italian (Standard)",
                  "it-CH": "Italian (Switzerland)",
                  ja: "Japanese",
                  kn: "Kannada",
                  ks: "Kashmiri",
                  kk: "Kazakh",
                  km: "Khmer",
                  ky: "Kirghiz",
                  tlh: "Klingon",
                  ko: "Korean",
                  "ko-KP": "Korean (North Korea)",
                  "ko-KR": "Korean (South Korea)",
                  la: "Latin",
                  lv: "Latvian",
                  lt: "Lithuanian",
                  lb: "Luxembourgish",
                  mk: "North Macedonia",
                  ms: "Malay",
                  ml: "Malayalam",
                  mt: "Maltese",
                  mi: "Maori",
                  mr: "Marathi",
                  mo: "Moldavian",
                  nv: "Navajo",
                  ng: "Ndonga",
                  ne: "Nepali",
                  no: "Norwegian",
                  nb: "Norwegian (Bokmal)",
                  nn: "Norwegian (Nynorsk)",
                  oc: "Occitan",
                  or: "Oriya",
                  om: "Oromo",
                  fa: "Persian",
                  "fa-IR": "Persian/Iran",
                  pl: "Polish",
                  pt: "Portuguese",
                  "pt-BR": "Portuguese (Brazil)",
                  pa: "Punjabi",
                  "pa-IN": "Punjabi (India)",
                  "pa-PK": "Punjabi (Pakistan)",
                  qu: "Quechua",
                  rm: "Rhaeto-Romanic",
                  ro: "Romanian",
                  "ro-MO": "Romanian (Moldavia)",
                  ru: "Russian",
                  "ru-MO": "Russian (Moldavia)",
                  sz: "Sami (Lappish)",
                  sg: "Sango",
                  sa: "Sanskrit",
                  sc: "Sardinian",
                  sd: "Sindhi",
                  si: "Singhalese",
                  sr: "Serbian",
                  sk: "Slovak",
                  sl: "Slovenian",
                  so: "Somani",
                  sb: "Sorbian",
                  es: "Spanish",
                  "es-AR": "Spanish (Argentina)",
                  "es-BO": "Spanish (Bolivia)",
                  "es-CL": "Spanish (Chile)",
                  "es-CO": "Spanish (Colombia)",
                  "es-CR": "Spanish (Costa Rica)",
                  "es-DO": "Spanish (Dominican Republic)",
                  "es-EC": "Spanish (Ecuador)",
                  "es-SV": "Spanish (El Salvador)",
                  "es-GT": "Spanish (Guatemala)",
                  "es-HN": "Spanish (Honduras)",
                  "es-MX": "Spanish (Mexico)",
                  "es-NI": "Spanish (Nicaragua)",
                  "es-PA": "Spanish (Panama)",
                  "es-PY": "Spanish (Paraguay)",
                  "es-PE": "Spanish (Peru)",
                  "es-PR": "Spanish (Puerto Rico)",
                  "es-ES": "Spanish (Spain)",
                  "es-UY": "Spanish (Uruguay)",
                  "es-VE": "Spanish (Venezuela)",
                  sx: "Sutu",
                  sw: "Swahili",
                  sv: "Swedish",
                  "sv-FI": "Swedish (Finland)",
                  "sv-SV": "Swedish (Sweden)",
                  ta: "Tamil",
                  tt: "Tatar",
                  te: "Teluga",
                  th: "Thai",
                  tig: "Tigre",
                  ts: "Tsonga",
                  tn: "Tswana",
                  tr: "Turkish",
                  tk: "Turkmen",
                  uk: "Ukrainian",
                  hsb: "Upper Sorbian",
                  ur: "Urdu",
                  ve: "Venda",
                  vi: "Vietnamese",
                  vo: "Volapuk",
                  wa: "Walloon",
                  cy: "Welsh",
                  xh: "Xhosa",
                  ji: "Yiddish",
                  zu: "Zulu",
                }[t] &&
                ((this.internal.languageSettings.languageCode = t),
                !1 === this.internal.languageSettings.isSubscribed &&
                  (this.internal.events.subscribe("putCatalog", function () {
                    this.internal.write(
                      "/Lang (" +
                        this.internal.languageSettings.languageCode +
                        ")"
                    );
                  }),
                  (this.internal.languageSettings.isSubscribed = !0))),
              this
            );
          }),
          (Xt = W.API),
          (Vt = Xt.getCharWidthsArray =
            function (t, e) {
              var n,
                i,
                o = (e = e || {}).font || this.internal.getFont(),
                a = e.fontSize || this.internal.getFontSize(),
                s = e.charSpace || this.internal.getCharSpace(),
                l = e.widths ? e.widths : o.metadata.Unicode.widths,
                c = l.fof ? l.fof : 1,
                d = e.kerning ? e.kerning : o.metadata.Unicode.kerning,
                u = d.fof ? d.fof : 1,
                p = !1 !== e.doKerning,
                h = 0,
                f = t.length,
                b = 0,
                m = l[0] || c,
                g = [];
              for (n = 0; n < f; n++)
                (i = t.charCodeAt(n)),
                  "function" == typeof o.metadata.widthOfString
                    ? g.push(
                        (o.metadata.widthOfGlyph(
                          o.metadata.characterToGlyph(i)
                        ) +
                          s * (1e3 / a) || 0) / 1e3
                      )
                    : ((h =
                        p &&
                        "object" === r()(d[i]) &&
                        !isNaN(parseInt(d[i][b], 10))
                          ? d[i][b] / u
                          : 0),
                      g.push((l[i] || m) / c + h)),
                  (b = i);
              return g;
            }),
          (Gt = Xt.getStringUnitWidth =
            function (t, e) {
              var n = (e = e || {}).fontSize || this.internal.getFontSize(),
                i = e.font || this.internal.getFont(),
                r = e.charSpace || this.internal.getCharSpace();
              return (
                Xt.processArabic && (t = Xt.processArabic(t)),
                "function" == typeof i.metadata.widthOfString
                  ? i.metadata.widthOfString(t, n, r) / n
                  : Vt.apply(this, arguments).reduce(function (t, e) {
                      return t + e;
                    }, 0)
              );
            }),
          (Kt = function (t, e, n, i) {
            for (
              var r = [], o = 0, a = t.length, s = 0;
              o !== a && s + e[o] < n;

            )
              (s += e[o]), o++;
            r.push(t.slice(0, o));
            var l = o;
            for (s = 0; o !== a; )
              s + e[o] > i && (r.push(t.slice(l, o)), (s = 0), (l = o)),
                (s += e[o]),
                o++;
            return l !== o && r.push(t.slice(l, o)), r;
          }),
          (Zt = function (t, e, n) {
            n || (n = {});
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              d = [],
              u = [d],
              p = n.textIndent || 0,
              h = 0,
              f = 0,
              b = t.split(" "),
              m = Vt.apply(this, [" ", n])[0];
            if (
              (l = -1 === n.lineIndent ? b[0].length + 2 : n.lineIndent || 0)
            ) {
              var g = Array(l).join(" "),
                v = [];
              b.map(function (t) {
                (t = t.split(/\s*\n/)).length > 1
                  ? (v = v.concat(
                      t.map(function (t, e) {
                        return (e && t.length ? "\n" : "") + t;
                      })
                    ))
                  : v.push(t[0]);
              }),
                (b = v),
                (l = Gt.apply(this, [g, n]));
            }
            for (o = 0, a = b.length; o < a; o++) {
              var _ = 0;
              if (
                ((i = b[o]),
                l && "\n" == i[0] && ((i = i.substr(1)), (_ = 1)),
                p +
                  h +
                  (f = (r = Vt.apply(this, [i, n])).reduce(function (t, e) {
                    return t + e;
                  }, 0)) >
                  e || _)
              ) {
                if (f > e) {
                  for (
                    s = Kt.apply(this, [i, r, e - (p + h), e]),
                      d.push(s.shift()),
                      d = [s.pop()];
                    s.length;

                  )
                    u.push([s.shift()]);
                  f = r
                    .slice(i.length - (d[0] ? d[0].length : 0))
                    .reduce(function (t, e) {
                      return t + e;
                    }, 0);
                } else d = [i];
                u.push(d), (p = f + l), (h = m);
              } else d.push(i), (p += h + f), (h = m);
            }
            return (
              (c = l
                ? function (t, e) {
                    return (e ? g : "") + t.join(" ");
                  }
                : function (t) {
                    return t.join(" ");
                  }),
              u.map(c)
            );
          }),
          (Xt.splitTextToSize = function (t, e, n) {
            var i,
              r = (n = n || {}).fontSize || this.internal.getFontSize(),
              o = function (t) {
                if (t.widths && t.kerning)
                  return { widths: t.widths, kerning: t.kerning };
                var e = this.internal.getFont(t.fontName, t.fontStyle);
                return e.metadata.Unicode
                  ? {
                      widths: e.metadata.Unicode.widths || { 0: 1 },
                      kerning: e.metadata.Unicode.kerning || {},
                    }
                  : {
                      font: e.metadata,
                      fontSize: this.internal.getFontSize(),
                      charSpace: this.internal.getCharSpace(),
                    };
              }.call(this, n);
            i = Array.isArray(t) ? t : String(t).split(/\r?\n/);
            var a = (1 * this.internal.scaleFactor * e) / r;
            (o.textIndent = n.textIndent
              ? (1 * n.textIndent * this.internal.scaleFactor) / r
              : 0),
              (o.lineIndent = n.lineIndent);
            var s,
              l,
              c = [];
            for (s = 0, l = i.length; s < l; s++)
              c = c.concat(Zt.apply(this, [i[s], a, o]));
            return c;
          }),
          (function (t) {
            t.__fontmetrics__ = t.__fontmetrics__ || {};
            for (
              var e = "klmnopqrstuvwxyz", n = {}, i = {}, o = 0;
              o < e.length;
              o++
            )
              (n[e[o]] = "0123456789abcdef"[o]),
                (i["0123456789abcdef"[o]] = e[o]);
            var a = function (t) {
                return "0x" + parseInt(t, 10).toString(16);
              },
              s = (t.__fontmetrics__.compress = function (t) {
                var e,
                  n,
                  o,
                  l,
                  c = ["{"];
                for (var d in t) {
                  if (
                    ((e = t[d]),
                    isNaN(parseInt(d, 10))
                      ? (n = "'" + d + "'")
                      : ((d = parseInt(d, 10)),
                        (n =
                          (n = a(d).slice(2)).slice(0, -1) + i[n.slice(-1)])),
                    "number" == typeof e)
                  )
                    e < 0
                      ? ((o = a(e).slice(3)), (l = "-"))
                      : ((o = a(e).slice(2)), (l = "")),
                      (o = l + o.slice(0, -1) + i[o.slice(-1)]);
                  else {
                    if ("object" !== r()(e))
                      throw new Error(
                        "Don't know what to do with value type " + r()(e) + "."
                      );
                    o = s(e);
                  }
                  c.push(n + o);
                }
                return c.push("}"), c.join("");
              }),
              l = (t.__fontmetrics__.uncompress = function (t) {
                if ("string" != typeof t)
                  throw new Error("Invalid argument passed to uncompress.");
                for (
                  var e,
                    i,
                    r,
                    o,
                    a = {},
                    s = 1,
                    l = a,
                    c = [],
                    d = "",
                    u = "",
                    p = t.length - 1,
                    h = 1;
                  h < p;
                  h += 1
                )
                  "'" == (o = t[h])
                    ? e
                      ? ((r = e.join("")), (e = void 0))
                      : (e = [])
                    : e
                    ? e.push(o)
                    : "{" == o
                    ? (c.push([l, r]), (l = {}), (r = void 0))
                    : "}" == o
                    ? (((i = c.pop())[0][i[1]] = l), (r = void 0), (l = i[0]))
                    : "-" == o
                    ? (s = -1)
                    : void 0 === r
                    ? n.hasOwnProperty(o)
                      ? ((d += n[o]),
                        (r = parseInt(d, 16) * s),
                        (s = 1),
                        (d = ""))
                      : (d += o)
                    : n.hasOwnProperty(o)
                    ? ((u += n[o]),
                      (l[r] = parseInt(u, 16) * s),
                      (s = 1),
                      (r = void 0),
                      (u = ""))
                    : (u += o);
                return a;
              }),
              c = {
                codePages: ["WinAnsiEncoding"],
                WinAnsiEncoding: l(
                  "{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}"
                ),
              },
              d = {
                Unicode: {
                  Courier: c,
                  "Courier-Bold": c,
                  "Courier-BoldOblique": c,
                  "Courier-Oblique": c,
                  Helvetica: c,
                  "Helvetica-Bold": c,
                  "Helvetica-BoldOblique": c,
                  "Helvetica-Oblique": c,
                  "Times-Roman": c,
                  "Times-Bold": c,
                  "Times-BoldItalic": c,
                  "Times-Italic": c,
                },
              },
              u = {
                Unicode: {
                  "Courier-Oblique": l(
                    "{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
                  ),
                  "Times-BoldItalic": l(
                    "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
                  ),
                  "Helvetica-Bold": l(
                    "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                  ),
                  Courier: l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                  "Courier-BoldOblique": l(
                    "{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
                  ),
                  "Times-Bold": l(
                    "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
                  ),
                  Symbol: l(
                    "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
                  ),
                  Helvetica: l(
                    "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                  ),
                  "Helvetica-BoldOblique": l(
                    "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
                  ),
                  ZapfDingbats: l(
                    "{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"
                  ),
                  "Courier-Bold": l(
                    "{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
                  ),
                  "Times-Italic": l(
                    "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
                  ),
                  "Times-Roman": l(
                    "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
                  ),
                  "Helvetica-Oblique": l(
                    "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
                  ),
                },
              };
            t.events.push([
              "addFont",
              function (t) {
                var e = t.font,
                  n = u.Unicode[e.postScriptName];
                n &&
                  ((e.metadata.Unicode = {}),
                  (e.metadata.Unicode.widths = n.widths),
                  (e.metadata.Unicode.kerning = n.kerning));
                var i = d.Unicode[e.postScriptName];
                i &&
                  ((e.metadata.Unicode.encoding = i),
                  (e.encoding = i.codePages[0]));
              },
            ]);
          })(W.API),
          (function (t) {
            var e = function (t) {
              for (var e = t.length, n = new Uint8Array(e), i = 0; i < e; i++)
                n[i] = t.charCodeAt(i);
              return n;
            };
            t.API.events.push([
              "addFont",
              function (n) {
                var i = void 0,
                  r = n.font,
                  o = n.instance;
                if (!r.isStandardFont) {
                  if (void 0 === o)
                    throw new Error(
                      "Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
                        r.postScriptName +
                        "')."
                    );
                  if (
                    "string" !=
                    typeof (i =
                      !1 === o.existsFileInVFS(r.postScriptName)
                        ? o.loadFile(r.postScriptName)
                        : o.getFileFromVFS(r.postScriptName))
                  )
                    throw new Error(
                      "Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
                        r.postScriptName +
                        "')."
                    );
                  !(function (n, i) {
                    (i = /^\x00\x01\x00\x00/.test(i) ? e(i) : e(p(i))),
                      (n.metadata = t.API.TTFFont.open(i)),
                      (n.metadata.Unicode = n.metadata.Unicode || {
                        encoding: {},
                        kerning: {},
                        widths: [],
                      }),
                      (n.metadata.glyIdsUsed = [0]);
                  })(r, i);
                }
              },
            ]);
          })(W),
          (function (t) {
            function e() {
              return (
                a.canvg
                  ? Promise.resolve(a.canvg)
                  : n.e(2).then(n.bind(null, 547))
              )
                .catch(function (t) {
                  return Promise.reject(
                    new Error("Could not load canvg: " + t)
                  );
                })
                .then(function (t) {
                  return t.default ? t.default : t;
                });
            }
            W.API.addSvgAsImage = function (t, n, i, r, o, a, s, c) {
              if (isNaN(n) || isNaN(i))
                throw (
                  (l.error(
                    "jsPDF.addSvgAsImage: Invalid coordinates",
                    arguments
                  ),
                  new Error(
                    "Invalid coordinates passed to jsPDF.addSvgAsImage"
                  ))
                );
              if (isNaN(r) || isNaN(o))
                throw (
                  (l.error(
                    "jsPDF.addSvgAsImage: Invalid measurements",
                    arguments
                  ),
                  new Error(
                    "Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage"
                  ))
                );
              var d = document.createElement("canvas");
              (d.width = r), (d.height = o);
              var u = d.getContext("2d");
              (u.fillStyle = "#fff"), u.fillRect(0, 0, d.width, d.height);
              var p = {
                  ignoreMouse: !0,
                  ignoreAnimation: !0,
                  ignoreDimensions: !0,
                },
                h = this;
              return e()
                .then(
                  function (e) {
                    return e.fromString(u, t, p);
                  },
                  function () {
                    return Promise.reject(new Error("Could not load canvg."));
                  }
                )
                .then(function (t) {
                  return t.render(p);
                })
                .then(function () {
                  h.addImage(d.toDataURL("image/jpeg", 1), n, i, r, o, s, c);
                });
            };
          })(),
          (W.API.putTotalPages = function (t) {
            var e,
              n = 0;
            parseInt(this.internal.getFont().id.substr(1), 10) < 15
              ? ((e = new RegExp(t, "g")),
                (n = this.internal.getNumberOfPages()))
              : ((e = new RegExp(
                  this.pdfEscape16(t, this.internal.getFont()),
                  "g"
                )),
                (n = this.pdfEscape16(
                  this.internal.getNumberOfPages() + "",
                  this.internal.getFont()
                )));
            for (var i = 1; i <= this.internal.getNumberOfPages(); i++)
              for (var r = 0; r < this.internal.pages[i].length; r++)
                this.internal.pages[i][r] = this.internal.pages[i][r].replace(
                  e,
                  n
                );
            return this;
          }),
          (W.API.viewerPreferences = function (t, e) {
            var n;
            (t = t || {}), (e = e || !1);
            var i,
              o,
              a,
              s = {
                HideToolbar: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.3,
                },
                HideMenubar: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.3,
                },
                HideWindowUI: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.3,
                },
                FitWindow: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.3,
                },
                CenterWindow: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.3,
                },
                DisplayDocTitle: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.4,
                },
                NonFullScreenPageMode: {
                  defaultValue: "UseNone",
                  value: "UseNone",
                  type: "name",
                  explicitSet: !1,
                  valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                  pdfVersion: 1.3,
                },
                Direction: {
                  defaultValue: "L2R",
                  value: "L2R",
                  type: "name",
                  explicitSet: !1,
                  valueSet: ["L2R", "R2L"],
                  pdfVersion: 1.3,
                },
                ViewArea: {
                  defaultValue: "CropBox",
                  value: "CropBox",
                  type: "name",
                  explicitSet: !1,
                  valueSet: [
                    "MediaBox",
                    "CropBox",
                    "TrimBox",
                    "BleedBox",
                    "ArtBox",
                  ],
                  pdfVersion: 1.4,
                },
                ViewClip: {
                  defaultValue: "CropBox",
                  value: "CropBox",
                  type: "name",
                  explicitSet: !1,
                  valueSet: [
                    "MediaBox",
                    "CropBox",
                    "TrimBox",
                    "BleedBox",
                    "ArtBox",
                  ],
                  pdfVersion: 1.4,
                },
                PrintArea: {
                  defaultValue: "CropBox",
                  value: "CropBox",
                  type: "name",
                  explicitSet: !1,
                  valueSet: [
                    "MediaBox",
                    "CropBox",
                    "TrimBox",
                    "BleedBox",
                    "ArtBox",
                  ],
                  pdfVersion: 1.4,
                },
                PrintClip: {
                  defaultValue: "CropBox",
                  value: "CropBox",
                  type: "name",
                  explicitSet: !1,
                  valueSet: [
                    "MediaBox",
                    "CropBox",
                    "TrimBox",
                    "BleedBox",
                    "ArtBox",
                  ],
                  pdfVersion: 1.4,
                },
                PrintScaling: {
                  defaultValue: "AppDefault",
                  value: "AppDefault",
                  type: "name",
                  explicitSet: !1,
                  valueSet: ["AppDefault", "None"],
                  pdfVersion: 1.6,
                },
                Duplex: {
                  defaultValue: "",
                  value: "none",
                  type: "name",
                  explicitSet: !1,
                  valueSet: [
                    "Simplex",
                    "DuplexFlipShortEdge",
                    "DuplexFlipLongEdge",
                    "none",
                  ],
                  pdfVersion: 1.7,
                },
                PickTrayByPDFSize: {
                  defaultValue: !1,
                  value: !1,
                  type: "boolean",
                  explicitSet: !1,
                  valueSet: [!0, !1],
                  pdfVersion: 1.7,
                },
                PrintPageRange: {
                  defaultValue: "",
                  value: "",
                  type: "array",
                  explicitSet: !1,
                  valueSet: null,
                  pdfVersion: 1.7,
                },
                NumCopies: {
                  defaultValue: 1,
                  value: 1,
                  type: "integer",
                  explicitSet: !1,
                  valueSet: null,
                  pdfVersion: 1.7,
                },
              },
              l = Object.keys(s),
              c = [],
              d = 0,
              u = 0,
              p = 0;
            function h(t, e) {
              var n,
                i = !1;
              for (n = 0; n < t.length; n += 1) t[n] === e && (i = !0);
              return i;
            }
            if (
              (void 0 === this.internal.viewerpreferences &&
                ((this.internal.viewerpreferences = {}),
                (this.internal.viewerpreferences.configuration = JSON.parse(
                  JSON.stringify(s)
                )),
                (this.internal.viewerpreferences.isSubscribed = !1)),
              (n = this.internal.viewerpreferences.configuration),
              "reset" === t || !0 === e)
            ) {
              var f = l.length;
              for (p = 0; p < f; p += 1)
                (n[l[p]].value = n[l[p]].defaultValue),
                  (n[l[p]].explicitSet = !1);
            }
            if ("object" === r()(t))
              for (o in t)
                if (((a = t[o]), h(l, o) && void 0 !== a)) {
                  if ("boolean" === n[o].type && "boolean" == typeof a)
                    n[o].value = a;
                  else if ("name" === n[o].type && h(n[o].valueSet, a))
                    n[o].value = a;
                  else if ("integer" === n[o].type && Number.isInteger(a))
                    n[o].value = a;
                  else if ("array" === n[o].type) {
                    for (d = 0; d < a.length; d += 1)
                      if (
                        ((i = !0),
                        1 === a[d].length && "number" == typeof a[d][0])
                      )
                        c.push(String(a[d] - 1));
                      else if (a[d].length > 1) {
                        for (u = 0; u < a[d].length; u += 1)
                          "number" != typeof a[d][u] && (i = !1);
                        !0 === i &&
                          c.push([a[d][0] - 1, a[d][1] - 1].join(" "));
                      }
                    n[o].value = "[" + c.join(" ") + "]";
                  } else n[o].value = n[o].defaultValue;
                  n[o].explicitSet = !0;
                }
            return (
              !1 === this.internal.viewerpreferences.isSubscribed &&
                (this.internal.events.subscribe("putCatalog", function () {
                  var t,
                    e = [];
                  for (t in n)
                    !0 === n[t].explicitSet &&
                      ("name" === n[t].type
                        ? e.push("/" + t + " /" + n[t].value)
                        : e.push("/" + t + " " + n[t].value));
                  0 !== e.length &&
                    this.internal.write(
                      "/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>"
                    );
                }),
                (this.internal.viewerpreferences.isSubscribed = !0)),
              (this.internal.viewerpreferences.configuration = n),
              this
            );
          }),
          (function (t) {
            var e = function () {
                var t =
                    '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
                    this.internal.__metadata__.namespaceuri +
                    '"><jspdf:metadata>',
                  e = unescape(
                    encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')
                  ),
                  n = unescape(encodeURIComponent(t)),
                  i = unescape(
                    encodeURIComponent(this.internal.__metadata__.metadata)
                  ),
                  r = unescape(
                    encodeURIComponent(
                      "</jspdf:metadata></rdf:Description></rdf:RDF>"
                    )
                  ),
                  o = unescape(encodeURIComponent("</x:xmpmeta>")),
                  a = n.length + i.length + r.length + e.length + o.length;
                (this.internal.__metadata__.metadata_object_number =
                  this.internal.newObject()),
                  this.internal.write(
                    "<< /Type /Metadata /Subtype /XML /Length " + a + " >>"
                  ),
                  this.internal.write("stream"),
                  this.internal.write(e + n + i + r + o),
                  this.internal.write("endstream"),
                  this.internal.write("endobj");
              },
              n = function () {
                this.internal.__metadata__.metadata_object_number &&
                  this.internal.write(
                    "/Metadata " +
                      this.internal.__metadata__.metadata_object_number +
                      " 0 R"
                  );
              };
            t.addMetadata = function (t, i) {
              return (
                void 0 === this.internal.__metadata__ &&
                  ((this.internal.__metadata__ = {
                    metadata: t,
                    namespaceuri: i || "http://jspdf.default.namespaceuri/",
                  }),
                  this.internal.events.subscribe("putCatalog", n),
                  this.internal.events.subscribe("postPutResources", e)),
                this
              );
            };
          })(W.API),
          (function (t) {
            var e = t.API,
              n = (e.pdfEscape16 = function (t, e) {
                for (
                  var n,
                    i = e.metadata.Unicode.widths,
                    r = ["", "0", "00", "000", "0000"],
                    o = [""],
                    a = 0,
                    s = t.length;
                  a < s;
                  ++a
                ) {
                  if (
                    ((n = e.metadata.characterToGlyph(t.charCodeAt(a))),
                    e.metadata.glyIdsUsed.push(n),
                    (e.metadata.toUnicode[n] = t.charCodeAt(a)),
                    -1 == i.indexOf(n) &&
                      (i.push(n),
                      i.push([parseInt(e.metadata.widthOfGlyph(n), 10)])),
                    "0" == n)
                  )
                    return o.join("");
                  (n = n.toString(16)), o.push(r[4 - n.length], n);
                }
                return o.join("");
              }),
              i = function (t) {
                var e, n, i, r, o, a, s;
                for (
                  o =
                    "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
                    i = [],
                    a = 0,
                    s = (n = Object.keys(t).sort(function (t, e) {
                      return t - e;
                    })).length;
                  a < s;
                  a++
                )
                  (e = n[a]),
                    i.length >= 100 &&
                      ((o +=
                        "\n" +
                        i.length +
                        " beginbfchar\n" +
                        i.join("\n") +
                        "\nendbfchar"),
                      (i = [])),
                    void 0 !== t[e] &&
                      null !== t[e] &&
                      "function" == typeof t[e].toString &&
                      ((r = ("0000" + t[e].toString(16)).slice(-4)),
                      (e = ("0000" + (+e).toString(16)).slice(-4)),
                      i.push("<" + e + "><" + r + ">"));
                return (
                  i.length &&
                    (o +=
                      "\n" +
                      i.length +
                      " beginbfchar\n" +
                      i.join("\n") +
                      "\nendbfchar\n"),
                  o +
                    "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
                );
              };
            e.events.push([
              "putFont",
              function (e) {
                !(function (e) {
                  var n = e.font,
                    r = e.out,
                    o = e.newObject,
                    a = e.putStream;
                  if (
                    n.metadata instanceof t.API.TTFFont &&
                    "Identity-H" === n.encoding
                  ) {
                    for (
                      var s = n.metadata.Unicode.widths,
                        l = n.metadata.subset.encode(n.metadata.glyIdsUsed, 1),
                        c = "",
                        d = 0;
                      d < l.length;
                      d++
                    )
                      c += String.fromCharCode(l[d]);
                    var u = o();
                    a({ data: c, addLength1: !0, objectId: u }), r("endobj");
                    var p = o();
                    a({
                      data: i(n.metadata.toUnicode),
                      addLength1: !0,
                      objectId: p,
                    }),
                      r("endobj");
                    var h = o();
                    r("<<"),
                      r("/Type /FontDescriptor"),
                      r("/FontName /" + q(n.fontName)),
                      r("/FontFile2 " + u + " 0 R"),
                      r(
                        "/FontBBox " + t.API.PDFObject.convert(n.metadata.bbox)
                      ),
                      r("/Flags " + n.metadata.flags),
                      r("/StemV " + n.metadata.stemV),
                      r("/ItalicAngle " + n.metadata.italicAngle),
                      r("/Ascent " + n.metadata.ascender),
                      r("/Descent " + n.metadata.decender),
                      r("/CapHeight " + n.metadata.capHeight),
                      r(">>"),
                      r("endobj");
                    var f = o();
                    r("<<"),
                      r("/Type /Font"),
                      r("/BaseFont /" + q(n.fontName)),
                      r("/FontDescriptor " + h + " 0 R"),
                      r("/W " + t.API.PDFObject.convert(s)),
                      r("/CIDToGIDMap /Identity"),
                      r("/DW 1000"),
                      r("/Subtype /CIDFontType2"),
                      r("/CIDSystemInfo"),
                      r("<<"),
                      r("/Supplement 0"),
                      r("/Registry (Adobe)"),
                      r("/Ordering (" + n.encoding + ")"),
                      r(">>"),
                      r(">>"),
                      r("endobj"),
                      (n.objectNumber = o()),
                      r("<<"),
                      r("/Type /Font"),
                      r("/Subtype /Type0"),
                      r("/ToUnicode " + p + " 0 R"),
                      r("/BaseFont /" + q(n.fontName)),
                      r("/Encoding /" + n.encoding),
                      r("/DescendantFonts [" + f + " 0 R]"),
                      r(">>"),
                      r("endobj"),
                      (n.isAlreadyPutted = !0);
                  }
                })(e);
              },
            ]),
              e.events.push([
                "putFont",
                function (e) {
                  !(function (e) {
                    var n = e.font,
                      r = e.out,
                      o = e.newObject,
                      a = e.putStream;
                    if (
                      n.metadata instanceof t.API.TTFFont &&
                      "WinAnsiEncoding" === n.encoding
                    ) {
                      for (
                        var s = n.metadata.rawData, l = "", c = 0;
                        c < s.length;
                        c++
                      )
                        l += String.fromCharCode(s[c]);
                      var d = o();
                      a({ data: l, addLength1: !0, objectId: d }), r("endobj");
                      var u = o();
                      a({
                        data: i(n.metadata.toUnicode),
                        addLength1: !0,
                        objectId: u,
                      }),
                        r("endobj");
                      var p = o();
                      r("<<"),
                        r("/Descent " + n.metadata.decender),
                        r("/CapHeight " + n.metadata.capHeight),
                        r("/StemV " + n.metadata.stemV),
                        r("/Type /FontDescriptor"),
                        r("/FontFile2 " + d + " 0 R"),
                        r("/Flags 96"),
                        r(
                          "/FontBBox " +
                            t.API.PDFObject.convert(n.metadata.bbox)
                        ),
                        r("/FontName /" + q(n.fontName)),
                        r("/ItalicAngle " + n.metadata.italicAngle),
                        r("/Ascent " + n.metadata.ascender),
                        r(">>"),
                        r("endobj"),
                        (n.objectNumber = o());
                      for (var h = 0; h < n.metadata.hmtx.widths.length; h++)
                        n.metadata.hmtx.widths[h] = parseInt(
                          n.metadata.hmtx.widths[h] *
                            (1e3 / n.metadata.head.unitsPerEm)
                        );
                      r(
                        "<</Subtype/TrueType/Type/Font/ToUnicode " +
                          u +
                          " 0 R/BaseFont/" +
                          q(n.fontName) +
                          "/FontDescriptor " +
                          p +
                          " 0 R/Encoding/" +
                          n.encoding +
                          " /FirstChar 29 /LastChar 255 /Widths " +
                          t.API.PDFObject.convert(n.metadata.hmtx.widths) +
                          ">>"
                      ),
                        r("endobj"),
                        (n.isAlreadyPutted = !0);
                    }
                  })(e);
                },
              ]);
            var r = function (t) {
              var e,
                i = t.text || "",
                r = t.x,
                o = t.y,
                a = t.options || {},
                s = t.mutex || {},
                l = s.pdfEscape,
                c = s.activeFontKey,
                d = s.fonts,
                u = c,
                p = "",
                h = 0,
                f = "",
                b = d[u].encoding;
              if ("Identity-H" !== d[u].encoding)
                return { text: i, x: r, y: o, options: a, mutex: s };
              for (
                f = i, u = c, Array.isArray(i) && (f = i[0]), h = 0;
                h < f.length;
                h += 1
              )
                d[u].metadata.hasOwnProperty("cmap") &&
                  (e = d[u].metadata.cmap.unicode.codeMap[f[h].charCodeAt(0)]),
                  e ||
                  (f[h].charCodeAt(0) < 256 &&
                    d[u].metadata.hasOwnProperty("Unicode"))
                    ? (p += f[h])
                    : (p += "");
              var m = "";
              return (
                parseInt(u.slice(1)) < 14 || "WinAnsiEncoding" === b
                  ? (m = l(p, u)
                      .split("")
                      .map(function (t) {
                        return t.charCodeAt(0).toString(16);
                      })
                      .join(""))
                  : "Identity-H" === b && (m = n(p, d[u])),
                (s.isHex = !0),
                { text: m, x: r, y: o, options: a, mutex: s }
              );
            };
            e.events.push([
              "postProcessText",
              function (t) {
                var e = t.text || "",
                  n = [],
                  i = {
                    text: e,
                    x: t.x,
                    y: t.y,
                    options: t.options,
                    mutex: t.mutex,
                  };
                if (Array.isArray(e)) {
                  var o = 0;
                  for (o = 0; o < e.length; o += 1)
                    Array.isArray(e[o]) && 3 === e[o].length
                      ? n.push([
                          r(Object.assign({}, i, { text: e[o][0] })).text,
                          e[o][1],
                          e[o][2],
                        ])
                      : n.push(r(Object.assign({}, i, { text: e[o] })).text);
                  t.text = n;
                } else t.text = r(Object.assign({}, i, { text: e })).text;
              },
            ]);
          })(W),
          (function (t) {
            var e = function () {
              return (
                void 0 === this.internal.vFS && (this.internal.vFS = {}), !0
              );
            };
            (t.existsFileInVFS = function (t) {
              return e.call(this), void 0 !== this.internal.vFS[t];
            }),
              (t.addFileToVFS = function (t, n) {
                return e.call(this), (this.internal.vFS[t] = n), this;
              }),
              (t.getFileFromVFS = function (t) {
                return (
                  e.call(this),
                  void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
                );
              });
          })(W.API),
          (function (t) {
            t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (t) {
              var n,
                i,
                r,
                o,
                a,
                s,
                l,
                c = e,
                d = [
                  [0, 3, 0, 1, 0, 0, 0],
                  [0, 3, 0, 1, 2, 2, 0],
                  [0, 3, 0, 17, 2, 0, 1],
                  [0, 3, 5, 5, 4, 1, 0],
                  [0, 3, 21, 21, 4, 0, 1],
                  [0, 3, 5, 5, 4, 2, 0],
                ],
                u = [
                  [2, 0, 1, 1, 0, 1, 0],
                  [2, 0, 1, 1, 0, 2, 0],
                  [2, 0, 2, 1, 3, 2, 0],
                  [2, 0, 2, 33, 3, 1, 1],
                ],
                p = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
                h = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
                f = [
                  "(",
                  ")",
                  "(",
                  "<",
                  ">",
                  "<",
                  "[",
                  "]",
                  "[",
                  "{",
                  "}",
                  "{",
                  "«",
                  "»",
                  "«",
                  "‹",
                  "›",
                  "‹",
                  "⁅",
                  "⁆",
                  "⁅",
                  "⁽",
                  "⁾",
                  "⁽",
                  "₍",
                  "₎",
                  "₍",
                  "≤",
                  "≥",
                  "≤",
                  "〈",
                  "〉",
                  "〈",
                  "﹙",
                  "﹚",
                  "﹙",
                  "﹛",
                  "﹜",
                  "﹛",
                  "﹝",
                  "﹞",
                  "﹝",
                  "﹤",
                  "﹥",
                  "﹤",
                ],
                b = new RegExp(
                  /^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/
                ),
                m = !1,
                g = 0;
              this.__bidiEngine__ = {};
              var v = function (t) {
                  var e = t.charCodeAt(),
                    n = e >> 8,
                    i = h[n];
                  return void 0 !== i
                    ? c[256 * i + (255 & e)]
                    : 252 === n || 253 === n
                    ? "AL"
                    : b.test(n)
                    ? "L"
                    : 8 === n
                    ? "R"
                    : "N";
                },
                _ = function (t) {
                  for (var e, n = 0; n < t.length; n++) {
                    if ("L" === (e = v(t.charAt(n)))) return !1;
                    if ("R" === e) return !0;
                  }
                  return !1;
                },
                y = function (t, e, a, s) {
                  var l,
                    c,
                    d,
                    u,
                    p = e[s];
                  switch (p) {
                    case "L":
                    case "R":
                      m = !1;
                      break;
                    case "N":
                    case "AN":
                      break;
                    case "EN":
                      m && (p = "AN");
                      break;
                    case "AL":
                      (m = !0), (p = "R");
                      break;
                    case "WS":
                      p = "N";
                      break;
                    case "CS":
                      s < 1 ||
                      s + 1 >= e.length ||
                      ("EN" !== (l = a[s - 1]) && "AN" !== l) ||
                      ("EN" !== (c = e[s + 1]) && "AN" !== c)
                        ? (p = "N")
                        : m && (c = "AN"),
                        (p = c === l ? c : "N");
                      break;
                    case "ES":
                      p =
                        "EN" === (l = s > 0 ? a[s - 1] : "B") &&
                        s + 1 < e.length &&
                        "EN" === e[s + 1]
                          ? "EN"
                          : "N";
                      break;
                    case "ET":
                      if (s > 0 && "EN" === a[s - 1]) {
                        p = "EN";
                        break;
                      }
                      if (m) {
                        p = "N";
                        break;
                      }
                      for (d = s + 1, u = e.length; d < u && "ET" === e[d]; )
                        d++;
                      p = d < u && "EN" === e[d] ? "EN" : "N";
                      break;
                    case "NSM":
                      if (r && !o) {
                        for (u = e.length, d = s + 1; d < u && "NSM" === e[d]; )
                          d++;
                        if (d < u) {
                          var h = t[s],
                            f = (h >= 1425 && h <= 2303) || 64286 === h;
                          if (((l = e[d]), f && ("R" === l || "AL" === l))) {
                            p = "R";
                            break;
                          }
                        }
                      }
                      p = s < 1 || "B" === (l = e[s - 1]) ? "N" : a[s - 1];
                      break;
                    case "B":
                      (m = !1), (n = !0), (p = g);
                      break;
                    case "S":
                      (i = !0), (p = "N");
                      break;
                    case "LRE":
                    case "RLE":
                    case "LRO":
                    case "RLO":
                    case "PDF":
                      m = !1;
                      break;
                    case "BN":
                      p = "N";
                  }
                  return p;
                },
                M = function (t, e, n) {
                  var i = t.split("");
                  return (
                    n && O(i, n, { hiLevel: g }),
                    i.reverse(),
                    e && e.reverse(),
                    i.join("")
                  );
                },
                O = function (t, e, r) {
                  var o,
                    a,
                    s,
                    l,
                    c,
                    h = -1,
                    f = t.length,
                    b = 0,
                    _ = [],
                    M = g ? u : d,
                    O = [];
                  for (m = !1, n = !1, i = !1, a = 0; a < f; a++)
                    O[a] = v(t[a]);
                  for (s = 0; s < f; s++) {
                    if (
                      ((c = b),
                      (_[s] = y(t, O, _, s)),
                      (o = 240 & (b = M[c][p[_[s]]])),
                      (b &= 15),
                      (e[s] = l = M[b][5]),
                      o > 0)
                    )
                      if (16 === o) {
                        for (a = h; a < s; a++) e[a] = 1;
                        h = -1;
                      } else h = -1;
                    if (M[b][6]) -1 === h && (h = s);
                    else if (h > -1) {
                      for (a = h; a < s; a++) e[a] = l;
                      h = -1;
                    }
                    "B" === O[s] && (e[s] = 0), (r.hiLevel |= l);
                  }
                  i &&
                    (function (t, e, n) {
                      for (var i = 0; i < n; i++)
                        if ("S" === t[i]) {
                          e[i] = g;
                          for (var r = i - 1; r >= 0 && "WS" === t[r]; r--)
                            e[r] = g;
                        }
                    })(O, e, f);
                },
                w = function (t, e, i, r, o) {
                  if (!(o.hiLevel < t)) {
                    if (1 === t && 1 === g && !n)
                      return e.reverse(), void (i && i.reverse());
                    for (var a, s, l, c, d = e.length, u = 0; u < d; ) {
                      if (r[u] >= t) {
                        for (l = u + 1; l < d && r[l] >= t; ) l++;
                        for (c = u, s = l - 1; c < s; c++, s--)
                          (a = e[c]),
                            (e[c] = e[s]),
                            (e[s] = a),
                            i && ((a = i[c]), (i[c] = i[s]), (i[s] = a));
                        u = l;
                      }
                      u++;
                    }
                  }
                },
                A = function (t, e, n) {
                  var i = t.split(""),
                    r = { hiLevel: g };
                  return (
                    n || (n = []),
                    O(i, n, r),
                    (function (t, e, n) {
                      if (0 !== n.hiLevel && l)
                        for (var i, r = 0; r < t.length; r++)
                          1 === e[r] &&
                            (i = f.indexOf(t[r])) >= 0 &&
                            (t[r] = f[i + 1]);
                    })(i, n, r),
                    w(2, i, e, n, r),
                    w(1, i, e, n, r),
                    i.join("")
                  );
                };
              return (
                (this.__bidiEngine__.doBidiReorder = function (t, e, n) {
                  if (
                    ((function (t, e) {
                      if (e) for (var n = 0; n < t.length; n++) e[n] = n;
                      void 0 === o && (o = _(t)), void 0 === s && (s = _(t));
                    })(t, e),
                    r || !a || s)
                  )
                    if (r && a && o ^ s) (g = o ? 1 : 0), (t = M(t, e, n));
                    else if (!r && a && s)
                      (g = o ? 1 : 0), (t = A(t, e, n)), (t = M(t, e));
                    else if (!r || o || a || s) {
                      if (r && !a && o ^ s)
                        (t = M(t, e)),
                          o
                            ? ((g = 0), (t = A(t, e, n)))
                            : ((g = 1), (t = A(t, e, n)), (t = M(t, e)));
                      else if (r && o && !a && s)
                        (g = 1), (t = A(t, e, n)), (t = M(t, e));
                      else if (!r && !a && o ^ s) {
                        var i = l;
                        o
                          ? ((g = 1),
                            (t = A(t, e, n)),
                            (g = 0),
                            (l = !1),
                            (t = A(t, e, n)),
                            (l = i))
                          : ((g = 0),
                            (t = A(t, e, n)),
                            (t = M(t, e)),
                            (g = 1),
                            (l = !1),
                            (t = A(t, e, n)),
                            (l = i),
                            (t = M(t, e)));
                      }
                    } else (g = 0), (t = A(t, e, n));
                  else (g = o ? 1 : 0), (t = A(t, e, n));
                  return t;
                }),
                (this.__bidiEngine__.setOptions = function (t) {
                  t &&
                    ((r = t.isInputVisual),
                    (a = t.isOutputVisual),
                    (o = t.isInputRtl),
                    (s = t.isOutputRtl),
                    (l = t.isSymmetricSwapping));
                }),
                this.__bidiEngine__.setOptions(t),
                this.__bidiEngine__
              );
            };
            var e = [
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "S",
                "B",
                "S",
                "WS",
                "B",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "B",
                "B",
                "B",
                "S",
                "WS",
                "N",
                "N",
                "ET",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "ES",
                "CS",
                "ES",
                "CS",
                "CS",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "CS",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "B",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "CS",
                "N",
                "ET",
                "ET",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "L",
                "N",
                "N",
                "BN",
                "N",
                "N",
                "ET",
                "ET",
                "EN",
                "EN",
                "N",
                "L",
                "N",
                "N",
                "N",
                "EN",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "ET",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "R",
                "NSM",
                "R",
                "NSM",
                "NSM",
                "R",
                "NSM",
                "NSM",
                "R",
                "NSM",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "N",
                "N",
                "N",
                "N",
                "N",
                "R",
                "R",
                "R",
                "R",
                "R",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "N",
                "N",
                "AL",
                "ET",
                "ET",
                "AL",
                "CS",
                "AL",
                "N",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AL",
                "AL",
                "N",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "AN",
                "ET",
                "AN",
                "AN",
                "AL",
                "AL",
                "AL",
                "NSM",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AN",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AL",
                "AL",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "N",
                "AL",
                "AL",
                "NSM",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "N",
                "N",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "AL",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "R",
                "R",
                "N",
                "N",
                "N",
                "N",
                "R",
                "N",
                "N",
                "N",
                "N",
                "N",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "WS",
                "BN",
                "BN",
                "BN",
                "L",
                "R",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "WS",
                "B",
                "LRE",
                "RLE",
                "PDF",
                "LRO",
                "RLO",
                "CS",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "CS",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "WS",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "N",
                "LRI",
                "RLI",
                "FSI",
                "PDI",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "BN",
                "EN",
                "L",
                "N",
                "N",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "ES",
                "ES",
                "N",
                "N",
                "N",
                "L",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "ES",
                "ES",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "R",
                "NSM",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "ES",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "N",
                "R",
                "R",
                "R",
                "R",
                "R",
                "N",
                "R",
                "N",
                "R",
                "R",
                "N",
                "R",
                "R",
                "N",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "R",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "NSM",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "CS",
                "N",
                "CS",
                "N",
                "N",
                "CS",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "ET",
                "N",
                "N",
                "ES",
                "ES",
                "N",
                "N",
                "N",
                "N",
                "N",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "N",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "AL",
                "N",
                "N",
                "BN",
                "N",
                "N",
                "N",
                "ET",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "ES",
                "CS",
                "ES",
                "CS",
                "CS",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "EN",
                "CS",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "L",
                "L",
                "L",
                "L",
                "L",
                "L",
                "N",
                "N",
                "L",
                "L",
                "L",
                "N",
                "N",
                "N",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "ET",
                "ET",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
                "N",
              ],
              n = new t.__bidiEngine__({ isInputVisual: !0 });
            t.API.events.push([
              "postProcessText",
              function (t) {
                var e = t.text,
                  i = (t.x, t.y, t.options || {}),
                  r = (t.mutex, i.lang, []);
                if (
                  ((i.isInputVisual =
                    "boolean" != typeof i.isInputVisual || i.isInputVisual),
                  n.setOptions(i),
                  "[object Array]" === Object.prototype.toString.call(e))
                ) {
                  var o = 0;
                  for (r = [], o = 0; o < e.length; o += 1)
                    "[object Array]" === Object.prototype.toString.call(e[o])
                      ? r.push([n.doBidiReorder(e[o][0]), e[o][1], e[o][2]])
                      : r.push([n.doBidiReorder(e[o])]);
                  t.text = r;
                } else t.text = n.doBidiReorder(e);
                n.setOptions({ isInputVisual: !0 });
              },
            ]);
          })(W),
          (W.API.TTFFont = (function () {
            function t(t) {
              var e;
              if (
                ((this.rawData = t),
                (e = this.contents = new oe(t)),
                (this.contents.pos = 4),
                "ttcf" === e.readString(4))
              )
                throw new Error("TTCF not supported.");
              (e.pos = 0),
                this.parse(),
                (this.subset = new Ae(this)),
                this.registerTTF();
            }
            return (
              (t.open = function (e) {
                return new t(e);
              }),
              (t.prototype.parse = function () {
                return (
                  (this.directory = new ae(this.contents)),
                  (this.head = new ce(this)),
                  (this.name = new me(this)),
                  (this.cmap = new ue(this)),
                  (this.toUnicode = {}),
                  (this.hhea = new pe(this)),
                  (this.maxp = new ge(this)),
                  (this.hmtx = new ve(this)),
                  (this.post = new fe(this)),
                  (this.os2 = new he(this)),
                  (this.loca = new we(this)),
                  (this.glyf = new ye(this)),
                  (this.ascender =
                    (this.os2.exists && this.os2.ascender) ||
                    this.hhea.ascender),
                  (this.decender =
                    (this.os2.exists && this.os2.decender) ||
                    this.hhea.decender),
                  (this.lineGap =
                    (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
                  (this.bbox = [
                    this.head.xMin,
                    this.head.yMin,
                    this.head.xMax,
                    this.head.yMax,
                  ])
                );
              }),
              (t.prototype.registerTTF = function () {
                var t, e, n, i, r;
                if (
                  ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
                  (this.bbox = function () {
                    var e, n, i, r;
                    for (r = [], e = 0, n = (i = this.bbox).length; e < n; e++)
                      (t = i[e]), r.push(Math.round(t * this.scaleFactor));
                    return r;
                  }.call(this)),
                  (this.stemV = 0),
                  this.post.exists
                    ? ((n = 255 & (i = this.post.italic_angle)),
                      0 != (32768 & (e = i >> 16)) && (e = -(1 + (65535 ^ e))),
                      (this.italicAngle = +(e + "." + n)))
                    : (this.italicAngle = 0),
                  (this.ascender = Math.round(
                    this.ascender * this.scaleFactor
                  )),
                  (this.decender = Math.round(
                    this.decender * this.scaleFactor
                  )),
                  (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
                  (this.capHeight =
                    (this.os2.exists && this.os2.capHeight) || this.ascender),
                  (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
                  (this.familyClass =
                    ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
                  (this.isSerif =
                    1 === (r = this.familyClass) ||
                    2 === r ||
                    3 === r ||
                    4 === r ||
                    5 === r ||
                    7 === r),
                  (this.isScript = 10 === this.familyClass),
                  (this.flags = 0),
                  this.post.isFixedPitch && (this.flags |= 1),
                  this.isSerif && (this.flags |= 2),
                  this.isScript && (this.flags |= 8),
                  0 !== this.italicAngle && (this.flags |= 64),
                  (this.flags |= 32),
                  !this.cmap.unicode)
                )
                  throw new Error("No unicode cmap for font");
              }),
              (t.prototype.characterToGlyph = function (t) {
                var e;
                return (
                  (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0
                );
              }),
              (t.prototype.widthOfGlyph = function (t) {
                var e;
                return (
                  (e = 1e3 / this.head.unitsPerEm),
                  this.hmtx.forGlyph(t).advance * e
                );
              }),
              (t.prototype.widthOfString = function (t, e, n) {
                var i, r, o, a;
                for (
                  o = 0, r = 0, a = (t = "" + t).length;
                  0 <= a ? r < a : r > a;
                  r = 0 <= a ? ++r : --r
                )
                  (i = t.charCodeAt(r)),
                    (o +=
                      this.widthOfGlyph(this.characterToGlyph(i)) +
                        n * (1e3 / e) || 0);
                return o * (e / 1e3);
              }),
              (t.prototype.lineHeight = function (t, e) {
                var n;
                return (
                  null == e && (e = !1),
                  (n = e ? this.lineGap : 0),
                  ((this.ascender + n - this.decender) / 1e3) * t
                );
              }),
              t
            );
          })());
        var re,
          oe = (function () {
            function t(t) {
              (this.data = null != t ? t : []),
                (this.pos = 0),
                (this.length = this.data.length);
            }
            return (
              (t.prototype.readByte = function () {
                return this.data[this.pos++];
              }),
              (t.prototype.writeByte = function (t) {
                return (this.data[this.pos++] = t);
              }),
              (t.prototype.readUInt32 = function () {
                return (
                  16777216 * this.readByte() +
                  (this.readByte() << 16) +
                  (this.readByte() << 8) +
                  this.readByte()
                );
              }),
              (t.prototype.writeUInt32 = function (t) {
                return (
                  this.writeByte((t >>> 24) & 255),
                  this.writeByte((t >> 16) & 255),
                  this.writeByte((t >> 8) & 255),
                  this.writeByte(255 & t)
                );
              }),
              (t.prototype.readInt32 = function () {
                var t;
                return (t = this.readUInt32()) >= 2147483648
                  ? t - 4294967296
                  : t;
              }),
              (t.prototype.writeInt32 = function (t) {
                return t < 0 && (t += 4294967296), this.writeUInt32(t);
              }),
              (t.prototype.readUInt16 = function () {
                return (this.readByte() << 8) | this.readByte();
              }),
              (t.prototype.writeUInt16 = function (t) {
                return this.writeByte((t >> 8) & 255), this.writeByte(255 & t);
              }),
              (t.prototype.readInt16 = function () {
                var t;
                return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
              }),
              (t.prototype.writeInt16 = function (t) {
                return t < 0 && (t += 65536), this.writeUInt16(t);
              }),
              (t.prototype.readString = function (t) {
                var e, n;
                for (
                  n = [], e = 0;
                  0 <= t ? e < t : e > t;
                  e = 0 <= t ? ++e : --e
                )
                  n[e] = String.fromCharCode(this.readByte());
                return n.join("");
              }),
              (t.prototype.writeString = function (t) {
                var e, n, i;
                for (
                  i = [], e = 0, n = t.length;
                  0 <= n ? e < n : e > n;
                  e = 0 <= n ? ++e : --e
                )
                  i.push(this.writeByte(t.charCodeAt(e)));
                return i;
              }),
              (t.prototype.readShort = function () {
                return this.readInt16();
              }),
              (t.prototype.writeShort = function (t) {
                return this.writeInt16(t);
              }),
              (t.prototype.readLongLong = function () {
                var t, e, n, i, r, o, a, s;
                return (
                  (t = this.readByte()),
                  (e = this.readByte()),
                  (n = this.readByte()),
                  (i = this.readByte()),
                  (r = this.readByte()),
                  (o = this.readByte()),
                  (a = this.readByte()),
                  (s = this.readByte()),
                  128 & t
                    ? -1 *
                      (72057594037927940 * (255 ^ t) +
                        281474976710656 * (255 ^ e) +
                        1099511627776 * (255 ^ n) +
                        4294967296 * (255 ^ i) +
                        16777216 * (255 ^ r) +
                        65536 * (255 ^ o) +
                        256 * (255 ^ a) +
                        (255 ^ s) +
                        1)
                    : 72057594037927940 * t +
                      281474976710656 * e +
                      1099511627776 * n +
                      4294967296 * i +
                      16777216 * r +
                      65536 * o +
                      256 * a +
                      s
                );
              }),
              (t.prototype.writeLongLong = function (t) {
                var e, n;
                return (
                  (e = Math.floor(t / 4294967296)),
                  (n = 4294967295 & t),
                  this.writeByte((e >> 24) & 255),
                  this.writeByte((e >> 16) & 255),
                  this.writeByte((e >> 8) & 255),
                  this.writeByte(255 & e),
                  this.writeByte((n >> 24) & 255),
                  this.writeByte((n >> 16) & 255),
                  this.writeByte((n >> 8) & 255),
                  this.writeByte(255 & n)
                );
              }),
              (t.prototype.readInt = function () {
                return this.readInt32();
              }),
              (t.prototype.writeInt = function (t) {
                return this.writeInt32(t);
              }),
              (t.prototype.read = function (t) {
                var e, n;
                for (
                  e = [], n = 0;
                  0 <= t ? n < t : n > t;
                  n = 0 <= t ? ++n : --n
                )
                  e.push(this.readByte());
                return e;
              }),
              (t.prototype.write = function (t) {
                var e, n, i, r;
                for (r = [], n = 0, i = t.length; n < i; n++)
                  (e = t[n]), r.push(this.writeByte(e));
                return r;
              }),
              t
            );
          })(),
          ae = (function () {
            var t;
            function e(t) {
              var e, n, i;
              for (
                this.scalarType = t.readInt(),
                  this.tableCount = t.readShort(),
                  this.searchRange = t.readShort(),
                  this.entrySelector = t.readShort(),
                  this.rangeShift = t.readShort(),
                  this.tables = {},
                  n = 0,
                  i = this.tableCount;
                0 <= i ? n < i : n > i;
                n = 0 <= i ? ++n : --n
              )
                (e = {
                  tag: t.readString(4),
                  checksum: t.readInt(),
                  offset: t.readInt(),
                  length: t.readInt(),
                }),
                  (this.tables[e.tag] = e);
            }
            return (
              (e.prototype.encode = function (e) {
                var n, i, r, o, a, s, l, c, d, u, p, h, f;
                for (f in ((p = Object.keys(e).length),
                (s = Math.log(2)),
                (d = 16 * Math.floor(Math.log(p) / s)),
                (o = Math.floor(d / s)),
                (c = 16 * p - d),
                (i = new oe()).writeInt(this.scalarType),
                i.writeShort(p),
                i.writeShort(d),
                i.writeShort(o),
                i.writeShort(c),
                (r = 16 * p),
                (l = i.pos + r),
                (a = null),
                (h = []),
                e))
                  for (
                    u = e[f],
                      i.writeString(f),
                      i.writeInt(t(u)),
                      i.writeInt(l),
                      i.writeInt(u.length),
                      h = h.concat(u),
                      "head" === f && (a = l),
                      l += u.length;
                    l % 4;

                  )
                    h.push(0), l++;
                return (
                  i.write(h),
                  (n = 2981146554 - t(i.data)),
                  (i.pos = a + 8),
                  i.writeUInt32(n),
                  i.data
                );
              }),
              (t = function (t) {
                var e, n, i, r;
                for (t = _e.call(t); t.length % 4; ) t.push(0);
                for (
                  i = new oe(t), n = 0, e = 0, r = t.length;
                  e < r;
                  e = e += 4
                )
                  n += i.readUInt32();
                return 4294967295 & n;
              }),
              e
            );
          })(),
          se = {}.hasOwnProperty,
          le = function (t, e) {
            for (var n in e) se.call(e, n) && (t[n] = e[n]);
            function i() {
              this.constructor = t;
            }
            return (
              (i.prototype = e.prototype),
              (t.prototype = new i()),
              (t.__super__ = e.prototype),
              t
            );
          };
        re = (function () {
          function t(t) {
            var e;
            (this.file = t),
              (e = this.file.directory.tables[this.tag]),
              (this.exists = !!e),
              e &&
                ((this.offset = e.offset),
                (this.length = e.length),
                this.parse(this.file.contents));
          }
          return (
            (t.prototype.parse = function () {}),
            (t.prototype.encode = function () {}),
            (t.prototype.raw = function () {
              return this.exists
                ? ((this.file.contents.pos = this.offset),
                  this.file.contents.read(this.length))
                : null;
            }),
            t
          );
        })();
        var ce = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "head"),
              (e.prototype.parse = function (t) {
                return (
                  (t.pos = this.offset),
                  (this.version = t.readInt()),
                  (this.revision = t.readInt()),
                  (this.checkSumAdjustment = t.readInt()),
                  (this.magicNumber = t.readInt()),
                  (this.flags = t.readShort()),
                  (this.unitsPerEm = t.readShort()),
                  (this.created = t.readLongLong()),
                  (this.modified = t.readLongLong()),
                  (this.xMin = t.readShort()),
                  (this.yMin = t.readShort()),
                  (this.xMax = t.readShort()),
                  (this.yMax = t.readShort()),
                  (this.macStyle = t.readShort()),
                  (this.lowestRecPPEM = t.readShort()),
                  (this.fontDirectionHint = t.readShort()),
                  (this.indexToLocFormat = t.readShort()),
                  (this.glyphDataFormat = t.readShort())
                );
              }),
              (e.prototype.encode = function (t) {
                var e;
                return (
                  (e = new oe()).writeInt(this.version),
                  e.writeInt(this.revision),
                  e.writeInt(this.checkSumAdjustment),
                  e.writeInt(this.magicNumber),
                  e.writeShort(this.flags),
                  e.writeShort(this.unitsPerEm),
                  e.writeLongLong(this.created),
                  e.writeLongLong(this.modified),
                  e.writeShort(this.xMin),
                  e.writeShort(this.yMin),
                  e.writeShort(this.xMax),
                  e.writeShort(this.yMax),
                  e.writeShort(this.macStyle),
                  e.writeShort(this.lowestRecPPEM),
                  e.writeShort(this.fontDirectionHint),
                  e.writeShort(t),
                  e.writeShort(this.glyphDataFormat),
                  e.data
                );
              }),
              e
            );
          })(),
          de = (function () {
            function t(t, e) {
              var n, i, r, o, a, s, l, c, d, u, p, h, f, b, m, g, v;
              switch (
                ((this.platformID = t.readUInt16()),
                (this.encodingID = t.readShort()),
                (this.offset = e + t.readInt()),
                (d = t.pos),
                (t.pos = this.offset),
                (this.format = t.readUInt16()),
                (this.length = t.readUInt16()),
                (this.language = t.readUInt16()),
                (this.isUnicode =
                  (3 === this.platformID &&
                    1 === this.encodingID &&
                    4 === this.format) ||
                  (0 === this.platformID && 4 === this.format)),
                (this.codeMap = {}),
                this.format)
              ) {
                case 0:
                  for (s = 0; s < 256; ++s) this.codeMap[s] = t.readByte();
                  break;
                case 4:
                  for (
                    p = t.readUInt16(),
                      u = p / 2,
                      t.pos += 6,
                      r = (function () {
                        var e, n;
                        for (
                          n = [], s = e = 0;
                          0 <= u ? e < u : e > u;
                          s = 0 <= u ? ++e : --e
                        )
                          n.push(t.readUInt16());
                        return n;
                      })(),
                      t.pos += 2,
                      f = (function () {
                        var e, n;
                        for (
                          n = [], s = e = 0;
                          0 <= u ? e < u : e > u;
                          s = 0 <= u ? ++e : --e
                        )
                          n.push(t.readUInt16());
                        return n;
                      })(),
                      l = (function () {
                        var e, n;
                        for (
                          n = [], s = e = 0;
                          0 <= u ? e < u : e > u;
                          s = 0 <= u ? ++e : --e
                        )
                          n.push(t.readUInt16());
                        return n;
                      })(),
                      c = (function () {
                        var e, n;
                        for (
                          n = [], s = e = 0;
                          0 <= u ? e < u : e > u;
                          s = 0 <= u ? ++e : --e
                        )
                          n.push(t.readUInt16());
                        return n;
                      })(),
                      i = (this.length - t.pos + this.offset) / 2,
                      a = (function () {
                        var e, n;
                        for (
                          n = [], s = e = 0;
                          0 <= i ? e < i : e > i;
                          s = 0 <= i ? ++e : --e
                        )
                          n.push(t.readUInt16());
                        return n;
                      })(),
                      s = m = 0,
                      v = r.length;
                    m < v;
                    s = ++m
                  )
                    for (
                      b = r[s], n = g = h = f[s];
                      h <= b ? g <= b : g >= b;
                      n = h <= b ? ++g : --g
                    )
                      0 === c[s]
                        ? (o = n + l[s])
                        : 0 !== (o = a[c[s] / 2 + (n - h) - (u - s)] || 0) &&
                          (o += l[s]),
                        (this.codeMap[n] = 65535 & o);
              }
              t.pos = d;
            }
            return (
              (t.encode = function (t, e) {
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
                  k,
                  S,
                  T,
                  D,
                  L,
                  q,
                  E,
                  j,
                  P,
                  R,
                  I,
                  W,
                  N,
                  B,
                  F,
                  $,
                  H,
                  Y,
                  U,
                  X;
                switch (
                  ((S = new oe()),
                  (o = Object.keys(t).sort(function (t, e) {
                    return t - e;
                  })),
                  e)
                ) {
                  case "macroman":
                    for (
                      f = 0,
                        b = (function () {
                          var t = [];
                          for (h = 0; h < 256; ++h) t.push(0);
                          return t;
                        })(),
                        g = { 0: 0 },
                        r = {},
                        T = 0,
                        E = o.length;
                      T < E;
                      T++
                    )
                      null == g[(H = t[(i = o[T])])] && (g[H] = ++f),
                        (r[i] = { old: t[i], new: g[t[i]] }),
                        (b[i] = g[t[i]]);
                    return (
                      S.writeUInt16(1),
                      S.writeUInt16(0),
                      S.writeUInt32(12),
                      S.writeUInt16(0),
                      S.writeUInt16(262),
                      S.writeUInt16(0),
                      S.write(b),
                      { charMap: r, subtable: S.data, maxGlyphID: f + 1 }
                    );
                  case "unicode":
                    for (
                      C = [],
                        d = [],
                        v = 0,
                        g = {},
                        n = {},
                        m = l = null,
                        D = 0,
                        j = o.length;
                      D < j;
                      D++
                    )
                      null == g[(y = t[(i = o[D])])] && (g[y] = ++v),
                        (n[i] = { old: y, new: g[y] }),
                        (a = g[y] - i),
                        (null != m && a === l) ||
                          (m && d.push(m), C.push(i), (l = a)),
                        (m = i);
                    for (
                      m && d.push(m),
                        d.push(65535),
                        C.push(65535),
                        x = 2 * (A = C.length),
                        w = 2 * Math.pow(Math.log(A) / Math.LN2, 2),
                        u = Math.log(w / 2) / Math.LN2,
                        O = 2 * A - w,
                        s = [],
                        M = [],
                        p = [],
                        h = L = 0,
                        P = C.length;
                      L < P;
                      h = ++L
                    ) {
                      if (((z = C[h]), (c = d[h]), 65535 === z)) {
                        s.push(0), M.push(0);
                        break;
                      }
                      if (z - (k = n[z].new) >= 32768)
                        for (
                          s.push(0), M.push(2 * (p.length + A - h)), i = q = z;
                          z <= c ? q <= c : q >= c;
                          i = z <= c ? ++q : --q
                        )
                          p.push(n[i].new);
                      else s.push(k - z), M.push(0);
                    }
                    for (
                      S.writeUInt16(3),
                        S.writeUInt16(1),
                        S.writeUInt32(12),
                        S.writeUInt16(4),
                        S.writeUInt16(16 + 8 * A + 2 * p.length),
                        S.writeUInt16(0),
                        S.writeUInt16(x),
                        S.writeUInt16(w),
                        S.writeUInt16(u),
                        S.writeUInt16(O),
                        F = 0,
                        R = d.length;
                      F < R;
                      F++
                    )
                      (i = d[F]), S.writeUInt16(i);
                    for (S.writeUInt16(0), $ = 0, I = C.length; $ < I; $++)
                      (i = C[$]), S.writeUInt16(i);
                    for (Y = 0, W = s.length; Y < W; Y++)
                      (a = s[Y]), S.writeUInt16(a);
                    for (U = 0, N = M.length; U < N; U++)
                      (_ = M[U]), S.writeUInt16(_);
                    for (X = 0, B = p.length; X < B; X++)
                      (f = p[X]), S.writeUInt16(f);
                    return { charMap: n, subtable: S.data, maxGlyphID: v + 1 };
                }
              }),
              t
            );
          })(),
          ue = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "cmap"),
              (e.prototype.parse = function (t) {
                var e, n, i;
                for (
                  t.pos = this.offset,
                    this.version = t.readUInt16(),
                    i = t.readUInt16(),
                    this.tables = [],
                    this.unicode = null,
                    n = 0;
                  0 <= i ? n < i : n > i;
                  n = 0 <= i ? ++n : --n
                )
                  (e = new de(t, this.offset)),
                    this.tables.push(e),
                    e.isUnicode && null == this.unicode && (this.unicode = e);
                return !0;
              }),
              (e.encode = function (t, e) {
                var n, i;
                return (
                  null == e && (e = "macroman"),
                  (n = de.encode(t, e)),
                  (i = new oe()).writeUInt16(0),
                  i.writeUInt16(1),
                  (n.table = i.data.concat(n.subtable)),
                  n
                );
              }),
              e
            );
          })(),
          pe = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "hhea"),
              (e.prototype.parse = function (t) {
                return (
                  (t.pos = this.offset),
                  (this.version = t.readInt()),
                  (this.ascender = t.readShort()),
                  (this.decender = t.readShort()),
                  (this.lineGap = t.readShort()),
                  (this.advanceWidthMax = t.readShort()),
                  (this.minLeftSideBearing = t.readShort()),
                  (this.minRightSideBearing = t.readShort()),
                  (this.xMaxExtent = t.readShort()),
                  (this.caretSlopeRise = t.readShort()),
                  (this.caretSlopeRun = t.readShort()),
                  (this.caretOffset = t.readShort()),
                  (t.pos += 8),
                  (this.metricDataFormat = t.readShort()),
                  (this.numberOfMetrics = t.readUInt16())
                );
              }),
              e
            );
          })(),
          he = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "OS/2"),
              (e.prototype.parse = function (t) {
                if (
                  ((t.pos = this.offset),
                  (this.version = t.readUInt16()),
                  (this.averageCharWidth = t.readShort()),
                  (this.weightClass = t.readUInt16()),
                  (this.widthClass = t.readUInt16()),
                  (this.type = t.readShort()),
                  (this.ySubscriptXSize = t.readShort()),
                  (this.ySubscriptYSize = t.readShort()),
                  (this.ySubscriptXOffset = t.readShort()),
                  (this.ySubscriptYOffset = t.readShort()),
                  (this.ySuperscriptXSize = t.readShort()),
                  (this.ySuperscriptYSize = t.readShort()),
                  (this.ySuperscriptXOffset = t.readShort()),
                  (this.ySuperscriptYOffset = t.readShort()),
                  (this.yStrikeoutSize = t.readShort()),
                  (this.yStrikeoutPosition = t.readShort()),
                  (this.familyClass = t.readShort()),
                  (this.panose = (function () {
                    var e, n;
                    for (n = [], e = 0; e < 10; ++e) n.push(t.readByte());
                    return n;
                  })()),
                  (this.charRange = (function () {
                    var e, n;
                    for (n = [], e = 0; e < 4; ++e) n.push(t.readInt());
                    return n;
                  })()),
                  (this.vendorID = t.readString(4)),
                  (this.selection = t.readShort()),
                  (this.firstCharIndex = t.readShort()),
                  (this.lastCharIndex = t.readShort()),
                  this.version > 0 &&
                    ((this.ascent = t.readShort()),
                    (this.descent = t.readShort()),
                    (this.lineGap = t.readShort()),
                    (this.winAscent = t.readShort()),
                    (this.winDescent = t.readShort()),
                    (this.codePageRange = (function () {
                      var e, n;
                      for (n = [], e = 0; e < 2; e = ++e) n.push(t.readInt());
                      return n;
                    })()),
                    this.version > 1))
                )
                  return (
                    (this.xHeight = t.readShort()),
                    (this.capHeight = t.readShort()),
                    (this.defaultChar = t.readShort()),
                    (this.breakChar = t.readShort()),
                    (this.maxContext = t.readShort())
                  );
              }),
              e
            );
          })(),
          fe = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "post"),
              (e.prototype.parse = function (t) {
                var e, n, i;
                switch (
                  ((t.pos = this.offset),
                  (this.format = t.readInt()),
                  (this.italicAngle = t.readInt()),
                  (this.underlinePosition = t.readShort()),
                  (this.underlineThickness = t.readShort()),
                  (this.isFixedPitch = t.readInt()),
                  (this.minMemType42 = t.readInt()),
                  (this.maxMemType42 = t.readInt()),
                  (this.minMemType1 = t.readInt()),
                  (this.maxMemType1 = t.readInt()),
                  this.format)
                ) {
                  case 65536:
                    break;
                  case 131072:
                    var r;
                    for (
                      n = t.readUInt16(), this.glyphNameIndex = [], r = 0;
                      0 <= n ? r < n : r > n;
                      r = 0 <= n ? ++r : --r
                    )
                      this.glyphNameIndex.push(t.readUInt16());
                    for (
                      this.names = [], i = [];
                      t.pos < this.offset + this.length;

                    )
                      (e = t.readByte()),
                        i.push(this.names.push(t.readString(e)));
                    return i;
                  case 151552:
                    return (n = t.readUInt16()), (this.offsets = t.read(n));
                  case 196608:
                    break;
                  case 262144:
                    return (this.map = function () {
                      var e, n, i;
                      for (
                        i = [], r = e = 0, n = this.file.maxp.numGlyphs;
                        0 <= n ? e < n : e > n;
                        r = 0 <= n ? ++e : --e
                      )
                        i.push(t.readUInt32());
                      return i;
                    }.call(this));
                }
              }),
              e
            );
          })(),
          be = function (t, e) {
            (this.raw = t),
              (this.length = t.length),
              (this.platformID = e.platformID),
              (this.encodingID = e.encodingID),
              (this.languageID = e.languageID);
          },
          me = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "name"),
              (e.prototype.parse = function (t) {
                var e, n, i, r, o, a, s, l, c, d, u;
                for (
                  t.pos = this.offset,
                    t.readShort(),
                    e = t.readShort(),
                    a = t.readShort(),
                    n = [],
                    r = 0;
                  0 <= e ? r < e : r > e;
                  r = 0 <= e ? ++r : --r
                )
                  n.push({
                    platformID: t.readShort(),
                    encodingID: t.readShort(),
                    languageID: t.readShort(),
                    nameID: t.readShort(),
                    length: t.readShort(),
                    offset: this.offset + a + t.readShort(),
                  });
                for (s = {}, r = c = 0, d = n.length; c < d; r = ++c)
                  (i = n[r]),
                    (t.pos = i.offset),
                    (l = t.readString(i.length)),
                    (o = new be(l, i)),
                    null == s[(u = i.nameID)] && (s[u] = []),
                    s[i.nameID].push(o);
                (this.strings = s),
                  (this.copyright = s[0]),
                  (this.fontFamily = s[1]),
                  (this.fontSubfamily = s[2]),
                  (this.uniqueSubfamily = s[3]),
                  (this.fontName = s[4]),
                  (this.version = s[5]);
                try {
                  this.postscriptName = s[6][0].raw.replace(
                    /[\x00-\x19\x80-\xff]/g,
                    ""
                  );
                } catch (t) {
                  this.postscriptName = s[4][0].raw.replace(
                    /[\x00-\x19\x80-\xff]/g,
                    ""
                  );
                }
                return (
                  (this.trademark = s[7]),
                  (this.manufacturer = s[8]),
                  (this.designer = s[9]),
                  (this.description = s[10]),
                  (this.vendorUrl = s[11]),
                  (this.designerUrl = s[12]),
                  (this.license = s[13]),
                  (this.licenseUrl = s[14]),
                  (this.preferredFamily = s[15]),
                  (this.preferredSubfamily = s[17]),
                  (this.compatibleFull = s[18]),
                  (this.sampleText = s[19])
                );
              }),
              e
            );
          })(),
          ge = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "maxp"),
              (e.prototype.parse = function (t) {
                return (
                  (t.pos = this.offset),
                  (this.version = t.readInt()),
                  (this.numGlyphs = t.readUInt16()),
                  (this.maxPoints = t.readUInt16()),
                  (this.maxContours = t.readUInt16()),
                  (this.maxCompositePoints = t.readUInt16()),
                  (this.maxComponentContours = t.readUInt16()),
                  (this.maxZones = t.readUInt16()),
                  (this.maxTwilightPoints = t.readUInt16()),
                  (this.maxStorage = t.readUInt16()),
                  (this.maxFunctionDefs = t.readUInt16()),
                  (this.maxInstructionDefs = t.readUInt16()),
                  (this.maxStackElements = t.readUInt16()),
                  (this.maxSizeOfInstructions = t.readUInt16()),
                  (this.maxComponentElements = t.readUInt16()),
                  (this.maxComponentDepth = t.readUInt16())
                );
              }),
              e
            );
          })(),
          ve = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "hmtx"),
              (e.prototype.parse = function (t) {
                var e, n, i, r, o, a, s;
                for (
                  t.pos = this.offset,
                    this.metrics = [],
                    e = 0,
                    a = this.file.hhea.numberOfMetrics;
                  0 <= a ? e < a : e > a;
                  e = 0 <= a ? ++e : --e
                )
                  this.metrics.push({
                    advance: t.readUInt16(),
                    lsb: t.readInt16(),
                  });
                for (
                  i = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
                    this.leftSideBearings = (function () {
                      var n, r;
                      for (
                        r = [], e = n = 0;
                        0 <= i ? n < i : n > i;
                        e = 0 <= i ? ++n : --n
                      )
                        r.push(t.readInt16());
                      return r;
                    })(),
                    this.widths = function () {
                      var t, e, n, i;
                      for (
                        i = [], t = 0, e = (n = this.metrics).length;
                        t < e;
                        t++
                      )
                        (r = n[t]), i.push(r.advance);
                      return i;
                    }.call(this),
                    n = this.widths[this.widths.length - 1],
                    s = [],
                    e = o = 0;
                  0 <= i ? o < i : o > i;
                  e = 0 <= i ? ++o : --o
                )
                  s.push(this.widths.push(n));
                return s;
              }),
              (e.prototype.forGlyph = function (t) {
                return t in this.metrics
                  ? this.metrics[t]
                  : {
                      advance: this.metrics[this.metrics.length - 1].advance,
                      lsb: this.leftSideBearings[t - this.metrics.length],
                    };
              }),
              e
            );
          })(),
          _e = [].slice,
          ye = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "glyf"),
              (e.prototype.parse = function () {
                return (this.cache = {});
              }),
              (e.prototype.glyphFor = function (t) {
                var e, n, i, r, o, a, s, l, c, d;
                return t in this.cache
                  ? this.cache[t]
                  : ((r = this.file.loca),
                    (e = this.file.contents),
                    (n = r.indexOf(t)),
                    0 === (i = r.lengthOf(t))
                      ? (this.cache[t] = null)
                      : ((e.pos = this.offset + n),
                        (o = (a = new oe(e.read(i))).readShort()),
                        (l = a.readShort()),
                        (d = a.readShort()),
                        (s = a.readShort()),
                        (c = a.readShort()),
                        (this.cache[t] =
                          -1 === o
                            ? new Oe(a, l, d, s, c)
                            : new Me(a, o, l, d, s, c)),
                        this.cache[t]));
              }),
              (e.prototype.encode = function (t, e, n) {
                var i, r, o, a, s;
                for (o = [], r = [], a = 0, s = e.length; a < s; a++)
                  (i = t[e[a]]),
                    r.push(o.length),
                    i && (o = o.concat(i.encode(n)));
                return r.push(o.length), { table: o, offsets: r };
              }),
              e
            );
          })(),
          Me = (function () {
            function t(t, e, n, i, r, o) {
              (this.raw = t),
                (this.numberOfContours = e),
                (this.xMin = n),
                (this.yMin = i),
                (this.xMax = r),
                (this.yMax = o),
                (this.compound = !1);
            }
            return (
              (t.prototype.encode = function () {
                return this.raw.data;
              }),
              t
            );
          })(),
          Oe = (function () {
            function t(t, e, n, i, r) {
              var o, a;
              for (
                this.raw = t,
                  this.xMin = e,
                  this.yMin = n,
                  this.xMax = i,
                  this.yMax = r,
                  this.compound = !0,
                  this.glyphIDs = [],
                  this.glyphOffsets = [],
                  o = this.raw;
                (a = o.readShort()),
                  this.glyphOffsets.push(o.pos),
                  this.glyphIDs.push(o.readUInt16()),
                  32 & a;

              )
                (o.pos += 1 & a ? 4 : 2),
                  128 & a
                    ? (o.pos += 8)
                    : 64 & a
                    ? (o.pos += 4)
                    : 8 & a && (o.pos += 2);
            }
            return (
              (t.prototype.encode = function () {
                var t, e, n;
                for (
                  e = new oe(_e.call(this.raw.data)),
                    t = 0,
                    n = this.glyphIDs.length;
                  t < n;
                  ++t
                )
                  e.pos = this.glyphOffsets[t];
                return e.data;
              }),
              t
            );
          })(),
          we = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              le(e, re),
              (e.prototype.tag = "loca"),
              (e.prototype.parse = function (t) {
                var e, n;
                return (
                  (t.pos = this.offset),
                  (e = this.file.head.indexToLocFormat),
                  (this.offsets =
                    0 === e
                      ? function () {
                          var e, i;
                          for (i = [], n = 0, e = this.length; n < e; n += 2)
                            i.push(2 * t.readUInt16());
                          return i;
                        }.call(this)
                      : function () {
                          var e, i;
                          for (i = [], n = 0, e = this.length; n < e; n += 4)
                            i.push(t.readUInt32());
                          return i;
                        }.call(this))
                );
              }),
              (e.prototype.indexOf = function (t) {
                return this.offsets[t];
              }),
              (e.prototype.lengthOf = function (t) {
                return this.offsets[t + 1] - this.offsets[t];
              }),
              (e.prototype.encode = function (t, e) {
                for (
                  var n = new Uint32Array(this.offsets.length),
                    i = 0,
                    r = 0,
                    o = 0;
                  o < n.length;
                  ++o
                )
                  if (((n[o] = i), r < e.length && e[r] == o)) {
                    ++r, (n[o] = i);
                    var a = this.offsets[o],
                      s = this.offsets[o + 1] - a;
                    s > 0 && (i += s);
                  }
                for (var l = new Array(4 * n.length), c = 0; c < n.length; ++c)
                  (l[4 * c + 3] = 255 & n[c]),
                    (l[4 * c + 2] = (65280 & n[c]) >> 8),
                    (l[4 * c + 1] = (16711680 & n[c]) >> 16),
                    (l[4 * c] = (4278190080 & n[c]) >> 24);
                return l;
              }),
              e
            );
          })(),
          Ae = (function () {
            function t(t) {
              (this.font = t),
                (this.subset = {}),
                (this.unicodes = {}),
                (this.next = 33);
            }
            return (
              (t.prototype.generateCmap = function () {
                var t, e, n, i, r;
                for (e in ((i = this.font.cmap.tables[0].codeMap),
                (t = {}),
                (r = this.subset)))
                  (n = r[e]), (t[e] = i[n]);
                return t;
              }),
              (t.prototype.glyphsFor = function (t) {
                var e, n, i, r, o, a, s;
                for (i = {}, o = 0, a = t.length; o < a; o++)
                  i[(r = t[o])] = this.font.glyf.glyphFor(r);
                for (r in ((e = []), i))
                  (null != (n = i[r]) ? n.compound : void 0) &&
                    e.push.apply(e, n.glyphIDs);
                if (e.length > 0)
                  for (r in (s = this.glyphsFor(e))) (n = s[r]), (i[r] = n);
                return i;
              }),
              (t.prototype.encode = function (t, e) {
                var n, i, r, o, a, s, l, c, d, u, p, h, f, b, m;
                for (i in ((n = ue.encode(this.generateCmap(), "unicode")),
                (o = this.glyphsFor(t)),
                (p = { 0: 0 }),
                (m = n.charMap)))
                  p[(s = m[i]).old] = s.new;
                for (h in ((u = n.maxGlyphID), o)) h in p || (p[h] = u++);
                return (
                  (c = (function (t) {
                    var e, n;
                    for (e in ((n = {}), t)) n[t[e]] = e;
                    return n;
                  })(p)),
                  (d = Object.keys(c).sort(function (t, e) {
                    return t - e;
                  })),
                  (f = (function () {
                    var t, e, n;
                    for (n = [], t = 0, e = d.length; t < e; t++)
                      (a = d[t]), n.push(c[a]);
                    return n;
                  })()),
                  (r = this.font.glyf.encode(o, f, p)),
                  (l = this.font.loca.encode(r.offsets, f)),
                  (b = {
                    cmap: this.font.cmap.raw(),
                    glyf: r.table,
                    loca: l,
                    hmtx: this.font.hmtx.raw(),
                    hhea: this.font.hhea.raw(),
                    maxp: this.font.maxp.raw(),
                    post: this.font.post.raw(),
                    name: this.font.name.raw(),
                    head: this.font.head.encode(e),
                  }),
                  this.font.os2.exists && (b["OS/2"] = this.font.os2.raw()),
                  this.font.directory.encode(b)
                );
              }),
              t
            );
          })();
        (W.API.PDFObject = (function () {
          var t;
          function e() {}
          return (
            (t = function (t, e) {
              return (Array(e + 1).join("0") + t).slice(-e);
            }),
            (e.convert = function (n) {
              var i, r, o, a;
              if (Array.isArray(n))
                return (
                  "[" +
                  (function () {
                    var t, r, o;
                    for (o = [], t = 0, r = n.length; t < r; t++)
                      (i = n[t]), o.push(e.convert(i));
                    return o;
                  })().join(" ") +
                  "]"
                );
              if ("string" == typeof n) return "/" + n;
              if (null != n ? n.isString : void 0) return "(" + n + ")";
              if (n instanceof Date)
                return (
                  "(D:" +
                  t(n.getUTCFullYear(), 4) +
                  t(n.getUTCMonth(), 2) +
                  t(n.getUTCDate(), 2) +
                  t(n.getUTCHours(), 2) +
                  t(n.getUTCMinutes(), 2) +
                  t(n.getUTCSeconds(), 2) +
                  "Z)"
                );
              if ("[object Object]" === {}.toString.call(n)) {
                for (r in ((o = ["<<"]), n))
                  (a = n[r]), o.push("/" + r + " " + e.convert(a));
                return o.push(">>"), o.join("\n");
              }
              return "" + n;
            }),
            e
          );
        })()),
          (e.default = W);
      }.call(this, n(56));
  },
  function (t, e, n) {
    (function (t) {
      var e;
      !(function () {
        function t(t) {
          (this.mode = i.MODE_8BIT_BYTE),
            (this.data = t),
            (this.parsedData = []);
          for (var e = 0, n = this.data.length; e < n; e++) {
            var r = [],
              o = this.data.charCodeAt(e);
            o > 65536
              ? ((r[0] = 240 | ((1835008 & o) >>> 18)),
                (r[1] = 128 | ((258048 & o) >>> 12)),
                (r[2] = 128 | ((4032 & o) >>> 6)),
                (r[3] = 128 | (63 & o)))
              : o > 2048
              ? ((r[0] = 224 | ((61440 & o) >>> 12)),
                (r[1] = 128 | ((4032 & o) >>> 6)),
                (r[2] = 128 | (63 & o)))
              : o > 128
              ? ((r[0] = 192 | ((1984 & o) >>> 6)), (r[1] = 128 | (63 & o)))
              : (r[0] = o),
              this.parsedData.push(r);
          }
          (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
            this.parsedData.length != this.data.length &&
              (this.parsedData.unshift(191),
              this.parsedData.unshift(187),
              this.parsedData.unshift(239));
        }
        function n(t, e) {
          (this.typeNumber = t),
            (this.errorCorrectLevel = e),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = []);
        }
        (t.prototype = {
          getLength: function (t) {
            return this.parsedData.length;
          },
          write: function (t) {
            for (var e = 0, n = this.parsedData.length; e < n; e++)
              t.put(this.parsedData[e], 8);
          },
        }),
          (n.prototype = {
            addData: function (e) {
              var n = new t(e);
              this.dataList.push(n), (this.dataCache = null);
            },
            isDark: function (t, e) {
              if (
                t < 0 ||
                this.moduleCount <= t ||
                e < 0 ||
                this.moduleCount <= e
              )
                throw new Error(t + "," + e);
              return this.modules[t][e];
            },
            getModuleCount: function () {
              return this.moduleCount;
            },
            make: function () {
              this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function (t, e) {
              (this.moduleCount = 4 * this.typeNumber + 17),
                (this.modules = new Array(this.moduleCount));
              for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var r = 0; r < this.moduleCount; r++)
                  this.modules[i][r] = null;
              }
              this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, e),
                this.typeNumber >= 7 && this.setupTypeNumber(t),
                null == this.dataCache &&
                  (this.dataCache = n.createData(
                    this.typeNumber,
                    this.errorCorrectLevel,
                    this.dataList
                  )),
                this.mapData(this.dataCache, e);
            },
            setupPositionProbePattern: function (t, e) {
              for (var n = -1; n <= 7; n++)
                if (!(t + n <= -1 || this.moduleCount <= t + n))
                  for (var i = -1; i <= 7; i++)
                    e + i <= -1 ||
                      this.moduleCount <= e + i ||
                      (this.modules[t + n][e + i] =
                        (0 <= n && n <= 6 && (0 == i || 6 == i)) ||
                        (0 <= i && i <= 6 && (0 == n || 6 == n)) ||
                        (2 <= n && n <= 4 && 2 <= i && i <= 4));
            },
            getBestMaskPattern: function () {
              for (var t = 0, e = 0, n = 0; n < 8; n++) {
                this.makeImpl(!0, n);
                var i = o.getLostPoint(this);
                (0 == n || t > i) && ((t = i), (e = n));
              }
              return e;
            },
            createMovieClip: function (t, e, n) {
              var i = t.createEmptyMovieClip(e, n);
              this.make();
              for (var r = 0; r < this.modules.length; r++)
                for (var o = 1 * r, a = 0; a < this.modules[r].length; a++) {
                  var s = 1 * a;
                  this.modules[r][a] &&
                    (i.beginFill(0, 100),
                    i.moveTo(s, o),
                    i.lineTo(s + 1, o),
                    i.lineTo(s + 1, o + 1),
                    i.lineTo(s, o + 1),
                    i.endFill());
                }
              return i;
            },
            setupTimingPattern: function () {
              for (var t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
              for (var e = 8; e < this.moduleCount - 8; e++)
                null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
            },
            setupPositionAdjustPattern: function () {
              for (
                var t = o.getPatternPosition(this.typeNumber), e = 0;
                e < t.length;
                e++
              )
                for (var n = 0; n < t.length; n++) {
                  var i = t[e],
                    r = t[n];
                  if (null == this.modules[i][r])
                    for (var a = -2; a <= 2; a++)
                      for (var s = -2; s <= 2; s++)
                        this.modules[i + a][r + s] =
                          -2 == a ||
                          2 == a ||
                          -2 == s ||
                          2 == s ||
                          (0 == a && 0 == s);
                }
            },
            setupTypeNumber: function (t) {
              for (
                var e = o.getBCHTypeNumber(this.typeNumber), n = 0;
                n < 18;
                n++
              ) {
                var i = !t && 1 == ((e >> n) & 1);
                this.modules[Math.floor(n / 3)][
                  (n % 3) + this.moduleCount - 8 - 3
                ] = i;
              }
              for (n = 0; n < 18; n++)
                (i = !t && 1 == ((e >> n) & 1)),
                  (this.modules[(n % 3) + this.moduleCount - 8 - 3][
                    Math.floor(n / 3)
                  ] = i);
            },
            setupTypeInfo: function (t, e) {
              for (
                var n = (this.errorCorrectLevel << 3) | e,
                  i = o.getBCHTypeInfo(n),
                  r = 0;
                r < 15;
                r++
              ) {
                var a = !t && 1 == ((i >> r) & 1);
                r < 6
                  ? (this.modules[r][8] = a)
                  : r < 8
                  ? (this.modules[r + 1][8] = a)
                  : (this.modules[this.moduleCount - 15 + r][8] = a);
              }
              for (r = 0; r < 15; r++)
                (a = !t && 1 == ((i >> r) & 1)),
                  r < 8
                    ? (this.modules[8][this.moduleCount - r - 1] = a)
                    : r < 9
                    ? (this.modules[8][15 - r - 1 + 1] = a)
                    : (this.modules[8][15 - r - 1] = a);
              this.modules[this.moduleCount - 8][8] = !t;
            },
            mapData: function (t, e) {
              for (
                var n = -1,
                  i = this.moduleCount - 1,
                  r = 7,
                  a = 0,
                  s = this.moduleCount - 1;
                s > 0;
                s -= 2
              )
                for (6 == s && s--; ; ) {
                  for (var l = 0; l < 2; l++)
                    if (null == this.modules[i][s - l]) {
                      var c = !1;
                      a < t.length && (c = 1 == ((t[a] >>> r) & 1)),
                        o.getMask(e, i, s - l) && (c = !c),
                        (this.modules[i][s - l] = c),
                        -1 == --r && (a++, (r = 7));
                    }
                  if ((i += n) < 0 || this.moduleCount <= i) {
                    (i -= n), (n = -n);
                    break;
                  }
                }
            },
          }),
          (n.PAD0 = 236),
          (n.PAD1 = 17),
          (n.createData = function (t, e, i) {
            for (
              var r = c.getRSBlocks(t, e), a = new d(), s = 0;
              s < i.length;
              s++
            ) {
              var l = i[s];
              a.put(l.mode, 4),
                a.put(l.getLength(), o.getLengthInBits(l.mode, t)),
                l.write(a);
            }
            var u = 0;
            for (s = 0; s < r.length; s++) u += r[s].dataCount;
            if (a.getLengthInBits() > 8 * u)
              throw new Error(
                "code length overflow. (" +
                  a.getLengthInBits() +
                  ">" +
                  8 * u +
                  ")"
              );
            for (
              a.getLengthInBits() + 4 <= 8 * u && a.put(0, 4);
              a.getLengthInBits() % 8 != 0;

            )
              a.putBit(!1);
            for (
              ;
              !(
                a.getLengthInBits() >= 8 * u ||
                (a.put(n.PAD0, 8), a.getLengthInBits() >= 8 * u)
              );

            )
              a.put(n.PAD1, 8);
            return n.createBytes(a, r);
          }),
          (n.createBytes = function (t, e) {
            for (
              var n = 0,
                i = 0,
                r = 0,
                a = new Array(e.length),
                s = new Array(e.length),
                c = 0;
              c < e.length;
              c++
            ) {
              var d = e[c].dataCount,
                u = e[c].totalCount - d;
              (i = Math.max(i, d)), (r = Math.max(r, u)), (a[c] = new Array(d));
              for (var p = 0; p < a[c].length; p++)
                a[c][p] = 255 & t.buffer[p + n];
              n += d;
              var h = o.getErrorCorrectPolynomial(u),
                f = new l(a[c], h.getLength() - 1).mod(h);
              for (
                s[c] = new Array(h.getLength() - 1), p = 0;
                p < s[c].length;
                p++
              ) {
                var b = p + f.getLength() - s[c].length;
                s[c][p] = b >= 0 ? f.get(b) : 0;
              }
            }
            var m = 0;
            for (p = 0; p < e.length; p++) m += e[p].totalCount;
            var g = new Array(m),
              v = 0;
            for (p = 0; p < i; p++)
              for (c = 0; c < e.length; c++)
                p < a[c].length && (g[v++] = a[c][p]);
            for (p = 0; p < r; p++)
              for (c = 0; c < e.length; c++)
                p < s[c].length && (g[v++] = s[c][p]);
            return g;
          });
        for (
          var i = {
              MODE_NUMBER: 1,
              MODE_ALPHA_NUM: 2,
              MODE_8BIT_BYTE: 4,
              MODE_KANJI: 8,
            },
            r = { L: 1, M: 0, Q: 3, H: 2 },
            o = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function (t) {
                for (
                  var e = t << 10;
                  o.getBCHDigit(e) - o.getBCHDigit(o.G15) >= 0;

                )
                  e ^= o.G15 << (o.getBCHDigit(e) - o.getBCHDigit(o.G15));
                return ((t << 10) | e) ^ o.G15_MASK;
              },
              getBCHTypeNumber: function (t) {
                for (
                  var e = t << 12;
                  o.getBCHDigit(e) - o.getBCHDigit(o.G18) >= 0;

                )
                  e ^= o.G18 << (o.getBCHDigit(e) - o.getBCHDigit(o.G18));
                return (t << 12) | e;
              },
              getBCHDigit: function (t) {
                for (var e = 0; 0 != t; ) e++, (t >>>= 1);
                return e;
              },
              getPatternPosition: function (t) {
                return o.PATTERN_POSITION_TABLE[t - 1];
              },
              getMask: function (t, e, n) {
                switch (t) {
                  case 0:
                    return (e + n) % 2 == 0;
                  case 1:
                    return e % 2 == 0;
                  case 2:
                    return n % 3 == 0;
                  case 3:
                    return (e + n) % 3 == 0;
                  case 4:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                  case 5:
                    return ((e * n) % 2) + ((e * n) % 3) == 0;
                  case 6:
                    return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                  case 7:
                    return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                  default:
                    throw new Error("bad maskPattern:" + t);
                }
              },
              getErrorCorrectPolynomial: function (t) {
                for (var e = new l([1], 0), n = 0; n < t; n++)
                  e = e.multiply(new l([1, a.gexp(n)], 0));
                return e;
              },
              getLengthInBits: function (t, e) {
                if (1 <= e && e < 10)
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 10;
                    case i.MODE_ALPHA_NUM:
                      return 9;
                    case i.MODE_8BIT_BYTE:
                    case i.MODE_KANJI:
                      return 8;
                    default:
                      throw new Error("mode:" + t);
                  }
                else if (e < 27)
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 12;
                    case i.MODE_ALPHA_NUM:
                      return 11;
                    case i.MODE_8BIT_BYTE:
                      return 16;
                    case i.MODE_KANJI:
                      return 10;
                    default:
                      throw new Error("mode:" + t);
                  }
                else {
                  if (!(e < 41)) throw new Error("type:" + e);
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 14;
                    case i.MODE_ALPHA_NUM:
                      return 13;
                    case i.MODE_8BIT_BYTE:
                      return 16;
                    case i.MODE_KANJI:
                      return 12;
                    default:
                      throw new Error("mode:" + t);
                  }
                }
              },
              getLostPoint: function (t) {
                for (var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
                  for (var r = 0; r < e; r++) {
                    for (var o = 0, a = t.isDark(i, r), s = -1; s <= 1; s++)
                      if (!(i + s < 0 || e <= i + s))
                        for (var l = -1; l <= 1; l++)
                          r + l < 0 ||
                            e <= r + l ||
                            (0 == s && 0 == l) ||
                            (a == t.isDark(i + s, r + l) && o++);
                    o > 5 && (n += 3 + o - 5);
                  }
                for (i = 0; i < e - 1; i++)
                  for (r = 0; r < e - 1; r++) {
                    var c = 0;
                    t.isDark(i, r) && c++,
                      t.isDark(i + 1, r) && c++,
                      t.isDark(i, r + 1) && c++,
                      t.isDark(i + 1, r + 1) && c++,
                      (0 != c && 4 != c) || (n += 3);
                  }
                for (i = 0; i < e; i++)
                  for (r = 0; r < e - 6; r++)
                    t.isDark(i, r) &&
                      !t.isDark(i, r + 1) &&
                      t.isDark(i, r + 2) &&
                      t.isDark(i, r + 3) &&
                      t.isDark(i, r + 4) &&
                      !t.isDark(i, r + 5) &&
                      t.isDark(i, r + 6) &&
                      (n += 40);
                for (r = 0; r < e; r++)
                  for (i = 0; i < e - 6; i++)
                    t.isDark(i, r) &&
                      !t.isDark(i + 1, r) &&
                      t.isDark(i + 2, r) &&
                      t.isDark(i + 3, r) &&
                      t.isDark(i + 4, r) &&
                      !t.isDark(i + 5, r) &&
                      t.isDark(i + 6, r) &&
                      (n += 40);
                var d = 0;
                for (r = 0; r < e; r++)
                  for (i = 0; i < e; i++) t.isDark(i, r) && d++;
                return (n += (Math.abs((100 * d) / e / e - 50) / 5) * 10);
              },
            },
            a = {
              glog: function (t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return a.LOG_TABLE[t];
              },
              gexp: function (t) {
                for (; t < 0; ) t += 255;
                for (; t >= 256; ) t -= 255;
                return a.EXP_TABLE[t];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            s = 0;
          s < 8;
          s++
        )
          a.EXP_TABLE[s] = 1 << s;
        for (s = 8; s < 256; s++)
          a.EXP_TABLE[s] =
            a.EXP_TABLE[s - 4] ^
            a.EXP_TABLE[s - 5] ^
            a.EXP_TABLE[s - 6] ^
            a.EXP_TABLE[s - 8];
        for (s = 0; s < 255; s++) a.LOG_TABLE[a.EXP_TABLE[s]] = s;
        function l(t, e) {
          if (null == t.length) throw new Error(t.length + "/" + e);
          for (var n = 0; n < t.length && 0 == t[n]; ) n++;
          this.num = new Array(t.length - n + e);
          for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n];
        }
        function c(t, e) {
          (this.totalCount = t), (this.dataCount = e);
        }
        function d() {
          (this.buffer = []), (this.length = 0);
        }
        (l.prototype = {
          get: function (t) {
            return this.num[t];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (t) {
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
              n < this.getLength();
              n++
            )
              for (var i = 0; i < t.getLength(); i++)
                e[n + i] ^= a.gexp(a.glog(this.get(n)) + a.glog(t.get(i)));
            return new l(e, 0);
          },
          mod: function (t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (
              var e = a.glog(this.get(0)) - a.glog(t.get(0)),
                n = new Array(this.getLength()),
                i = 0;
              i < this.getLength();
              i++
            )
              n[i] = this.get(i);
            for (i = 0; i < t.getLength(); i++)
              n[i] ^= a.gexp(a.glog(t.get(i)) + e);
            return new l(n, 0).mod(t);
          },
        }),
          (c.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ]),
          (c.getRSBlocks = function (t, e) {
            var n = c.getRsBlockTable(t, e);
            if (null == n)
              throw new Error(
                "bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e
              );
            for (var i = n.length / 3, r = [], o = 0; o < i; o++)
              for (
                var a = n[3 * o + 0], s = n[3 * o + 1], l = n[3 * o + 2], d = 0;
                d < a;
                d++
              )
                r.push(new c(s, l));
            return r;
          }),
          (c.getRsBlockTable = function (t, e) {
            switch (e) {
              case r.L:
                return c.RS_BLOCK_TABLE[4 * (t - 1) + 0];
              case r.M:
                return c.RS_BLOCK_TABLE[4 * (t - 1) + 1];
              case r.Q:
                return c.RS_BLOCK_TABLE[4 * (t - 1) + 2];
              case r.H:
                return c.RS_BLOCK_TABLE[4 * (t - 1) + 3];
              default:
                return;
            }
          }),
          (d.prototype = {
            get: function (t) {
              var e = Math.floor(t / 8);
              return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
            },
            put: function (t, e) {
              for (var n = 0; n < e; n++)
                this.putBit(1 == ((t >>> (e - n - 1)) & 1));
            },
            getLengthInBits: function () {
              return this.length;
            },
            putBit: function (t) {
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++;
            },
          });
        var u = [
          [17, 14, 11, 7],
          [32, 26, 20, 14],
          [53, 42, 32, 24],
          [78, 62, 46, 34],
          [106, 84, 60, 44],
          [134, 106, 74, 58],
          [154, 122, 86, 64],
          [192, 152, 108, 84],
          [230, 180, 130, 98],
          [271, 213, 151, 119],
          [321, 251, 177, 137],
          [367, 287, 203, 155],
          [425, 331, 241, 177],
          [458, 362, 258, 194],
          [520, 412, 292, 220],
          [586, 450, 322, 250],
          [644, 504, 364, 280],
          [718, 560, 394, 310],
          [792, 624, 442, 338],
          [858, 666, 482, 382],
          [929, 711, 509, 403],
          [1003, 779, 565, 439],
          [1091, 857, 611, 461],
          [1171, 911, 661, 511],
          [1273, 997, 715, 535],
          [1367, 1059, 751, 593],
          [1465, 1125, 805, 625],
          [1528, 1190, 868, 658],
          [1628, 1264, 908, 698],
          [1732, 1370, 982, 742],
          [1840, 1452, 1030, 790],
          [1952, 1538, 1112, 842],
          [2068, 1628, 1168, 898],
          [2188, 1722, 1228, 958],
          [2303, 1809, 1283, 983],
          [2431, 1911, 1351, 1051],
          [2563, 1989, 1423, 1093],
          [2699, 2099, 1499, 1139],
          [2809, 2213, 1579, 1219],
          [2953, 2331, 1663, 1273],
        ];
        function p() {
          var t = !1,
            e = navigator.userAgent;
          if (/android/i.test(e)) {
            t = !0;
            var n = e.toString().match(/android ([0-9]\.[0-9])/i);
            n && n[1] && (t = parseFloat(n[1]));
          }
          return t;
        }
        var h = (function () {
            var t = function (t, e) {
              (this._el = t), (this._htOption = e);
            };
            return (
              (t.prototype.draw = function (t) {
                var e = this._htOption,
                  n = this._el,
                  i = t.getModuleCount();
                function r(t, e) {
                  var n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  );
                  for (var i in e)
                    e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
                  return n;
                }
                Math.floor(e.width / i), Math.floor(e.height / i), this.clear();
                var o = r("svg", {
                  viewBox: "0 0 " + String(i) + " " + String(i),
                  width: "100%",
                  height: "100%",
                  fill: e.colorLight,
                });
                o.setAttributeNS(
                  "http://www.w3.org/2000/xmlns/",
                  "xmlns:xlink",
                  "http://www.w3.org/1999/xlink"
                ),
                  n.appendChild(o),
                  o.appendChild(
                    r("rect", {
                      fill: e.colorLight,
                      width: "100%",
                      height: "100%",
                    })
                  ),
                  o.appendChild(
                    r("rect", {
                      fill: e.colorDark,
                      width: "1",
                      height: "1",
                      id: "template",
                    })
                  );
                for (var a = 0; a < i; a++)
                  for (var s = 0; s < i; s++)
                    if (t.isDark(a, s)) {
                      var l = r("use", { x: String(a), y: String(s) });
                      l.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href",
                        "#template"
                      ),
                        o.appendChild(l);
                    }
              }),
              (t.prototype.clear = function () {
                for (; this._el.hasChildNodes(); )
                  this._el.removeChild(this._el.lastChild);
              }),
              t
            );
          })(),
          f =
            "svg" === document.documentElement.tagName.toLowerCase()
              ? h
              : "undefined" == typeof CanvasRenderingContext2D
              ? (function () {
                  var t = function (t, e) {
                    (this._el = t), (this._htOption = e);
                  };
                  return (
                    (t.prototype.draw = function (t) {
                      for (
                        var e = this._htOption,
                          n = this._el,
                          i = t.getModuleCount(),
                          r = Math.floor(e.width / i),
                          o = Math.floor(e.height / i),
                          a = [
                            '<table style="border:0;border-collapse:collapse;">',
                          ],
                          s = 0;
                        s < i;
                        s++
                      ) {
                        a.push("<tr>");
                        for (var l = 0; l < i; l++)
                          a.push(
                            '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                              r +
                              "px;height:" +
                              o +
                              "px;background-color:" +
                              (t.isDark(s, l) ? e.colorDark : e.colorLight) +
                              ';"></td>'
                          );
                        a.push("</tr>");
                      }
                      a.push("</table>"), (n.innerHTML = a.join(""));
                      var c = n.childNodes[0],
                        d = (e.width - c.offsetWidth) / 2,
                        u = (e.height - c.offsetHeight) / 2;
                      d > 0 && u > 0 && (c.style.margin = u + "px " + d + "px");
                    }),
                    (t.prototype.clear = function () {
                      this._el.innerHTML = "";
                    }),
                    t
                  );
                })()
              : (function () {
                  function t() {
                    (this._elImage.src = this._elCanvas.toDataURL("image/png")),
                      this._elImage.style.setProperty(
                        "display",
                        "block",
                        "important"
                      ),
                      this._elCanvas.style.setProperty(
                        "display",
                        "none",
                        "important"
                      );
                  }
                  if (this._android && this._android <= 2.1) {
                    var e = 1 / window.devicePixelRatio,
                      n = CanvasRenderingContext2D.prototype.drawImage;
                    CanvasRenderingContext2D.prototype.drawImage = function (
                      t,
                      i,
                      r,
                      o,
                      a,
                      s,
                      l,
                      c,
                      d
                    ) {
                      if ("nodeName" in t && /img/i.test(t.nodeName))
                        for (var u = arguments.length - 1; u >= 1; u--)
                          arguments[u] = arguments[u] * e;
                      else
                        void 0 === c &&
                          ((arguments[1] *= e),
                          (arguments[2] *= e),
                          (arguments[3] *= e),
                          (arguments[4] *= e));
                      n.apply(this, arguments);
                    };
                  }
                  function i(t, e) {
                    var n = this;
                    if (
                      ((n._fFail = e),
                      (n._fSuccess = t),
                      null === n._bSupportDataURI)
                    ) {
                      var i = document.createElement("img"),
                        r = function () {
                          (n._bSupportDataURI = !1),
                            n._fFail && n._fFail.call(n);
                        };
                      return (
                        (i.onabort = r),
                        (i.onerror = r),
                        (i.onload = function () {
                          (n._bSupportDataURI = !0),
                            n._fSuccess && n._fSuccess.call(n);
                        }),
                        void (i.src =
                          "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                      );
                    }
                    !0 === n._bSupportDataURI && n._fSuccess
                      ? n._fSuccess.call(n)
                      : !1 === n._bSupportDataURI &&
                        n._fFail &&
                        n._fFail.call(n);
                  }
                  var r = function (t, e) {
                    (this._bIsPainted = !1),
                      (this._android = p()),
                      (this._htOption = e),
                      (this._elCanvas = document.createElement("canvas")),
                      (this._elCanvas.width = e.width),
                      (this._elCanvas.height = e.height),
                      t.appendChild(this._elCanvas),
                      (this._el = t),
                      (this._oContext = this._elCanvas.getContext("2d")),
                      (this._bIsPainted = !1),
                      (this._elImage = document.createElement("img")),
                      (this._elImage.alt = "Scan me!"),
                      this._elImage.style.setProperty(
                        "display",
                        "none",
                        "important"
                      ),
                      this._el.appendChild(this._elImage),
                      (this._bSupportDataURI = null);
                  };
                  return (
                    (r.prototype.draw = function (t) {
                      var e = this._elImage,
                        n = this._oContext,
                        i = this._htOption,
                        r = t.getModuleCount(),
                        o = i.width / r,
                        a = i.height / r,
                        s = Math.round(o),
                        l = Math.round(a);
                      e.style.setProperty("display", "none", "important"),
                        this.clear();
                      for (var c = 0; c < r; c++)
                        for (var d = 0; d < r; d++) {
                          var u = t.isDark(c, d),
                            p = d * o,
                            h = c * a;
                          (n.strokeStyle = u ? i.colorDark : i.colorLight),
                            (n.lineWidth = 1),
                            (n.fillStyle = u ? i.colorDark : i.colorLight),
                            n.fillRect(p, h, o, a),
                            n.strokeRect(
                              Math.floor(p) + 0.5,
                              Math.floor(h) + 0.5,
                              s,
                              l
                            ),
                            n.strokeRect(
                              Math.ceil(p) - 0.5,
                              Math.ceil(h) - 0.5,
                              s,
                              l
                            );
                        }
                      this._bIsPainted = !0;
                    }),
                    (r.prototype.makeImage = function () {
                      this._bIsPainted && i.call(this, t);
                    }),
                    (r.prototype.isPainted = function () {
                      return this._bIsPainted;
                    }),
                    (r.prototype.clear = function () {
                      this._oContext.clearRect(
                        0,
                        0,
                        this._elCanvas.width,
                        this._elCanvas.height
                      ),
                        (this._bIsPainted = !1);
                    }),
                    (r.prototype.round = function (t) {
                      return t ? Math.floor(1e3 * t) / 1e3 : t;
                    }),
                    r
                  );
                })();
        ((e = function (t, e) {
          if (
            ((this._htOption = {
              width: 256,
              height: 256,
              typeNumber: 4,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: r.H,
            }),
            "string" == typeof e && (e = { text: e }),
            e)
          )
            for (var n in e) this._htOption[n] = e[n];
          "string" == typeof t && (t = document.getElementById(t)),
            this._htOption.useSVG && (f = h),
            (this._android = p()),
            (this._el = t),
            (this._oQRCode = null),
            (this._oDrawing = new f(this._el, this._htOption)),
            this._htOption.text && this.makeCode(this._htOption.text);
        }).prototype.makeCode = function (t) {
          (this._oQRCode = new n(
            (function (t, e) {
              for (
                var n = 1,
                  i = (function (t) {
                    var e = encodeURI(t)
                      .toString()
                      .replace(/\%[0-9a-fA-F]{2}/g, "a");
                    return e.length + (e.length != t ? 3 : 0);
                  })(t),
                  o = 0,
                  a = u.length;
                o <= a;
                o++
              ) {
                var s = 0;
                switch (e) {
                  case r.L:
                    s = u[o][0];
                    break;
                  case r.M:
                    s = u[o][1];
                    break;
                  case r.Q:
                    s = u[o][2];
                    break;
                  case r.H:
                    s = u[o][3];
                }
                if (i <= s) break;
                n++;
              }
              if (n > u.length) throw new Error("Too long data");
              return n;
            })(t, this._htOption.correctLevel),
            this._htOption.correctLevel
          )),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            (this._el.title = t),
            this._oDrawing.draw(this._oQRCode),
            this.makeImage();
        }),
          (e.prototype.makeImage = function () {
            "function" == typeof this._oDrawing.makeImage &&
              (!this._android || this._android >= 3) &&
              this._oDrawing.makeImage();
          }),
          (e.prototype.clear = function () {
            this._oDrawing.clear();
          }),
          (e.CorrectLevel = r);
      })(),
        t && t.exports && (t.exports = e);
    }).call(this, n(139)(t));
  },
  function (t, e, n) {
    "use strict";
    var i = Array.isArray,
      r = Object.keys,
      o = Object.prototype.hasOwnProperty;
    t.exports = function t(e, n) {
      if (e === n) return !0;
      if (e && n && "object" == typeof e && "object" == typeof n) {
        var a,
          s,
          l,
          c = i(e),
          d = i(n);
        if (c && d) {
          if ((s = e.length) != n.length) return !1;
          for (a = s; 0 != a--; ) if (!t(e[a], n[a])) return !1;
          return !0;
        }
        if (c != d) return !1;
        var u = e instanceof Date,
          p = n instanceof Date;
        if (u != p) return !1;
        if (u && p) return e.getTime() == n.getTime();
        var h = e instanceof RegExp,
          f = n instanceof RegExp;
        if (h != f) return !1;
        if (h && f) return e.toString() == n.toString();
        var b = r(e);
        if ((s = b.length) !== r(n).length) return !1;
        for (a = s; 0 != a--; ) if (!o.call(n, b[a])) return !1;
        for (a = s; 0 != a--; ) if (!t(e[(l = b[a])], n[l])) return !1;
        return !0;
      }
      return e != e && n != n;
    };
  },
  ,
  ,
  ,
  function (t, e, n) {
    var i = n(636);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(638);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(641);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(643);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(645);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(647);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(648);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(650);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(652);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(654);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(656);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(658);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(660);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(662);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(664);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(666);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(668);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(670);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(673);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(675);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(677);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(679);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(681);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(683);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(685);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(687);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(689);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(691);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(693);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(695);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(697);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(699);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(701);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(703);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(705);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(707);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(709);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(711);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(713);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(715);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(717);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(719);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(721);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(723);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(725);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(735);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(739);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(741);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(746);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    var i = n(748);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    (function (e) {
      var n = { version: "1.14.0" };
      (n[437] = (function () {
        for (
          var t =
              "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
            e = [],
            n = {},
            i = 0;
          i != t.length;
          ++i
        )
          65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
            (e[i] = t.charAt(i));
        return { enc: n, dec: e };
      })()),
        (n[620] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[737] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[850] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[852] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[857] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[861] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[865] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[866] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[874] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[895] = (function () {
          for (
            var t =
                "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ČüéďäĎŤčěĚĹÍľǪÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
              e = [],
              n = {},
              i = 0;
            i != t.length;
            ++i
          )
            65533 !== t.charCodeAt(i) && (n[t.charAt(i)] = i),
              (e[i] = t.charAt(i));
          return { enc: n, dec: e };
        })()),
        (n[932] = (function () {
          var t,
            e = [],
            n = {},
            i = [];
          for (
            i[0] =
              "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~���������������������������������｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ��������������������������������".split(
                ""
              ),
              t = 0;
            t != i[0].length;
            ++t
          )
            65533 !== i[0][t].charCodeAt(0) &&
              ((n[i[0][t]] = 0 + t), (e[0 + t] = i[0][t]));
          for (
            i[129] =
              "����������������������������������������������������������������　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》「」『』【】＋－±×�÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓�����������∈∋⊆⊇⊂⊃∪∩��������∧∨￢⇒⇔∀∃�����������∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬�������Å‰♯♭♪†‡¶����◯���".split(
                ""
              ),
              t = 0;
            t != i[129].length;
            ++t
          )
            65533 !== i[129][t].charCodeAt(0) &&
              ((n[i[129][t]] = 33024 + t), (e[33024 + t] = i[129][t]));
          for (
            i[130] =
              "�������������������������������������������������������������������������������０１２３４５６７８９�������ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ�������ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ����ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん��������������".split(
                ""
              ),
              t = 0;
            t != i[130].length;
            ++t
          )
            65533 !== i[130][t].charCodeAt(0) &&
              ((n[i[130][t]] = 33280 + t), (e[33280 + t] = i[130][t]));
          for (
            i[131] =
              "����������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミ�ムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ��������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�����������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[131].length;
            ++t
          )
            65533 !== i[131][t].charCodeAt(0) &&
              ((n[i[131][t]] = 33536 + t), (e[33536 + t] = i[131][t]));
          for (
            i[132] =
              "����������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмн�опрстуфхцчшщъыьэюя�������������─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂�����������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[132].length;
            ++t
          )
            65533 !== i[132][t].charCodeAt(0) &&
              ((n[i[132][t]] = 33792 + t), (e[33792 + t] = i[132][t]));
          for (
            i[135] =
              "����������������������������������������������������������������①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡��������㍻�〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪���������������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[135].length;
            ++t
          )
            65533 !== i[135][t].charCodeAt(0) &&
              ((n[i[135][t]] = 34560 + t), (e[34560 + t] = i[135][t]));
          for (
            i[136] =
              "���������������������������������������������������������������������������������������������������������������������������������������������������������������亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭���".split(
                ""
              ),
              t = 0;
            t != i[136].length;
            ++t
          )
            65533 !== i[136][t].charCodeAt(0) &&
              ((n[i[136][t]] = 34816 + t), (e[34816 + t] = i[136][t]));
          for (
            i[137] =
              "����������������������������������������������������������������院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円�園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改���".split(
                ""
              ),
              t = 0;
            t != i[137].length;
            ++t
          )
            65533 !== i[137][t].charCodeAt(0) &&
              ((n[i[137][t]] = 35072 + t), (e[35072 + t] = i[137][t]));
          for (
            i[138] =
              "����������������������������������������������������������������魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫�橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄���".split(
                ""
              ),
              t = 0;
            t != i[138].length;
            ++t
          )
            65533 !== i[138][t].charCodeAt(0) &&
              ((n[i[138][t]] = 35328 + t), (e[35328 + t] = i[138][t]));
          for (
            i[139] =
              "����������������������������������������������������������������機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救�朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈���".split(
                ""
              ),
              t = 0;
            t != i[139].length;
            ++t
          )
            65533 !== i[139][t].charCodeAt(0) &&
              ((n[i[139][t]] = 35584 + t), (e[35584 + t] = i[139][t]));
          for (
            i[140] =
              "����������������������������������������������������������������掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨�劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向���".split(
                ""
              ),
              t = 0;
            t != i[140].length;
            ++t
          )
            65533 !== i[140][t].charCodeAt(0) &&
              ((n[i[140][t]] = 35840 + t), (e[35840 + t] = i[140][t]));
          for (
            i[141] =
              "����������������������������������������������������������������后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降�項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷���".split(
                ""
              ),
              t = 0;
            t != i[141].length;
            ++t
          )
            65533 !== i[141][t].charCodeAt(0) &&
              ((n[i[141][t]] = 36096 + t), (e[36096 + t] = i[141][t]));
          for (
            i[142] =
              "����������������������������������������������������������������察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止�死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周���".split(
                ""
              ),
              t = 0;
            t != i[142].length;
            ++t
          )
            65533 !== i[142][t].charCodeAt(0) &&
              ((n[i[142][t]] = 36352 + t), (e[36352 + t] = i[142][t]));
          for (
            i[143] =
              "����������������������������������������������������������������宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳�準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾���".split(
                ""
              ),
              t = 0;
            t != i[143].length;
            ++t
          )
            65533 !== i[143][t].charCodeAt(0) &&
              ((n[i[143][t]] = 36608 + t), (e[36608 + t] = i[143][t]));
          for (
            i[144] =
              "����������������������������������������������������������������拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨�逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線���".split(
                ""
              ),
              t = 0;
            t != i[144].length;
            ++t
          )
            65533 !== i[144][t].charCodeAt(0) &&
              ((n[i[144][t]] = 36864 + t), (e[36864 + t] = i[144][t]));
          for (
            i[145] =
              "����������������������������������������������������������������繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻�操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只���".split(
                ""
              ),
              t = 0;
            t != i[145].length;
            ++t
          )
            65533 !== i[145][t].charCodeAt(0) &&
              ((n[i[145][t]] = 37120 + t), (e[37120 + t] = i[145][t]));
          for (
            i[146] =
              "����������������������������������������������������������������叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄�逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓���".split(
                ""
              ),
              t = 0;
            t != i[146].length;
            ++t
          )
            65533 !== i[146][t].charCodeAt(0) &&
              ((n[i[146][t]] = 37376 + t), (e[37376 + t] = i[146][t]));
          for (
            i[147] =
              "����������������������������������������������������������������邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬�凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入���".split(
                ""
              ),
              t = 0;
            t != i[147].length;
            ++t
          )
            65533 !== i[147][t].charCodeAt(0) &&
              ((n[i[147][t]] = 37632 + t), (e[37632 + t] = i[147][t]));
          for (
            i[148] =
              "����������������������������������������������������������������如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅�楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美���".split(
                ""
              ),
              t = 0;
            t != i[148].length;
            ++t
          )
            65533 !== i[148][t].charCodeAt(0) &&
              ((n[i[148][t]] = 37888 + t), (e[37888 + t] = i[148][t]));
          for (
            i[149] =
              "����������������������������������������������������������������鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷�斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋���".split(
                ""
              ),
              t = 0;
            t != i[149].length;
            ++t
          )
            65533 !== i[149][t].charCodeAt(0) &&
              ((n[i[149][t]] = 38144 + t), (e[38144 + t] = i[149][t]));
          for (
            i[150] =
              "����������������������������������������������������������������法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆�摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒���".split(
                ""
              ),
              t = 0;
            t != i[150].length;
            ++t
          )
            65533 !== i[150][t].charCodeAt(0) &&
              ((n[i[150][t]] = 38400 + t), (e[38400 + t] = i[150][t]));
          for (
            i[151] =
              "����������������������������������������������������������������諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲�沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯���".split(
                ""
              ),
              t = 0;
            t != i[151].length;
            ++t
          )
            65533 !== i[151][t].charCodeAt(0) &&
              ((n[i[151][t]] = 38656 + t), (e[38656 + t] = i[151][t]));
          for (
            i[152] =
              "����������������������������������������������������������������蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕��������������������������������������������弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲���".split(
                ""
              ),
              t = 0;
            t != i[152].length;
            ++t
          )
            65533 !== i[152][t].charCodeAt(0) &&
              ((n[i[152][t]] = 38912 + t), (e[38912 + t] = i[152][t]));
          for (
            i[153] =
              "����������������������������������������������������������������僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭�凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨���".split(
                ""
              ),
              t = 0;
            t != i[153].length;
            ++t
          )
            65533 !== i[153][t].charCodeAt(0) &&
              ((n[i[153][t]] = 39168 + t), (e[39168 + t] = i[153][t]));
          for (
            i[154] =
              "����������������������������������������������������������������咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸�噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩���".split(
                ""
              ),
              t = 0;
            t != i[154].length;
            ++t
          )
            65533 !== i[154][t].charCodeAt(0) &&
              ((n[i[154][t]] = 39424 + t), (e[39424 + t] = i[154][t]));
          for (
            i[155] =
              "����������������������������������������������������������������奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀�它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏���".split(
                ""
              ),
              t = 0;
            t != i[155].length;
            ++t
          )
            65533 !== i[155][t].charCodeAt(0) &&
              ((n[i[155][t]] = 39680 + t), (e[39680 + t] = i[155][t]));
          for (
            i[156] =
              "����������������������������������������������������������������廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠�怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛���".split(
                ""
              ),
              t = 0;
            t != i[156].length;
            ++t
          )
            65533 !== i[156][t].charCodeAt(0) &&
              ((n[i[156][t]] = 39936 + t), (e[39936 + t] = i[156][t]));
          for (
            i[157] =
              "����������������������������������������������������������������戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫�捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼���".split(
                ""
              ),
              t = 0;
            t != i[157].length;
            ++t
          )
            65533 !== i[157][t].charCodeAt(0) &&
              ((n[i[157][t]] = 40192 + t), (e[40192 + t] = i[157][t]));
          for (
            i[158] =
              "����������������������������������������������������������������曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎�梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣���".split(
                ""
              ),
              t = 0;
            t != i[158].length;
            ++t
          )
            65533 !== i[158][t].charCodeAt(0) &&
              ((n[i[158][t]] = 40448 + t), (e[40448 + t] = i[158][t]));
          for (
            i[159] =
              "����������������������������������������������������������������檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯�麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌���".split(
                ""
              ),
              t = 0;
            t != i[159].length;
            ++t
          )
            65533 !== i[159][t].charCodeAt(0) &&
              ((n[i[159][t]] = 40704 + t), (e[40704 + t] = i[159][t]));
          for (
            i[224] =
              "����������������������������������������������������������������漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝�烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱���".split(
                ""
              ),
              t = 0;
            t != i[224].length;
            ++t
          )
            65533 !== i[224][t].charCodeAt(0) &&
              ((n[i[224][t]] = 57344 + t), (e[57344 + t] = i[224][t]));
          for (
            i[225] =
              "����������������������������������������������������������������瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿�痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬���".split(
                ""
              ),
              t = 0;
            t != i[225].length;
            ++t
          )
            65533 !== i[225][t].charCodeAt(0) &&
              ((n[i[225][t]] = 57600 + t), (e[57600 + t] = i[225][t]));
          for (
            i[226] =
              "����������������������������������������������������������������磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰�窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆���".split(
                ""
              ),
              t = 0;
            t != i[226].length;
            ++t
          )
            65533 !== i[226][t].charCodeAt(0) &&
              ((n[i[226][t]] = 57856 + t), (e[57856 + t] = i[226][t]));
          for (
            i[227] =
              "����������������������������������������������������������������紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷�縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋���".split(
                ""
              ),
              t = 0;
            t != i[227].length;
            ++t
          )
            65533 !== i[227][t].charCodeAt(0) &&
              ((n[i[227][t]] = 58112 + t), (e[58112 + t] = i[227][t]));
          for (
            i[228] =
              "����������������������������������������������������������������隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤�艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈���".split(
                ""
              ),
              t = 0;
            t != i[228].length;
            ++t
          )
            65533 !== i[228][t].charCodeAt(0) &&
              ((n[i[228][t]] = 58368 + t), (e[58368 + t] = i[228][t]));
          for (
            i[229] =
              "����������������������������������������������������������������蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬�蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞���".split(
                ""
              ),
              t = 0;
            t != i[229].length;
            ++t
          )
            65533 !== i[229][t].charCodeAt(0) &&
              ((n[i[229][t]] = 58624 + t), (e[58624 + t] = i[229][t]));
          for (
            i[230] =
              "����������������������������������������������������������������襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧�諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊���".split(
                ""
              ),
              t = 0;
            t != i[230].length;
            ++t
          )
            65533 !== i[230][t].charCodeAt(0) &&
              ((n[i[230][t]] = 58880 + t), (e[58880 + t] = i[230][t]));
          for (
            i[231] =
              "����������������������������������������������������������������蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜�轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮���".split(
                ""
              ),
              t = 0;
            t != i[231].length;
            ++t
          )
            65533 !== i[231][t].charCodeAt(0) &&
              ((n[i[231][t]] = 59136 + t), (e[59136 + t] = i[231][t]));
          for (
            i[232] =
              "����������������������������������������������������������������錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙�閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰���".split(
                ""
              ),
              t = 0;
            t != i[232].length;
            ++t
          )
            65533 !== i[232][t].charCodeAt(0) &&
              ((n[i[232][t]] = 59392 + t), (e[59392 + t] = i[232][t]));
          for (
            i[233] =
              "����������������������������������������������������������������顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃�騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈���".split(
                ""
              ),
              t = 0;
            t != i[233].length;
            ++t
          )
            65533 !== i[233][t].charCodeAt(0) &&
              ((n[i[233][t]] = 59648 + t), (e[59648 + t] = i[233][t]));
          for (
            i[234] =
              "����������������������������������������������������������������鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯�黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙�������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[234].length;
            ++t
          )
            65533 !== i[234][t].charCodeAt(0) &&
              ((n[i[234][t]] = 59904 + t), (e[59904 + t] = i[234][t]));
          for (
            i[237] =
              "����������������������������������������������������������������纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏�塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱���".split(
                ""
              ),
              t = 0;
            t != i[237].length;
            ++t
          )
            65533 !== i[237][t].charCodeAt(0) &&
              ((n[i[237][t]] = 60672 + t), (e[60672 + t] = i[237][t]));
          for (
            i[238] =
              "����������������������������������������������������������������犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙�蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑��ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ￢￤＇＂���".split(
                ""
              ),
              t = 0;
            t != i[238].length;
            ++t
          )
            65533 !== i[238][t].charCodeAt(0) &&
              ((n[i[238][t]] = 60928 + t), (e[60928 + t] = i[238][t]));
          for (
            i[250] =
              "����������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊�兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯���".split(
                ""
              ),
              t = 0;
            t != i[250].length;
            ++t
          )
            65533 !== i[250][t].charCodeAt(0) &&
              ((n[i[250][t]] = 64e3 + t), (e[64e3 + t] = i[250][t]));
          for (
            i[251] =
              "����������������������������������������������������������������涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神�祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙���".split(
                ""
              ),
              t = 0;
            t != i[251].length;
            ++t
          )
            65533 !== i[251][t].charCodeAt(0) &&
              ((n[i[251][t]] = 64256 + t), (e[64256 + t] = i[251][t]));
          for (
            i[252] =
              "����������������������������������������������������������������髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[252].length;
            ++t
          )
            65533 !== i[252][t].charCodeAt(0) &&
              ((n[i[252][t]] = 64512 + t), (e[64512 + t] = i[252][t]));
          return { enc: n, dec: e };
        })()),
        (n[936] = (function () {
          var t,
            e = [],
            n = {},
            i = [];
          for (
            i[0] =
              "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�������������������������������������������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[0].length;
            ++t
          )
            65533 !== i[0][t].charCodeAt(0) &&
              ((n[i[0][t]] = 0 + t), (e[0 + t] = i[0][t]));
          for (
            i[129] =
              "����������������������������������������������������������������丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪乫乬乭乮乯乲乴乵乶乷乸乹乺乻乼乽乿亀亁亂亃亄亅亇亊�亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂伃伄伅伆伇伈伋伌伒伓伔伕伖伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾伿佀佁佂佄佅佇佈佉佊佋佌佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢�".split(
                ""
              ),
              t = 0;
            t != i[129].length;
            ++t
          )
            65533 !== i[129][t].charCodeAt(0) &&
              ((n[i[129][t]] = 33024 + t), (e[33024 + t] = i[129][t]));
          for (
            i[130] =
              "����������������������������������������������������������������侤侫侭侰侱侲侳侴侶侷侸侹侺侻侼侽侾俀俁係俆俇俈俉俋俌俍俒俓俔俕俖俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿倀倁倂倃倄倅倆倇倈倉倊�個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯倰倱倲倳倴倵倶倷倸倹倻倽倿偀偁偂偄偅偆偉偊偋偍偐偑偒偓偔偖偗偘偙偛偝偞偟偠偡偢偣偤偦偧偨偩偪偫偭偮偯偰偱偲偳側偵偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎傏傐傑傒傓傔傕傖傗傘備傚傛傜傝傞傟傠傡傢傤傦傪傫傭傮傯傰傱傳傴債傶傷傸傹傼�".split(
                ""
              ),
              t = 0;
            t != i[130].length;
            ++t
          )
            65533 !== i[130][t].charCodeAt(0) &&
              ((n[i[130][t]] = 33280 + t), (e[33280 + t] = i[130][t]));
          for (
            i[131] =
              "����������������������������������������������������������������傽傾傿僀僁僂僃僄僅僆僇僈僉僊僋僌働僎僐僑僒僓僔僕僗僘僙僛僜僝僞僟僠僡僢僣僤僥僨僩僪僫僯僰僱僲僴僶僷僸價僺僼僽僾僿儀儁儂儃億儅儈�儉儊儌儍儎儏儐儑儓儔儕儖儗儘儙儚儛儜儝儞償儠儢儣儤儥儦儧儨儩優儫儬儭儮儯儰儱儲儳儴儵儶儷儸儹儺儻儼儽儾兂兇兊兌兎兏児兒兓兗兘兙兛兝兞兟兠兡兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦冧冨冩冪冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒凓凔凕凖凗�".split(
                ""
              ),
              t = 0;
            t != i[131].length;
            ++t
          )
            65533 !== i[131][t].charCodeAt(0) &&
              ((n[i[131][t]] = 33536 + t), (e[33536 + t] = i[131][t]));
          for (
            i[132] =
              "����������������������������������������������������������������凘凙凚凜凞凟凢凣凥処凧凨凩凪凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄剅剆則剈剉剋剎剏剒剓剕剗剘�剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳剴創剶剷剸剹剺剻剼剾劀劃劄劅劆劇劉劊劋劌劍劎劏劑劒劔劕劖劗劘劙劚劜劤劥劦劧劮劯劰労劵劶劷劸効劺劻劼劽勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務勚勛勜勝勞勠勡勢勣勥勦勧勨勩勪勫勬勭勮勯勱勲勳勴勵勶勷勸勻勼勽匁匂匃匄匇匉匊匋匌匎�".split(
                ""
              ),
              t = 0;
            t != i[132].length;
            ++t
          )
            65533 !== i[132][t].charCodeAt(0) &&
              ((n[i[132][t]] = 33792 + t), (e[33792 + t] = i[132][t]));
          for (
            i[133] =
              "����������������������������������������������������������������匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯匰匱匲匳匴匵匶匷匸匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏�厐厑厒厓厔厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯厰厱厲厳厴厵厷厸厹厺厼厽厾叀參叄叅叆叇収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝呞呟呠呡呣呥呧呩呪呫呬呭呮呯呰呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡�".split(
                ""
              ),
              t = 0;
            t != i[133].length;
            ++t
          )
            65533 !== i[133][t].charCodeAt(0) &&
              ((n[i[133][t]] = 34048 + t), (e[34048 + t] = i[133][t]));
          for (
            i[134] =
              "����������������������������������������������������������������咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠員哢哣哤哫哬哯哰哱哴哵哶哷哸哹哻哾唀唂唃唄唅唈唊唋唌唍唎唒唓唕唖唗唘唙唚唜唝唞唟唡唥唦�唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋啌啍啎問啑啒啓啔啗啘啙啚啛啝啞啟啠啢啣啨啩啫啯啰啱啲啳啴啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠喡喢喣喤喥喦喨喩喪喫喬喭單喯喰喲喴営喸喺喼喿嗀嗁嗂嗃嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗嗘嗙嗚嗛嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸嗹嗺嗻嗼嗿嘂嘃嘄嘅�".split(
                ""
              ),
              t = 0;
            t != i[134].length;
            ++t
          )
            65533 !== i[134][t].charCodeAt(0) &&
              ((n[i[134][t]] = 34304 + t), (e[34304 + t] = i[134][t]));
          for (
            i[135] =
              "����������������������������������������������������������������嘆嘇嘊嘋嘍嘐嘑嘒嘓嘔嘕嘖嘗嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀噁噂噃噄噅噆噇噈噉噊噋噏噐噑噒噓噕噖噚噛噝噞噟噠噡�噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽噾噿嚀嚁嚂嚃嚄嚇嚈嚉嚊嚋嚌嚍嚐嚑嚒嚔嚕嚖嚗嚘嚙嚚嚛嚜嚝嚞嚟嚠嚡嚢嚤嚥嚦嚧嚨嚩嚪嚫嚬嚭嚮嚰嚱嚲嚳嚴嚵嚶嚸嚹嚺嚻嚽嚾嚿囀囁囂囃囄囅囆囇囈囉囋囌囍囎囏囐囑囒囓囕囖囘囙囜団囥囦囧囨囩囪囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國圌圍圎圏圐圑�".split(
                ""
              ),
              t = 0;
            t != i[135].length;
            ++t
          )
            65533 !== i[135][t].charCodeAt(0) &&
              ((n[i[135][t]] = 34560 + t), (e[34560 + t] = i[135][t]));
          for (
            i[136] =
              "����������������������������������������������������������������園圓圔圕圖圗團圙圚圛圝圞圠圡圢圤圥圦圧圫圱圲圴圵圶圷圸圼圽圿坁坃坄坅坆坈坉坋坒坓坔坕坖坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀�垁垇垈垉垊垍垎垏垐垑垔垕垖垗垘垙垚垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹垺垻垼垽垾垿埀埁埄埅埆埇埈埉埊埌埍埐埑埓埖埗埛埜埞埡埢埣埥埦埧埨埩埪埫埬埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥堦堧堨堩堫堬堭堮堯報堲堳場堶堷堸堹堺堻堼堽�".split(
                ""
              ),
              t = 0;
            t != i[136].length;
            ++t
          )
            65533 !== i[136][t].charCodeAt(0) &&
              ((n[i[136][t]] = 34816 + t), (e[34816 + t] = i[136][t]));
          for (
            i[137] =
              "����������������������������������������������������������������堾堿塀塁塂塃塅塆塇塈塉塊塋塎塏塐塒塓塕塖塗塙塚塛塜塝塟塠塡塢塣塤塦塧塨塩塪塭塮塯塰塱塲塳塴塵塶塷塸塹塺塻塼塽塿墂墄墆墇墈墊墋墌�墍墎墏墐墑墔墕墖増墘墛墜墝墠墡墢墣墤墥墦墧墪墫墬墭墮墯墰墱墲墳墴墵墶墷墸墹墺墻墽墾墿壀壂壃壄壆壇壈壉壊壋壌壍壎壏壐壒壓壔壖壗壘壙壚壛壜壝壞壟壠壡壢壣壥壦壧壨壩壪壭壯壱売壴壵壷壸壺壻壼壽壾壿夀夁夃夅夆夈変夊夋夌夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻�".split(
                ""
              ),
              t = 0;
            t != i[137].length;
            ++t
          )
            65533 !== i[137][t].charCodeAt(0) &&
              ((n[i[137][t]] = 35072 + t), (e[35072 + t] = i[137][t]));
          for (
            i[138] =
              "����������������������������������������������������������������夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛奜奝奞奟奡奣奤奦奧奨奩奪奫奬奭奮奯奰奱奲奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦�妧妬妭妰妱妳妴妵妶妷妸妺妼妽妿姀姁姂姃姄姅姇姈姉姌姍姎姏姕姖姙姛姞姟姠姡姢姤姦姧姩姪姫姭姮姯姰姱姲姳姴姵姶姷姸姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪娫娬娭娮娯娰娳娵娷娸娹娺娻娽娾娿婁婂婃婄婅婇婈婋婌婍婎婏婐婑婒婓婔婖婗婘婙婛婜婝婞婟婠�".split(
                ""
              ),
              t = 0;
            t != i[138].length;
            ++t
          )
            65533 !== i[138][t].charCodeAt(0) &&
              ((n[i[138][t]] = 35328 + t), (e[35328 + t] = i[138][t]));
          for (
            i[139] =
              "����������������������������������������������������������������婡婣婤婥婦婨婩婫婬婭婮婯婰婱婲婳婸婹婻婼婽婾媀媁媂媃媄媅媆媇媈媉媊媋媌媍媎媏媐媑媓媔媕媖媗媘媙媜媝媞媟媠媡媢媣媤媥媦媧媨媩媫媬�媭媮媯媰媱媴媶媷媹媺媻媼媽媿嫀嫃嫄嫅嫆嫇嫈嫊嫋嫍嫎嫏嫐嫑嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬嫭嫮嫯嫰嫲嫳嫴嫵嫶嫷嫸嫹嫺嫻嫼嫽嫾嫿嬀嬁嬂嬃嬄嬅嬆嬇嬈嬊嬋嬌嬍嬎嬏嬐嬑嬒嬓嬔嬕嬘嬙嬚嬛嬜嬝嬞嬟嬠嬡嬢嬣嬤嬥嬦嬧嬨嬩嬪嬫嬬嬭嬮嬯嬰嬱嬳嬵嬶嬸嬹嬺嬻嬼嬽嬾嬿孁孂孃孄孅孆孇�".split(
                ""
              ),
              t = 0;
            t != i[139].length;
            ++t
          )
            65533 !== i[139][t].charCodeAt(0) &&
              ((n[i[139][t]] = 35584 + t), (e[35584 + t] = i[139][t]));
          for (
            i[140] =
              "����������������������������������������������������������������孈孉孊孋孌孍孎孏孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏�寑寔寕寖寗寘寙寚寛寜寠寢寣實寧審寪寫寬寭寯寱寲寳寴寵寶寷寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧屨屩屪屫屬屭屰屲屳屴屵屶屷屸屻屼屽屾岀岃岄岅岆岇岉岊岋岎岏岒岓岕岝岞岟岠岡岤岥岦岧岨�".split(
                ""
              ),
              t = 0;
            t != i[140].length;
            ++t
          )
            65533 !== i[140][t].charCodeAt(0) &&
              ((n[i[140][t]] = 35840 + t), (e[35840 + t] = i[140][t]));
          for (
            i[141] =
              "����������������������������������������������������������������岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅峆峇峈峉峊峌峍峎峏峐峑峓峔峕峖峗峘峚峛峜峝峞峟峠峢峣峧峩峫峬峮峯峱峲峳峴峵島峷峸峹峺峼峽峾峿崀�崁崄崅崈崉崊崋崌崍崏崐崑崒崓崕崗崘崙崚崜崝崟崠崡崢崣崥崨崪崫崬崯崰崱崲崳崵崶崷崸崹崺崻崼崿嵀嵁嵂嵃嵄嵅嵆嵈嵉嵍嵎嵏嵐嵑嵒嵓嵔嵕嵖嵗嵙嵚嵜嵞嵟嵠嵡嵢嵣嵤嵥嵦嵧嵨嵪嵭嵮嵰嵱嵲嵳嵵嵶嵷嵸嵹嵺嵻嵼嵽嵾嵿嶀嶁嶃嶄嶅嶆嶇嶈嶉嶊嶋嶌嶍嶎嶏嶐嶑嶒嶓嶔嶕嶖嶗嶘嶚嶛嶜嶞嶟嶠�".split(
                ""
              ),
              t = 0;
            t != i[141].length;
            ++t
          )
            65533 !== i[141][t].charCodeAt(0) &&
              ((n[i[141][t]] = 36096 + t), (e[36096 + t] = i[141][t]));
          for (
            i[142] =
              "����������������������������������������������������������������嶡嶢嶣嶤嶥嶦嶧嶨嶩嶪嶫嶬嶭嶮嶯嶰嶱嶲嶳嶴嶵嶶嶸嶹嶺嶻嶼嶽嶾嶿巀巁巂巃巄巆巇巈巉巊巋巌巎巏巐巑巒巓巔巕巖巗巘巙巚巜巟巠巣巤巪巬巭�巰巵巶巸巹巺巻巼巿帀帄帇帉帊帋帍帎帒帓帗帞帟帠帡帢帣帤帥帨帩帪師帬帯帰帲帳帴帵帶帹帺帾帿幀幁幃幆幇幈幉幊幋幍幎幏幐幑幒幓幖幗幘幙幚幜幝幟幠幣幤幥幦幧幨幩幪幫幬幭幮幯幰幱幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨庩庪庫庬庮庯庰庱庲庴庺庻庼庽庿廀廁廂廃廄廅�".split(
                ""
              ),
              t = 0;
            t != i[142].length;
            ++t
          )
            65533 !== i[142][t].charCodeAt(0) &&
              ((n[i[142][t]] = 36352 + t), (e[36352 + t] = i[142][t]));
          for (
            i[143] =
              "����������������������������������������������������������������廆廇廈廋廌廍廎廏廐廔廕廗廘廙廚廜廝廞廟廠廡廢廣廤廥廦廧廩廫廬廭廮廯廰廱廲廳廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤�弨弫弬弮弰弲弳弴張弶強弸弻弽弾弿彁彂彃彄彅彆彇彈彉彊彋彌彍彎彏彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢徣徤徥徦徧復徫徬徯徰徱徲徳徴徶徸徹徺徻徾徿忀忁忂忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇�".split(
                ""
              ),
              t = 0;
            t != i[143].length;
            ++t
          )
            65533 !== i[143][t].charCodeAt(0) &&
              ((n[i[143][t]] = 36608 + t), (e[36608 + t] = i[143][t]));
          for (
            i[144] =
              "����������������������������������������������������������������怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰怱怲怳怴怶怷怸怹怺怽怾恀恄恅恆恇恈恉恊恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀�悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽悾悿惀惁惂惃惄惇惈惉惌惍惎惏惐惒惓惔惖惗惙惛惞惡惢惣惤惥惪惱惲惵惷惸惻惼惽惾惿愂愃愄愅愇愊愋愌愐愑愒愓愔愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬愭愮愯愰愱愲愳愴愵愶愷愸愹愺愻愼愽愾慀慁慂慃慄慅慆�".split(
                ""
              ),
              t = 0;
            t != i[144].length;
            ++t
          )
            65533 !== i[144][t].charCodeAt(0) &&
              ((n[i[144][t]] = 36864 + t), (e[36864 + t] = i[144][t]));
          for (
            i[145] =
              "����������������������������������������������������������������慇慉態慍慏慐慒慓慔慖慗慘慙慚慛慜慞慟慠慡慣慤慥慦慩慪慫慬慭慮慯慱慲慳慴慶慸慹慺慻慼慽慾慿憀憁憂憃憄憅憆憇憈憉憊憌憍憏憐憑憒憓憕�憖憗憘憙憚憛憜憞憟憠憡憢憣憤憥憦憪憫憭憮憯憰憱憲憳憴憵憶憸憹憺憻憼憽憿懀懁懃懄懅懆懇應懌懍懎懏懐懓懕懖懗懘懙懚懛懜懝懞懟懠懡懢懣懤懥懧懨懩懪懫懬懭懮懯懰懱懲懳懴懶懷懸懹懺懻懼懽懾戀戁戂戃戄戅戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸戹戺戻戼扂扄扅扆扊�".split(
                ""
              ),
              t = 0;
            t != i[145].length;
            ++t
          )
            65533 !== i[145][t].charCodeAt(0) &&
              ((n[i[145][t]] = 37120 + t), (e[37120 + t] = i[145][t]));
          for (
            i[146] =
              "����������������������������������������������������������������扏扐払扖扗扙扚扜扝扞扟扠扡扢扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋抌抍抎抏抐抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁�拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳挴挵挶挷挸挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖捗捘捙捚捛捜捝捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙掚掛掜掝掞掟採掤掦掫掯掱掲掵掶掹掻掽掿揀�".split(
                ""
              ),
              t = 0;
            t != i[146].length;
            ++t
          )
            65533 !== i[146][t].charCodeAt(0) &&
              ((n[i[146][t]] = 37376 + t), (e[37376 + t] = i[146][t]));
          for (
            i[147] =
              "����������������������������������������������������������������揁揂揃揅揇揈揊揋揌揑揓揔揕揗揘揙揚換揜揝揟揢揤揥揦揧揨揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆搇搈搉搊損搎搑搒搕搖搗搘搙搚搝搟搢搣搤�搥搧搨搩搫搮搯搰搱搲搳搵搶搷搸搹搻搼搾摀摂摃摉摋摌摍摎摏摐摑摓摕摖摗摙摚摛摜摝摟摠摡摢摣摤摥摦摨摪摫摬摮摯摰摱摲摳摴摵摶摷摻摼摽摾摿撀撁撃撆撈撉撊撋撌撍撎撏撐撓撔撗撘撚撛撜撝撟撠撡撢撣撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆擇擈擉擊擋擌擏擑擓擔擕擖擙據�".split(
                ""
              ),
              t = 0;
            t != i[147].length;
            ++t
          )
            65533 !== i[147][t].charCodeAt(0) &&
              ((n[i[147][t]] = 37632 + t), (e[37632 + t] = i[147][t]));
          for (
            i[148] =
              "����������������������������������������������������������������擛擜擝擟擠擡擣擥擧擨擩擪擫擬擭擮擯擰擱擲擳擴擵擶擷擸擹擺擻擼擽擾擿攁攂攃攄攅攆攇攈攊攋攌攍攎攏攐攑攓攔攕攖攗攙攚攛攜攝攞攟攠攡�攢攣攤攦攧攨攩攪攬攭攰攱攲攳攷攺攼攽敀敁敂敃敄敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數敹敺敻敼敽敾敿斀斁斂斃斄斅斆斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱斲斳斴斵斶斷斸斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘旙旚旛旜旝旞旟旡旣旤旪旫�".split(
                ""
              ),
              t = 0;
            t != i[148].length;
            ++t
          )
            65533 !== i[148][t].charCodeAt(0) &&
              ((n[i[148][t]] = 37888 + t), (e[37888 + t] = i[148][t]));
          for (
            i[149] =
              "����������������������������������������������������������������旲旳旴旵旸旹旻旼旽旾旿昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷昸昹昺昻昽昿晀時晄晅晆晇晈晉晊晍晎晐晑晘�晙晛晜晝晞晠晢晣晥晧晩晪晫晬晭晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘暙暚暛暜暞暟暠暡暢暣暤暥暦暩暪暫暬暭暯暰暱暲暳暵暶暷暸暺暻暼暽暿曀曁曂曃曄曅曆曇曈曉曊曋曌曍曎曏曐曑曒曓曔曕曖曗曘曚曞曟曠曡曢曣曤曥曧曨曪曫曬曭曮曯曱曵曶書曺曻曽朁朂會�".split(
                ""
              ),
              t = 0;
            t != i[149].length;
            ++t
          )
            65533 !== i[149][t].charCodeAt(0) &&
              ((n[i[149][t]] = 38144 + t), (e[38144 + t] = i[149][t]));
          for (
            i[150] =
              "����������������������������������������������������������������朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠朡朢朣朤朥朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗杘杙杚杛杝杢杣杤杦杧杫杬杮東杴杶�杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹枺枻枼枽枾枿柀柂柅柆柇柈柉柊柋柌柍柎柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵柶柷柸柹柺査柼柾栁栂栃栄栆栍栐栒栔栕栘栙栚栛栜栞栟栠栢栣栤栥栦栧栨栫栬栭栮栯栰栱栴栵栶栺栻栿桇桋桍桏桒桖桗桘桙桚桛�".split(
                ""
              ),
              t = 0;
            t != i[150].length;
            ++t
          )
            65533 !== i[150][t].charCodeAt(0) &&
              ((n[i[150][t]] = 38400 + t), (e[38400 + t] = i[150][t]));
          for (
            i[151] =
              "����������������������������������������������������������������桜桝桞桟桪桬桭桮桯桰桱桲桳桵桸桹桺桻桼桽桾桿梀梂梄梇梈梉梊梋梌梍梎梐梑梒梔梕梖梘梙梚梛梜條梞梟梠梡梣梤梥梩梪梫梬梮梱梲梴梶梷梸�梹梺梻梼梽梾梿棁棃棄棅棆棇棈棊棌棎棏棐棑棓棔棖棗棙棛棜棝棞棟棡棢棤棥棦棧棨棩棪棫棬棭棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆椇椈椉椊椌椏椑椓椔椕椖椗椘椙椚椛検椝椞椡椢椣椥椦椧椨椩椪椫椬椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃楄楅楆楇楈楉楊楋楌楍楎楏楐楑楒楓楕楖楘楙楛楜楟�".split(
                ""
              ),
              t = 0;
            t != i[151].length;
            ++t
          )
            65533 !== i[151][t].charCodeAt(0) &&
              ((n[i[151][t]] = 38656 + t), (e[38656 + t] = i[151][t]));
          for (
            i[152] =
              "����������������������������������������������������������������楡楢楤楥楧楨楩楪楬業楯楰楲楳楴極楶楺楻楽楾楿榁榃榅榊榋榌榎榏榐榑榒榓榖榗榙榚榝榞榟榠榡榢榣榤榥榦榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽�榾榿槀槂槃槄槅槆槇槈槉構槍槏槑槒槓槕槖槗様槙槚槜槝槞槡槢槣槤槥槦槧槨槩槪槫槬槮槯槰槱槳槴槵槶槷槸槹槺槻槼槾樀樁樂樃樄樅樆樇樈樉樋樌樍樎樏樐樑樒樓樔樕樖標樚樛樜樝樞樠樢樣樤樥樦樧権樫樬樭樮樰樲樳樴樶樷樸樹樺樻樼樿橀橁橂橃橅橆橈橉橊橋橌橍橎橏橑橒橓橔橕橖橗橚�".split(
                ""
              ),
              t = 0;
            t != i[152].length;
            ++t
          )
            65533 !== i[152][t].charCodeAt(0) &&
              ((n[i[152][t]] = 38912 + t), (e[38912 + t] = i[152][t]));
          for (
            i[153] =
              "����������������������������������������������������������������橜橝橞機橠橢橣橤橦橧橨橩橪橫橬橭橮橯橰橲橳橴橵橶橷橸橺橻橽橾橿檁檂檃檅檆檇檈檉檊檋檌檍檏檒檓檔檕檖檘檙檚檛檜檝檞檟檡檢檣檤檥檦�檧檨檪檭檮檯檰檱檲檳檴檵檶檷檸檹檺檻檼檽檾檿櫀櫁櫂櫃櫄櫅櫆櫇櫈櫉櫊櫋櫌櫍櫎櫏櫐櫑櫒櫓櫔櫕櫖櫗櫘櫙櫚櫛櫜櫝櫞櫟櫠櫡櫢櫣櫤櫥櫦櫧櫨櫩櫪櫫櫬櫭櫮櫯櫰櫱櫲櫳櫴櫵櫶櫷櫸櫹櫺櫻櫼櫽櫾櫿欀欁欂欃欄欅欆欇欈欉權欋欌欍欎欏欐欑欒欓欔欕欖欗欘欙欚欛欜欝欞欟欥欦欨欩欪欫欬欭欮�".split(
                ""
              ),
              t = 0;
            t != i[153].length;
            ++t
          )
            65533 !== i[153][t].charCodeAt(0) &&
              ((n[i[153][t]] = 39168 + t), (e[39168 + t] = i[153][t]));
          for (
            i[154] =
              "����������������������������������������������������������������欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍歎歏歐歑歒歓歔歕歖歗歘歚歛歜歝歞歟歠歡歨歩歫歬歭歮歯歰歱歲歳歴歵歶歷歸歺歽歾歿殀殅殈�殌殎殏殐殑殔殕殗殘殙殜殝殞殟殠殢殣殤殥殦殧殨殩殫殬殭殮殯殰殱殲殶殸殹殺殻殼殽殾毀毃毄毆毇毈毉毊毌毎毐毑毘毚毜毝毞毟毠毢毣毤毥毦毧毨毩毬毭毮毰毱毲毴毶毷毸毺毻毼毾毿氀氁氂氃氄氈氉氊氋氌氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋汌汍汎汏汑汒汓汖汘�".split(
                ""
              ),
              t = 0;
            t != i[154].length;
            ++t
          )
            65533 !== i[154][t].charCodeAt(0) &&
              ((n[i[154][t]] = 39424 + t), (e[39424 + t] = i[154][t]));
          for (
            i[155] =
              "����������������������������������������������������������������汙汚汢汣汥汦汧汫汬汭汮汯汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘�泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟洠洡洢洣洤洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽浾浿涀涁涃涄涆涇涊涋涍涏涐涒涖涗涘涙涚涜涢涥涬涭涰涱涳涴涶涷涹涺涻涼涽涾淁淂淃淈淉淊�".split(
                ""
              ),
              t = 0;
            t != i[155].length;
            ++t
          )
            65533 !== i[155][t].charCodeAt(0) &&
              ((n[i[155][t]] = 39680 + t), (e[39680 + t] = i[155][t]));
          for (
            i[156] =
              "����������������������������������������������������������������淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽淾淿渀渁渂渃渄渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵�渶渷渹渻渼渽渾渿湀湁湂湅湆湇湈湉湊湋湌湏湐湑湒湕湗湙湚湜湝湞湠湡湢湣湤湥湦湧湨湩湪湬湭湯湰湱湲湳湴湵湶湷湸湹湺湻湼湽満溁溂溄溇溈溊溋溌溍溎溑溒溓溔溕準溗溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪滫滬滭滮滯�".split(
                ""
              ),
              t = 0;
            t != i[156].length;
            ++t
          )
            65533 !== i[156][t].charCodeAt(0) &&
              ((n[i[156][t]] = 39936 + t), (e[39936 + t] = i[156][t]));
          for (
            i[157] =
              "����������������������������������������������������������������滰滱滲滳滵滶滷滸滺滻滼滽滾滿漀漁漃漄漅漇漈漊漋漌漍漎漐漑漒漖漗漘漙漚漛漜漝漞漟漡漢漣漥漦漧漨漬漮漰漲漴漵漷漸漹漺漻漼漽漿潀潁潂�潃潄潅潈潉潊潌潎潏潐潑潒潓潔潕潖潗潙潚潛潝潟潠潡潣潤潥潧潨潩潪潫潬潯潰潱潳潵潶潷潹潻潽潾潿澀澁澂澃澅澆澇澊澋澏澐澑澒澓澔澕澖澗澘澙澚澛澝澞澟澠澢澣澤澥澦澨澩澪澫澬澭澮澯澰澱澲澴澵澷澸澺澻澼澽澾澿濁濃濄濅濆濇濈濊濋濌濍濎濏濐濓濔濕濖濗濘濙濚濛濜濝濟濢濣濤濥�".split(
                ""
              ),
              t = 0;
            t != i[157].length;
            ++t
          )
            65533 !== i[157][t].charCodeAt(0) &&
              ((n[i[157][t]] = 40192 + t), (e[40192 + t] = i[157][t]));
          for (
            i[158] =
              "����������������������������������������������������������������濦濧濨濩濪濫濬濭濰濱濲濳濴濵濶濷濸濹濺濻濼濽濾濿瀀瀁瀂瀃瀄瀅瀆瀇瀈瀉瀊瀋瀌瀍瀎瀏瀐瀒瀓瀔瀕瀖瀗瀘瀙瀜瀝瀞瀟瀠瀡瀢瀤瀥瀦瀧瀨瀩瀪�瀫瀬瀭瀮瀯瀰瀱瀲瀳瀴瀶瀷瀸瀺瀻瀼瀽瀾瀿灀灁灂灃灄灅灆灇灈灉灊灋灍灎灐灑灒灓灔灕灖灗灘灙灚灛灜灝灟灠灡灢灣灤灥灦灧灨灩灪灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞炟炠炡炢炣炤炥炦炧炨炩炪炰炲炴炵炶為炾炿烄烅烆烇烉烋烌烍烎烏烐烑烒烓烔烕烖烗烚�".split(
                ""
              ),
              t = 0;
            t != i[158].length;
            ++t
          )
            65533 !== i[158][t].charCodeAt(0) &&
              ((n[i[158][t]] = 40448 + t), (e[40448 + t] = i[158][t]));
          for (
            i[159] =
              "����������������������������������������������������������������烜烝烞烠烡烢烣烥烪烮烰烱烲烳烴烵烶烸烺烻烼烾烿焀焁焂焃焄焅焆焇焈焋焌焍焎焏焑焒焔焗焛焜焝焞焟焠無焢焣焤焥焧焨焩焪焫焬焭焮焲焳焴�焵焷焸焹焺焻焼焽焾焿煀煁煂煃煄煆煇煈煉煋煍煏煐煑煒煓煔煕煖煗煘煙煚煛煝煟煠煡煢煣煥煩煪煫煬煭煯煰煱煴煵煶煷煹煻煼煾煿熀熁熂熃熅熆熇熈熉熋熌熍熎熐熑熒熓熕熖熗熚熛熜熝熞熡熢熣熤熥熦熧熩熪熫熭熮熯熰熱熲熴熶熷熸熺熻熼熽熾熿燀燁燂燄燅燆燇燈燉燊燋燌燍燏燐燑燒燓�".split(
                ""
              ),
              t = 0;
            t != i[159].length;
            ++t
          )
            65533 !== i[159][t].charCodeAt(0) &&
              ((n[i[159][t]] = 40704 + t), (e[40704 + t] = i[159][t]));
          for (
            i[160] =
              "����������������������������������������������������������������燖燗燘燙燚燛燜燝燞營燡燢燣燤燦燨燩燪燫燬燭燯燰燱燲燳燴燵燶燷燸燺燻燼燽燾燿爀爁爂爃爄爅爇爈爉爊爋爌爍爎爏爐爑爒爓爔爕爖爗爘爙爚�爛爜爞爟爠爡爢爣爤爥爦爧爩爫爭爮爯爲爳爴爺爼爾牀牁牂牃牄牅牆牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅犆犇犈犉犌犎犐犑犓犔犕犖犗犘犙犚犛犜犝犞犠犡犢犣犤犥犦犧犨犩犪犫犮犱犲犳犵犺犻犼犽犾犿狀狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛�".split(
                ""
              ),
              t = 0;
            t != i[160].length;
            ++t
          )
            65533 !== i[160][t].charCodeAt(0) &&
              ((n[i[160][t]] = 40960 + t), (e[40960 + t] = i[160][t]));
          for (
            i[161] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈〉《》「」『』〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓�".split(
                ""
              ),
              t = 0;
            t != i[161].length;
            ++t
          )
            65533 !== i[161][t].charCodeAt(0) &&
              ((n[i[161][t]] = 41216 + t), (e[41216 + t] = i[161][t]));
          for (
            i[162] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ������⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩��㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩��ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ���".split(
                ""
              ),
              t = 0;
            t != i[162].length;
            ++t
          )
            65533 !== i[162][t].charCodeAt(0) &&
              ((n[i[162][t]] = 41472 + t), (e[41472 + t] = i[162][t]));
          for (
            i[163] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������！＂＃￥％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(
                ""
              ),
              t = 0;
            t != i[163].length;
            ++t
          )
            65533 !== i[163][t].charCodeAt(0) &&
              ((n[i[163][t]] = 41728 + t), (e[41728 + t] = i[163][t]));
          for (
            i[164] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(
                ""
              ),
              t = 0;
            t != i[164].length;
            ++t
          )
            65533 !== i[164][t].charCodeAt(0) &&
              ((n[i[164][t]] = 41984 + t), (e[41984 + t] = i[164][t]));
          for (
            i[165] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(
                ""
              ),
              t = 0;
            t != i[165].length;
            ++t
          )
            65533 !== i[165][t].charCodeAt(0) &&
              ((n[i[165][t]] = 42240 + t), (e[42240 + t] = i[165][t]));
          for (
            i[166] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������︵︶︹︺︿﹀︽︾﹁﹂﹃﹄��︻︼︷︸︱�︳︴����������".split(
                ""
              ),
              t = 0;
            t != i[166].length;
            ++t
          )
            65533 !== i[166][t].charCodeAt(0) &&
              ((n[i[166][t]] = 42496 + t), (e[42496 + t] = i[166][t]));
          for (
            i[167] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(
                ""
              ),
              t = 0;
            t != i[167].length;
            ++t
          )
            65533 !== i[167][t].charCodeAt(0) &&
              ((n[i[167][t]] = 42752 + t), (e[42752 + t] = i[167][t]));
          for (
            i[168] =
              "����������������������������������������������������������������ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳▁▂▃▄▅▆▇�█▉▊▋▌▍▎▏▓▔▕▼▽◢◣◤◥☉⊕〒〝〞�����������āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ�ńň�ɡ����ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ����������������������".split(
                ""
              ),
              t = 0;
            t != i[168].length;
            ++t
          )
            65533 !== i[168][t].charCodeAt(0) &&
              ((n[i[168][t]] = 43008 + t), (e[43008 + t] = i[168][t]));
          for (
            i[169] =
              "����������������������������������������������������������������〡〢〣〤〥〦〧〨〩㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤�℡㈱�‐���ー゛゜ヽヾ〆ゝゞ﹉﹊﹋﹌﹍﹎﹏﹐﹑﹒﹔﹕﹖﹗﹙﹚﹛﹜﹝﹞﹟﹠﹡�﹢﹣﹤﹥﹦﹨﹩﹪﹫�������������〇�������������─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋����������������".split(
                ""
              ),
              t = 0;
            t != i[169].length;
            ++t
          )
            65533 !== i[169][t].charCodeAt(0) &&
              ((n[i[169][t]] = 43264 + t), (e[43264 + t] = i[169][t]));
          for (
            i[170] =
              "����������������������������������������������������������������狜狝狟狢狣狤狥狦狧狪狫狵狶狹狽狾狿猀猂猄猅猆猇猈猉猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀獁獂獃獄獅獆獇獈�獉獊獋獌獎獏獑獓獔獕獖獘獙獚獛獜獝獞獟獡獢獣獤獥獦獧獨獩獪獫獮獰獱�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[170].length;
            ++t
          )
            65533 !== i[170][t].charCodeAt(0) &&
              ((n[i[170][t]] = 43520 + t), (e[43520 + t] = i[170][t]));
          for (
            i[171] =
              "����������������������������������������������������������������獲獳獴獵獶獷獸獹獺獻獼獽獿玀玁玂玃玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣玤玥玦玧玨玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃珄珅珆珇�珋珌珎珒珓珔珕珖珗珘珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳珴珵珶珷�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[171].length;
            ++t
          )
            65533 !== i[171][t].charCodeAt(0) &&
              ((n[i[171][t]] = 43776 + t), (e[43776 + t] = i[171][t]));
          for (
            i[172] =
              "����������������������������������������������������������������珸珹珺珻珼珽現珿琀琁琂琄琇琈琋琌琍琎琑琒琓琔琕琖琗琘琙琜琝琞琟琠琡琣琤琧琩琫琭琯琱琲琷琸琹琺琻琽琾琿瑀瑂瑃瑄瑅瑆瑇瑈瑉瑊瑋瑌瑍�瑎瑏瑐瑑瑒瑓瑔瑖瑘瑝瑠瑡瑢瑣瑤瑥瑦瑧瑨瑩瑪瑫瑬瑮瑯瑱瑲瑳瑴瑵瑸瑹瑺�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[172].length;
            ++t
          )
            65533 !== i[172][t].charCodeAt(0) &&
              ((n[i[172][t]] = 44032 + t), (e[44032 + t] = i[172][t]));
          for (
            i[173] =
              "����������������������������������������������������������������瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑璒璓璔璕璖璗璘璙璚璛璝璟璠璡璢璣璤璥璦璪璫璬璭璮璯環璱璲璳璴璵璶璷璸璹璻璼璽璾璿瓀瓁瓂瓃瓄瓅瓆瓇�瓈瓉瓊瓋瓌瓍瓎瓏瓐瓑瓓瓔瓕瓖瓗瓘瓙瓚瓛瓝瓟瓡瓥瓧瓨瓩瓪瓫瓬瓭瓰瓱瓲�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[173].length;
            ++t
          )
            65533 !== i[173][t].charCodeAt(0) &&
              ((n[i[173][t]] = 44288 + t), (e[44288 + t] = i[173][t]));
          for (
            i[174] =
              "����������������������������������������������������������������瓳瓵瓸瓹瓺瓻瓼瓽瓾甀甁甂甃甅甆甇甈甉甊甋甌甎甐甒甔甕甖甗甛甝甞甠甡產産甤甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘�畝畞畟畠畡畢畣畤畧畨畩畫畬畭畮畯異畱畳畵當畷畺畻畼畽畾疀疁疂疄疅疇�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[174].length;
            ++t
          )
            65533 !== i[174][t].charCodeAt(0) &&
              ((n[i[174][t]] = 44544 + t), (e[44544 + t] = i[174][t]));
          for (
            i[175] =
              "����������������������������������������������������������������疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦疧疨疩疪疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇�瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[175].length;
            ++t
          )
            65533 !== i[175][t].charCodeAt(0) &&
              ((n[i[175][t]] = 44800 + t), (e[44800 + t] = i[175][t]));
          for (
            i[176] =
              "����������������������������������������������������������������癅癆癇癈癉癊癋癎癏癐癑癒癓癕癗癘癙癚癛癝癟癠癡癢癤癥癦癧癨癩癪癬癭癮癰癱癲癳癴癵癶癷癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛�皜皝皞皟皠皡皢皣皥皦皧皨皩皪皫皬皭皯皰皳皵皶皷皸皹皺皻皼皽皾盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥�".split(
                ""
              ),
              t = 0;
            t != i[176].length;
            ++t
          )
            65533 !== i[176][t].charCodeAt(0) &&
              ((n[i[176][t]] = 45056 + t), (e[45056 + t] = i[176][t]));
          for (
            i[177] =
              "����������������������������������������������������������������盄盇盉盋盌盓盕盙盚盜盝盞盠盡盢監盤盦盧盨盩盪盫盬盭盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎眏眐眑眒眓眔眕眖眗眘眛眜眝眞眡眣眤眥眧眪眫�眬眮眰眱眲眳眴眹眻眽眾眿睂睄睅睆睈睉睊睋睌睍睎睏睒睓睔睕睖睗睘睙睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳�".split(
                ""
              ),
              t = 0;
            t != i[177].length;
            ++t
          )
            65533 !== i[177][t].charCodeAt(0) &&
              ((n[i[177][t]] = 45312 + t), (e[45312 + t] = i[177][t]));
          for (
            i[178] =
              "����������������������������������������������������������������睝睞睟睠睤睧睩睪睭睮睯睰睱睲睳睴睵睶睷睸睺睻睼瞁瞂瞃瞆瞇瞈瞉瞊瞋瞏瞐瞓瞔瞕瞖瞗瞘瞙瞚瞛瞜瞝瞞瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶瞷瞸瞹瞺�瞼瞾矀矁矂矃矄矅矆矇矈矉矊矋矌矎矏矐矑矒矓矔矕矖矘矙矚矝矞矟矠矡矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖�".split(
                ""
              ),
              t = 0;
            t != i[178].length;
            ++t
          )
            65533 !== i[178][t].charCodeAt(0) &&
              ((n[i[178][t]] = 45568 + t), (e[45568 + t] = i[178][t]));
          for (
            i[179] =
              "����������������������������������������������������������������矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃砄砅砆砇砈砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚�硛硜硞硟硠硡硢硣硤硥硦硧硨硩硯硰硱硲硳硴硵硶硸硹硺硻硽硾硿碀碁碂碃场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚�".split(
                ""
              ),
              t = 0;
            t != i[179].length;
            ++t
          )
            65533 !== i[179][t].charCodeAt(0) &&
              ((n[i[179][t]] = 45824 + t), (e[45824 + t] = i[179][t]));
          for (
            i[180] =
              "����������������������������������������������������������������碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨碩碪碫碬碭碮碯碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚磛磜磝磞磟磠磡磢磣�磤磥磦磧磩磪磫磭磮磯磰磱磳磵磶磸磹磻磼磽磾磿礀礂礃礄礆礇礈礉礊礋礌础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮�".split(
                ""
              ),
              t = 0;
            t != i[180].length;
            ++t
          )
            65533 !== i[180][t].charCodeAt(0) &&
              ((n[i[180][t]] = 46080 + t), (e[46080 + t] = i[180][t]));
          for (
            i[181] =
              "����������������������������������������������������������������礍礎礏礐礑礒礔礕礖礗礘礙礚礛礜礝礟礠礡礢礣礥礦礧礨礩礪礫礬礭礮礯礰礱礲礳礵礶礷礸礹礽礿祂祃祄祅祇祊祋祌祍祎祏祐祑祒祔祕祘祙祡祣�祤祦祩祪祫祬祮祰祱祲祳祴祵祶祹祻祼祽祾祿禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠�".split(
                ""
              ),
              t = 0;
            t != i[181].length;
            ++t
          )
            65533 !== i[181][t].charCodeAt(0) &&
              ((n[i[181][t]] = 46336 + t), (e[46336 + t] = i[181][t]));
          for (
            i[182] =
              "����������������������������������������������������������������禓禔禕禖禗禘禙禛禜禝禞禟禠禡禢禣禤禥禦禨禩禪禫禬禭禮禯禰禱禲禴禵禶禷禸禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙秚秛秜秝秞秠秡秢秥秨秪�秬秮秱秲秳秴秵秶秷秹秺秼秾秿稁稄稅稇稈稉稊稌稏稐稑稒稓稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二�".split(
                ""
              ),
              t = 0;
            t != i[182].length;
            ++t
          )
            65533 !== i[182][t].charCodeAt(0) &&
              ((n[i[182][t]] = 46592 + t), (e[46592 + t] = i[182][t]));
          for (
            i[183] =
              "����������������������������������������������������������������稝稟稡稢稤稥稦稧稨稩稪稫稬稭種稯稰稱稲稴稵稶稸稺稾穀穁穂穃穄穅穇穈穉穊穋穌積穎穏穐穒穓穔穕穖穘穙穚穛穜穝穞穟穠穡穢穣穤穥穦穧穨�穩穪穫穬穭穮穯穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服�".split(
                ""
              ),
              t = 0;
            t != i[183].length;
            ++t
          )
            65533 !== i[183][t].charCodeAt(0) &&
              ((n[i[183][t]] = 46848 + t), (e[46848 + t] = i[183][t]));
          for (
            i[184] =
              "����������������������������������������������������������������窣窤窧窩窪窫窮窯窰窱窲窴窵窶窷窸窹窺窻窼窽窾竀竁竂竃竄竅竆竇竈竉竊竌竍竎竏竐竑竒竓竔竕竗竘竚竛竜竝竡竢竤竧竨竩竪竫竬竮竰竱竲竳�竴竵競竷竸竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹�".split(
                ""
              ),
              t = 0;
            t != i[184].length;
            ++t
          )
            65533 !== i[184][t].charCodeAt(0) &&
              ((n[i[184][t]] = 47104 + t), (e[47104 + t] = i[184][t]));
          for (
            i[185] =
              "����������������������������������������������������������������笯笰笲笴笵笶笷笹笻笽笿筀筁筂筃筄筆筈筊筍筎筓筕筗筙筜筞筟筡筣筤筥筦筧筨筩筪筫筬筭筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆箇箈箉箊箋箌箎箏�箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹箺箻箼箽箾箿節篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈�".split(
                ""
              ),
              t = 0;
            t != i[185].length;
            ++t
          )
            65533 !== i[185][t].charCodeAt(0) &&
              ((n[i[185][t]] = 47360 + t), (e[47360 + t] = i[185][t]));
          for (
            i[186] =
              "����������������������������������������������������������������篅篈築篊篋篍篎篏篐篒篔篕篖篗篘篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲篳篴篵篶篸篹篺篻篽篿簀簁簂簃簄簅簆簈簉簊簍簎簐簑簒簓簔簕簗簘簙�簚簛簜簝簞簠簡簢簣簤簥簨簩簫簬簭簮簯簰簱簲簳簴簵簶簷簹簺簻簼簽簾籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖�".split(
                ""
              ),
              t = 0;
            t != i[186].length;
            ++t
          )
            65533 !== i[186][t].charCodeAt(0) &&
              ((n[i[186][t]] = 47616 + t), (e[47616 + t] = i[186][t]));
          for (
            i[187] =
              "����������������������������������������������������������������籃籄籅籆籇籈籉籊籋籌籎籏籐籑籒籓籔籕籖籗籘籙籚籛籜籝籞籟籠籡籢籣籤籥籦籧籨籩籪籫籬籭籮籯籰籱籲籵籶籷籸籹籺籾籿粀粁粂粃粄粅粆粇�粈粊粋粌粍粎粏粐粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴粵粶粷粸粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕�".split(
                ""
              ),
              t = 0;
            t != i[187].length;
            ++t
          )
            65533 !== i[187][t].charCodeAt(0) &&
              ((n[i[187][t]] = 47872 + t), (e[47872 + t] = i[187][t]));
          for (
            i[188] =
              "����������������������������������������������������������������粿糀糂糃糄糆糉糋糎糏糐糑糒糓糔糘糚糛糝糞糡糢糣糤糥糦糧糩糪糫糬糭糮糰糱糲糳糴糵糶糷糹糺糼糽糾糿紀紁紂紃約紅紆紇紈紉紋紌納紎紏紐�紑紒紓純紕紖紗紘紙級紛紜紝紞紟紡紣紤紥紦紨紩紪紬紭紮細紱紲紳紴紵紶肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件�".split(
                ""
              ),
              t = 0;
            t != i[188].length;
            ++t
          )
            65533 !== i[188][t].charCodeAt(0) &&
              ((n[i[188][t]] = 48128 + t), (e[48128 + t] = i[188][t]));
          for (
            i[189] =
              "����������������������������������������������������������������紷紸紹紺紻紼紽紾紿絀絁終絃組絅絆絇絈絉絊絋経絍絎絏結絑絒絓絔絕絖絗絘絙絚絛絜絝絞絟絠絡絢絣絤絥給絧絨絩絪絫絬絭絯絰統絲絳絴絵絶�絸絹絺絻絼絽絾絿綀綁綂綃綄綅綆綇綈綉綊綋綌綍綎綏綐綑綒經綔綕綖綗綘健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸�".split(
                ""
              ),
              t = 0;
            t != i[189].length;
            ++t
          )
            65533 !== i[189][t].charCodeAt(0) &&
              ((n[i[189][t]] = 48384 + t), (e[48384 + t] = i[189][t]));
          for (
            i[190] =
              "����������������������������������������������������������������継続綛綜綝綞綟綠綡綢綣綤綥綧綨綩綪綫綬維綯綰綱網綳綴綵綶綷綸綹綺綻綼綽綾綿緀緁緂緃緄緅緆緇緈緉緊緋緌緍緎総緐緑緒緓緔緕緖緗緘緙�線緛緜緝緞緟締緡緢緣緤緥緦緧編緩緪緫緬緭緮緯緰緱緲緳練緵緶緷緸緹緺尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻�".split(
                ""
              ),
              t = 0;
            t != i[190].length;
            ++t
          )
            65533 !== i[190][t].charCodeAt(0) &&
              ((n[i[190][t]] = 48640 + t), (e[48640 + t] = i[190][t]));
          for (
            i[191] =
              "����������������������������������������������������������������緻緼緽緾緿縀縁縂縃縄縅縆縇縈縉縊縋縌縍縎縏縐縑縒縓縔縕縖縗縘縙縚縛縜縝縞縟縠縡縢縣縤縥縦縧縨縩縪縫縬縭縮縯縰縱縲縳縴縵縶縷縸縹�縺縼總績縿繀繂繃繄繅繆繈繉繊繋繌繍繎繏繐繑繒繓織繕繖繗繘繙繚繛繜繝俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀�".split(
                ""
              ),
              t = 0;
            t != i[191].length;
            ++t
          )
            65533 !== i[191][t].charCodeAt(0) &&
              ((n[i[191][t]] = 48896 + t), (e[48896 + t] = i[191][t]));
          for (
            i[192] =
              "����������������������������������������������������������������繞繟繠繡繢繣繤繥繦繧繨繩繪繫繬繭繮繯繰繱繲繳繴繵繶繷繸繹繺繻繼繽繾繿纀纁纃纄纅纆纇纈纉纊纋續纍纎纏纐纑纒纓纔纕纖纗纘纙纚纜纝纞�纮纴纻纼绖绤绬绹缊缐缞缷缹缻缼缽缾缿罀罁罃罆罇罈罉罊罋罌罍罎罏罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐�".split(
                ""
              ),
              t = 0;
            t != i[192].length;
            ++t
          )
            65533 !== i[192][t].charCodeAt(0) &&
              ((n[i[192][t]] = 49152 + t), (e[49152 + t] = i[192][t]));
          for (
            i[193] =
              "����������������������������������������������������������������罖罙罛罜罝罞罠罣罤罥罦罧罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂羃羄羅羆羇羈羉羋羍羏羐羑羒羓羕羖羗羘羙羛羜羠羢羣羥羦羨義羪羫羬羭羮羱�羳羴羵羶羷羺羻羾翀翂翃翄翆翇翈翉翋翍翏翐翑習翓翖翗翙翚翛翜翝翞翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿�".split(
                ""
              ),
              t = 0;
            t != i[193].length;
            ++t
          )
            65533 !== i[193][t].charCodeAt(0) &&
              ((n[i[193][t]] = 49408 + t), (e[49408 + t] = i[193][t]));
          for (
            i[194] =
              "����������������������������������������������������������������翤翧翨翪翫翬翭翯翲翴翵翶翷翸翹翺翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫耬耭耮耯耰耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗�聙聛聜聝聞聟聠聡聢聣聤聥聦聧聨聫聬聭聮聯聰聲聳聴聵聶職聸聹聺聻聼聽隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫�".split(
                ""
              ),
              t = 0;
            t != i[194].length;
            ++t
          )
            65533 !== i[194][t].charCodeAt(0) &&
              ((n[i[194][t]] = 49664 + t), (e[49664 + t] = i[194][t]));
          for (
            i[195] =
              "����������������������������������������������������������������聾肁肂肅肈肊肍肎肏肐肑肒肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇胈胉胊胋胏胐胑胒胓胔胕胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋�脌脕脗脙脛脜脝脟脠脡脢脣脤脥脦脧脨脩脪脫脭脮脰脳脴脵脷脹脺脻脼脽脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸�".split(
                ""
              ),
              t = 0;
            t != i[195].length;
            ++t
          )
            65533 !== i[195][t].charCodeAt(0) &&
              ((n[i[195][t]] = 49920 + t), (e[49920 + t] = i[195][t]));
          for (
            i[196] =
              "����������������������������������������������������������������腀腁腂腃腄腅腇腉腍腎腏腒腖腗腘腛腜腝腞腟腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃膄膅膆膇膉膋膌膍膎膐膒膓膔膕膖膗膙膚膞膟膠膡膢膤膥�膧膩膫膬膭膮膯膰膱膲膴膵膶膷膸膹膼膽膾膿臄臅臇臈臉臋臍臎臏臐臑臒臓摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁�".split(
                ""
              ),
              t = 0;
            t != i[196].length;
            ++t
          )
            65533 !== i[196][t].charCodeAt(0) &&
              ((n[i[196][t]] = 50176 + t), (e[50176 + t] = i[196][t]));
          for (
            i[197] =
              "����������������������������������������������������������������臔臕臖臗臘臙臚臛臜臝臞臟臠臡臢臤臥臦臨臩臫臮臯臰臱臲臵臶臷臸臹臺臽臿舃與興舉舊舋舎舏舑舓舕舖舗舘舙舚舝舠舤舥舦舧舩舮舲舺舼舽舿�艀艁艂艃艅艆艈艊艌艍艎艐艑艒艓艔艕艖艗艙艛艜艝艞艠艡艢艣艤艥艦艧艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗�".split(
                ""
              ),
              t = 0;
            t != i[197].length;
            ++t
          )
            65533 !== i[197][t].charCodeAt(0) &&
              ((n[i[197][t]] = 50432 + t), (e[50432 + t] = i[197][t]));
          for (
            i[198] =
              "����������������������������������������������������������������艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸�苺苼苽苾苿茀茊茋茍茐茒茓茖茘茙茝茞茟茠茡茢茣茤茥茦茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐�".split(
                ""
              ),
              t = 0;
            t != i[198].length;
            ++t
          )
            65533 !== i[198][t].charCodeAt(0) &&
              ((n[i[198][t]] = 50688 + t), (e[50688 + t] = i[198][t]));
          for (
            i[199] =
              "����������������������������������������������������������������茾茿荁荂荄荅荈荊荋荌荍荎荓荕荖荗荘荙荝荢荰荱荲荳荴荵荶荹荺荾荿莀莁莂莃莄莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡莢莣莤莥莦莧莬莭莮�莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠�".split(
                ""
              ),
              t = 0;
            t != i[199].length;
            ++t
          )
            65533 !== i[199][t].charCodeAt(0) &&
              ((n[i[199][t]] = 50944 + t), (e[50944 + t] = i[199][t]));
          for (
            i[200] =
              "����������������������������������������������������������������菮華菳菴菵菶菷菺菻菼菾菿萀萂萅萇萈萉萊萐萒萓萔萕萖萗萙萚萛萞萟萠萡萢萣萩萪萫萬萭萮萯萰萲萳萴萵萶萷萹萺萻萾萿葀葁葂葃葄葅葇葈葉�葊葋葌葍葎葏葐葒葓葔葕葖葘葝葞葟葠葢葤葥葦葧葨葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁�".split(
                ""
              ),
              t = 0;
            t != i[200].length;
            ++t
          )
            65533 !== i[200][t].charCodeAt(0) &&
              ((n[i[200][t]] = 51200 + t), (e[51200 + t] = i[200][t]));
          for (
            i[201] =
              "����������������������������������������������������������������葽葾葿蒀蒁蒃蒄蒅蒆蒊蒍蒏蒐蒑蒒蒓蒔蒕蒖蒘蒚蒛蒝蒞蒟蒠蒢蒣蒤蒥蒦蒧蒨蒩蒪蒫蒬蒭蒮蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗�蓘蓙蓚蓛蓜蓞蓡蓢蓤蓧蓨蓩蓪蓫蓭蓮蓯蓱蓲蓳蓴蓵蓶蓷蓸蓹蓺蓻蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳�".split(
                ""
              ),
              t = 0;
            t != i[201].length;
            ++t
          )
            65533 !== i[201][t].charCodeAt(0) &&
              ((n[i[201][t]] = 51456 + t), (e[51456 + t] = i[201][t]));
          for (
            i[202] =
              "����������������������������������������������������������������蔃蔄蔅蔆蔇蔈蔉蔊蔋蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢蔣蔤蔥蔦蔧蔨蔩蔪蔭蔮蔯蔰蔱蔲蔳蔴蔵蔶蔾蔿蕀蕁蕂蕄蕅蕆蕇蕋蕌蕍蕎蕏蕐蕑蕒蕓蕔蕕�蕗蕘蕚蕛蕜蕝蕟蕠蕡蕢蕣蕥蕦蕧蕩蕪蕫蕬蕭蕮蕯蕰蕱蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱�".split(
                ""
              ),
              t = 0;
            t != i[202].length;
            ++t
          )
            65533 !== i[202][t].charCodeAt(0) &&
              ((n[i[202][t]] = 51712 + t), (e[51712 + t] = i[202][t]));
          for (
            i[203] =
              "����������������������������������������������������������������薂薃薆薈薉薊薋薌薍薎薐薑薒薓薔薕薖薗薘薙薚薝薞薟薠薡薢薣薥薦薧薩薫薬薭薱薲薳薴薵薶薸薺薻薼薽薾薿藀藂藃藄藅藆藇藈藊藋藌藍藎藑藒�藔藖藗藘藙藚藛藝藞藟藠藡藢藣藥藦藧藨藪藫藬藭藮藯藰藱藲藳藴藵藶藷藸恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔�".split(
                ""
              ),
              t = 0;
            t != i[203].length;
            ++t
          )
            65533 !== i[203][t].charCodeAt(0) &&
              ((n[i[203][t]] = 51968 + t), (e[51968 + t] = i[203][t]));
          for (
            i[204] =
              "����������������������������������������������������������������藹藺藼藽藾蘀蘁蘂蘃蘄蘆蘇蘈蘉蘊蘋蘌蘍蘎蘏蘐蘒蘓蘔蘕蘗蘘蘙蘚蘛蘜蘝蘞蘟蘠蘡蘢蘣蘤蘥蘦蘨蘪蘫蘬蘭蘮蘯蘰蘱蘲蘳蘴蘵蘶蘷蘹蘺蘻蘽蘾蘿虀�虁虂虃虄虅虆虇虈虉虊虋虌虒虓處虖虗虘虙虛虜虝號虠虡虣虤虥虦虧虨虩虪獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃�".split(
                ""
              ),
              t = 0;
            t != i[204].length;
            ++t
          )
            65533 !== i[204][t].charCodeAt(0) &&
              ((n[i[204][t]] = 52224 + t), (e[52224 + t] = i[204][t]));
          for (
            i[205] =
              "����������������������������������������������������������������虭虯虰虲虳虴虵虶虷虸蚃蚄蚅蚆蚇蚈蚉蚎蚏蚐蚑蚒蚔蚖蚗蚘蚙蚚蚛蚞蚟蚠蚡蚢蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻蚼蚽蚾蚿蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜�蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威�".split(
                ""
              ),
              t = 0;
            t != i[205].length;
            ++t
          )
            65533 !== i[205][t].charCodeAt(0) &&
              ((n[i[205][t]] = 52480 + t), (e[52480 + t] = i[205][t]));
          for (
            i[206] =
              "����������������������������������������������������������������蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀蝁蝂蝃蝄蝅蝆蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚蝛蝜蝝蝞蝟蝡蝢蝦蝧蝨蝩蝪蝫蝬蝭蝯蝱蝲蝳蝵�蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎螏螐螑螒螔螕螖螘螙螚螛螜螝螞螠螡螢螣螤巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺�".split(
                ""
              ),
              t = 0;
            t != i[206].length;
            ++t
          )
            65533 !== i[206][t].charCodeAt(0) &&
              ((n[i[206][t]] = 52736 + t), (e[52736 + t] = i[206][t]));
          for (
            i[207] =
              "����������������������������������������������������������������螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁蟂蟃蟄蟅蟇蟈蟉蟌蟍蟎蟏蟐蟔蟕蟖蟗蟘蟙蟚蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯蟰蟱蟲蟳蟴蟵蟶蟷蟸�蟺蟻蟼蟽蟿蠀蠁蠂蠄蠅蠆蠇蠈蠉蠋蠌蠍蠎蠏蠐蠑蠒蠔蠗蠘蠙蠚蠜蠝蠞蠟蠠蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓�".split(
                ""
              ),
              t = 0;
            t != i[207].length;
            ++t
          )
            65533 !== i[207][t].charCodeAt(0) &&
              ((n[i[207][t]] = 52992 + t), (e[52992 + t] = i[207][t]));
          for (
            i[208] =
              "����������������������������������������������������������������蠤蠥蠦蠧蠨蠩蠪蠫蠬蠭蠮蠯蠰蠱蠳蠴蠵蠶蠷蠸蠺蠻蠽蠾蠿衁衂衃衆衇衈衉衊衋衎衏衐衑衒術衕衖衘衚衛衜衝衞衟衠衦衧衪衭衯衱衳衴衵衶衸衹衺�衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗袘袙袚袛袝袞袟袠袡袣袥袦袧袨袩袪小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄�".split(
                ""
              ),
              t = 0;
            t != i[208].length;
            ++t
          )
            65533 !== i[208][t].charCodeAt(0) &&
              ((n[i[208][t]] = 53248 + t), (e[53248 + t] = i[208][t]));
          for (
            i[209] =
              "����������������������������������������������������������������袬袮袯袰袲袳袴袵袶袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚裛補裝裞裠裡裦裧裩裪裫裬裭裮裯裲裵裶裷裺裻製裿褀褁褃褄褅褆複褈�褉褋褌褍褎褏褑褔褕褖褗褘褜褝褞褟褠褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶�".split(
                ""
              ),
              t = 0;
            t != i[209].length;
            ++t
          )
            65533 !== i[209][t].charCodeAt(0) &&
              ((n[i[209][t]] = 53504 + t), (e[53504 + t] = i[209][t]));
          for (
            i[210] =
              "����������������������������������������������������������������褸褹褺褻褼褽褾褿襀襂襃襅襆襇襈襉襊襋襌襍襎襏襐襑襒襓襔襕襖襗襘襙襚襛襜襝襠襡襢襣襤襥襧襨襩襪襫襬襭襮襯襰襱襲襳襴襵襶襷襸襹襺襼�襽襾覀覂覄覅覇覈覉覊見覌覍覎規覐覑覒覓覔覕視覗覘覙覚覛覜覝覞覟覠覡摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐�".split(
                ""
              ),
              t = 0;
            t != i[210].length;
            ++t
          )
            65533 !== i[210][t].charCodeAt(0) &&
              ((n[i[210][t]] = 53760 + t), (e[53760 + t] = i[210][t]));
          for (
            i[211] =
              "����������������������������������������������������������������覢覣覤覥覦覧覨覩親覫覬覭覮覯覰覱覲観覴覵覶覷覸覹覺覻覼覽覾覿觀觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴觵觶觷觸觹觺�觻觼觽觾觿訁訂訃訄訅訆計訉訊訋訌訍討訏訐訑訒訓訔訕訖託記訙訚訛訜訝印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉�".split(
                ""
              ),
              t = 0;
            t != i[211].length;
            ++t
          )
            65533 !== i[211][t].charCodeAt(0) &&
              ((n[i[211][t]] = 54016 + t), (e[54016 + t] = i[211][t]));
          for (
            i[212] =
              "����������������������������������������������������������������訞訟訠訡訢訣訤訥訦訧訨訩訪訫訬設訮訯訰許訲訳訴訵訶訷訸訹診註証訽訿詀詁詂詃詄詅詆詇詉詊詋詌詍詎詏詐詑詒詓詔評詖詗詘詙詚詛詜詝詞�詟詠詡詢詣詤詥試詧詨詩詪詫詬詭詮詯詰話該詳詴詵詶詷詸詺詻詼詽詾詿誀浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧�".split(
                ""
              ),
              t = 0;
            t != i[212].length;
            ++t
          )
            65533 !== i[212][t].charCodeAt(0) &&
              ((n[i[212][t]] = 54272 + t), (e[54272 + t] = i[212][t]));
          for (
            i[213] =
              "����������������������������������������������������������������誁誂誃誄誅誆誇誈誋誌認誎誏誐誑誒誔誕誖誗誘誙誚誛誜誝語誟誠誡誢誣誤誥誦誧誨誩說誫説読誮誯誰誱課誳誴誵誶誷誸誹誺誻誼誽誾調諀諁諂�諃諄諅諆談諈諉諊請諌諍諎諏諐諑諒諓諔諕論諗諘諙諚諛諜諝諞諟諠諡諢諣铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政�".split(
                ""
              ),
              t = 0;
            t != i[213].length;
            ++t
          )
            65533 !== i[213][t].charCodeAt(0) &&
              ((n[i[213][t]] = 54528 + t), (e[54528 + t] = i[213][t]));
          for (
            i[214] =
              "����������������������������������������������������������������諤諥諦諧諨諩諪諫諬諭諮諯諰諱諲諳諴諵諶諷諸諹諺諻諼諽諾諿謀謁謂謃謄謅謆謈謉謊謋謌謍謎謏謐謑謒謓謔謕謖謗謘謙謚講謜謝謞謟謠謡謢謣�謤謥謧謨謩謪謫謬謭謮謯謰謱謲謳謴謵謶謷謸謹謺謻謼謽謾謿譀譁譂譃譄譅帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑�".split(
                ""
              ),
              t = 0;
            t != i[214].length;
            ++t
          )
            65533 !== i[214][t].charCodeAt(0) &&
              ((n[i[214][t]] = 54784 + t), (e[54784 + t] = i[214][t]));
          for (
            i[215] =
              "����������������������������������������������������������������譆譇譈證譊譋譌譍譎譏譐譑譒譓譔譕譖譗識譙譚譛譜譝譞譟譠譡譢譣譤譥譧譨譩譪譫譭譮譯議譱譲譳譴譵譶護譸譹譺譻譼譽譾譿讀讁讂讃讄讅讆�讇讈讉變讋讌讍讎讏讐讑讒讓讔讕讖讗讘讙讚讛讜讝讞讟讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座������".split(
                ""
              ),
              t = 0;
            t != i[215].length;
            ++t
          )
            65533 !== i[215][t].charCodeAt(0) &&
              ((n[i[215][t]] = 55040 + t), (e[55040 + t] = i[215][t]));
          for (
            i[216] =
              "����������������������������������������������������������������谸谹谺谻谼谽谾谿豀豂豃豄豅豈豊豋豍豎豏豐豑豒豓豔豖豗豘豙豛豜豝豞豟豠豣豤豥豦豧豨豩豬豭豮豯豰豱豲豴豵豶豷豻豼豽豾豿貀貁貃貄貆貇�貈貋貍貎貏貐貑貒貓貕貖貗貙貚貛貜貝貞貟負財貢貣貤貥貦貧貨販貪貫責貭亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝�".split(
                ""
              ),
              t = 0;
            t != i[216].length;
            ++t
          )
            65533 !== i[216][t].charCodeAt(0) &&
              ((n[i[216][t]] = 55296 + t), (e[55296 + t] = i[216][t]));
          for (
            i[217] =
              "����������������������������������������������������������������貮貯貰貱貲貳貴貵貶買貸貹貺費貼貽貾貿賀賁賂賃賄賅賆資賈賉賊賋賌賍賎賏賐賑賒賓賔賕賖賗賘賙賚賛賜賝賞賟賠賡賢賣賤賥賦賧賨賩質賫賬�賭賮賯賰賱賲賳賴賵賶賷賸賹賺賻購賽賾賿贀贁贂贃贄贅贆贇贈贉贊贋贌贍佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼�".split(
                ""
              ),
              t = 0;
            t != i[217].length;
            ++t
          )
            65533 !== i[217][t].charCodeAt(0) &&
              ((n[i[217][t]] = 55552 + t), (e[55552 + t] = i[217][t]));
          for (
            i[218] =
              "����������������������������������������������������������������贎贏贐贑贒贓贔贕贖贗贘贙贚贛贜贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸赹赺赻赼赽赾赿趀趂趃趆趇趈趉趌趍趎趏趐趒趓趕趖趗趘趙趚趛趜趝趞趠趡�趢趤趥趦趧趨趩趪趫趬趭趮趯趰趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺�".split(
                ""
              ),
              t = 0;
            t != i[218].length;
            ++t
          )
            65533 !== i[218][t].charCodeAt(0) &&
              ((n[i[218][t]] = 55808 + t), (e[55808 + t] = i[218][t]));
          for (
            i[219] =
              "����������������������������������������������������������������跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾跿踀踁踂踃踄踆踇踈踋踍踎踐踑踒踓踕踖踗踘踙踚踛踜踠踡踤踥踦踧踨踫踭踰踲踳踴踶踷踸踻踼踾�踿蹃蹅蹆蹌蹍蹎蹏蹐蹓蹔蹕蹖蹗蹘蹚蹛蹜蹝蹞蹟蹠蹡蹢蹣蹤蹥蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝�".split(
                ""
              ),
              t = 0;
            t != i[219].length;
            ++t
          )
            65533 !== i[219][t].charCodeAt(0) &&
              ((n[i[219][t]] = 56064 + t), (e[56064 + t] = i[219][t]));
          for (
            i[220] =
              "����������������������������������������������������������������蹳蹵蹷蹸蹹蹺蹻蹽蹾躀躂躃躄躆躈躉躊躋躌躍躎躑躒躓躕躖躗躘躙躚躛躝躟躠躡躢躣躤躥躦躧躨躩躪躭躮躰躱躳躴躵躶躷躸躹躻躼躽躾躿軀軁軂�軃軄軅軆軇軈軉車軋軌軍軏軐軑軒軓軔軕軖軗軘軙軚軛軜軝軞軟軠軡転軣軤堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥�".split(
                ""
              ),
              t = 0;
            t != i[220].length;
            ++t
          )
            65533 !== i[220][t].charCodeAt(0) &&
              ((n[i[220][t]] = 56320 + t), (e[56320 + t] = i[220][t]));
          for (
            i[221] =
              "����������������������������������������������������������������軥軦軧軨軩軪軫軬軭軮軯軰軱軲軳軴軵軶軷軸軹軺軻軼軽軾軿輀輁輂較輄輅輆輇輈載輊輋輌輍輎輏輐輑輒輓輔輕輖輗輘輙輚輛輜輝輞輟輠輡輢輣�輤輥輦輧輨輩輪輫輬輭輮輯輰輱輲輳輴輵輶輷輸輹輺輻輼輽輾輿轀轁轂轃轄荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺�".split(
                ""
              ),
              t = 0;
            t != i[221].length;
            ++t
          )
            65533 !== i[221][t].charCodeAt(0) &&
              ((n[i[221][t]] = 56576 + t), (e[56576 + t] = i[221][t]));
          for (
            i[222] =
              "����������������������������������������������������������������轅轆轇轈轉轊轋轌轍轎轏轐轑轒轓轔轕轖轗轘轙轚轛轜轝轞轟轠轡轢轣轤轥轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆�迉迊迋迌迍迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖�".split(
                ""
              ),
              t = 0;
            t != i[222].length;
            ++t
          )
            65533 !== i[222][t].charCodeAt(0) &&
              ((n[i[222][t]] = 56832 + t), (e[56832 + t] = i[222][t]));
          for (
            i[223] =
              "����������������������������������������������������������������這逜連逤逥逧逨逩逪逫逬逰週進逳逴逷逹逺逽逿遀遃遅遆遈遉遊運遌過達違遖遙遚遜遝遞遟遠遡遤遦遧適遪遫遬遯遰遱遲遳遶遷選遹遺遻遼遾邁�還邅邆邇邉邊邌邍邎邏邐邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼�".split(
                ""
              ),
              t = 0;
            t != i[223].length;
            ++t
          )
            65533 !== i[223][t].charCodeAt(0) &&
              ((n[i[223][t]] = 57088 + t), (e[57088 + t] = i[223][t]));
          for (
            i[224] =
              "����������������������������������������������������������������郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅鄆鄇鄈鄉鄊鄋鄌鄍鄎鄏鄐鄑鄒鄓鄔鄕鄖鄗鄘鄚鄛鄜�鄝鄟鄠鄡鄤鄥鄦鄧鄨鄩鄪鄫鄬鄭鄮鄰鄲鄳鄴鄵鄶鄷鄸鄺鄻鄼鄽鄾鄿酀酁酂酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼�".split(
                ""
              ),
              t = 0;
            t != i[224].length;
            ++t
          )
            65533 !== i[224][t].charCodeAt(0) &&
              ((n[i[224][t]] = 57344 + t), (e[57344 + t] = i[224][t]));
          for (
            i[225] =
              "����������������������������������������������������������������酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀醁醂醃醄醆醈醊醎醏醓醔醕醖醗醘醙醜醝醞醟醠醡醤醥醦醧醨醩醫醬醰醱醲醳醶醷醸醹醻�醼醽醾醿釀釁釂釃釄釅釆釈釋釐釒釓釔釕釖釗釘釙釚釛針釞釟釠釡釢釣釤釥帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺�".split(
                ""
              ),
              t = 0;
            t != i[225].length;
            ++t
          )
            65533 !== i[225][t].charCodeAt(0) &&
              ((n[i[225][t]] = 57600 + t), (e[57600 + t] = i[225][t]));
          for (
            i[226] =
              "����������������������������������������������������������������釦釧釨釩釪釫釬釭釮釯釰釱釲釳釴釵釶釷釸釹釺釻釼釽釾釿鈀鈁鈂鈃鈄鈅鈆鈇鈈鈉鈊鈋鈌鈍鈎鈏鈐鈑鈒鈓鈔鈕鈖鈗鈘鈙鈚鈛鈜鈝鈞鈟鈠鈡鈢鈣鈤�鈥鈦鈧鈨鈩鈪鈫鈬鈭鈮鈯鈰鈱鈲鈳鈴鈵鈶鈷鈸鈹鈺鈻鈼鈽鈾鈿鉀鉁鉂鉃鉄鉅狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧饨饩饪饫饬饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂�".split(
                ""
              ),
              t = 0;
            t != i[226].length;
            ++t
          )
            65533 !== i[226][t].charCodeAt(0) &&
              ((n[i[226][t]] = 57856 + t), (e[57856 + t] = i[226][t]));
          for (
            i[227] =
              "����������������������������������������������������������������鉆鉇鉈鉉鉊鉋鉌鉍鉎鉏鉐鉑鉒鉓鉔鉕鉖鉗鉘鉙鉚鉛鉜鉝鉞鉟鉠鉡鉢鉣鉤鉥鉦鉧鉨鉩鉪鉫鉬鉭鉮鉯鉰鉱鉲鉳鉵鉶鉷鉸鉹鉺鉻鉼鉽鉾鉿銀銁銂銃銄銅�銆銇銈銉銊銋銌銍銏銐銑銒銓銔銕銖銗銘銙銚銛銜銝銞銟銠銡銢銣銤銥銦銧恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾�".split(
                ""
              ),
              t = 0;
            t != i[227].length;
            ++t
          )
            65533 !== i[227][t].charCodeAt(0) &&
              ((n[i[227][t]] = 58112 + t), (e[58112 + t] = i[227][t]));
          for (
            i[228] =
              "����������������������������������������������������������������銨銩銪銫銬銭銯銰銱銲銳銴銵銶銷銸銹銺銻銼銽銾銿鋀鋁鋂鋃鋄鋅鋆鋇鋉鋊鋋鋌鋍鋎鋏鋐鋑鋒鋓鋔鋕鋖鋗鋘鋙鋚鋛鋜鋝鋞鋟鋠鋡鋢鋣鋤鋥鋦鋧鋨�鋩鋪鋫鋬鋭鋮鋯鋰鋱鋲鋳鋴鋵鋶鋷鋸鋹鋺鋻鋼鋽鋾鋿錀錁錂錃錄錅錆錇錈錉洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑�".split(
                ""
              ),
              t = 0;
            t != i[228].length;
            ++t
          )
            65533 !== i[228][t].charCodeAt(0) &&
              ((n[i[228][t]] = 58368 + t), (e[58368 + t] = i[228][t]));
          for (
            i[229] =
              "����������������������������������������������������������������錊錋錌錍錎錏錐錑錒錓錔錕錖錗錘錙錚錛錜錝錞錟錠錡錢錣錤錥錦錧錨錩錪錫錬錭錮錯錰錱録錳錴錵錶錷錸錹錺錻錼錽錿鍀鍁鍂鍃鍄鍅鍆鍇鍈鍉�鍊鍋鍌鍍鍎鍏鍐鍑鍒鍓鍔鍕鍖鍗鍘鍙鍚鍛鍜鍝鍞鍟鍠鍡鍢鍣鍤鍥鍦鍧鍨鍩鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣�".split(
                ""
              ),
              t = 0;
            t != i[229].length;
            ++t
          )
            65533 !== i[229][t].charCodeAt(0) &&
              ((n[i[229][t]] = 58624 + t), (e[58624 + t] = i[229][t]));
          for (
            i[230] =
              "����������������������������������������������������������������鍬鍭鍮鍯鍰鍱鍲鍳鍴鍵鍶鍷鍸鍹鍺鍻鍼鍽鍾鍿鎀鎁鎂鎃鎄鎅鎆鎇鎈鎉鎊鎋鎌鎍鎎鎐鎑鎒鎓鎔鎕鎖鎗鎘鎙鎚鎛鎜鎝鎞鎟鎠鎡鎢鎣鎤鎥鎦鎧鎨鎩鎪鎫�鎬鎭鎮鎯鎰鎱鎲鎳鎴鎵鎶鎷鎸鎹鎺鎻鎼鎽鎾鎿鏀鏁鏂鏃鏄鏅鏆鏇鏈鏉鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩�".split(
                ""
              ),
              t = 0;
            t != i[230].length;
            ++t
          )
            65533 !== i[230][t].charCodeAt(0) &&
              ((n[i[230][t]] = 58880 + t), (e[58880 + t] = i[230][t]));
          for (
            i[231] =
              "����������������������������������������������������������������鏎鏏鏐鏑鏒鏓鏔鏕鏗鏘鏙鏚鏛鏜鏝鏞鏟鏠鏡鏢鏣鏤鏥鏦鏧鏨鏩鏪鏫鏬鏭鏮鏯鏰鏱鏲鏳鏴鏵鏶鏷鏸鏹鏺鏻鏼鏽鏾鏿鐀鐁鐂鐃鐄鐅鐆鐇鐈鐉鐊鐋鐌鐍�鐎鐏鐐鐑鐒鐓鐔鐕鐖鐗鐘鐙鐚鐛鐜鐝鐞鐟鐠鐡鐢鐣鐤鐥鐦鐧鐨鐩鐪鐫鐬鐭鐮纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡缢缣缤缥缦缧缪缫缬缭缯缰缱缲缳缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬�".split(
                ""
              ),
              t = 0;
            t != i[231].length;
            ++t
          )
            65533 !== i[231][t].charCodeAt(0) &&
              ((n[i[231][t]] = 59136 + t), (e[59136 + t] = i[231][t]));
          for (
            i[232] =
              "����������������������������������������������������������������鐯鐰鐱鐲鐳鐴鐵鐶鐷鐸鐹鐺鐻鐼鐽鐿鑀鑁鑂鑃鑄鑅鑆鑇鑈鑉鑊鑋鑌鑍鑎鑏鑐鑑鑒鑓鑔鑕鑖鑗鑘鑙鑚鑛鑜鑝鑞鑟鑠鑡鑢鑣鑤鑥鑦鑧鑨鑩鑪鑬鑭鑮鑯�鑰鑱鑲鑳鑴鑵鑶鑷鑸鑹鑺鑻鑼鑽鑾鑿钀钁钂钃钄钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹�".split(
                ""
              ),
              t = 0;
            t != i[232].length;
            ++t
          )
            65533 !== i[232][t].charCodeAt(0) &&
              ((n[i[232][t]] = 59392 + t), (e[59392 + t] = i[232][t]));
          for (
            i[233] =
              "����������������������������������������������������������������锧锳锽镃镈镋镕镚镠镮镴镵長镸镹镺镻镼镽镾門閁閂閃閄閅閆閇閈閉閊開閌閍閎閏閐閑閒間閔閕閖閗閘閙閚閛閜閝閞閟閠閡関閣閤閥閦閧閨閩閪�閫閬閭閮閯閰閱閲閳閴閵閶閷閸閹閺閻閼閽閾閿闀闁闂闃闄闅闆闇闈闉闊闋椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋�".split(
                ""
              ),
              t = 0;
            t != i[233].length;
            ++t
          )
            65533 !== i[233][t].charCodeAt(0) &&
              ((n[i[233][t]] = 59648 + t), (e[59648 + t] = i[233][t]));
          for (
            i[234] =
              "����������������������������������������������������������������闌闍闎闏闐闑闒闓闔闕闖闗闘闙闚闛關闝闞闟闠闡闢闣闤闥闦闧闬闿阇阓阘阛阞阠阣阤阥阦阧阨阩阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗�陘陙陚陜陝陞陠陣陥陦陫陭陮陯陰陱陳陸陹険陻陼陽陾陿隀隁隂隃隄隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰�".split(
                ""
              ),
              t = 0;
            t != i[234].length;
            ++t
          )
            65533 !== i[234][t].charCodeAt(0) &&
              ((n[i[234][t]] = 59904 + t), (e[59904 + t] = i[234][t]));
          for (
            i[235] =
              "����������������������������������������������������������������隌階隑隒隓隕隖隚際隝隞隟隠隡隢隣隤隥隦隨隩險隫隬隭隮隯隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖雗雘雙雚雛雜雝雞雟雡離難雤雥雦雧雫�雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗霘霙霚霛霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻�".split(
                ""
              ),
              t = 0;
            t != i[235].length;
            ++t
          )
            65533 !== i[235][t].charCodeAt(0) &&
              ((n[i[235][t]] = 60160 + t), (e[60160 + t] = i[235][t]));
          for (
            i[236] =
              "����������������������������������������������������������������霡霢霣霤霥霦霧霨霩霫霬霮霯霱霳霴霵霶霷霺霻霼霽霿靀靁靂靃靄靅靆靇靈靉靊靋靌靍靎靏靐靑靔靕靗靘靚靜靝靟靣靤靦靧靨靪靫靬靭靮靯靰靱�靲靵靷靸靹靺靻靽靾靿鞀鞁鞂鞃鞄鞆鞇鞈鞉鞊鞌鞎鞏鞐鞓鞕鞖鞗鞙鞚鞛鞜鞝臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐�".split(
                ""
              ),
              t = 0;
            t != i[236].length;
            ++t
          )
            65533 !== i[236][t].charCodeAt(0) &&
              ((n[i[236][t]] = 60416 + t), (e[60416 + t] = i[236][t]));
          for (
            i[237] =
              "����������������������������������������������������������������鞞鞟鞡鞢鞤鞥鞦鞧鞨鞩鞪鞬鞮鞰鞱鞳鞵鞶鞷鞸鞹鞺鞻鞼鞽鞾鞿韀韁韂韃韄韅韆韇韈韉韊韋韌韍韎韏韐韑韒韓韔韕韖韗韘韙韚韛韜韝韞韟韠韡韢韣�韤韥韨韮韯韰韱韲韴韷韸韹韺韻韼韽韾響頀頁頂頃頄項順頇須頉頊頋頌頍頎怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨�".split(
                ""
              ),
              t = 0;
            t != i[237].length;
            ++t
          )
            65533 !== i[237][t].charCodeAt(0) &&
              ((n[i[237][t]] = 60672 + t), (e[60672 + t] = i[237][t]));
          for (
            i[238] =
              "����������������������������������������������������������������頏預頑頒頓頔頕頖頗領頙頚頛頜頝頞頟頠頡頢頣頤頥頦頧頨頩頪頫頬頭頮頯頰頱頲頳頴頵頶頷頸頹頺頻頼頽頾頿顀顁顂顃顄顅顆顇顈顉顊顋題額�顎顏顐顑顒顓顔顕顖顗願顙顚顛顜顝類顟顠顡顢顣顤顥顦顧顨顩顪顫顬顭顮睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪�".split(
                ""
              ),
              t = 0;
            t != i[238].length;
            ++t
          )
            65533 !== i[238][t].charCodeAt(0) &&
              ((n[i[238][t]] = 60928 + t), (e[60928 + t] = i[238][t]));
          for (
            i[239] =
              "����������������������������������������������������������������顯顰顱顲顳顴颋颎颒颕颙颣風颩颪颫颬颭颮颯颰颱颲颳颴颵颶颷颸颹颺颻颼颽颾颿飀飁飂飃飄飅飆飇飈飉飊飋飌飍飏飐飔飖飗飛飜飝飠飡飢飣飤�飥飦飩飪飫飬飭飮飯飰飱飲飳飴飵飶飷飸飹飺飻飼飽飾飿餀餁餂餃餄餅餆餇铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒锓锔锕锖锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤镥镦镧镨镩镪镫镬镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔�".split(
                ""
              ),
              t = 0;
            t != i[239].length;
            ++t
          )
            65533 !== i[239][t].charCodeAt(0) &&
              ((n[i[239][t]] = 61184 + t), (e[61184 + t] = i[239][t]));
          for (
            i[240] =
              "����������������������������������������������������������������餈餉養餋餌餎餏餑餒餓餔餕餖餗餘餙餚餛餜餝餞餟餠餡餢餣餤餥餦餧館餩餪餫餬餭餯餰餱餲餳餴餵餶餷餸餹餺餻餼餽餾餿饀饁饂饃饄饅饆饇饈饉�饊饋饌饍饎饏饐饑饒饓饖饗饘饙饚饛饜饝饞饟饠饡饢饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨鸩鸪鸫鸬鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦鹧鹨鹩鹪鹫鹬鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙�".split(
                ""
              ),
              t = 0;
            t != i[240].length;
            ++t
          )
            65533 !== i[240][t].charCodeAt(0) &&
              ((n[i[240][t]] = 61440 + t), (e[61440 + t] = i[240][t]));
          for (
            i[241] =
              "����������������������������������������������������������������馌馎馚馛馜馝馞馟馠馡馢馣馤馦馧馩馪馫馬馭馮馯馰馱馲馳馴馵馶馷馸馹馺馻馼馽馾馿駀駁駂駃駄駅駆駇駈駉駊駋駌駍駎駏駐駑駒駓駔駕駖駗駘�駙駚駛駜駝駞駟駠駡駢駣駤駥駦駧駨駩駪駫駬駭駮駯駰駱駲駳駴駵駶駷駸駹瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃�".split(
                ""
              ),
              t = 0;
            t != i[241].length;
            ++t
          )
            65533 !== i[241][t].charCodeAt(0) &&
              ((n[i[241][t]] = 61696 + t), (e[61696 + t] = i[241][t]));
          for (
            i[242] =
              "����������������������������������������������������������������駺駻駼駽駾駿騀騁騂騃騄騅騆騇騈騉騊騋騌騍騎騏騐騑騒験騔騕騖騗騘騙騚騛騜騝騞騟騠騡騢騣騤騥騦騧騨騩騪騫騬騭騮騯騰騱騲騳騴騵騶騷騸�騹騺騻騼騽騾騿驀驁驂驃驄驅驆驇驈驉驊驋驌驍驎驏驐驑驒驓驔驕驖驗驘驙颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒�".split(
                ""
              ),
              t = 0;
            t != i[242].length;
            ++t
          )
            65533 !== i[242][t].charCodeAt(0) &&
              ((n[i[242][t]] = 61952 + t), (e[61952 + t] = i[242][t]));
          for (
            i[243] =
              "����������������������������������������������������������������驚驛驜驝驞驟驠驡驢驣驤驥驦驧驨驩驪驫驲骃骉骍骎骔骕骙骦骩骪骫骬骭骮骯骲骳骴骵骹骻骽骾骿髃髄髆髇髈髉髊髍髎髏髐髒體髕髖髗髙髚髛髜�髝髞髠髢髣髤髥髧髨髩髪髬髮髰髱髲髳髴髵髶髷髸髺髼髽髾髿鬀鬁鬂鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋�".split(
                ""
              ),
              t = 0;
            t != i[243].length;
            ++t
          )
            65533 !== i[243][t].charCodeAt(0) &&
              ((n[i[243][t]] = 62208 + t), (e[62208 + t] = i[243][t]));
          for (
            i[244] =
              "����������������������������������������������������������������鬇鬉鬊鬋鬌鬍鬎鬐鬑鬒鬔鬕鬖鬗鬘鬙鬚鬛鬜鬝鬞鬠鬡鬢鬤鬥鬦鬧鬨鬩鬪鬫鬬鬭鬮鬰鬱鬳鬴鬵鬶鬷鬸鬹鬺鬽鬾鬿魀魆魊魋魌魎魐魒魓魕魖魗魘魙魚�魛魜魝魞魟魠魡魢魣魤魥魦魧魨魩魪魫魬魭魮魯魰魱魲魳魴魵魶魷魸魹魺魻簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤�".split(
                ""
              ),
              t = 0;
            t != i[244].length;
            ++t
          )
            65533 !== i[244][t].charCodeAt(0) &&
              ((n[i[244][t]] = 62464 + t), (e[62464 + t] = i[244][t]));
          for (
            i[245] =
              "����������������������������������������������������������������魼魽魾魿鮀鮁鮂鮃鮄鮅鮆鮇鮈鮉鮊鮋鮌鮍鮎鮏鮐鮑鮒鮓鮔鮕鮖鮗鮘鮙鮚鮛鮜鮝鮞鮟鮠鮡鮢鮣鮤鮥鮦鮧鮨鮩鮪鮫鮬鮭鮮鮯鮰鮱鮲鮳鮴鮵鮶鮷鮸鮹鮺�鮻鮼鮽鮾鮿鯀鯁鯂鯃鯄鯅鯆鯇鯈鯉鯊鯋鯌鯍鯎鯏鯐鯑鯒鯓鯔鯕鯖鯗鯘鯙鯚鯛酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜�".split(
                ""
              ),
              t = 0;
            t != i[245].length;
            ++t
          )
            65533 !== i[245][t].charCodeAt(0) &&
              ((n[i[245][t]] = 62720 + t), (e[62720 + t] = i[245][t]));
          for (
            i[246] =
              "����������������������������������������������������������������鯜鯝鯞鯟鯠鯡鯢鯣鯤鯥鯦鯧鯨鯩鯪鯫鯬鯭鯮鯯鯰鯱鯲鯳鯴鯵鯶鯷鯸鯹鯺鯻鯼鯽鯾鯿鰀鰁鰂鰃鰄鰅鰆鰇鰈鰉鰊鰋鰌鰍鰎鰏鰐鰑鰒鰓鰔鰕鰖鰗鰘鰙鰚�鰛鰜鰝鰞鰟鰠鰡鰢鰣鰤鰥鰦鰧鰨鰩鰪鰫鰬鰭鰮鰯鰰鰱鰲鰳鰴鰵鰶鰷鰸鰹鰺鰻觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅龆龇龈龉龊龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞鲟鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋�".split(
                ""
              ),
              t = 0;
            t != i[246].length;
            ++t
          )
            65533 !== i[246][t].charCodeAt(0) &&
              ((n[i[246][t]] = 62976 + t), (e[62976 + t] = i[246][t]));
          for (
            i[247] =
              "����������������������������������������������������������������鰼鰽鰾鰿鱀鱁鱂鱃鱄鱅鱆鱇鱈鱉鱊鱋鱌鱍鱎鱏鱐鱑鱒鱓鱔鱕鱖鱗鱘鱙鱚鱛鱜鱝鱞鱟鱠鱡鱢鱣鱤鱥鱦鱧鱨鱩鱪鱫鱬鱭鱮鱯鱰鱱鱲鱳鱴鱵鱶鱷鱸鱹鱺�鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾鲿鳀鳁鳂鳈鳉鳑鳒鳚鳛鳠鳡鳌鳍鳎鳏鳐鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄�".split(
                ""
              ),
              t = 0;
            t != i[247].length;
            ++t
          )
            65533 !== i[247][t].charCodeAt(0) &&
              ((n[i[247][t]] = 63232 + t), (e[63232 + t] = i[247][t]));
          for (
            i[248] =
              "����������������������������������������������������������������鳣鳤鳥鳦鳧鳨鳩鳪鳫鳬鳭鳮鳯鳰鳱鳲鳳鳴鳵鳶鳷鳸鳹鳺鳻鳼鳽鳾鳿鴀鴁鴂鴃鴄鴅鴆鴇鴈鴉鴊鴋鴌鴍鴎鴏鴐鴑鴒鴓鴔鴕鴖鴗鴘鴙鴚鴛鴜鴝鴞鴟鴠鴡�鴢鴣鴤鴥鴦鴧鴨鴩鴪鴫鴬鴭鴮鴯鴰鴱鴲鴳鴴鴵鴶鴷鴸鴹鴺鴻鴼鴽鴾鴿鵀鵁鵂�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[248].length;
            ++t
          )
            65533 !== i[248][t].charCodeAt(0) &&
              ((n[i[248][t]] = 63488 + t), (e[63488 + t] = i[248][t]));
          for (
            i[249] =
              "����������������������������������������������������������������鵃鵄鵅鵆鵇鵈鵉鵊鵋鵌鵍鵎鵏鵐鵑鵒鵓鵔鵕鵖鵗鵘鵙鵚鵛鵜鵝鵞鵟鵠鵡鵢鵣鵤鵥鵦鵧鵨鵩鵪鵫鵬鵭鵮鵯鵰鵱鵲鵳鵴鵵鵶鵷鵸鵹鵺鵻鵼鵽鵾鵿鶀鶁�鶂鶃鶄鶅鶆鶇鶈鶉鶊鶋鶌鶍鶎鶏鶐鶑鶒鶓鶔鶕鶖鶗鶘鶙鶚鶛鶜鶝鶞鶟鶠鶡鶢�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[249].length;
            ++t
          )
            65533 !== i[249][t].charCodeAt(0) &&
              ((n[i[249][t]] = 63744 + t), (e[63744 + t] = i[249][t]));
          for (
            i[250] =
              "����������������������������������������������������������������鶣鶤鶥鶦鶧鶨鶩鶪鶫鶬鶭鶮鶯鶰鶱鶲鶳鶴鶵鶶鶷鶸鶹鶺鶻鶼鶽鶾鶿鷀鷁鷂鷃鷄鷅鷆鷇鷈鷉鷊鷋鷌鷍鷎鷏鷐鷑鷒鷓鷔鷕鷖鷗鷘鷙鷚鷛鷜鷝鷞鷟鷠鷡�鷢鷣鷤鷥鷦鷧鷨鷩鷪鷫鷬鷭鷮鷯鷰鷱鷲鷳鷴鷵鷶鷷鷸鷹鷺鷻鷼鷽鷾鷿鸀鸁鸂�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[250].length;
            ++t
          )
            65533 !== i[250][t].charCodeAt(0) &&
              ((n[i[250][t]] = 64e3 + t), (e[64e3 + t] = i[250][t]));
          for (
            i[251] =
              "����������������������������������������������������������������鸃鸄鸅鸆鸇鸈鸉鸊鸋鸌鸍鸎鸏鸐鸑鸒鸓鸔鸕鸖鸗鸘鸙鸚鸛鸜鸝鸞鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴鹵鹶鹷鹸鹹鹺鹻鹼鹽麀�麁麃麄麅麆麉麊麌麍麎麏麐麑麔麕麖麗麘麙麚麛麜麞麠麡麢麣麤麥麧麨麩麪�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[251].length;
            ++t
          )
            65533 !== i[251][t].charCodeAt(0) &&
              ((n[i[251][t]] = 64256 + t), (e[64256 + t] = i[251][t]));
          for (
            i[252] =
              "����������������������������������������������������������������麫麬麭麮麯麰麱麲麳麵麶麷麹麺麼麿黀黁黂黃黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰黱黲黳黴黵黶黷黸黺黽黿鼀鼁鼂鼃鼄鼅�鼆鼇鼈鼉鼊鼌鼏鼑鼒鼔鼕鼖鼘鼚鼛鼜鼝鼞鼟鼡鼣鼤鼥鼦鼧鼨鼩鼪鼫鼭鼮鼰鼱�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[252].length;
            ++t
          )
            65533 !== i[252][t].charCodeAt(0) &&
              ((n[i[252][t]] = 64512 + t), (e[64512 + t] = i[252][t]));
          for (
            i[253] =
              "����������������������������������������������������������������鼲鼳鼴鼵鼶鼸鼺鼼鼿齀齁齂齃齅齆齇齈齉齊齋齌齍齎齏齒齓齔齕齖齗齘齙齚齛齜齝齞齟齠齡齢齣齤齥齦齧齨齩齪齫齬齭齮齯齰齱齲齳齴齵齶齷齸�齹齺齻齼齽齾龁龂龍龎龏龐龑龒龓龔龕龖龗龘龜龝龞龡龢龣龤龥郎凉秊裏隣�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[253].length;
            ++t
          )
            65533 !== i[253][t].charCodeAt(0) &&
              ((n[i[253][t]] = 64768 + t), (e[64768 + t] = i[253][t]));
          for (
            i[254] =
              "����������������������������������������������������������������兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[254].length;
            ++t
          )
            65533 !== i[254][t].charCodeAt(0) &&
              ((n[i[254][t]] = 65024 + t), (e[65024 + t] = i[254][t]));
          return { enc: n, dec: e };
        })()),
        (n[949] = (function () {
          var t,
            e = [],
            n = {},
            i = [];
          for (
            i[0] =
              "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[0].length;
            ++t
          )
            65533 !== i[0][t].charCodeAt(0) &&
              ((n[i[0][t]] = 0 + t), (e[0 + t] = i[0][t]));
          for (
            i[129] =
              "�����������������������������������������������������������������갂갃갅갆갋갌갍갎갏갘갞갟갡갢갣갥갦갧갨갩갪갫갮갲갳갴������갵갶갷갺갻갽갾갿걁걂걃걄걅걆걇걈걉걊걌걎걏걐걑걒걓걕������걖걗걙걚걛걝걞걟걠걡걢걣걤걥걦걧걨걩걪걫걬걭걮걯걲걳걵걶걹걻걼걽걾걿겂겇겈겍겎겏겑겒겓겕겖겗겘겙겚겛겞겢겣겤겥겦겧겫겭겮겱겲겳겴겵겶겷겺겾겿곀곂곃곅곆곇곉곊곋곍곎곏곐곑곒곓곔곖곘곙곚곛곜곝곞곟곢곣곥곦곩곫곭곮곲곴곷곸곹곺곻곾곿괁괂괃괅괇괈괉괊괋괎괐괒괓�".split(
                ""
              ),
              t = 0;
            t != i[129].length;
            ++t
          )
            65533 !== i[129][t].charCodeAt(0) &&
              ((n[i[129][t]] = 33024 + t), (e[33024 + t] = i[129][t]));
          for (
            i[130] =
              "�����������������������������������������������������������������괔괕괖괗괙괚괛괝괞괟괡괢괣괤괥괦괧괨괪괫괮괯괰괱괲괳������괶괷괹괺괻괽괾괿굀굁굂굃굆굈굊굋굌굍굎굏굑굒굓굕굖굗������굙굚굛굜굝굞굟굠굢굤굥굦굧굨굩굪굫굮굯굱굲굷굸굹굺굾궀궃궄궅궆궇궊궋궍궎궏궑궒궓궔궕궖궗궘궙궚궛궞궟궠궡궢궣궥궦궧궨궩궪궫궬궭궮궯궰궱궲궳궴궵궶궸궹궺궻궼궽궾궿귂귃귅귆귇귉귊귋귌귍귎귏귒귔귕귖귗귘귙귚귛귝귞귟귡귢귣귥귦귧귨귩귪귫귬귭귮귯귰귱귲귳귴귵귶귷�".split(
                ""
              ),
              t = 0;
            t != i[130].length;
            ++t
          )
            65533 !== i[130][t].charCodeAt(0) &&
              ((n[i[130][t]] = 33280 + t), (e[33280 + t] = i[130][t]));
          for (
            i[131] =
              "�����������������������������������������������������������������귺귻귽귾긂긃긄긅긆긇긊긌긎긏긐긑긒긓긕긖긗긘긙긚긛긜������긝긞긟긠긡긢긣긤긥긦긧긨긩긪긫긬긭긮긯긲긳긵긶긹긻긼������긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗깘깙깚깛깞깢깣깤깦깧깪깫깭깮깯깱깲깳깴깵깶깷깺깾깿꺀꺁꺂꺃꺆꺇꺈꺉꺊꺋꺍꺎꺏꺐꺑꺒꺓꺔꺕꺖꺗꺘꺙꺚꺛꺜꺝꺞꺟꺠꺡꺢꺣꺤꺥꺦꺧꺨꺩꺪꺫꺬꺭꺮꺯꺰꺱꺲꺳꺴꺵꺶꺷꺸꺹꺺꺻꺿껁껂껃껅껆껇껈껉껊껋껎껒껓껔껕껖껗껚껛껝껞껟껠껡껢껣껤껥�".split(
                ""
              ),
              t = 0;
            t != i[131].length;
            ++t
          )
            65533 !== i[131][t].charCodeAt(0) &&
              ((n[i[131][t]] = 33536 + t), (e[33536 + t] = i[131][t]));
          for (
            i[132] =
              "�����������������������������������������������������������������껦껧껩껪껬껮껯껰껱껲껳껵껶껷껹껺껻껽껾껿꼀꼁꼂꼃꼄꼅������꼆꼉꼊꼋꼌꼎꼏꼑꼒꼓꼔꼕꼖꼗꼘꼙꼚꼛꼜꼝꼞꼟꼠꼡꼢꼣������꼤꼥꼦꼧꼨꼩꼪꼫꼮꼯꼱꼳꼵꼶꼷꼸꼹꼺꼻꼾꽀꽄꽅꽆꽇꽊꽋꽌꽍꽎꽏꽑꽒꽓꽔꽕꽖꽗꽘꽙꽚꽛꽞꽟꽠꽡꽢꽣꽦꽧꽨꽩꽪꽫꽬꽭꽮꽯꽰꽱꽲꽳꽴꽵꽶꽷꽸꽺꽻꽼꽽꽾꽿꾁꾂꾃꾅꾆꾇꾉꾊꾋꾌꾍꾎꾏꾒꾓꾔꾖꾗꾘꾙꾚꾛꾝꾞꾟꾠꾡꾢꾣꾤꾥꾦꾧꾨꾩꾪꾫꾬꾭꾮꾯꾰꾱꾲꾳꾴꾵꾶꾷꾺꾻꾽꾾�".split(
                ""
              ),
              t = 0;
            t != i[132].length;
            ++t
          )
            65533 !== i[132][t].charCodeAt(0) &&
              ((n[i[132][t]] = 33792 + t), (e[33792 + t] = i[132][t]));
          for (
            i[133] =
              "�����������������������������������������������������������������꾿꿁꿂꿃꿄꿅꿆꿊꿌꿏꿐꿑꿒꿓꿕꿖꿗꿘꿙꿚꿛꿝꿞꿟꿠꿡������꿢꿣꿤꿥꿦꿧꿪꿫꿬꿭꿮꿯꿲꿳꿵꿶꿷꿹꿺꿻꿼꿽꿾꿿뀂뀃������뀅뀆뀇뀈뀉뀊뀋뀍뀎뀏뀑뀒뀓뀕뀖뀗뀘뀙뀚뀛뀞뀟뀠뀡뀢뀣뀤뀥뀦뀧뀩뀪뀫뀬뀭뀮뀯뀰뀱뀲뀳뀴뀵뀶뀷뀸뀹뀺뀻뀼뀽뀾뀿끀끁끂끃끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞끟끠끡끢끣끤끥끦끧끨끩끪끫끬끭끮끯끰끱끲끳끴끵끶끷끸끹끺끻끾끿낁낂낃낅낆낇낈낉낊낋낎낐낒낓낔낕낖낗낛낝낞낣낤�".split(
                ""
              ),
              t = 0;
            t != i[133].length;
            ++t
          )
            65533 !== i[133][t].charCodeAt(0) &&
              ((n[i[133][t]] = 34048 + t), (e[34048 + t] = i[133][t]));
          for (
            i[134] =
              "�����������������������������������������������������������������낥낦낧낪낰낲낶낷낹낺낻낽낾낿냀냁냂냃냆냊냋냌냍냎냏냒������냓냕냖냗냙냚냛냜냝냞냟냡냢냣냤냦냧냨냩냪냫냬냭냮냯냰������냱냲냳냴냵냶냷냸냹냺냻냼냽냾냿넀넁넂넃넄넅넆넇넊넍넎넏넑넔넕넖넗넚넞넟넠넡넢넦넧넩넪넫넭넮넯넰넱넲넳넶넺넻넼넽넾넿녂녃녅녆녇녉녊녋녌녍녎녏녒녓녖녗녙녚녛녝녞녟녡녢녣녤녥녦녧녨녩녪녫녬녭녮녯녰녱녲녳녴녵녶녷녺녻녽녾녿놁놃놄놅놆놇놊놌놎놏놐놑놕놖놗놙놚놛놝�".split(
                ""
              ),
              t = 0;
            t != i[134].length;
            ++t
          )
            65533 !== i[134][t].charCodeAt(0) &&
              ((n[i[134][t]] = 34304 + t), (e[34304 + t] = i[134][t]));
          for (
            i[135] =
              "�����������������������������������������������������������������놞놟놠놡놢놣놤놥놦놧놩놪놫놬놭놮놯놰놱놲놳놴놵놶놷놸������놹놺놻놼놽놾놿뇀뇁뇂뇃뇄뇅뇆뇇뇈뇉뇊뇋뇍뇎뇏뇑뇒뇓뇕������뇖뇗뇘뇙뇚뇛뇞뇠뇡뇢뇣뇤뇥뇦뇧뇪뇫뇭뇮뇯뇱뇲뇳뇴뇵뇶뇷뇸뇺뇼뇾뇿눀눁눂눃눆눇눉눊눍눎눏눐눑눒눓눖눘눚눛눜눝눞눟눡눢눣눤눥눦눧눨눩눪눫눬눭눮눯눰눱눲눳눵눶눷눸눹눺눻눽눾눿뉀뉁뉂뉃뉄뉅뉆뉇뉈뉉뉊뉋뉌뉍뉎뉏뉐뉑뉒뉓뉔뉕뉖뉗뉙뉚뉛뉝뉞뉟뉡뉢뉣뉤뉥뉦뉧뉪뉫뉬뉭뉮�".split(
                ""
              ),
              t = 0;
            t != i[135].length;
            ++t
          )
            65533 !== i[135][t].charCodeAt(0) &&
              ((n[i[135][t]] = 34560 + t), (e[34560 + t] = i[135][t]));
          for (
            i[136] =
              "�����������������������������������������������������������������뉯뉰뉱뉲뉳뉶뉷뉸뉹뉺뉻뉽뉾뉿늀늁늂늃늆늇늈늊늋늌늍늎������늏늒늓늕늖늗늛늜늝늞늟늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷������늸늹늺늻늼늽늾늿닀닁닂닃닄닅닆닇닊닋닍닎닏닑닓닔닕닖닗닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉댊댋댌댍댎댏댒댖댗댘댙댚댛댝댞댟댠댡댢댣댤댥댦댧댨댩댪댫댬댭댮댯댰댱댲댳댴댵댶댷댸댹댺댻댼댽댾댿덀덁덂덃덄덅덆덇덈덉덊덋덌덍덎덏덐덑덒덓덗덙덚덝덠덡덢덣�".split(
                ""
              ),
              t = 0;
            t != i[136].length;
            ++t
          )
            65533 !== i[136][t].charCodeAt(0) &&
              ((n[i[136][t]] = 34816 + t), (e[34816 + t] = i[136][t]));
          for (
            i[137] =
              "�����������������������������������������������������������������덦덨덪덬덭덯덲덳덵덶덷덹덺덻덼덽덾덿뎂뎆뎇뎈뎉뎊뎋뎍������뎎뎏뎑뎒뎓뎕뎖뎗뎘뎙뎚뎛뎜뎝뎞뎟뎢뎣뎤뎥뎦뎧뎩뎪뎫뎭������뎮뎯뎰뎱뎲뎳뎴뎵뎶뎷뎸뎹뎺뎻뎼뎽뎾뎿돀돁돂돃돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩돪돫돬돭돮돯돰돱돲돳돴돵돶돷돸돹돺돻돽돾돿됀됁됂됃됄됅됆됇됈됉됊됋됌됍됎됏됑됒됓됔됕됖됗됙됚됛됝됞됟됡됢됣됤됥됦됧됪됬됭됮됯됰됱됲됳됵됶됷됸됹됺됻됼됽됾됿둀둁둂둃둄�".split(
                ""
              ),
              t = 0;
            t != i[137].length;
            ++t
          )
            65533 !== i[137][t].charCodeAt(0) &&
              ((n[i[137][t]] = 35072 + t), (e[35072 + t] = i[137][t]));
          for (
            i[138] =
              "�����������������������������������������������������������������둅둆둇둈둉둊둋둌둍둎둏둒둓둕둖둗둙둚둛둜둝둞둟둢둤둦������둧둨둩둪둫둭둮둯둰둱둲둳둴둵둶둷둸둹둺둻둼둽둾둿뒁뒂������뒃뒄뒅뒆뒇뒉뒊뒋뒌뒍뒎뒏뒐뒑뒒뒓뒔뒕뒖뒗뒘뒙뒚뒛뒜뒞뒟뒠뒡뒢뒣뒥뒦뒧뒩뒪뒫뒭뒮뒯뒰뒱뒲뒳뒴뒶뒸뒺뒻뒼뒽뒾뒿듁듂듃듅듆듇듉듊듋듌듍듎듏듑듒듓듔듖듗듘듙듚듛듞듟듡듢듥듧듨듩듪듫듮듰듲듳듴듵듶듷듹듺듻듼듽듾듿딀딁딂딃딄딅딆딇딈딉딊딋딌딍딎딏딐딑딒딓딖딗딙딚딝�".split(
                ""
              ),
              t = 0;
            t != i[138].length;
            ++t
          )
            65533 !== i[138][t].charCodeAt(0) &&
              ((n[i[138][t]] = 35328 + t), (e[35328 + t] = i[138][t]));
          for (
            i[139] =
              "�����������������������������������������������������������������딞딟딠딡딢딣딦딫딬딭딮딯딲딳딵딶딷딹딺딻딼딽딾딿땂땆������땇땈땉땊땎땏땑땒땓땕땖땗땘땙땚땛땞땢땣땤땥땦땧땨땩땪������땫땬땭땮땯땰땱땲땳땴땵땶땷땸땹땺땻땼땽땾땿떀떁떂떃떄떅떆떇떈떉떊떋떌떍떎떏떐떑떒떓떔떕떖떗떘떙떚떛떜떝떞떟떢떣떥떦떧떩떬떭떮떯떲떶떷떸떹떺떾떿뗁뗂뗃뗅뗆뗇뗈뗉뗊뗋뗎뗒뗓뗔뗕뗖뗗뗙뗚뗛뗜뗝뗞뗟뗠뗡뗢뗣뗤뗥뗦뗧뗨뗩뗪뗫뗭뗮뗯뗰뗱뗲뗳뗴뗵뗶뗷뗸뗹뗺뗻뗼뗽뗾뗿�".split(
                ""
              ),
              t = 0;
            t != i[139].length;
            ++t
          )
            65533 !== i[139][t].charCodeAt(0) &&
              ((n[i[139][t]] = 35584 + t), (e[35584 + t] = i[139][t]));
          for (
            i[140] =
              "�����������������������������������������������������������������똀똁똂똃똄똅똆똇똈똉똊똋똌똍똎똏똒똓똕똖똗똙똚똛똜똝������똞똟똠똡똢똣똤똦똧똨똩똪똫똭똮똯똰똱똲똳똵똶똷똸똹똺������똻똼똽똾똿뙀뙁뙂뙃뙄뙅뙆뙇뙉뙊뙋뙌뙍뙎뙏뙐뙑뙒뙓뙔뙕뙖뙗뙘뙙뙚뙛뙜뙝뙞뙟뙠뙡뙢뙣뙥뙦뙧뙩뙪뙫뙬뙭뙮뙯뙰뙱뙲뙳뙴뙵뙶뙷뙸뙹뙺뙻뙼뙽뙾뙿뚀뚁뚂뚃뚄뚅뚆뚇뚈뚉뚊뚋뚌뚍뚎뚏뚐뚑뚒뚓뚔뚕뚖뚗뚘뚙뚚뚛뚞뚟뚡뚢뚣뚥뚦뚧뚨뚩뚪뚭뚮뚯뚰뚲뚳뚴뚵뚶뚷뚸뚹뚺뚻뚼뚽뚾뚿뛀뛁뛂�".split(
                ""
              ),
              t = 0;
            t != i[140].length;
            ++t
          )
            65533 !== i[140][t].charCodeAt(0) &&
              ((n[i[140][t]] = 35840 + t), (e[35840 + t] = i[140][t]));
          for (
            i[141] =
              "�����������������������������������������������������������������뛃뛄뛅뛆뛇뛈뛉뛊뛋뛌뛍뛎뛏뛐뛑뛒뛓뛕뛖뛗뛘뛙뛚뛛뛜뛝������뛞뛟뛠뛡뛢뛣뛤뛥뛦뛧뛨뛩뛪뛫뛬뛭뛮뛯뛱뛲뛳뛵뛶뛷뛹뛺������뛻뛼뛽뛾뛿뜂뜃뜄뜆뜇뜈뜉뜊뜋뜌뜍뜎뜏뜐뜑뜒뜓뜔뜕뜖뜗뜘뜙뜚뜛뜜뜝뜞뜟뜠뜡뜢뜣뜤뜥뜦뜧뜪뜫뜭뜮뜱뜲뜳뜴뜵뜶뜷뜺뜼뜽뜾뜿띀띁띂띃띅띆띇띉띊띋띍띎띏띐띑띒띓띖띗띘띙띚띛띜띝띞띟띡띢띣띥띦띧띩띪띫띬띭띮띯띲띴띶띷띸띹띺띻띾띿랁랂랃랅랆랇랈랉랊랋랎랓랔랕랚랛랝랞�".split(
                ""
              ),
              t = 0;
            t != i[141].length;
            ++t
          )
            65533 !== i[141][t].charCodeAt(0) &&
              ((n[i[141][t]] = 36096 + t), (e[36096 + t] = i[141][t]));
          for (
            i[142] =
              "�����������������������������������������������������������������랟랡랢랣랤랥랦랧랪랮랯랰랱랲랳랶랷랹랺랻랼랽랾랿럀럁������럂럃럄럅럆럈럊럋럌럍럎럏럐럑럒럓럔럕럖럗럘럙럚럛럜럝������럞럟럠럡럢럣럤럥럦럧럨럩럪럫럮럯럱럲럳럵럶럷럸럹럺럻럾렂렃렄렅렆렊렋렍렎렏렑렒렓렔렕렖렗렚렜렞렟렠렡렢렣렦렧렩렪렫렭렮렯렰렱렲렳렶렺렻렼렽렾렿롁롂롃롅롆롇롈롉롊롋롌롍롎롏롐롒롔롕롖롗롘롙롚롛롞롟롡롢롣롥롦롧롨롩롪롫롮롰롲롳롴롵롶롷롹롺롻롽롾롿뢀뢁뢂뢃뢄�".split(
                ""
              ),
              t = 0;
            t != i[142].length;
            ++t
          )
            65533 !== i[142][t].charCodeAt(0) &&
              ((n[i[142][t]] = 36352 + t), (e[36352 + t] = i[142][t]));
          for (
            i[143] =
              "�����������������������������������������������������������������뢅뢆뢇뢈뢉뢊뢋뢌뢎뢏뢐뢑뢒뢓뢔뢕뢖뢗뢘뢙뢚뢛뢜뢝뢞뢟������뢠뢡뢢뢣뢤뢥뢦뢧뢩뢪뢫뢬뢭뢮뢯뢱뢲뢳뢵뢶뢷뢹뢺뢻뢼뢽������뢾뢿룂룄룆룇룈룉룊룋룍룎룏룑룒룓룕룖룗룘룙룚룛룜룞룠룢룣룤룥룦룧룪룫룭룮룯룱룲룳룴룵룶룷룺룼룾룿뤀뤁뤂뤃뤅뤆뤇뤈뤉뤊뤋뤌뤍뤎뤏뤐뤑뤒뤓뤔뤕뤖뤗뤙뤚뤛뤜뤝뤞뤟뤡뤢뤣뤤뤥뤦뤧뤨뤩뤪뤫뤬뤭뤮뤯뤰뤱뤲뤳뤴뤵뤶뤷뤸뤹뤺뤻뤾뤿륁륂륃륅륆륇륈륉륊륋륍륎륐륒륓륔륕륖륗�".split(
                ""
              ),
              t = 0;
            t != i[143].length;
            ++t
          )
            65533 !== i[143][t].charCodeAt(0) &&
              ((n[i[143][t]] = 36608 + t), (e[36608 + t] = i[143][t]));
          for (
            i[144] =
              "�����������������������������������������������������������������륚륛륝륞륟륡륢륣륤륥륦륧륪륬륮륯륰륱륲륳륶륷륹륺륻륽������륾륿릀릁릂릃릆릈릋릌릏릐릑릒릓릔릕릖릗릘릙릚릛릜릝릞������릟릠릡릢릣릤릥릦릧릨릩릪릫릮릯릱릲릳릵릶릷릸릹릺릻릾맀맂맃맄맅맆맇맊맋맍맓맔맕맖맗맚맜맟맠맢맦맧맩맪맫맭맮맯맰맱맲맳맶맻맼맽맾맿먂먃먄먅먆먇먉먊먋먌먍먎먏먐먑먒먓먔먖먗먘먙먚먛먜먝먞먟먠먡먢먣먤먥먦먧먨먩먪먫먬먭먮먯먰먱먲먳먴먵먶먷먺먻먽먾먿멁멃멄멅멆�".split(
                ""
              ),
              t = 0;
            t != i[144].length;
            ++t
          )
            65533 !== i[144][t].charCodeAt(0) &&
              ((n[i[144][t]] = 36864 + t), (e[36864 + t] = i[144][t]));
          for (
            i[145] =
              "�����������������������������������������������������������������멇멊멌멏멐멑멒멖멗멙멚멛멝멞멟멠멡멢멣멦멪멫멬멭멮멯������멲멳멵멶멷멹멺멻멼멽멾멿몀몁몂몆몈몉몊몋몍몎몏몐몑몒������몓몔몕몖몗몘몙몚몛몜몝몞몟몠몡몢몣몤몥몦몧몪몭몮몯몱몳몴몵몶몷몺몼몾몿뫀뫁뫂뫃뫅뫆뫇뫉뫊뫋뫌뫍뫎뫏뫐뫑뫒뫓뫔뫕뫖뫗뫚뫛뫜뫝뫞뫟뫠뫡뫢뫣뫤뫥뫦뫧뫨뫩뫪뫫뫬뫭뫮뫯뫰뫱뫲뫳뫴뫵뫶뫷뫸뫹뫺뫻뫽뫾뫿묁묂묃묅묆묇묈묉묊묋묌묎묐묒묓묔묕묖묗묙묚묛묝묞묟묡묢묣묤묥묦묧�".split(
                ""
              ),
              t = 0;
            t != i[145].length;
            ++t
          )
            65533 !== i[145][t].charCodeAt(0) &&
              ((n[i[145][t]] = 37120 + t), (e[37120 + t] = i[145][t]));
          for (
            i[146] =
              "�����������������������������������������������������������������묨묪묬묭묮묯묰묱묲묳묷묹묺묿뭀뭁뭂뭃뭆뭈뭊뭋뭌뭎뭑뭒������뭓뭕뭖뭗뭙뭚뭛뭜뭝뭞뭟뭠뭢뭤뭥뭦뭧뭨뭩뭪뭫뭭뭮뭯뭰뭱������뭲뭳뭴뭵뭶뭷뭸뭹뭺뭻뭼뭽뭾뭿뮀뮁뮂뮃뮄뮅뮆뮇뮉뮊뮋뮍뮎뮏뮑뮒뮓뮔뮕뮖뮗뮘뮙뮚뮛뮜뮝뮞뮟뮠뮡뮢뮣뮥뮦뮧뮩뮪뮫뮭뮮뮯뮰뮱뮲뮳뮵뮶뮸뮹뮺뮻뮼뮽뮾뮿믁믂믃믅믆믇믉믊믋믌믍믎믏믑믒믔믕믖믗믘믙믚믛믜믝믞믟믠믡믢믣믤믥믦믧믨믩믪믫믬믭믮믯믰믱믲믳믴믵믶믷믺믻믽믾밁�".split(
                ""
              ),
              t = 0;
            t != i[146].length;
            ++t
          )
            65533 !== i[146][t].charCodeAt(0) &&
              ((n[i[146][t]] = 37376 + t), (e[37376 + t] = i[146][t]));
          for (
            i[147] =
              "�����������������������������������������������������������������밃밄밅밆밇밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵������밶밷밹밺밻밼밽밾밿뱂뱆뱇뱈뱊뱋뱎뱏뱑뱒뱓뱔뱕뱖뱗뱘뱙������뱚뱛뱜뱞뱟뱠뱡뱢뱣뱤뱥뱦뱧뱨뱩뱪뱫뱬뱭뱮뱯뱰뱱뱲뱳뱴뱵뱶뱷뱸뱹뱺뱻뱼뱽뱾뱿벀벁벂벃벆벇벉벊벍벏벐벑벒벓벖벘벛벜벝벞벟벢벣벥벦벩벪벫벬벭벮벯벲벶벷벸벹벺벻벾벿볁볂볃볅볆볇볈볉볊볋볌볎볒볓볔볖볗볙볚볛볝볞볟볠볡볢볣볤볥볦볧볨볩볪볫볬볭볮볯볰볱볲볳볷볹볺볻볽�".split(
                ""
              ),
              t = 0;
            t != i[147].length;
            ++t
          )
            65533 !== i[147][t].charCodeAt(0) &&
              ((n[i[147][t]] = 37632 + t), (e[37632 + t] = i[147][t]));
          for (
            i[148] =
              "�����������������������������������������������������������������볾볿봀봁봂봃봆봈봊봋봌봍봎봏봑봒봓봕봖봗봘봙봚봛봜봝������봞봟봠봡봢봣봥봦봧봨봩봪봫봭봮봯봰봱봲봳봴봵봶봷봸봹������봺봻봼봽봾봿뵁뵂뵃뵄뵅뵆뵇뵊뵋뵍뵎뵏뵑뵒뵓뵔뵕뵖뵗뵚뵛뵜뵝뵞뵟뵠뵡뵢뵣뵥뵦뵧뵩뵪뵫뵬뵭뵮뵯뵰뵱뵲뵳뵴뵵뵶뵷뵸뵹뵺뵻뵼뵽뵾뵿붂붃붅붆붋붌붍붎붏붒붔붖붗붘붛붝붞붟붠붡붢붣붥붦붧붨붩붪붫붬붭붮붯붱붲붳붴붵붶붷붹붺붻붼붽붾붿뷀뷁뷂뷃뷄뷅뷆뷇뷈뷉뷊뷋뷌뷍뷎뷏뷐뷑�".split(
                ""
              ),
              t = 0;
            t != i[148].length;
            ++t
          )
            65533 !== i[148][t].charCodeAt(0) &&
              ((n[i[148][t]] = 37888 + t), (e[37888 + t] = i[148][t]));
          for (
            i[149] =
              "�����������������������������������������������������������������뷒뷓뷖뷗뷙뷚뷛뷝뷞뷟뷠뷡뷢뷣뷤뷥뷦뷧뷨뷪뷫뷬뷭뷮뷯뷱������뷲뷳뷵뷶뷷뷹뷺뷻뷼뷽뷾뷿븁븂븄븆븇븈븉븊븋븎븏븑븒븓������븕븖븗븘븙븚븛븞븠븡븢븣븤븥븦븧븨븩븪븫븬븭븮븯븰븱븲븳븴븵븶븷븸븹븺븻븼븽븾븿빀빁빂빃빆빇빉빊빋빍빏빐빑빒빓빖빘빜빝빞빟빢빣빥빦빧빩빫빬빭빮빯빲빶빷빸빹빺빾빿뺁뺂뺃뺅뺆뺇뺈뺉뺊뺋뺎뺒뺓뺔뺕뺖뺗뺚뺛뺜뺝뺞뺟뺠뺡뺢뺣뺤뺥뺦뺧뺩뺪뺫뺬뺭뺮뺯뺰뺱뺲뺳뺴뺵뺶뺷�".split(
                ""
              ),
              t = 0;
            t != i[149].length;
            ++t
          )
            65533 !== i[149][t].charCodeAt(0) &&
              ((n[i[149][t]] = 38144 + t), (e[38144 + t] = i[149][t]));
          for (
            i[150] =
              "�����������������������������������������������������������������뺸뺹뺺뺻뺼뺽뺾뺿뻀뻁뻂뻃뻄뻅뻆뻇뻈뻉뻊뻋뻌뻍뻎뻏뻒뻓������뻕뻖뻙뻚뻛뻜뻝뻞뻟뻡뻢뻦뻧뻨뻩뻪뻫뻭뻮뻯뻰뻱뻲뻳뻴뻵������뻶뻷뻸뻹뻺뻻뻼뻽뻾뻿뼀뼂뼃뼄뼅뼆뼇뼊뼋뼌뼍뼎뼏뼐뼑뼒뼓뼔뼕뼖뼗뼚뼞뼟뼠뼡뼢뼣뼤뼥뼦뼧뼨뼩뼪뼫뼬뼭뼮뼯뼰뼱뼲뼳뼴뼵뼶뼷뼸뼹뼺뼻뼼뼽뼾뼿뽂뽃뽅뽆뽇뽉뽊뽋뽌뽍뽎뽏뽒뽓뽔뽖뽗뽘뽙뽚뽛뽜뽝뽞뽟뽠뽡뽢뽣뽤뽥뽦뽧뽨뽩뽪뽫뽬뽭뽮뽯뽰뽱뽲뽳뽴뽵뽶뽷뽸뽹뽺뽻뽼뽽뽾뽿뾀뾁뾂�".split(
                ""
              ),
              t = 0;
            t != i[150].length;
            ++t
          )
            65533 !== i[150][t].charCodeAt(0) &&
              ((n[i[150][t]] = 38400 + t), (e[38400 + t] = i[150][t]));
          for (
            i[151] =
              "�����������������������������������������������������������������뾃뾄뾅뾆뾇뾈뾉뾊뾋뾌뾍뾎뾏뾐뾑뾒뾓뾕뾖뾗뾘뾙뾚뾛뾜뾝������뾞뾟뾠뾡뾢뾣뾤뾥뾦뾧뾨뾩뾪뾫뾬뾭뾮뾯뾱뾲뾳뾴뾵뾶뾷뾸������뾹뾺뾻뾼뾽뾾뾿뿀뿁뿂뿃뿄뿆뿇뿈뿉뿊뿋뿎뿏뿑뿒뿓뿕뿖뿗뿘뿙뿚뿛뿝뿞뿠뿢뿣뿤뿥뿦뿧뿨뿩뿪뿫뿬뿭뿮뿯뿰뿱뿲뿳뿴뿵뿶뿷뿸뿹뿺뿻뿼뿽뿾뿿쀀쀁쀂쀃쀄쀅쀆쀇쀈쀉쀊쀋쀌쀍쀎쀏쀐쀑쀒쀓쀔쀕쀖쀗쀘쀙쀚쀛쀜쀝쀞쀟쀠쀡쀢쀣쀤쀥쀦쀧쀨쀩쀪쀫쀬쀭쀮쀯쀰쀱쀲쀳쀴쀵쀶쀷쀸쀹쀺쀻쀽쀾쀿�".split(
                ""
              ),
              t = 0;
            t != i[151].length;
            ++t
          )
            65533 !== i[151][t].charCodeAt(0) &&
              ((n[i[151][t]] = 38656 + t), (e[38656 + t] = i[151][t]));
          for (
            i[152] =
              "�����������������������������������������������������������������쁀쁁쁂쁃쁄쁅쁆쁇쁈쁉쁊쁋쁌쁍쁎쁏쁐쁒쁓쁔쁕쁖쁗쁙쁚쁛������쁝쁞쁟쁡쁢쁣쁤쁥쁦쁧쁪쁫쁬쁭쁮쁯쁰쁱쁲쁳쁴쁵쁶쁷쁸쁹������쁺쁻쁼쁽쁾쁿삀삁삂삃삄삅삆삇삈삉삊삋삌삍삎삏삒삓삕삖삗삙삚삛삜삝삞삟삢삤삦삧삨삩삪삫삮삱삲삷삸삹삺삻삾샂샃샄샆샇샊샋샍샎샏샑샒샓샔샕샖샗샚샞샟샠샡샢샣샦샧샩샪샫샭샮샯샰샱샲샳샶샸샺샻샼샽샾샿섁섂섃섅섆섇섉섊섋섌섍섎섏섑섒섓섔섖섗섘섙섚섛섡섢섥섨섩섪섫섮�".split(
                ""
              ),
              t = 0;
            t != i[152].length;
            ++t
          )
            65533 !== i[152][t].charCodeAt(0) &&
              ((n[i[152][t]] = 38912 + t), (e[38912 + t] = i[152][t]));
          for (
            i[153] =
              "�����������������������������������������������������������������섲섳섴섵섷섺섻섽섾섿셁셂셃셄셅셆셇셊셎셏셐셑셒셓셖셗������셙셚셛셝셞셟셠셡셢셣셦셪셫셬셭셮셯셱셲셳셵셶셷셹셺셻������셼셽셾셿솀솁솂솃솄솆솇솈솉솊솋솏솑솒솓솕솗솘솙솚솛솞솠솢솣솤솦솧솪솫솭솮솯솱솲솳솴솵솶솷솸솹솺솻솼솾솿쇀쇁쇂쇃쇅쇆쇇쇉쇊쇋쇍쇎쇏쇐쇑쇒쇓쇕쇖쇙쇚쇛쇜쇝쇞쇟쇡쇢쇣쇥쇦쇧쇩쇪쇫쇬쇭쇮쇯쇲쇴쇵쇶쇷쇸쇹쇺쇻쇾쇿숁숂숃숅숆숇숈숉숊숋숎숐숒숓숔숕숖숗숚숛숝숞숡숢숣�".split(
                ""
              ),
              t = 0;
            t != i[153].length;
            ++t
          )
            65533 !== i[153][t].charCodeAt(0) &&
              ((n[i[153][t]] = 39168 + t), (e[39168 + t] = i[153][t]));
          for (
            i[154] =
              "�����������������������������������������������������������������숤숥숦숧숪숬숮숰숳숵숶숷숸숹숺숻숼숽숾숿쉀쉁쉂쉃쉄쉅������쉆쉇쉉쉊쉋쉌쉍쉎쉏쉒쉓쉕쉖쉗쉙쉚쉛쉜쉝쉞쉟쉡쉢쉣쉤쉦������쉧쉨쉩쉪쉫쉮쉯쉱쉲쉳쉵쉶쉷쉸쉹쉺쉻쉾슀슂슃슄슅슆슇슊슋슌슍슎슏슑슒슓슔슕슖슗슙슚슜슞슟슠슡슢슣슦슧슩슪슫슮슯슰슱슲슳슶슸슺슻슼슽슾슿싀싁싂싃싄싅싆싇싈싉싊싋싌싍싎싏싐싑싒싓싔싕싖싗싘싙싚싛싞싟싡싢싥싦싧싨싩싪싮싰싲싳싴싵싷싺싽싾싿쌁쌂쌃쌄쌅쌆쌇쌊쌋쌎쌏�".split(
                ""
              ),
              t = 0;
            t != i[154].length;
            ++t
          )
            65533 !== i[154][t].charCodeAt(0) &&
              ((n[i[154][t]] = 39424 + t), (e[39424 + t] = i[154][t]));
          for (
            i[155] =
              "�����������������������������������������������������������������쌐쌑쌒쌖쌗쌙쌚쌛쌝쌞쌟쌠쌡쌢쌣쌦쌧쌪쌫쌬쌭쌮쌯쌰쌱쌲������쌳쌴쌵쌶쌷쌸쌹쌺쌻쌼쌽쌾쌿썀썁썂썃썄썆썇썈썉썊썋썌썍������썎썏썐썑썒썓썔썕썖썗썘썙썚썛썜썝썞썟썠썡썢썣썤썥썦썧썪썫썭썮썯썱썳썴썵썶썷썺썻썾썿쎀쎁쎂쎃쎅쎆쎇쎉쎊쎋쎍쎎쎏쎐쎑쎒쎓쎔쎕쎖쎗쎘쎙쎚쎛쎜쎝쎞쎟쎠쎡쎢쎣쎤쎥쎦쎧쎨쎩쎪쎫쎬쎭쎮쎯쎰쎱쎲쎳쎴쎵쎶쎷쎸쎹쎺쎻쎼쎽쎾쎿쏁쏂쏃쏄쏅쏆쏇쏈쏉쏊쏋쏌쏍쏎쏏쏐쏑쏒쏓쏔쏕쏖쏗쏚�".split(
                ""
              ),
              t = 0;
            t != i[155].length;
            ++t
          )
            65533 !== i[155][t].charCodeAt(0) &&
              ((n[i[155][t]] = 39680 + t), (e[39680 + t] = i[155][t]));
          for (
            i[156] =
              "�����������������������������������������������������������������쏛쏝쏞쏡쏣쏤쏥쏦쏧쏪쏫쏬쏮쏯쏰쏱쏲쏳쏶쏷쏹쏺쏻쏼쏽쏾������쏿쐀쐁쐂쐃쐄쐅쐆쐇쐉쐊쐋쐌쐍쐎쐏쐑쐒쐓쐔쐕쐖쐗쐘쐙쐚������쐛쐜쐝쐞쐟쐠쐡쐢쐣쐥쐦쐧쐨쐩쐪쐫쐭쐮쐯쐱쐲쐳쐵쐶쐷쐸쐹쐺쐻쐾쐿쑀쑁쑂쑃쑄쑅쑆쑇쑉쑊쑋쑌쑍쑎쑏쑐쑑쑒쑓쑔쑕쑖쑗쑘쑙쑚쑛쑜쑝쑞쑟쑠쑡쑢쑣쑦쑧쑩쑪쑫쑭쑮쑯쑰쑱쑲쑳쑶쑷쑸쑺쑻쑼쑽쑾쑿쒁쒂쒃쒄쒅쒆쒇쒈쒉쒊쒋쒌쒍쒎쒏쒐쒑쒒쒓쒕쒖쒗쒘쒙쒚쒛쒝쒞쒟쒠쒡쒢쒣쒤쒥쒦쒧쒨쒩�".split(
                ""
              ),
              t = 0;
            t != i[156].length;
            ++t
          )
            65533 !== i[156][t].charCodeAt(0) &&
              ((n[i[156][t]] = 39936 + t), (e[39936 + t] = i[156][t]));
          for (
            i[157] =
              "�����������������������������������������������������������������쒪쒫쒬쒭쒮쒯쒰쒱쒲쒳쒴쒵쒶쒷쒹쒺쒻쒽쒾쒿쓀쓁쓂쓃쓄쓅������쓆쓇쓈쓉쓊쓋쓌쓍쓎쓏쓐쓑쓒쓓쓔쓕쓖쓗쓘쓙쓚쓛쓜쓝쓞쓟������쓠쓡쓢쓣쓤쓥쓦쓧쓨쓪쓫쓬쓭쓮쓯쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂씃씄씅씆씇씈씉씊씋씍씎씏씑씒씓씕씖씗씘씙씚씛씝씞씟씠씡씢씣씤씥씦씧씪씫씭씮씯씱씲씳씴씵씶씷씺씼씾씿앀앁앂앃앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩앪앫앬앭앮앯앲앶앷앸앹앺앻앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔�".split(
                ""
              ),
              t = 0;
            t != i[157].length;
            ++t
          )
            65533 !== i[157][t].charCodeAt(0) &&
              ((n[i[157][t]] = 40192 + t), (e[40192 + t] = i[157][t]));
          for (
            i[158] =
              "�����������������������������������������������������������������얖얙얚얛얝얞얟얡얢얣얤얥얦얧얨얪얫얬얭얮얯얰얱얲얳얶������얷얺얿엀엁엂엃엋엍엏엒엓엕엖엗엙엚엛엜엝엞엟엢엤엦엧������엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑옒옓옔옕옖옗옚옝옞옟옠옡옢옣옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉왊왋왌왍왎왏왒왖왗왘왙왚왛왞왟왡왢왣왤왥왦왧왨왩왪왫왭왮왰왲왳왴왵왶왷왺왻왽왾왿욁욂욃욄욅욆욇욊욌욎욏욐욑욒욓욖욗욙욚욛욝욞욟욠욡욢욣욦�".split(
                ""
              ),
              t = 0;
            t != i[158].length;
            ++t
          )
            65533 !== i[158][t].charCodeAt(0) &&
              ((n[i[158][t]] = 40448 + t), (e[40448 + t] = i[158][t]));
          for (
            i[159] =
              "�����������������������������������������������������������������욨욪욫욬욭욮욯욲욳욵욶욷욻욼욽욾욿웂웄웆웇웈웉웊웋웎������웏웑웒웓웕웖웗웘웙웚웛웞웟웢웣웤웥웦웧웪웫웭웮웯웱웲������웳웴웵웶웷웺웻웼웾웿윀윁윂윃윆윇윉윊윋윍윎윏윐윑윒윓윖윘윚윛윜윝윞윟윢윣윥윦윧윩윪윫윬윭윮윯윲윴윶윸윹윺윻윾윿읁읂읃읅읆읇읈읉읋읎읐읙읚읛읝읞읟읡읢읣읤읥읦읧읩읪읬읭읮읯읰읱읲읳읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛잜잝잞잟잢잧잨잩잪잫잮잯잱잲잳잵잶잷�".split(
                ""
              ),
              t = 0;
            t != i[159].length;
            ++t
          )
            65533 !== i[159][t].charCodeAt(0) &&
              ((n[i[159][t]] = 40704 + t), (e[40704 + t] = i[159][t]));
          for (
            i[160] =
              "�����������������������������������������������������������������잸잹잺잻잾쟂쟃쟄쟅쟆쟇쟊쟋쟍쟏쟑쟒쟓쟔쟕쟖쟗쟙쟚쟛쟜������쟞쟟쟠쟡쟢쟣쟥쟦쟧쟩쟪쟫쟭쟮쟯쟰쟱쟲쟳쟴쟵쟶쟷쟸쟹쟺������쟻쟼쟽쟾쟿젂젃젅젆젇젉젋젌젍젎젏젒젔젗젘젙젚젛젞젟젡젢젣젥젦젧젨젩젪젫젮젰젲젳젴젵젶젷젹젺젻젽젾젿졁졂졃졄졅졆졇졊졋졎졏졐졑졒졓졕졖졗졘졙졚졛졜졝졞졟졠졡졢졣졤졥졦졧졨졩졪졫졬졭졮졯졲졳졵졶졷졹졻졼졽졾졿좂좄좈좉좊좎좏좐좑좒좓좕좖좗좘좙좚좛좜좞좠좢좣좤�".split(
                ""
              ),
              t = 0;
            t != i[160].length;
            ++t
          )
            65533 !== i[160][t].charCodeAt(0) &&
              ((n[i[160][t]] = 40960 + t), (e[40960 + t] = i[160][t]));
          for (
            i[161] =
              "�����������������������������������������������������������������좥좦좧좩좪좫좬좭좮좯좰좱좲좳좴좵좶좷좸좹좺좻좾좿죀죁������죂죃죅죆죇죉죊죋죍죎죏죐죑죒죓죖죘죚죛죜죝죞죟죢죣죥������죦죧죨죩죪죫죬죭죮죯죰죱죲죳죴죶죷죸죹죺죻죾죿줁줂줃줇줈줉줊줋줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈〉《》「」『』【】±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢�".split(
                ""
              ),
              t = 0;
            t != i[161].length;
            ++t
          )
            65533 !== i[161][t].charCodeAt(0) &&
              ((n[i[161][t]] = 41216 + t), (e[41216 + t] = i[161][t]));
          for (
            i[162] =
              "�����������������������������������������������������������������줐줒줓줔줕줖줗줙줚줛줜줝줞줟줠줡줢줣줤줥줦줧줨줩줪줫������줭줮줯줰줱줲줳줵줶줷줸줹줺줻줼줽줾줿쥀쥁쥂쥃쥄쥅쥆쥇������쥈쥉쥊쥋쥌쥍쥎쥏쥒쥓쥕쥖쥗쥙쥚쥛쥜쥝쥞쥟쥢쥤쥥쥦쥧쥨쥩쥪쥫쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®������������������������".split(
                ""
              ),
              t = 0;
            t != i[162].length;
            ++t
          )
            65533 !== i[162][t].charCodeAt(0) &&
              ((n[i[162][t]] = 41472 + t), (e[41472 + t] = i[162][t]));
          for (
            i[163] =
              "�����������������������������������������������������������������쥱쥲쥳쥵쥶쥷쥸쥹쥺쥻쥽쥾쥿즀즁즂즃즄즅즆즇즊즋즍즎즏������즑즒즓즔즕즖즗즚즜즞즟즠즡즢즣즤즥즦즧즨즩즪즫즬즭즮������즯즰즱즲즳즴즵즶즷즸즹즺즻즼즽즾즿짂짃짅짆짉짋짌짍짎짏짒짔짗짘짛！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［￦］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(
                ""
              ),
              t = 0;
            t != i[163].length;
            ++t
          )
            65533 !== i[163][t].charCodeAt(0) &&
              ((n[i[163][t]] = 41728 + t), (e[41728 + t] = i[163][t]));
          for (
            i[164] =
              "�����������������������������������������������������������������짞짟짡짣짥짦짨짩짪짫짮짲짳짴짵짶짷짺짻짽짾짿쨁쨂쨃쨄������쨅쨆쨇쨊쨎쨏쨐쨑쨒쨓쨕쨖쨗쨙쨚쨛쨜쨝쨞쨟쨠쨡쨢쨣쨤쨥������쨦쨧쨨쨪쨫쨬쨭쨮쨯쨰쨱쨲쨳쨴쨵쨶쨷쨸쨹쨺쨻쨼쨽쨾쨿쩀쩁쩂쩃쩄쩅쩆ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㅤㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊㆋㆌㆍㆎ�".split(
                ""
              ),
              t = 0;
            t != i[164].length;
            ++t
          )
            65533 !== i[164][t].charCodeAt(0) &&
              ((n[i[164][t]] = 41984 + t), (e[41984 + t] = i[164][t]));
          for (
            i[165] =
              "�����������������������������������������������������������������쩇쩈쩉쩊쩋쩎쩏쩑쩒쩓쩕쩖쩗쩘쩙쩚쩛쩞쩢쩣쩤쩥쩦쩧쩩쩪������쩫쩬쩭쩮쩯쩰쩱쩲쩳쩴쩵쩶쩷쩸쩹쩺쩻쩼쩾쩿쪀쪁쪂쪃쪅쪆������쪇쪈쪉쪊쪋쪌쪍쪎쪏쪐쪑쪒쪓쪔쪕쪖쪗쪙쪚쪛쪜쪝쪞쪟쪠쪡쪢쪣쪤쪥쪦쪧ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ�����ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������".split(
                ""
              ),
              t = 0;
            t != i[165].length;
            ++t
          )
            65533 !== i[165][t].charCodeAt(0) &&
              ((n[i[165][t]] = 42240 + t), (e[42240 + t] = i[165][t]));
          for (
            i[166] =
              "�����������������������������������������������������������������쪨쪩쪪쪫쪬쪭쪮쪯쪰쪱쪲쪳쪴쪵쪶쪷쪸쪹쪺쪻쪾쪿쫁쫂쫃쫅������쫆쫇쫈쫉쫊쫋쫎쫐쫒쫔쫕쫖쫗쫚쫛쫜쫝쫞쫟쫡쫢쫣쫤쫥쫦쫧������쫨쫩쫪쫫쫭쫮쫯쫰쫱쫲쫳쫵쫶쫷쫸쫹쫺쫻쫼쫽쫾쫿쬀쬁쬂쬃쬄쬅쬆쬇쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃╄╅╆╇╈╉╊���������������������������".split(
                ""
              ),
              t = 0;
            t != i[166].length;
            ++t
          )
            65533 !== i[166][t].charCodeAt(0) &&
              ((n[i[166][t]] = 42496 + t), (e[42496 + t] = i[166][t]));
          for (
            i[167] =
              "�����������������������������������������������������������������쬋쬌쬍쬎쬏쬑쬒쬓쬕쬖쬗쬙쬚쬛쬜쬝쬞쬟쬢쬣쬤쬥쬦쬧쬨쬩������쬪쬫쬬쬭쬮쬯쬰쬱쬲쬳쬴쬵쬶쬷쬸쬹쬺쬻쬼쬽쬾쬿쭀쭂쭃쭄������쭅쭆쭇쭊쭋쭍쭎쭏쭑쭒쭓쭔쭕쭖쭗쭚쭛쭜쭞쭟쭠쭡쭢쭣쭥쭦쭧쭨쭩쭪쭫쭬㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙㎚㎛㎜㎝㎞㎟㎠㎡㎢㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰㎱㎲㎳㎴㎵㎶㎷㎸㎹㎀㎁㎂㎃㎄㎺㎻㎼㎽㎾㎿㎐㎑㎒㎓㎔Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆����������������".split(
                ""
              ),
              t = 0;
            t != i[167].length;
            ++t
          )
            65533 !== i[167][t].charCodeAt(0) &&
              ((n[i[167][t]] = 42752 + t), (e[42752 + t] = i[167][t]));
          for (
            i[168] =
              "�����������������������������������������������������������������쭭쭮쭯쭰쭱쭲쭳쭴쭵쭶쭷쭺쭻쭼쭽쭾쭿쮀쮁쮂쮃쮄쮅쮆쮇쮈������쮉쮊쮋쮌쮍쮎쮏쮐쮑쮒쮓쮔쮕쮖쮗쮘쮙쮚쮛쮝쮞쮟쮠쮡쮢쮣������쮤쮥쮦쮧쮨쮩쮪쮫쮬쮭쮮쮯쮰쮱쮲쮳쮴쮵쮶쮷쮹쮺쮻쮼쮽쮾쮿쯀쯁쯂쯃쯄ÆÐªĦ�Ĳ�ĿŁØŒºÞŦŊ�㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮½⅓⅔¼¾⅛⅜⅝⅞�".split(
                ""
              ),
              t = 0;
            t != i[168].length;
            ++t
          )
            65533 !== i[168][t].charCodeAt(0) &&
              ((n[i[168][t]] = 43008 + t), (e[43008 + t] = i[168][t]));
          for (
            i[169] =
              "�����������������������������������������������������������������쯅쯆쯇쯈쯉쯊쯋쯌쯍쯎쯏쯐쯑쯒쯓쯕쯖쯗쯘쯙쯚쯛쯜쯝쯞쯟������쯠쯡쯢쯣쯥쯦쯨쯪쯫쯬쯭쯮쯯쯰쯱쯲쯳쯴쯵쯶쯷쯸쯹쯺쯻쯼������쯽쯾쯿찀찁찂찃찄찅찆찇찈찉찊찋찎찏찑찒찓찕찖찗찘찙찚찛찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀㈁㈂㈃㈄㈅㈆㈇㈈㈉㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂¹²³⁴ⁿ₁₂₃₄�".split(
                ""
              ),
              t = 0;
            t != i[169].length;
            ++t
          )
            65533 !== i[169][t].charCodeAt(0) &&
              ((n[i[169][t]] = 43264 + t), (e[43264 + t] = i[169][t]));
          for (
            i[170] =
              "�����������������������������������������������������������������찥찦찪찫찭찯찱찲찳찴찵찶찷찺찿챀챁챂챃챆챇챉챊챋챍챎������챏챐챑챒챓챖챚챛챜챝챞챟챡챢챣챥챧챩챪챫챬챭챮챯챱챲������챳챴챶챷챸챹챺챻챼챽챾챿첀첁첂첃첄첅첆첇첈첉첊첋첌첍첎첏첐첑첒첓ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(
                ""
              ),
              t = 0;
            t != i[170].length;
            ++t
          )
            65533 !== i[170][t].charCodeAt(0) &&
              ((n[i[170][t]] = 43520 + t), (e[43520 + t] = i[170][t]));
          for (
            i[171] =
              "�����������������������������������������������������������������첔첕첖첗첚첛첝첞첟첡첢첣첤첥첦첧첪첮첯첰첱첲첳첶첷첹������첺첻첽첾첿쳀쳁쳂쳃쳆쳈쳊쳋쳌쳍쳎쳏쳑쳒쳓쳕쳖쳗쳘쳙쳚������쳛쳜쳝쳞쳟쳠쳡쳢쳣쳥쳦쳧쳨쳩쳪쳫쳭쳮쳯쳱쳲쳳쳴쳵쳶쳷쳸쳹쳺쳻쳼쳽ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(
                ""
              ),
              t = 0;
            t != i[171].length;
            ++t
          )
            65533 !== i[171][t].charCodeAt(0) &&
              ((n[i[171][t]] = 43776 + t), (e[43776 + t] = i[171][t]));
          for (
            i[172] =
              "�����������������������������������������������������������������쳾쳿촀촂촃촄촅촆촇촊촋촍촎촏촑촒촓촔촕촖촗촚촜촞촟촠������촡촢촣촥촦촧촩촪촫촭촮촯촰촱촲촳촴촵촶촷촸촺촻촼촽촾������촿쵀쵁쵂쵃쵄쵅쵆쵇쵈쵉쵊쵋쵌쵍쵎쵏쵐쵑쵒쵓쵔쵕쵖쵗쵘쵙쵚쵛쵝쵞쵟АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(
                ""
              ),
              t = 0;
            t != i[172].length;
            ++t
          )
            65533 !== i[172][t].charCodeAt(0) &&
              ((n[i[172][t]] = 44032 + t), (e[44032 + t] = i[172][t]));
          for (
            i[173] =
              "�����������������������������������������������������������������쵡쵢쵣쵥쵦쵧쵨쵩쵪쵫쵮쵰쵲쵳쵴쵵쵶쵷쵹쵺쵻쵼쵽쵾쵿춀������춁춂춃춄춅춆춇춉춊춋춌춍춎춏춐춑춒춓춖춗춙춚춛춝춞춟������춠춡춢춣춦춨춪춫춬춭춮춯춱춲춳춴춵춶춷춸춹춺춻춼춽춾춿췀췁췂췃췅�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[173].length;
            ++t
          )
            65533 !== i[173][t].charCodeAt(0) &&
              ((n[i[173][t]] = 44288 + t), (e[44288 + t] = i[173][t]));
          for (
            i[174] =
              "�����������������������������������������������������������������췆췇췈췉췊췋췍췎췏췑췒췓췔췕췖췗췘췙췚췛췜췝췞췟췠췡������췢췣췤췥췦췧췩췪췫췭췮췯췱췲췳췴췵췶췷췺췼췾췿츀츁츂������츃츅츆츇츉츊츋츍츎츏츐츑츒츓츕츖츗츘츚츛츜츝츞츟츢츣츥츦츧츩츪츫�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[174].length;
            ++t
          )
            65533 !== i[174][t].charCodeAt(0) &&
              ((n[i[174][t]] = 44544 + t), (e[44544 + t] = i[174][t]));
          for (
            i[175] =
              "�����������������������������������������������������������������츬츭츮츯츲츴츶츷츸츹츺츻츼츽츾츿칀칁칂칃칄칅칆칇칈칉������칊칋칌칍칎칏칐칑칒칓칔칕칖칗칚칛칝칞칢칣칤칥칦칧칪칬������칮칯칰칱칲칳칶칷칹칺칻칽칾칿캀캁캂캃캆캈캊캋캌캍캎캏캒캓캕캖캗캙�����������������������������������������������������������������������������������������������".split(
                ""
              ),
              t = 0;
            t != i[175].length;
            ++t
          )
            65533 !== i[175][t].charCodeAt(0) &&
              ((n[i[175][t]] = 44800 + t), (e[44800 + t] = i[175][t]));
          for (
            i[176] =
              "�����������������������������������������������������������������캚캛캜캝캞캟캢캦캧캨캩캪캫캮캯캰캱캲캳캴캵캶캷캸캹캺������캻캼캽캾캿컀컂컃컄컅컆컇컈컉컊컋컌컍컎컏컐컑컒컓컔컕������컖컗컘컙컚컛컜컝컞컟컠컡컢컣컦컧컩컪컭컮컯컰컱컲컳컶컺컻컼컽컾컿가각간갇갈갉갊감갑값갓갔강갖갗같갚갛개객갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆�".split(
                ""
              ),
              t = 0;
            t != i[176].length;
            ++t
          )
            65533 !== i[176][t].charCodeAt(0) &&
              ((n[i[176][t]] = 45056 + t), (e[45056 + t] = i[176][t]));
          for (
            i[177] =
              "�����������������������������������������������������������������켂켃켅켆켇켉켊켋켌켍켎켏켒켔켖켗켘켙켚켛켝켞켟켡켢켣������켥켦켧켨켩켪켫켮켲켳켴켵켶켷켹켺켻켼켽켾켿콀콁콂콃콄������콅콆콇콈콉콊콋콌콍콎콏콐콑콒콓콖콗콙콚콛콝콞콟콠콡콢콣콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸�".split(
                ""
              ),
              t = 0;
            t != i[177].length;
            ++t
          )
            65533 !== i[177][t].charCodeAt(0) &&
              ((n[i[177][t]] = 45312 + t), (e[45312 + t] = i[177][t]));
          for (
            i[178] =
              "�����������������������������������������������������������������콭콮콯콲콳콵콶콷콹콺콻콼콽콾콿쾁쾂쾃쾄쾆쾇쾈쾉쾊쾋쾍������쾎쾏쾐쾑쾒쾓쾔쾕쾖쾗쾘쾙쾚쾛쾜쾝쾞쾟쾠쾢쾣쾤쾥쾦쾧쾩������쾪쾫쾬쾭쾮쾯쾱쾲쾳쾴쾵쾶쾷쾸쾹쾺쾻쾼쾽쾾쾿쿀쿁쿂쿃쿅쿆쿇쿈쿉쿊쿋깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙�".split(
                ""
              ),
              t = 0;
            t != i[178].length;
            ++t
          )
            65533 !== i[178][t].charCodeAt(0) &&
              ((n[i[178][t]] = 45568 + t), (e[45568 + t] = i[178][t]));
          for (
            i[179] =
              "�����������������������������������������������������������������쿌쿍쿎쿏쿐쿑쿒쿓쿔쿕쿖쿗쿘쿙쿚쿛쿜쿝쿞쿟쿢쿣쿥쿦쿧쿩������쿪쿫쿬쿭쿮쿯쿲쿴쿶쿷쿸쿹쿺쿻쿽쿾쿿퀁퀂퀃퀅퀆퀇퀈퀉퀊������퀋퀌퀍퀎퀏퀐퀒퀓퀔퀕퀖퀗퀙퀚퀛퀜퀝퀞퀟퀠퀡퀢퀣퀤퀥퀦퀧퀨퀩퀪퀫퀬끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫났낭낮낯낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝�".split(
                ""
              ),
              t = 0;
            t != i[179].length;
            ++t
          )
            65533 !== i[179][t].charCodeAt(0) &&
              ((n[i[179][t]] = 45824 + t), (e[45824 + t] = i[179][t]));
          for (
            i[180] =
              "�����������������������������������������������������������������퀮퀯퀰퀱퀲퀳퀶퀷퀹퀺퀻퀽퀾퀿큀큁큂큃큆큈큊큋큌큍큎큏������큑큒큓큕큖큗큙큚큛큜큝큞큟큡큢큣큤큥큦큧큨큩큪큫큮큯������큱큲큳큵큶큷큸큹큺큻큾큿킀킂킃킄킅킆킇킈킉킊킋킌킍킎킏킐킑킒킓킔뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫달닭닮닯닳담답닷닸당닺닻닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥�".split(
                ""
              ),
              t = 0;
            t != i[180].length;
            ++t
          )
            65533 !== i[180][t].charCodeAt(0) &&
              ((n[i[180][t]] = 46080 + t), (e[46080 + t] = i[180][t]));
          for (
            i[181] =
              "�����������������������������������������������������������������킕킖킗킘킙킚킛킜킝킞킟킠킡킢킣킦킧킩킪킫킭킮킯킰킱킲������킳킶킸킺킻킼킽킾킿탂탃탅탆탇탊탋탌탍탎탏탒탖탗탘탙탚������탛탞탟탡탢탣탥탦탧탨탩탪탫탮탲탳탴탵탶탷탹탺탻탼탽탾탿턀턁턂턃턄덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸�".split(
                ""
              ),
              t = 0;
            t != i[181].length;
            ++t
          )
            65533 !== i[181][t].charCodeAt(0) &&
              ((n[i[181][t]] = 46336 + t), (e[46336 + t] = i[181][t]));
          for (
            i[182] =
              "�����������������������������������������������������������������턅턆턇턈턉턊턋턌턎턏턐턑턒턓턔턕턖턗턘턙턚턛턜턝턞턟������턠턡턢턣턤턥턦턧턨턩턪턫턬턭턮턯턲턳턵턶턷턹턻턼턽턾������턿텂텆텇텈텉텊텋텎텏텑텒텓텕텖텗텘텙텚텛텞텠텢텣텤텥텦텧텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗�".split(
                ""
              ),
              t = 0;
            t != i[182].length;
            ++t
          )
            65533 !== i[182][t].charCodeAt(0) &&
              ((n[i[182][t]] = 46592 + t), (e[46592 + t] = i[182][t]));
          for (
            i[183] =
              "�����������������������������������������������������������������텮텯텰텱텲텳텴텵텶텷텸텹텺텻텽텾텿톀톁톂톃톅톆톇톉톊������톋톌톍톎톏톐톑톒톓톔톕톖톗톘톙톚톛톜톝톞톟톢톣톥톦톧������톩톪톫톬톭톮톯톲톴톶톷톸톹톻톽톾톿퇁퇂퇃퇄퇅퇆퇇퇈퇉퇊퇋퇌퇍퇎퇏래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩�".split(
                ""
              ),
              t = 0;
            t != i[183].length;
            ++t
          )
            65533 !== i[183][t].charCodeAt(0) &&
              ((n[i[183][t]] = 46848 + t), (e[46848 + t] = i[183][t]));
          for (
            i[184] =
              "�����������������������������������������������������������������퇐퇑퇒퇓퇔퇕퇖퇗퇙퇚퇛퇜퇝퇞퇟퇠퇡퇢퇣퇤퇥퇦퇧퇨퇩퇪������퇫퇬퇭퇮퇯퇰퇱퇲퇳퇵퇶퇷퇹퇺퇻퇼퇽퇾퇿툀툁툂툃툄툅툆������툈툊툋툌툍툎툏툑툒툓툔툕툖툗툘툙툚툛툜툝툞툟툠툡툢툣툤툥툦툧툨툩륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많맏말맑맒맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼�".split(
                ""
              ),
              t = 0;
            t != i[184].length;
            ++t
          )
            65533 !== i[184][t].charCodeAt(0) &&
              ((n[i[184][t]] = 47104 + t), (e[47104 + t] = i[184][t]));
          for (
            i[185] =
              "�����������������������������������������������������������������툪툫툮툯툱툲툳툵툶툷툸툹툺툻툾퉀퉂퉃퉄퉅퉆퉇퉉퉊퉋퉌������퉍퉎퉏퉐퉑퉒퉓퉔퉕퉖퉗퉘퉙퉚퉛퉝퉞퉟퉠퉡퉢퉣퉥퉦퉧퉨������퉩퉪퉫퉬퉭퉮퉯퉰퉱퉲퉳퉴퉵퉶퉷퉸퉹퉺퉻퉼퉽퉾퉿튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바박밖밗반받발밝밞밟밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗�".split(
                ""
              ),
              t = 0;
            t != i[185].length;
            ++t
          )
            65533 !== i[185][t].charCodeAt(0) &&
              ((n[i[185][t]] = 47360 + t), (e[47360 + t] = i[185][t]));
          for (
            i[186] =
              "�����������������������������������������������������������������튍튎튏튒튓튔튖튗튘튙튚튛튝튞튟튡튢튣튥튦튧튨튩튪튫튭������튮튯튰튲튳튴튵튶튷튺튻튽튾틁틃틄틅틆틇틊틌틍틎틏틐틑������틒틓틕틖틗틙틚틛틝틞틟틠틡틢틣틦틧틨틩틪틫틬틭틮틯틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤�".split(
                ""
              ),
              t = 0;
            t != i[186].length;
            ++t
          )
            65533 !== i[186][t].charCodeAt(0) &&
              ((n[i[186][t]] = 47616 + t), (e[47616 + t] = i[186][t]));
          for (
            i[187] =
              "�����������������������������������������������������������������틻틼틽틾틿팂팄팆팇팈팉팊팋팏팑팒팓팕팗팘팙팚팛팞팢팣������팤팦팧팪팫팭팮팯팱팲팳팴팵팶팷팺팾팿퍀퍁퍂퍃퍆퍇퍈퍉������퍊퍋퍌퍍퍎퍏퍐퍑퍒퍓퍔퍕퍖퍗퍘퍙퍚퍛퍜퍝퍞퍟퍠퍡퍢퍣퍤퍥퍦퍧퍨퍩빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤�".split(
                ""
              ),
              t = 0;
            t != i[187].length;
            ++t
          )
            65533 !== i[187][t].charCodeAt(0) &&
              ((n[i[187][t]] = 47872 + t), (e[47872 + t] = i[187][t]));
          for (
            i[188] =
              "�����������������������������������������������������������������퍪퍫퍬퍭퍮퍯퍰퍱퍲퍳퍴퍵퍶퍷퍸퍹퍺퍻퍾퍿펁펂펃펅펆펇������펈펉펊펋펎펒펓펔펕펖펗펚펛펝펞펟펡펢펣펤펥펦펧펪펬펮������펯펰펱펲펳펵펶펷펹펺펻펽펾펿폀폁폂폃폆폇폊폋폌폍폎폏폑폒폓폔폕폖샥샨샬샴샵샷샹섀섄섈섐섕서석섞섟선섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭�".split(
                ""
              ),
              t = 0;
            t != i[188].length;
            ++t
          )
            65533 !== i[188][t].charCodeAt(0) &&
              ((n[i[188][t]] = 48128 + t), (e[48128 + t] = i[188][t]));
          for (
            i[189] =
              "�����������������������������������������������������������������폗폙폚폛폜폝폞폟폠폢폤폥폦폧폨폩폪폫폮폯폱폲폳폵폶폷������폸폹폺폻폾퐀퐂퐃퐄퐅퐆퐇퐉퐊퐋퐌퐍퐎퐏퐐퐑퐒퐓퐔퐕퐖������퐗퐘퐙퐚퐛퐜퐞퐟퐠퐡퐢퐣퐤퐥퐦퐧퐨퐩퐪퐫퐬퐭퐮퐯퐰퐱퐲퐳퐴퐵퐶퐷숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰�".split(
                ""
              ),
              t = 0;
            t != i[189].length;
            ++t
          )
            65533 !== i[189][t].charCodeAt(0) &&
              ((n[i[189][t]] = 48384 + t), (e[48384 + t] = i[189][t]));
          for (
            i[190] =
              "�����������������������������������������������������������������퐸퐹퐺퐻퐼퐽퐾퐿푁푂푃푅푆푇푈푉푊푋푌푍푎푏푐푑푒푓������푔푕푖푗푘푙푚푛푝푞푟푡푢푣푥푦푧푨푩푪푫푬푮푰푱푲������푳푴푵푶푷푺푻푽푾풁풃풄풅풆풇풊풌풎풏풐풑풒풓풕풖풗풘풙풚풛풜풝쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄업없엇었엉엊엌엎�".split(
                ""
              ),
              t = 0;
            t != i[190].length;
            ++t
          )
            65533 !== i[190][t].charCodeAt(0) &&
              ((n[i[190][t]] = 48640 + t), (e[48640 + t] = i[190][t]));
          for (
            i[191] =
              "�����������������������������������������������������������������풞풟풠풡풢풣풤풥풦풧풨풪풫풬풭풮풯풰풱풲풳풴풵풶풷풸������풹풺풻풼풽풾풿퓀퓁퓂퓃퓄퓅퓆퓇퓈퓉퓊퓋퓍퓎퓏퓑퓒퓓퓕������퓖퓗퓘퓙퓚퓛퓝퓞퓠퓡퓢퓣퓤퓥퓦퓧퓩퓪퓫퓭퓮퓯퓱퓲퓳퓴퓵퓶퓷퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염엽엾엿였영옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨�".split(
                ""
              ),
              t = 0;
            t != i[191].length;
            ++t
          )
            65533 !== i[191][t].charCodeAt(0) &&
              ((n[i[191][t]] = 48896 + t), (e[48896 + t] = i[191][t]));
          for (
            i[192] =
              "�����������������������������������������������������������������퓾퓿픀픁픂픃픅픆픇픉픊픋픍픎픏픐픑픒픓픖픘픙픚픛픜픝������픞픟픠픡픢픣픤픥픦픧픨픩픪픫픬픭픮픯픰픱픲픳픴픵픶픷������픸픹픺픻픾픿핁핂핃핅핆핇핈핉핊핋핎핐핒핓핔핕핖핗핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응읒읓읔읕읖읗의읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊�".split(
                ""
              ),
              t = 0;
            t != i[192].length;
            ++t
          )
            65533 !== i[192][t].charCodeAt(0) &&
              ((n[i[192][t]] = 49152 + t), (e[49152 + t] = i[192][t]));
          for (
            i[193] =
              "�����������������������������������������������������������������핤핦핧핪핬핮핯핰핱핲핳핶핷핹핺핻핽핾핿햀햁햂햃햆햊햋������햌햍햎햏햑햒햓햔햕햖햗햘햙햚햛햜햝햞햟햠햡햢햣햤햦햧������햨햩햪햫햬햭햮햯햰햱햲햳햴햵햶햷햸햹햺햻햼햽햾햿헀헁헂헃헄헅헆헇점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓�".split(
                ""
              ),
              t = 0;
            t != i[193].length;
            ++t
          )
            65533 !== i[193][t].charCodeAt(0) &&
              ((n[i[193][t]] = 49408 + t), (e[49408 + t] = i[193][t]));
          for (
            i[194] =
              "�����������������������������������������������������������������헊헋헍헎헏헑헓헔헕헖헗헚헜헞헟헠헡헢헣헦헧헩헪헫헭헮������헯헰헱헲헳헶헸헺헻헼헽헾헿혂혃혅혆혇혉혊혋혌혍혎혏혒������혖혗혘혙혚혛혝혞혟혡혢혣혥혦혧혨혩혪혫혬혮혯혰혱혲혳혴혵혶혷혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻�".split(
                ""
              ),
              t = 0;
            t != i[194].length;
            ++t
          )
            65533 !== i[194][t].charCodeAt(0) &&
              ((n[i[194][t]] = 49664 + t), (e[49664 + t] = i[194][t]));
          for (
            i[195] =
              "�����������������������������������������������������������������혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝홞홟홠홡������홢홣홤홥홦홨홪홫홬홭홮홯홲홳홵홶홷홸홹홺홻홼홽홾홿횀������횁횂횄횆횇횈횉횊횋횎횏횑횒횓횕횖횗횘횙횚횛횜횞횠횢횣횤횥횦횧횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층�".split(
                ""
              ),
              t = 0;
            t != i[195].length;
            ++t
          )
            65533 !== i[195][t].charCodeAt(0) &&
              ((n[i[195][t]] = 49920 + t), (e[49920 + t] = i[195][t]));
          for (
            i[196] =
              "�����������������������������������������������������������������횫횭횮횯횱횲횳횴횵횶횷횸횺횼횽횾횿훀훁훂훃훆훇훉훊훋������훍훎훏훐훒훓훕훖훘훚훛훜훝훞훟훡훢훣훥훦훧훩훪훫훬훭������훮훯훱훲훳훴훶훷훸훹훺훻훾훿휁휂휃휅휆휇휈휉휊휋휌휍휎휏휐휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼�".split(
                ""
              ),
              t = 0;
            t != i[196].length;
            ++t
          )
            65533 !== i[196][t].charCodeAt(0) &&
              ((n[i[196][t]] = 50176 + t), (e[50176 + t] = i[196][t]));
          for (
            i[197] =
              "�����������������������������������������������������������������휕휖휗휚휛휝휞휟휡휢휣휤휥휦휧휪휬휮휯휰휱휲휳휶휷휹������휺휻휽휾휿흀흁흂흃흅흆흈흊흋흌흍흎흏흒흓흕흚흛흜흝흞������흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵흶흷흸흹흺흻흾흿힀힂힃힄힅힆힇힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜�".split(
                ""
              ),
              t = 0;
            t != i[197].length;
            ++t
          )
            65533 !== i[197][t].charCodeAt(0) &&
              ((n[i[197][t]] = 50432 + t), (e[50432 + t] = i[197][t]));
          for (
            i[198] =
              "�����������������������������������������������������������������힍힎힏힑힒힓힔힕힖힗힚힜힞힟힠힡힢힣������������������������������������������������������������������������������퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁�".split(
                ""
              ),
              t = 0;
            t != i[198].length;
            ++t
          )
            65533 !== i[198][t].charCodeAt(0) &&
              ((n[i[198][t]] = 50688 + t), (e[50688 + t] = i[198][t]));
          for (
            i[199] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠�".split(
                ""
              ),
              t = 0;
            t != i[199].length;
            ++t
          )
            65533 !== i[199][t].charCodeAt(0) &&
              ((n[i[199][t]] = 50944 + t), (e[50944 + t] = i[199][t]));
          for (
            i[200] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝�".split(
                ""
              ),
              t = 0;
            t != i[200].length;
            ++t
          )
            65533 !== i[200][t].charCodeAt(0) &&
              ((n[i[200][t]] = 51200 + t), (e[51200 + t] = i[200][t]));
          for (
            i[202] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕�".split(
                ""
              ),
              t = 0;
            t != i[202].length;
            ++t
          )
            65533 !== i[202][t].charCodeAt(0) &&
              ((n[i[202][t]] = 51712 + t), (e[51712 + t] = i[202][t]));
          for (
            i[203] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢�".split(
                ""
              ),
              t = 0;
            t != i[203].length;
            ++t
          )
            65533 !== i[203][t].charCodeAt(0) &&
              ((n[i[203][t]] = 51968 + t), (e[51968 + t] = i[203][t]));
          for (
            i[204] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械�".split(
                ""
              ),
              t = 0;
            t != i[204].length;
            ++t
          )
            65533 !== i[204][t].charCodeAt(0) &&
              ((n[i[204][t]] = 52224 + t), (e[52224 + t] = i[204][t]));
          for (
            i[205] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜�".split(
                ""
              ),
              t = 0;
            t != i[205].length;
            ++t
          )
            65533 !== i[205][t].charCodeAt(0) &&
              ((n[i[205][t]] = 52480 + t), (e[52480 + t] = i[205][t]));
          for (
            i[206] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾�".split(
                ""
              ),
              t = 0;
            t != i[206].length;
            ++t
          )
            65533 !== i[206][t].charCodeAt(0) &&
              ((n[i[206][t]] = 52736 + t), (e[52736 + t] = i[206][t]));
          for (
            i[207] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴�".split(
                ""
              ),
              t = 0;
            t != i[207].length;
            ++t
          )
            65533 !== i[207][t].charCodeAt(0) &&
              ((n[i[207][t]] = 52992 + t), (e[52992 + t] = i[207][t]));
          for (
            i[208] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣�".split(
                ""
              ),
              t = 0;
            t != i[208].length;
            ++t
          )
            65533 !== i[208][t].charCodeAt(0) &&
              ((n[i[208][t]] = 53248 + t), (e[53248 + t] = i[208][t]));
          for (
            i[209] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩羅蘿螺裸邏那樂洛烙珞落諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉�".split(
                ""
              ),
              t = 0;
            t != i[209].length;
            ++t
          )
            65533 !== i[209][t].charCodeAt(0) &&
              ((n[i[209][t]] = 53504 + t), (e[53504 + t] = i[209][t]));
          for (
            i[210] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������納臘蠟衲囊娘廊朗浪狼郎乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧老蘆虜路露駑魯鷺碌祿綠菉錄鹿論壟弄濃籠聾膿農惱牢磊腦賂雷尿壘屢樓淚漏累縷陋嫩訥杻紐勒肋凜凌稜綾能菱陵尼泥匿溺多茶�".split(
                ""
              ),
              t = 0;
            t != i[210].length;
            ++t
          )
            65533 !== i[210][t].charCodeAt(0) &&
              ((n[i[210][t]] = 53760 + t), (e[53760 + t] = i[210][t]));
          for (
            i[211] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃�".split(
                ""
              ),
              t = 0;
            t != i[211].length;
            ++t
          )
            65533 !== i[211][t].charCodeAt(0) &&
              ((n[i[211][t]] = 54016 + t), (e[54016 + t] = i[211][t]));
          for (
            i[212] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅�".split(
                ""
              ),
              t = 0;
            t != i[212].length;
            ++t
          )
            65533 !== i[212][t].charCodeAt(0) &&
              ((n[i[212][t]] = 54272 + t), (e[54272 + t] = i[212][t]));
          for (
            i[213] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣�".split(
                ""
              ),
              t = 0;
            t != i[213].length;
            ++t
          )
            65533 !== i[213][t].charCodeAt(0) &&
              ((n[i[213][t]] = 54528 + t), (e[54528 + t] = i[213][t]));
          for (
            i[214] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼�".split(
                ""
              ),
              t = 0;
            t != i[214].length;
            ++t
          )
            65533 !== i[214][t].charCodeAt(0) &&
              ((n[i[214][t]] = 54784 + t), (e[54784 + t] = i[214][t]));
          for (
            i[215] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬�".split(
                ""
              ),
              t = 0;
            t != i[215].length;
            ++t
          )
            65533 !== i[215][t].charCodeAt(0) &&
              ((n[i[215][t]] = 55040 + t), (e[55040 + t] = i[215][t]));
          for (
            i[216] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅�".split(
                ""
              ),
              t = 0;
            t != i[216].length;
            ++t
          )
            65533 !== i[216][t].charCodeAt(0) &&
              ((n[i[216][t]] = 55296 + t), (e[55296 + t] = i[216][t]));
          for (
            i[217] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文�".split(
                ""
              ),
              t = 0;
            t != i[217].length;
            ++t
          )
            65533 !== i[217][t].charCodeAt(0) &&
              ((n[i[217][t]] = 55552 + t), (e[55552 + t] = i[217][t]));
          for (
            i[218] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑�".split(
                ""
              ),
              t = 0;
            t != i[218].length;
            ++t
          )
            65533 !== i[218][t].charCodeAt(0) &&
              ((n[i[218][t]] = 55808 + t), (e[55808 + t] = i[218][t]));
          for (
            i[219] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖�".split(
                ""
              ),
              t = 0;
            t != i[219].length;
            ++t
          )
            65533 !== i[219][t].charCodeAt(0) &&
              ((n[i[219][t]] = 56064 + t), (e[56064 + t] = i[219][t]));
          for (
            i[220] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦�".split(
                ""
              ),
              t = 0;
            t != i[220].length;
            ++t
          )
            65533 !== i[220][t].charCodeAt(0) &&
              ((n[i[220][t]] = 56320 + t), (e[56320 + t] = i[220][t]));
          for (
            i[221] =
              "�����������������������������������������������������������������������������������������������������������������������������������������������������������������孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥�".split(
                ""
              ),
              t = 0;
            t != i[221].length;
            ++t
          )
            65533 !== i[221][t].charCodeAt(0) &&
              ((n[i[221][t]] = 56576 +