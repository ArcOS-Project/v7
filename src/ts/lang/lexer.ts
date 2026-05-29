/**
 * ArcOS Scripting Engine
 * 
 * Created by Allucat1000 for the ArcOS Project. This engine allows users to write and execute scripts
 * in ArcOS, with a focus on Terminal functionality. It is subject to expansion in the future.
 * 
 * ArcScript is licensed under GPLv3. All rights belong to their respective authors.
 * 
 * Copyright © 2026 ArcOS Project
 */
import { type ArcScriptLexerToken, ArcScriptLexerTokenType, type IArcScriptEngine } from "$interfaces/IArcScriptEngine";
import { Keywords, Operators, TwoCharOps } from "./store";

export class ArcScriptLexer {
  private engine: IArcScriptEngine;
  private src: string;

  constructor(engine: IArcScriptEngine, src: string) {
    this.engine = engine;
    this.src = src;
  }

  static Lex(engine: IArcScriptEngine, src: string): ArcScriptLexerToken[] {
    return new this(engine, src).tokenize();
  }

  tokenize(): ArcScriptLexerToken[] {
    if (this.engine._disposed) return [];

    this.engine.tokenOut = [];
    this.engine.type = ArcScriptLexerTokenType.UNKNOWN;
    this.engine.i = 0;
    this.engine.blockStartPos = 0;
    this.engine.lineStartPos = 0;

    const next = () => {
      this.engine.i++;
    };

    while (this.engine.i < this.src.length) {
      const c = this.src[this.engine.i];

      if (c == "\n" || (c == " " && this.engine.type !== ArcScriptLexerTokenType.STRING)) {
        if (this.engine.type === ArcScriptLexerTokenType.STRING) {
          return this.engine.error("expected string terminator");
        }

        this.add();

        if (c === "\n") {
          this.engine.type = ArcScriptLexerTokenType.NEWLINE;
          this.add();

          this.engine.startPos = this.engine.i + 1;
          this.engine.line++;
          this.engine.lineStartPos = this.engine.startPos;

          this.engine.blockStartPos = 0;
        }

        this.engine.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      }

      if (c == `"` && !this.escaped(this.src, this.engine.i)) {
        if (this.engine.type === ArcScriptLexerTokenType.STRING) {
          next();
          this.add(false);
          this.engine.type = ArcScriptLexerTokenType.UNKNOWN;

          continue;
        } else if (this.engine.type === ArcScriptLexerTokenType.UNKNOWN) {
          this.add();
          this.engine.type = ArcScriptLexerTokenType.STRING;
        }

        next();
        continue;
      }

      if (TwoCharOps.includes(c + this.src[this.engine.i + 1]) && this.engine.type !== ArcScriptLexerTokenType.STRING) {
        this.engine.i++;
        this.engine.temp = c + this.src[this.engine.i];

        this.engine.type = ArcScriptLexerTokenType.OP;
        this.add();

        this.engine.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      } else if (Operators.includes(c) && this.engine.type !== ArcScriptLexerTokenType.STRING) {
        this.add();
        this.engine.type = ArcScriptLexerTokenType.OP;
        this.engine.temp = c;
        this.add();
        this.engine.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      }

      this.engine.temp += c;
      next();
    }

    this.add();

    return structuredClone(this.engine.tokenOut);
  }

  private add(trim: boolean = true) {
    if (this.engine._disposed) return;

    if (this.engine.type == ArcScriptLexerTokenType.UNKNOWN) {
      if (this.engine.temp !== "") {
        if (Keywords.includes(this.engine.temp.trim())) this.engine.type = ArcScriptLexerTokenType.KEYWORD;
        else if (!isNaN(Number(this.engine.temp))) this.engine.type = ArcScriptLexerTokenType.NUM;
        else this.engine.type = ArcScriptLexerTokenType.IDENT;
      } else {
        this.engine.blockStartPos = this.engine.i - this.engine.startPos;
        return;
      }
    }

    this.engine.tokenOut.push({
      position: {
        start: {
          column: this.engine.blockStartPos + 1,
          line: this.engine.line,
        },
        end: {
          column: this.engine.i - this.engine.startPos + 1,
          line: this.engine.line,
        },
      },

      type: this.engine.type,
      value: trim ? this.engine.temp.trim() : this.engine.temp,
    });

    this.engine.blockStartPos = this.engine.i - this.engine.startPos;
    this.engine.temp = "";
  }

  private escaped(src: string, i: number) {
    if (this.engine._disposed) return false;

    let c = 0;

    while (src[i] == "\\") {
      i--;
      c++;
    }

    return c % 2 === 1;
  }
}
