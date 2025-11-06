// app.part8-de-30.js
K,
                _inflateRaw: st,
                consts: w,
              }),
              e
            );
          })();
        try {
          W = n(599);
        } catch (t) {}
        function B(t) {
          return "string" == typeof t
            ? C(t)
            : Array.isArray(t)
            ? (function (t) {
                if ("undefined" == typeof Uint8Array)
                  throw new Error("Unsupported");
                return new Uint8Array(t);
              })(t)
            : t;
        }
        function F(t, e, n) {
          if (void 0 !== W && W.writeFileSync)
            return n ? W.writeFileSync(t, e, n) : W.writeFileSync(t, e);
          var i = "utf8" == n ? jt(e) : e;
          if ("undefined" != typeof IE_SaveFile) return IE_SaveFile(i, t);
          if ("undefined" != typeof Blob) {
            var r = new Blob([B(i)], { type: "application/octet-stream" });
            if ("undefined" != typeof navigator && navigator.msSaveBlob)
              return navigator.msSaveBlob(r, t);
            if ("undefined" != typeof saveAs) return saveAs(r, t);
            if (
              "undefined" != typeof URL &&
              "undefined" != typeof document &&
              document.createElement &&
              URL.createObjectURL
            ) {
              var o = URL.createObjectURL(r);
              if (
                "object" == typeof chrome &&
                "function" == typeof (chrome.downloads || {}).download
              )
                return (
                  URL.revokeObjectURL &&
                    "undefined" != typeof setTimeout &&
                    setTimeout(function () {
                      URL.revokeObjectURL(o);
                    }, 6e4),
                  chrome.downloads.download({ url: o, filename: t, saveAs: !0 })
                );
              var s = document.createElement("a");
              if (null != s.download)
                return (
                  (s.download = t),
                  (s.href = o),
                  document.body.appendChild(s),
                  s.click(),
                  document.body.removeChild(s),
                  URL.revokeObjectURL &&
                    "undefined" != typeof setTimeout &&
                    setTimeout(function () {
                      URL.revokeObjectURL(o);
                    }, 6e4),
                  o
                );
            }
          }
          if (
            void 0 !== a &&
            "undefined" != typeof File &&
            "undefined" != typeof Folder
          )
            try {
              var l = File(t);
              return (
                l.open("w"),
                (l.encoding = "binary"),
                Array.isArray(e) && (e = k(e)),
                l.write(e),
                l.close(),
                e
              );
            } catch (t) {
              if (!t.message || !t.message.match(/onstruct/)) throw t;
            }
          throw new Error("cannot save file " + t);
        }
        function $(t) {
          for (var e = Object.keys(t), n = [], i = 0; i < e.length; ++i)
            t.hasOwnProperty(e[i]) && n.push(e[i]);
          return n;
        }
        function H(t, e) {
          for (var n = [], i = $(t), r = 0; r !== i.length; ++r)
            null == n[t[i[r]][e]] && (n[t[i[r]][e]] = i[r]);
          return n;
        }
        function Y(t) {
          for (var e = [], n = $(t), i = 0; i !== n.length; ++i)
            e[t[n[i]]] = n[i];
          return e;
        }
        function U(t) {
          for (var e = [], n = $(t), i = 0; i !== n.length; ++i)
            e[t[n[i]]] = parseInt(n[i], 10);
          return e;
        }
        var X = new Date(1899, 11, 30, 0, 0, 0),
          V =
            X.getTime() +
            6e4 * (new Date().getTimezoneOffset() - X.getTimezoneOffset());
        function G(t, e) {
          var n = t.getTime();
          return e && (n -= 1263168e5), (n - V) / 864e5;
        }
        function K(t) {
          var e = new Date();
          return e.setTime(24 * t * 60 * 60 * 1e3 + V), e;
        }
        function Z(t) {
          var e = 0,
            n = 0,
            i = !1,
            r = t.match(
              /P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/
            );
          if (!r) throw new Error("|" + t + "| is not an ISO8601 Duration");
          for (var o = 1; o != r.length; ++o)
            if (r[o]) {
              switch (
                ((n = 1), o > 3 && (i = !0), r[o].slice(r[o].length - 1))
              ) {
                case "Y":
                  throw new Error(
                    "Unsupported ISO Duration Field: " +
                      r[o].slice(r[o].length - 1)
                  );
                case "D":
                  n *= 24;
                case "H":
                  n *= 60;
                case "M":
                  if (!i) throw new Error("Unsupported ISO Duration Field: M");
                  n *= 60;
              }
              e += n * parseInt(r[o], 10);
            }
          return e;
        }
        var J = new Date("2017-02-19T19:06:09.000Z");
        isNaN(J.getFullYear()) && (J = new Date("2/19/17"));
        var Q = 2017 == J.getFullYear();
        function tt(t, e) {
          var n = new Date(t);
          if (Q)
            return (
              e > 0
                ? n.setTime(n.getTime() + 60 * n.getTimezoneOffset() * 1e3)
                : e < 0 &&
                  n.setTime(n.getTime() - 60 * n.getTimezoneOffset() * 1e3),
              n
            );
          if (t instanceof Date) return t;
          if (1917 == J.getFullYear() && !isNaN(n.getFullYear())) {
            var i = n.getFullYear();
            return (
              t.indexOf("" + i) > -1 || n.setFullYear(n.getFullYear() + 100), n
            );
          }
          var r = t.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
            o = new Date(
              +r[0],
              +r[1] - 1,
              +r[2],
              +r[3] || 0,
              +r[4] || 0,
              +r[5] || 0
            );
          return (
            t.indexOf("Z") > -1 &&
              (o = new Date(o.getTime() - 60 * o.getTimezoneOffset() * 1e3)),
            o
          );
        }
        function et(t) {
          for (var e = "", n = 0; n != t.length; ++n)
            e += String.fromCharCode(t[n]);
          return e;
        }
        function nt(t) {
          if ("undefined" != typeof JSON && !Array.isArray(t))
            return JSON.parse(JSON.stringify(t));
          if ("object" != typeof t || null == t) return t;
          if (t instanceof Date) return new Date(t.getTime());
          var e = {};
          for (var n in t) t.hasOwnProperty(n) && (e[n] = nt(t[n]));
          return e;
        }
        function it(t, e) {
          for (var n = ""; n.length < e; ) n += t;
          return n;
        }
        function rt(t) {
          var e = Number(t);
          if (!isNaN(e)) return e;
          var n = 1,
            i = t
              .replace(/([\d]),([\d])/g, "$1$2")
              .replace(/[$]/g, "")
              .replace(/[%]/g, function () {
                return (n *= 100), "";
              });
          return isNaN((e = Number(i)))
            ? ((i = i.replace(/[(](.*)[)]/, function (t, e) {
                return (n = -n), e;
              })),
              isNaN((e = Number(i))) ? e : e / n)
            : e / n;
        }
        function ot(t) {
          var e = new Date(t),
            n = new Date(NaN),
            i = e.getYear(),
            r = e.getMonth(),
            o = e.getDate();
          return isNaN(o) || i < 0 || i > 8099
            ? n
            : ((r > 0 || o > 1) && 101 != i) ||
              t
                .toLowerCase()
                .match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)
            ? e
            : t.match(/[^-0-9:,\/\\]/)
            ? n
            : e;
        }
        var at,
          st = 5 == "abacaba".split(/(:?b)/i).length;
        function lt(t) {
          return t
            ? t.data
              ? m(t.data)
              : t.asNodeBuffer && M
              ? m(t.asNodeBuffer().toString("binary"))
              : t.asBinary
              ? m(t.asBinary())
              : t._data && t._data.getContent
              ? m(et(Array.prototype.slice.call(t._data.getContent(), 0)))
              : null
            : null;
        }
        function ct(t, e) {
          for (
            var n = $(t.files),
              i = e.toLowerCase(),
              r = i.replace(/\//g, "\\"),
              o = 0;
            o < n.length;
            ++o
          ) {
            var a = n[o].toLowerCase();
            if (i == a || r == a) return t.files[n[o]];
          }
          return null;
        }
        function dt(t, e) {
          var n = ct(t, e);
          if (null == n) throw new Error("Cannot find file " + e + " in zip");
          return n;
        }
        function ut(t, e, n) {
          if (!n)
            return (function (t) {
              return t && ".bin" === t.name.slice(-4)
                ? (function (t) {
                    if (!t) return null;
                    if (t.data) return b(t.data);
                    if (t.asNodeBuffer && M) return t.asNodeBuffer();
                    if (t._data && t._data.getContent) {
                      var e = t._data.getContent();
                      return "string" == typeof e
                        ? b(e)
                        : Array.prototype.slice.call(e);
                    }
                    return null;
                  })(t)
                : lt(t);
            })(dt(t, e));
          if (!e) return null;
          try {
            return ut(t, e);
          } catch (t) {
            return null;
          }
        }
        function pt(t, e, n) {
          if (!n) return lt(dt(t, e));
          if (!e) return null;
          try {
            return pt(t, e);
          } catch (t) {
            return null;
          }
        }
        function ht(t, e) {
          var n = e.split("/");
          "/" != e.slice(-1) && n.pop();
          for (var i = t.split("/"); 0 !== i.length; ) {
            var r = i.shift();
            ".." === r ? n.pop() : "." !== r && n.push(r);
          }
          return n.join("/");
        }
        "undefined" != typeof JSZipSync && (at = JSZipSync),
          t.exports && void 0 === at && (at = n(749));
        var ft = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
          bt =
            /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
          mt =
            /<[\/\?]?[a-zA-Z0-9:]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/g;
        ft.match(mt) || (mt = /<[^>]*>/g);
        var gt = /<\w*:/,
          vt = /<(\/?)\w+:/;
        function _t(t, e) {
          for (
            var n = {}, i = 0, r = 0;
            i !== t.length &&
            32 !== (r = t.charCodeAt(i)) &&
            10 !== r &&
            13 !== r;
            ++i
          );
          if ((e || (n[0] = t.slice(0, i)), i === t.length)) return n;
          var o = t.match(bt),
            a = 0,
            s = "",
            l = 0,
            c = "",
            d = "",
            u = 1;
          if (o)
            for (l = 0; l != o.length; ++l) {
              for (
                d = o[l], r = 0;
                r != d.length && 61 !== d.charCodeAt(r);
                ++r
              );
              for (c = d.slice(0, r).trim(); 32 == d.charCodeAt(r + 1); ) ++r;
              for (
                u = 34 == (i = d.charCodeAt(r + 1)) || 39 == i ? 1 : 0,
                  s = d.slice(r + 1 + u, d.length - u),
                  a = 0;
                a != c.length && 58 !== c.charCodeAt(a);
                ++a
              );
              if (a === c.length)
                c.indexOf("_") > 0 && (c = c.slice(0, c.indexOf("_"))),
                  (n[c] = s),
                  (n[c.toLowerCase()] = s);
              else {
                var p =
                  (5 === a && "xmlns" === c.slice(0, 5) ? "xmlns" : "") +
                  c.slice(a + 1);
                if (n[p] && "ext" == c.slice(a - 3, a)) continue;
                (n[p] = s), (n[p.toLowerCase()] = s);
              }
            }
          return n;
        }
        function yt(t) {
          return t.replace(vt, "<$1");
        }
        var Mt,
          Ot,
          wt = {
            "&quot;": '"',
            "&apos;": "'",
            "&gt;": ">",
            "&lt;": "<",
            "&amp;": "&",
          },
          At = Y(wt),
          xt =
            ((Mt = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g),
            (Ot = /_x([\da-fA-F]{4})_/g),
            function t(e) {
              var n = e + "",
                i = n.indexOf("<![CDATA[");
              if (-1 == i)
                return n
                  .replace(Mt, function (t, e) {
                    return (
                      wt[t] ||
                      String.fromCharCode(
                        parseInt(e, t.indexOf("x") > -1 ? 16 : 10)
                      ) ||
                      t
                    );
                  })
                  .replace(Ot, function (t, e) {
                    return String.fromCharCode(parseInt(e, 16));
                  });
              var r = n.indexOf("]]>");
              return t(n.slice(0, i)) + n.slice(i + 9, r) + t(n.slice(r + 3));
            }),
          zt = /[&<>'"]/g,
          Ct = /[\u0000-\u0008\u000b-\u001f]/g;
        function kt(t) {
          return (t + "")
            .replace(zt, function (t) {
              return At[t];
            })
            .replace(Ct, function (t) {
              return (
                "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_"
              );
            });
        }
        function St(t) {
          return kt(t).replace(/ /g, "_x0020_");
        }
        var Tt = /[\u0000-\u001f]/g;
        function Dt(t) {
          return (t + "")
            .replace(zt, function (t) {
              return At[t];
            })
            .replace(/\n/g, "<br/>")
            .replace(Tt, function (t) {
              return (
                "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";"
              );
            });
        }
        var Lt = (function () {
          var t = /&#(\d+);/g;
          function e(t, e) {
            return String.fromCharCode(parseInt(e, 10));
          }
          return function (n) {
            return n.replace(t, e);
          };
        })();
        function qt(t) {
          switch (t) {
            case 1:
            case !0:
            case "1":
            case "true":
            case "TRUE":
              return !0;
            default:
              return !1;
          }
        }
        var Et = function (t) {
            for (
              var e = "", n = 0, i = 0, r = 0, o = 0, a = 0, s = 0;
              n < t.length;

            )
              (i = t.charCodeAt(n++)) < 128
                ? (e += String.fromCharCode(i))
                : ((r = t.charCodeAt(n++)),
                  i > 191 && i < 224
                    ? ((a = (31 & i) << 6),
                      (a |= 63 & r),
                      (e += String.fromCharCode(a)))
                    : ((o = t.charCodeAt(n++)),
                      i < 240
                        ? (e += String.fromCharCode(
                            ((15 & i) << 12) | ((63 & r) << 6) | (63 & o)
                          ))
                        : ((s =
                            (((7 & i) << 18) |
                              ((63 & r) << 12) |
                              ((63 & o) << 6) |
                              (63 & (a = t.charCodeAt(n++)))) -
                            65536),
                          (e += String.fromCharCode(
                            55296 + ((s >>> 10) & 1023)
                          )),
                          (e += String.fromCharCode(56320 + (1023 & s))))));
            return e;
          },
          jt = function (t) {
            for (var e = [], n = 0, i = 0, r = 0; n < t.length; )
              switch (((i = t.charCodeAt(n++)), !0)) {
                case i < 128:
                  e.push(String.fromCharCode(i));
                  break;
                case i < 2048:
                  e.push(String.fromCharCode(192 + (i >> 6))),
                    e.push(String.fromCharCode(128 + (63 & i)));
                  break;
                case i >= 55296 && i < 57344:
                  (i -= 55296),
                    (r = t.charCodeAt(n++) - 56320 + (i << 10)),
                    e.push(String.fromCharCode(240 + ((r >> 18) & 7))),
                    e.push(String.fromCharCode(144 + ((r >> 12) & 63))),
                    e.push(String.fromCharCode(128 + ((r >> 6) & 63))),
                    e.push(String.fromCharCode(128 + (63 & r)));
                  break;
                default:
                  e.push(String.fromCharCode(224 + (i >> 12))),
                    e.push(String.fromCharCode(128 + ((i >> 6) & 63))),
                    e.push(String.fromCharCode(128 + (63 & i)));
              }
            return e.join("");
          };
        if (M) {
          var Pt = function (t) {
              var e,
                n,
                i,
                o = r.alloc(2 * t.length),
                a = 1,
                s = 0,
                l = 0;
              for (n = 0; n < t.length; n += a)
                (a = 1),
                  (i = t.charCodeAt(n)) < 128
                    ? (e = i)
                    : i < 224
                    ? ((e = 64 * (31 & i) + (63 & t.charCodeAt(n + 1))),
                      (a = 2))
                    : i < 240
                    ? ((e =
                        4096 * (15 & i) +
                        64 * (63 & t.charCodeAt(n + 1)) +
                        (63 & t.charCodeAt(n + 2))),
                      (a = 3))
                    : ((a = 4),
                      (e =
                        262144 * (7 & i) +
                        4096 * (63 & t.charCodeAt(n + 1)) +
                        64 * (63 & t.charCodeAt(n + 2)) +
                        (63 & t.charCodeAt(n + 3))),
                      (l = 55296 + (((e -= 65536) >>> 10) & 1023)),
                      (e = 56320 + (1023 & e))),
                  0 !== l && ((o[s++] = 255 & l), (o[s++] = l >>> 8), (l = 0)),
                  (o[s++] = e % 256),
                  (o[s++] = e >>> 8);
              return o.slice(0, s).toString("ucs2");
            },
            Rt = "foo bar bazâð£";
          Et(Rt) == Pt(Rt) && (Et = Pt);
          var It = function (t) {
            return O(t, "binary").toString("utf8");
          };
          Et(Rt) == It(Rt) && (Et = It),
            (jt = function (t) {
              return O(t, "utf8").toString("binary");
            });
        }
        var Wt,
          Nt,
          Bt,
          Ft =
            ((Wt = {}),
            function (t, e) {
              var n = t + "|" + (e || "");
              return Wt[n]
                ? Wt[n]
                : (Wt[n] = new RegExp(
                    "<(?:\\w+:)?" +
                      t +
                      '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' +
                      t +
                      ">",
                    e || ""
                  ));
            }),
          $t =
            ((Nt = [
              ["nbsp", " "],
              ["middot", "·"],
              ["quot", '"'],
              ["apos", "'"],
              ["gt", ">"],
              ["lt", "<"],
              ["amp", "&"],
            ].map(function (t) {
              return [new RegExp("&" + t[0] + ";", "g"), t[1]];
            })),
            function (t) {
              for (
                var e = t
                    .replace(/^[\t\n\r ]+/, "")
                    .replace(/[\t\n\r ]+$/, "")
                    .replace(/[\t\n\r ]+/g, " ")
                    .replace(/<\s*[bB][rR]\s*\/?>/g, "\n")
                    .replace(/<[^>]*>/g, ""),
                  n = 0;
                n < Nt.length;
                ++n
              )
                e = e.replace(Nt[n][0], Nt[n][1]);
              return e;
            }),
          Ht =
            ((Bt = {}),
            function (t) {
              return void 0 !== Bt[t]
                ? Bt[t]
                : (Bt[t] = new RegExp(
                    "<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">",
                    "g"
                  ));
            }),
          Yt = /<\/?(?:vt:)?variant>/g,
          Ut = /<(?:vt:)([^>]*)>([\s\S]*)</;
        function Xt(t, e) {
          var n = _t(t),
            i = t.match(Ht(n.baseType)) || [],
            r = [];
          if (i.length != n.size) {
            if (e.WTF)
              throw new Error(
                "unexpected vector length " + i.length + " != " + n.size
              );
            return r;
          }
          return (
            i.forEach(function (t) {
              var e = t.replace(Yt, "").match(Ut);
              e && r.push({ v: Et(e[2]), t: e[1] });
            }),
            r
          );
        }
        var Vt = /(^\s|\s$|\n)/;
        function Gt(t, e) {
          return (
            "<" +
            t +
            (e.match(Vt) ? ' xml:space="preserve"' : "") +
            ">" +
            e +
            "</" +
            t +
            ">"
          );
        }
        function Kt(t) {
          return $(t)
            .map(function (e) {
              return " " + e + '="' + t[e] + '"';
            })
            .join("");
        }
        function Zt(t, e, n) {
          return (
            "<" +
            t +
            (null != n ? Kt(n) : "") +
            (null != e
              ? (e.match(Vt) ? ' xml:space="preserve"' : "") +
                ">" +
                e +
                "</" +
                t
              : "/") +
            ">"
          );
        }
        function Jt(t, e) {
          try {
            return t.toISOString().replace(/\.\d*/, "");
          } catch (t) {
            if (e) throw t;
          }
          return "";
        }
        var Qt,
          te,
          ee = {
            dc: "http://purl.org/dc/elements/1.1/",
            dcterms: "http://purl.org/dc/terms/",
            dcmitype: "http://purl.org/dc/dcmitype/",
            mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
            vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
            xsi: "http://www.w3.org/2001/XMLSchema-instance",
            xsd: "http://www.w3.org/2001/XMLSchema",
            main: [
              "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
              "http://purl.oclc.org/ooxml/spreadsheetml/main",
              "http://schemas.microsoft.com/office/excel/2006/main",
              "http://schemas.microsoft.com/office/excel/2006/2",
            ],
          },
          ne = "urn:schemas-microsoft-com:office:office",
          ie = "urn:schemas-microsoft-com:office:excel",
          re = "urn:schemas-microsoft-com:office:spreadsheet",
          oe = function (t) {
            for (var e = [], n = 0; n < t[0].length; ++n)
              if (t[0][n])
                for (var i = 0, r = t[0][n].length; i < r; i += 10240)
                  e.push.apply(e, t[0][n].slice(i, i + 10240));
            return e;
          },
          ae = oe,
          se = function (t, e, n) {
            for (var i = [], r = e; r < n; r += 2)
              i.push(String.fromCharCode(xe(t, r)));
            return i.join("").replace(D, "");
          },
          le = se,
          ce = function (t, e, n) {
            for (var i = [], r = e; r < e + n; ++r)
              i.push(("0" + t[r].toString(16)).slice(-2));
            return i.join("");
          },
          de = ce,
          ue = function (t, e, n) {
            for (var i = [], r = e; r < n; r++)
              i.push(String.fromCharCode(Ae(t, r)));
            return i.join("");
          },
          pe = ue,
          he = function (t, e) {
            var n = Ce(t, e);
            return n > 0 ? ue(t, e + 4, e + 4 + n - 1) : "";
          },
          fe = he,
          be = function (t, e) {
            var n = Ce(t, e);
            return n > 0 ? ue(t, e + 4, e + 4 + n - 1) : "";
          },
          me = be,
          ge = function (t, e) {
            var n = 2 * Ce(t, e);
            return n > 0 ? ue(t, e + 4, e + 4 + n - 1) : "";
          },
          ve = ge;
        Qt = te = function (t, e) {
          var n = Ce(t, e);
          return n > 0 ? se(t, e + 4, e + 4 + n) : "";
        };
        var _e,
          ye,
          Me = function (t, e) {
            var n = Ce(t, e);
            return n > 0 ? ue(t, e + 4, e + 4 + n) : "";
          },
          Oe = Me;
        _e = ye = function (t, e) {
          return (function (t, e) {
            for (
              var n = 1 - 2 * (t[e + 7] >>> 7),
                i = ((127 & t[e + 7]) << 4) + ((t[e + 6] >>> 4) & 15),
                r = 15 & t[e + 6],
                o = 5;
              o >= 0;
              --o
            )
              r = 256 * r + t[e + o];
            return 2047 == i
              ? 0 == r
                ? n * (1 / 0)
                : NaN
              : (0 == i ? (i = -1022) : ((i -= 1023), (r += Math.pow(2, 52))),
                n * Math.pow(2, i - 52) * r);
          })(t, e);
        };
        var we = function (t) {
          return Array.isArray(t);
        };
        M &&
          ((se = function (t, e, n) {
            return r.isBuffer(t)
              ? t.toString("utf16le", e, n).replace(D, "")
              : le(t, e, n);
          }),
          (ce = function (t, e, n) {
            return r.isBuffer(t) ? t.toString("hex", e, e + n) : de(t, e, n);
          }),
          (he = function (t, e) {
            if (!r.isBuffer(t)) return fe(t, e);
            var n = t.readUInt32LE(e);
            return n > 0 ? t.toString("utf8", e + 4, e + 4 + n - 1) : "";
          }),
          (be = function (t, e) {
            if (!r.isBuffer(t)) return me(t, e);
            var n = t.readUInt32LE(e);
            return n > 0 ? t.toString("utf8", e + 4, e + 4 + n - 1) : "";
          }),
          (ge = function (t, e) {
            if (!r.isBuffer(t)) return ve(t, e);
            var n = 2 * t.readUInt32LE(e);
            return t.toString("utf16le", e + 4, e + 4 + n - 1);
          }),
          (Qt = function (t, e) {
            if (!r.isBuffer(t)) return te(t, e);
            var n = t.readUInt32LE(e);
            return t.toString("utf16le", e + 4, e + 4 + n);
          }),
          (Me = function (t, e) {
            if (!r.isBuffer(t)) return Oe(t, e);
            var n = t.readUInt32LE(e);
            return t.toString("utf8", e + 4, e + 4 + n);
          }),
          (ue = function (t, e, n) {
            return r.isBuffer(t) ? t.toString("utf8", e, n) : pe(t, e, n);
          }),
          (oe = function (t) {
            return t[0].length > 0 && r.isBuffer(t[0][0])
              ? r.concat(t[0])
              : ae(t);
          }),
          (T = function (t) {
            return r.isBuffer(t[0]) ? r.concat(t) : [].concat.apply([], t);
          }),
          (_e = function (t, e) {
            return r.isBuffer(t) ? t.readDoubleLE(e) : ye(t, e);
          }),
          (we = function (t) {
            return r.isBuffer(t) || Array.isArray(t);
          })),
          "undefined" != typeof cptable &&
            ((se = function (t, e, n) {
              return cptable.utils.decode(1200, t.slice(e, n)).replace(D, "");
            }),
            (ue = function (t, e, n) {
              return cptable.utils.decode(65001, t.slice(e, n));
            }),
            (he = function (t, e) {
              var n = Ce(t, e);
              return n > 0
                ? cptable.utils.decode(l, t.slice(e + 4, e + 4 + n - 1))
                : "";
            }),
            (be = function (t, e) {
              var n = Ce(t, e);
              return n > 0
                ? cptable.utils.decode(s, t.slice(e + 4, e + 4 + n - 1))
                : "";
            }),
            (ge = function (t, e) {
              var n = 2 * Ce(t, e);
              return n > 0
                ? cptable.utils.decode(1200, t.slice(e + 4, e + 4 + n - 1))
                : "";
            }),
            (Qt = function (t, e) {
              var n = Ce(t, e);
              return n > 0
                ? cptable.utils.decode(1200, t.slice(e + 4, e + 4 + n))
                : "";
            }),
            (Me = function (t, e) {
              var n = Ce(t, e);
              return n > 0
                ? cptable.utils.decode(65001, t.slice(e + 4, e + 4 + n))
                : "";
            }));
        var Ae = function (t, e) {
            return t[e];
          },
          xe = function (t, e) {
            return 256 * t[e + 1] + t[e];
          },
          ze = function (t, e) {
            var n = 256 * t[e + 1] + t[e];
            return n < 32768 ? n : -1 * (65535 - n + 1);
          },
          Ce = function (t, e) {
            return (
              t[e + 3] * (1 << 24) + (t[e + 2] << 16) + (t[e + 1] << 8) + t[e]
            );
          },
          ke = function (t, e) {
            return (t[e + 3] << 24) | (t[e + 2] << 16) | (t[e + 1] << 8) | t[e];
          },
          Se = function (t, e) {
            return (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3];
          };
        function Te(t, e) {
          var n,
            i,
            o,
            a,
            l,
            c,
            d = "",
            u = [];
          switch (e) {
            case "dbcs":
              if (((c = this.l), M && r.isBuffer(this)))
                d = this.slice(this.l, this.l + 2 * t).toString("utf16le");
              else
                for (l = 0; l < t; ++l)
                  (d += String.fromCharCode(xe(this, c))), (c += 2);
              t *= 2;
              break;
            case "utf8":
              d = ue(this, this.l, this.l + t);
              break;
            case "utf16le":
              (t *= 2), (d = se(this, this.l, this.l + t));
              break;
            case "wstr":
              if ("undefined" == typeof cptable)
                return Te.call(this, t, "dbcs");
              (d = cptable.utils.decode(s, this.slice(this.l, this.l + 2 * t))),
                (t *= 2);
              break;
            case "lpstr-ansi":
              (d = he(this, this.l)), (t = 4 + Ce(this, this.l));
              break;
            case "lpstr-cp":
              (d = be(this, this.l)), (t = 4 + Ce(this, this.l));
              break;
            case "lpwstr":
              (d = ge(this, this.l)), (t = 4 + 2 * Ce(this, this.l));
              break;
            case "lpp4":
              (t = 4 + Ce(this, this.l)),
                (d = Qt(this, this.l)),
                2 & t && (t += 2);
              break;
            case "8lpp4":
              (t = 4 + Ce(this, this.l)),
                (d = Me(this, this.l)),
                3 & t && (t += 4 - (3 & t));
              break;
            case "cstr":
              for (t = 0, d = ""; 0 !== (o = Ae(this, this.l + t++)); )
                u.push(g(o));
              d = u.join("");
              break;
            case "_wstr":
              for (t = 0, d = ""; 0 !== (o = xe(this, this.l + t)); )
                u.push(g(o)), (t += 2);
              (t += 2), (d = u.join(""));
              break;
            case "dbcs-cont":
              for (d = "", c = this.l, l = 0; l < t; ++l) {
                if (this.lens && -1 !== this.lens.indexOf(c))
                  return (
                    (o = Ae(this, c)),
                    (this.l = c + 1),
                    (a = Te.call(this, t - l, o ? "dbcs-cont" : "sbcs-cont")),
                    u.join("") + a
                  );
                u.push(g(xe(this, c))), (c += 2);
              }
              (d = u.join("")), (t *= 2);
              break;
            case "cpstr":
              if ("undefined" != typeof cptable) {
                d = cptable.utils.decode(s, this.slice(this.l, this.l + t));
                break;
              }
            case "sbcs-cont":
              for (d = "", c = this.l, l = 0; l != t; ++l) {
                if (this.lens && -1 !== this.lens.indexOf(c))
                  return (
                    (o = Ae(this, c)),
                    (this.l = c + 1),
                    (a = Te.call(this, t - l, o ? "dbcs-cont" : "sbcs-cont")),
                    u.join("") + a
                  );
                u.push(g(Ae(this, c))), (c += 1);
              }
              d = u.join("");
              break;
            default:
              switch (t) {
                case 1:
                  return (n = Ae(this, this.l)), this.l++, n;
                case 2:
                  return (
                    (n = ("i" === e ? ze : xe)(this, this.l)), (this.l += 2), n
                  );
                case 4:
                case -4:
                  return "i" === e || 0 == (128 & this[this.l + 3])
                    ? ((n = (t > 0 ? ke : Se)(this, this.l)), (this.l += 4), n)
                    : ((i = Ce(this, this.l)), (this.l += 4), i);
                case 8:
                case -8:
                  if ("f" === e)
                    return (
                      (i =
                        8 == t
                          ? _e(this, this.l)
                          : _e(
                              [
                                this[this.l + 7],
                                this[this.l + 6],
                                this[this.l + 5],
                                this[this.l + 4],
                                this[this.l + 3],
                                this[this.l + 2],
                                this[this.l + 1],
                                this[this.l + 0],
                              ],
                              0
                            )),
                      (this.l += 8),
                      i
                    );
                  t = 8;
                case 16:
                  d = ce(this, this.l, t);
              }
          }
          return (this.l += t), d;
        }
        var De = function (t, e, n) {
          (t[n] = 255 & e), (t[n + 1] = (e >>> 8) & 255);
        };
        function Le(t, e, n) {
          var i = 0,
            r = 0;
          if ("dbcs" === n) {
            for (r = 0; r != e.length; ++r)
              De(this, e.charCodeAt(r), this.l + 2 * r);
            i = 2 * e.length;
          } else if ("sbcs" === n) {
            for (e = e.replace(/[^\x00-\x7F]/g, "_"), r = 0; r != e.length; ++r)
              this[this.l + r] = 255 & e.charCodeAt(r);
            i = e.length;
          } else {
            if ("hex" === n) {
              for (; r < t; ++r)
                this[this.l++] = parseInt(e.slice(2 * r, 2 * r + 2), 16) || 0;
              return this;
            }
            if ("utf16le" === n) {
              var o = Math.min(this.l + t, this.length);
              for (r = 0; r < Math.min(e.length, t); ++r) {
                var a = e.charCodeAt(r);
                (this[this.l++] = 255 & a), (this[this.l++] = a >> 8);
              }
              for (; this.l < o; ) this[this.l++] = 0;
              return this;
            }
            switch (t) {
              case 1:
                (i = 1), (this[this.l] = 255 & e);
                break;
              case 2:
                (i = 2),
                  (this[this.l] = 255 & e),
                  (e >>>= 8),
                  (this[this.l + 1] = 255 & e);
                break;
              case 3:
                (i = 3),
                  (this[this.l] = 255 & e),
                  (e >>>= 8),
                  (this[this.l + 1] = 255 & e),
                  (e >>>= 8),
                  (this[this.l + 2] = 255 & e);
                break;
              case 4:
                (i = 4),
                  (function (t, e, n) {
                    (t[n] = 255 & e),
                      (t[n + 1] = (e >>> 8) & 255),
                      (t[n + 2] = (e >>> 16) & 255),
                      (t[n + 3] = (e >>> 24) & 255);
                  })(this, e, this.l);
                break;
              case 8:
                if (((i = 8), "f" === n)) {
                  !(function (t, e, n) {
                    var i = (e < 0 || 1 / e == -1 / 0 ? 1 : 0) << 7,
                      r = 0,
                      o = 0,
                      a = i ? -e : e;
                    isFinite(a)
                      ? 0 == a
                        ? (r = o = 0)
                        : ((r = Math.floor(Math.log(a) / Math.LN2)),
                          (o = a * Math.pow(2, 52 - r)),
                          r <= -1023 && (!isFinite(o) || o < Math.pow(2, 52))
                            ? (r = -1022)
                            : ((o -= Math.pow(2, 52)), (r += 1023)))
                      : ((r = 2047), (o = isNaN(e) ? 26985 : 0));
                    for (var s = 0; s <= 5; ++s, o /= 256) t[n + s] = 255 & o;
                    (t[n + 6] = ((15 & r) << 4) | (15 & o)),
                      (t[n + 7] = (r >> 4) | i);
                  })(this, e, this.l);
                  break;
                }
              case 16:
                break;
              case -4:
                (i = 4),
                  (function (t, e, n) {
                    (t[n] = 255 & e),
                      (t[n + 1] = (e >> 8) & 255),
                      (t[n + 2] = (e >> 16) & 255),
                      (t[n + 3] = (e >> 24) & 255);
                  })(this, e, this.l);
            }
          }
          return (this.l += i), this;
        }
        function qe(t, e) {
          var n = ce(this, this.l, t.length >> 1);
          if (n !== t) throw new Error(e + "Expected " + t + " saw " + n);
          this.l += t.length >> 1;
        }
        function Ee(t, e) {
          (t.l = e), (t.read_shift = Te), (t.chk = qe), (t.write_shift = Le);
        }
        function je(t, e) {
          t.l += e;
        }
        function Pe(t) {
          var e = A(t);
          return Ee(e, 0), e;
        }
        function Re(t, e, n) {
          if (t) {
            var i, r, o;
            Ee(t, t.l || 0);
            for (var a = t.length, s = 0, l = 0; t.l < a; ) {
              128 & (s = t.read_shift(1)) &&
                (s = (127 & s) + ((127 & t.read_shift(1)) << 7));
              var c = Al[s] || Al[65535];
              for (
                o = 127 & (i = t.read_shift(1)), r = 1;
                r < 4 && 128 & i;
                ++r
              )
                o += (127 & (i = t.read_shift(1))) << (7 * r);
              l = t.l + o;
              var d = (c.f || je)(t, o, n);
              if (((t.l = l), e(d, c.n, s))) return;
            }
          }
        }
        function Ie() {
          var t = [],
            e = M ? 256 : 2048,
            n = function (t) {
              var e = Pe(t);
              return Ee(e, 0), e;
            },
            i = n(e),
            r = function () {
              i &&
                (i.length > i.l && ((i = i.slice(0, i.l)).l = i.length),
                i.length > 0 && t.push(i),
                (i = null));
            },
            o = function (t) {
              return i && t < i.length - i.l
                ? i
                : (r(), (i = n(Math.max(t + 1, e))));
            };
          return {
            next: o,
            push: function (t) {
              r(), null == (i = t).l && (i.l = i.length), o(e);
            },
            end: function () {
              return r(), oe([t]);
            },
            _bufs: t,
          };
        }
        function We(t, e, n, i) {
          var r,
            o = +xl[e];
          if (!isNaN(o)) {
            i || (i = Al[o].p || (n || []).length || 0),
              (r = 1 + (o >= 128 ? 1 : 0) + 1),
              i >= 128 && ++r,
              i >= 16384 && ++r,
              i >= 2097152 && ++r;
            var a = t.next(r);
            o <= 127
              ? a.write_shift(1, o)
              : (a.write_shift(1, 128 + (127 & o)), a.write_shift(1, o >> 7));
            for (var s = 0; 4 != s; ++s) {
              if (!(i >= 128)) {
                a.write_shift(1, i);
                break;
              }
              a.write_shift(1, 128 + (127 & i)), (i >>= 7);
            }
            i > 0 && we(n) && t.push(n);
          }
        }
        function Ne(t, e, n) {
          var i = nt(t);
          if (
            (e.s
              ? (i.cRel && (i.c += e.s.c), i.rRel && (i.r += e.s.r))
              : (i.cRel && (i.c += e.c), i.rRel && (i.r += e.r)),
            !n || n.biff < 12)
          ) {
            for (; i.c >= 256; ) i.c -= 256;
            for (; i.r >= 65536; ) i.r -= 65536;
          }
          return i;
        }
        function Be(t, e, n) {
          var i = nt(t);
          return (i.s = Ne(i.s, e.s, n)), (i.e = Ne(i.e, e.s, n)), i;
        }
        function Fe(t, e) {
          t.cRel && t.c < 0 && ((t = nt(t)).c += e > 8 ? 16384 : 256),
            t.rRel &&
              t.r < 0 &&
              ((t = nt(t)).r += e > 8 ? 1048576 : e > 5 ? 65536 : 16384);
          var n = Ke(t);
          return (
            0 === t.cRel && (n = n.replace(/^([A-Z])/, "$$$1")),
            0 === t.rRel &&
              (n = (function (t) {
                return t.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
              })(n)),
            n
          );
        }
        function $e(t, e) {
          return 0 != t.s.r ||
            t.s.rRel ||
            t.e.r != (e.biff >= 12 ? 1048575 : e.biff >= 8 ? 65536 : 16384) ||
            t.e.rRel
            ? 0 != t.s.c ||
              t.s.cRel ||
              t.e.c != (e.biff >= 12 ? 65535 : 255) ||
              t.e.cRel
              ? Fe(t.s, e.biff) + ":" + Fe(t.e, e.biff)
              : (t.s.rRel ? "" : "$") +
                Ye(t.s.r) +
                ":" +
                (t.e.rRel ? "" : "$") +
                Ye(t.e.r)
            : (t.s.cRel ? "" : "$") +
                Xe(t.s.c) +
                ":" +
                (t.e.cRel ? "" : "$") +
                Xe(t.e.c);
        }
        function He(t) {
          return parseInt(t.replace(/\$(\d+)$/, "$1"), 10) - 1;
        }
        function Ye(t) {
          return "" + (t + 1);
        }
        function Ue(t) {
          for (
            var e = t.replace(/^\$([A-Z])/, "$1"), n = 0, i = 0;
            i !== e.length;
            ++i
          )
            n = 26 * n + e.charCodeAt(i) - 64;
          return n - 1;
        }
        function Xe(t) {
          var e = "";
          for (++t; t; t = Math.floor((t - 1) / 26))
            e = String.fromCharCode(((t - 1) % 26) + 65) + e;
          return e;
        }
        function Ve(t) {
          return t.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
        }
        function Ge(t) {
          var e = Ve(t);
          return { c: Ue(e[0]), r: He(e[1]) };
        }
        function Ke(t) {
          return Xe(t.c) + Ye(t.r);
        }
        function Ze(t) {
          var e = t.split(":").map(Ge);
          return { s: e[0], e: e[e.length - 1] };
        }
        function Je(t, e) {
          return void 0 === e || "number" == typeof e
            ? Je(t.s, t.e)
            : ("string" != typeof t && (t = Ke(t)),
              "string" != typeof e && (e = Ke(e)),
              t == e ? t : t + ":" + e);
        }
        function Qe(t) {
          var e = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
            n = 0,
            i = 0,
            r = 0,
            o = t.length;
          for (n = 0; i < o && !((r = t.charCodeAt(i) - 64) < 1 || r > 26); ++i)
            n = 26 * n + r;
          for (
            e.s.c = --n, n = 0;
            i < o && !((r = t.charCodeAt(i) - 48) < 0 || r > 9);
            ++i
          )
            n = 10 * n + r;
          if (((e.s.r = --n), i === o || 58 === t.charCodeAt(++i)))
            return (e.e.c = e.s.c), (e.e.r = e.s.r), e;
          for (
            n = 0;
            i != o && !((r = t.charCodeAt(i) - 64) < 1 || r > 26);
            ++i
          )
            n = 26 * n + r;
          for (
            e.e.c = --n, n = 0;
            i != o && !((r = t.charCodeAt(i) - 48) < 0 || r > 9);
            ++i
          )
            n = 10 * n + r;
          return (e.e.r = --n), e;
        }
        function tn(t, e, n) {
          return null == t || null == t.t || "z" == t.t
            ? ""
            : void 0 !== t.w
            ? t.w
            : ("d" == t.t && !t.z && n && n.dateNF && (t.z = n.dateNF),
              (function (t, e) {
                var n = "d" == t.t && e instanceof Date;
                if (null != t.z)
                  try {
                    return (t.w = q.format(t.z, n ? G(e) : e));
                  } catch (t) {}
                try {
                  return (t.w = q.format(
                    (t.XF || {}).numFmtId || (n ? 14 : 0),
                    n ? G(e) : e
                  ));
                } catch (t) {
                  return "" + e;
                }
              })(t, null == e ? t.v : e));
        }
        function en(t, e) {
          var n = e && e.sheet ? e.sheet : "Sheet1",
            i = {};
          return (i[n] = t), { SheetNames: [n], Sheets: i };
        }
        function nn(t, e, n) {
          var i = n || {},
            r = t ? Array.isArray(t) : i.dense,
            o = t || (r ? [] : {}),
            a = 0,
            s = 0;
          if (o && null != i.origin)
            if ("number" == typeof i.origin) a = i.origin;
            else {
              var l = "string" == typeof i.origin ? Ge(i.origin) : i.origin;
              (a = l.r), (s = l.c);
            }
          var c = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
          if (o["!ref"]) {
            var d = Qe(o["!ref"]);
            (c.s.c = d.s.c),
              (c.s.r = d.s.r),
              (c.e.c = Math.max(c.e.c, d.e.c)),
              (c.e.r = Math.max(c.e.r, d.e.r)),
              -1 == a && (c.e.r = a = d.e.r + 1);
          }
          for (var u = 0; u != e.length; ++u)
            if (e[u]) {
              if (!Array.isArray(e[u]))
                throw new Error("aoa_to_sheet expects an array of arrays");
              for (var p = 0; p != e[u].length; ++p)
                if (void 0 !== e[u][p]) {
                  var h = { v: e[u][p] },
                    f = a + u,
                    b = s + p;
                  if (
                    (c.s.r > f && (c.s.r = f),
                    c.s.c > b && (c.s.c = b),
                    c.e.r < f && (c.e.r = f),
                    c.e.c < b && (c.e.c = b),
                    !e[u][p] ||
                      "object" != typeof e[u][p] ||
                      Array.isArray(e[u][p]) ||
                      e[u][p] instanceof Date)
                  )
                    if (
                      (Array.isArray(h.v) &&
                        ((h.f = e[u][p][1]), (h.v = h.v[0])),
                      null === h.v)
                    )
                      if (h.f) h.t = "n";
                      else {
                        if (!i.sheetStubs) continue;
                        h.t = "z";
                      }
                    else
                      "number" == typeof h.v
                        ? (h.t = "n")
                        : "boolean" == typeof h.v
                        ? (h.t = "b")
                        : h.v instanceof Date
                        ? ((h.z = i.dateNF || q._table[14]),
                          i.cellDates
                            ? ((h.t = "d"), (h.w = q.format(h.z, G(h.v))))
                            : ((h.t = "n"),
                              (h.v = G(h.v)),
                              (h.w = q.format(h.z, h.v))))
                        : (h.t = "s");
                  else h = e[u][p];
                  r
                    ? (o[f] || (o[f] = []), (o[f][b] = h))
                    : (o[Ke({ c: b, r: f })] = h);
                }
            }
          return c.s.c < 1e7 && (o["!ref"] = Je(c)), o;
        }
        function rn(t, e) {
          return nn(null, t, e);
        }
        function on(t, e) {
          return e || (e = Pe(4)), e.write_shift(4, t), e;
        }
        function an(t) {
          var e = t.read_shift(4);
          return 0 === e ? "" : t.read_shift(e, "dbcs");
        }
        function sn(t, e) {
          var n = !1;
          return (
            null == e && ((n = !0), (e = Pe(4 + 2 * t.length))),
            e.write_shift(4, t.length),
            t.length > 0 && e.write_shift(0, t, "dbcs"),
            n ? e.slice(0, e.l) : e
          );
        }
        function ln(t) {
          return { ich: t.read_shift(2), ifnt: t.read_shift(2) };
        }
        function cn(t, e) {
          var n = t.l,
            i = t.read_shift(1),
            r = an(t),
            o = [],
            a = { t: r, h: r };
          if (0 != (1 & i)) {
            for (var s = t.read_shift(4), l = 0; l != s; ++l) o.push(ln(t));
            a.r = o;
          } else a.r = [{ ich: 0, ifnt: 0 }];
          return (t.l = n + e), a;
        }
        !(function (t, e) {
          var i;
          if (void 0 !== e) i = e;
          else
            try {
              i = n(750);
            } catch (t) {
              i = null;
            }
          (t.rc4 = function (t, e) {
            var n = new Array(256),
              i = 0,
              o = 0,
              a = 0,
              s = 0;
            for (o = 0; 256 != o; ++o) n[o] = o;
            for (o = 0; 256 != o; ++o)
              (a = (a + n[o] + t[o % t.length].charCodeAt(0)) & 255),
                (s = n[o]),
                (n[o] = n[a]),
                (n[a] = s);
            o = a = 0;
            var l = r(e.length);
            for (i = 0; i != e.length; ++i)
              (a = (a + n[(o = (o + 1) & 255)]) % 256),
                (s = n[o]),
                (n[o] = n[a]),
                (n[a] = s),
                (l[i] = e[i] ^ n[(n[o] + n[a]) & 255]);
            return l;
          }),
            (t.md5 = function (t) {
              if (!i) throw new Error("Unsupported crypto");
              return i.createHash("md5").update(t).digest("hex");
            });
        })({}, "undefined" != typeof crypto ? crypto : void 0);
        var dn = cn;
        function un(t) {
          var e = t.read_shift(4),
            n = t.read_shift(2);
          return (n += t.read_shift(1) << 16), t.l++, { c: e, iStyleRef: n };
        }
        function pn(t, e) {
          return (
            null == e && (e = Pe(8)),
            e.write_shift(-4, t.c),
            e.write_shift(3, t.iStyleRef || t.s),
            e.write_shift(1, 0),
            e
          );
        }
        var hn = an,
          fn = sn;
        function bn(t) {
          var e = t.read_shift(4);
          return 0 === e || 4294967295 === e ? "" : t.read_shift(e, "dbcs");
        }
        function mn(t, e) {
          var n = !1;
          return (
            null == e && ((n = !0), (e = Pe(127))),
            e.write_shift(4, t.length > 0 ? t.length : 4294967295),
            t.length > 0 && e.write_shift(0, t, "dbcs"),
            n ? e.slice(0, e.l) : e
          );
        }
        var gn = an,
          vn = bn,
          _n = mn;
        function yn(t) {
          var e = t.slice(t.l, t.l + 4),
            n = 1 & e[0],
            i = 2 & e[0];
          (t.l += 4), (e[0] &= 252);
          var r =
            0 === i
              ? _e([0, 0, 0, 0, e[0], e[1], e[2], e[3]], 0)
              : ke(e, 0) >> 2;
          return n ? r / 100 : r;
        }
        function Mn(t) {
          var e = { s: {}, e: {} };
          return (
            (e.s.r = t.read_shift(4)),
            (e.e.r = t.read_shift(4)),
            (e.s.c = t.read_shift(4)),
            (e.e.c = t.read_shift(4)),
            e
          );
        }
        var On = Mn,
          wn = function (t, e) {
            return (
              e || (e = Pe(16)),
              e.write_shift(4, t.s.r),
              e.write_shift(4, t.e.r),
              e.write_shift(4, t.s.c),
              e.write_shift(4, t.e.c),
              e
            );
          };
        function An(t) {
          return t.read_shift(8, "f");
        }
        function xn(t, e) {
          return (e || Pe(8)).write_shift(8, t, "f");
        }
        var zn = {
            0: "#NULL!",
            7: "#DIV/0!",
            15: "#VALUE!",
            23: "#REF!",
            29: "#NAME?",
            36: "#NUM!",
            42: "#N/A",
            43: "#GETTING_DATA",
            255: "#WTF?",
          },
          Cn = U(zn);
        function kn(t, e) {
          if ((e || (e = Pe(8)), !t || t.auto))
            return e.write_shift(4, 0), e.write_shift(4, 0), e;
          t.index
            ? (e.write_shift(1, 2), e.write_shift(1, t.index))
            : t.theme
            ? (e.write_shift(1, 6), e.write_shift(1, t.theme))
            : (e.write_shift(1, 5), e.write_shift(1, 0));
          var n = t.tint || 0;
          if (
            (n > 0 ? (n *= 32767) : n < 0 && (n *= 32768),
            e.write_shift(2, n),
            t.rgb)
          ) {
            var i = t.rgb || "FFFFFF";
            e.write_shift(1, parseInt(i.slice(0, 2), 16)),
              e.write_shift(1, parseInt(i.slice(2, 4), 16)),
              e.write_shift(1, parseInt(i.slice(4, 6), 16)),
              e.write_shift(1, 255);
          } else e.write_shift(2, 0), e.write_shift(1, 0), e.write_shift(1, 0);
          return e;
        }
        function Sn(t, e) {
          var n = t.read_shift(4);
          switch (n) {
            case 0:
              return "";
            case 4294967295:
            case 4294967294:
              return (
                { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }[
                  t.read_shift(4)
                ] || ""
              );
          }
          if (n > 400)
            throw new Error("Unsupported Clipboard: " + n.toString(16));
          return (t.l -= 4), t.read_shift(0, 1 == e ? "lpstr" : "lpwstr");
        }
        var Tn = [80, 81],
          Dn = {
            1: { n: "CodePage", t: 2 },
            2: { n: "Category", t: 80 },
            3: { n: "PresentationFormat", t: 80 },
            4: { n: "ByteCount", t: 3 },
            5: { n: "LineCount", t: 3 },
            6: { n: "ParagraphCount", t: 3 },
            7: { n: "SlideCount", t: 3 },
            8: { n: "NoteCount", t: 3 },
            9: { n: "HiddenCount", t: 3 },
            10: { n: "MultimediaClipCount", t: 3 },
            11: { n: "ScaleCrop", t: 11 },
            12: { n: "HeadingPairs", t: 4108 },
            13: { n: "TitlesOfParts", t: 4126 },
            14: { n: "Manager", t: 80 },
            15: { n: "Company", t: 80 },
            16: { n: "LinksUpToDate", t: 11 },
            17: { n: "CharacterCount", t: 3 },
            19: { n: "SharedDoc", t: 11 },
            22: { n: "HyperlinksChanged", t: 11 },
            23: { n: "AppVersion", t: 3, p: "version" },
            24: { n: "DigSig", t: 65 },
            26: { n: "ContentType", t: 80 },
            27: { n: "ContentStatus", t: 80 },
            28: { n: "Language", t: 80 },
            29: { n: "Version", t: 80 },
            255: {},
          },
          Ln = {
            1: { n: "CodePage", t: 2 },
            2: { n: "Title", t: 80 },
            3: { n: "Subject", t: 80 },
            4: { n: "Author", t: 80 },
            5: { n: "Keywords", t: 80 },
            6: { n: "Comments", t: 80 },
            7: { n: "Template", t: 80 },
            8: { n: "LastAuthor", t: 80 },
            9: { n: "RevNumber", t: 80 },
            10: { n: "EditTime", t: 64 },
            11: { n: "LastPrinted", t: 64 },
            12: { n: "CreatedDate", t: 64 },
            13: { n: "ModifiedDate", t: 64 },
            14: { n: "PageCount", t: 3 },
            15: { n: "WordCount", t: 3 },
            16: { n: "CharCount", t: 3 },
            17: { n: "Thumbnail", t: 71 },
            18: { n: "Application", t: 80 },
            19: { n: "DocSecurity", t: 3 },
            255: {},
          },
          qn = {
            2147483648: { n: "Locale", t: 19 },
            2147483651: { n: "Behavior", t: 19 },
            1919054434: {},
          };
        !(function () {
          for (var t in qn) qn.hasOwnProperty(t) && (Dn[t] = Ln[t] = qn[t]);
        })();
        var En,
          jn = H(Dn, "n"),
          Pn = H(Ln, "n"),
          Rn = {
            1: "US",
            2: "CA",
            3: "",
            7: "RU",
            20: "EG",
            30: "GR",
            31: "NL",
            32: "BE",
            33: "FR",
            34: "ES",
            36: "HU",
            39: "IT",
            41: "CH",
            43: "AT",
            44: "GB",
            45: "DK",
            46: "SE",
            47: "NO",
            48: "PL",
            49: "DE",
            52: "MX",
            55: "BR",
            61: "AU",
            64: "NZ",
            66: "TH",
            81: "JP",
            82: "KR",
            84: "VN",
            86: "CN",
            90: "TR",
            105: "JS",
            213: "DZ",
            216: "MA",
            218: "LY",
            351: "PT",
            354: "IS",
            358: "FI",
            420: "CZ",
            886: "TW",
            961: "LB",
            962: "JO",
            963: "SY",
            964: "IQ",
            965: "KW",
            966: "SA",
            971: "AE",
            972: "IL",
            974: "QA",
            981: "IR",
            65535: "US",
          },
          In = [
            null,
            "solid",
            "mediumGray",
            "darkGray",
            "lightGray",
            "darkHorizontal",
            "darkVertical",
            "darkDown",
            "darkUp",
            "darkGrid",
            "darkTrellis",
            "lightHorizontal",
            "lightVertical",
            "lightDown",
            "lightUp",
            "lightGrid",
            "lightTrellis",
            "gray125",
            "gray0625",
          ],
          Wn = [
            0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0,
            16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608,
            32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431,
            10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823,
            128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479,
            13434879, 13434828, 16777113, 10079487, 16751052, 13408767,
            16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792,
            6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064,
            10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ].map(function (t) {
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          }),
          Nn = {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
              "workbooks",
            "application/vnd.ms-excel.binIndexWs": "TODO",
            "application/vnd.ms-excel.intlmacrosheet": "TODO",
            "application/vnd.ms-excel.binIndexMs": "TODO",
            "application/vnd.openxmlformats-package.core-properties+xml":
              "coreprops",
            "application/vnd.openxmlformats-officedocument.custom-properties+xml":
              "custprops",
            "application/vnd.openxmlformats-officedocument.extended-properties+xml":
              "extprops",
            "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
              "TODO",
            "application/vnd.ms-excel.pivotTable": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
              "TODO",
            "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
            "application/vnd.ms-office.chartstyle+xml": "TODO",
            "application/vnd.ms-excel.calcChain": "calcchains",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
              "calcchains",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
              "TODO",
            "application/vnd.ms-office.activeX": "TODO",
            "application/vnd.ms-office.activeX+xml": "TODO",
            "application/vnd.ms-excel.attachedToolbars": "TODO",
            "application/vnd.ms-excel.connections": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
              "TODO",
            "application/vnd.ms-excel.externalLink": "links",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
              "links",
            "application/vnd.ms-excel.sheetMetadata": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
              "TODO",
            "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
            "application/vnd.ms-excel.pivotCacheRecords": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
              "TODO",
            "application/vnd.ms-excel.queryTable": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
              "TODO",
            "application/vnd.ms-excel.userNames": "TODO",
            "application/vnd.ms-excel.revisionHeaders": "TODO",
            "application/vnd.ms-excel.revisionLog": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
              "TODO",
            "application/vnd.ms-excel.tableSingleCells": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
              "TODO",
            "application/vnd.ms-excel.slicer": "TODO",
            "application/vnd.ms-excel.slicerCache": "TODO",
            "application/vnd.ms-excel.slicer+xml": "TODO",
            "application/vnd.ms-excel.slicerCache+xml": "TODO",
            "application/vnd.ms-excel.wsSortMap": "TODO",
            "application/vnd.ms-excel.table": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
            "application/vnd.openxmlformats-officedocument.themeOverride+xml":
              "TODO",
            "application/vnd.ms-excel.Timeline+xml": "TODO",
            "application/vnd.ms-excel.TimelineCache+xml": "TODO",
            "application/vnd.ms-office.vbaProject": "vba",
            "application/vnd.ms-office.vbaProjectSignature": "vba",
            "application/vnd.ms-office.volatileDependencies": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
              "TODO",
            "application/vnd.ms-excel.controlproperties+xml": "TODO",
            "application/vnd.openxmlformats-officedocument.model+data": "TODO",
            "application/vnd.ms-excel.Survey+xml": "TODO",
            "application/vnd.openxmlformats-officedocument.drawing+xml":
              "drawings",
            "application/vnd.openxmlformats-officedocument.drawingml.chart+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
            "application/vnd.openxmlformats-package.relationships+xml": "rels",
            "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
            "image/png": "TODO",
            sheet: "js",
          },
          Bn =
            ($(
              (En = {
                workbooks: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
                  xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
                  xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                  xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
                  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
                },
                strs: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
                  xlsb: "application/vnd.ms-excel.sharedStrings",
                },
                comments: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
                  xlsb: "application/vnd.ms-excel.comments",
                },
                sheets: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
                  xlsb: "application/vnd.ms-excel.worksheet",
                },
                charts: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
                  xlsb: "application/vnd.ms-excel.chartsheet",
                },
                dialogs: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
                  xlsb: "application/vnd.ms-excel.dialogsheet",
                },
                macros: {
                  xlsx: "application/vnd.ms-excel.macrosheet+xml",
                  xlsb: "application/vnd.ms-excel.macrosheet",
                },
                styles: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
                  xlsb: "application/vnd.ms-excel.styles",
                },
              })
            ).forEach(function (t) {
              ["xlsm", "xlam"].forEach(function (e) {
                En[t][e] || (En[t][e] = En[t].xlsx);
              });
            }),
            $(En).forEach(function (t) {
              $(En[t]).forEach(function (e) {
                Nn[En[t][e]] = t;
              });
            }),
            En),
          Fn = (function (t) {
            for (var e = [], n = $(t), i = 0; i !== n.length; ++i)
              null == e[t[n[i]]] && (e[t[n[i]]] = []), e[t[n[i]]].push(n[i]);
            return e;
          })(Nn);
        ee.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
        var $n = Zt("Types", null, {
            xmlns: ee.CT,
            "xmlns:xsd": ee.xsd,
            "xmlns:xsi": ee.xsi,
          }),
          Hn = [
            ["xml", "application/xml"],
            ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
            ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
            ["bmp", "image/bmp"],
            ["png", "image/png"],
            ["gif", "image/gif"],
            ["emf", "image/x-emf"],
            ["wmf", "image/x-wmf"],
            ["jpg", "image/jpeg"],
            ["jpeg", "image/jpeg"],
            ["tif", "image/tiff"],
            ["tiff", "image/tiff"],
            ["pdf", "application/pdf"],
            ["rels", Fn.rels[0]],
          ].map(function (t) {
            return Zt("Default", null, { Extension: t[0], ContentType: t[1] });
          }),
          Yn = {
            WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
            SHEET:
              "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
            HLINK:
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
            VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
            VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
          };
        function Un(t) {
          var e = t.lastIndexOf("/");
          return t.slice(0, e + 1) + "_rels/" + t.slice(e + 1) + ".rels";
        }
        function Xn(t, e) {
          if (!t) return t;
          "/" !== e.charAt(0) && (e = "/" + e);
          var n = {},
            i = {};
          return (
            (t.match(mt) || []).forEach(function (t) {
              var r = _t(t);
              if ("<Relationship" === r[0]) {
                var o = {};
                (o.Type = r.Type),
                  (o.Target = r.Target),
                  (o.Id = r.Id),
                  (o.TargetMode = r.TargetMode);
                var a =
                  "External" === r.TargetMode ? r.Target : ht(r.Target, e);
                (n[a] = o), (i[r.Id] = o);
              }
            }),
            (n["!id"] = i),
            n
          );
        }
        ee.RELS =
          "http://schemas.openxmlformats.org/package/2006/relationships";
        var Vn = Zt("Relationships", null, { xmlns: ee.RELS });
        function Gn(t) {
          var e = [ft, Vn];
          return (
            $(t["!id"]).forEach(function (n) {
              e[e.length] = Zt("Relationship", null, t["!id"][n]);
            }),
            e.length > 2 &&
              ((e[e.length] = "</Relationships>"),
              (e[1] = e[1].replace("/>", ">"))),
            e.join("")
          );
        }
        function Kn(t, e, n, i, r) {
          if ((r || (r = {}), t["!id"] || (t["!id"] = {}), e < 0))
            for (e = 1; t["!id"]["rId" + e]; ++e);
          if (
            ((r.Id = "rId" + e),
            (r.Type = i),
            (r.Target = n),
            r.Type == Yn.HLINK && (r.TargetMode = "External"),
            t["!id"][r.Id])
          )
            throw new Error("Cannot rewrite rId " + e);
          return (
            (t["!id"][r.Id] = r),
            (t[("/" + r.Target).replace("//", "/")] = r),
            e
          );
        }
        function Zn(t, e, n) {
          return [
            '  <rdf:Description rdf:about="' + t + '">\n',
            '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
              (n || "odf") +
              "#" +
              e +
              '"/>\n',
            "  </rdf:Description>\n",
          ].join("");
        }
        var Jn,
          Qn =
            ((Jn =
              '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
              e.version +
              "</meta:generator></office:meta></office:document-meta>"),
            function () {
              return Jn;
            }),
          ti = [
            ["cp:category", "Category"],
            ["cp:contentStatus", "ContentStatus"],
            ["cp:keywords", "Keywords"],
            ["cp:lastModifiedBy", "LastAuthor"],
            ["cp:lastPrinted", "LastPrinted"],
            ["cp:revision", "RevNumber"],
            ["cp:version", "Version"],
            ["dc:creator", "Author"],
            ["dc:description", "Comments"],
            ["dc:identifier", "Identifier"],
            ["dc:language", "Language"],
            ["dc:subject", "Subject"],
            ["dc:title", "Title"],
            ["dcterms:created", "CreatedDate", "date"],
            ["dcterms:modified", "ModifiedDate", "date"],
          ];
        (ee.CORE_PROPS =
          "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"),
          (Yn.CORE_PROPS =
            "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties");
        var ei = (function () {
          for (var t = new Array(ti.length), e = 0; e < ti.length; ++e) {
            var n = ti[e],
              i =
                "(?:" +
                n[0].slice(0, n[0].indexOf(":")) +
                ":)" +
                n[0].slice(n[0].indexOf(":") + 1);
            t[e] = new RegExp("<" + i + "[^>]*>([\\s\\S]*?)</" + i + ">");
          }
          return t;
        })();
        function ni(t) {
          var e = {};
          t = Et(t);
          for (var n = 0; n < ti.length; ++n) {
            var i = ti[n],
              r = t.match(ei[n]);
            null != r && r.length > 0 && (e[i[1]] = r[1]),
              "date" === i[2] && e[i[1]] && (e[i[1]] = tt(e[i[1]]));
          }
          return e;
        }
        var ii = Zt("cp:coreProperties", null, {
          "xmlns:cp": ee.CORE_PROPS,
          "xmlns:dc": ee.dc,
          "xmlns:dcterms": ee.dcterms,
          "xmlns:dcmitype": ee.dcmitype,
          "xmlns:xsi": ee.xsi,
        });
        function ri(t, e, n, i, r) {
          null == r[t] &&
            null != e &&
            "" !== e &&
            ((r[t] = e), (i[i.length] = n ? Zt(t, e, n) : Gt(t, e)));
        }
        var oi = [
          ["Application", "Application", "string"],
          ["AppVersion", "AppVersion", "string"],
          ["Company", "Company", "string"],
          ["DocSecurity", "DocSecurity", "string"],
          ["Manager", "Manager", "string"],
          ["HyperlinksChanged", "HyperlinksChanged", "bool"],
          ["SharedDoc", "SharedDoc", "bool"],
          ["LinksUpToDate", "LinksUpToDate", "bool"],
          ["ScaleCrop", "ScaleCrop", "bool"],
          ["HeadingPairs", "HeadingPairs", "raw"],
          ["TitlesOfParts", "TitlesOfParts", "raw"],
        ];
        function ai(t, e, n, i) {
          var r = [];
          if ("string" == typeof t) r = Xt(t, i);
          else
            for (var o = 0; o < t.length; ++o)
              r = r.concat(
                t[o].map(function (t) {
                  return { v: t };
                })
              );
          var a =
              "string" == typeof e
                ? Xt(e, i).map(function (t) {
                    return t.v;
                  })
                : e,
            s = 0,
            l = 0;
          if (a.length > 0)
            for (var c = 0; c !== r.length; c += 2) {
              switch (((l = +r[c + 1].v), r[c].v)) {
                case "Worksheets":
                case "工作表":
                case "Листы":
                case "أوراق العمل":
                case "ワークシート":
                case "גליונות עבודה":
                case "Arbeitsblätter":
                case "Çalışma Sayfaları":
                case "Feuilles de calcul":
                case "Fogli di lavoro":
                case "Folhas de cálculo":
                case "Planilhas":
                case "Regneark":
                case "Werkbladen":
                  (n.Worksheets = l), (n.SheetNames = a.slice(s, s + l));
                  break;
                case "Named Ranges":
                case "名前付き一覧":
                case "Benannte Bereiche":
                case "Navngivne områder":
                  (n.NamedRanges = l), (n.DefinedNames = a.slice(s, s + l));
                  break;
                case "Charts":
                case "Diagramme":
                  (n.Chartsheets = l), (n.ChartNames = a.slice(s, s + l));
              }
              s += l;
            }
        }
        (ee.EXT_PROPS =
          "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"),
          (Yn.EXT_PROPS =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties");
        var si = Zt("Properties", null, {
          xmlns: ee.EXT_PROPS,
          "xmlns:vt": ee.vt,
        });
        (ee.CUST_PROPS =
          "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties"),
          (Yn.CUST_PROPS =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties");
        var li = /<[^>]+>[^<]*/g,
          ci = Zt("Properties", null, {
            xmlns: ee.CUST_PROPS,
            "xmlns:vt": ee.vt,
          }),
          di = {
            Title: "Title",
            Subject: "Subject",
            Author: "Author",
            Keywords: "Keywords",
            Comments: "Description",
            LastAuthor: "LastAuthor",
            RevNumber: "Revision",
            Application: "AppName",
            LastPrinted: "LastPrinted",
            CreatedDate: "Created",
            ModifiedDate: "LastSaved",
            Category: "Category",
            Manager: "Manager",
            Company: "Company",
            AppVersion: "Version",
            ContentStatus: "ContentStatus",
            Identifier: "Identifier",
            Language: "Language",
          },
          ui = Y(di);
        function pi(t, e, n) {
          t[(e = ui[e] || e)] = n;
        }
        function hi(t) {
          var e = t.read_shift(4),
            n = t.read_shift(4);
          return new Date(
            1e3 * ((n / 1e7) * Math.pow(2, 32) + e / 1e7 - 11644473600)
          )
            .toISOString()
            .replace(/\.000/, "");
        }
        function fi(t, e, n) {
          var i = t.l,
            r = t.read_shift(0, "lpstr-cp");
          if (n) for (; (t.l - i) & 3; ) ++t.l;
          return r;
        }
        function bi(t, e, n) {
          var i = t.read_shift(0, "lpwstr");
          return n && (t.l += (4 - ((i.length + 1) & 3)) & 3), i;
        }
        function mi(t, e, n) {
          return 31 === e ? bi(t) : fi(t, 0, n);
        }
        function gi(t, e, n) {
          return mi(t, e, !1 === n ? 0 : 4);
        }
        function vi(t) {
          return [Mi(t, 81), Mi(t, 3)];
        }
        function _i(t, e) {
          for (var n = t.read_shift(4), i = {}, r = 0; r != n; ++r) {
            var o = t.read_shift(4),
              a = t.read_shift(4);
            (i[o] = t
              .read_shift(a, 1200 === e ? "utf16le" : "utf8")
              .replace(D, "")
              .replace(L, "!")),
              1200 === e && a % 2 && (t.l += 2);
          }
          return 3 & t.l && (t.l = (t.l >> 3) << 2), i;
        }
        function yi(t) {
          var e = t.read_shift(4),
            n = t.slice(t.l, t.l + e);
          return (t.l += e), (3 & e) > 0 && (t.l += (4 - (3 & e)) & 3), n;
        }
        function Mi(t, e, n) {
          var i,
            r = t.read_shift(2),
            o = n || {};
          if (((t.l += 2), 12 !== e && r !== e && -1 === Tn.indexOf(e)))
            throw new Error("Expected type " + e + " saw " + r);
          switch (12 === e ? r : e) {
            case 2:
              return (i = t.read_shift(2, "i")), o.raw || (t.l += 2), i;
            case 3:
              return (i = t.read_shift(4, "i"));
            case 11:
              return 0 !== t.read_shift(4);
            case 19:
              return (i = t.read_shift(4));
            case 30:
              return fi(t, 0, 4).replace(D, "");
            case 31:
              return bi(t);
            case 64:
              return hi(t);
            case 65:
              return yi(t);
            case 71:
              return (function (t) {
                var e = {};
                return (
                  (e.Size = t.read_shift(4)),
                  (t.l += e.Size + 3 - ((e.Size - 1) % 4)),
                  e
                );
              })(t);
            case 80:
              return gi(t, r, !o.raw).replace(D, "");
            case 81:
              return (function (t, e) {
                if (!e)
                  throw new Error(
                    "VtUnalignedString must have positive length"
                  );
                return mi(t, e, 0);
              })(t, r).replace(D, "");
            case 4108:
              return (function (t) {
                return (function (t) {
                  for (var e = t.read_shift(4), n = [], i = 0; i != e / 2; ++i)
                    n.push(vi(t));
                  return n;
                })(t);
              })(t);
            case 4126:
              return (function (t) {
                return (function (t) {
                  for (var e = t.read_shift(4), n = [], i = 0; i != e; ++i)
                    n[i] = t.read_shift(0, "lpstr-cp").replace(D, "");
                  return n;
                })(t);
              })(t);
            default:
              throw new Error(
                "TypedPropertyValue unrecognized type " + e + " " + r
              );
          }
        }
        function Oi(t, e) {
          var n = Pe(4),
            i = Pe(4);
          switch ((n.write_shift(4, 80 == t ? 31 : t), t)) {
            case 3:
              i.write_shift(-4, e);
              break;
            case 5:
              (i = Pe(8)).write_shift(8, e, "f");
              break;
            case 11:
              i.write_shift(4, e ? 1 : 0);
              break;
            case 64:
              i = (function (t) {
                var e =
                    ("string" == typeof t
                      ? new Date(Date.parse(t))
                      : t
                    ).getTime() /
                      1e3 +
                    11644473600,
                  n = e % Math.pow(2, 32),
                  i = (e - n) / Math.pow(2, 32);
                i *= 1e7;
                var r = ((n *= 1e7) / Math.pow(2, 32)) | 0;
                r > 0 && ((n %= Math.pow(2, 32)), (i += r));
                var o = Pe(8);
                return o.write_shift(4, n), o.write_shift(4, i), o;
              })(e);
              break;
            case 31:
            case 80:
              for (
                (i = Pe(
                  4 + 2 * (e.length + 1) + (e.length % 2 ? 0 : 2)
                )).write_shift(4, e.length + 1),
                  i.write_shift(0, e, "dbcs");
                i.l != i.length;

              )
                i.write_shift(1, 0);
              break;
            default:
              throw new Error(
                "TypedPropertyValue unrecognized type " + t + " " + e
              );
          }
          return T([n, i]);
        }
        function wi(t, e) {
          var n = t.l,
            i = t.read_shift(4),
            r = t.read_shift(4),
            o = [],
            a = 0,
            s = 0,
            l = -1,
            c = {};
          for (a = 0; a != r; ++a) {
            var d = t.read_shift(4),
              u = t.read_shift(4);
            o[a] = [d, u + n];
          }
          o.sort(function (t, e) {
            return t[1] - e[1];
          });
          var p = {};
          for (a = 0; a != r; ++a) {
            if (t.l !== o[a][1]) {
              var f = !0;
              if (a > 0 && e)
                switch (e[o[a - 1][0]].t) {
                  case 2:
                    t.l + 2 === o[a][1] && ((t.l += 2), (f = !1));
                    break;
                  case 80:
                  case 4108:
                    t.l <= o[a][1] && ((t.l = o[a][1]), (f = !1));
                }
              if (
                ((!e || 0 == a) &&
                  t.l <= o[a][1] &&
                  ((f = !1), (t.l = o[a][1])),
                f)
              )
                throw new Error(
                  "Read Error: Expected address " +
                    o[a][1] +
                    " at " +
                    t.l +
                    " :" +
                    a
                );
            }
            if (e) {
              var b = e[o[a][0]];
              if (
                ((p[b.n] = Mi(t, b.t, { raw: !0 })),
                "version" === b.p &&
                  (p[b.n] =
                    String(p[b.n] >> 16) +
                    "." +
                    ("0000" + String(65535 & p[b.n])).slice(-4)),
                "CodePage" == b.n)
              )
                switch (p[b.n]) {
                  case 0:
                    p[b.n] = 1252;
                  case 874:
                  case 932:
                  case 936:
                  case 949:
                  case 950:
                  case 1250:
                  case 1251:
                  case 1253:
                  case 1254:
                  case 1255:
                  case 1256:
                  case 1257:
                  case 1258:
                  case 1e4:
                  case 1200:
                  case 1201:
                  case 1252:
                  case 65e3:
                  case -536:
                  case 65001:
                  case -535:
                    h((s = (p[b.n] >>> 0) & 65535));
                    break;
                  default:
                    throw new Error("Unsupported CodePage: " + p[b.n]);
                }
            } else if (1 === o[a][0]) {
              if (((s = p.CodePage = Mi(t, 2)), h(s), -1 !== l)) {
                var m = t.l;
                (t.l = o[l][1]), (c = _i(t, s)), (t.l = m);
              }
            } else if (0 === o[a][0]) {
              if (0 === s) {
                (l = a), (t.l = o[a + 1][1]);
                continue;
              }
              c = _i(t, s);
            } else {
              var g,
                v = c[o[a][0]];
              switch (t[t.l]) {
                case 65:
                  (t.l += 4), (g = yi(t));
                  break;
                case 30:
                case 31:
                  (t.l += 4), (g = gi(t, t[t.l - 4]).replace(/\u0000+$/, ""));
                  break;
                case 3:
                  (t.l += 4), (g = t.read_shift(4, "i"));
                  break;
                case 19:
                  (t.l += 4), (g = t.read_shift(4));
                  break;
                case 5:
                  (t.l += 4), (g = t.read_shift(8, "f"));
                  break;
                case 11:
                  (t.l += 4), (g = Ti(t, 4));
                  break;
                case 64:
                  (t.l += 4), (g = tt(hi(t)));
                  break;
                default:
                  throw new Error("unparsed value: " + t[t.l]);
              }
              p[v] = g;
            }
          }
          return (t.l = n + i), p;
        }
        var Ai = [
          "CodePage",
          "Thumbnail",
          "_PID_LINKBASE",
          "_PID_HLINKS",
          "SystemIdentifier",
          "FMTID",
        ].concat([
          "Worksheets",
          "SheetNames",
          "NamedRanges",
          "DefinedNames",
          "Chartsheets",
          "ChartNames",
        ]);
        function xi(t) {
          switch (typeof t) {
            case "boolean":
              return 11;
            case "number":
              return (0 | t) == t ? 3 : 5;
            case "string":
              return 31;
            case "object":
              if (t instanceof Date) return 64;
          }
          return -1;
        }
        function zi(t, e, n) {
          var i = Pe(8),
            r = [],
            o = [],
            a = 8,
            s = 0,
            l = Pe(8),
            c = Pe(8);
          if (
            (l.write_shift(4, 2),
            l.write_shift(4, 1200),
            c.write_shift(4, 1),
            o.push(l),
            r.push(c),
            (a += 8 + l.length),
            !e)
          ) {
            (c = Pe(8)).write_shift(4, 0), r.unshift(c);
            var d = [Pe(4)];
            for (d[0].write_shift(4, t.length), s = 0; s < t.length; ++s) {
              var u = t[s][0];
              for (
                (l = Pe(
                  8 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)
                )).write_shift(4, s + 2),
                  l.write_shift(4, u.length + 1),
                  l.write_shift(0, u, "dbcs");
                l.l != l.length;

              )
                l.write_shift(1, 0);
              d.push(l);
            }
            (l = T(d)), o.unshift(l), (a += 8 + l.length);
          }
          for (s = 0; s < t.length; ++s)
            if (
              (!e || e[t[s][0]]) &&
              !(Ai.indexOf(t[s][0]) > -1) &&
              null != t[s][1]
            ) {
              var p = t[s][1],
                h = 0;
              if (e) {
                var f = n[(h = +e[t[s][0]])];
                if ("version" == f.p && "string" == typeof p) {
                  var b = p.split(".");
                  p = (+b[0] << 16) + (+b[1] || 0);
                }
                l = Oi(f.t, p);
              } else {
                var m = xi(p);
                -1 == m && ((m = 31), (p = String(p))), (l = Oi(m, p));
              }
              o.push(l),
                (c = Pe(8)).write_shift(4, e ? h : 2 + s),
                r.push(c),
                (a += 8 + l.length);
            }
          var g = 8 * (o.length + 1);
          for (s = 0; s < o.length; ++s)
            r[s].write_shift(4, g), (g += o[s].length);
          return (
            i.write_shift(4, a),
            i.write_shift(4, o.length),
            T([i].concat(r).concat(o))
          );
        }
        function Ci(t, e, n) {
          var i = t.content;
          if (!i) return {};
          Ee(i, 0);
          var r,
            o,
            a,
            s,
            l = 0;
          i.chk("feff", "Byte Order: "), i.read_shift(2);
          var c = i.read_shift(4),
            d = i.read_shift(16);
          if (d !== N.utils.consts.HEADER_CLSID && d !== n)
            throw new Error("Bad PropertySet CLSID " + d);
          if (1 !== (r = i.read_shift(4)) && 2 !== r)
            throw new Error("Unrecognized #Sets: " + r);
          if (
            ((o = i.read_shift(16)),
            (s = i.read_shift(4)),
            1 === r && s !== i.l)
          )
            throw new Error("Length mismatch: " + s + " !== " + i.l);
          2 === r && ((a = i.read_shift(16)), (l = i.read_shift(4)));
          var u,
            p = wi(i, e),
            h = { SystemIdentifier: c };
          for (var f in p) h[f] = p[f];
          if (((h.FMTID = o), 1 === r)) return h;
          if ((l - i.l == 2 && (i.l += 2), i.l !== l))
            throw new Error("Length mismatch 2: " + i.l + " !== " + l);
          try {
            u = wi(i, null);
          } catch (t) {}
          for (f in u) h[f] = u[f];
          return (h.FMTID = [o, a]), h;
        }
        function ki(t, e, n, i, r, o) {
          var a = Pe(r ? 68 : 48),
            s = [a];
          a.write_shift(2, 65534),
            a.write_shift(2, 0),
            a.write_shift(4, 842412599),
            a.write_shift(16, N.utils.consts.HEADER_CLSID, "hex"),
            a.write_shift(4, r ? 2 : 1),
            a.write_shift(16, e, "hex"),
            a.write_shift(4, r ? 68 : 48);
          var l = zi(t, n, i);
          if ((s.push(l), r)) {
            var c = zi(r, null, null);
            a.write_shift(16, o, "hex"),
              a.write_shift(4, 68 + l.length),
              s.push(c);
          }
          return T(s);
        }
        function Si(t, e) {
          return t.read_shift(e), null;
        }
        function Ti(t, e) {
          return 1 === t.read_shift(e);
        }
        function Di(t, e) {
          return e || (e = Pe(2)), e.write_shift(2, +!!t), e;
        }
        function Li(t) {
          return t.read_shift(2, "u");
        }
        function qi(t, e) {
          return e || (e = Pe(2)), e.write_shift(2, t), e;
        }
        function Ei(t, e) {
          return (function (t, e, n) {
            for (var i = [], r = t.l + e; t.l < r; ) i.push(n(t, r - t.l));
            if (r !== t.l) throw new Error("Slurp error");
            return i;
          })(t, e, Li);
        }
        function ji(t, e, n) {
          var i = t.read_shift(n && n.biff >= 12 ? 2 : 1),
            r = "sbcs-cont",
            o = s;
          n && n.biff >= 8 && (s = 1200),
            n && 8 != n.biff
              ? 12 == n.biff && (r = "wstr")
              : t.read_shift(1) && (r = "dbcs-cont"),
            n.biff >= 2 && n.biff <= 5 && (r = "cpstr");
          var a = i ? t.read_shift(i, r) : "";
          return (s = o), a;
        }
        function Pi(t) {
          var e = s;
          s = 1200;
          var n,
            i = t.read_shift(2),
            r = t.read_shift(1),
            o = 4 & r,
            a = 8 & r,
            l = 1 + (1 & r),
            c = 0,
            d = {};
          a && (c = t.read_shift(2)), o && (n = t.read_shift(4));
          var u = 2 == l ? "dbcs-cont" : "sbcs-cont",
            p = 0 === i ? "" : t.read_shift(i, u);
          return (
            a && (t.l += 4 * c),
            o && (t.l += n),
            (d.t = p),
            a || ((d.raw = "<t>" + d.t + "</t>"), (d.r = d.t)),
            (s = e),
            d
          );
        }
        function Ri(t, e, n) {
          if (n) {
            if (n.biff >= 2 && n.biff <= 5) return t.read_shift(e, "cpstr");
            if (n.biff >= 12) return t.read_shift(e, "dbcs-cont");
          }
          return 0 === t.read_shift(1)
            ? t.read_shift(e, "sbcs-cont")
            : t.read_shift(e, "dbcs-cont");
        }
        function Ii(t, e, n) {
          var i = t.read_shift(n && 2 == n.biff ? 1 : 2);
          return 0 === i ? (t.l++, "") : Ri(t, i, n);
        }
        function Wi(t, e, n) {
          if (n.biff > 5) return Ii(t, 0, n);
          var i = t.read_shift(1);
          return 0 === i
            ? (t.l++, "")
            : t.read_shift(i, n.biff <= 4 || !t.lens ? "cpstr" : "sbcs-cont");
        }
        function Ni(t, e, n) {
          return (
            n || (n = Pe(3 + 2 * t.length)),
            n.write_shift(2, t.length),
            n.write_shift(1, 1),
            n.write_shift(31, t, "utf16le"),
            n
          );
        }
        function Bi(t) {
          var e = t.read_shift(4);
          return e > 0 ? t.read_shift(e, "utf16le").replace(D, "") : "";
        }
        function Fi(t) {
          var e = Pe(512),
            n = 0,
            i = t.Target,
            r = i.indexOf("#") > -1 ? 31 : 23;
          switch (i.charAt(0)) {
            case "#":
              r = 28;
              break;
            case ".":
              r &= -3;
          }
          e.write_shift(4, 2), e.write_shift(4, r);
          var o = [8, 6815827, 6619237, 4849780, 83];
          for (n = 0; n < o.length; ++n) e.write_shift(4, o[n]);
          if (28 == r) {
            for (
              i = i.slice(1), e.write_shift(4, i.length + 1), n = 0;
              n < i.length;
              ++n
            )
              e.write_shift(2, i.charCodeAt(n));
            e.write_shift(2, 0);
          } else if (2 & r) {
            for (
              o = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),
                n = 0;
              n < o.length;
              ++n
            )
              e.write_shift(1, parseInt(o[n], 16));
            for (e.write_shift(4, 2 * (i.length + 1)), n = 0; n < i.length; ++n)
              e.write_shift(2, i.charCodeAt(n));
            e.write_shift(2, 0);
          } else {
            for (
              o = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "),
                n = 0;
              n < o.length;
              ++n
            )
              e.write_shift(1, parseInt(o[n], 16));
            for (
              var a = 0;
              "../" == i.slice(3 * a, 3 * a + 3) ||
              "..\\" == i.slice(3 * a, 3 * a + 3);

            )
              ++a;
            for (
              e.write_shift(2, a), e.write_shift(4, i.length + 1), n = 0;
              n < i.length;
              ++n
            )
              e.write_shift(1, 255 & i.charCodeAt(n));
            for (
              e.write_shift(1, 0),
                e.write_shift(2, 65535),
                e.write_shift(2, 57005),
                n = 0;
              n < 6;
              ++n
            )
              e.write_shift(4, 0);
          }
          return e.slice(0, e.l);
        }
        function $i(t) {
          return [
            t.read_shift(1),
            t.read_shift(1),
            t.read_shift(1),
            t.read_shift(1),
          ];
        }
        function Hi(t, e) {
          var n = $i(t);
          return (n[3] = 0), n;
        }
        function Yi(t) {
          return {
            r: t.read_shift(2),
            c: t.read_shift(2),
            ixfe: t.read_shift(2),
          };
        }
        function Ui(t, e, n, i) {
          return (
            i || (i = Pe(6)),
            i.write_shift(2, t),
            i.write_shift(2, e),
            i.write_shift(2, n || 0),
            i
          );
        }
        function Xi(t, e, n) {
          var i = n.biff > 8 ? 4 : 2;
          return [t.read_shift(i), t.read_shift(i, "i"), t.read_shift(i, "i")];
        }
        function Vi(t) {
          return [t.read_shift(2), yn(t)];
        }
        function Gi(t) {
          var e = t.read_shift(2),
            n = t.read_shift(2);
          return {
            s: { c: t.read_shift(2), r: e },
            e: { c: t.read_shift(2), r: n },
          };
        }
        function Ki(t, e) {
          return (
            e || (e = Pe(8)),
            e.write_shift(2, t.s.r),
            e.write_shift(2, t.e.r),
            e.write_shift(2, t.s.c),
            e.write_shift(2, t.e.c),
            e
          );
        }
        function Zi(t) {
          var e = t.read_shift(2),
            n = t.read_shift(2);
          return {
            s: { c: t.read_shift(1), r: e },
            e: { c: t.read_shift(1), r: n },
          };
        }
        var Ji = Zi;
        function Qi(t) {
          t.l += 4;
          var e = t.read_shift(2),
            n = t.read_shift(2),
            i = t.read_shift(2);
          return (t.l += 12), [n, e, i];
        }
        function tr(t) {
          (t.l += 2), (t.l += t.read_shift(2));
        }
        var er = {
          0: tr,
          4: tr,
          5: tr,
          6: tr,
          7: function (t) {
            return (t.l += 4), (t.cf = t.read_shift(2)), {};
          },
          8: tr,
          9: tr,
          10: tr,
          11: tr,
          12: tr,
          13: function (t) {
            var e = {};
            return (
              (t.l += 4),
              (t.l += 16),
              (e.fSharedNote = t.read_shift(2)),
              (t.l += 4),
              e
            );
          },
          14: tr,
          15: tr,
          16: tr,
          17: tr,
          18: tr,
          19: tr,
          20: tr,
          21: Qi,
        };
        function nr(t, e) {
          var n = { BIFFVer: 0, dt: 0 };
          switch (
            ((n.BIFFVer = t.read_shift(2)),
            (e -= 2) >= 2 && ((n.dt = t.read_shift(2)), (t.l -= 2)),
            n.BIFFVer)
          ) {
            case 1536:
            case 1280:
            case 1024:
            case 768:
            case 512:
            case 2:
            case 7:
              break;
            default:
              if (e > 6) throw new Error("Unexpected BIFF Ver " + n.BIFFVer);
          }
          return t.read_shift(e), n;
        }
        function ir(t, e, n) {
          var i = 1536,
            r = 16;
          switch (n.bookType) {
            case "biff8":
              break;
            case "biff5":
              (i = 1280), (r = 8);
              break;
            case "biff4":
              (i = 4), (r = 6);
              break;
            case "biff3":
              (i = 3), (r = 6);
              break;
            case "biff2":
              (i = 2), (r = 4);
              break;
            case "xla":
              break;
            default:
              throw new Error("unsupported BIFF version");
          }
          var o = Pe(r);
          return (
            o.write_shift(2, i),
            o.write_shift(2, e),
            r > 4 && o.write_shift(2, 29282),
            r > 6 && o.write_shift(2, 1997),
            r > 8 &&
              (o.write_shift(2, 49161),
              o.write_shift(2, 1),
              o.write_shift(2, 1798),
              o.write_shift(2, 0)),
            o
          );
        }
        function rr(t, e) {
          var n = !e || e.biff >= 8 ? 2 : 1,
            i = Pe(8 + n * t.name.length);
          i.write_shift(4, t.pos),
            i.write_shift(1, t.hs || 0),
            i.write_shift(1, t.dt),
            i.write_shift(1, t.name.length),
            e.biff >= 8 && i.write_shift(1, 1),
            i.write_shift(
              n * t.name.length,
              t.name,
              e.biff < 8 ? "sbcs" : "utf16le"
            );
          var r = i.slice(0, i.l);
          return (r.l = i.l), r;
        }
        function or(t, e, n) {
          var i = 0;
          (n && 2 == n.biff) || (i = t.read_shift(2));
          var r = t.read_shift(2);
          return (
            n && 2 == n.biff && ((i = 1 - (r >> 15)), (r &= 32767)),
            [
              {
                Unsynced: 1 & i,
                DyZero: (2 & i) >> 1,
                ExAsc: (4 & i) >> 2,
                ExDsc: (8 & i) >> 3,
              },
              r,
            ]
          );
        }
        function ar(t, e, n, i) {
          var r = n && 5 == n.biff;
          i || (i = Pe(r ? 3 + e.length : 5 + 2 * e.length)),
            i.write_shift(2, t),
            i.write_shift(r ? 1 : 2, e.length),
            r || i.write_shift(1, 1),
            i.write_shift((r ? 1 : 2) * e.length, e, r ? "sbcs" : "utf16le");
          var o = i.length > i.l ? i.slice(0, i.l) : i;
          return null == o.l && (o.l = o.length), o;
        }
        var sr = Wi;
        function lr(t, e, n) {
          var i = t.l + e,
            r = 8 != n.biff && n.biff ? 2 : 4,
            o = t.read_shift(r),
            a = t.read_shift(r),
            s = t.read_shift(2),
            l = t.read_shift(2);
          return (t.l = i), { s: { r: o, c: s }, e: { r: a, c: l } };
        }
        function cr(t, e, n, i) {
          var r = n && 5 == n.biff;
          return (
            i || (i = Pe(r ? 16 : 20)),
            i.write_shift(2, 0),
            t.style
              ? (i.write_shift(2, t.numFmtId || 0), i.write_shift(2, 65524))
              : (i.write_shift(2, t.numFmtId || 0), i.write_shift(2, e << 4)),
            i.write_shift(4, 0),
            i.write_shift(4, 0),
            r || i.write_shift(4, 0),
            i.write_shift(2, 0),
            i
          );
        }
        function dr(t, e, n) {
          var i = Yi(t);
          2 == n.biff && ++t.l;
          var r = (function (t) {
            var e = t.read_shift(1);
            return 1 === t.read_shift(1) ? e : 1 === e;
          })(t);
          return (i.val = r), (i.t = !0 === r || !1 === r ? "b" : "e"), i;
        }
        var ur = function (t, e, n) {
          return 0 === e ? "" : Wi(t, 0, n);
        };
        function pr(t, e, n) {
          var i,
            r = t.read_shift(2),
            o = {
              fBuiltIn: 1 & r,
              fWantAdvise: (r >>> 1) & 1,
              fWantPict: (r >>> 2) & 1,
              fOle: (r >>> 3) & 1,
              fOleLink: (r >>> 4) & 1,
              cf: (r >>> 5) & 1023,
              fIcon: (r >>> 15) & 1,
            };
          return (
            14849 === n.sbcch &&
              (i = (function (t, e, n) {
                (t.l += 4), (e -= 4);
                var i = t.l + e,
                  r = ji(t, 0, n),
                  o = t.read_shift(2);
                if (o !== (i -= t.l))
                  throw new Error(
                    "Malformed AddinUdf: padding = " + i + " != " + o
                  );
                return (t.l += o), r;
              })(t, e - 2, n)),
            (o.body = i || t.read_shift(e - 2)),
            "string" == typeof i && (o.Name = i),
            o
          );
        }
        var hr = [
          "_xlnm.Consolidate_Area",
          "_xlnm.Auto_Open",
          "_xlnm.Auto_Close",
          "_xlnm.Extract",
          "_xlnm.Database",
          "_xlnm.Criteria",
          "_xlnm.Print_Area",
          "_xlnm.Print_Titles",
          "_xlnm.Recorder",
          "_xlnm.Data_Form",
          "_xlnm.Auto_Activate",
          "_xlnm.Auto_Deactivate",
          "_xlnm.Sheet_Title",
          "_xlnm._FilterDatabase",
        ];
        function fr(t, e, n) {
          var i = t.l + e,
            r = t.read_shift(2),
            o = t.read_shift(1),
            a = t.read_shift(1),
            s = t.read_shift(n && 2 == n.biff ? 1 : 2),
            l = 0;
          (!n || n.biff >= 5) &&
            (5 != n.biff && (t.l += 2),
            (l = t.read_shift(2)),
            5 == n.biff && (t.l += 2),
            (t.l += 4));
          var c = Ri(t, a, n);
          32 & r && (c = hr[c.charCodeAt(0)]);
          var d = i - t.l;
          return (
            n && 2 == n.biff && --d,
            {
              chKey: o,
              Name: c,
              itab: l,
              rgce:
                i == t.l || 0 === s
                  ? []
                  : (function (t, e, n, i) {
                      var r,
                        o = t.l + e,
                        a = Da(t, i, n);
                      return o !== t.l && (r = Ta(t, o - t.l, a, n)), [a, r];
                    })(t, d, n, s),
            }
          );
        }
        function br(t, e, n) {
          if (n.biff < 8)
            return (function (t, e, n) {
              3 == t[t.l + 1] && t[t.l]++;
              var i = ji(t, 0, n);
              return 3 == i.charCodeAt(0) ? i.slice(1) : i;
            })(t, 0, n);
          for (
            var i = [], r = t.l + e, o = t.read_shift(n.biff > 8 ? 4 : 2);
            0 != o--;

          )
            i.push(Xi(t, n.biff, n));
          if (t.l != r) throw new Error("Bad ExternSheet: " + t.l + " != " + r);
          return i;
        }
        function mr(t, e, n) {
          var i = Ji(t, 6);
          switch (n.biff) {
            case 2:
              t.l++, (e -= 7);
              break;
            case 3:
            case 4:
              (t.l += 2), (e -= 8);
              break;
            default:
              (t.l += 6), (e -= 12);
          }
          return [i, Ra(t, e, n)];
        }
        var gr = [];
        function vr(t) {
          var e = Pe(24),
            n = Ge(t[0]);
          e.write_shift(2, n.r),
            e.write_shift(2, n.r),
            e.write_shift(2, n.c),
            e.write_shift(2, n.c);
          for (
            var i = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(
                " "
              ),
              r = 0;
            r < 16;
            ++r
          )
            e.write_shift(1, parseInt(i[r], 16));
          return T([e, Fi(t[1])]);
        }
        function _r(t) {
          var e = t[1].Tooltip,
            n = Pe(10 + 2 * (e.length + 1));
          n.write_shift(2, 2048);
          var i = Ge(t[0]);
          n.write_shift(2, i.r),
            n.write_shift(2, i.r),
            n.write_shift(2, i.c),
            n.write_shift(2, i.c);
          for (var r = 0; r < e.length; ++r) n.write_shift(2, e.charCodeAt(r));
          return n.write_shift(2, 0), n;
        }
        function yr(t, e, n) {
          if (!n.cellStyles) return je(t, e);
          var i = n && n.biff >= 12 ? 4 : 2,
            r = t.read_shift(i),
            o = t.read_shift(i),
            a = t.read_shift(i),
            s = t.read_shift(i),
            l = t.read_shift(2);
          return 2 == i && (t.l += 2), { s: r, e: o, w: a, ixfe: s, flags: l };
        }
        gr[8] = function (t, e) {
          var n = t.l + e;
          t.l += 10;
          var i = t.read_shift(2);
          (t.l += 4), (t.l += 2), (t.l += 2), (t.l += 2), (t.l += 4);
          var r = t.read_shift(1);
          return (t.l += r), (t.l = n), { fmt: i };
        };
        var Mr = Yi,
          Or = Ei,
          wr = Ii,
          Ar = (function () {
            var t = {
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127,
                8: 865,
                9: 437,
                10: 850,
                11: 437,
                13: 437,
                14: 850,
                15: 437,
                16: 850,
                17: 437,
                18: 850,
                19: 932,
                20: 850,
                21: 437,
                22: 850,
                23: 865,
                24: 437,
                25: 437,
                26: 850,
                27: 437,
                28: 863,
                29: 850,
                31: 852,
                34: 852,
                35: 852,
                36: 860,
                37: 850,
                38: 866,
                55: 850,
                64: 852,
                77: 936,
                78: 949,
                79: 950,
                80: 874,
                87: 1252,
                88: 1252,
                89: 1252,
                255: 16969,
              },
              e = Y({
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127,
              });
            function n(e, n) {
              var i = n || {};
              return (
                i.dateNF || (i.dateNF = "yyyymmdd"),
                rn(
                  (function (e, n) {
                    var i = [],
                      r = A(1);
                    switch (n.type) {
                      case "base64":
                        r = z(y.decode(e));
                        break;
                      case "binary":
                        r = z(e);
                        break;
                      case "buffer":
                      case "array":
                        r = e;
                    }
                    Ee(r, 0);
                    var o = r.read_shift(1),
                      a = !1,
                      s = !1,
                      l = !1;
                    switch (o) {
                      case 2:
                      case 3:
                        break;
                      case 48:
                        (s = !0), (a = !0);
                        break;
                      case 49:
                        s = !0;
                        break;
                      case 131:
                      case 139:
                        a = !0;
                        break;
                      case 140:
                        (a = !0), (l = !0);
                        break;
                      case 245:
                        a = !0;
                        break;
                      default:
                        throw new Error(
                          "DBF Unsupported Version: " + o.toString(16)
                        );
                    }
                    var c = 0,
                      d = 0;
                    2 == o && (c = r.read_shift(2)),
                      (r.l += 3),
                      2 != o && (c = r.read_shift(4)),
                      2 != o && (d = r.read_shift(2));
                    var u = r.read_shift(2),
                      p = 1252;
                    2 != o &&
                      ((r.l += 16),
                      r.read_shift(1),
                      0 !== r[r.l] && (p = t[r[r.l]]),
                      (r.l += 1),
                      (r.l += 2)),
                      l && (r.l += 36);
                    for (
                      var h = [],
                        f = {},
                        b = d - 10 - (s ? 264 : 0),
                        m = l ? 32 : 11;
                      2 == o ? r.l < r.length && 13 != r[r.l] : r.l < b;

                    )
                      switch (
                        (((f = {}).name = cptable.utils
                          .decode(p, r.slice(r.l, r.l + m))
                          .replace(/[\u0000\r\n].*$/g, "")),
                        (r.l += m),
                        (f.type = String.fromCharCode(r.read_shift(1))),
                        2 == o || l || (f.offset = r.read_shift(4)),
                        (f.len = r.read_shift(1)),
                        2 == o && (f.offset = r.read_shift(2)),
                        (f.dec = r.read_shift(1)),
                        f.name.length && h.push(f),
                        2 != o && (r.l += l ? 13 : 14),
                        f.type)
                      ) {
                        case "B":
                          (s && 8 == f.len) || n.WTF;
                          break;
                        case "G":
                        case "P":
                          n.WTF;
                          break;
                        case "C":
                        case "D":
                        case "F":
                        case "I":
                        case "L":
                        case "M":
                        case "N":
                        case "O":
                        case "T":
                        case "Y":
                        case "0":
                        case "@":
                        case "+":
                          break;
                        default:
                          throw new Error("Unknown Field Type: " + f.type);
                      }
                    if (
                      (13 !== r[r.l] ? (r.l = d - 1) : 2 == o && (r.l = 521),
                      2 != o)
                    ) {
                      if (13 !== r.read_shift(1))
                        throw new Error(
                          "DBF Terminator not found " + r.l + " " + r[r.l]
                        );
                      r.l = d;
                    }
                    var g = 0,
                      v = 0;
                    for (i[0] = [], v = 0; v != h.length; ++v)
                      i[0][v] = h[v].name;
                    for (; c-- > 0; )
                      if (42 !== r[r.l])
                        for (
                          ++r.l, i[++g] = [], v = 0, v = 0;
                          v != h.length;
                          ++v
                        ) {
                          var _ = r.slice(r.l, r.l + h[v].len);
                          (r.l += h[v].len), Ee(_, 0);
                          var M = cptable.utils.decode(p, _);
                          switch (h[v].type) {
                            case "C":
                              (i[g][v] = cptable.utils.decode(p, _)),
                                (i[g][v] = i[g][v].trim());
                              break;
                            case "D":
                              8 === M.length
                                ? (i[g][v] = new Date(
                                    +M.slice(0, 4),
                                    +M.slice(4, 6) - 1,
                                    +M.slice(6, 8)
                                  ))
                                : (i[g][v] = M);
                              break;
                            case "F":
                              i[g][v] = parseFloat(M.trim());
                              break;
                            case "+":
                            case "I":
                              i[g][v] = l
                                ? 2147483648 ^ _.read_shift(-4, "i")
                                : _.read_shift(4, "i");
                              break;
                            case "L":
                              switch (M.toUpperCase()) {
                                case "Y":
                                case "T":
                                  i[g][v] = !0;
                                  break;
                                case "N":
                                case "F":
                                  i[g][v] = !1;
                                  break;
                                case " ":
                                case "?":
                                  i[g][v] = !1;
                                  break;
                                default:
                                  throw new Error(
                                    "DBF Unrecognized L:|" + M + "|"
                                  );
                              }
                              break;
                            case "M":
                              if (!a)
                                throw new Error(
                                  "DBF Unexpected MEMO for type " +
                                    o.toString(16)
                                );
                              i[g][v] =
                                "##MEMO##" +
                                (l ? parseInt(M.trim(), 10) : _.read_shift(4));
                              break;
                            case "N":
                              i[g][v] = +M.replace(/\u0000/g, "").trim();
                              break;
                            case "@":
                              i[g][v] = new Date(
                                _.read_shift(-8, "f") - 621356832e5
                              );
                              break;
                            case "T":
                              i[g][v] = new Date(
                                864e5 * (_.read_shift(4) - 2440588) +
                                  _.read_shift(4)
                              );
                              break;
                            case "Y":
                              i[g][v] = _.read_shift(4, "i") / 1e4;
                              break;
                            case "O":
                              i[g][v] = -_.read_shift(-8, "f");
                              break;
                            case "B":
                              if (s && 8 == h[v].len) {
                                i[g][v] = _.read_shift(8, "f");
                                break;
                              }
                            case "G":
                            case "P":
                              _.l += h[v].len;
                              break;
                            case "0":
                              if ("_NullFlags" === h[v].name) break;
                            default:
                              throw new Error(
                                "DBF Unsupported data type " + h[v].type
                              );
                          }
                        }
                      else r.l += u;
                    if (2 != o && r.l < r.length && 26 != r[r.l++])
                      throw new Error(
                        "DBF EOF Marker missing " +
                          (r.l - 1) +
                          " of " +
                          r.length +
                          " " +
                          r[r.l - 1].toString(16)
                      );
                    return n && n.sheetRows && (i = i.slice(0, n.sheetRows)), i;
                  })(e, i),
                  i
                )
              );
            }
            var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
            return {
              to_workbook: function (t, e) {
                try {
                  return en(n(t, e), e);
                } catch (t) {
                  if (e && e.WTF) throw t;
                }
                return { SheetNames: [], Sheets: {} };
              },
              to_sheet: n,
              from_sheet: function (t, n) {
                var r = n || {};
                if ((+r.codepage >= 0 && h(+r.codepage), "string" == r.type))
                  throw new Error("Cannot write DBF to JS string");
                var o = Ie(),
                  a = _c(t, { header: 1, raw: !0, cellDates: !0 }),
                  s = a[0],
                  c = a.slice(1),
                  d = 0,
                  u = 0,
                  p = 0,
                  f = 1;
                for (d = 0; d < s.length; ++d)
                  if (null != d) {
                    if (
                      (++p,
                      "number" == typeof s[d] && (s[d] = s[d].toString(10)),
                      "string" != typeof s[d])
                    )
                      throw new Error(
                        "DBF Invalid column name " +
                          s[d] +
                          " |" +
                          typeof s[d] +
                          "|"
                      );
                    if (s.indexOf(s[d]) !== d)
                      for (u = 0; u < 1024; ++u)
                        if (-1 == s.indexOf(s[d] + "_" + u)) {
                          s[d] += "_" + u;
                          break;
                        }
                  }
                var b = Qe(t["!ref"]),
                  m = [];
                for (d = 0; d <= b.e.c - b.s.c; ++d) {
                  var g = [];
                  for (u = 0; u < c.length; ++u)
                    null != c[u][d] && g.push(c[u][d]);
                  if (0 != g.length && null != s[d]) {
                    var v = "",
                      _ = "";
                    for (u = 0; u < g.length; ++u) {
                      switch (typeof g[u]) {
                        case "number":
                          _ = "B";
                          break;
                        case "string":
                          _ = "C";
                          break;
                        case "boolean":
                          _ = "L";
                          break;
                        case "object":
                          _ = g[u] instanceof Date ? "D" : "C";
                          break;
                        default:
                          _ = "C";
                      }
                      if ("C" == (v = v && v != _ ? "C" : _)) break;
                    }
                    (f += i[v] || 0), (m[d] = v);
                  } else m[d] = "?";
                }
                var y = o.next(32);
                for (
                  y.write_shift(4, 318902576),
                    y.write_shift(4, c.length),
                    y.write_shift(2, 296 + 32 * p),
                    y.write_shift(2, f),
                    d = 0;
                  d < 4;
                  ++d
                )
                  y.write_shift(4, 0);
                for (
                  y.write_shift(4, 0 | ((+e[l] || 3) << 8)), d = 0, u = 0;
                  d < s.length;
                  ++d
                )
                  if (null != s[d]) {
                    var M = o.next(32),
                      O = (s[d].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(
                        0,
                        11
                      );
                    M.write_shift(1, O, "sbcs"),
                      M.write_shift(1, "?" == m[d] ? "C" : m[d], "sbcs"),
                      M.write_shift(4, u),
                      M.write_shift(1, i[m[d]] || 0),
                      M.write_shift(1, 0),
                      M.write_shift(1, 2),
                      M.write_shift(4, 0),
                      M.write_shift(1, 0),
                      M.write_shift(4, 0),
                      M.write_shift(4, 0),
                      (u += i[m[d]] || 0);
                  }
                var w = o.next(264);
                for (w.write_shift(4, 13), d = 0; d < 65; ++d)
                  w.write_shift(4, 0);
                for (d = 0; d < c.length; ++d) {
                  var A = o.next(f);
                  for (A.write_shift(1, 0), u = 0; u < s.length; ++u)
                    if (null != s[u])
                      switch (m[u]) {
                        case "L":
                          A.write_shift(
                            1,
                            null == c[d][u] ? 63 : c[d][u] ? 84 : 70
                          );
                          break;
                        case "B":
                          A.write_shift(8, c[d][u] || 0, "f");
                          break;
                        case "D":
                          c[d][u]
                            ? (A.write_shift(
                                4,
                                ("0000" + c[d][u].getFullYear()).slice(-4),
                                "sbcs"
                              ),
                              A.write_shift(
                                2,
                                ("00" + (c[d][u].getMonth() + 1)).slice(-2),
                                "sbcs"
                              ),
                              A.write_shift(
                                2,
                                ("00" + c[d][u].getDate()).slice(-2),
                                "sbcs"
                              ))
                            : A.write_shift(8, "00000000", "sbcs");
                          break;
                        case "C":
                          var x = String(c[d][u] || "");
                          for (
                            A.write_shift(1, x, "sbcs"), p = 0;
                            p < 250 - x.length;
                            ++p
                          )
                            A.write_shift(1, 32);
                      }
                }
                return o.next(1).write_shift(1, 26), o.end();
              },
            };
          })(),
          xr = (function () {
            var t = {
                AA: "À",
                BA: "Á",
                CA: "Â",
                DA: 195,
                HA: "Ä",
                JA: 197,
                AE: "È",
                BE: "É",
                CE: "Ê",
                HE: "Ë",
                AI: "Ì",
                BI: "Í",
                CI: "Î",
                HI: "Ï",
                AO: "Ò",
                BO: "Ó",
                CO: "Ô",
                DO: 213,
                HO: "Ö",
                AU: "Ù",
                BU: "Ú",
                CU: "Û",
                HU: "Ü",
                Aa: "à",
                Ba: "á",
                Ca: "â",
                Da: 227,
                Ha: "ä",
                Ja: 229,
                Ae: "è",
                Be: "é",
                Ce: "ê",
                He: "ë",
                Ai: "ì",
                Bi: "í",
                Ci: "î",
                Hi: "ï",
                Ao: "ò",
                Bo: "ó",
                Co: "ô",
                Do: 245,
                Ho: "ö",
                Au: "ù",
                Bu: "ú",
                Cu: "û",
                Hu: "ü",
                KC: "Ç",
                Kc: "ç",
                q: "æ",
                z: "œ",
                a: "Æ",
                j: "Œ",
                DN: 209,
                Dn: 241,
                Hy: 255,
                S: 169,
                c: 170,
                R: 174,
                0: 176,
                1: 177,
                2: 178,
                3: 179,
                B: 180,
                5: 181,
                6: 182,
                7: 183,
                Q: 185,
                k: 186,
                b: 208,
                i: 216,
                l: 222,
                s: 240,
                y: 248,
                "!": 161,
                '"': 162,
                "#": 163,
                "(": 164,
                "%": 165,
                "'": 167,
                "H ": 168,
                "+": 171,
                ";": 187,
                "<": 188,
                "=": 189,
                ">": 190,
                "?": 191,
                "{": 223,
              },
              e = new RegExp(
                "N(" +
                  $(t)
                    .join("|")
                    .replace(/\|\|\|/, "|\\||")
                    .replace(/([?()+])/g, "\\$1") +
                  "|\\|)",
                "gm"
              ),
              n = function (e, n) {
                var i = t[n];
                return "number" == typeof i ? v(i) : i;
              },
              i = function (t, e, n) {
                var i = ((e.charCodeAt(0) - 32) << 4) | (n.charCodeAt(0) - 48);
                return 59 == i ? t : v(i);
              };
            function r(t, r) {
              var o,
                a = t.split(/[\n\r]+/),
                s = -1,
                l = -1,
                c = 0,
                d = 0,
                u = [],
                p = [],
                f = null,
                b = {},
                m = [],
                g = [],
                v = [],
                _ = 0;
              for (+r.codepage >= 0 && h(+r.codepage); c !== a.length; ++c) {
                _ = 0;
                var y,
                  M = a[c]
                    .trim()
                    .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i)
                    .replace(e, n),
                  O = M.replace(/;;/g, "\0")
                    .split(";")
                    .map(function (t) {
                      return t.replace(/\u0000/g, ";");
                    }),
                  w = O[0];
                if (M.length > 0)
                  switch (w) {
                    case "ID":
                    case "E":
                    case "B":
                    case "O":
                      break;
                    case "P":
                      "P" == O[1].charAt(0) &&
                        p.push(M.slice(3).replace(/;;/g, ";"));
                      break;
                    case "C":
                      var A = !1,
                        x = !1;
                      for (d = 1; d < O.length; ++d)
                        switch (O[d].charAt(0)) {
                          case "X":
                            (l = parseInt(O[d].slice(1)) - 1), (x = !0);
                            break;
                          case "Y":
                            for (
                              s = parseInt(O[d].slice(1)) - 1,
                                x || (l = 0),
                                o = u.length;
                              o <= s;
                              ++o
                            )
                              u[o] = [];
                            break;
                          case "K":
                            '"' === (y = O[d].slice(1)).charAt(0)
                              ? (y = y.slice(1, y.length - 1))
                              : "TRUE" === y
                              ? (y = !0)
                              : "FALSE" === y
                              ? (y = !1)
                              : isNaN(rt(y))
                              ? isNaN(ot(y).getDate()) || (y = tt(y))
                              : ((y = rt(y)),
                                null !== f && q.is_date(f) && (y = K(y))),
                              "undefined" != typeof cptable &&
                                "string" == typeof y &&
                                "string" != (r || {}).type &&
                                (r || {}).codepage &&
                                (y = cptable.utils.decode(r.codepage, y)),
                              (A = !0);
                            break;
                          case "E":
                            var z = Jo(O[d].slice(1), { r: s, c: l });
                            u[s][l] = [u[s][l], z];
                            break;
                          default:
                            if (r && r.WTF)
                              throw new Error("SYLK bad record " + M);
                        }
                      A && ((u[s][l] = y), (f = null));
                      break;
                    case "F":
                      var C = 0;
                      for (d = 1; d < O.length; ++d)
                        switch (O[d].charAt(0)) {
                          case "X":
                            (l = parseInt(O[d].slice(1)) - 1), ++C;
                            break;
                          case "Y":
                            for (
                              s = parseInt(O[d].slice(1)) - 1, o = u.length;
                              o <= s;
                              ++o
                            )
                              u[o] = [];
                            break;
                          case "M":
                            _ = parseInt(O[d].slice(1)) / 20;
                            break;
                          case "F":
                          case "G":
                            break;
                          case "P":
                            f = p[parseInt(O[d].slice(1))];
                            break;
                          case "S":
                          case "D":
                          case "N":
                            break;
                          case "W":
                            for (
                              v = O[d].slice(1).split(" "),
                                o = parseInt(v[0], 10);
                              o <= parseInt(v[1], 10);
                              ++o
                            )
                              (_ = parseInt(v[2], 10)),
                                (g[o - 1] =
                                  0 === _ ? { hidden: !0 } : { wch: _ }),
                                po(g[o - 1]);
                            break;
                          case "C":
                            g[(l = parseInt(O[d].slice(1)) - 1)] || (g[l] = {});
                            break;
                          case "R":
                            m[(s = parseInt(O[d].slice(1)) - 1)] || (m[s] = {}),
                              _ > 0
                                ? ((m[s].hpt = _), (m[s].hpx = fo(_)))
                                : 0 === _ && (m[s].hidden = !0);
                            break;
                          default:
                            if (r && r.WTF)
                              throw new Error("SYLK bad record " + M);
                        }
                      C < 1 && (f = null);
                      break;
                    default:
                      if (r && r.WTF) throw new Error("SYLK bad record " + M);
                  }
              }
              return (
                m.length > 0 && (b["!rows"] = m),
                g.length > 0 && (b["!cols"] = g),
                r && r.sheetRows && (u = u.slice(0, r.sheetRows)),
                [u, b]
              );
            }
            function o(t, e) {
              var n = (function (t, e) {
                  switch (e.type) {
                    case "base64":
                      return r(y.decode(t), e);
                    case "binary":
                      return r(t, e);
                    case "buffer":
                      return r(t.toString("binary"), e);
                    case "array":
                      return r(et(t), e);
                  }
                  throw new Error("Unrecognized type " + e.type);
                })(t, e),
                i = n[0],
                o = n[1],
                a = rn(i, e);
              return (
                $(o).forEach(function (t) {
                  a[t] = o[t];
                }),
                a
              );
            }
            function a(t, e, n, i) {
              var r = "C;Y" + (n + 1) + ";X" + (i + 1) + ";K";
              switch (t.t) {
                case "n":
                  (r += t.v || 0),
                    t.f && !t.F && (r += ";E" + ta(t.f, { r: n, c: i }));
                  break;
                case "b":
                  r += t.v ? "TRUE" : "FALSE";
                  break;
                case "e":
                  r += t.w || t.v;
                  break;
                case "d":
                  r += '"' + (t.w || t.v) + '"';
                  break;
                case "s":
                  r += '"' + t.v.replace(/"/g, "") + '"';
              }
              return r;
            }
            return (
              (t["|"] = 254),
              {
                to_workbook: function (t, e) {
                  return en(o(t, e), e);
                },
                to_sheet: o,
                from_sheet: function (t, e) {
                  var n,
                    i,
                    r = ["ID;PWXL;N;E"],
                    o = [],
                    s = Qe(t["!ref"]),
                    l = Array.isArray(t),
                    c = "\r\n";
                  r.push("P;PGeneral"),
                    r.push("F;P0;DG0G8;M255"),
                    t["!cols"] &&
                      ((i = r),
                      t["!cols"].forEach(function (t, e) {
                        var n = "F;W" + (e + 1) + " " + (e + 1) + " ";
                        t.hidden
                          ? (n += "0")
                          : ("number" == typeof t.width &&
                              (t.wpx = ao(t.width)),
                            "number" == typeof t.wpx && (t.wch = so(t.wpx)),
                            "number" == typeof t.wch &&
                              (n += Math.round(t.wch))),
                          " " != n.charAt(n.length - 1) && i.push(n);
                      })),
                    t["!rows"] &&
                      (function (t, e) {
                        e.forEach(function (e, n) {
                          var i = "F;";
                          e.hidden
                            ? (i += "M0;")
                            : e.hpt
                            ? (i += "M" + 20 * e.hpt + ";")
                            : e.hpx && (i += "M" + 20 * ho(e.hpx) + ";"),
                            i.length > 2 && t.push(i + "R" + (n + 1));
                        });
                      })(r, t["!rows"]),
                    r.push(
                      "B;Y" +
                        (s.e.r - s.s.r + 1) +
                        ";X" +
                        (s.e.c - s.s.c + 1) +
                        ";D" +
                        [s.s.c, s.s.r, s.e.c, s.e.r].join(" ")
                    );
                  for (var d = s.s.r; d <= s.e.r; ++d)
                    for (var u = s.s.c; u <= s.e.c; ++u) {
                      var p = Ke({ r: d, c: u });
                      (n = l ? (t[d] || [])[u] : t[p]) &&
                        (null != n.v || (n.f && !n.F)) &&
                        o.push(a(n, 0, d, u));
                    }
                  return r.join(c) + c + o.join(c) + c + "E" + c;
                },
              }
            );
          })(),
          zr = (function () {
            function t(t, e) {
              for (
                var n = t.split("\n"), i = -1, r = -1, o = 0, a = [];
                o !== n.length;
                ++o
              )
                if ("BOT" !== n[o].trim()) {
                  if (!(i < 0)) {
                    var s = n[o].trim().split(","),
                      l = s[0],
                      c = s[1],
                      d = n[++o].trim();
                    switch (+l) {
                      case -1:
                        if ("BOT" === d) {
                          (a[++i] = []), (r = 0);
                          continue;
                        }
                        if ("EOD" !== d)
                          throw new Error(
                            "Unrecognized DIF special command " + d
                          );
                        break;
                      case 0:
                        "TRUE" === d
                          ? (a[i][r] = !0)
                          : "FALSE" === d
                          ? (a[i][r] = !1)
                          : isNaN(rt(c))
                          ? isNaN(ot(c).getDate())
                            ? (a[i][r] = c)
                            : (a[i][r] = tt(c))
                          : (a[i][r] = rt(c)),
                          ++r;
                        break;
                      case 1:
                        (d = d.slice(1, d.length - 1)),
                          (a[i][r++] = "" !== d ? d : null);
                    }
                    if ("EOD" === d) break;
                  }
                } else (a[++i] = []), (r = 0);
              return e && e.sheetRows && (a = a.slice(0, e.sheetRows)), a;
            }
            function e(e, n) {
              return rn(
                (function (e, n) {
                  switch (n.type) {
                    case "base64":
                      return t(y.decode(e), n);
                    case "binary":
                      return t(e, n);
                    case "buffer":
                      return t(e.toString("binary"), n);
                    case "array":
                      return t(et(e), n);
                  }
                  throw new Error("Unrecognized type " + n.type);
                })(e, n),
                n
              );
            }
            var n, i;
            return {
              to_workbook: function (t, n) {
                return en(e(t, n), n);
              },
              to_sheet: e,
              from_sheet:
                ((n = function (t, e, n, i, r) {
                  t.push(e),
                    t.push(n + "," + i),
                    t.push('"' + r.replace(/"/g, '""') + '"');
                }),
                (i = function (t, e, n, i) {
                  t.push(e + "," + n),
                    t.push(1 == e ? '"' + i.replace(/"/g, '""') + '"' : i);
                }),
                function (t) {
                  var e,
                    r = [],
                    o = Qe(t["!ref"]),
                    a = Array.isArray(t);
                  n(r, "TABLE", 0, 1, "sheetjs"),
                    n(r, "VECTORS", 0, o.e.r - o.s.r + 1, ""),
                    n(r, "TUPLES", 0, o.e.c - o.s.c + 1, ""),
                    n(r, "DATA", 0, 0, "");
                  for (var s = o.s.r; s <= o.e.r; ++s) {
                    i(r, -1, 0, "BOT");
                    for (var l = o.s.c; l <= o.e.c; ++l) {
                      var c = Ke({ r: s, c: l });
                      if ((e = a ? (t[s] || [])[l] : t[c]))
                        switch (e.t) {
                          case "n":
                            var d = e.w;
                            d || null == e.v || (d = e.v),
                              null == d
                                ? e.f && !e.F
                                  ? i(r, 1, 0, "=" + e.f)
                                  : i(r, 1, 0, "")
                                : i(r, 0, d, "V");
                            break;
                          case "b":
                            i(r, 0, e.v ? 1 : 0, e.v ? "TRUE" : "FALSE");
                            break;
                          case "s":
                            i(r, 1, 0, isNaN(e.v) ? e.v : '="' + e.v + '"');
                            break;
                          case "d":
                            e.w ||
                              (e.w = q.format(e.z || q._table[14], G(tt(e.v)))),
                              i(r, 0, e.w, "V");
                            break;
                          default:
                            i(r, 1, 0, "");
                        }
                      else i(r, 1, 0, "");
                    }
                  }
                  return i(r, -1, 0, "EOD"), r.join("\r\n");
                }),
            };
          })(),
          Cr = (function () {
            function t(t) {
              return t
                .replace(/\\/g, "\\b")
                .replace(/:/g, "\\c")
                .replace(/\n/g, "\\n");
            }
            function e(t, e) {
              return rn(
                (function (t, e) {
                  for (
                    var n = t.split("\n"), i = -1, r = -1, o = 0, a = [];
                    o !== n.length;
                    ++o
                  ) {
                    var s = n[o].trim().split(":");
                    if ("cell" === s[0]) {
                      var l = Ge(s[1]);
                      if (a.length <= l.r)
                        for (i = a.length; i <= l.r; ++i) a[i] || (a[i] = []);
                      switch (((i = l.r), (r = l.c), s[2])) {
                        case "t":
                          a[i][r] = s[3]
                            .replace(/\\b/g, "\\")
                            .replace(/\\c/g, ":")
                            .replace(/\\n/g, "\n");
                          break;
                        case "v":
                          a[i][r] = +s[3];
                          break;
                        case "vtf":
                          var c = s[s.length - 1];
                        case "vtc":
                          switch (s[3]) {
                            case "nl":
                              a[i][r] = !!+s[4];
                              break;
                            default:
                              a[i][r] = +s[4];
                          }
                          "vtf" == s[2] && (a[i][r] = [a[i][r], c]);
                      }
                    }
                  }
                  return e && e.sheetRows && (a = a.slice(0, e.sheetRows)), a;
                })(t, e),
                e
              );
            }
            var n = [
                "socialcalc:version:1.5",
                "MIME-Version: 1.0",
                "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
              ].join("\n"),
              i =
                [
                  "--SocialCalcSpreadsheetControlSave",
                  "Content-type: text/plain; charset=UTF-8",
                ].join("\n") + "\n",
              r = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(
                "\n"
              ),
              o = "--SocialCalcSpreadsheetControlSave--";
            function a(e) {
              if (!e || !e["!ref"]) return "";
              for (
                var n,
                  i = [],
                  r = [],
                  o = "",
                  a = Ze(e["!ref"]),
                  s = Array.isArray(e),
                  l = a.s.r;
                l <= a.e.r;
                ++l
              )
                for (var c = a.s.c; c <= a.e.c; ++c)
                  if (
                    ((o = Ke({ r: l, c: c })),
                    (n = s ? (e[l] || [])[c] : e[o]) &&
                      null != n.v &&
                      "z" !== n.t)
                  ) {
                    switch (((r = ["cell", o, "t"]), n.t)) {
                      case "s":
                      case "str":
                        r.push(t(n.v));
                        break;
                      case "n":
                        n.f
                          ? ((r[2] = "vtf"),
                            (r[3] = "n"),
                            (r[4] = n.v),
                            (r[5] = t(n.f)))
                          : ((r[2] = "v"), (r[3] = n.v));
                        break;
                      case "b":
                        (r[2] = "vt" + (n.f ? "f" : "c")),
                          (r[3] = "nl"),
                          (r[4] = n.v ? "1" : "0"),
                          (r[5] = t(n.f || (n.v ? "TRUE" : "FALSE")));
                        break;
                      case "d":
                        var d = G(tt(n.v));
                        (r[2] = "vtc"),
                          (r[3] = "nd"),
                          (r[4] = "" + d),
                          (r[5] = n.w || q.format(n.z || q._table[14], d));
                        break;
                      case "e":
                        continue;
                    }
                    i.push(r.join(":"));
                  }
              return (
                i.push(
                  "sheet:c:" +
                    (a.e.c - a.s.c + 1) +
                    ":r:" +
                    (a.e.r - a.s.r + 1) +
                    ":tvf:1"
                ),
                i.push("valueformat:1:text-wiki"),
                i.join("\n")
              );
            }
            return {
              to_workbook: function (t, n) {
                return en(e(t, n), n);
              },
              to_sheet: e,
              from_sheet: function (t) {
                return [n, i, r, i, a(t), o].join("\n");
              },
            };
          })(),
          kr = (function () {
            function t(t, e, n, i, r) {
              r.raw
                ? (e[n][i] = t)
                : "TRUE" === t
                ? (e[n][i] = !0)
                : "FALSE" === t
                ? (e[n][i] = !1)
                : "" === t ||
                  (isNaN(rt(t))
                    ? isNaN(ot(t).getDate())
                      ? (e[n][i] = t)
                      : (e[n][i] = tt(t))
                    : (e[n][i] = rt(t)));
            }
            var e = { 44: ",", 9: "\t", 59: ";" },
              n = { 44: 3, 9: 2, 59: 1 };
            function i(t, i) {
              var r = i || {},
                o = "",
                a = r.dense ? [] : {},
                s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
              "sep=" == t.slice(0, 4) && 10 == t.charCodeAt(5)
                ? ((o = t.charAt(4)), (t = t.slice(6)))
                : (o = (function (t) {
                    for (var i = {}, r = !1, o = 0, a = 0; o < t.length; ++o)
                      34 == (a = t.charCodeAt(o))
                        ? (r = !r)
                        : !r && a in e && (i[a] = (i[a] || 0) + 1);
                    for (o in ((a = []), i))
                      i.hasOwnProperty(o) && a.push([i[o], o]);
                    if (!a.length)
                      for (o in (i = n))
                        i.hasOwnProperty(o) && a.push([i[o], o]);
                    return (
                      a.sort(function (t, e) {
                        return t[0] - e[0] || n[t[1]] - n[e[1]];
                      }),
                      e[a.pop()[1]]
                    );
                  })(t.slice(0, 1024)));
              var l = 0,
                c = 0,
                d = 0,
                u = 0,
                p = 0,
                h = o.charCodeAt(0),
                f = !1,
                b = 0;
              t = t.replace(/\r\n/gm, "\n");
              var m,
                g,
                v =
                  null != r.dateNF
                    ? ((g = (g =
                        "number" == typeof (m = r.dateNF)
                          ? q._table[m]
                          : m).replace(I, "(\\d+)")),
                      new RegExp("^" + g + "$"))
                    : null;
              function _() {
                var e = t.slice(u, p),
                  n = {};
                if (
                  ('"' == e.charAt(0) &&
                    '"' == e.charAt(e.length - 1) &&
                    (e = e.slice(1, -1).replace(/""/g, '"')),
                  0 === e.length)
                )
                  n.t = "z";
                else if (r.raw) (n.t = "s"), (n.v = e);
                else if (0 === e.trim().length) (n.t = "s"), (n.v = e);
                else if (61 == e.charCodeAt(0))
                  34 == e.charCodeAt(1) && 34 == e.charCodeAt(e.length - 1)
                    ? ((n.t = "s"), (n.v = e.slice(2, -1).replace(/""/g, '"')))
                    : 1 != e.length
                    ? ((n.t = "n"), (n.f = e.slice(1)))
                    : ((n.t = "s"), (n.v = e));
                else if ("TRUE" == e) (n.t = "b"), (n.v = !0);
                else if ("FALSE" == e) (n.t = "b"), (n.v = !1);
                else if (isNaN((d = rt(e))))
                  if (!isNaN(ot(e).getDate()) || (v && e.match(v))) {
                    n.z = r.dateNF || q._table[14];
                    var i = 0;
                    v &&
                      e.match(v) &&
                      ((e = (function (t, e, n) {
                        var i = -1,
                          r = -1,
                          o = -1,
                          a = -1,
                          s = -1,
                          l = -1;
                        (e.match(I) || []).forEach(function (t, e) {
                          var c = parseInt(n[e + 1], 10);
                          switch (t.toLowerCase().charAt(0)) {
                            case "y":
                              i = c;
                              break;
                            case "d":
                              o = c;
                              break;
                            case "h":
                              a = c;
                              break;
                            case "s":
                              l = c;
                              break;
                            case "m":
                              a >= 0 ? (s = c) : (r = c);
                          }
                        }),
                          l >= 0 && -1 == s && r >= 0 && ((s = r), (r = -1));
                        var c =
                          ("" + (i >= 0 ? i : new Date().getFullYear())).slice(
                            -4
                          ) +
                          "-" +
                          ("00" + (r >= 1 ? r : 1)).slice(-2) +
                          "-" +
                          ("00" + (o >= 1 ? o : 1)).slice(-2);
                        7 == c.length && (c = "0" + c),
                          8 == c.length && (c = "20" + c);
                        var d =
                          ("00" + (a >= 0 ? a : 0)).slice(-2) +
                          ":" +
                          ("00" + (s >= 0 ? s : 0)).slice(-2) +
                          ":" +
                          ("00" + (l >= 0 ? l : 0)).slice(-2);
                        return -1 == a && -1 == s && -1 == l
                          ? c
                          : -1 == i && -1 == r && -1 == o
                          ? d
                          : c + "T" + d;
                      })(0, r.dateNF, e.match(v) || [])),
                      (i = 1)),
                      r.cellDates
                        ? ((n.t = "d"), (n.v = tt(e, i)))
                        : ((n.t = "n"), (n.v = G(tt(e, i)))),
                      !1 !== r.cellText &&
                        (n.w = q.format(
                          n.z,
                          n.v instanceof Date ? G(n.v) : n.v
                        )),
                      r.cellNF || delete n.z;
                  } else (n.t = "s"), (n.v = e);
                else (n.t = "n"), !1 !== r.cellText && (n.w = e), (n.v = d);
                if (
                  ("z" == n.t ||
                    (r.dense
                      ? (a[l] || (a[l] = []), (a[l][c] = n))
                      : (a[Ke({ c: c, r: l })] = n)),
                  (u = p + 1),
                  s.e.c < c && (s.e.c = c),
                  s.e.r < l && (s.e.r = l),
                  b == h)
                )
                  ++c;
                else if (((c = 0), ++l, r.sheetRows && r.sheetRows <= l))
                  return !0;
              }
              t: for (; p < t.length; ++p)
                switch ((b = t.charCodeAt(p))) {
                  case 34:
                    f = !f;
                    break;
                  case h:
                  case 10:
                  case 13:
                    if (!f && _()) break t;
                }
              return p - u > 0 && _(), (a["!ref"] = Je(s)), a;
            }
            function r(e, n) {
              return "sep=" == e.slice(0, 4) ||
                e.indexOf("\t") >= 0 ||
                e.indexOf(",") >= 0 ||
                e.indexOf(";") >= 0
                ? i(e, n)
                : rn(
                    (function (e, n) {
                      var i = n || {},
                        r = [];
                      if (!e || 0 === e.length) return r;
                      for (
                        var o = e.split(/[\r\n]/), a = o.length - 1;
                        a >= 0 && 0 === o[a].length;

                      )
                        --a;
                      for (var s = 10, l = 0, c = 0; c <= a; ++c)
                        -1 == (l = o[c].indexOf(" ")) ? (l = o[c].length) : l++,
                          (s = Math.max(s, l));
                      for (c = 0; c <= a; ++c) {
                        r[c] = [];
                        var d = 0;
                        for (
                          t(o[c].slice(0, s).trim(), r, c, d, i), d = 1;
                          d <= (o[c].length - s) / 10 + 1;
                          ++d
                        )
                          t(
                            o[c].slice(s + 10 * (d - 1), s + 10 * d).trim(),
                            r,
                            c,
                            d,
                            i
                          );
                      }
                      return i.sheetRows && (r = r.slice(0, i.sheetRows)), r;
                    })(e, n),
                    n
                  );
            }
            function o(t, e) {
              var n = "",
                i = "string" == e.type ? [0, 0, 0, 0] : sc(t, e);
              switch (e.type) {
                case "base64":
                  n = y.decode(t);
                  break;
                case "binary":
                  n = t;
                  break;
                case "buffer":
                  n =
                    65001 == e.codepage
                      ? t.toString("utf8")
                      : e.codepage && "undefined" != typeof cptable
                      ? cptable.utils.decode(e.codepage, t)
                      : t.toString("binary");
                  break;
                case "array":
                  n = et(t);
                  break;
                case "string":
                  n = t;
                  break;
                default:
                  throw new Error("Unrecognized type " + e.type);
              }
              return (
                239 == i[0] && 187 == i[1] && 191 == i[2]
                  ? (n = Et(n.slice(3)))
                  : "binary" == e.type &&
                    "undefined" != typeof cptable &&
                    e.codepage &&
                    (n = cptable.utils.decode(
                      e.codepage,
                      cptable.utils.encode(1252, n)
                    )),
                "socialcalc:version:" == n.slice(0, 19)
                  ? Cr.to_sheet("string" == e.type ? n : Et(n), e)
                  : r(n, e)
              );
            }
            return {
              to_workbook: function (t, e) {
                return en(o(t, e), e);
              },
              to_sheet: o,
              from_sheet: function (t) {
                for (
                  var e,
                    n = [],
                    i = Qe(t["!ref"]),
                    r = Array.isArray(t),
                    o = i.s.r;
                  o <= i.e.r;
                  ++o
                ) {
                  for (var a = [], s = i.s.c; s <= i.e.c; ++s) {
                    var l = Ke({ r: o, c: s });
                    if ((e = r ? (t[o] || [])[s] : t[l]) && null != e.v) {
                      for (
                        var c = (e.w || (tn(e), e.w) || "").slice(0, 10);
                        c.length < 10;

                      )
                        c += " ";
                      a.push(c + (0 === s ? " " : ""));
                    } else a.push("          ");
                  }
                  n.push(a.join(""));
                }
                return n.join("\n");
              },
            };
          })(),
          Sr = (function () {
            function t(t, e) {
              if (!t) return t;
              var n = e || {},
                i = n.dense ? [] : {},
                r = "Sheet1",
                o = 0,
                l = {},
                c = [r],
                d = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
                u = n.sheetRows || 0;
              if (2 == t[2]) n.Enum = a;
              else if (26 == t[2]) n.Enum = s;
              else {
                if (14 != t[2])
                  throw new Error("Unrecognized LOTUS BOF " + t[2]);
                (n.Enum = s), (n.qpro = !0), (t.l = 0);
              }
              return (
                (function (t, e, n) {
                  if (t) {
                    Ee(t, t.l || 0);
                    for (var i = n.Enum || a; t.l < t.length; ) {
                      var r = t.read_shift(2),
                        o = i[r] || i[255],
                        s = t.read_shift(2),
                        l = t.l + s,
                        c = (o.f || je)(t, s, n);
                      if (((t.l = l), e(c, o.n, r))) return;
                    }
                  }
                })(
                  t,
                  function (e, a, s) {
                    if (2 == t[2])
                      switch (s) {
                        case 0:
                          (n.vers = e), e >= 4096 && (n.qpro = !0);
                          break;
                        case 6:
                          d = e;
                          break;
                        case 15:
                          n.qpro || (e[1].v = e[1].v.slice(1));
                        case 13:
                        case 14:
                        case 16:
                        case 51:
                          14 == s &&
                            112 == (112 & e[2]) &&
                            (15 & e[2]) > 1 &&
                            (15 & e[2]) < 15 &&
                            ((e[1].z = n.dateNF || q._table[14]),
                            n.cellDates &&
                              ((e[1].t = "d"), (e[1].v = K(e[1].v)))),
                            n.dense
                              ? (i[e[0].r] || (i[e[0].r] = []),
                                (i[e[0].r][e[0].c] = e[1]))
                              : (i[Ke(e[0])] = e[1]);
                      }
                    else
                      switch (s) {
                        case 22:
                          e[1].v = e[1].v.slice(1);
                        case 23:
                        case 24:
                        case 25:
                        case 37:
                        case 39:
                        case 40:
                          if (
                            (e[3] > o &&
                              ((i["!ref"] = Je(d)),
                              (l[r] = i),
                              (i = n.dense ? [] : {}),
                              (d = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                              (o = e[3]),
                              (r = "Sheet" + (o + 1)),
                              c.push(r)),
                            u > 0 && e[0].r >= u)
                          )
                            break;
                          n.dense
                            ? (i[e[0].r] || (i[e[0].r] = []),
                              (i[e[0].r][e[0].c] = e[1]))
                            : (i[Ke(e[0])] = e[1]),
                            d.e.c < e[0].c && (d.e.c = e[0].c),
                            d.e.r < e[0].r && (d.e.r = e[0].r);
                      }
                  },
                  n
                ),
                (i["!ref"] = Je(d)),
                (l[r] = i),
                { SheetNames: c, Sheets: l }
              );
            }
            function e(t, e, n) {
              var i = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
              return (
                n.qpro && 20768 != n.vers
                  ? ((i[0].c = t.read_shift(1)),
                    t.l++,
                    (i[0].r = t.read_shift(2)),
                    (t.l += 2))
                  : ((i[2] = t.read_shift(1)),
                    (i[0].c = t.read_shift(2)),
                    (i[0].r = t.read_shift(2))),
                i
              );
            }
            function n(t, n, i) {
              var r = t.l + n,
                o = e(t, 0, i);
              if (((o[1].t = "s"), 20768 == i.vers)) {
                t.l++;
                var a = t.read_shift(1);
                return (o[1].v = t.read_shift(a, "utf8")), o;
              }
              return (
                i.qpro && t.l++, (o[1].v = t.read_shift(r - t.l, "cstr")), o
              );
            }
            function i(t) {
              var e = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
              return (
                (e[0].r = t.read_shift(2)),
                (e[3] = t[t.l++]),
                (e[0].c = t[t.l++]),
                e
              );
            }
            function r(t, e) {
              var n = i(t),
                r = t.read_shift(4),
                o = t.read_shift(4),
                a = t.read_shift(2);
              if (65535 == a) return (n[1].v = 0), n;
              var s = 32768 & a;
              return (
                (a = (32767 & a) - 16446),
                (n[1].v =
                  (2 * s - 1) *
                  ((a > 0 ? o << a : o >>> -a) +
                    (a > -32 ? r << (a + 32) : r >>> -(a + 32)))),
                n
              );
            }
            function o(t, e) {
              var n = i(t),
                r = t.read_shift(8, "f");
              return (n[1].v = r), n;
            }
            var a = {
                0: { n: "BOF", f: Li },
                1: { n: "EOF" },
                2: { n: "CALCMODE" },
                3: { n: "CALCORDER" },
                4: { n: "SPLIT" },
                5: { n: "SYNC" },
                6: {
                  n: "RANGE",
                  f: function (t) {
                    var e = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
                    return (
                      (e.s.c = t.read_shift(2)),
                      (e.s.r = t.read_shift(2)),
                      (e.e.c = t.read_shift(2)),
                      (e.e.r = t.read_shift(2)),
                      65535 == e.s.c && (e.s.c = e.e.c = e.s.r = e.e.r = 0),
                      e
                    );
                  },
                },
                7: { n: "WINDOW1" },
                8: { n: "COLW1" },
                9: { n: "WINTWO" },
                10: { n: "COLW2" },
                11: { n: "NAME" },
                12: { n: "BLANK" },
                13: {
                  n: "INTEGER",
                  f: function (t, n, i) {
                    var r = e(t, 0, i);
                    return (r[1].v = t.read_shift(2, "i")), r;
                  },
                },
                14: {
                  n: "NUMBER",
                  f: function (t, n, i) {
                    var r = e(t, 0, i);
                    return (r[1].v = t.read_shift(8, "f")), r;
                  },
                },
                15: { n: "LABEL", f: n },
                16: {
                  n: "FORMULA",
                  f: function (t, n, i) {
                    var r = t.l + n,
                      o = e(t, 0, i);
                    if (((o[1].v = t.read_shift(8, "f")), i.qpro)) t.l = r;
                    else {
                      var a = t.read_shift(2);
                      t.l += a;
                    }
                    return o;
                  },
                },
                24: { n: "TABLE" },
                25: { n: "ORANGE" },
                26: { n: "PRANGE" },
                27: { n: "SRANGE" },
                28: { n: "FRANGE" },
                29: { n: "KRANGE1" },
                32: { n: "HRANGE" },
                35: { n: "KRANGE2" },
                36: { n: "PROTEC" },
                37: { n: "FOOTER" },
                38: { n: "HEADER" },
                39: { n: "SETUP" },
                40: { n: "MARGINS" },
                41: { n: "LABELFMT" },
                42: { n: "TITLES" },
                43: { n: "SHEETJS" },
                45: { n: "GRAPH" },
                46: { n: "NGRAPH" },
                47: { n: "CALCCOUNT" },
                48: { n: "UNFORMATTED" },
                49: { n: "CURSORW12" },
                50: { n: "WINDOW" },
                51: { n: "STRING", f: n },
                55: { n: "PASSWORD" },
                56: { n: "LOCKED" },
                60: { n: "QUERY" },
                61: { n: "QUERYNAME" },
                62: { n: "PRINT" },
                63: { n: "PRINTNAME" },
                64: { n: "GRAPH2" },
                65: { n: "GRAPHNAME" },
                66: { n: "ZOOM" },
                67: { n: "SYMSPLIT" },
                68: { n: "NSROWS" },
                69: { n: "NSCOLS" },
                70: { n: "RULER" },
                71: { n: "NNAME" },
                72: { n: "ACOMM" },
                73: { n: "AMACRO" },
                74: { n: "PARSE" },
                255: { n: "", f: je },
              },
              s = {
                0: { n: "BOF" },
                1: { n: "EOF" },
                3: { n: "??" },
                4: { n: "??" },
                5: { n: "??" },
                6: { n: "??" },
                7: { n: "??" },
                9: { n: "??" },
                10: { n: "??" },
                11: { n: "??" },
                12: { n: "??" },
                14: { n: "??" },
                15: { n: "??" },
                16: { n: "??" },
                17: { n: "??" },
                18: { n: "??" },
                19: { n: "??" },
                21: { n: "??" },
                22: {
                  n: "LABEL16",
                  f: function (t, e) {
                    var n = i(t);
                    return (
                      (n[1].t = "s"), (n[1].v = t.read_shift(e - 4, "cstr")), n
                    );
                  },
                },
                23: { n: "NUMBER17", f: r },
                24: {
                  n: "NUMBER18",
                  f: function (t, e) {
                    var n = i(t);
                    n[1].v = t.read_shift(2);
                    var r = n[1].v >> 1;
                    if (1 & n[1].v)
                      switch (7 & r) {
                        case 1:
                          r = 500 * (r >> 3);
                          break;
                        case 2:
                          r = (r >> 3) / 20;
                          break;
                        case 4:
                          r = (r >> 3) / 2e3;
                          break;
                        case 6:
                          r = (r >> 3) / 16;
                          break;
                        case 7:
                          r = (r >> 3) / 64;
                          break;
                        default:
                          throw "unknown NUMBER_18 encoding " + (7 & r);
                      }
                    return (n[1].v = r), n;
                  },
                },
                25: {
                  n: "FORMULA19",
                  f: function (t, e) {
                    var n = r(t);
                    return (t.l += e - 14), n;
                  },
                },
                26: { n: "??" },
                27: { n: "??" },
                28: { n: "??" },
                29: { n: "??" },
                30: { n: "??" },
                31: { n: "??" },
                33: { n: "??" },
                37: {
                  n: "NUMBER25",
                  f: function (t, e) {
                    var n = i(t),
                      r = t.read_shift(4);
                    return (n[1].v = r >> 6), n;
                  },
                },
                39: { n: "NUMBER27", f: o },
                40: {
                  n: "FORMULA28",
                  f: function (t, e) {
                    var n = o(t);
                    return (t.l += e - 10), n;
                  },
                },
                255: { n: "", f: je },
              };
            return {
              to_workbook: function (e, n) {
                switch (n.type) {
                  case "base64":
                    return t(z(y.decode(e)), n);
                  case "binary":
                    return t(z(e), n);
                  case "buffer":
                  case "array":
                    return t(e, n);
                }
                throw "Unsupported type " + n.type;
              },
            };
          })(),
          Tr = (function () {
            var t = Ft("t"),
              e = Ft("rPr"),
              n = /<(?:\w+:)?r>/g,
              i = /<\/(?:\w+:)?r>/,
              r = /\r\n/g;
            function o(n) {
              var i = [[], "", []],
                o = n.match(t);
              if (!o) return "";
              i[1] = o[1];
              var a = n.match(e);
              return (
                a &&
                  (function (t, e, n) {
                    var i = {},
                      r = "",
                      o = !1,
                      a = t.match(mt),
                      s = 0;
                    if (a)
                      for (; s != a.length; ++s) {
                        var l = _t(a[s]);
                        switch (l[0].replace(/\w*:/g, "")) {
                          case "<condense":
                          case "<extend":
                            break;
                          case "<shadow":
                            if (!l.val) break;
                          case "<shadow>":
                          case "<shadow/>":
                            i.shadow = 1;
                            break;
                          case "</shadow>":
                            break;
                          case "<charset":
                            if ("1" == l.val) break;
                            u[parseInt(l.val, 10)];
                            break;
                          case "<outline":
                            if (!l.val) break;
                          case "<outline>":
                          case "<outline/>":
                            i.outline = 1;
                            break;
                          case "</outline>":
                            break;
                          case "<rFont":
                            i.name = l.val;
                            break;
                          case "<sz":
                            i.sz = l.val;
                            break;
                          case "<strike":
                            if (!l.val) break;
                          case "<strike>":
                          case "<strike/>":
                            i.strike = 1;
                            break;
                          case "</strike>":
                            break;
                          case "<u":
                            if (!l.val) break;
                            switch (l.val) {
                              case "double":
                                i.uval = "double";
                                break;
                              case "singleAccounting":
                                i.uval = "single-accounting";
                                break;
                              case "doubleAccounting":
                                i.uval = "double-accounting";
                            }
                          case "<u>":
                          case "<u/>":
                            i.u = 1;
                            break;
                          case "</u>":
                            break;
                          case "<b":
                            if ("0" == l.val) break;
                          case "<b>":
                          case "<b/>":
                            i.b = 1;
                            break;
                          case "</b>":
                            break;
                          case "<i":
                            if ("0" == l.val) break;
                          case "<i>":
                          case "<i/>":
                            i.i = 1;
                            break;
                          case "</i>":
                            break;
                          case "<color":
                            l.rgb && (i.color = l.rgb.slice(2, 8));
                            break;
                          case "<family":
                            i.family = l.val;
                            break;
                          case "<vertAlign":
                            r = l.val;
                            break;
                          case "<scheme":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<ext":
                            o = !0;
                            break;
                          case "</ext>":
                            o = !1;
                            break;
                          default:
                            if (47 !== l[0].charCodeAt(1) && !o)
                              throw new Error(
                                "Unrecognized rich format " + l[0]
                              );
                        }
                      }
                    var c = [];
                    i.u && c.push("text-decoration: underline;"),
                      i.uval && c.push("text-underline-style:" + i.uval + ";"),
                      i.sz && c.push("font-size:" + i.sz + "pt;"),
                      i.outline && c.push("text-effect: outline;"),
                      i.shadow && c.push("text-shadow: auto;"),
                      e.push('<span style="' + c.join("") + '">'),
                      i.b && (e.push("<b>"), n.push("</b>")),
                      i.i && (e.push("<i>"), n.push("</i>")),
                      i.strike && (e.push("<s>"), n.push("</s>")),
                      "superscript" == r
                        ? (r = "sup")
                        : "subscript" == r && (r = "sub"),
                      "" != r &&
                        (e.push("<" + r + ">"), n.push("</" + r + ">")),
                      n.push("</span>");
                  })(a[1], i[0], i[2]),
                i[0].join("") + i[1].replace(r, "<br/>") + i[2].join("")
              );
            }
            return function (t) {
              return t.replace(n, "").split(i).map(o).join("");
            };
          })(),
          Dr = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
          Lr = /<(?:\w+:)?r>/,
          qr = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
        function Er(t, e) {
          var n = !e || e.cellHTML,
            i = {};
          return t
            ? (t.match(/^\s*<(?:\w+:)?t[^>]*>/)
                ? ((i.t = xt(
                    Et(
                      t.slice(t.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] ||
                        ""
                    )
                  )),
                  (i.r = Et(t)),
                  n && (i.h = Dt(i.t)))
                : t.match(Lr) &&
                  ((i.r = Et(t)),
                  (i.t = xt(
                    Et(
                      (t.replace(qr, "").match(Dr) || [])
                        .join("")
                        .replace(mt, "")
                    )
                  )),
                  n && (i.h = Tr(i.r))),
              i)
            : null;
        }
        var jr = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
          Pr = /<(?:\w+:)?(?:si|sstItem)>/g,
          Rr = /<\/(?:\w+:)?(?:si|sstItem)>/;
        Yn.SST =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
        var Ir = /^\s|\s$|[\t\n\r]/;
        function Wr(t, e) {
          if (!e.bookSST) return "";
          var n = [ft];
          n[n.length] = Zt("sst", null, {
            xmlns: ee.main[0],
            count: t.Count,
            uniqueCount: t.Unique,
          });
          for (var i = 0; i != t.length; ++i)
            if (null != t[i]) {
              var r = t[i],
                o = "<si>";
              r.r
                ? (o += r.r)
                : ((o += "<t"),
                  r.t || (r.t = ""),
                  r.t.match(Ir) && (o += ' xml:space="preserve"'),
                  (o += ">" + kt(r.t) + "</t>")),
                (o += "</si>"),
                (n[n.length] = o);
            }
          return (
            n.length > 2 &&
              ((n[n.length] = "</sst>"), (n[1] = n[1].replace("/>", ">"))),
            n.join("")
          );
        }
        var Nr = function (t, e) {
          var n = !1;
          return (
            null == e && ((n = !0), (e = Pe(15 + 4 * t.t.length))),
            e.write_shift(1, 0),
            sn(t.t, e),
            n ? e.slice(0, e.l) : e
          );
        };
        function Br(t) {
          var e = Ie();
          We(
            e,
            "BrtBeginSst",
            (function (t, e) {
              return (
                e || (e = Pe(8)),
                e.write_shift(4, t.Count),
                e.write_shift(4, t.Unique),
                e
              );
            })(t)
          );
          for (var n = 0; n < t.length; ++n) We(e, "BrtSSTItem", Nr(t[n]));
          return We(e, "BrtEndSst"), e.end();
        }
        function Fr(t) {
          if ("undefined" != typeof cptable) return cptable.utils.encode(l, t);
          for (var e = [], n = t.split(""), i = 0; i < n.length; ++i)
            e[i] = n[i].charCodeAt(0);
          return e;
        }
        function $r(t, e) {
          var n = {};
          return (
            (n.Major = t.read_shift(2)),
            (n.Minor = t.read_shift(2)),
            e >= 4 && (t.l += e - 4),
            n
          );
        }
        function Hr(t) {
          for (
            var e = t.read_shift(4),
              n = t.l + e - 4,
              i = {},
              r = t.read_shift(4),
              o = [];
            r-- > 0;

          )
            o.push({ t: t.read_shift(4), v: t.read_shift(0, "lpp4") });
          if (((i.name = t.read_shift(0, "lpp4")), (i.comps = o), t.l != n))
            throw new Error("Bad DataSpaceMapEntry: " + t.l + " != " + n);
          return i;
        }
        function Yr(t, e) {
          var n = t.l + e,
            i = {};
          (i.Flags = 63 & t.read_shift(4)),
            (t.l += 4),
            (i.AlgID = t.read_shift(4));
          var r = !1;
          switch (i.AlgID) {
            case 26126:
            case 26127:
            case 26128:
              r = 36 == i.Flags;
              break;
            case 26625:
              r = 4 == i.Flags;
              break;
            case 0:
              r = 16 == i.Flags || 4 == i.Flags || 36 == i.Flags;
              break;
            default:
              throw "Unrecognized encryption algorithm: " + i.AlgID;
          }
          if (!r) throw new Error("Encryption Flags/AlgID mismatch");
          return (
            (i.AlgIDHash = t.read_shift(4)),
            (i.KeySize = t.read_shift(4)),
            (i.ProviderType = t.read_shift(4)),
            (t.l += 8),
            (i.CSPName = t.read_shift((n - t.l) >> 1, "utf16le")),
            (t.l = n),
            i
          );
        }
        function Ur(t, e) {
          var n = {},
            i = t.l + e;
          return (
            (t.l += 4),
            (n.Salt = t.slice(t.l, t.l + 16)),
            (t.l += 16),
            (n.Verifier = t.slice(t.l, t.l + 16)),
            (t.l += 16),
            t.read_shift(4),
            (n.VerifierHash = t.slice(t.l, i)),
            (t.l = i),
            n
          );
        }
        function Xr(t) {
          if (36 != (63 & t.read_shift(4)))
            throw new Error("EncryptionInfo mismatch");
          var e = t.read_shift(4);
          return { t: "Std", h: Yr(t, e), v: Ur(t, t.length - t.l) };
        }
        function Vr() {
          throw new Error("File is password-protected: ECMA-376 Extensible");
        }
        function Gr(t) {
          var e = [
            "saltSize",
            "blockSize",
            "keyBits",
            "hashSize",
            "cipherAlgorithm",
            "cipherChaining",
            "hashAlgorithm",
            "saltValue",
          ];
          t.l += 4;
          var n = t.read_shift(t.length - t.l, "utf8"),
            i = {};
          return (
            n.replace(mt, function (t) {
              var n = _t(t);
              switch (yt(n[0])) {
                case "<?xml":
                  break;
                case "<encryption":
                case "</encryption>":
                  break;
                case "<keyData":
                  e.forEach(function (t) {
                    i[t] = n[t];
                  });
                  break;
                case "<dataIntegrity":
                  (i.encryptedHmacKey = n.encryptedHmacKey),
                    (i.encryptedHmacValue = n.encryptedHmacValue);
                  break;
                case "<keyEncryptors>":
                case "<keyEncryptors":
                  i.encs = [];
                  break;
                case "</keyEncryptors>":
                  break;
                case "<keyEncryptor":
                  i.uri = n.uri;
                  break;
                case "</keyEncryptor>":
                  break;
                case "<encryptedKey":
                  i.encs.push(n);
                  break;
                default:
                  throw n[0];
              }
            }),
            i
          );
        }
        function Kr(t) {
          var e,
            n,
            i = 0,
            r = Fr(t),
            o = r.length + 1;
          for ((e = A(o))[0] = r.length, n = 1; n != o; ++n) e[n] = r[n - 1];
          for (n = o - 1; n >= 0; --n)
            i = ((0 == (16384 & i) ? 0 : 1) | ((i << 1) & 32767)) ^ e[n];
          return 52811 ^ i;
        }
        var Zr,
          Jr,
          Qr,
          to,
          eo =
            ((Zr = [
              187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0,
            ]),
            (Jr = [
              57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657,
              54287, 34041, 10252, 43370, 20163,
            ]),
            (Qr = [
              44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170,
              64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812,
              11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369,
              41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341,
              19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502,
              43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184,
              47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648,
              1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114,
              2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128,
              28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420,
              35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314,
              18628,
            ]),
            (to = function (t, e) {
              return 255 & (((n = t ^ e) / 2) | (128 * n));
              var n;
            }),
            function (t) {
              for (
                var e,
                  n,
                  i,
                  r = Fr(t),
                  o = (function (t) {
                    for (
                      var e = Jr[t.length - 1], n = 104, i = t.length - 1;
                      i >= 0;
                      --i
                    )
                      for (var r = t[i], o = 0; 7 != o; ++o)
                        64 & r && (e ^= Qr[n]), (r *= 2), --n;
                    return e;
                  })(r),
                  a = r.length,
                  s = A(16),
                  l = 0;
                16 != l;
                ++l
              )
                s[l] = 0;
              for (
                1 == (1 & a) &&
                ((e = o >> 8),
                (s[a] = to(Zr[0], e)),
                --a,
                (e = 255 & o),
                (n = r[r.length - 1]),
                (s[a] = to(n, e)));
                a > 0;

              )
                (e = o >> 8),
                  (s[--a] = to(r[a], e)),
                  (e = 255 & o),
                  (s[--a] = to(r[a], e));
              for (a = 15, i = 15 - r.length; i > 0; )
                (e = o >> 8),
                  (s[a] = to(Zr[i], e)),
                  --i,
                  (e = 255 & o),
                  (s[--a] = to(r[a], e)),
                  --a,
                  --i;
              return s;
            }),
          no = (function () {
            function t(t, n) {
              switch (n.type) {
                case "base64":
                  return e(y.decode(t), n);
                case "binary":
                  return e(t, n);
                case "buffer":
                  return e(t.toString("binary"), n);
                case "array":
                  return e(et(t), n);
              }
              throw new Error("Unrecognized type " + n.type);
            }
            function e(t, e) {
              var n = (e || {}).dense ? [] : {};
              if (!t.match(/\\trowd/)) throw new Error("RTF missing table");
              return (
                (n["!ref"] = Je({ s: { c: 0, r: 0 }, e: { c: 0, r: 0 } })), n
              );
            }
            return {
              to_workbook: function (e, n) {
                return en(t(e, n), n);
              },
              to_sheet: t,
              from_sheet: function (t) {
                for (
                  var e,
                    n = ["{\\rtf1\\ansi"],
                    i = Qe(t["!ref"]),
                    r = Array.isArray(t),
                    o = i.s.r;
                  o <= i.e.r;
                  ++o
                ) {
                  n.push("\\trowd\\trautofit1");
                  for (var a = i.s.c; a <= i.e.c; ++a)
                    n.push("\\cellx" + (a + 1));
                  for (n.push("\\pard\\intbl"), a = i.s.c; a <= i.e.c; ++a) {
                    var s = Ke({ r: o, c: a });
                    (e = r ? (t[o] || [])[a] : t[s]) &&
                      (null != e.v || (e.f && !e.F)) &&
                      (n.push(" " + (e.w || (tn(e), e.w))), n.push("\\cell"));
                  }
                  n.push("\\pard\\intbl\\row");
                }
                return n.join("") + "}";
              },
            };
          })();
        function io(t) {
          for (var e = 0, n = 1; 3 != e; ++e)
            n = 256 * n + (t[e] > 255 ? 255 : t[e] < 0 ? 0 : t[e]);
          return n.toString(16).toUpperCase().slice(1);
        }
        function ro(t, e) {
          if (0 === e) return t;
          var n = (function (t) {
            var e = t[0] / 255,
              n = t[1] / 255,
              i = t[2] / 255,
              r = Math.max(e, n, i),
              o = Math.min(e, n, i),
              a = r - o;
            if (0 === a) return [0, 0, e];
            var s,
              l = 0,
              c = r + o;
            switch (((s = a / (c > 1 ? 2 - c : c)), r)) {
              case e:
                l = ((n - i) / a + 6) % 6;
                break;
              case n:
                l = (i - e) / a + 2;
                break;
              case i:
                l = (e - n) / a + 4;
            }
            return [l / 6, s, c / 2];
          })(
            (function (t) {
              var e = t.slice("#" === t[0] ? 1 : 0).slice(0, 6);
              return [
                parseInt(e.slice(0, 2), 16),
                parseInt(e.slice(2, 4), 16),
                parseInt(e.slice(4, 6), 16),
              ];
            })(t)
          );
          return (
            (n[2] = e < 0 ? n[2] * (1 + e) : 1 - (1 - n[2]) * (1 - e)),
            io(
              (function (t) {
                var e,
                  n = t[0],
                  i = t[1],
                  r = t[2],
                  o = 2 * i * (r < 0.5 ? r : 1 - r),
                  a = r - o / 2,
                  s = [a, a, a],
                  l = 6 * n;
                if (0 !== i)
                  switch (0 | l) {
                    case 0:
                    case 6:
                      (e = o * l), (s[0] += o), (s[1] += e);
                      break;
                    case 1:
                      (e = o * (2 - l)), (s[0] += e), (s[1] += o);
                      break;
                    case 2:
                      (e = o * (l - 2)), (s[1] += o), (s[2] += e);
                      break;
                    case 3:
                      (e = o * (4 - l)), (s[1] += e), (s[2] += o);
                      break;
                    case 4:
                      (e = o * (l - 4)), (s[2] += o), (s[0] += e);
                      break;
                    case 5:
                      (e = o * (6 - l)), (s[2] += e), (s[0] += o);
                  }
                for (var c = 0; 3 != c; ++c) s[c] = Math.round(255 * s[c]);
                return s;
              })(n)
            )
          );
        }
        var oo = 6;
        function ao(t) {
          return Math.floor((t + Math.round(128 / oo) / 256) * oo);
        }
        function so(t) {
          return Math.floor(((t - 5) / oo) * 100 + 0.5) / 100;
        }
        function lo(t) {
          return Math.round(((t * oo + 5) / oo) * 256) / 256;
        }
        function co(t) {
          return lo(so(ao(t)));
        }
        function uo(t) {
          var e = Math.abs(t - co(t)),
            n = oo;
          if (e > 0.005)
            for (oo = 1; oo < 15; ++oo)
              Math.abs(t - co(t)) <= e && ((e = Math.abs(t - co(t))), (n = oo));
          oo = n;
        }
        function po(t) {
          t.width
            ? ((t.wpx = ao(t.width)), (t.wch = so(t.wpx)), (t.MDW = oo))
            : t.wpx
            ? ((t.wch = so(t.wpx)), (t.width = lo(t.wch)), (t.MDW = oo))
            : "number" == typeof t.wch &&
              ((t.width = lo(t.wch)), (t.wpx = ao(t.width)), (t.MDW = oo)),
            t.customWidth && delete t.customWidth;
        }
        function ho(t) {
          return (96 * t) / 96;
        }
        function fo(t) {
          return (96 * t) / 96;
        }
        var bo,
          mo,
          go,
          vo,
          _o,
          yo = {
            None: "none",
            Solid: "solid",
            Gray50: "mediumGray",
            Gray75: "darkGray",
            Gray25: "lightGray",
            HorzStripe: "darkHorizontal",
            VertStripe: "darkVertical",
            ReverseDiagStripe: "darkDown",
            DiagStripe: "darkUp",
            DiagCross: "darkGrid",
            ThickDiagCross: "darkTrellis",
            ThinHorzStripe: "lightHorizontal",
            ThinVertStripe: "lightVertical",
            ThinReverseDiagStripe: "lightDown",
            ThinHorzCross: "lightGrid",
          },
          Mo = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
          Oo = [
            "applyAlignment",
            "applyBorder",
            "applyFill",
            "applyFont",
            "applyNumberFormat",
            "applyProtection",
            "pivotButton",
            "quotePrefix",
          ],
          wo =
            ((bo = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/),
            (mo = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/),
            (go = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/),
            (vo = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/),
            (_o = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/),
            function (t, e, n) {
              var i,
                r = {};
              return t
                ? ((i = (t = t
                    .replace(/<!--([\s\S]*?)-->/gm, "")
                    .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(bo)) &&
                    (function (t, e, n) {
                      e.NumberFmt = [];
                      for (var i = $(q._table), r = 0; r < i.length; ++r)
                        e.NumberFmt[i[r]] = q._table[i[r]];
                      var o = t[0].match(mt);
                      if (o)
                        for (r = 0; r < o.length; ++r) {
                          var a = _t(o[r]);
                          switch (yt(a[0])) {
                            case "<numFmts":
                            case "</numFmts>":
                            case "<numFmts/>":
                            case "<numFmts>":
                              break;
                            case "<numFmt":
                              var s = xt(Et(a.formatCode)),
                                l = parseInt(a.numFmtId, 10);
                              if (((e.NumberFmt[l] = s), l > 0)) {
                                if (l > 392) {
                                  for (
                                    l = 392;
                                    l > 60 && null != e.NumberFmt[l];
                                    --l
                                  );
                                  e.NumberFmt[l] = s;
                                }
                                q.load(s, l);
                              }
                              break;
                            case "</numFmt>":
                              break;
                            default:
                              if (n.WTF)
                                throw new Error(
                                  "unrecognized " + a[0] + " in numFmts"
                                );
                          }
                        }
                    })(i, r, n),
                  (i = t.match(vo)) &&
                    (function (t, e, n, i) {
                      e.Fonts = [];
                      var r = {},
                        o = !1;
                      t[0].match(mt).forEach(function (t) {
                        var a = _t(t);
                        switch (yt(a[0])) {
                          case "<fonts":
                          case "<fonts>":
                          case "</fonts>":
                            break;
                          case "<font":
                          case "<font>":
                            break;
                          case "</font>":
                          case "<font/>":
                            e.Fonts.push(r), (r = {});
                            break;
                          case "<name":
                            a.val && (r.name = a.val);
                            break;
                          case "<name/>":
                          case "</name>":
                            break;
                          case "<b":
                            r.bold = a.val ? qt(a.val) : 1;
                            break;
                          case "<b/>":
                            r.bold = 1;
                            break;
                          case "<i":
                            r.italic = a.val ? qt(a.val) : 1;
                            break;
                          case "<i/>":
                            r.italic = 1;
                            break;
                          case "<u":
                            switch (a.val) {
                              case "none":
                                r.underline = 0;
                                break;
                              case "single":
                                r.underline = 1;
                                break;
                              case "double":
                                r.underline = 2;
                                break;
                              case "singleAccounting":
                                r.underline = 33;
                                break;
                              case "doubleAccounting":
                                r.underline = 34;
                            }
                            break;
                          case "<u/>":
                            r.underline = 1;
                            break;
                          case "<strike":
                            r.strike = a.val ? qt(a.val) : 1;
                            break;
                          case "<strike/>":
                            r.strike = 1;
                            break;
                          case "<outline":
                            r.outline = a.val ? qt(a.val) : 1;
                            break;
                          case "<outline/>":
                            r.outline = 1;
                            break;
                          case "<shadow":
                            r.shadow = a.val ? qt(a.val) : 1;
                            break;
                          case "<shadow/>":
                            r.shadow = 1;
                            break;
                          case "<condense":
                            r.condense = a.val ? qt(a.val) : 1;
                            break;
                          case "<condense/>":
                            r.condense = 1;
                            break;
                          case "<extend":
                            r.extend = a.val ? qt(a.val) : 1;
                            break;
                          case "<extend/>":
                            r.extend = 1;
                            break;
                          case "<sz":
                            a.val && (r.sz = +a.val);
                            break;
                          case "<sz/>":
                          case "</sz>":
                            break;
                          case "<vertAlign":
                            a.val && (r.vertAlign = a.val);
                            break;
                          case "<vertAlign/>":
                          case "</vertAlign>":
                            break;
                          case "<family":
                            a.val && (r.family = parseInt(a.val, 10));
                            break;
                          case "<family/>":
                          case "</family>":
                            break;
                          case "<scheme":
                            a.val && (r.scheme = a.val);
                            break;
                          case "<scheme/>":
                          case "</scheme>":
                            break;
                          case "<charset":
                            if ("1" == a.val) break;
                            a.codepage = u[parseInt(a.val, 10)];
                            break;
                          case "<color":
                            if (
                              (r.color || (r.color = {}),
                              a.auto && (r.color.auto = qt(a.auto)),
                              a.rgb)
                            )
                              r.color.rgb = a.rgb.slice(-6);
                            else if (a.indexed) {
                              r.color.index = parseInt(a.indexed, 10);
                              var s = Wn[r.color.index];
                              if ((81 == r.color.index && (s = Wn[1]), !s))
                                throw new Error(t);
                              r.color.rgb =
                                s[0].toString(16) +
                                s[1].toString(16) +
                                s[2].toString(16);
                            } else
                              a.theme &&
                                ((r.color.theme = parseInt(a.theme, 10)),
                                a.tint && (r.color.tint = parseFloat(a.tint)),
                                a.theme &&
                                  n.themeElements &&
                                  n.themeElements.clrScheme &&
                                  (r.color.rgb = ro(
                                    n.themeElements.clrScheme[r.color.theme]
                                      .rgb,
                                    r.color.tint || 0
                                  )));
                            break;
                          case "<color/>":
                          case "</color>":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<ext":
                            o = !0;
                            break;
                          case "</ext>":
                            o = !1;
                            break;
                          default:
                            if (i && i.WTF && !o)
                              throw new Error(
                                "unrecognized " + a[0] + " in fonts"
                              );
                        }
                      });
                    })(i, r, e, n),
                  (i = t.match(go)) &&
                    (function (t, e, n, i) {
                      e.Fills = [];
                      var r = {},
                        o = !1;
                      t[0].match(mt).forEach(function (t) {
                        var n = _t(t);
                        switch (yt(n[0])) {
                          case "<fills":
                          case "<fills>":
                          case "</fills>":
                            break;
                          case "<fill>":
                          case "<fill":
                          case "<fill/>":
                            (r = {}), e.Fills.push(r);
                            break;
                          case "</fill>":
                          case "<gradientFill>":
                            break;
                          case "<gradientFill":
                          case "</gradientFill>":
                            e.Fills.push(r), (r = {});
                            break;
                          case "<patternFill":
                          case "<patternFill>":
                            n.patternType && (r.patternType = n.patternType);
                            break;
                          case "<patternFill/>":
                          case "</patternFill>":
                            break;
                          case "<bgColor":
                            r.bgColor || (r.bgColor = {}),
                              n.indexed &&
                                (r.bgColor.indexed = parseInt(n.indexed, 10)),
                              n.theme &&
                                (r.bgColor.theme = parseInt(n.theme, 10)),
                              n.tint && (r.bgColor.tint = parseFloat(n.tint)),
                              n.rgb && (r.bgColor.rgb = n.rgb.slice(-6));
                            break;
                          case "<bgColor/>":
                          case "</bgColor>":
                            break;
                          case "<fgColor":
                            r.fgColor || (r.fgColor = {}),
                              n.theme &&
                                (r.fgColor.theme = parseInt(n.theme, 10)),
                              n.tint && (r.fgColor.tint = parseFloat(n.tint)),
                              n.rgb && (r.fgColor.rgb = n.rgb.slice(-6));
                            break;
                          case "<fgColor/>":
                          case "</fgColor>":
                            break;
                          case "<stop":
                          case "<stop/>":
                          case "</stop>":
                            break;
                          case "<color":
                          case "<color/>":
                          case "</color>":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<ext":
                            o = !0;
                            break;
                          case "</ext>":
                            o = !1;
                            break;
                          default:
                            if (i && i.WTF && !o)
                              throw new Error(
                                "unrecognized " + n[0] + " in fills"
                              );
                        }
                      });
                    })(i, r, 0, n),
                  (i = t.match(_o)) &&
                    (function (t, e, n, i) {
                      e.Borders = [];
                      var r = {},
                        o = !1;
                      t[0].match(mt).forEach(function (t) {
                        var n = _t(t);
                        switch (yt(n[0])) {
                          case "<borders":
                          case "<borders>":
                          case "</borders>":
                            break;
                          case "<border":
                          case "<border>":
                          case "<border/>":
                            (r = {}),
                              n.diagonalUp && (r.diagonalUp = n.diagonalUp),
                              n.diagonalDown &&
                                (r.diagonalDown = n.diagonalDown),
                              e.Borders.push(r);
                            break;
                          case "</border>":
                          case "<left/>":
                            break;
                          case "<left":
                          case "<left>":
                          case "</left>":
                          case "<right/>":
                            break;
                          case "<right":
                          case "<right>":
                          case "</right>":
                          case "<top/>":
                            break;
                          case "<top":
                          case "<top>":
                          case "</top>":
                          case "<bottom/>":
                            break;
                          case "<bottom":
                          case "<bottom>":
                          case "</bottom>":
                            break;
                          case "<diagonal":
                          case "<diagonal>":
                          case "<diagonal/>":
                          case "</diagonal>":
                            break;
                          case "<horizontal":
                          case "<horizontal>":
                          case "<horizontal/>":
                          case "</horizontal>":
                            break;
                          case "<vertical":
                          case "<vertical>":
                          case "<vertical/>":
                          case "</vertical>":
                            break;
                          case "<start":
                          case "<start>":
                          case "<start/>":
                          case "</start>":
                            break;
                          case "<end":
                          case "<end>":
                          case "<end/>":
                          case "</end>":
                            break;
                          case "<color":
                          case "<color>":
                            break;
                          case "<color/>":
                          case "</color>":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<ext":
                            o = !0;
                            break;
                          case "</ext>":
                            o = !1;
                            break;
                          default:
                            if (i && i.WTF && !o)
                              throw new Error(
                                "unrecognized " + n[0] + " in borders"
                              );
                        }
                      });
                    })(i, r, 0, n),
                  (i = t.match(mo)) &&
                    (function (t, e, n) {
                      var i;
                      e.CellXf = [];
                      var r = !1;
                      t[0].match(mt).forEach(function (t) {
                        var o = _t(t),
                          a = 0;
                        switch (yt(o[0])) {
                          case "<cellXfs":
                          case "<cellXfs>":
                          case "<cellXfs/>":
                          case "</cellXfs>":
                            break;
                          case "<xf":
                          case "<xf/>":
                            for (delete (i = o)[0], a = 0; a < Mo.length; ++a)
                              i[Mo[a]] && (i[Mo[a]] = parseInt(i[Mo[a]], 10));
                            for (a = 0; a < Oo.length; ++a)
                              i[Oo[a]] && (i[Oo[a]] = qt(i[Oo[a]]));
                            if (i.numFmtId > 392)
                              for (a = 392; a > 60; --a)
                                if (e.NumberFmt[i.numFmtId] == e.NumberFmt[a]) {
                                  i.numFmtId = a;
                                  break;
                                }
                            e.CellXf.push(i);
                            break;
                          case "</xf>":
                            break;
                          case "<alignment":
                          case "<alignment/>":
                            var s = {};
                            o.vertical && (s.vertical = o.vertical),
                              o.horizontal && (s.horizontal = o.horizontal),
                              null != o.textRotation &&
                                (s.textRotation = o.textRotation),
                              o.indent && (s.indent = o.indent),
                              o.wrapText && (s.wrapText = o.wrapText),
                              (i.alignment = s);
                            break;
                          case "</alignment>":
                            break;
                          case "<protection":
                          case "</protection>":
                          case "<protection/>":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<ext":
                            r = !0;
                            break;
                          case "</ext>":
                            r = !1;
                            break;
                          default:
                            if (n && n.WTF && !r)
                              throw new Error(
                                "unrecognized " + o[0] + " in cellXfs"
                              );
                        }
                      });
                    })(i, r, n),
                  r)
                : r;
            }),
          Ao = Zt("styleSheet", null, { xmlns: ee.main[0], "xmlns:vt": ee.vt });
        function xo(t, e) {
          var n,
            i = [ft, Ao];
          return (
            t.SSF &&
              null !=
                (n = (function (t) {
                  var e = ["<numFmts>"];
                  return (
                    [
                      [5, 8],
                      [23, 26],
                      [41, 44],
                      [50, 392],
                    ].forEach(function (n) {
                      for (var i = n[0]; i <= n[1]; ++i)
                        null != t[i] &&
                          (e[e.length] = Zt("numFmt", null, {
                            numFmtId: i,
                            formatCode: kt(t[i]),
                          }));
                    }),
                    1 === e.length
                      ? ""
                      : ((e[e.length] = "</numFmts>"),
                        (e[0] = Zt("numFmts", null, {
                          count: e.length - 2,
                        }).replace("/>", ">")),
                        e.join(""))
                  );
                })(t.SSF)) &&
              (i[i.length] = n),
            (i[i.length] =
              '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
            (i[i.length] =
              '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
            (i[i.length] =
              '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
            (i[i.length] =
              '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
            (n = (function (t) {
              var e = [];
              return (
                (e[e.length] = Zt("cellXfs", null)),
                t.forEach(function (t) {
                  e[e.length] = Zt("xf", null, t);
                }),
                (e[e.length] = "</cellXfs>"),
                2 === e.length
                  ? ""
                  : ((e[0] = Zt("cellXfs", null, {
                      count: e.length - 2,
                    }).replace("/>", ">")),
                    e.join(""))
              );
            })(e.cellXfs)) && (i[i.length] = n),
            (i[i.length] =
              '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
            (i[i.length] = '<dxfs count="0"/>'),
            (i[i.length] =
              '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
            i.length > 2 &&
              ((i[i.length] = "</styleSheet>"),
              (i[1] = i[1].replace("/>", ">"))),
            i.join("")
          );
        }
        function zo(t, e, n) {
          n || (n = Pe(6 + 4 * e.length)), n.write_shift(2, t), sn(e, n);
          var i = n.length > n.l ? n.slice(0, n.l) : n;
          return null == n.l && (n.l = n.length), i;
        }
        Yn.STY =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
        var Co = Y([
            "none",
            "solid",
            "mediumGray",
            "darkGray",
            "lightGray",
            "darkHorizontal",
            "darkVertical",
            "darkDown",
            "darkUp",
            "darkGrid",
            "darkTrellis",
            "lightHorizontal",
            "lightVertical",
            "lightDown",
            "lightUp",
            "lightGrid",
            "lightTrellis",
            "gray125",
            "gray0625",
          ]),
          ko = je;
        function So(t, e) {
          e || (e = Pe(84));
          var n = Co[t.patternType];
          null == n && (n = 40), e.write_shift(4, n);
          var i = 0;
          if (40 != n)
            for (kn({ auto: 1 }, e), kn({ auto: 1 }, e); i < 12; ++i)
              e.write_shift(4, 0);
          else {
            for (; i < 4; ++i) e.write_shift(4, 0);
            for (; i < 12; ++i) e.write_shift(4, 0);
          }
          return e.length > e.l ? e.slice(0, e.l) : e;
        }
        function To(t, e, n) {
          return (
            n || (n = Pe(16)),
            n.write_shift(2, e || 0),
            n.write_shift(2, t.numFmtId || 0),
            n.write_shift(2, 0),
            n.write_shift(2, 0),
            n.write_shift(2, 0),
            n.write_shift(1, 0),
            n.write_shift(1, 0),
            n.write_shift(1, 0),
            n.write_shift(1, 0),
            n.write_shift(1, 0),
            n.write_shift(1, 0),
            n
          );
        }
        function Do(t, e) {
          return (
            e || (e = Pe(10)),
            e.write_shift(1, 0),
            e.write_shift(1, 0),
            e.write_shift(4, 0),
            e.write_shift(4, 0),
            e
          );
        }
        var Lo = je;
        function qo(t, e) {
          var n = Ie();
          return (
            We(n, "BrtBeginStyleSheet"),
            (function (t, e) {
              if (e) {
                var n = 0;
                [
                  [5, 8],
                  [23, 26],
                  [41, 44],
                  [50, 392],
                ].forEach(function (t) {
                  for (var i = t[0]; i <= t[1]; ++i) null != e[i] && ++n;
                }),
                  0 != n &&
                    (We(t, "BrtBeginFmts", on(n)),
                    [
                      [5, 8],
                      [23, 26],
                      [41, 44],
                      [50, 392],
                    ].forEach(function (n) {
                      for (var i = n[0]; i <= n[1]; ++i)
                        null != e[i] && We(t, "BrtFmt", zo(i, e[i]));
                    }),
                    We(t, "BrtEndFmts"));
              }
            })(n, t.SSF),
            (function (t) {
              We(t, "BrtBeginFonts", on(1)),
                We(
                  t,
                  "BrtFont",
                  (function (t, e) {
                    e || (e = Pe(153)),
                      e.write_shift(2, 20 * t.sz),
                      (function (t, e) {
                        e || (e = Pe(2));
                        var n =
                          (t.italic ? 2 : 0) |
                          (t.strike ? 8 : 0) |
                          (t.outline ? 16 : 0) |
                          (t.shadow ? 32 : 0) |
                          (t.condense ? 64 : 0) |
                          (t.extend ? 128 : 0);
                        e.write_shift(1, n), e.write_shift(1, 0);
                      })(t, e),
                      e.write_shift(2, t.bold ? 700 : 400);
                    var n = 0;
                    "superscript" == t.vertAlign
                      ? (n = 1)
                      : "subscript" == t.vertAlign && (n = 2),
                      e.write_shift(2, n),
                      e.write_shift(1, t.underline || 0),
                      e.write_shift(1, t.family || 0),
                      e.write_shift(1, t.charset || 0),
                      e.write_shift(1, 0),
                      kn(t.color, e);
                    var i = 0;
                    return (
                      "major" == t.scheme && (i = 1),
                      "minor" == t.scheme && (i = 2),
                      e.write_shift(1, i),
                      sn(t.name, e),
                      e.length > e.l ? e.slice(0, e.l) : e
                    );
                  })({
                    sz: 12,
                    color: { theme: 1 },
                    name: "Calibri",
                    family: 2,
                    scheme: "minor",
                  })
                ),
                We(t, "BrtEndFonts");
            })(n),
            (function (t) {
              We(t, "BrtBeginFills", on(2)),
                We(t, "BrtFill", So({ patternType: "none" })),
                We(t, "BrtFill", So({ patternType: "gray125" })),
                We(t, "BrtEndFills");
            })(n),
            (function (t) {
              We(t, "BrtBeginBorders", on(1)),
                We(
                  t,
                  "BrtBorder",
                  (function (t, e) {
                    return (
                      e || (e = Pe(51)),
                      e.write_shift(1, 0),
                      Do(0, e),
                      Do(0, e),
                      Do(0, e),
                      Do(0, e),
                      Do(0, e),
                      e.length > e.l ? e.slice(0, e.l) : e
                    );
                  })()
                ),
                We(t, "BrtEndBorders");
            })(n),
            (function (t) {
              We(t, "BrtBeginCellStyleXFs", on(1)),
                We(
                  t,
                  "BrtXF",
                  To({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)
                ),
                We(t, "BrtEndCellStyleXFs");
            })(n),
            (function (t, e) {
              We(t, "BrtBeginCellXFs", on(e.length)),
                e.forEach(function (e) {
                  We(t, "BrtXF", To(e, 0));
                }),
                We(t, "BrtEndCellXFs");
            })(n, e.cellXfs),
            (function (t) {
              We(t, "BrtBeginStyles", on(1)),
                We(
                  t,
                  "BrtStyle",
                  (function (t, e) {
                    return (
                      e || (e = Pe(52)),
                      e.write_shift(4, t.xfId),
                      e.write_shift(2, 1),
                      e.write_shift(1, +t.builtinId),
                      e.write_shift(1, 0),
                      mn(t.name || "", e),
                      e.length > e.l ? e.slice(0, e.l) : e
                    );
                  })({ xfId: 0, builtinId: 0, name: "Normal" })
                ),
                We(t, "BrtEndStyles");
            })(n),
            (function (t) {
              We(t, "BrtBeginDXFs", on(0)), We(t, "BrtEndDXFs");
            })(n),
            (function (t) {
              We(
                t,
                "BrtBeginTableStyles",
                (function (t, e, n) {
                  var i = Pe(2052);
                  return (
                    i.write_shift(4, 0),
                    mn("TableStyleMedium9", i),
                    mn("PivotStyleMedium4", i),
                    i.length > i.l ? i.slice(0, i.l) : i
                  );
                })()
              ),
                We(t, "BrtEndTableStyles");
            })(n),
            We(n, "BrtEndStyleSheet"),
            n.end()
          );
        }
        function Eo(t, e, n) {
          e.themeElements.clrScheme = [];
          var i = {};
          (t[0].match(mt) || []).forEach(function (t) {
            var r = _t(t);
            switch (r[0]) {
              case "<a:clrScheme":
              case "</a:clrScheme>":
                break;
              case "<a:srgbClr":
                i.rgb = r.val;
                break;
              case "<a:sysClr":
                i.rgb = r.lastClr;
                break;
              case "<a:dk1>":
              case "</a:dk1>":
              case "<a:lt1>":
              case "</a:lt1>":
              case "<a:dk2>":
              case "</a:dk2>":
              case "<a:lt2>":
              case "</a:lt2>":
              case "<a:accent1>":
              case "</a:accent1>":
              case "<a:accent2>":
              case "</a:accent2>":
              case "<a:accent3>":
              case "</a:accent3>":
              case "<a:accent4>":
              case "</a:accent4>":
              case "<a:accent5>":
              case "</a:accent5>":
              case "<a:accent6>":
              case "</a:accent6>":
              case "<a:hlink>":
              case "</a:hlink>":
              case "<a:folHlink>":
              case "</a:folHlink>":
                "/" === r[0].charAt(1)
                  ? (e.themeElements.clrScheme.push(i), (i = {}))
                  : (i.name = r[0].slice(3, r[0].length - 1));
                break;
              default:
                if (n && n.WTF)
                  throw new Error("Unrecognized " + r[0] + " in clrScheme");
            }
          });
        }
        function jo() {}
        function Po() {}
        Yn.THEME =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
        var Ro = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
          Io = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
          Wo = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/,
          No = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
        function Bo(t, e) {
          if (!t || 0 === t.length) return Bo(Fo());
          var n,
            i = {};
          if (!(n = t.match(No)))
            throw new Error("themeElements not found in theme");
          return (
            (function (t, e, n) {
              var i;
              (e.themeElements = {}),
                [
                  ["clrScheme", Ro, Eo],
                  ["fontScheme", Io, jo],
                  ["fmtScheme", Wo, Po],
                ].forEach(function (r) {
                  if (!(i = t.match(r[1])))
                    throw new Error(r[0] + " not found in themeElements");
                  r[2](i, e, n);
                });
            })(n[0], i, e),
            i
          );
        }
        function Fo(t, e) {
          if (e && e.themeXLSX) return e.themeXLSX;
          var n = [ft];
          return (
            (n[n.length] =
              '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
            (n[n.length] = "<a:themeElements>"),
            (n[n.length] = '<a:clrScheme name="Office">'),
            (n[n.length] =
              '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
            (n[n.length] =
              '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
            (n[n.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
            (n[n.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
            (n[n.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
            (n[n.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
            (n[n.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
            (n[n.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
            (n[n.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
            (n[n.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
            (n[n.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
            (n[n.length] =
              '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
            (n[n.length] = "</a:clrScheme>"),
            (n[n.length] = '<a:fontScheme name="Office">'),
            (n[n.length] = "<a:majorFont>"),
            (n[n.length] = '<a:latin typeface="Cambria"/>'),
            (n[n.length] = '<a:ea typeface=""/>'),
            (n[n.length] = '<a:cs typeface=""/>'),
            (n[n.length] =
              '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
            (n[n.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
            (n[n.length] = '<a:font script="Hans" typeface="宋体"/>'),
            (n[n.length] = '<a:font script="Hant" typeface="新細明體"/>'),
            (n[n.length] =
              '<a:font script="Arab" typeface="Times New Roman"/>'),
            (n[n.length] =
              '<a:font script="Hebr" typeface="Times New Roman"/>'),
            (n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
            (n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
            (n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
            (n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
            (n[n.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
            (n[n.length] = '<a:font script="Knda" typeface="Tunga"/>'),
            (n[n.length] = '<a:font script="Guru" typeface="Raavi"/>'),
            (n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
            (n[n.length] =
              '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
            (n[n.length] =
              '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
            (n[n.length] =
              '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
            (n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
            (n[n.length] = '<a:font script="Deva" typeface="Mangal"/>'),
            (n[n.length] = '<a:font script="Telu" typeface="Gautami"/>'),
            (n[n.length] = '<a:font script="Taml" typeface="Latha"/>'),
            (n[n.length] =
              '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
            (n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
            (n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
            (n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
            (n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
            (n[n.length] =
              '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
            (n[n.length] =
              '<a:font script="Viet" typeface="Times New Roman"/>'),
            (n[n.length] =
              '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
            (n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
            (n[n.length] = "</a:majorFont>"),
            (n[n.length] = "<a:minorFont>"),
            (n[n.length] = '<a:latin typeface="Calibri"/>'),
            (n[n.length] = '<a:ea typeface=""/>'),
            (n[n.length] = '<a:cs typeface=""/>'),
            (n[n.length] =
              '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
            (n[n.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
            (n[n.length] = '<a:font script="Hans" typeface="宋体"/>'),
            (n[n.length] = '<a:font script="Hant" typeface="新細明體"/>'),
            (n[n.length] = '<a:font script="Arab" typeface="Arial"/>'),
            (n[n.length] = '<a:font script="Hebr" typeface="Arial"/>'),
            (n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
            (n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
            (n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
            (n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
            (n[n.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
            (n[n.length] = '<a:font script="Knda" typeface="Tunga"/>'),
            (n[n.length] = '<a:font script="Guru" typeface="Raavi"/>'),
            (n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
            (n[n.length] =
              '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
            (n[n.length] =
              '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
            (n[n.length] =
              '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
            (n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
            (n[n.length] = '<a:font script="Deva" typeface="Mangal"/>'),
            (n[n.length] = '<a:font script="Telu" typeface="Gautami"/>'),
            (n[n.length] = '<a:font script="Taml" typeface="Latha"/>'),
            (n[n.length] =
              '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
            (n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
            (n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
            (n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
            (n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
            (n[n.length] =
              '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
            (n[n.length] = '<a:font script="Viet" typeface="Arial"/>'),
            (n[n.length] =
              '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
            (n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
            (n[n.length] = "</a:minorFont>"),
            (n[n.length] = "</a:fontScheme>"),
            (n[n.length] = '<a:fmtScheme name="Office">'),
            (n[n.length] = "<a:fillStyleLst>"),
            (n[n.length] =
              '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
            (n[n.length] = '<a:gradFill rotWithShape="1">'),
            (n[n.length] = "<a:gsLst>"),
            (n[n.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (n[n.length] = "</a:gsLst>"),
            (n[n.length] = '<a:lin ang="16200000" scaled="1"/>'),
            (n[n.length] = "</a:gradFill>"),
            (n[n.length] = '<a:gradFill rotWithShape="1">'),
            (n[n.length] = "<a:gsLst>"),
            (n[n.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (n[n.length] = "</a:gsLst>"),
            (n[n.length] = '<a:lin ang="16200000" scaled="0"/>'),
            (n[n.length] = "</a:gradFill>"),
            (n[n.length] = "</a:fillStyleLst>"),
            (n[n.length] = "<a:lnStyleLst>"),
            (n[n.length] =
              '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (n[n.length] =
              '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (n[n.length] =
              '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (n[n.length] = "</a:lnStyleLst>"),
            (n[n.length] = "<a:effectStyleLst>"),
            (n[n.length] = "<a:effectStyle>"),
            (n[n.length] = "<a:effectLst>"),
            (n[n.length] =
              '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
            (n[n.length] = "</a:effectLst>"),
            (n[n.length] = "</a:effectStyle>"),
            (n[n.length] = "<a:effectStyle>"),
            (n[n.length] = "<a:effectLst>"),
            (n[n.length] =
              '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
            (n[n.length] = "</a:effectLst>"),
            (n[n.length] = "</a:effectStyle>"),
            (n[n.length] = "<a:effectStyle>"),
            (n[n.length] = "<a:effectLst>"),
            (n[n.length] =
              '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
            (n[n.length] = "</a:effectLst>"),
            (n[n.length] =
              '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
            (n[n.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
            (n[n.length] = "</a:effectStyle>"),
            (n[n.length] = "</a:effectStyleLst>"),
            (n[n.length] = "<a:bgFillStyleLst>"),
            (n[n.length] =
              '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
            (n[n.length] = '<a:gradFill rotWithShape="1">'),
            (n[n.length] = "<a:gsLst>"),
            (n[n.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
            (n[n.length] = "</a:gsLst>"),
            (n[n.length] =
              '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
            (n[n.length] = "</a:gradFill>"),
            (n[n.length] = '<a:gradFill rotWithShape="1">'),
            (n[n.length] = "<a:gsLst>"),
            (n[n.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (n[n.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
            (n[n.length] = "</a:gsLst>"),
            (n[n.length] =
              '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
            (n[n.length] = "</a:gradFill>"),
            (n[n.length] = "</a:bgFillStyleLst>"),
            (n[n.length] = "</a:fmtScheme>"),
            (n[n.length] = "</a:themeElements>"),
            (n[n.length] = "<a:objectDefaults>"),
            (n[n.length] = "<a:spDef>"),
            (n[n.length] =
              '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
            (n[n.length] = "</a:spDef>"),
            (n[n.length] = "<a:lnDef>"),
            (n[n.length] =
              '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
            (n[n.length] = "</a:lnDef>"),
            (n[n.length] = "</a:objectDefaults>"),
            (n[n.length] = "<a:extraClrSchemeLst/>"),
            (n[n.length] = "</a:theme>"),
            n.join("")
          );
        }
        function $o(t) {
          var e = t.read_shift(2),
            n = t.read_shift(2) - 4,
            i = [e];
          switch (e) {
            case 4:
            case 5:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
              i[1] = (function (t) {
                var e = {};
                switch (
                  ((e.xclrType = t.read_shift(2)),
                  (e.nTintShade = t.read_shift(2)),
                  e.xclrType)
                ) {
                  case 0:
                    t.l += 4;
                    break;
                  case 1:
                    e.xclrValue = (function (t, e) {
                      return je(t, 4);
                    })(t);
                    break;
                  case 2:
                    e.xclrValue = $i(t);
                    break;
                  case 3:
                    e.xclrValue = (function (t) {
                      return t.read_shift(4);
                    })(t);
                    break;
                  case 4:
                    t.l += 4;
                }
                return (t.l += 8), e;
              })(t);
              break;
            case 6:
              i[1] = (function (t, e) {
                return je(t, e);
              })(t, n);
              break;
            case 14:
            case 15:
              i[1] = t.read_shift(1 === n ? 1 : 2);
              break;
            default:
              throw new Error("Unrecognized ExtProp type: " + e + " " + n);
          }
          return i;
        }
        (Yn.IMG =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"),
          (Yn.DRAW =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing");
        var Ho = 1024;
        function Yo(t, e) {
          for (
            var n = [21600, 21600],
              i = ["m0,0l0", n[1], n[0], n[1], n[0], "0xe"].join(","),
              r = [
                Zt("xml", null, {
                  "xmlns:v": "urn:schemas-microsoft-com:vml",
                  "xmlns:o": ne,
                  "xmlns:x": ie,
                  "xmlns:mv": "http://macVmlSchemaUri",
                }).replace(/\/>/, ">"),
                Zt(
                  "o:shapelayout",
                  Zt("o:idmap", null, { "v:ext": "edit", data: t }),
                  { "v:ext": "edit" }
                ),
                Zt(
                  "v:shapetype",
                  [
                    Zt("v:stroke", null, { joinstyle: "miter" }),
                    Zt("v:path", null, {
                      gradientshapeok: "t",
                      "o:connecttype": "rect",
                    }),
                  ].join(""),
                  {
                    id: "_x0000_t202",
                    "o:spt": 202,
                    coordsize: n.join(","),
                    path: i,
                  }
                ),
              ];
            Ho < 1e3 * t;

          )
            Ho += 1e3;
          return (
            e.forEach(function (t) {
              var e = Ge(t[0]);
              r = r.concat([
                "<v:shape" +
                  Kt({
                    id: "_x0000_s" + ++Ho,
                    type: "#_x0000_t202",
                    style:
                      "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
                      (t[1].hidden ? ";visibility:hidden" : ""),
                    fillcolor: "#ECFAD4",
                    strokecolor: "#edeaa1",
                  }) +
                  ">",
                Zt(
                  "v:fill",
                  Zt("o:fill", null, {
                    type: "gradientUnscaled",
                    "v:ext": "view",
                  }),
                  { color2: "#BEFF82", angle: "-180", type: "gradient" }
                ),
                Zt("v:shadow", null, { on: "t", obscured: "t" }),
                Zt("v:path", null, { "o:connecttype": "none" }),
                '<v:textbox><div style="text-align:left"></div></v:textbox>',
                '<x:ClientData ObjectType="Note">',
                "<x:MoveWithCells/>",
                "<x:SizeWithCells/>",
                Gt(
                  "x:Anchor",
                  [e.c, 0, e.r, 0, e.c + 3, 100, e.r + 5, 100].join(",")
                ),
                Gt("x:AutoFill", "False"),
                Gt("x:Row", String(e.r)),
                Gt("x:Column", String(e.c)),
                t[1].hidden ? "" : "<x:Visible/>",
                "</x:ClientData>",
                "</v:shape>",
              ]);
            }),
            r.push("</xml>"),
            r.join("")
          );
        }
        function Uo(t, e, n) {
          var i,
            r = Array.isArray(e);
          n.forEach(function (t) {
            var n = Ge(t.ref);
            if (
              (r
                ? (e[n.r] || (e[n.r] = []), (i = e[n.r][n.c]))
                : (i = e[t.ref]),
              !i)
            ) {
              (i = {}), r ? (e[n.r][n.c] = i) : (e[t.ref] = i);
              var o = Qe(e["!ref"] || "BDWGO1000001:A1");
              o.s.r > n.r && (o.s.r = n.r),
                o.e.r < n.r && (o.e.r = n.r),
                o.s.c > n.c && (o.s.c = n.c),
                o.e.c < n.c && (o.e.c = n.c);
              var a = Je(o);
              a !== e["!ref"] && (e["!ref"] = a);
            }
            i.c || (i.c = []);
            var s = { a: t.author, t: t.t, r: t.r };
            t.h && (s.h = t.h), i.c.push(s);
          });
        }
        Yn.CMNT =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
        var Xo = Zt("comments", null, { xmlns: ee.main[0] });
        function Vo(t) {
          var e = [ft, Xo],
            n = [];
          return (
            e.push("<authors>"),
            t.forEach(function (t) {
              t[1].forEach(function (t) {
                var i = kt(t.a);
                n.indexOf(i) > -1 ||
                  (n.push(i), e.push("<author>" + i + "</author>"));
              });
            }),
            e.push("</authors>"),
            e.push("<commentList>"),
            t.forEach(function (t) {
              t[1].forEach(function (i) {
                e.push(
                  '<comment ref="' +
                    t[0] +
                    '" authorId="' +
                    n.indexOf(kt(i.a)) +
                    '"><text>'
                ),
                  e.push(Gt("t", null == i.t ? "" : kt(i.t))),
                  e.push("</text></comment>");
              });
            }),
            e.push("</commentList>"),
            e.length > 2 &&
              ((e[e.length] = "</comments>"), (e[1] = e[1].replace("/>", ">"))),
            e.join("")
          );
        }
        var Go = an;
        function Ko(t) {
          var e = Ie(),
            n = [];
          return (
            We(e, "BrtBeginComments"),
            We(e, "BrtBeginCommentAuthors"),
            t.forEach(function (t) {
              t[1].forEach(function (t) {
                n.indexOf(t.a) > -1 ||
                  (n.push(t.a.slice(0, 54)),
                  We(
                    e,
                    "BrtCommentAuthor",
                    (function (t) {
                      return sn(t.slice(0, 54));
                    })(t.a)
                  ));
              });
            }),
            We(e, "BrtEndCommentAuthors"),
            We(e, "BrtBeginCommentList"),
            t.forEach(function (t) {
              t[1].forEach(function (i) {
                i.iauthor = n.indexOf(i.a);
                var r = { s: Ge(t[0]), e: Ge(t[0]) };
                We(
                  e,
                  "BrtBeginComment",
                  (function (t, e) {
                    return (
                      null == e && (e = Pe(36)),
                      e.write_shift(4, t[1].iauthor),
                      wn(t[0], e),
                      e.write_shift(4, 0),
                      e.write_shift(4, 0),
                      e.write_shift(4, 0),
                      e.write_shift(4, 0),
                      e
                    );
                  })([r, i])
                ),
                  i.t &&
                    i.t.length > 0 &&
                    We(
                      e,
                      "BrtCommentText",
                      (function (t, e) {
                        var n = !1;
                        return (
                          null == e &&
                            ((n = !0), (e = Pe(23 + 4 * t.t.length))),
                          e.write_shift(1, 1),
                          sn(t.t, e),
                          e.write_shift(4, 1),
                          (function (t, e) {
                            e || (e = Pe(4)),
                              e.write_shift(2, t.ich || 0),
                              e.write_shift(2, t.ifnt || 0);
                          })({ ich: 0, ifnt: 0 }, e),
                          n ? e.slice(0, e.l) : e
                        );
                      })(i)
                    ),
                  We(e, "BrtEndComment"),
                  delete i.iauthor;
              });
            }),
            We(e, "BrtEndCommentList"),
            We(e, "BrtEndComments"),
            e.end()
          );
        }
        var Zo = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
        (Yn.DS =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet"),
          (Yn.MS =
            "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet");
        var Jo = (function () {
            var t = /(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g,
              e = { r: 0, c: 0 };
            function n(t, n, i, r, o, a) {
              var s = r.length > 0 ? 0 | parseInt(r, 10) : 0,
                l = a.length > 0 ? 0 | parseInt(a, 10) : 0;
              l < 0 && 0 === o.length && (l = 0);
              var c = !1,
                d = !1;
              return (
                (o.length > 0 || 0 == a.length) && (c = !0),
                c ? (l += e.c) : --l,
                (i.length > 0 || 0 == r.length) && (d = !0),
                d ? (s += e.r) : --s,
                n + (c ? "" : "$") + Xe(l) + (d ? "" : "$") + Ye(s)
              );
            }
            return function (i, r) {
              return (e = r), i.replace(t, n);
            };
          })(),
          Qo =
            /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g,
          ta = function (t, e) {
            return t.replace(Qo, function (t, n, i, r, o, a) {
              var s = Ue(r) - (i ? 0 : e.c),
                l = He(a) - (o ? 0 : e.r);
              return (
                n +
                "R" +
                (0 == l ? "" : o ? l + 1 : "[" + l + "]") +
                "C" +
                (0 == s ? "" : i ? s + 1 : "[" + s + "]")
              );
            });
          };
        function ea(t, e, n) {
          var i = Ze(e).s,
            r = Ge(n);
          return (function (t, e) {
            return t.replace(Qo, function (t, n, i, r, o, a) {
              return (
                n +
                ("$" == i ? i + r : Xe(Ue(r) + e.c)) +
                ("$" == o ? o + a : Ye(He(a) + e.r))
              );
            });
          })(t, { r: r.r - i.r, c: r.c - i.c });
        }
        function na(t) {
          return t.replace(/_xlfn\./g, "");
        }
        function ia(t) {
          t.l += 1;
        }
        function ra(t, e) {
          var n = t.read_shift(1 == e ? 1 : 2);
          return [16383 & n, (n >> 14) & 1, (n >> 15) & 1];
        }
        function oa(t, e, n) {
          var i = 2;
          if (n) {
            if (n.biff >= 2 && n.biff <= 5) return aa(t);
            12 == n.biff && (i = 4);
          }
          var r = t.read_shift(i),
            o = t.read_shift(i),
            a = ra(t, 2),
            s = ra(t, 2);
          return {
            s: { r: r, c: a[0], cRel: a[1], rRel: a[2] },
            e: { r: o, c: s[0], cRel: s[1], rRel: s[2] },
          };
        }
        function aa(t) {
          var e = ra(t, 2),
            n = ra(t, 2),
            i = t.read_shift(1),
            r = t.read_shift(1);
          return {
            s: { r: e[0], c: i, cRel: e[1], rRel: e[2] },
            e: { r: n[0], c: r, cRel: n[1], rRel: n[2] },
          };
        }
        function sa(t, e, n) {
          if (n && n.biff >= 2 && n.biff <= 5)
            return (function (t) {
              var e = ra(t, 2),
                n = t.read_shift(1);
              return { r: e[0], c: n, cRel: e[1], rRel: e[2] };
            })(t);
          var i = t.read_shift(n && 12 == n.biff ? 4 : 2),
            r = ra(t, 2);
          return { r: i, c: r[0], cRel: r[1], rRel: r[2] };
        }
        function la(t) {
          var e = t.read_shift(2),
            n = t.read_shift(2);
          return {
            r: e,
            c: 255 & n,
            fQuoted: !!(16384 & n),
            cRel: n >> 15,
            rRel: n >> 15,
          };
        }
        function ca(t) {
          return [t.read_shift(1), t.read_shift(1)];
        }
        function da(t, e) {
          var n = [t.read_shift(1)];
          if (12 == e)
            switch (n[0]) {
              case 2:
                n[0] = 4;
                break;
              case 4:
                n[0] = 16;
                break;
              case 0:
                n[0] = 1;
                break;
              case 1:
                n[0] = 2;
            }
          switch (n[0]) {
            case 4:
              (n[1] = Ti(t, 1) ? "TRUE" : "FALSE"), 12 != e && (t.l += 7);
              break;
            case 37:
            case 16:
              (n[1] = zn[t[t.l]]), (t.l += 12 == e ? 4 : 8);
              break;
            case 0:
              t.l += 8;
              break;
            case 1:
              n[1] = An(t);
              break;
            case 2:
              n[1] = Wi(t, 0, { biff: e > 0 && e < 8 ? 2 : e });
              break;
            default:
              throw new Error("Bad SerAr: " + n[0]);
          }
          return n;
        }
        function ua(t, e, n) {
          for (
            var i = t.read_shift(12 == n.biff ? 4 : 2), r = [], o = 0;
            o != i;
            ++o
          )
            r.push((12 == n.biff ? On : Gi)(t, 8));
          return r;
        }
        function pa(t, e, n) {
          var i = 0,
            r = 0;
          12 == n.biff
            ? ((i = t.read_shift(4)), (r = t.read_shift(4)))
            : ((r = 1 + t.read_shift(1)), (i = 1 + t.read_shift(2))),
            n.biff >= 2 && n.biff < 8 && (--i, 0 == --r && (r = 256));
          for (var o = 0, a = []; o != i && (a[o] = []); ++o)
            for (var s = 0; s != r; ++s) a[o][s] = da(t, n.biff);
          return a;
        }
        function ha(t, e, n) {
          return (t.l += 2), [la(t)];
        }
        function fa(t) {
          return (t.l += 6), [];
        }
        var ba = ha,
          ma = fa,
          ga = fa,
          va = ha;
        function _a(t) {
          return (t.l += 2), [Li(t), 1 & t.read_shift(2)];
        }
        var ya = ha,
          Ma = _a,
          Oa = fa,
          wa = ha,
          Aa = ha,
          xa = [
            "Data",
            "All",
            "Headers",
            "??",
            "?Data2",
            "??",
            "?DataHeaders",
            "??",
            "Totals",
            "??",
            "??",
            "??",
            "?DataTotals",
            "??",
            "??",
            "??",
            "?Current",
          ],
          za = {
            1: {
              n: "PtgExp",
              f: function (t, e, n) {
                return (
                  t.l++,
                  n && 12 == n.biff
                    ? [t.read_shift(4, "i"), 0]
                    : [t.read_shift(2), t.read_shift(n && 2 == n.biff ? 1 : 2)]
                );
              },
            },
            2: { n: "PtgTbl", f: je },
            3: { n: "PtgAdd", f: ia },
            4: { n: "PtgSub", f: ia },
            5: { n: "PtgMul", f: ia },
            6: { n: "PtgDiv", f: ia },
            7: { n: "PtgPower", f: ia },
            8: { n: "PtgConcat", f: ia },
            9: { n: "PtgLt", f: ia },
            10: { n: "PtgLe", f: ia },
            11: { n: "PtgEq", f: ia },
            12: { n: "PtgGe", f: ia },
            13: { n: "PtgGt", f: ia },
            14: { n: "PtgNe", f: ia },
            15: { n: "PtgIsect", f: ia },
            16: { n: "PtgUnion", f: ia },
            17: { n: "PtgRange", f: ia },
            18: { n: "PtgUplus", f: ia },
            19: { n: "PtgUminus", f: ia },
            20: { n: "PtgPercent", f: ia },
            21: { n: "PtgParen", f: ia },
            22: { n: "PtgMissArg", f: ia },
            23: {
              n: "PtgStr",
              f: function (t, e, n) {
                return t.l++, ji(t, 0, n);
              },
            },
            26: {
              n: "PtgSheet",
              f: function (t, e, n) {
                return (
                  (t.l += 5),
                  (t.l += 2),
                  (t.l += 2 == n.biff ? 1 : 4),
                  ["PTGSHEET"]
                );
              },
            },
            27: {
              n: "PtgEndSheet",
              f: function (t, e, n) {
                return (t.l += 2 == n.biff ? 4 : 5), ["PTGENDSHEET"];
              },
            },
            28: {
              n: "PtgErr",
              f: function (t) {
                return t.l++, zn[t.read_shift(1)];
              },
            },
            29: {
              n: "PtgBool",
              f: function (t) {
                return t.l++, 0 !== t.read_shift(1);
              },
            },
            30: {
              n: "PtgInt",
              f: function (t) {
                return t.l++, t.read_shift(2);
              },
            },
            31: {
              n: "PtgNum",
              f: function (t) {
                return t.l++, An(t);
              },
            },
            32: {
              n: "PtgArray",
              f: function (t, e, n) {
                var i = (96 & t[t.l++]) >> 5;
                return (t.l += 2 == n.biff ? 6 : 12 == n.biff ? 14 : 7), [i];
              },
            },
            33: {
              n: "PtgFunc",
              f: function (t, e, n) {
                var i = (96 & t[t.l]) >> 5;
                t.l += 1;
                var r = t.read_shift(n && n.biff <= 3 ? 1 : 2);
                return [Xa[r], Ua[r], i];
              },
            },
            34: {
              n: "PtgFuncVar",
              f: function (t, e, n) {
                var i = t[t.l++],
                  r = t.read_shift(1),
                  o =
                    n && n.biff <= 3
                      ? [88 == i ? -1 : 0, t.read_shift(1)]
                      : (function (t) {
                          return [t[t.l + 1] >> 7, 32767 & t.read_shift(2)];
                        })(t);
                return [r, (0 === o[0] ? Ua : Ya)[o[1]]];
              },
            },
            35: {
              n: "PtgName",
              f: function (t, e, n) {
                var i = (t.read_shift(1) >>> 5) & 3,
                  r = !n || n.biff >= 8 ? 4 : 2,
                  o = t.read_shift(r);
                switch (n.biff) {
                  case 2:
                    t.l += 5;
                    break;
                  case 3:
                  case 4:
                    t.l += 8;
                    break;
                  case 5:
                    t.l += 12;
                }
                return [i, 0, o];
              },
            },
            36: {
              n: "PtgRef",
              f: function (t, e, n) {
                var i = (96 & t[t.l]) >> 5;
                return (t.l += 1), [i, sa(t, 0, n)];
              },
            },
            37: {
              n: "PtgArea",
              f: function (t, e, n) {
                return [(96 & t[t.l++]) >> 5, oa(t, n.biff >= 2 && n.biff, n)];
              },
            },
            38: {
              n: "PtgMemArea",
              f: function (t, e, n) {
                var i = (t.read_shift(1) >>> 5) & 3;
                return (
                  (t.l += n && 2 == n.biff ? 3 : 4),
                  [i, t.read_shift(n && 2 == n.biff ? 1 : 2)]
                );
              },
            },
            39: { n: "PtgMemErr", f: je },
            40: { n: "PtgMemNoMem", f: je },
            41: {
              n: "PtgMemFunc",
              f: function (t, e, n) {
                return [
                  (t.read_shift(1) >>> 5) & 3,
                  t.read_shift(n && 2 == n.biff ? 1 : 2),
                ];
              },
            },
            42: {
              n: "PtgRefErr",
              f: function (t, e, n) {
                var i = (t.read_shift(1) >>> 5) & 3;
                return (
                  (t.l += 4),
                  n.biff < 8 && t.l--,
                  12 == n.biff && (t.l += 2),
                  [i]
                );
              },
            },
            43: {
              n: "PtgAreaErr",
              f: function (t, e, n) {
                var i = (96 & t[t.l++]) >> 5;
                return (t.l += n && n.biff > 8 ? 12 : n.biff < 8 ? 6 : 8), [i];
              },
            },
            44: {
              n: "PtgRefN",
              f: function (t, e, n) {
                var i = (96 & t[t.l]) >> 5;
                return (
                  (t.l += 1),
                  [
                    i,
                    (function (t, e, n) {
                      var i = n && n.biff ? n.biff : 8;
                      if (i >= 2 && i <= 5)
                        return (function (t) {
                          var e = t.read_shift(2),
                            n = t.read_shift(1),
                            i = (32768 & e) >> 15,
                            r = (16384 & e) >> 14;
                          return (
                            (e &= 16383),
                            1 == i && e >= 8192 && (e -= 16384),
                            1 == r && n >= 128 && (n -= 256),
                            { r: e, c: n, cRel: r, rRel: i }
                          );
                        })(t);
                      var r = t.read_shift(i >= 12 ? 4 : 2),
                        o = t.read_shift(2),
                        a = (16384 & o) >> 14,
                        s = (32768 & o) >> 15;
                      if (((o &= 16383), 1 == s))
                        for (; r > 524287; ) r -= 1048576;
                      if (1 == a) for (; o > 8191; ) o -= 16384;
                      return { r: r, c: o, cRel: a, rRel: s };
                    })(t, 0, n),
                  ]
                );
              },
            },
            45: {
              n: "PtgAreaN",
              f: function (t, e, n) {
                return [
                  (96 & t[t.l++]) >> 5,
                  (function (t, e, n) {
                    if (n.biff < 8) return aa(t);
                    var i = t.read_shift(12 == n.biff ? 4 : 2),
                      r = t.read_shift(12 == n.biff ? 4 : 2),
                      o = ra(t, 2),
                      a = ra(t, 2);
                    return {
                      s: { r: i, c: o[0], cRel: o[1], rRel: o[2] },
                      e: { r: r, c: a[0], cRel: a[1], rRel: a[2] },
                    };
                  })(t, 0, n),
                ];
              },
            },
            46: {
              n: "PtgMemAreaN",
              f: function (t) {
                return [(t.read_shift(1) >>> 5) & 3, t.read_shift(2)];
              },
            },
            47: {
              n: "PtgMemNoMemN",
              f: function (t) {
                return [(t.read_shift(1) >>> 5) & 3, t.read_shift(2)];
              },
            },
            57: {
              n: "PtgNameX",
              f: function (t, e, n) {
                return 5 == n.biff
                  ? (function (t) {
                      var e = (t.read_shift(1) >>> 5) & 3,
                        n = t.read_shift(2, "i");
                      t.l += 8;
                      var i = t.read_shift(2);
                      return (t.l += 12), [e, n, i];
                    })(t)
                  : [
                      (t.read_shift(1) >>> 5) & 3,
                      t.read_shift(2),
                      t.read_shift(4),
                    ];
              },
            },
            58: {
              n: "PtgRef3d",
              f: function (t, e, n) {
                var i = (96 & t[t.l]) >> 5;
                t.l += 1;
                var r = t.read_shift(2);
                return n && 5 == n.biff && (t.l += 12), [i, r, sa(t, 0, n)];
              },
            },
            59: {
              n: "PtgArea3d",
              f: function (t, e, n) {
                var i = (96 & t[t.l++]) >> 5,
                  r = t.read_shift(2, "i");
                if (n)
                  switch (n.biff) {
                    case 5:
                      t.l += 12;
                      break;
                    case 12:
                  }
                return [i, r, oa(t, 0, n)];
              },
            },
            60: {
              n: "PtgRefErr3d",
              f: function (t, e, n) {
                var i = (96 & t[t.l++]) >> 5,
                  r = t.read_shift(2),
                  o = 4;
                if (n)
                  switch (n.biff) {
                    case 5:
                      o = 15;
                      break;
                    case 12:
                      o = 6;
                  }
                return (t.l += o), [i, r];
              },
            },
            61: {
              n: "PtgAreaErr3d",
              f: function (t, e, n) {
                var i = (96 & t[t.l++]) >> 5,
                  r = t.read_shift(2),
                  o = 8;
                if (n)
                  switch (n.biff) {
                    case 5:
                      (t.l += 12), (o = 6);
                      break;
                    case 12:
                      o = 12;
                  }
                return (t.l += o), [i, r];
              },
            },
            255: {},
          },
          Ca = {
            64: 32,
            96: 32,
            65: 33,
            97: 33,
            66: 34,
            98: 34,
            67: 35,
            99: 35,
            68: 36,
            100: 36,
            69: 37,
            101: 37,
            70: 38,
            102: 38,
            71: 39,
            103: 39,
            72: 40,
            104: 40,
            73: 41,
            105: 41,
            74: 42,
            106: 42,
            75: 43,
            107: 43,
            76: 44,
            108: 44,
            77: 45,
            109: 45,
            78: 46,
            110: 46,
            79: 47,
            111: 47,
            88: 34,
            120: 34,
            89: 57,
            121: 57,
            90: 58,
            122: 58,
            91: 59,
            123: 59,
            92: 60,
            124: 60,
            93: 61,
            125: 61,
          };
        !(function () {
          for (var t in Ca) za[t] = za[Ca[t]];
        })();
        var ka = {
            1: { n: "PtgElfLel", f: _a },
            2: { n: "PtgElfRw", f: wa },
            3: { n: "PtgElfCol", f: ba },
            6: { n: "PtgElfRwV", f: Aa },
            7: { n: "PtgElfColV", f: va },
            10: { n: "PtgElfRadical", f: ya },
            11: { n: "PtgElfRadicalS", f: Oa },
            13: { n: "PtgElfColS", f: ma },
            15: { n: "PtgElfColSV", f: ga },
            16: { n: "PtgElfRadicalLel", f: Ma },
            25: {
              n: "PtgList",
              f: function (t) {
                t.l += 2;
                var e = t.read_shift(2),
                  n = t.read_shift(2),
                  i = t.read_shift(4),
                  r = t.read_shift(2),
                  o = t.read_shift(2);
                return {
                  ixti: e,
                  coltype: 3 & n,
                  rt: xa[(n >> 2) & 31],
                  idx: i,
                  c: r,
                  C: o,
                };
              },
            },
            29: {
              n: "PtgSxName",
              f: function (t) {
                return (t.l += 2), [t.read_shift(4)];
              },
            },
            255: {},
          },
          Sa = {
            0: {
              n: "PtgAttrNoop",
              f: function (t) {
                return (t.l += 4), [0, 0];
              },
            },
            1: {
              n: "PtgAttrSemi",
              f: function (t, e, n) {
                var i = 255 & t[t.l + 1] ? 1 : 0;
                return (t.l += n && 2 == n.biff ? 3 : 4), [i];
              },
            },
            2: {
              n: "PtgAttrIf",
              f: function (t, e, n) {
                var i = 255 & t[t.l + 1] ? 1 : 0;
                return (t.l += 2), [i, t.read_shift(n && 2 == n.biff ? 1 : 2)];
              },
            },
            4: {
              n: "PtgAttrChoose",
              f: function (t, e, n) {
                t.l += 2;
                for (
                  var i = t.read_shift(n && 2 == n.biff ? 1 : 2), r = [], o = 0;
                  o <= i;
                  ++o
                )
                  r.push(t.read_shift(n && 2 == n.biff ? 1 : 2));
                return r;
              },
            },
            8: {
              n: "PtgAttrGoto",
              f: function (t, e, n) {
                var i = 255 & t[t.l + 1] ? 1 : 0;
                return (t.l += 2), [i, t.read_shift(n && 2 == n.biff ? 1 : 2)];
              },
            },
            16: {
              n: "PtgAttrSum",
              f: function (t, e, n) {
                t.l += n && 2 == n.biff ? 3 : 4;
              },
            },
            32: {
              n: "PtgAttrBaxcel",
              f: function (t) {
                var e = 1 & t[t.l + 1];
                return (t.l += 4), [e, 1];
              },
            },
            64: {
              n: "PtgAttrSpace",
              f: function (t) {
                return t.read_shift(2), ca(t);
              },
            },
            65: {
              n: "PtgAttrSpaceSemi",
              f: function (t) {
                return t.read_shift(2), ca(t);
              },
            },
            128: {
              n: "PtgAttrIfError",
              f: function (t) {
                var e = 255 & t[t.l + 1] ? 1 : 0;
                return (t.l += 2), [e, t.read_shift(2)];
              },
            },
            255: {},
          };
        function Ta(t, e, n, i) {
          if (i.biff < 8) return je(t, e);
          for (var r = t.l + e, o = [], a = 0; a !== n.length; ++a)
            switch (n[a][0]) {
              case "PtgArray":
                (n[a][1] = pa(t, 0, i)), o.push(n[a][1]);
                break;
              case "PtgMemArea":
                (n[a][2] = ua(t, n[a][1], i)), o.push(n[a][2]);
                break;
              case "PtgExp":
                i &&
                  12 == i.biff &&
                  ((n[a][1][1] = t.read_shift(4)), o.push(n[a][1]));
                break;
              case "PtgList":
              case "PtgElfRadicalS":
              case "PtgElfColS":
              case "PtgElfColSV":
                throw "Unsupported " + n[a][0];
            }
          return 0 != (e = r - t.l) && o.push(je(t, e)), o;
        }
        function Da(t, e, n) {
          for (var i, r, o = t.l + e, a = []; o != t.l; )
            (e = o - t.l),
              (r = t[t.l]),
              (i = za[r]),
              (24 !== r && 25 !== r) || (i = (24 === r ? ka : Sa)[t[t.l + 1]]),
              i && i.f ? a.push([i.n, i.f(t, e, n)]) : je(t, e);
          return a;
        }
        function La(t) {
          for (var e = [], n = 0; n < t.length; ++n) {
            for (var i = t[n], r = [], o = 0; o < i.length; ++o) {
              var a = i[o];
              if (a)
                switch (a[0]) {
                  case 2:
                    r.push('"' + a[1].replace(/"/g, '""') + '"');
                    break;
                  default:
                    r.push(a[1]);
                }
              else r.push("");
            }
            e.push(r.join(","));
          }
          return e.join(";");
        }
        Sa[33] = Sa[32];
        var qa = {
          PtgAdd: "+",
          PtgConcat: "&",
          PtgDiv: "/",
          PtgEq: "=",
          PtgGe: ">=",
          PtgGt: ">",
          PtgLe: "<=",
          PtgLt: "<",
          PtgMul: "*",
          PtgNe: "<>",
          PtgPower: "^",
          PtgSub: "-",
        };
        function Ea(t, e, n) {
          if (!t) return "SH33TJSERR0";
          if (n.biff > 8 && (!t.XTI || !t.XTI[e])) return t.SheetNames[e];
          if (!t.XTI) return "SH33TJSERR6";
          var i = t.XTI[e];
          if (n.biff < 8)
            return (
              e > 1e4 && (e -= 65536),
              e < 0 && (e = -e),
              0 == e ? "" : t.XTI[e - 1]
            );
          if (!i) return "SH33TJSERR1";
          var r = "";
          if (n.biff > 8)
            switch (t[i[0]][0]) {
              case 357:
                return (
                  (r = -1 == i[1] ? "#REF" : t.SheetNames[i[1]]),
                  i[1] == i[2] ? r : r + ":" + t.SheetNames[i[2]]
                );
              case 358:
                return null != n.SID
                  ? t.SheetNames[n.SID]
                  : "SH33TJSSAME" + t[i[0]][0];
              case 355:
              default:
                return "SH33TJSSRC" + t[i[0]][0];
            }
          switch (t[i[0]][0][0]) {
            case 1025:
              return (
                (r = -1 == i[1] ? "#REF" : t.SheetNames[i[1]] || "SH33TJSERR3"),
                i[1] == i[2] ? r : r + ":" + t.SheetNames[i[2]]
              );
            case 14849:
              return t[i[0]]
                .slice(1)
                .map(function (t) {
                  return t.Name;
                })
                .join(";;");
            default:
              return t[i[0]][0][3]
                ? ((r =
                    -1 == i[1] ? "#REF" : t[i[0]][0][3][i[1]] || "SH33TJSERR4"),
                  i[1] == i[2] ? r : r + ":" + t[i[0]][0][3][i[2]])
                : "SH33TJSERR2";
          }
        }
        function ja(t, e, n) {
          return (function (t, e) {
            if (!(t || (e && e.biff <= 5 && e.biff >= 2)))
              throw new Error("empty sheet name");
            return t.indexOf(" ") > -1 ? "'" + t + "'" : t;
          })(Ea(t, e, n), n);
        }
        function Pa(t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c = (r && r.biff) || 8,
            d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
            u = [],
            p = 0,
            h = 0,
            f = "";
          if (!t[0] || !t[0][0]) return "";
          for (var b = -1, m = "", g = 0, v = t[0].length; g < v; ++g) {
            var _ = t[0][g];
            switch (_[0]) {
              case "PtgUminus":
                u.push("-" + u.pop());
                break;
              case "PtgUplus":
                u.push("+" + u.pop());
                break;
              case "PtgPercent":
                u.push(u.pop() + "%");
                break;
              case "PtgAdd":
              case "PtgConcat":
              case "PtgDiv":
              case "PtgEq":
              case "PtgGe":
              case "PtgGt":
              case "PtgLe":
              case "PtgLt":
              case "PtgMul":
              case "PtgNe":
              case "PtgPower":
              case "PtgSub":
                if (((o = u.pop()), (a = u.pop()), b >= 0)) {
                  switch (t[0][b][1][0]) {
                    case 0:
                      m = it(" ", t[0][b][1][1]);
                      break;
                    case 1:
                      m = it("\r", t[0][b][1][1]);
                      break;
                    default:
                      if (((m = ""), r.WTF))
                        throw new Error(
                          "Unexpected PtgAttrSpaceType " + t[0][b][1][0]
                        );
                  }
                  (a += m), (b = -1);
                }
                u.push(a + qa[_[0]] + o);
                break;
              case "PtgIsect":
                (o = u.pop()), (a = u.pop()), u.push(a + " " + o);
                break;
              case "PtgUnion":
                (o = u.pop()), (a = u.pop()), u.push(a + "," + o);
                break;
              case "PtgRange":
                (o = u.pop()), (a = u.pop()), u.push(a + ":" + o);
                break;
              case "PtgAttrChoose":
              case "PtgAttrGoto":
              case "PtgAttrIf":
              case "PtgAttrIfError":
                break;
              case "PtgRef":
                (s = Ne(_[1][1], d, r)), u.push(Fe(s, c));
                break;
              case "PtgRefN":
                (s = n ? Ne(_[1][1], n, r) : _[1][1]), u.push(Fe(s, c));
                break;
              case "PtgRef3d":
                (p = _[1][1]),
                  (s = Ne(_[1][2], d, r)),
                  (f = ja(i, p, r)),
                  u.push(f + "!" + Fe(s, c));
                break;
              case "PtgFunc":
              case "PtgFuncVar":
                var y = _[1][0],
                  M = _[1][1];
                y || (y = 0);
                var O = 0 == (y &= 127) ? [] : u.slice(-y);
                (u.length -= y),
                  "User" === M && (M = O.shift()),
                  u.push(M + "(" + O.join(",") + ")");
                break;
              case "PtgBool":
                u.push(_[1] ? "TRUE" : "FALSE");
                break;
              case "PtgInt":
                u.push(_[1]);
                break;
              case "PtgNum":
                u.push(String(_[1]));
                break;
              case "PtgStr":
                u.push('"' + _[1].replace(/"/g, '""') + '"');
                break;
              case "PtgErr":
                u.push(_[1]);
                break;
              case "PtgAreaN":
                (l = Be(_[1][1], n ? { s: n } : d, r)), u.push($e(l, r));
                break;
              case "PtgArea":
                (l = Be(_[1][1], d, r)), u.push($e(l, r));
                break;
              case "PtgArea3d":
                (p = _[1][1]),
                  (l = _[1][2]),
                  (f = ja(i, p, r)),
                  u.push(f + "!" + $e(l, r));
                break;
              case "PtgAttrSum":
                u.push("SUM(" + u.pop() + ")");
                break;
              case "PtgAttrBaxcel":
              case "PtgAttrSemi":
                break;
              case "PtgName":
                h = _[1][2];
                var w = (i.names || [])[h - 1] || (i[0] || [])[h],
                  A = w ? w.Name : "SH33TJSNAME" + String(h);
                A in Va && (A = Va[A]), u.push(A);
                break;
              case "PtgNameX":
                var x,
                  z = _[1][1];
                if (((h = _[1][2]), !(r.biff <= 5))) {
                  var C = "";
                  if (
                    (14849 == ((i[z] || [])[0] || [])[0] ||
                      (1025 == ((i[z] || [])[0] || [])[0]
                        ? i[z][h] &&
                          i[z][h].itab > 0 &&
                          (C = i.SheetNames[i[z][h].itab - 1] + "!")
                        : (C = i.SheetNames[h - 1] + "!")),
                    i[z] && i[z][h])
                  )
                    C += i[z][h].Name;
                  else if (i[0] && i[0][h]) C += i[0][h].Name;
                  else {
                    var k = Ea(i, z, r).split(";;");
                    k[h - 1] ? (C = k[h - 1]) : (C += "SH33TJSERRX");
                  }
                  u.push(C);
                  break;
                }
                z < 0 && (z = -z),
                  i[z] && (x = i[z][h]),
                  x || (x = { Name: "SH33TJSERRY" }),
                  u.push(x.Name);
                break;
              case "PtgParen":
                var S = "(",
                  T = ")";
                if (b >= 0) {
                  switch (((m = ""), t[0][b][1][0])) {
                    case 2:
                      S = it(" ", t[0][b][1][1]) + S;
                      break;
                    case 3:
                      S = it("\r", t[0][b][1][1]) + S;
                      break;
                    case 4:
                      T = it(" ", t[0][b][1][1]) + T;
                      break;
                    case 5:
                      T = it("\r", t[0][b][1][1]) + T;
                      break;
                    default:
                      if (r.WTF)
                        throw new Error(
                          "Unexpected PtgAttrSpaceType " + t[0][b][1][0]
                        );
                  }
                  b = -1;
                }
                u.push(S + u.pop() + T);
                break;
              case "PtgRefErr":
              case "PtgRefErr3d":
                u.push("#REF!");
                break;
              case "PtgExp":
                s = { c: _[1][1], r: _[1][0] };
                var D = { c: n.c, r: n.r };
                if (i.sharedf[Ke(s)]) {
                  var L = i.sharedf[Ke(s)];
                  u.push(Pa(L, d, D, i, r));
                } else {
                  var q = !1;
                  for (o = 0; o != i.arrayf.length; ++o)
                    if (
                      ((a = i.arrayf[o]),
                      !(
                        s.c < a[0].s.c ||
                        s.c > a[0].e.c ||
                        s.r < a[0].s.r ||
                        s.r > a[0].e.r
                      ))
                    ) {
                      u.push(Pa(a[1], d, D, i, r)), (q = !0);
                      break;
                    }
                  q || u.push(_[1]);
                }
                break;
              case "PtgArray":
                u.push("{" + La(_[1]) + "}");
                break;
              case "PtgMemArea":
                break;
              case "PtgAttrSpace":
              case "PtgAttrSpaceSemi":
                b = g;
                break;
              case "PtgTbl":
              case "PtgMemErr":
                break;
              case "PtgMissArg":
                u.push("");
                break;
              case "PtgAreaErr":
              case "PtgAreaErr3d":
                u.push("#REF!");
                break;
              case "PtgList":
                u.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
                break;
              case "PtgMemAreaN":
              case "PtgMemNoMemN":
              case "PtgAttrNoop":
              case "PtgSheet":
              case "PtgEndSheet":
              case "PtgMemFunc":
              case "PtgMemNoMem":
                break;
              case "PtgElfCol":
              case "PtgElfColS":
              case "PtgElfColSV":
              case "PtgElfColV":
              case "PtgElfLel":
              case "PtgElfRadical":
              case "PtgElfRadicalLel":
              case "PtgElfRadicalS":
              case "PtgElfRw":
              case "PtgElfRwV":
                throw new Error("Unsupported ELFs");
              case "PtgSxName":
              default:
                throw new Error("Unrecognized Formula Token: " + String(_));
            }
            if (
              3 != r.biff &&
              b >= 0 &&
              -1 ==
                ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(
                  t[0][g][0]
                )
            ) {
              var E = !0;
              switch ((_ = t[0][b])[1][0]) {
                case 4:
                  E = !1;
                case 0:
                  m = it(" ", _[1][1]);
                  break;
                case 5:
                  E = !1;
                case 1:
                  m = it("\r", _[1][1]);
                  break;
                default:
                  if (((m = ""), r.WTF))
                    throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
              }
              u.push((E ? m : "") + u.pop() + (E ? "" : m)), (b = -1);
            }
          }
          if (u.length > 1 && r.WTF) throw new Error("bad formula stack");
          return u[0];
        }
        function Ra(t, e, n) {
          var i,
            r = t.l + e,
            o = 2 == n.biff ? 1 : 2,
            a = t.read_shift(o);
          if (65535 == a) return [[], je(t, e - 2)];
          var s = Da(t, a, n);
          return e !== a + o && (i = Ta(t, e - a - o, s, n)), (t.l = r), [s, i];
        }
        function Ia(t, e, n) {
          var i,
            r = t.l + e,
            o = t.read_shift(2),
            a = Da(t, o, n);
          return 65535 == o
            ? [[], je(t, e - 2)]
            : (e !== o + 2 && (i = Ta(t, r - o - 2, a, n)), [a, i]);
        }
        function Wa(t, e, n) {
          var i = t.l + e,
            r = Yi(t);
          2 == n.biff && ++t.l;
          var o = (function (t) {
              var e;
              if (65535 !== xe(t, t.l + 6)) return [An(t), "n"];
              switch (t[t.l]) {
                case 0:
                  return (t.l += 8), ["String", "s"];
                case 1:
                  return (e = 1 === t[t.l + 2]), (t.l += 8), [e, "b"];
                case 2:
                  return (e = t[t.l + 2]), (t.l += 8), [e, "e"];
                case 3:
                  return (t.l += 8), ["", "s"];
              }
              return [];
            })(t),
            a = t.read_shift(1);
          2 != n.biff && (t.read_shift(1), n.biff >= 5 && t.read_shift(4));
          var s = (function (t, e, n) {
            var i,
              r = t.l + e,
              o = 2 == n.biff ? 1 : 2,
              a = t.read_shift(o);
            if (65535 == a) return [[], je(t, e - 2)];
            var s = Da(t, a, n);
            return (
              e !== a + o && (i = Ta(t, e - a - o, s, n)), (t.l = r), [s, i]
            );
          })(t, i - t.l, n);
          return {
            cell: r,
            val: o[0],
            formula: s,
            shared: (a >> 3) & 1,
            tt: o[1],
          };
        }
        function Na(t, e, n) {
          var i = t.read_shift(4),
            r = Da(t, i, n),
            o = t.read_shift(4);
          return [r, o > 0 ? Ta(t, o, r, n) : null];
        }
        var Ba = Na,
          Fa = Na,
          $a = Na,
          Ha = Na,
          Ya = {
            0: "BEEP",
            1: "OPEN",
            2: "OPEN.LINKS",
            3: "CLOSE.ALL",
            4: "SAVE",
            5: "SAVE.AS",
            6: "FILE.DELETE",
            7: "PAGE.SETUP",
            8: "PRINT",
            9: "PRINTER.SETUP",
            10: "QUIT",
            11: "NEW.WINDOW",
            12: "ARRANGE.ALL",
            13: "WINDOW.SIZE",
            14: "WINDOW.MOVE",
            15: "FULL",
            16: "CLOSE",
            17: "RUN",
            22: "SET.PRINT.AREA",
            23: "SET.PRINT.TITLES",
            24: "SET.PAGE.BREAK",
            25: "REMOVE.PAGE.BREAK",
            26: "FONT",
            27: "DISPLAY",
            28: "PROTECT.DOCUMENT",
            29: "PRECISION",
            30: "A1.R1C1",
            31: "CALCULATE.NOW",
            32: "CALCULATION",
            34: "DATA.FIND",
            35: "EXTRACT",
            36: "DATA.DELETE",
            37: "SET.DATABASE",
            38: "SET.CRITERIA",
            39: "SORT",
            40: "DATA.SERIES",
            41: "TABLE",
            42: "FORMAT.NUMBER",
            43: "ALIGNMENT",
            44: "STYLE",
            45: "BORDER",
            46: "CELL.PROTECTION",
            47: "COLUMN.WIDTH",
            48: "UNDO",
            49: "CUT",
            50: "COPY",
            51: "PASTE",
            52: "CLEAR",
            53: "PASTE.SPECIAL",
            54: "EDIT.DELETE",
            55: "INSERT",
            56: "FILL.RIGHT",
            57: "FILL.DOWN",
            61: "DEFINE.NAME",
            62: "CREATE.NAMES",
            63: "FORMULA.GOTO",
            64: "FORMULA.FIND",
            65: "SELECT.LAST.CELL",
            66: "SHOW.ACTIVE.CELL",
            67: "GALLERY.AREA",
            68: "GALLERY.BAR",
            69: "GALLERY.COLUMN",
            70: "GALLERY.LINE",
            71: "GALLERY.PIE",
            72: "GALLERY.SCATTER",
            73: "COMBINATION",
            74: "PREFERRED",
            75: "ADD.OVERLAY",
            76: "GRIDLINES",
            77: "SET.PREFERRED",
            78: "AXES",
            79: "LEGEND",
            80: "ATTACH.TEXT",
            81: "ADD.ARROW",
            82: "SELECT.CHART",
            83: "SELECT.PLOT.AREA",
            84: "PATTERNS",
            85: "MAIN.CHART",
            86: "OVERLAY",
            87: "SCALE",
            88: "FORMAT.LEGEND",
            89: "FORMAT.TEXT",
            90: "EDIT.REPEAT",
            91: "PARSE",
            92: "JUSTIFY",
            93: "HIDE",
            94: "UNHIDE",
            95: "WORKSPACE",
            96: "FORMULA",
            97: "FORMULA.FILL",
            98: "FORMULA.ARRAY",
            99: "DATA.FIND.NEXT",
            100: "DATA.FIND.PREV",
            101: "FORMULA.FIND.NEXT",
            102: "FORMULA.FIND.PREV",
            103: "ACTIVATE",
            104: "ACTIVATE.NEXT",
            105: "ACTIVATE.PREV",
            106: "UNLOCKED.NEXT",
            107: "UNLOCKED.PREV",
            108: "COPY.PICTURE",
            109: "SELECT",
            110: "DELETE.NAME",
            111: "DELETE.FORMAT",
            112: "VLINE",
            113: "HLINE",
            114: "VPAGE",
            115: "HPAGE",
            116: "VSCROLL",
            117: "HSCROLL",
            118: "ALERT",
            119: "NEW",
            120: "CANCEL.COPY",
            121: "SHOW.CLIPBOARD",
            122: "MESSAGE",
            124: "PASTE.LINK",
            125: "APP.ACTIVATE",
            126: "DELETE.ARROW",
            127: "ROW.HEIGHT",
            128: "FORMAT.MOVE",
            129: "FORMAT.SIZE",
            130: "FORMULA.REPLACE",
            131: "SEND.KEYS",
            132: "SELECT.SPECIAL",
            133: "APPLY.NAMES",
            134: "REPLACE.FONT",
            135: "FREEZE.PANES",
            136: "SHOW.INFO",
            137: "SPLIT",
            138: "ON.WINDOW",
            139: "ON.DATA",
            140: "DISABLE.INPUT",
            142: "OUTLINE",
            143: "LIST.NAMES",
            144: "FILE.CLOSE",
            145: "SAVE.WORKBOOK",
            146: "DATA.FORM",
            147: "COPY.CHART",
            148: "ON.TIME",
            149: "WAIT",
            150: "FORMAT.FONT",
            151: "FILL.UP",
            152: "FILL.LEFT",
            153: "DELETE.OVERLAY",
            155: "SHORT.MENUS",
            159: "SET.UPDATE.STATUS",
            161: "COLOR.PALETTE",
            162: "DELETE.STYLE",
            163: "WINDOW.RESTORE",
            164: "WINDOW.MAXIMIZE",
            166: "CHANGE.LINK",
            167: "CALCULATE.DOCUMENT",
            168: "ON.KEY",
            169: "APP.RESTORE",
            170: "APP.MOVE",
            171: "APP.SIZE",
            172: "APP.MINIMIZE",
            173: "APP.MAXIMIZE",
            174: "BRING.TO.FRONT",
            175: "SEND.TO.BACK",
            185: "MAIN.CHART.TYPE",
            186: "OVERLAY.CHART.TYPE",
            187: "SELECT.END",
            188: "OPEN.MAIL",
            189: "SEND.MAIL",
            190: "STANDARD.FONT",
            191: "CONSOLIDATE",
            192: "SORT.SPECIAL",
            193: "GALLERY.3D.AREA",
            194: "GALLERY.3D.COLUMN",
            195: "GALLERY.3D.LINE",
            196: "GALLERY.3D.PIE",
            197: "VIEW.3D",
            198: "GOAL.SEEK",
            199: "WORKGROUP",
            200: "FILL.GROUP",
            201: "UPDATE.LINK",
            202: "PROMOTE",
            203: "DEMOTE",
            204: "SHOW.DETAIL",
            206: "UNGROUP",
            207: "OBJECT.PROPERTIES",
            208: "SAVE.NEW.OBJECT",
            209: "SHARE",
            210: "SHARE.NAME",
            211: "DUPLICATE",
            212: "APPLY.STYLE",
            213: "ASSIGN.TO.OBJECT",
            214: "OBJECT.PROTECTION",
            215: "HIDE.OBJECT",
            216: "SET.EXTRACT",
            217: "CREATE.PUBLISHER",
            218: "SUBSCRIBE.TO",
            219: "ATTRIBUTES",
            220: "SHOW.TOOLBAR",
            222: "PRINT.PREVIEW",
            223: "EDIT.COLOR",
            224: "SHOW.LEVELS",
            225: "FORMAT.MAIN",
            226: "FORMAT.OVERLAY",
            227: "ON.RECALC",
            228: "EDIT.SERIES",
            229: "DEFINE.STYLE",
            240: "LINE.PRINT",
            243: "ENTER.DATA",
            249: "GALLERY.RADAR",
            250: "MERGE.STYLES",
            251: "EDITION.OPTIONS",
            252: "PASTE.PICTURE",
            253: "PASTE.PICTURE.LINK",
            254: "SPELLING",
            256: "ZOOM",
            259: "INSERT.OBJECT",
            260: "WINDOW.MINIMIZE",
            265: "SOUND.NOTE",
            266: "SOUND.PLAY",
            267: "FORMAT.SHAPE",
            268: "EXTEND.POLYGON",
            269: "FORMAT.AUTO",
            272: "GALLERY.3D.BAR",
            273: "GALLERY.3D.SURFACE",
            274: "FILL.AUTO",
            276: "CUSTOMIZE.TOOLBAR",
            277: "ADD.TOOL",
            278: "EDIT.OBJECT",
            279: "ON.DOUBLECLICK",
            280: "ON.ENTRY",
            281: "WORKBOOK.ADD",
            282: "WORKBOOK.MOVE",
            283: "WORKBOOK.COPY",
            284: "WORKBOOK.OPTIONS",
            285: "SAVE.WORKSPACE",
            288: "CHART.WIZARD",
            289: "DELETE.TOOL",
            290: "MOVE.TOOL",
            291: "WORKBOOK.SELECT",
            292: "WORKBOOK.ACTIVATE",
            293: "ASSIGN.TO.TOOL",
            295: "COPY.TOOL",
            296: "RESET.TOOL",
            297: "CONSTRAIN.NUMERIC",
            298: "PASTE.TOOL",
            302: "WORKBOOK.NEW",
            305: "SCENARIO.CELLS",
            306: "SCENARIO.DELETE",
            307: "SCENARIO.ADD",
            308: "SCENARIO.EDIT",
            309: "SCENARIO.SHOW",
            310: "SCENARIO.SHOW.NEXT",
            311: "SCENARIO.SUMMARY",
            312: "PIVOT.TABLE.WIZARD",
            313: "PIVOT.FIELD.PROPERTIES",
            314: "PIVOT.FIELD",
            315: "PIVOT.ITEM",
            316: "PIVOT.ADD.FIELDS",
            318: "OPTIONS.CALCULATION",
            319: "OPTIONS.EDIT",
            320: "OPTIONS.VIEW",
            321: "ADDIN.MANAGER",
            322: "MENU.EDITOR",
            323: "ATTACH.TOOLBARS",
            324: "VBAActivate",
            325: "OPTIONS.CHART",
            328: "VBA.INSERT.FILE",
            330: "VBA.PROCEDURE.DEFINITION",
            336: "ROUTING.SLIP",
            338: "ROUTE.DOCUMENT",
            339: "MAIL.LOGON",
            342: "INSERT.PICTURE",
            343: "EDIT.TOOL",
            344: "GALLERY.DOUGHNUT",
            350: "CHART.TREND",
            352: "PIVOT.ITEM.PROPERTIES",
            354: "WORKBOOK.INSERT",
            355: "OPTIONS.TRANSITION",
            356: "OPTIONS.GENERAL",
            370: "FILTER.ADVANCED",
            373: "MAIL.ADD.MAILER",
            374: "MAIL.DELETE.MAILER",
            375: "MAIL.REPLY",
            376: "MAIL.REPLY.ALL",
            377: "MAIL.FORWARD",
            378: "MAIL.NEXT.LETTER",
            379: "DATA.LABEL",
            380: "INSERT.TITLE",
            381: "FONT.PROPERTIES",
            382: "MACRO.OPTIONS",
            383: "WORKBOOK.HIDE",
            384: "WORKBOOK.UNHIDE",
            385: "WORKBOOK.DELETE",
            386: "WORKBOOK.NAME",
            388: "GALLERY.CUSTOM",
            390: "ADD.CHART.AUTOFORMAT",
            391: "DELETE.CHART.AUTOFORMAT",
            392: "CHART.ADD.DATA",
            393: "AUTO.OUTLINE",
            394: "TAB.ORDER",
            395: "SHOW.DIALOG",
            396: "SELECT.ALL",
            397: "UNGROUP.SHEETS",
            398: "SUBTOTAL.CREATE",
            399: "SUBTOTAL.REMOVE",
            400: "RENAME.OBJECT",
            412: "WORKBOOK.SCROLL",
            413: "WORKBOOK.NEXT",
            414: "WORKBOOK.PREV",
            415: "WORKBOOK.TAB.SPLIT",
            416: "FULL.SCREEN",
            417: "WORKBOOK.PROTECT",
            420: "SCROLLBAR.PROPERTIES",
            421: "PIVOT.SHOW.PAGES",
            422: "TEXT.TO.COLUMNS",
            423: "FORMAT.CHARTTYPE",
            424: "LINK.FORMAT",
            425: "TRACER.DISPLAY",
            430: "TRACER.NAVIGATE",
            431: "TRACER.CLEAR",
            432: "TRACER.ERROR",
            433: "PIVOT.FIELD.GROUP",
            434: "PIVOT.FIELD.UNGROUP",
            435: "CHECKBOX.PROPERTIES",
            436: "LABEL.PROPERTIES",
            437: "LISTBOX.PROPERTIES",
            438: "EDITBOX.PROPERTIES",
            439: "PIVOT.REFRESH",
            440: "LINK.COMBO",
            441: "OPEN.TEXT",
            442: "HIDE.DIALOG",
            443: "SET.DIALOG.FOCUS",
            444: "ENABLE.OBJECT",
            445: "PUSHBUTTON.PROPERTIES",
            446: "SET.DIALOG.DEFAULT",
            447: "FILTER",
            448: "FILTER.SHOW.ALL",
            449: "CLEAR.OUTLINE",
            450: "FUNCTION.WIZARD",
            451: "ADD.LIST.ITEM",
            452: "SET.LIST.ITEM",
            453: "REMOVE.LIST.ITEM",
            454: "SELECT.LIST.ITEM",
            455: "SET.CONTROL.VALUE",
            456: "SAVE.COPY.AS",
            458: "OPTIONS.LISTS.ADD",
            459: "OPTIONS.LISTS.DELETE",
            460: "SERIES.AXES",
            461: "SERIES.X",
            462: "SERIES.Y",
            463: "ERRORBAR.X",
            464: "ERRORBAR.Y",
            465: "FORMAT.CHART",
            466: "SERIES.ORDER",
            467: "MAIL.LOGOFF",
            468: "CLEAR.ROUTING.SLIP",
            469: "APP.ACTIVATE.MICROSOFT",
            470: "MAIL.EDIT.MAILER",
            471: "ON.SHEET",
            472: "STANDARD.WIDTH",
            473: "SCENARIO.MERGE",
            474: "SUMMARY.INFO",
            475: "FIND.FILE",
            476: "ACTIVE.CELL.FONT",
            477: "ENABLE.TIPWIZARD",
            478: "VBA.MAKE.ADDIN",
            480: "INSERTDATATABLE",
            481: "WORKGROUP.OPTIONS",
            482: "MAIL.SEND.MAILER",
            485: "AUTOCORRECT",
            489: "POST.DOCUMENT",
            491: "PICKLIST",
            493: "VIEW.SHOW",
            494: "VIEW.DEFINE",
            495: "VIEW.DELETE",
            509: "SHEET.BACKGROUND",
            510: "INSERT.MAP.OBJECT",
            511: "OPTIONS.MENONO",
            517: "MSOCHECKS",
            518: "NORMAL",
            519: "LAYOUT",
            520: "RM.PRINT.AREA",
            521: "CLEAR.PRINT.AREA",
            522: "ADD.PRINT.AREA",
            523: "MOVE.BRK",
            545: "HIDECURR.NOTE",
            546: "HIDEALL.NOTES",
            547: "DELETE.NOTE",
            548: "TRAVERSE.NOTES",
            549: "ACTIVATE.NOTES",
            620: "PROTECT.REVISIONS",
            621: "UNPROTECT.REVISIONS",
            647: "OPTIONS.ME",
            653: "WEB.PUBLISH",
            667: "NEWWEBQUERY",
            673: "PIVOT.TABLE.CHART",
            753: "OPTIONS.SAVE",
            755: "OPTIONS.SPELL",
            808: "HIDEALL.INKANNOTS",
          },
          Ua = {
            0: "COUNT",
            1: "IF",
            2: "ISNA",
            3: "ISERROR",
            4: "SUM",
            5: "AVERAGE",
            6: "MIN",
            7: "MAX",
            8: "ROW",
            9: "COLUMN",
            10: "NA",
            11: "NPV",
            12: "STDEV",
            13: "DOLLAR",
            14: "FIXED",
            15: "SIN",
            16: "COS",
            17: "TAN",
            18: "ATAN",
            19: "PI",
            20: "SQRT",
            21: "EXP",
            22: "LN",
            23: "LOG10",
            24: "ABS",
            25: "INT",
            26: "SIGN",
            27: "ROUND",
            28: "LOOKUP",
            29: "INDEX",
            30: "REPT",
            31: "MID",
            32: "LEN",
            33: "VALUE",
            34: "TRUE",
            35: "FALSE",
            36: "AND",
            37: "OR",
            38: "NOT",
            39: "MOD",
            40: "DCOUNT",
            41: "DSUM",
            42: "DAVERAGE",
            43: "DMIN",
            44: "DMAX",
            45: "DSTDEV",
            46: "VAR",
            47: "DVAR",
            48: "TEXT",
            49: "LINEST",
            50: "TREND",
            51: "LOGEST",
            52: "GROWTH",
            53: "GOTO",
            54: "HALT",
            55: "RETURN",
            56: "PV",
            57: "FV",
            58: "NPER",
            59: "PMT",
            60: "RATE",
            61: "MIRR",
            62: "IRR",
            63: "RAND",
            64: "MATCH",
            65: "DATE",
            66: "TIME",
            67: "DAY",
            68: "MONTH",
            69: "YEAR",
            70: "WEEKDAY",
            71: "HOUR",
            72: "MINUTE",
            73: "SECOND",
            74: "NOW",
            75: "AREAS",
            76: "ROWS",
            77: "COLUMNS",
            78: "OFFSET",
            79: "ABSREF",
            80: "RELREF",
            81: "ARGUMENT",
            82: "SEARCH",
            83: "TRANSPOSE",
            84: "ERROR",
            85: "STEP",
            86: "TYPE",
            87: "ECHO",
            88: "SET.NAME",
            89: "CALLER",
            90: "DEREF",
            91: "WINDOWS",
            92: "SERIES",
            93: "DOCUMENTS",
            94: "ACTIVE.CELL",
            95: "SELECTION",
            96: "RESULT",
            97: "ATAN2",
            98: "ASIN",
            99: "ACOS",
            100: "CHOOSE",
            101: "HLOOKUP",
            102: "VLOOKUP",
            103: "LINKS",
            104: "INPUT",
            105: "ISREF",
            106: "GET.FORMULA",
            107: "GET.NAME",
            108: "SET.VALUE",
            109: "LOG",
            110: "EXEC",
            111: "CHAR",
            112: "LOWER",
            113: "UPPER",
            114: "PROPER",
            115: "LEFT",
            116: "RIGHT",
            117: "EXACT",
            118: "TRIM",
            119: "REPLACE",
            120: "SUBSTITUTE",
            121: "CODE",
            122: "NAMES",
            123: "DIRECTORY",
            124: "FIND",
            125: "CELL",
            126: "ISERR",
            127: "ISTEXT",
            128: "ISNUMBER",
            129: "ISBLANK",
            130: "T",
            131: "N",
            132: "FOPEN",
            133: "FCLOSE",
            134: "FSIZE",
            135: "FREADLN",
            136: "FREAD",
            137: "FWRITELN",
            138: "FWRITE",
            139: "FPOS",
            140: "DATEVALUE",
            141: "TIMEVALUE",
            142: "SLN",
            143: "SYD",
            144: "DDB",
            145: "GET.DEF",
            146: "REFTEXT",
            147: "TEXTREF",
            148: "INDIRECT",
            149: "REGISTER",
            150: "CALL",
            151: "ADD.BAR",
            152: "ADD.MENU",
            153: "ADD.COMMAND",
            154: "ENABLE.COMMAND",
            155: "CHECK.COMMAND",
            156: "RENAME.COMMAND",
            157: "SHOW.BAR",
            158: "DELETE.MENU",
            159: "DELETE.COMMAND",
            160: "GET.CHART.ITEM",
            161: "DIALOG.BOX",
            162: "CLEAN",
            163: "MDETERM",
            164: "MINVERSE",
            165: "MMULT",
            166: "FILES",
            167: "IPMT",
            168: "PPMT",
            169: "COUNTA",
            170: "CANCEL.KEY",
            171: "FOR",
            172: "WHILE",
            173: "BREAK",
            174: "NEXT",
            175: "INITIATE",
            176: "REQUEST",
            177: "POKE",
            178: "EXECUTE",
            179: "TERMINATE",
            180: "RESTART",
            181: "HELP",
            182: "GET.BAR",
            183: "PRODUCT",
            184: "FACT",
            185: "GET.CELL",
            186: "GET.WORKSPACE",
            187: "GET.WINDOW",
            188: "GET.DOCUMENT",
            189: "DPRODUCT",
            190: "ISNONTEXT",
            191: "GET.NOTE",
            192: "NOTE",
            193: "STDEVP",
            194: "VARP",
            195: "DSTDEVP",
            196: "DVARP",
            197: "TRUNC",
            198: "ISLOGICAL",
            199: "DCOUNTA",
            200: "DELETE.BAR",
            201: "UNREGISTER",
            204: "USDOLLAR",
            205: "FINDB",
            206: "SEARCHB",
            207: "REPLACEB",
            208: "LEFTB",
            209: "RIGHTB",
            210: "MIDB",
            211: "LENB",
            212: "ROUNDUP",
            213: "ROUNDDOWN",
            214: "ASC",
            215: "DBCS",
            216: "RANK",
            219: "ADDRESS",
            220: "DAYS360",
            221: "TODAY",
            222: "VDB",
            223: "ELSE",
            224: "ELSE.IF",
            225: "END.IF",
            226: "FOR.CELL",
            227: "MEDIAN",
            228: "SUMPRODUCT",
            229: "SINH",
            230: "COSH",
            231: "TANH",
            232: "ASINH",
            233: "ACOSH",
            234: "ATANH",
            235: "DGET",
            236: "CREATE.OBJECT",
            237: "VOLATILE",
            238: "LAST.ERROR",
            239: "CUSTOM.UNDO",
            240: "CUSTOM.REPEAT",
            241: "FORMULA.CONVERT",
            242: "GET.LINK.INFO",
            243: "TEXT.BOX",
            244: "INFO",
            245: "GROUP",
            246: "GET.OBJECT",
            247: "DB",
            248: "PAUSE",
            251: "RESUME",
            252: "FREQUENCY",
            253: "ADD.TOOLBAR",
            254: "DELETE.TOOLBAR",
            255: "User",
            256: "RESET.TOOLBAR",
            257: "EVALUATE",
            258: "GET.TOOLBAR",
            259: "GET.TOOL",
            260: "SPELLING.CHECK",
            261: "ERROR.TYPE",
            262: "APP.TITLE",
            263: "WINDOW.TITLE",
            264: "SAVE.TOOLBAR",
            265: "ENABLE.TOOL",
            266: "PRESS.TOOL",
            267: "REGISTER.ID",
            268: "GET.WORKBOOK",
            269: "AVEDEV",
            270: "BETADIST",
            271: "GAMMALN",
            272: "BETAINV",
            273: "BINOMDIST",
            274: "CHIDIST",
            275: "CHIINV",
            276: "COMBIN",
            277: "CONFIDENCE",
            278: "CRITBINOM",
            279: "EVEN",
            280: "EXPONDIST",
            281: "FDIST",
            282: "FINV",
            283: "FISHER",
            284: "FISHERINV",
            285: "FLOOR",
            286: "GAMMADIST",
            287: "GAMMAINV",
            288: "CEILING",
            289: "HYPGEOMDIST",
            290: "LOGNORMDIST",
            291: "LOGINV",
            292: "NEGBINOMDIST",
            293: "NORMDIST",
            294: "NORMSDIST",
            295: "NORMINV",
            296: "NORMSINV",
            297: "STANDARDIZE",
            298: "ODD",
            299: "PERMUT",
            300: "POISSON",
            301: "TDIST",
            302: "WEIBULL",
            303: "SUMXMY2",
            304: "SUMX2MY2",
            305: "SUMX2PY2",
            306: "CHITEST",
            307: "CORREL",
            308: "COVAR",
            309: "FORECAST",
            310: "FTEST",
            311: "INTERCEPT",
            312: "PEARSON",
            313: "RSQ",
            314: "STEYX",
            315: "SLOPE",
            316: "TTEST",
            317: "PROB",
            318: "DEVSQ",
            319: "GEOMEAN",
            320: "HARMEAN",
            321: "SUMSQ",
            322: "KURT",
            323: "SKEW",
            324: "ZTEST",
            325: "LARGE",
            326: "SMALL",
            327: "QUARTILE",
            328: "PERCENTILE",
            329: "PERCENTRANK",
            330: "MODE",
            331: "TRIMMEAN",
            332: "TINV",
            334: "MOVIE.COMMAND",
            335: "GET.MOVIE",
            336: "CONCATENATE",
            337: "POWER",
            338: "PIVOT.ADD.DATA",
            339: "GET.PIVOT.TABLE",
            340: "GET.PIVOT.FIELD",
            341: "GET.PIVOT.ITEM",
            342: "RADIANS",
            343: "DEGREES",
            344: "SUBTOTAL",
            345: "SUMIF",
            346: "COUNTIF",
            347: "COUNTBLANK",
            348: "SCENARIO.GET",
            349: "OPTIONS.LISTS.GET",
            350: "ISPMT",
            351: "DATEDIF",
            352: "DATESTRING",
            353: "NUMBERSTRING",
            354: "ROMAN",
            355: "OPEN.DIALOG",
            356: "SAVE.DIALOG",
            357: "VIEW.GET",
            358: "GETPIVOTDATA",
            359: "HYPERLINK",
            360: "PHONETIC",
            361: "AVERAGEA",
            362: "MAXA",
            363: "MINA",
            364: "STDEVPA",
            365: "VARPA",
            366: "STDEVA",
            367: "VARA",
            368: "BAHTTEXT",
            369: "THAIDAYOFWEEK",
            370: "THAIDIGIT",
            371: "THAIMONTHOFYEAR",
            372: "THAINUMSOUND",
            373: "THAINUMSTRING",
            374: "THAISTRINGLENGTH",
            375: "ISTHAIDIGIT",
            376: "ROUNDBAHTDOWN",
            377: "ROUNDBAHTUP",
            378: "THAIYEAR",
            379: "RTD",
            380: "CUBEVALUE",
            381: "CUBEMEMBER",
            382: "CUBEMEMBERPROPERTY",
            383: "CUBERANKEDMEMBER",
            384: "HEX2BIN",
            385: "HEX2DEC",
            386: "HEX2OCT",
            387: "DEC2BIN",
            388: "DEC2HEX",
            389: "DEC2OCT",
            390: "OCT2BIN",
            391: "OCT2HEX",
            392: "OCT2DEC",
            393: "BIN2DEC",
            394: "BIN2OCT",
            395: "BIN2HEX",
            396: "IMSUB",
            397: "IMDIV",
            398: "IMPOWER",
            399: "IMABS",
            400: "IMSQRT",
            401: "IMLN",
            402: "IMLOG2",
            403: "IMLOG10",
            404: "IMSIN",
            405: "IMCOS",
            406: "IMEXP",
            407: "IMARGUMENT",
            408: "IMCONJUGATE",
            409: "IMAGINARY",
            410: "IMREAL",
            411: "COMPLEX",
            412: "IMSUM",
            413: "IMPRODUCT",
            414: "SERIESSUM",
            415: "FACTDOUBLE",
            416: "SQRTPI",
            417: "QUOTIENT",
            418: "DELTA",
            419: "GESTEP",
            420: "ISEVEN",
            421: "ISODD",
            422: "MROUND",
            423: "ERF",
            424: "ERFC",
            425: "BESSELJ",
            426: "BESSELK",
            427: "BESSELY",
            428: "BESSELI",
            429: "XIRR",
            430: "XNPV",
            431: "PRICEMAT",
            432: "YIELDMAT",
            433: "INTRATE",
            434: "RECEIVED",
            435: "DISC",
            436: "PRICEDISC",
            437: "YIELDDISC",
            438: "TBILLEQ",
            439: "TBILLPRICE",
            440: "TBILLYIELD",
            441: "PRICE",
            442: "YIELD",
            443: "DOLLARDE",
            444: "DOLLARFR",
            445: "NOMINAL",
            446: "EFFECT",
            447: "CUMPRINC",
            448: "CUMIPMT",
            449: "EDATE",
            450: "EOMONTH",
            451: "YEARFRAC",
            452: "COUPDAYBS",
            453: "COUPDAYS",
            454: "COUPDAYSNC",
            455: "COUPNCD",
            456: "COUPNUM",
            457: "COUPPCD",
            458: "DURATION",
            459: "MDURATION",
            460: "ODDLPRICE",
            461: "ODDLYIELD",
            462: "ODDFPRICE",
            463: "ODDFYIELD",
            464: "RANDBETWEEN",
            465: "WEEKNUM",
            466: "AMORDEGRC",
            467: "AMORLINC",
            468: "CONVERT",
            724: "SHEETJS",
            469: "ACCRINT",
            470: "ACCRINTM",
            471: "WORKDAY",
            472: "NETWORKDAYS",
            473: "GCD",
            474: "MULTINOMIAL",
            475: "LCM",
            476: "FVSCHEDULE",
            477: "CUBEKPIMEMBER",
            478: "CUBESET",
            479: "CUBESETCOUNT",
            480: "IFERROR",
            481: "COUNTIFS",
            482: "SUMIFS",
            483: "AVERAGEIF",
            484: "AVERAGEIFS",
          },
          Xa = {
            2: 1,
            3: 1,
            10: 0,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 0,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 2,
            30: 2,
            31: 3,
            32: 1,
            33: 1,
            34: 0,
            35: 0,
            38: 1,
            39: 2,
            40: 3,
            41: 3,
            42: 3,
            43: 3,
            44: 3,
            45: 3,
            47: 3,
            48: 2,
            53: 1,
            61: 3,
            63: 0,
            65: 3,
            66: 3,
            67: 1,
            68: 1,
            69: 1,
            70: 1,
            71: 1,
            72: 1,
            73: 1,
            74: 0,
            75: 1,
            76: 1,
            77: 1,
            79: 2,
            80: 2,
            83: 1,
            85: 0,
            86: 1,
            89: 0,
            90: 1,
            94: 0,
            95: 0,
            97: 2,
            98: 1,
            99: 1,
            101: 3,
            102: 3,
            105: 1,
            106: 1,
            108: 2,
            111: 1,
            112: 1,
            113: 1,
            114: 1,
            117: 2,
            118: 1,
            119: 4,
            121: 1,
            126: 1,
            127: 1,
            128: 1,
            129: 1,
            130: 1,
            131: 1,
            133: 1,
            134: 1,
            135: 1,
            136: 2,
            137: 2,
            138: 2,
            140: 1,
            141: 1,
            142: 3,
            143: 4,
            144: 4,
            161: 1,
            162: 1,
            163: 1,
            164: 1,
            165: 2,
            172: 1,
            175: 2,
            176: 2,
            177: 3,
            178: 2,
            179: 1,
            184: 1,
            186: 1,
            189: 3,
            190: 1,
            195: 3,
            196: 3,
            197: 1,
            198: 1,
            199: 3,
            201: 1,
            207: 4,
            210: 3,
            211: 1,
            212: 2,
            213: 2,
            214: 1,
            215: 1,
            225: 0,
            229: 1,
            230: 1,
            231: 1,
            232: 1,
            233: 1,
            234: 1,
            235: 3,
            244: 1,
            247: 4,
            252: 2,
            257: 1,
            261: 1,
            271: 1,
            273: 4,
            274: 2,
            275: 2,
            276: 2,
            277: 3,
            278: 3,
            279: 1,
            280: 3,
            281: 3,
            282: 3,
            283: 1,
            284: 1,
            285: 2,
            286: 4,
            287: 3,
            288: 2,
            289: 4,
            290: 3,
            291: 3,
            292: 3,
            293: 4,
            294: 1,
            295: 3,
            296: 1,
            297: 3,
            298: 1,
            299: 2,
            300: 3,
            301: 3,
            302: 4,
            303: 2,
            304: 2,
            305: 2,
            306: 2,
            307: 2,
            308: 2,
            309: 3,
            310: 2,
            311: 2,
            312: 2,
            313: 2,
            314: 2,
            315: 2,
            316: 4,
            325: 2,
            326: 2,
            327: 2,
            328: 2,
            331: 2,
            332: 2,
            337: 2,
            342: 1,
            343: 1,
            346: 2,
            347: 1,
            350: 4,
            351: 3,
            352: 1,
            353: 2,
            360: 1,
            368: 1,
            369: 1,
            370: 1,
            371: 1,
            372: 1,
            373: 1,
            374: 1,
            375: 1,
            376: 1,
            377: 1,
            378: 1,
            382: 3,
            385: 1,
            392: 1,
            393: 1,
            396: 2,
            397: 2,
            398: 2,
            399: 1,
            400: 1,
            401: 1,
            402: 1,
            403: 1,
            404: 1,
            405: 1,
            406: 1,
            407: 1,
            408: 1,
            409: 1,
            410: 1,
            414: 4,
            415: 1,
            416: 1,
            417: 2,
            420: 1,
            421: 1,
            422: 2,
            424: 1,
            425: 2,
            426: 2,
            427: 2,
            428: 2,
            430: 3,
            438: 3,
            439: 3,
            440: 3,
            443: 2,
            444: 2,
            445: 2,
            446: 2,
            447: 6,
            448: 6,
            449: 2,
            450: 2,
            464: 2,
            468: 3,
            476: 2,
            479: 1,
            480: 2,
            65535: 0,
          },
          Va = {
            "_xlfn.ACOT": "ACOT",
            "_xlfn.ACOTH": "ACOTH",
            "_xlfn.AGGREGATE": "AGGREGATE",
            "_xlfn.ARABIC": "ARABIC",
            "_xlfn.AVERAGEIF": "AVERAGEIF",
            "_xlfn.AVERAGEIFS": "AVERAGEIFS",
            "_xlfn.BASE": "BASE",
            "_xlfn.BETA.DIST": "BETA.DIST",
            "_xlfn.BETA.INV": "BETA.INV",
            "_xlfn.BINOM.DIST": "BINOM.DIST",
            "_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
            "_xlfn.BINOM.INV": "BINOM.INV",
            "_xlfn.BITAND": "BITAND",
            "_xlfn.BITLSHIFT": "BITLSHIFT",
            "_xlfn.BITOR": "BITOR",
            "_xlfn.BITRSHIFT": "BITRSHIFT",
            "_xlfn.BITXOR": "BITXOR",
            "_xlfn.CEILING.MATH": "CEILING.MATH",
            "_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
            "_xlfn.CHISQ.DIST": "CHISQ.DIST",
            "_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
            "_xlfn.CHISQ.INV": "CHISQ.INV",
            "_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
            "_xlfn.CHISQ.TEST": "CHISQ.TEST",
            "_xlfn.COMBINA": "COMBINA",
            "_xlfn.CONCAT": "CONCAT",
            "_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
            "_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
            "_xlfn.COT": "COT",
            "_xlfn.COTH": "COTH",
            "_xlfn.COUNTIFS": "COUNTIFS",
            "_xlfn.COVARIANCE.P": "COVARIANCE.P",
            "_xlfn.COVARIANCE.S": "COVARIANCE.S",
            "_xlfn.CSC": "CSC",
            "_xlfn.CSCH": "CSCH",
            "_xlfn.DAYS": "DAYS",
            "_xlfn.DECIMAL": "DECIMAL",
            "_xlfn.ECMA.CEILING": "ECMA.CEILING",
            "_xlfn.ERF.PRECISE": "ERF.PRECISE",
            "_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
            "_xlfn.EXPON.DIST": "EXPON.DIST",
            "_xlfn.F.DIST": "F.DIST",
            "_xlfn.F.DIST.RT": "F.DIST.RT",
            "_xlfn.F.INV": "F.INV",
            "_xlfn.F.INV.RT": "F.INV.RT",
            "_xlfn.F.TEST": "F.TEST",
            "_xlfn.FILTERXML": "FILTERXML",
            "_xlfn.FLOOR.MATH": "FLOOR.MATH",
            "_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
            "_xlfn.FORECAST.ETS": "FORECAST.ETS",
            "_xlfn.FORECAST.ETS.CONFINT": "FORECAST.ETS.CONFINT",
            "_xlfn.FORECAST.ETS.SEASONALITY": "FORECAST.ETS.SEASONALITY",
            "_xlfn.FORECAST.ETS.STAT": "FORECAST.ETS.STAT",
            "_xlfn.FORECAST.LINEAR": "FORECAST.LINEAR",
            "_xlfn.FORMULATEXT": "FORMULATEXT",
            "_xlfn.GAMMA": "GAMMA",
            "_xlfn.GAMMA.DIST": "GAMMA.DIST",
            "_xlfn.GAMMA.INV": "GAMMA.INV",
            "_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
            "_xlfn.GAUSS": "GAUSS",
            "_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
            "_xlfn.IFERROR": "IFERROR",
            "_xlfn.IFNA": "IFNA",
            "_xlfn.IFS": "IFS",
            "_xlfn.IMCOSH": "IMCOSH",
            "_xlfn.IMCOT": "IMCOT",
            "_xlfn.IMCSC": "IMCSC",
            "_xlfn.IMCSCH": "IMCSCH",
            "_xlfn.IMSEC": "IMSEC",
            "_xlfn.IMSECH": "IMSECH",
            "_xlfn.IMSINH": "IMSINH",
            "_xlfn.IMTAN": "IMTAN",
            "_xlfn.ISFORMULA": "ISFORMULA",
            "_xlfn.ISO.CEILING": "ISO.CEILING",
            "_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
            "_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
            "_xlfn.LOGNORM.INV": "LOGNORM.INV",
            "_xlfn.MAXIFS": "MAXIFS",
            "_xlfn.MINIFS": "MINIFS",
            "_xlfn.MODE.MULT": "MODE.MULT",
            "_xlfn.MODE.SNGL": "MODE.SNGL",
            "_xlfn.MUNIT": "MUNIT",
            "_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
            "_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
            "_xlfn.NIGBINOM": "NIGBINOM",
            "_xlfn.NORM.DIST": "NORM.DIST",
            "_xlfn.NORM.INV": "NORM.INV",
            "_xlfn.NORM.S.DIST": "NORM.S.DIST",
            "_xlfn.NORM.S.INV": "NORM.S.INV",
            "_xlfn.NUMBERVALUE": "NUMBERVALUE",
            "_xlfn.PDURATION": "PDURATION",
            "_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
            "_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
            "_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
            "_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
            "_xlfn.PERMUTATIONA": "PERMUTATIONA",
            "_xlfn.PHI": "PHI",
            "_xlfn.POISSON.DIST": "POISSON.DIST",
            "_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
            "_xlfn.QUARTILE.INC": "QUARTILE.INC",
            "_xlfn.QUERYSTRING": "QUERYSTRING",
            "_xlfn.RANK.AVG": "RANK.AVG",
            "_xlfn.RANK.EQ": "RANK.EQ",
            "_xlfn.RRI": "RRI",
            "_xlfn.SEC": "SEC",
            "_xlfn.SECH": "SECH",
            "_xlfn.SHEET": "SHEET",
            "_xlfn.SHEETS": "SHEETS",
            "_xlfn.SKEW.P": "SKEW.P",
            "_xlfn.STDEV.P": "STDEV.P",
            "_xlfn.STDEV.S": "STDEV.S",
            "_xlfn.SUMIFS": "SUMIFS",
            "_xlfn.SWITCH": "SWITCH",
            "_xlfn.T.DIST": "T.DIST",
            "_xlfn.T.DIST.2T": "T.DIST.2T",
            "_xlfn.T.DIST.RT": "T.DIST.RT",
            "_xlfn.T.INV": "T.INV",
            "_xlfn.T.INV.2T": "T.INV.2T",
            "_xlfn.T.TEST": "T.TEST",
            "_xlfn.TEXTJOIN": "TEXTJOIN",
            "_xlfn.UNICHAR": "UNICHAR",
            "_xlfn.UNICODE": "UNICODE",
            "_xlfn.VAR.P": "VAR.P",
            "_xlfn.VAR.S": "VAR.S",
            "_xlfn.WEBSERVICE": "WEBSERVICE",
            "_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
            "_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
            "_xlfn.XOR": "XOR",
            "_xlfn.Z.TEST": "Z.TEST",
          };
        function Ga(t) {
          return (
            "of:" == t.slice(0, 3) && (t = t.slice(3)),
            61 == t.charCodeAt(0) &&
              61 == (t = t.slice(1)).charCodeAt(0) &&
              (t = t.slice(1)),
            (t = (t = (t = t.replace(/COM\.MICROSOFT\./g, "")).replace(
              /\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,
              function (t, e) {
                return e.replace(/\./g, "");
              }
            )).replace(/\[.(#[A-Z]*[?!])\]/g, "$1"))
              .replace(/[;~]/g, ",")
              .replace(/\|/g, ";")
          );
        }
        function Ka(t) {
          var e = t.split(":");
          return [
            e[0].split(".")[0],
            e[0].split(".")[1] +
              (e.length > 1
                ? ":" + (e[1].split(".")[1] || e[1].split(".")[0])
                : ""),
          ];
        }
        var Za = {},
          Ja = {};
        Yn.WS = [
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
          "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
        ];
        var Qa = "undefined" != typeof Map;
        function ts(t, e, n) {
          var i = 0,
            r = t.length;
          if (n) {
            if (Qa ? n.has(e) : n.hasOwnProperty(e))
              for (var o = Qa ? n.get(e) : n[e]; i < o.length; ++i)
                if (t[o[i]].t === e) return t.Count++, o[i];
          } else for (; i < r; ++i) if (t[i].t === e) return t.Count++, i;
          return (
            (t[r] = { t: e }),
            t.Count++,
            t.Unique++,
            n &&
              (Qa
                ? (n.has(e) || n.set(e, []), n.get(e).push(r))
                : (n.hasOwnProperty(e) || (n[e] = []), n[e].push(r))),
            r
          );
        }
        function es(t, e) {
          var n = { min: t + 1, max: t + 1 },
            i = -1;
          return (
            e.MDW && (oo = e.MDW),
            null != e.width
              ? (n.customWidth = 1)
              : null != e.wpx
              ? (i = so(e.wpx))
              : null != e.wch && (i = e.wch),
            i > -1
              ? ((n.width = lo(i)), (n.customWidth = 1))
              : null != e.width && (n.width = e.width),
            e.hidden && (n.hidden = !0),
            n
          );
        }
        function ns(t, e) {
          if (t) {
            var n = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
            "xlml" == e && (n = [1, 1, 1, 1, 0.5, 0.5]),
              null == t.left && (t.left = n[0]),
              null == t.right && (t.right = n[1]),
              null == t.top && (t.top = n[2]),
              null == t.bottom && (t.bottom = n[3]),
              null == t.header && (t.header = n[4]),
              null == t.footer && (t.footer = n[5]);
          }
        }
        function is(t, e, n) {
          var i = n.revssf[null != e.z ? e.z : "General"],
            r = 60,
            o = t.length;
          if (null == i && n.ssf)
            for (; r < 392; ++r)
              if (null == n.ssf[r]) {
                q.load(e.z, r), (n.ssf[r] = e.z), (n.revssf[e.z] = i = r);
                break;
              }
          for (r = 0; r != o; ++r) if (t[r].numFmtId === i) return r;
          return (
            (t[o] = {
              numFmtId: i,
              fontId: 0,
              fillId: 0,
              borderId: 0,
              xfId: 0,
              applyNumberFormat: 1,
            }),
            o
          );
        }
        function rs(t, e, n, i, r, o) {
          if ("z" !== t.t) {
            "d" === t.t && "string" == typeof t.v && (t.v = tt(t.v));
            try {
              i.cellNF && (t.z = q._table[e]);
            } catch (t) {
              if (i.WTF) throw t;
            }
            if (!i || !1 !== i.cellText)
              try {
                if (
                  (null == q._table[e] && q.load(R[e] || "General", e),
                  "e" === t.t)
                )
                  t.w = t.w || zn[t.v];
                else if (0 === e)
                  if ("n" === t.t)
                    (0 | t.v) === t.v
                      ? (t.w = q._general_int(t.v))
                      : (t.w = q._general_num(t.v));
                  else if ("d" === t.t) {
                    var a = G(t.v);
                    t.w = (0 | a) === a ? q._general_int(a) : q._general_num(a);
                  } else {
                    if (void 0 === t.v) return "";
                    t.w = q._general(t.v, Ja);
                  }
                else
                  "d" === t.t
                    ? (t.w = q.format(e, G(t.v), Ja))
                    : (t.w = q.format(e, t.v, Ja));
              } catch (t) {
                if (i.WTF) throw t;
              }
            if (i.cellStyles && null != n)
              try {
                (t.s = o.Fills[n]),
                  t.s.fgColor &&
                    t.s.fgColor.theme &&
                    !t.s.fgColor.rgb &&
                    ((t.s.fgColor.rgb = ro(
                      r.themeElements.clrScheme[t.s.fgColor.theme].rgb,
                      t.s.fgColor.tint || 0
                    )),
                    i.WTF &&
                      (t.s.fgColor.raw_rgb =
                        r.themeElements.clrScheme[t.s.fgColor.theme].rgb)),
                  t.s.bgColor &&
                    t.s.bgColor.theme &&
                    ((t.s.bgColor.rgb = ro(
                      r.themeElements.clrScheme[t.s.bgColor.theme].rgb,
                      t.s.bgColor.tint || 0
                    )),
                    i.WTF &&
                      (t.s.bgColor.raw_rgb =
                        r.themeElements.clrScheme[t.s.bgColor.theme].rgb));
              } catch (t) {
                if (i.WTF && o.Fills) throw t;
              }
          }
        }
        function os(t, e, n) {
          if (t && t["!ref"]) {
            var i = Qe(t["!ref"]);
            if (i.e.c < i.s.c || i.e.r < i.s.r)
              throw new Error("Bad range (" + n + "): " + t["!ref"]);
          }
        }
        var as = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
          ss = /<(?:\w+:)?sheetData>([\s\S]*)<\/(?:\w+:)?sheetData>/,
          ls = /<(?:\w:)?hyperlink [^>]*>/gm,
          cs = /"(\w*:\w*)"/,
          ds = /<(?:\w:)?col\b[^>]*[\/]?>/g,
          us =
            /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
          ps = /<(?:\w:)?pageMargins[^>]*\/>/g,
          hs = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
          fs =
            /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
        function bs(t, e, n, i) {
          var r = _t(t);
          n.Sheets[i] || (n.Sheets[i] = {}),
            r.codeName && (n.Sheets[i].CodeName = r.codeName);
        }
        var ms = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/>/;
        function gs(t, e, n, i) {
          if ((void 0 === t.v && void 0 === t.f) || "z" === t.t) return "";
          var r = "",
            o = t.t,
            a = t.v;
          switch (t.t) {
            case "b":
              r = t.v ? "1" : "0";
              break;
            case "n":
              r = "" + t.v;
              break;
            case "e":
              r = zn[t.v];
              break;
            case "d":
              i.cellDates
                ? (r = tt(t.v, -1).toISOString())
                : (((t = nt(t)).t = "n"), (r = "" + (t.v = G(tt(t.v))))),
                void 0 === t.z && (t.z = q._table[14]);
              break;
            default:
              r = t.v;
          }
          var s = Gt("v", kt(r)),
            l = { r: e },
            c = is(i.cellXfs, t, i);
          switch ((0 !== c && (l.s = c), t.t)) {
            case "n":
              break;
            case "d":
              l.t = "d";
              break;
            case "b":
              l.t = "b";
              break;
            case "e":
              l.t = "e";
              break;
            default:
              if (null == t.v) {
                delete t.t;
                break;
              }
              if (i.bookSST) {
                (s = Gt("v", "" + ts(i.Strings, t.v, i.revStrings))),
                  (l.t = "s");
                break;
              }
              l.t = "str";
          }
          if ((t.t != o && ((t.t = o), (t.v = a)), t.f)) {
            var d =
              t.F && t.F.slice(0, e.length) == e
                ? { t: "array", ref: t.F }
                : null;
            s = Zt("f", kt(t.f), d) + (null != t.v ? s : "");
          }
          return (
            t.l && n["!links"].push([e, t.l]),
            t.c && n["!comments"].push([e, t.c]),
            Zt("c", s, l)
          );
        }
        var vs,
          _s,
          ys,
          Ms,
          Os,
          ws,
          As,
          xs =
            ((vs = /<(?:\w+:)?c[ >]/),
            (_s = /<\/(?:\w+:)?row>/),
            (ys = /r=["']([^"']*)["']/),
            (Ms = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/),
            (Os = /ref=["']([^"']*)["']/),
            (ws = Ft("v")),
            (As = Ft("f")),
            function (t, e, n, i, r, o) {
              for (
                var a,
                  s,
                  l,
                  c,
                  d,
                  u = 0,
                  p = "",
                  h = [],
                  f = [],
                  b = 0,
                  m = 0,
                  g = 0,
                  v = "",
                  _ = 0,
                  y = 0,
                  M = 0,
                  O = 0,
                  w = Array.isArray(o.CellXf),
                  A = [],
                  x = [],
                  z = Array.isArray(e),
                  C = [],
                  k = {},
                  S = !1,
                  T = t.split(_s),
                  D = 0,
                  L = T.length;
                D != L;
                ++D
              ) {
                var E = (p = T[D].trim()).length;
                if (0 !== E) {
                  for (u = 0; u < E && 62 !== p.charCodeAt(u); ++u);
                  if (
                    (++u,
                    (_ =
                      null != (s = _t(p.slice(0, u), !0)).r
                        ? parseInt(s.r, 10)
                        : _ + 1),
                    (y = -1),
                    !(n.sheetRows && n.sheetRows < _))
                  )
                    for (
                      i.s.r > _ - 1 && (i.s.r = _ - 1),
                        i.e.r < _ - 1 && (i.e.r = _ - 1),
                        n &&
                          n.cellStyles &&
                          ((k = {}),
                          (S = !1),
                          s.ht &&
                            ((S = !0),
                            (k.hpt = parseFloat(s.ht)),
                            (k.hpx = fo(k.hpt))),
                          "1" == s.hidden && ((S = !0), (k.hidden = !0)),
                          null != s.outlineLevel &&
                            ((S = !0), (k.level = +s.outlineLevel)),
                          S && (C[_ - 1] = k)),
                        h = p.slice(u).split(vs),
                        u = 0;
                      u != h.length;
                      ++u
                    )
                      if (0 !== (p = h[u].trim()).length) {
                        if (
                          ((f = p.match(ys)),
                          (b = u),
                          (m = 0),
                          (g = 0),
                          (p = "<c " + ("<" == p.slice(0, 1) ? ">" : "") + p),
                          null != f && 2 === f.length)
                        ) {
                          for (
                            b = 0, v = f[1], m = 0;
                            m != v.length &&
                            !((g = v.charCodeAt(m) - 64) < 1 || g > 26);
                            ++m
                          )
                            b = 26 * b + g;
                          y = --b;
                        } else ++y;
                        for (
                          m = 0;
                          m != p.length && 62 !== p.charCodeAt(m);
                          ++m
                        );
                        if (
                          (++m,
                          (s = _t(p.slice(0, m), !0)).r ||
                            (s.r = Ke({ r: _ - 1, c: y })),
                          (a = { t: "" }),
                          null != (f = (v = p.slice(m)).match(ws)) &&
                            "" !== f[1] &&
                            (a.v = xt(f[1])),
                          n.cellFormula)
                        ) {
                          null != (f = v.match(As)) && "" !== f[1]
                            ? ((a.f = na(xt(Et(f[1])))),
                              f[0].indexOf('t="array"') > -1
                                ? ((a.F = (v.match(Os) || [])[1]),
                                  a.F.indexOf(":") > -1 &&
                                    A.push([Qe(a.F), a.F]))
                                : f[0].indexOf('t="shared"') > -1 &&
                                  ((c = _t(f[0])),
                                  (x[parseInt(c.si, 10)] = [
                                    c,
                                    na(xt(Et(f[1]))),
                                    s.r,
                                  ])))
                            : (f = v.match(/<f[^>]*\/>/)) &&
                              x[(c = _t(f[0])).si] &&
                              (a.f = ea(x[c.si][1], x[c.si][2], s.r));
                          var j = Ge(s.r);
                          for (m = 0; m < A.length; ++m)
                            j.r >= A[m][0].s.r &&
                              j.r <= A[m][0].e.r &&
                              j.c >= A[m][0].s.c &&
                              j.c <= A[m][0].e.c &&
                              (a.F = A[m][1]);
                        }
                        if (null == s.t && void 0 === a.v)
                          if (a.f || a.F) (a.v = 0), (a.t = "n");
                          else {
                            if (!n.sheetStubs) continue;
                            a.t = "z";
                          }
                        else a.t = s.t || "n";
                        switch (
                          (i.s.c > y && (i.s.c = y),
                          i.e.c < y && (i.e.c = y),
                          a.t)
                        ) {
                          case "n":
                            if ("" == a.v || null == a.v) {
                              if (!n.sheetStubs) continue;
                              a.t = "z";
                            } else a.v = parseFloat(a.v);
                            break;
                          case "s":
                            if (void 0 === a.v) {
                              if (!n.sheetStubs) continue;
                              a.t = "z";
                            } else
                              (l = Za[parseInt(a.v, 10)]),
                                (a.v = l.t),
                                (a.r = l.r),
                                n.cellHTML && (a.h = l.h);
                            break;
                          case "str":
                            (a.t = "s"),
                              (a.v = null != a.v ? Et(a.v) : ""),
                              n.cellHTML && (a.h = Dt(a.v));
                            break;
                          case "inlineStr":
                            (f = v.match(Ms)),
                              (a.t = "s"),
                              null != f && (l = Er(f[1]))
                                ? (a.v = l.t)
                                : (a.v = "");
                            break;
                          case "b":
                            a.v = qt(a.v);
                            break;
                          case "d":
                            n.cellDates
                              ? (a.v = tt(a.v, 1))
                              : ((a.v = G(tt(a.v, 1))), (a.t = "n"));
                            break;
                          case "e":
                            (n && !1 === n.cellText) || (a.w = a.v),
                              (a.v = Cn[a.v]);
                        }
                        if (
                          ((M = O = 0),
                          w &&
                            void 0 !== s.s &&
                            null != (d = o.CellXf[s.s]) &&
                            (null != d.numFmtId && (M = d.numFmtId),
                            n.cellStyles && null != d.fillId && (O = d.fillId)),
                          rs(a, M, O, n, r, o),
                          n.cellDates &&
                            w &&
                            "n" == a.t &&
                            q.is_date(q._table[M]) &&
                            ((a.t = "d"), (a.v = K(a.v))),
                          z)
                        ) {
                          var P = Ge(s.r);
                          e[P.r] || (e[P.r] = []), (e[P.r][P.c] = a);
                        } else e[s.r] = a;
                      }
                }
              }
              C.length > 0 && (e["!rows"] = C);
            }),
          zs = Zt("worksheet", null, { xmlns: ee.main[0], "xmlns:r": ee.r });
        function Cs(t, e, n, i) {
          var r,
            o = [ft, zs],
            a = n.SheetNames[t],
            s = "",
            l = n.Sheets[a];
          null == l && (l = {});
          var c = l["!ref"] || "A1",
            d = Qe(c);
          if (d.e.c > 16383 || d.e.r > 1048575) {
            if (e.WTF)
              throw new Error(
                "Range " + c + " exceeds format limit A1:XFD1048576"
              );
            (d.e.c = Math.min(d.e.c, 16383)),
              (d.e.r = Math.min(d.e.c, 1048575)),
              (c = Je(d));
          }
          if (
            (i || (i = {}),
            (l["!comments"] = []),
            (l["!drawing"] = []),
            "xlsx" !== e.bookType && n.vbaraw)
          ) {
            var u = n.SheetNames[t];
            try {
              n.Workbook && (u = n.Workbook.Sheets[t].CodeName || u);
            } catch (t) {}
            o[o.length] = Zt("sheetPr", null, { codeName: kt(u) });
          }
          (o[o.length] = Zt("dimension", null, { ref: c })),
            (o[o.length] = (function (t, e, n, i) {
              var r = { workbookViewId: "0" };
              return (
                (((i || {}).Workbook || {}).Views || [])[0] &&
                  (r.rightToLeft = i.Workbook.Views[0].RTL ? "1" : "0"),
                Zt("sheetViews", Zt("sheetView", null, r), {})
              );
            })(0, 0, 0, n)),
            e.sheetFormat &&
              (o[o.length] = Zt("sheetFormatPr", null, {
                defaultRowHeight: e.sheetFormat.defaultRowHeight || "16",
                baseColWidth: e.sheetFormat.baseColWidth || "10",
                outlineLevelRow: e.sheetFormat.outlineLevelRow || "7",
              })),
            null != l["!cols"] &&
              l["!cols"].length > 0 &&
              (o[o.length] = (function (t, e) {
                for (var n, i = ["<cols>"], r = 0; r != e.length; ++r)
                  (n = e[r]) && (i[i.length] = Zt("col", null, es(r, n)));
                return (i[i.length] = "</cols>"), i.join("");
              })(0, l["!cols"])),
            (o[(r = o.length)] = "<sheetData/>"),
            (l["!links"] = []),
            null != l["!ref"] &&
              (s = (function (t, e, n, i) {
                var r,
                  o,
                  a = [],
                  s = [],
                  l = Qe(t["!ref"]),
                  c = "",
                  d = "",
                  u = [],
                  p = 0,
                  h = 0,
                  f = t["!rows"],
                  b = Array.isArray(t),
                  m = { r: d },
                  g = -1;
                for (h = l.s.c; h <= l.e.c; ++h) u[h] = Xe(h);
                for (p = l.s.r; p <= l.e.r; ++p) {
                  for (s = [], d = Ye(p), h = l.s.c; h <= l.e.c; ++h) {
                    r = u[h] + d;
                    var v = b ? (t[p] || [])[h] : t[r];
                    void 0 !== v && null != (c = gs(v, r, t, e)) && s.push(c);
                  }
                  (s.length > 0 || (f && f[p])) &&
                    ((m = { r: d }),
                    f &&
                      f[p] &&
                      ((o = f[p]).hidden && (m.hidden = 1),
                      (g = -1),
                      o.hpx ? (g = ho(o.hpx)) : o.hpt && (g = o.hpt),
                      g > -1 && ((m.ht = g), (m.customHeight = 1)),
                      o.level && (m.outlineLevel = o.level)),
                    (a[a.length] = Zt("row", s.join(""), m)));
                }
                if (f)
                  for (; p < f.length; ++p)
                    f &&
                      f[p] &&
                      ((m = { r: p + 1 }),
                      (o = f[p]).hidden && (m.hidden = 1),
                      (g = -1),
                      o.hpx ? (g = ho(o.hpx)) : o.hpt && (g = o.hpt),
                      g > -1 && ((m.ht = g), (m.customHeight = 1)),
                      o.level && (m.outlineLevel = o.level),
                      (a[a.length] = Zt("row", "", m)));
                return a.join("");
              })(l, e)).length > 0 &&
              (o[o.length] = s),
            o.length > r + 1 &&
              ((o[o.length] = "</sheetData>"),
              (o[r] = o[r].replace("/>", ">"))),
            null != l["!protect"] &&
              (o[o.length] = (function (t) {
                var e = { sheet: 1 };
                return (
                  [
                    "objects",
                    "scenarios",
                    "selectLockedCells",
                    "selectUnlockedCells",
                  ].forEach(function (n) {
                    null != t[n] && t[n] && (e[n] = "1");
                  }),
                  [
                    "formatColumns",
                    "formatRows",
                    "formatCells",
                    "insertColumns",
                    "insertRows",
                    "insertHyperlinks",
                    "deleteColumns",
                    "deleteRows",
                    "sort",
                    "autoFilter",
                    "pivotTables",
                  ].forEach(function (n) {
                    null == t[n] || t[n] || (e[n] = "0");
                  }),
                  t.password &&
                    (e.password = Kr(t.password).toString(16).toUpperCase()),
                  Zt("sheetProtection", null, e)
                );
              })(l["!protect"])),
            null != l["!autofilter"] &&
              (o[o.length] = (function (t, e, n, i) {
                var r = "string" == typeof t.ref ? t.ref : Je(t.ref);
                n.Workbook || (n.Workbook = {}),
                  n.Workbook.Names || (n.Workbook.Names = []);
                var o = n.Workbook.Names,
                  a = Ze(r);
                a.s.r == a.e.r && ((a.e.r = Ze(e["!ref"]).e.r), (r = Je(a)));
                for (var s = 0; s < o.length; ++s) {
                  var l = o[s];
                  if ("_xlnm._FilterDatabase" == l.Name && l.Sheet == i) {
                    l.Ref = "'" + n.SheetNames[i] + "'!" + r;
                    break;
                  }
                }
                return (
                  s == o.length &&
                    o.push({
                      Name: "_xlnm._FilterDatabase",
                      Sheet: i,
                      Ref: "'" + n.SheetNames[i] + "'!" + r,
                    }),
                  Zt("autoFilter", null, { ref: r })
                );
              })(l["!autofilter"], l, n, t)),
            null != l["!merges"] &&
              l["!merges"].length > 0 &&
              (o[o.length] = (function (t) {
                if (0 === t.length) return "";
                for (
                  var e = '<mergeCells count="' + t.length + '">', n = 0;
                  n != t.length;
                  ++n
                )
                  e += '<mergeCell ref="' + Je(t[n]) + '"/>';
                return e + "</mergeCells>";
              })(l["!merges"]));
          var p,
            h,
            f = -1,
            b = -1;
          return (
            l["!links"].length > 0 &&
              ((o[o.length] = "<hyperlinks>"),
              l["!links"].forEach(function (t) {
                t[1].Target &&
                  ((p = { ref: t[0] }),
                  "#" != t[1].Target.charAt(0) &&
                    ((b = Kn(
                      i,
                      -1,
                      kt(t[1].Target).replace(/#.*$/, ""),
                      Yn.HLINK
                    )),
                    (p["r:id"] = "rId" + b)),
                  (f = t[1].Target.indexOf("#")) > -1 &&
                    (p.location = kt(t[1].Target.slice(f + 1))),
                  t[1].Tooltip && (p.tooltip = kt(t[1].Tooltip)),
                  (o[o.length] = Zt("hyperlink", null, p)));
              }),
              (o[o.length] = "</hyperlinks>")),
            delete l["!links"],
            null != l["!margins"] &&
              (o[o.length] =
                (ns((h = l["!margins"])), Zt("pageMargins", null, h))),
            (o[o.length] = ""),
            (e && !e.ignoreEC && null != e.ignoreEC) ||
              (o[o.length] = Gt(
                "ignoredErrors",
                Zt("ignoredError", null, { numberStoredAsText: 1, sqref: c })
              )),
            l["!drawing"].length > 0
              ? ((b = Kn(
                  i,
                  -1,
                  "../drawings/drawing" + (t + 1) + ".xml",
                  Yn.DRAW
                )),
                (o[o.length] = Zt("drawing", null, { "r:id": "rId" + b })))
              : delete l["!drawing"],
            l["!comments"].length > 0 &&
              ((b = Kn(
                i,
                -1,
                "../drawings/vmlDrawing" + (t + 1) + ".vml",
                Yn.VML
              )),
              (o[o.length] = Zt("legacyDrawing", null, { "r:id": "rId" + b })),
              (l["!legacy"] = b)),
            o.length > 2 &&
              ((o[o.length] = "</worksheet>"),
              (o[1] = o[1].replace("/>", ">"))),
            o.join("")
          );
        }
        function ks(t, e, n, i) {
          var r = (function (t, e, n) {
            var i = Pe(145),
              r = (n["!rows"] || [])[t] || {};
            i.write_shift(4, t), i.write_shift(4, 0);
            var o = 320;
            r.hpx ? (o = 20 * ho(r.hpx)) : r.hpt && (o = 20 * r.hpt),
              i.write_shift(2, o),
              i.write_shift(1, 0);
            var a = 0;
            r.level && (a |= r.level),
              r.hidden && (a |= 16),
              (r.hpx || r.hpt) && (a |= 32),
              i.write_shift(1, a),
              i.write_shift(1, 0);
            var s = 0,
              l = i.l;
            i.l += 4;
            for (var c = { r: t, c: 0 }, d = 0; d < 16; ++d)
              if (!(e.s.c > (d + 1) << 10 || e.e.c < d << 10)) {
                for (var u = -1, p = -1, h = d << 10; h < (d + 1) << 10; ++h)
                  (c.c = h),
                    (Array.isArray(n) ? (n[c.r] || [])[c.c] : n[Ke(c)]) &&
                      (u < 0 && (u = h), (p = h));
                u < 0 || (++s, i.write_shift(4, u), i.write_shift(4, p));
              }
            var f = i.l;
            return (
              (i.l = l),
              i.write_shift(4, s),
              (i.l = f),
              i.length > i.l ? i.slice(0, i.l) : i
            );
          })(i, n, e);
          (r.length > 17 || (e["!rows"] || [])[i]) && We(t, "BrtRowHdr", r);
        }
        var Ss = On,
          Ts = wn,
          Ds = On,
          Ls = wn,
          qs = ["left", "right", "top", "bottom", "header", "footer"];
        function Es(t, e, n, i, r, o) {
          if (void 0 === e.v) return "";
          var a = "";
          switch (e.t) {
            case "b":
              a = e.v ? "1" : "0";
              break;
            case "d":
              ((e = nt(e)).z = e.z || q._table[14]),
                (e.v = G(tt(e.v))),
                (e.t = "n");
              break;
            case "n":
            case "e":
              a = "" + e.v;
              break;
            default:
              a = e.v;
          }
          var s = { r: n, c: i };
          switch (
            ((s.s = is(r.cellXfs, e, r)),
            e.l && o["!links"].push([Ke(s), e.l]),
            e.c && o["!comments"].push([Ke(s), e.c]),
            e.t)
          ) {
            case "s":
            case "str":
              return void (r.bookSST
                ? ((a = ts(r.Strings, e.v, r.revStrings)),
                  (s.t = "s"),
                  (s.v = a),
                  We(
                    t,
                    "BrtCellIsst",
                    (function (t, e, n) {
                      return (
                        null == n && (n = Pe(12)),
                        pn(e, n),
                        n.write_shift(4, e.v),
                        n
                      );
                    })(0, s)
                  ))
                : ((s.t = "str"),
                  We(
                    t,
                    "BrtCellSt",
                    (function (t, e, n) {
                      return (
                        null == n && (n = Pe(12 + 4 * t.v.length)),
                        pn(e, n),
                        sn(t.v, n),
                        n.length > n.l ? n.slice(0, n.l) : n
                      );
                    })(e, s)
                  )));
            case "n":
              return void (e.v == (0 | e.v) && e.v > -1e3 && e.v < 1e3
                ? We(
                    t,
                    "BrtCellRk",
                    (function (t, e, n) {
                      return (
                        null == n && (n = Pe(12)),
                        pn(e, n),
                        (function (t, e) {
                          null == e && (e = Pe(4));
                          var n = 0,
                            i = 0,
                            r = 100 * t;
                          if (
                            (t == (0 | t) && t >= -(1 << 29) && t < 1 << 29
                              ? (i = 1)
                              : r == (0 | r) &&
                                r >= -(1 << 29) &&
                                r < 1 << 29 &&
                                ((i = 1), (n = 1)),
                            !i)
                          )
                            throw new Error("unsupported RkNumber " + t);
                          e.write_shift(-4, ((n ? r : t) << 2) + (n + 2));
                        })(t.v, n),
                        n
                      );
                    })(e, s)
                  )
                : We(
                    t,
                    "BrtCellReal",
                    (function (t, e, n) {
                      return null == n && (n = Pe(16)), pn(e, n), xn(t.v, n), n;
                    })(e, s)
                  ));
            case "b":
              return (
                (s.t = "b"),
                void We(
                  t,
                  "BrtCellBool",
                  (function (t, e, n) {
                    return (
                      null == n && (n = Pe(9)),
                      pn(e, n),
                      n.write_shift(1, t.v ? 1 : 0),
                      n
                    );
                  })(e, s)
                )
              );
            case "e":
              s.t = "e";
          }
          We(
            t,
            "BrtCellBlank",
            (function (t, e, n) {
              return null == n && (n = Pe(8)), pn(e, n);
            })(0, s)
          );
        }
        function js(t, e, n, i) {
          var r = Ie(),
            o = n.SheetNames[t],
            a = n.Sheets[o] || {},
            s = o;
          try {
            n && n.Workbook && (s = n.Workbook.Sheets[t].CodeName || s);
          } catch (t) {}
          var l = Qe(a["!ref"] || "A1");
          if (l.e.c > 16383 || l.e.r > 1048575) {
            if (e.WTF)
              throw new Error(
                "Range " +
                  (a["!ref"] || "A1") +
                  " exceeds format limit A1:XFD1048576"
              );
            (l.e.c = Math.min(l.e.c, 16383)),
              (l.e.r = Math.min(l.e.c, 1048575));
          }
          return (
            (a["!links"] = []),
            (a["!comments"] = []),
            We(r, "BrtBeginSheet"),
            n.vbaraw &&
              We(
                r,
                "BrtWsProp",
                (function (t, e) {
                  null == e && (e = Pe(84 + 4 * t.length));
                  for (var n = 0; n < 3; ++n) e.write_shift(1, 0);
                  return (
                    kn({ auto: 1 }, e),
                    e.write_shift(-4, -1),
                    e.write_shift(-4, -1),
                    fn(t, e),
                    e.slice(0, e.l)
                  );
                })(s)
              ),
            We(r, "BrtWsDim", Ts(l)),
            (function (t, e, n) {
              We(t, "BrtBeginWsViews"),
                We(
                  t,
                  "BrtBeginWsView",
                  (function (t, e, n) {
                    null == n && (n = Pe(30));
                    var i = 924;
                    return (
                      (((e || {}).Views || [])[0] || {}).RTL && (i |= 32),
                      n.write_shift(2, i),
                      n.write_shift(4, 0),
                      n.write_shift(4, 0),
                      n.write_shift(4, 0),
                      n.write_shift(1, 0),
                      n.write_shift(1, 0),
                      n.write_shift(2, 0),
                      n.write_shift(2, 100),
                      n.write_shift(2, 0),
                      n.write_shift(2, 0),
                      n.write_shift(2, 0),
                      n.write_shift(4, 0),
                      n
                    );
                  })(0, n)
                ),
                We(t, "BrtEndWsView"),
                We(t, "BrtEndWsViews");
            })(r, 0, n.Workbook),
            (function (t, e) {
              e &&
                e["!cols"] &&
                (We(t, "BrtBeginColInfos"),
                e["!cols"].forEach(function (e, n) {
                  e &&
                    We(
                      t,
                      "BrtColInfo",
                      (function (t, e, n) {
                        null == n && (n = Pe(18));
                        var i = es(t, e);
                        n.write_shift(-4, t),
                          n.write_shift(-4, t),
                          n.write_shift(4, 256 * (i.width || 10)),
                          n.write_shift(4, 0);
                        var r = 0;
                        return (
                          e.hidden && (r |= 1),
                          "number" == typeof i.width && (r |= 2),
                          n.write_shift(1, r),
                          n.write_shift(1, 0),
                          n
                        );
                      })(n, e)
                    );
                }),
                We(t, "BrtEndColInfos"));
            })(r, a),
            (function (t, e, n, i) {
              var r,
                o = Qe(e["!ref"] || "A1"),
                a = "",
                s = [];
              We(t, "BrtBeginSheetData");
              var l = Array.isArray(e),
                c = o.e.r;
              e["!rows"] && (c = Math.max(o.e.r, e["!rows"].length - 1));
              for (var d = o.s.r; d <= c; ++d)
                if (((a = Ye(d)), ks(t, e, o, d), d <= o.e.r))
                  for (var u = o.s.c; u <= o.e.c; ++u) {
                    d === o.s.r && (s[u] = Xe(u)), (r = s[u] + a);
                    var p = l ? (e[d] || [])[u] : e[r];
                    p && Es(t, p, d, u, i, e);
                  }
              We(t, "BrtEndSheetData");
            })(r, a, 0, e),
            (function (t, e) {
              e["!protect"] &&
                We(
                  t,
                  "BrtSheetProtection",
                  (function (t, e) {
                    return (
                      null == e && (e = Pe(66)),
                      e.write_shift(2, t.password ? Kr(t.password) : 0),
                      e.write_shift(4, 1),
                      [
                        ["objects", !1],
                        ["scenarios", !1],
                        ["formatCells", !0],
                        ["formatColumns", !0],
                        ["formatRows", !0],
                        ["insertColumns", !0],
                        ["insertRows", !0],
                        ["insertHyperlinks", !0],
                        ["deleteColumns", !0],
                        ["deleteRows", !0],
                        ["selectLockedCells", !1],
                        ["sort", !0],
                        ["autoFilter", !0],
                        ["pivotTables", !0],
                        ["selectUnlockedCells", !1],
                      ].forEach(function (n) {
                        n[1]
                          ? e.write_shift(4, null == t[n[0]] || t[n[0]] ? 0 : 1)
                          : e.write_shift(
                              4,
                              null != t[n[0]] && t[n[0]] ? 0 : 1
                            );
                      }),
                      e
                    );
                  })(e["!protect"])
                );
            })(r, a),
            (function (t, e) {
              e["!autofilter"] &&
                (We(t, "BrtBeginAFilter", wn(Qe(e["!autofilter"].ref))),
                We(t, "BrtEndAFilter"));
            })(r, a),
            (function (t, e) {
              e &&
                e["!merges"] &&
                (We(
                  t,
                  "BrtBeginMergeCells",
                  (function (t, e) {
                    return null == e && (e = Pe(4)), e.write_shift(4, t), e;
                  })(e["!merges"].length)
                ),
                e["!merges"].forEach(function (e) {
                  We(t, "BrtMergeCell", Ls(e));
                }),
                We(t, "BrtEndMergeCells"));
            })(r, a),
            (function (t, e, n) {
              e["!links"].forEach(function (e) {
                if (e[1].Target) {
                  var i = Kn(n, -1, e[1].Target.replace(/#.*$/, ""), Yn.HLINK);
                  We(
                    t,
                    "BrtHLink",
                    (function (t, e) {
                      var n = Pe(
                        50 +
                          4 * (t[1].Target.length + (t[1].Tooltip || "").length)
                      );
                      wn({ s: Ge(t[0]), e: Ge(t[0]) }, n), _n("rId" + e, n);
                      var i = t[1].Target.indexOf("#");
                      return (
                        sn((-1 == i ? "" : t[1].Target.slice(i + 1)) || "", n),
                        sn(t[1].Tooltip || "", n),
                        sn("", n),
                        n.slice(0, n.l)
                      );
                    })(e, i)
                  );
                }
              }),
                delete e["!links"];
            })(r, a, i),
            a["!margins"] &&
              We(
                r,
                "BrtMargins",
                (function (t, e) {
                  return (
                    null == e && (e = Pe(48)),
                    ns(t),
                    qs.forEach(function (n) {
                      xn(t[n], e);
                    }),
                    e
                  );
                })(a["!margins"])
              ),
            (e && !e.ignoreEC && null != e.ignoreEC) ||
              (function (t, e) {
                e &&
                  e["!ref"] &&
                  (We(t, "BrtBeginCellIgnoreECs"),
                  We(
                    t,
                    "BrtCellIgnoreEC",
                    (function (t) {
                      var e = Pe(24);
                      return (
                        e.write_shift(4, 4), e.write_shift(4, 1), wn(t, e), e
                      );
                    })(Qe(e["!ref"]))
                  ),
                  We(t, "BrtEndCellIgnoreECs"));
              })(r, a),
            (function (t, e, n, i) {
              if (e["!comments"].length > 0) {
                var r = Kn(
                  i,
                  -1,
                  "../drawings/vmlDrawing" + (n + 1) + ".vml",
                  Yn.VML
                );
                We(t, "BrtLegacyDrawing", _n("rId" + r)), (e["!legacy"] = r);
              }
            })(r, a, t, i),
            We(r, "BrtEndSheet"),
            r.end()
          );
        }
        (Yn.CS =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"),
          Zt("chartsheet", null, { xmlns: ee.main[0], "xmlns:r": ee.r });
        var Ps = [
            ["allowRefreshQuery", !1, "bool"],
            ["autoCompressPictures", !0, "bool"],
            ["backupFile", !1, "bool"],
            ["checkCompatibility", !1, "bool"],
            ["CodeName", ""],
            ["date1904", !1, "bool"],
            ["defaultThemeVersion", 0, "int"],
            ["filterPrivacy", !1, "bool"],
            ["hidePivotFieldList", !1, "bool"],
            ["promptedSolutions", !1, "bool"],
            ["publishItems", !1, "bool"],
            ["refreshAllConnections", !1, "bool"],
            ["saveExternalLinkValues", !0, "bool"],
            ["showBorderUnselectedTables", !0, "bool"],
            ["showInkAnnotation", !0, "bool"],
            ["showObjects", "all"],
            ["showPivotChartFilter", !1, "bool"],
            ["updateLinks", "userSet"],
          ],
          Rs = [
            ["activeTab", 0, "int"],
            ["autoFilterDateGrouping", !0, "bool"],
            ["firstSheet", 0, "int"],
            ["minimized", !1, "bool"],
            ["showHorizontalScroll", !0, "bool"],
            ["showSheetTabs", !0, "bool"],
            ["showVerticalScroll", !0, "bool"],
            ["tabRatio", 600, "int"],
            ["visibility", "visible"],
          ],
          Is = [],
          Ws = [
            ["calcCompleted", "true"],
            ["calcMode", "auto"],
            ["calcOnSave", "true"],
            ["concurrentCalc", "true"],
            ["fullCalcOnLoad", "false"],
            ["fullPrecision", "true"],
            ["iterate", "false"],
            ["iterateCount", "100"],
            ["iterateDelta", "0.001"],
            ["refMode", "A1"],
          ];
        function Ns(t, e) {
          for (var n = 0; n != t.length; ++n)
            for (var i = t[n], r = 0; r != e.length; ++r) {
              var o = e[r];
              if (null == i[o[0]]) i[o[0]] = o[1];
              else
                switch (o[2]) {
                  case "bool":
                    "string" == typeof i[o[0]] && (i[o[0]] = qt(i[o[0]]));
                    break;
                  case "int":
                    "string" == typeof i[o[0]] &&
                      (i[o[0]] = parseInt(i[o[0]], 10));
                }
            }
        }
        function Bs(t, e) {
          for (var n = 0; n != e.length; ++n) {
            var i = e[n];
            if (null == t[i[0]]) t[i[0]] = i[1];
            else
              switch (i[2]) {
                case "bool":
                  "string" == typeof t[i[0]] && (t[i[0]] = qt(t[i[0]]));
                  break;
                case "int":
                  "string" == typeof t[i[0]] &&
                    (t[i[0]] = parseInt(t[i[0]], 10));
              }
          }
        }
        function Fs(t) {
          Bs(t.WBProps, Ps),
            Bs(t.CalcPr, Ws),
            Ns(t.WBView, Rs),
            Ns(t.Sheets, Is),
            (Ja.date1904 = qt(t.WBProps.date1904));
        }
        var $s = "][*?/\\".split("");
        function Hs(t, e) {
          if (t.length > 31) {
            if (e) return !1;
            throw new Error("Sheet names cannot exceed 31 chars");
          }
          var n = !0;
          return (
            $s.forEach(function (i) {
              if (-1 != t.indexOf(i)) {
                if (!e)
                  throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
                n = !1;
              }
            }),
            n
          );
        }
        var Ys = /<\w+:workbook/,
          Us = Zt("workbook", null, { xmlns: ee.main[0], "xmlns:r": ee.r });
        function Xs(t) {
          var e = [ft];
          e[e.length] = Us;
          var n = t.Workbook && (t.Workbook.Names || []).length > 0,
            i = { codeName: "ThisWorkbook" };
          t.Workbook &&
            t.Workbook.WBProps &&
            (Ps.forEach(function (e) {
              null != t.Workbook.WBProps[e[0]] &&
                t.Workbook.WBProps[e[0]] != e[1] &&
                (i[e[0]] = t.Workbook.WBProps[e[0]]);
            }),
            t.Workbook.WBProps.CodeName &&
              ((i.codeName = t.Workbook.WBProps.CodeName), delete i.CodeName)),
            (e[e.length] = Zt("workbookPr", null, i));
          var r = (t.Workbook && t.Workbook.Sheets) || [],
            o = 0;
          for (e[e.length] = "<sheets>", o = 0; o != t.SheetNames.length; ++o) {
            var a = { name: kt(t.SheetNames[o].slice(0, 31)) };
            if (
              ((a.sheetId = "" + (o + 1)), (a["r:id"] = "rId" + (o + 1)), r[o])
            )
              switch (r[o].Hidden) {
                case 1:
                  a.state = "hidden";
                  break;
                case 2:
                  a.state = "veryHidden";
              }
            e[e.length] = Zt("sheet", null, a);
          }
          return (
            (e[e.length] = "</sheets>"),
            n &&
              ((e[e.length] = "<definedNames>"),
              t.Workbook &&
                t.Workbook.Names &&
                t.Workbook.Names.forEach(function (t) {
                  var n = { name: t.Name };
                  t.Comment && (n.comment = t.Comment),
                    null != t.Sheet && (n.localSheetId = "" + t.Sheet),
                    t.Hidden && (n.hidden = "1"),
                    t.Ref &&
                      (e[e.length] = Zt(
                        "definedName",
                        String(t.Ref)
                          .replace(/</g, "&lt;")
                          .replace(/>/g, "&gt;"),
                        n
                      ));
                }),
              (e[e.length] = "</definedNames>")),
            e.length > 2 &&
              ((e[e.length] = "</workbook>"), (e[1] = e[1].replace("/>", ">"))),
            e.join("")
          );
        }
        function Vs(t, e) {
          return (
            e || (e = Pe(127)),
            e.write_shift(4, t.Hidden),
            e.write_shift(4, t.iTabID),
            _n(t.strRelID, e),
            sn(t.name.slice(0, 31), e),
            e.length > e.l ? e.slice(0, e.l) : e
          );
        }
        function Gs(t, n) {
          var i = Ie();
          return (
            We(i, "BrtBeginBook"),
            We(
              i,
              "BrtFileVersion",
              (function (t, n) {
                n || (n = Pe(127));
                for (var i = 0; 4 != i; ++i) n.write_shift(4, 0);
                return (
                  sn("SheetJS", n),
                  sn(e.version, n),
                  sn(e.version, n),
                  sn("7262", n),
                  (n.length = n.l),
                  n.length > n.l ? n.slice(0, n.l) : n
                );
              })()
            ),
            We(
              i,
              "BrtWbProp",
              (function (t, e) {
                e || (e = Pe(72));
                var n = 0;
                return (
                  t && t.filterPrivacy && (n |= 8),
                  e.write_shift(4, n),
                  e.write_shift(4, 0),
                  fn((t && t.CodeName) || "ThisWorkbook", e),
                  e.slice(0, e.l)
                );
              })((t.Workbook && t.Workbook.WBProps) || null)
            ),
            (function (t, e) {
              if (e.Workbook && e.Workbook.Sheets) {
                for (
                  var n = e.Workbook.Sheets, i = 0, r = -1, o = -1;
                  i < n.length;
                  ++i
                )
                  !n[i] || (!n[i].Hidden && -1 == r)
                    ? (r = i)
                    : 1 == n[i].Hidden && -1 == o && (o = i);
                o > r ||
                  (We(t, "BrtBeginBookViews"),
                  We(
                    t,
                    "BrtBookView",
                    (function (t, e) {
                      return (
                        e || (e = Pe(29)),
                        e.write_shift(-4, 0),
                        e.write_shift(-4, 460),
                        e.write_shift(4, 28800),
                        e.write_shift(4, 17600),
                        e.write_shift(4, 500),
                        e.write_shift(4, t),
                        e.write_shift(4, t),
                        e.write_shift(1, 120),
                        e.length > e.l ? e.slice(0, e.l) : e
                      );
                    })(r)
                  ),
                  We(t, "BrtEndBookViews"));
              }
            })(i, t),
            (function (t, e) {
              We(t, "BrtBeginBundleShs");
              for (var n = 0; n != e.SheetNames.length; ++n)
                We(
                  t,
                  "BrtBundleSh",
                  Vs({
                    Hidden:
                      (e.Workbook &&
                        e.Workbook.Sheets &&
                        e.Workbook.Sheets[n] &&
                        e.Workbook.Sheets[n].Hidden) ||
                      0,
                    iTabID: n + 1,
                    strRelID: "rId" + (n + 1),
                    name: e.SheetNames[n],
                  })
                );
              We(t, "BrtEndBundleShs");
            })(i, t),
            We(i, "BrtEndBook"),
            i.end()
          );
        }
        function Ks(t, e, n) {
          return ".bin" === e.slice(-4)
            ? (function (t, e) {
                var n = [],
                  i = [],
                  r = {},
                  o = !1;
                return (
                  Re(t, function (t, a, s) {
                    switch (s) {
                      case 632:
                        i.push(t);
                        break;
                      case 635:
                        r = t;
                        break;
                      case 637:
                        (r.t = t.t), (r.h = t.h), (r.r = t.r);
                        break;
                      case 636:
                        if (
                          ((r.author = i[r.iauthor]),
                          delete r.iauthor,
                          e.sheetRows && e.sheetRows <= r.rfx.r)
                        )
                          break;
                        r.t || (r.t = ""), delete r.rfx, n.push(r);
                        break;
                      case 3072:
                        break;
                      case 35:
                        o = !0;
                        break;
                      case 36:
                        o = !1;
                        break;
                      case 37:
                      case 38:
                        break;
                      default:
                        if ((a || "").indexOf("Begin") > 0);
                        else if ((a || "").indexOf("End") > 0);
                        else if (!o || e.WTF)
                          throw new Error("Unexpected record " + s + " " + a);
                    }
                  }),
                  n
                );
              })(t, n)
            : (function (t, e) {
                if (t.match(/<(?:\w+:)?comments *\/>/)) return [];
                var n = [],
                  i = [],
                  r = t.match(
                    /<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/
                  );
                r &&
                  r[1] &&
                  r[1].split(/<\/\w*:?author>/).forEach(function (t) {
                    if ("" !== t && "" !== t.trim()) {
                      var e = t.match(/<(?:\w+:)?author[^>]*>(.*)/);
                      e && n.push(e[1]);
                    }
                  });
                var o = t.match(
                  /<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/
                );
                return (
                  o &&
                    o[1] &&
                    o[1].split(/<\/\w*:?comment>/).forEach(function (t) {
                      if ("" !== t && "" !== t.trim()) {
                        var r = t.match(/<(?:\w+:)?comment[^>]*>/);
                        if (r) {
                          var o = _t(r[0]),
                            a = {
                              author:
                                (o.authorId && n[o.authorId]) || "sheetjsghost",
                              ref: o.ref,
                              guid: o.guid,
                            },
                            s = Ge(o.ref);
                          if (!(e.sheetRows && e.sheetRows <= s.r)) {
                            var l = t.match(
                                /<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/
                              ),
                              c = (!!l && !!l[1] && Er(l[1])) || {
                                r: "",
                                t: "",
                                h: "",
                              };
                            (a.r = c.r),
                              "<t></t>" == c.r && (c.t = c.h = ""),
                              (a.t = c.t
                                .replace(/\r\n/g, "\n")
                                .replace(/\r/g, "\n")),
                              e.cellHTML && (a.h = c.h),
                              i.push(a);
                          }
                        }
                      }
                    }),
                  i
                );
              })(t, n);
        }
        function Zs(t, e, n) {
          return (".bin" === e.slice(-4) ? Gs : Xs)(t, n);
        }
        function Js(t, e, n, i, r) {
          return (".bin" === e.slice(-4) ? js : Cs)(t, n, i, r);
        }
        function Qs(t, e, n) {
          return (".bin" === e.slice(-4) ? Br : Wr)(t, n);
        }
        function tl(t, e, n) {
          return (".bin" === e.slice(-4) ? Ko : Vo)(t, n);
        }
        var el = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
          nl = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/,
          il = function (t) {
            return String.fromCharCode(t);
          };
        function rl(t, e) {
          var n = t.split(/\s+/),
            i = [];
          if ((e || (i[0] = n[0]), 1 === n.length)) return i;
          var r,
            o,
            a,
            s = t.match(el);
          if (s)
            for (a = 0; a != s.length; ++a)
              -1 === (o = (r = s[a].match(nl))[1].indexOf(":"))
                ? (i[r[1]] = r[2].slice(1, r[2].length - 1))
                : (i[
                    "xmlns:" === r[1].slice(0, 6)
                      ? "xmlns" + r[1].slice(6)
                      : r[1].slice(o + 1)
                  ] = r[2].slice(1, r[2].length - 1));
          return i;
        }
        function ol(t) {
          var e = {};
          if (1 === t.split(/\s+/).length) return e;
          var n,
            i,
            r,
            o = t.match(el);
          if (o)
            for (r = 0; r != o.length; ++r)
              -1 === (i = (n = o[r].match(nl))[1].indexOf(":"))
                ? (e[n[1]] = n[2].slice(1, n[2].length - 1))
                : (e[
                    "xmlns:" === n[1].slice(0, 6)
                      ? "xmlns" + n[1].slice(6)
                      : n[1].slice(i + 1)
                  ] = n[2].slice(1, n[2].length - 1));
          return e;
        }
        function al(t, e, n, i) {
          var r = i;
          switch ((n[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
            case "boolean":
              r = qt(i);
              break;
            case "i2":
            case "int":
              r = parseInt(i, 10);
              break;
            case "r4":
            case "float":
              r = parseFloat(i);
              break;
            case "date":
            case "dateTime.tz":
              r = tt(i);
              break;
            case "i8":
            case "string":
            case "fixed":
            case "uuid":
            case "bin.base64":
              break;
            default:
              throw new Error("bad custprop:" + n[0]);
          }
          t[xt(e)] = r;
        }
        function sl(t, e, n) {
          if (n.cellStyles && e.Interior) {
            var i = e.Interior;
            i.Pattern && (i.patternType = yo[i.Pattern] || i.Pattern);
          }
          t[e.ID] = e;
        }
        function ll(t, e, n, i, r, o, a, s, l, c) {
          var d = "General",
            u = i.StyleID,
            p = {};
          c = c || {};
          var h = [],
            f = 0;
          for (
            void 0 === u && s && (u = s.StyleID),
              void 0 === u && a && (u = a.StyleID);
            void 0 !== o[u] &&
            (o[u].nf && (d = o[u].nf),
            o[u].Interior && h.push(o[u].Interior),
            o[u].Parent);

          )
            u = o[u].Parent;
          switch (n.Type) {
            case "Boolean":
              (i.t = "b"), (i.v = qt(t));
              break;
            case "String":
              (i.t = "s"),
                (i.r = Lt(xt(t))),
                (i.v = t.indexOf("<") > -1 ? xt(e) : i.r);
              break;
            case "DateTime":
              "Z" != t.slice(-1) && (t += "Z"),
                (i.v = (tt(t) - new Date(Date.UTC(1899, 11, 30))) / 864e5),
                i.v != i.v ? (i.v = xt(t)) : i.v < 60 && (i.v = i.v - 1),
                (d && "General" != d) || (d = "yyyy-mm-dd");
            case "Number":
              void 0 === i.v && (i.v = +t), i.t || (i.t = "n");
              break;
            case "Error":
              (i.t = "e"), (i.v = Cn[t]), !1 !== c.cellText && (i.w = t);
              break;
            default:
              (i.t = "s"), (i.v = Lt(e || t));
          }
          if (
            ((function (t, e, n) {
              if ("z" !== t.t) {
                if (!n || !1 !== n.cellText)
                  try {
                    "e" === t.t
                      ? (t.w = t.w || zn[t.v])
                      : "General" === e
                      ? "n" === t.t
                        ? (0 | t.v) === t.v
                          ? (t.w = q._general_int(t.v))
                          : (t.w = q._general_num(t.v))
                        : (t.w = q._general(t.v))
                      : (t.w =
                          ((i = e || "General"),
                          (r = t.v),
                          "General" === (o = P[i] || xt(i))
                            ? q._general(r)
                            : q.format(o, r)));
                  } catch (t) {
                    if (n.WTF) throw t;
                  }
                var i, r, o;
                try {
                  var a = P[e] || e || "General";
                  if (
                    (n.cellNF && (t.z = a),
                    n.cellDates && "n" == t.t && q.is_date(a))
                  ) {
                    var s = q.parse_date_code(t.v);
                    s &&
                      ((t.t = "d"),
                      (t.v = new Date(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u)));
                  }
                } catch (t) {
                  if (n.WTF) throw t;
                }
              }
            })(i, d, c),
            !1 !== c.cellFormula)
          )
            if (i.Formula) {
              var b = xt(i.Formula);
              61 == b.charCodeAt(0) && (b = b.slice(1)),
                (i.f = Jo(b, r)),
                delete i.Formula,
                "RC" == i.ArrayRange
                  ? (i.F = Jo("RC:RC", r))
                  : i.ArrayRange &&
                    ((i.F = Jo(i.ArrayRange, r)), l.push([Qe(i.F), i.F]));
            } else
              for (f = 0; f < l.length; ++f)
                r.r >= l[f][0].s.r &&
                  r.r <= l[f][0].e.r &&
                  r.c >= l[f][0].s.c &&
                  r.c <= l[f][0].e.c &&
                  (i.F = l[f][1]);
          c.cellStyles &&
            (h.forEach(function (t) {
              !p.patternType &&
                t.patternType &&
                (p.patternType = t.patternType);
            }),
            (i.s = p)),
            void 0 !== i.StyleID && (i.ixfe = i.StyleID);
        }
        function cl(t) {
          (t.t = t.v || ""),
            (t.t = t.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
            (t.v = t.w = t.ixfe = void 0);
        }
        function dl(t) {
          if (M && r.isBuffer(t)) return t.toString("utf8");
          if ("string" == typeof t) return t;
          if ("undefined" != typeof Uint8Array && t instanceof Uint8Array)
            return Et(k(S(t)));
          throw new Error("Bad input format: expected Buffer or string");
        }
        var ul = /<(\/?)([^\s?>!\/:]*:|)([^\s?>:\/]+)[^>]*>/gm;
        function pl(t, e) {
          var n = e || {};
          E(q);
          var i = m(dl(t));
          ("binary" != n.type && "array" != n.type && "base64" != n.type) ||
            (i =
              "undefined" != typeof cptable
                ? cptable.utils.decode(65001, b(i))
                : Et(i));
          var r,
            o = i.slice(0, 1024).toLowerCase(),
            a = !1;
          if (
            (-1 == o.indexOf("<?xml") &&
              [
                "html",
                "table",
                "head",
                "meta",
                "script",
                "style",
                "div",
              ].forEach(function (t) {
                o.indexOf("<" + t) >= 0 && (a = !0);
              }),
            a)
          )
            return El.to_workbook(i, n);
          var s,
            l,
            c = [],
            d = {},
            u = [],
            p = n.dense ? [] : {},
            h = "",
            f = {},
            g = {},
            v = rl('<Data ss:Type="String">'),
            _ = 0,
            y = 0,
            M = 0,
            O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
            w = {},
            A = {},
            x = "",
            z = 0,
            C = [],
            k = {},
            S = {},
            T = 0,
            D = [],
            L = [],
            j = {},
            R = [],
            I = !1,
            W = [],
            N = [],
            B = {},
            F = 0,
            $ = 0,
            H = { Sheets: [], WBProps: { date1904: !1 } },
            Y = {};
          for (
            ul.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/gm, "");
            (r = ul.exec(i));

          )
            switch (r[3]) {
              case "Data":
                if (c[c.length - 1][1]) break;
                "/" === r[1]
                  ? ll(
                      i.slice(_, r.index),
                      x,
                      v,
                      "Comment" == c[c.length - 1][0] ? j : f,
                      { c: y, r: M },
                      w,
                      R[y],
                      g,
                      W,
                      n
                    )
                  : ((x = ""), (v = rl(r[0])), (_ = r.index + r[0].length));
                break;
              case "Cell":
                if ("/" === r[1])
                  if (
                    (L.length > 0 && (f.c = L),
                    (!n.sheetRows || n.sheetRows > M) &&
                      void 0 !== f.v &&
                      (n.dense
                        ? (p[M] || (p[M] = []), (p[M][y] = f))
                        : (p[Xe(y) + Ye(M)] = f)),
                    f.HRef &&
                      ((f.l = { Target: f.HRef }),
                      f.HRefScreenTip && (f.l.Tooltip = f.HRefScreenTip),
                      delete f.HRef,
                      delete f.HRefScreenTip),
                    (f.MergeAcross || f.MergeDown) &&
                      ((F = y + (0 | parseInt(f.MergeAcross, 10))),
                      ($ = M + (0 | parseInt(f.MergeDown, 10))),
                      C.push({ s: { c: y, r: M }, e: { c: F, r: $ } })),
                    n.sheetStubs)
                  )
                    if (f.MergeAcross || f.MergeDown) {
                      for (var U = y; U <= F; ++U)
                        for (var X = M; X <= $; ++X)
                          (U > y || X > M) &&
                            (n.dense
                              ? (p[X] || (p[X] = []), (p[X][U] = { t: "z" }))
                              : (p[Xe(U) + Ye(X)] = { t: "z" }));
                      y = F + 1;
                    } else ++y;
                  else f.MergeAcross ? (y = F + 1) : ++y;
                else
                  (f = ol(r[0])).Index && (y = +f.Index - 1),
                    y < O.s.c && (O.s.c = y),
                    y > O.e.c && (O.e.c = y),
                    "/>" === r[0].slice(-2) && ++y,
                    (L = []);
                break;
              case "Row":
                "/" === r[1] || "/>" === r[0].slice(-2)
                  ? (M < O.s.r && (O.s.r = M),
                    M > O.e.r && (O.e.r = M),
                    "/>" === r[0].slice(-2) &&
                      (g = rl(r[0])).Index &&
                      (M = +g.Index - 1),
                    (y = 0),
                    ++M)
                  : ((g = rl(r[0])).Index && (M = +g.Index - 1),
                    (B = {}),
                    ("0" == g.AutoFitHeight || g.Height) &&
                      ((B.hpx = parseInt(g.Height, 10)),
                      (B.hpt = ho(B.hpx)),
                      (N[M] = B)),
                    "1" == g.Hidden && ((B.hidden = !0), (N[M] = B)));
                break;
              case "Worksheet":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                  u.push(h),
                    O.s.r <= O.e.r &&
                      O.s.c <= O.e.c &&
                      ((p["!ref"] = Je(O)),
                      n.sheetRows &&
                        n.sheetRows <= O.e.r &&
                        ((p["!fullref"] = p["!ref"]),
                        (O.e.r = n.sheetRows - 1),
                        (p["!ref"] = Je(O)))),
                    C.length && (p["!merges"] = C),
                    R.length > 0 && (p["!cols"] = R),
                    N.length > 0 && (p["!rows"] = N),
                    (d[h] = p);
                } else
                  (O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }),
                    (M = y = 0),
                    c.push([r[3], !1]),
                    (s = rl(r[0])),
                    (h = xt(s.Name)),
                    (p = n.dense ? [] : {}),
                    (C = []),
                    (W = []),
                    (N = []),
                    (Y = { name: h, Hidden: 0 }),
                    H.Sheets.push(Y);
                break;
              case "Table":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                } else {
                  if ("/>" == r[0].slice(-2)) break;
                  rl(r[0]), c.push([r[3], !1]), (R = []), (I = !1);
                }
                break;
              case "Style":
                "/" === r[1] ? sl(w, A, n) : (A = rl(r[0]));
                break;
              case "NumberFormat":
                (A.nf = xt(rl(r[0]).Format || "General")),
                  P[A.nf] && (A.nf = P[A.nf]);
                for (var V = 0; 392 != V && q._table[V] != A.nf; ++V);
                if (392 == V)
                  for (V = 57; 392 != V; ++V)
                    if (null == q._table[V]) {
                      q.load(A.nf, V);
                      break;
                    }
                break;
              case "Column":
                if ("Table" !== c[c.length - 1][0]) break;
                if (
                  ((l = rl(r[0])).Hidden && ((l.hidden = !0), delete l.Hidden),
                  l.Width && (l.wpx = parseInt(l.Width, 10)),
                  !I && l.wpx > 10)
                ) {
                  (I = !0), (oo = 6);
                  for (var G = 0; G < R.length; ++G) R[G] && po(R[G]);
                }
                I && po(l), (R[l.Index - 1 || R.length] = l);
                for (var K = 0; K < +l.Span; ++K) R[R.length] = nt(l);
                break;
              case "NamedRange":
                H.Names || (H.Names = []);
                var Z = _t(r[0]),
                  J = {
                    Name: Z.Name,
                    Ref: Jo(Z.RefersTo.slice(1), { r: 0, c: 0 }),
                  };
                H.Sheets.length > 0 && (J.Sheet = H.Sheets.length - 1),
                  H.Names.push(J);
                break;
              case "NamedCell":
              case "B":
              case "I":
              case "U":
              case "S":
              case "Sub":
              case "Sup":
              case "Span":
              case "Border":
              case "Alignment":
              case "Borders":
                break;
              case "Font":
                if ("/>" === r[0].slice(-2)) break;
                "/" === r[1]
                  ? (x += i.slice(z, r.index))
                  : (z = r.index + r[0].length);
                break;
              case "Interior":
                if (!n.cellStyles) break;
                A.Interior = rl(r[0]);
                break;
              case "Protection":
                break;
              case "Author":
              case "Title":
              case "Description":
              case "Created":
              case "Keywords":
              case "Subject":
              case "Category":
              case "Company":
              case "LastAuthor":
              case "LastSaved":
              case "LastPrinted":
              case "Version":
              case "Revision":
              case "TotalTime":
              case "HyperlinkBase":
              case "Manager":
              case "ContentStatus":
              case "Identifier":
              case "Language":
              case "AppName":
                if ("/>" === r[0].slice(-2)) break;
                "/" === r[1]
                  ? pi(k, r[3], i.slice(T, r.index))
                  : (T = r.index + r[0].length);
                break;
              case "Paragraphs":
                break;
              case "Styles":
              case "Workbook":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                } else c.push([r[3], !1]);
                break;
              case "Comment":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                  cl(j), L.push(j);
                } else c.push([r[3], !1]), (j = { a: (s = rl(r[0])).Author });
                break;
              case "AutoFilter":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                } else if ("/" !== r[0].charAt(r[0].length - 2)) {
                  var Q = rl(r[0]);
                  (p["!autofilter"] = { ref: Jo(Q.Range).replace(/\$/g, "") }),
                    c.push([r[3], !0]);
                }
                break;
              case "Name":
                break;
              case "ComponentOptions":
              case "DocumentProperties":
              case "CustomDocumentProperties":
              case "OfficeDocumentSettings":
              case "PivotTable":
              case "PivotCache":
              case "Names":
              case "MapInfo":
              case "PageBreaks":
              case "QueryTable":
              case "DataValidation":
              case "Sorting":
              case "Schema":
              case "data":
              case "ConditionalFormatting":
              case "SmartTagType":
              case "SmartTags":
              case "ExcelWorkbook":
              case "WorkbookOptions":
              case "WorksheetOptions":
                if ("/" === r[1]) {
                  if ((s = c.pop())[0] !== r[3])
                    throw new Error("Bad state: " + s.join("|"));
                } else
                  "/" !== r[0].charAt(r[0].length - 2) && c.push([r[3], !0]);
                break;
              default:
                if (0 == c.length && "document" == r[3]) return Nl(i, n);
                if (0 == c.length && "UOF" == r[3]) return Nl(i, n);
                var tt = !0;
                switch (c[c.length - 1][0]) {
                  case "OfficeDocumentSettings":
                    switch (r[3]) {
                      case "AllowPNG":
                      case "RemovePersonalInformation":
                      case "DownloadComponents":
                      case "LocationOfComponents":
                      case "Colors":
                      case "Color":
                      case "Index":
                      case "RGB":
                      case "PixelsPerInch":
                      case "TargetScreenSize":
                      case "ReadOnlyRecommended":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "ComponentOptions":
                    switch (r[3]) {
                      case "Toolbar":
                      case "HideOfficeLogo":
                      case "SpreadsheetAutoFit":
                      case "Label":
                      case "Caption":
                      case "MaxHeight":
                      case "MaxWidth":
                      case "NextSheetNumber":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "ExcelWorkbook":
                    switch (r[3]) {
                      case "Date1904":
                        H.WBProps.date1904 = !0;
                        break;
                      case "WindowHeight":
                      case "WindowWidth":
                      case "WindowTopX":
                      case "WindowTopY":
                      case "TabRatio":
                      case "ProtectStructure":
                      case "ProtectWindows":
                      case "ActiveSheet":
                      case "DisplayInkNotes":
                      case "FirstVisibleSheet":
                      case "SupBook":
                      case "SheetName":
                      case "SheetIndex":
                      case "SheetIndexFirst":
                      case "SheetIndexLast":
                      case "Dll":
                      case "AcceptLabelsInFormulas":
                      case "DoNotSaveLinkValues":
                      case "Iteration":
                      case "MaxIterations":
                      case "MaxChange":
                      case "Path":
                      case "Xct":
                      case "Count":
                      case "SelectedSheets":
                      case "Calculation":
                      case "Uncalced":
                      case "StartupPrompt":
                      case "Crn":
                      case "ExternName":
                      case "Formula":
                      case "ColFirst":
                      case "ColLast":
                      case "WantAdvise":
                      case "Boolean":
                      case "Error":
                      case "Text":
                      case "OLE":
                      case "NoAutoRecover":
                      case "PublishObjects":
                      case "DoNotCalculateBeforeSave":
                      case "Number":
                      case "RefModeR1C1":
                      case "EmbedSaveSmartTags":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "WorkbookOptions":
                    switch (r[3]) {
                      case "OWCVersion":
                      case "Height":
                      case "Width":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "WorksheetOptions":
                    switch (r[3]) {
                      case "Visible":
                        if ("/>" === r[0].slice(-2));
                        else if ("/" === r[1])
                          switch (i.slice(T, r.index)) {
                            case "SheetHidden":
                              Y.Hidden = 1;
                              break;
                            case "SheetVeryHidden":
                              Y.Hidden = 2;
                          }
                        else T = r.index + r[0].length;
                        break;
                      case "Header":
                        p["!margins"] || ns((p["!margins"] = {}), "xlml"),
                          (p["!margins"].header = _t(r[0]).Margin);
                        break;
                      case "Footer":
                        p["!margins"] || ns((p["!margins"] = {}), "xlml"),
                          (p["!margins"].footer = _t(r[0]).Margin);
                        break;
                      case "PageMargins":
                        var et = _t(r[0]);
                        p["!margins"] || ns((p["!margins"] = {}), "xlml"),
                          et.Top && (p["!margins"].top = et.Top),
                          et.Left && (p["!margins"].left = et.Left),
                          et.Right && (p["!margins"].right = et.Right),
                          et.Bottom && (p["!margins"].bottom = et.Bottom);
                        break;
                      case "DisplayRightToLeft":
                        H.Views || (H.Views = []),
                          H.Views[0] || (H.Views[0] = {}),
                          (H.Views[0].RTL = !0);
                        break;
                      case "Unsynced":
                      case "Print":
                      case "Panes":
                      case "Scale":
                      case "Pane":
                      case "Number":
                      case "Layout":
                      case "PageSetup":
                      case "Selected":
                      case "ProtectObjects":
                      case "EnableSelection":
                      case "ProtectScenarios":
                      case "ValidPrinterInfo":
                      case "HorizontalResolution":
                      case "VerticalResolution":
                      case "NumberofCopies":
                      case "ActiveRow":
                      case "ActiveCol":
                      case "ActivePane":
                      case "TopRowVisible":
                      case "TopRowBottomPane":
                      case "LeftColumnVisible":
                      case "LeftColumnRightPane":
                      case "FitToPage":
                      case "RangeSelection":
                      case "PaperSizeIndex":
                      case "PageLayoutZoom":
                      case "PageBreakZoom":
                      case "FilterOn":
                      case "DoNotDisplayGridlines":
                      case "SplitHorizontal":
                      case "SplitVertical":
                      case "FreezePanes":
                      case "FrozenNoSplit":
                      case "FitWidth":
                      case "FitHeight":
                      case "CommentsLayout":
                      case "Zoom":
                      case "LeftToRight":
                      case "Gridlines":
                      case "AllowSort":
                      case "AllowFilter":
                      case "AllowInsertRows":
                      case "AllowDeleteRows":
                      case "AllowInsertCols":
                      case "AllowDeleteCols":
                      case "AllowInsertHyperlinks":
                      case "AllowFormatCells":
                      case "AllowSizeCols":
                      case "AllowSizeRows":
                      case "NoSummaryRowsBelowDetail":
                      case "TabColorIndex":
                      case "DoNotDisplayHeadings":
                      case "ShowPageLayoutZoom":
                      case "NoSummaryColumnsRightDetail":
                      case "BlackAndWhite":
                      case "DoNotDisplayZeros":
                      case "DisplayPageBreak":
                      case "RowColHeadings":
                      case "DoNotDisplayOutline":
                      case "NoOrientation":
                      case "AllowUsePivotTables":
                      case "ZeroHeight":
                      case "ViewableRange":
                      case "Selection":
                      case "ProtectContents":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "PivotTable":
                  case "PivotCache":
                    switch (r[3]) {
                      case "ImmediateItemsOnDrop":
                      case "ShowPageMultipleItemLabel":
                      case "CompactRowIndent":
                      case "Location":
                      case "PivotField":
                      case "Orientation":
                      case "LayoutForm":
                      case "LayoutSubtotalLocation":
                      case "LayoutCompactRow":
                      case "Position":
                      case "PivotItem":
                      case "DataType":
                      case "DataField":
                      case "SourceName":
                      case "ParentField":
                      case "PTLineItems":
                      case "PTLineItem":
                      case "CountOfSameItems":
                      case "Item":
                      case "ItemType":
                      case "PTSource":
                      case "CacheIndex":
                      case "ConsolidationReference":
                      case "FileName":
                      case "Reference":
                      case "NoColumnGrand":
                      case "NoRowGrand":
                      case "BlankLineAfterItems":
                      case "Hidden":
                      case "Subtotal":
                      case "BaseField":
                      case "MapChildItems":
                      case "Function":
                      case "RefreshOnFileOpen":
                      case "PrintSetTitles":
                      case "MergeLabels":
                      case "DefaultVersion":
                      case "RefreshName":
                      case "RefreshDate":
                      case "RefreshDateCopy":
                      case "VersionLastRefresh":
                      case "VersionLastUpdate":
                      case "VersionUpdateableMin":
                      case "VersionRefreshableMin":
                      case "Calculation":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "PageBreaks":
                    switch (r[3]) {
                      case "ColBreaks":
                      case "ColBreak":
                      case "RowBreaks":
                      case "RowBreak":
                      case "ColStart":
                      case "ColEnd":
                      case "RowEnd":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "AutoFilter":
                    switch (r[3]) {
                      case "AutoFilterColumn":
                      case "AutoFilterCondition":
                      case "AutoFilterAnd":
                      case "AutoFilterOr":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "QueryTable":
                    switch (r[3]) {
                      case "Id":
                      case "AutoFormatFont":
                      case "AutoFormatPattern":
                      case "QuerySource":
                      case "QueryType":
                      case "EnableRedirections":
                      case "RefreshedInXl9":
                      case "URLString":
                      case "HTMLTables":
                      case "Connection":
                      case "CommandText":
                      case "RefreshInfo":
                      case "NoTitles":
                      case "NextId":
                      case "ColumnInfo":
                      case "OverwriteCells":
                      case "DoNotPromptForFile":
                      case "TextWizardSettings":
                      case "Source":
                      case "Number":
                      case "Decimal":
                      case "ThousandSeparator":
                      case "TrailingMinusNumbers":
                      case "FormatSettings":
                      case "FieldType":
                      case "Delimiters":
                      case "Tab":
                      case "Comma":
                      case "AutoFormatName":
                      case "VersionLastEdit":
                      case "VersionLastRefresh":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "Sorting":
                  case "ConditionalFormatting":
                  case "DataValidation":
                    switch (r[3]) {
                      case "Range":
                      case "Type":
                      case "Min":
                      case "Max":
                      case "Sort":
                      case "Descending":
                      case "Order":
                      case "CaseSensitive":
                      case "Value":
                      case "ErrorStyle":
                      case "ErrorMessage":
                      case "ErrorTitle":
                      case "CellRangeList":
                      case "InputMessage":
                      case "InputTitle":
                      case "ComboHide":
                      case "InputHide":
                      case "Condition":
                      case "Qualifier":
                      case "UseBlank":
                      case "Value1":
                      case "Value2":
                      case "Format":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "MapInfo":
                  case "Schema":
                  case "data":
                    switch (r[3]) {
                      case "Map":
                      case "Entry":
                      case "Range":
                      case "XPath":
                      case "Field":
                      case "XSDType":
                      case "FilterOn":
                      case "Aggregate":
                      case "ElementType":
                      case "AttributeType":
                        break;
                      case "schema":
                      case "element":
                      case "complexType":
                      case "datatype":
                      case "all":
                      case "attribute":
                      case "extends":
                      case "row":
                        break;
                      default:
                        tt = !1;
                    }
                    break;
                  case "SmartTags":
                    break;
                  default:
                    tt = !1;
                }
                if (tt) break;
                if (!c[c.length - 1][1])
                  throw "Unrecognized tag: " + r[3] + "|" + c.join("|");
                if ("CustomDocumentProperties" === c[c.length - 1][0]) {
                  if ("/>" === r[0].slice(-2)) break;
                  "/" === r[1]
                    ? al(S, r[3], D, i.slice(T, r.index))
                    : ((D = r), (T = r.index + r[0].length));
                  break;
                }
                if (n.WTF)
                  throw "Unrecognized tag: " + r[3] + "|" + c.join("|");
            }
          var it = {};
          return (
            n.bookSheets || n.bookProps || (it.Sheets = d),
            (it.SheetNames = u),
            (it.Workbook = H),
            (it.SSF = q.get_table()),
            (it.Props = k),
            (it.Custprops = S),
            it
          );
        }
        function hl(t, e) {
          switch ((ec((e = e || {})), e.type || "base64")) {
            case "base64":
              return pl(y.decode(t), e);
            case "binary":
            case "buffer":
            case "file":
              return pl(t, e);
            case "array":
              return pl(k(t), e);
          }
        }
        function fl(t) {
          return Zt("NamedRange", null, {
            "ss:Name": t.Name,
            "ss:RefersTo": "=" + ta(t.Ref, { r: 0, c: 0 }),
          });
        }
        function bl(t, e, n, i, r, o, a) {
          if (!t || (null == t.v && null == t.f)) return "";
          var s = {};
          if (
            (t.f && (s["ss:Formula"] = "=" + kt(ta(t.f, a))),
            t.F && t.F.slice(0, e.length) == e)
          ) {
            var l = Ge(t.F.slice(e.length + 1));
            s["ss:ArrayRange"] =
              "RC:R" +
              (l.r == a.r ? "" : "[" + (l.r - a.r) + "]") +
              "C" +
              (l.c == a.c ? "" : "[" + (l.c - a.c) + "]");
          }
          if (
            (t.l &&
              t.l.Target &&
              ((s["ss:HRef"] = kt(t.l.Target)),
              t.l.Tooltip && (s["x:HRefScreenTip"] = kt(t.l.Tooltip))),
            n["!merges"])
          )
            for (var c = n["!merges"], d = 0; d != c.length; ++d)
              c[d].s.c == a.c &&
                c[d].s.r == a.r &&
                (c[d].e.c > c[d].s.c &&
                  (s["ss:MergeAcross"] = c[d].e.c - c[d].s.c),
                c[d].e.r > c[d].s.r &&
                  (s["ss:MergeDown"] = c[d].e.r - c[d].s.r));
          var u = "",
            p = "";
          switch (t.t) {
            case "z":
              return "";
            case "n":
              (u = "Number"), (p = String(t.v));
              break;
            case "b":
              (u = "Boolean"), (p = t.v ? "1" : "0");
              break;
            case "e":
              (u = "Error"), (p = zn[t.v]);
              break;
            case "d":
              (u = "DateTime"),
                (p = new Date(t.v).toISOString()),
                null == t.z && (t.z = t.z || q._table[14]);
              break;
            case "s":
              (u = "String"),
                (p = ((t.v || "") + "")
                  .replace(zt, function (t) {
                    return At[t];
                  })
                  .replace(Tt, function (t) {
                    return (
                      "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";"
                    );
                  }));
          }
          var h = is(i.cellXfs, t, i);
          (s["ss:StyleID"] = "s" + (21 + h)), (s["ss:Index"] = a.c + 1);
          var f =
            '<Data ss:Type="' + u + '">' + (null != t.v ? p : "") + "</Data>";
          return (
            (t.c || []).length > 0 &&
              (f += t.c
                .map(function (t) {
                  var e = Zt(
                    "ss:Data",
                    (function (t) {
                      return t.replace(/(\r\n|[\r\n])/g, "&#10;");
                    })(t.t || ""),
                    { xmlns: "http://www.w3.org/TR/REC-html40" }
                  );
                  return Zt("Comment", e, { "ss:Author": t.a });
                })
                .join("")),
            Zt("Cell", f, s)
          );
        }
        function ml(t, e) {
          var n = '<Row ss:Index="' + (t + 1) + '"';
          return (
            e &&
              (e.hpt && !e.hpx && (e.hpx = fo(e.hpt)),
              e.hpx && (n += ' ss:AutoFitHeight="0" ss:Height="' + e.hpx + '"'),
              e.hidden && (n += ' ss:Hidden="1"')),
            n + ">"
          );
        }
        function gl(t, e, n) {
          var i = [],
            r = n.SheetNames[t],
            o = n.Sheets[r],
            a = o
              ? (function (t, e, n, i) {
                  if (!t) return "";
                  if (!((i || {}).Workbook || {}).Names) return "";
                  for (
                    var r = i.Workbook.Names, o = [], a = 0;
                    a < r.length;
                    ++a
                  ) {
                    var s = r[a];
                    s.Sheet == n && (s.Name.match(/^_xlfn\./) || o.push(fl(s)));
                  }
                  return o.join("");
                })(o, 0, t, n)
              : "";
          return (
            a.length > 0 && i.push("<Names>" + a + "</Names>"),
            (a = o
              ? (function (t, e, n, i) {
                  if (!t["!ref"]) return "";
                  var r = Qe(t["!ref"]),
                    o = t["!merges"] || [],
                    a = 0,
                    s = [];
                  t["!cols"] &&
                    t["!cols"].forEach(function (t, e) {
                      po(t);
                      var n = !!t.width,
                        i = es(e, t),
                        r = { "ss:Index": e + 1 };
                      n && (r["ss:Width"] = ao(i.width)),
                        t.hidden && (r["ss:Hidden"] = "1"),
                        s.push(Zt("Column", null, r));
                    });
                  for (var l = Array.isArray(t), c = r.s.r; c <= r.e.r; ++c) {
                    for (
                      var d = [ml(c, (t["!rows"] || [])[c])], u = r.s.c;
                      u <= r.e.c;
                      ++u
                    ) {
                      var p = !1;
                      for (a = 0; a != o.length; ++a)
                        if (
                          !(
                            o[a].s.c > u ||
                            o[a].s.r > c ||
                            o[a].e.c < u ||
                            o[a].e.r < c
                          )
                        ) {
                          (o[a].s.c == u && o[a].s.r == c) || (p = !0);
                          break;
                        }
                      if (!p) {
                        var h = { r: c, c: u },
                          f = Ke(h),
                          b = l ? (t[c] || [])[u] : t[f];
                        d.push(bl(b, f, t, e, 0, 0, h));
                      }
                    }
                    d.push("</Row>"), d.length > 2 && s.push(d.join(""));
                  }
                  return s.join("");
                })(o, e)
              : "").length > 0 && i.push("<Table>" + a + "</Table>"),
            i.push(
              (function (t, e, n, i) {
                if (!t) return "";
                var r = [];
                if (
                  (t["!margins"] &&
                    (r.push("<PageSetup>"),
                    t["!margins"].header &&
                      r.push(
                        Zt("Header", null, { "x:Margin": t["!margins"].header })
                      ),
                    t["!margins"].footer &&
                      r.push(
                        Zt("Footer", null, { "x:Margin": t["!margins"].footer })
                      ),
                    r.push(
                      Zt("PageMargins", null, {
                        "x:Bottom": t["!margins"].bottom || "0.75",
                        "x:Left": t["!margins"].left || "0.7",
                        "x:Right": t["!margins"].right || "0.7",
                        "x:Top": t["!margins"].top || "0.75",
                      })
                    ),
                    r.push("</PageSetup>")),
                  i && i.Workbook && i.Workbook.Sheets && i.Workbook.Sheets[n])
                )
                  if (i.Workbook.Sheets[n].Hidden)
                    r.push(
                      Zt(
                        "Visible",
                        1 == i.Workbook.Sheets[n].Hidden
                          ? "SheetHidden"
                          : "SheetVeryHidden",
                        {}
                      )
                    );
                  else {
                    for (
                      var o = 0;
                      o < n &&
                      (!i.Workbook.Sheets[o] || i.Workbook.Sheets[o].Hidden);
                      ++o
                    );
                    o == n && r.push("<Selected/>");
                  }
                return (
                  ((((i || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
                    r.push("<DisplayRightToLeft/>"),
                  t["!protect"] &&
                    (r.push(Gt("ProtectContents", "True")),
                    t["!protect"].objects &&
                      r.push(Gt("ProtectObjects", "True")),
                    t["!protect"].scenarios &&
                      r.push(Gt("ProtectScenarios", "True")),
                    null == t["!protect"].selectLockedCells ||
                    t["!protect"].selectLockedCells
                      ? null == t["!protect"].selectUnlockedCells ||
                        t["!protect"].selectUnlockedCells ||
                        r.push(Gt("EnableSelection", "UnlockedCells"))
                      : r.push(Gt("EnableSelection", "NoSelection")),
                    [
                      ["formatCells", "AllowFormatCells"],
                      ["formatColumns", "AllowSizeCols"],
                      ["formatRows", "AllowSizeRows"],
                      ["insertColumns", "AllowInsertCols"],
                      ["insertRows", "AllowInsertRows"],
                      ["insertHyperlinks", "AllowInsertHyperlinks"],
                      ["deleteColumns", "AllowDeleteCols"],
                      ["deleteRows", "AllowDeleteRows"],
                      ["sort", "AllowSort"],
                      ["autoFilter", "AllowFilter"],
                      ["pivotTables", "AllowUsePivotTables"],
                    ].forEach(function (e) {
                      t["!protect"][e[0]] && r.push("<" + e[1] + "/>");
                    })),
                  0 == r.length
                    ? ""
                    : Zt("WorksheetOptions", r.join(""), { xmlns: ie })
                );
              })(o, 0, t, n)
            ),
            i.join("")
          );
        }
        function vl(t, e, n, i) {
          var r = n,
            o = [],
            a = e.slice(e.l, e.l + r);
          if (i && i.enc && i.enc.insitu)
            switch (t.n) {
              case "BOF":
              case "FilePass":
              case "FileLock":
              case "InterfaceHdr":
              case "RRDInfo":
              case "RRDHead":
              case "UsrExcl":
                break;
              default:
                if (0 === a.length) break;
                i.enc.insitu(a);
            }
          o.push(a), (e.l += r);
          for (
            var s = zl[xe(e, e.l)], l = 0;
            null != s && "Continue" === s.n.slice(0, 8);

          )
            (r = xe(e, e.l + 2)),
              (l = e.l + 4),
              "ContinueFrt" == s.n
                ? (l += 4)
                : "ContinueFrt" == s.n.slice(0, 11) && (l += 12),
              o.push(e.slice(l, e.l + 4 + r)),
              (e.l += 4 + r),
              (s = zl[xe(e, e.l)]);
          var c = T(o);
          Ee(c, 0);
          var d = 0;
          c.lens = [];
          for (var u = 0; u < o.length; ++u) c.lens.push(d), (d += o[u].length);
          return t.f(c, c.length, i);
        }
        function _l(t, e, n) {
          if ("z" !== t.t && t.XF) {
            var i = 0;
            try {
              (i = t.z || t.XF.numFmtId || 0), e.cellNF && (t.z = q._table[i]);
            } catch (t) {
              if (e.WTF) throw t;
            }
            if (!e || !1 !== e.cellText)
              try {
                "e" === t.t
                  ? (t.w = t.w || zn[t.v])
                  : 0 === i || "General" == i
                  ? "n" === t.t
                    ? (0 | t.v) === t.v
                      ? (t.w = q._general_int(t.v))
                      : (t.w = q._general_num(t.v))
                    : (t.w = q._general(t.v))
                  : (t.w = q.format(i, t.v, { date1904: !!n }));
              } catch (t) {
                if (e.WTF) throw t;
              }
            if (
              e.cellDates &&
              i &&
              "n" == t.t &&
              q.is_date(q._table[i] || String(i))
            ) {
              var r = q.parse_date_code(t.v);
              r &&
                ((t.t = "d"),
                (t.v = new Date(r.y, r.m - 1, r.d, r.H, r.M, r.S, r.u)));
            }
          }
        }
        function yl(t, e, n) {
          return { v: t, ixfe: e, t: n };
        }
        var Ml = "e0859ff2f94f6810ab9108002b27b3d9",
          Ol = "02d5cdd59c2e1b10939708002b2cf9ae";
        function wl(t, e) {
          var n, i, r, o;
          if (
            (e || (e = {}),
            ec(e),
            f(),
            e.codepage && p(e.codepage),
            t.FullPaths)
          ) {
            if (N.find(t, "/encryption"))
              throw new Error("File is password-protected");
            (n = N.find(t, "!CompObj")),
              (i = N.find(t, "/Workbook") || N.find(t, "/Book"));
          } else {
            switch (e.type) {
              case "base64":
                t = z(y.decode(t));
                break;
              case "binary":
                t = z(t);
                break;
              case "buffer":
                break;
              case "array":
                Array.isArray(t) || (t = Array.prototype.slice.call(t));
            }
            Ee(t, 0), (i = { content: t });
          }
          if (
            (n &&
              (function (t) {
                var e = {},
                  n = t.content;
                if (
                  ((n.l = 28),
                  (e.AnsiUserType = n.read_shift(0, "lpstr-ansi")),
                  (e.AnsiClipboardFormat = (function (t) {
                    return Sn(t, 1);
                  })(n)),
                  n.length - n.l <= 4)
                )
                  return e;
                var i = n.read_shift(4);
                0 == i ||
                  i > 40 ||
                  ((n.l -= 4),
                  (e.Reserved1 = n.read_shift(0, "lpstr-ansi")),
                  n.length - n.l <= 4 ||
                    1907505652 !== (i = n.read_shift(4)) ||
                    ((e.UnicodeClipboardFormat = (function (t) {
                      return Sn(t, 2);
                    })(n)),
                    0 == (i = n.read_shift(4)) ||
                      i > 40 ||
                      ((n.l -= 4), (e.Reserved2 = n.read_shift(0, "lpwstr")))));
              })(n),
            e.bookProps && !e.bookSheets)
          )
            r = {};
          else {
            var a = M ? "buffer" : "array";
            if (i && i.content)
              r = (function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  c,
                  d = { opts: {} },
                  u = {},
                  p = e.dense ? [] : {},
                  f = {},
                  b = {},
                  m = null,
                  g = [],
                  v = "",
                  _ = {},
                  y = "",
                  M = {},
                  O = [],
                  w = !0,
                  A = [],
                  x = [],
                  z = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
                  C = {},
                  k = function (t) {
                    return t < 8 ? Wn[t] : (t < 64 && x[t - 8]) || Wn[t];
                  },
                  S = function (t, e, i) {
                    if (
                      !(N > 1) &&
                      (i.sheetRows && t.r >= i.sheetRows && (w = !1), w)
                    ) {
                      if (
                        (i.cellStyles &&
                          e.XF &&
                          e.XF.data &&
                          (function (t, e, n) {
                            var i,
                              r = e.XF.data;
                            r &&
                              r.patternType &&
                              n &&
                              n.cellStyles &&
                              ((e.s = {}),
                              (e.s.patternType = r.patternType),
                              (i = io(k(r.icvFore))) &&
                                (e.s.fgColor = { rgb: i }),
                              (i = io(k(r.icvBack))) &&
                                (e.s.bgColor = { rgb: i }));
                          })(0, e, i),
                        delete e.ixfe,
                        delete e.XF,
                        (n = t),
                        (y = Ke(t)),
                        (b && b.s && b.e) ||
                          (b = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                        t.r < b.s.r && (b.s.r = t.r),
                        t.c < b.s.c && (b.s.c = t.c),
                        t.r + 1 > b.e.r && (b.e.r = t.r + 1),
                        t.c + 1 > b.e.c && (b.e.c = t.c + 1),
                        i.cellFormula && e.f)
                      )
                        for (var r = 0; r < O.length; ++r)
                          if (
                            !(
                              O[r][0].s.c > t.c ||
                              O[r][0].s.r > t.r ||
                              O[r][0].e.c < t.c ||
                              O[r][0].e.r < t.r
                            )
                          ) {
                            (e.F = Je(O[r][0])),
                              (O[r][0].s.c == t.c && O[r][0].s.r == t.r) ||
                                delete e.f,
                              e.f && (e.f = "" + Pa(O[r][1], 0, t, R, T));
                            break;
                          }
                      i.dense
                        ? (p[t.r] || (p[t.r] = []), (p[t.r][t.c] = e))
                        : (p[y] = e);
                    }
                  },
                  T = {
                    enc: !1,
                    sbcch: 0,
                    snames: [],
                    sharedf: M,
                    arrayf: O,
                    rrtabid: [],
                    lastuser: "",
                    biff: 8,
                    codepage: 0,
                    winlocked: 0,
                    cellStyles: !!e && !!e.cellStyles,
                    WTF: !!e && !!e.wtf,
                  };
                e.password && (T.password = e.password);
                var D = [],
                  L = [],
                  E = [],
                  j = [],
                  P = !1,
                  R = [];
                (R.SheetNames = T.snames),
                  (R.sharedf = T.sharedf),
                  (R.arrayf = T.arrayf),
                  (R.names = []),
                  (R.XTI = []);
                var I,
                  W = "",
                  N = 0,
                  B = 0,
                  F = [],
                  H = [];
                (T.codepage = 1200), h(1200);
                for (var Y = !1; t.l < t.length - 1; ) {
                  var U = t.l,
                    X = t.read_shift(2);
                  if (0 === X && "EOF" === W) break;
                  var V = t.l === t.length ? 0 : t.read_shift(2),
                    G = zl[X];
                  if (G && G.f) {
                    if (
                      e.bookSheets &&
                      "BoundSheet8" === W &&
                      "BoundSheet8" !== G.n
                    )
                      break;
                    if (((W = G.n), 2 === G.r || 12 == G.r)) {
                      var K = t.read_shift(2);
                      if (
                        ((V -= 2),
                        !T.enc &&
                          K !== X &&
                          (((255 & K) << 8) | (K >> 8)) !== X)
                      )
                        throw new Error("rt mismatch: " + K + "!=" + X);
                      12 == G.r && ((t.l += 10), (V -= 10));
                    }
                    var Z;
                    Z = "EOF" === G.n ? G.f(t, V, T) : vl(G, t, V, T);
                    var J = G.n;
                    if (0 == N && "BOF" != J) continue;
                    switch (J) {
                      case "Date1904":
                        d.opts.Date1904 = z.WBProps.date1904 = Z;
                        break;
                      case "WriteProtect":
                        d.opts.WriteProtect = !0;
                        break;
                      case "FilePass":
                        if ((T.enc || (t.l = 0), (T.enc = Z), !e.password))
                          throw new Error("File is password-protected");
                        if (null == Z.valid)
                          throw new Error("Encryption scheme unsupported");
                        if (!Z.valid) throw new Error("Password is incorrect");
                        break;
                      case "WriteAccess":
                        T.lastuser = Z;
                        break;
                      case "FileSharing":
                        break;
                      case "CodePage":
                        switch (Z) {
                          case 21010:
                            Z = 1200;
                            break;
                          case 32768:
                            Z = 1e4;
                            break;
                          case 32769:
                            Z = 1252;
                        }
                        h((T.codepage = Z)), (Y = !0);
                        break;
                      case "RRTabId":
                        T.rrtabid = Z;
                        break;
                      case "WinProtect":
                        T.winlocked = Z;
                        break;
                      case "Template":
                      case "BookBool":
                      case "UsesELFs":
                      case "MTRSettings":
                        break;
                      case "RefreshAll":
                      case "CalcCount":
                      case "CalcDelta":
                      case "CalcIter":
                      case "CalcMode":
                      case "CalcPrecision":
                      case "CalcSaveRecalc":
                        d.opts[J] = Z;
                        break;
                      case "CalcRefMode":
                        T.CalcRefMode = Z;
                        break;
                      case "Uncalced":
                        break;
                      case "ForceFullCalculation":
                        d.opts.FullCalc = Z;
                        break;
                      case "WsBool":
                        Z.fDialog && (p["!type"] = "dialog");
                        break;
                      case "XF":
                        A.push(Z);
                        break;
                      case "ExtSST":
                      case "BookExt":
                      case "RichTextStream":
                      case "BkHim":
                        break;
                      case "SupBook":
                        R.push([Z]), (R[R.length - 1].XTI = []);
                        break;
                      case "ExternName":
                        R[R.length - 1].push(Z);
                        break;
                      case "Index":
                        break;
                      case "Lbl":
                        (I = { Name: Z.Name, Ref: Pa(Z.rgce, 0, null, R, T) }),
                          Z.itab > 0 && (I.Sheet = Z.itab - 1),
                          R.names.push(I),
                          R[0] || ((R[0] = []), (R[0].XTI = [])),
                          R[R.length - 1].push(Z),
                          "_xlnm._FilterDatabase" == Z.Name &&
                            Z.itab > 0 &&
                            Z.rgce &&
                            Z.rgce[0] &&
                            Z.rgce[0][0] &&
                            "PtgArea3d" == Z.rgce[0][0][0] &&
                            (H[Z.itab - 1] = { ref: Je(Z.rgce[0][0][1][2]) });
                        break;
                      case "ExternCount":
                        T.ExternCount = Z;
                        break;
                      case "ExternSheet":
                        0 == R.length && ((R[0] = []), (R[0].XTI = [])),
                          (R[R.length - 1].XTI = R[R.length - 1].XTI.concat(Z)),
                          (R.XTI = R.XTI.concat(Z));
                        break;
                      case "NameCmt":
                        if (T.biff < 8) break;
                        null != I && (I.Comment = Z[1]);
                        break;
                      case "Protect":
                        p["!protect"] = Z;
                        break;
                      case "Password":
                        0 !== Z && T.WTF;
                        break;
                      case "Prot4Rev":
                      case "Prot4RevPass":
                        break;
                      case "BoundSheet8":
                        (f[Z.pos] = Z), T.snames.push(Z.name);
                        break;
                      case "EOF":
                        if (--N) break;
                        if (b.e) {
                          if (b.e.r > 0 && b.e.c > 0) {
                            if (
                              (b.e.r--,
                              b.e.c--,
                              (p["!ref"] = Je(b)),
                              e.sheetRows && e.sheetRows <= b.e.r)
                            ) {
                              var Q = b.e.r;
                              (b.e.r = e.sheetRows - 1),
                                (p["!fullref"] = p["!ref"]),
                                (p["!ref"] = Je(b)),
                                (b.e.r = Q);
                            }
                            b.e.r++, b.e.c++;
                          }
                          D.length > 0 && (p["!merges"] = D),
                            L.length > 0 && (p["!objects"] = L),
                            E.length > 0 && (p["!cols"] = E),
                            j.length > 0 && (p["!rows"] = j),
                            z.Sheets.push(C);
                        }
                        "" === v ? (_ = p) : (u[v] = p),
                          (p = e.dense ? [] : {});
                        break;
                      case "BOF":
                        if (
                          (8 === T.biff &&
                            (T.biff =
                              { 9: 2, 521: 3, 1033: 4 }[X] ||
                              {
                                512: 2,
                                768: 3,
                                1024: 4,
                                1280: 5,
                                1536: 8,
                                2: 2,
                                7: 2,
                              }[Z.BIFFVer] ||
                              8),
                          8 == T.biff &&
                            0 == Z.BIFFVer &&
                            16 == Z.dt &&
                            (T.biff = 2),
                          N++)
                        )
                          break;
                        if (
                          ((w = !0),
                          (p = e.dense ? [] : {}),
                          T.biff < 8 &&
                            !Y &&
                            ((Y = !0), h((T.codepage = e.codepage || 1252))),
                          T.biff < 5)
                        ) {
                          "" === v && (v = "Sheet1"),
                            (b = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } });
                          var tt = { pos: t.l - V, name: v };
                          (f[tt.pos] = tt), T.snames.push(v);
                        } else v = (f[U] || { name: "" }).name;
                        32 == Z.dt && (p["!type"] = "chart"),
                          64 == Z.dt && (p["!type"] = "macro"),
                          (D = []),
                          (L = []),
                          (T.arrayf = O = []),
                          (E = []),
                          (j = []),
                          (P = !1),
                          (C = { Hidden: (f[U] || { hs: 0 }).hs, name: v });
                        break;
                      case "Number":
                      case "BIFF2NUM":
                      case "BIFF2INT":
                        "chart" == p["!type"] &&
                          (e.dense
                            ? (p[Z.r] || [])[Z.c]
                            : p[Ke({ c: Z.c, r: Z.r })]) &&
                          ++Z.c,
                          (s = {
                            ixfe: Z.ixfe,
                            XF: A[Z.ixfe] || {},
                            v: Z.val,
                            t: "n",
                          }),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e);
                        break;
                      case "BoolErr":
                        (s = { ixfe: Z.ixfe, XF: A[Z.ixfe], v: Z.val, t: Z.t }),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e);
                        break;
                      case "RK":
                        (s = {
                          ixfe: Z.ixfe,
                          XF: A[Z.ixfe],
                          v: Z.rknum,
                          t: "n",
                        }),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e);
                        break;
                      case "MulRk":
                        for (var et = Z.c; et <= Z.C; ++et) {
                          var nt = Z.rkrec[et - Z.c][0];
                          (s = {
                            ixfe: nt,
                            XF: A[nt],
                            v: Z.rkrec[et - Z.c][1],
                            t: "n",
                          }),
                            B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                            _l(s, e, d.opts.Date1904),
                            S({ c: et, r: Z.r }, s, e);
                        }
                        break;
                      case "Formula":
                        if ("String" == Z.val) {
                          m = Z;
                          break;
                        }
                        if (
                          (((s = yl(Z.val, Z.cell.ixfe, Z.tt)).XF = A[s.ixfe]),
                          e.cellFormula)
                        ) {
                          var it = Z.formula;
                          if (
                            it &&
                            it[0] &&
                            it[0][0] &&
                            "PtgExp" == it[0][0][0]
                          ) {
                            var rt = it[0][0][1][0],
                              ot = it[0][0][1][1],
                              at = Ke({ r: rt, c: ot });
                            M[at]
                              ? (s.f = "" + Pa(Z.formula, 0, Z.cell, R, T))
                              : (s.F = (
                                  (e.dense ? (p[rt] || [])[ot] : p[at]) || {}
                                ).F);
                          } else s.f = "" + Pa(Z.formula, 0, Z.cell, R, T);
                        }
                        B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S(Z.cell, s, e),
                          (m = Z);
                        break;
                      case "String":
                        if (!m)
                          throw new Error("String record expects Formula");
                        (m.val = Z),
                          ((s = yl(Z, m.cell.ixfe, "s")).XF = A[s.ixfe]),
                          e.cellFormula &&
                            (s.f = "" + Pa(m.formula, 0, m.cell, R, T)),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S(m.cell, s, e),
                          (m = null);
                        break;
                      case "Array":
                        O.push(Z);
                        var st = Ke(Z[0].s);
                        if (
                          ((i = e.dense
                            ? (p[Z[0].s.r] || [])[Z[0].s.c]
                            : p[st]),
                          e.cellFormula && i)
                        ) {
                          if (!m) break;
                          if (!st || !i) break;
                          (i.f = "" + Pa(Z[1], 0, Z[0], R, T)),
                            (i.F = Je(Z[0]));
                        }
                        break;
                      case "ShrFmla":
                        if (!w) break;
                        if (!e.cellFormula) break;
                        if (y) {
                          if (!m) break;
                          (M[Ke(m.cell)] = Z[0]),
                            ((
                              (i = e.dense
                                ? (p[m.cell.r] || [])[m.cell.c]
                                : p[Ke(m.cell)]) || {}
                            ).f = "" + Pa(Z[0], 0, n, R, T));
                        }
                        break;
                      case "LabelSst":
                        ((s = yl(g[Z.isst].t, Z.ixfe, "s")).XF = A[s.ixfe]),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e);
                        break;
                      case "Blank":
                        e.sheetStubs &&
                          ((s = { ixfe: Z.ixfe, XF: A[Z.ixfe], t: "z" }),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e));
                        break;
                      case "MulBlank":
                        if (e.sheetStubs)
                          for (var lt = Z.c; lt <= Z.C; ++lt) {
                            var ct = Z.ixfe[lt - Z.c];
                            (s = { ixfe: ct, XF: A[ct], t: "z" }),
                              B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                              _l(s, e, d.opts.Date1904),
                              S({ c: lt, r: Z.r }, s, e);
                          }
                        break;
                      case "RString":
                      case "Label":
                      case "BIFF2STR":
                        ((s = yl(Z.val, Z.ixfe, "s")).XF = A[s.ixfe]),
                          B > 0 && (s.z = F[(s.ixfe >> 8) & 31]),
                          _l(s, e, d.opts.Date1904),
                          S({ c: Z.c, r: Z.r }, s, e);
                        break;
                      case "Dimensions":
                        1 === N && (b = Z);
                        break;
                      case "SST":
                        g = Z;
                        break;
                      case "Format":
                        if (4 == T.biff) {
                          F[B++] = Z[1];
                          for (
                            var dt = 0;
                            dt < B + 163 && q._table[dt] != Z[1];
                            ++dt
                          );
                          dt >= 163 && q.load(Z[1], B + 163);
                        } else q.load(Z[1], Z[0]);
                        break;
                      case "BIFF2FORMAT":
                        F[B++] = Z;
                        for (
                          var ut = 0;
                          ut < B + 163 && q._table[ut] != Z;
                          ++ut
                        );
                        ut >= 163 && q.load(Z, B + 163);
                        break;
                      case "MergeCells":
                        D = D.concat(Z);
                        break;
                      case "Obj":
                        L[Z.cmo[0]] = T.lastobj = Z;
                        break;
                      case "TxO":
                        T.lastobj.TxO = Z;
                        break;
                      case "ImData":
                        T.lastobj.ImData = Z;
                        break;
                      case "HLink":
                        for (a = Z[0].s.r; a <= Z[0].e.r; ++a)
                          for (o = Z[0].s.c; o <= Z[0].e.c; ++o)
                            (i = e.dense
                              ? (p[a] || [])[o]
                              : p[Ke({ c: o, r: a })]) && (i.l = Z[1]);
                        break;
                      case "HLinkTooltip":
                        for (a = Z[0].s.r; a <= Z[0].e.r; ++a)
                          for (o = Z[0].s.c; o <= Z[0].e.c; ++o)
                            (i = e.dense
                              ? (p[a] || [])[o]
                              : p[Ke({ c: o, r: a })]) &&
                              i.l &&
                              (i.l.Tooltip = Z[1]);
                        break;
                      case "Note":
                        if (T.biff <= 5 && T.biff >= 2) break;
                        i = e.dense ? (p[Z[0].r] || [])[Z[0].c] : p[Ke(Z[0])];
                        var pt = L[Z[2]];
                        i ||
                          (e.dense
                            ? (p[Z[0].r] || (p[Z[0].r] = []),
                              (i = p[Z[0].r][Z[0].c] = { t: "z" }))
                            : (i = p[Ke(Z[0])] = { t: "z" }),
                          (b.e.r = Math.max(b.e.r, Z[0].r)),
                          (b.s.r = Math.min(b.s.r, Z[0].r)),
                          (b.e.c = Math.max(b.e.c, Z[0].c)),
                          (b.s.c = Math.min(b.s.c, Z[0].c))),
                          i.c || (i.c = []),
                          (r = { a: Z[1], t: pt.TxO.t }),
                          i.c.push(r);
                        break;
                      default:
                        switch (G.n) {
                          case "ClrtClient":
                            break;
                          case "XFExt":
                            A[Z.ixfe],
                              Z.ext.forEach(function (t) {
                                t[0];
                              });
                            break;
                          case "DefColWidth":
                            break;
                          case "DefaultRowHeight":
                            Z[1];
                            break;
                          case "ColInfo":
                            if (!T.cellStyles) break;
                            for (; Z.e >= Z.s; )
                              (E[Z.e--] = { width: Z.w / 256 }),
                                P || ((P = !0), uo(Z.w / 256)),
                                po(E[Z.e + 1]);
                            break;
                          case "Row":
                            var ht = {};
                            null != Z.level &&
                              ((j[Z.r] = ht), (ht.level = Z.level)),
                              Z.hidden && ((j[Z.r] = ht), (ht.hidden = !0)),
                              Z.hpt &&
                                ((j[Z.r] = ht),
                                (ht.hpt = Z.hpt),
                                (ht.hpx = fo(Z.hpt)));
                            break;
                          case "LeftMargin":
                          case "RightMargin":
                          case "TopMargin":
                          case "BottomMargin":
                            p["!margins"] || ns((p["!margins"] = {})),
                              (p["!margins"][J.slice(0, -6).toLowerCase()] = Z);
                            break;
                          case "Setup":
                            p["!margins"] || ns((p["!margins"] = {})),
                              (p["!margins"].header = Z.header),
                              (p["!margins"].footer = Z.footer);
                            break;
                          case "Window2":
                            Z.RTL && (z.Views[0].RTL = !0);
                            break;
                          case "Header":
                          case "Footer":
                          case "HCenter":
                          case "VCenter":
                          case "Pls":
                          case "GCW":
                          case "LHRecord":
                          case "DBCell":
                          case "EntExU2":
                          case "SxView":
                          case "Sxvd":
                          case "SXVI":
                          case "SXVDEx":
                          case "SxIvd":
                          case "SXString":
                          case "Sync":
                          case "Addin":
                          case "SXDI":
                          case "SXLI":
                          case "SXEx":
                          case "QsiSXTag":
                          case "Selection":
                          case "Feat":
                            break;
                          case "FeatHdr":
                          case "FeatHdr11":
                            break;
                          case "Feature11":
                          case "Feature12":
                          case "List12":
                            break;
                          case "Country":
                            l = Z;
                            break;
                          case "RecalcId":
                          case "DxGCol":
                            break;
                          case "Fbi":
                          case "Fbi2":
                          case "GelFrame":
                          case "Font":
                          case "XFCRC":
                          case "Style":
                          case "StyleExt":
                            break;
                          case "Palette":
                            x = Z;
                            break;
                          case "Theme":
                            c = Z;
                            break;
                          case "ScenarioProtect":
                          case "ObjProtect":
                          case "CondFmt12":
                          case "Table":
                          case "TableStyles":
                          case "TableStyle":
                          case "TableStyleElement":
                          case "SXStreamID":
                          case "SXVS":
                          case "DConRef":
                          case "SXAddl":
                          case "DConBin":
                          case "DConName":
                          case "SXPI":
                          case "SxFormat":
                          case "SxSelect":
                          case "SxRule":
                          case "SxFilt":
                          case "SxItm":
                          case "SxDXF":
                          case "ScenMan":
                          case "DCon":
                          case "CellWatch":
                          case "PrintRowCol":
                          case "PrintGrid":
                          case "PrintSize":
                          case "XCT":
                          case "CRN":
                          case "Scl":
                          case "SheetExt":
                          case "SheetExtOptional":
                          case "ObNoMacros":
                          case "ObProj":
                            break;
                          case "CodeName":
                            v
                              ? (C.CodeName = Z || C.name)
                              : (z.WBProps.CodeName = Z || "ThisWorkbook");
                            break;
                          case "GUIDTypeLib":
                          case "WOpt":
                          case "PhoneticInfo":
                          case "OleObjectSize":
                            break;
                          case "DXF":
                          case "DXFN":
                          case "DXFN12":
                          case "DXFN12List":
                          case "DXFN12NoCB":
                            break;
                          case "Dv":
                          case "DVal":
                            break;
                          case "BRAI":
                          case "Series":
                          case "SeriesText":
                          case "DConn":
                          case "DbOrParamQry":
                          case "DBQueryExt":
                          case "OleDbConn":
                          case "ExtString":
                          case "IFmtRecord":
                            break;
                          case "CondFmt":
                          case "CF":
                          case "CF12":
                          case "CFEx":
                          case "Excel9File":
                          case "Units":
                            break;
                          case "InterfaceHdr":
                          case "Mms":
                          case "InterfaceEnd":
                          case "DSF":
                          case "BuiltInFnGroupCount":
                            break;
                          case "Window1":
                          case "HideObj":
                          case "GridSet":
                          case "Guts":
                          case "UserBView":
                          case "UserSViewBegin":
                          case "UserSViewEnd":
                          case "Pane":
                            break;
                          default:
                            switch (G.n) {
                              case "Dat":
                              case "Begin":
                              case "End":
                              case "StartBlock":
                              case "EndBlock":
                              case "Frame":
                              case "Area":
                              case "Axis":
                              case "AxisLine":
                              case "Tick":
                                break;
                              case "AxesUsed":
                              case "CrtLayout12":
                              case "CrtLayout12A":
                              case "CrtLink":
                              case "CrtLine":
                              case "CrtMlFrt":
                              case "CrtMlFrtContinue":
                                break;
                              case "LineFormat":
                              case "AreaFormat":
                              case "Chart":
                              case "Chart3d":
                              case "Chart3DBarShape":
                              case "ChartFormat":
                              case "ChartFrtInfo":
                                break;
                              case "PlotArea":
                              case "PlotGrowth":
                                break;
                              case "SeriesList":
                              case "SerParent":
                              case "SerAuxTrend":
                                break;
                              case "DataFormat":
                              case "SerToCrt":
                              case "FontX":
                                break;
                              case "CatSerRange":
                              case "AxcExt":
                              case "SerFmt":
                              case "ShtProps":
                                break;
                              case "DefaultText":
                              case "Text":
                              case "CatLab":
                              case "DataLabExtContents":
                                break;
                              case "Legend":
                              case "LegendException":
                                break;
                              case "Pie":
                              case "Scatter":
                                break;
                              case "PieFormat":
                              case "MarkerFormat":
                                break;
                              case "StartObject":
                              case "EndObject":
                                break;
                              case "AlRuns":
                              case "ObjectLink":
                              case "SIIndex":
                                break;
                              case "AttachedLabel":
                              case "YMult":
                                break;
                              case "Line":
                              case "Bar":
                              case "Surf":
                              case "AxisParent":
                              case "Pos":
                              case "ValueRange":
                              case "SXViewEx9":
                              case "SXViewLink":
                              case "PivotChartBits":
                              case "SBaseRef":
                              case "TextPropsStream":
                              case "LnExt":
                              case "MkrExt":
                              case "CrtCoopt":
                                break;
                              case "Qsi":
                              case "Qsif":
                              case "Qsir":
                              case "QsiSXTag":
                              case "TxtQry":
                              case "FilterMode":
                                break;
                              case "AutoFilter":
                              case "AutoFilterInfo":
                              case "AutoFilter12":
                              case "DropDownObjIds":
                              case "Sort":
                              case "SortData":
                              case "ShapePropsStream":
                                break;
                              case "MsoDrawing":
                              case "MsoDrawingGroup":
                              case "MsoDrawingSelection":
                                break;
                              case "WebPub":
                              case "AutoWebPub":
                                break;
                              case "HeaderFooter":
                              case "HFPicture":
                              case "PLV":
                              case "HorizontalPageBreaks":
                              case "VerticalPageBreaks":
                                break;
                              case "Backup":
                              case "CompressPictures":
                              case "Compat12":
                                break;
                              case "Continue":
                              case "ContinueFrt12":
                                break;
                              case "FrtFontList":
                              case "FrtWrapper":
                                break;
                              default:
                                switch (G.n) {
                                  case "TabIdConf":
                                  case "Radar":
                                  case "RadarArea":
                                  case "DropBar":
                                  case "Intl":
                                  case "CoordList":
                                  case "SerAuxErrBar":
                                    break;
                                  case "BIFF2FONTCLR":
                                  case "BIFF2FMTCNT":
                                  case "BIFF2FONTXTRA":
                                    break;
                                  case "BIFF2XF":
                                  case "BIFF3XF":
                                  case "BIFF4XF":
                                    break;
                                  case "BIFF4FMTCNT":
                                  case "BIFF2ROW":
                                  case "BIFF2WINDOW2":
                                    break;
                                  case "SCENARIO":
                                  case "DConBin":
                                  case "PicF":
                                  case "DataLabExt":
                                  case "Lel":
                                  case "BopPop":
                                  case "BopPopCustom":
                                  case "RealTimeData":
                                  case "Name":
                                    break;
                                  case "LHNGraph":
                                  case "FnGroupName":
                                  case "AddMenu":
                                  case "LPr":
                                    break;
                                  case "ListObj":
                                  case "ListField":
                                  case "RRSort":
                                  case "BigName":
                                    break;
                                  case "ToolbarHdr":
                                  case "ToolbarEnd":
                                  case "DDEObjName":
                                  case "FRTArchId$":
                                    break;
                                  default:
                                    if (e.WTF)
                                      throw "Unrecognized Record " + G.n;
                                }
                            }
                        }
                    }
                  } else t.l += V;
                }
                return (
                  (d.SheetNames = $(f)
                    .sort(function (t, e) {
                      return Number(t) - Number(e);
                    })
                    .map(function (t) {
                      return f[t].name;
                    })),
                  e.bookSheets || (d.Sheets = u),
                  d.Sheets &&
                    H.forEach(function (t, e) {
                      d.Sheets[d.SheetNames[e]]["!autofilter"] = t;
                    }),
                  (d.Preamble = _),
                  (d.Strings = g),
                  (d.SSF = q.get_table()),
                  T.enc && (d.Encryption = T.enc),
                  c && (d.Themes = c),
                  (d.Metadata = {}),
                  void 0 !== l && (d.Metadata.Country = l),
                  R.names.length > 0 && (z.Names = R.names),
                  (d.Workbook = z),
                  d
                );
              })(i.content, e);
            else if ((o = N.find(t, "PerfectOffice_MAIN")) && o.content)
              r = Sr.to_workbook(o.content, ((e.type = a), e));
            else {
              if (!(o = N.find(t, "NativeContent_MAIN")) || !o.content)
                throw new Error("Cannot find Workbook stream");
              r = Sr.to_workbook(o.content, ((e.type = a), e));
            }
            e.bookVBA &&
              t.FullPaths &&
              N.find(t, "/_VBA_PROJECT_CUR/VBA/dir") &&
              (r.vbaraw = (function (t) {
                var e = N.utils.cfb_new({ root: "R" });
                return (
                  t.FullPaths.forEach(function (n, i) {
                    if ("/" !== n.slice(-1) && n.match(/_VBA_PROJECT_CUR/)) {
                      var r = n
                        .replace(/^[^\/]*/, "R")
                        .replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
                      N.utils.cfb_add(e, r, t.FileIndex[i].content);
                    }
                  }),
                  N.write(e)
                );
              })(t));
          }
          var s = {};
          return (
            t.FullPaths &&
              (function (t, e, n) {
                var i = N.find(t, "!DocumentSummaryInformation");
                if (i && i.size > 0)
                  try {
                    var r = Ci(i, Dn, Ol);
                    for (var o in r) e[o] = r[o];
                  } catch (t) {
                    if (n.WTF) throw t;
                  }
                var a = N.find(t, "!SummaryInformation");
                if (a && a.size > 0)
                  try {
                    var s = Ci(a, Ln, Ml);
                    for (var l in s) null == e[l] && (e[l] = s[l]);
                  } catch (t) {
                    if (n.WTF) throw t;
                  }
                e.HeadingPairs &&
                  e.TitlesOfParts &&
                  (ai(e.HeadingPairs, e.TitlesOfParts, e, n),
                  delete e.HeadingPairs,
                  delete e.TitlesOfParts);
              })(t, s, e),
            (r.Props = r.Custprops = s),
            e.bookFiles && (r.cfb = t),
            r
          );
        }
        var Al = {
            0: {
              n: "BrtRowHdr",
              f: function (t, e) {
                var n = {},
                  i = t.l + e;
                (n.r = t.read_shift(4)), (t.l += 4);
                var r = t.read_shift(2);
                t.l += 1;
                var o = t.read_shift(1);
                return (
                  (t.l = i),
                  7 & o && (n.level = 7 & o),
                  16 & o && (n.hidden = !0),
                  32 & o && (n.hpt = r / 20),
                  n
                );
              },
            },
            1: {
              n: "BrtCellBlank",
              f: function (t) {
                return [un(t)];
              },
            },
            2: {
              n: "BrtCellRk",
              f: function (t) {
                return [un(t), yn(t), "n"];
              },
            },
            3: {
              n: "BrtCellError",
              f: function (t) {
                return [un(t), t.read_shift(1), "e"];
              },
            },
            4: {
              n: "BrtCellBool",
              f: function (t) {
                return [un(t), t.read_shift(1), "b"];
              },
            },
            5: {
              n: "BrtCellReal",
              f: function (t) {
                return [un(t), An(t), "n"];
              },
            },
            6: {
              n: "BrtCellSt",
              f: function (t) {
                return [un(t), an(t), "str"];
              },
            },
            7: {
              n: "BrtCellIsst",
              f: function (t) {
                return [un(t), t.read_shift(4), "s"];
              },
            },
            8: {
              n: "BrtFmlaString",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = un(t);
                r.r = n["!row"];
                var o = [r, an(t), "str"];
                if (n.cellFormula) {
                  t.l += 2;
                  var a = Fa(t, i - t.l, n);
                  o[3] = Pa(a, 0, r, n.supbooks, n);
                } else t.l = i;
                return o;
              },
            },
            9: {
              n: "BrtFmlaNum",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = un(t);
                r.r = n["!row"];
                var o = [r, An(t), "n"];
                if (n.cellFormula) {
                  t.l += 2;
                  var a = Fa(t, i - t.l, n);
                  o[3] = Pa(a, 0, r, n.supbooks, n);
                } else t.l = i;
                return o;
              },
            },
            10: {
              n: "BrtFmlaBool",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = un(t);
                r.r = n["!row"];
                var o = [r, t.read_shift(1), "b"];
                if (n.cellFormula) {
                  t.l += 2;
                  var a = Fa(t, i - t.l, n);
                  o[3] = Pa(a, 0, r, n.supbooks, n);
                } else t.l = i;
                return o;
              },
            },
            11: {
              n: "BrtFmlaError",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = un(t);
                r.r = n["!row"];
                var o = [r, t.read_shift(1), "e"];
                if (n.cellFormula) {
                  t.l += 2;
                  var a = Fa(t, i - t.l, n);
                  o[3] = Pa(a, 0, r, n.supbooks, n);
                } else t.l = i;
                return o;
              },
            },
            16: {
              n: "BrtFRTArchID$",
              f: function (t, e) {
                var n = {};
                return (
                  t.read_shift(4),
                  (n.ArchID = t.read_shift(4)),
                  (t.l += e - 8),
                  n
                );
              },
            },
            19: { n: "BrtSSTItem", f: cn },
            20: { n: "BrtPCDIMissing" },
            21: { n: "BrtPCDINumber" },
            22: { n: "BrtPCDIBoolean" },
            23: { n: "BrtPCDIError" },
            24: { n: "BrtPCDIString" },
            25: { n: "BrtPCDIDatetime" },
            26: { n: "BrtPCDIIndex" },
            27: { n: "BrtPCDIAMissing" },
            28: { n: "BrtPCDIANumber" },
            29: { n: "BrtPCDIABoolean" },
            30: { n: "BrtPCDIAError" },
            31: { n: "BrtPCDIAString" },
            32: { n: "BrtPCDIADatetime" },
            33: { n: "BrtPCRRecord" },
            34: { n: "BrtPCRRecordDt" },
            35: { n: "BrtFRTBegin" },
            36: { n: "BrtFRTEnd" },
            37: { n: "BrtACBegin" },
            38: { n: "BrtACEnd" },
            39: {
              n: "BrtName",
              f: function (t, e, n) {
                var i = t.l + e;
                (t.l += 4), (t.l += 1);
                var r = t.read_shift(4),
                  o = gn(t),
                  a = $a(t, 0, n),
                  s = bn(t);
                t.l = i;
                var l = { Name: o, Ptg: a };
                return r < 268435455 && (l.Sheet = r), s && (l.Comment = s), l;
              },
            },
            40: { n: "BrtIndexRowBlock" },
            42: { n: "BrtIndexBlock" },
            43: {
              n: "BrtFont",
              f: function (t, e, n) {
                var i = {};
                i.sz = t.read_shift(2) / 20;
                var r = (function (t) {
                  var e = t.read_shift(1);
                  return (
                    t.l++,
                    {
                      fItalic: 2 & e,
                      fStrikeout: 8 & e,
                      fOutline: 16 & e,
                      fShadow: 32 & e,
                      fCondense: 64 & e,
                      fExtend: 128 & e,
                    }
                  );
                })(t);
                switch (
                  (r.fCondense && (i.condense = 1),
                  r.fExtend && (i.extend = 1),
                  r.fShadow && (i.shadow = 1),
                  r.fOutline && (i.outline = 1),
                  r.fStrikeout && (i.strike = 1),
                  r.fItalic && (i.italic = 1),
                  700 === t.read_shift(2) && (i.bold = 1),
                  t.read_shift(2))
                ) {
                  case 1:
                    i.vertAlign = "superscript";
                    break;
                  case 2:
                    i.vertAlign = "subscript";
                }
                var o = t.read_shift(1);
                0 != o && (i.underline = o);
                var a = t.read_shift(1);
                a > 0 && (i.family = a);
                var s = t.read_shift(1);
                switch (
                  (s > 0 && (i.charset = s),
                  t.l++,
                  (i.color = (function (t) {
                    var e = {},
                      n = t.read_shift(1) >>> 1,
                      i = t.read_shift(1),
                      r = t.read_shift(2, "i"),
                      o = t.read_shift(1),
                      a = t.read_shift(1),
                      s = t.read_shift(1);
                    switch ((t.l++, n)) {
                      case 0:
                        e.auto = 1;
                        break;
                      case 1:
                        e.index = i;
                        var l = Wn[i];
                        l && (e.rgb = io(l));
                        break;
                      case 2:
                        e.rgb = io([o, a, s]);
                        break;
                      case 3:
                        e.theme = i;
                    }
                    return (
                      0 != r && (e.tint = r > 0 ? r / 32767 : r / 32768), e
                    );
                  })(t)),
                  t.read_shift(1))
                ) {
                  case 1:
                    i.scheme = "major";
                    break;
                  case 2:
                    i.scheme = "minor";
                }
                return (i.name = an(t)), i;
              },
            },
            44: {
              n: "BrtFmt",
              f: function (t, e) {
                return [t.read_shift(2), an(t)];
              },
            },
            45: { n: "BrtFill", f: ko },
            46: { n: "BrtBorder", f: Lo },
            47: {
              n: "BrtXF",
              f: function (t, e) {
                var n = t.l + e,
                  i = t.read_shift(2),
                  r = t.read_shift(2);
                return (t.l = n), { ixfe: i, numFmtId: r };
              },
            },
            48: { n: "BrtStyle" },
            49: { n: "BrtCellMeta" },
            50: { n: "BrtValueMeta" },
            51: { n: "BrtMdb" },
            52: { n: "BrtBeginFmd" },
            53: { n: "BrtEndFmd" },
            54: { n: "BrtBeginMdx" },
            55: { n: "BrtEndMdx" },
            56: { n: "BrtBeginMdxTuple" },
            57: { n: "BrtEndMdxTuple" },
            58: { n: "BrtMdxMbrIstr" },
            59: { n: "BrtStr" },
            60: { n: "BrtColInfo", f: yr },
            62: { n: "BrtCellRString" },
            63: {
              n: "BrtCalcChainItem$",
              f: function (t) {
                var e = {};
                e.i = t.read_shift(4);
                var n = {};
                (n.r = t.read_shift(4)), (n.c = t.read_shift(4)), (e.r = Ke(n));
                var i = t.read_shift(1);
                return 2 & i && (e.l = "1"), 8 & i && (e.a = "1"), e;
              },
            },
            64: { n: "BrtDVal" },
            65: { n: "BrtSxvcellNum" },
            66: { n: "BrtSxvcellStr" },
            67: { n: "BrtSxvcellBool" },
            68: { n: "BrtSxvcellErr" },
            69: { n: "BrtSxvcellDate" },
            70: { n: "BrtSxvcellNil" },
            128: { n: "BrtFileVersion" },
            129: { n: "BrtBeginSheet" },
            130: { n: "BrtEndSheet" },
            131: { n: "BrtBeginBook", f: je, p: 0 },
            132: { n: "BrtEndBook" },
            133: { n: "BrtBeginWsViews" },
            134: { n: "BrtEndWsViews" },
            135: { n: "BrtBeginBookViews" },
            136: { n: "BrtEndBookViews" },
            137: {
              n: "BrtBeginWsView",
              f: function (t) {
                var e = t.read_shift(2);
                return (t.l += 28), { RTL: 32 & e };
              },
            },
            138: { n: "BrtEndWsView" },
            139: { n: "BrtBeginCsViews" },
            140: { n: "BrtEndCsViews" },
            141: { n: "BrtBeginCsView" },
            142: { n: "BrtEndCsView" },
            143: { n: "BrtBeginBundleShs" },
            144: { n: "BrtEndBundleShs" },
            145: { n: "BrtBeginSheetData" },
            146: { n: "BrtEndSheetData" },
            147: {
              n: "BrtWsProp",
              f: function (t, e) {
                var n = {};
                return (t.l += 19), (n.name = hn(t, e - 19)), n;
              },
            },
            148: { n: "BrtWsDim", f: Ss, p: 16 },
            151: { n: "BrtPane" },
            152: { n: "BrtSel" },
            153: {
              n: "BrtWbProp",
              f: function (t, e) {
                var n = {},
                  i = t.read_shift(4);
                n.defaultThemeVersion = t.read_shift(4);
                var r = e > 8 ? an(t) : "";
                return (
                  r.length > 0 && (n.CodeName = r),
                  (n.autoCompressPictures = !!(65536 & i)),
                  (n.backupFile = !!(64 & i)),
                  (n.checkCompatibility = !!(4096 & i)),
                  (n.date1904 = !!(1 & i)),
                  (n.filterPrivacy = !!(8 & i)),
                  (n.hidePivotFieldList = !!(1024 & i)),
                  (n.promptedSolutions = !!(16 & i)),
                  (n.publishItems = !!(2048 & i)),
                  (n.refreshAllConnections = !!(262144 & i)),
                  (n.saveExternalLinkValues = !!(128 & i)),
                  (n.showBorderUnselectedTables = !!(4 & i)),
                  (n.showInkAnnotation = !!(32 & i)),
                  (n.showObjects = ["all", "placeholders", "none"][
                    (i >> 13) & 3
                  ]),
                  (n.showPivotChartFilter = !!(32768 & i)),
                  (n.updateLinks = ["userSet", "never", "always"][
                    (i >> 8) & 3
                  ]),
                  n
                );
              },
            },
            154: { n: "BrtWbFactoid" },
            155: { n: "BrtFileRecover" },
            156: {
              n: "BrtBundleSh",
              f: function (t, e) {
                var n = {};
                return (
                  (n.Hidden = t.read_shift(4)),
                  (n.iTabID = t.read_shift(4)),
                  (n.strRelID = vn(t, e - 8)),
                  (n.name = an(t)),
                  n
                );
              },
            },
            157: { n: "BrtCalcProp" },
            158: { n: "BrtBookView" },
            159: {
              n: "BrtBeginSst",
              f: function (t) {
                return [t.read_shift(4), t.read_shift(4)];
              },
            },
            160: { n: "BrtEndSst" },
            161: { n: "BrtBeginAFilter", f: On },
            162: { n: "BrtEndAFilter" },
            163: { n: "BrtBeginFilterColumn" },
            164: { n: "BrtEndFilterColumn" },
            165: { n: "BrtBeginFilters" },
            166: { n: "BrtEndFilters" },
            167: { n: "BrtFilter" },
            168: { n: "BrtColorFilter" },
            169: { n: "BrtIconFilter" },
            170: { n: "BrtTop10Filter" },
            171: { n: "BrtDynamicFilter" },
            172: { n: "BrtBeginCustomFilters" },
            173: { n: "BrtEndCustomFilters" },
            174: { n: "BrtCustomFilter" },
            175: { n: "BrtAFilterDateGroupItem" },
            176: { n: "BrtMergeCell", f: Ds },
            177: { n: "BrtBeginMergeCells" },
            178: { n: "BrtEndMergeCells" },
            179: { n: "BrtBeginPivotCacheDef" },
            180: { n: "BrtEndPivotCacheDef" },
            181: { n: "BrtBeginPCDFields" },
            182: { n: "BrtEndPCDFields" },
            183: { n: "BrtBeginPCDField" },
            184: { n: "BrtEndPCDField" },
            185: { n: "BrtBeginPCDSource" },
            186: { n: "BrtEndPCDSource" },
            187: { n: "BrtBeginPCDSRange" },
            188: { n: "BrtEndPCDSRange" },
            189: { n: "BrtBeginPCDFAtbl" },
            190: { n: "BrtEndPCDFAtbl" },
            191: { n: "BrtBeginPCDIRun" },
            192: { n: "BrtEndPCDIRun" },
            193: { n: "BrtBeginPivotCacheRecords" },
            194: { n: "BrtEndPivotCacheRecords" },
            195: { n: "BrtBeginPCDHierarchies" },
            196: { n: "BrtEndPCDHierarchies" },
            197: { n: "BrtBeginPCDHierarchy" },
            198: { n: "BrtEndPCDHierarchy" },
            199: { n: "BrtBeginPCDHFieldsUsage" },
            200: { n: "BrtEndPCDHFieldsUsage" },
            201: { n: "BrtBeginExtConnection" },
            202: { n: "BrtEndExtConnection" },
            203: { n: "BrtBeginECDbProps" },
            204: { n: "BrtEndECDbProps" },
            205: { n: "BrtBeginECOlapProps" },
            206: { n: "BrtEndECOlapProps" },
            207: { n: "BrtBeginPCDSConsol" },
            208: { n: "BrtEndPCDSConsol" },
            209: { n: "BrtBeginPCDSCPages" },
            210: { n: "BrtEndPCDSCPages" },
            211: { n: "BrtBeginPCDSCPage" },
            212: { n: "BrtEndPCDSCPage" },
            213: { n: "BrtBeginPCDSCPItem" },
            214: { n: "BrtEndPCDSCPItem" },
            215: { n: "BrtBeginPCDSCSets" },
            216: { n: "BrtEndPCDSCSets" },
            217: { n: "BrtBeginPCDSCSet" },
            218: { n: "BrtEndPCDSCSet" },
            219: { n: "BrtBeginPCDFGroup" },
            220: { n: "BrtEndPCDFGroup" },
            221: { n: "BrtBeginPCDFGItems" },
            222: { n: "BrtEndPCDFGItems" },
            223: { n: "BrtBeginPCDFGRange" },
            224: { n: "BrtEndPCDFGRange" },
            225: { n: "BrtBeginPCDFGDiscrete" },
            226: { n: "BrtEndPCDFGDiscrete" },
            227: { n: "BrtBeginPCDSDTupleCache" },
            228: { n: "BrtEndPCDSDTupleCache" },
            229: { n: "BrtBeginPCDSDTCEntries" },
            230: { n: "BrtEndPCDSDTCEntries" },
            231: { n: "BrtBeginPCDSDTCEMembers" },
            232: { n: "BrtEndPCDSDTCEMembers" },
            233: { n: "BrtBeginPCDSDTCEMember" },
            234: { n: "BrtEndPCDSDTCEMember" },
            235: { n: "BrtBeginPCDSDTCQueries" },
            236: { n: "BrtEndPCDSDTCQueries" },
            237: { n: "BrtBeginPCDSDTCQuery" },
            238: { n: "BrtEndPCDSDTCQuery" },
            239: { n: "BrtBeginPCDSDTCSets" },
            240: { n: "BrtEndPCDSDTCSets" },
            241: { n: "BrtBeginPCDSDTCSet" },
            242: { n: "BrtEndPCDSDTCSet" },
            243: { n: "BrtBeginPCDCalcItems" },
            244: { n: "BrtEndPCDCalcItems" },
            245: { n: "BrtBeginPCDCalcItem" },
            246: { n: "BrtEndPCDCalcItem" },
            247: { n: "BrtBeginPRule" },
            248: { n: "BrtEndPRule" },
            249: { n: "BrtBeginPRFilters" },
            250: { n: "BrtEndPRFilters" },
            251: { n: "BrtBeginPRFilter" },
            252: { n: "BrtEndPRFilter" },
            253: { n: "BrtBeginPNames" },
            254: { n: "BrtEndPNames" },
            255: { n: "BrtBeginPName" },
            256: { n: "BrtEndPName" },
            257: { n: "BrtBeginPNPairs" },
            258: { n: "BrtEndPNPairs" },
            259: { n: "BrtBeginPNPair" },
            260: { n: "BrtEndPNPair" },
            261: { n: "BrtBeginECWebProps" },
            262: { n: "BrtEndECWebProps" },
            263: { n: "BrtBeginEcWpTables" },
            264: { n: "BrtEndECWPTables" },
            265: { n: "BrtBeginECParams" },
            266: { n: "BrtEndECParams" },
            267: { n: "BrtBeginECParam" },
            268: { n: "BrtEndECParam" },
            269: { n: "BrtBeginPCDKPIs" },
            270: { n: "BrtEndPCDKPIs" },
            271: { n: "BrtBeginPCDKPI" },
            272: { n: "BrtEndPCDKPI" },
            273: { n: "BrtBeginDims" },
            274: { n: "BrtEndDims" },
            275: { n: "BrtBeginDim" },
            276: { n: "BrtEndDim" },
            277: { n: "BrtIndexPartEnd" },
            278: { n: "BrtBeginStyleSheet" },
            279: { n: "BrtEndStyleSheet" },
            280: { n: "BrtBeginSXView" },
            281: { n: "BrtEndSXVI" },
            282: { n: "BrtBeginSXVI" },
            283: { n: "BrtBeginSXVIs" },
            284: { n: "BrtEndSXVIs" },
            285: { n: "BrtBeginSXVD" },
            286: { n: "BrtEndSXVD" },
            287: { n: "BrtBeginSXVDs" },
            288: { n: "BrtEndSXVDs" },
            289: { n: "BrtBeginSXPI" },
            290: { n: "BrtEndSXPI" },
            291: { n: "BrtBeginSXPIs" },
            292: { n: "BrtEndSXPIs" },
            293: { n: "BrtBeginSXDI" },
            294: { n: "BrtEndSXDI" },
            295: { n: "BrtBeginSXDIs" },
            296: { n: "BrtEndSXDIs" },
            297: { n: "BrtBeginSXLI" },
            298: { n: "BrtEndSXLI" },
            299: { n: "BrtBeginSXLIRws" },
            300: { n: "BrtEndSXLIRws" },
            301: { n: "BrtBeginSXLICols" },
            302: { n: "BrtEndSXLICols" },
            303: { n: "BrtBeginSXFormat" },
            304: { n: "BrtEndSXFormat" },
            305: { n: "BrtBeginSXFormats" },
            306: { n: "BrtEndSxFormats" },
            307: { n: "BrtBeginSxSelect" },
            308: { n: "BrtEndSxSelect" },
            309: { n: "BrtBeginISXVDRws" },
            310: { n: "BrtEndISXVDRws" },
            311: { n: "BrtBeginISXVDCols" },
            312: { n: "BrtEndISXVDCols" },
            313: { n: "BrtEndSXLocation" },
            314: { n: "BrtBeginSXLocation" },
            315: { n: "BrtEndSXView" },
            316: { n: "BrtBeginSXTHs" },
            317: { n: "BrtEndSXTHs" },
            318: { n: "BrtBeginSXTH" },
            319: { n: "BrtEndSXTH" },
            320: { n: "BrtBeginISXTHRws" },
            321: { n: "BrtEndISXTHRws" },
            322: { n: "BrtBeginISXTHCols" },
            323: { n: "BrtEndISXTHCols" },
            324: { n: "BrtBeginSXTDMPS" },
            325: { n: "BrtEndSXTDMPs" },
            326: { n: "BrtBeginSXTDMP" },
            327: { n: "BrtEndSXTDMP" },
            328: { n: "BrtBeginSXTHItems" },
            329: { n: "BrtEndSXTHItems" },
            330: { n: "BrtBeginSXTHItem" },
            331: { n: "BrtEndSXTHItem" },
            332: { n: "BrtBeginMetadata" },
            333: { n: "BrtEndMetadata" },
            334: { n: "BrtBeginEsmdtinfo" },
            335: { n: "BrtMdtinfo" },
            336: { n: "BrtEndEsmdtinfo" },
            337: { n: "BrtBeginEsmdb" },
            338: { n: "BrtEndEsmdb" },
            339: { n: "BrtBeginEsfmd" },
            340: { n: "BrtEndEsfmd" },
            341: { n: "BrtBeginSingleCells" },
            342: { n: "BrtEndSingleCells" },
            343: { n: "BrtBeginList" },
            344: { n: "BrtEndList" },
            345: { n: "BrtBeginListCols" },
            346: { n: "BrtEndListCols" },
            347: { n: "BrtBeginListCol" },
            348: { n: "BrtEndListCol" },
            349: { n: "BrtBeginListXmlCPr" },
            350: { n: "BrtEndListXmlCPr" },
            351: { n: "BrtListCCFmla" },
            352: { n: "BrtListTrFmla" },
            353: { n: "BrtBeginExternals" },
            354: { n: "BrtEndExternals" },
            355: { n: "BrtSupBookSrc", f: vn },
            357: { n: "BrtSupSelf" },
            358: { n: "BrtSupSame" },
            359: { n: "BrtSupTabs" },
            360: { n: "BrtBeginSupBook" },
            361: { n: "BrtPlaceholderName" },
            362: { n: "BrtExternSheet", f: br },
            363: { n: "BrtExternTableStart" },
            364: { n: "BrtExternTableEnd" },
            366: { n: "BrtExternRowHdr" },
            367: { n: "BrtExternCellBlank" },
            368: { n: "BrtExternCellReal" },
            369: { n: "BrtExternCellBool" },
            370: { n: "BrtExternCellError" },
            371: { n: "BrtExternCellString" },
            372: { n: "BrtBeginEsmdx" },
            373: { n: "BrtEndEsmdx" },
            374: { n: "BrtBeginMdxSet" },
            375: { n: "BrtEndMdxSet" },
            376: { n: "BrtBeginMdxMbrProp" },
            377: { n: "BrtEndMdxMbrProp" },
            378: { n: "BrtBeginMdxKPI" },
            379: { n: "BrtEndMdxKPI" },
            380: { n: "BrtBeginEsstr" },
            381: { n: "BrtEndEsstr" },
            382: { n: "BrtBeginPRFItem" },
            383: { n: "BrtEndPRFItem" },
            384: { n: "BrtBeginPivotCacheIDs" },
            385: { n: "BrtEndPivotCacheIDs" },
            386: { n: "BrtBeginPivotCacheID" },
            387: { n: "BrtEndPivotCacheID" },
            388: { n: "BrtBeginISXVIs" },
            389: { n: "BrtEndISXVIs" },
            390: { n: "BrtBeginColInfos" },
            391: { n: "BrtEndColInfos" },
            392: { n: "BrtBeginRwBrk" },
            393: { n: "BrtEndRwBrk" },
            394: { n: "BrtBeginColBrk" },
            395: { n: "BrtEndColBrk" },
            396: { n: "BrtBrk" },
            397: { n: "BrtUserBookView" },
            398: { n: "BrtInfo" },
            399: { n: "BrtCUsr" },
            400: { n: "BrtUsr" },
            401: { n: "BrtBeginUsers" },
            403: { n: "BrtEOF" },
            404: { n: "BrtUCR" },
            405: { n: "BrtRRInsDel" },
            406: { n: "BrtRREndInsDel" },
            407: { n: "BrtRRMove" },
            408: { n: "BrtRREndMove" },
            409: { n: "BrtRRChgCell" },
            410: { n: "BrtRREndChgCell" },
            411: { n: "BrtRRHeader" },
            412: { n: "BrtRRUserView" },
            413: { n: "BrtRRRenSheet" },
            414: { n: "BrtRRInsertSh" },
            415: { n: "BrtRRDefName" },
            416: { n: "BrtRRNote" },
            417: { n: "BrtRRConflict" },
            418: { n: "BrtRRTQSIF" },
            419: { n: "BrtRRFormat" },
            420: { n: "BrtRREndFormat" },
            421: { n: "BrtRRAutoFmt" },
            422: { n: "BrtBeginUserShViews" },
            423: { n: "BrtBeginUserShView" },
            424: { n: "BrtEndUserShView" },
            425: { n: "BrtEndUserShViews" },
            426: {
              n: "BrtArrFmla",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = Mn(t),
                  o = t.read_shift(1),
                  a = [r];
                if (((a[2] = o), n.cellFormula)) {
                  var s = Ba(t, i - t.l, n);
                  a[1] = s;
                } else t.l = i;
                return a;
              },
            },
            427: {
              n: "BrtShrFmla",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = [On(t, 16)];
                if (n.cellFormula) {
                  var o = Ha(t, i - t.l, n);
                  (r[1] = o), (t.l = i);
                } else t.l = i;
                return r;
              },
            },
            428: { n: "BrtTable" },
            429: { n: "BrtBeginExtConnections" },
            430: { n: "BrtEndExtConnections" },
            431: { n: "BrtBeginPCDCalcMems" },
            432: { n: "BrtEndPCDCalcMems" },
            433: { n: "BrtBeginPCDCalcMem" },
            434: { n: "BrtEndPCDCalcMem" },
            435: { n: "BrtBeginPCDHGLevels" },
            436: { n: "BrtEndPCDHGLevels" },
            437: { n: "BrtBeginPCDHGLevel" },
            438: { n: "BrtEndPCDHGLevel" },
            439: { n: "BrtBeginPCDHGLGroups" },
            440: { n: "BrtEndPCDHGLGroups" },
            441: { n: "BrtBeginPCDHGLGroup" },
            442: { n: "BrtEndPCDHGLGroup" },
            443: { n: "BrtBeginPCDHGLGMembers" },
            444: { n: "BrtEndPCDHGLGMembers" },
            445: { n: "BrtBeginPCDHGLGMember" },
            446: { n: "BrtEndPCDHGLGMember" },
            447: { n: "BrtBeginQSI" },
            448: { n: "BrtEndQSI" },
            449: { n: "BrtBeginQSIR" },
            450: { n: "BrtEndQSIR" },
            451: { n: "BrtBeginDeletedNames" },
            452: { n: "BrtEndDeletedNames" },
            453: { n: "BrtBeginDeletedName" },
            454: { n: "BrtEndDeletedName" },
            455: { n: "BrtBeginQSIFs" },
            456: { n: "BrtEndQSIFs" },
            457: { n: "BrtBeginQSIF" },
            458: { n: "BrtEndQSIF" },
            459: { n: "BrtBeginAutoSortScope" },
            460: { n: "BrtEndAutoSortScope" },
            461: { n: "BrtBeginConditionalFormatting" },
            462: { n: "BrtEndConditionalFormatting" },
            463: { n: "BrtBeginCFRule" },
            464: { n: "BrtEndCFRule" },
            465: { n: "BrtBeginIconSet" },
            466: { n: "BrtEndIconSet" },
            467: { n: "BrtBeginDatabar" },
            468: { n: "BrtEndDatabar" },
            469: { n: "BrtBeginColorScale" },
            470: { n: "BrtEndColorScale" },
            471: { n: "BrtCFVO" },
            472: { n: "BrtExternValueMeta" },
            473: { n: "BrtBeginColorPalette" },
            474: { n: "BrtEndColorPalette" },
            475: { n: "BrtIndexedColor" },
            476: {
              n: "BrtMargins",
              f: function (t) {
                var e = {};
                return (
                  qs.forEach(function (n) {
                    e[n] = An(t);
                  }),
                  e
                );
              },
            },
            477: { n: "BrtPrintOptions" },
            478: { n: "BrtPageSetup" },
            479: { n: "BrtBeginHeaderFooter" },
            480: { n: "BrtEndHeaderFooter" },
            481: { n: "BrtBeginSXCrtFormat" },
            482: { n: "BrtEndSXCrtFormat" },
            483: { n: "BrtBeginSXCrtFormats" },
            484: { n: "BrtEndSXCrtFormats" },
            485: { n: "BrtWsFmtInfo", f: function () {} },
            486: { n: "BrtBeginMgs" },
            487: { n: "BrtEndMGs" },
            488: { n: "BrtBeginMGMaps" },
            489: { n: "BrtEndMGMaps" },
            490: { n: "BrtBeginMG" },
            491: { n: "BrtEndMG" },
            492: { n: "BrtBeginMap" },
            493: { n: "BrtEndMap" },
            494: {
              n: "BrtHLink",
              f: function (t, e) {
                var n = t.l + e,
                  i = On(t, 16),
                  r = bn(t),
                  o = an(t),
                  a = an(t),
                  s = an(t);
                t.l = n;
                var l = { rfx: i, relId: r, loc: o, display: s };
                return a && (l.Tooltip = a), l;
              },
            },
            495: { n: "BrtBeginDCon" },
            496: { n: "BrtEndDCon" },
            497: { n: "BrtBeginDRefs" },
            498: { n: "BrtEndDRefs" },
            499: { n: "BrtDRef" },
            500: { n: "BrtBeginScenMan" },
            501: { n: "BrtEndScenMan" },
            502: { n: "BrtBeginSct" },
            503: { n: "BrtEndSct" },
            504: { n: "BrtSlc" },
            505: { n: "BrtBeginDXFs" },
            506: { n: "BrtEndDXFs" },
            507: { n: "BrtDXF" },
            508: { n: "BrtBeginTableStyles" },
            509: { n: "BrtEndTableStyles" },
            510: { n: "BrtBeginTableStyle" },
            511: { n: "BrtEndTableStyle" },
            512: { n: "BrtTableStyleElement" },
            513: { n: "BrtTableStyleClient" },
            514: { n: "BrtBeginVolDeps" },
            515: { n: "BrtEndVolDeps" },
            516: { n: "BrtBeginVolType" },
            517: { n: "BrtEndVolType" },
            518: { n: "BrtBeginVolMain" },
            519: { n: "BrtEndVolMain" },
            520: { n: "BrtBeginVolTopic" },
            521: { n: "BrtEndVolTopic" },
            522: { n: "BrtVolSubtopic" },
            523: { n: "BrtVolRef" },
            524: { n: "BrtVolNum" },
            525: { n: "BrtVolErr" },
            526: { n: "BrtVolStr" },
            527: { n: "BrtVolBool" },
            528: { n: "BrtBeginCalcChain$" },
            529: { n: "BrtEndCalcChain$" },
            530: { n: "BrtBeginSortState" },
            531: { n: "BrtEndSortState" },
            532: { n: "BrtBeginSortCond" },
            533: { n: "BrtEndSortCond" },
            534: { n: "BrtBookProtection" },
            535: { n: "BrtSheetProtection" },
            536: { n: "BrtRangeProtection" },
            537: { n: "BrtPhoneticInfo" },
            538: { n: "BrtBeginECTxtWiz" },
            539: { n: "BrtEndECTxtWiz" },
            540: { n: "BrtBeginECTWFldInfoLst" },
            541: { n: "BrtEndECTWFldInfoLst" },
            542: { n: "BrtBeginECTwFldInfo" },
            548: { n: "BrtFileSharing" },
            549: { n: "BrtOleSize" },
            550: { n: "BrtDrawing", f: vn },
            551: { n: "BrtLegacyDrawing" },
            552: { n: "BrtLegacyDrawingHF" },
            553: { n: "BrtWebOpt" },
            554: { n: "BrtBeginWebPubItems" },
            555: { n: "BrtEndWebPubItems" },
            556: { n: "BrtBeginWebPubItem" },
            557: { n: "BrtEndWebPubItem" },
            558: { n: "BrtBeginSXCondFmt" },
            559: { n: "BrtEndSXCondFmt" },
            560: { n: "BrtBeginSXCondFmts" },
            561: { n: "BrtEndSXCondFmts" },
            562: { n: "BrtBkHim" },
            564: { n: "BrtColor" },
            565: { n: "BrtBeginIndexedColors" },
            566: { n: "BrtEndIndexedColors" },
            569: { n: "BrtBeginMRUColors" },
            570: { n: "BrtEndMRUColors" },
            572: { n: "BrtMRUColor" },
            573: { n: "BrtBeginDVals" },
            574: { n: "BrtEndDVals" },
            577: { n: "BrtSupNameStart" },
            578: { n: "BrtSupNameValueStart" },
            579: { n: "BrtSupNameValueEnd" },
            580: { n: "BrtSupNameNum" },
            581: { n: "BrtSupNameErr" },
            582: { n: "BrtSupNameSt" },
            583: { n: "BrtSupNameNil" },
            584: { n: "BrtSupNameBool" },
            585: { n: "BrtSupNameFmla" },
            586: { n: "BrtSupNameBits" },
            587: { n: "BrtSupNameEnd" },
            588: { n: "BrtEndSupBook" },
            589: { n: "BrtCellSmartTagProperty" },
            590: { n: "BrtBeginCellSmartTag" },
            591: { n: "BrtEndCellSmartTag" },
            592: { n: "BrtBeginCellSmartTags" },
            593: { n: "BrtEndCellSmartTags" },
            594: { n: "BrtBeginSmartTags" },
            595: { n: "BrtEndSmartTags" },
            596: { n: "BrtSmartTagType" },
            597: { n: "BrtBeginSmartTagTypes" },
            598: { n: "BrtEndSmartTagTypes" },
            599: { n: "BrtBeginSXFilters" },
            600: { n: "BrtEndSXFilters" },
            601: { n: "BrtBeginSXFILTER" },
            602: { n: "BrtEndSXFilter" },
            603: { n: "BrtBeginFills" },
            604: { n: "BrtEndFills" },
            605: { n: "BrtBeginCellWatches" },
            606: { n: "BrtEndCellWatches" },
            607: { n: "BrtCellWatch" },
            608: { n: "BrtBeginCRErrs" },
            609: { n: "BrtEndCRErrs" },
            610: { n: "BrtCrashRecErr" },
            611: { n: "BrtBeginFonts" },
            612: { n: "BrtEndFonts" },
            613: { n: "BrtBeginBorders" },
            614: { n: "BrtEndBorders" },
            615: { n: "BrtBeginFmts" },
            616: { n: "BrtEndFmts" },
            617: { n: "BrtBeginCellXFs" },
            618: { n: "BrtEndCellXFs" },
            619: { n: "BrtBeginStyles" },
            620: { n: "BrtEndStyles" },
            625: { n: "BrtBigName" },
            626: { n: "BrtBeginCellStyleXFs" },
            627: { n: "BrtEndCellStyleXFs" },
            628: { n: "BrtBeginComments" },
            629: { n: "BrtEndComments" },
            630: { n: "BrtBeginCommentAuthors" },
            631: { n: "BrtEndCommentAuthors" },
            632: { n: "BrtCommentAuthor", f: Go },
            633: { n: "BrtBeginCommentList" },
            634: { n: "BrtEndCommentList" },
            635: {
              n: "BrtBeginComment",
              f: function (t) {
                var e = {};
                e.iauthor = t.read_shift(4);
                var n = On(t, 16);
                return (e.rfx = n.s), (e.ref = Ke(n.s)), (t.l += 16), e;
              },
            },
            636: { n: "BrtEndComment" },
            637: { n: "BrtCommentText", f: dn },
            638: { n: "BrtBeginOleObjects" },
            639: { n: "BrtOleObject" },
            640: { n: "BrtEndOleObjects" },
            641: { n: "BrtBeginSxrules" },
            642: { n: "BrtEndSxRules" },
            643: { n: "BrtBeginActiveXControls" },
            644: { n: "BrtActiveX" },
            645: { n: "BrtEndActiveXControls" },
            646: { n: "BrtBeginPCDSDTCEMembersSortBy" },
            648: { n: "BrtBeginCellIgnoreECs" },
            649: { n: "BrtCellIgnoreEC" },
            650: { n: "BrtEndCellIgnoreECs" },
            651: {
              n: "BrtCsProp",
              f: function (t, e) {
                return (t.l += 10), { name: an(t) };
              },
            },
            652: { n: "BrtCsPageSetup" },
            653: { n: "BrtBeginUserCsViews" },
            654: { n: "BrtEndUserCsViews" },
            655: { n: "BrtBeginUserCsView" },
            656: { n: "BrtEndUserCsView" },
            657: { n: "BrtBeginPcdSFCIEntries" },
            658: { n: "BrtEndPCDSFCIEntries" },
            659: { n: "BrtPCDSFCIEntry" },
            660: { n: "BrtBeginListParts" },
            661: { n: "BrtListPart" },
            662: { n: "BrtEndListParts" },
            663: { n: "BrtSheetCalcProp" },
            664: { n: "BrtBeginFnGroup" },
            665: { n: "BrtFnGroup" },
            666: { n: "BrtEndFnGroup" },
            667: { n: "BrtSupAddin" },
            668: { n: "BrtSXTDMPOrder" },
            669: { n: "BrtCsProtection" },
            671: { n: "BrtBeginWsSortMap" },
            672: { n: "BrtEndWsSortMap" },
            673: { n: "BrtBeginRRSort" },
            674: { n: "BrtEndRRSort" },
            675: { n: "BrtRRSortItem" },
            676: { n: "BrtFileSharingIso" },
            677: { n: "BrtBookProtectionIso" },
            678: { n: "BrtSheetProtectionIso" },
            679: { n: "BrtCsProtectionIso" },
            680: { n: "BrtRangeProtectionIso" },
            1024: { n: "BrtRwDescent" },
            1025: { n: "BrtKnownFonts" },
            1026: { n: "BrtBeginSXTupleSet" },
            1027: { n: "BrtEndSXTupleSet" },
            1028: { n: "BrtBeginSXTupleSetHeader" },
            1029: { n: "BrtEndSXTupleSetHeader" },
            1030: { n: "BrtSXTupleSetHeaderItem" },
            1031: { n: "BrtBeginSXTupleSetData" },
            1032: { n: "BrtEndSXTupleSetData" },
            1033: { n: "BrtBeginSXTupleSetRow" },
            1034: { n: "BrtEndSXTupleSetRow" },
            1035: { n: "BrtSXTupleSetRowItem" },
            1036: { n: "BrtNameExt" },
            1037: { n: "BrtPCDH14" },
            1038: { n: "BrtBeginPCDCalcMem14" },
            1039: { n: "BrtEndPCDCalcMem14" },
            1040: { n: "BrtSXTH14" },
            1041: { n: "BrtBeginSparklineGroup" },
            1042: { n: "BrtEndSparklineGroup" },
            1043: { n: "BrtSparkline" },
            1044: { n: "BrtSXDI14" },
            1045: { n: "BrtWsFmtInfoEx14" },
            1046: { n: "BrtBeginConditionalFormatting14" },
            1047: { n: "BrtEndConditionalFormatting14" },
            1048: { n: "BrtBeginCFRule14" },
            1049: { n: "BrtEndCFRule14" },
            1050: { n: "BrtCFVO14" },
            1051: { n: "BrtBeginDatabar14" },
            1052: { n: "BrtBeginIconSet14" },
            1053: { n: "BrtDVal14" },
            1054: { n: "BrtBeginDVals14" },
            1055: { n: "BrtColor14" },
            1056: { n: "BrtBeginSparklines" },
            1057: { n: "BrtEndSparklines" },
            1058: { n: "BrtBeginSparklineGroups" },
            1059: { n: "BrtEndSparklineGroups" },
            1061: { n: "BrtSXVD14" },
            1062: { n: "BrtBeginSXView14" },
            1063: { n: "BrtEndSXView14" },
            1064: { n: "BrtBeginSXView16" },
            1065: { n: "BrtEndSXView16" },
            1066: { n: "BrtBeginPCD14" },
            1067: { n: "BrtEndPCD14" },
            1068: { n: "BrtBeginExtConn14" },
            1069: { n: "BrtEndExtConn14" },
            1070: { n: "BrtBeginSlicerCacheIDs" },
            1071: { n: "BrtEndSlicerCacheIDs" },
            1072: { n: "BrtBeginSlicerCacheID" },
            1073: { n: "BrtEndSlicerCacheID" },
            1075: { n: "BrtBeginSlicerCache" },
            1076: { n: "BrtEndSlicerCache" },
            1077: { n: "BrtBeginSlicerCacheDef" },
            1078: { n: "BrtEndSlicerCacheDef" },
            1079: { n: "BrtBeginSlicersEx" },
            1080: { n: "BrtEndSlicersEx" },
            1081: { n: "BrtBeginSlicerEx" },
            1082: { n: "BrtEndSlicerEx" },
            1083: { n: "BrtBeginSlicer" },
            1084: { n: "BrtEndSlicer" },
            1085: { n: "BrtSlicerCachePivotTables" },
            1086: { n: "BrtBeginSlicerCacheOlapImpl" },
            1087: { n: "BrtEndSlicerCacheOlapImpl" },
            1088: { n: "BrtBeginSlicerCacheLevelsData" },
            1089: { n: "BrtEndSlicerCacheLevelsData" },
            1090: { n: "BrtBeginSlicerCacheLevelData" },
            1091: { n: "BrtEndSlicerCacheLevelData" },
            1092: { n: "BrtBeginSlicerCacheSiRanges" },
            1093: { n: "BrtEndSlicerCacheSiRanges" },
            1094: { n: "BrtBeginSlicerCacheSiRange" },
            1095: { n: "BrtEndSlicerCacheSiRange" },
            1096: { n: "BrtSlicerCacheOlapItem" },
            1097: { n: "BrtBeginSlicerCacheSelections" },
            1098: { n: "BrtSlicerCacheSelection" },
            1099: { n: "BrtEndSlicerCacheSelections" },
            1100: { n: "BrtBeginSlicerCacheNative" },
            1101: { n: "BrtEndSlicerCacheNative" },
            1102: { n: "BrtSlicerCacheNativeItem" },
            1103: { n: "BrtRangeProtection14" },
            1104: { n: "BrtRangeProtectionIso14" },
            1105: { n: "BrtCellIgnoreEC14" },
            1111: { n: "BrtList14" },
            1112: { n: "BrtCFIcon" },
            1113: { n: "BrtBeginSlicerCachesPivotCacheIDs" },
            1114: { n: "BrtEndSlicerCachesPivotCacheIDs" },
            1115: { n: "BrtBeginSlicers" },
            1116: { n: "BrtEndSlicers" },
            1117: { n: "BrtWbProp14" },
            1118: { n: "BrtBeginSXEdit" },
            1119: { n: "BrtEndSXEdit" },
            1120: { n: "BrtBeginSXEdits" },
            1121: { n: "BrtEndSXEdits" },
            1122: { n: "BrtBeginSXChange" },
            1123: { n: "BrtEndSXChange" },
            1124: { n: "BrtBeginSXChanges" },
            1125: { n: "BrtEndSXChanges" },
            1126: { n: "BrtSXTupleItems" },
            1128: { n: "BrtBeginSlicerStyle" },
            1129: { n: "BrtEndSlicerStyle" },
            1130: { n: "BrtSlicerStyleElement" },
            1131: { n: "BrtBeginStyleSheetExt14" },
            1132: { n: "BrtEndStyleSheetExt14" },
            1133: { n: "BrtBeginSlicerCachesPivotCacheID" },
            1134: { n: "BrtEndSlicerCachesPivotCacheID" },
            1135: { n: "BrtBeginConditionalFormattings" },
            1136: { n: "BrtEndConditionalFormattings" },
            1137: { n: "BrtBeginPCDCalcMemExt" },
            1138: { n: "BrtEndPCDCalcMemExt" },
            1139: { n: "BrtBeginPCDCalcMemsExt" },
            1140: { n: "BrtEndPCDCalcMemsExt" },
            1141: { n: "BrtPCDField14" },
            1142: { n: "BrtBeginSlicerStyles" },
            1143: { n: "BrtEndSlicerStyles" },
            1144: { n: "BrtBeginSlicerStyleElements" },
            1145: { n: "BrtEndSlicerStyleElements" },
            1146: { n: "BrtCFRuleExt" },
            1147: { n: "BrtBeginSXCondFmt14" },
            1148: { n: "BrtEndSXCondFmt14" },
            1149: { n: "BrtBeginSXCondFmts14" },
            1150: { n: "BrtEndSXCondFmts14" },
            1152: { n: "BrtBeginSortCond14" },
            1153: { n: "BrtEndSortCond14" },
            1154: { n: "BrtEndDVals14" },
            1155: { n: "BrtEndIconSet14" },
            1156: { n: "BrtEndDatabar14" },
            1157: { n: "BrtBeginColorScale14" },
            1158: { n: "BrtEndColorScale14" },
            1159: { n: "BrtBeginSxrules14" },
            1160: { n: "BrtEndSxrules14" },
            1161: { n: "BrtBeginPRule14" },
            1162: { n: "BrtEndPRule14" },
            1163: { n: "BrtBeginPRFilters14" },
            1164: { n: "BrtEndPRFilters14" },
            1165: { n: "BrtBeginPRFilter14" },
            1166: { n: "BrtEndPRFilter14" },
            1167: { n: "BrtBeginPRFItem14" },
            1168: { n: "BrtEndPRFItem14" },
            1169: { n: "BrtBeginCellIgnoreECs14" },
            1170: { n: "BrtEndCellIgnoreECs14" },
            1171: { n: "BrtDxf14" },
            1172: { n: "BrtBeginDxF14s" },
            1173: { n: "BrtEndDxf14s" },
            1177: { n: "BrtFilter14" },
            1178: { n: "BrtBeginCustomFilters14" },
            1180: { n: "BrtCustomFilter14" },
            1181: { n: "BrtIconFilter14" },
            1182: { n: "BrtPivotCacheConnectionName" },
            2048: { n: "BrtBeginDecoupledPivotCacheIDs" },
            2049: { n: "BrtEndDecoupledPivotCacheIDs" },
            2050: { n: "BrtDecoupledPivotCacheID" },
            2051: { n: "BrtBeginPivotTableRefs" },
            2052: { n: "BrtEndPivotTableRefs" },
            2053: { n: "BrtPivotTableRef" },
            2054: { n: "BrtSlicerCacheBookPivotTables" },
            2055: { n: "BrtBeginSxvcells" },
            2056: { n: "BrtEndSxvcells" },
            2057: { n: "BrtBeginSxRow" },
            2058: { n: "BrtEndSxRow" },
            2060: { n: "BrtPcdCalcMem15" },
            2067: { n: "BrtQsi15" },
            2068: { n: "BrtBeginWebExtensions" },
            2069: { n: "BrtEndWebExtensions" },
            2070: { n: "BrtWebExtension" },
            2071: { n: "BrtAbsPath15" },
            2072: { n: "BrtBeginPivotTableUISettings" },
            2073: { n: "BrtEndPivotTableUISettings" },
            2075: { n: "BrtTableSlicerCacheIDs" },
            2076: { n: "BrtTableSlicerCacheID" },
            2077: { n: "BrtBeginTableSlicerCache" },
            2078: { n: "BrtEndTableSlicerCache" },
            2079: { n: "BrtSxFilter15" },
            2080: { n: "BrtBeginTimelineCachePivotCacheIDs" },
            2081: { n: "BrtEndTimelineCachePivotCacheIDs" },
            2082: { n: "BrtTimelineCachePivotCacheID" },
            2083: { n: "BrtBeginTimelineCacheIDs" },
            2084: { n: "BrtEndTimelineCacheIDs" },
            2085: { n: "BrtBeginTimelineCacheID" },
            2086: { n: "BrtEndTimelineCacheID" },
            2087: { n: "BrtBeginTimelinesEx" },
            2088: { n: "BrtEndTimelinesEx" },
            2089: { n: "BrtBeginTimelineEx" },
            2090: { n: "BrtEndTimelineEx" },
            2091: { n: "BrtWorkBookPr15" },
            2092: { n: "BrtPCDH15" },
            2093: { n: "BrtBeginTimelineStyle" },
            2094: { n: "BrtEndTimelineStyle" },
            2095: { n: "BrtTimelineStyleElement" },
            2096: { n: "BrtBeginTimelineStylesheetExt15" },
            2097: { n: "BrtEndTimelineStylesheetExt15" },
            2098: { n: "BrtBeginTimelineStyles" },
            2099: { n: "BrtEndTimelineStyles" },
            2100: { n: "BrtBeginTimelineStyleElements" },
            2101: { n: "BrtEndTimelineStyleElements" },
            2102: { n: "BrtDxf15" },
            2103: { n: "BrtBeginDxfs15" },
            2104: { n: "brtEndDxfs15" },
            2105: { n: "BrtSlicerCacheHideItemsWithNoData" },
            2106: { n: "BrtBeginItemUniqueNames" },
            2107: { n: "BrtEndItemUniqueNames" },
            2108: { n: "BrtItemUniqueName" },
            2109: { n: "BrtBeginExtConn15" },
            2110: { n: "BrtEndExtConn15" },
            2111: { n: "BrtBeginOledbPr15" },
            2112: { n: "BrtEndOledbPr15" },
            2113: { n: "BrtBeginDataFeedPr15" },
            2114: { n: "BrtEndDataFeedPr15" },
            2115: { n: "BrtTextPr15" },
            2116: { n: "BrtRangePr15" },
            2117: { n: "BrtDbCommand15" },
            2118: { n: "BrtBeginDbTables15" },
            2119: { n: "BrtEndDbTables15" },
            2120: { n: "BrtDbTable15" },
            2121: { n: "BrtBeginDataModel" },
            2122: { n: "BrtEndDataModel" },
            2123: { n: "BrtBeginModelTables" },
            2124: { n: "BrtEndModelTables" },
            2125: { n: "BrtModelTable" },
            2126: { n: "BrtBeginModelRelationships" },
            2127: { n: "BrtEndModelRelationships" },
            2128: { n: "BrtModelRelationship" },
            2129: { n: "BrtBeginECTxtWiz15" },
            2130: { n: "BrtEndECTxtWiz15" },
            2131: { n: "BrtBeginECTWFldInfoLst15" },
            2132: { n: "BrtEndECTWFldInfoLst15" },
            2133: { n: "BrtBeginECTWFldInfo15" },
            2134: { n: "BrtFieldListActiveItem" },
            2135: { n: "BrtPivotCacheIdVersion" },
            2136: { n: "BrtSXDI15" },
            2137: { n: "BrtBeginModelTimeGroupings" },
            2138: { n: "BrtEndModelTimeGroupings" },
            2139: { n: "BrtBeginModelTimeGrouping" },
            2140: { n: "BrtEndModelTimeGrouping" },
            2141: { n: "BrtModelTimeGroupingCalcCol" },
            3072: { n: "BrtUid" },
            3073: { n: "BrtRevisionPtr" },
            5095: { n: "BrtBeginCalcFeatures" },
            5096: { n: "BrtEndCalcFeatures" },
            5097: { n: "BrtCalcFeature" },
            65535: { n: "" },
          },
          xl = H(Al, "n"),
          zl = {
            3: {
              n: "BIFF2NUM",
              f: function (t) {
                var e = Yi(t);
                ++t.l;
                var n = An(t);
                return (e.t = "n"), (e.val = n), e;
              },
            },
            4: {
              n: "BIFF2STR",
              f: function (t, e, n) {
                var i = Yi(t);
                ++t.l;
                var r = Wi(t, 0, n);
                return (i.t = "str"), (i.val = r), i;
              },
            },
            6: { n: "Formula", f: Wa },
            9: { n: "BOF", f: nr },
            10: { n: "EOF", f: Si },
            12: { n: "CalcCount", f: Li },
            13: { n: "CalcMode", f: Li },
            14: { n: "CalcPrecision", f: Ti },
            15: { n: "CalcRefMode", f: Ti },
            16: { n: "CalcDelta", f: An },
            17: { n: "CalcIter", f: Ti },
            18: { n: "Protect", f: Ti },
            19: { n: "Password", f: Li },
            20: { n: "Header", f: ur },
            21: { n: "Footer", f: ur },
            23: { n: "ExternSheet", f: br },
            24: { n: "Lbl", f: fr },
            25: { n: "WinProtect", f: Ti },
            26: { n: "VerticalPageBreaks" },
            27: { n: "HorizontalPageBreaks" },
            28: {
              n: "Note",
              f: function (t, e, n) {
                return (function (t, e, n) {
                  if (!(n.biff < 8)) {
                    var i = t.read_shift(2),
                      r = t.read_shift(2),
                      o = t.read_shift(2),
                      a = t.read_shift(2),
                      s = Wi(t, 0, n);
                    return (
                      n.biff < 8 && t.read_shift(1), [{ r: i, c: r }, s, a, o]
                    );
                  }
                })(t, 0, n);
              },
            },
            29: { n: "Selection" },
            34: { n: "Date1904", f: Ti },
            35: { n: "ExternName", f: pr },
            38: { n: "LeftMargin", f: An },
            39: { n: "RightMargin", f: An },
            40: { n: "TopMargin", f: An },
            41: { n: "BottomMargin", f: An },
            42: { n: "PrintRowCol", f: Ti },
            43: { n: "PrintGrid", f: Ti },
            47: {
              n: "FilePass",
              f: function (t, e, n) {
                var i = { Type: n.biff >= 8 ? t.read_shift(2) : 0 };
                return (
                  i.Type
                    ? (function (t, e, n) {
                        var i = n || {};
                        (i.Info = t.read_shift(2)),
                          (t.l -= 2),
                          1 === i.Info
                            ? (i.Data = (function (t) {
                                var e = {},
                                  n = (e.EncryptionVersionInfo = $r(t, 4));
                                if (1 != n.Major || 1 != n.Minor)
                                  throw (
                                    "unrecognized version code " +
                                    n.Major +
                                    " : " +
                                    n.Minor
                                  );
                                return (
                                  (e.Salt = t.read_shift(16)),
                                  (e.EncryptedVerifier = t.read_shift(16)),
                                  (e.EncryptedVerifierHash = t.read_shift(16)),
                                  e
                                );
                              })(t))
                            : (i.Data = (function (t, e) {
                                var n = {},
                                  i = (n.EncryptionVersionInfo = $r(t, 4));
                                if (((e -= 4), 2 != i.Minor))
                                  throw new Error(
                                    "unrecognized minor version code: " +
                                      i.Minor
                                  );
                                if (i.Major > 4 || i.Major < 2)
                                  throw new Error(
                                    "unrecognized major version code: " +
                                      i.Major
                                  );
                                (n.Flags = t.read_shift(4)), (e -= 4);
                                var r = t.read_shift(4);
                                return (
                                  (e -= 4),
                                  (n.EncryptionHeader = Yr(t, r)),
                                  (e -= r),
                                  (n.EncryptionVerifier = Ur(t, e)),
                                  n
                                );
                              })(t, e));
                      })(t, e - 2, i)
                    : (function (t, e, n, i) {
                        var r = { key: Li(t), verificationBytes: Li(t) };
                        n.password && (r.verifier = Kr(n.password)),
                          (i.valid = r.verificationBytes === r.verifier),
                          i.valid &&
                            (i.insitu = (function (t) {
                              var e = 0,
                                n = eo(t);
                              return function (t) {
                                var i = (function (t, e, n, i, r) {
                                  var o, a;
                                  for (
                                    r || (r = e), i || (i = eo("")), o = 0;
                                    o != e.length;
                                    ++o
                                  )
                                    (a = e[o]),
                                      (a =
                                        255 & (((a ^= i[n]) >> 5) | (a << 3))),
                                      (r[o] = a),
                                      ++n;
                                  return [r, n, i];
                                })(0, t, e, n);
                                return (e = i[1]), i[0];
                              };
                            })(n.password));
                      })(t, n.biff, n, i),
                  i
                );
              },
            },
            49: {
              n: "Font",
              f: function (t, e, n) {
                var i = { dyHeight: t.read_shift(2), fl: t.read_shift(2) };
                switch ((n && n.biff) || 8) {
                  case 2:
                    break;
                  case 3:
                  case 4:
                    t.l += 2;
                    break;
                  default:
                    t.l += 10;
                }
                return (i.name = ji(t, 0, n)), i;
              },
            },
            51: { n: "PrintSize", f: Li },
            60: { n: "Continue" },
            61: {
              n: "Window1",
              f: function (t) {
                return {
                  Pos: [t.read_shift(2), t.read_shift(2)],
                  Dim: [t.read_shift(2), t.read_shift(2)],
                  Flags: t.read_shift(2),
                  CurTab: t.read_shift(2),
                  FirstTab: t.read_shift(2),
                  Selected: t.read_shift(2),
                  TabRatio: t.read_shift(2),
                };
              },
            },
            64: { n: "Backup", f: Ti },
            65: { n: "Pane" },
            66: { n: "CodePage", f: Li },
            77: { n: "Pls" },
            80: { n: "DCon" },
            81: { n: "DConRef" },
            82: { n: "DConName" },
            85: { n: "DefColWidth", f: Li },
            89: { n: "XCT" },
            90: { n: "CRN" },
            91: { n: "FileSharing" },
            92: {
              n: "WriteAccess",
              f: function (t, e, n) {
                if (n.enc) return (t.l += e), "";
                var i = t.l,
                  r = Wi(t, 0, n);
                return t.read_shift(e + i - t.l), r;
              },
            },
            93: {
              n: "Obj",
              f: function (t, e, n) {
                if (n && n.biff < 8)
                  return (function (t, e, n) {
                    t.l += 4;
                    var i = t.read_shift(2),
                      r = t.read_shift(2),
                      o = t.read_shift(2);
                    (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 2),
                      (t.l += 6),
                      (e -= 36);
                    var a = [];
                    return (
                      a.push((gr[i] || je)(t, e, n)), { cmo: [r, i, o], ft: a }
                    );
                  })(t, e, n);
                var i = Qi(t);
                return {
                  cmo: i,
                  ft: (function (t, e) {
                    for (var n = t.l + e, i = []; t.l < n; ) {
                      var r = t.read_shift(2);
                      t.l -= 2;
                      try {
                        i.push(er[r](t, n - t.l));
                      } catch (e) {
                        return (t.l = n), i;
                      }
                    }
                    return t.l != n && (t.l = n), i;
                  })(t, e - 22, i[1]),
                };
              },
            },
            94: { n: "Uncalced" },
            95: { n: "CalcSaveRecalc", f: Ti },
            96: { n: "Template" },
            97: { n: "Intl" },
            99: { n: "ObjProtect", f: Ti },
            125: { n: "ColInfo", f: yr },
            128: {
              n: "Guts",
              f: function (t) {
                t.l += 4;
                var e = [t.read_shift(2), t.read_shift(2)];
                if (
                  (0 !== e[0] && e[0]--,
                  0 !== e[1] && e[1]--,
                  e[0] > 7 || e[1] > 7)
                )
                  throw new Error("Bad Gutters: " + e.join("|"));
                return e;
              },
            },
            129: {
              n: "WsBool",
              f: function (t, e, n) {
                return {
                  fDialog:
                    16 &
                    ((n && 8 == n.biff) || 2 == e
                      ? t.read_shift(2)
                      : ((t.l += e), 0)),
                };
              },
            },
            130: { n: "GridSet", f: Li },
            131: { n: "HCenter", f: Ti },
            132: { n: "VCenter", f: Ti },
            133: {
              n: "BoundSheet8",
              f: function (t, e, n) {
                var i = t.read_shift(4),
                  r = 3 & t.read_shift(1),
                  o = t.read_shift(1);
                switch (o) {
                  case 0:
                    o = "Worksheet";
                    break;
                  case 1:
                    o = "Macrosheet";
                    break;
                  case 2:
                    o = "Chartsheet";
                    break;
                  case 6:
                    o = "VBAModule";
                }
                var a = ji(t, 0, n);
                return (
                  0 === a.length && (a = "Sheet1"),
                  { pos: i, hs: r, dt: o, name: a }
                );
              },
            },
            134: { n: "WriteProtect" },
            140: {
              n: "Country",
              f: function (t) {
                var e,
                  n = [0, 0];
                return (
                  (e = t.read_shift(2)),
                  (n[0] = Rn[e] || e),
                  (e = t.read_shift(2)),
                  (n[1] = Rn[e] || e),
                  n
                );
              },
            },
            141: { n: "HideObj", f: Li },
            144: { n: "Sort" },
            146: {
              n: "Palette",
              f: function (t) {
                for (var e = t.read_shift(2), n = []; e-- > 0; ) n.push(Hi(t));
                return n;
              },
            },
            151: { n: "Sync" },
            152: { n: "LPr" },
            153: { n: "DxGCol" },
            154: { n: "FnGroupName" },
            155: { n: "FilterMode" },
            156: { n: "BuiltInFnGroupCount", f: Li },
            157: { n: "AutoFilterInfo" },
            158: { n: "AutoFilter" },
            160: { n: "Scl", f: Or },
            161: {
              n: "Setup",
              f: function (t, e) {
                var n = {};
                return (
                  e < 32 ||
                    ((t.l += 16),
                    (n.header = An(t)),
                    (n.footer = An(t)),
                    (t.l += 2)),
                  n
                );
              },
            },
            174: { n: "ScenMan" },
            175: { n: "SCENARIO" },
            176: { n: "SxView" },
            177: { n: "Sxvd" },
            178: { n: "SXVI" },
            180: { n: "SxIvd" },
            181: { n: "SXLI" },
            182: { n: "SXPI" },
            184: { n: "DocRoute" },
            185: { n: "RecipName" },
            189: {
              n: "MulRk",
              f: function (t, e) {
                for (
                  var n = t.l + e - 2,
                    i = t.read_shift(2),
                    r = t.read_shift(2),
                    o = [];
                  t.l < n;

                )
                  o.push(Vi(t));
                if (t.l !== n) throw new Error("MulRK read error");
                var a = t.read_shift(2);
                if (o.length != a - r + 1)
                  throw new Error("MulRK length mismatch");
                return { r: i, c: r, C: a, rkrec: o };
              },
            },
            190: {
              n: "MulBlank",
              f: function (t, e) {
                for (
                  var n = t.l + e - 2,
                    i = t.read_shift(2),
                    r = t.read_shift(2),
                    o = [];
                  t.l < n;

                )
                  o.push(t.read_shift(2));
                if (t.l !== n) throw new Error("MulBlank read error");
                var a = t.read_shift(2);
                if (o.length != a - r + 1)
                  throw new Error("MulBlank length mismatch");
                return { r: i, c: r, C: a, ixfe: o };
              },
            },
            193: { n: "Mms", f: Si },
            197: { n: "SXDI" },
            198: { n: "SXDB" },
            199: { n: "SXFDB" },
            200: { n: "SXDBB" },
            201: { n: "SXNum" },
            202: { n: "SxBool", f: Ti },
            203: { n: "SxErr" },
            204: { n: "SXInt" },
            205: { n: "SXString" },
            206: { n: "SXDtr" },
            207: { n: "SxNil" },
            208: { n: "SXTbl" },
            209: { n: "SXTBRGIITM" },
            210: { n: "SxTbpg" },
            211: { n: "ObProj" },
            213: { n: "SXStreamID" },
            215: { n: "DBCell" },
            216: { n: "SXRng" },
            217: { n: "SxIsxoper" },
            218: { n: "BookBool", f: Li },
            220: { n: "DbOrParamQry" },
            221: { n: "ScenarioProtect", f: Ti },
            222: { n: "OleObjectSize" },
            224: {
              n: "XF",
              f: function (t, e, n) {
                var i = {};
                return (
                  (i.ifnt = t.read_shift(2)),
                  (i.numFmtId = t.read_shift(2)),
                  (i.flags = t.read_shift(2)),
                  (i.fStyle = (i.flags >> 2) & 1),
                  (i.data = (function (t, e, n, i) {
                    var r = {},
                      o = t.read_shift(4),
                      a = t.read_shift(4),
                      s = t.read_shift(4),
                      l = t.read_shift(2);
                    return (
                      (r.patternType = In[s >> 26]),
                      i.cellStyles
                        ? ((r.alc = 7 & o),
                          (r.fWrap = (o >> 3) & 1),
                          (r.alcV = (o >> 4) & 7),
                          (r.fJustLast = (o >> 7) & 1),
                          (r.trot = (o >> 8) & 255),
                          (r.cIndent = (o >> 16) & 15),
                          (r.fShrinkToFit = (o >> 20) & 1),
                          (r.iReadOrder = (o >> 22) & 2),
                          (r.fAtrNum = (o >> 26) & 1),
                          (r.fAtrFnt = (o >> 27) & 1),
                          (r.fAtrAlc = (o >> 28) & 1),
                          (r.fAtrBdr = (o >> 29) & 1),
                          (r.fAtrPat = (o >> 30) & 1),
                          (r.fAtrProt = (o >> 31) & 1),
                          (r.dgLeft = 15 & a),
                          (r.dgRight = (a >> 4) & 15),
                          (r.dgTop = (a >> 8) & 15),
                          (r.dgBottom = (a >> 12) & 15),
                          (r.icvLeft = (a >> 16) & 127),
                          (r.icvRight = (a >> 23) & 127),
                          (r.grbitDiag = (a >> 30) & 3),
                          (r.icvTop = 127 & s),
                          (r.icvBottom = (s >> 7) & 127),
                          (r.icvDiag = (s >> 14) & 127),
                          (r.dgDiag = (s >> 21) & 15),
                          (r.icvFore = 127 & l),
                          (r.icvBack = (l >> 7) & 127),
                          (r.fsxButton = (l >> 14) & 1),
                          r)
                        : r
                    );
                  })(t, 0, i.fStyle, n)),
                  i
                );
              },
            },
            225: {
              n: "InterfaceHdr",
              f: function (t, e) {
                return 0 === e || t.read_shift(2), 1200;
              },
            },
            226: { n: "InterfaceEnd", f: Si },
            227: { n: "SXVS" },
            229: {
              n: "MergeCells",
              f: function (t, e) {
                for (var n = [], i = t.read_shift(2); i--; ) n.push(Gi(t));
                return n;
              },
            },
            233: { n: "BkHim" },
            235: { n: "MsoDrawingGroup" },
            236: { n: "MsoDrawing" },
            237: { n: "MsoDrawingSelection" },
            239: { n: "PhoneticInfo" },
            240: { n: "SxRule" },
            241: { n: "SXEx" },
            242: { n: "SxFilt" },
            244: { n: "SxDXF" },
            245: { n: "SxItm" },
            246: { n: "SxName" },
            247: { n: "SxSelect" },
            248: { n: "SXPair" },
            249: { n: "SxFmla" },
            251: { n: "SxFormat" },
            252: {
              n: "SST",
              f: function (t, e) {
                for (
                  var n = t.l + e,
                    i = t.read_shift(4),
                    r = t.read_shift(4),
                    o = [],
                    a = 0;
                  a != r && t.l < n;
                  ++a
                )
                  o.push(Pi(t));
                return (o.Count = i), (o.Unique = r), o;
              },
            },
            253: {
              n: "LabelSst",
              f: function (t) {
                var e = Yi(t);
                return (e.isst = t.read_shift(4)), e;
              },
            },
            255: {
              n: "ExtSST",
              f: function (t, e) {
                var n = {};
                return (n.dsst = t.read_shift(2)), (t.l += e - 2), n;
              },
            },
            256: { n: "SXVDEx" },
            259: { n: "SXFormula" },
            290: { n: "SXDBEx" },
            311: { n: "RRDInsDel" },
            312: { n: "RRDHead" },
            315: { n: "RRDChgCell" },
            317: { n: "RRTabId", f: Ei },
            318: { n: "RRDRenSheet" },
            319: { n: "RRSort" },
            320: { n: "RRDMove" },
            330: { n: "RRFormat" },
            331: { n: "RRAutoFmt" },
            333: { n: "RRInsertSh" },
            334: { n: "RRDMoveBegin" },
            335: { n: "RRDMoveEnd" },
            336: { n: "RRDInsDelBegin" },
            337: { n: "RRDInsDelEnd" },
            338: { n: "RRDConflict" },
            339: { n: "RRDDefName" },
            340: { n: "RRDRstEtxp" },
            351: { n: "LRng" },
            352: { n: "UsesELFs", f: Ti },
            353: { n: "DSF", f: Si },
            401: { n: "CUsr" },
            402: { n: "CbUsr" },
            403: { n: "UsrInfo" },
            404: { n: "UsrExcl" },
            405: { n: "FileLock" },
            406: { n: "RRDInfo" },
            407: { n: "BCUsrs" },
            408: { n: "UsrChk" },
            425: { n: "UserBView" },
            426: { n: "UserSViewBegin" },
            427: { n: "UserSViewEnd" },
            428: { n: "RRDUserView" },
            429: { n: "Qsi" },
            430: {
              n: "SupBook",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = t.read_shift(2),
                  o = t.read_shift(2);
                if (((n.sbcch = o), 1025 == o || 14849 == o)) return [o, r];
                if (o < 1 || o > 255)
                  throw new Error("Unexpected SupBook type: " + o);
                for (var a = Ri(t, o), s = []; i > t.l; ) s.push(Ii(t));
                return [o, r, a, s];
              },
            },
            431: { n: "Prot4Rev", f: Ti },
            432: { n: "CondFmt" },
            433: { n: "CF" },
            434: { n: "DVal" },
            437: { n: "DConBin" },
            438: {
              n: "TxO",
              f: function (t, e, n) {
                var i = t.l,
                  r = "";
                try {
                  t.l += 4;
                  var o = (n.lastobj || { cmo: [0, 0] }).cmo[1];
                  -1 == [0, 5, 7, 11, 12, 14].indexOf(o)
                    ? (t.l += 6)
                    : (function (t) {
                        t.read_shift(1), t.l++, t.read_shift(2), (t.l += 2);
                      })(t);
                  var a = t.read_shift(2);
                  t.read_shift(2), Li(t);
                  var s = t.read_shift(2);
                  t.l += s;
                  for (var l = 1; l < t.lens.length - 1; ++l) {
                    if (t.l - i != t.lens[l])
                      throw new Error("TxO: bad continue record");
                    var c = t[t.l];
                    if (
                      (r += Ri(t, t.lens[l + 1] - t.lens[l] - 1)).length >=
                      (c ? a : 2 * a)
                    )
                      break;
                  }
                  if (r.length !== a && r.length !== 2 * a)
                    throw new Error("cchText: " + a + " != " + r.length);
                  return (t.l = i + e), { t: r };
                } catch (n) {
                  return (t.l = i + e), { t: r };
                }
              },
            },
            439: { n: "RefreshAll", f: Ti },
            440: {
              n: "HLink",
              f: function (t, e) {
                var n = Gi(t);
                return (
                  (t.l += 16),
                  [
                    n,
                    (function (t, e) {
                      var n = t.l + e,
                        i = t.read_shift(4);
                      if (2 !== i)
                        throw new Error("Unrecognized streamVersion: " + i);
                      var r = t.read_shift(2);
                      t.l += 2;
                      var o,
                        a,
                        s,
                        l,
                        c,
                        d,
                        u = "";
                      16 & r && (o = Bi(t, t.l)),
                        128 & r && (a = Bi(t, t.l)),
                        257 == (257 & r) && (s = Bi(t, t.l)),
                        1 == (257 & r) &&
                          (l = (function (t, e) {
                            var n = t.read_shift(16);
                            switch (n) {
                              case "e0c9ea79f9bace118c8200aa004ba90b":
                                return (function (t) {
                                  var e = t.read_shift(4),
                                    n = t.l,
                                    i = !1;
                                  e > 24 &&
                                    ((t.l += e - 24),
                                    "795881f43b1d7f48af2c825dc4852763" ===
                                      t.read_shift(16) && (i = !0),
                                    (t.l = n));
                                  var r = t
                                    .read_shift(
                                      (i ? e - 24 : e) >> 1,
                                      "utf16le"
                                    )
                                    .replace(D, "");
                                  return i && (t.l += 24), r;
                                })(t);
                              case "0303000000000000c000000000000046":
                                return (function (t) {
                                  t.l += 2;
                                  var e = t.read_shift(0, "lpstr-ansi");
                                  if (((t.l += 2), 57005 != t.read_shift(2)))
                                    throw new Error("Bad FileMoniker");
                                  if (0 === t.read_shift(4))
                                    return e.replace(/\\/g, "/");
                                  var n = t.read_shift(4);
                                  if (3 != t.read_shift(2))
                                    throw new Error("Bad FileMoniker");
                                  return t
                                    .read_shift(n >> 1, "utf16le")
                                    .replace(D, "");
                                })(t);
                              default:
                                throw new Error("Unsupported Moniker " + n);
                            }
                          })(t, t.l)),
                        8 & r && (u = Bi(t, t.l)),
                        32 & r && (c = t.read_shift(16)),
                        64 & r && (d = hi(t)),
                        (t.l = n);
                      var p = a || s || l || "";
                      p && u && (p += "#" + u), p || (p = "#" + u);
                      var h = { Target: p };
                      return (
                        c && (h.guid = c),
                        d && (h.time = d),
                        o && (h.Tooltip = o),
                        h
                      );
                    })(t, e - 24),
                  ]
                );
              },
            },
            441: { n: "Lel" },
            442: { n: "CodeName", f: Ii },
            443: { n: "SXFDBType" },
            444: { n: "Prot4RevPass", f: Li },
            445: { n: "ObNoMacros" },
            446: { n: "Dv" },
            448: { n: "Excel9File", f: Si },
            449: {
              n: "RecalcId",
              f: function (t) {
                return t.read_shift(2), t.read_shift(4);
              },
              r: 2,
            },
            450: { n: "EntExU2", f: Si },
            512: { n: "Dimensions", f: lr },
            513: { n: "Blank", f: Mr },
            515: {
              n: "Number",
              f: function (t) {
                var e = Yi(t),
                  n = An(t);
                return (e.val = n), e;
              },
            },
            516: {
              n: "Label",
              f: function (t, e, n) {
                t.l;
                var i = Yi(t);
                2 == n.biff && t.l++;
                var r = Ii(t, t.l, n);
                return (i.val = r), i;
              },
            },
            517: { n: "BoolErr", f: dr },
            518: { n: "Formula", f: Wa },
            519: { n: "String", f: wr },
            520: {
              n: "Row",
              f: function (t) {
                var e = {};
                (e.r = t.read_shift(2)),
                  (e.c = t.read_shift(2)),
                  (e.cnt = t.read_shift(2) - e.c);
                var n = t.read_shift(2);
                t.l += 4;
                var i = t.read_shift(1);
                return (
                  (t.l += 3),
                  7 & i && (e.level = 7 & i),
                  32 & i && (e.hidden = !0),
                  64 & i && (e.hpt = n / 20),
                  e
                );
              },
            },
            523: { n: "Index" },
            545: { n: "Array", f: mr },
            549: { n: "DefaultRowHeight", f: or },
            566: { n: "Table" },
            574: {
              n: "Window2",
              f: function (t, e, n) {
                return n && n.biff >= 2 && n.biff < 8
                  ? {}
                  : { RTL: 64 & t.read_shift(2) };
              },
            },
            638: {
              n: "RK",
              f: function (t) {
                var e = t.read_shift(2),
                  n = t.read_shift(2),
                  i = Vi(t);
                return { r: e, c: n, ixfe: i[0], rknum: i[1] };
              },
            },
            659: { n: "Style" },
            1030: { n: "Formula", f: Wa },
            1048: { n: "BigName" },
            1054: {
              n: "Format",
              f: function (t, e, n) {
                return [t.read_shift(2), Wi(t, 0, n)];
              },
            },
            1084: { n: "ContinueBigName" },
            1212: {
              n: "ShrFmla",
              f: function (t, e, n) {
                var i = Zi(t);
                t.l++;
                var r = t.read_shift(1);
                return [Ia(t, (e -= 8), n), r, i];
              },
            },
            2048: {
              n: "HLinkTooltip",
              f: function (t, e) {
                t.read_shift(2);
                var n = Gi(t),
                  i = t.read_shift((e - 10) / 2, "dbcs-cont");
                return [n, (i = i.replace(D, ""))];
              },
            },
            2049: { n: "WebPub" },
            2050: { n: "QsiSXTag" },
            2051: { n: "DBQueryExt" },
            2052: { n: "ExtString" },
            2053: { n: "TxtQry" },
            2054: { n: "Qsir" },
            2055: { n: "Qsif" },
            2056: { n: "RRDTQSIF" },
            2057: { n: "BOF", f: nr },
            2058: { n: "OleDbConn" },
            2059: { n: "WOpt" },
            2060: { n: "SXViewEx" },
            2061: { n: "SXTH" },
            2062: { n: "SXPIEx" },
            2063: { n: "SXVDTEx" },
            2064: { n: "SXViewEx9" },
            2066: { n: "ContinueFrt" },
            2067: { n: "RealTimeData" },
            2128: { n: "ChartFrtInfo" },
            2129: { n: "FrtWrapper" },
            2130: { n: "StartBlock" },
            2131: { n: "EndBlock" },
            2132: { n: "StartObject" },
            2133: { n: "EndObject" },
            2134: { n: "CatLab" },
            2135: { n: "YMult" },
            2136: { n: "SXViewLink" },
            2137: { n: "PivotChartBits" },
            2138: { n: "FrtFontList" },
            2146: { n: "SheetExt" },
            2147: { n: "BookExt", r: 12 },
            2148: { n: "SXAddl" },
            2149: { n: "CrErr" },
            2150: { n: "HFPicture" },
            2151: { n: "FeatHdr", f: Si },
            2152: { n: "Feat" },
            2154: { n: "DataLabExt" },
            2155: { n: "DataLabExtContents" },
            2156: { n: "CellWatch" },
            2161: { n: "FeatHdr11" },
            2162: { n: "Feature11" },
            2164: { n: "DropDownObjIds" },
            2165: { n: "ContinueFrt11" },
            2166: { n: "DConn" },
            2167: { n: "List12" },
            2168: { n: "Feature12" },
            2169: { n: "CondFmt12" },
            2170: { n: "CF12" },
            2171: { n: "CFEx" },
            2172: {
              n: "XFCRC",
              f: function (t) {
                t.l += 2;
                var e = { cxfs: 0, crc: 0 };
                return (e.cxfs = t.read_shift(2)), (e.crc = t.read_shift(4)), e;
              },
              r: 12,
            },
            2173: {
              n: "XFExt",
              f: function (t, e) {
                t.l, (t.l += 2);
                var n = t.read_shift(2);
                t.l += 2;
                for (var i = t.read_shift(2), r = []; i-- > 0; )
                  r.push($o(t, t.l));
                return { ixfe: n, ext: r };
              },
              r: 12,
            },
            2174: { n: "AutoFilter12" },
            2175: { n: "ContinueFrt12" },
            2180: { n: "MDTInfo" },
            2181: { n: "MDXStr" },
            2182: { n: "MDXTuple" },
            2183: { n: "MDXSet" },
            2184: { n: "MDXProp" },
            2185: { n: "MDXKPI" },
            2186: { n: "MDB" },
            2187: { n: "PLV" },
            2188: { n: "Compat12", f: Ti, r: 12 },
            2189: { n: "DXF" },
            2190: { n: "TableStyles", r: 12 },
            2191: { n: "TableStyle" },
            2192: { n: "TableStyleElement" },
            2194: { n: "StyleExt" },
            2195: { n: "NamePublish" },
            2196: {
              n: "NameCmt",
              f: function (t, e, n) {
                if (!(n.biff < 8)) {
                  var i = t.read_shift(2),
                    r = t.read_shift(2);
                  return [Ri(t, i, n), Ri(t, r, n)];
                }
                t.l += e;
              },
              r: 12,
            },
            2197: { n: "SortData" },
            2198: {
              n: "Theme",
              f: function (t, e, n) {
                var i = t.l + e;
                if (124226 !== t.read_shift(4))
                  if (n.cellStyles && at) {
                    var r,
                      o = t.slice(t.l);
                    t.l = i;
                    try {
                      r = new at(o);
                    } catch (t) {
                      return;
                    }
                    var a = pt(r, "theme/theme/theme1.xml", !0);
                    if (a) return Bo(a, n);
                  } else t.l = i;
              },
              r: 12,
            },
            2199: { n: "GUIDTypeLib" },
            2200: { n: "FnGrp12" },
            2201: { n: "NameFnGrp12" },
            2202: {
              n: "MTRSettings",
              f: function (t) {
                return [
                  0 !== t.read_shift(4),
                  0 !== t.read_shift(4),
                  t.read_shift(4),
                ];
              },
              r: 12,
            },
            2203: { n: "CompressPictures", f: Si },
            2204: { n: "HeaderFooter" },
            2205: { n: "CrtLayout12" },
            2206: { n: "CrtMlFrt" },
            2207: { n: "CrtMlFrtContinue" },
            2211: {
              n: "ForceFullCalculation",
              f: function (t) {
                var e = (function (t) {
                  var e = t.read_shift(2),
                    n = t.read_shift(2);
                  return (t.l += 8), { type: e, flags: n };
                })(t);
                if (2211 != e.type)
                  throw new Error("Invalid Future Record " + e.type);
                return 0 !== t.read_shift(4);
              },
            },
            2212: { n: "ShapePropsStream" },
            2213: { n: "TextPropsStream" },
            2214: { n: "RichTextStream" },
            2215: { n: "CrtLayout12A" },
            4097: { n: "Units" },
            4098: { n: "Chart" },
            4099: { n: "Series" },
            4102: { n: "DataFormat" },
            4103: { n: "LineFormat" },
            4105: { n: "MarkerFormat" },
            4106: { n: "AreaFormat" },
            4107: { n: "PieFormat" },
            4108: { n: "AttachedLabel" },
            4109: { n: "SeriesText" },
            4116: { n: "ChartFormat" },
            4117: { n: "Legend" },
            4118: { n: "SeriesList" },
            4119: { n: "Bar" },
            4120: { n: "Line" },
            4121: { n: "Pie" },
            4122: { n: "Area" },
            4123: { n: "Scatter" },
            4124: { n: "CrtLine" },
            4125: { n: "Axis" },
            4126: { n: "Tick" },
            4127: { n: "ValueRange" },
            4128: { n: "CatSerRange" },
            4129: { n: "AxisLine" },
            4130: { n: "CrtLink" },
            4132: { n: "DefaultText" },
            4133: { n: "Text" },
            4134: { n: "FontX", f: Li },
            4135: { n: "ObjectLink" },
            4146: { n: "Frame" },
            4147: { n: "Begin" },
            4148: { n: "End" },
            4149: { n: "PlotArea" },
            4154: { n: "Chart3d" },
            4156: { n: "PicF" },
            4157: { n: "DropBar" },
            4158: { n: "Radar" },
            4159: { n: "Surf" },
            4160: { n: "RadarArea" },
            4161: { n: "AxisParent" },
            4163: { n: "LegendException" },
            4164: {
              n: "ShtProps",
              f: function (t, e, n) {
                var i = { area: !1 };
                if (5 != n.biff) return (t.l += e), i;
                var r = t.read_shift(1);
                return (t.l += 3), 16 & r && (i.area = !0), i;
              },
            },
            4165: { n: "SerToCrt" },
            4166: { n: "AxesUsed" },
            4168: { n: "SBaseRef" },
            4170: { n: "SerParent" },
            4171: { n: "SerAuxTrend" },
            4174: { n: "IFmtRecord" },
            4175: { n: "Pos" },
            4176: { n: "AlRuns" },
            4177: { n: "BRAI" },
            4187: { n: "SerAuxErrBar" },
            4188: {
              n: "ClrtClient",
              f: function (t) {
                for (var e = t.read_shift(2), n = []; e-- > 0; ) n.push(Hi(t));
                return n;
              },
            },
            4189: { n: "SerFmt" },
            4191: { n: "Chart3DBarShape" },
            4192: { n: "Fbi" },
            4193: { n: "BopPop" },
            4194: { n: "AxcExt" },
            4195: { n: "Dat" },
            4196: { n: "PlotGrowth" },
            4197: { n: "SIIndex" },
            4198: { n: "GelFrame" },
            4199: { n: "BopPopCustom" },
            4200: { n: "Fbi2" },
            0: { n: "Dimensions", f: lr },
            2: {
              n: "BIFF2INT",
              f: function (t) {
                var e = Yi(t);
                ++t.l;
                var n = t.read_shift(2);
                return (e.t = "n"), (e.val = n), e;
              },
            },
            5: { n: "BoolErr", f: dr },
            7: {
              n: "String",
              f: function (t) {
                var e = t.read_shift(1);
                return 0 === e ? (t.l++, "") : t.read_shift(e, "sbcs-cont");
              },
            },
            8: { n: "BIFF2ROW" },
            11: { n: "Index" },
            22: { n: "ExternCount", f: Li },
            30: { n: "BIFF2FORMAT", f: sr },
            31: { n: "BIFF2FMTCNT" },
            32: { n: "BIFF2COLINFO" },
            33: { n: "Array", f: mr },
            37: { n: "DefaultRowHeight", f: or },
            50: {
              n: "BIFF2FONTXTRA",
              f: function (t, e) {
                (t.l += 6),
                  (t.l += 2),
                  (t.l += 1),
                  (t.l += 3),
                  (t.l += 1),
                  (t.l += e - 13);
              },
            },
            52: { n: "DDEObjName" },
            62: { n: "BIFF2WINDOW2" },
            67: { n: "BIFF2XF" },
            69: { n: "BIFF2FONTCLR" },
            86: { n: "BIFF4FMTCNT" },
            126: { n: "RK" },
            127: {
              n: "ImData",
              f: function (t) {
                var e = t.read_shift(2),
                  n = t.read_shift(2),
                  i = t.read_shift(4),
                  r = { fmt: e, env: n, len: i, data: t.slice(t.l, t.l + i) };
                return (t.l += i), r;
              },
            },
            135: { n: "Addin" },
            136: { n: "Edg" },
            137: { n: "Pub" },
            145: { n: "Sub" },
            148: { n: "LHRecord" },
            149: { n: "LHNGraph" },
            150: { n: "Sound" },
            169: { n: "CoordList" },
            171: { n: "GCW" },
            188: { n: "ShrFmla" },
            191: { n: "ToolbarHdr" },
            192: { n: "ToolbarEnd" },
            194: { n: "AddMenu" },
            195: { n: "DelMenu" },
            214: {
              n: "RString",
              f: function (t, e, n) {
                var i = t.l + e,
                  r = Yi(t),
                  o = t.read_shift(2),
                  a = Ri(t, o, n);
                return (t.l = i), (r.t = "str"), (r.val = a), r;
              },
            },
            223: { n: "UDDesc" },
            234: { n: "TabIdConf" },
            354: { n: "XL5Modify" },
            421: { n: "FileSharing2" },
            521: { n: "BOF", f: nr },
            536: { n: "Lbl", f: fr },
            547: { n: "ExternName", f: pr },
            561: { n: "Font" },
            579: { n: "BIFF3XF" },
            1033: { n: "BOF", f: nr },
            1091: { n: "BIFF4XF" },
            2157: { n: "FeatInfo" },
            2163: { n: "FeatInfo11" },
            2177: { n: "SXAddl12" },
            2240: { n: "AutoWebPub" },
            2241: { n: "ListObj" },
            2242: { n: "ListField" },
            2243: { n: "ListDV" },
            2244: { n: "ListCondFmt" },
            2245: { n: "ListCF" },
            2246: { n: "FMQry" },
            2247: { n: "FMSQry" },
            2248: { n: "PLV" },
            2249: { n: "LnExt" },
            2250: { n: "MkrExt" },
            2251: { n: "CrtCoopt" },
            2262: { n: "FRTArchId$", r: 12 },
            29282: {},
          },
          Cl = H(zl, "n");
        function kl(t, e, n, i) {
          var r = +e || +Cl[e];
          if (!isNaN(r)) {
            var o = i || (n || []).length || 0,
              a = t.next(4);
            a.write_shift(2, r),
              a.write_shift(2, o),
              o > 0 && we(n) && t.push(n);
          }
        }
        function Sl(t, e, n) {
          return (
            t || (t = Pe(7)),
            t.write_shift(2, e),
            t.write_shift(2, n),
            t.write_shift(2, 0),
            t.write_shift(1, 0),
            t
          );
        }
        function Tl(t, e, n, i) {
          if (null != e.v)
            switch (e.t) {
              case "d":
              case "n":
                var r = "d" == e.t ? G(tt(e.v)) : e.v;
                return void (r == (0 | r) && r >= 0 && r < 65536
                  ? kl(
                      t,
                      2,
                      (function (t, e, n) {
                        var i = Pe(9);
                        return Sl(i, t, e), i.write_shift(2, n), i;
                      })(n, i, r)
                    )
                  : kl(
                      t,
                      3,
                      (function (t, e, n) {
                        var i = Pe(15);
                        return Sl(i, t, e), i.write_shift(8, n, "f"), i;
                      })(n, i, r)
                    ));
              case "b":
              case "e":
                return void kl(
                  t,
                  5,
                  (function (t, e, n, i) {
                    var r = Pe(9);
                    return (
                      Sl(r, t, e),
                      "e" == i
                        ? (r.write_shift(1, n), r.write_shift(1, 1))
                        : (r.write_shift(1, n ? 1 : 0), r.write_shift(1, 0)),
                      r
                    );
                  })(n, i, e.v, e.t)
                );
              case "s":
              case "str":
                return void kl(
                  t,
                  4,
                  (function (t, e, n) {
                    var i = Pe(8 + 2 * n.length);
                    return (
                      Sl(i, t, e),
                      i.write_shift(1, n.length),
                      i.write_shift(n.length, n, "sbcs"),
                      i.l < i.length ? i.slice(0, i.l) : i
                    );
                  })(n, i, e.v)
                );
            }
          kl(t, 1, Sl(null, n, i));
        }
        function Dl(t, e, n, i, r) {
          var o = 16 + is(r.cellXfs, e, r);
          if (null != e.v)
            switch (e.t) {
              case "d":
              case "n":
                return void kl(
                  t,
                  "Number",
                  (function (t, e, n, i) {
                    var r = Pe(14);
                    return Ui(t, e, i, r), xn(n, r), r;
                  })(n, i, "d" == e.t ? G(tt(e.v)) : e.v, o)
                );
              case "b":
              case "e":
                return void kl(
                  t,
                  517,
                  (function (t, e, n, i, r, o) {
                    var a = Pe(8);
                    return (
                      Ui(t, e, i, a),
                      (function (t, e, n) {
                        n || (n = Pe(2)),
                          n.write_shift(1, +t),
                          n.write_shift(1, "e" == e ? 1 : 0);
                      })(n, o, a),
                      a
                    );
                  })(n, i, e.v, o, 0, e.t)
                );
              case "s":
              case "str":
                return void kl(
                  t,
                  "Label",
                  (function (t, e, n, i, r) {
                    var o = !r || 8 == r.biff,
                      a = Pe(+o + 8 + (1 + o) * n.length);
                    return (
                      Ui(t, e, i, a),
                      a.write_shift(2, n.length),
                      o && a.write_shift(1, 1),
                      a.write_shift(
                        (1 + o) * n.length,
                        n,
                        o ? "utf16le" : "sbcs"
                      ),
                      a
                    );
                  })(n, i, e.v, o, r)
                );
            }
          kl(t, "Blank", Ui(n, i, o));
        }
        function Ll(t, e, n) {
          var i,
            r = Ie(),
            o = n.SheetNames[t],
            a = n.Sheets[o] || {},
            s = (n || {}).Workbook || {},
            l = (s.Sheets || [])[t] || {},
            c = Array.isArray(a),
            d = 8 == e.biff,
            u = "",
            p = [],
            h = Qe(a["!ref"] || "A1"),
            f = d ? 65536 : 16384;
          if (h.e.c > 255 || h.e.r >= f) {
            if (e.WTF)
              throw new Error(
                "Range " +
                  (a["!ref"] || "A1") +
                  " exceeds format limit A1:IV16384"
              );
            (h.e.c = Math.min(h.e.c, 255)), (h.e.r = Math.min(h.e.c, f - 1));
          }
          kl(r, 2057, ir(0, 16, e)),
            kl(r, "CalcMode", qi(1)),
            kl(r, "CalcCount", qi(100)),
            kl(r, "CalcRefMode", Di(!0)),
            kl(r, "CalcIter", Di(!1)),
            kl(r, "CalcDelta", xn(0.001)),
            kl(r, "CalcSaveRecalc", Di(!0)),
            kl(r, "PrintRowCol", Di(!1)),
            kl(r, "PrintGrid", Di(!1)),
            kl(r, "GridSet", qi(1)),
            kl(
              r,
              "Guts",
              (function (t) {
                var e = Pe(8);
                return (
                  e.write_shift(4, 0),
                  e.write_shift(2, t[0] ? t[0] + 1 : 0),
                  e.write_shift(2, t[1] ? t[1] + 1 : 0),
                  e
                );
              })([0, 0])
            ),
            kl(r, "HCenter", Di(!1)),
            kl(r, "VCenter", Di(!1)),
            kl(
              r,
              512,
              (function (t, e) {
                var n = 8 != e.biff && e.biff ? 2 : 4,
                  i = Pe(2 * n + 6);
                return (
                  i.write_shift(n, t.s.r),
                  i.write_shift(n, t.e.r + 1),
                  i.write_shift(2, t.s.c),
                  i.write_shift(2, t.e.c + 1),
                  i.write_shift(2, 0),
                  i
                );
              })(h, e)
            ),
            d && (a["!links"] = []);
          for (var b = h.s.r; b <= h.e.r; ++b) {
            u = Ye(b);
            for (var m = h.s.c; m <= h.e.c; ++m) {
              b === h.s.r && (p[m] = Xe(m)), (i = p[m] + u);
              var g = c ? (a[b] || [])[m] : a[i];
              g && (Dl(r, g, b, m, e), d && g.l && a["!links"].push([i, g.l]));
            }
          }
          var v = l.CodeName || l.name || o;
          return (
            d &&
              s.Views &&
              kl(
                r,
                "Window2",
                (function (t) {
                  var e = Pe(18),
                    n = 1718;
                  return (
                    t && t.RTL && (n |= 64),
                    e.write_shift(2, n),
                    e.write_shift(4, 0),
                    e.write_shift(4, 64),
                    e.write_shift(4, 0),
                    e.write_shift(4, 0),
                    e
                  );
                })(s.Views[0])
              ),
            d &&
              (a["!merges"] || []).length &&
              kl(
                r,
                "MergeCells",
                (function (t) {
                  var e = Pe(2 + 8 * t.length);
                  e.write_shift(2, t.length);
                  for (var n = 0; n < t.length; ++n) Ki(t[n], e);
                  return e;
                })(a["!merges"])
              ),
            d &&
              (function (t, e) {
                for (var n = 0; n < e["!links"].length; ++n) {
                  var i = e["!links"][n];
                  kl(t, "HLink", vr(i)),
                    i[1].Tooltip && kl(t, "HLinkTooltip", _r(i));
                }
                delete e["!links"];
              })(r, a),
            kl(r, "CodeName", Ni(v)),
            d &&
              (function (t, e) {
                var n = Pe(19);
                n.write_shift(4, 2151),
                  n.write_shift(4, 0),
                  n.write_shift(4, 0),
                  n.write_shift(2, 3),
                  n.write_shift(1, 1),
                  n.write_shift(4, 0),
                  kl(t, "FeatHdr", n),
                  (n = Pe(39)).write_shift(4, 2152),
                  n.write_shift(4, 0),
                  n.write_shift(4, 0),
                  n.write_shift(2, 3),
                  n.write_shift(1, 0),
                  n.write_shift(4, 0),
                  n.write_shift(2, 1),
                  n.write_shift(4, 4),
                  n.write_shift(2, 0),
                  Ki(Qe(e["!ref"] || "A1"), n),
                  n.write_shift(4, 4),
                  kl(t, "Feat", n);
              })(r, a),
            kl(r, "EOF"),
            r.end()
          );
        }
        function ql(t, e) {
          var n = e || {};
          switch (n.biff || 2) {
            case 8:
            case 5:
              return (function (t, e) {
                var n = e || {},
                  i = [];
                t && !t.SSF && (t.SSF = q.get_table()),
                  t &&
                    t.SSF &&
                    (E(q),
                    q.load_table(t.SSF),
                    (n.revssf = U(t.SSF)),
                    (n.revssf[t.SSF[65535]] = 0),
                    (n.ssf = t.SSF)),
                  (n.cellXfs = []),
                  (n.Strings = []),
                  (n.Strings.Count = 0),
                  (n.Strings.Unique = 0),
                  is(n.cellXfs, {}, { revssf: { General: 0 } });
                for (var r = 0; r < t.SheetNames.length; ++r)
                  i[i.length] = Ll(r, n, t);
                return (
                  i.unshift(
                    (function (t, e, n) {
                      var i = Ie(),
                        r = (t || {}).Workbook || {},
                        o = r.Sheets || [],
                        a = r.WBProps || {},
                        s = 8 == n.biff,
                        l = 5 == n.biff;
                      kl(i, 2057, ir(0, 5, n)),
                        "xla" == n.bookType && kl(i, "Addin"),
                        kl(i, "InterfaceHdr", s ? qi(1200) : null),
                        kl(
                          i,
                          "Mms",
                          (function (t, e) {
                            e || (e = Pe(2));
                            for (var n = 0; n < 2; ++n) e.write_shift(1, 0);
                            return e;
                          })()
                        ),
                        l && kl(i, "ToolbarHdr"),
                        l && kl(i, "ToolbarEnd"),
                        kl(i, "InterfaceEnd"),
                        kl(
                          i,
                          "WriteAccess",
                          (function (t, e) {
                            var n = !e || 8 == e.biff,
                              i = Pe(n ? 112 : 54);
                            for (
                              i.write_shift(8 == e.biff ? 2 : 1, 7),
                                n && i.write_shift(1, 0),
                                i.write_shift(4, 859007059),
                                i.write_shift(4, 5458548 | (n ? 0 : 536870912));
                              i.l < i.length;

                            )
                              i.write_shift(1, n ? 0 : 32);
                            return i;
                          })(0, n)
                        ),
                        kl(i, "CodePage", qi(s ? 1200 : 1252)),
                        s && kl(i, "DSF", qi(0)),
                        s && kl(i, "Excel9File"),
                        kl(
                          i,
                          "RRTabId",
                          (function (t) {
                            for (var e = Pe(2 * t), n = 0; n < t; ++n)
                              e.write_shift(2, n + 1);
                            return e;
                          })(t.SheetNames.length)
                        ),
                        s &&
                          t.vbaraw &&
                          (kl(i, "ObProj"),
                          kl(i, "CodeName", Ni(a.CodeName || "ThisWorkbook"))),
                        kl(i, "BuiltInFnGroupCount", qi(17)),
                        kl(i, "WinProtect", Di(!1)),
                        kl(i, "Protect", Di(!1)),
                        kl(i, "Password", qi(0)),
                        s && kl(i, "Prot4Rev", Di(!1)),
                        s && kl(i, "Prot4RevPass", qi(0)),
                        kl(
                          i,
                          "Window1",
                          (function () {
                            var t = Pe(18);
                            return (
                              t.write_shift(2, 0),
                              t.write_shift(2, 0),
                              t.write_shift(2, 29280),
                              t.write_shift(2, 17600),
                              t.write_shift(2, 56),
                              t.write_shift(2, 0),
                              t.write_shift(2, 0),
                              t.write_shift(2, 1),
                              t.write_shift(2, 500),
                              t
                            );
                          })()
                        ),
                        kl(i, "Backup", Di(!1)),
                        kl(i, "HideObj", qi(0)),
                        kl(
                          i,
                          "Date1904",
                          Di(
                            "true" ==
                              (function (t) {
                                return t.Workbook &&
                                  t.Workbook.WBProps &&
                                  qt(t.Workbook.WBProps.date1904)
                                  ? "true"
                                  : "false";
                              })(t)
                          )
                        ),
                        kl(i, "CalcPrecision", Di(!0)),
                        s && kl(i, "RefreshAll", Di(!1)),
                        kl(i, "BookBool", qi(0)),
                        (function (t, e, n) {
                          kl(
                            t,
                            "Font",
                            (function (t, e) {
                              var n = t.name || "Arial",
                                i = e && 5 == e.biff,
                                r = Pe(i ? 15 + n.length : 16 + 2 * n.length);
                              return (
                                r.write_shift(2, 20 * (t.sz || 12)),
                                r.write_shift(4, 0),
                                r.write_shift(2, 400),
                                r.write_shift(4, 0),
                                r.write_shift(2, 0),
                                r.write_shift(1, n.length),
                                i || r.write_shift(1, 1),
                                r.write_shift(
                                  (i ? 1 : 2) * n.length,
                                  n,
                                  i ? "sbcs" : "utf16le"
                                ),
                                r
                              );
                            })(
                              {
                                sz: 12,
                                color: { theme: 1 },
                                name: "Arial",
                                family: 2,
                                scheme: "minor",
                              },
                              n
                            )
                          );
                        })(i, 0, n),
                        (function (t, e, n) {
                          e &&
                            [
                              [5, 8],
                              [23, 26],
                              [41, 44],
                              [50, 392],
                            ].forEach(function (i) {
                              for (var r = i[0]; r <= i[1]; ++r)
                                null != e[r] && kl(t, "Format", ar(r, e[r], n));
                            });
                        })(i, t.SSF, n),
                        (function (t, e) {
                          for (var n = 0; n < 16; ++n)
                            kl(t, "XF", cr({ numFmtId: 0, style: !0 }, 0, e));
                          e.cellXfs.forEach(function (n) {
                            kl(t, "XF", cr(n, 0, e));
                          });
                        })(i, n),
                        s && kl(i, "UsesELFs", Di(!1));
                      var c = i.end(),
                        d = Ie();
                      s &&
                        kl(
                          d,
                          "Country",
                          (function (t) {
                            return (
                              t || (t = Pe(4)),
                              t.write_shift(2, 1),
                              t.write_shift(2, 1),
                              t
                            );
                          })()
                        ),
                        kl(d, "EOF");
                      var u = d.end(),
                        p = Ie(),
                        h = 0,
                        f = 0;
                      for (f = 0; f < t.SheetNames.length; ++f)
                        h +=
                          (s ? 12 : 11) + (s ? 2 : 1) * t.SheetNames[f].length;
                      var b = c.length + h + u.length;
                      for (f = 0; f < t.SheetNames.length; ++f)
                        kl(
                          p,
                          "BoundSheet8",
                          rr(
                            {
                              pos: b,
                              hs: (o[f] || {}).Hidden || 0,
                              dt: 0,
                              name: t.SheetNames[f],
                            },
                            n
                          )
                        ),
                          (b += e[f].length);
                      var m = p.end();
                      if (h != m.length)
                        throw new Error("BS8 " + h + " != " + m.length);
                      var g = [];
                      return (
                        c.length && g.push(c),
                        m.length && g.push(m),
                        u.length && g.push(u),
                        oe([g])
                      );
                    })(t, i, n)
                  ),
                  oe([i])
                );
              })(t, e);
            case 4:
            case 3:
            case 2:
              return (function (t, e) {
                for (
                  var n = e || {}, i = Ie(), r = 0, o = 0;
                  o < t.SheetNames.length;
                  ++o
                )
                  t.SheetNames[o] == n.sheet && (r = o);
                if (0 == r && n.sheet && t.SheetNames[0] != n.sheet)
                  throw new Error("Sheet not found: " + n.sheet);
                return (
                  kl(i, 9, ir(0, 16, n)),
                  (function (t, e, n, i) {
                    var r,
                      o = Array.isArray(e),
                      a = Qe(e["!ref"] || "A1"),
                      s = "",
                      l = [];
                    if (a.e.c > 255 || a.e.r > 16383) {
                      if (i.WTF)
                        throw new Error(
                          "Range " +
                            (e["!ref"] || "A1") +
                            " exceeds format limit A1:IV16384"
                        );
                      (a.e.c = Math.min(a.e.c, 255)),
                        (a.e.r = Math.min(a.e.c, 16383)),
                        (r = Je(a));
                    }
                    for (var c = a.s.r; c <= a.e.r; ++c) {
                      s = Ye(c);
                      for (var d = a.s.c; d <= a.e.c; ++d) {
                        c === a.s.r && (l[d] = Xe(d)), (r = l[d] + s);
                        var u = o ? (e[c] || [])[d] : e[r];
                        u && Tl(t, u, c, d);
                      }
                    }
                  })(i, t.Sheets[t.SheetNames[r]], 0, n),
                  kl(i, 10),
                  i.end()
                );
              })(t, e);
          }
          throw new Error("invalid type " + n.bookType + " for BIFF");
        }
        var El = (function () {
          function t(t, e) {
            var n = e || {},
              i = n.dense ? [] : {},
              r = t.match(/<table/i);
            if (!r) throw new Error("Invalid HTML: could not find <table>");
            var o = t.match(/<\/table/i),
              a = r.index,
              s = (o && o.index) || t.length,
              l = (function (t, e, n) {
                if (st || "string" == typeof e) return t.split(e);
                for (var i = t.split(e), r = [i[0]], o = 1; o < i.length; ++o)
                  r.push("<tr>"), r.push(i[o]);
                return r;
              })(t.slice(a, s), /(:?<tr[^>]*>)/i),
              c = -1,
              d = 0,
              u = 0,
              p = 0,
              h = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
              f = [];
            for (a = 0; a < l.length; ++a) {
              var b = l[a].trim(),
                m = b.slice(0, 3).toLowerCase();
              if ("<tr" != m) {
                if ("<td" == m || "<th" == m) {
                  var g = b.split(/<\/t[dh]>/i);
                  for (s = 0; s < g.length; ++s) {
                    var v = g[s].trim();
                    if (v.match(/<t[dh]/i)) {
                      for (
                        var _ = v, y = 0;
                        "<" == _.charAt(0) && (y = _.indexOf(">")) > -1;

                      )
                        _ = _.slice(y + 1);
                      var M = _t(v.slice(0, v.indexOf(">")));
                      (p = M.colspan ? +M.colspan : 1),
                        ((u = +M.rowspan) > 1 || p > 1) &&
                          f.push({
                            s: { r: c, c: d },
                            e: { r: c + (u || 1) - 1, c: d + p - 1 },
                          });
                      var O = M.t || "";
                      if (_.length) {
                        if (
                          ((_ = $t(_)),
                          h.s.r > c && (h.s.r = c),
                          h.e.r < c && (h.e.r = c),
                          h.s.c > d && (h.s.c = d),
                          h.e.c < d && (h.e.c = d),
                          _.length)
                        ) {
                          var w = { t: "s", v: _ };
                          n.raw ||
                            !_.trim().length ||
                            "s" == O ||
                            ("TRUE" === _
                              ? (w = { t: "b", v: !0 })
                              : "FALSE" === _
                              ? (w = { t: "b", v: !1 })
                              : isNaN(rt(_))
                              ? isNaN(ot(_).getDate()) ||
                                ((w = { t: "d", v: tt(_) }),
                                n.cellDates || (w = { t: "n", v: G(w.v) }),
                                (w.z = n.dateNF || q._table[14]))
                              : (w = { t: "n", v: rt(_) })),
                            n.dense
                              ? (i[c] || (i[c] = []), (i[c][d] = w))
                              : (i[Ke({ r: c, c: d })] = w),
                            (d += p);
                        }
                      } else d += p;
                    }
                  }
                }
              } else {
                if ((++c, n.sheetRows && n.sheetRows <= c)) {
                  --c;
                  break;
                }
                d = 0;
              }
            }
            return (i["!ref"] = Je(h)), i;
          }
          function e(t, e, n, i) {
            for (
              var r = t["!merges"] || [], o = [], a = e.s.c;
              a <= e.e.c;
              ++a
            ) {
              for (var s = 0, l = 0, c = 0; c < r.length; ++c)
                if (
                  !(
                    r[c].s.r > n ||
                    r[c].s.c > a ||
                    r[c].e.r < n ||
                    r[c].e.c < a
                  )
                ) {
                  if (r[c].s.r < n || r[c].s.c < a) {
                    s = -1;
                    break;
                  }
                  (s = r[c].e.r - r[c].s.r + 1), (l = r[c].e.c - r[c].s.c + 1);
                  break;
                }
              if (!(s < 0)) {
                var d = Ke({ r: n, c: a }),
                  u = i.dense ? (t[n] || [])[a] : t[d],
                  p = {};
                s > 1 && (p.rowspan = s), l > 1 && (p.colspan = l);
                var h =
                  (u &&
                    null != u.v &&
                    (u.h || Dt(u.w || (tn(u), u.w) || ""))) ||
                  "";
                (p.t = (u && u.t) || "z"),
                  i.editable &&
                    (h = '<span contenteditable="true">' + h + "</span>"),
                  (p.id = "sjs-" + d),
                  o.push(Zt("td", h, p));
              }
            }
            return "<tr>" + o.join("") + "</tr>";
          }
          function n(t, e, n) {
            return (
              [].join("") +
              "<table" +
              (n && n.id ? ' id="' + n.id + '"' : "") +
              ">"
            );
          }
          var i =
              '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
            r = "</body></html>";
          return {
            to_workbook: function (e, n) {
              return en(t(e, n), n);
            },
            to_sheet: t,
            _row: e,
            BEGIN: i,
            END: r,
            _preamble: n,
            from_sheet: function (t, o) {
              var a = o || {},
                s = null != a.header ? a.header : i,
                l = null != a.footer ? a.footer : r,
                c = [s],
                d = Ze(t["!ref"]);
              (a.dense = Array.isArray(t)), c.push(n(0, 0, a));
              for (var u = d.s.r; u <= d.e.r; ++u) c.push(e(t, d, u, a));
              return c.push("</table>" + l), c.join("");
            },
          };
        })();
        function jl(t, e) {
          for (
            var n,
              i,
              r,
              o,
              a = e || {},
              s = a.dense ? [] : {},
              l = t.getElementsByTagName("tr"),
              c = a.sheetRows || 1e7,
              d = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
              u = [],
              p = 0,
              h = [],
              f = 0,
              b = 0;
            f < l.length && b < c;
            ++f
          ) {
            var m = l[f];
            if (Pl(m)) {
              if (a.display) continue;
              h[b] = { hidden: !0 };
            }
            var g = m.children;
            for (n = i = 0; n < g.length; ++n) {
              var v = g[n];
              if (!a.display || !Pl(v)) {
                var _ = $t(v.innerHTML);
                for (p = 0; p < u.length; ++p) {
                  var y = u[p];
                  y.s.c == i &&
                    y.s.r <= b &&
                    b <= y.e.r &&
                    ((i = y.e.c + 1), (p = -1));
                }
                (o = +v.getAttribute("colspan") || 1),
                  ((r = +v.getAttribute("rowspan")) > 0 || o > 1) &&
                    u.push({
                      s: { r: b, c: i },
                      e: { r: b + (r || 1) - 1, c: i + o - 1 },
                    });
                var M = { t: "s", v: _ },
                  O = v.getAttribute("t") || "";
                null != _ &&
                  (0 == _.length
                    ? (M.t = O || "z")
                    : a.raw ||
                      0 == _.trim().length ||
                      "s" == O ||
                      ("TRUE" === _
                        ? (M = { t: "b", v: !0 })
                        : "FALSE" === _
                        ? (M = { t: "b", v: !1 })
                        : isNaN(rt(_))
                        ? isNaN(ot(_).getDate()) ||
                          ((M = { t: "d", v: tt(_) }),
                          a.cellDates || (M = { t: "n", v: G(M.v) }),
                          (M.z = a.dateNF || q._table[14]))
                        : (M = { t: "n", v: rt(_) }))),
                  a.dense
                    ? (s[b] || (s[b] = []), (s[b][i] = M))
                    : (s[Ke({ c: i, r: b })] = M),
                  d.e.c < i && (d.e.c = i),
                  (i += o);
              }
            }
            ++b;
          }
          return (
            u.length && (s["!merges"] = u),
            h.length && (s["!rows"] = h),
            (d.e.r = b - 1),
            (s["!ref"] = Je(d)),
            b >= c && (s["!fullref"] = Je(((d.e.r = l.length - f + b - 1), d))),
            s
          );
        }
        function Pl(t) {
          var e = "",
            n = (function (t) {
              return t.ownerDocument.defaultView &&
                "function" ==
                  typeof t.ownerDocument.defaultView.getComputedStyle
                ? t.ownerDocument.defaultView.getComputedStyle
                : "function" == typeof getComputedStyle
                ? getComputedStyle
                : null;
            })(t);
          return (
            n && (e = n(t).getPropertyValue("display")),
            e || (e = t.style.display),
            "none" === e
          );
        }
        var Rl,
          Il =
            ((Rl = {
              day: ["d", "dd"],
              month: ["m", "mm"],
              year: ["y", "yy"],
              hours: ["h", "hh"],
              minutes: ["m", "mm"],
              seconds: ["s", "ss"],
              "am-pm": ["A/P", "AM/PM"],
              "day-of-week": ["ddd", "dddd"],
              era: ["e", "ee"],
              quarter: ["\\Qm", 'm\\"th quarter"'],
            }),
            function (t, e) {
              var n,
                i,
                r,
                o,
                a,
                s,
                l,
                c = e || {},
                d = dl(t),
                u = [],
                p = { name: "" },
                h = "",
                f = 0,
                b = {},
                m = [],
                g = c.dense ? [] : {},
                v = { value: "" },
                _ = "",
                y = 0,
                M = [],
                O = -1,
                w = -1,
                A = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
                x = 0,
                z = {},
                C = [],
                k = {},
                S = [],
                T = 1,
                D = 1,
                L = [],
                q = { Names: [] },
                E = {},
                j = ["", ""],
                P = [],
                R = {},
                I = "",
                W = 0,
                N = !1,
                B = !1,
                F = 0;
              for (
                ul.lastIndex = 0,
                  d = d
                    .replace(/<!--([\s\S]*?)-->/gm, "")
                    .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
                (a = ul.exec(d));

              )
                switch ((a[3] = a[3].replace(/_.*$/, ""))) {
                  case "table":
                  case "工作表":
                    "/" === a[1]
                      ? (A.e.c >= A.s.c &&
                          A.e.r >= A.s.r &&
                          (g["!ref"] = Je(A)),
                        c.sheetRows > 0 &&
                          c.sheetRows <= A.e.r &&
                          ((g["!fullref"] = g["!ref"]),
                          (A.e.r = c.sheetRows - 1),
                          (g["!ref"] = Je(A))),
                        C.length && (g["!merges"] = C),
                        S.length && (g["!rows"] = S),
                        (r.name = r["名称"] || r.name),
                        "undefined" != typeof JSON && JSON.stringify(r),
                        m.push(r.name),
                        (b[r.name] = g),
                        (B = !1))
                      : "/" !== a[0].charAt(a[0].length - 2) &&
                        ((r = _t(a[0], !1)),
                        (O = w = -1),
                        (A.s.r = A.s.c = 1e7),
                        (A.e.r = A.e.c = 0),
                        (g = c.dense ? [] : {}),
                        (C = []),
                        (S = []),
                        (B = !0));
                    break;
                  case "table-row-group":
                    "/" === a[1] ? --x : ++x;
                    break;
                  case "table-row":
                  case "行":
                    if ("/" === a[1]) {
                      (O += T), (T = 1);
                      break;
                    }
                    if (
                      ((o = _t(a[0], !1))["行号"]
                        ? (O = o["行号"] - 1)
                        : -1 == O && (O = 0),
                      (T = +o["number-rows-repeated"] || 1) < 10)
                    )
                      for (F = 0; F < T; ++F)
                        x > 0 && (S[O + F] = { level: x });
                    w = -1;
                    break;
                  case "covered-table-cell":
                    "/" !== a[1] && ++w,
                      c.sheetStubs &&
                        (c.dense
                          ? (g[O] || (g[O] = []), (g[O][w] = { t: "z" }))
                          : (g[Ke({ r: O, c: w })] = { t: "z" })),
                      (_ = ""),
                      (M = []);
                    break;
                  case "table-cell":
                  case "数据":
                    if ("/" === a[0].charAt(a[0].length - 2))
                      ++w,
                        (v = _t(a[0], !1)),
                        (D = parseInt(v["number-columns-repeated"] || "1", 10)),
                        (s = { t: "z", v: null }),
                        v.formula &&
                          0 != c.cellFormula &&
                          (s.f = Ga(xt(v.formula))),
                        "string" == (v["数据类型"] || v["value-type"]) &&
                          ((s.t = "s"),
                          (s.v = xt(v["string-value"] || "")),
                          c.dense
                            ? (g[O] || (g[O] = []), (g[O][w] = s))
                            : (g[Ke({ r: O, c: w })] = s)),
                        (w += D - 1);
                    else if ("/" !== a[1]) {
                      D = 1;
                      var $ = T ? O + T - 1 : O;
                      if (
                        (++w > A.e.c && (A.e.c = w),
                        w < A.s.c && (A.s.c = w),
                        O < A.s.r && (A.s.r = O),
                        $ > A.e.r && (A.e.r = $),
                        (P = []),
                        (R = {}),
                        (s = {
                          t: (v = _t(a[0], !1))["数据类型"] || v["value-type"],
                          v: null,
                        }),
                        c.cellFormula)
                      )
                        if (
                          (v.formula && (v.formula = xt(v.formula)),
                          v["number-matrix-columns-spanned"] &&
                            v["number-matrix-rows-spanned"] &&
                            ((k = {
                              s: { r: O, c: w },
                              e: {
                                r:
                                  O +
                                  (parseInt(
                                    v["number-matrix-rows-spanned"],
                                    10
                                  ) || 0) -
                                  1,
                                c:
                                  w +
                                  (parseInt(
                                    v["number-matrix-columns-spanned"],
                                    10
                                  ) || 0) -
                                  1,
                              },
                            }),
                            (s.F = Je(k)),
                            L.push([k, s.F])),
                          v.formula)
                        )
                          s.f = Ga(v.formula);
                        else
                          for (F = 0; F < L.length; ++F)
                            O >= L[F][0].s.r &&
                              O <= L[F][0].e.r &&
                              w >= L[F][0].s.c &&
                              w <= L[F][0].e.c &&
                              (s.F = L[F][1]);
                      switch (
                        ((v["number-columns-spanned"] ||
                          v["number-rows-spanned"]) &&
                          ((k = {
                            s: { r: O, c: w },
                            e: {
                              r:
                                O +
                                (parseInt(v["number-rows-spanned"], 10) || 0) -
                                1,
                              c:
                                w +
                                (parseInt(v["number-columns-spanned"], 10) ||
                                  0) -
                                1,
                            },
                          }),
                          C.push(k)),
                        v["number-columns-repeated"] &&
                          (D = parseInt(v["number-columns-repeated"], 10)),
                        s.t)
                      ) {
                        case "boolean":
                          (s.t = "b"), (s.v = qt(v["boolean-value"]));
                          break;
                        case "float":
                        case "percentage":
                        case "currency":
                          (s.t = "n"), (s.v = parseFloat(v.value));
                          break;
                        case "date":
                          (s.t = "d"),
                            (s.v = tt(v["date-value"])),
                            c.cellDates || ((s.t = "n"), (s.v = G(s.v))),
                            (s.z = "m/d/yy");
                          break;
                        case "time":
                          (s.t = "n"), (s.v = Z(v["time-value"]) / 86400);
                          break;
                        case "number":
                          (s.t = "n"), (s.v = parseFloat(v["数据数值"]));
                          break;
                        default:
                          if ("string" !== s.t && "text" !== s.t && s.t)
                            throw new Error("Unsupported value type " + s.t);
                          (s.t = "s"),
                            null != v["string-value"] &&
                              ((_ = xt(v["string-value"])), (M = []));
                      }
                    } else {
                      if (
                        ((N = !1),
                        "s" === s.t &&
                          ((s.v = _ || ""),
                          M.length && (s.R = M),
                          (N = 0 == y)),
                        E.Target && (s.l = E),
                        P.length > 0 && ((s.c = P), (P = [])),
                        _ && !1 !== c.cellText && (s.w = _),
                        (!N || c.sheetStubs) &&
                          !(c.sheetRows && c.sheetRows <= O))
                      )
                        for (var H = 0; H < T; ++H) {
                          if (
                            ((D = parseInt(
                              v["number-columns-repeated"] || "1",
                              10
                            )),
                            c.dense)
                          )
                            for (
                              g[O + H] || (g[O + H] = []),
                                g[O + H][w] = 0 == H ? s : nt(s);
                              --D > 0;

                            )
                              g[O + H][w + D] = nt(s);
                          else
                            for (g[Ke({ r: O + H, c: w })] = s; --D > 0; )
                              g[Ke({ r: O + H, c: w + D })] = nt(s);
                          A.e.c <= w && (A.e.c = w);
                        }
                      (w +=
                        (D = parseInt(
                          v["number-columns-repeated"] || "1",
                          10
                        )) - 1),
                        (D = 0),
                        (s = {}),
                        (_ = ""),
                        (M = []);
                    }
                    E = {};
                    break;
                  case "document":
                  case "document-content":
                  case "电子表格文档":
                  case "spreadsheet":
                  case "主体":
                  case "scripts":
                  case "styles":
                  case "font-face-decls":
                    if ("/" === a[1]) {
                      if ((n = u.pop())[0] !== a[3]) throw "Bad state: " + n;
                    } else
                      "/" !== a[0].charAt(a[0].length - 2) &&
                        u.push([a[3], !0]);
                    break;
                  case "annotation":
                    if ("/" === a[1]) {
                      if ((n = u.pop())[0] !== a[3]) throw "Bad state: " + n;
                      (R.t = _), M.length && (R.R = M), (R.a = I), P.push(R);
                    } else
                      "/" !== a[0].charAt(a[0].length - 2) &&
                        u.push([a[3], !1]);
                    (I = ""), (W = 0), (_ = ""), (y = 0), (M = []);
                    break;
                  case "creator":
                    "/" === a[1]
                      ? (I = d.slice(W, a.index))
                      : (W = a.index + a[0].length);
                    break;
                  case "meta":
                  case "元数据":
                  case "settings":
                  case "config-item-set":
                  case "config-item-map-indexed":
                  case "config-item-map-entry":
                  case "config-item-map-named":
                  case "shapes":
                  case "frame":
                  case "text-box":
                  case "image":
                  case "data-pilot-tables":
                  case "list-style":
                  case "form":
                  case "dde-links":
                  case "event-listeners":
                  case "chart":
                    if ("/" === a[1]) {
                      if ((n = u.pop())[0] !== a[3]) throw "Bad state: " + n;
                    } else
                      "/" !== a[0].charAt(a[0].length - 2) &&
                        u.push([a[3], !1]);
                    (_ = ""), (y = 0), (M = []);
                    break;
                  case "scientific-number":
                  case "currency-symbol":
                  case "currency-style":
                    break;
                  case "number-style":
                  case "percentage-style":
                  case "date-style":
                  case "time-style":
                    if ("/" === a[1]) {
                      if (((z[p.name] = h), (n = u.pop())[0] !== a[3]))
                        throw "Bad state: " + n;
                    } else
                      "/" !== a[0].charAt(a[0].length - 2) &&
                        ((h = ""), (p = _t(a[0], !1)), u.push([a[3], !0]));
                    break;
                  case "script":
                  case "libraries":
                  case "automatic-styles":
                  case "master-styles":
                    break;
                  case "default-style":
                  case "page-layout":
                  case "style":
                  case "map":
                  case "font-face":
                  case "paragraph-properties":
                  case "table-properties":
                  case "table-column-properties":
                  case "table-row-properties":
                  case "table-cell-properties":
                    break;
                  case "number":
                    switch (u[u.length - 1][0]) {
                      case "time-style":
                      case "date-style":
                        (i = _t(a[0], !1)),
                          (h += Rl[a[3]]["long" === i.style ? 1 : 0]);
                    }
                    break;
                  case "fraction":
                    break;
                  case "day":
                  case "month":
                  case "year":
                  case "era":
                  case "day-of-week":
                  case "week-of-year":
                  case "quarter":
                  case "hours":
                  case "minutes":
                  case "seconds":
                  case "am-pm":
                    switch (u[u.length - 1][0]) {
                      case "time-style":
                      case "date-style":
                        (i = _t(a[0], !1)),
                          (h += Rl[a[3]]["long" === i.style ? 1 : 0]);
                    }
                    break;
                  case "boolean-style":
                  case "boolean":
                  case "text-style":
                    break;
                  case "text":
                    if ("/>" === a[0].slice(-2)) break;
                    if ("/" === a[1])
                      switch (u[u.length - 1][0]) {
                        case "number-style":
                        case "date-style":
                        case "time-style":
                          h += d.slice(f, a.index);
                      }
                    else f = a.index + a[0].length;
                    break;
                  case "named-range":
                    j = Ka((i = _t(a[0], !1))["cell-range-address"]);
                    var Y = { Name: i.name, Ref: j[0] + "!" + j[1] };
                    B && (Y.Sheet = m.length), q.Names.push(Y);
                    break;
                  case "text-content":
                  case "text-properties":
                  case "embedded-text":
                    break;
                  case "body":
                  case "电子表格":
                  case "forms":
                  case "table-column":
                  case "table-header-rows":
                  case "table-rows":
                  case "table-column-group":
                  case "table-header-columns":
                  case "table-columns":
                  case "null-date":
                  case "graphic-properties":
                  case "calculation-settings":
                  case "named-expressions":
                  case "label-range":
                  case "label-ranges":
                  case "named-expression":
                  case "sort":
                  case "sort-by":
                  case "sort-groups":
                  case "tab":
                  case "line-break":
                  case "span":
                    break;
                  case "p":
                  case "文本串":
                    if ("/" !== a[1] || (v && v["string-value"]))
                      _t(a[0], !1), (y = a.index + a[0].length);
                    else {
                      var U =
                        ((l = void 0),
                        (l = d
                          .slice(y, a.index)
                          .replace(/[\t\r\n]/g, " ")
                          .trim()
                          .replace(/ +/g, " ")
                          .replace(/<text:s\/>/g, " ")
                          .replace(
                            /<text:s text:c="(\d+)"\/>/g,
                            function (t, e) {
                              return Array(parseInt(e, 10) + 1).join(" ");
                            }
                          )
                          .replace(/<text:tab[^>]*\/>/g, "\t")
                          .replace(/<text:line-break\/>/g, "\n")),
                        [xt(l.replace(/<[^>]*>/g, ""))]);
                      _ = (_.length > 0 ? _ + "\n" : "") + U[0];
                    }
                    break;
                  case "s":
                    break;
                  case "database-range":
                    if ("/" === a[1]) break;
                    try {
                      b[(j = Ka(_t(a[0])["target-range-address"]))[0]][
                        "!autofilter"
                      ] = { ref: j[1] };
                    } catch (t) {}
                    break;
                  case "date":
                  case "object":
                    break;
                  case "title":
                  case "标题":
                  case "desc":
                  case "binary-data":
                  case "table-source":
                  case "scenario":
                  case "iteration":
                  case "content-validations":
                  case "content-validation":
                  case "help-message":
                  case "error-message":
                  case "database-ranges":
                  case "filter":
                  case "filter-and":
                  case "filter-or":
                  case "filter-condition":
                  case "list-level-style-bullet":
                  case "list-level-style-number":
                  case "list-level-properties":
                    break;
                  case "sender-firstname":
                  case "sender-lastname":
                  case "sender-initials":
                  case "sender-title":
                  case "sender-position":
                  case "sender-email":
                  case "sender-phone-private":
                  case "sender-fax":
                  case "sender-company":
                  case "sender-phone-work":
                  case "sender-street":
                  case "sender-city":
                  case "sender-postal-code":
                  case "sender-country":
                  case "sender-state-or-province":
                  case "author-name":
                  case "author-initials":
                  case "chapter":
                  case "file-name":
                  case "template-name":
                  case "sheet-name":
                  case "event-listener":
                    break;
                  case "initial-creator":
                  case "creation-date":
                  case "print-date":
                  case "generator":
                  case "document-statistic":
                  case "user-defined":
                  case "editing-duration":
                  case "editing-cycles":
                  case "config-item":
                  case "page-number":
                  case "page-count":
                  case "time":
                  case "cell-range-source":
                  case "detective":
                  case "operation":
                  case "highlighted-range":
                    break;
                  case "data-pilot-table":
                  case "source-cell-range":
                  case "source-service":
                  case "data-pilot-field":
                  case "data-pilot-level":
                  case "data-pilot-subtotals":
                  case "data-pilot-subtotal":
                  case "data-pilot-members":
                  case "data-pilot-member":
                  case "data-pilot-display-info":
                  case "data-pilot-sort-info":
                  case "data-pilot-layout-info":
                  case "data-pilot-field-reference":
                  case "data-pilot-groups":
                  case "data-pilot-group":
                  case "data-pilot-group-member":
                  case "rect":
                    break;
                  case "dde-connection-decls":
                  case "dde-connection-decl":
                  case "dde-link":
                  case "dde-source":
                  case "properties":
                  case "property":
                    break;
                  case "a":
                    if ("/" !== a[1]) {
                      if (!(E = _t(a[0], !1)).href) break;
                      (E.Target = E.href),
                        delete E.href,
                        "#" == E.Target.charAt(0) &&
                          E.Target.indexOf(".") > -1 &&
                          ((j = Ka(E.Target.slice(1))),
                          (E.Target = "#" + j[0] + "!" + j[1]));
                    }
                    break;
                  case "table-protection":
                  case "data-pilot-grand-total":
                  case "office-document-common-attrs":
                    break;
                  default:
                    switch (a[2]) {
                      case "dc:":
                      case "calcext:":
                      case "loext:":
                      case "ooo:":
                      case "chartooo:":
                      case "draw:":
                      case "style:":
                      case "chart:":
                      case "form:":
                      case "uof:":
                      case "表:":
                      case "字:":
                        break;
                      default:
                        if (c.WTF) throw new Error(a);
                    }
                }
              var X = { Sheets: b, SheetNames: m, Workbook: q };
              return c.bookSheets && delete X.Sheets, X;
            });
        function Wl(t, e) {
          e = e || {};
          var n = !!ct(t, "objectdata");
          n &&
            (function (t, e) {
              for (var n, i, r = dl(t); (n = ul.exec(r)); )
                switch (n[3]) {
                  case "manifest":
                    break;
                  case "file-entry":
                    if (
                      "/" == (i = _t(n[0], !1)).path &&
                      "application/vnd.oasis.opendocument.spreadsheet" !==
                        i.type
                    )
                      throw new Error("This OpenDocument is not a spreadsheet");
                    break;
                  case "encryption-data":
                  case "algorithm":
                  case "start-key-generation":
                  case "key-derivation":
                    throw new Error("Unsupported ODS Encryption");
                  default:
                    if (e && e.WTF) throw n;
                }
            })(ut(t, "META-INF/manifest.xml"), e);
          var i = pt(t, "content.xml");
          if (!i)
            throw new Error(
              "Missing content.xml in " + (n ? "ODS" : "UOF") + " file"
            );
          var r = Il(n ? i : Et(i), e);
          return ct(t, "meta.xml") && (r.Props = ni(ut(t, "meta.xml"))), r;
        }
        function Nl(t, e) {
          return Il(t, e);
        }
        var Bl = (function () {
            var t =
              "<office:document-styles " +
              Kt({
                "xmlns:office":
                  "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table":
                  "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style":
                  "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw":
                  "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo":
                  "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:number":
                  "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:svg":
                  "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "office:version": "1.2",
              }) +
              "></office:document-styles>";
            return function () {
              return ft + t;
            };
          })(),
          Fl = (function () {
            var t = "          <table:table-cell />\n",
              e = function (e, n, i) {
                var r = [];
                r.push(
                  '      <table:table table:name="' +
                    kt(n.SheetNames[i]) +
                    '">\n'
                );
                var o = 0,
                  a = 0,
                  s = Ze(e["!ref"]),
                  l = e["!merges"] || [],
                  c = 0,
                  d = Array.isArray(e);
                for (o = 0; o < s.s.r; ++o)
                  r.push("        <table:table-row></table:table-row>\n");
                for (; o <= s.e.r; ++o) {
                  for (
                    r.push("        <table:table-row>\n"), a = 0;
                    a < s.s.c;
                    ++a
                  )
                    r.push(t);
                  for (; a <= s.e.c; ++a) {
                    var u = !1,
                      p = {},
                      h = "";
                    for (c = 0; c != l.length; ++c)
                      if (
                        !(
                          l[c].s.c > a ||
                          l[c].s.r > o ||
                          l[c].e.c < a ||
                          l[c].e.r < o
                        )
                      ) {
                        (l[c].s.c == a && l[c].s.r == o) || (u = !0),
                          (p["table:number-columns-spanned"] =
                            l[c].e.c - l[c].s.c + 1),
                          (p["table:number-rows-spanned"] =
                            l[c].e.r - l[c].s.r + 1);
                        break;
                      }
                    if (u) r.push("          <table:covered-table-cell/>\n");
                    else {
                      var f = Ke({ r: o, c: a }),
                        b = d ? (e[o] || [])[a] : e[f];
                      if (
                        b &&
                        b.f &&
                        ((p["table:formula"] = kt(
                          (
                            "of:=" +
                            b.f
                              .replace(Qo, "$1[.$2$3$4$5]")
                              .replace(/\]:\[/g, ":")
                          )
                            .replace(/;/g, "|")
                            .replace(/,/g, ";")
                        )),
                        b.F && b.F.slice(0, f.length) == f)
                      ) {
                        var m = Ze(b.F);
                        (p["table:number-matrix-columns-spanned"] =
                          m.e.c - m.s.c + 1),
                          (p["table:number-matrix-rows-spanned"] =
                            m.e.r - m.s.r + 1);
                      }
                      if (b) {
                        switch (b.t) {
                          case "b":
                            (h = b.v ? "TRUE" : "FALSE"),
                              (p["office:value-type"] = "boolean"),
                              (p["office:boolean-value"] = b.v
                                ? "true"
                                : "false");
                            break;
                          case "n":
                            (h = b.w || String(b.v || 0)),
                              (p["office:value-type"] = "float"),
                              (p["office:value"] = b.v || 0);
                            break;
                          case "s":
                          case "str":
                            (h = b.v), (p["office:value-type"] = "string");
                            break;
                          case "d":
                            (h = b.w || tt(b.v).toISOString()),
                              (p["office:value-type"] = "date"),
                              (p["office:date-value"] = tt(b.v).toISOString()),
                              (p["table:style-name"] = "ce1");
                            break;
                          default:
                            r.push(t);
                            continue;
                        }
                        var g = kt(h)
                          .replace(/  +/g, function (t) {
                            return '<text:s text:c="' + t.length + '"/>';
                          })
                          .replace(/\t/g, "<text:tab/>")
                          .replace(/\n/g, "<text:line-break/>")
                          .replace(/^ /, "<text:s/>")
                          .replace(/ $/, "<text:s/>");
                        if (b.l && b.l.Target) {
                          var v = b.l.Target;
                          g = Zt("text:a", g, {
                            "xlink:href": (v =
                              "#" == v.charAt(0)
                                ? "#" + v.slice(1).replace(/\./, "!")
                                : v),
                          });
                        }
                        r.push(
                          "          " +
                            Zt("table:table-cell", Zt("text:p", g, {}), p) +
                            "\n"
                        );
                      } else r.push(t);
                    }
                  }
                  r.push("        </table:table-row>\n");
                }
                return r.push("      </table:table>\n"), r.join("");
              };
            return function (t, n) {
              var i = [ft],
                r = Kt({
                  "xmlns:office":
                    "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                  "xmlns:table":
                    "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                  "xmlns:style":
                    "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                  "xmlns:text":
                    "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                  "xmlns:draw":
                    "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                  "xmlns:fo":
                    "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                  "xmlns:meta":
                    "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                  "xmlns:number":
                    "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                  "xmlns:presentation":
                    "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                  "xmlns:svg":
                    "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                  "xmlns:chart":
                    "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                  "xmlns:dr3d":
                    "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                  "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                  "xmlns:form":
                    "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                  "xmlns:script":
                    "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                  "xmlns:ooo": "http://openoffice.org/2004/office",
                  "xmlns:ooow": "http://openoffice.org/2004/writer",
                  "xmlns:oooc": "http://openoffice.org/2004/calc",
                  "xmlns:dom": "http://www.w3.org/2001/xml-events",
                  "xmlns:xforms": "http://www.w3.org/2002/xforms",
                  "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                  "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                  "xmlns:rpt": "http://openoffice.org/2005/report",
                  "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                  "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                  "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                  "xmlns:tableooo": "http://openoffice.org/2009/table",
                  "xmlns:drawooo": "http://openoffice.org/2010/draw",
                  "xmlns:calcext":
                    "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                  "xmlns:loext":
                    "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                  "xmlns:field":
                    "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                  "xmlns:formx":
                    "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                  "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                  "office:version": "1.2",
                }),
                o = Kt({
                  "xmlns:config":
                    "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                  "office:mimetype":
                    "application/vnd.oasis.opendocument.spreadsheet",
                });
              "fods" == n.bookType
                ? i.push("<office:document" + r + o + ">\n")
                : i.push("<office:document-content" + r + ">\n"),
                (function (t) {
                  t.push(" <office:automatic-styles>\n"),
                    t.push(
                      '  <number:date-style style:name="N37" number:automatic-order="true">\n'
                    ),
                    t.push('   <number:month number:style="long"/>\n'),
                    t.push("   <number:text>/</number:text>\n"),
                    t.push('   <number:day number:style="long"/>\n'),
                    t.push("   <number:text>/</number:text>\n"),
                    t.push("   <number:year/>\n"),
                    t.push("  </number:date-style>\n"),
                    t.push(
                      '  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'
                    ),
                    t.push(" </office:automatic-styles>\n");
                })(i),
                i.push("  <office:body>\n"),
                i.push("    <office:spreadsheet>\n");
              for (var a = 0; a != t.SheetNames.length; ++a)
                i.push(e(t.Sheets[t.SheetNames[a]], t, a));
              return (
                i.push("    </office:spreadsheet>\n"),
                i.push("  </office:body>\n"),
                "fods" == n.bookType
                  ? i.push("</office:document>")
                  : i.push("</office:document-content>"),
                i.join("")
              );
            };
          })();
        function $l(t, e) {
          if ("fods" == e.bookType) return Fl(t, e);
          var n = new at(),
            i = "",
            r = [],
            o = [];
          return (
            (i = "mimetype"),
            n.file(i, "application/vnd.oasis.opendocument.spreadsheet"),
            (i = "content.xml"),
            n.file(i, Fl(t, e)),
            r.push([i, "text/xml"]),
            o.push([i, "ContentFile"]),
            (i = "styles.xml"),
            n.file(i, Bl(t, e)),
            r.push([i, "text/xml"]),
            o.push([i, "StylesFile"]),
            (i = "meta.xml"),
            n.file(i, Qn()),
            r.push([i, "text/xml"]),
            o.push([i, "MetadataFile"]),
            (i = "manifest.rdf"),
            n.file(
              i,
              (function (t) {
                var e = [ft];
                e.push(
                  '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n'
                );
                for (var n = 0; n != t.length; ++n)
                  e.push(Zn(t[n][0], t[n][1])),
                    e.push(
                      [
                        '  <rdf:Description rdf:about="">\n',
                        '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
                          t[n][0] +
                          '"/>\n',
                        "  </rdf:Description>\n",
                      ].join("")
                    );
                return (
                  e.push(Zn("", "Document", "pkg")),
                  e.push("</rdf:RDF>"),
                  e.join("")
                );
              })(o)
            ),
            r.push([i, "application/rdf+xml"]),
            (i = "META-INF/manifest.xml"),
            n.file(
              i,
              (function (t) {
                var e = [ft];
                e.push(
                  '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'
                ),
                  e.push(
                    '  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n'
                  );
                for (var n = 0; n < t.length; ++n)
                  e.push(
                    '  <manifest:file-entry manifest:full-path="' +
                      t[n][0] +
                      '" manifest:media-type="' +
                      t[n][1] +
                      '"/>\n'
                  );
                return e.push("</manifest:manifest>"), e.join("");
              })(r)
            ),
            n
          );
        }
        function Hl(t) {
          return function (e, n) {
            var i = (function (t, e) {
              if (!e) return 0;
              var n = t.SheetNames.indexOf(e);
              if (-1 == n) throw new Error("Sheet not found: " + e);
              return n;
            })(e, n.sheet);
            return t.from_sheet(e.Sheets[e.SheetNames[i]], n, e);
          };
        }
        var Yl = Hl(El),
          Ul = Hl({ from_sheet: Oc }),
          Xl = Hl(xr),
          Vl = Hl(zr),
          Gl = Hl(kr),
          Kl = Hl(no),
          Zl = Hl({ from_sheet: wc }),
          Jl = Hl(Ar),
          Ql = Hl(Cr);
        function tc(t) {
          return function (e) {
            for (var n = 0; n != t.length; ++n) {
              var i = t[n];
              void 0 === e[i[0]] && (e[i[0]] = i[1]),
                "n" === i[2] && (e[i[0]] = Number(e[i[0]]));
            }
          };
        }
        var ec = tc([
            ["cellNF", !1],
            ["cellHTML", !0],
            ["cellFormula", !0],
            ["cellStyles", !1],
            ["cellText", !0],
            ["cellDates", !1],
            ["sheetStubs", !1],
            ["sheetRows", 0, "n"],
            ["bookDeps", !1],
            ["bookSheets", !1],
            ["bookProps", !1],
            ["bookFiles", !1],
            ["bookVBA", !1],
            ["password", ""],
            ["WTF", !1],
          ]),
          nc = tc([
            ["cellDates", !1],
            ["bookSST", !1],
            ["bookType", "xlsx"],
            ["compression", !1],
            ["WTF", !1],
          ]);
        function ic(t, e, n, i, r, o, a, s, l, c, d, u) {
          try {
            o[i] = Xn(pt(t, n, !0), e);
            var p,
              h = ut(t, e);
            switch (s) {
              case "sheet":
                p = (function (t, e, n, i, r, o, a, s) {
                  return ".bin" === e.slice(-4)
                    ? (function (t, e, n, i, r, o, a) {
                        if (!t) return t;
                        var s = e || {};
                        i || (i = { "!id": {} });
                        var l,
                          c,
                          d,
                          u,
                          p,
                          h,
                          f,
                          b,
                          m,
                          g,
                          v = s.dense ? [] : {},
                          _ = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
                          y = !1,
                          M = !1,
                          O = [];
                        (s.biff = 12), (s["!row"] = 0);
                        var w = 0,
                          A = !1,
                          x = [],
                          z = {},
                          C = s.supbooks || r.supbooks || [[]];
                        if (
                          ((C.sharedf = z),
                          (C.arrayf = x),
                          (C.SheetNames =
                            r.SheetNames ||
                            r.Sheets.map(function (t) {
                              return t.name;
                            })),
                          !s.supbooks && ((s.supbooks = C), r.Names))
                        )
                          for (var k = 0; k < r.Names.length; ++k)
                            C[0][k + 1] = r.Names[k];
                        var S = [],
                          T = [],
                          D = !1;
                        if (
                          (Re(
                            t,
                            function (t, e, k) {
                              if (!M)
                                switch (k) {
                                  case 148:
                                    l = t;
                                    break;
                                  case 0:
                                    (c = t),
                                      s.sheetRows &&
                                        s.sheetRows <= c.r &&
                                        (M = !0),
                                      (m = Ye((p = c.r))),
                                      (s["!row"] = c.r),
                                      (t.hidden || t.hpt || null != t.level) &&
                                        (t.hpt && (t.hpx = fo(t.hpt)),
                                        (T[t.r] = t));
                                    break;
                                  case 2:
                                  case 3:
                                  case 4:
                                  case 5:
                                  case 6:
                                  case 7:
                                  case 8:
                                  case 9:
                                  case 10:
                                  case 11:
                                    switch (((d = { t: t[2] }), t[2])) {
                                      case "n":
                                        d.v = t[1];
                                        break;
                                      case "s":
                                        (b = Za[t[1]]),
                                          (d.v = b.t),
                                          (d.r = b.r);
                                        break;
                                      case "b":
                                        d.v = !!t[1];
                                        break;
                                      case "e":
                                        (d.v = t[1]),
                                          !1 !== s.cellText && (d.w = zn[d.v]);
                                        break;
                                      case "str":
                                        (d.t = "s"), (d.v = t[1]);
                                    }
                                    if (
                                      ((u = a.CellXf[t[0].iStyleRef]) &&
                                        rs(d, u.numFmtId, null, s, o, a),
                                      (h = t[0].c),
                                      s.dense
                                        ? (v[p] || (v[p] = []), (v[p][h] = d))
                                        : (v[Xe(h) + m] = d),
                                      s.cellFormula)
                                    ) {
                                      for (A = !1, w = 0; w < x.length; ++w) {
                                        var L = x[w];
                                        c.r >= L[0].s.r &&
                                          c.r <= L[0].e.r &&
                                          h >= L[0].s.c &&
                                          h <= L[0].e.c &&
                                          ((d.F = Je(L[0])), (A = !0));
                                      }
                                      !A && t.length > 3 && (d.f = t[3]);
                                    }
                                    if (
                                      (_.s.r > c.r && (_.s.r = c.r),
                                      _.s.c > h && (_.s.c = h),
                                      _.e.r < c.r && (_.e.r = c.r),
                                      _.e.c < h && (_.e.c = h),
                                      s.cellDates &&
                                        u &&
                                        "n" == d.t &&
                                        q.is_date(q._table[u.numFmtId]))
                                    ) {
                                      var E = q.parse_date_code(d.v);
                                      E &&
                                        ((d.t = "d"),
                                        (d.v = new Date(
                                          E.y,
                                          E.m - 1,
                                          E.d,
                                          E.H,
                                          E.M,
                                          E.S,
                                          E.u
                                        )));
                                    }
                                    break;
                                  case 1:
                                    if (!s.sheetStubs || y) break;
                                    (d = { t: "z", v: void 0 }),
                                      (h = t[0].c),
                                      s.dense
                                        ? (v[p] || (v[p] = []), (v[p][h] = d))
                                        : (v[Xe(h) + m] = d),
                                      _.s.r > c.r && (_.s.r = c.r),
                                      _.s.c > h && (_.s.c = h),
                                      _.e.r < c.r && (_.e.r = c.r),
                                      _.e.c < h && (_.e.c = h);
                                    break;
                                  case 176:
                                    O.push(t);
                                    break;
                                  case 494:
                                    var j = i["!id"][t.relId];
                                    for (
                                      j
                                        ? ((t.Target = j.Target),
                                          t.loc && (t.Target += "#" + t.loc),
                                          (t.Rel = j))
                                        : "" == t.relId &&
                                          (t.Target = "#" + t.loc),
                                        p = t.rfx.s.r;
                                      p <= t.rfx.e.r;
                                      ++p
                                    )
                                      for (h = t.rfx.s.c; h <= t.rfx.e.c; ++h)
                                        s.dense
                                          ? (v[p] || (v[p] = []),
                                            v[p][h] ||
                                              (v[p][h] = { t: "z", v: void 0 }),
                                            (v[p][h].l = t))
                                          : ((f = Ke({ c: h, r: p })),
                                            v[f] ||
                                              (v[f] = { t: "z", v: void 0 }),
                                            (v[f].l = t));
                                    break;
                                  case 426:
                                    if (!s.cellFormula) break;
                                    x.push(t),
                                      ((g = s.dense
                                        ? v[p][h]
                                        : v[Xe(h) + m]).f = Pa(
                                        t[1],
                                        0,
                                        { r: c.r, c: h },
                                        C,
                                        s
                                      )),
                                      (g.F = Je(t[0]));
                                    break;
                                  case 427:
                                    if (!s.cellFormula) break;
                                    (z[Ke(t[0].s)] = t[1]),
                                      ((g = s.dense
                                        ? v[p][h]
                                        : v[Xe(h) + m]).f = Pa(
                                        t[1],
                                        0,
                                        { r: c.r, c: h },
                                        C,
                                        s
                                      ));
                                    break;
                                  case 60:
                                    if (!s.cellStyles) break;
                                    for (; t.e >= t.s; )
                                      (S[t.e--] = {
                                        width: t.w / 256,
                                        hidden: !!(1 & t.flags),
                                      }),
                                        D || ((D = !0), uo(t.w / 256)),
                                        po(S[t.e + 1]);
                                    break;
                                  case 161:
                                    v["!autofilter"] = { ref: Je(t) };
                                    break;
                                  case 476:
                                    v["!margins"] = t;
                                    break;
                                  case 147:
                                    r.Sheets[n] || (r.Sheets[n] = {}),
                                      t.name && (r.Sheets[n].CodeName = t.name);
                                    break;
                                  case 137:
                                    r.Views || (r.Views = [{}]),
                                      r.Views[0] || (r.Views[0] = {}),
                                      t.RTL && (r.Views[0].RTL = !0);
                                    break;
                                  case 485:
                                    break;
                                  case 175:
                                  case 644:
                                  case 625:
                                  case 562:
                                  case 396:
                                  case 1112:
                                  case 1146:
                                  case 471:
                                  case 1050:
                                  case 649:
                                  case 1105:
                                  case 49:
                                  case 589:
                                  case 607:
                                  case 564:
                                  case 1055:
                                  case 168:
                                  case 174:
                                  case 1180:
                                  case 499:
                                  case 64:
                                  case 1053:
                                  case 550:
                                  case 171:
                                  case 167:
                                  case 1177:
                                  case 169:
                                  case 1181:
                                  case 551:
                                  case 552:
                                  case 661:
                                  case 639:
                                  case 478:
                                  case 151:
                                  case 537:
                                  case 477:
                                  case 536:
                                  case 1103:
                                  case 680:
                                  case 1104:
                                  case 1024:
                                  case 152:
                                  case 663:
                                  case 535:
                                  case 678:
                                  case 504:
                                  case 1043:
                                  case 428:
                                  case 170:
                                  case 3072:
                                  case 50:
                                  case 2070:
                                  case 1045:
                                    break;
                                  case 35:
                                    y = !0;
                                    break;
                                  case 36:
                                    y = !1;
                                    break;
                                  case 37:
                                  case 38:
                                    break;
                                  default:
                                    if ((e || "").indexOf("Begin") > 0);
                                    else if ((e || "").indexOf("End") > 0);
                                    else if (!y || s.WTF)
                                      throw new Error(
                                        "Unexpected record " + k + " " + e
                                      );
                                }
                            },
                            s
                          ),
                          delete s.supbooks,
                          delete s["!row"],
                          !v["!ref"] &&
                            (_.s.r < 2e6 ||
                              (l &&
                                (l.e.r > 0 ||
                                  l.e.c > 0 ||
                                  l.s.r > 0 ||
                                  l.s.c > 0))) &&
                            (v["!ref"] = Je(l || _)),
                          s.sheetRows && v["!ref"])
                        ) {
                          var L = Qe(v["!ref"]);
                          s.sheetRows <= +L.e.r &&
                            ((L.e.r = s.sheetRows - 1),
                            L.e.r > _.e.r && (L.e.r = _.e.r),
                            L.e.r < L.s.r && (L.s.r = L.e.r),
                            L.e.c > _.e.c && (L.e.c = _.e.c),
                            L.e.c < L.s.c && (L.s.c = L.e.c),
                            (v["!fullref"] = v["!ref"]),
                            (v["!ref"] = Je(L)));
                        }
                        return (
                          O.length > 0 && (v["!merges"] = O),
                          S.length > 0 && (v["!cols"] = S),
                          T.length > 0 && (v["!rows"] = T),
                          v
                        );
                      })(t, i, n, r, o, a, s)
                    : (function (t, e, n, i, r, o, a) {
                        if (!t) return t;
                        var s = e.dense ? [] : {},
                          l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
                          c = "",
                          d = "",
                          u = t.match(ss);
                        u
                          ? ((c = t.slice(0, u.index)),
                            (d = t.slice(u.index + u[0].length)))
                          : (c = d = t);
                        var p = c.match(hs);
                        p && bs(p[0], 0, r, n);
                        var h = (
                          c.match(/<(?:\w*:)?dimension/) || { index: -1 }
                        ).index;
                        if (h > 0) {
                          var f = c.slice(h, h + 50).match(cs);
                          f &&
                            (function (t, e) {
                              var n = Qe(e);
                              n.s.r <= n.e.r &&
                                n.s.c <= n.e.c &&
                                n.s.r >= 0 &&
                                n.s.c >= 0 &&
                                (t["!ref"] = Je(n));
                            })(s, f[1]);
                        }
                        var b = c.match(fs);
                        b &&
                          b[1] &&
                          (function (t, e) {
                            (t.match(ms) || []).forEach(function (t) {
                              qt(_t(t).rightToLeft) &&
                                (e.Views || (e.Views = [{}]),
                                e.Views[0] || (e.Views[0] = {}),
                                (e.Views[0].RTL = !0));
                            });
                          })(b[1], r);
                        var m = [];
                        if (e.cellStyles) {
                          var g = c.match(ds);
                          g &&
                            (function (t, e) {
                              for (var n = !1, i = 0; i != e.length; ++i) {
                                var r = _t(e[i], !0);
                                r.hidden && (r.hidden = qt(r.hidden));
                                var o = parseInt(r.min, 10) - 1,
                                  a = parseInt(r.max, 10) - 1;
                                for (
                                  delete r.min,
                                    delete r.max,
                                    r.width = +r.width,
                                    !n && r.width && ((n = !0), uo(r.width)),
                                    po(r);
                                  o <= a;

                                )
                                  t[o++] = nt(r);
                              }
                            })(m, g);
                        }
                        u && xs(u[1], s, e, l, o, a);
                        var v = d.match(us);
                        v &&
                          (s["!autofilter"] = (function (t) {
                            return { ref: (t.match(/ref="([^"]*)"/) || [])[1] };
                          })(v[0]));
                        var _ = [],
                          y = d.match(as);
                        if (y)
                          for (h = 0; h != y.length; ++h)
                            _[h] = Qe(y[h].slice(y[h].indexOf('"') + 1));
                        var M = d.match(ls);
                        M &&
                          (function (t, e, n) {
                            for (
                              var i = Array.isArray(t), r = 0;
                              r != e.length;
                              ++r
                            ) {
                              var o = _t(Et(e[r]), !0);
                              if (!o.ref) return;
                              var a = ((n || {})["!id"] || [])[o.id];
                              a
                                ? ((o.Target = a.Target),
                                  o.location && (o.Target += "#" + o.location))
                                : ((o.Target = "#" + o.location),
                                  (a = {
                                    Target: o.Target,
                                    TargetMode: "Internal",
                                  })),
                                (o.Rel = a),
                                o.tooltip &&
                                  ((o.Tooltip = o.tooltip), delete o.tooltip);
                              for (
                                var s = Qe(o.ref), l = s.s.r;
                                l <= s.e.r;
                                ++l
                              )
                                for (var c = s.s.c; c <= s.e.c; ++c) {
                                  var d = Ke({ c: c, r: l });
                                  i
                                    ? (t[l] || (t[l] = []),
                                      t[l][c] ||
                                        (t[l][c] = { t: "z", v: void 0 }),
                                      (t[l][c].l = o))
                                    : (t[d] || (t[d] = { t: "z", v: void 0 }),
                                      (t[d].l = o));
                                }
                            }
                          })(s, M, i);
                        var O = d.match(ps);
                        if (
                          (O &&
                            (s["!margins"] = (function (t) {
                              var e = {};
                              return (
                                [
                                  "left",
                                  "right",
                                  "top",
                                  "bottom",
                                  "header",
                                  "footer",
                                ].forEach(function (n) {
                                  t[n] && (e[n] = parseFloat(t[n]));
                                }),
                                e
                              );
                            })(_t(O[0]))),
                          !s["!ref"] &&
                            l.e.c >= l.s.c &&
                            l.e.r >= l.s.r &&
                            (s["!ref"] = Je(l)),
                          e.sheetRows > 0 && s["!ref"])
                        ) {
                          var w = Qe(s["!ref"]);
                          e.sheetRows <= +w.e.r &&
                            ((w.e.r = e.sheetRows - 1),
                            w.e.r > l.e.r && (w.e.r = l.e.r),
                            w.e.r < w.s.r && (w.s.r = w.e.r),
                            w.e.c > l.e.c && (w.e.c = l.e.c),
                            w.e.c < w.s.c && (w.s.c = w.e.c),
                            (s["!fullref"] = s["!ref"]),
                            (s["!ref"] = Je(w)));
                        }
                        return (
                          m.length > 0 && (s["!cols"] = m),
                          _.length > 0 && (s["!merges"] = _),
                          s
                        );
                      })(t, i, n, r, o, a, s);
                })(h, e, r, l, o[i], c, d, u);
                break;
              case "chart":
                if (
                  !(p = (function (t, e, n, i, r, o, a, s) {
                    return ".bin" === e.slice(-4)
                      ? (function (t, e, n, i, r) {
                          if (!t) return t;
                          i || (i = { "!id": {} });
                          var o = {
                              "!type": "chart",
                              "!chart": null,
                              "!rel": "",
                            },
                            a = [],
                            s = !1;
                          return (
                            Re(
                              t,
                              function (t, i, l) {
                                switch (l) {
                                  case 550:
                                    o["!rel"] = t;
                                    break;
                                  case 651:
                                    r.Sheets[n] || (r.Sheets[n] = {}),
                                      t.name && (r.Sheets[n].CodeName = t.name);
                                    break;
                                  case 562:
                                  case 652:
                                  case 669:
                                  case 679:
                                  case 551:
                                  case 552:
                                  case 476:
                                  case 3072:
                                    break;
                                  case 35:
                                    s = !0;
                                    break;
                                  case 36:
                                    s = !1;
                                    break;
                                  case 37:
                                    a.push(i);
                                    break;
                                  case 38:
                                    a.pop();
                                    break;
                                  default:
                                    if ((i || "").indexOf("Begin") > 0)
                                      a.push(i);
                                    else if ((i || "").indexOf("End") > 0)
                                      a.pop();
                                    else if (!s || e.WTF)
                                      throw new Error(
                                        "Unexpected record " + l + " " + i
                                      );
                                }
                              },
                              e
                            ),
                            i["!id"][o["!rel"]] &&
                              (o["!chart"] = i["!id"][o["!rel"]]),
                            o
                          );
                        })(t, i, n, r, o)
                      : (function (t, e, n, i, r) {
                          if (!t) return t;
                          i || (i = { "!id": {} });
                          var o,
                            a = {
                              "!type": "chart",
                              "!chart": null,
                              "!rel": "",
                            },
                            s = t.match(hs);
                          return (
                            s && bs(s[0], 0, r, n),
                            (o = t.match(/drawing r:id="(.*?)"/)) &&
                              (a["!rel"] = o[1]),
                            i["!id"][a["!rel"]] &&
                              (a["!chart"] = i["!id"][a["!rel"]]),
                            a
                          );
                        })(t, 0, n, r, o);
                  })(h, e, r, l, o[i], c)) ||
                  !p["!chart"]
                )
                  break;
                var f = ht(p["!chart"].Target, e),
                  b = Un(f),
                  m = ht(
                    (function (t, e) {
                      if (!t) return "??";
                      var n = (t.match(/<c:chart [^>]*r:id="([^"]*)"/) || [
                        "",
                        "",
                      ])[1];
                      return e["!id"][n].Target;
                    })(pt(t, f, !0), Xn(pt(t, b, !0), f)),
                    f
                  ),
                  g = Un(m);
                p = (function (t, e, n, i, r, o) {
                  var a = o || { "!type": "chart" };
                  if (!t) return o;
                  var s = 0,
                    l = 0,
                    c = "A",
                    d = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
                  return (
                    (
                      t.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []
                    ).forEach(function (t) {
                      var e = (function (t) {
                        var e = [];
                        (
                          t.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []
                        ).forEach(function (t) {
                          var n = t.match(
                            /<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/
                          );
                          n && (e[+n[1]] = +n[2]);
                        });
                        var n = xt(
                          (t.match(
                            /<c:formatCode>([\s\S]*?)<\/c:formatCode>/
                          ) || ["", "General"])[1]
                        );
                        return [e, n];
                      })(t);
                      (d.s.r = d.s.c = 0),
                        (d.e.c = s),
                        (c = Xe(s)),
                        e[0].forEach(function (t, n) {
                          (a[c + Ye(n)] = { t: "n", v: t, z: e[1] }), (l = n);
                        }),
                        d.e.r < l && (d.e.r = l),
                        ++s;
                    }),
                    s > 0 && (a["!ref"] = Je(d)),
                    a
                  );
                })(pt(t, m, !0), 0, 0, Xn(pt(t, g, !0), m), 0, p);
                break;
              case "macro":
                (v = e), o[i], v.slice(-4), (p = { "!type": "macro" });
                break;
              case "dialog":
                p = (function (t, e, n, i, r, o, a, s) {
                  return e.slice(-4), { "!type": "dialog" };
                })(0, e, 0, 0, o[i]);
            }
            a[i] = p;
          } catch (t) {
            if (l.WTF) throw t;
          }
          var v;
        }
        function rc(t) {
          return "/" == t.charAt(0) ? t.slice(1) : t;
        }
        function oc(t, e) {
          if ((E(q), ec((e = e || {})), ct(t, "META-INF/manifest.xml")))
            return Wl(t, e);
          if (ct(t, "objectdata.xml")) return Wl(t, e);
          if (ct(t, "Index/Document.iwa"))
            throw new Error("Unsupported NUMBERS file");
          var n,
            i,
            r = (function (t) {
              for (var e = $(t.files), n = [], i = 0; i < e.length; ++i)
                "/" != e[i].slice(-1) && n.push(e[i]);
              return n.sort();
            })(t),
            o = (function (t) {
              var e = {
                workbooks: [],
                sheets: [],
                charts: [],
                dialogs: [],
                macros: [],
                rels: [],
                strs: [],
                comments: [],
                links: [],
                coreprops: [],
                extprops: [],
                custprops: [],
                themes: [],
                styles: [],
                calcchains: [],
                vba: [],
                drawings: [],
                TODO: [],
                xmlns: "",
              };
              if (!t || !t.match) return e;
              var n = {};
              if (
                ((t.match(mt) || []).forEach(function (t) {
                  var i = _t(t);
                  switch (i[0].replace(gt, "<")) {
                    case "<?xml":
                      break;
                    case "<Types":
                      e.xmlns =
                        i["xmlns" + (i[0].match(/<(\w+):/) || ["", ""])[1]];
                      break;
                    case "<Default":
                      n[i.Extension] = i.ContentType;
                      break;
                    case "<Override":
                      void 0 !== e[Nn[i.ContentType]] &&
                        e[Nn[i.ContentType]].push(i.PartName);
                  }
                }),
                e.xmlns !== ee.CT)
              )
                throw new Error("Unknown Namespace: " + e.xmlns);
              return (
                (e.calcchain = e.calcchains.length > 0 ? e.calcchains[0] : ""),
                (e.sst = e.strs.length > 0 ? e.strs[0] : ""),
                (e.style = e.styles.length > 0 ? e.styles[0] : ""),
                (e.defaults = n),
                delete e.calcchains,
                e
              );
            })(pt(t, "[Content_Types].xml")),
            a = !1;
          if (
            (0 === o.workbooks.length &&
              ut(t, (i = "xl/workbook.xml"), !0) &&
              o.workbooks.push(i),
            0 === o.workbooks.length)
          ) {
            if (!ut(t, (i = "xl/workbook.bin"), !0))
              throw new Error("Could not find workbook");
            o.workbooks.push(i), (a = !0);
          }
          "bin" == o.workbooks[0].slice(-3) && (a = !0);
          var s = {},
            l = {};
          if (!e.bookSheets && !e.bookProps) {
            if (((Za = []), o.sst))
              try {
                Za = (function (t, e, n) {
                  return ".bin" === e.slice(-4)
                    ? (function (t, e) {
                        var n = [],
                          i = !1;
                        return (
                          Re(t, function (t, r, o) {
                            switch (o) {
                              case 159:
                                (n.Count = t[0]), (n.Unique = t[1]);
                                break;
                              case 19:
                                n.push(t);
                                break;
                              case 160:
                                return !0;
                              case 35:
                                i = !0;
                                break;
                              case 36:
                                i = !1;
                                break;
                              default:
                                if (
                                  (r.indexOf("Begin") > 0 || r.indexOf("End"),
                                  !i || e.WTF)
                                )
                                  throw new Error(
                                    "Unexpected record " + o + " " + r
                                  );
                            }
                          }),
                          n
                        );
                      })(t, n)
                    : (function (t, e) {
                        var n = [],
                          i = "";
                        if (!t) return n;
                        var r = t.match(jr);
                        if (r) {
                          i = r[2].replace(Pr, "").split(Rr);
                          for (var o = 0; o != i.length; ++o) {
                            var a = Er(i[o].trim(), e);
                            null != a && (n[n.length] = a);
                          }
                          (r = _t(r[1])),
                            (n.Count = r.count),
                            (n.Unique = r.uniqueCount);
                        }
                        return n;
                      })(t, n);
                })(ut(t, rc(o.sst)), o.sst, e);
              } catch (t) {
                if (e.WTF) throw t;
              }
            e.cellStyles &&
              o.themes.length &&
              (s = (function (t, e, n) {
                return Bo(t, n);
              })(
                pt(t, o.themes[0].replace(/^\//, ""), !0) || "",
                o.themes[0],
                e
              )),
              o.style &&
                (l = (function (t, e, n, i) {
                  return ".bin" === e.slice(-4)
                    ? (function (t, e, n) {
                        var i = { NumberFmt: [] };
                        for (var r in q._table) i.NumberFmt[r] = q._table[r];
                        (i.CellXf = []), (i.Fonts = []);
                        var o = [],
                          a = !1;
                        return (
                          Re(t, function (t, r, s) {
                            switch (s) {
                              case 44:
                                (i.NumberFmt[t[0]] = t[1]), q.load(t[1], t[0]);
                                break;
                              case 43:
                                i.Fonts.push(t),
                                  null != t.color.theme &&
                                    e &&
                                    e.themeElements &&
                                    e.themeElements.clrScheme &&
                                    (t.color.rgb = ro(
                                      e.themeElements.clrScheme[t.color.theme]
                                        .rgb,
                                      t.color.tint || 0
                                    ));
                                break;
                              case 1025:
                              case 45:
                              case 46:
                                break;
                              case 47:
                                "BrtBeginCellXFs" == o[o.length - 1] &&
                                  i.CellXf.push(t);
                                break;
                              case 48:
                              case 507:
                              case 572:
                              case 475:
                                break;
                              case 1171:
                              case 2102:
                              case 1130:
                              case 512:
                              case 2095:
                              case 3072:
                                break;
                              case 35:
                                a = !0;
                                break;
                              case 36:
                                a = !1;
                                break;
                              case 37:
                                o.push(r);
                                break;
                              case 38:
                                o.pop();
                                break;
                              default:
                                if ((r || "").indexOf("Begin") > 0) o.push(r);
                                else if ((r || "").indexOf("End") > 0) o.pop();
                                else if (!a || n.WTF)
                                  throw new Error(
                                    "Unexpected record " + s + " " + r
                                  );
                            }
                          }),
                          i
                        );
                      })(t, n, i)
                    : wo(t, n, i);
                })(ut(t, rc(o.style)), o.style, s, e));
          }
          o.links.map(function (n) {
            return (function (t, e, n) {
              if (".bin" === e.slice(-4))
                return (function (t, e, n) {
                  if (!t) return t;
                  var i = n || {},
                    r = !1;
                  Re(
                    t,
                    function (t, e, n) {
                      switch (n) {
                        case 359:
                        case 363:
                        case 364:
                        case 366:
                        case 367:
                        case 368:
                        case 369:
                        case 370:
                        case 371:
                        case 472:
                        case 577:
                        case 578:
                        case 579:
                        case 580:
                        case 581:
                        case 582:
                        case 583:
                        case 584:
                        case 585:
                        case 586:
                        case 587:
                          break;
                        case 35:
                          r = !0;
                          break;
                        case 36:
                          r = !1;
                          break;
                        default:
                          if ((e || "").indexOf("Begin") > 0);
                          else if ((e || "").indexOf("End") > 0);
                          else if (!r || i.WTF)
                            throw new Error(
                              "Unexpected record " + n.toString(16) + " " + e
                            );
                      }
                    },
                    i
                  );
                })(t, 0, n);
            })(ut(t, rc(n)), n, e);
          });
          var c = (function (t, e, n) {
              return ".bin" === e.slice(-4)
                ? (function (t, e) {
                    var n = {
                        AppVersion: {},
                        WBProps: {},
                        WBView: [],
                        Sheets: [],
                        CalcPr: {},
                        xmlns: "",
                      },
                      i = [],
                      r = !1;
                    e || (e = {}), (e.biff = 12);
                    var o = [],
                      a = [[]];
                    return (
                      (a.SheetNames = []),
                      (a.XTI = []),
                      Re(
                        t,
                        function (t, s, l) {
                          switch (l) {
                            case 156:
                              a.SheetNames.push(t.name), n.Sheets.push(t);
                              break;
                            case 153:
                              n.WBProps = t;
                              break;
                            case 39:
                              null != t.Sheet && (e.SID = t.Sheet),
                                (t.Ref = Pa(t.Ptg, 0, null, a, e)),
                                delete e.SID,
                                delete t.Ptg,
                                o.push(t);
                              break;
                            case 1036:
                              break;
                            case 357:
                            case 358:
                            case 355:
                            case 667:
                              a[0].length ? a.push([l, t]) : (a[0] = [l, t]),
                                (a[a.length - 1].XTI = []);
                              break;
                            case 362:
                              0 === a.length && ((a[0] = []), (a[0].XTI = [])),
                                (a[a.length - 1].XTI =
                                  a[a.length - 1].XTI.concat(t)),
                                (a.XTI = a.XTI.concat(t));
                              break;
                            case 361:
                              break;
                            case 3072:
                            case 3073:
                            case 2071:
                            case 534:
                            case 677:
                            case 158:
                            case 157:
                            case 610:
                            case 2050:
                            case 155:
                            case 548:
                            case 676:
                            case 128:
                            case 665:
                            case 2128:
                            case 2125:
                            case 549:
                            case 2053:
                            case 596:
                            case 2076:
                            case 2075:
                            case 2082:
                            case 397:
                            case 154:
                            case 1117:
                            case 553:
                            case 2091:
                              break;
                            case 35:
                              i.push(s), (r = !0);
                              break;
                            case 36:
                              i.pop(), (r = !1);
                              break;
                            case 37:
                              i.push(s), (r = !0);
                              break;
                            case 38:
                              i.pop(), (r = !1);
                              break;
                            case 16:
                              break;
                            default:
                              if ((s || "").indexOf("Begin") > 0);
                              else if ((s || "").indexOf("End") > 0);
                              else if (
                                !r ||
                                (e.WTF &&
                                  "BrtACBegin" != i[i.length - 1] &&
                                  "BrtFRTBegin" != i[i.length - 1])
                              )
                                throw new Error(
                                  "Unexpected record " + l + " " + s
                                );
                          }
                        },
                        e
                      ),
                      Fs(n),
                      (n.Names = o),
                      (n.supbooks = a),
                      n
                    );
                  })(t, n)
                : (function (t, e) {
                    if (!t) throw new Error("Could not find file");
                    var n = {
                        AppVersion: {},
                        WBProps: {},
                        WBView: [],
                        Sheets: [],
                        CalcPr: {},
                        Names: [],
                        xmlns: "",
                      },
                      i = !1,
                      r = "xmlns",
                      o = {},
                      a = 0;
                    if (
                      (t.replace(mt, function (s, l) {
                        var c = _t(s);
                        switch (yt(c[0])) {
                          case "<?xml":
                            break;
                          case "<workbook":
                            s.match(Ys) &&
                              (r = "xmlns" + s.match(/<(\w+):/)[1]),
                              (n.xmlns = c[r]);
                            break;
                          case "</workbook>":
                            break;
                          case "<fileVersion":
                            delete c[0], (n.AppVersion = c);
                            break;
                          case "<fileVersion/>":
                          case "</fileVersion>":
                            break;
                          case "<fileSharing":
                          case "<fileSharing/>":
                            break;
                          case "<workbookPr":
                          case "<workbookPr/>":
                            Ps.forEach(function (t) {
                              if (null != c[t[0]])
                                switch (t[2]) {
                                  case "bool":
                                    n.WBProps[t[0]] = qt(c[t[0]]);
                                    break;
                                  case "int":
                                    n.WBProps[t[0]] = parseInt(c[t[0]], 10);
                                    break;
                                  default:
                                    n.WBProps[t[0]] = c[t[0]];
                                }
                            }),
                              c.codeName && (n.WBProps.CodeName = c.codeName);
                            break;
                          case "</workbookPr>":
                          case "<workbookProtection":
                          case "<workbookProtection/>":
                            break;
                          case "<bookViews":
                          case "<bookViews>":
                          case "</bookViews>":
                            break;
                          case "<workbookView":
                          case "<workbookView/>":
                            delete c[0], n.WBView.push(c);
                            break;
                          case "</workbookView>":
                            break;
                          case "<sheets":
                          case "<sheets>":
                          case "</sheets>":
                            break;
                          case "<sheet":
                            switch (c.state) {
                              case "hidden":
                                c.Hidden = 1;
                                break;
                              case "veryHidden":
                                c.Hidden = 2;
                                break;
                              default:
                                c.Hidden = 0;
                            }
                            delete c.state,
                              (c.name = xt(Et(c.name))),
                              delete c[0],
                              n.Sheets.push(c);
                            break;
                          case "</sheet>":
                            break;
                          case "<functionGroups":
                          case "<functionGroups/>":
                          case "<functionGroup":
                            break;
                          case "<externalReferences":
                          case "</externalReferences>":
                          case "<externalReferences>":
                          case "<externalReference":
                          case "<definedNames/>":
                            break;
                          case "<definedNames>":
                          case "<definedNames":
                            i = !0;
                            break;
                          case "</definedNames>":
                            i = !1;
                            break;
                          case "<definedName":
                            ((o = {}).Name = Et(c.name)),
                              c.comment && (o.Comment = c.comment),
                              c.localSheetId && (o.Sheet = +c.localSheetId),
                              qt(c.hidden || "0") && (o.Hidden = !0),
                              (a = l + s.length);
                            break;
                          case "</definedName>":
                            (o.Ref = xt(Et(t.slice(a, l)))), n.Names.push(o);
                            break;
                          case "<definedName/>":
                            break;
                          case "<calcPr":
                          case "<calcPr/>":
                            delete c[0], (n.CalcPr = c);
                            break;
                          case "</calcPr>":
                          case "<oleSize":
                            break;
                          case "<customWorkbookViews>":
                          case "</customWorkbookViews>":
                          case "<customWorkbookViews":
                            break;
                          case "<customWorkbookView":
                          case "</customWorkbookView>":
                            break;
                          case "<pivotCaches>":
                          case "</pivotCaches>":
                          case "<pivotCaches":
                          case "<pivotCache":
                            break;
                          case "<smartTagPr":
                          case "<smartTagPr/>":
                            break;
                          case "<smartTagTypes":
                          case "<smartTagTypes>":
                          case "</smartTagTypes>":
                          case "<smartTagType":
                            break;
                          case "<webPublishing":
                          case "<webPublishing/>":
                            break;
                          case "<fileRecoveryPr":
                          case "<fileRecoveryPr/>":
                            break;
                          case "<webPublishObjects>":
                          case "<webPublishObjects":
                          case "</webPublishObjects>":
                          case "<webPublishObject":
                            break;
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                          case "<extLst/>":
                            break;
                          case "<ext":
                            i = !0;
                            break;
                          case "</ext>":
                            i = !1;
                            break;
                          case "<ArchID":
                            break;
                          case "<AlternateContent":
                          case "<AlternateContent>":
                            i = !0;
                            break;
                          case "</AlternateContent>":
                            i = !1;
                            break;
                          case "<revisionPtr":
                            break;
                          default:
                            if (!i && e.WTF)
                              throw new Error(
                                "unrecognized " + c[0] + " in workbook"
                              );
                        }
                        return s;
                      }),
                      -1 === ee.main.indexOf(n.xmlns))
                    )
                      throw new Error("Unknown Namespace: " + n.xmlns);
                    return Fs(n), n;
                  })(t, n);
            })(ut(t, rc(o.workbooks[0])), o.workbooks[0], e),
            d = {},
            u = "";
          o.coreprops.length &&
            ((u = ut(t, rc(o.coreprops[0]), !0)) && (d = ni(u)),
            0 !== o.extprops.length &&
              (u = ut(t, rc(o.extprops[0]), !0)) &&
              (function (t, e, n) {
                var i = {};
                e || (e = {}),
                  (t = Et(t)),
                  oi.forEach(function (n) {
                    switch (n[2]) {
                      case "string":
                        e[n[1]] = (t.match(Ft(n[0])) || [])[1];
                        break;
                      case "bool":
                        e[n[1]] = "true" === (t.match(Ft(n[0])) || [])[1];
                        break;
                      case "raw":
                        var r = t.match(
                          new RegExp(
                            "<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"
                          )
                        );
                        r && r.length > 0 && (i[n[1]] = r[1]);
                    }
                  }),
                  i.HeadingPairs &&
                    i.TitlesOfParts &&
                    ai(i.HeadingPairs, i.TitlesOfParts, e, n);
              })(u, d, e));
          var p = {};
          (e.bookSheets && !e.bookProps) ||
            (0 !== o.custprops.length &&
              (u = pt(t, rc(o.custprops[0]), !0)) &&
              (p = (function (t, e) {
                var n = {},
                  i = "",
                  r = t.match(li);
                if (r)
                  for (var o = 0; o != r.length; ++o) {
                    var a = r[o],
                      s = _t(a);
                    switch (s[0]) {
                      case "<?xml":
                      case "<Properties":
                        break;
                      case "<property":
                        i = s.name;
                        break;
                      case "</property>":
                        i = null;
                        break;
                      default:
                        if (0 === a.indexOf("<vt:")) {
                          var l = a.split(">"),
                            c = l[0].slice(4),
                            d = l[1];
                          switch (c) {
                            case "lpstr":
                            case "bstr":
                            case "lpwstr":
                              n[i] = xt(d);
                              break;
                            case "bool":
                              n[i] = qt(d);
                              break;
                            case "i1":
                            case "i2":
                            case "i4":
                            case "i8":
                            case "int":
                            case "uint":
                              n[i] = parseInt(d, 10);
                              break;
                            case "r4":
                            case "r8":
                            case "decimal":
                              n[i] = parseFloat(d);
                              break;
                            case "filetime":
                            case "date":
                              n[i] = tt(d);
                              break;
                            case "cy":
                            case "error":
                              n[i] = xt(d);
                              break;
                            default:
                              if ("/" == c.slice(-1)) break;
                              e.WTF;
                          }
                        } else if ("</" === a.slice(0, 2));
                        else if (e.WTF) throw new Error(a);
                    }
                  }
                return n;
              })(u, e)));
          var h = {};
          if (
            (e.bookSheets || e.bookProps) &&
            (c.Sheets
              ? (n = c.Sheets.map(function (t) {
                  return t.name;
                }))
              : d.Worksheets && d.SheetNames.length > 0 && (n = d.SheetNames),
            e.bookProps && ((h.Props = d), (h.Custprops = p)),
            e.bookSheets && void 0 !== n && (h.SheetNames = n),
            e.bookSheets ? h.SheetNames : e.bookProps)
          )
            return h;
          n = {};
          var f = {};
          e.bookDeps &&
            o.calcchain &&
            (f = (function (t, e, n) {
              return ".bin" === e.slice(-4)
                ? (function (t, e, n) {
                    var i = [];
                    return (
                      Re(t, function (t, e, n) {
                        switch (n) {
                          case 63:
                            i.push(t);
                            break;
                          default:
                            if ((e || "").indexOf("Begin") > 0);
                            else if (!((e || "").indexOf("End") > 0))
                              throw new Error(
                                "Unexpected record " + n + " " + e
                              );
                        }
                      }),
                      i
                    );
                  })(t)
                : (function (t) {
                    var e = [];
                    if (!t) return e;
                    var n = 1;
                    return (
                      (t.match(mt) || []).forEach(function (t) {
                        var i = _t(t);
                        switch (i[0]) {
                          case "<?xml":
                            break;
                          case "<calcChain":
                          case "<calcChain>":
                          case "</calcChain>":
                            break;
                          case "<c":
                            delete i[0], i.i ? (n = i.i) : (i.i = n), e.push(i);
                        }
                      }),
                      e
                    );
                  })(t);
            })(ut(t, rc(o.calcchain)), o.calcchain));
          var b,
            m,
            g = 0,
            v = {},
            _ = c.Sheets;
          (d.Worksheets = _.length), (d.SheetNames = []);
          for (var y = 0; y != _.length; ++y) d.SheetNames[y] = _[y].name;
          var M = a ? "bin" : "xml",
            O = o.workbooks[0].lastIndexOf("/"),
            w = (
              o.workbooks[0].slice(0, O + 1) +
              "_rels/" +
              o.workbooks[0].slice(O + 1) +
              ".rels"
            ).replace(/^\//, "");
          ct(t, w) || (w = "xl/_rels/workbook." + M + ".rels");
          var A = Xn(pt(t, w, !0), w);
          A &&
            (A = (function (t, e) {
              if (!t) return 0;
              try {
                t = e.map(function (e) {
                  return (
                    e.id || (e.id = e.strRelID),
                    [
                      e.name,
                      t["!id"][e.id].Target,
                      ((n = t["!id"][e.id].Type),
                      Yn.WS.indexOf(n) > -1
                        ? "sheet"
                        : Yn.CS && n == Yn.CS
                        ? "chart"
                        : Yn.DS && n == Yn.DS
                        ? "dialog"
                        : Yn.MS && n == Yn.MS
                        ? "macro"
                        : n && n.length
                        ? n
                        : "sheet"),
                    ]
                  );
                  var n;
                });
              } catch (t) {
                return null;
              }
              return t && 0 !== t.length ? t : null;
            })(A, c.Sheets));
          var x = ut(t, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
          for (g = 0; g != d.Worksheets; ++g) {
            var z = "sheet";
            A && A[g]
              ? ((b = "xl/" + A[g][1].replace(/[\/]?xl\//, "")),
                ct(t, b) || (b = A[g][1]),
                ct(t, b) || (b = w.replace(/_rels\/.*$/, "") + A[g][1]),
                (z = A[g][2]))
              : (b = (b =
                  "xl/worksheets/sheet" + (g + 1 - x) + "." + M).replace(
                  /sheet0\./,
                  "sheet."
                )),
              (m = b.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")),
              ic(t, b, m, d.SheetNames[g], g, v, n, z, e, c, s, l);
          }
          return (
            o.comments &&
              (function (t, e, n, i, r) {
                for (var o = 0; o != e.length; ++o) {
                  var a = e[o],
                    s = Ks(ut(t, a.replace(/^\//, ""), !0), a, r);
                  if (s && s.length)
                    for (var l = $(n), c = 0; c != l.length; ++c) {
                      var d = l[c],
                        u = i[d];
                      u && u[a] && Uo(0, n[d], s);
                    }
                }
              })(t, o.comments, n, v, e),
            (h = {
              Directory: o,
              Workbook: c,
              Props: d,
              Custprops: p,
              Deps: f,
              Sheets: n,
              SheetNames: d.SheetNames,
              Strings: Za,
              Styles: l,
              Themes: s,
              SSF: q.get_table(),
            }),
            e.bookFiles && ((h.keys = r), (h.files = t.files)),
            e.bookVBA &&
              (o.vba.length > 0
                ? (h.vbaraw = ut(t, rc(o.vba[0]), !0))
                : o.defaults &&
                  "application/vnd.ms-office.vbaProject" === o.defaults.bin &&
                  (h.vbaraw = ut(t, "xl/vbaProject.bin", !0))),
            h
          );
        }
        function ac(t, e) {
          if (((Ho = 1024), "ods" == e.bookType)) return $l(t, e);
          t && !t.SSF && (t.SSF = q.get_table()),
            t &&
              t.SSF &&
              (E(q),
              q.load_table(t.SSF),
              (e.revssf = U(t.SSF)),
              (e.revssf[t.SSF[65535]] = 0),
              (e.ssf = t.SSF)),
            (e.rels = {}),
            (e.wbrels = {}),
            (e.Strings = []),
            (e.Strings.Count = 0),
            (e.Strings.Unique = 0),
            Qa
              ? (e.revStrings = new Map())
              : ((e.revStrings = {}),
                (e.revStrings.foo = []),
                delete e.revStrings.foo);
          var n = "xlsb" == e.bookType ? "bin" : "xml",
            i = Zo.indexOf(e.bookType) > -1,
            r = {
              workbooks: [],
              sheets: [],
              charts: [],
              dialogs: [],
              macros: [],
              rels: [],
              strs: [],
              comments: [],
              links: [],
              coreprops: [],
              extprops: [],
              custprops: [],
              themes: [],
              styles: [],
              calcchains: [],
              vba: [],
              drawings: [],
              TODO: [],
              xmlns: "",
            };
          nc((e = e || {}));
          var o = new at(),
            a = "",
            s = 0;
          if (
            ((e.cellXfs = []),
            is(e.cellXfs, {}, { revssf: { General: 0 } }),
            t.Props || (t.Props = {}),
            (a = "docProps/core.xml"),
            o.file(
              a,
              (function (t, e) {
                var n = e || {},
                  i = [ft, ii],
                  r = {};
                if (!t && !n.Props) return i.join("");
                t &&
                  (null != t.CreatedDate &&
                    ri(
                      "dcterms:created",
                      "string" == typeof t.CreatedDate
                        ? t.CreatedDate
                        : Jt(t.CreatedDate, n.WTF),
                      { "xsi:type": "dcterms:W3CDTF" },
                      i,
                      r
                    ),
                  null != t.ModifiedDate &&
                    ri(
                      "dcterms:modified",
                      "string" == typeof t.ModifiedDate
                        ? t.ModifiedDate
                        : Jt(t.ModifiedDate, n.WTF),
                      { "xsi:type": "dcterms:W3CDTF" },
                      i,
                      r
                    ));
                for (var o = 0; o != ti.length; ++o) {
                  var a = ti[o],
                    s =
                      n.Props && null != n.Props[a[1]]
                        ? n.Props[a[1]]
                        : t
                        ? t[a[1]]
                        : null;
                  !0 === s
                    ? (s = "1")
                    : !1 === s
                    ? (s = "0")
                    : "number" == typeof s && (s = String(s)),
                    null != s && ri(a[0], s, null, i, r);
                }
                return (
                  i.length > 2 &&
                    ((i[i.length] = "</cp:coreProperties>"),
                    (i[1] = i[1].replace("/>", ">"))),
                  i.join("")
                );
              })(t.Props, e)
            ),
            r.coreprops.push(a),
            Kn(e.rels, 2, a, Yn.CORE_PROPS),
            (a = "docProps/app.xml"),
            t.Props && t.Props.SheetNames)
          );
          else if (t.Workbook && t.Workbook.Sheets) {
            for (var l = [], c = 0; c < t.SheetNames.length; ++c)
              2 != (t.Workbook.Sheets[c] || {}).Hidden &&
                l.push(t.SheetNames[c]);
            t.Props.SheetNames = l;
          } else t.Props.SheetNames = t.SheetNames;
          for (
            t.Props.Worksheets = t.Props.SheetNames.length,
              o.file(
                a,
                (function (t) {
                  var e = [],
                    n = Zt;
                  return (
                    t || (t = {}),
                    (t.Application = "SheetJS"),
                    (e[e.length] = ft),
                    (e[e.length] = si),
                    oi.forEach(function (i) {
                      if (void 0 !== t[i[1]]) {
                        var r;
                        switch (i[2]) {
                          case "string":
                            r = String(t[i[1]]);
                            break;
                          case "bool":
                            r = t[i[1]] ? "true" : "false";
                        }
                        void 0 !== r && (e[e.length] = n(i[0], r));
                      }
                    }),
                    (e[e.length] = n(
                      "HeadingPairs",
                      n(
                        "vt:vector",
                        n("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") +
                          n("vt:variant", n("vt:i4", String(t.Worksheets))),
                        { size: 2, baseType: "variant" }
                      )
                    )),
                    (e[e.length] = n(
                      "TitlesOfParts",
                      n(
                        "vt:vector",
                        t.SheetNames.map(function (t) {
                          return "<vt:lpstr>" + kt(t) + "</vt:lpstr>";
                        }).join(""),
                        { size: t.Worksheets, baseType: "lpstr" }
                      )
                    )),
                    e.length > 2 &&
                      ((e[e.length] = "</Properties>"),
                      (e[1] = e[1].replace("/>", ">"))),
                    e.join("")
                  );
                })(t.Props)
              ),
              r.extprops.push(a),
              Kn(e.rels, 3, a, Yn.EXT_PROPS),
              t.Custprops !== t.Props &&
                $(t.Custprops || {}).length > 0 &&
                ((a = "docProps/custom.xml"),
                o.file(
                  a,
                  (function (t) {
                    var e = [ft, ci];
                    if (!t) return e.join("");
                    var n = 1;
                    return (
                      $(t).forEach(function (i) {
                        ++n,
                          (e[e.length] = Zt(
                            "property",
                            (function (t) {
                              switch (typeof t) {
                                case "string":
                                  return Zt("vt:lpwstr", t);
                                case "number":
                                  return Zt(
                                    (0 | t) == t ? "vt:i4" : "vt:r8",
                                    String(t)
                                  );
                                case "boolean":
                                  return Zt("vt:bool", t ? "true" : "false");
                              }
                              if (t instanceof Date)
                                return Zt("vt:filetime", Jt(t));
                              throw new Error("Unable to serialize " + t);
                            })(t[i]),
                            {
                              fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                              pid: n,
                              name: i,
                            }
                          ));
                      }),
                      e.length > 2 &&
                        ((e[e.length] = "</Properties>"),
                        (e[1] = e[1].replace("/>", ">"))),
                      e.join("")
                    );
                  })(t.Custprops)
                ),
                r.custprops.push(a),
                Kn(e.rels, 4, a, Yn.CUST_PROPS)),
              s = 1;
            s <= t.SheetNames.length;
            ++s
          ) {
            var d = { "!id": {} },
              u = t.Sheets[t.SheetNames[s - 1]];
            switch ((u || {})["!type"] || "sheet") {
              case "chart":
              default:
                (a = "xl/worksheets/sheet" + s + "." + n),
                  o.file(a, Js(s - 1, a, e, t, d)),
                  r.sheets.push(a),
                  Kn(e.wbrels, -1, "worksheets/sheet" + s + "." + n, Yn.WS[0]);
            }
            if (u) {
              var p = u["!comments"],
                h = !1;
              if (p && p.length > 0) {
                var f = "xl/comments" + s + "." + n;
                o.file(f, tl(p, f, e)),
                  r.comments.push(f),
                  Kn(d, -1, "../comments" + s + "." + n, Yn.CMNT),
                  (h = !0);
              }
              u["!legacy"] &&
                h &&
                o.file(
                  "xl/drawings/vmlDrawing" + s + ".vml",
                  Yo(s, u["!comments"])
                ),
                delete u["!comments"],
                delete u["!legacy"];
            }
            d["!id"].rId1 && o.file(Un(a), Gn(d));
          }
          return (
            null != e.Strings &&
              e.Strings.length > 0 &&
              ((a = "xl/sharedStrings." + n),
              o.file(a, Qs(e.Strings, a, e)),
              r.strs.push(a),
              Kn(e.wbrels, -1, "sharedStrings." + n, Yn.SST)),
            (a = "xl/workbook." + n),
            o.file(a, Zs(t, a, e)),
            r.workbooks.push(a),
            Kn(e.rels, 1, a, Yn.WB),
            (a = "xl/theme/theme1.xml"),
            o.file(a, Fo(t.Themes, e)),
            r.themes.push(a),
            Kn(e.wbrels, -1, "theme/theme1.xml", Yn.THEME),
            (a = "xl/styles." + n),
            o.file(
              a,
              (function (t, e, n) {
                return (".bin" === e.slice(-4) ? qo : xo)(t, n);
              })(t, a, e)
            ),
            r.styles.push(a),
            Kn(e.wbrels, -1, "styles." + n, Yn.STY),
            t.vbaraw &&
              i &&
              ((a = "xl/vbaProject.bin"),
              o.file(a, t.vbaraw),
              r.vba.push(a),
              Kn(e.wbrels, -1, "vbaProject.bin", Yn.VBA)),
            o.file(
              "[Content_Types].xml",
              (function (t, e) {
                var n,
                  i = [];
                (i[i.length] = ft), (i[i.length] = $n), (i = i.concat(Hn));
                var r = function (r) {
                    t[r] &&
                      t[r].length > 0 &&
                      ((n = t[r][0]),
                      (i[i.length] = Zt("Override", null, {
                        PartName: ("/" == n[0] ? "" : "/") + n,
                        ContentType: Bn[r][e.bookType || "xlsx"],
                      })));
                  },
                  o = function (n) {
                    (t[n] || []).forEach(function (t) {
                      i[i.length] = Zt("Override", null, {
                        PartName: ("/" == t[0] ? "" : "/") + t,
                        ContentType: Bn[n][e.bookType || "xlsx"],
                      });
                    });
                  },
                  a = function (e) {
                    (t[e] || []).forEach(function (t) {
                      i[i.length] = Zt("Override", null, {
                        PartName: ("/" == t[0] ? "" : "/") + t,
                        ContentType: Fn[e][0],
                      });
                    });
                  };
                return (
                  r("workbooks"),
                  o("sheets"),
                  o("charts"),
                  a("themes"),
                  ["strs", "styles"].forEach(r),
                  ["coreprops", "extprops", "custprops"].forEach(a),
                  a("vba"),
                  a("comments"),
                  a("drawings"),
                  i.length > 2 &&
                    ((i[i.length] = "</Types>"),
                    (i[1] = i[1].replace("/>", ">"))),
                  i.join("")
                );
              })(r, e)
            ),
            o.file("_rels/.rels", Gn(e.rels)),
            o.file("xl/_rels/workbook." + n + ".rels", Gn(e.wbrels)),
            delete e.revssf,
            delete e.ssf,
            o
          );
        }
        function sc(t, e) {
          var n = "";
          switch ((e || {}).type || "base64") {
            case "buffer":
              return [t[0], t[1], t[2], t[3]];
            case "base64":
              n = y.decode(t.slice(0, 24));
              break;
            case "binary":
              n = t;
              break;
            case "array":
              return [t[0], t[1], t[2], t[3]];
            default:
              throw new Error(
                "Unrecognized type " + ((e && e.type) || "undefined")
              );
          }
          return [
            n.charCodeAt(0),
            n.charCodeAt(1),
            n.charCodeAt(2),
            n.charCodeAt(3),
          ];
        }
        function lc(t, e) {
          var n = 0;
          t: for (; n < t.length; )
            switch (t.charCodeAt(n)) {
              case 10:
              case 13:
              case 32:
                ++n;
                break;
              case 60:
                return hl(t.slice(n), e);
              default:
                break t;
            }
          return kr.to_workbook(t, e);
        }
        function cc(t, e, n, i) {
          return i
            ? ((n.type = "string"), kr.to_workbook(t, n))
            : kr.to_workbook(e, n);
        }
        function dc(t, e) {
          if (
            (f(), "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer)
          )
            return dc(new Uint8Array(t), e);
          var n,
            i = t,
            o = !1,
            s = e || {};
          if (
            ((Ja = {}),
            s.dateNF && (Ja.dateNF = s.dateNF),
            s.type || (s.type = M && r.isBuffer(t) ? "buffer" : "base64"),
            "file" == s.type &&
              ((s.type = M ? "buffer" : "binary"),
              (i = (function (t) {
                if (void 0 !== W) return W.readFileSync(t);
                if (
                  void 0 !== a &&
                  "undefined" != typeof File &&
                  "undefined" != typeof Folder
                )
                  try {
                    var e = File(t);
                    e.open("r"), (e.encoding = "binary");
                    var n = e.read();
                    return e.close(), n;
                  } catch (t) {
                    if (!t.message || !t.message.match(/onstruct/)) throw t;
                  }
                throw new Error("Cannot access file " + t);
              })(t))),
            "string" == s.type &&
              ((o = !0),
              (s.type = "binary"),
              (s.codepage = 65001),
              (i = (function (t) {
                return t.match(/[^\x00-\x7F]/) ? jt(t) : t;
              })(t))),
            "array" == s.type &&
              "undefined" != typeof Uint8Array &&
              t instanceof Uint8Array &&
              "undefined" != typeof ArrayBuffer)
          ) {
            var l = new ArrayBuffer(3),
              c = new Uint8Array(l);
            if (((c.foo = "bar"), !c.foo))
              return ((s = nt(s)).type = "array"), dc(S(i), s);
          }
          switch ((n = sc(i, s))[0]) {
            case 208:
              return (function (t, e) {
                return N.find(t, "EncryptedPackage")
                  ? (function (t, e) {
                      var n = e || {},
                        i = "Workbook",
                        r = N.find(t, i);
                      try {
                        if (
                          ((i = "/!DataSpaces/Version"),
                          !(r = N.find(t, i)) || !r.content)
                        )
                          throw new Error(
                            "ECMA-376 Encrypted file missing " + i
                          );
                        if (
                          ((function (t) {
                            var e = {};
                            (e.id = t.read_shift(0, "lpp4")),
                              (e.R = $r(t, 4)),
                              (e.U = $r(t, 4)),
                              (e.W = $r(t, 4));
                          })(r.content),
                          (i = "/!DataSpaces/DataSpaceMap"),
                          !(r = N.find(t, i)) || !r.content)
                        )
                          throw new Error(
                            "ECMA-376 Encrypted file missing " + i
                          );
                        var o = (function (t) {
                          var e = [];
                          t.l += 4;
                          for (var n = t.read_shift(4); n-- > 0; )
                            e.push(Hr(t));
                          return e;
                        })(r.content);
                        if (
                          1 !== o.length ||
                          1 !== o[0].comps.length ||
                          0 !== o[0].comps[0].t ||
                          "StrongEncryptionDataSpace" !== o[0].name ||
                          "EncryptedPackage" !== o[0].comps[0].v
                        )
                          throw new Error("ECMA-376 Encrypted file bad " + i);
                        if (
                          ((i =
                            "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"),
                          !(r = N.find(t, i)) || !r.content)
                        )
                          throw new Error(
                            "ECMA-376 Encrypted file missing " + i
                          );
                        var a = (function (t) {
                          var e = [];
                          t.l += 4;
                          for (var n = t.read_shift(4); n-- > 0; )
                            e.push(t.read_shift(0, "lpp4"));
                          return e;
                        })(r.content);
                        if (
                          1 != a.length ||
                          "StrongEncryptionTransform" != a[0]
                        )
                          throw new Error("ECMA-376 Encrypted file bad " + i);
                        if (
                          ((i =
                            "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"),
                          !(r = N.find(t, i)) || !r.content)
                        )
                          throw new Error(
                            "ECMA-376 Encrypted file missing " + i
                          );
                        !(function (t) {
                          var e = (function (t) {
                            var e = {};
                            return (
                              t.read_shift(4),
                              (t.l += 4),
                              (e.id = t.read_shift(0, "lpp4")),
                              (e.name = t.read_shift(0, "lpp4")),
                              (e.R = $r(t, 4)),
                              (e.U = $r(t, 4)),
                              (e.W = $r(t, 4)),
                              e
                            );
                          })(t);
                          if (
                            ((e.ename = t.read_shift(0, "8lpp4")),
                            (e.blksz = t.read_shift(4)),
                            (e.cmode = t.read_shift(4)),
                            4 != t.read_shift(4))
                          )
                            throw new Error("Bad !Primary record");
                        })(r.content);
                