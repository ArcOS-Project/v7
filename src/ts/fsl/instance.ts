import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";

class FSL extends Process {
  constructor(handler: ProcessHandler,pid: number,parentPid:parent) {
    super(handler,pid,parentPid);
  }

  splitLogic(t:string ) {
    const e = [];
    
    let i = "";
    let r = false;
      let s = false;
      let n = 0;
      let u = 0;
      let       c = 0;
      let o = false;
    const l = /(\|\||&&)/;

    for (let p = 0; p < t.length; p++) {
      const m = t[p];
      if (o) (i += m), (o = !1);
      else if ("\\" !== m) {
        if (
          ("'" !== m || s || o ? '"' !== m || r || o || (s = !s) : (r = !r),
          r ||
            s ||
            ("[" === m
              ? n++
              : "]" === m
              ? n--
              : "{" === m
              ? u++
              : "}" === m
              ? u--
              : "(" === m
              ? c++
              : ")" === m && c--),
          !r && !s && 0 === n && 0 === u && 0 === c)
        ) {
          const r = t.slice(p).match(l);
          if (r && 0 === r.index) {
            i.trim() && (e.push(i.trim()), (i = "")),
              e.push(r[0]),
              (p += r[0].length - 1);
            continue;
          }
        }
        i += m;
      } else (o = !0), (i += m);
    }
    return i.trim() && e.push(i.trim()), e;
  }
  splitOperators(t: string, e: string[]) {
    const i = [];
    let r = "",
      s = !1,
      n = !1,
      u = 0,
      c = 0,
      o = 0,
      l = !1;
    for (let p = 0; p < t.length; p++) {
      const m = t[p];
      l
        ? ((l = !1), (r += m))
        : "\\" !== m
        ? "'" !== m || n || u || c || o
          ? '"' !== m || s || u || c || o
            ? s || n
              ? (r += m)
              : ("[" === m
                  ? u++
                  : "]" === m
                  ? u--
                  : "{" === m
                  ? c++
                  : "}" === m
                  ? c--
                  : "(" === m
                  ? o++
                  : ")" === m && o--,
                e.includes(m) && 0 === u && 0 === c && 0 === o
                  ? "+" != m || ("+" == m && "+" != t[p - 1] && "+" != t[p + 1])
                    ? (r.trim() && i.push(r.trim()), i.push(m), (r = ""))
                    : ("+" == m &&
                        "+" == t[p + 1] &&
                        (i.push(r.trim()), (r = "")),
                      (r += m),
                      "+" == m && "+" == t[p - 1] && (i.push(r.trim()), (r = "")))
                  : (r += m))
            : (l || (n = !n), (r += m))
          : (l || (s = !s), (r += m))
        : ((l = !0), (r += m));
    }
    return r.trim() && i.push(r.trim()), i;
  }
  splitStatement(t: string) {
    const e = [];
    let i = "",
      r = 0,
      s = 0,
      n = !1,
      u = "",
      c = 0;
    for (; c < t.length; ) {
      const o = t[c],
        l = t[c - 1];
      ('"' !== o && "'" !== o) ||
        "\\" === l ||
        (n ? o === u && (n = !1) : ((n = !0), (u = o))),
        n
          ? (i += o)
          : "(" === o
          ? (s++, (i += o))
          : ")" === o
          ? (s--, (i += o))
          : "{" === o
          ? (0 === s && 0 === r && i.trim() && (e.push(i.trim()), (i = "")),
            (i += o),
            r++)
          : "}" === o
          ? (r--,
            (i += o),
            0 === s && 0 === r && i.trim() && (e.push(i.trim()), (i = "")))
          : ";" === o && 0 === r && 0 === s
          ? (e.push(i.trim()), (i = ""))
          : (i += o),
        c++;
    }
    return i.trim() && e.push(i.trim()), e;
  }
  splitSegment(e: string) {
    let a = [],
      r = "",
      s = !1,
      t = !1,
      $ = 0,
      c = 0,
      l = 0,
      b = -1;
    for (let i of e) {
      b++;
      let k = "\\" === (b > 0 ? e[b - 1] : null);
      if (
        ('"' !== i || s || k || (t = !t), "'" !== i || t || k || (s = !s), s || t)
      )
        r += i;
      else
        switch (i) {
          case "{":
            l++, (r += i);
            break;
          case "}":
            l--,
              (r += i),
              0 === $ &&
                0 === l &&
                0 === c &&
                ["\n", " "].includes(e[b + 1]) &&
                r &&
                (a.push(r.trim()), (r = ""));
            break;
          case "[":
            c++, (r += i);
            break;
          case "]":
            c--, (r += i);
            break;
          case "(":
            $++, (r += i);
            break;
          case ")":
            $--, (r += i);
            break;
          case ";":
            0 === $ && 0 === l && 0 === c
              ? r && (a.push(r.trim()), (r = ""))
              : (r += i);
            break;
          default:
            r += i;
        }
    }
    return r && a.push(r.trim()), a;
  }
  splitAssignment(t: string, l:string[]) {
    let e = [],
      i = "",
      r = !1,
      s = !1,
      n = !0,
      u = 0,
      c = 0,
      o = 0,
      p = l.concat("="),
      m = -1;
    for (let h of t) {
      m++;
      const f = "\\" === (m > 0 ? t[m - 1] : null);
      if (
        ('"' !== h || r || f || (s = !s), "'" !== h || s || f || (r = !r), r || s)
      )
        i += h;
      else
        switch (h) {
          case "{":
            o++, (i += h);
            break;
          case "}":
            o--,
              (i += h),
              0 === u && 0 === o && 0 === c && i && (e.push(i.trim()), (i = ""));
            break;
          case "[":
            c++, (i += h);
            break;
          case "]":
            c--, (i += h);
            break;
          case "(":
            u++, (i += h);
            break;
          case ")":
            u--, (i += h);
            break;
          case "=":
            if (
              0 === u &&
              0 === o &&
              0 === c &&
              n &&
              l.includes(t[m - 1]) &&
              n &&
              !l.includes(h)
            ) {
              (i += h), e.push(i.trim()), (i = ""), (n = !1);
              continue;
            }
            0 !== u ||
            0 !== o ||
            0 !== c ||
            !n ||
            p.includes(t[m + 1]) ||
            p.includes(t[m - 1])
              ? (i += h)
              : (l.includes(t[m - 1])
                  ? ((i += h), i && e.push(i.trim()), (i = ""))
                  : (i.trim() && e.push(i.trim()), e.push(h), (i = "")),
                (n = !1));
            break;
          default:
            0 === u &&
              0 === o &&
              0 === c &&
              l.includes(t[m + 1]) &&
              p.includes(t[m + 2]) &&
              n &&
              (i.trim() && e.push(i.trim()), (i = "")),
              (i += h);
        }
    }
    return i && e.push(i.trim()), e;
  }
  splitByFirstSpace(t: string) {
    const e = (t = t.trim()).indexOf(" ");
    if (-1 === e) return [t];
    return [t.slice(0, e), t.slice(e + 1)];
  }
  splitCharedCommand(t:string, e:string) {
    const i = [];
    let r = "",
      s = !1,
      n = !1,
      u = 0,
      c = 0,
      o = 0,
      l = !1;
    for (let p = 0; p < t.length; p++) {
      const m = t[p];
      if (l) (r += m), (l = !1);
      else if ("\\" !== m)
        if ('"' !== m || n || 0 !== u || 0 !== c || 0 !== o)
          if ("'" !== m || s || 0 !== u || 0 !== c || 0 !== o) {
            if (!s && !n) {
              if ("(" === m) {
                u++, (r += m);
                continue;
              }
              if ("{" === m) {
                c++, (r += m);
                continue;
              }
              if ("[" === m) {
                o++, (r += m);
                continue;
              }
              if (")" === m && u > 0) {
                u--, (r += m);
                continue;
              }
              if ("}" === m && c > 0) {
                c--, (r += m);
                continue;
              }
              if ("]" === m && o > 0) {
                o--, (r += m);
                continue;
              }
            }
            m !== e || s || n || 0 !== u || 0 !== c || 0 !== o
              ? (r += m)
              : r.length > 0 && (i.push(r.trim()), (r = ""));
          } else (n = !n), (r += m);
        else (s = !s), (r += m);
      else (l = !0), (r += m);
    }
    return r.length > 0 && i.push(r.trim()), i;
  }
  splitCommand(t:string) {
    const e = [];
    let i = "",
      r = !1,
      s = "",
      n = 0,
      u = 0,
      c = 0,
      o = !1;
    for (let l = 0; l < t.length; l++) {
      const p = t[l];
      o
        ? ((i += p), (o = !1))
        : "\\" !== p
        ? r
          ? ((i += p), p === s && (r = !1))
          : '"' === p || "'" === p
          ? ((r = !0), (s = p), (i += p))
          : "(" === p
          ? (0 === n && 0 === u && 0 === c
              ? (i.trim() && e.push(i.trim()), (i = "("))
              : (i += "("),
            n++)
          : ")" === p
          ? (n--,
            0 === n && 0 === u && 0 === c
              ? ((i += ")"), i.trim() && e.push(i.trim()), (i = ""))
              : (i += ")"))
          : "{" === p
          ? (0 === n &&
              0 === u &&
              0 === c &&
              (i.trim() && e.push(i.trim()), (i = "")),
            u++,
            (i += p))
          : "}" === p
          ? (u--,
            (i += p),
            0 === n &&
              0 === u &&
              0 === c &&
              (i.trim() && e.push(i.trim()), (i = "")))
          : "[" === p
          ? (c++, (i += p))
          : "]" === p
          ? (c--,
            (i += p),
            0 === n &&
              0 === u &&
              0 === c &&
              ("" !== i && e.push(i.trim()), (i = "")))
          : (i += p)
        : ((o = !0), (i += p));
    }
    return "" !== i && e.push(i.trim()), e;
  }
  splitReferences(t:string) {
    const e = [];
    let i = "",
      r = 0,
      s = 0,
      n = 0,
      u = !1,
      c = "";
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      u
        ? ((i += l), l === c && (u = !1))
        : '"' !== l && "'" !== l
        ? ("(" === l && r++,
          "{" === l && s++,
          "[" === l && n++,
          ")" === l && r--,
          "}" === l && s--,
          "]" === l && n--,
          "[" !== l || 1 !== n
            ? "]" !== l || 0 !== n
              ? (i += l)
              : ((i += l), 0 === r && 0 === s && (e.push(i.trim()), (i = "")))
            : (0 === r && 0 === s && "" !== i && (e.push(i.trim()), (i = "")),
              (i += l)))
        : ((u = !0), (c = l), (i += l));
    }
    return i.length > 0 && e.push(i.trim()), e;
  }
  splitCommandParams(t:string) {
    const e = [];
    let i = "",
      r = !1,
      s = !1,
      n = 0,
      u = 0,
      c = 0;
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      (r || s) && "\\" === l && o + 1 < t.length
        ? ((i += l + t[o + 1]), o++)
        : '"' !== l || s
        ? "'" !== l || r
          ? "{" !== l || r || s
            ? "}" !== l || r || s
              ? "[" !== l || r || s
                ? "]" !== l || r || s
                  ? "(" !== l || r || s
                    ? ")" !== l || r || s
                      ? "," !== l || r || s || n > 0 || u > 0 || c > 0
                        ? (i += l)
                        : (e.push(i.trim()), (i = ""))
                      : (c--, (i += l))
                    : (c++, (i += l))
                  : (u--, (i += l))
                : (u++, (i += l))
              : (n--, (i += l))
            : (n++, (i += l))
          : ((s = !s), (i += l))
        : ((r = !r), (i += l));
    }
    return i && e.push(i.trim()), e;
  }
  splitComparison(t: string, i: string[]) {
    i = i.filter((t) => ">" !== t && "<" !== t);
    let r = RegExp(`(${i.map(this.escapeRegExp).join("|")})`),
      $ = [],
      s = "",
      e = !1,
      m = !1,
      p = 0,
      u = 0,
      l = 0;
    for (let n = 0; n < t.length; n++) {
      let h = t[n],
        o = t[n + 1],
        _ = t[n - 1],
        f = "\\" === _ && "'" === h,
        a = "\\" === _ && '"' === h;
      "'" !== h || m || f || p || u || l
        ? '"' !== h || e || a || p || u || l || (m = !m)
        : (e = !e),
        !e &&
          !m &&
          ("[" === h
            ? p++
            : "]" === h
            ? p--
            : "{" === h
            ? u++
            : "}" === h
            ? u--
            : "(" === h
            ? l++
            : ")" === h && l--),
        !r.test(h + o) || e || m || 0 !== p || 0 !== u || 0 !== l
          ? ![">", "<"].includes(h) || e || m || 0 !== p || 0 !== u || 0 !== l
            ? (s += h)
            : (s.trim() && $.push(s.trim()), $.push(h), (s = ""))
          : (s.trim() && $.push(s.trim()), $.push(h + o), (s = ""), n++);
    }
    return s.trim() && $.push(s.trim()), $;
  }
  removeStr(e: string) {
    if (
      !(
        ('"' == e[0] && '"' == e[e.length - 1]) ||
        ("'" == e[0] && "'" == e[e.length - 1])
      )
    )
      return e;
    let l = e.replaceAll("\\n", "");
    return (l = (l = l.replaceAll('\\"', "")).replaceAll("\\'", ""))
      .replace(/\uE000/g, "\n")
      .replace(/\uE001/g, '"')
      .replace(/\uE002/g, "'")
      .slice(1, -1);
  }
  removeCurlyBrackets(t: string) {
    return t.replace(/^\{|}$/g, "").trim();
  }
  removeSquareBrackets(t: string) {
    return t.replace(/^\[|\]$/g, "").trim();
  }
  removeBrackets(t: string) {
    return t.replace(/^\(|\)$/g, "").trim();
  }
  removeComments(t: string) {
    return t.replace(
      /(["'])(?:(?=(\\?))\2.)*?\1|\/\/.*|\/\*[\s\S]*?\*\//g,
      (t, e) => (e ? t : "")
    );
  }
  isCurlyBrackets(t: string) {
    return "string" == typeof t && "{" == t[0] && "}" == t[t.length - 1];
  }
  isSquareBrackets(t: string) {
    return "string" == typeof t && "[" == t[0] && "]" == t[t.length - 1];
  }
  isBrackets(t: string) {
    return "string" == typeof t && "(" == t[0] && ")" == t[t.length - 1];
  }
  isNoBrackets(t: string) {
    return (
      "string" == typeof t &&
      !(this.isBrackets(t) || this.isCurlyBrackets(t) || this.isSquareBrackets(t))
    );
  }
  const isNumeric = (t: string) => /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t);
  isValidVariableFormat(t: string) {
    return /^[A-Za-z0-9_]+$/.test(t);
  }
  isValidFunctionFormat(t: string) {
    return /^[A-Za-z0-9_.@#]+$/.test(t);
  }
  isValidDefinitionFormat(t: string) {
    return /^[A-Za-z0-9_.@#]+$/.test(t);
  }
  isValidAssignFormat(t: string) {
    return /^[A-Za-z0-9_.@#\[\]\" ]+$/.test(t);
  }
  randomStr(r = 10) {
    let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = "";
    for (let t = 0; t < r; t++)
      n += e.charAt(Math.floor(Math.random() * e.length));
    return n;
  }
  escapeRegExp(r: string) {
    return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  mergeNegativeNumbers(e: (string | number)[], t: string|string[]): (string | number)[] {
    let r: (string | number)[] = [];
    for (let n = 0; n < e.length; n++) {
      if (
        t.includes(e[n - 1] as string) && // Ensure `e[n-1]` is treated as a string
        e[n] === "-" &&
        !isNaN(Number(e[n + 1])) // Check if the next element can be a number
      ) {
        r.push(+e[n] + +e[n + 1]); // Concatenate negative sign with the number
        n++; // Skip the next index since it's already handled
      } else {
        r.push(e[n]);
      }
    }
    return r;
  }
  
  hexToFloats(t: string) {
    3 === (t = t.replace(/^#/, "")).length &&
      (t = t
        .split("")
        .map((t) => t + t)
        .join(""));
    let n = parseInt(t.substring(0, 2), 16),
      s = parseInt(t.substring(2, 4), 16),
      r = parseInt(t.substring(4, 6), 16);
    return { r: n / 255, g: s / 255, b: r / 255 };
  }
  
  Object_merge (e:Record<string,any>, t: Record<string,any>) {
    if ("object" != typeof e || "object" != typeof t) return t;
    {
      let o = this.Object_clone(e);
      for (let r in t)
        t.hasOwnProperty(r) &&
          ("object" == typeof t[r]
            ? (o[r] = this.Object_merge(e[r], t[r]))
            : (o[r] = t[r]));
      return o;
    }
  };
  Object_clone  (e: Record<string,any>):Record<string,any> {
    if (null === e) return {};
    if ("object" == typeof e) {
      if (Array.isArray(e)) return e.map((e) => this.Object_clone(e));
      if (e instanceof RegExp) return new RegExp(e);
      {
        let n:Record<string,any> = {};
        for (let r in e) e.hasOwnProperty(r) && (n[r] = this.Object_clone(e[r]));
        return n;
      }
    }
    return e;
  };
   Object_isSame  (e:Record<string,any>, t:Record<string,any>) {
    if ("object" != typeof e || "object" != typeof t) return !1;
    {
      if (e === t) return !0;
      let r = Object.keys(e),
        f = Object.keys(t);
      if (r.length !== f.length) return !1;
      for (let n of f) {
        if (!r.includes(n)) return !1;
        let i = typeof e[n],
          o = typeof t[n];
        if (i !== o) return !1;
        if ("object" === i && "object" === o) {
          if (!this.Object_isSame(e[n], t[n])) return !1;
        } else if (e[n] !== t[n]) return !1;
      }
      return !0;
    }
  };
  
   memory = {};
  
   code = `
  print(1..20)
  `;
  
   astSegment(code: string, root = true) {
    code = this.removeComments(code);
    const elements = this.splitSegment(code);
    let ast:{data:any[],definitions: any[]} = { data: [], definitions: [] };
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (!element) continue;
  
      const out = this.astNode(element);
      if (!out) continue;
  
      if (["function"].includes(out["kind"])) {
        if (root) {
          ast["definitions"].push(out);
        } else {
          this.error(null, "cannot define inside of a root segment");
        }
        continue;
      }
  
      ast["data"].push(out);
    }
    return ast;
  }
  astNodes(code: string[]|string) {
    let args = [];
    if (typeof code == "string") {
      args = this.splitCommandParams(code);
    } else {
      args = code;
    }
    let data = [];
    for (let i = 0; i < args.length; i++) {
      data.push(this.astNode(args[i]));
    }
    return data;
  }
  astDefintionArguments(code: string) {
    const args = this.splitCommandParams(code);
    let data:{types: string[],name: string, value: any}[] = [];
    for (let i = 0; i < args.length; i++) {
      const spacedTokens = this.splitCharedCommand(args[i], " ");
      let types: string[] = [];
      let name = "";
      let value = null;
      if (spacedTokens.indexOf("=") == 1) {
        name = spacedTokens.shift()!;
        spacedTokens.shift();
        value = this.astNode(spacedTokens.join(" "));
        types = ["any"];
      } else if (spacedTokens.indexOf("=") == 2) {
        const typeCode = spacedTokens.shift();
        if (this.isNoBrackets(typeCode!) && this.isValidDefinitionFormat(typeCode!)) {
          types = [typeCode!];
        } else if (this.isSquareBrackets(typeCode!)) {
          types = this.splitCommandParams(this.removeSquareBrackets(typeCode!));
        }
        name = spacedTokens.shift()!;
        spacedTokens.shift();
        value = this.astNode(spacedTokens.join(" "));
      } else {
        if (spacedTokens.length == 2) {
          const typeCode = spacedTokens.shift();
          if (this.isNoBrackets(typeCode!) && this.isValidDefinitionFormat(typeCode!)) {
            types = [typeCode!];
          } else if (this.isSquareBrackets(typeCode!)) {
            types = this.splitCommandParams(this.removeSquareBrackets(typeCode!));
          }
        } else if (spacedTokens.length == 1) {
          types = ["any"];
        }
        name = spacedTokens.shift()!;
      }
      data.push({ types: types, name: name, value: value });
    }
    return data;
  }
  astNode(code: string):any {
    if (!code) {
      return null;
    }
    if (code.length >= 2) {
      if (code.substring(0, 2) == "##") {
        return null;
      }
    }
  
    const rangeTokens = code.split("..");
  
    // number literal
    if (this.isNumeric(code)) {
      return [parseFloat(code), "num"];
    }
  
    const firstSpaceTokens = this.splitByFirstSpace(code);
    const commandTokens = this.splitCommand(code);
    const highPriority = ["return"];
    if (firstSpaceTokens.length == 2) {
      if (highPriority.includes(firstSpaceTokens[0])) {
        return {
          kind: "spacedCommand",
          key: this.astNode(firstSpaceTokens[0]),
          data: this.astNode(firstSpaceTokens[1]),
        };
      }
    }
  
    const operators:string[] = ["+", "++", "-", "*", "/", "%", "^"];
    const comparisons:Record<string,string> = {
      "==": "equal",
      "!=": "not_equal",
      "~=": "string_equal",
      ":=": "type_equal",
      ">": "greater",
      "<": "smaller",
      ">=": "greater_equal",
      "<=": "smaller_equal",
    };
  
    const assignmentTokens = this.splitAssignment(code, operators);
    const assignments:Record<string,string> = {
      "=": "default",
      "+=": "addition",
      "++=": "join",
      "-=": "subtraction",
      "*=": "multiplication",
      "/=": "division",
      "%=": "modulo",
      "^=": "power",
    };
    if (assignmentTokens.length >= 3) {
      const comparisonTokens = this.splitComparison(code, Object.keys(comparisons));
      if (!(comparisonTokens.length >= 3)) {
        if (Object.keys(assignments).includes(assignmentTokens[1])) {
          return {
            kind: "assignment",
            key: this.astNode(assignmentTokens.shift()!),
            type: assignments[assignmentTokens.shift()!]!,
            value: this.astNode(assignmentTokens.join(" ")),
          };
        }
      }
    }
  
    // logic symbols
    const logic:Record<string,string> = {
      "&&": "and",
      "||": "or",
    };
    const logicTokens = this.splitLogic(code);
    if (logicTokens.length > 1) {
      return {
        kind: "logic",
        b: this.astNode(logicTokens.pop()!),
        type: logic[logicTokens.pop()!],
        a: this.astNode(logicTokens.join(" ")),
      };
    }
    const spaceTokens = this.splitCharedCommand(code, " ");
  
    if (spaceTokens.length >= 3) {
      const spacedOperations = ["is", "in"];
      if (spacedOperations.includes(spaceTokens[spaceTokens.length - 2])) {
        return {
          kind: "operation",
          b: this.astNode(spaceTokens.pop()!),
          operator: spaceTokens.pop(),
          a: this.astNode(spaceTokens.join(" ")),
        };
      }
    }
  
    // comparisons
    const comparisonTokens = this.splitComparison(code, Object.keys(comparisons));
    if (comparisonTokens.length >= 3) {
      return {
        kind: "comparison",
        b: this.astNode(comparisonTokens.pop()!),
        type: comparisons[comparisonTokens.pop()!],
        a: this.astNode(comparisonTokens.join(" ")),
      };
    }
  
    // operatiors
    const operationTokens = this.mergeNegativeNumbers(
      this.splitOperators(code, operators),
      operators
    );
    if (operationTokens.length > 1) {
      if (operators.includes(`${operationTokens[operationTokens.length - 2]}`)) {
        return {
          kind: "operation",
          b: this.astNode(""+operationTokens.pop()!),
          operator: {
            "+": "addition",
            "++": "join",
            "-": "subtraction",
            "*": "multiplication",
            "/": "division",
            "%": "modulo",
            "^": "power",
          }[operationTokens.pop()!],
          a: this.astNode(operationTokens.join(" ")),
        };
      }
    }
  
    switch (code[0]) {
      case "!":
        return {
          kind: "operation",
          operator: "not",
          b: this.astNode(code.substring(1)),
        };
      case "?":
        return {
          kind: "operation",
          operator: "boolify",
          b: this.astNode(code.substring(1)),
        };
    }
  
    const restricted = ["fn", "else"];
    if (
      firstSpaceTokens.length == 2 &&
      this.isValidDefinitionFormat(firstSpaceTokens[0]) &&
      !restricted.includes(firstSpaceTokens[0])
    ) {
      if (
        !(this.isBrackets(commandTokens[1]) && commandTokens.length == 2) &&
        !(
          this.isBrackets(commandTokens[1]) &&
          this.isCurlyBrackets(commandTokens[2]) &&
          commandTokens.length == 3
        )
      ) {
        return {
          kind: "spacedCommand",
          key: this.astNode(firstSpaceTokens[0]),
          data: this.astNode(firstSpaceTokens[1]),
        };
      }
    }
  
    if (this.isBrackets(commandTokens[0])) {
      const commandTokens2 = this.splitCommand(code);
      const type = this.astNode(this.removeBrackets(commandTokens2.shift()!));
      const data = this.astNode(commandTokens2.join());
      if (data) {
        if (data["kind"] !== "unknown") {
          return {
            kind: "cast",
            type: type,
            data: data,
          };
        }
      }
    }
  
    // keys
    const keyTokens = this.splitReferences(code);
    if (keyTokens.length > 1) {
      if (this.isSquareBrackets(keyTokens[keyTokens.length - 1])) {
        return {
          kind: "key",
          key: this.astNode(this.removeSquareBrackets(keyTokens.pop()!)),
          data: this.astNode(keyTokens.join("")),
          isMethod: false,
        };
      }
    }
  
    // function
    if (firstSpaceTokens[0] == "fn") {
      const commandTokens2 = this.splitCommand(firstSpaceTokens[1]);
      if (
        commandTokens2.length == 3 &&
        this.isNoBrackets(commandTokens2[0]) &&
        this.isBrackets(commandTokens2[1]) &&
        this.isCurlyBrackets(commandTokens2[2])
      ) {
        return {
          kind: "function",
          data: {
            type: "definition",
            name: commandTokens2[0],
            args: this.astDefintionArguments(this.removeBrackets(commandTokens2[1])),
            data: this.astSegment(this.removeCurlyBrackets(commandTokens2[2])),
          },
        };
      }
    }
  
    if (commandTokens.length == 3) {
      if (
        commandTokens[0] === "fn" &&
        this.isBrackets(commandTokens[1]) &&
        this.isCurlyBrackets(commandTokens[2])
      ) {
        return {
          kind: "function",
          data: {
            type: "definition",
            args: this.astDefintionArguments(this.removeBrackets(commandTokens[1])),
            data: this.astSegment(this.removeCurlyBrackets(commandTokens[2])),
          },
        };
      }
    }
  
    // execution
    if (commandTokens.length > 1) {
      if (this.isBrackets(commandTokens[commandTokens.length - 1])) {
        return {
          kind: "execution",
          args: this.astNodes(this.removeBrackets(commandTokens.pop()!)),
          key: this.astNode(commandTokens.join("")),
        };
      }
      if (this.isCurlyBrackets(commandTokens[commandTokens.length - 1])) {
        if (this.isBrackets(commandTokens[commandTokens.length - 2])) {
          return {
            kind: "execution",
            content: this.astSegment(this.removeCurlyBrackets(commandTokens.pop()!), false)[
              "data"
            ],
            args: this.astNodes(this.removeBrackets(commandTokens.pop()!)),
            key: this.astNode(commandTokens.join("")),
          };
        }
      }
      if (this.isCurlyBrackets(commandTokens[commandTokens.length - 1])) {
        return {
          kind: "execution",
          content: this.astSegment(this.removeCurlyBrackets(commandTokens.pop()!), false)[
            "data"
          ],
          key: this.astNode(commandTokens.join("")),
        };
      }
    }
  
    const methodTokens = this.splitCharedCommand(code, ".");
    if (methodTokens.length > 1 && rangeTokens.length != 2) {
      const method = methodTokens.pop()!;
      if (this.isValidVariableFormat(method)) {
        return {
          kind: "key",
          key: [method, "str"],
          data: this.astNode(methodTokens.join(".")),
          isMethod: true,
        };
      }
    }
  
    if (this.isBrackets(code)) {
      const tokens = this.splitCommandParams(this.removeBrackets(code));
      if (tokens.length > 1) {
        return {
          kind: "tuple",
          data: this.astNodes(tokens),
        };
      }
      return this.astNode(this.removeBrackets(code));
    }
  
    if (this.isSquareBrackets(code)) {
      const tokens = this.splitCommandParams(this.removeSquareBrackets(code));
      return {
        kind: "array",
        data: this.astNodes(tokens),
      };
    }
  
    if (this.isCurlyBrackets(code)) {
      const tokens = this.splitCommandParams(this.removeCurlyBrackets(code));
      let values: any[] = [],
        keys: string[] = [],
        valid = true;
      tokens.map((pair) => {
        const pairTokens = this.splitCharedCommand(pair, ":");
        if (pairTokens.length == 2) {
          keys.push(this.astNode(pairTokens[0]));
          values.push(this.astNode(pairTokens[1]));
          return;
        }
        valid = false;
      });
      if (valid) {
        return {
          kind: "object",
          values: values,
          keys: keys,
        };
      }
    }
  
    // string literal
    if (
      (code[0] == '"' && code[code.length - 1] == '"') ||
      (code[0] == "'" && code[code.length - 1] == "'")
    ) {
      return [this.removeStr(code), "str"];
    }
  
    // a..b range operator
    if (rangeTokens.length == 2) {
      return {
        kind: "range",
        a: this.astNode(rangeTokens[0]),
        b: this.astNode(rangeTokens[1]),
      };
    }
  
    if (code[0] === "#" && (code.length == 4 || code.length == 7)) {
      return this.inst(this.hexToFloats(code), "color");
    }
  
    // reference
    if (this.isValidVariableFormat(code)) {
      return {
        kind: "variable",
        name: code,
      };
    }
  
    return {
      kind: "unknown",
      data: code,
    };
  }
  
  public runFunction(
    content,
    func,
    scope = {},
    root = false,
    stringify = false
  ) {
    if (root) {
      const out = runFunctionRaw(content, content, scope, stringify);
      if (out) {
        return out;
      }
    }
    if (func != "") {
      let funcDef = null;
      content["definitions"].map((def) => {
        if (def["kind"] == "function") {
          if (def["data"]["name"] == func) {
            funcDef = def;
          }
        }
      });
      if (funcDef) {
        return runFunctionRaw(content, funcDef["data"]["data"], scope, stringify);
      }
    }
  }
  runFunctionRaw(content, segment, scope = {}, stringify = false) {
    const astID = allocate(content);
    const dataID = allocate({
      scope: "",
      trace: allocate(traceMake(content)),
      ast: astID,
      memory_addresses: [],
    });
    const segmentScopeID = getScope(scope, segment["definitions"], dataID);
    const scopeID = getScope(
      memory[segmentScopeID],
      content["definitions"],
      dataID
    );
    memory[dataID]["typeAttributes"] = allocate(
      toNormalObject(allocateTypedObjectContents(globalTypeAttributes, dataID)),
      dataID
    );
    const typeAttr = memory[memory[dataID]["typeAttributes"]];
    Object.keys(typeAttr).map((k) => {
      typeAttr[k] = toNormalObject(typeAttr[k]);
    });
    memory[dataID]["scope"] = scopeID;
    let out = runSegmentRaw(segment["data"], dataID);
  
    if (stringify && out) {
      out = castType(null, out, "str")[0];
    }
  
    // cleanup
    const ids = memory[dataID]["memory_addresses"];
    deAllocate(
      scopeID,
      segmentScopeID,
      astID,
      memory[dataID]["trace"],
      dataID,
      ...ids
    );
  
    return out;
  }
  runSegmentRaw(content, dataID) {
    traceAdd(dataID, "content");
    for (let i = 0; i < content.length; i++) {
      const out = runNode(content[i], dataID);
      if (typeof out == "object" && out && !Array.isArray(out)) {
        if (out["kind"] == "return") {
          return out["data"];
        }
      }
    }
    traceOut(dataID);
  }
  runNodes(args, dataID) {
    return args.map((arg) => runNode(arg, dataID));
  }
  runNode(node, dataID, flags = [], extraData = {}) {
    if (Array.isArray(node)) {
      return node;
    }
    if (!node) {
      return inst("null", "null");
    }
    switch (node["kind"]) {
      case "execution":
        return runExecution(
          runNode(node["key"], dataID),
          node["key"],
          node["args"],
          node["content"],
          dataID
        );
      case "spacedCommand":
        return runExecution(
          runNode(node["key"], dataID),
          node["key"],
          [runNode(node["data"], dataID)],
          null,
          dataID,
          "spaced"
        );
      case "variable":
        // no im not explaining this
        if (flags.includes("check")) {
          return Object.keys(memory[memory[dataID]["scope"]]).includes(
            node["name"]
          );
        }
        if (Object.keys(memory[memory[dataID]["scope"]]).includes(node["name"])) {
          if (flags.includes("assignment")) {
            return memory[memory[dataID]["scope"]][node["name"]];
          }
          return getMemory(memory[memory[dataID]["scope"]][node["name"]], dataID);
        } else {
          if (flags.includes("assignment")) {
            const id = randomStr(10);
            memory[dataID]["memory_addresses"].push(id);
            memory[memory[dataID]["scope"]][node["name"]] = id;
            return id;
          }
          error(dataID, "variable not defined", node["name"]);
          return inst("null", "null");
        }
      case "operation":
        return runOperation(
          node["operator"],
          runNode(node["a"], dataID),
          runNode(node["b"], dataID),
          dataID
        );
      case "comparison":
        return runComparison(
          node["type"],
          runNode(node["a"], dataID),
          runNode(node["b"], dataID),
          dataID
        );
      case "logic":
        return runLogic(
          node["type"],
          runNode(node["a"], dataID),
          runNode(node["b"], dataID),
          dataID
        );
      case "assignment":
        let value = runNode(node["value"], dataID);
        const reference = runNode(node["key"], dataID, ["assignment"]);
        if (
          [
            "addition",
            "join",
            "subtraction",
            "multiplication",
            "division",
            "modulo",
            "power",
          ].includes(node["type"])
        ) {
          const base = runNode(runNode(node["key"], dataID));
          value = runOperation(node["type"], base, value);
        }
        if (reference && typeof reference !== "object") {
          memory[reference] = value;
        } else {
          error(dataID, "cannot assign to non-allocatable value");
        }
        return value;
      case "key":
        let keyOrg = runNode(node["data"], dataID);
        const id = runKey(
          keyOrg,
          runNode(node["key"], dataID),
          node["isMethod"],
          dataID
        );
        if (flags.includes("assignment")) {
          return id;
        }
        let keyOut = getMemory(id, dataID);
        if (keyOut) {
          if (keyOut.length == 2) {
            keyOut.push({});
          }
          keyOut[2]["original"] = keyOrg;
          return keyOut;
        }
        return inst("null", "null");
      case "range":
        let range = [];
        const a = runNode(node["a"], dataID),
          b = runNode(node["b"], dataID);
        if (a[1] != "num" || b[1] != "num") {
          error(dataID, "both sides of range must be a num");
        }
        for (let i = a[0]; i <= b[0]; i++) {
          range.push(allocate(inst(i, "num"), dataID));
        }
        return inst(range, "tuple");
      case "cast":
        const type = runNode(node["type"], dataID);
        if (type[1] !== "type") {
          error(dataID, "cannot cast to non-type value");
        }
        return castType(dataID, runNode(node["data"], dataID), type[0]);
  
      case "tuple":
        return inst(
          node["data"].map((elem) => allocate(runNode(elem, dataID), dataID)),
          "tuple"
        );
      case "array":
        return inst(
          node["data"].map((elem) => allocate(runNode(elem, dataID), dataID)),
          "arr"
        );
      case "object":
        return inst(
          {
            keys: node["keys"].map((key) => runNode(key, dataID)),
            values: node["values"].map((value) =>
              allocate(runNode(value, dataID), dataID)
            ),
          },
          "obj"
        );
      case "function":
        return inst(node["data"], "func");
  
      case "unknown":
        error(dataID, "unknown tokens", node["data"]);
        return inst("null", "null");
      default:
        error(dataID, "unknown node type", node["kind"]);
    }
  }
  runExecution(
    execution,
    value,
    args,
    content,
    dataID,
    type = "standard"
  ) {
    if (!execution) return inst("null", "null");
    if (execution[1] !== "func") {
      error(dataID, "cannot run values of type", execution[1]);
      return inst("null", "null");
    }
    if (typeof execution[0] == "string") execution[0] = memory[execution[0]];
  
    if (execution.length == 3) {
      if (
        (execution[2]["functionType"]
          ? execution[2]["functionType"]
          : "standard") != type
      ) {
        if (
          execution[2]["functionStrict"] != null
            ? execution[2]["functionStrict"]
            : true
        ) {
          error(dataID, "cannot run", type, "as", execution[2]["functionType"]);
        }
      }
    }
  
    switch (execution[0]["type"]) {
      case "builtin":
        args = runNodes(args, dataID);
        const data = execution[0]["data"](dataID, ...args);
        if (data) {
          return data;
        }
        return inst("null", "null");
      case "builtin_statement":
        const data2 = execution[0]["data"](dataID, content, ...args);
        if (data2) {
          return data2;
        }
        return inst("null", "null");
      case "method":
        if (
          typeof execution[2] === "object" &&
          execution[2] &&
          execution[2]["original"]
        ) {
          const data3 = execution[0]["data"](
            dataID,
            execution[2]["original"],
            content,
            ...args
          );
          if (data3) {
            return data3;
          }
          return inst("null", "null");
        } else {
          error(dataID, "unrunnable method");
        }
      case "definition":
        args = runNodes(args, dataID);
        const ast = memory[memory[dataID]["ast"]];
        let scope = runArguments(execution[0]["args"], args, dataID);
        Object.entries(memory[memory[dataID]["scope"]]).forEach((entry) => {
          if (!scope[entry[0]]) {
            scope[entry[0]] = memory[entry[1]];
          }
        });
        const funcAstID = allocate(ast);
        const funcDataID = allocate({
          scope: "",
          trace: allocate(traceMake(ast)),
          ast: funcAstID,
          memory_addresses: [],
        });
        const funcScopeID = getScope(scope, ast["definitions"], funcDataID);
        memory[funcDataID]["scope"] = funcScopeID;
        memory[funcDataID]["typeAttributes"] = allocate(
          toNormalObject(
            allocateTypedObjectContents(globalTypeAttributes, funcDataID)
          ),
          funcDataID
        );
        const typeAttr = memory[memory[funcDataID]["typeAttributes"]];
        Object.keys(typeAttr).map((k) => {
          typeAttr[k] = toNormalObject(typeAttr[k]);
        });
        const out = runSegmentRaw(execution[0]["data"]["data"], funcDataID);
        deAllocate(
          funcAstID,
          funcScopeID,
          memory[funcDataID]["trace"],
          funcDataID,
          ...memory[funcDataID]["memory_addresses"]
        );
        if (out) {
          return out;
        } else {
          return inst("null", "null");
        }
      default:
        error(dataID, "unknown type", execution[0]["type"]);
        return inst("null", "null");
    }
  }
  runArguments(definition, args, dataID) {
    let data = {};
    for (let i = 0; i < definition.length; i++) {
      const definitionArg = definition[i];
      const passedArg = args[i];
      if (!passedArg) {
        if (definitionArg["value"]) {
          data[definitionArg["name"]] = runNode(definitionArg["value"], dataID);
        } else {
          error(dataID, "missing argument", definitionArg["name"]);
        }
      } else {
        if (isTypes(passedArg[1], definitionArg["types"])) {
          data[definitionArg["name"]] = passedArg;
        } else {
          error(
            dataID,
            "expected",
            definitionArg["types"].join(" or "),
            "got",
            passedArg[1]
          );
        }
      }
    }
    return data;
  }
  runOperation(operation, a, b, dataID) {
    if (a[1] === "color" && b[1] === "color") {
      return inst(
        {
          r: runOperation(
            operation,
            inst(a[0]["r"], "num"),
            inst(b[0]["r"], "num")
          )[0],
          g: runOperation(
            operation,
            inst(a[0]["g"], "num"),
            inst(b[0]["g"], "num")
          )[0],
          b: runOperation(
            operation,
            inst(a[0]["b"], "num"),
            inst(b[0]["b"], "num")
          )[0],
        },
        "color"
      );
    }
    if (a[1] === "color") {
      return inst(
        {
          r: runOperation(operation, inst(a[0]["r"], "num"), b)[0],
          g: runOperation(operation, inst(a[0]["g"], "num"), b)[0],
          b: runOperation(operation, inst(a[0]["b"], "num"), b)[0],
        },
        "color"
      );
    }
    if (b[1] === "color") {
      return inst(
        {
          r: runOperation(operation, a, inst(b[0]["r"], "num"))[0],
          g: runOperation(operation, a, inst(b[0]["g"], "num"))[0],
          b: runOperation(operation, a, inst(b[0]["b"], "num"))[0],
        },
        "color"
      );
    }
    switch (operation) {
      case "addition":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] + b[0], "num");
        }
        return inst(
          castType(dataID, a, "str")[0] + " " + castType(dataID, b, "str")[0],
          "str"
        );
      case "join":
        return inst(
          castType(dataID, a, "str")[0] + castType(dataID, b, "str")[0],
          "str"
        );
      case "subtraction":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] - b[0], "num");
        }
        error(dataID, "cannot subtract", a[1], "by", b[1]);
      case "multiplication":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] * b[0], "num");
        }
        if (b[1] == "num") {
          return inst(castType(dataID, a, "str")[0].repeat(b[0]), "str");
        }
        if (a[1] == "num") {
          return inst(castType(dataID, b, "str")[0].repeat(a[0]), "str");
        }
        error(dataID, "cannot multiply", a[1], "by", b[1]);
      case "division":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] / b[0], "num");
        }
        error(dataID, "cannot divide", a[1], "by", b[1]);
      case "modulo":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] % b[0], "num");
        }
        error(dataID, "cannot modulo", a[1], "by", b[1]);
      case "power":
        if (a[1] === "num" && b[1] === "num") {
          return inst(a[0] ** b[0], "num");
        }
        error(dataID, "cannot raise", a[1], "to power", b[1]);
  
      case "is":
        if (b[1] !== "type") {
          return false;
        }
        return inst(a[1] == b[0], "bool");
      case "in":
        return inst(
          castType(dataID, b, "arr")[0]
            .map((val) => getMemory([val]))
            .findIndex((val) => isEqual(val, a)) !== -1,
          "bool"
        );
  
      case "not":
        return inst(!castType(dataID, b, "bool")[0], "bool");
      case "boolify":
        return inst(castType(dataID, b, "bool")[0], "bool");
  
      default:
        error(dataID, "unknown operation", operation);
    }
  }
  runComparison(type, a, b, dataID) {
    switch (type) {
      case "equal":
        return inst(isEqual(a, b), "bool");
      case "not_equal":
        return inst(!isEqual(a, b), "bool");
      case "string_equal":
        return inst(
          castType(dataID, a, "str")[0] == castType(dataID, b, "str")[0],
          "bool"
        );
      case "type_equal":
        return inst(a[1] === b[1]);
  
      case "greater":
        return inst(
          castType(dataID, a, "num")[0] > castType(dataID, b, "num")[0],
          "bool"
        );
      case "smaller":
        return inst(
          castType(dataID, a, "num")[0] < castType(dataID, b, "num")[0],
          "bool"
        );
      case "greater_equal":
        return inst(
          castType(dataID, a, "num")[0] >= castType(dataID, b, "num")[0],
          "bool"
        );
      case "smaller_equal":
        return inst(
          castType(dataID, a, "num")[0] <= castType(dataID, b, "num")[0],
          "bool"
        );
  
      default:
        error(dataID, "unknown comparison", type);
    }
    return inst("null", "null");
  }
  runLogic(type, a, b, dataID) {
    a = castType(dataID, a, "bool");
    b = castType(dataID, b, "bool");
    switch (type) {
      case "and":
        return inst(a[0] && b[0], "bool");
      case "or":
        return inst(a[0] || b[0], "bool");
      default:
        error(dataID, "unknown logic type", type);
    }
  }
  runKey(value, key, isMethod, dataID) {
    //console.log(value,key);
    if (isMethod) {
      const typeAttributes = memory[memory[dataID]["typeAttributes"]];
      if (Object.keys(typeAttributes).includes(value[1])) {
        const k = castType(dataID, key, "str")[0];
        if (Object.keys(typeAttributes[value[1]]).includes(k)) {
          return typeAttributes[value[1]][k];
        }
      }
    }
    const indexedValue = castType(dataID, value, "arr", false, true, true);
    if (indexedValue) {
      const index = castType(dataID, key, "num", false, true);
      if (index) {
        return indexedValue[0][index[0]];
      }
    }
    if (value[0] && !Array.isArray(value[0]) && typeof value[0] == "object") {
      if (value[0]["keys"]) {
        const keyIndex = value[0]["keys"].findIndex((objKey) =>
          Object_isSame(objKey, key)
        );
        if (keyIndex > -1) {
          return value[0]["values"][keyIndex];
        }
      }
    }
    return inst("null", "null");
  }
  
  globalTypeAttributes = {
    str: {
      upper: inst(
        {
          type: "method",
          data: (dataID, selfValue, ...args) =>{
            return inst(
              castType(dataID, selfValue, "str")[0].toUpperCase(),
              "str"
            );
          },
        },
        "func"
      ),
      silly: inst("test", "str"),
    },
  };
  
  getScope(scope, definitions, scopeDataID) {
    let data = {
      // constants
      null: inst("null", "null"),
      true: inst(true, "bool"),
      false: inst(false, "bool"),
  
      // types
      str: inst("str", "type"),
      num: inst("num", "type"),
      bool: inst("bool", "type"),
      tuple: inst("tuple", "type"),
      type: inst("type", "type"),
      obj: inst("obj", "type"),
      arr: inst("arr", "type"),
      func: inst("func", "type"),
      nullish: inst("null", "type"),
      color: inst("color", "type"),
  
      // functions
      print: inst(
        {
          type: "builtin",
          data: (dataID, ...args) {
            print(dataID, ...args.map((arg) => castType(dataID, arg, "str")[0]));
  
            // if it is only 1 argument, return that argument
            if (args.length == 1) {
              return args[0];
            }
            // if it is more than 1 argument, return it as a tuple
            return inst(
              args.map((arg) => allocate(arg, dataID)),
              "tuple"
            );
          },
        },
        "func"
      ),
      typeof: inst(
        // typeof is both a and a spaced command
        {
          type: "builtin",
          data: (dataID, ...args) {
            if (args.length == 1) {
              return inst(args[0][1], "type");
            } else {
              return inst(
                args.map((arg) => allocate([arg[1], "type"], dataID)),
                "tuple"
              );
            }
          },
        },
        "func",
        {
          functionType: "spaced", // its a spaced command (typeof ":3")
          functionStrict: false, // it CAN be used as a normal (typeof(":3"))
        }
      ),
      return: inst(
        {
          type: "builtin",
          data: (dataID, ...args) {
            if (args.length > 0) {
              if (args.length == 1) {
                return {
                  kind: "return",
                  data: args[0],
                };
              } else {
                return {
                  kind: "return",
                  data: inst(
                    args.map((arg) => allocate(arg)),
                    "tuple"
                  ),
                };
              }
            } else {
              return {
                kind: "return",
                data: null,
              };
            }
          },
        },
        "func",
        { functionType: "spaced", functionStrict: false }
      ),
      len: inst(
        {
          type: "builtin",
          data: (dataID, ...args) {
            if (args.length == 1) {
              return inst(castType(dataID, args[0], "arr")[0].length, "num");
            } else {
              return inst(
                args.map((arg) =>
                  inst(castType(dataID, arg, "arr")[0].length, "num")
                ),
                "tuple"
              );
            }
          },
        },
        "func"
      ),
      abs: inst(
        {
          type: "builtin",
          data: (dataID, ...args) {
            if (args.length == 1) {
              return inst(Math.abs(castType(dataID, args[0], "num")[0]), "num");
            } else {
              return inst(
                args.map((arg) =>
                  inst(Math.abs(castType(dataID, arg, "num")[0]), "num")
                ),
                "tuple"
              );
            }
          },
        },
        "func"
      ),
      random: inst(
        {
          type: "builtin",
          data: (dataID, ...args) {
            if (args.length == 0) {
              return inst(Math.random(), "num");
            }
            if (args.length == 1) {
              return inst(
                Math.floor(
                  Math.random() * (castType(dataID, args[0], "num")[0] + 1)
                ),
                "num"
              );
            }
            if (args.length == 2) {
              const a = castType(dataID, args[0], "num")[0];
              const b = castType(dataID, args[1], "num")[0];
              return inst(Math.floor(Math.random() * (b - a + 1)) + a, "num");
            }
          },
        },
        "func"
      ),
      // statements
      if: inst(
        {
          type: "builtin_statement",
          data: (dataID, content, ...args) {
            const val = args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            );
            if (val) {
              const out = runSegmentRaw(content, dataID);
              if (out) {
                return { kind: "return", data: out };
              }
            }
          },
        },
        "func"
      ),
      while: inst(
        {
          type: "builtin_statement",
          data: (dataID, content, ...args) {
            let val = args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            );
            while (val) {
              const out = runSegmentRaw(content, dataID);
              if (out) {
                return { kind: "return", data: out };
              }
              val = args.every(
                (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
              );
            }
          },
        },
        "func"
      ),
      until: inst(
        {
          type: "builtin_statement",
          data: (dataID, content, ...args) {
            let val = args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            );
            while (!val) {
              const out = runSegmentRaw(content, dataID);
              if (out) {
                return { kind: "return", data: out };
              }
              val = args.every(
                (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
              );
            }
          },
        },
        "func"
      ),
      for: inst(
        {
          type: "builtin_statement",
          data: (dataID, content, ...args) {
            if (args.length < 1 || args.length > 3) {
              error(dataID, "unknown for syntax");
            }
  
            let variable = null;
            let value = null;
            let step = 1;
  
            let current = args.shift();
            if (!Array.isArray(current)) {
              if (current["kind"] == "variable") {
                runNode(
                  {
                    kind: "assignment",
                    type: "default",
                    key: current,
                    value: inst(0, "num"),
                  },
                  dataID
                );
                variable = current;
              } else if (current["kind"] == "assignment") {
                runNode(current, dataID);
                variable = current["key"];
              } else {
                error(dataID, "first argument isnt assignment or variable");
              }
              if (args.length > 0) {
                current = args.shift();
                value = current;
              }
            } else {
              value = current;
            }
  
            if (args.length > 0) {
              step = castType(dataID, runNode(args.shift(), dataID), "num")[0];
            }
  
            let iter = runNode(value, dataID);
            if (iter[1] == "num") {
              for (let i = 0; i < iter[0]; i++) {
                const out = runSegmentRaw(content, dataID);
                if (out) {
                  return { kind: "return", data: out };
                }
                if (variable) {
                  runNode(
                    {
                      kind: "assignment",
                      type: "addition",
                      key: variable,
                      value: inst(step, "num"),
                    },
                    dataID
                  );
                }
              }
            } else {
              iter = castType(dataID, iter, "bool")[0];
              while (iter) {
                const out = runSegmentRaw(content, dataID);
                if (out) {
                  return { kind: "return", data: out };
                }
                if (variable) {
                  runNode(
                    {
                      kind: "assignment",
                      type: "addition",
                      key: variable,
                      value: inst(step, "num"),
                    },
                    dataID
                  );
                }
                iter = castType(dataID, runNode(value, dataID), "bool")[0];
              }
            }
          },
        },
        "func"
      ),
    };
    const keys = Object.keys(definitions);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const def = definitions[key]["data"];
      if (definitions[key]["kind"] == "function") {
        data[def["name"]] = inst(allocate(def, scopeDataID), "func");
      }
    }
    // allocate all the values and functions into memory
    data["scope"] = "FSL_SCOPE_ID";
    return allocate(
      toNormalObject(
        allocateTypedObjectContents(Object_merge(scope, data), scopeDataID)
      ),
      scopeDataID
    );
  }
  allocate(value, dataID = null, staticID = null) {
    let id = staticID;
    if (!staticID) {
      id = randomStr(10);
    }
    if (dataID) {
      memory[dataID]["memory_addresses"].push(id);
    }
    memory[id] = value;
    //console.log("allocated",id,value);
    return id;
  }
  allocateTypedObjectContents(object, dataID) {
    if (!Array.isArray(object) && typeof object == "object" && object) {
      let data = { keys: [], values: [] };
      for (let i = 0; i < Object.keys(object).length; i++) {
        const key = Object.keys(object)[i];
        data["keys"].push(inst(key, "str"));
        if (
          typeof object[key] == "object" &&
          object[key] &&
          !Array.isArray(object[key])
        ) {
          data["values"].push(allocateTypedObjectContents(object[key], dataID));
        } else {
          data["values"].push(allocate(object[key], dataID));
        }
      }
      return inst(data, "obj");
    }
    return object;
  }
  allocateTypedObject(object, dataID) {
    return allocate(allocateTypedObjectContents(object, dataID), dataID);
  }
  toNormalObject(object) {
    let newObj = {};
    if (!object) {
      return {};
    }
    for (let i = 0; i < object[0]["keys"].length; i++) {
      const k = object[0]["keys"][i];
      newObj[k[0]] = object[0]["values"][i];
    }
    return newObj;
  }
  deAllocate(...ids) {
    for (let i = 0; i < ids.length; i++) {
      delete memory[ids[i]];
      //console.log("deallocated",ids[i]);
    }
  }
  getMemory(id, dataID) {
    if (id == "FSL_SCOPE_ID") {
      return [
        {
          keys: Object.keys(memory[memory[dataID]["scope"]]).map((key) =>
            inst(key, "str")
          ),
          values: Object.values(memory[memory[dataID]["scope"]]),
        },
        "obj",
      ];
    }
    return memory[id];
  }
  
  traceMake(ast) {
    return { ast: ast, path: [] };
  }
  traceDirectAdd(trace, node) {
    trace["path"].push(node);
    return trace;
  }
  traceAdd(dataID, node) {
    let trace = memory[memory[dataID]["trace"]];
    trace = traceDirectAdd(trace, node);
    memory[memory[dataID]["trace"]] = trace;
    return dataID;
  }
  traceDirectOut(trace) {
    trace["path"].pop();
    return trace;
  }
  traceOut(dataID) {
    let trace = memory[memory[dataID]["trace"]];
    trace = traceDirectOut(trace);
    memory[memory[dataID]["trace"]] = trace;
    return dataID;
  }
  
  castType(
    dataID,
    value,
    type,
    formatting = false,
    tryTo = false,
    doNotToArray = false
  ) {
    if (typeof value == "string") {
      if (value == "FSL_SCOPE_ID") {
        return inst("<object:fsl_scope>", "str");
      }
      value = memory[value];
    }
    if (
      !value &&
      (typeof value == "object" || typeof value == "undefined") &&
      !Array.isArray(value)
    ) {
      return inst("<error:stringify_error>", "str");
    }
    if (value[1] === "str" && type === "str" && formatting) {
      return inst('"' + value[0].toString() + '"', "str");
    }
    if (value[1] === type) return value;
    switch (type) {
      case "str":
        if (value[1] === "func") {
          let funcType = value[0]["type"];
          if (typeof value[0] == "string") {
            funcType = memory[value[0]]["type"];
          }
          return inst("<func:" + funcType + ">", "str");
        }
        if (value[1] == "type") {
          return inst("<type:" + value[0] + ">", "str");
        }
  
        if (value[1] === "tuple") {
          return inst(
            "(" +
              value[0]
                .map((e) => castType(dataID, memory[e], "str", true)[0])
                .join(", ") +
              ")",
            "str"
          );
        }
        if (value[1] === "obj") {
          return inst(
            "{" +
              value[0]["keys"]
                .map(
                  (key, index) =>
                    castType(dataID, key, "str", true)[0] +
                    ":" +
                    castType(
                      dataID,
                      value[0]["values"][value[0]["keys"].indexOf(key)],
                      "str",
                      true
                    )[0]
                )
                .join(", ") +
              "}",
            "str"
          );
        }
        if (value[1] === "arr") {
          return inst(
            "[" +
              value[0]
                .map((value) => castType(dataID, value, "str", true)[0])
                .join(", ") +
              "]",
            "str"
          );
        }
        if (value[1] === "color") {
          return inst(
            "#" +
              Math.round(value[0]["r"] * 255)
                .toString(16)
                .padStart(2, "0") +
              Math.round(value[0]["g"] * 255)
                .toString(16)
                .padStart(2, "0") +
              Math.round(value[0]["b"] * 255)
                .toString(16)
                .padStart(2, "0"),
            "str"
          );
        }
        return inst(value[0].toString(), "str");
      case "num":
        if (value[1] === "str") {
          if (isNumeric(value[0])) {
            return inst(Number(value[0]), "num");
          }
        }
        return inst(0, "num");
      case "bool":
        switch (value[1]) {
          case "str":
            return inst(value[0].length > 0, "bool");
          case "num":
            return inst(value[0] > 0, "bool");
          case "tuple":
          case "arr":
            return inst(value[0].length > 0, "bool");
          case "type":
            return inst(value[0] !== "null", "bool");
          case "obj":
            return inst(Object.keys(value[0]).length > 0, "bool");
          case "color":
            return inst(true, "bool");
        }
        return inst(false, "bool");
      case "tuple":
      case "arr":
        if (value[1] === "str" || value[1] === "num") {
          if (value[1] == "num") {
            value[0] = value[0].toString();
          }
          return inst(
            value[0].split("").map((char) => allocate(inst(char, "str"), dataID)),
            type
          );
        }
        if (value[1] === "obj") {
          if (doNotToArray) {
            return null;
          }
          return inst(
            Object.keys(value[0]).map((key) =>
              allocate(inst(key, "str"), dataID)
            ),
            type
          );
        }
        if (value[1] === "tuple" || value[1] === "arr") {
          return inst(value[0], type);
        }
        return inst([], type);
      case "type":
        return inst(value[1], "type");
      case "color":
        switch (value[1]) {
          case "tuple":
          case "arr":
            if (value[0].length === 3) {
              const r = memory[value[0][0]],
                g = memory[value[0][1]],
                b = memory[value[0][2]];
              if (r[1] === "num" && g[1] === "num" && b[1] === "num") {
                return inst({ r: r[0], g: g[0], b: b[0] }, "color");
              }
            }
          case "str":
            return inst(hexToFloats(value[0]), "color");
          case "num":
            return inst({ r: value[0], g: value[0], b: value[0] }, "color");
        }
        return inst({ r: 0, g: 0, b: 0 }, "color");
      default:
        if (tryTo) {
          return null;
        }
        error(dataID, "cannot cast type", value[1], "to type", type);
    }
  }
  isTypeEqual(typeA, typeB) {
    if (typeA === typeB) {
      return true;
    }
    if (typeA === "any" || typeB === "any") {
      return true;
    }
    return false;
  }
  isTypes(type, types) {
    for (let i = 0; i < types.length; i++) {
      if (!isTypeEqual(type, types[i])) {
        return false;
      }
    }
    return true;
  }
  inst(value, type, extra = null) {
    // short version of instance type
    if (type === "color") {
      if (value["r"] < 0) {
        value["r"] = 0;
      }
      if (value["g"] < 0) {
        value["g"] = 0;
      }
      if (value["b"] < 0) {
        value["b"] = 0;
      }
      if (value["r"] > 1) {
        value["r"] = 1;
      }
      if (value["g"] > 1) {
        value["g"] = 1;
      }
      if (value["b"] > 1) {
        value["b"] = 1;
      }
    }
    return instanceType(value, type, extra);
  }
  instanceType(value, type, extra = null) {
    //console.log("instanced value of type", type /*, "value (",value,")"*/ );
    if (extra) return [value, type, extra];
    else return [value, type];
  }
  isEqual(a, b) {
    if (!isTypeEqual(a[1], b[1])) {
      return false;
    }
    if (typeof a[0] !== typeof b[0]) {
      return false;
    }
    if (typeof a[0] == "object" && a) {
      return Object_isSame(a, b);
    }
    return a[0] === b[0];
  }
  
  print(dataID, ...text) {
    console.log(...text);
  }
  error(dataID, ...text) {
    console.error(...text);
    process.exit();
  }
  
  // is being run directly (nodeJS)
  if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}`) {
    //console.log(JSON.stringify(astSegment(code)));
    const out = runFunction(astSegment(code), "main", {}, true, true);
    if (out) print(null, "out:", out);
    if (Object.keys(memory).length) {
      console.warn(Object.keys(memory).length, "memory item(s) still allocated");
      console.warn(memory);
    }
  }
  
}