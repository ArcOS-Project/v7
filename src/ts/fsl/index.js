export function splitLogic(t) {
  const e = [];
  let i = "",
    r = !1,
    s = !1,
    n = 0,
    u = 0,
    c = 0,
    o = !1;
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
export function splitOperators(t, e) {
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
export function splitStatement(t) {
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
export function splitSegment(input) {
  let segments = [];
  let currentSegment = "";
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let braceDepth = 0; // Tracks {}
  let bracketDepth = 0; // Tracks []
  let parenDepth = 0; // Tracks ()

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const prevChar = i > 0 ? input[i - 1] : null;
    const isEscaped = prevChar === "\\";

    // Handle string quotes correctly
    if (char === '"' && !inSingleQuote && !isEscaped) {
      inDoubleQuote = !inDoubleQuote;
    } else if (char === "'" && !inDoubleQuote && !isEscaped) {
      inSingleQuote = !inSingleQuote;
    }

    // If inside a string, just add the character and continue
    if (inSingleQuote || inDoubleQuote) {
      currentSegment += char;
      continue;
    }

    // Track nesting levels
    switch (char) {
      case "{":
        braceDepth++;
        break;
      case "}":
        braceDepth--;
        break;
      case "[":
        bracketDepth++;
        break;
      case "]":
        bracketDepth--;
        break;
      case "(":
        parenDepth++;
        break;
      case ")":
        parenDepth--;
        break;
    }

    // Handle top-level splitting on `;`
    if (
      char === ";" &&
      braceDepth === 0 &&
      bracketDepth === 0 &&
      parenDepth === 0
    ) {
      segments.push(currentSegment.trim()); // Add current segment without `;`
      currentSegment = ""; // Reset for the next segment
      continue; // Skip adding `;` to the next segment
    }

    // Handle splitting after `}` or `]` at top level
    if (
      (char === "}" || char === "]") &&
      braceDepth === 0 &&
      bracketDepth === 0 &&
      parenDepth === 0 &&
      ![input[i + 1], input[i + 2], input[i + 3], input[i + 4]].includes("=") &&
      ![input[i + 1], input[i + 2], input[i + 3]].includes("-") &&
      ![input[i + 1], input[i + 2], input[i + 3]].includes("+") &&
      ![input[i + 1], input[i + 2], input[i + 3]].includes(".")
    ) {
      currentSegment += char; // Keep `}` or `]` in the segment
      segments.push(currentSegment.trim()); // Push the current segment
      currentSegment = ""; // Reset for the next segment
      continue; // Skip further processing for this character
    }

    // Add character to current segment
    currentSegment += char;
  }

  // Push the last segment if it exists
  if (currentSegment.trim()) {
    segments.push(currentSegment.trim());
  }

  return segments;
}
export function splitAssignment(t, l) {
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
export function splitByFirstSpace(t) {
  const e = (t = t.trim()).indexOf(" ");
  if (-1 === e) return [t];
  return [t.slice(0, e), t.slice(e + 1)];
}
export function splitCharedCommand(t, e) {
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
export function splitCommand(t) {
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
export function splitReferences(t) {
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
export function splitCommandParams(t) {
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
export function splitComparison(t, i) {
  i = i.filter((t) => ">" !== t && "<" !== t);
  let r = RegExp(`(${i.map(escapeRegExp).join("|")})`),
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
export function removeStr(e) {
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
export function removeCurlyBrackets(t) {
  return t.replace(/^\{|}$/g, "").trim();
}
export function removeSquareBrackets(t) {
  return t.replace(/^\[|\]$/g, "").trim();
}
export function removeBrackets(t) {
  return t.replace(/^\(|\)$/g, "").trim();
}
export function removeComments(t) {
  return t.replace(
    /(["'])(?:(?=(\\?))\2.)*?\1|\/\/.*|\/\*[\s\S]*?\*\//g,
    (t, e) => (e ? t : "")
  );
}
export function isCurlyBrackets(t) {
  return "string" == typeof t && "{" == t[0] && "}" == t[t.length - 1];
}
export function isSquareBrackets(t) {
  return "string" == typeof t && "[" == t[0] && "]" == t[t.length - 1];
}
export function isBrackets(t) {
  return "string" == typeof t && "(" == t[0] && ")" == t[t.length - 1];
}
export function isNoBrackets(t) {
  return (
    "string" == typeof t &&
    !(isBrackets(t) || isCurlyBrackets(t) || isSquareBrackets(t))
  );
}
const isNumeric = (t) => /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t);
export function isValidVariableFormat(t) {
  return /^[A-Za-z0-9_]+$/.test(t);
}
export function isValidFunctionFormat(t) {
  return /^[A-Za-z0-9_.@#]+$/.test(t);
}
export function isValidDefinitionFormat(t) {
  return /^[A-Za-z0-9_.@#]+$/.test(t);
}
export function isValidAssignFormat(t) {
  return /^[A-Za-z0-9_.@#\[\]\" ]+$/.test(t);
}
export function randomStr(r = 10) {
  let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    n = "";
  for (let t = 0; t < r; t++)
    n += e.charAt(Math.floor(Math.random() * e.length));
  return n;
}
export function escapeRegExp(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function mergeNegativeNumbers(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++)
    t.includes(e[n - 1]) && "-" === e[n] && !isNaN(e[n + 1])
      ? (r.push(e[n] + e[n + 1]), n++)
      : r.push(e[n]);
  return r;
}
export function hexToFloats(t) {
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

const Object_merge = function (e, t) {
  if ("object" != typeof e || "object" != typeof t) return t;
  {
    let o = Object_clone(e);
    for (let r in t)
      t.hasOwnProperty(r) &&
        ("object" == typeof t[r]
          ? (o[r] = Object_merge(e[r], t[r]))
          : (o[r] = t[r]));
    return o;
  }
};
const Object_clone = function (e) {
  if (null === e) return null;
  if ("object" == typeof e) {
    if (Array.isArray(e)) return e.map((e) => Object_clone(e));
    if (e instanceof RegExp) return new RegExp(e);
    {
      let n = {};
      for (let r in e) e.hasOwnProperty(r) && (n[r] = Object_clone(e[r]));
      return n;
    }
  }
  return e;
};
const Object_isSame = function (e, t) {
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
        if (!Object_isSame(e[n], t[n])) return !1;
      } else if (e[n] !== t[n]) return !1;
    }
    return !0;
  }
};

const memory = {};
const global = {};

const local_system = {
  sillyLibrary: `
        test = "hi";
        fn silly() {
            print(":3", what);
            return test;
        }
        return "wow";
    `,
};

let code = `
/*
import sillyLibrary;
import sillyLibrary as sl;
what = "goofy";
//log(sillyLibrary.silly, sillyLibrary);
print(sillyLibrary.silly(),sl);
*/
test = fn () {return test};
print(test()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()());
`;

let astSegmentIds = [];
export function astSegment(code, root = true) {
  code = removeComments(code);
  const elements = splitSegment(code);
  //console.log(elements);
  astSegmentIds.push(randomStr(20));
  let ast = {
    data: [],
    definitions: [],
    segmentID: astSegmentIds[astSegmentIds.length - 1],
  };
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (!element) continue;

    const out = astNode(element.trim());
    if (!out) continue;

    if (out["kind"] === "function") {
      if (root) {
        ast["definitions"].push(out);
      } else {
        error(null, "cannot define outside of a root segment");
      }
      continue;
    }
    if (out["kind"] === "import") {
      ast["definitions"].push(out);
      continue;
    }

    ast["data"].push(out);
  }
  astSegmentIds.pop();
  return ast;
}
export function astNodes(code) {
  let args = [];
  if (typeof code == "string") {
    args = splitCommandParams(code);
  } else {
    args = code;
  }
  let data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(astNode(args[i]));
  }
  return data;
}
export function astDefintionArguments(code) {
  const args = splitCommandParams(code);
  let data = [];
  for (let i = 0; i < args.length; i++) {
    const spacedTokens = splitCharedCommand(args[i], " ");
    let types = [];
    let name = "";
    let value = null;
    if (spacedTokens.indexOf("=") == 1) {
      name = spacedTokens.shift();
      spacedTokens.shift();
      value = astNode(spacedTokens.join(" "));
      types = ["any"];
    } else if (spacedTokens.indexOf("=") == 2) {
      const typeCode = spacedTokens.shift();
      if (isNoBrackets(typeCode) && isValidDefinitionFormat(typeCode)) {
        types = [typeCode];
      } else if (isSquareBrackets(typeCode)) {
        types = splitCommandParams(removeSquareBrackets(typeCode));
      }
      name = spacedTokens.shift();
      spacedTokens.shift();
      value = astNode(spacedTokens.join(" "));
    } else {
      if (spacedTokens.length == 2) {
        const typeCode = spacedTokens.shift();
        if (isNoBrackets(typeCode) && isValidDefinitionFormat(typeCode)) {
          types = [typeCode];
        } else if (isSquareBrackets(typeCode)) {
          types = splitCommandParams(removeSquareBrackets(typeCode));
        }
      } else if (spacedTokens.length == 1) {
        types = ["any"];
      }
      name = spacedTokens.shift();
    }
    data.push({ types: types, name: name, value: value });
  }
  return data;
}
export function astNode(code) {
  if (code.trim() == "") {
    return null;
  }
  if (!code) {
    return null;
  }
  if (code.length >= 2) {
    if (code.substring(0, 2) == "##") {
      return null;
    }
  }

  // number literal
  try {
    if (isNumeric(code)) {
      return [parseFloat(code), "num"];
    }
  } catch {}

  const importSpaceTokens = splitCharedCommand(code, " ");
  if (importSpaceTokens.length >= 2) {
    if (importSpaceTokens.shift() == "import") {
      let data = {};
      const name = importSpaceTokens.shift();
      data["path"] = name.split(".").join("/");
      data["name"] ??= data["path"].split("/").pop();
      while (importSpaceTokens.length > 0) {
        const cmd = importSpaceTokens.shift();
        switch (cmd) {
          case "as":
            data["name"] = importSpaceTokens.shift();
            if (!isValidVariableFormat(data["name"])) {
              error(null, "illegal import name", data["name"]);
            }
            break;
          default:
            error(null, "unknown import parameter", cmd);
        }
      }
      return { kind: "import", data: data };
    }
  }

  // high priority spaced command
  const firstSpaceTokens = splitByFirstSpace(code);
  const commandTokens = splitCommand(code);
  const highPriority = ["return"];
  const lowPriority = ["new"];
  if (firstSpaceTokens.length == 2) {
    if (
      highPriority.includes(firstSpaceTokens[0]) &&
      isValidVariableFormat(firstSpaceTokens[0])
    ) {
      return {
        kind: "spacedCommand",
        key: astNode(firstSpaceTokens[0]),
        data: astNode(firstSpaceTokens[1]),
      };
    }
  }

  const operators = ["+", "++", "-", "*", "/", "%", "^", "<", ">", "@"];
  const comparisons = {
    "==": "equal",
    "!=": "not_equal",
    "~=": "string_equal",
    ":=": "type_equal",
    ">": "greater",
    "<": "smaller",
    ">=": "greater_equal",
    "<=": "smaller_equal",
  };

  // assignment
  const assignmentTokens = splitAssignment(code, operators);
  const assignments = {
    "=": "default",
    "+=": "addition",
    "++=": "join",
    "-=": "subtraction",
    "*=": "multiplication",
    "/=": "division",
    "%=": "modulo",
    "^=": "power",
    "@=": "reference",
    "<>=": "swap",
  };
  if (assignmentTokens.length >= 3) {
    const comparisonTokens = splitComparison(code, Object.keys(comparisons));
    if (!(comparisonTokens.length >= 3) || assignmentTokens[1] == "<>=") {
      if (assignmentTokens[1] == "=") {
        const spaceTokens = splitCharedCommand(assignmentTokens.shift(), " ");
        const key = spaceTokens.pop();
        return {
          kind: "assignment",
          key: astNode(key),
          type: assignments[assignmentTokens.shift()],
          value: astNode(assignmentTokens.join(" ")),
          attributes: astNodes(spaceTokens),
        };
      } else {
        if (Object.keys(assignments).includes(assignmentTokens[1])) {
          return {
            kind: "assignment",
            key: astNode(assignmentTokens.shift()),
            type: assignments[assignmentTokens.shift()],
            value: astNode(assignmentTokens.join(" ")),
          };
        }
      }
    }
  }
  if (assignmentTokens.length == 2) {
    const singleAssignments = {
      "++": "addition",
      "--": "subtraction",
    };
    if (Object.keys(singleAssignments).includes(assignmentTokens[1])) {
      return {
        kind: "assignment",
        key: astNode(assignmentTokens.shift()),
        type: singleAssignments[assignmentTokens.shift()],
        value: [1, "num"],
      };
    }
  }

  // logic
  const logic = {
    "&&": "and",
    "||": "or",
  };
  const logicTokens = splitLogic(code);
  if (logicTokens.length > 1) {
    return {
      kind: "logic",
      b: astNode(logicTokens.pop()),
      type: logic[logicTokens.pop()],
      a: astNode(logicTokens.join(" ")),
    };
  }
  const spaceTokens = splitCharedCommand(code, " ");

  // spaced operator
  const spacedOperations = ["is", "in", "to"];
  if (spaceTokens.length >= 3) {
    if (spacedOperations.includes(spaceTokens[spaceTokens.length - 2])) {
      return {
        kind: "operation",
        b: astNode(spaceTokens.pop()),
        operator: spaceTokens.pop(),
        a: astNode(spaceTokens.join(" ")),
      };
    }
  }

  // comparisons
  const comparisonTokens = splitComparison(code, Object.keys(comparisons));
  if (comparisonTokens.length >= 3) {
    return {
      kind: "comparison",
      b: astNode(comparisonTokens.pop()),
      type: comparisons[comparisonTokens.pop()],
      a: astNode(comparisonTokens.join(" ")),
    };
  }

  // operatiors
  const operationTokens = mergeNegativeNumbers(
    splitOperators(code, operators),
    operators
  );
  if (operationTokens.length > 1) {
    if (operators.includes(operationTokens[operationTokens.length - 2])) {
      return {
        kind: "operation",
        b: astNode(operationTokens.pop()),
        operator: {
          "+": "addition",
          "++": "join",
          "-": "subtraction",
          "*": "multiplication",
          "/": "division",
          "%": "modulo",
          "^": "power",
        }[operationTokens.pop()],
        a: astNode(operationTokens.join(" ")),
      };
    }
  }

  // prefixes
  switch (code[0]) {
    case "!":
      return {
        kind: "operation",
        operator: "not",
        b: astNode(code.substring(1)),
      };
    case "?":
      return {
        kind: "operation",
        operator: "boolify",
        b: astNode(code.substring(1)),
      };
    case "-":
      return {
        kind: "operation",
        operator: "negate",
        b: astNode(code.substring(1)),
      };
  }

  // spaced command
  const restricted = ["fn", "else", "default"];
  if (
    firstSpaceTokens.length == 2 &&
    isValidVariableFormat(firstSpaceTokens[0]) &&
    !restricted.includes(firstSpaceTokens[0])
  ) {
    if (
      !(isBrackets(commandTokens[1]) && commandTokens.length == 2) &&
      !(
        isBrackets(commandTokens[1]) &&
        isCurlyBrackets(commandTokens[2]) &&
        commandTokens.length == 3
      ) &&
      !lowPriority.includes(firstSpaceTokens[0])
    ) {
      return {
        kind: "spacedCommand",
        key: astNode(firstSpaceTokens[0]),
        data: astNode(firstSpaceTokens[1]),
      };
    }
  }

  // casting
  if (isBrackets(commandTokens[0])) {
    const commandTokens2 = splitCommand(code);
    const type = astNode(removeBrackets(commandTokens2.shift()));
    const data = astNode(commandTokens2.join(""));
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
  const keyTokens = splitReferences(code);
  if (keyTokens.length > 1) {
    if (isSquareBrackets(keyTokens[keyTokens.length - 1])) {
      return {
        kind: "key",
        key: astNode(removeSquareBrackets(keyTokens.pop())),
        data: astNode(keyTokens.join("")),
        isMethod: false,
      };
    }
  }

  // function
  if (firstSpaceTokens[0] == "fn") {
    const commandTokens2 = splitCommand(firstSpaceTokens[1]);
    if (
      commandTokens2.length == 3 &&
      isNoBrackets(commandTokens2[0]) &&
      isBrackets(commandTokens2[1]) &&
      isCurlyBrackets(commandTokens2[2])
    ) {
      return {
        kind: "function",
        data: {
          type: "definition",
          name: commandTokens2[0],
          args: astDefintionArguments(removeBrackets(commandTokens2[1])),
          data: astSegment(removeCurlyBrackets(commandTokens2[2])),
          segmentID: astSegmentIds[astSegmentIds.length - 1],
        },
      };
    }
  }

  // anon function
  if (commandTokens.length == 3) {
    if (
      commandTokens[0] === "fn" &&
      isBrackets(commandTokens[1]) &&
      isCurlyBrackets(commandTokens[2])
    ) {
      return {
        kind: "function",
        data: {
          type: "definition",
          args: astDefintionArguments(removeBrackets(commandTokens[1])),
          data: astSegment(removeCurlyBrackets(commandTokens[2])),
        },
      };
    }
  }

  // execution
  if (commandTokens.length > 1) {
    if (isBrackets(commandTokens[commandTokens.length - 1])) {
      return {
        kind: "execution",
        args: astNodes(removeBrackets(commandTokens.pop())),
        key: astNode(commandTokens.join("")),
      };
    }
    if (isCurlyBrackets(commandTokens[commandTokens.length - 1])) {
      if (isBrackets(commandTokens[commandTokens.length - 2])) {
        return {
          kind: "execution",
          content: astSegment(removeCurlyBrackets(commandTokens.pop()), false)[
            "data"
          ],
          args: astNodes(removeBrackets(commandTokens.pop())),
          key: astNode(commandTokens.join("")),
        };
      }
    }
    if (isCurlyBrackets(commandTokens[commandTokens.length - 1])) {
      return {
        kind: "execution",
        content: astSegment(removeCurlyBrackets(commandTokens.pop()), false)[
          "data"
        ],
        key: astNode(commandTokens.join("")),
        args: [],
      };
    }
  }

  // spaced command
  if (firstSpaceTokens.length == 2) {
    if (
      lowPriority.includes(firstSpaceTokens[0]) &&
      isValidVariableFormat(firstSpaceTokens[0])
    ) {
      return {
        kind: "spacedCommand",
        key: astNode(firstSpaceTokens[0]),
        data: astNode(firstSpaceTokens[1]),
      };
    }
  }

  // methods
  const methodTokens = splitCharedCommand(code, ".");
  if (methodTokens.length > 1) {
    const method = methodTokens.pop();
    if (isValidVariableFormat(method)) {
      return {
        kind: "key",
        key: [method, "str"],
        data: astNode(methodTokens.join(".")),
        isMethod: true,
      };
    }
  }

  // brackets / tuple
  if (isBrackets(code)) {
    const tokens = splitCommandParams(removeBrackets(code));
    if (tokens.length > 1) {
      return {
        kind: "tuple",
        data: astNodes(tokens),
      };
    }
    return astNode(removeBrackets(code));
  }

  // array
  if (isSquareBrackets(code)) {
    const tokens = splitCommandParams(removeSquareBrackets(code));
    return {
      kind: "array",
      data: astNodes(tokens),
    };
  }

  // object
  if (isCurlyBrackets(code)) {
    const tokens = splitCommandParams(removeCurlyBrackets(code));
    let values = [],
      keys = [],
      valid = true;
    tokens.map((pair) => {
      const pairTokens = splitCharedCommand(pair, ":");
      if (pairTokens.length == 2) {
        keys.push(astNode(pairTokens[0]));
        values.push(astNode(pairTokens[1]));
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
    return [removeStr(code), "str"];
  }

  if (code[0] === "#" && (code.length == 4 || code.length == 7)) {
    return inst(hexToFloats(code), "color");
  }

  // reference
  if (isValidVariableFormat(code)) {
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
export function reconstructAstNode(node) {
  if (Array.isArray(node)) {
    return castType(null, node, "str", true)[0];
  }
  switch (node["kind"]) {
    case "variable":
      return node["name"];
    case "key":
      return `${reconstructAstNode(node["data"])}[${reconstructAstNode(
        node["key"]
      )}]`;
  }
  return "<unknownAstNode>";
}

export function runFunction(
  content,
  func,
  scope = {},
  root = false,
  stringify = false,
  getScopeData = false
) {
  if (root) {
    const out = runFunctionRaw(
      content,
      content,
      scope,
      stringify,
      getScopeData
    );
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
      return runFunctionRaw(
        content,
        funcDef["data"]["data"],
        scope,
        stringify,
        getScopeData
      );
    }
  }
}
export function runFunctionRaw(
  content,
  segment,
  scope = {},
  stringify = false,
  getScopeData = false
) {
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
    Object.keys(typeAttr[k]).map((k2) => {
      memory[typeAttr[k][k2]] = inst(
        { type: "method", data: memory[typeAttr[k][k2]] },
        "func"
      );
    });
  });
  memory[dataID]["scope"] = scopeID;
  memory[dataID]["stack_value"] = null;
  let out = runSegmentRaw(segment["data"], dataID);

  if (stringify && out) {
    out = castType(null, out, "str")[0];
  }

  // cleanup
  if (!getScopeData) {
    const ids = memory[dataID]["memory_addresses"];
    deAllocate(
      scopeID,
      segmentScopeID,
      astID,
      memory[dataID]["trace"],
      dataID,
      ...ids
    );
  } else {
    return dataID;
  }

  return out;
}
export function runSegmentRaw(content, dataID) {
  traceAdd(dataID, "content");
  const id = randomStr();
  memory[dataID]["segmentLocalMemoryIDS"] ??= {};
  memory[dataID]["segmentLocalScopeNames"] ??= {};
  memory[dataID]["segments"] ??= [];

  memory[dataID]["segmentLocalMemoryIDS"][id] = [];
  memory[dataID]["segmentLocalScopeNames"][id] = [];
  memory[dataID]["segments"].push(id);
  for (let i = 0; i < content.length; i++) {
    const out = runNode(content[i], dataID);
    if (typeof out == "object" && out && !Array.isArray(out)) {
      if (out["kind"] == "return") {
        return out["data"];
      }
    }
  }
  memory[dataID]["segments"].pop();
  memory[dataID]["segmentLocalScopeNames"][id].map((n) => {
    delete memory[memory[dataID]["scope"]][n];
  });
  deAllocate(memory[dataID]["segmentLocalMemoryIDS"][id]);
  delete memory[dataID]["segmentLocalScopeNames"][id];
  traceOut(dataID);
}
export function runNodes(args, dataID) {
  return args.map((arg) => runNode(arg, dataID));
}
export function runNode(node, dataID, flags = [], extraData = {}) {
  if (Array.isArray(node)) {
    return node;
  }
  if (!node) {
    return inst("null", "null");
  }
  switch (node["kind"]) {
    case "execution":
      return runExecution(
        handleValue(runNode(node["key"], dataID), dataID),
        node["args"],
        node["content"],
        dataID
      );
    case "spacedCommand":
      return runExecution(
        handleValue(runNode(node["key"], dataID), dataID),
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
        const id = memory[memory[dataID]["scope"]][node["name"]];
        const v = getMemory(id, dataID);
        if (v.length == 2) {
          v.push({});
        }
        v[2]["memoryAddress"] = id;
        return v;
      } else if (Object.keys(global).includes(node["name"])) {
        if (flags.includes("assignment")) {
          return global[node["name"]];
        }
        const id = global[node["name"]];
        const v = getMemory(id, dataID);
        if (v.length == 2) {
          v.push({});
        }
        v[2]["memoryAddress"] = id;
        return v;
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
      break;
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
      let variableType = "any";
      let isGlobal = false;
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
      if (node["type"] == "reference") {
        if (reference && typeof reference !== "object") {
          const data = memory[reference][2];
          if (memory[reference].length == 3 && data) {
            memory[data["ref"]] = value;
          } else {
            error(dataID, "cannot reference assign to non reference value");
          }
        } else {
          error(dataID, "cannot assign to non-allocated value");
        }
      }
      if (node["type"] == "swap") {
        const referenceV = runNode(node["value"], dataID, ["assignment"]);
        if (!referenceV) {
          error(dataID, "cannot swap non reference value");
        }
        const baseV = runNode(node["key"], dataID);
        memory[reference] = value;
        memory[referenceV] = baseV;
        return value;
      }
      if (value.length == 2) {
        value.push({});
      }
      if (node["attributes"]) {
        const attrs = node["attributes"];
        let lateattrs = [];
        for (let i = 0; i < attrs.length; i++) {
          const attr = castType(dataID, runNode(attrs[i], dataID), "attr");
          switch (attr[0][0]) {
            case "type":
              variableType = castType(dataID, attr[0][1], "type")[0];
              break;
            case "lateAttr":
              attr[0].shift();
              lateattrs.push(attr);
              break;
            default:
              const out = attr[0][0](dataID, value, variableType);
              if (out["value"]) {
                value = out["value"];
              }
              if (out["variableType"]) {
                variableType = out["variableType"];
              }
              if (out["addSegmentIds"]) {
                if (!Array.isArray(node["key"])) {
                  if (node["key"]["kind"] === "variable") {
                    const s = memory[dataID]["segments"];
                    memory[dataID]["segmentLocalMemoryIDS"][
                      s[s.length - 1]
                    ].push(reference);
                    memory[dataID]["segmentLocalScopeNames"][
                      s[s.length - 1]
                    ].push(node["key"]["name"]);
                  } else {
                    error(dataID, "cannot localise non-variable");
                  }
                } else {
                  error(dataID, "cannot localise non-variable");
                }
              }
              isGlobal = out["global"] ?? isGlobal;
          }
        }
        for (let i = 0; i < lateattrs.length; i++) {
          const attr = lateattrs[i];
          switch (attr[0][0]) {
            default:
              const out = attr[0][0](dataID, value, variableType);
              if (out["value"]) {
                value = out["value"];
              }
              if (out["variableType"]) {
                variableType = out["variableType"];
              }
              if (out["addSegmentIds"]) {
                if (!Array.isArray(node["key"])) {
                  if (node["key"]["kind"] === "variable") {
                    const s = memory[dataID]["segments"];
                    memory[dataID]["segmentLocalMemoryIDS"][
                      s[s.length - 1]
                    ].push(reference);
                    memory[dataID]["segmentLocalScopeNames"][
                      s[s.length - 1]
                    ].push(node["key"]["name"]);
                  } else {
                    error(dataID, "cannot localise non-variable");
                  }
                } else {
                  error(dataID, "cannot localise non-variable");
                }
              }
              isGlobal = out["global"] ?? isGlobal;
          }
        }
      }
      value[2]["type"] = variableType;
      if (isGlobal) {
        if (!Array.isArray(node["key"])) {
          if (node["key"]["kind"] === "variable") {
            delete memory[memory[dataID]["scope"]][node["key"]["name"]];
            const globalReference = global[node["key"]["name"]] ?? randomStr();
            global[node["key"]["name"]] = globalReference;
            memory[globalReference] = value;
            return value;
          } else {
            error(dataID, "cannot globalise non-variable");
          }
        } else {
          error(dataID, "cannot globalise non-variable");
        }
      }
      if (!isTypeEqualNull(variableType, value[1])) {
        error(
          dataID,
          "assignment of type",
          value[1],
          "when specified type is",
          variableType
        );
      }
      if (reference && typeof reference !== "object") {
        if (memory[reference]) {
          if (variableType !== "any") {
            warn(dataID, "type specified on already existing variable");
          }
          if (memory[reference].length == 3) {
            memory[reference][2]["type"] ??= "any";
            if (memory[reference][2]["constant"]) {
              error(dataID, "assignment to constant variable");
            }
            if (memory[reference][2]["autoCast"]) {
              const extra = value[2];
              value = castType(dataID, value, memory[reference][2]["type"]);
              value[2] = extra;
            }
            if (!isTypeEqualNull(memory[reference][2]["type"], value[1])) {
              error(
                dataID,
                "assignment of type",
                value[1],
                "to variable of type",
                memory[reference][2]["type"]
              );
            } else {
              value[2]["type"] = memory[reference][2]["type"];
            }
          }
        }
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
        flags.includes("assignment"),
        dataID
      );
      if (flags.includes("assignment")) {
        return id;
      }
      let keyOut = getMemory(id, dataID);
      if (keyOut && Array.isArray(keyOut)) {
        if (keyOut.length == 2) {
          keyOut.push({});
        }
        keyOut[2]["original"] = keyOrg;
        keyOut[2]["ref"] = id;
        return keyOut;
      }
      return inst("null", "null");
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
export function runExecution(
  execution,
  args,
  content,
  dataID,
  type = "standard"
) {
  if (!execution) return inst("null", "null");
  if (execution[1] === "num") {
    let amt = 0;
    args.map((v) => {
      amt += castType(dataID, v, "num")[0];
    });
    return inst(amt * execution[0], "num");
  }
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
          : false
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
          ...args
        );
        if (data3) {
          return data3;
        }
        return inst("null", "null");
      } else {
        error(dataID, "unrunnable method");
      }
      break;
    case "definition":
      args = runNodes(args, dataID);
      const ast = memory[memory[dataID]["ast"]];
      let scope = runArguments(execution[0]["args"], args, dataID);
      //console.log(execution);
      const copyScope = memory[memory[dataID]["scope"]];
      Object.entries(copyScope).forEach((entry) => {
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
        Object.keys(typeAttr[k]).map((k2) => {
          memory[typeAttr[k][k2]] = inst(
            { type: "method", data: memory[typeAttr[k][k2]] },
            "func"
          );
        });
      });
      const out = runSegmentRaw(execution[0]["data"]["data"], funcDataID);
      deAllocate(
        funcAstID,
        funcScopeID,
        memory[funcDataID]["trace"],
        funcDataID,
        ...memory[funcDataID]["memory_addresses"]
      );
      return out || inst("null", "null");
    default:
      error(dataID, "unknown export function type", execution[0]["type"]);
      return inst("null", "null");
  }
}
export function runArguments(definition, args, dataID) {
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
export function runOperation(operation, a, b, dataID) {
  if (
    [
      "addition",
      "join",
      "subtraction",
      "multiplication",
      "division",
      "modulo",
      "power",
    ].includes(operation)
  ) {
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
        if (b[0] < 0) {
          b[0] = 0;
        }
        return inst(castType(dataID, a, "str")[0].repeat(b[0]), "str");
      }
      if (a[1] == "num") {
        if (a[0] < 0) {
          a[0] = 0;
        }
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
        return inst(false, "bool");
      }
      return inst(a[1] == b[0], "bool");
    case "in":
      return inst(
        castType(dataID, b, "arr")[0]
          .map((val) => getMemory([val]))
          .findIndex((val) => isEqual(val, a)) !== -1,
        "bool"
      );
    case "to":
      let range = [];
      (a = runNode(a, dataID)), (b = runNode(b, dataID));
      (a = castType(dataID, a, "num")), (b = castType(dataID, b, "num"));
      const rawA = a,
        rawB = b;
      if (a[0] > b[0]) {
        const temp = b;
        b = a;
        a = temp;
      }
      for (let i = a[0]; i <= b[0]; i++) {
        range.push(allocate(inst(i, "num"), dataID));
      }
      if (rawA[0] > rawB[0]) {
        range = range.reverse();
      }
      return inst(range, "tuple");

    case "not":
      return inst(!castType(dataID, b, "bool")[0], "bool");
    case "boolify":
      return inst(castType(dataID, b, "bool")[0], "bool");

    default:
      error(dataID, "unknown operation", operation);
  }
}
export function runComparison(type, a, b, dataID) {
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
      return inst(a[1] === b[1], "bool");

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
export function runLogic(type, a, b, dataID) {
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
export function runKey(value, key, isMethod, create, dataID) {
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
      if (index[0] >= indexedValue[0].length || index[0] < 0) {
        return inst("null", "null");
      }
      if (index) {
        return indexedValue[0][index[0]];
      }
    }
  }
  if (value[0] && !Array.isArray(value[0]) && typeof value[0] == "object") {
    if (value[0]["keys"]) {
      const keyIndex = value[0]["keys"].findIndex((objKey) =>
        Object_isSame(objKey, [key[0], key[1]])
      );
      if (keyIndex > -1) {
        return value[0]["values"][keyIndex];
      } else {
        if (create) {
          value[0]["keys"].push(key);
          let id = allocate(inst("null", "null"), dataID);
          value[0]["values"].push(id);
          return id;
        }
      }
    }
  }
  return inst("null", "null");
}

const globalTypeAttributes = {
  obj: {
    keys: function (dataID, selfValue) {
      return inst(
        selfValue[0]["keys"].map((v) => allocate(v, dataID)),
        "tuple"
      );
    },
    values: function (dataID, selfValue) {
      return inst(selfValue[0]["values"], "tuple");
    },
    concat: function (dataID, selfValue, ...args) {
      let keys = selfValue[0]["keys"];
      let values = selfValue[0]["values"];
      for (let i = 0; i < args.length; i++) {
        const arg = castType(dataID, runNode(args[i], dataID), "obj");
        keys = keys.concat(arg[0]["keys"]);
        values = values.concat(arg[0]["values"]);
      }
      const ref = selfValue[2]["memoryAddress"];
      selfValue = inst({ keys: keys, values: values }, "obj");
      memory[ref] = selfValue;
      return selfValue;
    },
  },
  arr: {
    append: function (dataID, selfValue, ...args) {
      if (selfValue.length !== 3) {
        error("cannot append to non-allocated array.");
      }
      let vals = args.map((v) => allocate(runNode(v, dataID), dataID));
      let data = memory[selfValue[2]["memoryAddress"]][0];
      data = data.concat(vals);
      memory[selfValue[2]["memoryAddress"]][0] = data;

      if (vals.length > 1) {
        return inst(vals, "tuple");
      } else {
        return memory[vals[0]];
      }
    },
    concat: function (dataID, selfValue, ...args) {
      let data = memory[selfValue[2]["memoryAddress"]][0];
      for (let i = 0; i < args.length; i++) {
        const elem = castType(dataID, runNode(args[i], dataID), "arr");
        const vals = elem[0];
        data = data.concat(vals);
      }
      memory[selfValue[2]["memoryAddress"]][0] = data;
    },
    pop: function (dataID, selfValue) {
      let data = memory[selfValue[2]["memoryAddress"]][0];
      let value = data.pop();
      memory[selfValue[2]["memoryAddress"]][0] = data;
      return getMemory(value, dataID);
    },
    shift: function (dataID, selfValue) {
      let data = memory[selfValue[2]["memoryAddress"]][0];
      let value = data.shift();
      memory[selfValue[2]["memoryAddress"]][0] = data;
      return getMemory(value, dataID);
    },
    indexOf: function (dataID, selfValue, ...args) {
      const values = [];
      for (let arg = 0; arg < args.length; arg++) {
        const searchValue = runNode(args[arg], dataID);
        const index = selfValue[0].findIndex((item) =>
          isEqual(getMemory(item, dataID), searchValue)
        );
        values.push(inst(index));
      }
      if (values.length == 1) {
        return values[0];
      } else {
        return inst(
          values.map((v) => allocate(v, dataID)),
          "tuple"
        );
      }
    },
    sort: function (dataID, selfValue) {
      let data = Object_clone(memory[selfValue[2]["memoryAddress"]][0]);
      data.sort((a, b) => {
        const valA = castType(dataID, getMemory(a, dataID), "num")[0];
        const valB = castType(dataID, getMemory(b, dataID), "num")[0];
        return valA - valB;
      });
      return inst(data, "arr");
    },
    join: function (dataID, selfValue, ...args) {
      let data = memory[selfValue[2]["memoryAddress"]][0];
      let separator =
        args.length > 0
          ? castType(dataID, runNode(args[0], data), "str")[0]
          : ",";
      data = data
        .map((value) => castType(dataID, value, "str")[0])
        .join(separator);
      return inst(data, "str");
    },
  },
  str: {
    upper: function (dataID, selfValue) {
      return inst(selfValue[0].toUpperCase(), "str");
    },
    lower: function (dataID, selfValue) {
      return inst(selfValue[0].toLowerCase(), "str");
    },
    trim: function (dataID, selfValue) {
      return inst(selfValue[0].trim(), "str");
    },
    startsWith: function (dataID, selfValue, ...args) {
      if (args.length != 1) {
        error(dataID, "startsWith requires exactly 1 argument");
      }
      const searchString = castType(dataID, runNode(args[0], dataID), "str")[0];
      return inst(selfValue[0].startsWith(searchString), "bool");
    },
    endsWith: function (dataID, selfValue, ...args) {
      if (args.length != 1) {
        error(dataID, "endsWith requires exactly 1 argument");
      }
      const searchString = castType(dataID, runNode(args[0], dataID), "str")[0];
      return inst(selfValue[0].endsWith(searchString), "bool");
    },
    after: function (dataID, selfValue, ...args) {
      if (args.length != 1) {
        error(dataID, "after requires exactly 1 argument");
      }
      const searchString = castType(dataID, runNode(args[0], dataID), "str")[0];
      const index = selfValue[0].indexOf(searchString);
      if (index === -1) {
        return inst("", "str");
      }
      return inst(selfValue[0].substring(index + searchString.length), "str");
    },
    before: function (dataID, selfValue, ...args) {
      if (args.length != 1) {
        error(dataID, "before requires exactly 1 argument");
      }
      const searchString = castType(dataID, runNode(args[0], dataID), "str")[0];
      const index = selfValue[0].indexOf(searchString);
      if (index === -1) {
        return inst("", "str");
      }
      return inst(selfValue[0].substring(0, index), "str");
    },
    split: function (dataID, selfValue, ...args) {
      return inst(
        selfValue[0]
          .split(castType(dataID, args[0], "str")[0])
          .map((v) => inst(v, "str")),
        "arr"
      );
    },
    getNum: function (dataID, selfValue) {
      if (selfValue[0].length === 1) {
        return inst(selfValue[0].charCodeAt(0), "num");
      }
      error(dataID, "getNum can only be used on single character strings");
    },
  },
  num: {
    round: function (dataID, selfValue) {
      return inst(Math.round(selfValue[0]), "num");
    },
    ceil: function (dataID, selfValue) {
      return inst(Math.ceil(selfValue[0]), "num");
    },
    floor: function (dataID, selfValue) {
      return inst(Math.floor(selfValue[0]), "num");
    },
    getChar: function (dataID, selfValue) {
      return inst(String.fromCharCode(selfValue[0]), "str");
    },
  },
};
const typeInstance = {
  str: function (dataID, ...args) {
    return inst(
      args.map((v) => castType(dataID, v, "str")[0]).join(" "),
      "str"
    );
  },
  bool: function (dataID, ...args) {
    return inst(
      args.every((v) => castType(dataID, v, "bool")[0]),
      "bool"
    );
  },
  tuple: function (dataID, ...args) {
    return inst(
      args.map((v) => allocate(v)),
      "tuple"
    );
  },
  obj: function (dataID, ...args) {
    let keys = [];
    let values = [];
    for (let i = 0; i < args.length; i++) {
      const arg = castType(dataID, args[i], "obj");
      keys = keys.concat(arg[0]["keys"]);
      values = values.concat(
        allocate(getMemory(arg[0]["values"], dataID), dataID)
      );
    }
    return inst({ keys: keys, values: values }, "obj");
  },
  arr: function (dataID, ...args) {
    return inst(
      args.map((v) => allocate(v, dataID)),
      "arr"
    );
  },
  func: function (dataID, ...args) {
    if (args.length !== 1) {
      error(dataID, "args must be content");
    }
    return inst(
      { type: "definition", args: [], data: astSegment(args[0][0]) },
      "func"
    );
  },
  vec2: function (dataID, ...args) {
    if (args.length > 2) {
      error(dataID, "too many arguments");
    }
    if (args.length == 1) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      return inst([allocate(x, dataID), allocate(x, dataID)], "vec2");
    }
    if (args.length == 2) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      return inst([allocate(x, dataID), allocate(y, dataID)], "vec2");
    }
    return inst(
      [allocate(inst(0, "num"), dataID), allocate(inst(0, "num"), dataID)],
      "vec2"
    );
  },
  vec3: function (dataID, ...args) {
    if (args.length > 3) {
      error(dataID, "too many arguments");
    }
    if (args.length == 1) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      return inst(
        [allocate(x, dataID), allocate(x, dataID), allocate(x, dataID)],
        "vec3"
      );
    }
    if (args.length == 2) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      return inst(
        [
          allocate(x, dataID),
          allocate(y, dataID),
          allocate(inst(0, "num"), dataID),
        ],
        "vec3"
      );
    }
    if (args.length == 3) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      const z = castType(dataID, runNode(args[2], dataID), "num");
      return inst(
        [allocate(x, dataID), allocate(y, dataID), allocate(z, dataID)],
        "vec3"
      );
    }
    return inst(
      [
        allocate(inst(0, "num"), dataID),
        allocate(inst(0, "num"), dataID),
        allocate(inst(0, "num"), dataID),
      ],
      "vec3"
    );
  },
  vec4: function (dataID, ...args) {
    if (args.length > 4) {
      error(dataID, "too many arguments");
    }
    if (args.length == 1) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      return inst(
        [
          allocate(x, dataID),
          allocate(x, dataID),
          allocate(x, dataID),
          allocate(x, dataID),
        ],
        "vec4"
      );
    }
    if (args.length == 2) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      return inst(
        [
          allocate(x, dataID),
          allocate(y, dataID),
          allocate(inst(0, "num"), dataID),
          allocate(inst(0, "num"), dataID),
        ],
        "vec4"
      );
    }
    if (args.length == 3) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      const z = castType(dataID, runNode(args[2], dataID), "num");
      return inst(
        [
          allocate(x, dataID),
          allocate(y, dataID),
          allocate(z, dataID),
          allocate(inst(0, "num"), dataID),
        ],
        "vec4"
      );
    }
    if (args.length == 4) {
      const x = castType(dataID, runNode(args[0], dataID), "num");
      const y = castType(dataID, runNode(args[1], dataID), "num");
      const z = castType(dataID, runNode(args[2], dataID), "num");
      const w = castType(dataID, runNode(args[3], dataID), "num");
      return inst(
        [
          allocate(x, dataID),
          allocate(y, dataID),
          allocate(z, dataID),
          allocate(w, dataID),
        ],
        "vec4"
      );
    }
    return inst(
      [allocate(inst(0, "num"), dataID), allocate(inst(0, "num"), dataID)],
      "vec4"
    );
  },
};

export function getScope(scope, definitions, scopeDataID) {
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
    ref: inst("ref", "type"),
    vec2: inst("vec2", "type"),
    vec3: inst("vec3", "type"),
    vec4: inst("vec4", "type"),
    attr: inst("attr", "type"),

    // attributes
    casted: inst(
      [
        "lateAttr",
        function (dataID, value, variableType) {
          const extra = value[2] ?? {};
          value = castType(dataID, value, variableType);
          value[2] = extra;
          value[2]["autoCast"] = true;
          if (variableType === "any") {
            warn(dataID, "casted keyword is useless, not type is specified");
          }
          return { value: value };
        },
      ],
      "attr"
    ),
    const: inst(
      [
        "lateAttr",
        function (dataID, value, variableType) {
          value[2]["constant"] = true;
          return { value: value };
        },
      ],
      "attr"
    ),
    local: inst(
      [
        "lateAttr",
        function (dataID, value, variableType) {
          return { global: false, addSegmentIds: true };
        },
      ],
      "attr"
    ),
    global: inst(
      [
        "lateAttr",
        function (dataID, value, variableType) {
          return { global: true, addSegmentIds: false };
        },
      ],
      "attr"
    ),

    // functions
    print: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
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
    warn: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          warn(dataID, ...args.map((arg) => castType(dataID, arg, "str")[0]));

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
    error: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          // error quits the application, dont need the returning stuff
          error(dataID, ...args.map((arg) => castType(dataID, arg, "str")[0]));
        },
      },
      "func"
    ),
    log: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          console.log(...runNodes(args, dataID));
        },
      },
      "func"
    ),
    typeof: inst(
      // typeof is both a export function and a spaced command
      {
        type: "builtin",
        data: function (dataID, ...args) {
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
        functionStrict: false, // it CAN be used as a normal export function (typeof(":3"))
      }
    ),
    return: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
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
        data: function (dataID, ...args) {
          args = runNodes(args, dataID);
          if (args.length == 1) {
            return inst(castType(dataID, args[0], "arr")[0].length, "num");
          } else {
            return inst(
              args.map((arg) =>
                allocate(inst(castType(dataID, arg, "arr")[0].length, "num"))
              ),
              "tuple"
            );
          }
        },
      },
      "func"
    ),
    sqrt: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          args = runNodes(args, dataID);
          if (args.length == 1) {
            return inst(Math.sqrt(castType(dataID, args[0], "num")[0]), "num");
          } else {
            return inst(
              args.map((arg) =>
                allocate(inst(Math.sqrt(castType(dataID, arg, "num")[0])))
              ),
              "tuple"
            );
          }
        },
      },
      "func"
    ),
    cast: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          if (args.length != 2) {
            error(dataID, "cast requires exactly 2 arguments");
          }
          const value = runNode(args[0], dataID);
          const type = runNode(args[1], dataID);
          if (type[1] !== "type") {
            error(dataID, "second argument to cast must be a type");
          }
          const out = castType(dataID, value, type[0], false, true);
          if (!out) {
            return inst("null", "null");
          }
          return out;
        },
      },
      "func"
    ),
    new: inst(
      {
        type: "builtin",
        data: function (dataID, ...args) {
          if (args.length !== 1) {
            error(dataID, "new must be run as new Type, or new(Type)");
          }
          return instanceTypeDefault(
            castType(dataID, args[0], "type")[0],
            dataID
          );
        },
      },
      "func"
    ),
    // statements
    if: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
          if (!content) {
            if (args.length == 2) {
              return castType(dataID, runNode(args[0], dataID), "bool")
                ? runNode(args[1], dataID)
                : inst("null", "null");
            } else if (args.length == 3) {
              return castType(dataID, runNode(args[0], dataID), "bool")
                ? runNode(args[1], dataID)
                : runNode(args[2], dataID);
            } else {
              error(dataID, "unknown inline if syntax");
            }
          }
          const val =
            args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            ) && args.length > 0;
          memory[dataID]["stack_value"] = val;
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
        data: function (dataID, content, ...args) {
          let val =
            args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            ) && args.length > 0;
          memory[dataID]["stack_value"] = val;
          while (val) {
            const out = runSegmentRaw(content, dataID);
            if (out) {
              return { kind: "return", data: out };
            }
            val =
              args.every(
                (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
              ) && args.length > 0;
          }
        },
      },
      "func"
    ),
    until: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
          let val =
            args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            ) && args.length > 0;
          memory[dataID]["stack_value"] = val;
          while (!val) {
            const out = runSegmentRaw(content, dataID);
            if (out) {
              return { kind: "return", data: out };
            }
            val =
              args.every(
                (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
              ) && args.length > 0;
          }
        },
      },
      "func"
    ),
    for: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
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
            const stepRaw = args.shift();
            if (!Array.isArray(stepRaw) && stepRaw) {
              if (stepRaw["kind"] == "assignment") {
                if (
                  [
                    "addition",
                    "join",
                    "subtraction",
                    "multiplication",
                    "division",
                    "modulo",
                    "power",
                  ].includes(stepRaw["type"])
                ) {
                  step = stepRaw;
                }
              }
            }
            if (step === 1) {
              step = castType(dataID, runNode(stepRaw, dataID), "num")[0];
            }
          }

          let iter = runNode(value, dataID);
          if (iter[1] == "num") {
            memory[dataID]["stack_value"] = iter[0] > 0;
            for (let i = 0; i < iter[0]; i++) {
              const out = runSegmentRaw(content, dataID);
              if (out) {
                return { kind: "return", data: out };
              }
              if (variable) {
                if (typeof step == "number") {
                  runNode(
                    {
                      kind: "assignment",
                      type: "addition",
                      key: variable,
                      value: inst(step, "num"),
                    },
                    dataID
                  );
                } else {
                  runNode(step, dataID);
                }
              }
            }
          } else {
            iter = castType(dataID, iter, "bool")[0];
            memory[dataID]["stack_value"] = iter;
            while (iter) {
              const out = runSegmentRaw(content, dataID);
              if (out) {
                return { kind: "return", data: out };
              }
              if (variable) {
                if (typeof step == "number") {
                  runNode(
                    {
                      kind: "assignment",
                      type: "addition",
                      key: variable,
                      value: inst(step, "num"),
                    },
                    dataID
                  );
                } else {
                  runNode(step, dataID);
                }
              }
              iter = castType(dataID, runNode(value, dataID), "bool")[0];
            }
          }
        },
      },
      "func"
    ),
    foreach: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
          if (args.length != 2) {
            error(dataID, "foreach requires 2 arguments");
          }
          const variable = args[0];
          const iterable = castType(dataID, runNode(args[1], dataID), "arr");
          memory[dataID]["stack_value"] = iterable[0].length > 0;
          for (let i = 0; i < iterable[0].length; i++) {
            runNode(
              {
                kind: "assignment",
                type: "default",
                key: variable,
                value: memory[iterable[0][i]],
              },
              dataID
            );
            const out = runSegmentRaw(content, dataID);
            if (out) {
              return { kind: "return", data: out };
            }
          }
        },
      },
      "func"
    ),
    else: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
          if (
            !memory[dataID]["stack_value"] &&
            typeof memory[dataID]["stack_value"] == "object"
          ) {
            error(dataID, "else statement without a stack before it");
          }
          const val =
            args.every(
              (arg) => castType(dataID, runNode(arg, dataID), "bool")[0]
            ) && !memory[dataID]["stack_value"];
          memory[dataID]["stack_value"] = memory[dataID]["stack_value"] || val;
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
    switch: inst(
      {
        type: "builtin_statement",
        data: function (dataID, content, ...args) {
          args = runNodes(args, dataID);
          let runCases = [];
          let defaultCases = [];
          for (let i = 0; i < content.length; i++) {
            const caseElem = content[i];
            if (caseElem) {
              if (caseElem["kind"] !== "execution") {
                error(dataID, "non case element in switch statement");
              }
              if (
                caseElem["key"]["name"] !== "case" &&
                caseElem["key"]["name"] !== "default"
              ) {
                error(dataID, "non case element in switch statement");
              }
              if (caseElem["key"]["name"] === "default") {
                defaultCases.push(caseElem);
              } else {
                if (
                  caseElem["args"].some((v) => args.some((a) => isEqual(a, v)))
                ) {
                  runCases.push(caseElem);
                }
              }
            }
          }
          if (runCases.length == 0) {
            for (let i = 0; i < defaultCases.length; i++) {
              const out = runSegmentRaw(defaultCases[i]["content"], dataID);
              if (out) {
                return { kind: "return", data: out };
              }
            }
          }
          for (let i = 0; i < runCases.length; i++) {
            const runCase = runCases[i];
            const out = runSegmentRaw(runCase["content"], dataID);
            if (out) {
              return { kind: "return", data: out };
            }
          }
        },
      },
      "func"
    ),
    // modules
    Math: {
      abs: inst(
        {
          type: "builtin",
          data: function (dataID, ...args) {
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
      round: inst(
        {
          type: "builtin",
          data: function (dataID, ...args) {
            if (args.length == 1) {
              return inst(
                Math.round(castType(dataID, args[0], "num")[0]),
                "num"
              );
            } else {
              return inst(
                args.map((arg) =>
                  inst(Math.round(castType(dataID, arg, "num")[0]), "num")
                ),
                "tuple"
              );
            }
          },
        },
        "func"
      ),
      floor: inst(
        {
          type: "builtin",
          data: function (dataID, ...args) {
            if (args.length == 1) {
              return inst(
                Math.round(castType(dataID, args[0], "num")[0]),
                "num"
              );
            } else {
              return inst(
                args.map((arg) =>
                  inst(Math.floor(castType(dataID, arg, "num")[0]), "num")
                ),
                "tuple"
              );
            }
          },
        },
        "func"
      ),
      ceil: inst(
        {
          type: "builtin",
          data: function (dataID, ...args) {
            if (args.length == 1) {
              return inst(
                Math.round(castType(dataID, args[0], "num")[0]),
                "num"
              );
            } else {
              return inst(
                args.map((arg) =>
                  inst(Math.ceil(castType(dataID, arg, "num")[0]), "num")
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
          data: function (dataID, ...args) {
            if (args.length == 0) {
              return inst(Math.round(Math.random()), "num");
            }
            if (args.length == 1) {
              const num = castType(dataID, args[0], "num")[0];
              if (num % 1 == 0) {
                return inst(Math.floor(Math.random() * (num + 1)), "num");
              } else {
                return inst(Math.random() * (num + 1), "num");
              }
            }
            if (args.length == 2) {
              const a = castType(dataID, args[0], "num")[0];
              const b = castType(dataID, args[1], "num")[0];
              if (a % 1 == 0 && b % 1 == 0) {
                return inst(Math.floor(Math.random() * (b - a + 1) + a), "num");
              } else {
                return inst(Math.random() * (b - a + 1) + a, "num");
              }
            }
          },
        },
        "func"
      ),
      randomDecimal: inst(
        {
          type: "builtin",
          data: function (dataID, ...args) {
            if (args.length == 0) {
              return inst(Math.random(), "num");
            }
            if (args.length == 1) {
              const num = castType(dataID, args[0], "num")[0];
              return inst(Math.random() * (num + 1), "num");
            }
            if (args.length == 2) {
              const a = castType(dataID, args[0], "num")[0];
              const b = castType(dataID, args[1], "num")[0];
              return inst(Math.random() * (b - a + 1) + a, "num");
            }
          },
        },
        "func"
      ),
    },
    // references
    abs: inst(astNode("Math.abs"), "ref"),
    round: inst(astNode("Math.round"), "ref"),
    random: inst(astNode("Math.random"), "ref"),
    randomDecimal: inst(astNode("Math.randomDecimal"), "ref"),
  };
  const keys = Object.keys(definitions);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const def = definitions[key]["data"];
    if (definitions[key]["kind"] == "function") {
      data[def["name"]] = inst(def, "func");
    }
    if (definitions[key]["kind"] == "import") {
      data[def["name"]] = getModule(def["path"]);
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
export function getModule(name) {
  function _navigatePath(path, system) {
    const parts = path.split("/");
    if (parts.length == 1 && parts[0] == "") {
      return system;
    }
    let current = system;
    for (const part of parts) {
      if (!current[part]) {
        return null;
      }
      current = current[part];
    }
    return current;
  }
  const file = _navigatePath(name, local_system);
  if (file) {
    const segment = astSegment(file);
    const out = runFunction(segment, "main", {}, true);
    let data = {};
    const definitions = segment["definitions"];
    const keys = Object.keys(definitions);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const def = definitions[key]["data"];
      if (definitions[key]["kind"] == "function") {
        data[def["name"]] = inst(def, "func");
      }
    }
    data = allocateTypedObjectContents(data)[0];
    data["path"] = name;
    return inst(data, "module");
  }

  return inst("null", "null");
}
export function allocate(value, dataID = null, staticID = null) {
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
export function allocateTypedObjectContents(object, dataID) {
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
export function allocateTypedObject(object, dataID) {
  return allocate(allocateTypedObjectContents(object, dataID), dataID);
}
export function toNormalObject(object) {
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
export function deAllocate(...ids) {
  for (let i = 0; i < ids.length; i++) {
    delete memory[ids[i]];
    //console.log("deallocated",ids[i]);
  }
}
export function getMemory(id, dataID) {
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

export function traceMake(ast) {
  return { ast: ast, path: [] };
}
export function traceDirectAdd(trace, node) {
  trace["path"].push(node);
  return trace;
}
export function traceAdd(dataID, node) {
  let trace = memory[memory[dataID]["trace"]];
  trace = traceDirectAdd(trace, node);
  memory[memory[dataID]["trace"]] = trace;
  return dataID;
}
export function traceDirectOut(trace) {
  trace["path"].pop();
  return trace;
}
export function traceOut(dataID) {
  let trace = memory[memory[dataID]["trace"]];
  trace = traceDirectOut(trace);
  memory[memory[dataID]["trace"]] = trace;
  return dataID;
}

export function castType(
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
  if (type === "any") return value;
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
      if (value[1] === "ref") {
        return inst(`<ref:${reconstructAstNode(value[0])}>`, "str");
      }
      if (value[1] === "vec2") {
        return inst(
          `<vec2:(${castType(dataID, memory[value[0][0]], "str")[0]},${
            castType(dataID, memory[value[0][1]], "str")[0]
          })>`,
          "str"
        );
      }
      if (value[1] === "vec3") {
        return inst(
          `<vec3:(${castType(dataID, memory[value[0][0]], "str")[0]},${
            castType(dataID, memory[value[0][1]], "str")[0]
          },${castType(dataID, memory[value[0][2]], "str")[0]})>`,
          "str"
        );
      }
      if (value[1] === "vec4") {
        return inst(
          `<vec4:(${castType(dataID, memory[value[0][0]], "str")[0]},${
            castType(dataID, memory[value[0][1]], "str")[0]
          },${castType(dataID, memory[value[0][2]], "str")[0]},${
            castType(dataID, memory[value[0][3]], "str")[0]
          })>`,
          "str"
        );
      }
      if (value[1] === "attr") {
        return inst(`<attr:${value[0][0]}>`);
      }
      if (value[1] === "module") {
        return inst(`<module:${value[0]["path"]}>`);
      }
      return inst(value[0].toString(), "str");
    case "num":
      if (value[1] === "str") {
        if (isNumeric(value[0])) {
          return inst(Number(value[0]), "num");
        }
      }
      if (tryTo) {
        return null;
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
        case "ref":
        case "func":
        case "vec2":
        case "vec3":
        case "vec4":
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
    case "vec2":
      switch (value[1]) {
        case "vec3":
        case "vec4":
          return inst(
            [
              allocate(memory[value[0][0]], dataID),
              allocate(memory[value[0][1]], dataID),
            ],
            "vec2"
          );
        default:
          const v = castType(dataID, value, "num");
          return inst([allocate(v, dataID), allocate(v, dataID)], "vec2");
      }
      break;
    case "vec3":
      switch (value[1]) {
        case "vec2":
          return inst(
            [
              allocate(memory[value[0][0]], dataID),
              allocate(memory[value[0][1]], dataID),
              allocate(inst(0, "num"), dataID),
            ],
            "vec2"
          );
        case "vec4":
          return inst(
            [
              allocate(memory[value[0][0]], dataID),
              allocate(memory[value[0][1]], dataID),
              allocate(memory[value[0][2]], dataID),
            ],
            "vec3"
          );
        default:
          const v = castType(dataID, value, "num");
          return inst(
            [allocate(v, dataID), allocate(v, dataID), allocate(v, dataID)],
            "vec3"
          );
      }
      break;
    case "vec4":
      switch (value[1]) {
        case "vec2":
          return inst(
            [
              allocate(memory[value[0][0]], dataID),
              allocate(memory[value[0][1]], dataID),
              allocate(inst(0, "num"), dataID),
              allocate(inst(0, "num"), dataID),
            ],
            "vec4"
          );
        case "vec3":
          return inst(
            [
              allocate(memory[value[0][0]], dataID),
              allocate(memory[value[0][1]], dataID),
              allocate(memory[value[0][2]], dataID),
              allocate(inst(0, "num"), dataID),
            ],
            "vec4"
          );
        default:
          const v = castType(dataID, value, "num");
          return inst(
            [
              allocate(v, dataID),
              allocate(v, dataID),
              allocate(v, dataID),
              allocate(v, dataID),
            ],
            "vec4"
          );
      }
      break;
    case "attr":
      if (value[1] == "type") {
        return inst(["type", value], "attr");
      } else {
        error(
          dataID,
          "cannot convert ",
          castType(dataID, value, "str")[0] + " to attr"
        );
      }
      break;
    default:
      if (tryTo) {
        return null;
      }
      error(dataID, "cannot cast type", value[1], "to type", type);
  }
}
export function isTypeEqual(typeA, typeB) {
  if (typeA === typeB) {
    return true;
  }
  if (typeA === "any" || typeB === "any") {
    return true;
  }
  return false;
}
export function isTypeEqualNull(typeA, typeB) {
  if (typeA === typeB) {
    return true;
  }
  if (typeA === "any" || typeB === "any") {
    return true;
  }
  if (typeB === "null") {
    return true;
  }
  return false;
}
export function isTypes(type, types) {
  return types.some((typeB) => isTypeEqual(type, typeB));
}
export function inst(value, type, extra = null) {
  // short version of instance type
  return instanceType(value, type, extra);
}
export function instanceType(value, type, extra = null) {
  //console.log("instanced value of type", type /*, "value (",value,")"*/ );
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

  if (extra) return [value, type, extra];
  else return [value, type];
}

export function instanceTypeDefault(type, dataID) {
  if (!Object.keys(typeInstance).includes(type)) {
    error(dataID, "cannot create instance of", type);
  }

  return inst({ type: "builtin", data: typeInstance[type] }, "func");
}

export function isEqual(a, b) {
  a = [a[0], a[1]];
  b = [b[0], b[1]];

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

export function handleValue(value, dataID) {
  if (value[1] == "ref") {
    return runNode(value[0], dataID);
  }

  return value;
}

export function print(dataID, ...text) {
  console.log("[log]  ", ...text);
}

export function warn(dataID, ...text) {
  console.warn("[warn] ", ...text);
}

export function error(dataID, ...text) {
  console.error("[error]", ...text);
  throw new Error(...text);
}
