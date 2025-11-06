// app.part30-de-30.js
    t +
                          "). Corrupted zip ?"
                      );
                  },
                  setIndex: function (t) {
                    this.checkIndex(t), (this.index = t);
                  },
                  skip: function (t) {
                    this.setIndex(this.index + t);
                  },
                  byteAt: function (t) {},
                  readInt: function (t) {
                    var e,
                      n = 0;
                    for (
                      this.checkOffset(t), e = this.index + t - 1;
                      e >= this.index;
                      e--
                    )
                      n = (n << 8) + this.byteAt(e);
                    return (this.index += t), n;
                  },
                  readString: function (t) {
                    return i.transformTo("string", this.readData(t));
                  },
                  readData: function (t) {},
                  lastIndexOfSignature: function (t) {},
                  readDate: function () {
                    var t = this.readInt(4);
                    return new Date(
                      1980 + ((t >> 25) & 127),
                      ((t >> 21) & 15) - 1,
                      (t >> 16) & 31,
                      (t >> 11) & 31,
                      (t >> 5) & 63,
                      (31 & t) << 1
                    );
                  },
                }),
                  (e.exports = r);
              },
              { "./utils": 21 },
            ],
            6: [
              function (t, e, n) {
                "use strict";
                (n.base64 = !1),
                  (n.binary = !1),
                  (n.dir = !1),
                  (n.createFolders = !1),
                  (n.date = null),
                  (n.compression = null),
                  (n.comment = null);
              },
              {},
            ],
            7: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils");
                (n.string2binary = function (t) {
                  return i.string2binary(t);
                }),
                  (n.string2Uint8Array = function (t) {
                    return i.transformTo("uint8array", t);
                  }),
                  (n.uint8Array2String = function (t) {
                    return i.transformTo("string", t);
                  }),
                  (n.string2Blob = function (t) {
                    var e = i.transformTo("arraybuffer", t);
                    return i.arrayBuffer2Blob(e);
                  }),
                  (n.arrayBuffer2Blob = function (t) {
                    return i.arrayBuffer2Blob(t);
                  }),
                  (n.transformTo = function (t, e) {
                    return i.transformTo(t, e);
                  }),
                  (n.getTypeOf = function (t) {
                    return i.getTypeOf(t);
                  }),
                  (n.checkSupport = function (t) {
                    return i.checkSupport(t);
                  }),
                  (n.MAX_VALUE_16BITS = i.MAX_VALUE_16BITS),
                  (n.MAX_VALUE_32BITS = i.MAX_VALUE_32BITS),
                  (n.pretty = function (t) {
                    return i.pretty(t);
                  }),
                  (n.findCompression = function (t) {
                    return i.findCompression(t);
                  }),
                  (n.isRegExp = function (t) {
                    return i.isRegExp(t);
                  });
              },
              { "./utils": 21 },
            ],
            8: [
              function (t, e, n) {
                "use strict";
                var i =
                    "undefined" != typeof Uint8Array &&
                    "undefined" != typeof Uint16Array &&
                    "undefined" != typeof Uint32Array,
                  r = t("pako");
                (n.uncompressInputType = i ? "uint8array" : "array"),
                  (n.compressInputType = i ? "uint8array" : "array"),
                  (n.magic = "\b\0"),
                  (n.compress = function (t) {
                    return r.deflateRaw(t);
                  }),
                  (n.uncompress = function (t) {
                    return r.inflateRaw(t);
                  });
              },
              { pako: 24 },
            ],
            9: [
              function (t, e, n) {
                "use strict";
                var i = t("./base64");
                function r(t, e) {
                  if (!(this instanceof r)) return new r(t, e);
                  (this.files = {}),
                    (this.comment = null),
                    (this.root = ""),
                    t && this.load(t, e),
                    (this.clone = function () {
                      var t = new r();
                      for (var e in this)
                        "function" != typeof this[e] && (t[e] = this[e]);
                      return t;
                    });
                }
                (r.prototype = t("./object")),
                  (r.prototype.load = t("./load")),
                  (r.support = t("./support")),
                  (r.defaults = t("./defaults")),
                  (r.utils = t("./deprecatedPublicUtils")),
                  (r.base64 = {
                    encode: function (t) {
                      return i.encode(t);
                    },
                    decode: function (t) {
                      return i.decode(t);
                    },
                  }),
                  (r.compressions = t("./compressions")),
                  (e.exports = r);
              },
              {
                "./base64": 1,
                "./compressions": 3,
                "./defaults": 6,
                "./deprecatedPublicUtils": 7,
                "./load": 10,
                "./object": 13,
                "./support": 17,
              },
            ],
            10: [
              function (t, e, n) {
                "use strict";
                var i = t("./base64"),
                  r = t("./zipEntries");
                e.exports = function (t, e) {
                  var n, o, a, s;
                  for (
                    (e = e || {}).base64 && (t = i.decode(t)),
                      n = (o = new r(t, e)).files,
                      a = 0;
                    a < n.length;
                    a++
                  )
                    (s = n[a]),
                      this.file(s.fileName, s.decompressed, {
                        binary: !0,
                        optimizedBinaryString: !0,
                        date: s.date,
                        dir: s.dir,
                        comment: s.fileComment.length ? s.fileComment : null,
                        createFolders: e.createFolders,
                      });
                  return (
                    o.zipComment.length && (this.comment = o.zipComment), this
                  );
                };
              },
              { "./base64": 1, "./zipEntries": 22 },
            ],
            11: [
              function (t, e, i) {
                (function (t) {
                  "use strict";
                  var n = function () {};
                  if (void 0 !== t) {
                    var i = !t.from;
                    if (!i)
                      try {
                        t.from("foo", "utf8");
                      } catch (t) {
                        i = !0;
                      }
                    (n = i
                      ? function (e, n) {
                          return n ? new t(e, n) : new t(e);
                        }
                      : t.from.bind(t)),
                      t.alloc ||
                        (t.alloc = function (e) {
                          return new t(e);
                        });
                  }
                  (e.exports = function (e, i) {
                    return "number" == typeof e ? t.alloc(e) : n(e, i);
                  }),
                    (e.exports.test = function (e) {
                      return t.isBuffer(e);
                    });
                }).call(this, void 0 !== n ? n : void 0);
              },
              {},
            ],
            12: [
              function (t, e, n) {
                "use strict";
                var i = t("./uint8ArrayReader");
                function r(t) {
                  (this.data = t),
                    (this.length = this.data.length),
                    (this.index = 0);
                }
                (r.prototype = new i()),
                  (r.prototype.readData = function (t) {
                    this.checkOffset(t);
                    var e = this.data.slice(this.index, this.index + t);
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "./uint8ArrayReader": 18 },
            ],
            13: [
              function (t, e, n) {
                "use strict";
                var i = t("./support"),
                  r = t("./utils"),
                  o = t("./crc32"),
                  a = t("./signature"),
                  s = t("./defaults"),
                  l = t("./base64"),
                  c = t("./compressions"),
                  d = t("./compressedObject"),
                  u = t("./nodeBuffer"),
                  p = t("./utf8"),
                  h = t("./stringWriter"),
                  f = t("./uint8ArrayWriter"),
                  b = function (t) {
                    if (
                      t._data instanceof d &&
                      ((t._data = t._data.getContent()),
                      (t.options.binary = !0),
                      (t.options.base64 = !1),
                      "uint8array" === r.getTypeOf(t._data))
                    ) {
                      var e = t._data;
                      (t._data = new Uint8Array(e.length)),
                        0 !== e.length && t._data.set(e, 0);
                    }
                    return t._data;
                  },
                  m = function (t) {
                    var e = b(t);
                    return "string" === r.getTypeOf(e)
                      ? !t.options.binary && i.nodebuffer
                        ? u(e, "utf-8")
                        : t.asBinary()
                      : e;
                  },
                  g = function (t) {
                    var e = b(this);
                    return null == e
                      ? ""
                      : (this.options.base64 && (e = l.decode(e)),
                        (e =
                          t && this.options.binary
                            ? z.utf8decode(e)
                            : r.transformTo("string", e)),
                        t ||
                          this.options.binary ||
                          (e = r.transformTo("string", z.utf8encode(e))),
                        e);
                  },
                  v = function (t, e, n) {
                    (this.name = t),
                      (this.dir = n.dir),
                      (this.date = n.date),
                      (this.comment = n.comment),
                      (this._data = e),
                      (this.options = n),
                      (this._initialMetadata = { dir: n.dir, date: n.date });
                  };
                v.prototype = {
                  asText: function () {
                    return g.call(this, !0);
                  },
                  asBinary: function () {
                    return g.call(this, !1);
                  },
                  asNodeBuffer: function () {
                    var t = m(this);
                    return r.transformTo("nodebuffer", t);
                  },
                  asUint8Array: function () {
                    var t = m(this);
                    return r.transformTo("uint8array", t);
                  },
                  asArrayBuffer: function () {
                    return this.asUint8Array().buffer;
                  },
                };
                var _ = function (t, e) {
                    var n,
                      i = "";
                    for (n = 0; n < e; n++)
                      (i += String.fromCharCode(255 & t)), (t >>>= 8);
                    return i;
                  },
                  y = function () {
                    var t,
                      e,
                      n = {};
                    for (t = 0; t < arguments.length; t++)
                      for (e in arguments[t])
                        arguments[t].hasOwnProperty(e) &&
                          void 0 === n[e] &&
                          (n[e] = arguments[t][e]);
                    return n;
                  },
                  M = function (t, e, n) {
                    var i,
                      o = r.getTypeOf(e);
                    if (
                      ((n = (function (t) {
                        return (
                          !0 !== (t = t || {}).base64 ||
                            (null !== t.binary && void 0 !== t.binary) ||
                            (t.binary = !0),
                          ((t = y(t, s)).date = t.date || new Date()),
                          null !== t.compression &&
                            (t.compression = t.compression.toUpperCase()),
                          t
                        );
                      })(n)).createFolders &&
                        (i = O(t)) &&
                        w.call(this, i, !0),
                      n.dir || null == e)
                    )
                      (n.base64 = !1), (n.binary = !1), (e = null);
                    else if ("string" === o)
                      n.binary &&
                        !n.base64 &&
                        !0 !== n.optimizedBinaryString &&
                        (e = r.string2binary(e));
                    else {
                      if (
                        ((n.base64 = !1),
                        (n.binary = !0),
                        !(o || e instanceof d))
                      )
                        throw new Error(
                          "The data of '" +
                            t +
                            "' is in an unsupported format !"
                        );
                      "arraybuffer" === o &&
                        (e = r.transformTo("uint8array", e));
                    }
                    var a = new v(t, e, n);
                    return (this.files[t] = a), a;
                  },
                  O = function (t) {
                    "/" == t.slice(-1) && (t = t.substring(0, t.length - 1));
                    var e = t.lastIndexOf("/");
                    return e > 0 ? t.substring(0, e) : "";
                  },
                  w = function (t, e) {
                    return (
                      "/" != t.slice(-1) && (t += "/"),
                      (e = void 0 !== e && e),
                      this.files[t] ||
                        M.call(this, t, null, { dir: !0, createFolders: e }),
                      this.files[t]
                    );
                  },
                  A = function (t, e) {
                    var n,
                      i = new d();
                    return (
                      t._data instanceof d
                        ? ((i.uncompressedSize = t._data.uncompressedSize),
                          (i.crc32 = t._data.crc32),
                          0 === i.uncompressedSize || t.dir
                            ? ((e = c.STORE),
                              (i.compressedContent = ""),
                              (i.crc32 = 0))
                            : t._data.compressionMethod === e.magic
                            ? (i.compressedContent =
                                t._data.getCompressedContent())
                            : ((n = t._data.getContent()),
                              (i.compressedContent = e.compress(
                                r.transformTo(e.compressInputType, n)
                              ))))
                        : (((n = m(t)) && 0 !== n.length && !t.dir) ||
                            ((e = c.STORE), (n = "")),
                          (i.uncompressedSize = n.length),
                          (i.crc32 = o(n)),
                          (i.compressedContent = e.compress(
                            r.transformTo(e.compressInputType, n)
                          ))),
                      (i.compressedSize = i.compressedContent.length),
                      (i.compressionMethod = e.magic),
                      i
                    );
                  },
                  x = function (t, e, n, i) {
                    n.compressedContent;
                    var s,
                      l,
                      c,
                      d,
                      u = r.transformTo("string", p.utf8encode(e.name)),
                      h = e.comment || "",
                      f = r.transformTo("string", p.utf8encode(h)),
                      b = u.length !== e.name.length,
                      m = f.length !== h.length,
                      g = e.options,
                      v = "",
                      y = "",
                      M = "";
                    (c = e._initialMetadata.dir !== e.dir ? e.dir : g.dir),
                      (s = (d =
                        e._initialMetadata.date !== e.date
                          ? e.date
                          : g.date).getHours()),
                      (s <<= 6),
                      (s |= d.getMinutes()),
                      (s <<= 5),
                      (s |= d.getSeconds() / 2),
                      (l = d.getFullYear() - 1980),
                      (l <<= 4),
                      (l |= d.getMonth() + 1),
                      (l <<= 5),
                      (l |= d.getDate()),
                      b &&
                        ((y = _(1, 1) + _(o(u), 4) + u),
                        (v += "up" + _(y.length, 2) + y)),
                      m &&
                        ((M = _(1, 1) + _(this.crc32(f), 4) + f),
                        (v += "uc" + _(M.length, 2) + M));
                    var O = "";
                    return (
                      (O += "\n\0"),
                      (O += b || m ? "\0\b" : "\0\0"),
                      (O += n.compressionMethod),
                      (O += _(s, 2)),
                      (O += _(l, 2)),
                      (O += _(n.crc32, 4)),
                      (O += _(n.compressedSize, 4)),
                      (O += _(n.uncompressedSize, 4)),
                      (O += _(u.length, 2)),
                      (O += _(v.length, 2)),
                      {
                        fileRecord: a.LOCAL_FILE_HEADER + O + u + v,
                        dirRecord:
                          a.CENTRAL_FILE_HEADER +
                          "\0" +
                          O +
                          _(f.length, 2) +
                          "\0\0\0\0" +
                          (!0 === c ? "\0\0\0" : "\0\0\0\0") +
                          _(i, 4) +
                          u +
                          v +
                          f,
                        compressedObject: n,
                      }
                    );
                  },
                  z = {
                    load: function (t, e) {
                      throw new Error(
                        "Load method is not defined. Is the file jszip-load.js included ?"
                      );
                    },
                    filter: function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o = [];
                      for (e in this.files)
                        this.files.hasOwnProperty(e) &&
                          ((i = this.files[e]),
                          (r = new v(i.name, i._data, y(i.options))),
                          (n = e.slice(this.root.length, e.length)),
                          e.slice(0, this.root.length) === this.root &&
                            t(n, r) &&
                            o.push(r));
                      return o;
                    },
                    file: function (t, e, n) {
                      if (1 === arguments.length) {
                        if (r.isRegExp(t)) {
                          var i = t;
                          return this.filter(function (t, e) {
                            return !e.dir && i.test(t);
                          });
                        }
                        return (
                          this.filter(function (e, n) {
                            return !n.dir && e === t;
                          })[0] || null
                        );
                      }
                      return (t = this.root + t), M.call(this, t, e, n), this;
                    },
                    folder: function (t) {
                      if (!t) return this;
                      if (r.isRegExp(t))
                        return this.filter(function (e, n) {
                          return n.dir && t.test(e);
                        });
                      var e = this.root + t,
                        n = w.call(this, e),
                        i = this.clone();
                      return (i.root = n.name), i;
                    },
                    remove: function (t) {
                      t = this.root + t;
                      var e = this.files[t];
                      if (
                        (e ||
                          ("/" != t.slice(-1) && (t += "/"),
                          (e = this.files[t])),
                        e && !e.dir)
                      )
                        delete this.files[t];
                      else
                        for (
                          var n = this.filter(function (e, n) {
                              return n.name.slice(0, t.length) === t;
                            }),
                            i = 0;
                          i < n.length;
                          i++
                        )
                          delete this.files[n[i].name];
                      return this;
                    },
                    generate: function (t) {
                      (t = y(t || {}, {
                        base64: !0,
                        compression: "STORE",
                        type: "base64",
                        comment: null,
                      })),
                        r.checkSupport(t.type);
                      var e,
                        n,
                        i,
                        o = [],
                        s = 0,
                        d = 0,
                        u = r.transformTo(
                          "string",
                          this.utf8encode(t.comment || this.comment || "")
                        );
                      for (var p in this.files)
                        if (this.files.hasOwnProperty(p)) {
                          var b = this.files[p],
                            m =
                              b.options.compression ||
                              t.compression.toUpperCase(),
                            g = c[m];
                          if (!g)
                            throw new Error(
                              m + " is not a valid compression method !"
                            );
                          var v = A.call(this, b, g),
                            M = x.call(this, p, b, v, s);
                          (s += M.fileRecord.length + v.compressedSize),
                            (d += M.dirRecord.length),
                            o.push(M);
                        }
                      i =
                        a.CENTRAL_DIRECTORY_END +
                        "\0\0\0\0" +
                        _(o.length, 2) +
                        _(o.length, 2) +
                        _(d, 4) +
                        _(s, 4) +
                        _(u.length, 2) +
                        u;
                      var O = t.type.toLowerCase();
                      for (
                        e =
                          "uint8array" === O ||
                          "arraybuffer" === O ||
                          "blob" === O ||
                          "nodebuffer" === O
                            ? new f(s + d + i.length)
                            : new h(s + d + i.length),
                          n = 0;
                        n < o.length;
                        n++
                      )
                        e.append(o[n].fileRecord),
                          e.append(o[n].compressedObject.compressedContent);
                      for (n = 0; n < o.length; n++) e.append(o[n].dirRecord);
                      e.append(i);
                      var w = e.finalize();
                      switch (t.type.toLowerCase()) {
                        case "uint8array":
                        case "arraybuffer":
                        case "nodebuffer":
                          return r.transformTo(t.type.toLowerCase(), w);
                        case "blob":
                          return r.arrayBuffer2Blob(
                            r.transformTo("arraybuffer", w)
                          );
                        case "base64":
                          return t.base64 ? l.encode(w) : w;
                        default:
                          return w;
                      }
                    },
                    crc32: function (t, e) {
                      return o(t, e);
                    },
                    utf8encode: function (t) {
                      return r.transformTo("string", p.utf8encode(t));
                    },
                    utf8decode: function (t) {
                      return p.utf8decode(t);
                    },
                  };
                e.exports = z;
              },
              {
                "./base64": 1,
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./defaults": 6,
                "./nodeBuffer": 11,
                "./signature": 14,
                "./stringWriter": 16,
                "./support": 17,
                "./uint8ArrayWriter": 19,
                "./utf8": 20,
                "./utils": 21,
              },
            ],
            14: [
              function (t, e, n) {
                "use strict";
                (n.LOCAL_FILE_HEADER = "PK"),
                  (n.CENTRAL_FILE_HEADER = "PK"),
                  (n.CENTRAL_DIRECTORY_END = "PK"),
                  (n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
                  (n.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                  (n.DATA_DESCRIPTOR = "PK\b");
              },
              {},
            ],
            15: [
              function (t, e, n) {
                "use strict";
                var i = t("./dataReader"),
                  r = t("./utils");
                function o(t, e) {
                  (this.data = t),
                    e || (this.data = r.string2binary(this.data)),
                    (this.length = this.data.length),
                    (this.index = 0);
                }
                (o.prototype = new i()),
                  (o.prototype.byteAt = function (t) {
                    return this.data.charCodeAt(t);
                  }),
                  (o.prototype.lastIndexOfSignature = function (t) {
                    return this.data.lastIndexOf(t);
                  }),
                  (o.prototype.readData = function (t) {
                    this.checkOffset(t);
                    var e = this.data.slice(this.index, this.index + t);
                    return (this.index += t), e;
                  }),
                  (e.exports = o);
              },
              { "./dataReader": 5, "./utils": 21 },
            ],
            16: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils"),
                  r = function () {
                    this.data = [];
                  };
                (r.prototype = {
                  append: function (t) {
                    (t = i.transformTo("string", t)), this.data.push(t);
                  },
                  finalize: function () {
                    return this.data.join("");
                  },
                }),
                  (e.exports = r);
              },
              { "./utils": 21 },
            ],
            17: [
              function (t, e, i) {
                (function (t) {
                  "use strict";
                  if (
                    ((i.base64 = !0),
                    (i.array = !0),
                    (i.string = !0),
                    (i.arraybuffer =
                      "undefined" != typeof ArrayBuffer &&
                      "undefined" != typeof Uint8Array),
                    (i.nodebuffer = void 0 !== t),
                    (i.uint8array = "undefined" != typeof Uint8Array),
                    "undefined" == typeof ArrayBuffer)
                  )
                    i.blob = !1;
                  else {
                    var e = new ArrayBuffer(0);
                    try {
                      i.blob =
                        0 === new Blob([e], { type: "application/zip" }).size;
                    } catch (t) {
                      try {
                        var n = new (window.BlobBuilder ||
                          window.WebKitBlobBuilder ||
                          window.MozBlobBuilder ||
                          window.MSBlobBuilder)();
                        n.append(e),
                          (i.blob = 0 === n.getBlob("application/zip").size);
                      } catch (t) {
                        i.blob = !1;
                      }
                    }
                  }
                }).call(this, void 0 !== n ? n : void 0);
              },
              {},
            ],
            18: [
              function (t, e, n) {
                "use strict";
                var i = t("./dataReader");
                function r(t) {
                  t &&
                    ((this.data = t),
                    (this.length = this.data.length),
                    (this.index = 0));
                }
                (r.prototype = new i()),
                  (r.prototype.byteAt = function (t) {
                    return this.data[t];
                  }),
                  (r.prototype.lastIndexOfSignature = function (t) {
                    for (
                      var e = t.charCodeAt(0),
                        n = t.charCodeAt(1),
                        i = t.charCodeAt(2),
                        r = t.charCodeAt(3),
                        o = this.length - 4;
                      o >= 0;
                      --o
                    )
                      if (
                        this.data[o] === e &&
                        this.data[o + 1] === n &&
                        this.data[o + 2] === i &&
                        this.data[o + 3] === r
                      )
                        return o;
                    return -1;
                  }),
                  (r.prototype.readData = function (t) {
                    if ((this.checkOffset(t), 0 === t))
                      return new Uint8Array(0);
                    var e = this.data.subarray(this.index, this.index + t);
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "./dataReader": 5 },
            ],
            19: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils"),
                  r = function (t) {
                    (this.data = new Uint8Array(t)), (this.index = 0);
                  };
                (r.prototype = {
                  append: function (t) {
                    0 !== t.length &&
                      ((t = i.transformTo("uint8array", t)),
                      this.data.set(t, this.index),
                      (this.index += t.length));
                  },
                  finalize: function () {
                    return this.data;
                  },
                }),
                  (e.exports = r);
              },
              { "./utils": 21 },
            ],
            20: [
              function (t, e, n) {
                "use strict";
                for (
                  var i = t("./utils"),
                    r = t("./support"),
                    o = t("./nodeBuffer"),
                    a = new Array(256),
                    s = 0;
                  s < 256;
                  s++
                )
                  a[s] =
                    s >= 252
                      ? 6
                      : s >= 248
                      ? 5
                      : s >= 240
                      ? 4
                      : s >= 224
                      ? 3
                      : s >= 192
                      ? 2
                      : 1;
                a[254] = a[254] = 1;
                var l = function (t, e) {
                    var n;
                    for (
                      (e = e || t.length) > t.length && (e = t.length),
                        n = e - 1;
                      n >= 0 && 128 == (192 & t[n]);

                    )
                      n--;
                    return n < 0 || 0 === n ? e : n + a[t[n]] > e ? n : e;
                  },
                  c = function (t) {
                    var e,
                      n,
                      r,
                      o,
                      s = t.length,
                      l = new Array(2 * s);
                    for (n = 0, e = 0; e < s; )
                      if ((r = t[e++]) < 128) l[n++] = r;
                      else if ((o = a[r]) > 4) (l[n++] = 65533), (e += o - 1);
                      else {
                        for (
                          r &= 2 === o ? 31 : 3 === o ? 15 : 7;
                          o > 1 && e < s;

                        )
                          (r = (r << 6) | (63 & t[e++])), o--;
                        o > 1
                          ? (l[n++] = 65533)
                          : r < 65536
                          ? (l[n++] = r)
                          : ((r -= 65536),
                            (l[n++] = 55296 | ((r >> 10) & 1023)),
                            (l[n++] = 56320 | (1023 & r)));
                      }
                    return (
                      l.length !== n &&
                        (l.subarray ? (l = l.subarray(0, n)) : (l.length = n)),
                      i.applyFromCharCode(l)
                    );
                  };
                (n.utf8encode = function (t) {
                  return r.nodebuffer
                    ? o(t, "utf-8")
                    : (function (t) {
                        var e,
                          n,
                          i,
                          o,
                          a,
                          s = t.length,
                          l = 0;
                        for (o = 0; o < s; o++)
                          55296 == (64512 & (n = t.charCodeAt(o))) &&
                            o + 1 < s &&
                            56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
                            ((n = 65536 + ((n - 55296) << 10) + (i - 56320)),
                            o++),
                            (l +=
                              n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                        for (
                          e = r.uint8array ? new Uint8Array(l) : new Array(l),
                            a = 0,
                            o = 0;
                          a < l;
                          o++
                        )
                          55296 == (64512 & (n = t.charCodeAt(o))) &&
                            o + 1 < s &&
                            56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
                            ((n = 65536 + ((n - 55296) << 10) + (i - 56320)),
                            o++),
                            n < 128
                              ? (e[a++] = n)
                              : n < 2048
                              ? ((e[a++] = 192 | (n >>> 6)),
                                (e[a++] = 128 | (63 & n)))
                              : n < 65536
                              ? ((e[a++] = 224 | (n >>> 12)),
                                (e[a++] = 128 | ((n >>> 6) & 63)),
                                (e[a++] = 128 | (63 & n)))
                              : ((e[a++] = 240 | (n >>> 18)),
                                (e[a++] = 128 | ((n >>> 12) & 63)),
                                (e[a++] = 128 | ((n >>> 6) & 63)),
                                (e[a++] = 128 | (63 & n)));
                        return e;
                      })(t);
                }),
                  (n.utf8decode = function (t) {
                    if (r.nodebuffer)
                      return i.transformTo("nodebuffer", t).toString("utf-8");
                    for (
                      var e = [],
                        n = 0,
                        o = (t = i.transformTo(
                          r.uint8array ? "uint8array" : "array",
                          t
                        )).length;
                      n < o;

                    ) {
                      var a = l(t, Math.min(n + 65536, o));
                      r.uint8array
                        ? e.push(c(t.subarray(n, a)))
                        : e.push(c(t.slice(n, a))),
                        (n = a);
                    }
                    return e.join("");
                  });
              },
              { "./nodeBuffer": 11, "./support": 17, "./utils": 21 },
            ],
            21: [
              function (t, e, n) {
                "use strict";
                var i = t("./support"),
                  r = t("./compressions"),
                  o = t("./nodeBuffer");
                function a(t) {
                  return t;
                }
                function s(t, e) {
                  for (var n = 0; n < t.length; ++n)
                    e[n] = 255 & t.charCodeAt(n);
                  return e;
                }
                function l(t) {
                  var e = 65536,
                    i = [],
                    r = t.length,
                    a = n.getTypeOf(t),
                    s = 0,
                    l = !0;
                  try {
                    switch (a) {
                      case "uint8array":
                        String.fromCharCode.apply(null, new Uint8Array(0));
                        break;
                      case "nodebuffer":
                        String.fromCharCode.apply(null, o(0));
                    }
                  } catch (t) {
                    l = !1;
                  }
                  if (!l) {
                    for (var c = "", d = 0; d < t.length; d++)
                      c += String.fromCharCode(t[d]);
                    return c;
                  }
                  for (; s < r && e > 1; )
                    try {
                      "array" === a || "nodebuffer" === a
                        ? i.push(
                            String.fromCharCode.apply(
                              null,
                              t.slice(s, Math.min(s + e, r))
                            )
                          )
                        : i.push(
                            String.fromCharCode.apply(
                              null,
                              t.subarray(s, Math.min(s + e, r))
                            )
                          ),
                        (s += e);
                    } catch (t) {
                      e = Math.floor(e / 2);
                    }
                  return i.join("");
                }
                function c(t, e) {
                  for (var n = 0; n < t.length; n++) e[n] = t[n];
                  return e;
                }
                (n.string2binary = function (t) {
                  for (var e = "", n = 0; n < t.length; n++)
                    e += String.fromCharCode(255 & t.charCodeAt(n));
                  return e;
                }),
                  (n.arrayBuffer2Blob = function (t) {
                    n.checkSupport("blob");
                    try {
                      return new Blob([t], { type: "application/zip" });
                    } catch (n) {
                      try {
                        var e = new (window.BlobBuilder ||
                          window.WebKitBlobBuilder ||
                          window.MozBlobBuilder ||
                          window.MSBlobBuilder)();
                        return e.append(t), e.getBlob("application/zip");
                      } catch (t) {
                        throw new Error("Bug : can't construct the Blob.");
                      }
                    }
                  }),
                  (n.applyFromCharCode = l);
                var d = {};
                (d.string = {
                  string: a,
                  array: function (t) {
                    return s(t, new Array(t.length));
                  },
                  arraybuffer: function (t) {
                    return d.string.uint8array(t).buffer;
                  },
                  uint8array: function (t) {
                    return s(t, new Uint8Array(t.length));
                  },
                  nodebuffer: function (t) {
                    return s(t, o(t.length));
                  },
                }),
                  (d.array = {
                    string: l,
                    array: a,
                    arraybuffer: function (t) {
                      return new Uint8Array(t).buffer;
                    },
                    uint8array: function (t) {
                      return new Uint8Array(t);
                    },
                    nodebuffer: function (t) {
                      return o(t);
                    },
                  }),
                  (d.arraybuffer = {
                    string: function (t) {
                      return l(new Uint8Array(t));
                    },
                    array: function (t) {
                      return c(new Uint8Array(t), new Array(t.byteLength));
                    },
                    arraybuffer: a,
                    uint8array: function (t) {
                      return new Uint8Array(t);
                    },
                    nodebuffer: function (t) {
                      return o(new Uint8Array(t));
                    },
                  }),
                  (d.uint8array = {
                    string: l,
                    array: function (t) {
                      return c(t, new Array(t.length));
                    },
                    arraybuffer: function (t) {
                      return t.buffer;
                    },
                    uint8array: a,
                    nodebuffer: function (t) {
                      return o(t);
                    },
                  }),
                  (d.nodebuffer = {
                    string: l,
                    array: function (t) {
                      return c(t, new Array(t.length));
                    },
                    arraybuffer: function (t) {
                      return d.nodebuffer.uint8array(t).buffer;
                    },
                    uint8array: function (t) {
                      return c(t, new Uint8Array(t.length));
                    },
                    nodebuffer: a,
                  }),
                  (n.transformTo = function (t, e) {
                    if ((e || (e = ""), !t)) return e;
                    n.checkSupport(t);
                    var i = n.getTypeOf(e);
                    return d[i][t](e);
                  }),
                  (n.getTypeOf = function (t) {
                    return "string" == typeof t
                      ? "string"
                      : "[object Array]" === Object.prototype.toString.call(t)
                      ? "array"
                      : i.nodebuffer && o.test(t)
                      ? "nodebuffer"
                      : i.uint8array && t instanceof Uint8Array
                      ? "uint8array"
                      : i.arraybuffer && t instanceof ArrayBuffer
                      ? "arraybuffer"
                      : void 0;
                  }),
                  (n.checkSupport = function (t) {
                    if (!i[t.toLowerCase()])
                      throw new Error(t + " is not supported by this browser");
                  }),
                  (n.MAX_VALUE_16BITS = 65535),
                  (n.MAX_VALUE_32BITS = -1),
                  (n.pretty = function (t) {
                    var e,
                      n,
                      i = "";
                    for (n = 0; n < (t || "").length; n++)
                      i +=
                        "\\x" +
                        ((e = t.charCodeAt(n)) < 16 ? "0" : "") +
                        e.toString(16).toUpperCase();
                    return i;
                  }),
                  (n.findCompression = function (t) {
                    for (var e in r)
                      if (r.hasOwnProperty(e) && r[e].magic === t) return r[e];
                    return null;
                  }),
                  (n.isRegExp = function (t) {
                    return (
                      "[object RegExp]" === Object.prototype.toString.call(t)
                    );
                  });
              },
              { "./compressions": 3, "./nodeBuffer": 11, "./support": 17 },
            ],
            22: [
              function (t, e, n) {
                "use strict";
                var i = t("./stringReader"),
                  r = t("./nodeBufferReader"),
                  o = t("./uint8ArrayReader"),
                  a = t("./utils"),
                  s = t("./signature"),
                  l = t("./zipEntry"),
                  c = t("./support"),
                  d = t("./object");
                function u(t, e) {
                  (this.files = []), (this.loadOptions = e), t && this.load(t);
                }
                (u.prototype = {
                  checkSignature: function (t) {
                    var e = this.reader.readString(4);
                    if (e !== t)
                      throw new Error(
                        "Corrupted zip or bug : unexpected signature (" +
                          a.pretty(e) +
                          ", expected " +
                          a.pretty(t) +
                          ")"
                      );
                  },
                  readBlockEndOfCentral: function () {
                    (this.diskNumber = this.reader.readInt(2)),
                      (this.diskWithCentralDirStart = this.reader.readInt(2)),
                      (this.centralDirRecordsOnThisDisk =
                        this.reader.readInt(2)),
                      (this.centralDirRecords = this.reader.readInt(2)),
                      (this.centralDirSize = this.reader.readInt(4)),
                      (this.centralDirOffset = this.reader.readInt(4)),
                      (this.zipCommentLength = this.reader.readInt(2)),
                      (this.zipComment = this.reader.readString(
                        this.zipCommentLength
                      )),
                      (this.zipComment = d.utf8decode(this.zipComment));
                  },
                  readBlockZip64EndOfCentral: function () {
                    (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                      (this.versionMadeBy = this.reader.readString(2)),
                      (this.versionNeeded = this.reader.readInt(2)),
                      (this.diskNumber = this.reader.readInt(4)),
                      (this.diskWithCentralDirStart = this.reader.readInt(4)),
                      (this.centralDirRecordsOnThisDisk =
                        this.reader.readInt(8)),
                      (this.centralDirRecords = this.reader.readInt(8)),
                      (this.centralDirSize = this.reader.readInt(8)),
                      (this.centralDirOffset = this.reader.readInt(8)),
                      (this.zip64ExtensibleData = {});
                    for (
                      var t, e, n, i = this.zip64EndOfCentralSize - 44;
                      0 < i;

                    )
                      (t = this.reader.readInt(2)),
                        (e = this.reader.readInt(4)),
                        (n = this.reader.readString(e)),
                        (this.zip64ExtensibleData[t] = {
                          id: t,
                          length: e,
                          value: n,
                        });
                  },
                  readBlockZip64EndOfCentralLocator: function () {
                    if (
                      ((this.diskWithZip64CentralDirStart =
                        this.reader.readInt(4)),
                      (this.relativeOffsetEndOfZip64CentralDir =
                        this.reader.readInt(8)),
                      (this.disksCount = this.reader.readInt(4)),
                      this.disksCount > 1)
                    )
                      throw new Error("Multi-volumes zip are not supported");
                  },
                  readLocalFiles: function () {
                    var t, e;
                    for (t = 0; t < this.files.length; t++)
                      (e = this.files[t]),
                        this.reader.setIndex(e.localHeaderOffset),
                        this.checkSignature(s.LOCAL_FILE_HEADER),
                        e.readLocalPart(this.reader),
                        e.handleUTF8();
                  },
                  readCentralDir: function () {
                    var t;
                    for (
                      this.reader.setIndex(this.centralDirOffset);
                      this.reader.readString(4) === s.CENTRAL_FILE_HEADER;

                    )
                      (t = new l(
                        { zip64: this.zip64 },
                        this.loadOptions
                      )).readCentralPart(this.reader),
                        this.files.push(t);
                  },
                  readEndOfCentral: function () {
                    var t = this.reader.lastIndexOfSignature(
                      s.CENTRAL_DIRECTORY_END
                    );
                    if (-1 === t)
                      throw new Error(
                        "Corrupted zip : can't find end of central directory"
                      );
                    if (
                      (this.reader.setIndex(t),
                      this.checkSignature(s.CENTRAL_DIRECTORY_END),
                      this.readBlockEndOfCentral(),
                      this.diskNumber === a.MAX_VALUE_16BITS ||
                        this.diskWithCentralDirStart === a.MAX_VALUE_16BITS ||
                        this.centralDirRecordsOnThisDisk ===
                          a.MAX_VALUE_16BITS ||
                        this.centralDirRecords === a.MAX_VALUE_16BITS ||
                        this.centralDirSize === a.MAX_VALUE_32BITS ||
                        this.centralDirOffset === a.MAX_VALUE_32BITS)
                    ) {
                      if (
                        ((this.zip64 = !0),
                        -1 ===
                          (t = this.reader.lastIndexOfSignature(
                            s.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )))
                      )
                        throw new Error(
                          "Corrupted zip : can't find the ZIP64 end of central directory locator"
                        );
                      this.reader.setIndex(t),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                        this.readBlockZip64EndOfCentralLocator(),
                        this.reader.setIndex(
                          this.relativeOffsetEndOfZip64CentralDir
                        ),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                        this.readBlockZip64EndOfCentral();
                    }
                  },
                  prepareReader: function (t) {
                    var e = a.getTypeOf(t);
                    "string" !== e || c.uint8array
                      ? (this.reader =
                          "nodebuffer" === e
                            ? new r(t)
                            : new o(a.transformTo("uint8array", t)))
                      : (this.reader = new i(
                          t,
                          this.loadOptions.optimizedBinaryString
                        ));
                  },
                  load: function (t) {
                    this.prepareReader(t),
                      this.readEndOfCentral(),
                      this.readCentralDir(),
                      this.readLocalFiles();
                  },
                }),
                  (e.exports = u);
              },
              {
                "./nodeBufferReader": 12,
                "./object": 13,
                "./signature": 14,
                "./stringReader": 15,
                "./support": 17,
                "./uint8ArrayReader": 18,
                "./utils": 21,
                "./zipEntry": 23,
              },
            ],
            23: [
              function (t, e, n) {
                "use strict";
                var i = t("./stringReader"),
                  r = t("./utils"),
                  o = t("./compressedObject"),
                  a = t("./object");
                function s(t, e) {
                  (this.options = t), (this.loadOptions = e);
                }
                (s.prototype = {
                  isEncrypted: function () {
                    return 1 == (1 & this.bitFlag);
                  },
                  useUTF8: function () {
                    return 2048 == (2048 & this.bitFlag);
                  },
                  prepareCompressedContent: function (t, e, n) {
                    return function () {
                      var i = t.index;
                      t.setIndex(e);
                      var r = t.readData(n);
                      return t.setIndex(i), r;
                    };
                  },
                  prepareContent: function (t, e, n, i, o) {
                    return function () {
                      var t = r.transformTo(
                          i.uncompressInputType,
                          this.getCompressedContent()
                        ),
                        e = i.uncompress(t);
                      if (e.length !== o)
                        throw new Error(
                          "Bug : uncompressed data size mismatch"
                        );
                      return e;
                    };
                  },
                  readLocalPart: function (t) {
                    var e, n;
                    if (
                      (t.skip(22),
                      (this.fileNameLength = t.readInt(2)),
                      (n = t.readInt(2)),
                      (this.fileName = t.readString(this.fileNameLength)),
                      t.skip(n),
                      -1 == this.compressedSize || -1 == this.uncompressedSize)
                    )
                      throw new Error(
                        "Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)"
                      );
                    if (
                      null === (e = r.findCompression(this.compressionMethod))
                    )
                      throw new Error(
                        "Corrupted zip : compression " +
                          r.pretty(this.compressionMethod) +
                          " unknown (inner file : " +
                          this.fileName +
                          ")"
                      );
                    if (
                      ((this.decompressed = new o()),
                      (this.decompressed.compressedSize = this.compressedSize),
                      (this.decompressed.uncompressedSize =
                        this.uncompressedSize),
                      (this.decompressed.crc32 = this.crc32),
                      (this.decompressed.compressionMethod =
                        this.compressionMethod),
                      (this.decompressed.getCompressedContent =
                        this.prepareCompressedContent(
                          t,
                          t.index,
                          this.compressedSize,
                          e
                        )),
                      (this.decompressed.getContent = this.prepareContent(
                        t,
                        t.index,
                        this.compressedSize,
                        e,
                        this.uncompressedSize
                      )),
                      this.loadOptions.checkCRC32 &&
                        ((this.decompressed = r.transformTo(
                          "string",
                          this.decompressed.getContent()
                        )),
                        a.crc32(this.decompressed) !== this.crc32))
                    )
                      throw new Error("Corrupted zip : CRC32 mismatch");
                  },
                  readCentralPart: function (t) {
                    if (
                      ((this.versionMadeBy = t.readString(2)),
                      (this.versionNeeded = t.readInt(2)),
                      (this.bitFlag = t.readInt(2)),
                      (this.compressionMethod = t.readString(2)),
                      (this.date = t.readDate()),
                      (this.crc32 = t.readInt(4)),
                      (this.compressedSize = t.readInt(4)),
                      (this.uncompressedSize = t.readInt(4)),
                      (this.fileNameLength = t.readInt(2)),
                      (this.extraFieldsLength = t.readInt(2)),
                      (this.fileCommentLength = t.readInt(2)),
                      (this.diskNumberStart = t.readInt(2)),
                      (this.internalFileAttributes = t.readInt(2)),
                      (this.externalFileAttributes = t.readInt(4)),
                      (this.localHeaderOffset = t.readInt(4)),
                      this.isEncrypted())
                    )
                      throw new Error("Encrypted zip are not supported");
                    (this.fileName = t.readString(this.fileNameLength)),
                      this.readExtraFields(t),
                      this.parseZIP64ExtraField(t),
                      (this.fileComment = t.readString(this.fileCommentLength)),
                      (this.dir = !!(16 & this.externalFileAttributes));
                  },
                  parseZIP64ExtraField: function (t) {
                    if (this.extraFields[1]) {
                      var e = new i(this.extraFields[1].value);
                      this.uncompressedSize === r.MAX_VALUE_32BITS &&
                        (this.uncompressedSize = e.readInt(8)),
                        this.compressedSize === r.MAX_VALUE_32BITS &&
                          (this.compressedSize = e.readInt(8)),
                        this.localHeaderOffset === r.MAX_VALUE_32BITS &&
                          (this.localHeaderOffset = e.readInt(8)),
                        this.diskNumberStart === r.MAX_VALUE_32BITS &&
                          (this.diskNumberStart = e.readInt(4));
                    }
                  },
                  readExtraFields: function (t) {
                    var e,
                      n,
                      i,
                      r = t.index;
                    for (
                      this.extraFields = this.extraFields || {};
                      t.index < r + this.extraFieldsLength;

                    )
                      (e = t.readInt(2)),
                        (n = t.readInt(2)),
                        (i = t.readString(n)),
                        (this.extraFields[e] = { id: e, length: n, value: i });
                  },
                  handleUTF8: function () {
                    if (this.useUTF8())
                      (this.fileName = a.utf8decode(this.fileName)),
                        (this.fileComment = a.utf8decode(this.fileComment));
                    else {
                      var t = this.findExtraFieldUnicodePath();
                      null !== t && (this.fileName = t);
                      var e = this.findExtraFieldUnicodeComment();
                      null !== e && (this.fileComment = e);
                    }
                  },
                  findExtraFieldUnicodePath: function () {
                    var t = this.extraFields[28789];
                    if (t) {
                      var e = new i(t.value);
                      return 1 !== e.readInt(1) ||
                        a.crc32(this.fileName) !== e.readInt(4)
                        ? null
                        : a.utf8decode(e.readString(t.length - 5));
                    }
                    return null;
                  },
                  findExtraFieldUnicodeComment: function () {
                    var t = this.extraFields[25461];
                    if (t) {
                      var e = new i(t.value);
                      return 1 !== e.readInt(1) ||
                        a.crc32(this.fileComment) !== e.readInt(4)
                        ? null
                        : a.utf8decode(e.readString(t.length - 5));
                    }
                    return null;
                  },
                }),
                  (e.exports = s);
              },
              {
                "./compressedObject": 2,
                "./object": 13,
                "./stringReader": 15,
                "./utils": 21,
              },
            ],
            24: [
              function (t, e, n) {
                "use strict";
                var i = {};
                (0, t("./lib/utils/common").assign)(
                  i,
                  t("./lib/deflate"),
                  t("./lib/inflate"),
                  t("./lib/zlib/constants")
                ),
                  (e.exports = i);
              },
              {
                "./lib/deflate": 25,
                "./lib/inflate": 26,
                "./lib/utils/common": 27,
                "./lib/zlib/constants": 30,
              },
            ],
            25: [
              function (t, e, n) {
                "use strict";
                var i = t("./zlib/deflate.js"),
                  r = t("./utils/common"),
                  o = t("./utils/strings"),
                  a = t("./zlib/messages"),
                  s = t("./zlib/zstream"),
                  l = function (t) {
                    this.options = r.assign(
                      {
                        level: -1,
                        method: 8,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: 0,
                        to: "",
                      },
                      t || {}
                    );
                    var e = this.options;
                    e.raw && e.windowBits > 0
                      ? (e.windowBits = -e.windowBits)
                      : e.gzip &&
                        e.windowBits > 0 &&
                        e.windowBits < 16 &&
                        (e.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new s()),
                      (this.strm.avail_out = 0);
                    var n = i.deflateInit2(
                      this.strm,
                      e.level,
                      e.method,
                      e.windowBits,
                      e.memLevel,
                      e.strategy
                    );
                    if (0 !== n) throw new Error(a[n]);
                    e.header && i.deflateSetHeader(this.strm, e.header);
                  };
                function c(t, e) {
                  var n = new l(e);
                  if ((n.push(t, !0), n.err)) throw n.msg;
                  return n.result;
                }
                (l.prototype.push = function (t, e) {
                  var n,
                    a,
                    s = this.strm,
                    l = this.options.chunkSize;
                  if (this.ended) return !1;
                  (a = e === ~~e ? e : !0 === e ? 4 : 0),
                    (s.input = "string" == typeof t ? o.string2buf(t) : t),
                    (s.next_in = 0),
                    (s.avail_in = s.input.length);
                  do {
                    if (
                      (0 === s.avail_out &&
                        ((s.output = new r.Buf8(l)),
                        (s.next_out = 0),
                        (s.avail_out = l)),
                      1 !== (n = i.deflate(s, a)) && 0 !== n)
                    )
                      return this.onEnd(n), (this.ended = !0), !1;
                    (0 === s.avail_out || (0 === s.avail_in && 4 === a)) &&
                      ("string" === this.options.to
                        ? this.onData(
                            o.buf2binstring(r.shrinkBuf(s.output, s.next_out))
                          )
                        : this.onData(r.shrinkBuf(s.output, s.next_out)));
                  } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
                  return (
                    4 !== a ||
                    ((n = i.deflateEnd(this.strm)),
                    this.onEnd(n),
                    (this.ended = !0),
                    0 === n)
                  );
                }),
                  (l.prototype.onData = function (t) {
                    this.chunks.push(t);
                  }),
                  (l.prototype.onEnd = function (t) {
                    0 === t &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = r.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = t),
                      (this.msg = this.strm.msg);
                  }),
                  (n.Deflate = l),
                  (n.deflate = c),
                  (n.deflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), c(t, e);
                  }),
                  (n.gzip = function (t, e) {
                    return ((e = e || {}).gzip = !0), c(t, e);
                  });
              },
              {
                "./utils/common": 27,
                "./utils/strings": 28,
                "./zlib/deflate.js": 32,
                "./zlib/messages": 37,
                "./zlib/zstream": 39,
              },
            ],
            26: [
              function (t, e, n) {
                "use strict";
                var i = t("./zlib/inflate.js"),
                  r = t("./utils/common"),
                  o = t("./utils/strings"),
                  a = t("./zlib/constants"),
                  s = t("./zlib/messages"),
                  l = t("./zlib/zstream"),
                  c = t("./zlib/gzheader"),
                  d = function (t) {
                    this.options = r.assign(
                      { chunkSize: 16384, windowBits: 0, to: "" },
                      t || {}
                    );
                    var e = this.options;
                    e.raw &&
                      e.windowBits >= 0 &&
                      e.windowBits < 16 &&
                      ((e.windowBits = -e.windowBits),
                      0 === e.windowBits && (e.windowBits = -15)),
                      !(e.windowBits >= 0 && e.windowBits < 16) ||
                        (t && t.windowBits) ||
                        (e.windowBits += 32),
                      e.windowBits > 15 &&
                        e.windowBits < 48 &&
                        0 == (15 & e.windowBits) &&
                        (e.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new l()),
                      (this.strm.avail_out = 0);
                    var n = i.inflateInit2(this.strm, e.windowBits);
                    if (n !== a.Z_OK) throw new Error(s[n]);
                    (this.header = new c()),
                      i.inflateGetHeader(this.strm, this.header);
                  };
                function u(t, e) {
                  var n = new d(e);
                  if ((n.push(t, !0), n.err)) throw n.msg;
                  return n.result;
                }
                (d.prototype.push = function (t, e) {
                  var n,
                    s,
                    l,
                    c,
                    d,
                    u = this.strm,
                    p = this.options.chunkSize;
                  if (this.ended) return !1;
                  (s = e === ~~e ? e : !0 === e ? a.Z_FINISH : a.Z_NO_FLUSH),
                    (u.input = "string" == typeof t ? o.binstring2buf(t) : t),
                    (u.next_in = 0),
                    (u.avail_in = u.input.length);
                  do {
                    if (
                      (0 === u.avail_out &&
                        ((u.output = new r.Buf8(p)),
                        (u.next_out = 0),
                        (u.avail_out = p)),
                      (n = i.inflate(u, a.Z_NO_FLUSH)) !== a.Z_STREAM_END &&
                        n !== a.Z_OK)
                    )
                      return this.onEnd(n), (this.ended = !0), !1;
                    u.next_out &&
                      (0 === u.avail_out ||
                        n === a.Z_STREAM_END ||
                        (0 === u.avail_in && s === a.Z_FINISH)) &&
                      ("string" === this.options.to
                        ? ((l = o.utf8border(u.output, u.next_out)),
                          (c = u.next_out - l),
                          (d = o.buf2string(u.output, l)),
                          (u.next_out = c),
                          (u.avail_out = p - c),
                          c && r.arraySet(u.output, u.output, l, c, 0),
                          this.onData(d))
                        : this.onData(r.shrinkBuf(u.output, u.next_out)));
                  } while (u.avail_in > 0 && n !== a.Z_STREAM_END);
                  return (
                    n === a.Z_STREAM_END && (s = a.Z_FINISH),
                    s !== a.Z_FINISH ||
                      ((n = i.inflateEnd(this.strm)),
                      this.onEnd(n),
                      (this.ended = !0),
                      n === a.Z_OK)
                  );
                }),
                  (d.prototype.onData = function (t) {
                    this.chunks.push(t);
                  }),
                  (d.prototype.onEnd = function (t) {
                    t === a.Z_OK &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = r.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = t),
                      (this.msg = this.strm.msg);
                  }),
                  (n.Inflate = d),
                  (n.inflate = u),
                  (n.inflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), u(t, e);
                  }),
                  (n.ungzip = u);
              },
              {
                "./utils/common": 27,
                "./utils/strings": 28,
                "./zlib/constants": 30,
                "./zlib/gzheader": 33,
                "./zlib/inflate.js": 35,
                "./zlib/messages": 37,
                "./zlib/zstream": 39,
              },
            ],
            27: [
              function (t, e, n) {
                "use strict";
                var i =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Int32Array;
                (n.assign = function (t) {
                  for (
                    var e = Array.prototype.slice.call(arguments, 1);
                    e.length;

                  ) {
                    var n = e.shift();
                    if (n) {
                      if ("object" != typeof n)
                        throw new TypeError(n + "must be non-object");
                      for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
                    }
                  }
                  return t;
                }),
                  (n.shrinkBuf = function (t, e) {
                    return t.length === e
                      ? t
                      : t.subarray
                      ? t.subarray(0, e)
                      : ((t.length = e), t);
                  });
                var r = {
                    arraySet: function (t, e, n, i, r) {
                      if (e.subarray && t.subarray)
                        t.set(e.subarray(n, n + i), r);
                      else for (var o = 0; o < i; o++) t[r + o] = e[n + o];
                    },
                    flattenChunks: function (t) {
                      var e, n, i, r, o, a;
                      for (i = 0, e = 0, n = t.length; e < n; e++)
                        i += t[e].length;
                      for (
                        a = new Uint8Array(i), r = 0, e = 0, n = t.length;
                        e < n;
                        e++
                      )
                        (o = t[e]), a.set(o, r), (r += o.length);
                      return a;
                    },
                  },
                  o = {
                    arraySet: function (t, e, n, i, r) {
                      for (var o = 0; o < i; o++) t[r + o] = e[n + o];
                    },
                    flattenChunks: function (t) {
                      return [].concat.apply([], t);
                    },
                  };
                (n.setTyped = function (t) {
                  t
                    ? ((n.Buf8 = Uint8Array),
                      (n.Buf16 = Uint16Array),
                      (n.Buf32 = Int32Array),
                      n.assign(n, r))
                    : ((n.Buf8 = Array),
                      (n.Buf16 = Array),
                      (n.Buf32 = Array),
                      n.assign(n, o));
                }),
                  n.setTyped(i);
              },
              {},
            ],
            28: [
              function (t, e, n) {
                "use strict";
                var i = t("./common"),
                  r = !0,
                  o = !0;
                try {
                  String.fromCharCode.apply(null, [0]);
                } catch (t) {
                  r = !1;
                }
                try {
                  String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (t) {
                  o = !1;
                }
                for (var a = new i.Buf8(256), s = 0; s < 256; s++)
                  a[s] =
                    s >= 252
                      ? 6
                      : s >= 248
                      ? 5
                      : s >= 240
                      ? 4
                      : s >= 224
                      ? 3
                      : s >= 192
                      ? 2
                      : 1;
                function l(t, e) {
                  if (e < 65537 && ((t.subarray && o) || (!t.subarray && r)))
                    return String.fromCharCode.apply(null, i.shrinkBuf(t, e));
                  for (var n = "", a = 0; a < e; a++)
                    n += String.fromCharCode(t[a]);
                  return n;
                }
                (a[254] = a[254] = 1),
                  (n.string2buf = function (t) {
                    var e,
                      n,
                      r,
                      o,
                      a,
                      s = t.length,
                      l = 0;
                    for (o = 0; o < s; o++)
                      55296 == (64512 & (n = t.charCodeAt(o))) &&
                        o + 1 < s &&
                        56320 == (64512 & (r = t.charCodeAt(o + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), o++),
                        (l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                    for (e = new i.Buf8(l), a = 0, o = 0; a < l; o++)
                      55296 == (64512 & (n = t.charCodeAt(o))) &&
                        o + 1 < s &&
                        56320 == (64512 & (r = t.charCodeAt(o + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), o++),
                        n < 128
                          ? (e[a++] = n)
                          : n < 2048
                          ? ((e[a++] = 192 | (n >>> 6)),
                            (e[a++] = 128 | (63 & n)))
                          : n < 65536
                          ? ((e[a++] = 224 | (n >>> 12)),
                            (e[a++] = 128 | ((n >>> 6) & 63)),
                            (e[a++] = 128 | (63 & n)))
                          : ((e[a++] = 240 | (n >>> 18)),
                            (e[a++] = 128 | ((n >>> 12) & 63)),
                            (e[a++] = 128 | ((n >>> 6) & 63)),
                            (e[a++] = 128 | (63 & n)));
                    return e;
                  }),
                  (n.buf2binstring = function (t) {
                    return l(t, t.length);
                  }),
                  (n.binstring2buf = function (t) {
                    for (
                      var e = new i.Buf8(t.length), n = 0, r = e.length;
                      n < r;
                      n++
                    )
                      e[n] = t.charCodeAt(n);
                    return e;
                  }),
                  (n.buf2string = function (t, e) {
                    var n,
                      i,
                      r,
                      o,
                      s = e || t.length,
                      c = new Array(2 * s);
                    for (i = 0, n = 0; n < s; )
                      if ((r = t[n++]) < 128) c[i++] = r;
                      else if ((o = a[r]) > 4) (c[i++] = 65533), (n += o - 1);
                      else {
                        for (
                          r &= 2 === o ? 31 : 3 === o ? 15 : 7;
                          o > 1 && n < s;

                        )
                          (r = (r << 6) | (63 & t[n++])), o--;
                        o > 1
                          ? (c[i++] = 65533)
                          : r < 65536
                          ? (c[i++] = r)
                          : ((r -= 65536),
                            (c[i++] = 55296 | ((r >> 10) & 1023)),
                            (c[i++] = 56320 | (1023 & r)));
                      }
                    return l(c, i);
                  }),
                  (n.utf8border = function (t, e) {
                    var n;
                    for (
                      (e = e || t.length) > t.length && (e = t.length),
                        n = e - 1;
                      n >= 0 && 128 == (192 & t[n]);

                    )
                      n--;
                    return n < 0 || 0 === n ? e : n + a[t[n]] > e ? n : e;
                  });
              },
              { "./common": 27 },
            ],
            29: [
              function (t, e, n) {
                "use strict";
                e.exports = function (t, e, n, i) {
                  for (
                    var r = (65535 & t) | 0,
                      o = ((t >>> 16) & 65535) | 0,
                      a = 0;
                    0 !== n;

                  ) {
                    n -= a = n > 2e3 ? 2e3 : n;
                    do {
                      o = (o + (r = (r + e[i++]) | 0)) | 0;
                    } while (--a);
                    (r %= 65521), (o %= 65521);
                  }
                  return r | (o << 16) | 0;
                };
              },
              {},
            ],
            30: [
              function (t, e, n) {
                e.exports = {
                  Z_NO_FLUSH: 0,
                  Z_PARTIAL_FLUSH: 1,
                  Z_SYNC_FLUSH: 2,
                  Z_FULL_FLUSH: 3,
                  Z_FINISH: 4,
                  Z_BLOCK: 5,
                  Z_TREES: 6,
                  Z_OK: 0,
                  Z_STREAM_END: 1,
                  Z_NEED_DICT: 2,
                  Z_ERRNO: -1,
                  Z_STREAM_ERROR: -2,
                  Z_DATA_ERROR: -3,
                  Z_BUF_ERROR: -5,
                  Z_NO_COMPRESSION: 0,
                  Z_BEST_SPEED: 1,
                  Z_BEST_COMPRESSION: 9,
                  Z_DEFAULT_COMPRESSION: -1,
                  Z_FILTERED: 1,
                  Z_HUFFMAN_ONLY: 2,
                  Z_RLE: 3,
                  Z_FIXED: 4,
                  Z_DEFAULT_STRATEGY: 0,
                  Z_BINARY: 0,
                  Z_TEXT: 1,
                  Z_UNKNOWN: 2,
                  Z_DEFLATED: 8,
                };
              },
              {},
            ],
            31: [
              function (t, e, n) {
                "use strict";
                var i = (function () {
                  for (var t, e = [], n = 0; n < 256; n++) {
                    t = n;
                    for (var i = 0; i < 8; i++)
                      t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                    e[n] = t;
                  }
                  return e;
                })();
                e.exports = function (t, e, n, r) {
                  var o = i,
                    a = r + n;
                  t ^= -1;
                  for (var s = r; s < a; s++)
                    t = (t >>> 8) ^ o[255 & (t ^ e[s])];
                  return -1 ^ t;
                };
              },
              {},
            ],
            32: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common"),
                  r = t("./trees"),
                  o = t("./adler32"),
                  a = t("./crc32"),
                  s = t("./messages");
                function l(t, e) {
                  return (t.msg = s[e]), e;
                }
                function c(t) {
                  return (t << 1) - (t > 4 ? 9 : 0);
                }
                function d(t) {
                  for (var e = t.length; --e >= 0; ) t[e] = 0;
                }
                function u(t) {
                  var e = t.state,
                    n = e.pending;
                  n > t.avail_out && (n = t.avail_out),
                    0 !== n &&
                      (i.arraySet(
                        t.output,
                        e.pending_buf,
                        e.pending_out,
                        n,
                        t.next_out
                      ),
                      (t.next_out += n),
                      (e.pending_out += n),
                      (t.total_out += n),
                      (t.avail_out -= n),
                      (e.pending -= n),
                      0 === e.pending && (e.pending_out = 0));
                }
                function p(t, e) {
                  r._tr_flush_block(
                    t,
                    t.block_start >= 0 ? t.block_start : -1,
                    t.strstart - t.block_start,
                    e
                  ),
                    (t.block_start = t.strstart),
                    u(t.strm);
                }
                function h(t, e) {
                  t.pending_buf[t.pending++] = e;
                }
                function f(t, e) {
                  (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                    (t.pending_buf[t.pending++] = 255 & e);
                }
                function b(t, e) {
                  var n,
                    i,
                    r = t.max_chain_length,
                    o = t.strstart,
                    a = t.prev_length,
                    s = t.nice_match,
                    l =
                      t.strstart > t.w_size - 262
                        ? t.strstart - (t.w_size - 262)
                        : 0,
                    c = t.window,
                    d = t.w_mask,
                    u = t.prev,
                    p = t.strstart + 258,
                    h = c[o + a - 1],
                    f = c[o + a];
                  t.prev_length >= t.good_match && (r >>= 2),
                    s > t.lookahead && (s = t.lookahead);
                  do {
                    if (
                      c[(n = e) + a] === f &&
                      c[n + a - 1] === h &&
                      c[n] === c[o] &&
                      c[++n] === c[o + 1]
                    ) {
                      (o += 2), n++;
                      do {} while (
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        c[++o] === c[++n] &&
                        o < p
                      );
                      if (((i = 258 - (p - o)), (o = p - 258), i > a)) {
                        if (((t.match_start = e), (a = i), i >= s)) break;
                        (h = c[o + a - 1]), (f = c[o + a]);
                      }
                    }
                  } while ((e = u[e & d]) > l && 0 != --r);
                  return a <= t.lookahead ? a : t.lookahead;
                }
                function m(t) {
                  var e,
                    n,
                    r,
                    s,
                    l,
                    c,
                    d,
                    u,
                    p,
                    h,
                    f = t.w_size;
                  do {
                    if (
                      ((s = t.window_size - t.lookahead - t.strstart),
                      t.strstart >= f + (f - 262))
                    ) {
                      i.arraySet(t.window, t.window, f, f, 0),
                        (t.match_start -= f),
                        (t.strstart -= f),
                        (t.block_start -= f),
                        (e = n = t.hash_size);
                      do {
                        (r = t.head[--e]), (t.head[e] = r >= f ? r - f : 0);
                      } while (--n);
                      e = n = f;
                      do {
                        (r = t.prev[--e]), (t.prev[e] = r >= f ? r - f : 0);
                      } while (--n);
                      s += f;
                    }
                    if (0 === t.strm.avail_in) break;
                    if (
                      ((c = t.strm),
                      (d = t.window),
                      (u = t.strstart + t.lookahead),
                      (p = s),
                      (h = void 0),
                      (h = c.avail_in) > p && (h = p),
                      (n =
                        0 === h
                          ? 0
                          : ((c.avail_in -= h),
                            i.arraySet(d, c.input, c.next_in, h, u),
                            1 === c.state.wrap
                              ? (c.adler = o(c.adler, d, h, u))
                              : 2 === c.state.wrap &&
                                (c.adler = a(c.adler, d, h, u)),
                            (c.next_in += h),
                            (c.total_in += h),
                            h)),
                      (t.lookahead += n),
                      t.lookahead + t.insert >= 3)
                    )
                      for (
                        l = t.strstart - t.insert,
                          t.ins_h = t.window[l],
                          t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[l + 1]) &
                            t.hash_mask;
                        t.insert &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^ t.window[l + 3 - 1]) &
                          t.hash_mask),
                        (t.prev[l & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = l),
                        l++,
                        t.insert--,
                        !(t.lookahead + t.insert < 3));

                      );
                  } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
                }
                function g(t, e) {
                  for (var n, i; ; ) {
                    if (t.lookahead < 262) {
                      if ((m(t), t.lookahead < 262 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      t.lookahead >= 3 &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + 3 - 1]) &
                          t.hash_mask),
                        (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart)),
                      0 !== n &&
                        t.strstart - n <= t.w_size - 262 &&
                        (t.match_length = b(t, n)),
                      t.match_length >= 3)
                    )
                      if (
                        ((i = r._tr_tally(
                          t,
                          t.strstart - t.match_start,
                          t.match_length - 3
                        )),
                        (t.lookahead -= t.match_length),
                        t.match_length <= t.max_lazy_match && t.lookahead >= 3)
                      ) {
                        t.match_length--;
                        do {
                          t.strstart++,
                            (t.ins_h =
                              ((t.ins_h << t.hash_shift) ^
                                t.window[t.strstart + 3 - 1]) &
                              t.hash_mask),
                            (n = t.prev[t.strstart & t.w_mask] =
                              t.head[t.ins_h]),
                            (t.head[t.ins_h] = t.strstart);
                        } while (0 != --t.match_length);
                        t.strstart++;
                      } else
                        (t.strstart += t.match_length),
                          (t.match_length = 0),
                          (t.ins_h = t.window[t.strstart]),
                          (t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 1]) &
                            t.hash_mask);
                    else
                      (i = r._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++;
                    if (i && (p(t, !1), 0 === t.strm.avail_out)) return 1;
                  }
                  return (
                    (t.insert = t.strstart < 2 ? t.strstart : 2),
                    4 === e
                      ? (p(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (p(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                }
                function v(t, e) {
                  for (var n, i, o; ; ) {
                    if (t.lookahead < 262) {
                      if ((m(t), t.lookahead < 262 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      t.lookahead >= 3 &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + 3 - 1]) &
                          t.hash_mask),
                        (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart)),
                      (t.prev_length = t.match_length),
                      (t.prev_match = t.match_start),
                      (t.match_length = 2),
                      0 !== n &&
                        t.prev_length < t.max_lazy_match &&
                        t.strstart - n <= t.w_size - 262 &&
                        ((t.match_length = b(t, n)),
                        t.match_length <= 5 &&
                          (1 === t.strategy ||
                            (3 === t.match_length &&
                              t.strstart - t.match_start > 4096)) &&
                          (t.match_length = 2)),
                      t.prev_length >= 3 && t.match_length <= t.prev_length)
                    ) {
                      (o = t.strstart + t.lookahead - 3),
                        (i = r._tr_tally(
                          t,
                          t.strstart - 1 - t.prev_match,
                          t.prev_length - 3
                        )),
                        (t.lookahead -= t.prev_length - 1),
                        (t.prev_length -= 2);
                      do {
                        ++t.strstart <= o &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 3 - 1]) &
                            t.hash_mask),
                          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart));
                      } while (0 != --t.prev_length);
                      if (
                        ((t.match_available = 0),
                        (t.match_length = 2),
                        t.strstart++,
                        i && (p(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    } else if (t.match_available) {
                      if (
                        ((i = r._tr_tally(t, 0, t.window[t.strstart - 1])) &&
                          p(t, !1),
                        t.strstart++,
                        t.lookahead--,
                        0 === t.strm.avail_out)
                      )
                        return 1;
                    } else (t.match_available = 1), t.strstart++, t.lookahead--;
                  }
                  return (
                    t.match_available &&
                      ((i = r._tr_tally(t, 0, t.window[t.strstart - 1])),
                      (t.match_available = 0)),
                    (t.insert = t.strstart < 2 ? t.strstart : 2),
                    4 === e
                      ? (p(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (p(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                }
                var _,
                  y = function (t, e, n, i, r) {
                    (this.good_length = t),
                      (this.max_lazy = e),
                      (this.nice_length = n),
                      (this.max_chain = i),
                      (this.func = r);
                  };
                function M() {
                  (this.strm = null),
                    (this.status = 0),
                    (this.pending_buf = null),
                    (this.pending_buf_size = 0),
                    (this.pending_out = 0),
                    (this.pending = 0),
                    (this.wrap = 0),
                    (this.gzhead = null),
                    (this.gzindex = 0),
                    (this.method = 8),
                    (this.last_flush = -1),
                    (this.w_size = 0),
                    (this.w_bits = 0),
                    (this.w_mask = 0),
                    (this.window = null),
                    (this.window_size = 0),
                    (this.prev = null),
                    (this.head = null),
                    (this.ins_h = 0),
                    (this.hash_size = 0),
                    (this.hash_bits = 0),
                    (this.hash_mask = 0),
                    (this.hash_shift = 0),
                    (this.block_start = 0),
                    (this.match_length = 0),
                    (this.prev_match = 0),
                    (this.match_available = 0),
                    (this.strstart = 0),
                    (this.match_start = 0),
                    (this.lookahead = 0),
                    (this.prev_length = 0),
                    (this.max_chain_length = 0),
                    (this.max_lazy_match = 0),
                    (this.level = 0),
                    (this.strategy = 0),
                    (this.good_match = 0),
                    (this.nice_match = 0),
                    (this.dyn_ltree = new i.Buf16(1146)),
                    (this.dyn_dtree = new i.Buf16(122)),
                    (this.bl_tree = new i.Buf16(78)),
                    d(this.dyn_ltree),
                    d(this.dyn_dtree),
                    d(this.bl_tree),
                    (this.l_desc = null),
                    (this.d_desc = null),
                    (this.bl_desc = null),
                    (this.bl_count = new i.Buf16(16)),
                    (this.heap = new i.Buf16(573)),
                    d(this.heap),
                    (this.heap_len = 0),
                    (this.heap_max = 0),
                    (this.depth = new i.Buf16(573)),
                    d(this.depth),
                    (this.l_buf = 0),
                    (this.lit_bufsize = 0),
                    (this.last_lit = 0),
                    (this.d_buf = 0),
                    (this.opt_len = 0),
                    (this.static_len = 0),
                    (this.matches = 0),
                    (this.insert = 0),
                    (this.bi_buf = 0),
                    (this.bi_valid = 0);
                }
                function O(t) {
                  var e;
                  return t && t.state
                    ? ((t.total_in = t.total_out = 0),
                      (t.data_type = 2),
                      ((e = t.state).pending = 0),
                      (e.pending_out = 0),
                      e.wrap < 0 && (e.wrap = -e.wrap),
                      (e.status = e.wrap ? 42 : 113),
                      (t.adler = 2 === e.wrap ? 0 : 1),
                      (e.last_flush = 0),
                      r._tr_init(e),
                      0)
                    : l(t, -2);
                }
                function w(t) {
                  var e,
                    n = O(t);
                  return (
                    0 === n &&
                      (((e = t.state).window_size = 2 * e.w_size),
                      d(e.head),
                      (e.max_lazy_match = _[e.level].max_lazy),
                      (e.good_match = _[e.level].good_length),
                      (e.nice_match = _[e.level].nice_length),
                      (e.max_chain_length = _[e.level].max_chain),
                      (e.strstart = 0),
                      (e.block_start = 0),
                      (e.lookahead = 0),
                      (e.insert = 0),
                      (e.match_length = e.prev_length = 2),
                      (e.match_available = 0),
                      (e.ins_h = 0)),
                    n
                  );
                }
                function A(t, e, n, r, o, a) {
                  if (!t) return -2;
                  var s = 1;
                  if (
                    (-1 === e && (e = 6),
                    r < 0
                      ? ((s = 0), (r = -r))
                      : r > 15 && ((s = 2), (r -= 16)),
                    o < 1 ||
                      o > 9 ||
                      8 !== n ||
                      r < 8 ||
                      r > 15 ||
                      e < 0 ||
                      e > 9 ||
                      a < 0 ||
                      a > 4)
                  )
                    return l(t, -2);
                  8 === r && (r = 9);
                  var c = new M();
                  return (
                    (t.state = c),
                    (c.strm = t),
                    (c.wrap = s),
                    (c.gzhead = null),
                    (c.w_bits = r),
                    (c.w_size = 1 << c.w_bits),
                    (c.w_mask = c.w_size - 1),
                    (c.hash_bits = o + 7),
                    (c.hash_size = 1 << c.hash_bits),
                    (c.hash_mask = c.hash_size - 1),
                    (c.hash_shift = ~~((c.hash_bits + 3 - 1) / 3)),
                    (c.window = new i.Buf8(2 * c.w_size)),
                    (c.head = new i.Buf16(c.hash_size)),
                    (c.prev = new i.Buf16(c.w_size)),
                    (c.lit_bufsize = 1 << (o + 6)),
                    (c.pending_buf_size = 4 * c.lit_bufsize),
                    (c.pending_buf = new i.Buf8(c.pending_buf_size)),
                    (c.d_buf = c.lit_bufsize >> 1),
                    (c.l_buf = 3 * c.lit_bufsize),
                    (c.level = e),
                    (c.strategy = a),
                    (c.method = n),
                    w(t)
                  );
                }
                (_ = [
                  new y(0, 0, 0, 0, function (t, e) {
                    var n = 65535;
                    for (
                      n > t.pending_buf_size - 5 &&
                      (n = t.pending_buf_size - 5);
                      ;

                    ) {
                      if (t.lookahead <= 1) {
                        if ((m(t), 0 === t.lookahead && 0 === e)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      (t.strstart += t.lookahead), (t.lookahead = 0);
                      var i = t.block_start + n;
                      if (
                        (0 === t.strstart || t.strstart >= i) &&
                        ((t.lookahead = t.strstart - i),
                        (t.strstart = i),
                        p(t, !1),
                        0 === t.strm.avail_out)
                      )
                        return 1;
                      if (
                        t.strstart - t.block_start >= t.w_size - 262 &&
                        (p(t, !1), 0 === t.strm.avail_out)
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      4 === e
                        ? (p(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : (t.strstart > t.block_start &&
                            (p(t, !1), t.strm.avail_out),
                          1)
                    );
                  }),
                  new y(4, 4, 8, 4, g),
                  new y(4, 5, 16, 8, g),
                  new y(4, 6, 32, 32, g),
                  new y(4, 4, 16, 16, v),
                  new y(8, 16, 32, 32, v),
                  new y(8, 16, 128, 128, v),
                  new y(8, 32, 128, 256, v),
                  new y(32, 128, 258, 1024, v),
                  new y(32, 258, 258, 4096, v),
                ]),
                  (n.deflateInit = function (t, e) {
                    return A(t, e, 8, 15, 8, 0);
                  }),
                  (n.deflateInit2 = A),
                  (n.deflateReset = w),
                  (n.deflateResetKeep = O),
                  (n.deflateSetHeader = function (t, e) {
                    return t && t.state
                      ? 2 !== t.state.wrap
                        ? -2
                        : ((t.state.gzhead = e), 0)
                      : -2;
                  }),
                  (n.deflate = function (t, e) {
                    var n, i, o, s;
                    if (!t || !t.state || e > 5 || e < 0)
                      return t ? l(t, -2) : -2;
                    if (
                      ((i = t.state),
                      !t.output ||
                        (!t.input && 0 !== t.avail_in) ||
                        (666 === i.status && 4 !== e))
                    )
                      return l(t, 0 === t.avail_out ? -5 : -2);
                    if (
                      ((i.strm = t),
                      (n = i.last_flush),
                      (i.last_flush = e),
                      42 === i.status)
                    )
                      if (2 === i.wrap)
                        (t.adler = 0),
                          h(i, 31),
                          h(i, 139),
                          h(i, 8),
                          i.gzhead
                            ? (h(
                                i,
                                (i.gzhead.text ? 1 : 0) +
                                  (i.gzhead.hcrc ? 2 : 0) +
                                  (i.gzhead.extra ? 4 : 0) +
                                  (i.gzhead.name ? 8 : 0) +
                                  (i.gzhead.comment ? 16 : 0)
                              ),
                              h(i, 255 & i.gzhead.time),
                              h(i, (i.gzhead.time >> 8) & 255),
                              h(i, (i.gzhead.time >> 16) & 255),
                              h(i, (i.gzhead.time >> 24) & 255),
                              h(
                                i,
                                9 === i.level
                                  ? 2
                                  : i.strategy >= 2 || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              h(i, 255 & i.gzhead.os),
                              i.gzhead.extra &&
                                i.gzhead.extra.length &&
                                (h(i, 255 & i.gzhead.extra.length),
                                h(i, (i.gzhead.extra.length >> 8) & 255)),
                              i.gzhead.hcrc &&
                                (t.adler = a(
                                  t.adler,
                                  i.pending_buf,
                                  i.pending,
                                  0
                                )),
                              (i.gzindex = 0),
                              (i.status = 69))
                            : (h(i, 0),
                              h(i, 0),
                              h(i, 0),
                              h(i, 0),
                              h(i, 0),
                              h(
                                i,
                                9 === i.level
                                  ? 2
                                  : i.strategy >= 2 || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              h(i, 3),
                              (i.status = 113));
                      else {
                        var b = (8 + ((i.w_bits - 8) << 4)) << 8;
                        (b |=
                          (i.strategy >= 2 || i.level < 2
                            ? 0
                            : i.level < 6
                            ? 1
                            : 6 === i.level
                            ? 2
                            : 3) << 6),
                          0 !== i.strstart && (b |= 32),
                          (b += 31 - (b % 31)),
                          (i.status = 113),
                          f(i, b),
                          0 !== i.strstart &&
                            (f(i, t.adler >>> 16), f(i, 65535 & t.adler)),
                          (t.adler = 1);
                      }
                    if (69 === i.status)
                      if (i.gzhead.extra) {
                        for (
                          o = i.pending;
                          i.gzindex < (65535 & i.gzhead.extra.length) &&
                          (i.pending !== i.pending_buf_size ||
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (t.adler = a(
                                t.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            u(t),
                            (o = i.pending),
                            i.pending !== i.pending_buf_size));

                        )
                          h(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (t.adler = a(
                            t.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          i.gzindex === i.gzhead.extra.length &&
                            ((i.gzindex = 0), (i.status = 73));
                      } else i.status = 73;
                    if (73 === i.status)
                      if (i.gzhead.name) {
                        o = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (t.adler = a(
                                t.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            u(t),
                            (o = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            s = 1;
                            break;
                          }
                          (s =
                            i.gzindex < i.gzhead.name.length
                              ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                              : 0),
                            h(i, s);
                        } while (0 !== s);
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (t.adler = a(
                            t.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          0 === s && ((i.gzindex = 0), (i.status = 91));
                      } else i.status = 91;
                    if (91 === i.status)
                      if (i.gzhead.comment) {
                        o = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (t.adler = a(
                                t.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            u(t),
                            (o = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            s = 1;
                            break;
                          }
                          (s =
                            i.gzindex < i.gzhead.comment.length
                              ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                              : 0),
                            h(i, s);
                        } while (0 !== s);
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (t.adler = a(
                            t.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          0 === s && (i.status = 103);
                      } else i.status = 103;
                    if (
                      (103 === i.status &&
                        (i.gzhead.hcrc
                          ? (i.pending + 2 > i.pending_buf_size && u(t),
                            i.pending + 2 <= i.pending_buf_size &&
                              (h(i, 255 & t.adler),
                              h(i, (t.adler >> 8) & 255),
                              (t.adler = 0),
                              (i.status = 113)))
                          : (i.status = 113)),
                      0 !== i.pending)
                    ) {
                      if ((u(t), 0 === t.avail_out))
                        return (i.last_flush = -1), 0;
                    } else if (0 === t.avail_in && c(e) <= c(n) && 4 !== e)
                      return l(t, -5);
                    if (666 === i.status && 0 !== t.avail_in) return l(t, -5);
                    if (
                      0 !== t.avail_in ||
                      0 !== i.lookahead ||
                      (0 !== e && 666 !== i.status)
                    ) {
                      var g =
                        2 === i.strategy
                          ? (function (t, e) {
                              for (var n; ; ) {
                                if (
                                  0 === t.lookahead &&
                                  (m(t), 0 === t.lookahead)
                                ) {
                                  if (0 === e) return 1;
                                  break;
                                }
                                if (
                                  ((t.match_length = 0),
                                  (n = r._tr_tally(t, 0, t.window[t.strstart])),
                                  t.lookahead--,
                                  t.strstart++,
                                  n && (p(t, !1), 0 === t.strm.avail_out))
                                )
                                  return 1;
                              }
                              return (
                                (t.insert = 0),
                                4 === e
                                  ? (p(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                  : t.last_lit &&
                                    (p(t, !1), 0 === t.strm.avail_out)
                                  ? 1
                                  : 2
                              );
                            })(i, e)
                          : 3 === i.strategy
                          ? (function (t, e) {
                              for (var n, i, o, a, s = t.window; ; ) {
                                if (t.lookahead <= 258) {
                                  if ((m(t), t.lookahead <= 258 && 0 === e))
                                    return 1;
                                  if (0 === t.lookahead) break;
                                }
                                if (
                                  ((t.match_length = 0),
                                  t.lookahead >= 3 &&
                                    t.strstart > 0 &&
                                    (i = s[(o = t.strstart - 1)]) === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o])
                                ) {
                                  a = t.strstart + 258;
                                  do {} while (
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    i === s[++o] &&
                                    o < a
                                  );
                                  (t.match_length = 258 - (a - o)),
                                    t.match_length > t.lookahead &&
                                      (t.match_length = t.lookahead);
                                }
                                if (
                                  (t.match_length >= 3
                                    ? ((n = r._tr_tally(
                                        t,
                                        1,
                                        t.match_length - 3
                                      )),
                                      (t.lookahead -= t.match_length),
                                      (t.strstart += t.match_length),
                                      (t.match_length = 0))
                                    : ((n = r._tr_tally(
                                        t,
                                        0,
                                        t.window[t.strstart]
                                      )),
                                      t.lookahead--,
                                      t.strstart++),
                                  n && (p(t, !1), 0 === t.strm.avail_out))
                                )
                                  return 1;
                              }
                              return (
                                (t.insert = 0),
                                4 === e
                                  ? (p(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                  : t.last_lit &&
                                    (p(t, !1), 0 === t.strm.avail_out)
                                  ? 1
                                  : 2
                              );
                            })(i, e)
                          : _[i.level].func(i, e);
                      if (
                        ((3 !== g && 4 !== g) || (i.status = 666),
                        1 === g || 3 === g)
                      )
                        return 0 === t.avail_out && (i.last_flush = -1), 0;
                      if (
                        2 === g &&
                        (1 === e
                          ? r._tr_align(i)
                          : 5 !== e &&
                            (r._tr_stored_block(i, 0, 0, !1),
                            3 === e &&
                              (d(i.head),
                              0 === i.lookahead &&
                                ((i.strstart = 0),
                                (i.block_start = 0),
                                (i.insert = 0)))),
                        u(t),
                        0 === t.avail_out)
                      )
                        return (i.last_flush = -1), 0;
                    }
                    return 4 !== e
                      ? 0
                      : i.wrap <= 0
                      ? 1
                      : (2 === i.wrap
                          ? (h(i, 255 & t.adler),
                            h(i, (t.adler >> 8) & 255),
                            h(i, (t.adler >> 16) & 255),
                            h(i, (t.adler >> 24) & 255),
                            h(i, 255 & t.total_in),
                            h(i, (t.total_in >> 8) & 255),
                            h(i, (t.total_in >> 16) & 255),
                            h(i, (t.total_in >> 24) & 255))
                          : (f(i, t.adler >>> 16), f(i, 65535 & t.adler)),
                        u(t),
                        i.wrap > 0 && (i.wrap = -i.wrap),
                        0 !== i.pending ? 0 : 1);
                  }),
                  (n.deflateEnd = function (t) {
                    var e;
                    return t && t.state
                      ? 42 !== (e = t.state.status) &&
                        69 !== e &&
                        73 !== e &&
                        91 !== e &&
                        103 !== e &&
                        113 !== e &&
                        666 !== e
                        ? l(t, -2)
                        : ((t.state = null), 113 === e ? l(t, -3) : 0)
                      : -2;
                  }),
                  (n.deflateInfo = "pako deflate (from Nodeca project)");
              },
              {
                "../utils/common": 27,
                "./adler32": 29,
                "./crc32": 31,
                "./messages": 37,
                "./trees": 38,
              },
            ],
            33: [
              function (t, e, n) {
                "use strict";
                e.exports = function () {
                  (this.text = 0),
                    (this.time = 0),
                    (this.xflags = 0),
                    (this.os = 0),
                    (this.extra = null),
                    (this.extra_len = 0),
                    (this.name = ""),
                    (this.comment = ""),
                    (this.hcrc = 0),
                    (this.done = !1);
                };
              },
              {},
            ],
            34: [
              function (t, e, n) {
                "use strict";
                e.exports = function (t, e) {
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
                    z;
                  (n = t.state),
                    (i = t.next_in),
                    (x = t.input),
                    (r = i + (t.avail_in - 5)),
                    (o = t.next_out),
                    (z = t.output),
                    (a = o - (e - t.avail_out)),
                    (s = o + (t.avail_out - 257)),
                    (l = n.dmax),
                    (c = n.wsize),
                    (d = n.whave),
                    (u = n.wnext),
                    (p = n.window),
                    (h = n.hold),
                    (f = n.bits),
                    (b = n.lencode),
                    (m = n.distcode),
                    (g = (1 << n.lenbits) - 1),
                    (v = (1 << n.distbits) - 1);
                  t: do {
                    f < 15 &&
                      ((h += x[i++] << f),
                      (f += 8),
                      (h += x[i++] << f),
                      (f += 8)),
                      (_ = b[h & g]);
                    e: for (;;) {
                      if (
                        ((h >>>= y = _ >>> 24),
                        (f -= y),
                        0 == (y = (_ >>> 16) & 255))
                      )
                        z[o++] = 65535 & _;
                      else {
                        if (!(16 & y)) {
                          if (0 == (64 & y)) {
                            _ = b[(65535 & _) + (h & ((1 << y) - 1))];
                            continue e;
                          }
                          if (32 & y) {
                            n.mode = 12;
                            break t;
                          }
                          (t.msg = "invalid literal/length code"),
                            (n.mode = 30);
                          break t;
                        }
                        (M = 65535 & _),
                          (y &= 15) &&
                            (f < y && ((h += x[i++] << f), (f += 8)),
                            (M += h & ((1 << y) - 1)),
                            (h >>>= y),
                            (f -= y)),
                          f < 15 &&
                            ((h += x[i++] << f),
                            (f += 8),
                            (h += x[i++] << f),
                            (f += 8)),
                          (_ = m[h & v]);
                        n: for (;;) {
                          if (
                            ((h >>>= y = _ >>> 24),
                            (f -= y),
                            !(16 & (y = (_ >>> 16) & 255)))
                          ) {
                            if (0 == (64 & y)) {
                              _ = m[(65535 & _) + (h & ((1 << y) - 1))];
                              continue n;
                            }
                            (t.msg = "invalid distance code"), (n.mode = 30);
                            break t;
                          }
                          if (
                            ((O = 65535 & _),
                            f < (y &= 15) &&
                              ((h += x[i++] << f),
                              (f += 8) < y && ((h += x[i++] << f), (f += 8))),
                            (O += h & ((1 << y) - 1)) > l)
                          ) {
                            (t.msg = "invalid distance too far back"),
                              (n.mode = 30);
                            break t;
                          }
                          if (((h >>>= y), (f -= y), O > (y = o - a))) {
                            if ((y = O - y) > d && n.sane) {
                              (t.msg = "invalid distance too far back"),
                                (n.mode = 30);
                              break t;
                            }
                            if (((w = 0), (A = p), 0 === u)) {
                              if (((w += c - y), y < M)) {
                                M -= y;
                                do {
                                  z[o++] = p[w++];
                                } while (--y);
                                (w = o - O), (A = z);
                              }
                            } else if (u < y) {
                              if (((w += c + u - y), (y -= u) < M)) {
                                M -= y;
                                do {
                                  z[o++] = p[w++];
                                } while (--y);
                                if (((w = 0), u < M)) {
                                  M -= y = u;
                                  do {
                                    z[o++] = p[w++];
                                  } while (--y);
                                  (w = o - O), (A = z);
                                }
                              }
                            } else if (((w += u - y), y < M)) {
                              M -= y;
                              do {
                                z[o++] = p[w++];
                              } while (--y);
                              (w = o - O), (A = z);
                            }
                            for (; M > 2; )
                              (z[o++] = A[w++]),
                                (z[o++] = A[w++]),
                                (z[o++] = A[w++]),
                                (M -= 3);
                            M &&
                              ((z[o++] = A[w++]), M > 1 && (z[o++] = A[w++]));
                          } else {
                            w = o - O;
                            do {
                              (z[o++] = z[w++]),
                                (z[o++] = z[w++]),
                                (z[o++] = z[w++]),
                                (M -= 3);
                            } while (M > 2);
                            M &&
                              ((z[o++] = z[w++]), M > 1 && (z[o++] = z[w++]));
                          }
                          break;
                        }
                      }
                      break;
                    }
                  } while (i < r && o < s);
                  (i -= M = f >> 3),
                    (h &= (1 << (f -= M << 3)) - 1),
                    (t.next_in = i),
                    (t.next_out = o),
                    (t.avail_in = i < r ? r - i + 5 : 5 - (i - r)),
                    (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
                    (n.hold = h),
                    (n.bits = f);
                };
              },
              {},
            ],
            35: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common"),
                  r = t("./adler32"),
                  o = t("./crc32"),
                  a = t("./inffast"),
                  s = t("./inftrees");
                function l(t) {
                  return (
                    ((t >>> 24) & 255) +
                    ((t >>> 8) & 65280) +
                    ((65280 & t) << 8) +
                    ((255 & t) << 24)
                  );
                }
                function c() {
                  (this.mode = 0),
                    (this.last = !1),
                    (this.wrap = 0),
                    (this.havedict = !1),
                    (this.flags = 0),
                    (this.dmax = 0),
                    (this.check = 0),
                    (this.total = 0),
                    (this.head = null),
                    (this.wbits = 0),
                    (this.wsize = 0),
                    (this.whave = 0),
                    (this.wnext = 0),
                    (this.window = null),
                    (this.hold = 0),
                    (this.bits = 0),
                    (this.length = 0),
                    (this.offset = 0),
                    (this.extra = 0),
                    (this.lencode = null),
                    (this.distcode = null),
                    (this.lenbits = 0),
                    (this.distbits = 0),
                    (this.ncode = 0),
                    (this.nlen = 0),
                    (this.ndist = 0),
                    (this.have = 0),
                    (this.next = null),
                    (this.lens = new i.Buf16(320)),
                    (this.work = new i.Buf16(288)),
                    (this.lendyn = null),
                    (this.distdyn = null),
                    (this.sane = 0),
                    (this.back = 0),
                    (this.was = 0);
                }
                function d(t) {
                  var e;
                  return t && t.state
                    ? ((e = t.state),
                      (t.total_in = t.total_out = e.total = 0),
                      (t.msg = ""),
                      e.wrap && (t.adler = 1 & e.wrap),
                      (e.mode = 1),
                      (e.last = 0),
                      (e.havedict = 0),
                      (e.dmax = 32768),
                      (e.head = null),
                      (e.hold = 0),
                      (e.bits = 0),
                      (e.lencode = e.lendyn = new i.Buf32(852)),
                      (e.distcode = e.distdyn = new i.Buf32(592)),
                      (e.sane = 1),
                      (e.back = -1),
                      0)
                    : -2;
                }
                function u(t) {
                  var e;
                  return t && t.state
                    ? (((e = t.state).wsize = 0),
                      (e.whave = 0),
                      (e.wnext = 0),
                      d(t))
                    : -2;
                }
                function p(t, e) {
                  var n, i;
                  return t && t.state
                    ? ((i = t.state),
                      e < 0
                        ? ((n = 0), (e = -e))
                        : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
                      e && (e < 8 || e > 15)
                        ? -2
                        : (null !== i.window &&
                            i.wbits !== e &&
                            (i.window = null),
                          (i.wrap = n),
                          (i.wbits = e),
                          u(t)))
                    : -2;
                }
                function h(t, e) {
                  var n, i;
                  return t
                    ? ((i = new c()),
                      (t.state = i),
                      (i.window = null),
                      0 !== (n = p(t, e)) && (t.state = null),
                      n)
                    : -2;
                }
                var f,
                  b,
                  m = !0;
                function g(t) {
                  if (m) {
                    var e;
                    for (
                      f = new i.Buf32(512), b = new i.Buf32(32), e = 0;
                      e < 144;

                    )
                      t.lens[e++] = 8;
                    for (; e < 256; ) t.lens[e++] = 9;
                    for (; e < 280; ) t.lens[e++] = 7;
                    for (; e < 288; ) t.lens[e++] = 8;
                    for (
                      s(1, t.lens, 0, 288, f, 0, t.work, { bits: 9 }), e = 0;
                      e < 32;

                    )
                      t.lens[e++] = 5;
                    s(2, t.lens, 0, 32, b, 0, t.work, { bits: 5 }), (m = !1);
                  }
                  (t.lencode = f),
                    (t.lenbits = 9),
                    (t.distcode = b),
                    (t.distbits = 5);
                }
                (n.inflateReset = u),
                  (n.inflateReset2 = p),
                  (n.inflateResetKeep = d),
                  (n.inflateInit = function (t) {
                    return h(t, 15);
                  }),
                  (n.inflateInit2 = h),
                  (n.inflate = function (t, e) {
                    var n,
                      c,
                      d,
                      u,
                      p,
                      h,
                      f,
                      b,
                      m,
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
                      q = 0,
                      E = new i.Buf8(4),
                      j = [
                        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                        14, 1, 15,
                      ];
                    if (
                      !t ||
                      !t.state ||
                      !t.output ||
                      (!t.input && 0 !== t.avail_in)
                    )
                      return -2;
                    12 === (n = t.state).mode && (n.mode = 13),
                      (p = t.next_out),
                      (d = t.output),
                      (f = t.avail_out),
                      (u = t.next_in),
                      (c = t.input),
                      (h = t.avail_in),
                      (b = n.hold),
                      (m = n.bits),
                      (v = h),
                      (_ = f),
                      (T = 0);
                    t: for (;;)
                      switch (n.mode) {
                        case 1:
                          if (0 === n.wrap) {
                            n.mode = 13;
                            break;
                          }
                          for (; m < 16; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if (2 & n.wrap && 35615 === b) {
                            (n.check = 0),
                              (E[0] = 255 & b),
                              (E[1] = (b >>> 8) & 255),
                              (n.check = o(n.check, E, 2, 0)),
                              (b = 0),
                              (m = 0),
                              (n.mode = 2);
                            break;
                          }
                          if (
                            ((n.flags = 0),
                            n.head && (n.head.done = !1),
                            !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31)
                          ) {
                            (t.msg = "incorrect header check"), (n.mode = 30);
                            break;
                          }
                          if (8 != (15 & b)) {
                            (t.msg = "unknown compression method"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((m -= 4),
                            (S = 8 + (15 & (b >>>= 4))),
                            0 === n.wbits)
                          )
                            n.wbits = S;
                          else if (S > n.wbits) {
                            (t.msg = "invalid window size"), (n.mode = 30);
                            break;
                          }
                          (n.dmax = 1 << S),
                            (t.adler = n.check = 1),
                            (n.mode = 512 & b ? 10 : 12),
                            (b = 0),
                            (m = 0);
                          break;
                        case 2:
                          for (; m < 16; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if (((n.flags = b), 8 != (255 & n.flags))) {
                            (t.msg = "unknown compression method"),
                              (n.mode = 30);
                            break;
                          }
                          if (57344 & n.flags) {
                            (t.msg = "unknown header flags set"), (n.mode = 30);
                            break;
                          }
                          n.head && (n.head.text = (b >> 8) & 1),
                            512 & n.flags &&
                              ((E[0] = 255 & b),
                              (E[1] = (b >>> 8) & 255),
                              (n.check = o(n.check, E, 2, 0))),
                            (b = 0),
                            (m = 0),
                            (n.mode = 3);
                        case 3:
                          for (; m < 32; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          n.head && (n.head.time = b),
                            512 & n.flags &&
                              ((E[0] = 255 & b),
                              (E[1] = (b >>> 8) & 255),
                              (E[2] = (b >>> 16) & 255),
                              (E[3] = (b >>> 24) & 255),
                              (n.check = o(n.check, E, 4, 0))),
                            (b = 0),
                            (m = 0),
                            (n.mode = 4);
                        case 4:
                          for (; m < 16; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          n.head &&
                            ((n.head.xflags = 255 & b), (n.head.os = b >> 8)),
                            512 & n.flags &&
                              ((E[0] = 255 & b),
                              (E[1] = (b >>> 8) & 255),
                              (n.check = o(n.check, E, 2, 0))),
                            (b = 0),
                            (m = 0),
                            (n.mode = 5);
                        case 5:
                          if (1024 & n.flags) {
                            for (; m < 16; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (n.length = b),
                              n.head && (n.head.extra_len = b),
                              512 & n.flags &&
                                ((E[0] = 255 & b),
                                (E[1] = (b >>> 8) & 255),
                                (n.check = o(n.check, E, 2, 0))),
                              (b = 0),
                              (m = 0);
                          } else n.head && (n.head.extra = null);
                          n.mode = 6;
                        case 6:
                          if (
                            1024 & n.flags &&
                            ((y = n.length) > h && (y = h),
                            y &&
                              (n.head &&
                                ((S = n.head.extra_len - n.length),
                                n.head.extra ||
                                  (n.head.extra = new Array(n.head.extra_len)),
                                i.arraySet(n.head.extra, c, u, y, S)),
                              512 & n.flags && (n.check = o(n.check, c, y, u)),
                              (h -= y),
                              (u += y),
                              (n.length -= y)),
                            n.length)
                          )
                            break t;
                          (n.length = 0), (n.mode = 7);
                        case 7:
                          if (2048 & n.flags) {
                            if (0 === h) break t;
                            y = 0;
                            do {
                              (S = c[u + y++]),
                                n.head &&
                                  S &&
                                  n.length < 65536 &&
                                  (n.head.name += String.fromCharCode(S));
                            } while (S && y < h);
                            if (
                              (512 & n.flags && (n.check = o(n.check, c, y, u)),
                              (h -= y),
                              (u += y),
                              S)
                            )
                              break t;
                          } else n.head && (n.head.name = null);
                          (n.length = 0), (n.mode = 8);
                        case 8:
                          if (4096 & n.flags) {
                            if (0 === h) break t;
                            y = 0;
                            do {
                              (S = c[u + y++]),
                                n.head &&
                                  S &&
                                  n.length < 65536 &&
                                  (n.head.comment += String.fromCharCode(S));
                            } while (S && y < h);
                            if (
                              (512 & n.flags && (n.check = o(n.check, c, y, u)),
                              (h -= y),
                              (u += y),
                              S)
                            )
                              break t;
                          } else n.head && (n.head.comment = null);
                          n.mode = 9;
                        case 9:
                          if (512 & n.flags) {
                            for (; m < 16; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            if (b !== (65535 & n.check)) {
                              (t.msg = "header crc mismatch"), (n.mode = 30);
                              break;
                            }
                            (b = 0), (m = 0);
                          }
                          n.head &&
                            ((n.head.hcrc = (n.flags >> 9) & 1),
                            (n.head.done = !0)),
                            (t.adler = n.check = 0),
                            (n.mode = 12);
                          break;
                        case 10:
                          for (; m < 32; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          (t.adler = n.check = l(b)),
                            (b = 0),
                            (m = 0),
                            (n.mode = 11);
                        case 11:
                          if (0 === n.havedict)
                            return (
                              (t.next_out = p),
                              (t.avail_out = f),
                              (t.next_in = u),
                              (t.avail_in = h),
                              (n.hold = b),
                              (n.bits = m),
                              2
                            );
                          (t.adler = n.check = 1), (n.mode = 12);
                        case 12:
                          if (5 === e || 6 === e) break t;
                        case 13:
                          if (n.last) {
                            (b >>>= 7 & m), (m -= 7 & m), (n.mode = 27);
                            break;
                          }
                          for (; m < 3; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          switch (
                            ((n.last = 1 & b), (m -= 1), 3 & (b >>>= 1))
                          ) {
                            case 0:
                              n.mode = 14;
                              break;
                            case 1:
                              if ((g(n), (n.mode = 20), 6 === e)) {
                                (b >>>= 2), (m -= 2);
                                break t;
                              }
                              break;
                            case 2:
                              n.mode = 17;
                              break;
                            case 3:
                              (t.msg = "invalid block type"), (n.mode = 30);
                          }
                          (b >>>= 2), (m -= 2);
                          break;
                        case 14:
                          for (b >>>= 7 & m, m -= 7 & m; m < 32; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if ((65535 & b) != ((b >>> 16) ^ 65535)) {
                            (t.msg = "invalid stored block lengths"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.length = 65535 & b),
                            (b = 0),
                            (m = 0),
                            (n.mode = 15),
                            6 === e)
                          )
                            break t;
                        case 15:
                          n.mode = 16;
                        case 16:
                          if ((y = n.length)) {
                            if ((y > h && (y = h), y > f && (y = f), 0 === y))
                              break t;
                            i.arraySet(d, c, u, y, p),
                              (h -= y),
                              (u += y),
                              (f -= y),
                              (p += y),
                              (n.length -= y);
                            break;
                          }
                          n.mode = 12;
                          break;
                        case 17:
                          for (; m < 14; ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if (
                            ((n.nlen = 257 + (31 & b)),
                            (b >>>= 5),
                            (m -= 5),
                            (n.ndist = 1 + (31 & b)),
                            (b >>>= 5),
                            (m -= 5),
                            (n.ncode = 4 + (15 & b)),
                            (b >>>= 4),
                            (m -= 4),
                            n.nlen > 286 || n.ndist > 30)
                          ) {
                            (t.msg = "too many length or distance symbols"),
                              (n.mode = 30);
                            break;
                          }
                          (n.have = 0), (n.mode = 18);
                        case 18:
                          for (; n.have < n.ncode; ) {
                            for (; m < 3; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (n.lens[j[n.have++]] = 7 & b), (b >>>= 3), (m -= 3);
                          }
                          for (; n.have < 19; ) n.lens[j[n.have++]] = 0;
                          if (
                            ((n.lencode = n.lendyn),
                            (n.lenbits = 7),
                            (D = { bits: n.lenbits }),
                            (T = s(0, n.lens, 0, 19, n.lencode, 0, n.work, D)),
                            (n.lenbits = D.bits),
                            T)
                          ) {
                            (t.msg = "invalid code lengths set"), (n.mode = 30);
                            break;
                          }
                          (n.have = 0), (n.mode = 19);
                        case 19:
                          for (; n.have < n.nlen + n.ndist; ) {
                            for (
                              ;
                              (A =
                                ((q = n.lencode[b & ((1 << n.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (x = 65535 & q),
                                !((w = q >>> 24) <= m);

                            ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            if (x < 16)
                              (b >>>= w), (m -= w), (n.lens[n.have++] = x);
                            else {
                              if (16 === x) {
                                for (L = w + 2; m < L; ) {
                                  if (0 === h) break t;
                                  h--, (b += c[u++] << m), (m += 8);
                                }
                                if (((b >>>= w), (m -= w), 0 === n.have)) {
                                  (t.msg = "invalid bit length repeat"),
                                    (n.mode = 30);
                                  break;
                                }
                                (S = n.lens[n.have - 1]),
                                  (y = 3 + (3 & b)),
                                  (b >>>= 2),
                                  (m -= 2);
                              } else if (17 === x) {
                                for (L = w + 3; m < L; ) {
                                  if (0 === h) break t;
                                  h--, (b += c[u++] << m), (m += 8);
                                }
                                (m -= w),
                                  (S = 0),
                                  (y = 3 + (7 & (b >>>= w))),
                                  (b >>>= 3),
                                  (m -= 3);
                              } else {
                                for (L = w + 7; m < L; ) {
                                  if (0 === h) break t;
                                  h--, (b += c[u++] << m), (m += 8);
                                }
                                (m -= w),
                                  (S = 0),
                                  (y = 11 + (127 & (b >>>= w))),
                                  (b >>>= 7),
                                  (m -= 7);
                              }
                              if (n.have + y > n.nlen + n.ndist) {
                                (t.msg = "invalid bit length repeat"),
                                  (n.mode = 30);
                                break;
                              }
                              for (; y--; ) n.lens[n.have++] = S;
                            }
                          }
                          if (30 === n.mode) break;
                          if (0 === n.lens[256]) {
                            (t.msg = "invalid code -- missing end-of-block"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.lenbits = 9),
                            (D = { bits: n.lenbits }),
                            (T = s(
                              1,
                              n.lens,
                              0,
                              n.nlen,
                              n.lencode,
                              0,
                              n.work,
                              D
                            )),
                            (n.lenbits = D.bits),
                            T)
                          ) {
                            (t.msg = "invalid literal/lengths set"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.distbits = 6),
                            (n.distcode = n.distdyn),
                            (D = { bits: n.distbits }),
                            (T = s(
                              2,
                              n.lens,
                              n.nlen,
                              n.ndist,
                              n.distcode,
                              0,
                              n.work,
                              D
                            )),
                            (n.distbits = D.bits),
                            T)
                          ) {
                            (t.msg = "invalid distances set"), (n.mode = 30);
                            break;
                          }
                          if (((n.mode = 20), 6 === e)) break t;
                        case 20:
                          n.mode = 21;
                        case 21:
                          if (h >= 6 && f >= 258) {
                            (t.next_out = p),
                              (t.avail_out = f),
                              (t.next_in = u),
                              (t.avail_in = h),
                              (n.hold = b),
                              (n.bits = m),
                              a(t, _),
                              (p = t.next_out),
                              (d = t.output),
                              (f = t.avail_out),
                              (u = t.next_in),
                              (c = t.input),
                              (h = t.avail_in),
                              (b = n.hold),
                              (m = n.bits),
                              12 === n.mode && (n.back = -1);
                            break;
                          }
                          for (
                            n.back = 0;
                            (A =
                              ((q = n.lencode[b & ((1 << n.lenbits) - 1)]) >>>
                                16) &
                              255),
                              (x = 65535 & q),
                              !((w = q >>> 24) <= m);

                          ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if (A && 0 == (240 & A)) {
                            for (
                              z = w, C = A, k = x;
                              (A =
                                ((q =
                                  n.lencode[
                                    k + ((b & ((1 << (z + C)) - 1)) >> z)
                                  ]) >>>
                                  16) &
                                255),
                                (x = 65535 & q),
                                !(z + (w = q >>> 24) <= m);

                            ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (b >>>= z), (m -= z), (n.back += z);
                          }
                          if (
                            ((b >>>= w),
                            (m -= w),
                            (n.back += w),
                            (n.length = x),
                            0 === A)
                          ) {
                            n.mode = 26;
                            break;
                          }
                          if (32 & A) {
                            (n.back = -1), (n.mode = 12);
                            break;
                          }
                          if (64 & A) {
                            (t.msg = "invalid literal/length code"),
                              (n.mode = 30);
                            break;
                          }
                          (n.extra = 15 & A), (n.mode = 22);
                        case 22:
                          if (n.extra) {
                            for (L = n.extra; m < L; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (n.length += b & ((1 << n.extra) - 1)),
                              (b >>>= n.extra),
                              (m -= n.extra),
                              (n.back += n.extra);
                          }
                          (n.was = n.length), (n.mode = 23);
                        case 23:
                          for (
                            ;
                            (A =
                              ((q = n.distcode[b & ((1 << n.distbits) - 1)]) >>>
                                16) &
                              255),
                              (x = 65535 & q),
                              !((w = q >>> 24) <= m);

                          ) {
                            if (0 === h) break t;
                            h--, (b += c[u++] << m), (m += 8);
                          }
                          if (0 == (240 & A)) {
                            for (
                              z = w, C = A, k = x;
                              (A =
                                ((q =
                                  n.distcode[
                                    k + ((b & ((1 << (z + C)) - 1)) >> z)
                                  ]) >>>
                                  16) &
                                255),
                                (x = 65535 & q),
                                !(z + (w = q >>> 24) <= m);

                            ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (b >>>= z), (m -= z), (n.back += z);
                          }
                          if (((b >>>= w), (m -= w), (n.back += w), 64 & A)) {
                            (t.msg = "invalid distance code"), (n.mode = 30);
                            break;
                          }
                          (n.offset = x), (n.extra = 15 & A), (n.mode = 24);
                        case 24:
                          if (n.extra) {
                            for (L = n.extra; m < L; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            (n.offset += b & ((1 << n.extra) - 1)),
                              (b >>>= n.extra),
                              (m -= n.extra),
                              (n.back += n.extra);
                          }
                          if (n.offset > n.dmax) {
                            (t.msg = "invalid distance too far back"),
                              (n.mode = 30);
                            break;
                          }
                          n.mode = 25;
                        case 25:
                          if (0 === f) break t;
                          if (((y = _ - f), n.offset > y)) {
                            if ((y = n.offset - y) > n.whave && n.sane) {
                              (t.msg = "invalid distance too far back"),
                                (n.mode = 30);
                              break;
                            }
                            y > n.wnext
                              ? ((y -= n.wnext), (M = n.wsize - y))
                              : (M = n.wnext - y),
                              y > n.length && (y = n.length),
                              (O = n.window);
                          } else (O = d), (M = p - n.offset), (y = n.length);
                          y > f && (y = f), (f -= y), (n.length -= y);
                          do {
                            d[p++] = O[M++];
                          } while (--y);
                          0 === n.length && (n.mode = 21);
                          break;
                        case 26:
                          if (0 === f) break t;
                          (d[p++] = n.length), f--, (n.mode = 21);
                          break;
                        case 27:
                          if (n.wrap) {
                            for (; m < 32; ) {
                              if (0 === h) break t;
                              h--, (b |= c[u++] << m), (m += 8);
                            }
                            if (
                              ((_ -= f),
                              (t.total_out += _),
                              (n.total += _),
                              _ &&
                                (t.adler = n.check =
                                  n.flags
                                    ? o(n.check, d, _, p - _)
                                    : r(n.check, d, _, p - _)),
                              (_ = f),
                              (n.flags ? b : l(b)) !== n.check)
                            ) {
                              (t.msg = "incorrect data check"), (n.mode = 30);
                              break;
                            }
                            (b = 0), (m = 0);
                          }
                          n.mode = 28;
                        case 28:
                          if (n.wrap && n.flags) {
                            for (; m < 32; ) {
                              if (0 === h) break t;
                              h--, (b += c[u++] << m), (m += 8);
                            }
                            if (b !== (4294967295 & n.total)) {
                              (t.msg = "incorrect length check"), (n.mode = 30);
                              break;
                            }
                            (b = 0), (m = 0);
                          }
                          n.mode = 29;
                        case 29:
                          T = 1;
                          break t;
                        case 30:
                          T = -3;
                          break t;
                        case 31:
                          return -4;
                        case 32:
                        default:
                          return -2;
                      }
                    return (
                      (t.next_out = p),
                      (t.avail_out = f),
                      (t.next_in = u),
                      (t.avail_in = h),
                      (n.hold = b),
                      (n.bits = m),
                      (n.wsize ||
                        (_ !== t.avail_out &&
                          n.mode < 30 &&
                          (n.mode < 27 || 4 !== e))) &&
                      (function (t, e, n, r) {
                        var o,
                          a = t.state;
                        return (
                          null === a.window &&
                            ((a.wsize = 1 << a.wbits),
                            (a.wnext = 0),
                            (a.whave = 0),
                            (a.window = new i.Buf8(a.wsize))),
                          r >= a.wsize
                            ? (i.arraySet(a.window, e, n - a.wsize, a.wsize, 0),
                              (a.wnext = 0),
                              (a.whave = a.wsize))
                            : ((o = a.wsize - a.wnext) > r && (o = r),
                              i.arraySet(a.window, e, n - r, o, a.wnext),
                              (r -= o)
                                ? (i.arraySet(a.window, e, n - r, r, 0),
                                  (a.wnext = r),
                                  (a.whave = a.wsize))
                                : ((a.wnext += o),
                                  a.wnext === a.wsize && (a.wnext = 0),
                                  a.whave < a.wsize && (a.whave += o))),
                          0
                        );
                      })(t, t.output, t.next_out, _ - t.avail_out)
                        ? ((n.mode = 31), -4)
                        : ((v -= t.avail_in),
                          (_ -= t.avail_out),
                          (t.total_in += v),
                          (t.total_out += _),
                          (n.total += _),
                          n.wrap &&
                            _ &&
                            (t.adler = n.check =
                              n.flags
                                ? o(n.check, d, _, t.next_out - _)
                                : r(n.check, d, _, t.next_out - _)),
                          (t.data_type =
                            n.bits +
                            (n.last ? 64 : 0) +
                            (12 === n.mode ? 128 : 0) +
                            (20 === n.mode || 15 === n.mode ? 256 : 0)),
                          ((0 === v && 0 === _) || 4 === e) &&
                            0 === T &&
                            (T = -5),
                          T)
                    );
                  }),
                  (n.inflateEnd = function (t) {
                    if (!t || !t.state) return -2;
                    var e = t.state;
                    return e.window && (e.window = null), (t.state = null), 0;
                  }),
                  (n.inflateGetHeader = function (t, e) {
                    var n;
                    return t && t.state
                      ? 0 == (2 & (n = t.state).wrap)
                        ? -2
                        : ((n.head = e), (e.done = !1), 0)
                      : -2;
                  }),
                  (n.inflateInfo = "pako inflate (from Nodeca project)");
              },
              {
                "../utils/common": 27,
                "./adler32": 29,
                "./crc32": 31,
                "./inffast": 34,
                "./inftrees": 36,
              },
            ],
            36: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common"),
                  r = [
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                    43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                  ],
                  o = [
                    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18,
                    18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72,
                    78,
                  ],
                  a = [
                    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                    8193, 12289, 16385, 24577, 0, 0,
                  ],
                  s = [
                    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22,
                    22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
                    64, 64,
                  ];
                e.exports = function (t, e, n, l, c, d, u, p) {
                  var h,
                    f,
                    b,
                    m,
                    g,
                    v,
                    _,
                    y,
                    M,
                    O = p.bits,
                    w = 0,
                    A = 0,
                    x = 0,
                    z = 0,
                    C = 0,
                    k = 0,
                    S = 0,
                    T = 0,
                    D = 0,
                    L = 0,
                    q = null,
                    E = 0,
                    j = new i.Buf16(16),
                    P = new i.Buf16(16),
                    R = null,
                    I = 0;
                  for (w = 0; w <= 15; w++) j[w] = 0;
                  for (A = 0; A < l; A++) j[e[n + A]]++;
                  for (C = O, z = 15; z >= 1 && 0 === j[z]; z--);
                  if ((C > z && (C = z), 0 === z))
                    return (
                      (c[d++] = 20971520), (c[d++] = 20971520), (p.bits = 1), 0
                    );
                  for (x = 1; x < z && 0 === j[x]; x++);
                  for (C < x && (C = x), T = 1, w = 1; w <= 15; w++)
                    if (((T <<= 1), (T -= j[w]) < 0)) return -1;
                  if (T > 0 && (0 === t || 1 !== z)) return -1;
                  for (P[1] = 0, w = 1; w < 15; w++) P[w + 1] = P[w] + j[w];
                  for (A = 0; A < l; A++)
                    0 !== e[n + A] && (u[P[e[n + A]]++] = A);
                  if (
                    (0 === t
                      ? ((q = R = u), (v = 19))
                      : 1 === t
                      ? ((q = r), (E -= 257), (R = o), (I -= 257), (v = 256))
                      : ((q = a), (R = s), (v = -1)),
                    (L = 0),
                    (A = 0),
                    (w = x),
                    (g = d),
                    (k = C),
                    (S = 0),
                    (b = -1),
                    (m = (D = 1 << C) - 1),
                    (1 === t && D > 852) || (2 === t && D > 592))
                  )
                    return 1;
                  for (;;) {
                    (_ = w - S),
                      u[A] < v
                        ? ((y = 0), (M = u[A]))
                        : u[A] > v
                        ? ((y = R[I + u[A]]), (M = q[E + u[A]]))
                        : ((y = 96), (M = 0)),
                      (h = 1 << (w - S)),
                      (x = f = 1 << k);
                    do {
                      c[g + (L >> S) + (f -= h)] =
                        (_ << 24) | (y << 16) | M | 0;
                    } while (0 !== f);
                    for (h = 1 << (w - 1); L & h; ) h >>= 1;
                    if (
                      (0 !== h ? ((L &= h - 1), (L += h)) : (L = 0),
                      A++,
                      0 == --j[w])
                    ) {
                      if (w === z) break;
                      w = e[n + u[A]];
                    }
                    if (w > C && (L & m) !== b) {
                      for (
                        0 === S && (S = C), g += x, T = 1 << (k = w - S);
                        k + S < z && !((T -= j[k + S]) <= 0);

                      )
                        k++, (T <<= 1);
                      if (
                        ((D += 1 << k),
                        (1 === t && D > 852) || (2 === t && D > 592))
                      )
                        return 1;
                      c[(b = L & m)] = (C << 24) | (k << 16) | (g - d) | 0;
                    }
                  }
                  return (
                    0 !== L && (c[g + L] = ((w - S) << 24) | (64 << 16) | 0),
                    (p.bits = C),
                    0
                  );
                };
              },
              { "../utils/common": 27 },
            ],
            37: [
              function (t, e, n) {
                "use strict";
                e.exports = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version",
                };
              },
              {},
            ],
            38: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common");
                function r(t) {
                  for (var e = t.length; --e >= 0; ) t[e] = 0;
                }
                var o = [
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
                    4, 4, 4, 4, 5, 5, 5, 5, 0,
                  ],
                  a = [
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
                    9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                  ],
                  s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  l = [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                    1, 15,
                  ],
                  c = new Array(576);
                r(c);
                var d = new Array(60);
                r(d);
                var u = new Array(512);
                r(u);
                var p = new Array(256);
                r(p);
                var h = new Array(29);
                r(h);
                var f = new Array(30);
                r(f);
                var b,
                  m,
                  g,
                  v = function (t, e, n, i, r) {
                    (this.static_tree = t),
                      (this.extra_bits = e),
                      (this.extra_base = n),
                      (this.elems = i),
                      (this.max_length = r),
                      (this.has_stree = t && t.length);
                  },
                  _ = function (t, e) {
                    (this.dyn_tree = t),
                      (this.max_code = 0),
                      (this.stat_desc = e);
                  };
                function y(t) {
                  return t < 256 ? u[t] : u[256 + (t >>> 7)];
                }
                function M(t, e) {
                  (t.pending_buf[t.pending++] = 255 & e),
                    (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                }
                function O(t, e, n) {
                  t.bi_valid > 16 - n
                    ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                      M(t, t.bi_buf),
                      (t.bi_buf = e >> (16 - t.bi_valid)),
                      (t.bi_valid += n - 16))
                    : ((t.bi_buf |= (e << t.bi_valid) & 65535),
                      (t.bi_valid += n));
                }
                function w(t, e, n) {
                  O(t, n[2 * e], n[2 * e + 1]);
                }
                function A(t, e) {
                  var n = 0;
                  do {
                    (n |= 1 & t), (t >>>= 1), (n <<= 1);
                  } while (--e > 0);
                  return n >>> 1;
                }
                function x(t, e, n) {
                  var i,
                    r,
                    o = new Array(16),
                    a = 0;
                  for (i = 1; i <= 15; i++) o[i] = a = (a + n[i - 1]) << 1;
                  for (r = 0; r <= e; r++) {
                    var s = t[2 * r + 1];
                    0 !== s && (t[2 * r] = A(o[s]++, s));
                  }
                }
                function z(t) {
                  var e;
                  for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
                  for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
                  for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                  (t.dyn_ltree[512] = 1),
                    (t.opt_len = t.static_len = 0),
                    (t.last_lit = t.matches = 0);
                }
                function C(t) {
                  t.bi_valid > 8
                    ? M(t, t.bi_buf)
                    : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                    (t.bi_buf = 0),
                    (t.bi_valid = 0);
                }
                function k(t, e, n, i) {
                  var r = 2 * e,
                    o = 2 * n;
                  return t[r] < t[o] || (t[r] === t[o] && i[e] <= i[n]);
                }
                function S(t, e, n) {
                  for (
                    var i = t.heap[n], r = n << 1;
                    r <= t.heap_len &&
                    (r < t.heap_len &&
                      k(e, t.heap[r + 1], t.heap[r], t.depth) &&
                      r++,
                    !k(e, i, t.heap[r], t.depth));

                  )
                    (t.heap[n] = t.heap[r]), (n = r), (r <<= 1);
                  t.heap[n] = i;
                }
                function T(t, e, n) {
                  var i,
                    r,
                    s,
                    l,
                    c = 0;
                  if (0 !== t.last_lit)
                    do {
                      (i =
                        (t.pending_buf[t.d_buf + 2 * c] << 8) |
                        t.pending_buf[t.d_buf + 2 * c + 1]),
                        (r = t.pending_buf[t.l_buf + c]),
                        c++,
                        0 === i
                          ? w(t, r, e)
                          : (w(t, (s = p[r]) + 256 + 1, e),
                            0 !== (l = o[s]) && O(t, (r -= h[s]), l),
                            w(t, (s = y(--i)), n),
                            0 !== (l = a[s]) && O(t, (i -= f[s]), l));
                    } while (c < t.last_lit);
                  w(t, 256, e);
                }
                function D(t, e) {
                  var n,
                    i,
                    r,
                    o = e.dyn_tree,
                    a = e.stat_desc.static_tree,
                    s = e.stat_desc.has_stree,
                    l = e.stat_desc.elems,
                    c = -1;
                  for (t.heap_len = 0, t.heap_max = 573, n = 0; n < l; n++)
                    0 !== o[2 * n]
                      ? ((t.heap[++t.heap_len] = c = n), (t.depth[n] = 0))
                      : (o[2 * n + 1] = 0);
                  for (; t.heap_len < 2; )
                    (o[2 * (r = t.heap[++t.heap_len] = c < 2 ? ++c : 0)] = 1),
                      (t.depth[r] = 0),
                      t.opt_len--,
                      s && (t.static_len -= a[2 * r + 1]);
                  for (e.max_code = c, n = t.heap_len >> 1; n >= 1; n--)
                    S(t, o, n);
                  r = l;
                  do {
                    (n = t.heap[1]),
                      (t.heap[1] = t.heap[t.heap_len--]),
                      S(t, o, 1),
                      (i = t.heap[1]),
                      (t.heap[--t.heap_max] = n),
                      (t.heap[--t.heap_max] = i),
                      (o[2 * r] = o[2 * n] + o[2 * i]),
                      (t.depth[r] =
                        (t.depth[n] >= t.depth[i] ? t.depth[n] : t.depth[i]) +
                        1),
                      (o[2 * n + 1] = o[2 * i + 1] = r),
                      (t.heap[1] = r++),
                      S(t, o, 1);
                  } while (t.heap_len >= 2);
                  (t.heap[--t.heap_max] = t.heap[1]),
                    (function (t, e) {
                      var n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l = e.dyn_tree,
                        c = e.max_code,
                        d = e.stat_desc.static_tree,
                        u = e.stat_desc.has_stree,
                        p = e.stat_desc.extra_bits,
                        h = e.stat_desc.extra_base,
                        f = e.stat_desc.max_length,
                        b = 0;
                      for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
                      for (
                        l[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
                        n < 573;
                        n++
                      )
                        (o = l[2 * l[2 * (i = t.heap[n]) + 1] + 1] + 1) > f &&
                          ((o = f), b++),
                          (l[2 * i + 1] = o),
                          i > c ||
                            (t.bl_count[o]++,
                            (a = 0),
                            i >= h && (a = p[i - h]),
                            (s = l[2 * i]),
                            (t.opt_len += s * (o + a)),
                            u && (t.static_len += s * (d[2 * i + 1] + a)));
                      if (0 !== b) {
                        do {
                          for (o = f - 1; 0 === t.bl_count[o]; ) o--;
                          t.bl_count[o]--,
                            (t.bl_count[o + 1] += 2),
                            t.bl_count[f]--,
                            (b -= 2);
                        } while (b > 0);
                        for (o = f; 0 !== o; o--)
                          for (i = t.bl_count[o]; 0 !== i; )
                            (r = t.heap[--n]) > c ||
                              (l[2 * r + 1] !== o &&
                                ((t.opt_len += (o - l[2 * r + 1]) * l[2 * r]),
                                (l[2 * r + 1] = o)),
                              i--);
                      }
                    })(t, e),
                    x(o, c, t.bl_count);
                }
                function L(t, e, n) {
                  var i,
                    r,
                    o = -1,
                    a = e[1],
                    s = 0,
                    l = 7,
                    c = 4;
                  for (
                    0 === a && ((l = 138), (c = 3)),
                      e[2 * (n + 1) + 1] = 65535,
                      i = 0;
                    i <= n;
                    i++
                  )
                    (r = a),
                      (a = e[2 * (i + 1) + 1]),
                      (++s < l && r === a) ||
                        (s < c
                          ? (t.bl_tree[2 * r] += s)
                          : 0 !== r
                          ? (r !== o && t.bl_tree[2 * r]++, t.bl_tree[32]++)
                          : s <= 10
                          ? t.bl_tree[34]++
                          : t.bl_tree[36]++,
                        (s = 0),
                        (o = r),
                        0 === a
                          ? ((l = 138), (c = 3))
                          : r === a
                          ? ((l = 6), (c = 3))
                          : ((l = 7), (c = 4)));
                }
                function q(t, e, n) {
                  var i,
                    r,
                    o = -1,
                    a = e[1],
                    s = 0,
                    l = 7,
                    c = 4;
                  for (0 === a && ((l = 138), (c = 3)), i = 0; i <= n; i++)
                    if (
                      ((r = a), (a = e[2 * (i + 1) + 1]), !(++s < l && r === a))
                    ) {
                      if (s < c)
                        do {
                          w(t, r, t.bl_tree);
                        } while (0 != --s);
                      else
                        0 !== r
                          ? (r !== o && (w(t, r, t.bl_tree), s--),
                            w(t, 16, t.bl_tree),
                            O(t, s - 3, 2))
                          : s <= 10
                          ? (w(t, 17, t.bl_tree), O(t, s - 3, 3))
                          : (w(t, 18, t.bl_tree), O(t, s - 11, 7));
                      (s = 0),
                        (o = r),
                        0 === a
                          ? ((l = 138), (c = 3))
                          : r === a
                          ? ((l = 6), (c = 3))
                          : ((l = 7), (c = 4));
                    }
                }
                var E = !1;
                function j(t, e, n, r) {
                  O(t, 0 + (r ? 1 : 0), 3),
                    (function (t, e, n, r) {
                      C(t),
                        M(t, n),
                        M(t, ~n),
                        i.arraySet(t.pending_buf, t.window, e, n, t.pending),
                        (t.pending += n);
                    })(t, e, n);
                }
                (n._tr_init = function (t) {
                  E ||
                    ((function () {
                      var t,
                        e,
                        n,
                        i,
                        r,
                        l = new Array(16);
                      for (n = 0, i = 0; i < 28; i++)
                        for (h[i] = n, t = 0; t < 1 << o[i]; t++) p[n++] = i;
                      for (p[n - 1] = i, r = 0, i = 0; i < 16; i++)
                        for (f[i] = r, t = 0; t < 1 << a[i]; t++) u[r++] = i;
                      for (r >>= 7; i < 30; i++)
                        for (f[i] = r << 7, t = 0; t < 1 << (a[i] - 7); t++)
                          u[256 + r++] = i;
                      for (e = 0; e <= 15; e++) l[e] = 0;
                      for (t = 0; t <= 143; ) (c[2 * t + 1] = 8), t++, l[8]++;
                      for (; t <= 255; ) (c[2 * t + 1] = 9), t++, l[9]++;
                      for (; t <= 279; ) (c[2 * t + 1] = 7), t++, l[7]++;
                      for (; t <= 287; ) (c[2 * t + 1] = 8), t++, l[8]++;
                      for (x(c, 287, l), t = 0; t < 30; t++)
                        (d[2 * t + 1] = 5), (d[2 * t] = A(t, 5));
                      (b = new v(c, o, 257, 286, 15)),
                        (m = new v(d, a, 0, 30, 15)),
                        (g = new v(new Array(0), s, 0, 19, 7));
                    })(),
                    (E = !0)),
                    (t.l_desc = new _(t.dyn_ltree, b)),
                    (t.d_desc = new _(t.dyn_dtree, m)),
                    (t.bl_desc = new _(t.bl_tree, g)),
                    (t.bi_buf = 0),
                    (t.bi_valid = 0),
                    z(t);
                }),
                  (n._tr_stored_block = j),
                  (n._tr_flush_block = function (t, e, n, i) {
                    var r,
                      o,
                      a = 0;
                    t.level > 0
                      ? (2 === t.strm.data_type &&
                          (t.strm.data_type = (function (t) {
                            var e,
                              n = 4093624447;
                            for (e = 0; e <= 31; e++, n >>>= 1)
                              if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                            if (
                              0 !== t.dyn_ltree[18] ||
                              0 !== t.dyn_ltree[20] ||
                              0 !== t.dyn_ltree[26]
                            )
                              return 1;
                            for (e = 32; e < 256; e++)
                              if (0 !== t.dyn_ltree[2 * e]) return 1;
                            return 0;
                          })(t)),
                        D(t, t.l_desc),
                        D(t, t.d_desc),
                        (a = (function (t) {
                          var e;
                          for (
                            L(t, t.dyn_ltree, t.l_desc.max_code),
                              L(t, t.dyn_dtree, t.d_desc.max_code),
                              D(t, t.bl_desc),
                              e = 18;
                            e >= 3 && 0 === t.bl_tree[2 * l[e] + 1];
                            e--
                          );
                          return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                        })(t)),
                        (r = (t.opt_len + 3 + 7) >>> 3),
                        (o = (t.static_len + 3 + 7) >>> 3) <= r && (r = o))
                      : (r = o = n + 5),
                      n + 4 <= r && -1 !== e
                        ? j(t, e, n, i)
                        : 4 === t.strategy || o === r
                        ? (O(t, 2 + (i ? 1 : 0), 3), T(t, c, d))
                        : (O(t, 4 + (i ? 1 : 0), 3),
                          (function (t, e, n, i) {
                            var r;
                            for (
                              O(t, e - 257, 5),
                                O(t, n - 1, 5),
                                O(t, i - 4, 4),
                                r = 0;
                              r < i;
                              r++
                            )
                              O(t, t.bl_tree[2 * l[r] + 1], 3);
                            q(t, t.dyn_ltree, e - 1), q(t, t.dyn_dtree, n - 1);
                          })(
                            t,
                            t.l_desc.max_code + 1,
                            t.d_desc.max_code + 1,
                            a + 1
                          ),
                          T(t, t.dyn_ltree, t.dyn_dtree)),
                      z(t),
                      i && C(t);
                  }),
                  (n._tr_tally = function (t, e, n) {
                    return (
                      (t.pending_buf[t.d_buf + 2 * t.last_lit] =
                        (e >>> 8) & 255),
                      (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                      (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
                      t.last_lit++,
                      0 === e
                        ? t.dyn_ltree[2 * n]++
                        : (t.matches++,
                          e--,
                          t.dyn_ltree[2 * (p[n] + 256 + 1)]++,
                          t.dyn_dtree[2 * y(e)]++),
                      t.last_lit === t.lit_bufsize - 1
                    );
                  }),
                  (n._tr_align = function (t) {
                    O(t, 2, 3),
                      w(t, 256, c),
                      (function (t) {
                        16 === t.bi_valid
                          ? (M(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                          : t.bi_valid >= 8 &&
                            ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                            (t.bi_buf >>= 8),
                            (t.bi_valid -= 8));
                      })(t);
                  });
              },
              { "../utils/common": 27 },
            ],
            39: [
              function (t, e, n) {
                "use strict";
                e.exports = function () {
                  (this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0);
                };
              },
              {},
            ],
          },
          {},
          [9]
        )(9);
      });
    }).call(this, n(192).Buffer, n(56), n(30));
  },
  function (t, e) {},
  function (t, e) {},
  function (t, e, n) {
    var i = n(753);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '.vgt-table.striped tbody tr:nth-of-type(odd){background-color:rgba(51,68,109,.03)}.vgt-right-align{text-align:right}.vgt-left-align{text-align:left}.vgt-center-align{text-align:center}.vgt-pull-left{float:left!important}.vgt-pull-right{float:right!important}.vgt-clearfix:after{display:block;content:"";clear:both}.vgt-responsive{width:100%;overflow-x:auto;position:relative}.vgt-text-disabled{color:#909399}.sr-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.vgt-wrap{position:relative}.vgt-fixed-header{position:absolute;z-index:10;overflow-x:auto}table.vgt-table{font-size:16px;border-collapse:collapse;background-color:#fff;width:100%;max-width:100%;table-layout:auto;border:1px solid #dcdfe6}table.vgt-table td{padding:.75em;vertical-align:top;border-bottom:1px solid #dcdfe6;color:#606266}table.vgt-table tr.clickable{cursor:pointer}table.vgt-table tr.clickable:hover{background-color:#f1f5fd}.vgt-table th{padding:.75em 1.5em .75em .75em;vertical-align:middle;position:relative}.vgt-table th.sortable button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:none;position:absolute;top:0;left:0;width:100%;height:100%}.vgt-table th.sortable button:focus{outline:0}.vgt-table th.sortable button:after{margin-top:-7px;border-bottom:5px solid #606266}.vgt-table th.sortable button:after,.vgt-table th.sortable button:before{content:"";position:absolute;height:0;width:0;right:6px;top:50%;border-left:5px solid transparent;border-right:5px solid transparent}.vgt-table th.sortable button:before{margin-bottom:-7px;border-top:5px solid #606266}.vgt-table th.line-numbers,.vgt-table th.vgt-checkbox-col{padding:0 .75em;color:#606266;border-right:1px solid #dcdfe6;word-wrap:break-word;width:25px;text-align:center;background:linear-gradient(#f4f5f8,#f1f3f6)}.vgt-table th.filter-th{padding:.75em}.vgt-table th.vgt-row-header{border-bottom:2px solid #dcdfe6;border-top:2px solid #dcdfe6;background-color:#fafafb}.vgt-table th.vgt-row-header .triangle{width:24px;height:24px;border-radius:15%;position:relative;margin:0 8px}.vgt-table th.vgt-row-header .triangle:after{content:"";position:absolute;display:block;left:50%;top:50%;margin-top:-6px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid #606266;margin-left:-3px;transition:transform .3s ease}.vgt-table th.vgt-row-header .triangle.expand:after{transform:rotate(90deg)}.vgt-table thead th{color:#606266;vertical-align:bottom;border-bottom:1px solid #dcdfe6;padding-right:1.5em;background:linear-gradient(#f4f5f8,#f1f3f6)}.vgt-table thead th.vgt-checkbox-col{vertical-align:middle}.vgt-table thead th.sorting-asc button:after{border-bottom:5px solid #409eff}.vgt-table thead th.sorting-desc button:before{border-top:5px solid #409eff}.vgt-input,.vgt-select{width:100%;height:32px;line-height:1;display:block;font-size:14px;font-weight:400;padding:6px 12px;color:#606266;border-radius:4px;box-sizing:border-box;background-image:none;background-color:#fff;border:1px solid #dcdfe6;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.vgt-input::-moz-placeholder,.vgt-select::-moz-placeholder{color:#606266;opacity:.3}.vgt-input::placeholder,.vgt-select::placeholder{color:#606266;opacity:.3}.vgt-input:focus,.vgt-select:focus{outline:0;border-color:#409eff}.vgt-loading{position:absolute;width:100%;z-index:10;margin-top:117px}.vgt-loading__content{background-color:#c0dfff;color:#409eff;padding:7px 30px;border-radius:3px}.vgt-inner-wrap.is-loading{opacity:.5;pointer-events:none}.vgt-table.bordered td,.vgt-table.bordered th{border:1px solid #dcdfe6}.vgt-table.bordered th.vgt-row-header{border-bottom:3px solid #dcdfe6}.vgt-wrap.rtl{direction:rtl}.vgt-wrap.rtl .vgt-table.condensed thead th,.vgt-wrap.rtl .vgt-table thead th{padding-left:1.5em;padding-right:.75em}.vgt-wrap.rtl .vgt-table th.sorting-asc:after,.vgt-wrap.rtl .vgt-table th.sorting:after{margin-right:5px;margin-left:0}.vgt-wrap.rtl .vgt-table th.sortable:after,.vgt-wrap.rtl .vgt-table th.sortable:before{right:inherit;left:6px}.vgt-table.condensed td,.vgt-table.condensed th.vgt-row-header{padding:.4em}@media (max-width:576px){.vgt-compact *{box-sizing:border-box}.vgt-compact tbody,.vgt-compact td,.vgt-compact tr{display:block;width:100%}.vgt-compact thead{display:none}.vgt-compact tr{margin-bottom:15px}.vgt-compact td{text-align:right;position:relative}.vgt-compact td:before{content:attr(data-label);position:relative;float:left;left:0;width:40%;padding-left:10px;font-weight:700;text-align:left}.vgt-compact th.line-numbers{width:100%!important;display:block;padding:.3em 1em!important}}.vgt-global-search{padding:5px 0;display:flex;flex-wrap:nowrap;align-items:stretch;border:1px solid #dcdfe6;border-bottom:0;background:linear-gradient(#f4f5f8,#f1f3f6)}.vgt-global-search form{display:flex}.vgt-global-search form label{margin-top:3px}.vgt-global-search__input{position:relative;padding-left:40px;flex-grow:1}.vgt-global-search__input .input__icon{position:absolute;left:0;max-width:32px}.vgt-global-search__input .input__icon .magnifying-glass{margin-top:3px;margin-left:8px;display:block;width:16px;height:16px;border:2px solid #494949;position:relative;border-radius:50%}.vgt-global-search__input .input__icon .magnifying-glass:before{content:"";display:block;position:absolute;right:-7px;bottom:-5px;background:#494949;width:8px;height:4px;border-radius:2px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg)}.vgt-global-search__actions{margin-left:10px}.vgt-selection-info-row{background:#fdf9e8;padding:5px 16px;font-size:13px;border-top:1px solid #dcdfe6;border-left:1px solid #dcdfe6;border-right:1px solid #dcdfe6;color:#d3aa3b;font-weight:700}.vgt-selection-info-row a{font-weight:700;display:inline-block;margin-left:10px}.vgt-wrap__actions-footer,.vgt-wrap__footer{border:1px solid #dcdfe6}.vgt-wrap__footer{color:#606266;font-size:1.1rem;padding:1em;background:linear-gradient(#f4f5f8,#f1f3f6)}.vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap__footer .footer__row-count__label,.vgt-wrap__footer .footer__row-count__select{display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__row-count__label{font-size:1.1rem}.vgt-wrap__footer .footer__row-count__select{font-size:1.1rem;background-color:transparent;width:auto;border:0;border-radius:0;height:auto;margin-left:8px;color:#606266;font-weight:700;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 15px 0 5px}.vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap__footer .footer__row-count__select:focus{outline:0;border-color:#409eff}.vgt-wrap__footer .footer__row-count:after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border:6px solid transparent;border-top-color:#606266;border-bottom:none;pointer-events:none}.vgt-wrap__footer .footer__navigation{font-size:1.1rem}.vgt-wrap__footer .footer__navigation>button:first-of-type{margin-right:16px}.vgt-wrap__footer .footer__navigation__info,.vgt-wrap__footer .footer__navigation__page-btn,.vgt-wrap__footer .footer__navigation__page-info{display:inline-block;vertical-align:middle;color:#909399}.vgt-wrap__footer .footer__navigation__page-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:none;text-decoration:none;color:#606266;font-weight:700;white-space:nowrap;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-btn:hover{cursor:pointer}.vgt-wrap__footer .footer__navigation__page-btn.disabled,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover{opacity:.5;cursor:not-allowed}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#606266}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#606266}.vgt-wrap__footer .footer__navigation__page-btn span{display:inline-block;vertical-align:middle;font-size:1.1rem}.vgt-wrap__footer .footer__navigation__page-btn .chevron{width:24px;height:24px;border-radius:15%;position:relative;margin:0;display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-btn .chevron:after{content:"";position:absolute;display:block;left:50%;top:50%;margin-top:-6px;border-top:6px solid transparent;border-bottom:6px solid transparent}.vgt-wrap__footer .footer__navigation__page-btn .chevron.left:after{border-right:6px solid #409eff;margin-left:-3px}.vgt-wrap__footer .footer__navigation__page-btn .chevron.right:after{border-left:6px solid #409eff;margin-left:-3px}.vgt-wrap__footer .footer__navigation__info,.vgt-wrap__footer .footer__navigation__page-info{display:inline-block;margin:0 16px}.vgt-wrap__footer .footer__navigation__page-info span{display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-info__current-entry{width:30px;text-align:center;vertical-align:middle;display:inline-block;margin:0 10px;font-weight:700}@media only screen and (max-width:750px){.vgt-wrap__footer .footer__navigation__info{display:none}.vgt-wrap__footer .footer__navigation__page-btn{margin-left:16px}}.vgt-table.nocturnal{border:1px solid #435169;background-color:#324057}.vgt-table.nocturnal tr.clickable:hover{background-color:#445168}.vgt-table.nocturnal td{border-bottom:1px solid #435169;color:#c7ced8}.vgt-table.nocturnal th.line-numbers,.vgt-table.nocturnal th.vgt-checkbox-col{color:#c7ced8;border-right:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-table.nocturnal thead th{color:#c7ced8;border-bottom:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-table.nocturnal thead th.sortable:before{border-top-color:#3e5170}.vgt-table.nocturnal thead th.sortable:after{border-bottom-color:#3e5170}.vgt-table.nocturnal thead th.sortable.sorting-asc{color:#fff}.vgt-table.nocturnal thead th.sortable.sorting-asc:after{border-bottom-color:#409eff}.vgt-table.nocturnal thead th.sortable.sorting-desc{color:#fff}.vgt-table.nocturnal thead th.sortable.sorting-desc:before{border-top-color:#409eff}.vgt-table.nocturnal.bordered td,.vgt-table.nocturnal.bordered th{border:1px solid #435169}.vgt-table.nocturnal .vgt-input,.vgt-table.nocturnal .vgt-select{color:#c7ced8;background-color:#232d3f;border:1px solid #435169}.vgt-table.nocturnal .vgt-input::-moz-placeholder,.vgt-table.nocturnal .vgt-select::-moz-placeholder{color:#c7ced8;opacity:.3}.vgt-table.nocturnal .vgt-input::placeholder,.vgt-table.nocturnal .vgt-select::placeholder{color:#c7ced8;opacity:.3}.vgt-wrap.nocturnal .vgt-wrap__footer{color:#c7ced8;border:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count{position:relative}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label{color:#8290a7}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select{color:#c7ced8;background:#232d3f;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:15px;padding-left:10px;border-radius:3px;text-align:center}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus{border-color:#409eff}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count:after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border:6px solid transparent;border-top-color:#c7ced8;border-bottom:none;pointer-events:none}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn{color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info{color:#8290a7}.vgt-wrap.nocturnal .vgt-global-search{border:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #3f4c63}.vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before{background:#3f4c63}.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input,.vgt-wrap.nocturnal .vgt-global-search__input .vgt-select{color:#c7ced8;background-color:#232d3f;border:1px solid #435169}.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::-moz-placeholder,.vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::-moz-placeholder{color:#c7ced8;opacity:.3}.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder{color:#c7ced8;opacity:.3}.vgt-table.black-rhino{border:1px solid #435169;background-color:#dfe5ee}.vgt-table.black-rhino tr.clickable:hover{background-color:#fff}.vgt-table.black-rhino td{border-bottom:1px solid #bbc5d6;color:#49515e}.vgt-table.black-rhino th.line-numbers,.vgt-table.black-rhino th.vgt-checkbox-col{color:#dae2f0;border-right:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-table.black-rhino thead th{color:#dae2f0;text-shadow:1px 1px #3e5170;border-bottom:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-table.black-rhino thead th.sortable:before{border-top-color:#607498}.vgt-table.black-rhino thead th.sortable:after{border-bottom-color:#607498}.vgt-table.black-rhino thead th.sortable.sorting-asc{color:#fff}.vgt-table.black-rhino thead th.sortable.sorting-asc:after{border-bottom-color:#409eff}.vgt-table.black-rhino thead th.sortable.sorting-desc:before{border-top-color:#409eff}.vgt-table.black-rhino.bordered td{border:1px solid #bbc5d6}.vgt-table.black-rhino.bordered th{border:1px solid #435169}.vgt-table.black-rhino .vgt-input,.vgt-table.black-rhino .vgt-select{color:#dae2f0;background-color:#34445f;border:1px solid transparent}.vgt-table.black-rhino .vgt-input::-moz-placeholder,.vgt-table.black-rhino .vgt-select::-moz-placeholder{color:#dae2f0;opacity:.3}.vgt-table.black-rhino .vgt-input::placeholder,.vgt-table.black-rhino .vgt-select::placeholder{color:#dae2f0;opacity:.3}.vgt-wrap.black-rhino .vgt-wrap__footer{color:#dae2f0;border:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label{color:#98a5b9}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select{color:#49515e;background:#34445f;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:15px;padding-left:5px;border-radius:3px}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus{border-color:#409eff}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count:after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border:6px solid transparent;border-top-color:#49515e;border-bottom:none;pointer-events:none}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn{color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info{color:#dae2f0}.vgt-wrap.black-rhino .vgt-global-search{border:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #3f4c63}.vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before{background:#3f4c63}.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input,.vgt-wrap.black-rhino .vgt-global-search__input .vgt-select{color:#dae2f0;background-color:#44516c;border:1px solid transparent}.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::-moz-placeholder,.vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::-moz-placeholder{color:#dae2f0;opacity:.3}.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder{color:#dae2f0;opacity:.3}.vgt-inner-wrap{border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(50,50,93,.1),0 1px 2px 0 rgba(50,50,93,.06)}.vgt-table.polar-bear{border-spacing:0;border-collapse:separate;font-size:1rem;background-color:#fff;border:1px solid #e3e8ee;border-bottom:none;border-radius:.25rem}.vgt-table.polar-bear td{padding:1em .75em;border-bottom:1px solid #e4ebf3;color:#525f7f}.vgt-table.polar-bear td.vgt-right-align{text-align:right}.vgt-table.polar-bear th.line-numbers,.vgt-table.polar-bear th.vgt-checkbox-col{color:#394567;border-right:1px solid #e3e8ee;background:#f7fafc}.vgt-table.polar-bear thead th{color:#667b94;font-weight:600;border-bottom:1px solid #e3e8ee;background:#f7fafc}.vgt-table.polar-bear thead th.sorting-asc,.vgt-table.polar-bear thead th.sorting-desc{color:#5e72e4}.vgt-table.polar-bear thead th.sorting-desc:before{border-top:5px solid #7485e8}.vgt-table.polar-bear thead th.sorting-asc:after{border-bottom:5px solid #7485e8}.vgt-table.polar-bear thead th .vgt-input,.vgt-table.polar-bear thead th .vgt-select{height:2.75em;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-table.polar-bear thead th .vgt-input:focus,.vgt-table.polar-bear thead th .vgt-select:focus{outline:0;border-color:#cae0fe}.vgt-table.polar-bear thead tr:first-child th:first-child{border-top-left-radius:.25rem}.vgt-table.polar-bear thead tr:first-child th:last-child{border-top-right-radius:.25rem}.vgt-table.polar-bear.bordered td{border:1px solid #e3e8ee;background:#fff}.vgt-table.polar-bear.bordered th{border:1px solid #e3e8ee}.vgt-wrap.polar-bear .vgt-wrap__footer{color:#394567;border:1px solid #e3e8ee;border-bottom:0;border-top:0;background:linear-gradient(#f7fafc,#f7fafc)}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label{color:#98a5b9}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select{text-align:center;color:#525f7f;background:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:5px 30px 5px 5px;border-radius:3px;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus{border-color:#5e72e4}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count:after{content:"";display:block;position:absolute;height:0;width:0;right:15px;top:50%;margin-top:-3px;border:6px solid transparent;border-top-color:#525f7f;border-bottom:none;pointer-events:none}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn{color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info{color:#394567}.vgt-wrap.polar-bear .vgt-global-search{border:1px solid #e3e8ee;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#f7fafc}.vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #dde3ea}.vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before{background:#dde3ea}.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input,.vgt-wrap.polar-bear .vgt-global-search__input .vgt-select{height:2.75em;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::-moz-placeholder,.vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::-moz-placeholder{color:#394567;opacity:.3}.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder{color:#394567;opacity:.3}',
      "",
    ]);
  },
  function (t, e, n) {
    (function (e) {
      var i;
      "undefined" != typeof globalThis
        ? globalThis
        : void 0 !== this ||
          ("undefined" != typeof window
            ? window
            : "undefined" != typeof self && self),
        (i = function (t) {
          return (function () {
            "use strict";
            var e = {
                172: function (t, e) {
                  var n,
                    i =
                      (this && this.__extends) ||
                      ((n = function (t, e) {
                        return (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                              t.__proto__ = e;
                            }) ||
                          function (t, e) {
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) &&
                                (t[n] = e[n]);
                          })(t, e);
                      }),
                      function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Class extends value " +
                              String(e) +
                              " is not a constructor or null"
                          );
                        function i() {
                          this.constructor = t;
                        }
                        n(t, e),
                          (t.prototype =
                            null === e
                              ? Object.create(e)
                              : ((i.prototype = e.prototype), new i()));
                      });
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.CellHookData = e.HookData = void 0);
                  var r = function (t, e, n) {
                    (this.table = e),
                      (this.pageNumber = e.pageNumber),
                      (this.pageCount = this.pageNumber),
                      (this.settings = e.settings),
                      (this.cursor = n),
                      (this.doc = t.getDocument());
                  };
                  e.HookData = r;
                  var o = (function (t) {
                    function e(e, n, i, r, o, a) {
                      var s = t.call(this, e, n, a) || this;
                      return (
                        (s.cell = i),
                        (s.row = r),
                        (s.column = o),
                        (s.section = r.section),
                        s
                      );
                    }
                    return i(e, t), e;
                  })(r);
                  e.CellHookData = o;
                },
                340: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  var i = n(4),
                    r = n(136),
                    o = n(744),
                    a = n(776),
                    s = n(664),
                    l = n(972);
                  e.default = function (t) {
                    (t.API.autoTable = function () {
                      for (var t, e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      1 === e.length
                        ? (t = e[0])
                        : (((t = e[2] || {}).columns = e[0]), (t.body = e[1]));
                      var i = (0, a.parseInput)(this, t),
                        r = (0, l.createTable)(this, i);
                      return (0, s.drawTable)(this, r), this;
                    }),
                      (t.API.lastAutoTable = !1),
                      (t.API.previousAutoTable = !1),
                      (t.API.autoTable.previous = !1),
                      (t.API.autoTableText = function (t, e, n, i) {
                        (0, r.default)(t, e, n, i, this);
                      }),
                      (t.API.autoTableSetDefaults = function (t) {
                        return o.DocHandler.setDefaults(t, this), this;
                      }),
                      (t.autoTableSetDefaults = function (t, e) {
                        o.DocHandler.setDefaults(t, e);
                      }),
                      (t.API.autoTableHtmlToJson = function (t, e) {
                        var n;
                        if (
                          (void 0 === e && (e = !1),
                          "undefined" == typeof window)
                        )
                          return null;
                        var r = new o.DocHandler(this),
                          a = (0, i.parseHtml)(r, t, window, e, !1),
                          s = a.head,
                          l = a.body;
                        return {
                          columns:
                            (null === (n = s[0]) || void 0 === n
                              ? void 0
                              : n.map(function (t) {
                                  return t.content;
                                })) || [],
                          rows: l,
                          data: l,
                        };
                      }),
                      (t.API.autoTableEndPosY = function () {
                        var t = this.lastAutoTable;
                        return t && t.finalY ? t.finalY : 0;
                      }),
                      (t.API.autoTableAddPageContent = function (e) {
                        return (
                          t.API.autoTable.globalDefaults ||
                            (t.API.autoTable.globalDefaults = {}),
                          (t.API.autoTable.globalDefaults.addPageContent = e),
                          this
                        );
                      }),
                      (t.API.autoTableAddPage = function () {
                        return this.addPage(), this;
                      });
                  };
                },
                136: function (t, e) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = function (t, e, n, i, r) {
                      i = i || {};
                      var o = r.internal.scaleFactor,
                        a = r.internal.getFontSize() / o,
                        s =
                          a *
                          (r.getLineHeightFactor
                            ? r.getLineHeightFactor()
                            : 1.15),
                        l = "",
                        c = 1;
                      if (
                        (("middle" !== i.valign &&
                          "bottom" !== i.valign &&
                          "center" !== i.halign &&
                          "right" !== i.halign) ||
                          (c =
                            (l =
                              "string" == typeof t ? t.split(/\r\n|\r|\n/g) : t)
                              .length || 1),
                        (n += a * (2 - 1.15)),
                        "middle" === i.valign
                          ? (n -= (c / 2) * s)
                          : "bottom" === i.valign && (n -= c * s),
                        "center" === i.halign || "right" === i.halign)
                      ) {
                        var d = a;
                        if (
                          ("center" === i.halign && (d *= 0.5), l && c >= 1)
                        ) {
                          for (var u = 0; u < l.length; u++)
                            r.text(l[u], e - r.getStringUnitWidth(l[u]) * d, n),
                              (n += s);
                          return r;
                        }
                        e -= r.getStringUnitWidth(t) * d;
                      }
                      return (
                        "justify" === i.halign
                          ? r.text(t, e, n, {
                              maxWidth: i.maxWidth || 100,
                              align: "justify",
                            })
                          : r.text(t, e, n),
                        r
                      );
                    });
                },
                420: function (t, e) {
                  function n(t, e) {
                    var n = t > 0,
                      i = e || 0 === e;
                    return n && i ? "DF" : n ? "S" : i ? "F" : null;
                  }
                  function i(t, e) {
                    var n, i, r, o;
                    if (((t = t || e), Array.isArray(t))) {
                      if (t.length >= 4)
                        return {
                          top: t[0],
                          right: t[1],
                          bottom: t[2],
                          left: t[3],
                        };
                      if (3 === t.length)
                        return {
                          top: t[0],
                          right: t[1],
                          bottom: t[2],
                          left: t[1],
                        };
                      if (2 === t.length)
                        return {
                          top: t[0],
                          right: t[1],
                          bottom: t[0],
                          left: t[1],
                        };
                      t = 1 === t.length ? t[0] : e;
                    }
                    return "object" == typeof t
                      ? ("number" == typeof t.vertical &&
                          ((t.top = t.vertical), (t.bottom = t.vertical)),
                        "number" == typeof t.horizontal &&
                          ((t.right = t.horizontal), (t.left = t.horizontal)),
                        {
                          left: null !== (n = t.left) && void 0 !== n ? n : e,
                          top: null !== (i = t.top) && void 0 !== i ? i : e,
                          right: null !== (r = t.right) && void 0 !== r ? r : e,
                          bottom:
                            null !== (o = t.bottom) && void 0 !== o ? o : e,
                        })
                      : ("number" != typeof t && (t = e),
                        { top: t, right: t, bottom: t, left: t });
                  }
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.getPageAvailableWidth =
                      e.parseSpacing =
                      e.getFillStyle =
                      e.addTableBorder =
                      e.getStringWidth =
                        void 0),
                    (e.getStringWidth = function (t, e, n) {
                      return (
                        n.applyStyles(e, !0),
                        (Array.isArray(t) ? t : [t])
                          .map(function (t) {
                            return n.getTextWidth(t);
                          })
                          .reduce(function (t, e) {
                            return Math.max(t, e);
                          }, 0)
                      );
                    }),
                    (e.addTableBorder = function (t, e, i, r) {
                      var o = e.settings.tableLineWidth,
                        a = e.settings.tableLineColor;
                      t.applyStyles({ lineWidth: o, lineColor: a });
                      var s = n(o, !1);
                      s &&
                        t.rect(
                          i.x,
                          i.y,
                          e.getWidth(t.pageSize().width),
                          r.y - i.y,
                          s
                        );
                    }),
                    (e.getFillStyle = n),
                    (e.parseSpacing = i),
                    (e.getPageAvailableWidth = function (t, e) {
                      var n = i(e.settings.margin, 0);
                      return t.pageSize().width - (n.left + n.right);
                    });
                },
                796: function (t, e) {
                  var n,
                    i =
                      (this && this.__extends) ||
                      ((n = function (t, e) {
                        return (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                              t.__proto__ = e;
                            }) ||
                          function (t, e) {
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) &&
                                (t[n] = e[n]);
                          })(t, e);
                      }),
                      function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Class extends value " +
                              String(e) +
                              " is not a constructor or null"
                          );
                        function i() {
                          this.constructor = t;
                        }
                        n(t, e),
                          (t.prototype =
                            null === e
                              ? Object.create(e)
                              : ((i.prototype = e.prototype), new i()));
                      });
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.getTheme = e.defaultStyles = e.HtmlRowInput = void 0);
                  var r = (function (t) {
                    function e(e) {
                      var n = t.call(this) || this;
                      return (n._element = e), n;
                    }
                    return i(e, t), e;
                  })(Array);
                  (e.HtmlRowInput = r),
                    (e.defaultStyles = function (t) {
                      return {
                        font: "helvetica",
                        fontStyle: "normal",
                        overflow: "linebreak",
                        fillColor: !1,
                        textColor: 20,
                        halign: "left",
                        valign: "top",
                        fontSize: 10,
                        cellPadding: 5 / t,
                        lineColor: 200,
                        lineWidth: 0,
                        cellWidth: "auto",
                        minCellHeight: 0,
                        minCellWidth: 0,
                      };
                    }),
                    (e.getTheme = function (t) {
                      return {
                        striped: {
                          table: {
                            fillColor: 255,
                            textColor: 80,
                            fontStyle: "normal",
                          },
                          head: {
                            textColor: 255,
                            fillColor: [41, 128, 185],
                            fontStyle: "bold",
                          },
                          body: {},
                          foot: {
                            textColor: 255,
                            fillColor: [41, 128, 185],
                            fontStyle: "bold",
                          },
                          alternateRow: { fillColor: 245 },
                        },
                        grid: {
                          table: {
                            fillColor: 255,
                            textColor: 80,
                            fontStyle: "normal",
                            lineWidth: 0.1,
                          },
                          head: {
                            textColor: 255,
                            fillColor: [26, 188, 156],
                            fontStyle: "bold",
                            lineWidth: 0,
                          },
                          body: {},
                          foot: {
                            textColor: 255,
                            fillColor: [26, 188, 156],
                            fontStyle: "bold",
                            lineWidth: 0,
                          },
                          alternateRow: {},
                        },
                        plain: {
                          head: { fontStyle: "bold" },
                          foot: { fontStyle: "bold" },
                        },
                      }[t];
                    });
                },
                903: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.parseCss = void 0);
                  var i = n(420);
                  function r(t, e) {
                    var n = (function t(e, n) {
                      var i = n(e);
                      return "rgba(0, 0, 0, 0)" === i ||
                        "transparent" === i ||
                        "initial" === i ||
                        "inherit" === i
                        ? null == e.parentElement
                          ? null
                          : t(e.parentElement, n)
                        : i;
                    })(t, e);
                    if (!n) return null;
                    var i = n.match(
                      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/
                    );
                    if (!i || !Array.isArray(i)) return null;
                    var r = [parseInt(i[1]), parseInt(i[2]), parseInt(i[3])];
                    return 0 === parseInt(i[4]) ||
                      isNaN(r[0]) ||
                      isNaN(r[1]) ||
                      isNaN(r[2])
                      ? null
                      : r;
                  }
                  e.parseCss = function (t, e, n, o, a) {
                    var s = {},
                      l = r(e, function (t) {
                        return a.getComputedStyle(t).backgroundColor;
                      });
                    null != l && (s.fillColor = l);
                    var c = r(e, function (t) {
                      return a.getComputedStyle(t).color;
                    });
                    null != c && (s.textColor = c);
                    var d = (function (t, e) {
                      var n = [
                          t.paddingTop,
                          t.paddingRight,
                          t.paddingBottom,
                          t.paddingLeft,
                        ],
                        r = 96 / (72 / e),
                        o =
                          (parseInt(t.lineHeight) - parseInt(t.fontSize)) /
                          e /
                          2,
                        a = n.map(function (t) {
                          return parseInt(t || "0") / r;
                        }),
                        s = (0, i.parseSpacing)(a, 0);
                      return (
                        o > s.top && (s.top = o),
                        o > s.bottom && (s.bottom = o),
                        s
                      );
                    })(o, n);
                    d && (s.cellPadding = d);
                    var u = "borderTopColor",
                      p = (96 / 72) * n,
                      h = o.borderTopWidth;
                    if (
                      o.borderBottomWidth === h &&
                      o.borderRightWidth === h &&
                      o.borderLeftWidth === h
                    ) {
                      var f = (parseFloat(h) || 0) / p;
                      f && (s.lineWidth = f);
                    } else
                      (s.lineWidth = {
                        top: (parseFloat(o.borderTopWidth) || 0) / p,
                        right: (parseFloat(o.borderRightWidth) || 0) / p,
                        bottom: (parseFloat(o.borderBottomWidth) || 0) / p,
                        left: (parseFloat(o.borderLeftWidth) || 0) / p,
                      }),
                        s.lineWidth.top ||
                          (s.lineWidth.right
                            ? (u = "borderRightColor")
                            : s.lineWidth.bottom
                            ? (u = "borderBottomColor")
                            : s.lineWidth.left && (u = "borderLeftColor"));
                    var b = r(e, function (t) {
                      return a.getComputedStyle(t)[u];
                    });
                    null != b && (s.lineColor = b);
                    var m = ["left", "right", "center", "justify"];
                    -1 !== m.indexOf(o.textAlign) && (s.halign = o.textAlign),
                      -1 !==
                        (m = ["middle", "bottom", "top"]).indexOf(
                          o.verticalAlign
                        ) && (s.valign = o.verticalAlign);
                    var g = parseInt(o.fontSize || "");
                    isNaN(g) || (s.fontSize = g / (96 / 72));
                    var v = (function (t) {
                      var e = "";
                      return (
                        ("bold" === t.fontWeight ||
                          "bolder" === t.fontWeight ||
                          parseInt(t.fontWeight) >= 700) &&
                          (e = "bold"),
                        ("italic" !== t.fontStyle &&
                          "oblique" !== t.fontStyle) ||
                          (e += "italic"),
                        e
                      );
                    })(o);
                    v && (s.fontStyle = v);
                    var _ = (o.fontFamily || "").toLowerCase();
                    return -1 !== t.indexOf(_) && (s.font = _), s;
                  };
                },
                744: function (t, e) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.DocHandler = void 0);
                  var n = {},
                    i = (function () {
                      function t(t) {
                        (this.jsPDFDocument = t),
                          (this.userStyles = {
                            textColor: t.getTextColor
                              ? this.jsPDFDocument.getTextColor()
                              : 0,
                            fontSize: t.internal.getFontSize(),
                            fontStyle: t.internal.getFont().fontStyle,
                            font: t.internal.getFont().fontName,
                            lineWidth: t.getLineWidth
                              ? this.jsPDFDocument.getLineWidth()
                              : 0,
                            lineColor: t.getDrawColor
                              ? this.jsPDFDocument.getDrawColor()
                              : 0,
                          });
                      }
                      return (
                        (t.setDefaults = function (t, e) {
                          void 0 === e && (e = null),
                            e ? (e.__autoTableDocumentDefaults = t) : (n = t);
                        }),
                        (t.unifyColor = function (t) {
                          return Array.isArray(t)
                            ? t
                            : "number" == typeof t
                            ? [t, t, t]
                            : "string" == typeof t
                            ? [t]
                            : null;
                        }),
                        (t.prototype.applyStyles = function (e, n) {
                          var i, r, o;
                          void 0 === n && (n = !1),
                            e.fontStyle &&
                              this.jsPDFDocument.setFontStyle &&
                              this.jsPDFDocument.setFontStyle(e.fontStyle);
                          var a = this.jsPDFDocument.internal.getFont(),
                            s = a.fontStyle,
                            l = a.fontName;
                          if ((e.font && (l = e.font), e.fontStyle)) {
                            s = e.fontStyle;
                            var c = this.getFontList()[l];
                            c &&
                              -1 === c.indexOf(s) &&
                              (this.jsPDFDocument.setFontStyle &&
                                this.jsPDFDocument.setFontStyle(c[0]),
                              (s = c[0]));
                          }
                          if (
                            (this.jsPDFDocument.setFont(l, s),
                            e.fontSize &&
                              this.jsPDFDocument.setFontSize(e.fontSize),
                            !n)
                          ) {
                            var d = t.unifyColor(e.fillColor);
                            d &&
                              (i = this.jsPDFDocument).setFillColor.apply(i, d),
                              (d = t.unifyColor(e.textColor)) &&
                                (r = this.jsPDFDocument).setTextColor.apply(
                                  r,
                                  d
                                ),
                              (d = t.unifyColor(e.lineColor)) &&
                                (o = this.jsPDFDocument).setDrawColor.apply(
                                  o,
                                  d
                                ),
                              "number" == typeof e.lineWidth &&
                                this.jsPDFDocument.setLineWidth(e.lineWidth);
                          }
                        }),
                        (t.prototype.splitTextToSize = function (t, e, n) {
                          return this.jsPDFDocument.splitTextToSize(t, e, n);
                        }),
                        (t.prototype.rect = function (t, e, n, i, r) {
                          return this.jsPDFDocument.rect(t, e, n, i, r);
                        }),
                        (t.prototype.getLastAutoTable = function () {
                          return this.jsPDFDocument.lastAutoTable || null;
                        }),
                        (t.prototype.getTextWidth = function (t) {
                          return this.jsPDFDocument.getTextWidth(t);
                        }),
                        (t.prototype.getDocument = function () {
                          return this.jsPDFDocument;
                        }),
                        (t.prototype.setPage = function (t) {
                          this.jsPDFDocument.setPage(t);
                        }),
                        (t.prototype.addPage = function () {
                          return this.jsPDFDocument.addPage();
                        }),
                        (t.prototype.getFontList = function () {
                          return this.jsPDFDocument.getFontList();
                        }),
                        (t.prototype.getGlobalOptions = function () {
                          return n || {};
                        }),
                        (t.prototype.getDocumentOptions = function () {
                          return (
                            this.jsPDFDocument.__autoTableDocumentDefaults || {}
                          );
                        }),
                        (t.prototype.pageSize = function () {
                          var t = this.jsPDFDocument.internal.pageSize;
                          return (
                            null == t.width &&
                              (t = {
                                width: t.getWidth(),
                                height: t.getHeight(),
                              }),
                            t
                          );
                        }),
                        (t.prototype.scaleFactor = function () {
                          return this.jsPDFDocument.internal.scaleFactor;
                        }),
                        (t.prototype.getLineHeightFactor = function () {
                          var t = this.jsPDFDocument;
                          return t.getLineHeightFactor
                            ? t.getLineHeightFactor()
                            : 1.15;
                        }),
                        (t.prototype.getLineHeight = function (t) {
                          return (
                            (t / this.scaleFactor()) *
                            this.getLineHeightFactor()
                          );
                        }),
                        (t.prototype.pageNumber = function () {
                          var t =
                            this.jsPDFDocument.internal.getCurrentPageInfo();
                          return t
                            ? t.pageNumber
                            : this.jsPDFDocument.internal.getNumberOfPages();
                        }),
                        t
                      );
                    })();
                  e.DocHandler = i;
                },
                4: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.parseHtml = void 0);
                  var i = n(903),
                    r = n(796);
                  function o(t, e, n, o, s, l) {
                    for (
                      var c = new r.HtmlRowInput(o), d = 0;
                      d < o.cells.length;
                      d++
                    ) {
                      var u = o.cells[d],
                        p = n.getComputedStyle(u);
                      if (s || "none" !== p.display) {
                        var h = void 0;
                        l && (h = (0, i.parseCss)(t, u, e, p, n)),
                          c.push({
                            rowSpan: u.rowSpan,
                            colSpan: u.colSpan,
                            styles: h,
                            _element: u,
                            content: a(u),
                          });
                      }
                    }
                    var f = n.getComputedStyle(o);
                    if (c.length > 0 && (s || "none" !== f.display)) return c;
                  }
                  function a(t) {
                    var e = t.cloneNode(!0);
                    return (
                      (e.innerHTML = e.innerHTML
                        .replace(/\n/g, "")
                        .replace(/ +/g, " ")),
                      (e.innerHTML = e.innerHTML
                        .split(/<br.*?>/)
                        .map(function (t) {
                          return t.trim();
                        })
                        .join("\n")),
                      e.innerText || e.textContent || ""
                    );
                  }
                  e.parseHtml = function (t, e, n, i, r) {
                    var a, s, l;
                    void 0 === i && (i = !1),
                      void 0 === r && (r = !1),
                      (l =
                        "string" == typeof e ? n.document.querySelector(e) : e);
                    var c = Object.keys(t.getFontList()),
                      d = t.scaleFactor(),
                      u = [],
                      p = [],
                      h = [];
                    if (!l) return { head: u, body: p, foot: h };
                    for (var f = 0; f < l.rows.length; f++) {
                      var b = l.rows[f],
                        m =
                          null ===
                            (s =
                              null ===
                                (a = null == b ? void 0 : b.parentElement) ||
                              void 0 === a
                                ? void 0
                                : a.tagName) || void 0 === s
                            ? void 0
                            : s.toLowerCase(),
                        g = o(c, d, n, b, i, r);
                      g &&
                        ("thead" === m
                          ? u.push(g)
                          : "tfoot" === m
                          ? h.push(g)
                          : p.push(g));
                    }
                    return { head: u, body: p, foot: h };
                  };
                },
                776: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.parseInput = void 0);
                  var i = n(4),
                    r = n(356),
                    o = n(420),
                    a = n(744),
                    s = n(792);
                  function l(t, e, n) {
                    var i = t[0] || e[0] || n[0] || [],
                      r = [];
                    return (
                      Object.keys(i)
                        .filter(function (t) {
                          return "_element" !== t;
                        })
                        .forEach(function (t) {
                          var e,
                            n = 1;
                          "object" !=
                            typeof (e = Array.isArray(i)
                              ? i[parseInt(t)]
                              : i[t]) ||
                            Array.isArray(e) ||
                            (n = (null == e ? void 0 : e.colSpan) || 1);
                          for (var o = 0; o < n; o++) {
                            var a = {
                              dataKey: Array.isArray(i)
                                ? r.length
                                : t + (o > 0 ? "_".concat(o) : ""),
                            };
                            r.push(a);
                          }
                        }),
                      r
                    );
                  }
                  e.parseInput = function (t, e) {
                    var n = new a.DocHandler(t),
                      c = n.getDocumentOptions(),
                      d = n.getGlobalOptions();
                    (0, s.default)(n, d, c, e);
                    var u,
                      p = (0, r.assign)({}, d, c, e);
                    "undefined" != typeof window && (u = window);
                    var h = (function (t, e, n) {
                        for (
                          var i = {
                              styles: {},
                              headStyles: {},
                              bodyStyles: {},
                              footStyles: {},
                              alternateRowStyles: {},
                              columnStyles: {},
                            },
                            o = function (o) {
                              if ("columnStyles" === o) {
                                var a = t[o],
                                  s = e[o],
                                  l = n[o];
                                i.columnStyles = (0, r.assign)({}, a, s, l);
                              } else {
                                var c = [t, e, n].map(function (t) {
                                  return t[o] || {};
                                });
                                i[o] = (0, r.assign)({}, c[0], c[1], c[2]);
                              }
                            },
                            a = 0,
                            s = Object.keys(i);
                          a < s.length;
                          a++
                        )
                          o(s[a]);
                        return i;
                      })(d, c, e),
                      f = (function (t, e, n) {
                        for (
                          var i = {
                              didParseCell: [],
                              willDrawCell: [],
                              didDrawCell: [],
                              willDrawPage: [],
                              didDrawPage: [],
                            },
                            r = 0,
                            o = [t, e, n];
                          r < o.length;
                          r++
                        ) {
                          var a = o[r];
                          a.didParseCell && i.didParseCell.push(a.didParseCell),
                            a.willDrawCell &&
                              i.willDrawCell.push(a.willDrawCell),
                            a.didDrawCell && i.didDrawCell.push(a.didDrawCell),
                            a.willDrawPage &&
                              i.willDrawPage.push(a.willDrawPage),
                            a.didDrawPage && i.didDrawPage.push(a.didDrawPage);
                        }
                        return i;
                      })(d, c, e),
                      b = (function (t, e) {
                        var n,
                          i,
                          r,
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
                          g = (0, o.parseSpacing)(
                            e.margin,
                            40 / t.scaleFactor()
                          ),
                          v =
                            null !==
                              (n = (function (t, e) {
                                var n = t.getLastAutoTable(),
                                  i = t.scaleFactor(),
                                  r = t.pageNumber(),
                                  o = !1;
                                return (
                                  n &&
                                    n.startPageNumber &&
                                    (o =
                                      n.startPageNumber + n.pageNumber - 1 ===
                                      r),
                                  "number" == typeof e
                                    ? e
                                    : (null != e && !1 !== e) ||
                                      !o ||
                                      null == (null == n ? void 0 : n.finalY)
                                    ? null
                                    : n.finalY + 20 / i
                                );
                              })(t, e.startY)) && void 0 !== n
                              ? n
                              : g.top;
                        (b =
                          !0 === e.showFoot
                            ? "everyPage"
                            : !1 === e.showFoot
                            ? "never"
                            : null !== (i = e.showFoot) && void 0 !== i
                            ? i
                            : "everyPage"),
                          (m =
                            !0 === e.showHead
                              ? "everyPage"
                              : !1 === e.showHead
                              ? "never"
                              : null !== (r = e.showHead) && void 0 !== r
                              ? r
                              : "everyPage");
                        var _ = null !== (a = e.useCss) && void 0 !== a && a,
                          y = e.theme || (_ ? "plain" : "striped"),
                          M = !!e.horizontalPageBreak,
                          O =
                            null !== (s = e.horizontalPageBreakRepeat) &&
                            void 0 !== s
                              ? s
                              : null;
                        return {
                          includeHiddenHtml:
                            null !== (l = e.includeHiddenHtml) &&
                            void 0 !== l &&
                            l,
                          useCss: _,
                          theme: y,
                          startY: v,
                          margin: g,
                          pageBreak:
                            null !== (c = e.pageBreak) && void 0 !== c
                              ? c
                              : "auto",
                          rowPageBreak:
                            null !== (d = e.rowPageBreak) && void 0 !== d
                              ? d
                              : "auto",
                          tableWidth:
                            null !== (u = e.tableWidth) && void 0 !== u
                              ? u
                              : "auto",
                          showHead: m,
                          showFoot: b,
                          tableLineWidth:
                            null !== (p = e.tableLineWidth) && void 0 !== p
                              ? p
                              : 0,
                          tableLineColor:
                            null !== (h = e.tableLineColor) && void 0 !== h
                              ? h
                              : 200,
                          horizontalPageBreak: M,
                          horizontalPageBreakRepeat: O,
                          horizontalPageBreakBehaviour:
                            null !== (f = e.horizontalPageBreakBehaviour) &&
                            void 0 !== f
                              ? f
                              : "afterAllRows",
                        };
                      })(n, p),
                      m = (function (t, e, n) {
                        var r = e.head || [],
                          o = e.body || [],
                          a = e.foot || [];
                        if (e.html) {
                          var s = e.includeHiddenHtml;
                          if (n) {
                            var c =
                              (0, i.parseHtml)(t, e.html, n, s, e.useCss) || {};
                            (r = c.head || r),
                              (o = c.body || r),
                              (a = c.foot || r);
                          }
                        }
                        return {
                          columns: e.columns || l(r, o, a),
                          head: r,
                          body: o,
                          foot: a,
                        };
                      })(n, p, u);
                    return {
                      id: e.tableId,
                      content: m,
                      hooks: f,
                      styles: h,
                      settings: b,
                    };
                  };
                },
                792: function (t, e) {
                  function n(t) {
                    t.rowHeight
                      ? t.minCellHeight || (t.minCellHeight = t.rowHeight)
                      : t.columnWidth &&
                        (t.cellWidth || (t.cellWidth = t.columnWidth));
                  }
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = function (t, e, i, r) {
                      for (
                        var o = function (e) {
                            void 0 !== e.extendWidth &&
                              (e.tableWidth = e.extendWidth ? "auto" : "wrap"),
                              void 0 !== e.margins &&
                                void 0 === e.margin &&
                                (e.margin = e.margins),
                              e.startY &&
                                "number" != typeof e.startY &&
                                delete e.startY,
                              !e.didDrawPage &&
                                (e.afterPageContent ||
                                  e.beforePageContent ||
                                  e.afterPageAdd) &&
                                (e.didDrawPage = function (n) {
                                  t.applyStyles(t.userStyles),
                                    e.beforePageContent &&
                                      e.beforePageContent(n),
                                    t.applyStyles(t.userStyles),
                                    e.afterPageContent && e.afterPageContent(n),
                                    t.applyStyles(t.userStyles),
                                    e.afterPageAdd &&
                                      n.pageNumber > 1 &&
                                      n.afterPageAdd(n),
                                    t.applyStyles(t.userStyles);
                                }),
                              [
                                "createdHeaderCell",
                                "drawHeaderRow",
                                "drawRow",
                                "drawHeaderCell",
                              ].forEach(function (t) {
                                e[t];
                              }),
                              [
                                ["showFoot", "showFooter"],
                                ["showHead", "showHeader"],
                                ["didDrawPage", "addPageContent"],
                                ["didParseCell", "createdCell"],
                                ["headStyles", "headerStyles"],
                              ].forEach(function (t) {
                                var n = t[0],
                                  i = t[1];
                                e[i] && (e[n] = e[i]);
                              }),
                              [
                                ["padding", "cellPadding"],
                                ["lineHeight", "rowHeight"],
                                "fontSize",
                                "overflow",
                              ].forEach(function (t) {
                                var n = "string" == typeof t ? t : t[0],
                                  i = "string" == typeof t ? t : t[1];
                                void 0 !== e[n] &&
                                  void 0 === e.styles[i] &&
                                  (e.styles[i] = e[n]);
                              });
                            for (
                              var i = 0,
                                r = [
                                  "styles",
                                  "bodyStyles",
                                  "headStyles",
                                  "footStyles",
                                ];
                              i < r.length;
                              i++
                            )
                              n(e[r[i]] || {});
                            for (
                              var o = e.columnStyles || {},
                                a = 0,
                                s = Object.keys(o);
                              a < s.length;
                              a++
                            )
                              n(o[s[a]] || {});
                          },
                          a = 0,
                          s = [e, i, r];
                        a < s.length;
                        a++
                      )
                        o(s[a]);
                    });
                },
                260: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.Column = e.Cell = e.Row = e.Table = void 0);
                  var i = n(796),
                    r = n(172),
                    o = n(420),
                    a = (function () {
                      function t(t, e) {
                        (this.pageNumber = 1),
                          (this.pageCount = 1),
                          (this.id = t.id),
                          (this.settings = t.settings),
                          (this.styles = t.styles),
                          (this.hooks = t.hooks),
                          (this.columns = e.columns),
                          (this.head = e.head),
                          (this.body = e.body),
                          (this.foot = e.foot);
                      }
                      return (
                        (t.prototype.getHeadHeight = function (t) {
                          return this.head.reduce(function (e, n) {
                            return e + n.getMaxCellHeight(t);
                          }, 0);
                        }),
                        (t.prototype.getFootHeight = function (t) {
                          return this.foot.reduce(function (e, n) {
                            return e + n.getMaxCellHeight(t);
                          }, 0);
                        }),
                        (t.prototype.allRows = function () {
                          return this.head.concat(this.body).concat(this.foot);
                        }),
                        (t.prototype.callCellHooks = function (
                          t,
                          e,
                          n,
                          i,
                          o,
                          a
                        ) {
                          for (var s = 0, l = e; s < l.length; s++) {
                            var c =
                              !1 ===
                              (0, l[s])(
                                new r.CellHookData(t, this, n, i, o, a)
                              );
                            if (
                              ((n.text = Array.isArray(n.text)
                                ? n.text
                                : [n.text]),
                              c)
                            )
                              return !1;
                          }
                          return !0;
                        }),
                        (t.prototype.callEndPageHooks = function (t, e) {
                          t.applyStyles(t.userStyles);
                          for (
                            var n = 0, i = this.hooks.didDrawPage;
                            n < i.length;
                            n++
                          )
                            (0, i[n])(new r.HookData(t, this, e));
                        }),
                        (t.prototype.callWillDrawPageHooks = function (t, e) {
                          for (
                            var n = 0, i = this.hooks.willDrawPage;
                            n < i.length;
                            n++
                          )
                            (0, i[n])(new r.HookData(t, this, e));
                        }),
                        (t.prototype.getWidth = function (t) {
                          if ("number" == typeof this.settings.tableWidth)
                            return this.settings.tableWidth;
                          if ("wrap" === this.settings.tableWidth)
                            return this.columns.reduce(function (t, e) {
                              return t + e.wrappedWidth;
                            }, 0);
                          var e = this.settings.margin;
                          return t - e.left - e.right;
                        }),
                        t
                      );
                    })();
                  e.Table = a;
                  var s = (function () {
                    function t(t, e, n, r, o) {
                      void 0 === o && (o = !1),
                        (this.height = 0),
                        (this.raw = t),
                        t instanceof i.HtmlRowInput &&
                          ((this.raw = t._element),
                          (this.element = t._element)),
                        (this.index = e),
                        (this.section = n),
                        (this.cells = r),
                        (this.spansMultiplePages = o);
                    }
                    return (
                      (t.prototype.getMaxCellHeight = function (t) {
                        var e = this;
                        return t.reduce(function (t, n) {
                          var i;
                          return Math.max(
                            t,
                            (null === (i = e.cells[n.index]) || void 0 === i
                              ? void 0
                              : i.height) || 0
                          );
                        }, 0);
                      }),
                      (t.prototype.hasRowSpan = function (t) {
                        var e = this;
                        return (
                          t.filter(function (t) {
                            var n = e.cells[t.index];
                            return !!n && n.rowSpan > 1;
                          }).length > 0
                        );
                      }),
                      (t.prototype.canEntireRowFit = function (t, e) {
                        return this.getMaxCellHeight(e) <= t;
                      }),
                      (t.prototype.getMinimumRowHeight = function (t, e) {
                        var n = this;
                        return t.reduce(function (t, i) {
                          var r = n.cells[i.index];
                          if (!r) return 0;
                          var o = e.getLineHeight(r.styles.fontSize),
                            a = r.padding("vertical") + o;
                          return a > t ? a : t;
                        }, 0);
                      }),
                      t
                    );
                  })();
                  e.Row = s;
                  var l = (function () {
                    function t(t, e, n) {
                      var i, r;
                      (this.contentHeight = 0),
                        (this.contentWidth = 0),
                        (this.wrappedWidth = 0),
                        (this.minReadableWidth = 0),
                        (this.minWidth = 0),
                        (this.width = 0),
                        (this.height = 0),
                        (this.x = 0),
                        (this.y = 0),
                        (this.styles = e),
                        (this.section = n),
                        (this.raw = t);
                      var o = t;
                      null == t || "object" != typeof t || Array.isArray(t)
                        ? ((this.rowSpan = 1), (this.colSpan = 1))
                        : ((this.rowSpan = t.rowSpan || 1),
                          (this.colSpan = t.colSpan || 1),
                          (o =
                            null !==
                              (r =
                                null !== (i = t.content) && void 0 !== i
                                  ? i
                                  : t.title) && void 0 !== r
                              ? r
                              : t),
                          t._element && (this.raw = t._element));
                      var a = null != o ? "" + o : "";
                      this.text = a.split(/\r\n|\r|\n/g);
                    }
                    return (
                      (t.prototype.getTextPos = function () {
                        var t, e;
                        if ("top" === this.styles.valign)
                          t = this.y + this.padding("top");
                        else if ("bottom" === this.styles.valign)
                          t = this.y + this.height - this.padding("bottom");
                        else {
                          var n = this.height - this.padding("vertical");
                          t = this.y + n / 2 + this.padding("top");
                        }
                        if ("right" === this.styles.halign)
                          e = this.x + this.width - this.padding("right");
                        else if ("center" === this.styles.halign) {
                          var i = this.width - this.padding("horizontal");
                          e = this.x + i / 2 + this.padding("left");
                        } else e = this.x + this.padding("left");
                        return { x: e, y: t };
                      }),
                      (t.prototype.getContentHeight = function (t, e) {
                        void 0 === e && (e = 1.15);
                        var n =
                          (Array.isArray(this.text) ? this.text.length : 1) *
                            ((this.styles.fontSize / t) * e) +
                          this.padding("vertical");
                        return Math.max(n, this.styles.minCellHeight);
                      }),
                      (t.prototype.padding = function (t) {
                        var e = (0, o.parseSpacing)(this.styles.cellPadding, 0);
                        return "vertical" === t
                          ? e.top + e.bottom
                          : "horizontal" === t
                          ? e.left + e.right
                          : e[t];
                      }),
                      t
                    );
                  })();
                  e.Cell = l;
                  var c = (function () {
                    function t(t, e, n) {
                      (this.wrappedWidth = 0),
                        (this.minReadableWidth = 0),
                        (this.minWidth = 0),
                        (this.width = 0),
                        (this.dataKey = t),
                        (this.raw = e),
                        (this.index = n);
                    }
                    return (
                      (t.prototype.getMaxCustomCellWidth = function (t) {
                        for (
                          var e = 0, n = 0, i = t.allRows();
                          n < i.length;
                          n++
                        ) {
                          var r = i[n].cells[this.index];
                          r &&
                            "number" == typeof r.styles.cellWidth &&
                            (e = Math.max(e, r.styles.cellWidth));
                        }
                        return e;
                      }),
                      t
                    );
                  })();
                  e.Column = c;
                },
                356: function (t, e) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.assign = void 0),
                    (e.assign = function (t, e, n, i, r) {
                      if (null == t)
                        throw new TypeError(
                          "Cannot convert undefined or null to object"
                        );
                      for (
                        var o = Object(t), a = 1;
                        a < arguments.length;
                        a++
                      ) {
                        var s = arguments[a];
                        if (null != s)
                          for (var l in s)
                            Object.prototype.hasOwnProperty.call(s, l) &&
                              (o[l] = s[l]);
                      }
                      return o;
                    });
                },
                972: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.createTable = void 0);
                  var i = n(744),
                    r = n(260),
                    o = n(324),
                    a = n(796),
                    s = n(356);
                  function l(t, e, n, i, o, a) {
                    var s = {};
                    return e.map(function (e, l) {
                      for (
                        var c = 0, u = {}, p = 0, h = 0, f = 0, b = n;
                        f < b.length;
                        f++
                      ) {
                        var m = b[f];
                        if (null == s[m.index] || 0 === s[m.index].left)
                          if (0 === h) {
                            var g,
                              v = {};
                            "object" !=
                              typeof (g = Array.isArray(e)
                                ? e[m.index - p - c]
                                : e[m.dataKey]) ||
                              Array.isArray(g) ||
                              (v = (null == g ? void 0 : g.styles) || {});
                            var _ = d(t, m, l, o, i, a, v),
                              y = new r.Cell(g, _, t);
                            (u[m.dataKey] = y),
                              (u[m.index] = y),
                              (h = y.colSpan - 1),
                              (s[m.index] = { left: y.rowSpan - 1, times: h });
                          } else h--, p++;
                        else s[m.index].left--, (h = s[m.index].times), c++;
                      }
                      return new r.Row(e, l, t, u);
                    });
                  }
                  function c(t, e) {
                    var n = {};
                    return (
                      t.forEach(function (t) {
                        if (null != t.raw) {
                          var i = (function (t, e) {
                            if ("head" === t) {
                              if ("object" == typeof e)
                                return e.header || e.title || null;
                              if ("string" == typeof e || "number" == typeof e)
                                return e;
                            } else if ("foot" === t && "object" == typeof e)
                              return e.footer;
                            return null;
                          })(e, t.raw);
                          null != i && (n[t.dataKey] = i);
                        }
                      }),
                      Object.keys(n).length > 0 ? n : null
                    );
                  }
                  function d(t, e, n, i, r, o, l) {
                    var c,
                      d = (0, a.getTheme)(i);
                    "head" === t
                      ? (c = r.headStyles)
                      : "body" === t
                      ? (c = r.bodyStyles)
                      : "foot" === t && (c = r.footStyles);
                    var u = (0, s.assign)({}, d.table, d[t], r.styles, c),
                      p =
                        r.columnStyles[e.dataKey] ||
                        r.columnStyles[e.index] ||
                        {},
                      h = "body" === t ? p : {},
                      f =
                        "body" === t && n % 2 == 0
                          ? (0, s.assign)(
                              {},
                              d.alternateRow,
                              r.alternateRowStyles
                            )
                          : {},
                      b = (0, a.defaultStyles)(o),
                      m = (0, s.assign)({}, b, u, f, h);
                    return (0, s.assign)(m, l);
                  }
                  e.createTable = function (t, e) {
                    var n = new i.DocHandler(t),
                      a = (function (t, e) {
                        var n,
                          i = t.content,
                          o = (function (t) {
                            return t.map(function (t, e) {
                              var n, i, o;
                              return (
                                (o =
                                  "object" == typeof t &&
                                  null !==
                                    (i =
                                      null !== (n = t.dataKey) && void 0 !== n
                                        ? n
                                        : t.key) &&
                                  void 0 !== i
                                    ? i
                                    : e),
                                new r.Column(o, t, e)
                              );
                            });
                          })(i.columns);
                        0 === i.head.length &&
                          (n = c(o, "head")) &&
                          i.head.push(n),
                          0 === i.foot.length &&
                            (n = c(o, "foot")) &&
                            i.foot.push(n);
                        var a = t.settings.theme,
                          s = t.styles;
                        return {
                          columns: o,
                          head: l("head", i.head, o, s, a, e),
                          body: l("body", i.body, o, s, a, e),
                          foot: l("foot", i.foot, o, s, a, e),
                        };
                      })(e, n.scaleFactor()),
                      s = new r.Table(e, a);
                    return (
                      (0, o.calculateWidths)(n, s),
                      n.applyStyles(n.userStyles),
                      s
                    );
                  };
                },
                664: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.addPage = e.drawTable = void 0);
                  var i = n(420),
                    r = n(260),
                    o = n(744),
                    a = n(356),
                    s = n(136),
                    l = n(224);
                  function c(t, e, n, i) {
                    var r = e.settings;
                    t.applyStyles(t.userStyles),
                      ("firstPage" !== r.showHead &&
                        "everyPage" !== r.showHead) ||
                        e.head.forEach(function (r) {
                          return f(t, e, r, n, i);
                        });
                  }
                  function d(t, e, n, i, r, o) {
                    t.applyStyles(t.userStyles),
                      (o = null != o ? o : e.body.length);
                    var a = Math.min(n + o, e.body.length),
                      s = -1;
                    return (
                      e.body.slice(n, a).forEach(function (o, a) {
                        var l = n + a === e.body.length - 1,
                          c = m(t, e, l, i);
                        o.canEntireRowFit(c, r) &&
                          (f(t, e, o, i, r), (s = n + a));
                      }),
                      s
                    );
                  }
                  function u(t, e, n, i) {
                    var r = e.settings;
                    t.applyStyles(t.userStyles),
                      ("lastPage" !== r.showFoot &&
                        "everyPage" !== r.showFoot) ||
                        e.foot.forEach(function (r) {
                          return f(t, e, r, n, i);
                        });
                  }
                  function p(t, e, n) {
                    var i = n.getLineHeight(t.styles.fontSize),
                      r = t.padding("vertical"),
                      o = Math.floor((e - r) / i);
                    return Math.max(0, o);
                  }
                  function h(t, e, n, i, o, s, l) {
                    var c = m(t, e, i, s);
                    if (n.canEntireRowFit(c, l)) f(t, e, n, s, l);
                    else if (
                      (function (t, e, n, i) {
                        var r = t.pageSize().height,
                          o = i.settings.margin,
                          a = r - (o.top + o.bottom);
                        "body" === e.section &&
                          (a -=
                            i.getHeadHeight(i.columns) +
                            i.getFootHeight(i.columns));
                        var s = e.getMinimumRowHeight(i.columns, t);
                        if (s > a) return !0;
                        if (!(s < n)) return !1;
                        var l = e.hasRowSpan(i.columns);
                        return (
                          e.getMaxCellHeight(i.columns) > a ||
                          (!l && "avoid" !== i.settings.rowPageBreak)
                        );
                      })(t, n, c, e)
                    ) {
                      var d = (function (t, e, n, i) {
                        var o = {};
                        (t.spansMultiplePages = !0), (t.height = 0);
                        for (
                          var s = 0, l = 0, c = n.columns;
                          l < c.length;
                          l++
                        ) {
                          var d = c[l];
                          if ((_ = t.cells[d.index])) {
                            Array.isArray(_.text) || (_.text = [_.text]);
                            var u = new r.Cell(_.raw, _.styles, _.section);
                            (u = (0, a.assign)(u, _)).text = [];
                            var h = p(_, e, i);
                            _.text.length > h &&
                              (u.text = _.text.splice(h, _.text.length));
                            var f = i.scaleFactor(),
                              b = i.getLineHeightFactor();
                            (_.contentHeight = _.getContentHeight(f, b)),
                              _.contentHeight >= e &&
                                ((_.contentHeight = e),
                                (u.styles.minCellHeight -= e)),
                              _.contentHeight > t.height &&
                                (t.height = _.contentHeight),
                              (u.contentHeight = u.getContentHeight(f, b)),
                              u.contentHeight > s && (s = u.contentHeight),
                              (o[d.index] = u);
                          }
                        }
                        var m = new r.Row(t.raw, -1, t.section, o, !0);
                        m.height = s;
                        for (var g = 0, v = n.columns; g < v.length; g++) {
                          var _;
                          (d = v[g]),
                            (u = m.cells[d.index]) && (u.height = m.height),
                            (_ = t.cells[d.index]) && (_.height = t.height);
                        }
                        return m;
                      })(n, c, e, t);
                      f(t, e, n, s, l),
                        g(t, e, o, s, l),
                        h(t, e, d, i, o, s, l);
                    } else g(t, e, o, s, l), h(t, e, n, i, o, s, l);
                  }
                  function f(t, e, n, i, r) {
                    i.x = e.settings.margin.left;
                    for (var o = 0, a = r; o < a.length; o++) {
                      var l = a[o],
                        c = n.cells[l.index];
                      if (c)
                        if (
                          (t.applyStyles(c.styles),
                          (c.x = i.x),
                          (c.y = i.y),
                          !1 !==
                            e.callCellHooks(
                              t,
                              e.hooks.willDrawCell,
                              c,
                              n,
                              l,
                              i
                            ))
                        ) {
                          b(t, c, i);
                          var d = c.getTextPos();
                          (0, s.default)(
                            c.text,
                            d.x,
                            d.y,
                            {
                              halign: c.styles.halign,
                              valign: c.styles.valign,
                              maxWidth: Math.ceil(
                                c.width - c.padding("left") - c.padding("right")
                              ),
                            },
                            t.getDocument()
                          ),
                            e.callCellHooks(t, e.hooks.didDrawCell, c, n, l, i),
                            (i.x += l.width);
                        } else i.x += l.width;
                      else i.x += l.width;
                    }
                    i.y += n.height;
                  }
                  function b(t, e, n) {
                    var r = e.styles;
                    if (
                      (t
                        .getDocument()
                        .setFillColor(t.getDocument().getFillColor()),
                      "number" == typeof r.lineWidth)
                    ) {
                      var o = (0, i.getFillStyle)(r.lineWidth, r.fillColor);
                      o && t.rect(e.x, n.y, e.width, e.height, o);
                    } else
                      "object" == typeof r.lineWidth &&
                        (r.fillColor &&
                          t.rect(e.x, n.y, e.width, e.height, "F"),
                        (function (t, e, n, i) {
                          var r, o, a, s;
                          function l(e, n, i, r, o) {
                            t.getDocument().setLineWidth(e),
                              t.getDocument().line(n, i, r, o, "S");
                          }
                          i.top &&
                            ((r = n.x),
                            (o = n.y),
                            (a = n.x + e.width),
                            (s = n.y),
                            i.right && (a += 0.5 * i.right),
                            i.left && (r -= 0.5 * i.left),
                            l(i.top, r, o, a, s)),
                            i.bottom &&
                              ((r = n.x),
                              (o = n.y + e.height),
                              (a = n.x + e.width),
                              (s = n.y + e.height),
                              i.right && (a += 0.5 * i.right),
                              i.left && (r -= 0.5 * i.left),
                              l(i.bottom, r, o, a, s)),
                            i.left &&
                              ((r = n.x),
                              (o = n.y),
                              (a = n.x),
                              (s = n.y + e.height),
                              i.top && (o -= 0.5 * i.top),
                              i.bottom && (s += 0.5 * i.bottom),
                              l(i.left, r, o, a, s)),
                            i.right &&
                              ((r = n.x + e.width),
                              (o = n.y),
                              (a = n.x + e.width),
                              (s = n.y + e.height),
                              i.top && (o -= 0.5 * i.top),
                              i.bottom && (s += 0.5 * i.bottom),
                              l(i.right, r, o, a, s));
                        })(t, e, n, r.lineWidth));
                  }
                  function m(t, e, n, i) {
                    var r = e.settings.margin.bottom,
                      o = e.settings.showFoot;
                    return (
                      ("everyPage" === o || ("lastPage" === o && n)) &&
                        (r += e.getFootHeight(e.columns)),
                      t.pageSize().height - i.y - r
                    );
                  }
                  function g(t, e, n, r, o, a) {
                    void 0 === o && (o = []),
                      void 0 === a && (a = !1),
                      t.applyStyles(t.userStyles),
                      "everyPage" !== e.settings.showFoot ||
                        a ||
                        e.foot.forEach(function (n) {
                          return f(t, e, n, r, o);
                        }),
                      e.callEndPageHooks(t, r);
                    var s = e.settings.margin;
                    (0, i.addTableBorder)(t, e, n, r),
                      v(t),
                      e.pageNumber++,
                      e.pageCount++,
                      (r.x = s.left),
                      (r.y = s.top),
                      (n.y = s.top),
                      e.callWillDrawPageHooks(t, r),
                      "everyPage" === e.settings.showHead &&
                        (e.head.forEach(function (n) {
                          return f(t, e, n, r, o);
                        }),
                        t.applyStyles(t.userStyles));
                  }
                  function v(t) {
                    var e = t.pageNumber();
                    return (
                      t.setPage(e + 1),
                      t.pageNumber() === e && (t.addPage(), !0)
                    );
                  }
                  (e.drawTable = function (t, e) {
                    var n = e.settings,
                      r = n.startY,
                      s = n.margin,
                      p = { x: s.left, y: r },
                      b =
                        e.getHeadHeight(e.columns) + e.getFootHeight(e.columns),
                      m = r + s.bottom + b;
                    "avoid" === n.pageBreak &&
                      (m += e.body.reduce(function (t, e) {
                        return t + e.height;
                      }, 0));
                    var _ = new o.DocHandler(t);
                    ("always" === n.pageBreak ||
                      (null != n.startY && m > _.pageSize().height)) &&
                      (v(_), (p.y = s.top)),
                      e.callWillDrawPageHooks(_, p);
                    var y = (0, a.assign)({}, p);
                    (e.startPageNumber = _.pageNumber()),
                      n.horizontalPageBreak
                        ? (function (t, e, n, i) {
                            var r = (0, l.calculateAllColumnsCanFitInPage)(
                              t,
                              e
                            );
                            if (
                              "afterAllRows" ===
                              e.settings.horizontalPageBreakBehaviour
                            )
                              r.forEach(function (r, o) {
                                t.applyStyles(t.userStyles),
                                  o > 0
                                    ? g(t, e, n, i, r.columns, !0)
                                    : c(t, e, i, r.columns),
                                  (function (t, e, n, i, r) {
                                    t.applyStyles(t.userStyles),
                                      e.body.forEach(function (o, a) {
                                        var s = a === e.body.length - 1;
                                        h(t, e, o, s, n, i, r);
                                      });
                                  })(t, e, n, i, r.columns),
                                  u(t, e, i, r.columns);
                              });
                            else
                              for (
                                var o = -1,
                                  a = r[0],
                                  s = function () {
                                    var s = o;
                                    if (a) {
                                      t.applyStyles(t.userStyles);
                                      var l = a.columns;
                                      o >= 0
                                        ? g(t, e, n, i, l, !0)
                                        : c(t, e, i, l),
                                        (s = d(t, e, o + 1, i, l)),
                                        u(t, e, i, l);
                                    }
                                    var p = s - o;
                                    r.slice(1).forEach(function (r) {
                                      t.applyStyles(t.userStyles),
                                        g(t, e, n, i, r.columns, !0),
                                        d(t, e, o + 1, i, r.columns, p),
                                        u(t, e, i, r.columns);
                                    }),
                                      (o = s);
                                  };
                                o < e.body.length - 1;

                              )
                                s();
                          })(_, e, y, p)
                        : (_.applyStyles(_.userStyles),
                          ("firstPage" !== n.showHead &&
                            "everyPage" !== n.showHead) ||
                            e.head.forEach(function (t) {
                              return f(_, e, t, p, e.columns);
                            }),
                          _.applyStyles(_.userStyles),
                          e.body.forEach(function (t, n) {
                            var i = n === e.body.length - 1;
                            h(_, e, t, i, y, p, e.columns);
                          }),
                          _.applyStyles(_.userStyles),
                          ("lastPage" !== n.showFoot &&
                            "everyPage" !== n.showFoot) ||
                            e.foot.forEach(function (t) {
                              return f(_, e, t, p, e.columns);
                            })),
                      (0, i.addTableBorder)(_, e, y, p),
                      e.callEndPageHooks(_, p),
                      (e.finalY = p.y),
                      (t.lastAutoTable = e),
                      (t.previousAutoTable = e),
                      t.autoTable && (t.autoTable.previous = e),
                      _.applyStyles(_.userStyles);
                  }),
                    (e.addPage = g);
                },
                224: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.calculateAllColumnsCanFitInPage = void 0);
                  var i = n(420);
                  function r(t, e, n) {
                    var r;
                    void 0 === n && (n = {});
                    var o = (0, i.getPageAvailableWidth)(t, e),
                      a = new Map(),
                      s = [],
                      l = [],
                      c = [];
                    e.settings.horizontalPageBreakRepeat,
                      Array.isArray(e.settings.horizontalPageBreakRepeat)
                        ? (c = e.settings.horizontalPageBreakRepeat)
                        : ("string" !=
                            typeof e.settings.horizontalPageBreakRepeat &&
                            "number" !=
                              typeof e.settings.horizontalPageBreakRepeat) ||
                          (c = [e.settings.horizontalPageBreakRepeat]),
                      c.forEach(function (t) {
                        var n = e.columns.find(function (e) {
                          return e.dataKey === t || e.index === t;
                        });
                        n &&
                          !a.has(n.index) &&
                          (a.set(n.index, !0),
                          s.push(n.index),
                          l.push(e.columns[n.index]),
                          (o -= n.wrappedWidth));
                      });
                    for (
                      var d = !0,
                        u =
                          null !== (r = null == n ? void 0 : n.start) &&
                          void 0 !== r
                            ? r
                            : 0;
                      u < e.columns.length;

                    )
                      if (a.has(u)) u++;
                      else {
                        var p = e.columns[u].wrappedWidth;
                        if (!(d || o >= p)) break;
                        (d = !1),
                          s.push(u),
                          l.push(e.columns[u]),
                          (o -= p),
                          u++;
                      }
                    return { colIndexes: s, columns: l, lastIndex: u - 1 };
                  }
                  e.calculateAllColumnsCanFitInPage = function (t, e) {
                    for (var n = [], i = 0; i < e.columns.length; i++) {
                      var o = r(t, e, { start: i });
                      o.columns.length && (n.push(o), (i = o.lastIndex));
                    }
                    return n;
                  };
                },
                324: function (t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ellipsize =
                      e.resizeColumns =
                      e.calculateWidths =
                        void 0);
                  var i = n(420);
                  function r(t, e, n) {
                    for (
                      var i = e,
                        o = t.reduce(function (t, e) {
                          return t + e.wrappedWidth;
                        }, 0),
                        a = 0;
                      a < t.length;
                      a++
                    ) {
                      var s = t[a],
                        l = i * (s.wrappedWidth / o),
                        c = s.width + l,
                        d = n(s),
                        u = c < d ? d : c;
                      (e -= u - s.width), (s.width = u);
                    }
                    if ((e = Math.round(1e10 * e) / 1e10)) {
                      var p = t.filter(function (t) {
                        return !(e < 0) || t.width > n(t);
                      });
                      p.length && (e = r(p, e, n));
                    }
                    return e;
                  }
                  function o(t, e, n, r, o) {
                    return t.map(function (t) {
                      return (function (t, e, n, r, o) {
                        var a = 1e4 * r.scaleFactor();
                        if (
                          (e = Math.ceil(e * a) / a) >=
                          (0, i.getStringWidth)(t, n, r)
                        )
                          return t;
                        for (
                          ;
                          e < (0, i.getStringWidth)(t + o, n, r) &&
                          !(t.length <= 1);

                        )
                          t = t.substring(0, t.length - 1);
                        return t.trim() + o;
                      })(t, e, n, r, o);
                    });
                  }
                  (e.calculateWidths = function (t, e) {
                    !(function (t, e) {
                      var n = t.scaleFactor(),
                        r = e.settings.horizontalPageBreak,
                        o = (0, i.getPageAvailableWidth)(t, e);
                      e.allRows().forEach(function (a) {
                        for (var s = 0, l = e.columns; s < l.length; s++) {
                          var c = l[s],
                            d = a.cells[c.index];
                          if (d) {
                            var u = e.hooks.didParseCell;
                            e.callCellHooks(t, u, d, a, c, null);
                            var p = d.padding("horizontal");
                            d.contentWidth =
                              (0, i.getStringWidth)(d.text, d.styles, t) + p;
                            var h = (0, i.getStringWidth)(
                              d.text.join(" ").split(/[^\S\u00A0]+/),
                              d.styles,
                              t
                            );
                            if (
                              ((d.minReadableWidth =
                                h + d.padding("horizontal")),
                              "number" == typeof d.styles.cellWidth)
                            )
                              (d.minWidth = d.styles.cellWidth),
                                (d.wrappedWidth = d.styles.cellWidth);
                            else if ("wrap" === d.styles.cellWidth || !0 === r)
                              d.contentWidth > o
                                ? ((d.minWidth = o), (d.wrappedWidth = o))
                                : ((d.minWidth = d.contentWidth),
                                  (d.wrappedWidth = d.contentWidth));
                            else {
                              var f = 10 / n;
                              (d.minWidth = d.styles.minCellWidth || f),
                                (d.wrappedWidth = d.contentWidth),
                                d.minWidth > d.wrappedWidth &&
                                  (d.wrappedWidth = d.minWidth);
                            }
                          }
                        }
                      }),
                        e.allRows().forEach(function (t) {
                          for (var n = 0, i = e.columns; n < i.length; n++) {
                            var r = i[n],
                              o = t.cells[r.index];
                            if (o && 1 === o.colSpan)
                              (r.wrappedWidth = Math.max(
                                r.wrappedWidth,
                                o.wrappedWidth
                              )),
                                (r.minWidth = Math.max(r.minWidth, o.minWidth)),
                                (r.minReadableWidth = Math.max(
                                  r.minReadableWidth,
                                  o.minReadableWidth
                                ));
                            else {
                              var a =
                                  e.styles.columnStyles[r.dataKey] ||
                                  e.styles.columnStyles[r.index] ||
                                  {},
                                s = a.cellWidth || a.minCellWidth;
                              s &&
                                "number" == typeof s &&
                                ((r.minWidth = s), (r.wrappedWidth = s));
                            }
                            o &&
                              (o.colSpan > 1 &&
                                !r.minWidth &&
                                (r.minWidth = o.minWidth),
                              o.colSpan > 1 &&
                                !r.wrappedWidth &&
                                (r.wrappedWidth = o.minWidth));
                          }
                        });
                    })(t, e);
                    var n = [],
                      a = 0;
                    e.columns.forEach(function (t) {
                      var i = t.getMaxCustomCellWidth(e);
                      i
                        ? (t.width = i)
                        : ((t.width = t.wrappedWidth), n.push(t)),
                        (a += t.width);
                    });
                    var s = e.getWidth(t.pageSize().width) - a;
                    s &&
                      (s = r(n, s, function (t) {
                        return Math.max(t.minReadableWidth, t.minWidth);
                      })),
                      s &&
                        (s = r(n, s, function (t) {
                          return t.minWidth;
                        })),
                      (s = Math.abs(s)),
                      !e.settings.horizontalPageBreak &&
                        s > 0.1 / t.scaleFactor() &&
                        (s = s < 1 ? s : Math.round(s)),
                      (function (t) {
                        for (var e = t.allRows(), n = 0; n < e.length; n++)
                          for (
                            var i = e[n], r = null, o = 0, a = 0, s = 0;
                            s < t.columns.length;
                            s++
                          ) {
                            var l = t.columns[s];
                            if ((a -= 1) > 1 && t.columns[s + 1])
                              (o += l.width), delete i.cells[l.index];
                            else if (r) {
                              var c = r;
                              delete i.cells[l.index],
                                (r = null),
                                (c.width = l.width + o);
                            } else {
                              if (!(c = i.cells[l.index])) continue;
                              if (((a = c.colSpan), (o = 0), c.colSpan > 1)) {
                                (r = c), (o += l.width);
                                continue;
                              }
                              c.width = l.width + o;
                            }
                          }
                      })(e),
                      (function (t, e) {
                        for (
                          var n = { count: 0, height: 0 },
                            i = 0,
                            r = t.allRows();
                          i < r.length;
                          i++
                        ) {
                          for (
                            var a = r[i], s = 0, l = t.columns;
                            s < l.length;
                            s++
                          ) {
                            var c = l[s],
                              d = a.cells[c.index];
                            if (d) {
                              e.applyStyles(d.styles, !0);
                              var u = d.width - d.padding("horizontal");
                              if ("linebreak" === d.styles.overflow)
                                d.text = e.splitTextToSize(
                                  d.text,
                                  u + 1 / e.scaleFactor(),
                                  { fontSize: d.styles.fontSize }
                                );
                              else if ("ellipsize" === d.styles.overflow)
                                d.text = o(d.text, u, d.styles, e, "...");
                              else if ("hidden" === d.styles.overflow)
                                d.text = o(d.text, u, d.styles, e, "");
                              else if ("function" == typeof d.styles.overflow) {
                                var p = d.styles.overflow(d.text, u);
                                d.text = "string" == typeof p ? [p] : p;
                              }
                              d.contentHeight = d.getContentHeight(
                                e.scaleFactor(),
                                e.getLineHeightFactor()
                              );
                              var h = d.contentHeight / d.rowSpan;
                              d.rowSpan > 1 &&
                              n.count * n.height < h * d.rowSpan
                                ? (n = { height: h, count: d.rowSpan })
                                : n &&
                                  n.count > 0 &&
                                  n.height > h &&
                                  (h = n.height),
                                h > a.height && (a.height = h);
                            }
                          }
                          n.count--;
                        }
                      })(e, t),
                      (function (t) {
                        for (
                          var e = {}, n = 1, i = t.allRows(), r = 0;
                          r < i.length;
                          r++
                        )
                          for (
                            var o = i[r], a = 0, s = t.columns;
                            a < s.length;
                            a++
                          ) {
                            var l = s[a],
                              c = e[l.index];
                            if (n > 1) n--, delete o.cells[l.index];
                            else if (c)
                              (c.cell.height += o.height),
                                (n = c.cell.colSpan),
                                delete o.cells[l.index],
                                c.left--,
                                c.left <= 1 && delete e[l.index];
                            else {
                              var d = o.cells[l.index];
                              if (!d) continue;
                              if (((d.height = o.height), d.rowSpan > 1)) {
                                var u = i.length - r,
                                  p = d.rowSpan > u ? u : d.rowSpan;
                                e[l.index] = { cell: d, left: p, row: o };
                              }
                            }
                          }
                      })(e);
                  }),
                    (e.resizeColumns = r),
                    (e.ellipsize = o);
                },
                964: function (e) {
                  if (void 0 === t) {
                    var n = new Error("Cannot find module 'undefined'");
                    throw ((n.code = "MODULE_NOT_FOUND"), n);
                  }
                  e.exports = t;
                },
              },
              n = {};
            function i(t) {
              var r = n[t];
              if (void 0 !== r) return r.exports;
              var o = (n[t] = { exports: {} });
              return e[t].call(o.exports, o, o.exports, i), o.exports;
            }
            var r = {};
            return (
              (function () {
                var t = r;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Cell =
                    t.Column =
                    t.Row =
                    t.Table =
                    t.CellHookData =
                    t.__drawTable =
                    t.__createTable =
                    t.applyPlugin =
                      void 0);
                var e = i(340),
                  n = i(776),
                  o = i(664),
                  a = i(972),
                  s = i(260);
                Object.defineProperty(t, "Table", {
                  enumerable: !0,
                  get: function () {
                    return s.Table;
                  },
                });
                var l = i(172);
                Object.defineProperty(t, "CellHookData", {
                  enumerable: !0,
                  get: function () {
                    return l.CellHookData;
                  },
                });
                var c = i(260);
                function d(t) {
                  (0, e.default)(t);
                }
                Object.defineProperty(t, "Cell", {
                  enumerable: !0,
                  get: function () {
                    return c.Cell;
                  },
                }),
                  Object.defineProperty(t, "Column", {
                    enumerable: !0,
                    get: function () {
                      return c.Column;
                    },
                  }),
                  Object.defineProperty(t, "Row", {
                    enumerable: !0,
                    get: function () {
                      return c.Row;
                    },
                  }),
                  (t.applyPlugin = d),
                  (t.__createTable = function (t, e) {
                    var i = (0, n.parseInput)(t, e);
                    return (0, a.createTable)(t, i);
                  }),
                  (t.__drawTable = function (t, e) {
                    (0, o.drawTable)(t, e);
                  });
                try {
                  var u = i(964);
                  u.jsPDF && (u = u.jsPDF), d(u);
                } catch (t) {}
                t.default = function (t, e) {
                  var i = (0, n.parseInput)(t, e),
                    r = (0, a.createTable)(t, i);
                  (0, o.drawTable)(t, r);
                };
              })(),
              r
            );
          })();
        }),
        (t.exports = i(
          (function () {
            try {
              return n(542);
            } catch (t) {}
          })()
        ));
    }).call(this, n(56));
  },
  function (t, e, n) {
    "use strict";
    n(600);
  },
  function (t, e, n) {
    (e = t.exports = n(31)(!1)).i(n(757), ""),
      e.i(n(758), ""),
      e.push([
        t.i,
        ".fc-button{text-transform:capitalize}#kivicare-appointment-calendar .fc-today{background:#ebe9eb}.fc-toolbar{flex-wrap:wrap}",
        "",
      ]);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '@charset "UTF-8";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n\n.fc-rtl {\n  text-align: right;\n}\n\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent\'s styles */\n  background: #d7d7d7;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\n\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n\n.fc th {\n  text-align: center;\n}\n\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\n\na[data-goto]:hover {\n  text-decoration: underline;\n}\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n\n.fc-row table {\n  /* don\'t put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n\n.fc-row .fc-bg {\n  z-index: 1;\n}\n\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n\n/*\nrow content (which contains day/week numbers and events) as well as "mirror" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don\'t put a border between events and/or the day number */\n  border-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don\'t put a border between event cells */\n  border-top: 0;\n}\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event\'s custom cursor */\n  cursor: not-allowed;\n}\n\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: "";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected:after {\n  content: "";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: "";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full "fc-day-grid-event" class instead of using descendants because the event won\'t\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\n\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell\'s edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell\'s edge */\n}\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* "more" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na.fc-more:hover {\n  text-decoration: underline;\n}\n\n.fc-limited {\n  /* rows and cells that are hidden because of a "more" link */\n  display: none;\n}\n\n/* popover that appears when "more" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the "more" popover one higher than this */\n}\n\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: "fcicons";\n  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: "fcicons" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: "\\E900";\n}\n\n.fc-icon-chevron-right:before {\n  content: "\\E901";\n}\n\n.fc-icon-chevrons-left:before {\n  content: "\\E902";\n}\n\n.fc-icon-chevrons-right:before {\n  content: "\\E903";\n}\n\n.fc-icon-minus-square:before {\n  content: "\\E904";\n}\n\n.fc-icon-plus-square:before {\n  content: "\\E905";\n}\n\n.fc-icon-x:before {\n  content: "\\E906";\n}\n\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n.fc-button {\n  -webkit-appearance: button;\n}\n\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n\n.fc-button:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n\n.fc-button:disabled {\n  opacity: 0.65;\n}\n\n/* "primary" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n\n.fc-button-primary:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.fc-button-group > .fc-button {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n\n/* undo twitter bootstrap\'s box-sizing rules. normalizes positioning techniques */\n/* don\'t do this for the toolbar because we\'ll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view\'s main element */\n  position: relative;\n  z-index: 1;\n}\n\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don\'t force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view\'s specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the "more" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the "more.." popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container\'s height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don\'t display the side axis at all ("all-day" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don\'t display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via "..." text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: "...";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via "..." text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: "...";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don\'t display any button-related controls */\n  }\n}\n',
      "",
    ]);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      '/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n\n/* a "rigid" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can\'t have as much v space */\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n',
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(601);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#doc_birthdate{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate ::-moz-placeholder{color:#8c9cad}#doc_birthdate ::placeholder{color:#8c9cad}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(602);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#doc_birthdate{border:1px solid #c4c4c4;border-radius:5px;background-color:#fff;padding:3px 5px;box-shadow:inset 0 3px 6px rgba(0,0,0,.1);width:100%;height:45px;color:#8c9cad}#doc_birthdate ::-moz-placeholder{color:#8c9cad}#doc_birthdate ::placeholder{color:#8c9cad}.kc-custom-field .custom-checkbox .custom-control-input~.custom-control-label,.kc-custom-field .custom-radio .custom-control-input~.custom-control-label{height:auto}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(603);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      "#clinicSessionPrint .vgt-table thead th{vertical-align:middle}#s_one_end_time,#s_one_start_time,#s_two_end_time,#s_two_start_time{height:3em}@media (max-width:576px){#clinicSessionPrint .vgt-compact td:before{width:55%;padding-left:0}}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    n(604);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".progress-bar-wrapper[data-v-1ee602a8]{position:relative;padding-top:32px}.progress-bar-wrapper .progress-count[data-v-1ee602a8]{color:#525f7f;padding:2px 8px;display:inline-block;position:absolute;left:calc(var(--progress-bar-width) - 19px);transition:all .6s;bottom:10px;border-radius:4px}",
      "",
    ]);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = {
        data: function () {
          return { loderImage: "" };
        },
        mounted: function () {
          this.init(), (this.loderImage = window.request_data.loaderImage);
        },
        methods: { init: function () {} },
        computed: {
          loader: function () {
            return this.$store.state.loader;
          },
        },
      },
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this._self._c;
          return this.loader
            ? t("div", { staticClass: "loader-page" }, [
                "" !== this.loderImage
                  ? t("img", { attrs: { src: this.loderImage, alt: "Loader" } })
                  : this._e(),
              ])
            : this._e();
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(77),
      r = n.n(i),
      o = n(8),
      a = {
        components: { apexcharts: r.a },
        props: {
          chartFilterType: {
            type: [String],
            default: function () {
              return "weekly";
            },
          },
        },
        data: function () {
          return {
            series: [{ name: "Total Appointment: ", data: [] }],
            chartOptions: {
              chart: { type: "bar", height: 350 },
              colors: ["#4874dc"],
              noData: {
                text: "Loading........",
                align: "center",
                verticalAlign: "middle",
              },
              plotOptions: {
                bar: {
                  horizontal: !1,
                  columnWidth: "30%",
                  endingShape: "rounded",
                },
              },
              dataLabels: { enabled: !1 },
              stroke: { show: !0, width: 1, colors: ["transparent"] },
              fill: { opacity: 1 },
              tooltip: {
                y: {
                  formatter: function (t) {
                    return t;
                  },
                },
              },
              xaxis: {
                tickPlacement: "on",
                labels: { rotate: -45, rotateAlways: !0 },
              },
            },
            chartLoading: !0,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            var t = this;
            this.getWeeklyAppointments(),
              (this.series = this.series.map(function (e) {
                return (
                  void 0 !== t.formTranslation.common &&
                    (e.name = t.formTranslation.common.total_appointment),
                  e
                );
              }));
          },
          getWeeklyAppointments: function () {
            var t = this,
              e = this;
            (this.chartLoading = !0),
              Object(o.a)("get_weekly_appointment", {
                filterType: this.chartFilterType,
              })
                .then(function (n) {
                  var i = [];
                  void 0 !== n.data.status &&
                    !0 === n.data.status &&
                    (i =
                      void 0 !== t.userData.theme_mode &&
                      [!0, "true"].includes(t.userData.theme_mode)
                        ? n.data.data.reverse()
                        : n.data.data),
                    e.$refs.weekChart.updateOptions({
                      noData: {
                        text: e.formTranslation.common.no_appointments,
                      },
                      yaxis: {
                        opposite: !(
                          void 0 === t.userData.theme_mode ||
                          ![!0, "true"].includes(t.userData.theme_mode)
                        ),
                      },
                      colors: [e.getColor],
                    }),
                    e.$refs.weekChart.updateSeries([
                      {
                        name: e.formTranslation.dashboard.total_appointments,
                        data: i,
                      },
                    ]),
                    (e.chartLoading = !1);
                })
                .catch(function (t) {
                  e.chartLoading = !1;
                });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          getColor: function () {
            return !0 !== this.userData.addOns.kiviPro
              ? "#4874dc"
              : this.userData.theme_color;
          },
        },
        watch: {
          chartFilterType: function (t, e) {
            t !== e && this.getWeeklyAppointments();
          },
        },
      },
      s = n(15),
      l = Object(s.a)(
        a,
        function () {
          var t = this._self._c;
          return t(
            "div",
            [
              this.chartLoading
                ? t(
                    "div",
                    { staticClass: "page-loader-section" },
                    [t("loader-component-2")],
                    1
                  )
                : this._e(),
              this._v(" "),
              t("apexcharts", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !this.chartLoading,
                    expression: "!chartLoading",
                  },
                ],
                ref: "weekChart",
                attrs: {
                  type: "bar",
                  height: "320",
                  id: "someId",
                  options: this.chartOptions,
                  series: this.series,
                },
              }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = l.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this._self._c;
          return t("div", { staticClass: "row" }, [
            t(
              "div",
              { staticClass: "col-md-12" },
              [
                t(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    t("div", { staticClass: "row" }, [
                      t("div", { staticClass: "col-md-12" }, [
                        t("h2", [this._v(" General setting ")]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this._self._c;
          return t("div", { staticClass: "row" }, [
            t(
              "div",
              { staticClass: "col-md-12" },
              [
                t(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    t("div", { staticClass: "row" }, [
                      t("div", { staticClass: "col-md-8" }, [
                        t("h2", { staticClass: "text-primary" }, [
                          this._v("  Google Calendar "),
                        ]),
                      ]),
                      this._v(" "),
                      t("div", { staticClass: "col-md-4" }, [
                        t(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-primary ext-primary float-right",
                            attrs: {
                              href: "https://apps.iqonic.design/docs/product/kivicare/google-calendar/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            t("i", { staticClass: "fas fa-external-link-alt" }),
                            this._v(" Google Calendar Documentation "),
                          ]
                        ),
                      ]),
                    ]),
                    this._v(" "),
                    t("div", { staticClass: "row p-3" }, [
                      t("div", { staticClass: "col-md-12" }, [
                        t("p", [
                          this._v(
                            "\n                        For setting up a "
                          ),
                          t("b", [
                            this._v(" Google Calendar (Appointment reminder) "),
                          ]),
                          this._v(
                            " in kivicare setup we have provide a setup option in Pro Setting tab.\n                        You just nedd to enable google calendar service and fillup the Api key details. \n                    "
                          ),
                        ]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary ml-3 mt-3" }, [
                          t._v("  Multi-Language "),
                          e("sup", { staticStyle: { color: "red" } }, [
                            t._v(" (Soft deprecated) "),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v(
                            "\n                        For changing a language in your kivicare setup you we have provided a change language option in Pro settings tab in "
                          ),
                          e("b", [t._v(" Settings page ")]),
                          t._v(".\n                    "),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "\n                        You need to change text for your selected language manually from "
                          ),
                          e("b", [t._v(" Language setting tab ")]),
                          t._v(" in "),
                          e("b", [t._v(" Settings page ")]),
                          t._v(". \n                    "),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [t._v(" Note : ")]),
                          t._v(
                            " Kivicare plguin requires a folder permission on mention path "
                          ),
                          e("b", [t._v(" wp-content/uploads/kiviCare_lang ")]),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [
                            t._v(
                              " Common issue :  Kivicare dashboard blank ? "
                            ),
                          ]),
                          t._v(" "),
                          e("br"),
                          t._v(
                            "  \n                        This is happening because your kivicare setup has not given a appropriate permission for this "
                          ),
                          e("b", [t._v(" wp-content/uploads/kiviCare_lang ")]),
                          t._v(" path. "),
                          e("br"),
                          t._v(" "),
                          e("b", [t._v(" Solution : ")]),
                          t._v(
                            " You need to manually copy language json files from plugin folder "
                          ),
                          e("b", [t._v(" resources/assets/lang ")]),
                          t._v(" and paste it to "),
                          e("b", [t._v(" wp-content/uploads/kiviCare_lang ")]),
                          t._v(" folder.\n                    "),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary ml-3 mt-3" }, [
                          t._v(" Wordpress Translation Plugin Support "),
                          e("sup", { staticStyle: { color: "red" } }, [
                            t._v(" (New) "),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v(
                            "\n                        You can change kivicare plugin text with the use of any wordpress translation plugin.\n                    "
                          ),
                        ]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row kivicare_get_help" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v(" SMS (Twilio) "),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-md-4" }, [
                        e(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-primary ext-primary float-right kivicare_external_link",
                            attrs: {
                              href: "https://apps.iqonic.design/docs/product/kivicare/pro-version/sms-notifications-twilio/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("i", { staticClass: "fas fa-external-link-alt" }),
                            t._v(" SMS intigration Documentation "),
                          ]
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v(
                            "\n                        For sending a SMS with kivicare we are providing  "
                          ),
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://www.twilio.com/sms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            },
                            [
                              e("b", [t._v(" Twilio SMS ")]),
                              t._v(" "),
                              e("i", {
                                staticClass: "fas fa-external-link-alt",
                              }),
                            ]
                          ),
                          t._v(" support .\n                    "),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [t._v(" Note : ")]),
                          t._v(
                            " Set Twilio Geo Location Pemission with your Twilio account.\n                            Basically you need to select country where you want to enable your SMS Service. \n                        "
                          ),
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://www.twilio.com/console/sms/settings/geo-permissions",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            },
                            [
                              e("b", [t._v(" Enable Geo Locations ")]),
                              t._v(" "),
                              e("i", {
                                staticClass: "fas fa-external-link-alt",
                              }),
                            ]
                          ),
                          t._v(" "),
                          e("br"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("b", [
                            t._v(
                              " Common issue with Free trial SMS setup with Twilio : "
                            ),
                          ]),
                          t._v(" "),
                          e("br"),
                          t._v(" "),
                          e("b", [
                            t._v(
                              " With twilio free SMS trial you can send SMS on only verified number. "
                            ),
                          ]),
                          t._v(" "),
                          e("br"),
                          t._v(
                            "\n                            Here you can verify receiver's number with Twilio.\n                        "
                          ),
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://www.twilio.com/console/phone-numbers/verified",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            },
                            [
                              e("b", [t._v(" Verify receiver's number here ")]),
                              t._v(" "),
                              e("i", {
                                staticClass: "fas fa-external-link-alt",
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row kivicare_get_help" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v("  Telemed  "),
                          e("small", { staticClass: "text-muted" }, [
                            t._v(" ( Zoom Intigration ) "),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-md-4" }, [
                        e(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-primary ext-primary float-right kivicare_external_link",
                            attrs: {
                              href: "https://apps.iqonic.design/docs/product/kivicare/kivicare-telemed-add-on/admin/#zoom-configuration",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("i", { staticClass: "fas fa-external-link-alt" }),
                            t._v(" Telemed Documentation "),
                          ]
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v(" \n                        Setting up a "),
                          e("b", [t._v(" Telemed ")]),
                          t._v(
                            " (Zoom) appointment booking for a doctor.\n                        Doctor need to just follow few steps as mention below. We have also mention following steps in doctor detail page.\n                        A "
                          ),
                          e("b", [t._v(" Administrator ")]),
                          t._v(" OR "),
                          e("b", [t._v(" Clinic admin ")]),
                          t._v(
                            " can also do this for a doctor.\n                    "
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            " \n                       When a doctor is done with saving the zoom Api keys & charges a doctor will get a "
                          ),
                          e("b", [t._v(" Telemed ")]),
                          t._v(
                            " service in his appointment services list. \n                    "
                          ),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [t._v(" Note : ")]),
                          t._v(
                            " Service name Telemed cannot be changed.\n                    "
                          ),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e(
                        "div",
                        { staticClass: "col-md-7" },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("h4", { staticClass: "text-primary mb-3" }, [
                                t._v(
                                  t._s(
                                    t.formTranslation.doctor
                                      .zoom_configuration_guide
                                  )
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e(
                            "b-list-group",
                            [
                              e("b-list-group-item", [
                                t._v(
                                  t._s(t.formTranslation.doctor.zoom_step1) +
                                    " \n                            "
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
                                      " \n                                " +
                                        t._s(
                                          t.formTranslation.doctor
                                            .zoom_market_place_portal
                                        ) +
                                        " \n                            "
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              e("b-list-group-item", [
                                t._v(
                                  t._s(t.formTranslation.doctor.zoom_step2) +
                                    "\n                        "
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
                                      t._s(t.formTranslation.doctor.create_app)
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              e("b-list-group-item", [
                                t._v(t._s(t.formTranslation.doctor.zoom_step3)),
                              ]),
                              t._v(" "),
                              e("b-list-group-item", [
                                t._v(
                                  t._s(t.formTranslation.doctor.zoom_step4) +
                                    "\n                        "
                                ),
                              ]),
                              t._v(" "),
                              e("b-list-group-item", [
                                t._v(
                                  t._s(t.formTranslation.doctor.zoom_step5) +
                                    "\n                        "
                                ),
                              ]),
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
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v("  Woocommerce Paymet Gateway "),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-md-4" }, [
                        e(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-primary ext-primary float-right",
                            attrs: {
                              href: "https://apps.iqonic.design/docs/product/kivicare/kivicare-telemed-add-on/admin/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("i", { staticClass: "fas fa-external-link-alt" }),
                            t._v(" Woocommerce Documentation "),
                          ]
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v(
                            "\n                        For setting up a woocommerce payment gateway with kivicare payment, You have a basic woocommmerce setup with any payment method on it.\n                    "
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "\n                        By default woocommerce payment is  "
                          ),
                          e("b", [t._v(" Disabled ")]),
                          t._v(" you need to "),
                          e("b", [t._v(" Enabled ")]),
                          t._v(" it from "),
                          e("b", [t._v(" payment tab ")]),
                          t._v(" in "),
                          e("b", [t._v(" Setting page ")]),
                          t._v(".\n                    "),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "\n                        Appointment Service charges are considered for appointment's woocommerce payment.\n                    "
                          ),
                        ]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: { init: function () {} },
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("p", { staticClass: "border p-2 text-muted" }, [
                      e("b", [t._v("Note :- ")]),
                      t._v(
                        " If Woocommerce payment settings is toggle on, then appointment message sent through Email/SMS/Whatsapp after payment successfully done by patient And this feature is only available on Kivicare-Pro.\n             "
                      ),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v(" Restrict Advance Appointment Booking "),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          e("ul", [
                            e("li", [
                              e("b", [t._v(" Open booking days :- ")]),
                              t._v(
                                " As consideration of current date booking already opened as mentioned days in settings. "
                              ),
                              e("br"),
                            ]),
                            t._v(" "),
                            e("li", [
                              e("b", [t._v(" Close booking days :- ")]),
                              t._v(
                                " As consideration of current date booking already closed as mentioned days in settings.  "
                              ),
                              e("br"),
                              e("br"),
                            ]),
                          ]),
                          t._v(" "),
                          e("b", [t._v(" Example: ")]),
                          t._v(" "),
                          e("br"),
                          t._v(
                            "\n                        current Date => 25 November"
                          ),
                          e("br"),
                          t._v(
                            "\n                        Pre-booking  => 10 days , so patient/doctor/receptionist can't select the date from 25 November to 5 December."
                          ),
                          e("br"),
                          t._v(
                            "\n                        Post-booking => 10 days, so patient/doctor/receptionist can't select the date after 5 December."
                          ),
                          e("br"),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row mt-3" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v(" File Upload Setting "),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          t._v("\n                        If "),
                          e("b", [t._v("Appointment File Upload ")]),
                          t._v(
                            "toggle is on, then patient can add their reports at the time of booking an appointment. "
                          ),
                          e("br"),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [t._v("Note :- ")]),
                          t._v(
                            " If kivicare pro version is activate then patients can add more then one report, else patients can only add one report at a time while booking an appointment. "
                          ),
                          e("br"),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row mt-3" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v("Appointment Reminder"),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("p", [
                          e("ol", [
                            e("li", [
                              e("b", [t._v("Appointment Email Reminder :- ")]),
                              t._v(" If the toggle is on ,Then an "),
                              e("b", [t._v("Appointment Email Reminder")]),
                              t._v(" will be send to "),
                              e("b", [t._v("patient")]),
                              t._v(" through "),
                              e("b", [t._v("Email")]),
                              t._v(". "),
                              e("br"),
                            ]),
                            t._v(" "),
                            e("li", [
                              e("b", [t._v("Appointment Sms Reminder :- ")]),
                              t._v(" If the toggle is on ,Then an "),
                              e("b", [t._v("Appointment Sms Reminder")]),
                              t._v(" will be send to "),
                              e("b", [t._v("patient")]),
                              t._v(" through "),
                              e("b", [t._v("SMS")]),
                              t._v(". "),
                              e("br"),
                            ]),
                            t._v(" "),
                            e("li", [
                              e("b", [
                                t._v("Appointment Whatsapp Reminder :- "),
                              ]),
                              t._v(" If the toggle is on ,Then an "),
                              e("b", [t._v("Appointment Whatsapp Reminder")]),
                              t._v(" will be send to "),
                              e("b", [t._v("patient")]),
                              t._v(" through "),
                              e("b", [t._v("WhatsApp")]),
                              t._v(". "),
                              e("br"),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "border p-2 text-muted" }, [
                          e("b", [t._v("Note :- ")]),
                          t._v(
                            " Appointment Sms Reminder and Appointment Whatsapp Reminder, Required Kivicare-Pro to be Activated and also from pro settings :-  toggle on WhatsApp and  SMS, for access Appointment Sms Reminder and Appointment Whatsapp Reminder, this two setting is required to toggle on."
                          ),
                          e("br"),
                        ]),
                      ]),
                    ]),
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
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(15),
      r = Object(i.a)(
        {},
        function () {
          var t = this._self._c;
          return t("div", { staticClass: "row" }, [
            t(
              "div",
              { staticClass: "col-md-12" },
              [
                t(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    t("div", { staticClass: "row" }, [
                      t("div", { staticClass: "col-md-8" }, [
                        t("h2", { staticClass: "text-primary" }, [
                          this._v("Add Holiday "),
                        ]),
                      ]),
                    ]),
                    this._v(" "),
                    t("div", { staticClass: "row p-3" }, [
                      t("div", { staticClass: "col-md-12" }, [
                        t("p", [
                          this._v(
                            "\n                        If an holiday is set and they have an appointment between that holiday dates then all appointments will get cancelled and appointment cancelled mail/sms/whatsapp message will send to patients.\n                    "
                          ),
                        ]),
                        this._v(" "),
                        t("p", { staticClass: "border p-2 text-muted" }, [
                          t("ul", [
                            t("li", [
                              this._v(
                                "\n                                sms/whatsapp only work in kivicare-pro only.\n                            "
                              ),
                            ]),
                            this._v(" "),
                            t("li", [
                              this._v(
                                "\n                              Note:-  once an holiday is set and appointments get cancelled then cancelled appointments cannot be reverted.\n                            "
                              ),
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
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = r.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(78),
      r = {
        props: {
          addon_type: {
            type: [String],
            default: function () {
              return "pro";
            },
          },
        },
        name: "overlay",
        data: function () {
          return { selected_addon: i.b };
        },
        mounted: function () {
          this.selected_addon =
            null !== i.a && void 0 !== i.a && i.a[this.addon_type]
              ? i.a[this.addon_type]
              : this.selected_addon;
        },
      },
      o = n(15),
      a = Object(o.a)(
        r,
        function () {
          var t = this._self._c;
          return t("div", { staticClass: "text-center" }, [
            t(
              "a",
              { attrs: { href: this.selected_addon.href, target: "_blank" } },
              [
                t("i", {
                  staticClass: "fas fa-lock text-primary",
                  staticStyle: { "font-size": "30px" },
                }),
                this._v(" "),
                t("p", {
                  attrs: { id: "cancel-label" },
                  domProps: {
                    innerHTML: this._s(
                      this.kivicareProFeatureIcon(
                        this.addon_type,
                        this.selected_addon.message
                      )
                    ),
                  },
                }),
              ]
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = a.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = {
        name: "ModuleDataExport",
        props: {
          module_name: {
            type: [String],
            default: function () {
              return "";
            },
          },
          module_type: {
            type: [String],
            default: function () {
              return "";
            },
          },
          module_data: {
            type: [Array, Object],
            default: function () {
              return [];
            },
          },
          tableData: {
            type: [Boolean],
            default: function () {
              return !0;
            },
          },
        },
        data: function () {
          return { exportData: [] };
        },
        mounted: function () {
          this.formatData(this.module_data);
        },
        methods: {
          formatPatientData: function (t, e, n) {
            switch (t) {
              case "u_id":
              case "ID":
                n[
                  this.patientUniqueIdEnable
                    ? this.formTranslation.patient.unique_id
                    : this.formTranslation.common.id
                ] = e;
                break;
              case "display_name":
                n[this.formTranslation.patient.dt_lbl_name] = e;
                break;
              case "profile_image":
                n[this.formTranslation.clinic.profile_img] = e;
                break;
              case "clinic_name":
                n[this.formTranslation.patient.clinic] = e;
                break;
              case "user_email":
                n[this.formTranslation.patient.dt_lbl_email] = e;
                break;
              case "mobile_number":
                n[this.formTranslation.patient.dt_lbl_mobile_number] = e;
                break;
              case "gender":
                n[this.formTranslation.common.gender] = e;
                break;
              case "dob":
                n[this.formTranslation.common.dob] = e;
                break;
              case "full_address":
                n[this.formTranslation.common.address] = e;
                break;
              case "blood_group":
                n[this.formTranslation.clinic.blood_group] = e;
                break;
              case "user_registered":
                n[this.formTranslation.patient.dt_lbl_registered] = e;
                break;
              case "user_status":
                n[this.formTranslation.common.status] =
                  "0" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatStaticData: function (t, e, n) {
            switch (t) {
              case "id":
              case "type":
                n[t] = e;
                break;
              case "label":
                n.name = e;
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatCustomFieldData: function (t, e, n) {
            switch (t) {
              case "id":
              case "module_type":
                n[t] = e;
                break;
              case "fields":
                var i = JSON.parse(e);
                (n.label = i.label),
                  (n.placeholder = i.placeholder ? i.placeholder : ""),
                  (n.options =
                    void 0 !== i.options && Array.isArray(i.options)
                      ? i.options
                          .map(function (t) {
                            return t.text;
                          })
                          .join(",")
                      : ""),
                  (n.type = i.type),
                  (n.required = i.isRequired);
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatClinicDoctorHolidayData: function (t, e, n) {
            switch (t) {
              case "id":
              case "module_type":
              case "doctor_name":
              case "clinic_name":
                n[t] = e;
                break;
              case "start_date":
              case "end_date":
                n[t] = e;
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatBillingsData: function (t, e, n) {
            switch (t) {
              case "bill_id":
                n.id = e;
                break;
              case "id":
                n.encounter_id = e;
                break;
              case "total_amount":
              case "discount":
              case "actual_amount":
              case "clinic_id":
              case "doctor_id":
              case "patient_id":
              case "appointment_id":
              case "doctor_name":
              case "patient_name":
              case "clinic_name":
              case "service_name":
              case "encounter_date":
                n[t] = e;
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.patient_bill.unpaid
                    : this.formTranslation.patient_bill.paid;
            }
            return n;
          },
          formatSessionData: function (t, e, n, i) {
            switch (t) {
              case "id":
              case "time_slot":
                n[t] = e;
                break;
              case "days":
                n[t] = void 0 !== e && Array.isArray(e) ? e.join(",") : "";
                break;
              case "s_one_start_time":
                var r = "";
                "" !== i.s_one_start_time.HH &&
                  "" !== i.s_one_end_time.MM &&
                  "" !== i.s_one_start_time.MM &&
                  "" !== i.s_one_end_time.HH &&
                  (r =
                    this.timeObjectToString(i.s_one_start_time) +
                    " to " +
                    this.timeObjectToString(i.s_one_end_time)),
                  (n[
                    this.formTranslation.doctor_session.dt_lbl_morning_session
                  ] = r);
                break;
              case "s_two_start_time":
                var o = "";
                "" !== i.s_two_start_time.HH &&
                  "" !== i.s_two_end_time.MM &&
                  "" !== i.s_two_start_time.MM &&
                  "" !== i.s_two_end_time.HH &&
                  (o =
                    this.timeObjectToString(i.s_two_start_time) +
                    " to " +
                    this.timeObjectToString(i.s_two_end_time)),
                  (n[
                    this.formTranslation.doctor_session.dt_lbl_evening_session
                  ] = o);
                break;
              case "clinic_id":
                (n.clinic_id = e.id), (n.clinic_name = e.label);
                break;
              case "doctors":
                (n.doctor_id = e.id), (n.doctor_name = e.label);
            }
            return n;
          },
          formatServicesData: function (t, e, n, i) {
            switch (t) {
              case "id":
              case "doctor_id":
              case "charges":
              case "telemed_service":
              case "name":
              case "doctor_name":
                n[t] = e;
                break;
              case "multiple":
                n.allow_multiple = e && "-" !== e ? e : "yes";
                break;
              case "service_type":
                n.service_category = e.replace(" ", "_");
                break;
              case "service_id":
                n.service_category_id = e;
                break;
              case "service_name_alias":
                n.service_category_alias = e || "";
                break;
              case "image":
                n.image =
                  e && "-" !== e
                    ? e
                    : pluginBASEURL + "assets/images/kc-demo-img.png";
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatReceptionistData: function (t, e, n, i) {
            switch (t) {
              case "ID":
              case "clinic_id":
              case "clinic_name":
              case "mobile_number":
              case "gender":
              case "dob":
              case "full_address":
                n[t] = e;
                break;
              case "display_name":
                n.name = e && "-" !== e ? e : "yes";
                break;
              case "user_email":
                n.email = e;
                break;
              case "image":
                n.profile_image = e;
                break;
              case "user_status":
                n[t] =
                  "0" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatDoctorData: function (t, e, n, i) {
            switch (t) {
              case "ID":
              case "clinic_id":
              case "clinic_name":
              case "mobile_number":
              case "gender":
              case "dob":
              case "specialties":
              case "full_address":
                n[t] = e;
                break;
              case "display_name":
                n.name = e && "-" !== e ? e : "yes";
                break;
              case "user_email":
                n.email = e;
                break;
              case "image":
                n.profile_image = e;
                break;
              case "user_status":
                n[t] =
                  "0" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatClinicData: function (t, e, n, i) {
            switch (t) {
              case "clinic_admin_email":
              case "clinic_admin_id":
              case "dob":
              case "specialties":
              case "clinic_full_address":
                n[t] = e;
                break;
              case "id":
                n.clinic_id = e;
                break;
              case "name":
                n.clinic_name = e && "-" !== e ? e : "yes";
                break;
              case "email":
                n.clinic_email = e;
                break;
              case "telephone_no":
                n.clinic_contact_no = e;
                break;
              case "profile_image":
                n.clinic_admin_profile_image = e;
                break;
              case "clinic_image":
                n.clinic_image = e;
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.inactive;
            }
            return n;
          },
          formatEncounterData: function (t, e, n, i) {
            switch (t) {
              case "id":
              case "clinic_id":
              case "clinic_name":
              case "doctor_id":
              case "doctor_name":
              case "patient_id":
              case "patient_name":
              case "appointment_id":
              case "description":
                n[t] = e;
                break;
              case "encounter_date":
              case "created_at":
                n.clinic_name = e;
                break;
              case "status":
                n[t] =
                  "1" === e
                    ? this.formTranslation.common.active
                    : this.formTranslation.common.closed;
            }
            return n;
          },
          formatPrescriptionData: function (t, e, n, i) {
            return (n[t] = e), n;
          },
          formatAppointmentData: function (t, e, n, i) {
            return (n[t] = e), n;
          },
          formatData: function (t) {
            if (!(t.length <= 0)) {
              var e = this;
              this.exportData = t.map(function (t) {
                return Object.keys(t).reduce(function (n, i) {
                  var r = "" !== t[i] ? t[i] : "-";
                  switch (e.module_type) {
                    case "patient":
                      n = e.formatPatientData(i, r, n);
                      break;
                    case "listing_data":
                      n = e.formatStaticData(i, r, n);
                      break;
                    case "custom_field":
                      n = e.formatCustomFieldData(i, r, n);
                      break;
                    case "clinic_doctor_holiday":
                      n = e.formatClinicDoctorHolidayData(i, r, n);
                      break;
                    case "billings":
                      n = e.formatBillingsData(i, r, n);
                      break;
                    case "session":
                      n = e.formatSessionData(i, r, n, t);
                      break;
                    case "services":
                      n = e.formatServicesData(i, r, n, t);
                      break;
                    case "receptionist":
                      n = e.formatReceptionistData(i, r, n, t);
                      break;
                    case "doctor":
                      n = e.formatDoctorData(i, r, n, t);
                      break;
                    case "clinic":
                      n = e.formatClinicData(i, r, n, t);
                      break;
                    case "encounter":
                      n = e.formatEncounterData(i, r, n, t);
                      break;
                    case "prescription":
                      n = e.formatPrescriptionData(i, r, n, t);
                      break;
                    case "appointment":
                      n = e.formatAppointmentData(i, r, n, t);
                  }
                  return n;
                }, {});
              });
            }
          },
          timeObjectToString: function (t) {
            return t.HH + ":" + t.mm;
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          fileExportName: function () {
            return this.module_name + " - " + moment().format("YYYY-MM-DD");
          },
          patientUniqueIdEnable: function () {
            return (
              void 0 !== this.userData.unquie_id_status &&
              1 == this.userData.unquie_id_status &&
              this.userData.unquie_id_status
            );
          },
        },
        watch: {
          module_data: function (t, e) {
            this.formatData(t);
          },
        },
      },
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return t.userData.addOns.kiviPro && t.exportData.length > 0
            ? e(
                "div",
                { staticClass: "row" },
                [
                  e(
                    "download-csv",
                    {
                      attrs: {
                        data: t.exportData,
                        name: t.fileExportName + ".csv",
                      },
                    },
                    [
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
                          staticClass: "btn btn-sm",
                          attrs: {
                            title: t.formTranslation.patient.exports_CSV,
                          },
                        },
                        [e("i", { staticClass: "fas fa-file-csv" })]
                      ),
                    ]
                  ),
                  t._v(" "),
                  1 == t.userData.addOns.kiviPro
                    ? e(
                        "vue-excel-xlsx",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover",
                              modifiers: { hover: !0 },
                            },
                          ],
                          staticClass: "btn btn-sm mr-0",
                          attrs: {
                            data: t.exportData,
                            columns:
                              t.exportData.length > 0
                                ? Object.keys(t.exportData[0]).map(function (
                                    t
                                  ) {
                                    return { label: t, field: t };
                                  })
                                : [],
                            "sheet-name": t.module_type,
                            "file-type": "xlsx",
                            "file-name": t.fileExportName,
                            title:
                              t.formTranslation.clinic_schedule.dt_export_excel,
                          },
                        },
                        [e("i", { staticClass: "fa fa-file-excel" })]
                      )
                    : t._e(),
                  t._v(" "),
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
                      staticClass: "btn btn-sm",
                      attrs: { title: t.formTranslation.common.export_pdf },
                      on: {
                        click: function (e) {
                          return t.printPdfFromArray(
                            t.exportData,
                            t.module_name
                          );
                        },
                      },
                    },
                    [e("i", { staticClass: "fa fa-file-pdf" })]
                  ),
                ],
                1
              )
            : t._e();
        },
        [],
        !1,
        null,
        "2e08227e",
        null
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(8),
      r = n(9);
    function o(t) {
      return (o =
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
    function a() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var a = i && i.prototype instanceof c ? i : c,
          d = Object.create(a.prototype);
        return (
          s(
            d,
            "_invoke",
            (function (n, i, r) {
              var o,
                a,
                s,
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
                    return (o = e), (a = 0), (s = t), (p.n = n), l;
                  },
                };
              function h(n, i) {
                for (a = n, s = i, e = 0; !u && c && !r && e < d.length; e++) {
                  var r,
                    o = d[e],
                    h = p.p,
                    f = o[2];
                  n > 3
                    ? (r = f === i) &&
                      ((s = o[(a = o[4]) ? 5 : ((a = 3), 3)]),
                      (o[4] = o[5] = t))
                    : o[0] <= h &&
                      ((r = n < 2 && h < o[1])
                        ? ((a = 0), (p.v = i), (p.n = o[1]))
                        : h < f &&
                          (r = n < 3 || o[0] > i || i > f) &&
                          ((o[4] = n), (o[5] = i), (p.n = f), (a = 0)));
                }
                if (r || n > 1) return l;
                throw ((u = !0), i);
              }
              return function (r, d, f) {
                if (c > 1) throw TypeError("Generator is already running");
                for (
                  u && 1 === d && h(d, f), a = d, s = f;
                  (e = a < 2 ? t : s) || !u;

                ) {
                  o ||
                    (a
                      ? a < 3
                        ? (a > 1 && (p.n = -1), h(a, s))
                        : (p.n = s)
                      : (p.v = s));
                  try {
                    if (((c = 2), o)) {
                      if ((a || (r = "next"), (e = o[r]))) {
                        if (!(e = e.call(o, s)))
                          throw TypeError("iterator result is not an object");
                        if (!e.done) return e;
                        (s = e.value), a < 2 && (a = 0);
                      } else
                        1 === a && (e = o.return) && e.call(o),
                          a < 2 &&
                            ((s = TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method"
                            )),
                            (a = 1));
                      o = t;
                    } else if ((e = (u = p.n < 0) ? s : n.call(i, p)) !== l)
                      break;
                  } catch (e) {
                    (o = t), (a = 1), (s = e);
                  } finally {
                    c = 1;
                  }
                }
                return { value: e, done: u };
              };
            })(n, r, o),
            !0
          ),
          d
        );
      }
      var l = {};
      function c() {}
      function d() {}
      function u() {}
      e = Object.getPrototypeOf;
      var p = [][i]
          ? e(e([][i]()))
          : (s((e = {}), i, function () {
              return this;
            }),
            e),
        h = (u.prototype = c.prototype = Object.create(p));
      function f(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, u)
            : ((t.__proto__ = u), s(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(h)),
          t
        );
      }
      return (
        (d.prototype = u),
        s(h, "constructor", u),
        s(u, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        s(u, r, "GeneratorFunction"),
        s(h),
        s(h, r, "Generator"),
        s(h, i, function () {
          return this;
        }),
        s(h, "toString", function () {
          return "[object Generator]";
        }),
        (a = function () {
          return { w: o, m: f };
        })()
      );
    }
    function s(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (s = function (t, e, n, i) {
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
            s(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function l(t, e) {
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
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l(Object(n), !0).forEach(function (e) {
              d(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function d(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != o(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != o(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == o(e) ? e : e + "";
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
    function u(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    var p = {
        name: "ModuleDataImport",
        components: { ModalPopup: n(43).a },
        props: {
          module_type: {
            type: [String],
            default: function () {
              return "";
            },
          },
          module_name: {
            type: [String],
            default: function () {
              return "";
            },
          },
          required_data: {
            type: [Array, Object],
            default: function () {
              return [];
            },
          },
          encounter_id: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
        },
        data: function () {
          return {
            openModel: !1,
            importTypeOption: [
              { type: "csv", label: "CSV" },
              { type: "xls", label: "XLS" },
            ],
            upload_file_detail: {
              name: "",
              type: "csv",
              url: "",
              id: "",
              module_type: "",
              sms: 0,
              e_mail: 0,
            },
            fileUploadLoader: !1,
            submitting: !1,
            submittedValidation: !1,
            sample_file: { csv: "", xls: "" },
            totals: 0,
            remaining_row: 0,
            total_row_inserted: 0,
            import_done: !1,
            current_imported_value: 0,
            max_importing_value: 100,
            detail_report: {},
          };
        },
        validations: {
          upload_file_detail: {
            url: { required: r.required },
            type: { required: r.required },
            id: { required: r.required },
          },
        },
        mounted: function () {
          (this.upload_file_detail.name =
            this.formTranslation.common.no_file_chosen),
            this.get_demo_sample_file();
        },
        methods: {
          upload_import_data_file: function () {
            if (!0 === this.userData.addOns.kiviPro) {
              var t = this;
              this.fileUploadLoader = !0;
              var e = kivicareCustomImageUploader(
                this.formTranslation,
                this.upload_file_detail.type
              );
              e.on("select", function () {
                var n = e.state().get("selection").first().toJSON();
                (t.upload_file_detail.name = n.filename),
                  (t.upload_file_detail.url = n.url),
                  (t.upload_file_detail.id = n.id),
                  (t.fileUploadLoader = !1);
              }),
                e.on("open", function () {
                  t.openModel = !1;
                }),
                e.open(),
                e.on("close", function () {
                  (t.openModel = !0), (t.fileUploadLoader = !1), e.close();
                });
            }
          },
          typeChange: function () {
            (this.fileUploadLoader = !1),
              (this.upload_file_detail.id = ""),
              (this.upload_file_detail.url = ""),
              (this.upload_file_detail.name =
                this.formTranslation.common.no_file_chosen);
          },
          model_close: function () {
            var t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            t && (this.openModel = !1),
              (this.upload_file_detail = {
                name: this.formTranslation.common.no_file_chosen,
                type: "csv",
                url: "",
                id: "",
                module_type: "",
                sms: 0,
                e_mail: 0,
              }),
              (this.import_done = !1),
              (this.fileUploadLoader = !1),
              (this.detail_report = {}),
              (this.submittedValidation = !1),
              (this.submitting = !1);
          },
          handleSubmit: function () {
            (this.submittedValidation = !0),
              this.$v.$touch(),
              this.$v.upload_file_detail.$invalid ||
                ((this.submittedValidation = !1),
                (this.submitting = !0),
                (this.upload_file_detail.module_type = this.module_type),
                (this.upload_file_detail.encounter_id = this.encounter_id),
                (this.import_done = !1),
                (this.total_row_inserted = 0),
                (this.start_from = 0),
                (this.totals = 0),
                (this.email_user_by_other_user = 0),
                (this.remaining_row = 0),
                (this.failed_to_save_user = 0),
                (this.invalid_details = 0),
                (this.patient_not_exists = 0),
                (this.clinic_not_exists = 0),
                (this.doctor_not_exists = 0),
                (this.failed_to_save = 0),
                (this.already_exists = 0),
                (this.already_same_data_exists = 0),
                (this.doctor_id_not_exists = 0),
                (this.already_same_service_exists = 0),
                (this.invalid_module_type = 0),
                (this.invalid_input_type = 0),
                (this.select_type_option_invalid = 0),
                (this.clinic_email_user_by_other_user = 0),
                (this.clinic_admin_email_user_by_other_user = 0),
                (this.clinic_email_user_by_other_clinic = 0),
                (this.clinic_admin_email_user_by_other_clinic = 0),
                (this.email_user_by_other_user = 0),
                (this.email_user_by_other_user = 0),
                (this.failed_to_save_user = 0),
                (this.current_imported_value = 0),
                (this.max_importing_value = 100),
                this.importInChunks());
          },
          importInChunks: function () {
            var t,
              e = this;
            return ((t = a().m(function t() {
              var n, r, o, s, l, u, p, h;
              return a().w(
                function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (t.p = 0),
                          (t.n = 1),
                          Object(i.a)(
                            "import_module_data",
                            c(
                              c({}, e.upload_file_detail),
                              {},
                              d(
                                d(
                                  {
                                    required_field: e.required_data,
                                    start_from: e.start_from,
                                    same_e_mail_used:
                                      e.email_user_by_other_user,
                                    invalid_details: e.invalid_details,
                                    patient_not_exists: e.patient_not_exists,
                                    clinic_not_exists: e.clinic_not_exists,
                                    doctor_not_exists: e.doctor_not_exists,
                                    failed_to_save: e.failed_to_save,
                                    already_exists: e.already_exists,
                                    already_same_data_exists:
                                      e.already_same_data_exists,
                                    doctor_id_not_exists:
                                      e.doctor_id_not_exists,
                                    already_same_service_exists:
                                      e.already_same_service_exists,
                                    invalid_module_type: e.invalid_module_type,
                                    invalid_input_type: e.invalid_input_type,
                                    select_type_option_invalid:
                                      e.select_type_option_invalid,
                                    clinic_email_user_by_other_user:
                                      e.clinic_email_user_by_other_user,
                                    clinic_admin_email_user_by_other_user:
                                      e.clinic_admin_email_user_by_other_user,
                                    clinic_email_user_by_other_clinic:
                                      e.clinic_email_user_by_other_clinic,
                                    clinic_admin_email_user_by_other_clinic:
                                      e.clinic_admin_email_user_by_other_clinic,
                                    email_user_by_other_user:
                                      e.email_user_by_other_user,
                                  },
                                  "email_user_by_other_user",
                                  e.email_user_by_other_user
                                ),
                                "failed_to_save_user",
                                e.failed_to_save_user
                              )
                            )
                          )
                        );
                      case 1:
                        void 0 !== (n = t.v).data.status && !0 === n.data.status
                          ? ((e.totals = n.data.total_row),
                            (e.total_row_inserted += n.data.total_data_insert),
                            (e.remaining_row = n.data.remaining_row || 0),
                            (e.start_from = e.totals - e.remaining_row),
                            "patient" === e.module_type
                              ? ((e.email_user_by_other_user =
                                  n.data.detail_report.email_user_by_other_user.value),
                                (e.failed_to_save_user =
                                  n.data.detail_report.failed_to_save_user.value))
                              : "appointment" === e.module_type
                              ? ((e.invalid_details =
                                  n.data.detail_report.invalid_details.value),
                                (e.patient_not_exists =
                                  n.data.detail_report.patient_not_exists.value),
                                (e.clinic_not_exists =
                                  n.data.detail_report.clinic_not_exists.value),
                                (e.doctor_not_exists =
                                  n.data.detail_report.doctor_not_exists.value),
                                (e.already_exists =
                                  n.data.detail_report.already_exists.value),
                                (e.failed_to_save =
                                  n.data.detail_report.failed_to_save.value))
                              : "static_data" === e.module_type
                              ? (e.already_same_data_exists =
                                  n.data.detail_report.already_same_data_exists.value)
                              : "service" === e.module_type
                              ? ((e.doctor_id_not_exists =
                                  n.data.detail_report.doctor_id_not_exists.value),
                                (e.already_same_service_exists =
                                  n.data.detail_report.already_same_service_exists.value))
                              : "customField" === e.module_type
                              ? ((e.invalid_module_type =
                                  n.data.detail_report.invalid_module_type.value),
                                (e.invalid_input_type =
                                  n.data.detail_report.invalid_input_type.value),
                                (e.select_type_option_invalid =
                                  n.data.detail_report.select_type_option_invalid.value))
                              : (e.module_type = "clinic")
                              ? ((e.clinic_email_user_by_other_user =
                                  null ===
                                    (r =
                                      n.data.detail_report
                                        .clinic_email_user_by_other_user) ||
                                  void 0 === r
                                    ? void 0
                                    : r.value),
                                (e.clinic_admin_email_user_by_other_user =
                                  null ===
                                    (o =
                                      n.data.detail_report
                                        .clinic_admin_email_user_by_other_user) ||
                                  void 0 === o
                                    ? void 0
                                    : o.value),
                                (e.clinic_email_user_by_other_clinic =
                                  null ===
                                    (s =
                                      n.data.detail_report
                                        .clinic_email_user_by_other_clinic) ||
                                  void 0 === s
                                    ? void 0
                                    : s.value),
                                (e.clinic_admin_email_user_by_other_clinic =
                                  null ===
                                    (l =
                                      n.data.detail_report
                                        .clinic_admin_email_user_by_other_clinic) ||
                                  void 0 === l
                                    ? void 0
                                    : l.value))
                              : (e.module_type = "receptionist")
                              ? (e.email_user_by_other_user =
                                  null ===
                                    (u =
                                      n.data.detail_report
                                        .email_user_by_other_user) ||
                                  void 0 === u
                                    ? void 0
                                    : u.value)
                              : (e.module_type = "doctor") &&
                                ((e.email_user_by_other_user =
                                  null ===
                                    (p =
                                      n.data.detail_report
                                        .email_user_by_other_user) ||
                                  void 0 === p
                                    ? void 0
                                    : p.value),
                                (e.failed_to_save_user =
                                  null ===
                                    (h =
                                      n.data.detail_report
                                        .failed_to_save_user) || void 0 === h
                                    ? void 0
                                    : h.value)),
                            e.totals !== e.remaining_row &&
                              (e.current_imported_value =
                                e.totals - e.remaining_row),
                            (e.max_importing_value = e.totals),
                            e.remaining_row > 0
                              ? e.importInChunks()
                              : ((e.submitting = !1),
                                (e.import_done = !0),
                                (e.detail_report = n.data.detail_report),
                                e.$emit("reloadList"),
                                displayMessage(n.data.message)))
                          : ((e.submitting = !1),
                            displayErrorMessage(n.data.message)),
                          (t.n = 3);
                        break;
                      case 2:
                        (t.p = 2),
                          t.v,
                          (e.submitting = !1),
                          displayErrorMessage(
                            e.formTranslation.common.internal_server_error
                          );
                      case 3:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[0, 2]]
              );
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (i, r) {
                var o = t.apply(e, n);
                function a(t) {
                  u(o, i, r, a, s, "next", t);
                }
                function s(t) {
                  u(o, i, r, a, s, "throw", t);
                }
                a(void 0);
              });
            })();
          },
          get_demo_sample_file: function () {
            var t = this;
            Object(i.a)("import_demo_files", { module_type: this.module_type })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.sample_file = e.data.data);
              })
              .catch(function (t) {});
          },
          resetForm: function () {
            this.model_close(!1), (this.import_done = !1);
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      },
      h = (n(765), n(15)),
      f = Object(h.a)(
        p,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.openModel
                ? e(
                    "ModalPopup",
                    {
                      attrs: {
                        modalId: "appointment-details-modal",
                        modalSize: "lg",
                        openModal: t.openModel,
                        modalTitle:
                          t.module_name + " " + t.formTranslation.common.import,
                      },
                      on: { closeModal: t.model_close },
                    },
                    [
                      t.import_done
                        ? e("div", [
                            e(
                              "div",
                              { staticClass: "row" },
                              [
                                e("div", { staticClass: "col-md-6" }, [
                                  e("p", { staticClass: "mb-0" }, [
                                    e(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.formTranslation.common
                                                .total_rows
                                            ) +
                                            " :\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(
                                      "\n            " +
                                        t._s(t.totals) +
                                        "\n          "
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-6" }, [
                                  e("p", { staticClass: "mb-0" }, [
                                    e(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.formTranslation.common
                                                .total_rows_inserted
                                            ) +
                                            " :\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(
                                      "\n            " +
                                        t._s(t.total_row_inserted) +
                                        "\n          "
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                t._l(
                                  Object.values(t.detail_report),
                                  function (n, i) {
                                    return n.value > 0
                                      ? e(
                                          "div",
                                          { key: i, staticClass: "col-6 mt-2" },
                                          [
                                            e("p", { staticClass: "mb-0" }, [
                                              e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold",
                                                },
                                                [
                                                  t._v(
                                                    "\n              " +
                                                      t._s(n.label) +
                                                      " :\n            "
                                                  ),
                                                ]
                                              ),
                                              t._v(
                                                "\n            " +
                                                  t._s(n.value) +
                                                  "\n          "
                                              ),
                                            ]),
                                          ]
                                        )
                                      : t._e();
                                  }
                                ),
                              ],
                              2
                            ),
                            t._v(" "),
                            e("div", { staticClass: "row mt-2" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "col-12 d-flex justify-content-center align-items-center",
                                },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: { click: t.resetForm },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common
                                              .import_more_file
                                          )
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-outline-primary",
                                      attrs: { type: "button" },
                                      on: { click: t.model_close },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.formTranslation.common.close) +
                                          "\n          "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ])
                        : e("div", [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-4" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "select_type" },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.formTranslation.static_data
                                                .tag_select_type_plh
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-select",
                                      {
                                        staticClass: "form-control",
                                        attrs: { id: "select_type" },
                                        on: { change: t.typeChange },
                                        model: {
                                          value: t.upload_file_detail.type,
                                          callback: function (e) {
                                            t.$set(
                                              t.upload_file_detail,
                                              "type",
                                              e
                                            );
                                          },
                                          expression: "upload_file_detail.type",
                                        },
                                      },
                                      t._l(t.importTypeOption, function (n, i) {
                                        return e(
                                          "option",
                                          {
                                            key: i,
                                            domProps: { value: n.type },
                                          },
                                          [t._v(" " + t._s(n.label))]
                                        );
                                      }),
                                      0
                                    ),
                                    t._v(" "),
                                    t.submittedValidation &&
                                    !t.$v.upload_file_detail.type.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .file_type +
                                                  t.formTranslation.common
                                                    .required
                                              ) + "\n            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-8" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "file_upload" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.upload_file
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
                                                id: "file_upload",
                                                disabled: t.fileUploadLoader,
                                              },
                                              on: {
                                                click: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.upload_import_data_file()
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.fileUploadLoader
                                                    ? t.formTranslation.common
                                                        .loading
                                                    : t.formTranslation.common
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
                                          attrs: { for: "file_upload" },
                                        },
                                        [t._v(t._s(t.upload_file_detail.name))]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.submittedValidation &&
                                  !t.$v.upload_file_detail.url.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .no_file_chosen
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
                              e("div", { staticClass: "col-12" }, [
                                t.sample_file[t.upload_file_detail.type]
                                  ? e(
                                      "p",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        e(
                                          "a",
                                          {
                                            staticClass: "text-primary",
                                            attrs: {
                                              href: t.sample_file[
                                                t.upload_file_detail.type
                                              ],
                                              target: "_blank",
                                              download:
                                                t.module_type +
                                                "." +
                                                ("xls" ===
                                                t.upload_file_detail.type
                                                  ? "xlsx"
                                                  : t.upload_file_detail.type),
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lbl_download_sample_file
                                                ) +
                                                "\n            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e("p", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.formTranslation.common
                                          .lbl_required_field +
                                          " " +
                                          t.upload_file_detail.type +
                                          " " +
                                          t.formTranslation.common.lbl_file
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "ul",
                                  t._l(t.required_data, function (n, i) {
                                    return e("li", { key: i }, [
                                      t._v(
                                        "\n              " +
                                          t._s(n.label) +
                                          "\n            "
                                      ),
                                    ]);
                                  }),
                                  0
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            [
                              "clinic",
                              "doctor",
                              "patient",
                              "receptionist",
                            ].includes(t.module_type)
                              ? e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-12" }, [
                                    e(
                                      "p",
                                      { staticClass: "font-weight-bold mb-1" },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.formTranslation.common
                                                .send_notification_when_user_register
                                            ) +
                                            "\n          "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox mr-2",
                                        attrs: {
                                          id: "send_notification_to_user",
                                        },
                                      },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                t.upload_file_detail.e_mail,
                                              expression:
                                                "upload_file_detail.e_mail",
                                            },
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            id: "email_notification",
                                            name: "email_notification",
                                            type: "checkbox",
                                          },
                                          domProps: {
                                            value: 1,
                                            checked: Array.isArray(
                                              t.upload_file_detail.e_mail
                                            )
                                              ? t._i(
                                                  t.upload_file_detail.e_mail,
                                                  1
                                                ) > -1
                                              : t.upload_file_detail.e_mail,
                                          },
                                          on: {
                                            change: function (e) {
                                              var n =
                                                  t.upload_file_detail.e_mail,
                                                i = e.target,
                                                r = !!i.checked;
                                              if (Array.isArray(n)) {
                                                var o = t._i(n, 1);
                                                i.checked
                                                  ? o < 0 &&
                                                    t.$set(
                                                      t.upload_file_detail,
                                                      "e_mail",
                                                      n.concat([1])
                                                    )
                                                  : o > -1 &&
                                                    t.$set(
                                                      t.upload_file_detail,
                                                      "e_mail",
                                                      n
                                                        .slice(0, o)
                                                        .concat(n.slice(o + 1))
                                                    );
                                              } else
                                                t.$set(
                                                  t.upload_file_detail,
                                                  "e_mail",
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
                                              "custom-control-label text-capitalize",
                                            attrs: {
                                              for: "email_notification",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formTranslation.common.email
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
                                          "custom-control custom-checkbox mr-2",
                                        attrs: {
                                          id: "send_notification_to_user",
                                        },
                                      },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.upload_file_detail.sms,
                                              expression:
                                                "upload_file_detail.sms",
                                            },
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            id: "sms_notification",
                                            name: "sms_notification",
                                            type: "checkbox",
                                          },
                                          domProps: {
                                            value: 1,
                                            checked: Array.isArray(
                                              t.upload_file_detail.sms
                                            )
                                              ? t._i(
                                                  t.upload_file_detail.sms,
                                                  1
                                                ) > -1
                                              : t.upload_file_detail.sms,
                                          },
                                          on: {
                                            change: function (e) {
                                              var n = t.upload_file_detail.sms,
                                                i = e.target,
                                                r = !!i.checked;
                                              if (Array.isArray(n)) {
                                                var o = t._i(n, 1);
                                                i.checked
                                                  ? o < 0 &&
                                                    t.$set(
                                                      t.upload_file_detail,
                                                      "sms",
                                                      n.concat([1])
                                                    )
                                                  : o > -1 &&
                                                    t.$set(
                                                      t.upload_file_detail,
                                                      "sms",
                                                      n
                                                        .slice(0, o)
                                                        .concat(n.slice(o + 1))
                                                    );
                                              } else
                                                t.$set(
                                                  t.upload_file_detail,
                                                  "sms",
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
                                              "custom-control-label text-capitalize",
                                            attrs: { for: "sms_notification" },
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .message
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "mt-2" }, [
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "text-primary small font-weight-bold",
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .note_notification
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.submitting
                              ? e(
                                  "div",
                                  {
                                    staticClass: "progress-bar-wrapper",
                                    style:
                                      "--progress-bar-width: " +
                                      parseInt(
                                        (t.current_imported_value /
                                          t.max_importing_value) *
                                          100
                                      ) +
                                      "%",
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "progress-count" },
                                      [
                                        t._v(
                                          t._s(
                                            parseInt(
                                              (t.current_imported_value /
                                                t.max_importing_value) *
                                                100
                                            )
                                          ) + " %"
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("b-progress", {
                                      attrs: {
                                        value: t.current_imported_value,
                                        max: t.max_importing_value,
                                        variant: "primary",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-12" }, [
                                e(
                                  "div",
                                  { staticClass: "d-flex justify-content-end" },
                                  [
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-primary",
                                        attrs: {
                                          type: "button",
                                          disabled: t.submitting,
                                        },
                                        on: { click: t.handleSubmit },
                                      },
                                      [
                                        t.submitting
                                          ? e("i", {
                                              staticClass: "fa fa-sync fa-spin",
                                            })
                                          : e("i", {
                                              staticClass: "fa fa-save",
                                            }),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.submitting
                                                ? t.formTranslation.common
                                                    .loading
                                                : t.formTranslation.common.save
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary",
                                        attrs: {
                                          type: "button",
                                          disabled: t.submitting,
                                        },
                                        on: { click: t.model_close },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.formTranslation.common.cancel
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
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
        "1ee602a8",
        null
      );
    e.default = f.exports;
  },
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(397).a,
      r = (n(755), n(15)),
      o = Object(r.a)(
        i,
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
                      attrs: { "header-tag": "header", "footer-tag": "footer" },
                      scopedSlots: t._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              e("b-row", [
                                e("div", { staticClass: "col-md-6" }, [
                                  e("h3", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.appointments
                                          .appointment
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-md-6 d-flex justify-content-end",
                                  },
                                  [
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-primary",
                                        attrs: { type: "button" },
                                        on: { click: t.filterOpenClose },
                                      },
                                      [
                                        t.filterOpen
                                          ? e("span", [
                                              e("i", {
                                                staticClass: "fas fa-times",
                                              }),
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .close_filter
                                                ) + "\n                        "
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
                                                ) + "\n                        "
                                              ),
                                            ]),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              t.filterOpen
                                ? e("div", [
                                    e("hr", { staticClass: "mt-2 mb-2" }),
                                    t._v(" "),
                                    e("div", { staticClass: "row" }, [
                                      "doctor" !== t.getUserRole()
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "doctors" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(
                                                        t.formTranslation
                                                          .patient_encounter
                                                          .tag_select_doctor
                                                      ) +
                                                      "\n                    "
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
                                                  multiple: !0,
                                                },
                                                on: {
                                                  input: t.updateData,
                                                  remove: t.updateData,
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
                                                  value: t.filterData.doctor_id,
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
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "patient" !== t.getUserRole()
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "patient_id" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(
                                                        t.formTranslation
                                                          .appointments
                                                          .select_patient
                                                      ) +
                                                      " "
                                                  ),
                                                  e("span", {
                                                    staticClass: "text-danger",
                                                  }),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("multi-select", {
                                                attrs: {
                                                  "deselect-label": "",
                                                  "select-label": "",
                                                  id: "patient_id",
                                                  placeholder:
                                                    t.formTranslation
                                                      .appointments
                                                      .select_patient,
                                                  "tag-placeholder":
                                                    t.formTranslation
                                                      .appointments
                                                      .select_patient,
                                                  loading:
                                                    t.patientMultiselectLoader,
                                                  disabled:
                                                    t.patientMultiselectLoader,
                                                  label: "label",
                                                  "track-by": "id",
                                                  options: t.patients,
                                                  multiple: !0,
                                                },
                                                on: {
                                                  input: t.updateData,
                                                  remove: t.updateData,
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
                                                    t.filterData.patient_id,
                                                  callback: function (e) {
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
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "col-md-3" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "service" },
                                            },
                                            [
                                              t._v(
                                                "\n                      " +
                                                  t._s(
                                                    t.formTranslation
                                                      .patient_bill
                                                      .tag_plh_service
                                                  ) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("multi-select", {
                                            attrs: {
                                              "deselect-label": "",
                                              "select-label": "",
                                              placeholder:
                                                t.formTranslation.patient_bill
                                                  .tag_plh_service,
                                              "tag-placeholder":
                                                t.formTranslation.patient_bill
                                                  .tag_plh_service,
                                              id: "service",
                                              label: "name",
                                              "track-by": "service_id",
                                              options: t.allservice,
                                              multiple: !0,
                                            },
                                            on: {
                                              input: t.updateData,
                                              remove: t.updateData,
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
                                              value: t.filterData.service,
                                              callback: function (e) {
                                                t.$set(
                                                  t.filterData,
                                                  "service",
                                                  e
                                                );
                                              },
                                              expression: "filterData.service",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "col-md-3" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "filter_status" },
                                            },
                                            [
                                              t._v(
                                                "\n                      " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments
                                                      .select_status
                                                  ) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("multi-select", {
                                            attrs: {
                                              "deselect-label": "",
                                              "select-label": "",
                                              placeholder:
                                                t.formTranslation.appointments
                                                  .select_status,
                                              "tag-placeholder":
                                                t.formTranslation.appointments
                                                  .select_status,
                                              id: "filter_status",
                                              label: "label",
                                              "track-by": "value",
                                              options: t.allStatus,
                                              multiple: !0,
                                            },
                                            on: {
                                              input: t.updateData,
                                              remove: t.updateData,
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
                                              value: t.filterData.status,
                                              callback: function (e) {
                                                t.$set(
                                                  t.filterData,
                                                  "status",
                                                  e
                                                );
                                              },
                                              expression: "filterData.status",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ])
                                : t._e(),
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
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.calendarLoader,
                              expression: "calendarLoader",
                            },
                          ],
                        },
                        [
                          e(
                            "b-col",
                            { attrs: { sm: "12" } },
                            [
                              e("FullCalendar", {
                                ref: "appointmentCalendar",
                                attrs: {
                                  defaultView: "dayGridMonth",
                                  header: t.headerConfig,
                                  plugins: t.calendarPlugins,
                                  "event-sources": t.eventSources,
                                  selectable: !0,
                                  id: "kivicare-appointment-calendar",
                                  eventRender: t.fullcalendarRender,
                                  fixedWeekCount: !1,
                                  eventLimit: 2,
                                  eventLimitText: t.formTranslation.common.more,
                                  eventTimeFormat: {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hourCycle: t.getTimeFormat(),
                                  },
                                  dir:
                                    void 0 !== t.userData.theme_mode &&
                                    [!0, "true"].includes(t.userData.theme_mode)
                                      ? "rtl"
                                      : "ltr",
                                  locale: t.calenderLang,
                                  buttonText: {
                                    today:
                                      this.formTranslation.fullcalendar.today,
                                    month:
                                      this.formTranslation.fullcalendar.month,
                                    week: this.formTranslation.fullcalendar
                                      .week,
                                    day: this.formTranslation.fullcalendar.day,
                                    list: "list",
                                  },
                                  schedulerLicenseKey:
                                    t.userData.fullcalendar_key,
                                  firstDay: t.start_of_week,
                                },
                                on: { eventClick: t.handleEventClick },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      t.calendarLoader
                        ? t._e()
                        : e(
                            "div",
                            { staticClass: "page-loader-section" },
                            [e("loader-component-2")],
                            1
                          ),
                    ],
                    1
                  ),
                  t._v(" "),
                  t.appointmentDetailsModel
                    ? e(
                        "ModalPopup",
                        {
                          attrs: {
                            modalId: "appointment-details-modal",
                            modalSize: "md",
                            openModal: t.appointmentDetailsModel,
                            modalTitle:
                              t.formTranslation.appointments
                                .appointment_details,
                          },
                          on: {
                            closeModal: function (e) {
                              t.appointmentDetailsModel = !1;
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-6" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                            " +
                                      t._s(t.formTranslation.common.date) +
                                      " : \n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                        " +
                                    t._s(
                                      t.appointmentDetails
                                        .appointment_start_date
                                    ) +
                                    "\n                    "
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-6" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                            " +
                                      t._s(t.formTranslation.common.time) +
                                      " : \n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                        " +
                                    t._s(
                                      t.appointmentDetails
                                        .appointment_start_time
                                    ) +
                                    "\n                    "
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-6" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                            " +
                                      t._s(t.formTranslation.common.doctor) +
                                      " : \n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                        " +
                                    t._s(t.appointmentDetails.doctor_id.label) +
                                    "\n                    "
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-6" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                             " +
                                      t._s(t.formTranslation.common.patient) +
                                      " : \n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                        " +
                                    t._s(
                                      t.appointmentDetails.patient_id.label
                                    ) +
                                    "\n                    "
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-6" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                            " +
                                      t._s(t.formTranslation.common.clinic) +
                                      " : \n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                        " +
                                    t._s(t.appointmentDetails.clinic_id.label) +
                                    "\n                    "
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            "patient" !== t.getUserRole() &&
                            t.appointmentDetails.is_edit_able
                              ? t._e()
                              : e("div", { staticClass: "col-md-6" }, [
                                  e(
                                    "p",
                                    { staticClass: "mb-0 font-weight-bold" },
                                    [
                                      e(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          t._v(
                                            "\n                            " +
                                              t._s(
                                                t.formTranslation.common.status
                                              ) +
                                              " :\n                        "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      "1" == t.appointmentDetails.status
                                        ? e(
                                            "span",
                                            { staticClass: "text-primary" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.booked
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "4" == t.appointmentDetails.status
                                        ? e(
                                            "span",
                                            { staticClass: "text-secondary" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.check_in
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "0" == t.appointmentDetails.status
                                        ? e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.cancelled
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "2" == t.appointmentDetails.status
                                        ? e(
                                            "span",
                                            { staticClass: "text-warning" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.pending
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "3" == t.appointmentDetails.status
                                        ? e(
                                            "span",
                                            { staticClass: "text-success" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.completed
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]
                                  ),
                                ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("p", { staticClass: "mb-0" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    "\n                            " +
                                      t._s(
                                        t.formTranslation.appointments
                                          .appointment_type
                                      ) +
                                      " :\n                        "
                                  ),
                                ]),
                                t._v(
                                  "\n                  " +
                                    t._s(t.appointmentDetails.visit_type) +
                                    "\n                "
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          null !== t.appointmentDetails.description &&
                          void 0 !== t.appointmentDetails.description &&
                          "" !== t.appointmentDetails.description
                            ? e(
                                "div",
                                { staticClass: "row border-bottom p-2" },
                                [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("p", { staticClass: "mb-0" }, [
                                      e(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          t._v(
                                            "\n                            " +
                                              t._s(
                                                t.formTranslation.appointments
                                                  .description
                                              ) +
                                              ":\n                        "
                                          ),
                                        ]
                                      ),
                                      t._v(
                                        "\n                        " +
                                          t._s(
                                            t.appointmentDetails.description
                                          ) +
                                          "\n                    "
                                      ),
                                    ]),
                                  ]),
                                ]
                              )
                            : t._e(),
                          t._v(" "),
                          void 0 !== t.appointmentDetails.telemed_service &&
                          !0 === t.appointmentDetails.telemed_service &&
                          "0" != t.appointmentDetails.status
                            ? e(
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
                                            "\n                            " +
                                              t._s(
                                                t.formTranslation.common
                                                  .telemed_link + " "
                                              ) +
                                              "\n                          "
                                          ),
                                          e("i", {
                                            staticClass: "fas fa-copy",
                                            attrs: {
                                              id: "link-copy",
                                              title:
                                                t.formTranslation.settings
                                                  .click_to_copy,
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.copyLink(
                                                    t.appointmentDetails
                                                      .telemed_meeting_link
                                                  )
                                                );
                                              },
                                              mouseout: t.copyLinkMouseOut,
                                            },
                                          }),
                                          t._v(" :\n                        "),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "div",
                                      { staticStyle: { overflow: "scroll" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            attrs: {
                                              href: t.appointmentDetails
                                                .telemed_meeting_link,
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.appointmentDetails
                                                  .telemed_meeting_link
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              )
                            : t._e(),
                          t._v(" "),
                          "patient" != t.getUserRole() &&
                          t.appointmentDetails.is_edit_able
                            ? e("div", { staticClass: "row mt-2 p-2" }, [
                                e(
                                  "div",
                                  {
                                    staticClass: "col-md-12",
                                    staticStyle: { display: "flex" },
                                  },
                                  [
                                    e(
                                      "p",
                                      { staticClass: "mb-0 font-weight-bold" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            t._v(
                                              "\n                                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .status
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    this.appointmentDetails.less ||
                                    "0" == t.appointmentDetails.status ||
                                    "3" == t.appointmentDetails.status ||
                                    t.currentDate !==
                                      t.calendarAppointmentFormatDate(
                                        t.appointmentDetails
                                          .appointment_start_date
                                      )
                                      ? e("input", {
                                          staticClass:
                                            "form-control-sm pt-0 pb-0",
                                          staticStyle: {
                                            width: "50% !important",
                                            "margin-left": "3%",
                                          },
                                          attrs: { type: "text", disabled: "" },
                                          domProps: {
                                            value: t.getAppointmentStatusText(
                                              t.appointmentStatus
                                            ),
                                          },
                                        })
                                      : e(
                                          "b-select",
                                          {
                                            staticClass:
                                              "form-control form-control-sm pt-0 pb-0",
                                            staticStyle: {
                                              width: "50% !important",
                                              "margin-left": "3%",
                                            },
                                            attrs: {
                                              name: "status",
                                              id: "app_status",
                                            },
                                            model: {
                                              value: t.appointmentStatus,
                                              callback: function (e) {
                                                t.appointmentStatus = e;
                                              },
                                              expression: "appointmentStatus",
                                            },
                                          },
                                          [
                                            e(
                                              "option",
                                              { attrs: { selected: "" } },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments
                                                        .select_status
                                                    ) +
                                                    " "
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
                                                        .appointments.booked
                                                    )
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments.pending
                                                    )
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments.check_in
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments.completed
                                                    ) +
                                                    " "
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
                                                        .appointments.cancelled
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
                              ])
                            : t._e(),
                          t._v(" "),
                          "patient" != t.getUserRole() &&
                          t.appointmentDetails.is_edit_able
                            ? e("div", { staticClass: "row mt-4" }, [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-md-12 d-flex justify-content-end",
                                  },
                                  [
                                    e(
                                      "Button",
                                      {
                                        staticClass:
                                          "btn btn-outline-danger float-right",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function (e) {
                                            t.appointmentDetailsModel = !1;
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common.close
                                            ) +
                                            "\n                  "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    "0" != t.appointmentDetails.status &&
                                    "3" != t.appointmentDetails.status
                                      ? e(
                                          "Button",
                                          {
                                            staticClass:
                                              "btn aa btn-outline-primary ml-2",
                                            attrs: {
                                              type: "button",
                                              disabled: t.statusChangeLoading,
                                            },
                                            on: { click: t.handleStatusUpdate },
                                          },
                                          [
                                            t._v(
                                              "\n                        " +
                                                t._s(
                                                  t.statusChangeLoading
                                                    ? t.formTranslation.common
                                                        .loading
                                                    : t.formTranslation.common
                                                        .save_changes
                                                ) +
                                                "\n                    "
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
                          e("input", {
                            staticStyle: { opacity: "0" },
                            attrs: { type: "text", id: "modal-hidden-field" },
                          }),
                        ]
                      )
                    : t._e(),
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
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(398).a,
      r = (n(759), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return t.customFields.length > 0
            ? e(
                "div",
                { staticClass: "row" },
                t._l(t.customFields, function (n, i) {
                  return void 0 !== n.status && "1" == n.status
                    ? e(
                        "div",
                        { key: i, staticClass: "col-md-5 mb-3" },
                        [
                          e(
                            "label",
                            {
                              staticClass: "form-control-label text-capitalize",
                              attrs: { for: n.name + "_" + i },
                            },
                            [
                              t._v("\n        " + t._s(n.label) + " "),
                              1 === parseInt(n.isRequired)
                                ? e("span", { staticClass: "text-danger" }, [
                                    t._v("*"),
                                  ])
                                : t._e(),
                            ]
                          ),
                          t._v(" "),
                          "checkbox" !== n.type ||
                          ("text" !== n.type && "number" !== n.type)
                            ? "radio" !== n.type ||
                              ("text" !== n.type && "number" !== n.type)
                              ? "text" === n.type || "number" === n.type
                                ? e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.fieldsObj["custom_field_" + n.id],
                                        expression:
                                          "fieldsObj['custom_field_'+field.id]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: n.name + "_" + i,
                                      placeholder: n.placeholder,
                                      required: 1 === parseInt(n.isRequired),
                                      name: "custom_field_" + n.id,
                                      type: n.type,
                                    },
                                    domProps: {
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                    },
                                    on: {
                                      change: t.handleValueChange,
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.fieldsObj,
                                            "custom_field_" + n.id,
                                            e.target.value
                                          );
                                      },
                                    },
                                  })
                                : t._e()
                              : e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                      expression:
                                        "fieldsObj['custom_field_'+field.id]",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: n.name + "_" + i,
                                    placeholder: n.placeholder,
                                    required: 1 === parseInt(n.isRequired),
                                    name: "custom_field_" + n.id,
                                    type: "radio",
                                  },
                                  domProps: {
                                    checked: t._q(
                                      t.fieldsObj["custom_field_" + n.id],
                                      null
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function (e) {
                                        return t.$set(
                                          t.fieldsObj,
                                          "custom_field_" + n.id,
                                          null
                                        );
                                      },
                                      t.handleValueChange,
                                    ],
                                  },
                                })
                            : e("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  required: 1 === parseInt(n.isRequired),
                                  name: "custom_field_" + n.id,
                                  type: "checkbox",
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    t.fieldsObj["custom_field_" + n.id]
                                  )
                                    ? t._i(
                                        t.fieldsObj["custom_field_" + n.id],
                                        null
                                      ) > -1
                                    : t.fieldsObj["custom_field_" + n.id],
                                },
                                on: {
                                  change: [
                                    function (e) {
                                      var i =
                                          t.fieldsObj["custom_field_" + n.id],
                                        r = e.target,
                                        o = !!r.checked;
                                      if (Array.isArray(i)) {
                                        var a = t._i(i, null);
                                        r.checked
                                          ? a < 0 &&
                                            t.$set(
                                              t.fieldsObj,
                                              "custom_field_" + n.id,
                                              i.concat([null])
                                            )
                                          : a > -1 &&
                                            t.$set(
                                              t.fieldsObj,
                                              "custom_field_" + n.id,
                                              i
                                                .slice(0, a)
                                                .concat(i.slice(a + 1))
                                            );
                                      } else
                                        t.$set(
                                          t.fieldsObj,
                                          "custom_field_" + n.id,
                                          o
                                        );
                                    },
                                    t.handleValueChange,
                                  ],
                                },
                              }),
                          t._v(" "),
                          "file_upload" === n.type
                            ? e("div", [
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
                                            id: n.name + "_" + i,
                                          },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.fileUpload(n)
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
                                      attrs: { for: n.name + "_" + i },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common
                                            .no_file_chosen
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "a",
                                  {
                                    staticClass: "text-primary m-1",
                                    attrs: {
                                      id:
                                        "custom_field_" + n.id + "_file_upload",
                                      href:
                                        t.fieldsObj["custom_field_" + n.id] &&
                                        t.fieldsObj["custom_field_" + n.id].url
                                          ? t.fieldsObj["custom_field_" + n.id]
                                              .url
                                          : "",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n        " +
                                        t._s(
                                          t.fieldsObj["custom_field_" + n.id] &&
                                            t.fieldsObj["custom_field_" + n.id]
                                              .name
                                            ? t.fieldsObj[
                                                "custom_field_" + n.id
                                              ].name
                                            : ""
                                        ) +
                                        "\n      "
                                    ),
                                  ]
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "select" === n.type
                            ? e(
                                "b-select",
                                {
                                  staticClass: "form-control text-capitalize",
                                  attrs: {
                                    id: n.name + "_" + i,
                                    name: n.name,
                                    required: 1 === parseInt(n.isRequired),
                                  },
                                  on: { change: t.handleValueChange },
                                  model: {
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    callback: function (e) {
                                      t.$set(
                                        t.fieldsObj,
                                        "custom_field_" + n.id,
                                        e
                                      );
                                    },
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                },
                                [
                                  e("option", { attrs: { value: "" } }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common.select_option
                                        ) +
                                        " "
                                    ),
                                  ]),
                                  t._v(" "),
                                  t._l(n.options, function (n, i) {
                                    return e(
                                      "option",
                                      { key: i, domProps: { value: n.id } },
                                      [t._v(t._s(n.text))]
                                    );
                                  }),
                                ],
                                2
                              )
                            : t._e(),
                          t._v(" "),
                          "radio" === n.type
                            ? e(
                                "div",
                                [
                                  n.placeholder
                                    ? e(
                                        "span",
                                        { staticClass: "mb-0 d-block" },
                                        [t._v(" " + t._s(n.placeholder) + "  ")]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t._l(n.options, function (i, r) {
                                    return e(
                                      "div",
                                      {
                                        key: r,
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
                                                t.fieldsObj[
                                                  "custom_field_" + n.id
                                                ],
                                              expression:
                                                "fieldsObj['custom_field_'+field.id]",
                                            },
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "radio",
                                            id: n.name + "_" + r,
                                            name: "custom_field_" + n.id,
                                            required:
                                              1 === parseInt(n.isRequired),
                                          },
                                          domProps: {
                                            value: i.id,
                                            checked: t._q(
                                              t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                              i.id
                                            ),
                                          },
                                          on: {
                                            change: [
                                              function (e) {
                                                return t.$set(
                                                  t.fieldsObj,
                                                  "custom_field_" + n.id,
                                                  i.id
                                                );
                                              },
                                              t.handleValueChange,
                                            ],
                                          },
                                        }),
                                        t._v(" "),
                                        e(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: n.name + "_" + r },
                                          },
                                          [t._v(t._s(i.text))]
                                        ),
                                      ]
                                    );
                                  }),
                                ],
                                2
                              )
                            : t._e(),
                          t._v(" "),
                          "checkbox" === n.type
                            ? e(
                                "div",
                                t._l(n.options, function (i, r) {
                                  return e(
                                    "div",
                                    {
                                      key: r,
                                      staticClass:
                                        "custom-control custom-checkbox custom-control-inline",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                            expression:
                                              "fieldsObj['custom_field_'+field.id]",
                                          },
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: n.name + "_" + r,
                                          name: "custom_field_" + n.id,
                                        },
                                        domProps: {
                                          value: i.id,
                                          checked: Array.isArray(
                                            t.fieldsObj["custom_field_" + n.id]
                                          )
                                            ? t._i(
                                                t.fieldsObj[
                                                  "custom_field_" + n.id
                                                ],
                                                i.id
                                              ) > -1
                                            : t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                        },
                                        on: {
                                          change: [
                                            function (e) {
                                              var r =
                                                  t.fieldsObj[
                                                    "custom_field_" + n.id
                                                  ],
                                                o = e.target,
                                                a = !!o.checked;
                                              if (Array.isArray(r)) {
                                                var s = i.id,
                                                  l = t._i(r, s);
                                                o.checked
                                                  ? l < 0 &&
                                                    t.$set(
                                                      t.fieldsObj,
                                                      "custom_field_" + n.id,
                                                      r.concat([s])
                                                    )
                                                  : l > -1 &&
                                                    t.$set(
                                                      t.fieldsObj,
                                                      "custom_field_" + n.id,
                                                      r
                                                        .slice(0, l)
                                                        .concat(r.slice(l + 1))
                                                    );
                                              } else
                                                t.$set(
                                                  t.fieldsObj,
                                                  "custom_field_" + n.id,
                                                  a
                                                );
                                            },
                                            t.handleValueChange,
                                          ],
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: n.name + "_" + r },
                                        },
                                        [t._v(t._s(i.text))]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              )
                            : t._e(),
                          t._v(" "),
                          "calendar" === n.type
                            ? e("div", [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                      expression:
                                        "fieldsObj['custom_field_'+field.id]",
                                    },
                                  ],
                                  attrs: { type: "date", id: "doc_birthdate" },
                                  domProps: {
                                    value: t.fieldsObj["custom_field_" + n.id],
                                  },
                                  on: {
                                    input: [
                                      function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.fieldsObj,
                                            "custom_field_" + n.id,
                                            e.target.value
                                          );
                                      },
                                      t.handleValueChange,
                                    ],
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          "textarea" === n.type
                            ? e("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  name: "custom_field_" + n.id,
                                  required: 1 === parseInt(n.isRequired),
                                },
                                domProps: {
                                  value: t.fieldsObj["custom_field_" + n.id],
                                },
                                on: {
                                  change: t.handleValueChange,
                                  input: function (e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.fieldsObj,
                                        "custom_field_" + n.id,
                                        e.target.value
                                      );
                                  },
                                },
                              })
                            : t._e(),
                          t._v(" "),
                          "multiselect" === n.type
                            ? e("multi-select", {
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  name: "custom_field_" + n.id,
                                  label: "text",
                                  "track-by": "id",
                                  options: n.options,
                                  multiple: !0,
                                },
                                on: { input: t.handleValueChange },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "noResult",
                                      fn: function () {
                                        return [
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.formTranslation.common
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
                                  !0
                                ),
                                model: {
                                  value: t.fieldsObj["custom_field_" + n.id],
                                  callback: function (e) {
                                    t.$set(
                                      t.fieldsObj,
                                      "custom_field_" + n.id,
                                      e
                                    );
                                  },
                                  expression:
                                    "fieldsObj['custom_field_'+field.id]",
                                },
                              })
                            : t._e(),
                        ],
                        1
                      )
                    : t._e();
                }),
                0
              )
            : t._e();
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(399).a,
      r = (n(761), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return t.customFields.length > 0
            ? e(
                "div",
                { staticClass: "row kc-custom-field" },
                t._l(t.customFields, function (n, i) {
                  return void 0 !== n.status && "1" == n.status
                    ? e(
                        "div",
                        { key: i, staticClass: "col-md-5 mb-3" },
                        [
                          e(
                            "label",
                            {
                              staticClass: "form-control-label text-capitalize",
                              attrs: { for: n.name + "_" + i },
                            },
                            [
                              t._v("\n      " + t._s(n.label) + " "),
                              1 === parseInt(n.isRequired)
                                ? e("span", { staticClass: "text-danger" }, [
                                    t._v("*"),
                                  ])
                                : t._e(),
                            ]
                          ),
                          t._v(" "),
                          "checkbox" !== n.type ||
                          ("text" !== n.type && "number" !== n.type)
                            ? "radio" !== n.type ||
                              ("text" !== n.type && "number" !== n.type)
                              ? "text" === n.type || "number" === n.type
                                ? e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.fieldsObj["custom_field_" + n.id],
                                        expression:
                                          "fieldsObj['custom_field_'+field.id]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: n.name + "_" + i,
                                      placeholder: n.placeholder,
                                      required: 1 === parseInt(n.isRequired),
                                      name: "custom_field_" + n.id,
                                      disabled:
                                        t.disabledForPatient ||
                                        ("0" === t.ecounterStatus &&
                                          !t.encounter_edit_after_close_status),
                                      type: n.type,
                                    },
                                    domProps: {
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                    },
                                    on: {
                                      change: t.handleValueChange,
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.fieldsObj,
                                            "custom_field_" + n.id,
                                            e.target.value
                                          );
                                      },
                                    },
                                  })
                                : t._e()
                              : e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                      expression:
                                        "fieldsObj['custom_field_'+field.id]",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: n.name + "_" + i,
                                    placeholder: n.placeholder,
                                    required: 1 === parseInt(n.isRequired),
                                    name: "custom_field_" + n.id,
                                    disabled:
                                      t.disabledForPatient ||
                                      ("0" === t.ecounterStatus &&
                                        !t.encounter_edit_after_close_status),
                                    type: "radio",
                                  },
                                  domProps: {
                                    checked: t._q(
                                      t.fieldsObj["custom_field_" + n.id],
                                      null
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function (e) {
                                        return t.$set(
                                          t.fieldsObj,
                                          "custom_field_" + n.id,
                                          null
                                        );
                                      },
                                      t.handleValueChange,
                                    ],
                                  },
                                })
                            : e("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  required: 1 === parseInt(n.isRequired),
                                  name: "custom_field_" + n.id,
                                  disabled:
                                    t.disabledForPatient ||
                                    ("0" === t.ecounterStatus &&
                                      !t.encounter_edit_after_close_status),
                                  type: "checkbox",
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    t.fieldsObj["custom_field_" + n.id]
                                  )
                                    ? t._i(
                                        t.fieldsObj["custom_field_" + n.id],
                                        null
                                      ) > -1
                                    : t.fieldsObj["custom_field_" + n.id],
                                },
                                on: {
                                  change: [
                                    function (e) {
                                      var i =
                                          t.fieldsObj["custom_field_" + n.id],
                                        r = e.target,
                                        o = !!r.checked;
                                      if (Array.isArray(i)) {
                                        var a = t._i(i, null);
                                        r.checked
                                          ? a < 0 &&
                                            t.$set(
                                              t.fieldsObj,
                                              "custom_field_" + n.id,
                                              i.concat([null])
                                            )
                                          : a > -1 &&
                                            t.$set(
                                              t.fieldsObj,
                                              "custom_field_" + n.id,
                                              i
                                                .slice(0, a)
                                                .concat(i.slice(a + 1))
                                            );
                                      } else
                                        t.$set(
                                          t.fieldsObj,
                                          "custom_field_" + n.id,
                                          o
                                        );
                                    },
                                    t.handleValueChange,
                                  ],
                                },
                              }),
                          t._v(" "),
                          "file_upload" === n.type
                            ? e("div", [
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
                                            id: n.name + "_" + i,
                                            disabled:
                                              t.disabledForPatient ||
                                              ("0" === t.ecounterStatus &&
                                                !t.encounter_edit_after_close_status),
                                          },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.fileUpload(n)
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
                                      attrs: { for: n.name + "_" + i },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common
                                            .no_file_chosen
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "a",
                                  {
                                    staticClass: "text-primary m-1",
                                    attrs: {
                                      id:
                                        "custom_field_" + n.id + "_file_upload",
                                      href:
                                        t.fieldsObj["custom_field_" + n.id] &&
                                        t.fieldsObj["custom_field_" + n.id].url
                                          ? t.fieldsObj["custom_field_" + n.id]
                                              .url
                                          : "",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(
                                          t.fieldsObj["custom_field_" + n.id] &&
                                            t.fieldsObj["custom_field_" + n.id]
                                              .name
                                            ? t.fieldsObj[
                                                "custom_field_" + n.id
                                              ].name
                                            : ""
                                        ) +
                                        "\n      "
                                    ),
                                  ]
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "select" === n.type
                            ? e(
                                "b-select",
                                {
                                  staticClass: "form-control text-capitalize",
                                  attrs: {
                                    id: n.name + "_" + i,
                                    name: n.name,
                                    required: 1 === parseInt(n.isRequired),
                                    disabled:
                                      t.disabledForPatient ||
                                      ("0" === t.ecounterStatus &&
                                        !t.encounter_edit_after_close_status),
                                  },
                                  on: { change: t.handleValueChange },
                                  model: {
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    callback: function (e) {
                                      t.$set(
                                        t.fieldsObj,
                                        "custom_field_" + n.id,
                                        e
                                      );
                                    },
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                },
                                [
                                  e("option", { attrs: { value: "" } }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common.select_option
                                        ) +
                                        " "
                                    ),
                                  ]),
                                  t._v(" "),
                                  t._l(n.options, function (n, i) {
                                    return e(
                                      "option",
                                      { key: i, domProps: { value: n.id } },
                                      [t._v(t._s(n.text))]
                                    );
                                  }),
                                ],
                                2
                              )
                            : t._e(),
                          t._v(" "),
                          "radio" === n.type
                            ? e(
                                "div",
                                [
                                  n.placeholder
                                    ? e(
                                        "span",
                                        { staticClass: "mb-0 d-block" },
                                        [t._v(" " + t._s(n.placeholder) + "  ")]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t._l(n.options, function (i, r) {
                                    return e(
                                      "div",
                                      {
                                        key: r,
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
                                                t.fieldsObj[
                                                  "custom_field_" + n.id
                                                ],
                                              expression:
                                                "fieldsObj['custom_field_'+field.id]",
                                            },
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "radio",
                                            id: n.name + "_" + r,
                                            name: "custom_field_" + n.id,
                                            required:
                                              1 === parseInt(n.isRequired),
                                            disabled:
                                              t.disabledForPatient ||
                                              ("0" === t.ecounterStatus &&
                                                !t.encounter_edit_after_close_status),
                                          },
                                          domProps: {
                                            value: i.id,
                                            checked: t._q(
                                              t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                              i.id
                                            ),
                                          },
                                          on: {
                                            change: [
                                              function (e) {
                                                return t.$set(
                                                  t.fieldsObj,
                                                  "custom_field_" + n.id,
                                                  i.id
                                                );
                                              },
                                              t.handleValueChange,
                                            ],
                                          },
                                        }),
                                        t._v(" "),
                                        e(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: n.name + "_" + r },
                                          },
                                          [t._v(t._s(i.text))]
                                        ),
                                      ]
                                    );
                                  }),
                                ],
                                2
                              )
                            : t._e(),
                          t._v(" "),
                          "checkbox" === n.type
                            ? e(
                                "div",
                                t._l(n.options, function (i, r) {
                                  return e(
                                    "div",
                                    {
                                      key: r,
                                      staticClass:
                                        "custom-control custom-checkbox custom-control-inline",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                            expression:
                                              "fieldsObj['custom_field_'+field.id]",
                                          },
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: n.name + "_" + r,
                                          name: "custom_field_" + n.id,
                                          disabled:
                                            t.disabledForPatient ||
                                            ("0" === t.ecounterStatus &&
                                              !t.encounter_edit_after_close_status),
                                        },
                                        domProps: {
                                          value: i.id,
                                          checked: Array.isArray(
                                            t.fieldsObj["custom_field_" + n.id]
                                          )
                                            ? t._i(
                                                t.fieldsObj[
                                                  "custom_field_" + n.id
                                                ],
                                                i.id
                                              ) > -1
                                            : t.fieldsObj[
                                                "custom_field_" + n.id
                                              ],
                                        },
                                        on: {
                                          change: [
                                            function (e) {
                                              var r =
                                                  t.fieldsObj[
                                                    "custom_field_" + n.id
                                                  ],
                                                o = e.target,
                                                a = !!o.checked;
                                              if (Array.isArray(r)) {
                                                var s = i.id,
                                                  l = t._i(r, s);
                                                o.checked
                                                  ? l < 0 &&
                                                    t.$set(
                                                      t.fieldsObj,
                                                      "custom_field_" + n.id,
                                                      r.concat([s])
                                                    )
                                                  : l > -1 &&
                                                    t.$set(
                                                      t.fieldsObj,
                                                      "custom_field_" + n.id,
                                                      r
                                                        .slice(0, l)
                                                        .concat(r.slice(l + 1))
                                                    );
                                              } else
                                                t.$set(
                                                  t.fieldsObj,
                                                  "custom_field_" + n.id,
                                                  a
                                                );
                                            },
                                            t.handleValueChange,
                                          ],
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: n.name + "_" + r },
                                        },
                                        [t._v(t._s(i.text))]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              )
                            : t._e(),
                          t._v(" "),
                          "calendar" === n.type
                            ? e("div", [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.fieldsObj["custom_field_" + n.id],
                                      expression:
                                        "fieldsObj['custom_field_'+field.id]",
                                    },
                                  ],
                                  attrs: {
                                    type: "date",
                                    id: "doc_birthdate",
                                    disabled:
                                      t.disabledForPatient ||
                                      ("0" === t.ecounterStatus &&
                                        !t.encounter_edit_after_close_status),
                                  },
                                  domProps: {
                                    value: t.fieldsObj["custom_field_" + n.id],
                                  },
                                  on: {
                                    input: [
                                      function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.fieldsObj,
                                            "custom_field_" + n.id,
                                            e.target.value
                                          );
                                      },
                                      t.handleValueChange,
                                    ],
                                  },
                                }),
                              ])
                            : t._e(),
                          t._v(" "),
                          "textarea" === n.type
                            ? e("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.fieldsObj["custom_field_" + n.id],
                                    expression:
                                      "fieldsObj['custom_field_'+field.id]",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  name: "custom_field_" + n.id,
                                  required: 1 === parseInt(n.isRequired),
                                  disabled:
                                    t.disabledForPatient ||
                                    ("0" === t.ecounterStatus &&
                                      !t.encounter_edit_after_close_status),
                                },
                                domProps: {
                                  value: t.fieldsObj["custom_field_" + n.id],
                                },
                                on: {
                                  change: t.handleValueChange,
                                  input: function (e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.fieldsObj,
                                        "custom_field_" + n.id,
                                        e.target.value
                                      );
                                  },
                                },
                              })
                            : t._e(),
                          t._v(" "),
                          "multiselect" === n.type
                            ? e("multi-select", {
                                attrs: {
                                  id: n.name + "_" + i,
                                  placeholder: n.placeholder,
                                  name: "custom_field_" + n.id,
                                  label: "text",
                                  "track-by": "id",
                                  options: n.options,
                                  multiple: !0,
                                },
                                on: { input: t.handleValueChange },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "noResult",
                                      fn: function () {
                                        return [
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.formTranslation.common
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
                                  !0
                                ),
                                model: {
                                  value: t.fieldsObj["custom_field_" + n.id],
                                  callback: function (e) {
                                    t.$set(
                                      t.fieldsObj,
                                      "custom_field_" + n.id,
                                      e
                                    );
                                  },
                                  expression:
                                    "fieldsObj['custom_field_'+field.id]",
                                },
                              })
                            : t._e(),
                          t._v(" "),
                          1 === parseInt(n.isRequired)
                            ? e(
                                "div",
                                {
                                  staticClass: "custom_field-required d-none",
                                  attrs: { id: "custom_field_" + n.id },
                                },
                                [
                                  e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            n.label +
                                              " " +
                                              t.formTranslation.common.required
                                          ) +
                                          "\n      "
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                        ],
                        1
                      )
                    : t._e();
                }),
                0
              )
            : t._e();
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(400).a,
      r = (n(763), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              "administrator" != t.getUserRole() || t.timezone_status
                ? t._e()
                : e("b-row", [
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
                              e("b", [t._v(" " + t._s(t.timezone_msg))]),
                            ]),
                            t._v(" "),
                            e(
                              "button",
                              {
                                staticClass:
                                  "btn btn-sm btn-secondary float-right",
                                attrs: { type: "button" },
                                on: { click: t.iUnderstandTimezone },
                              },
                              [t._v(" Got it !\n        ")]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
              t._v(" "),
              e(
                "b-row",
                [
                  e(
                    "b-col",
                    { staticClass: "col-xl-12 col-lg-12 order-lg-1 order-2" },
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
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-4" }, [
                                  e("h3", [
                                    t._v(
                                      t._s(
                                        t.formTranslation.doctor_session
                                          .doc_sessions
                                      ) + " "
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-8" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "d-flex justify-content-end",
                                    },
                                    [
                                      t.kcCheckPermission(
                                        "doctor_session_add"
                                      ) &&
                                      t.isAdd &&
                                      !t.isCloseBtnShow
                                        ? e("b-button", {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            domProps: {
                                              innerHTML: t._s(t.toggleBtnHtml),
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.handleCollapseChange(
                                                  "add"
                                                );
                                              },
                                            },
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.kcCheckPermission(
                                        "doctor_session_add"
                                      ) &&
                                      t.isEdit &&
                                      !t.isCloseBtnShow
                                        ? e("b-button", {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            domProps: {
                                              innerHTML: t._s(t.toggleBtnHtml),
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.handleCollapseChange(
                                                  "add"
                                                );
                                              },
                                            },
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.kcCheckPermission(
                                        "doctor_session_add"
                                      ) && t.isCloseBtnShow
                                        ? e("b-button", {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            domProps: {
                                              innerHTML: t._s(t.toggleBtnHtml),
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.handleCollapseChange(
                                                  "close"
                                                );
                                              },
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
                              { staticClass: "card-body p-4" },
                              [
                                e(
                                  "b-collapse",
                                  {
                                    staticClass: "mt-2",
                                    attrs: {
                                      id: "doctor-session-tab",
                                      visible: t.isCollapseVisible,
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      !0 !== t.userData.addOns.kiviPro ||
                                      ("administrator" !== t.getUserRole() &&
                                        "doctor" != t.getUserRole())
                                        ? t._e()
                                        : e(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-4 form-group",
                                            },
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
                                                    "\n                    " +
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
                                                  id: "clinic_id",
                                                  options: t.allClinics,
                                                  loading:
                                                    t.clinicMultiselectLoader,
                                                  disabled:
                                                    t.clinicMultiselectLoader,
                                                  "deselect-label": "",
                                                  label: "label",
                                                  placeholder:
                                                    this.formTranslation
                                                      .doctor_session
                                                      .plh_search,
                                                  "select-label": "",
                                                  "tag-placeholder":
                                                    this.formTranslation
                                                      .doctor_session
                                                      .plh_tag_clinic,
                                                  "track-by": "id",
                                                },
                                                on: {
                                                  select: t.clinicChange,
                                                  remove: t.clinicChange,
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
                                                    t.clinicSession.clinic_id,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.clinicSession,
                                                      "clinic_id",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "clinicSession.clinic_id",
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicSession.clinic_id
                                                .required
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                    " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .clinic_is_required
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                      t._v(" "),
                                      "doctor" !== t.getUserRole()
                                        ? e(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-4 form-group",
                                            },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "col-md-4 form-control-label",
                                                  attrs: {
                                                    for: "clinicSessionDoctor",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .doctors
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
                                                {},
                                                [
                                                  e("multi-select", {
                                                    attrs: {
                                                      id: "clinicSessionDoctor",
                                                      options: t.doctors,
                                                      loading:
                                                        t.doctorMultiselectLoader,
                                                      disabled:
                                                        t.doctorMultiselectLoader,
                                                      "deselect-label": "",
                                                      label: "label",
                                                      placeholder:
                                                        this.formTranslation
                                                          .doctor_session
                                                          .plh_search,
                                                      "select-label": "",
                                                      "tag-placeholder":
                                                        this.formTranslation
                                                          .doctor_session
                                                          .plh_tag_session_doc,
                                                      "track-by": "id",
                                                    },
                                                    on: {
                                                      remove:
                                                        t.sessionDoctorsValidation,
                                                      select:
                                                        t.sessionDoctorsValidation,
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
                                                        t.clinicSession.doctors,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.clinicSession,
                                                          "doctors",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "clinicSession.doctors",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.submitted &&
                                                  !t.$v.clinicSession.doctors
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
                                                                t
                                                                  .formTranslation
                                                                  .appointments
                                                                  .doc_required
                                                              ) +
                                                              "\n                    "
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  t.sessionSubmitted &&
                                                  t.sessionDoctorValidationCheck
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
                                                                .doctor_session
                                                                .doc_already_added
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
                                              attrs: { for: "time_slot" },
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .setup_wizard
                                                      .time_slot_minute
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
                                            "div",
                                            {},
                                            [
                                              e(
                                                "b-select",
                                                {
                                                  staticClass:
                                                    "form-control text-capitalize",
                                                  attrs: {
                                                    id: "time_slot",
                                                    name: "time_slot",
                                                  },
                                                  on: {
                                                    change:
                                                      t.sessionDoctorsValidation,
                                                  },
                                                  model: {
                                                    value:
                                                      t.clinicSession.time_slot,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.clinicSession,
                                                        "time_slot",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "clinicSession.time_slot",
                                                  },
                                                },
                                                t._l(
                                                  t.time_slots,
                                                  function (n, i) {
                                                    return e(
                                                      "option",
                                                      {
                                                        key: i,
                                                        domProps: { value: n },
                                                      },
                                                      [t._v(" " + t._s(n))]
                                                    );
                                                  }
                                                ),
                                                0
                                              ),
                                            ],
                                            1
                                          ),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.clinicSession.time_slot.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(
                                                        t.formTranslation
                                                          .appointments
                                                          .time_slot_required
                                                      ) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-3" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation
                                                    .doctor_session
                                                    .morning_session
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e("vue-timepicker", {
                                              attrs: {
                                                id: "s_one_start_time",
                                                "minute-interval": 5,
                                                "auto-scroll": "",
                                                format: "HH:mm",
                                                "hide-disabled-hours": "",
                                                placeholder:
                                                  this.formTranslation
                                                    .doctor_session
                                                    .plh_start_time,
                                                "hide-disabled-minutes": "",
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.generateTimeSlotTime(
                                                    "first"
                                                  );
                                                },
                                              },
                                              scopedSlots: t._u([
                                                {
                                                  key: "clearButton",
                                                  fn: function () {
                                                    return [
                                                      e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "clear-btn",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              e.preventDefault(),
                                                                (t.secondDisabledHours =
                                                                  [[0, 23]]);
                                                            },
                                                          },
                                                        },
                                                        [t._v("×")]
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ]),
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
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-md-3" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [t._v("   ")]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e("vue-timepicker", {
                                              attrs: {
                                                id: "s_one_end_time",
                                                "minute-interval": 5,
                                                "auto-scroll": "",
                                                format: "HH:mm",
                                                "hide-disabled-hours": "",
                                                "hour-range":
                                                  t.secondDisabledHours,
                                                placeholder:
                                                  this.formTranslation
                                                    .doctor_session
                                                    .plh_end_time,
                                                "hide-disabled-minutes": "",
                                                "minute-range":
                                                  t.secondDisabledMinutes,
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.generateTimeSlotTime(
                                                    "second"
                                                  );
                                                },
                                              },
                                              scopedSlots: t._u([
                                                {
                                                  key: "clearButton",
                                                  fn: function () {
                                                    return [
                                                      e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "clear-btn",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              e.preventDefault(),
                                                                (t.thirdDisabledHours =
                                                                  [[0, 23]]);
                                                            },
                                                          },
                                                        },
                                                        [t._v("×")]
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ]),
                                              model: {
                                                value:
                                                  t.clinicSession
                                                    .s_one_end_time,
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
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-md-3" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation
                                                    .doctor_session
                                                    .evening_session
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e("vue-timepicker", {
                                              attrs: {
                                                id: "s_two_start_time",
                                                "minute-interval": 5,
                                                "auto-scroll": "",
                                                format: "HH:mm",
                                                "hide-disabled-hours": "",
                                                "hour-range":
                                                  t.thirdDisabledHours,
                                                placeholder:
                                                  this.formTranslation
                                                    .doctor_session
                                                    .plh_start_time,
                                                "hide-disabled-minutes": "",
                                                "minute-range":
                                                  t.thirdDisabledMinutes,
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.generateTimeSlotTime(
                                                    "third"
                                                  );
                                                },
                                              },
                                              scopedSlots: t._u([
                                                {
                                                  key: "clearButton",
                                                  fn: function () {
                                                    return [
                                                      e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "clear-btn",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              e.preventDefault(),
                                                                (t.fourthDisabledHours =
                                                                  [[0, 23]]);
                                                            },
                                                          },
                                                        },
                                                        [t._v("×")]
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ]),
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
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-md-3" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [t._v("   ")]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e("vue-timepicker", {
                                              attrs: {
                                                id: "s_two_end_time",
                                                "minute-interval": 5,
                                                "auto-scroll": "",
                                                format: "HH:mm",
                                                "hide-disabled-hours": "",
                                                "hour-range":
                                                  t.fourthDisabledHours,
                                                placeholder:
                                                  this.formTranslation
                                                    .doctor_session
                                                    .plh_end_time,
                                                "hide-disabled-minutes": "",
                                                "minute-range":
                                                  t.fourthDisabledMinutes,
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.generateTimeSlotTime(
                                                    "fourth"
                                                  );
                                                },
                                              },
                                              model: {
                                                value:
                                                  t.clinicSession
                                                    .s_two_end_time,
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
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "week_days" },
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation
                                                    .doctor_session.week_days
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
                                          "div",
                                          {},
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "custom-control custom-checkbox d-inline-block mr-2",
                                                attrs: {
                                                  id: "check_all_days_form",
                                                },
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
                                                  staticClass:
                                                    "custom-control-input",
                                                  attrs: {
                                                    id: "check_all_days",
                                                    name: "check_all_days",
                                                    type: "checkbox",
                                                  },
                                                  domProps: {
                                                    value: 1,
                                                    checked: Array.isArray(
                                                      t.daysAll
                                                    )
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
                                                              (t.daysAll =
                                                                n.concat([1]))
                                                            : o > -1 &&
                                                              (t.daysAll = n
                                                                .slice(0, o)
                                                                .concat(
                                                                  n.slice(o + 1)
                                                                ));
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
                                                    attrs: {
                                                      for: "check_all_days",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                        " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.all
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            t._l(t.weekDays, function (n, i) {
                                              return e(
                                                "div",
                                                {
                                                  key: i,
                                                  staticClass:
                                                    "custom-control custom-checkbox kc-custom-control d-inline-block mr-2",
                                                  attrs: { id: "week_days" },
                                                },
                                                [
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.clinicSession.days,
                                                        expression:
                                                          "clinicSession.days",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "custom-control-input",
                                                    class: {
                                                      " is-invalid":
                                                        t.sessionSubmitted &&
                                                        t.$v.clinicSession.days
                                                          .$error,
                                                    },
                                                    attrs: {
                                                      id: n + i,
                                                      name: "days[]",
                                                      type: "checkbox",
                                                    },
                                                    domProps: {
                                                      value: i,
                                                      checked: Array.isArray(
                                                        t.clinicSession.days
                                                      )
                                                        ? t._i(
                                                            t.clinicSession
                                                              .days,
                                                            i
                                                          ) > -1
                                                        : t.clinicSession.days,
                                                    },
                                                    on: {
                                                      change: [
                                                        function (e) {
                                                          var n =
                                                              t.clinicSession
                                                                .days,
                                                            r = e.target,
                                                            o = !!r.checked;
                                                          if (
                                                            Array.isArray(n)
                                                          ) {
                                                            var a = i,
                                                              s = t._i(n, a);
                                                            r.checked
                                                              ? s < 0 &&
                                                                t.$set(
                                                                  t.clinicSession,
                                                                  "days",
                                                                  n.concat([a])
                                                                )
                                                              : s > -1 &&
                                                                t.$set(
                                                                  t.clinicSession,
                                                                  "days",
                                                                  n
                                                                    .slice(0, s)
                                                                    .concat(
                                                                      n.slice(
                                                                        s + 1
                                                                      )
                                                                    )
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
                                                    [t._v(t._s(n))]
                                                  ),
                                                ]
                                              );
                                            }),
                                          ],
                                          2
                                        ),
                                        t._v(" "),
                                        t.submitted &&
                                        t.$v.clinicSession.days.$invalid
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "invalid-feedback mt-2",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .days_required
                                                    ) +
                                                    "\n                  "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.weekDaysValidationCheck
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "invalid-feedback mt-2",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .days_already_exist
                                                    ) +
                                                    "\n                  "
                                                ),
                                              ]
                                            )
                                          : t._e(),
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
                                                            .doctor_session
                                                            .save_btn
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
                                                  click: t.resetSessionFormData,
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .cancel
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
                                t._v(" "),
                                e("div", { staticClass: "row mt-3" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        t.pageLoader
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "page-loader-section",
                                              },
                                              [e("loader-component-2")],
                                              1
                                            )
                                          : e(
                                              "div",
                                              {
                                                staticClass:
                                                  "mb-0 doctor-session-tbl",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    attrs: {
                                                      id: "clinicSessionPrint",
                                                    },
                                                  },
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
                                                              columns: t.column,
                                                              "pagination-options":
                                                                {
                                                                  enabled: !0,
                                                                  mode: "pages",
                                                                },
                                                              rows: t.processedClinicSessions,
                                                              "search-options":
                                                                {
                                                                  enabled: !0,
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .datatable
                                                                      .search_placeholder,
                                                                },
                                                              "sort-options": {
                                                                enabled: !0,
                                                              },
                                                              styleClass:
                                                                "vgt-table striped",
                                                              compactMode: "",
                                                            },
                                                            scopedSlots: t._u([
                                                              {
                                                                key: "table-row",
                                                                fn: function (
                                                                  n
                                                                ) {
                                                                  return [
                                                                    "index" ==
                                                                    n.column
                                                                      .field
                                                                      ? e(
                                                                          "div",
                                                                          [
                                                                            t._v(
                                                                              "\n                                " +
                                                                                t._s(
                                                                                  n
                                                                                    .row
                                                                                    .index
                                                                                ) +
                                                                                "\n                              "
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : "days" ==
                                                                        n.column
                                                                          .field
                                                                      ? e(
                                                                          "div",
                                                                          [
                                                                            t._v(
                                                                              "\n                                " +
                                                                                t._s(
                                                                                  t.tableDaysTranslation(
                                                                                    n
                                                                                      .row
                                                                                      .days
                                                                                  )
                                                                                ) +
                                                                                "\n                              "
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : "s_one_start_time" ==
                                                                        n.column
                                                                          .field
                                                                      ? e(
                                                                          "div",
                                                                          [
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_one_start_time
                                                                                .HH &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_one_end_time
                                                                                .MM &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_one_start_time
                                                                                .MM &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_one_end_time
                                                                                .HH
                                                                              ? e(
                                                                                  "div",
                                                                                  [
                                                                                    t._v(
                                                                                      "\n                                  " +
                                                                                        t._s(
                                                                                          t._f(
                                                                                            "timeObjectToString"
                                                                                          )(
                                                                                            n
                                                                                              .row
                                                                                              .s_one_start_time
                                                                                          )
                                                                                        ) +
                                                                                        " " +
                                                                                        t._s(
                                                                                          " to "
                                                                                        ) +
                                                                                        " " +
                                                                                        t._s(
                                                                                          t._f(
                                                                                            "timeObjectToString"
                                                                                          )(
                                                                                            n
                                                                                              .row
                                                                                              .s_one_end_time
                                                                                          )
                                                                                        ) +
                                                                                        "\n                                "
                                                                                    ),
                                                                                  ]
                                                                                )
                                                                              : e(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "text-center",
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      "\n                                  -\n                                "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                          ]
                                                                        )
                                                                      : "s_two_start_time" ==
                                                                        n.column
                                                                          .field
                                                                      ? e(
                                                                          "div",
                                                                          [
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_two_start_time
                                                                                .HH &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_two_end_time
                                                                                .MM &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_two_start_time
                                                                                .MM &&
                                                                            "" !==
                                                                              n
                                                                                .row
                                                                                .s_two_end_time
                                                                                .HH
                                                                              ? e(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      "\n                                  " +
                                                                                        t._s(
                                                                                          t._f(
                                                                                            "timeObjectToString"
                                                                                          )(
                                                                                            n
                                                                                              .row
                                                                                              .s_two_start_time
                                                                                          )
                                                                                        ) +
                                                                                        " " +
                                                                                        t._s(
                                                                                          " to "
                                                                                        ) +
                                                                                        " " +
                                                                                        t._s(
                                                                                          t._f(
                                                                                            "timeObjectToString"
                                                                                          )(
                                                                                            n
                                                                                              .row
                                                                                              .s_two_end_time
                                                                                          )
                                                                                        ) +
                                                                                        "\n                                "
                                                                                    ),
                                                                                  ]
                                                                                )
                                                                              : e(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      "\n                                  -\n                                "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                          ]
                                                                        )
                                                                      : "action" ==
                                                                        n.column
                                                                          .field
                                                                      ? e(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "btn-group",
                                                                          },
                                                                          [
                                                                            t.kcCheckPermission(
                                                                              "doctor_session_edit"
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
                                                                                    attrs:
                                                                                      {
                                                                                        title:
                                                                                          t
                                                                                            .formTranslation
                                                                                            .clinic_schedule
                                                                                            .dt_lbl_edit,
                                                                                        type: "button",
                                                                                      },
                                                                                    on: {
                                                                                      click:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return t.editSessionData(
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
                                                                                          "fa fa-pen-alt",
                                                                                      }
                                                                                    ),
                                                                                  ]
                                                                                )
                                                                              : t._e(),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            t.kcCheckPermission(
                                                                              "doctor_session_delete"
                                                                            ) &&
                                                                            "receptionist" !==
                                                                              t.getUserRole()
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
                                                                                        type: "button",
                                                                                      },
                                                                                    on: {
                                                                                      click:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return t.deleteSessionData(
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
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ];
                                                                },
                                                              },
                                                            ]),
                                                          },
                                                          [
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
                                                                  "doctor_session_export"
                                                                )
                                                                  ? e(
                                                                      "module-data-export",
                                                                      {
                                                                        attrs: {
                                                                          module_data:
                                                                            t
                                                                              .clinicData
                                                                              .clinic_sessions,
                                                                          module_name:
                                                                            t
                                                                              .formTranslation
                                                                              .doctor_session
                                                                              .doc_sessions,
                                                                          module_type:
                                                                            "session",
                                                                        },
                                                                      }
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
                                                  ]
                                                ),
                                              ]
                                            ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                e("hr"),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
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
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(401).a,
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row kivicare_get_help" }, [
            e(
              "div",
              { staticClass: "col-md-12" },
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                  },
                  [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col-md-8" }, [
                        e("h2", { staticClass: "text-primary" }, [
                          t._v(" Kivicare Shortcode "),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-md-4" }),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row p-3" }, [
                      e("div", { staticClass: "col-md-12" }, [
                        e("ul", [
                          e("li", [
                            e("p", [
                              e(
                                "b",
                                {
                                  staticClass: "mr-3",
                                  attrs: { id: "shortcode-1" },
                                },
                                [t._v(" [bookAppointment] ")]
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass: "fa fa-clipboard mr-3",
                                staticStyle: { cursor: "copy" },
                                attrs: {
                                  title: "Copy Shortcode",
                                  "aria-hidden": "true",
                                },
                                on: {
                                  click: function (e) {
                                    return t.copyToClipboard("#shortcode-1");
                                  },
                                },
                              }),
                              t._v(" "),
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://apps.iqonic.design/docs/product/kivicare/widgets/book-appointment-widget/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                },
                                [
                                  e("i", {
                                    staticClass: "fas fa-external-link-alt",
                                  }),
                                  t._v(" overview "),
                                ]
                              ),
                              t._v(
                                " (Deprecated)\n                            "
                              ),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "  With following shortcode Users can register/login and book appointment.  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              e(
                                "b",
                                {
                                  staticClass: "mr-3",
                                  attrs: { id: "shortcode-2" },
                                },
                                [t._v(" [patientDashboard] ")]
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass: "fa fa-clipboard mr-3",
                                staticStyle: { cursor: "copy" },
                                attrs: {
                                  title: "Copy Shortcode",
                                  "aria-hidden": "true",
                                },
                                on: {
                                  click: function (e) {
                                    return t.copyToClipboard("#shortcode-2");
                                  },
                                },
                              }),
                              t._v(" "),
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://apps.iqonic.design/docs/product/kivicare/widgets/patient-dashboard-widget/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                },
                                [
                                  e("i", {
                                    staticClass: "fas fa-external-link-alt",
                                  }),
                                  t._v(" overview "),
                                ]
                              ),
                              t._v(
                                " (Deprecated)\n                            "
                              ),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "  With following shortcode patient can register,login, manage profile, manage password and book appointment. "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              e(
                                "b",
                                {
                                  staticClass: "mr-3",
                                  attrs: { id: "shortcode-3" },
                                },
                                [t._v(" [kivicareBookAppointment] ")]
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass: "fa fa-clipboard mr-3",
                                staticStyle: { cursor: "copy" },
                                attrs: {
                                  title: "Copy Shortcode",
                                  "aria-hidden": "true",
                                },
                                on: {
                                  click: function (e) {
                                    return t.copyToClipboard("#shortcode-3");
                                  },
                                },
                              }),
                              t._v(" "),
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://apps.iqonic.design/docs/product/kivicare/widgets/book-appointment-widget-customizable/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                },
                                [
                                  e("i", {
                                    staticClass: "fas fa-external-link-alt",
                                  }),
                                  t._v(" overview "),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "  With following shortcode Users can register/login and book appointment. "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              e(
                                "b",
                                {
                                  staticClass: "mr-3",
                                  attrs: { id: "shortcode-4" },
                                },
                                [t._v(" [kivicareRegisterLogin] ")]
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass: "fa fa-clipboard mr-3",
                                staticStyle: { cursor: "copy" },
                                attrs: {
                                  title: "Copy Shortcode",
                                  "aria-hidden": "true",
                                },
                                on: {
                                  click: function (e) {
                                    return t.copyToClipboard("#shortcode-4");
                                  },
                                },
                              }),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "  With following shortcode kivicare users ( doctor, patient and receptionist ) can register and login "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              e(
                                "b",
                                {
                                  staticClass: "mr-3",
                                  attrs: { id: "shortcode-5" },
                                },
                                [t._v(" [kivicareBookAppointmentButton] ")]
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass: "fa fa-clipboard mr-3",
                                staticStyle: { cursor: "copy" },
                                attrs: {
                                  title: "Copy Shortcode",
                                  "aria-hidden": "true",
                                },
                                on: {
                                  click: function (e) {
                                    return t.copyToClipboard("#shortcode-5");
                                  },
                                },
                              }),
                              t._v(" "),
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://apps.iqonic.design/docs/product/kivicare/widgets/book-appointment-button-widget-customizable/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                },
                                [
                                  e("i", {
                                    staticClass: "fas fa-external-link-alt",
                                  }),
                                  t._v(" overview "),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "  With following shortcode Users can register/login and book appointment In Popup Modal. "
                              ),
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
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = o.exports;
  },
  ,
  function (t, e) {},
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e) {},
]);
