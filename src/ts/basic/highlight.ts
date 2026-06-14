import type { HLJSApi, Language } from "highlight.js";
import { REGEXES } from "./engine/regex";

export default function ArcBasicHighlighter(hljs: HLJSApi): Language {
  const keywords = [
    "DO",
    "ENDIF",
    "ENDSUB",
    "ENDWHILE",
    "EQ",
    "ERROR",
    "GOSTART",
    "GOSUB",
    "GT",
    "GTE",
    "IF",
    "KILL",
    "LT",
    "LTE",
    "NEQ",
    "PRINT",
    "SOUNDBUS",
    "STOP",
    "SUB",
    "THEN",
    "VAR",
    "WHILE",
  ];

  const VARGET = {
    className: "variable",
    match: /\$[A-Za-z]{1,6}/,
    relevance: 10,
  };

  const LEN = {
    className: "keyword",
    match: /(?<=\[)LEN(?=\])/,
  };

  const STRING = {
    scope: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARGET,
      LEN,
      {
        className: "title",
        begin: /[a-zA-Z\_]+(?=\()/g,
        contains: [VARGET],
        relevance: 0,
      },
    ],
  };

  const FUNCTION = {
    className: "title",
    begin: /[a-zA-Z\_]+(?=\()/g,
    contains: [STRING, VARGET],
    relevance: 0,
  };

  const HIERARCHY = {
    className: "symbol",
    match: /(?<={)[a-zA-Z_\.]+(?=})/,
    contains: [VARGET],
  };

  return {
    name: "ArcBasic",
    case_insensitive: true,
    keywords: {
      $pattern: "[a-zA-Z]+",
      keyword: keywords,
      literal: ["true", "false"],
    },
    contains: [
      {
        className: "number",
        begin: /(\-|)[0-9][0-9.]{0,}/,
        relevance: 0,
      },
      {
        className: "name",
        begin: /@[A-Za-z]+/,
        relevance: 0,
      },
      {
        className: "variable",
        begin: /(?<=VAR )[A-Za-z]{1,6}(?=\[|\{|)/,
        relevance: 5,
      },
      HIERARCHY,
      VARGET,
      STRING,
      LEN,
      FUNCTION,
    ],
  };
}
