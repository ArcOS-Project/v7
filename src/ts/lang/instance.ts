/**
 * ARCOS SCRIPTING LANGUAGE - TEST 3
 *
 * Experimental implementation for the ArcOS Project
 * I really have no idea what I'm doing. Someone send help.
 *
 * Author: IzKuipers <izaak.kuipers@gmail.com>
 * Credits: Mistium: original OTS implementation
 *
 * Original filename:  OTS.js
 * Rewritten filename: ots-based.ts
 *
 * January 12th 2024 @ 2:37PM GMT+1
 */

import { ArcOSVersion } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Sleep } from "$ts/sleep";
import type { Keywords, LanguageOptions } from "$types/lang";
import { BaseLanguageKeywords, DefaultLanguageOptions } from "./store";

export class LanguageInstance extends Process {
  public output: string[] = [];
  public variables = new Map<string, any>([]);
  public pointer = -1;
  public source: string[] = [];
  public tokens: any[] = [];
  public stdin: () => Promise<string> = async () => "";
  public stdout: (m: string) => void = (m) => console.log(m);
  private consumed = false;
  private MAX_EXECUTION_CAP = 1000;
  private executionCount = -1;
  private options: LanguageOptions;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    source: string,
    options: LanguageOptions = DefaultLanguageOptions,
    keywords: Keywords = BaseLanguageKeywords
  ) {
    super(handler, pid, parentPid);

    this.source = `${source}\n\n:*idle\njump :*idle\n:EOF`.split("\n");
    this.source = this.source.map((l) => l.split("&&")).flat();
    this.source = this.source.map((l) => l.trim());
    this.stdin = options.stdin || (async () => "");
    this.stdout = options.stdout || ((m: string) => console.log(m));

    this.options = options;

    this.loadKeywords(keywords);
  }

  loadKeywords(keywords: Keywords) {
    for (const [keyword, func] of Object.entries(keywords)) {
      (this as any)[`__${keyword.toLowerCase()}`] = func;
    }
  }

  async run() {
    if (this.consumed) throw new Error("Language instance is already consumed");

    this.consumed = true;

    await this.reset();

    while (this.pointer < this.source.length - 1) {
      let command = this.source[this.pointer];

      this.tokens = this.normalizeTokens(this.tokenise(command));

      await this.interpret();

      await Sleep(1);

      this.pointer++;

      if (this.pointer >= this.source.length - 1 && this.options.continuous) {
        this.pointer = this.source.indexOf(":*idle");
      }
    }

    return this.output;
  }

  async interpret() {
    if (!this.tokens[0]) return;
    if (
      this.executionCount > this.MAX_EXECUTION_CAP &&
      !this.options.continuous
    )
      throw new Error("Execution cap exceeded");

    this.executionCount++;

    let captureOutput = this.tokens[this.tokens.length - 2] == ">>";
    let captureName: string | undefined = "";
    let result = "";

    if (captureOutput) {
      captureName = this.tokens.pop();

      this.tokens.pop();
    }

    if (this.tokens[1] == "=") {
      this.variables.set(
        this.tokens[0],
        tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
      );
    } else if (this.tokens[1] == "+=") {
      this.variables.set(
        this.tokens[0],

        this.variables.get(this.tokens[0]) +
          tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
      );
    } else {
      const targetKeyword = this.tokens.shift() || "";

      if (!targetKeyword.startsWith(":")) {
        if (!(this as any)[`__${targetKeyword}`])
          throw new Error(
            `Unknown keyword "${targetKeyword}" on line ${this.pointer}`
          );

        result = await (this as any)[`__${targetKeyword}`](this);
      }

      if (captureOutput && captureName) {
        this.variables.set(captureName, tryJsonParse(result));

        return;
      }

      if (!result) return;

      if (
        typeof result === "string" &&
        result.startsWith('"') &&
        result.endsWith('"')
      ) {
        result = result.slice(1, result.length - 1);
      }

      this.output.push(result);
    }
  }

  normalizeTokens(tokens: string[]) {
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].startsWith("$")) {
        tokens[i] = this.variables.get(tokens[i].slice(1));
        console.log(tokens, tokens[i]);
      } else if (tokens[i].startsWith('"') && tokens[i].endsWith('"')) {
        tokens[i] = tokens[i].slice(1, tokens[i].length - 1);
      }
    }

    return tokens;
  }

  tokenise(code: string) {
    const split: string[] = [];

    let letter = 0;
    let char = "";
    let brackets = 0;
    let out: string[] = [];
    let escaped = false;

    try {
      const len = code.length;

      while (letter < len) {
        char = code[letter];

        if (char === '"' && !escaped) {
          brackets = 1 - brackets;

          out.push('"');
        } else if (char === "\\") {
          escaped = !escaped;
          out.push("\\");
        } else {
          out.push(char);
          escaped = false;
        }

        letter++;

        if (brackets === 0 && code[letter] === " ") {
          split.push(out.join(""));
          out = [];
          letter++;
        }
      }

      split.push(out.join(""));

      return split;
    } catch {
      return [];
    }
  }

  async reset() {
    this.output = [];
    this.tokens = [];
    this.pointer = -1;
    this.variables = await this.defaultVariables();
  }

  async defaultVariables() {
    return new Map<string, string>([
      ["version", ArcOSVersion],
      ["mode", ArcMode()],
      ["build", ArcBuild()],
    ]);
  }

  expectTokenLength(length: number, where: string) {
    if (this._disposed) throw new Error("Disposed.");
    if (this.tokens.length < length)
      throw new Error(
        `${where}: expected ${length} arguments, got ${this.tokens.length}.`
      );
  }

  calculate(left: string, operator: string, right: string) {
    switch (operator) {
      case "+":
        return Number(left) + Number(right);
      case "-":
        return Number(left) - Number(right);
      case "*":
        return Number(left) * Number(right);
      case "/":
        return Number(left) / Number(right);
      case "%":
        return Number(left) % Number(right);
      case "^":
        return Number(left) ** Number(right);
      case "and":
        return left == "true" && right == "true";
      case "or":
        return left == "true" || right == "true";
      case "xor":
        return (
          (left == "true" && right != "true") ||
          (left != "true" && right == "true")
        );
      case "nor":
        return !(left == "true" || right == "true");
      case "nand":
        return !(left == "true" && right == "true");
      case "xnor":
        return (left == "true") === (right == "true");
      case "==":
        return String(left).toLowerCase() == String(right).toLowerCase();
      case "!=":
        return String(left).toLowerCase() != String(right).toLowerCase();
      case ">":
        return left > right;
      case "<":
        return left < right;
      case ">=":
        return left >= right;
      case "<=":
        return left <= right;
      case "in":
        return String(right).indexOf(String(left)) !== -1;
      case "notin":
        return String(right).indexOf(String(left)) === -1;
      case "item":
        return left[Number(right)];
      default:
        throw new Error(`Unknown calc operation "${operator}"`);
    }
  }
}
