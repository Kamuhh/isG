// app.part14-de-30.js
f (!i) return [];
                                if (this.hasCrop()) {
                                  var l = z.Object.__uid++;
                                  e.push(
                                    '<clipPath id="imageCrop_' + l + '">\n',
                                    '\t<rect x="' +
                                      r +
                                      '" y="' +
                                      o +
                                      '" width="' +
                                      this.width +
                                      '" height="' +
                                      this.height +
                                      '" />\n',
                                    "</clipPath>\n"
                                  ),
                                    (a =
                                      ' clip-path="url(#imageCrop_' +
                                      l +
                                      ')" ');
                                }
                                if (
                                  (this.imageSmoothing ||
                                    (s = '" image-rendering="optimizeSpeed'),
                                  n.push(
                                    "\t<image ",
                                    "COMMON_PARTS",
                                    'xlink:href="',
                                    this.getSvgSrc(!0),
                                    '" x="',
                                    r - this.cropX,
                                    '" y="',
                                    o - this.cropY,
                                    '" width="',
                                    i.width || i.naturalWidth,
                                    '" height="',
                                    i.height || i.height,
                                    s,
                                    '"',
                                    a,
                                    "></image>\n"
                                  ),
                                  this.stroke || this.strokeDashArray)
                                ) {
                                  var c = this.fill;
                                  (this.fill = null),
                                    (t = [
                                      "\t<rect ",
                                      'x="',
                                      r,
                                      '" y="',
                                      o,
                                      '" width="',
                                      this.width,
                                      '" height="',
                                      this.height,
                                      '" style="',
                                      this.getSvgStyles(),
                                      '"/>\n',
                                    ]),
                                    (this.fill = c);
                                }
                                return (e =
                                  "fill" !== this.paintFirst
                                    ? e.concat(t, n)
                                    : e.concat(n, t));
                              },
                              getSrc: function (t) {
                                var e = t
                                  ? this._element
                                  : this._originalElement;
                                return e
                                  ? e.toDataURL
                                    ? e.toDataURL()
                                    : this.srcFromAttribute
                                    ? e.getAttribute("src")
                                    : e.src
                                  : this.src || "";
                              },
                              setSrc: function (t, e, n) {
                                return (
                                  z.util.loadImage(
                                    t,
                                    function (t, i) {
                                      this.setElement(t, n),
                                        this._setWidthHeight(),
                                        e && e(this, i);
                                    },
                                    this,
                                    n && n.crossOrigin
                                  ),
                                  this
                                );
                              },
                              toString: function () {
                                return (
                                  '#<fabric.Image: { src: "' +
                                  this.getSrc() +
                                  '" }>'
                                );
                              },
                              applyResizeFilters: function () {
                                var t = this.resizeFilter,
                                  e = this.minimumScaleTrigger,
                                  n = this.getTotalObjectScaling(),
                                  i = n.scaleX,
                                  r = n.scaleY,
                                  o = this._filteredEl || this._originalElement;
                                if (
                                  (this.group && this.set("dirty", !0),
                                  !t || (i > e && r > e))
                                )
                                  return (
                                    (this._element = o),
                                    (this._filterScalingX = 1),
                                    (this._filterScalingY = 1),
                                    (this._lastScaleX = i),
                                    void (this._lastScaleY = r)
                                  );
                                z.filterBackend ||
                                  (z.filterBackend = z.initFilterBackend());
                                var a = z.util.createCanvasElement(),
                                  s = this._filteredEl
                                    ? this.cacheKey + "_filtered"
                                    : this.cacheKey,
                                  l = o.width,
                                  c = o.height;
                                (a.width = l),
                                  (a.height = c),
                                  (this._element = a),
                                  (this._lastScaleX = t.scaleX = i),
                                  (this._lastScaleY = t.scaleY = r),
                                  z.filterBackend.applyFilters(
                                    [t],
                                    o,
                                    l,
                                    c,
                                    this._element,
                                    s
                                  ),
                                  (this._filterScalingX =
                                    a.width / this._originalElement.width),
                                  (this._filterScalingY =
                                    a.height / this._originalElement.height);
                              },
                              applyFilters: function (t) {
                                if (
                                  ((t = (t = t || this.filters || []).filter(
                                    function (t) {
                                      return t && !t.isNeutralState();
                                    }
                                  )),
                                  this.set("dirty", !0),
                                  this.removeTexture(
                                    this.cacheKey + "_filtered"
                                  ),
                                  0 === t.length)
                                )
                                  return (
                                    (this._element = this._originalElement),
                                    (this._filteredEl = null),
                                    (this._filterScalingX = 1),
                                    (this._filterScalingY = 1),
                                    this
                                  );
                                var e = this._originalElement,
                                  n = e.naturalWidth || e.width,
                                  i = e.naturalHeight || e.height;
                                if (this._element === this._originalElement) {
                                  var r = z.util.createCanvasElement();
                                  (r.width = n),
                                    (r.height = i),
                                    (this._element = r),
                                    (this._filteredEl = r);
                                } else
                                  (this._element = this._filteredEl),
                                    this._filteredEl
                                      .getContext("2d")
                                      .clearRect(0, 0, n, i),
                                    (this._lastScaleX = 1),
                                    (this._lastScaleY = 1);
                                return (
                                  z.filterBackend ||
                                    (z.filterBackend = z.initFilterBackend()),
                                  z.filterBackend.applyFilters(
                                    t,
                                    this._originalElement,
                                    n,
                                    i,
                                    this._element,
                                    this.cacheKey
                                  ),
                                  (this._originalElement.width ===
                                    this._element.width &&
                                    this._originalElement.height ===
                                      this._element.height) ||
                                    ((this._filterScalingX =
                                      this._element.width /
                                      this._originalElement.width),
                                    (this._filterScalingY =
                                      this._element.height /
                                      this._originalElement.height)),
                                  this
                                );
                              },
                              _render: function (t) {
                                z.util.setImageSmoothing(
                                  t,
                                  this.imageSmoothing
                                ),
                                  !0 !== this.isMoving &&
                                    this.resizeFilter &&
                                    this._needsResize() &&
                                    this.applyResizeFilters(),
                                  this._stroke(t),
                                  this._renderPaintInOrder(t);
                              },
                              drawCacheOnCanvas: function (t) {
                                z.util.setImageSmoothing(
                                  t,
                                  this.imageSmoothing
                                ),
                                  z.Object.prototype.drawCacheOnCanvas.call(
                                    this,
                                    t
                                  );
                              },
                              shouldCache: function () {
                                return this.needsItsOwnCache();
                              },
                              _renderFill: function (t) {
                                var e = this._element;
                                if (e) {
                                  var n = this._filterScalingX,
                                    i = this._filterScalingY,
                                    r = this.width,
                                    o = this.height,
                                    a = Math.min,
                                    s = Math.max,
                                    l = s(this.cropX, 0),
                                    c = s(this.cropY, 0),
                                    d = e.naturalWidth || e.width,
                                    u = e.naturalHeight || e.height,
                                    p = l * n,
                                    h = c * i,
                                    f = a(r * n, d - p),
                                    b = a(o * i, u - h),
                                    m = -r / 2,
                                    g = -o / 2,
                                    v = a(r, d / n - l),
                                    _ = a(o, u / i - c);
                                  e && t.drawImage(e, p, h, f, b, m, g, v, _);
                                }
                              },
                              _needsResize: function () {
                                var t = this.getTotalObjectScaling();
                                return (
                                  t.scaleX !== this._lastScaleX ||
                                  t.scaleY !== this._lastScaleY
                                );
                              },
                              _resetWidthHeight: function () {
                                this.set(this.getOriginalSize());
                              },
                              _initElement: function (t, e) {
                                this.setElement(z.util.getById(t), e),
                                  z.util.addClass(
                                    this.getElement(),
                                    z.Image.CSS_CANVAS
                                  );
                              },
                              _initConfig: function (t) {
                                t || (t = {}),
                                  this.setOptions(t),
                                  this._setWidthHeight(t);
                              },
                              _initFilters: function (t, e) {
                                t && t.length
                                  ? z.util.enlivenObjects(
                                      t,
                                      function (t) {
                                        e && e(t);
                                      },
                                      "fabric.Image.filters"
                                    )
                                  : e && e();
                              },
                              _setWidthHeight: function (t) {
                                t || (t = {});
                                var e = this.getElement();
                                (this.width =
                                  t.width || e.naturalWidth || e.width || 0),
                                  (this.height =
                                    t.height ||
                                    e.naturalHeight ||
                                    e.height ||
                                    0);
                              },
                              parsePreserveAspectRatioAttribute: function () {
                                var t,
                                  e = z.util.parsePreserveAspectRatioAttribute(
                                    this.preserveAspectRatio || ""
                                  ),
                                  n = this._element.width,
                                  i = this._element.height,
                                  r = 1,
                                  o = 1,
                                  a = 0,
                                  s = 0,
                                  l = 0,
                                  c = 0,
                                  d = this.width,
                                  u = this.height,
                                  p = { width: d, height: u };
                                return (
                                  !e ||
                                  ("none" === e.alignX && "none" === e.alignY)
                                    ? ((r = d / n), (o = u / i))
                                    : ("meet" === e.meetOrSlice &&
                                        ((t =
                                          (d -
                                            n *
                                              (r = o =
                                                z.util.findScaleToFit(
                                                  this._element,
                                                  p
                                                ))) /
                                          2),
                                        "Min" === e.alignX && (a = -t),
                                        "Max" === e.alignX && (a = t),
                                        (t = (u - i * o) / 2),
                                        "Min" === e.alignY && (s = -t),
                                        "Max" === e.alignY && (s = t)),
                                      "slice" === e.meetOrSlice &&
                                        ((t =
                                          n -
                                          d /
                                            (r = o =
                                              z.util.findScaleToCover(
                                                this._element,
                                                p
                                              ))),
                                        "Mid" === e.alignX && (l = t / 2),
                                        "Max" === e.alignX && (l = t),
                                        (t = i - u / o),
                                        "Mid" === e.alignY && (c = t / 2),
                                        "Max" === e.alignY && (c = t),
                                        (n = d / r),
                                        (i = u / o))),
                                  {
                                    width: n,
                                    height: i,
                                    scaleX: r,
                                    scaleY: o,
                                    offsetLeft: a,
                                    offsetTop: s,
                                    cropX: l,
                                    cropY: c,
                                  }
                                );
                              },
                            })),
                            (z.Image.CSS_CANVAS = "canvas-img"),
                            (z.Image.prototype.getSvgSrc =
                              z.Image.prototype.getSrc),
                            (z.Image.fromObject = function (t, e) {
                              var n = z.util.object.clone(t);
                              z.util.loadImage(
                                n.src,
                                function (t, i) {
                                  i
                                    ? e && e(null, !0)
                                    : z.Image.prototype._initFilters.call(
                                        n,
                                        n.filters,
                                        function (i) {
                                          (n.filters = i || []),
                                            z.Image.prototype._initFilters.call(
                                              n,
                                              [n.resizeFilter],
                                              function (i) {
                                                (n.resizeFilter = i[0]),
                                                  z.util.enlivenObjects(
                                                    [n.clipPath],
                                                    function (i) {
                                                      n.clipPath = i[0];
                                                      var r = new z.Image(t, n);
                                                      e(r, !1);
                                                    }
                                                  );
                                              }
                                            );
                                        }
                                      );
                                },
                                null,
                                n.crossOrigin
                              );
                            }),
                            (z.Image.fromURL = function (t, e, n) {
                              z.util.loadImage(
                                t,
                                function (t, i) {
                                  e && e(new z.Image(t, n), i);
                                },
                                null,
                                n && n.crossOrigin
                              );
                            }),
                            (z.Image.ATTRIBUTE_NAMES =
                              z.SHARED_ATTRIBUTES.concat(
                                "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(
                                  " "
                                )
                              )),
                            (z.Image.fromElement = function (t, n, i) {
                              var r = z.parseAttributes(
                                t,
                                z.Image.ATTRIBUTE_NAMES
                              );
                              z.Image.fromURL(
                                r["xlink:href"],
                                n,
                                e(i ? z.util.object.clone(i) : {}, r)
                              );
                            }));
                    })(n),
                    z.util.object.extend(z.Object.prototype, {
                      _getAngleValueForStraighten: function () {
                        var t = this.angle % 360;
                        return t > 0
                          ? 90 * Math.round((t - 1) / 90)
                          : 90 * Math.round(t / 90);
                      },
                      straighten: function () {
                        return (
                          this.rotate(this._getAngleValueForStraighten()), this
                        );
                      },
                      fxStraighten: function (t) {
                        var e = function () {},
                          n = (t = t || {}).onComplete || e,
                          i = t.onChange || e,
                          r = this;
                        return (
                          z.util.animate({
                            startValue: this.get("angle"),
                            endValue: this._getAngleValueForStraighten(),
                            duration: this.FX_DURATION,
                            onChange: function (t) {
                              r.rotate(t), i();
                            },
                            onComplete: function () {
                              r.setCoords(), n();
                            },
                          }),
                          this
                        );
                      },
                    }),
                    z.util.object.extend(z.StaticCanvas.prototype, {
                      straightenObject: function (t) {
                        return t.straighten(), this.requestRenderAll(), this;
                      },
                      fxStraightenObject: function (t) {
                        return (
                          t.fxStraighten({
                            onChange: this.requestRenderAllBound,
                          }),
                          this
                        );
                      },
                    }),
                    (function () {
                      "use strict";
                      function t(t, e) {
                        var n = "precision " + e + " float;\nvoid main(){}",
                          i = t.createShader(t.FRAGMENT_SHADER);
                        return (
                          t.shaderSource(i, n),
                          t.compileShader(i),
                          !!t.getShaderParameter(i, t.COMPILE_STATUS)
                        );
                      }
                      function e(t) {
                        t && t.tileSize && (this.tileSize = t.tileSize),
                          this.setupGLContext(this.tileSize, this.tileSize),
                          this.captureGPUInfo();
                      }
                      (z.isWebglSupported = function (e) {
                        if (z.isLikelyNode) return !1;
                        e = e || z.WebglFilterBackend.prototype.tileSize;
                        var n = document.createElement("canvas"),
                          i =
                            n.getContext("webgl") ||
                            n.getContext("experimental-webgl"),
                          r = !1;
                        if (i) {
                          (z.maxTextureSize = i.getParameter(
                            i.MAX_TEXTURE_SIZE
                          )),
                            (r = z.maxTextureSize >= e);
                          for (
                            var o = ["highp", "mediump", "lowp"], a = 0;
                            a < 3;
                            a++
                          )
                            if (t(i, o[a])) {
                              z.webGlPrecision = o[a];
                              break;
                            }
                        }
                        return (this.isSupported = r), r;
                      }),
                        (z.WebglFilterBackend = e),
                        (e.prototype = {
                          tileSize: 2048,
                          resources: {},
                          setupGLContext: function (t, e) {
                            this.dispose(),
                              this.createWebGLCanvas(t, e),
                              (this.aPosition = new Float32Array([
                                0, 0, 0, 1, 1, 0, 1, 1,
                              ])),
                              this.chooseFastestCopyGLTo2DMethod(t, e);
                          },
                          chooseFastestCopyGLTo2DMethod: function (t, e) {
                            var n,
                              i = void 0 !== window.performance;
                            try {
                              new ImageData(1, 1), (n = !0);
                            } catch (t) {
                              n = !1;
                            }
                            var r = "undefined" != typeof ArrayBuffer,
                              o = "undefined" != typeof Uint8ClampedArray;
                            if (i && n && r && o) {
                              var a = z.util.createCanvasElement(),
                                s = new ArrayBuffer(t * e * 4);
                              if (z.forceGLPutImageData)
                                return (
                                  (this.imageBuffer = s),
                                  void (this.copyGLTo2D = S)
                                );
                              var l,
                                c,
                                d = {
                                  imageBuffer: s,
                                  destinationWidth: t,
                                  destinationHeight: e,
                                  targetCanvas: a,
                                };
                              (a.width = t),
                                (a.height = e),
                                (l = window.performance.now()),
                                k.call(d, this.gl, d),
                                (c = window.performance.now() - l),
                                (l = window.performance.now()),
                                S.call(d, this.gl, d),
                                c > window.performance.now() - l
                                  ? ((this.imageBuffer = s),
                                    (this.copyGLTo2D = S))
                                  : (this.copyGLTo2D = k);
                            }
                          },
                          createWebGLCanvas: function (t, e) {
                            var n = z.util.createCanvasElement();
                            (n.width = t), (n.height = e);
                            var i = {
                                alpha: !0,
                                premultipliedAlpha: !1,
                                depth: !1,
                                stencil: !1,
                                antialias: !1,
                              },
                              r = n.getContext("webgl", i);
                            r || (r = n.getContext("experimental-webgl", i)),
                              r &&
                                (r.clearColor(0, 0, 0, 0),
                                (this.canvas = n),
                                (this.gl = r));
                          },
                          applyFilters: function (t, e, n, i, r, o) {
                            var a,
                              s = this.gl;
                            o && (a = this.getCachedTexture(o, e));
                            var l = {
                                originalWidth: e.width || e.originalWidth,
                                originalHeight: e.height || e.originalHeight,
                                sourceWidth: n,
                                sourceHeight: i,
                                destinationWidth: n,
                                destinationHeight: i,
                                context: s,
                                sourceTexture: this.createTexture(
                                  s,
                                  n,
                                  i,
                                  !a && e
                                ),
                                targetTexture: this.createTexture(s, n, i),
                                originalTexture:
                                  a || this.createTexture(s, n, i, !a && e),
                                passes: t.length,
                                webgl: !0,
                                aPosition: this.aPosition,
                                programCache: this.programCache,
                                pass: 0,
                                filterBackend: this,
                                targetCanvas: r,
                              },
                              c = s.createFramebuffer();
                            return (
                              s.bindFramebuffer(s.FRAMEBUFFER, c),
                              t.forEach(function (t) {
                                t && t.applyTo(l);
                              }),
                              (function (t) {
                                var e = t.targetCanvas,
                                  n = e.width,
                                  i = e.height,
                                  r = t.destinationWidth,
                                  o = t.destinationHeight;
                                (n === r && i === o) ||
                                  ((e.width = r), (e.height = o));
                              })(l),
                              this.copyGLTo2D(s, l),
                              s.bindTexture(s.TEXTURE_2D, null),
                              s.deleteTexture(l.sourceTexture),
                              s.deleteTexture(l.targetTexture),
                              s.deleteFramebuffer(c),
                              r.getContext("2d").setTransform(1, 0, 0, 1, 0, 0),
                              l
                            );
                          },
                          dispose: function () {
                            this.canvas &&
                              ((this.canvas = null), (this.gl = null)),
                              this.clearWebGLCaches();
                          },
                          clearWebGLCaches: function () {
                            (this.programCache = {}), (this.textureCache = {});
                          },
                          createTexture: function (t, e, n, i) {
                            var r = t.createTexture();
                            return (
                              t.bindTexture(t.TEXTURE_2D, r),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_MAG_FILTER,
                                t.NEAREST
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_MIN_FILTER,
                                t.NEAREST
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_WRAP_S,
                                t.CLAMP_TO_EDGE
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_WRAP_T,
                                t.CLAMP_TO_EDGE
                              ),
                              i
                                ? t.texImage2D(
                                    t.TEXTURE_2D,
                                    0,
                                    t.RGBA,
                                    t.RGBA,
                                    t.UNSIGNED_BYTE,
                                    i
                                  )
                                : t.texImage2D(
                                    t.TEXTURE_2D,
                                    0,
                                    t.RGBA,
                                    e,
                                    n,
                                    0,
                                    t.RGBA,
                                    t.UNSIGNED_BYTE,
                                    null
                                  ),
                              r
                            );
                          },
                          getCachedTexture: function (t, e) {
                            if (this.textureCache[t])
                              return this.textureCache[t];
                            var n = this.createTexture(
                              this.gl,
                              e.width,
                              e.height,
                              e
                            );
                            return (this.textureCache[t] = n), n;
                          },
                          evictCachesForKey: function (t) {
                            this.textureCache[t] &&
                              (this.gl.deleteTexture(this.textureCache[t]),
                              delete this.textureCache[t]);
                          },
                          copyGLTo2D: k,
                          captureGPUInfo: function () {
                            if (this.gpuInfo) return this.gpuInfo;
                            var t = this.gl,
                              e = { renderer: "", vendor: "" };
                            if (!t) return e;
                            var n = t.getExtension("WEBGL_debug_renderer_info");
                            if (n) {
                              var i = t.getParameter(n.UNMASKED_RENDERER_WEBGL),
                                r = t.getParameter(n.UNMASKED_VENDOR_WEBGL);
                              i && (e.renderer = i.toLowerCase()),
                                r && (e.vendor = r.toLowerCase());
                            }
                            return (this.gpuInfo = e), e;
                          },
                        });
                    })(),
                    (function () {
                      "use strict";
                      var t = function () {};
                      function e() {}
                      (z.Canvas2dFilterBackend = e),
                        (e.prototype = {
                          evictCachesForKey: t,
                          dispose: t,
                          clearWebGLCaches: t,
                          resources: {},
                          applyFilters: function (t, e, n, i, r) {
                            var o = r.getContext("2d");
                            o.drawImage(e, 0, 0, n, i);
                            var a = {
                              sourceWidth: n,
                              sourceHeight: i,
                              imageData: o.getImageData(0, 0, n, i),
                              originalEl: e,
                              originalImageData: o.getImageData(0, 0, n, i),
                              canvasEl: r,
                              ctx: o,
                              filterBackend: this,
                            };
                            return (
                              t.forEach(function (t) {
                                t.applyTo(a);
                              }),
                              (a.imageData.width === n &&
                                a.imageData.height === i) ||
                                ((r.width = a.imageData.width),
                                (r.height = a.imageData.height)),
                              o.putImageData(a.imageData, 0, 0),
                              a
                            );
                          },
                        });
                    })(),
                    (z.Image = z.Image || {}),
                    (z.Image.filters = z.Image.filters || {}),
                    (z.Image.filters.BaseFilter = z.util.createClass({
                      type: "BaseFilter",
                      vertexSource:
                        "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                      fragmentSource:
                        "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
                      initialize: function (t) {
                        t && this.setOptions(t);
                      },
                      setOptions: function (t) {
                        for (var e in t) this[e] = t[e];
                      },
                      createProgram: function (t, e, n) {
                        (e = e || this.fragmentSource),
                          (n = n || this.vertexSource),
                          "highp" !== z.webGlPrecision &&
                            (e = e.replace(
                              /precision highp float/g,
                              "precision " + z.webGlPrecision + " float"
                            ));
                        var i = t.createShader(t.VERTEX_SHADER);
                        if (
                          (t.shaderSource(i, n),
                          t.compileShader(i),
                          !t.getShaderParameter(i, t.COMPILE_STATUS))
                        )
                          throw new Error(
                            "Vertex shader compile error for " +
                              this.type +
                              ": " +
                              t.getShaderInfoLog(i)
                          );
                        var r = t.createShader(t.FRAGMENT_SHADER);
                        if (
                          (t.shaderSource(r, e),
                          t.compileShader(r),
                          !t.getShaderParameter(r, t.COMPILE_STATUS))
                        )
                          throw new Error(
                            "Fragment shader compile error for " +
                              this.type +
                              ": " +
                              t.getShaderInfoLog(r)
                          );
                        var o = t.createProgram();
                        if (
                          (t.attachShader(o, i),
                          t.attachShader(o, r),
                          t.linkProgram(o),
                          !t.getProgramParameter(o, t.LINK_STATUS))
                        )
                          throw new Error(
                            'Shader link error for "${this.type}" ' +
                              t.getProgramInfoLog(o)
                          );
                        var a = this.getAttributeLocations(t, o),
                          s = this.getUniformLocations(t, o) || {};
                        return (
                          (s.uStepW = t.getUniformLocation(o, "uStepW")),
                          (s.uStepH = t.getUniformLocation(o, "uStepH")),
                          {
                            program: o,
                            attributeLocations: a,
                            uniformLocations: s,
                          }
                        );
                      },
                      getAttributeLocations: function (t, e) {
                        return {
                          aPosition: t.getAttribLocation(e, "aPosition"),
                        };
                      },
                      getUniformLocations: function () {
                        return {};
                      },
                      sendAttributeData: function (t, e, n) {
                        var i = e.aPosition,
                          r = t.createBuffer();
                        t.bindBuffer(t.ARRAY_BUFFER, r),
                          t.enableVertexAttribArray(i),
                          t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0),
                          t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW);
                      },
                      _setupFrameBuffer: function (t) {
                        var e,
                          n,
                          i = t.context;
                        t.passes > 1
                          ? ((e = t.destinationWidth),
                            (n = t.destinationHeight),
                            (t.sourceWidth === e && t.sourceHeight === n) ||
                              (i.deleteTexture(t.targetTexture),
                              (t.targetTexture = t.filterBackend.createTexture(
                                i,
                                e,
                                n
                              ))),
                            i.framebufferTexture2D(
                              i.FRAMEBUFFER,
                              i.COLOR_ATTACHMENT0,
                              i.TEXTURE_2D,
                              t.targetTexture,
                              0
                            ))
                          : (i.bindFramebuffer(i.FRAMEBUFFER, null),
                            i.finish());
                      },
                      _swapTextures: function (t) {
                        t.passes--, t.pass++;
                        var e = t.targetTexture;
                        (t.targetTexture = t.sourceTexture),
                          (t.sourceTexture = e);
                      },
                      isNeutralState: function () {
                        var t = this.mainParameter,
                          e = z.Image.filters[this.type].prototype;
                        if (t) {
                          if (Array.isArray(e[t])) {
                            for (var n = e[t].length; n--; )
                              if (this[t][n] !== e[t][n]) return !1;
                            return !0;
                          }
                          return e[t] === this[t];
                        }
                        return !1;
                      },
                      applyTo: function (t) {
                        t.webgl
                          ? (this._setupFrameBuffer(t),
                            this.applyToWebGL(t),
                            this._swapTextures(t))
                          : this.applyTo2d(t);
                      },
                      retrieveShader: function (t) {
                        return (
                          t.programCache.hasOwnProperty(this.type) ||
                            (t.programCache[this.type] = this.createProgram(
                              t.context
                            )),
                          t.programCache[this.type]
                        );
                      },
                      applyToWebGL: function (t) {
                        var e = t.context,
                          n = this.retrieveShader(t);
                        0 === t.pass && t.originalTexture
                          ? e.bindTexture(e.TEXTURE_2D, t.originalTexture)
                          : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
                          e.useProgram(n.program),
                          this.sendAttributeData(
                            e,
                            n.attributeLocations,
                            t.aPosition
                          ),
                          e.uniform1f(
                            n.uniformLocations.uStepW,
                            1 / t.sourceWidth
                          ),
                          e.uniform1f(
                            n.uniformLocations.uStepH,
                            1 / t.sourceHeight
                          ),
                          this.sendUniformData(e, n.uniformLocations),
                          e.viewport(
                            0,
                            0,
                            t.destinationWidth,
                            t.destinationHeight
                          ),
                          e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
                      },
                      bindAdditionalTexture: function (t, e, n) {
                        t.activeTexture(n),
                          t.bindTexture(t.TEXTURE_2D, e),
                          t.activeTexture(t.TEXTURE0);
                      },
                      unbindAdditionalTexture: function (t, e) {
                        t.activeTexture(e),
                          t.bindTexture(t.TEXTURE_2D, null),
                          t.activeTexture(t.TEXTURE0);
                      },
                      getMainParameter: function () {
                        return this[this.mainParameter];
                      },
                      setMainParameter: function (t) {
                        this[this.mainParameter] = t;
                      },
                      sendUniformData: function () {},
                      createHelpLayer: function (t) {
                        if (!t.helpLayer) {
                          var e = document.createElement("canvas");
                          (e.width = t.sourceWidth),
                            (e.height = t.sourceHeight),
                            (t.helpLayer = e);
                        }
                      },
                      toObject: function () {
                        var t = { type: this.type },
                          e = this.mainParameter;
                        return e && (t[e] = this[e]), t;
                      },
                      toJSON: function () {
                        return this.toObject();
                      },
                    })),
                    (z.Image.filters.BaseFilter.fromObject = function (t, e) {
                      var n = new z.Image.filters[t.type](t);
                      return e && e(n), n;
                    }),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.ColorMatrix = i(n.BaseFilter, {
                        type: "ColorMatrix",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
                        matrix: [
                          1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
                          1, 0,
                        ],
                        mainParameter: "matrix",
                        colorsOnly: !0,
                        initialize: function (t) {
                          this.callSuper("initialize", t),
                            (this.matrix = this.matrix.slice(0));
                        },
                        applyTo2d: function (t) {
                          var e,
                            n,
                            i,
                            r,
                            o,
                            a = t.imageData.data,
                            s = a.length,
                            l = this.matrix,
                            c = this.colorsOnly;
                          for (o = 0; o < s; o += 4)
                            (e = a[o]),
                              (n = a[o + 1]),
                              (i = a[o + 2]),
                              c
                                ? ((a[o] =
                                    e * l[0] +
                                    n * l[1] +
                                    i * l[2] +
                                    255 * l[4]),
                                  (a[o + 1] =
                                    e * l[5] +
                                    n * l[6] +
                                    i * l[7] +
                                    255 * l[9]),
                                  (a[o + 2] =
                                    e * l[10] +
                                    n * l[11] +
                                    i * l[12] +
                                    255 * l[14]))
                                : ((r = a[o + 3]),
                                  (a[o] =
                                    e * l[0] +
                                    n * l[1] +
                                    i * l[2] +
                                    r * l[3] +
                                    255 * l[4]),
                                  (a[o + 1] =
                                    e * l[5] +
                                    n * l[6] +
                                    i * l[7] +
                                    r * l[8] +
                                    255 * l[9]),
                                  (a[o + 2] =
                                    e * l[10] +
                                    n * l[11] +
                                    i * l[12] +
                                    r * l[13] +
                                    255 * l[14]),
                                  (a[o + 3] =
                                    e * l[15] +
                                    n * l[16] +
                                    i * l[17] +
                                    r * l[18] +
                                    255 * l[19]));
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uColorMatrix: t.getUniformLocation(
                              e,
                              "uColorMatrix"
                            ),
                            uConstants: t.getUniformLocation(e, "uConstants"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          var n = this.matrix,
                            i = [
                              n[0],
                              n[1],
                              n[2],
                              n[3],
                              n[5],
                              n[6],
                              n[7],
                              n[8],
                              n[10],
                              n[11],
                              n[12],
                              n[13],
                              n[15],
                              n[16],
                              n[17],
                              n[18],
                            ],
                            r = [n[4], n[9], n[14], n[19]];
                          t.uniformMatrix4fv(e.uColorMatrix, !1, i),
                            t.uniform4fv(e.uConstants, r);
                        },
                      })),
                        (e.Image.filters.ColorMatrix.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Brightness = i(n.BaseFilter, {
                        type: "Brightness",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
                        brightness: 0,
                        mainParameter: "brightness",
                        applyTo2d: function (t) {
                          if (0 !== this.brightness) {
                            var e,
                              n = t.imageData.data,
                              i = n.length,
                              r = Math.round(255 * this.brightness);
                            for (e = 0; e < i; e += 4)
                              (n[e] = n[e] + r),
                                (n[e + 1] = n[e + 1] + r),
                                (n[e + 2] = n[e + 2] + r);
                          }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uBrightness: t.getUniformLocation(e, "uBrightness"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uBrightness, this.brightness);
                        },
                      })),
                        (e.Image.filters.Brightness.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.util.object.extend,
                        i = e.Image.filters,
                        r = e.util.createClass;
                      (i.Convolute = r(i.BaseFilter, {
                        type: "Convolute",
                        opaque: !1,
                        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
                        fragmentSource: {
                          Convolute_3_1:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                          Convolute_3_0:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                          Convolute_5_1:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                          Convolute_5_0:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                          Convolute_7_1:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                          Convolute_7_0:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                          Convolute_9_1:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                          Convolute_9_0:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                        },
                        retrieveShader: function (t) {
                          var e = Math.sqrt(this.matrix.length),
                            n =
                              this.type + "_" + e + "_" + (this.opaque ? 1 : 0),
                            i = this.fragmentSource[n];
                          return (
                            t.programCache.hasOwnProperty(n) ||
                              (t.programCache[n] = this.createProgram(
                                t.context,
                                i
                              )),
                            t.programCache[n]
                          );
                        },
                        applyTo2d: function (t) {
                          var e,
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
                            f = t.imageData,
                            b = f.data,
                            m = this.matrix,
                            g = Math.round(Math.sqrt(m.length)),
                            v = Math.floor(g / 2),
                            _ = f.width,
                            y = f.height,
                            M = t.ctx.createImageData(_, y),
                            O = M.data,
                            w = this.opaque ? 1 : 0;
                          for (u = 0; u < y; u++)
                            for (d = 0; d < _; d++) {
                              for (
                                o = 4 * (u * _ + d),
                                  e = 0,
                                  n = 0,
                                  i = 0,
                                  r = 0,
                                  h = 0;
                                h < g;
                                h++
                              )
                                for (p = 0; p < g; p++)
                                  (a = d + p - v),
                                    (s = u + h - v) < 0 ||
                                      s >= y ||
                                      a < 0 ||
                                      a >= _ ||
                                      ((l = 4 * (s * _ + a)),
                                      (c = m[h * g + p]),
                                      (e += b[l] * c),
                                      (n += b[l + 1] * c),
                                      (i += b[l + 2] * c),
                                      w || (r += b[l + 3] * c));
                              (O[o] = e),
                                (O[o + 1] = n),
                                (O[o + 2] = i),
                                (O[o + 3] = w ? b[o + 3] : r);
                            }
                          t.imageData = M;
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uMatrix: t.getUniformLocation(e, "uMatrix"),
                            uOpaque: t.getUniformLocation(e, "uOpaque"),
                            uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                            uSize: t.getUniformLocation(e, "uSize"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1fv(e.uMatrix, this.matrix);
                        },
                        toObject: function () {
                          return n(this.callSuper("toObject"), {
                            opaque: this.opaque,
                            matrix: this.matrix,
                          });
                        },
                      })),
                        (e.Image.filters.Convolute.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Grayscale = i(n.BaseFilter, {
                        type: "Grayscale",
                        fragmentSource: {
                          average:
                            "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
                          lightness:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                          luminosity:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                        },
                        mode: "average",
                        mainParameter: "mode",
                        applyTo2d: function (t) {
                          var e,
                            n,
                            i = t.imageData.data,
                            r = i.length,
                            o = this.mode;
                          for (e = 0; e < r; e += 4)
                            "average" === o
                              ? (n = (i[e] + i[e + 1] + i[e + 2]) / 3)
                              : "lightness" === o
                              ? (n =
                                  (Math.min(i[e], i[e + 1], i[e + 2]) +
                                    Math.max(i[e], i[e + 1], i[e + 2])) /
                                  2)
                              : "luminosity" === o &&
                                (n =
                                  0.21 * i[e] +
                                  0.72 * i[e + 1] +
                                  0.07 * i[e + 2]),
                              (i[e] = n),
                              (i[e + 1] = n),
                              (i[e + 2] = n);
                        },
                        retrieveShader: function (t) {
                          var e = this.type + "_" + this.mode;
                          if (!t.programCache.hasOwnProperty(e)) {
                            var n = this.fragmentSource[this.mode];
                            t.programCache[e] = this.createProgram(
                              t.context,
                              n
                            );
                          }
                          return t.programCache[e];
                        },
                        getUniformLocations: function (t, e) {
                          return { uMode: t.getUniformLocation(e, "uMode") };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1i(e.uMode, 1);
                        },
                        isNeutralState: function () {
                          return !1;
                        },
                      })),
                        (e.Image.filters.Grayscale.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Invert = i(n.BaseFilter, {
                        type: "Invert",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
                        invert: !0,
                        mainParameter: "invert",
                        applyTo2d: function (t) {
                          var e,
                            n = t.imageData.data,
                            i = n.length;
                          for (e = 0; e < i; e += 4)
                            (n[e] = 255 - n[e]),
                              (n[e + 1] = 255 - n[e + 1]),
                              (n[e + 2] = 255 - n[e + 2]);
                        },
                        isNeutralState: function () {
                          return !this.invert;
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uInvert: t.getUniformLocation(e, "uInvert"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1i(e.uInvert, this.invert);
                        },
                      })),
                        (e.Image.filters.Invert.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.util.object.extend,
                        i = e.Image.filters,
                        r = e.util.createClass;
                      (i.Noise = r(i.BaseFilter, {
                        type: "Noise",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
                        mainParameter: "noise",
                        noise: 0,
                        applyTo2d: function (t) {
                          if (0 !== this.noise) {
                            var e,
                              n,
                              i = t.imageData.data,
                              r = i.length,
                              o = this.noise;
                            for (e = 0, r = i.length; e < r; e += 4)
                              (n = (0.5 - Math.random()) * o),
                                (i[e] += n),
                                (i[e + 1] += n),
                                (i[e + 2] += n);
                          }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uNoise: t.getUniformLocation(e, "uNoise"),
                            uSeed: t.getUniformLocation(e, "uSeed"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uNoise, this.noise / 255),
                            t.uniform1f(e.uSeed, Math.random());
                        },
                        toObject: function () {
                          return n(this.callSuper("toObject"), {
                            noise: this.noise,
                          });
                        },
                      })),
                        (e.Image.filters.Noise.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Pixelate = i(n.BaseFilter, {
                        type: "Pixelate",
                        blocksize: 4,
                        mainParameter: "blocksize",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
                        applyTo2d: function (t) {
                          var e,
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
                            p = t.imageData,
                            h = p.data,
                            f = p.height,
                            b = p.width;
                          for (n = 0; n < f; n += this.blocksize)
                            for (i = 0; i < b; i += this.blocksize)
                              for (
                                r = h[(e = 4 * n * b + 4 * i)],
                                  o = h[e + 1],
                                  a = h[e + 2],
                                  s = h[e + 3],
                                  d = Math.min(n + this.blocksize, f),
                                  u = Math.min(i + this.blocksize, b),
                                  l = n;
                                l < d;
                                l++
                              )
                                for (c = i; c < u; c++)
                                  (h[(e = 4 * l * b + 4 * c)] = r),
                                    (h[e + 1] = o),
                                    (h[e + 2] = a),
                                    (h[e + 3] = s);
                        },
                        isNeutralState: function () {
                          return 1 === this.blocksize;
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                            uStepW: t.getUniformLocation(e, "uStepW"),
                            uStepH: t.getUniformLocation(e, "uStepH"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uBlocksize, this.blocksize);
                        },
                      })),
                        (e.Image.filters.Pixelate.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.util.object.extend,
                        i = e.Image.filters,
                        r = e.util.createClass;
                      (i.RemoveColor = r(i.BaseFilter, {
                        type: "RemoveColor",
                        color: "#FFFFFF",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
                        distance: 0.02,
                        useAlpha: !1,
                        applyTo2d: function (t) {
                          var n,
                            i,
                            r,
                            o,
                            a = t.imageData.data,
                            s = 255 * this.distance,
                            l = new e.Color(this.color).getSource(),
                            c = [l[0] - s, l[1] - s, l[2] - s],
                            d = [l[0] + s, l[1] + s, l[2] + s];
                          for (n = 0; n < a.length; n += 4)
                            (i = a[n]),
                              (r = a[n + 1]),
                              (o = a[n + 2]),
                              i > c[0] &&
                                r > c[1] &&
                                o > c[2] &&
                                i < d[0] &&
                                r < d[1] &&
                                o < d[2] &&
                                (a[n + 3] = 0);
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uLow: t.getUniformLocation(e, "uLow"),
                            uHigh: t.getUniformLocation(e, "uHigh"),
                          };
                        },
                        sendUniformData: function (t, n) {
                          var i = new e.Color(this.color).getSource(),
                            r = parseFloat(this.distance),
                            o = [
                              0 + i[0] / 255 - r,
                              0 + i[1] / 255 - r,
                              0 + i[2] / 255 - r,
                              1,
                            ],
                            a = [
                              i[0] / 255 + r,
                              i[1] / 255 + r,
                              i[2] / 255 + r,
                              1,
                            ];
                          t.uniform4fv(n.uLow, o), t.uniform4fv(n.uHigh, a);
                        },
                        toObject: function () {
                          return n(this.callSuper("toObject"), {
                            color: this.color,
                            distance: this.distance,
                          });
                        },
                      })),
                        (e.Image.filters.RemoveColor.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass,
                        r = {
                          Brownie: [
                            0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377,
                            0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441,
                            0.44972, 0, -0.02965, 0, 0, 0, 1, 0,
                          ],
                          Vintage: [
                            0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578,
                            0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512,
                            0.52416, 0, 0.02023, 0, 0, 0, 1, 0,
                          ],
                          Kodachrome: [
                            1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404,
                            1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034,
                            1.60148, 0, 0.13972, 0, 0, 0, 1, 0,
                          ],
                          Technicolor: [
                            1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878,
                            1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018,
                            1.84759, 0, 0.12137, 0, 0, 0, 1, 0,
                          ],
                          Polaroid: [
                            1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122,
                            0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
                          ],
                          Sepia: [
                            0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0,
                            0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0,
                          ],
                          BlackWhite: [
                            1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5,
                            1.5, 1.5, 0, -1, 0, 0, 0, 1, 0,
                          ],
                        };
                      for (var o in r)
                        (n[o] = i(n.ColorMatrix, {
                          type: o,
                          matrix: r[o],
                          mainParameter: !1,
                          colorsOnly: !0,
                        })),
                          (e.Image.filters[o].fromObject =
                            e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric,
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.BlendColor = i(n.BaseFilter, {
                        type: "BlendColor",
                        color: "#F95C63",
                        mode: "multiply",
                        alpha: 1,
                        fragmentSource: {
                          multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                          screen:
                            "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                          add: "gl_FragColor.rgb += uColor.rgb;\n",
                          diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                          subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                          lighten:
                            "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                          darken:
                            "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                          exclusion:
                            "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                          overlay:
                            "if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",
                          tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n",
                        },
                        buildSource: function (t) {
                          return (
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n" +
                            this.fragmentSource[t] +
                            "}\n}"
                          );
                        },
                        retrieveShader: function (t) {
                          var e,
                            n = this.type + "_" + this.mode;
                          return (
                            t.programCache.hasOwnProperty(n) ||
                              ((e = this.buildSource(this.mode)),
                              (t.programCache[n] = this.createProgram(
                                t.context,
                                e
                              ))),
                            t.programCache[n]
                          );
                        },
                        applyTo2d: function (t) {
                          var n,
                            i,
                            r,
                            o,
                            a,
                            s,
                            l,
                            c = t.imageData.data,
                            d = c.length,
                            u = 1 - this.alpha;
                          (n =
                            (l = new e.Color(this.color).getSource())[0] *
                            this.alpha),
                            (i = l[1] * this.alpha),
                            (r = l[2] * this.alpha);
                          for (var p = 0; p < d; p += 4)
                            switch (
                              ((o = c[p]),
                              (a = c[p + 1]),
                              (s = c[p + 2]),
                              this.mode)
                            ) {
                              case "multiply":
                                (c[p] = (o * n) / 255),
                                  (c[p + 1] = (a * i) / 255),
                                  (c[p + 2] = (s * r) / 255);
                                break;
                              case "screen":
                                (c[p] = 255 - ((255 - o) * (255 - n)) / 255),
                                  (c[p + 1] =
                                    255 - ((255 - a) * (255 - i)) / 255),
                                  (c[p + 2] =
                                    255 - ((255 - s) * (255 - r)) / 255);
                                break;
                              case "add":
                                (c[p] = o + n),
                                  (c[p + 1] = a + i),
                                  (c[p + 2] = s + r);
                                break;
                              case "diff":
                              case "difference":
                                (c[p] = Math.abs(o - n)),
                                  (c[p + 1] = Math.abs(a - i)),
                                  (c[p + 2] = Math.abs(s - r));
                                break;
                              case "subtract":
                                (c[p] = o - n),
                                  (c[p + 1] = a - i),
                                  (c[p + 2] = s - r);
                                break;
                              case "darken":
                                (c[p] = Math.min(o, n)),
                                  (c[p + 1] = Math.min(a, i)),
                                  (c[p + 2] = Math.min(s, r));
                                break;
                              case "lighten":
                                (c[p] = Math.max(o, n)),
                                  (c[p + 1] = Math.max(a, i)),
                                  (c[p + 2] = Math.max(s, r));
                                break;
                              case "overlay":
                                (c[p] =
                                  n < 128
                                    ? (2 * o * n) / 255
                                    : 255 - (2 * (255 - o) * (255 - n)) / 255),
                                  (c[p + 1] =
                                    i < 128
                                      ? (2 * a * i) / 255
                                      : 255 -
                                        (2 * (255 - a) * (255 - i)) / 255),
                                  (c[p + 2] =
                                    r < 128
                                      ? (2 * s * r) / 255
                                      : 255 -
                                        (2 * (255 - s) * (255 - r)) / 255);
                                break;
                              case "exclusion":
                                (c[p] = n + o - (2 * n * o) / 255),
                                  (c[p + 1] = i + a - (2 * i * a) / 255),
                                  (c[p + 2] = r + s - (2 * r * s) / 255);
                                break;
                              case "tint":
                                (c[p] = n + o * u),
                                  (c[p + 1] = i + a * u),
                                  (c[p + 2] = r + s * u);
                            }
                        },
                        getUniformLocations: function (t, e) {
                          return { uColor: t.getUniformLocation(e, "uColor") };
                        },
                        sendUniformData: function (t, n) {
                          var i = new e.Color(this.color).getSource();
                          (i[0] = (this.alpha * i[0]) / 255),
                            (i[1] = (this.alpha * i[1]) / 255),
                            (i[2] = (this.alpha * i[2]) / 255),
                            (i[3] = this.alpha),
                            t.uniform4fv(n.uColor, i);
                        },
                        toObject: function () {
                          return {
                            type: this.type,
                            color: this.color,
                            mode: this.mode,
                            alpha: this.alpha,
                          };
                        },
                      })),
                        (e.Image.filters.BlendColor.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric,
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.BlendImage = i(n.BaseFilter, {
                        type: "BlendImage",
                        image: null,
                        mode: "multiply",
                        alpha: 1,
                        vertexSource:
                          "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                        fragmentSource: {
                          multiply:
                            "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
                          mask: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}",
                        },
                        retrieveShader: function (t) {
                          var e = this.type + "_" + this.mode,
                            n = this.fragmentSource[this.mode];
                          return (
                            t.programCache.hasOwnProperty(e) ||
                              (t.programCache[e] = this.createProgram(
                                t.context,
                                n
                              )),
                            t.programCache[e]
                          );
                        },
                        applyToWebGL: function (t) {
                          var e = t.context,
                            n = this.createTexture(t.filterBackend, this.image);
                          this.bindAdditionalTexture(e, n, e.TEXTURE1),
                            this.callSuper("applyToWebGL", t),
                            this.unbindAdditionalTexture(e, e.TEXTURE1);
                        },
                        createTexture: function (t, e) {
                          return t.getCachedTexture(e.cacheKey, e._element);
                        },
                        calculateMatrix: function () {
                          var t = this.image,
                            e = t._element.width,
                            n = t._element.height;
                          return [
                            1 / t.scaleX,
                            0,
                            0,
                            0,
                            1 / t.scaleY,
                            0,
                            -t.left / e,
                            -t.top / n,
                            1,
                          ];
                        },
                        applyTo2d: function (t) {
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
                            h = t.imageData,
                            f = t.filterBackend.resources,
                            b = h.data,
                            m = b.length,
                            g = h.width,
                            v = h.height,
                            _ = this.image;
                          f.blendImage ||
                            (f.blendImage = e.util.createCanvasElement()),
                            (u = (d = f.blendImage).getContext("2d")),
                            d.width !== g || d.height !== v
                              ? ((d.width = g), (d.height = v))
                              : u.clearRect(0, 0, g, v),
                            u.setTransform(
                              _.scaleX,
                              0,
                              0,
                              _.scaleY,
                              _.left,
                              _.top
                            ),
                            u.drawImage(_._element, 0, 0, g, v),
                            (p = u.getImageData(0, 0, g, v).data);
                          for (var y = 0; y < m; y += 4)
                            switch (
                              ((a = b[y]),
                              (s = b[y + 1]),
                              (l = b[y + 2]),
                              (c = b[y + 3]),
                              (n = p[y]),
                              (i = p[y + 1]),
                              (r = p[y + 2]),
                              (o = p[y + 3]),
                              this.mode)
                            ) {
                              case "multiply":
                                (b[y] = (a * n) / 255),
                                  (b[y + 1] = (s * i) / 255),
                                  (b[y + 2] = (l * r) / 255),
                                  (b[y + 3] = (c * o) / 255);
                                break;
                              case "mask":
                                b[y + 3] = o;
                            }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uTransformMatrix: t.getUniformLocation(
                              e,
                              "uTransformMatrix"
                            ),
                            uImage: t.getUniformLocation(e, "uImage"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          var n = this.calculateMatrix();
                          t.uniform1i(e.uImage, 1),
                            t.uniformMatrix3fv(e.uTransformMatrix, !1, n);
                        },
                        toObject: function () {
                          return {
                            type: this.type,
                            image: this.image && this.image.toObject(),
                            mode: this.mode,
                            alpha: this.alpha,
                          };
                        },
                      })),
                        (e.Image.filters.BlendImage.fromObject = function (
                          t,
                          n
                        ) {
                          e.Image.fromObject(t.image, function (i) {
                            var r = e.util.object.clone(t);
                            (r.image = i), n(new e.Image.filters.BlendImage(r));
                          });
                        });
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = Math.pow,
                        i = Math.floor,
                        r = Math.sqrt,
                        o = Math.abs,
                        a = Math.round,
                        s = Math.sin,
                        l = Math.ceil,
                        c = e.Image.filters,
                        d = e.util.createClass;
                      (c.Resize = d(c.BaseFilter, {
                        type: "Resize",
                        resizeType: "hermite",
                        scaleX: 1,
                        scaleY: 1,
                        lanczosLobes: 3,
                        getUniformLocations: function (t, e) {
                          return {
                            uDelta: t.getUniformLocation(e, "uDelta"),
                            uTaps: t.getUniformLocation(e, "uTaps"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform2fv(
                            e.uDelta,
                            this.horizontal
                              ? [1 / this.width, 0]
                              : [0, 1 / this.height]
                          ),
                            t.uniform1fv(e.uTaps, this.taps);
                        },
                        retrieveShader: function (t) {
                          var e = this.getFilterWindow(),
                            n = this.type + "_" + e;
                          if (!t.programCache.hasOwnProperty(n)) {
                            var i = this.generateShader(e);
                            t.programCache[n] = this.createProgram(
                              t.context,
                              i
                            );
                          }
                          return t.programCache[n];
                        },
                        getFilterWindow: function () {
                          var t = this.tempScale;
                          return Math.ceil(this.lanczosLobes / t);
                        },
                        getTaps: function () {
                          for (
                            var t = this.lanczosCreate(this.lanczosLobes),
                              e = this.tempScale,
                              n = this.getFilterWindow(),
                              i = new Array(n),
                              r = 1;
                            r <= n;
                            r++
                          )
                            i[r - 1] = t(r * e);
                          return i;
                        },
                        generateShader: function (t) {
                          for (
                            var e = new Array(t),
                              n = this.fragmentSourceTOP,
                              i = 1;
                            i <= t;
                            i++
                          )
                            e[i - 1] = i + ".0 * uDelta";
                          return (
                            (n += "uniform float uTaps[" + t + "];\n"),
                            (n += "void main() {\n"),
                            (n +=
                              "  vec4 color = texture2D(uTexture, vTexCoord);\n"),
                            (n += "  float sum = 1.0;\n"),
                            e.forEach(function (t, e) {
                              (n +=
                                "  color += texture2D(uTexture, vTexCoord + " +
                                t +
                                ") * uTaps[" +
                                e +
                                "];\n"),
                                (n +=
                                  "  color += texture2D(uTexture, vTexCoord - " +
                                  t +
                                  ") * uTaps[" +
                                  e +
                                  "];\n"),
                                (n += "  sum += 2.0 * uTaps[" + e + "];\n");
                            }),
                            (n += "  gl_FragColor = color / sum;\n"),
                            (n += "}")
                          );
                        },
                        fragmentSourceTOP:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
                        applyTo: function (t) {
                          t.webgl
                            ? (t.passes++,
                              (this.width = t.sourceWidth),
                              (this.horizontal = !0),
                              (this.dW = Math.round(this.width * this.scaleX)),
                              (this.dH = t.sourceHeight),
                              (this.tempScale = this.dW / this.width),
                              (this.taps = this.getTaps()),
                              (t.destinationWidth = this.dW),
                              this._setupFrameBuffer(t),
                              this.applyToWebGL(t),
                              this._swapTextures(t),
                              (t.sourceWidth = t.destinationWidth),
                              (this.height = t.sourceHeight),
                              (this.horizontal = !1),
                              (this.dH = Math.round(this.height * this.scaleY)),
                              (this.tempScale = this.dH / this.height),
                              (this.taps = this.getTaps()),
                              (t.destinationHeight = this.dH),
                              this._setupFrameBuffer(t),
                              this.applyToWebGL(t),
                              this._swapTextures(t),
                              (t.sourceHeight = t.destinationHeight))
                            : this.applyTo2d(t);
                        },
                        isNeutralState: function () {
                          return 1 === this.scaleX && 1 === this.scaleY;
                        },
                        lanczosCreate: function (t) {
                          return function (e) {
                            if (e >= t || e <= -t) return 0;
                            if (e < 1.1920929e-7 && e > -1.1920929e-7) return 1;
                            var n = (e *= Math.PI) / t;
                            return ((s(e) / e) * s(n)) / n;
                          };
                        },
                        applyTo2d: function (t) {
                          var e = t.imageData,
                            n = this.scaleX,
                            i = this.scaleY;
                          (this.rcpScaleX = 1 / n), (this.rcpScaleY = 1 / i);
                          var r,
                            o = e.width,
                            s = e.height,
                            l = a(o * n),
                            c = a(s * i);
                          "sliceHack" === this.resizeType
                            ? (r = this.sliceByTwo(t, o, s, l, c))
                            : "hermite" === this.resizeType
                            ? (r = this.hermiteFastResize(t, o, s, l, c))
                            : "bilinear" === this.resizeType
                            ? (r = this.bilinearFiltering(t, o, s, l, c))
                            : "lanczos" === this.resizeType &&
                              (r = this.lanczosResize(t, o, s, l, c)),
                            (t.imageData = r);
                        },
                        sliceByTwo: function (t, n, r, o, a) {
                          var s,
                            l,
                            c = t.imageData,
                            d = !1,
                            u = !1,
                            p = 0.5 * n,
                            h = 0.5 * r,
                            f = e.filterBackend.resources,
                            b = 0,
                            m = 0,
                            g = n,
                            v = 0;
                          for (
                            f.sliceByTwo ||
                              (f.sliceByTwo = document.createElement("canvas")),
                              ((s = f.sliceByTwo).width < 1.5 * n ||
                                s.height < r) &&
                                ((s.width = 1.5 * n), (s.height = r)),
                              (l = s.getContext("2d")).clearRect(
                                0,
                                0,
                                1.5 * n,
                                r
                              ),
                              l.putImageData(c, 0, 0),
                              o = i(o),
                              a = i(a);
                            !d || !u;

                          )
                            (n = p),
                              (r = h),
                              o < i(0.5 * p)
                                ? (p = i(0.5 * p))
                                : ((p = o), (d = !0)),
                              a < i(0.5 * h)
                                ? (h = i(0.5 * h))
                                : ((h = a), (u = !0)),
                              l.drawImage(s, b, m, n, r, g, v, p, h),
                              (b = g),
                              (m = v),
                              (v += h);
                          return l.getImageData(b, m, o, a);
                        },
                        lanczosResize: function (t, e, a, s, c) {
                          var d = t.imageData.data,
                            u = t.ctx.createImageData(s, c),
                            p = u.data,
                            h = this.lanczosCreate(this.lanczosLobes),
                            f = this.rcpScaleX,
                            b = this.rcpScaleY,
                            m = 2 / this.rcpScaleX,
                            g = 2 / this.rcpScaleY,
                            v = l((f * this.lanczosLobes) / 2),
                            _ = l((b * this.lanczosLobes) / 2),
                            y = {},
                            M = {},
                            O = {};
                          return (function t(l) {
                            var w, A, x, z, C, k, S, T, D, L, q;
                            for (
                              M.x = (l + 0.5) * f, O.x = i(M.x), w = 0;
                              w < c;
                              w++
                            ) {
                              for (
                                M.y = (w + 0.5) * b,
                                  O.y = i(M.y),
                                  C = 0,
                                  k = 0,
                                  S = 0,
                                  T = 0,
                                  D = 0,
                                  A = O.x - v;
                                A <= O.x + v;
                                A++
                              )
                                if (!(A < 0 || A >= e)) {
                                  (L = i(1e3 * o(A - M.x))),
                                    y[L] || (y[L] = {});
                                  for (var E = O.y - _; E <= O.y + _; E++)
                                    E < 0 ||
                                      E >= a ||
                                      ((q = i(1e3 * o(E - M.y))),
                                      y[L][q] ||
                                        (y[L][q] = h(
                                          r(n(L * m, 2) + n(q * g, 2)) / 1e3
                                        )),
                                      (x = y[L][q]) > 0 &&
                                        ((C += x),
                                        (k += x * d[(z = 4 * (E * e + A))]),
                                        (S += x * d[z + 1]),
                                        (T += x * d[z + 2]),
                                        (D += x * d[z + 3])));
                                }
                              (p[(z = 4 * (w * s + l))] = k / C),
                                (p[z + 1] = S / C),
                                (p[z + 2] = T / C),
                                (p[z + 3] = D / C);
                            }
                            return ++l < s ? t(l) : u;
                          })(0);
                        },
                        bilinearFiltering: function (t, e, n, r, o) {
                          var a,
                            s,
                            l,
                            c,
                            d,
                            u,
                            p,
                            h,
                            f,
                            b = 0,
                            m = this.rcpScaleX,
                            g = this.rcpScaleY,
                            v = 4 * (e - 1),
                            _ = t.imageData.data,
                            y = t.ctx.createImageData(r, o),
                            M = y.data;
                          for (l = 0; l < o; l++)
                            for (c = 0; c < r; c++)
                              for (
                                d = m * c - (a = i(m * c)),
                                  u = g * l - (s = i(g * l)),
                                  f = 4 * (s * e + a),
                                  p = 0;
                                p < 4;
                                p++
                              )
                                (h =
                                  _[f + p] * (1 - d) * (1 - u) +
                                  _[f + 4 + p] * d * (1 - u) +
                                  _[f + v + p] * u * (1 - d) +
                                  _[f + v + 4 + p] * d * u),
                                  (M[b++] = h);
                          return y;
                        },
                        hermiteFastResize: function (t, e, n, a, s) {
                          for (
                            var c = this.rcpScaleX,
                              d = this.rcpScaleY,
                              u = l(c / 2),
                              p = l(d / 2),
                              h = t.imageData.data,
                              f = t.ctx.createImageData(a, s),
                              b = f.data,
                              m = 0;
                            m < s;
                            m++
                          )
                            for (var g = 0; g < a; g++) {
                              for (
                                var v = 4 * (g + m * a),
                                  _ = 0,
                                  y = 0,
                                  M = 0,
                                  O = 0,
                                  w = 0,
                                  A = 0,
                                  x = 0,
                                  z = (m + 0.5) * d,
                                  C = i(m * d);
                                C < (m + 1) * d;
                                C++
                              )
                                for (
                                  var k = o(z - (C + 0.5)) / p,
                                    S = (g + 0.5) * c,
                                    T = k * k,
                                    D = i(g * c);
                                  D < (g + 1) * c;
                                  D++
                                ) {
                                  var L = o(S - (D + 0.5)) / u,
                                    q = r(T + L * L);
                                  (q > 1 && q < -1) ||
                                    ((_ = 2 * q * q * q - 3 * q * q + 1) > 0 &&
                                      ((x += _ * h[3 + (L = 4 * (D + C * e))]),
                                      (M += _),
                                      h[L + 3] < 255 &&
                                        (_ = (_ * h[L + 3]) / 250),
                                      (O += _ * h[L]),
                                      (w += _ * h[L + 1]),
                                      (A += _ * h[L + 2]),
                                      (y += _)));
                                }
                              (b[v] = O / y),
                                (b[v + 1] = w / y),
                                (b[v + 2] = A / y),
                                (b[v + 3] = x / M);
                            }
                          return f;
                        },
                        toObject: function () {
                          return {
                            type: this.type,
                            scaleX: this.scaleX,
                            scaleY: this.scaleY,
                            resizeType: this.resizeType,
                            lanczosLobes: this.lanczosLobes,
                          };
                        },
                      })),
                        (e.Image.filters.Resize.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Contrast = i(n.BaseFilter, {
                        type: "Contrast",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
                        contrast: 0,
                        mainParameter: "contrast",
                        applyTo2d: function (t) {
                          if (0 !== this.contrast) {
                            var e,
                              n = t.imageData.data,
                              i = n.length,
                              r = Math.floor(255 * this.contrast),
                              o = (259 * (r + 255)) / (255 * (259 - r));
                            for (e = 0; e < i; e += 4)
                              (n[e] = o * (n[e] - 128) + 128),
                                (n[e + 1] = o * (n[e + 1] - 128) + 128),
                                (n[e + 2] = o * (n[e + 2] - 128) + 128);
                          }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uContrast: t.getUniformLocation(e, "uContrast"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uContrast, this.contrast);
                        },
                      })),
                        (e.Image.filters.Contrast.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Saturation = i(n.BaseFilter, {
                        type: "Saturation",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
                        saturation: 0,
                        mainParameter: "saturation",
                        applyTo2d: function (t) {
                          if (0 !== this.saturation) {
                            var e,
                              n,
                              i = t.imageData.data,
                              r = i.length,
                              o = -this.saturation;
                            for (e = 0; e < r; e += 4)
                              (n = Math.max(i[e], i[e + 1], i[e + 2])),
                                (i[e] += n !== i[e] ? (n - i[e]) * o : 0),
                                (i[e + 1] +=
                                  n !== i[e + 1] ? (n - i[e + 1]) * o : 0),
                                (i[e + 2] +=
                                  n !== i[e + 2] ? (n - i[e + 2]) * o : 0);
                          }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uSaturation: t.getUniformLocation(e, "uSaturation"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uSaturation, -this.saturation);
                        },
                      })),
                        (e.Image.filters.Saturation.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Vibrance = i(n.BaseFilter, {
                        type: "Vibrance",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform float uVibrance;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat max = max(color.r, max(color.g, color.b));\nfloat avg = (color.r + color.g + color.b) / 3.0;\nfloat amt = (abs(max - avg) * 2.0) * uVibrance;\ncolor.r += max != color.r ? (max - color.r) * amt : 0.00;\ncolor.g += max != color.g ? (max - color.g) * amt : 0.00;\ncolor.b += max != color.b ? (max - color.b) * amt : 0.00;\ngl_FragColor = color;\n}",
                        vibrance: 0,
                        mainParameter: "vibrance",
                        applyTo2d: function (t) {
                          if (0 !== this.vibrance) {
                            var e,
                              n,
                              i,
                              r,
                              o = t.imageData.data,
                              a = o.length,
                              s = -this.vibrance;
                            for (e = 0; e < a; e += 4)
                              (n = Math.max(o[e], o[e + 1], o[e + 2])),
                                (i = (o[e] + o[e + 1] + o[e + 2]) / 3),
                                (r = ((2 * Math.abs(n - i)) / 255) * s),
                                (o[e] += n !== o[e] ? (n - o[e]) * r : 0),
                                (o[e + 1] +=
                                  n !== o[e + 1] ? (n - o[e + 1]) * r : 0),
                                (o[e + 2] +=
                                  n !== o[e + 2] ? (n - o[e + 2]) * r : 0);
                          }
                        },
                        getUniformLocations: function (t, e) {
                          return {
                            uVibrance: t.getUniformLocation(e, "uVibrance"),
                          };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform1f(e.uVibrance, -this.vibrance);
                        },
                      })),
                        (e.Image.filters.Vibrance.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Blur = i(n.BaseFilter, {
                        type: "Blur",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
                        blur: 0,
                        mainParameter: "blur",
                        applyTo: function (t) {
                          t.webgl
                            ? ((this.aspectRatio =
                                t.sourceWidth / t.sourceHeight),
                              t.passes++,
                              this._setupFrameBuffer(t),
                              (this.horizontal = !0),
                              this.applyToWebGL(t),
                              this._swapTextures(t),
                              this._setupFrameBuffer(t),
                              (this.horizontal = !1),
                              this.applyToWebGL(t),
                              this._swapTextures(t))
                            : this.applyTo2d(t);
                        },
                        applyTo2d: function (t) {
                          t.imageData = this.simpleBlur(t);
                        },
                        simpleBlur: function (t) {
                          var n,
                            i,
                            r = t.filterBackend.resources,
                            o = t.imageData.width,
                            a = t.imageData.height;
                          r.blurLayer1 ||
                            ((r.blurLayer1 = e.util.createCanvasElement()),
                            (r.blurLayer2 = e.util.createCanvasElement())),
                            (n = r.blurLayer1),
                            (i = r.blurLayer2),
                            (n.width === o && n.height === a) ||
                              ((i.width = n.width = o),
                              (i.height = n.height = a));
                          var s,
                            l,
                            c,
                            d,
                            u = n.getContext("2d"),
                            p = i.getContext("2d"),
                            h = 0.06 * this.blur * 0.5;
                          for (
                            u.putImageData(t.imageData, 0, 0),
                              p.clearRect(0, 0, o, a),
                              d = -15;
                            d <= 15;
                            d++
                          )
                            (c =
                              h * (l = d / 15) * o +
                              (s = (Math.random() - 0.5) / 4)),
                              (p.globalAlpha = 1 - Math.abs(l)),
                              p.drawImage(n, c, s),
                              u.drawImage(i, 0, 0),
                              (p.globalAlpha = 1),
                              p.clearRect(0, 0, i.width, i.height);
                          for (d = -15; d <= 15; d++)
                            (c =
                              h * (l = d / 15) * a +
                              (s = (Math.random() - 0.5) / 4)),
                              (p.globalAlpha = 1 - Math.abs(l)),
                              p.drawImage(n, s, c),
                              u.drawImage(i, 0, 0),
                              (p.globalAlpha = 1),
                              p.clearRect(0, 0, i.width, i.height);
                          t.ctx.drawImage(n, 0, 0);
                          var f = t.ctx.getImageData(0, 0, n.width, n.height);
                          return (
                            (u.globalAlpha = 1),
                            u.clearRect(0, 0, n.width, n.height),
                            f
                          );
                        },
                        getUniformLocations: function (t, e) {
                          return { delta: t.getUniformLocation(e, "uDelta") };
                        },
                        sendUniformData: function (t, e) {
                          var n = this.chooseRightDelta();
                          t.uniform2fv(e.delta, n);
                        },
                        chooseRightDelta: function () {
                          var t,
                            e = 1,
                            n = [0, 0];
                          return (
                            this.horizontal
                              ? this.aspectRatio > 1 &&
                                (e = 1 / this.aspectRatio)
                              : this.aspectRatio < 1 && (e = this.aspectRatio),
                            (t = e * this.blur * 0.12),
                            this.horizontal ? (n[0] = t) : (n[1] = t),
                            n
                          );
                        },
                      })),
                        (n.Blur.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Gamma = i(n.BaseFilter, {
                        type: "Gamma",
                        fragmentSource:
                          "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
                        gamma: [1, 1, 1],
                        mainParameter: "gamma",
                        initialize: function (t) {
                          (this.gamma = [1, 1, 1]),
                            n.BaseFilter.prototype.initialize.call(this, t);
                        },
                        applyTo2d: function (t) {
                          var e,
                            n = t.imageData.data,
                            i = this.gamma,
                            r = n.length,
                            o = 1 / i[0],
                            a = 1 / i[1],
                            s = 1 / i[2];
                          for (
                            this.rVals ||
                              ((this.rVals = new Uint8Array(256)),
                              (this.gVals = new Uint8Array(256)),
                              (this.bVals = new Uint8Array(256))),
                              e = 0,
                              r = 256;
                            e < r;
                            e++
                          )
                            (this.rVals[e] = 255 * Math.pow(e / 255, o)),
                              (this.gVals[e] = 255 * Math.pow(e / 255, a)),
                              (this.bVals[e] = 255 * Math.pow(e / 255, s));
                          for (e = 0, r = n.length; e < r; e += 4)
                            (n[e] = this.rVals[n[e]]),
                              (n[e + 1] = this.gVals[n[e + 1]]),
                              (n[e + 2] = this.bVals[n[e + 2]]);
                        },
                        getUniformLocations: function (t, e) {
                          return { uGamma: t.getUniformLocation(e, "uGamma") };
                        },
                        sendUniformData: function (t, e) {
                          t.uniform3fv(e.uGamma, this.gamma);
                        },
                      })),
                        (e.Image.filters.Gamma.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.Composed = i(n.BaseFilter, {
                        type: "Composed",
                        subFilters: [],
                        initialize: function (t) {
                          this.callSuper("initialize", t),
                            (this.subFilters = this.subFilters.slice(0));
                        },
                        applyTo: function (t) {
                          (t.passes += this.subFilters.length - 1),
                            this.subFilters.forEach(function (e) {
                              e.applyTo(t);
                            });
                        },
                        toObject: function () {
                          return e.util.object.extend(
                            this.callSuper("toObject"),
                            {
                              subFilters: this.subFilters.map(function (t) {
                                return t.toObject();
                              }),
                            }
                          );
                        },
                        isNeutralState: function () {
                          return !this.subFilters.some(function (t) {
                            return !t.isNeutralState();
                          });
                        },
                      })),
                        (e.Image.filters.Composed.fromObject = function (t, n) {
                          var i = (t.subFilters || []).map(function (t) {
                              return new e.Image.filters[t.type](t);
                            }),
                            r = new e.Image.filters.Composed({ subFilters: i });
                          return n && n(r), r;
                        });
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.Image.filters,
                        i = e.util.createClass;
                      (n.HueRotation = i(n.ColorMatrix, {
                        type: "HueRotation",
                        rotation: 0,
                        mainParameter: "rotation",
                        calculateMatrix: function () {
                          var t = this.rotation * Math.PI,
                            n = e.util.cos(t),
                            i = e.util.sin(t),
                            r = Math.sqrt(1 / 3) * i,
                            o = 1 - n;
                          (this.matrix = [
                            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                            0, 1, 0,
                          ]),
                            (this.matrix[0] = n + o / 3),
                            (this.matrix[1] = (1 / 3) * o - r),
                            (this.matrix[2] = (1 / 3) * o + r),
                            (this.matrix[5] = (1 / 3) * o + r),
                            (this.matrix[6] = n + (1 / 3) * o),
                            (this.matrix[7] = (1 / 3) * o - r),
                            (this.matrix[10] = (1 / 3) * o - r),
                            (this.matrix[11] = (1 / 3) * o + r),
                            (this.matrix[12] = n + (1 / 3) * o);
                        },
                        isNeutralState: function (t) {
                          return (
                            this.calculateMatrix(),
                            n.BaseFilter.prototype.isNeutralState.call(this, t)
                          );
                        },
                        applyTo: function (t) {
                          this.calculateMatrix(),
                            n.BaseFilter.prototype.applyTo.call(this, t);
                        },
                      })),
                        (e.Image.filters.HueRotation.fromObject =
                          e.Image.filters.BaseFilter.fromObject);
                    })(n),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {}),
                        n = e.util.object.clone;
                      if (e.Text) e.warn("fabric.Text is already defined");
                      else {
                        var i =
                          "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide".split(
                            " "
                          );
                        (e.Text = e.util.createClass(e.Object, {
                          _dimensionAffectingProps: [
                            "fontSize",
                            "fontWeight",
                            "fontFamily",
                            "fontStyle",
                            "lineHeight",
                            "text",
                            "charSpacing",
                            "textAlign",
                            "styles",
                            "path",
                            "pathStartOffset",
                            "pathSide",
                          ],
                          _reNewline: /\r?\n/,
                          _reSpacesAndTabs: /[ \t\r]/g,
                          _reSpaceAndTab: /[ \t\r]/,
                          _reWords: /\S+/g,
                          type: "text",
                          fontSize: 40,
                          fontWeight: "normal",
                          fontFamily: "Times New Roman",
                          underline: !1,
                          overline: !1,
                          linethrough: !1,
                          textAlign: "left",
                          fontStyle: "normal",
                          lineHeight: 1.16,
                          superscript: { size: 0.6, baseline: -0.35 },
                          subscript: { size: 0.6, baseline: 0.11 },
                          textBackgroundColor: "",
                          stateProperties:
                            e.Object.prototype.stateProperties.concat(i),
                          cacheProperties:
                            e.Object.prototype.cacheProperties.concat(i),
                          stroke: null,
                          shadow: null,
                          path: null,
                          pathStartOffset: 0,
                          pathSide: "left",
                          _fontSizeFraction: 0.222,
                          offsets: {
                            underline: 0.1,
                            linethrough: -0.315,
                            overline: -0.88,
                          },
                          _fontSizeMult: 1.13,
                          charSpacing: 0,
                          styles: null,
                          _measuringContext: null,
                          deltaY: 0,
                          direction: "ltr",
                          _styleProperties: [
                            "stroke",
                            "strokeWidth",
                            "fill",
                            "fontFamily",
                            "fontSize",
                            "fontWeight",
                            "fontStyle",
                            "underline",
                            "overline",
                            "linethrough",
                            "deltaY",
                            "textBackgroundColor",
                          ],
                          __charBounds: [],
                          CACHE_FONT_SIZE: 400,
                          MIN_TEXT_WIDTH: 2,
                          initialize: function (t, e) {
                            (this.styles = (e && e.styles) || {}),
                              (this.text = t),
                              (this.__skipDimension = !0),
                              this.callSuper("initialize", e),
                              this.path && this.setPathInfo(),
                              (this.__skipDimension = !1),
                              this.initDimensions(),
                              this.setCoords(),
                              this.setupState({
                                propertySet: "_dimensionAffectingProps",
                              });
                          },
                          setPathInfo: function () {
                            var t = this.path;
                            t &&
                              (t.segmentsInfo = e.util.getPathSegmentsInfo(
                                t.path
                              ));
                          },
                          getMeasuringContext: function () {
                            return (
                              e._measuringContext ||
                                (e._measuringContext =
                                  (this.canvas && this.canvas.contextCache) ||
                                  e.util
                                    .createCanvasElement()
                                    .getContext("2d")),
                              e._measuringContext
                            );
                          },
                          _splitText: function () {
                            var t = this._splitTextIntoLines(this.text);
                            return (
                              (this.textLines = t.lines),
                              (this._textLines = t.graphemeLines),
                              (this._unwrappedTextLines = t._unwrappedLines),
                              (this._text = t.graphemeText),
                              t
                            );
                          },
                          initDimensions: function () {
                            this.__skipDimension ||
                              (this._splitText(),
                              this._clearCache(),
                              this.path
                                ? ((this.width = this.path.width),
                                  (this.height = this.path.height))
                                : ((this.width =
                                    this.calcTextWidth() ||
                                    this.cursorWidth ||
                                    this.MIN_TEXT_WIDTH),
                                  (this.height = this.calcTextHeight())),
                              -1 !== this.textAlign.indexOf("justify") &&
                                this.enlargeSpaces(),
                              this.saveState({
                                propertySet: "_dimensionAffectingProps",
                              }));
                          },
                          enlargeSpaces: function () {
                            for (
                              var t,
                                e,
                                n,
                                i,
                                r,
                                o,
                                a,
                                s = 0,
                                l = this._textLines.length;
                              s < l;
                              s++
                            )
                              if (
                                ("justify" === this.textAlign ||
                                  (s !== l - 1 && !this.isEndOfWrapping(s))) &&
                                ((i = 0),
                                (r = this._textLines[s]),
                                (e = this.getLineWidth(s)) < this.width &&
                                  (a = this.textLines[s].match(
                                    this._reSpacesAndTabs
                                  )))
                              ) {
                                (n = a.length), (t = (this.width - e) / n);
                                for (var c = 0, d = r.length; c <= d; c++)
                                  (o = this.__charBounds[s][c]),
                                    this._reSpaceAndTab.test(r[c])
                                      ? ((o.width += t),
                                        (o.kernedWidth += t),
                                        (o.left += i),
                                        (i += t))
                                      : (o.left += i);
                              }
                          },
                          isEndOfWrapping: function (t) {
                            return t === this._textLines.length - 1;
                          },
                          missingNewlineOffset: function () {
                            return 1;
                          },
                          toString: function () {
                            return (
                              "#<fabric.Text (" +
                              this.complexity() +
                              '): { "text": "' +
                              this.text +
                              '", "fontFamily": "' +
                              this.fontFamily +
                              '" }>'
                            );
                          },
                          _getCacheCanvasDimensions: function () {
                            var t = this.callSuper("_getCacheCanvasDimensions"),
                              e = this.fontSize;
                            return (
                              (t.width += e * t.zoomX),
                              (t.height += e * t.zoomY),
                              t
                            );
                          },
                          _render: function (t) {
                            var e = this.path;
                            e && !e.isNotVisible() && e._render(t),
                              this._setTextStyles(t),
                              this._renderTextLinesBackground(t),
                              this._renderTextDecoration(t, "underline"),
                              this._renderText(t),
                              this._renderTextDecoration(t, "overline"),
                              this._renderTextDecoration(t, "linethrough");
                          },
                          _renderText: function (t) {
                            "stroke" === this.paintFirst
                              ? (this._renderTextStroke(t),
                                this._renderTextFill(t))
                              : (this._renderTextFill(t),
                                this._renderTextStroke(t));
                          },
                          _setTextStyles: function (t, e, n) {
                            (t.textBaseline = "alphabetic"),
                              (t.font = this._getFontDeclaration(e, n));
                          },
                          calcTextWidth: function () {
                            for (
                              var t = this.getLineWidth(0),
                                e = 1,
                                n = this._textLines.length;
                              e < n;
                              e++
                            ) {
                              var i = this.getLineWidth(e);
                              i > t && (t = i);
                            }
                            return t;
                          },
                          _renderTextLine: function (t, e, n, i, r, o) {
                            this._renderChars(t, e, n, i, r, o);
                          },
                          _renderTextLinesBackground: function (t) {
                            if (
                              this.textBackgroundColor ||
                              this.styleHas("textBackgroundColor")
                            ) {
                              for (
                                var e,
                                  n,
                                  i,
                                  r,
                                  o,
                                  a,
                                  s,
                                  l = t.fillStyle,
                                  c = this._getLeftOffset(),
                                  d = this._getTopOffset(),
                                  u = 0,
                                  p = 0,
                                  h = this.path,
                                  f = 0,
                                  b = this._textLines.length;
                                f < b;
                                f++
                              )
                                if (
                                  ((e = this.getHeightOfLine(f)),
                                  this.textBackgroundColor ||
                                    this.styleHas("textBackgroundColor", f))
                                ) {
                                  (i = this._textLines[f]),
                                    (n = this._getLineLeftOffset(f)),
                                    (p = 0),
                                    (u = 0),
                                    (r = this.getValueOfPropertyAt(
                                      f,
                                      0,
                                      "textBackgroundColor"
                                    ));
                                  for (var m = 0, g = i.length; m < g; m++)
                                    (o = this.__charBounds[f][m]),
                                      (a = this.getValueOfPropertyAt(
                                        f,
                                        m,
                                        "textBackgroundColor"
                                      )),
                                      h
                                        ? (t.save(),
                                          t.translate(
                                            o.renderLeft,
                                            o.renderTop
                                          ),
                                          t.rotate(o.angle),
                                          (t.fillStyle = a),
                                          a &&
                                            t.fillRect(
                                              -o.width / 2,
                                              (-e / this.lineHeight) *
                                                (1 - this._fontSizeFraction),
                                              o.width,
                                              e / this.lineHeight
                                            ),
                                          t.restore())
                                        : a !== r
                                        ? ((s = c + n + u),
                                          "rtl" === this.direction &&
                                            (s = this.width - s - p),
                                          (t.fillStyle = r),
                                          r &&
                                            t.fillRect(
                                              s,
                                              d,
                                              p,
                                              e / this.lineHeight
                                            ),
                                          (u = o.left),
                                          (p = o.width),
                                          (r = a))
                                        : (p += o.kernedWidth);
                                  a &&
                                    !h &&
                                    ((s = c + n + u),
                                    "rtl" === this.direction &&
                                      (s = this.width - s - p),
                                    (t.fillStyle = a),
                                    t.fillRect(s, d, p, e / this.lineHeight)),
                                    (d += e);
                                } else d += e;
                              (t.fillStyle = l), this._removeShadow(t);
                            }
                          },
                          getFontCache: function (t) {
                            var n = t.fontFamily.toLowerCase();
                            e.charWidthsCache[n] || (e.charWidthsCache[n] = {});
                            var i = e.charWidthsCache[n],
                              r =
                                t.fontStyle.toLowerCase() +
                                "_" +
                                (t.fontWeight + "").toLowerCase();
                            return i[r] || (i[r] = {}), i[r];
                          },
                          _measureChar: function (t, e, n, i) {
                            var r,
                              o,
                              a,
                              s,
                              l = this.getFontCache(e),
                              c = n + t,
                              d =
                                this._getFontDeclaration(e) ===
                                this._getFontDeclaration(i),
                              u = e.fontSize / this.CACHE_FONT_SIZE;
                            if (
                              (n && void 0 !== l[n] && (a = l[n]),
                              void 0 !== l[t] && (s = r = l[t]),
                              d && void 0 !== l[c] && (s = (o = l[c]) - a),
                              void 0 === r || void 0 === a || void 0 === o)
                            ) {
                              var p = this.getMeasuringContext();
                              this._setTextStyles(p, e, !0);
                            }
                            return (
                              void 0 === r &&
                                ((s = r = p.measureText(t).width), (l[t] = r)),
                              void 0 === a &&
                                d &&
                                n &&
                                ((a = p.measureText(n).width), (l[n] = a)),
                              d &&
                                void 0 === o &&
                                ((o = p.measureText(c).width),
                                (l[c] = o),
                                (s = o - a)),
                              { width: r * u, kernedWidth: s * u }
                            );
                          },
                          getHeightOfChar: function (t, e) {
                            return this.getValueOfPropertyAt(t, e, "fontSize");
                          },
                          measureLine: function (t) {
                            var e = this._measureLine(t);
                            return (
                              0 !== this.charSpacing &&
                                (e.width -= this._getWidthOfCharSpacing()),
                              e.width < 0 && (e.width = 0),
                              e
                            );
                          },
                          _measureLine: function (t) {
                            var n,
                              i,
                              r,
                              o,
                              a,
                              s,
                              l = 0,
                              c = this._textLines[t],
                              d = new Array(c.length),
                              u = 0,
                              p = this.path,
                              h = "right" === this.pathSide;
                            for (
                              this.__charBounds[t] = d, n = 0;
                              n < c.length;
                              n++
                            )
                              (i = c[n]),
                                (o = this._getGraphemeBox(i, t, n, r)),
                                (d[n] = o),
                                (l += o.kernedWidth),
                                (r = i);
                            if (
                              ((d[n] = {
                                left: o ? o.left + o.width : 0,
                                width: 0,
                                kernedWidth: 0,
                                height: this.fontSize,
                              }),
                              p)
                            ) {
                              switch (
                                ((s =
                                  p.segmentsInfo[p.segmentsInfo.length - 1]
                                    .length),
                                ((a = e.util.getPointOnPath(
                                  p.path,
                                  0,
                                  p.segmentsInfo
                                )).x += p.pathOffset.x),
                                (a.y += p.pathOffset.y),
                                this.textAlign)
                              ) {
                                case "left":
                                  u = h ? s - l : 0;
                                  break;
                                case "center":
                                  u = (s - l) / 2;
                                  break;
                                case "right":
                                  u = h ? 0 : s - l;
                              }
                              for (
                                u += this.pathStartOffset * (h ? -1 : 1),
                                  n = h ? c.length - 1 : 0;
                                h ? n >= 0 : n < c.length;
                                h ? n-- : n++
                              )
                                (o = d[n]),
                                  u > s ? (u %= s) : u < 0 && (u += s),
                                  this._setGraphemeOnPath(u, o, a),
                                  (u += o.kernedWidth);
                            }
                            return { width: l, numOfSpaces: 0 };
                          },
                          _setGraphemeOnPath: function (t, n, i) {
                            var r = t + n.kernedWidth / 2,
                              o = this.path,
                              a = e.util.getPointOnPath(
                                o.path,
                                r,
                                o.segmentsInfo
                              );
                            (n.renderLeft = a.x - i.x),
                              (n.renderTop = a.y - i.y),
                              (n.angle =
                                a.angle +
                                ("right" === this.pathSide ? Math.PI : 0));
                          },
                          _getGraphemeBox: function (t, e, n, i, r) {
                            var o,
                              a = this.getCompleteStyleDeclaration(e, n),
                              s = i
                                ? this.getCompleteStyleDeclaration(e, n - 1)
                                : {},
                              l = this._measureChar(t, a, i, s),
                              c = l.kernedWidth,
                              d = l.width;
                            0 !== this.charSpacing &&
                              ((d += o = this._getWidthOfCharSpacing()),
                              (c += o));
                            var u = {
                              width: d,
                              left: 0,
                              height: a.fontSize,
                              kernedWidth: c,
                              deltaY: a.deltaY,
                            };
                            if (n > 0 && !r) {
                              var p = this.__charBounds[e][n - 1];
                              u.left =
                                p.left + p.width + l.kernedWidth - l.width;
                            }
                            return u;
                          },
                          getHeightOfLine: function (t) {
                            if (this.__lineHeights[t])
                              return this.__lineHeights[t];
                            for (
                              var e = this._textLines[t],
                                n = this.getHeightOfChar(t, 0),
                                i = 1,
                                r = e.length;
                              i < r;
                              i++
                            )
                              n = Math.max(this.getHeightOfChar(t, i), n);
                            return (this.__lineHeights[t] =
                              n * this.lineHeight * this._fontSizeMult);
                          },
                          calcTextHeight: function () {
                            for (
                              var t, e = 0, n = 0, i = this._textLines.length;
                              n < i;
                              n++
                            )
                              (t = this.getHeightOfLine(n)),
                                (e += n === i - 1 ? t / this.lineHeight : t);
                            return e;
                          },
                          _getLeftOffset: function () {
                            return "ltr" === this.direction
                              ? -this.width / 2
                              : this.width / 2;
                          },
                          _getTopOffset: function () {
                            return -this.height / 2;
                          },
                          _renderTextCommon: function (t, e) {
                            t.save();
                            for (
                              var n = 0,
                                i = this._getLeftOffset(),
                                r = this._getTopOffset(),
                                o = 0,
                                a = this._textLines.length;
                              o < a;
                              o++
                            ) {
                              var s = this.getHeightOfLine(o),
                                l = s / this.lineHeight,
                                c = this._getLineLeftOffset(o);
                              this._renderTextLine(
                                e,
                                t,
                                this._textLines[o],
                                i + c,
                                r + n + l,
                                o
                              ),
                                (n += s);
                            }
                            t.restore();
                          },
                          _renderTextFill: function (t) {
                            (this.fill || this.styleHas("fill")) &&
                              this._renderTextCommon(t, "fillText");
                          },
                          _renderTextStroke: function (t) {
                            ((this.stroke && 0 !== this.strokeWidth) ||
                              !this.isEmptyStyles()) &&
                              (this.shadow &&
                                !this.shadow.affectStroke &&
                                this._removeShadow(t),
                              t.save(),
                              this._setLineDash(t, this.strokeDashArray),
                              t.beginPath(),
                              this._renderTextCommon(t, "strokeText"),
                              t.closePath(),
                              t.restore());
                          },
                          _renderChars: function (t, e, n, i, r, o) {
                            var a,
                              s,
                              l,
                              c,
                              d,
                              u = this.getHeightOfLine(o),
                              p = -1 !== this.textAlign.indexOf("justify"),
                              h = "",
                              f = 0,
                              b = this.path,
                              m =
                                !p &&
                                0 === this.charSpacing &&
                                this.isEmptyStyles(o) &&
                                !b,
                              g = "ltr" === this.direction,
                              v = "ltr" === this.direction ? 1 : -1;
                            if (
                              (e.save(),
                              (r -=
                                (u * this._fontSizeFraction) / this.lineHeight),
                              m)
                            )
                              return (
                                e.canvas.setAttribute("dir", g ? "ltr" : "rtl"),
                                (e.direction = g ? "ltr" : "rtl"),
                                (e.textAlign = g ? "left" : "right"),
                                this._renderChar(
                                  t,
                                  e,
                                  o,
                                  0,
                                  n.join(""),
                                  i,
                                  r,
                                  u
                                ),
                                void e.restore()
                              );
                            for (var _ = 0, y = n.length - 1; _ <= y; _++)
                              (c = _ === y || this.charSpacing || b),
                                (h += n[_]),
                                (l = this.__charBounds[o][_]),
                                0 === f
                                  ? ((i += v * (l.kernedWidth - l.width)),
                                    (f += l.width))
                                  : (f += l.kernedWidth),
                                p &&
                                  !c &&
                                  this._reSpaceAndTab.test(n[_]) &&
                                  (c = !0),
                                c ||
                                  ((a =
                                    a ||
                                    this.getCompleteStyleDeclaration(o, _)),
                                  (s = this.getCompleteStyleDeclaration(
                                    o,
                                    _ + 1
                                  )),
                                  (c = this._hasStyleChanged(a, s))),
                                c &&
                                  (b
                                    ? (e.save(),
                                      e.translate(l.renderLeft, l.renderTop),
                                      e.rotate(l.angle),
                                      this._renderChar(
                                        t,
                                        e,
                                        o,
                                        _,
                                        h,
                                        -f / 2,
                                        0,
                                        u
                                      ),
                                      e.restore())
                                    : ((d = i),
                                      e.canvas.setAttribute(
                                        "dir",
                                        g ? "ltr" : "rtl"
                                      ),
                                      (e.direction = g ? "ltr" : "rtl"),
                                      (e.textAlign = g ? "left" : "right"),
                                      this._renderChar(t, e, o, _, h, d, r, u)),
                                  (h = ""),
                                  (a = s),
                                  (i += v * f),
                                  (f = 0));
                            e.restore();
                          },
                          _applyPatternGradientTransformText: function (t) {
                            var n,
                              i = e.util.createCanvasElement(),
                              r = this.width + this.strokeWidth,
                              o = this.height + this.strokeWidth;
                            return (
                              (i.width = r),
                              (i.height = o),
                              (n = i.getContext("2d")).beginPath(),
                              n.moveTo(0, 0),
                              n.lineTo(r, 0),
                              n.lineTo(r, o),
                              n.lineTo(0, o),
                              n.closePath(),
                              n.translate(r / 2, o / 2),
                              (n.fillStyle = t.toLive(n)),
                              this._applyPatternGradientTransform(n, t),
                              n.fill(),
                              n.createPattern(i, "no-repeat")
                            );
                          },
                          handleFiller: function (t, e, n) {
                            var i, r;
                            return n.toLive
                              ? "percentage" === n.gradientUnits ||
                                n.gradientTransform ||
                                n.patternTransform
                                ? ((i = -this.width / 2),
                                  (r = -this.height / 2),
                                  t.translate(i, r),
                                  (t[e] =
                                    this._applyPatternGradientTransformText(n)),
                                  { offsetX: i, offsetY: r })
                                : ((t[e] = n.toLive(t, this)),
                                  this._applyPatternGradientTransform(t, n))
                              : ((t[e] = n), { offsetX: 0, offsetY: 0 });
                          },
                          _setStrokeStyles: function (t, e) {
                            return (
                              (t.lineWidth = e.strokeWidth),
                              (t.lineCap = this.strokeLineCap),
                              (t.lineDashOffset = this.strokeDashOffset),
                              (t.lineJoin = this.strokeLineJoin),
                              (t.miterLimit = this.strokeMiterLimit),
                              this.handleFiller(t, "strokeStyle", e.stroke)
                            );
                          },
                          _setFillStyles: function (t, e) {
                            return this.handleFiller(t, "fillStyle", e.fill);
                          },
                          _renderChar: function (t, e, n, i, r, o, a) {
                            var s,
                              l,
                              c = this._getStyleDeclaration(n, i),
                              d = this.getCompleteStyleDeclaration(n, i),
                              u = "fillText" === t && d.fill,
                              p =
                                "strokeText" === t && d.stroke && d.strokeWidth;
                            (p || u) &&
                              (e.save(),
                              u && (s = this._setFillStyles(e, d)),
                              p && (l = this._setStrokeStyles(e, d)),
                              (e.font = this._getFontDeclaration(d)),
                              c &&
                                c.textBackgroundColor &&
                                this._removeShadow(e),
                              c && c.deltaY && (a += c.deltaY),
                              u && e.fillText(r, o - s.offsetX, a - s.offsetY),
                              p &&
                                e.strokeText(r, o - l.offsetX, a - l.offsetY),
                              e.restore());
                          },
                          setSuperscript: function (t, e) {
                            return this._setScript(t, e, this.superscript);
                          },
                          setSubscript: function (t, e) {
                            return this._setScript(t, e, this.subscript);
                          },
                          _setScript: function (t, e, n) {
                            var i = this.get2DCursorLocation(t, !0),
                              r = this.getValueOfPropertyAt(
                                i.lineIndex,
                                i.charIndex,
                                "fontSize"
                              ),
                              o = this.getValueOfPropertyAt(
                                i.lineIndex,
                                i.charIndex,
                                "deltaY"
                              ),
                              a = {
                                fontSize: r * n.size,
                                deltaY: o + r * n.baseline,
                              };
                            return this.setSelectionStyles(a, t, e), this;
                          },
                          _hasStyleChanged: function (t, e) {
                            return (
                              t.fill !== e.fill ||
                              t.stroke !== e.stroke ||
                              t.strokeWidth !== e.strokeWidth ||
                              t.fontSize !== e.fontSize ||
                              t.fontFamily !== e.fontFamily ||
                              t.fontWeight !== e.fontWeight ||
                              t.fontStyle !== e.fontStyle ||
                              t.deltaY !== e.deltaY
                            );
                          },
                          _hasStyleChangedForSvg: function (t, e) {
                            return (
                              this._hasStyleChanged(t, e) ||
                              t.overline !== e.overline ||
                              t.underline !== e.underline ||
                              t.linethrough !== e.linethrough
                            );
                          },
                          _getLineLeftOffset: function (t) {
                            var e = this.getLineWidth(t),
                              n = this.width - e,
                              i = this.textAlign,
                              r = this.direction,
                              o = 0,
                              a = this.isEndOfWrapping(t);
                            return "justify" === i ||
                              ("justify-center" === i && !a) ||
                              ("justify-right" === i && !a) ||
                              ("justify-left" === i && !a)
                              ? 0
                              : ("center" === i && (o = n / 2),
                                "right" === i && (o = n),
                                "justify-center" === i && (o = n / 2),
                                "justify-right" === i && (o = n),
                                "rtl" === r && (o -= n),
                                o);
                          },
                          _clearCache: function () {
                            (this.__lineWidths = []),
                              (this.__lineHeights = []),
                              (this.__charBounds = []);
                          },
                          _shouldClearDimensionCache: function () {
                            var t = this._forceClearCache;
                            return (
                              t ||
                                (t = this.hasStateChanged(
                                  "_dimensionAffectingProps"
                                )),
                              t &&
                                ((this.dirty = !0),
                                (this._forceClearCache = !1)),
                              t
                            );
                          },
                          getLineWidth: function (t) {
                            return this.__lineWidths[t]
                              ? this.__lineWidths[t]
                              : ((e =
                                  "" === this._textLines[t]
                                    ? 0
                                    : this.measureLine(t).width),
                                (this.__lineWidths[t] = e),
                                e);
                            var e;
                          },
                          _getWidthOfCharSpacing: function () {
                            return 0 !== this.charSpacing
                              ? (this.fontSize * this.charSpacing) / 1e3
                              : 0;
                          },
                          getValueOfPropertyAt: function (t, e, n) {
                            var i = this._getStyleDeclaration(t, e);
                            return i && void 0 !== i[n] ? i[n] : this[n];
                          },
                          _renderTextDecoration: function (t, e) {
                            if (this[e] || this.styleHas(e)) {
                              for (
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
                                  v = this._getLeftOffset(),
                                  _ = this._getTopOffset(),
                                  y = this.path,
                                  M = this._getWidthOfCharSpacing(),
                                  O = this.offsets[e],
                                  w = 0,
                                  A = this._textLines.length;
                                w < A;
                                w++
                              )
                                if (
                                  ((n = this.getHeightOfLine(w)),
                                  this[e] || this.styleHas(e, w))
                                ) {
                                  (l = this._textLines[w]),
                                    (b = n / this.lineHeight),
                                    (o = this._getLineLeftOffset(w)),
                                    (u = 0),
                                    (p = 0),
                                    (c = this.getValueOfPropertyAt(w, 0, e)),
                                    (g = this.getValueOfPropertyAt(
                                      w,
                                      0,
                                      "fill"
                                    )),
                                    (d = _ + b * (1 - this._fontSizeFraction)),
                                    (i = this.getHeightOfChar(w, 0)),
                                    (a = this.getValueOfPropertyAt(
                                      w,
                                      0,
                                      "deltaY"
                                    ));
                                  for (var x = 0, z = l.length; x < z; x++)
                                    if (
                                      ((h = this.__charBounds[w][x]),
                                      (f = this.getValueOfPropertyAt(w, x, e)),
                                      (m = this.getValueOfPropertyAt(
                                        w,
                                        x,
                                        "fill"
                                      )),
                                      (r = this.getHeightOfChar(w, x)),
                                      (s = this.getValueOfPropertyAt(
                                        w,
                                        x,
                                        "deltaY"
                                      )),
                                      y && f && m)
                                    )
                                      t.save(),
                                        (t.fillStyle = g),
                                        t.translate(h.renderLeft, h.renderTop),
                                        t.rotate(h.angle),
                                        t.fillRect(
                                          -h.kernedWidth / 2,
                                          O * r + s,
                                          h.kernedWidth,
                                          this.fontSize / 15
                                        ),
                                        t.restore();
                                    else if (
                                      (f !== c ||
                                        m !== g ||
                                        r !== i ||
                                        s !== a) &&
                                      p > 0
                                    ) {
                                      var C = v + o + u;
                                      "rtl" === this.direction &&
                                        (C = this.width - C - p),
                                        c &&
                                          g &&
                                          ((t.fillStyle = g),
                                          t.fillRect(
                                            C,
                                            d + O * i + a,
                                            p,
                                            this.fontSize / 15
                                          )),
                                        (u = h.left),
                                        (p = h.width),
                                        (c = f),
                                        (g = m),
                                        (i = r),
                                        (a = s);
                                    } else p += h.kernedWidth;
                                  (C = v + o + u),
                                    "rtl" === this.direction &&
                                      (C = this.width - C - p),
                                    (t.fillStyle = m),
                                    f &&
                                      m &&
                                      t.fillRect(
                                        C,
                                        d + O * i + a,
                                        p - M,
                                        this.fontSize / 15
                                      ),
                                    (_ += n);
                                } else _ += n;
                              this._removeShadow(t);
                            }
                          },
                          _getFontDeclaration: function (t, n) {
                            var i = t || this,
                              r = this.fontFamily,
                              o =
                                e.Text.genericFonts.indexOf(r.toLowerCase()) >
                                -1,
                              a =
                                void 0 === r ||
                                r.indexOf("'") > -1 ||
                                r.indexOf(",") > -1 ||
                                r.indexOf('"') > -1 ||
                                o
                                  ? i.fontFamily
                                  : '"' + i.fontFamily + '"';
                            return [
                              e.isLikelyNode ? i.fontWeight : i.fontStyle,
                              e.isLikelyNode ? i.fontStyle : i.fontWeight,
                              n
                                ? this.CACHE_FONT_SIZE + "px"
                                : i.fontSize + "px",
                              a,
                            ].join(" ");
                          },
                          render: function (t) {
                            this.visible &&
                              ((this.canvas &&
                                this.canvas.skipOffscreen &&
                                !this.group &&
                                !this.isOnScreen()) ||
                                (this._shouldClearDimensionCache() &&
                                  this.initDimensions(),
                                this.callSuper("render", t)));
                          },
                          _splitTextIntoLines: function (t) {
                            for (
                              var n = t.split(this._reNewline),
                                i = new Array(n.length),
                                r = ["\n"],
                                o = [],
                                a = 0;
                              a < n.length;
                              a++
                            )
                              (i[a] = e.util.string.graphemeSplit(n[a])),
                                (o = o.concat(i[a], r));
                            return (
                              o.pop(),
                              {
                                _unwrappedLines: i,
                                lines: n,
                                graphemeText: o,
                                graphemeLines: i,
                              }
                            );
                          },
                          toObject: function (t) {
                            var e = i.concat(t),
                              r = this.callSuper("toObject", e);
                            return (
                              (r.styles = n(this.styles, !0)),
                              r.path && (r.path = this.path.toObject()),
                              r
                            );
                          },
                          set: function (t, e) {
                            this.callSuper("set", t, e);
                            var n = !1,
                              i = !1;
                            if ("object" == typeof t)
                              for (var r in t)
                                "path" === r && this.setPathInfo(),
                                  (n =
                                    n ||
                                    -1 !==
                                      this._dimensionAffectingProps.indexOf(r)),
                                  (i = i || "path" === r);
                            else
                              (n =
                                -1 !==
                                this._dimensionAffectingProps.indexOf(t)),
                                (i = "path" === t);
                            return (
                              i && this.setPathInfo(),
                              n && (this.initDimensions(), this.setCoords()),
                              this
                            );
                          },
                          complexity: function () {
                            return 1;
                          },
                        })),
                          (e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                            "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(
                              " "
                            )
                          )),
                          (e.Text.DEFAULT_SVG_FONT_SIZE = 16),
                          (e.Text.fromElement = function (t, i, r) {
                            if (!t) return i(null);
                            var o = e.parseAttributes(
                                t,
                                e.Text.ATTRIBUTE_NAMES
                              ),
                              a = o.textAnchor || "left";
                            if (
                              (((r = e.util.object.extend(
                                r ? n(r) : {},
                                o
                              )).top = r.top || 0),
                              (r.left = r.left || 0),
                              o.textDecoration)
                            ) {
                              var s = o.textDecoration;
                              -1 !== s.indexOf("underline") &&
                                (r.underline = !0),
                                -1 !== s.indexOf("overline") &&
                                  (r.overline = !0),
                                -1 !== s.indexOf("line-through") &&
                                  (r.linethrough = !0),
                                delete r.textDecoration;
                            }
                            "dx" in o && (r.left += o.dx),
                              "dy" in o && (r.top += o.dy),
                              "fontSize" in r ||
                                (r.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
                            var l = "";
                            "textContent" in t
                              ? (l = t.textContent)
                              : "firstChild" in t &&
                                null !== t.firstChild &&
                                "data" in t.firstChild &&
                                null !== t.firstChild.data &&
                                (l = t.firstChild.data),
                              (l = l
                                .replace(/^\s+|\s+$|\n+/g, "")
                                .replace(/\s+/g, " "));
                            var c = r.strokeWidth;
                            r.strokeWidth = 0;
                            var d = new e.Text(l, r),
                              u = d.getScaledHeight() / d.height,
                              p =
                                ((d.height + d.strokeWidth) * d.lineHeight -
                                  d.height) *
                                u,
                              h = d.getScaledHeight() + p,
                              f = 0;
                            "center" === a && (f = d.getScaledWidth() / 2),
                              "right" === a && (f = d.getScaledWidth()),
                              d.set({
                                left: d.left - f,
                                top:
                                  d.top -
                                  (h -
                                    d.fontSize * (0.07 + d._fontSizeFraction)) /
                                    d.lineHeight,
                                strokeWidth: void 0 !== c ? c : 1,
                              }),
                              i(d);
                          }),
                          (e.Text.fromObject = function (t, i) {
                            var r = n(t),
                              o = t.path;
                            return (
                              delete r.path,
                              e.Object._fromObject(
                                "Text",
                                r,
                                function (t) {
                                  o
                                    ? e.Object._fromObject(
                                        "Path",
                                        o,
                                        function (e) {
                                          t.set("path", e), i(t);
                                        },
                                        "path"
                                      )
                                    : i(t);
                                },
                                "text"
                              )
                            );
                          }),
                          (e.Text.genericFonts = [
                            "sans-serif",
                            "serif",
                            "cursive",
                            "fantasy",
                            "monospace",
                          ]),
                          e.util.createAccessors &&
                            e.util.createAccessors(e.Text);
                      }
                    })(n),
                    z.util.object.extend(z.Text.prototype, {
                      isEmptyStyles: function (t) {
                        if (!this.styles) return !0;
                        if (void 0 !== t && !this.styles[t]) return !0;
                        var e =
                          void 0 === t ? this.styles : { line: this.styles[t] };
                        for (var n in e)
                          for (var i in e[n]) for (var r in e[n][i]) return !1;
                        return !0;
                      },
                      styleHas: function (t, e) {
                        if (!this.styles || !t || "" === t) return !1;
                        if (void 0 !== e && !this.styles[e]) return !1;
                        var n =
                          void 0 === e ? this.styles : { 0: this.styles[e] };
                        for (var i in n)
                          for (var r in n[i])
                            if (void 0 !== n[i][r][t]) return !0;
                        return !1;
                      },
                      cleanStyle: function (t) {
                        if (!this.styles || !t || "" === t) return !1;
                        var e,
                          n,
                          i = this.styles,
                          r = 0,
                          o = !0,
                          a = 0;
                        for (var s in i) {
                          for (var l in ((e = 0), i[s])) {
                            var c;
                            r++,
                              (c = i[s][l]).hasOwnProperty(t)
                                ? (n ? c[t] !== n && (o = !1) : (n = c[t]),
                                  c[t] === this[t] && delete c[t])
                                : (o = !1),
                              0 !== Object.keys(c).length
                                ? e++
                                : delete i[s][l];
                          }
                          0 === e && delete i[s];
                        }
                        for (var d = 0; d < this._textLines.length; d++)
                          a += this._textLines[d].length;
                        o && r === a && ((this[t] = n), this.removeStyle(t));
                      },
                      removeStyle: function (t) {
                        if (this.styles && t && "" !== t) {
                          var e,
                            n,
                            i,
                            r = this.styles;
                          for (n in r) {
                            for (i in (e = r[n]))
                              delete e[i][t],
                                0 === Object.keys(e[i]).length && delete e[i];
                            0 === Object.keys(e).length && delete r[n];
                          }
                        }
                      },
                      _extendStyles: function (t, e) {
                        var n = this.get2DCursorLocation(t);
                        this._getLineStyle(n.lineIndex) ||
                          this._setLineStyle(n.lineIndex),
                          this._getStyleDeclaration(n.lineIndex, n.charIndex) ||
                            this._setStyleDeclaration(
                              n.lineIndex,
                              n.charIndex,
                              {}
                            ),
                          z.util.object.extend(
                            this._getStyleDeclaration(n.lineIndex, n.charIndex),
                            e
                          );
                      },
                      get2DCursorLocation: function (t, e) {
                        void 0 === t && (t = this.selectionStart);
                        for (
                          var n = e
                              ? this._unwrappedTextLines
                              : this._textLines,
                            i = n.length,
                            r = 0;
                          r < i;
                          r++
                        ) {
                          if (t <= n[r].length)
                            return { lineIndex: r, charIndex: t };
                          t -= n[r].length + this.missingNewlineOffset(r);
                        }
                        return {
                          lineIndex: r - 1,
                          charIndex: n[r - 1].length < t ? n[r - 1].length : t,
                        };
                      },
                      getSelectionStyles: function (t, e, n) {
                        void 0 === t && (t = this.selectionStart || 0),
                          void 0 === e && (e = this.selectionEnd || t);
                        for (var i = [], r = t; r < e; r++)
                          i.push(this.getStyleAtPosition(r, n));
                        return i;
                      },
                      getStyleAtPosition: function (t, e) {
                        var n = this.get2DCursorLocation(t);
                        return (
                          (e
                            ? this.getCompleteStyleDeclaration(
                                n.lineIndex,
                                n.charIndex
                              )
                            : this._getStyleDeclaration(
                                n.lineIndex,
                                n.charIndex
                              )) || {}
                        );
                      },
                      setSelectionStyles: function (t, e, n) {
                        void 0 === e && (e = this.selectionStart || 0),
                          void 0 === n && (n = this.selectionEnd || e);
                        for (var i = e; i < n; i++) this._extendStyles(i, t);
                        return (this._forceClearCache = !0), this;
                      },
                      _getStyleDeclaration: function (t, e) {
                        var n = this.styles && this.styles[t];
                        return n ? n[e] : null;
                      },
                      getCompleteStyleDeclaration: function (t, e) {
                        for (
                          var n,
                            i = this._getStyleDeclaration(t, e) || {},
                            r = {},
                            o = 0;
                          o < this._styleProperties.length;
                          o++
                        )
                          r[(n = this._styleProperties[o])] =
                            void 0 === i[n] ? this[n] : i[n];
                        return r;
                      },
                      _setStyleDeclaration: function (t, e, n) {
                        this.styles[t][e] = n;
                      },
                      _deleteStyleDeclaration: function (t, e) {
                        delete this.styles[t][e];
                      },
                      _getLineStyle: function (t) {
                        return !!this.styles[t];
                      },
                      _setLineStyle: function (t) {
                        this.styles[t] = {};
                      },
                      _deleteLineStyle: function (t) {
                        delete this.styles[t];
                      },
                    }),
                    (function () {
                      function t(t) {
                        t.textDecoration &&
                          (t.textDecoration.indexOf("underline") > -1 &&
                            (t.underline = !0),
                          t.textDecoration.indexOf("line-through") > -1 &&
                            (t.linethrough = !0),
                          t.textDecoration.indexOf("overline") > -1 &&
                            (t.overline = !0),
                          delete t.textDecoration);
                      }
                      (z.IText = z.util.createClass(z.Text, z.Observable, {
                        type: "i-text",
                        selectionStart: 0,
                        selectionEnd: 0,
                        selectionColor: "rgba(17,119,255,0.3)",
                        isEditing: !1,
                        editable: !0,
                        editingBorderColor: "rgba(102,153,255,0.25)",
                        cursorWidth: 2,
                        cursorColor: "",
                        cursorDelay: 1e3,
                        cursorDuration: 600,
                        caching: !0,
                        hiddenTextareaContainer: null,
                        _reSpace: /\s|\n/,
                        _currentCursorOpacity: 0,
                        _selectionDirection: null,
                        _abortCursorAnimation: !1,
                        __widthOfSpace: [],
                        inCompositionMode: !1,
                        initialize: function (t, e) {
                          this.callSuper("initialize", t, e),
                            this.initBehavior();
                        },
                        setSelectionStart: function (t) {
                          (t = Math.max(t, 0)),
                            this._updateAndFire("selectionStart", t);
                        },
                        setSelectionEnd: function (t) {
                          (t = Math.min(t, this.text.length)),
                            this._updateAndFire("selectionEnd", t);
                        },
                        _updateAndFire: function (t, e) {
                          this[t] !== e &&
                            (this._fireSelectionChanged(), (this[t] = e)),
                            this._updateTextarea();
                        },
                        _fireSelectionChanged: function () {
                          this.fire("selection:changed"),
                            this.canvas &&
                              this.canvas.fire("text:selection:changed", {
                                target: this,
                              });
                        },
                        initDimensions: function () {
                          this.isEditing && this.initDelayedCursor(),
                            this.clearContextTop(),
                            this.callSuper("initDimensions");
                        },
                        render: function (t) {
                          this.clearContextTop(),
                            this.callSuper("render", t),
                            (this.cursorOffsetCache = {}),
                            this.renderCursorOrSelection();
                        },
                        _render: function (t) {
                          this.callSuper("_render", t);
                        },
                        clearContextTop: function (t) {
                          if (
                            this.isEditing &&
                            this.canvas &&
                            this.canvas.contextTop
                          ) {
                            var e = this.canvas.contextTop,
                              n = this.canvas.viewportTransform;
                            e.save(),
                              e.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                              this.transform(e),
                              this._clearTextArea(e),
                              t || e.restore();
                          }
                        },
                        renderCursorOrSelection: function () {
                          if (
                            this.isEditing &&
                            this.canvas &&
                            this.canvas.contextTop
                          ) {
                            var t = this._getCursorBoundaries(),
                              e = this.canvas.contextTop;
                            this.clearContextTop(!0),
                              this.selectionStart === this.selectionEnd
                                ? this.renderCursor(t, e)
                                : this.renderSelection(t, e),
                              e.restore();
                          }
                        },
                        _clearTextArea: function (t) {
                          var e = this.width + 4,
                            n = this.height + 4;
                          t.clearRect(-e / 2, -n / 2, e, n);
                        },
                        _getCursorBoundaries: function (t) {
                          void 0 === t && (t = this.selectionStart);
                          var e = this._getLeftOffset(),
                            n = this._getTopOffset(),
                            i = this._getCursorBoundariesOffsets(t);
                          return {
                            left: e,
                            top: n,
                            leftOffset: i.left,
                            topOffset: i.top,
                          };
                        },
                        _getCursorBoundariesOffsets: function (t) {
                          if (
                            this.cursorOffsetCache &&
                            "top" in this.cursorOffsetCache
                          )
                            return this.cursorOffsetCache;
                          var e,
                            n,
                            i,
                            r,
                            o = 0,
                            a = 0,
                            s = this.get2DCursorLocation(t);
                          (i = s.charIndex), (n = s.lineIndex);
                          for (var l = 0; l < n; l++)
                            o += this.getHeightOfLine(l);
                          e = this._getLineLeftOffset(n);
                          var c = this.__charBounds[n][i];
                          return (
                            c && (a = c.left),
                            0 !== this.charSpacing &&
                              i === this._textLines[n].length &&
                              (a -= this._getWidthOfCharSpacing()),
                            (r = { top: o, left: e + (a > 0 ? a : 0) }),
                            "rtl" === this.direction && (r.left *= -1),
                            (this.cursorOffsetCache = r),
                            this.cursorOffsetCache
                          );
                        },
                        renderCursor: function (t, e) {
                          var n = this.get2DCursorLocation(),
                            i = n.lineIndex,
                            r = n.charIndex > 0 ? n.charIndex - 1 : 0,
                            o = this.getValueOfPropertyAt(i, r, "fontSize"),
                            a = this.scaleX * this.canvas.getZoom(),
                            s = this.cursorWidth / a,
                            l = t.topOffset,
                            c = this.getValueOfPropertyAt(i, r, "deltaY");
                          (l +=
                            ((1 - this._fontSizeFraction) *
                              this.getHeightOfLine(i)) /
                              this.lineHeight -
                            o * (1 - this._fontSizeFraction)),
                            this.inCompositionMode &&
                              this.renderSelection(t, e),
                            (e.fillStyle =
                              this.cursorColor ||
                              this.getValueOfPropertyAt(i, r, "fill")),
                            (e.globalAlpha = this.__isMousedown
                              ? 1
                              : this._currentCursorOpacity),
                            e.fillRect(
                              t.left + t.leftOffset - s / 2,
                              l + t.top + c,
                              s,
                              o
                            );
                        },
                        renderSelection: function (t, e) {
                          for (
                            var n = this.inCompositionMode
                                ? this.hiddenTextarea.selectionStart
                                : this.selectionStart,
                              i = this.inCompositionMode
                                ? this.hiddenTextarea.selectionEnd
                                : this.selectionEnd,
                              r = -1 !== this.textAlign.indexOf("justify"),
                              o = this.get2DCursorLocation(n),
                              a = this.get2DCursorLocation(i),
                              s = o.lineIndex,
                              l = a.lineIndex,
                              c = o.charIndex < 0 ? 0 : o.charIndex,
                              d = a.charIndex < 0 ? 0 : a.charIndex,
                              u = s;
                            u <= l;
                            u++
                          ) {
                            var p,
                              h = this._getLineLeftOffset(u) || 0,
                              f = this.getHeightOfLine(u),
                              b = 0,
                              m = 0;
                            if (
                              (u === s && (b = this.__charBounds[s][c].left),
                              u >= s && u < l)
                            )
                              m =
                                r && !this.isEndOfWrapping(u)
                                  ? this.width
                                  : this.getLineWidth(u) || 5;
                            else if (u === l)
                              if (0 === d) m = this.__charBounds[l][d].left;
                              else {
                                var g = this._getWidthOfCharSpacing();
                                m =
                                  this.__charBounds[l][d - 1].left +
                                  this.__charBounds[l][d - 1].width -
                                  g;
                              }
                            (p = f),
                              (this.lineHeight < 1 ||
                                (u === l && this.lineHeight > 1)) &&
                                (f /= this.lineHeight);
                            var v = t.left + h + b,
                              _ = m - b,
                              y = f,
                              M = 0;
                            this.inCompositionMode
                              ? ((e.fillStyle =
                                  this.compositionColor || "black"),
                                (y = 1),
                                (M = f))
                              : (e.fillStyle = this.selectionColor),
                              "rtl" === this.direction &&
                                (v = this.width - v - _),
                              e.fillRect(v, t.top + t.topOffset + M, _, y),
                              (t.topOffset += p);
                          }
                        },
                        getCurrentCharFontSize: function () {
                          var t = this._getCurrentCharIndex();
                          return this.getValueOfPropertyAt(
                            t.l,
                            t.c,
                            "fontSize"
                          );
                        },
                        getCurrentCharColor: function () {
                          var t = this._getCurrentCharIndex();
                          return this.getValueOfPropertyAt(t.l, t.c, "fill");
                        },
                        _getCurrentCharIndex: function () {
                          var t = this.get2DCursorLocation(
                              this.selectionStart,
                              !0
                            ),
                            e = t.charIndex > 0 ? t.charIndex - 1 : 0;
                          return { l: t.lineIndex, c: e };
                        },
                      })),
                        (z.IText.fromObject = function (e, n) {
                          if ((t(e), e.styles))
                            for (var i in e.styles)
                              for (var r in e.styles[i]) t(e.styles[i][r]);
                          z.Object._fromObject("IText", e, n, "text");
                        });
                    })(),
                    (w = z.util.object.clone),
                    z.util.object.extend(z.IText.prototype, {
                      initBehavior: function () {
                        this.initAddedHandler(),
                          this.initRemovedHandler(),
                          this.initCursorSelectionHandlers(),
                          this.initDoubleClickSimulation(),
                          (this.mouseMoveHandler =
                            this.mouseMoveHandler.bind(this));
                      },
                      onDeselect: function () {
                        this.isEditing && this.exitEditing(),
                          (this.selected = !1);
                      },
                      initAddedHandler: function () {
                        var t = this;
                        this.on("added", function () {
                          var e = t.canvas;
                          e &&
                            (e._hasITextHandlers ||
                              ((e._hasITextHandlers = !0),
                              t._initCanvasHandlers(e)),
                            (e._iTextInstances = e._iTextInstances || []),
                            e._iTextInstances.push(t));
                        });
                      },
                      initRemovedHandler: function () {
                        var t = this;
                        this.on("removed", function () {
                          var e = t.canvas;
                          e &&
                            ((e._iTextInstances = e._iTextInstances || []),
                            z.util.removeFromArray(e._iTextInstances, t),
                            0 === e._iTextInstances.length &&
                              ((e._hasITextHandlers = !1),
                              t._removeCanvasHandlers(e)));
                        });
                      },
                      _initCanvasHandlers: function (t) {
                        (t._mouseUpITextHandler = function () {
                          t._iTextInstances &&
                            t._iTextInstances.forEach(function (t) {
                              t.__isMousedown = !1;
                            });
                        }),
                          t.on("mouse:up", t._mouseUpITextHandler);
                      },
                      _removeCanvasHandlers: function (t) {
                        t.off("mouse:up", t._mouseUpITextHandler);
                      },
                      _tick: function () {
                        this._currentTickState = this._animateCursor(
                          this,
                          1,
                          this.cursorDuration,
                          "_onTickComplete"
                        );
                      },
                      _animateCursor: function (t, e, n, i) {
                        var r;
                        return (
                          (r = {
                            isAborted: !1,
                            abort: function () {
                              this.isAborted = !0;
                            },
                          }),
                          t.animate("_currentCursorOpacity", e, {
                            duration: n,
                            onComplete: function () {
                              r.isAborted || t[i]();
                            },
                            onChange: function () {
                              t.canvas &&
                                t.selectionStart === t.selectionEnd &&
                                t.renderCursorOrSelection();
                            },
                            abort: function () {
                              return r.isAborted;
                            },
                          }),
                          r
                        );
                      },
                      _onTickComplete: function () {
                        var t = this;
                        this._cursorTimeout1 &&
                          clearTimeout(this._cursorTimeout1),
                          (this._cursorTimeout1 = setTimeout(function () {
                            t._currentTickCompleteState = t._animateCursor(
                              t,
                              0,
                              this.cursorDuration / 2,
                              "_tick"
                            );
                          }, 100));
                      },
                      initDelayedCursor: function (t) {
                        var e = this,
                          n = t ? 0 : this.cursorDelay;
                        this.abortCursorAnimation(),
                          (this._currentCursorOpacity = 1),
                          (this._cursorTimeout2 = setTimeout(function () {
                            e._tick();
                          }, n));
                      },
                      abortCursorAnimation: function () {
                        var t =
                            this._currentTickState ||
                            this._currentTickCompleteState,
                          e = this.canvas;
                        this._currentTickState &&
                          this._currentTickState.abort(),
                          this._currentTickCompleteState &&
                            this._currentTickCompleteState.abort(),
                          clearTimeout(this._cursorTimeout1),
                          clearTimeout(this._cursorTimeout2),
                          (this._currentCursorOpacity = 0),
                          t &&
                            e &&
                            e.clearContext(e.contextTop || e.contextContainer);
                      },
                      selectAll: function () {
                        return (
                          (this.selectionStart = 0),
                          (this.selectionEnd = this._text.length),
                          this._fireSelectionChanged(),
                          this._updateTextarea(),
                          this
                        );
                      },
                      getSelectedText: function () {
                        return this._text
                          .slice(this.selectionStart, this.selectionEnd)
                          .join("");
                      },
                      findWordBoundaryLeft: function (t) {
                        var e = 0,
                          n = t - 1;
                        if (this._reSpace.test(this._text[n]))
                          for (; this._reSpace.test(this._text[n]); ) e++, n--;
                        for (; /\S/.test(this._text[n]) && n > -1; ) e++, n--;
                        return t - e;
                      },
                      findWordBoundaryRight: function (t) {
                        var e = 0,
                          n = t;
                        if (this._reSpace.test(this._text[n]))
                          for (; this._reSpace.test(this._text[n]); ) e++, n++;
                        for (
                          ;
                          /\S/.test(this._text[n]) && n < this._text.length;

                        )
                          e++, n++;
                        return t + e;
                      },
                      findLineBoundaryLeft: function (t) {
                        for (
                          var e = 0, n = t - 1;
                          !/\n/.test(this._text[n]) && n > -1;

                        )
                          e++, n--;
                        return t - e;
                      },
                      findLineBoundaryRight: function (t) {
                        for (
                          var e = 0, n = t;
                          !/\n/.test(this._text[n]) && n < this._text.length;

                        )
                          e++, n++;
                        return t + e;
                      },
                      searchWordBoundary: function (t, e) {
                        for (
                          var n = this._text,
                            i = this._reSpace.test(n[t]) ? t - 1 : t,
                            r = n[i],
                            o = z.reNonWord;
                          !o.test(r) && i > 0 && i < n.length;

                        )
                          r = n[(i += e)];
                        return o.test(r) && (i += 1 === e ? 0 : 1), i;
                      },
                      selectWord: function (t) {
                        t = t || this.selectionStart;
                        var e = this.searchWordBoundary(t, -1),
                          n = this.searchWordBoundary(t, 1);
                        (this.selectionStart = e),
                          (this.selectionEnd = n),
                          this._fireSelectionChanged(),
                          this._updateTextarea(),
                          this.renderCursorOrSelection();
                      },
                      selectLine: function (t) {
                        t = t || this.selectionStart;
                        var e = this.findLineBoundaryLeft(t),
                          n = this.findLineBoundaryRight(t);
                        return (
                          (this.selectionStart = e),
                          (this.selectionEnd = n),
                          this._fireSelectionChanged(),
                          this._updateTextarea(),
                          this
                        );
                      },
                      enterEditing: function (t) {
                        if (!this.isEditing && this.editable)
                          return (
                            this.canvas &&
                              (this.canvas.calcOffset(),
                              this.exitEditingOnOthers(this.canvas)),
                            (this.isEditing = !0),
                            this.initHiddenTextarea(t),
                            this.hiddenTextarea.focus(),
                            (this.hiddenTextarea.value = this.text),
                            this._updateTextarea(),
                            this._saveEditingProps(),
                            this._setEditingProps(),
                            (this._textBeforeEdit = this.text),
                            this._tick(),
                            this.fire("editing:entered"),
                            this._fireSelectionChanged(),
                            this.canvas
                              ? (this.canvas.fire("text:editing:entered", {
                                  target: this,
                                }),
                                this.initMouseMoveHandler(),
                                this.canvas.requestRenderAll(),
                                this)
                              : this
                          );
                      },
                      exitEditingOnOthers: function (t) {
                        t._iTextInstances &&
                          t._iTextInstances.forEach(function (t) {
                            (t.selected = !1), t.isEditing && t.exitEditing();
                          });
                      },
                      initMouseMoveHandler: function () {
                        this.canvas.on("mouse:move", this.mouseMoveHandler);
                      },
                      mouseMoveHandler: function (t) {
                        if (this.__isMousedown && this.isEditing) {
                          var e = this.getSelectionStartFromPointer(t.e),
                            n = this.selectionStart,
                            i = this.selectionEnd;
                          ((e === this.__selectionStartOnMouseDown &&
                            n !== i) ||
                            (n !== e && i !== e)) &&
                            (e > this.__selectionStartOnMouseDown
                              ? ((this.selectionStart =
                                  this.__selectionStartOnMouseDown),
                                (this.selectionEnd = e))
                              : ((this.selectionStart = e),
                                (this.selectionEnd =
                                  this.__selectionStartOnMouseDown)),
                            (this.selectionStart === n &&
                              this.selectionEnd === i) ||
                              (this.restartCursorIfNeeded(),
                              this._fireSelectionChanged(),
                              this._updateTextarea(),
                              this.renderCursorOrSelection()));
                        }
                      },
                      _setEditingProps: function () {
                        (this.hoverCursor = "text"),
                          this.canvas &&
                            (this.canvas.defaultCursor =
                              this.canvas.moveCursor =
                                "text"),
                          (this.borderColor = this.editingBorderColor),
                          (this.hasControls = this.selectable = !1),
                          (this.lockMovementX = this.lockMovementY = !0);
                      },
                      fromStringToGraphemeSelection: function (t, e, n) {
                        var i = n.slice(0, t),
                          r = z.util.string.graphemeSplit(i).length;
                        if (t === e)
                          return { selectionStart: r, selectionEnd: r };
                        var o = n.slice(t, e);
                        return {
                          selectionStart: r,
                          selectionEnd:
                            r + z.util.string.graphemeSplit(o).length,
                        };
                      },
                      fromGraphemeToStringSelection: function (t, e, n) {
                        var i = n.slice(0, t).join("").length;
                        return t === e
                          ? { selectionStart: i, selectionEnd: i }
                          : {
                              selectionStart: i,
                              selectionEnd: i + n.slice(t, e).join("").length,
                            };
                      },
                      _updateTextarea: function () {
                        if (
                          ((this.cursorOffsetCache = {}), this.hiddenTextarea)
                        ) {
                          if (!this.inCompositionMode) {
                            var t = this.fromGraphemeToStringSelection(
                              this.selectionStart,
                              this.selectionEnd,
                              this._text
                            );
                            (this.hiddenTextarea.selectionStart =
                              t.selectionStart),
                              (this.hiddenTextarea.selectionEnd =
                                t.selectionEnd);
                          }
                          this.updateTextareaPosition();
                        }
                      },
                      updateFromTextArea: function () {
                        if (this.hiddenTextarea) {
                          (this.cursorOffsetCache = {}),
                            (this.text = this.hiddenTextarea.value),
                            this._shouldClearDimensionCache() &&
                              (this.initDimensions(), this.setCoords());
                          var t = this.fromStringToGraphemeSelection(
                            this.hiddenTextarea.selectionStart,
                            this.hiddenTextarea.selectionEnd,
                            this.hiddenTextarea.value
                          );
                          (this.selectionEnd = this.selectionStart =
                            t.selectionEnd),
                            this.inCompositionMode ||
                              (this.selectionStart = t.selectionStart),
                            this.updateTextareaPosition();
                        }
                      },
                      updateTextareaPosition: function () {
                        if (this.selectionStart === this.selectionEnd) {
                          var t = this._calcTextareaPosition();
                          (this.hiddenTextarea.style.left = t.left),
                            (this.hiddenTextarea.style.top = t.top);
                        }
                      },
                      _calcTextareaPosition: function () {
                        if (!this.canvas) return { x: 1, y: 1 };
                        var t = this.inCompositionMode
                            ? this.compositionStart
                            : this.selectionStart,
                          e = this._getCursorBoundaries(t),
                          n = this.get2DCursorLocation(t),
                          i = n.lineIndex,
                          r = n.charIndex,
                          o =
                            this.getValueOfPropertyAt(i, r, "fontSize") *
                            this.lineHeight,
                          a = e.leftOffset,
                          s = this.calcTransformMatrix(),
                          l = { x: e.left + a, y: e.top + e.topOffset + o },
                          c = this.canvas.getRetinaScaling(),
                          d = this.canvas.upperCanvasEl,
                          u = d.width / c,
                          p = d.height / c,
                          h = u - o,
                          f = p - o,
                          b = d.clientWidth / u,
                          m = d.clientHeight / p;
                        return (
                          (l = z.util.transformPoint(l, s)),
                          ((l = z.util.transformPoint(
                            l,
                            this.canvas.viewportTransform
                          )).x *= b),
                          (l.y *= m),
                          l.x < 0 && (l.x = 0),
                          l.x > h && (l.x = h),
                          l.y < 0 && (l.y = 0),
                          l.y > f && (l.y = f),
                          (l.x += this.canvas._offset.left),
                          (l.y += this.canvas._offset.top),
                          {
                            left: l.x + "px",
                            top: l.y + "px",
                            fontSize: o + "px",
                            charHeight: o,
                          }
                        );
                      },
                      _saveEditingProps: function () {
                        this._savedProps = {
                          hasControls: this.hasControls,
                          borderColor: this.borderColor,
                          lockMovementX: this.lockMovementX,
                          lockMovementY: this.lockMovementY,
                          hoverCursor: this.hoverCursor,
                          selectable: this.selectable,
                          defaultCursor:
                            this.canvas && this.canvas.defaultCursor,
                          moveCursor: this.canvas && this.canvas.moveCursor,
                        };
                      },
                      _restoreEditingProps: function () {
                        this._savedProps &&
                          ((this.hoverCursor = this._savedProps.hoverCursor),
                          (this.hasControls = this._savedProps.hasControls),
                          (this.borderColor = this._savedProps.borderColor),
                          (this.selectable = this._savedProps.selectable),
                          (this.lockMovementX = this._savedProps.lockMovementX),
                          (this.lockMovementY = this._savedProps.lockMovementY),
                          this.canvas &&
                            ((this.canvas.defaultCursor =
                              this._savedProps.defaultCursor),
                            (this.canvas.moveCursor =
                              this._savedProps.moveCursor)));
                      },
                      exitEditing: function () {
                        var t = this._textBeforeEdit !== this.text,
                          e = this.hiddenTextarea;
                        return (
                          (this.selected = !1),
                          (this.isEditing = !1),
                          (this.selectionEnd = this.selectionStart),
                          e &&
                            (e.blur && e.blur(),
                            e.parentNode && e.parentNode.removeChild(e)),
                          (this.hiddenTextarea = null),
                          this.abortCursorAnimation(),
                          this._restoreEditingProps(),
                          (this._currentCursorOpacity = 0),
                          this._shouldClearDimensionCache() &&
                            (this.initDimensions(), this.setCoords()),
                          this.fire("editing:exited"),
                          t && this.fire("modified"),
                          this.canvas &&
                            (this.canvas.off(
                              "mouse:move",
                              this.mouseMoveHandler
                            ),
                            this.canvas.fire("text:editing:exited", {
                              target: this,
                            }),
                            t &&
                              this.canvas.fire("object:modified", {
                                target: this,
                              })),
                          this
                        );
                      },
                      _removeExtraneousStyles: function () {
                        for (var t in this.styles)
                          this._textLines[t] || delete this.styles[t];
                      },
                      removeStyleFromTo: function (t, e) {
                        var n,
                          i,
                          r = this.get2DCursorLocation(t, !0),
                          o = this.get2DCursorLocation(e, !0),
                          a = r.lineIndex,
                          s = r.charIndex,
                          l = o.lineIndex,
                          c = o.charIndex;
                        if (a !== l) {
                          if (this.styles[a])
                            for (
                              n = s;
                              n < this._unwrappedTextLines[a].length;
                              n++
                            )
                              delete this.styles[a][n];
                          if (this.styles[l])
                            for (
                              n = c;
                              n < this._unwrappedTextLines[l].length;
                              n++
                            )
                              (i = this.styles[l][n]) &&
                                (this.styles[a] || (this.styles[a] = {}),
                                (this.styles[a][s + n - c] = i));
                          for (n = a + 1; n <= l; n++) delete this.styles[n];
                          this.shiftLineStyles(l, a - l);
                        } else if (this.styles[a]) {
                          i = this.styles[a];
                          var d,
                            u,
                            p = c - s;
                          for (n = s; n < c; n++) delete i[n];
                          for (u in this.styles[a])
                            (d = parseInt(u, 10)) >= c &&
                              ((i[d - p] = i[u]), delete i[u]);
                        }
                      },
                      shiftLineStyles: function (t, e) {
                        var n = w(this.styles);
                        for (var i in this.styles) {
                          var r = parseInt(i, 10);
                          r > t &&
                            ((this.styles[r + e] = n[r]),
                            n[r - e] || delete this.styles[r]);
                        }
                      },
                      restartCursorIfNeeded: function () {
                        (this._currentTickState &&
                          !this._currentTickState.isAborted &&
                          this._currentTickCompleteState &&
                          !this._currentTickCompleteState.isAborted) ||
                          this.initDelayedCursor();
                      },
                      insertNewlineStyleObject: function (t, e, n, i) {
                        var r,
                          o = {},
                          a = !1,
                          s = this._unwrappedTextLines[t].length === e;
                        for (var l in (n || (n = 1),
                        this.shiftLineStyles(t, n),
                        this.styles[t] &&
                          (r = this.styles[t][0 === e ? e : e - 1]),
                        this.styles[t])) {
                          var c = parseInt(l, 10);
                          c >= e &&
                            ((a = !0),
                            (o[c - e] = this.styles[t][l]),
                            (s && 0 === e) || delete this.styles[t][l]);
                        }
                        var d = !1;
                        for (
                          a && !s && ((this.styles[t + n] = o), (d = !0)),
                            d && n--;
                          n > 0;

                        )
                          i && i[n - 1]
                            ? (this.styles[t + n] = { 0: w(i[n - 1]) })
                            : r
                            ? (this.styles[t + n] = { 0: w(r) })
                            : delete this.styles[t + n],
                            n--;
                        this._forceClearCache = !0;
                      },
                      insertCharStyleObject: function (t, e, n, i) {
                        this.styles || (this.styles = {});
                        var r = this.styles[t],
                          o = r ? w(r) : {};
                        for (var a in (n || (n = 1), o)) {
                          var s = parseInt(a, 10);
                          s >= e &&
                            ((r[s + n] = o[s]), o[s - n] || delete r[s]);
                        }
                        if (((this._forceClearCache = !0), i))
                          for (; n--; )
                            Object.keys(i[n]).length &&
                              (this.styles[t] || (this.styles[t] = {}),
                              (this.styles[t][e + n] = w(i[n])));
                        else if (r)
                          for (var l = r[e ? e - 1 : 1]; l && n--; )
                            this.styles[t][e + n] = w(l);
                      },
                      insertNewStyleBlock: function (t, e, n) {
                        for (
                          var i = this.get2DCursorLocation(e, !0),
                            r = [0],
                            o = 0,
                            a = 0;
                          a < t.length;
                          a++
                        )
                          "\n" === t[a] ? (r[++o] = 0) : r[o]++;
                        for (
                          r[0] > 0 &&
                            (this.insertCharStyleObject(
                              i.lineIndex,
                              i.charIndex,
                              r[0],
                              n
                            ),
                            (n = n && n.slice(r[0] + 1))),
                            o &&
                              this.insertNewlineStyleObject(
                                i.lineIndex,
                                i.charIndex + r[0],
                                o
                              ),
                            a = 1;
                          a < o;
                          a++
                        )
                          r[a] > 0
                            ? this.insertCharStyleObject(
                                i.lineIndex + a,
                                0,
                                r[a],
                                n
                              )
                            : n && (this.styles[i.lineIndex + a][0] = n[0]),
                            (n = n && n.slice(r[a] + 1));
                        r[a] > 0 &&
                          this.insertCharStyleObject(
                            i.lineIndex + a,
                            0,
                            r[a],
                            n
                          );
                      },
                      setSelectionStartEndWithShift: function (t, e, n) {
                        n <= t
                          ? (e === t
                              ? (this._selectionDirection = "left")
                              : "right" === this._selectionDirection &&
                                ((this._selectionDirection = "left"),
                                (this.selectionEnd = t)),
                            (this.selectionStart = n))
                          : n > t && n < e
                          ? "right" === this._selectionDirection
                            ? (this.selectionEnd = n)
                            : (this.selectionStart = n)
                          : (e === t
                              ? (this._selectionDirection = "right")
                              : "left" === this._selectionDirection &&
                                ((this._selectionDirection = "right"),
                                (this.selectionStart = e)),
                            (this.selectionEnd = n));
                      },
                      setSelectionInBoundaries: function () {
                        var t = this.text.length;
                        this.selectionStart > t
                          ? (this.selectionStart = t)
                          : this.selectionStart < 0 &&
                            (this.selectionStart = 0),
                          this.selectionEnd > t
                            ? (this.selectionEnd = t)
                            : this.selectionEnd < 0 && (this.selectionEnd = 0);
                      },
                    }),
                    z.util.object.extend(z.IText.prototype, {
                      initDoubleClickSimulation: function () {
                        (this.__lastClickTime = +new Date()),
                          (this.__lastLastClickTime = +new Date()),
                          (this.__lastPointer = {}),
                          this.on("mousedown", this.onMouseDown);
                      },
                      onMouseDown: function (t) {
                        if (this.canvas) {
                          this.__newClickTime = +new Date();
                          var e = t.pointer;
                          this.isTripleClick(e) &&
                            (this.fire("tripleclick", t), this._stopEvent(t.e)),
                            (this.__lastLastClickTime = this.__lastClickTime),
                            (this.__lastClickTime = this.__newClickTime),
                            (this.__lastPointer = e),
                            (this.__lastIsEditing = this.isEditing),
                            (this.__lastSelected = this.selected);
                        }
                      },
                      isTripleClick: function (t) {
                        return (
                          this.__newClickTime - this.__lastClickTime < 500 &&
                          this.__lastClickTime - this.__lastLastClickTime <
                            500 &&
                          this.__lastPointer.x === t.x &&
                          this.__lastPointer.y === t.y
                        );
                      },
                      _stopEvent: function (t) {
                        t.preventDefault && t.preventDefault(),
                          t.stopPropagation && t.stopPropagation();
                      },
                      initCursorSelectionHandlers: function () {
                        this.initMousedownHandler(),
                          this.initMouseupHandler(),
                          this.initClicks();
                      },
                      doubleClickHandler: function (t) {
                        this.isEditing &&
                          this.selectWord(
                            this.getSelectionStartFromPointer(t.e)
                          );
                      },
                      tripleClickHandler: function (t) {
                        this.isEditing &&
                          this.selectLine(
                            this.getSelectionStartFromPointer(t.e)
                          );
                      },
                      initClicks: function () {
                        this.on("mousedblclick", this.doubleClickHandler),
                          this.on("tripleclick", this.tripleClickHandler);
                      },
                      _mouseDownHandler: function (t) {
                        !this.canvas ||
                          !this.editable ||
                          (t.e.button && 1 !== t.e.button) ||
                          ((this.__isMousedown = !0),
                          this.selected &&
                            ((this.inCompositionMode = !1),
                            this.setCursorByClick(t.e)),
                          this.isEditing &&
                            ((this.__selectionStartOnMouseDown =
                              this.selectionStart),
                            this.selectionStart === this.selectionEnd &&
                              this.abortCursorAnimation(),
                            this.renderCursorOrSelection()));
                      },
                      _mouseDownHandlerBefore: function (t) {
                        !this.canvas ||
                          !this.editable ||
                          (t.e.button && 1 !== t.e.button) ||
                          (this.selected = this === this.canvas._activeObject);
                      },
                      initMousedownHandler: function () {
                        this.on("mousedown", this._mouseDownHandler),
                          this.on(
                            "mousedown:before",
                            this._mouseDownHandlerBefore
                          );
                      },
                      initMouseupHandler: function () {
                        this.on("mouseup", this.mouseUpHandler);
                      },
                      mouseUpHandler: function (t) {
                        if (
                          ((this.__isMousedown = !1),
                          !(
                            !this.editable ||
                            this.group ||
                            (t.transform && t.transform.actionPerformed) ||
                            (t.e.button && 1 !== t.e.button)
                          ))
                        ) {
                          if (this.canvas) {
                            var e = this.canvas._activeObject;
                            if (e && e !== this) return;
                          }
                          this.__lastSelected && !this.__corner
                            ? ((this.selected = !1),
                              (this.__lastSelected = !1),
                              this.enterEditing(t.e),
                              this.selectionStart === this.selectionEnd
                                ? this.initDelayedCursor(!0)
                                : this.renderCursorOrSelection())
                            : (this.selected = !0);
                        }
                      },
                      setCursorByClick: function (t) {
                        var e = this.getSelectionStartFromPointer(t),
                          n = this.selectionStart,
                          i = this.selectionEnd;
                        t.shiftKey
                          ? this.setSelectionStartEndWithShift(n, i, e)
                          : ((this.selectionStart = e),
                            (this.selectionEnd = e)),
                          this.isEditing &&
                            (this._fireSelectionChanged(),
                            this._updateTextarea());
                      },
                      getSelectionStartFromPointer: function (t) {
                        for (
                          var e,
                            n = this.getLocalPointer(t),
                            i = 0,
                            r = 0,
                            o = 0,
                            a = 0,
                            s = 0,
                            l = 0,
                            c = this._textLines.length;
                          l < c && o <= n.y;
                          l++
                        )
                          (o += this.getHeightOfLine(l) * this.scaleY),
                            (s = l),
                            l > 0 &&
                              (a +=
                                this._textLines[l - 1].length +
                                this.missingNewlineOffset(l - 1));
                        (r = this._getLineLeftOffset(s) * this.scaleX),
                          (e = this._textLines[s]),
                          "rtl" === this.direction &&
                            (n.x = this.width * this.scaleX - n.x + r);
                        for (
                          var d = 0, u = e.length;
                          d < u &&
                          ((i = r),
                          (r +=
                            this.__charBounds[s][d].kernedWidth *
                            this.scaleX) <= n.x);
                          d++
                        )
                          a++;
                        return this._getNewSelectionStartFromOffset(
                          n,
                          i,
                          r,
                          a,
                          u
                        );
                      },
                      _getNewSelectionStartFromOffset: function (
                        t,
                        e,
                        n,
                        i,
                        r
                      ) {
                        var o = t.x - e,
                          a = n - t.x,
                          s = i + (a > o || a < 0 ? 0 : 1);
                        return (
                          this.flipX && (s = r - s),
                          s > this._text.length && (s = this._text.length),
                          s
                        );
                      },
                    }),
                    z.util.object.extend(z.IText.prototype, {
                      initHiddenTextarea: function () {
                        (this.hiddenTextarea =
                          z.document.createElement("textarea")),
                          this.hiddenTextarea.setAttribute(
                            "autocapitalize",
                            "off"
                          ),
                          this.hiddenTextarea.setAttribute(
                            "autocorrect",
                            "off"
                          ),
                          this.hiddenTextarea.setAttribute(
                            "autocomplete",
                            "off"
                          ),
                          this.hiddenTextarea.setAttribute(
                            "spellcheck",
                            "false"
                          ),
                          this.hiddenTextarea.setAttribute(
                            "data-fabric-hiddentextarea",
                            ""
                          ),
                          this.hiddenTextarea.setAttribute("wrap", "off");
                        var t = this._calcTextareaPosition();
                        (this.hiddenTextarea.style.cssText =
                          "position: absolute; top: " +
                          t.top +
                          "; left: " +
                          t.left +
                          "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " +
                          t.fontSize +
                          ";"),
                          this.hiddenTextareaContainer
                            ? this.hiddenTextareaContainer.appendChild(
                                this.hiddenTextarea
                              )
                            : z.document.body.appendChild(this.hiddenTextarea),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "keydown",
                            this.onKeyDown.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "keyup",
                            this.onKeyUp.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "input",
                            this.onInput.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "copy",
                            this.copy.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "cut",
                            this.copy.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "paste",
                            this.paste.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "compositionstart",
                            this.onCompositionStart.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "compositionupdate",
                            this.onCompositionUpdate.bind(this)
                          ),
                          z.util.addListener(
                            this.hiddenTextarea,
                            "compositionend",
                            this.onCompositionEnd.bind(this)
                          ),
                          !this._clickHandlerInitialized &&
                            this.canvas &&
                            (z.util.addListener(
                              this.canvas.upperCanvasEl,
                              "click",
                              this.onClick.bind(this)
                            ),
                            (this._clickHandlerInitialized = !0));
                      },
                      keysMap: {
                        9: "exitEditing",
                        27: "exitEditing",
                        33: "moveCursorUp",
                        34: "moveCursorDown",
                        35: "moveCursorRight",
                        36: "moveCursorLeft",
                        37: "moveCursorLeft",
                        38: "moveCursorUp",
                        39: "moveCursorRight",
                        40: "moveCursorDown",
                      },
                      keysMapRtl: {
                        9: "exitEditing",
                        27: "exitEditing",
                        33: "moveCursorUp",
                        34: "moveCursorDown",
                        35: "moveCursorLeft",
                        36: "moveCursorRight",
                        37: "moveCursorRight",
                        38: "moveCursorUp",
                        39: "moveCursorLeft",
                        40: "moveCursorDown",
                      },
                      ctrlKeysMapUp: { 67: "copy", 88: "cut" },
                      ctrlKeysMapDown: { 65: "selectAll" },
                      onClick: function () {
                        this.hiddenTextarea && this.hiddenTextarea.focus();
                      },
                      onKeyDown: function (t) {
                        if (this.isEditing) {
                          var e =
                            "rtl" === this.direction
                              ? this.keysMapRtl
                              : this.keysMap;
                          if (t.keyCode in e) this[e[t.keyCode]](t);
                          else {
                            if (
                              !(t.keyCode in this.ctrlKeysMapDown) ||
                              (!t.ctrlKey && !t.metaKey)
                            )
                              return;
                            this[this.ctrlKeysMapDown[t.keyCode]](t);
                          }
                          t.stopImmediatePropagation(),
                            t.preventDefault(),
                            t.keyCode >= 33 && t.keyCode <= 40
                              ? ((this.inCompositionMode = !1),
                                this.clearContextTop(),
                                this.renderCursorOrSelection())
                              : this.canvas && this.canvas.requestRenderAll();
                        }
                      },
                      onKeyUp: function (t) {
                        !this.isEditing ||
                        this._copyDone ||
                        this.inCompositionMode
                          ? (this._copyDone = !1)
                          : t.keyCode in this.ctrlKeysMapUp &&
                            (t.ctrlKey || t.metaKey) &&
                            (this[this.ctrlKeysMapUp[t.keyCode]](t),
                            t.stopImmediatePropagation(),
                            t.preventDefault(),
                            this.canvas && this.canvas.requestRenderAll());
                      },
                      onInput: function (t) {
                        var e = this.fromPaste;
                        if (
                          ((this.fromPaste = !1),
                          t && t.stopPropagation(),
                          this.isEditing)
                        ) {
                          var n,
                            i,
                            r,
                            o,
                            a,
                            s = this._splitTextIntoLines(
                              this.hiddenTextarea.value
                            ).graphemeText,
                            l = this._text.length,
                            c = s.length,
                            d = c - l,
                            u = this.selectionStart,
                            p = this.selectionEnd,
                            h = u !== p;
                          if ("" === this.hiddenTextarea.value)
                            return (
                              (this.styles = {}),
                              this.updateFromTextArea(),
                              this.fire("changed"),
                              void (
                                this.canvas &&
                                (this.canvas.fire("text:changed", {
                                  target: this,
                                }),
                                this.canvas.requestRenderAll())
                              )
                            );
                          var f = this.fromStringToGraphemeSelection(
                              this.hiddenTextarea.selectionStart,
                              this.hiddenTextarea.selectionEnd,
                              this.hiddenTextarea.value
                            ),
                            b = u > f.selectionStart;
                          h
                            ? ((n = this._text.slice(u, p)), (d += p - u))
                            : c < l &&
                              (n = b
                                ? this._text.slice(p + d, p)
                                : this._text.slice(u, u - d)),
                            (i = s.slice(f.selectionEnd - d, f.selectionEnd)),
                            n &&
                              n.length &&
                              (i.length &&
                                ((r = this.getSelectionStyles(u, u + 1, !1)),
                                (r = i.map(function () {
                                  return r[0];
                                }))),
                              h
                                ? ((o = u), (a = p))
                                : b
                                ? ((o = p - n.length), (a = p))
                                : ((o = p), (a = p + n.length)),
                              this.removeStyleFromTo(o, a)),
                            i.length &&
                              (e &&
                                i.join("") === z.copiedText &&
                                !z.disableStyleCopyPaste &&
                                (r = z.copiedTextStyle),
                              this.insertNewStyleBlock(i, u, r)),
                            this.updateFromTextArea(),
                            this.fire("changed"),
                            this.canvas &&
                              (this.canvas.fire("text:changed", {
                                target: this,
                              }),
                              this.canvas.requestRenderAll());
                        }
                      },
                      onCompositionStart: function () {
                        this.inCompositionMode = !0;
                      },
                      onCompositionEnd: function () {
                        this.inCompositionMode = !1;
                      },
                      onCompositionUpdate: function (t) {
                        (this.compositionStart = t.target.selectionStart),
                          (this.compositionEnd = t.target.selectionEnd),
                          this.updateTextareaPosition();
                      },
                      copy: function () {
                        this.selectionStart !== this.selectionEnd &&
                          ((z.copiedText = this.getSelectedText()),
                          z.disableStyleCopyPaste
                            ? (z.copiedTextStyle = null)
                            : (z.copiedTextStyle = this.getSelectionStyles(
                                this.selectionStart,
                                this.selectionEnd,
                                !0
                              )),
                          (this._copyDone = !0));
                      },
                      paste: function () {
                        this.fromPaste = !0;
                      },
                      _getClipboardData: function (t) {
                        return (t && t.clipboardData) || z.window.clipboardData;
                      },
                      _getWidthBeforeCursor: function (t, e) {
                        var n,
                          i = this._getLineLeftOffset(t);
                        return (
                          e > 0 &&
                            (i +=
                              (n = this.__charBounds[t][e - 1]).left + n.width),
                          i
                        );
                      },
                      getDownCursorOffset: function (t, e) {
                        var n = this._getSelectionForOffset(t, e),
                          i = this.get2DCursorLocation(n),
                          r = i.lineIndex;
                        if (
                          r === this._textLines.length - 1 ||
                          t.metaKey ||
                          34 === t.keyCode
                        )
                          return this._text.length - n;
                        var o = i.charIndex,
                          a = this._getWidthBeforeCursor(r, o),
                          s = this._getIndexOnLine(r + 1, a);
                        return (
                          this._textLines[r].slice(o).length +
                          s +
                          1 +
                          this.missingNewlineOffset(r)
                        );
                      },
                      _getSelectionForOffset: function (t, e) {
                        return t.shiftKey &&
                          this.selectionStart !== this.selectionEnd &&
                          e
                          ? this.selectionEnd
                          : this.selectionStart;
                      },
                      getUpCursorOffset: function (t, e) {
                        var n = this._getSelectionForOffset(t, e),
                          i = this.get2DCursorLocation(n),
                          r = i.lineIndex;
                        if (0 === r || t.metaKey || 33 === t.keyCode) return -n;
                        var o = i.charIndex,
                          a = this._getWidthBeforeCursor(r, o),
                          s = this._getIndexOnLine(r - 1, a),
                          l = this._textLines[r].slice(0, o),
                          c = this.missingNewlineOffset(r - 1);
                        return (
                          -this._textLines[r - 1].length +
                          s -
                          l.length +
                          (1 - c)
                        );
                      },
                      _getIndexOnLine: function (t, e) {
                        for (
                          var n,
                            i,
                            r = this._textLines[t],
                            o = this._getLineLeftOffset(t),
                            a = 0,
                            s = 0,
                            l = r.length;
                          s < l;
                          s++
                        )
                          if ((o += n = this.__charBounds[t][s].width) > e) {
                            i = !0;
                            var c = o - n,
                              d = o,
                              u = Math.abs(c - e);
                            a = Math.abs(d - e) < u ? s : s - 1;
                            break;
                          }
                        return i || (a = r.length - 1), a;
                      },
                      moveCursorDown: function (t) {
                        (this.selectionStart >= this._text.length &&
                          this.selectionEnd >= this._text.length) ||
                          this._moveCursorUpOrDown("Down", t);
                      },
                      moveCursorUp: function (t) {
                        (0 === this.selectionStart &&
                          0 === this.selectionEnd) ||
                          this._moveCursorUpOrDown("Up", t);
                      },
                      _moveCursorUpOrDown: function (t, e) {
                        var n = this["get" + t + "CursorOffset"](
                          e,
                          "right" === this._selectionDirection
                        );
                        e.shiftKey
                          ? this.moveCursorWithShift(n)
                          : this.moveCursorWithoutShift(n),
                          0 !== n &&
                            (this.setSelectionInBoundaries(),
                            this.abortCursorAnimation(),
                            (this._currentCursorOpacity = 1),
                            this.initDelayedCursor(),
                            this._fireSelectionChanged(),
                            this._updateTextarea());
                      },
                      moveCursorWithShift: function (t) {
                        var e =
                          "left" === this._selectionDirection
                            ? this.selectionStart + t
                            : this.selectionEnd + t;
                        return (
                          this.setSelectionStartEndWithShift(
                            this.selectionStart,
                            this.selectionEnd,
                            e
                          ),
                          0 !== t
                        );
                      },
                      moveCursorWithoutShift: function (t) {
                        return (
                          t < 0
                            ? ((this.selectionStart += t),
                              (this.selectionEnd = this.selectionStart))
                            : ((this.selectionEnd += t),
                              (this.selectionStart = this.selectionEnd)),
                          0 !== t
                        );
                      },
                      moveCursorLeft: function (t) {
                        (0 === this.selectionStart &&
                          0 === this.selectionEnd) ||
                          this._moveCursorLeftOrRight("Left", t);
                      },
                      _move: function (t, e, n) {
                        var i;
                        if (t.altKey) i = this["findWordBoundary" + n](this[e]);
                        else {
                          if (
                            !t.metaKey &&
                            35 !== t.keyCode &&
                            36 !== t.keyCode
                          )
                            return (this[e] += "Left" === n ? -1 : 1), !0;
                          i = this["findLineBoundary" + n](this[e]);
                        }
                        if (void 0 !== typeof i && this[e] !== i)
                          return (this[e] = i), !0;
                      },
                      _moveLeft: function (t, e) {
                        return this._move(t, e, "Left");
                      },
                      _moveRight: function (t, e) {
                        return this._move(t, e, "Right");
                      },
                      moveCursorLeftWithoutShift: function (t) {
                        var e = !0;
                        return (
                          (this._selectionDirection = "left"),
                          this.selectionEnd === this.selectionStart &&
                            0 !== this.selectionStart &&
                            (e = this._moveLeft(t, "selectionStart")),
                          (this.selectionEnd = this.selectionStart),
                          e
                        );
                      },
                      moveCursorLeftWithShift: function (t) {
                        return "right" === this._selectionDirection &&
                          this.selectionStart !== this.selectionEnd
                          ? this._moveLeft(t, "selectionEnd")
                          : 0 !== this.selectionStart
                          ? ((this._selectionDirection = "left"),
                            this._moveLeft(t, "selectionStart"))
                          : void 0;
                      },
                      moveCursorRight: function (t) {
                        (this.selectionStart >= this._text.length &&
                          this.selectionEnd >= this._text.length) ||
                          this._moveCursorLeftOrRight("Right", t);
                      },
                      _moveCursorLeftOrRight: function (t, e) {
                        var n = "moveCursor" + t + "With";
                        (this._currentCursorOpacity = 1),
                          e.shiftKey ? (n += "Shift") : (n += "outShift"),
                          this[n](e) &&
                            (this.abortCursorAnimation(),
                            this.initDelayedCursor(),
                            this._fireSelectionChanged(),
                            this._updateTextarea());
                      },
                      moveCursorRightWithShift: function (t) {
                        return "left" === this._selectionDirection &&
                          this.selectionStart !== this.selectionEnd
                          ? this._moveRight(t, "selectionStart")
                          : this.selectionEnd !== this._text.length
                          ? ((this._selectionDirection = "right"),
                            this._moveRight(t, "selectionEnd"))
                          : void 0;
                      },
                      moveCursorRightWithoutShift: function (t) {
                        var e = !0;
                        return (
                          (this._selectionDirection = "right"),
                          this.selectionStart === this.selectionEnd
                            ? ((e = this._moveRight(t, "selectionStart")),
                              (this.selectionEnd = this.selectionStart))
                            : (this.selectionStart = this.selectionEnd),
                          e
                        );
                      },
                      removeChars: function (t, e) {
                        void 0 === e && (e = t + 1),
                          this.removeStyleFromTo(t, e),
                          this._text.splice(t, e - t),
                          (this.text = this._text.join("")),
                          this.set("dirty", !0),
                          this._shouldClearDimensionCache() &&
                            (this.initDimensions(), this.setCoords()),
                          this._removeExtraneousStyles();
                      },
                      insertChars: function (t, e, n, i) {
                        void 0 === i && (i = n),
                          i > n && this.removeStyleFromTo(n, i);
                        var r = z.util.string.graphemeSplit(t);
                        this.insertNewStyleBlock(r, n, e),
                          (this._text = [].concat(
                            this._text.slice(0, n),
                            r,
                            this._text.slice(i)
                          )),
                          (this.text = this._text.join("")),
                          this.set("dirty", !0),
                          this._shouldClearDimensionCache() &&
                            (this.initDimensions(), this.setCoords()),
                          this._removeExtraneousStyles();
                      },
                    }),
                    (A = z.util.toFixed),
                    (x = /  +/g),
                    z.util.object.extend(z.Text.prototype, {
                      _toSVG: function () {
                        var t = this._getSVGLeftTopOffsets(),
                          e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                        return this._wrapSVGTextAndBg(e);
                      },
                      toSVG: function (t) {
                        return this._createBaseSVGMarkup(this._toSVG(), {
                          reviver: t,
                          noStyle: !0,
                          withShadow: !0,
                        });
                      },
                      _getSVGLeftTopOffsets: function () {
                        return {
                          textLeft: -this.width / 2,
                          textTop: -this.height / 2,
                          lineTop: this.getHeightOfLine(0),
                        };
                      },
                      _wrapSVGTextAndBg: function (t) {
                        var e = this.getSvgTextDecoration(this);
                        return [
                          t.textBgRects.join(""),
                          '\t\t<text xml:space="preserve" ',
                          this.fontFamily
                            ? 'font-family="' +
                              this.fontFamily.replace(/"/g, "'") +
                              '" '
                            : "",
                          this.fontSize
                            ? 'font-size="' + this.fontSize + '" '
                            : "",
                          this.fontStyle
                            ? 'font-style="' + this.fontStyle + '" '
                            : "",
                          this.fontWeight
                            ? 'font-weight="' + this.fontWeight + '" '
                            : "",
                          e ? 'text-decoration="' + e + '" ' : "",
                          'style="',
                          this.getSvgStyles(!0),
                          '"',
                          this.addPaintOrder(),
                          " >",
                          t.textSpans.join(""),
                          "</text>\n",
                        ];
                      },
                      _getSVGTextAndBg: function (t, e) {
                        var n,
                          i = [],
                          r = [],
                          o = t;
                        this._setSVGBg(r);
                        for (var a = 0, s = this._textLines.length; a < s; a++)
                          (n = this._getLineLeftOffset(a)),
                            (this.textBackgroundColor ||
                              this.styleHas("textBackgroundColor", a)) &&
                              this._setSVGTextLineBg(r, a, e + n, o),
                            this._setSVGTextLineText(i, a, e + n, o),
                            (o += this.getHeightOfLine(a));
                        return { textSpans: i, textBgRects: r };
                      },
                      _createTextCharSpan: function (t, e, n, i) {
                        var r = t !== t.trim() || t.match(x),
                          o = this.getSvgSpanStyles(e, r),
                          a = o ? 'style="' + o + '"' : "",
                          s = e.deltaY,
                          l = "",
                          c = z.Object.NUM_FRACTION_DIGITS;
                        return (
                          s && (l = ' dy="' + A(s, c) + '" '),
                          [
                            '<tspan x="',
                            A(n, c),
                            '" y="',
                            A(i, c),
                            '" ',
                            l,
                            a,
                            ">",
                            z.util.string.escapeXml(t),
                            "</tspan>",
                          ].join("")
                        );
                      },
                      _setSVGTextLineText: function (t, e, n, i) {
                        var r,
                          o,
                          a,
                          s,
                          l,
                          c = this.getHeightOfLine(e),
                          d = -1 !== this.textAlign.indexOf("justify"),
                          u = "",
                          p = 0,
                          h = this._textLines[e];
                        i +=
                          (c * (1 - this._fontSizeFraction)) / this.lineHeight;
                        for (var f = 0, b = h.length - 1; f <= b; f++)
                          (l = f === b || this.charSpacing),
                            (u += h[f]),
                            (a = this.__charBounds[e][f]),
                            0 === p
                              ? ((n += a.kernedWidth - a.width), (p += a.width))
                              : (p += a.kernedWidth),
                            d &&
                              !l &&
                              this._reSpaceAndTab.test(h[f]) &&
                              (l = !0),
                            l ||
                              ((r =
                                r || this.getCompleteStyleDeclaration(e, f)),
                              (o = this.getCompleteStyleDeclaration(e, f + 1)),
                              (l = this._hasStyleChangedForSvg(r, o))),
                            l &&
                              ((s = this._getStyleDeclaration(e, f) || {}),
                              t.push(this._createTextCharSpan(u, s, n, i)),
                              (u = ""),
                              (r = o),
                              (n += p),
                              (p = 0));
                      },
                      _pushTextBgRect: function (t, e, n, i, r, o) {
                        var a = z.Object.NUM_FRACTION_DIGITS;
                        t.push(
                          "\t\t<rect ",
                          this._getFillAttributes(e),
                          ' x="',
                          A(n, a),
                          '" y="',
                          A(i, a),
                          '" width="',
                          A(r, a),
                          '" height="',
                          A(o, a),
                          '"></rect>\n'
                        );
                      },
                      _setSVGTextLineBg: function (t, e, n, i) {
                        for (
                          var r,
                            o,
                            a = this._textLines[e],
                            s = this.getHeightOfLine(e) / this.lineHeight,
                            l = 0,
                            c = 0,
                            d = this.getValueOfPropertyAt(
                              e,
                              0,
                              "textBackgroundColor"
                            ),
                            u = 0,
                            p = a.length;
                          u < p;
                          u++
                        )
                          (r = this.__charBounds[e][u]),
                            (o = this.getValueOfPropertyAt(
                              e,
                              u,
                              "textBackgroundColor"
                            )) !== d
                              ? (d &&
                                  this._pushTextBgRect(t, d, n + c, i, l, s),
                                (c = r.left),
                                (l = r.width),
                                (d = o))
                              : (l += r.kernedWidth);
                        o && this._pushTextBgRect(t, o, n + c, i, l, s);
                      },
                      _getFillAttributes: function (t) {
                        var e = t && "string" == typeof t ? new z.Color(t) : "";
                        return e && e.getSource() && 1 !== e.getAlpha()
                          ? 'opacity="' +
                              e.getAlpha() +
                              '" fill="' +
                              e.setAlpha(1).toRgb() +
                              '"'
                          : 'fill="' + t + '"';
                      },
                      _getSVGLineTopOffset: function (t) {
                        for (var e, n = 0, i = 0; i < t; i++)
                          n += this.getHeightOfLine(i);
                        return (
                          (e = this.getHeightOfLine(i)),
                          {
                            lineTop: n,
                            offset:
                              ((this._fontSizeMult - this._fontSizeFraction) *
                                e) /
                              (this.lineHeight * this._fontSizeMult),
                          }
                        );
                      },
                      getSvgStyles: function (t) {
                        return (
                          z.Object.prototype.getSvgStyles.call(this, t) +
                          " white-space: pre;"
                        );
                      },
                    }),
                    (function (t) {
                      "use strict";
                      var e = t.fabric || (t.fabric = {});
                      (e.Textbox = e.util.createClass(e.IText, e.Observable, {
                        type: "textbox",
                        minWidth: 20,
                        dynamicMinWidth: 2,
                        __cachedLines: null,
                        lockScalingFlip: !0,
                        noScaleCache: !1,
                        _dimensionAffectingProps:
                          e.Text.prototype._dimensionAffectingProps.concat(
                            "width"
                          ),
                        _wordJoiners: /[ \t\r]/,
                        splitByGrapheme: !1,
                        initDimensions: function () {
                          this.__skipDimension ||
                            (this.isEditing && this.initDelayedCursor(),
                            this.clearContextTop(),
                            this._clearCache(),
                            (this.dynamicMinWidth = 0),
                            (this._styleMap = this._generateStyleMap(
                              this._splitText()
                            )),
                            this.dynamicMinWidth > this.width &&
                              this._set("width", this.dynamicMinWidth),
                            -1 !== this.textAlign.indexOf("justify") &&
                              this.enlargeSpaces(),
                            (this.height = this.calcTextHeight()),
                            this.saveState({
                              propertySet: "_dimensionAffectingProps",
                            }));
                        },
                        _generateStyleMap: function (t) {
                          for (
                            var e = 0, n = 0, i = 0, r = {}, o = 0;
                            o < t.graphemeLines.length;
                            o++
                          )
                            "\n" === t.graphemeText[i] && o > 0
                              ? ((n = 0), i++, e++)
                              : !this.splitByGrapheme &&
                                this._reSpaceAndTab.test(t.graphemeText[i]) &&
                                o > 0 &&
                                (n++, i++),
                              (r[o] = { line: e, offset: n }),
                              (i += t.graphemeLines[o].length),
                              (n += t.graphemeLines[o].length);
                          return r;
                        },
                        styleHas: function (t, n) {
                          if (this._styleMap && !this.isWrapping) {
                            var i = this._styleMap[n];
                            i && (n = i.line);
                          }
                          return e.Text.prototype.styleHas.call(this, t, n);
                        },
                        isEmptyStyles: function (t) {
                          if (!this.styles) return !0;
                          var e,
                            n,
                            i = 0,
                            r = !1,
                            o = this._styleMap[t],
                            a = this._styleMap[t + 1];
                          for (var s in (o && ((t = o.line), (i = o.offset)),
                          a && ((r = a.line === t), (e = a.offset)),
                          (n =
                            void 0 === t
                              ? this.styles
                              : { line: this.styles[t] })))
                            for (var l in n[s])
                              if (l >= i && (!r || l < e))
                                for (var c in n[s][l]) return !1;
                          return !0;
                        },
                        _getStyleDeclaration: function (t, e) {
                          if (this._styleMap && !this.isWrapping) {
                            var n = this._styleMap[t];
                            if (!n) return null;
                            (t = n.line), (e = n.offset + e);
                          }
                          return this.callSuper("_getStyleDeclaration", t, e);
                        },
                        _setStyleDeclaration: function (t, e, n) {
                          var i = this._styleMap[t];
                          (t = i.line),
                            (e = i.offset + e),
                            (this.styles[t][e] = n);
                        },
                        _deleteStyleDeclaration: function (t, e) {
                          var n = this._styleMap[t];
                          (t = n.line),
                            (e = n.offset + e),
                            delete this.styles[t][e];
                        },
                        _getLineStyle: function (t) {
                          var e = this._styleMap[t];
                          return !!this.styles[e.line];
                        },
                        _setLineStyle: function (t) {
                          var e = this._styleMap[t];
                          this.styles[e.line] = {};
                        },
                        _wrapText: function (t, e) {
                          var n,
                            i = [];
                          for (this.isWrapping = !0, n = 0; n < t.length; n++)
                            i = i.concat(this._wrapLine(t[n], n, e));
                          return (this.isWrapping = !1), i;
                        },
                        _measureWord: function (t, e, n) {
                          var i,
                            r = 0;
                          n = n || 0;
                          for (var o = 0, a = t.length; o < a; o++)
                            (r += this._getGraphemeBox(
                              t[o],
                              e,
                              o + n,
                              i,
                              !0
                            ).kernedWidth),
                              (i = t[o]);
                          return r;
                        },
                        _wrapLine: function (t, n, i, r) {
                          var o = 0,
                            a = this.splitByGrapheme,
                            s = [],
                            l = [],
                            c = a
                              ? e.util.string.graphemeSplit(t)
                              : t.split(this._wordJoiners),
                            d = "",
                            u = 0,
                            p = a ? "" : " ",
                            h = 0,
                            f = 0,
                            b = 0,
                            m = !0,
                            g = this._getWidthOfCharSpacing();
                          (r = r || 0), 0 === c.length && c.push([]), (i -= r);
                          for (var v = 0; v < c.length; v++)
                            (d = a ? c[v] : e.util.string.graphemeSplit(c[v])),
                              (h = this._measureWord(d, n, u)),
                              (u += d.length),
                              (o += f + h - g) > i && !m
                                ? (s.push(l), (l = []), (o = h), (m = !0))
                                : (o += g),
                              m || a || l.push(p),
                              (l = l.concat(d)),
                              (f = a ? 0 : this._measureWord([p], n, u)),
                              u++,
                              (m = !1),
                              h > b && (b = h);
                          return (
                            v && s.push(l),
                            b + r > this.dynamicMinWidth &&
                              (this.dynamicMinWidth = b - g + r),
                            s
                          );
                        },
                        isEndOfWrapping: function (t) {
                          return (
                            !this._styleMap[t + 1] ||
                            this._styleMap[t + 1].line !==
                              this._styleMap[t].line
                          );
                        },
                        missingNewlineOffset: function (t) {
                          return this.splitByGrapheme
                            ? this.isEndOfWrapping(t)
                              ? 1
                              : 0
                            : 1;
                        },
                        _splitTextIntoLines: function (t) {
                          for (
                            var n = e.Text.prototype._splitTextIntoLines.call(
                                this,
                                t
                              ),
                              i = this._wrapText(n.lines, this.width),
                              r = new Array(i.length),
                              o = 0;
                            o < i.length;
                            o++
                          )
                            r[o] = i[o].join("");
                          return (n.lines = r), (n.graphemeLines = i), n;
                        },
                        getMinWidth: function () {
                          return Math.max(this.minWidth, this.dynamicMinWidth);
                        },
                        _removeExtraneousStyles: function () {
                          var t = {};
                          for (var e in this._styleMap)
                            this._textLines[e] &&
                              (t[this._styleMap[e].line] = 1);
                          for (var e in this.styles)
                            t[e] || delete this.styles[e];
                        },
                        toObject: function (t) {
                          return this.callSuper(
                            "toObject",
                            ["minWidth", "splitByGrapheme"].concat(t)
                          );
                        },
                      })),
                        (e.Textbox.fromObject = function (t, n) {
                          return e.Object._fromObject("Textbox", t, n, "text");
                        });
                    })(n),
                    (function () {
                      var t = z.controlsUtils,
                        e = t.scaleSkewCursorStyleHandler,
                        n = t.scaleCursorStyleHandler,
                        i = t.scalingEqually,
                        r = t.scalingYOrSkewingX,
                        o = t.scalingXOrSkewingY,
                        a = t.scaleOrSkewActionName,
                        s = z.Object.prototype.controls;
                      if (
                        ((s.ml = new z.Control({
                          x: -0.5,
                          y: 0,
                          cursorStyleHandler: e,
                          actionHandler: o,
                          getActionName: a,
                        })),
                        (s.mr = new z.Control({
                          x: 0.5,
                          y: 0,
                          cursorStyleHandler: e,
                          actionHandler: o,
                          getActionName: a,
                        })),
                        (s.mb = new z.Control({
                          x: 0,
                          y: 0.5,
                          cursorStyleHandler: e,
                          actionHandler: r,
                          getActionName: a,
                        })),
                        (s.mt = new z.Control({
                          x: 0,
                          y: -0.5,
                          cursorStyleHandler: e,
                          actionHandler: r,
                          getActionName: a,
                        })),
                        (s.tl = new z.Control({
                          x: -0.5,
                          y: -0.5,
                          cursorStyleHandler: n,
                          actionHandler: i,
                        })),
                        (s.tr = new z.Control({
                          x: 0.5,
                          y: -0.5,
                          cursorStyleHandler: n,
                          actionHandler: i,
                        })),
                        (s.bl = new z.Control({
                          x: -0.5,
                          y: 0.5,
                          cursorStyleHandler: n,
                          actionHandler: i,
                        })),
                        (s.br = new z.Control({
                          x: 0.5,
                          y: 0.5,
                          cursorStyleHandler: n,
                          actionHandler: i,
                        })),
                        (s.mtr = new z.Control({
                          x: 0,
                          y: -0.5,
                          actionHandler: t.rotationWithSnapping,
                          cursorStyleHandler: t.rotationStyleHandler,
                          offsetY: -40,
                          withConnection: !0,
                          actionName: "rotate",
                        })),
                        z.Textbox)
                      ) {
                        var l = (z.Textbox.prototype.controls = {});
                        (l.mtr = s.mtr),
                          (l.tr = s.tr),
                          (l.br = s.br),
                          (l.tl = s.tl),
                          (l.bl = s.bl),
                          (l.mt = s.mt),
                          (l.mb = s.mb),
                          (l.mr = new z.Control({
                            x: 0.5,
                            y: 0,
                            actionHandler: t.changeWidth,
                            cursorStyleHandler: e,
                            actionName: "resizing",
                          })),
                          (l.ml = new z.Control({
                            x: -0.5,
                            y: 0,
                            actionHandler: t.changeWidth,
                            cursorStyleHandler: e,
                            actionName: "resizing",
                          }));
                      }
                    })();
                },
                3053: function (t, e, n) {
                  "use strict";
                  var i = n(602);
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
                8592: function (t, e, n) {
                  "use strict";
                  var i = n(602),
                    r = n(6092),
                    o = n(5573);
                  t.exports = function (t, e, n) {
                    i(t) ? r(t, e, n) : o(t, e, n);
                  };
                },
                6092: function (t) {
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
                5573: function (t) {
                  "use strict";
                  t.exports = function (t, e, n) {
                    var i;
                    for (i in ((n = n || null), t))
                      if (t.hasOwnProperty(i) && !1 === e.call(n, t[i], i, t))
                        break;
                  };
                },
                9052: function (t, e, n) {
                  "use strict";
                  var i = n(961),
                    r = n(9886),
                    o = n(2560),
                    a = n(5393),
                    s = n(602),
                    l = n(5183),
                    c = n(8592),
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
                      this._memorizeContext(n),
                        i.push(this._getHandlerItem(e, n));
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
                          !0 === e(t[i]) &&
                            (t.splice(i, 1), (n -= 1), (i -= 1));
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
                        if (!1 === (r = e[i]).handler.apply(r.context, n))
                          return !1;
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
                961: function (t) {
                  "use strict";
                  t.exports = function (t, e) {
                    var n,
                      i,
                      r,
                      o,
                      a = Object.prototype.hasOwnProperty;
                    for (r = 1, o = arguments.length; r < o; r += 1)
                      for (i in (n = arguments[r]))
                        a.call(n, i) && (t[i] = n[i]);
                    return t;
                  };
                },
                1610: function (t, e, n) {
                  "use strict";
                  var i = n(5695),
                    r = n(3778);
                  t.exports = function (t, e) {
                    for (
                      var n = arguments, o = n[0], a = 1, s = n.length;
                      a < s;
                      a += 1
                    ) {
                      if (i(o) || r(o)) return;
                      o = o[n[a]];
                    }
                    return o;
                  };
                },
                4564: function (t, e, n) {
                  "use strict";
                  var i = n(5573);
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
                4729: function (t, e, n) {
                  "use strict";
                  var i = n(5695),
                    r = n(4564);
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
                602: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return t instanceof Array;
                  };
                },
                9886: function (t, e, n) {
                  "use strict";
                  var i = n(5695),
                    r = n(3778);
                  t.exports = function (t) {
                    return !i(t) && !r(t);
                  };
                },
                5183: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return t instanceof Function;
                  };
                },
                3778: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return null === t;
                  };
                },
                5393: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return t === Object(t);
                  };
                },
                2560: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return "string" == typeof t || t instanceof String;
                  };
                },
                5695: function (t) {
                  "use strict";
                  t.exports = function (t) {
                    return void 0 === t;
                  };
                },
                4426: function (t, e, n) {
                  t.exports = n(4486);
                },
                9406: function (t, e, n) {
                  t.exports = n(4877);
                },
                789: function (t, e, n) {
                  t.exports = n(7178);
                },
                381: function (t, e, n) {
                  t.exports = n(5603);
                },
                7636: function (t, e, n) {
                  t.exports = n(1206);
                },
                1899: function (t, e, n) {
                  t.exports = n(6174);
                },
                899: function (t, e, n) {
                  t.exports = n(57);
                },
                8005: function (t, e, n) {
                  t.exports = n(4741);
                },
                6562: function (t, e, n) {
                  t.exports = n(8368);
                },
                9131: function (t, e, n) {
                  t.exports = n(3739);
                },
                4383: function (t, e, n) {
                  t.exports = n(172);
                },
                6065: function (t, e, n) {
                  t.exports = n(4963);
                },
                1734: function (t, e, n) {
                  t.exports = n(7820);
                },
                2461: function (t, e, n) {
                  t.exports = n(5636);
                },
                5214: function (t, e, n) {
                  t.exports = n(5059);
                },
                6397: function (t, e, n) {
                  t.exports = n(3969);
                },
                8189: function (t, e, n) {
                  t.exports = n(6618);
                },
                9146: function (t, e, n) {
                  t.exports = n(5279);
                },
                4496: function (t, e, n) {
                  t.exports = n(9562);
                },
                3972: function (t, e, n) {
                  t.exports = n(652);
                },
                7172: function (t, e, n) {
                  t.exports = n(2813);
                },
                1845: function (t, e, n) {
                  t.exports = n(8664);
                },
                662: function (t, e, n) {
                  t.exports = n(1457);
                },
                711: function (t, e, n) {
                  t.exports = n(2937);
                },
                6623: function (t, e, n) {
                  t.exports = n(9297);
                },
                7077: function (t, e, n) {
                  t.exports = n(8026);
                },
                9856: function (t, e, n) {
                  t.exports = n(2044);
                },
                4230: function (t, e, n) {
                  t.exports = n(2214);
                },
                184: function (t, e, n) {
                  t.exports = n(9256);
                },
                3742: function (t, e, n) {
                  t.exports = n(5659);
                },
                1801: function (t) {
                  var e = { rect: 1, circle: 2, triangle: 1 },
                    n = {
                      rect: { w: "width", h: "height" },
                      circle: { w: "rx", h: "ry" },
                      triangle: { w: "width", h: "height" },
                    };
                  function i(t, e, n) {
                    var i = t.x,
                      r = t.y,
                      o = e.x,
                      a = e.y,
                      s = (n * Math.PI) / 180;
                    return {
                      originX:
                        i > (o - i) * Math.cos(s) - (a - r) * Math.sin(s) + i
                          ? "right"
                          : "left",
                      originY:
                        r > (o - i) * Math.sin(s) + (a - r) * Math.cos(s) + r
                          ? "bottom"
                          : "top",
                    };
                  }
                  t.exports = {
                    setOrigins: function (t) {
                      var e = t.getPointByOrigin("left", "top"),
                        n = t.getPointByOrigin("right", "top"),
                        i = t.getPointByOrigin("right", "bottom"),
                        r = t.getPointByOrigin("left", "bottom");
                      t.origins = { lt: e, rt: n, rb: i, lb: r };
                    },
                    resize: function (t, r, o) {
                      (function (t) {
                        return "center" === t.originX && "center" === t.originY;
                      })(t) &&
                        ((function (t, e) {
                          var n = e.getPointByOrigin("center", "center"),
                            r = i(n, t, -e.angle),
                            o = r.originX,
                            a = r.originY,
                            s = e.getPointByOrigin(o, a),
                            l = e.left - (n.x - s.x),
                            c = e.top - (n.y - s.y);
                          e.set({ originX: o, originY: a, left: l, top: c }),
                            e.setCoords();
                        })(r, t),
                        (function (t) {
                          var e = t.originX,
                            n = t.originY,
                            i = e.substring(0, 1) + n.substring(0, 1);
                          t.startPoint = t.origins[i];
                        })(t)),
                        o
                          ? (function (t) {
                              var e = t.type,
                                i = t.scaleX,
                                r = t.scaleY,
                                o = n[e],
                                a = t[o.w] * i,
                                s = t[o.h] * r;
                              if (t.isRegular) {
                                var l = Math.max(i, r);
                                (a = t[o.w] * l), (s = t[o.h] * l);
                              }
                              var c = {
                                hasControls: !1,
                                hasBorders: !1,
                                scaleX: 1,
                                scaleY: 1,
                              };
                              (c[o.w] = a), (c[o.h] = s), t.set(c);
                            })(t)
                          : (function (t, i) {
                              var r = i.type,
                                o = i.strokeWidth,
                                a = i.startPoint,
                                s = e[r],
                                l = n[r],
                                c = !("triangle" !== i.type),
                                d = {},
                                u = Math.abs(a.x - t.x) / s,
                                p = Math.abs(a.y - t.y) / s;
                              u > o && (u -= o / s),
                                p > o && (p -= o / s),
                                i.isRegular &&
                                  ((u = p = Math.max(u, p)),
                                  c && (p = (Math.sqrt(3) / 2) * u)),
                                (d[l.w] = u),
                                (d[l.h] = p),
                                i.set(d);
                            })(r, t),
                        (function (t, e) {
                          var n = e.startPoint,
                            r = i(n, t, -e.angle),
                            o = r.originX,
                            a = r.originY;
                          e.setPositionByOrigin(n, o, a), e.setCoords();
                        })(r, t);
                    },
                    adjustOriginToCenter: function (t) {
                      var e = t.getPointByOrigin("center", "center"),
                        n = t.originX,
                        i = t.originY,
                        r = t.getPointByOrigin(n, i),
                        o = t.left + (e.x - r.x),
                        a = t.top + (e.y - r.y);
                      t.set({
                        hasControls: !0,
                        hasBorders: !0,
                        originX: "center",
                        originY: "center",
                        left: o,
                        top: a,
                      }),
                        t.setCoords();
                    },
                  };
                },
                2221: function (t, e, n) {
                  n(5454), n(9173);
                  var i = n(7545);
                  t.exports = i.Array.from;
                },
                5078: function (t, e, n) {
                  n(8118);
                  var i = n(7545);
                  t.exports = i.Array.isArray;
                },
                6135: function (t, e, n) {
                  n(9106);
                  var i = n(5607);
                  t.exports = i("Array").concat;
                },
                9510: function (t, e, n) {
                  n(1710);
                  var i = n(5607);
                  t.exports = i("Array").fill;
                },
                3971: function (t, e, n) {
                  n(3436);
                  var i = n(5607);
                  t.exports = i("Array").filter;
                },
                98: function (t, e, n) {
                  n(9823);
                  var i = n(5607);
                  t.exports = i("Array").forEach;
                },
                2089: function (t, e, n) {
                  n(2276);
                  var i = n(5607);
                  t.exports = i("Array").indexOf;
                },
                6209: function (t, e, n) {
                  n(3838);
                  var i = n(5607);
                  t.exports = i("Array").map;
                },
                2671: function (t, e, n) {
                  n(5818);
                  var i = n(5607);
                  t.exports = i("Array").slice;
                },
                1375: function (t, e, n) {
                  n(2178);
                  var i = n(5607);
                  t.exports = i("Array").splice;
                },
                3528: function (t, e, n) {
                  n(665);
                  var i = n(5607);
                  t.exports = i("Function").bind;
                },
                5739: function (t, e, n) {
                  n(8939), n(5454);
                  var i = n(8703);
                  t.exports = i;
                },
                278: function (t, e, n) {
                  var i = n(3528),
                    r = Function.prototype;
                  t.exports = function (t) {
                    var e = t.bind;
                    return t === r || (t instanceof Function && e === r.bind)
                      ? i
                      : e;
                  };
                },
                1484: function (t, e, n) {
                  var i = n(6135),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.concat;
                    return t === r || (t instanceof Array && e === r.concat)
                      ? i
                      : e;
                  };
                },
                7731: function (t, e, n) {
                  var i = n(9510),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.fill;
                    return t === r || (t instanceof Array && e === r.fill)
                      ? i
                      : e;
                  };
                },
                3669: function (t, e, n) {
                  var i = n(3971),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.filter;
                    return t === r || (t instanceof Array && e === r.filter)
                      ? i
                      : e;
                  };
                },
                2604: function (t, e, n) {
                  var i = n(2089),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.indexOf;
                    return t === r || (t instanceof Array && e === r.indexOf)
                      ? i
                      : e;
                  };
                },
                263: function (t, e, n) {
                  var i = n(6209),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.map;
                    return t === r || (t instanceof Array && e === r.map)
                      ? i
                      : e;
                  };
                },
                7663: function (t, e, n) {
                  var i = n(2671),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.slice;
                    return t === r || (t instanceof Array && e === r.slice)
                      ? i
                      : e;
                  };
                },
                5063: function (t, e, n) {
                  var i = n(1375),
                    r = Array.prototype;
                  t.exports = function (t) {
                    var e = t.splice;
                    return t === r || (t instanceof Array && e === r.splice)
                      ? i
                      : e;
                  };
                },
                6813: function (t, e, n) {
                  var i = n(3842),
                    r = String.prototype;
                  t.exports = function (t) {
                    var e = t.trim;
                    return "string" == typeof t ||
                      t === r ||
                      (t instanceof String && e === r.trim)
                      ? i
                      : e;
                  };
                },
                6285: function (t, e, n) {
                  n(2666);
                  var i = n(7545);
                  t.exports = i.Number.parseInt;
                },
                3213: function (t, e, n) {
                  n(3113);
                  var i = n(7545).Object;
                  t.exports = function (t, e) {
                    return i.create(t, e);
                  };
                },
                3512: function (t, e, n) {
                  n(297);
                  var i = n(7545).Object,
                    r = (t.exports = function (t, e, n) {
                      return i.defineProperty(t, e, n);
                    });
                  i.defineProperty.sham && (r.sham = !0);
                },
                8168: function (t, e, n) {
                  n(9234);
                  var i = n(7545);
                  t.exports = i.Object.getPrototypeOf;
                },
                8651: function (t, e, n) {
                  n(2647);
                  var i = n(7545);
                  t.exports = i.Object.keys;
                },
                3083: function (t, e, n) {
                  n(3222);
                  var i = n(7545);
                  t.exports = i.Object.setPrototypeOf;
                },
                2987: function (t, e, n) {
                  n(4859);
                  var i = n(7545);
                  t.exports = i.parseFloat;
                },
                2239: function (t, e, n) {
                  n(5706);
                  var i = n(7545);
                  t.exports = i.parseInt;
                },
                3154: function (t, e, n) {
                  n(4242),
                    n(8939),
                    n(6663),
                    n(9021),
                    n(7884),
                    n(8885),
                    n(1868),
                    n(5454);
                  var i = n(7545);
                  t.exports = i.Promise;
                },
                6577: function (t, e, n) {
                  n(5397);
                  var i = n(7545);
                  t.exports = i.Reflect.construct;
                },
                3842: function (t, e, n) {
                  n(957);
                  var i = n(5607);
                  t.exports = i("String").trim;
                },
                5008: function (t, e, n) {
                  n(9106),
                    n(6663),
                    n(6187),
                    n(9781),
                    n(492),
                    n(6681),
                    n(9594),
                    n(3665),
                    n(9017),
                    n(1250),
                    n(9786),
                    n(503),
                    n(6565),
                    n(9322),
                    n(3610),
                    n(6886),
                    n(3514),
                    n(8671),
                    n(8556),
                    n(1367);
                  var i = n(7545);
                  t.exports = i.Symbol;
                },
                994: function (t, e, n) {
                  n(8939), n(6663), n(5454), n(3665);
                  var i = n(9207);
                  t.exports = i.f("iterator");
                },
                2813: function (t, e, n) {
                  var i = n(3822);
                  t.exports = i;
                },
                8664: function (t, e, n) {
                  var i = n(1434);
                  t.exports = i;
                },
                1457: function (t, e, n) {
                  var i = n(7710);
                  t.exports = i;
                },
                2937: function (t, e, n) {
                  var i = n(4741);
                  t.exports = i;
                },
                9297: function (t, e, n) {
                  var i = n(4963);
                  t.exports = i;
                },
                8026: function (t, e, n) {
                  var i = n(7820);
                  t.exports = i;
                },
                2044: function (t, e, n) {
                  var i = n(8980);
                  t.exports = i;
                },
                2214: function (t, e, n) {
                  var i = n(6672);
                  t.exports = i;
                },
                9256: function (t, e, n) {
                  var i = n(2285);
                  n(177),
                    n(9031),
                    n(6658),
                    n(1875),
                    n(8658),
                    n(4592),
                    n(6680),
                    (t.exports = i);
                },
                5659: function (t, e, n) {
                  var i = n(8535);
                  t.exports = i;
                },
                6235: function (t, e, n) {
                  var i = n(6447),
                    r = n(9288);
                  t.exports = function (t) {
                    if (i(t)) return t;
                    throw TypeError(r(t) + " is not a function");
                  };
                },
                1404: function (t, e, n) {
                  var i = n(2091),
                    r = n(9288);
                  t.exports = function (t) {
                    if (i(t)) return t;
                    throw TypeError(r(t) + " is not a constructor");
                  };
                },
                7757: function (t, e, n) {
                  var i = n(6447);
                  t.exports = function (t) {
                    if ("object" == typeof t || i(t)) return t;
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                  };
                },
                7423: function (t) {
                  t.exports = function () {};
                },
                6961: function (t) {
                  t.exports = function (t, e, n) {
                    if (t instanceof e) return t;
                    throw TypeError(
                      "Incorrect " + (n ? n + " " : "") + "invocation"
                    );
                  };
                },
                1138: function (t, e, n) {
                  var i = n(5744);
                  t.exports = function (t) {
                    if (i(t)) return t;
                    throw TypeError(String(t) + " is not an object");
                  };
                },
                2724: function (t, e, n) {
                  "use strict";
                  var i = n(1795),
                    r = n(7739),
                    o = n(4104);
                  t.exports = function (t) {
                    for (
                      var e = i(this),
                        n = o(e),
                        a = arguments.length,
                        s = r(a > 1 ? arguments[1] : void 0, n),
                        l = a > 2 ? arguments[2] : void 0,
                        c = void 0 === l ? n : r(l, n);
                      c > s;

                    )
                      e[s++] = t;
                    return e;
                  };
                },
                7397: function (t, e, n) {
                  "use strict";
                  var i = n(454).forEach,
                    r = n(424)("forEach");
                  t.exports = r
                    ? [].forEach
                    : function (t) {
                        return i(
                          this,
                          t,
                          arguments.length > 1 ? arguments[1] : void 0
                        );
                      };
                },
                841: function (t, e, n) {
                  "use strict";
                  var i = n(8043),
                    r = n(1795),
                    o = n(1635),
                    a = n(6109),
                    s = n(2091),
                    l = n(4104),
                    c = n(9361),
                    d = n(1669),
                    u = n(8703);
                  t.exports = function (t) {
                    var e = r(t),
                      n = s(this),
                      p = arguments.length,
                      h = p > 1 ? arguments[1] : void 0,
                      f = void 0 !== h;
                    f && (h = i(h, p > 2 ? arguments[2] : void 0, 2));
                    var b,
                      m,
                      g,
                      v,
                      _,
                      y,
                      M = u(e),
                      O = 0;
                    if (!M || (this == Array && a(M)))
                      for (b = l(e), m = n ? new this(b) : Array(b); b > O; O++)
                        (y = f ? h(e[O], O) : e[O]), c(m, O, y);
                    else
                      for (
                        _ = (v = d(e, M)).next, m = n ? new this() : [];
                        !(g = _.call(v)).done;
                        O++
                      )
                        (y = f ? o(v, h, [g.value, O], !0) : g.value),
                          c(m, O, y);
                    return (m.length = O), m;
                  };
                },
                8180: function (t, e, n) {
                  var i = n(101),
                    r = n(7739),
                    o = n(4104),
                    a = function (t) {
                      return function (e, n, a) {
                        var s,
                          l = i(e),
                          c = o(l),
                          d = r(a, c);
                        if (t && n != n) {
                          for (; c > d; ) if ((s = l[d++]) != s) return !0;
                        } else
                          for (; c > d; d++)
                            if ((t || d in l) && l[d] === n) return t || d || 0;
                        return !t && -1;
                      };
                    };
                  t.exports = { includes: a(!0), indexOf: a(!1) };
                },
                454: function (t, e, n) {
                  var i = n(8043),
                    r = n(2202),
                    o = n(1795),
                    a = n(4104),
                    s = n(1321),
                    l = [].push,
                    c = function (t) {
                      var e = 1 == t,
                        n = 2 == t,
                        c = 3 == t,
                        d = 4 == t,
                        u = 6 == t,
                        p = 7 == t,
                        h = 5 == t || u;
                      return function (f, b, m, g) {
                        for (
                          var v,
                            _,
                            y = o(f),
                            M = r(y),
                            O = i(b, m, 3),
                            w = a(M),
                            A = 0,
                            x = g || s,
                            z = e ? x(f, w) : n || p ? x(f, 0) : void 0;
                          w > A;
                          A++
                        )
                          if ((h || A in M) && ((_ = O((v = M[A]), A, y)), t))
                            if (e) z[A] = _;
                            else if (_)
                              switch (t) {
                                case 3:
                                  return !0;
                                case 5:
                                  return v;
                                case 6:
                                  return A;
                                case 2:
                                  l.call(z, v);
                              }
                            else
                              switch (t) {
                                case 4:
                                  return !1;
                                case 7:
                                  l.call(z, v);
                              }
                        return u ? -1 : c || d ? d : z;
                      };
                    };
                  t.exports = {
                    forEach: c(0),
                    map: c(1),
                    filter: c(2),
                    some: c(3),
                    every: c(4),
                    find: c(5),
                    findIndex: c(6),
                    filterReject: c(7),
                  };
                },
                242: function (t, e, n) {
                  var i = n(6192),
                    r = n(8182),
                    o = n(4218),
                    a = r("species");
                  t.exports = function (t) {
                    return (
                      o >= 51 ||
                      !i(function () {
                        var e = [];
                        return (
                          ((e.constructor = {})[a] = function () {
                            return { foo: 1 };
                          }),
                          1 !== e[t](Boolean).foo
                        );
                      })
                    );
                  };
                },
                424: function (t, e, n) {
                  "use strict";
                  var i = n(6192);
                  t.exports = function (t, e) {
                    var n = [][t];
                    return (
                      !!n &&
                      i(function () {
                        n.call(
                          null,
                          e ||
                            function () {
                              throw 1;
                            },
                          1
                        );
                      })
                    );
                  };
                },
                3712: function (t, e, n) {
                  var i = n(4770),
                    r = n(2091),
                    o = n(5744),
                    a = n(8182)("species");
                  t.exports = function (t) {
                    var e;
                    return (
                      i(t) &&
                        ((e = t.constructor),
                        ((r(e) && (e === Array || i(e.prototype))) ||
                          (o(e) && null === (e = e[a]))) &&
                          (e = void 0)),
                      void 0 === e ? Array : e
                    );
                  };
                },
                1321: function (t, e, n) {
                  var i = n(3712);
                  t.exports = function (t, e) {
                    return new (i(t))(0 === e ? 0 : e);
                  };
                },
                1635: function (t, e, n) {
                  var i = n(1138),
                    r = n(6639);
                  t.exports = function (t, e, n, o) {
                    try {
                      return o ? e(i(n)[0], n[1]) : e(n);
                    } catch (e) {
                      r(t, "throw", e);
                    }
                  };
                },
                9770: function (t, e, n) {
                  var i = n(8182)("iterator"),
                    r = !1;
                  try {
                    var o = 0,
                      a = {
                        next: function () {
                          return { done: !!o++ };
                        },
                        return: function () {
                          r = !0;
                        },
                      };
                    (a[i] = function () {
                      return this;
                    }),
                      Array.from(a, function () {
                        throw 2;
                      });
                  } catch (t) {}
                  t.exports = function (t, e) {
                    if (!e && !r) return !1;
                    var n = !1;
                    try {
                      var o = {};
                      (o[i] = function () {
                        return {
                          next: function () {
                            return { done: (n = !0) };
                          },
                        };
                      }),
                        t(o);
                    } catch (t) {}
                    return n;
                  };
                },
                9272: function (t) {
                  var e = {}.toString;
                  t.exports = function (t) {
                    return e.call(t).slice(8, -1);
                  };
                },
                4696: function (t, e, n) {
                  var i = n(3471),
                    r = n(6447),
                    o = n(9272),
                    a = n(8182)("toStringTag"),
                    s =
                      "Arguments" ==
                      o(
                        (function () {
                          return arguments;
                        })()
                      );
                  t.exports = i
                    ? o
                    : function (t) {
                        var e, n, i;
                        return void 0 === t
                          ? "Undefined"
                          : null === t
                          ? "Null"
                          : "string" ==
                            typeof (n = (function (t, e) {
                              try {
                                return t[e];
                              } catch (t) {}
                            })((e = Object(t)), a))
                          ? n
                          : s
                          ? o(e)
                          : "Object" == (i = o(e)) && r(e.callee)
                          ? "Arguments"
                          : i;
                      };
                },
                4635: function (t, e, n) {
                  var i = n(6192);
                  t.exports = !i(function () {
                    function t() {}
                    return (
                      (t.prototype.constructor = null),
                      Object.getPrototypeOf(new t()) !== t.prototype
                    );
                  });
                },
                5148: function (t, e, n) {
                  "use strict";
                  var i = n(4413).IteratorPrototype,
                    r = n(2853),
                    o = n(774),
                    a = n(1284),
                    s = n(7771),
                    l = function () {
                      return this;
                    };
                  t.exports = function (t, e, n) {
                    var c = e + " Iterator";
                    return (
                      (t.prototype = r(i, { next: o(1, n) })),
                      a(t, c, !1, !0),
                      (s[c] = l),
                      t
                    );
                  };
                },
                8711: function (t, e, n) {
                  var i = n(69),
                    r = n(2760),
                    o = n(774);
                  t.exports = i
                    ? function (t, e, n) {
                        return r.f(t, e, o(1, n));
                      }
                    : function (t, e, n) {
                        return (t[e] = n), t;
                      };
                },
                774: function (t) {
                  t.exports = function (t, e) {
                    return {
                      enumerable: !(1 & t),
                      configurable: !(2 & t),
                      writable: !(4 & t),
                      value: e,
                    };
                  };
                },
                9361: function (t, e, n) {
                  "use strict";
                  var i = n(77),
                    r = n(2760),
                    o = n(774);
                  t.exports = function (t, e, n) {
                    var a = i(e);
                    a in t ? r.f(t, a, o(0, n)) : (t[a] = n);
                  };
                },
                7218: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(5546),
                    o = n(2282),
                    a = n(6447),
                    s = n(5148),
                    l = n(9341),
                    c = n(4469),
                    d = n(1284),
                    u = n(8711),
                    p = n(9482),
                    h = n(8182),
                    f = n(7771),
                    b = n(4413),
                    m = o.PROPER,
                    g = o.CONFIGURABLE,
                    v = b.IteratorPrototype,
                    _ = b.BUGGY_SAFARI_ITERATORS,
                    y = h("iterator"),
                    M = function () {
                      return this;
                    };
                  t.exports = function (t, e, n, o, h, b, O) {
                    s(n, e, o);
                    var w,
                      A,
                      x,
                      z = function (t) {
                        if (t === h && D) return D;
                        if (!_ && t in S) return S[t];
                        switch (t) {
                          case "keys":
                          case "values":
                          case "entries":
                            return function () {
                              return new n(this, t);
                            };
                        }
                        return function () {
                          return new n(this);
                        };
                      },
                      C = e + " Iterator",
                      k = !1,
                      S = t.prototype,
                      T = S[y] || S["@@iterator"] || (h && S[h]),
                      D = (!_ && T) || z(h),
                      L = ("Array" == e && S.entries) || T;
                    if (
                      (L &&
                        (w = l(L.call(new t()))) !== Object.prototype &&
                        w.next &&
                        (r ||
                          l(w) === v ||
                          (c ? c(w, v) : a(w[y]) || p(w, y, M)),
                        d(w, C, !0, !0),
                        r && (f[C] = M)),
                      m &&
                        "values" == h &&
                        T &&
                        "values" !== T.name &&
                        (!r && g
                          ? u(S, "name", "values")
                          : ((k = !0),
                            (D = function () {
                              return T.call(this);
                            }))),
                      h)
                    )
                      if (
                        ((A = {
                          values: z("values"),
                          keys: b ? D : z("keys"),
                          entries: z("entries"),
                        }),
                        O)
                      )
                        for (x in A) (_ || k || !(x in S)) && p(S, x, A[x]);
                      else i({ target: e, proto: !0, forced: _ || k }, A);
                    return (
                      (r && !O) || S[y] === D || p(S, y, D, { name: h }),
                      (f[e] = D),
                      A
                    );
                  };
                },
                1488: function (t, e, n) {
                  var i = n(7545),
                    r = n(4500),
                    o = n(9207),
                    a = n(2760).f;
                  t.exports = function (t) {
                    var e = i.Symbol || (i.Symbol = {});
                    r(e, t) || a(e, t, { value: o.f(t) });
                  };
                },
                69: function (t, e, n) {
                  var i = n(6192);
                  t.exports = !i(function () {
                    return (
                      7 !=
                      Object.defineProperty({}, 1, {
                        get: function () {
                          return 7;
                        },
                      })[1]
                    );
                  });
                },
                7449: function (t, e, n) {
                  var i = n(8576),
                    r = n(5744),
                    o = i.document,
                    a = r(o) && r(o.createElement);
                  t.exports = function (t) {
                    return a ? o.createElement(t) : {};
                  };
                },
                7365: function (t) {
                  t.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0,
                  };
                },
                2957: function (t) {
                  t.exports = "object" == typeof window;
                },
                9347: function (t, e, n) {
                  var i = n(8989),
                    r = n(8576);
                  t.exports =
                    /ipad|iphone|ipod/i.test(i) && void 0 !== r.Pebble;
                },
                9536: function (t, e, n) {
                  var i = n(8989);
                  t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(i);
                },
                224: function (t, e, n) {
                  var i = n(9272),
                    r = n(8576);
                  t.exports = "process" == i(r.process);
                },
                5914: function (t, e, n) {
                  var i = n(8989);
                  t.exports = /web0s(?!.*chrome)/i.test(i);
                },
                8989: function (t, e, n) {
                  var i = n(150);
                  t.exports = i("navigator", "userAgent") || "";
                },
                4218: function (t, e, n) {
                  var i,
                    r,
                    o = n(8576),
                    a = n(8989),
                    s = o.process,
                    l = o.Deno,
                    c = (s && s.versions) || (l && l.version),
                    d = c && c.v8;
                  d
                    ? (r = (i = d.split("."))[0] < 4 ? 1 : i[0] + i[1])
                    : a &&
                      (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
                      (i = a.match(/Chrome\/(\d+)/)) &&
                      (r = i[1]),
                    (t.exports = r && +r);
                },
                5607: function (t, e, n) {
                  var i = n(7545);
                  t.exports = function (t) {
                    return i[t + "Prototype"];
                  };
                },
                2952: function (t) {
                  t.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf",
                  ];
                },
                3085: function (t, e, n) {
                  "use strict";
                  var i = n(8576),
                    r = n(6447),
                    o = n(5141).f,
                    a = n(9245),
                    s = n(7545),
                    l = n(8043),
                    c = n(8711),
                    d = n(4500),
                    u = function (t) {
                      var e = function (e, n, i) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(e);
                            case 2:
                              return new t(e, n);
                          }
                          return new t(e, n, i);
                        }
                        return t.apply(this, arguments);
                      };
                      return (e.prototype = t.prototype), e;
                    };
                  t.exports = function (t, e) {
                    var n,
                      p,
                      h,
                      f,
                      b,
                      m,
                      g,
                      v,
                      _ = t.target,
                      y = t.global,
                      M = t.stat,
                      O = t.proto,
                      w = y ? i : M ? i[_] : (i[_] || {}).prototype,
                      A = y ? s : s[_] || c(s, _, {})[_],
                      x = A.prototype;
                    for (h in e)
                      (n =
                        !a(y ? h : _ + (M ? "." : "#") + h, t.forced) &&
                        w &&
                        d(w, h)),
                        (b = A[h]),
                        n &&
                          (m = t.noTargetGet ? (v = o(w, h)) && v.value : w[h]),
                        (f = n && m ? m : e[h]),
                        (n && typeof b == typeof f) ||
                          ((g =
                            t.bind && n
                              ? l(f, i)
                              : t.wrap && n
                              ? u(f)
                              : O && r(f)
                              ? l(Function.call, f)
                              : f),
                          (t.sham || (f && f.sham) || (b && b.sham)) &&
                            c(g, "sham", !0),
                          c(A, h, g),
                          O &&
                            (d(s, (p = _ + "Prototype")) || c(s, p, {}),
                            c(s[p], h, f),
                            t.real && x && !x[h] && c(x, h, f)));
                  };
                },
                6192: function (t) {
                  t.exports = function (t) {
                    try {
                      return !!t();
                    } catch (t) {
                      return !0;
                    }
                  };
                },
                8043: function (t, e, n) {
                  var i = n(6235);
                  t.exports = function (t, e, n) {
                    if ((i(t), void 0 === e)) return t;
                    switch (n) {
                      case 0:
                        return function () {
                          return t.call(e);
                        };
                      case 1:
                        return function (n) {
                          return t.call(e, n);
                        };
                      case 2:
                        return function (n, i) {
                          return t.call(e, n, i);
                        };
                      case 3:
                        return function (n, i, r) {
                          return t.call(e, n, i, r);
                        };
                    }
                    return function () {
                      return t.apply(e, arguments);
                    };
                  };
                },
                6782: function (t, e, n) {
                  "use strict";
                  var i = n(6235),
                    r = n(5744),
                    o = [].slice,
                    a = {},
                    s = function (t, e, n) {
                      if (!(e in a)) {
                        for (var i = [], r = 0; r < e; r++)
                          i[r] = "a[" + r + "]";
                        a[e] = Function(
                          "C,a",
                          "return new C(" + i.join(",") + ")"
                        );
                      }
                      return a[e](t, n);
                    };
                  t.exports =
                    Function.bind ||
                    function (t) {
                      var e = i(this),
                        n = o.call(arguments, 1),
                        a = function () {
                          var i = n.concat(o.call(arguments));
                          return this instanceof a
                            ? s(e, i.length, i)
                            : e.apply(t, i);
                        };
                      return r(e.prototype) && (a.prototype = e.prototype), a;
                    };
                },
                2282: function (t, e, n) {
                  var i = n(69),
                    r = n(4500),
                    o = Function.prototype,
                    a = i && Object.getOwnPropertyDescriptor,
                    s = r(o, "name"),
                    l = s && "something" === function () {}.name,
                    c = s && (!i || (i && a(o, "name").configurable));
                  t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
                },
                150: function (t, e, n) {
                  var i = n(7545),
                    r = n(8576),
                    o = n(6447),
                    a = function (t) {
                      return o(t) ? t : void 0;
                    };
                  t.exports = function (t, e) {
                    return arguments.length < 2
                      ? a(i[t]) || a(r[t])
                      : (i[t] && i[t][e]) || (r[t] && r[t][e]);
                  };
                },
                8703: function (t, e, n) {
                  var i = n(4696),
                    r = n(5037),
                    o = n(7771),
                    a = n(8182)("iterator");
                  t.exports = function (t) {
                    if (null != t)
                      return r(t, a) || r(t, "@@iterator") || o[i(t)];
                  };
                },
                1669: function (t, e, n) {
                  var i = n(6235),
                    r = n(1138),
                    o = n(8703);
                  t.exports = function (t, e) {
                    var n = arguments.length < 2 ? o(t) : e;
                    if (i(n)) return r(n.call(t));
                    throw TypeError(String(t) + " is not iterable");
                  };
                },
                5037: function (t, e, n) {
                  var i = n(6235);
                  t.exports = function (t, e) {
                    var n = t[e];
                    return null == n ? void 0 : i(n);
                  };
                },
                8576: function (t, e, n) {
                  var i = function (t) {
                    return t && t.Math == Math && t;
                  };
                  t.exports =
                    i("object" == typeof globalThis && globalThis) ||
                    i("object" == typeof window && window) ||
                    i("object" == typeof self && self) ||
                    i("object" == typeof n.g && n.g) ||
                    (function () {
                      return this;
                    })() ||
                    Function("return this")();
                },
                4500: function (t, e, n) {
                  var i = n(1795),
                    r = {}.hasOwnProperty;
                  t.exports =
                    Object.hasOwn ||
                    function (t, e) {
                      return r.call(i(t), e);
                    };
                },
                4535: function (t) {
                  t.exports = {};
                },
                3681: function (t, e, n) {
                  var i = n(8576);
                  t.exports = function (t, e) {
                    var n = i.console;
                    n &&
                      n.error &&
                      (1 === arguments.length ? n.error(t) : n.error(t, e));
                  };
                },
                7403: function (t, e, n) {
                  var i = n(150);
                  t.exports = i("document", "documentElement");
                },
                188: function (t, e, n) {
                  var i = n(69),
                    r = n(6192),
                    o = n(7449);
                  t.exports =
                    !i &&
                    !r(function () {
                      return (
                        7 !=
                        Object.defineProperty(o("div"), "a", {
                          get: function () {
                            return 7;
                          },
                        }).a
                      );
                    });
                },
                2202: function (t, e, n) {
                  var i = n(6192),
                    r = n(9272),
                    o = "".split;
                  t.exports = i(function () {
                    return !Object("z").propertyIsEnumerable(0);
                  })
                    ? function (t) {
                        return "String" == r(t) ? o.call(t, "") : Object(t);
                      }
                    : Object;
                },
                9516: function (t, e, n) {
                  var i = n(6447),
                    r = n(6434),
                    o = Function.toString;
                  i(r.inspectSource) ||
                    (r.inspectSource = function (t) {
                      return o.call(t);
                    }),
                    (t.exports = r.inspectSource);
                },
                273: function (t, e, n) {
                  var i = n(5744),
                    r = n(8711);
                  t.exports = function (t, e) {
                    i(e) && "cause" in e && r(t, "cause", t.cause);
                  };
                },
                3326: function (t, e, n) {
                  var i,
                    r,
                    o,
                    a = n(8921),
                    s = n(8576),
                    l = n(5744),
                    c = n(8711),
                    d = n(4500),
                    u = n(6434),
                    p = n(9766),
                    h = n(4535),
                    f = s.WeakMap;
                  if (a || u.state) {
                    var b = u.state || (u.state = new f()),
                      m = b.get,
                      g = b.has,
                      v = b.set;
                    (i = function (t, e) {
                      if (g.call(b, t))
                        throw new TypeError("Object already initialized");
                      return (e.facade = t), v.call(b, t, e), e;
                    }),
                      (r = function (t) {
                        return m.call(b, t) || {};
                      }),
                      (o = function (t) {
                        return g.call(b, t);
                      });
                  } else {
                    var _ = p("state");
                    (h[_] = !0),
                      (i = function (t, e) {
                        if (d(t, _))
                          throw new TypeError("Object already initialized");
                        return (e.facade = t), c(t, _, e), e;
                      }),
                      (r = function (t) {
                        return d(t, _) ? t[_] : {};
                      }),
                      (o = function (t) {
                        return d(t, _);
                      });
                  }
                  t.exports = {
                    set: i,
                    get: r,
                    has: o,
                    enforce: function (t) {
                      return o(t) ? r(t) : i(t, {});
                    },
                    getterFor: function (t) {
                      return function (e) {
                        var n;
                        if (!l(e) || (n = r(e)).type !== t)
                          throw TypeError(
                            "Incompatible receiver, " + t + " required"
                          );
                        return n;
                      };
                    },
                  };
                },
                6109: function (t, e, n) {
                  var i = n(8182),
                    r = n(7771),
                    o = i("iterator"),
                    a = Array.prototype;
                  t.exports = function (t) {
                    return void 0 !== t && (r.Array === t || a[o] === t);
                  };
                },
                4770: function (t, e, n) {
                  var i = n(9272);
                  t.exports =
                    Array.isArray ||
                    function (t) {
                      return "Array" == i(t);
                    };
                },
                6447: function (t) {
                  t.exports = function (t) {
                    return "function" == typeof t;
                  };
                },
                2091: function (t, e, n) {
                  var i = n(6192),
                    r = n(6447),
                    o = n(4696),
                    a = n(150),
                    s = n(9516),
                    l = [],
                    c = a("Reflect", "construct"),
                    d = /^\s*(?:class|function)\b/,
                    u = d.exec,
                    p = !d.exec(function () {}),
                    h = function (t) {
                      if (!r(t)) return !1;
                      try {
                        return c(Object, l, t), !0;
                      } catch (t) {
                        return !1;
                      }
                    };
                  t.exports =
                    !c ||
                    i(function () {
                      var t;
                      return (
                        h(h.call) ||
                        !h(Object) ||
                        !h(function () {
                          t = !0;
                        }) ||
                        t
                      );
                    })
                      ? function (t) {
                          if (!r(t)) return !1;
                          switch (o(t)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                              return !1;
                          }
                          return p || !!u.call(d, s(t));
                        }
                      : h;
                },
                9245: function (t, e, n) {
                  var i = n(6192),
                    r = n(6447),
                    o = /#|\.prototype\./,
                    a = function (t, e) {
                      var n = l[s(t)];
                      return n == d || (n != c && (r(e) ? i(e) : !!e));
                    },
                    s = (a.normalize = function (t) {
                      return String(t).replace(o, ".").toLowerCase();
                    }),
                    l = (a.data = {}),
                    c = (a.NATIVE = "N"),
                    d = (a.POLYFILL = "P");
                  t.exports = a;
                },
                5744: function (t, e, n) {
                  var i = n(6447);
                  t.exports = function (t) {
                    return "object" == typeof t ? null !== t : i(t);
                  };
                },
                5546: function (t) {
                  t.exports = !0;
                },
                3236: function (t, e, n) {
                  var i = n(6447),
                    r = n(150),
                    o = n(615);
                  t.exports = o
                    ? function (t) {
                        return "symbol" == typeof t;
                      }
                    : function (t) {
                        var e = r("Symbol");
                        return i(e) && Object(t) instanceof e;
                      };
                },
                3442: function (t, e, n) {
                  var i = n(1138),
                    r = n(6109),
                    o = n(4104),
                    a = n(8043),
                    s = n(1669),
                    l = n(8703),
                    c = n(6639),
                    d = function (t, e) {
                      (this.stopped = t), (this.result = e);
                    };
                  t.exports = function (t, e, n) {
                    var u,
                      p,
                      h,
                      f,
                      b,
                      m,
                      g,
                      v = n && n.that,
                      _ = !(!n || !n.AS_ENTRIES),
                      y = !(!n || !n.IS_ITERATOR),
                      M = !(!n || !n.INTERRUPTED),
                      O = a(e, v, 1 + _ + M),
                      w = function (t) {
                        return u && c(u, "normal", t), new d(!0, t);
                      },
                      A = function (t) {
                        return _
                          ? (i(t), M ? O(t[0], t[1], w) : O(t[0], t[1]))
                          : M
                          ? O(t, w)
                          : O(t);
                      };
                    if (y) u = t;
                    else {
                      if (!(p = l(t)))
                        throw TypeError(String(t) + " is not iterable");
                      if (r(p)) {
                        for (h = 0, f = o(t); f > h; h++)
                          if ((b = A(t[h])) && b instanceof d) return b;
                        return new d(!1);
                      }
                      u = s(t, p);
                    }
                    for (m = u.next; !(g = m.call(u)).done; ) {
                      try {
                        b = A(g.value);
                      } catch (t) {
                        c(u, "throw", t);
                      }
                      if ("object" == typeof b && b && b instanceof d) return b;
                    }
                    return new d(!1);
                  };
                },
                6639: function (t, e, n) {
                  var i = n(1138),
                    r = n(5037);
                  t.exports = function (t, e, n) {
                    var o, a;
                    i(t);
                    try {
                      if (!(o = r(t, "return"))) {
                        if ("throw" === e) throw n;
                        return n;
                      }
                      o = o.call(t);
                    } catch (t) {
                      (a = !0), (o = t);
                    }
                    if ("throw" === e) throw n;
                    if (a) throw o;
                    return i(o), n;
                  };
                },
                4413: function (t, e, n) {
                  "use strict";
                  var i,
                    r,
                    o,
                    a = n(6192),
                    s = n(6447),
                    l = n(2853),
                    c = n(9341),
                    d = n(9482),
                    u = n(8182),
                    p = n(5546),
                    h = u("iterator"),
                    f = !1;
                  [].keys &&
                    ("next" in (o = [].keys())
                      ? (r = c(c(o))) !== Object.prototype && (i = r)
                      : (f = !0)),
                    null == i ||
                    a(function () {
                      var t = {};
                      return i[h].call(t) !== t;
                    })
                      ? (i = {})
                      : p && (i = l(i)),
                    s(i[h]) ||
                      d(i, h, function () {
                        return this;
                      }),
                    (t.exports = {
                      IteratorPrototype: i,
                      BUGGY_SAFARI_ITERATORS: f,
                    });
                },
                7771: function (t) {
                  t.exports = {};
                },
                4104: function (t, e, n) {
                  var i = n(8445);
                  t.exports = function (t) {
                    return i(t.length);
                  };
                },
                2950: function (t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    c,
                    d,
                    u = n(8576),
                    p = n(5141).f,
                    h = n(7160).set,
                    f = n(9536),
                    b = n(9347),
                    m = n(5914),
                    g = n(224),
                    v = u.MutationObserver || u.WebKitMutationObserver,
                    _ = u.document,
                    y = u.process,
                    M = u.Promise,
                    O = p(u, "queueMicrotask"),
                    w = O && O.value;
                  w ||
                    ((i = function () {
                      var t, e;
                      for (g && (t = y.domain) && t.exit(); r; ) {
                        (e = r.fn), (r = r.next);
                        try {
                          e();
                        } catch (t) {
                          throw (r ? a() : (o = void 0), t);
                        }
                      }
                      (o = void 0), t && t.enter();
                    }),
                    f || g || m || !v || !_
                      ? !b && M && M.resolve
                        ? (((c = M.resolve(void 0)).constructor = M),
                          (d = c.then),
                          (a = function () {
                            d.call(c, i);
                          }))
                        : (a = g
                            ? function () {
                                y.nextTick(i);
                              }
                            : function () {
                                h.call(u, i);
                              })
                      : ((s = !0),
                        (l = _.createTextNode("")),
                        new v(i).observe(l, { characterData: !0 }),
                        (a = function () {
                          l.data = s = !s;
                        }))),
                    (t.exports =
                      w ||
                      function (t) {
                        var e = { fn: t, next: void 0 };
                        o && (o.next = e), r || ((r = e), a()), (o = e);
                      });
                },
                4471: function (t, e, n) {
                  var i = n(8576);
                  t.exports = i.Promise;
                },
                3045: function (t, e, n) {
                  var i = n(4218),
                    r = n(6192);
                  t.exports =
                    !!Object.getOwnPropertySymbols &&
                    !r(function () {
                      var t = Symbol();
                      return (
                        !String(t) ||
                        !(Object(t) instanceof Symbol) ||
                        (!Symbol.sham && i && i < 41)
                      );
                    });
                },
                4551: function (t, e, n) {
                  var i = n(6192),
                    r = n(8182),
                    o = n(5546),
                    a = r("iterator");
                  t.exports = !i(function () {
                    var t = new URL("b?a=1&b=2&c=3", "http://a"),
                      e = t.searchParams,
                      n = "";
                    return (
                      (t.pathname = "c%20d"),
                      e.forEach(function (t, i) {
                        e.delete("b"), (n += i + t);
                      }),
                      (o && !t.toJSON) ||
                        !e.sort ||
                        "http://a/c%20d?a=1&c=3" !== t.href ||
                        "3" !== e.get("c") ||
                        "a=1" !== String(new URLSearchParams("?a=1")) ||
                        !e[a] ||
                        "a" !== new URL("https://a@b").username ||
                        "b" !==
                          new URLSearchParams(new URLSearchParams("a=b")).get(
                            "a"
                          ) ||
                        "xn--e1aybc" !== new URL("http://тест").host ||
                        "#%D0%B1" !== new URL("http://a#б").hash ||
                        "a1c3" !== n ||
                        "x" !== new URL("http://x", void 0).host
                    );
                  });
                },
                8921: function (t, e, n) {
                  var i = n(8576),
                    r = n(6447),
                    o = n(9516),
                    a = i.WeakMap;
                  t.exports = r(a) && /native code/.test(o(a));
                },
                9438: function (t, e, n) {
                  "use strict";
                  var i = n(6235),
                    r = function (t) {
                      var e, n;
                      (this.promise = new t(function (t, i) {
                        if (void 0 !== e || void 0 !== n)
                          throw TypeError("Bad Promise constructor");
                        (e = t), (n = i);
                      })),
                        (this.resolve = i(e)),
                        (this.reject = i(n));
                    };
                  t.exports.f = function (t) {
                    return new r(t);
                  };
                },
                15: function (t, e, n) {
                  var i = n(8576),
                    r = n(6192),
                    o = n(4845),
                    a = n(4277).trim,
                    s = n(1450),
                    l = i.parseFloat,
                    c = i.Symbol,
                    d = c && c.iterator,
                    u =
                      1 / l(s + "-0") != -1 / 0 ||
                      (d &&
                        !r(function () {
                          l(Object(d));
                        }));
                  t.exports = u
                    ? function (t) {
                        var e = a(o(t)),
                          n = l(e);
                        return 0 === n && "-" == e.charAt(0) ? -0 : n;
                      }
                    : l;
                },
                2558: function (t, e, n) {
                  var i = n(8576),
                    r = n(6192),
                    o = n(4845),
                    a = n(4277).trim,
                    s = n(1450),
                    l = i.parseInt,
                    c = i.Symbol,
                    d = c && c.iterator,
                    u = /^[+-]?0[Xx]/,
                    p =
                      8 !== l(s + "08") ||
                      22 !== l(s + "0x16") ||
                      (d &&
                        !r(function () {
                          l(Object(d));
                        }));
                  t.exports = p
                    ? function (t, e) {
                        var n = a(o(t));
                        return l(n, e >>> 0 || (u.test(n) ? 16 : 10));
                      }
                    : l;
                },
                2503: function (t, e, n) {
                  "use strict";
                  var i = n(69),
                    r = n(6192),
                    o = n(7653),
                    a = n(4750),
                    s = n(6007),
                    l = n(1795),
                    c = n(2202),
                    d = Object.assign,
                    u = Object.defineProperty;
                  t.exports =
                    !d ||
                    r(function () {
                      if (
                        i &&
                        1 !==
                          d(
                            { b: 1 },
                            d(
                              u({}, "a", {
                                enumerable: !0,
                                get: function () {
                                  u(this, "b", { value: 3, enumerable: !1 });
                                },
                              }),
                              { b: 2 }
                            )
                          ).b
                      )
                        return !0;
                      var t = {},
                        e = {},
                        n = Symbol();
                      return (
                        (t[n] = 7),
                        "abcdefghijklmnopqrst".split("").forEach(function (t) {
                          e[t] = t;
                        }),
                        7 != d({}, t)[n] ||
                          "abcdefghijklmnopqrst" != o(d({}, e)).join("")
                      );
                    })
                      ? function (t, e) {
                          for (
                            var n = l(t),
                              r = arguments.length,
                              d = 1,
                              u = a.f,
                              p = s.f;
                            r > d;

                          )
                            for (
                              var h,
                                f = c(arguments[d++]),
                                b = u ? o(f).concat(u(f)) : o(f),
                                m = b.length,
                                g = 0;
                              m > g;

                            )
                              (h = b[g++]),
                                (i && !p.call(f, h)) || (n[h] = f[h]);
                          return n;
                        }
                      : d;
                },
                2853: function (t, e, n) {
                  var i,
                    r = n(1138),
                    o = n(1187),
                    a = n(2952),
                    s = n(4535),
                    l = n(7403),
                    c = n(7449),
                    d = n(9766)("IE_PROTO"),
                    u = function () {},
                    p = function (t) {
                      return "<script>" + t + "</script>";
                    },
                    h = function (t) {
                      t.write(p("")), t.close();
                      var e = t.parentWindow.Object;
                      return (t = null), e;
                    },
                    f = function () {
                      try {
                        i = new ActiveXObject("htmlfile");
                      } catch (t) {}
                      var t, e;
                      f =
                        "undefined" != typeof document
                          ? document.domain && i
                            ? h(i)
                            : (((e = c("iframe")).style.display = "none"),
                              l.appendChild(e),
                              (e.src = String("javascript:")),
                              (t = e.contentWindow.document).open(),
                              t.write(p("document.F=Object")),
                              t.close(),
                              t.F)
                          : h(i);
                      for (var n = a.length; n--; ) delete f.prototype[a[n]];
                      return f();
                    };
                  (s[d] = !0),
                    (t.exports =
                      Object.create ||
                      function (t, e) {
                        var n;
                        return (
                          null !== t
                            ? ((u.prototype = r(t)),
                              (n = new u()),
                              (u.prototype = null),
                              (n[d] = t))
                            : (n = f()),
                          void 0 === e ? n : o(n, e)
                        );
                      });
                },
                1187: function (t, e, n) {
                  var i = n(69),
                    r = n(2760),
                    o = n(1138),
                    a = n(7653);
                  t.exports = i
                    ? Object.defineProperties
                    : function (t, e) {
                        o(t);
                        for (var n, i = a(e), s = i.length, l = 0; s > l; )
                          r.f(t, (n = i[l++]), e[n]);
                        return t;
                      };
                },
                2760: function (t, e, n) {
                  var i = n(69),
                    r = n(188),
                    o = n(1138),
                    a = n(77),
                    s = Object.defineProperty;
                  e.f = i
                    ? s
                    : function (t, e, n) {
                        if ((o(t), (e = a(e)), o(n), r))
                          try {
                            return s(t, e, n);
                          } catch (t) {}
                        if ("get" in n || "set" in n)
                          throw TypeError("Accessors not supported");
                        return "value" in n && (t[e] = n.value), t;
                      };
                },
                5141: function (t, e, n) {
                  var i = n(69),
                    r = n(6007),
                    o = n(774),
                    a = n(101),
                    s = n(77),
                    l = n(4500),
                    c = n(188),
                    d = Object.getOwnPropertyDescriptor;
                  e.f = i
                    ? d
                    : function (t, e) {
                        if (((t = a(t)), (e = s(e)), c))
                          try {
                            return d(t, e);
                          } catch (t) {}
                        if (l(t, e)) return o(!r.f.call(t, e), t[e]);
                      };
                },
                4052: function (t, e, n) {
                  var i = n(101),
                    r = n(2092).f,
                    o = {}.toString,
                    a =
                      "object" == typeof window &&
                      window &&
                      Object.getOwnPropertyNames
                        ? Object.getOwnPropertyNames(window)
                        : [];
                  t.exports.f = function (t) {
                    return a && "[object Window]" == o.call(t)
                      ? (function (t) {
                          try {
                            return r(t);
                          } catch (t) {
                            return a.slice();
                          }
                        })(t)
                      : r(i(t));
                  };
                },
                2092: function (t, e, n) {
                  var i = n(7934),
                    r = n(2952).concat("length", "prototype");
                  e.f =
                    Object.getOwnPropertyNames ||
                    function (t) {
                      return i(t, r);
                    };
                },
                4750: function (t, e) {
                  e.f = Object.getOwnPropertySymbols;
                },
                9341: function (t, e, n) {
                  var i = n(4500),
                    r = n(6447),
                    o = n(1795),
                    a = n(9766),
                    s = n(4635),
                    l = a("IE_PROTO"),
                    c = Object.prototype;
                  t.exports = s
                    ? Object.getPrototypeOf
                    : function (t) {
                        var e = o(t);
                        if (i(e, l)) return e[l];
                        var n = e.constructor;
                        return r(n) && e instanceof n
                          ? n.prototype
                          : e instanceof Object
                          ? c
                          : null;
                      };
                },
                7934: function (t, e, n) {
                  var i = n(4500),
                    r = n(101),
                    o = n(8180).indexOf,
                    a = n(4535);
                  t.exports = function (t, e) {
                    var n,
                      s = r(t),
                      l = 0,
                      c = [];
                    for (n in s) !i(a, n) && i(s, n) && c.push(n);
                    for (; e.length > l; )
                      i(s, (n = e[l++])) && (~o(c, n) || c.push(n));
                    return c;
                  };
                },
                7653: function (t, e, n) {
                  var i = n(7934),
                    r = n(2952);
                  t.exports =
                    Object.keys ||
                    function (t) {
                      return i(t, r);
                    };
                },
                6007: function (t, e) {
                  "use strict";
                  var n = {}.propertyIsEnumerable,
                    i = Object.getOwnPropertyDescriptor,
                    r = i && !n.call({ 1: 2 }, 1);
                  e.f = r
                    ? function (t) {
                        var e = i(this, t);
                        return !!e && e.enumerable;
                      }
                    : n;
                },
                4469: function (t, e, n) {
                  var i = n(1138),
                    r = n(7757);
                  t.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                      ? (function () {
                          var t,
                            e = !1,
                            n = {};
                          try {
                            (t = Object.getOwnPropertyDescriptor(
                              Object.prototype,
                              "__proto__"
                            ).set).call(n, []),
                              (e = n instanceof Array);
                          } catch (t) {}
                          return function (n, o) {
                            return (
                              i(n),
                              r(o),
                              e ? t.call(n, o) : (n.__proto__ = o),
                              n
                            );
                          };
                        })()
                      : void 0);
                },
                158: function (t, e, n) {
                  "use strict";
                  var i = n(3471),
                    r = n(4696);
                  t.exports = i
                    ? {}.toString
                    : function () {
                        return "[object " + r(this) + "]";
                      };
                },
                380: function (t, e, n) {
                  var i = n(6447),
                    r = n(5744);
                  t.exports = function (t, e) {
                    var n, o;
                    if (
                      "string" === e &&
                      i((n = t.toString)) &&
                      !r((o = n.call(t)))
                    )
                      return o;
                    if (i((n = t.valueOf)) && !r((o = n.call(t)))) return o;
                    if (
                      "string" !== e &&
                      i((n = t.toString)) &&
                      !r((o = n.call(t)))
                    )
                      return o;
                    throw TypeError("Can't convert object to primitive value");
                  };
                },
                7545: function (t) {
                  t.exports = {};
                },
                892: function (t) {
                  t.exports = function (t) {
                    try {
                      return { error: !1, value: t() };
                    } catch (t) {
                      return { error: !0, value: t };
                    }
                  };
                },
                9126: function (t, e, n) {
                  var i = n(1138),
                    r = n(5744),
                    o = n(9438);
                  t.exports = function (t, e) {
                    if ((i(t), r(e) && e.constructor === t)) return e;
                    var n = o.f(t);
                    return (0, n.resolve)(e), n.promise;
                  };
                },
                533: function (t, e, n) {
                  var i = n(9482);
                  t.exports = function (t, e, n) {
                    for (var r in e)
                      n && n.unsafe && t[r] ? (t[r] = e[r]) : i(t, r, e[r], n);
                    return t;
                  };
                },
                9482: function (t, e, n) {
                  var i = n(8711);
                  t.exports = function (t, e, n, r) {
                    r && r.enumerable ? (t[e] = n) : i(t, e, n);
                  };
                },
                3209: function (t) {
                  t.exports = function (t) {
                    if (null == t) throw TypeError("Can't call method on " + t);
                    return t;
                  };
                },
                7613: function (t, e, n) {
                  var i = n(8576);
                  t.exports = function (t, e) {
                    try {
                      Object.defineProperty(i, t, {
                        value: e,
                        configurable: !0,
                        writable: !0,
                      });
                    } catch (n) {
                      i[t] = e;
                    }
                    return e;
                  };
                },
                3656: function (t, e, n) {
                  "use strict";
                  var i = n(150),
                    r = n(2760),
                    o = n(8182),
                    a = n(69),
                    s = o("species");
                  t.exports = function (t) {
                    var e = i(t),
                      n = r.f;
                    a &&
                      e &&
                      !e[s] &&
                      n(e, s, {
                        configurable: !0,
                        get: function () {
                          return this;
                        },
                      });
                  };
                },
                1284: function (t, e, n) {
                  var i = n(3471),
                    r = n(2760).f,
                    o = n(8711),
                    a = n(4500),
                    s = n(158),
                    l = n(8182)("toStringTag");
                  t.exports = function (t, e, n, c) {
                    if (t) {
                      var d = n ? t : t.prototype;
                      a(d, l) || r(d, l, { configurable: !0, value: e }),
                        c && !i && o(d, "toString", s);
                    }
                  };
                },
                9766: function (t, e, n) {
                  var i = n(8717),
                    r = n(2759),
                    o = i("keys");
                  t.exports = function (t) {
                    return o[t] || (o[t] = r(t));
                  };
                },
                6434: function (t, e, n) {
                  var i = n(8576),
                    r = n(7613),
                    o = i["__core-js_shared__"] || r("__core-js_shared__", {});
                  t.exports = o;
                },
                8717: function (t, e, n) {
                  var i = n(5546),
                    r = n(6434);
                  (t.exports = function (t, e) {
                    return r[t] || (r[t] = void 0 !== e ? e : {});
                  })("versions", []).push({
                    version: "3.18.2",
                    mode: i ? "pure" : "global",
                    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
                  });
                },
                4743: function (t, e, n) {
                  var i = n(1138),
                    r = n(1404),
                    o = n(8182)("species");
                  t.exports = function (t, e) {
                    var n,
                      a = i(t).constructor;
                    return void 0 === a || null == (n = i(a)[o]) ? e : r(n);
                  };
                },
                863: function (t, e, n) {
                  var i = n(1941),
                    r = n(4845),
                    o = n(3209),
                    a = function (t) {
                      return function (e, n) {
                        var a,
                          s,
                          l = r(o(e)),
                          c = i(n),
                          d = l.length;
                        return c < 0 || c >= d
                          ? t
                            ? ""
                            : void 0
                          : (a = l.charCodeAt(c)) < 55296 ||
                            a > 56319 ||
                            c + 1 === d ||
                            (s = l.charCodeAt(c + 1)) < 56320 ||
                            s > 57343
                          ? t
                            ? l.charAt(c)
                            : a
                          : t
                          ? l.slice(c, c + 2)
                          : s - 56320 + ((a - 55296) << 10) + 65536;
                      };
                    };
                  t.exports = { codeAt: a(!1), charAt: a(!0) };
                },
                7977: function (t) {
                  "use strict";
                  var e = /[^\0-\u007E]/,
                    n = /[.\u3002\uFF0E\uFF61]/g,
                    i = "Overflow: input needs wider integers to process",
                    r = Math.floor,
                    o = String.fromCharCode,
                    a = function (t) {
                      return t + 22 + 75 * (t < 26);
                    },
                    s = function (t, e, n) {
                      var i = 0;
                      for (
                        t = n ? r(t / 700) : t >> 1, t += r(t / e);
                        t > 455;
                        i += 36
                      )
                        t = r(t / 35);
                      return r(i + (36 * t) / (t + 38));
                    },
                    l = function (t) {
                      var e,
                        n,
                        l = [],
                        c = (t = (function (t) {
                          for (var e = [], n = 0, i = t.length; n < i; ) {
                            var r = t.charCodeAt(n++);
                            if (r >= 55296 && r <= 56319 && n < i) {
                              var o = t.charCodeAt(n++);
                              56320 == (64512 & o)
                                ? e.push(
                                    ((1023 & r) << 10) + (1023 & o) + 65536
                                  )
                                : (e.push(r), n--);
                            } else e.push(r);
                          }
                          return e;
                        })(t)).length,
                        d = 128,
                        u = 0,
                        p = 72;
                      for (e = 0; e < t.length; e++)
                        (n = t[e]) < 128 && l.push(o(n));
                      var h = l.length,
                        f = h;
                      for (h && l.push("-"); f < c; ) {
                        var b = 2147483647;
                        for (e = 0; e < t.length; e++)
                          (n = t[e]) >= d && n < b && (b = n);
                        var m = f + 1;
                        if (b - d > r((2147483647 - u) / m))
                          throw RangeError(i);
                        for (
                          u += (b - d) * m, d = b, e = 0;
                          e < t.length;
                          e++
                        ) {
                          if ((n = t[e]) < d && ++u > 2147483647)
                            throw RangeError(i);
                          if (n == d) {
                            for (var g = u, v = 36; ; v += 36) {
                              var _ = v <= p ? 1 : v >= p + 26 ? 26 : v - p;
                              if (g < _) break;
                              var y = g - _,
                                M = 36 - _;
                              l.push(o(a(_ + (y % M)))), (g = r(y / M));
                            }
                            l.push(o(a(g))),
                              (p = s(u, m, f == h)),
                              (u = 0),
                              ++f;
                          }
                        }
                        ++u, ++d;
                      }
                      return l.join("");
                    };
                  t.exports = function (t) {
                    var i,
                      r,
                      o = [],
                      a = t.toLowerCase().replace(n, ".").split(".");
                    for (i = 0; i < a.length; i++)
                      (r = a[i]), o.push(e.test(r) ? "xn--" + l(r) : r);
                    return o.join(".");
                  };
                },
                6815: function (t, e, n) {
                  var i = n(2282).PROPER,
                    r = n(6192),
                    o = n(1450);
                  t.exports = function (t) {
                    return r(function () {
                      return (
                        !!o[t]() || "​᠎" !== "​᠎"[t]() || (i && o[t].name !== t)
                      );
                    });
                  };
                },
                4277: function (t, e, n) {
                  var i = n(3209),
                    r = n(4845),
                    o = "[" + n(1450) + "]",
                    a = RegExp("^" + o + o + "*"),
                    s = RegExp(o + o + "*$"),
                    l = function (t) {
                      return function (e) {
                        var n = r(i(e));
                        return (
                          1 & t && (n = n.replace(a, "")),
                          2 & t && (n = n.replace(s, "")),
                          n
                        );
                      };
                    };
                  t.exports = { start: l(1), end: l(2), trim: l(3) };
                },
                7160: function (t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s = n(8576),
                    l = n(6447),
                    c = n(6192),
                    d = n(8043),
                    u = n(7403),
                    p = n(7449),
                    h = n(9536),
                    f = n(224),
                    b = s.setImmediate,
                    m = s.clearImmediate,
                    g = s.process,
                    v = s.MessageChannel,
                    _ = s.Dispatch,
                    y = 0,
                    M = {};
                  try {
                    i = s.location;
                  } catch (t) {}
                  var O = function (t) {
                      if (M.hasOwnProperty(t)) {
                        var e = M[t];
                        delete M[t], e();
                      }
                    },
                    w = function (t) {
                      return function () {
                        O(t);
                      };
                    },
                    A = function (t) {
                      O(t.data);
                    },
                    x = function (t) {
                      s.postMessage(String(t), i.protocol + "//" + i.host);
                    };
                  (b && m) ||
                    ((b = function (t) {
                      for (var e = [], n = arguments.length, i = 1; n > i; )
                        e.push(arguments[i++]);
                      return (
                        (M[++y] = function () {
                          (l(t) ? t : Function(t)).apply(void 0, e);
                        }),
                        r(y),
                        y
                      );
                    }),
                    (m = function (t) {
                      delete M[t];
                    }),
                    f
                      ? (r = function (t) {
                          g.nextTick(w(t));
                        })
                      : _ && _.now
                      ? (r = function (t) {
                          _.now(w(t));
                        })
                      : v && !h
                      ? ((a = (o = new v()).port2),
                        (o.port1.onmessage = A),
                        (r = d(a.postMessage, a, 1)))
                      : s.addEventListener &&
                        l(s.postMessage) &&
                        !s.importScripts &&
                        i &&
                        "file:" !== i.protocol &&
                        !c(x)
                      ? ((r = x), s.addEventListener("message", A, !1))
                      : (r =
                          "onreadystatechange" in p("script")
                            ? function (t) {
                                u.appendChild(p("script")).onreadystatechange =
                                  function () {
                                    u.removeChild(this), O(t);
                                  };
                              }
                            : function (t) {
                                setTimeout(w(t), 0);
                              })),
                    (t.exports = { set: b, clear: m });
                },
                7739: function (t, e, n) {
                  var i = n(1941),
                    r = Math.max,
                    o = Math.min;
                  t.exports = function (t, e) {
                    var n = i(t);
                    return n < 0 ? r(n + e, 0) : o(n, e);
                  };
                },
                101: function (t, e, n) {
                  var i = n(2202),
                    r = n(3209);
                  t.exports = function (t) {
                    return i(r(t));
                  };
                },
                1941: function (t) {
                  var e = Math.ceil,
                    n = Math.floor;
                  t.exports = function (t) {
                    var i = +t;
                    return i != i || 0 === i ? 0 : (i > 0 ? n : e)(i);
                  };
                },
                8445: function (t, e, n) {
                  var i = n(1941),
                    r = Math.min;
                  t.exports = function (t) {
                    return t > 0 ? r(i(t), 9007199254740991) : 0;
                  };
                },
                1795: function (t, e, n) {
                  var i = n(3209);
                  t.exports = function (t) {
                    return Object(i(t));
                  };
                },
                7888: function (t, e, n) {
                  var i = n(5744),
                    r = n(3236),
                    o = n(5037),
                    a = n(380),
                    s = n(8182)("toPrimitive");
                  t.exports = function (t, e) {
                    if (!i(t) || r(t)) return t;
                    var n,
                      l = o(t, s);
                    if (l) {
                      if (
                        (void 0 === e && (e = "default"),
                        (n = l.call(t, e)),
                        !i(n) || r(n))
                      )
                        return n;
                      throw TypeError(
                        "Can't convert object to primitive value"
                      );
                    }
                    return void 0 === e && (e = "number"), a(t, e);
                  };
                },
                77: function (t, e, n) {
                  var i = n(7888),
                    r = n(3236);
                  t.exports = function (t) {
                    var e = i(t, "string");
                    return r(e) ? e : String(e);
                  };
                },
                3471: function (t, e, n) {
                  var i = {};
                  (i[n(8182)("toStringTag")] = "z"),
                    (t.exports = "[object z]" === String(i));
                },
                4845: function (t, e, n) {
                  var i = n(4696);
                  t.exports = function (t) {
                    if ("Symbol" === i(t))
                      throw TypeError(
                        "Cannot convert a Symbol value to a string"
                      );
                    return String(t);
                  };
                },
                9288: function (t) {
                  t.exports = function (t) {
                    try {
                      return String(t);
                    } catch (t) {
                      return "Object";
                    }
                  };
                },
                2759: function (t) {
                  var e = 0,
                    n = Math.random();
                  t.exports = function (t) {
                    return (
                      "Symbol(" +
                      String(void 0 === t ? "" : t) +
                      ")_" +
                      (++e + n).toString(36)
                    );
                  };
                },
                615: function (t, e, n) {
                  var i = n(3045);
                  t.exports =
                    i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
                },
                9207: function (t, e, n) {
                  var i = n(8182);
                  e.f = i;
                },
                8182: function (t, e, n) {
                  var i = n(8576),
                    r = n(8717),
                    o = n(4500),
                    a = n(2759),
                    s = n(3045),
                    l = n(615),
                    c = r("wks"),
                    d = i.Symbol,
                    u = l ? d : (d && d.withoutSetter) || a;
                  t.exports = function (t) {
                    return (
                      (o(c, t) && (s || "string" == typeof c[t])) ||
                        (s && o(d, t)
                          ? (c[t] = d[t])
                          : (c[t] = u("Symbol." + t))),
                      c[t]
                    );
                  };
                },
                1450: function (t) {
                  t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
                },
                4242: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(9341),
                    o = n(4469),
                    a = n(2853),
                    s = n(8711),
                    l = n(774),
                    c = n(273),
                    d = n(3442),
                    u = n(4845),
                    p = function (t, e) {
                      var n = this,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                      if (!(n instanceof p)) return new p(t, e, i);
                      o && (n = o(new Error(void 0), r(n))),
                        void 0 !== e && s(n, "message", u(e)),
                        c(n, i);
                      var a = [];
                      return d(t, a.push, { that: a }), s(n, "errors", a), n;
                    };
                  (p.prototype = a(Error.prototype, {
                    constructor: l(5, p),
                    message: l(5, ""),
                    name: l(5, "AggregateError"),
                  })),
                    i({ global: !0 }, { AggregateError: p });
                },
                9106: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(6192),
                    o = n(4770),
                    a = n(5744),
                    s = n(1795),
                    l = n(4104),
                    c = n(9361),
                    d = n(1321),
                    u = n(242),
                    p = n(8182),
                    h = n(4218),
                    f = p("isConcatSpreadable"),
                    b =
                      h >= 51 ||
                      !r(function () {
                        var t = [];
                        return (t[f] = !1), t.concat()[0] !== t;
                      }),
                    m = u("concat"),
                    g = function (t) {
                      if (!a(t)) return !1;
                      var e = t[f];
                      return void 0 !== e ? !!e : o(t);
                    };
                  i(
                    { target: "Array", proto: !0, forced: !b || !m },
                    {
                      concat: function (t) {
                        var e,
                          n,
                          i,
                          r,
                          o,
                          a = s(this),
                          u = d(a, 0),
                          p = 0;
                        for (e = -1, i = arguments.length; e < i; e++)
                          if (g((o = -1 === e ? a : arguments[e]))) {
                            if (p + (r = l(o)) > 9007199254740991)
                              throw TypeError("Maximum allowed index exceeded");
                            for (n = 0; n < r; n++, p++)
                              n in o && c(u, p, o[n]);
                          } else {
                            if (p >= 9007199254740991)
                              throw TypeError("Maximum allowed index exceeded");
                            c(u, p++, o);
                          }
                        return (u.length = p), u;
                      },
                    }
                  );
                },
                1710: function (t, e, n) {
                  var i = n(3085),
                    r = n(2724),
                    o = n(7423);
                  i({ target: "Array", proto: !0 }, { fill: r }), o("fill");
                },
                3436: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(454).filter;
                  i(
                    { target: "Array", proto: !0, forced: !n(242)("filter") },
                    {
                      filter: function (t) {
                        return r(
                          this,
                          t,
                          arguments.length > 1 ? arguments[1] : void 0
                        );
                      },
                    }
                  );
                },
                9823: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(7397);
                  i(
                    { target: "Array", proto: !0, forced: [].forEach != r },
                    { forEach: r }
                  );
                },
                9173: function (t, e, n) {
                  var i = n(3085),
                    r = n(841);
                  i(
                    {
                      target: "Array",
                      stat: !0,
                      forced: !n(9770)(function (t) {
                        Array.from(t);
                      }),
                    },
                    { from: r }
                  );
                },
                2276: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(8180).indexOf,
                    o = n(424),
                    a = [].indexOf,
                    s = !!a && 1 / [1].indexOf(1, -0) < 0,
                    l = o("indexOf");
                  i(
                    { target: "Array", proto: !0, forced: s || !l },
                    {
                      indexOf: function (t) {
                        return s
                          ? a.apply(this, arguments) || 0
                          : r(
                              this,
                              t,
                              arguments.length > 1 ? arguments[1] : void 0
                            );
                      },
                    }
                  );
                },
                8118: function (t, e, n) {
                  n(3085)({ target: "Array", stat: !0 }, { isArray: n(4770) });
                },
                8939: function (t, e, n) {
                  "use strict";
                  var i = n(101),
                    r = n(7423),
                    o = n(7771),
                    a = n(3326),
                    s = n(7218),
                    l = a.set,
                    c = a.getterFor("Array Iterator");
                  (t.exports = s(
                    Array,
                    "Array",
                    function (t, e) {
                      l(this, {
                        type: "Array Iterator",
                        target: i(t),
                        index: 0,
                        kind: e,
                      });
                    },
                    function () {
                      var t = c(this),
                        e = t.target,
                        n = t.kind,
                        i = t.index++;
                      return !e || i >= e.length
                        ? ((t.target = void 0), { value: void 0, done: !0 })
                        : "keys" == n
                        ? { value: i, done: !1 }
                        : "values" == n
                        ? { value: e[i], done: !1 }
                        : { value: [i, e[i]], done: !1 };
                    },
                    "values"
                  )),
                    (o.Arguments = o.Array),
                    r("keys"),
                    r("values"),
                    r("entries");
                },
                3838: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(454).map;
                  i(
                    { target: "Array", proto: !0, forced: !n(242)("map") },
                    {
                      map: function (t) {
                        return r(
                          this,
                          t,
                          arguments.length > 1 ? arguments[1] : void 0
                        );
                      },
                    }
                  );
                },
                5818: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(4770),
                    o = n(2091),
                    a = n(5744),
                    s = n(7739),
                    l = n(4104),
                    c = n(101),
                    d = n(9361),
                    u = n(8182),
                    p = n(242)("slice"),
                    h = u("species"),
                    f = [].slice,
                    b = Math.max;
                  i(
                    { target: "Array", proto: !0, forced: !p },
                    {
                      slice: function (t, e) {
                        var n,
                          i,
                          u,
                          p = c(this),
                          m = l(p),
                          g = s(t, m),
                          v = s(void 0 === e ? m : e, m);
                        if (
                          r(p) &&
                          ((n = p.constructor),
                          ((o(n) && (n === Array || r(n.prototype))) ||
                            (a(n) && null === (n = n[h]))) &&
                            (n = void 0),
                          n === Array || void 0 === n)
                        )
                          return f.call(p, g, v);
                        for (
                          i = new (void 0 === n ? Array : n)(b(v - g, 0)),
                            u = 0;
                          g < v;
                          g++, u++
                        )
                          g in p && d(i, u, p[g]);
                        return (i.length = u), i;
                      },
                    }
                  );
                },
                2178: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(7739),
                    o = n(1941),
                    a = n(4104),
                    s = n(1795),
                    l = n(1321),
                    c = n(9361),
                    d = n(242)("splice"),
                    u = Math.max,
                    p = Math.min;
                  i(
                    { target: "Array", proto: !0, forced: !d },
                    {
                      splice: function (t, e) {
                        var n,
                          i,
                          d,
                          h,
                          f,
                          b,
                          m = s(this),
                          g = a(m),
                          v = r(t, g),
                          _ = arguments.length;
                        if (
                          (0 === _
                            ? (n = i = 0)
                            : 1 === _
                            ? ((n = 0), (i = g - v))
                            : ((n = _ - 2), (i = p(u(o(e), 0), g - v))),
                          g + n - i > 9007199254740991)
                        )
                          throw TypeError("Maximum allowed length exceeded");
                        for (d = l(m, i), h = 0; h < i; h++)
                          (f = v + h) in m && c(d, h, m[f]);
                        if (((d.length = i), n < i)) {
                          for (h = v; h < g - i; h++)
                            (b = h + n),
                              (f = h + i) in m ? (m[b] = m[f]) : delete m[b];
                          for (h = g; h > g - i + n; h--) delete m[h - 1];
                        } else if (n > i)
                          for (h = g - i; h > v; h--)
                            (b = h + n - 1),
                              (f = h + i - 1) in m
                                ? (m[b] = m[f])
                                : delete m[b];
                        for (h = 0; h < n; h++) m[h + v] = arguments[h + 2];
                        return (m.length = g - i + n), d;
                      },
                    }
                  );
                },
                665: function (t, e, n) {
                  n(3085)({ target: "Function", proto: !0 }, { bind: n(6782) });
                },
                8671: function (t, e, n) {
                  var i = n(8576);
                  n(1284)(i.JSON, "JSON", !0);
                },
                8556: function () {},
                2666: function (t, e, n) {
                  var i = n(3085),
                    r = n(2558);
                  i(
                    {
                      target: "Number",
                      stat: !0,
                      forced: Number.parseInt != r,
                    },
                    { parseInt: r }
                  );
                },
                3113: function (t, e, n) {
                  n(3085)(
                    { target: "Object", stat: !0, sham: !n(69) },
                    { create: n(2853) }
                  );
                },
                297: function (t, e, n) {
                  var i = n(3085),
                    r = n(69);
                  i(
                    { target: "Object", stat: !0, forced: !r, sham: !r },
                    { defineProperty: n(2760).f }
                  );
                },
                9234: function (t, e, n) {
                  var i = n(3085),
                    r = n(6192),
                    o = n(1795),
                    a = n(9341),
                    s = n(4635);
                  i(
                    {
                      target: "Object",
                      stat: !0,
                      forced: r(function () {
                        a(1);
                      }),
                      sham: !s,
                    },
                    {
                      getPrototypeOf: function (t) {
                        return a(o(t));
                      },
                    }
                  );
                },
                2647: function (t, e, n) {
                  var i = n(3085),
                    r = n(1795),
                    o = n(7653);
                  i(
                    {
                      target: "Object",
                      stat: !0,
                      forced: n(6192)(function () {
                        o(1);
                      }),
                    },
                    {
                      keys: function (t) {
                        return o(r(t));
                      },
                    }
                  );
                },
                3222: function (t, e, n) {
                  n(3085)(
                    { target: "Object", stat: !0 },
                    { setPrototypeOf: n(4469) }
                  );
                },
                6663: function () {},
                4859: function (t, e, n) {
                  var i = n(3085),
                    r = n(15);
                  i({ global: !0, forced: parseFloat != r }, { parseFloat: r });
                },
                5706: function (t, e, n) {
                  var i = n(3085),
                    r = n(2558);
                  i({ global: !0, forced: parseInt != r }, { parseInt: r });
                },
                7884: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(6235),
                    o = n(9438),
                    a = n(892),
                    s = n(3442);
                  i(
                    { target: "Promise", stat: !0 },
                    {
                      allSettled: function (t) {
                        var e = this,
                          n = o.f(e),
                          i = n.resolve,
                          l = n.reject,
                          c = a(function () {
                            var n = r(e.resolve),
                              o = [],
                              a = 0,
                              l = 1;
                            s(t, function (t) {
                              var r = a++,
                                s = !1;
                              o.push(void 0),
                                l++,
                                n.call(e, t).then(
                                  function (t) {
                                    s ||
                                      ((s = !0),
                                      (o[r] = {
                                        status: "fulfilled",
                                        value: t,
                                      }),
                                      --l || i(o));
                                  },
                                  function (t) {
                                    s ||
                                      ((s = !0),
                                      (o[r] = {
                                        status: "rejected",
                                        reason: t,
                                      }),
                                      --l || i(o));
                                  }
                                );
                            }),
                              --l || i(o);
                          });
                        return c.error && l(c.value), n.promise;
                      },
                    }
                  );
                },
                8885: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(6235),
                    o = n(150),
                    a = n(9438),
                    s = n(892),
                    l = n(3442);
                  i(
                    { target: "Promise", stat: !0 },
                    {
                      any: function (t) {
                        var e = this,
                          n = a.f(e),
                          i = n.resolve,
                          c = n.reject,
                          d = s(function () {
                            var n = r(e.resolve),
                              a = [],
                              s = 0,
                              d = 1,
                              u = !1;
                            l(t, function (t) {
                              var r = s++,
                                l = !1;
                              a.push(void 0),
                                d++,
                                n.call(e, t).then(
                                  function (t) {
                                    l || u || ((u = !0), i(t));
                                  },
                                  function (t) {
                                    l ||
                                      u ||
                                      ((l = !0),
                                      (a[r] = t),
                                      --d ||
                                        c(
                                          new (o("AggregateError"))(
                                            a,
                                            "No one promise resolved"
                                          )
                                        ));
                                  }
                                );
                            }),
                              --d ||
                                c(
                                  new (o("AggregateError"))(
                                    a,
                                    "No one promise resolved"
                                  )
                                );
                          });
                        return d.error && c(d.value), n.promise;
                      },
                    }
                  );
                },
                1868: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(5546),
                    o = n(4471),
                    a = n(6192),
                    s = n(150),
                    l = n(6447),
                    c = n(4743),
                    d = n(9126),
                    u = n(9482);
                  if (
                    (i(
                      {
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced:
                          !!o &&
                          a(function () {
                            o.prototype.finally.call(
                              { then: function () {} },
                              function () {}
                            );
                          }),
                      },
                      {
                        finally: function (t) {
                          var e = c(this, s("Promise")),
                            n = l(t);
                          return this.then(
                            n
                              ? function (n) {
                                  return d(e, t()).then(function () {
                                    return n;
                                  });
                                }
                              : t,
                            n
                              ? function (n) {
                                  return d(e, t()).then(function () {
                                    throw n;
                                  });
                                }
                              : t
                          );
                        },
                      }
                    ),
                    !r && l(o))
                  ) {
                    var p = s("Promise").prototype.finally;
                    o.prototype.finally !== p &&
                      u(o.prototype, "finally", p, { unsafe: !0 });
                  }
                },
                9021: function (t, e, n) {
                  "use strict";
                  var i,
                    r,
                    o,
                    a,
                    s = n(3085),
                    l = n(5546),
                    c = n(8576),
                    d = n(150),
                    u = n(4471),
                    p = n(9482),
                    h = n(533),
                    f = n(4469),
                    b = n(1284),
                    m = n(3656),
                    g = n(6235),
                    v = n(6447),
                    _ = n(5744),
                    y = n(6961),
                    M = n(9516),
                    O = n(3442),
                    w = n(9770),
                    A = n(4743),
                    x = n(7160).set,
                    z = n(2950),
                    C = n(9126),
                    k = n(3681),
                    S = n(9438),
                    T = n(892),
                    D = n(3326),
                    L = n(9245),
                    q = n(8182),
                    E = n(2957),
                    j = n(224),
                    P = n(4218),
                    R = q("species"),
                    I = "Promise",
                    W = D.get,
                    N = D.set,
                    B = D.getterFor(I),
                    F = u && u.prototype,
                    $ = u,
                    H = F,
                    Y = c.TypeError,
                    U = c.document,
                    X = c.process,
                    V = S.f,
                    G = V,
                    K = !!(U && U.createEvent && c.dispatchEvent),
                    Z = v(c.PromiseRejectionEvent),
                    J = !1,
                    Q = L(I, function () {
                      var t = M($),
                        e = t !== String($);
                      if (!e && 66 === P) return !0;
                      if (l && !H.finally) return !0;
                      if (P >= 51 && /native code/.test(t)) return !1;
                      var n = new $(function (t) {
                          t(1);
                        }),
                        i = function (t) {
                          t(
                            function () {},
                            function () {}
                          );
                        };
                      return (
                        ((n.constructor = {})[R] = i),
                        !(J = n.then(function () {}) instanceof i) ||
                          (!e && E && !Z)
                      );
                    }),
                    tt =
                      Q ||
                      !w(function (t) {
                        $.all(t).catch(function () {});
                      }),
                    et = function (t) {
                      var e;
                      return !(!_(t) || !v((e = t.then))) && e;
                    },
                    nt = function (t, e) {
                      if (!t.notified) {
                        t.notified = !0;
                        var n = t.reactions;
                        z(function () {
                          for (
                            var i = t.value, r = 1 == t.state, o = 0;
                            n.length > o;

                          ) {
                            var a,
                              s,
                              l,
                              c = n[o++],
                              d = r ? c.ok : c.fail,
                              u = c.resolve,
                              p = c.reject,
                              h = c.domain;
                            try {
                              d
                                ? (r ||
                                    (2 === t.rejection && at(t),
                                    (t.rejection = 1)),
                                  !0 === d
                                    ? (a = i)
                                    : (h && h.enter(),
                                      (a = d(i)),
                                      h && (h.exit(), (l = !0))),
                                  a === c.promise
                                    ? p(Y("Promise-chain cycle"))
                                    : (s = et(a))
                                    ? s.call(a, u, p)
                                    : u(a))
                                : p(i);
                            } catch (t) {
                              h && !l && h.exit(), p(t);
                            }
                          }
                          (t.reactions = []),
                            (t.notified = !1),
                            e && !t.rejection && rt(t);
                        });
                      }
                    },
                    it = function (t, e, n) {
                      var i, r;
                      K
                        ? (((i = U.createEvent("Event")).promise = e),
                          (i.reason = n),
                          i.initEvent(t, !1, !0),
                          c.dispatchEvent(i))
                        : (i = { promise: e, reason: n }),
                        !Z && (r = c["on" + t])
                          ? r(i)
                          : "unhandledrejection" === t &&
                            k("Unhandled promise rejection", n);
                    },
                    rt = function (t) {
                      x.call(c, function () {
                        var e,
                          n = t.facade,
                          i = t.value;
                        if (
                          ot(t) &&
                          ((e = T(function () {
                            j
                              ? X.emit("unhandledRejection", i, n)
                              : it("unhandledrejection", n, i);
                          })),
                          (t.rejection = j || ot(t) ? 2 : 1),
                          e.error)
                        )
                          throw e.value;
                      });
                    },
                    ot = function (t) {
                      return 1 !== t.rejection && !t.parent;
                    },
                    at = function (t) {
                      x.call(c, function () {
                        var e = t.facade;
                        j
                          ? X.emit("rejectionHandled", e)
                          : it("rejectionhandled", e, t.value);
                      });
                    },
                    st = function (t, e, n) {
                      return function (i) {
                        t(e, i, n);
                      };
                    },
                    lt = function (t, e, n) {
                      t.done ||
                        ((t.done = !0),
                        n && (t = n),
                        (t.value = e),
                        (t.state = 2),
                        nt(t, !0));
                    },
                    ct = function (t, e, n) {
                      if (!t.done) {
                        (t.done = !0), n && (t = n);
                        try {
                          if (t.facade === e)
                            throw Y("Promise can't be resolved itself");
                          var i = et(e);
                          i
                            ? z(function () {
                                var n = { done: !1 };
                                try {
                                  i.call(e, st(ct, n, t), st(lt, n, t));
                                } catch (e) {
                                  lt(n, e, t);
                                }
                              })
                            : ((t.value = e), (t.state = 1), nt(t, !1));
                        } catch (e) {
                          lt({ done: !1 }, e, t);
                        }
                      }
                    };
                  if (
                    Q &&
                    ((H = ($ = function (t) {
                      y(this, $, I), g(t), i.call(this);
                      var e = W(this);
                      try {
                        t(st(ct, e), st(lt, e));
                      } catch (t) {
                        lt(e, t);
                      }
                    }).prototype),
                    ((i = function (t) {
                      N(this, {
                        type: I,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: 0,
                        value: void 0,
                      });
                    }).prototype = h(H, {
                      then: function (t, e) {
                        var n = B(this),
                          i = V(A(this, $));
                        return (
                          (i.ok = !v(t) || t),
                          (i.fail = v(e) && e),
                          (i.domain = j ? X.domain : void 0),
                          (n.parent = !0),
                          n.reactions.push(i),
                          0 != n.state && nt(n, !1),
                          i.promise
                        );
                      },
                      catch: function (t) {
                        return this.then(void 0, t);
                      },
                    })),
                    (r = function () {
                      var t = new i(),
                        e = W(t);
                      (this.promise = t),
                        (this.resolve = st(ct, e)),
                        (this.reject = st(lt, e));
                    }),
                    (S.f = V =
                      function (t) {
                        return t === $ || t === o ? new r(t) : G(t);
                      }),
                    !l && v(u) && F !== Object.prototype)
                  ) {
                    (a = F.then),
                      J ||
                        (p(
                          F,
                          "then",
                          function (t, e) {
                            var n = this;
                            return new $(function (t, e) {
                              a.call(n, t, e);
                            }).then(t, e);
                          },
                          { unsafe: !0 }
                        ),
                        p(F, "catch", H.catch, { unsafe: !0 }));
                    try {
                      delete F.constructor;
                    } catch (t) {}
                    f && f(F, H);
                  }
                  s({ global: !0, wrap: !0, forced: Q }, { Promise: $ }),
                    b($, I, !1, !0),
                    m(I),
                    (o = d(I)),
                    s(
                      { target: I, stat: !0, forced: Q },
                      {
                        reject: function (t) {
                          var e = V(this);
                          return e.reject.call(void 0, t), e.promise;
                        },
                      }
                    ),
                    s(
                      { target: I, stat: !0, forced: l || Q },
                      {
                        resolve: function (t) {
                          return C(l && this === o ? $ : this, t);
                        },
                      }
                    ),
                    s(
                      { target: I, stat: !0, forced: tt },
                      {
                        all: function (t) {
                          var e = this,
                            n = V(e),
                            i = n.resolve,
                            r = n.reject,
                            o = T(function () {
                              var n = g(e.resolve),
                                o = [],
                                a = 0,
                                s = 1;
                              O(t, function (t) {
                                var l = a++,
                                  c = !1;
                                o.push(void 0),
                                  s++,
                                  n.call(e, t).then(function (t) {
                                    c || ((c = !0), (o[l] = t), --s || i(o));
                                  }, r);
                              }),
                                --s || i(o);
                            });
                          return o.error && r(o.value), n.promise;
                        },
                        race: function (t) {
                          var e = this,
                            n = V(e),
                            i = n.reject,
                            r = T(function () {
                              var r = g(e.resolve);
                              O(t, function (t) {
                                r.call(e, t).then(n.resolve, i);
                              });
                            });
                          return r.error && i(r.value), n.promise;
                        },
                      }
                    );
                },
                5397: function (t, e, n) {
                  var i = n(3085),
                    r = n(150),
                    o = n(1404),
                    a = n(1138),
                    s = n(5744),
                    l = n(2853),
                    c = n(6782),
                    d = n(6192),
                    u = r("Reflect", "construct"),
                    p = d(function () {
                      function t() {}
                      return !(u(function () {}, [], t) instanceof t);
                    }),
                    h = !d(function () {
                      u(function () {});
                    }),
                    f = p || h;
                  i(
                    { target: "Reflect", stat: !0, forced: f, sham: f },
                    {
                      construct: function (t, e) {
                        o(t), a(e);
                        var n = arguments.length < 3 ? t : o(arguments[2]);
                        if (h && !p) return u(t, e, n);
                        if (t == n) {
                          switch (e.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(e[0]);
                            case 2:
                              return new t(e[0], e[1]);
                            case 3:
                              return new t(e[0], e[1], e[2]);
                            case 4:
                              return new t(e[0], e[1], e[2], e[3]);
                          }
                          var i = [null];
                          return i.push.apply(i, e), new (c.apply(t, i))();
                        }
                        var r = n.prototype,
                          d = l(s(r) ? r : Object.prototype),
                          f = Function.apply.call(t, d, e);
                        return s(f) ? f : d;
                      },
                    }
                  );
                },
                1367: function () {},
                5454: function (t, e, n) {
                  "use strict";
                  var i = n(863).charAt,
                    r = n(4845),
                    o = n(3326),
                    a = n(7218),
                    s = o.set,
                    l = o.getterFor("String Iterator");
                  a(
                    String,
                    "String",
                    function (t) {
                      s(this, {
                        type: "String Iterator",
                        string: r(t),
                        index: 0,
                      });
                    },
                    function () {
                      var t,
                        e = l(this),
                        n = e.string,
                        r = e.index;
                      return r >= n.length
                        ? { value: void 0, done: !0 }
                        : ((t = i(n, r)),
                          (e.index += t.length),
                          { value: t, done: !1 });
                    }
                  );
                },
                957: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(4277).trim;
                  i(
                    { target: "String", proto: !0, forced: n(6815)("trim") },
                    {
                      trim: function () {
                        return r(this);
                      },
                    }
                  );
                },
                9781: function (t, e, n) {
                  n(1488)("asyncIterator");
                },
                492: function () {},
                6681: function (t, e, n) {
                  n(1488)("hasInstance");
                },
                9594: function (t, e, n) {
                  n(1488)("isConcatSpreadable");
                },
                3665: function (t, e, n) {
                  n(1488)("iterator");
                },
                6187: function (t, e, n) {
                  "use strict";
                  var i = n(3085),
                    r = n(8576),
                    o = n(150),
                    a = n(5546),
                    s = n(69),
                    l = n(3045),
                    c = n(6192),
                    d = n(4500),
                    u = n(4770),
                    p = n(6447),
                    h = n(5744),
                    f = n(3236),
                    b = n(1138),
                    m = n(1795),
                    g = n(101),
                    v = n(77),
                    _ = n(4845),
                    y = n(774),
                    M = n(2853),
                    O = n(7653),
                    w = n(2092),
                    A = n(4052),
                    x = n(4750),
                    z = n(5141),
                    C = n(2760),
                    k = n(6007),
                    S = n(9482),
                    T = n(8717),
                    D = n(9766),
                    L = n(4535),
                    q = n(2759),
                    E = n(8182),
                    j = n(9207),
                    P = n(1488),
                    R = n(1284),
                    I = n(3326),
                    W = n(454).forEach,
                    N = D("hidden"),
                    B = E("toPrimitive"),
                    F = I.set,
                    $ = I.getterFor("Symbol"),
                    H = Object.prototype,
                    Y = r.Symbol,
                    U = o("JSON", "stringify"),
                    X = z.f,
                    V = C.f,
                    G = A.f,
                    K = k.f,
                    Z = T("symbols"),
                    J = T("op-symbols"),
                    Q = T("string-to-symbol-registry"),
                    tt = T("symbol-to-string-registry"),
                    et = T("wks"),
                    nt = r.QObject,
                    it = !nt || !nt.prototype || !nt.prototype.findChild,
                    rt =
                      s &&
                      c(function () {
                        return (
                          7 !=
                          M(
                            V({}, "a", {
                              get: function () {
                                return V(this, "a", { value: 7 }).a;
                              },
                            })
                          ).a
                        );
                      })
                        ? function (t, e, n) {
                            var i = X(H, e);
                            i && delete H[e],
                              V(t, e, n),
                              i && t !== H && V(H, e, i);
                          }
                        : V,
                    ot = function (t, e) {
                      var n = (Z[t] = M(Y.prototype));
                      return (
                        F(n, { type: "Symbol", tag: t, description: e }),
                        s || (n.description = e),
                        n
                      );
                    },
                    at = function (t, e, n) {
                      t === H && at(J, e, n), b(t);
                      var i = v(e);
                      return (
                        b(n),
                        d(Z, i)
                          ? (n.enumerable
                              ? (d(t, N) && t[N][i] && (t[N][i] = !1),
                                (n = M(n, { enumerable: y(0, !1) })))
                              : (d(t, N) || V(t, N, y(1, {})), (t[N][i] = !0)),
                            rt(t, i, n))
                          : V(t, i, n)
                      );
                    },
                    st = function (t, e) {
                      b(t);
                      var n = g(e),
                        i = O(n).concat(ut(n));
                      return (
                        W(i, function (e) {
                          (s && !lt.call(n, e)) || at(t, e, n[e]);
                        }),
                        t
                      );
                    },
                    lt = function (t) {
                      var e = v(t),
                        n = K.call(this, e);
                      return (
                        !(this === H && d(Z, e) && !d(J, e)) &&
                        (!(
                          n ||
                          !d(this, e) ||
                          !d(Z, e) ||
                          (d(this, N) && this[N][e])
                        ) ||
                          n)
                      );
                    },
                    ct = function (t, e) {
                      var n = g(t),
                        i = v(e);
                      if (n !== H || !d(Z, i) || d(J, i)) {
                        var r = X(n, i);
                        return (
                          !r ||
                            !d(Z, i) ||
                            (d(n, N) && n[N][i]) ||
                            (r.enumerable = !0),
                          r
                        );
                      }
                    },
                    dt = function (t) {
                      var e = G(g(t)),
                        n = [];
                      return (
                        W(e, function (t) {
                          d(Z, t) || d(L, t) || n.push(t);
                        }),
                        n
                      );
                    },
                    ut = function (t) {
                      var e = t === H,
                        n = G(e ? J : g(t)),
                        i = [];
                      return (
                        W(n, function (t) {
                          !d(Z, t) || (e && !d(H, t)) || i.push(Z[t]);
                        }),
                        i
                      );
                    };
                  if (
                    (l ||
                      (S(
                        (Y = function () {
                          if (this instanceof Y)
                            throw TypeError("Symbol is not a constructor");
                          var t =
                              arguments.length && void 0 !== arguments[0]
                                ? _(arguments[0])
                                : void 0,
                            e = q(t),
                            n = function (t) {
                              this === H && n.call(J, t),
                                d(this, N) &&
                                  d(this[N], e) &&
                                  (this[N][e] = !1),
                                rt(this, e, y(1, t));
                            };
                          return (
                            s && it && rt(H, e, { configurable: !0, set: n }),
                            ot(e, t)
                          );
                        }).prototype,
                        "toString",
                        function () {
                          return $(this).tag;
                        }
                      ),
                      S(Y, "withoutSetter", function (t) {
                        return ot(q(t), t);
                      }),
                      (k.f = lt),
                      (C.f = at),
                      (z.f = ct),
                      (w.f = A.f = dt),
                      (x.f = ut),
                      (j.f = function (t) {
                        return ot(E(t), t);
                      }),
                      s &&
                        (V(Y.prototype, "description", {
                          configurable: !0,
                          get: function () {
                            return $(this).description;
                          },
                        }),
                        a || S(H, "propertyIsEnumerable", lt, { unsafe: !0 }))),
                    i(
                      { global: !0, wrap: !0, forced: !l, sham: !l },
                      { Symbol: Y }
                    ),
                    W(O(et), function (t) {
                      P(t);
                    }),
                    i(
                      { target: "Symbol", stat: !0, forced: !l },
                      {
                        for: function (t) {
                          var e = _(t);
                          if (d(Q, e)) return Q[e];
                          var n = Y(e);
                          return (Q[e] = n), (tt[n] = e), n;
                        },
                        keyFor: function (t) {
                          if (!f(t)) throw TypeError(t + " is not a symbol");
                          if (d(tt, t)) return tt[t];
                        },
                        useSetter: function () {
                          it = !0;
                        },
                        useSimple: function () {
                          it = !1;
                        },
                      }
                    ),
                    i(
                      { target: "Object", stat: !0, forced: !l, sham: !s },
                      {
                        create: function (t, e) {
                          return void 0 === e ? M(t) : st(M(t), e);
                        },
                        defineProperty: at,
                        defineProperties: st,
                        getOwnPropertyDescriptor: ct,
                      }
                    ),
                    i(
                      { target: "Object", stat: !0, forced: !l },
                      { getOwnPropertyNames: dt, getOwnPropertySymbols: ut }
                    ),
                    i(
                      {
                        target: "Object",
                        stat: !0,
                        forced: c(function () {
                          x.f(1);
                        }),
                      },
                      {
                        getOwnPropertySymbols: function (t) {
                          return x.f(m(t));
                        },
                      }
                    ),
                    U &&
                      i(
                        {
                          target: "JSON",
                          stat: !0,
                          forced:
                            !l ||
                            c(function () {
                              var t = Y();
                              return (
                                "[null]" != U([t]) ||
                                "{}" != U({ a: t }) ||
                                "{}" != U(Object(t))
                              );
                            }),
                        },
                        {
                          stringify: function (t, e, n) {
                            for (var i, r = [t], o = 1; arguments.length > o; )
                              r.push(arguments[o++]);
                            if (((i = e), (h(e) || void 0 !== t) && !f(t)))
                              return (
                                u(e) ||
                                  (e = function (t, e) {
                                    if (
                                      (p(i) && (e = i.call(this, t, e)), !f(e))
                                    )
                                      return e;
                                  }),
                                (r[1] = e),
                                U.apply(null, r)
                              );
                          },
                        }
                      ),
                    !Y.prototype[B])
                  ) {
                    var pt = Y.prototype.valueOf;
                    S(Y.prototype, B, function () {
                      return pt.apply(this, arguments);
                    });
                  }
                  R(Y, "Symbol"), (L[N] = !0);
                },
                1250: function (t, e, n) {
                  n(1488)("matchAll");
                },
                9017: function (t, e, n) {
                  n(1488)("match");
                },
                9786: function (t, e, n) {
                  n(1488)("replace");
                },
                503: function (t, e, n) {
                  n(1488)("search");
                },
                6565: function (t, e, n) {
                  n(1488)("species");
                },
                9322: function (t, e, n) {
                  n(1488)("split");
                },
                3610: function (t, e, n) {
                  n(1488)("toPrimitive");
                },
                6886: function (t, e, n) {
                  n(1488)("toStringTag");
                },
                3514: function (t, e, n) {
                  n(1488)("unscopables");
                },
                177: function (t, e, n) {
                  n(1488)("asyncDispose");
                },
                9031: function (t, e, n) {
                  n(1488)("dispose");
                },
                6658: function (t, e, n) {
                  n(1488)("matcher");
                },
                1875: function (t, e, n) {
                  n(1488)("metadata");
                },
                8658: function (t, e, n) {
                  n(1488)("observable");
                },
                4592: function (t, e, n) {
                  n(1488)("patternMatch");
                },
                6680: function (t, e, n) {
                  n(1488)("replaceAll");
                },
                162: function (t, e, n) {
                  n(8939);
                  var i = n(7365),
                    r = n(8576),
                    o = n(4696),
                    a = n(8711),
                    s = n(7771),
                    l = n(8182)("toStringTag");
                  for (var c in i) {
                    var d = r[c],
                      u = d && d.prototype;
                    u && o(u) !== l && a(u, l, c), (s[c] = s.Array);
                  }
                },
                2906: function (t, e, n) {
                  var i = n(3085),
                    r = n(8576),
                    o = n(6447),
                    a = n(8989),
                    s = [].slice,
                    l = function (t) {
                      return function (e, n) {
                        var i = arguments.length > 2,
                          r = i ? s.call(arguments, 2) : void 0;
                        return t(
                          i
                            ? function () {
                                (o(e) ? e : Function(e)).apply(this, r);
                              }
                            : e,
                          n
                        );
                      };
                    };
                  i(
                    { global: !0, bind: !0, forced: /MSIE .\./.test(a) },
                    {
                      setTimeout: l(r.setTimeout),
                      setInterval: l(r.setInterval),
                    }
                  );
                },
                9336: function (t, e, n) {
                  "use strict";
                  n(8939);
                  var i = n(3085),
                    r = n(150),
                    o = n(4551),
                    a = n(9482),
                    s = n(533),
                    l = n(1284),
                    c = n(5148),
                    d = n(3326),
                    u = n(6961),
                    p = n(6447),
                    h = n(4500),
                    f = n(8043),
                    b = n(4696),
                    m = n(1138),
                    g = n(5744),
                    v = n(4845),
                    _ = n(2853),
                    y = n(774),
                    M = n(1669),
                    O = n(8703),
                    w = n(8182),
                    A = r("fetch"),
                    x = r("Request"),
                    z = x && x.prototype,
                    C = r("Headers"),
                    k = w("iterator"),
                    S = d.set,
                    T = d.getterFor("URLSearchParams"),
                    D = d.getterFor("URLSearchParamsIterator"),
                    L = /\+/g,
                    q = Array(4),
                    E = function (t) {
                      return (
                        q[t - 1] ||
                        (q[t - 1] = RegExp(
                          "((?:%[\\da-f]{2}){" + t + "})",
                          "gi"
                        ))
                      );
                    },
                    j = function (t) {
                      try {
                        return decodeURIComponent(t);
                      } catch (e) {
                        return t;
                      }
                    },
                    P = function (t) {
                      var e = t.replace(L, " "),
                        n = 4;
                      try {
                        return decodeURIComponent(e);
                      } catch (t) {
                        for (; n; ) e = e.replace(E(n--), j);
                        return e;
                      }
                    },
                    R = /[!'()~]|%20/g,
                    I = {
                      "!": "%21",
                      "'": "%27",
                      "(": "%28",
                      ")": "%29",
                      "~": "%7E",
                      "%20": "+",
                    },
                    W = function (t) {
                      return I[t];
                    },
                    N = function (t) {
                      return encodeURIComponent(t).replace(R, W);
                    },
                    B = function (t, e) {
                      if (e)
                        for (var n, i, r = e.split("&"), o = 0; o < r.length; )
                          (n = r[o++]).length &&
                            ((i = n.split("=")),
                            t.push({
                              key: P(i.shift()),
                              value: P(i.join("=")),
                            }));
                    },
                    F = function (t) {
                      (this.entries.length = 0), B(this.entries, t);
                    },
                    $ = function (t, e) {
                      if (t < e) throw TypeError("Not enough arguments");
                    },
                    H = c(
                      function (t, e) {
                        S(this, {
                          type: "URLSearchParamsIterator",
                          iterator: M(T(t).entries),
                          kind: e,
                        });
                      },
                      "Iterator",
                      function () {
                        var t = D(this),
                          e = t.kind,
                          n = t.iterator.next(),
                          i = n.value;
                        return (
                          n.done ||
                            (n.value =
                              "keys" === e
                                ? i.key
                                : "values" === e
                                ? i.value
                                : [i.key, i.value]),
                          n
                        );
                      }
                    ),
                    Y = function () {
                      u(this, Y, "URLSearchParams");
                      var t,
                        e,
                        n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l,
                        c = arguments.length > 0 ? arguments[0] : void 0,
                        d = this,
                        p = [];
                      if (
                        (S(d, {
                          type: "URLSearchParams",
                          entries: p,
                          updateURL: function () {},
                          updateSearchParams: F,
                        }),
                        void 0 !== c)
                      )
                        if (g(c))
                          if ((t = O(c)))
                            for (
                              n = (e = M(c, t)).next;
                              !(i = n.call(e)).done;

                            ) {
                              if (
                                (a = (o = (r = M(m(i.value))).next).call(r))
                                  .done ||
                                (s = o.call(r)).done ||
                                !o.call(r).done
                              )
                                throw TypeError(
                                  "Expected sequence with length 2"
                                );
                              p.push({ key: v(a.value), value: v(s.value) });
                            }
                          else
                            for (l in c)
                              h(c, l) && p.push({ key: l, value: v(c[l]) });
                        else
                          B(
                            p,
                            "string" == typeof c
                              ? "?" === c.charAt(0)
                                ? c.slice(1)
                                : c
                              : v(c)
                          );
                    },
                    U = Y.prototype;
                  if (
                    (s(
                      U,
                      {
                        append: function (t, e) {
                          $(arguments.length, 2);
                          var n = T(this);
                          n.entries.push({ key: v(t), value: v(e) }),
                            n.updateURL();
                        },
                        delete: function (t) {
                          $(arguments.length, 1);
                          for (
                            var e = T(this), n = e.entries, i = v(t), r = 0;
                            r < n.length;

                          )
                            n[r].key === i ? n.splice(r, 1) : r++;
                          e.updateURL();
                        },
                        get: function (t) {
                          $(arguments.length, 1);
                          for (
                            var e = T(this).entries, n = v(t), i = 0;
                            i < e.length;
                            i++
                          )
                            if (e[i].key === n) return e[i].value;
                          return null;
                        },
                        getAll: function (t) {
                          $(arguments.length, 1);
                          for (
                            var e = T(this).entries, n = v(t), i = [], r = 0;
                            r < e.length;
                            r++
                          )
                            e[r].key === n && i.push(e[r].value);
                          return i;
                        },
                        has: function (t) {
                          $(arguments.length, 1);
                          for (
                            var e = T(this).entries, n = v(t), i = 0;
                            i < e.length;

                          )
                            if (e[i++].key === n) return !0;
                          return !1;
                        },
                        set: function (t, e) {
                          $(arguments.length, 1);
                          for (
                            var n,
                              i = T(this),
                              r = i.entries,
                              o = !1,
                              a = v(t),
                              s = v(e),
                              l = 0;
                            l < r.length;
                            l++
                          )
                            (n = r[l]).key === a &&
                              (o
                                ? r.splice(l--, 1)
                                : ((o = !0), (n.value = s)));
                          o || r.push({ key: a, value: s }), i.updateURL();
                        },
                        sort: function () {
                          var t,
                            e,
                            n,
                            i = T(this),
                            r = i.entries,
                            o = r.slice();
                          for (r.length = 0, n = 0; n < o.length; n++) {
                            for (t = o[n], e = 0; e < n; e++)
                              if (r[e].key > t.key) {
                                r.splice(e, 0, t);
                                break;
                              }
                            e === n && r.push(t);
                          }
                          i.updateURL();
                        },
                        forEach: function (t) {
                          for (
                            var e,
                              n = T(this).entries,
                              i = f(
                                t,
                                arguments.length > 1 ? arguments[1] : void 0,
                                3
                              ),
                              r = 0;
                            r < n.length;

                          )
                            i((e = n[r++]).value, e.key, this);
                        },
                        keys: function () {
                          return new H(this, "keys");
                        },
                        values: function () {
                          return new H(this, "values");
                        },
                        entries: function () {
                          return new H(this, "entries");
                        },
                      },
                      { enumerable: !0 }
                    ),
                    a(U, k, U.entries, { name: "entries" }),
                    a(
                      U,
                      "toString",
                      function () {
                        for (
                          var t, e = T(this).entries, n = [], i = 0;
                          i < e.length;

                        )
                          (t = e[i++]), n.push(N(t.key) + "=" + N(t.value));
                        return n.join("&");
                      },
                      { enumerable: !0 }
                    ),
                    l(Y, "URLSearchParams"),
                    i({ global: !0, forced: !o }, { URLSearchParams: Y }),
                    !o && p(C))
                  ) {
                    var X = function (t) {
                      if (g(t)) {
                        var e,
                          n = t.body;
                        if ("URLSearchParams" === b(n))
                          return (
                            (e = t.headers ? new C(t.headers) : new C()).has(
                              "content-type"
                            ) ||
                              e.set(
                                "content-type",
                                "application/x-www-form-urlencoded;charset=UTF-8"
                              ),
                            _(t, { body: y(0, String(n)), headers: y(0, e) })
                          );
                      }
                      return t;
                    };
                    if (
                      (p(A) &&
                        i(
                          { global: !0, enumerable: !0, forced: !0 },
                          {
                            fetch: function (t) {
                              return A(
                                t,
                                arguments.length > 1 ? X(arguments[1]) : {}
                              );
                            },
                          }
                        ),
                      p(x))
                    ) {
                      var V = function (t) {
                        return (
                          u(this, V, "Request"),
                          new x(t, arguments.length > 1 ? X(arguments[1]) : {})
                        );
                      };
                      (z.constructor = V),
                        (V.prototype = z),
                        i({ global: !0, forced: !0 }, { Request: V });
                    }
                  }
                  t.exports = { URLSearchParams: Y, getState: T };
                },
                4948: function (t, e, n) {
                  "use strict";
                  n(5454);
                  var i,
                    r = n(3085),
                    o = n(69),
                    a = n(4551),
                    s = n(8576),
                    l = n(1187),
                    c = n(9482),
                    d = n(6961),
                    u = n(4500),
                    p = n(2503),
                    h = n(841),
                    f = n(863).codeAt,
                    b = n(7977),
                    m = n(4845),
                    g = n(1284),
                    v = n(9336),
                    _ = n(3326),
                    y = s.URL,
                    M = v.URLSearchParams,
                    O = v.getState,
                    w = _.set,
                    A = _.getterFor("URL"),
                    x = Math.floor,
                    z = Math.pow,
                    C = /[A-Za-z]/,
                    k = /[\d+-.A-Za-z]/,
                    S = /\d/,
                    T = /^0x/i,
                    D = /^[0-7]+$/,
                    L = /^\d+$/,
                    q = /^[\dA-Fa-f]+$/,
                    E = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                    j = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                    P = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
                    R = /[\t\n\r]/g,
                    I = function (t, e) {
                      var n, i, r;
                      if ("[" == e.charAt(0)) {
                        if ("]" != e.charAt(e.length - 1))
                          return "Invalid host";
                        if (!(n = N(e.slice(1, -1)))) return "Invalid host";
                        t.host = n;
                      } else if (V(t)) {
                        if (((e = b(e)), E.test(e))) return "Invalid host";
                        if (null === (n = W(e))) return "Invalid host";
                        t.host = n;
                      } else {
                        if (j.test(e)) return "Invalid host";
                        for (n = "", i = h(e), r = 0; r < i.length; r++)
                          n += U(i[r], F);
                        t.host = n;
                      }
                    },
                    W = function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l = t.split(".");
                      if (
                        (l.length && "" == l[l.length - 1] && l.pop(),
                        (e = l.length) > 4)
                      )
                        return t;
                      for (n = [], i = 0; i < e; i++) {
                        if ("" == (r = l[i])) return t;
                        if (
                          ((o = 10),
                          r.length > 1 &&
                            "0" == r.charAt(0) &&
                            ((o = T.test(r) ? 16 : 8),
                            (r = r.slice(8 == o ? 1 : 2))),
                          "" === r)
                        )
                          a = 0;
                        else {
                          if (!(10 == o ? L : 8 == o ? D : q).test(r)) return t;
                          a = parseInt(r, o);
                        }
                        n.push(a);
                      }
                      for (i = 0; i < e; i++)
                        if (((a = n[i]), i == e - 1)) {
                          if (a >= z(256, 5 - e)) return null;
                        } else if (a > 255) return null;
                      for (s = n.pop(), i = 0; i < n.length; i++)
                        s += n[i] * z(256, 3 - i);
                      return s;
                    },
                    N = function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l = [0, 0, 0, 0, 0, 0, 0, 0],
                        c = 0,
                        d = null,
                        u = 0,
                        p = function () {
                          return t.charAt(u);
                        };
                      if (":" == p()) {
                        if (":" != t.charAt(1)) return;
                        (u += 2), (d = ++c);
                      }
                      for (; p(); ) {
                        if (8 == c) return;
                        if (":" != p()) {
                          for (e = n = 0; n < 4 && q.test(p()); )
                            (e = 16 * e + parseInt(p(), 16)), u++, n++;
                          if ("." == p()) {
                            if (0 == n) return;
                            if (((u -= n), c > 6)) return;
                            for (i = 0; p(); ) {
                              if (((r = null), i > 0)) {
                                if (!("." == p() && i < 4)) return;
                                u++;
                              }
                              if (!S.test(p())) return;
                              for (; S.test(p()); ) {
                                if (((o = parseInt(p(), 10)), null === r))
                                  r = o;
                                else {
                                  if (0 == r) return;
                                  r = 10 * r + o;
                                }
                                if (r > 255) return;
                                u++;
                              }
                              (l[c] = 256 * l[c] + r),
                                (2 != ++i && 4 != i) || c++;
                            }
                            if (4 != i) return;
                            break;
                          }
                          if (":" == p()) {
                            if ((u++, !p())) return;
                          } else if (p()) return;
                          l[c++] = e;
                        } else {
                          if (null !== d) return;
                          u++, (d = ++c);
                        }
                      }
                      if (null !== d)
                        for (a = c - d, c = 7; 0 != c && a > 0; )
                          (s = l[c]), (l[c--] = l[d + a - 1]), (l[d + --a] = s);
                      else if (8 != c) return;
                      return l;
                    },
                    B = function (t) {
                      var e, n, i, r;
                      if ("number" == typeof t) {
                        for (e = [], n = 0; n < 4; n++)
                          e.unshift(t % 256), (t = x(t / 256));
                        return e.join(".");
                      }
                      if ("object" == typeof t) {
                        for (
                          e = "",
                            i = (function (t) {
                              for (
                                var e = null, n = 1, i = null, r = 0, o = 0;
                                o < 8;
                                o++
                              )
                                0 !== t[o]
                                  ? (r > n && ((e = i), (n = r)),
                                    (i = null),
                                    (r = 0))
                                  : (null === i && (i = o), ++r);
                              return r > n && ((e = i), (n = r)), e;
                            })(t),
                            n = 0;
                          n < 8;
                          n++
                        )
                          (r && 0 === t[n]) ||
                            (r && (r = !1),
                            i === n
                              ? ((e += n ? ":" : "::"), (r = !0))
                              : ((e += t[n].toString(16)),
                                n < 7 && (e += ":")));
                        return "[" + e + "]";
                      }
                      return t;
                    },
                    F = {},
                    $ = p({}, F, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
                    H = p({}, $, { "#": 1, "?": 1, "{": 1, "}": 1 }),
                    Y = p({}, H, {
                      "/": 1,
                      ":": 1,
                      ";": 1,
                      "=": 1,
                      "@": 1,
                      "[": 1,
                      "\\": 1,
                      "]": 1,
                      "^": 1,
                      "|": 1,
                    }),
                    U = function (t, e) {
                      var n = f(t, 0);
                      return n > 32 && n < 127 && !u(e, t)
                        ? t
                        : encodeURIComponent(t);
                    },
                    X = {
                      ftp: 21,
                      file: null,
                      http: 80,
                      https: 443,
                      ws: 80,
                      wss: 443,
                    },
                    V = function (t) {
                      return u(X, t.scheme);
                    },
                    G = function (t) {
                      return "" != t.username || "" != t.password;
                    },
                    K = function (t) {
                      return (
                        !t.host || t.cannotBeABaseURL || "file" == t.scheme
                      );
                    },
                    Z = function (t, e) {
                      var n;
                      return (
                        2 == t.length &&
                        C.test(t.charAt(0)) &&
                        (":" == (n = t.charAt(1)) || (!e && "|" == n))
                      );
                    },
                    J = function (t) {
                      var e;
                      return (
                        t.length > 1 &&
                        Z(t.slice(0, 2)) &&
                        (2 == t.length ||
                          "/" === (e = t.charAt(2)) ||
                          "\\" === e ||
                          "?" === e ||
                          "#" === e)
                      );
                    },
                    Q = function (t) {
                      var e = t.path,
                        n = e.length;
                      !n ||
                        ("file" == t.scheme && 1 == n && Z(e[0], !0)) ||
                        e.pop();
                    },
                    tt = function (t) {
                      return "." === t || "%2e" === t.toLowerCase();
                    },
                    et = {},
                    nt = {},
                    it = {},
                    rt = {},
                    ot = {},
                    at = {},
                    st = {},
                    lt = {},
                    ct = {},
                    dt = {},
                    ut = {},
                    pt = {},
                    ht = {},
                    ft = {},
                    bt = {},
                    mt = {},
                    gt = {},
                    vt = {},
                    _t = {},
                    yt = {},
                    Mt = {},
                    Ot = function (t, e, n, r) {
                      var o,
                        a,
                        s,
                        l,
                        c,
                        d = n || et,
                        p = 0,
                        f = "",
                        b = !1,
                        m = !1,
                        g = !1;
                      for (
                        n ||
                          ((t.scheme = ""),
                          (t.username = ""),
                          (t.password = ""),
                          (t.host = null),
                          (t.port = null),
                          (t.path = []),
                          (t.query = null),
                          (t.fragment = null),
                          (t.cannotBeABaseURL = !1),
                          (e = e.replace(P, ""))),
                          e = e.replace(R, ""),
                          o = h(e);
                        p <= o.length;

                      ) {
                        switch (((a = o[p]), d)) {
                          case et:
                            if (!a || !C.test(a)) {
                              if (n) return "Invalid scheme";
                              d = it;
                              continue;
                            }
                            (f += a.toLowerCase()), (d = nt);
                            break;
                          case nt:
                            if (
                              a &&
                              (k.test(a) || "+" == a || "-" == a || "." == a)
                            )
                              f += a.toLowerCase();
                            else {
                              if (":" != a) {
                                if (n) return "Invalid scheme";
                                (f = ""), (d = it), (p = 0);
                                continue;
                              }
                              if (
                                n &&
                                (V(t) != u(X, f) ||
                                  ("file" == f && (G(t) || null !== t.port)) ||
                                  ("file" == t.scheme && !t.host))
                              )
                                return;
                              if (((t.scheme = f), n))
                                return void (
                                  V(t) &&
                                  X[t.scheme] == t.port &&
                                  (t.port = null)
                                );
                              (f = ""),
                                "file" == t.scheme
                                  ? (d = ft)
                                  : V(t) && r && r.scheme == t.scheme
                                  ? (d = rt)
                                  : V(t)
                                  ? (d = lt)
                                  : "/" == o[p + 1]
                                  ? ((d = ot), p++)
                                  : ((t.cannotBeABaseURL = !0),
                                    t.path.push(""),
                                    (d = _t));
                            }
                            break;
                          case it:
                            if (!r || (r.cannotBeABaseURL && "#" != a))
                              return "Invalid scheme";
                            if (r.cannotBeABaseURL && "#" == a) {
                              (t.scheme = r.scheme),
                                (t.path = r.path.slice()),
                                (t.query = r.query),
                                (t.fragment = ""),
                                (t.cannotBeABaseURL = !0),
                                (d = Mt);
                              break;
                            }
                            d = "file" == r.scheme ? ft : at;
                            continue;
                          case rt:
                            if ("/" != a || "/" != o[p + 1]) {
                              d = at;
                              continue;
                            }
                            (d = ct), p++;
                            break;
                          case ot:
                            if ("/" == a) {
                              d = dt;
                              break;
                            }
                            d = vt;
                            continue;
                          case at:
                            if (((t.scheme = r.scheme), a == i))
                              (t.username = r.username),
                                (t.password = r.password),
                                (t.host = r.host),
                                (t.port = r.port),
                                (t.path = r.path.slice()),
                                (t.query = r.query);
                            else if ("/" == a || ("\\" == a && V(t))) d = st;
                            else if ("?" == a)
                              (t.username = r.username),
                                (t.password = r.password),
                                (t.host = r.host),
                                (t.port = r.port),
                                (t.path = r.path.slice()),
                                (t.query = ""),
                                (d = yt);
                            else {
                              if ("#" != a) {
                                (t.username = r.username),
                                  (t.password = r.password),
                                  (t.host = r.host),
                                  (t.port = r.port),
                                  (t.path = r.path.slice()),
                                  t.path.pop(),
                                  (d = vt);
                                continue;
                              }
                              (t.username = r.username),
                                (t.password = r.password),
                                (t.host = r.host),
                                (t.port = r.port),
                                (t.path = r.path.slice()),
                                (t.query = r.query),
                                (t.fragment = ""),
                                (d = Mt);
                            }
                            break;
                          case st:
                            if (!V(t) || ("/" != a && "\\" != a)) {
                              if ("/" != a) {
                                (t.username = r.username),
                                  (t.password = r.password),
                                  (t.host = r.host),
                                  (t.port = r.port),
                                  (d = vt);
                                continue;
                              }
                              d = dt;
                            } else d = ct;
                            break;
                          case lt:
                            if (((d = ct), "/" != a || "/" != f.charAt(p + 1)))
                              continue;
                            p++;
                            break;
                          case ct:
                            if ("/" != a && "\\" != a) {
                              d = dt;
                              continue;
                            }
                            break;
                          case dt:
                            if ("@" == a) {
                              b && (f = "%40" + f), (b = !0), (s = h(f));
                              for (var v = 0; v < s.length; v++) {
                                var _ = s[v];
                                if (":" != _ || g) {
                                  var y = U(_, Y);
                                  g ? (t.password += y) : (t.username += y);
                                } else g = !0;
                              }
                              f = "";
                            } else if (
                              a == i ||
                              "/" == a ||
                              "?" == a ||
                              "#" == a ||
                              ("\\" == a && V(t))
                            ) {
                              if (b && "" == f) return "Invalid authority";
                              (p -= h(f).length + 1), (f = ""), (d = ut);
                            } else f += a;
                            break;
                          case ut:
                          case pt:
                            if (n && "file" == t.scheme) {
                              d = mt;
                              continue;
                            }
                            if (":" != a || m) {
                              if (
                                a == i ||
                                "/" == a ||
                                "?" == a ||
                                "#" == a ||
                                ("\\" == a && V(t))
                              ) {
                                if (V(t) && "" == f) return "Invalid host";
                                if (n && "" == f && (G(t) || null !== t.port))
                                  return;
                                if ((l = I(t, f))) return l;
                                if (((f = ""), (d = gt), n)) return;
                                continue;
                              }
                              "[" == a ? (m = !0) : "]" == a && (m = !1),
                                (f += a);
                            } else {
                              if ("" == f) return "Invalid host";
                              if ((l = I(t, f))) return l;
                              if (((f = ""), (d = ht), n == pt)) return;
                            }
                            break;
                          case ht:
                            if (!S.test(a)) {
                              if (
                                a == i ||
                                "/" == a ||
                                "?" == a ||
                                "#" == a ||
                                ("\\" == a && V(t)) ||
                                n
                              ) {
                                if ("" != f) {
                                  var M = parseInt(f, 10);
                                  if (M > 65535) return "Invalid port";
                                  (t.port =
                                    V(t) && M === X[t.scheme] ? null : M),
                                    (f = "");
                                }
                                if (n) return;
                                d = gt;
                                continue;
                              }
                              return "Invalid port";
                            }
                            f += a;
                            break;
                          case ft:
                            if (((t.scheme = "file"), "/" == a || "\\" == a))
                              d = bt;
                            else {
                              if (!r || "file" != r.scheme) {
                                d = vt;
                                continue;
                              }
                              if (a == i)
                                (t.host = r.host),
                                  (t.path = r.path.slice()),
                                  (t.query = r.query);
                              else if ("?" == a)
                                (t.host = r.host),
                                  (t.path = r.path.slice()),
                                  (t.query = ""),
                                  (d = yt);
                              else {
                                if ("#" != a) {
                                  J(o.slice(p).join("")) ||
                                    ((t.host = r.host),
                                    (t.path = r.path.slice()),
                                    Q(t)),
                                    (d = vt);
                                  continue;
                                }
                                (t.host = r.host),
                                  (t.path = r.path.slice()),
                                  (t.query = r.query),
                                  (t.fragment = ""),
                                  (d = Mt);
                              }
                            }
                            break;
                          case bt:
                            if ("/" == a || "\\" == a) {
                              d = mt;
                              break;
                            }
                            r &&
                              "file" == r.scheme &&
                              !J(o.slice(p).join("")) &&
                              (Z(r.path[0], !0)
                                ? t.path.push(r.path[0])
                                : (t.host = r.host)),
                              (d = vt);
                            continue;
                          case mt:
                            if (
                              a == i ||
                              "/" == a ||
                              "\\" == a ||
                              "?" == a ||
                              "#" == a
                            ) {
                              if (!n && Z(f)) d = vt;
                              else if ("" == f) {
                                if (((t.host = ""), n)) return;
                                d = gt;
                              } else {
                                if ((l = I(t, f))) return l;
                                if (("localhost" == t.host && (t.host = ""), n))
                                  return;
                                (f = ""), (d = gt);
                              }
                              continue;
                            }
                            f += a;
                            break;
                          case gt:
                            if (V(t)) {
                              if (((d = vt), "/" != a && "\\" != a)) continue;
                            } else if (n || "?" != a)
                              if (n || "#" != a) {
                                if (a != i && ((d = vt), "/" != a)) continue;
                              } else (t.fragment = ""), (d = Mt);
                            else (t.query = ""), (d = yt);
                            break;
                          case vt:
                            if (
                              a == i ||
                              "/" == a ||
                              ("\\" == a && V(t)) ||
                              (!n && ("?" == a || "#" == a))
                            ) {
                              if (
                                (".." === (c = (c = f).toLowerCase()) ||
                                "%2e." === c ||
                                ".%2e" === c ||
                                "%2e%2e" === c
                                  ? (Q(t),
                                    "/" == a ||
                                      ("\\" == a && V(t)) ||
                                      t.path.push(""))
                                  : tt(f)
                                  ? "/" == a ||
                                    ("\\" == a && V(t)) ||
                                    t.path.push("")
                                  : ("file" == t.scheme &&
                                      !t.path.length &&
                                      Z(f) &&
                                      (t.host && (t.host = ""),
                                      (f = f.charAt(0) + ":")),
                                    t.path.push(f)),
                                (f = ""),
                                "file" == t.scheme &&
                                  (a == i || "?" == a || "#" == a))
                              )
                                for (; t.path.length > 1 && "" === t.path[0]; )
                                  t.path.shift();
                              "?" == a
                                ? ((t.query = ""), (d = yt))
                                : "#" == a && ((t.fragment = ""), (d = Mt));
                            } else f += U(a, H);
                            break;
                          case _t:
                            "?" == a
                              ? ((t.query = ""), (d = yt))
                              : "#" == a
                              ? ((t.fragment = ""), (d = Mt))
                              : a != i && (t.path[0] += U(a, F));
                            break;
                          case yt:
                            n || "#" != a
                              ? a != i &&
                                ("'" == a && V(t)
                                  ? (t.query += "%27")
                                  : (t.query += "#" == a ? "%23" : U(a, F)))
                              : ((t.fragment = ""), (d = Mt));
                            break;
                          case Mt:
                            a != i && (t.fragment += U(a, $));
                        }
                        p++;
                      }
                    },
                    wt = function (t) {
                      var e,
                        n,
                        i = d(this, wt, "URL"),
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        a = m(t),
                        s = w(i, { type: "URL" });
                      if (void 0 !== r)
                        if (r instanceof wt) e = A(r);
                        else if ((n = Ot((e = {}), m(r)))) throw TypeError(n);
                      if ((n = Ot(s, a, null, e))) throw TypeError(n);
                      var l = (s.searchParams = new M()),
                        c = O(l);
                      c.updateSearchParams(s.query),
                        (c.updateURL = function () {
                          s.query = String(l) || null;
                        }),
                        o ||
                          ((i.href = xt.call(i)),
                          (i.origin = zt.call(i)),
                          (i.protocol = Ct.call(i)),
                          (i.username = kt.call(i)),
                          (i.password = St.call(i)),
                          (i.host = Tt.call(i)),
                          (i.hostname = Dt.call(i)),
                          (i.port = Lt.call(i)),
                          (i.pathname = qt.call(i)),
                          (i.search = Et.call(i)),
                          (i.searchParams = jt.call(i)),
                          (i.hash = Pt.call(i)));
                    },
                    At = wt.prototype,
                    xt = function () {
                      var t = A(this),
                        e = t.scheme,
                        n = t.username,
                        i = t.password,
                        r = t.host,
                        o = t.port,
                        a = t.path,
                        s = t.query,
                        l = t.fragment,
                        c = e + ":";
                      return (
                        null !== r
                          ? ((c += "//"),
                            G(t) && (c += n + (i ? ":" + i : "") + "@"),
                            (c += B(r)),
                            null !== o && (c += ":" + o))
                          : "file" == e && (c += "//"),
                        (c += t.cannotBeABaseURL
                          ? a[0]
                          : a.length
                          ? "/" + a.join("/")
                          : ""),
                        null !== s && (c += "?" + s),
                        null !== l && (c += "#" + l),
                        c
                      );
                    },
                    zt = function () {
                      var t = A(this),
                        e = t.scheme,
                        n = t.port;
                      if ("blob" == e)
                        try {
                          return new wt(e.path[0]).origin;
                        } catch (t) {
                          return "null";
                        }
                      return "file" != e && V(t)
                        ? e + "://" + B(t.host) + (null !== n ? ":" + n : "")
                        : "null";
                    },
                    Ct = function () {
                      return A(this).scheme + ":";
                    },
                    kt = function () {
                      return A(this).username;
                    },
                    St = function () {
                      return A(this).password;
                    },
                    Tt = function () {
                      var t = A(this),
                        e = t.host,
                        n = t.port;
                      return null === e
                        ? ""
                        : null === n
                        ? B(e)
                        : B(e) + ":" + n;
                    },
                    Dt = function () {
                      var t = A(this).host;
                      return null === t ? "" : B(t);
                    },
                    Lt = function () {
                      var t = A(this).port;
                      return null === t ? "" : String(t);
                    },
                    qt = function () {
                      var t = A(this),
                        e = t.path;
                      return t.cannotBeABaseURL
                        ? e[0]
                        : e.length
                        ? "/" + e.join("/")
                        : "";
                    },
                    Et = function () {
                      var t = A(this).query;
                      return t ? "?" + t : "";
                    },
                    jt = function () {
                      return A(this).searchParams;
                    },
                    Pt = function () {
                      var t = A(this).fragment;
                      return t ? "#" + t : "";
                    },
                    Rt = function (t, e) {
                      return {
                        get: t,
                        set: e,
                        configurable: !0,
                        enumerable: !0,
                      };
                    };
                  if (
                    (o &&
                      l(At, {
                        href: Rt(xt, function (t) {
                          var e = A(this),
                            n = m(t),
                            i = Ot(e, n);
                          if (i) throw TypeError(i);
                          O(e.searchParams).updateSearchParams(e.query);
                        }),
                        origin: Rt(zt),
                        protocol: Rt(Ct, function (t) {
                          var e = A(this);
                          Ot(e, m(t) + ":", et);
                        }),
                        username: Rt(kt, function (t) {
                          var e = A(this),
                            n = h(m(t));
                          if (!K(e)) {
                            e.username = "";
                            for (var i = 0; i < n.length; i++)
                              e.username += U(n[i], Y);
                          }
                        }),
                        password: Rt(St, function (t) {
                          var e = A(this),
                            n = h(m(t));
                          if (!K(e)) {
                            e.password = "";
                            for (var i = 0; i < n.length; i++)
                              e.password += U(n[i], Y);
                          }
                        }),
                        host: Rt(Tt, function (t) {
                          var e = A(this);
                          e.cannotBeABaseURL || Ot(e, m(t), ut);
                        }),
                        hostname: Rt(Dt, function (t) {
                          var e = A(this);
                          e.cannotBeABaseURL || Ot(e, m(t), pt);
                        }),
                        port: Rt(Lt, function (t) {
                          var e = A(this);
                          K(e) ||
                            ("" == (t = m(t)) ? (e.port = null) : Ot(e, t, ht));
                        }),
                        pathname: Rt(qt, function (t) {
                          var e = A(this);
                          e.cannotBeABaseURL ||
                            ((e.path = []), Ot(e, m(t), gt));
                        }),
                        search: Rt(Et, function (t) {
                          var e = A(this);
                          "" == (t = m(t))
                            ? (e.query = null)
                            : ("?" == t.charAt(0) && (t = t.slice(1)),
                              (e.query = ""),
                              Ot(e, t, yt)),
                            O(e.searchParams).updateSearchParams(e.query);
                        }),
                        searchParams: Rt(jt),
                        hash: Rt(Pt, function (t) {
                          var e = A(this);
                          "" != (t = m(t))
                            ? ("#" == t.charAt(0) && (t = t.slice(1)),
                              (e.fragment = ""),
                              Ot(e, t, Mt))
                            : (e.fragment = null);
                        }),
                      }),
                    c(
                      At,
                      "toJSON",
                      function () {
                        return xt.call(this);
                      },
                      { enumerable: !0 }
                    ),
                    c(
                      At,
                      "toString",
                      function () {
                        return xt.call(this);
                      },
                      { enumerable: !0 }
                    ),
                    y)
                  ) {
                    var It = y.createObjectURL,
                      Wt = y.revokeObjectURL;
                    It &&
                      c(wt, "createObjectURL", function (t) {
                        return It.apply(y, arguments);
                      }),
                      Wt &&
                        c(wt, "revokeObjectURL", function (t) {
                          return Wt.apply(y, arguments);
                        });
                  }
                  g(wt, "URL"),
                    r({ global: !0, forced: !a, sham: !o }, { URL: wt });
                },
                9801: function () {},
                3822: function (t, e, n) {
                  var i = n(2221);
                  t.exports = i;
                },
                1434: function (t, e, n) {
                  var i = n(5078);
                  t.exports = i;
                },
                6899: function (t, e, n) {
                  var i = n(98);
                  t.exports = i;
                },
                7710: function (t, e, n) {
                  var i = n(5739);
                  n(162), (t.exports = i);
                },
                4486: function (t, e, n) {
                  var i = n(278);
                  t.exports = i;
                },
                4877: function (t, e, n) {
                  var i = n(1484);
                  t.exports = i;
                },
                7178: function (t, e, n) {
                  var i = n(7731);
                  t.exports = i;
                },
                5603: function (t, e, n) {
                  var i = n(3669);
                  t.exports = i;
                },
                1206: function (t, e, n) {
                  n(162);
                  var i = n(6899),
                    r = n(4696),
                    o = Array.prototype,
                    a = { DOMTokenList: !0, NodeList: !0 };
                  t.exports = function (t) {
                    var e = t.forEach;
                    return t === o ||
                      (t instanceof Array && e === o.forEach) ||
                      a.hasOwnProperty(r(t))
                      ? i
                      : e;
                  };
                },
                6174: function (t, e, n) {
                  var i = n(2604);
                  t.exports = i;
                },
                57: function (t, e, n) {
                  var i = n(263);
                  t.exports = i;
                },
                4741: function (t, e, n) {
                  var i = n(7663);
                  t.exports = i;
                },
                8368: function (t, e, n) {
                  var i = n(5063);
                  t.exports = i;
                },
                3739: function (t, e, n) {
                  var i = n(6813);
                  t.exports = i;
                },
                172: function (t, e, n) {
                  var i = n(6285);
                  t.exports = i;
                },
                4963: function (t, e, n) {
                  var i = n(3213);
                  t.exports = i;
                },
                7820: function (t, e, n) {
                  var i = n(3512);
                  t.exports = i;
                },
                8980: function (t, e, n) {
                  var i = n(8168);
                  t.exports = i;
                },
                5636: function (t, e, n) {
                  var i = n(8651);
                  t.exports = i;
                },
                6672: function (t, e, n) {
                  var i = n(3083);
                  t.exports = i;
                },
                5059: function (t, e, n) {
                  var i = n(2987);
                  t.exports = i;
                },
                3969: function (t, e, n) {
                  var i = n(2239);
                  t.exports = i;
                },
                6618: function (t, e, n) {
                  var i = n(3154);
                  n(162), (t.exports = i);
                },
                5279: function (t, e, n) {
                  var i = n(6577);
                  t.exports = i;
                },
                9562: function (t, e, n) {
                  n(2906);
                  var i = n(7545);
                  t.exports = i.setTimeout;
                },
                2285: function (t, e, n) {
                  var i = n(5008);
                  n(162), (t.exports = i);
                },
                8535: function (t, e, n) {
                  var i = n(994);
                  n(162), (t.exports = i);
                },
                652: function (t, e, n) {
                  var i = n(5668);
                  t.exports = i;
                },
                5668: function (t, e, n) {
                  n(4948), n(9801), n(9336);
                  var i = n(7545);
                  t.exports = i.URL;
                },
                2534: function (t) {
                  "use strict";
                  t.exports =
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBkaXNwbGF5PSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMgaWQ9InR1aS1pbWFnZS1lZGl0b3Itc3ZnLWRlZmF1bHQtaWNvbnMiPgo8c3ltYm9sIGlkPSJpYy1hcHBseSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBkPSJNNCAxMi4wMTFsNSA1TDIwLjAxMSA2Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1jYW5jZWwiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgZD0iTTYgNmwxMiAxMk0xOCA2TDYgMTgiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWNyb3AiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIC8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik00IDBoMXYyMGExIDEgMCAwIDEtMS0xVjB6TTIwIDE3aC0xVjVoMXYxMnptMCAydjVoLTF2LTVoMXoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTUgMTloMTl2MUg1ek00Ljc2MiA0djFIMFY0aDQuNzYyek03IDRoMTJhMSAxIDAgMCAxIDEgMUg3VjR6Ii8+Cjwvc3ltYm9sPgo8IS0tIFRoaXMgaWNvbiBtYWRlIGJ5IFBpeGVsIHBlcmZlY3QgZnJvbSB3d3cuZmxhdGljb24uY29tIC0tPgo8c3ltYm9sIGlkPSJpYy1yZXNpemUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIi8+CiAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNIDE4Ljk4ODI4MSAzLjAxMTcxOSBDIDE4LjgwMDc4MSAyLjgyNDIxOSAxOC41IDIuODI0MjE5IDE4LjMxMjUgMy4wMTE3MTkgTCAxMS42MjEwOTQgOS43MDcwMzEgQyAxMS40Mjk2ODggOS44OTQ1MzEgMTEuNDI5Njg4IDEwLjE5NTMxMiAxMS42MjEwOTQgMTAuMzc4OTA2IEMgMTEuNzEwOTM4IDEwLjQ3MjY1NiAxMS44MzU5MzggMTAuNTE5NTMxIDExLjk1NzAzMSAxMC41MTk1MzEgQyAxMi4wNzgxMjUgMTAuNTE5NTMxIDEyLjIwMzEyNSAxMC40NzI2NTYgMTIuMjkyOTY5IDEwLjM3ODkwNiBMIDE4Ljk4ODI4MSAzLjY4NzUgQyAxOS4xNzU3ODEgMy41IDE5LjE3NTc4MSAzLjE5OTIxOSAxOC45ODgyODEgMy4wMTE3MTkgWiBNIDE4Ljk4ODI4MSAzLjAxMTcxOSAiLz4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0gMTguNjUyMzQ0IDIuODY3MTg4IEMgMTguMzg2NzE5IDIuODY3MTg4IDE4LjE3MTg3NSAzLjA4MjAzMSAxOC4xNzE4NzUgMy4zNDc2NTYgTCAxOC4xNzE4NzUgOS4wODU5MzggQyAxOC4xNzE4NzUgOS4zNDc2NTYgMTguMzg2NzE5IDkuNTYyNSAxOC42NTIzNDQgOS41NjI1IEMgMTguOTE3OTY5IDkuNTYyNSAxOS4xMzI4MTIgOS4zNDc2NTYgMTkuMTMyODEyIDkuMDg1OTM4IEwgMTkuMTMyODEyIDMuMzQ3NjU2IEMgMTkuMTMyODEyIDMuMDgyMDMxIDE4LjkxNzk2OSAyLjg2NzE4OCAxOC42NTIzNDQgMi44NjcxODggWiBNIDE4LjY1MjM0NCAyLjg2NzE4OCAiLz4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0gMTguNjUyMzQ0IDIuODY3MTg4IEwgMTIuOTE0MDYyIDIuODY3MTg4IEMgMTIuNjUyMzQ0IDIuODY3MTg4IDEyLjQzNzUgMy4wODIwMzEgMTIuNDM3NSAzLjM0NzY1NiBDIDEyLjQzNzUgMy42MTMyODEgMTIuNjUyMzQ0IDMuODI4MTI1IDEyLjkxNDA2MiAzLjgyODEyNSBMIDE4LjY1MjM0NCAzLjgyODEyNSBDIDE4LjkxNzk2OSAzLjgyODEyNSAxOS4xMzI4MTIgMy42MTMyODEgMTkuMTMyODEyIDMuMzQ3NjU2IEMgMTkuMTMyODEyIDMuMDgyMDMxIDE4LjkxNzk2OSAyLjg2NzE4OCAxOC42NTIzNDQgMi44NjcxODggWiBNIDE4LjY1MjM0NCAyLjg2NzE4OCAiLz4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0gMTAuMzc4OTA2IDExLjYyMTA5NCBDIDEwLjE5NTMxMiAxMS40MzM1OTQgOS44OTA2MjUgMTEuNDMzNTk0IDkuNzAzMTI1IDExLjYyMTA5NCBMIDMuMDA3ODEyIDE4LjMxNjQwNiBDIDIuODIwMzEyIDE4LjUgMi44MjAzMTIgMTguODA0Njg4IDMuMDA3ODEyIDE4Ljk5MjE4OCBDIDMuMTA1NDY5IDE5LjA4NTkzOCAzLjIyNjU2MiAxOS4xMzI4MTIgMy4zNDc2NTYgMTkuMTMyODEyIEMgMy40Njg3NSAxOS4xMzI4MTIgMy41ODk4NDQgMTkuMDg1OTM4IDMuNjgzNTk0IDE4Ljk5MjE4OCBMIDEwLjM3ODkwNiAxMi4yOTY4NzUgQyAxMC41NjY0MDYgMTIuMTA5Mzc1IDEwLjU2NjQwNiAxMS44MDQ2ODggMTAuMzc4OTA2IDExLjYyMTA5NCBaIE0gMTAuMzc4OTA2IDExLjYyMTA5NCAiLz4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0gMy4zNDc2NTYgMTIuNDM3NSBDIDMuMDgyMDMxIDEyLjQzNzUgMi44NjcxODggMTIuNjUyMzQ0IDIuODY3MTg4IDEyLjkxNDA2MiBMIDIuODY3MTg4IDE4LjY1MjM0NCBDIDIuODY3MTg4IDE4LjkxNzk2OSAzLjA4MjAzMSAxOS4xMzI4MTIgMy4zNDc2NTYgMTkuMTMyODEyIEMgMy42MTMyODEgMTkuMTMyODEyIDMuODI4MTI1IDE4LjkxNzk2OSAzLjgyODEyNSAxOC42NTIzNDQgTCAzLjgyODEyNSAxMi45MTQwNjIgQyAzLjgyODEyNSAxMi42NTIzNDQgMy42MTMyODEgMTIuNDM3NSAzLjM0NzY1NiAxMi40Mzc1IFogTSAzLjM0NzY1NiAxMi40Mzc1ICIvPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTSA5LjA4NTkzOCAxOC4xNzE4NzUgTCAzLjM0NzY1NiAxOC4xNzE4NzUgQyAzLjA4MjAzMSAxOC4xNzE4NzUgMi44NjcxODggMTguMzg2NzE5IDIuODY3MTg4IDE4LjY1MjM0NCBDIDIuODY3MTg4IDE4LjkxNzk2OSAzLjA4MjAzMSAxOS4xMzI4MTIgMy4zNDc2NTYgMTkuMTMyODEyIEwgOS4wODU5MzggMTkuMTMyODEyIEMgOS4zNDc2NTYgMTkuMTMyODEyIDkuNTYyNSAxOC45MTc5NjkgOS41NjI1IDE4LjY1MjM0NCBDIDkuNTYyNSAxOC4zODY3MTkgOS4zNDc2NTYgMTguMTcxODc1IDkuMDg1OTM4IDE4LjE3MTg3NSBaIE0gOS4wODU5MzggMTguMTcxODc1ICIvPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTSAyMC41NjI1IDAgTCAxLjQzNzUgMCBDIDAuNjQ0NTMxIDAgMCAwLjY0NDUzMSAwIDEuNDM3NSBMIDAgMjAuNTYyNSBDIDAgMjEuMzU1NDY5IDAuNjQ0NTMxIDIyIDEuNDM3NSAyMiBMIDIwLjU2MjUgMjIgQyAyMS4zNTU0NjkgMjIgMjIgMjEuMzU1NDY5IDIyIDIwLjU2MjUgTCAyMiAxLjQzNzUgQyAyMiAwLjY0NDUzMSAyMS4zNTU0NjkgMCAyMC41NjI1IDAgWiBNIDIxLjA0Mjk2OSAyMC41NjI1IEMgMjEuMDQyOTY5IDIwLjgyODEyNSAyMC44MjgxMjUgMjEuMDQyOTY5IDIwLjU2MjUgMjEuMDQyOTY5IEwgMS40Mzc1IDIxLjA0Mjk2OSBDIDEuMTcxODc1IDIxLjA0Mjk2OSAwLjk1NzAzMSAyMC44MjgxMjUgMC45NTcwMzEgMjAuNTYyNSBMIDAuOTU3MDMxIDEuNDM3NSBDIDAuOTU3MDMxIDEuMTcxODc1IDEuMTcxODc1IDAuOTU3MDMxIDEuNDM3NSAwLjk1NzAzMSBMIDIwLjU2MjUgMC45NTcwMzEgQyAyMC44MjgxMjUgMC45NTcwMzEgMjEuMDQyOTY5IDEuMTcxODc1IDIxLjA0Mjk2OSAxLjQzNzUgWiBNIDIxLjA0Mjk2OSAyMC41NjI1ICIvPgo8L3N5bWJvbD4KPCEtLSAgLS0+CjxzeW1ib2wgaWQ9ImljLWRlbGV0ZS1hbGwiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik01IDIzSDNhMSAxIDAgMCAxLTEtMVY2aDF2MTZoMnYxem0xNi0xMGgtMVY2aDF2N3pNOSAxM0g4di0zaDF2M3ptMyAwaC0xdi0zaDF2M3ptMyAwaC0xdi0zaDF2M3pNMTQuNzk0IDMuNzk0TDEzIDJoLTNMOC4yMDYgMy43OTRBLjk2My45NjMgMCAwIDEgOCAyLjVsLjcwMy0xLjA1NUExIDEgMCAwIDEgOS41MzUgMWgzLjkzYTEgMSAwIDAgMSAuODMyLjQ0NUwxNSAyLjVhLjk2NS45NjUgMCAwIDEtLjIwNiAxLjI5NHpNMTQuMTk3IDRIOC44MDNoNS4zOTR6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0wIDNoMjN2MUgwek0xMS4yODYgMjFIOC43MTRMOCAyM0g3bDEtMi44VjIwaC4wNzFMOS41IDE2aDFsMS40MjkgNEgxMnYuMmwxIDIuOGgtMWwtLjcxNC0yem0tLjM1Ny0xTDEwIDE3LjQgOS4wNzEgMjBoMS44NTh6TTIwIDIyaDN2MWgtNHYtN2gxdjZ6bS01IDBoM3YxaC00di03aDF2NnoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWRlbGV0ZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTMgNnYxNmgxN1Y2aDF2MTZhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWNmgxek0xNC43OTQgMy43OTRMMTMgMmgtM0w4LjIwNiAzLjc5NEEuOTYzLjk2MyAwIDAgMSA4IDIuNWwuNzAzLTEuMDU1QTEgMSAwIDAgMSA5LjUzNSAxaDMuOTNhMSAxIDAgMCAxIC44MzIuNDQ1TDE1IDIuNWEuOTY1Ljk2NSAwIDAgMS0uMjA2IDEuMjk0ek0xNC4xOTcgNEg4LjgwM2g1LjM5NHoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTAgM2gyM3YxSDB6TTggMTBoMXY2SDh2LTZ6bTMgMGgxdjZoLTF2LTZ6bTMgMGgxdjZoLTF2LTZ6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1kcmF3LWZyZWUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIGQ9Ik0yLjUgMjAuOTI5QzIuNTk0IDEwLjk3NiA0LjMyMyA2IDcuNjg2IDZjNS44NzIgMCAyLjUyNCAxOSA3LjY5NyAxOXMxLjg5LTE0LjkyOSA2LjQxNC0xNC45MjkgMS4zNTcgMTAuODU4IDUuMTMgMTAuODU4YzEuODAyIDAgMi42NTctMi4yNjIgMi41NjYtNi43ODYiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWRyYXctbGluZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgZD0iTTIgMTUuNWgyOCIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtZHJhdyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgZD0iTTIuNSAyMS41SDVjLjI0NSAwIC40OC0uMDU4LjY5MS0uMTY4bC4xMjQtLjA2NS4xNC4wMWMuNDI5LjAyOC44NS0uMTI3IDEuMTYtLjQzN0wyMi41NSA1LjQwNWEuNS41IDAgMCAwIDAtLjcwN2wtMy4yNDYtMy4yNDVhLjUuNSAwIDAgMC0uNzA3IDBMMy4xNjIgMTYuODg4YTEuNDk1IDEuNDk1IDAgMCAwLS40MzcgMS4xNTVsLjAxLjE0LS4wNjUuMTIzYy0uMTExLjIxMi0uMTcuNDQ4LS4xNy42OTR2Mi41eiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMTYuNDE0IDMuNzA3bDMuODkgMy44OS0uNzA4LjcwNi0zLjg4OS0zLjg4OXoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWZpbHRlciIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTEyIDd2MUgyVjdoMTB6bTYgMGg0djFoLTRWN3pNMTIgMTZ2MWgxMHYtMUgxMnptLTYgMEgydjFoNHYtMXoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTguNSAyMGEzLjUgMy41IDAgMSAxIDAtNyAzLjUgMy41IDAgMCAxIDAgN3ptMC0xYTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1ek0xNS41IDExYTMuNSAzLjUgMCAxIDEgMC03IDMuNSAzLjUgMCAwIDEgMCA3em0wLTFhMi41IDIuNSAwIDEgMCAwLTUgMi41IDIuNSAwIDAgMCAwIDV6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1mbGlwLXJlc2V0IiB2aWV3Qm94PSIwIDAgMzEgMzIiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBkPSJNMzEgMEgwdjMyaDMxeiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMjggMTZhOCA4IDAgMCAxLTggOEgzdi0xaDF2LTdIM2E4IDggMCAwIDEgOC04aDE3djFoLTF2N2gxek0xMSA5YTcgNyAwIDAgMC03IDd2N2gxNmE3IDcgMCAwIDAgNy03VjlIMTF6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0yNCA1bDMuNSAzLjVMMjQgMTJNNyAyMGwtMy41IDMuNUw3IDI3Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1mbGlwLXgiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGQ9Ik0zMiAzMkgwVjBoMzJ6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0xNyAzMmgtMVYwaDF6TTI3LjE2NyAxMWwuNSAzaC0xLjAzbC0uNTQ2LTNoMS4wNzZ6bS0uNS0zaC0xLjEyMkwyNSA1aC01VjRoNS4xNTNhMSAxIDAgMCAxIC45ODYuODM2TDI2LjY2NyA4em0xLjUgOWwuNSAzaC0uOTRsLS41NDUtM2guOTg1em0xIDZsLjYzOSAzLjgzNkExIDEgMCAwIDEgMjguODE5IDI4SDI2di0xaDNsLS43MjYtNGguODk0ek0yMyAyOGgtM3YtMWgzdjF6TTEzIDR2MUg3TDMgMjdoMTB2MUgzLjE4YTEgMSAwIDAgMS0uOTg2LTEuMTY0bDMuNjY2LTIyQTEgMSAwIDAgMSA2Ljg0NyA0SDEzeiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtZmxpcC15IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBkPSJNMCAwdjMyaDMyVjB6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0wIDE2djFoMzJ2LTF6TTExIDI3LjE2N2wzIC41di0xLjAzbC0zLS41NDZ2MS4wNzZ6bS0zLS41di0xLjEyMkw1IDI1di01SDR2NS4xNTNhMSAxIDAgMCAwIC44MzYuOTg2TDggMjYuNjY3em05IDEuNWwzIC41di0uOTRsLTMtLjU0NXYuOTg1em02IDFsMy44MzYuNjM5QTEgMSAwIDAgMCAyOCAyOC44MlYyNmgtMXYzbC00LS43Mjd2Ljg5NHpNMjggMjN2LTNoLTF2M2gxek00IDEzaDFWN2wyMi00djEwaDFWMy4xOGExIDEgMCAwIDAtMS4xNjQtLjk4NmwtMjIgMy42NjdBMSAxIDAgMCAwIDQgNi44NDdWMTN6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1mbGlwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiAvPgogICAgPHBhdGggZmlsbD0iaW5oZXJpdCIgc3Ryb2tlPSJub25lIiBkPSJNMTEgMGgxdjI0aC0xek0xOSAyMXYtMWgydi0yaDF2MmExIDEgMCAwIDEtMSAxaC0yem0tMiAwaC0zdi0xaDN2MXptNS01aC0xdi0zaDF2M3ptMC01aC0xVjhoMXYzem0wLTVoLTFWNGgtMlYzaDJhMSAxIDAgMCAxIDEgMXYyem0tNS0zdjFoLTNWM2gzek05IDN2MUgydjE2aDd2MUgyYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDd6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBkPSJNMCAwSDI0VjI0SDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQwIC0xNikgdHJhbnNsYXRlKDU0NyA4KSB0cmFuc2xhdGUoMTkzIDgpIi8+CiAgICA8cGF0aCBmaWxsPSJpbmhlcml0IiBzdHJva2U9Im5vbmUiIGQ9Ik0xMi41IDFDMTguMjk5IDEgMjMgNS43MDEgMjMgMTEuNVMxOC4yOTkgMjIgMTIuNSAyMmMtNS4yOSAwLTkuNjY1LTMuOTExLTEwLjM5NC04Ljk5OWgxLjAxMkMzLjgzOCAxNy41MzQgNy43NjQgMjEgMTIuNSAyMWM1LjI0NyAwIDkuNS00LjI1MyA5LjUtOS41UzE3Ljc0NyAyIDEyLjUgMkM4LjQ5IDIgNS4wNiA0LjQ4NSAzLjY2NiA4SDNoNHYxSDJWNGgxdjMuMDIyQzQuNjggMy40NjIgOC4zMDMgMSAxMi41IDF6bS41IDVsLS4wMDEgNS4yOTEgMi41MzcgMi41MzctLjcwOC43MDhMMTIuMjkyIDEySDEyVjZoMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NDAgLTE2KSB0cmFuc2xhdGUoNTQ3IDgpIHRyYW5zbGF0ZSgxOTMgOCkiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWhpc3RvcnktY2hlY2siIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiID4KICAgICAgICA8cGF0aCBzdHJva2U9IiM1NTU1NTUiIGQ9Ik00LjUgLTFMMS41IDIgNi41IDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtODA0KSB0cmFuc2xhdGUoNjAgODA0KSB0cmFuc2xhdGUoMiAzKSByb3RhdGUoLTkwIDQgMykiIC8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LWNyb3AiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBIMTJWMTJIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NCAtODA0KSB0cmFuc2xhdGUoODQgODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0yIDBoMXYxMGMtLjU1MiAwLTEtLjQ0OC0xLTFWMHpNMTAgOXYzSDlWOWgxek05IDJoMXY2SDlWMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NCAtODA0KSB0cmFuc2xhdGUoODQgODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0yIDlIMTJWMTBIMnpNOSAyYy41MTMgMCAuOTM2LjM4Ni45OTMuODgzTDEwIDNIM1YyaDZ6TTIgM0gwVjJoMnYxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg0IC04MDQpIHRyYW5zbGF0ZSg4NCA4MDQpIi8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8IS0tIFRoaXMgaWNvbiBtYWRlIGJ5IFBpeGVsIHBlcmZlY3QgZnJvbSB3d3cuZmxhdGljb24uY29tIC0tPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LXJlc2l6ZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTSA5LjQ5MjE4OCAxLjUwNzgxMiBDIDkuMzk4NDM4IDEuNDE0MDYyIDkuMjUgMS40MTQwNjIgOS4xNTYyNSAxLjUwNzgxMiBMIDUuODEyNSA0Ljg1MTU2MiBDIDUuNzE0ODQ0IDQuOTQ1MzEyIDUuNzE0ODQ0IDUuMDk3NjU2IDUuODEyNSA1LjE4NzUgQyA1Ljg1NTQ2OSA1LjIzNDM3NSA1LjkxNzk2OSA1LjI1NzgxMiA1Ljk3NjU2MiA1LjI1NzgxMiBDIDYuMDM5MDYyIDUuMjU3ODEyIDYuMTAxNTYyIDUuMjM0Mzc1IDYuMTQ4NDM4IDUuMTg3NSBMIDkuNDkyMTg4IDEuODQzNzUgQyA5LjU4NTkzOCAxLjc1IDkuNTg1OTM4IDEuNjAxNTYyIDkuNDkyMTg4IDEuNTA3ODEyIFogTSA5LjQ5MjE4OCAxLjUwNzgxMiAiLz4KICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0gOS4zMjgxMjUgMS40MzM1OTQgQyA5LjE5NTMxMiAxLjQzMzU5NCA5LjA4NTkzOCAxLjUzOTA2MiA5LjA4NTkzOCAxLjY3MTg3NSBMIDkuMDg1OTM4IDQuNTQyOTY5IEMgOS4wODU5MzggNC42NzE4NzUgOS4xOTUzMTIgNC43ODEyNSA5LjMyODEyNSA0Ljc4MTI1IEMgOS40NjA5MzggNC43ODEyNSA5LjU2NjQwNiA0LjY3MTg3NSA5LjU2NjQwNiA0LjU0Mjk2OSBMIDkuNTY2NDA2IDEuNjcxODc1IEMgOS41NjY0MDYgMS41MzkwNjIgOS40NjA5MzggMS40MzM1OTQgOS4zMjgxMjUgMS40MzM1OTQgWiBNIDkuMzI4MTI1IDEuNDMzNTk0ICIvPgogICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTSA5LjMyODEyNSAxLjQzMzU5NCBMIDYuNDU3MDMxIDEuNDMzNTk0IEMgNi4zMjgxMjUgMS40MzM1OTQgNi4yMTg3NSAxLjUzOTA2MiA2LjIxODc1IDEuNjcxODc1IEMgNi4yMTg3NSAxLjgwNDY4OCA2LjMyODEyNSAxLjkxNDA2MiA2LjQ1NzAzMSAxLjkxNDA2MiBMIDkuMzI4MTI1IDEuOTE0MDYyIEMgOS40NjA5MzggMS45MTQwNjIgOS41NjY0MDYgMS44MDQ2ODggOS41NjY0MDYgMS42NzE4NzUgQyA5LjU2NjQwNiAxLjUzOTA2MiA5LjQ2MDkzOCAxLjQzMzU5NCA5LjMyODEyNSAxLjQzMzU5NCBaIE0gOS4zMjgxMjUgMS40MzM1OTQgIi8+CiAgICA8cGF0aCBmaWxsPSIjNDM0MzQzIiBkPSJNIDUuMTg3NSA1LjgxMjUgQyA1LjA5NzY1NiA1LjcxODc1IDQuOTQ1MzEyIDUuNzE4NzUgNC44NTE1NjIgNS44MTI1IEwgMS41MDM5MDYgOS4xNTYyNSBDIDEuNDEwMTU2IDkuMjUgMS40MTAxNTYgOS40MDIzNDQgMS41MDM5MDYgOS40OTYwOTQgQyAxLjU1NDY4OCA5LjU0Mjk2OSAxLjYxMzI4MSA5LjU2NjQwNiAxLjY3MTg3NSA5LjU2NjQwNiBDIDEuNzM0Mzc1IDkuNTY2NDA2IDEuNzk2ODc1IDkuNTQyOTY5IDEuODQzNzUgOS40OTYwOTQgTCA1LjE4NzUgNi4xNDg0MzggQyA1LjI4MTI1IDYuMDU0Njg4IDUuMjgxMjUgNS45MDIzNDQgNS4xODc1IDUuODEyNSBaIE0gNS4xODc1IDUuODEyNSAiLz4KICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0gMS42NzE4NzUgNi4yMTg3NSBDIDEuNTM5MDYyIDYuMjE4NzUgMS40MzM1OTQgNi4zMjgxMjUgMS40MzM1OTQgNi40NTcwMzEgTCAxLjQzMzU5NCA5LjMyODEyNSBDIDEuNDMzNTk0IDkuNDYwOTM4IDEuNTM5MDYyIDkuNTY2NDA2IDEuNjcxODc1IDkuNTY2NDA2IEMgMS44MDQ2ODggOS41NjY0MDYgMS45MTQwNjIgOS40NjA5MzggMS45MTQwNjIgOS4zMjgxMjUgTCAxLjkxNDA2MiA2LjQ1NzAzMSBDIDEuOTE0MDYyIDYuMzI4MTI1IDEuODA0Njg4IDYuMjE4NzUgMS42NzE4NzUgNi4yMTg3NSBaIE0gMS42NzE4NzUgNi4yMTg3NSAiLz4KICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0gNC41NDI5NjkgOS4wODU5MzggTCAxLjY3MTg3NSA5LjA4NTkzOCBDIDEuNTM5MDYyIDkuMDg1OTM4IDEuNDMzNTk0IDkuMTk1MzEyIDEuNDMzNTk0IDkuMzI4MTI1IEMgMS40MzM1OTQgOS40NjA5MzggMS41MzkwNjIgOS41NjY0MDYgMS42NzE4NzUgOS41NjY0MDYgTCA0LjU0Mjk2OSA5LjU2NjQwNiBDIDQuNjcxODc1IDkuNTY2NDA2IDQuNzgxMjUgOS40NjA5MzggNC43ODEyNSA5LjMyODEyNSBDIDQuNzgxMjUgOS4xOTUzMTIgNC42NzE4NzUgOS4wODU5MzggNC41NDI5NjkgOS4wODU5MzggWiBNIDQuNTQyOTY5IDkuMDg1OTM4ICIvPgogICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTSAxMC4yODEyNSAwIEwgMC43MTg3NSAwIEMgMC4zMjAzMTIgMCAwIDAuMzIwMzEyIDAgMC43MTg3NSBMIDAgMTAuMjgxMjUgQyAwIDEwLjY3OTY4OCAwLjMyMDMxMiAxMSAwLjcxODc1IDExIEwgMTAuMjgxMjUgMTEgQyAxMC42Nzk2ODggMTEgMTEgMTAuNjc5Njg4IDExIDEwLjI4MTI1IEwgMTEgMC43MTg3NSBDIDExIDAuMzIwMzEyIDEwLjY3OTY4OCAwIDEwLjI4MTI1IDAgWiBNIDEwLjUyMzQzOCAxMC4yODEyNSBDIDEwLjUyMzQzOCAxMC40MTQwNjIgMTAuNDE0MDYyIDEwLjUyMzQzOCAxMC4yODEyNSAxMC41MjM0MzggTCAwLjcxODc1IDEwLjUyMzQzOCBDIDAuNTg1OTM4IDEwLjUyMzQzOCAwLjQ3NjU2MiAxMC40MTQwNjIgMC40NzY1NjIgMTAuMjgxMjUgTCAwLjQ3NjU2MiAwLjcxODc1IEMgMC40NzY1NjIgMC41ODU5MzggMC41ODU5MzggMC40NzY1NjIgMC43MTg3NSAwLjQ3NjU2MiBMIDEwLjI4MTI1IDAuNDc2NTYyIEMgMTAuNDE0MDYyIDAuNDc2NTYyIDEwLjUyMzQzOCAwLjU4NTkzOCAxMC41MjM0MzggMC43MTg3NSBaIE0gMTAuNTIzNDM4IDEwLjI4MTI1ICIvPgogIDwvZz4KPC9zeW1ib2w+CjwhLS0gIC0tPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LWRyYXciIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxwYXRoIGQ9Ik0wIDFIMTJWMTNIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTgwNCkgdHJhbnNsYXRlKDE1NiA4MDMpIi8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDM0MzQzIiBkPSJNOS42MjIgMS41ODRsMS44MzUgMS42NTgtOC4zMSA4LjQwN0wuNSAxMi41VjExbDkuMTIyLTkuNDE2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtODA0KSB0cmFuc2xhdGUoMTU2IDgwMykiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDM0MzQzIiBkPSJNNy42MjggMy43NTNMMTAuMzc4IDMuNzUzIDEwLjM3OCA0LjI1MyA3LjYyOCA0LjI1M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTgwNCkgdHJhbnNsYXRlKDE1NiA4MDMpIHJvdGF0ZSg0NSA5LjAwMyA0LjAwMykiLz4KICAgIDwvZz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWhpc3RvcnktZmlsdGVyIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiID4KICAgICAgICA8cGF0aCBkPSJNMCAwSDEyVjEySDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2IC04MDQpIHRyYW5zbGF0ZSgyNzYgODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0xMiAzdjFIOVYzaDN6TTcgNEgwVjNoN3YxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NiAtODA0KSB0cmFuc2xhdGUoMjc2IDgwNCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDM0MzQzIiBkPSJNMTIgOHYxSDlWOGgzek03IDlIMFY4aDd2MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzYgLTgwNCkgdHJhbnNsYXRlKDI3NiA4MDQpIG1hdHJpeCgtMSAwIDAgMSAxMiAwKSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik04IDFjMS4xMDUgMCAyIC44OTUgMiAycy0uODk1IDItMiAyLTItLjg5NS0yLTIgLjg5NS0yIDItMnptMCAxYy0uNTUyIDAtMSAuNDQ4LTEgMXMuNDQ4IDEgMSAxIDEtLjQ0OCAxLTEtLjQ0OC0xLTEtMXpNNCA3YzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6bTAgMWMtLjU1MiAwLTEgLjQ0OC0xIDFzLjQ0OCAxIDEgMSAxLS40NDggMS0xLS40NDgtMS0xLTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2IC04MDQpIHRyYW5zbGF0ZSgyNzYgODA0KSIvPgogICAgPC9nPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaGlzdG9yeS1mbGlwIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiID4KICAgICAgICA8cGF0aCBkPSJNMCAwSDEyVjEySDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA4IC04MDQpIHRyYW5zbGF0ZSgxMDggODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik02IDBMNyAwIDcgMTIgNiAxMnpNMTEgMTBWOWgxdjEuNWMwIC4yNzYtLjIyNC41LS41LjVIMTB2LTFoMXpNNSAxdjFIMXY4aDR2MUguNWMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTljMC0uMjc2LjIyNC0uNS41LS41SDV6bTcgNXYyaC0xVjZoMXptMC0zdjJoLTFWM2gxek05IDF2MUg3VjFoMnptMi41IDBjLjI3NiAwIC41LjIyNC41LjVWMmgtMlYxaDEuNXpNOSAxMUg3di0xaDJ2MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDggLTgwNCkgdHJhbnNsYXRlKDEwOCA4MDQpIi8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LWljb24iIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBIMTJWMTJIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQgLTgwNCkgdHJhbnNsYXRlKDIwNCA4MDQpIi8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDM0MzQzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4xIiBkPSJNNiA5LjU2OEwyLjYwMSAxMSAyLjk3NSA3LjQ2NyAwLjUgNC44MiA0LjEzIDQuMDY4IDYgMSA3Ljg3IDQuMDY4IDExLjUgNC44MiA5LjAyNSA3LjQ2NyA5LjM5OSAxMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQgLTgwNCkgdHJhbnNsYXRlKDIwNCA4MDQpIi8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LW1hc2siIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTIgLTgwNCkgdHJhbnNsYXRlKDI1MiA4MDQpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxMkgweiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMi41IiBzdHJva2U9IiM0NDQiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTTExLjUgMGMuMjc2IDAgLjUuMjI0LjUuNXYxMWMwIC4yNzYtLjIyNC41LS41LjVILjVjLS4yNzYgMC0uNS0uMjI0LS41LS41Vi41QzAgLjIyNC4yMjQgMCAuNSAwaDExek0xMSAxSDF2MTBoMTBWMXoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oaXN0b3J5LXJvdGF0ZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGlkPSJyZm40cnlsZmZhIiBkPSJNNyAxMmMtLjMzNSAwLS42NjMtLjAyNS0uOTgzLS4wNzRDMy4xNzEgMTEuNDkyIDEgOS4yMDUgMSA2LjQ0NGMwLTEuMzYzLjUzNC0yLjYxMyAxLjQxNS0zLjU4Ii8+CiAgICAgICAgPG1hc2sgaWQ9IjZmOWduMmR5c2IiIHdpZHRoPSI2IiBoZWlnaHQ9IjkuMTM2IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcmZuNHJ5bGZmYSIgc3Ryb2tlPSI0MzQzNDMiLz4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzIgLTgwNCkgdHJhbnNsYXRlKDEzMiA4MDQpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMC41SDEyVjEyLjVIMHoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTTYuNSAxQzkuNTM4IDEgMTIgMy40NjIgMTIgNi41YzAgMi4zNy0xLjUgNC4zOS0zLjYgNS4xNjNsLS40MDctLjkxNkM5Ljc0NCAxMC4xMyAxMSA4LjQ2MiAxMSA2LjUgMTEgNC4wMTUgOC45ODUgMiA2LjUgMmMtLjc3NyAwLTEuNTA5LjE5Ny0yLjE0Ny41NDRMNCAxLjc1bC0uMjA1LS4wNEM0LjU5NCAxLjI1OCA1LjUxNyAxIDYuNSAxeiIvPgogICAgICAgICAgICA8dXNlIHN0cm9rZT0iIzQzNDM0MyIgc3Ryb2tlLWRhc2hhcnJheT0iMiAxLjI1IiBzdHJva2Utd2lkdGg9IjEiIG1hc2s9InVybCgjNmY5Z24yZHlzYikiIHhsaW5rOmhyZWY9IiNyZm40cnlsZmZhIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik00LjI3OSAwTDYgMS43NSA0LjI1IDMuNTcxIDMuNTQzIDIuODY0IDQuNTg2IDEuNzUgMy41NzIgMC43MDd6IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5LjU0MyAwKSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWhpc3Rvcnktc2hhcGUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBIMTJWMTJIMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAgLTgwNCkgdHJhbnNsYXRlKDE4MCA4MDQpIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTTExLjUgNGMuMjc2IDAgLjUuMjI0LjUuNXY3YzAgLjI3Ni0uMjI0LjUtLjUuNWgtN2MtLjI3NiAwLS41LS4yMjQtLjUtLjVWOC44aDFWMTFoNlY1SDguMzQxbC0uNTY4LTFIMTEuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAgLTgwNCkgdHJhbnNsYXRlKDE4MCA4MDQpIi8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDM0MzQzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00LjUgMC41TDguNSA3LjYxMSAwLjUgNy42MTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwIC04MDQpIHRyYW5zbGF0ZSgxODAgODA0KSIvPgogICAgPC9nPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaGlzdG9yeS10ZXh0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiID4KICAgICAgICA8cGF0aCBkPSJNMCAwSDEyVjEySDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4IC04MDQpIHRyYW5zbGF0ZSgyMjggODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0yIDFoOGMuNTUyIDAgMSAuNDQ4IDEgMUgxYzAtLjU1Mi40NDgtMSAxLTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4IC04MDQpIHRyYW5zbGF0ZSgyMjggODA0KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik0xIDFIMlYzSDF6TTEwIDFIMTFWM0gxMHpNNS41IDFMNi41IDEgNi41IDExIDUuNSAxMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjggLTgwNCkgdHJhbnNsYXRlKDIyOCA4MDQpIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTTQgMTBIOFYxMUg0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyOCAtODA0KSB0cmFuc2xhdGUoMjI4IDgwNCkiLz4KICAgIDwvZz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWhpc3RvcnktbG9hZCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwSDEyVjEySDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzI0IC04MDUpIHRyYW5zbGF0ZSgzMjQgODA1KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MzQzNDMiIGQ9Ik01IDBjLjU1MiAwIDEgLjQ0OCAxIDF2MWg1LjVjLjI3NiAwIC41LjIyNC41LjV2OGMwIC4yNzYtLjIyNC41LS41LjVILjVjLS4yNzYgMC0uNS0uMjI0LS41LS41VjFjMC0uNTUyLjQ0OC0xIDEtMWg0em0wIDFIMXY5aDEwVjNINVYxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyNCAtODA1KSB0cmFuc2xhdGUoMzI0IDgwNSkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDM0MzQzIiBkPSJNMSAyTDUgMiA1IDMgMSAzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyNCAtODA1KSB0cmFuc2xhdGUoMzI0IDgwNSkiLz4KICAgIDwvZz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWhpc3RvcnktZGVsZXRlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiM0MzQzNDMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMiA5aDhWMWgxdjguNWMwIC4yNzYtLjIyNC41LS41LjVoLTljLS4yNzYgMC0uNS0uMjI0LS41LS41VjFoMXY4ek0wIDBIMTJWMUgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwMCAtODA0KSB0cmFuc2xhdGUoMzAwIDgwNCkgdHJhbnNsYXRlKDAgMikiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQgM0g1VjdINHpNNyAzSDhWN0g3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwMCAtODA0KSB0cmFuc2xhdGUoMzAwIDgwNCkgdHJhbnNsYXRlKDAgMikiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQgMWg0VjBoMXYxLjVjMCAuMjc2LS4yMjQuNS0uNS41aC01Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNVYwaDF2MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDAgLTgwNCkgdHJhbnNsYXRlKDMwMCA4MDQpIG1hdHJpeCgxIDAgMCAtMSAwIDIpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaGlzdG9yeS1ncm91cCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ4IC04MDQpIHRyYW5zbGF0ZSgzNDggODA0KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBIMTJWMTJIMHoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQzNDM0MyIgZD0iTTEgOXYyaDF2MUguNWMtLjI3NiAwLS41LS4yMjQtLjUtLjVWOWgxem0xMSAxdjEuNWMwIC4yNzYtLjIyNC41LS41LjVIOXYtMWgydi0xaDF6bS00IDF2MUg2di0xaDJ6bS0zIDB2MUgzdi0xaDJ6bTctNHYyaC0xVjdoMXpNMSA2djJIMFY2aDF6bTExLTJ2MmgtMVY0aDF6TTEgM3YySDBWM2gxem0xMC41LTNjLjI3NiAwIC41LjIyNC41LjVWM2gtMVYxaC0xVjBoMS41ek02IDB2MUg0VjBoMnptMyAwdjFIN1YwaDJ6TTAgLjVDMCAuMjI0LjIyNCAwIC41IDBIM3YxSDF2MUgwVi41ek05LjUgNGMuMjc2IDAgLjUuMjI0LjUuNXY1YzAgLjI3Ni0uMjI0LjUtLjUuNWgtNWMtLjI3NiAwLS41LS4yMjQtLjUtLjVWOC4zNTVjLjMxNy4wOTQuNjUyLjE0NSAxIC4xNDVWOWg0VjVoLS41YzAtLjM0OC0uMDUtLjY4My0uMTQ1LTFIOS41eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMi41IiBzdHJva2U9IiM0MzQzNDMiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1pY29uLWFycm93LTIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTIxLjc5MyAxOC41SDIuNXYtNWgxOC45MzVsLTcuNi04aDUuODcybDEwLjUgMTAuNS0xMC41IDEwLjVoLTUuOTE0bDgtOHoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWljb24tYXJyb3ctMyIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjUuMjg4IDE2LjQyTDE0LjIwOCAyNy41SDYuNzkybDExLjI5MS0xMS4yOTFMNi44MjYgNC41aDcuMzgxbDExLjY2MSAxMS42NjEtLjU4LjI1OHoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWljb24tYXJyb3ciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIGQ9Ik0yLjUgMTEuNXY5aDE4djUuMjkzTDMwLjI5MyAxNiAyMC41IDYuMjA3VjExLjVoLTE4eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbi1idWJibGUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTIyLjIwNyAyNC41TDE2LjUgMzAuMjA3VjI0LjVIOEE2LjUgNi41IDAgMCAxIDEuNSAxOFY5QTYuNSA2LjUgMCAwIDEgOCAyLjVoMTZBNi41IDYuNSAwIDAgMSAzMC41IDl2OWE2LjUgNi41IDAgMCAxLTYuNSA2LjVoLTEuNzkzeiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbi1oZWFydCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBkPSJNMTUuOTk2IDMwLjY3NWwxLjk4MS0xLjc5YzcuODk4LTcuMTc3IDEwLjM2NS05LjcxOCAxMi4xMzUtMTMuMDEyLjkyMi0xLjcxNiAxLjM3Ny0zLjM3IDEuMzc3LTUuMDc2IDAtNC42NS0zLjY0Ny04LjI5Ny04LjI5Ny04LjI5Ny0yLjMzIDAtNC44NiAxLjUyNy02LjgxNyAzLjgyNGwtLjM4LjQ0Ny0uMzgxLS40NDdDMTMuNjU4IDQuMDI3IDExLjEyNiAyLjUgOC43OTcgMi41IDQuMTQ3IDIuNS41IDYuMTQ3LjUgMTAuNzk3YzAgMS43MTQuNDYgMy4zNzUgMS4zODkgNS4wOTggMS43NzUgMy4yODggNC4yNiA1Ljg0MyAxMi4xMjMgMTIuOTc0bDEuOTg0IDEuODA2eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbi1sb2FkIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy4zMTQgMTguODY3bDEuOTUxLTIuNTMgNCA1LjE4NGgtMTdsNi41LTguODQgNC41NDkgNi4xODZ6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0xOC4wMSA0YTExLjc5OCAxMS43OTggMCAwIDAgMCAxSDN2MjRoMjRWMTQuOTg2YTguNzM4IDguNzM4IDAgMCAwIDEgMFYyOWExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFoMTUuMDF6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0yNSAzaDF2OWgtMXoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgZD0iTTIyIDZsMy41LTMuNUwyOSA2Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1pY29uLWxvY2F0aW9uIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBkPSJNMTYgMzEuMjhDMjMuNjc1IDIzLjMwMiAyNy41IDE3LjE4MSAyNy41IDEzYzAtNi4zNTEtNS4xNDktMTEuNS0xMS41LTExLjVTNC41IDYuNjQ5IDQuNSAxM2MwIDQuMTgxIDMuODI1IDEwLjMwMiAxMS41IDE4LjI4eiIvPgogICAgPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIGN4PSIxNiIgY3k9IjEzIiByPSI0LjUiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLWljb24tcG9seWdvbiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgZD0iTS41NzYgMTZMOC4yOSAyOS41aDE1LjQyTDMxLjQyNCAxNiAyMy43MSAyLjVIOC4yOUwuNTc2IDE2eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbi1zdGFyLTIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIGQ9Ik0xOS40NDYgMzEuNTkybDIuMjY1LTMuMjcyIDMuOTQ2LjI1LjYzNi0zLjk0IDMuNjY1LTEuNTA1LTEuMTItMy44MzIgMi42NTUtMi45NjItMi42NTYtMi45NjIgMS4xMi0zLjgzMi0zLjY2NC0xLjUwNS0uNjM2LTMuOTQxLTMuOTQ2LjI1LTIuMjY1LTMuMjcxTDE2IDMuMDI0IDEyLjU1NCAxLjA3IDEwLjI4OSA0LjM0bC0zLjk0Ni0uMjUtLjYzNiAzLjk0MS0zLjY2NSAxLjUwNSAxLjEyIDMuODMyTC41MDggMTYuMzNsMi42NTYgMi45NjItMS4xMiAzLjgzMiAzLjY2NCAxLjUwNC42MzYgMy45NDIgMy45NDYtLjI1IDIuMjY1IDMuMjdMMTYgMjkuNjM4bDMuNDQ2IDEuOTU1eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbi1zdGFyIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBkPSJNMjUuMjkyIDI5Ljg3OGwtMS43NzUtMTAuMzQ2IDcuNTE3LTcuMzI3LTEwLjM4OC0xLjUxTDE2IDEuMjgybC00LjY0NiA5LjQxMy0xMC4zODggMS41MSA3LjUxNyA3LjMyNy0xLjc3NSAxMC4zNDZMMTYgMjQuOTkzbDkuMjkyIDQuODg1eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtaWNvbiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTEuOTIzIDE5LjEzNkw1LjQyNCAyMmwuNzE1LTcuMDY1LTQuNzMxLTUuMjk2IDYuOTQtMS41MDNMMTEuOTIzIDJsMy41NzQgNi4xMzYgNi45NCAxLjUwMy00LjczMSA1LjI5NkwxOC40MiAyMnoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLW1hc2stbG9hZCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMTguMDEgNGExMS43OTggMTEuNzk4IDAgMCAwIDAgMUgzdjI0aDI0VjE0Ljk4NmE4LjczOCA4LjczOCAwIDAgMCAxIDBWMjlhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWNWExIDEgMCAwIDEgMS0xaDE1LjAxek0xNSAyM2E2IDYgMCAxIDEgMC0xMiA2IDYgMCAwIDEgMCAxMnptMC0xYTUgNSAwIDEgMCAwLTEwIDUgNSAwIDAgMCAwIDEweiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMjUgM2gxdjloLTF6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIGQ9Ik0yMiA2bDMuNS0zLjVMMjkgNiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtbWFzayIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQuNSIgc3Ryb2tlPSJpbmhlcml0IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0yIDFoMjBhMSAxIDAgMCAxIDEgMXYyMGExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTF6bTAgMXYyMGgyMFYySDJ6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1yZWRvIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgb3BhY2l0eT0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTIxIDZIOWE2IDYgMCAxIDAgMCAxMmgxMnYxSDlBNyA3IDAgMCAxIDkgNWgxMnYxeiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMTkgM2wyLjUgMi41TDE5IDgiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXJlc2V0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgb3BhY2l0eT0iLjUiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMiAxM3YtMWE3IDcgMCAwIDEgNy03aDEzdjFoLTF2NWgxdjFhNyA3IDAgMCAxLTcgN0gydi0xaDF2LTVIMnptNy03YTYgNiAwIDAgMC02IDZ2NmgxMmE2IDYgMCAwIDAgNi02VjZIOXoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iaW5oZXJpdCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTE5IDNsMi41IDIuNUwxOSA4TTUgMTZsLTIuNSAyLjVMNSAyMSIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtcm90YXRlLWNsb2Nrd2lzZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTI5IDE3aC0uOTI0YzAgNi42MjctNS4zNzMgMTItMTIgMTItNi42MjggMC0xMi01LjM3My0xMi0xMkM0LjA3NiAxMC4zOTggOS40MDcgNS4wNDEgMTYgNVY0QzguODIgNCAzIDkuODIgMyAxN3M1LjgyIDEzIDEzIDEzIDEzLTUuODIgMTMtMTN6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0xNiAxLjVsNCAzLTQgMyIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNiA0aDR2MWgtNHoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXJvdGF0ZS1jb3VudGVyY2xvY2t3aXNlIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMyAxN2guOTI0YzAgNi42MjcgNS4zNzMgMTIgMTIgMTIgNi42MjggMCAxMi01LjM3MyAxMi0xMiAwLTYuNjAyLTUuMzMxLTExLjk2LTExLjkyNC0xMlY0YzcuMTggMCAxMyA1LjgyIDEzIDEzcy01LjgyIDEzLTEzIDEzUzMgMjQuMTggMyAxN3oiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIgNGg0djFoLTR6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0xNiAxLjVsLTQgMyA0IDMiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXJvdGF0ZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgLz4KICAgIDxwYXRoIGZpbGw9ImluaGVyaXQiIHN0cm9rZT0ibm9uZSIgZD0iTTguMzQ5IDIyLjI1NGExMC4wMDIgMTAuMDAyIDAgMCAxLTIuNzc4LTEuNzE5bC42NS0uNzZhOS4wMDIgOS4wMDIgMCAwIDAgMi40OTUgMS41NDhsLS4zNjcuOTMxem0yLjg3My43MDRsLjA3OC0uOTk3YTkgOSAwIDEgMC0uNTU3LTE3Ljg1MmwtLjE0LS45OUExMC4wNzYgMTAuMDc2IDAgMCAxIDEyLjE0NSAzYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwYy0uMzEyIDAtLjYyLS4wMTQtLjkyNC0uMDQyem0tNy41NTYtNC42NTVhOS45NDIgOS45NDIgMCAwIDEtMS4yNTMtMi45OTZsLjk3My0uMjM0YTguOTQ4IDguOTQ4IDAgMCAwIDEuMTI0IDIuNjkzbC0uODQ0LjUzN3ptLTEuNTAyLTUuOTFBOS45NDkgOS45NDkgMCAwIDEgMi44OCA5LjIzbC45MjUuMzgyYTguOTU0IDguOTU0IDAgMCAwLS42NDQgMi44NDRsLS45OTgtLjA2MnptMi4yMS01LjY4NmMuNjg3LS44NDggMS41MS0xLjU4IDIuNDM2LTIuMTY2bC41MjMuODUyYTkuMDQ4IDkuMDQ4IDAgMCAwLTIuMTg4IDEuOTVsLS43NzEtLjYzNnoiLz4KICAgIDxwYXRoIHN0cm9rZT0iaW5oZXJpdCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTEzIDFsLTIuNSAyLjVMMTMgNiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtc2hhcGUtY2lyY2xlIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1zaGFwZS1yZWN0YW5nbGUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cmVjdCB3aWR0aD0iMjciIGhlaWdodD0iMjciIHg9IjIuNSIgeT0iMi41IiBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHJ4PSIxIi8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1zaGFwZS10cmlhbmdsZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE2IDIuNWwxNS41IDI3SC41eiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtc2hhcGUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0xNC43MDYgOEgyMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIOWExIDEgMCAwIDEtMS0xdi00aDF2NGgxMlY5aC01LjcwNmwtLjU4OC0xeiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjUgMS41bDcuNSAxM0gxeiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtdGV4dC1hbGlnbi1jZW50ZXIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTIgNWgyOHYxSDJ6TTggMTJoMTZ2MUg4ek0yIDE5aDI4djFIMnpNOCAyNmgxNnYxSDh6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy10ZXh0LWFsaWduLWxlZnQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTIgNWgyOHYxSDJ6TTIgMTJoMTZ2MUgyek0yIDE5aDI4djFIMnpNMiAyNmgxNnYxSDJ6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy10ZXh0LWFsaWduLXJpZ2h0IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiBkPSJNMCAwaDMydjMySDB6Ii8+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9ImluaGVyaXQiIGQ9Ik0yIDVoMjh2MUgyek0xNCAxMmgxNnYxSDE0ek0yIDE5aDI4djFIMnpNMTQgMjZoMTZ2MUgxNHoiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXRleHQtYm9sZCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNNyAyaDJ2Mkg3ek03IDI4aDJ2Mkg3eiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmhlcml0IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDN2MTJoOWE2IDYgMCAxIDAgMC0xMkg5ek05IDE1djE0aDEwYTcgNyAwIDAgMCAwLTE0SDl6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy10ZXh0LWl0YWxpYyIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMTUgMmg1djFoLTV6TTExIDI5aDV2MWgtNXpNMTcgM2gxbC00IDI2aC0xeiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtdGV4dC11bmRlcmxpbmUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTggMnYxNGE4IDggMCAxIDAgMTYgMFYyaDF2MTRhOSA5IDAgMCAxLTE4IDBWMmgxek0zIDI5aDI2djFIM3oiLz4KICAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iaW5oZXJpdCIgZD0iTTUgMmg1djFINXpNMjIgMmg1djFoLTV6Ii8+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy10ZXh0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNNCAzaDE1YTEgMSAwIDAgMSAxIDFIM2ExIDEgMCAwIDEgMS0xek0zIDRoMXYxSDN6TTE5IDRoMXYxaC0xeiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMTEgM2gxdjE4aC0xeiIvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMTAgMjBoM3YxaC0zeiIvPgo8L3N5bWJvbD4KPHN5bWJvbCBpZD0iaWMtdW5kbyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0yNCAwSDB2MjRoMjR6IiBvcGFjaXR5PSIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiAvPgogICAgPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSJpbmhlcml0IiBkPSJNMyA2aDEyYTYgNiAwIDEgMSAwIDEySDN2MWgxMmE3IDcgMCAwIDAgMC0xNEgzdjF6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImluaGVyaXQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik01IDNMMi41IDUuNSA1IDgiLz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXpvb20taW4iIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI5IC0yOTApIHRyYW5zbGF0ZSgyMjkgMjkwKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjkiIHN0cm9rZT0iaW5oZXJpdCIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGZpbGw9ImluaGVyaXQiIGQ9Ik0xOC44MjggMTUuODI4SDE5LjgyOFYyMi44MjhIMTguODI4eiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE5LjMyOCAxOS4zMjgpIi8+CiAgICAgICAgPHBhdGggZmlsbD0iaW5oZXJpdCIgZD0iTTcgMTBIMTRWMTFIN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSJpbmhlcml0IiBkPSJNMTAgN0gxMVYxNEgxMHoiLz4KICAgIDwvZz4KPC9zeW1ib2w+CjxzeW1ib2wgaWQ9ImljLXpvb20tb3V0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2MyAtMjkwKSB0cmFuc2xhdGUoMjYzIDI5MCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMC41IiByPSI5IiBzdHJva2U9ImluaGVyaXQiIGZpbGw9Im5vbmUiLz4KICAgICAgICA8cGF0aCBmaWxsPSJpbmhlcml0IiBkPSJNMTguODI4IDE1LjgyOEgxOS44MjhWMjIuODI4SDE4LjgyOHoiIHRyYW5zZm9ybT0icm90YXRlKC00NSAxOS4zMjggMTkuMzI4KSIvPgogICAgICAgIDxwYXRoIGZpbGw9ImluaGVyaXQiIGQ9Ik03IDEwSDE0VjExSDd6Ii8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8c3ltYm9sIGlkPSJpYy1oYW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8cGF0aCBmaWxsPSJpbmhlcml0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjY3MiAzLjM2YzEuMzI4IDAgMi4xMTQuNzggMi4yOSAxLjg2OWwuMDE0LjEwMS4wMjMuMDA2djEuMDQybC0uNjM4LS4xODVjLS4xODctLjA1NS0uMzIzLS4yMTEtLjM1NC0uMzk5TDEwIDUuNzEzYzAtLjgyNS0uNDItMS4zNTMtMS4zMjgtMS4zNTNDNy42OTUgNC4zNiA3IDUuMDQxIDcgNS43MTN2Ny45NDFjMCAuNDM5LS41MjQuNjY1LS44NDMuMzY0bC0xLjg2OC0xLjc2MWMtLjU5NS0uNTI4LTEuMzE2LS42MTctMS45MTgtLjIxNi0uNTIyLjM0OC0uNTYyIDEuMjAzLS4xOCAxLjhMNy43MzggMjJoMTEuMDEzbC4yODUtLjUxOGMxLjI0Ny0yLjMyNiAxLjg5Ny00LjI1OSAxLjk2LTUuNzg1bC4wMDQtLjIzOVY4LjAzNWMwLS42NTYtLjUtMS4xNy0xLTEuMTctLjUwMyAwLTEgLjQ1Ni0xIDEuMTcgMCAuMzMzLS4zMi41NzMtLjY0LjQ4TDE4IDguNDFWNy4zNjhsLjA4Ni4wMjYuMDQyLS4xMzZjLjI3OS0uODA1Ljk3OC0xLjMzMiAxLjczOC0xLjM4OEwyMCA1Ljg2NWMxLjA1NyAwIDIgLjk2NyAyIDIuMTd2Ny40MjNjMCAxLjkyOS0uODQ1IDQuMzUyLTIuNTIxIDcuMjktLjA5LjE1Ni0uMjU1LjI1Mi0uNDM1LjI1Mkg3LjQ3NGMtLjE2NiAwLS4zMjEtLjA4Mi0uNDE0LS4yMTlsLTUuNzA0LTguMzljLS42NTMtMS4wMTktLjU4NC0yLjQ4Ni40Ni0zLjE4MiAxLS42NjYgMi4yMTYtLjUxNiAzLjE0OC4zMUw2IDEyLjQ5NVY1LjcxM2MwLTEuMTggMS4wNTgtMi4yNjMgMi40OS0yLjM0OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTcgLTI5MCkgdHJhbnNsYXRlKDI5NyAyOTApIi8+CiAgICAgICAgPHBhdGggZmlsbD0iaW5oZXJpdCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuNSAxLjVjMS4zMjUgMCAyLjQxIDEuMDMyIDIuNDk1IDIuMzM2TDE1IDR2Ny4yMmgtMVY0YzAtLjgyOC0uNjcyLTEuNS0xLjUtMS41LS43OCAwLTEuNDIuNTk1LTEuNDkzIDEuMzU2TDExIDR2Ny4yMmgtMVY0YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5NyAtMjkwKSB0cmFuc2xhdGUoMjk3IDI5MCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJpbmhlcml0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNi41IDMuNWMxLjMyNSAwIDIuNDEgMS4wMzIgMi40OTUgMi4zMzZMMTkgNnY2LjNoLTFWNmMwLS44MjgtLjY3Mi0xLjUtMS41LTEuNS0uNzggMC0xLjQyLjU5NS0xLjQ5MyAxLjM1NkwxNSA2djIuNDRoLTFWNmMwLTEuMzggMS4xMi0yLjUgMi41LTIuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTcgLTI5MCkgdHJhbnNsYXRlKDI5NyAyOTApIi8+CiAgICA8L2c+Cjwvc3ltYm9sPgo8L2RlZnM+Cjwvc3ZnPgo=";
                },
                4858: function (e) {
                  "use strict";
                  e.exports = t;
                },
                4960: function () {},
                6759: function () {},
                6272: function () {},
              },
              i = {};
            function r(t) {
              var e = i[t];
              if (void 0 !== e) return e.exports;
              var o = (i[t] = { exports: {} });
              return n[t](o, o.exports, r), o.exports;
            }
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return r.d(e, { a: e }), e;
            }),
              (r.d = function (t, e) {
                for (var n in e)
                  r.o(e, n) &&
                    !r.o(t, n) &&
                    Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
              }),
              (r.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                  return this || new Function("return this")();
                } catch (t) {
                  if ("object" == typeof window) return window;
                }
              })()),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              });
            var o = {};
            return (
              (function () {
                "use strict";
                r.d(o, {
                  default: function () {
                    return Ho;
                  },
                });
                var t = r(9131),
                  e = r.n(t),
                  n = r(1899),
                  i = r.n(n),
                  a = r(6562),
                  s = r.n(a),
                  l = r(1734),
                  c = r.n(l),
                  d = r(8005),
                  u = r.n(d),
                  p = r(6065),
                  h = r.n(p),
                  f = r(4496),
                  b = r.n(f);
                Element.prototype.matches ||
                  (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
                  Element.prototype.closest ||
                    (Element.prototype.closest = function (t) {
                      var e = this;
                      do {
                        if (Element.prototype.matches.call(e, t)) return e;
                        e = e.parentElement || e.parentNode;
                      } while (null !== e && 1 === e.nodeType);
                      return null;
                    }),
                  "document" in self &&
                    ((!("classList" in document.createElement("_")) ||
                      (document.createElementNS &&
                        !(
                          "classList" in
                          document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "g"
                          )
                        ))) &&
                      (function (t) {
                        if ("Element" in t) {
                          var n = t.Element.prototype,
                            r = Object,
                            o =
                              e()(String.prototype) ||
                              function () {
                                return this.replace(/^\s+|\s+$/g, "");
                              },
                            a =
                              i()(Array.prototype) ||
                              function (t) {
                                for (var e = 0, n = this.length; e < n; e++)
                                  if (e in this && this[e] === t) return e;
                                return -1;
                              },
                            l = function (t, e) {
                              (this.name = t),
                                (this.code = DOMException[t]),
                                (this.message = e);
                            },
                            d = function (t, e) {
                              if ("" === e)
                                throw new l(
                                  "SYNTAX_ERR",
                                  "The token must not be empty."
                                );
                              if (/\s/.test(e))
                                throw new l(
                                  "INVALID_CHARACTER_ERR",
                                  "The token must not contain space characters."
                                );
                              return a.call(t, e);
                            },
                            u = function (t) {
                              for (
                                var e = o.call(t.getAttribute("class") || ""),
                                  n = e ? e.split(/\s+/) : [],
                                  i = 0,
                                  r = n.length;
                                i < r;
                                i++
                              )
                                this.push(n[i]);
                              this._updateClassName = function () {
                                t.setAttribute("class", this.toString());
                              };
                            },
                            p = (u.prototype = []),
                            h = function () {
                              return new u(this);
                            };
                          if (
                            ((l.prototype = Error.prototype),
                            (p.item = function (t) {
                              return this[t] || null;
                            }),
                            (p.contains = function (t) {
                              return ~d(this, t + "");
                            }),
                            (p.add = function () {
                              var t,
                                e = arguments,
                                n = 0,
                                i = e.length,
                                r = !1;
                              do {
                                (t = e[n] + ""),
                                  ~d(this, t) || (this.push(t), (r = !0));
                              } while (++n < i);
                              r && this._updateClassName();
                            }),
                            (p.remove = function () {
                              var t,
                                e,
                                n = arguments,
                                i = 0,
                                r = n.length,
                                o = !1;
                              do {
                                for (t = n[i] + "", e = d(this, t); ~e; ) {
                                  var a;
                                  s()((a = this)).call(a, e, 1),
                                    (o = !0),
                                    (e = d(this, t));
                                }
                              } while (++i < r);
                              o && this._updateClassName();
                            }),
                            (p.toggle = function (t, e) {
                              var n = this.contains(t),
                                i = n
                                  ? !0 !== e && "remove"
                                  : !1 !== e && "add";
                              return (
                                i && this[i](t), !0 === e || !1 === e ? e : !n
                              );
                            }),
                            (p.replace = function (t, e) {
                              var n = d(t + "");
                              ~n &&
                                (s()(this).call(this, n, 1, e),
                                this._updateClassName());
                            }),
                            (p.toString = function () {
                              return this.join(" ");
                            }),
                            c())
                          ) {
                            var f = {
                              get: h,
                              enumerable: !0,
                              configurable: !0,
                            };
                            try {
                              c()(n, "classList", f);
                            } catch (t) {
                              (void 0 !== t.number &&
                                -2146823252 !== t.number) ||
                                ((f.enumerable = !1), c()(n, "classList", f));
                            }
                          } else
                            r.prototype.__defineGetter__ &&
                              n.__defineGetter__("classList", h);
                        }
                      })(self),
                    (function () {
                      var t = document.createElement("_");
                      if (
                        (t.classList.add("c1", "c2"),
                        !t.classList.contains("c2"))
                      ) {
                        var e = function (t) {
                          var e = DOMTokenList.prototype[t];
                          DOMTokenList.prototype[t] = function (t) {
                            var n,
                              i = arguments.length;
                            for (n = 0; n < i; n++)
                              (t = arguments[n]), e.call(this, t);
                          };
                        };
                        e("add"), e("remove");
                      }
                      if (
                        (t.classList.toggle("c3", !1),
                        t.classList.contains("c3"))
                      ) {
                        var n = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (t, e) {
                          return 1 in arguments && !this.contains(t) == !e
                            ? e
                            : n.call(this, t);
                        };
                      }
                      "replace" in document.createElement("_").classList ||
                        (DOMTokenList.prototype.replace = function (t, e) {
                          var n = this.toString().split(" "),
                            r = i()(n).call(n, t + "");
                          ~r &&
                            ((n = u()(n).call(n, r)),
                            this.remove.apply(this, n),
                            this.add(e),
                            this.add.apply(this, u()(n).call(n, 1)));
                        }),
                        (t = null);
                    })()),
                  (function () {
                    if (
                      "undefined" != typeof window &&
                      window.addEventListener
                    ) {
                      var t,
                        e,
                        n,
                        i = h()(null),
                        r = function () {
                          clearTimeout(e), (e = b()(t, 100));
                        },
                        o = function () {},
                        a = function (t) {
                          function e(t) {
                            var e;
                            return (
                              void 0 !== t.protocol
                                ? (e = t)
                                : ((e = document.createElement("a")).href = t),
                              e.protocol.replace(/:/g, "") + e.host
                            );
                          }
                          var n, i, r;
                          return (
                            window.XMLHttpRequest &&
                              ((n = new XMLHttpRequest()),
                              (i = e(location)),
                              (r = e(t)),
                              (n =
                                void 0 === n.withCredentials &&
                                "" !== r &&
                                r !== i
                                  ? XDomainRequest || void 0
                                  : XMLHttpRequest)),
                            n
                          );
                        },
                        s = "http://www.w3.org/1999/xlink";
                      (t = function () {
                        var t,
                          e,
                          n,
                          l,
                          c,
                          d,
                          u,
                          p,
                          h,
                          f,
                          m = 0;
                        function g() {
                          var t;
                          0 == (m -= 1) &&
                            (o(),
                            window.addEventListener("resize", r, !1),
                            window.addEventListener("orientationchange", r, !1),
                            window.MutationObserver
                              ? ((t = new MutationObserver(r)).observe(
                                  document.documentElement,
                                  { childList: !0, subtree: !0, attributes: !0 }
                                ),
                                (o = function () {
                                  try {
                                    t.disconnect(),
                                      window.removeEventListener(
                                        "resize",
                                        r,
                                        !1
                                      ),
                                      window.removeEventListener(
                                        "orientationchange",
                                        r,
                                        !1
                                      );
                                  } catch (t) {}
                                }))
                              : (document.documentElement.addEventListener(
                                  "DOMSubtreeModified",
                                  r,
                                  !1
                                ),
                                (o = function () {
                                  document.documentElement.removeEventListener(
                                    "DOMSubtreeModified",
                                    r,
                                    !1
                                  ),
                                    window.removeEventListener("resize", r, !1),
                                    window.removeEventListener(
                                      "orientationchange",
                                      r,
                                      !1
                                    );
                                })));
                        }
                        function v(t) {
                          return function () {
                            !0 !== i[t.base] &&
                              (t.useEl.setAttributeNS(
                                s,
                                "xlink:href",
                                "#" + t.hash
                              ),
                              t.useEl.hasAttribute("href") &&
                                t.useEl.setAttribute("href", "#" + t.hash));
                          };
                        }
                        function _(t) {
                          return function () {
                            var e,
                              n = document.body,
                              i = document.createElement("x");
                            (t.onload = null),
                              (i.innerHTML = t.responseText),
                              (e = i.getElementsByTagName("svg")[0]) &&
                                (e.setAttribute("aria-hidden", "true"),
                                (e.style.position = "absolute"),
                                (e.style.width = 0),
                                (e.style.height = 0),
                                (e.style.overflow = "hidden"),
                                n.insertBefore(e, n.firstChild)),
                              g();
                          };
                        }
                        function y(t) {
                          return function () {
                            (t.onerror = null), (t.ontimeout = null), g();
                          };
                        }
                        for (
                          o(), h = document.getElementsByTagName("use"), c = 0;
                          c < h.length;
                          c += 1
                        ) {
                          try {
                            e = h[c].getBoundingClientRect();
                          } catch (t) {
                            e = !1;
                          }
                          (t = (p =
                            (l =
                              h[c].getAttribute("href") ||
                              h[c].getAttributeNS(s, "href") ||
                              h[c].getAttribute("xlink:href")) && l.split
                              ? l.split("#")
                              : ["", ""])[0]),
                            (n = p[1]),
                            (d =
                              e &&
                              0 === e.left &&
                              0 === e.right &&
                              0 === e.top &&
                              0 === e.bottom),
                            e && 0 === e.width && 0 === e.height && !d
                              ? (h[c].hasAttribute("href") &&
                                  h[c].setAttributeNS(s, "xlink:href", l),
                                t.length &&
                                  (!0 !== (f = i[t]) &&
                                    b()(
                                      v({ useEl: h[c], base: t, hash: n }),
                                      0
                                    ),
                                  void 0 === f &&
                                    void 0 !== (u = a(t)) &&
                                    ((f = new u()),
                                    (i[t] = f),
                                    (f.onload = _(f)),
                                    (f.onerror = y(f)),
                                    (f.ontimeout = y(f)),
                                    f.open("GET", t),
                                    f.send(),
                                    (m += 1))))
                              : d
                              ? t.length &&
                                i[t] &&
                                b()(v({ useEl: h[c], base: t, hash: n }), 0)
                              : void 0 === i[t]
                              ? (i[t] = !0)
                              : i[t].onload &&
                                (i[t].abort(), delete i[t].onload, (i[t] = !0));
                        }
                        (h = ""), (m += 1), g();
                      }),
                        (n = function () {
                          window.removeEventListener("load", n, !1),
                            (e = b()(t, 0));
                        }),
                        "complete" !== document.readyState
                          ? window.addEventListener("load", n, !1)
                          : n();
                    }
                  })();
                var m = r(1845);
                function g(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                  return i;
                }
                var v = r(184),
                  _ = r(662),
                  y = r(7172),
                  M = r(711);
                function O(t, e) {
                  var n;
                  if (t) {
                    if ("string" == typeof t) return g(t, e);
                    var i = M((n = Object.prototype.toString.call(t))).call(
                      n,
                      8,
                      -1
                    );
                    return (
                      "Object" === i &&
                        t.constructor &&
                        (i = t.constructor.name),
                      "Map" === i || "Set" === i
                        ? y(t)
                        : "Arguments" === i ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                        ? g(t, e)
                        : void 0
                    );
                  }
                }
                function w(t) {
                  return (
                    (function (t) {
                      if (m(t)) return g(t);
                    })(t) ||
                    (function (t) {
                      if (
                        (void 0 !== v && null != _(t)) ||
                        null != t["@@iterator"]
                      )
                        return y(t);
                    })(t) ||
                    O(t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                var A = r(7077);
                function x(t, e, n) {
                  return (
                    e in t
                      ? A(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                function z(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function C(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      A(t, i.key, i);
                  }
                }
                function k(t, e, n) {
                  return e && C(t.prototype, e), n && C(t, n), t;
                }
                var S = r(4426),
                  T = r.n(S),
                  D = r(9406),
                  L = r.n(D),
                  q = r(8189),
                  E = r.n(q),
                  j = r(3972),
                  P = r.n(j),
                  R = r(2777),
                  I = r(961),
                  W = r.n(I),
                  N = r(5695),
                  B = r.n(N),
                  F = r(8592),
                  $ = r.n(F),
                  H = r(9052),
                  Y = r.n(H),
                  U = r(2560),
                  X = r.n(U),
                  V = r(2461),
                  G = r.n(V);
                function K(t, e) {
                  return (
                    (function (t) {
                      if (m(t)) return t;
                    })(t) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : (void 0 !== v && _(t)) || t["@@iterator"];
                      if (null != n) {
                        var i,
                          r,
                          o = [],
                          a = !0,
                          s = !1;
                        try {
                          for (
                            n = n.call(t);
                            !(a = (i = n.next()).done) &&
                            (o.push(i.value), !e || o.length !== e);
                            a = !0
                          );
                        } catch (t) {
                          (s = !0), (r = t);
                        } finally {
                          try {
                            a || null == n.return || n.return();
                          } finally {
                            if (s) throw r;
                          }
                        }
                        return o;
                      }
                    })(t, e) ||
                    O(t, e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                var Z,
                  J = r(6397),
                  Q = r.n(J),
                  tt = r(7636),
                  et = r.n(tt),
                  nt = r(789),
                  it = r.n(nt),
                  rt = r(4729),
                  ot = r.n(rt),
                  at = r(1610),
                  st = r.n(at),
                  lt = r(3053),
                  ct = r.n(lt),
                  dt = ["zoomIn", "zoomOut", "hand"],
                  ut = ["history", "undo", "redo", "reset"],
                  pt = ["delete", "deleteAll"],
                  ht = L()((Z = [])).call(Z, dt, ut, pt),
                  ft = "filter",
                  bt = "color",
                  mt = ["rect", "circle", "triangle"],
                  gt = "vintage",
                  vt = "sepia2",
                  _t = "removeColor",
                  yt = "colorFilter",
                  Mt = "removeWhite",
                  Ot = "blendColor",
                  wt = "blend",
                  At = He(
                    "IMAGE_LOADER",
                    "CROPPER",
                    "FLIP",
                    "ROTATION",
                    "FREE_DRAWING",
                    "LINE",
                    "TEXT",
                    "ICON",
                    "FILTER",
                    "SHAPE",
                    "ZOOM",
                    "RESIZE"
                  ),
                  xt = {
                    hasRotatingPoint: !1,
                    hasBorders: !1,
                    lockScalingFlip: !0,
                    lockRotation: !0,
                    lockSkewingX: !0,
                    lockSkewingY: !0,
                  },
                  zt = "clearObjects",
                  Ct = "loadImage",
                  kt = "flip",
                  St = "rotate",
                  Tt = "addObject",
                  Dt = "removeObject",
                  Lt = "applyFilter",
                  qt = "removeFilter",
                  Et = "addIcon",
                  jt = "changeIconColor",
                  Pt = "addShape",
                  Rt = "changeShape",
                  It = "addText",
                  Wt = "changeText",
                  Nt = "changeTextStyle",
                  Bt = "addImageObject",
                  Ft = "resizeCanvasDimension",
                  $t = "setObjectProperties",
                  Ht = "setObjectPosition",
                  Yt = "changeSelection",
                  Ut = "resize",
                  Xt = "objectActivated",
                  Vt = "objectMoved",
                  Gt = "objectScaled",
                  Kt = "objectRotated",
                  Zt = "objectAdded",
                  Jt = "textEditing",
                  Qt = "textChanged",
                  te = "addText",
                  ee = "addObject",
                  ne = "mousedown",
                  ie = "redoStackChanged",
                  re = "undoStackChanged",
                  oe = "selectionCleared",
                  ae = "selectionCreated",
                  se = "executeCommand",
                  le = "afterUndo",
                  ce = "afterRedo",
                  de = "handStarted",
                  ue = "handStopped",
                  pe = "inputBoxEditingStarted",
                  he = "inputBoxEditingStopped",
                  fe = "focus",
                  be = "blur",
                  me = ".tui-colorpicker-palette-hex",
                  ge = "Load",
                  ve = "Mask",
                  _e = He(
                    "NORMAL",
                    "CROPPER",
                    "FREE_DRAWING",
                    "LINE_DRAWING",
                    "TEXT",
                    "SHAPE",
                    "ICON",
                    "ZOOM",
                    "RESIZE"
                  ),
                  ye = "normal",
                  Me = "zoom",
                  Oe = "hand",
                  we = 16,
                  Ae = {
                    borderColor: "red",
                    cornerColor: "green",
                    cornerSize: 10,
                    originX: "center",
                    originY: "center",
                    transparentCorners: !1,
                  },
                  xe = "Invalid parameters.",
                  ze = "The executing command state is locked.",
                  Ce = "The object is not in canvas.",
                  ke = "The promise of redo command is reject.",
                  Se = {
                    "icon-arrow": "M40 12V0l24 24-24 24V36H0V12h40z",
                    "icon-arrow-2":
                      "M49,32 H3 V22 h46 l-18,-18 h12 l23,23 L43,50 h-12 l18,-18  z ",
                    "icon-arrow-3":
                      "M43.349998,27 L17.354,53 H1.949999 l25.996,-26 L1.949999,1 h15.404 L43.349998,27  z ",
                    "icon-star":
                      "M35,54.557999 l-19.912001,10.468 l3.804,-22.172001 l-16.108,-15.7 l22.26,-3.236 L35,3.746 l9.956,20.172001 l22.26,3.236 l-16.108,15.7 l3.804,22.172001  z ",
                    "icon-star-2":
                      "M17,31.212 l-7.194,4.08 l-4.728,-6.83 l-8.234,0.524 l-1.328,-8.226 l-7.644,-3.14 l2.338,-7.992 l-5.54,-6.18 l5.54,-6.176 l-2.338,-7.994 l7.644,-3.138 l1.328,-8.226 l8.234,0.522 l4.728,-6.83 L17,-24.312 l7.194,-4.08 l4.728,6.83 l8.234,-0.522 l1.328,8.226 l7.644,3.14 l-2.338,7.992 l5.54,6.178 l-5.54,6.178 l2.338,7.992 l-7.644,3.14 l-1.328,8.226 l-8.234,-0.524 l-4.728,6.83  z ",
                    "icon-polygon": "M3,31 L19,3 h32 l16,28 l-16,28 H19  z ",
                    "icon-location":
                      "M24 62C8 45.503 0 32.837 0 24 0 10.745 10.745 0 24 0s24 10.745 24 24c0 8.837-8 21.503-24 38zm0-28c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z",
                    "icon-heart":
                      "M49.994999,91.349998 l-6.96,-6.333 C18.324001,62.606995 2.01,47.829002 2.01,29.690998 C2.01,14.912998 13.619999,3.299999 28.401001,3.299999 c8.349,0 16.362,5.859 21.594,12 c5.229,-6.141 13.242001,-12 21.591,-12 c14.778,0 26.390999,11.61 26.390999,26.390999 c0,18.138 -16.314001,32.916 -41.025002,55.374001 l-6.96,6.285  z ",
                    "icon-bubble":
                      "M44 48L34 58V48H12C5.373 48 0 42.627 0 36V12C0 5.373 5.373 0 12 0h40c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-8z",
                  },
                  Te = { realTimeEvent: !0, min: -360, max: 360, value: 0 },
                  De = { min: 5, max: 30, value: 12 },
                  Le = { realTimeEvent: !0, min: 2, max: 300, value: 3 },
                  qe = { realTimeEvent: !0, min: 10, max: 100, value: 50 },
                  Ee = {
                    tintOpacityRange: {
                      realTimeEvent: !0,
                      min: 0,
                      max: 1,
                      value: 0.7,
                      useDecimal: !0,
                    },
                    removewhiteDistanceRange: {
                      realTimeEvent: !0,
                      min: 0,
                      max: 1,
                      value: 0.2,
                      useDecimal: !0,
                    },
                    brightnessRange: {
                      realTimeEvent: !0,
                      min: -1,
                      max: 1,
                      value: 0,
                      useDecimal: !0,
                    },
                    noiseRange: {
                      realTimeEvent: !0,
                      min: 0,
                      max: 1e3,
                      value: 100,
                    },
                    pixelateRange: {
                      realTimeEvent: !0,
                      min: 2,
                      max: 20,
                      value: 4,
                    },
                    colorfilterThresholdRange: {
                      realTimeEvent: !0,
                      min: 0,
                      max: 1,
                      value: 0.2,
                      useDecimal: !0,
                    },
                    blurFilterRange: { value: 0.1 },
                  },
                  je = { realTimeEvent: !0, min: 32, max: 4088, value: 800 },
                  Pe = "tui-image-editor-",
                  Re = Math.min,
                  Ie = Math.max,
                  We = !1,
                  Ne = 0;
                function Be(t) {
                  return t.__fe_id || ((Ne += 1), (t.__fe_id = Ne)), t.__fe_id;
                }
                function Fe(t) {
                  return "function" == typeof t;
                }
                function $e(t, e, n) {
                  if (e > n) {
                    var i = [n, e];
                    (e = i[0]), (n = i[1]);
                  }
                  return Ie(e, Re(t, n));
                }
                function He() {
                  for (
                    var t = {}, e = arguments.length, n = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    $()(n, function (e) {
                      t[e] = e;
                    }),
                    t
                  );
                }
                function Ye(t, e) {
                  var n,
                    i = {},
                    r = e.length,
                    o = 0;
                  for (o = 0; o < r; o += 1) i[(n = e[o])] = t[n];
                  return i;
                }
                function Ue(t) {
                  return Q()(t, 10);
                }
                function Xe(t) {
                  return t.replace(/-([a-z])/g, function (t, e) {
                    return e.toUpperCase();
                  });
                }
                function Ve() {
                  return !!(
                    window.File &&
                    window.FileList &&
                    window.FileReader
                  );
                }
                function Ge(t, e) {
                  var n, i, r, o;
                  4 === t.length &&
                    (t = L()((o = "".concat(t))).call(o, u()(t).call(t, 1, 4)));
                  var a = Q()(u()(t).call(t, 1, 3), 16),
                    s = Q()(u()(t).call(t, 3, 5), 16),
                    l = Q()(u()(t).call(t, 5, 7), 16),
                    c = e || 1;
                  return L()(
                    (n = L()(
                      (i = L()((r = "rgba(".concat(a, ", "))).call(r, s, ", "))
                    ).call(i, l, ", "))
                  ).call(n, c, ")");
                }
                function Ke(t) {
                  $()(t, function (e, n) {
                    t[n] = null;
                  });
                }
                function Ze() {
                  var t,
                    e,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                  return "." === n.charAt(0)
                    ? L()((e = ".".concat(Pe).concat(i))).call(
                        e,
                        u()(n).call(n, 1)
                      )
                    : L()((t = "".concat(Pe).concat(i))).call(t, n);
                }
                function Je(t, e) {
                  (t.customProps = t.customProps || {}), W()(t.customProps, e);
                }
                function Qe(t, e) {
                  var n = {};
                  return (
                    X()(e) && (e = [e]),
                    $()(e, function (e) {
                      n[e] = t.customProps[e];
                    }),
                    n
                  );
                }
                function tn(t, e) {
                  return i()(t).call(t, e) >= 0;
                }
                function en() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return st()(t, "type") || bt;
                }
                function nn(t) {
                  var e = it()(t);
                  return (void 0 === e ? {} : e).source ? ft : bt;
                }
                function rn(t) {
                  return ct()(t.get("type"), mt) >= 0;
                }
                function on(t) {
                  if (tn(mt, t)) return "Shape";
                  switch (t) {
                    case "i-text":
                      return "Text";
                    case "path":
                    case "line":
                      return "Draw";
                    case "activeSelection":
                      return "Group";
                    default:
                      return sn(t);
                  }
                }
                function an(t) {
                  var e,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = n.useAlpha,
                    r = void 0 === i || i,
                    o = n.mode,
                    a = gt,
                    s = _t,
                    l = Ot,
                    c = vt,
                    d = yt,
                    u = Mt,
                    p = wt;
                  switch (t) {
                    case a:
                      e = c;
                      break;
                    case s:
                      e = r ? d : u;
                      break;
                    case l:
                      e = "add" === o ? p : o;
                      break;
                    default:
                      e = t;
                  }
                  return sn(e);
                }
                function sn(t) {
                  return t.replace(/[a-z]/, function (t) {
                    return t.toUpperCase();
                  });
                }
                var ln = He("UN_IMPLEMENTATION", "NO_COMPONENT_NAME"),
                  cn = {
                    UN_IMPLEMENTATION: function (t) {
                      return "Should implement a method: " + t;
                    },
                    NO_COMPONENT_NAME: function () {
                      return "Should set a component name";
                    },
                  },
                  dn = {
                    types: W()({}, ln),
                    create: function (t) {
                      t = t.toLowerCase();
                      for (
                        var e = cn[t],
                          n = arguments.length,
                          i = new Array(n > 1 ? n - 1 : 0),
                          r = 1;
                        r < n;
                        r++
                      )
                        i[r - 1] = arguments[r];
                      return e.apply(void 0, i);
                    },
                  },
                  un = dn.create,
                  pn = dn.types,
                  hn = (function () {
                    function t(e, n) {
                      z(this, t),
                        (this.name = e.name),
                        (this.args = n),
                        (this.execute = e.execute),
                        (this.undo = e.undo),
                        (this.executeCallback = e.executeCallback || null),
                        (this.undoCallback = e.undoCallback || null),
                        (this.undoData = {});
                    }
                    return (
                      k(t, [
                        {
                          key: "execute",
                          value: function () {
                            throw new Error(
                              un(pn.UN_IMPLEMENTATION, "execute")
                            );
                          },
                        },
                        {
                          key: "undo",
                          value: function () {
                            throw new Error(un(pn.UN_IMPLEMENTATION, "undo"));
                          },
                        },
                        {
                          key: "isRedo",
                          get: function () {
                            return G()(this.undoData).length > 0;
                          },
                        },
                        {
                          key: "setUndoData",
                          value: function (t, e, n) {
                            return (
                              e && (t = e),
                              n
                                ? e || (e = t)
                                : (W()(this.undoData, t), (e = null)),
                              e
                            );
                          },
                        },
                        {
                          key: "setExecuteCallback",
                          value: function (t) {
                            return (this.executeCallback = t), this;
                          },
                        },
                        {
                          key: "setUndoCallback",
                          value: function (t) {
                            return (this.undoCallback = t), this;
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  fn = {},
                  bn = {
                    create: function (t) {
                      var e = fn[t];
                      if (e) {
                        for (
                          var n = arguments.length,
                            i = new Array(n > 1 ? n - 1 : 0),
                            r = 1;
                          r < n;
                          r++
                        )
                          i[r - 1] = arguments[r];
                        return new hn(e, i);
                      }
                      return null;
                    },
                    register: function (t) {
                      fn[t.name] = t;
                    },
                  },
                  mn = (function () {
                    function t() {
                      z(this, t),
                        (this._undoStack = []),
                        (this._redoStack = []),
                        (this._isLocked = !1),
                        (this._isSilent = !1);
                    }
                    return (
                      k(t, [
                        {
                          key: "_invokeExecution",
                          value: function (t) {
                            var e = this,
                              n =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                            this.lock();
                            var i = t.args;
                            return (
                              i || (i = []),
                              t.execute
                                .apply(t, w(i))
                                .then(function (i) {
                                  return (
                                    e._isSilent ||
                                      (e.pushUndoStack(t),
                                      e.fire(n ? ce : se, t)),
                                    e.unlock(),
                                    Fe(t.executeCallback) &&
                                      t.executeCallback(i),
                                    i
                                  );
                                })
                                .catch(function (t) {
                                  return e.unlock(), E().reject(t);
                                })
                            );
                          },
                        },
                        {
                          key: "_invokeUndo",
                          value: function (t) {
                            var e = this;
                            this.lock();
                            var n = t.args;
                            return (
                              n || (n = []),
                              t.undo
                                .apply(t, w(n))
                                .then(function (n) {
                                  return (
                                    e.pushRedoStack(t),
                                    e.fire(le, t),
                                    e.unlock(),
                                    Fe(t.undoCallback) && t.undoCallback(n),
                                    n
                                  );
                                })
                                .catch(function (t) {
                                  return e.unlock(), E().reject(t);
                                })
                            );
                          },
                        },
                        {
                          key: "_fireRedoStackChanged",
                          value: function () {
                            this.fire(ie, this._redoStack.length);
                          },
                        },
                        {
                          key: "_fireUndoStackChanged",
                          value: function () {
                            this.fire(re, this._undoStack.length);
                          },
                        },
                        {
                          key: "lock",
                          value: function () {
                            this._isLocked = !0;
                          },
                        },
                        {
                          key: "unlock",
                          value: function () {
                            this._isLocked = !1;
                          },
                        },
                        {
                          key: "executeSilent",
                          value: function () {
                            var t = this;
                            this._isSilent = !0;
                            for (
                              var e = arguments.length, n = new Array(e), i = 0;
                              i < e;
                              i++
                            )
                              n[i] = arguments[i];
                            return this.execute
                              .apply(this, L()(n).call(n, [this._isSilent]))
                              .then(function () {
                                t._isSilent = !1;
                              });
                          },
                        },
                        {
                          key: "execute",
                          value: function () {
                            var t = this;
                            if (this._isLocked) return E().reject(ze);
                            for (
                              var e = arguments.length, n = new Array(e), i = 0;
                              i < e;
                              i++
                            )
                              n[i] = arguments[i];
                            var r = n[0];
                            return (
                              X()(r) && (r = bn.create.apply(bn, n)),
                              this._invokeExecution(r).then(function (e) {
                                return t.clearRedoStack(), e;
                              })
                            );
                          },
                        },
                        {
                          key: "undo",
                          value: function () {
                            var t,
                              e,
                              n = this._undoStack.pop(),
                              i = "";
                            return (
                              n &&
                                this._isLocked &&
                                (this.pushUndoStack(n, !0), (n = null)),
                              n
                                ? (this.isEmptyUndoStack() &&
                                    this._fireUndoStackChanged(),
                                  (t = this._invokeUndo(n)))
                                : ((i =
                                    "The promise of undo command is reject."),
                                  this._isLocked &&
                                    (i = L()(
                                      (e = "".concat(i, " Because "))
                                    ).call(e, ze)),
                                  (t = E().reject(i))),
                              t
                            );
                          },
                        },
                        {
                          key: "redo",
                          value: function () {
                            var t,
                              e,
                              n = this._redoStack.pop(),
                              i = "";
                            return (
                              n &&
                                this._isLocked &&
                                (this.pushRedoStack(n, !0), (n = null)),
                              n
                                ? (this.isEmptyRedoStack() &&
                                    this._fireRedoStackChanged(),
                                  (t = this._invokeExecution(n, !0)))
                                : ((i = ke),
                                  this._isLocked &&
                                    (i = L()(
                                      (e = "".concat(i, " Because "))
                                    ).call(e, ze)),
                                  (t = E().reject(i))),
                              t
                            );
                          },
                        },
                        {
                          key: "pushUndoStack",
                          value: function (t, e) {
                            this._undoStack.push(t),
                              e || this._fireUndoStackChanged();
                          },
                        },
                        {
                          key: "pushRedoStack",
                          value: function (t, e) {
                            this._redoStack.push(t),
                              e || this._fireRedoStackChanged();
                          },
                        },
                        {
                          key: "isEmptyRedoStack",
                          value: function () {
                            return 0 === this._redoStack.length;
                          },
                        },
                        {
                          key: "isEmptyUndoStack",
                          value: function () {
                            return 0 === this._undoStack.length;
                          },
                        },
                        {
                          key: "clearUndoStack",
                          value: function () {
                            this.isEmptyUndoStack() ||
                              ((this._undoStack = []),
                              this._fireUndoStackChanged());
                          },
                        },
                        {
                          key: "clearRedoStack",
                          value: function () {
                            this.isEmptyRedoStack() ||
                              ((this._redoStack = []),
                              this._fireRedoStackChanged());
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(mn);
                var gn = mn,
                  vn = r(5214),
                  _n = r.n(vn),
                  yn = r(899),
                  Mn = r.n(yn),
                  On = {
                    "common.bi.image":
                      "https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png",
                    "common.bisize.width": "251px",
                    "common.bisize.height": "21px",
                    "common.backgroundImage": "none",
                    "common.backgroundColor": "#1e1e1e",
                    "common.border": "0px",
                    "header.backgroundImage": "none",
                    "header.backgroundColor": "transparent",
                    "header.border": "0px",
                    "loadButton.backgroundColor": "#fff",
                    "loadButton.border": "1px solid #ddd",
                    "loadButton.color": "#222",
                    "loadButton.fontFamily": "'Noto Sans', sans-serif",
                    "loadButton.fontSize": "12px",
                    "downloadButton.backgroundColor": "#fdba3b",
                    "downloadButton.border": "1px solid #fdba3b",
                    "downloadButton.color": "#fff",
                    "downloadButton.fontFamily": "'Noto Sans', sans-serif",
                    "downloadButton.fontSize": "12px",
                    "menu.normalIcon.color": "#8a8a8a",
                    "menu.activeIcon.color": "#555555",
                    "menu.disabledIcon.color": "#434343",
                    "menu.hoverIcon.color": "#e9e9e9",
                    "submenu.normalIcon.color": "#8a8a8a",
                    "submenu.activeIcon.color": "#e9e9e9",
                    "menu.iconSize.width": "24px",
                    "menu.iconSize.height": "24px",
                    "submenu.iconSize.width": "32px",
                    "submenu.iconSize.height": "32px",
                    "submenu.backgroundColor": "#1e1e1e",
                    "submenu.partition.color": "#3c3c3c",
                    "submenu.normalLabel.color": "#8a8a8a",
                    "submenu.normalLabel.fontWeight": "lighter",
                    "submenu.activeLabel.color": "#fff",
                    "submenu.activeLabel.fontWeight": "lighter",
                    "checkbox.border": "0px",
                    "checkbox.backgroundColor": "#fff",
                    "range.pointer.color": "#fff",
                    "range.bar.color": "#666",
                    "range.subbar.color": "#d1d1d1",
                    "range.disabledPointer.color": "#414141",
                    "range.disabledBar.color": "#282828",
                    "range.disabledSubbar.color": "#414141",
                    "range.value.color": "#fff",
                    "range.value.fontWeight": "lighter",
                    "range.value.fontSize": "11px",
                    "range.value.border": "1px solid #353535",
                    "range.value.backgroundColor": "#151515",
                    "range.title.color": "#fff",
                    "range.title.fontWeight": "lighter",
                    "colorpicker.button.border": "1px solid #1e1e1e",
                    "colorpicker.title.color": "#fff",
                  },
                  wn = r(2534),
                  An = (function () {
                    function t(e) {
                      var n, i, r, o;
                      z(this, t),
                        (this.styles = this._changeToObject(W()({}, On, e))),
                        (n = this._styleMaker()),
                        (i = K(document.getElementsByTagName("head"), 1)[0]),
                        (r = document.createElement("link")),
                        (o = encodeURIComponent(n)),
                        r.setAttribute("rel", "stylesheet"),
                        r.setAttribute("type", "text/css"),
                        r.setAttribute(
                          "href",
                          "data:text/css;charset=UTF-8,".concat(o)
                        ),
                        i.appendChild(r),
                        this._loadDefaultSvgIcon();
                    }
                    return (
                      k(t, [
                        {
                          key: "getStyle",
                          value: function (t) {
                            var e = null,
                              n = t.replace(/\..+$/, ""),
                              i = this.styles[t];
                            switch (t) {
                              case "common.bi":
                                e = this.styles[t].image;
                                break;
                              case "menu.icon":
                                e = {
                                  active:
                                    this.styles["".concat(n, ".activeIcon")],
                                  normal:
                                    this.styles["".concat(n, ".normalIcon")],
                                  hover:
                                    this.styles["".concat(n, ".hoverIcon")],
                                  disabled:
                                    this.styles["".concat(n, ".disabledIcon")],
                                };
                                break;
                              case "submenu.icon":
                                e = {
                                  active:
                                    this.styles["".concat(n, ".activeIcon")],
                                  normal:
                                    this.styles["".concat(n, ".normalIcon")],
                                };
                                break;
                              case "submenu.label":
                                e = {
                                  active: this._makeCssText(
                                    this.styles["".concat(n, ".activeLabel")]
                                  ),
                                  normal: this._makeCssText(
                                    this.styles["".concat(n, ".normalLabel")]
                                  ),
                                };
                                break;
                              case "submenu.partition":
                                e = {
                                  vertical: this._makeCssText(
                                    W()({}, i, {
                                      borderLeft: "1px solid ".concat(i.color),
                                    })
                                  ),
                                  horizontal: this._makeCssText(
                                    W()({}, i, {
                                      borderBottom: "1px solid ".concat(
                                        i.color
                                      ),
                                    })
                                  ),
                                };
                                break;
                              case "range.disabledPointer":
                              case "range.disabledBar":
                              case "range.disabledSubbar":
                              case "range.pointer":
                              case "range.bar":
                              case "range.subbar":
                                (i.backgroundColor = i.color),
                                  (e = this._makeCssText(i));
                                break;
                              default:
                                e = this._makeCssText(i);
                            }
                            return e;
                          },
                        },
                        {
                          key: "_styleMaker",
                          value: function () {
                            var t = this.getStyle("submenu.label"),
                              e = this.getStyle("submenu.partition");
                            return (function (t) {
                              var e,
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
                                T = t.subMenuLabelActive,
                                D = t.subMenuLabelNormal,
                                q = t.subMenuRangeTitle,
                                E = t.submenuPartitionVertical,
                                j = t.submenuPartitionHorizontal,
                                P = t.submenuCheckbox,
                                R = t.submenuRangePointer,
                                I = t.submenuRangeValue,
                                W = t.submenuColorpickerTitle,
                                N = t.submenuColorpickerButton,
                                B = t.submenuRangeBar,
                                F = t.submenuRangeSubbar,
                                $ = t.submenuDisabledRangePointer,
                                H = t.submenuDisabledRangeBar,
                                Y = t.submenuDisabledRangeSubbar,
                                U = t.submenuIconSize,
                                X = t.menuIconSize,
                                V = t.biSize,
                                G = t.menuIconStyle,
                                K = t.submenuIconStyle;
                              return L()(
                                (e = L()(
                                  (n = L()(
                                    (i = L()(
                                      (r = L()(
                                        (o = L()(
                                          (a = L()(
                                            (s = L()(
                                              (l = L()(
                                                (c = L()(
                                                  (d = L()(
                                                    (u = L()(
                                                      (p = L()(
                                                        (h = L()(
                                                          (f = L()(
                                                            (b = L()(
                                                              (m = L()(
                                                                (g = L()(
                                                                  (v = L()(
                                                                    (_ = L()(
                                                                      (y = L()(
                                                                        (M =
                                                                          L()(
                                                                            (O =
                                                                              L()(
                                                                                (w =
                                                                                  L()(
                                                                                    (A =
                                                                                      L()(
                                                                                        (x =
                                                                                          L()(
                                                                                            (z =
                                                                                              L()(
                                                                                                (C =
                                                                                                  L()(
                                                                                                    (k =
                                                                                                      L()(
                                                                                                        (S =
                                                                                                          '\n    .tie-icon-add-button.icon-bubble .tui-image-editor-button[data-icontype="icon-bubble"] label,\n    .tie-icon-add-button.icon-heart .tui-image-editor-button[data-icontype="icon-heart"] label,\n    .tie-icon-add-button.icon-location .tui-image-editor-button[data-icontype="icon-location"] label,\n    .tie-icon-add-button.icon-polygon .tui-image-editor-button[data-icontype="icon-polygon"] label,\n    .tie-icon-add-button.icon-star .tui-image-editor-button[data-icontype="icon-star"] label,\n    .tie-icon-add-button.icon-star-2 .tui-image-editor-button[data-icontype="icon-star-2"] label,\n    .tie-icon-add-button.icon-arrow-3 .tui-image-editor-button[data-icontype="icon-arrow-3"] label,\n    .tie-icon-add-button.icon-arrow-2 .tui-image-editor-button[data-icontype="icon-arrow-2"] label,\n    .tie-icon-add-button.icon-arrow .tui-image-editor-button[data-icontype="icon-arrow"] label,\n    .tie-icon-add-button.icon-bubble .tui-image-editor-button[data-icontype="icon-bubble"] label,\n    .tie-draw-line-select-button.line .tui-image-editor-button.line label,\n    .tie-draw-line-select-button.free .tui-image-editor-button.free label,\n    .tie-flip-button.flipX .tui-image-editor-button.flipX label,\n    .tie-flip-button.flipY .tui-image-editor-button.flipY label,\n    .tie-flip-button.resetFlip .tui-image-editor-button.resetFlip label,\n    .tie-crop-button .tui-image-editor-button.apply.active label,\n    .tie-crop-preset-button .tui-image-editor-button.preset.active label,\n    .tie-resize-button .tui-image-editor-button.apply.active label,\n    .tie-resize-preset-button .tui-image-editor-button.preset.active label,\n    .tie-shape-button.rect .tui-image-editor-button.rect label,\n    .tie-shape-button.circle .tui-image-editor-button.circle label,\n    .tie-shape-button.triangle .tui-image-editor-button.triangle label,\n    .tie-text-effect-button .tui-image-editor-button.active label,\n    .tie-text-align-button.tie-text-align-left .tui-image-editor-button.left label,\n    .tie-text-align-button.tie-text-align-center .tui-image-editor-button.center label,\n    .tie-text-align-button.tie-text-align-right .tui-image-editor-button.right label,\n    .tie-mask-apply.apply.active .tui-image-editor-button.apply label,\n    .tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button:hover > label,\n    .tui-image-editor-container .tui-image-editor-checkbox label > span {\n        '.concat(
                                                                                                            T,
                                                                                                            "\n    }\n    .tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button > label,\n    .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label,\n    .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label > span {\n        "
                                                                                                          ))
                                                                                                      ).call(
                                                                                                        S,
                                                                                                        D,
                                                                                                        "\n    }\n    .tui-image-editor-container .tui-image-editor-range-wrap label > span {\n        "
                                                                                                      ))
                                                                                                  ).call(
                                                                                                    k,
                                                                                                    q,
                                                                                                    "\n    }\n    .tui-image-editor-container .tui-image-editor-partition > div {\n        "
                                                                                                  ))
                                                                                              ).call(
                                                                                                C,
                                                                                                E,
                                                                                                "\n    }\n    .tui-image-editor-container.left .tui-image-editor-submenu .tui-image-editor-partition > div,\n    .tui-image-editor-container.right .tui-image-editor-submenu .tui-image-editor-partition > div {\n        "
                                                                                              ))
                                                                                          ).call(
                                                                                            z,
                                                                                            j,
                                                                                            "\n    }\n    .tui-image-editor-container .tui-image-editor-checkbox label > span:before {\n        "
                                                                                          ))
                                                                                      ).call(
                                                                                        x,
                                                                                        P,
                                                                                        "\n    }\n    .tui-image-editor-container .tui-image-editor-checkbox label > input:checked + span:before {\n        border: 0;\n    }\n    .tui-image-editor-container .tui-image-editor-virtual-range-pointer {\n        "
                                                                                      ))
                                                                                  ).call(
                                                                                    A,
                                                                                    R,
                                                                                    "\n    }\n    .tui-image-editor-container .tui-image-editor-virtual-range-bar {\n        "
                                                                                  ))
                                                                              ).call(
                                                                                w,
                                                                                B,
                                                                                "\n    }\n    .tui-image-editor-container .tui-image-editor-virtual-range-subbar {\n        "
                                                                              ))
                                                                          ).call(
                                                                            O,
                                                                            F,
                                                                            "\n    }\n    .tui-image-editor-container .tui-image-editor-disabled .tui-image-editor-virtual-range-pointer {\n        "
                                                                          ))
                                                                      ).call(
                                                                        M,
                                                                        $,
                                                                        "\n    }\n    .tui-image-editor-container .tui-image-editor-disabled .tui-image-editor-virtual-range-subbar {\n        "
                                                                      ))
                                                                    ).call(
                                                                      y,
                                                                      Y,
                                                                      "\n    }\n    .tui-image-editor-container .tui-image-editor-disabled .tui-image-editor-virtual-range-bar {\n        "
                                                                    ))
                                                                  ).call(
                                                                    _,
                                                                    H,
                                                                    "\n    }\n    .tui-image-editor-container .tui-image-editor-range-value {\n        "
                                                                  ))
                                                                ).call(
                                                                  v,
                                                                  I,
                                                                  "\n    }\n    .tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button .color-picker-value + label {\n        "
                                                                ))
                                                              ).call(
                                                                g,
                                                                W,
                                                                "\n    }\n    .tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button .color-picker-value {\n        "
                                                              ))
                                                            ).call(
                                                              m,
                                                              N,
                                                              "\n    }\n    .tui-image-editor-container .svg_ic-menu {\n        "
                                                            ))
                                                          ).call(
                                                            b,
                                                            X,
                                                            "\n    }\n    .tui-image-editor-container .svg_ic-submenu {\n        "
                                                          ))
                                                        ).call(
                                                          f,
                                                          U,
                                                          "\n    }\n    .tui-image-editor-container .tui-image-editor-controls-logo > img,\n    .tui-image-editor-container .tui-image-editor-header-logo > img {\n        "
                                                        ))
                                                      ).call(
                                                        h,
                                                        V,
                                                        "\n    }\n    .tui-image-editor-menu use.normal.use-default,\n    .tui-image-editor-help-menu use.normal.use-default {\n        fill-rule: evenodd;\n        fill: "
                                                      ))
                                                    ).call(
                                                      p,
                                                      G.normal.color,
                                                      ";\n        stroke: "
                                                    ))
                                                  ).call(
                                                    u,
                                                    G.normal.color,
                                                    ";\n    }\n    .tui-image-editor-menu use.active.use-default,\n    .tui-image-editor-help-menu use.active.use-default {\n        fill-rule: evenodd;\n        fill: "
                                                  ))
                                                ).call(
                                                  d,
                                                  G.active.color,
                                                  ";\n        stroke: "
                                                ))
                                              ).call(
                                                c,
                                                G.active.color,
                                                ";\n    }\n    .tui-image-editor-menu use.hover.use-default,\n    .tui-image-editor-help-menu use.hover.use-default {\n        fill-rule: evenodd;\n        fill: "
                                              ))
                                            ).call(
                                              l,
                                              G.hover.color,
                                              ";\n        stroke: "
                                            ))
                                          ).call(
                                            s,
                                            G.hover.color,
                                            ";\n    }\n    .tui-image-editor-menu use.disabled.use-default,\n    .tui-image-editor-help-menu use.disabled.use-default {\n        fill-rule: evenodd;\n        fill: "
                                          ))
                                        ).call(
                                          a,
                                          G.disabled.color,
                                          ";\n        stroke: "
                                        ))
                                      ).call(
                                        o,
                                        G.disabled.color,
                                        ";\n    }\n    .tui-image-editor-submenu use.normal.use-default {\n        fill-rule: evenodd;\n        fill: "
                                      ))
                                    ).call(
                                      r,
                                      K.normal.color,
                                      ";\n        stroke: "
                                    ))
                                  ).call(
                                    i,
                                    K.normal.color,
                                    ";\n    }\n    .tui-image-editor-submenu use.active.use-default {\n        fill-rule: evenodd;\n        fill: "
                                  ))
                                ).call(
                                  n,
                                  K.active.color,
                                  ";\n        stroke: "
                                ))
                              ).call(e, K.active.color, ";\n    }\n");
                            })({
                              subMenuLabelActive: t.active,
                              subMenuLabelNormal: t.normal,
                              submenuPartitionVertical: e.vertical,
                              submenuPartitionHorizontal: e.horizontal,
                              biSize: this.getStyle("common.bisize"),
                              subMenuRangeTitle: this.getStyle("range.title"),
                              submenuRangePointer:
                                this.getStyle("range.pointer"),
                              submenuRangeBar: this.getStyle("range.bar"),
                              submenuRangeSubbar: this.getStyle("range.subbar"),
                              submenuDisabledRangePointer: this.getStyle(
                                "range.disabledPointer"
                              ),
                              submenuDisabledRangeBar:
                                this.getStyle("range.disabledBar"),
                              submenuDisabledRangeSubbar: this.getStyle(
                                "range.disabledSubbar"
                              ),
                              submenuRangeValue: this.getStyle("range.value"),
                              submenuColorpickerTitle:
                                this.getStyle("colorpicker.title"),
                              submenuColorpickerButton:
                                this.getStyle("colorpicker.button"),
                              submenuCheckbox: this.getStyle("checkbox"),
                              menuIconSize: this.getStyle("menu.iconSize"),
                              submenuIconSize:
                                this.getStyle("submenu.iconSize"),
                              menuIconStyle: this.getStyle("menu.icon"),
                              submenuIconStyle: this.getStyle("submenu.icon"),
                            });
                          },
                        },
                        {
                          key: "_changeToObject",
                          value: function (t) {
                            var e = {};
                            return (
                              $()(t, function (t, n) {
                                var i = K(n.match(/^(.+)\.([a-z]+)$/i), 3),
                                  r = i[1],
                                  o = i[2];
                                e[r] || (e[r] = {}), (e[r][o] = t);
                              }),
                              e
                            );
                          },
                        },
                        {
                          key: "_makeCssText",
                          value: function (t) {
                            var e = this,
                              n = [];
                            return (
                              $()(t, function (t, r) {
                                var o, a;
                                i()((o = ["backgroundImage"])).call(o, r) >
                                  -1 &&
                                  "none" !== t &&
                                  (t = "url(".concat(t, ")")),
                                  n.push(
                                    L()(
                                      (a = "".concat(e._toUnderScore(r), ": "))
                                    ).call(a, t)
                                  );
                              }),
                              n.join(";")
                            );
                          },
                        },
                        {
                          key: "_toUnderScore",
                          value: function (t) {
                            return t.replace(/([A-Z])/g, function (t, e) {
                              return "-".concat(e.toLowerCase());
                            });
                          },
                        },
                        {
                          key: "_loadDefaultSvgIcon",
                          value: function () {
                            if (
                              !document.getElementById(
                                "tui-image-editor-svg-default-icons"
                              )
                            ) {
                              var t = new DOMParser(),
                                e = wn.replace(
                                  /data:image\/svg\+xml;base64,/,
                                  ""
                                ),
                                n = t.parseFromString(atob(e), "text/xml");
                              document.body.appendChild(n.documentElement);
                            }
                          },
                        },
                        {
                          key: "_makeIconClassName",
                          value: function (t, e) {
                            var n = (
                                e
                                  ? this.getStyle("submenu.icon")
                                  : this.getStyle("menu.icon")
                              )[t],
                              i = n.path,
                              r = n.name;
                            return i && r ? t : "".concat(t, " use-default");
                          },
                        },
                        {
                          key: "_makeSvgIconPrefix",
                          value: function (t, e) {
                            var n,
                              i = (
                                e
                                  ? this.getStyle("submenu.icon")
                                  : this.getStyle("menu.icon")
                              )[t],
                              r = i.path,
                              o = i.name;
                            return r && o
                              ? L()((n = "".concat(r, "#"))).call(n, o, "-")
                              : "#";
                          },
                        },
                        {
                          key: "_makeSvgItem",
                          value: function (t, e, n) {
                            var i = this;
                            return Mn()(t)
                              .call(t, function (t) {
                                var r,
                                  o,
                                  a = i._makeSvgIconPrefix(t, n),
                                  s = i._toUnderScore(e),
                                  l = i._makeIconClassName(t, n);
                                return L()(
                                  (r = L()(
                                    (o = '<use xlink:href="'.concat(a, "ic-"))
                                  ).call(o, s, '" class="'))
                                ).call(r, l, '"/>');
                              })
                              .join("");
                          },
                        },
                        {
                          key: "makeMenSvgIconSet",
                          value: function (t, e) {
                            var n,
                              i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            return L()(
                              (n = '<svg class="svg_ic-'.concat(
                                i ? "submenu" : "menu",
                                '">'
                              ))
                            ).call(n, this._makeSvgItem(t, e, i), "</svg>");
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  xn = r(9146),
                  zn = r.n(xn),
                  Cn = r(6623),
                  kn = r(4230);
                function Sn(t, e) {
                  return (Sn =
                    kn ||
                    function (t, e) {
                      return (t.__proto__ = e), t;
                    })(t, e);
                }
                function Tn(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (t.prototype = Cn(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    e && Sn(t, e);
                }
                var Dn = r(3742);
                function Ln(t) {
                  return (Ln =
                    "function" == typeof v && "symbol" == typeof Dn
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof v &&
                            t.constructor === v &&
                            t !== v.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                function qn(t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                }
                function En(t, e) {
                  if (e && ("object" === Ln(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return qn(t);
                }
                var jn = r(9856);
                function Pn(t) {
                  return (Pn = kn
                    ? jn
                    : function (t) {
                        return t.__proto__ || jn(t);
                      })(t);
                }
                var Rn = r(6092),
                  In = r.n(Rn),
                  Wn = r(4858),
                  Nn = r.n(Wn),
                  Bn = [
                    "#000000",
                    "#2a2a2a",
                    "#545454",
                    "#7e7e7e",
                    "#a8a8a8",
                    "#d2d2d2",
                    "#ffffff",
                    "",
                    "#ff4040",
                    "#ff6518",
                    "#ffbb3b",
                    "#03bd9e",
                    "#00a9ff",
                    "#515ce6",
                    "#9e5fff",
                    "#ff5583",
                  ],
                  Fn = (function () {
                    function t(e, n) {
                      var i = n.defaultColor,
                        r = void 0 === i ? "#7e7e7e" : i,
                        o = n.toggleDirection,
                        a = void 0 === o ? "up" : o,
                        s = n.usageStatistics;
                      z(this, t),
                        (this.colorpickerElement = e),
                        (this.usageStatistics = s),
                        (this._show = !1),
                        (this._colorpickerElement = e),
                        (this._toggleDirection = a),
                        this._makePickerButtonElement(r),
                        this._makePickerLayerElement(
                          e,
                          e.getAttribute("title")
                        ),
                        (this._color = r),
                        (this.picker = Nn().create({
                          container: this.pickerElement,
                          preset: Bn,
                          color: r,
                          usageStatistics: this.usageStatistics,
                        })),
                        this._addEvent();
                    }
                    return (
                      k(t, [
                        {
                          key: "destroy",
                          value: function () {
                            var t = this;
                            this._removeEvent(),
                              this.picker.destroy(),
                              (this.colorpickerElement.innerHTML = ""),
                              $()(this, function (e, n) {
                                t[n] = null;
                              });
                          },
                        },
                        {
                          key: "color",
                          get: function () {
                            return this._color;
                          },
                          set: function (t) {
                            (this._color = t), this._changeColorElement(t);
                          },
                        },
                        {
                          key: "_changeColorElement",
                          value: function (t) {
                            t
                              ? (this.colorElement.classList.remove(
                                  "transparent"
                                ),
                                (this.colorElement.style.backgroundColor = t))
                              : ((this.colorElement.style.backgroundColor =
                                  "#fff"),
                                this.colorElement.classList.add("transparent"));
                          },
                        },
                        {
                          key: "_makePickerButtonElement",
                          value: function (t) {
                            this.colorpickerElement.classList.add(
                              "tui-image-editor-button"
                            ),
                              (this.colorElement =
                                document.createElement("div")),
                              (this.colorElement.className =
                                "color-picker-value"),
                              t
                                ? (this.colorElement.style.backgroundColor = t)
                                : this.colorElement.classList.add(
                                    "transparent"
                                  );
                          },
                        },
                        {
                          key: "_makePickerLayerElement",
                          value: function (t, e) {
                            var n = document.createElement("label"),
                              i = document.createElement("div");
                            (this.pickerControl =
                              document.createElement("div")),
                              (this.pickerControl.className =
                                "color-picker-control"),
                              (this.pickerElement =
                                document.createElement("div")),
                              (this.pickerElement.className = "color-picker"),
                              (n.innerHTML = e),
                              (i.className = "triangle"),
                              this.pickerControl.appendChild(
                                this.pickerElement
                              ),
                              this.pickerControl.appendChild(i),
                              t.appendChild(this.pickerControl),
                              t.appendChild(this.colorElement),
                              t.appendChild(n);
                          },
                        },
                        {
                          key: "_addEvent",
                          value: function () {
                            var t,
                              e = this;
                            this.picker.on("selectColor", function (t) {
                              e._changeColorElement(t.color),
                                (e._color = t.color),
                                e.fire("change", t.color);
                            }),
                              (this.eventHandler = {
                                pickerToggle: T()(
                                  (t = this._pickerToggleEventHandler)
                                ).call(t, this),
                                pickerHide: function () {
                                  return e.hide();
                                },
                              }),
                              this.colorpickerElement.addEventListener(
                                "click",
                                this.eventHandler.pickerToggle
                              ),
                              document.body.addEventListener(
                                "click",
                                this.eventHandler.pickerHide
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this.colorpickerElement.removeEventListener(
                              "click",
                              this.eventHandler.pickerToggle
                            ),
                              document.body.removeEventListener(
                                "click",
                                this.eventHandler.pickerHide
                              ),
                              this.picker.off();
                          },
                        },
                        {
                          key: "_pickerToggleEventHandler",
                          value: function (t) {
                            var e = t.target,
                              n = e && this._isElementInColorPickerControl(e);
                            (!n || (n && this._isPaletteButton(e))) &&
                              ((this._show = !this._show),
                              (this.pickerControl.style.display = this._show
                                ? "block"
                                : "none"),
                              this._setPickerControlPosition(),
                              this.fire("changeShow", this)),
                              t.stopPropagation();
                          },
                        },
                        {
                          key: "_isPaletteButton",
                          value: function (t) {
                            return (
                              "tui-colorpicker-palette-button" === t.className
                            );
                          },
                        },
                        {
                          key: "_isElementInColorPickerControl",
                          value: function (t) {
                            for (var e = t; e !== document.body && e; ) {
                              if (e === this.pickerControl) return !0;
                              e = e.parentNode;
                            }
                            return !1;
                          },
                        },
                        {
                          key: "hide",
                          value: function () {
                            (this._show = !1),
                              (this.pickerControl.style.display = "none");
                          },
                        },
                        {
                          key: "_setPickerControlPosition",
                          value: function () {
                            var t = this.pickerControl.style,
                              e = this._colorpickerElement.clientWidth / 2 + 2,
                              n = this.pickerControl.offsetWidth / 2 - e,
                              i = -1 * (this.pickerControl.offsetHeight + 10);
                            "down" === this._toggleDirection && (i = 30),
                              (t.top = "".concat(i, "px")),
                              (t.left = "-".concat(n, "px"));
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(Fn);
                var $n = Fn,
                  Hn = /(-?)([0-9]*)[^0-9]*([0-9]*)/g,
                  Yn = (function () {
                    function t(e) {
                      var n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l,
                        c =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      z(this, t),
                        (this._value = c.value || 0),
                        (this.rangeElement = e.slider),
                        (this.rangeInputElement = e.input),
                        this._drawRangeElement(),
                        (this.rangeWidth = this._getRangeWidth()),
                        (this._min = c.min || 0),
                        (this._max = c.max || 100),
                        (this._useDecimal = c.useDecimal),
                        (this._absMax = -1 * this._min + this._max),
                        (this.realTimeEvent = c.realTimeEvent || !1),
                        (this._userInputTimer = null),
                        (this.eventHandler = {
                          startChangingSlide: T()(
                            (n = this._startChangingSlide)
                          ).call(n, this),
                          stopChangingSlide: T()(
                            (i = this._stopChangingSlide)
                          ).call(i, this),
                          changeSlide: T()((r = this._changeSlide)).call(
                            r,
                            this
                          ),
                          changeSlideFinally: T()(
                            (o = this._changeSlideFinally)
                          ).call(o, this),
                          changeInput: T()((a = this._changeInput)).call(
                            a,
                            this
                          ),
                          changeInputFinally: T()(
                            (s = this._changeValueWithInput)
                          ).call(s, this, !0),
                          changeInputWithArrow: T()(
                            (l = this._changeValueWithInputKeyEvent)
                          ).call(l, this),
                        }),
                        this._addClickEvent(),
                        this._addDragEvent(),
                        this._addInputEvent(),
                        (this.value = c.value),
                        this.trigger("change");
                    }
                    return (
                      k(t, [
                        {
                          key: "destroy",
                          value: function () {
                            var t = this;
                            this._removeClickEvent(),
                              this._removeDragEvent(),
                              this._removeInputEvent(),
                              (this.rangeElement.innerHTML = ""),
                              $()(this, function (e, n) {
                                t[n] = null;
                              });
                          },
                        },
                        {
                          key: "max",
                          get: function () {
                            return this._max;
                          },
                          set: function (t) {
                            (this._max = t),
                              (this._absMax = -1 * this._min + this._max),
                              (this.value = this._value);
                          },
                        },
                        {
                          key: "min",
                          get: function () {
                            return this._min;
                          },
                          set: function (t) {
                            (this._min = t), (this.max = this._max);
                          },
                        },
                        {
                          key: "value",
                          get: function () {
                            return this._value;
                          },
                          set: function (t) {
                            var e =
                              (((t = this._useDecimal ? t : Ue(t)) -
                                this._min) *
                                this.rangeWidth) /
                              this._absMax;
                            this.rangeWidth < e && (e = this.rangeWidth),
                              (this.pointer.style.left = "".concat(e, "px")),
                              (this.subbar.style.right = "".concat(
                                this.rangeWidth - e,
                                "px"
                              )),
                              (this._value = t),
                              this.rangeInputElement &&
                                (this.rangeInputElement.value = t);
                          },
                        },
                        {
                          key: "trigger",
                          value: function (t) {
                            this.fire(t, this._value);
                          },
                        },
                        {
                          key: "_getRangeWidth",
                          value: function () {
                            var t = function (t) {
                              return Ue(window.getComputedStyle(t, null).width);
                            };
                            return t(this.rangeElement) - t(this.pointer);
                          },
                        },
                        {
                          key: "_drawRangeElement",
                          value: function () {
                            this.rangeElement.classList.add(
                              "tui-image-editor-range"
                            ),
                              (this.bar = document.createElement("div")),
                              (this.bar.className =
                                "tui-image-editor-virtual-range-bar"),
                              (this.subbar = document.createElement("div")),
                              (this.subbar.className =
                                "tui-image-editor-virtual-range-subbar"),
                              (this.pointer = document.createElement("div")),
                              (this.pointer.className =
                                "tui-image-editor-virtual-range-pointer"),
                              this.bar.appendChild(this.subbar),
                              this.bar.appendChild(this.pointer),
                              this.rangeElement.appendChild(this.bar);
                          },
                        },
                        {
                          key: "_addInputEvent",
                          value: function () {
                            this.rangeInputElement &&
                              (this.rangeInputElement.addEventListener(
                                "keydown",
                                this.eventHandler.changeInputWithArrow
                              ),
                              this.rangeInputElement.addEventListener(
                                "keydown",
                                this.eventHandler.changeInput
                              ),
                              this.rangeInputElement.addEventListener(
                                "blur",
                                this.eventHandler.changeInputFinally
                              ));
                          },
                        },
                        {
                          key: "_removeInputEvent",
                          value: function () {
                            this.rangeInputElement &&
                              (this.rangeInputElement.removeEventListener(
                                "keydown",
                                this.eventHandler.changeInputWithArrow
                              ),
                              this.rangeInputElement.removeEventListener(
                                "keydown",
                                this.eventHandler.changeInput
                              ),
                              this.rangeInputElement.removeEventListener(
                                "blur",
                                this.eventHandler.changeInputFinally
                              ));
                          },
                        },
                        {
                          key: "_changeValueWithInputKeyEvent",
                          value: function (t) {
                            var e,
                              n = t.keyCode,
                              r = t.target;
                            if (!(i()((e = [38, 40])).call(e, n) < 0)) {
                              var o = Number(r.value);
                              if (
                                !(
                                  (o = this._valueUpDownForKeyEvent(o, n)) <
                                    this._min || o > this._max
                                )
                              ) {
                                var a = $e(o, this._min, this.max);
                                (this.value = a), this.fire("change", a, !1);
                              }
                            }
                          },
                        },
                        {
                          key: "_valueUpDownForKeyEvent",
                          value: function (t, e) {
                            var n = this._useDecimal ? 0.1 : 1;
                            return (
                              38 === e ? (t += n) : 40 === e && (t -= n), t
                            );
                          },
                        },
                        {
                          key: "_changeInput",
                          value: function (t) {
                            var e = this;
                            clearTimeout(this._userInputTimer);
                            var n = t.keyCode;
                            n < 48 || n > 57
                              ? t.preventDefault()
                              : (this._userInputTimer = b()(function () {
                                  e._inputSetValue(t.target.value);
                                }, 350));
                          },
                        },
                        {
                          key: "_inputSetValue",
                          value: function (t) {
                            var e = this._useDecimal ? Number(t) : Ue(t);
                            (e = $e(e, this._min, this.max)),
                              (this.value = e),
                              this.fire("change", e, !0);
                          },
                        },
                        {
                          key: "_changeValueWithInput",
                          value: function (t, e) {
                            var n,
                              r = e.keyCode,
                              o = e.target;
                            if (!(i()((n = [38, 40])).call(n, r) >= 0)) {
                              var a = this._filterForInputText(o.value),
                                s = !a || isNaN(a);
                              (o.value = a), s || this._inputSetValue(a);
                            }
                          },
                        },
                        {
                          key: "_addClickEvent",
                          value: function () {
                            this.rangeElement.addEventListener(
                              "click",
                              this.eventHandler.changeSlideFinally
                            );
                          },
                        },
                        {
                          key: "_removeClickEvent",
                          value: function () {
                            this.rangeElement.removeEventListener(
                              "click",
                              this.eventHandler.changeSlideFinally
                            );
                          },
                        },
                        {
                          key: "_addDragEvent",
                          value: function () {
                            this.pointer.addEventListener(
                              "mousedown",
                              this.eventHandler.startChangingSlide
                            );
                          },
                        },
                        {
                          key: "_removeDragEvent",
                          value: function () {
                            this.pointer.removeEventListener(
                              "mousedown",
                              this.eventHandler.startChangingSlide
                            );
                          },
                        },
                        {
                          key: "_changeSlide",
                          value: function (t) {
                            var e = t.screenX - this.firstPosition,
                              n = this.firstLeft + e;
                            (n =
                              (n = n > this.rangeWidth ? this.rangeWidth : n) <
                              0
                                ? 0
                                : n),
                              (this.pointer.style.left = "".concat(n, "px")),
                              (this.subbar.style.right = "".concat(
                                this.rangeWidth - n,
                                "px"
                              ));
                            var i = n / this.rangeWidth,
                              r = this._absMax * i + this._min,
                              o = this._useDecimal ? r : Ue(r);
                            this.value !== o &&
                              ((this.value = o),
                              this.realTimeEvent &&
                                this.fire("change", this._value, !1));
                          },
                        },
                        {
                          key: "_changeSlideFinally",
                          value: function (t) {
                            if (
                              (t.stopPropagation(),
                              "tui-image-editor-range" === t.target.className)
                            ) {
                              var e = t.offsetX / this.rangeWidth,
                                n = this._absMax * e + this._min;
                              (this.pointer.style.left = "".concat(
                                e * this.rangeWidth,
                                "px"
                              )),
                                (this.subbar.style.right = "".concat(
                                  (1 - e) * this.rangeWidth,
                                  "px"
                                )),
                                (this.value = n),
                                this.fire("change", n, !0);
                            }
                          },
                        },
                        {
                          key: "_startChangingSlide",
                          value: function (t) {
                            (this.firstPosition = t.screenX),
                              (this.firstLeft =
                                Ue(this.pointer.style.left) || 0),
                              document.addEventListener(
                                "mousemove",
                                this.eventHandler.changeSlide
                              ),
                              document.addEventListener(
                                "mouseup",
                                this.eventHandler.stopChangingSlide
                              );
                          },
                        },
                        {
                          key: "_stopChangingSlide",
                          value: function () {
                            this.fire("change", this._value, !0),
                              document.removeEventListener(
                                "mousemove",
                                this.eventHandler.changeSlide
                              ),
                              document.removeEventListener(
                                "mouseup",
                                this.eventHandler.stopChangingSlide
                              );
                          },
                        },
                        {
                          key: "_filterForInputText",
                          value: function (t) {
                            return t.replace(Hn, "$1$2$3");
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(Yn);
                var Un = Yn,
                  Xn = (function () {
                    function t(e, n) {
                      var i = n.locale,
                        r = n.name,
                        o = n.makeSvgIcon,
                        a = n.menuBarPosition,
                        s = n.templateHtml,
                        l = n.usageStatistics;
                      z(this, t),
                        (this.subMenuElement = e),
                        (this.menuBarPosition = a),
                        (this.toggleDirection = "top" === a ? "down" : "up"),
                        (this.colorPickerControls = []),
                        (this.usageStatistics = l),
                        (this.eventHandler = {}),
                        this._makeSubMenuElement({
                          locale: i,
                          name: r,
                          makeSvgIcon: o,
                          templateHtml: s,
                        });
                    }
                    return (
                      k(t, [
                        {
                          key: "selector",
                          value: function (t) {
                            return this.subMenuElement.querySelector(t);
                          },
                        },
                        {
                          key: "colorPickerChangeShow",
                          value: function (t) {
                            var e;
                            et()((e = this.colorPickerControls)).call(
                              e,
                              function (e) {
                                t !== e && e.hide();
                              }
                            );
                          },
                        },
                        {
                          key: "getButtonType",
                          value: function (t, e) {
                            return t.className.match(
                              RegExp("(".concat(e.join("|"), ")"))
                            )[0];
                          },
                        },
                        {
                          key: "changeClass",
                          value: function (t, e, n) {
                            t.classList.remove(e), t.classList.add(n);
                          },
                        },
                        { key: "changeStandbyMode", value: function () {} },
                        { key: "changeStartMode", value: function () {} },
                        {
                          key: "_makeSubMenuElement",
                          value: function (t) {
                            var e = t.locale,
                              n = t.name,
                              i = t.iconStyle,
                              r = t.makeSvgIcon,
                              o = t.templateHtml,
                              a = document.createElement("div");
                            (a.className = "tui-image-editor-menu-".concat(n)),
                              (a.innerHTML = o({
                                locale: e,
                                iconStyle: i,
                                makeSvgIcon: r,
                              })),
                              this.subMenuElement.appendChild(a);
                          },
                        },
                        {
                          key: "_onStartEditingInputBox",
                          value: function () {
                            this.fire(pe);
                          },
                        },
                        {
                          key: "_onStopEditingInputBox",
                          value: function () {
                            this.fire(he);
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(Xn);
                var Vn = Xn,
                  Gn = function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o,
                      a,
                      s,
                      l,
                      c = t.locale,
                      d = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a = L()(
                                  (s = L()(
                                    (l =
                                      '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-shape-button">\n            <div class="tui-image-editor-button rect">\n                <div>\n                    '.concat(
                                        d(
                                          ["normal", "active"],
                                          "shape-rectangle",
                                          !0
                                        ),
                                        "\n                </div>\n                <label> "
                                      ))
                                  ).call(
                                    l,
                                    c.localize("Rectangle"),
                                    ' </label>\n            </div>\n            <div class="tui-image-editor-button circle">\n                <div>\n                    '
                                  ))
                                ).call(
                                  s,
                                  d(["normal", "active"], "shape-circle", !0),
                                  "\n                </div>\n                <label> "
                                ))
                              ).call(
                                a,
                                c.localize("Circle"),
                                ' </label>\n            </div>\n            <div class="tui-image-editor-button triangle">\n                <div>\n                    '
                              ))
                            ).call(
                              o,
                              d(["normal", "active"], "shape-triangle", !0),
                              "\n                </div>\n                <label> "
                            ))
                          ).call(
                            r,
                            c.localize("Triangle"),
                            ' </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li class="tie-shape-color-button">\n            <div class="tie-color-fill" title="'
                          ))
                        ).call(
                          i,
                          c.localize("Fill"),
                          '"></div>\n            <div class="tie-color-stroke" title="'
                        ))
                      ).call(
                        n,
                        c.localize("Stroke"),
                        '"></div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-newline tui-image-editor-range-wrap">\n            <label class="range">'
                      ))
                    ).call(
                      e,
                      c.localize("Stroke"),
                      '</label>\n            <div class="tie-stroke-range"></div>\n            <input class="tie-stroke-range-value tui-image-editor-range-value" value="0" />\n        </li>\n    </ul>\n'
                    );
                  },
                  Kn = { stroke: "#ffbb3b", fill: "", strokeWidth: 3 },
                  Zn = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "shape",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: Gn,
                          usageStatistics: l,
                        })).type = null),
                        (r.options = Kn),
                        (r._els = {
                          shapeSelectButton: r.selector(".tie-shape-button"),
                          shapeColorButton: r.selector(
                            ".tie-shape-color-button"
                          ),
                          strokeRange: new Un(
                            {
                              slider: r.selector(".tie-stroke-range"),
                              input: r.selector(".tie-stroke-range-value"),
                            },
                            Le
                          ),
                          fillColorpicker: new $n(
                            r.selector(".tie-color-fill"),
                            {
                              defaultColor: "",
                              toggleDirection: r.toggleDirection,
                              usageStatistics: r.usageStatistics,
                            }
                          ),
                          strokeColorpicker: new $n(
                            r.selector(".tie-color-stroke"),
                            {
                              defaultColor: "#ffbb3b",
                              toggleDirection: r.toggleDirection,
                              usageStatistics: r.usageStatistics,
                            }
                          ),
                        }),
                        r.colorPickerControls.push(r._els.fillColorpicker),
                        r.colorPickerControls.push(r._els.strokeColorpicker),
                        (r.colorPickerInputBoxes = []),
                        r.colorPickerInputBoxes.push(
                          r._els.fillColorpicker.colorpickerElement.querySelector(
                            me
                          )
                        ),
                        r.colorPickerInputBoxes.push(
                          r._els.strokeColorpicker.colorpickerElement.querySelector(
                            me
                          )
                        ),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._els.strokeRange.destroy(),
                              this._els.fillColorpicker.destroy(),
                              this._els.strokeColorpicker.destroy(),
                              Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i,
                              r,
                              o,
                              a,
                              s = this;
                            (this.eventHandler.shapeTypeSelected = T()(
                              (e = this._changeShapeHandler)
                            ).call(e, this)),
                              (this.actions = t),
                              this._els.shapeSelectButton.addEventListener(
                                "click",
                                this.eventHandler.shapeTypeSelected
                              ),
                              this._els.strokeRange.on(
                                "change",
                                T()((n = this._changeStrokeRangeHandler)).call(
                                  n,
                                  this
                                )
                              ),
                              this._els.fillColorpicker.on(
                                "change",
                                T()((i = this._changeFillColorHandler)).call(
                                  i,
                                  this
                                )
                              ),
                              this._els.strokeColorpicker.on(
                                "change",
                                T()((r = this._changeStrokeColorHandler)).call(
                                  r,
                                  this
                                )
                              ),
                              this._els.fillColorpicker.on(
                                "changeShow",
                                T()((o = this.colorPickerChangeShow)).call(
                                  o,
                                  this
                                )
                              ),
                              this._els.strokeColorpicker.on(
                                "changeShow",
                                T()((a = this.colorPickerChangeShow)).call(
                                  a,
                                  this
                                )
                              ),
                              In()(
                                this.colorPickerInputBoxes,
                                function (t) {
                                  var e, n;
                                  t.addEventListener(
                                    fe,
                                    T()((e = s._onStartEditingInputBox)).call(
                                      e,
                                      s
                                    )
                                  ),
                                    t.addEventListener(
                                      be,
                                      T()((n = s._onStopEditingInputBox)).call(
                                        n,
                                        s
                                      )
                                    );
                                },
                                this
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            var t = this;
                            this._els.shapeSelectButton.removeEventListener(
                              "click",
                              this.eventHandler.shapeTypeSelected
                            ),
                              this._els.strokeRange.off(),
                              this._els.fillColorpicker.off(),
                              this._els.strokeColorpicker.off(),
                              In()(
                                this.colorPickerInputBoxes,
                                function (e) {
                                  var n, i;
                                  e.removeEventListener(
                                    fe,
                                    T()((n = t._onStartEditingInputBox)).call(
                                      n,
                                      t
                                    )
                                  ),
                                    e.removeEventListener(
                                      be,
                                      T()((i = t._onStopEditingInputBox)).call(
                                        i,
                                        t
                                      )
                                    );
                                },
                                this
                              );
                          },
                        },
                        {
                          key: "setShapeStatus",
                          value: function (t) {
                            var e = t.strokeWidth,
                              n = t.strokeColor,
                              i = t.fillColor;
                            (this._els.strokeRange.value = e),
                              (this._els.strokeColorpicker.color = n),
                              (this._els.fillColorpicker.color = i),
                              (this.options.stroke = n),
                              (this.options.fill = i),
                              (this.options.strokeWidth = e),
                              this.actions.setDrawingShape(this.type, {
                                strokeWidth: e,
                              });
                          },
                        },
                        {
                          key: "changeStartMode",
                          value: function () {
                            this.actions.stopDrawingMode();
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            (this.type = null),
                              this.actions.changeSelectableAll(!0),
                              this._els.shapeSelectButton.classList.remove(
                                "circle"
                              ),
                              this._els.shapeSelectButton.classList.remove(
                                "triangle"
                              ),
                              this._els.shapeSelectButton.classList.remove(
                                "rect"
                              );
                          },
                        },
                        {
                          key: "setMaxStrokeValue",
                          value: function (t) {
                            var e = t;
                            e <= 0 && (e = Le.max),
                              (this._els.strokeRange.max = e);
                          },
                        },
                        {
                          key: "setStrokeValue",
                          value: function (t) {
                            (this._els.strokeRange.value = t),
                              this._els.strokeRange.trigger("change");
                          },
                        },
                        {
                          key: "getStrokeValue",
                          value: function () {
                            return this._els.strokeRange.value;
                          },
                        },
                        {
                          key: "_changeShapeHandler",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button"
                            );
                            if (e) {
                              this.actions.stopDrawingMode(),
                                this.actions.discardSelection();
                              var n = this.getButtonType(e, [
                                "circle",
                                "triangle",
                                "rect",
                              ]);
                              if (this.type === n)
                                return void this.changeStandbyMode();
                              this.changeStandbyMode(),
                                (this.type = n),
                                t.currentTarget.classList.add(n),
                                this.actions.changeSelectableAll(!1),
                                this.actions.modeChange("shape");
                            }
                          },
                        },
                        {
                          key: "_changeStrokeRangeHandler",
                          value: function (t, e) {
                            (this.options.strokeWidth = Ue(t)),
                              this.actions.changeShape({ strokeWidth: t }, !e),
                              this.actions.setDrawingShape(
                                this.type,
                                this.options
                              );
                          },
                        },
                        {
                          key: "_changeFillColorHandler",
                          value: function (t) {
                            (t = t || "transparent"),
                              (this.options.fill = t),
                              this.actions.changeShape({ fill: t });
                          },
                        },
                        {
                          key: "_changeStrokeColorHandler",
                          value: function (t) {
                            (t = t || "transparent"),
                              (this.options.stroke = t),
                              this.actions.changeShape({ stroke: t });
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  Jn = function (t) {
                    var e,
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
                      b,
                      m,
                      g,
                      v = t.locale,
                      _ = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a = L()(
                                  (s = L()(
                                    (l = L()(
                                      (c = L()(
                                        (d = L()(
                                          (u = L()(
                                            (p = L()(
                                              (h = L()(
                                                (f = L()(
                                                  (b = L()(
                                                    (m = L()(
                                                      (g =
                                                        '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-crop-preset-button">\n            <div class="tui-image-editor-button preset preset-none active">\n                <div>\n                    '.concat(
                                                          _(
                                                            [
                                                              "normal",
                                                              "active",
                                                            ],
                                                            "shape-rectangle",
                                                            !0
                                                          ),
                                                          "\n                </div>\n                <label> "
                                                        ))
                                                    ).call(
                                                      g,
                                                      v.localize("Custom"),
                                                      ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-square">\n                <div>\n                    '
                                                    ))
                                                  ).call(
                                                    m,
                                                    _(
                                                      ["normal", "active"],
                                                      "crop",
                                                      !0
                                                    ),
                                                    "\n                </div>\n                <label> "
                                                  ))
                                                ).call(
                                                  b,
                                                  v.localize("Square"),
                                                  ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-3-2">\n                <div>\n                    '
                                                ))
                                              ).call(
                                                f,
                                                _(
                                                  ["normal", "active"],
                                                  "crop",
                                                  !0
                                                ),
                                                "\n                </div>\n                <label> "
                                              ))
                                            ).call(
                                              h,
                                              v.localize("3:2"),
                                              ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-4-3">\n                <div>\n                    '
                                            ))
                                          ).call(
                                            p,
                                            _(["normal", "active"], "crop", !0),
                                            "\n                </div>\n                <label> "
                                          ))
                                        ).call(
                                          u,
                                          v.localize("4:3"),
                                          ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-5-4">\n                <div>\n                    '
                                        ))
                                      ).call(
                                        d,
                                        _(["normal", "active"], "crop", !0),
                                        "\n                </div>\n                <label> "
                                      ))
                                    ).call(
                                      c,
                                      v.localize("5:4"),
                                      ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-7-5">\n                <div>\n                    '
                                    ))
                                  ).call(
                                    l,
                                    _(["normal", "active"], "crop", !0),
                                    "\n                </div>\n                <label> "
                                  ))
                                ).call(
                                  s,
                                  v.localize("7:5"),
                                  ' </label>\n            </div>\n            <div class="tui-image-editor-button preset preset-16-9">\n                <div>\n                    '
                                ))
                              ).call(
                                a,
                                _(["normal", "active"], "crop", !0),
                                "\n                </div>\n                <label> "
                              ))
                            ).call(
                              o,
                              v.localize("16:9"),
                              ' </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition tui-image-editor-newline">\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tie-crop-button action">\n            <div class="tui-image-editor-button apply">\n                '
                            ))
                          ).call(
                            r,
                            _(["normal", "active"], "apply"),
                            "\n                <label>\n                    "
                          ))
                        ).call(
                          i,
                          v.localize("Apply"),
                          '\n                </label>\n            </div>\n            <div class="tui-image-editor-button cancel">\n                '
                        ))
                      ).call(
                        n,
                        _(["normal", "active"], "cancel"),
                        "\n                <label>\n                    "
                      ))
                    ).call(
                      e,
                      v.localize("Cancel"),
                      "\n                </label>\n            </div>\n        </li>\n    </ul>\n"
                    );
                  },
                  Qn = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "crop",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: Jn,
                          usageStatistics: l,
                        })).status = "active"),
                        (r._els = {
                          apply: r.selector(".tie-crop-button .apply"),
                          cancel: r.selector(".tie-crop-button .cancel"),
                          preset: r.selector(".tie-crop-preset-button"),
                        }),
                        (r.defaultPresetButton =
                          r._els.preset.querySelector(".preset-none")),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(), Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i,
                              r = T()((e = this._applyEventHandler)).call(
                                e,
                                this
                              ),
                              o = T()((n = this._cancelEventHandler)).call(
                                n,
                                this
                              ),
                              a = T()(
                                (i = this._cropzonePresetEventHandler)
                              ).call(i, this);
                            (this.eventHandler = {
                              apply: r,
                              cancel: o,
                              cropzonePreset: a,
                            }),
                              (this.actions = t),
                              this._els.apply.addEventListener("click", r),
                              this._els.cancel.addEventListener("click", o),
                              this._els.preset.addEventListener("click", a);
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this._els.apply.removeEventListener(
                              "click",
                              this.eventHandler.apply
                            ),
                              this._els.cancel.removeEventListener(
                                "click",
                                this.eventHandler.cancel
                              ),
                              this._els.preset.removeEventListener(
                                "click",
                                this.eventHandler.cropzonePreset
                              );
                          },
                        },
                        {
                          key: "_applyEventHandler",
                          value: function () {
                            this.actions.crop(),
                              this._els.apply.classList.remove("active");
                          },
                        },
                        {
                          key: "_cancelEventHandler",
                          value: function () {
                            this.actions.cancel(),
                              this._els.apply.classList.remove("active");
                          },
                        },
                        {
                          key: "_cropzonePresetEventHandler",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button.preset"
                            );
                            if (e) {
                              var n = K(
                                e.className.match(/preset-[^\s]+/),
                                1
                              )[0];
                              this._setPresetButtonActive(e),
                                this.actions.preset(n);
                            }
                          },
                        },
                        {
                          key: "changeStartMode",
                          value: function () {
                            this.actions.modeChange("crop");
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            this.actions.stopDrawingMode(),
                              this._setPresetButtonActive();
                          },
                        },
                        {
                          key: "changeApplyButtonStatus",
                          value: function (t) {
                            t
                              ? this._els.apply.classList.add("active")
                              : this._els.apply.classList.remove("active");
                          },
                        },
                        {
                          key: "_setPresetButtonActive",
                          value: function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.defaultPresetButton;
                            $()(
                              this._els.preset.querySelectorAll(".preset"),
                              function (t) {
                                t.classList.remove("active");
                              }
                            ),
                              t && t.classList.add("active");
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  ti = function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o,
                      a,
                      s = t.locale,
                      l = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a =
                                  '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tui-image-editor-submenu-align">\n            <div class="tui-image-editor-range-wrap tui-image-editor-newline">\n                <label class="range">'.concat(
                                    s.localize("Width"),
                                    '&nbsp;</label>\n                <div class="tie-width-range"></div>\n                <input class="tie-width-range-value tui-image-editor-range-value" value="0" /> <label>px</label>\n                <div class="tui-image-editor-partition tui-image-editor-newline"></div>\n                <label class="range">'
                                  ))
                              ).call(
                                a,
                                s.localize("Height"),
                                '</label>\n                <div class="tie-height-range"></div>\n                <input class="tie-height-range-value tui-image-editor-range-value" value="0" /> <label>px</label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition tui-image-editor-newline"></li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-submenu-align">\n            <div class="tui-image-editor-checkbox-wrap">\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-lock-aspect-ratio">\n                        <span>'
                              ))
                            ).call(
                              o,
                              s.localize("Lock Aspect Ratio"),
                              '</span>\n                    </label>\n                </div>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition tui-image-editor-newline"></li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-partition tui-image-editor-newline"></li>\n        <li class="tie-resize-button action">\n            <div class="tui-image-editor-button apply">\n                '
                            ))
                          ).call(
                            r,
                            l(["normal", "active"], "apply"),
                            "\n                <label>\n                    "
                          ))
                        ).call(
                          i,
                          s.localize("Apply"),
                          '\n                </label>\n            </div>\n            <div class="tui-image-editor-button cancel">\n                '
                        ))
                      ).call(
                        n,
                        l(["normal", "active"], "cancel"),
                        "\n                <label>\n                    "
                      ))
                    ).call(
                      e,
                      s.localize("Cancel"),
                      "\n                </label>\n            </div>\n        </li>\n    </ul>\n"
                    );
                  },
                  ei = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
          