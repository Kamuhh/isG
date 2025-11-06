// app.part9-de-30.js
      } catch (t) {}
                      if (
                        ((i = "/EncryptionInfo"),
                        !(r = N.find(t, i)) || !r.content)
                      )
                        throw new Error("ECMA-376 Encrypted file missing " + i);
                      var s = (function (t) {
                        var e = $r(t);
                        switch (e.Minor) {
                          case 2:
                            return [e.Minor, Xr(t)];
                          case 3:
                            return [e.Minor, Vr()];
                          case 4:
                            return [e.Minor, Gr(t)];
                        }
                        throw new Error(
                          "ECMA-376 Encrypted file unrecognized Version: " +
                            e.Minor
                        );
                      })(r.content);
                      if (
                        ((i = "/EncryptedPackage"),
                        !(r = N.find(t, i)) || !r.content)
                      )
                        throw new Error("ECMA-376 Encrypted file missing " + i);
                      if (4 == s[0] && "undefined" != typeof decrypt_agile)
                        return decrypt_agile(
                          s[1],
                          r.content,
                          n.password || "",
                          n
                        );
                      if (2 == s[0] && "undefined" != typeof decrypt_std76)
                        return decrypt_std76(
                          s[1],
                          r.content,
                          n.password || "",
                          n
                        );
                      throw new Error("File is password-protected");
                    })(t, e)
                  : wl(t, e);
              })(N.read(i, s), s);
            case 9:
              return wl(i, s);
            case 60:
              return hl(i, s);
            case 73:
              if (68 === n[1])
                return (function (t, e) {
                  var n = e || {},
                    i = !!n.WTF;
                  n.WTF = !0;
                  try {
                    var r = xr.to_workbook(t, n);
                    return (n.WTF = i), r;
                  } catch (r) {
                    if (
                      ((n.WTF = i), !r.message.match(/SYLK bad record ID/) && i)
                    )
                      throw r;
                    return kr.to_workbook(t, e);
                  }
                })(i, s);
              break;
            case 84:
              if (65 === n[1] && 66 === n[2] && 76 === n[3])
                return zr.to_workbook(i, s);
              break;
            case 80:
              return 75 === n[1] && n[2] < 9 && n[3] < 9
                ? (function (t, e) {
                    var n,
                      i = t,
                      o = e || {};
                    switch (
                      (o.type ||
                        (o.type = M && r.isBuffer(t) ? "buffer" : "base64"),
                      o.type)
                    ) {
                      case "base64":
                        n = new at(i, { base64: !0 });
                        break;
                      case "binary":
                      case "array":
                        n = new at(i, { base64: !1 });
                        break;
                      case "buffer":
                        n = new at(i);
                        break;
                      default:
                        throw new Error("Unrecognized type " + o.type);
                    }
                    return oc(n, o);
                  })(i, s)
                : cc(t, i, s, o);
            case 239:
              return 60 === n[3] ? hl(i, s) : cc(t, i, s, o);
            case 255:
              if (254 === n[1])
                return (function (t, e) {
                  var n = t;
                  return (
                    "base64" == e.type && (n = y.decode(n)),
                    (n = cptable.utils.decode(1200, n.slice(2), "str")),
                    (e.type = "binary"),
                    lc(n, e)
                  );
                })(i, s);
              break;
            case 0:
              if (0 === n[1] && n[2] >= 2 && 0 === n[3])
                return Sr.to_workbook(i, s);
              break;
            case 3:
            case 131:
            case 139:
            case 140:
              return Ar.to_workbook(i, s);
            case 123:
              if (92 === n[1] && 114 === n[2] && 116 === n[3])
                return no.to_workbook(i, s);
              break;
            case 10:
            case 13:
            case 32:
              return (function (t, e) {
                var n = "",
                  i = sc(t, e);
                switch (e.type) {
                  case "base64":
                    n = y.decode(t);
                    break;
                  case "binary":
                    n = t;
                    break;
                  case "buffer":
                    n = t.toString("binary");
                    break;
                  case "array":
                    n = et(t);
                    break;
                  default:
                    throw new Error("Unrecognized type " + e.type);
                }
                return (
                  239 == i[0] && 187 == i[1] && 191 == i[2] && (n = Et(n)),
                  lc(n, e)
                );
              })(i, s);
          }
          return n[2] <= 12 && n[3] <= 31
            ? Ar.to_workbook(i, s)
            : cc(t, i, s, o);
        }
        function uc(t, e) {
          var n = e || {};
          return (n.type = "file"), dc(t, n);
        }
        function pc(t, e) {
          switch (e.type) {
            case "base64":
            case "binary":
              break;
            case "buffer":
            case "array":
              e.type = "";
              break;
            case "file":
              return F(e.file, N.write(t, { type: M ? "buffer" : "" }));
            case "string":
              throw new Error(
                "'string' output type invalid for '" + e.bookType + "' files"
              );
            default:
              throw new Error("Unrecognized type " + e.type);
          }
          return N.write(t, e);
        }
        function hc(t, e, n) {
          n || (n = "");
          var i = n + t;
          switch (e.type) {
            case "base64":
              return y.encode(jt(i));
            case "binary":
              return jt(i);
            case "string":
              return t;
            case "file":
              return F(e.file, i, "utf8");
            case "buffer":
              return M
                ? O(i, "utf8")
                : hc(i, { type: "binary" })
                    .split("")
                    .map(function (t) {
                      return t.charCodeAt(0);
                    });
          }
          throw new Error("Unrecognized type " + e.type);
        }
        function fc(t, e) {
          switch (e.type) {
            case "string":
            case "base64":
            case "binary":
              for (var n = "", i = 0; i < t.length; ++i)
                n += String.fromCharCode(t[i]);
              return "base64" == e.type
                ? y.encode(n)
                : "string" == e.type
                ? Et(n)
                : n;
            case "file":
              return F(e.file, t);
            case "buffer":
              return t;
            default:
              throw new Error("Unrecognized type " + e.type);
          }
        }
        function bc(t, e) {
          !(function (t) {
            if (!t || !t.SheetNames || !t.Sheets)
              throw new Error("Invalid Workbook");
            if (!t.SheetNames.length) throw new Error("Workbook is empty");
            var e,
              n,
              i,
              r = (t.Workbook && t.Workbook.Sheets) || [];
            (e = t.SheetNames),
              (n = r),
              (i = !!t.vbaraw),
              e.forEach(function (t, r) {
                Hs(t);
                for (var o = 0; o < r; ++o)
                  if (t == e[o]) throw new Error("Duplicate Sheet Name: " + t);
                if (i) {
                  var a = (n && n[r] && n[r].CodeName) || t;
                  if (95 == a.charCodeAt(0) && a.length > 22)
                    throw new Error("Bad Code Name: Worksheet" + a);
                }
              });
            for (var o = 0; o < t.SheetNames.length; ++o)
              os(t.Sheets[t.SheetNames[o]], t.SheetNames[o], o);
          })(t);
          var n = e || {};
          if ("array" == n.type) {
            n.type = "binary";
            var i = bc(t, n);
            return (n.type = "array"), C(i);
          }
          switch (n.bookType || "xlsb") {
            case "xml":
            case "xlml":
              return hc(
                (function (t, e) {
                  e || (e = {}),
                    t.SSF || (t.SSF = q.get_table()),
                    t.SSF &&
                      (E(q),
                      q.load_table(t.SSF),
                      (e.revssf = U(t.SSF)),
                      (e.revssf[t.SSF[65535]] = 0),
                      (e.ssf = t.SSF),
                      (e.cellXfs = []),
                      is(e.cellXfs, {}, { revssf: { General: 0 } }));
                  var n = [];
                  n.push(
                    (function (t, e) {
                      var n = [];
                      return (
                        t.Props &&
                          n.push(
                            (function (t, e) {
                              var n = [];
                              return (
                                $(di)
                                  .map(function (t) {
                                    for (var e = 0; e < ti.length; ++e)
                                      if (ti[e][1] == t) return ti[e];
                                    for (e = 0; e < oi.length; ++e)
                                      if (oi[e][1] == t) return oi[e];
                                    throw t;
                                  })
                                  .forEach(function (i) {
                                    if (null != t[i[1]]) {
                                      var r =
                                        e && e.Props && null != e.Props[i[1]]
                                          ? e.Props[i[1]]
                                          : t[i[1]];
                                      switch (i[2]) {
                                        case "date":
                                          r = new Date(r)
                                            .toISOString()
                                            .replace(/\.\d*Z/, "Z");
                                      }
                                      "number" == typeof r
                                        ? (r = String(r))
                                        : !0 === r || !1 === r
                                        ? (r = r ? "1" : "0")
                                        : r instanceof Date &&
                                          (r = new Date(r)
                                            .toISOString()
                                            .replace(/\.\d*Z/, "")),
                                        n.push(Gt(di[i[1]] || i[1], r));
                                    }
                                  }),
                                Zt("DocumentProperties", n.join(""), {
                                  xmlns: ne,
                                })
                              );
                            })(t.Props, e)
                          ),
                        t.Custprops &&
                          n.push(
                            (function (t, e) {
                              var n = ["Worksheets", "SheetNames"],
                                i = "CustomDocumentProperties",
                                r = [];
                              return (
                                t &&
                                  $(t).forEach(function (e) {
                                    if (t.hasOwnProperty(e)) {
                                      for (var i = 0; i < ti.length; ++i)
                                        if (e == ti[i][1]) return;
                                      for (i = 0; i < oi.length; ++i)
                                        if (e == oi[i][1]) return;
                                      for (i = 0; i < n.length; ++i)
                                        if (e == n[i]) return;
                                      var o = t[e],
                                        a = "string";
                                      "number" == typeof o
                                        ? ((a = "float"), (o = String(o)))
                                        : !0 === o || !1 === o
                                        ? ((a = "boolean"), (o = o ? "1" : "0"))
                                        : (o = String(o)),
                                        r.push(Zt(St(e), o, { "dt:dt": a }));
                                    }
                                  }),
                                e &&
                                  $(e).forEach(function (n) {
                                    if (
                                      e.hasOwnProperty(n) &&
                                      (!t || !t.hasOwnProperty(n))
                                    ) {
                                      var i = e[n],
                                        o = "string";
                                      "number" == typeof i
                                        ? ((o = "float"), (i = String(i)))
                                        : !0 === i || !1 === i
                                        ? ((o = "boolean"), (i = i ? "1" : "0"))
                                        : i instanceof Date
                                        ? ((o = "dateTime.tz"),
                                          (i = i.toISOString()))
                                        : (i = String(i)),
                                        r.push(Zt(St(n), i, { "dt:dt": o }));
                                    }
                                  }),
                                "<" +
                                  i +
                                  ' xmlns="' +
                                  ne +
                                  '">' +
                                  r.join("") +
                                  "</" +
                                  i +
                                  ">"
                              );
                            })(t.Props, t.Custprops)
                          ),
                        n.join("")
                      );
                    })(t, e)
                  ),
                    n.push(""),
                    n.push(""),
                    n.push("");
                  for (var i = 0; i < t.SheetNames.length; ++i)
                    n.push(
                      Zt("Worksheet", gl(i, e, t), {
                        "ss:Name": kt(t.SheetNames[i]),
                      })
                    );
                  return (
                    (n[2] = (function (t, e) {
                      var n = [
                        '<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>',
                      ];
                      return (
                        e.cellXfs.forEach(function (t, e) {
                          var i = [];
                          i.push(
                            Zt("NumberFormat", null, {
                              "ss:Format": kt(q._table[t.numFmtId]),
                            })
                          ),
                            n.push(
                              Zt("Style", i.join(""), {
                                "ss:ID": "s" + (21 + e),
                              })
                            );
                        }),
                        Zt("Styles", n.join(""))
                      );
                    })(0, e)),
                    (n[3] = (function (t) {
                      if (!((t || {}).Workbook || {}).Names) return "";
                      for (
                        var e = t.Workbook.Names, n = [], i = 0;
                        i < e.length;
                        ++i
                      ) {
                        var r = e[i];
                        null == r.Sheet &&
                          (r.Name.match(/^_xlfn\./) || n.push(fl(r)));
                      }
                      return Zt("Names", n.join(""));
                    })(t)),
                    ft +
                      Zt("Workbook", n.join(""), {
                        xmlns: re,
                        "xmlns:o": ne,
                        "xmlns:x": ie,
                        "xmlns:ss": re,
                        "xmlns:dt": "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
                        "xmlns:html": "http://www.w3.org/TR/REC-html40",
                      })
                  );
                })(t, n),
                n
              );
            case "slk":
            case "sylk":
              return hc(Xl(t, n), n);
            case "htm":
            case "html":
              return hc(Yl(t, n), n);
            case "txt":
              return (function (t, e) {
                switch (e.type) {
                  case "base64":
                    return y.encode(t);
                  case "binary":
                  case "string":
                    return t;
                  case "file":
                    return F(e.file, t, "binary");
                  case "buffer":
                    return M
                      ? O(t, "binary")
                      : t.split("").map(function (t) {
                          return t.charCodeAt(0);
                        });
                }
                throw new Error("Unrecognized type " + e.type);
              })(Zl(t, n), n);
            case "csv":
              return hc(Ul(t, n), n, "\ufeff");
            case "dif":
              return hc(Vl(t, n), n);
            case "dbf":
              return fc(Jl(t, n), n);
            case "prn":
              return hc(Gl(t, n), n);
            case "rtf":
              return hc(Kl(t, n), n);
            case "eth":
              return hc(Ql(t, n), n);
            case "fods":
              return hc($l(t, n), n);
            case "biff2":
              n.biff || (n.biff = 2);
            case "biff3":
              n.biff || (n.biff = 3);
            case "biff4":
              return n.biff || (n.biff = 4), fc(ql(t, n), n);
            case "biff5":
              n.biff || (n.biff = 5);
            case "biff8":
            case "xla":
            case "xls":
              return (
                n.biff || (n.biff = 8),
                (function (t, e) {
                  var n = e || {};
                  return pc(
                    (function (t, e) {
                      var n = e || {},
                        i = N.utils.cfb_new({ root: "R" }),
                        r = "/Workbook";
                      switch (n.bookType || "xls") {
                        case "xls":
                          n.bookType = "biff8";
                        case "xla":
                          n.bookType || (n.bookType = "xla");
                        case "biff8":
                          (r = "/Workbook"), (n.biff = 8);
                          break;
                        case "biff5":
                          (r = "/Book"), (n.biff = 5);
                          break;
                        default:
                          throw new Error(
                            "invalid type " + n.bookType + " for XLS CFB"
                          );
                      }
                      return (
                        N.utils.cfb_add(i, r, ql(t, n)),
                        8 == n.biff &&
                          (t.Props || t.Custprops) &&
                          (function (t, e) {
                            var n,
                              i = [],
                              r = [],
                              o = [],
                              a = 0;
                            if (t.Props)
                              for (n = $(t.Props), a = 0; a < n.length; ++a)
                                (jn.hasOwnProperty(n[a])
                                  ? i
                                  : Pn.hasOwnProperty(n[a])
                                  ? r
                                  : o
                                ).push([n[a], t.Props[n[a]]]);
                            if (t.Custprops)
                              for (n = $(t.Custprops), a = 0; a < n.length; ++a)
                                (t.Props || {}).hasOwnProperty(n[a]) ||
                                  (jn.hasOwnProperty(n[a])
                                    ? i
                                    : Pn.hasOwnProperty(n[a])
                                    ? r
                                    : o
                                  ).push([n[a], t.Custprops[n[a]]]);
                            var s = [];
                            for (a = 0; a < o.length; ++a)
                              Ai.indexOf(o[a][0]) > -1 ||
                                (null != o[a][1] && s.push(o[a]));
                            r.length &&
                              N.utils.cfb_add(
                                e,
                                "/SummaryInformation",
                                ki(r, Ml, Pn, Ln)
                              ),
                              (i.length || s.length) &&
                                N.utils.cfb_add(
                                  e,
                                  "/DocumentSummaryInformation",
                                  ki(
                                    i,
                                    Ol,
                                    jn,
                                    Dn,
                                    s.length ? s : null,
                                    "05d5cdd59c2e1b10939708002b2cf9ae"
                                  )
                                );
                          })(t, i),
                        8 == n.biff &&
                          t.vbaraw &&
                          (function (t, e) {
                            e.FullPaths.forEach(function (n, i) {
                              if (0 != i) {
                                var r = n.replace(
                                  /[^\/]*[\/]/,
                                  "/_VBA_PROJECT_CUR/"
                                );
                                "/" !== r.slice(-1) &&
                                  N.utils.cfb_add(t, r, e.FileIndex[i].content);
                              }
                            });
                          })(
                            i,
                            N.read(t.vbaraw, {
                              type:
                                "string" == typeof t.vbaraw
                                  ? "binary"
                                  : "buffer",
                            })
                          ),
                        i
                      );
                    })(t, n),
                    n
                  );
                })(t, n)
              );
            case "xlsx":
            case "xlsm":
            case "xlam":
            case "xlsb":
            case "ods":
              return (function (t, e) {
                var n = e || {},
                  i = ac(t, n),
                  r = {};
                if ((n.compression && (r.compression = "DEFLATE"), n.password))
                  r.type = M ? "nodebuffer" : "string";
                else
                  switch (n.type) {
                    case "base64":
                      r.type = "base64";
                      break;
                    case "binary":
                      r.type = "string";
                      break;
                    case "string":
                      throw new Error(
                        "'string' output type invalid for '" +
                          n.bookType +
                          "' files"
                      );
                    case "buffer":
                    case "file":
                      r.type = M ? "nodebuffer" : "string";
                      break;
                    default:
                      throw new Error("Unrecognized type " + n.type);
                  }
                var o = i.generate(r);
                return n.password && "undefined" != typeof encrypt_agile
                  ? pc(encrypt_agile(o, n.password), n)
                  : "file" === n.type
                  ? F(n.file, o)
                  : "string" == n.type
                  ? Et(o)
                  : o;
              })(t, n);
            default:
              throw new Error("Unrecognized bookType |" + n.bookType + "|");
          }
        }
        function mc(t) {
          if (!t.bookType) {
            var e = t.file.slice(t.file.lastIndexOf(".")).toLowerCase();
            e.match(/^\.[a-z]+$/) && (t.bookType = e.slice(1)),
              (t.bookType =
                {
                  xls: "biff8",
                  htm: "html",
                  slk: "sylk",
                  socialcalc: "eth",
                  Sh33tJS: "WTF",
                }[t.bookType] || t.bookType);
          }
        }
        function gc(t, e, n) {
          var i = n || {};
          return (i.type = "file"), (i.file = e), mc(i), bc(t, i);
        }
        function vc(t, e, n, i, r, o, a, s) {
          var l = Ye(n),
            c = s.defval,
            d = s.raw || !s.hasOwnProperty("raw"),
            u = !0,
            p = 1 === r ? [] : {};
          if (1 !== r)
            if (Object.defineProperty)
              try {
                Object.defineProperty(p, "__rowNum__", {
                  value: n,
                  enumerable: !1,
                });
              } catch (t) {
                p.__rowNum__ = n;
              }
            else p.__rowNum__ = n;
          if (!a || t[n])
            for (var h = e.s.c; h <= e.e.c; ++h) {
              var f = a ? t[n][h] : t[i[h] + l];
              if (void 0 !== f && void 0 !== f.t) {
                var b = f.v;
                switch (f.t) {
                  case "z":
                    if (null == b) break;
                    continue;
                  case "e":
                    b = void 0;
                    break;
                  case "s":
                  case "d":
                  case "b":
                  case "n":
                    break;
                  default:
                    throw new Error("unrecognized type " + f.t);
                }
                if (null != o[h]) {
                  if (null == b)
                    if (void 0 !== c) p[o[h]] = c;
                    else {
                      if (!d || null !== b) continue;
                      p[o[h]] = null;
                    }
                  else p[o[h]] = d ? b : tn(f, b, s);
                  null != b && (u = !1);
                }
              } else {
                if (void 0 === c) continue;
                null != o[h] && (p[o[h]] = c);
              }
            }
          return { row: p, isempty: u };
        }
        function _c(t, e) {
          if (null == t || null == t["!ref"]) return [];
          var n = { t: "n", v: 0 },
            i = 0,
            r = 1,
            o = [],
            a = 0,
            s = "",
            l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
            c = e || {},
            d = null != c.range ? c.range : t["!ref"];
          switch (
            (1 === c.header
              ? (i = 1)
              : "A" === c.header
              ? (i = 2)
              : Array.isArray(c.header) && (i = 3),
            typeof d)
          ) {
            case "string":
              l = Qe(d);
              break;
            case "number":
              (l = Qe(t["!ref"])).s.r = d;
              break;
            default:
              l = d;
          }
          i > 0 && (r = 0);
          var u = Ye(l.s.r),
            p = [],
            h = [],
            f = 0,
            b = 0,
            m = Array.isArray(t),
            g = l.s.r,
            v = 0,
            _ = 0;
          for (m && !t[g] && (t[g] = []), v = l.s.c; v <= l.e.c; ++v)
            switch (((p[v] = Xe(v)), (n = m ? t[g][v] : t[p[v] + u]), i)) {
              case 1:
                o[v] = v - l.s.c;
                break;
              case 2:
                o[v] = p[v];
                break;
              case 3:
                o[v] = c.header[v - l.s.c];
                break;
              default:
                for (
                  null == n && (n = { w: "__EMPTY", t: "s" }),
                    s = a = tn(n, null, c),
                    b = 0,
                    _ = 0;
                  _ < o.length;
                  ++_
                )
                  o[_] == s && (s = a + "_" + ++b);
                o[v] = s;
            }
          for (g = l.s.r + r; g <= l.e.r; ++g) {
            var y = vc(t, l, g, p, i, o, m, c);
            (!1 === y.isempty ||
              (1 === i ? !1 !== c.blankrows : c.blankrows)) &&
              (h[f++] = y.row);
          }
          return (h.length = f), h;
        }
        var yc = /"/g;
        function Mc(t, e, n, i, r, o, a, s) {
          for (
            var l = !0, c = [], d = "", u = Ye(n), p = e.s.c;
            p <= e.e.c;
            ++p
          )
            if (i[p]) {
              var h = s.dense ? (t[n] || [])[p] : t[i[p] + u];
              if (null == h) d = "";
              else if (null != h.v) {
                (l = !1), (d = "" + tn(h, null, s));
                for (var f = 0, b = 0; f !== d.length; ++f)
                  if ((b = d.charCodeAt(f)) === r || b === o || 34 === b) {
                    d = '"' + d.replace(yc, '""') + '"';
                    break;
                  }
                "ID" == d && (d = '"ID"');
              } else
                null == h.f || h.F
                  ? (d = "")
                  : ((l = !1),
                    (d = "=" + h.f).indexOf(",") >= 0 &&
                      (d = '"' + d.replace(yc, '""') + '"'));
              c.push(d);
            }
          return !1 === s.blankrows && l ? null : c.join(a);
        }
        function Oc(t, e) {
          var n = [],
            i = null == e ? {} : e;
          if (null == t || null == t["!ref"]) return "";
          var r = Qe(t["!ref"]),
            o = void 0 !== i.FS ? i.FS : ",",
            a = o.charCodeAt(0),
            s = void 0 !== i.RS ? i.RS : "\n",
            l = s.charCodeAt(0),
            c = new RegExp(("|" == o ? "\\|" : o) + "+$"),
            d = "",
            u = [];
          i.dense = Array.isArray(t);
          for (
            var p = (i.skipHidden && t["!cols"]) || [],
              h = (i.skipHidden && t["!rows"]) || [],
              f = r.s.c;
            f <= r.e.c;
            ++f
          )
            (p[f] || {}).hidden || (u[f] = Xe(f));
          for (var b = r.s.r; b <= r.e.r; ++b)
            (h[b] || {}).hidden ||
              (null != (d = Mc(t, r, b, u, a, l, o, i)) &&
                (i.strip && (d = d.replace(c, "")), n.push(d + s)));
          return delete i.dense, n.join("");
        }
        function wc(t, e) {
          e || (e = {}), (e.FS = "\t"), (e.RS = "\n");
          var n = Oc(t, e);
          if ("undefined" == typeof cptable || "string" == e.type) return n;
          var i = cptable.utils.encode(1200, n, "str");
          return String.fromCharCode(255) + String.fromCharCode(254) + i;
        }
        function Ac(t) {
          var e,
            n = "",
            i = "";
          if (null == t || null == t["!ref"]) return [];
          var r,
            o = Qe(t["!ref"]),
            a = "",
            s = [],
            l = [],
            c = Array.isArray(t);
          for (r = o.s.c; r <= o.e.c; ++r) s[r] = Xe(r);
          for (var d = o.s.r; d <= o.e.r; ++d)
            for (a = Ye(d), r = o.s.c; r <= o.e.c; ++r)
              if (
                ((n = s[r] + a),
                (i = ""),
                void 0 !== (e = c ? (t[d] || [])[r] : t[n]))
              ) {
                if (null != e.F) {
                  if (((n = e.F), !e.f)) continue;
                  (i = e.f), -1 == n.indexOf(":") && (n = n + ":" + n);
                }
                if (null != e.f) i = e.f;
                else {
                  if ("z" == e.t) continue;
                  if ("n" == e.t && null != e.v) i = "" + e.v;
                  else if ("b" == e.t) i = e.v ? "TRUE" : "FALSE";
                  else if (void 0 !== e.w) i = "'" + e.w;
                  else {
                    if (void 0 === e.v) continue;
                    i = "s" == e.t ? "'" + e.v : "" + e.v;
                  }
                }
                l[l.length] = n + "=" + i;
              }
          return l;
        }
        function xc(t, e, n) {
          var i,
            r = n || {},
            o = +!r.skipHeader,
            a = t || {},
            s = 0,
            l = 0;
          if (a && null != r.origin)
            if ("number" == typeof r.origin) s = r.origin;
            else {
              var c = "string" == typeof r.origin ? Ge(r.origin) : r.origin;
              (s = c.r), (l = c.c);
            }
          var d = { s: { c: 0, r: 0 }, e: { c: l, r: s + e.length - 1 + o } };
          if (a["!ref"]) {
            var u = Qe(a["!ref"]);
            (d.e.c = Math.max(d.e.c, u.e.c)),
              (d.e.r = Math.max(d.e.r, u.e.r)),
              -1 == s && ((s = d.e.r + 1), (d.e.r = s + e.length - 1 + o));
          }
          var p = r.header || [],
            h = 0;
          e.forEach(function (t, e) {
            $(t).forEach(function (n) {
              -1 == (h = p.indexOf(n)) && (p[(h = p.length)] = n);
              var c = t[n],
                d = "z",
                u = "";
              !c || "object" != typeof c || c instanceof Date
                ? ("number" == typeof c
                    ? (d = "n")
                    : "boolean" == typeof c
                    ? (d = "b")
                    : "string" == typeof c
                    ? (d = "s")
                    : c instanceof Date &&
                      ((d = "d"),
                      r.cellDates || ((d = "n"), (c = G(c))),
                      (u = r.dateNF || q._table[14])),
                  (a[Ke({ c: l + h, r: s + e + o })] = i = { t: d, v: c }),
                  u && (i.z = u))
                : (a[Ke({ c: l + h, r: s + e + o })] = c);
            });
          }),
            (d.e.c = Math.max(d.e.c, l + p.length - 1));
          var f = Ye(s);
          if (o)
            for (h = 0; h < p.length; ++h)
              a[Xe(h + l) + f] = { t: "s", v: p[h] };
          return (a["!ref"] = Je(d)), a;
        }
        var zc,
          Cc = {
            encode_col: Xe,
            encode_row: Ye,
            encode_cell: Ke,
            encode_range: Je,
            decode_col: Ue,
            decode_row: He,
            split_cell: Ve,
            decode_cell: Ge,
            decode_range: Ze,
            format_cell: tn,
            get_formulae: Ac,
            make_csv: Oc,
            make_json: _c,
            make_formulae: Ac,
            sheet_add_aoa: nn,
            sheet_add_json: xc,
            aoa_to_sheet: rn,
            json_to_sheet: function (t, e) {
              return xc(null, t, e);
            },
            table_to_sheet: jl,
            table_to_book: function (t, e) {
              return en(jl(t, e), e);
            },
            sheet_to_csv: Oc,
            sheet_to_txt: wc,
            sheet_to_json: _c,
            sheet_to_html: El.from_sheet,
            sheet_to_dif: zr.from_sheet,
            sheet_to_slk: xr.from_sheet,
            sheet_to_eth: Cr.from_sheet,
            sheet_to_formulae: Ac,
            sheet_to_row_object_array: _c,
          };
        !(function (t) {
          function e(t, e, n) {
            return null != t[e] ? t[e] : (t[e] = n);
          }
          function n(t, e, i) {
            return "string" == typeof e
              ? t[e] || (t[e] = { t: "z" })
              : n(t, Ke("number" != typeof e ? e : { r: e, c: i || 0 }));
          }
          (t.consts = t.consts || {}),
            (t.book_new = function () {
              return { SheetNames: [], Sheets: {} };
            }),
            (t.book_append_sheet = function (t, e, n) {
              if (!n)
                for (
                  var i = 1;
                  i <= 65535 && -1 != t.SheetNames.indexOf((n = "Sheet" + i));
                  ++i
                );
              if (!n) throw new Error("Too many worksheets");
              if ((Hs(n), t.SheetNames.indexOf(n) >= 0))
                throw new Error(
                  "Worksheet with name |" + n + "| already exists!"
                );
              t.SheetNames.push(n), (t.Sheets[n] = e);
            }),
            (t.book_set_sheet_visibility = function (t, n, i) {
              e(t, "Workbook", {}), e(t.Workbook, "Sheets", []);
              var r = (function (t, e) {
                if ("number" == typeof e) {
                  if (e >= 0 && t.SheetNames.length > e) return e;
                  throw new Error("Cannot find sheet # " + e);
                }
                if ("string" == typeof e) {
                  var n = t.SheetNames.indexOf(e);
                  if (n > -1) return n;
                  throw new Error("Cannot find sheet name |" + e + "|");
                }
                throw new Error("Cannot find sheet |" + e + "|");
              })(t, n);
              switch ((e(t.Workbook.Sheets, r, {}), i)) {
                case 0:
                case 1:
                case 2:
                  break;
                default:
                  throw new Error("Bad sheet visibility setting " + i);
              }
              t.Workbook.Sheets[r].Hidden = i;
            }),
            [
              ["SHEET_VISIBLE", 0],
              ["SHEET_HIDDEN", 1],
              ["SHEET_VERY_HIDDEN", 2],
            ].forEach(function (e) {
              t.consts[e[0]] = e[1];
            }),
            (t.cell_set_number_format = function (t, e) {
              return (t.z = e), t;
            }),
            (t.cell_set_hyperlink = function (t, e, n) {
              return (
                e
                  ? ((t.l = { Target: e }), n && (t.l.Tooltip = n))
                  : delete t.l,
                t
              );
            }),
            (t.cell_set_internal_link = function (e, n, i) {
              return t.cell_set_hyperlink(e, "#" + n, i);
            }),
            (t.cell_add_comment = function (t, e, n) {
              t.c || (t.c = []), t.c.push({ t: e, a: n || "SheetJS" });
            }),
            (t.sheet_set_array_formula = function (t, e, i) {
              for (
                var r = "string" != typeof e ? e : Qe(e),
                  o = "string" == typeof e ? e : Je(e),
                  a = r.s.r;
                a <= r.e.r;
                ++a
              )
                for (var s = r.s.c; s <= r.e.c; ++s) {
                  var l = n(t, a, s);
                  (l.t = "n"),
                    (l.F = o),
                    delete l.v,
                    a == r.s.r && s == r.s.c && (l.f = i);
                }
              return t;
            });
        })(Cc),
          M &&
            ((zc = n(751).Readable),
            (e.stream = {
              to_json: function (t, e) {
                var n = zc({ objectMode: !0 });
                if (null == t || null == t["!ref"]) return n.push(null), n;
                var i = { t: "n", v: 0 },
                  r = 0,
                  o = 1,
                  a = [],
                  s = 0,
                  l = "",
                  c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
                  d = e || {},
                  u = null != d.range ? d.range : t["!ref"];
                switch (
                  (1 === d.header
                    ? (r = 1)
                    : "A" === d.header
                    ? (r = 2)
                    : Array.isArray(d.header) && (r = 3),
                  typeof u)
                ) {
                  case "string":
                    c = Qe(u);
                    break;
                  case "number":
                    (c = Qe(t["!ref"])).s.r = u;
                    break;
                  default:
                    c = u;
                }
                r > 0 && (o = 0);
                var p = Ye(c.s.r),
                  h = [],
                  f = 0,
                  b = Array.isArray(t),
                  m = c.s.r,
                  g = 0,
                  v = 0;
                for (b && !t[m] && (t[m] = []), g = c.s.c; g <= c.e.c; ++g)
                  switch (
                    ((h[g] = Xe(g)), (i = b ? t[m][g] : t[h[g] + p]), r)
                  ) {
                    case 1:
                      a[g] = g - c.s.c;
                      break;
                    case 2:
                      a[g] = h[g];
                      break;
                    case 3:
                      a[g] = d.header[g - c.s.c];
                      break;
                    default:
                      for (
                        null == i && (i = { w: "__EMPTY", t: "s" }),
                          l = s = tn(i, null, d),
                          f = 0,
                          v = 0;
                        v < a.length;
                        ++v
                      )
                        a[v] == l && (l = s + "_" + ++f);
                      a[g] = l;
                  }
                return (
                  (m = c.s.r + o),
                  (n._read = function () {
                    if (m > c.e.r) return n.push(null);
                    for (; m <= c.e.r; ) {
                      var e = vc(t, c, m, h, r, a, b, d);
                      if (
                        (++m,
                        !1 === e.isempty ||
                          (1 === r ? !1 !== d.blankrows : d.blankrows))
                      ) {
                        n.push(e.row);
                        break;
                      }
                    }
                  }),
                  n
                );
              },
              to_html: function (t, e) {
                var n = zc(),
                  i = e || {},
                  r = null != i.header ? i.header : El.BEGIN,
                  o = null != i.footer ? i.footer : El.END;
                n.push(r);
                var a = Ze(t["!ref"]);
                (i.dense = Array.isArray(t)), n.push(El._preamble(t, a, i));
                var s = a.s.r,
                  l = !1;
                return (
                  (n._read = function () {
                    if (s > a.e.r)
                      return (
                        l || ((l = !0), n.push("</table>" + o)), n.push(null)
                      );
                    for (; s <= a.e.r; ) {
                      n.push(El._row(t, a, s, i)), ++s;
                      break;
                    }
                  }),
                  n
                );
              },
              to_csv: function (t, e) {
                var n = zc(),
                  i = null == e ? {} : e;
                if (null == t || null == t["!ref"]) return n.push(null), n;
                var r = Qe(t["!ref"]),
                  o = void 0 !== i.FS ? i.FS : ",",
                  a = o.charCodeAt(0),
                  s = void 0 !== i.RS ? i.RS : "\n",
                  l = s.charCodeAt(0),
                  c = new RegExp(("|" == o ? "\\|" : o) + "+$"),
                  d = "",
                  u = [];
                i.dense = Array.isArray(t);
                for (
                  var p = (i.skipHidden && t["!cols"]) || [],
                    h = (i.skipHidden && t["!rows"]) || [],
                    f = r.s.c;
                  f <= r.e.c;
                  ++f
                )
                  (p[f] || {}).hidden || (u[f] = Xe(f));
                var b = r.s.r,
                  m = !1;
                return (
                  (n._read = function () {
                    if (!m) return (m = !0), n.push("\ufeff");
                    for (; b <= r.e.r; )
                      if (
                        (++b,
                        !(h[b - 1] || {}).hidden &&
                          null != (d = Mc(t, r, b - 1, u, a, l, o, i)))
                      ) {
                        i.strip && (d = d.replace(c, "")), n.push(d + s);
                        break;
                      }
                    return b > r.e.r ? n.push(null) : void 0;
                  }),
                  n
                );
              },
            })),
          (e.parse_xlscfb = wl),
          (e.parse_ods = Wl),
          (e.parse_fods = Nl),
          (e.write_ods = $l),
          (e.parse_zip = oc),
          (e.read = dc),
          (e.readFile = uc),
          (e.readFileSync = uc),
          (e.write = bc),
          (e.writeFile = gc),
          (e.writeFileSync = gc),
          (e.writeFileAsync = function (t, e, n, i) {
            var r = n || {};
            (r.type = "file"), (r.file = t), mc(r), (r.type = "buffer");
            var o = i;
            return (
              o instanceof Function || (o = n), W.writeFile(t, bc(e, r), o)
            );
          }),
          (e.utils = Cc),
          (e.SSF = q),
          (e.CFB = N);
      })(e);
    }).call(this, n(56), n(192).Buffer, n(76), n(30));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return X;
    }),
      n.d(e, "a", function () {
        return V;
      });
    var i = Uint8Array,
      r = Uint16Array,
      o = Int32Array,
      a = new i([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 0, 0, 0,
      ]),
      s = new i([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13, 0, 0,
      ]),
      l = new i([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      c = function (t, e) {
        for (var n = new r(31), i = 0; i < 31; ++i) n[i] = e += 1 << t[i - 1];
        var a = new o(n[30]);
        for (i = 1; i < 30; ++i)
          for (var s = n[i]; s < n[i + 1]; ++s) a[s] = ((s - n[i]) << 5) | i;
        return { b: n, r: a };
      },
      d = c(a, 2),
      u = d.b,
      p = d.r;
    (u[28] = 258), (p[258] = 28);
    for (
      var h = c(s, 0), f = h.b, b = h.r, m = new r(32768), g = 0;
      g < 32768;
      ++g
    ) {
      var v = ((43690 & g) >> 1) | ((21845 & g) << 1);
      (v =
        ((61680 & (v = ((52428 & v) >> 2) | ((13107 & v) << 2))) >> 4) |
        ((3855 & v) << 4)),
        (m[g] = (((65280 & v) >> 8) | ((255 & v) << 8)) >> 1);
    }
    var _ = function (t, e, n) {
        for (var i = t.length, o = 0, a = new r(e); o < i; ++o)
          t[o] && ++a[t[o] - 1];
        var s,
          l = new r(e);
        for (o = 1; o < e; ++o) l[o] = (l[o - 1] + a[o - 1]) << 1;
        if (n) {
          s = new r(1 << e);
          var c = 15 - e;
          for (o = 0; o < i; ++o)
            if (t[o])
              for (
                var d = (o << 4) | t[o],
                  u = e - t[o],
                  p = l[t[o] - 1]++ << u,
                  h = p | ((1 << u) - 1);
                p <= h;
                ++p
              )
                s[m[p] >> c] = d;
        } else
          for (s = new r(i), o = 0; o < i; ++o)
            t[o] && (s[o] = m[l[t[o] - 1]++] >> (15 - t[o]));
        return s;
      },
      y = new i(288);
    for (g = 0; g < 144; ++g) y[g] = 8;
    for (g = 144; g < 256; ++g) y[g] = 9;
    for (g = 256; g < 280; ++g) y[g] = 7;
    for (g = 280; g < 288; ++g) y[g] = 8;
    var M = new i(32);
    for (g = 0; g < 32; ++g) M[g] = 5;
    var O = _(y, 9, 0),
      w = _(y, 9, 1),
      A = _(M, 5, 0),
      x = _(M, 5, 1),
      z = function (t) {
        for (var e = t[0], n = 1; n < t.length; ++n) t[n] > e && (e = t[n]);
        return e;
      },
      C = function (t, e, n) {
        var i = (e / 8) | 0;
        return ((t[i] | (t[i + 1] << 8)) >> (7 & e)) & n;
      },
      k = function (t, e) {
        var n = (e / 8) | 0;
        return (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)) >> (7 & e);
      },
      S = function (t) {
        return ((t + 7) / 8) | 0;
      },
      T = function (t, e, n) {
        return (
          (null == e || e < 0) && (e = 0),
          (null == n || n > t.length) && (n = t.length),
          new i(t.subarray(e, n))
        );
      },
      D = [
        "unexpected EOF",
        "invalid block type",
        "invalid length/literal",
        "invalid distance",
        "stream finished",
        "no stream handler",
        ,
        "no callback",
        "invalid UTF-8 data",
        "extra field too long",
        "date not in range 1980-2099",
        "filename too long",
        "stream finishing",
        "invalid zip data",
      ],
      L = function (t, e, n) {
        var i = new Error(e || D[t]);
        if (
          ((i.code = t),
          Error.captureStackTrace && Error.captureStackTrace(i, L),
          !n)
        )
          throw i;
        return i;
      },
      q = function (t, e, n) {
        n <<= 7 & e;
        var i = (e / 8) | 0;
        (t[i] |= n), (t[i + 1] |= n >> 8);
      },
      E = function (t, e, n) {
        n <<= 7 & e;
        var i = (e / 8) | 0;
        (t[i] |= n), (t[i + 1] |= n >> 8), (t[i + 2] |= n >> 16);
      },
      j = function (t, e) {
        for (var n = [], o = 0; o < t.length; ++o)
          t[o] && n.push({ s: o, f: t[o] });
        var a = n.length,
          s = n.slice();
        if (!a) return { t: F, l: 0 };
        if (1 == a) {
          var l = new i(n[0].s + 1);
          return (l[n[0].s] = 1), { t: l, l: 1 };
        }
        n.sort(function (t, e) {
          return t.f - e.f;
        }),
          n.push({ s: -1, f: 25001 });
        var c = n[0],
          d = n[1],
          u = 0,
          p = 1,
          h = 2;
        for (n[0] = { s: -1, f: c.f + d.f, l: c, r: d }; p != a - 1; )
          (c = n[n[u].f < n[h].f ? u++ : h++]),
            (d = n[u != p && n[u].f < n[h].f ? u++ : h++]),
            (n[p++] = { s: -1, f: c.f + d.f, l: c, r: d });
        var f = s[0].s;
        for (o = 1; o < a; ++o) s[o].s > f && (f = s[o].s);
        var b = new r(f + 1),
          m = P(n[p - 1], b, 0);
        if (m > e) {
          o = 0;
          var g = 0,
            v = m - e,
            _ = 1 << v;
          for (
            s.sort(function (t, e) {
              return b[e.s] - b[t.s] || t.f - e.f;
            });
            o < a;
            ++o
          ) {
            var y = s[o].s;
            if (!(b[y] > e)) break;
            (g += _ - (1 << (m - b[y]))), (b[y] = e);
          }
          for (g >>= v; g > 0; ) {
            var M = s[o].s;
            b[M] < e ? (g -= 1 << (e - b[M]++ - 1)) : ++o;
          }
          for (; o >= 0 && g; --o) {
            var O = s[o].s;
            b[O] == e && (--b[O], ++g);
          }
          m = e;
        }
        return { t: new i(b), l: m };
      },
      P = function (t, e, n) {
        return -1 == t.s
          ? Math.max(P(t.l, e, n + 1), P(t.r, e, n + 1))
          : (e[t.s] = n);
      },
      R = function (t) {
        for (var e = t.length; e && !t[--e]; );
        for (
          var n = new r(++e),
            i = 0,
            o = t[0],
            a = 1,
            s = function (t) {
              n[i++] = t;
            },
            l = 1;
          l <= e;
          ++l
        )
          if (t[l] == o && l != e) ++a;
          else {
            if (!o && a > 2) {
              for (; a > 138; a -= 138) s(32754);
              a > 2 &&
                (s(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305),
                (a = 0));
            } else if (a > 3) {
              for (s(o), --a; a > 6; a -= 6) s(8304);
              a > 2 && (s(((a - 3) << 5) | 8208), (a = 0));
            }
            for (; a--; ) s(o);
            (a = 1), (o = t[l]);
          }
        return { c: n.subarray(0, i), n: e };
      },
      I = function (t, e) {
        for (var n = 0, i = 0; i < e.length; ++i) n += t[i] * e[i];
        return n;
      },
      W = function (t, e, n) {
        var i = n.length,
          r = S(e + 2);
        (t[r] = 255 & i),
          (t[r + 1] = i >> 8),
          (t[r + 2] = 255 ^ t[r]),
          (t[r + 3] = 255 ^ t[r + 1]);
        for (var o = 0; o < i; ++o) t[r + o + 4] = n[o];
        return 8 * (r + 4 + i);
      },
      N = function (t, e, n, i, o, c, d, u, p, h, f) {
        q(e, f++, n), ++o[256];
        for (
          var b = j(o, 15),
            m = b.t,
            g = b.l,
            v = j(c, 15),
            w = v.t,
            x = v.l,
            z = R(m),
            C = z.c,
            k = z.n,
            S = R(w),
            T = S.c,
            D = S.n,
            L = new r(19),
            P = 0;
          P < C.length;
          ++P
        )
          ++L[31 & C[P]];
        for (P = 0; P < T.length; ++P) ++L[31 & T[P]];
        for (
          var N = j(L, 7), B = N.t, F = N.l, $ = 19;
          $ > 4 && !B[l[$ - 1]];
          --$
        );
        var H,
          Y,
          U,
          X,
          V = (h + 5) << 3,
          G = I(o, y) + I(c, M) + d,
          K =
            I(o, m) +
            I(c, w) +
            d +
            14 +
            3 * $ +
            I(L, B) +
            2 * L[16] +
            3 * L[17] +
            7 * L[18];
        if (p >= 0 && V <= G && V <= K) return W(e, f, t.subarray(p, p + h));
        if ((q(e, f, 1 + (K < G)), (f += 2), K < G)) {
          (H = _(m, g, 0)), (Y = m), (U = _(w, x, 0)), (X = w);
          var Z = _(B, F, 0);
          for (
            q(e, f, k - 257),
              q(e, f + 5, D - 1),
              q(e, f + 10, $ - 4),
              f += 14,
              P = 0;
            P < $;
            ++P
          )
            q(e, f + 3 * P, B[l[P]]);
          f += 3 * $;
          for (var J = [C, T], Q = 0; Q < 2; ++Q) {
            var tt = J[Q];
            for (P = 0; P < tt.length; ++P) {
              var et = 31 & tt[P];
              q(e, f, Z[et]),
                (f += B[et]),
                et > 15 && (q(e, f, (tt[P] >> 5) & 127), (f += tt[P] >> 12));
            }
          }
        } else (H = O), (Y = y), (U = A), (X = M);
        for (P = 0; P < u; ++P) {
          var nt = i[P];
          if (nt > 255) {
            E(e, f, H[257 + (et = (nt >> 18) & 31)]),
              (f += Y[et + 257]),
              et > 7 && (q(e, f, (nt >> 23) & 31), (f += a[et]));
            var it = 31 & nt;
            E(e, f, U[it]),
              (f += X[it]),
              it > 3 && (E(e, f, (nt >> 5) & 8191), (f += s[it]));
          } else E(e, f, H[nt]), (f += Y[nt]);
        }
        return E(e, f, H[256]), f + Y[256];
      },
      B = new o([
        65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
        2117632,
      ]),
      F = new i(0),
      $ = function (t, e, n, l, c, d) {
        var u = d.z || t.length,
          h = new i(l + u + 5 * (1 + Math.ceil(u / 7e3)) + c),
          f = h.subarray(l, h.length - c),
          m = d.l,
          g = 7 & (d.r || 0);
        if (e) {
          g && (f[0] = d.r >> 3);
          for (
            var v = B[e - 1],
              _ = v >> 13,
              y = 8191 & v,
              M = (1 << n) - 1,
              O = d.p || new r(32768),
              w = d.h || new r(M + 1),
              A = Math.ceil(n / 3),
              x = 2 * A,
              z = function (e) {
                return (t[e] ^ (t[e + 1] << A) ^ (t[e + 2] << x)) & M;
              },
              C = new o(25e3),
              k = new r(288),
              D = new r(32),
              L = 0,
              q = 0,
              E = d.i || 0,
              j = 0,
              P = d.w || 0,
              R = 0;
            E + 2 < u;
            ++E
          ) {
            var I = z(E),
              F = 32767 & E,
              $ = w[I];
            if (((O[F] = $), (w[I] = F), P <= E)) {
              var H = u - E;
              if ((L > 7e3 || j > 24576) && (H > 423 || !m)) {
                (g = N(t, f, 0, C, k, D, q, j, R, E - R, g)),
                  (j = L = q = 0),
                  (R = E);
                for (var Y = 0; Y < 286; ++Y) k[Y] = 0;
                for (Y = 0; Y < 30; ++Y) D[Y] = 0;
              }
              var U = 2,
                X = 0,
                V = y,
                G = (F - $) & 32767;
              if (H > 2 && I == z(E - G))
                for (
                  var K = Math.min(_, H) - 1,
                    Z = Math.min(32767, E),
                    J = Math.min(258, H);
                  G <= Z && --V && F != $;

                ) {
                  if (t[E + U] == t[E + U - G]) {
                    for (var Q = 0; Q < J && t[E + Q] == t[E + Q - G]; ++Q);
                    if (Q > U) {
                      if (((U = Q), (X = G), Q > K)) break;
                      var tt = Math.min(G, Q - 2),
                        et = 0;
                      for (Y = 0; Y < tt; ++Y) {
                        var nt = (E - G + Y) & 32767,
                          it = (nt - O[nt]) & 32767;
                        it > et && ((et = it), ($ = nt));
                      }
                    }
                  }
                  G += ((F = $) - ($ = O[F])) & 32767;
                }
              if (X) {
                C[j++] = 268435456 | (p[U] << 18) | b[X];
                var rt = 31 & p[U],
                  ot = 31 & b[X];
                (q += a[rt] + s[ot]), ++k[257 + rt], ++D[ot], (P = E + U), ++L;
              } else (C[j++] = t[E]), ++k[t[E]];
            }
          }
          for (E = Math.max(E, P); E < u; ++E) (C[j++] = t[E]), ++k[t[E]];
          (g = N(t, f, m, C, k, D, q, j, R, E - R, g)),
            m ||
              ((d.r = (7 & g) | (f[(g / 8) | 0] << 3)),
              (g -= 7),
              (d.h = w),
              (d.p = O),
              (d.i = E),
              (d.w = P));
        } else {
          for (E = d.w || 0; E < u + m; E += 65535) {
            var at = E + 65535;
            at >= u && ((f[(g / 8) | 0] = m), (at = u)),
              (g = W(f, g + 1, t.subarray(E, at)));
          }
          d.i = u;
        }
        return T(h, 0, l + S(g) + c);
      },
      H = function () {
        var t = 1,
          e = 0;
        return {
          p: function (n) {
            for (var i = t, r = e, o = 0 | n.length, a = 0; a != o; ) {
              for (var s = Math.min(a + 2655, o); a < s; ++a) r += i += n[a];
              (i = (65535 & i) + 15 * (i >> 16)),
                (r = (65535 & r) + 15 * (r >> 16));
            }
            (t = i), (e = r);
          },
          d: function () {
            return (
              ((255 & (t %= 65521)) << 24) |
              ((65280 & t) << 8) |
              ((255 & (e %= 65521)) << 8) |
              (e >> 8)
            );
          },
        };
      },
      Y = function (t, e, n, r, o) {
        if (!o && ((o = { l: 1 }), e.dictionary)) {
          var a = e.dictionary.subarray(-32768),
            s = new i(a.length + t.length);
          s.set(a), s.set(t, a.length), (t = s), (o.w = a.length);
        }
        return $(
          t,
          null == e.level ? 6 : e.level,
          null == e.mem
            ? o.l
              ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length))))
              : 20
            : 12 + e.mem,
          n,
          r,
          o
        );
      },
      U = function (t, e, n) {
        for (; n; ++e) (t[e] = n), (n >>>= 8);
      };
    function X(t, e) {
      e || (e = {});
      var n = H();
      n.p(t);
      var i = Y(t, e, e.dictionary ? 6 : 2, 4);
      return (
        (function (t, e) {
          var n = e.level,
            i = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
          if (
            ((t[0] = 120),
            (t[1] = (i << 6) | (e.dictionary && 32)),
            (t[1] |= 31 - (((t[0] << 8) | t[1]) % 31)),
            e.dictionary)
          ) {
            var r = H();
            r.p(e.dictionary), U(t, 2, r.d());
          }
        })(i, e),
        U(i, i.length - 4, n.d()),
        i
      );
    }
    function V(t, e) {
      return (function (t, e, n, r) {
        var o = t.length,
          c = r ? r.length : 0;
        if (!o || (e.f && !e.l)) return n || new i(0);
        var d = !n,
          p = d || 2 != e.i,
          h = e.i;
        d && (n = new i(3 * o));
        var b = function (t) {
            var e = n.length;
            if (t > e) {
              var r = new i(Math.max(2 * e, t));
              r.set(n), (n = r);
            }
          },
          m = e.f || 0,
          g = e.p || 0,
          v = e.b || 0,
          y = e.l,
          M = e.d,
          O = e.m,
          A = e.n,
          D = 8 * o;
        do {
          if (!y) {
            m = C(t, g, 1);
            var q = C(t, g + 1, 3);
            if (((g += 3), !q)) {
              var E = t[(Y = S(g) + 4) - 4] | (t[Y - 3] << 8),
                j = Y + E;
              if (j > o) {
                h && L(0);
                break;
              }
              p && b(v + E),
                n.set(t.subarray(Y, j), v),
                (e.b = v += E),
                (e.p = g = 8 * j),
                (e.f = m);
              continue;
            }
            if (1 == q) (y = w), (M = x), (O = 9), (A = 5);
            else if (2 == q) {
              var P = C(t, g, 31) + 257,
                R = C(t, g + 10, 15) + 4,
                I = P + C(t, g + 5, 31) + 1;
              g += 14;
              for (var W = new i(I), N = new i(19), B = 0; B < R; ++B)
                N[l[B]] = C(t, g + 3 * B, 7);
              g += 3 * R;
              var F = z(N),
                $ = (1 << F) - 1,
                H = _(N, F, 1);
              for (B = 0; B < I; ) {
                var Y,
                  U = H[C(t, g, $)];
                if (((g += 15 & U), (Y = U >> 4) < 16)) W[B++] = Y;
                else {
                  var X = 0,
                    V = 0;
                  for (
                    16 == Y
                      ? ((V = 3 + C(t, g, 3)), (g += 2), (X = W[B - 1]))
                      : 17 == Y
                      ? ((V = 3 + C(t, g, 7)), (g += 3))
                      : 18 == Y && ((V = 11 + C(t, g, 127)), (g += 7));
                    V--;

                  )
                    W[B++] = X;
                }
              }
              var G = W.subarray(0, P),
                K = W.subarray(P);
              (O = z(G)), (A = z(K)), (y = _(G, O, 1)), (M = _(K, A, 1));
            } else L(1);
            if (g > D) {
              h && L(0);
              break;
            }
          }
          p && b(v + 131072);
          for (var Z = (1 << O) - 1, J = (1 << A) - 1, Q = g; ; Q = g) {
            var tt = (X = y[k(t, g) & Z]) >> 4;
            if ((g += 15 & X) > D) {
              h && L(0);
              break;
            }
            if ((X || L(2), tt < 256)) n[v++] = tt;
            else {
              if (256 == tt) {
                (Q = g), (y = null);
                break;
              }
              var et = tt - 254;
              if (tt > 264) {
                var nt = a[(B = tt - 257)];
                (et = C(t, g, (1 << nt) - 1) + u[B]), (g += nt);
              }
              var it = M[k(t, g) & J],
                rt = it >> 4;
              if (
                (it || L(3),
                (g += 15 & it),
                (K = f[rt]),
                rt > 3 &&
                  ((nt = s[rt]), (K += k(t, g) & ((1 << nt) - 1)), (g += nt)),
                g > D)
              ) {
                h && L(0);
                break;
              }
              p && b(v + 131072);
              var ot = v + et;
              if (v < K) {
                var at = c - K,
                  st = Math.min(K, ot);
                for (at + v < 0 && L(3); v < st; ++v) n[v] = r[at + v];
              }
              for (; v < ot; ++v) n[v] = n[v - K];
            }
          }
          (e.l = y),
            (e.p = Q),
            (e.b = v),
            (e.f = m),
            y && ((m = 1), (e.m = O), (e.d = M), (e.n = A));
        } while (!m);
        return v != n.length && d ? T(n, 0, v) : n.subarray(0, v);
      })(
        t.subarray(
          (function (t, e) {
            return (
              (8 != (15 & t[0]) ||
                t[0] >> 4 > 7 ||
                ((t[0] << 8) | t[1]) % 31) &&
                L(6, "invalid zlib data"),
              ((t[1] >> 5) & 1) == +!e &&
                L(
                  6,
                  "invalid zlib data: " +
                    (32 & t[1] ? "need" : "unexpected") +
                    " dictionary"
                ),
              2 + ((t[1] >> 3) & 4)
            );
          })(t, e && e.dictionary),
          -4
        ),
        { i: 2 },
        e && e.out,
        e && e.dictionary
      );
    }
    var G = "undefined" != typeof TextDecoder && new TextDecoder();
    try {
      G.decode(F, { stream: !0 });
    } catch (t) {}
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : "function" == typeof setTimeout && setTimeout;
  },
  function (t, e) {
    t.exports = function (t) {
      return "string" != typeof t
        ? t
        : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
          /["'() \t\n]/.test(t)
            ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"'
            : t);
    };
  },
  function (t, e, n) {
    var i = n(519);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
  },
  function (t, e, n) {
    t.exports = n(520);
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        props: { isLoading: { type: [Boolean] } },
        name: "AppointmentList",
        data: function () {
          return {
            appointmentRequest: {},
            appointmentData: [],
            isAppointmentLoading: !0,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            this.todayAppointmentList(),
              (this.appointmentRequest = this.defaultAppointmentRequest());
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          todayAppointmentList: function () {
            var t = this;
            this.$store.dispatch("userDataModule/fetchUserForDropdown", {
              userRoleName: this.patientRoleName,
            });
            var e = Object.assign({}, this.appointmentRequest);
            (e.date = moment(this.appointmentRequest.date).format(
              "YYYY-MM-DD"
            )),
              this.$store
                .dispatch("appointmentModule/fetchAppointmentData", {
                  filterData: e,
                })
                .then(function () {
                  t.appointmentData =
                    t.$store.state.appointmentModule.appointmentList;
                }),
              setTimeout(function () {
                t.isAppointmentLoading = !1;
              }, 500);
          },
          handleAppointmentEdit: function (t, e) {
            var n = this;
            (this.editAppointment = !0),
              this.$root.$emit("bv::toggle::collapse", e),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
              (this.editId = t.id),
              setTimeout(function () {
                n.appointmentFormObj = Object.assign({}, t);
              }, 200);
          },
          handleAppointmentDelete: function (e) {
            var n = this;
            if (void 0 !== e.id) {
              var r = t("#appointment_delete_" + e.id);
              r.prop("disabled", !0),
                r.html("<i class='fa fa-sync fa-spin'> </i>"),
                t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content:
                    this.formTranslation.common.press_yes_delete_billitems,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        Object(i.a)("appointment_delete", { id: e.id })
                          .then(function (t) {
                            r.prop("disabled", !1),
                              r.html("<i class='fa fa-trash'> </i>"),
                              void 0 !== t.data.status &&
                                !0 === t.data.status &&
                                (displayMessage(t.data.message),
                                n.reloadAppointment(),
                                n.$emit("refreshDashboard"));
                          })
                          .catch(function (t) {
                            r.prop("disabled", !1),
                              r.html("<i class='fa fa-trash'> </i>"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        r.prop("disabled", !1),
                          r.html("<i class='fa fa-trash'> </i>");
                      },
                    },
                  },
                });
            }
          },
          handleAppointmentStatus: function (e, n) {
            var r = this;
            if (
              "3" === n &&
              null !== e.encounter_id &&
              void 0 !== e.encounter_detail &&
              [1, "1"].includes(e.encounter_detail.status)
            )
              displayErrorMessage(
                this.formTranslation.common.encounter_not_close
              );
            else {
              var o = t("#status_update_" + e.id).find("i");
              t("#status_update_" + e.id).prop("disabled", !0),
                "4" === n
                  ? o.removeClass("fa fa-sign-in-alt")
                  : o.removeClass("fa fa-sign-out-alt"),
                o.addClass("fa fa-spinner fa-spin"),
                t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content:
                    this.formTranslation.common.update_appointment_status,
                  type: "green",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-primary",
                      keys: ["enter"],
                      action: function () {
                        Object(i.a)("appointment_update_status", {
                          appointment_id: e.id,
                          appointment_status: n,
                        })
                          .then(function (i) {
                            t("#status_update_" + e.id).prop("disabled", !1),
                              o.removeClass("fa fa-spinner fa-spin"),
                              "4" === n
                                ? o.addClass("fa fa-sign-in-alt")
                                : o.addClass("fa fa-sign-out-alt"),
                              void 0 !== i.data.status && !0 === i.data.status
                                ? (r.reloadAppointment(),
                                  displayMessage(i.data.message))
                                : displayErrorMessage(i.data.message);
                          })
                          .catch(function (i) {
                            t("#status_update_" + e.id).prop("disabled", !1),
                              o.removeClass("fa fa-spinner fa-spin"),
                              "4" === n
                                ? o.addClass("fa fa-sign-in-alt")
                                : o.addClass("fa fa-sign-out-alt"),
                              displayErrorMessage(
                                r.formTranslation.common.internal_server_error
                              );
                          });
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        t("#status_update_" + e.id).prop("disabled", !1),
                          o.removeClass("fa fa-spinner fa-spin"),
                          "4" === n
                            ? o.addClass("fa fa-sign-in-alt")
                            : o.addClass("fa fa-sign-out-alt");
                      },
                    },
                  },
                });
            }
          },
          reloadAppointment: function () {
            var t = this;
            setTimeout(function () {
              t.$store.dispatch("appointmentModule/fetchAppointmentData", {
                filterData: { date: moment(new Date()).format("YYYY-MM-DD") },
              });
            }, 300);
          },
          refreshAppointment: function () {
            var t = this;
            (this.isAppointmentLoading = !0),
              Object(i.a)("get_appointment_queue", {
                filterData: { date: moment(new Date()).format("YYYY-MM-DD") },
              })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.$store.commit(
                      "appointmentModule/FETCH_APPOINTMENT_DATA",
                      e.data.data
                    ),
                    t.$emit("isReloadTrue", !1));
                })
                .catch(function (e) {
                  t.isAppointmentLoading = !1;
                });
          },
        },
        computed: {
          appointmentList: function () {
            return this.$store.state.appointmentModule.appointmentList;
          },
          currentDate: function () {
            return moment().format("YYYY-MM-DD");
          },
          enableDisableAppointmentDescriptionStatus: function () {
            return this.$store.state.appointmentModule.description_status;
          },
        },
        watch: {
          isLoading: function (t) {
            t
              ? ((this.isAppointmentLoading = !0), this.refreshAppointment())
              : (this.isAppointmentLoading = !1);
          },
          appointmentList: function () {
            this.$emit("csvData", this.appointmentList);
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(144),
        r = n(625),
        o = n(145),
        a = n(66),
        s = n(8),
        l = (n(639), n(337));
      e.a = {
        components: {
          AppointmentForm: i.a,
          AppointmentViewCard: r.a,
          AppointmentReviewCard: o.a,
          addToCalendar: l.a,
          CustomForm: a.a,
        },
        props: {
          appointmentData: {
            type: [Object, Array],
            default: function () {
              return [];
            },
          },
          filter_status: {
            type: [String, Number, Object],
            default: function () {
              return [1];
            },
          },
          enable_delete_multiple: {
            type: [Boolean],
            default: function () {
              return [];
            },
          },
          delete_multiple_appointment: {
            type: [Boolean],
            default: function () {
              return [];
            },
          },
          patient_profile_id: {
            type: [Number, String],
            default: function () {
              return "";
            },
          },
        },
        data: function () {
          return {
            isLoading: !0,
            appointmentList: [],
            patientNumber: [],
            selectAll: !1,
            addAppointment: !1,
            editAppointment: !1,
            appointmentFormObj: {},
            editId: "",
            showCale: !1,
            hideFormBtn: !1,
            activeAccordianDetail: { id: 0, status: !1, for: "view" },
            admin_url: "",
            appointmentModalData: {},
            appointmentReviewData: {},
            appointmentReviewModal: !1,
            appointmentDetailModal: !1,
            appointmentCustomFormData: {},
            appointmentCustomFormModal: !1,
            appointmentCustomFormViewMode: !1,
            restrictAppointment: "",
            cancellationBuffer: 0,
          };
        },
        mounted: function () {
          var t = this;
          this.getRestrictAppointmentDay(),
            setTimeout(function () {
              t.init();
            }, 1e3),
            (this.admin_url = window.request_data.adminUrl),
            this.$root.$on("bv::collapse::state", function (e, n) {
              (t.activeAccordianDetail.id = e),
                (t.activeAccordianDetail.status = n);
            });
        },
        methods: {
          init: function () {
            var t = this;
            (this.appointmentFormObj = this.defaultAppointment()),
              setTimeout(function () {
                (t.appointmentFormObj.doctor_id = t.doctor_id),
                  (t.appointmentFormObj.clinic_id = t.clinic_id);
              }, 500);
          },
          defaultAppointment: function () {
            return {
              id: "",
              date: "",
              endDate: "",
              appointment_start_date: new Date(),
              appointment_start_time: "",
              visit_type: "",
              description: "",
              title: "",
              patient_id: {},
              doctor_id: {},
              clinic_id: {},
              status: "",
              video_consultation: !1,
            };
          },
          resendRequest: function (e) {
            var n = t("#resend_" + e).find("i");
            n.removeClass("fa fa-paper-plane "),
              n.addClass("fa fa-spinner fa-spin"),
              Object(s.b)("resend_zoom_link_patient", { id: e })
                .then(function (t) {
                  n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-paper-plane"),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {});
          },
          addToCalender: function () {
            this.showCale = !0;
          },
          getEncounterDetails: function (t) {
            return {
              html: !0,
              title: function () {
                return "Hello <b>Popover:</b> " + t.clinic_name;
              },
              content: function () {
                return "The date is:";
              },
            };
          },
          handleAppointmentEdit: function (t, e) {
            var n = this,
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = !1;
            i
              ? ((this.hideFormBtn = !1),
                "view" == this.activeAccordianDetail.for &&
                  (this.$root.$emit("bv::hide::collapse", e), (r = !0)),
                (this.activeAccordianDetail.for = "view"))
              : ((this.activeAccordianDetail.for = "edit"),
                "edit" == this.activeAccordianDetail.for &&
                  (this.$root.$emit("bv::hide::collapse", e), (r = !0)),
                (this.hideFormBtn = !0)),
              (this.editAppointment = !0),
              r && this.$root.$emit("bv::toggle::collapse", e),
              (this.editId = t.id);
            var o = Object.assign({}, t, {
              restrictAppointment: this.restrictAppointment,
            });
            setTimeout(function () {
              (o.appointment_start_date = new Date(
                t.appointment_start_date + " 00:00"
              )),
                (n.appointmentFormObj = Object.assign({}, o));
            }, 1e3);
          },
          getRestrictAppointmentDay: function () {
            var t = this;
            Object(s.a)("restrict_appointment_edit", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.restrictAppointment = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          handleAppointmentSave: function () {
            var t = this;
            this.$emit("closeFilterForm"),
              setTimeout(function () {
                t.$store.dispatch("appointmentModule/fetchAppointmentData", {
                  filterData: {
                    date: moment(new Date()).format("YYYY-MM-DD"),
                    status: 1,
                  },
                });
              }, 1e3);
          },
          closeAppointmentForm: function (t) {
            this.$root.$emit("bv::toggle::collapse", t);
          },
          handleAppointmentCancel: function (e) {
            var n = this;
            if (void 0 !== e.id) {
              var i = t("#appointment_cancel_" + e.id);
              i.prop("disabled", !0),
                i.html("<i class='fa fa-sync fa-spin'> </i>"),
                t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content: this.formTranslation.common.py_cancel_appointment,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        Object(s.a)("appointment_update_status", {
                          appointment_id: e.id,
                          appointment_status: 0,
                        })
                          .then(function (t) {
                            if (
                              (i.prop("disabled", !1),
                              i.html("<i class='fa fa-ban'> </i>"),
                              void 0 !== t.data.status && !0 === t.data.status)
                            ) {
                              displayMessage(t.data.message),
                                n.$store.dispatch(
                                  "appointmentModule/fetchAppointmentSlots",
                                  {
                                    date: moment(
                                      e.appointment_start_date
                                    ).format("YYYY-MM-DD"),
                                    appointment_id: "",
                                    clinic_id: e.clinic_id.id,
                                    doctor_id: e.doctor_id.id,
                                    patient_id: "",
                                  }
                                );
                              var r = n.appointmentList
                                .map(function (t) {
                                  return t.id;
                                })
                                .indexOf(e.id);
                              n.$store.commit(
                                "appointmentModule/DELETE_APPOINTMENT_DATA",
                                { id: r }
                              );
                            }
                          })
                          .catch(function (t) {
                            i.prop("disabled", !1),
                              i.html("<i class='fa fa-ban'> </i>"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        i.prop("disabled", !1),
                          i.html("<i class='fa fa-ban'> </i>");
                      },
                    },
                  },
                });
            }
          },
          handleAppointmentDelete: function (e) {
            var n = this;
            if (void 0 !== e.id) {
              var i = t("#appointment_delete_" + e.id);
              i.prop("disabled", !0),
                i.html("<i class='fa fa-sync fa-spin'> </i>"),
                t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content: this.formTranslation.common.py_delete_appointment,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        Object(s.a)("appointment_delete", { id: e.id })
                          .then(function (t) {
                            if (
                              (i.prop("disabled", !1),
                              i.html("<i class='fa fa-trash'> </i>"),
                              void 0 !== t.data.status && !0 === t.data.status)
                            ) {
                              displayMessage(t.data.message),
                                n.$store.dispatch(
                                  "appointmentModule/fetchAppointmentSlots",
                                  {
                                    date: moment(
                                      e.appointment_start_date
                                    ).format("YYYY-MM-DD"),
                                    appointment_id: "",
                                    clinic_id: e.clinic_id.id,
                                    doctor_id: e.doctor_id.id,
                                    patient_id: "",
                                  }
                                );
                              var r = n.appointmentList
                                .map(function (t) {
                                  return t.id;
                                })
                                .indexOf(e.id);
                              n.$store.commit(
                                "appointmentModule/DELETE_APPOINTMENT_DATA",
                                { id: r }
                              );
                            }
                          })
                          .catch(function (t) {
                            i.prop("disabled", !1),
                              i.html("<i class='fa fa-trash'> </i>"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        i.prop("disabled", !1),
                          i.html("<i class='fa fa-trash'> </i>");
                      },
                    },
                  },
                });
            }
          },
          handleAppointmentStatus: function (e, n) {
            var i = this;
            if (
              "3" === n &&
              null !== e.encounter_id &&
              void 0 !== e.encounter_detail &&
              [1, "1"].includes(e.encounter_detail.status)
            )
              displayErrorMessage(
                this.formTranslation.common.encounter_not_close
              );
            else {
              var r = t("#status_update_" + e.id).find("i");
              t("#status_update_" + e.id).prop("disabled", !0),
                "4" === n
                  ? r.removeClass("fa fa-sign-in-alt")
                  : r.removeClass("fa fa-sign-out-alt"),
                r.addClass("fa fa-spinner fa-spin"),
                t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content:
                    this.formTranslation.common.update_appointment_status,
                  type: "green",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-primary",
                      keys: ["enter"],
                      action: function () {
                        Object(s.a)("appointment_update_status", {
                          appointment_id: e.id,
                          appointment_status: n,
                        })
                          .then(function (o) {
                            t("#status_update_" + e.id).prop("disabled", !1),
                              r.removeClass("fa fa-spinner fa-spin"),
                              "4" === n
                                ? r.addClass("fa fa-sign-in-alt")
                                : r.addClass("fa fa-sign-out-alt"),
                              void 0 !== o.data.status && !0 === o.data.status
                                ? (i.$emit("reloadAppointment"),
                                  displayMessage(o.data.message))
                                : displayErrorMessage(o.data.message);
                          })
                          .catch(function (o) {
                            t("#status_update_" + e.id).prop("disabled", !1),
                              r.removeClass("fa fa-spinner fa-spin"),
                              "4" === n
                                ? r.addClass("fa fa-sign-in-alt")
                                : r.addClass("fa fa-sign-out-alt"),
                              displayErrorMessage(
                                i.formTranslation.common.internal_server_error
                              );
                          });
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        t("#status_update_" + e.id).prop("disabled", !1),
                          r.removeClass("fa fa-spinner fa-spin"),
                          "4" === n
                            ? r.addClass("fa fa-sign-in-alt")
                            : r.addClass("fa fa-sign-out-alt");
                      },
                    },
                  },
                });
            }
          },
          serviceTypeFormat: function (t, e) {
            return null == e || "" === e ? t : e.replace(/_/g, " ");
          },
          appointmentSelectCheck: function (t) {
            if (this.patientNumber.includes(t)) {
              var e = this.patientNumber.indexOf(t);
              e > -1 && this.patientNumber.splice(e, 1);
            } else this.patientNumber.push(t);
            this.$emit("enabledDeleteBtn", this.patientNumber);
          },
          allAppointmentSelectCheck: function () {
            var t = document.getElementsByClassName("custom-control-input");
            if (1 == this.selectAll)
              for (var e = 0; e < t.length; e++)
                "checkbox" == t[e].type &&
                  "appointment_id_select_all" != t[e].id &&
                  ((t[e].checked = !0),
                  this.appointmentSelectCheck(
                    t[e].id.replace("appointment_id", "")
                  ));
            else {
              for (e = 0; e < t.length; e++)
                "checkbox" == t[e].type &&
                  "appointment_id_select_all" != t[e].id &&
                  (t[e].checked = !1),
                  this.appointmentSelectCheck(
                    t[e].id.replace("appointment_id", "")
                  );
              (this.patientNumber = []),
                this.$emit("enabledDeleteBtn", this.patientNumber);
            }
          },
          deleteMultipleAppointment: function () {
            var e = this;
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content: this.formTranslation.common.py_delete_appointment,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    Object(s.b)("appointment_multiple_delete", {
                      id: e.patientNumber,
                    })
                      .then(function (t) {
                        (e.patientNumber = []),
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (e.$emit("reloadMultipleDeleteAppointment"),
                            e.$emit("enabledDeleteBtn", e.patientNumber),
                            displayMessage(t.data.message),
                            (e.selectAll = 0));
                      })
                      .catch(function (t) {
                        displayErrorMessage(
                          e.formTranslation.common.internal_server_error
                        );
                      });
                  },
                },
                cancel: {
                  text: this.formTranslation.common.cancel,
                  action: function () {
                    e.$emit("disableMultiDeleteButton");
                  },
                },
              },
            });
          },
          handleAppointmentPrint: function (e) {
            var n = this,
              i = t("#appointment_print_" + e);
            i.prop("disabled", !0),
              i.html("<i class='fa fa-sync fa-spin'> </i>"),
              Object(s.a)("get_appointment_print", { id: e })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    t(e.data.data).printArea({}),
                    setTimeout(function () {
                      i.prop("disabled", !1),
                        i.html("<i class='fa fa-print'> </i>");
                    }, 1e3);
                })
                .catch(function (t) {
                  i.prop("disabled", !1),
                    i.html("<i class='fa fa-print'> </i>"),
                    displayErrorMessage(
                      n.formTranslation.common.internal_server_error
                    );
                });
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
          customFormOpen: function (t, e, n) {
            (this.appointmentCustomFormData = t),
              (this.appointmentCustomFormData.module_id = e),
              (this.appointmentCustomFormModal = !0),
              (this.appointmentCustomFormViewMode = !n);
          },
        },
        computed: {
          clinic_id: function () {
            var t = this.$store.state.userDataModule.clinic;
            return { id: t.id, label: t.name };
          },
          user_data: function () {
            return this.$store.state.userDataModule.user;
          },
          doctor_id: function () {
            return "doctor" === this.getUserRole()
              ? {
                  id: this.user_data.ID,
                  label: this.user_data.display_name,
                  enableTeleMed: this.user_data.enableTeleMed,
                  timeSlot: this.user_data.timeSlot,
                }
              : {};
          },
          currentDate: function () {
            return moment().format("YYYY-MM-DD");
          },
          currentDateTime: function () {
            return moment().format("YYYY-MM-DD HH:mm:ss");
          },
        },
        watch: {
          appointmentData: function (t, e) {
            (this.appointmentList = []),
              (this.appointmentList = this.appointmentData),
              (this.isLoading = !1),
              this.$emit("updateAppointmentList", this.appointmentList);
          },
          enable_delete_multiple: function () {
            this.selectAll = this.enable_delete_multiple;
          },
          delete_multiple_appointment: function () {
            (this.selectAll = 1 != this.delete_multiple_appointment),
              1 == this.delete_multiple_appointment &&
                this.deleteMultipleAppointment();
          },
          filter_status: function () {
            (this.isLoading = !0),
              (this.patientNumber = []),
              this.$emit("enabledDeleteBtn", this.patientNumber);
          },
        },
        filters: { serviceFiler: function (t) {} },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        name: "CustomForm",
        props: {
          customFormModal: {
            type: [Boolean],
            default: function () {
              return !1;
            },
          },
          useModal: {
            type: [Boolean],
            default: function () {
              return !0;
            },
          },
          data: {
            type: [Object, Array],
            default: function () {
              return [];
            },
          },
          viewMode: {
            type: [Boolean],
            default: function () {
              return !1;
            },
          },
          fields: {
            type: [Object, Array],
            default: function () {
              return [];
            },
          },
        },
        data: function () {
          return {
            formLoading: !1,
            overlay: !0,
            formData: {},
            requiredFields: [],
          };
        },
        mounted: function () {
          this.fields && this.fields.length
            ? ((this.data.fields = this.fields), (this.overlay = !1))
            : this.init();
        },
        methods: {
          init: function () {
            var t = this;
            this.data.fields.map(function (e) {
              e.is_required &&
                ["1", "true"].includes(e.is_required.toString()) &&
                t.requiredFields.push(e.name);
            }),
              (this.overlay = !0),
              Object(i.a)("custom_form_data_get", {
                form_id: this.data.id,
                module_id: this.data.module_id,
              })
                .then(function (e) {
                  e.data.status &&
                    !0 === e.data.status &&
                    (t.formData = e.data.data),
                    (t.overlay = !1);
                })
                .catch(function (e) {
                  t.overlay = !1;
                });
          },
          closeModal: function () {
            this.$emit("closeModal");
          },
          handleSubmit: function () {
            var e = this;
            this.submit = !0;
            var n = !1,
              r = !0;
            this.requiredFields.length &&
              this.requiredFields.map(function (i, o) {
                e.formData[i]
                  ? t("#" + i + "_invalid-feedback").addClass("d-none")
                  : ((n = !0),
                    t("#" + i + "_invalid-feedback").removeClass("d-none"),
                    r
                      ? document
                          .querySelector("#" + i + "_invalid-feedback")
                          .scrollIntoView({
                            block: "center",
                            behavior: "smooth",
                          })
                      : (r = !1));
              }),
              n
                ? displayErrorMessage(
                    this.formTranslation.common.please_fill_all_required_fields
                  )
                : ((this.formLoading = !0),
                  Object(i.b)("custom_form_data_save", {
                    form_id: this.data.id,
                    module_id: this.data.module_id,
                    form_data: this.formData,
                  })
                    .then(function (t) {
                      t.data.status && !0 === t.data.status
                        ? (displayMessage(t.data.message), e.closeModal())
                        : displayErrorMessage(t.data.message),
                        (e.formLoading = !1);
                    })
                    .catch(function (t) {
                      e.formLoading = !1;
                    }));
          },
          fileUpload: function (e) {
            var n = this,
              i = e.file_upload_type.map(function (t) {
                return t.id;
              }),
              r = kivicareCustomImageUploader(
                this.formTranslation,
                "custom_field",
                !1,
                { mediaType: i }
              );
            r.on("select", function () {
              var i = r.state().get("selection").first().toJSON();
              t("#custom_field_" + e.name + "_file_upload")
                .attr("href", i.url)
                .html(i.name),
                n.$set(n.formData, e.name, {
                  id: i.id,
                  url: i.url,
                  name: i.filename,
                });
            }),
              r.open();
          },
        },
        computed: {
          formTitle: function () {
            return this.data.name && this.data.name.text
              ? '<h2 class="'
                  .concat(this.data.name.color, " ")
                  .concat(this.data.name.align, '">')
                  .concat(this.data.name.text, "</h2>")
              : "";
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(53),
        r = n.n(i),
        o = (n(73), n(9)),
        a = n(24),
        s = n(8);
      function l(t) {
        return (l =
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
      e.a = {
        name: "setupStep2",
        components: { VuePhoneNumberInput: r.a },
        data: function () {
          return {
            file: "",
            imagePreview:
              window.pluginBASEURL + "assets/images/kc-demo-img.png",
            stepStatus: !1,
            cardTitle: "Clinic Information",
            clinicData: {},
            loading: !1,
            submitted: !1,
            nextButtonText:
              'Save & Next <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
            specialityRequest: {},
            countryList: [],
            defaultCountryCode: null,
          };
        },
        validations: {
          clinicData: {
            name: { required: o.required },
            email: { required: o.required, emailValidate: a.c },
            telephone_no: {
              required: o.required,
              minLength: Object(o.minLength)(4),
              maxLength: Object(o.maxLength)(15),
            },
            specialties: { required: o.required },
            address: { required: o.required },
            city: { required: o.required },
            country: { required: o.required },
            postal_code: { required: o.required },
          },
        },
        mounted: function () {
          this.init();
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.clinicData.country_code = t.countryCode),
              (this.clinicData.country_calling_code = t.countryCallingCode);
          },
          init: function () {
            (this.clinicData = this.defaultClinicData()),
              this.getCurrentStepStatus(),
              this.getCountryList();
          },
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          handleSubmit: function () {
            var e = this,
              n = document.getElementById("clinicDataForm"),
              i = new FormData(n);
            i.append("profile_image", this.file),
              t.each(this.clinicData, function (t, e) {
                "object" === l(e) && (e = JSON.stringify(e)), i.append(t, e);
              }),
              (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.clinicData.$invalid
                ? (this.loading = !1)
                : Object(a.n)("clinicDataForm") &&
                  Object(s.b)("setup_clinic", i)
                    .then(function (t) {
                      (e.loading = !1),
                        void 0 !== t.data.status &&
                          !0 === t.data.status &&
                          (e.$store.dispatch(
                            "userDataModule/updateSetupStep",
                            e.currentStep
                          ),
                          void 0 !== t.data.data.insert_id &&
                          null !== t.data.data.insert_id
                            ? ((e.clinicData.id = t.data.data.insert_id),
                              displayMessage(t.data.message))
                            : displayErrorMessage(
                                "Clinic not saved successfully"
                              ));
                    })
                    .catch(function (t) {
                      (e.loading = !1),
                        displayErrorMessage("Internal server error");
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
              state: "",
              country: "",
              currency_prefix: "$",
              currency_postfix: "/-",
              postal_code: "",
              status: 1,
              specialties: [],
              currency: "",
              currency_abbreviation: "",
            };
          },
          addNewSpecialization: function (t) {
            var e = {
                label: t,
                type: "specialization",
                value: t.replace(" ", "_"),
                status: 1,
              },
              n = this;
            Object(s.b)("static_data_save", e)
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (n.clinicData.specialties.push({
                    id: e.data.insert_id,
                    label: t,
                  }),
                  n.$store.commit("staticDataModule/ADD_OPTION_STATIC_DATA", {
                    dataType: "specialization",
                    option: { id: e.data.insert_id, label: t },
                  }));
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          getCurrentStepStatus: function () {
            var t = this;
            Object(s.b)("get_setup_step_status", { step: 1 })
              .then(function (e) {
                e.data.status &&
                  ((t.stepStatus = !0),
                  (t.clinicData = t.setClinicData(e.data.data)),
                  "" !== e.data.data.country_calling_code &&
                    void 0 !== e.data.data.country_calling_code &&
                    (t.defaultCountryCode = e.data.data.country_code));
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          setClinicData: function (t) {
            return t
              ? {
                  id: t.id,
                  name: t.name,
                  email: t.email,
                  country_calling_code: t.country_calling_code,
                  country_code: t.country_code,
                  telephone_no: t.telephone_no,
                  address: t.address,
                  city: t.city,
                  state: t.state,
                  country: t.country,
                  postal_code: t.postal_code,
                  status: t.status,
                  specialties: JSON.parse(t.specialties),
                  currency_prefix: t.currency_prefix,
                  currency_postfix: t.currency_postfix,
                }
              : this.defaultClinicData();
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
          getCountryList: function () {
            var t = this;
            Object(s.a)("get_country_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.countryList = e.data.data);
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          uploadProfile: function () {
            (this.file = this.$refs.file.files[0]),
              (this.imagePreview = URL.createObjectURL(this.file));
          },
        },
        watch: {
          stepStatus: function (t) {
            t && this.complete();
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "clinic" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
          specialization: function () {
            return this.$store.state.staticDataModule.static_data
              .specialization;
          },
          specializationMultiselectLoader: function () {
            return this.$store.state.staticDataModule.static_data_loader;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(24),
        o = n(8);
      e.a = {
        name: "setupStep3",
        data: function () {
          return {
            cardTitle: "Add Doctor",
            stepStatus: !1,
            doctorData: {},
            loading: !1,
            nextLoader: !1,
            submitted: !1,
            timeSlots: [],
            qualificationSubmitted: !1,
            doctorsData: { dataList: [] },
            buttonText: '<i class="fa fa-plus"></i> Add doctor',
            qualification: {},
            qualificationTitle: "Add Qualification",
            qualificationBtn: '<i class="fa fa-plus"></i> Add qualification',
            qualificationEdit: !1,
            qualificationYears: [],
            price_type: ["range", "fixed"],
            clinicSession: [],
            nextButtonText:
              'Save & Next <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
          };
        },
        mounted: function () {
          this.init(), this.complete();
        },
        validations: {
          doctorData: {
            first_name: {
              required: i.required,
              alpha: i.alpha,
              minLength: Object(i.minLength)(2),
              maxLength: Object(i.maxLength)(15),
            },
            last_name: {
              required: i.required,
              alpha: i.alpha,
              minLength: Object(i.minLength)(2),
              maxLength: Object(i.maxLength)(15),
            },
            username: { required: i.required },
            user_email: { required: i.required, emailValidate: r.c },
            mobile_number: {
              required: i.required,
              phoneNumber: r.i,
              minLength: Object(i.minLength)(6),
              maxLength: Object(i.maxLength)(15),
            },
            specialties: { required: i.required },
            dob: { required: i.required },
            price_type: { required: i.required },
            price: {
              required: Object(i.requiredIf)(function (t) {
                return "fixed" === t.price_type;
              }),
              minValue: Object(i.minValue)(0),
              maxValue: Object(i.maxValue)(1e18),
            },
            minPrice: {
              required: Object(i.requiredIf)(function (t) {
                return "range" === t.price_type;
              }),
              minValue: Object(i.minValue)(0),
              maxValue: Object(i.maxValue)(1e18),
            },
            maxPrice: {
              required: Object(i.requiredIf)(function (t) {
                return "range" === t.price_type;
              }),
              minimumValue: r.g,
              maxValue: Object(i.maxValue)(1e18),
            },
            time_slot: { required: i.required },
          },
          qualification: {
            degree: { required: i.required },
            university: { required: i.required },
            year: { required: i.required },
          },
        },
        methods: {
          init: function () {
            this.getCurrentStepStatus(),
              (this.doctorData = this.defaultDoctorData()),
              (this.qualification = this.defaultQualification()),
              (this.qualificationYears = this.getQualificationYear());
          },
          handleSubmit: function () {
            var t = this,
              e =
                void 0 !== this.doctorData.username &&
                null !== this.doctorData.username
                  ? this.doctorData.username.toString().trim()
                  : "";
            (e = e.replace(/\D+/g, "")),
              (this.doctorData.username = e),
              (void 0 === this.doctorData.ID ||
                null === this.doctorData.ID ||
                "" === this.doctorData.ID) &&
                (this.doctorData.user_pass = e),
              (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.doctorData.$invalid || this.$v.qualification.$touch()
                ? (this.loading = !1)
                : Object(r.n)("doctorDataForm") &&
                  Object(o.b)("setup_doctor", this.doctorData)
                    .then(function (e) {
                      void 0 !== e.data.status && !0 === e.data.status
                        ? ((t.doctorData = t.defaultDoctorData()),
                          t.getCurrentStepStatus(),
                          displayMessage(e.data.message),
                          (t.buttonText =
                            '<i class="fa fa-plus"></i> Add doctor'),
                          "" !== t.doctorData.ID &&
                            null !== t.doctorData.ID &&
                            void 0 !== t.doctorData.ID &&
                            t.$store.dispatch(
                              "userDataModule/fetchUserData",
                              {}
                            ))
                        : displayErrorMessage(e.data.message),
                        (t.loading = !1),
                        (t.submitted = !1),
                        (t.qualificationSubmitted = !1);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        (t.submitted = !1),
                        displayErrorMessage("Internal server error");
                    });
          },
          addQualification: function () {
            (this.qualificationSubmitted = !0),
              this.$v.qualification.$touch(),
              this.$v.qualification.$invalid ||
                (this.qualificationEdit
                  ? (this.qualificationEdit = !1)
                  : (void 0 === this.doctorData.qualifications &&
                      (this.doctorData.qualifications = []),
                    this.doctorData.qualifications.push(this.qualification)),
                (this.qualificationTitle = "Add qualification"),
                (this.qualificationBtn =
                  '<i class="fa fa-plus"></i> Add qualification'),
                (this.qualification = this.defaultQualification()),
                (this.qualificationSubmitted = !1));
          },
          editQualification: function (t) {
            (this.qualificationTitle = "Edit qualification"),
              (this.qualificationEdit = !0),
              (this.qualificationBtn =
                '<i class="fa fa-save"></i> Save qualification'),
              (this.qualification = this.doctorData.qualifications[t - 1]);
          },
          deleteQualification: function (e) {
            var n = this;
            void 0 !== this.doctorData.qualifications[e - 1]
              ? t.confirm({
                  title: "Are you sure ?",
                  content: "Press yes to delete",
                  type: "red",
                  buttons: {
                    ok: {
                      text: "Yes",
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        void 0 !== n.doctorData.qualifications[e - 1] &&
                          n.doctorData.qualifications.splice(e - 1, 1);
                      },
                    },
                    cancel: function () {},
                  },
                })
              : displayErrorMessage("Doctor data not found.");
          },
          defaultDoctorData: function () {
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
                address: "",
                city: "",
                state: "",
                country: "",
                postal_code: "",
                specialties: [],
                price_type: "range",
                price: 0,
                minPrice: 0,
                maxPrice: 0,
                qualifications: [],
                time_slot: 5,
                custom_fields: {},
                user_status: 0,
              }
            );
          },
          defaultQualification: function () {
            return { degree: "", university: "", year: "", file: "" };
          },
          getCurrentStepStatus: function () {
            var t = this;
            Object(o.b)("get_setup_step_status", { step: 2 })
              .then(function (e) {
                if (void 0 !== e.data.status && !0 === e.data.status) {
                  var n = e.data.data.doctors;
                  (t.clinicSession = e.data.data.clinic_session),
                    (t.stepStatus = !0),
                    (t.doctorsData.dataList = n),
                    t.complete();
                }
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          setDoctorData: function (t) {
            return {
              ID: t.ID,
              first_name: t.first_name,
              last_name: t.last_name,
              username: t.username,
              user_email: t.user_email,
              user_pass: t.user_pass,
              mobile_number: t.mobile_number,
              gender: t.gender,
              dob: t.dob,
              about_me: t.about_me,
              specialties: t.specialties,
              price_type: t.price_type,
              minPrice: t.minPrice,
              maxPrice: t.maxPrice,
              price: t.price,
              time_slot: t.time_slot,
              qualifications: t.qualifications,
            };
          },
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          getQualificationYear: function () {
            for (
              var t = [], e = new Date().getFullYear(), n = 1950;
              n <= e;
              n++
            )
              t.push(n);
            return t.reverse();
          },
          getDoctorDetail: function (t) {
            var e = this;
            Object(o.a)("doctor_edit", { id: t })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  ((e.doctorData = e.setDoctorData(t.data.data)),
                  (e.buttonText = '<i class="fa fa-save"></i> Save'),
                  "" !== e.doctorData.ID && e.doctorData.ID);
              })
              .catch(function (t) {
                displayErrorMessage("Record not found");
              });
          },
          deleteDoctor: function (e) {
            var n = this,
              i = this.doctorsData.dataList.findIndex(function (t) {
                return t.ID === e;
              });
            void 0 !== e &&
              t.confirm({
                title: "Are you sure ?",
                content: "Press yes to delete",
                type: "red",
                buttons: {
                  ok: {
                    text: "Yes",
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(o.a)("doctor_delete", { id: e })
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (displayMessage(t.data.message),
                            n.doctorsData.dataList.splice(i, 1));
                        })
                        .catch(function (t) {
                          displayErrorMessage("Record not found");
                        });
                    },
                  },
                  cancel: function () {},
                },
              });
          },
          getTimeSlots: function () {
            for (var t = 5, e = 0; e < 12; e++)
              t <= 60 && this.timeSlots.push(t), (t += 5);
          },
          handleTimeSlotChange: function () {
            "" !== this.doctorData.ID &&
              null !== this.doctorData.ID &&
              void 0 !== this.doctorData.ID &&
              this.checkDoctorTimeSlotExist() &&
              displayAlert(
                "Warning!",
                "Changing time slot will reset session time slot."
              );
          },
          checkDoctorTimeSlotExist: function () {
            var t,
              e = this;
            return (
              void 0 !==
                (t = this.clinicSession.filter(function (t) {
                  return (t.doctor_id = e.doctorData.ID);
                })).length && t.length > 0
            );
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
          handleNexClick: function () {
            var t = this;
            (this.nextLoader = !0),
              this.$store
                .dispatch("userDataModule/updateSetupStep", this.currentStep)
                .then(function () {
                  t.nextLoader = !1;
                });
          },
          handleResetCharge: function () {
            "range" === this.doctorData.price_type
              ? (this.doctorData.price = 0)
              : ((this.doctorData.minPrice = 0),
                (this.doctorData.maxPrice = 0));
          },
          addNewSpecialization: function (t) {
            var e = {
                label: t,
                type: "specialization",
                value: t.replace(" ", "_"),
                status: 1,
              },
              n = this;
            Object(o.b)("static_data_save", e)
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (n.doctorData.specialties.push({
                    id: e.data.insert_id,
                    label: t,
                  }),
                  n.$store.commit("staticDataModule/ADD_OPTION_STATIC_DATA", {
                    dataType: "specialization",
                    option: { id: e.data.insert_id, label: t },
                  }));
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
        },
        computed: {
          getSpeciality: function () {
            return function (t) {
              if (null != (t = t) && t.length > 0) {
                var e = "";
                return (
                  t.map(function (n, i) {
                    return (
                      (e += t.length === i + 1 ? n.label : n.label + ", "), n
                    );
                  }),
                  e
                );
              }
              return " - ";
            };
          },
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "doctor" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
          doctorSpecialization: function () {
            return this.$store.state.staticDataModule.static_data
              .specialization;
          },
          specializationMultiselectLoader: function () {
            return this.$store.state.staticDataModule.static_data_loader;
          },
        },
        watch: {
          stepStatus: function (t) {
            t && this.complete();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9),
        o = n(24);
      e.a = {
        name: "setupStep4",
        data: function () {
          return {
            submitted: !1,
            cardTitle: "Clinic session",
            clinicSessionTitle: "Clinic session ",
            clinicData: {},
            clinicSession: {},
            doctors: [],
            loading: !1,
            buttonText: '<i class="fa fa-plus"></i> Add',
            days: [
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
            ],
            sessionButtonText: '<i class="fa fa-plus"></i> Add session',
            sessionSubmitted: !1,
            sessionEdit: !1,
            s_two_end_time_required_validation: !1,
            weekDaysValidationCheck: !1,
            sessionDoctorValidationCheck: !1,
            editSessionDataIndex: "",
            nextButtonText:
              'Save & Next <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
            timeSlots: { sessionOne: [], sessionTwo: [] },
            daysAll: 0,
            time_slots: [],
          };
        },
        validations: {
          clinicData: {
            name: { required: r.required },
            email: { required: r.required, emailValidate: o.c },
            telephone_no: { required: r.required },
            address: { required: r.required },
            city: { required: r.required },
            state: { required: r.required },
            country: { required: r.required },
            postal_code: { required: r.required, numeric: r.numeric },
            doctors: { required: r.required },
            status: { required: r.required },
          },
          clinicSession: {
            doctors: { required: r.required },
            days: { required: r.required },
            time_slot: { required: r.required },
            s_one_start_time: {
              HH: { required: r.required },
              mm: { required: r.required },
              maxTime: Object(o.d)("s_one_end_time"),
            },
            s_one_end_time: {
              HH: { required: r.required },
              mm: { required: r.required },
              minTime: Object(o.f)("s_one_start_time"),
            },
            s_two_start_time: {
              minTime: Object(o.f)("s_one_end_time"),
              maxTime: Object(o.d)("s_two_end_time"),
            },
            s_two_end_time: { minTime: Object(o.f)("s_two_start_time") },
          },
        },
        mounted: function () {
          this.init(), this.$emit("can-continue", { value: !0 });
        },
        methods: {
          init: function () {
            "clinic_session" === this.checkStep.name &&
              (this.nextButtonText =
                ' Finish <i class="fa fa-angle-double-right" aria-hidden="true"></i>'),
              (this.clinicData = this.defaultClinicData()),
              (this.clinicSession = this.defaultClinicSessionData()),
              this.getCurrentStepStatus(),
              this.getDoctorsData(),
              this.getTimeSlots();
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              Object(i.b)("setup_clinic_session", this.clinicData)
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? (displayMessage(e.data.message),
                      t.$store
                        .dispatch(
                          "userDataModule/updateSetupStep",
                          t.currentStep
                        )
                        .then(function () {
                          "clinic_session" === t.checkStep.name &&
                            t.$store.dispatch("userDataModule/finishSetup", {});
                        }))
                    : ((t.loading = !1), displayErrorMessage(e.data.message)),
                    (t.loading = !1),
                    (t.submitted = !0);
                })
                .catch(function (e) {
                  (t.loading = !1),
                    (t.submitted = !0),
                    displayErrorMessage("Internal server error");
                });
          },
          defaultClinicData: function () {
            return {
              name: "",
              email: "",
              telephone_no: "",
              address: "",
              city: "",
              state: "",
              country: "",
              postal_code: "",
              status: 1,
              specialties: [],
              doctors: [],
              clinic_sessions: [],
            };
          },
          defaultClinicSessionData: function () {
            return {
              doctors: {},
              days: [],
              time_slot: 5,
              s_one_start_time: { HH: "", mm: "" },
              s_one_end_time: { HH: "", mm: "" },
              s_two_start_time: { HH: "", mm: "" },
              s_two_end_time: { HH: "", mm: "" },
            };
          },
          getCurrentStepStatus: function () {
            var t = this;
            Object(i.b)("get_setup_step_status", { step: 3 })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.clinicData.clinic_sessions = e.data.data);
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          getDoctorsData: function () {
            var t = this;
            this.$store
              .dispatch("userDataModule/fetchDefaultClinic")
              .then(function (e) {
                Object(i.a)("get_static_data", {
                  data_type: "clinic_doctors",
                  clinic_id: t.$store.state.userDataModule.clinic.id,
                })
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.doctors = e.data.data);
                  })
                  .catch(function (t) {
                    displayErrorMessage("Internal server error");
                  });
              });
          },
          addSessionData: function () {
            if (
              ((this.sessionSubmitted = !0),
              (this.sessionDoctorValidationCheck = !1),
              this.$v.clinicSession.$touch(),
              0 === this.timeSlots.length)
            )
              return !1;
            if (!this.$v.clinicSession.$invalid) {
              for (
                var t = this.clinicSession.doctors.id, e = 0;
                e < this.clinicData.clinic_sessions.length;
                e++
              ) {
                var n = this.clinicData.clinic_sessions[e].doctors,
                  i = this.clinicData.clinic_sessions[e].days;
                if (parseInt(t) === parseInt(n.id))
                  for (var r = 0; r < this.clinicSession.days.length; r++) {
                    var a = this.clinicSession.days[r];
                    if (i.includes(a)) {
                      var s = Object(o.p)(
                        this.clinicSession,
                        this.clinicData.clinic_sessions[e]
                      );
                      if ("" !== this.editSessionDataIndex) {
                        if (this.editSessionDataIndex !== e && !1 === s) {
                          this.sessionDoctorValidationCheck = !0;
                          break;
                        }
                      } else if (!1 === s) {
                        this.sessionDoctorValidationCheck = !0;
                        break;
                      }
                    }
                  }
                if (this.sessionDoctorValidationCheck) break;
              }
              if (this.sessionDoctorValidationCheck) return !1;
              if (
                "" !== this.clinicSession.s_two_start_time.HH &&
                "" !== this.clinicSession.s_two_start_time.mm
              ) {
                if (
                  "" === this.clinicSession.s_two_end_time.HH &&
                  "" === this.clinicSession.s_two_end_time.mm
                )
                  return (this.s_two_end_time_required_validation = !0), !1;
              } else this.s_two_end_time_required_validation = !1;
              this.sessionEdit
                ? ((this.clinicData.clinic_sessions[this.editSessionDataIndex] =
                    this.clinicSession),
                  (this.sessionEdit = !1))
                : (void 0 === this.clinicData.clinic_sessions &&
                    (this.clinicData.clinic_sessions = []),
                  this.clinicData.clinic_sessions.push(this.clinicSession)),
                (this.clinicSessionTitle = "Add session"),
                (this.sessionButtonText =
                  '<i class="fa fa-plus"></i> Add session'),
                (this.clinicSession = this.defaultClinicSessionData()),
                (this.daysAll = 0),
                (this.sessionSubmitted = !1),
                (this.editSessionDataIndex = ""),
                (this.s_two_end_time_required_validation = !1);
            }
          },
          editSessionData: function (t) {
            (this.clinicSessionTitle = "Edit session"),
              (this.sessionEdit = !0),
              (this.sessionButtonText =
                '<i class="fa fa-save"></i> Save session'),
              (this.editSessionDataIndex = t - 1),
              (this.clinicSession = Object.assign(
                {},
                this.clinicData.clinic_sessions[t - 1]
              )),
              this.clinicSession.days.length >= 7
                ? (this.daysAll = 1)
                : (this.daysAll = 0),
              this.generateTimeSlotTime();
          },
          deleteSessionData: function (e) {
            var n = this;
            void 0 !== this.clinicData.clinic_sessions[e - 1]
              ? t.confirm({
                  title: "Are you sure ?",
                  content: "Press yes to delete clinic session",
                  type: "red",
                  buttons: {
                    ok: {
                      text: "Yes",
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        void 0 !== n.clinicData.clinic_sessions[e - 1] &&
                          (n.clinicData.clinic_sessions.splice(e - 1, 1),
                          (n.clinicSession = n.defaultClinicSessionData()));
                      },
                    },
                    cancel: function () {},
                  },
                })
              : displayErrorMessage("Session data not found.");
          },
          sessionDoctorsValidation: function (t) {
            (this.timeSlots = []),
              (this.clinicSession.s_one_start_time =
                this.clinicSession.s_one_end_time =
                this.clinicSession.s_two_start_time =
                this.clinicSession.s_two_end_time =
                  { HH: "", mm: "" });
          },
          sessionDaysValidation: function () {
            this.weekDaysValidationCheck = !1;
            for (var t = 0; t < this.clinicSession.days.length; t++)
              for (var e = 0; e < this.clinicData.clinic_sessions.length; e++) {
                if ("" !== this.editSessionDataIndex) {
                  if (
                    e != this.editSessionDataIndex &&
                    this.clinicData.clinic_sessions[e].days.includes(
                      this.clinicSession.days[t]
                    )
                  ) {
                    this.weekDaysValidationCheck = !0;
                    break;
                  }
                } else if (
                  this.clinicData.clinic_sessions[e].days.includes(
                    this.clinicSession.days[t]
                  )
                ) {
                  this.weekDaysValidationCheck = !0;
                  break;
                }
                if (this.weekDaysValidationCheck) break;
              }
          },
          getTimeSlots: function () {
            for (var t = 5, e = 0; e < 12; e++)
              t <= 60 && this.time_slots.push(t), (t += 5);
          },
          getTimeSlot: function (t, e, n) {
            var i =
                void 0 !== this.clinicSession.time_slot
                  ? this.clinicSession.time_slot
                  : "",
              r = "",
              a = [];
            if (
              "" !== t.HH &&
              "" !== t.mm &&
              "" !== e.HH &&
              "" !== e.mm &&
              "" !== i
            )
              for (
                var s = Object(o.h)(t),
                  l = Object(o.h)(e),
                  c = l.diff(s, "minutes"),
                  d = Math.ceil(c / i),
                  u = 0;
                u < d;
                u++
              ) {
                var p = {
                  time: (r =
                    0 === u
                      ? s.format("HH:mm")
                      : moment(r, "HH:mm").add(i, "minutes").format("HH:mm")),
                  isValid: !0,
                  timeSlotDiff: i,
                };
                if (moment(r, "HH:mm").isAfter(l)) {
                  var h = moment(r, "HH:mm").diff(l, "minutes");
                  (p.isValid = !1), (p.timeSlotDiff = Math.abs(i - h));
                }
                moment(r, "HH:mm").isBefore(l) && (Math.abs(i - c), a.push(p));
              }
            return a;
          },
          generateTimeSlotTime: function () {
            this.timeSlots = [];
            for (
              var t = [
                  {
                    startTime: this.clinicSession.s_one_start_time,
                    endTime: this.clinicSession.s_one_end_time,
                  },
                  {
                    startTime: this.clinicSession.s_two_start_time,
                    endTime: this.clinicSession.s_two_end_time,
                  },
                ],
                e = 0;
              e < t.length;
              e++
            ) {
              var n = this.getTimeSlot(
                t[e].startTime,
                t[e].endTime,
                this.clinicSession.doctors
              );
              n.length > 0 && (this.timeSlots[e] = n);
            }
          },
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
          handleUncheckDays: function () {
            void 0 !== this.clinicSession.days &&
            7 === this.clinicSession.days.length
              ? (this.daysAll = !0)
              : (this.daysAll = !1);
          },
          handleAllDaysChecked: function () {
            this.daysAll
              ? (this.clinicSession.days = this.days)
              : (this.clinicSession.days = []);
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "clinic_session" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
          checkStep: function () {
            return this.$store.state.userDataModule.user.step_config
              .slice(-1)
              .pop();
          },
          doctorSlotTimeLimit: function () {
            return void 0 !== this.clinicSession.doctors &&
              null !== this.clinicSession.doctors &&
              void 0 !== this.clinicSession.doctors.timeSlot &&
              null !== this.clinicSession.doctors.timeSlot
              ? this.clinicSession.doctors.timeSlot
              : 0;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(340),
        o = n(141);
      function a(t) {
        return (a =
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
      function s(t, e) {
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
      function l(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != a(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != a(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == a(e) ? e : e + "";
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
      e.a = {
        data: function () {
          return {
            visible: !1,
            request_status: "off",
            showEditForm: !1,
            showAddForm: !1,
            staticId: -1,
            pageLoader: !0,
            staticDataList: { column: [], data: [] },
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: {},
          };
        },
        components: { Create: r.a },
        mounted: function () {
          ["patient"].includes(this.getUserRole()) &&
            this.$router.push({ name: "403" }),
            this.init(),
            this.getModule();
        },
        methods: (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? s(Object(n), !0).forEach(function (e) {
                  l(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        })(
          {
            init: function () {
              (this.staticDataList = this.defaultStaticDataList()),
                (this.globalCheckboxApplyData =
                  this.defaultGlobalCheckboxApplyData()),
                (this.globalCheckboxApplyDataActions =
                  this.defaultGlobalCheckboxApplyDataActions()),
                this.getStaticData(),
                void 0 !==
                  !this.$store.state.staticDataModule.static_data
                    .static_data_types &&
                  this.$store.dispatch("staticDataModule/fetchStaticData", {
                    type: "static_data_types",
                  });
            },
            defaultGlobalCheckboxApplyData: function () {
              return {
                action_perform: "delete",
                module: "static_data",
                data: [],
              };
            },
            defaultGlobalCheckboxApplyDataActions: function () {
              var t = [];
              return (
                this.kcCheckPermission("static_data_edit") &&
                  t.push({
                    value: "active",
                    label: this.formTranslation.service.dt_active,
                  }),
                this.kcCheckPermission("static_data_edit") &&
                  t.push({
                    value: "inactive",
                    label: this.formTranslation.service.dt_inactive,
                  }),
                this.kcCheckPermission("static_data_edit") &&
                  t.push({
                    value: "delete",
                    label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
                  }),
                t
              );
            },
            defaultStaticDataList: function () {
              return {
                column: [
                  {
                    field: "id",
                    label: this.formTranslation.common.id,
                    width: "100px",
                    filterOptions: {
                      enabled: !0,
                      placeholder: this.formTranslation.common.id,
                      filterValue: "",
                    },
                  },
                  {
                    field: "label",
                    width: "350px",
                    label: this.formTranslation.static_data.dt_lbl_name,
                    filterOptions: {
                      enabled: !0,
                      placeholder:
                        this.formTranslation.static_data.dt_lbl_plh_fltr_name,
                      filterValue: "",
                    },
                  },
                  {
                    field: "type",
                    label: this.formTranslation.static_data.dt_lbl_type,
                    width: "190px",
                    filterOptions: {
                      enabled: !0,
                      placeholder:
                        this.formTranslation.static_data.dt_lbl_plh_fltr_type,
                      filterValue: "",
                      filterDropdownItems: [
                        {
                          value: "specialization",
                          text: this.formTranslation.doctor.dt_lbl_specialties,
                        },
                        {
                          value: "service_type",
                          text: this.formTranslation.widgets.service_type,
                        },
                        {
                          value: "prescription_medicine",
                          text: this.formTranslation.patient_encounter
                            .prescription,
                        },
                        {
                          value: "clinical_problems",
                          text: this.formTranslation.encounter_dashboard
                            .problems,
                        },
                        {
                          value: "clinical_observations",
                          text: this.formTranslation.encounter_dashboard
                            .observation,
                        },
                      ],
                    },
                  },
                  {
                    field: "status",
                    label: this.formTranslation.static_data.dt_lbl_status,
                    width: "150px",
                    filterOptions: {
                      enabled: !0,
                      placeholder:
                        this.formTranslation.static_data
                          .dt_lbl_plh_sr_fltr_status,
                      filterValue: "",
                      filterDropdownItems: [
                        {
                          value: "1",
                          text: this.formTranslation.common.active,
                        },
                        {
                          value: "0",
                          text: this.formTranslation.common.inactive,
                        },
                      ],
                    },
                    html: !0,
                  },
                  {
                    label: this.formTranslation.static_data.dt_lbl_action,
                    field: "actions",
                    width: "100px",
                    sortable: !1,
                    html: !0,
                  },
                ],
                data: [],
              };
            },
            getStaticData: function () {
              var t = this;
              (this.pageLoader = !0),
                Object(i.a)("static_data_list", this.serverParams)
                  .then(function (e) {
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.pageLoader = !1),
                        (t.staticDataList.data = e.data.data),
                        (t.totalRows = e.data.total_rows))
                      : ((t.pageLoader = !1),
                        (t.staticDataList.data = []),
                        (t.totalRows = 0));
                  })
                  .catch(function (e) {
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                  });
            },
            deleteListingData: function (e, n) {
              var r = this;
              void 0 !== this.staticDataList.data[n - 1]
                ? t.confirm({
                    title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                    content: this.formTranslation.common.reset_appointment_slot,
                    type: "red",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-danger",
                        keys: ["enter"],
                        action: function () {
                          Object(i.b)("static_data_delete", { id: e.id })
                            .then(function (t) {
                              void 0 !== t.data.status && !0 === t.data.status
                                ? void 0 !== r.staticDataList.data &&
                                  (r.staticDataList.data.splice(e.index, 1),
                                  displayMessage(t.data.message))
                                : displayErrorMessage(t.data.message);
                            })
                            .catch(function (t) {
                              displayErrorMessage(
                                r.formTranslation.common.internal_server_error
                              );
                            });
                        },
                      },
                      cancel: { text: this.formTranslation.common.cancel },
                    },
                  })
                : displayErrorMessage(
                    this.formTranslation.static_data.static_data_not_found
                  );
            },
            updateParams: function (t) {
              (this.serverParams = Object.assign({}, this.serverParams, t)),
                this.getStaticData();
            },
            onPageChange: function (t) {
              this.updateParams({ page: t.currentPage });
            },
            onPerPageChange: function (t) {
              this.oldServerParams.perPage !== t.currentPerPage &&
                ((this.oldServerParams.perPage = t.currentPerPage),
                this.updateParams({
                  perPage: t.currentPerPage,
                  page: t.currentPage,
                }));
            },
            onSortChange: function (t) {
              this.updateParams({ sort: t });
            },
            globalFilter: _.debounce(function (t) {
              this.oldServerParams.searchTerm !== t.searchTerm &&
                ((this.oldServerParams.searchTerm = t.searchTerm),
                this.updateParams({
                  searchTerm: t.searchTerm,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
            }, 300),
            onColumnFilter: _.debounce(function (t) {
              var e = !0,
                n = !0;
              Object.values(t.columnFilters).map(function (t, n, i) {
                t && (e = !1);
              }),
                Object.values(this.oldServerParams.columnFilters).map(function (
                  t,
                  e,
                  i
                ) {
                  t && (n = !1);
                }),
                (e && n) ||
                  ((this.oldServerParams.columnFilters = Object.assign(
                    {},
                    t.columnFilters
                  )),
                  this.updateParams({
                    columnFilters: t.columnFilters,
                    perPage: this.serverParams.perPage,
                    page: 1,
                  }));
            }, 300),
            deleteStaticData: function (e) {
              var n = this;
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content:
                  this.formTranslation.common.press_yes_to_delete_static_data,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.b)("static_data_delete", {
                        id: n.staticDataList.data[e - 1].id,
                      })
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.staticDataList.data.splice(e - 1, 1),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            },
            editStaticData: function (t, e) {
              (this.staticId = e),
                (this.showAddForm = !1),
                (this.showEditForm = !0),
                (this.visible = !0),
                window.scroll({ top: 0, behavior: "smooth" });
            },
            handleStaticDataForm: function () {
              this.showAddForm
                ? ((this.visible = !1),
                  (this.showAddForm = !1),
                  (this.showEditForm = !1))
                : ((this.visible = !0),
                  (this.showAddForm = !0),
                  (this.showEditForm = !1));
            },
            closeForm: function () {
              (this.visible = !1),
                (this.staticId = -1),
                (this.showAddForm = !1),
                (this.showEditForm = !1);
            },
            getModule: function () {
              void 0 !== window.request_data.link_show_hide &&
                "" !== window.request_data.link_show_hide &&
                (this.request_status = window.request_data.link_show_hide);
            },
          },
          o
        ),
        computed: {
          ListingDataExport: function () {
            return "Listing Data - " + moment().format("YYYY-MM-DD");
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(142),
        r = n.n(i),
        o = (n(554), n(8)),
        a = n(138);
      e.a = {
        components: { Create: a.a, VueTimepicker: r.a },
        data: function () {
          return {
            visible: !1,
            showEditForm: !1,
            showAddForm: !1,
            pageLoader: !0,
            serviceList: { data: [], column: [] },
            sessionEdit: !1,
            serviceId: -1,
            editSessionDataIndex: "",
            serverParams: {
              columnFilters: { service_type: "", duration: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            serviceCategory: [],
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
          };
        },
        mounted: function () {
          this.getServiceCategoryType(), this.init();
        },
        methods: {
          init: function () {
            (this.serviceList = this.defaultServiceList()),
              this.getServiceData(),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions());
          },
          defaultServiceList: function () {
            return {
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "service_id",
                  label: this.formTranslation.service.service_id,
                  width: "120px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.widget_setting.service_setting +
                      " " +
                      this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "name",
                  width: "150px",
                  label: this.formTranslation.service.dt_lbl_name,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.service.dt_plh_name_fltr,
                    filterValue: "",
                  },
                },
                {
                  field: "clinic_name",
                  width: "150px",
                  label: this.formTranslation.patient_encounter.dt_lbl_clinic,
                  filterOptions: {
                    enabled: !(
                      "kiviCare_clinic_admin" ===
                        window.request_data.current_user_role ||
                      "kiviCare_receptionist" ===
                        window.request_data.current_user_role
                    ),
                    placeholder:
                      this.formTranslation.patient_encounter
                        .dt_plh_fltr_by_clinic,
                    filterValue: "",
                  },
                },
                {
                  field: "doctor_name",
                  width: "150px",
                  label: this.formTranslation.service.dt_lbl_doctor,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.service.dt_plh_fltr_by_doc,
                    filterValue: "",
                  },
                },
                {
                  field: "charges",
                  width: "150px",
                  label: this.formTranslation.service.dt_lbl_charges,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.service.dt_plh_fltr_by_price,
                    filterValue: "",
                  },
                },
                {
                  field: "duration",
                  width: "150px",
                  label: this.formTranslation.patient_encounter.duration,
                  hidden: !0 !== this.userData.addOns.kiviPro,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient_encounter.duration,
                    filterValue: "",
                  },
                },
                {
                  field: "service_type",
                  label: this.formTranslation.service.dt_lbl_category,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.service.dt_plh_name_fltr,
                    filterDropdownItems: this.serviceCategory,
                    filterValue: "",
                  },
                },
                {
                  field: "status",
                  label: this.formTranslation.service.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterValue: "",
                    filterDropdownItems: [
                      { value: "1", text: this.formTranslation.common.active },
                      {
                        value: "inactive",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                  },
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.service.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          getServiceData: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(o.a)("service_list", this.serverParams)
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.serviceList.data = []),
                        (t.serviceList.data = e.data.data),
                        (t.totalRows = e.data.total_rows))
                      : ((t.pageLoader = !1),
                        (t.serviceList.data = []),
                        (t.totalRows = 0));
                })
                .catch(function (e) {
                  t.pageLoader = !1;
                });
          },
          defaultGlobalCheckboxApplyData: function () {
            return {
              action_perform: "delete",
              module: "doctor_service",
              data: [],
            };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            var t = [];
            return (
              this.kcCheckPermission("service_edit") &&
                t.push({
                  value: "active",
                  label: this.formTranslation.service.dt_active,
                }),
              this.kcCheckPermission("service_edit") &&
                t.push({
                  value: "inactive",
                  label: this.formTranslation.service.dt_inactive,
                }),
              this.kcCheckPermission("service_delete") &&
                t.push({
                  value: "delete",
                  label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
                }),
              t
            );
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(o.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getServiceData())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getServiceData();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          getServiceCategoryType: function () {
            var t = this,
              e = this;
            Object(o.a)("get_static_data", {
              data_type: "static_data_with_label",
              static_data_type: "service_type",
            })
              .then(function (n) {
                if (void 0 !== n.data.status && !0 === n.data.status) {
                  if (((t.serviceCategory = []), n.data.data.length > 0)) {
                    var i = !1;
                    n.data.data.map(function (t, n) {
                      "system_service" == t.id && (i = !0),
                        e.serviceCategory.push({ value: t.id, text: t.label });
                    }),
                      i ||
                        t.serviceCategory.push({
                          value: "system_service",
                          text: "System Service",
                        });
                  }
                } else displayErrorMessage(n.data.message);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          deleteServiceData: function (e) {
            var n = this;
            void 0 !== e.index &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.deleting_services,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(o.a)("service_delete", { id: e.row.id })
                        .then(function (t) {
                          "administrator" === n.getUserRole() &&
                            n.$store.dispatch(
                              "userDataModule/fetchUserData",
                              {}
                            ),
                            void 0 !== t.data.status &&
                              !0 === t.data.status &&
                              (n.serviceList.data.splice(e.index, 1),
                              displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          editServiceData: function (t, e) {
            (this.serviceId = e),
              (this.showAddForm = !1),
              (this.showEditForm = !0),
              (this.visible = !1);
          },
          handleServiceDataForm: function () {
            this.showAddForm
              ? ((this.visible = !1),
                (this.showAddForm = !1),
                (this.showEditForm = !1))
              : ((this.visible = !0),
                (this.showAddForm = !0),
                (this.showEditForm = !1));
          },
          closeForm: function () {
            (this.visible = !1),
              (this.serviceId = -1),
              (this.showAddForm = !1),
              (this.showEditForm = !1);
          },
          formatDuration: function (t) {
            if (!t) return "-";
            if (parseInt(t) > 0) {
              var e = Math.floor(t / 60),
                n = t % 60;
              return (n += "min"), e > 0 ? e + "hr " + n : n;
            }
            return t;
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
        },
        computed: {
          servicesListExport: function () {
            return "Services List - " + moment().format("YYYY-MM-DD");
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(138),
        o = n(9),
        a = n(145),
        s = n(43),
        l = n(66);
      e.a = {
        components: {
          doctorService: r.a,
          AppointmentReviewCard: a.a,
          ModalPopup: s.a,
          CustomForm: l.a,
        },
        data: function () {
          return {
            isSending: !1,
            isLoading: !0,
            doctorsList: { data: [], column: [] },
            clinic: [],
            filterClinic: [],
            doctorRequest: {},
            doctorSpecialization: [],
            serverParams: {
              columnFilters: { specialties: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            verifyModalData: {},
            verifyPopupModal: !1,
            verifyButtonLoading: !1,
            doctorServiceOpen: !1,
            serviceDoctorId: -1,
            telemed: {},
            telemedSubmitted: !1,
            doctorTelemedConfigurationModal: !1,
            doctorTelemedConfigurationLoader: !0,
            telemedFormLoader: !1,
            appointmentReviewModal: !1,
            select_doctor_id: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            doctorCustomFormData: {},
            doctorCustomFormModal: !1,
            doctorCustomFormViewMode: !1,
          };
        },
        validations: {
          telemed: {
            api_key: { required: o.required },
            api_secret: { required: o.required },
          },
        },
        mounted: function () {
          this.init(), (this.telemed = this.defaultZoomConfifurationValue());
        },
        methods: {
          init: function () {
            var t = this;
            this.getDoctorList(),
              (this.doctorsList = this.defaultDoctorDataList(
                this.formTranslation
              )),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions()),
              setTimeout(function () {
                (t.clinic = t.clinics),
                  t.clinic.forEach(function (e) {
                    t.filterClinic.push({ value: e.id, text: e.label });
                  });
              }, 1e3);
          },
          defaultGlobalCheckboxApplyData: function () {
            return { action_perform: "delete", module: "doctors", data: [] };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            var t = [];
            return (
              this.kcCheckPermission("doctor_edit") &&
                t.push({
                  value: "active",
                  label: this.formTranslation.service.dt_active,
                }),
              this.kcCheckPermission("doctor_edit") &&
                t.push({
                  value: "inactive",
                  label: this.formTranslation.service.dt_inactive,
                }),
              this.kcCheckPermission("doctor_resend_credential") &&
                t.push({
                  value: "resend_credential",
                  label: this.formTranslation.receptionist.resend_credential,
                }),
              this.kcCheckPermission("doctor_delete") &&
                t.push({
                  value: "delete",
                  label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
                }),
              t
            );
          },
          getDoctorList: function () {
            var t = this;
            Object(i.a)("doctor_list", this.serverParams)
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? ((t.isLoading = !1),
                    (t.doctorsList.data = e.data.data),
                    (t.totalRows = e.data.total_rows))
                  : ((t.isLoading = !1),
                    (t.doctorsList.data = []),
                    (t.totalRows = 0));
              })
              .catch(function (e) {
                (t.isLoading = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          defaultDoctorDataList: function () {
            return {
              column: [
                {
                  field: "ID",
                  label: this.formTranslation.common.id,
                  width: "70px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "display_name",
                  width: "100px",
                  label: this.formTranslation.doctor.dt_lbl_name,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.doctor.dt_name_filter_plh,
                    filterValue: "",
                  },
                },
                {
                  field: "clinic_name",
                  label: this.formTranslation.doctor.dt_lbl_clinic_name,
                  sortable: !1,
                  filterOptions: {
                    enabled:
                      this.userData.addOns.kiviPro &&
                      ["administrator"].includes(this.getUserRole()),
                    filterValue: "",
                    filterDropdownItems: this.filterClinic,
                  },
                },
                {
                  field: "user_email",
                  label: this.formTranslation.doctor.dt_lbl_email,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.doctor.dt_email_fltr_plh,
                    filterValue: "",
                  },
                },
                {
                  field: "mobile_number",
                  label: this.formTranslation.doctor.dt_lbl_mobile_number,
                  width: "150px",
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.doctor.dt_mobile_fltr_number,
                    filterValue: "",
                  },
                },
                {
                  field: "specialties",
                  label: this.formTranslation.doctor.dt_lbl_specialties,
                  sortable: !1,
                  width: "200px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.doctor.dt_specialities_filter_plh,
                    filterValue: "",
                  },
                  html: !0,
                },
                {
                  field: "user_status",
                  label: this.formTranslation.service.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "0", text: this.formTranslation.common.active },
                      {
                        value: "1",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                    filterValue: "",
                  },
                  html: !0,
                },
                {
                  field: "actions",
                  label: this.formTranslation.doctor.dt_lbl_actions,
                  sortable: !1,
                },
              ],
              data: [],
            };
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getDoctorList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          deleteDoctorData: function (e) {
            var n = this;
            if (void 0 !== this.doctorsList.data[e - 1]) {
              var r = t("#user_delete_" + e);
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content:
                  this.formTranslation.clinic_schedule
                    .dt_delete_doctor_appointment,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      r.prop("disabled", !0),
                        t(r).find("i").removeClass("fa fa-trash"),
                        t(r).find("i").addClass("fa fa-sync fa-spin"),
                        Object(i.a)("doctor_delete", {
                          id: n.doctorsList.data[e - 1].ID,
                        })
                          .then(function (i) {
                            "administrator" === n.getUserRole() &&
                              n.$store.dispatch(
                                "userDataModule/fetchUserData",
                                {}
                              ),
                              r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              void 0 !== i.data.status &&
                                !0 === i.data.status &&
                                (n.doctorsList.data.splice(e - 1, 1),
                                displayMessage(i.data.message));
                          })
                          .catch(function (e) {
                            r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            }
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete)
              : "resend_credential" ===
                this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_resend_credential)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.isLoading = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.isLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getDoctorList())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.isLoading = !0;
                });
          },
          addService: function (t) {
            (this.serviceDoctorId = t), (this.doctorServiceOpen = !0);
          },
          closeServiceModal: function () {
            this.doctorServiceOpen = !1;
          },
          resendRequest: function (e) {
            var n = t("#resend_" + e).find("i");
            n.removeClass("fa fa-paper-plane "),
              n.addClass("fa fa-spinner fa-spin"),
              Object(i.b)("resend_credential", { id: e })
                .then(function (t) {
                  n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-paper-plane"),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {});
          },
          verifyUser: function (t) {
            var e = this;
            (this.verifyButtonLoading = !0),
              Object(i.b)("verify_user", { data: t })
                .then(function (t) {
                  (e.verifyButtonLoading = !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (displayMessage(t.data.message),
                        (e.verifyPopupModal = !1),
                        e.getDoctorList())
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  (e.verifyButtonLoading = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          defaultZoomConfifurationValue: function () {
            return {
              enableTeleMed: "off",
              api_key: "",
              api_secret: "",
              zoom_id: "",
              video_price: "",
            };
          },
          handleZoomConfigurationSubmit: function () {
            var t = this;
            if (
              (this.$v.$touch(),
              (this.telemedSubmitted = !0),
              !this.$v.telemed.$invalid)
            ) {
              (this.telemedSubmitted = !1), (this.telemedFormLoader = !0);
              var e = {
                api_key: this.telemed.api_key,
                api_secret: this.telemed.api_secret,
                doctor_id: this.telemed.doctor_id,
                enableTeleMed: this.telemed.enableTeleMed,
                video_price: this.telemed.video_price,
              };
              Object(i.b)("save_doctor_zoom_configuration", e)
                .then(function (e) {
                  (t.telemedFormLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message),
                        t.telemedConfigurationModalClose())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.telemedFormLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
            }
          },
          telemedConfigurationModalClose: function () {
            (this.telemedSubmitted = !1),
              (this.doctorTelemedConfigurationModal = !1),
              (this.telemed = this.defaultZoomConfifurationValue()),
              (this.doctorTelemedConfigurationLoader = !0),
              (this.telemedFormLoader = !1);
          },
          openTelemedConfigurationModal: function (t) {
            (this.doctorTelemedConfigurationModal = !0),
              this.getConfigurationData(t);
          },
          getConfigurationData: function (t) {
            var e = this;
            (this.doctorTelemedConfigurationLoader = !0),
              Object(i.a)("get_doctor_zoom_configuration", { user_id: t })
                .then(function (n) {
                  (e.doctorTelemedConfigurationLoader = !1),
                    void 0 !== n.data.status && !0 === n.data.status
                      ? ((e.telemed = n.data.data), (e.telemed.doctor_id = t))
                      : displayErrorMessage(n.data.message);
                })
                .catch(function (t) {
                  (e.doctorTelemedConfigurationLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
          customFormOpen: function (t, e) {
            (this.doctorCustomFormData = e),
              (this.doctorCustomFormData.module_id = t.ID),
              (this.doctorCustomFormViewMode = !1),
              (this.doctorCustomFormModal = !0);
          },
          customFormCondition: function (t, e) {
            return (
              t.custom_forms &&
              t.custom_forms.length &&
              (0 === e.clinic_ids.length ||
                e.clinic_ids.some(function (e) {
                  return t.clinic_id.includes(e);
                }))
            );
          },
        },
        computed: {
          doctorListExport: function () {
            return "Doctor List - " + moment().format("YYYY-MM-DD");
          },
          getSpeciality: function () {
            return function (t) {
              if (null != t && t.length > 0) {
                var e = "";
                return "string" != typeof t
                  ? (t.map(function (n, i) {
                      return (
                        (e += t.length === i + 1 ? n.label : n.label + ", "), n
                      );
                    }),
                    e)
                  : t;
              }
              return " - ";
            };
          },
          clinics: function () {
            return this.$store.state.clinic;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          specialization: function () {
            return void 0 !==
              this.$store.state.staticDataModule.static_data.specialization &&
              this.$store.state.staticDataModule.static_data.specialization
                .length > 0
              ? this.$store.state.staticDataModule.static_data.specialization
              : [];
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(53),
        r = n.n(i),
        o = (n(73), n(9)),
        a = n(8),
        s = n(408),
        l = n(24);
      function c(t) {
        return (c =
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
      e.a = {
        components: { vueSignature: s.a, VuePhoneNumberInput: r.a },
        data: function () {
          return (function (t, e, n) {
            return (
              (e = (function (t) {
                var e = (function (t, e) {
                  if ("object" != c(t) || !t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var i = n.call(t, "string");
                    if ("object" != c(i)) return i;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(t);
                return "symbol" == c(e) ? e : e + "";
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
          })(
            {
              imagePreview: pluginBASEURL + "assets/images/kc-demo-img.png",
              doctorData: {},
              clinics: [],
              loading: !1,
              submitted: !1,
              qualificationSubmitted: !1,
              doctorTimeSlot: "",
              buttonText: '<i class="fa fa-save"></i> Save',
              qualification: {},
              qualificationTitle: "Add qualifiaction",
              qualificationBtn: '<i class="fa fa-plus"></i> add qualifiaction',
              qualificationEdit: !1,
              qualificationYears: [],
              price_type: ["range", "fixed"],
              timeSlots: [],
              customFields: [],
              requiredFields: [],
              randomString: Object(l.k)(8),
              teleMed: { apiKey: "", apiSecret: "", price: "" },
              formLoader: !1,
              clinicMultiselectLoader: !0,
              signatureOption: {
                penColor: "rgb(0, 0, 0)",
                backgroundColor: "rgb(220,220,220)",
              },
              showCanvas: !1,
              isCustomeFieldExist: !1,
              defaultCountryCode: null,
              doctorClinicId: [],
              defaultUserRegistrationFormSettingData: "on",
            },
            "customFields",
            {}
          );
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.doctorData = this.defaultDoctorData()),
            (this.qualification = this.defaultQualification()),
            (this.qualificationYears = this.getQualificationYear()),
            (this.teleMed = this.defaultTelemed()),
            this.init(),
            window.request_data.proActive && this.getClinics();
        },
        validations: {
          doctorData: {
            first_name: {
              required: o.required,
              minLength: Object(o.minLength)(2),
              maxLength: Object(o.maxLength)(50),
            },
            last_name: {
              required: o.required,
              minLength: Object(o.minLength)(2),
              maxLength: Object(o.maxLength)(50),
            },
            username: { required: o.required },
            user_email: { required: o.required, emailValidate: l.c },
            mobile_number: {
              required: o.required,
              minLength: Object(o.minLength)(4),
              maxLength: Object(o.maxLength)(15),
            },
            specialties: { required: o.required },
            gender: { required: o.required },
            clinic_id: {
              required: Object(o.requiredIf)(function () {
                return (
                  1 == this.userData.addOns.kiviPro &&
                  "administrator" == this.getUserRole()
                );
              }),
            },
            user_status: { required: o.required },
            city: {},
            country: {},
            postal_code: {},
            api_key: {
              required: Object(o.requiredIf)(function () {
                return [!0, "true"].includes(this.doctorData.enableTeleMed);
              }),
            },
            api_secret: {
              required: Object(o.requiredIf)(function () {
                return [!0, "true"].includes(this.doctorData.enableTeleMed);
              }),
            },
          },
          qualification: {
            degree: { required: o.required },
            university: { required: o.required },
            year: { required: o.required },
          },
          custom_fields: {},
        },
        methods: {
          handleCustomField: function (t) {
            this.customFields = t;
          },
          contactUpdateHandaler: function (t) {
            (this.doctorData.country_code = t.countryCode),
              (this.doctorData.country_calling_code = t.countryCallingCode);
          },
          init: function () {
            var t = this;
            this.getTimeSlots(),
              (this.qualificationTitle =
                this.formTranslation.doctor.add_qualification),
              (this.qualificationBtn =
                '<i class="fa fa-plus"></i> ' +
                this.formTranslation.doctor.add_qualification),
              void 0 !== this.$route.params.id
                ? ((this.cardTitle = this.formTranslation.doctor.edit_doctor),
                  (this.buttonText =
                    '<i class="fa fa-save"></i> ' +
                    this.formTranslation.common.save),
                  (this.formLoader = !0),
                  Object(a.a)("doctor_edit", { id: this.$route.params.id })
                    .then(function (e) {
                      (t.formLoader = !1),
                        void 0 !== e.data.status &&
                          !0 === e.data.status &&
                          setTimeout(function () {
                            (t.doctorClinicId = e.data.data.clinic_id.map(
                              function (t, e) {
                                return t.id;
                              }
                            )),
                              (t.doctorData = e.data.data),
                              "" !== e.data.data.country_calling_code &&
                                void 0 !== e.data.data.country_calling_code &&
                                (t.defaultCountryCode =
                                  e.data.data.country_code),
                              t.doctorData.user_profile &&
                                (t.imagePreview = t.doctorData.user_profile),
                              (t.doctorTimeSlot = t.doctorData.time_slot),
                              (t.doctorData.custom_fields =
                                e.data.custom_filed),
                              (t.isCustomeFieldExist =
                                void 0 !== t.doctorData.custom_fields &&
                                t.doctorData.custom_fields.length > 0),
                              (t.showCanvas = !0);
                          }, 200);
                    })
                    .catch(function (e) {
                      (t.showCanvas = !0),
                        (t.formLoader = !1),
                        displayErrorMessage(
                          t.formTranslation.widgets.record_not_found
                        );
                    }))
                : (this.showCanvas = !0),
              this.getDynamicTranslationKey();
          },
          handleTimeSlotChange: function () {
            this.doctorData.time_slot !== parseInt(this.doctorTimeSlot) &&
              void 0 !== this.doctorData.ID &&
              displayAlert(
                "Warning!",
                this.formTranslation.doctor.change_time_will_effect
              );
          },
          checkValuesExist: function (t, e) {
            return t.every(function (t) {
              return e.includes(t);
            });
          },
          addQualification: function () {
            (this.qualificationSubmitted = !0),
              this.$v.qualification.$touch(),
              this.$v.qualification.$invalid ||
                (this.qualificationEdit
                  ? ((this.qualificationEdit = !1),
                    this.$root.$emit(
                      "bv::toggle::collapse",
                      "qualification-add-tab"
                    ))
                  : (void 0 === this.doctorData.qualifications &&
                      (this.doctorData.qualifications = []),
                    this.doctorData.qualifications.push(this.qualification),
                    this.$root.$emit(
                      "bv::toggle::collapse",
                      "qualification-add-tab"
                    )),
                (this.qualificationTitle =
                  this.formTranslation.doctor.add_qualification),
                (this.qualificationBtn =
                  '<i class="fa fa-plus"></i> ' +
                  this.formTranslation.doctor.add_qualification),
                (this.qualification = this.defaultQualification()),
                (this.qualificationSubmitted = !1));
          },
          getTimeSlots: function () {
            for (var t = 5, e = 0; e < 12; e++)
              t <= 60 && this.timeSlots.push(t), (t += 5);
          },
          editQualification: function (t) {
            this.$root.$emit("bv::toggle::collapse", "qualification-add-tab"),
              (this.qualificationTitle =
                this.formTranslation.doctor.edit_qualification),
              (this.qualificationEdit = !0),
              (this.qualificationBtn =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.doctor.save_qualification),
              (this.qualification = this.doctorData.qualifications[t - 1]);
          },
          deleteQualification: function (e) {
            var n = this;
            void 0 !== e
              ? t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content: this.formTranslation.clinic_schedule.dt_press_dlt,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        void 0 !== n.doctorData.qualifications[e - 1] &&
                          n.doctorData.qualifications.splice(e - 1, 1);
                      },
                    },
                    cancel: { text: this.formTranslation.common.cancel },
                  },
                })
              : displayErrorMessage(
                  this.formTranslation.custom_field
                    .doctor_profile_data_not_found
                );
          },
          defaultDoctorData: function () {
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
                clinic_id: "",
                specialties: [],
                profile_image: "",
                video_price: "",
                price_type: "range",
                price: 0,
                minPrice: 0,
                maxPrice: 0,
                qualifications: [],
                time_slot: 5,
                custom_fields: { id: "", name: "" },
                user_status: 0,
                enableTeleMed: !1,
                api_key: "",
                api_secret: "",
                no_of_experience: 0,
                signature: "",
                is_enable_doctor_gmeet: !1,
              }
            );
          },
          defaultQualification: function () {
            return { degree: "", university: "", year: "", file: "" };
          },
          defaultTelemed: function () {
            return { apiKey: "", apiSecret: "", price: "" };
          },
          getClinics: function () {
            var t = this;
            (this.clinicMultiselectLoader = !0),
              Object(a.a)("get_static_data", { data_type: "clinic_list" })
                .then(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.clinics = e.data.data);
                })
                .catch(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleSubmit: function () {
            var e = this;
            if (
              (this.$refs.signature.isEmpty()
                ? (this.doctorData.signature = this.$refs.signature.clear())
                : (this.doctorData.signature =
                    this.$refs.signature.save("image/png")),
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
              this.$v.doctorData.$invalid)
            )
              this.loading = !1;
            else {
              if (this.requiredFields.length > 0)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    this.formTranslation.common.all_required_field_validation
                  )
                );
              var n;
              "administrator" === this.getUserRole() &&
              this.userData.addOns.kiviPro
                ? (n = this.doctorData.clinic_id.map(function (t) {
                    return t.id;
                  }))
                : void 0 !== this.defaultClinicData &&
                  (n = [this.defaultClinicData.id]);
              var i = Object(l.m)(
                this.customFields,
                this.doctorData.custom_fields
              );
              if (!0 !== i)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    i + " " + this.formTranslation.patient_encounter.is_required
                  )
                );
              void 0 !== this.$route.params.id &&
              this.userData.addOns.kiviPro &&
              "administrator" === this.getUserRole() &&
              !this.checkValuesExist(this.doctorClinicId, n)
                ? t.confirm({
                    title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                    content:
                      "Removed clinics will delete service and session data of this doctor and removed clinics.",
                    type: "red",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-danger",
                        keys: ["enter"],
                        action: function () {
                          (e.loading = !1), (e.submitted = !1), e.saveDoctor();
                        },
                      },
                      cancel: {
                        text: this.formTranslation.common.cancel,
                        action: function () {
                          (e.loading = !1), (e.submitted = !1);
                        },
                      },
                    },
                  })
                : this.saveDoctor();
            }
          },
          saveDoctor: function () {
            var t =
              void 0 !== this.doctorData.username &&
              null !== this.doctorData.username
                ? this.doctorData.username.toString().trim()
                : "";
            (t = t.replace(/\D+/g, "")),
              (this.doctorData.username = t),
              (void 0 === this.doctorData.ID ||
                null === this.doctorData.ID ||
                "" === this.doctorData.ID) &&
                (this.doctorData.user_pass = t);
            var e = this;
            Object(l.n)("doctorDataForm") &&
              Object(a.b)("doctor_save", this.doctorData)
                .then(function (t) {
                  (e.loading = !0),
                    (e.submitted = !1),
                    "administrator" === e.getUserRole() &&
                      e.$store.dispatch("userDataModule/fetchUserData", {}),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (displayMessage(t.data.message),
                        e.$router.push({ name: "doctor" }))
                      : ((e.loading = !1), displayErrorMessage(t.data.message));
                })
                .catch(function (t) {
                  (e.loading = !1),
                    (e.submitted = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getQualificationYear: function () {
            for (
              var t = [], e = new Date().getFullYear(), n = 1940;
              n <= e;
              n++
            )
              t.push(n);
            return t.reverse();
          },
          kcGetCustomFields: function () {
            this.customFields = [];
          },
          getCustomFieldsValues: function (t) {
            if (!t || void 0 === t) return !1;
            this.doctorData.custom_fields = t;
          },
          getRequireFields: function (t) {
            this.requiredFields = t;
          },
          handleResetCharge: function () {
            "range" === this.doctorData.price_type
              ? (this.doctorData.price = 0)
              : ((this.doctorData.minPrice = 0),
                (this.doctorData.maxPrice = 0));
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
            Object(a.b)("static_data_save", n)
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (i.doctorData.specialties.push({
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
          getDynamicTranslationKey: function () {},
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.imagePreview = n.url), (t.doctorData.profile_image = n.id);
            }),
              e.open();
          },
          getCountryCodeData: function () {
            var t = this;
            Object(a.a)("get_country_code_settings_data", {})
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
            Object(a.a)("get_user_registration_form_settings_data", {})
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
          customFieldsData: function () {
            return this.doctorData.custom_fields
              ? this.doctorData.custom_fields
              : [];
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          teleMedEn: function () {
            return this.userData.addOns.telemed;
          },
          doctorSpecialization: function () {
            return this.$store.state.staticDataModule.static_data
              .specialization;
          },
          specializationMultiselectLoader: function () {
            return this.$store.state.staticDataModule.static_data_loader;
          },
          defaultClinicData: function () {
            return this.$store.state.userDataModule.clinic;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(53),
        r = n.n(i),
        o = (n(73), n(66)),
        a = n(9),
        s = n(8),
        l = n(408),
        c = n(145),
        d = n(24);
      function u(t) {
        return (u =
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
      function p(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != u(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != u(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == u(e) ? e : e + "";
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
      e.a = {
        components: {
          vueSignature: l.a,
          AppointmentReviewCard: c.a,
          VuePhoneNumberInput: r.a,
          CustomForm: o.a,
        },
        data: function () {
          return p(
            {
              isEditProfile: !1,
              doctorData: {},
              loading: !1,
              submitted: !1,
              qualificationSubmitted: !1,
              cardTitle: "Edit Profile",
              doctorTimeSlot: "",
              buttonText: '<i class="fa fa-plus"></i> Add',
              editProfileBtnText:
                '<i class="fa fa-pen-fancy"></i> Edit Profile',
              qualification: {},
              qualificationTitle: "Add Qualification",
              qualificationBtn: '<i class="fa fa-plus"></i> Add qualification',
              qualificationEdit: !1,
              qualificationYears: [],
              price_type: ["range", "fixed"],
              timeSlots: [],
              customFields: [],
              profileImage: "",
              enableTeleMed: !1,
              formLoader: !0,
              signatureOption: {
                penColor: "rgb(0, 0, 0)",
                backgroundColor: "rgb(220,220,220)",
              },
              showCanvas: !1,
              showCustomField: !1,
              custom_fields: [],
              select_doctor_id: 0,
              appointmentReviewModal: !1,
              defaultCountryCode: null,
              requiredFields: [],
              defaultUserRegistrationFormSettingData: "on",
              viewMode: "editProfile",
            },
            "customFields",
            {}
          );
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.doctorData = this.defaultDoctorData()),
            (this.qualification = this.defaultQualification()),
            (this.qualificationYears = this.getQualificationYear()),
            this.init(),
            (this.profileImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png");
        },
        validations: {
          doctorData: {
            first_name: {
              required: a.required,
              minLength: Object(a.minLength)(2),
              maxLength: Object(a.maxLength)(15),
            },
            last_name: {
              required: a.required,
              minLength: Object(a.minLength)(2),
              maxLength: Object(a.maxLength)(15),
            },
            username: { required: a.required },
            user_email: { required: a.required, emailValidate: d.c },
            gender: { required: a.required },
            mobile_number: {
              required: a.required,
              minLength: Object(a.minLength)(4),
              maxLength: Object(a.maxLength)(15),
            },
            specialties: { required: a.required },
            city: {},
            country: {},
            postal_code: {},
          },
          qualification: {
            degree: { required: a.required },
            university: { required: a.required },
            year: { required: a.required },
          },
        },
        filters: {
          clinicSpecialityFormat: function (t) {
            var e = t,
              n = [];
            return null != e && e.length > 0
              ? (e.forEach(function (t) {
                  n.push(t.label);
                }),
                n.join(" , "))
              : "No";
          },
          dateFormat: function (t) {
            return moment(t).format("YYYY-MM-DD");
          },
        },
        methods: p(
          p(
            p(
              p(
                {
                  handleCustomField: function (t) {
                    this.customFields = t;
                  },
                  contactUpdateHandaler: function (t) {
                    (this.doctorData.country_code = t.countryCode),
                      (this.doctorData.country_calling_code =
                        t.countryCallingCode);
                  },
                  init: function () {
                    var t = this;
                    if (
                      ((this.qualificationTitle =
                        this.formTranslation.doctor.add_qualification),
                      (this.qualificationBtn =
                        '<i class="fa fa-plus"></i> ' +
                        this.formTranslation.doctor.add_qualification),
                      void 0 !== this.$store.state.userDataModule.user.ID)
                    ) {
                      var e = this.$store.state.userDataModule.user.ID;
                      this.editProfileData(e);
                    } else
                      this.$store.dispatch("userDataModule/fetchUserData", {}),
                        setTimeout(function () {
                          var e = t.$store.state.userDataModule.user.ID;
                          t.editProfileData(e);
                        }, 1e3);
                    this.getTimeSlots();
                  },
                  handleTimeSlotChange: function () {
                    this.doctorData.time_slot !==
                      parseInt(this.doctorTimeSlot) &&
                      displayAlert(
                        "Warning!",
                        this.formTranslation.doctor.change_time_will_effect
                      );
                  },
                  getCustomFieldsValues: function (t) {
                    if (!t || void 0 === t) return !1;
                    this.doctorData.custom_fields = t;
                  },
                  addQualification: function () {
                    (this.qualificationSubmitted = !0),
                      this.$v.qualification.$touch(),
                      this.$v.qualification.$invalid ||
                        (this.qualificationEdit
                          ? (this.qualificationEdit = !1)
                          : (void 0 === this.doctorData.qualifications &&
                              (this.doctorData.qualifications = []),
                            this.doctorData.qualifications.push(
                              this.qualification
                            )),
                        (this.qualificationTitle =
                          this.formTranslation.doctor.add_qualification),
                        (this.qualificationBtn =
                          '<i class="fa fa-plus"></i> ' +
                          this.formTranslation.doctor.add_qualification),
                        (this.qualification = this.defaultQualification()),
                        (this.qualificationSubmitted = !1));
                  },
                  getTimeSlot: function (t, e, n) {
                    var i =
                        null !== n && void 0 !== n.timeSlot ? n.timeSlot : "",
                      r = "",
                      o = [];
                    if (
                      "" !== t.HH &&
                      "" !== t.mm &&
                      "" !== e.HH &&
                      "" !== e.mm &&
                      "" !== i
                    )
                      for (
                        var a = Object(d.h)(t),
                          s = Object(d.h)(e),
                          l = s.diff(a, "minutes"),
                          c = Math.ceil(l / i),
                          u = 0;
                        u <= c;
                        u++
                      ) {
                        var p = {
                          time: (r =
                            0 === u
                              ? a.format("HH:mm")
                              : moment(r, "HH:mm")
                                  .add(i, "minutes")
                                  .format("HH:mm")),
                          isValid: !0,
                          timeSlotDiff: i,
                        };
                        if (moment(r, "HH:mm").isAfter(s)) {
                          var h = moment(r, "HH:mm").diff(s, "minutes");
                          (p.isValid = !1), (p.timeSlotDiff = Math.abs(i - h));
                        }
                        o.push(p);
                      }
                    return o;
                  },
                  editQualification: function (t) {
                    (this.qualificationTitle =
                      this.formTranslation.doctor.edit_qualification),
                      (this.qualificationEdit = !0),
                      (this.qualificationBtn =
                        '<i class="fa fa-save"></i> ' +
                        this.formTranslation.doctor.save_qualification),
                      (this.qualification =
                        this.doctorData.qualifications[t - 1]);
                  },
                  deleteQualification: function (e) {
                    var n = this;
                    void 0 !== this.doctorData.qualifications[e - 1] &&
                      t.confirm({
                        title:
                          this.formTranslation.clinic_schedule.dt_are_you_sure,
                        content:
                          this.formTranslation.clinic_schedule.dt_press_dlt,
                        type: "red",
                        buttons: {
                          ok: {
                            text: this.formTranslation.common.yes,
                            btnClass: "btn-danger",
                            keys: ["enter"],
                            action: function () {
                              void 0 !== n.doctorData.qualifications[e - 1] &&
                                n.doctorData.qualifications.splice(e - 1, 1);
                            },
                          },
                          cancel: { text: this.formTranslation.common.cancel },
                        },
                      });
                  },
                  defaultDoctorData: function () {
                    return {
                      first_name: "",
                      last_name: "",
                      username: "",
                      user_email: "",
                      user_pass: "",
                      country_calling_code: "",
                      country_code: "",
                      mobile_number: "",
                      gender: this.formTranslation.common.male,
                      dob: "",
                      about_me: "",
                      address: "",
                      city: "",
                      state: "",
                      country: "",
                      postal_code: "",
                      specialties: [],
                      price_type: "range",
                      price: 0,
                      minPrice: 0,
                      maxPrice: 0,
                      qualifications: [],
                      time_slot: 5,
                      user_status: 0,
                      signature: "",
                      rating: 0,
                      total_rating: 0,
                      profile_image: "",
                    };
                  },
                  defaultQualification: function () {
                    return { degree: "", university: "", year: "", file: "" };
                  },
                  handleSubmit: function () {
                    var t = this;
                    if (
                      ((e = (e =
                        void 0 !== this.doctorData.username &&
                        null !== this.doctorData.username
                          ? this.doctorData.username.toString().trim()
                          : "").replace(/\D+/g, "")),
                      (this.doctorData.username = e),
                      (void 0 === this.doctorData.ID ||
                        null === this.doctorData.ID ||
                        "" === this.doctorData.ID) &&
                        (this.doctorData.user_pass = e),
                      this.$refs.signature.isEmpty() ||
                        (this.doctorData.signature =
                          this.$refs.signature.save("image/svg+xml")),
                      (this.loading = !0),
                      (this.submitted = !0),
                      this.$v.$touch(),
                      this.$nextTick(function () {
                        null !== document.querySelector(".is-invalid") &&
                        void 0 !== document.querySelector(".is-invalid")
                          ? document
                              .querySelector(".is-invalid")
                              .scrollIntoView({
                                block: "center",
                                behavior: "smooth",
                              })
                          : null !==
                              document.querySelector(".invalid-feedback") &&
                            void 0 !==
                              document.querySelector(".invalid-feedback") &&
                            document
                              .querySelector(".invalid-feedback")
                              .scrollIntoView({
                                block: "center",
                                behavior: "smooth",
                              });
                      }),
                      this.$v.doctorData.$invalid)
                    )
                      this.loading = !1;
                    else {
                      if (this.requiredFields.length > 0)
                        return (
                          (this.loading = !1),
                          void displayErrorMessage(
                            this.formTranslation.common
                              .all_required_field_validation
                          )
                        );
                      var e;
                      if (
                        !0 !==
                        (e = Object(d.m)(
                          this.customFields,
                          this.doctorData.custom_fields
                        ))
                      )
                        return (
                          (this.loading = !1),
                          void displayErrorMessage(
                            e +
                              " " +
                              this.formTranslation.patient_encounter.is_required
                          )
                        );
                      Object(d.n)("doctorDataForm") &&
                        Object(s.b)("doctor_save", this.doctorData)
                          .then(function (e) {
                            (t.loading = !1),
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
                              displayErrorMessage(
                                t.formTranslation.common.internal_server_error
                              );
                          });
                    }
                  },
                  getQualificationYear: function () {
                    for (
                      var t = [], e = new Date().getFullYear(), n = 1940;
                      n <= e;
                      n++
                    )
                      t.push(n);
                    return t.reverse();
                  },
                  editProfileData: function (t) {
                    var e = this;
                    void 0 !== t
                      ? ((this.cardTitle =
                          this.formTranslation.doctor.edit_profile),
                        (this.buttonText =
                          '<i class="fa fa-save"></i> ' +
                          this.formTranslation.common.save),
                        (this.formLoader = !0),
                        Object(s.a)("doctor_edit", { id: t })
                          .then(function (t) {
                            void 0 !== t.data.status &&
                              !0 === t.data.status &&
                              ((e.doctorData = t.data.data),
                              "" !== t.data.data.country_calling_code &&
                                void 0 !== t.data.data.country_calling_code &&
                                (e.defaultCountryCode =
                                  t.data.data.country_code),
                              (e.doctorTimeSlot = e.doctorData.time_slot),
                              (e.isEditProfile = !1),
                              e.doctorData.user_profile &&
                                (e.profileImage = e.doctorData.user_profile),
                              void 0 !== t.data.custom_filed &&
                                t.data.custom_filed.length > 0 &&
                                ((e.showCustomField = !0),
                                (e.custom_fields = t.data.custom_filed)),
                              (e.doctorData.choose_language =
                                e.kc_available_translations.find(function (e) {
                                  return e.lang === t.data.data.choose_language;
                                }))),
                              (e.formLoader = !1),
                              (e.showCanvas = !0);
                          })
                          .catch(function (t) {
                            (e.formLoader = !1),
                              displayErrorMessage(
                                e.formTranslation.widgets.record_not_found
                              );
                          }))
                      : displayErrorMessage(
                          this.formTranslation.widgets.login_user_not_found
                        );
                  },
                  getTimeSlots: function () {
                    for (var t = 5, e = 0; e < 12; e++)
                      t <= 60 && this.timeSlots.push(t), (t += 5);
                  },
                  handleResetCharge: function () {
                    "range" === this.doctorData.price_type
                      ? (this.doctorData.price = 0)
                      : ((this.doctorData.minPrice = 0),
                        (this.doctorData.maxPrice = 0));
                  },
                  uploadProfile: function () {
                    var t = this,
                      e = kivicareCustomImageUploader(this.formTranslation);
                    e.on("select", function () {
                      var n = e.state().get("selection").first().toJSON();
                      (t.profileImage = n.url),
                        (t.doctorData.profile_image = n.id);
                    }),
                      e.open();
                  },
                  getRequireFields: function (t) {
                    this.requiredFields = t;
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
                },
                "getRequireFields",
                function (t) {
                  this.requiredFields = t;
                }
              ),
              "getUserRegistrationFormData",
              function () {
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
              }
            ),
            "customFormDataUpdate",
            function (t, e) {
              return (t.module_id = e), t;
            }
          ),
          "customFormCondition",
          function (t, e) {
            var n = (
              Array.isArray(
                this.$store.state.userDataModule.user.user_clinic_id
              )
                ? this.$store.state.userDataModule.user.user_clinic_id
                : [this.$store.state.userDataModule.user.user_clinic_id]
            )
              .filter(function (t) {
                return t;
              })
              .map(function (t) {
                return String(t);
              });
            return (
              (0 === e.clinic_ids.length ||
                e.clinic_ids.some(function (e) {
                  return t.clinic_ids.includes(e);
                })) &&
              (0 === e.clinic_ids.length ||
                0 === n.length ||
                e.clinic_ids.some(function (t) {
                  return n.includes(t);
                }))
            );
          }
        ),
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          doctorSpecialization: function () {
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
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(66);
      e.a = {
        components: { CustomForm: r.a },
        data: function () {
          return {
            pageLoader: !0,
            patientList: { column: [], data: [] },
            totalRows: 0,
            clinic: [],
            filterClinic: [],
            p_uid: !1,
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            patientCustomFormData: {},
            patientCustomFormModal: !1,
            patientCustomFormViewMode: !1,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            var t = this;
            this.getUniqueSetting(),
              (this.patientList = this.defaultPatientList(
                this.formTranslation
              )),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions()),
              this.getPatientList(),
              setTimeout(function () {
                (t.clinic = t.clinics),
                  t.clinic.forEach(function (e) {
                    t.filterClinic.push({ value: e.id, text: e.label });
                  });
              }, 1e3),
              this.getDynamicTranslation();
          },
          defaultPatientList: function () {
            return {
              column: [
                {
                  field: "uid",
                  label: this.p_uid
                    ? this.formTranslation.patient.unique_id
                    : this.formTranslation.common.id,
                  sortable: !this.p_uid,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.p_uid
                      ? this.formTranslation.patient.unique_id
                      : this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  label: this.formTranslation.patient.dt_lbl_name,
                  field: "display_name",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient.dt_plh_name_filter,
                    filterValue: "",
                  },
                },
                {
                  field: "clinic_name",
                  label: this.formTranslation.patient.clinic,
                  sortable: !1,
                  filterOptions: {
                    enabled:
                      this.userData.addOns.kiviPro &&
                      ["administrator", "doctor"].includes(this.getUserRole()),
                    filterValue: "",
                    filterDropdownItems: this.filterClinic,
                  },
                },
                {
                  label: this.formTranslation.patient.dt_lbl_email,
                  field: "user_email",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.patient.dt_plh_email_fltr,
                    filterValue: "",
                  },
                },
                {
                  label: this.formTranslation.patient.dt_lbl_mobile_number,
                  field: "mobile_number",
                  sortable: !1,
                  width: "200px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient.dt_plh_mobile_fltr_number,
                    filterValue: "",
                  },
                },
                {
                  label: this.formTranslation.patient.dt_lbl_registered,
                  field: "user_registered",
                  filterOptions: {
                    enabled: !1,
                    placeholder: this.formTranslation.patient.dt_plh_date,
                    filterValue: "",
                  },
                },
                {
                  field: "user_status",
                  label: this.formTranslation.service.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "0", text: this.formTranslation.common.active },
                      {
                        value: "1",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                    filterValue: "",
                  },
                  html: !0,
                },
                {
                  label: this.formTranslation.patient.dt_lbl_action,
                  field: "action",
                  sortable: !1,
                  html: !0,
                },
              ],
              data: [],
            };
          },
          getPatientList: function () {
            var t = this;
            Object(i.a)("patient_list", this.serverParams)
              .then(function (e) {
                (t.pageLoader = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.patientList.data = e.data.data),
                      (t.totalRows = e.data.total_rows))
                    : ((t.patientList.data = []), (t.totalRows = 0));
              })
              .catch(function (e) {
                t.pageLoader = !1;
              });
          },
          defaultGlobalCheckboxApplyData: function () {
            return { action_perform: "delete", module: "patient", data: [] };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            var t = [];
            return (
              this.kcCheckPermission("patient_edit") &&
                t.push({
                  value: "active",
                  label: this.formTranslation.service.dt_active,
                }),
              this.kcCheckPermission("patient_edit") &&
                t.push({
                  value: "inactive",
                  label: this.formTranslation.service.dt_inactive,
                }),
              this.kcCheckPermission("patient_resend_credential") &&
                t.push({
                  value: "resend_credential",
                  label: this.formTranslation.receptionist.resend_credential,
                }),
              this.kcCheckPermission("patient_delete") &&
                t.push({
                  value: "delete",
                  label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
                }),
              t
            );
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete)
              : "resend_credential" ===
                this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_resend_credential)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getPatientList())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          deletePatientData: function (e) {
            var n = this;
            if (void 0 !== this.patientList.data[e - 1]) {
              var r = t("#user_delete_" + e);
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content:
                  this.formTranslation.common.action_delete_appointment_patient,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      r.prop("disabled", !0),
                        t(r).find("i").removeClass("fa fa-trash"),
                        t(r).find("i").addClass("fa fa-sync fa-spin"),
                        Object(i.a)("patient_delete", {
                          id: n.patientList.data[e - 1].ID,
                        })
                          .then(function (i) {
                            r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              void 0 !== i.data.status &&
                                !0 === i.data.status &&
                                (n.patientList.data.splice(e - 1, 1),
                                displayMessage(i.data.message));
                          })
                          .catch(function (e) {
                            r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            }
          },
          resendRequest: function (e) {
            var n = t("#resend_" + e).find("i");
            n.removeClass("fa fa-paper-plane "),
              n.addClass("fa fa-spinner fa-spin"),
              Object(i.b)("resend_credential", { id: e })
                .then(function (t) {
                  n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-paper-plane"),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {});
          },
          getDynamicTranslation: function () {
            this.$store.state.staticDataModule.langTranslateData;
          },
          getUniqueSetting: function () {
            void 0 !== this.userData.unquie_id_status &&
            1 == this.userData.unquie_id_status
              ? (this.p_uid = this.userData.unquie_id_status)
              : (this.p_uid = !1);
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getPatientList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
          customFormOpen: function (t, e) {
            (this.patientCustomFormData = e),
              (this.patientCustomFormData.module_id = t.ID),
              (this.patientCustomFormViewMode = !1),
              (this.patientCustomFormModal = !0);
          },
          customFormCondition: function (t, e) {
            var n = (
              Array.isArray(
                this.$store.state.userDataModule.user.user_clinic_id
              )
                ? this.$store.state.userDataModule.user.user_clinic_id
                : [this.$store.state.userDataModule.user.user_clinic_id]
            )
              .filter(function (t) {
                return t;
              })
              .map(function (t) {
                return String(t);
              });
            return (
              t.custom_forms &&
              t.custom_forms.length &&
              (0 === e.clinic_ids.length ||
                e.clinic_ids.some(function (e) {
                  return t.clinic_id.includes(e);
                })) &&
              (0 === e.clinic_ids.length ||
                0 === n.length ||
                e.clinic_ids.some(function (t) {
                  return n.includes(t);
                }))
            );
          },
        },
        computed: {
          patientListExport: function () {
            return "Patient List - " + moment().format("YYYY-MM-DD");
          },
          getSpeciality: function () {
            return function (t) {
              if (void 0 !== t && t.length > 0) {
                var e = "";
                return (
                  t.map(function (n, i) {
                    return (
                      (e += t.length === i + 1 ? n.label : n.label + ", "), n
                    );
                  }),
                  e
                );
              }
              return " - ";
            };
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          clinics: function () {
            return this.$store.state.clinic;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(8),
        o = n(331),
        a = n.n(o),
        s = n(74);
      e.a = {
        props: {
          patient_profile_id: {
            type: [String, Number],
            default: function () {
              return "";
            },
          },
        },
        data: function () {
          return {
            patient_id: 0,
            visible: !1,
            showAddForm: !1,
            staticId: -1,
            medicalReportList: [],
            medicalReportData: {},
            encounterData: { status: 1 },
            isLoading: !0,
            showBackButton: !0,
            durations: [],
            formTitle: void 0,
            buttonText: '<i class="fa fa-save"></i> Save',
            loading: !1,
            submitted: !1,
            file: "",
            showEmailAddForm: !1,
            emailReportSelect: [],
            new_report: "",
            upload_report_required: !1,
            mutation_medical_report_label: "",
            isEditForm: !1,
          };
        },
        validations: {
          medicalReportData: {
            name: { required: i.required },
            date: { required: i.required },
          },
        },
        mounted: function () {
          (this.buttonText =
            '<i class="fa fa-save"></i>' + this.formTranslation.common.save),
            (this.new_report = this.formTranslation.common.no_file_chosen),
            void 0 !== this.$route.params.encounter_id &&
              this.encounterDataDetails(),
            void 0 !== this.$route.params.patient_id &&
              ((this.patient_id = this.$route.params.patient_id),
              this.getReport(),
              "patient" === this.getUserRole() && (this.showBackButton = !1)),
            this.patient_profile_id &&
              ((this.patient_id = this.patient_profile_id),
              (this.showBackButton = !1),
              this.getReport()),
            (this.medicalReportData = this.defaultmedicalReportData());
        },
        methods: {
          encounterDataDetails: function () {
            var t = this;
            void 0 !== this.$route.params.encounter_id &&
              ((this.encounterId = this.$route.params.encounter_id),
              Object(r.a)("patient_encounter_details", { id: this.encounterId })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.encounterData = e.data.data),
                    (t.patient_id = t.encounterData.patient_id),
                    t.getReport());
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                }));
          },
          defaultmedicalReportData: function () {
            return (
              (this.new_report = this.formTranslation.common.no_file_chosen),
              { name: "", date: new Date(), upload_report: "", patient_id: 0 }
            );
          },
          getReport: function () {
            var t = this;
            (this.isLoading = !0),
              Object(r.a)("get_patient_report", { patinet: this.patient_id })
                .then(function (e) {
                  (t.isLoading = !1),
                    e.data.status && (t.medicalReportList = e.data.data);
                })
                .catch(function (e) {
                  (t.isLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation, "report");
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.medicalReportData.upload_report = n.id),
                (t.new_report = n.filename),
                (t.upload_report_required = !1);
            }),
              e.open();
          },
          handlePrescriptionAdd: function () {
            (this.showAddForm = !this.showAddForm),
              0 == this.showAddForm && t("#medicalReportDataForm")[0].reset(),
              (this.visible = !this.visible),
              (this.mutation_medical_report_label =
                this.formTranslation.patient.add_medical_report),
              (this.isEditForm = !1),
              (this.medicalReportData = this.defaultmedicalReportData());
          },
          editReportData: function (t) {
            (this.mutation_medical_report_label =
              this.formTranslation.patient.edit_medical_report),
              (this.showAddForm = !0),
              (this.new_report = t.report_file_name),
              (this.isEditForm = !0),
              (this.visible = !0),
              (this.medicalReportData = t),
              (this.medicalReportData.date = new Date(t.date));
          },
          handlePrescriptionMail: function () {
            this.showEmailAddForm = !0;
          },
          close: function () {
            (this.loading = !1),
              (this.file = ""),
              (this.visible = !1),
              (this.showAddForm = !1),
              (this.isEditForm = !1),
              (this.medicalReportData = this.defaultmedicalReportData()),
              t("#medicalReportDataForm")[0].reset();
          },
          closeEmail: function () {
            t(".email-send-button").html(
              '<i class="fas fa-paper-plane"> </i>' +
                this.formTranslation.clinic.dt_lbl_email
            ),
              (this.emailReportSelect = []),
              (this.showEmailAddForm = !1);
          },
          handleEmailSubmit: function () {
            var e = this;
            this.emailReportSelect.length <= 0
              ? displayErrorMessage(
                  this.formTranslation.medical_records.medical_record_not_found
                )
              : (t(".email-send-button").html(
                  '<i class="fa fa-spinner fa-spin"> </i>' +
                    this.formTranslation.common.loading
                ),
                Object(r.b)("patient_report_mail", {
                  data: this.emailReportSelect,
                  patient_id: this.patient_id,
                })
                  .then(function (n) {
                    t(".email-send-button").html(
                      '<i class="fas fa-paper-plane"> </i>' +
                        e.formTranslation.clinic.dt_lbl_email
                    ),
                      void 0 !== n.data.status && !0 === n.data.status
                        ? (displayMessage(n.data.message),
                          (e.showEmailAddForm = !1))
                        : displayErrorMessage(n.data.message);
                  })
                  .catch(function (t) {
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                  }));
          },
          handleSubmit: function () {
            var t = this;
            if (
              ((this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.medicalReportData.$invalid)
            )
              this.loading = !1;
            else {
              if (
                null == this.medicalReportData.upload_report ||
                "" == this.medicalReportData.upload_report ||
                null == this.medicalReportData.upload_report
              )
                return (
                  (this.upload_report_required = !0), void (this.loading = !1)
                );
              (this.loading = !0),
                (this.submitted = !1),
                (this.medicalReportData.patient_id = this.patient_id);
              var e = a.a.cloneDeep(this.medicalReportData);
              (e.date = moment(e.date)
                .tz(Object(s.c)())
                .format("YYYY-MM-DD HH:mm")),
                validateForm("medicalReportDataForm") &&
                  Object(r.b)(
                    this.isEditForm
                      ? "edit_patient_report"
                      : "upload_patient_report",
                    e
                  )
                    .then(function (e) {
                      (e = t.isEditForm ? e.data : e),
                        (t.loading = !1),
                        (t.upload_report_required = !1),
                        e.data.status
                          ? (displayMessage(e.data.message),
                            (t.visible = !1),
                            (t.showAddForm = !1),
                            (t.isEditForm = !1),
                            (t.medicalReportData =
                              t.defaultmedicalReportData()),
                            (t.file = ""),
                            t.getReport())
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        (t.upload_report_required = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
            }
          },
          viewReportData: function (t, e) {
            var n = this;
            Object(r.a)("view_patient_report", { patient_id: t, doc_id: e })
              .then(function (t) {
                t.data.status &&
                  setTimeout(function () {
                    window.open(t.data.data, "_blank");
                  });
              })
              .catch(function (t) {
                displayErrorMessage(
                  n.formTranslation.common.internal_server_error
                );
              });
          },
          deletemedicalReportData: function (e) {
            var n = this;
            void 0 !== this.medicalReportList[e] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete_report,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(r.a)("delete_patient_report", {
                        id: n.medicalReportList[e].id,
                        upload_report: n.medicalReportList[e].upload_report,
                      })
                        .then(function (t) {
                          n.medicalReportList.splice(e, 1);
                        })
                        .catch(function (t) {
                          displayErrorMessage(
                            n.formTranslation.common.internal_server_error
                          );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(410),
        r = n(144),
        o = n(8),
        a = ["tax"];
      e.a = {
        props: {
          patient_profile_id: {
            type: [Number, String],
            default: function () {
              return "";
            },
          },
        },
        components: { AppointmentCard: i.a, AppointmentForm: r.a },
        data: function () {
          return {
            filterOpen: !1,
            temp: null,
            page: 0,
            enableMultiDelete: !1,
            enableMultiBtnDelete: !1,
            deleteMultipleAppointment: !1,
            enableDel: !1,
            deleteBtnEnableText: "",
            filterData: { start: new Date(), end: null, status: null },
            perPage: 10,
            currentPage: 1,
            modelConfig: { type: "string", mask: "YYYY-MM-DD" },
            appointmentFormObj: { visit_type: [] },
            appBtnText: "",
            latestButton: !0,
            addAppointmentButton: !0,
            allStatus: [
              { label: "all", value: "all" },
              { label: "upcoming", value: "1" },
              { label: "completed", value: "3" },
              { label: "cancelled", value: "0" },
              { label: "checkin", value: "4" },
              { label: "pending", value: "2" },
            ],
            status: [
              { label: "", value: "all" },
              { label: "", value: 1 },
              { label: "", value: "past" },
            ],
            selectedDate: null,
            currentDate: null,
            appointmentTypes: [],
            bottom: !1,
            isLoading: !1,
            clinicSessionNotice: { status: !1, msg: "" },
            doctors: [],
            patients: [],
            csvAppointmentData: [],
            csvLoader: !0,
            paginationAppointmentCondition: {},
            minDate: new Date(),
            maxDate: new Date(Date.now() + 864e8),
            clinicMultiselectLoader: !0,
            doctorMultiselectLoader: !0,
            patientMultiselectLoader: !0,
            firstTimeFilterEnable: 0,
            deleteSelectedBtnText: "",
          };
        },
        mounted: function () {
          var t = this;
          void 0 !== this.formTranslation.appointments &&
            ((this.appBtnText =
              '<i class="fa fa-plus"></i>' +
              this.formTranslation.appointments.add_appointment_btn),
            (this.deleteBtnEnableText =
              '<i class="fa fa-trash" style="padding: 5px;"></i> ' +
              this.formTranslation.appointments.enableDelete),
            (this.deleteSelectedBtnText =
              '<i class="fa fa-trash" style="padding: 5px;"></i> ' +
              this.formTranslation.appointments.deleteSelectedAppointment)),
            (this.allStatus = this.allStatus.map(function (e) {
              return (
                "pending" === e.label
                  ? (e.label = t.formTranslation.appointments[e.label])
                  : (e.label = t.formTranslation.common[e.label]),
                e
              );
            })),
            setTimeout(function () {
              (t.appointmentTypes =
                t.$store.state.staticDataModule.static_data.appointment_types),
                window.addEventListener("scroll", function () {
                  t.bottom = t.bottomVisible();
                });
            }, 1e3),
            this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
            this.init(),
            (this.status[0].label = this.formTranslation.appointments.all),
            (this.status[1].label = this.formTranslation.appointments.upcoming),
            (this.status[2].label = this.formTranslation.appointments.past);
        },
        methods: {
          init: function () {
            this.checkIfClinicHaveSession(),
              (this.filterData = this.defaultFilterData()),
              !0 !== this.userData.addOns.kiviPro &&
                this.$store.dispatch("userDataModule/fetchUserForDropdown", {
                  userRoleName: this.patientRoleName,
                });
            var e = Object.assign({}, this.filterData);
            (e.date = moment(this.filterData.date).format("YYYY-MM-DD")),
              "patient" === this.getUserRole() &&
                (e.patient_id = this.userData.ID),
              "doctor" === this.getUserRole() &&
                (e.doctor_id = this.userData.ID),
              (e.pagination = this.currentPage),
              (this.paginationAppointmentCondition.filterData = e),
              this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                filterData: e,
              }),
              window.matchMedia("(max-width: 768px)").matches
                ? (t(".kivicare-pagination").removeClass("pagination-lg"),
                  t(".kivicare-pagination").addClass("pagination-sm"),
                  t(".kivicare-pagination li span").addClass("font-size-10"))
                : (t("#kivicare-pagination").addClass("pagination-lg"),
                  t("#kivicare-pagination").removeClass("pagination-sm"),
                  t(".kivicare-pagination li span").removeClass(
                    "font-size-10"
                  ));
          },
          updateAppointmentList: function (t) {
            (t = t.map(function (t) {
              return (
                t.tax,
                (function (t, e) {
                  if (null == t) return {};
                  var n,
                    i,
                    r = (function (t, e) {
                      if (null == t) return {};
                      var n = {};
                      for (var i in t)
                        if ({}.hasOwnProperty.call(t, i)) {
                          if (-1 !== e.indexOf(i)) continue;
                          n[i] = t[i];
                        }
                      return n;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                      (n = o[i]),
                        -1 === e.indexOf(n) &&
                          {}.propertyIsEnumerable.call(t, n) &&
                          (r[n] = t[n]);
                  }
                  return r;
                })(t, a)
              );
            })),
              (this.csvAppointmentData = this.formatJsonAppointmentData(t)),
              (this.csvLoader = !1);
          },
          defaultAppointmentData: function () {
            return {
              appointment_start_date: new Date(),
              appointment_end_date: this.filterData.end_date,
              appointment_start_time: "",
              patient_id: {},
              doctor_id: {},
              clinic_id: {},
              visit_type: [],
              description: "",
              status: "",
              service_id: {},
              custom_fields: {},
            };
          },
          defaultFilterData: function () {
            var t = "";
            return (
              void 0 !== this.$route.params.patient_id
                ? (t = this.$route.params.patient_id)
                : this.patient_profile_id && (t = this.patient_profile_id),
              {
                date: new Date(),
                patient_id: { id: t },
                status: 1,
                clinic_id: { id: "", label: "" },
                doctor_id: "",
              }
            );
          },
          filterOpenClose: function () {
            this.firstTimeFilterEnable++,
              (this.filterOpen = !this.filterOpen),
              1 === this.firstTimeFilterEnable &&
                ("patient" !== this.getUserRole() && this.getClinicPatients(""),
                "doctor" !== this.getUserRole() && this.doctorListDropDown(""));
          },
          closeFilterForm: function () {
            this.filterOpen = !1;
          },
          handleResetFilter: function (t, e) {
            null != e &&
              "" != e &&
              1 != e &&
              ("date" == t &&
                ((this.filterData.date = ""), this.handleFilterChange()),
              "patient_id" == t &&
                ((this.filterData.patient_id = ""), this.handleFilterChange()),
              "status" == t &&
                ((this.filterData.status = ""), this.handleFilterChange()),
              "clinic" == t &&
                ((this.filterData.clinic_id = { id: 0 }),
                this.handleFilterChange()),
              "doctor" == t &&
                ((this.filterData.doctor_id = ""), this.handleFilterChange())),
              this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1);
          },
          handleFilterChange: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e =
                null != this.filterData.clinic_id
                  ? this.filterData.clinic_id.id
                  : "";
            "clinic" == t &&
              ("patient" !== this.getUserRole() && this.getClinicPatients(e),
              "doctor" !== this.getUserRole() && this.doctorListDropDown(e)),
              (this.isLoading = !0);
            var n = "";
            "" != (n = Object.assign({}, this.filterData)).date &&
            null != n.date
              ? ((n.date.end = moment(this.filterData.date.end).format(
                  "YYYY-MM-DD"
                )),
                (n.date.start = moment(this.filterData.date.start).format(
                  "YYYY-MM-DD"
                )))
              : (n.date = ""),
              1 === n.status &&
                (n.date = moment(new Date()).format("YYYY-MM-DD")),
              (this.appointmentFormObj.patient_id = n.patient_id),
              (this.appointmentFormObj.status = n.status),
              (this.appointmentFormObj.clinic_id = n.clinic_id),
              (this.appointmentFormObj.doctor_id = n.doctor_id),
              (this.currentPage = 1),
              (n.pagination = this.currentPage),
              (this.paginationAppointmentCondition.filterData = n),
              this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                filterData: n,
              });
          },
          closeAppointmentForm: function () {
            this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1);
          },
          handleStatusChange: function (t) {
            switch (
              ((this.csvLoader = !0),
              (this.enableMultiDelete = !1),
              (this.deleteMultipleAppointment = !1),
              (this.deleteBtnEnableText =
                '<i class="fa fa-trash" style="padding: 5px;"></i> ' +
                this.formTranslation.appointments.enableDelete),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
              (this.isLoading = !0),
              t)
            ) {
              case "all":
                (this.minDate = new Date(Date.now() - 864e9)),
                  (this.maxDate = new Date(Date.now() + 864e9));
                break;
              case "past":
                (this.minDate = new Date(Date.now() - 864e9)),
                  (this.maxDate = new Date());
                break;
              case "1":
                (this.minDate = new Date()),
                  (this.maxDate = new Date(Date.now() + 864e9));
            }
            1 == t && (this.filterData.date = new Date()),
              (this.filterData.status = t),
              this.handleFilterChange();
          },
          getTimeSlot: function (t) {
            this.$store.dispatch("appointmentModule/fetchAppointmentSlots", t);
          },
          handleAppointmentForm: function (t) {
            if (this.showAppointmentForm)
              (this.appBtnText =
                '<i class="fa fa-plus"></i>' +
                this.formTranslation.appointments.add_appointment_btn),
                this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1);
            else if (
              ((this.appBtnText =
                '<i class="fas fa-times"></i>' +
                this.formTranslation.appointments.close_form_btn),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !0),
              this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              void 0 === t.id)
            ) {
              var e = this.defaultAppointmentData();
              "doctor" !== this.getUserRole() &&
                (e.clinic_id = { id: this.clinic.id, label: this.clinic.name }),
                "doctor" === this.getUserRole()
                  ? (e.doctor_id = {
                      id: this.userData.ID,
                      label: this.userData.display_name,
                      timeSlot: this.userData.timeSlot,
                      enableTeleMed: this.userData.enableTeleMed,
                    })
                  : "patient" === this.getUserRole()
                  ? (e.patient_id = {
                      id: this.userData.ID,
                      label: this.userData.display_name,
                    })
                  : (e.doctor_id = {}),
                (e.appointment_start_date = new Date()),
                (this.appointmentFormObj = e);
            } else this.appointmentFormObj = t;
          },
          handleAppointmentSave: function () {
            this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
              this.handleStatusChange(1);
          },
          handleDateChange: function (t) {
            if (
              (this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              null != this.filterData.date)
            ) {
              var e = Object.assign({}, this.filterData);
              moment(e.date).format("YYYY-MM-DD") !==
                moment().format("YYYY-MM-DD") && (e.status = "all"),
                void 0 !== this.appointmentFormObj.doctor_id &&
                void 0 !== this.appointmentFormObj.doctor_id.id
                  ? this.getTimeSlot({
                      date: moment(e.date).format("YYYY-MM-DD"),
                      appointment_id:
                        void 0 !== this.appointmentFormObj.id
                          ? this.appointmentFormObj.id
                          : "",
                      clinic_id: this.appointmentFormObj.clinic_id.id,
                      doctor_id: this.appointmentFormObj.doctor_id.id,
                      patient_id: this.appointmentFormObj.patient_id.id,
                    })
                  : this.$store.commit("appointmentModule/RESET_TIME_SLOT");
              var n = moment(t.end).format("YYYY-MM-DD"),
                i = moment(t.start).format("YYYY-MM-DD");
              (this.filterData.date = Object({ start: i, end: n })),
                (this.currentPage = 1),
                (e.pagination = this.currentPage),
                (this.paginationAppointmentCondition.filterData = e),
                (this.paginationAppointmentCondition.filterData.start_date = i),
                (this.paginationAppointmentCondition.filterData.start_date = n),
                this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                  filterData: e,
                  start: i,
                  end: n,
                }),
                (this.filterData.date.start = new Date(
                  this.filterData.date.start + " 00:00"
                )),
                (this.filterData.date.end = new Date(
                  this.filterData.date.end + " 00:00"
                ));
            }
          },
          bottomVisible: function () {
            var t = window.scrollY,
              e = document.documentElement.clientHeight,
              n = document.documentElement.scrollHeight;
            return e + t >= n || n < e;
          },
          checkIfClinicHaveSession: function () {
            (this.clinicSessionNotice.status =
              window.request_data.allClinicHaveSession.status),
              (this.clinicSessionNotice.msg =
                window.request_data.allClinicHaveSession.message);
          },
          deleteMultiple: function () {
            0 == this.enableMultiDelete
              ? ((this.enableMultiDelete = !0),
                (this.deleteMultipleAppointment = !1),
                (this.deleteBtnEnableText =
                  '<i class="fa fa-trash" style="padding: 5px;"></i> ' +
                  this.formTranslation.appointments.disableDelete),
                (this.enableMultiBtnDelete = !1))
              : ((this.enableMultiDelete = !1),
                (this.deleteMultipleAppointment = !1),
                (this.deleteBtnEnableText =
                  '<i class="fa fa-trash" style="padding: 5px;"></i> ' +
                  this.formTranslation.appointments.enableDelete),
                (this.enableMultiBtnDelete = !1));
          },
          deleteSelected: function () {
            this.deleteMultipleAppointment = !0;
          },
          handleMultipleAppointmentChange: function () {
            this.deleteMultiple(), this.handleFilterChange();
          },
          deleteBtnEnabled: function (t) {
            this.enableMultiBtnDelete = "" != t;
          },
          doctorListDropDown: function (t) {
            var e = this;
            (this.doctorMultiselectLoader = !0),
              Object(o.a)("get_static_data", {
                data_type: "clinic_doctors",
                clinic_id: t,
                module_type: "appointment_filter",
              })
                .then(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (e.doctors = t.data.data)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getClinicPatients: function (t) {
            var e = this;
            (this.patientMultiselectLoader = !0),
              Object(o.a)("get_static_data", {
                data_type: "users",
                user_type: this.patientRoleName,
                request_clinic_id: t,
              })
                .then(function (t) {
                  (e.patientMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (e.patients = t.data.data);
                })
                .catch(function (t) {
                  (e.patientMultiselectLoader = !1),
                    displayErrorMessage("Internal server error");
                });
          },
        },
        computed: {
          appointmentList: function () {
            return this.$store.state.appointmentModule.appointmentList
              ? this.$store.state.appointmentModule.appointmentList
              : "";
          },
          appointmentTotalRows: function () {
            return this.$store.state.appointmentModule.totalrows
              ? this.$store.state.appointmentModule.totalrows
              : 0;
          },
          clinic: function () {
            return this.$store.state.userDataModule.clinic;
          },
          clinics: function () {
            return (
              (this.clinicMultiselectLoader = !1), this.$store.state.clinic
            );
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          displayLatest: function () {
            var t =
              moment(this.filterData.date).format("YYYY-MM-DD") ===
              moment().format("YYYY-MM-DD");
            return (this.filterData.status = t ? "-1" : "all"), t;
          },
          showAppointmentForm: function () {
            return this.$store.state.showAppointmentForm;
          },
        },
        watch: {
          date: function (t) {
            moment(t).isAfter(moment()) ||
            moment(t).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
              ? (this.addAppointmentButton = !0)
              : (this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
                (this.addAppointmentButton = !1));
          },
          bottom: function (t) {},
          showAppointmentForm: function (t) {
            this.appBtnText = t
              ? '<i class="fas fa-times"></i>' +
                this.formTranslation.appointments.close_form_btn
              : '<i class="fa fa-plus"></i>' +
                this.formTranslation.appointments.add_appointment_btn;
          },
          currentPage: function (t, e) {
            t !== e &&
              ((this.$refs.appointmentCardRef.isLoading = !0),
              (this.paginationAppointmentCondition.filterData.pagination = t),
              void 0 !== this.paginationAppointmentCondition.start_date &&
              "" != this.paginationAppointmentCondition.start_date
                ? this.$store.dispatch(
                    "appointmentModule/fetchAppointmentData",
                    {
                      filterData:
                        this.paginationAppointmentCondition.filterData,
                      start: this.paginationAppointmentCondition.start_date,
                      end: this.paginationAppointmentCondition.end_date,
                    }
                  )
                : this.$store.dispatch(
                    "appointmentModule/fetchAppointmentData",
                    {
                      filterData:
                        this.paginationAppointmentCondition.filterData,
                    }
                  ));
          },
          filterOpen: function (t, e) {
            var n,
              i,
              r,
              o,
              a =
                void 0 !==
                  (null === (n = this.filterData.date) || void 0 === n
                    ? void 0
                    : n.end) &&
                null !==
                  (null === (i = this.filterData.date) || void 0 === i
                    ? void 0
                    : i.end)
                  ? moment(this.filterData.date.end).format("YYYY-MM-DD")
                  : null,
              s =
                void 0 !==
                  (null === (r = this.filterData.date) || void 0 === r
                    ? void 0
                    : r.start) &&
                null !==
                  (null === (o = this.filterData.date) || void 0 === o
                    ? void 0
                    : o.start)
                  ? moment(this.filterData.date.start).format("YYYY-MM-DD")
                  : null;
            1 == t
              ? ((this.filterData.date = Object({ start: s, end: a })),
                (this.paginationAppointmentCondition.filterData.start_date = s),
                (this.paginationAppointmentCondition.filterData.start_date = a),
                this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                  filterData: this.filterData,
                  start: s,
                  end: a,
                }))
              : ((this.filterData.date = Object({ start: s, end: a })),
                (this.paginationAppointmentCondition.filterData.start_date =
                  null),
                (this.paginationAppointmentCondition.filterData.start_date =
                  null),
                this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                  filterData: this.filterData,
                }));
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        data: function () {
          return {
            clinicsList: { column: [], data: [] },
            isLoading: !0,
            searchName: "",
            searchEmail: "",
            serverParams: {
              columnFilters: { specialties: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            (this.clinicsList = this.defaultClinicList()),
              this.getClinicData(),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions());
          },
          getClinicData: function () {
            var t = this;
            Object(i.a)("clinic_list", this.serverParams, !1)
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? ((t.isLoading = !1),
                    (t.clinicsList.data = e.data.data),
                    (t.totalRows = e.data.total))
                  : ((t.clinicsList.data = []), (t.totalRows = 0));
              })
              .catch(function (e) {
                (t.isLoading = !1),
                  displayErrorMessage(
                    t.formTranlation.common.internal_server_error
                  );
              });
          },
          defaultGlobalCheckboxApplyData: function () {
            return { action_perform: "delete", module: "clinics", data: [] };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            return [
              {
                value: "active",
                label: this.formTranslation.service.dt_active,
              },
              {
                value: "inactive",
                label: this.formTranslation.service.dt_inactive,
              },
              {
                value: "resend_credential",
                label: this.formTranslation.receptionist.resend_credential,
              },
              {
                value: "delete",
                label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
              },
            ];
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete_clinic)
              : "resend_credential" ===
                this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_resend_credential)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getClinicData())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getClinicData();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          defaultClinicList: function () {
            return {
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "80px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "name",
                  label: this.formTranslation.clinic.dt_lbl_name,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.clinic.dt_plh_name_filter,
                    filterValue: "",
                  },
                },
                {
                  field: "email",
                  label: this.formTranslation.clinic.dt_lbl_email,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.clinic.dt_lbl_email,
                    filterValue: "",
                  },
                },
                {
                  field: "clinic_admin_email",
                  label: this.formTranslation.common.clinic_admin_email,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.clinic_admin_email,
                    filterValue: "",
                  },
                },
                {
                  field: "telephone_no",
                  label: this.formTranslation.clinic.dt_lbl_contect,
                  width: "160px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.clinic.dt_plh_fltr_contact,
                    filterValue: "",
                  },
                },
                {
                  field: "specialties",
                  label: this.formTranslation.clinic.dt_lbl_specialties,
                  width: "150px",
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.clinic.dt_plh_fltr_specialitiy,
                    filterValue: "",
                  },
                  html: !0,
                },
                {
                  field: "clinic_full_address",
                  label: this.formTranslation.clinic.plh_address,
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.clinic.plh_address,
                    filterValue: "",
                  },
                },
                {
                  field: "status",
                  label: this.formTranslation.clinic.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "1", text: this.formTranslation.common.active },
                      {
                        value: "0",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                    filterValue: "",
                  },
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.clinic.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          deleteClinicData: function (e, n) {
            var r = this;
            if (void 0 !== this.clinicsList.data[e - 1]) {
              var o = t("#user_delete_" + e);
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete_clinic,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      o.prop("disabled", !0),
                        t(o).find("i").removeClass("fa fa-trash"),
                        t(o).find("i").addClass("fa fa-sync fa-spin"),
                        Object(i.b)("clinic_delete", {
                          id: r.clinicsList.data[e - 1].id,
                        })
                          .then(function (i) {
                            o.prop("disabled", !1),
                              t(o).find("i").removeClass("fa fa-sync fa-spin"),
                              t(o).find("i").addClass("fa fa-trash"),
                              void 0 !== i.data.status && !0 === i.data.status
                                ? (r.userData.default_clinic != n.row.id &&
                                    r.clinicsList.data.splice(e - 1, 1),
                                  r.$store.dispatch("fetchAllClinic", {
                                    self: r,
                                  }),
                                  displayMessage(i.data.message))
                                : displayErrorMessage(i.data.message);
                          })
                          .catch(function (e) {
                            o.prop("disabled", !1),
                              t(o).find("i").removeClass("fa fa-sync fa-spin"),
                              t(o).find("i").addClass("fa fa-trash"),
                              displayErrorMessage(
                                r.formTranlation.common.internal_server_error
                              );
                          });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            }
          },
          resendRequest: function (e) {
            var n = this,
              r = t("#resend_" + e).find("i");
            r.removeClass("fa fa-paper-plane "),
              r.addClass("fa fa-spinner fa-spin"),
              Object(i.b)("resend_credential", { id: e })
                .then(function (t) {
                  r.removeClass("fa fa-spinner fa-spin"),
                    r.addClass("fa fa-paper-plane"),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  displayErrorMessage(
                    n.formTranlation.common.internal_server_error
                  );
                });
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
        },
        computed: {
          getSpeciality: function () {
            return function (t) {
              if (void 0 !== (t = JSON.parse(t)) && t.length > 0) {
                var e = "";
                return (
                  t.map(function (n, i) {
                    return (
                      (e += t.length === i + 1 ? n.label : n.label + ", "), n
                    );
                  }),
                  e
                );
              }
              return " - ";
            };
          },
          specialization: function () {
            return void 0 !==
              this.$store.state.staticDataModule.static_data.specialization &&
              this.$store.state.staticDataModule.static_data.specialization
                .length > 0
              ? this.$store.state.staticDataModule.static_data.specialization
              : [];
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(406),
        o = n(9),
        a = n(622),
        s = (n(24), n(146));
      e.a = {
        name: "CommanSetting",
        components: {
          "chrome-color-picker": r.Chrome,
          twilloGuide: a.a,
          NotificationTestModal: s.a,
        },
        data: function () {
          return {
            isMediaUpload: void 0,
            smsSubmitted: !1,
            request_status: "off",
            whatSubmitted: !1,
            on: !1,
            themeColor: "#4874dc",
            hex: "",
            isOpen: !1,
            isEnabled: "",
            imagePreview:
              window.request_data.kiviCarePluginURL +
              "assets/images/logo-banner.png",
            rtlMode: !1,
            loading: !1,
            smsConfigDataLoading: !1,
            whatsappConfigDataLoading: !1,
            submitted: !1,
            smsConfigData: {},
            whatsAppConfigData: {},
            googleCalData: {},
            clinicalDetailHideInPatient: !1,
            langsOption: [],
            patientCalOn: !1,
            clinicalDetailInclude: !1,
            encounterCustomFieldInclude: !1,
            logoURL:
              window.request_data.kiviCarePluginURL +
              "assets/images/logo-banner.png",
            loaderURL: window.request_data.loaderImage,
            EnableWordpressStatus: !1,
            wordpressLogoImagePreview: window.request_data.wordpress_logo,
            copyrighttext: window.request_data.copyrightText,
            copyrighttextLoading: !0,
            formLoader: !0,
            googlecalendarSubmitted: !1,
            smsConfigSubmitted: !1,
            whatsappConfigSubmitted: !1,
            new_site_logo: "",
            new_site_loader: "",
            wordpress_logo: "",
            customNotification: { enableSMS: "no", enableWhatsapp: "no" },
          };
        },
        validations: {
          smsConfigData: {
            to_number: { required: o.required },
            account_id: { required: o.required },
            auth_token: { required: o.required },
          },
          whatsAppConfigData: {
            wa_to_number: { required: o.required },
            wa_account_id: { required: o.required },
            wa_auth_token: { required: o.required },
          },
          googleCalData: {
            enableCal: { required: o.required },
            client_id: { required: o.required },
            client_secret: { required: o.required },
            app_name: { required: o.required },
          },
        },
        mounted: function () {
          if (
            ((this.new_site_logo = this.formTranslation.common.no_file_chosen),
            (this.new_site_loader = this.formTranslation.common.no_file_chosen),
            (this.new_wordpress_logo =
              this.formTranslation.common.no_file_chosen),
            (this.smsConfigData = this.defaultSMSData()),
            (this.whatsAppConfigData = this.defaultWhatsAppData()),
            (this.googleCalData = this.defaultGoogleData()),
            this.getAllProSettingsData(),
            (this.themeColor = this.getColor),
            (this.hex = this.themeColor),
            document.documentElement.style.setProperty(
              "--primary",
              this.getColor
            ),
            "true" == this.getMode)
          ) {
            (this.rtlMode = !0), document.body.classList.add("rtl");
            var t = document.getElementsByTagName("html")[0],
              e = document.createAttribute("dir");
            (e.value = "rtl"), t.setAttributeNode(e);
          } else
            document.body.classList.remove("rtl"),
              document.getElementsByTagName("html")[0].removeAttribute("dir");
          this.getModule(), (this.isMediaUpload = window.wp.media());
        },
        methods: {
          defaultSMSData: function () {
            return {
              account_id: "",
              auth_token: "",
              to_number: "",
              enableSMS: !1,
            };
          },
          defaultWhatsAppData: function () {
            return {
              wa_account_id: "",
              wa_auth_token: "",
              wa_to_number: "",
              enableWhatsApp: !1,
            };
          },
          defaultGoogleData: function () {
            return {
              client_id: "",
              client_secret: "",
              app_name: "",
              enableCal: !1,
            };
          },
          getAllProSettingsData: function () {
            var t = this;
            !0 === this.userData.addOns.kiviPro
              ? ((this.formLoader = !0),
                Object(i.a)("get_all_pro_settings_value", {})
                  .then(function (e) {
                    (t.formLoader = !1),
                      void 0 !== e.data.whatsapp.status &&
                        !0 === e.data.whatsapp.status &&
                        (t.whatsAppConfigData = e.data.whatsapp.data),
                      void 0 !== e.data.sms.status &&
                        !0 === e.data.sms.status &&
                        (t.smsConfigData = e.data.sms.data),
                      void 0 !== e.data.google_calendar &&
                        void 0 !== e.data.google_calendar.status &&
                        !0 === e.data.google_calendar.status &&
                        (t.googleCalData = e.data.google_calendar.data),
                      void 0 !== e.data.patient_calendar &&
                        void 0 !== e.data.patient_calendar.status &&
                        !0 === e.data.patient_calendar.status &&
                        (t.patientCalOn = e.data.patient_calendar.data),
                      void 0 !== e.data.encounter_clinical_detail &&
                        void 0 !== e.data.encounter_clinical_detail.status &&
                        !0 === e.data.encounter_clinical_detail.status &&
                        ((t.clinicalDetailInclude =
                          "true" == e.data.encounter_clinical_detail.data ||
                          1 == e.data.encounter_clinical_detail.data),
                        (t.clinicalDetailHideInPatient =
                          "true" ==
                            e.data.encounter_clinical_detail.hideInPatient ||
                          1 == e.data.encounter_clinical_detail.hideInPatient),
                        (t.encounterCustomFieldInclude =
                          "true" ==
                            e.data.encounter_clinical_detail.custom_field ||
                          1 == e.data.encounter_clinical_detail.custom_field)),
                      void 0 !== e.data.wordpress_logo_data &&
                        void 0 !== e.data.wordpress_logo_data.status &&
                        void 0 !== e.data.wordpress_logo_data.logo &&
                        ((t.EnableWordpressStatus =
                          e.data.wordpress_logo_data.status),
                        (t.wordpressLogoImagePreview =
                          e.data.wordpress_logo_data.logo)),
                      e.data.custom_notification &&
                        (t.customNotification = e.data.custom_notification);
                  })
                  .catch(function (e) {
                    (t.formLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.widgets.record_not_found
                      );
                  }))
              : (this.formLoader = !1);
          },
          uploadsiteLogo: function (t) {
            if (!0 === this.userData.addOns.kiviPro) {
              var e = this;
              if (void 0 === this.isMediaUpload) {
                var n = t.target.files[0],
                  r = new FormData();
                r.append("file", n),
                  Object(i.b)("upload_logo", r)
                    .then(function (t) {
                      void 0 !== t.data.status && !0 === t.data.status
                        ? (displayMessage(t.data.message),
                          (e.imagePreview = t.data.data),
                          e.$store.dispatch("userDataModule/fetchUserData", {}))
                        : displayErrorMessage(t.data.message);
                    })
                    .catch(function (t) {});
              } else {
                var o = kivicareCustomImageUploader(this.formTranslation);
                o.on("select", function () {
                  var t = o.state().get("selection").first().toJSON();
                  (e.imagePreview = t.url),
                    (e.new_site_logo = t.filename),
                    Object(i.b)("upload_logo", { site_logo: t.id })
                      .then(function (t) {
                        void 0 !== t.data.status && !0 === t.data.status
                          ? (displayMessage(t.data.message),
                            (e.imagePreview = t.data.data),
                            e.$store.dispatch(
                              "userDataModule/fetchUserData",
                              {}
                            ))
                          : displayErrorMessage(t.data.message);
                      })
                      .catch(function (t) {});
                }),
                  o.open();
              }
            }
          },
          uploadSiteLoader: function (t) {
            if (!0 === this.userData.addOns.kiviPro) {
              var e = this;
              if (void 0 === this.isMediaUpload) {
                var n = t.target.files[0],
                  r = new FormData();
                r.append("file", n),
                  Object(i.b)("upload_loader", r)
                    .then(function (t) {
                      void 0 !== t.data.status && !0 === t.data.status
                        ? ((e.loaderURL = t.data.data),
                          displayMessage(t.data.message))
                        : (displayErrorMessage(t.data.message),
                          (e.loaderURL = window.request_data.loaderImage));
                    })
                    .catch(function (t) {
                      e.loaderURL = window.request_data.loaderImage;
                    });
              } else {
                var o = kivicareCustomImageUploader(this.formTranslation);
                o.on("select", function () {
                  var t = o.state().get("selection").first().toJSON();
                  (e.loaderURL = t.url),
                    (e.new_site_loader = t.filename),
                    Object(i.b)("upload_loader", { site_loader: t.id })
                      .then(function (t) {
                        void 0 !== t.data.status && !0 === t.data.status
                          ? ((e.loaderURL = t.data.data),
                            displayMessage(t.data.message))
                          : (displayErrorMessage(t.data.message),
                            (e.loaderURL = window.request_data.loaderImage));
                      })
                      .catch(function (t) {
                        e.loaderURL = window.request_data.loaderImage;
                      });
                }),
                  o.open();
              }
            }
          },
          setSiteThemeColor: function () {
            var t = this;
            !0 === this.userData.addOns.kiviPro &&
              (document.documentElement.style.setProperty(
                "--primary",
                this.themeColor
              ),
              Object(i.b)("update_theme_color", { color: this.themeColor })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (displayMessage(e.data.message),
                    (t.themeColor = e.data.data),
                    localStorage.setItem("temp_color", e.data.data));
                })
                .catch(function (t) {}));
          },
          setSiteRTLMode: function () {
            var t = this;
            if (!0 === this.userData.addOns.kiviPro) {
              var e = this.rtlMode;
              if (1 == e) {
                document.body.classList.add("rtl");
                var n = document.getElementsByTagName("html")[0],
                  r = document.createAttribute("dir");
                (r.value = "rtl"), n.setAttributeNode(r);
              } else
                document.body.classList.remove("rtl"),
                  document
                    .getElementsByTagName("html")[0]
                    .removeAttribute("dir"),
                  setTimeout(function () {
                    window.location.reload();
                  }, 1e3);
              Object(i.a)("update_theme_rtl", { rtl: e })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.isEnabled = e.data.data),
                    displayMessage(e.data.message),
                    t.$store.dispatch("userDataModule/fetchUserData", {}));
                })
                .catch(function (t) {});
            }
          },
          setWordpressLogoStatus: function () {
            var t = this;
            !0 === this.userData.addOns.kiviPro &&
              Object(i.b)("save_wordpress_logo", {
                status: this.EnableWordpressStatus,
              })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.EnableWordpressStatus = e.data.data ? "1" : "0"),
                    t.$store.commit("FETCH_WORDPRESS_LOGO", {
                      data: {
                        logo: t.wordpressLogoImagePreview,
                        status: t.EnableWordpressStatus,
                      },
                    }));
                })
                .catch(function (t) {});
          },
          saveWordpressLogoImage: function () {
            if (!0 === this.userData.addOns.kiviPro) {
              var t = this,
                e = kivicareCustomImageUploader(this.formTranslation);
              e.on("select", function () {
                var n = e.state().get("selection").first().toJSON();
                (t.wordpressLogoImagePreview = n.url),
                  (t.new_wordpress_logo = n.filename),
                  Object(i.b)("save_wordpress_logo", { wordpress_logo: n.id })
                    .then(function (e) {
                      void 0 !== e.data.status && !0 === e.data.status
                        ? ((t.wordpressLogoImagePreview = e.data.data),
                          t.$store.commit("FETCH_WORDPRESS_LOGO", {
                            data: {
                              logo: e.data.data,
                              status: t.EnableWordpressStatus,
                            },
                          }),
                          displayMessage(e.data.message))
                        : (displayErrorMessage(e.data.message),
                          (t.loaderURL = window.request_data.loaderImage));
                    })
                    .catch(function (e) {
                      t.loaderURL = window.request_data.loaderImage;
                    });
              }),
                e.open();
            }
          },
          saveSmsConfigData: function (e) {
            var n = this;
            if (!0 === this.userData.addOns.kiviPro) {
              var i =
                "checkbox" === e && "false" === this.smsConfigData.enableSMS;
              i ||
              ((this.smsConfigDataLoading = !0),
              (this.smsSubmitted = !0),
              this.$v.$touch(),
              !this.$v.smsConfigData.$invalid)
                ? !i &&
                  this.customNotification.enableSMS &&
                  ["sms"].includes(this.customNotification.enableSMS)
                  ? t.confirm({
                      title:
                        this.formTranslation.clinic_schedule.dt_are_you_sure,
                      content:
                        this.formTranslation
                          .enabling_twilio_sms_will_disable_custom_notification_sms,
                      type: "red",
                      buttons: {
                        ok: {
                          text: this.formTranslation.common.yes,
                          btnClass: "btn-danger",
                          keys: ["enter"],
                          action: function () {
                            (n.customNotification.enableSMS = "no"),
                              n.saveCustomNotificationApi("sms", "no"),
                              n.saveSmsConfigDataApi();
                          },
                        },
                        cancel: {
                          text: this.formTranslation.common.cancel,
                          action: function () {
                            n.smsConfigData.enableSMS = "false";
                          },
                        },
                      },
                    })
                  : this.saveSmsConfigDataApi()
                : (this.smsConfigDataLoading = !1);
            }
          },
          saveSmsConfigDataApi: function () {
            var t = this;
            Object(i.b)("sms_config_save", this.smsConfigData)
              .then(function (e) {
                (t.smsSubmitted = !1),
                  (t.smsConfigDataLoading = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? displayMessage(e.data.message)
                    : displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                (t.smsSubmitted = !1),
                  (t.smsConfigDataLoading = !1),
                  (t.submitted = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          saveWhatsAppConfigData: function (e) {
            var n = this;
            if (!0 === this.userData.addOns.kiviPro) {
              var i =
                "checkbox" === e &&
                "false" === this.whatsAppConfigData.enableWhatsApp;
              i ||
              ((this.whatsappConfigDataLoading = !0),
              (this.whatSubmitted = !0),
              this.$v.$touch(),
              !this.$v.whatsAppConfigData.$invalid)
                ? !i &&
                  this.customNotification.enableWhatsapp &&
                  ["yes"].includes(this.customNotification.enableWhatsapp)
                  ? t.confirm({
                      title:
                        this.formTranslation.clinic_schedule.dt_are_you_sure,
                      content:
                        this.formTranslation
                          .enabling_twilio_whatsApp_will_disable_custom_notification_WhatsApp,
                      type: "red",
                      buttons: {
                        ok: {
                          text: this.formTranslation.common.yes,
                          btnClass: "btn-danger",
                          keys: ["enter"],
                          action: function () {
                            (n.customNotification.enableWhatsapp = "no"),
                              n.saveCustomNotificationApi("whatsapp", "no"),
                              n.saveWhatsappApiCall();
                          },
                        },
                        cancel: {
                          text: this.formTranslation.common.cancel,
                          action: function () {
                            n.whatsAppConfigData.enableWhatsApp = "false";
                          },
                        },
                      },
                    })
                  : this.saveWhatsappApiCall()
                : (this.whatsappConfigDataLoading = !1);
            }
          },
          saveWhatsappApiCall: function () {
            var t = this;
            Object(i.b)("whatsapp_config_save", this.whatsAppConfigData)
              .then(function (e) {
                (t.whatSubmitted = !1),
                  (t.whatsappConfigDataLoading = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? displayMessage(e.data.message)
                    : displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                (t.whatSubmitted = !1),
                  (t.whatsappConfigDataLoading = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          saveGoogleCalenderConfigData: function (t) {
            var e = this;
            !0 === this.userData.addOns.kiviPro &&
              ((this.loading = !0),
              ("checkbox" === t && "false" === this.googleCalData.enableCal) ||
              ((this.googlecalendarSubmitted = !0),
              this.$v.$touch(),
              !this.$v.googleCalData.$invalid)
                ? Object(i.b)("google_calender_config", this.googleCalData)
                    .then(function (t) {
                      (e.loading = !1),
                        (e.googlecalendarSubmitted = !1),
                        void 0 !== t.data.status && !0 === t.data.status
                          ? (displayMessage(t.data.message),
                            e.$router.push({ name: "setting.comman_settings" }))
                          : displayErrorMessage(t.data.message);
                    })
                    .catch(function (t) {
                      (e.loading = !1),
                        (e.googlecalendarSubmitted = !1),
                        displayErrorMessage(
                          e.formTranslation.common.internal_server_error
                        );
                    })
                : (this.loading = !1));
          },
          savePatientCalendarStatus: function () {
            var t = this;
            if (!0 === this.userData.addOns.kiviPro) {
              var e = this.patientCalOn;
              Object(i.a)("save_patient_google_cal", { pCal: e })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (displayMessage(e.data.message),
                    t.$store.dispatch("userDataModule/fetchUserData", {}));
                })
                .catch(function (t) {});
            }
          },
          saveEncounterClinicalDetailsIncludeInPrescriptionPrint: function (t) {
            var e = this;
            Object(i.a)("edit_clinical_detail_include", {
              status: this.clinicalDetailInclude,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  displayMessage(t.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
              });
          },
          saveEncounterCustomFieldIncludeInPrescriptionPrint: function (t) {
            var e = this;
            Object(i.a)("edit_encounter_custom_field_include", {
              status: this.encounterCustomFieldInclude,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  displayMessage(t.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
              });
          },
          saveEncounterClinicalDetailsHideInPatientDashboard: function (t) {
            var e = this;
            Object(i.a)("edit_clinical_detail_hide_in_patient", {
              status: this.clinicalDetailHideInPatient,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  displayMessage(t.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
              });
          },
          saveSiteCopyrightText: function () {
            var t = this;
            !0 === this.userData.addOns.kiviPro &&
              ((this.copyrighttextLoading = !1),
              Object(i.a)("save_copy_right_text", { text: this.copyrighttext })
                .then(function (e) {
                  (t.copyrighttextLoading = !0),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (t.$store.commit("FETCH_FOOTER_COPYRIGHT_TEXT", {
                          data: t.copyrighttext,
                        }),
                        displayMessage(e.data.message))
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.copyrighttextLoading = !0;
                }));
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
          saveCustomNotification: function (e) {
            var n = this,
              i = "";
            "sms" === e
              ? ((i = this.customNotification.enableSMS),
                this.smsConfigData.enableSMS &&
                [!0, "true"].includes(this.smsConfigData.enableSMS)
                  ? t.confirm({
                      title:
                        this.formTranslation.clinic_schedule.dt_are_you_sure,
                      content:
                        this.formTranslation
                          .enabling_custom_notification_sms_will_disable_twillo_sms,
                      type: "red",
                      buttons: {
                        ok: {
                          text: this.formTranslation.common.yes,
                          btnClass: "btn-danger",
                          keys: ["enter"],
                          action: function () {
                            n.saveSmsConfigData("checkbox"),
                              n.saveCustomNotificationApi(e, i);
                          },
                        },
                        cancel: { text: this.formTranslation.common.cancel },
                      },
                    })
                  : this.saveCustomNotificationApi(e, i))
              : ((i = this.customNotification.enableWhatsapp),
                this.whatsAppConfigData.enableWhatsapp &&
                [!0, "true"].includes(this.whatsAppConfigData.enableWhatsapp)
                  ? t.confirm({
                      title:
                        this.formTranslation.clinic_schedule.dt_are_you_sure,
                      content:
                        this.formTranslation
                          .enabling_custom_notification_sms_will_disable_twillo_sms,
                      type: "red",
                      buttons: {
                        ok: {
                          text: this.formTranslation.common.yes,
                          btnClass: "btn-danger",
                          keys: ["enter"],
                          action: function () {
                            (n.whatsAppConfigData.enableWhatsapp = "false"),
                              n.saveWhatsAppConfigData("checkbox"),
                              n.saveCustomNotificationApi(e, i);
                          },
                        },
                        cancel: { text: this.formTranslation.common.cancel },
                      },
                    })
                  : this.saveCustomNotificationApi(e, i));
          },
          saveCustomNotificationApi: function (t, e) {
            Object(i.b)("save_custom_notification_setting", {
              type: t,
              status: e,
            })
              .then(function (t) {
                void 0 !== t.data.status && !0 === t.data.status
                  ? displayMessage(t.data.message)
                  : displayErrorMessage(t.data.message);
              })
              .catch(function (t) {});
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
          getMode: function () {
            return this.userData.theme_mode;
          },
          getSiteLogo: function () {
            return this.userData.site_logo;
          },
        },
        watch: {
          getMode: function (t, e) {
            this.rtlMode = e;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(8),
        o = n(43);
      e.a = {
        name: "NotificationTestModal",
        components: { ModalPopup: o.a },
        data: function () {
          return {
            testSubmitted: !1,
            testEmail: {
              recieverDetails: "",
              content: (void 0).formTranslation.common
                .kivicare_test_message_lbl,
              type: "",
            },
            modalOpen: !1,
            notificationType: "email",
          };
        },
        validations: {
          testEmail: {
            recieverDetails: { required: i.required },
            content: { required: i.required },
          },
        },
        mounted: function () {
          this.testEmail.content =
            this.formTranslation.common.kivicare_test_message_lbl;
        },
        methods: {
          sendTestEmail: function () {
            var e = this;
            if (
              ((this.testSubmitted = !0),
              this.$v.$touch(),
              !this.$v.testEmail.$invalid)
            ) {
              var n = t(".modal-footer button:nth-child(2)");
              n.prop("disabled", !0),
                n.text(this.formTranslation.common.loading),
                (this.testEmail.type = this.notificationType),
                Object(r.b)("send_test_notification", this.testEmail)
                  .then(function (t) {
                    (e.testSubmitted = !1),
                      n.prop("disabled", !1),
                      n.text("Send"),
                      void 0 !== t.data.status && !0 === t.data.status
                        ? (displayMessage(t.data.message),
                          (e.modalOpen = !1),
                          (e.testEmail = {
                            recieverDetails: "",
                            content: "Welcome to KiviCare, This is test ",
                            type: "",
                          }))
                        : displayErrorMessage(t.data.message);
                  })
                  .catch(function (t) {
                    n.prop("disabled", !1),
                      n.text("Send"),
                      (e.testSubmitted = !1),
                      displayErrorMessage(
                        e.formTranslation.common.server_error
                      );
                  });
            }
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(341),
        o = n(147),
        a = n(43),
        s = n(115),
        l = n(9),
        c = n(66);
      function d(t) {
        return (d =
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
      function u(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != d(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != d(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == d(e) ? e : e + "";
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
      e.a = {
        data: function () {
          return {
            doctorField: !1,
            pageLoader: !0,
            visible: !1,
            showEditForm: !1,
            showAddForm: !1,
            patientEncounterList: { data: [], column: [] },
            patientEncountersRequest: {
              login_id: 0,
              limit: 10,
              offset: 0,
              patient_id: 0,
            },
            encounterData: {},
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            doctors: [],
            encounterId: -1,
            addEncounterButton: !0,
            editEncounter: !1,
            patientField: !1,
            clinicField: !0,
            clinic_extra: { prefix: "", postfix: "" },
            billDetailsModel: !1,
            isEncounterTempName: "",
            isEncounterTemp: !1,
            encounterName: "",
            addEncounterTemplateButton: !1,
            showAddTemplateForm: !1,
            encounter_template: { id: "", name: "" },
            formSubmitted: !1,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            encounterCustomFormData: {},
            encounterCustomFormModal: !1,
            encounterCustomFormViewMode: !1,
            isEditing: !1,
          };
        },
        components: {
          Create: r.a,
          BillDetails: o.a,
          ModalPopup: a.a,
          RouterLink: s.a,
          CustomForm: c.a,
        },
        mounted: function () {
          this.init(),
            "patient_id" in this.$route.params
              ? ((this.patientField = !1),
                (this.clinicField = !1),
                (this.patientEncountersRequest.patient_id =
                  this.$route.params.patient_id))
              : ((this.patientField = !0), (this.clinicField = !0));
        },
        validations: { encounter_template: { name: { required: l.required } } },
        methods: {
          init: function () {
            this.setWhichTemplate(!1);
            var t = this.getUserRole();
            "doctor" == t && (this.doctorField = !0),
              "patient" == t && (this.patientField = !0),
              void 0 === this.$route.params.patient_id
                ? (this.patientEncountersRequest.login_id = this.login_id)
                : (this.patientEncountersRequest.patient_id =
                    this.$route.params.patient_id),
              (this.patientEncounterList = this.defaultPatientEncountersData()),
              this.getPatientEncountersData(),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions());
          },
          setWhichTemplate: function (t) {
            "encounter-template" == (0 == t ? this.$route.name : t.name)
              ? ((this.isEncounterTempName =
                  this.formTranslation.common.switch_to_encounter),
                (this.encounterName =
                  this.formTranslation.patient_bill.encounter_template_list),
                (this.addEncounterButton = !1),
                (this.addEncounterTemplateButton = !0),
                (this.isEncounterTemp = 1))
              : ((this.isEncounterTempName =
                  this.formTranslation.common.switch_to_encounter_temp),
                (this.encounterName =
                  this.formTranslation.patient_bill.patients_encounter_list),
                (this.addEncounterButton = !0),
                (this.addEncounterTemplateButton = !1),
                (this.isEncounterTemp = 0));
          },
          handleEncounterTemplateButton: function () {
            var t;
            this.userData.addOns.kiviPro &&
              ("true" ==
              (null === (t = this.$route) ||
              void 0 === t ||
              null === (t = t.query) ||
              void 0 === t
                ? void 0
                : t.isEncounterTemp)
                ? this.$router.push({ query: { isEncounterTemp: 0 } })
                : this.$router.push({ query: { isEncounterTemp: 1 } }));
          },
          addTemplateHandle: function () {
            var t = this;
            this.$v.$touch(),
              this.$v.encounter_template.$invalid
                ? (this.formSubmitted = !0)
                : Object(i.b)("add_encounter_temp", {
                    template_name_data: this.encounter_template,
                    added_by: this.$store.state.userDataModule.user.ID,
                  }).then(function (e) {
                    var n, i, r, o;
                    !0 ===
                    (null == e || null === (n = e.data) || void 0 === n
                      ? void 0
                      : n.success)
                      ? (t.$router.push({
                          name: "patient-encounter.dashboard",
                          params: {
                            encounter_id:
                              null == e || null === (i = e.data) || void 0 === i
                                ? void 0
                                : i.data.id,
                          },
                          query: { isEncounterTemp: 1 },
                        }),
                        displayMessage(
                          null == e ||
                            null === (r = e.data) ||
                            void 0 === r ||
                            null === (r = r.data) ||
                            void 0 === r
                            ? void 0
                            : r.message
                        ))
                      : displayErrorMessage(
                          null == e || null === (o = e.data) || void 0 === o
                            ? void 0
                            : o.data.message
                        );
                  });
          },
          getDoctorsData: function () {
            var t = this;
            Object(i.a)("get_static_data", {
              data_type: "clinic_doctors",
              clinic_id: this.activeClinicId,
            })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.doctors = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          defaultPatientEncountersData: function () {
            return {
              totalRow: 0,
              column: this.isEncounterTemp
                ? [
                    {
                      field: "id",
                      label: this.formTranslation.common.id,
                      width: "100px",
                      filterOptions: {
                        enabled: !0,
                        placeholder: this.formTranslation.common.id,
                        filterValue: "",
                      },
                    },
                    {
                      field: "encounters_template_name",
                      label:
                        this.formTranslation.patient_encounter_template
                          .dt_lbl_name,
                      filterOptions: {
                        enabled: !0,
                        placeholder:
                          this.formTranslation.patient_encounter_template
                            .dt_plh_fltr_date,
                        filterValue: "",
                      },
                      width: "100%",
                    },
                    {
                      field: "actions",
                      sortable: !1,
                      label:
                        this.formTranslation.patient_encounter.dt_lbl_action,
                      html: !0,
                    },
                  ]
                : [
                    {
                      field: "id",
                      label: this.formTranslation.common.id,
                      width: "100px",
                      filterOptions: {
                        enabled: !0,
                        placeholder: this.formTranslation.common.id,
                        filterValue: "",
                      },
                    },
                    {
                      field: "doctor_name",
                      label:
                        this.formTranslation.patient_encounter.dt_lbl_doc_name,
                      hidden: this.doctorField,
                      filterOptions: {
                        enabled: !0,
                        placeholder:
                          this.formTranslation.patient_encounter
                            .dt_plh_fltr_by_doc,
                        filterValue: "",
                      },
                    },
                    {
                      field: "clinic_name",
                      label:
                        this.formTranslation.patient_encounter.dt_lbl_clinic,
                      filterOptions: {
                        enabled: !(
                          "kiviCare_clinic_admin" ===
                            window.request_data.current_user_role ||
                          "kiviCare_receptionist" ===
                            window.request_data.current_user_role
                        ),
                        placeholder:
                          this.formTranslation.patient_encounter
                            .dt_plh_fltr_by_clinic,
                        filterValue: "",
                      },
                    },
                    {
                      field: "patient_name",
                      label:
                        this.formTranslation.patient_encounter.dt_lbl_patient,
                      hidden: this.patientField,
                      filterOptions: {
                        enabled: !0,
                        placeholder:
                          this.formTranslation.patient_encounter
                            .dt_plh_fltr_patient,
                        filterValue: "",
                      },
                    },
                    {
                      field: "encounter_date",
                      label: this.formTranslation.patient_encounter.dt_lbl_name,
                      filterOptions: {
                        enabled: !0,
                        placeholder:
                          this.formTranslation.patient_encounter
                            .dt_plh_fltr_date,
                        filterValue: "",
                      },
                    },
                    {
                      field: "status",
                      label: this.formTranslation.common.status,
                      filterOptions: {
                        enabled: !0,
                        placeholder:
                          this.formTranslation.static_data
                            .dt_lbl_plh_sr_fltr_status,
                        filterValue: "",
                        filterDropdownItems: [
                          {
                            value: "1",
                            text: this.formTranslation.common.active,
                          },
                          {
                            value: "0",
                            text: this.formTranslation.common.closed,
                          },
                        ],
                      },
                    },
                    {
                      field: "actions",
                      sortable: !1,
                      label:
                        this.formTranslation.patient_encounter.dt_lbl_action,
                      html: !0,
                    },
                  ],
              data: [],
            };
          },
          deleteEncounterData: function (e) {
            var n = this;
            void 0 !== this.patientEncounterList.data[e - 1] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.a)(
                        n.isEncounterTemp
                          ? "delete_encounter_temp"
                          : "patient_encounter_delete",
                        { id: n.patientEncounterList.data[e - 1].id }
                      )
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.patientEncounterList.data.splice(e - 1, 1),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          getPatientEncountersData: function () {
            var t = this;
            this.pageLoader = !0;
            var e = Object.assign({}, this.serverParams);
            e.columnFilters.encounter_date &&
              e.columnFilters.encounter_date.start &&
              e.columnFilters.encounter_date.end &&
              ((e.columnFilters.encounter_date.start = moment(
                e.columnFilters.encounter_date.start
              ).format("YYYY-MM-DD")),
              (e.columnFilters.encounter_date.end = moment(
                e.columnFilters.encounter_date.end
              ).format("YYYY-MM-DD"))),
              this.login_id == this.$route.params.patient_id &&
                ((this.patientEncountersRequest.login_id = this.login_id),
                (this.patientEncountersRequest.patient_id = 0)),
              Object(i.a)(
                "encounter-template" == this.$route.name
                  ? "get_encounter_templates"
                  : "patient_encounter_list",
                p(p({}, this.patientEncountersRequest), e)
              )
                .then(function (e) {
                  var n;
                  (t.pageLoader = !1),
                    (void 0 !== e.data.status && !0 === e.data.status) ||
                    1 ==
                      (null == e || null === (n = e.data) || void 0 === n
                        ? void 0
                        : n.success)
                      ? ((t.patientEncounterList.data =
                          "encounter-template" == t.$route.name
                            ? e.data.data.list
                            : e.data.data),
                        (t.totalRows =
                          "encounter-template" == t.$route.name
                            ? e.data.data.total_rows
                            : e.data.total_rows),
                        void 0 !== e.data.clinic_extra &&
                          null !== e.data.clinic_extra &&
                          (t.clinic_extra = e.data.clinic_extra))
                      : ((t.totalRows = 0), (t.patientEncounterList.data = []));
                })
                .catch(function (e) {
                  (t.pageLoader = !1),
                    403 != e.response.status
                      ? displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        )
                      : displayErrorMessage(e.response.data.data);
                });
          },
          defaultGlobalCheckboxApplyData: function () {
            return {
              action_perform: "delete",
              module:
                "encounter-template" == this.$route.name
                  ? "patient_encounter_template"
                  : "patient_encounter_list",
              data: [],
            };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            if (this.kcCheckPermission("patient_encounter_delete"))
              return [
                {
                  value: "delete",
                  label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
                },
              ];
          },
          confirmDelete: function () {
            var e = this;
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content: this.formTranslation.common.py_delete,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    e.globalCheckboxApply();
                  },
                },
                cancel: { text: this.formTranslation.common.cancel },
              },
            });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message),
                        t.getPatientEncountersData())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getPatientEncountersData();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          editEncounterData: function (t, e) {
            (this.editEncounter = !0),
              (this.encounterId = e),
              (this.showAddForm = !1),
              (this.showEditForm = !0),
              (this.visible = !1),
              window.scroll({ top: 0, behavior: "smooth" });
          },
          editEncounterTemplate: function (t) {
            (this.isEditing = !0),
              (this.encounter_template = {
                id: t.id,
                name: t.encounters_template_name,
              }),
              (this.showAddTemplateForm = !0);
          },
          handleEncounterForm: function () {
            this.closeEncounterForm(),
              this.showAddForm
                ? ((this.visible = !1),
                  (this.showAddForm = !1),
                  (this.showEditForm = !1))
                : ((this.visible = !0),
                  (this.showAddForm = !0),
                  (this.showEditForm = !1));
          },
          closeEncounterForm: function () {
            (this.visible = !1),
              (this.encounterId = -1),
              (this.showAddForm = !1),
              (this.showEditForm = !1);
          },
          handleEncounterTemplateForm: function () {
            (this.showAddTemplateForm = !0), (this.isEditing = !1);
          },
          closeEncounterTemplateForm: function () {
            (this.showAddTemplateForm = !1),
              this.encounter_template.name,
              (this.encounter_template = { id: "", name: "" });
          },
          customFormOpen: function (t, e) {
            (this.encounterCustomFormData = e),
              (this.encounterCustomFormData.module_id =
                "appointment_module" === e.module_type
                  ? t.appointment_id
                  : t.id),
              (this.encounterCustomFormViewMode = "0" === t.status),
              (this.encounterCustomFormModal = !0);
          },
          customFormCondition: function (t, e) {
            return (
              t.custom_forms &&
              t.custom_forms.length &&
              (0 === e.clinic_ids.length ||
                e.clinic_ids.includes(t.clinic_id)) &&
              (("appointment_module" === e.module_type && t.appointment_id) ||
                "patient_encounter_module" === e.module_type)
            );
          },
        },
        computed: {
          selectOptions: function () {
            return {
              enabled: "patient" !== this.getUserRole(),
              selectOnCheckboxOnly: !0,
              selectionInfoClass: "text-primary bg-white",
              selectionText: this.formTranslation.common.rows_selected,
              clearSelectionText: this.formTranslation.common.clear,
              disableSelectInfo: !1,
              selectAllByGroup: !0,
            };
          },
          getSpeciality: function () {
            return function (t) {
              if (void 0 !== (t = JSON.parse(t)) && t.length > 0) {
                var e = "";
                return (
                  t.map(function (n, i) {
                    return (
                      (e += t.length === i + 1 ? n.label : n.label + ", "), n
                    );
                  }),
                  e
                );
              }
              return " - ";
            };
          },
          login_id: function () {
            return this.$store.state.userDataModule.user.ID;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {
          getSidebarOpen: function (t, e) {
            this.$root.$on("bv::collapse::state", function (t, e) {});
          },
          $route: function (t) {
            this.updateParams(),
              this.setWhichTemplate(t),
              (this.patientEncounterList = this.defaultPatientEncountersData());
          },
          showAddTemplateForm: function (t, e) {
            t && (this.formSubmitted = !1);
          },
          encounter_template: function (t, e) {
            this.showAddTemplateForm && (this.formSubmitted = 0 != t.length);
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        data: function () {
          return {
            services: [],
            patientBillData: {
              clinic: { address: "", city: "", postal_code: "" },
              patient: { display_name: "", gender: "", dobL: new Date() },
              total_amount: "",
              discount: "",
              actual_amount: "",
            },
            woocommerceActive: "off",
            clinic_currency_prefix: "",
            clinic_currency_postfix: "",
            iconClass: "fa fa-paper-plane",
            dataLoading: !0,
          };
        },
        mounted: function () {
          this.init(),
            void 0 !== this.clinic_extra.currency_prefix &&
            null != this.clinic_extra.currency_prefix
              ? (this.clinic_currency_prefix =
                  this.clinic_extra.currency_prefix)
              : void 0 !== this.clinic_extra.prefix &&
                null != this.clinic_extra.prefix
              ? (this.clinic_currency_prefix = this.clinic_extra.prefix)
              : (this.clinic_currency_prefix = ""),
            void 0 !== this.clinic_extra.currency_postfix &&
            null != this.clinic_extra.currency_postfix
              ? (this.clinic_currency_postfix =
                  this.clinic_extra.currency_postfix)
              : void 0 !== this.clinic_extra.postfix &&
                null != this.clinic_extra.postfix
              ? (this.clinic_currency_postfix = this.clinic_extra.postfix)
              : (this.clinic_currency_postfix = "");
        },
        props: {
          encounterId: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
          clinic_extra: { type: [Object, Array, String] },
        },
        methods: {
          init: function () {
            var t = this;
            Object(i.a)("patient_bill_detail", {
              encounter_id: this.encounterId,
            })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (0 === e.data.data.length
                    ? (t.createBillButton = !0)
                    : ((t.createBillButton = !1),
                      (t.patientBillData = e.data.data)));
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              })
              .finally(function () {
                t.dataLoading = !1;
              });
          },
          sendToPatient: function () {
            var e = this,
              n = t("#sendToPatient");
            n.prop("disabled", !0),
              (this.iconClass = "fa fa-sync fa-spin"),
              Object(i.a)("print_encounter_bill_detail", {
                id: this.encounterId,
                data: this.patientBillData,
                type: "sendBill",
              })
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    displayMessage(t.data.message),
                    setTimeout(function () {
                      n.prop("disabled", !1),
                        (e.iconClass = "fa fa-paper-plane");
                    }, 1e3);
                })
                .catch(function (t) {
                  n.prop("disabled", !1),
                    (e.iconClass = "fa fa-paper-plane"),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          printData: function () {
            var e = this,
              n = t("#billPrint");
            n.prop("disabled", !0),
              n.html("<i class='fa fa-sync fa-spin'> </i>"),
              Object(i.a)("print_encounter_bill_detail", {
                id: this.encounterId,
                data: this.patientBillData,
                type: "printBill",
              })
                .then(function (i) {
                  void 0 !== i.data.status &&
                    !0 === i.data.status &&
                    t(i.data.data).printArea({}),
                    setTimeout(function () {
                      n.prop("disabled", !1),
                        n.html(
                          "<i class='fa fa-print'> </i>" +
                            e.formTranslation.patient_bill.print
                        );
                    }, 1e3);
                })
                .catch(function (t) {
                  n.prop("disabled", !1),
                    n.html(
                      "<i class='fa fa-print'> </i>" +
                        e.formTranslation.patient_bill.print
                    ),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          checkWoocommerceActive: function () {
            var t = this;
            Object(i.a)("get_payment_status", { status: "" })
              .then(function (e) {
                t.woocommerceActive = e.data.data;
              })
              .catch(function (t) {});
          },
          paymentLink: function () {
            "off" != this.woocommerceActive
              ? Object(i.b)("send_payment_link", { id: this.encounterId })
                  .then(function (t) {
                    displayMessage(t.data.message);
                  })
                  .catch(function (t) {})
              : displayErrorMessage(
                  this.formTranslation.patient_bill.payment_or_bill_item_error
                );
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(623),
        o = n(629),
        a = n(24),
        s = n(411),
        l = n(147),
        c = n(43),
        d = n(66);
      e.a = {
        components: {
          MedicalHistory: r.a,
          Prescription: o.a,
          BillForm: s.a,
          BillDetails: l.a,
          ModalPopup: c.a,
          CustomForm: d.a,
        },
        data: function () {
          return {
            encounterId: 0,
            patient_id: 0,
            encounterData: {},
            patientBillData: {},
            createBillButton: !0,
            billModel: !1,
            billDetailsModel: !1,
            loading: !1,
            submitted: !1,
            buttonText: '<i class="fa fa-save"></i> Save',
            customFieldsLength: 0,
            customFieldsObj: {},
            cardTitle: "Clinical Detail",
            componentKey: 0,
            showCustomField: !1,
            problems: {},
            observation: {},
            note: {},
            hideClinicalDetailsToPatient: !1,
            checkOutVal: 0,
            extraClinicalData: [],
            isEncounterTemp: !1,
            encounterTemplate: "",
            encounterTemplates: [],
            encounterTemplateLoader: !1,
            counter: 0,
            encounterCustomFormData: {},
            encounterCustomFormModal: !1,
            encounterCustomFormViewMode: !1,
            isButtonDisabled: !1,
            isLoading: !1,
            iconClass: "fa fa-print",
            customFields: {},
          };
        },
        mounted: function () {
          (this.encounterData = this.defaultEncounterDetails()),
            this.init(),
            (this.hideClinicalDetailsToPatient =
              "patient" === this.getUserRole());
        },
        methods: {
          handleCustomField: function (t) {
            this.customFields = t;
          },
          init: function () {
            var t,
              e,
              n = this;
            void 0 !==
              (null === (t = this.$route) ||
              void 0 === t ||
              null === (t = t.query) ||
              void 0 === t
                ? void 0
                : t.isEncounterTemp) &&
              (this.isEncounterTemp =
                1 ==
                (null === (e = this.$route) || void 0 === e
                  ? void 0
                  : e.query.isEncounterTemp)),
              (this.encounterId = this.$route.params.encounter_id),
              (this.problems = {
                encounter_id: this.encounterId,
                type: "problem",
                title: this.formTranslation.encounter_dashboard.problems,
                status: this.encounterData.status,
                data: [],
              }),
              (this.observation = {
                encounter_id: this.encounterId,
                type: "observation",
                title: this.formTranslation.encounter_dashboard.observation,
                status: this.encounterData.status,
                data: [],
              }),
              (this.note = {
                encounter_id: this.encounterId,
                type: "note",
                title: this.formTranslation.encounter_dashboard.notes,
                status: this.encounterData.status,
                data: [],
              }),
              void 0 !== this.$route.params.encounter_id &&
                ((this.encounterId = this.$route.params.encounter_id),
                Object(i.a)(
                  this.isEncounterTemp
                    ? "patient_encounter_template_details"
                    : "patient_encounter_details",
                  { id: this.encounterId }
                )
                  .then(function (t) {
                    var e;
                    void 0 !== t.data.status && !0 === t.data.status
                      ? ((n.showCustomField = !0),
                        (n.encounterData = t.data.data),
                        void 0 !== n.encounterData.clinic_extra &&
                          (n.encounterData.clinic_extra = JSON.parse(
                            n.encounterData.clinic_extra
                          )),
                        (n.patient_id = n.encounterData.patient_id),
                        n.getEncounterCustomField(),
                        n.getEncounterBill(),
                        (n.hideClinicalDetailsToPatient =
                          ("true" == t.data.hideInPatient ||
                            1 == t.data.hideInPatient) &&
                          "patient" === n.getUserRole()),
                        n.hideClinicalDetailsToPatient ||
                          n.getMedicalRecords(n.encounterId))
                      : !1 ===
                          (null == t || null === (e = t.data) || void 0 === e
                            ? void 0
                            : e.status) && n.$router.push({ name: "/" });
                  })
                  .catch(function (t) {
                    displayErrorMessage(
                      n.formTranslation.common.internal_server_error
                    );
                  })),
              this.userData.addOns.kiviPro && this.getEncounterTemplates();
          },
          getExtraClinicalDetail: function (t, e) {
            var n = this;
            Object(i.a)("encounter_extra_clinical_detail_fields", {
              id: t,
              status: e,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  (n.extraClinicalData = t.data.data),
                  n.hideClinicalDetailsToPatient ||
                    n.getMedicalRecords(n.encounterId);
              })
              .catch(function (t) {
                n.hideClinicalDetailsToPatient ||
                  n.getMedicalRecords(n.encounterId),
                  displayErrorMessage(
                    n.formTranslation.common.internal_server_error
                  );
              });
          },
          forceRerender: function () {
            this.componentKey += 1;
          },
          defaultEncounterDetails: function () {
            return {
              patient_id: 0,
              patient_name: "",
              clinic_name: "",
              doctor_name: "",
              custom_fields: {},
            };
          },
          getEncounterCustomField: function () {
            var t = this;
            Object(i.a)("get_custom_fields", {
              module_type: "patient_encounter_module",
              module_id: this.encounterId,
              doctor_id: this.encounterData.doctor_id,
            })
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? ((t.customFieldsObj = e.data.data),
                    (t.customFieldsLength = e.data.data.length))
                  : displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getCustomFieldsValues: function (t) {
            if (!t || void 0 === t) return !1;
            this.encounterData.custom_fields = t;
          },
          getRequireFields: function (t) {
            this.requiredFields = t;
          },
          getEncounterBill: function () {
            var t = this;
            0 === parseInt(this.encounterId) ||
              this.isEncounterTemp ||
              Object(i.a)("patient_bill_detail", {
                encounter_id: this.encounterId,
              })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (0 === e.data.data.length
                      ? (t.createBillButton = !0)
                      : ((t.createBillButton = !1),
                        (t.patientBillData = e.data.data)));
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.widgets.record_not_found
                  );
                });
          },
          handleSubmit: function () {
            var t = this;
            if ("patient" != this.getUserRole()) {
              if (
                ((this.loading = !0),
                (this.submitted = !0),
                this.requiredFields.length > 0)
              )
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    this.formTranslation.common.all_required_field_validation
                  )
                );
              var e = Object(a.m)(
                this.customFields,
                this.encounterData.custom_fields
              );
              if (!0 !== e)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    e + " " + this.formTranslation.patient_encounter.is_required
                  )
                );
              Object(a.n)("encounterDataForm") &&
                Object(i.b)(
                  "save_custom_patient_encounter_field",
                  this.encounterData
                )
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
            }
          },
          handleEncounterStatus: function (t) {
            (this.checkOutVal = t),
              this.isBillModuleActive
                ? this.handleGenerateBill()
                : this.handleEncounterstatusUpdate({
                    id: this.encounterId,
                    status: 0,
                  });
          },
          handleEncounterstatusUpdate: function (t) {
            var e = this;
            Object(i.b)("patient_encounter_update_status", {
              id: t.id,
              status: t.status,
              checkOutVal: this.checkOutVal,
            })
              .then(function (n) {
                void 0 !== n.data.status && !0 === n.data.status
                  ? ((e.encounterData.status = t.status),
                    displayMessage(n.data.message))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          handleGenerateBill: function () {
            this.billModel = !0;
          },
          handleBillDetails: function () {
            this.billDetailsModel = !0;
          },
          handleBillSave: function (t) {
            (this.billModel = !1),
              (this.createBillButton = !1),
              (this.encounterData.status =
                t.payment_status && "paid" === t.payment_status ? 0 : 1),
              this.getEncounterBill();
          },
          handleBillCancel: function (t) {
            this.billModel = !1;
          },
          defaultBillRecordData: function () {
            return {
              title: "",
              encounter_id: 0,
              total_amount: 0,
              discount: 0,
              actual_amount: "",
              status: 0,
              billItems: [],
            };
          },
          defaultBillingItemData: function () {
            return {
              item_id: {},
              qty: 1,
              price: 0,
              total: this.billItem.price * this.billItem.qty,
            };
          },
          getMedicalRecords: function (t) {
            var e = this;
            Object(i.a)(
              this.isEncounterTemp
                ? "medical_history_list_from_template"
                : "medical_history_list",
              { encounter_id: t }
            )
              .then(function (t) {
                try {
                  void 0 !== e.$refs.medical_history_note &&
                    (!0 !== e.userData.addOns.kiviPro ||
                      1 == e.getEnableEncounter[2].status) &&
                    (e.$refs.medical_history_note.medicalHistoryListLoader =
                      !1),
                    void 0 !== e.$refs.medical_history_observation &&
                      (!0 !== e.userData.addOns.kiviPro ||
                        1 == e.getEnableEncounter[1].status) &&
                      (e.$refs.medical_history_observation.medicalHistoryListLoader =
                        !1),
                    void 0 !== e.$refs.medical_history_problems &&
                      (!0 !== e.userData.addOns.kiviPro ||
                        1 == e.getEnableEncounter[0].status) &&
                      (e.$refs.medical_history_problems.medicalHistoryListLoader =
                        !1),
                    e.extraClinicalData.map(function (t, n) {
                      e.$refs[t.ref][0].medicalHistoryListLoader = !1;
                    });
                } catch (t) {}
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  (void 0 !== t.data.data.problem &&
                    t.data.data.problem.length > 0 &&
                    (!0 !== e.userData.addOns.kiviPro ||
                      1 == e.getEnableEncounter[0].status) &&
                    (e.$refs.medical_history_problems.medicalHistoryList =
                      t.data.data.problem),
                  void 0 !== t.data.data.observation &&
                    t.data.data.observation.length > 0 &&
                    (!0 !== e.userData.addOns.kiviPro ||
                      1 == e.getEnableEncounter[1].status) &&
                    (e.$refs.medical_history_observation.medicalHistoryList =
                      t.data.data.observation),
                  void 0 !== t.data.data.note &&
                    t.data.data.note.length > 0 &&
                    (!0 !== e.userData.addOns.kiviPro ||
                      1 == e.getEnableEncounter[2].status) &&
                    (e.$refs.medical_history_note.medicalHistoryList =
                      t.data.data.note),
                  e.extraClinicalData.map(function (n, i) {
                    void 0 !== t.data.data[n.type] &&
                      t.data.data[n.type].length > 0 &&
                      (e.$refs[n.ref][0].medicalHistoryList =
                        t.data.data[n.type]);
                  }));
              })
              .catch(function (t) {
                try {
                  (e.$refs.medical_history_note.medicalHistoryListLoader = !1),
                    (e.$refs.medical_history_observation.medicalHistoryListLoader =
                      !1),
                    (e.$refs.medical_history_problems.medicalHistoryListLoader =
                      !1);
                } catch (t) {}
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          getEncounterTemplates: function () {
            var t = this;
            Object(i.a)("get_encounter_templates", {
              encounter_id: this.encounterId,
            }).then(function (e) {
              var n, i, r;
              null != e &&
                null !== (n = e.data) &&
                void 0 !== n &&
                n.success &&
                ((t.encounterTemplates =
                  null == e || null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.data.list),
                (t.encounterTemplate =
                  null === (r = t.encounterTemplates) || void 0 === r
                    ? void 0
                    : r.find(function (t) {
                        var n;
                        return (
                          t.id ===
                          (null == e ||
                          null === (n = e.data) ||
                          void 0 === n ||
                          null === (n = n.data) ||
                          void 0 === n
                            ? void 0
                            : n.default)
                        );
                      }))),
                (t.encounterTemplateLoader = !1);
            });
          },
          ChangeEncounterHandler: function (t) {
            var e = this;
            Object(i.b)("insert_template_to_encounter", {
              encounterTemplateID: t.id,
              encounter_id: this.encounterId,
              patientID: this.patient_id,
            }).then(function (t) {
              e.counter++, e.init();
            });
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
          printEncounter: function () {
            var e = this;
            (this.isButtonDisabled = !0),
              (this.isLoading = !0),
              (this.iconClass = "fa fa-spinner fa-spin"),
              Object(i.a)("get_encounter_print", {
                encounter_id: this.encounterId,
              })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    t(e.data.data).printArea();
                })
                .catch(function (t) {})
                .finally(function () {
                  (e.isButtonDisabled = !1),
                    (e.isLoading = !1),
                    (e.iconClass = "fa fa-print");
                });
          },
          customFormOpen: function (t, e) {
            (this.encounterCustomFormData = e),
              (this.encounterCustomFormData.module_id =
                "appointment_module" === e.module_type
                  ? t.appointment_id
                  : t.id),
              (this.encounterCustomFormViewMode = "0" === t.status),
              (this.encounterCustomFormModal = !0);
          },
          customFormCondition: function (t, e) {
            return (
              t.custom_forms &&
              t.custom_forms.length &&
              (0 === e.clinic_ids.length ||
                e.clinic_ids.includes(t.clinic_id)) &&
              (("appointment_module" === e.module_type && t.appointment_id) ||
                "patient_encounter_module" === e.module_type)
            );
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          customFieldEncounterId: function () {
            return this.$route.params.encounter_id;
          },
          encounterDoctorId: function () {
            return this.encounterData.doctor_id;
          },
          customFieldsData: function () {
            return this.encounterData.custom_fields;
          },
          isCustomeFieldExist: function () {
            if (void 0 !== this.encounterData.custom_fields)
              return (
                Object.values(this.customFieldsObj).filter(function (t) {
                  return "1" === t.status;
                }).length > 0
              );
          },
          isBillModuleActive: function () {
            return (
              this.$store.state.userDataModule.user.module.module_config.filter(
                function (t) {
                  return "billing" === t.name && "1" === t.status;
                }
              ).length > 0
            );
          },
          getEnableEncounter: function () {
            if (void 0 !== this.userData.encounter_enable_module)
              return this.userData.encounter_enable_module;
          },
          getEnableCount: function () {
            return 1 == this.userData.addOns.kiviPro
              ? this.userData.encounter_enable_count
              : "4";
          },
        },
        watch: {
          $route: function () {
            var t, e;
            void 0 !==
              (null === (t = this.$route) ||
              void 0 === t ||
              null === (t = t.query) ||
              void 0 === t
                ? void 0
                : t.isEncounterTemp) &&
              (this.isEncounterTemp =
                null === (e = this.$route) ||
                void 0 === e ||
                null === (e = e.query) ||
                void 0 === e
                  ? void 0
                  : e.isEncounterTemp);
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(24),
        o = n(9),
        a = n(43);
      function s(t) {
        return (s =
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
              if ("object" != s(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != s(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == s(e) ? e : e + "";
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
      e.a = {
        props: {
          encounterId: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
          encounterData: {
            type: [Object, Array],
            default: function () {
              return {};
            },
          },
          updateCounter: 0,
          isEcounterTemplateModule: !1,
        },
        validations: {
          prescriptionData: {
            name: { required: o.required },
            frequency: { required: o.required },
            duration: { required: o.required },
          },
        },
        data: function () {
          return {
            showAddForm: !1,
            prescriptionList: [],
            prescriptionData: {},
            durations: [],
            formTitle: "Add prescription",
            loading: !1,
            submitted: !1,
            componentKey: 0,
            prescriptionLoader: !0,
            prescriptionNames: [],
            printPrescriptionLoader: !1,
            exportPrescription: [],
            isLoading: !1,
          };
        },
        mounted: function () {
          this.init();
        },
        components: { ModalPopup: a.a },
        methods: {
          init: function () {
            var t = this;
            (this.durations = this.getDurations()),
              (this.prescriptionData = this.defaultFormData()),
              setTimeout(function () {
                t.getPrescriptionRecords();
              }, 200);
          },
          forceRerender: function () {
            this.componentKey += 1;
          },
          defaultFormData: function () {
            return {
              encounter_id: this.encounterData.encounter_id,
              name: "",
              frequency: "",
              duration: "",
              instruction: "",
            };
          },
          getDurations: function () {
            var t = 1,
              e = [];
            do {
              e.push(t + " Days"), t < 5 ? t++ : (t += 5);
            } while (t <= 60);
            return e;
          },
          getPrescriptionRecords: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
            if (void 0 !== this.encounterData.encounter_id) {
              var n = c(c({}, this.encounterData), {}, { search: e });
              Object(i.a)(
                this.isEcounterTemplateModule
                  ? "get_encounter_template_prescription_list"
                  : "prescription_list",
                n
              )
                .then(function (e) {
                  (t.prescriptionNames = e.data.prescriptionNames),
                    (t.prescriptionLoader = !1),
                    (t.isLoading = !1),
                    void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    void 0 !== e.data.data &&
                    e.data.data.length > 0
                      ? (t.prescriptionList = e.data.data)
                      : (t.prescriptionList = []);
                })
                .catch(function (e) {
                  (t.isLoading = !1),
                    (t.prescriptionLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    ),
                    (t.prescriptionNames = []),
                    (t.prescriptionList = []);
                });
            }
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.prescriptionData.$invalid
                ? (this.loading = !1)
                : Object(r.n)("prescriptionDataForm") &&
                  Object(i.b)(
                    this.isEcounterTemplateModule
                      ? "save_encounter_template_prescription"
                      : "prescription_save",
                    this.prescriptionData
                  )
                    .then(function (e) {
                      (t.loading = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            (t.showAddForm = !1),
                            void 0 === t.prescriptionData.id &&
                              t.prescriptionList.push(e.data.data),
                            (t.prescriptionData = t.defaultFormData()),
                            (t.submitted = !1),
                            (t.prescriptionData.encounter_id =
                              t.encounterData.encounter_id),
                            t.forceRerender())
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          mailPrescriptionAdd: function () {
            var e = this;
            if (void 0 !== this.prescriptionData.encounter_id) {
              var n = t("#send_prescription").find("i");
              n.removeClass("fa fa-paper-plane"),
                n.addClass("fa fa-spinner fa-spin"),
                Object(i.a)("prescription_mail", this.prescriptionData)
                  .then(function (t) {
                    n.removeClass("fa fa-spinner fa-spin"),
                      n.addClass("fa fa-paper-plane"),
                      void 0 !== t.data.status && !0 === t.data.status
                        ? displayMessage(t.data.message)
                        : displayErrorMessage(t.data.message);
                  })
                  .catch(function (t) {
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                  });
            }
          },
          close: function () {
            (this.showAddForm = !1),
              (this.prescriptionData = this.defaultFormData());
          },
          handlePrescriptionAdd: function () {
            (this.showAddForm = !this.showAddForm),
              (this.prescriptionData = this.defaultFormData());
          },
          handlePrescriptionEdit: function (t, e) {
            (this.showAddForm = !0), (this.prescriptionData = t);
          },
          deletePrescriptionData: function (e) {
            var n = this;
            void 0 !== this.prescriptionList[e] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete_prescription,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.a)(
                        n.isEcounterTemplateModule
                          ? "delete_encounter_template_prescription"
                          : "prescription_delete",
                        { id: n.prescriptionList[e].id }
                      )
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.prescriptionList.splice(e, 1),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          addPrescriptionOption: function (t) {
            var e = this,
              n = { id: t, label: t },
              r = {
                label: t,
                type: "prescription_medicine",
                value: t.replace(" ", "_"),
                status: 1,
              },
              o = this;
            Object(i.b)("static_data_save", r)
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  (o.prescriptionNames.push(n), (o.prescriptionData.name = n));
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          printPrescription: function () {
            var e = this;
            void 0 !== this.encounterData.encounter_id &&
              ((this.printPrescriptionLoader = !0),
              Object(i.a)("get_prescription_print", {
                id: this.encounterData.encounter_id,
              })
                .then(function (n) {
                  (e.printPrescriptionLoader = !1),
                    void 0 !== n.data.status &&
                      !0 === n.data.status &&
                      t(n.data.data).printArea();
                })
                .catch(function (t) {
                  (e.printPrescriptionLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                }));
          },
          searchPrescriptionNames: _.debounce(function (t) {
            (this.isLoading = !0),
              1 !== t.length
                ? this.getPrescriptionRecords(t)
                : (this.isLoading = !1);
          }, 300),
          filterNonNumeric: function (t) {
            var e = t.key;
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e) ||
              t.preventDefault();
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          encounterStatus: function () {
            return void 0 !== this.encounterData.status
              ? this.encounterData.status
              : "1";
          },
          getEnablePrescription: function () {
            if (void 0 !== this.userData.prescription_module_config)
              return this.userData.prescription_module_config;
          },
        },
        watch: {
          encounterData: function (t, e) {
            this.prescriptionData.encounter_id = t.encounter_id;
          },
          prescriptionList: function (t, e) {
            var n = this;
            (t = t.map(function (t) {
              return Object.keys(t).reduce(function (e, i) {
                switch (i) {
                  case "name":
                    e[n.formTranslation.common.name] = t[i].label;
                    break;
                  case "frequency":
                    e[n.formTranslation.patient_encounter.frequency] = t[i];
                    break;
                  case "duration":
                    e[n.formTranslation.patient_encounter.duration_Days] = t[i];
                    break;
                  case "instruction":
                    e[n.formTranslation.patient_encounter.instruction] = t[i];
                }
                return e;
              }, {});
            })),
              (this.exportPrescription = t);
          },
          updateCounter: function () {
            (this.prescriptionList.length = 0),
              (this.prescriptionLoader = !0),
              this.init();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(8),
        o = n(24);
      function a(t) {
        return (a =
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
      function s(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                c(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function c(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != a(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != a(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == a(e) ? e : e + "";
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
      e.a = {
        props: {
          encounterId: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
          doctorId: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
          clinic_extra: { type: [Object, Array, String] },
          appointmentData: {},
          checkOutVal: {
            type: [String, Number],
            default: function () {
              return 0;
            },
          },
        },
        data: function () {
          return {
            woocommerceActive: "off",
            cardTitle: "Add bill",
            buttonText: "Save",
            encounter_id: 0,
            patientBillData: { billItems: [] },
            services: [],
            billItem: {},
            loading: !1,
            submitted: !1,
            billItemTitle: "Add Bill Item",
            billItemBtn: '<i class="fa fa-plus"></i> Save',
            billItemSubmitted: !1,
            billItemEdit: !1,
            visible: !1,
            showEditForm: !1,
            showAddForm: !1,
            staticId: -1,
            status: [
              { id: "paid", label: "Paid" },
              { id: "unpaid", label: "Unpaid" },
            ],
            clinic_currency_prefix: "",
            clinic_currency_postfix: "",
            isLoading: !0,
            billItemLoading: !1,
          };
        },
        validations: {
          patientBillData: {
            total_amount: { required: i.required },
            discount: {
              required: i.required,
              maximumDiscount: o.e,
              minValue: Object(i.minValue)(0),
            },
            actual_amount: { required: i.required },
          },
          billItem: {
            item_id: { required: i.required },
            qty: {
              required: i.required,
              minValue: Object(i.minValue)(1),
              maxValue: Object(i.maxValue)(1e4),
            },
            price: {
              required: i.required,
              minValue: Object(i.minValue)(0),
              maxValue: Object(i.maxValue)(1e18),
            },
          },
        },
        mounted: function () {
          this.init(),
            (this.clinic_currency_prefix =
              void 0 !== this.clinic_extra.currency_prefix &&
              null != this.clinic_extra.currency_prefix
                ? this.clinic_extra.currency_prefix
                : ""),
            (this.clinic_currency_postfix =
              void 0 !== this.clinic_extra.currency_postfix &&
              null != this.clinic_extra.currency_postfix
                ? this.clinic_extra.currency_postfix
                : "");
        },
        methods: {
          init: function () {
            var t = this;
            (this.buttonText = this.formTranslation.common.save),
              (this.billItemBtn =
                '<i class="fa fa-plus"></i> ' +
                this.formTranslation.common.save),
              (this.patientBillData = this.defaultMedicalRecordData()),
              (this.billItem = this.defaultBillingItemData()),
              0 !== this.encounterId &&
                ((this.patientBillData.encounter_id = this.encounterId),
                this.editBill(this.encounterId)),
              Object(r.a)("service_list", {
                module_type: "appointment_form",
                limit: 0,
                doctor_id: this.doctorId,
                without_currency: "yes",
                clinic_id: this.appointmentData.clinic_id,
              })
                .then(function (e) {
                  if (
                    ((t.appointmentTypes = e.data.data), e.data.data.length > 0)
                  ) {
                    var n = e.data.data;
                    (n = n.map(function (t) {
                      return Object.keys(t).reduce(function (e, n) {
                        return (
                          "name" === n
                            ? (e.label = t[n])
                            : "service_id" === n
                            ? (e.id = t[n])
                            : "charges" === n && (e.price = t[n]),
                          e
                        );
                      }, {});
                    })),
                      (t.services = n);
                  }
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                });
          },
          checkWoocommerceActive: function () {
            var t = this;
            Object(r.a)("get_payment_status", { status: "" })
              .then(function (e) {
                t.woocommerceActive = e.data.data;
              })
              .catch(function (t) {});
          },
          handleBillModal: function () {
            (this.showAddForm = !0),
              (this.visible = !this.visible),
              (this.showEditForm = !this.showAddForm),
              (this.billItemEdit = !1),
              this.billItemReset(),
              !1 === this.visible &&
                ((this.showAddForm = !1), (this.visible = !1));
          },
          SendBillToPatient: function () {
            var e = t("#send_bill").find("i");
            e.removeClass("fa fa-paper-plane"),
              e.addClass("fa fa-spinner fa-spin");
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.patientBillData.$invalid
                ? (this.loading = !1)
                : void 0 === this.patientBillData.billItems ||
                  this.patientBillData.billItems.length > 0
                ? (null !== this.appointmentData.appointment_id &&
                    (this.patientBillData.appointment_id =
                      this.appointmentData.appointment_id),
                  (this.patientBillData.checkOutVal = this.checkOutVal),
                  Object(o.n)("patientBillDataForm") &&
                    ((this.patientBillData.doctor_id = this.doctorId),
                    Object(r.b)("patient_bill_save", this.patientBillData)
                      .then(function (e) {
                        (t.loading = !1),
                          void 0 !== e.data.status && !0 === e.data.status
                            ? (displayMessage(e.data.message),
                              t.$emit("onBillSaved", t.patientBillData),
                              (t.showEditForm = !1),
                              (t.showAddForm = !1))
                            : displayErrorMessage(e.data.message);
                      })
                      .catch(function (e) {
                        (t.loading = !1),
                          displayErrorMessage(
                            t.formTranslation.common.internal_server_error
                          );
                      })))
                : (this.loading = !1);
          },
          addBillItem: function () {
            (this.billItemSubmitted = !0),
              this.$v.billItem.$touch(),
              this.$v.billItem.$invalid ||
                ((this.billItemLoading = !0),
                this.getTaxDetails(),
                (this.showAddForm = !1),
                (this.showEditForm = !1),
                (this.visible = !1));
          },
          afterTaxDetails: function () {
            if (this.billItemEdit) {
              this.updateBillTotal(), (this.billItemEdit = !1);
              var t = this.staticId - 1;
              this.patientBillData.billItems.splice(t, 1, l({}, this.billItem));
            } else
              void 0 === this.patientBillData.billItems &&
                (this.patientBillData.billItems = []),
                this.patientBillData.billItems.push(this.billItem);
            (this.billItemTitle =
              this.formTranslation.patient_bill.bill_add_item),
              (this.billItemBtn =
                '<i class="fa fa-plus"></i> ' +
                this.formTranslation.patient_bill.bill_add_item),
              (this.billItem = this.defaultBillingItemData()),
              (this.billItemSubmitted = !1),
              (this.billItemLoading = !1);
          },
          editBillItem: function (t) {
            (this.staticId = t),
              (this.showAddForm = !1),
              (this.showEditForm = !0),
              (this.visible = !0),
              (this.billItemTitle =
                this.formTranslation.common.edit_bill_items),
              (this.billItemEdit = !0),
              (this.billItemBtn =
                '<i class="fa fa-save"></i>' +
                this.formTranslation.common.save_item),
              (this.billItem = l({}, this.patientBillData.billItems[t - 1]));
          },
          deleteBillItem: function (e) {
            var n = this;
            if (void 0 !== this.patientBillData.billItems[e - 1]) {
              var i = this.patientBillData.billItems[e - 1];
              void 0 !== i.id
                ? t.confirm({
                    title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                    content:
                      this.formTranslation.common.press_yes_delete_billitems,
                    type: "red",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-danger",
                        keys: ["enter"],
                        action: function () {
                          Object(r.b)("patient_bill_item_delete", {
                            bill_item_id: i.id,
                          })
                            .then(function (t) {
                              void 0 !== t.data.status &&
                                !0 === t.data.status &&
                                (n.patientBillData.billItems.splice(e - 1, 1),
                                displayMessage(t.data.message),
                                (n.billItem = n.defaultBillingItemData()),
                                n.getTaxDetails("delete"));
                            })
                            .catch(function (t) {
                              void 0 !== t.response.data &&
                              void 0 !== t.response.data.message
                                ? displayErrorMessage(t.response.data.message)
                                : displayErrorMessage(
                                    n.formTranslation.common
                                      .internal_server_error
                                  );
                            });
                        },
                      },
                      cancel: { text: this.formTranslation.common.cancel },
                    },
                  })
                : (this.patientBillData.billItems.splice(e - 1, 1),
                  (this.billItem = this.defaultBillingItemData()),
                  this.getTaxDetails("delete"));
            }
          },
          defaultMedicalRecordData: function () {
            return {
              title: "",
              encounter_id: 0,
              appointment_id: 0,
              doctor_id: 0,
              total_amount: 0,
              discount: 0,
              actual_amount: "",
              status: 0,
              billItems: [],
              payment_status: "unpaid",
              taxes: [],
              tax_total: "",
            };
          },
          defaultBillingItemData: function () {
            return {
              item_id: "",
              qty: 1,
              price: 0,
              total: this.billItem.price * this.billItem.qty || 0,
            };
          },
          handleBillItemChange: function (t) {
            (this.billItem.price = parseFloat(t.price)),
              (this.billItem.qty = 1);
          },
          handlePaymentChange: function (t) {
            "paid" == t
              ? "1" === this.checkOutVal
                ? (this.buttonText =
                    this.formTranslation.common.save_and_close_checkout)
                : (this.buttonText =
                    this.formTranslation.common.save_and_close_encounters)
              : (this.buttonText = this.formTranslation.common.save);
          },
          removePaymentChage: function (t) {
            "paid" == t.id &&
              (this.buttonText = this.formTranslation.common.save);
          },
          handleBillItemUnselect: function () {
            (this.billItem.price = 0), (this.billItem.qty = 1);
          },
          addServiceTag: function (t) {
            var e = { id: t, label: t, price: 0 };
            (this.billItem.item_id = e),
              (this.billItem.price = 0),
              (this.billItem.qty = 1),
              (this.billItem.total = 0),
              this.services.push(e);
          },
          calculateGrandTotal: function () {
            this.patientBillData.total_amount =
              this.patientBillData.billItem.each(function (t) {});
          },
          editBill: function (t) {
            var e = this;
            0 !== parseInt(t) &&
              Object(r.a)("patient_bill_detail", { encounter_id: t })
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    ((e.isLoading = !1),
                    t.data.status &&
                      void 0 !== t.data.data.id &&
                      null !== t.data.data.id &&
                      "" !== t.data.data.id &&
                      (e.patientBillData = t.data.data));
                })
                .catch(function (t) {
                  (e.isLoading = !1),
                    displayErrorMessage(
                      e.formTranslation.widgets.record_not_found
                    );
                });
          },
          getTaxDetails: function (t) {
            var e = this;
            if (!1 !== this.userData.addOns.kiviPro) {
              var n = JSON.stringify(this.patientBillData);
              (n = JSON.parse(n)),
                this.billItemEdit ||
                  "delete" === t ||
                  (void 0 === n.billItems && (n.billItems = []),
                  n.billItems.push(this.billItem)),
                (this.patientBillData.tax_total = ""),
                Object(r.b)("tax_calculated_encounter_data", n)
                  .then(function (n) {
                    void 0 !== n.data.status && !0 === n.data.status
                      ? ((e.patientBillData.taxes = n.data.data),
                        (e.patientBillData.tax_total = n.data.tax_total))
                      : ((e.patientBillData.taxes = []),
                        (e.patientBillData.tax_total = 0)),
                      "delete" !== t && e.afterTaxDetails();
                  })
                  .catch(function (n) {
                    "delete" !== t && e.afterTaxDetails(),
                      displayErrorMessage("Internal server error");
                  });
            } else this.afterTaxDetails();
          },
          updateBillTotal: function () {
            var t = 0;
            void 0 !== this.patientBillData.billItems &&
              this.patientBillData.billItems.length > 0 &&
              this.patientBillData.billItems.forEach(function (e) {
                t += parseFloat(e.price) * parseFloat(e.qty);
              }),
              this.patientBillData.tax_total &&
                (t += this.patientBillData.tax_total),
              (this.patientBillData.total_amount = t);
          },
          billItemReset: function () {
            this.billItem = this.defaultBillingItemData();
          },
          cancelBillItem: function () {
            (this.showAddForm = !1),
              (this.showEditForm = !1),
              (this.visible = !this.visible),
              (this.billItem = this.defaultBillingItemData());
          },
          paymentLink: function () {
            0 !== this.patientBillData.billItems.length ||
            "off" !== this.woocommerceActive
              ? Object(r.b)("send_payment_link", { id: this.encounterId })
                  .then(function (t) {
                    displayMessage(t.data.message);
                  })
                  .catch(function (t) {})
              : displayErrorMessage(
                  this.formTranslation.patient_bill.payment_or_bill_item_error
                );
          },
          onKeyPress: function (t, e) {
            var n = e.toString(),
              i = n.indexOf(".");
            -1 !== i && n.slice(i + 1).length >= 2 && t.preventDefault();
          },
        },
        watch: {
          "patientBillData.billItems": function () {
            this.updateBillTotal();
          },
          "patientBillData.total_amount": function () {
            this.patientBillData.actual_amount = parseFloat(
              (
                this.patientBillData.total_amount -
                this.patientBillData.discount
              ).toFixed(2)
            );
          },
          "billItem.price": function () {
            (this.billItem.price =
              "" == this.billItem.price ? 0 : this.billItem.price),
              (this.billItem.total = isNaN(
                parseFloat(this.billItem.price) * parseFloat(this.billItem.qty)
              )
                ? 0
                : parseFloat(this.billItem.price) *
                  parseFloat(this.billItem.qty));
          },
          "billItem.qty": function () {
            (this.billItem.price =
              "" == this.billItem.price ? 0 : this.billItem.price),
              (this.billItem.total = isNaN(
                parseFloat(this.billItem.price) * parseFloat(this.billItem.qty)
              )
                ? 0
                : parseFloat(this.billItem.price) *
                  parseFloat(this.billItem.qty));
          },
          "patientBillData.discount": function () {
            this.patientBillData.actual_amount = parseFloat(
              (
                this.patientBillData.total_amount -
                this.patientBillData.discount
              ).toFixed(2)
            );
          },
          encounterId: function (t) {
            this.patientBillData.encounter_id = t;
          },
        },
        computed: {
          userData: function () {
            return void 0 !== this.$store.state.userDataModule &&
              void 0 !== this.$store.state.userDataModule.user
              ? this.$store.state.userDataModule.user
              : [];
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(43);
      e.a = {
        components: { ModalPopup: r.a },
        data: function () {
          return {
            pageLoader: !0,
            receptionistsList: { data: [], column: [] },
            clinic: [],
            filterClinic: [],
            verifyModalData: {},
            verifyPopupModal: !1,
            verifyButtonLoading: !1,
            serverParams: {
              columnFilters: { service_type: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            var t = this;
            this.getReceptionistList(),
              (this.receptionistsList = this.defaultDoctorDataList()),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions()),
              setTimeout(function () {
                (t.clinic = t.clinics),
                  t.clinic.forEach(function (e) {
                    t.filterClinic.push({ value: e.id, text: e.label });
                  });
              }, 1e3);
          },
          defaultGlobalCheckboxApplyData: function () {
            return {
              action_perform: "delete",
              module: "receptionists",
              data: [],
            };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            return [
              {
                value: "active",
                label: this.formTranslation.service.dt_active,
              },
              {
                value: "inactive",
                label: this.formTranslation.service.dt_inactive,
              },
              {
                value: "resend_credential",
                label: this.formTranslation.receptionist.resend_credential,
              },
              {
                value: "delete",
                label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
              },
            ];
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete)
              : "resend_credential" ===
                this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_resend_credential)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.isLoading = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.isLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message),
                        t.getReceptionistList())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.isLoading = !0;
                });
          },
          getReceptionistList: function () {
            var t = this;
            Object(i.a)("receptionist_list", this.serverParams)
              .then(function (e) {
                (t.pageLoader = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.receptionistsList.data = e.data.data),
                      (t.totalRows = e.data.total_rows))
                    : ((t.receptionistsList.data = []), (t.totalRows = 0));
              })
              .catch(function (e) {
                (t.pageLoader = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          defaultDoctorDataList: function () {
            return {
              column: [
                {
                  field: "ID",
                  label: this.formTranslation.common.id,
                  width: "150px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "display_name",
                  label: this.formTranslation.receptionist.dt_lbl_name,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.receptionist.dt_plh_name_fltr,
                    filterValue: "",
                  },
                },
                {
                  field: "clinic_name",
                  label: this.formTranslation.receptionist.dt_lbl_clinic_name,
                  sortable: !1,
                  filterOptions: {
                    enabled:
                      this.userData.addOns.kiviPro &&
                      ["administrator"].includes(this.getUserRole()),
                    filterValue: "",
                    filterDropdownItems: this.filterClinic,
                  },
                },
                {
                  field: "user_email",
                  label: this.formTranslation.receptionist.dt_lbl_email,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.receptionist.dt_plh_email_fltr,
                    filterValue: "",
                  },
                },
                {
                  field: "mobile_number",
                  label: this.formTranslation.receptionist.dt_lbl_mobile,
                  width: "200px",
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.receptionist.dt_plh_mobilr_fltr,
                    filterValue: "",
                  },
                },
                {
                  field: "user_status",
                  label: this.formTranslation.receptionist.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.receptionist.dt_all,
                    filterValue: "",
                    filterDropdownItems: [
                      { value: "0", text: this.formTranslation.common.active },
                      {
                        value: "1",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                  },
                },
                {
                  field: "actions",
                  label: this.formTranslation.receptionist.dt_lbl_action,
                  sortable: !1,
                  html: !0,
                },
              ],
              data: [],
            };
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getReceptionistList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          deleteReceptionistData: function (e) {
            var n = this;
            if (void 0 !== this.receptionistsList.data[e - 1]) {
              var r = t("#user_delete_" + e);
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content:
                  this.formTranslation.receptionist
                    .press_yes_to_delete_receptionist,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      r.prop("disabled", !0),
                        t(r).find("i").removeClass("fa fa-trash"),
                        t(r).find("i").addClass("fa fa-sync fa-spin"),
                        Object(i.a)("receptionist_delete", {
                          id: n.receptionistsList.data[e - 1].ID,
                        })
                          .then(function (i) {
                            r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              void 0 !== i.data.status &&
                                !0 === i.data.status &&
                                (n.receptionistsList.data.splice(e - 1, 1),
                                displayMessage(i.data.message));
                          })
                          .catch(function (e) {
                            r.prop("disabled", !1),
                              t(r).find("i").removeClass("fa fa-sync fa-spin"),
                              t(r).find("i").addClass("fa fa-trash"),
                              displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                          });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            }
          },
          resendRequest: function (e) {
            var n = t("#resend_" + e).find("i");
            n.removeClass("fa fa-paper-plane "),
              n.addClass("fa fa-spinner fa-spin"),
              Object(i.b)("resend_credential", { id: e })
                .then(function (t) {
                  n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-paper-plane"),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {});
          },
          verifyUser: function (t) {
            var e = this;
            (this.verifyButtonLoading = !0),
              Object(i.b)("verify_user", { data: t })
                .then(function (t) {
                  (e.verifyButtonLoading = !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (displayMessage(t.data.message),
                        (e.verifyPopupModal = !1),
                        e.getReceptionistList())
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  (e.verifyButtonLoading = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
        },
        watch: {},
        computed: {
          receptionistListExport: function () {
            return "Receptionist List - " + moment().format("YYYY-MM-DD");
          },
          clinics: function () {
            return this.$store.state.clinic;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        data: function () {
          return {
            pageLoader: !0,
            customFieldList: { column: [], data: [] },
            customFieldRequest: {},
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            moduleType: [
              { value: "doctor_module", text: "Doctor module" },
              { value: "patient_module", text: "Patient module" },
              {
                value: "patient_encounter_module",
                text: "Patient encounter module",
              },
            ],
            request_status: "off",
            inputType: [
              { value: "text", text: "Text" },
              { value: "number", text: "Number" },
              { value: "textarea", text: "Textarea" },
              { value: "file_upload", text: "File Upload" },
              { value: "select", text: "Select" },
              { value: "multiselect", text: "Multi select" },
              { value: "radio", text: "Radio" },
              { value: "checkbox", text: "Checkbox" },
              { value: "calendar", text: "Calendar" },
            ],
          };
        },
        mounted: function () {
          ["patient", "receptionist", "doctor"].includes(this.getUserRole()) &&
            this.$router.push({ name: "403" }),
            (this.inputType = [
              {
                value: "text",
                text: this.formTranslation.common.lbl_input_type_text,
              },
              {
                value: "number",
                text: this.formTranslation.common.lbl_input_type_number,
              },
              {
                value: "textarea",
                text: this.formTranslation.common.lbl_input_type_textarea,
              },
              {
                value: "file_upload",
                text: this.formTranslation.common.lbl_input_type_file_upload,
              },
              {
                value: "select",
                text: this.formTranslation.common.lbl_input_type_select,
              },
              {
                value: "multiselect",
                text: this.formTranslation.common.lbl_input_type_multi_select,
              },
              {
                value: "radio",
                text: this.formTranslation.common.lbl_input_type_radio,
              },
              {
                value: "checkbox",
                text: this.formTranslation.common.lbl_input_type_checkbox,
              },
              {
                value: "calendar",
                text: this.formTranslation.common.lbl_input_type_calendar,
              },
            ]),
            (this.moduleType = [
              {
                value: "doctor_module",
                text: this.formTranslation.common.doctor_module,
              },
              {
                value: "patient_module",
                text: this.formTranslation.common.patient_module,
              },
              {
                value: "patient_encounter_module",
                text: this.formTranslation.common.patient_encounter_module,
              },
            ]),
            this.moduleType.unshift({
              value: "",
              text: this.formTranslation.common.all,
            }),
            !0 === this.userData.addOns.kiviPro &&
              this.moduleType.push({
                value: "appointment_module",
                text: this.formTranslation.common.appointment_module,
              }),
            this.init(),
            this.getModule();
        },
        methods: {
          init: function () {
            (this.customFieldList = this.defaultCustomFieldData()),
              this.getCustomFieldList();
          },
          getCustomFieldList: function () {
            var t = this;
            Object(i.a)("custom_field_list", this.serverParams)
              .then(function (e) {
                (t.pageLoader = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.customFieldList.data = e.data.data),
                      (t.totalRows = e.data.total))
                    : ((t.customFieldList.data = e.data.data),
                      (t.totalRows = 0));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getInputTypeText: function (t) {
            var e = this.inputType.find(function (e) {
              return e.value === t.type;
            });
            return e ? e.text : type;
          },
          getModuleTypeText: function (t) {
            var e = this.moduleType.find(function (e) {
              return e.value === t;
            });
            return e ? e.text : t;
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getCustomFieldList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          defaultCustomFieldData: function () {
            return {
              data: [],
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "fields",
                  label: this.formTranslation.custom_field.dt_lbl_field,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.custom_field.dt_plh_fltr_by_name,
                    filterValue: "",
                  },
                },
                {
                  field: "input_type",
                  label: this.formTranslation.custom_field.input_type,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.custom_field.dt_plh_fltr_by_type,
                    filterDropdownItems: this.inputType,
                    filterValue: "",
                  },
                },
                {
                  field: "module_type",
                  label: this.formTranslation.custom_field.dt_lbl_type,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.custom_field.dt_plh_fltr_by_type,
                    filterDropdownItems: this.moduleType,
                    filterValue: "",
                  },
                },
                {
                  field: "status",
                  label: this.formTranslation.service.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "", text: this.formTranslation.common.all },
                      { value: "1", text: this.formTranslation.common.active },
                      {
                        value: "0",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                  },
                  html: !0,
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.custom_field.dt_lbl_action,
                },
              ],
            };
          },
          deleteCustomFieldData: function (e) {
            var n = this;
            void 0 !== this.customFieldList.data[e - 1] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete_field,
                type: "red",
                buttons: {
                  ok: {
                    text: "Yes",
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.a)("custom_field_delete", {
                        id: n.customFieldList.data[e - 1].id,
                      })
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.customFieldList.data.splice(e - 1, 1),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: function () {},
                },
              });
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
        computed: {
          customFieldListExport: function () {
            return "Custom Field List - " + moment().format("YYYY-MM-DD");
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        filters: {
          fields: function (t) {
            var e = JSON.parse(t),
              n = e;
            return (
              "" !== e && null != e && void 0 !== e.label && (n = e.label), n
            );
          },
          input_type: function (t) {
            var e = JSON.parse(t),
              n = e;
            return (
              "" !== e && null != e && void 0 !== e.type && (n = e.type), n
            );
          },
          typeFiled: function (t) {
            var e = "";
            return (
              "" !== t &&
                null != t &&
                "" !== t &&
                (e = (e = t).replace(/_/gi, " ")),
              e
            );
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(8),
        o = n(24);
      e.a = {
        data: function () {
          return {
            visible: !1,
            cardTitle: "Add custom field",
            fieldTitle: "Add new field",
            moduleType: [
              { id: "doctor_module", label: "Doctor module" },
              { id: "patient_module", label: "Patient module" },
              {
                id: "patient_encounter_module",
                label: "Patient encounter module",
              },
            ],
            doctorType: [
              { id: "patient_module", label: "Patient module" },
              {
                id: "patient_encounter_module",
                label: "Patient encounter module",
              },
            ],
            customFieldData: {},
            fieldData: {},
            fieldButtonText: '<i class="fa fa-plus"></i> Add field',
            fieldSubmitted: !1,
            fieldEdit: !1,
            fieldOptions: [],
            loading: !1,
            submitted: !1,
            buttonText: '<i class="fa fa-save"></i> Save',
            inputType: [
              { id: "text", label: "Text" },
              { id: "number", label: "Number" },
              { id: "textarea", label: "Textarea" },
              { id: "file_upload", label: "File Upload" },
              { id: "select", label: "Select" },
              { id: "multiselect", label: "Multi select" },
              { id: "radio", label: "Radio" },
              { id: "checkbox", label: "Checkbox" },
              { id: "calendar", label: "Calendar" },
            ],
            fieldEditId: "",
            uniqueFieldName: !1,
            doctors: [],
            doctorModuleImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/doctorModule.png",
            encounterModuleImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/encounterModule.png",
            patientModuleImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/patientModule.png",
            showDoctorModule: !0,
            showEncounterModule: !1,
            showPatientModule: !1,
            showAppointmentModule: !1,
            multiple: !0,
            taggable: !1,
            doctorMultiselectLoader: !0,
            file_upload_type_options: [],
            file_upload_size_options: [],
            file_upload_max_size_msg: "",
            file_upload_type_status: !0,
          };
        },
        validations: {
          customFieldData: { module_type: { required: i.required } },
          fieldData: {
            label: { required: i.required },
            type: { required: i.required },
            status: { required: i.required },
            isRequired: {},
          },
        },
        mounted: function () {
          (this.cardTitle = this.formTranslation.custom_field.add_custom_field),
            (this.customFieldData = this.defaultCustomFieldData()),
            (this.fieldData = this.defaultFieldData()),
            this.init(),
            (this.inputType = [
              {
                id: "text",
                label: this.formTranslation.common.lbl_input_type_text,
              },
              {
                id: "number",
                label: this.formTranslation.common.lbl_input_type_number,
              },
              {
                id: "textarea",
                label: this.formTranslation.common.lbl_input_type_textarea,
              },
              {
                id: "file_upload",
                label: this.formTranslation.common.lbl_input_type_file_upload,
              },
              {
                id: "select",
                label: this.formTranslation.common.lbl_input_type_select,
              },
              {
                id: "multiselect",
                label: this.formTranslation.common.lbl_input_type_multi_select,
              },
              {
                id: "radio",
                label: this.formTranslation.common.lbl_input_type_radio,
              },
              {
                id: "checkbox",
                label: this.formTranslation.common.lbl_input_type_checkbox,
              },
              {
                id: "calendar",
                label: this.formTranslation.common.lbl_input_type_calendar,
              },
            ]);
          var t = [
            {
              id: "patient_module",
              label: this.formTranslation.common.patient_module,
            },
            {
              id: "patient_encounter_module",
              label: this.formTranslation.common.patient_encounter_module,
            },
          ];
          !0 === this.userData.addOns.kiviPro &&
            t.push({
              id: "appointment_module",
              label: this.formTranslation.common.appointment_module,
            }),
            "doctor" !== this.getUserRole()
              ? (this.moduleType = [
                  {
                    id: "doctor_module",
                    label: this.formTranslation.common.doctor_module,
                  },
                ].concat(t))
              : (this.doctorType = [].concat(t));
        },
        methods: {
          init: function () {
            var t = this;
            this.getDoctorsData(),
              this.fileUploadData(),
              void 0 !== this.$route.params.id &&
                ((this.cardTitle =
                  this.formTranslation.custom_field.edit_custom_field),
                (this.buttonText =
                  '<i class="fa fa-save"></i> ' +
                  this.formTranslation.common.save),
                (this.multiple = !1),
                Object(r.a)("custom_field_edit", { id: this.$route.params.id })
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.customFieldData = e.data.data),
                      (t.fieldData = e.data.data.fields));
                  })
                  .catch(function (e) {
                    displayErrorMessage(
                      t.formTranslation.custom_field.record_not_found
                    );
                  }));
          },
          defaultCustomFieldData: function () {
            return { module_type: "", module_id: "", fields: {} };
          },
          defaultFieldData: function () {
            return {
              id: "",
              label: "",
              type: "",
              name: "",
              options: [],
              isRequired: 0,
              priority: 0,
              placeholder: "",
              status: { id: 1, label: this.formTranslation.common.active },
            };
          },
          onChangeModule: function (t) {
            "doctor_module" == t.id
              ? ((this.multiple = !0),
                (this.taggable = !1),
                (this.showEncounterModule = !1),
                (this.showPatientModule = !1),
                (this.showAppointmentModule = !1),
                (this.showDoctorModule = !0))
              : "patient_module" == t.id
              ? ((this.multiple = !0),
                (this.taggable = !1),
                (this.showDoctorModule = !1),
                (this.showEncounterModule = !1),
                (this.showAppointmentModule = !1),
                (this.showPatientModule = !0))
              : "appointment_module" == t.id
              ? ((this.showDoctorModule = !1),
                (this.showPatientModule = !1),
                (this.showEncounterModule = !1),
                (this.showAppointmentModule = !0))
              : ((this.showDoctorModule = !1),
                (this.showPatientModule = !1),
                (this.showAppointmentModule = !1),
                (this.showEncounterModule = !0));
          },
          addOption: function (t) {
            var e = { id: t, text: t };
            this.fieldOptions.push(e), this.fieldData.options.push(e);
          },
          handleSubmit: function () {
            var t = this;
            if (
              ((this.loading = !0),
              (this.submitted = !0),
              this.addFieldData(),
              this.$v.$touch(),
              !this.$v.fieldData.$invalid)
            )
              return this.fieldData.type &&
                "file_upload" === this.fieldData.type.id &&
                (!this.fieldData.file_upload_type ||
                  this.fieldData.file_upload_type.length < 1)
                ? ((this.file_upload_type_status = !1),
                  void (this.loading = !1))
                : void (this.$v.customFieldData.$invalid
                    ? (this.loading = !1)
                    : Object(o.n)("customFieldDataForm") &&
                      Object(r.b)("custom_field_save", this.customFieldData)
                        .then(function (e) {
                          (t.loading = !1),
                            void 0 !== e.data.status && !0 === e.data.status
                              ? (displayMessage(e.data.message),
                                t.$router.go(-1))
                              : displayErrorMessage(e.data.message);
                        })
                        .catch(function (e) {
                          (t.loading = !1),
                            displayErrorMessage(
                              t.formTranslation.common.internal_server_error
                            );
                        }));
            this.loading = !1;
          },
          addFieldData: function () {
            this.customFieldData.fields = [this.fieldData];
          },
          getDoctorsData: function () {
            var t = this;
            (this.doctorMultiselectLoader = !0),
              Object(r.a)("get_static_data", { data_type: "doctors" })
                .then(function (e) {
                  (t.doctorMultiselectLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.doctors = e.data.data);
                })
                .catch(function (e) {
                  (t.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          deleteFieldData: function (e) {
            var n = this;
            void 0 !== e
              ? t.confirm({
                  title: this.formTranslation.custom_field.are_you_sure,
                  content:
                    this.formTranslation.custom_field.press_yes_to_delete,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        void 0 !== n.customFieldData.fields[e - 1] &&
                          (n.customFieldData.fields.splice(e - 1, 1),
                          (n.fieldData = n.defaultFieldData()));
                      },
                    },
                    cancel: { text: this.formTranslation.common.cancel },
                  },
                })
              : displayErrorMessage(
                  this.formTranslation.custom_field
                    .doctor_profile_data_not_found
                );
          },
          editFieldData: function (t) {
            (this.visible = !this.visible),
              (this.fieldTitle = this.formTranslation.custom_field.edit_field),
              (this.fieldEdit = !0),
              (this.fieldButtonText =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.custom_field.save_field),
              (this.fieldEditId = t - 1),
              (this.fieldData = this.customFieldData.fields[t - 1]);
          },
          optionToString: function (t) {
            var e = [];
            return 0 === t.length
              ? " - "
              : (t.map(function (t) {
                  e.push(t.id);
                }),
                e.join(", "));
          },
          fileUploadData: function () {
            var t = this;
            Object(r.a)("custom_field_file_upload_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.file_upload_size_options = e.data.data.file_size_options),
                  (t.file_upload_type_options = e.data.data.file_type_options),
                  (t.file_upload_max_size_msg = e.data.data.allowed_size));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
        },
        computed: {
          selectDisabled: function () {
            if (void 0 !== this.fieldData.type)
              return (
                "text" === this.fieldData.type.id ||
                "number" === this.fieldData.type.id ||
                "textarea" === this.fieldData.type.id
              );
          },
          isDoctorSelectionEnabled: function () {
            return !(
              "doctor" !== this.getUserRole() &&
              void 0 !== this.customFieldData.module_type &&
              null !== this.customFieldData.module_type &&
              ("doctor_module" === this.customFieldData.module_type.id ||
                "patient_module" === this.customFieldData.module_type.id ||
                "patient_encounter_module" ===
                  this.customFieldData.module_type.id)
            );
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          selected_field_type_file_upload: function () {
            return (
              this.fieldData.type && "file_upload" === this.fieldData.type.id
            );
          },
        },
        watch: {
          "customFieldData.module_type": function (t) {
            "appointment_module" !== t.id
              ? this.inputType.find(function (t) {
                  return "file_upload" === t.id;
                }) ||
                this.inputType.push({
                  label: this.formTranslation.common.lbl_input_type_file_upload,
                  id: "file_upload",
                })
              : "file_upload" === this.fieldData.type &&
                (this.fieldData.type = "");
          },
          "fieldData.file_upload_type": function (t) {
            !this.file_upload_type_status &&
              this.fieldData.file_upload_type &&
              this.fieldData.file_upload_type.length > 0 &&
              (this.file_upload_type_status = !0);
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(342);
      e.a = {
        data: function () {
          return {
            holidayCollapse: !1,
            visible: !1,
            showEditForm: !1,
            showAddForm: !1,
            holidayId: -1,
            editHolidayDetail: [],
            pageLoader: !0,
            clinicScheduleList: { column: [], data: [] },
            serverParams: {
              columnFilters: { service_type: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            request_status: "off",
          };
        },
        components: { Create: r.a },
        mounted: function () {
          ["patient"].includes(this.getUserRole()) &&
            this.$router.push({ name: "403" }),
            this.init(),
            this.getModule();
        },
        methods: {
          init: function () {
            (this.holidayCollapse = !1),
              (this.clinicScheduleList = this.defaultClinicScheduleList()),
              this.getClinicScheduleList();
          },
          defaultClinicScheduleList: function () {
            return {
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "module_type",
                  width: "150px",
                  label: this.formTranslation.clinic_schedule.dt_lbl_schedul_of,
                  filterOptions: {
                    enabled: !("doctor" === this.getUserRole()),
                    placeholder:
                      this.formTranslation.clinic_schedule
                        .dt_plh_fltr_by_schedule,
                    filterValue: "",
                    filterDropdownItems: [
                      { value: "clinic", text: "Clinic" },
                      { value: "doctor", text: "Doctor" },
                    ],
                  },
                },
                {
                  field: "name",
                  width: "200px",
                  label: this.formTranslation.clinic_schedule.dt_lbl_name,
                  sortable: !1,
                  filterOptions: {
                    enabled: !("doctor" === this.getUserRole()),
                    placeholder:
                      this.formTranslation.clinic_schedule.dt_plh_fltr_by_doc,
                    filterValue: "",
                  },
                },
                {
                  field: "start_date",
                  width: "170px",
                  label: this.formTranslation.clinic_schedule.dt_lbl_from_date,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.clinic_schedule.dt_plh_fltr_by_date,
                    filterValue: "",
                  },
                },
                {
                  field: "end_date",
                  width: "170px",
                  label: this.formTranslation.clinic_schedule.dt_lbl_to_date,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.clinic_schedule
                        .dt_plh_fltr_by_end_date,
                    filterValue: "",
                  },
                },
                {
                  field: "actions",
                  width: "100px",
                  sortable: !1,
                  label: this.formTranslation.clinic_schedule.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          getClinicScheduleList: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.a)("clinic_schedule_list", this.serverParams)
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.clinicScheduleList.data = e.data.data),
                        (t.totalRows = e.data.total_rows))
                      : ((t.clinicScheduleList.data = []), (t.totalRows = 0));
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.clinic_schedule.dt_srvr_err
                  );
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getClinicScheduleList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = this;
            setTimeout(function () {
              var n = !0,
                i = !0;
              Object.values(t.columnFilters).map(function (t, e, i) {
                t && (n = !1);
              }),
                Object.values(e.oldServerParams.columnFilters).map(function (
                  t,
                  e,
                  n
                ) {
                  t && (i = !1);
                }),
                (n && i) ||
                  ((e.oldServerParams.columnFilters = Object.assign(
                    {},
                    t.columnFilters
                  )),
                  e.updateParams({
                    columnFilters: t.columnFilters,
                    perPage: e.serverParams.perPage,
                    page: 1,
                  }));
            }, 300);
          }, 300),
          deleteClinicSchedule: function (e) {
            var n = this;
            void 0 !== this.clinicScheduleList.data[e - 1] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.clinic_schedule.dt_press_dlt,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.a)("clinic_schedule_delete", {
                        id: n.clinicScheduleList.data[e - 1].id,
                      })
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.clinicScheduleList.data.splice(e - 1, 1),
                            n.getClinicScheduleList(),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          displayErrorMessage(
                            n.formTranslation.clinic_schedule.dt_srvr_err
                          );
                        });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          editClinicSchedule: function (t, e) {
            (this.editHolidayDetail = t),
              (this.holidayId = e),
              (this.showAddForm = !1),
              (this.showEditForm = !0),
              (this.visible = !1),
              window.scroll({ top: 0, behavior: "smooth" });
          },
          handleScheduleForm: function () {
            this.showAddForm
              ? this.closeForm()
              : ((this.visible = !0),
                (this.showAddForm = !0),
                (this.showEditForm = !1));
          },
          closeForm: function () {
            (this.holidayId = -1),
              (this.visible = !1),
              (this.showAddForm = !1),
              (this.showEditForm = !1);
          },
          isCollapse: function (t) {
            this.holidayCollapse = t;
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
        computed: {
          holidayListExport: function () {
            return "Holiday List - " + moment().format("YYYY-MM-DD");
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9);
      n(24),
        (e.a = {
          data: function () {
            return {
              minDate: new Date(),
              isDoctorModule: !0,
              isClinicModule: !1,
              scheduleDate: { start: new Date(), end: new Date() },
              defaultClinic: {},
              submitted: !1,
              loading: !1,
              selectModuleID: {},
              selectModuleType: { id: "doctor", label: "Doctor" },
              clinicScheduleRequest: {},
              clinicScheduleTitle: "Create holiday",
              clinicScheduleButtonText: '<i class="fa fa-save"></i> Save',
              clinicModule: [
                { id: "clinic", label: "Clinic" },
                { id: "doctor", label: "Doctor" },
              ],
              doctors: [],
              clinics: [],
              clinicMultiselectLoader: !0,
              doctorMultiselectLoader: !0,
            };
          },
          props: ["holidayId", "holidayDetail"],
          validations: {
            clinicScheduleRequest: {
              module_type: { required: r.required },
              scheduleDate: {
                start: { required: r.required },
                end: { required: r.required },
              },
              module_id: { id: { required: r.required } },
            },
          },
          mounted: function () {
            this.init();
          },
          methods: {
            init: function () {
              var t = this;
              setTimeout(function () {
                (t.clinicScheduleRequest = t.defaultClinicScheduleRequest()),
                  (t.clinicRequest = t.defaultClinicRequest()),
                  t.getDoctorsData();
              }, 1e3);
            },
            handleSubmit: function () {
              var e = this;
              if (
                ((this.submitted = !0),
                this.$v.$touch(),
                this.$v.clinicScheduleRequest.$invalid)
              )
                this.loading = !1;
              else {
                var n = Object.assign({}, this.clinicScheduleRequest);
                (n.scheduleDate.start = moment(
                  this.clinicScheduleRequest.scheduleDate.start
                ).format("YYYY-MM-DD")),
                  (n.scheduleDate.end = moment(
                    this.clinicScheduleRequest.scheduleDate.end
                  ).format("YYYY-MM-DD")),
                  t.confirm({
                    title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                    content: this.formTranslation.common.cancel_date,
                    type: "red",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-danger",
                        keys: ["enter"],
                        action: function () {
                          (e.submitted = !0),
                            (e.loading = !0),
                            Object(i.b)("clinic_schedule_save", n)
                              .then(function (t) {
                                void 0 !== t.data.status && !0 === t.data.status
                                  ? (displayMessage(t.data.message),
                                    e.isCollapse(!1),
                                    e.getHoliday())
                                  : displayErrorMessage(t.data.message),
                                  (e.loading = !1),
                                  (e.submitted = !1);
                              })
                              .catch(function (t) {
                                (e.submitted = !1),
                                  (e.loading = !1),
                                  displayErrorMessage(
                                    e.formTranslation.common
                                      .internal_server_error
                                  );
                              });
                        },
                      },
                      cancel: { text: this.formTranslation.common.cancel },
                    },
                  });
              }
            },
            changeType: function (t, e) {
              if (
                ((this.clinicScheduleRequest.module_id = ""),
                void 0 !== this.clinicScheduleRequest.module_type &&
                  "doctor" === this.clinicScheduleRequest.module_type.id)
              )
                (this.isDoctorModule = !0), (this.isClinicModule = !1);
              else if (
                void 0 !== this.clinicScheduleRequest.module_type &&
                "clinic" === this.clinicScheduleRequest.module_type.id
              )
                (this.isClinicModule = !0), (this.isDoctorModule = !1);
              else {
                (this.isDoctorModule = !1), (this.isClinicModule = !1);
                var n = { module_id: { id: this.defaultClinicData.id } };
                this.clinicScheduleRequest = n;
              }
            },
            defaultClinicScheduleRequest: function () {
              var t = { id: "", label: "" };
              if ("doctor" === this.getUserRole()) {
                var e = this.loginUserData;
                t = { id: e.ID, label: e.display_name };
              }
              return {
                id: "",
                module_type: { id: "doctor", label: "Doctor" },
                scheduleDate: { start: new Date(), end: new Date() },
                module_id: t,
                description: "",
                status: 1,
              };
            },
            getDoctorsData: function () {
              var t = this;
              (this.doctorMultiselectLoader = !0),
                Object(i.a)("get_static_data", {
                  data_type: "clinic_doctors",
                  clinic_id: this.defaultClinicData.id,
                })
                  .then(function (e) {
                    (t.doctorMultiselectLoader = !1),
                      void 0 !== e.data.status &&
                        !0 === e.data.status &&
                        (t.doctors = e.data.data);
                  })
                  .catch(function (e) {
                    (t.doctorMultiselectLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            },
            getClinicData: function () {
              var t = this;
              (this.clinicMultiselectLoader = !0),
                Object(i.a)("get_static_data", { data_type: "clinics" })
                  .then(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      void 0 !== e.data.status &&
                        !0 === e.data.status &&
                        ((t.clinics = e.data.data),
                        t.clinics.length > 0 &&
                          ((t.clinicScheduleRequest.module_id = []),
                          (t.clinicScheduleRequest.module_id = Object.assign(
                            {},
                            t.clinics[0]
                          ))));
                  })
                  .catch(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            },
            defaultClinicRequest: function () {
              return { searchKey: "", searchValue: "", offset: 0, limit: 10 };
            },
            editScheduleData: function (t) {
              var e = this;
              null != t && "" !== t
                ? ((this.clinicScheduleRequest.scheduleDate = ""),
                  Object(i.a)("clinic_schedule_edit", { id: t })
                    .then(function (t) {
                      void 0 !== t.data.status && !0 === t.data.status
                        ? ((e.clinicScheduleRequest = t.data.data),
                          "clinic" === e.clinicScheduleRequest.module_type.id &&
                            (e.isDoctorModule = !1),
                          (e.clinicScheduleRequest.scheduleDate = {
                            start: new Date(
                              e.clinicScheduleRequest.scheduleDate.start +
                                " 00:00"
                            ),
                            end: new Date(
                              e.clinicScheduleRequest.scheduleDate.end +
                                " 00:00"
                            ),
                          }))
                        : (displayErrorMessage(t.data.message),
                          e.$router.push({ name: "clinic-schedule" }));
                    })
                    .catch(function (t) {
                      displayErrorMessage(
                        e.formTranslation.common.internal_server_error
                      );
                    }))
                : displayErrorMessage(
                    this.formTranslation.clinic_schedule.schedule_not_found
                  );
            },
            getHoliday: function () {
              this.$emit("getClinicScheduleList");
            },
            closeForm: function () {
              this.$emit("closeForm"),
                (this.clinicScheduleRequest =
                  this.defaultClinicScheduleRequest());
            },
            isCollapse: function (t) {
              this.$emit("closeForm", t);
            },
            handleModuleChange: function (t) {
              void 0 !== t.id && "clinic" === t.id && this.getClinicData();
            },
          },
          computed: {
            defaultClinicData: function () {
              return this.$store.state.userDataModule.clinic;
            },
            loginUserData: function () {
              return this.$store.state.userDataModule.user;
            },
            userData: function () {
              return this.$store.state.userDataModule.user;
            },
          },
          watch: {
            holidayId: function (t, e) {
              void 0 !== t && -1 !== t
                ? ((this.clinicScheduleTitle =
                    this.formTranslation.clinic_schedule.editholiday),
                  (this.clinicScheduleButtonText =
                    '<i class="fa fa-save"></i> ' +
                    this.formTranslation.common.save),
                  this.editScheduleData(t))
                : (this.clinicScheduleRequest =
                    this.defaultClinicScheduleRequest());
            },
            holidayDetail: function () {
              (this.clinicScheduleRequest.module_type =
                this.holidayDetail.module_type),
                void 0 !== this.holidayDetail.module_type &&
                "doctor" === this.holidayDetail.module_type
                  ? ((this.isDoctorModule = !0), (this.isClinicModule = !1))
                  : void 0 !== this.holidayDetail.module_type &&
                    "clinic" === this.holidayDetail.module_type
                  ? ((this.isClinicModule = !0), (this.isDoctorModule = !1))
                  : ((this.isDoctorModule = !1), (this.isClinicModule = !1));
            },
          },
        });
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9),
        o = n(24);
      e.a = {
        data: function () {
          return {
            status: "off",
            formLoader: !0,
            request_status: "off",
            paypalConfigData: {
              enablePaypal: !1,
              mode: 0,
              client_id: "",
              client_secret: "",
              currency: [{ id: "USD", label: "USD" }],
            },
            razorPayConfigData: {},
            stripePayConfigData: {},
            local_payment_status: "on",
            submitted: !1,
            loading: !1,
            razorpaySubmitted: !1,
            razorpayLoading: !1,
            stripepayLoading: !1,
            stripepaySubmitted: !1,
            stripeCurrencyOptions: [],
            mode_options: [
              { id: 1, label: "Live" },
              { id: 0, label: "Sandbox" },
            ],
            currency_list: [
              { id: "AUD", label: "AUD" },
              { id: "BRL", label: "BRL" },
              { id: "CAD", label: "CAD" },
              { id: "CNY", label: "CNY" },
              { id: "CZK", label: "CZK" },
              { id: "DKK", label: "DKK" },
              { id: "EUR", label: "EUR" },
              { id: "HKD", label: "HKD" },
              { id: "HUF", label: "HUF" },
              { id: "ILS", label: "ILS" },
              { id: "JPY", label: "JPY" },
              { id: "MYR", label: "MYR" },
              { id: "MXN", label: "MXN" },
              { id: "TWD", label: "TWD" },
              { id: "NZD", label: "NZD" },
              { id: "NOK", label: "NOK" },
              { id: "PHP", label: "PHP" },
              { id: "PLN", label: "PLN" },
              { id: "GBP", label: "GBP" },
              { id: "RUB", label: "RUB" },
              { id: "SGD", label: "SGD" },
              { id: "SEK", label: "SEK" },
              { id: "CHF", label: "CHF" },
              { id: "THB", label: "THB" },
              { id: "USD", label: "USD" },
            ],
            razorpay_currency_list: [],
          };
        },
        mounted: function () {
          if (
            (this.getRazorpayCurrencyList(),
            ["administrator"].includes(this.getUserRole()) ||
              this.$router.push({ name: "403" }),
            this.userData.addOns.stripepay)
          ) {
            var t = {
              USD: "United States Dollar",
              AED: "United Arab Emirates Dirham",
              AFN: "Afghan Afghani",
              ALL: "Albanian Lek",
              AMD: "Armenian Dram",
              ANG: "Netherlands Antillean Guilder",
              AOA: "Angolan Kwanza",
              ARS: "Argentine Peso",
              AUD: "Australian Dollar",
              AWG: "Aruban Florin",
              AZN: "Azerbaijani Manat",
              BAM: "Bosnia and Herzegovina Convertible Mark",
              BBD: "Barbadian Dollar",
              BDT: "Bangladeshi Taka",
              BGN: "Bulgarian Lev",
              BIF: "Burundian Franc",
              BMD: "Bermudian Dollar",
              BND: "Brunei Dollar",
              BOB: "Bolivian Boliviano",
              BRL: "Brazilian Real",
              BSD: "Bahamian Dollar",
              BWP: "Botswana Pula",
              BYN: "Belarusian Ruble",
              BZD: "Belize Dollar",
              CAD: "Canadian Dollar",
              CDF: "Congolese Franc",
              CHF: "Swiss Franc",
              CLP: "Chilean Peso",
              CNY: "Chinese Yuan",
              COP: "Colombian Peso",
              CRC: "Costa Rican Colón",
              CVE: "Cape Verdean Escudo",
              CZK: "Czech Republic Koruna",
              DJF: "Djiboutian Franc",
              DKK: "Danish Krone",
              DOP: "Dominican Peso",
              DZD: "Algerian Dinar",
              EGP: "Egyptian Pound",
              ETB: "Ethiopian Birr",
              EUR: "Euro",
              FJD: "Fijian Dollar",
              FKP: "Falkland Islands Pound",
              GBP: "British Pound Sterling",
              GEL: "Georgian Lari",
              GIP: "Gibraltar Pound",
              GMD: "Gambian Dalasi",
              GNF: "Guinean Franc",
              GTQ: "Guatemalan Quetzal",
              GYD: "Guyanaese Dollar",
              HKD: "Hong Kong Dollar",
              HNL: "Honduran Lempira",
              HTG: "Haitian Gourde",
              HUF: "Hungarian Forint",
              IDR: "Indonesian Rupiah",
              ILS: "Israeli New Shekel",
              INR: "Indian Rupee",
              ISK: "Icelandic Króna",
              JMD: "Jamaican Dollar",
              JPY: "Japanese Yen",
              KES: "Kenyan Shilling",
              KGS: "Kyrgystani Som",
              KHR: "Cambodian Riel",
              KMF: "Comorian Franc",
              KRW: "South Korean Won",
              KYD: "Cayman Islands Dollar",
              KZT: "Kazakhstani Tenge",
              LAK: "Laotian Kip",
              LBP: "Lebanese Pound",
              LKR: "Sri Lankan Rupee",
              LRD: "Liberian Dollar",
              LSL: "Lesotho Loti",
              MAD: "Moroccan Dirham",
              MDL: "Moldovan Leu",
              MGA: "Malagasy Ariary",
              MKD: "Macedonian Denar",
              MMK: "Myanmar Kyat",
              MNT: "Mongolian Tugrik",
              MOP: "Macanese Pataca",
              MUR: "Mauritian Rupee",
              MVR: "Maldivian Rufiyaa",
              MWK: "Malawian Kwacha",
              MXN: "Mexican Peso",
              MYR: "Malaysian Ringgit",
              MZN: "Mozambican Metical",
              NAD: "Namibian Dollar",
              NGN: "Nigerian Naira",
              NIO: "Nicaraguan Córdoba",
              NOK: "Norwegian Krone",
              NPR: "Nepalese Rupee",
              NZD: "New Zealand Dollar",
              PAB: "Panamanian Balboa",
              PEN: "Peruvian Nuevo Sol",
              PGK: "Papua New Guinean Kina",
              PHP: "Philippine Peso",
              PKR: "Pakistani Rupee",
              PLN: "Polish Złoty",
              PYG: "Paraguayan Guarani",
              QAR: "Qatari Rial",
              RON: "Romanian Leu",
              RSD: "Serbian Dinar",
              RUB: "Russian Ruble",
              RWF: "Rwandan Franc",
              SAR: "Saudi Riyal",
              SBD: "Solomon Islands Dollar",
              SCR: "Seychellois Rupee",
              SEK: "Swedish Krona",
              SGD: "Singapore Dollar",
              SHP: "Saint Helena Pound",
              SLE: "Sierra Leonean Leone",
              SOS: "Somali Shilling",
              SRD: "Surinamese Dollar",
              STD: "São Tomé and Príncipe Dobra",
              SZL: "Swazi Lilangeni",
              THB: "Thai Baht",
              TJS: "Tajikistani Somoni",
              TOP: "Tongan Paʻanga",
              TRY: "Turkish Lira",
              TTD: "Trinidad and Tobago Dollar",
              TWD: "New Taiwan Dollar",
              TZS: "Tanzanian Shilling",
              UAH: "Ukrainian Hryvnia",
              UGX: "Ugandan Shilling",
              UYU: "Uruguayan Peso",
              UZS: "Uzbekistan Som",
              VND: "Vietnamese Đồng",
              VUV: "Vanuatu Vatu",
              WST: "Samoan Tala",
              XAF: "Central African CFA Franc",
              XCD: "East Caribbean Dollar",
              XOF: "West African CFA Franc",
              XPF: "CFP Franc",
              YER: "Yemeni Rial",
              ZAR: "South African Rand",
              ZMW: "Zambian Kwacha",
            };
            this.stripeCurrencyOptions = Object.keys(t).map(function (e) {
              return { id: e, label: t[e] || e };
            });
          }
          (this.paypalConfigData = this.defaultPaypalData()),
            (this.razorPayConfigData = this.defaultRazorpayData()),
            (this.stripePayConfigData = this.defaultStripePayData()),
            this.getPaymentStatusAll(),
            (this.kivicareProAndAddonIcon = this.kivicareProFeatureIcon("pro")),
            this.getModule();
        },
        validations: {
          paypalConfigData: {
            mode: { required: r.required },
            client_id: { required: r.required },
            client_secret: { required: r.required },
            currency: { required: r.required },
          },
          razorPayConfigData: {
            api_key: { required: r.required },
            secret_key: { required: r.required },
            currency: { required: r.required },
          },
          stripePayConfigData: {
            api_key: { required: r.required },
            publishable_key: { required: r.required },
            enable: { required: r.required },
            mode: { required: r.required },
            currency: { required: r.required },
          },
        },
        methods: {
          getPaymentStatusAll: function (t) {
            var e = this;
            (this.formLoader = !0),
              Object(i.a)("get_payment_status_all", { status: "" })
                .then(function (t) {
                  (e.status = t.data.data),
                    "off" == t.data.paypal
                      ? (e.paypalConfigData.enablePaypal = !1)
                      : (e.paypalConfigData = t.data.paypal),
                    (e.local_payment_status = t.data.local_payment),
                    void 0 !== t.data.razorpay &&
                      void 0 !== t.data.razorpay.enable &&
                      ((e.razorPayConfigData = t.data.razorpay),
                      (e.razorPayConfigData.enable = [
                        "on",
                        !0,
                        "true",
                      ].includes(e.razorPayConfigData.enable))),
                    void 0 !== t.data.stripepay &&
                      void 0 !== t.data.stripepay.enable &&
                      ((e.stripePayConfigData = t.data.stripepay),
                      (e.stripePayConfigData.enable = [
                        "on",
                        !0,
                        "true",
                      ].includes(e.stripePayConfigData.enable))),
                    (e.formLoader = !1);
                })
                .catch(function (t) {
                  e.formLoader = !1;
                });
          },
          onPaymentStatusChange: function () {
            var t = this;
            Object(i.a)("change_woocommerce_payment_status", {
              status: this.status,
            })
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? (displayMessage(e.data.message),
                    setTimeout(function () {
                      window.location.reload();
                    }, 1e3))
                  : ((t.status = "on" === t.status ? "off" : "on"),
                    displayErrorMessage(e.data.message));
              })
              .catch(function (e) {
                t.status = "on" === t.status ? "off" : "on";
              });
          },
          localPaymentStatusChange: function () {
            var t = this;
            Object(i.a)("change_local_payment_status", {
              status: this.local_payment_status,
            })
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? (displayMessage(e.data.message),
                    setTimeout(function () {
                      window.location.reload();
                    }, 1e3))
                  : ((t.local_payment_status =
                      "on" === t.local_payment_status ? "off" : "on"),
                    displayErrorMessage(e.data.message));
              })
              .catch(function (e) {
                t.status = "on" === t.local_payment_status ? "off" : "on";
              });
          },
          defaultPaypalData: function () {
            return {
              mode: "",
              client_id: "",
              client_secret: "",
              enablePaypal: !1,
            };
          },
          defaultStripePayData: function () {
            return {
              api_key: "",
              publishable_key: "",
              enable: !1,
              mode: "sandbox",
              currency: { id: "INR", value: "Indian Rupees" },
            };
          },
          defaultRazorpayData: function () {
            return {
              api_key: "",
              secret_key: "",
              enable: !1,
              currency: { id: "INR", value: "Indian Rupees" },
            };
          },
          handleRazorpaySubmit: function () {
            var e = this;
            if (
              ((this.razorpayLoading = !0),
              (this.razorpaySubmitted = !0),
              this.$v.$touch(),
              this.$v.razorPayConfigData.$invalid)
            )
              this.razorpayLoading = !1;
            else {
              var n = t("#btn-razorpay-submit").find("i");
              n.removeClass("fa fa-save "),
                n.addClass("fa fa-spinner fa-spin"),
                (this.razorpaySubmitted = !0),
                Object(o.n)("razorpayDataForm") &&
                  Object(i.b)("razorpay_config_save", {
                    data: this.razorPayConfigData,
                  })
                    .then(function (t) {
                      (e.razorpayLoading = !1),
                        n.removeClass("fa fa-spinner fa-spin"),
                        n.addClass("fa fa-save"),
                        void 0 !== t.data.status && !0 === t.data.status
                          ? (displayMessage(t.data.message),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3))
                          : ((e.razorPayConfigData.enable =
                              !0 !== e.razorPayConfigData.enable),
                            displayErrorMessage(t.data.message));
                    })
                    .catch(function (t) {
                      (e.razorpayLoading = !1),
                        displayErrorMessage(
                          e.formTranslation.common.internal_server_error
                        );
                    });
            }
          },
          handleStripepaySubmit: function () {
            var e = this;
            if (
              ((this.stripepayLoading = !0),
              (this.stripepaySubmitted = !0),
              this.$v.$touch(),
              this.$v.stripePayConfigData.$invalid)
            )
              this.stripepayLoading = !1;
            else {
              var n = t("#btn-stripepay-submit").find("i");
              n.removeClass("fa fa-save "),
                n.addClass("fa fa-spinner fa-spin"),
                (this.stripepaySubmitted = !0),
                Object(o.n)("stripepayDataForm") &&
                  Object(i.b)("stripepay_config_save", {
                    data: this.stripePayConfigData,
                  })
                    .then(function (t) {
                      (e.stripepayLoading = !1),
                        n.removeClass("fa fa-spinner fa-spin"),
                        n.addClass("fa fa-save"),
                        void 0 !== t.data.status && !0 === t.data.status
                          ? (displayMessage(t.data.message),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3))
                          : ((e.stripePayConfigData.enable = ![
                              "on",
                              !0,
                              "true",
                            ].includes(e.stripePayConfigData.enable)),
                            displayErrorMessage(t.data.message));
                    })
                    .catch(function (t) {
                      (e.stripepayLoading = !1),
                        displayErrorMessage(
                          e.formTranslation.common.internal_server_error
                        );
                    });
            }
          },
          handleSubmit: function () {
            var e = this;
            if (
              ((this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.paypalConfigData.$invalid)
            )
              this.loading = !1;
            else {
              var n = t("#btn-paypal-submit").find("i");
              n.removeClass("fa fa-save "),
                n.addClass("fa fa-spinner fa-spin"),
                (this.isSubmitedPaypal = !0),
                Object(o.n)("paypalDataForm") &&
                  Object(i.a)("paypal_config_save", {
                    data: this.paypalConfigData,
                  })
                    .then(function (t) {
                      (e.isSubmitedPaypal = !1),
                        (e.submitted = !1),
                        (e.loading = !1),
                        n.removeClass("fa fa-spinner fa-spin"),
                        n.addClass("fa fa-save"),
                        void 0 !== t.data.status && !0 === t.data.status
                          ? (displayMessage(t.data.message),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3))
                          : displayErrorMessage(t.data.message);
                    })
                    .catch(function (t) {
                      (e.loading = !1),
                        (e.submitted = !1),
                        displayErrorMessage(
                          e.formTranslation.common.internal_server_error
                        );
                    });
            }
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
          getRazorpayCurrencyList: function () {
            var t = this;
            Object(i.a)("get_razorpay_currency_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.razorpay_currency_list = e.data.data);
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
            return void 0 !== this.$store.state.userDataModule &&
              void 0 !== this.$store.state.userDataModule.user
              ? this.$store.state.userDataModule.user
              : [];
          },
          teleMedEn: function () {
            return this.userData.addOns.telemed;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9);
      e.a = {
        name: "UniqueIdSetting",
        components: {},
        data: function () {
          return {
            onAppointmentDescription: "on",
            onAppointmentPatientInfo: "on",
            restrictAppointment: {},
            restrictAppointmentLoading: !1,
            loading: !1,
            cancellation_buffer_loading: !1,
            submitted: !1,
            status: "off",
            onAppointmentTimeFormatStatus: "off",
            reminder: {
              time: "24",
              status: "off",
              sms_status: "off",
              whatapp_status: "off",
            },
            storePrevios: { pre_book: "", post_book: "" },
            formLoader: !0,
            request_status: "off",
            isDisable: !1,
            isCancellationBufferDisable: !1,
            cancellation_buffer: { status: "off", time: "" },
            intervalOptions: [
              { value: "0.25", label: "15 minutes" },
              { value: "0.50", label: "30 minutes" },
              { value: "0.75", label: "45 minutes" },
              { value: "1", label: "1 hour" },
              { value: "2", label: "2 hours" },
              { value: "3", label: "3 hours" },
              { value: "4", label: "4 hours" },
              { value: "5", label: "5 hours" },
              { value: "6", label: "6 hours" },
              { value: "12", label: "12 hours" },
              { value: "24", label: "1 day" },
              { value: "48", label: "2 days" },
              { value: "72", label: "3 days" },
              { value: "96", label: "5 days" },
              { value: "144", label: "6 days" },
              { value: "168", label: "1 week" },
              { value: "336", label: "2 weeks" },
              { value: "504", label: "3 weeks" },
              { value: "672", label: "4 weeks" },
              { value: "840", label: "5 weeks" },
              { value: "1008", label: "6 weeks" },
              { value: "1176", label: "7 weeks" },
              { value: "1344", label: "8 weeks" },
            ],
          };
        },
        validations: {
          restrictAppointment: {
            pre_book: {
              required: r.required,
              minValue: Object(r.minValue)(0),
              maxValue: Object(r.maxValue)(365),
            },
            post_book: {
              required: r.required,
              minValue: Object(r.minValue)(0),
              maxValue: Object(r.maxValue)(365),
            },
          },
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.onAppointmentTimeFormatStatus =
              void 0 !== window.request_data &&
              "on" === window.request_data.appointment_time_format
                ? "on"
                : "off"),
            (this.restrictAppointment = this.defaultData()),
            this.edit(),
            this.editAppointmentReminder(),
            this.editAppointmentCancellationBuffer(),
            this.getFileUploadStatus(),
            this.getAppointmentDescription(),
            this.getAppointmentPatientInfo(),
            this.getModule(),
            (this.intervalOptions = [
              {
                value: "0.25",
                label: "15 " + this.formTranslation.common.lbl_minutes,
              },
              {
                value: "0.50",
                label: "30 " + this.formTranslation.common.lbl_minutes,
              },
              {
                value: "0.75",
                label: "45 " + this.formTranslation.common.lbl_minutes,
              },
              {
                value: "1",
                label: "1 " + this.formTranslation.common.lbl_hour,
              },
              {
                value: "2",
                label: "2 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "3",
                label: "3 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "4",
                label: "4 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "5",
                label: "5 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "6",
                label: "6 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "12",
                label: "12 " + this.formTranslation.common.lbl_hours,
              },
              {
                value: "24",
                label: "1 " + this.formTranslation.common.lbl_day,
              },
              {
                value: "48",
                label: "2 " + this.formTranslation.common.lbl_days,
              },
              {
                value: "72",
                label: "3 " + this.formTranslation.common.lbl_days,
              },
              {
                value: "96",
                label: "5 " + this.formTranslation.common.lbl_days,
              },
              {
                value: "144",
                label: "6 " + this.formTranslation.common.lbl_days,
              },
              {
                value: "168",
                label: "1 " + this.formTranslation.common.lbl_week,
              },
              {
                value: "336",
                label: "2 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "504",
                label: "3 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "672",
                label: "4 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "840",
                label: "5 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "1008",
                label: "6 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "1176",
                label: "7 " + this.formTranslation.common.lbl_weeks,
              },
              {
                value: "1344",
                label: "8 " + this.formTranslation.common.lbl_weeks,
              },
            ]);
        },
        methods: {
          defaultData: function () {
            return {
              pre_book: "0",
              post_book: "365",
              only_same_day_book: "off",
            };
          },
          handleSubmit: function () {
            var e = this;
            if (
              ((this.submitted = !0),
              this.$v.$touch(),
              !this.$v.restrictAppointment.$invalid)
            ) {
              var n = "",
                r =
                  "Pre booking open before " +
                  this.restrictAppointment.post_book +
                  " days " +
                  n;
              0 != this.restrictAppointment.pre_book
                ? (n =
                    " and close before " +
                    this.restrictAppointment.pre_book +
                    " days of booking date.")
                : (r += "before appointment booking date."),
                (r =
                  "Appointment pre booking open from " +
                  this.restrictAppointment.post_book +
                  " days " +
                  n +
                  " before appointment booking date. "),
                t.confirm({
                  title: this.formTranslation.appointments.booking_restriction,
                  content: r,
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        (e.restrictAppointmentLoading = !0),
                          Object(i.b)(
                            "restrict_appointment_save",
                            e.restrictAppointment
                          )
                            .then(function (t) {
                              (e.restrictAppointmentLoading = !1),
                                void 0 !== t.data.status && !0 === t.data.status
                                  ? ((e.submitted = !1),
                                    (e.storePrevios = Object.assign(
                                      {},
                                      e.storePrevios,
                                      e.restrictAppointment
                                    )),
                                    displayMessage(t.data.message))
                                  : ((e.restrictAppointmentLoading = !1),
                                    (e.submitted = !1),
                                    displayErrorMessage(t.data.message));
                            })
                            .catch(function (t) {
                              (e.submitted = !1),
                                (e.restrictAppointmentLoading = !1),
                                displayErrorMessage(
                                  e.formTranslation.common.internal_server_error
                                );
                            });
                      },
                    },
                    cancel: { text: this.formTranslation.common.cancel },
                  },
                });
            }
          },
          getAppointmentDescription: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("get_appointment_description_status", {}).then(
                function (e) {
                  (t.formLoader = !1),
                    (t.onAppointmentDescription =
                      "on" == e.data.data ? "on" : "off");
                }
              );
          },
          getAppointmentPatientInfo: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("get_appointment_patient_info_status", {}).then(
                function (e) {
                  (t.formLoader = !1),
                    (t.onAppointmentPatientInfo =
                      "on" == e.data.data ? "on" : "off");
                }
              );
          },
          getFileUploadStatus: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("get_multifile_upload_status", {})
                .then(function (e) {
                  (t.status = e.data.data), (t.formLoader = !1);
                })
                .catch(function (e) {
                  t.formLoader = !1;
                });
          },
          onFileUploadStatusChange: function (t) {
            var e = this;
            Object(i.a)("change_multifile_upload_status", { status: t })
              .then(function (n) {
                void 0 !== n.data.status && !0 === n.data.status
                  ? (e.$store.commit("appointmentModule/FILE_UPLOAD_STATUS", {
                      data: t,
                    }),
                    displayMessage(n.data.message))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {});
          },
          onOnlySameDayBookChange: function (t) {
            this.isDisable = "on" == t;
          },
          cancellationBufferStatus: function (t) {
            this.isCancellationBufferDisable = "on" == t;
          },
          edit: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("restrict_appointment_edit", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (setTimeout(function () {
                      (t.restrictAppointment = e.data.data),
                        "on" === t.restrictAppointment.only_same_day_book
                          ? (t.isDisable = !0)
                          : (t.isDisable = !1),
                        (t.storePrevios = Object.assign(
                          {},
                          t.storePrevios,
                          e.data.data
                        ));
                    }, 200),
                    (t.formLoader = !1));
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          appointmentReminder: function () {
            var t = this;
            (this.loading = !0),
              Object(i.b)(
                "appointment_reminder_notificatio_save",
                this.reminder
              )
                .then(function (e) {
                  (t.loading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message),
                        setTimeout(function () {
                          window.location.reload();
                        }, 1e3))
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.loading = !1;
                });
          },
          appointmentCancellationBuffer: function () {
            var t = this;
            (this.cancellation_buffer_loading = !0),
              Object(i.b)(
                "appointment_cancellation_buffer_save",
                this.cancellation_buffer
              )
                .then(function (e) {
                  (t.cancellation_buffer_loading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.cancellation_buffer_loading = !1;
                });
          },
          editAppointmentCancellationBuffer: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("get_appointment_cancellation_buffer", {
                type: "setting",
              })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.cancellation_buffer = e.data.data),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          editAppointmentReminder: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("get_appointment_reminder_notification", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.reminder = e.data.data),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          onAppointmentTimeFormat: function () {
            var t = this;
            Object(i.b)("update_appointment_time_format", {
              timeFormat: this.onAppointmentTimeFormatStatus,
            })
              .then(function (t) {
                void 0 !== t.data.status && !0 === t.data.status
                  ? (displayMessage(t.data.message),
                    setTimeout(function () {
                      window.location.reload();
                    }, 1e3))
                  : displayErrorMessage(t.data.message);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          onAppointmentDescriptionChange: function (t) {
            var e = this;
            Object(i.b)("appointment_description_status_change", {
              status: this.onAppointmentDescription,
            })
              .then(function (n) {
                void 0 !== n.data.status && !0 === n.data.status
                  ? (e.$store.commit("appointmentModule/DESCRIPTION_STATUS", {
                      data: t,
                    }),
                    displayMessage(n.data.message))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
              });
          },
          onAppointmentPatientInfoChange: function (t) {
            var e = this;
            Object(i.b)("appointment_patient_info_status_change", {
              status: this.onAppointmentPatientInfo,
            })
              .then(function (n) {
                void 0 !== n.data.status && !0 === n.data.status
                  ? (displayMessage(n.data.message),
                    e.$store.commit("appointmentModule/PATIENT_INFO_STATUS", {
                      data: t,
                    }))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
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
          prevValCheck: function () {
            return (
              parseInt(this.restrictAppointment.pre_book) >
                parseInt(this.restrictAppointment.post_book) ||
              parseInt(this.restrictAppointment.pre_book) ===
                parseInt(this.restrictAppointment.post_book)
            );
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(53),
        r = n.n(i),
        o = (n(73), n(8)),
        a = n(9),
        s = n(43);
      e.a = {
        name: "generalSetting",
        components: { ModalPopup: s.a, VuePhoneNumberInput: r.a },
        data: function () {
          return {
            request_status: "yes",
            remove_request_status: "off",
            showOption: !0,
            isSubmited: !1,
            isSubmitedClinic: !1,
            isSubmitedClinicLoading: !1,
            isSubmitedCountryCode: !1,
            isSubmitedReset: !1,
            isSubmitedEncounter: !1,
            clinicData: { currency_prefix: "", currency_postfix: "" },
            googleRecaptchaLoading: !1,
            googleCaptcha: { site_key: "", secret_key: "", status: "off" },
            googleCaptchaSubmitted: !1,
            redirectSettingLoading: !1,
            loginRedirectSettingLoading: !1,
            logout_redirect: {
              clinic_admin: "",
              patient: "",
              receptionist: "",
              doctor: "",
            },
            login_redirect: {
              clinic_admin: "",
              patient: "",
              receptionist: "",
              doctor: "",
            },
            datat: {},
            formLoader: !0,
            decimals: [
              { id: 0, label: "100" },
              { id: 1, label: "100.0" },
              { id: 2, label: "100.00" },
              { id: 3, label: "100.000" },
              { id: 4, label: "100.0000" },
            ],
            fullcalendarFormLoading: !1,
            isFullcalendarFormKeyEmpty: !1,
            fullcalendar_key: "",
            dateFormatLoading: !1,
            dateFormat: "D-MM-YYYY",
            dateFormatOutput: "",
            reset_status: "off",
            resetPluginModel: !1,
            resetPluginData: {
              resetAppointmentEncounterStatus: "off",
              resetDoctorStatus: "off",
              resetReceptionistStatus: "off",
              resetPatientStatus: "off",
              resetRevenueStatus: "off",
              resetAllDataStatus: "off",
            },
            userRegistrationShortcodeSetting: {
              status: { doctor: "off", receptionist: "off", patient: "on" },
              user_role: {
                kiviCare_doctor: "on",
                kiviCare_receptionist: "on",
                kiviCare_patient: "on",
              },
            },
            userRegistrationShortcodeSettingLoading: !1,
            countryCodeData: { countrycode: "", countryCallingCode: "" },
            contact: "00",
            defaultCountryCode: null,
            userRegistrationFormSetting_status: "on",
            encounterSettingsData: { encounter_edit_after_close_status: "off" },
            userRegistrationFormSettingLoading: !1,
          };
        },
        validations: {
          googleCaptcha: {
            site_key: { required: a.required },
            secret_key: { required: a.required },
          },
          clinicData: {
            currency_postfix: { required: a.required },
            currency_prefix: { required: a.required },
          },
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.getRequestHelper(),
            this.getAllSetting(),
            this.getModule();
        },
        methods: {
          validateCheckboxes: function (t) {
            var e,
              n = this.userRegistrationShortcodeSetting.user_role,
              i = this.userRegistrationShortcodeSetting.user_role,
              r = i.kiviCare_doctor,
              o = i.kiviCare_receptionist,
              a = i.kiviCare_patient;
            "off" === r &&
              "off" === o &&
              "off" === a &&
              ((n[t] = "on"),
              displayErrorMessage(
                null === (e = this.formTranslation.common) || void 0 === e
                  ? void 0
                  : e.registration_shortcode_work_one_role_should_enable
              ),
              (this.userRegistrationShortcodeSetting.user_role = n));
          },
          countryCodeUpdateHandaler: function (t) {
            (this.countryCodeData.countrycode = t.countryCode),
              (this.countryCodeData.countryCallingCode = t.countryCallingCode);
          },
          handleSubmit: function () {
            var e = this,
              n = t("#btn-general-submit").find("i");
            n.removeClass("fa fa-save "),
              n.addClass("fa fa-spinner fa-spin"),
              (this.isSubmited = !0),
              Object(o.b)("save_request_helper_status", {
                request_status: this.request_status,
                remove_request_status: this.remove_request_status,
              })
                .then(function (t) {
                  (e.isSubmited = !1),
                    n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-save"),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      ((e.showOption = !1),
                      "off" == t.data.data && (e.request_status = t.data.data),
                      setTimeout(function () {
                        window.location.reload();
                      }, 500));
                })
                .catch(function (t) {
                  displayErrorMessage(
                    e.formTranslation.common.internal_server_error
                  );
                });
          },
          handleUserRegistrationShortcodeSettingSubmit: function () {
            var t = this;
            (this.userRegistrationShortcodeSettingLoading = !0),
              Object(o.b)("save_registration_shortcode_setting", {
                data: this.userRegistrationShortcodeSetting,
              })
                .then(function (e) {
                  (t.userRegistrationShortcodeSettingLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.userRegistrationShortcodeSettingLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleDateFormatSubmit: function () {
            var t = this;
            (this.dateFormatLoading = !0),
              Object(o.b)("save_date_format", { data: this.dateFormat })
                .then(function (e) {
                  (t.dateFormatLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (t.$store.commit("FETCH_DATE_FORMAT", {
                          data: t.dateFormat,
                        }),
                        displayMessage(e.data.message))
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.dateFormatLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleLogoutRedirectSubmit: function () {
            var t = this;
            (this.redirectSettingLoading = !0),
              Object(o.b)("save_logout_redirect_setting", {
                data: this.logout_redirect,
              })
                .then(function (e) {
                  (t.redirectSettingLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (t.$store.dispatch("logout_redirect_url", {
                          data: Object.assign({}, t.logout_redirect),
                        }),
                        displayMessage(e.data.message))
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.redirectSettingLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleLoginRedirectSubmit: function () {
            var t = this;
            (this.loginRedirectSettingLoading = !0),
              Object(o.b)("save_login_redirect_setting", {
                data: this.login_redirect,
              })
                .then(function (e) {
                  (t.loginRedirectSettingLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.loginRedirectSettingLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleFullCalendarFormSubmit: function () {
            var t = this;
            0 != this.fullcalendar_key.length
              ? ((this.isFullcalendarFormKeyEmpty =
                  0 == this.fullcalendar_key.length),
                (this.fullcalendarFormLoading = !0),
                Object(o.b)("save_fullcalendar_setting", {
                  fullcalendar_key: this.fullcalendar_key,
                })
                  .then(function (e) {
                    (t.fullcalendarFormLoading = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? displayMessage(e.data.message)
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.fullcalendarFormLoading = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  }))
              : (this.isFullcalendarFormKeyEmpty = !0);
          },
          handleRegistrationFormSetting: function () {
            var t = this;
            (this.userRegistrationFormSettingLoading = !0),
              Object(o.b)("save_registration_form_setting", {
                status: this.userRegistrationFormSetting_status,
              })
                .then(function (e) {
                  (t.userRegistrationFormSettingLoading = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.userRegistrationFormSettingLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          handleCaptchaSubmit: function (t) {
            var e = this;
            if ("on" === this.googleCaptcha.status) {
              var n, i;
              if (
                t &&
                (null === (n = this.googleCaptcha) ||
                  void 0 === n ||
                  !n.site_key ||
                  null === (i = this.googleCaptcha) ||
                  void 0 === i ||
                  !i.secret_key)
              )
                return;
              if (
                ((this.googleCaptchaSubmitted = !0),
                this.$v.$touch(),
                this.$v.googleCaptcha.$invalid)
              )
                return;
              this.googleCaptchaSubmitted = !1;
            }
            (this.googleRecaptchaLoading = !0),
              Object(o.b)("save_google_recaptcha_setting", this.googleCaptcha)
                .then(function (t) {
                  (e.googleRecaptchaLoading = !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? displayMessage(t.data.message)
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  (e.googleRecaptchaLoading = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          handleCliniSubmit: function () {
            var e = this,
              n = t("#btn-clinic-submit").find("i");
            if (
              (n.removeClass("fa fa-save "),
              n.addClass("fa fa-spinner fa-spin"),
              (this.isSubmitedClinic = !0),
              (this.isSubmitedClinicLoading = !0),
              this.$v.$touch(),
              this.$v.clinicData.$invalid)
            )
              return (
                n.removeClass("fa fa-spinner fa-spin"),
                n.addClass("fa fa-save"),
                void (this.isSubmitedClinicLoading = !1)
              );
            Object(o.b)("save_clinic_currency", {
              clinic_data: this.clinicData,
            })
              .then(function (t) {
                (e.isSubmitedClinic = !1),
                  (e.isSubmitedClinicLoading = !1),
                  n.removeClass("fa fa-spinner fa-spin"),
                  n.addClass("fa fa-save"),
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    displayMessage(t.data.message);
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          handleCountryCodeSubmit: function () {
            var e = this,
              n = t("#btn-country-code-submit").find("i");
            n.removeClass("fa fa-save "),
              n.addClass("fa fa-spinner fa-spin"),
              (this.isSubmitedCountryCode = !0),
              Object(o.b)("save_country_code", {
                CountryCode: this.countryCodeData,
              })
                .then(function (t) {
                  (e.isSubmitedCountryCode = !1),
                    n.removeClass("fa fa-spinner fa-spin"),
                    n.addClass("fa fa-save"),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      displayMessage(t.data.message);
                })
                .catch(function (t) {
                  displayErrorMessage(
                    e.formTranslation.common.internal_server_error
                  );
                });
          },
          handleEncounterFormSubmit: function () {
            var t = this;
            (this.isSubmitedEncounter = !0),
              Object(o.b)("save_encounter_setting", this.encounterSettingsData)
                .then(function (e) {
                  (t.isSubmitedEncounter = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.isSubmitedEncounter = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getRequestHelper: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              ((this.request_status = window.request_data.link_show_hide),
              "on" == this.request_status && (this.showOption = !1)),
              (this.formLoader = !1);
          },
          getAllSetting: function () {
            var t = this;
            (this.formLoader = !0),
              Object(o.a)("get_all_general_setting", {})
                .then(function (e) {
                  (t.formLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.clinicData = e.data.data),
                      (t.countryCodeData = e.data.countryCodeData),
                      "" !== e.data.countryCodeData.countryCallingCode &&
                        void 0 !== e.data.countryCodeData.countryCallingCode &&
                        (t.defaultCountryCode =
                          e.data.countryCodeData.countrycode),
                      void 0 !== e.data.captcha_data &&
                        (t.googleCaptcha = e.data.captcha_data),
                      void 0 !== e.data.logout_redirect &&
                        (t.logout_redirect = e.data.logout_redirect),
                      void 0 !== e.data.fullcalendar &&
                        (t.fullcalendar_key = e.data.fullcalendar),
                      void 0 !== e.data.date_format &&
                        (t.dateFormat = e.data.date_format),
                      void 0 !== e.data.login_redirect &&
                        (t.login_redirect = e.data.login_redirect),
                      void 0 !== e.data.userRegistrationShortcodeSetting &&
                        (t.userRegistrationShortcodeSetting =
                          e.data.userRegistrationShortcodeSetting),
                      void 0 !== e.data.userRegistrationFormSetting &&
                        (t.userRegistrationFormSetting_status =
                          e.data.userRegistrationFormSetting),
                      void 0 !== e.data.encounter_settings &&
                        (t.encounterSettingsData = e.data.encounter_settings),
                      t.formatDateValue());
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          removeFeatureRequest: function (e) {
            var n = this;
            "on" == e &&
              t.confirm({
                title: this.formTranslation.common.remove_links,
                content:
                  "Are you sure want to remove all hard links permanently ?",
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      n.handleSubmit();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          closeResetPluginModel: function () {
            (this.resetPluginModel = !1),
              (this.resetPluginData.resetAppointmentEncounterStatus = ""),
              (this.resetPluginData.resetDoctorStatus = ""),
              (this.resetPluginData.resetReceptionistStatus = ""),
              (this.resetPluginData.resetPatientStatus = ""),
              (this.resetPluginData.resetRevenueStatus = ""),
              (this.resetPluginData.resetAllDataStatus = "");
          },
          handleResetPluginForm: function () {
            var e = this,
              n = t("#btn-reset-submit").find("i"),
              i =
                "on" == this.resetPluginData.resetDoctorStatus ||
                "on" == this.resetPluginData.resetPatientStatus
                  ? this.formTranslation.common.action_reset_plugin_user_data
                  : this.formTranslation.common.action_reset_plugin_data;
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content: i,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    (e.isSubmitedReset = !0),
                      n.removeClass("fa fa-save "),
                      n.addClass("fa fa-spinner fa-spin"),
                      Object(o.b)("reset_plugin_data", {
                        reset_plugin_data: e.resetPluginData,
                      })
                        .then(function (t) {
                          n.removeClass("fa fa-spinner fa-spin"),
                            n.addClass("fa fa-save"),
                            (e.isSubmitedReset = !1),
                            void 0 !== t.data.status && !0 === t.data.status
                              ? ((e.resetPluginModel = !1),
                                displayMessage(t.data.message),
                                void 0 !== t.data.reset_all &&
                                !0 === t.data.reset_all
                                  ? (window.location.href =
                                      window.request_data.homePage +
                                      "/wp-admin/plugins.php")
                                  : location.reload())
                              : ((e.resetPluginModel = !1),
                                displayErrorMessage(t.data.message));
                        })
                        .catch(function (t) {
                          displayErrorMessage(response.data.message);
                        });
                  },
                },
                cancel: { text: this.formTranslation.common.cancel },
              },
            });
          },
          formatDateValue: function () {
            this.dateFormatOutput = window.moment
              .utc(new Date())
              .format(this.dateFormat);
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
        computed: {},
        watch: {
          dateFormat: function () {
            this.formatDateValue();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9);
      n(24),
        (e.a = {
          name: "generalSetting",
          components: {},
          data: function () {
            return {
              googleCalData: {},
              loading: !1,
              googleEventList: [],
              eventTitle: "",
              request_status: "off",
              templateSaveRequest: { ID: 0, post_content: "" },
              formLoader: (!0).valueOf,
              submitted: !1,
              customToolbar: [
                [{ header: [!1, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"],
                [
                  { align: "" },
                  { align: "center" },
                  { align: "right" },
                  { align: "justify" },
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ color: [] }, { background: [] }],
              ],
            };
          },
          mounted: function () {
            ["administrator"].includes(this.getUserRole()) ||
              this.$router.push({ name: "403" }),
              (this.googleCalData = this.defaultGoogleData()),
              this.getGoogleEventTemplate(),
              this.getModule();
          },
          validations: {
            googleCalData: {
              client_id: { required: r.required },
              client_secret: { required: r.required },
              app_name: { required: r.required },
            },
          },
          methods: {
            handleCalenderSubmit: function () {
              var e = this;
              if (
                1 == this.userData.addOns.googlemeet &&
                ((this.submitted = !0),
                this.$v.$touch(),
                !this.$v.googleCalData.$invalid)
              ) {
                var n = t("#btn-google-submit").find("i");
                n.removeClass("fa fa-save "),
                  n.addClass("fa fa-spinner fa-spin"),
                  Object(i.b)("google_meet_config", this.googleCalData)
                    .then(function (t) {
                      (e.submitted = !1),
                        n.removeClass("fa fa-spinner fa-spin"),
                        n.addClass("fa fa-save"),
                        void 0 !== t.data.status && !0 === t.data.status
                          ? displayMessage(t.data.message)
                          : displayErrorMessage(t.data.message);
                    })
                    .catch(function (t) {
                      displayErrorMessage(
                        e.formTranslation.common.internal_server_error
                      );
                    });
              }
            },
            defaultGoogleData: function () {
              return {
                client_id: "",
                client_secret: "",
                app_name: "",
                enableCal: !1,
              };
            },
            getGoogleEventTemplate: function () {
              var t = this;
              (this.formLoader = !0),
                Object(i.a)("get_google_meet_event_template_and_config", {})
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.googleEventList = e.data.data),
                      void 0 !== e.data.config &&
                        void 0 !== e.data.config.status &&
                        !0 === e.data.config.status &&
                        (t.googleCalData = e.data.config.data),
                      (t.formLoader = !1);
                  })
                  .catch(function (e) {
                    t.formLoader = !1;
                  });
            },
            saveGoogleEventTemplate: function () {
              var t = this;
              1 == this.userData.addOns.googlemeet &&
                ((this.loading = !0),
                Object(i.b)("save_google_meet_event_template", {
                  data: this.googleEventList,
                })
                  .then(function (e) {
                    void 0 !== e.data.status && !0 === e.data.status
                      ? displayMessage(e.data.message)
                      : displayErrorMessage(e.data.message),
                      (t.loading = !1);
                  })
                  .catch(function (e) {
                    (t.loading = !1),
                      displayErrorMessage(
                        t.formTranslation.common.server_error
                      );
                  }));
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
        });
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        name: "PermissionSetting",
        components: {},
        data: function () {
          return {
            allPermissionListData: {},
            formLoader: !0,
            request_status: "off",
            check_value: "on",
            plugin_prefix: window.pluginPREFIX,
            isSubmited: !1,
            role_list: {},
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.role_list = {
              administrator: "Administrator",
              kiviCare_clinic_admin: this.formTranslation.common.clinic_admin,
              kiviCare_receptionist: this.formTranslation.common.receptionist,
              kiviCare_doctor: this.formTranslation.doctor_session.dt_lbl_doc,
              kiviCare_patient: this.formTranslation.common.patient,
            }),
            this.allPermissionList(),
            this.getModule();
        },
        methods: {
          allPermissionList: function () {
            var t = this;
            (this.formLoader = !0),
              Object(i.a)("all_permission_list", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.allPermissionListData = e.data.data),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          handleSubmit: function (e) {
            var n = this,
              r = t("#" + e);
            r.html(this.formTranslation.common.loading),
              r.prop("disabled", !0),
              Object(i.b)("save_permission_list", {
                data: this.allPermissionListData,
                type: e,
              })
                .then(function (t) {
                  r.html(n.formTranslation.common.save),
                    r.prop("disabled", !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (displayMessage(t.data.message),
                        n.$store.dispatch("userDataModule/fetchUserData", {}))
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  r.html(n.formTranslation.common.save),
                    r.prop("disabled", !1),
                    displayErrorMessage(
                      n.formTranslation.common.internal_server_error
                    );
                });
          },
          kivicareCapability: function (t, e) {
            (e = e.toLowerCase()), (t = t.toLowerCase());
            var n = this.plugin_prefix.toLowerCase(),
              i = e.includes(n);
            return "administrator" === t
              ? i &&
                  ![
                    n + "settings",
                    n + "dashboard",
                    n + "common_settings",
                    n + "terms_condition",
                    n + "notification_setting",
                    n + "home_page",
                    n + "patient_clinic",
                    n + "patient_view",
                    n + "prescription_view",
                    n + "receptionist_view",
                    n + "receptionist_profile",
                    n + "service_view",
                    n + "static_data_view",
                    n + "custom_field_view",
                    n + "clinic_view",
                    n + "doctor_dashboard",
                    n + "doctor_view",
                    n + "doctor_profile",
                    n + "patient_encounters",
                  ].includes(e)
              : t === n + "clinic_admin"
              ? i &&
                ![
                  n + "settings",
                  n + "common_settings",
                  n + "terms_condition",
                  n + "notification_setting",
                  n + "custom_field_view",
                  n + "doctor_dashboard",
                  n + "doctor_view",
                  n + "patient_encounters",
                  n + "service_view",
                  n + "patient_clinic",
                  n + "patient_view",
                  n + "prescription_view",
                  n + "receptionist_view",
                  n + "static_data_view",
                  n + "static_data_delete",
                  n + "patient_bill_delete",
                ].includes(e)
              : t === n + "doctor"
              ? i &&
                ![
                  n + "settings",
                  n + "patient_encounters",
                  n + "prescription_view",
                  n + "patient_clinic",
                  n + "patient_view",
                  n + "service_view",
                  n + "static_data_view",
                  n + "static_data_delete",
                ].includes(e)
              : t === n + "receptionist"
              ? i &&
                ![
                  n + "settings",
                  n + "doctor_dashboard",
                  n + "doctor_view",
                  n + "patient_encounters",
                  n + "patient_clinic",
                  n + "patient_view",
                  n + "prescription_view",
                  n + "service_view",
                  n + "doctor_session_delete",
                  n + "static_data_view",
                  n + "static_data_delete",
                  n + "patient_bill_delete",
                ].includes(e)
              : t === n + "patient"
              ? i &&
                ![
                  n + "service_list",
                  n + "patient_encounters",
                  n + "patient_encounter_add",
                  n + "patient_encounter_edit",
                  n + "patient_encounter_delete",
                  n + "prescription_view",
                ].includes(e)
              : void 0;
          },
          kivicareCheckModule: function (t, e) {
            var n = !0;
            switch (t) {
              case "administrator":
                break;
              case "kiviCare_clinic_admin":
                n = !["clinic_module"].includes(e);
                break;
              case "kiviCare_doctor":
                n = !["doctor_module", "custom_field_module"].includes(e);
                break;
              case "kiviCare_patient":
                n = ![
                  "doctor_module",
                  "service_module",
                  "session_module",
                  "static_data_module",
                ].includes(e);
                break;
              case "kiviCare_receptionist":
                n = !["receptionist_module", "clinic_module"].includes(e);
            }
            return n;
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
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(143),
        o = n.n(r);
      e.a = {
        name: "DashboardSidebarSetting",
        components: { draggable: o.a },
        data: function () {
          return {
            isLoading: !1,
            request_status: window.request_data.link_show_hide
              ? window.request_data.link_show_hide
              : "off",
            allUserList: [],
            selectedMainAccrodionId: "administrator",
            dashboardSidebarData: [],
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.allUserList = [
              { id: "administrator", label: "Administrator" },
              { id: "clinic_admin", label: this.formTranslation.clinic.clinic },
              {
                id: "receptionist",
                label: this.formTranslation.clinic.receptionist,
              },
              { id: "doctor", label: this.formTranslation.common.doctors },
              { id: "patient", label: this.formTranslation.dashboard.patients },
            ]),
            this.getSidebarData();
        },
        methods: {
          mainAccordian: function (t) {
            this.selectedMainAccrodionId =
              this.selectedMainAccrodionId === t ? "" : t;
          },
          getSidebarData: function () {
            var t = this;
            (this.isLoading = !0),
              Object(i.a)("get_dashbaord_sidebar_data", {})
                .then(function (e) {
                  (t.isLoading = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.dashboardSidebarData = e.data.data),
                      t.dashboardSidebarData.patient &&
                        (t.dashboardSidebarData.patient =
                          t.dashboardSidebarData.patient.filter(function (t) {
                            return "patient_clinic" !== t.routeClass;
                          })),
                      t.dashboardSidebarData.receptionist &&
                        (t.dashboardSidebarData.receptionist =
                          t.dashboardSidebarData.receptionist.filter(function (
                            t
                          ) {
                            return "home" !== t.routeClass;
                          })),
                      t.dashboardSidebarData.doctor &&
                        (t.dashboardSidebarData.doctor =
                          t.dashboardSidebarData.doctor.filter(function (t) {
                            return "home" !== t.routeClass;
                          })));
                })
                .catch(function (e) {
                  t.isLoading = !1;
                });
          },
          saveDashboardSidebarData: function (e) {
            var n = this,
              r = !0;
            if (
              (t(".invalid-feedback").parent().addClass("d-none"),
              this.dashboardSidebarData[e].forEach(function (n, i) {
                (n.label && n.link) ||
                  (t("#urlValid" + e + i)
                    .parent()
                    .removeClass("d-none"),
                  t("#labelValid" + e + i)
                    .parent()
                    .removeClass("d-none"),
                  (r = !1));
              }),
              r)
            ) {
              var o = t("#sidebarButton" + e);
              o.prop("disabled", !0),
                o.html(
                  "<i class='fa fa-sync fa-spin mr-1'></i>" +
                    this.formTranslation.common.loading
                ),
                Object(i.b)("save_dashbaord_sidebar_data", {
                  data: this.dashboardSidebarData[e],
                  type: e,
                })
                  .then(function (t) {
                    o.prop("disabled", !1),
                      o.html(
                        "<i class='fa fa-save'></i>" +
                          n.formTranslation.common.save
                      ),
                      void 0 !== t.data.status && !0 === t.data.status
                        ? (n.$store.dispatch(
                            "userDataModule/fetchUserData",
                            {}
                          ),
                          displayMessage(t.data.message))
                        : displayErrorMessage(t.data.message);
                  })
                  .catch(function (t) {
                    o.prop("disabled", !1),
                      o.html(
                        "<i class='fa fa-save'></i>" +
                          n.formTranslation.common.save
                      );
                  });
            }
          },
          addNewDashboardSidebarData: function (t) {
            this.dashboardSidebarData[t].push({
              label: "",
              type: "href",
              link: "",
              iconClass: "",
              routeClass: "",
              show: !0,
              custom: !0,
            });
          },
          deleteDashboardSidebarData: function (t, e) {
            this.dashboardSidebarData[t].splice(e, 1);
          },
          routeUrl: function (t) {
            var e = this.$router.resolve({ name: t });
            return e.href ? window.request_data.menu_url + e.href : "#";
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = (n(24), n(9));
      e.a = {
        validations: {
          passwordChangeRequest: {
            currentPassword: { required: r.required },
            newPassword: {
              required: r.required,
              minLength: Object(r.minLength)(5),
            },
            confirmPassword: {
              required: r.required,
              minLength: Object(r.minLength)(5),
            },
          },
        },
        data: function () {
          return {
            submitted: !1,
            passwordChangeRequest: {
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            },
            emailChangeRequest: { newEmail: "" },
            cardTitle: "Change Password",
            currentPasswordType: "password",
            newPasswordType: "password",
            confirmPasswordType: "password",
            currentPasswordIcon: "fa fa-eye",
            newPasswordIcon: "fa fa-eye",
            confirmPasswordIcon: "fa fa-eye",
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            this.cardTitle = this.formTranslation.common.change_password;
          },
          saveChangePassword: function () {
            var t = this;
            if (
              ((this.submitted = !0),
              (this.loading = !0),
              this.$v.$touch(),
              !this.$v.passwordChangeRequest.$invalid)
            )
              return (
                !!this.isConfimMatched &&
                void Object(i.b)("change_password", this.passwordChangeRequest)
                  .then(function (e) {
                    (t.loading = !1),
                      (t.submitted = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (displayMessage(e.data.message),
                          setTimeout(function () {
                            location.reload();
                          }, 1e3))
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.loading = !1),
                      (t.submitted = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  })
              );
            this.loading = !1;
          },
          saveChangeEmail: function () {
            var t = this;
            Object(i.b)("doctor_change_email", this.emailChangeRequest)
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
          viewPassword: function (e) {
            "current_password" === e
              ? ((this.currentPasswordType =
                  "password" === this.currentPasswordType
                    ? "text"
                    : "password"),
                "password" === this.currentPasswordType
                  ? (this.currentPasswordIcon = "fa fa-eye")
                  : (this.currentPasswordIcon = "fa fa-eye-slash"))
              : "confirm_password" === e
              ? ((this.confirmPasswordType =
                  "password" === this.confirmPasswordType
                    ? "text"
                    : "password"),
                "password" === this.confirmPasswordType
                  ? (this.confirmPasswordIcon = "fa fa-eye")
                  : (this.confirmPasswordIcon = "fa fa-eye-slash"))
              : (t(this).toggleClass("fa-eye"),
                (this.newPasswordType =
                  "password" === this.newPasswordType ? "text" : "password"),
                "password" === this.newPasswordType
                  ? (this.newPasswordIcon = "fa fa-eye")
                  : (this.newPasswordIcon = "fa fa-eye-slash"));
          },
        },
        computed: {
          isConfimMatched: function () {
            return (
              this.passwordChangeRequest.newPassword ===
              this.passwordChangeRequest.confirmPassword
            );
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(53),
        r = n.n(i),
        o = (n(73), n(9)),
        a = n(24),
        s = n(8),
        l = n(43);
      function c(t) {
        return (c =
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
      e.a = {
        name: "clinicAdmin",
        components: { ModalPopup: l.a, VuePhoneNumberInput: r.a },
        data: function () {
          return {
            file: "",
            imagePreview:
              window.pluginBASEURL + "assets/images/kc-demo-img.png",
            stepStatus: !1,
            cardTitle: "Clinic Admin Information",
            clinicUserData: {},
            loading: !1,
            submitted: !1,
            nextButtonText:
              'Save & Next <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
            requiredFields: [],
            popupFormOpen: !1,
            selectedOptions: [
              "kiviCare_doctor",
              "kiviCare_receptionist",
              "kiviCare_patient",
            ],
            radioOptions: [
              { text: "Doctor", value: "kiviCare_doctor" },
              { text: "Receptionist", value: "kiviCare_receptionist" },
              { text: "Patient", value: "kiviCare_patient" },
            ],
          };
        },
        validations: {
          clinicUserData: {
            first_name: { required: o.required },
            last_name: { required: o.required },
            mobile_number: {
              required: o.required,
              minLength: Object(o.minLength)(4),
              maxLength: Object(o.maxLength)(15),
            },
            user_email: { required: o.required, emailValidate: a.c },
            dob: {},
            gender: { required: o.required },
          },
        },
        mounted: function () {
          (this.cardTitle = this.formTranslation.common.clinic_admin_info),
            this.init();
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.clinicUserData.country_code = t.countryCode),
              (this.clinicUserData.country_calling_code = t.countryCallingCode);
          },
          init: function () {
            "clinic_admin" === this.checkStep.name &&
              (this.nextButtonText =
                this.formTranslation.widget_setting.confirm +
                ' <i class="fa fa-angle-double-right" aria-hidden="true"></i>'),
              (this.clinicUserData = this.defaultClinicData()),
              this.getCurrentStepStatus();
          },
          closeModal: function () {
            this.popupFormOpen = !1;
          },
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          handleSubmit: function () {
            (this.submitted = !0),
              this.$v.$touch(),
              this.$v.clinicUserData.$invalid ||
                this.requiredFields.length > 0 ||
                (Object(a.n)("clinicUserDataForm") &&
                  (this.popupFormOpen = !0));
          },
          confirmPopup: function () {
            var e = this,
              n = document.getElementById("clinicUserDataForm"),
              i = new FormData(n);
            i.append("profile_image", this.file),
              t.each(this.clinicUserData, function (t, e) {
                "object" === c(e) && (e = JSON.stringify(e)), i.append(t, e);
              }),
              (this.loading = !0),
              i.append("selected_demo_user", this.selectedOptions),
              Object(s.b)("setup_clinic_admin", i)
                .then(function (t) {
                  (e.loading = !1),
                    (e.submitted = !1),
                    void 0 !== t.data.status && !0 === t.data.status
                      ? (displayMessage(t.data.message),
                        e.$store
                          .dispatch(
                            "userDataModule/updateSetupStep",
                            e.currentStep
                          )
                          .then(function () {
                            "clinic_admin" === e.checkStep.name &&
                              e.$store.dispatch(
                                "userDataModule/finishSetup",
                                {}
                              ),
                              e.$store.dispatch(
                                "userDataModule/fetchUserData",
                                {}
                              ),
                              e.$store.dispatch("fetchAllClinic", { self: e });
                          }))
                      : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  (e.loading = !1),
                    (e.submitted = !1),
                    displayErrorMessage("Internal server error");
                });
          },
          defaultClinicData: function () {
            var t = new Date();
            return (
              t.setFullYear(t.getFullYear() - 18),
              {
                id: "",
                first_name: "",
                last_name: "",
                country_code: "US",
                country_calling_code: "-1",
                mobile_number: "",
                gender: "male",
                user_email: "",
                dob: "",
                profile_image: "",
              }
            );
          },
          getCurrentStepStatus: function () {
            var t = this;
            Object(s.b)("get_setup_step_status", { step: 1 })
              .then(function (e) {
                e.data.status &&
                  ((t.stepStatus = !0),
                  (t.clinicUserData = t.setClinicData(e.data.data)));
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          setClinicData: function (t) {
            return t
              ? {
                  id: t.id,
                  first_name: t.first_name,
                  last_name: t.last_name,
                  mobile_number: t.telephone_no,
                  country_code: t.country_code,
                  country_calling_code: t.country_calling_code,
                  gender: t.gender,
                  user_email: t.email,
                  dob: t.dob,
                  profile_image: t.profile_image,
                }
              : this.defaultClinicData();
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
          uploadProfile: function () {
            (this.file = this.$refs.file.files[0]),
              (this.imagePreview = URL.createObjectURL(this.file));
          },
          getRequireFields: function (t) {
            this.requiredFields = t;
          },
        },
        watch: {
          stepStatus: function (t) {
            t && this.complete();
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "clinic_admin" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
          checkStep: function () {
            return this.$store.state.userDataModule.user.step_config
              .slice(-1)
              .pop();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = (n(24), n(8));
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
      function a(t, e) {
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
      function s(t, e, n) {
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
      e.a = {
        name: "ZoomConfiguration",
        components: {},
        data: function () {
          return {
            data: {},
            disconnect: !1,
            zoomSignInImage: "",
            zoomTelemedServerToServerOauthloading: !1,
            zoomTelemedServerToServerOauthSubmitted: !1,
            zoom_telemed: {
              video_price: 0,
              telemed_service_id: 0,
              doctor_id: 0,
            },
            zoomConfigData: {
              redirect_url: "",
              client_id: "",
              client_secret: "",
            },
            loading: !1,
            formLoader: !0,
            zoomServerToServerOauthConfigData: {
              enableServerToServerOauthconfig: "No",
              account_id: "",
              client_id: "",
              client_secret: "",
            },
          };
        },
        validations: {
          zoomServerToServerOauthConfigData: {
            account_id: { required: i.required },
            client_id: { required: i.required },
            client_secret: { required: i.required },
          },
        },
        mounted: function () {
          this.getUrlParams(),
            ["doctor"].includes(this.getUserRole()) ||
              this.$router.push({ name: "403" }),
            (this.zoomSignInImage =
              window.pluginBASEURL + "assets/images/logo-zoom-blue.svg"),
            (this.zoom_telemed = {
              video_price: this.userData.doctor_telemed_price,
              telemed_service_id: this.userData.telemed_service_id,
              doctor_id: this.userData.ID,
            }),
            this.getDoctorZoomOauthConfig(),
            this.init();
        },
        methods: {
          getUrlParams: function () {
            var t = new URLSearchParams(window.location.search),
              e = t.get("zoom_status"),
              n = t.get("message1");
            0 == e
              ? displayErrorMessage(n)
              : 1 == e && (this.disconnectMeet(), displayMessage(n));
            var i = new URL(window.location.href);
            i.searchParams.delete("zoom_status"),
              i.searchParams.delete("message1"),
              window.history.replaceState({}, document.title, i.toString());
          },
          getDoctorZoomOauthConfig: function () {
            var t = this,
              e = this;
            Object(r.b)("get_doctor_telemed_config")
              .then(function (n) {
                void 0 !== n.status && !0 === n.data.success
                  ? ((t.zoomConfigData = n.data.data),
                    e.$store.dispatch("userDataModule/fetchUserData"))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {});
          },
          disconnectMeet: function () {
            var t = this,
              e = this.userData.ID;
            Object(r.b)("diconnect_meet_doctor", { doctor_id: e })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  t.$store.dispatch("userDataModule/fetchUserData", {});
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          connect: function () {
            var e = this;
            t("#connect_doctor_zoom_btn_" + this.userData.ID).prop(
              "disabled",
              !0
            ),
              "on" === this.userData.is_enable_doctor_gmeet
                ? t.confirm({
                    title: this.formTranslation.common.are_you_sure_lbl,
                    content: this.formTranslation.common.zoom_confirmation_lbl,
                    type: "orange",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-warning",
                        keys: ["enter"],
                        action: function () {
                          e.connectZoom();
                        },
                      },
                      cancel: {
                        text: this.formTranslation.common.cancel,
                        action: function () {
                          t("#connect_doctor_zoom_btn_" + e.userData.ID).prop(
                            "disabled",
                            !1
                          );
                        },
                      },
                    },
                  })
                : this.connectZoom();
          },
          connectZoom: function () {
            var t =
              "https://zoom.us/oauth/authorize?client_id=" +
              this.zoomConfigData.client_id +
              "&response_type=code&redirect_uri=" +
              this.zoomConfigData.redirect_url;
            window.location.href = t;
          },
          closeConnectionZoomOauth: function () {
            var t = this;
            Object(r.a)("disconnect_doctor_zoom_oauth", {
              authentication_token: this.zoomOauthAuthorizationCode,
            }).then(function (e) {
              displayMessage(e.data.data.message),
                t.$store.dispatch("userDataModule/fetchUserData");
            });
          },
          init: function () {
            (this.zoomServerToServerOauthConfigData =
              this.defaultZoomServerToServerOauthConfigurationData()),
              this.getZoomServerToServerOauthConfigurationData();
          },
          getZoomServerToServerOauthConfigurationData: function () {
            var t = this;
            return (
              (this.formLoader = !0),
              new Promise(function (e, n) {
                Object(r.a)(
                  "get_doctor_zoom_server_to_server_oauth_configuration",
                  { user_id: t.userId }
                )
                  .then(function (n) {
                    (t.formLoader = !1),
                      void 0 !== n.data.status && !0 === n.data.status
                        ? (t.zoomServerToServerOauthConfigData = n.data.data)
                        : displayErrorMessage(n.data.message),
                      e();
                  })
                  .catch(function (e) {
                    (t.formLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      ),
                      n(e);
                  });
              })
            );
          },
          defaultZoomServerToServerOauthConfigurationData: function () {
            return {
              account_id: "",
              client_id: "",
              client_secret: "",
              doctor_id: "",
              enableServerToServerOauthconfig: "No",
            };
          },
          saveServerToServerOauthConfiguration: function () {
            var t = this;
            (this.zoomTelemedServerToServerOauthSubmitted = !0),
              (this.loading = !0),
              (this.zoomServerToServerOauthConfigData.doctor_id = this.userId),
              Object(r.b)(
                "save_doctor_zoom_server_to_server_oauth_configuration",
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? a(Object(n), !0).forEach(function (e) {
                          s(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : a(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({}, this.zoomServerToServerOauthConfigData)
              )
                .then(function (e) {
                  (t.zoomTelemedServerToServerOauthSubmitted = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message),
                        "Yes" ===
                          t.zoomServerToServerOauthConfigData
                            .enableServerToServerOauthconfig &&
                          "on" === t.userData.is_enable_doctor_gmeet &&
                          t.disconnectMeet())
                      : displayErrorMessage(e.data.message),
                    (t.loading = !1);
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                });
          },
          handleServerToServerOauthConfigSubmit: function () {
            var e = this;
            1 == this.userData.addOns.telemed &&
              (this.$v.zoomServerToServerOauthConfigData.$invalid
                ? (this.loading = !1)
                : "Yes" ===
                    this.zoomServerToServerOauthConfigData
                      .enableServerToServerOauthconfig &&
                  "on" === this.userData.is_enable_doctor_gmeet
                ? (t(
                    "#submit_server_to_server_oauth_btn_" + this.userData.ID
                  ).prop("disabled", !0),
                  t.confirm({
                    title: this.formTranslation.common.are_you_sure_lbl,
                    content:
                      this.formTranslation.common
                        .zoom_server_to_server_confirmation_lbl,
                    type: "orange",
                    buttons: {
                      ok: {
                        text: this.formTranslation.common.yes,
                        btnClass: "btn-warning",
                        keys: ["enter"],
                        action: function () {
                          e.saveServerToServerOauthConfiguration();
                        },
                      },
                      cancel: {
                        text: this.formTranslation.common.cancel,
                        action: function () {
                          t(
                            "#submit_server_to_server_oauth_btn_" +
                              e.userData.ID
                          ).prop("disabled", !1),
                            (e.zoomServerToServerOauthConfigData.enableServerToServerOauthconfig =
                              "No");
                        },
                      },
                    },
                  }))
                : this.saveServerToServerOauthConfiguration());
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          userId: function () {
            return this.$store.state.userDataModule.user.ID;
          },
          teleMedStatus: function () {
            return this.$store.state.userDataModule.user.teleMedStatus;
          },
        },
        watch: {
          zoomOauthAuthorizationCode: function (t) {
            t && t.length > 0 && this.setDoctorZoomOauthToken();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        name: "GoogleCalender",
        components: {},
        data: function () {
          return { data: {}, disconnect: !1, googleSignInImage: "" };
        },
        mounted: function () {
          ["doctor", "receptionist"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.googleSignInImage =
              window.pluginBASEURL + "assets/images/google.svg");
        },
        methods: {
          connect: function () {
            var t = this;
            google.accounts.oauth2
              .initCodeClient({
                client_id: this.userData.google_client_id,
                scope: "https://www.googleapis.com/auth/calendar",
                callback: function (e) {
                  e.code && t.signInCallback({ code: e.code });
                },
              })
              .requestCode();
          },
          closeConnection: function () {
            var t = this,
              e = this.userData.ID;
            Object(i.b)("diconnect_doctor", { doctor_id: e })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.$store.dispatch("userDataModule/fetchUserData", {}),
                  (t.disconnect = !1),
                  displayMessage(e.data.message));
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          signInCallback: function (e) {
            if (e.code) {
              var n = this.userData.ID,
                i = this;
              t.ajax({
                url: window.request_data.ajaxurl,
                type: "POST",
                data: {
                  route_name: "connect_doctor",
                  doctor_id: n,
                  _ajax_nonce: window.request_data.nonce,
                  code: e.code,
                  action: "ajax_post",
                },
                success: function (t) {
                  void 0 !== t.status &&
                    !0 === t.status &&
                    (i.$store.dispatch("userDataModule/fetchUserData", {}),
                    (i.disconnect = !0),
                    displayMessage(t.message));
                },
              });
            }
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9);
      e.a = {
        name: "GoogleMeet",
        components: {},
        validations: { googlemeet: { video_price: { required: r.required } } },
        data: function () {
          return {
            data: {},
            disconnect: !1,
            googleSignInImage: "",
            googlemeetloading: !1,
            googlemeetSubmitted: !1,
            googlemeet: { video_price: 0, telemed_service_id: 0, doctor_id: 0 },
          };
        },
        mounted: function () {
          ["doctor"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.googleSignInImage =
              window.pluginBASEURL + "assets/images/google.svg"),
            (this.googlemeet = {
              video_price: this.userData.doctor_telemed_price,
              telemed_service_id: this.userData.telemed_service_id,
              doctor_id: this.userData.ID,
            });
        },
        methods: {
          handleGoogleMeetConnect: function () {
            var e = this;
            ("Yes" == this.userData.is_zoom_server_to_server_oauth_enabled &&
              "true" ===
                this.userData.is_enable_doctor_zoom_server_to_server_config) ||
            ("on" == this.userData.is_zoom_config_enabled &&
              "on" === this.userData.is_enable_doctor_zoom_telemed)
              ? (t("#connect_doctor_zoom_btn_" + this.userData.ID).prop(
                  "disabled",
                  !0
                ),
                t.confirm({
                  title: this.formTranslation.common.are_you_sure_lbl,
                  content:
                    this.formTranslation.common.google_meet_confirmation_lbl,
                  type: "orange",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-warning",
                      keys: ["enter"],
                      action: function () {
                        e.connectGoogleMeet();
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        t("#connect_doctor_zoom_btn_" + e.userData.ID).prop(
                          "disabled",
                          !1
                        );
                      },
                    },
                  },
                }))
              : this.connectGoogleMeet();
          },
          connectGoogleMeet: function () {
            var t = this;
            google.accounts.oauth2
              .initCodeClient({
                client_id: this.userData.googlemeet_client_id,
                scope: "https://www.googleapis.com/auth/calendar",
                callback: function (e) {
                  e.code && t.signInCallback({ code: e.code });
                },
              })
              .requestCode();
          },
          disconnectServerOauth: function () {
            var t = this;
            Object(i.a)("disconnect_doctor_zoom_oauth", {
              authentication_token: this.zoomOauthAuthorizationCode,
            }).then(function (e) {
              t.$store.dispatch("userDataModule/fetchUserData");
            });
          },
          disconnectZoomServerToServerOauth: function () {
            var t = this;
            Object(i.b)("disconnect_doctor_zoom_server_to_server_oauth", {
              authentication_token: this.zoomOauthAuthorizationCode,
            }).then(function (e) {
              t.$store.dispatch("userDataModule/fetchUserData");
            });
          },
          closeConnection: function () {
            var t = this,
              e = this.userData.ID;
            Object(i.b)("diconnect_meet_doctor", { doctor_id: e })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.$store.dispatch("userDataModule/fetchUserData", {}),
                  (t.disconnect = !1),
                  displayMessage(e.data.message));
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          signInCallback: function (e) {
            if (e.code) {
              var n = this.userData.ID,
                i = this;
              t.ajax({
                url: window.request_data.ajaxurl,
                type: "POST",
                data: {
                  route_name: "connect_meet_doctor",
                  doctor_id: n,
                  _ajax_nonce: window.request_data.nonce,
                  code: e.code,
                  action: "ajax_post",
                },
                success: function (t) {
                  void 0 !== t.status &&
                    !0 === t.status &&
                    (i.$store.dispatch("userDataModule/fetchUserData", {}),
                    (i.disconnect = !0),
                    displayMessage(t.message),
                    "on" == i.userData.is_enable_doctor_zoom_telemed &&
                      i.disconnectServerOauth(),
                    "true" ===
                      i.userData
                        .is_enable_doctor_zoom_server_to_server_config &&
                      i.disconnectZoomServerToServerOauth());
                },
              });
            }
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i,
        r,
        o = n(8),
        a = n(9);
      function s() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function o(n, i, r, o) {
          var s = i && i.prototype instanceof c ? i : c,
            d = Object.create(s.prototype);
          return (
            l(
              d,
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
                  for (
                    s = n, l = i, e = 0;
                    !u && c && !r && e < d.length;
                    e++
                  ) {
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
            d
          );
        }
        var a = {};
        function c() {}
        function d() {}
        function u() {}
        e = Object.getPrototypeOf;
        var p = [][i]
            ? e(e([][i]()))
            : (l((e = {}), i, function () {
                return this;
              }),
              e),
          h = (u.prototype = c.prototype = Object.create(p));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), l(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(h)),
            t
          );
        }
        return (
          (d.prototype = u),
          l(h, "constructor", u),
          l(u, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          l(u, r, "GeneratorFunction"),
          l(h),
          l(h, r, "Generator"),
          l(h, i, function () {
            return this;
          }),
          l(h, "toString", function () {
            return "[object Generator]";
          }),
          (s = function () {
            return { w: o, m: f };
          })()
        );
      }
      function l(t, e, n, i) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (l = function (t, e, n, i) {
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
              l(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            };
            o("next", 0), o("throw", 1), o("return", 2);
          }
        })(t, e, n, i);
      }
      function c(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            l = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(i, r);
      }
      e.a = {
        name: "ZoomOAuthConfig",
        components: {},
        data: function () {
          return {
            data: {},
            disconnect: !1,
            loading: !1,
            googleSignInImage: "",
            zoom_telemedloading: !1,
            zoomTelemedSubmitted: !1,
            zoom_telemed: {
              video_price: 0,
              telemed_service_id: 0,
              doctor_id: 0,
            },
            zoomConfigData: {
              redirect_url: "",
              client_id: "",
              client_secret: "",
            },
            enableServerToServerOauth: "No",
          };
        },
        validations: {
          zoomConfigData: {
            redirect_url: { required: a.required },
            client_id: { required: a.required },
            client_secret: { required: a.required },
          },
        },
        mounted: function () {
          this.getZoomTelemedConfig();
        },
        methods: {
          copyRedirectURL:
            ((i = s().m(function e(n) {
              var i;
              return s().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        (i = t("<textarea>")),
                          t("body").append(i),
                          i.val(this.zoomConfigData.redirect_url).select(),
                          document.execCommand("copy"),
                          i.remove();
                      case 1:
                        return e.a(2);
                    }
                },
                e,
                this
              );
            })),
            (r = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = i.apply(t, e);
                function a(t) {
                  c(o, n, r, a, s, "next", t);
                }
                function s(t) {
                  c(o, n, r, a, s, "throw", t);
                }
                a(void 0);
              });
            }),
            function (t) {
              return r.apply(this, arguments);
            }),
          handleCalenderSubmit: function () {
            var t,
              e = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (1 == this.userData.addOns.telemed) {
              if (
                "Yes" ===
                (null === (t = this.zoomConfigData) || void 0 === t
                  ? void 0
                  : t.enableCal)
              ) {
                var i, r, a;
                if (
                  n &&
                  (null === (i = this.zoomConfigData) ||
                    void 0 === i ||
                    !i.redirect_url ||
                    null === (r = this.zoomConfigData) ||
                    void 0 === r ||
                    !r.client_id ||
                    null === (a = this.zoomConfigData) ||
                    void 0 === a ||
                    !a.client_secret)
                )
                  return;
                if (
                  ((this.zoomTelemedSubmitted = !0),
                  this.$v.$touch(),
                  this.$v.zoomConfigData.$invalid)
                )
                  return;
                this.zoomTelemedSubmitted = !1;
              }
              (this.loading = !0),
                "Yes" === this.zoomConfigData.enableCal &&
                  "Yes" === this.enableServerToServerOauth &&
                  ((this.enableServerToServerOauth = "No"),
                  this.handleServerToServerOauthSubmit()),
                Object(o.b)(
                  "zoom_telemed_save_oauth_config",
                  this.zoomConfigData
                )
                  .then(function (t) {
                    (e.zoomTelemedSubmitted = !1),
                      void 0 !== t.data.success && !0 === t.data.success
                        ? displayMessage(t.data.data.message)
                        : displayErrorMessage(t.data.data.message);
                  })
                  .catch(function (t) {
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                  })
                  .finally(function () {
                    e.loading = !1;
                  });
            }
          },
          handleServerToServerOauthSubmit: function () {
            var t = this;
            1 == this.userData.addOns.telemed &&
              ("Yes" === this.enableServerToServerOauth &&
                "Yes" === this.zoomConfigData.enableCal &&
                ((this.zoomConfigData.enableCal = "No"),
                this.handleCalenderSubmit()),
              Object(o.b)("save_zoom_telemed_server_to_server_oauth_status", {
                status: this.enableServerToServerOauth,
              })
                .then(function (t) {
                  void 0 !== t.data.success && !0 === t.data.success
                    ? displayMessage(t.data.data.message)
                    : displayErrorMessage(t.data.data.message);
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                }));
          },
          getZoomTelemedConfig: function () {
            var t = this;
            (this.formLoader = !0),
              Object(o.a)("get_zoom_telemed_config")
                .then(function (e) {
                  void 0 !== e.data.success &&
                    !0 === e.data.success &&
                    ((t.zoomConfigData = e.data.data),
                    (t.enableServerToServerOauth =
                      e.data.data.enableServerToServerOauth)),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  t.formLoader = !1;
                });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        name: "ZoomServerOauth",
        components: {},
        data: function () {
          return { data: {}, DoctorConnectButton: !0, zoomSignInImage: "" };
        },
        mounted: function () {
          ["doctor"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.zoomSignInImage =
              window.pluginBASEURL + "assets/images/logo-zoom-blue.svg");
        },
        methods: {
          connect: function () {
            var e = this;
            this.userData.is_enable_doctor_gmeet
              ? t.confirm({
                  title: "Enable Zoom Telemed ",
                  content:
                    "Note: You can use one meeting service at the time. We are disabling Google Meet Service.",
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        e.connectDoctorServerOauth();
                      },
                    },
                    cancel: {
                      text: this.formTranslation.common.cancel,
                      action: function () {
                        e.$store.dispatch("userDataModule/fetchUserData");
                      },
                    },
                  },
                })
              : this.connectDoctorServerOauth();
          },
          disconnect: function () {
            var t = this,
              e = this;
            Object(i.b)("disconnect_doctor_serveroauth")
              .then(function (n) {
                void 0 !== n.status && !0 === n.data.success
                  ? ((t.DoctorConnectButton = !0),
                    displayMessage(n.data.data.message),
                    e.$store.dispatch("userDataModule/fetchUserData"))
                  : displayErrorMessage(n.data.data.message);
              })
              .catch(function (t) {});
          },
          disconnectMeet: function () {
            var t = this,
              e = this.userData.ID;
            Object(i.b)("diconnect_meet_doctor", { doctor_id: e })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  t.$store.dispatch("userDataModule/fetchUserData", {});
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          connectDoctorServerOauth: function () {
            var t = this;
            "on" == this.userData.is_enable_doctor_gmeet &&
              this.disconnectMeet();
            var e = this;
            Object(i.b)("connect_doctor_serveroauth")
              .then(function (n) {
                void 0 !== n.status && !0 === n.data.success
                  ? (displayMessage(n.data.data.message),
                    (t.DoctorConnectButton = !1),
                    e.$store.dispatch("userDataModule/fetchUserData"),
                    t.generateDoctorServerOauthCode())
                  : displayErrorMessage(n.data.data.message);
              })
              .catch(function (t) {});
          },
          generateDoctorServerOauthCode: function () {
            var t = this,
              e = this;
            Object(i.b)("generate_doctor_serveroauth_code", {
              grant_type: "account_credentials",
            })
              .then(function (n) {
                void 0 !== n.status && !0 === n.data.success
                  ? (displayMessage(n.data.data.message),
                    (t.DoctorConnectButton = !1),
                    e.$store.dispatch("userDataModule/fetchUserData"))
                  : displayErrorMessage(n.data.data.message);
              })
              .catch(function (t) {});
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(9);
      e.a = {
        name: "generalSetting",
        components: {},
        data: function () {
          return {
            serverOauthConfig: {
              enableServerOAuth: !1,
              client_id: "",
              client_secret: "",
              account_id: "",
            },
            loading: !1,
            submitted: !1,
            disconnect: !1,
            ZoomServerOAuthSubmitted: !1,
            connectButton: "",
          };
        },
        validations: {
          serverOauthConfig: {
            client_id: { required: r.required },
            client_secret: { required: r.required },
            account_id: { required: r.required },
          },
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.zoomSignInImage =
              window.pluginBASEURL + "assets/images/logo-zoom-blue.svg"),
            (this.serverOauthConfig = this.defaultserverOauthConfig()),
            this.getServerOauthConfig(),
            this.getModule();
        },
        methods: {
          handleserverOauth: function () {
            var e = this;
            if (
              1 == this.userData.addOns.telemed &&
              ((this.submitted = !0),
              this.$v.$touch(),
              !this.$v.serverOauthConfig.$invalid)
            ) {
              var n = t("#btn-google-submit").find("i");
              n.removeClass("fa fa-save "),
                n.addClass("fa fa-spinner fa-spin"),
                Object(i.b)(
                  "save_doctor_server_Oauth_configuration",
                  this.serverOauthConfig
                )
                  .then(function (t) {
                    (e.submitted = !1),
                      n.removeClass("fa fa-spinner fa-spin"),
                      n.addClass("fa fa-save"),
                      void 0 !== t.data.status && !0 === t.data.status
                        ? displayMessage(t.data.message)
                        : displayErrorMessage(t.data.message);
                  })
                  .catch(function (t) {
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                  });
            }
          },
          defaultserverOauthConfig: function () {
            return {
              enableServerOAuth: !1,
              client_id: "",
              client_secret: "",
              account_id: "",
            };
          },
          getServerOauthConfig: function () {
            var t = this;
            Object(i.a)("get_server_auth_config", {})
              .then(function (e) {
                void 0 !== e.data.data &&
                  void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  "" !== e.data.data &&
                  ((t.serverOauthConfig =
                    e.data.data || t.defaultserverOauthConfig()),
                  "1" === t.serverOauthConfig.enableServerOAuth ||
                  1 === t.serverOauthConfig.enableServerOAuth ||
                  !0 === t.serverOauthConfig.enableServerOAuth
                    ? ((t.serverOauthConfig.enableServerOAuth = !0),
                      (t.connectButton = !1))
                    : ((t.serverOauthConfig.enableServerOAuth = !1),
                      (t.connectButton = !0))),
                  (t.connectButton = !0);
              })
              .catch(function (e) {
                t.formLoader = !1;
              });
          },
          connectServerOauth: function () {
            var t = this,
              e = this;
            (this.serverOauthConfig.grant_type = "account_credentials"),
              Object(i.b)("connect_admin_zoom_oauth", {
                code: this.zoomOauthAuthorizationCode,
                grant_type: "account_credentials",
              })
                .then(function (n) {
                  void 0 !== n.status && !0 === n.data.success
                    ? (displayMessage(n.data.data.message),
                      (t.connectButton = !1),
                      t.getServerOauthConfig(),
                      e.$store.dispatch("userDataModule/fetchUserData"))
                    : displayErrorMessage(n.data.data.message);
                })
                .catch(function (t) {});
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
          userId: function () {
            return this.$store.state.userDataModule.user.ID;
          },
          teleMedStatus: function () {
            return this.$store.state.userDataModule.user.teleMedStatus;
          },
        },
        watch: {
          zoomOauthAuthorizationCode: function () {
            this.zoomOauthAuthorizationCode.length > 0 &&
              this.connectServerOauth();
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        data: function () {
          return {
            isLoading: !0,
            taxList: { column: [], data: [] },
            serverParams: {
              columnFilters: { specialties: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
          };
        },
        mounted: function () {
          ["administrator", "clinic_admin"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.init();
        },
        methods: {
          init: function () {
            (this.taxList = this.defaultTaxList()),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions()),
              this.userData.addOns.kiviPro && this.getTaxData();
          },
          defaultGlobalCheckboxApplyData: function () {
            return { action_perform: "delete", module: "tax", data: [] };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            return [
              {
                value: "active",
                label: this.formTranslation.service.dt_active,
              },
              {
                value: "inactive",
                label: this.formTranslation.service.dt_inactive,
              },
              {
                value: "delete",
                label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
              },
            ];
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.b)(
                "module_wise_multiple_data_update",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getTaxData())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getTaxData();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          defaultTaxList: function () {
            return {
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "name",
                  label: this.formTranslation.common.name,
                  width: "200px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.name,
                    filterValue: "",
                  },
                },
                {
                  field: "tax_rate",
                  label: this.formTranslation.common.tax_rate,
                  width: "200px",
                  filterOptions: { enabled: !1 },
                },
                {
                  field: "clinic_name",
                  label: this.formTranslation.patient_encounter.dt_lbl_clinic,
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient_encounter
                        .dt_plh_fltr_by_clinic,
                    filterValue: "",
                  },
                },
                {
                  field: "doctor_name",
                  label: this.formTranslation.service.dt_lbl_doctor,
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.service.dt_plh_fltr_by_doc,
                    filterValue: "",
                  },
                },
                {
                  field: "service_name",
                  label: this.formTranslation.service.service_name,
                  sortable: !1,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.service.dt_plh_name_fltr,
                    filterValue: "",
                  },
                },
                {
                  field: "added_by",
                  label: "Added by",
                  width: "200px",
                  hidden: !0,
                  sortable: !1,
                  filterOptions: { enabled: !1 },
                },
                {
                  field: "status",
                  label: this.formTranslation.clinic.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "1", text: this.formTranslation.common.active },
                      {
                        value: "0",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                    filterValue: "",
                  },
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.clinic.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          getTaxData: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.a)("tax_list", this.serverParams)
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.isLoading = !1),
                        (t.taxList.data = e.data.data),
                        (t.totalRows = e.data.total_rows))
                      : ((t.isLoading = !1),
                        (t.taxList.data = []),
                        (t.totalRows = 0));
                })
                .catch(function (e) {
                  (t.isLoading = !1), (t.pageLoader = !1);
                });
          },
          deleteTaxData: function (e) {
            var n = this,
              r = t("#user_delete_" + e);
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content: this.formTranslation.common.delete_tax,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    r.prop("disabled", !0),
                      t(r).find("i").removeClass("fa fa-trash"),
                      t(r).find("i").addClass("fa fa-sync fa-spin"),
                      Object(i.b)("tax_delete", { id: e })
                        .then(function (e) {
                          r.prop("disabled", !1),
                            t(r).find("i").removeClass("fa fa-sync fa-spin"),
                            t(r).find("i").addClass("fa fa-trash"),
                            void 0 !== e.data.status && !0 === e.data.status
                              ? (n.getTaxData(), displayMessage(e.data.message))
                              : displayErrorMessage(e.data.message);
                        })
                        .catch(function (e) {
                          r.prop("disabled", !1),
                            t(r).find("i").removeClass("fa fa-sync fa-spin"),
                            t(r).find("i").addClass("fa fa-trash"),
                            displayErrorMessage(
                              n.formTranlation.common.internal_server_error
                            );
                        });
                  },
                },
                cancel: { text: this.formTranslation.common.cancel },
              },
            });
          },
          confirmDelete: function () {
            var e = this,
              n = "";
            "delete" === this.globalCheckboxApplyData.action_perform
              ? (n = this.formTranslation.common.py_delete_clinic)
              : ("active" !== this.globalCheckboxApplyData.action_perform &&
                  "inactive" !== this.globalCheckboxApplyData.action_perform) ||
                (n = this.formTranslation.common.py_status),
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: n,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      e.globalCheckboxApply();
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
          },
          printTaxRate: function (t) {
            return -1 == t.indexOf("%")
              ? this.$store.state.userDataModule.user.clinic_currency_detail
                  .prefix + t
              : t;
          },
        },
        computed: {
          userData: function () {
            return void 0 !== this.$store.state.userDataModule &&
              void 0 !== this.$store.state.userDataModule.user
              ? this.$store.state.userDataModule.user
              : [];
          },
          teleMedEn: function () {
            return this.userData.addOns.telemed;
          },
          module_types: function () {
            return [];
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      e.a = {
        data: function () {
          return {
            pageLoader: !0,
            customFormList: { column: [], data: [] },
            customFormRequest: {},
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            moduleType: [
              { value: "doctor_module", text: "Doctor module" },
              { value: "patient_module", text: "Patient module" },
              {
                value: "patient_encounter_module",
                text: "Patient encounter module",
              },
              { value: "appointment_module", text: "Appointment module" },
            ],
            request_status: "off",
          };
        },
        mounted: function () {
          ["patient", "receptionist", "doctor"].includes(this.getUserRole()) &&
            this.$router.push({ name: "403" }),
            (this.moduleType = [
              {
                value: "doctor_module",
                text: this.formTranslation.common.doctor_module,
              },
              {
                value: "patient_module",
                text: this.formTranslation.common.patient_module,
              },
              {
                value: "patient_encounter_module",
                text: this.formTranslation.common.patient_encounter_module,
              },
              {
                value: "appointment_module",
                text: this.formTranslation.common.appointment_module,
              },
            ]),
            this.init(),
            this.moduleType.unshift({
              value: "",
              text: this.formTranslation.common.all,
            }),
            this.getModule();
        },
        methods: {
          init: function () {
            (this.customFormList = this.defaultCustomFormData()),
              this.getCustomFormList();
          },
          getCustomFormList: function () {
            var t = this;
            Object(i.a)("custom_form_list", this.serverParams)
              .then(function (e) {
                (t.pageLoader = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.customFormList.data = e.data.data),
                      (t.totalRows = e.data.total))
                    : ((t.customFormList.data = e.data.data),
                      (t.totalRows = 0));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getCustomFormList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          defaultCustomFormData: function () {
            return {
              data: [],
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "name",
                  label: this.formTranslation.common.name,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.name,
                    filterValue: "",
                  },
                },
                {
                  field: "module_type",
                  label: this.formTranslation.custom_field.dt_lbl_type,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.custom_field.dt_plh_fltr_by_type,
                    filterDropdownItems: this.moduleType,
                    filterValue: "",
                  },
                },
                {
                  field: "status",
                  label: this.formTranslation.service.dt_lbl_status,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterDropdownItems: [
                      { value: "", text: this.formTranslation.common.all },
                      { value: "1", text: this.formTranslation.common.active },
                      {
                        value: "0",
                        text: this.formTranslation.common.inactive,
                      },
                    ],
                  },
                  html: !0,
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.custom_field.dt_lbl_action,
                },
              ],
            };
          },
          deleteCustomFormData: function (e) {
            var n = this;
            void 0 !== this.customFormList.data[e - 1] &&
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content: this.formTranslation.common.py_delete_field,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.delete_form,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      Object(i.b)("custom_form_delete", {
                        id: n.customFormList.data[e - 1].id,
                      })
                        .then(function (t) {
                          void 0 !== t.data.status &&
                            !0 === t.data.status &&
                            (n.customFormList.data.splice(e - 1, 1),
                            displayMessage(t.data.message));
                        })
                        .catch(function (t) {
                          void 0 !== t.response.data &&
                          void 0 !== t.response.data.message
                            ? displayErrorMessage(t.response.data.message)
                            : displayErrorMessage(
                                n.formTranslation.common.internal_server_error
                              );
                        });
                    },
                  },
                  cancel: function () {},
                },
              });
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
          getModuleTypeText: function (t) {
            var e = this.moduleType.find(function (e) {
              return e.value === t;
            });
            return e ? e.text : t;
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        filters: {
          typeFiled: function (t) {
            var e = "";
            return (
              "" !== t &&
                null != t &&
                "" !== t &&
                (e = (e = t).replace(/_/gi, " ")),
              e
            );
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8),
        r = n(24),
        o = n(143),
        a = n.n(o),
        s = n(66);
      function l(t) {
        return (l =
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
      function c(t, e) {
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
      function d(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != l(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != l(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == l(e) ? e : e + "";
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
      e.a = {
        components: { draggable: a.a, CustomForm: s.a },
        data: function () {
          return {
            cardTitle: "",
            moduleType: [
              { id: "doctor_module", label: "Doctor module" },
              { id: "patient_module", label: "Patient module" },
              {
                id: "patient_encounter_module",
                label: "Patient encounter module",
              },
              { id: "appointment_module", label: "Appointment module" },
            ],
            customFormData: {},
            fieldData: {},
            fieldOptions: [],
            formLoading: !1,
            inputType: [],
            file_upload_type_options: [],
            file_upload_type_status: !0,
            controllerType: "formSetting",
            fieldValidation: {
              label: !1,
              type: !1,
              options: !1,
              file_upload_type: !0,
            },
            fieldCount: 2,
            titleList: [],
            editMode: !1,
            load: !0,
            patientCustomFormModal: !1,
            customFormLoading: !1,
            all_roles: [],
          };
        },
        mounted: function () {
          (this.cardTitle = this.formTranslation.common.add_custom_form),
            (this.inputType = [
              {
                id: "text",
                label: this.formTranslation.common.field_text,
                icon: "fas fa-font",
              },
              {
                id: "number",
                label: this.formTranslation.common.field_number,
                icon: "fas fa-hashtag",
              },
              {
                id: "textarea",
                label: this.formTranslation.common.field_textarea,
                icon: "fas fa-align-left",
              },
              {
                id: "file_upload",
                label: this.formTranslation.common.field_file_upload,
                icon: "fas fa-upload",
              },
              {
                id: "multi_select",
                label: this.formTranslation.common.field_multi_select,
                icon: "fas fa-check-double",
              },
              {
                id: "select",
                label: this.formTranslation.common.field_select,
                icon: "fas fa-list",
              },
              {
                id: "radio",
                label: this.formTranslation.common.field_radio,
                icon: "fas fa-dot-circle",
              },
              {
                id: "checkbox",
                label: this.formTranslation.common.field_checkbox,
                icon: "fas fa-check-square",
              },
              {
                id: "calendar",
                label: this.formTranslation.common.field_calendar,
                icon: "fas fa-calendar-alt",
              },
              {
                id: "heading",
                label: this.formTranslation.common.field_heading,
                icon: "fas fa-heading",
              },
              {
                id: "hr",
                label: this.formTranslation.common.field_hr,
                icon: "fas fa-horizontal-rule",
              },
            ]),
            (this.titleList = {
              fieldList: this.formTranslation.common.form_field_list,
              formTitle: this.formTranslation.common.edit_form_name,
              formSetting: this.formTranslation.common.form_settings,
              fieldEdit: this.formTranslation.common.edit_form_field,
            }),
            (this.customFormData = this.defaultCustomFormData()),
            this.init(),
            (this.load = !1);
        },
        methods: {
          init: function () {
            var t = this;
            (this.moduleType = [
              {
                id: "doctor_module",
                label: this.formTranslation.common.doctor_module,
              },
              {
                id: "patient_module",
                label: this.formTranslation.common.patient_module,
              },
              {
                id: "patient_encounter_module",
                label: this.formTranslation.common.patient_encounter_module,
              },
              {
                id: "appointment_module",
                label: this.formTranslation.common.appointment_module,
              },
            ]),
              this.fileUploadData(),
              this.$route.params.id &&
                ((this.editMode = !0),
                (this.cardTitle =
                  this.formTranslation.custom_form.lbl_edit_custom_form),
                (this.customFormLoading = !0),
                Object(i.a)("custom_form_edit", { id: this.$route.params.id })
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.customFormData = e.data.data),
                      (t.fieldCount = t.customFormData.form_data.length),
                      (t.customFormLoading = !1));
                  })
                  .catch(function (e) {
                    displayErrorMessage(
                      t.formTranslation.custom_field.record_not_found
                    );
                  }));
          },
          defaultCustomFormData: function () {
            return {
              name: {
                text: "Form name",
                color: "text-primary",
                align: "text-center",
                tag: "h2",
                icon: "fas fa-book-medical",
              },
              module_type: {
                id: "appointment_module",
                label: "Appointment module",
              },
              form_data: [
                d(
                  {
                    label: "Example field 1",
                    type: { id: "text", label: "Text" },
                    name: "",
                    options: [],
                    is_required: !0,
                    placeholder: "Enter field 1",
                    class: "",
                  },
                  "name",
                  "custom-form-field-1"
                ),
                d(
                  {
                    label: "example field 2",
                    type: { id: "checkbox", label: "Checkbox" },
                    name: "",
                    options: [
                      { id: "Yes", text: "Yes" },
                      { id: "No", text: "No" },
                    ],
                    is_required: !0,
                    placeholder: "",
                    class: "",
                  },
                  "name",
                  "custom-form-field-2"
                ),
              ],
              status: { id: 1, label: this.formTranslation.common.active },
              conditions: {
                appointment_status: [
                  { id: "1", label: this.formTranslation.appointments.booked },
                  {
                    id: "2",
                    label: this.formTranslation.appointments.check_out,
                  },
                  {
                    id: "4",
                    label: this.formTranslation.appointments.check_in,
                  },
                ],
                show_mode: [
                  { id: "encounter", label: "Encounter" },
                  { id: "appointment", label: "Appointment" },
                ],
              },
            };
          },
          addOption: function (t) {
            var e = { id: t, text: t };
            this.fieldOptions.push(e), this.fieldData.options.push(e);
          },
          defaultFieldData: function () {
            var t = this;
            ++this.fieldCount;
            var e = "custom-form-field-" + this.fieldCount;
            if (
              this.customFormData.form_data.some(function (t) {
                return t.name === e;
              })
            )
              for (
                ;
                this.customFormData.form_data.some(function (e) {
                  return e.name === "custom-form-field-" + t.fieldCount;
                });

              )
                ++this.fieldCount;
            return d(
              {
                label: "",
                type: "",
                name: "",
                options: [],
                is_required: !0,
                placeholder: "",
                class: "",
              },
              "name",
              "custom-form-field-" + this.fieldCount
            );
          },
          showErrorField: function (t, e) {
            (this.fieldData = t),
              displayErrorMessage(e),
              (this.controllerType = "fieldEdit");
          },
          handleSubmit: function () {
            var t = this;
            if (
              this.customFormData.form_data &&
              this.customFormData.form_data.length
            )
              if (
                this.customFormData.module_type &&
                this.customFormData.module_type.id
              ) {
                for (
                  var e = this.customFormData.form_data.length, n = 0;
                  n < e;
                  n++
                ) {
                  var o = this.customFormData.form_data[n];
                  if (!o.label)
                    return void this.showErrorField(
                      o,
                      this.formTranslation.common.please_enter_field_label
                    );
                  if (!o.type || !o.type.id)
                    return void this.showErrorField(
                      o,
                      this.formTranslation.common.please_select_field_type
                    );
                  if (
                    "file_upload" === o.type.id &&
                    (!o.file_upload_type || o.file_upload_type.length < 1)
                  )
                    return void this.showErrorField(
                      o,
                      this.formTranslation.common.please_select_file_types
                    );
                  if (
                    ["select", "checkbox", "radio", "multi_select"].includes(
                      o.type.id
                    ) &&
                    (!o.options || o.options.length < 1)
                  )
                    return void this.showErrorField(
                      o,
                      this.formTranslation.common.please_enter_options
                    );
                }
                (this.formLoading = !0),
                  Object(r.n)("customFormDataForm") &&
                    Object(i.b)("custom_form_save", this.customFormData)
                      .then(function (e) {
                        (t.formLoading = !1),
                          void 0 !== e.data.status && !0 === e.data.status
                            ? (displayMessage(e.data.message), t.$router.go(-1))
                            : displayErrorMessage(e.data.message);
                      })
                      .catch(function (e) {
                        (t.formLoading = !1),
                          displayErrorMessage(
                            t.formTranslation.common.internal_server_error
                          );
                      });
              } else
                displayErrorMessage(
                  this.formTranslation.common.please_select_module_type
                );
            else
              displayErrorMessage(
                this.formTranslation.common.please_add_form_fields
              );
          },
          fileUploadData: function () {
            var t = this;
            Object(i.a)("custom_field_file_upload_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.file_upload_type_options = e.data.data.file_type_options),
                  e.data.all_roles.forEach(function (e) {
                    t.all_roles.push({ id: e.id, label: e.name });
                  }));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          addNewField: function (t) {
            var e = this.defaultFieldData();
            (e.type = { id: t.id, label: t.label }),
              (e.label = "Label"),
              "heading" === e.type.id
                ? ((e.is_required = !1), (e.tag = "h2"))
                : "hr" === e.type.id &&
                  ((e.is_required = !1), (e.class = "mb-0")),
              this.customFormData.form_data.push(
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? c(Object(n), !0).forEach(function (e) {
                          d(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : c(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({}, e)
              ),
              this.editFormFieldData(
                this.customFormData.form_data[
                  this.customFormData.form_data.length - 1
                ]
              );
          },
          deleteField: function (e) {
            var n = this;
            this.editMode
              ? t.confirm({
                  title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                  content: "Delete form field",
                  type: "red",
                  buttons: {
                    ok: {
                      text: this.formTranslation.common.yes,
                      btnClass: "btn-danger",
                      keys: ["enter"],
                      action: function () {
                        n.customFormData.form_data.splice(e, 1),
                          (n.controllerType = "fieldList");
                      },
                    },
                    cancel: { text: this.formTranslation.common.cancel },
                  },
                })
              : (this.customFormData.form_data.splice(e, 1),
                (this.controllerType = "fieldList"));
          },
          editFormFieldData: function (t) {
            (this.fieldData = t), (this.controllerType = "fieldEdit");
          },
          handlePrevClick: function () {
            var t = Object.keys(this.titleList),
              e = t.indexOf(this.controllerType);
            e > 0
              ? ((this.controllerType = t[e - 1]),
                "fieldEdit" === this.controllerType &&
                  (this.customFormData.form_data.length
                    ? (this.fieldData = this.customFormData.form_data[0])
                    : (this.controllerType = "fieldList")))
              : (this.controllerType = "formSetting");
          },
          handleNextClick: function () {
            var t = Object.keys(this.titleList),
              e = t.indexOf(this.controllerType);
            e < t.length - 1
              ? ((this.controllerType = t[e + 1]),
                "fieldEdit" === this.controllerType &&
                  (this.customFormData.form_data.length
                    ? (this.fieldData = this.customFormData.form_data[0])
                    : (this.controllerType = "fieldList")))
              : (this.controllerType = "fieldList");
          },
          openPreview: function () {},
        },
        computed: {
          selectDisabled: function () {
            return !(
              this.fieldData.type &&
              this.fieldData.type.id &&
              ["radio", "checkbox", "select", "multi_select"].includes(
                this.fieldData.type.id
              )
            );
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          selected_field_type_file_upload: function () {
            return (
              this.fieldData.type && "file_upload" === this.fieldData.type.id
            );
          },
          nameClass: function () {
            return (
              (this.customFormData.name && this.customFormData.name.color
                ? this.customFormData.name.color
                : "") +
              " " +
              (this.customFormData.name && this.customFormData.name.align
                ? this.customFormData.name.align
                : "")
            );
          },
          roles: function () {
            return this.$store.state.clinic ? this.$store.state.clinic : [];
          },
          clinics: function () {
            return this.$store.state.clinic ? this.$store.state.clinic : [];
          },
        },
        watch: {
          "fieldData.label": function (t) {
            this.fieldValidation.label = !!t;
          },
          "fieldData.type": function (t) {
            t && t.id
              ? (this.fieldValidation.type = !0)
              : (this.fieldValidation.type = !1);
          },
          "fieldData.options": function (t) {
            this.fieldData &&
            this.fieldData.type &&
            this.fieldData.type.id &&
            ["radio", "checkbox", "select", "multi_select"].includes(
              this.fieldData.type.id
            ) &&
            ("" === t || t.length < 1)
              ? (this.fieldValidation.options = !1)
              : (this.fieldValidation.options = !0);
          },
          "fieldData.file_upload_type": function (t) {
            this.fieldData.type &&
            this.fieldData.type.id &&
            ["file_upload"].includes(this.fieldData.type.id) &&
            (!t || t.length < 1)
              ? (this.fieldValidation.file_upload_type = !1)
              : (this.fieldValidation.file_upload_type = !0);
          },
          "customFormData.module_type.id": function (t) {},
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(9),
        r = n(8);
      e.a = {
        data: function () {
          return {
            submitted: !1,
            loading: !1,
            request_status: window.request_data.link_show_hide
              ? window.request_data.link_show_hide
              : "off",
            setting_data: {},
            menuOptions: [],
            positionOptions: ["top", "bottom", "left", "right"],
            themeOptions: ["BlackTheme", "WhiteTheme"],
            defaultImageDataSelected: !0,
          };
        },
        validations: {
          setting_data: {
            theme: { required: i.required },
            menu: { required: i.required },
            menuBarPosition: { required: i.required },
            defaultImageData: {
              $each: {
                name: { required: i.required },
                url: { required: i.required },
              },
            },
            replaceOrNewAfterEditImage: { required: i.required },
          },
        },
        mounted: function () {
          1 == this.userData.addOns.bodyChart &&
            (["administrator"].includes(this.getUserRole()) ||
              this.$router.push({ name: "403" }),
            (this.menuOptions = [
              { id: "crop", label: this.formTranslation.common.menu_crop },
              { id: "flip", label: this.formTranslation.common.menu_flip },
              { id: "rotate", label: this.formTranslation.common.menu_rotate },
              { id: "draw", label: this.formTranslation.common.menu_draw },
              { id: "shape", label: this.formTranslation.common.menu_shape },
              { id: "icon", label: this.formTranslation.common.menu_icon },
              { id: "text", label: this.formTranslation.common.menu_text },
              { id: "mask", label: this.formTranslation.common.menu_mask },
              { id: "filter", label: this.formTranslation.common.menu_filter },
            ]),
            (this.setting_data = this.defaultSettingData()),
            1 == this.userData.addOns.bodyChart && this.getSettingData());
        },
        methods: {
          defaultSettingData: function () {
            return {
              theme: "WhiteTheme",
              replaceOrNewAfterEditImage: "new",
              menu: this.menuOptions,
              menuBarPosition: "left",
              defaultImageData: [],
              defaultImage: -1,
            };
          },
          getSettingData: function () {
            var t = this;
            Object(r.a)("get_body_chart_setting_data", {})
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? (t.setting_data = e.data.data)
                  : displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          saveSettingData: function () {
            var t = this;
            if (1 == this.userData.addOns.bodyChart)
              if (
                ((this.loading = !0),
                (this.submitted = !0),
                this.$v.$touch(),
                this.$v.setting_data.$invalid)
              )
                this.loading = !1;
              else {
                if (
                  this.setting_data.defaultImageData.length &&
                  !this.setting_data.defaultImageData.some(function (e) {
                    return (
                      parseInt(t.setting_data.defaultImage) === parseInt(e.id)
                    );
                  })
                )
                  return (
                    (this.loading = !1),
                    void (this.defaultImageDataSelected = !1)
                  );
                (this.submitted = !1),
                  Object(r.b)("save_body_chart_setting_data", {
                    data: this.setting_data,
                  })
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
              }
          },
          addNewImage: function () {
            (this.setting_data.defaultImage = -1),
              this.setting_data.defaultImageData.push({
                name: "",
                id: "",
                url: "",
                filename: "",
                extension: "",
                mime: "",
              });
          },
          removeImage: function (e) {
            var n = this;
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content: this.formTranslation.common.image_delete_confirm_message,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    n.setting_data.defaultImageData.splice(e, 1);
                  },
                },
                cancel: { text: this.formTranslation.common.cancel },
              },
            });
          },
          fileUpload: function (t) {
            var e = this,
              n = kivicareCustomImageUploader(
                this.formTranslation,
                "custom_field"
              );
            n.on("select", function () {
              var i = n.state().get("selection").first().toJSON();
              e.setting_data.defaultImageData.some(function (t) {
                return parseInt(t.id) === parseInt(i.id);
              })
                ? displayErrorMessage(
                    e.formTranslation.common.same_image_exist_in_template
                  )
                : e.$set(e.setting_data.defaultImageData, t, {
                    id: i.id,
                    url: i.url,
                    filename: i.filename,
                    mime: i.mime,
                    extension: i.subtype,
                    name:
                      e.setting_data.defaultImageData[t] &&
                      e.setting_data.defaultImageData[t].name
                        ? e.setting_data.defaultImageData[t].name
                        : i.name,
                  });
            }),
              n.open();
          },
          formatLabel: function (t) {
            return {
              new: this.formTranslation.common.create_new_image,
              replace: this.formTranslation.common.replace_orginal_image,
            }[t];
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(8);
      function r(t) {
        return (r =
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
      function o(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != r(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != r(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == r(e) ? e : e + "";
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
      e.a = {
        data: function () {
          return {
            bodyChartData: { column: [], data: [] },
            isLoading: !0,
            searchName: "",
            searchEmail: "",
            serverParams: {
              columnFilters: { specialties: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            encounter_data: {},
          };
        },
        mounted: function () {
          1 == this.userData.addOns.bodyChart &&
            (this.$route.params.encounter_id
              ? this.init()
              : this.$router.push({ name: "403" }));
        },
        methods: {
          init: function () {
            (this.bodyChartData = this.defaultBodyChartList()),
              (this.encounter_data = this.defaultEncounterData()),
              this.getBodyChartData(),
              (this.globalCheckboxApplyData =
                this.defaultGlobalCheckboxApplyData()),
              (this.globalCheckboxApplyDataActions =
                this.defaultGlobalCheckboxApplyDataActions());
          },
          defaultEncounterData: function () {
            var t;
            return (
              o(
                o(
                  o(
                    o(
                      o(
                        o(
                          o(
                            o(
                              o(
                                o(
                                  (t = {
                                    status: 0,
                                    id: "",
                                    encounter_date: "",
                                    clinic_id: "",
                                    doctor_id: "",
                                    patient_id: "",
                                    appointment_id: "",
                                    description: "",
                                  }),
                                  "status",
                                  ""
                                ),
                                "added_by",
                                ""
                              ),
                              "created_at",
                              ""
                            ),
                            "template_id",
                            null
                          ),
                          "doctor_name",
                          ""
                        ),
                        "patient_name",
                        ""
                      ),
                      "patient_email",
                      ""
                    ),
                    "clinic_name",
                    ""
                  ),
                  "patient_unique_id",
                  ""
                ),
                "patient_address",
                ""
              ),
              o(
                o(o(t, "custom_forms", []), "doctor_signature", ""),
                "custom_fields",
                []
              )
            );
          },
          getBodyChartData: function () {
            var t = this;
            (this.serverParams.encounter_id = this.$route.params.encounter_id),
              (this.serverParams.totalRows = this.totalRows),
              Object(i.a)(
                "encounter_body_chart_data_list",
                this.serverParams,
                !1
              )
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.bodyChartData.data = e.data.data),
                      (t.totalRows = e.data.total))
                    : ((t.bodyChartData.data = []), (t.totalRows = 0)),
                    (t.encounter_data = e.data.encounter_data),
                    (t.isLoading = !1);
                })
                .catch(function (e) {
                  (t.isLoading = !1),
                    displayErrorMessage(
                      t.formTranlation.common.internal_server_error
                    );
                });
          },
          defaultGlobalCheckboxApplyData: function () {
            return { action_perform: "delete", module: "clinics", data: [] };
          },
          defaultGlobalCheckboxApplyDataActions: function () {
            return [
              {
                value: "delete",
                label: this.formTranslation.clinic_schedule.dt_lbl_dlt,
              },
            ];
          },
          confirmDelete: function () {
            var e = this;
            t.confirm({
              title: this.formTranslation.clinic_schedule.dt_are_you_sure,
              content:
                this.formTranslation.common.body_chart_delete_confirm_message,
              type: "red",
              buttons: {
                ok: {
                  text: this.formTranslation.common.yes,
                  btnClass: "btn-danger",
                  keys: ["enter"],
                  action: function () {
                    e.globalCheckboxApply();
                  },
                },
                cancel: { text: this.formTranslation.common.cancel },
              },
            });
          },
          globalCheckboxApply: function () {
            var t = this;
            (this.pageLoader = !0),
              Object(i.b)(
                "encounter_body_chart_data_delete_multiple",
                this.globalCheckboxApplyData
              )
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (displayMessage(e.data.message), t.getBodyChartData())
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  t.pageLoader = !0;
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getBodyChartData();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          defaultBodyChartList: function () {
            return {
              column: [
                {
                  field: "id",
                  label: this.formTranslation.common.id,
                  width: "80px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                  },
                },
                {
                  field: "name",
                  label: this.formTranslation.clinic.dt_lbl_name,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.clinic.dt_plh_name_filter,
                    filterValue: "",
                  },
                },
                {
                  field: "description",
                  label: this.formTranslation.appointments.description,
                  width: "200px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.common.filter_by_description,
                    filterValue: "",
                  },
                },
                {
                  field: "patient_name",
                  label: this.formTranslation.patient.patient_name,
                  filterOptions: { enabled: !1 },
                },
                {
                  field: "doctor_name",
                  label: this.formTranslation.doctor.doctor_name,
                  filterOptions: { enabled: !1 },
                },
                {
                  field: "last_update_user",
                  label: this.formTranslation.common.last_updated_by,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.common.filter_by_last_updated_by,
                    filterValue: "",
                  },
                },
                {
                  field: "actions",
                  sortable: !1,
                  label: this.formTranslation.clinic.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          deleteBodyChartData: function (e, n) {
            var r = this;
            if (void 0 !== this.bodyChartData.data[e - 1]) {
              var o = t("#user_delete_" + e);
              t.confirm({
                title: this.formTranslation.clinic_schedule.dt_are_you_sure,
                content:
                  this.formTranslation.common.body_chart_delete_confirm_message,
                type: "red",
                buttons: {
                  ok: {
                    text: this.formTranslation.common.yes,
                    btnClass: "btn-danger",
                    keys: ["enter"],
                    action: function () {
                      o.prop("disabled", !0),
                        t(o).find("i").removeClass("fa fa-trash"),
                        t(o).find("i").addClass("fa fa-sync fa-spin"),
                        Object(i.b)("encounter_body_chart_data_delete", {
                          body_chart_id: r.bodyChartData.data[e - 1].id,
                        })
                          .then(function (i) {
                            o.prop("disabled", !1),
                              t(o).find("i").removeClass("fa fa-sync fa-spin"),
                              t(o).find("i").addClass("fa fa-trash"),
                              void 0 !== i.data.status && !0 === i.data.status
                                ? (r.userData.default_clinic != n.row.id &&
                                    r.bodyChartData.data.splice(e - 1, 1),
                                  r.getBodyChartData(),
                                  displayMessage(i.data.message))
                                : displayErrorMessage(i.data.message);
                          })
                          .catch(function (e) {
                            o.prop("disabled", !1),
                              t(o).find("i").removeClass("fa fa-sync fa-spin"),
                              t(o).find("i").addClass("fa fa-trash"),
                              displayErrorMessage(
                                r.formTranlation.common.internal_server_error
                              );
                          });
                    },
                  },
                  cancel: { text: this.formTranslation.common.cancel },
                },
              });
            }
          },
          getInitials: function (t) {
            return void 0 !== t && "" !== t && null !== t
              ? t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
              : " - ";
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(627),
        r = n(628),
        o = n(34),
        a = {
          components: { SideBar: i.a, Body: r.a },
          data: function () {
            return {
              tempColor: localStorage.getItem("temp_color"),
              backgroundImage:
                "url(" +
                pluginBASEURL +
                "images/vendor/vue-phone-number-input/dist/flags.9c96e0ed.png)",
            };
          },
          watch: {
            getMode: function (t) {
              if ("true" == t) {
                document.body.classList.add("rtl");
                var e = document.getElementsByTagName("html")[0],
                  n = document.createAttribute("dir");
                (n.value = "rtl"), e.setAttributeNode(n);
              } else
                document.body.classList.remove("rtl"),
                  document
                    .getElementsByTagName("html")[0]
                    .removeAttribute("dir");
            },
            getLang: function (t) {
              this.$i18n.locale = t.id;
            },
          },
          mounted: function () {
            this.init(),
              "" !== window.request_data.current_user_role &&
                "kiviCare_patient" !== window.request_data.current_user_role &&
                this.$store.dispatch("staticDataModule/fetchStaticData", {
                  type: "static_data",
                  static_data_type: "specialization",
                }),
              this.$store.dispatch("userDataModule/fetchDefaultClinic"),
              this.$store.dispatch("logout_redirect_url", {
                data: window.request_data.logout_redirect_url,
              }),
              this.$store.commit("appointmentModule/FILE_UPLOAD_STATUS", {
                data: window.request_data.file_upload_status,
              }),
              this.$store.commit("appointmentModule/DESCRIPTION_STATUS", {
                data: window.request_data.description_status,
              }),
              this.$store.commit("appointmentModule/PATIENT_INFO_STATUS", {
                data: window.request_data.patient_detail_info_status,
              }),
              this.$store.commit("FETCH_DATE_FORMAT", {
                data: window.request_data.date_format,
              }),
              this.$store.commit("FETCH_FOOTER_COPYRIGHT_TEXT", {
                data: window.request_data.copyrightText,
              }),
              this.$store.commit("FETCH_WORDPRESS_LOGO", {
                data: {
                  logo: window.request_data.wordpress_logo,
                  status: window.request_data.wordpress_logo_status,
                },
              });
          },
          methods: {
            init: function () {
              t(".notice.notice-warning").remove(),
                t(".notice.e-notice").remove(),
                this.getDynamicTranslation(),
                void 0 !== this.formTranslation.months_short &&
                  void 0 !== this.formTranslation.months &&
                  window.moment.updateLocale("en", {
                    monthsShort: Object.values(
                      this.formTranslation.months_short
                    ),
                    months: Object.values(this.formTranslation.months),
                  });
            },
            getDynamicTranslation: function () {
              this.$store.dispatch("staticDataModule/fetchLangTranslateData", {
                filePath: window.request_data.kiviCarePluginURL,
                current: "temp",
                module: "",
              });
            },
          },
          computed: {
            userData: function () {
              if (void 0 !== this.$store.state)
                return this.$store.state.userDataModule.user;
            },
            getColor: function () {
              return "" == this.tempColor || null == this.tempColor
                ? this.userData.theme_color
                : this.tempColor;
            },
            getLang: function () {
              return this.userData.get_lang;
            },
            getMode: function () {
              return this.userData.theme_mode;
            },
            formTranslationData: function () {
              if (
                void 0 !== this.$store.state.staticDataModule.langTranslateData
              )
                return this.$store.state.staticDataModule.langTranslateData;
            },
          },
        },
        s = function () {
          Object(o.useCssVars)(function (t, e) {
            return { e83bb890: t.backgroundImage };
          });
        },
        l = a.setup;
      (a.setup = l
        ? function (t, e) {
            return s(), l(t, e);
          }
        : s),
        (e.a = a);
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n(8),
        (e.a = {
          props: ["mode"],
          data: function () {
            return {
              patient_id: "",
              logoURL: "",
              settingOption: [
                "custom-field",
                "static-data",
                "static-data.create",
                "static-data.edit",
                "custom-field.create",
                "custom-field.edit",
                "clinic-schedule",
                "notification.create",
                "terms-condition.create",
                "clinic-schedule.index",
                "common-settings.create",
                "clinic-schedule.create",
                "clinic-schedule.edit",
              ],
              activeRouteClass: "router-link-exact-active router-link-active",
              homeUrl: window.request_data.homePage,
              moduleList: [],
              request_status: "off",
              showSupportLink: "off",
              isCollapse: !1,
            };
          },
          mounted: function () {
            var t = this;
            this.init(),
              setTimeout(function () {
                t.kiviPro;
              }, 1e3),
              (this.logoURL =
                window.request_data.kiviCarePluginURL +
                "assets/images/logo-banner.png"),
              this.getModule(),
              this.getRequestHelper();
          },
          methods: {
            dropDownToggler: function (t, e) {
              e.target.closest(".nav-item").classList.toggle("active"),
                (this.isCollapse = !this.isCollapse);
            },
            getRequestHelper: function () {
              void 0 !== window.request_data.link_show_hide &&
                "" !== window.request_data.link_show_hide &&
                (this.showSupportLink = window.request_data.link_show_hide);
            },
            init: function () {
              "false" === localStorage.getItem("sidebarToggle")
                ? (this.$store.commit("TOGGLE_SIDEBAR", !1),
                  this.handleMouseOut())
                : (t("body").addClass("g-sidenav-show g-sidenav-pinned"),
                  this.$store.commit("TOGGLE_SIDEBAR", !0)),
                new window.PerfectScrollbar("#sidenav-main", {
                  wheelPropagation: !1,
                });
            },
            handleMouseOut: function () {
              this.fullSideBar ||
                (t(".sidenav .navbar-brand").hide(),
                t(".sidenav-toggler").removeClass("active"),
                t("body")
                  .removeClass("g-sidenav-show")
                  .addClass("g-sidenav-hidden"),
                t("body").removeClass("g-sidenav-pinned"));
            },
            handleMouseIn: function () {
              this.fullSideBar ||
                (t(".sidenav .navbar-brand").show(),
                t("body")
                  .addClass("g-sidenav-show")
                  .removeClass("g-sidenav-hidden"));
            },
            backToWordpress: function () {
              window.location = window.location.href.split("admin.php")[0];
            },
            handleSideBarToggle: function () {
              this.$store.commit("TOGGLE_SIDEBAR", !this.fullSideBar);
            },
            getModule: function () {
              void 0 !== window.request_data.link_show_hide &&
                "" !== window.request_data.link_show_hide &&
                (this.request_status = window.request_data.link_show_hide);
            },
            sideBarTabWiseData: function (t) {
              var e = !1;
              if (t.show) return t.show;
              switch (t.routeClass) {
                case "home":
                  e =
                    this.kcCheckPermission("home_page") &&
                    !("administrator" === this.getUserRole());
                  break;
                case "dashboard":
                  e = !0;
                  break;
                case "appointment_list":
                  e = this.kcCheckPermission("appointment_list");
                  break;
                case "parent":
                  e =
                    this.kcCheckPermission("patient_encounter_list") ||
                    this.kcCheckPermission("encounters_template_list");
                  break;
                case "patient_encounter_list":
                  e = this.kcCheckPermission("patient_encounter_list");
                  break;
                case "encounter_template":
                  e = this.kcCheckPermission("encounters_template_list");
                  break;
                case "encounters_template_list":
                  e =
                    this.kcCheckPermission("encounters_template_list") &&
                    "doctor" == this.getUserRole();
                  break;
                case "clinic":
                  e = "administrator" === this.getUserRole();
                  break;
                case "patient":
                  e = this.kcCheckPermission("patient_list");
                  break;
                case "doctor":
                  e = this.kcCheckPermission("doctor_list");
                  break;
                case "receptionist":
                  e =
                    this.kcCheckPermission("receptionist_list") &&
                    this.checkEnableModule("receptionist");
                  break;
                case "service":
                  e =
                    "patient" !== this.getUserRole() &&
                    this.kcCheckPermission("service_list");
                  break;
                case "doctor_session":
                  e =
                    this.kcCheckPermission("doctor_session_list") &&
                    "receptionist" !== this.getUserRole() &&
                    "doctor" !== this.getUserRole();
                  break;
                case "tax":
                  e = this.kcCheckPermission("tax_list");
                  break;
                case "billings":
                  e =
                    this.kcCheckPermission("patient_bill_list") &&
                    this.checkEnableModule("billing");
                  break;
                case "clinic-revenue-reports":
                  e =
                    "administrator" === this.getUserRole() ||
                    "clinic_admin" === this.getUserRole();
                  break;
                case "settings":
                  e = "administrator" === this.getUserRole();
                  break;
                case "clinic_settings":
                  e =
                    this.kcCheckPermission("settings") &&
                    ["clinic_admin", "doctor", "receptionist"].includes(
                      this.getUserRole()
                    );
                  break;
                case "get_help":
                  e =
                    "administrator" === this.getUserRole() &&
                    "off" == this.request_status;
                  break;
                case "get_pro":
                  e =
                    "administrator" === this.getUserRole() &&
                    1 != this.userData.addOns.kiviPro &&
                    "off" == this.request_status;
                  break;
                case "request_feature":
                  e =
                    "administrator" === this.getUserRole() &&
                    "off" == this.request_status;
                  break;
                case "patient_medical":
                  e =
                    "patient" === this.getUserRole() &&
                    this.kcCheckPermission("patient_report");
              }
              return e;
            },
          },
          watch: {
            fullSideBar: function (e) {
              e
                ? (t(".sidenav-toggler").addClass("active"),
                  t(".sidenav-toggler").data("action", "sidenav-unpin"),
                  t("body")
                    .removeClass("g-sidenav-hidden")
                    .addClass("g-sidenav-show g-sidenav-pinned"),
                  localStorage.setItem("sidebarToggle", !0))
                : (t(".sidenav-toggler").removeClass("active"),
                  t(".sidenav-toggler").data("action", "sidenav-pin"),
                  t("body")
                    .removeClass("g-sidenav-pinned")
                    .addClass("g-sidenav-hidden"),
                  t("body").find(".backdrop").remove(),
                  localStorage.setItem("sidebarToggle", !1));
            },
            logout: function () {
              this.$store.dispatch("logout", { self: this });
            },
          },
          computed: {
            currentRouteModule: function () {
              return this.$route.meta.module;
            },
            fullSideBar: function () {
              return this.$store.state.fullSideBar;
            },
            userData: function () {
              return this.$store.state.userDataModule.user;
            },
            teleMedEn: function () {
              return this.userData.addOns.telemed;
            },
            kiviPro: function () {
              return this.userData.addOns.kiviPro;
            },
            getSiteLogo: function () {
              return this.userData.site_logo;
            },
            sideBarJson: function () {
              return this.userData.dashboard_sidebar_data
                ? this.userData.dashboard_sidebar_data
                : {};
            },
          },
        });
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(409),
        r = (n(24), n(8), n(624)),
        o = n(43);
      e.a = {
        components: { Footer: i.a, VueQRCodeComponent: r.a, ModalPopup: o.a },
        data: function () {
          return {
            showChatBot: !1,
            demoUser: {
              doctor: "doctor_",
              Patient: "patient_",
              Receptionist: "receptionist_",
            },
            demoPluginActive: window.request_data.demo_plugin_active,
            adminImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/male-doctor.png",
            documentationLink: "off",
            adminUrl: window.request_data.adminUrl,
            showQrcode: !1,
            qrUrl: window.request_data.homePage + "?user=",
            splitEmail: "",
            default_wordpress_logo:
              window.request_data.kiviCarePluginURL +
              "assets/images/wp-logo.png?version=22",
            isFullScreen: !1,
          };
        },
        mounted: function () {
          this.init(),
            this.getRequestHelper(),
            "administrator" === this.getUserRole() &&
              ((this.splitEmail = this.userData.user_email.split("@")[0]),
              (this.qrUrl += this.splitEmail));
        },
        methods: {
          init: function () {
            "false" === localStorage.getItem("sidebarToggle")
              ? this.$store.commit("TOGGLE_SIDEBAR", !1)
              : this.$store.commit("TOGGLE_SIDEBAR", !0),
              new window.PerfectScrollbar("#sidenav-main", {
                wheelPropagation: !1,
              });
          },
          copyParentText: function (e, n) {
            t("#credentials i").removeClass("fa-clipboard"),
              t("#credentials i").addClass("fa-copy"),
              t("#credentials i").parent().attr("title", "Copy"),
              t(n.target).removeClass("fa-copy"),
              t(n.target).addClass("fa-clipboard"),
              t(n.target).parent().attr("title", "Value Copied to clipboard");
            var i = document.getElementById("modal-hidden-field");
            (i.value = e), i.select(), document.execCommand("copy");
          },
          getRequestHelper: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.documentationLink = window.request_data.link_show_hide);
          },
          logout: function () {
            this.$store.dispatch("logout", { self: this });
          },
          backToWordpress: function () {
            window.location = window.location.href.split("admin.php")[0];
          },
          handleSideBarToggle: function () {
            this.$store.commit("TOGGLE_SIDEBAR", !this.fullSideBar);
          },
          toggleFullScreen: function () {
            var e = this;
            document.getElementsByClassName("full-screen") &&
              t(document).on("click", ".full-screen", function (t) {
                document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement
                  ? (document.cancelFullScreen
                      ? document.cancelFullScreen()
                      : document.mozCancelFullScreen
                      ? document.mozCancelFullScreen()
                      : document.webkitCancelFullScreen
                      ? document.webkitCancelFullScreen()
                      : document.msExitFullscreen &&
                        document.msExitFullscreen(),
                    (e.isFullScreen = !1))
                  : (document.documentElement.requestFullscreen
                      ? document.documentElement.requestFullscreen()
                      : document.documentElement.mozRequestFullScreen
                      ? document.documentElement.mozRequestFullScreen()
                      : document.documentElement.webkitRequestFullscreen
                      ? document.documentElement.webkitRequestFullscreen(
                          Element.ALLOW_KEYBOARD_INPUT
                        )
                      : document.documentElement.msRequestFullscreen &&
                        document.documentElement.msRequestFullscreen(
                          Element.ALLOW_KEYBOARD_INPUT
                        ),
                    (e.isFullScreen = !0));
              });
          },
        },
        computed: {
          displayUsername: function () {
            return void 0 !== this.$store.state.userDataModule.user &&
              this.$store.state.userDataModule.user.display_name
              ? this.$store.state.userDataModule.user.display_name
              : "";
          },
          fullSideBar: function () {
            return this.$store.state.fullSideBar;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          wordpressLogo: function () {
            return void 0 !== this.$store.state.wordpress_logo &&
              void 0 !== this.$store.state.wordpress_logo.logo
              ? this.$store.state.wordpress_logo.logo
              : window.request_data.wordpress_logo;
          },
          wordpress_logo_status: function () {
            return (
              void 0 !== this.$store.state.wordpress_logo &&
              void 0 !== this.$store.state.wordpress_logo.status &&
              ["1", "true"].includes(this.$store.state.wordpress_logo.status) &&
              this.userData.addOns.kiviPro
            );
          },
        },
        watch: {
          fullSideBar: function (e) {
            e
              ? (t(".sidenav-toggler").addClass("active"),
                t(".sidenav-toggler").data("action", "sidenav-unpin"),
                t("body")
                  .removeClass("g-sidenav-hidden")
                  .addClass("g-sidenav-show g-sidenav-pinned"),
                localStorage.setItem("sidebarToggle", !0))
              : (t(".sidenav-toggler").removeClass("active"),
                t(".sidenav-toggler").data("action", "sidenav-pin"),
                t("body")
                  .removeClass("g-sidenav-pinned")
                  .addClass("g-sidenav-hidden"),
                t("body").find(".backdrop").remove(),
                localStorage.setItem("sidebarToggle", !1));
          },
        },
      };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(616),
        r = n(630),
        o = n(617),
        a = n(618),
        s = n(8),
        l = n(9),
        c = (n(24), n(140), n(43));
      function d(t) {
        return (d =
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
      function u(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != d(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != d(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == d(e) ? e : e + "";
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
      e.a = {
        components: { FullCalendar: i.a, ModalPopup: c.a },
        validations: {
          appointmentData: {
            appointment_start_date: { required: l.required },
            appointment_start_time: { required: l.required },
            visit_type: { required: l.required },
            clinic_id: { required: l.required },
            doctor_id: { required: l.required },
            patient_id: { required: l.required },
            description: { required: l.required },
            status: { required: l.required },
          },
        },
        data: function () {
          var t = new Date(),
            e = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            n = new Date(e);
          return (
            n.setMonth(n.getMonth() - 2),
            n.setDate(15),
            {
              appointmentDetailsModel: !1,
              appointmentDetails: {},
              modelTitle: "Add appointment",
              modelShow: !1,
              loading: !1,
              submitted: !1,
              appointmentData: {},
              timeSlotLoader: !1,
              min: n,
              clinics: [],
              doctors: [],
              patients: [],
              buttonText: '<i class="fa fa-plus"></i> Create Add',
              appointmentTypes: [],
              calendarPlugins: [r.a, a.a, o.a],
              timeSlots: [],
              displayTimeSlots: !1,
              headerConfig: {
                left: "prev,next",
                center: "title",
                right: "today dayGridMonth,dayGridDay,dayGridWeek,dayGridList",
              },
              editAppointment: !1,
              appointmentStatus: "",
              calenderLang: window.request_data.current_wordpress_lang,
              eventSources: [],
              calendarLoader: !1,
              statusChangeLoading: !1,
              filterOpen: !1,
              patientMultiselectLoader: !0,
              doctorMultiselectLoader: !0,
              serviceMultiselectLoader: !0,
              filterData: {
                status: "",
                doctor_id: "",
                patient_id: "",
                service: "",
              },
              allStatus: [
                { label: "all", value: "all" },
                { label: "upcoming", value: "1" },
                { label: "completed", value: "3" },
                { label: "cancelled", value: "0" },
                { label: "checkin", value: "4" },
                { label: "pending", value: "2" },
              ],
              allservice: [],
              firstTimeFilterEnable: 0,
              start_of_week: 0,
            }
          );
        },
        mounted: function () {
          var t = this;
          this.init(),
            this.updateData(),
            (this.allStatus = this.allStatus.map(function (e) {
              return (
                "pending" === e.label
                  ? (e.label = t.formTranslation.appointments[e.label])
                  : (e.label = t.formTranslation.common[e.label]),
                e
              );
            }));
        },
        methods: {
          updateData: function () {
            var t = this;
            (t.calendarLoader = !1),
              (this.eventSources = [
                {
                  events: function (e, n) {
                    var i = e.start,
                      r = e.end,
                      o =
                        (e.timeZone,
                        {
                          start_date: moment(i).format("YYYY-MM-DD"),
                          end_date: moment(r).format("YYYY-MM-DD"),
                        });
                    (o = p(p({}, o), t.filterData)),
                      Object(s.a)("appointment_list", o)
                        .then(function (e) {
                          (t.calendarLoader = !0),
                            void 0 !== e.data.status && !0 === e.data.status
                              ? n(e.data.data)
                              : n([]);
                        })
                        .catch(function (e) {
                          t.calendarLoader = !0;
                        });
                  },
                },
              ]);
          },
          init: function () {
            (this.appointmentData = this.defaultAppointmentData()),
              (this.appointmentDetails = this.defaultAppointmentData(!0)),
              "doctor" === this.getUserRole() &&
                (this.appointmentData.doctor_id = {
                  id: this.userData.ID,
                  label: this.userData.display_name,
                });
          },
          fullcalendarRender: function (t) {
            t.event.extendedProps.telemed_service &&
              (t.el.querySelector(".fc-title").innerHTML =
                t.event.title +
                '<i class="fas fa-video float-right text-white"> </i>'),
              document
                .querySelectorAll("#kivicare-appointment-calendar .fc-button")
                .forEach(function (t) {
                  t.classList.add("btn"), t.classList.add("btn-primary");
                });
          },
          copyLink: function (e) {
            t("#link-copy").removeClass(),
              t("#link-copy").addClass("fas fa-clipboard");
            var n = document.getElementById("modal-hidden-field");
            (n.value = e), n.select(), document.execCommand("copy");
          },
          copyLinkMouseOut: function () {
            t("#link-copy").removeClass(),
              t("#link-copy").addClass("fas fa-copy");
          },
          handleEventClick: function (t) {
            if (!this.kcCheckPermission("appointment_view")) return !1;
            var e = t.event;
            (this.appointmentDetails.id = e.id),
              (this.appointmentDetails.appointment_start_date =
                e.extendedProps.appointment_start_date),
              (this.appointmentDetails.appointment_start_time =
                e.extendedProps.appointment_start_time),
              (this.appointmentDetails.clinic_id = e.extendedProps.clinic_id),
              (this.appointmentDetails.patient_id = e.extendedProps.patient_id),
              (this.appointmentDetails.doctor_id = e.extendedProps.doctor_id),
              (this.appointmentDetails.visit_type =
                e.extendedProps.all_services),
              (this.appointmentDetails.description =
                e.extendedProps.description),
              (this.appointmentDetails.status = e.extendedProps.status),
              (this.appointmentDetails.telemed_service =
                e.extendedProps.telemed_service),
              (this.appointmentDetails.telemed_meeting_link =
                e.extendedProps.telemed_meeting_link),
              (this.appointmentDetails.is_edit_able =
                e.extendedProps.is_edit_able),
              (this.appointmentStatus = String(this.appointmentDetails.status)),
              (this.appointmentDetailsModel = !0);
            var n = new Date(e.extendedProps.appointment_start_date + " 00:00");
            n.setHours(0, 0, 0, 0);
            var i = new Date();
            i.setHours(0, 0, 0, 0), (this.appointmentDetails.less = n < i);
          },
          defaultAppointmentData: function () {
            var t = {
              appointment_start_date: "",
              appointment_start_time: "",
              clinic_id: {},
              patient_id: "",
              doctor_id: "",
              visit_type: "",
              description: "",
              status: 1,
              telemed_service: !1,
              telemed_meeting_link: "",
              is_edit_able: !1,
            };
            return t && (t.id = ""), t;
          },
          handleClinicUnselect: function () {
            (this.appointmentData.clinic_id = {}),
              (this.appointmentData.doctor_id = {}),
              (this.doctors = []);
          },
          handleClinicChange: function (t, e) {
            (this.doctors = []),
              (this.appointmentData.doctor_id = {}),
              this.resetTimeSlots();
          },
          handleTime: function (t) {
            this.appointmentData.appointment_start_time = t;
          },
          handleDayClick: function (t) {
            (this.timeSlotLoader = !0),
              (this.timeSlots = []),
              (this.appointmentData.appointment_start_time = ""),
              void 0 !== this.appointmentData.clinic_id.id &&
                "" !== this.appointmentData.clinic_id.id &&
                void 0 !== this.appointmentData.doctor_id.id &&
                "" !== this.appointmentData.doctor_id.id &&
                void 0 !== this.appointmentData.patient_id.id &&
                "" !== this.appointmentData.patient_id.id &&
                this.getTimeSlots(t.id);
          },
          getTimeSlots: function (t) {
            var e = this,
              n = {
                date: t,
                appointment_id: this.appointmentData.id,
                clinic_id: this.appointmentData.clinic_id.id,
                doctor_id: this.appointmentData.doctor_id.id,
                patient_id: this.appointmentData.patient_id.id,
              };
            Object(s.a)("get_appointment_slots", n)
              .then(function (t) {
                void 0 !== t.data.status && !0 === t.data.status
                  ? (e.timeSlots = t.data.data)
                  : displayErrorMessage(t.data.message),
                  (e.timeSlotLoader = !1);
              })
              .catch(functio