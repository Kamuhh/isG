// app.part16-de-30.js
}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
              regex: g,
              uuid: c,
              "json-pointer": d,
              "relative-json-pointer": u,
            }),
            (p.compare = {
              date: v,
              time: _,
              "date-time": function (t, e) {
                if (t && e) {
                  (t = t.split(b)), (e = e.split(b));
                  var n = v(t[0], e[0]);
                  if (void 0 !== n) return n || _(t[1], e[1]);
                }
              },
            });
          var b = /t|\s/i,
            m = /\/|\:/;
          function g(t) {
            try {
              return new RegExp(t), !0;
            } catch (t) {
              return !1;
            }
          }
          function v(t, e) {
            if (t && e) return t > e ? 1 : t < e ? -1 : t === e ? 0 : void 0;
          }
          function _(t, e) {
            if (t && e && ((t = t.match(a)), (e = e.match(a)), t && e))
              return (t = t[1] + t[2] + t[3] + (t[4] || "")) >
                (e = e[1] + e[2] + e[3] + (e[4] || ""))
                ? 1
                : t < e
                ? -1
                : t === e
                ? 0
                : void 0;
          }
        },
        function (t, e, n) {
          "use strict";
          var i = n(24),
            r = n(11);
          t.exports = function () {
            var t = [
              { type: "number", rules: ["maximum", "minimum", "multipleOf"] },
              {
                type: "string",
                rules: ["maxLength", "minLength", "pattern", "format"],
              },
              {
                type: "array",
                rules: ["maxItems", "minItems", "uniqueItems", "items"],
              },
              {
                type: "object",
                rules: [
                  "maxProperties",
                  "minProperties",
                  "required",
                  "dependencies",
                  "properties",
                ],
              },
              { rules: ["$ref", "enum", "not", "anyOf", "oneOf", "allOf"] },
            ];
            return (
              (t.all = ["type", "additionalProperties", "patternProperties"]),
              (t.keywords = [
                "additionalItems",
                "$schema",
                "id",
                "title",
                "description",
                "default",
              ]),
              (t.types = [
                "number",
                "integer",
                "string",
                "array",
                "object",
                "boolean",
                "null",
              ]),
              t.forEach(function (e) {
                e.rules = e.rules.map(function (e) {
                  return t.all.push(e), { keyword: e, code: i[e] };
                });
              }),
              (t.keywords = r.toHash(t.all.concat(t.keywords))),
              (t.all = r.toHash(t.all)),
              (t.types = r.toHash(t.types)),
              t
            );
          };
        },
        function (t, e, n) {
          "use strict";
          t.exports = {
            $ref: n(25),
            allOf: n(26),
            anyOf: n(27),
            dependencies: n(28),
            enum: n(29),
            format: n(30),
            items: n(31),
            maximum: n(32),
            minimum: n(32),
            maxItems: n(33),
            minItems: n(33),
            maxLength: n(34),
            minLength: n(34),
            maxProperties: n(35),
            minProperties: n(35),
            multipleOf: n(36),
            not: n(37),
            oneOf: n(38),
            pattern: n(39),
            properties: n(40),
            required: n(41),
            uniqueItems: n(42),
            validate: n(18),
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n,
              i,
              r = " ",
              o = t.level,
              a = t.dataLevel,
              s = t.schema[e],
              l = t.errSchemaPath + "/" + e,
              c = !t.opts.allErrors,
              d = "data" + (a || ""),
              u = "valid" + o;
            if ("#" == s || "#/" == s)
              t.isRoot
                ? ((n = t.async), (i = "validate"))
                : ((n = !0 === t.root.schema.$async), (i = "root.refVal[0]"));
            else {
              var p = t.resolveRef(t.baseId, s, t.isRoot);
              if (void 0 === p) {
                var h = "can't resolve reference " + s + " from id " + t.baseId;
                if ("fail" == t.opts.missingRefs) {
                  (g = g || []).push(r),
                    (r = ""),
                    !1 !== t.createErrors
                      ? ((r +=
                          " { keyword: '$ref' , dataPath: (dataPath || '') + " +
                          t.errorPath +
                          ' , schemaPath: "' +
                          l +
                          "\" , params: { ref: '" +
                          t.util.escapeQuotes(s) +
                          "' } "),
                        !1 !== t.opts.messages &&
                          (r +=
                            " , message: 'can\\'t resolve reference " +
                            t.util.escapeQuotes(s) +
                            "' "),
                        t.opts.verbose &&
                          (r +=
                            " , schema: " +
                            t.util.toQuotedString(s) +
                            " , parentSchema: validate.schema" +
                            t.schemaPath +
                            " , data: " +
                            d +
                            " "),
                        (r += " } "))
                      : (r += " {} ");
                  var f = r;
                  (r = g.pop()),
                    !t.compositeRule && c
                      ? t.async
                        ? (r += " throw new ValidationError([" + f + "]); ")
                        : (r +=
                            " validate.errors = [" + f + "]; return false; ")
                      : (r +=
                          " var err = " +
                          f +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    c && (r += " if (false) { ");
                } else {
                  if ("ignore" != t.opts.missingRefs) {
                    var b = new Error(h);
                    throw (
                      ((b.missingRef = t.resolve.url(t.baseId, s)),
                      (b.missingSchema = t.resolve.normalizeId(
                        t.resolve.fullPath(b.missingRef)
                      )),
                      b)
                    );
                  }
                  c && (r += " if (true) { ");
                }
              } else if (p.inline) {
                var m = t.util.copy(t);
                m.level++,
                  (m.schema = p.schema),
                  (m.schemaPath = ""),
                  (m.errSchemaPath = s),
                  (r +=
                    " " +
                    t.validate(m).replace(/validate\.schema/g, p.code) +
                    " "),
                  c && (r += " if (valid" + m.level + ") { ");
              } else (n = p.async), (i = p.code);
            }
            if (i) {
              var g;
              (g = g || []).push(r),
                (r = ""),
                t.opts.passContext
                  ? (r += " " + i + ".call(this, ")
                  : (r += " " + i + "( "),
                (r += " " + d + ", (dataPath || '')"),
                '""' != t.errorPath && (r += " + " + t.errorPath),
                (r += a
                  ? " , data" + (a - 1 || "") + " , " + t.dataPathArr[a] + " "
                  : " , parentData , parentDataProperty ");
              var v = (r += ")  ");
              if (((r = g.pop()), n)) {
                if (!t.async)
                  throw new Error("async schema referenced by sync schema");
                (r += " try { "),
                  c && (r += "var " + u + " ="),
                  (r +=
                    " " +
                    t.yieldAwait +
                    " " +
                    v +
                    "; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } "),
                  c && (r += " if (" + u + ") { ");
              } else
                (r +=
                  " if (!" +
                  v +
                  ") { if (vErrors === null) vErrors = " +
                  i +
                  ".errors; else vErrors = vErrors.concat(" +
                  i +
                  ".errors); errors = vErrors.length; } "),
                  c && (r += " else { ");
            }
            return r;
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.schema[e],
              r = t.schemaPath + "." + e,
              o = t.errSchemaPath + "/" + e,
              a = !t.opts.allErrors,
              s = t.util.copy(t),
              l = "";
            s.level++;
            var c = i;
            if (c)
              for (var d, u = -1, p = c.length - 1; u < p; )
                (d = c[(u += 1)]),
                  t.util.schemaHasRules(d, t.RULES.all) &&
                    ((s.schema = d),
                    (s.schemaPath = r + "[" + u + "]"),
                    (s.errSchemaPath = o + "/" + u),
                    (n += " " + t.validate(s) + "  "),
                    a && ((n += " if (valid" + s.level + ") { "), (l += "}")));
            return (
              a && (n += " " + l.slice(0, -1)), (n = t.util.cleanUpCode(n))
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "errs__" + i,
              p = t.util.copy(t),
              h = "";
            if (
              (p.level++,
              o.every(function (e) {
                return t.util.schemaHasRules(e, t.RULES.all);
              }))
            ) {
              n += " var " + u + " = errors; var " + d + " = false;  ";
              var f = t.compositeRule;
              t.compositeRule = p.compositeRule = !0;
              var b = o;
              if (b)
                for (var m, g = -1, v = b.length - 1; g < v; )
                  (m = b[(g += 1)]),
                    (p.schema = m),
                    (p.schemaPath = a + "[" + g + "]"),
                    (p.errSchemaPath = s + "/" + g),
                    (n +=
                      " " +
                      t.validate(p) +
                      " " +
                      d +
                      " = " +
                      d +
                      " || valid" +
                      p.level +
                      "; if (!" +
                      d +
                      ") { "),
                    (h += "}");
              (t.compositeRule = p.compositeRule = f),
                (n += " " + h + " if (!" + d + ") {  var err =   "),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: 'anyOf' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: {} '),
                    !1 !== t.opts.messages &&
                      (n += " , message: 'should match some schema in anyOf' "),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} "),
                (n +=
                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = " +
                  u +
                  "; if (vErrors !== null) { if (" +
                  u +
                  ") vErrors.length = " +
                  u +
                  "; else vErrors = null; } "),
                t.opts.allErrors && (n += " } "),
                (n = t.util.cleanUpCode(n));
            } else l && (n += " if (true) { ");
            return n;
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "errs__" + i,
              u = t.util.copy(t),
              p = "";
            u.level++;
            var h = {},
              f = {};
            for (v in o) {
              var b = o[v],
                m = Array.isArray(b) ? f : h;
              m[v] = b;
            }
            n += "var " + d + " = errors;";
            var g = t.errorPath;
            for (var v in ((n += "var missing" + i + ";"), f)) {
              (m = f[v]),
                (n +=
                  " if (" + c + t.util.getProperty(v) + " !== undefined && ( ");
              var _ = m;
              if (_)
                for (var y, M = -1, O = _.length - 1; M < O; ) {
                  (y = _[(M += 1)]), M && (n += " || ");
                  var w = t.util.getProperty(y);
                  n +=
                    " ( " +
                    c +
                    w +
                    " === undefined && (missing" +
                    i +
                    " = " +
                    t.util.toQuotedString(t.opts.jsonPointers ? y : w) +
                    ") ) ";
                }
              n += ")) {  ";
              var A = "missing" + i,
                x = "' + " + A + " + '";
              t.opts._errorDataPathProperty &&
                (t.errorPath = t.opts.jsonPointers
                  ? t.util.getPathExpr(g, A, !0)
                  : g + " + " + A);
              var z = z || [];
              z.push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      "\" , params: { property: '" +
                      t.util.escapeQuotes(v) +
                      "', missingProperty: '" +
                      x +
                      "', depsCount: " +
                      m.length +
                      ", deps: '" +
                      t.util.escapeQuotes(1 == m.length ? m[0] : m.join(", ")) +
                      "' } "),
                    !1 !== t.opts.messages &&
                      ((n += " , message: 'should have "),
                      1 == m.length
                        ? (n += "property " + t.util.escapeQuotes(m[0]))
                        : (n +=
                            "properties " + t.util.escapeQuotes(m.join(", "))),
                      (n +=
                        " when property " +
                        t.util.escapeQuotes(v) +
                        " is present' ")),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} ");
              var C = n;
              (n = z.pop()),
                !t.compositeRule && l
                  ? t.async
                    ? (n += " throw new ValidationError([" + C + "]); ")
                    : (n += " validate.errors = [" + C + "]; return false; ")
                  : (n +=
                      " var err = " +
                      C +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n += " }   "),
                l && ((p += "}"), (n += " else { "));
            }
            for (var v in ((t.errorPath = g), h))
              (b = h[v]),
                t.util.schemaHasRules(b, t.RULES.all) &&
                  ((n +=
                    " valid" +
                    u.level +
                    " = true; if (" +
                    c +
                    "['" +
                    v +
                    "'] !== undefined) { "),
                  (u.schema = b),
                  (u.schemaPath = a + t.util.getProperty(v)),
                  (u.errSchemaPath = s + "/" + t.util.escapeFragment(v)),
                  (n += " " + t.validate(u) + " }  "),
                  l && ((n += " if (valid" + u.level + ") { "), (p += "}")));
            return (
              l && (n += "   " + p + " if (" + d + " == errors) {"),
              (n = t.util.cleanUpCode(n))
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = t.opts.v5 && o.$data,
              p = u ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            u &&
              ((n += " var schema" + i + " = " + p + "; "), (p = "schema" + i));
            var h = "i" + i;
            u || (n += " var schema" + i + " = validate.schema" + a + ";"),
              (n += "var " + d + ";"),
              u &&
                (n +=
                  " if (schema" +
                  i +
                  " === undefined) " +
                  d +
                  " = true; else if (!Array.isArray(schema" +
                  i +
                  ")) " +
                  d +
                  " = false; else {"),
              (n +=
                d +
                " = false;for (var " +
                h +
                "=0; " +
                h +
                "<schema" +
                i +
                ".length; " +
                h +
                "++) if (equal(" +
                c +
                ", schema" +
                i +
                "[" +
                h +
                "])) { " +
                d +
                " = true; break; }"),
              u && (n += "  }  "),
              (n += " if (!" + d + ") {   ");
            var f = f || [];
            f.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'enum' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: {} '),
                  !1 !== t.opts.messages &&
                    (n +=
                      " , message: 'should be equal to one of the allowed values' "),
                  t.opts.verbose &&
                    (n +=
                      " , schema: validate.schema" +
                      a +
                      " , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " "),
                  (n += " } "))
                : (n += " {} ");
            var b = n;
            return (
              (n = f.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + b + "]); ")
                  : (n += " validate.errors = [" + b + "]; return false; ")
                : (n +=
                    " var err = " +
                    b +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += " }"),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || "");
            if (!1 === t.opts.format) return l && (n += " if (true) { "), n;
            var d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            if (
              (d &&
                ((n += " var schema" + i + " = " + u + "; "),
                (u = "schema" + i)),
              d)
            )
              (n +=
                " var " +
                (p = "format" + i) +
                " = formats[" +
                u +
                "]; var isObject" +
                i +
                " = typeof " +
                p +
                " == 'object' && !(" +
                p +
                " instanceof RegExp) && " +
                p +
                ".validate; if (isObject" +
                i +
                ") { var async" +
                i +
                " = " +
                p +
                ".async; " +
                p +
                " = " +
                p +
                ".validate; } if (  "),
                d &&
                  (n +=
                    " (" +
                    u +
                    " !== undefined && typeof " +
                    u +
                    " != 'string') || "),
                (n += " (" + p + " && !(typeof " + p + " == 'function' ? "),
                t.async
                  ? (n +=
                      " (async" +
                      i +
                      " ? " +
                      t.yieldAwait +
                      " " +
                      p +
                      "(" +
                      c +
                      ") : " +
                      p +
                      "(" +
                      c +
                      ")) ")
                  : (n += " " + p + "(" + c + ") "),
                (n += " : " + p + ".test(" + c + ")))) {");
            else {
              var p;
              if (!(p = t.formats[o])) return l && (n += " if (true) { "), n;
              var h =
                "object" == typeof p && !(p instanceof RegExp) && p.validate;
              if (h) {
                var f = !0 === p.async;
                p = p.validate;
              }
              if (f) {
                if (!t.async) throw new Error("async format in sync schema");
                var b = "formats" + t.util.getProperty(o) + ".validate";
                n += " if (!(" + t.yieldAwait + " " + b + "(" + c + "))) { ";
              } else
                (n += " if (! "),
                  (b = "formats" + t.util.getProperty(o)),
                  h && (b += ".validate"),
                  (n +=
                    "function" == typeof p
                      ? " " + b + "(" + c + ") "
                      : " " + b + ".test(" + c + ") "),
                  (n += ") { ");
            }
            var m = m || [];
            m.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'format' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { format:  '),
                  (n += d ? "" + u : "" + t.util.toQuotedString(o)),
                  (n += "  } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should match format \""),
                    (n += d
                      ? "' + " + u + " + '"
                      : "" + t.util.escapeQuotes(o)),
                    (n += "\"' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d
                      ? "validate.schema" + a
                      : "" + t.util.toQuotedString(o)),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var g = n;
            return (
              (n = m.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + g + "]); ")
                  : (n += " validate.errors = [" + g + "]; return false; ")
                : (n +=
                    " var err = " +
                    g +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += " } "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "errs__" + i,
              p = t.util.copy(t),
              h = "";
            p.level++;
            var f = (p.dataLevel = t.dataLevel + 1),
              b = "data" + f;
            if (
              ((n += "var " + u + " = errors;var " + d + ";"), Array.isArray(o))
            ) {
              var m = t.schema.additionalItems;
              if (!1 === m) {
                n += " " + d + " = " + c + ".length <= " + o.length + "; ";
                var g = s;
                (s = t.errSchemaPath + "/additionalItems"),
                  (n += "  if (!" + d + ") {   ");
                var v = v || [];
                v.push(n),
                  (n = ""),
                  !1 !== t.createErrors
                    ? ((n +=
                        " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " +
                        t.errorPath +
                        ' , schemaPath: "' +
                        s +
                        '" , params: { limit: ' +
                        o.length +
                        " } "),
                      !1 !== t.opts.messages &&
                        (n +=
                          " , message: 'should NOT have more than " +
                          o.length +
                          " items' "),
                      t.opts.verbose &&
                        (n +=
                          " , schema: false , parentSchema: validate.schema" +
                          t.schemaPath +
                          " , data: " +
                          c +
                          " "),
                      (n += " } "))
                    : (n += " {} ");
                var _ = n;
                (n = v.pop()),
                  !t.compositeRule && l
                    ? t.async
                      ? (n += " throw new ValidationError([" + _ + "]); ")
                      : (n += " validate.errors = [" + _ + "]; return false; ")
                    : (n +=
                        " var err = " +
                        _ +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (n += " } "),
                  (s = g),
                  l && ((h += "}"), (n += " else { "));
              }
              var y = o;
              if (y)
                for (var M, O = -1, w = y.length - 1; O < w; )
                  if (
                    ((M = y[(O += 1)]), t.util.schemaHasRules(M, t.RULES.all))
                  ) {
                    n +=
                      " valid" +
                      p.level +
                      " = true; if (" +
                      c +
                      ".length > " +
                      O +
                      ") { ";
                    var A = c + "[" + O + "]";
                    (p.schema = M),
                      (p.schemaPath = a + "[" + O + "]"),
                      (p.errSchemaPath = s + "/" + O),
                      (p.errorPath = t.util.getPathExpr(
                        t.errorPath,
                        O,
                        t.opts.jsonPointers,
                        !0
                      )),
                      (p.dataPathArr[f] = O);
                    var x = t.validate(p);
                    t.util.varOccurences(x, b) < 2
                      ? (n += " " + t.util.varReplace(x, b, A) + " ")
                      : (n += " var " + b + " = " + A + "; " + x + " "),
                      (n += " }  "),
                      l && ((n += " if (valid" + p.level + ") { "), (h += "}"));
                  }
              "object" == typeof m &&
                t.util.schemaHasRules(m, t.RULES.all) &&
                ((p.schema = m),
                (p.schemaPath = t.schemaPath + ".additionalItems"),
                (p.errSchemaPath = t.errSchemaPath + "/additionalItems"),
                (n +=
                  " valid" +
                  p.level +
                  " = true; if (" +
                  c +
                  ".length > " +
                  o.length +
                  ") {  for (var i" +
                  i +
                  " = " +
                  o.length +
                  "; i" +
                  i +
                  " < " +
                  c +
                  ".length; i" +
                  i +
                  "++) { "),
                (p.errorPath = t.util.getPathExpr(
                  t.errorPath,
                  "i" + i,
                  t.opts.jsonPointers,
                  !0
                )),
                (A = c + "[i" + i + "]"),
                (p.dataPathArr[f] = "i" + i),
                (x = t.validate(p)),
                t.util.varOccurences(x, b) < 2
                  ? (n += " " + t.util.varReplace(x, b, A) + " ")
                  : (n += " var " + b + " = " + A + "; " + x + " "),
                l && (n += " if (!valid" + p.level + ") break; "),
                (n += " } }  "),
                l && ((n += " if (valid" + p.level + ") { "), (h += "}")));
            } else
              t.util.schemaHasRules(o, t.RULES.all) &&
                ((p.schema = o),
                (p.schemaPath = a),
                (p.errSchemaPath = s),
                (n +=
                  "  for (var i" +
                  i +
                  " = 0; i" +
                  i +
                  " < " +
                  c +
                  ".length; i" +
                  i +
                  "++) { "),
                (p.errorPath = t.util.getPathExpr(
                  t.errorPath,
                  "i" + i,
                  t.opts.jsonPointers,
                  !0
                )),
                (A = c + "[i" + i + "]"),
                (p.dataPathArr[f] = "i" + i),
                (x = t.validate(p)),
                t.util.varOccurences(x, b) < 2
                  ? (n += " " + t.util.varReplace(x, b, A) + " ")
                  : (n += " var " + b + " = " + A + "; " + x + " "),
                l && (n += " if (!valid" + p.level + ") break; "),
                (n += " }  "),
                l && ((n += " if (valid" + p.level + ") { "), (h += "}")));
            return (
              l && (n += " " + h + " if (" + u + " == errors) {"),
              (n = t.util.cleanUpCode(n))
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i));
            var p,
              h = "maximum" == e,
              f = h ? "exclusiveMaximum" : "exclusiveMinimum",
              b = t.schema[f],
              m = h ? "<" : ">",
              g = h ? ">" : "<";
            if (t.opts.v5 && b && b.$data) {
              var v = t.util.getData(b.$data, r, t.dataPathArr),
                _ = "exclusive" + i,
                y = "' + " + (w = "op" + i) + " + '";
              (n += " var schemaExcl" + i + " = " + v + "; "),
                (n +=
                  " var exclusive" +
                  i +
                  "; if (typeof " +
                  (v = "schemaExcl" + i) +
                  " != 'boolean' && typeof " +
                  v +
                  " != 'undefined') { ");
              var M = f;
              (p = p || []).push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: '" +
                      (M || "_exclusiveLimit") +
                      "' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: {} '),
                    !1 !== t.opts.messages &&
                      (n += " , message: '" + f + " should be boolean' "),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} ");
              var O = n;
              (n = p.pop()),
                !t.compositeRule && l
                  ? t.async
                    ? (n += " throw new ValidationError([" + O + "]); ")
                    : (n += " validate.errors = [" + O + "]; return false; ")
                  : (n +=
                      " var err = " +
                      O +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n += " } else if( "),
                d &&
                  (n +=
                    " (" +
                    u +
                    " !== undefined && typeof " +
                    u +
                    " != 'number') || "),
                (n +=
                  " ((exclusive" +
                  i +
                  " = " +
                  v +
                  " === true) ? " +
                  c +
                  " " +
                  g +
                  "= " +
                  u +
                  " : " +
                  c +
                  " " +
                  g +
                  " " +
                  u +
                  ")) { var op" +
                  i +
                  " = exclusive" +
                  i +
                  " ? '" +
                  m +
                  "' : '" +
                  m +
                  "=';");
            } else {
              (y = m), (_ = !0 === b) || (y += "=");
              var w = "'" + y + "'";
              (n += " if ( "),
                d &&
                  (n +=
                    " (" +
                    u +
                    " !== undefined && typeof " +
                    u +
                    " != 'number') || "),
                (n += " " + c + " " + g),
                _ && (n += "="),
                (n += " " + u + ") {");
            }
            return (
              (M = e),
              (p = p || []).push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: '" +
                    (M || "_limit") +
                    "' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { comparison: ' +
                    w +
                    ", limit: " +
                    u +
                    ", exclusive: " +
                    _ +
                    " } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should be " + y + " "),
                    (n += d ? "' + " + u : o + "'")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d ? "validate.schema" + a : "" + o),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} "),
              (O = n),
              (n = p.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + O + "]); ")
                  : (n += " validate.errors = [" + O + "]; return false; ")
                : (n +=
                    " var err = " +
                    O +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += " } "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i)),
              (n += "if ( "),
              d &&
                (n +=
                  " (" +
                  u +
                  " !== undefined && typeof " +
                  u +
                  " != 'number') || "),
              (n +=
                " " +
                c +
                ".length " +
                ("maxItems" == e ? ">" : "<") +
                " " +
                u +
                ") { ");
            var p = e,
              h = h || [];
            h.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: '" +
                    (p || "_limitItems") +
                    "' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { limit: ' +
                    u +
                    " } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should NOT have "),
                    (n += "maxItems" == e ? "more" : "less"),
                    (n += " than "),
                    (n += d ? "' + " + u + " + '" : "" + o),
                    (n += " items' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d ? "validate.schema" + a : "" + o),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var f = n;
            return (
              (n = h.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + f + "]); ")
                  : (n += " validate.errors = [" + f + "]; return false; ")
                : (n +=
                    " var err = " +
                    f +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "} "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i));
            var p = "maxLength" == e ? ">" : "<";
            (n += "if ( "),
              d &&
                (n +=
                  " (" +
                  u +
                  " !== undefined && typeof " +
                  u +
                  " != 'number') || "),
              !1 === t.opts.unicode
                ? (n += " " + c + ".length ")
                : (n += " ucs2length(" + c + ") "),
              (n += " " + p + " " + u + ") { ");
            var h = e,
              f = f || [];
            f.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: '" +
                    (h || "_limitLength") +
                    "' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { limit: ' +
                    u +
                    " } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should NOT be "),
                    (n += "maxLength" == e ? "longer" : "shorter"),
                    (n += " than "),
                    (n += d ? "' + " + u + " + '" : "" + o),
                    (n += " characters' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d ? "validate.schema" + a : "" + o),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var b = n;
            return (
              (n = f.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + b + "]); ")
                  : (n += " validate.errors = [" + b + "]; return false; ")
                : (n +=
                    " var err = " +
                    b +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "} "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i)),
              (n += "if ( "),
              d &&
                (n +=
                  " (" +
                  u +
                  " !== undefined && typeof " +
                  u +
                  " != 'number') || "),
              (n +=
                " Object.keys(" +
                c +
                ").length " +
                ("maxProperties" == e ? ">" : "<") +
                " " +
                u +
                ") { ");
            var p = e,
              h = h || [];
            h.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: '" +
                    (p || "_limitProperties") +
                    "' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { limit: ' +
                    u +
                    " } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should NOT have "),
                    (n += "maxProperties" == e ? "more" : "less"),
                    (n += " than "),
                    (n += d ? "' + " + u + " + '" : "" + o),
                    (n += " properties' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d ? "validate.schema" + a : "" + o),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var f = n;
            return (
              (n = h.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + f + "]); ")
                  : (n += " validate.errors = [" + f + "]; return false; ")
                : (n +=
                    " var err = " +
                    f +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "} "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i)),
              (n += "var division" + i + ";if ("),
              d &&
                (n +=
                  " " +
                  u +
                  " !== undefined && ( typeof " +
                  u +
                  " != 'number' || "),
              (n += " (division" + i + " = " + c + " / " + u + ", "),
              t.opts.multipleOfPrecision
                ? (n +=
                    " Math.abs(Math.round(division" +
                    i +
                    ") - division" +
                    i +
                    ") > 1e-" +
                    t.opts.multipleOfPrecision +
                    " ")
                : (n += " division" + i + " !== parseInt(division" + i + ") "),
              (n += " ) "),
              d && (n += "  )  "),
              (n += " ) {   ");
            var p = p || [];
            p.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { multipleOf: ' +
                    u +
                    " } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should be multiple of "),
                    (n += d ? "' + " + u : o + "'")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d ? "validate.schema" + a : "" + o),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var h = n;
            return (
              (n = p.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + h + "]); ")
                  : (n += " validate.errors = [" + h + "]; return false; ")
                : (n +=
                    " var err = " +
                    h +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "} "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "errs__" + i,
              u = t.util.copy(t);
            if ((u.level++, t.util.schemaHasRules(o, t.RULES.all))) {
              (u.schema = o),
                (u.schemaPath = a),
                (u.errSchemaPath = s),
                (n += " var " + d + " = errors;  ");
              var p,
                h = t.compositeRule;
              (t.compositeRule = u.compositeRule = !0),
                (u.createErrors = !1),
                u.opts.allErrors &&
                  ((p = u.opts.allErrors), (u.opts.allErrors = !1)),
                (n += " " + t.validate(u) + " "),
                (u.createErrors = !0),
                p && (u.opts.allErrors = p),
                (t.compositeRule = u.compositeRule = h),
                (n += " if (valid" + u.level + ") {   ");
              var f = f || [];
              f.push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: 'not' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: {} '),
                    !1 !== t.opts.messages &&
                      (n += " , message: 'should NOT be valid' "),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} ");
              var b = n;
              (n = f.pop()),
                !t.compositeRule && l
                  ? t.async
                    ? (n += " throw new ValidationError([" + b + "]); ")
                    : (n += " validate.errors = [" + b + "]; return false; ")
                  : (n +=
                      " var err = " +
                      b +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n +=
                  " } else {  errors = " +
                  d +
                  "; if (vErrors !== null) { if (" +
                  d +
                  ") vErrors.length = " +
                  d +
                  "; else vErrors = null; } "),
                t.opts.allErrors && (n += " } ");
            } else
              (n += "  var err =   "),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: 'not' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: {} '),
                    !1 !== t.opts.messages &&
                      (n += " , message: 'should NOT be valid' "),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} "),
                (n +=
                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                l && (n += " if (false) { ");
            return n;
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "errs__" + i,
              p = t.util.copy(t),
              h = "";
            p.level++,
              (n +=
                "var " +
                u +
                " = errors;var prevValid" +
                i +
                " = false;var " +
                d +
                " = false; ");
            var f = t.compositeRule;
            t.compositeRule = p.compositeRule = !0;
            var b = o;
            if (b)
              for (var m, g = -1, v = b.length - 1; g < v; )
                (m = b[(g += 1)]),
                  t.util.schemaHasRules(m, t.RULES.all)
                    ? ((p.schema = m),
                      (p.schemaPath = a + "[" + g + "]"),
                      (p.errSchemaPath = s + "/" + g),
                      (n += " " + t.validate(p) + " "))
                    : (n += " var valid" + p.level + " = true; "),
                  g &&
                    ((n +=
                      " if (valid" +
                      p.level +
                      " && prevValid" +
                      i +
                      ") " +
                      d +
                      " = false; else { "),
                    (h += "}")),
                  (n +=
                    " if (valid" +
                    p.level +
                    ") " +
                    d +
                    " = prevValid" +
                    i +
                    " = true;");
            (t.compositeRule = p.compositeRule = f),
              (n += h + "if (!" + d + ") {   ");
            var _ = _ || [];
            _.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'oneOf' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: {} '),
                  !1 !== t.opts.messages &&
                    (n +=
                      " , message: 'should match exactly one schema in oneOf' "),
                  t.opts.verbose &&
                    (n +=
                      " , schema: validate.schema" +
                      a +
                      " , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " "),
                  (n += " } "))
                : (n += " {} ");
            var y = n;
            return (
              (n = _.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + y + "]); ")
                  : (n += " validate.errors = [" + y + "]; return false; ")
                : (n +=
                    " var err = " +
                    y +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n +=
                "} else {  errors = " +
                u +
                "; if (vErrors !== null) { if (" +
                u +
                ") vErrors.length = " +
                u +
                "; else vErrors = null; }"),
              t.opts.allErrors && (n += " } "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = t.opts.v5 && o.$data,
              u = d ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            d &&
              ((n += " var schema" + i + " = " + u + "; "), (u = "schema" + i)),
              (n += "if ( "),
              d &&
                (n +=
                  " (" +
                  u +
                  " !== undefined && typeof " +
                  u +
                  " != 'string') || "),
              (n +=
                " !" +
                (d ? "(new RegExp(" + u + "))" : t.usePattern(o)) +
                ".test(" +
                c +
                ") ) {   ");
            var p = p || [];
            p.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'pattern' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { pattern:  '),
                  (n += d ? "" + u : "" + t.util.toQuotedString(o)),
                  (n += "  } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should match pattern \""),
                    (n += d
                      ? "' + " + u + " + '"
                      : "" + t.util.escapeQuotes(o)),
                    (n += "\"' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += d
                      ? "validate.schema" + a
                      : "" + t.util.toQuotedString(o)),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} ");
            var h = n;
            return (
              (n = p.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + h + "]); ")
                  : (n += " validate.errors = [" + h + "]; return false; ")
                : (n +=
                    " var err = " +
                    h +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "} "),
              l && (n += " else { "),
              n
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "errs__" + i,
              p = t.util.copy(t),
              h = "";
            p.level++;
            var f = (p.dataLevel = t.dataLevel + 1),
              b = "data" + f,
              m = Object.keys(o || {}),
              g = t.schema.patternProperties || {},
              v = Object.keys(g),
              _ = t.schema.additionalProperties,
              y = m.length || v.length,
              M = !1 === _,
              O = "object" == typeof _ && Object.keys(_).length,
              w = t.opts.removeAdditional,
              A = M || O || w,
              x = t.schema.required;
            if (x && (!t.opts.v5 || !x.$data) && x.length < t.opts.loopRequired)
              var z = t.util.toHash(x);
            if (t.opts.v5)
              var C = t.schema.patternGroups || {},
                k = Object.keys(C);
            if (
              ((n += "var " + u + " = errors;var valid" + p.level + " = true;"),
              A)
            ) {
              if (((n += " for (var key" + i + " in " + c + ") { "), y)) {
                if (((n += " var isAdditional" + i + " = !(false "), m.length))
                  if (m.length > 5)
                    n += " || validate.schema" + a + "[key" + i + "] ";
                  else {
                    var S = m;
                    if (S)
                      for (var T = -1, D = S.length - 1; T < D; )
                        (U = S[(T += 1)]),
                          (n +=
                            " || key" +
                            i +
                            " == " +
                            t.util.toQuotedString(U) +
                            " ");
                  }
                if (v.length) {
                  var L = v;
                  if (L)
                    for (var q = -1, E = L.length - 1; q < E; )
                      (et = L[(q += 1)]),
                        (n +=
                          " || " + t.usePattern(et) + ".test(key" + i + ") ");
                }
                if (t.opts.v5 && k && k.length) {
                  var j = k;
                  if (j) {
                    q = -1;
                    for (var P = j.length - 1; q < P; )
                      (ot = j[(q += 1)]),
                        (n +=
                          " || " + t.usePattern(ot) + ".test(key" + i + ") ");
                  }
                }
                n += " ); if (isAdditional" + i + ") { ";
              }
              if ("all" == w) n += " delete " + c + "[key" + i + "]; ";
              else {
                var R = t.errorPath,
                  I = "' + key" + i + " + '";
                if (
                  (t.opts._errorDataPathProperty &&
                    (t.errorPath = t.util.getPathExpr(
                      t.errorPath,
                      "key" + i,
                      t.opts.jsonPointers
                    )),
                  M)
                )
                  if (w) n += " delete " + c + "[key" + i + "]; ";
                  else {
                    n += " valid" + p.level + " = false; ";
                    var W = s;
                    (s = t.errSchemaPath + "/additionalProperties"),
                      (ft = ft || []).push(n),
                      (n = ""),
                      !1 !== t.createErrors
                        ? ((n +=
                            " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " +
                            t.errorPath +
                            ' , schemaPath: "' +
                            s +
                            "\" , params: { additionalProperty: '" +
                            I +
                            "' } "),
                          !1 !== t.opts.messages &&
                            (n +=
                              " , message: 'should NOT have additional properties' "),
                          t.opts.verbose &&
                            (n +=
                              " , schema: false , parentSchema: validate.schema" +
                              t.schemaPath +
                              " , data: " +
                              c +
                              " "),
                          (n += " } "))
                        : (n += " {} ");
                    var N = n;
                    (n = ft.pop()),
                      !t.compositeRule && l
                        ? t.async
                          ? (n += " throw new ValidationError([" + N + "]); ")
                          : (n +=
                              " validate.errors = [" + N + "]; return false; ")
                        : (n +=
                            " var err = " +
                            N +
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                      (s = W),
                      l && (n += " break; ");
                  }
                else if (O)
                  if ("failing" == w) {
                    n += " var " + u + " = errors;  ";
                    var B = t.compositeRule;
                    (t.compositeRule = p.compositeRule = !0),
                      (p.schema = _),
                      (p.schemaPath = t.schemaPath + ".additionalProperties"),
                      (p.errSchemaPath =
                        t.errSchemaPath + "/additionalProperties"),
                      (p.errorPath = t.opts._errorDataPathProperty
                        ? t.errorPath
                        : t.util.getPathExpr(
                            t.errorPath,
                            "key" + i,
                            t.opts.jsonPointers
                          ));
                    var F = c + "[key" + i + "]";
                    p.dataPathArr[f] = "key" + i;
                    var $ = t.validate(p);
                    t.util.varOccurences($, b) < 2
                      ? (n += " " + t.util.varReplace($, b, F) + " ")
                      : (n += " var " + b + " = " + F + "; " + $ + " "),
                      (n +=
                        " if (!valid" +
                        p.level +
                        ") { errors = " +
                        u +
                        "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " +
                        c +
                        "[key" +
                        i +
                        "]; }  "),
                      (t.compositeRule = p.compositeRule = B);
                  } else
                    (p.schema = _),
                      (p.schemaPath = t.schemaPath + ".additionalProperties"),
                      (p.errSchemaPath =
                        t.errSchemaPath + "/additionalProperties"),
                      (p.errorPath = t.opts._errorDataPathProperty
                        ? t.errorPath
                        : t.util.getPathExpr(
                            t.errorPath,
                            "key" + i,
                            t.opts.jsonPointers
                          )),
                      (F = c + "[key" + i + "]"),
                      (p.dataPathArr[f] = "key" + i),
                      ($ = t.validate(p)),
                      t.util.varOccurences($, b) < 2
                        ? (n += " " + t.util.varReplace($, b, F) + " ")
                        : (n += " var " + b + " = " + F + "; " + $ + " "),
                      l && (n += " if (!valid" + p.level + ") break; ");
                t.errorPath = R;
              }
              y && (n += " } "),
                (n += " }  "),
                l && ((n += " if (valid" + p.level + ") { "), (h += "}"));
            }
            var H = t.opts.useDefaults && !t.compositeRule;
            if (m.length) {
              var Y = m;
              if (Y)
                for (var U, X = -1, V = Y.length - 1; X < V; ) {
                  var G = o[(U = Y[(X += 1)])];
                  if (t.util.schemaHasRules(G, t.RULES.all)) {
                    var K = t.util.getProperty(U),
                      Z = ((F = c + K), H && void 0 !== G.default);
                    if (
                      ((p.schema = G),
                      (p.schemaPath = a + K),
                      (p.errSchemaPath = s + "/" + t.util.escapeFragment(U)),
                      (p.errorPath = t.util.getPath(
                        t.errorPath,
                        U,
                        t.opts.jsonPointers
                      )),
                      (p.dataPathArr[f] = t.util.toQuotedString(U)),
                      ($ = t.validate(p)),
                      t.util.varOccurences($, b) < 2)
                    ) {
                      $ = t.util.varReplace($, b, F);
                      var J = F;
                    } else (J = b), (n += " var " + b + " = " + F + "; ");
                    if (Z) n += " " + $ + " ";
                    else {
                      if (z && z[U]) {
                        (n +=
                          " if (" +
                          J +
                          " === undefined) { valid" +
                          p.level +
                          " = false; "),
                          (R = t.errorPath),
                          (W = s);
                        var Q = t.util.escapeQuotes(U);
                        t.opts._errorDataPathProperty &&
                          (t.errorPath = t.util.getPath(
                            R,
                            U,
                            t.opts.jsonPointers
                          )),
                          (s = t.errSchemaPath + "/required"),
                          (ft = ft || []).push(n),
                          (n = ""),
                          !1 !== t.createErrors
                            ? ((n +=
                                " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                t.errorPath +
                                ' , schemaPath: "' +
                                s +
                                "\" , params: { missingProperty: '" +
                                Q +
                                "' } "),
                              !1 !== t.opts.messages &&
                                ((n += " , message: '"),
                                t.opts._errorDataPathProperty
                                  ? (n += "is a required property")
                                  : (n +=
                                      "should have required property \\'" +
                                      Q +
                                      "\\'"),
                                (n += "' ")),
                              t.opts.verbose &&
                                (n +=
                                  " , schema: validate.schema" +
                                  a +
                                  " , parentSchema: validate.schema" +
                                  t.schemaPath +
                                  " , data: " +
                                  c +
                                  " "),
                              (n += " } "))
                            : (n += " {} "),
                          (N = n),
                          (n = ft.pop()),
                          !t.compositeRule && l
                            ? t.async
                              ? (n +=
                                  " throw new ValidationError([" + N + "]); ")
                              : (n +=
                                  " validate.errors = [" +
                                  N +
                                  "]; return false; ")
                            : (n +=
                                " var err = " +
                                N +
                                ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                          (s = W),
                          (t.errorPath = R),
                          (n += " } else { ");
                      } else
                        n += l
                          ? " if (" +
                            J +
                            " === undefined) { valid" +
                            p.level +
                            " = true; } else { "
                          : " if (" + J + " !== undefined) { ";
                      n += " " + $ + " } ";
                    }
                  }
                  l && ((n += " if (valid" + p.level + ") { "), (h += "}"));
                }
            }
            var tt = v;
            if (tt)
              for (var et, nt = -1, it = tt.length - 1; nt < it; )
                (G = g[(et = tt[(nt += 1)])]),
                  t.util.schemaHasRules(G, t.RULES.all) &&
                    ((p.schema = G),
                    (p.schemaPath =
                      t.schemaPath +
                      ".patternProperties" +
                      t.util.getProperty(et)),
                    (p.errSchemaPath =
                      t.errSchemaPath +
                      "/patternProperties/" +
                      t.util.escapeFragment(et)),
                    (n +=
                      " for (var key" +
                      i +
                      " in " +
                      c +
                      ") { if (" +
                      t.usePattern(et) +
                      ".test(key" +
                      i +
                      ")) { "),
                    (p.errorPath = t.util.getPathExpr(
                      t.errorPath,
                      "key" + i,
                      t.opts.jsonPointers
                    )),
                    (F = c + "[key" + i + "]"),
                    (p.dataPathArr[f] = "key" + i),
                    ($ = t.validate(p)),
                    t.util.varOccurences($, b) < 2
                      ? (n += " " + t.util.varReplace($, b, F) + " ")
                      : (n += " var " + b + " = " + F + "; " + $ + " "),
                    l && (n += " if (!valid" + p.level + ") break; "),
                    (n += " } "),
                    l && (n += " else valid" + p.level + " = true; "),
                    (n += " }  "),
                    l && ((n += " if (valid" + p.level + ") { "), (h += "}")));
            if (t.opts.v5) {
              var rt = k;
              if (rt)
                for (var ot, at = -1, st = rt.length - 1; at < st; ) {
                  var lt = C[(ot = rt[(at += 1)])];
                  if (
                    ((G = lt.schema), t.util.schemaHasRules(G, t.RULES.all))
                  ) {
                    (p.schema = G),
                      (p.schemaPath =
                        t.schemaPath +
                        ".patternGroups" +
                        t.util.getProperty(ot) +
                        ".schema"),
                      (p.errSchemaPath =
                        t.errSchemaPath +
                        "/patternGroups/" +
                        t.util.escapeFragment(ot) +
                        "/schema"),
                      (n +=
                        " var pgPropCount" +
                        i +
                        " = 0; for (var key" +
                        i +
                        " in " +
                        c +
                        ") { if (" +
                        t.usePattern(ot) +
                        ".test(key" +
                        i +
                        ")) { pgPropCount" +
                        i +
                        "++; "),
                      (p.errorPath = t.util.getPathExpr(
                        t.errorPath,
                        "key" + i,
                        t.opts.jsonPointers
                      )),
                      (F = c + "[key" + i + "]"),
                      (p.dataPathArr[f] = "key" + i),
                      ($ = t.validate(p)),
                      t.util.varOccurences($, b) < 2
                        ? (n += " " + t.util.varReplace($, b, F) + " ")
                        : (n += " var " + b + " = " + F + "; " + $ + " "),
                      l && (n += " if (!valid" + p.level + ") break; "),
                      (n += " } "),
                      l && (n += " else valid" + p.level + " = true; "),
                      (n += " }  "),
                      l && ((n += " if (valid" + p.level + ") { "), (h += "}"));
                    var ct = lt.minimum,
                      dt = lt.maximum;
                    if (void 0 !== ct || void 0 !== dt) {
                      if (
                        ((n += " var " + d + " = true; "),
                        (W = s),
                        void 0 !== ct)
                      ) {
                        var ut = ct,
                          pt = "minimum",
                          ht = "less";
                        (n +=
                          " " + d + " = pgPropCount" + i + " >= " + ct + "; "),
                          (s = t.errSchemaPath + "/patternGroups/minimum"),
                          (n += "  if (!" + d + ") {   "),
                          (ft = ft || []).push(n),
                          (n = ""),
                          !1 !== t.createErrors
                            ? ((n +=
                                " { keyword: 'patternGroups' , dataPath: (dataPath || '') + " +
                                t.errorPath +
                                ' , schemaPath: "' +
                                s +
                                "\" , params: { reason: '" +
                                pt +
                                "', limit: " +
                                ut +
                                ", pattern: '" +
                                t.util.escapeQuotes(ot) +
                                "' } "),
                              !1 !== t.opts.messages &&
                                (n +=
                                  " , message: 'should NOT have " +
                                  ht +
                                  " than " +
                                  ut +
                                  ' properties matching pattern "' +
                                  t.util.escapeQuotes(ot) +
                                  "\"' "),
                              t.opts.verbose &&
                                (n +=
                                  " , schema: validate.schema" +
                                  a +
                                  " , parentSchema: validate.schema" +
                                  t.schemaPath +
                                  " , data: " +
                                  c +
                                  " "),
                              (n += " } "))
                            : (n += " {} "),
                          (N = n),
                          (n = ft.pop()),
                          !t.compositeRule && l
                            ? t.async
                              ? (n +=
                                  " throw new ValidationError([" + N + "]); ")
                              : (n +=
                                  " validate.errors = [" +
                                  N +
                                  "]; return false; ")
                            : (n +=
                                " var err = " +
                                N +
                                ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                          (n += " } "),
                          void 0 !== dt && (n += " else ");
                      }
                      var ft;
                      void 0 !== dt &&
                        ((ut = dt),
                        (pt = "maximum"),
                        (ht = "more"),
                        (n +=
                          " " + d + " = pgPropCount" + i + " <= " + dt + "; "),
                        (s = t.errSchemaPath + "/patternGroups/maximum"),
                        (n += "  if (!" + d + ") {   "),
                        (ft = ft || []).push(n),
                        (n = ""),
                        !1 !== t.createErrors
                          ? ((n +=
                              " { keyword: 'patternGroups' , dataPath: (dataPath || '') + " +
                              t.errorPath +
                              ' , schemaPath: "' +
                              s +
                              "\" , params: { reason: '" +
                              pt +
                              "', limit: " +
                              ut +
                              ", pattern: '" +
                              t.util.escapeQuotes(ot) +
                              "' } "),
                            !1 !== t.opts.messages &&
                              (n +=
                                " , message: 'should NOT have " +
                                ht +
                                " than " +
                                ut +
                                ' properties matching pattern "' +
                                t.util.escapeQuotes(ot) +
                                "\"' "),
                            t.opts.verbose &&
                              (n +=
                                " , schema: validate.schema" +
                                a +
                                " , parentSchema: validate.schema" +
                                t.schemaPath +
                                " , data: " +
                                c +
                                " "),
                            (n += " } "))
                          : (n += " {} "),
                        (N = n),
                        (n = ft.pop()),
                        !t.compositeRule && l
                          ? t.async
                            ? (n += " throw new ValidationError([" + N + "]); ")
                            : (n +=
                                " validate.errors = [" +
                                N +
                                "]; return false; ")
                          : (n +=
                              " var err = " +
                              N +
                              ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                        (n += " } ")),
                        (s = W),
                        l && ((n += " if (" + d + ") { "), (h += "}"));
                    }
                  }
                }
            }
            return (
              l && (n += " " + h + " if (" + u + " == errors) {"),
              (n = t.util.cleanUpCode(n))
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = t.opts.v5 && o.$data,
              p = u ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            if (
              (u &&
                ((n += " var schema" + i + " = " + p + "; "),
                (p = "schema" + i)),
              !u)
            )
              if (
                o.length < t.opts.loopRequired &&
                t.schema.properties &&
                Object.keys(t.schema.properties).length
              ) {
                var h = [],
                  f = o;
                if (f)
                  for (var b = -1, m = f.length - 1; b < m; ) {
                    S = f[(b += 1)];
                    var g = t.schema.properties[S];
                    (g && t.util.schemaHasRules(g, t.RULES.all)) ||
                      (h[h.length] = S);
                  }
              } else h = o;
            if (u || h.length) {
              var v = t.errorPath,
                _ = u || h.length >= t.opts.loopRequired;
              if (l)
                if (((n += " var missing" + i + "; "), _)) {
                  u ||
                    (n += " var schema" + i + " = validate.schema" + a + "; ");
                  var y =
                    "' + " +
                    (C = "schema" + i + "[" + (x = "i" + i) + "]") +
                    " + '";
                  t.opts._errorDataPathProperty &&
                    (t.errorPath = t.util.getPathExpr(
                      v,
                      C,
                      t.opts.jsonPointers
                    )),
                    (n += " var " + d + " = true; "),
                    u &&
                      (n +=
                        " if (schema" +
                        i +
                        " === undefined) " +
                        d +
                        " = true; else if (!Array.isArray(schema" +
                        i +
                        ")) " +
                        d +
                        " = false; else {"),
                    (n +=
                      " for (var " +
                      x +
                      " = 0; " +
                      x +
                      " < schema" +
                      i +
                      ".length; " +
                      x +
                      "++) { " +
                      d +
                      " = " +
                      c +
                      "[schema" +
                      i +
                      "[" +
                      x +
                      "]] !== undefined; if (!" +
                      d +
                      ") break; } "),
                    u && (n += "  }  "),
                    (n += "  if (!" + d + ") {   "),
                    (O = O || []).push(n),
                    (n = ""),
                    !1 !== t.createErrors
                      ? ((n +=
                          " { keyword: 'required' , dataPath: (dataPath || '') + " +
                          t.errorPath +
                          ' , schemaPath: "' +
                          s +
                          "\" , params: { missingProperty: '" +
                          y +
                          "' } "),
                        !1 !== t.opts.messages &&
                          ((n += " , message: '"),
                          t.opts._errorDataPathProperty
                            ? (n += "is a required property")
                            : (n +=
                                "should have required property \\'" +
                                y +
                                "\\'"),
                          (n += "' ")),
                        t.opts.verbose &&
                          (n +=
                            " , schema: validate.schema" +
                            a +
                            " , parentSchema: validate.schema" +
                            t.schemaPath +
                            " , data: " +
                            c +
                            " "),
                        (n += " } "))
                      : (n += " {} ");
                  var M = n;
                  (n = O.pop()),
                    !t.compositeRule && l
                      ? t.async
                        ? (n += " throw new ValidationError([" + M + "]); ")
                        : (n +=
                            " validate.errors = [" + M + "]; return false; ")
                      : (n +=
                          " var err = " +
                          M +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (n += " } else { ");
                } else {
                  n += " if ( ";
                  var O,
                    w = h;
                  if (w)
                    for (var A, x = -1, z = w.length - 1; x < z; )
                      (A = w[(x += 1)]),
                        x && (n += " || "),
                        (n +=
                          " ( " +
                          c +
                          (D = t.util.getProperty(A)) +
                          " === undefined && (missing" +
                          i +
                          " = " +
                          t.util.toQuotedString(t.opts.jsonPointers ? A : D) +
                          ") ) ");
                  (n += ") {  "),
                    (y = "' + " + (C = "missing" + i) + " + '"),
                    t.opts._errorDataPathProperty &&
                      (t.errorPath = t.opts.jsonPointers
                        ? t.util.getPathExpr(v, C, !0)
                        : v + " + " + C),
                    (O = O || []).push(n),
                    (n = ""),
                    !1 !== t.createErrors
                      ? ((n +=
                          " { keyword: 'required' , dataPath: (dataPath || '') + " +
                          t.errorPath +
                          ' , schemaPath: "' +
                          s +
                          "\" , params: { missingProperty: '" +
                          y +
                          "' } "),
                        !1 !== t.opts.messages &&
                          ((n += " , message: '"),
                          t.opts._errorDataPathProperty
                            ? (n += "is a required property")
                            : (n +=
                                "should have required property \\'" +
                                y +
                                "\\'"),
                          (n += "' ")),
                        t.opts.verbose &&
                          (n +=
                            " , schema: validate.schema" +
                            a +
                            " , parentSchema: validate.schema" +
                            t.schemaPath +
                            " , data: " +
                            c +
                            " "),
                        (n += " } "))
                      : (n += " {} "),
                    (M = n),
                    (n = O.pop()),
                    !t.compositeRule && l
                      ? t.async
                        ? (n += " throw new ValidationError([" + M + "]); ")
                        : (n +=
                            " validate.errors = [" + M + "]; return false; ")
                      : (n +=
                          " var err = " +
                          M +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (n += " } else { ");
                }
              else if (_) {
                var C;
                u || (n += " var schema" + i + " = validate.schema" + a + "; "),
                  (y =
                    "' + " +
                    (C = "schema" + i + "[" + (x = "i" + i) + "]") +
                    " + '"),
                  t.opts._errorDataPathProperty &&
                    (t.errorPath = t.util.getPathExpr(
                      v,
                      C,
                      t.opts.jsonPointers
                    )),
                  u &&
                    ((n +=
                      " if (schema" +
                      i +
                      " && !Array.isArray(schema" +
                      i +
                      ")) {  var err =   "),
                    !1 !== t.createErrors
                      ? ((n +=
                          " { keyword: 'required' , dataPath: (dataPath || '') + " +
                          t.errorPath +
                          ' , schemaPath: "' +
                          s +
                          "\" , params: { missingProperty: '" +
                          y +
                          "' } "),
                        !1 !== t.opts.messages &&
                          ((n += " , message: '"),
                          t.opts._errorDataPathProperty
                            ? (n += "is a required property")
                            : (n +=
                                "should have required property \\'" +
                                y +
                                "\\'"),
                          (n += "' ")),
                        t.opts.verbose &&
                          (n +=
                            " , schema: validate.schema" +
                            a +
                            " , parentSchema: validate.schema" +
                            t.schemaPath +
                            " , data: " +
                            c +
                            " "),
                        (n += " } "))
                      : (n += " {} "),
                    (n +=
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (schema" +
                      i +
                      " !== undefined) { ")),
                  (n +=
                    " for (var " +
                    x +
                    " = 0; " +
                    x +
                    " < schema" +
                    i +
                    ".length; " +
                    x +
                    "++) { if (" +
                    c +
                    "[schema" +
                    i +
                    "[" +
                    x +
                    "]] === undefined) {  var err =   "),
                  !1 !== t.createErrors
                    ? ((n +=
                        " { keyword: 'required' , dataPath: (dataPath || '') + " +
                        t.errorPath +
                        ' , schemaPath: "' +
                        s +
                        "\" , params: { missingProperty: '" +
                        y +
                        "' } "),
                      !1 !== t.opts.messages &&
                        ((n += " , message: '"),
                        t.opts._errorDataPathProperty
                          ? (n += "is a required property")
                          : (n +=
                              "should have required property \\'" + y + "\\'"),
                        (n += "' ")),
                      t.opts.verbose &&
                        (n +=
                          " , schema: validate.schema" +
                          a +
                          " , parentSchema: validate.schema" +
                          t.schemaPath +
                          " , data: " +
                          c +
                          " "),
                      (n += " } "))
                    : (n += " {} "),
                  (n +=
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } "),
                  u && (n += "  }  ");
              } else {
                var k = h;
                if (k) {
                  x = -1;
                  for (var S, T = k.length - 1; x < T; ) {
                    S = k[(x += 1)];
                    var D = t.util.getProperty(S);
                    (y = t.util.escapeQuotes(S)),
                      t.opts._errorDataPathProperty &&
                        (t.errorPath = t.util.getPath(
                          v,
                          S,
                          t.opts.jsonPointers
                        )),
                      (n +=
                        " if (" + c + D + " === undefined) {  var err =   "),
                      !1 !== t.createErrors
                        ? ((n +=
                            " { keyword: 'required' , dataPath: (dataPath || '') + " +
                            t.errorPath +
                            ' , schemaPath: "' +
                            s +
                            "\" , params: { missingProperty: '" +
                            y +
                            "' } "),
                          !1 !== t.opts.messages &&
                            ((n += " , message: '"),
                            t.opts._errorDataPathProperty
                              ? (n += "is a required property")
                              : (n +=
                                  "should have required property \\'" +
                                  y +
                                  "\\'"),
                            (n += "' ")),
                          t.opts.verbose &&
                            (n +=
                              " , schema: validate.schema" +
                              a +
                              " , parentSchema: validate.schema" +
                              t.schemaPath +
                              " , data: " +
                              c +
                              " "),
                          (n += " } "))
                        : (n += " {} "),
                      (n +=
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ");
                  }
                }
              }
              t.errorPath = v;
            } else l && (n += " if (true) {");
            return n;
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = t.opts.v5 && o.$data,
              p = u ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            if (
              (u &&
                ((n += " var schema" + i + " = " + p + "; "),
                (p = "schema" + i)),
              (o || u) && !1 !== t.opts.uniqueItems)
            ) {
              u &&
                (n +=
                  " var " +
                  d +
                  "; if (" +
                  p +
                  " === false || " +
                  p +
                  " === undefined) " +
                  d +
                  " = true; else if (typeof " +
                  p +
                  " != 'boolean') " +
                  d +
                  " = false; else { "),
                (n +=
                  " var " +
                  d +
                  " = true; if (" +
                  c +
                  ".length > 1) { var i = " +
                  c +
                  ".length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal(" +
                  c +
                  "[i], " +
                  c +
                  "[j])) { " +
                  d +
                  " = false; break outer; } } } } "),
                u && (n += "  }  "),
                (n += " if (!" + d + ") {   ");
              var h = h || [];
              h.push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: { i: i, j: j } '),
                    !1 !== t.opts.messages &&
                      (n +=
                        " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),
                    t.opts.verbose &&
                      ((n += " , schema:  "),
                      (n += u ? "validate.schema" + a : "" + o),
                      (n +=
                        "         , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " ")),
                    (n += " } "))
                  : (n += " {} ");
              var f = n;
              (n = h.pop()),
                !t.compositeRule && l
                  ? t.async
                    ? (n += " throw new ValidationError([" + f + "]); ")
                    : (n += " validate.errors = [" + f + "]; return false; ")
                  : (n +=
                      " var err = " +
                      f +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n += " } "),
                l && (n += " else { ");
            } else l && (n += " if (true) { ");
            return n;
          };
        },
        function (t, e, n) {
          "use strict";
          var i =
            "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json";
          function r(t) {
            return { not: { items: { not: t } } };
          }
          t.exports = {
            enable: function (t) {
              var e = {
                switch: n(44),
                constant: n(45),
                _formatLimit: n(46),
                patternRequired: n(47),
              };
              if (!1 !== t._opts.meta) {
                var o = n(48);
                t.addMetaSchema(o, i);
              }
              function a(n, i, r) {
                var o = { inline: r || e[n], statements: !0, errors: "full" };
                i && (o.type = i), t.addKeyword(n, o);
              }
              a("constant"),
                t.addKeyword("contains", { type: "array", macro: r }),
                a("formatMaximum", "string", e._formatLimit),
                a("formatMinimum", "string", e._formatLimit),
                t.addKeyword("exclusiveFormatMaximum"),
                t.addKeyword("exclusiveFormatMinimum"),
                t.addKeyword("patternGroups"),
                a("patternRequired", "object"),
                a("switch");
            },
            META_SCHEMA_ID: i,
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "errs__" + i,
              p = t.util.copy(t),
              h = "";
            p.level++;
            var f,
              b = "ifPassed" + t.level;
            n += "var " + b + ";";
            var m = o;
            if (m)
              for (var g, v = -1, _ = m.length - 1; v < _; ) {
                if (
                  ((g = m[(v += 1)]),
                  v && !f && ((n += " if (!" + b + ") { "), (h += "}")),
                  g.if && t.util.schemaHasRules(g.if, t.RULES.all))
                ) {
                  n += " var " + u + " = errors;   ";
                  var y = t.compositeRule;
                  if (
                    ((t.compositeRule = p.compositeRule = !0),
                    (p.createErrors = !1),
                    (p.schema = g.if),
                    (p.schemaPath = a + "[" + v + "].if"),
                    (p.errSchemaPath = s + "/" + v + "/if"),
                    (n += " " + t.validate(p) + " "),
                    (p.createErrors = !0),
                    (t.compositeRule = p.compositeRule = y),
                    (n +=
                      " " + b + " = valid" + p.level + "; if (" + b + ") {  "),
                    "boolean" == typeof g.then)
                  ) {
                    if (!1 === g.then) {
                      (O = O || []).push(n),
                        (n = ""),
                        !1 !== t.createErrors
                          ? ((n +=
                              " { keyword: 'switch' , dataPath: (dataPath || '') + " +
                              t.errorPath +
                              ' , schemaPath: "' +
                              s +
                              '" , params: { caseIndex: ' +
                              v +
                              " } "),
                            !1 !== t.opts.messages &&
                              (n +=
                                " , message: 'should pass \"switch\" keyword validation' "),
                            t.opts.verbose &&
                              (n +=
                                " , schema: validate.schema" +
                                a +
                                " , parentSchema: validate.schema" +
                                t.schemaPath +
                                " , data: " +
                                c +
                                " "),
                            (n += " } "))
                          : (n += " {} ");
                      var M = n;
                      (n = O.pop()),
                        !t.compositeRule && l
                          ? t.async
                            ? (n += " throw new ValidationError([" + M + "]); ")
                            : (n +=
                                " validate.errors = [" +
                                M +
                                "]; return false; ")
                          : (n +=
                              " var err = " +
                              M +
                              ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                    }
                    n += " var valid" + p.level + " = " + g.then + "; ";
                  } else
                    (p.schema = g.then),
                      (p.schemaPath = a + "[" + v + "].then"),
                      (p.errSchemaPath = s + "/" + v + "/then"),
                      (n += " " + t.validate(p) + " ");
                  n +=
                    "  } else {  errors = " +
                    u +
                    "; if (vErrors !== null) { if (" +
                    u +
                    ") vErrors.length = " +
                    u +
                    "; else vErrors = null; } } ";
                } else if (
                  ((n += " " + b + " = true;  "), "boolean" == typeof g.then)
                ) {
                  var O;
                  !1 === g.then &&
                    ((O = O || []).push(n),
                    (n = ""),
                    !1 !== t.createErrors
                      ? ((n +=
                          " { keyword: 'switch' , dataPath: (dataPath || '') + " +
                          t.errorPath +
                          ' , schemaPath: "' +
                          s +
                          '" , params: { caseIndex: ' +
                          v +
                          " } "),
                        !1 !== t.opts.messages &&
                          (n +=
                            " , message: 'should pass \"switch\" keyword validation' "),
                        t.opts.verbose &&
                          (n +=
                            " , schema: validate.schema" +
                            a +
                            " , parentSchema: validate.schema" +
                            t.schemaPath +
                            " , data: " +
                            c +
                            " "),
                        (n += " } "))
                      : (n += " {} "),
                    (M = n),
                    (n = O.pop()),
                    !t.compositeRule && l
                      ? t.async
                        ? (n += " throw new ValidationError([" + M + "]); ")
                        : (n +=
                            " validate.errors = [" + M + "]; return false; ")
                      : (n +=
                          " var err = " +
                          M +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ")),
                    (n += " var valid" + p.level + " = " + g.then + "; ");
                } else
                  (p.schema = g.then),
                    (p.schemaPath = a + "[" + v + "].then"),
                    (p.errSchemaPath = s + "/" + v + "/then"),
                    (n += " " + t.validate(p) + " ");
                f = g.continue;
              }
            return (
              (n += h + "var " + d + " = valid" + p.level + "; "),
              (n = t.util.cleanUpCode(n))
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = t.opts.v5 && o.$data,
              p = u ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            u &&
              ((n += " var schema" + i + " = " + p + "; "), (p = "schema" + i)),
              u || (n += " var schema" + i + " = validate.schema" + a + ";"),
              (n +=
                "var " +
                d +
                " = equal(" +
                c +
                ", schema" +
                i +
                "); if (!" +
                d +
                ") {   ");
            var h = h || [];
            h.push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: 'constant' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: {} '),
                  !1 !== t.opts.messages &&
                    (n += " , message: 'should be equal to constant' "),
                  t.opts.verbose &&
                    (n +=
                      " , schema: validate.schema" +
                      a +
                      " , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " "),
                  (n += " } "))
                : (n += " {} ");
            var f = n;
            return (
              (n = h.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + f + "]); ")
                  : (n += " validate.errors = [" + f + "]; return false; ")
                : (n +=
                    " var err = " +
                    f +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += " }")
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i;
            if (((n += "var " + d + " = undefined;"), !1 === t.opts.format))
              return (n += " " + d + " = true; ");
            var u = t.schema.format,
              p = t.opts.v5 && u.$data,
              h = "";
            if (p)
              n +=
                " var " +
                (f = "format" + i) +
                " = formats[" +
                t.util.getData(u.$data, r, t.dataPathArr) +
                "] , " +
                (b = "compare" + i) +
                " = " +
                f +
                " && " +
                f +
                ".compare;";
            else {
              var f;
              if (!(f = t.formats[u]) || !f.compare)
                return (n += "  " + d + " = true; ");
              var b = "formats" + t.util.getProperty(u) + ".compare";
            }
            var m,
              g = "formatMaximum" == e,
              v = "exclusiveFormat" + (g ? "Maximum" : "Minimum"),
              _ = t.schema[v],
              y = t.opts.v5 && _ && _.$data,
              M = g ? "<" : ">",
              O = "result" + i,
              w = t.opts.v5 && o.$data,
              A = w ? t.util.getData(o.$data, r, t.dataPathArr) : o;
            if (
              (w &&
                ((n += " var schema" + i + " = " + A + "; "),
                (A = "schema" + i)),
              y)
            ) {
              var x = t.util.getData(_.$data, r, t.dataPathArr),
                z = "exclusive" + i,
                C = "' + op" + i + " + '";
              (n += " var schemaExcl" + i + " = " + x + "; "),
                (n +=
                  " if (typeof " +
                  (x = "schemaExcl" + i) +
                  " != 'boolean' && " +
                  x +
                  " !== undefined) { " +
                  d +
                  " = false; ");
              var k = v;
              (m = m || []).push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: '" +
                      (k || "_exclusiveFormatLimit") +
                      "' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      s +
                      '" , params: {} '),
                    !1 !== t.opts.messages &&
                      (n += " , message: '" + v + " should be boolean' "),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        a +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        c +
                        " "),
                    (n += " } "))
                  : (n += " {} ");
              var S = n;
              (n = m.pop()),
                !t.compositeRule && l
                  ? t.async
                    ? (n += " throw new ValidationError([" + S + "]); ")
                    : (n += " validate.errors = [" + S + "]; return false; ")
                  : (n +=
                      " var err = " +
                      S +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n += " }  "),
                l && ((h += "}"), (n += " else { ")),
                w &&
                  ((n +=
                    " if (" +
                    A +
                    " === undefined) " +
                    d +
                    " = true; else if (typeof " +
                    A +
                    " != 'string') " +
                    d +
                    " = false; else { "),
                  (h += "}")),
                p &&
                  ((n += " if (!" + b + ") " + d + " = true; else { "),
                  (h += "}")),
                (n += " var " + O + " = " + b + "(" + c + ",  "),
                (n += w ? "" + A : "" + t.util.toQuotedString(o)),
                (n +=
                  " ); if (" +
                  O +
                  " === undefined) " +
                  d +
                  " = false; var exclusive" +
                  i +
                  " = " +
                  x +
                  " === true; if (" +
                  d +
                  " === undefined) { " +
                  d +
                  " = exclusive" +
                  i +
                  " ? " +
                  O +
                  " " +
                  M +
                  " 0 : " +
                  O +
                  " " +
                  M +
                  "= 0; } if (!" +
                  d +
                  ") var op" +
                  i +
                  " = exclusive" +
                  i +
                  " ? '" +
                  M +
                  "' : '" +
                  M +
                  "=';");
            } else
              (C = M),
                (z = !0 === _) || (C += "="),
                w &&
                  ((n +=
                    " if (" +
                    A +
                    " === undefined) " +
                    d +
                    " = true; else if (typeof " +
                    A +
                    " != 'string') " +
                    d +
                    " = false; else { "),
                  (h += "}")),
                p &&
                  ((n += " if (!" + b + ") " + d + " = true; else { "),
                  (h += "}")),
                (n += " var " + O + " = " + b + "(" + c + ",  "),
                (n += w ? "" + A : "" + t.util.toQuotedString(o)),
                (n +=
                  " ); if (" +
                  O +
                  " === undefined) " +
                  d +
                  " = false; if (" +
                  d +
                  " === undefined) " +
                  d +
                  " = " +
                  O +
                  " " +
                  M),
                z || (n += "="),
                (n += " 0;");
            return (
              (n += h + "if (!" + d + ") { "),
              (k = e),
              (m = m || []).push(n),
              (n = ""),
              !1 !== t.createErrors
                ? ((n +=
                    " { keyword: '" +
                    (k || "_formatLimit") +
                    "' , dataPath: (dataPath || '') + " +
                    t.errorPath +
                    ' , schemaPath: "' +
                    s +
                    '" , params: { limit:  '),
                  (n += w ? "" + A : "" + t.util.toQuotedString(o)),
                  (n += "  } "),
                  !1 !== t.opts.messages &&
                    ((n += " , message: 'should be " + C + ' "'),
                    (n += w
                      ? "' + " + A + " + '"
                      : "" + t.util.escapeQuotes(o)),
                    (n += "\"' ")),
                  t.opts.verbose &&
                    ((n += " , schema:  "),
                    (n += w
                      ? "validate.schema" + a
                      : "" + t.util.toQuotedString(o)),
                    (n +=
                      "         , parentSchema: validate.schema" +
                      t.schemaPath +
                      " , data: " +
                      c +
                      " ")),
                  (n += " } "))
                : (n += " {} "),
              (S = n),
              (n = m.pop()),
              !t.compositeRule && l
                ? t.async
                  ? (n += " throw new ValidationError([" + S + "]); ")
                  : (n += " validate.errors = [" + S + "]; return false; ")
                : (n +=
                    " var err = " +
                    S +
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
              (n += "}")
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = " ",
              i = t.level,
              r = t.dataLevel,
              o = t.schema[e],
              a = t.schemaPath + "." + e,
              s = t.errSchemaPath + "/" + e,
              l = !t.opts.allErrors,
              c = "data" + (r || ""),
              d = "valid" + i,
              u = "key" + i,
              p = "patternMatched" + i,
              h = "";
            n += "var " + d + " = true;";
            var f = o;
            if (f)
              for (var b, m = -1, g = f.length - 1; m < g; ) {
                (b = f[(m += 1)]),
                  (n +=
                    " var " +
                    p +
                    " = false; for (var " +
                    u +
                    " in " +
                    c +
                    ") { " +
                    p +
                    " = " +
                    t.usePattern(b) +
                    ".test(" +
                    u +
                    "); if (" +
                    p +
                    ") break; } ");
                var v = t.util.escapeQuotes(b);
                (n += " if (!" + p + ") { " + d + " = false;  var err =   "),
                  !1 !== t.createErrors
                    ? ((n +=
                        " { keyword: 'patternRequired' , dataPath: (dataPath || '') + " +
                        t.errorPath +
                        ' , schemaPath: "' +
                        s +
                        "\" , params: { missingPattern: '" +
                        v +
                        "' } "),
                      !1 !== t.opts.messages &&
                        (n +=
                          " , message: 'should have property matching pattern \\'" +
                          v +
                          "\\'' "),
                      t.opts.verbose &&
                        (n +=
                          " , schema: validate.schema" +
                          a +
                          " , parentSchema: validate.schema" +
                          t.schemaPath +
                          " , data: " +
                          c +
                          " "),
                      (n += " } "))
                    : (n += " {} "),
                  (n +=
                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   "),
                  l && ((h += "}"), (n += " else { "));
              }
            return (n += "" + h);
          };
        },
        function (t, e) {
          t.exports = {
            id: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#",
            $schema: "http://json-schema.org/draft-04/schema#",
            description: "Core schema meta-schema (v5 proposals)",
            definitions: {
              schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
              positiveInteger: { type: "integer", minimum: 0 },
              positiveIntegerDefault0: {
                allOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                enum: [
                  "array",
                  "boolean",
                  "integer",
                  "null",
                  "number",
                  "object",
                  "string",
                ],
              },
              stringArray: {
                type: "array",
                items: { type: "string" },
                minItems: 1,
                uniqueItems: !0,
              },
              $data: {
                type: "object",
                required: ["$data"],
                properties: {
                  $data: { type: "string", format: "relative-json-pointer" },
                },
                additionalProperties: !1,
              },
            },
            type: "object",
            properties: {
              id: { type: "string", format: "uri" },
              $schema: { type: "string", format: "uri" },
              title: { type: "string" },
              description: { type: "string" },
              default: {},
              multipleOf: {
                anyOf: [
                  { type: "number", minimum: 0, exclusiveMinimum: !0 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              maximum: {
                anyOf: [{ type: "number" }, { $ref: "#/definitions/$data" }],
              },
              exclusiveMaximum: {
                anyOf: [
                  { type: "boolean", default: !1 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              minimum: {
                anyOf: [{ type: "number" }, { $ref: "#/definitions/$data" }],
              },
              exclusiveMinimum: {
                anyOf: [
                  { type: "boolean", default: !1 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              maxLength: {
                anyOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              minLength: {
                anyOf: [
                  { $ref: "#/definitions/positiveIntegerDefault0" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              pattern: {
                anyOf: [
                  { type: "string", format: "regex" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              additionalItems: {
                anyOf: [
                  { type: "boolean" },
                  { $ref: "#" },
                  { $ref: "#/definitions/$data" },
                ],
                default: {},
              },
              items: {
                anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                default: {},
              },
              maxItems: {
                anyOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              minItems: {
                anyOf: [
                  { $ref: "#/definitions/positiveIntegerDefault0" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              uniqueItems: {
                anyOf: [
                  { type: "boolean", default: !1 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              maxProperties: {
                anyOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              minProperties: {
                anyOf: [
                  { $ref: "#/definitions/positiveIntegerDefault0" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              required: {
                anyOf: [
                  { $ref: "#/definitions/stringArray" },
                  { $ref: "#/definitions/$data" },
                ],
              },
              additionalProperties: {
                anyOf: [
                  { type: "boolean" },
                  { $ref: "#" },
                  { $ref: "#/definitions/$data" },
                ],
                default: {},
              },
              definitions: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              properties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              patternProperties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              dependencies: {
                type: "object",
                additionalProperties: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
                },
              },
              enum: {
                anyOf: [
                  { type: "array", minItems: 1, uniqueItems: !0 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              type: {
                anyOf: [
                  { $ref: "#/definitions/simpleTypes" },
                  {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              allOf: { $ref: "#/definitions/schemaArray" },
              anyOf: { $ref: "#/definitions/schemaArray" },
              oneOf: { $ref: "#/definitions/schemaArray" },
              not: { $ref: "#" },
              format: {
                anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }],
              },
              formatMaximum: {
                anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }],
              },
              formatMinimum: {
                anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }],
              },
              exclusiveFormatMaximum: {
                anyOf: [
                  { type: "boolean", default: !1 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              exclusiveFormatMinimum: {
                anyOf: [
                  { type: "boolean", default: !1 },
                  { $ref: "#/definitions/$data" },
                ],
              },
              constant: { anyOf: [{}, { $ref: "#/definitions/$data" }] },
              contains: { $ref: "#" },
              patternGroups: {
                type: "object",
                additionalProperties: {
                  type: "object",
                  required: ["schema"],
                  properties: {
                    maximum: {
                      anyOf: [
                        { $ref: "#/definitions/positiveInteger" },
                        { $ref: "#/definitions/$data" },
                      ],
                    },
                    minimum: {
                      anyOf: [
                        { $ref: "#/definitions/positiveIntegerDefault0" },
                        { $ref: "#/definitions/$data" },
                      ],
                    },
                    schema: { $ref: "#" },
                  },
                  additionalProperties: !1,
                },
                default: {},
              },
              switch: {
                type: "array",
                items: {
                  required: ["then"],
                  properties: {
                    if: { $ref: "#" },
                    then: { anyOf: [{ type: "boolean" }, { $ref: "#" }] },
                    continue: { type: "boolean" },
                  },
                  additionalProperties: !1,
                  dependencies: { continue: ["if"] },
                },
              },
            },
            dependencies: {
              exclusiveMaximum: ["maximum"],
              exclusiveMinimum: ["minimum"],
              formatMaximum: ["format"],
              formatMinimum: ["format"],
              exclusiveFormatMaximum: ["formatMaximum"],
              exclusiveFormatMinimum: ["formatMinimum"],
            },
            default: {},
          };
        },
        function (t, e) {
          "use strict";
          var n = /^[a-z_$][a-z0-9_$]*$/i;
          t.exports = function (t, e) {
            var i = this;
            if (this.RULES.keywords[t])
              throw new Error("Keyword " + t + " is already defined");
            if (!n.test(t))
              throw new Error("Keyword " + t + " is not a valid identifier");
            if (e) {
              var r = e.type;
              if (Array.isArray(r)) {
                var o,
                  a = r.length;
                for (o = 0; o < a; o++) l(r[o]);
                for (o = 0; o < a; o++) s(t, r[o], e);
              } else r && l(r), s(t, r, e);
            }
            function s(t, e, n) {
              for (var r, o = 0; o < i.RULES.length; o++) {
                var a = i.RULES[o];
                if (a.type == e) {
                  r = a;
                  break;
                }
              }
              r || ((r = { type: e, rules: [] }), i.RULES.push(r));
              var s = { keyword: t, definition: n, custom: !0 };
              r.rules.push(s);
            }
            function l(t) {
              if (!i.RULES.types[t]) throw new Error("Unknown type " + t);
            }
            (this.RULES.keywords[t] = !0), (this.RULES.all[t] = !0);
          };
        },
        function (t, e) {
          t.exports = {
            id: "http://json-schema.org/draft-04/schema#",
            $schema: "http://json-schema.org/draft-04/schema#",
            description: "Core schema meta-schema",
            definitions: {
              schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
              positiveInteger: { type: "integer", minimum: 0 },
              positiveIntegerDefault0: {
                allOf: [
                  { $ref: "#/definitions/positiveInteger" },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                enum: [
                  "array",
                  "boolean",
                  "integer",
                  "null",
                  "number",
                  "object",
                  "string",
                ],
              },
              stringArray: {
                type: "array",
                items: { type: "string" },
                minItems: 1,
                uniqueItems: !0,
              },
            },
            type: "object",
            properties: {
              id: { type: "string", format: "uri" },
              $schema: { type: "string", format: "uri" },
              title: { type: "string" },
              description: { type: "string" },
              default: {},
              multipleOf: { type: "number", minimum: 0, exclusiveMinimum: !0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "boolean", default: !1 },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "boolean", default: !1 },
              maxLength: { $ref: "#/definitions/positiveInteger" },
              minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
              pattern: { type: "string", format: "regex" },
              additionalItems: {
                anyOf: [{ type: "boolean" }, { $ref: "#" }],
                default: {},
              },
              items: {
                anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                default: {},
              },
              maxItems: { $ref: "#/definitions/positiveInteger" },
              minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
              uniqueItems: { type: "boolean", default: !1 },
              maxProperties: { $ref: "#/definitions/positiveInteger" },
              minProperties: { $ref: "#/definitions/positiveIntegerDefault0" },
              required: { $ref: "#/definitions/stringArray" },
              additionalProperties: {
                anyOf: [{ type: "boolean" }, { $ref: "#" }],
                default: {},
              },
              definitions: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              properties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              patternProperties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                default: {},
              },
              dependencies: {
                type: "object",
                additionalProperties: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }],
                },
              },
              enum: { type: "array", minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: "#/definitions/simpleTypes" },
                  {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              allOf: { $ref: "#/definitions/schemaArray" },
              anyOf: { $ref: "#/definitions/schemaArray" },
              oneOf: { $ref: "#/definitions/schemaArray" },
              not: { $ref: "#" },
            },
            dependencies: {
              exclusiveMaximum: ["maximum"],
              exclusiveMinimum: ["minimum"],
            },
            default: {},
          };
        },
        function (t, e, n) {
          "use strict";
          var i = n(52),
            r = n(53),
            o = n(56),
            a = n(57),
            s = n(58),
            l = n(61),
            c = n(54),
            d = {
              create: function (t, e) {
                if (!t) throw new Error("No container element provided.");
                (this.container = t),
                  (this.dom = {}),
                  (this.highlighter = new i()),
                  (this.selection = void 0),
                  (this.multiselection = { nodes: [] }),
                  (this.validateSchema = null),
                  (this.errorNodes = []),
                  (this.node = null),
                  (this.focusTarget = null),
                  this._setOptions(e),
                  this.options.history &&
                    "view" !== this.options.mode &&
                    (this.history = new r(this)),
                  this._createFrame(),
                  this._createTable();
              },
              destroy: function () {
                this.frame &&
                  this.container &&
                  this.frame.parentNode == this.container &&
                  (this.container.removeChild(this.frame), (this.frame = null)),
                  (this.container = null),
                  (this.dom = null),
                  this.clear(),
                  (this.node = null),
                  (this.focusTarget = null),
                  (this.selection = null),
                  (this.multiselection = null),
                  (this.errorNodes = null),
                  (this.validateSchema = null),
                  (this._debouncedValidate = null),
                  this.history &&
                    (this.history.destroy(), (this.history = null)),
                  this.searchBox &&
                    (this.searchBox.destroy(), (this.searchBox = null)),
                  this.modeSwitcher &&
                    (this.modeSwitcher.destroy(), (this.modeSwitcher = null));
              },
              _setOptions: function (t) {
                if (
                  ((this.options = {
                    search: !0,
                    history: !0,
                    mode: "tree",
                    name: void 0,
                    schema: null,
                  }),
                  t)
                )
                  for (var e in t)
                    t.hasOwnProperty(e) && (this.options[e] = t[e]);
                this.setSchema(this.options.schema),
                  (this._debouncedValidate = c.debounce(
                    this.validate.bind(this),
                    this.DEBOUNCE_INTERVAL
                  ));
              },
              set: function (t, e) {
                if (
                  (e && (this.options.name = e),
                  t instanceof Function || void 0 === t)
                )
                  this.clear();
                else {
                  this.content.removeChild(this.table);
                  var n = { field: this.options.name, value: t },
                    i = new s(this, n);
                  this._setRoot(i),
                    this.validate(),
                    this.node.expand(!1),
                    this.content.appendChild(this.table);
                }
                this.history && this.history.clear(),
                  this.searchBox && this.searchBox.clear();
              },
              get: function () {
                if (this.focusTarget) {
                  var t = s.getNodeFromTarget(this.focusTarget);
                  t && t.blur();
                }
                return this.node ? this.node.getValue() : void 0;
              },
              getText: function () {
                return JSON.stringify(this.get());
              },
              setText: function (t) {
                this.set(c.parse(t));
              },
              setName: function (t) {
                (this.options.name = t),
                  this.node && this.node.updateField(this.options.name);
              },
              getName: function () {
                return this.options.name;
              },
              focus: function () {
                var t = this.content.querySelector("[contenteditable=true]");
                t
                  ? t.focus()
                  : this.node.dom.expand
                  ? this.node.dom.expand.focus()
                  : this.node.dom.menu
                  ? this.node.dom.menu.focus()
                  : (t = this.frame.querySelector("button")) && t.focus();
              },
              clear: function () {
                this.node &&
                  (this.node.collapse(),
                  this.tbody.removeChild(this.node.getDom()),
                  delete this.node);
              },
              _setRoot: function (t) {
                this.clear(),
                  (this.node = t),
                  this.tbody.appendChild(t.getDom());
              },
              search: function (t) {
                var e;
                return (
                  this.node
                    ? (this.content.removeChild(this.table),
                      (e = this.node.search(t)),
                      this.content.appendChild(this.table))
                    : (e = []),
                  e
                );
              },
              expandAll: function () {
                this.node &&
                  (this.content.removeChild(this.table),
                  this.node.expand(),
                  this.content.appendChild(this.table));
              },
              collapseAll: function () {
                this.node &&
                  (this.content.removeChild(this.table),
                  this.node.collapse(),
                  this.content.appendChild(this.table));
              },
              _onAction: function (t, e) {
                this.history && this.history.add(t, e), this._onChange();
              },
              _onChange: function () {
                if ((this._debouncedValidate(), this.options.onChange))
                  try {
                    this.options.onChange();
                  } catch (t) {}
              },
              validate: function () {
                this.errorNodes &&
                  this.errorNodes.forEach(function (t) {
                    t.setError(null);
                  });
                var t = this.node;
                if (t) {
                  var e = t.validate(),
                    n = [];
                  this.validateSchema &&
                    (this.validateSchema(t.getValue()) ||
                      (n = this.validateSchema.errors
                        .map(function (t) {
                          return c.improveSchemaError(t);
                        })
                        .map(function (e) {
                          return { node: t.findNode(e.dataPath), error: e };
                        })
                        .filter(function (t) {
                          return null != t.node;
                        }))),
                    (this.errorNodes = e
                      .concat(n)
                      .reduce(function (t, e) {
                        return e.node
                          .findParents()
                          .map(function (t) {
                            return {
                              node: t,
                              child: e.node,
                              error: {
                                message:
                                  "object" === t.type
                                    ? "Contains invalid properties"
                                    : "Contains invalid items",
                              },
                            };
                          })
                          .concat(t, [e]);
                      }, [])
                      .map(function (t) {
                        return t.node.setError(t.error, t.child), t.node;
                      }));
                }
              },
              refresh: function () {
                this.node && this.node.updateDom({ recurse: !0 });
              },
              startAutoScroll: function (t) {
                var e = this,
                  n = this.content,
                  i = c.getAbsoluteTop(n),
                  r = n.clientHeight,
                  o = i + r;
                t < i + 24 && n.scrollTop > 0
                  ? (this.autoScrollStep = (i + 24 - t) / 3)
                  : t > o - 24 && r + n.scrollTop < n.scrollHeight
                  ? (this.autoScrollStep = (o - 24 - t) / 3)
                  : (this.autoScrollStep = void 0),
                  this.autoScrollStep
                    ? this.autoScrollTimer ||
                      (this.autoScrollTimer = setInterval(function () {
                        e.autoScrollStep
                          ? (n.scrollTop -= e.autoScrollStep)
                          : e.stopAutoScroll();
                      }, 50))
                    : this.stopAutoScroll();
              },
              stopAutoScroll: function () {
                this.autoScrollTimer &&
                  (clearTimeout(this.autoScrollTimer),
                  delete this.autoScrollTimer),
                  this.autoScrollStep && delete this.autoScrollStep;
              },
              setSelection: function (t) {
                t &&
                  ("scrollTop" in t &&
                    this.content &&
                    (this.content.scrollTop = t.scrollTop),
                  t.nodes && this.select(t.nodes),
                  t.range && c.setSelectionOffset(t.range),
                  t.dom && t.dom.focus());
              },
              getSelection: function () {
                var t = c.getSelectionOffset();
                return (
                  t && "DIV" !== t.container.nodeName && (t = null),
                  {
                    dom: this.focusTarget,
                    range: t,
                    nodes: this.multiselection.nodes.slice(0),
                    scrollTop: this.content ? this.content.scrollTop : 0,
                  }
                );
              },
              scrollTo: function (t, e) {
                var n = this.content;
                if (n) {
                  var i = this;
                  i.animateTimeout &&
                    (clearTimeout(i.animateTimeout), delete i.animateTimeout),
                    i.animateCallback &&
                      (i.animateCallback(!1), delete i.animateCallback);
                  var r = n.clientHeight,
                    o = n.scrollHeight - r,
                    a = Math.min(Math.max(t - r / 4, 0), o),
                    s = function () {
                      var t = n.scrollTop,
                        r = a - t;
                      Math.abs(r) > 3
                        ? ((n.scrollTop += r / 3),
                          (i.animateCallback = e),
                          (i.animateTimeout = setTimeout(s, 50)))
                        : (e && e(!0),
                          (n.scrollTop = a),
                          delete i.animateTimeout,
                          delete i.animateCallback);
                    };
                  s();
                } else e && e(!1);
              },
              _createFrame: function () {
                (this.frame = document.createElement("div")),
                  (this.frame.className =
                    "jsoneditor jsoneditor-mode-" + this.options.mode),
                  this.container.appendChild(this.frame);
                var t = this;
                function e(e) {
                  t._onEvent && t._onEvent(e);
                }
                (this.frame.onclick = function (t) {
                  var n = t.target;
                  e(t), "BUTTON" == n.nodeName && t.preventDefault();
                }),
                  (this.frame.oninput = e),
                  (this.frame.onchange = e),
                  (this.frame.onkeydown = e),
                  (this.frame.onkeyup = e),
                  (this.frame.oncut = e),
                  (this.frame.onpaste = e),
                  (this.frame.onmousedown = e),
                  (this.frame.onmouseup = e),
                  (this.frame.onmouseover = e),
                  (this.frame.onmouseout = e),
                  c.addEventListener(this.frame, "focus", e, !0),
                  c.addEventListener(this.frame, "blur", e, !0),
                  (this.frame.onfocusin = e),
                  (this.frame.onfocusout = e),
                  (this.menu = document.createElement("div")),
                  (this.menu.className = "jsoneditor-menu"),
                  this.frame.appendChild(this.menu);
                var n = document.createElement("button");
                (n.type = "button"),
                  (n.className = "jsoneditor-expand-all"),
                  (n.title = "Expand all fields"),
                  (n.onclick = function () {
                    t.expandAll();
                  }),
                  this.menu.appendChild(n);
                var i = document.createElement("button");
                if (
                  ((i.type = "button"),
                  (i.title = "Collapse all fields"),
                  (i.className = "jsoneditor-collapse-all"),
                  (i.onclick = function () {
                    t.collapseAll();
                  }),
                  this.menu.appendChild(i),
                  this.history)
                ) {
                  var r = document.createElement("button");
                  (r.type = "button"),
                    (r.className = "jsoneditor-undo jsoneditor-separator"),
                    (r.title = "Undo last action (Ctrl+Z)"),
                    (r.onclick = function () {
                      t._onUndo();
                    }),
                    this.menu.appendChild(r),
                    (this.dom.undo = r);
                  var a = document.createElement("button");
                  (a.type = "button"),
                    (a.className = "jsoneditor-redo"),
                    (a.title = "Redo (Ctrl+Shift+Z)"),
                    (a.onclick = function () {
                      t._onRedo();
                    }),
                    this.menu.appendChild(a),
                    (this.dom.redo = a),
                    (this.history.onChange = function () {
                      (r.disabled = !t.history.canUndo()),
                        (a.disabled = !t.history.canRedo());
                    }),
                    this.history.onChange();
                }
                if (
                  this.options &&
                  this.options.modes &&
                  this.options.modes.length
                ) {
                  var s = this;
                  this.modeSwitcher = new l(
                    this.menu,
                    this.options.modes,
                    this.options.mode,
                    function (t) {
                      s.modeSwitcher.destroy(),
                        s.setMode(t),
                        s.modeSwitcher.focus();
                    }
                  );
                }
                this.options.search &&
                  (this.searchBox = new o(this, this.menu));
              },
              _onUndo: function () {
                this.history && (this.history.undo(), this._onChange());
              },
              _onRedo: function () {
                this.history && (this.history.redo(), this._onChange());
              },
              _onEvent: function (t) {
                "keydown" == t.type && this._onKeyDown(t),
                  "focus" == t.type && (this.focusTarget = t.target),
                  "mousedown" == t.type && this._startDragDistance(t),
                  ("mousemove" != t.type &&
                    "mouseup" != t.type &&
                    "click" != t.type) ||
                    this._updateDragDistance(t);
                var e = s.getNodeFromTarget(t.target);
                if (e && e.selected) {
                  if ("click" == t.type) {
                    if (t.target == e.dom.menu)
                      return void this.showContextMenu(t.target);
                    t.hasMoved || this.deselect();
                  }
                  "mousedown" == t.type &&
                    s.onDragStart(this.multiselection.nodes, t);
                } else
                  "mousedown" == t.type &&
                    (this.deselect(),
                    e && t.target == e.dom.drag
                      ? s.onDragStart(e, t)
                      : (!e ||
                          (t.target != e.dom.field &&
                            t.target != e.dom.value &&
                            t.target != e.dom.select)) &&
                        this._onMultiSelectStart(t));
                e && e.onEvent(t);
              },
              _startDragDistance: function (t) {
                this.dragDistanceEvent = {
                  initialTarget: t.target,
                  initialPageX: t.pageX,
                  initialPageY: t.pageY,
                  dragDistance: 0,
                  hasMoved: !1,
                };
              },
              _updateDragDistance: function (t) {
                this.dragDistanceEvent || this._startDragDistance(t);
                var e = t.pageX - this.dragDistanceEvent.initialPageX,
                  n = t.pageY - this.dragDistanceEvent.initialPageY;
                return (
                  (this.dragDistanceEvent.dragDistance = Math.sqrt(
                    e * e + n * n
                  )),
                  (this.dragDistanceEvent.hasMoved =
                    this.dragDistanceEvent.hasMoved ||
                    this.dragDistanceEvent.dragDistance > 10),
                  (t.dragDistance = this.dragDistanceEvent.dragDistance),
                  (t.hasMoved = this.dragDistanceEvent.hasMoved),
                  t.dragDistance
                );
              },
              _onMultiSelectStart: function (t) {
                var e = s.getNodeFromTarget(t.target);
                if (
                  "tree" === this.options.mode &&
                  void 0 === this.options.onEditable
                ) {
                  (this.multiselection = {
                    start: e || null,
                    end: null,
                    nodes: [],
                  }),
                    this._startDragDistance(t);
                  var n = this;
                  this.mousemove ||
                    (this.mousemove = c.addEventListener(
                      window,
                      "mousemove",
                      function (t) {
                        n._onMultiSelect(t);
                      }
                    )),
                    this.mouseup ||
                      (this.mouseup = c.addEventListener(
                        window,
                        "mouseup",
                        function (t) {
                          n._onMultiSelectEnd(t);
                        }
                      ));
                }
              },
              _onMultiSelect: function (t) {
                if (
                  (t.preventDefault(), this._updateDragDistance(t), t.hasMoved)
                ) {
                  var e = s.getNodeFromTarget(t.target);
                  e &&
                    (null == this.multiselection.start &&
                      (this.multiselection.start = e),
                    (this.multiselection.end = e)),
                    this.deselect();
                  var n = this.multiselection.start,
                    i = this.multiselection.end || this.multiselection.start;
                  n &&
                    i &&
                    ((this.multiselection.nodes = this._findTopLevelNodes(
                      n,
                      i
                    )),
                    this.select(this.multiselection.nodes));
                }
              },
              _onMultiSelectEnd: function (t) {
                this.multiselection.nodes[0] &&
                  this.multiselection.nodes[0].dom.menu.focus(),
                  (this.multiselection.start = null),
                  (this.multiselection.end = null),
                  this.mousemove &&
                    (c.removeEventListener(window, "mousemove", this.mousemove),
                    delete this.mousemove),
                  this.mouseup &&
                    (c.removeEventListener(window, "mouseup", this.mouseup),
                    delete this.mouseup);
              },
              deselect: function (t) {
                this.multiselection.nodes.forEach(function (t) {
                  t.setSelected(!1);
                }),
                  (this.multiselection.nodes = []),
                  t &&
                    ((this.multiselection.start = null),
                    (this.multiselection.end = null));
              },
              select: function (t) {
                if (!Array.isArray(t)) return this.select([t]);
                if (t) {
                  this.deselect(), (this.multiselection.nodes = t.slice(0));
                  var e = t[0];
                  t.forEach(function (t) {
                    t.setSelected(!0, t === e);
                  });
                }
              },
              _findTopLevelNodes: function (t, e) {
                for (
                  var n = t.getNodePath(), i = e.getNodePath(), r = 0;
                  r < n.length && n[r] === i[r];

                )
                  r++;
                var o = n[r - 1],
                  a = n[r],
                  s = i[r];
                if (
                  ((a && s) ||
                    (o.parent
                      ? ((a = o), (s = o), (o = o.parent))
                      : ((a = o.childs[0]),
                        (s = o.childs[o.childs.length - 1]))),
                  o && a && s)
                ) {
                  var l = o.childs.indexOf(a),
                    c = o.childs.indexOf(s),
                    d = Math.min(l, c),
                    u = Math.max(l, c);
                  return o.childs.slice(d, u + 1);
                }
                return [];
              },
              _onKeyDown: function (t) {
                var e = t.which || t.keyCode,
                  n = t.ctrlKey,
                  i = t.shiftKey,
                  r = !1;
                if (9 == e) {
                  var o = this;
                  setTimeout(function () {
                    c.selectContentEditable(o.focusTarget);
                  }, 0);
                }
                this.searchBox &&
                  (n && 70 == e
                    ? (this.searchBox.dom.search.focus(),
                      this.searchBox.dom.search.select(),
                      (r = !0))
                    : (114 == e || (n && 71 == e)) &&
                      (i
                        ? this.searchBox.previous(!0)
                        : this.searchBox.next(!0),
                      (r = !0))),
                  this.history &&
                    (n && !i && 90 == e
                      ? (this._onUndo(), (r = !0))
                      : n && i && 90 == e && (this._onRedo(), (r = !0))),
                  r && (t.preventDefault(), t.stopPropagation());
              },
              _createTable: function () {
                var t,
                  e = document.createElement("div");
                (e.className = "jsoneditor-outer"),
                  (this.contentOuter = e),
                  (this.content = document.createElement("div")),
                  (this.content.className = "jsoneditor-tree"),
                  e.appendChild(this.content),
                  (this.table = document.createElement("table")),
                  (this.table.className = "jsoneditor-tree"),
                  this.content.appendChild(this.table),
                  (this.colgroupContent = document.createElement("colgroup")),
                  "tree" === this.options.mode &&
                    (((t = document.createElement("col")).width = "24px"),
                    this.colgroupContent.appendChild(t)),
                  ((t = document.createElement("col")).width = "24px"),
                  this.colgroupContent.appendChild(t),
                  (t = document.createElement("col")),
                  this.colgroupContent.appendChild(t),
                  this.table.appendChild(this.colgroupContent),
                  (this.tbody = document.createElement("tbody")),
                  this.table.appendChild(this.tbody),
                  this.frame.appendChild(e);
              },
              showContextMenu: function (t, e) {
                var n = [],
                  i = this;
                n.push({
                  text: "Duplicate",
                  title: "Duplicate selected fields (Ctrl+D)",
                  className: "jsoneditor-duplicate",
                  click: function () {
                    s.onDuplicate(i.multiselection.nodes);
                  },
                }),
                  n.push({
                    text: "Remove",
                    title: "Remove selected fields (Ctrl+Del)",
                    className: "jsoneditor-remove",
                    click: function () {
                      s.onRemove(i.multiselection.nodes);
                    },
                  }),
                  new a(n, { close: e }).show(t, this.content);
              },
            };
          t.exports = [
            { mode: "tree", mixin: d, data: "json" },
            { mode: "view", mixin: d, data: "json" },
            { mode: "form", mixin: d, data: "json" },
          ];
        },
        function (t, e) {
          "use strict";
          function n() {
            this.locked = !1;
          }
          (n.prototype.highlight = function (t) {
            this.locked ||
              (this.node != t &&
                (this.node && this.node.setHighlight(!1),
                (this.node = t),
                this.node.setHighlight(!0)),
              this._cancelUnhighlight());
          }),
            (n.prototype.unhighlight = function () {
              if (!this.locked) {
                var t = this;
                this.node &&
                  (this._cancelUnhighlight(),
                  (this.unhighlightTimer = setTimeout(function () {
                    t.node.setHighlight(!1),
                      (t.node = void 0),
                      (t.unhighlightTimer = void 0);
                  }, 0)));
              }
            }),
            (n.prototype._cancelUnhighlight = function () {
              this.unhighlightTimer &&
                (clearTimeout(this.unhighlightTimer),
                (this.unhighlightTimer = void 0));
            }),
            (n.prototype.lock = function () {
              this.locked = !0;
            }),
            (n.prototype.unlock = function () {
              this.locked = !1;
            }),
            (t.exports = n);
        },
        function (t, e, n) {
          "use strict";
          function i(t) {
            (this.editor = t),
              (this.history = []),
              (this.index = -1),
              this.clear(),
              (this.actions = {
                editField: {
                  undo: function (t) {
                    t.node.updateField(t.oldValue);
                  },
                  redo: function (t) {
                    t.node.updateField(t.newValue);
                  },
                },
                editValue: {
                  undo: function (t) {
                    t.node.updateValue(t.oldValue);
                  },
                  redo: function (t) {
                    t.node.updateValue(t.newValue);
                  },
                },
                changeType: {
                  undo: function (t) {
                    t.node.changeType(t.oldType);
                  },
                  redo: function (t) {
                    t.node.changeType(t.newType);
                  },
                },
                appendNodes: {
                  undo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.removeChild(e);
                    });
                  },
                  redo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.appendChild(e);
                    });
                  },
                },
                insertBeforeNodes: {
                  undo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.removeChild(e);
                    });
                  },
                  redo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.insertBefore(e, t.beforeNode);
                    });
                  },
                },
                insertAfterNodes: {
                  undo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.removeChild(e);
                    });
                  },
                  redo: function (t) {
                    var e = t.afterNode;
                    t.nodes.forEach(function (n) {
                      t.parent.insertAfter(t.node, e), (e = n);
                    });
                  },
                },
                removeNodes: {
                  undo: function (t) {
                    var e = t.parent,
                      n = e.childs[t.index] || e.append;
                    t.nodes.forEach(function (t) {
                      e.insertBefore(t, n);
                    });
                  },
                  redo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.removeChild(e);
                    });
                  },
                },
                duplicateNodes: {
                  undo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.parent.removeChild(e);
                    });
                  },
                  redo: function (t) {
                    var e = t.afterNode;
                    t.nodes.forEach(function (n) {
                      t.parent.insertAfter(n, e), (e = n);
                    });
                  },
                },
                moveNodes: {
                  undo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.oldBeforeNode.parent.moveBefore(e, t.oldBeforeNode);
                    });
                  },
                  redo: function (t) {
                    t.nodes.forEach(function (e) {
                      t.newBeforeNode.parent.moveBefore(e, t.newBeforeNode);
                    });
                  },
                },
                sort: {
                  undo: function (t) {
                    var e = t.node;
                    e.hideChilds(),
                      (e.sort = t.oldSort),
                      (e.childs = t.oldChilds),
                      e.showChilds();
                  },
                  redo: function (t) {
                    var e = t.node;
                    e.hideChilds(),
                      (e.sort = t.newSort),
                      (e.childs = t.newChilds),
                      e.showChilds();
                  },
                },
              });
          }
          n(54),
            (i.prototype.onChange = function () {}),
            (i.prototype.add = function (t, e) {
              this.index++,
                (this.history[this.index] = {
                  action: t,
                  params: e,
                  timestamp: new Date(),
                }),
                this.index < this.history.length - 1 &&
                  this.history.splice(
                    this.index + 1,
                    this.history.length - this.index - 1
                  ),
                this.onChange();
            }),
            (i.prototype.clear = function () {
              (this.history = []), (this.index = -1), this.onChange();
            }),
            (i.prototype.canUndo = function () {
              return this.index >= 0;
            }),
            (i.prototype.canRedo = function () {
              return this.index < this.history.length - 1;
            }),
            (i.prototype.undo = function () {
              if (this.canUndo()) {
                var t = this.history[this.index];
                if (t) {
                  var e = this.actions[t.action];
                  e &&
                    e.undo &&
                    (e.undo(t.params),
                    t.params.oldSelection &&
                      this.editor.setSelection(t.params.oldSelection));
                }
                this.index--, this.onChange();
              }
            }),
            (i.prototype.redo = function () {
              if (this.canRedo()) {
                this.index++;
                var t = this.history[this.index];
                if (t) {
                  var e = this.actions[t.action];
                  e &&
                    e.redo &&
                    (e.redo(t.params),
                    t.params.newSelection &&
                      this.editor.setSelection(t.params.newSelection));
                }
                this.onChange();
              }
            }),
            (i.prototype.destroy = function () {
              (this.editor = null), (this.history = []), (this.index = -1);
            }),
            (t.exports = i);
        },
        function (t, e, n) {
          "use strict";
          var i = n(55);
          (e.parse = function (t) {
            try {
              return JSON.parse(t);
            } catch (n) {
              throw (e.validate(t), n);
            }
          }),
            (e.sanitize = function (t) {
              var e = [],
                n = 0,
                i = t.match(
                  /^\s*(\/\*(.|[\r\n])*?\*\/)?\s*[\da-zA-Z_$]+\s*\(([\s\S]*)\)\s*;?\s*$/
                );
              function r() {
                return t.charAt(n);
              }
              function o() {
                return t.charAt(n + 1);
              }
              function a() {
                for (var t = e.length - 1; t >= 0; ) {
                  var n = e[t];
                  if (" " !== n && "\n" !== n && "\r" !== n && "\t" !== n)
                    return n;
                  t--;
                }
                return "";
              }
              function s() {
                for (n += 2; n < t.length && ("*" !== r() || "/" !== o()); )
                  n++;
                n += 2;
              }
              function l() {
                for (n += 2; n < t.length && "\n" !== r(); ) n++;
              }
              function c(i) {
                e.push('"'), n++;
                for (var o = r(); n < t.length && o !== i; )
                  '"' === o && "\\" !== t.charAt(n - 1) && e.push("\\"),
                    "\\" === o && (n++, "'" !== (o = r()) && e.push("\\")),
                    e.push(o),
                    n++,
                    (o = r());
                o === i && (e.push('"'), n++);
              }
              function d() {
                for (var t = "", i = r(), o = /[a-zA-Z_$\d]/; o.test(i); )
                  (t += i), n++, (i = r());
                -1 === ["null", "true", "false"].indexOf(t)
                  ? e.push('"' + t + '"')
                  : e.push(t);
              }
              for (i && (t = i[3]); n < t.length; ) {
                var u = r();
                "/" === u && "*" === o()
                  ? s()
                  : "/" === u && "/" === o()
                  ? l()
                  : "'" === u || '"' === u
                  ? c(u)
                  : /[a-zA-Z_$]/.test(u) && -1 !== ["{", ","].indexOf(a())
                  ? d()
                  : (e.push(u), n++);
              }
              return e.join("");
            }),
            (e.escapeUnicodeChars = function (t) {
              return t.replace(/[\u007F-\uFFFF]/g, function (t) {
                return (
                  "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                );
              });
            }),
            (e.validate = function (t) {
              void 0 !== i ? i.parse(t) : JSON.parse(t);
            }),
            (e.extend = function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              return t;
            }),
            (e.clear = function (t) {
              for (var e in t) t.hasOwnProperty(e) && delete t[e];
              return t;
            }),
            (e.type = function (t) {
              return null === t
                ? "null"
                : void 0 === t
                ? "undefined"
                : t instanceof Number || "number" == typeof t
                ? "number"
                : t instanceof String || "string" == typeof t
                ? "string"
                : t instanceof Boolean || "boolean" == typeof t
                ? "boolean"
                : t instanceof RegExp || "regexp" == typeof t
                ? "regexp"
                : e.isArray(t)
                ? "array"
                : "object";
            });
          var r = /^https?:\/\/\S+$/;
          (e.isUrl = function (t) {
            return ("string" == typeof t || t instanceof String) && r.test(t);
          }),
            (e.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            (e.getAbsoluteLeft = function (t) {
              return (
                t.getBoundingClientRect().left + window.pageXOffset ||
                document.scrollLeft ||
                0
              );
            }),
            (e.getAbsoluteTop = function (t) {
              return (
                t.getBoundingClientRect().top + window.pageYOffset ||
                document.scrollTop ||
                0
              );
            }),
            (e.addClassName = function (t, e) {
              var n = t.className.split(" ");
              -1 == n.indexOf(e) && (n.push(e), (t.className = n.join(" ")));
            }),
            (e.removeClassName = function (t, e) {
              var n = t.className.split(" "),
                i = n.indexOf(e);
              -1 != i && (n.splice(i, 1), (t.className = n.join(" ")));
            }),
            (e.stripFormatting = function (t) {
              for (var n = t.childNodes, i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                o.style && o.removeAttribute("style");
                var a = o.attributes;
                if (a)
                  for (var s = a.length - 1; s >= 0; s--) {
                    var l = a[s];
                    !0 === l.specified && o.removeAttribute(l.name);
                  }
                e.stripFormatting(o);
              }
            }),
            (e.setEndOfContentEditable = function (t) {
              var e, n;
              document.createRange &&
                ((e = document.createRange()).selectNodeContents(t),
                e.collapse(!1),
                (n = window.getSelection()).removeAllRanges(),
                n.addRange(e));
            }),
            (e.selectContentEditable = function (t) {
              var e, n;
              t &&
                "DIV" == t.nodeName &&
                window.getSelection &&
                document.createRange &&
                ((n = document.createRange()).selectNodeContents(t),
                (e = window.getSelection()).removeAllRanges(),
                e.addRange(n));
            }),
            (e.getSelection = function () {
              if (window.getSelection) {
                var t = window.getSelection();
                if (t.getRangeAt && t.rangeCount) return t.getRangeAt(0);
              }
              return null;
            }),
            (e.setSelection = function (t) {
              if (t && window.getSelection) {
                var e = window.getSelection();
                e.removeAllRanges(), e.addRange(t);
              }
            }),
            (e.getSelectionOffset = function () {
              var t = e.getSelection();
              return t &&
                "startOffset" in t &&
                "endOffset" in t &&
                t.startContainer &&
                t.startContainer == t.endContainer
                ? {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    container: t.startContainer.parentNode,
                  }
                : null;
            }),
            (e.setSelectionOffset = function (t) {
              if (
                document.createRange &&
                window.getSelection &&
                window.getSelection()
              ) {
                var n = document.createRange();
                t.container.firstChild ||
                  t.container.appendChild(document.createTextNode("")),
                  n.setStart(t.container.firstChild, t.startOffset),
                  n.setEnd(t.container.firstChild, t.endOffset),
                  e.setSelection(n);
              }
            }),
            (e.getInnerText = function (t, n) {
              if (
                (null == n &&
                  (n = {
                    text: "",
                    flush: function () {
                      var t = this.text;
                      return (this.text = ""), t;
                    },
                    set: function (t) {
                      this.text = t;
                    },
                  }),
                t.nodeValue)
              )
                return n.flush() + t.nodeValue;
              if (t.hasChildNodes()) {
                for (
                  var i = t.childNodes, r = "", o = 0, a = i.length;
                  o < a;
                  o++
                ) {
                  var s = i[o];
                  if ("DIV" == s.nodeName || "P" == s.nodeName) {
                    var l = i[o - 1],
                      c = l ? l.nodeName : void 0;
                    c &&
                      "DIV" != c &&
                      "P" != c &&
                      "BR" != c &&
                      ((r += "\n"), n.flush()),
                      (r += e.getInnerText(s, n)),
                      n.set("\n");
                  } else
                    "BR" == s.nodeName
                      ? ((r += n.flush()), n.set("\n"))
                      : (r += e.getInnerText(s, n));
                }
                return r;
              }
              return "P" == t.nodeName && -1 != e.getInternetExplorerVersion()
                ? n.flush()
                : "";
            }),
            (e.getInternetExplorerVersion = function () {
              if (-1 == o) {
                var t = -1;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                  var e = navigator.userAgent;
                  null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) &&
                    (t = parseFloat(RegExp.$1));
                }
                o = t;
              }
              return o;
            }),
            (e.isFirefox = function () {
              return -1 != navigator.userAgent.indexOf("Firefox");
            });
          var o = -1;
          (e.addEventListener = function (t, n, i, r) {
            if (t.addEventListener)
              return (
                void 0 === r && (r = !1),
                "mousewheel" === n && e.isFirefox() && (n = "DOMMouseScroll"),
                t.addEventListener(n, i, r),
                i
              );
            if (t.attachEvent) {
              var o = function () {
                return i.call(t, window.event);
              };
              return t.attachEvent("on" + n, o), o;
            }
          }),
            (e.removeEventListener = function (t, n, i, r) {
              t.removeEventListener
                ? (void 0 === r && (r = !1),
                  "mousewheel" === n && e.isFirefox() && (n = "DOMMouseScroll"),
                  t.removeEventListener(n, i, r))
                : t.detachEvent && t.detachEvent("on" + n, i);
            }),
            (e.parsePath = function t(e) {
              var n, i;
              if (0 === e.length) return [];
              var r = e.match(/^\.(\w+)/);
              if (r) (n = r[1]), (i = e.substr(n.length + 1));
              else {
                if ("[" !== e[0]) throw new SyntaxError("Failed to parse path");
                var o = e.indexOf("]");
                if (-1 === o)
                  throw new SyntaxError("Character ] expected in path");
                if (1 === o) throw new SyntaxError("Index expected after [");
                var a = e.substring(1, o);
                "'" === a[0] && (a = '"' + a.substring(1, a.length - 1) + '"'),
                  (n = "*" === a ? a : JSON.parse(a)),
                  (i = e.substr(o + 1));
              }
              return [n].concat(t(i));
            }),
            (e.improveSchemaError = function (t) {
              if ("enum" === t.keyword && Array.isArray(t.schema)) {
                var e = t.schema;
                if (e) {
                  if (
                    (e = e.map(function (t) {
                      return JSON.stringify(t);
                    })).length > 5
                  ) {
                    var n = ["(" + (e.length - 5) + " more...)"];
                    (e = e.slice(0, 5)).push(n);
                  }
                  t.message = "should be equal to one of: " + e.join(", ");
                }
              }
              return (
                "additionalProperties" === t.keyword &&
                  (t.message =
                    "should NOT have additional property: " +
                    t.params.additionalProperty),
                t
              );
            }),
            (e.insideRect = function (t, e, n) {
              var i = void 0 !== n ? n : 0;
              return (
                e.left - i >= t.left &&
                e.right + i <= t.right &&
                e.top - i >= t.top &&
                e.bottom + i <= t.bottom
              );
            }),
            (e.debounce = function (t, e, n) {
              var i;
              return function () {
                var r = this,
                  o = arguments,
                  a = function () {
                    (i = null), n || t.apply(r, o);
                  },
                  s = n && !i;
                clearTimeout(i), (i = setTimeout(a, e)), s && t.apply(r, o);
              };
            }),
            (e.textDiff = function (t, e) {
              for (
                var n = e.length, i = 0, r = t.length, o = e.length;
                e.charAt(i) === t.charAt(i) && i < n;

              )
                i++;
              for (; e.charAt(o - 1) === t.charAt(r - 1) && o > i && r > 0; )
                o--, r--;
              return { start: i, end: o };
            });
        },
        function (t, e, n) {
          var i,
            r,
            o =
              ((i = {
                trace: function () {},
                yy: {},
                symbols_: {
                  error: 2,
                  JSONString: 3,
                  STRING: 4,
                  JSONNumber: 5,
                  NUMBER: 6,
                  JSONNullLiteral: 7,
                  NULL: 8,
                  JSONBooleanLiteral: 9,
                  TRUE: 10,
                  FALSE: 11,
                  JSONText: 12,
                  JSONValue: 13,
                  EOF: 14,
                  JSONObject: 15,
                  JSONArray: 16,
                  "{": 17,
                  "}": 18,
                  JSONMemberList: 19,
                  JSONMember: 20,
                  ":": 21,
                  ",": 22,
                  "[": 23,
                  "]": 24,
                  JSONElementList: 25,
                  $accept: 0,
                  $end: 1,
                },
                terminals_: {
                  2: "error",
                  4: "STRING",
                  6: "NUMBER",
                  8: "NULL",
                  10: "TRUE",
                  11: "FALSE",
                  14: "EOF",
                  17: "{",
                  18: "}",
                  21: ":",
                  22: ",",
                  23: "[",
                  24: "]",
                },
                productions_: [
                  0,
                  [3, 1],
                  [5, 1],
                  [7, 1],
                  [9, 1],
                  [9, 1],
                  [12, 2],
                  [13, 1],
                  [13, 1],
                  [13, 1],
                  [13, 1],
                  [13, 1],
                  [13, 1],
                  [15, 2],
                  [15, 3],
                  [20, 3],
                  [19, 1],
                  [19, 3],
                  [16, 2],
                  [16, 3],
                  [25, 1],
                  [25, 3],
                ],
                performAction: function (t, e, n, i, r, o, a) {
                  var s = o.length - 1;
                  switch (r) {
                    case 1:
                      this.$ = t
                        .replace(/\\(\\|")/g, "$1")
                        .replace(/\\n/g, "\n")
                        .replace(/\\r/g, "\r")
                        .replace(/\\t/g, "\t")
                        .replace(/\\v/g, "\v")
                        .replace(/\\f/g, "\f")
                        .replace(/\\b/g, "\b");
                      break;
                    case 2:
                      this.$ = Number(t);
                      break;
                    case 3:
                      this.$ = null;
                      break;
                    case 4:
                      this.$ = !0;
                      break;
                    case 5:
                      this.$ = !1;
                      break;
                    case 6:
                      return (this.$ = o[s - 1]);
                    case 13:
                      this.$ = {};
                      break;
                    case 14:
                      this.$ = o[s - 1];
                      break;
                    case 15:
                      this.$ = [o[s - 2], o[s]];
                      break;
                    case 16:
                      (this.$ = {}), (this.$[o[s][0]] = o[s][1]);
                      break;
                    case 17:
                      (this.$ = o[s - 2]), (o[s - 2][o[s][0]] = o[s][1]);
                      break;
                    case 18:
                      this.$ = [];
                      break;
                    case 19:
                      this.$ = o[s - 1];
                      break;
                    case 20:
                      this.$ = [o[s]];
                      break;
                    case 21:
                      (this.$ = o[s - 2]), o[s - 2].push(o[s]);
                  }
                },
                table: [
                  {
                    3: 5,
                    4: [1, 12],
                    5: 6,
                    6: [1, 13],
                    7: 3,
                    8: [1, 9],
                    9: 4,
                    10: [1, 10],
                    11: [1, 11],
                    12: 1,
                    13: 2,
                    15: 7,
                    16: 8,
                    17: [1, 14],
                    23: [1, 15],
                  },
                  { 1: [3] },
                  { 14: [1, 16] },
                  { 14: [2, 7], 18: [2, 7], 22: [2, 7], 24: [2, 7] },
                  { 14: [2, 8], 18: [2, 8], 22: [2, 8], 24: [2, 8] },
                  { 14: [2, 9], 18: [2, 9], 22: [2, 9], 24: [2, 9] },
                  { 14: [2, 10], 18: [2, 10], 22: [2, 10], 24: [2, 10] },
                  { 14: [2, 11], 18: [2, 11], 22: [2, 11], 24: [2, 11] },
                  { 14: [2, 12], 18: [2, 12], 22: [2, 12], 24: [2, 12] },
                  { 14: [2, 3], 18: [2, 3], 22: [2, 3], 24: [2, 3] },
                  { 14: [2, 4], 18: [2, 4], 22: [2, 4], 24: [2, 4] },
                  { 14: [2, 5], 18: [2, 5], 22: [2, 5], 24: [2, 5] },
                  {
                    14: [2, 1],
                    18: [2, 1],
                    21: [2, 1],
                    22: [2, 1],
                    24: [2, 1],
                  },
                  { 14: [2, 2], 18: [2, 2], 22: [2, 2], 24: [2, 2] },
                  { 3: 20, 4: [1, 12], 18: [1, 17], 19: 18, 20: 19 },
                  {
                    3: 5,
                    4: [1, 12],
                    5: 6,
                    6: [1, 13],
                    7: 3,
                    8: [1, 9],
                    9: 4,
                    10: [1, 10],
                    11: [1, 11],
                    13: 23,
                    15: 7,
                    16: 8,
                    17: [1, 14],
                    23: [1, 15],
                    24: [1, 21],
                    25: 22,
                  },
                  { 1: [2, 6] },
                  { 14: [2, 13], 18: [2, 13], 22: [2, 13], 24: [2, 13] },
                  { 18: [1, 24], 22: [1, 25] },
                  { 18: [2, 16], 22: [2, 16] },
                  { 21: [1, 26] },
                  { 14: [2, 18], 18: [2, 18], 22: [2, 18], 24: [2, 18] },
                  { 22: [1, 28], 24: [1, 27] },
                  { 22: [2, 20], 24: [2, 20] },
                  { 14: [2, 14], 18: [2, 14], 22: [2, 14], 24: [2, 14] },
                  { 3: 20, 4: [1, 12], 20: 29 },
                  {
                    3: 5,
                    4: [1, 12],
                    5: 6,
                    6: [1, 13],
                    7: 3,
                    8: [1, 9],
                    9: 4,
                    10: [1, 10],
                    11: [1, 11],
                    13: 30,
                    15: 7,
                    16: 8,
                    17: [1, 14],
                    23: [1, 15],
                  },
                  { 14: [2, 19], 18: [2, 19], 22: [2, 19], 24: [2, 19] },
                  {
                    3: 5,
                    4: [1, 12],
                    5: 6,
                    6: [1, 13],
                    7: 3,
                    8: [1, 9],
                    9: 4,
                    10: [1, 10],
                    11: [1, 11],
                    13: 31,
                    15: 7,
                    16: 8,
                    17: [1, 14],
                    23: [1, 15],
                  },
                  { 18: [2, 17], 22: [2, 17] },
                  { 18: [2, 15], 22: [2, 15] },
                  { 22: [2, 21], 24: [2, 21] },
                ],
                defaultActions: { 16: [2, 6] },
                parseError: function (t, e) {
                  throw new Error(t);
                },
                parse: function (t) {
                  var e = this,
                    n = [0],
                    i = [null],
                    r = [],
                    o = this.table,
                    a = "",
                    s = 0,
                    l = 0,
                    c = 0;
                  this.lexer.setInput(t),
                    (this.lexer.yy = this.yy),
                    (this.yy.lexer = this.lexer),
                    void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                  var d = this.lexer.yylloc;
                  function u() {
                    var t;
                    return (
                      "number" != typeof (t = e.lexer.lex() || 1) &&
                        (t = e.symbols_[t] || t),
                      t
                    );
                  }
                  r.push(d),
                    "function" == typeof this.yy.parseError &&
                      (this.parseError = this.yy.parseError);
                  for (var p, h, f, b, m, g, v, _, y, M = {}; ; ) {
                    if (
                      ((f = n[n.length - 1]),
                      this.defaultActions[f]
                        ? (b = this.defaultActions[f])
                        : (null == p && (p = u()), (b = o[f] && o[f][p])),
                      void 0 === b || !b.length || !b[0])
                    ) {
                      if (!c) {
                        for (g in ((y = []), o[f]))
                          this.terminals_[g] &&
                            g > 2 &&
                            y.push("'" + this.terminals_[g] + "'");
                        var O = "";
                        (O = this.lexer.showPosition
                          ? "Parse error on line " +
                            (s + 1) +
                            ":\n" +
                            this.lexer.showPosition() +
                            "\nExpecting " +
                            y.join(", ") +
                            ", got '" +
                            this.terminals_[p] +
                            "'"
                          : "Parse error on line " +
                            (s + 1) +
                            ": Unexpected " +
                            (1 == p
                              ? "end of input"
                              : "'" + (this.terminals_[p] || p) + "'")),
                          this.parseError(O, {
                            text: this.lexer.match,
                            token: this.terminals_[p] || p,
                            line: this.lexer.yylineno,
                            loc: d,
                            expected: y,
                          });
                      }
                      if (3 == c) {
                        if (1 == p) throw new Error(O || "Parsing halted.");
                        (l = this.lexer.yyleng),
                          (a = this.lexer.yytext),
                          (s = this.lexer.yylineno),
                          (d = this.lexer.yylloc),
                          (p = u());
                      }
                      for (; !((2).toString() in o[f]); ) {
                        if (0 == f) throw new Error(O || "Parsing halted.");
                        (n.length = n.length - 2),
                          (i.length = i.length - 1),
                          (r.length = r.length - 1),
                          (f = n[n.length - 1]);
                      }
                      (h = p),
                        (p = 2),
                        (b = o[(f = n[n.length - 1])] && o[f][2]),
                        (c = 3);
                    }
                    if (b[0] instanceof Array && b.length > 1)
                      throw new Error(
                        "Parse Error: multiple actions possible at state: " +
                          f +
                          ", token: " +
                          p
                      );
                    switch (b[0]) {
                      case 1:
                        n.push(p),
                          i.push(this.lexer.yytext),
                          r.push(this.lexer.yylloc),
                          n.push(b[1]),
                          (p = null),
                          h
                            ? ((p = h), (h = null))
                            : ((l = this.lexer.yyleng),
                              (a = this.lexer.yytext),
                              (s = this.lexer.yylineno),
                              (d = this.lexer.yylloc),
                              c > 0 && c--);
                        break;
                      case 2:
                        if (
                          ((v = this.productions_[b[1]][1]),
                          (M.$ = i[i.length - v]),
                          (M._$ = {
                            first_line: r[r.length - (v || 1)].first_line,
                            last_line: r[r.length - 1].last_line,
                            first_column: r[r.length - (v || 1)].first_column,
                            last_column: r[r.length - 1].last_column,
                          }),
                          void 0 !==
                            (m = this.performAction.call(
                              M,
                              a,
                              l,
                              s,
                              this.yy,
                              b[1],
                              i,
                              r
                            )))
                        )
                          return m;
                        v &&
                          ((n = n.slice(0, -1 * v * 2)),
                          (i = i.slice(0, -1 * v)),
                          (r = r.slice(0, -1 * v))),
                          n.push(this.productions_[b[1]][0]),
                          i.push(M.$),
                          r.push(M._$),
                          (_ = o[n[n.length - 2]][n[n.length - 1]]),
                          n.push(_);
                        break;
                      case 3:
                        return !0;
                    }
                  }
                  return !0;
                },
              }),
              (r = (function () {
                var t = {
                  EOF: 1,
                  parseError: function (t, e) {
                    if (!this.yy.parseError) throw new Error(t);
                    this.yy.parseError(t, e);
                  },
                  setInput: function (t) {
                    return (
                      (this._input = t),
                      (this._more = this._less = this.done = !1),
                      (this.yylineno = this.yyleng = 0),
                      (this.yytext = this.matched = this.match = ""),
                      (this.conditionStack = ["INITIAL"]),
                      (this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                      }),
                      this
                    );
                  },
                  input: function () {
                    var t = this._input[0];
                    return (
                      (this.yytext += t),
                      this.yyleng++,
                      (this.match += t),
                      (this.matched += t),
                      t.match(/\n/) && this.yylineno++,
                      (this._input = this._input.slice(1)),
                      t
                    );
                  },
                  unput: function (t) {
                    return (this._input = t + this._input), this;
                  },
                  more: function () {
                    return (this._more = !0), this;
                  },
                  less: function (t) {
                    this._input = this.match.slice(t) + this._input;
                  },
                  pastInput: function () {
                    var t = this.matched.substr(
                      0,
                      this.matched.length - this.match.length
                    );
                    return (
                      (t.length > 20 ? "..." : "") +
                      t.substr(-20).replace(/\n/g, "")
                    );
                  },
                  upcomingInput: function () {
                    var t = this.match;
                    return (
                      t.length < 20 &&
                        (t += this._input.substr(0, 20 - t.length)),
                      (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(
                        /\n/g,
                        ""
                      )
                    );
                  },
                  showPosition: function () {
                    var t = this.pastInput(),
                      e = new Array(t.length + 1).join("-");
                    return t + this.upcomingInput() + "\n" + e + "^";
                  },
                  next: function () {
                    if (this.done) return this.EOF;
                    var t, e, n, i, r;
                    this._input || (this.done = !0),
                      this._more || ((this.yytext = ""), (this.match = ""));
                    for (
                      var o = this._currentRules(), a = 0;
                      a < o.length &&
                      (!(n = this._input.match(this.rules[o[a]])) ||
                        (e && !(n[0].length > e[0].length)) ||
                        ((e = n), (i = a), this.options.flex));
                      a++
                    );
                    return e
                      ? ((r = e[0].match(/\n.*/g)) &&
                          (this.yylineno += r.length),
                        (this.yylloc = {
                          first_line: this.yylloc.last_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.last_column,
                          last_column: r
                            ? r[r.length - 1].length - 1
                            : this.yylloc.last_column + e[0].length,
                        }),
                        (this.yytext += e[0]),
                        (this.match += e[0]),
                        (this.yyleng = this.yytext.length),
                        (this._more = !1),
                        (this._input = this._input.slice(e[0].length)),
                        (this.matched += e[0]),
                        (t = this.performAction.call(
                          this,
                          this.yy,
                          this,
                          o[i],
                          this.conditionStack[this.conditionStack.length - 1]
                        )),
                        this.done && this._input && (this.done = !1),
                        t || void 0)
                      : "" === this._input
                      ? this.EOF
                      : void this.parseError(
                          "Lexical error on line " +
                            (this.yylineno + 1) +
                            ". Unrecognized text.\n" +
                            this.showPosition(),
                          { text: "", token: null, line: this.yylineno }
                        );
                  },
                  lex: function () {
                    var t = this.next();
                    return void 0 !== t ? t : this.lex();
                  },
                  begin: function (t) {
                    this.conditionStack.push(t);
                  },
                  popState: function () {
                    return this.conditionStack.pop();
                  },
                  _currentRules: function () {
                    return this.conditions[
                      this.conditionStack[this.conditionStack.length - 1]
                    ].rules;
                  },
                  topState: function () {
                    return this.conditionStack[this.conditionStack.length - 2];
                  },
                  pushState: function (t) {
                    this.begin(t);
                  },
                  options: {},
                  performAction: function (t, e, n, i) {
                    switch (n) {
                      case 0:
                        break;
                      case 1:
                        return 6;
                      case 2:
                        return (e.yytext = e.yytext.substr(1, e.yyleng - 2)), 4;
                      case 3:
                        return 17;
                      case 4:
                        return 18;
                      case 5:
                        return 23;
                      case 6:
                        return 24;
                      case 7:
                        return 22;
                      case 8:
                        return 21;
                      case 9:
                        return 10;
                      case 10:
                        return 11;
                      case 11:
                        return 8;
                      case 12:
                        return 14;
                      case 13:
                        return "INVALID";
                    }
                  },
                  rules: [
                    /^(?:\s+)/,
                    /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,
                    /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,
                    /^(?:\{)/,
                    /^(?:\})/,
                    /^(?:\[)/,
                    /^(?:\])/,
                    /^(?:,)/,
                    /^(?::)/,
                    /^(?:true\b)/,
                    /^(?:false\b)/,
                    /^(?:null\b)/,
                    /^(?:$)/,
                    /^(?:.)/,
                  ],
                  conditions: {
                    INITIAL: {
                      rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                      inclusive: !0,
                    },
                  },
                };
                return t;
              })()),
              (i.lexer = r),
              i);
          (e.parser = o), (e.parse = o.parse.bind(o));
        },
        function (t, e) {
          "use strict";
          function n(t, e) {
            var n = this;
            (this.editor = t),
              (this.timeout = void 0),
              (this.delay = 200),
              (this.lastText = void 0),
              (this.dom = {}),
              (this.dom.container = e);
            var i = document.createElement("table");
            (this.dom.table = i),
              (i.className = "jsoneditor-search"),
              e.appendChild(i);
            var r = document.createElement("tbody");
            (this.dom.tbody = r), i.appendChild(r);
            var o = document.createElement("tr");
            r.appendChild(o);
            var a = document.createElement("td");
            o.appendChild(a);
            var s = document.createElement("div");
            (this.dom.results = s),
              (s.className = "jsoneditor-results"),
              a.appendChild(s),
              (a = document.createElement("td")),
              o.appendChild(a);
            var l = document.createElement("div");
            (this.dom.input = l),
              (l.className = "jsoneditor-frame"),
              (l.title = "Search fields and values"),
              a.appendChild(l);
            var c = document.createElement("table");
            l.appendChild(c);
            var d = document.createElement("tbody");
            c.appendChild(d),
              (o = document.createElement("tr")),
              d.appendChild(o);
            var u = document.createElement("button");
            (u.type = "button"),
              (u.className = "jsoneditor-refresh"),
              (a = document.createElement("td")).appendChild(u),
              o.appendChild(a);
            var p = document.createElement("input");
            (this.dom.search = p),
              (p.oninput = function (t) {
                n._onDelayedSearch(t);
              }),
              (p.onchange = function (t) {
                n._onSearch();
              }),
              (p.onkeydown = function (t) {
                n._onKeyDown(t);
              }),
              (p.onkeyup = function (t) {
                n._onKeyUp(t);
              }),
              (u.onclick = function (t) {
                p.select();
              }),
              (a = document.createElement("td")).appendChild(p),
              o.appendChild(a);
            var h = document.createElement("button");
            (h.type = "button"),
              (h.title = "Next result (Enter)"),
              (h.className = "jsoneditor-next"),
              (h.onclick = function () {
                n.next();
              }),
              (a = document.createElement("td")).appendChild(h),
              o.appendChild(a);
            var f = document.createElement("button");
            (f.type = "button"),
              (f.title = "Previous result (Shift+Enter)"),
              (f.className = "jsoneditor-previous"),
              (f.onclick = function () {
                n.previous();
              }),
              (a = document.createElement("td")).appendChild(f),
              o.appendChild(a);
          }
          (n.prototype.next = function (t) {
            if (null != this.results) {
              var e = null != this.resultIndex ? this.resultIndex + 1 : 0;
              e > this.results.length - 1 && (e = 0),
                this._setActiveResult(e, t);
            }
          }),
            (n.prototype.previous = function (t) {
              if (null != this.results) {
                var e = this.results.length - 1,
                  n = null != this.resultIndex ? this.resultIndex - 1 : e;
                n < 0 && (n = e), this._setActiveResult(n, t);
              }
            }),
            (n.prototype._setActiveResult = function (t, e) {
              if (this.activeResult) {
                var n = this.activeResult.node;
                "field" == this.activeResult.elem
                  ? delete n.searchFieldActive
                  : delete n.searchValueActive,
                  n.updateDom();
              }
              if (!this.results || !this.results[t])
                return (
                  (this.resultIndex = void 0), void (this.activeResult = void 0)
                );
              this.resultIndex = t;
              var i = this.results[this.resultIndex].node,
                r = this.results[this.resultIndex].elem;
              "field" == r
                ? (i.searchFieldActive = !0)
                : (i.searchValueActive = !0),
                (this.activeResult = this.results[this.resultIndex]),
                i.updateDom(),
                i.scrollTo(function () {
                  e && i.focus(r);
                });
            }),
            (n.prototype._clearDelay = function () {
              null != this.timeout &&
                (clearTimeout(this.timeout), delete this.timeout);
            }),
            (n.prototype._onDelayedSearch = function (t) {
              this._clearDelay();
              var e = this;
              this.timeout = setTimeout(function (t) {
                e._onSearch();
              }, this.delay);
            }),
            (n.prototype._onSearch = function (t) {
              this._clearDelay();
              var e = this.dom.search.value,
                n = e.length > 0 ? e : void 0;
              if (n != this.lastText || t)
                if (
                  ((this.lastText = n),
                  (this.results = this.editor.search(n)),
                  this._setActiveResult(void 0),
                  null != n)
                ) {
                  var i = this.results.length;
                  switch (i) {
                    case 0:
                      this.dom.results.innerHTML = "no&nbsp;results";
                      break;
                    case 1:
                      this.dom.results.innerHTML = "1&nbsp;result";
                      break;
                    default:
                      this.dom.results.innerHTML = i + "&nbsp;results";
                  }
                } else this.dom.results.innerHTML = "";
            }),
            (n.prototype._onKeyDown = function (t) {
              var e = t.which;
              27 == e
                ? ((this.dom.search.value = ""),
                  this._onSearch(),
                  t.preventDefault(),
                  t.stopPropagation())
                : 13 == e &&
                  (t.ctrlKey
                    ? this._onSearch(!0)
                    : t.shiftKey
                    ? this.previous()
                    : this.next(),
                  t.preventDefault(),
                  t.stopPropagation());
            }),
            (n.prototype._onKeyUp = function (t) {
              var e = t.keyCode;
              27 != e && 13 != e && this._onDelayedSearch(t);
            }),
            (n.prototype.clear = function () {
              (this.dom.search.value = ""), this._onSearch();
            }),
            (n.prototype.destroy = function () {
              (this.editor = null),
                this.dom.container.removeChild(this.dom.table),
                (this.dom = null),
                (this.results = null),
                (this.activeResult = null),
                this._clearDelay();
            }),
            (t.exports = n);
        },
        function (t, e, n) {
          "use strict";
          var i = n(54);
          function r(t, e) {
            this.dom = {};
            var n = this,
              i = this.dom;
            (this.anchor = void 0),
              (this.items = t),
              (this.eventListeners = {}),
              (this.selection = void 0),
              (this.onClose = e ? e.close : void 0);
            var r = document.createElement("div");
            (r.className = "jsoneditor-contextmenu-root"), (i.root = r);
            var o = document.createElement("div");
            (o.className = "jsoneditor-contextmenu"),
              (i.menu = o),
              r.appendChild(o);
            var a = document.createElement("ul");
            (a.className = "jsoneditor-menu"),
              o.appendChild(a),
              (i.list = a),
              (i.items = []);
            var s = document.createElement("button");
            (s.type = "button"), (i.focusButton = s);
            var l = document.createElement("li");
            (l.style.overflow = "hidden"),
              (l.style.height = "0"),
              l.appendChild(s),
              a.appendChild(l),
              (function t(e, i, r) {
                r.forEach(function (r) {
                  if ("separator" == r.type) {
                    var o = document.createElement("div");
                    (o.className = "jsoneditor-separator"),
                      (s = document.createElement("li")).appendChild(o),
                      e.appendChild(s);
                  } else {
                    var a = {},
                      s = document.createElement("li");
                    e.appendChild(s);
                    var l = document.createElement("button");
                    if (
                      ((l.type = "button"),
                      (l.className = r.className),
                      (a.button = l),
                      r.title && (l.title = r.title),
                      r.click &&
                        (l.onclick = function (t) {
                          t.preventDefault(), n.hide(), r.click();
                        }),
                      s.appendChild(l),
                      r.submenu)
                    ) {
                      var c,
                        d = document.createElement("div");
                      if (
                        ((d.className = "jsoneditor-icon"),
                        l.appendChild(d),
                        l.appendChild(document.createTextNode(r.text)),
                        r.click)
                      ) {
                        l.className += " jsoneditor-default";
                        var u = document.createElement("button");
                        (u.type = "button"),
                          (a.buttonExpand = u),
                          (u.className = "jsoneditor-expand"),
                          (u.innerHTML =
                            '<div class="jsoneditor-expand"></div>'),
                          s.appendChild(u),
                          r.submenuTitle && (u.title = r.submenuTitle),
                          (c = u);
                      } else {
                        var p = document.createElement("div");
                        (p.className = "jsoneditor-expand"),
                          l.appendChild(p),
                          (c = l);
                      }
                      c.onclick = function (t) {
                        t.preventDefault(), n._onExpandItem(a), c.focus();
                      };
                      var h = [];
                      a.subItems = h;
                      var f = document.createElement("ul");
                      (a.ul = f),
                        (f.className = "jsoneditor-menu"),
                        (f.style.height = "0"),
                        s.appendChild(f),
                        t(f, h, r.submenu);
                    } else
                      l.innerHTML =
                        '<div class="jsoneditor-icon"></div>' + r.text;
                    i.push(a);
                  }
                });
              })(a, this.dom.items, t),
              (this.maxHeight = 0),
              t.forEach(function (e) {
                var i = 24 * (t.length + (e.submenu ? e.submenu.length : 0));
                n.maxHeight = Math.max(n.maxHeight, i);
              });
          }
          (r.prototype._getVisibleButtons = function () {
            var t = [],
              e = this;
            return (
              this.dom.items.forEach(function (n) {
                t.push(n.button),
                  n.buttonExpand && t.push(n.buttonExpand),
                  n.subItems &&
                    n == e.expandedItem &&
                    n.subItems.forEach(function (e) {
                      t.push(e.button),
                        e.buttonExpand && t.push(e.buttonExpand);
                    });
              }),
              t
            );
          }),
            (r.visibleMenu = void 0),
            (r.prototype.show = function (t, e) {
              this.hide();
              var n = !0;
              if (e) {
                var o = t.getBoundingClientRect(),
                  a = e.getBoundingClientRect();
                o.bottom + this.maxHeight < a.bottom ||
                  (o.top - this.maxHeight > a.top && (n = !1));
              }
              if (n) {
                var s = t.offsetHeight;
                (this.dom.menu.style.left = "0px"),
                  (this.dom.menu.style.top = s + "px"),
                  (this.dom.menu.style.bottom = "");
              } else
                (this.dom.menu.style.left = "0px"),
                  (this.dom.menu.style.top = ""),
                  (this.dom.menu.style.bottom = "0px");
              var l = t.parentNode;
              l.insertBefore(this.dom.root, l.firstChild);
              var c = this,
                d = this.dom.list;
              (this.eventListeners.mousedown = i.addEventListener(
                window,
                "mousedown",
                function (t) {
                  var e = t.target;
                  e == d ||
                    c._isChildOf(e, d) ||
                    (c.hide(), t.stopPropagation(), t.preventDefault());
                }
              )),
                (this.eventListeners.keydown = i.addEventListener(
                  window,
                  "keydown",
                  function (t) {
                    c._onKeyDown(t);
                  }
                )),
                (this.selection = i.getSelection()),
                (this.anchor = t),
                setTimeout(function () {
                  c.dom.focusButton.focus();
                }, 0),
                r.visibleMenu && r.visibleMenu.hide(),
                (r.visibleMenu = this);
            }),
            (r.prototype.hide = function () {
              for (var t in (this.dom.root.parentNode &&
                (this.dom.root.parentNode.removeChild(this.dom.root),
                this.onClose && this.onClose()),
              this.eventListeners))
                if (this.eventListeners.hasOwnProperty(t)) {
                  var e = this.eventListeners[t];
                  e && i.removeEventListener(window, t, e),
                    delete this.eventListeners[t];
                }
              r.visibleMenu == this && (r.visibleMenu = void 0);
            }),
            (r.prototype._onExpandItem = function (t) {
              var e = this,
                n = t == this.expandedItem,
                r = this.expandedItem;
              if (
                (r &&
                  ((r.ul.style.height = "0"),
                  (r.ul.style.padding = ""),
                  setTimeout(function () {
                    e.expandedItem != r &&
                      ((r.ul.style.display = ""),
                      i.removeClassName(
                        r.ul.parentNode,
                        "jsoneditor-selected"
                      ));
                  }, 300),
                  (this.expandedItem = void 0)),
                !n)
              ) {
                var o = t.ul;
                (o.style.display = "block"),
                  o.clientHeight,
                  setTimeout(function () {
                    e.expandedItem == t &&
                      ((o.style.height = 24 * o.childNodes.length + "px"),
                      (o.style.padding = "5px 10px"));
                  }, 0),
                  i.addClassName(o.parentNode, "jsoneditor-selected"),
                  (this.expandedItem = t);
              }
            }),
            (r.prototype._onKeyDown = function (t) {
              var e,
                n,
                r,
                o,
                a = t.target,
                s = t.which,
                l = !1;
              27 == s
                ? (this.selection && i.setSelection(this.selection),
                  this.anchor && this.anchor.focus(),
                  this.hide(),
                  (l = !0))
                : 9 == s
                ? t.shiftKey
                  ? 0 == (n = (e = this._getVisibleButtons()).indexOf(a)) &&
                    (e[e.length - 1].focus(), (l = !0))
                  : (n = (e = this._getVisibleButtons()).indexOf(a)) ==
                      e.length - 1 && (e[0].focus(), (l = !0))
                : 37 == s
                ? ("jsoneditor-expand" == a.className &&
                    ((n = (e = this._getVisibleButtons()).indexOf(a)),
                    (r = e[n - 1]) && r.focus()),
                  (l = !0))
                : 38 == s
                ? ((n = (e = this._getVisibleButtons()).indexOf(a)),
                  (r = e[n - 1]) &&
                    "jsoneditor-expand" == r.className &&
                    (r = e[n - 2]),
                  r || (r = e[e.length - 1]),
                  r && r.focus(),
                  (l = !0))
                : 39 == s
                ? ((n = (e = this._getVisibleButtons()).indexOf(a)),
                  (o = e[n + 1]) &&
                    "jsoneditor-expand" == o.className &&
                    o.focus(),
                  (l = !0))
                : 40 == s &&
                  ((n = (e = this._getVisibleButtons()).indexOf(a)),
                  (o = e[n + 1]) &&
                    "jsoneditor-expand" == o.className &&
                    (o = e[n + 2]),
                  o || (o = e[0]),
                  o && (o.focus(), (l = !0)),
                  (l = !0)),
                l && (t.stopPropagation(), t.preventDefault());
            }),
            (r.prototype._isChildOf = function (t, e) {
              for (var n = t.parentNode; n; ) {
                if (n == e) return !0;
                n = n.parentNode;
              }
              return !1;
            }),
            (t.exports = r);
        },
        function (t, e, n) {
          "use strict";
          var i = n(59),
            r = n(57),
            o = n(60),
            a = n(54);
          function s(t, e) {
            (this.editor = t),
              (this.dom = {}),
              (this.expanded = !1),
              e && e instanceof Object
                ? (this.setField(e.field, e.fieldEditable),
                  this.setValue(e.value, e.type))
                : (this.setField(""), this.setValue(null)),
              (this._debouncedOnChangeValue = a.debounce(
                this._onChangeValue.bind(this),
                s.prototype.DEBOUNCE_INTERVAL
              )),
              (this._debouncedOnChangeField = a.debounce(
                this._onChangeField.bind(this),
                s.prototype.DEBOUNCE_INTERVAL
              ));
          }
          (s.prototype.DEBOUNCE_INTERVAL = 150),
            (s.prototype._updateEditability = function () {
              if (
                ((this.editable = { field: !0, value: !0 }),
                this.editor &&
                  ((this.editable.field = "tree" === this.editor.options.mode),
                  (this.editable.value = "view" !== this.editor.options.mode),
                  ("tree" === this.editor.options.mode ||
                    "form" === this.editor.options.mode) &&
                    "function" == typeof this.editor.options.onEditable))
              ) {
                var t = this.editor.options.onEditable({
                  field: this.field,
                  value: this.value,
                  path: this.getPath(),
                });
                "boolean" == typeof t
                  ? ((this.editable.field = t), (this.editable.value = t))
                  : ("boolean" == typeof t.field &&
                      (this.editable.field = t.field),
                    "boolean" == typeof t.value &&
                      (this.editable.value = t.value));
              }
            }),
            (s.prototype.getPath = function () {
              for (var t = this, e = []; t; ) {
                var n = t.parent
                  ? "array" != t.parent.type
                    ? t.field
                    : t.index
                  : void 0;
                void 0 !== n && e.unshift(n), (t = t.parent);
              }
              return e;
            }),
            (s.prototype.findNode = function (t) {
              for (var e = a.parsePath(t), n = this; n && e.length > 0; ) {
                var i = e.shift();
                if ("number" == typeof i) {
                  if ("array" !== n.type)
                    throw new Error(
                      "Cannot get child node at index " +
                        i +
                        ": node is no array"
                    );
                  n = n.childs[i];
                } else {
                  if ("object" !== n.type)
                    throw new Error(
                      "Cannot get child node " + i + ": node is no object"
                    );
                  n = n.childs.filter(function (t) {
                    return t.field === i;
                  })[0];
                }
              }
              return n;
            }),
            (s.prototype.findParents = function () {
              for (var t = [], e = this.parent; e; )
                t.unshift(e), (e = e.parent);
              return t;
            }),
            (s.prototype.setError = function (t, e) {
              this.getDom(), (this.error = t);
              var n = this.dom.tdError;
              if (t) {
                n ||
                  ((n = document.createElement("td")),
                  (this.dom.tdError = n),
                  this.dom.tdValue.parentNode.appendChild(n));
                var i = document.createElement("div");
                (i.className = "jsoneditor-popover jsoneditor-right"),
                  i.appendChild(document.createTextNode(t.message));
                var r = document.createElement("button");
                for (
                  r.type = "button",
                    r.className = "jsoneditor-schema-error",
                    r.appendChild(i),
                    r.onmouseover = r.onfocus =
                      function () {
                        for (
                          var t = ["right", "above", "below", "left"], e = 0;
                          e < t.length;
                          e++
                        ) {
                          var n = t[e];
                          i.className = "jsoneditor-popover jsoneditor-" + n;
                          var r = this.editor.content.getBoundingClientRect(),
                            o = i.getBoundingClientRect();
                          if (a.insideRect(r, o, 20)) break;
                        }
                      }.bind(this),
                    e &&
                      (r.onclick = function () {
                        e.findParents().forEach(function (t) {
                          t.expand(!1);
                        }),
                          e.scrollTo(function () {
                            e.focus();
                          });
                      });
                  n.firstChild;

                )
                  n.removeChild(n.firstChild);
                n.appendChild(r);
              } else
                n &&
                  (this.dom.tdError.parentNode.removeChild(this.dom.tdError),
                  delete this.dom.tdError);
            }),
            (s.prototype.getIndex = function () {
              return this.parent ? this.parent.childs.indexOf(this) : -1;
            }),
            (s.prototype.setParent = function (t) {
              this.parent = t;
            }),
            (s.prototype.setField = function (t, e) {
              (this.field = t),
                (this.previousField = t),
                (this.fieldEditable = !0 === e);
            }),
            (s.prototype.getField = function () {
              return void 0 === this.field && this._getDomField(), this.field;
            }),
            (s.prototype.setValue = function (t, e) {
              var n,
                i,
                r = this.childs;
              if (r) for (; r.length; ) this.removeChild(r[0]);
              if (((this.type = this._getType(t)), e && e != this.type)) {
                if ("string" != e || "auto" != this.type)
                  throw new Error(
                    'Type mismatch: cannot cast value of type "' +
                      this.type +
                      ' to the specified type "' +
                      e +
                      '"'
                  );
                this.type = e;
              }
              if ("array" == this.type) {
                this.childs = [];
                for (var o = 0, a = t.length; o < a; o++)
                  void 0 === (n = t[o]) ||
                    n instanceof Function ||
                    ((i = new s(this.editor, { value: n })),
                    this.appendChild(i));
                this.value = "";
              } else if ("object" == this.type) {
                for (var l in ((this.childs = []), t))
                  t.hasOwnProperty(l) &&
                    (void 0 === (n = t[l]) ||
                      n instanceof Function ||
                      ((i = new s(this.editor, { field: l, value: n })),
                      this.appendChild(i)));
                (this.value = ""),
                  !0 === this.editor.options.sortObjectKeys && this.sort("asc");
              } else (this.childs = void 0), (this.value = t);
              this.previousValue = this.value;
            }),
            (s.prototype.getValue = function () {
              if ("array" == this.type) {
                var t = [];
                return (
                  this.childs.forEach(function (e) {
                    t.push(e.getValue());
                  }),
                  t
                );
              }
              if ("object" == this.type) {
                var e = {};
                return (
                  this.childs.forEach(function (t) {
                    e[t.getField()] = t.getValue();
                  }),
                  e
                );
              }
              return void 0 === this.value && this._getDomValue(), this.value;
            }),
            (s.prototype.getLevel = function () {
              return this.parent ? this.parent.getLevel() + 1 : 0;
            }),
            (s.prototype.getNodePath = function () {
              var t = this.parent ? this.parent.getNodePath() : [];
              return t.push(this), t;
            }),
            (s.prototype.clone = function () {
              var t = new s(this.editor);
              if (
                ((t.type = this.type),
                (t.field = this.field),
                (t.fieldInnerText = this.fieldInnerText),
                (t.fieldEditable = this.fieldEditable),
                (t.value = this.value),
                (t.valueInnerText = this.valueInnerText),
                (t.expanded = this.expanded),
                this.childs)
              ) {
                var e = [];
                this.childs.forEach(function (n) {
                  var i = n.clone();
                  i.setParent(t), e.push(i);
                }),
                  (t.childs = e);
              } else t.childs = void 0;
              return t;
            }),
            (s.prototype.expand = function (t) {
              this.childs &&
                ((this.expanded = !0),
                this.dom.expand &&
                  (this.dom.expand.className = "jsoneditor-expanded"),
                this.showChilds(),
                !1 !== t &&
                  this.childs.forEach(function (e) {
                    e.expand(t);
                  }));
            }),
            (s.prototype.collapse = function (t) {
              this.childs &&
                (this.hideChilds(),
                !1 !== t &&
                  this.childs.forEach(function (e) {
                    e.collapse(t);
                  }),
                this.dom.expand &&
                  (this.dom.expand.className = "jsoneditor-collapsed"),
                (this.expanded = !1));
            }),
            (s.prototype.showChilds = function () {
              if (this.childs && this.expanded) {
                var t = this.dom.tr,
                  e = t ? t.parentNode : void 0;
                if (e) {
                  var n = this.getAppend(),
                    i = t.nextSibling;
                  i ? e.insertBefore(n, i) : e.appendChild(n),
                    this.childs.forEach(function (t) {
                      e.insertBefore(t.getDom(), n), t.showChilds();
                    });
                }
              }
            }),
            (s.prototype.hide = function () {
              var t = this.dom.tr,
                e = t ? t.parentNode : void 0;
              e && e.removeChild(t), this.hideChilds();
            }),
            (s.prototype.hideChilds = function () {
              if (this.childs && this.expanded) {
                var t = this.getAppend();
                t.parentNode && t.parentNode.removeChild(t),
                  this.childs.forEach(function (t) {
                    t.hide();
                  });
              }
            }),
            (s.prototype.appendChild = function (t) {
              if (this._hasChilds()) {
                if (
                  (t.setParent(this),
                  (t.fieldEditable = "object" == this.type),
                  "array" == this.type && (t.index = this.childs.length),
                  this.childs.push(t),
                  this.expanded)
                ) {
                  var e = t.getDom(),
                    n = this.getAppend(),
                    i = n ? n.parentNode : void 0;
                  n && i && i.insertBefore(e, n), t.showChilds();
                }
                this.updateDom({ updateIndexes: !0 }),
                  t.updateDom({ recurse: !0 });
              }
            }),
            (s.prototype.moveBefore = function (t, e) {
              if (this._hasChilds()) {
                var n = this.dom.tr ? this.dom.tr.parentNode : void 0;
                if (n) {
                  var i = document.createElement("tr");
                  (i.style.height = n.clientHeight + "px"), n.appendChild(i);
                }
                t.parent && t.parent.removeChild(t),
                  e instanceof l
                    ? this.appendChild(t)
                    : this.insertBefore(t, e),
                  n && n.removeChild(i);
              }
            }),
            (s.prototype.moveTo = function (t, e) {
              t.parent == this && this.childs.indexOf(t) < e && e++;
              var n = this.childs[e] || this.append;
              this.moveBefore(t, n);
            }),
            (s.prototype.insertBefore = function (t, e) {
              if (this._hasChilds()) {
                if (e == this.append)
                  t.setParent(this),
                    (t.fieldEditable = "object" == this.type),
                    this.childs.push(t);
                else {
                  var n = this.childs.indexOf(e);
                  if (-1 == n) throw new Error("Node not found");
                  t.setParent(this),
                    (t.fieldEditable = "object" == this.type),
                    this.childs.splice(n, 0, t);
                }
                if (this.expanded) {
                  var i = t.getDom(),
                    r = e.getDom(),
                    o = r ? r.parentNode : void 0;
                  r && o && o.insertBefore(i, r), t.showChilds();
                }
                this.updateDom({ updateIndexes: !0 }),
                  t.updateDom({ recurse: !0 });
              }
            }),
            (s.prototype.insertAfter = function (t, e) {
              if (this._hasChilds()) {
                var n = this.childs.indexOf(e),
                  i = this.childs[n + 1];
                i ? this.insertBefore(t, i) : this.appendChild(t);
              }
            }),
            (s.prototype.search = function (t) {
              var e = [],
                n = t ? t.toLowerCase() : void 0;
              if (
                (delete this.searchField,
                delete this.searchValue,
                null != this.field &&
                  (-1 != String(this.field).toLowerCase().indexOf(n) &&
                    ((this.searchField = !0),
                    e.push({ node: this, elem: "field" })),
                  this._updateDomField()),
                this._hasChilds())
              ) {
                if (this.childs) {
                  var i = [];
                  this.childs.forEach(function (e) {
                    i = i.concat(e.search(t));
                  }),
                    (e = e.concat(i));
                }
                null != n &&
                  (0 == i.length ? this.collapse(!1) : this.expand(!1));
              } else
                null != this.value &&
                  -1 != String(this.value).toLowerCase().indexOf(n) &&
                  ((this.searchValue = !0),
                  e.push({ node: this, elem: "value" })),
                  this._updateDomValue();
              return e;
            }),
            (s.prototype.scrollTo = function (t) {
              if (!this.dom.tr || !this.dom.tr.parentNode)
                for (var e = this.parent; e; ) e.expand(!1), (e = e.parent);
              this.dom.tr &&
                this.dom.tr.parentNode &&
                this.editor.scrollTo(this.dom.tr.offsetTop, t);
            }),
            (s.focusElement = void 0),
            (s.prototype.focus = function (t) {
              if (
                ((s.focusElement = t), this.dom.tr && this.dom.tr.parentNode)
              ) {
                var e = this.dom;
                switch (t) {
                  case "drag":
                    e.drag ? e.drag.focus() : e.menu.focus();
                    break;
                  case "menu":
                    e.menu.focus();
                    break;
                  case "expand":
                    this._hasChilds()
                      ? e.expand.focus()
                      : e.field && this.fieldEditable
                      ? (e.field.focus(), a.selectContentEditable(e.field))
                      : e.value && !this._hasChilds()
                      ? (e.value.focus(), a.selectContentEditable(e.value))
                      : e.menu.focus();
                    break;
                  case "field":
                    e.field && this.fieldEditable
                      ? (e.field.focus(), a.selectContentEditable(e.field))
                      : e.value && !this._hasChilds()
                      ? (e.value.focus(), a.selectContentEditable(e.value))
                      : this._hasChilds()
                      ? e.expand.focus()
                      : e.menu.focus();
                    break;
                  case "value":
                  default:
                    e.value && !this._hasChilds()
                      ? (e.value.focus(), a.selectContentEditable(e.value))
                      : e.field && this.fieldEditable
                      ? (e.field.focus(), a.selectContentEditable(e.field))
                      : this._hasChilds()
                      ? e.expand.focus()
                      : e.menu.focus();
                }
              }
            }),
            (s.select = function (t) {
              setTimeout(function () {
                a.selectContentEditable(t);
              }, 0);
            }),
            (s.prototype.blur = function () {
              this._getDomValue(!1), this._getDomField(!1);
            }),
            (s.prototype.containsNode = function (t) {
              if (this == t) return !0;
              var e = this.childs;
              if (e)
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n].containsNode(t)) return !0;
              return !1;
            }),
            (s.prototype._move = function (t, e) {
              if (t != e) {
                if (t.containsNode(this))
                  throw new Error("Cannot move a field into a child of itself");
                t.parent && t.parent.removeChild(t);
                var n = t.clone();
                t.clearDom(), e ? this.insertBefore(n, e) : this.appendChild(n);
              }
            }),
            (s.prototype.removeChild = function (t) {
              if (this.childs) {
                var e = this.childs.indexOf(t);
                if (-1 != e) {
                  t.hide(), delete t.searchField, delete t.searchValue;
                  var n = this.childs.splice(e, 1)[0];
                  return (
                    (n.parent = null), this.updateDom({ updateIndexes: !0 }), n
                  );
                }
              }
            }),
            (s.prototype._remove = function (t) {
              this.removeChild(t);
            }),
            (s.prototype.changeType = function (t) {
              var e = this.type;
              if (e != t) {
                if (
                  ("string" != t && "auto" != t) ||
                  ("string" != e && "auto" != e)
                ) {
                  var n,
                    i = this.dom.tr ? this.dom.tr.parentNode : void 0,
                    r =
                      (n = this.expanded ? this.getAppend() : this.getDom()) &&
                      n.parentNode
                        ? n.nextSibling
                        : void 0;
                  this.hide(),
                    this.clearDom(),
                    (this.type = t),
                    "object" == t
                      ? (this.childs || (this.childs = []),
                        this.childs.forEach(function (t, e) {
                          t.clearDom(),
                            delete t.index,
                            (t.fieldEditable = !0),
                            null == t.field && (t.field = "");
                        }),
                        ("string" != e && "auto" != e) || (this.expanded = !0))
                      : "array" == t
                      ? (this.childs || (this.childs = []),
                        this.childs.forEach(function (t, e) {
                          t.clearDom(), (t.fieldEditable = !1), (t.index = e);
                        }),
                        ("string" != e && "auto" != e) || (this.expanded = !0))
                      : (this.expanded = !1),
                    i &&
                      (r
                        ? i.insertBefore(this.getDom(), r)
                        : i.appendChild(this.getDom())),
                    this.showChilds();
                } else this.type = t;
                ("auto" != t && "string" != t) ||
                  ((this.value =
                    "string" == t
                      ? String(this.value)
                      : this._stringCast(String(this.value))),
                  this.focus()),
                  this.updateDom({ updateIndexes: !0 });
              }
            }),
            (s.prototype._getDomValue = function (t) {
              if (
                (this.dom.value &&
                  "array" != this.type &&
                  "object" != this.type &&
                  (this.valueInnerText = a.getInnerText(this.dom.value)),
                null != this.valueInnerText)
              )
                try {
                  var e;
                  if ("string" == this.type)
                    e = this._unescapeHTML(this.valueInnerText);
                  else {
                    var n = this._unescapeHTML(this.valueInnerText);
                    e = this._stringCast(n);
                  }
                  e !== this.value &&
                    ((this.value = e), this._debouncedOnChangeValue());
                } catch (e) {
                  if (((this.value = void 0), !0 !== t)) throw e;
                }
            }),
            (s.prototype._onChangeValue = function () {
              var t = this.editor.getSelection();
              if (t.range) {
                var e = a.textDiff(
                  String(this.value),
                  String(this.previousValue)
                );
                (t.range.startOffset = e.start), (t.range.endOffset = e.end);
              }
              var n = this.editor.getSelection();
              if (n.range) {
                var i = a.textDiff(
                  String(this.previousValue),
                  String(this.value)
                );
                (n.range.startOffset = i.start), (n.range.endOffset = i.end);
              }
              this.editor._onAction("editValue", {
                node: this,
                oldValue: this.previousValue,
                newValue: this.value,
                oldSelection: t,
                newSelection: n,
              }),
                (this.previousValue = this.value);
            }),
            (s.prototype._onChangeField = function () {
              var t = this.editor.getSelection();
              if (t.range) {
                var e = a.textDiff(this.field, this.previousField);
                (t.range.startOffset = e.start), (t.range.endOffset = e.end);
              }
              var n = this.editor.getSelection();
              if (n.range) {
                var i = a.textDiff(this.previousField, this.field);
                (n.range.startOffset = i.start), (n.range.endOffset = i.end);
              }
              this.editor._onAction("editField", {
                node: this,
                oldValue: this.previousField,
                newValue: this.field,
                oldSelection: t,
                newSelection: n,
              }),
                (this.previousField = this.field);
            }),
            (s.prototype._updateDomValue = function () {
              var t = this.dom.value;
              if (t) {
                var e = ["jsoneditor-value"],
                  n = this.value,
                  i = "auto" == this.type ? a.type(n) : this.type,
                  r = "string" == i && a.isUrl(n);
                if (
                  (e.push("jsoneditor-" + i),
                  r && e.push("jsoneditor-url"),
                  "" == String(this.value) &&
                    "array" != this.type &&
                    "object" != this.type &&
                    e.push("jsoneditor-empty"),
                  this.searchValueActive &&
                    e.push("jsoneditor-highlight-active"),
                  this.searchValue && e.push("jsoneditor-highlight"),
                  (t.className = e.join(" ")),
                  "array" == i || "object" == i)
                ) {
                  var o = this.childs ? this.childs.length : 0;
                  t.title = this.type + " containing " + o + " items";
                } else
                  r && this.editable.value
                    ? (t.title =
                        "Ctrl+Click or Ctrl+Enter to open url in new window")
                    : (t.title = "");
                if (
                  ("boolean" === i && this.editable.value
                    ? (this.dom.checkbox ||
                        ((this.dom.checkbox = document.createElement("input")),
                        (this.dom.checkbox.type = "checkbox"),
                        (this.dom.tdCheckbox = document.createElement("td")),
                        (this.dom.tdCheckbox.className = "jsoneditor-tree"),
                        this.dom.tdCheckbox.appendChild(this.dom.checkbox),
                        this.dom.tdValue.parentNode.insertBefore(
                          this.dom.tdCheckbox,
                          this.dom.tdValue
                        )),
                      (this.dom.checkbox.checked = this.value))
                    : this.dom.tdCheckbox &&
                      (this.dom.tdCheckbox.parentNode.removeChild(
                        this.dom.tdCheckbox
                      ),
                      delete this.dom.tdCheckbox,
                      delete this.dom.checkbox),
                  this.enum && this.editable.value)
                ) {
                  if (!this.dom.select) {
                    (this.dom.select = document.createElement("select")),
                      (this.id =
                        this.field + "_" + new Date().getUTCMilliseconds()),
                      (this.dom.select.id = this.id),
                      (this.dom.select.name = this.dom.select.id),
                      (this.dom.select.option =
                        document.createElement("option")),
                      (this.dom.select.option.value = ""),
                      (this.dom.select.option.innerHTML = "--"),
                      this.dom.select.appendChild(this.dom.select.option);
                    for (var s = 0; s < this.enum.length; s++)
                      (this.dom.select.option =
                        document.createElement("option")),
                        (this.dom.select.option.value = this.enum[s]),
                        (this.dom.select.option.innerHTML = this.enum[s]),
                        this.dom.select.option.value == this.value &&
                          (this.dom.select.option.selected = !0),
                        this.dom.select.appendChild(this.dom.select.option);
                    (this.dom.tdSelect = document.createElement("td")),
                      (this.dom.tdSelect.className = "jsoneditor-tree"),
                      this.dom.tdSelect.appendChild(this.dom.select),
                      this.dom.tdValue.parentNode.insertBefore(
                        this.dom.tdSelect,
                        this.dom.tdValue
                      );
                  }
                  !this.schema ||
                  this.schema.hasOwnProperty("oneOf") ||
                  this.schema.hasOwnProperty("anyOf") ||
                  this.schema.hasOwnProperty("allOf")
                    ? delete this.valueFieldHTML
                    : ((this.valueFieldHTML = this.dom.tdValue.innerHTML),
                      (this.dom.tdValue.style.visibility = "hidden"),
                      (this.dom.tdValue.innerHTML = ""));
                } else
                  this.dom.tdSelect &&
                    (this.dom.tdSelect.parentNode.removeChild(
                      this.dom.tdSelect
                    ),
                    delete this.dom.tdSelect,
                    delete this.dom.select,
                    (this.dom.tdValue.innerHTML = this.valueFieldHTML),
                    (this.dom.tdValue.style.visibility = ""),
                    delete this.valueFieldHTML);
                a.stripFormatting(t);
              }
            }),
            (s.prototype._updateDomField = function () {
              var t = this.dom.field;
              t &&
                ("" == String(this.field) && "array" != this.parent.type
                  ? a.addClassName(t, "jsoneditor-empty")
                  : a.removeClassName(t, "jsoneditor-empty"),
                this.searchFieldActive
                  ? a.addClassName(t, "jsoneditor-highlight-active")
                  : a.removeClassName(t, "jsoneditor-highlight-active"),
                this.searchField
                  ? a.addClassName(t, "jsoneditor-highlight")
                  : a.removeClassName(t, "jsoneditor-highlight"),
                a.stripFormatting(t));
            }),
            (s.prototype._getDomField = function (t) {
              if (
                (this.dom.field &&
                  this.fieldEditable &&
                  (this.fieldInnerText = a.getInnerText(this.dom.field)),
                null != this.fieldInnerText)
              )
                try {
                  var e = this._unescapeHTML(this.fieldInnerText);
                  e !== this.field &&
                    ((this.field = e), this._debouncedOnChangeField());
                } catch (e) {
                  if (((this.field = void 0), !0 !== t)) throw e;
                }
            }),
            (s.prototype.validate = function () {
              var t = [];
              if ("object" === this.type) {
                for (var e = {}, n = [], i = 0; i < this.childs.length; i++) {
                  var r = this.childs[i];
                  e.hasOwnProperty(r.field) && n.push(r.field),
                    (e[r.field] = !0);
                }
                n.length > 0 &&
                  (t = this.childs
                    .filter(function (t) {
                      return -1 !== n.indexOf(t.field);
                    })
                    .map(function (t) {
                      return {
                        node: t,
                        error: { message: 'duplicate key "' + t.field + '"' },
                      };
                    }));
              }
              if (this.childs)
                for (i = 0; i < this.childs.length; i++) {
                  var o = this.childs[i].validate();
                  o.length > 0 && (t = t.concat(o));
                }
              return t;
            }),
            (s.prototype.clearDom = function () {
              this.dom = {};
            }),
            (s.prototype.getDom = function () {
              var t = this.dom;
              if (t.tr) return t.tr;
              if (
                (this._updateEditability(),
                (t.tr = document.createElement("tr")),
                (t.tr.node = this),
                "tree" === this.editor.options.mode)
              ) {
                var e = document.createElement("td");
                if (this.editable.field && this.parent) {
                  var n = document.createElement("button");
                  (n.type = "button"),
                    (t.drag = n),
                    (n.className = "jsoneditor-dragarea"),
                    (n.title = "Drag to move this field (Alt+Shift+Arrows)"),
                    e.appendChild(n);
                }
                t.tr.appendChild(e);
                var i = document.createElement("td"),
                  r = document.createElement("button");
                (r.type = "button"),
                  (t.menu = r),
                  (r.className = "jsoneditor-contextmenu"),
                  (r.title = "Click to open the actions menu (Ctrl+M)"),
                  i.appendChild(t.menu),
                  t.tr.appendChild(i);
              }
              var o = document.createElement("td");
              return (
                t.tr.appendChild(o),
                (t.tree = this._createDomTree()),
                o.appendChild(t.tree),
                this.updateDom({ updateIndexes: !0 }),
                t.tr
              );
            }),
            (s.onDragStart = function (t, e) {
              if (!Array.isArray(t)) return s.onDragStart([t], e);
              if (0 !== t.length) {
                var n = t[0],
                  i = t[t.length - 1],
                  r = s.getNodeFromTarget(e.target),
                  o = i._nextSibling(),
                  l = n.editor,
                  c = a.getAbsoluteTop(r.dom.tr) - a.getAbsoluteTop(n.dom.tr);
                l.mousemove ||
                  (l.mousemove = a.addEventListener(
                    window,
                    "mousemove",
                    function (e) {
                      s.onDrag(t, e);
                    }
                  )),
                  l.mouseup ||
                    (l.mouseup = a.addEventListener(
                      window,
                      "mouseup",
                      function (e) {
                        s.onDragEnd(t, e);
                      }
                    )),
                  l.highlighter.lock(),
                  (l.drag = {
                    oldCursor: document.body.style.cursor,
                    oldSelection: l.getSelection(),
                    oldBeforeNode: o,
                    mouseX: e.pageX,
                    offsetY: c,
                    level: n.getLevel(),
                  }),
                  (document.body.style.cursor = "move"),
                  e.preventDefault();
              }
            }),
            (s.onDrag = function (t, e) {
              if (!Array.isArray(t)) return s.onDrag([t], e);
              if (0 !== t.length) {
                var n,
                  i,
                  r,
                  o,
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
                  _ = t[0].editor,
                  y = e.pageY - _.drag.offsetY,
                  M = e.pageX,
                  O = !1,
                  w = t[0];
                if (
                  ((n = w.dom.tr),
                  (h = a.getAbsoluteTop(n)),
                  (m = n.offsetHeight),
                  y < h)
                ) {
                  i = n;
                  do {
                    (i = i.previousSibling),
                      (u = s.getNodeFromTarget(i)),
                      (f = i ? a.getAbsoluteTop(i) : 0);
                  } while (i && y < f);
                  u && !u.parent && (u = void 0),
                    u ||
                      ((i = (d = n.parentNode.firstChild)
                        ? d.nextSibling
                        : void 0),
                      (u = s.getNodeFromTarget(i)) == w && (u = void 0)),
                    u &&
                      y > (f = (i = u.dom.tr) ? a.getAbsoluteTop(i) : 0) + m &&
                      (u = void 0),
                    u &&
                      (t.forEach(function (t) {
                        u.parent.moveBefore(t, u);
                      }),
                      (O = !0));
                } else {
                  var A = t[t.length - 1];
                  if (
                    (o = (c =
                      A.expanded && A.append ? A.append.getDom() : A.dom.tr)
                      ? c.nextSibling
                      : void 0)
                  ) {
                    (b = a.getAbsoluteTop(o)), (r = o);
                    do {
                      (p = s.getNodeFromTarget(r)),
                        r &&
                          ((g = r.nextSibling
                            ? a.getAbsoluteTop(r.nextSibling)
                            : 0),
                          (v = r ? g - b : 0),
                          p.parent.childs.length == t.length &&
                            p.parent.childs[t.length - 1] == A &&
                            (h += 27)),
                        (r = r.nextSibling);
                    } while (r && y > h + v);
                    if (p && p.parent) {
                      var x = M - _.drag.mouseX,
                        z = Math.round(x / 24 / 2),
                        C = _.drag.level + z,
                        k = p.getLevel();
                      for (i = p.dom.tr.previousSibling; k < C && i; ) {
                        if (
                          ((u = s.getNodeFromTarget(i)),
                          t.some(function (t) {
                            return t === u || u._isChildOf(t);
                          }))
                        );
                        else {
                          if (!(u instanceof l)) break;
                          var S = u.parent.childs;
                          if (S.length == t.length && S[t.length - 1] == A)
                            break;
                          k = (p = s.getNodeFromTarget(i)).getLevel();
                        }
                        i = i.previousSibling;
                      }
                      c.nextSibling != p.dom.tr &&
                        (t.forEach(function (t) {
                          p.parent.moveBefore(t, p);
                        }),
                        (O = !0));
                    }
                  }
                }
                O && ((_.drag.mouseX = M), (_.drag.level = w.getLevel())),
                  _.startAutoScroll(y),
                  e.preventDefault();
              }
            }),
            (s.onDragEnd = function (t, e) {
              if (!Array.isArray(t)) return s.onDrag([t], e);
              if (0 !== t.length) {
                var n = t[0],
                  i = n.editor,
                  r = n.parent,
                  o = r.childs.indexOf(n),
                  l = r.childs[o + t.length] || r.append;
                t[0] && t[0].dom.menu.focus();
                var c = {
                  nodes: t,
                  oldSelection: i.drag.oldSelection,
                  newSelection: i.getSelection(),
                  oldBeforeNode: i.drag.oldBeforeNode,
                  newBeforeNode: l,
                };
                c.oldBeforeNode != c.newBeforeNode &&
                  i._onAction("moveNodes", c),
                  (document.body.style.cursor = i.drag.oldCursor),
                  i.highlighter.unlock(),
                  t.forEach(function (t) {
                    e.target !== t.dom.drag &&
                      e.target !== t.dom.menu &&
                      i.highlighter.unhighlight();
                  }),
                  delete i.drag,
                  i.mousemove &&
                    (a.removeEventListener(window, "mousemove", i.mousemove),
                    delete i.mousemove),
                  i.mouseup &&
                    (a.removeEventListener(window, "mouseup", i.mouseup),
                    delete i.mouseup),
                  i.stopAutoScroll(),
                  e.preventDefault();
              }
            }),
            (s.prototype._isChildOf = function (t) {
              for (var e = this.parent; e; ) {
                if (e == t) return !0;
                e = e.parent;
              }
              return !1;
            }),
            (s.prototype._createDomField = function () {
              return document.createElement("div");
            }),
            (s.prototype.setHighlight = function (t) {
              this.dom.tr &&
                (t
                  ? a.addClassName(this.dom.tr, "jsoneditor-highlight")
                  : a.removeClassName(this.dom.tr, "jsoneditor-highlight"),
                this.append && this.append.setHighlight(t),
                this.childs &&
                  this.childs.forEach(function (e) {
                    e.setHighlight(t);
                  }));
            }),
            (s.prototype.setSelected = function (t, e) {
              (this.selected = t),
                this.dom.tr &&
                  (t
                    ? a.addClassName(this.dom.tr, "jsoneditor-selected")
                    : a.removeClassName(this.dom.tr, "jsoneditor-selected"),
                  e
                    ? a.addClassName(this.dom.tr, "jsoneditor-first")
                    : a.removeClassName(this.dom.tr, "jsoneditor-first"),
                  this.append && this.append.setSelected(t),
                  this.childs &&
                    this.childs.forEach(function (e) {
                      e.setSelected(t);
                    }));
            }),
            (s.prototype.updateValue = function (t) {
              (this.value = t), this.updateDom();
            }),
            (s.prototype.updateField = function (t) {
              (this.field = t), this.updateDom();
            }),
            (s.prototype.updateDom = function (t) {
              var e = this.dom.tree;
              e && (e.style.marginLeft = 24 * this.getLevel() + "px");
              var n,
                i = this.dom.field;
              i &&
                (this.fieldEditable
                  ? ((i.contentEditable = this.editable.field),
                    (i.spellcheck = !1),
                    (i.className = "jsoneditor-field"))
                  : (i.className = "jsoneditor-readonly"),
                (n =
                  null != this.index
                    ? this.index
                    : null != this.field
                    ? this.field
                    : this._hasChilds()
                    ? this.type
                    : ""),
                (i.innerHTML = this._escapeHTML(n)),
                this._updateSchema());
              var r = this.dom.value;
              if (r) {
                var o = this.childs ? this.childs.length : 0;
                "array" == this.type
                  ? ((r.innerHTML = "[" + o + "]"),
                    a.addClassName(this.dom.tr, "jsoneditor-expandable"))
                  : "object" == this.type
                  ? ((r.innerHTML = "{" + o + "}"),
                    a.addClassName(this.dom.tr, "jsoneditor-expandable"))
                  : ((r.innerHTML = this._escapeHTML(this.value)),
                    a.removeClassName(this.dom.tr, "jsoneditor-expandable"));
              }
              this._updateDomField(),
                this._updateDomValue(),
                t && !0 === t.updateIndexes && this._updateDomIndexes(),
                t &&
                  !0 === t.recurse &&
                  this.childs &&
                  this.childs.forEach(function (e) {
                    e.updateDom(t);
                  }),
                this.append && this.append.updateDom();
            }),
            (s.prototype._updateSchema = function () {
              this.editor &&
                this.editor.options &&
                ((this.schema = s._findSchema(
                  this.editor.options.schema,
                  this.getPath()
                )),
                this.schema
                  ? (this.enum = s._findEnum(this.schema))
                  : delete this.enum);
            }),
            (s._findEnum = function (t) {
              if (t.enum) return t.enum;
              var e = t.oneOf || t.anyOf || t.allOf;
              if (e) {
                var n = e.filter(function (t) {
                  return t.enum;
                });
                if (n.length > 0) return n[0].enum;
              }
              return null;
            }),
            (s._findSchema = function (t, e) {
              for (var n = t, i = 0; i < e.length && n; i++) {
                var r = e[i];
                "string" == typeof r && n.properties
                  ? (n = n.properties[r] || null)
                  : "number" == typeof r && n.items && (n = n.items);
              }
              return n;
            }),
            (s.prototype._updateDomIndexes = function () {
              var t = this.dom.value,
                e = this.childs;
              t &&
                e &&
                ("array" == this.type
                  ? e.forEach(function (t, e) {
                      t.index = e;
                      var n = t.dom.field;
                      n && (n.innerHTML = e);
                    })
                  : "object" == this.type &&
                    e.forEach(function (t) {
                      null != t.index &&
                        (delete t.index, null == t.field && (t.field = ""));
                    }));
            }),
            (s.prototype._createDomValue = function () {
              var t;
              return (
                "array" == this.type
                  ? ((t = document.createElement("div")).innerHTML = "[...]")
                  : "object" == this.type
                  ? ((t = document.createElement("div")).innerHTML = "{...}")
                  : !this.editable.value && a.isUrl(this.value)
                  ? (((t = document.createElement("a")).href = this.value),
                    (t.target = "_blank"),
                    (t.innerHTML = this._escapeHTML(this.value)))
                  : (((t = document.createElement("div")).contentEditable =
                      this.editable.value),
                    (t.spellcheck = !1),
                    (t.innerHTML = this._escapeHTML(this.value))),
                t
              );
            }),
            (s.prototype._createDomExpandButton = function () {
              var t = document.createElement("button");
              return (
                (t.type = "button"),
                this._hasChilds()
                  ? ((t.className = this.expanded
                      ? "jsoneditor-expanded"
                      : "jsoneditor-collapsed"),
                    (t.title =
                      "Click to expand/collapse this field (Ctrl+E). \nCtrl+Click to expand/collapse including all childs."))
                  : ((t.className = "jsoneditor-invisible"), (t.title = "")),
                t
              );
            }),
            (s.prototype._createDomTree = function () {
              var t = this.dom,
                e = document.createElement("table"),
                n = document.createElement("tbody");
              (e.style.borderCollapse = "collapse"),
                (e.className = "jsoneditor-values"),
                e.appendChild(n);
              var i = document.createElement("tr");
              n.appendChild(i);
              var r = document.createElement("td");
              (r.className = "jsoneditor-tree"),
                i.appendChild(r),
                (t.expand = this._createDomExpandButton()),
                r.appendChild(t.expand),
                (t.tdExpand = r);
              var o = document.createElement("td");
              (o.className = "jsoneditor-tree"),
                i.appendChild(o),
                (t.field = this._createDomField()),
                o.appendChild(t.field),
                (t.tdField = o);
              var a = document.createElement("td");
              (a.className = "jsoneditor-tree"),
                i.appendChild(a),
                "object" != this.type &&
                  "array" != this.type &&
                  (a.appendChild(document.createTextNode(":")),
                  (a.className = "jsoneditor-separator")),
                (t.tdSeparator = a);
              var s = document.createElement("td");
              return (
                (s.className = "jsoneditor-tree"),
                i.appendChild(s),
                (t.value = this._createDomValue()),
                s.appendChild(t.value),
                (t.tdValue = s),
                e
              );
            }),
            (s.prototype.onEvent = function (t) {
              var e = t.type,
                n = t.target || t.srcElement,
                i = this.dom,
                r = this,
                o = this._hasChilds();
              if (
                ((n != i.drag && n != i.menu) ||
                  ("mouseover" == e
                    ? this.editor.highlighter.highlight(this)
                    : "mouseout" == e && this.editor.highlighter.unhighlight()),
                "click" == e && n == i.menu)
              ) {
                var s = r.editor.highlighter;
                s.highlight(r),
                  s.lock(),
                  a.addClassName(i.menu, "jsoneditor-selected"),
                  this.showContextMenu(i.menu, function () {
                    a.removeClassName(i.menu, "jsoneditor-selected"),
                      s.unlock(),
                      s.unhighlight();
                  });
              }
              if (
                "click" == e &&
                (n == i.expand ||
                  (("view" === r.editor.options.mode ||
                    "form" === r.editor.options.mode) &&
                    "DIV" === n.nodeName)) &&
                o
              ) {
                var l = t.ctrlKey;
                this._onExpand(l);
              }
              "change" == e &&
                n == i.checkbox &&
                ((this.dom.value.innerHTML = !this.value), this._getDomValue()),
                "change" == e &&
                  n == i.select &&
                  ((this.dom.value.innerHTML = i.select.value),
                  this._getDomValue(),
                  this._updateDomValue());
              var c = i.value;
              if (n == c)
                switch (e) {
                  case "blur":
                  case "change":
                    this._getDomValue(!0),
                      this._updateDomValue(),
                      this.value &&
                        (c.innerHTML = this._escapeHTML(this.value));
                    break;
                  case "input":
                    this._getDomValue(!0), this._updateDomValue();
                    break;
                  case "keydown":
                  case "mousedown":
                    this.editor.selection = this.editor.getSelection();
                    break;
                  case "click":
                    (!t.ctrlKey && this.editable.value) ||
                      (a.isUrl(this.value) &&
                        window.open(this.value, "_blank"));
                    break;
                  case "keyup":
                    this._getDomValue(!0), this._updateDomValue();
                    break;
                  case "cut":
                  case "paste":
                    setTimeout(function () {
                      r._getDomValue(!0), r._updateDomValue();
                    }, 1);
                }
              var d = i.field;
              if (n == d)
                switch (e) {
                  case "blur":
                  case "change":
                    this._getDomField(!0),
                      this._updateDomField(),
                      this.field &&
                        (d.innerHTML = this._escapeHTML(this.field));
                    break;
                  case "input":
                    this._getDomField(!0),
                      this._updateSchema(),
                      this._updateDomField(),
                      this._updateDomValue();
                    break;
                  case "keydown":
                  case "mousedown":
                    this.editor.selection = this.editor.getSelection();
                    break;
                  case "keyup":
                    this._getDomField(!0), this._updateDomField();
                    break;
                  case "cut":
                  case "paste":
                    setTimeout(function () {
                      r._getDomField(!0), r._updateDomField();
                    }, 1);
                }
              n != i.tree.parentNode ||
                "click" != e ||
                t.hasMoved ||
                ((null != t.offsetX
                  ? t.offsetX < 24 * (this.getLevel() + 1)
                  : t.pageX < a.getAbsoluteLeft(i.tdSeparator)) || o
                  ? d && (a.setEndOfContentEditable(d), d.focus())
                  : c &&
                    !this.enum &&
                    (a.setEndOfContentEditable(c), c.focus())),
                ((n != i.tdExpand || o) &&
                  n != i.tdField &&
                  n != i.tdSeparator) ||
                  "click" != e ||
                  t.hasMoved ||
                  (d && (a.setEndOfContentEditable(d), d.focus())),
                "keydown" == e && this.onKeyDown(t);
            }),
            (s.prototype.onKeyDown = function (t) {
              var e,
                n,
                i,
                r,
                o,
                c,
                d,
                u,
                p = t.which || t.keyCode,
                h = t.target || t.srcElement,
                f = t.ctrlKey,
                b = t.shiftKey,
                m = t.altKey,
                g = !1,
                v = "tree" === this.editor.options.mode,
                _ =
                  this.editor.multiselection.nodes.length > 0
                    ? this.editor.multiselection.nodes
                    : [this],
                y = _[0],
                M = _[_.length - 1];
              if (13 == p) {
                if (h == this.dom.value)
                  (this.editable.value && !t.ctrlKey) ||
                    (a.isUrl(this.value) &&
                      (window.open(this.value, "_blank"), (g = !0)));
                else if (h == this.dom.expand && this._hasChilds()) {
                  var O = t.ctrlKey;
                  this._onExpand(O), h.focus(), (g = !0);
                }
              } else if (68 == p) f && v && (s.onDuplicate(_), (g = !0));
              else if (69 == p) f && (this._onExpand(b), h.focus(), (g = !0));
              else if (77 == p && v) f && (this.showContextMenu(h), (g = !0));
              else if (46 == p && v) f && (s.onRemove(_), (g = !0));
              else if (45 == p && v)
                f && !b
                  ? (this._onInsertBefore(), (g = !0))
                  : f && b && (this._onInsertAfter(), (g = !0));
              else if (35 == p) {
                if (m) {
                  var w = this._lastNode();
                  w && w.focus(s.focusElement || this._getElementName(h)),
                    (g = !0);
                }
              } else if (36 == p) {
                if (m) {
                  var A = this._firstNode();
                  A && A.focus(s.focusElement || this._getElementName(h)),
                    (g = !0);
                }
              } else if (37 == p) {
                if (m && !b) {
                  var x = this._previousElement(h);
                  x && this.focus(this._getElementName(x)), (g = !0);
                } else if (m && b && v) {
                  if (M.expanded) {
                    var z = M.getAppend();
                    i = z ? z.nextSibling : void 0;
                  } else {
                    var C = M.getDom();
                    i = C.nextSibling;
                  }
                  i &&
                    ((n = s.getNodeFromTarget(i)),
                    (r = i.nextSibling),
                    (T = s.getNodeFromTarget(r)),
                    n &&
                      n instanceof l &&
                      1 != M.parent.childs.length &&
                      T &&
                      T.parent &&
                      ((o = this.editor.getSelection()),
                      (c = M._nextSibling()),
                      _.forEach(function (t) {
                        T.parent.moveBefore(t, T);
                      }),
                      this.focus(s.focusElement || this._getElementName(h)),
                      this.editor._onAction("moveNodes", {
                        nodes: _,
                        oldBeforeNode: c,
                        newBeforeNode: T,
                        oldSelection: o,
                        newSelection: this.editor.getSelection(),
                      })));
                }
              } else if (38 == p)
                m && !b
                  ? ((e = this._previousNode()) &&
                      (this.editor.deselect(!0),
                      e.focus(s.focusElement || this._getElementName(h))),
                    (g = !0))
                  : !m && f && b && v
                  ? ((e = this._previousNode()) &&
                      (((u = this.editor.multiselection).start =
                        u.start || this),
                      (u.end = e),
                      (d = this.editor._findTopLevelNodes(u.start, u.end)),
                      this.editor.select(d),
                      e.focus("field")),
                    (g = !0))
                  : m &&
                    b &&
                    v &&
                    ((e = y._previousNode()) &&
                      e.parent &&
                      ((o = this.editor.getSelection()),
                      (c = M._nextSibling()),
                      _.forEach(function (t) {
                        e.parent.moveBefore(t, e);
                      }),
                      this.focus(s.focusElement || this._getElementName(h)),
                      this.editor._onAction("moveNodes", {
                        nodes: _,
                        oldBeforeNode: c,
                        newBeforeNode: e,
                        oldSelection: o,
                        newSelection: this.editor.getSelection(),
                      })),
                    (g = !0));
              else if (39 == p) {
                if (m && !b) {
                  var k = this._nextElement(h);
                  k && this.focus(this._getElementName(k)), (g = !0);
                } else if (m && b && v) {
                  var S = (C = y.getDom()).previousSibling;
                  S &&
                    (e = s.getNodeFromTarget(S)) &&
                    e.parent &&
                    e instanceof l &&
                    !e.isVisible() &&
                    ((o = this.editor.getSelection()),
                    (c = M._nextSibling()),
                    _.forEach(function (t) {
                      e.parent.moveBefore(t, e);
                    }),
                    this.focus(s.focusElement || this._getElementName(h)),
                    this.editor._onAction("moveNodes", {
                      nodes: _,
                      oldBeforeNode: c,
                      newBeforeNode: e,
                      oldSelection: o,
                      newSelection: this.editor.getSelection(),
                    }));
                }
              } else if (40 == p)
                if (m && !b)
                  (n = this._nextNode()) &&
                    (this.editor.deselect(!0),
                    n.focus(s.focusElement || this._getElementName(h))),
                    (g = !0);
                else if (!m && f && b && v)
                  (n = this._nextNode()) &&
                    (((u = this.editor.multiselection).start = u.start || this),
                    (u.end = n),
                    (d = this.editor._findTopLevelNodes(u.start, u.end)),
                    this.editor.select(d),
                    n.focus("field")),
                    (g = !0);
                else if (m && b && v) {
                  var T =
                    (n = M.expanded
                      ? M.append
                        ? M.append._nextNode()
                        : void 0
                      : M._nextNode()) &&
                    (n._nextNode() || n.parent.append);
                  T &&
                    T.parent &&
                    ((o = this.editor.getSelection()),
                    (c = M._nextSibling()),
                    _.forEach(function (t) {
                      T.parent.moveBefore(t, T);
                    }),
                    this.focus(s.focusElement || this._getElementName(h)),
                    this.editor._onAction("moveNodes", {
                      nodes: _,
                      oldBeforeNode: c,
                      newBeforeNode: T,
                      oldSelection: o,
                      newSelection: this.editor.getSelection(),
                    })),
                    (g = !0);
                }
              g && (t.preventDefault(), t.stopPropagation());
            }),
            (s.prototype._onExpand = function (t) {
              if (t) {
                var e = this.dom.tr.parentNode,
                  n = e.parentNode,
                  i = n.scrollTop;
                n.removeChild(e);
              }
              this.expanded ? this.collapse(t) : this.expand(t),
                t && (n.appendChild(e), (n.scrollTop = i));
            }),
            (s.onRemove = function (t) {
              if (!Array.isArray(t)) return s.onRemove([t]);
              if (t && t.length > 0) {
                var e = t[0],
                  n = e.parent,
                  i = e.editor,
                  r = e.getIndex();
                i.highlighter.unhighlight();
                var o = i.getSelection();
                s.blurNodes(t);
                var a = i.getSelection();
                t.forEach(function (t) {
                  t.parent._remove(t);
                }),
                  i._onAction("removeNodes", {
                    nodes: t.slice(0),
                    parent: n,
                    index: r,
                    oldSelection: o,
                    newSelection: a,
                  });
              }
            }),
            (s.onDuplicate = function (t) {
              if (!Array.isArray(t)) return s.onDuplicate([t]);
              if (t && t.length > 0) {
                var e = t[t.length - 1],
                  n = e.parent,
                  i = e.editor;
                i.deselect(i.multiselection.nodes);
                var r = i.getSelection(),
                  o = e,
                  a = t.map(function (t) {
                    var e = t.clone();
                    return n.insertAfter(e, o), (o = e), e;
                  });
                1 === t.length ? a[0].focus() : i.select(a);
                var l = i.getSelection();
                i._onAction("duplicateNodes", {
                  afterNode: e,
                  nodes: a,
                  parent: n,
                  oldSelection: r,
                  newSelection: l,
                });
              }
            }),
            (s.prototype._onInsertBefore = function (t, e, n) {
              var i = this.editor.getSelection(),
                r = new s(this.editor, {
                  field: null != t ? t : "",
                  value: null != e ? e : "",
                  type: n,
                });
              r.expand(!0),
                this.parent.insertBefore(r, this),
                this.editor.highlighter.unhighlight(),
                r.focus("field");
              var o = this.editor.getSelection();
              this.editor._onAction("insertBeforeNodes", {
                nodes: [r],
                beforeNode: this,
                parent: this.parent,
                oldSelection: i,
                newSelection: o,
              });
            }),
            (s.prototype._onInsertAfter = function (t, e, n) {
              var i = this.editor.getSelection(),
                r = new s(this.editor, {
                  field: null != t ? t : "",
                  value: null != e ? e : "",
                  type: n,
                });
              r.expand(!0),
                this.parent.insertAfter(r, this),
                this.editor.highlighter.unhighlight(),
                r.focus("field");
              var o = this.editor.getSelection();
              this.editor._onAction("insertAfterNodes", {
                nodes: [r],
                afterNode: this,
                parent: this.parent,
                oldSelection: i,
                newSelection: o,
              });
            }),
            (s.prototype._onAppend = function (t, e, n) {
              var i = this.editor.getSelection(),
                r = new s(this.editor, {
                  field: null != t ? t : "",
                  value: null != e ? e : "",
                  type: n,
                });
              r.expand(!0),
                this.parent.appendChild(r),
                this.editor.highlighter.unhighlight(),
                r.focus("field");
              var o = this.editor.getSelection();
              this.editor._onAction("appendNodes", {
                nodes: [r],
                parent: this.parent,
                oldSelection: i,
                newSelection: o,
              });
            }),
            (s.prototype._onChangeType = function (t) {
              var e = this.type;
              if (t != e) {
                var n = this.editor.getSelection();
                this.changeType(t);
                var i = this.editor.getSelection();
                this.editor._onAction("changeType", {
                  node: this,
                  oldType: e,
                  newType: t,
                  oldSelection: n,
                  newSelection: i,
                });
              }
            }),
            (s.prototype.sort = function (t) {
              if (this._hasChilds()) {
                var e = "desc" == t ? -1 : 1,
                  n = "array" == this.type ? "value" : "field";
                this.hideChilds();
                var r = this.childs,
                  o = this.sortOrder;
                (this.childs = this.childs.concat()),
                  this.childs.sort(function (t, r) {
                    return e * i(t[n], r[n]);
                  }),
                  (this.sortOrder = 1 == e ? "asc" : "desc"),
                  this.editor._onAction("sort", {
                    node: this,
                    oldChilds: r,
                    oldSort: o,
                    newChilds: this.childs,
                    newSort: this.sortOrder,
                  }),
                  this.showChilds();
              }
            }),
            (s.prototype.getAppend = function () {
              return (
                this.append ||
                  ((this.append = new l(this.editor)),
                  this.append.setParent(this)),
                this.append.getDom()
              );
            }),
            (s.getNodeFromTarget = function (t) {
              for (; t; ) {
                if (t.node) return t.node;
                t = t.parentNode;
              }
            }),
            (s.blurNodes = function (t) {
              if (Array.isArray(t)) {
                var e = t[0],
                  n = e.parent,
                  i = e.getIndex();
                n.childs[i + t.length]
                  ? n.childs[i + t.length].focus()
                  : n.childs[i - 1]
                  ? n.childs[i - 1].focus()
                  : n.focus();
              } else s.blurNodes([t]);
            }),
            (s.prototype._nextSibling = function () {
              var t = this.parent.childs.indexOf(this);
              return this.parent.childs[t + 1] || this.parent.append;
            }),
            (s.prototype._previousNode = function () {
              var t = null,
                e = this.getDom();
              if (e && e.parentNode) {
                var n = e;
                do {
                  (n = n.previousSibling), (t = s.getNodeFromTarget(n));
                } while (n && t instanceof l && !t.isVisible());
              }
              return t;
            }),
            (s.prototype._nextNode = function () {
              var t = null,
                e = this.getDom();
              if (e && e.parentNode) {
                var n = e;
                do {
                  (n = n.nextSibling), (t = s.getNodeFromTarget(n));
                } while (n && t instanceof l && !t.isVisible());
              }
              return t;
            }),
            (s.prototype._firstNode = function () {
              var t = null,
                e = this.getDom();
              if (e && e.parentNode) {
                var n = e.parentNode.firstChild;
                t = s.getNodeFromTarget(n);
              }
              return t;
            }),
            (s.prototype._lastNode = function () {
              var t = null,
                e = this.getDom();
              if (e && e.parentNode) {
                var n = e.parentNode.lastChild;
                for (
                  t = s.getNodeFromTarget(n);
                  n && t instanceof l && !t.isVisible();

                )
                  (n = n.previousSibling), (t = s.getNodeFromTarget(n));
              }
              return t;
            }),
            (s.prototype._previousElement = function (t) {
              var e = this.dom;
              switch (t) {
                case e.value:
                  if (this.fieldEditable) return e.field;
                case e.field:
                  if (this._hasChilds()) return e.expand;
                case e.expand:
                  return e.menu;
                case e.menu:
                  if (e.drag) return e.drag;
                default:
                  return null;
              }
            }),
            (s.prototype._nextElement = function (t) {
              var e = this.dom;
              switch (t) {
                case e.drag:
                  return e.menu;
                case e.menu:
                  if (this._hasChilds()) return e.expand;
                case e.expand:
                  if (this.fieldEditable) return e.field;
                case e.field:
                  if (!this._hasChilds()) return e.value;
                default:
                  return null;
              }
            }),
            (s.prototype._getElementName = function (t) {
              var e = this.dom;
              for (var n in e) if (e.hasOwnProperty(n) && e[n] == t) return n;
              return null;
            }),
            (s.prototype._hasChilds = function () {
              return "array" == this.type || "object" == this.type;
            }),
            (s.TYPE_TITLES = {
              auto: 'Field type "auto". The field type is automatically determined from the value and can be a string, number, boolean, or null.',
              object:
                'Field type "object". An object contains an unordered set of key/value pairs.',
              array:
                'Field type "array". An array contains an ordered collection of values.',
              string:
                'Field type "string". Field type is not determined from the value, but always returned as string.',
            }),
            (s.prototype.showContextMenu = function (t, e) {
              var n = this,
                i = s.TYPE_TITLES,
                o = [];
              if (
                (this.editable.value &&
                  o.push({
                    text: "Type",
                    title: "Change the type of this field",
                    className: "jsoneditor-type-" + this.type,
                    submenu: [
                      {
                        text: "Auto",
                        className:
                          "jsoneditor-type-auto" +
                          ("auto" == this.type ? " jsoneditor-selected" : ""),
                        title: i.auto,
                        click: function () {
                          n._onChangeType("auto");
                        },
                      },
                      {
                        text: "Array",
                        className:
                          "jsoneditor-type-array" +
                          ("array" == this.type ? " jsoneditor-selected" : ""),
                        title: i.array,
                        click: function () {
                          n._onChangeType("array");
                        },
                      },
                      {
                        text: "Object",
                        className:
                          "jsoneditor-type-object" +
                          ("object" == this.type ? " jsoneditor-selected" : ""),
                        title: i.object,
                        click: function () {
                          n._onChangeType("object");
                        },
                      },
                      {
                        text: "String",
                        className:
                          "jsoneditor-type-string" +
                          ("string" == this.type ? " jsoneditor-selected" : ""),
                        title: i.string,
                        click: function () {
                          n._onChangeType("string");
                        },
                      },
                    ],
                  }),
                this._hasChilds())
              ) {
                var a = "asc" == this.sortOrder ? "desc" : "asc";
                o.push({
                  text: "Sort",
                  title: "Sort the childs of this " + this.type,
                  className: "jsoneditor-sort-" + a,
                  click: function () {
                    n.sort(a);
                  },
                  submenu: [
                    {
                      text: "Ascending",
                      className: "jsoneditor-sort-asc",
                      title:
                        "Sort the childs of this " +
                        this.type +
                        " in ascending order",
                      click: function () {
                        n.sort("asc");
                      },
                    },
                    {
                      text: "Descending",
                      className: "jsoneditor-sort-desc",
                      title:
                        "Sort the childs of this " +
                        this.type +
                        " in descending order",
                      click: function () {
                        n.sort("desc");
                      },
                    },
                  ],
                });
              }
              if (this.parent && this.parent._hasChilds()) {
                o.length && o.push({ type: "separator" });
                var l = n.parent.childs;
                n == l[l.length - 1] &&
                  o.push({
                    text: "Append",
                    title:
                      "Append a new field with type 'auto' after this field (Ctrl+Shift+Ins)",
                    submenuTitle: "Select the type of the field to be appended",
                    className: "jsoneditor-append",
                    click: function () {
                      n._onAppend("", "", "auto");
                    },
                    submenu: [
                      {
                        text: "Auto",
                        className: "jsoneditor-type-auto",
                        title: i.auto,
                        click: function () {
                          n._onAppend("", "", "auto");
                        },
                      },
                      {
                        text: "Array",
                        className: "jsoneditor-type-array",
                        title: i.array,
                        click: function () {
                          n._onAppend("", []);
                        },
                      },
                      {
                        text: "Object",
                        className: "jsoneditor-type-object",
                        title: i.object,
                        click: function () {
                          n._onAppend("", {});
                        },
                      },
                      {
                        text: "String",
                        className: "jsoneditor-type-string",
                        title: i.string,
                        click: function () {
                          n._onAppend("", "", "string");
                        },
                      },
                    ],
                  }),
                  o.push({
                    text: "Insert",
                    title:
                      "Insert a new field with type 'auto' before this field (Ctrl+Ins)",
                    submenuTitle: "Select the type of the field to be inserted",
                    className: "jsoneditor-insert",
                    click: function () {
                      n._onInsertBefore("", "", "auto");
                    },
                    submenu: [
                      {
                        text: "Auto",
                        className: "jsoneditor-type-auto",
                        title: i.auto,
                        click: function () {
                          n._onInsertBefore("", "", "auto");
                        },
                      },
                      {
                        text: "Array",
                        className: "jsoneditor-type-array",
                        title: i.array,
                        click: function () {
                          n._onInsertBefore("", []);
                        },
                      },
                      {
                        text: "Object",
                        className: "jsoneditor-type-object",
                        title: i.object,
                        click: function () {
                          n._onInsertBefore("", {});
                        },
                      },
                      {
                        text: "String",
                        className: "jsoneditor-type-string",
                        title: i.string,
                        click: function () {
                          n._onInsertBefore("", "", "string");
                        },
                      },
                    ],
                  }),
                  this.editable.field &&
                    (o.push({
                      text: "Duplicate",
                      title: "Duplicate this field (Ctrl+D)",
                      className: "jsoneditor-duplicate",
                      click: function () {
                        s.onDuplicate(n);
                      },
                    }),
                    o.push({
                      text: "Remove",
                      title: "Remove this field (Ctrl+Del)",
                      className: "jsoneditor-remove",
                      click: function () {
                        s.onRemove(n);
                      },
                    }));
              }
              new r(o, { close: e }).show(t, this.editor.content);
            }),
            (s.prototype._getType = function (t) {
              return t instanceof Array
                ? "array"
                : t instanceof Object
                ? "object"
                : "string" == typeof t && "string" != typeof this._stringCast(t)
                ? "string"
                : "auto";
            }),
            (s.prototype._stringCast = function (t) {
              var e = t.toLowerCase(),
                n = Number(t),
                i = parseFloat(t);
              return "" == t
                ? ""
                : "null" == e
                ? null
                : "true" == e ||
                  ("false" != e && (isNaN(n) || isNaN(i) ? t : n));
            }),
            (s.prototype._escapeHTML = function (t) {
              if ("string" != typeof t) return String(t);
              var e = String(t)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/  /g, " &nbsp;")
                  .replace(/^ /, "&nbsp;")
                  .replace(/ $/, "&nbsp;"),
                n = JSON.stringify(e),
                i = n.substring(1, n.length - 1);
              return (
                !0 === this.editor.options.escapeUnicode &&
                  (i = a.escapeUnicodeChars(i)),
                i
              );
            }),
            (s.prototype._unescapeHTML = function (t) {
              var e = '"' + this._escapeJSON(t) + '"';
              return a
                .parse(e)
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&nbsp;|\u00A0/g, " ")
                .replace(/&amp;/g, "&");
            }),
            (s.prototype._escapeJSON = function (t) {
              for (var e = "", n = 0; n < t.length; ) {
                var i = t.charAt(n);
                "\n" == i
                  ? (e += "\\n")
                  : "\\" == i
                  ? ((e += i),
                    n++,
                    ("" !== (i = t.charAt(n)) &&
                      -1 != '"\\/bfnrtu'.indexOf(i)) ||
                      (e += "\\"),
                    (e += i))
                  : (e += '"' == i ? '\\"' : i),
                  n++;
              }
              return e;
            });
          var l = o(s);
          t.exports = s;
        },
        function (t, e) {
          t.exports = function t(e, n) {
            "use strict";
            var i,
              r,
              o =
                /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
              a = /(^[ ]*|[ ]*$)/g,
              s =
                /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
              l = /^0x[0-9a-f]+$/i,
              c = /^0/,
              d = function (e) {
                return (t.insensitive && ("" + e).toLowerCase()) || "" + e;
              },
              u = d(e).replace(a, "") || "",
              p = d(n).replace(a, "") || "",
              h = u
                .replace(o, "\0$1\0")
                .replace(/\0$/, "")
                .replace(/^\0/, "")
                .split("\0"),
              f = p
                .replace(o, "\0$1\0")
                .replace(/\0$/, "")
                .replace(/^\0/, "")
                .split("\0"),
              b =
                parseInt(u.match(l), 16) ||
                (1 !== h.length && u.match(s) && Date.parse(u)),
              m =
                parseInt(p.match(l), 16) ||
                (b && p.match(s) && Date.parse(p)) ||
                null;
            if (m) {
              if (b < m) return -1;
              if (b > m) return 1;
            }
            for (var g = 0, v = Math.max(h.length, f.length); g < v; g++) {
              if (
                ((i =
                  (!(h[g] || "").match(c) && parseFloat(h[g])) || h[g] || 0),
                (r = (!(f[g] || "").match(c) && parseFloat(f[g])) || f[g] || 0),
                isNaN(i) !== isNaN(r))
              )
                return isNaN(i) ? 1 : -1;
              if ((typeof i != typeof r && ((i += ""), (r += "")), i < r))
                return -1;
              if (i > r) return 1;
            }
            return 0;
          };
        },
        function (t, e, n) {
          "use strict";
          var i = n(54),
            r = n(57);
          t.exports = function (t) {
            function e(t) {
              (this.editor = t), (this.dom = {});
            }
            return (
              (e.prototype = new t()),
              (e.prototype.getDom = function () {
                var t = this.dom;
                if (t.tr) return t.tr;
                this._updateEditability();
                var e = document.createElement("tr");
                if (
                  ((e.node = this),
                  (t.tr = e),
                  "tree" === this.editor.options.mode)
                ) {
                  t.tdDrag = document.createElement("td");
                  var n = document.createElement("td");
                  t.tdMenu = n;
                  var i = document.createElement("button");
                  (i.type = "button"),
                    (i.className = "jsoneditor-contextmenu"),
                    (i.title = "Click to open the actions menu (Ctrl+M)"),
                    (t.menu = i),
                    n.appendChild(t.menu);
                }
                var r = document.createElement("td"),
                  o = document.createElement("div");
                return (
                  (o.innerHTML = "(empty)"),
                  (o.className = "jsoneditor-readonly"),
                  r.appendChild(o),
                  (t.td = r),
                  (t.text = o),
                  this.updateDom(),
                  e
                );
              }),
              (e.prototype.updateDom = function () {
                var t = this.dom,
                  e = t.td;
                e && (e.style.paddingLeft = 24 * this.getLevel() + 26 + "px");
                var n = t.text;
                n && (n.innerHTML = "(empty " + this.parent.type + ")");
                var i = t.tr;
                this.isVisible()
                  ? t.tr.firstChild ||
                    (t.tdDrag && i.appendChild(t.tdDrag),
                    t.tdMenu && i.appendChild(t.tdMenu),
                    i.appendChild(e))
                  : t.tr.firstChild &&
                    (t.tdDrag && i.removeChild(t.tdDrag),
                    t.tdMenu && i.removeChild(t.tdMenu),
                    i.removeChild(e));
              }),
              (e.prototype.isVisible = function () {
                return 0 == this.parent.childs.length;
              }),
              (e.prototype.showContextMenu = function (e, n) {
                var i = this,
                  o = t.TYPE_TITLES,
                  a = [
                    {
                      text: "Append",
                      title:
                        "Append a new field with type 'auto' (Ctrl+Shift+Ins)",
                      submenuTitle:
                        "Select the type of the field to be appended",
                      className: "jsoneditor-insert",
                      click: function () {
                        i._onAppend("", "", "auto");
                      },
                      submenu: [
                        {
                          text: "Auto",
                          className: "jsoneditor-type-auto",
                          title: o.auto,
                          click: function () {
                            i._onAppend("", "", "auto");
                          },
                        },
                        {
                          text: "Array",
                          className: "jsoneditor-type-array",
                          title: o.array,
                          click: function () {
                            i._onAppend("", []);
                          },
                        },
                        {
                          text: "Object",
                          className: "jsoneditor-type-object",
                          title: o.object,
                          click: function () {
                            i._onAppend("", {});
                          },
                        },
                        {
                          text: "String",
                          className: "jsoneditor-type-string",
                          title: o.string,
                          click: function () {
                            i._onAppend("", "", "string");
                          },
                        },
                      ],
                    },
                  ];
                new r(a, { close: n }).show(e, this.editor.content);
              }),
              (e.prototype.onEvent = function (t) {
                var e = t.type,
                  n = t.target || t.srcElement,
                  r = this.dom;
                if (
                  (n == r.menu &&
                    ("mouseover" == e
                      ? this.editor.highlighter.highlight(this.parent)
                      : "mouseout" == e &&
                        this.editor.highlighter.unhighlight()),
                  "click" == e && n == r.menu)
                ) {
                  var o = this.editor.highlighter;
                  o.highlight(this.parent),
                    o.lock(),
                    i.addClassName(r.menu, "jsoneditor-selected"),
                    this.showContextMenu(r.menu, function () {
                      i.removeClassName(r.menu, "jsoneditor-selected"),
                        o.unlock(),
                        o.unhighlight();
                    });
                }
                "keydown" == e && this.onKeyDown(t);
              }),
              e
            );
          };
        },
        function (t, e, n) {
          "use strict";
          var i = n(57);
          function r(t, e, n, r) {
            for (
              var o = {
                  code: {
                    text: "Code",
                    title: "Switch to code highlighter",
                    click: function () {
                      r("code");
                    },
                  },
                  form: {
                    text: "Form",
                    title: "Switch to form editor",
                    click: function () {
                      r("form");
                    },
                  },
                  text: {
                    text: "Text",
                    title: "Switch to plain text editor",
                    click: function () {
                      r("text");
                    },
                  },
                  tree: {
                    text: "Tree",
                    title: "Switch to tree editor",
                    click: function () {
                      r("tree");
                    },
                  },
                  view: {
                    text: "View",
                    title: "Switch to tree view",
                    click: function () {
                      r("view");
                    },
                  },
                },
                a = [],
                s = 0;
              s < e.length;
              s++
            ) {
              var l = e[s],
                c = o[l];
              if (!c) throw new Error('Unknown mode "' + l + '"');
              (c.className =
                "jsoneditor-type-modes" +
                (n == l ? " jsoneditor-selected" : "")),
                a.push(c);
            }
            var d = o[n];
            if (!d) throw new Error('Unknown mode "' + n + '"');
            var u = d.text,
              p = document.createElement("button");
            (p.type = "button"),
              (p.className = "jsoneditor-modes jsoneditor-separator"),
              (p.innerHTML = u + " &#x25BE;"),
              (p.title = "Switch editor mode"),
              (p.onclick = function () {
                new i(a).show(p);
              });
            var h = document.createElement("div");
            (h.className = "jsoneditor-modes"),
              (h.style.position = "relative"),
              h.appendChild(p),
              t.appendChild(h),
              (this.dom = { container: t, box: p, frame: h });
          }
          (r.prototype.focus = function () {
            this.dom.box.focus();
          }),
            (r.prototype.destroy = function () {
              this.dom &&
                this.dom.frame &&
                this.dom.frame.parentNode &&
                this.dom.frame.parentNode.removeChild(this.dom.frame),
                (this.dom = null);
            }),
            (t.exports = r);
        },
        function (t, e, n) {
          "use strict";
          var i;
          try {
            i = n(63);
          } catch (t) {}
          var r = n(61),
            o = n(54),
            a = {
              create: function (t, e) {
                (e = e || {}),
                  (this.options = e),
                  e.indentation
                    ? (this.indentation = Number(e.indentation))
                    : (this.indentation = 2);
                var a = e.ace ? e.ace : i;
                (this.mode = "code" == e.mode ? "code" : "text"),
                  "code" == this.mode && void 0 === a && (this.mode = "text"),
                  (this.theme = e.theme || "ace/theme/jsoneditor"),
                  "ace/theme/jsoneditor" === this.theme && window.ace && n(70);
                var s = this;
                (this.container = t),
                  (this.dom = {}),
                  (this.aceEditor = void 0),
                  (this.textarea = void 0),
                  (this.validateSchema = null),
                  (this._debouncedValidate = o.debounce(
                    this.validate.bind(this),
                    this.DEBOUNCE_INTERVAL
                  )),
                  (this.width = t.clientWidth),
                  (this.height = t.clientHeight),
                  (this.frame = document.createElement("div")),
                  (this.frame.className =
                    "jsoneditor jsoneditor-mode-" + this.options.mode),
                  (this.frame.onclick = function (t) {
                    t.preventDefault();
                  }),
                  (this.frame.onkeydown = function (t) {
                    s._onKeyDown(t);
                  }),
                  (this.menu = document.createElement("div")),
                  (this.menu.className = "jsoneditor-menu"),
                  this.frame.appendChild(this.menu);
                var l = document.createElement("button");
                (l.type = "button"),
                  (l.className = "jsoneditor-format"),
                  (l.title =
                    "Format JSON data, with proper indentation and line feeds (Ctrl+\\)"),
                  this.menu.appendChild(l),
                  (l.onclick = function () {
                    try {
                      s.format(), s._onChange();
                    } catch (t) {
                      s._onError(t);
                    }
                  });
                var c = document.createElement("button");
                if (
                  ((c.type = "button"),
                  (c.className = "jsoneditor-compact"),
                  (c.title =
                    "Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)"),
                  this.menu.appendChild(c),
                  (c.onclick = function () {
                    try {
                      s.compact(), s._onChange();
                    } catch (t) {
                      s._onError(t);
                    }
                  }),
                  this.options &&
                    this.options.modes &&
                    this.options.modes.length &&
                    (this.modeSwitcher = new r(
                      this.menu,
                      this.options.modes,
                      this.options.mode,
                      function (t) {
                        s.setMode(t), s.modeSwitcher.focus();
                      }
                    )),
                  (this.content = document.createElement("div")),
                  (this.content.className = "jsoneditor-outer"),
                  this.frame.appendChild(this.content),
                  this.container.appendChild(this.frame),
                  "code" == this.mode)
                ) {
                  (this.editorDom = document.createElement("div")),
                    (this.editorDom.style.height = "100%"),
                    (this.editorDom.style.width = "100%"),
                    this.content.appendChild(this.editorDom);
                  var d = a.edit(this.editorDom);
                  (d.$blockScrolling = 1 / 0),
                    d.setTheme(this.theme),
                    d.setShowPrintMargin(!1),
                    d.setFontSize(13),
                    d.getSession().setMode("ace/mode/json"),
                    d.getSession().setTabSize(this.indentation),
                    d.getSession().setUseSoftTabs(!0),
                    d.getSession().setUseWrapMode(!0),
                    d.commands.bindKey("Ctrl-L", null),
                    d.commands.bindKey("Command-L", null),
                    (this.aceEditor = d),
                    this.hasOwnProperty("editor") ||
                      Object.defineProperty(this, "editor", {
                        get: function () {
                          return s.aceEditor;
                        },
                        set: function (t) {
                          s.aceEditor = t;
                        },
                      });
                  var u = document.createElement("a");
                  u.appendChild(document.createTextNode("powered by ace")),
                    (u.href = "http://ace.ajax.org"),
                    (u.target = "_blank"),
                    (u.className = "jsoneditor-poweredBy"),
                    (u.onclick = function () {
                      window.open(u.href, u.target);
                    }),
                    this.menu.appendChild(u),
                    d.on("change", this._onChange.bind(this));
                } else {
                  var p = document.createElement("textarea");
                  (p.className = "jsoneditor-text"),
                    (p.spellcheck = !1),
                    this.content.appendChild(p),
                    (this.textarea = p),
                    null === this.textarea.oninput
                      ? (this.textarea.oninput = this._onChange.bind(this))
                      : (this.textarea.onchange = this._onChange.bind(this));
                }
                this.setSchema(this.options.schema);
              },
              _onChange: function () {
                if ((this._debouncedValidate(), this.options.onChange))
                  try {
                    this.options.onChange();
                  } catch (t) {}
              },
              _onKeyDown: function (t) {
                var e = !1;
                220 == (t.which || t.keyCode) &&
                  t.ctrlKey &&
                  (t.shiftKey
                    ? (this.compact(), this._onChange())
                    : (this.format(), this._onChange()),
                  (e = !0)),
                  e && (t.preventDefault(), t.stopPropagation());
              },
              destroy: function () {
                this.aceEditor &&
                  (this.aceEditor.destroy(), (this.aceEditor = null)),
                  this.frame &&
                    this.container &&
                    this.frame.parentNode == this.container &&
                    this.container.removeChild(this.frame),
                  this.modeSwitcher &&
                    (this.modeSwitcher.destroy(), (this.modeSwitcher = null)),
                  (this.textarea = null),
                  (this._debouncedValidate = null);
              },
              compact: function () {
                var t = this.get(),
                  e = JSON.stringify(t);
                this.setText(e);
              },
              format: function () {
                var t = this.get(),
                  e = JSON.stringify(t, null, this.indentation);
                this.setText(e);
              },
              focus: function () {
                this.textarea && this.textarea.focus(),
                  this.aceEditor && this.aceEditor.focus();
              },
              resize: function () {
                this.aceEditor && this.aceEditor.resize(!1);
              },
              set: function (t) {
                this.setText(JSON.stringify(t, null, this.indentation));
              },
              get: function () {
                var t,
                  e = this.getText();
                try {
                  t = o.parse(e);
                } catch (n) {
                  (e = o.sanitize(e)), (t = o.parse(e));
                }
                return t;
              },
              getText: function () {
                return this.textarea
                  ? this.textarea.value
                  : this.aceEditor
                  ? this.aceEditor.getValue()
                  : "";
              },
              setText: function (t) {
                var e;
                if (
                  ((e =
                    !0 === this.options.escapeUnicode
                      ? o.escapeUnicodeChars(t)
                      : t),
                  this.textarea && (this.textarea.value = e),
                  this.aceEditor)
                ) {
                  var n = this.options.onChange;
                  (this.options.onChange = null),
                    this.aceEditor.setValue(e, -1),
                    (this.options.onChange = n);
                }
                this.validate();
              },
              validate: function () {
                this.dom.validationErrors &&
                  (this.dom.validationErrors.parentNode.removeChild(
                    this.dom.validationErrors
                  ),
                  (this.dom.validationErrors = null),
                  (this.content.style.marginBottom = ""),
                  (this.content.style.paddingBottom = ""));
                var t,
                  e = !1,
                  n = [];
                try {
                  (t = this.get()), (e = !0);
                } catch (t) {}
                if (
                  (e &&
                    this.validateSchema &&
                    (this.validateSchema(t) ||
                      (n = this.validateSchema.errors.map(function (t) {
                        return o.improveSchemaError(t);
                      }))),
                  n.length > 0)
                ) {
                  if (n.length > 3) {
                    n = n.slice(0, 3);
                    var i = this.validateSchema.errors.length - 3;
                    n.push("(" + i + " more errors...)");
                  }
                  var r = document.createElement("div");
                  (r.innerHTML =
                    '<table class="jsoneditor-text-errors"><tbody>' +
                    n
                      .map(function (t) {
                        return (
                          '<tr><td><button class="jsoneditor-schema-error"></button></td>' +
                          ("string" == typeof t
                            ? '<td colspan="2"><pre>' + t + "</pre></td>"
                            : "<td>" +
                              t.dataPath +
                              "</td><td>" +
                              t.message +
                              "</td>") +
                          "</tr>"
                        );
                      })
                      .join("") +
                    "</tbody></table>"),
                    (this.dom.validationErrors = r),
                    this.frame.appendChild(r);
                  var a = r.clientHeight;
                  (this.content.style.marginBottom = -a + "px"),
                    (this.content.style.paddingBottom = a + "px");
                }
                this.aceEditor && this.aceEditor.resize(!1);
              },
            };
          t.exports = [
            { mode: "text", mixin: a, data: "text", load: a.format },
            { mode: "code", mixin: a, data: "text", load: a.format },
          ];
        },
        function (t, e, n) {
          var i = n(64);
          n(67), n(69), (t.exports = i);
        },
        function (t, e, n) {
          !(function () {
            var t = (function () {
              return this;
            })();
            t || "undefined" == typeof window || (t = window);
            var e = function (t, n, i) {
              "string" == typeof t
                ? (2 == arguments.length && (i = n),
                  e.modules[t] || ((e.payloads[t] = i), (e.modules[t] = null)))
                : e.original && e.original.apply(this, arguments);
            };
            (e.modules = {}), (e.payloads = {});
            var n,
              i,
              r = function (t, e, n) {
                if ("string" == typeof e) {
                  var i = s(t, e);
                  if (null != i) return n && n(), i;
                } else if (
                  "[object Array]" === Object.prototype.toString.call(e)
                ) {
                  for (var r = [], a = 0, l = e.length; a < l; ++a) {
                    var c = s(t, e[a]);
                    if (null == c && o.original) return;
                    r.push(c);
                  }
                  return (n && n.apply(null, r)) || !0;
                }
              },
              o = function (t, e) {
                var n = r("", t, e);
                return null == n && o.original
                  ? o.original.apply(this, arguments)
                  : n;
              },
              a = function (t, e) {
                if (-1 !== e.indexOf("!")) {
                  var n = e.split("!");
                  return a(t, n[0]) + "!" + a(t, n[1]);
                }
                if ("." == e.charAt(0))
                  for (
                    e = t.split("/").slice(0, -1).join("/") + "/" + e;
                    -1 !== e.indexOf(".") && i != e;

                  ) {
                    var i = e;
                    e = e.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
                  }
                return e;
              },
              s = function (t, n) {
                n = a(t, n);
                var i = e.modules[n];
                if (!i) {
                  if ("function" == typeof (i = e.payloads[n])) {
                    var o = {},
                      s = { id: n, uri: "", exports: o, packaged: !0 };
                    (o =
                      i(
                        function (t, e) {
                          return r(n, t, e);
                        },
                        o,
                        s
                      ) || s.exports),
                      (e.modules[n] = o),
                      delete e.payloads[n];
                  }
                  i = e.modules[n] = o || i;
                }
                return i;
              };
            (i = t),
              (n = "ace") && (t[n] || (t[n] = {}), (i = t[n])),
              (i.define && i.define.packaged) ||
                ((e.original = i.define),
                (i.define = e),
                (i.define.packaged = !0)),
              (i.acequire && i.acequire.packaged) ||
                ((o.original = i.acequire),
                (i.acequire = o),
                (i.acequire.packaged = !0));
          })(),
            ace.define(
              "ace/lib/regexp",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i,
                  r = {
                    exec: RegExp.prototype.exec,
                    test: RegExp.prototype.test,
                    match: String.prototype.match,
                    replace: String.prototype.replace,
                    split: String.prototype.split,
                  },
                  o = void 0 === r.exec.call(/()??/, "")[1],
                  a = ((i = /^/g), r.test.call(i, ""), !i.lastIndex);
                function s(t) {
                  return (
                    (t.global ? "g" : "") +
                    (t.ignoreCase ? "i" : "") +
                    (t.multiline ? "m" : "") +
                    (t.extended ? "x" : "") +
                    (t.sticky ? "y" : "")
                  );
                }
                function l(t, e, n) {
                  if (Array.prototype.indexOf) return t.indexOf(e, n);
                  for (var i = n || 0; i < t.length; i++)
                    if (t[i] === e) return i;
                  return -1;
                }
                (a && o) ||
                  ((RegExp.prototype.exec = function (t) {
                    var e,
                      n,
                      i = r.exec.apply(this, arguments);
                    if ("string" == typeof t && i) {
                      if (
                        (!o &&
                          i.length > 1 &&
                          l(i, "") > -1 &&
                          ((n = RegExp(
                            this.source,
                            r.replace.call(s(this), "g", "")
                          )),
                          r.replace.call(t.slice(i.index), n, function () {
                            for (var t = 1; t < arguments.length - 2; t++)
                              void 0 === arguments[t] && (i[t] = void 0);
                          })),
                        this._xregexp && this._xregexp.captureNames)
                      )
                        for (var c = 1; c < i.length; c++)
                          (e = this._xregexp.captureNames[c - 1]) &&
                            (i[e] = i[c]);
                      !a &&
                        this.global &&
                        !i[0].length &&
                        this.lastIndex > i.index &&
                        this.lastIndex--;
                    }
                    return i;
                  }),
                  a ||
                    (RegExp.prototype.test = function (t) {
                      var e = r.exec.call(this, t);
                      return (
                        e &&
                          this.global &&
                          !e[0].length &&
                          this.lastIndex > e.index &&
                          this.lastIndex--,
                        !!e
                      );
                    }));
              }
            ),
            ace.define(
              "ace/lib/es5-shim",
              ["require", "exports", "module"],
              function (t, e, n) {
                function i() {}
                Function.prototype.bind ||
                  (Function.prototype.bind = function (t) {
                    var e = this;
                    if ("function" != typeof e)
                      throw new TypeError(
                        "Function.prototype.bind called on incompatible " + e
                      );
                    var n = p.call(arguments, 1),
                      r = function () {
                        if (this instanceof r) {
                          var i = e.apply(this, n.concat(p.call(arguments)));
                          return Object(i) === i ? i : this;
                        }
                        return e.apply(t, n.concat(p.call(arguments)));
                      };
                    return (
                      e.prototype &&
                        ((i.prototype = e.prototype),
                        (r.prototype = new i()),
                        (i.prototype = null)),
                      r
                    );
                  });
                var r,
                  o,
                  a,
                  s,
                  l,
                  c = Function.prototype.call,
                  d = Array.prototype,
                  u = Object.prototype,
                  p = d.slice,
                  h = c.bind(u.toString),
                  f = c.bind(u.hasOwnProperty);
                if (
                  ((l = f(u, "__defineGetter__")) &&
                    ((r = c.bind(u.__defineGetter__)),
                    (o = c.bind(u.__defineSetter__)),
                    (a = c.bind(u.__lookupGetter__)),
                    (s = c.bind(u.__lookupSetter__))),
                  2 != [1, 2].splice(0).length)
                )
                  if (
                    (function () {
                      function t(t) {
                        var e = new Array(t + 2);
                        return (e[0] = e[1] = 0), e;
                      }
                      var e,
                        n = [];
                      if (
                        (n.splice.apply(n, t(20)),
                        n.splice.apply(n, t(26)),
                        (e = n.length),
                        n.splice(5, 0, "XXX"),
                        n.length,
                        e + 1 == n.length)
                      )
                        return !0;
                    })()
                  ) {
                    var b = Array.prototype.splice;
                    Array.prototype.splice = function (t, e) {
                      return arguments.length
                        ? b.apply(
                            this,
                            [
                              void 0 === t ? 0 : t,
                              void 0 === e ? this.length - t : e,
                            ].concat(p.call(arguments, 2))
                          )
                        : [];
                    };
                  } else
                    Array.prototype.splice = function (t, e) {
                      var n = this.length;
                      t > 0
                        ? t > n && (t = n)
                        : null == t
                        ? (t = 0)
                        : t < 0 && (t = Math.max(n + t, 0)),
                        t + e < n || (e = n - t);
                      var i = this.slice(t, t + e),
                        r = p.call(arguments, 2),
                        o = r.length;
                      if (t === n) o && this.push.apply(this, r);
                      else {
                        var a = Math.min(e, n - t),
                          s = t + a,
                          l = s + o - a,
                          c = n - s,
                          d = n - a;
                        if (l < s)
                          for (var u = 0; u < c; ++u) this[l + u] = this[s + u];
                        else if (l > s)
                          for (u = c; u--; ) this[l + u] = this[s + u];
                        if (o && t === d)
                          (this.length = d), this.push.apply(this, r);
                        else
                          for (this.length = d + o, u = 0; u < o; ++u)
                            this[t + u] = r[u];
                      }
                      return i;
                    };
                Array.isArray ||
                  (Array.isArray = function (t) {
                    return "[object Array]" == h(t);
                  });
                var m,
                  g,
                  v = Object("a"),
                  _ = "a" != v[0] || !(0 in v);
                function y(t) {
                  try {
                    return (
                      Object.defineProperty(t, "sentinel", {}), "sentinel" in t
                    );
                  } catch (t) {}
                }
                if (
                  (Array.prototype.forEach ||
                    (Array.prototype.forEach = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = arguments[1],
                        r = -1,
                        o = n.length >>> 0;
                      if ("[object Function]" != h(t)) throw new TypeError();
                      for (; ++r < o; ) r in n && t.call(i, n[r], r, e);
                    }),
                  Array.prototype.map ||
                    (Array.prototype.map = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = n.length >>> 0,
                        r = Array(i),
                        o = arguments[1];
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      for (var a = 0; a < i; a++)
                        a in n && (r[a] = t.call(o, n[a], a, e));
                      return r;
                    }),
                  Array.prototype.filter ||
                    (Array.prototype.filter = function (t) {
                      var e,
                        n = L(this),
                        i =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : n,
                        r = i.length >>> 0,
                        o = [],
                        a = arguments[1];
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      for (var s = 0; s < r; s++)
                        s in i && ((e = i[s]), t.call(a, e, s, n) && o.push(e));
                      return o;
                    }),
                  Array.prototype.every ||
                    (Array.prototype.every = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = n.length >>> 0,
                        r = arguments[1];
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      for (var o = 0; o < i; o++)
                        if (o in n && !t.call(r, n[o], o, e)) return !1;
                      return !0;
                    }),
                  Array.prototype.some ||
                    (Array.prototype.some = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = n.length >>> 0,
                        r = arguments[1];
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      for (var o = 0; o < i; o++)
                        if (o in n && t.call(r, n[o], o, e)) return !0;
                      return !1;
                    }),
                  Array.prototype.reduce ||
                    (Array.prototype.reduce = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = n.length >>> 0;
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      if (!i && 1 == arguments.length)
                        throw new TypeError(
                          "reduce of empty array with no initial value"
                        );
                      var r,
                        o = 0;
                      if (arguments.length >= 2) r = arguments[1];
                      else
                        for (;;) {
                          if (o in n) {
                            r = n[o++];
                            break;
                          }
                          if (++o >= i)
                            throw new TypeError(
                              "reduce of empty array with no initial value"
                            );
                        }
                      for (; o < i; o++)
                        o in n && (r = t.call(void 0, r, n[o], o, e));
                      return r;
                    }),
                  Array.prototype.reduceRight ||
                    (Array.prototype.reduceRight = function (t) {
                      var e = L(this),
                        n =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : e,
                        i = n.length >>> 0;
                      if ("[object Function]" != h(t))
                        throw new TypeError(t + " is not a function");
                      if (!i && 1 == arguments.length)
                        throw new TypeError(
                          "reduceRight of empty array with no initial value"
                        );
                      var r,
                        o = i - 1;
                      if (arguments.length >= 2) r = arguments[1];
                      else
                        for (;;) {
                          if (o in n) {
                            r = n[o--];
                            break;
                          }
                          if (--o < 0)
                            throw new TypeError(
                              "reduceRight of empty array with no initial value"
                            );
                        }
                      do {
                        o in this && (r = t.call(void 0, r, n[o], o, e));
                      } while (o--);
                      return r;
                    }),
                  (Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2)) ||
                    (Array.prototype.indexOf = function (t) {
                      var e =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : L(this),
                        n = e.length >>> 0;
                      if (!n) return -1;
                      var i = 0;
                      for (
                        arguments.length > 1 && (i = D(arguments[1])),
                          i = i >= 0 ? i : Math.max(0, n + i);
                        i < n;
                        i++
                      )
                        if (i in e && e[i] === t) return i;
                      return -1;
                    }),
                  (Array.prototype.lastIndexOf &&
                    -1 == [0, 1].lastIndexOf(0, -3)) ||
                    (Array.prototype.lastIndexOf = function (t) {
                      var e =
                          _ && "[object String]" == h(this)
                            ? this.split("")
                            : L(this),
                        n = e.length >>> 0;
                      if (!n) return -1;
                      var i = n - 1;
                      for (
                        arguments.length > 1 &&
                          (i = Math.min(i, D(arguments[1]))),
                          i = i >= 0 ? i : n - Math.abs(i);
                        i >= 0;
                        i--
                      )
                        if (i in e && t === e[i]) return i;
                      return -1;
                    }),
                  Object.getPrototypeOf ||
                    (Object.getPrototypeOf = function (t) {
                      return (
                        t.__proto__ ||
                        (t.constructor ? t.constructor.prototype : u)
                      );
                    }),
                  Object.getOwnPropertyDescriptor ||
                    (Object.getOwnPropertyDescriptor = function (t, e) {
                      if (
                        ("object" != typeof t && "function" != typeof t) ||
                        null === t
                      )
                        throw new TypeError(
                          "Object.getOwnPropertyDescriptor called on a non-object: " +
                            t
                        );
                      if (f(t, e)) {
                        var n;
                        if (((n = { enumerable: !0, configurable: !0 }), l)) {
                          var i = t.__proto__;
                          t.__proto__ = u;
                          var r = a(t, e),
                            o = s(t, e);
                          if (((t.__proto__ = i), r || o))
                            return r && (n.get = r), o && (n.set = o), n;
                        }
                        return (n.value = t[e]), n;
                      }
                    }),
                  Object.getOwnPropertyNames ||
                    (Object.getOwnPropertyNames = function (t) {
                      return Object.keys(t);
                    }),
                  Object.create ||
                    ((m =
                      null === Object.prototype.__proto__
                        ? function () {
                            return { __proto__: null };
                          }
                        : function () {
                            var t = {};
                            for (var e in t) t[e] = null;
                            return (
                              (t.constructor =
                                t.hasOwnProperty =
                                t.propertyIsEnumerable =
                                t.isPrototypeOf =
                                t.toLocaleString =
                                t.toString =
                                t.valueOf =
                                t.__proto__ =
                                  null),
                              t
                            );
                          }),
                    (Object.create = function (t, e) {
                      var n;
                      if (null === t) n = m();
                      else {
                        if ("object" != typeof t)
                          throw new TypeError(
                            "typeof prototype[" + typeof t + "] != 'object'"
                          );
                        var i = function () {};
                        (i.prototype = t), ((n = new i()).__proto__ = t);
                      }
                      return void 0 !== e && Object.defineProperties(n, e), n;
                    })),
                  Object.defineProperty)
                ) {
                  var M = y({}),
                    O =
                      "undefined" == typeof document ||
                      y(document.createElement("div"));
                  if (!M || !O) var w = Object.defineProperty;
                }
                (Object.defineProperty && !w) ||
                  (Object.defineProperty = function (t, e, n) {
                    if (
                      ("object" != typeof t && "function" != typeof t) ||
                      null === t
                    )
                      throw new TypeError(
                        "Object.defineProperty called on non-object: " + t
                      );
                    if (
                      ("object" != typeof n && "function" != typeof n) ||
                      null === n
                    )
                      throw new TypeError(
                        "Property description must be an object: " + n
                      );
                    if (w)
                      try {
                        return w.call(Object, t, e, n);
                      } catch (t) {}
                    if (f(n, "value"))
                      if (l && (a(t, e) || s(t, e))) {
                        var i = t.__proto__;
                        (t.__proto__ = u),
                          delete t[e],
                          (t[e] = n.value),
                          (t.__proto__ = i);
                      } else t[e] = n.value;
                    else {
                      if (!l)
                        throw new TypeError(
                          "getters & setters can not be defined on this javascript engine"
                        );
                      f(n, "get") && r(t, e, n.get),
                        f(n, "set") && o(t, e, n.set);
                    }
                    return t;
                  }),
                  Object.defineProperties ||
                    (Object.defineProperties = function (t, e) {
                      for (var n in e)
                        f(e, n) && Object.defineProperty(t, n, e[n]);
                      return t;
                    }),
                  Object.seal ||
                    (Object.seal = function (t) {
                      return t;
                    }),
                  Object.freeze ||
                    (Object.freeze = function (t) {
                      return t;
                    });
                try {
                  Object.freeze(function () {});
                } catch (t) {
                  Object.freeze =
                    ((g = Object.freeze),
                    function (t) {
                      return "function" == typeof t ? t : g(t);
                    });
                }
                if (
                  (Object.preventExtensions ||
                    (Object.preventExtensions = function (t) {
                      return t;
                    }),
                  Object.isSealed ||
                    (Object.isSealed = function (t) {
                      return !1;
                    }),
                  Object.isFrozen ||
                    (Object.isFrozen = function (t) {
                      return !1;
                    }),
                  Object.isExtensible ||
                    (Object.isExtensible = function (t) {
                      if (Object(t) === t) throw new TypeError();
                      for (var e = ""; f(t, e); ) e += "?";
                      t[e] = !0;
                      var n = f(t, e);
                      return delete t[e], n;
                    }),
                  !Object.keys)
                ) {
                  var A = !0,
                    x = [
                      "toString",
                      "toLocaleString",
                      "valueOf",
                      "hasOwnProperty",
                      "isPrototypeOf",
                      "propertyIsEnumerable",
                      "constructor",
                    ],
                    z = x.length;
                  for (var C in { toString: null }) A = !1;
                  Object.keys = function (t) {
                    if (
                      ("object" != typeof t && "function" != typeof t) ||
                      null === t
                    )
                      throw new TypeError("Object.keys called on a non-object");
                    var e = [];
                    for (var n in t) f(t, n) && e.push(n);
                    if (A)
                      for (var i = 0, r = z; i < r; i++) {
                        var o = x[i];
                        f(t, o) && e.push(o);
                      }
                    return e;
                  };
                }
                Date.now ||
                  (Date.now = function () {
                    return new Date().getTime();
                  });
                var k = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
                if (!String.prototype.trim || k.trim()) {
                  k = "[" + k + "]";
                  var S = new RegExp("^" + k + k + "*"),
                    T = new RegExp(k + k + "*$");
                  String.prototype.trim = function () {
                    return String(this).replace(S, "").replace(T, "");
                  };
                }
                function D(t) {
                  return (
                    (t = +t) != t
                      ? (t = 0)
                      : 0 !== t &&
                        t !== 1 / 0 &&
                        t !== -1 / 0 &&
                        (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
                    t
                  );
                }
                var L = function (t) {
                  if (null == t)
                    throw new TypeError("can't convert " + t + " to object");
                  return Object(t);
                };
              }
            ),
            ace.define(
              "ace/lib/fixoldbrowsers",
              [
                "require",
                "exports",
                "module",
                "ace/lib/regexp",
                "ace/lib/es5-shim",
              ],
              function (t, e, n) {
                "use strict";
                t("./regexp"), t("./es5-shim");
              }
            ),
            ace.define(
              "ace/lib/dom",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                (e.getDocumentHead = function (t) {
                  return (
                    t || (t = document),
                    t.head ||
                      t.getElementsByTagName("head")[0] ||
                      t.documentElement
                  );
                }),
                  (e.createElement = function (t, e) {
                    return document.createElementNS
                      ? document.createElementNS(
                          e || "http://www.w3.org/1999/xhtml",
                          t
                        )
                      : document.createElement(t);
                  }),
                  (e.hasCssClass = function (t, e) {
                    return -1 !== (t.className || "").split(/\s+/g).indexOf(e);
                  }),
                  (e.addCssClass = function (t, n) {
                    e.hasCssClass(t, n) || (t.className += " " + n);
                  }),
                  (e.removeCssClass = function (t, e) {
                    for (var n = t.className.split(/\s+/g); ; ) {
                      var i = n.indexOf(e);
                      if (-1 == i) break;
                      n.splice(i, 1);
                    }
                    t.className = n.join(" ");
                  }),
                  (e.toggleCssClass = function (t, e) {
                    for (var n = t.className.split(/\s+/g), i = !0; ; ) {
                      var r = n.indexOf(e);
                      if (-1 == r) break;
                      (i = !1), n.splice(r, 1);
                    }
                    return i && n.push(e), (t.className = n.join(" ")), i;
                  }),
                  (e.setCssClass = function (t, n, i) {
                    i ? e.addCssClass(t, n) : e.removeCssClass(t, n);
                  }),
                  (e.hasCssString = function (t, e) {
                    var n,
                      i = 0;
                    if (
                      (e = e || document).createStyleSheet &&
                      (n = e.styleSheets)
                    ) {
                      for (; i < n.length; )
                        if (n[i++].owningElement.id === t) return !0;
                    } else if ((n = e.getElementsByTagName("style")))
                      for (; i < n.length; ) if (n[i++].id === t) return !0;
                    return !1;
                  }),
                  (e.importCssString = function (t, n, i) {
                    if (((i = i || document), n && e.hasCssString(n, i)))
                      return null;
                    var r;
                    n && (t += "\n/*# sourceURL=ace/css/" + n + " */"),
                      i.createStyleSheet
                        ? (((r = i.createStyleSheet()).cssText = t),
                          n && (r.owningElement.id = n))
                        : ((r = e.createElement("style")).appendChild(
                            i.createTextNode(t)
                          ),
                          n && (r.id = n),
                          e.getDocumentHead(i).appendChild(r));
                  }),
                  (e.importCssStylsheet = function (t, n) {
                    if (n.createStyleSheet) n.createStyleSheet(t);
                    else {
                      var i = e.createElement("link");
                      (i.rel = "stylesheet"),
                        (i.href = t),
                        e.getDocumentHead(n).appendChild(i);
                    }
                  }),
                  (e.getInnerWidth = function (t) {
                    return (
                      parseInt(e.computedStyle(t, "paddingLeft"), 10) +
                      parseInt(e.computedStyle(t, "paddingRight"), 10) +
                      t.clientWidth
                    );
                  }),
                  (e.getInnerHeight = function (t) {
                    return (
                      parseInt(e.computedStyle(t, "paddingTop"), 10) +
                      parseInt(e.computedStyle(t, "paddingBottom"), 10) +
                      t.clientHeight
                    );
                  }),
                  (e.scrollbarWidth = function (t) {
                    var n = e.createElement("ace_inner");
                    (n.style.width = "100%"),
                      (n.style.minWidth = "0px"),
                      (n.style.height = "200px"),
                      (n.style.display = "block");
                    var i = e.createElement("ace_outer"),
                      r = i.style;
                    (r.position = "absolute"),
                      (r.left = "-10000px"),
                      (r.overflow = "hidden"),
                      (r.width = "200px"),
                      (r.minWidth = "0px"),
                      (r.height = "150px"),
                      (r.display = "block"),
                      i.appendChild(n);
                    var o = t.documentElement;
                    o.appendChild(i);
                    var a = n.offsetWidth;
                    r.overflow = "scroll";
                    var s = n.offsetWidth;
                    return (
                      a == s && (s = i.clientWidth), o.removeChild(i), a - s
                    );
                  }),
                  "undefined" != typeof document
                    ? (void 0 !== window.pageYOffset
                        ? ((e.getPageScrollTop = function () {
                            return window.pageYOffset;
                          }),
                          (e.getPageScrollLeft = function () {
                            return window.pageXOffset;
                          }))
                        : ((e.getPageScrollTop = function () {
                            return document.body.scrollTop;
                          }),
                          (e.getPageScrollLeft = function () {
                            return document.body.scrollLeft;
                          })),
                      window.getComputedStyle
                        ? (e.computedStyle = function (t, e) {
                            return e
                              ? (window.getComputedStyle(t, "") || {})[e] || ""
                              : window.getComputedStyle(t, "") || {};
                          })
                        : (e.computedStyle = function (t, e) {
                            return e ? t.currentStyle[e] : t.currentStyle;
                          }),
                      (e.setInnerHtml = function (t, e) {
                        var n = t.cloneNode(!1);
                        return (
                          (n.innerHTML = e), t.parentNode.replaceChild(n, t), n
                        );
                      }),
                      "textContent" in document.documentElement
                        ? ((e.setInnerText = function (t, e) {
                            t.textContent = e;
                          }),
                          (e.getInnerText = function (t) {
                            return t.textContent;
                          }))
                        : ((e.setInnerText = function (t, e) {
                            t.innerText = e;
                          }),
                          (e.getInnerText = function (t) {
                            return t.innerText;
                          })),
                      (e.getParentWindow = function (t) {
                        return t.defaultView || t.parentWindow;
                      }))
                    : (e.importCssString = function () {});
              }
            ),
            ace.define(
              "ace/lib/oop",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                (e.inherits = function (t, e) {
                  (t.super_ = e),
                    (t.prototype = Object.create(e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    }));
                }),
                  (e.mixin = function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                  }),
                  (e.implement = function (t, n) {
                    e.mixin(t, n);
                  });
              }
            ),
            ace.define(
              "ace/lib/keys",
              [
                "require",
                "exports",
                "module",
                "ace/lib/fixoldbrowsers",
                "ace/lib/oop",
              ],
              function (t, e, n) {
                "use strict";
                t("./fixoldbrowsers");
                var i = t("./oop"),
                  r = (function () {
                    var t,
                      e,
                      n = {
                        MODIFIER_KEYS: {
                          16: "Shift",
                          17: "Ctrl",
                          18: "Alt",
                          224: "Meta",
                        },
                        KEY_MODS: {
                          ctrl: 1,
                          alt: 2,
                          option: 2,
                          shift: 4,
                          super: 8,
                          meta: 8,
                          command: 8,
                          cmd: 8,
                        },
                        FUNCTION_KEYS: {
                          8: "Backspace",
                          9: "Tab",
                          13: "Return",
                          19: "Pause",
                          27: "Esc",
                          32: "Space",
                          33: "PageUp",
                          34: "PageDown",
                          35: "End",
                          36: "Home",
                          37: "Left",
                          38: "Up",
                          39: "Right",
                          40: "Down",
                          44: "Print",
                          45: "Insert",
                          46: "Delete",
                          96: "Numpad0",
                          97: "Numpad1",
                          98: "Numpad2",
                          99: "Numpad3",
                          100: "Numpad4",
                          101: "Numpad5",
                          102: "Numpad6",
                          103: "Numpad7",
                          104: "Numpad8",
                          105: "Numpad9",
                          "-13": "NumpadEnter",
                          112: "F1",
                          113: "F2",
                          114: "F3",
                          115: "F4",
                          116: "F5",
                          117: "F6",
                          118: "F7",
                          119: "F8",
                          120: "F9",
                          121: "F10",
                          122: "F11",
                          123: "F12",
                          144: "Numlock",
                          145: "Scrolllock",
                        },
                        PRINTABLE_KEYS: {
                          32: " ",
                          48: "0",
                          49: "1",
                          50: "2",
                          51: "3",
                          52: "4",
                          53: "5",
                          54: "6",
                          55: "7",
                          56: "8",
                          57: "9",
                          59: ";",
                          61: "=",
                          65: "a",
                          66: "b",
                          67: "c",
                          68: "d",
                          69: "e",
                          70: "f",
                          71: "g",
                          72: "h",
                          73: "i",
                          74: "j",
                          75: "k",
                          76: "l",
                          77: "m",
                          78: "n",
                          79: "o",
                          80: "p",
                          81: "q",
                          82: "r",
                          83: "s",
                          84: "t",
                          85: "u",
                          86: "v",
                          87: "w",
                          88: "x",
                          89: "y",
                          90: "z",
                          107: "+",
                          109: "-",
                          110: ".",
                          186: ";",
                          187: "=",
                          188: ",",
                          189: "-",
                          190: ".",
                          191: "/",
                          192: "`",
                          219: "[",
                          220: "\\",
                          221: "]",
                          222: "'",
                          111: "/",
                          106: "*",
                        },
                      };
                    for (e in n.FUNCTION_KEYS)
                      (t = n.FUNCTION_KEYS[e].toLowerCase()),
                        (n[t] = parseInt(e, 10));
                    for (e in n.PRINTABLE_KEYS)
                      (t = n.PRINTABLE_KEYS[e].toLowerCase()),
                        (n[t] = parseInt(e, 10));
                    return (
                      i.mixin(n, n.MODIFIER_KEYS),
                      i.mixin(n, n.PRINTABLE_KEYS),
                      i.mixin(n, n.FUNCTION_KEYS),
                      (n.enter = n.return),
                      (n.escape = n.esc),
                      (n.del = n.delete),
                      (n[173] = "-"),
                      (function () {
                        for (
                          var t = ["cmd", "ctrl", "alt", "shift"],
                            e = Math.pow(2, t.length);
                          e--;

                        )
                          n.KEY_MODS[e] =
                            t
                              .filter(function (t) {
                                return e & n.KEY_MODS[t];
                              })
                              .join("-") + "-";
                      })(),
                      (n.KEY_MODS[0] = ""),
                      (n.KEY_MODS[-1] = "input-"),
                      n
                    );
                  })();
                i.mixin(e, r),
                  (e.keyCodeToString = function (t) {
                    var e = r[t];
                    return (
                      "string" != typeof e && (e = String.fromCharCode(t)),
                      e.toLowerCase()
                    );
                  });
              }
            ),
            ace.define(
              "ace/lib/useragent",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                if (
                  ((e.OS = { LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS" }),
                  (e.getOS = function () {
                    return e.isMac
                      ? e.OS.MAC
                      : e.isLinux
                      ? e.OS.LINUX
                      : e.OS.WINDOWS;
                  }),
                  "object" == typeof navigator)
                ) {
                  var i = (navigator.platform.match(/mac|win|linux/i) || [
                      "other",
                    ])[0].toLowerCase(),
                    r = navigator.userAgent;
                  (e.isWin = "win" == i),
                    (e.isMac = "mac" == i),
                    (e.isLinux = "linux" == i),
                    (e.isIE =
                      "Microsoft Internet Explorer" == navigator.appName ||
                      navigator.appName.indexOf("MSAppHost") >= 0
                        ? parseFloat(
                            (r.match(
                              /(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
                            ) || [])[1]
                          )
                        : parseFloat(
                            (r.match(
                              /(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
                            ) || [])[1]
                          )),
                    (e.isOldIE = e.isIE && e.isIE < 9),
                    (e.isGecko = e.isMozilla =
                      (window.Controllers || window.controllers) &&
                      "Gecko" === window.navigator.product),
                    (e.isOldGecko =
                      e.isGecko &&
                      parseInt((r.match(/rv\:(\d+)/) || [])[1], 10) < 4),
                    (e.isOpera =
                      window.opera &&
                      "[object Opera]" ==
                        Object.prototype.toString.call(window.opera)),
                    (e.isWebKit = parseFloat(r.split("WebKit/")[1]) || void 0),
                    (e.isChrome = parseFloat(r.split(" Chrome/")[1]) || void 0),
                    (e.isAIR = r.indexOf("AdobeAIR") >= 0),
                    (e.isIPad = r.indexOf("iPad") >= 0),
                    (e.isTouchPad = r.indexOf("TouchPad") >= 0),
                    (e.isChromeOS = r.indexOf(" CrOS ") >= 0);
                }
              }
            ),
            ace.define(
              "ace/lib/event",
              [
                "require",
                "exports",
                "module",
                "ace/lib/keys",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./keys"),
                  r = t("./useragent"),
                  o = null,
                  a = 0;
                (e.addListener = function (t, e, n) {
                  if (t.addEventListener) return t.addEventListener(e, n, !1);
                  if (t.attachEvent) {
                    var i = function () {
                      n.call(t, window.event);
                    };
                    (n._wrapper = i), t.attachEvent("on" + e, i);
                  }
                }),
                  (e.removeListener = function (t, e, n) {
                    if (t.removeEventListener)
                      return t.removeEventListener(e, n, !1);
                    t.detachEvent && t.detachEvent("on" + e, n._wrapper || n);
                  }),
                  (e.stopEvent = function (t) {
                    return e.stopPropagation(t), e.preventDefault(t), !1;
                  }),
                  (e.stopPropagation = function (t) {
                    t.stopPropagation
                      ? t.stopPropagation()
                      : (t.cancelBubble = !0);
                  }),
                  (e.preventDefault = function (t) {
                    t.preventDefault
                      ? t.preventDefault()
                      : (t.returnValue = !1);
                  }),
                  (e.getButton = function (t) {
                    return "dblclick" == t.type
                      ? 0
                      : "contextmenu" == t.type ||
                        (r.isMac && t.ctrlKey && !t.altKey && !t.shiftKey)
                      ? 2
                      : t.preventDefault
                      ? t.button
                      : { 1: 0, 2: 2, 4: 1 }[t.button];
                  }),
                  (e.capture = function (t, n, i) {
                    function r(t) {
                      n && n(t),
                        i && i(t),
                        e.removeListener(document, "mousemove", n, !0),
                        e.removeListener(document, "mouseup", r, !0),
                        e.removeListener(document, "dragstart", r, !0);
                    }
                    return (
                      e.addListener(document, "mousemove", n, !0),
                      e.addListener(document, "mouseup", r, !0),
                      e.addListener(document, "dragstart", r, !0),
                      r
                    );
                  }),
                  (e.addTouchMoveListener = function (t, n) {
                    var i, r;
                    "ontouchmove" in t &&
                      (e.addListener(t, "touchstart", function (t) {
                        var e = t.changedTouches[0];
                        (i = e.clientX), (r = e.clientY);
                      }),
                      e.addListener(t, "touchmove", function (t) {
                        var e = t.changedTouches[0];
                        (t.wheelX = -(e.clientX - i) / 1),
                          (t.wheelY = -(e.clientY - r) / 1),
                          (i = e.clientX),
                          (r = e.clientY),
                          n(t);
                      }));
                  }),
                  (e.addMouseWheelListener = function (t, n) {
                    "onmousewheel" in t
                      ? e.addListener(t, "mousewheel", function (t) {
                          void 0 !== t.wheelDeltaX
                            ? ((t.wheelX = -t.wheelDeltaX / 8),
                              (t.wheelY = -t.wheelDeltaY / 8))
                            : ((t.wheelX = 0), (t.wheelY = -t.wheelDelta / 8)),
                            n(t);
                        })
                      : "onwheel" in t
                      ? e.addListener(t, "wheel", function (t) {
                          switch (t.deltaMode) {
                            case t.DOM_DELTA_PIXEL:
                              (t.wheelX = 0.35 * t.deltaX || 0),
                                (t.wheelY = 0.35 * t.deltaY || 0);
                              break;
                            case t.DOM_DELTA_LINE:
                            case t.DOM_DELTA_PAGE:
                              (t.wheelX = 5 * (t.deltaX || 0)),
                                (t.wheelY = 5 * (t.deltaY || 0));
                          }
                          n(t);
                        })
                      : e.addListener(t, "DOMMouseScroll", function (t) {
                          t.axis && t.axis == t.HORIZONTAL_AXIS
                            ? ((t.wheelX = 5 * (t.detail || 0)), (t.wheelY = 0))
                            : ((t.wheelX = 0),
                              (t.wheelY = 5 * (t.detail || 0))),
                            n(t);
                        });
                  }),
                  (e.addMultiMouseDownListener = function (t, n, i, o) {
                    var a,
                      s,
                      l,
                      c = 0,
                      d = { 2: "dblclick", 3: "tripleclick", 4: "quadclick" };
                    function u(t) {
                      if (
                        (0 !== e.getButton(t)
                          ? (c = 0)
                          : t.detail > 1
                          ? ++c > 4 && (c = 1)
                          : (c = 1),
                        r.isIE)
                      ) {
                        var u =
                          Math.abs(t.clientX - a) > 5 ||
                          Math.abs(t.clientY - s) > 5;
                        (l && !u) || (c = 1),
                          l && clearTimeout(l),
                          (l = setTimeout(function () {
                            l = null;
                          }, n[c - 1] || 600)),
                          1 == c && ((a = t.clientX), (s = t.clientY));
                      }
                      if (((t._clicks = c), i[o]("mousedown", t), c > 4)) c = 0;
                      else if (c > 1) return i[o](d[c], t);
                    }
                    function p(t) {
                      (c = 2),
                        l && clearTimeout(l),
                        (l = setTimeout(function () {
                          l = null;
                        }, n[c - 1] || 600)),
                        i[o]("mousedown", t),
                        i[o](d[c], t);
                    }
                    Array.isArray(t) || (t = [t]),
                      t.forEach(function (t) {
                        e.addListener(t, "mousedown", u),
                          r.isOldIE && e.addListener(t, "dblclick", p);
                      });
                  });
                var s =
                  r.isMac && r.isOpera && !("KeyboardEvent" in window)
                    ? function (t) {
                        return (
                          0 |
                          (t.metaKey ? 1 : 0) |
                          (t.altKey ? 2 : 0) |
                          (t.shiftKey ? 4 : 0) |
                          (t.ctrlKey ? 8 : 0)
                        );
                      }
                    : function (t) {
                        return (
                          0 |
                          (t.ctrlKey ? 1 : 0) |
                          (t.altKey ? 2 : 0) |
                          (t.shiftKey ? 4 : 0) |
                          (t.metaKey ? 8 : 0)
                        );
                      };
                function l(t, e, n) {
                  var l = s(e);
                  if (!r.isMac && o) {
                    if ((o.OSKey && (l |= 8), o.altGr)) {
                      if (3 == (3 & l)) return;
                      o.altGr = 0;
                    }
                    if (18 === n || 17 === n) {
                      var c = "location" in e ? e.location : e.keyLocation;
                      17 === n && 1 === c
                        ? 1 == o[n] && (a = e.timeStamp)
                        : 18 === n &&
                          3 === l &&
                          2 === c &&
                          e.timeStamp - a < 50 &&
                          (o.altGr = !0);
                    }
                  }
                  if (
                    (n in i.MODIFIER_KEYS && (n = -1),
                    8 & l && n >= 91 && n <= 93 && (n = -1),
                    l ||
                      13 !== n ||
                      3 !==
                        (c = "location" in e ? e.location : e.keyLocation) ||
                      (t(e, l, -n), !e.defaultPrevented))
                  ) {
                    if (r.isChromeOS && 8 & l) {
                      if ((t(e, l, n), e.defaultPrevented)) return;
                      l &= -9;
                    }
                    return (
                      !!(l || n in i.FUNCTION_KEYS || n in i.PRINTABLE_KEYS) &&
                      t(e, l, n)
                    );
                  }
                }
                function c() {
                  ((o = Object.create(null)).count = 0), (o.lastT = 0);
                }
                (e.getModifierString = function (t) {
                  return i.KEY_MODS[s(t)];
                }),
                  (e.addCommandKeyListener = function (t, n) {
                    var i = e.addListener;
                    if (
                      r.isOldGecko ||
                      (r.isOpera && !("KeyboardEvent" in window))
                    ) {
                      var a = null;
                      i(t, "keydown", function (t) {
                        a = t.keyCode;
                      }),
                        i(t, "keypress", function (t) {
                          return l(n, t, a);
                        });
                    } else {
                      var s = null;
                      i(t, "keydown", function (t) {
                        var e = t.keyCode;
                        (o[e] = (o[e] || 0) + 1),
                          91 == e || 92 == e
                            ? (o.OSKey = !0)
                            : o.OSKey &&
                              t.timeStamp - o.lastT > 200 &&
                              1 == o.count &&
                              c(),
                          1 == o[e] && o.count++,
                          (o.lastT = t.timeStamp);
                        var i = l(n, t, e);
                        return (s = t.defaultPrevented), i;
                      }),
                        i(t, "keypress", function (t) {
                          s &&
                            (t.ctrlKey ||
                              t.altKey ||
                              t.shiftKey ||
                              t.metaKey) &&
                            (e.stopEvent(t), (s = null));
                        }),
                        i(t, "keyup", function (t) {
                          var e = t.keyCode;
                          o[e] ? (o.count = Math.max(o.count - 1, 0)) : c(),
                            (91 != e && 92 != e) || (o.OSKey = !1),
                            (o[e] = null);
                        }),
                        o || (c(), i(window, "focus", c));
                    }
                  }),
                  "object" == typeof window &&
                    window.postMessage &&
                    !r.isOldIE &&
                    (e.nextTick = function (t, n) {
                      (n = n || window),
                        e.addListener(n, "message", function i(r) {
                          "zero-timeout-message-1" == r.data &&
                            (e.stopPropagation(r),
                            e.removeListener(n, "message", i),
                            t());
                        }),
                        n.postMessage("zero-timeout-message-1", "*");
                    }),
                  (e.nextFrame =
                    "object" == typeof window &&
                    (window.requestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.msRequestAnimationFrame ||
                      window.oRequestAnimationFrame)),
                  e.nextFrame
                    ? (e.nextFrame = e.nextFrame.bind(window))
                    : (e.nextFrame = function (t) {
                        setTimeout(t, 17);
                      });
              }
            ),
            ace.define(
              "ace/lib/lang",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                (e.last = function (t) {
                  return t[t.length - 1];
                }),
                  (e.stringReverse = function (t) {
                    return t.split("").reverse().join("");
                  }),
                  (e.stringRepeat = function (t, e) {
                    for (var n = ""; e > 0; )
                      1 & e && (n += t), (e >>= 1) && (t += t);
                    return n;
                  });
                var i = /^\s\s*/,
                  r = /\s\s*$/;
                (e.stringTrimLeft = function (t) {
                  return t.replace(i, "");
                }),
                  (e.stringTrimRight = function (t) {
                    return t.replace(r, "");
                  }),
                  (e.copyObject = function (t) {
                    var e = {};
                    for (var n in t) e[n] = t[n];
                    return e;
                  }),
                  (e.copyArray = function (t) {
                    for (var e = [], n = 0, i = t.length; n < i; n++)
                      t[n] && "object" == typeof t[n]
                        ? (e[n] = this.copyObject(t[n]))
                        : (e[n] = t[n]);
                    return e;
                  }),
                  (e.deepCopy = function t(e) {
                    if ("object" != typeof e || !e) return e;
                    var n;
                    if (Array.isArray(e)) {
                      n = [];
                      for (var i = 0; i < e.length; i++) n[i] = t(e[i]);
                      return n;
                    }
                    var r = e.constructor;
                    if (r === RegExp) return e;
                    for (var i in ((n = r()), e)) n[i] = t(e[i]);
                    return n;
                  }),
                  (e.arrayToMap = function (t) {
                    for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = 1;
                    return e;
                  }),
                  (e.createMap = function (t) {
                    var e = Object.create(null);
                    for (var n in t) e[n] = t[n];
                    return e;
                  }),
                  (e.arrayRemove = function (t, e) {
                    for (var n = 0; n <= t.length; n++)
                      e === t[n] && t.splice(n, 1);
                  }),
                  (e.escapeRegExp = function (t) {
                    return t.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
                  }),
                  (e.escapeHTML = function (t) {
                    return t
                      .replace(/&/g, "&#38;")
                      .replace(/"/g, "&#34;")
                      .replace(/'/g, "&#39;")
                      .replace(/</g, "&#60;");
                  }),
                  (e.getMatchOffsets = function (t, e) {
                    var n = [];
                    return (
                      t.replace(e, function (t) {
                        n.push({
                          offset: arguments[arguments.length - 2],
                          length: t.length,
                        });
                      }),
                      n
                    );
                  }),
                  (e.deferredCall = function (t) {
                    var e = null,
                      n = function () {
                        (e = null), t();
                      },
                      i = function (t) {
                        return i.cancel(), (e = setTimeout(n, t || 0)), i;
                      };
                    return (
                      (i.schedule = i),
                      (i.call = function () {
                        return this.cancel(), t(), i;
                      }),
                      (i.cancel = function () {
                        return clearTimeout(e), (e = null), i;
                      }),
                      (i.isPending = function () {
                        return e;
                      }),
                      i
                    );
                  }),
                  (e.delayedCall = function (t, e) {
                    var n = null,
                      i = function () {
                        (n = null), t();
                      },
                      r = function (t) {
                        null == n && (n = setTimeout(i, t || e));
                      };
                    return (
                      (r.delay = function (t) {
                        n && clearTimeout(n), (n = setTimeout(i, t || e));
                      }),
                      (r.schedule = r),
                      (r.call = function () {
                        this.cancel(), t();
                      }),
                      (r.cancel = function () {
                        n && clearTimeout(n), (n = null);
                      }),
                      (r.isPending = function () {
                        return n;
                      }),
                      r
                    );
                  });
              }
            ),
            ace.define(
              "ace/keyboard/textinput",
              [
                "require",
                "exports",
                "module",
                "ace/lib/event",
                "ace/lib/useragent",
                "ace/lib/dom",
                "ace/lib/lang",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/event"),
                  r = t("../lib/useragent"),
                  o = t("../lib/dom"),
                  a = t("../lib/lang"),
                  s = r.isChrome < 18,
                  l = r.isIE;
                e.TextInput = function (t, e) {
                  var n = o.createElement("textarea");
                  (n.className = "ace_text-input"),
                    r.isTouchPad &&
                      n.setAttribute("x-palm-disable-auto-cap", !0),
                    n.setAttribute("wrap", "off"),
                    n.setAttribute("autocorrect", "off"),
                    n.setAttribute("autocapitalize", "off"),
                    n.setAttribute("spellcheck", !1),
                    (n.style.opacity = "0"),
                    r.isOldIE && (n.style.top = "-1000px"),
                    t.insertBefore(n, t.firstChild);
                  var c = !1,
                    d = !1,
                    u = !1,
                    p = "",
                    h = !0;
                  try {
                    var f = document.activeElement === n;
                  } catch (t) {}
                  i.addListener(n, "blur", function (t) {
                    e.onBlur(t), (f = !1);
                  }),
                    i.addListener(n, "focus", function (t) {
                      (f = !0), e.onFocus(t), g();
                    }),
                    (this.focus = function () {
                      if (p) return n.focus();
                      var t = n.style.top;
                      (n.style.position = "fixed"),
                        (n.style.top = "0px"),
                        n.focus(),
                        setTimeout(function () {
                          (n.style.position = ""),
                            "0px" == n.style.top && (n.style.top = t);
                        }, 0);
                    }),
                    (this.blur = function () {
                      n.blur();
                    }),
                    (this.isFocused = function () {
                      return f;
                    });
                  var b = a.delayedCall(function () {
                      f && g(h);
                    }),
                    m = a.delayedCall(function () {
                      u || ((n.value = ""), f && g());
                    });
                  function g(t) {
                    if (!u) {
                      if (((u = !0), A))
                        (e = 0), (i = t ? 0 : n.value.length - 1);
                      else
                        var e = t ? 2 : 1,
                          i = 2;
                      try {
                        n.setSelectionRange(e, i);
                      } catch (t) {}
                      u = !1;
                    }
                  }
                  function v() {
                    u || ((n.value = ""), r.isWebKit && m.schedule());
                  }
                  r.isWebKit ||
                    e.addEventListener("changeSelection", function () {
                      e.selection.isEmpty() != h && ((h = !h), b.schedule());
                    }),
                    v(),
                    f && e.onFocus();
                  var _ = function (t) {
                    return (
                      0 === t.selectionStart &&
                      t.selectionEnd === t.value.length
                    );
                  };
                  if (
                    (!n.setSelectionRange &&
                      n.createTextRange &&
                      ((n.setSelectionRange = function (t, e) {
                        var n = this.createTextRange();
                        n.collapse(!0),
                          n.moveStart("character", t),
                          n.moveEnd("character", e),
                          n.select();
                      }),
                      (_ = function (t) {
                        try {
                          var e = t.ownerDocument.selection.createRange();
                        } catch (t) {}
                        return (
                          !(!e || e.parentElement() != t) && e.text == t.value
                        );
                      })),
                    r.isOldIE)
                  ) {
                    var y = !1,
                      M = function (t) {
                        if (!y) {
                          var e = n.value;
                          if (!u && e && "" != e) {
                            if (t && e == ""[0]) return O.schedule();
                            z(e), (y = !0), v(), (y = !1);
                          }
                        }
                      },
                      O = a.delayedCall(M);
                    i.addListener(n, "propertychange", M);
                    var w = { 13: 1, 27: 1 };
                    i.addListener(n, "keyup", function (t) {
                      if (
                        (!u || (n.value && !w[t.keyCode]) || setTimeout(j, 0),
                        (n.value.charCodeAt(0) || 0) < 129)
                      )
                        return O.call();
                      u ? E() : q();
                    }),
                      i.addListener(n, "keydown", function (t) {
                        O.schedule(50);
                      });
                  }
                  var A = null;
                  (this.setInputHandler = function (t) {
                    A = t;
                  }),
                    (this.getInputHandler = function () {
                      return A;
                    });
                  var x = !1,
                    z = function (t) {
                      A && ((t = A(t)), (A = null)),
                        d
                          ? (g(), t && e.onPaste(t), (d = !1))
                          : t == "".charAt(0)
                          ? x
                            ? e.execCommand("del", { source: "ace" })
                            : e.execCommand("backspace", { source: "ace" })
                          : ("" == t.substring(0, 2)
                              ? (t = t.substr(2))
                              : t.charAt(0) == "".charAt(0)
                              ? (t = t.substr(1))
                              : t.charAt(t.length - 1) == "".charAt(0) &&
                                (t = t.slice(0, -1)),
                            t.charAt(t.length - 1) == "".charAt(0) &&
                              (t = t.slice(0, -1)),
                            t && e.onTextInput(t)),
                        x && (x = !1);
                    },
                    C = function (t, e) {
                      var n = t.clipboardData || window.clipboardData;
                      if (n && !s) {
                        var i = l ? "Text" : "text/plain";
                        return e ? !1 !== n.setData(i, e) : n.getData(i);
                      }
                    },
                    k = function (t, r) {
                      var o = e.getCopyText();
                      if (!o) return i.preventDefault(t);
                      C(t, o)
                        ? (r ? e.onCut() : e.onCopy(), i.preventDefault(t))
                        : ((c = !0),
                          (n.value = o),
                          n.select(),
                          setTimeout(function () {
                            (c = !1), v(), g(), r ? e.onCut() : e.onCopy();
                          }));
                    },
                    S = function (t) {
                      k(t, !0);
                    },
                    T = function (t) {
                      k(t, !1);
                    },
                    D = function (t) {
                      var o = C(t);
                      "string" == typeof o
                        ? (o && e.onPaste(o, t),
                          r.isIE && setTimeout(g),
                          i.preventDefault(t))
                        : ((n.value = ""), (d = !0));
                    };
                  i.addCommandKeyListener(n, e.onCommandKey.bind(e)),
                    i.addListener(n, "select", function (t) {
                      c
                        ? (c = !1)
                        : _(n)
                        ? (e.selectAll(), g())
                        : A && g(e.selection.isEmpty());
                    }),
                    i.addListener(n, "input", function (t) {
                      if (!u) {
                        var e = n.value;
                        z(e), v();
                      }
                    }),
                    i.addListener(n, "cut", S),
                    i.addListener(n, "copy", T),
                    i.addListener(n, "paste", D),
                    ("oncut" in n && "oncopy" in n && "onpaste" in n) ||
                      i.addListener(t, "keydown", function (t) {
                        if ((!r.isMac || t.metaKey) && t.ctrlKey)
                          switch (t.keyCode) {
                            case 67:
                              T(t);
                              break;
                            case 86:
                              D(t);
                              break;
                            case 88:
                              S(t);
                          }
                      });
                  var L,
                    q = function (t) {
                      u ||
                        !e.onCompositionStart ||
                        e.$readOnly ||
                        ((u = {}),
                        e.onCompositionStart(),
                        setTimeout(E, 0),
                        e.on("mousedown", j),
                        e.selection.isEmpty() ||
                          (e.insert(""),
                          e.session.markUndoGroup(),
                          e.selection.clearSelection()),
                        e.session.markUndoGroup());
                    },
                    E = function () {
                      if (u && e.onCompositionUpdate && !e.$readOnly) {
                        var t = n.value.replace(/\x01/g, "");
                        if (
                          u.lastValue !== t &&
                          (e.onCompositionUpdate(t),
                          u.lastValue && e.undo(),
                          (u.lastValue = t),
                          u.lastValue)
                        ) {
                          var i = e.selection.getRange();
                          e.insert(u.lastValue),
                            e.session.markUndoGroup(),
                            (u.range = e.selection.getRange()),
                            e.selection.setRange(i),
                            e.selection.clearSelection();
                        }
                      }
                    },
                    j = function (t) {
                      if (e.onCompositionEnd && !e.$readOnly) {
                        var i = u;
                        u = !1;
                        var r = setTimeout(function () {
                          r = null;
                          var t = n.value.replace(/\x01/g, "");
                          u ||
                            (t == i.lastValue
                              ? v()
                              : !i.lastValue && t && (v(), z(t)));
                        });
                        (A = function (t) {
                          return (
                            r && clearTimeout(r),
                            (t = t.replace(/\x01/g, "")) == i.lastValue
                              ? ""
                              : (i.lastValue && r && e.undo(), t)
                          );
                        }),
                          e.onCompositionEnd(),
                          e.removeListener("mousedown", j),
                          "compositionend" == t.type &&
                            i.range &&
                            e.selection.setRange(i.range);
                      }
                    },
                    P = a.delayedCall(E, 50);
                  function R() {
                    clearTimeout(L),
                      (L = setTimeout(
                        function () {
                          p && ((n.style.cssText = p), (p = "")),
                            null == e.renderer.$keepTextAreaAtCursor &&
                              ((e.renderer.$keepTextAreaAtCursor = !0),
                              e.renderer.$moveTextAreaToCursor());
                        },
                        r.isOldIE ? 200 : 0
                      ));
                  }
                  i.addListener(n, "compositionstart", q),
                    r.isGecko
                      ? i.addListener(n, "text", function () {
                          P.schedule();
                        })
                      : (i.addListener(n, "keyup", function () {
                          P.schedule();
                        }),
                        i.addListener(n, "keydown", function () {
                          P.schedule();
                        })),
                    i.addListener(n, "compositionend", j),
                    (this.getElement = function () {
                      return n;
                    }),
                    (this.setReadOnly = function (t) {
                      n.readOnly = t;
                    }),
                    (this.onContextMenu = function (t) {
                      (x = !0),
                        g(e.selection.isEmpty()),
                        e._emit("nativecontextmenu", {
                          target: e,
                          domEvent: t,
                        }),
                        this.moveToMouse(t, !0);
                    }),
                    (this.moveToMouse = function (t, a) {
                      if (a || !r.isOldIE) {
                        p || (p = n.style.cssText),
                          (n.style.cssText =
                            (a ? "z-index:100000;" : "") +
                            "height:" +
                            n.style.height +
                            ";" +
                            (r.isIE ? "opacity:0.1;" : ""));
                        var s = e.container.getBoundingClientRect(),
                          l = o.computedStyle(e.container),
                          c = s.top + (parseInt(l.borderTopWidth) || 0),
                          d = s.left + (parseInt(s.borderLeftWidth) || 0),
                          u = s.bottom - c - n.clientHeight - 2,
                          h = function (t) {
                            (n.style.left = t.clientX - d - 2 + "px"),
                              (n.style.top =
                                Math.min(t.clientY - c - 2, u) + "px");
                          };
                        h(t),
                          "mousedown" == t.type &&
                            (e.renderer.$keepTextAreaAtCursor &&
                              (e.renderer.$keepTextAreaAtCursor = null),
                            clearTimeout(L),
                            r.isWin &&
                              !r.isOldIE &&
                              i.capture(e.container, h, R));
                      }
                    }),
                    (this.onContextMenuClose = R);
                  var I = function (t) {
                    e.textInput.onContextMenu(t), R();
                  };
                  i.addListener(n, "mouseup", I),
                    i.addListener(n, "mousedown", function (t) {
                      t.preventDefault(), R();
                    }),
                    i.addListener(e.renderer.scroller, "contextmenu", I),
                    i.addListener(n, "contextmenu", I);
                };
              }
            ),
            ace.define(
              "ace/mouse/default_handlers",
              [
                "require",
                "exports",
                "module",
                "ace/lib/dom",
                "ace/lib/event",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                "use strict";
                function i(t) {
                  t.$clickSelection = null;
                  var e = t.editor;
                  e.setDefaultHandler("mousedown", this.onMouseDown.bind(t)),
                    e.setDefaultHandler("dblclick", this.onDoubleClick.bind(t)),
                    e.setDefaultHandler(
                      "tripleclick",
                      this.onTripleClick.bind(t)
                    ),
                    e.setDefaultHandler("quadclick", this.onQuadClick.bind(t)),
                    e.setDefaultHandler(
                      "mousewheel",
                      this.onMouseWheel.bind(t)
                    ),
                    e.setDefaultHandler("touchmove", this.onTouchMove.bind(t)),
                    [
                      "select",
                      "startSelect",
                      "selectEnd",
                      "selectAllEnd",
                      "selectByWordsEnd",
                      "selectByLinesEnd",
                      "dragWait",
                      "dragWaitEnd",
                      "focusWait",
                    ].forEach(function (e) {
                      t[e] = this[e];
                    }, this),
                    (t.selectByLines = this.extendSelectionBy.bind(
                      t,
                      "getLineRange"
                    )),
                    (t.selectByWords = this.extendSelectionBy.bind(
                      t,
                      "getWordRange"
                    ));
                }
                function r(t, e) {
                  if (t.start.row == t.end.row)
                    var n = 2 * e.column - t.start.column - t.end.column;
                  else
                    n =
                      t.start.row != t.end.row - 1 ||
                      t.start.column ||
                      t.end.column
                        ? 2 * e.row - t.start.row - t.end.row
                        : e.column - 4;
                  return n < 0
                    ? { cursor: t.start, anchor: t.end }
                    : { cursor: t.end, anchor: t.start };
                }
                t("../lib/dom"),
                  t("../lib/event"),
                  t("../lib/useragent"),
                  function () {
                    (this.onMouseDown = function (t) {
                      var e = t.inSelection(),
                        n = t.getDocumentPosition();
                      this.mousedownEvent = t;
                      var i = this.editor,
                        r = t.getButton();
                      if (0 !== r) {
                        var o = i.getSelectionRange().isEmpty();
                        return (
                          i.$blockScrolling++,
                          (o || 1 == r) && i.selection.moveToPosition(n),
                          i.$blockScrolling--,
                          void (2 == r && i.textInput.onContextMenu(t.domEvent))
                        );
                      }
                      return (
                        (this.mousedownEvent.time = Date.now()),
                        !e ||
                        i.isFocused() ||
                        (i.focus(),
                        !this.$focusTimout ||
                          this.$clickSelection ||
                          i.inMultiSelectMode)
                          ? (this.captureMouse(t),
                            this.startSelect(n, t.domEvent._clicks > 1),
                            t.preventDefault())
                          : (this.setState("focusWait"),
                            void this.captureMouse(t))
                      );
                    }),
                      (this.startSelect = function (t, e) {
                        t =
                          t ||
                          this.editor.renderer.screenToTextCoordinates(
                            this.x,
                            this.y
                          );
                        var n = this.editor;
                        n.$blockScrolling++,
                          this.mousedownEvent.getShiftKey()
                            ? n.selection.selectToPosition(t)
                            : e || n.selection.moveToPosition(t),
                          e || this.select(),
                          n.renderer.scroller.setCapture &&
                            n.renderer.scroller.setCapture(),
                          n.setStyle("ace_selecting"),
                          this.setState("select"),
                          n.$blockScrolling--;
                      }),
                      (this.select = function () {
                        var t,
                          e = this.editor,
                          n = e.renderer.screenToTextCoordinates(
                            this.x,
                            this.y
                          );
                        if ((e.$blockScrolling++, this.$clickSelection)) {
                          var i = this.$clickSelection.comparePoint(n);
                          if (-1 == i) t = this.$clickSelection.end;
                          else if (1 == i) t = this.$clickSelection.start;
                          else {
                            var o = r(this.$clickSelection, n);
                            (n = o.cursor), (t = o.anchor);
                          }
                          e.selection.setSelectionAnchor(t.row, t.column);
                        }
                        e.selection.selectToPosition(n),
                          e.$blockScrolling--,
                          e.renderer.scrollCursorIntoView();
                      }),
                      (this.extendSelectionBy = function (t) {
                        var e,
                          n = this.editor,
                          i = n.renderer.screenToTextCoordinates(
                            this.x,
                            this.y
                          ),
                          o = n.selection[t](i.row, i.column);
                        if ((n.$blockScrolling++, this.$clickSelection)) {
                          var a = this.$clickSelection.comparePoint(o.start),
                            s = this.$clickSelection.comparePoint(o.end);
                          if (-1 == a && s <= 0)
                            (e = this.$clickSelection.end),
                              (o.end.row == i.row &&
                                o.end.column == i.column) ||
                                (i = o.start);
                          else if (1 == s && a >= 0)
                            (e = this.$clickSelection.start),
                              (o.start.row == i.row &&
                                o.start.column == i.column) ||
                                (i = o.end);
                          else if (-1 == a && 1 == s)
                            (i = o.end), (e = o.start);
                          else {
                            var l = r(this.$clickSelection, i);
                            (i = l.cursor), (e = l.anchor);
                          }
                          n.selection.setSelectionAnchor(e.row, e.column);
                        }
                        n.selection.selectToPosition(i),
                          n.$blockScrolling--,
                          n.renderer.scrollCursorIntoView();
                      }),
                      (this.selectEnd =
                        this.selectAllEnd =
                        this.selectByWordsEnd =
                        this.selectByLinesEnd =
                          function () {
                            (this.$clickSelection = null),
                              this.editor.unsetStyle("ace_selecting"),
                              this.editor.renderer.scroller.releaseCapture &&
                                this.editor.renderer.scroller.releaseCapture();
                          }),
                      (this.focusWait = function () {
                        var t,
                          e,
                          n,
                          i,
                          r =
                            ((t = this.mousedownEvent.x),
                            (e = this.mousedownEvent.y),
                            (n = this.x),
                            (i = this.y),
                            Math.sqrt(Math.pow(n - t, 2) + Math.pow(i - e, 2))),
                          o = Date.now();
                        (r > 0 ||
                          o - this.mousedownEvent.time > this.$focusTimout) &&
                          this.startSelect(
                            this.mousedownEvent.getDocumentPosition()
                          );
                      }),
                      (this.onDoubleClick = function (t) {
                        var e = t.getDocumentPosition(),
                          n = this.editor,
                          i = n.session.getBracketRange(e);
                        i
                          ? (i.isEmpty() && (i.start.column--, i.end.column++),
                            this.setState("select"))
                          : ((i = n.selection.getWordRange(e.row, e.column)),
                            this.setState("selectByWords")),
                          (this.$clickSelection = i),
                          this.select();
                      }),
                      (this.onTripleClick = function (t) {
                        var e = t.getDocumentPosition(),
                          n = this.editor;
                        this.setState("selectByLines");
                        var i = n.getSelectionRange();
                        i.isMultiLine() && i.contains(e.row, e.column)
                          ? ((this.$clickSelection = n.selection.getLineRange(
                              i.start.row
                            )),
                            (this.$clickSelection.end =
                              n.selection.getLineRange(i.end.row).end))
                          : (this.$clickSelection = n.selection.getLineRange(
                              e.row
                            )),
                          this.select();
                      }),
                      (this.onQuadClick = function (t) {
                        var e = this.editor;
                        e.selectAll(),
                          (this.$clickSelection = e.getSelectionRange()),
                          this.setState("selectAll");
                      }),
                      (this.onMouseWheel = function (t) {
                        if (!t.getAccelKey()) {
                          t.getShiftKey() &&
                            t.wheelY &&
                            !t.wheelX &&
                            ((t.wheelX = t.wheelY), (t.wheelY = 0));
                          var e = t.domEvent.timeStamp,
                            n = e - (this.$lastScrollTime || 0),
                            i = this.editor;
                          return i.renderer.isScrollableBy(
                            t.wheelX * t.speed,
                            t.wheelY * t.speed
                          ) || n < 200
                            ? ((this.$lastScrollTime = e),
                              i.renderer.scrollBy(
                                t.wheelX * t.speed,
                                t.wheelY * t.speed
                              ),
                              t.stop())
                            : void 0;
                        }
                      }),
                      (this.onTouchMove = function (t) {
                        var e = t.domEvent.timeStamp,
                          n = e - (this.$lastScrollTime || 0),
                          i = this.editor;
                        if (
                          i.renderer.isScrollableBy(
                            t.wheelX * t.speed,
                            t.wheelY * t.speed
                          ) ||
                          n < 200
                        )
                          return (
                            (this.$lastScrollTime = e),
                            i.renderer.scrollBy(
                              t.wheelX * t.speed,
                              t.wheelY * t.speed
                            ),
                            t.stop()
                          );
                      });
                  }.call(i.prototype),
                  (e.DefaultHandlers = i);
              }
            ),
            ace.define(
              "ace/tooltip",
              ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"],
              function (t, e, n) {
                "use strict";
                t("./lib/oop");
                var i = t("./lib/dom");
                function r(t) {
                  (this.isOpen = !1),
                    (this.$element = null),
                    (this.$parentNode = t);
                }
                (function () {
                  (this.$init = function () {
                    return (
                      (this.$element = i.createElement("div")),
                      (this.$element.className = "ace_tooltip"),
                      (this.$element.style.display = "none"),
                      this.$parentNode.appendChild(this.$element),
                      this.$element
                    );
                  }),
                    (this.getElement = function () {
                      return this.$element || this.$init();
                    }),
                    (this.setText = function (t) {
                      i.setInnerText(this.getElement(), t);
                    }),
                    (this.setHtml = function (t) {
                      this.getElement().innerHTML = t;
                    }),
                    (this.setPosition = function (t, e) {
                      (this.getElement().style.left = t + "px"),
                        (this.getElement().style.top = e + "px");
                    }),
                    (this.setClassName = function (t) {
                      i.addCssClass(this.getElement(), t);
                    }),
                    (this.show = function (t, e, n) {
                      null != t && this.setText(t),
                        null != e && null != n && this.setPosition(e, n),
                        this.isOpen ||
                          ((this.getElement().style.display = "block"),
                          (this.isOpen = !0));
                    }),
                    (this.hide = function () {
                      this.isOpen &&
                        ((this.getElement().style.display = "none"),
                        (this.isOpen = !1));
                    }),
                    (this.getHeight = function () {
                      return this.getElement().offsetHeight;
                    }),
                    (this.getWidth = function () {
                      return this.getElement().offsetWidth;
                    });
                }).call(r.prototype),
                  (e.Tooltip = r);
              }
            ),
            ace.define(
              "ace/mouse/default_gutter_handler",
              [
                "require",
                "exports",
                "module",
                "ace/lib/dom",
                "ace/lib/oop",
                "ace/lib/event",
                "ace/tooltip",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/dom"),
                  r = t("../lib/oop"),
                  o = t("../lib/event"),
                  a = t("../tooltip").Tooltip;
                function s(t) {
                  a.call(this, t);
                }
                r.inherits(s, a),
                  function () {
                    this.setPosition = function (t, e) {
                      var n =
                          window.innerWidth ||
                          document.documentElement.clientWidth,
                        i =
                          window.innerHeight ||
                          document.documentElement.clientHeight,
                        r = this.getWidth(),
                        o = this.getHeight();
                      (t += 15) + r > n && (t -= t + r - n),
                        (e += 15) + o > i && (e -= 20 + o),
                        a.prototype.setPosition.call(this, t, e);
                    };
                  }.call(s.prototype),
                  (e.GutterHandler = function (t) {
                    var e,
                      n,
                      r,
                      a = t.editor,
                      l = a.renderer.$gutterLayer,
                      c = new s(a.container);
                    function d() {
                      e && (e = clearTimeout(e)),
                        r &&
                          (c.hide(),
                          (r = null),
                          a.removeEventListener("mousewheel", d));
                    }
                    function u(t) {
                      c.setPosition(t.x, t.y);
                    }
                    t.editor.setDefaultHandler("guttermousedown", function (e) {
                      if (
                        a.isFocused() &&
                        0 == e.getButton() &&
                        "foldWidgets" != l.getRegion(e)
                      ) {
                        var n = e.getDocumentPosition().row,
                          i = a.session.selection;
                        if (e.getShiftKey()) i.selectTo(n, 0);
                        else {
                          if (2 == e.domEvent.detail)
                            return a.selectAll(), e.preventDefault();
                          t.$clickSelection = a.selection.getLineRange(n);
                        }
                        return (
                          t.setState("selectByLines"),
                          t.captureMouse(e),
                          e.preventDefault()
                        );
                      }
                    }),
                      t.editor.setDefaultHandler(
                        "guttermousemove",
                        function (o) {
                          var s = o.domEvent.target || o.domEvent.srcElement;
                          if (i.hasCssClass(s, "ace_fold-widget")) return d();
                          r && t.$tooltipFollowsMouse && u(o),
                            (n = o),
                            e ||
                              (e = setTimeout(function () {
                                (e = null),
                                  n && !t.isMousePressed
                                    ? (function () {
                                        var e = n.getDocumentPosition().row,
                                          i = l.$annotations[e];
                                        if (!i) return d();
                                        if (e == a.session.getLength()) {
                                          var o =
                                              a.renderer.pixelToScreenCoordinates(
                                                0,
                                                n.y
                                              ).row,
                                            s = n.$pos;
                                          if (
                                            o >
                                            a.session.documentToScreenRow(
                                              s.row,
                                              s.column
                                            )
                                          )
                                            return d();
                                        }
                                        if (r != i)
                                          if (
                                            ((r = i.text.join("<br/>")),
                                            c.setHtml(r),
                                            c.show(),
                                            a.on("mousewheel", d),
                                            t.$tooltipFollowsMouse)
                                          )
                                            u(n);
                                          else {
                                            var p =
                                                n.domEvent.target.getBoundingClientRect(),
                                              h = c.getElement().style;
                                            (h.left = p.right + "px"),
                                              (h.top = p.bottom + "px");
                                          }
                                      })()
                                    : d();
                              }, 50));
                        }
                      ),
                      o.addListener(
                        a.renderer.$gutter,
                        "mouseout",
                        function (t) {
                          (n = null),
                            r &&
                              !e &&
                              (e = setTimeout(function () {
                                (e = null), d();
                              }, 50));
                        }
                      ),
                      a.on("changeSession", d);
                  });
              }
            ),
            ace.define(
              "ace/mouse/mouse_event",
              [
                "require",
                "exports",
                "module",
                "ace/lib/event",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/event"),
                  r = t("../lib/useragent"),
                  o = (e.MouseEvent = function (t, e) {
                    (this.domEvent = t),
                      (this.editor = e),
                      (this.x = this.clientX = t.clientX),
                      (this.y = this.clientY = t.clientY),
                      (this.$pos = null),
                      (this.$inSelection = null),
                      (this.propagationStopped = !1),
                      (this.defaultPrevented = !1);
                  });
                (function () {
                  (this.stopPropagation = function () {
                    i.stopPropagation(this.domEvent),
                      (this.propagationStopped = !0);
                  }),
                    (this.preventDefault = function () {
                      i.preventDefault(this.domEvent),
                        (this.defaultPrevented = !0);
                    }),
                    (this.stop = function () {
                      this.stopPropagation(), this.preventDefault();
                    }),
                    (this.getDocumentPosition = function () {
                      return (
                        this.$pos ||
                          (this.$pos =
                            this.editor.renderer.screenToTextCoordinates(
                              this.clientX,
                              this.clientY
                            )),
                        this.$pos
                      );
                    }),
                    (this.inSelection = function () {
                      if (null !== this.$inSelection) return this.$inSelection;
                      var t = this.editor.getSelectionRange();
                      if (t.isEmpty()) this.$inSelection = !1;
                      else {
                        var e = this.getDocumentPosition();
                        this.$inSelection = t.contains(e.row, e.column);
                      }
                      return this.$inSelection;
                    }),
                    (this.getButton = function () {
                      return i.getButton(this.domEvent);
                    }),
                    (this.getShiftKey = function () {
                      return this.domEvent.shiftKey;
                    }),
                    (this.getAccelKey = r.isMac
                      ? function () {
                          return this.domEvent.metaKey;
                        }
                      : function () {
                          return this.domEvent.ctrlKey;
                        });
                }).call(o.prototype);
              }
            ),
            ace.define(
              "ace/mouse/dragdrop_handler",
              [
                "require",
                "exports",
                "module",
                "ace/lib/dom",
                "ace/lib/event",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/dom"),
                  r = t("../lib/event"),
                  o = t("../lib/useragent");
                function a(t) {
                  var e = t.editor,
                    n = i.createElement("img");
                  (n.src =
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                    o.isOpera &&
                      (n.style.cssText =
                        "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;"),
                    [
                      "dragWait",
                      "dragWaitEnd",
                      "startDrag",
                      "dragReadyEnd",
                      "onMouseDrag",
                    ].forEach(function (e) {
                      t[e] = this[e];
                    }, this),
                    e.addEventListener("mousedown", this.onMouseDown.bind(t));
                  var a,
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
                    v = e.container,
                    _ = 0;
                  function y() {
                    var t = p;
                    (function (t, n) {
                      var i = Date.now(),
                        r = !n || t.row != n.row,
                        o = !n || t.column != n.column;
                      !m || r || o
                        ? ((e.$blockScrolling += 1),
                          e.moveCursorToPosition(t),
                          (e.$blockScrolling -= 1),
                          (m = i),
                          (g = { x: l, y: c }))
                        : s(g.x, g.y, l, c) > 5
                        ? (m = null)
                        : i - m >= 200 &&
                          (e.renderer.scrollCursorIntoView(), (m = null));
                    })((p = e.renderer.screenToTextCoordinates(l, c)), t),
                      (function (t, n) {
                        var i = Date.now(),
                          r = e.renderer.layerConfig.lineHeight,
                          o = e.renderer.layerConfig.characterWidth,
                          a = e.renderer.scroller.getBoundingClientRect(),
                          s = {
                            x: { left: l - a.left, right: a.right - l },
                            y: { top: c - a.top, bottom: a.bottom - c },
                          },
                          d = Math.min(s.x.left, s.x.right),
                          u = Math.min(s.y.top, s.y.bottom),
                          p = { row: t.row, column: t.column };
                        d / o <= 2 &&
                          (p.column += s.x.left < s.x.right ? -3 : 2),
                          u / r <= 1 &&
                            (p.row += s.y.top < s.y.bottom ? -1 : 1);
                        var h = t.row != p.row,
                          f = t.column != p.column,
                          m = !n || t.row != n.row;
                        h || (f && !m)
                          ? b
                            ? i - b >= 200 && e.renderer.scrollCursorIntoView(p)
                            : (b = i)
                          : (b = null);
                      })(p, t);
                  }
                  function M() {
                    (u = e.selection.toOrientedRange()),
                      (a = e.session.addMarker(
                        u,
                        "ace_selection",
                        e.getSelectionStyle()
                      )),
                      e.clearSelection(),
                      e.isFocused() && e.renderer.$cursorLayer.setBlinking(!1),
                      clearInterval(d),
                      y(),
                      (d = setInterval(y, 20)),
                      (_ = 0),
                      r.addListener(document, "mousemove", A);
                  }
                  function O() {
                    clearInterval(d),
                      e.session.removeMarker(a),
                      (a = null),
                      (e.$blockScrolling += 1),
                      e.selection.fromOrientedRange(u),
                      (e.$blockScrolling -= 1),
                      e.isFocused() &&
                        !f &&
                        e.renderer.$cursorLayer.setBlinking(!e.getReadOnly()),
                      (u = null),
                      (p = null),
                      (_ = 0),
                      (b = null),
                      (m = null),
                      r.removeListener(document, "mousemove", A);
                  }
                  (this.onDragStart = function (t) {
                    if (this.cancelDrag || !v.draggable) {
                      var i = this;
                      return (
                        setTimeout(function () {
                          i.startSelect(), i.captureMouse(t);
                        }, 0),
                        t.preventDefault()
                      );
                    }
                    u = e.getSelectionRange();
                    var r = t.dataTransfer;
                    (r.effectAllowed = e.getReadOnly() ? "copy" : "copyMove"),
                      o.isOpera &&
                        (e.container.appendChild(n), (n.scrollTop = 0)),
                      r.setDragImage && r.setDragImage(n, 0, 0),
                      o.isOpera && e.container.removeChild(n),
                      r.clearData(),
                      r.setData("Text", e.session.getTextRange()),
                      (f = !0),
                      this.setState("drag");
                  }),
                    (this.onDragEnd = function (t) {
                      if (
                        ((v.draggable = !1),
                        (f = !1),
                        this.setState(null),
                        !e.getReadOnly())
                      ) {
                        var n = t.dataTransfer.dropEffect;
                        h ||
                          "move" != n ||
                          e.session.remove(e.getSelectionRange()),
                          e.renderer.$cursorLayer.setBlinking(!0);
                      }
                      this.editor.unsetStyle("ace_dragging"),
                        this.editor.renderer.setCursorStyle("");
                    }),
                    (this.onDragEnter = function (t) {
                      if (!e.getReadOnly() && x(t.dataTransfer))
                        return (
                          (l = t.clientX),
                          (c = t.clientY),
                          a || M(),
                          _++,
                          (t.dataTransfer.dropEffect = h = z(t)),
                          r.preventDefault(t)
                        );
                    }),
                    (this.onDragOver = function (t) {
                      if (!e.getReadOnly() && x(t.dataTransfer))
                        return (
                          (l = t.clientX),
                          (c = t.clientY),
                          a || (M(), _++),
                          null !== w && (w = null),
                          (t.dataTransfer.dropEffect = h = z(t)),
                          r.preventDefault(t)
                        );
                    }),
                    (this.onDragLeave = function (t) {
                      if (--_ <= 0 && a)
                        return O(), (h = null), r.preventDefault(t);
                    }),
                    (this.onDrop = function (t) {
                      if (p) {
                        var n = t.dataTransfer;
                        if (f)
                          switch (h) {
                            case "move":
                              u = u.contains(p.row, p.column)
                                ? { start: p, end: p }
                                : e.moveText(u, p);
                              break;
                            case "copy":
                              u = e.moveText(u, p, !0);
                          }
                        else {
                          var i = n.getData("Text");
                          (u = { start: p, end: e.session.insert(p, i) }),
                            e.focus(),
                            (h = null);
                        }
                        return O(), r.preventDefault(t);
                      }
                    }),
                    r.addListener(v, "dragstart", this.onDragStart.bind(t)),
                    r.addListener(v, "dragend", this.onDragEnd.bind(t)),
                    r.addListener(v, "dragenter", this.onDragEnter.bind(t)),
                    r.addListener(v, "dragover", this.onDragOver.bind(t)),
                    r.addListener(v, "dragleave", this.onDragLeave.bind(t)),
                    r.addListener(v, "drop", this.onDrop.bind(t));
                  var w = null;
                  function A() {
                    null == w &&
                      (w = setTimeout(function () {
                        null != w && a && O();
                      }, 20));
                  }
                  function x(t) {
                    var e = t.types;
                    return (
                      !e ||
                      Array.prototype.some.call(e, function (t) {
                        return "text/plain" == t || "Text" == t;
                      })
                    );
                  }
                  function z(t) {
                    var e = ["copy", "copymove", "all", "uninitialized"],
                      n = o.isMac ? t.altKey : t.ctrlKey,
                      i = "uninitialized";
                    try {
                      i = t.dataTransfer.effectAllowed.toLowerCase();
                    } catch (t) {}
                    var r = "none";
                    return (
                      n && e.indexOf(i) >= 0
                        ? (r = "copy")
                        : [
                            "move",
                            "copymove",
                            "linkmove",
                            "all",
                            "uninitialized",
                          ].indexOf(i) >= 0
                        ? (r = "move")
                        : e.indexOf(i) >= 0 && (r = "copy"),
                      r
                    );
                  }
                }
                function s(t, e, n, i) {
                  return Math.sqrt(Math.pow(n - t, 2) + Math.pow(i - e, 2));
                }
                (function () {
                  (this.dragWait = function () {
                    Date.now() - this.mousedownEvent.time >
                      this.editor.getDragDelay() && this.startDrag();
                  }),
                    (this.dragWaitEnd = function () {
                      (this.editor.container.draggable = !1),
                        this.startSelect(
                          this.mousedownEvent.getDocumentPosition()
                        ),
                        this.selectEnd();
                    }),
                    (this.dragReadyEnd = function (t) {
                      this.editor.renderer.$cursorLayer.setBlinking(
                        !this.editor.getReadOnly()
                      ),
                        this.editor.unsetStyle("ace_dragging"),
                        this.editor.renderer.setCursorStyle(""),
                        this.dragWaitEnd();
                    }),
                    (this.startDrag = function () {
                      this.cancelDrag = !1;
                      var t = this.editor;
                      (t.container.draggable = !0),
                        t.renderer.$cursorLayer.setBlinking(!1),
                        t.setStyle("ace_dragging");
                      var e = o.isWin ? "default" : "move";
                      t.renderer.setCursorStyle(e), this.setState("dragReady");
                    }),
                    (this.onMouseDrag = function (t) {
                      var e = this.editor.container;
                      o.isIE &&
                        "dragReady" == this.state &&
                        s(
                          this.mousedownEvent.x,
                          this.mousedownEvent.y,
                          this.x,
                          this.y
                        ) > 3 &&
                        e.dragDrop(),
                        "dragWait" === this.state &&
                          s(
                            this.mousedownEvent.x,
                            this.mousedownEvent.y,
                            this.x,
                            this.y
                          ) > 0 &&
                          ((e.draggable = !1),
                          this.startSelect(
                            this.mousedownEvent.getDocumentPosition()
                          ));
                    }),
                    (this.onMouseDown = function (t) {
                      if (this.$dragEnabled) {
                        this.mousedownEvent = t;
                        var e = this.editor,
                          n = t.inSelection(),
                          i = t.getButton();
                        if (1 === (t.domEvent.detail || 1) && 0 === i && n) {
                          if (
                            t.editor.inMultiSelectMode &&
                            (t.getAccelKey() || t.getShiftKey())
                          )
                            return;
                          this.mousedownEvent.time = Date.now();
                          var r = t.domEvent.target || t.domEvent.srcElement;
                          "unselectable" in r && (r.unselectable = "on"),
                            e.getDragDelay()
                              ? (o.isWebKit &&
                                  ((this.cancelDrag = !0),
                                  (e.container.draggable = !0)),
                                this.setState("dragWait"))
                              : this.startDrag(),
                            this.captureMouse(t, this.onMouseDrag.bind(this)),
                            (t.defaultPrevented = !0);
                        }
                      }
                    });
                }).call(a.prototype),
                  (e.DragdropHandler = a);
              }
            ),
            ace.define(
              "ace/lib/net",
              ["require", "exports", "module", "ace/lib/dom"],
              function (t, e, n) {
                "use strict";
                var i = t("./dom");
                (e.get = function (t, e) {
                  var n = new XMLHttpRequest();
                  n.open("GET", t, !0),
                    (n.onreadystatechange = function () {
                      4 === n.readyState && e(n.responseText);
                    }),
                    n.send(null);
                }),
                  (e.loadScript = function (t, e) {
                    var n = i.getDocumentHead(),
                      r = document.createElement("script");
                    (r.src = t),
                      n.appendChild(r),
                      (r.onload = r.onreadystatechange =
                        function (t, n) {
                          (!n &&
                            r.readyState &&
                            "loaded" != r.readyState &&
                            "complete" != r.readyState) ||
                            ((r = r.onload = r.onreadystatechange = null),
                            n || e());
                        });
                  }),
                  (e.qualifyURL = function (t) {
                    var e = document.createElement("a");
                    return (e.href = t), e.href;
                  });
              }
            ),
            ace.define(
              "ace/lib/event_emitter",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i = {},
                  r = function () {
                    this.propagationStopped = !0;
                  },
                  o = function () {
                    this.defaultPrevented = !0;
                  };
                (i._emit = i._dispatchEvent =
                  function (t, e) {
                    this._eventRegistry || (this._eventRegistry = {}),
                      this._defaultHandlers || (this._defaultHandlers = {});
                    var n = this._eventRegistry[t] || [],
                      i = this._defaultHandlers[t];
                    if (n.length || i) {
                      ("object" == typeof e && e) || (e = {}),
                        e.type || (e.type = t),
                        e.stopPropagation || (e.stopPropagation = r),
                        e.preventDefault || (e.preventDefault = o),
                        (n = n.slice());
                      for (
                        var a = 0;
                        a < n.length && (n[a](e, this), !e.propagationStopped);
                        a++
                      );
                      return i && !e.defaultPrevented ? i(e, this) : void 0;
                    }
                  }),
                  (i._signal = function (t, e) {
                    var n = (this._eventRegistry || {})[t];
                    if (n) {
                      n = n.slice();
                      for (var i = 0; i < n.length; i++) n[i](e, this);
                    }
                  }),
                  (i.once = function (t, e) {
                    var n = this;
                    e &&
                      this.addEventListener(t, function i() {
                        n.removeEventListener(t, i), e.apply(null, arguments);
                      });
                  }),
                  (i.setDefaultHandler = function (t, e) {
                    var n = this._defaultHandlers;
                    if (
                      (n || (n = this._defaultHandlers = { _disabled_: {} }),
                      n[t])
                    ) {
                      var i = n[t],
                        r = n._disabled_[t];
                      r || (n._disabled_[t] = r = []), r.push(i);
                      var o = r.indexOf(e);
                      -1 != o && r.splice(o, 1);
                    }
                    n[t] = e;
                  }),
                  (i.removeDefaultHandler = function (t, e) {
                    var n = this._defaultHandlers;
                    if (n) {
                      var i = n._disabled_[t];
                      if (n[t] == e)
                        n[t], i && this.setDefaultHandler(t, i.pop());
                      else if (i) {
                        var r = i.indexOf(e);
                        -1 != r && i.splice(r, 1);
                      }
                    }
                  }),
                  (i.on = i.addEventListener =
                    function (t, e, n) {
                      this._eventRegistry = this._eventRegistry || {};
                      var i = this._eventRegistry[t];
                      return (
                        i || (i = this._eventRegistry[t] = []),
                        -1 == i.indexOf(e) && i[n ? "unshift" : "push"](e),
                        e
                      );
                    }),
                  (i.off =
                    i.removeListener =
                    i.removeEventListener =
                      function (t, e) {
                        this._eventRegistry = this._eventRegistry || {};
                        var n = this._eventRegistry[t];
                        if (n) {
                          var i = n.indexOf(e);
                          -1 !== i && n.splice(i, 1);
                        }
                      }),
                  (i.removeAllListeners = function (t) {
                    this._eventRegistry && (this._eventRegistry[t] = []);
                  }),
                  (e.EventEmitter = i);
              }
            ),
            ace.define(
              "ace/lib/app_config",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                var i = t("./oop"),
                  r = t("./event_emitter").EventEmitter,
                  o = {
                    setOptions: function (t) {
                      Object.keys(t).forEach(function (e) {
                        this.setOption(e, t[e]);
                      }, this);
                    },
                    getOptions: function (t) {
                      var e = {};
                      return (
                        t
                          ? Array.isArray(t) || ((e = t), (t = Object.keys(e)))
                          : (t = Object.keys(this.$options)),
                        t.forEach(function (t) {
                          e[t] = this.getOption(t);
                        }, this),
                        e
                      );
                    },
                    setOption: function (t, e) {
                      if (this["$" + t] !== e) {
                        var n = this.$options[t];
                        if (!n) return a('misspelled option "' + t + '"');
                        if (n.forwardTo)
                          return (
                            this[n.forwardTo] &&
                            this[n.forwardTo].setOption(t, e)
                          );
                        n.handlesSet || (this["$" + t] = e),
                          n && n.set && n.set.call(this, e);
                      }
                    },
                    getOption: function (t) {
                      var e = this.$options[t];
                      return e
                        ? e.forwardTo
                          ? this[e.forwardTo] && this[e.forwardTo].getOption(t)
                          : e && e.get
                          ? e.get.call(this)
                          : this["$" + t]
                        : a('misspelled option "' + t + '"');
                    },
                  };
                function a(t) {
                  "undefined" != typeof console && console.warn;
                }
                function s(t, e) {
                  var n = new Error(t);
                  (n.data = e),
                    "object" == typeof console && console.error,
                    setTimeout(function () {
                      throw n;
                    });
                }
                var l = function () {
                  this.$defaultOptions = {};
                };
                (function () {
                  i.implement(this, r),
                    (this.defineOptions = function (t, e, n) {
                      return (
                        t.$options ||
                          (this.$defaultOptions[e] = t.$options = {}),
                        Object.keys(n).forEach(function (e) {
                          var i = n[e];
                          "string" == typeof i && (i = { forwardTo: i }),
                            i.name || (i.name = e),
                            (t.$options[i.name] = i),
                            "initialValue" in i &&
                              (t["$" + i.name] = i.initialValue);
                        }),
                        i.implement(t, o),
                        this
                      );
                    }),
                    (this.resetOptions = function (t) {
                      Object.keys(t.$options).forEach(function (e) {
                        var n = t.$options[e];
                        "value" in n && t.setOption(e, n.value);
                      });
                    }),
                    (this.setDefaultValue = function (t, e, n) {
                      var i =
                        this.$defaultOptions[t] ||
                        (this.$defaultOptions[t] = {});
                      i[e] &&
                        (i.forwardTo
                          ? this.setDefaultValue(i.forwardTo, e, n)
                          : (i[e].value = n));
                    }),
                    (this.setDefaultValues = function (t, e) {
                      Object.keys(e).forEach(function (n) {
                        this.setDefaultValue(t, n, e[n]);
                      }, this);
                    }),
                    (this.warn = a),
                    (this.reportError = s);
                }).call(l.prototype),
                  (e.AppConfig = l);
              }
            ),
            ace.define(
              "ace/config",
              [
                "require",
                "exports",
                "module",
                "ace/lib/lang",
                "ace/lib/oop",
                "ace/lib/net",
                "ace/lib/app_config",
              ],
              function (t, e, i) {
                var r = t("./lib/lang"),
                  o = (t("./lib/oop"), t("./lib/net")),
                  a = t("./lib/app_config").AppConfig;
                i.exports = e = new a();
                var s = (function () {
                    return this || ("undefined" != typeof window && window);
                  })(),
                  l = {
                    packaged: !1,
                    workerPath: null,
                    modePath: null,
                    themePath: null,
                    basePath: "",
                    suffix: ".js",
                    $moduleUrls: {},
                  };
                function c(r) {
                  if (s && s.document) {
                    l.packaged =
                      r ||
                      t.packaged ||
                      i.packaged ||
                      (s.define && n(65).packaged);
                    for (
                      var o,
                        a = {},
                        c = "",
                        d = document.currentScript || document._currentScript,
                        u = (
                          (d && d.ownerDocument) ||
                          document
                        ).getElementsByTagName("script"),
                        p = 0;
                      p < u.length;
                      p++
                    ) {
                      var h = u[p],
                        f = h.src || h.getAttribute("src");
                      if (f) {
                        for (
                          var b = h.attributes, m = 0, g = b.length;
                          m < g;
                          m++
                        ) {
                          var v = b[m];
                          0 === v.name.indexOf("data-ace-") &&
                            (a[
                              ((o = v.name.replace(/^data-ace-/, "")),
                              o.replace(/-(.)/g, function (t, e) {
                                return e.toUpperCase();
                              }))
                            ] = v.value);
                        }
                        var _ = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                        _ && (c = _[1]);
                      }
                    }
                    for (var y in (c &&
                      ((a.base = a.base || c), (a.packaged = !0)),
                    (a.basePath = a.base),
                    (a.workerPath = a.workerPath || a.base),
                    (a.modePath = a.modePath || a.base),
                    (a.themePath = a.themePath || a.base),
                    delete a.base,
                    a))
                      void 0 !== a[y] && e.set(y, a[y]);
                  }
                }
                (e.get = function (t) {
                  if (!l.hasOwnProperty(t))
                    throw new Error("Unknown config key: " + t);
                  return l[t];
                }),
                  (e.set = function (t, e) {
                    if (!l.hasOwnProperty(t))
                      throw new Error("Unknown config key: " + t);
                    l[t] = e;
                  }),
                  (e.all = function () {
                    return r.copyObject(l);
                  }),
                  (e.moduleUrl = function (t, e) {
                    if (l.$moduleUrls[t]) return l.$moduleUrls[t];
                    var n = t.split("/"),
                      i =
                        "snippets" == (e = e || n[n.length - 2] || "")
                          ? "/"
                          : "-",
                      r = n[n.length - 1];
                    if ("worker" == e && "-" == i) {
                      var o = new RegExp(
                        "^" + e + "[\\-_]|[\\-_]" + e + "$",
                        "g"
                      );
                      r = r.replace(o, "");
                    }
                    (!r || r == e) && n.length > 1 && (r = n[n.length - 2]);
                    var a = l[e + "Path"];
                    return (
                      null == a ? (a = l.basePath) : "/" == i && (e = i = ""),
                      a && "/" != a.slice(-1) && (a += "/"),
                      a + e + i + r + this.get("suffix")
                    );
                  }),
                  (e.setModuleUrl = function (t, e) {
                    return (l.$moduleUrls[t] = e);
                  }),
                  (e.$loading = {}),
                  (e.loadModule = function (n, i) {
                    var r, a;
                    Array.isArray(n) && ((a = n[0]), (n = n[1]));
                    try {
                      r = t(n);
                    } catch (t) {}
                    if (r && !e.$loading[n]) return i && i(r);
                    if (
                      (e.$loading[n] || (e.$loading[n] = []),
                      e.$loading[n].push(i),
                      !(e.$loading[n].length > 1))
                    ) {
                      var s = function () {
                        t([n], function (t) {
                          e._emit("load.module", { name: n, module: t });
                          var i = e.$loading[n];
                          (e.$loading[n] = null),
                            i.forEach(function (e) {
                              e && e(t);
                            });
                        });
                      };
                      if (!e.get("packaged")) return s();
                      o.loadScript(e.moduleUrl(n, a), s);
                    }
                  }),
                  c(!0),
                  (e.init = c);
              }
            ),
            ace.define(
              "ace/mouse/mouse_handler",
              [
                "require",
                "exports",
                "module",
                "ace/lib/event",
                "ace/lib/useragent",
                "ace/mouse/default_handlers",
                "ace/mouse/default_gutter_handler",
                "ace/mouse/mouse_event",
                "ace/mouse/dragdrop_handler",
                "ace/config",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/event"),
                  r = t("../lib/useragent"),
                  o = t("./default_handlers").DefaultHandlers,
                  a = t("./default_gutter_handler").GutterHandler,
                  s = t("./mouse_event").MouseEvent,
                  l = t("./dragdrop_handler").DragdropHandler,
                  c = t("../config"),
                  d = function (t) {
                    var e = this;
                    (this.editor = t), new o(this), new a(this), new l(this);
                    var n = function (e) {
                        (!document.hasFocus ||
                          !document.hasFocus() ||
                          (!t.isFocused() &&
                            document.activeElement ==
                              (t.textInput && t.textInput.getElement()))) &&
                          window.focus(),
                          t.focus();
                      },
                      s = t.renderer.getMouseEventTarget();
                    i.addListener(
                      s,
                      "click",
                      this.onMouseEvent.bind(this, "click")
                    ),
                      i.addListener(
                        s,
                        "mousemove",
                        this.onMouseMove.bind(this, "mousemove")
                      ),
                      i.addMultiMouseDownListener(
                        [
                          s,
                          t.renderer.scrollBarV && t.renderer.scrollBarV.inner,
                          t.renderer.scrollBarH && t.renderer.scrollBarH.inner,
                          t.textInput && t.textInput.getElement(),
                        ].filter(Boolean),
                        [400, 300, 250],
                        this,
                        "onMouseEvent"
                      ),
                      i.addMouseWheelListener(
                        t.container,
                        this.onMouseWheel.bind(this, "mousewheel")
                      ),
                      i.addTouchMoveListener(
                        t.container,
                        this.onTouchMove.bind(this, "touchmove")
                      );
                    var c = t.renderer.$gutter;
                    i.addListener(
                      c,
                      "mousedown",
                      this.onMouseEvent.bind(this, "guttermousedown")
                    ),
                      i.addListener(
                        c,
                        "click",
                        this.onMouseEvent.bind(this, "gutterclick")
                      ),
                      i.addListener(
                        c,
                        "dblclick",
                        this.onMouseEvent.bind(this, "gutterdblclick")
                      ),
                      i.addListener(
                        c,
                        "mousemove",
                        this.onMouseEvent.bind(this, "guttermousemove")
                      ),
                      i.addListener(s, "mousedown", n),
                      i.addListener(c, "mousedown", n),
                      r.isIE &&
                        t.renderer.scrollBarV &&
                        (i.addListener(
                          t.renderer.scrollBarV.element,
                          "mousedown",
                          n
                        ),
                        i.addListener(
                          t.renderer.scrollBarH.element,
                          "mousedown",
                          n
                        )),
                      t.on("mousemove", function (n) {
                        if (!e.state && !e.$dragDelay && e.$dragEnabled) {
                          var i = t.renderer.screenToTextCoordinates(n.x, n.y),
                            r = t.session.selection.getRange(),
                            o = t.renderer;
                          !r.isEmpty() && r.insideStart(i.row, i.column)
                            ? o.setCursorStyle("default")
                            : o.setCursorStyle("");
                        }
                      });
                  };
                (function () {
                  (this.onMouseEvent = function (t, e) {
                    this.editor._emit(t, new s(e, this.editor));
                  }),
                    (this.onMouseMove = function (t, e) {
                      var n =
                        this.editor._eventRegistry &&
                        this.editor._eventRegistry.mousemove;
                      n &&
                        n.length &&
                        this.editor._emit(t, new s(e, this.editor));
                    }),
                    (this.onMouseWheel = function (t, e) {
                      var n = new s(e, this.editor);
                      (n.speed = 2 * this.$scrollSpeed),
                        (n.wheelX = e.wheelX),
                        (n.wheelY = e.wheelY),
                        this.editor._emit(t, n);
                    }),
                    (this.onTouchMove = function (t, e) {
                      var n = new s(e, this.editor);
                      (n.speed = 1),
                        (n.wheelX = e.wheelX),
                        (n.wheelY = e.wheelY),
                        this.editor._emit(t, n);
                    }),
                    (this.setState = function (t) {
                      this.state = t;
                    }),
                    (this.captureMouse = function (t, e) {
                      (this.x = t.x),
                        (this.y = t.y),
                        (this.isMousePressed = !0);
                      var n = this.editor.renderer;
                      n.$keepTextAreaAtCursor &&
                        (n.$keepTextAreaAtCursor = null);
                      var o = this,
                        a = function (t) {
                          if (t) {
                            if (r.isWebKit && !t.which && o.releaseMouse)
                              return o.releaseMouse();
                            (o.x = t.clientX),
                              (o.y = t.clientY),
                              e && e(t),
                              (o.mouseEvent = new s(t, o.editor)),
                              (o.$mouseMoved = !0);
                          }
                        },
                        l = function (t) {
                          clearInterval(d),
                            c(),
                            o[o.state + "End"] && o[o.state + "End"](t),
                            (o.state = ""),
                            null == n.$keepTextAreaAtCursor &&
                              ((n.$keepTextAreaAtCursor = !0),
                              n.$moveTextAreaToCursor()),
                            (o.isMousePressed = !1),
                            (o.$onCaptureMouseMove = o.releaseMouse = null),
                            t && o.onMouseEvent("mouseup", t);
                        },
                        c = function () {
                          o[o.state] && o[o.state](), (o.$mouseMoved = !1);
                        };
                      if (r.isOldIE && "dblclick" == t.domEvent.type)
                        return setTimeout(function () {
                          l(t);
                        });
                      (o.$onCaptureMouseMove = a),
                        (o.releaseMouse = i.capture(
                          this.editor.container,
                          a,
                          l
                        ));
                      var d = setInterval(c, 20);
                    }),
                    (this.releaseMouse = null),
                    (this.cancelContextMenu = function () {
                      var t = function (e) {
                        (e && e.domEvent && "contextmenu" != e.domEvent.type) ||
                          (this.editor.off("nativecontextmenu", t),
                          e && e.domEvent && i.stopEvent(e.domEvent));
                      }.bind(this);
                      setTimeout(t, 10), this.editor.on("nativecontextmenu", t);
                    });
                }).call(d.prototype),
                  c.defineOptions(d.prototype, "mouseHandler", {
                    scrollSpeed: { initialValue: 2 },
                    dragDelay: { initialValue: r.isMac ? 150 : 0 },
                    dragEnabled: { initialValue: !0 },
                    focusTimout: { initialValue: 0 },
                    tooltipFollowsMouse: { initialValue: !0 },
                  }),
                  (e.MouseHandler = d);
              }
            ),
            ace.define(
              "ace/mouse/fold_handler",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                e.FoldHandler = function (t) {
                  t.on("click", function (e) {
                    var n = e.getDocumentPosition(),
                      i = t.session,
                      r = i.getFoldAt(n.row, n.column, 1);
                    r &&
                      (e.getAccelKey() ? i.removeFold(r) : i.expandFold(r),
                      e.stop());
                  }),
                    t.on("gutterclick", function (e) {
                      if (
                        "foldWidgets" == t.renderer.$gutterLayer.getRegion(e)
                      ) {
                        var n = e.getDocumentPosition().row,
                          i = t.session;
                        i.foldWidgets &&
                          i.foldWidgets[n] &&
                          t.session.onFoldWidgetClick(n, e),
                          t.isFocused() || t.focus(),
                          e.stop();
                      }
                    }),
                    t.on("gutterdblclick", function (e) {
                      if (
                        "foldWidgets" == t.renderer.$gutterLayer.getRegion(e)
                      ) {
                        var n = e.getDocumentPosition().row,
                          i = t.session,
                          r = i.getParentFoldRangeData(n, !0),
                          o = r.range || r.firstRange;
                        if (o) {
                          n = o.start.row;
                          var a = i.getFoldAt(n, i.getLine(n).length, 1);
                          a
                            ? i.removeFold(a)
                            : (i.addFold("...", o),
                              t.renderer.scrollCursorIntoView({
                                row: o.start.row,
                                column: 0,
                              }));
                        }
                        e.stop();
                      }
                    });
                };
              }
            ),
            ace.define(
              "ace/keyboard/keybinding",
              ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/keys"),
                  r = t("../lib/event"),
                  o = function (t) {
                    (this.$editor = t),
                      (this.$data = { editor: t }),
                      (this.$handlers = []),
                      this.setDefaultHandler(t.commands);
                  };
                (function () {
                  (this.setDefaultHandler = function (t) {
                    this.removeKeyboardHandler(this.$defaultHandler),
                      (this.$defaultHandler = t),
                      this.addKeyboardHandler(t, 0);
                  }),
                    (this.setKeyboardHandler = function (t) {
                      var e = this.$handlers;
                      if (e[e.length - 1] != t) {
                        for (
                          ;
                          e[e.length - 1] &&
                          e[e.length - 1] != this.$defaultHandler;

                        )
                          this.removeKeyboardHandler(e[e.length - 1]);
                        this.addKeyboardHandler(t, 1);
                      }
                    }),
                    (this.addKeyboardHandler = function (t, e) {
                      if (t) {
                        "function" != typeof t ||
                          t.handleKeyboard ||
                          (t.handleKeyboard = t);
                        var n = this.$handlers.indexOf(t);
                        -1 != n && this.$handlers.splice(n, 1),
                          null == e
                            ? this.$handlers.push(t)
                            : this.$handlers.splice(e, 0, t),
                          -1 == n && t.attach && t.attach(this.$editor);
                      }
                    }),
                    (this.removeKeyboardHandler = function (t) {
                      var e = this.$handlers.indexOf(t);
                      return (
                        -1 != e &&
                        (this.$handlers.splice(e, 1),
                        t.detach && t.detach(this.$editor),
                        !0)
                      );
                    }),
                    (this.getKeyboardHandler = function () {
                      return this.$handlers[this.$handlers.length - 1];
                    }),
                    (this.getStatusText = function () {
                      var t = this.$data,
                        e = t.editor;
                      return this.$handlers
                        .map(function (n) {
                          return (
                            (n.getStatusText && n.getStatusText(e, t)) || ""
                          );
                        })
                        .filter(Boolean)
                        .join(" ");
                    }),
                    (this.$callKeyboardHandlers = function (t, e, n, i) {
                      for (
                        var o,
                          a = !1,
                          s = this.$editor.commands,
                          l = this.$handlers.length;
                        l-- &&
                        !(
                          (o = this.$handlers[l].handleKeyboard(
                            this.$data,
                            t,
                            e,
                            n,
                            i
                          )) &&
                          o.command &&
                          ((a =
                            "null" == o.command ||
                            s.exec(o.command, this.$editor, o.args, i)) &&
                            i &&
                            -1 != t &&
                            1 != o.passEvent &&
                            1 != o.command.passEvent &&
                            r.stopEvent(i),
                          a)
                        );

                      );
                      return (
                        a ||
                          -1 != t ||
                          ((o = { command: "insertstring" }),
                          (a = s.exec("insertstring", this.$editor, e))),
                        a && this.$editor._signal("keyboardActivity", o),
                        a
                      );
                    }),
                    (this.onCommandKey = function (t, e, n) {
                      var r = i.keyCodeToString(n);
                      this.$callKeyboardHandlers(e, r, n, t);
                    }),
                    (this.onTextInput = function (t) {
                      this.$callKeyboardHandlers(-1, t);
                    });
                }).call(o.prototype),
                  (e.KeyBinding = o);
              }
            ),
            ace.define(
              "ace/range",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i = function (t, e, n, i) {
                  (this.start = { row: t, column: e }),
                    (this.end = { row: n, column: i });
                };
                (function () {
                  (this.isEqual = function (t) {
                    return (
                      this.start.row === t.start.row &&
                      this.end.row === t.end.row &&
                      this.start.column === t.start.column &&
                      this.end.column === t.end.column
                    );
                  }),
                    (this.toString = function () {
                      return (
                        "Range: [" +
                        this.start.row +
                        "/" +
                        this.start.column +
                        "] -> [" +
                        this.end.row +
                        "/" +
                        this.end.column +
                        "]"
                      );
                    }),
                    (this.contains = function (t, e) {
                      return 0 == this.compare(t, e);
                    }),
                    (this.compareRange = function (t) {
                      var e,
                        n = t.end,
                        i = t.start;
                      return 1 == (e = this.compare(n.row, n.column))
                        ? 1 == (e = this.compare(i.row, i.column))
                          ? 2
                          : 0 == e
                          ? 1
                          : 0
                        : -1 == e
                        ? -2
                        : -1 == (e = this.compare(i.row, i.column))
                        ? -1
                        : 1 == e
                        ? 42
                        : 0;
                    }),
                    (this.comparePoint = function (t) {
                      return this.compare(t.row, t.column);
                    }),
                    (this.containsRange = function (t) {
                      return (
                        0 == this.comparePoint(t.start) &&
                        0 == this.comparePoint(t.end)
                      );
                    }),
                    (this.intersects = function (t) {
                      var e = this.compareRange(t);
                      return -1 == e || 0 == e || 1 == e;
                    }),
                    (this.isEnd = function (t, e) {
                      return this.end.row == t && this.end.column == e;
                    }),
                    (this.isStart = function (t, e) {
                      return this.start.row == t && this.start.column == e;
                    }),
                    (this.setStart = function (t, e) {
                      "object" == typeof t
                        ? ((this.start.column = t.column),
                          (this.start.row = t.row))
                        : ((this.start.row = t), (this.start.column = e));
                    }),
                    (this.setEnd = function (t, e) {
                      "object" == typeof t
                        ? ((this.end.column = t.column), (this.end.row = t.row))
                        : ((this.end.row = t), (this.end.column = e));
                    }),
                    (this.inside = function (t, e) {
                      return (
                        0 == this.compare(t, e) &&
                        !this.isEnd(t, e) &&
                        !this.isStart(t, e)
                      );
                    }),
                    (this.insideStart = function (t, e) {
                      return 0 == this.compare(t, e) && !this.isEnd(t, e);
                    }),
                    (this.insideEnd = function (t, e) {
                      return 0 == this.compare(t, e) && !this.isStart(t, e);
                    }),
                    (this.compare = function (t, e) {
                      return this.isMultiLine() || t !== this.start.row
                        ? t < this.start.row
                          ? -1
                          : t > this.end.row
                          ? 1
                          : this.start.row === t
                          ? e >= this.start.column
                            ? 0
                            : -1
                          : this.end.row === t
                          ? e <= this.end.column
                            ? 0
                            : 1
                          : 0
                        : e < this.start.column
                        ? -1
                        : e > this.end.column
                        ? 1
                        : 0;
                    }),
                    (this.compareStart = function (t, e) {
                      return this.start.row == t && this.start.column == e
                        ? -1
                        : this.compare(t, e);
                    }),
                    (this.compareEnd = function (t, e) {
                      return this.end.row == t && this.end.column == e
                        ? 1
                        : this.compare(t, e);
                    }),
                    (this.compareInside = function (t, e) {
                      return this.end.row == t && this.end.column == e
                        ? 1
                        : this.start.row == t && this.start.column == e
                        ? -1
                        : this.compare(t, e);
                    }),
                    (this.clipRows = function (t, e) {
                      if (this.end.row > e) var n = { row: e + 1, column: 0 };
                      else this.end.row < t && (n = { row: t, column: 0 });
                      if (this.start.row > e) var r = { row: e + 1, column: 0 };
                      else this.start.row < t && (r = { row: t, column: 0 });
                      return i.fromPoints(r || this.start, n || this.end);
                    }),
                    (this.extend = function (t, e) {
                      var n = this.compare(t, e);
                      if (0 == n) return this;
                      if (-1 == n) var r = { row: t, column: e };
                      else var o = { row: t, column: e };
                      return i.fromPoints(r || this.start, o || this.end);
                    }),
                    (this.isEmpty = function () {
                      return (
                        this.start.row === this.end.row &&
                        this.start.column === this.end.column
                      );
                    }),
                    (this.isMultiLine = function () {
                      return this.start.row !== this.end.row;
                    }),
                    (this.clone = function () {
                      return i.fromPoints(this.start, this.end);
                    }),
                    (this.collapseRows = function () {
                      return 0 == this.end.column
                        ? new i(
                            this.start.row,
                            0,
                            Math.max(this.start.row, this.end.row - 1),
                            0
                          )
                        : new i(this.start.row, 0, this.end.row, 0);
                    }),
                    (this.toScreenRange = function (t) {
                      var e = t.documentToScreenPosition(this.start),
                        n = t.documentToScreenPosition(this.end);
                      return new i(e.row, e.column, n.row, n.column);
                    }),
                    (this.moveBy = function (t, e) {
                      (this.start.row += t),
                        (this.start.column += e),
                        (this.end.row += t),
                        (this.end.column += e);
                    });
                }).call(i.prototype),
                  (i.fromPoints = function (t, e) {
                    return new i(t.row, t.column, e.row, e.column);
                  }),
                  (i.comparePoints = function (t, e) {
                    return t.row - e.row || t.column - e.column;
                  }),
                  (i.comparePoints = function (t, e) {
                    return t.row - e.row || t.column - e.column;
                  }),
                  (e.Range = i);
              }
            ),
            ace.define(
              "ace/selection",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/lang",
                "ace/lib/event_emitter",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/lang"),
                  o = t("./lib/event_emitter").EventEmitter,
                  a = t("./range").Range,
                  s = function (t) {
                    (this.session = t),
                      (this.doc = t.getDocument()),
                      this.clearSelection(),
                      (this.lead = this.selectionLead =
                        this.doc.createAnchor(0, 0)),
                      (this.anchor = this.selectionAnchor =
                        this.doc.createAnchor(0, 0));
                    var e = this;
                    this.lead.on("change", function (t) {
                      e._emit("changeCursor"),
                        e.$isEmpty || e._emit("changeSelection"),
                        e.$keepDesiredColumnOnChange ||
                          t.old.column == t.value.column ||
                          (e.$desiredColumn = null);
                    }),
                      this.selectionAnchor.on("change", function () {
                        e.$isEmpty || e._emit("changeSelection");
                      });
                  };
                (function () {
                  i.implement(this, o),
                    (this.isEmpty = function () {
                      return (
                        this.$isEmpty ||
                        (this.anchor.row == this.lead.row &&
                          this.anchor.column == this.lead.column)
                      );
                    }),
                    (this.isMultiLine = function () {
                      return !this.isEmpty() && this.getRange().isMultiLine();
                    }),
                    (this.getCursor = function () {
                      return this.lead.getPosition();
                    }),
                    (this.setSelectionAnchor = function (t, e) {
                      this.anchor.setPosition(t, e),
                        this.$isEmpty &&
                          ((this.$isEmpty = !1), this._emit("changeSelection"));
                    }),
                    (this.getSelectionAnchor = function () {
                      return this.$isEmpty
                        ? this.getSelectionLead()
                        : this.anchor.getPosition();
                    }),
                    (this.getSelectionLead = function () {
                      return this.lead.getPosition();
                    }),
                    (this.shiftSelection = function (t) {
                      if (this.$isEmpty)
                        this.moveCursorTo(this.lead.row, this.lead.column + t);
                      else {
                        var e = this.getSelectionAnchor(),
                          n = this.getSelectionLead(),
                          i = this.isBackwards();
                        (i && 0 === e.column) ||
                          this.setSelectionAnchor(e.row, e.column + t),
                          (i || 0 !== n.column) &&
                            this.$moveSelection(function () {
                              this.moveCursorTo(n.row, n.column + t);
                            });
                      }
                    }),
                    (this.isBackwards = function () {
                      var t = this.anchor,
                        e = this.lead;
                      return (
                        t.row > e.row || (t.row == e.row && t.column > e.column)
                      );
                    }),
                    (this.getRange = function () {
                      var t = this.anchor,
                        e = this.lead;
                      return this.isEmpty()
                        ? a.fromPoints(e, e)
                        : this.isBackwards()
                        ? a.fromPoints(e, t)
                        : a.fromPoints(t, e);
                    }),
                    (this.clearSelection = function () {
                      this.$isEmpty ||
                        ((this.$isEmpty = !0), this._emit("changeSelection"));
                    }),
                    (this.selectAll = function () {
                      var t = this.doc.getLength() - 1;
                      this.setSelectionAnchor(0, 0),
                        this.moveCursorTo(t, this.doc.getLine(t).length);
                    }),
                    (this.setRange = this.setSelectionRange =
                      function (t, e) {
                        e
                          ? (this.setSelectionAnchor(t.end.row, t.end.column),
                            this.selectTo(t.start.row, t.start.column))
                          : (this.setSelectionAnchor(
                              t.start.row,
                              t.start.column
                            ),
                            this.selectTo(t.end.row, t.end.column)),
                          this.getRange().isEmpty() && (this.$isEmpty = !0),
                          (this.$desiredColumn = null);
                      }),
                    (this.$moveSelection = function (t) {
                      var e = this.lead;
                      this.$isEmpty && this.setSelectionAnchor(e.row, e.column),
                        t.call(this);
                    }),
                    (this.selectTo = function (t, e) {
                      this.$moveSelection(function () {
                        this.moveCursorTo(t, e);
                      });
                    }),
                    (this.selectToPosition = function (t) {
                      this.$moveSelection(function () {
                        this.moveCursorToPosition(t);
                      });
                    }),
                    (this.moveTo = function (t, e) {
                      this.clearSelection(), this.moveCursorTo(t, e);
                    }),
                    (this.moveToPosition = function (t) {
                      this.clearSelection(), this.moveCursorToPosition(t);
                    }),
                    (this.selectUp = function () {
                      this.$moveSelection(this.moveCursorUp);
                    }),
                    (this.selectDown = function () {
                      this.$moveSelection(this.moveCursorDown);
                    }),
                    (this.selectRight = function () {
                      this.$moveSelection(this.moveCursorRight);
                    }),
                    (this.selectLeft = function () {
                      this.$moveSelection(this.moveCursorLeft);
                    }),
                    (this.selectLineStart = function () {
                      this.$moveSelection(this.moveCursorLineStart);
                    }),
                    (this.selectLineEnd = function () {
                      this.$moveSelection(this.moveCursorLineEnd);
                    }),
                    (this.selectFileEnd = function () {
                      this.$moveSelection(this.moveCursorFileEnd);
                    }),
                    (this.selectFileStart = function () {
                      this.$moveSelection(this.moveCursorFileStart);
                    }),
                    (this.selectWordRight = function () {
                      this.$moveSelection(this.moveCursorWordRight);
                    }),
                    (this.selectWordLeft = function () {
                      this.$moveSelection(this.moveCursorWordLeft);
                    }),
                    (this.getWordRange = function (t, e) {
                      if (void 0 === e) {
                        var n = t || this.lead;
                        (t = n.row), (e = n.column);
                      }
                      return this.session.getWordRange(t, e);
                    }),
                    (this.selectWord = function () {
                      this.setSelectionRange(this.getWordRange());
                    }),
                    (this.selectAWord = function () {
                      var t = this.getCursor(),
                        e = this.session.getAWordRange(t.row, t.column);
                      this.setSelectionRange(e);
                    }),
                    (this.getLineRange = function (t, e) {
                      var n,
                        i = "number" == typeof t ? t : this.lead.row,
                        r = this.session.getFoldLine(i);
                      return (
                        r ? ((i = r.start.row), (n = r.end.row)) : (n = i),
                        !0 === e
                          ? new a(i, 0, n, this.session.getLine(n).length)
                          : new a(i, 0, n + 1, 0)
                      );
                    }),
                    (this.selectLine = function () {
                      this.setSelectionRange(this.getLineRange());
                    }),
                    (this.moveCursorUp = function () {
                      this.moveCursorBy(-1, 0);
                    }),
                    (this.moveCursorDown = function () {
                      this.moveCursorBy(1, 0);
                    }),
                    (this.moveCursorLeft = function () {
                      var t,
                        e = this.lead.getPosition();
                      if ((t = this.session.getFoldAt(e.row, e.column, -1)))
                        this.moveCursorTo(t.start.row, t.start.column);
                      else if (0 === e.column)
                        e.row > 0 &&
                          this.moveCursorTo(
                            e.row - 1,
                            this.doc.getLine(e.row - 1).length
                          );
                      else {
                        var n = this.session.getTabSize();
                        this.session.isTabStop(e) &&
                        this.doc
                          .getLine(e.row)
                          .slice(e.column - n, e.column)
                          .split(" ").length -
                          1 ==
                          n
                          ? this.moveCursorBy(0, -n)
                          : this.moveCursorBy(0, -1);
                      }
                    }),
                    (this.moveCursorRight = function () {
                      var t,
                        e = this.lead.getPosition();
                      if ((t = this.session.getFoldAt(e.row, e.column, 1)))
                        this.moveCursorTo(t.end.row, t.end.column);
                      else if (
                        this.lead.column ==
                        this.doc.getLine(this.lead.row).length
                      )
                        this.lead.row < this.doc.getLength() - 1 &&
                          this.moveCursorTo(this.lead.row + 1, 0);
                      else {
                        var n = this.session.getTabSize();
                        (e = this.lead),
                          this.session.isTabStop(e) &&
                          this.doc
                            .getLine(e.row)
                            .slice(e.column, e.column + n)
                            .split(" ").length -
                            1 ==
                            n
                            ? this.moveCursorBy(0, n)
                            : this.moveCursorBy(0, 1);
                      }
                    }),
                    (this.moveCursorLineStart = function () {
                      var t = this.lead.row,
                        e = this.lead.column,
                        n = this.session.documentToScreenRow(t, e),
                        i = this.session.screenToDocumentPosition(n, 0),
                        r = this.session
                          .getDisplayLine(t, null, i.row, i.column)
                          .match(/^\s*/);
                      r[0].length == e ||
                        this.session.$useEmacsStyleLineStart ||
                        (i.column += r[0].length),
                        this.moveCursorToPosition(i);
                    }),
                    (this.moveCursorLineEnd = function () {
                      var t = this.lead,
                        e = this.session.getDocumentLastRowColumnPosition(
                          t.row,
                          t.column
                        );
                      if (this.lead.column == e.column) {
                        var n = this.session.getLine(e.row);
                        if (e.column == n.length) {
                          var i = n.search(/\s+$/);
                          i > 0 && (e.column = i);
                        }
                      }
                      this.moveCursorTo(e.row, e.column);
                    }),
                    (this.moveCursorFileEnd = function () {
                      var t = this.doc.getLength() - 1,
                        e = this.doc.getLine(t).length;
                      this.moveCursorTo(t, e);
                    }),
                    (this.moveCursorFileStart = function () {
                      this.moveCursorTo(0, 0);
                    }),
                    (this.moveCursorLongWordRight = function () {
                      var t = this.lead.row,
                        e = this.lead.column,
                        n = this.doc.getLine(t),
                        i = n.substring(e);
                      (this.session.nonTokenRe.lastIndex = 0),
                        (this.session.tokenRe.lastIndex = 0);
                      var r = this.session.getFoldAt(t, e, 1);
                      if (r) this.moveCursorTo(r.end.row, r.end.column);
                      else {
                        if (
                          (this.session.nonTokenRe.exec(i) &&
                            ((e += this.session.nonTokenRe.lastIndex),
                            (this.session.nonTokenRe.lastIndex = 0),
                            (i = n.substring(e))),
                          e >= n.length)
                        )
                          return (
                            this.moveCursorTo(t, n.length),
                            this.moveCursorRight(),
                            void (
                              t < this.doc.getLength() - 1 &&
                              this.moveCursorWordRight()
                            )
                          );
                        this.session.tokenRe.exec(i) &&
                          ((e += this.session.tokenRe.lastIndex),
                          (this.session.tokenRe.lastIndex = 0)),
                          this.moveCursorTo(t, e);
                      }
                    }),
                    (this.moveCursorLongWordLeft = function () {
                      var t,
                        e = this.lead.row,
                        n = this.lead.column;
                      if ((t = this.session.getFoldAt(e, n, -1)))
                        this.moveCursorTo(t.start.row, t.start.column);
                      else {
                        var i = this.session.getFoldStringAt(e, n, -1);
                        null == i && (i = this.doc.getLine(e).substring(0, n));
                        var o = r.stringReverse(i);
                        if (
                          ((this.session.nonTokenRe.lastIndex = 0),
                          (this.session.tokenRe.lastIndex = 0),
                          this.session.nonTokenRe.exec(o) &&
                            ((n -= this.session.nonTokenRe.lastIndex),
                            (o = o.slice(this.session.nonTokenRe.lastIndex)),
                            (this.session.nonTokenRe.lastIndex = 0)),
                          n <= 0)
                        )
                          return (
                            this.moveCursorTo(e, 0),
                            this.moveCursorLeft(),
                            void (e > 0 && this.moveCursorWordLeft())
                          );
                        this.session.tokenRe.exec(o) &&
                          ((n -= this.session.tokenRe.lastIndex),
                          (this.session.tokenRe.lastIndex = 0)),
                          this.moveCursorTo(e, n);
                      }
                    }),
                    (this.$shortWordEndIndex = function (t) {
                      var e,
                        n = 0,
                        i = /\s/,
                        r = this.session.tokenRe;
                      if (((r.lastIndex = 0), this.session.tokenRe.exec(t)))
                        n = this.session.tokenRe.lastIndex;
                      else {
                        for (; (e = t[n]) && i.test(e); ) n++;
                        if (n < 1)
                          for (r.lastIndex = 0; (e = t[n]) && !r.test(e); )
                            if (((r.lastIndex = 0), n++, i.test(e))) {
                              if (n > 2) {
                                n--;
                                break;
                              }
                              for (; (e = t[n]) && i.test(e); ) n++;
                              if (n > 2) break;
                            }
                      }
                      return (r.lastIndex = 0), n;
                    }),
                    (this.moveCursorShortWordRight = function () {
                      var t = this.lead.row,
                        e = this.lead.column,
                        n = this.doc.getLine(t),
                        i = n.substring(e),
                        r = this.session.getFoldAt(t, e, 1);
                      if (r) return this.moveCursorTo(r.end.row, r.end.column);
                      if (e == n.length) {
                        var o = this.doc.getLength();
                        do {
                          t++, (i = this.doc.getLine(t));
                        } while (t < o && /^\s*$/.test(i));
                        /^\s+/.test(i) || (i = ""), (e = 0);
                      }
                      var a = this.$shortWordEndIndex(i);
                      this.moveCursorTo(t, e + a);
                    }),
                    (this.moveCursorShortWordLeft = function () {
                      var t,
                        e = this.lead.row,
                        n = this.lead.column;
                      if ((t = this.session.getFoldAt(e, n, -1)))
                        return this.moveCursorTo(t.start.row, t.start.column);
                      var i = this.session.getLine(e).substring(0, n);
                      if (0 === n) {
                        do {
                          e--, (i = this.doc.getLine(e));
                        } while (e > 0 && /^\s*$/.test(i));
                        (n = i.length), /\s+$/.test(i) || (i = "");
                      }
                      var o = r.stringReverse(i),
                        a = this.$shortWordEndIndex(o);
                      return this.moveCursorTo(e, n - a);
                    }),
                    (this.moveCursorWordRight = function () {
                      this.session.$selectLongWords
                        ? this.moveCursorLongWordRight()
                        : this.moveCursorShortWordRight();
                    }),
                    (this.moveCursorWordLeft = function () {
                      this.session.$selectLongWords
                        ? this.moveCursorLongWordLeft()
                        : this.moveCursorShortWordLeft();
                    }),
                    (this.moveCursorBy = function (t, e) {
                      var n = this.session.documentToScreenPosition(
                        this.lead.row,
                        this.lead.column
                      );
                      0 === e &&
                        (this.$desiredColumn
                          ? (n.column = this.$desiredColumn)
                          : (this.$desiredColumn = n.column));
                      var i = this.session.screenToDocumentPosition(
                        n.row + t,
                        n.column
                      );
                      0 !== t &&
                        0 === e &&
                        i.row === this.lead.row &&
                        i.column === this.lead.column &&
                        this.session.lineWidgets &&
                        this.session.lineWidgets[i.row] &&
                        (i.row > 0 || t > 0) &&
                        i.row++,
                        this.moveCursorTo(i.row, i.column + e, 0 === e);
                    }),
                    (this.moveCursorToPosition = function (t) {
                      this.moveCursorTo(t.row, t.column);
                    }),
                    (this.moveCursorTo = function (t, e, n) {
                      var i = this.session.getFoldAt(t, e, 1);
                      i && ((t = i.start.row), (e = i.start.column)),
                        (this.$keepDesiredColumnOnChange = !0),
                        this.lead.setPosition(t, e),
                        (this.$keepDesiredColumnOnChange = !1),
                        n || (this.$desiredColumn = null);
                    }),
                    (this.moveCursorToScreen = function (t, e, n) {
                      var i = this.session.screenToDocumentPosition(t, e);
                      this.moveCursorTo(i.row, i.column, n);
                    }),
                    (this.detach = function () {
                      this.lead.detach(),
                        this.anchor.detach(),
                        (this.session = this.doc = null);
                    }),
                    (this.fromOrientedRange = function (t) {
                      this.setSelectionRange(t, t.cursor == t.start),
                        (this.$desiredColumn =
                          t.desiredColumn || this.$desiredColumn);
                    }),
                    (this.toOrientedRange = function (t) {
                      var e = this.getRange();
                      return (
                        t
                          ? ((t.start.column = e.start.column),
                            (t.start.row = e.start.row),
                            (t.end.column = e.end.column),
                            (t.end.row = e.end.row))
                          : (t = e),
                        (t.cursor = this.isBackwards() ? t.start : t.end),
                        (t.desiredColumn = this.$desiredColumn),
                        t
                      );
                    }),
                    (this.getRangeOfMovements = function (t) {
                      var e = this.getCursor();
                      try {
                        t(this);
                        var n = this.getCursor();
                        return a.fromPoints(e, n);
                      } catch (t) {
                        return a.fromPoints(e, e);
                      } finally {
                        this.moveCursorToPosition(e);
                      }
                    }),
                    (this.toJSON = function () {
                      if (this.rangeCount)
                        var t = this.ranges.map(function (t) {
                          var e = t.clone();
                          return (e.isBackwards = t.cursor == t.start), e;
                        });
                      else
                        (t = this.getRange()).isBackwards = this.isBackwards();
                      return t;
                    }),
                    (this.fromJSON = function (t) {
                      if (null == t.start) {
                        if (this.rangeList) {
                          this.toSingleRange(t[0]);
                          for (var e = t.length; e--; ) {
                            var n = a.fromPoints(t[e].start, t[e].end);
                            t[e].isBackwards && (n.cursor = n.start),
                              this.addRange(n, !0);
                          }
                          return;
                        }
                        t = t[0];
                      }
                      this.rangeList && this.toSingleRange(t),
                        this.setSelectionRange(t, t.isBackwards);
                    }),
                    (this.isEqual = function (t) {
                      if (
                        (t.length || this.rangeCount) &&
                        t.length != this.rangeCount
                      )
                        return !1;
                      if (!t.length || !this.ranges)
                        return this.getRange().isEqual(t);
                      for (var e = this.ranges.length; e--; )
                        if (!this.ranges[e].isEqual(t[e])) return !1;
                      return !0;
                    });
                }).call(s.prototype),
                  (e.Selection = s);
              }
            ),
            ace.define(
              "ace/tokenizer",
              ["require", "exports", "module", "ace/config"],
              function (t, e, n) {
                "use strict";
                var i = t("./config"),
                  r = 2e3,
                  o = function (t) {
                    for (var e in ((this.states = t),
                    (this.regExps = {}),
                    (this.matchMappings = {}),
                    this.states)) {
                      for (
                        var n = this.states[e],
                          i = [],
                          r = 0,
                          o = (this.matchMappings[e] = {
                            defaultToken: "text",
                          }),
                          a = "g",
                          s = [],
                          l = 0;
                        l < n.length;
                        l++
                      ) {
                        var c = n[l];
                        if (
                          (c.defaultToken && (o.defaultToken = c.defaultToken),
                          c.caseInsensitive && (a = "gi"),
                          null != c.regex)
                        ) {
                          c.regex instanceof RegExp &&
                            (c.regex = c.regex.toString().slice(1, -1));
                          var d = c.regex,
                            u =
                              new RegExp("(?:(" + d + ")|(.))").exec("a")
                                .length - 2;
                          Array.isArray(c.token)
                            ? 1 == c.token.length || 1 == u
                              ? (c.token = c.token[0])
                              : u - 1 != c.token.length
                              ? (this.reportError(
                                  "number of classes and regexp groups doesn't match",
                                  { rule: c, groupCount: u - 1 }
                                ),
                                (c.token = c.token[0]))
                              : ((c.tokenArray = c.token),
                                (c.token = null),
                                (c.onMatch = this.$arrayTokens))
                            : "function" != typeof c.token ||
                              c.onMatch ||
                              (c.onMatch = u > 1 ? this.$applyToken : c.token),
                            u > 1 &&
                              (/\\\d/.test(c.regex)
                                ? (d = c.regex.replace(
                                    /\\([0-9]+)/g,
                                    function (t, e) {
                                      return "\\" + (parseInt(e, 10) + r + 1);
                                    }
                                  ))
                                : ((u = 1),
                                  (d = this.removeCapturingGroups(c.regex))),
                              c.splitRegex ||
                                "string" == typeof c.token ||
                                s.push(c)),
                            (o[r] = l),
                            (r += u),
                            i.push(d),
                            c.onMatch || (c.onMatch = null);
                        }
                      }
                      i.length || ((o[0] = 0), i.push("$")),
                        s.forEach(function (t) {
                          t.splitRegex = this.createSplitterRegexp(t.regex, a);
                        }, this),
                        (this.regExps[e] = new RegExp(
                          "(" + i.join(")|(") + ")|($)",
                          a
                        ));
                    }
                  };
                (function () {
                  (this.$setMaxTokenCount = function (t) {
                    r = 0 | t;
                  }),
                    (this.$applyToken = function (t) {
                      var e = this.splitRegex.exec(t).slice(1),
                        n = this.token.apply(this, e);
                      if ("string" == typeof n) return [{ type: n, value: t }];
                      for (var i = [], r = 0, o = n.length; r < o; r++)
                        e[r] && (i[i.length] = { type: n[r], value: e[r] });
                      return i;
                    }),
                    (this.$arrayTokens = function (t) {
                      if (!t) return [];
                      var e = this.splitRegex.exec(t);
                      if (!e) return "text";
                      for (
                        var n = [], i = this.tokenArray, r = 0, o = i.length;
                        r < o;
                        r++
                      )
                        e[r + 1] &&
                          (n[n.length] = { type: i[r], value: e[r + 1] });
                      return n;
                    }),
                    (this.removeCapturingGroups = function (t) {
                      return t.replace(
                        /\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,
                        function (t, e) {
                          return e ? "(?:" : t;
                        }
                      );
                    }),
                    (this.createSplitterRegexp = function (t, e) {
                      if (-1 != t.indexOf("(?=")) {
                        var n = 0,
                          i = !1,
                          r = {};
                        t.replace(
                          /(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,
                          function (t, e, o, a, s, l) {
                            return (
                              i
                                ? (i = "]" != s)
                                : s
                                ? (i = !0)
                                : a
                                ? (n == r.stack &&
                                    ((r.end = l + 1), (r.stack = -1)),
                                  n--)
                                : o &&
                                  (n++,
                                  1 != o.length &&
                                    ((r.stack = n), (r.start = l))),
                              t
                            );
                          }
                        ),
                          null != r.end &&
                            /^\)*$/.test(t.substr(r.end)) &&
                            (t = t.substring(0, r.start) + t.substr(r.end));
                      }
                      return (
                        "^" != t.charAt(0) && (t = "^" + t),
                        "$" != t.charAt(t.length - 1) && (t += "$"),
                        new RegExp(t, (e || "").replace("g", ""))
                      );
                    }),
                    (this.getLineTokens = function (t, e) {
                      if (e && "string" != typeof e) {
                        var n = e.slice(0);
                        "#tmp" === (e = n[0]) && (n.shift(), (e = n.shift()));
                      } else n = [];
                      var i = e || "start",
                        o = this.states[i];
                      o || ((i = "start"), (o = this.states[i]));
                      var a = this.matchMappings[i],
                        s = this.regExps[i];
                      s.lastIndex = 0;
                      for (
                        var l,
                          c = [],
                          d = 0,
                          u = 0,
                          p = { type: null, value: "" };
                        (l = s.exec(t));

                      ) {
                        var h = a.defaultToken,
                          f = null,
                          b = l[0],
                          m = s.lastIndex;
                        if (m - b.length > d) {
                          var g = t.substring(d, m - b.length);
                          p.type == h
                            ? (p.value += g)
                            : (p.type && c.push(p),
                              (p = { type: h, value: g }));
                        }
                        for (var v = 0; v < l.length - 2; v++)
                          if (void 0 !== l[v + 1]) {
                            (h = (f = o[a[v]]).onMatch
                              ? f.onMatch(b, i, n)
                              : f.token),
                              f.next &&
                                ((i =
                                  "string" == typeof f.next
                                    ? f.next
                                    : f.next(i, n)),
                                (o = this.states[i]) ||
                                  (this.reportError("state doesn't exist", i),
                                  (i = "start"),
                                  (o = this.states[i])),
                                (a = this.matchMappings[i]),
                                (d = m),
                                ((s = this.regExps[i]).lastIndex = m));
                            break;
                          }
                        if (b)
                          if ("string" == typeof h)
                            (f && !1 === f.merge) || p.type !== h
                              ? (p.type && c.push(p),
                                (p = { type: h, value: b }))
                              : (p.value += b);
                          else if (h)
                            for (
                              p.type && c.push(p),
                                p = { type: null, value: "" },
                                v = 0;
                              v < h.length;
                              v++
                            )
                              c.push(h[v]);
                        if (d == t.length) break;
                        if (((d = m), u++ > r)) {
                          for (
                            u > 2 * t.length &&
                            this.reportError(
                              "infinite loop with in ace tokenizer",
                              { startState: e, line: t }
                            );
                            d < t.length;

                          )
                            p.type && c.push(p),
                              (p = {
                                value: t.substring(d, (d += 2e3)),
                                type: "overflow",
                              });
                          (i = "start"), (n = []);
                          break;
                        }
                      }
                      return (
                        p.type && c.push(p),
                        n.length > 1 && n[0] !== i && n.unshift("#tmp", i),
                        { tokens: c, state: n.length ? n : i }
                      );
                    }),
                    (this.reportError = i.reportError);
                }).call(o.prototype),
                  (e.Tokenizer = o);
              }
            ),
            ace.define(
              "ace/mode/text_highlight_rules",
              ["require", "exports", "module", "ace/lib/lang"],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/lang"),
                  r = function () {
                    this.$rules = {
                      start: [
                        { token: "empty_line", regex: "^$" },
                        { defaultToken: "text" },
                      ],
                    };
                  };
                (function () {
                  (this.addRules = function (t, e) {
                    if (e)
                      for (var n in t) {
                        for (var i = t[n], r = 0; r < i.length; r++) {
                          var o = i[r];
                          (o.next || o.onMatch) &&
                            ("string" == typeof o.next &&
                              0 !== o.next.indexOf(e) &&
                              (o.next = e + o.next),
                            o.nextState &&
                              0 !== o.nextState.indexOf(e) &&
                              (o.nextState = e + o.nextState));
                        }
                        this.$rules[e + n] = i;
                      }
                    else for (var n in t) this.$rules[n] = t[n];
                  }),
                    (this.getRules = function () {
                      return this.$rules;
                    }),
                    (this.embedRules = function (t, e, n, r, o) {
                      var a = "function" == typeof t ? new t().getRules() : t;
                      if (r) for (var s = 0; s < r.length; s++) r[s] = e + r[s];
                      else for (var l in ((r = []), a)) r.push(e + l);
                      if ((this.addRules(a, e), n)) {
                        var c = Array.prototype[o ? "push" : "unshift"];
                        for (s = 0; s < r.length; s++)
                          c.apply(this.$rules[r[s]], i.deepCopy(n));
                      }
                      this.$embeds || (this.$embeds = []), this.$embeds.push(e);
                    }),
                    (this.getEmbeds = function () {
                      return this.$embeds;
                    });
                  var t = function (t, e) {
                      return (
                        ("start" != t || e.length) &&
                          e.unshift(this.nextState, t),
                        this.nextState
                      );
                    },
                    e = function (t, e) {
                      return e.shift(), e.shift() || "start";
                    };
                  (this.normalizeRules = function () {
                    var n = 0,
                      i = this.$rules;
                    Object.keys(i).forEach(function r(o) {
                      var a = i[o];
                      a.processed = !0;
                      for (var s = 0; s < a.length; s++) {
                        var l = a[s];
                        !l.regex &&
                          l.start &&
                          ((l.regex = l.start),
                          l.next || (l.next = []),
                          l.next.push(
                            { defaultToken: l.token },
                            {
                              token: l.token + ".end",
                              regex: l.end || l.start,
                              next: "pop",
                            }
                          ),
                          (l.token = l.token + ".start"),
                          (l.push = !0));
                        var c = l.next || l.push;
                        if (c && Array.isArray(c)) {
                          var d = l.stateName;
                          d ||
                            ("string" != typeof (d = l.token) &&
                              (d = d[0] || ""),
                            i[d] && (d += n++)),
                            (i[d] = c),
                            (l.next = d),
                            r(d);
                        } else "pop" == c && (l.next = e);
                        if (
                          (l.push &&
                            ((l.nextState = l.next || l.push),
                            (l.next = t),
                            delete l.push),
                          l.rules)
                        )
                          for (var u in l.rules)
                            i[u]
                              ? i[u].push && i[u].push.apply(i[u], l.rules[u])
                              : (i[u] = l.rules[u]);
                        if (l.include || "string" == typeof l)
                          var p = l.include || l,
                            h = i[p];
                        else Array.isArray(l) && (h = l);
                        if (h) {
                          var f = [s, 1].concat(h);
                          l.noEscape &&
                            (f = f.filter(function (t) {
                              return !t.next;
                            })),
                            a.splice.apply(a, f),
                            s--,
                            (h = null);
                        }
                        l.keywordMap &&
                          ((l.token = this.createKeywordMapper(
                            l.keywordMap,
                            l.defaultToken || "text",
                            l.caseInsensitive
                          )),
                          delete l.defaultToken);
                      }
                    }, this);
                  }),
                    (this.createKeywordMapper = function (t, e, n, i) {
                      var r = Object.create(null);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var o = t[e];
                          n && (o = o.toLowerCase());
                          for (var a = o.split(i || "|"), s = a.length; s--; )
                            r[a[s]] = e;
                        }),
                        Object.getPrototypeOf(r) && (r.__proto__ = null),
                        (this.$keywordList = Object.keys(r)),
                        (t = null),
                        n
                          ? function (t) {
                              return r[t.toLowerCase()] || e;
                            }
                          : function (t) {
                              return r[t] || e;
                            }
                      );
                    }),
                    (this.getKeywords = function () {
                      return this.$keywords;
                    });
                }).call(r.prototype),
                  (e.TextHighlightRules = r);
              }
            ),
            ace.define(
              "ace/mode/behaviour",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i = function () {
                  this.$behaviours = {};
                };
                (function () {
                  (this.add = function (t, e, n) {
                    switch (void 0) {
                      case this.$behaviours:
                        this.$behaviours = {};
                      case this.$behaviours[t]:
                        this.$behaviours[t] = {};
                    }
                    this.$behaviours[t][e] = n;
                  }),
                    (this.addBehaviours = function (t) {
                      for (var e in t)
                        for (var n in t[e]) this.add(e, n, t[e][n]);
                    }),
                    (this.remove = function (t) {
                      this.$behaviours &&
                        this.$behaviours[t] &&
                        delete this.$behaviours[t];
                    }),
                    (this.inherit = function (t, e) {
                      if ("function" == typeof t)
                        var n = new t().getBehaviours(e);
                      else n = t.getBehaviours(e);
                      this.addBehaviours(n);
                    }),
                    (this.getBehaviours = function (t) {
                      if (t) {
                        for (var e = {}, n = 0; n < t.length; n++)
                          this.$behaviours[t[n]] &&
                            (e[t[n]] = this.$behaviours[t[n]]);
                        return e;
                      }
                      return this.$behaviours;
                    });
                }).call(i.prototype),
                  (e.Behaviour = i);
              }
            ),
            ace.define(
              "ace/unicode",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                (e.packages = {}),
                  (function (t) {
                    var n = /\w{4}/g;
                    for (var i in t) e.packages[i] = t[i].replace(n, "\\u$&");
                  })({
                    L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
                    Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
                    Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
                    Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
                    Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
                    Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
                    M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
                    Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
                    Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
                    Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
                    N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
                    Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
                    Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
                    No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
                    P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
                    Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
                    Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
                    Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
                    Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
                    Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
                    Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
                    Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
                    S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
                    Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
                    Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
                    Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
                    So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
                    Z: "002000A01680180E2000-200A20282029202F205F3000",
                    Zs: "002000A01680180E2000-200A202F205F3000",
                    Zl: "2028",
                    Zp: "2029",
                    C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
                    Cc: "0000-001F007F-009F",
                    Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
                    Co: "E000-F8FF",
                    Cs: "D800-DFFF",
                    Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF",
                  });
              }
            ),
            ace.define(
              "ace/token_iterator",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i = function (t, e, n) {
                  (this.$session = t),
                    (this.$row = e),
                    (this.$rowTokens = t.getTokens(e));
                  var i = t.getTokenAt(e, n);
                  this.$tokenIndex = i ? i.index : -1;
                };
                (function () {
                  (this.stepBackward = function () {
                    for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
                      if (((this.$row -= 1), this.$row < 0))
                        return (this.$row = 0), null;
                      (this.$rowTokens = this.$session.getTokens(this.$row)),
                        (this.$tokenIndex = this.$rowTokens.length - 1);
                    }
                    return this.$rowTokens[this.$tokenIndex];
                  }),
                    (this.stepForward = function () {
                      var t;
                      for (
                        this.$tokenIndex += 1;
                        this.$tokenIndex >= this.$rowTokens.length;

                      ) {
                        if (
                          ((this.$row += 1),
                          t || (t = this.$session.getLength()),
                          this.$row >= t)
                        )
                          return (this.$row = t - 1), null;
                        (this.$rowTokens = this.$session.getTokens(this.$row)),
                          (this.$tokenIndex = 0);
                      }
                      return this.$rowTokens[this.$tokenIndex];
                    }),
                    (this.getCurrentToken = function () {
                      return this.$rowTokens[this.$tokenIndex];
                    }),
                    (this.getCurrentTokenRow = function () {
                      return this.$row;
                    }),
                    (this.getCurrentTokenColumn = function () {
                      var t = this.$rowTokens,
                        e = this.$tokenIndex,
                        n = t[e].start;
                      if (void 0 !== n) return n;
                      for (n = 0; e > 0; ) n += t[(e -= 1)].value.length;
                      return n;
                    }),
                    (this.getCurrentTokenPosition = function () {
                      return {
                        row: this.$row,
                        column: this.getCurrentTokenColumn(),
                      };
                    });
                }).call(i.prototype),
                  (e.TokenIterator = i);
              }
            ),
            ace.define(
              "ace/mode/text",
              [
                "require",
                "exports",
                "module",
                "ace/tokenizer",
                "ace/mode/text_highlight_rules",
                "ace/mode/behaviour",
                "ace/unicode",
                "ace/lib/lang",
                "ace/token_iterator",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../tokenizer").Tokenizer,
                  r = t("./text_highlight_rules").TextHighlightRules,
                  o = t("./behaviour").Behaviour,
                  a = t("../unicode"),
                  s = t("../lib/lang"),
                  l = t("../token_iterator").TokenIterator,
                  c = t("../range").Range,
                  d = function () {
                    (this.HighlightRules = r), (this.$behaviour = new o());
                  };
                (function () {
                  (this.tokenRe = new RegExp(
                    "^[" +
                      a.packages.L +
                      a.packages.Mn +
                      a.packages.Mc +
                      a.packages.Nd +
                      a.packages.Pc +
                      "\\$_]+",
                    "g"
                  )),
                    (this.nonTokenRe = new RegExp(
                      "^(?:[^" +
                        a.packages.L +
                        a.packages.Mn +
                        a.packages.Mc +
                        a.packages.Nd +
                        a.packages.Pc +
                        "\\$_]|\\s])+",
                      "g"
                    )),
                    (this.getTokenizer = function () {
                      return (
                        this.$tokenizer ||
                          ((this.$highlightRules =
                            this.$highlightRules || new this.HighlightRules()),
                          (this.$tokenizer = new i(
                            this.$highlightRules.getRules()
                          ))),
                        this.$tokenizer
                      );
                    }),
                    (this.lineCommentStart = ""),
                    (this.blockComment = ""),
                    (this.toggleCommentLines = function (t, e, n, i) {
                      var r = e.doc,
                        o = !0,
                        a = !0,
                        l = 1 / 0,
                        c = e.getTabSize(),
                        d = !1;
                      if (this.lineCommentStart) {
                        Array.isArray(this.lineCommentStart)
                          ? ((b = this.lineCommentStart
                              .map(s.escapeRegExp)
                              .join("|")),
                            (h = this.lineCommentStart[0]))
                          : ((b = s.escapeRegExp(this.lineCommentStart)),
                            (h = this.lineCommentStart)),
                          (b = new RegExp("^(\\s*)(?:" + b + ") ?")),
                          (d = e.getUseSoftTabs()),
                          (v = function (t, e) {
                            var n = t.match(b);
                            if (n) {
                              var i = n[1].length,
                                o = n[0].length;
                              p(t, i, o) || " " != n[0][o - 1] || o--,
                                r.removeInLine(e, i, o);
                            }
                          });
                        var u = h + " ",
                          p =
                            ((g = function (t, e) {
                              (o && !/\S/.test(t)) ||
                                (p(t, l, l)
                                  ? r.insertInLine({ row: e, column: l }, u)
                                  : r.insertInLine({ row: e, column: l }, h));
                            }),
                            (_ = function (t, e) {
                              return b.test(t);
                            }),
                            function (t, e, n) {
                              for (var i = 0; e-- && " " == t.charAt(e); ) i++;
                              if (i % c != 0) return !1;
                              for (i = 0; " " == t.charAt(n++); ) i++;
                              return c > 2 ? i % c != c - 1 : i % c == 0;
                            });
                      } else {
                        if (!this.blockComment) return !1;
                        var h = this.blockComment.start,
                          f = this.blockComment.end,
                          b = new RegExp(
                            "^(\\s*)(?:" + s.escapeRegExp(h) + ")"
                          ),
                          m = new RegExp("(?:" + s.escapeRegExp(f) + ")\\s*$"),
                          g = function (t, e) {
                            _(t, e) ||
                              (o && !/\S/.test(t)) ||
                              (r.insertInLine({ row: e, column: t.length }, f),
                              r.insertInLine({ row: e, column: l }, h));
                          },
                          v = function (t, e) {
                            var n;
                            (n = t.match(m)) &&
                              r.removeInLine(
                                e,
                                t.length - n[0].length,
                                t.length
                              ),
                              (n = t.match(b)) &&
                                r.removeInLine(e, n[1].length, n[0].length);
                          },
                          _ = function (t, n) {
                            if (b.test(t)) return !0;
                            for (
                              var i = e.getTokens(n), r = 0;
                              r < i.length;
                              r++
                            )
                              if ("comment" === i[r].type) return !0;
                          };
                      }
                      function y(t) {
                        for (var e = n; e <= i; e++) t(r.getLine(e), e);
                      }
                      var M = 1 / 0;
                      y(function (t, e) {
                        var n = t.search(/\S/);
                        -1 !== n
                          ? (n < l && (l = n), a && !_(t, e) && (a = !1))
                          : M > t.length && (M = t.length);
                      }),
                        l == 1 / 0 && ((l = M), (o = !1), (a = !1)),
                        d && l % c != 0 && (l = Math.floor(l / c) * c),
                        y(a ? v : g);
                    }),
                    (this.toggleBlockComment = function (t, e, n, i) {
                      var r = this.blockComment;
                      if (r) {
                        !r.start && r[0] && (r = r[0]);
                        var o,
                          a,
                          s = (b = new l(e, i.row, i.column)).getCurrentToken(),
                          d = (e.selection, e.selection.toOrientedRange());
                        if (s && /comment/.test(s.type)) {
                          for (var u, p; s && /comment/.test(s.type); ) {
                            if (-1 != (m = s.value.indexOf(r.start))) {
                              var h = b.getCurrentTokenRow(),
                                f = b.getCurrentTokenColumn() + m;
                              u = new c(h, f, h, f + r.start.length);
                              break;
                            }
                            s = b.stepBackward();
                          }
                          var b;
                          for (
                            s = (b = new l(
                              e,
                              i.row,
                              i.column
                            )).getCurrentToken();
                            s && /comment/.test(s.type);

                          ) {
                            var m;
                            if (-1 != (m = s.value.indexOf(r.end))) {
                              (h = b.getCurrentTokenRow()),
                                (f = b.getCurrentTokenColumn() + m),
                                (p = new c(h, f, h, f + r.end.length));
                              break;
                            }
                            s = b.stepForward();
                          }
                          p && e.remove(p),
                            u &&
                              (e.remove(u),
                              (o = u.start.row),
                              (a = -r.start.length));
                        } else
                          (a = r.start.length),
                            (o = n.start.row),
                            e.insert(n.end, r.end),
                            e.insert(n.start, r.start);
                        d.start.row == o && (d.start.column += a),
                          d.end.row == o && (d.end.column += a),
                          e.selection.fromOrientedRange(d);
                      }
                    }),
                    (this.getNextLineIndent = function (t, e, n) {
                      return this.$getIndent(e);
                    }),
                    (this.checkOutdent = function (t, e, n) {
                      return !1;
                    }),
                    (this.autoOutdent = function (t, e, n) {}),
                    (this.$getIndent = function (t) {
                      return t.match(/^\s*/)[0];
                    }),
                    (this.createWorker = function (t) {
                      return null;
                    }),
                    (this.createModeDelegates = function (t) {
                      for (var e in ((this.$embeds = []),
                      (this.$modes = {}),
                      t))
                        t[e] &&
                          (this.$embeds.push(e), (this.$modes[e] = new t[e]()));
                      var n = [
                        "toggleBlockComment",
                        "toggleCommentLines",
                        "getNextLineIndent",
                        "checkOutdent",
                        "autoOutdent",
                        "transformAction",
                        "getCompletions",
                      ];
                      for (e = 0; e < n.length; e++)
                        !(function (t) {
                          var i = n[e],
                            r = t[i];
                          t[n[e]] = function () {
                            return this.$delegator(i, arguments, r);
                          };
                        })(this);
                    }),
                    (this.$delegator = function (t, e, n) {
                      var i = e[0];
                      "string" != typeof i && (i = i[0]);
                      for (var r = 0; r < this.$embeds.length; r++)
                        if (this.$modes[this.$embeds[r]]) {
                          var o = i.split(this.$embeds[r]);
                          if (!o[0] && o[1]) {
                            e[0] = o[1];
                            var a = this.$modes[this.$embeds[r]];
                            return a[t].apply(a, e);
                          }
                        }
                      var s = n.apply(this, e);
                      return n ? s : void 0;
                    }),
                    (this.transformAction = function (t, e, n, i, r) {
                      if (this.$behaviour) {
                        var o = this.$behaviour.getBehaviours();
                        for (var a in o)
                          if (o[a][e]) {
                            var s = o[a][e].apply(this, arguments);
                            if (s) return s;
                          }
                      }
                    }),
                    (this.getKeywords = function (t) {
                      if (!this.completionKeywords) {
                        var e = this.$tokenizer.rules,
                          n = [];
                        for (var i in e)
                          for (var r = e[i], o = 0, a = r.length; o < a; o++)
                            if ("string" == typeof r[o].token)
                              /keyword|support|storage/.test(r[o].token) &&
                                n.push(r[o].regex);
                            else if ("object" == typeof r[o].token)
                              for (var s = 0, l = r[o].token.length; s < l; s++)
                                /keyword|support|storage/.test(r[o].token[s]) &&
                                  ((i = r[o].regex.match(/\(.+?\)/g)[s]),
                                  n.push(i.substr(1, i.length - 2)));
                        this.completionKeywords = n;
                      }
                      return t
                        ? n.concat(this.$keywordList || [])
                        : this.$keywordList;
                    }),
                    (this.$createKeywordList = function () {
                      return (
                        this.$highlightRules || this.getTokenizer(),
                        (this.$keywordList =
                          this.$highlightRules.$keywordList || [])
                      );
                    }),
                    (this.getCompletions = function (t, e, n, i) {
                      return (
                        this.$keywordList || this.$createKeywordList()
                      ).map(function (t) {
                        return { name: t, value: t, score: 0, meta: "keyword" };
                      });
                    }),
                    (this.$id = "ace/mode/text");
                }).call(d.prototype),
                  (e.Mode = d);
              }
            ),
            ace.define(
              "ace/apply_delta",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                e.applyDelta = function (t, e, n) {
                  var i = e.start.row,
                    r = e.start.column,
                    o = t[i] || "";
                  switch (e.action) {
                    case "insert":
                      if (1 === e.lines.length)
                        t[i] = o.substring(0, r) + e.lines[0] + o.substring(r);
                      else {
                        var a = [i, 1].concat(e.lines);
                        t.splice.apply(t, a),
                          (t[i] = o.substring(0, r) + t[i]),
                          (t[i + e.lines.length - 1] += o.substring(r));
                      }
                      break;
                    case "remove":
                      var s = e.end.column,
                        l = e.end.row;
                      i === l
                        ? (t[i] = o.substring(0, r) + o.substring(s))
                        : t.splice(
                            i,
                            l - i + 1,
                            o.substring(0, r) + t[l].substring(s)
                          );
                  }
                };
              }
            ),
            ace.define(
              "ace/anchor",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/event_emitter").EventEmitter,
                  o = (e.Anchor = function (t, e, n) {
                    (this.$onChange = this.onChange.bind(this)),
                      this.attach(t),
                      void 0 === n
                        ? this.setPosition(e.row, e.column)
                        : this.setPosition(e, n);
                  });
                (function () {
                  function t(t, e, n) {
                    var i = n ? t.column <= e.column : t.column < e.column;
                    return t.row < e.row || (t.row == e.row && i);
                  }
                  i.implement(this, r),
                    (this.getPosition = function () {
                      return this.$clipPositionToDocument(
                        this.row,
                        this.column
                      );
                    }),
                    (this.getDocument = function () {
                      return this.document;
                    }),
                    (this.$insertRight = !1),
                    (this.onChange = function (e) {
                      if (
                        !(
                          (e.start.row == e.end.row &&
                            e.start.row != this.row) ||
                          e.start.row > this.row
                        )
                      ) {
                        var n = (function (e, n, i) {
                          var r = "insert" == e.action,
                            o = (r ? 1 : -1) * (e.end.row - e.start.row),
                            a = (r ? 1 : -1) * (e.end.column - e.start.column),
                            s = e.start,
                            l = r ? s : e.end;
                          return t(n, s, i)
                            ? { row: n.row, column: n.column }
                            : t(l, n, !i)
                            ? {
                                row: n.row + o,
                                column: n.column + (n.row == l.row ? a : 0),
                              }
                            : { row: s.row, column: s.column };
                        })(
                          e,
                          { row: this.row, column: this.column },
                          this.$insertRight
                        );
                        this.setPosition(n.row, n.column, !0);
                      }
                    }),
                    (this.setPosition = function (t, e, n) {
                      var i;
                      if (
                        ((i = n
                          ? { row: t, column: e }
                          : this.$clipPositionToDocument(t, e)),
                        this.row != i.row || this.column != i.column)
                      ) {
                        var r = { row: this.row, column: this.column };
                        (this.row = i.row),
                          (this.column = i.column),
                          this._signal("change", { old: r, value: i });
                      }
                    }),
                    (this.detach = function () {
                      this.document.removeEventListener(
                        "change",
                        this.$onChange
                      );
                    }),
                    (this.attach = function (t) {
                      (this.document = t || this.document),
                        this.document.on("change", this.$onChange);
                    }),
                    (this.$clipPositionToDocument = function (t, e) {
                      var n = {};
                      return (
                        t >= this.document.getLength()
                          ? ((n.row = Math.max(
                              0,
                              this.document.getLength() - 1
                            )),
                            (n.column = this.document.getLine(n.row).length))
                          : t < 0
                          ? ((n.row = 0), (n.column = 0))
                          : ((n.row = t),
                            (n.column = Math.min(
                              this.document.getLine(n.row).length,
                              Math.max(0, e)
                            ))),
                        e < 0 && (n.column = 0),
                        n
                      );
                    });
                }).call(o.prototype);
              }
            ),
            ace.define(
              "ace/document",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/apply_delta",
                "ace/lib/event_emitter",
                "ace/range",
                "ace/anchor",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./apply_delta").applyDelta,
                  o = t("./lib/event_emitter").EventEmitter,
                  a = t("./range").Range,
                  s = t("./anchor").Anchor,
                  l = function (t) {
                    (this.$lines = [""]),
                      0 === t.length
                        ? (this.$lines = [""])
                        : Array.isArray(t)
                        ? this.insertMergedLines({ row: 0, column: 0 }, t)
                        : this.insert({ row: 0, column: 0 }, t);
                  };
                (function () {
                  i.implement(this, o),
                    (this.setValue = function (t) {
                      var e = this.getLength() - 1;
                      this.remove(new a(0, 0, e, this.getLine(e).length)),
                        this.insert({ row: 0, column: 0 }, t);
                    }),
                    (this.getValue = function () {
                      return this.getAllLines().join(
                        this.getNewLineCharacter()
                      );
                    }),
                    (this.createAnchor = function (t, e) {
                      return new s(this, t, e);
                    }),
                    0 === "aaa".split(/a/).length
                      ? (this.$split = function (t) {
                          return t.replace(/\r\n|\r/g, "\n").split("\n");
                        })
                      : (this.$split = function (t) {
                          return t.split(/\r\n|\r|\n/);
                        }),
                    (this.$detectNewLine = function (t) {
                      var e = t.match(/^.*?(\r\n|\r|\n)/m);
                      (this.$autoNewLine = e ? e[1] : "\n"),
                        this._signal("changeNewLineMode");
                    }),
                    (this.getNewLineCharacter = function () {
                      switch (this.$newLineMode) {
                        case "windows":
                          return "\r\n";
                        case "unix":
                          return "\n";
                        default:
                          return this.$autoNewLine || "\n";
                      }
                    }),
                    (this.$autoNewLine = ""),
                    (this.$newLineMode = "auto"),
                    (this.setNewLineMode = function (t) {
                      this.$newLineMode !== t &&
                        ((this.$newLineMode = t),
                        this._signal("changeNewLineMode"));
                    }),
                    (this.getNewLineMode = function () {
                      return this.$newLineMode;
                    }),
                    (this.isNewLine = function (t) {
                      return "\r\n" == t || "\r" == t || "\n" == t;
                    }),
                    (this.getLine = function (t) {
                      return this.$lines[t] || "";
                    }),
                    (this.getLines = function (t, e) {
                      return this.$lines.slice(t, e + 1);
                    }),
                    (this.getAllLines = function () {
                      return this.getLines(0, this.getLength());
                    }),
                    (this.getLength = function () {
                      return this.$lines.length;
                    }),
                    (this.getTextRange = function (t) {
                      return this.getLinesForRange(t).join(
                        this.getNewLineCharacter()
                      );
                    }),
                    (this.getLinesForRange = function (t) {
                      var e;
                      if (t.start.row === t.end.row)
                        e = [
                          this.getLine(t.start.row).substring(
                            t.start.column,
                            t.end.column
                          ),
                        ];
                      else {
                        (e = this.getLines(t.start.row, t.end.row))[0] = (
                          e[0] || ""
                        ).substring(t.start.column);
                        var n = e.length - 1;
                        t.end.row - t.start.row == n &&
                          (e[n] = e[n].substring(0, t.end.column));
                      }
                      return e;
                    }),
                    (this.insertLines = function (t, e) {
                      return this.insertFullLines(t, e);
                    }),
                    (this.removeLines = function (t, e) {
                      return this.removeFullLines(t, e);
                    }),
                    (this.insertNewLine = function (t) {
                      return this.insertMergedLines(t, ["", ""]);
                    }),
                    (this.insert = function (t, e) {
                      return (
                        this.getLength() <= 1 && this.$detectNewLine(e),
                        this.insertMergedLines(t, this.$split(e))
                      );
                    }),
                    (this.insertInLine = function (t, e) {
                      var n = this.clippedPos(t.row, t.column),
                        i = this.pos(t.row, t.column + e.length);
                      return (
                        this.applyDelta(
                          { start: n, end: i, action: "insert", lines: [e] },
                          !0
                        ),
                        this.clonePos(i)
                      );
                    }),
                    (this.clippedPos = function (t, e) {
                      var n = this.getLength();
                      void 0 === t
                        ? (t = n)
                        : t < 0
                        ? (t = 0)
                        : t >= n && ((t = n - 1), (e = void 0));
                      var i = this.getLine(t);
                      return (
                        null == e && (e = i.length),
                        {
                          row: t,
                          column: (e = Math.min(Math.max(e, 0), i.length)),
                        }
                      );
                    }),
                    (this.clonePos = function (t) {
                      return { row: t.row, column: t.column };
                    }),
                    (this.pos = function (t, e) {
                      return { row: t, column: e };
                    }),
                    (this.$clipPosition = function (t) {
                      var e = this.getLength();
                      return (
                        t.row >= e
                          ? ((t.row = Math.max(0, e - 1)),
                            (t.column = this.getLine(e - 1).length))
                          : ((t.row = Math.max(0, t.row)),
                            (t.column = Math.min(
                              Math.max(t.column, 0),
                              this.getLine(t.row).length
                            ))),
                        t
                      );
                    }),
                    (this.insertFullLines = function (t, e) {
                      var n = 0;
                      (t = Math.min(Math.max(t, 0), this.getLength())) <
                      this.getLength()
                        ? ((e = e.concat([""])), (n = 0))
                        : ((e = [""].concat(e)),
                          t--,
                          (n = this.$lines[t].length)),
                        this.insertMergedLines({ row: t, column: n }, e);
                    }),
                    (this.insertMergedLines = function (t, e) {
                      var n = this.clippedPos(t.row, t.column),
                        i = {
                          row: n.row + e.length - 1,
                          column:
                            (1 == e.length ? n.column : 0) +
                            e[e.length - 1].length,
                        };
                      return (
                        this.applyDelta({
                          start: n,
                          end: i,
                          action: "insert",
                          lines: e,
                        }),
                        this.clonePos(i)
                      );
                    }),
                    (this.remove = function (t) {
                      var e = this.clippedPos(t.start.row, t.start.column),
                        n = this.clippedPos(t.end.row, t.end.column);
                      return (
                        this.applyDelta({
                          start: e,
                          end: n,
                          action: "remove",
                          lines: this.getLinesForRange({ start: e, end: n }),
                        }),
                        this.clonePos(e)
                      );
                    }),
                    (this.removeInLine = function (t, e, n) {
                      var i = this.clippedPos(t, e),
                        r = this.clippedPos(t, n);
                      return (
                        this.applyDelta(
                          {
                            start: i,
                            end: r,
                            action: "remove",
                            lines: this.getLinesForRange({ start: i, end: r }),
                          },
                          !0
                        ),
                        this.clonePos(i)
                      );
                    }),
                    (this.removeFullLines = function (t, e) {
                      t = Math.min(Math.max(0, t), this.getLength() - 1);
                      var n =
                          (e = Math.min(
                            Math.max(0, e),
                            this.getLength() - 1
                          )) ==
                            this.getLength() - 1 && t > 0,
                        i = e < this.getLength() - 1,
                        r = n ? t - 1 : t,
                        o = n ? this.getLine(r).length : 0,
                        s = i ? e + 1 : e,
                        l = i ? 0 : this.getLine(s).length,
                        c = new a(r, o, s, l),
                        d = this.$lines.slice(t, e + 1);
                      return (
                        this.applyDelta({
                          start: c.start,
                          end: c.end,
                          action: "remove",
                          lines: this.getLinesForRange(c),
                        }),
                        d
                      );
                    }),
                    (this.removeNewLine = function (t) {
                      t < this.getLength() - 1 &&
                        t >= 0 &&
                        this.applyDelta({
                          start: this.pos(t, this.getLine(t).length),
                          end: this.pos(t + 1, 0),
                          action: "remove",
                          lines: ["", ""],
                        });
                    }),
                    (this.replace = function (t, e) {
                      return (
                        t instanceof a || (t = a.fromPoints(t.start, t.end)),
                        0 === e.length && t.isEmpty()
                          ? t.start
                          : e == this.getTextRange(t)
                          ? t.end
                          : (this.remove(t),
                            e ? this.insert(t.start, e) : t.start)
                      );
                    }),
                    (this.applyDeltas = function (t) {
                      for (var e = 0; e < t.length; e++) this.applyDelta(t[e]);
                    }),
                    (this.revertDeltas = function (t) {
                      for (var e = t.length - 1; e >= 0; e--)
                        this.revertDelta(t[e]);
                    }),
                    (this.applyDelta = function (t, e) {
                      var n = "insert" == t.action;
                      (n
                        ? t.lines.length <= 1 && !t.lines[0]
                        : !a.comparePoints(t.start, t.end)) ||
                        (n &&
                          t.lines.length > 2e4 &&
                          this.$splitAndapplyLargeDelta(t, 2e4),
                        r(this.$lines, t, e),
                        this._signal("change", t));
                    }),
                    (this.$splitAndapplyLargeDelta = function (t, e) {
                      for (
                        var n = t.lines,
                          i = n.length,
                          r = t.start.row,
                          o = t.start.column,
                          a = 0,
                          s = 0;
                        ;

                      ) {
                        (a = s), (s += e - 1);
                        var l = n.slice(a, s);
                        if (s > i) {
                          (t.lines = l),
                            (t.start.row = r + a),
                            (t.start.column = o);
                          break;
                        }
                        l.push(""),
                          this.applyDelta(
                            {
                              start: this.pos(r + a, o),
                              end: this.pos(r + s, (o = 0)),
                              action: t.action,
                              lines: l,
                            },
                            !0
                          );
                      }
                    }),
                    (this.revertDelta = function (t) {
                      this.applyDelta({
                        start: this.clonePos(t.start),
                        end: this.clonePos(t.end),
                        action: "insert" == t.action ? "remove" : "insert",
                        lines: t.lines.slice(),
                      });
                    }),
                    (this.indexToPosition = function (t, e) {
                      for (
                        var n = this.$lines || this.getAllLines(),
                          i = this.getNewLineCharacter().length,
                          r = e || 0,
                          o = n.length;
                        r < o;
                        r++
                      )
                        if ((t -= n[r].length + i) < 0)
                          return { row: r, column: t + n[r].length + i };
                      return { row: o - 1, column: n[o - 1].length };
                    }),
                    (this.positionToIndex = function (t, e) {
                      for (
                        var n = this.$lines || this.getAllLines(),
                          i = this.getNewLineCharacter().length,
                          r = 0,
                          o = Math.min(t.row, n.length),
                          a = e || 0;
                        a < o;
                        ++a
                      )
                        r += n[a].length + i;
                      return r + t.column;
                    });
                }).call(l.prototype),
                  (e.Document = l);
              }
            ),
            ace.define(
              "ace/background_tokenizer",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/event_emitter").EventEmitter,
                  o = function (t, e) {
                    (this.running = !1),
                      (this.lines = []),
                      (this.states = []),
                      (this.currentLine = 0),
                      (this.tokenizer = t);
                    var n = this;
                    this.$worker = function () {
                      if (n.running) {
                        for (
                          var t = new Date(),
                            e = n.currentLine,
                            i = -1,
                            r = n.doc,
                            o = e;
                          n.lines[e];

                        )
                          e++;
                        var a = r.getLength(),
                          s = 0;
                        for (n.running = !1; e < a; ) {
                          n.$tokenizeRow(e), (i = e);
                          do {
                            e++;
                          } while (n.lines[e]);
                          if (++s % 5 == 0 && new Date() - t > 20) {
                            n.running = setTimeout(n.$worker, 20);
                            break;
                          }
                        }
                        (n.currentLine = e), o <= i && n.fireUpdateEvent(o, i);
                      }
                    };
                  };
                (function () {
                  i.implement(this, r),
                    (this.setTokenizer = function (t) {
                      (this.tokenizer = t),
                        (this.lines = []),
                        (this.states = []),
                        this.start(0);
                    }),
                    (this.setDocument = function (t) {
                      (this.doc = t),
                        (this.lines = []),
                        (this.states = []),
                        this.stop();
                    }),
                    (this.fireUpdateEvent = function (t, e) {
                      var n = { first: t, last: e };
                      this._signal("update", { data: n });
                    }),
                    (this.start = function (t) {
                      (this.currentLine = Math.min(
                        t || 0,
                        this.currentLine,
                        this.doc.getLength()
                      )),
                        this.lines.splice(this.currentLine, this.lines.length),
                        this.states.splice(
                          this.currentLine,
                          this.states.length
                        ),
                        this.stop(),
                        (this.running = setTimeout(this.$worker, 700));
                    }),
                    (this.scheduleStart = function () {
                      this.running ||
                        (this.running = setTimeout(this.$worker, 700));
                    }),
                    (this.$updateOnChange = function (t) {
                      var e = t.start.row,
                        n = t.end.row - e;
                      if (0 === n) this.lines[e] = null;
                      else if ("remove" == t.action)
                        this.lines.splice(e, n + 1, null),
                          this.states.splice(e, n + 1, null);
                      else {
                        var i = Array(n + 1);
                        i.unshift(e, 1),
                          this.lines.splice.apply(this.lines, i),
                          this.states.splice.apply(this.states, i);
                      }
                      (this.currentLine = Math.min(
                        e,
                        this.currentLine,
                        this.doc.getLength()
                      )),
                        this.stop();
                    }),
                    (this.stop = function () {
                      this.running && clearTimeout(this.running),
                        (this.running = !1);
                    }),
                    (this.getTokens = function (t) {
                      return this.lines[t] || this.$tokenizeRow(t);
                    }),
                    (this.getState = function (t) {
                      return (
                        this.currentLine == t && this.$tokenizeRow(t),
                        this.states[t] || "start"
                      );
                    }),
                    (this.$tokenizeRow = function (t) {
                      var e = this.doc.getLine(t),
                        n = this.states[t - 1],
                        i = this.tokenizer.getLineTokens(e, n, t);
                      return (
                        this.states[t] + "" != i.state + ""
                          ? ((this.states[t] = i.state),
                            (this.lines[t + 1] = null),
                            this.currentLine > t + 1 &&
                              (this.currentLine = t + 1))
                          : this.currentLine == t && (this.currentLine = t + 1),
                        (this.lines[t] = i.tokens)
                      );
                    });
                }).call(o.prototype),
                  (e.BackgroundTokenizer = o);
              }
            ),
            ace.define(
              "ace/search_highlight",
              [
                "require",
                "exports",
                "module",
                "ace/lib/lang",
                "ace/lib/oop",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/lang"),
                  r = (t("./lib/oop"), t("./range").Range),
                  o = function (t, e, n) {
                    this.setRegexp(t),
                      (this.clazz = e),
                      (this.type = n || "text");
                  };
                (function () {
                  (this.MAX_RANGES = 500),
                    (this.setRegexp = function (t) {
                      this.regExp + "" != t + "" &&
                        ((this.regExp = t), (this.cache = []));
                    }),
                    (this.update = function (t, e, n, o) {
                      if (this.regExp)
                        for (
                          var a = o.firstRow, s = o.lastRow, l = a;
                          l <= s;
                          l++
                        ) {
                          var c = this.cache[l];
                          null == c &&
                            ((c = i.getMatchOffsets(n.getLine(l), this.regExp))
                              .length > this.MAX_RANGES &&
                              (c = c.slice(0, this.MAX_RANGES)),
                            (c = c.map(function (t) {
                              return new r(l, t.offset, l, t.offset + t.length);
                            })),
                            (this.cache[l] = c.length ? c : ""));
                          for (var d = c.length; d--; )
                            e.drawSingleLineMarker(
                              t,
                              c[d].toScreenRange(n),
                              this.clazz,
                              o
                            );
                        }
                    });
                }).call(o.prototype),
                  (e.SearchHighlight = o);
              }
            ),
            ace.define(
              "ace/edit_session/fold_line",
              ["require", "exports", "module", "ace/range"],
              function (t, e, n) {
                "use strict";
                var i = t("../range").Range;
                function r(t, e) {
                  (this.foldData = t),
                    Array.isArray(e)
                      ? (this.folds = e)
                      : (e = this.folds = [e]);
                  var n = e[e.length - 1];
                  (this.range = new i(
                    e[0].start.row,
                    e[0].start.column,
                    n.end.row,
                    n.end.column
                  )),
                    (this.start = this.range.start),
                    (this.end = this.range.end),
                    this.folds.forEach(function (t) {
                      t.setFoldLine(this);
                    }, this);
                }
                (function () {
                  (this.shiftRow = function (t) {
                    (this.start.row += t),
                      (this.end.row += t),
                      this.folds.forEach(function (e) {
                        (e.start.row += t), (e.end.row += t);
                      });
                  }),
                    (this.addFold = function (t) {
                      if (t.sameRow) {
                        if (
                          t.start.row < this.startRow ||
                          t.endRow > this.endRow
                        )
                          throw new Error(
                            "Can't add a fold to this FoldLine as it has no connection"
                          );
                        this.folds.push(t),
                          this.folds.sort(function (t, e) {
                            return -t.range.compareEnd(
                              e.start.row,
                              e.start.column
                            );
                          }),
                          this.range.compareEnd(t.start.row, t.start.column) > 0
                            ? ((this.end.row = t.end.row),
                              (this.end.column = t.end.column))
                            : this.range.compareStart(t.end.row, t.end.column) <
                                0 &&
                              ((this.start.row = t.start.row),
                              (this.start.column = t.start.column));
                      } else if (t.start.row == this.end.row)
                        this.folds.push(t),
                          (this.end.row = t.end.row),
                          (this.end.column = t.end.column);
                      else {
                        if (t.end.row != this.start.row)
                          throw new Error(
                            "Trying to add fold to FoldRow that doesn't have a matching row"
                          );
                        this.folds.unshift(t),
                          (this.start.row = t.start.row),
                          (this.start.column = t.start.column);
                      }
                      t.foldLine = this;
                    }),
                    (this.containsRow = function (t) {
                      return t >= this.start.row && t <= this.end.row;
                    }),
                    (this.walk = function (t, e, n) {
                      var i,
                        r,
                        o = 0,
                        a = this.folds,
                        s = !0;
                      null == e && ((e = this.end.row), (n = this.end.column));
                      for (var l = 0; l < a.length; l++) {
                        if (-1 == (r = (i = a[l]).range.compareStart(e, n)))
                          return void t(null, e, n, o, s);
                        if (
                          (!t(null, i.start.row, i.start.column, o, s) &&
                            t(i.placeholder, i.start.row, i.start.column, o)) ||
                          0 === r
                        )
                          return;
                        (s = !i.sameRow), (o = i.end.column);
                      }
                      t(null, e, n, o, s);
                    }),
                    (this.getNextFoldTo = function (t, e) {
                      for (var n, i, r = 0; r < this.folds.length; r++) {
                        if (
                          -1 == (i = (n = this.folds[r]).range.compareEnd(t, e))
                        )
                          return { fold: n, kind: "after" };
                        if (0 === i) return { fold: n, kind: "inside" };
                      }
                      return null;
                    }),
                    (this.addRemoveChars = function (t, e, n) {
                      var i,
                        r,
                        o = this.getNextFoldTo(t, e);
                      if (o)
                        if (
                          ((i = o.fold),
                          "inside" == o.kind &&
                            i.start.column != e &&
                            i.start.row != t)
                        )
                          window.console && window.console.log(t, e, i);
                        else if (i.start.row == t) {
                          var a = (r = this.folds).indexOf(i);
                          for (
                            0 === a && (this.start.column += n);
                            a < r.length;
                            a++
                          ) {
                            if ((((i = r[a]).start.column += n), !i.sameRow))
                              return;
                            i.end.column += n;
                          }
                          this.end.column += n;
                        }
                    }),
                    (this.split = function (t, e) {
                      var n = this.getNextFoldTo(t, e);
                      if (!n || "inside" == n.kind) return null;
                      var i = n.fold,
                        o = this.folds,
                        a = this.foldData,
                        s = o.indexOf(i),
                        l = o[s - 1];
                      (this.end.row = l.end.row),
                        (this.end.column = l.end.column);
                      var c = new r(a, (o = o.splice(s, o.length - s)));
                      return a.splice(a.indexOf(this) + 1, 0, c), c;
                    }),
                    (this.merge = function (t) {
                      for (var e = t.folds, n = 0; n < e.length; n++)
                        this.addFold(e[n]);
                      var i = this.foldData;
                      i.splice(i.indexOf(t), 1);
                    }),
                    (this.toString = function () {
                      var t = [this.range.toString() + ": ["];
                      return (
                        this.folds.forEach(function (e) {
                          t.push("  " + e.toString());
                        }),
                        t.push("]"),
                        t.join("\n")
                      );
                    }),
                    (this.idxToPosition = function (t) {
                      for (var e = 0, n = 0; n < this.folds.length; n++) {
                        var i = this.folds[n];
                        if ((t -= i.start.column - e) < 0)
                          return {
                            row: i.start.row,
                            column: i.start.column + t,
                          };
                        if ((t -= i.placeholder.length) < 0) return i.start;
                        e = i.end.column;
                      }
                      return { row: this.end.row, column: this.end.column + t };
                    });
                }).call(r.prototype),
                  (e.FoldLine = r);
              }
            ),
            ace.define(
              "ace/range_list",
              ["require", "exports", "module", "ace/range"],
              function (t, e, n) {
                "use strict";
                var i = t("./range").Range.comparePoints,
                  r = function () {
                    this.ranges = [];
                  };
                (function () {
                  (this.comparePoints = i),
                    (this.pointIndex = function (t, e, n) {
                      for (var r = this.ranges, o = n || 0; o < r.length; o++) {
                        var a = r[o],
                          s = i(t, a.end);
                        if (!(s > 0)) {
                          var l = i(t, a.start);
                          return 0 === s
                            ? e && 0 !== l
                              ? -o - 2
                              : o
                            : l > 0 || (0 === l && !e)
                            ? o
                            : -o - 1;
                        }
                      }
                      return -o - 1;
                    }),
                    (this.add = function (t) {
                      var e = !t.isEmpty(),
                        n = this.pointIndex(t.start, e);
                      n < 0 && (n = -n - 1);
                      var i = this.pointIndex(t.end, e, n);
                      return (
                        i < 0 ? (i = -i - 1) : i++,
                        this.ranges.splice(n, i - n, t)
                      );
                    }),
                    (this.addList = function (t) {
                      for (var e = [], n = t.length; n--; )
                        e.push.apply(e, this.add(t[n]));
                      return e;
                    }),
                    (this.substractPoint = function (t) {
                      var e = this.pointIndex(t);
                      if (e >= 0) return this.ranges.splice(e, 1);
                    }),
                    (this.merge = function () {
                      for (
                        var t,
                          e = [],
                          n = this.ranges,
                          r = (n = n.sort(function (t, e) {
                            return i(t.start, e.start);
                          }))[0],
                          o = 1;
                        o < n.length;
                        o++
                      ) {
                        (t = r), (r = n[o]);
                        var a = i(t.end, r.start);
                        a < 0 ||
                          ((0 != a || t.isEmpty() || r.isEmpty()) &&
                            (i(t.end, r.end) < 0 &&
                              ((t.end.row = r.end.row),
                              (t.end.column = r.end.column)),
                            n.splice(o, 1),
                            e.push(r),
                            (r = t),
                            o--));
                      }
                      return (this.ranges = n), e;
                    }),
                    (this.contains = function (t, e) {
                      return this.pointIndex({ row: t, column: e }) >= 0;
                    }),
                    (this.containsPoint = function (t) {
                      return this.pointIndex(t) >= 0;
                    }),
                    (this.rangeAtPoint = function (t) {
                      var e = this.pointIndex(t);
                      if (e >= 0) return this.ranges[e];
                    }),
                    (this.clipRows = function (t, e) {
                      var n = this.ranges;
                      if (n[0].start.row > e || n[n.length - 1].start.row < t)
                        return [];
                      var i = this.pointIndex({ row: t, column: 0 });
                      i < 0 && (i = -i - 1);
                      var r = this.pointIndex({ row: e, column: 0 }, i);
                      r < 0 && (r = -r - 1);
                      for (var o = [], a = i; a < r; a++) o.push(n[a]);
                      return o;
                    }),
                    (this.removeAll = function () {
                      return this.ranges.splice(0, this.ranges.length);
                    }),
                    (this.attach = function (t) {
                      this.session && this.detach(),
                        (this.session = t),
                        (this.onChange = this.$onChange.bind(this)),
                        this.session.on("change", this.onChange);
                    }),
                    (this.detach = function () {
                      this.session &&
                        (this.session.removeListener("change", this.onChange),
                        (this.session = null));
                    }),
                    (this.$onChange = function (t) {
                      if ("insert" == t.action)
                        var e = t.start,
                          n = t.end;
                      else (n = t.start), (e = t.end);
                      for (
                        var i = e.row,
                          r = n.row - i,
                          o = -e.column + n.column,
                          a = this.ranges,
                          s = 0,
                          l = a.length;
                        s < l;
                        s++
                      )
                        if (!((c = a[s]).end.row < i)) {
                          if (c.start.row > i) break;
                          if (
                            (c.start.row == i &&
                              c.start.column >= e.column &&
                              ((c.start.column == e.column &&
                                this.$insertRight) ||
                                ((c.start.column += o), (c.start.row += r))),
                            c.end.row == i && c.end.column >= e.column)
                          ) {
                            if (c.end.column == e.column && this.$insertRight)
                              continue;
                            c.end.column == e.column &&
                              o > 0 &&
                              s < l - 1 &&
                              c.end.column > c.start.column &&
                              c.end.column == a[s + 1].start.column &&
                              (c.end.column -= o),
                              (c.end.column += o),
                              (c.end.row += r);
                          }
                        }
                      if (0 != r && s < l)
                        for (; s < l; s++) {
                          var c;
                          ((c = a[s]).start.row += r), (c.end.row += r);
                        }
                    });
                }).call(r.prototype),
                  (e.RangeList = r);
              }
            ),
            ace.define(
              "ace/edit_session/fold",
              [
                "require",
                "exports",
                "module",
                "ace/range",
                "ace/range_list",
                "ace/lib/oop",
              ],
              function (t, e, n) {
                "use strict";
                t("../range").Range;
                var i = t("../range_list").RangeList,
                  r = t("../lib/oop"),
                  o = (e.Fold = function (t, e) {
                    (this.foldLine = null),
                      (this.placeholder = e),
                      (this.range = t),
                      (this.start = t.start),
                      (this.end = t.end),
                      (this.sameRow = t.start.row == t.end.row),
                      (this.subFolds = this.ranges = []);
                  });
                function a(t, e) {
                  (t.row -= e.row), 0 == t.row && (t.column -= e.column);
                }
                function s(t, e) {
                  0 == t.row && (t.column += e.column), (t.row += e.row);
                }
                r.inherits(o, i),
                  function () {
                    (this.toString = function () {
                      return (
                        '"' + this.placeholder + '" ' + this.range.toString()
                      );
                    }),
                      (this.setFoldLine = function (t) {
                        (this.foldLine = t),
                          this.subFolds.forEach(function (e) {
                            e.setFoldLine(t);
                          });
                      }),
                      (this.clone = function () {
                        var t = this.range.clone(),
                          e = new o(t, this.placeholder);
                        return (
                          this.subFolds.forEach(function (t) {
                            e.subFolds.push(t.clone());
                          }),
                          (e.collapseChildren = this.collapseChildren),
                          e
                        );
                      }),
                      (this.addSubFold = function (t) {
                        if (!this.range.isEqual(t)) {
                          if (!this.range.containsRange(t))
                            throw new Error(
                              "A fold can't intersect already existing fold" +
                                t.range +
                                this.range
                            );
                          var e, n;
                          (e = t), (n = this.start), a(e.start, n), a(e.end, n);
                          for (
                            var i = t.start.row,
                              r = t.start.column,
                              o = 0,
                              s = -1;
                            o < this.subFolds.length &&
                            1 == (s = this.subFolds[o].range.compare(i, r));
                            o++
                          );
                          var l = this.subFolds[o];
                          if (0 == s) return l.addSubFold(t);
                          (i = t.range.end.row), (r = t.range.end.column);
                          var c = o;
                          for (
                            s = -1;
                            c < this.subFolds.length &&
                            1 == (s = this.subFolds[c].range.compare(i, r));
                            c++
                          );
                          if ((this.subFolds[c], 0 == s))
                            throw new Error(
                              "A fold can't intersect already existing fold" +
                                t.range +
                                this.range
                            );
                          return (
                            this.subFolds.splice(o, c - o, t),
                            t.setFoldLine(this.foldLine),
                            t
                          );
                        }
                      }),
                      (this.restoreRange = function (t) {
                        return (function (t, e) {
                          s(t.start, e), s(t.end, e);
                        })(t, this.start);
                      });
                  }.call(o.prototype);
              }
            ),
            ace.define(
              "ace/edit_session/folding",
              [
                "require",
                "exports",
                "module",
                "ace/range",
                "ace/edit_session/fold_line",
                "ace/edit_session/fold",
                "ace/token_iterator",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../range").Range,
                  r = t("./fold_line").FoldLine,
                  o = t("./fold").Fold,
                  a = t("../token_iterator").TokenIterator;
                e.Folding = function () {
                  (this.getFoldAt = function (t, e, n) {
                    var i = this.getFoldLine(t);
                    if (!i) return null;
                    for (var r = i.folds, o = 0; o < r.length; o++) {
                      var a = r[o];
                      if (a.range.contains(t, e)) {
                        if (1 == n && a.range.isEnd(t, e)) continue;
                        if (-1 == n && a.range.isStart(t, e)) continue;
                        return a;
                      }
                    }
                  }),
                    (this.getFoldsInRange = function (t) {
                      var e = t.start,
                        n = t.end,
                        i = this.$foldData,
                        r = [];
                      (e.column += 1), (n.column -= 1);
                      for (var o = 0; o < i.length; o++) {
                        var a = i[o].range.compareRange(t);
                        if (2 != a) {
                          if (-2 == a) break;
                          for (var s = i[o].folds, l = 0; l < s.length; l++) {
                            var c = s[l];
                            if (-2 == (a = c.range.compareRange(t))) break;
                            if (2 != a) {
                              if (42 == a) break;
                              r.push(c);
                            }
                          }
                        }
                      }
                      return (e.column -= 1), (n.column += 1), r;
                    }),
                    (this.getFoldsInRangeList = function (t) {
                      if (Array.isArray(t)) {
                        var e = [];
                        t.forEach(function (t) {
                          e = e.concat(this.getFoldsInRange(t));
                        }, this);
                      } else e = this.getFoldsInRange(t);
                      return e;
                    }),
                    (this.getAllFolds = function () {
                      for (
                        var t = [], e = this.$foldData, n = 0;
                        n < e.length;
                        n++
                      )
                        for (var i = 0; i < e[n].folds.length; i++)
                          t.push(e[n].folds[i]);
                      return t;
                    }),
                    (this.getFoldStringAt = function (t, e, n, i) {
                      if (!(i = i || this.getFoldLine(t))) return null;
                      for (
                        var r, o, a = { end: { column: 0 } }, s = 0;
                        s < i.folds.length;
                        s++
                      ) {
                        var l = (o = i.folds[s]).range.compareEnd(t, e);
                        if (-1 == l) {
                          r = this.getLine(o.start.row).substring(
                            a.end.column,
                            o.start.column
                          );
                          break;
                        }
                        if (0 === l) return null;
                        a = o;
                      }
                      return (
                        r ||
                          (r = this.getLine(o.start.row).substring(
                            a.end.column
                          )),
                        -1 == n
                          ? r.substring(0, e - a.end.column)
                          : 1 == n
                          ? r.substring(e - a.end.column)
                          : r
                      );
                    }),
                    (this.getFoldLine = function (t, e) {
                      var n = this.$foldData,
                        i = 0;
                      for (
                        e && (i = n.indexOf(e)), -1 == i && (i = 0);
                        i < n.length;
                        i++
                      ) {
                        var r = n[i];
                        if (r.start.row <= t && r.end.row >= t) return r;
                        if (r.end.row > t) return null;
                      }
                      return null;
                    }),
                    (this.getNextFoldLine = function (t, e) {
                      var n = this.$foldData,
                        i = 0;
                      for (
                        e && (i = n.indexOf(e)), -1 == i && (i = 0);
                        i < n.length;
                        i++
                      ) {
                        var r = n[i];
                        if (r.end.row >= t) return r;
                      }
                      return null;
                    }),
                    (this.getFoldedRowCount = function (t, e) {
                      for (
                        var n = this.$foldData, i = e - t + 1, r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = n[r],
                          a = o.end.row,
                          s = o.start.row;
                        if (a >= e) {
                          s < e && (s >= t ? (i -= e - s) : (i = 0));
                          break;
                        }
                        a >= t && (i -= s >= t ? a - s : a - t + 1);
                      }
                      return i;
                    }),
                    (this.$addFoldLine = function (t) {
                      return (
                        this.$foldData.push(t),
                        this.$foldData.sort(function (t, e) {
                          return t.start.row - e.start.row;
                        }),
                        t
                      );
                    }),
                    (this.addFold = function (t, e) {
                      var n,
                        i = this.$foldData,
                        a = !1;
                      t instanceof o
                        ? (n = t)
                        : ((n = new o(e, t)).collapseChildren =
                            e.collapseChildren),
                        this.$clipRangeToDocument(n.range);
                      var s = n.start.row,
                        l = n.start.column,
                        c = n.end.row,
                        d = n.end.column;
                      if (!(s < c || (s == c && l <= d - 2)))
                        throw new Error(
                          "The range has to be at least 2 characters width"
                        );
                      var u = this.getFoldAt(s, l, 1),
                        p = this.getFoldAt(c, d, -1);
                      if (u && p == u) return u.addSubFold(n);
                      u && !u.range.isStart(s, l) && this.removeFold(u),
                        p && !p.range.isEnd(c, d) && this.removeFold(p);
                      var h = this.getFoldsInRange(n.range);
                      h.length > 0 &&
                        (this.removeFolds(h),
                        h.forEach(function (t) {
                          n.addSubFold(t);
                        }));
                      for (var f = 0; f < i.length; f++) {
                        var b = i[f];
                        if (c == b.start.row) {
                          b.addFold(n), (a = !0);
                          break;
                        }
                        if (s == b.end.row) {
                          if ((b.addFold(n), (a = !0), !n.sameRow)) {
                            var m = i[f + 1];
                            if (m && m.start.row == c) {
                              b.merge(m);
                              break;
                            }
                          }
                          break;
                        }
                        if (c <= b.start.row) break;
                      }
                      return (
                        a || (b = this.$addFoldLine(new r(this.$foldData, n))),
                        this.$useWrapMode
                          ? this.$updateWrapData(b.start.row, b.start.row)
                          : this.$updateRowLengthCache(
                              b.start.row,
                              b.start.row
                            ),
                        (this.$modified = !0),
                        this._signal("changeFold", { data: n, action: "add" }),
                        n
                      );
                    }),
                    (this.addFolds = function (t) {
                      t.forEach(function (t) {
                        this.addFold(t);
                      }, this);
                    }),
                    (this.removeFold = function (t) {
                      var e = t.foldLine,
                        n = e.start.row,
                        i = e.end.row,
                        r = this.$foldData,
                        o = e.folds;
                      if (1 == o.length) r.splice(r.indexOf(e), 1);
                      else if (e.range.isEnd(t.end.row, t.end.column))
                        o.pop(),
                          (e.end.row = o[o.length - 1].end.row),
                          (e.end.column = o[o.length - 1].end.column);
                      else if (e.range.isStart(t.start.row, t.start.column))
                        o.shift(),
                          (e.start.row = o[0].start.row),
                          (e.start.column = o[0].start.column);
                      else if (t.sameRow) o.splice(o.indexOf(t), 1);
                      else {
                        var a = e.split(t.start.row, t.start.column);
                        (o = a.folds).shift(),
                          (a.start.row = o[0].start.row),
                          (a.start.column = o[0].start.column);
                      }
                      this.$updating ||
                        (this.$useWrapMode
                          ? this.$updateWrapData(n, i)
                          : this.$updateRowLengthCache(n, i)),
                        (this.$modified = !0),
                        this._signal("changeFold", {
                          data: t,
                          action: "remove",
                        });
                    }),
                    (this.removeFolds = function (t) {
                      for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
                      e.forEach(function (t) {
                        this.removeFold(t);
                      }, this),
                        (this.$modified = !0);
                    }),
                    (this.expandFold = function (t) {
                      this.removeFold(t),
                        t.subFolds.forEach(function (e) {
                          t.restoreRange(e), this.addFold(e);
                        }, this),
                        t.collapseChildren > 0 &&
                          this.foldAll(
                            t.start.row + 1,
                            t.end.row,
                            t.collapseChildren - 1
                          ),
                        (t.subFolds = []);
                    }),
                    (this.expandFolds = function (t) {
                      t.forEach(function (t) {
                        this.expandFold(t);
                      }, this);
                    }),
                    (this.unfold = function (t, e) {
                      var n, r;
                      if (
                        (null == t
                          ? ((n = new i(0, 0, this.getLength(), 0)), (e = !0))
                          : (n =
                              "number" == typeof t
                                ? new i(t, 0, t, this.getLine(t).length)
                                : "row" in t
                                ? i.fromPoints(t, t)
                                : t),
                        (r = this.getFoldsInRangeList(n)),
                        e)
                      )
                        this.removeFolds(r);
                      else
                        for (var o = r; o.length; )
                          this.expandFolds(o),
                            (o = this.getFoldsInRangeList(n));
                      if (r.length) return r;
                    }),
                    (this.isRowFolded = function (t, e) {
                      return !!this.getFoldLine(t, e);
                    }),
                    (this.getRowFoldEnd = function (t, e) {
                      var n = this.getFoldLine(t, e);
                      return n ? n.end.row : t;
                    }),
                    (this.getRowFoldStart = function (t, e) {
                      var n = this.getFoldLine(t, e);
                      return n ? n.start.row : t;
                    }),
                    (this.getFoldDisplayLine = function (t, e, n, i, r) {
                      null == i && (i = t.start.row),
                        null == r && (r = 0),
                        null == e && (e = t.end.row),
                        null == n && (n = this.getLine(e).length);
                      var o = this.doc,
                        a = "";
                      return (
                        t.walk(
                          function (t, e, n, s) {
                            if (!(e < i)) {
                              if (e == i) {
                                if (n < r) return;
                                s = Math.max(r, s);
                              }
                              a += null != t ? t : o.getLine(e).substring(s, n);
                            }
                          },
                          e,
                          n
                        ),
                        a
                      );
                    }),
                    (this.getDisplayLine = function (t, e, n, i) {
                      var r,
                        o = this.getFoldLine(t);
                      return o
                        ? this.getFoldDisplayLine(o, t, e, n, i)
                        : (r = this.doc.getLine(t)).substring(
                            i || 0,
                            e || r.length
                          );
                    }),
                    (this.$cloneFoldData = function () {
                      var t = [];
                      return (t = this.$foldData.map(function (e) {
                        var n = e.folds.map(function (t) {
                          return t.clone();
                        });
                        return new r(t, n);
                      }));
                    }),
                    (this.toggleFold = function (t) {
                      var e,
                        n,
                        i = this.selection.getRange();
                      if (i.isEmpty()) {
                        var r = i.start;
                        if ((e = this.getFoldAt(r.row, r.column)))
                          return void this.expandFold(e);
                        (n = this.findMatchingBracket(r))
                          ? 1 == i.comparePoint(n)
                            ? (i.end = n)
                            : ((i.start = n), i.start.column++, i.end.column--)
                          : (n = this.findMatchingBracket({
                              row: r.row,
                              column: r.column + 1,
                            }))
                          ? (1 == i.comparePoint(n)
                              ? (i.end = n)
                              : (i.start = n),
                            i.start.column++)
                          : (i =
                              this.getCommentFoldRange(r.row, r.column) || i);
                      } else {
                        var o = this.getFoldsInRange(i);
                        if (t && o.length) return void this.expandFolds(o);
                        1 == o.length && (e = o[0]);
                      }
                      if (
                        (e || (e = this.getFoldAt(i.start.row, i.start.column)),
                        e && e.range.toString() == i.toString())
                      )
                        this.expandFold(e);
                      else {
                        var a = "...";
                        if (!i.isMultiLine()) {
                          if ((a = this.getTextRange(i)).length < 4) return;
                          a = a.trim().substring(0, 2) + "..";
                        }
                        this.addFold(a, i);
                      }
                    }),
                    (this.getCommentFoldRange = function (t, e, n) {
                      var r = new a(this, t, e),
                        o = r.getCurrentToken();
                      if (o && /^comment|string/.test(o.type)) {
                        var s = new i(),
                          l = new RegExp(o.type.replace(/\..*/, "\\."));
                        if (1 != n) {
                          do {
                            o = r.stepBackward();
                          } while (o && l.test(o.type));
                          r.stepForward();
                        }
                        if (
                          ((s.start.row = r.getCurrentTokenRow()),
                          (s.start.column = r.getCurrentTokenColumn() + 2),
                          (r = new a(this, t, e)),
                          -1 != n)
                        ) {
                          do {
                            o = r.stepForward();
                          } while (o && l.test(o.type));
                          o = r.stepBackward();
                        } else o = r.getCurrentToken();
                        return (
                          (s.end.row = r.getCurrentTokenRow()),
                          (s.end.column =
                            r.getCurrentTokenColumn() + o.value.length - 2),
                          s
                        );
                      }
                    }),
                    (this.foldAll = function (t, e, n) {
                      null == n && (n = 1e5);
                      var i = this.foldWidgets;
                      if (i) {
                        e = e || this.getLength();
                        for (var r = (t = t || 0); r < e; r++)
                          if (
                            (null == i[r] && (i[r] = this.getFoldWidget(r)),
                            "start" == i[r])
                          ) {
                            var o = this.getFoldWidgetRange(r);
                            if (
                              o &&
                              o.isMultiLine() &&
                              o.end.row <= e &&
                              o.start.row >= t
                            ) {
                              r = o.end.row;
                              try {
                                var a = this.addFold("...", o);
                                a && (a.collapseChildren = n);
                              } catch (t) {}
                            }
                          }
                      }
                    }),
                    (this.$foldStyles = {
                      manual: 1,
                      markbegin: 1,
                      markbeginend: 1,
                    }),
                    (this.$foldStyle = "markbegin"),
                    (this.setFoldStyle = function (t) {
                      if (!this.$foldStyles[t])
                        throw new Error(
                          "invalid fold style: " +
                            t +
                            "[" +
                            Object.keys(this.$foldStyles).join(", ") +
                            "]"
                        );
                      if (this.$foldStyle != t) {
                        (this.$foldStyle = t), "manual" == t && this.unfold();
                        var e = this.$foldMode;
                        this.$setFolding(null), this.$setFolding(e);
                      }
                    }),
                    (this.$setFolding = function (t) {
                      this.$foldMode != t &&
                        ((this.$foldMode = t),
                        this.off("change", this.$updateFoldWidgets),
                        this.off(
                          "tokenizerUpdate",
                          this.$tokenizerUpdateFoldWidgets
                        ),
                        this._signal("changeAnnotation"),
                        t && "manual" != this.$foldStyle
                          ? ((this.foldWidgets = []),
                            (this.getFoldWidget = t.getFoldWidget.bind(
                              t,
                              this,
                              this.$foldStyle
                            )),
                            (this.getFoldWidgetRange =
                              t.getFoldWidgetRange.bind(
                                t,
                                this,
                                this.$foldStyle
                              )),
                            (this.$updateFoldWidgets =
                              this.updateFoldWidgets.bind(this)),
                            (this.$tokenizerUpdateFoldWidgets =
                              this.tokenizerUpdateFoldWidgets.bind(this)),
                            this.on("change", this.$updateFoldWidgets),
                            this.on(
                              "tokenizerUpdate",
                              this.$tokenizerUpdateFoldWidgets
                            ))
                          : (this.foldWidgets = null));
                    }),
                    (this.getParentFoldRangeData = function (t, e) {
                      var n = this.foldWidgets;
                      if (!n || (e && n[t])) return {};
                      for (var i, r = t - 1; r >= 0; ) {
                        var o = n[r];
                        if (
                          (null == o && (o = n[r] = this.getFoldWidget(r)),
                          "start" == o)
                        ) {
                          var a = this.getFoldWidgetRange(r);
                          if ((i || (i = a), a && a.end.row >= t)) break;
                        }
                        r--;
                      }
                      return { range: -1 !== r && a, firstRange: i };
                    }),
                    (this.onFoldWidgetClick = function (t, e) {
                      var n = {
                        children: (e = e.domEvent).shiftKey,
                        all: e.ctrlKey || e.metaKey,
                        siblings: e.altKey,
                      };
                      if (!this.$toggleFoldWidget(t, n)) {
                        var i = e.target || e.srcElement;
                        i &&
                          /ace_fold-widget/.test(i.className) &&
                          (i.className += " ace_invalid");
                      }
                    }),
                    (this.$toggleFoldWidget = function (t, e) {
                      if (this.getFoldWidget) {
                        var n = this.getFoldWidget(t),
                          i = this.getLine(t),
                          r = "end" === n ? -1 : 1,
                          o = this.getFoldAt(t, -1 === r ? 0 : i.length, r);
                        if (o)
                          e.children || e.all
                            ? this.removeFold(o)
                            : this.expandFold(o);
                        else {
                          var a = this.getFoldWidgetRange(t, !0);
                          if (
                            !a ||
                            a.isMultiLine() ||
                            !(o = this.getFoldAt(
                              a.start.row,
                              a.start.column,
                              1
                            )) ||
                            !a.isEqual(o.range)
                          ) {
                            if (e.siblings) {
                              var s = this.getParentFoldRangeData(t);
                              if (s.range)
                                var l = s.range.start.row + 1,
                                  c = s.range.end.row;
                              this.foldAll(l, c, e.all ? 1e4 : 0);
                            } else
                              e.children
                                ? ((c = a ? a.end.row : this.getLength()),
                                  this.foldAll(t + 1, c, e.all ? 1e4 : 0))
                                : a &&
                                  (e.all && (a.collapseChildren = 1e4),
                                  this.addFold("...", a));
                            return a;
                          }
                          this.removeFold(o);
                        }
                      }
                    }),
                    (this.toggleFoldWidget = function (t) {
                      var e = this.selection.getCursor().row;
                      e = this.getRowFoldStart(e);
                      var n = this.$toggleFoldWidget(e, {});
                      if (!n) {
                        var i = this.getParentFoldRangeData(e, !0);
                        if ((n = i.range || i.firstRange)) {
                          e = n.start.row;
                          var r = this.getFoldAt(e, this.getLine(e).length, 1);
                          r ? this.removeFold(r) : this.addFold("...", n);
                        }
                      }
                    }),
                    (this.updateFoldWidgets = function (t) {
                      var e = t.start.row,
                        n = t.end.row - e;
                      if (0 === n) this.foldWidgets[e] = null;
                      else if ("remove" == t.action)
                        this.foldWidgets.splice(e, n + 1, null);
                      else {
                        var i = Array(n + 1);
                        i.unshift(e, 1),
                          this.foldWidgets.splice.apply(this.foldWidgets, i);
                      }
                    }),
                    (this.tokenizerUpdateFoldWidgets = function (t) {
                      var e = t.data;
                      e.first != e.last &&
                        this.foldWidgets.length > e.first &&
                        this.foldWidgets.splice(
                          e.first,
                          this.foldWidgets.length
                        );
                    });
                };
              }
            ),
            ace.define(
              "ace/edit_session/bracket_match",
              [
                "require",
                "exports",
                "module",
                "ace/token_iterator",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../token_iterator").TokenIterator,
                  r = t("../range").Range;
                e.BracketMatch = function () {
                  (this.findMatchingBracket = function (t, e) {
                    if (0 == t.column) return null;
                    var n = e || this.getLine(t.row).charAt(t.column - 1);
                    if ("" == n) return null;
                    var i = n.match(/([\(\[\{])|([\)\]\}])/);
                    return i
                      ? i[1]
                        ? this.$findClosingBracket(i[1], t)
                        : this.$findOpeningBracket(i[2], t)
                      : null;
                  }),
                    (this.getBracketRange = function (t) {
                      var e,
                        n = this.getLine(t.row),
                        i = !0,
                        o = n.charAt(t.column - 1),
                        a = o && o.match(/([\(\[\{])|([\)\]\}])/);
                      if (
                        (a ||
                          ((o = n.charAt(t.column)),
                          (t = { row: t.row, column: t.column + 1 }),
                          (a = o && o.match(/([\(\[\{])|([\)\]\}])/)),
                          (i = !1)),
                        !a)
                      )
                        return null;
                      if (a[1]) {
                        if (!(s = this.$findClosingBracket(a[1], t)))
                          return null;
                        (e = r.fromPoints(t, s)),
                          i || (e.end.column++, e.start.column--),
                          (e.cursor = e.end);
                      } else {
                        var s;
                        if (!(s = this.$findOpeningBracket(a[2], t)))
                          return null;
                        (e = r.fromPoints(s, t)),
                          i || (e.start.column++, e.end.column--),
                          (e.cursor = e.start);
                      }
                      return e;
                    }),
                    (this.$brackets = {
                      ")": "(",
                      "(": ")",
                      "]": "[",
                      "[": "]",
                      "{": "}",
                      "}": "{",
                    }),
                    (this.$findOpeningBracket = function (t, e, n) {
                      var r = this.$brackets[t],
                        o = 1,
                        a = new i(this, e.row, e.column),
                        s = a.getCurrentToken();
                      if ((s || (s = a.stepForward()), s)) {
                        n ||
                          (n = new RegExp(
                            "(\\.?" +
                              s.type
                                .replace(".", "\\.")
                                .replace("rparen", ".paren")
                                .replace(/\b(?:end)\b/, "(?:start|begin|end)") +
                              ")+"
                          ));
                        for (
                          var l = e.column - a.getCurrentTokenColumn() - 2,
                            c = s.value;
                          ;

                        ) {
                          for (; l >= 0; ) {
                            var d = c.charAt(l);
                            if (d == r) {
                              if (0 == (o -= 1))
                                return {
                                  row: a.getCurrentTokenRow(),
                                  column: l + a.getCurrentTokenColumn(),
                                };
                            } else d == t && (o += 1);
                            l -= 1;
                          }
                          do {
                            s = a.stepBackward();
                          } while (s && !n.test(s.type));
                          if (null == s) break;
                          l = (c = s.value).length - 1;
                        }
                        return null;
                      }
                    }),
                    (this.$findClosingBracket = function (t, e, n) {
                      var r = this.$brackets[t],
                        o = 1,
                        a = new i(this, e.row, e.column),
                        s = a.getCurrentToken();
                      if ((s || (s = a.stepForward()), s)) {
                        n ||
                          (n = new RegExp(
                            "(\\.?" +
                              s.type
                                .replace(".", "\\.")
                                .replace("lparen", ".paren")
                                .replace(
                                  /\b(?:start|begin)\b/,
                                  "(?:start|begin|end)"
                                ) +
                              ")+"
                          ));
                        for (var l = e.column - a.getCurrentTokenColumn(); ; ) {
                          for (var c = s.value, d = c.length; l < d; ) {
                            var u = c.charAt(l);
                            if (u == r) {
                              if (0 == (o -= 1))
                                return {
                                  row: a.getCurrentTokenRow(),
                                  column: l + a.getCurrentTokenColumn(),
                                };
                            } else u == t && (o += 1);
                            l += 1;
                          }
                          do {
                            s = a.stepForward();
                          } while (s && !n.test(s.type));
                          if (null == s) break;
                          l = 0;
                        }
                        return null;
                      }
                    });
                };
              }
            ),
            ace.define(
              "ace/edit_session",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/lang",
                "ace/config",
                "ace/lib/event_emitter",
                "ace/selection",
                "ace/mode/text",
                "ace/range",
                "ace/document",
                "ace/background_tokenizer",
                "ace/search_highlight",
                "ace/edit_session/folding",
                "ace/edit_session/bracket_match",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/lang"),
                  o = t("./config"),
                  a = t("./lib/event_emitter").EventEmitter,
                  s = t("./selection").Selection,
                  l = t("./mode/text").Mode,
                  c = t("./range").Range,
                  d = t("./document").Document,
                  u = t("./background_tokenizer").BackgroundTokenizer,
                  p = t("./search_highlight").SearchHighlight,
                  h = function (t, e) {
                    (this.$breakpoints = []),
                      (this.$decorations = []),
                      (this.$frontMarkers = {}),
                      (this.$backMarkers = {}),
                      (this.$markerId = 1),
                      (this.$undoSelect = !0),
                      (this.$foldData = []),
                      (this.$foldData.toString = function () {
                        return this.join("\n");
                      }),
                      this.on("changeFold", this.onChangeFold.bind(this)),
                      (this.$onChange = this.onChange.bind(this)),
                      ("object" == typeof t && t.getLine) || (t = new d(t)),
                      this.setDocument(t),
                      (this.selection = new s(this)),
                      o.resetOptions(this),
                      this.setMode(e),
                      o._signal("session", this);
                  };
                (function () {
                  i.implement(this, a),
                    (this.setDocument = function (t) {
                      this.doc &&
                        this.doc.removeListener("change", this.$onChange),
                        (this.doc = t),
                        t.on("change", this.$onChange),
                        this.bgTokenizer &&
                          this.bgTokenizer.setDocument(this.getDocument()),
                        this.resetCaches();
                    }),
                    (this.getDocument = function () {
                      return this.doc;
                    }),
                    (this.$resetRowCache = function (t) {
                      if (!t)
                        return (
                          (this.$docRowCache = []),
                          void (this.$screenRowCache = [])
                        );
                      var e = this.$docRowCache.length,
                        n = this.$getRowCacheIndex(this.$docRowCache, t) + 1;
                      e > n &&
                        (this.$docRowCache.splice(n, e),
                        this.$screenRowCache.splice(n, e));
                    }),
                    (this.$getRowCacheIndex = function (t, e) {
                      for (var n = 0, i = t.length - 1; n <= i; ) {
                        var r = (n + i) >> 1,
                          o = t[r];
                        if (e > o) n = r + 1;
                        else {
                          if (!(e < o)) return r;
                          i = r - 1;
                        }
                      }
                      return n - 1;
                    }),
                    (this.resetCaches = function () {
                      (this.$modified = !0),
                        (this.$wrapData = []),
                        (this.$rowLengthCache = []),
                        this.$resetRowCache(0),
                        this.bgTokenizer && this.bgTokenizer.start(0);
                    }),
                    (this.onChangeFold = function (t) {
                      var e = t.data;
                      this.$resetRowCache(e.start.row);
                    }),
                    (this.onChange = function (t) {
                      (this.$modified = !0), this.$resetRowCache(t.start.row);
                      var e = this.$updateInternalDataOnChange(t);
                      this.$fromUndo ||
                        !this.$undoManager ||
                        t.ignore ||
                        (this.$deltasDoc.push(t),
                        e &&
                          0 != e.length &&
                          this.$deltasFold.push({
                            action: "removeFolds",
                            folds: e,
                          }),
                        this.$informUndoManager.schedule()),
                        this.bgTokenizer && this.bgTokenizer.$updateOnChange(t),
                        this._signal("change", t);
                    }),
                    (this.setValue = function (t) {
                      this.doc.setValue(t),
                        this.selection.moveTo(0, 0),
                        this.$resetRowCache(0),
                        (this.$deltas = []),
                        (this.$deltasDoc = []),
                        (this.$deltasFold = []),
                        this.setUndoManager(this.$undoManager),
                        this.getUndoManager().reset();
                    }),
                    (this.getValue = this.toString =
                      function () {
                        return this.doc.getValue();
                      }),
                    (this.getSelection = function () {
                      return this.selection;
                    }),
                    (this.getState = function (t) {
                      return this.bgTokenizer.getState(t);
                    }),
                    (this.getTokens = function (t) {
                      return this.bgTokenizer.getTokens(t);
                    }),
                    (this.getTokenAt = function (t, e) {
                      var n,
                        i = this.bgTokenizer.getTokens(t),
                        r = 0;
                      if (null == e)
                        (o = i.length - 1), (r = this.getLine(t).length);
                      else
                        for (
                          var o = 0;
                          o < i.length && !((r += i[o].value.length) >= e);
                          o++
                        );
                      return (n = i[o])
                        ? ((n.index = o), (n.start = r - n.value.length), n)
                        : null;
                    }),
                    (this.setUndoManager = function (t) {
                      if (
                        ((this.$undoManager = t),
                        (this.$deltas = []),
                        (this.$deltasDoc = []),
                        (this.$deltasFold = []),
                        this.$informUndoManager &&
                          this.$informUndoManager.cancel(),
                        t)
                      ) {
                        var e = this;
                        (this.$syncInformUndoManager = function () {
                          e.$informUndoManager.cancel(),
                            e.$deltasFold.length &&
                              (e.$deltas.push({
                                group: "fold",
                                deltas: e.$deltasFold,
                              }),
                              (e.$deltasFold = [])),
                            e.$deltasDoc.length &&
                              (e.$deltas.push({
                                group: "doc",
                                deltas: e.$deltasDoc,
                              }),
                              (e.$deltasDoc = [])),
                            e.$deltas.length > 0 &&
                              t.execute({
                                action: "aceupdate",
                                args: [e.$deltas, e],
                                merge: e.mergeUndoDeltas,
                              }),
                            (e.mergeUndoDeltas = !1),
                            (e.$deltas = []);
                        }),
                          (this.$informUndoManager = r.delayedCall(
                            this.$syncInformUndoManager
                          ));
                      }
                    }),
                    (this.markUndoGroup = function () {
                      this.$syncInformUndoManager &&
                        this.$syncInformUndoManager();
                    }),
                    (this.$defaultUndoManager = {
                      undo: function () {},
                      redo: function () {},
                      reset: function () {},
                    }),
                    (this.getUndoManager = function () {
                      return this.$undoManager || this.$defaultUndoManager;
                    }),
                    (this.getTabString = function () {
                      return this.getUseSoftTabs()
                        ? r.stringRepeat(" ", this.getTabSize())
                        : "\t";
                    }),
                    (this.setUseSoftTabs = function (t) {
                      this.setOption("useSoftTabs", t);
                    }),
                    (this.getUseSoftTabs = function () {
                      return this.$useSoftTabs && !this.$mode.$indentWithTabs;
                    }),
                    (this.setTabSize = function (t) {
                      this.setOption("tabSize", t);
                    }),
                    (this.getTabSize = function () {
                      return this.$tabSize;
                    }),
                    (this.isTabStop = function (t) {
                      return this.$useSoftTabs && t.column % this.$tabSize == 0;
                    }),
                    (this.$overwrite = !1),
                    (this.setOverwrite = function (t) {
                      this.setOption("overwrite", t);
                    }),
                    (this.getOverwrite = function () {
                      return this.$overwrite;
                    }),
                    (this.toggleOverwrite = function () {
                      this.setOverwrite(!this.$overwrite);
                    }),
                    (this.addGutterDecoration = function (t, e) {
                      this.$decorations[t] || (this.$decorations[t] = ""),
                        (this.$decorations[t] += " " + e),
                        this._signal("changeBreakpoint", {});
                    }),
                    (this.removeGutterDecoration = function (t, e) {
                      (this.$decorations[t] = (
                        this.$decorations[t] || ""
                      ).replace(" " + e, "")),
                        this._signal("changeBreakpoint", {});
                    }),
                    (this.getBreakpoints = function () {
                      return this.$breakpoints;
                    }),
                    (this.setBreakpoints = function (t) {
                      this.$breakpoints = [];
                      for (var e = 0; e < t.length; e++)
                        this.$breakpoints[t[e]] = "ace_breakpoint";
                      this._signal("changeBreakpoint", {});
                    }),
                    (this.clearBreakpoints = function () {
                      (this.$breakpoints = []),
                        this._signal("changeBreakpoint", {});
                    }),
                    (this.setBreakpoint = function (t, e) {
                      void 0 === e && (e = "ace_breakpoint"),
                        e
                          ? (this.$breakpoints[t] = e)
                          : delete this.$breakpoints[t],
                        this._signal("changeBreakpoint", {});
                    }),
                    (this.clearBreakpoint = function (t) {
                      delete this.$breakpoints[t],
                        this._signal("changeBreakpoint", {});
                    }),
                    (this.addMarker = function (t, e, n, i) {
                      var r = this.$markerId++,
                        o = {
                          range: t,
                          type: n || "line",
                          renderer: "function" == typeof n ? n : null,
                          clazz: e,
                          inFront: !!i,
                          id: r,
                        };
                      return (
                        i
                          ? ((this.$frontMarkers[r] = o),
                            this._signal("changeFrontMarker"))
                          : ((this.$backMarkers[r] = o),
                            this._signal("changeBackMarker")),
                        r
                      );
                    }),
                    (this.addDynamicMarker = function (t, e) {
                      if (t.update) {
                        var n = this.$markerId++;
                        return (
                          (t.id = n),
                          (t.inFront = !!e),
                          e
                            ? ((this.$frontMarkers[n] = t),
                              this._signal("changeFrontMarker"))
                            : ((this.$backMarkers[n] = t),
                              this._signal("changeBackMarker")),
                          t
                        );
                      }
                    }),
                    (this.removeMarker = function (t) {
                      var e = this.$frontMarkers[t] || this.$backMarkers[t];
                      if (e) {
                        var n = e.inFront
                          ? this.$frontMarkers
                          : this.$backMarkers;
                        e &&
                          (delete n[t],
                          this._signal(
                            e.inFront ? "changeFrontMarker" : "changeBackMarker"
                          ));
                      }
                    }),
                    (this.getMarkers = function (t) {
                      return t ? this.$frontMarkers : this.$backMarkers;
                    }),
                    (this.highlight = function (t) {
                      if (!this.$searchHighlight) {
                        var e = new p(null, "ace_selected-word", "text");
                        this.$searchHighlight = this.addDynamicMarker(e);
                      }
                      this.$searchHighlight.setRegexp(t);
                    }),
                    (this.highlightLines = function (t, e, n, i) {
                      "number" != typeof e && ((n = e), (e = t)),
                        n || (n = "ace_step");
                      var r = new c(t, 0, e, 1 / 0);
                      return (r.id = this.addMarker(r, n, "fullLine", i)), r;
                    }),
                    (this.setAnnotations = function (t) {
                      (this.$annotations = t),
                        this._signal("changeAnnotation", {});
                    }),
                    (this.getAnnotations = function () {
                      return this.$annotations || [];
                    }),
                    (this.clearAnnotations = function () {
                      this.setAnnotations([]);
                    }),
                    (this.$detectNewLine = function (t) {
                      var e = t.match(/^.*?(\r?\n)/m);
                      this.$autoNewLine = e ? e[1] : "\n";
                    }),
                    (this.getWordRange = function (t, e) {
                      var n = this.getLine(t),
                        i = !1;
                      if (
                        (e > 0 && (i = !!n.charAt(e - 1).match(this.tokenRe)),
                        i || (i = !!n.charAt(e).match(this.tokenRe)),
                        i)
                      )
                        var r = this.tokenRe;
                      else
                        r = /^\s+$/.test(n.slice(e - 1, e + 1))
                          ? /\s/
                          : this.nonTokenRe;
                      var o = e;
                      if (o > 0) {
                        do {
                          o--;
                        } while (o >= 0 && n.charAt(o).match(r));
                        o++;
                      }
                      for (var a = e; a < n.length && n.charAt(a).match(r); )
                        a++;
                      return new c(t, o, t, a);
                    }),
                    (this.getAWordRange = function (t, e) {
                      for (
                        var n = this.getWordRange(t, e),
                          i = this.getLine(n.end.row);
                        i.charAt(n.end.column).match(/[ \t]/);

                      )
                        n.end.column += 1;
                      return n;
                    }),
                    (this.setNewLineMode = function (t) {
                      this.doc.setNewLineMode(t);
                    }),
                    (this.getNewLineMode = function () {
                      return this.doc.getNewLineMode();
                    }),
                    (this.setUseWorker = function (t) {
                      this.setOption("useWorker", t);
                    }),
                    (this.getUseWorker = function () {
                      return this.$useWorker;
                    }),
                    (this.onReloadTokenizer = function (t) {
                      var e = t.data;
                      this.bgTokenizer.start(e.first),
                        this._signal("tokenizerUpdate", t);
                    }),
                    (this.$modes = {}),
                    (this.$mode = null),
                    (this.$modeId = null),
                    (this.setMode = function (t, e) {
                      if (t && "object" == typeof t) {
                        if (t.getTokenizer) return this.$onChangeMode(t);
                        var n = t,
                          i = n.path;
                      } else i = t || "ace/mode/text";
                      if (
                        (this.$modes["ace/mode/text"] ||
                          (this.$modes["ace/mode/text"] = new l()),
                        this.$modes[i] && !n)
                      )
                        return (
                          this.$onChangeMode(this.$modes[i]), void (e && e())
                        );
                      (this.$modeId = i),
                        o.loadModule(
                          ["mode", i],
                          function (t) {
                            if (this.$modeId !== i) return e && e();
                            this.$modes[i] && !n
                              ? this.$onChangeMode(this.$modes[i])
                              : t &&
                                t.Mode &&
                                ((t = new t.Mode(n)),
                                n || ((this.$modes[i] = t), (t.$id = i)),
                                this.$onChangeMode(t)),
                              e && e();
                          }.bind(this)
                        ),
                        this.$mode ||
                          this.$onChangeMode(this.$modes["ace/mode/text"], !0);
                    }),
                    (this.$onChangeMode = function (t, e) {
                      if ((e || (this.$modeId = t.$id), this.$mode !== t)) {
                        (this.$mode = t),
                          this.$stopWorker(),
                          this.$useWorker && this.$startWorker();
                        var n = t.getTokenizer();
                        if (void 0 !== n.addEventListener) {
                          var i = this.onReloadTokenizer.bind(this);
                          n.addEventListener("update", i);
                        }
                        if (this.bgTokenizer) this.bgTokenizer.setTokenizer(n);
                        else {
                          this.bgTokenizer = new u(n);
                          var r = this;
                          this.bgTokenizer.addEventListener(
                            "update",
                            function (t) {
                              r._signal("tokenizerUpdate", t);
                            }
                          );
                        }
                        this.bgTokenizer.setDocument(this.getDocument()),
                          (this.tokenRe = t.tokenRe),
                          (this.nonTokenRe = t.nonTokenRe),
                          e ||
                            (t.attachToSession && t.attachToSession(this),
                            this.$options.wrapMethod.set.call(
                              this,
                              this.$wrapMethod
                            ),
                            this.$setFolding(t.foldingRules),
                            this.bgTokenizer.start(0),
                            this._emit("changeMode"));
                      }
                    }),
                    (this.$stopWorker = function () {
                      this.$worker &&
                        (this.$worker.terminate(), (this.$worker = null));
                    }),
                    (this.$startWorker = function () {
                      try {
                        this.$worker = this.$mode.createWorker(this);
                      } catch (t) {
                        o.warn("Could not load worker", t),
                          (this.$worker = null);
                      }
                    }),
                    (this.getMode = function () {
                      return this.$mode;
                    }),
                    (this.$scrollTop = 0),
                    (this.setScrollTop = function (t) {
                      this.$scrollTop === t ||
                        isNaN(t) ||
                        ((this.$scrollTop = t),
                        this._signal("changeScrollTop", t));
                    }),
                    (this.getScrollTop = function () {
                      return this.$scrollTop;
                    }),
                    (this.$scrollLeft = 0),
                    (this.setScrollLeft = function (t) {
                      this.$scrollLeft === t ||
                        isNaN(t) ||
                        ((this.$scrollLeft = t),
                        this._signal("changeScrollLeft", t));
                    }),
                    (this.getScrollLeft = function () {
                      return this.$scrollLeft;
                    }),
                    (this.getScreenWidth = function () {
                      return (
                        this.$computeWidth(),
                        this.lineWidgets
                          ? Math.max(
                              this.getLineWidgetMaxWidth(),
                              this.screenWidth
                            )
                          : this.screenWidth
                      );
                    }),
                    (this.getLineWidgetMaxWidth = function () {
                      if (null != this.lineWidgetsWidth)
                        return this.lineWidgetsWidth;
                      var t = 0;
                      return (
                        this.lineWidgets.forEach(function (e) {
                          e && e.screenWidth > t && (t = e.screenWidth);
                        }),
                        (this.lineWidgetWidth = t)
                      );
                    }),
                    (this.$computeWidth = function (t) {
                      if (this.$modified || t) {
                        if (((this.$modified = !1), this.$useWrapMode))
                          return (this.screenWidth = this.$wrapLimit);
                        for (
                          var e = this.doc.getAllLines(),
                            n = this.$rowLengthCache,
                            i = 0,
                            r = 0,
                            o = this.$foldData[r],
                            a = o ? o.start.row : 1 / 0,
                            s = e.length,
                            l = 0;
                          l < s;
                          l++
                        ) {
                          if (l > a) {
                            if ((l = o.end.row + 1) >= s) break;
                            a = (o = this.$foldData[r++]) ? o.start.row : 1 / 0;
                          }
                          null == n[l] &&
                            (n[l] = this.$getStringScreenWidth(e[l])[0]),
                            n[l] > i && (i = n[l]);
                        }
                        this.screenWidth = i;
                      }
                    }),
                    (this.getLine = function (t) {
                      return this.doc.getLine(t);
                    }),
                    (this.getLines = function (t, e) {
                      return this.doc.getLines(t, e);
                    }),
                    (this.getLength = function () {
                      return this.doc.getLength();
                    }),
                    (this.getTextRange = function (t) {
                      return this.doc.getTextRange(
                        t || this.selection.getRange()
                      );
                    }),
                    (this.insert = function (t, e) {
                      return this.doc.insert(t, e);
                    }),
                    (this.remove = function (t) {
                      return this.doc.remove(t);
                    }),
                    (this.removeFullLines = function (t, e) {
                      return this.doc.removeFullLines(t, e);
                    }),
                    (this.undoChanges = function (t, e) {
                      if (t.length) {
                        this.$fromUndo = !0;
                        for (var n = null, i = t.length - 1; -1 != i; i--) {
                          var r = t[i];
                          "doc" == r.group
                            ? (this.doc.revertDeltas(r.deltas),
                              (n = this.$getUndoSelection(r.deltas, !0, n)))
                            : r.deltas.forEach(function (t) {
                                this.addFolds(t.folds);
                              }, this);
                        }
                        return (
                          (this.$fromUndo = !1),
                          n &&
                            this.$undoSelect &&
                            !e &&
                            this.selection.setSelectionRange(n),
                          n
                        );
                      }
                    }),
                    (this.redoChanges = function (t, e) {
                      if (t.length) {
                        this.$fromUndo = !0;
                        for (var n = null, i = 0; i < t.length; i++) {
                          var r = t[i];
                          "doc" == r.group &&
                            (this.doc.applyDeltas(r.deltas),
                            (n = this.$getUndoSelection(r.deltas, !1, n)));
                        }
                        return (
                          (this.$fromUndo = !1),
                          n &&
                            this.$undoSelect &&
                            !e &&
                            this.selection.setSelectionRange(n),
                          n
                        );
                      }
                    }),
                    (this.setUndoSelect = function (t) {
                      this.$undoSelect = t;
                    }),
                    (this.$getUndoSelection = function (t, e, n) {
                      function i(t) {
                        return e
                          ? "insert" !== t.action
                          : "insert" === t.action;
                      }
                      var r,
                        o,
                        a = t[0];
                      r = i(a)
                        ? c.fromPoints(a.start, a.end)
                        : c.fromPoints(a.start, a.start);
                      for (var s = 1; s < t.length; s++)
                        i((a = t[s]))
                          ? ((o = a.start),
                            -1 == r.compare(o.row, o.column) && r.setStart(o),
                            (o = a.end),
                            1 == r.compare(o.row, o.column) && r.setEnd(o))
                          : ((o = a.start),
                            -1 == r.compare(o.row, o.column) &&
                              (r = c.fromPoints(a.start, a.start)));
                      if (null != n) {
                        0 === c.comparePoints(n.start, r.start) &&
                          ((n.start.column += r.end.column - r.start.column),
                          (n.end.column += r.end.column - r.start.column));
                        var l = n.compareRange(r);
                        1 == l
                          ? r.setStart(n.start)
                          : -1 == l && r.setEnd(n.end);
                      }
                      return r;
                    }),
                    (this.replace = function (t, e) {
                      return this.doc.replace(t, e);
                    }),
                    (this.moveText = function (t, e, n) {
                      var i = this.getTextRange(t),
                        r = this.getFoldsInRange(t),
                        o = c.fromPoints(e, e);
                      if (!n) {
                        this.remove(t);
                        var a = t.start.row - t.end.row;
                        (d = a
                          ? -t.end.column
                          : t.start.column - t.end.column) &&
                          (o.start.row == t.end.row &&
                            o.start.column > t.end.column &&
                            (o.start.column += d),
                          o.end.row == t.end.row &&
                            o.end.column > t.end.column &&
                            (o.end.column += d)),
                          a &&
                            o.start.row >= t.end.row &&
                            ((o.start.row += a), (o.end.row += a));
                      }
                      if (((o.end = this.insert(o.start, i)), r.length)) {
                        var s = t.start,
                          l = o.start,
                          d = ((a = l.row - s.row), l.column - s.column);
                        this.addFolds(
                          r.map(function (t) {
                            return (
                              (t = t.clone()).start.row == s.row &&
                                (t.start.column += d),
                              t.end.row == s.row && (t.end.column += d),
                              (t.start.row += a),
                              (t.end.row += a),
                              t
                            );
                          })
                        );
                      }
                      return o;
                    }),
                    (this.indentRows = function (t, e, n) {
                      n = n.replace(/\t/g, this.getTabString());
                      for (var i = t; i <= e; i++)
                        this.doc.insertInLine({ row: i, column: 0 }, n);
                    }),
                    (this.outdentRows = function (t) {
                      for (
                        var e = t.collapseRows(),
                          n = new c(0, 0, 0, 0),
                          i = this.getTabSize(),
                          r = e.start.row;
                        r <= e.end.row;
                        ++r
                      ) {
                        var o = this.getLine(r);
                        (n.start.row = r), (n.end.row = r);
                        for (var a = 0; a < i && " " == o.charAt(a); ++a);
                        a < i && "\t" == o.charAt(a)
                          ? ((n.start.column = a), (n.end.column = a + 1))
                          : ((n.start.column = 0), (n.end.column = a)),
                          this.remove(n);
                      }
                    }),
                    (this.$moveLines = function (t, e, n) {
                      if (
                        ((t = this.getRowFoldStart(t)),
                        (e = this.getRowFoldEnd(e)),
                        n < 0)
                      ) {
                        if ((r = this.getRowFoldStart(t + n)) < 0) return 0;
                        var i = r - t;
                      } else if (n > 0) {
                        var r;
                        if (
                          (r = this.getRowFoldEnd(e + n)) >
                          this.doc.getLength() - 1
                        )
                          return 0;
                        i = r - e;
                      } else
                        (t = this.$clipRowToDocument(t)),
                          (i = (e = this.$clipRowToDocument(e)) - t + 1);
                      var o = new c(t, 0, e, Number.MAX_VALUE),
                        a = this.getFoldsInRange(o).map(function (t) {
                          return (
                            ((t = t.clone()).start.row += i),
                            (t.end.row += i),
                            t
                          );
                        }),
                        s =
                          0 == n
                            ? this.doc.getLines(t, e)
                            : this.doc.removeFullLines(t, e);
                      return (
                        this.doc.insertFullLines(t + i, s),
                        a.length && this.addFolds(a),
                        i
                      );
                    }),
                    (this.moveLinesUp = function (t, e) {
                      return this.$moveLines(t, e, -1);
                    }),
                    (this.moveLinesDown = function (t, e) {
                      return this.$moveLines(t, e, 1);
                    }),
                    (this.duplicateLines = function (t, e) {
                      return this.$moveLines(t, e, 0);
                    }),
                    (this.$clipRowToDocument = function (t) {
                      return Math.max(0, Math.min(t, this.doc.getLength() - 1));
                    }),
                    (this.$clipColumnToRow = function (t, e) {
                      return e < 0
                        ? 0
                        : Math.min(this.doc.getLine(t).length, e);
                    }),
                    (this.$clipPositionToDocument = function (t, e) {
                      if (((e = Math.max(0, e)), t < 0)) (t = 0), (e = 0);
                      else {
                        var n = this.doc.getLength();
                        t >= n
                          ? ((t = n - 1), (e = this.doc.getLine(n - 1).length))
                          : (e = Math.min(this.doc.getLine(t).length, e));
                      }
                      return { row: t, column: e };
                    }),
                    (this.$clipRangeToDocument = function (t) {
                      t.start.row < 0
                        ? ((t.start.row = 0), (t.start.column = 0))
                        : (t.start.column = this.$clipColumnToRow(
                            t.start.row,
                            t.start.column
                          ));
                      var e = this.doc.getLength() - 1;
                      return (
                        t.end.row > e
                          ? ((t.end.row = e),
                            (t.end.column = this.doc.getLine(e).length))
                          : (t.end.column = this.$clipColumnToRow(
                              t.end.row,
                              t.end.column
                            )),
                        t
                      );
                    }),
                    (this.$wrapLimit = 80),
                    (this.$useWrapMode = !1),
                    (this.$wrapLimitRange = { min: null, max: null }),
                    (this.setUseWrapMode = function (t) {
                      if (t != this.$useWrapMode) {
                        if (
                          ((this.$useWrapMode = t),
                          (this.$modified = !0),
                          this.$resetRowCache(0),
                          t)
                        ) {
                          var e = this.getLength();
                          (this.$wrapData = Array(e)),
                            this.$updateWrapData(0, e - 1);
                        }
                        this._signal("changeWrapMode");
                      }
                    }),
                    (this.getUseWrapMode = function () {
                      return this.$useWrapMode;
                    }),
                    (this.setWrapLimitRange = function (t, e) {
                      (this.$wrapLimitRange.min === t &&
                        this.$wrapLimitRange.max === e) ||
                        ((this.$wrapLimitRange = { min: t, max: e }),
                        (this.$modified = !0),
                        this.$useWrapMode && this._signal("changeWrapMode"));
                    }),
                    (this.adjustWrapLimit = function (t, e) {
                      var n = this.$wrapLimitRange;
                      n.max < 0 && (n = { min: e, max: e });
                      var i = this.$constrainWrapLimit(t, n.min, n.max);
                      return (
                        i != this.$wrapLimit &&
                        i > 1 &&
                        ((this.$wrapLimit = i),
                        (this.$modified = !0),
                        this.$useWrapMode &&
                          (this.$updateWrapData(0, this.getLength() - 1),
                          this.$resetRowCache(0),
                          this._signal("changeWrapLimit")),
                        !0)
                      );
                    }),
                    (this.$constrainWrapLimit = function (t, e, n) {
                      return (
                        e && (t = Math.max(e, t)), n && (t = Math.min(n, t)), t
                      );
                    }),
                    (this.getWrapLimit = function () {
                      return this.$wrapLimit;
                    }),
                    (this.setWrapLimit = function (t) {
                      this.setWrapLimitRange(t, t);
                    }),
                    (this.getWrapLimitRange = function () {
                      return {
                        min: this.$wrapLimitRange.min,
                        max: this.$wrapLimitRange.max,
                      };
                    }),
                    (this.$updateInternalDataOnChange = function (t) {
                      var e = this.$useWrapMode,
                        n = t.action,
                        i = t.start,
                        r = t.end,
                        o = i.row,
                        a = r.row,
                        s = a - o,
                        l = null;
                      if (((this.$updating = !0), 0 != s))
                        if ("remove" === n) {
                          this[e ? "$wrapData" : "$rowLengthCache"].splice(
                            o,
                            s
                          );
                          var c = this.$foldData;
                          (l = this.getFoldsInRange(t)), this.removeFolds(l);
                          var d = 0;
                          if ((b = this.getFoldLine(r.row))) {
                            b.addRemoveChars(
                              r.row,
                              r.column,
                              i.column - r.column
                            ),
                              b.shiftRow(-s);
                            var u = this.getFoldLine(o);
                            u && u !== b && (u.merge(b), (b = u)),
                              (d = c.indexOf(b) + 1);
                          }
                          for (; d < c.length; d++)
                            (b = c[d]).start.row >= r.row && b.shiftRow(-s);
                          a = o;
                        } else {
                          var p = Array(s);
                          p.unshift(o, 0);
                          var h = e ? this.$wrapData : this.$rowLengthCache;
                          if (
                            (h.splice.apply(h, p),
                            (c = this.$foldData),
                            (d = 0),
                            (b = this.getFoldLine(o)))
                          ) {
                            var f = b.range.compareInside(i.row, i.column);
                            0 == f
                              ? (b = b.split(i.row, i.column)) &&
                                (b.shiftRow(s),
                                b.addRemoveChars(a, 0, r.column - i.column))
                              : -1 == f &&
                                (b.addRemoveChars(o, 0, r.column - i.column),
                                b.shiftRow(s)),
                              (d = c.indexOf(b) + 1);
                          }
                          for (; d < c.length; d++) {
                            var b;
                            (b = c[d]).start.row >= o && b.shiftRow(s);
                          }
                        }
                      else
                        (s = Math.abs(t.start.column - t.end.column)),
                          "remove" === n &&
                            ((l = this.getFoldsInRange(t)),
                            this.removeFolds(l),
                            (s = -s)),
                          (b = this.getFoldLine(o)) &&
                            b.addRemoveChars(o, i.column, s);
                      return (
                        e && (this.$wrapData.length, this.doc.getLength()),
                        (this.$updating = !1),
                        e
                          ? this.$updateWrapData(o, a)
                          : this.$updateRowLengthCache(o, a),
                        l
                      );
                    }),
                    (this.$updateRowLengthCache = function (t, e, n) {
                      (this.$rowLengthCache[t] = null),
                        (this.$rowLengthCache[e] = null);
                    }),
                    (this.$updateWrapData = function (n, i) {
                      var r,
                        o,
                        a = this.doc.getAllLines(),
                        s = this.getTabSize(),
                        l = this.$wrapData,
                        c = this.$wrapLimit,
                        d = n;
                      for (i = Math.min(i, a.length - 1); d <= i; )
                        (o = this.getFoldLine(d, o))
                          ? ((r = []),
                            o.walk(
                              function (n, i, o, s) {
                                var l;
                                if (null != n) {
                                  (l = this.$getDisplayTokens(n, r.length))[0] =
                                    t;
                                  for (var c = 1; c < l.length; c++) l[c] = e;
                                } else
                                  l = this.$getDisplayTokens(
                                    a[i].substring(s, o),
                                    r.length
                                  );
                                r = r.concat(l);
                              }.bind(this),
                              o.end.row,
                              a[o.end.row].length + 1
                            ),
                            (l[o.start.row] = this.$computeWrapSplits(r, c, s)),
                            (d = o.end.row + 1))
                          : ((r = this.$getDisplayTokens(a[d])),
                            (l[d] = this.$computeWrapSplits(r, c, s)),
                            d++);
                    });
                  var t = 3,
                    e = 4;
                  function n(t) {
                    return (
                      !(t < 4352) &&
                      ((t >= 4352 && t <= 4447) ||
                        (t >= 4515 && t <= 4519) ||
                        (t >= 4602 && t <= 4607) ||
                        (t >= 9001 && t <= 9002) ||
                        (t >= 11904 && t <= 11929) ||
                        (t >= 11931 && t <= 12019) ||
                        (t >= 12032 && t <= 12245) ||
                        (t >= 12272 && t <= 12283) ||
                        (t >= 12288 && t <= 12350) ||
                        (t >= 12353 && t <= 12438) ||
                        (t >= 12441 && t <= 12543) ||
                        (t >= 12549 && t <= 12589) ||
                        (t >= 12593 && t <= 12686) ||
                        (t >= 12688 && t <= 12730) ||
                        (t >= 12736 && t <= 12771) ||
                        (t >= 12784 && t <= 12830) ||
                        (t >= 12832 && t <= 12871) ||
                        (t >= 12880 && t <= 13054) ||
                        (t >= 13056 && t <= 19903) ||
                        (t >= 19968 && t <= 42124) ||
                        (t >= 42128 && t <= 42182) ||
                        (t >= 43360 && t <= 43388) ||
                        (t >= 44032 && t <= 55203) ||
                        (t >= 55216 && t <= 55238) ||
                        (t >= 55243 && t <= 55291) ||
                        (t >= 63744 && t <= 64255) ||
                        (t >= 65040 && t <= 65049) ||
                        (t >= 65072 && t <= 65106) ||
                        (t >= 65108 && t <= 65126) ||
                        (t >= 65128 && t <= 65131) ||
                        (t >= 65281 && t <= 65376) ||
                        (t >= 65504 && t <= 65510))
                    );
                  }
                  (this.$computeWrapSplits = function (n, i, r) {
                    if (0 == n.length) return [];
                    var o = [],
                      a = n.length,
                      s = 0,
                      l = 0,
                      c = this.$wrapAsCode,
                      d = this.$indentedSoftWrap,
                      u =
                        i <= Math.max(2 * r, 8) || !1 === d
                          ? 0
                          : Math.floor(i / 2);
                    function p(t) {
                      var e = n.slice(s, t),
                        i = e.length;
                      e
                        .join("")
                        .replace(/12/g, function () {
                          i -= 1;
                        })
                        .replace(/2/g, function () {
                          i -= 1;
                        }),
                        o.length ||
                          ((h = (function () {
                            var t = 0;
                            if (0 === u) return t;
                            if (d)
                              for (var e = 0; e < n.length; e++) {
                                var i = n[e];
                                if (10 == i) t += 1;
                                else {
                                  if (11 != i) {
                                    if (12 == i) continue;
                                    break;
                                  }
                                  t += r;
                                }
                              }
                            return c && !1 !== d && (t += r), Math.min(t, u);
                          })()),
                          (o.indent = h)),
                        (l += i),
                        o.push(l),
                        (s = t);
                    }
                    for (var h = 0; a - s > i - h; ) {
                      var f = s + i - h;
                      if (n[f - 1] >= 10 && n[f] >= 10) p(f);
                      else if (n[f] != t && n[f] != e) {
                        for (
                          var b = Math.max(f - (i - (i >> 2)), s - 1);
                          f > b && n[f] < t;

                        )
                          f--;
                        if (c) {
                          for (; f > b && n[f] < t; ) f--;
                          for (; f > b && 9 == n[f]; ) f--;
                        } else for (; f > b && n[f] < 10; ) f--;
                        f > b ? p(++f) : (2 == n[(f = s + i)] && f--, p(f - h));
                      } else {
                        for (; f != s - 1 && n[f] != t; f--);
                        if (f > s) {
                          p(f);
                          continue;
                        }
                        for (f = s + i; f < n.length && n[f] == e; f++);
                        if (f == n.length) break;
                        p(f);
                      }
                    }
                    return o;
                  }),
                    (this.$getDisplayTokens = function (t, e) {
                      var i,
                        r = [];
                      e = e || 0;
                      for (var o = 0; o < t.length; o++) {
                        var a = t.charCodeAt(o);
                        if (9 == a) {
                          (i = this.getScreenTabSize(r.length + e)), r.push(11);
                          for (var s = 1; s < i; s++) r.push(12);
                        } else
                          32 == a
                            ? r.push(10)
                            : (a > 39 && a < 48) || (a > 57 && a < 64)
                            ? r.push(9)
                            : a >= 4352 && n(a)
                            ? r.push(1, 2)
                            : r.push(1);
                      }
                      return r;
                    }),
                    (this.$getStringScreenWidth = function (t, e, i) {
                      if (0 == e) return [0, 0];
                      var r, o;
                      for (
                        null == e && (e = 1 / 0), i = i || 0, o = 0;
                        o < t.length &&
                        (9 == (r = t.charCodeAt(o))
                          ? (i += this.getScreenTabSize(i))
                          : r >= 4352 && n(r)
                          ? (i += 2)
                          : (i += 1),
                        !(i > e));
                        o++
                      );
                      return [i, o];
                    }),
                    (this.lineWidgets = null),
                    (this.getRowLength = function (t) {
                      if (this.lineWidgets)
                        var e =
                          (this.lineWidgets[t] &&
                            this.lineWidgets[t].rowCount) ||
                          0;
                      else e = 0;
                      return this.$useWrapMode && this.$wrapData[t]
                        ? this.$wrapData[t].length + 1 + e
                        : 1 + e;
                    }),
                    (this.getRowLineCount = function (t) {
                      return this.$useWrapMode && this.$wrapData[t]
                        ? this.$wrapData[t].length + 1
                        : 1;
                    }),
                    (this.getRowWrapIndent = function (t) {
                      if (this.$useWrapMode) {
                        var e = this.screenToDocumentPosition(
                            t,
                            Number.MAX_VALUE
                          ),
                          n = this.$wrapData[e.row];
                        return n.length && n[0] < e.column ? n.indent : 0;
                      }
                      return 0;
                    }),
                    (this.getScreenLastRowColumn = function (t) {
                      var e = this.screenToDocumentPosition(
                        t,
                        Number.MAX_VALUE
                      );
                      return this.documentToScreenColumn(e.row, e.column);
                    }),
                    (this.getDocumentLastRowColumn = function (t, e) {
                      var n = this.documentToScreenRow(t, e);
                      return this.getScreenLastRowColumn(n);
                    }),
                    (this.getDocumentLastRowColumnPosition = function (t, e) {
                      var n = this.documentToScreenRow(t, e);
                      return this.screenToDocumentPosition(
                        n,
                        Number.MAX_VALUE / 10
                      );
                    }),
                    (this.getRowSplitData = function (t) {
                      return this.$useWrapMode ? this.$wrapData[t] : void 0;
                    }),
                    (this.getScreenTabSize = function (t) {
                      return this.$tabSize - (t % this.$tabSize);
                    }),
                    (this.screenToDocumentRow = function (t, e) {
                      return this.screenToDocumentPosition(t, e).row;
                    }),
                    (this.screenToDocumentColumn = function (t, e) {
                      return this.screenToDocumentPosition(t, e).column;
                    }),
                    (this.screenToDocumentPosition = function (t, e) {
                      if (t < 0) return { row: 0, column: 0 };
                      var n,
                        i,
                        r = 0,
                        o = 0,
                        a = 0,
                        s = 0,
                        l = this.$screenRowCache,
                        c = this.$getRowCacheIndex(l, t),
                        d = l.length;
                      if (d && c >= 0) {
                        (a = l[c]), (r = this.$docRowCache[c]);
                        var u = t > l[d - 1];
                      } else u = !d;
                      for (
                        var p = this.getLength() - 1,
                          h = this.getNextFoldLine(r),
                          f = h ? h.start.row : 1 / 0;
                        a <= t &&
                        !(a + (s = this.getRowLength(r)) > t || r >= p);

                      )
                        (a += s),
                          ++r > f &&
                            ((r = h.end.row + 1),
                            (f = (h = this.getNextFoldLine(r, h))
                              ? h.start.row
                              : 1 / 0)),
                          u &&
                            (this.$docRowCache.push(r),
                            this.$screenRowCache.push(a));
                      if (h && h.start.row <= r)
                        (n = this.getFoldDisplayLine(h)), (r = h.start.row);
                      else {
                        if (a + s <= t || r > p)
                          return { row: p, column: this.getLine(p).length };
                        (n = this.getLine(r)), (h = null);
                      }
                      var b = 0;
                      if (this.$useWrapMode) {
                        var m = this.$wrapData[r];
                        if (m) {
                          var g = Math.floor(t - a);
                          (i = m[g]),
                            g > 0 &&
                              m.length &&
                              ((b = m.indent),
                              (o = m[g - 1] || m[m.length - 1]),
                              (n = n.substring(o)));
                        }
                      }
                      return (
                        (o += this.$getStringScreenWidth(n, e - b)[1]),
                        this.$useWrapMode && o >= i && (o = i - 1),
                        h ? h.idxToPosition(o) : { row: r, column: o }
                      );
                    }),
                    (this.documentToScreenPosition = function (t, e) {
                      if (void 0 === e)
                        var n = this.$clipPositionToDocument(t.row, t.column);
                      else n = this.$clipPositionToDocument(t, e);
                      (t = n.row), (e = n.column);
                      var i,
                        r = 0,
                        o = null;
                      (i = this.getFoldAt(t, e, 1)) &&
                        ((t = i.start.row), (e = i.start.column));
                      var a,
                        s = 0,
                        l = this.$docRowCache,
                        c = this.$getRowCacheIndex(l, t),
                        d = l.length;
                      if (d && c >= 0) {
                        (s = l[c]), (r = this.$screenRowCache[c]);
                        var u = t > l[d - 1];
                      } else u = !d;
                      for (
                        var p = this.getNextFoldLine(s),
                          h = p ? p.start.row : 1 / 0;
                        s < t;

                      ) {
                        if (s >= h) {
                          if ((a = p.end.row + 1) > t) break;
                          h = (p = this.getNextFoldLine(a, p))
                            ? p.start.row
                            : 1 / 0;
                        } else a = s + 1;
                        (r += this.getRowLength(s)),
                          (s = a),
                          u &&
                            (this.$docRowCache.push(s),
                            this.$screenRowCache.push(r));
                      }
                      var f = "";
                      p && s >= h
                        ? ((f = this.getFoldDisplayLine(p, t, e)),
                          (o = p.start.row))
                        : ((f = this.getLine(t).substring(0, e)), (o = t));
                      var b = 0;
                      if (this.$useWrapMode) {
                        var m = this.$wrapData[o];
                        if (m) {
                          for (var g = 0; f.length >= m[g]; ) r++, g++;
                          (f = f.substring(m[g - 1] || 0, f.length)),
                            (b = g > 0 ? m.indent : 0);
                        }
                      }
                      return {
                        row: r,
                        column: b + this.$getStringScreenWidth(f)[0],
                      };
                    }),
                    (this.documentToScreenColumn = function (t, e) {
                      return this.documentToScreenPosition(t, e).column;
                    }),
                    (this.documentToScreenRow = function (t, e) {
                      return this.documentToScreenPosition(t, e).row;
                    }),
                    (this.getScreenLength = function () {
                      var t = 0,
                        e = null;
                      if (this.$useWrapMode)
                        for (
                          var n = this.$wrapData.length,
                            i = 0,
                            r =
                              ((s = 0),
                              (e = this.$foldData[s++]) ? e.start.row : 1 / 0);
                          i < n;

                        ) {
                          var o = this.$wrapData[i];
                          (t += o ? o.length + 1 : 1),
                            ++i > r &&
                              ((i = e.end.row + 1),
                              (r = (e = this.$foldData[s++])
                                ? e.start.row
                                : 1 / 0));
                        }
                      else {
                        t = this.getLength();
                        for (var a = this.$foldData, s = 0; s < a.length; s++)
                          t -= (e = a[s]).end.row - e.start.row;
                      }
                      return (
                        this.lineWidgets &&
                          (t += this.$getWidgetScreenLength()),
                        t
                      );
                    }),
                    (this.$setFontMetrics = function (t) {
                      this.$enableVarChar &&
                        (this.$getStringScreenWidth = function (e, n, i) {
                          if (0 === n) return [0, 0];
                          var r, o;
                          for (
                            n || (n = 1 / 0), i = i || 0, o = 0;
                            o < e.length &&
                            !(
                              (i +=
                                "\t" === (r = e.charAt(o))
                                  ? this.getScreenTabSize(i)
                                  : t.getCharacterWidth(r)) > n
                            );
                            o++
                          );
                          return [i, o];
                        });
                    }),
                    (this.destroy = function () {
                      this.bgTokenizer &&
                        (this.bgTokenizer.setDocument(null),
                        (this.bgTokenizer = null)),
                        this.$stopWorker();
                    });
                }).call(h.prototype),
                  t("./edit_session/folding").Folding.call(h.prototype),
                  t("./edit_session/bracket_match").BracketMatch.call(
                    h.prototype
                  ),
                  o.defineOptions(h.prototype, "session", {
                    wrap: {
                      set: function (t) {
                        if (
                          (t && "off" != t
                            ? "free" == t
                              ? (t = !0)
                              : "printMargin" == t
                              ? (t = -1)
                              : "string" == typeof t &&
                                (t = parseInt(t, 10) || !1)
                            : (t = !1),
                          this.$wrap != t)
                        )
                          if (((this.$wrap = t), t)) {
                            var e = "number" == typeof t ? t : null;
                            this.setWrapLimitRange(e, e),
                              this.setUseWrapMode(!0);
                          } else this.setUseWrapMode(!1);
                      },
                      get: function () {
                        return this.getUseWrapMode()
                          ? -1 == this.$wrap
                            ? "printMargin"
                            : this.getWrapLimitRange().min
                            ? this.$wrap
                            : "free"
                          : "off";
                      },
                      handlesSet: !0,
                    },
                    wrapMethod: {
                      set: function (t) {
                        (t =
                          "auto" == t
                            ? "text" != this.$mode.type
                            : "text" != t) != this.$wrapAsCode &&
                          ((this.$wrapAsCode = t),
                          this.$useWrapMode &&
                            ((this.$modified = !0),
                            this.$resetRowCache(0),
                            this.$updateWrapData(0, this.getLength() - 1)));
                      },
                      initialValue: "auto",
                    },
                    indentedSoftWrap: { initialValue: !0 },
                    firstLineNumber: {
                      set: function () {
                        this._signal("changeBreakpoint");
                      },
                      initialValue: 1,
                    },
                    useWorker: {
                      set: function (t) {
                        (this.$useWorker = t),
                          this.$stopWorker(),
                          t && this.$startWorker();
                      },
                      initialValue: !0,
                    },
                    useSoftTabs: { initialValue: !0 },
                    tabSize: {
                      set: function (t) {
                        isNaN(t) ||
                          this.$tabSize === t ||
                          ((this.$modified = !0),
                          (this.$rowLengthCache = []),
                          (this.$tabSize = t),
                          this._signal("changeTabSize"));
                      },
                      initialValue: 4,
                      handlesSet: !0,
                    },
                    overwrite: {
                      set: function (t) {
                        this._signal("changeOverwrite");
                      },
                      initialValue: !1,
                    },
                    newLineMode: {
                      set: function (t) {
                        this.doc.setNewLineMode(t);
                      },
                      get: function () {
                        return this.doc.getNewLineMode();
                      },
                      handlesSet: !0,
                    },
                    mode: {
                      set: function (t) {
                        this.setMode(t);
                      },
                      get: function () {
                        return thi