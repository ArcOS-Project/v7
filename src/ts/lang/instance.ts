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
import { Filesystem } from "$ts/fs";
import { join } from "$ts/fs/util";
import { getJsonHierarchy, setJsonHierarchy } from "$ts/hierarchy";
import { keysToLowerCase, tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Sleep } from "$ts/sleep";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
} from "$types/fs";
import type { LanguageOptions, Libraries } from "$types/lang";
import { LanguageExecutionError } from "./error";
import { BaseLibraries, DefaultLanguageOptions } from "./store";

export class LanguageInstance extends Process {
  public output: string[] = [];
  public variables = new Map<string, any>([]);
  public pointer = -1;
  public source: string[] = [];
  public tokens: any[] = [];
  public stdin: () => Promise<string>;
  public stdout: (m: string) => void;
  public onTick: (l: LanguageInstance) => void;
  public onError: (error: LanguageExecutionError) => void;
  private consumed = false;
  private MAX_EXECUTION_CAP = 1000;
  public libraries: Libraries = BaseLibraries;
  public executionCount = -1;
  public workingDir: string;
  public options: LanguageOptions;
  private fs: Filesystem;
  private exception: LanguageExecutionError | null = null;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    source: string,
    options: LanguageOptions = DefaultLanguageOptions,
    libraries: Libraries = BaseLibraries
  ) {
    super(handler, pid, parentPid);

    this.options = options;

    this.source = `${source}\n\n:*idle\njump :*idle\n:EOF`.split("\n");
    this.source = this.source.map((l) => l.split("&&")).flat();
    this.source = this.source.map((l) => l.trim());
    this.stdin = options.stdin || (async () => "");
    this.stdout = options.stdout || ((m: string) => console.log(m));
    this.onTick = this.options.onTick || (() => {});
    this.onError = this.options.onError || (() => {});
    this.workingDir = this.options.workingDir || ".";

    this.libraries = keysToLowerCase(libraries) as Libraries;

    this.fs = this.kernel.getModule<Filesystem>("fs");
  }

  async watchException() {
    while (!this._disposed) {
      if (this.exception) {
        this.onError(this.exception);

        await this.killSelf();

        break;
      }

      await Sleep(1);
    }
  }

  error(reason: string, keyword?: string) {
    if (this.exception) return this.exception;

    this.exception = new LanguageExecutionError(reason, this, keyword);

    return this.exception;
  }

  async run() {
    if (this.consumed) this.error("Language instance is already consumed");

    this.consumed = true;

    await this.reset();

    while (this.pointer < this.source.length - 1) {
      let command = this.source[this.pointer];

      this.tokens = this.normalizeTokens(this.tokenise(command)) || [];

      await this.interpret();

      await Sleep(this.options.tickDelay || 1);

      this.pointer++;

      if (this.pointer >= this.source.length - 1 && this.options.continuous) {
        this.pointer = this.source.indexOf(":*idle");
      }
    }

    return this.output;
  }

  async interpret() {
    if (this._disposed) throw new Error("Disposed.");

    this.options.onTick?.(this);

    if (!this.tokens[0]) return;
    if (
      this.executionCount > this.MAX_EXECUTION_CAP &&
      !this.options.continuous
    )
      this.error("Execution cap exceeded");

    this.executionCount++;

    let captureOutput = this.tokens[this.tokens.length - 2] == ">>";
    let captureName: string | undefined = "";
    let result = "";

    if (captureOutput) {
      captureName = this.tokens.pop();

      this.tokens.pop();
    }

    if (this.tokens[1] == "=" && this.tokens[0]) {
      if (this.tokens[0].includes(".")) {
        const split = this.tokens[0].split(".") as string[];
        const name = split.shift();

        const variable = name ? this.variables.get(name) : undefined;

        if (!name || !variable) {
          this.error(
            "Can only perform a property assignment on a defined variable"
          );

          return;
        }

        if (typeof variable != "object") {
          this.error("Can only perform a property assignment on an object");

          return;
        }

        setJsonHierarchy(
          variable,
          split.join("."),
          tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
        );

        this.variables.set(name, variable);
      } else {
        this.variables.set(
          this.tokens[0],
          tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
        );
      }
    } else if (this.tokens[1] == "+=") {
      this.variables.set(
        this.tokens[0],

        this.variables.get(this.tokens[0]) +
          tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
      );
    } else {
      const targetKeyword = (this.tokens.shift() || "").toLowerCase();
      const func = targetKeyword.includes(".")
        ? getJsonHierarchy(this.libraries, targetKeyword)
        : this.libraries["*"][targetKeyword];

      if (!targetKeyword.startsWith(":")) {
        if (!func) {
          this.error(`Unknown keyword`, targetKeyword);

          return;
        }

        result = await func(this);
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

  normalizeTokens(tokens: any[]) {
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].startsWith("$")) {
        if (tokens[i].includes(".")) {
          const split = tokens[i].split(".");
          const name = split.shift()?.replace("$", "");

          if (!name) {
            this.error("Invalid JSON path");
            return;
          }

          const variable = this.variables.get(name);

          if (!variable) {
            this.error(`Unknown variable "${variable}"`);
            return;
          }

          tokens[i] = getJsonHierarchy(variable, split.join("."));
        } else {
          tokens[i] = this.variables.get(tokens[i].slice(1));
        }
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
    if (this._disposed) this.error("Disposed.");

    const notEnough = this.tokens.length < length;

    if (notEnough)
      this.error(
        `Expected ${length} arguments, got ${this.tokens.length}.`,
        where
      );

    return notEnough;
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
        this.error(`Unknown calc operation "${operator}"`);
    }
  }

  jump(codepoint: string) {
    if (codepoint[0] !== ":") this.error(`Invalid codepoint "${codepoint}"`);

    const index = this.source.indexOf(codepoint);

    if (index < 0) this.error(`Code point "${codepoint}" does not exist.`);

    this.pointer = index;
  }

  async readDir(
    relativePath: string
  ): Promise<DirectoryReadReturn | undefined> {
    const path = join(this.workingDir, relativePath);

    return await this.fs.readDir(path);
  }

  async createDirectory(relativePath: string): Promise<boolean> {
    const path = join(this.workingDir, relativePath);

    return await this.fs.createDirectory(path);
  }

  async readFile(relativePath: string): Promise<ArrayBuffer | undefined> {
    const path = join(this.workingDir, relativePath);

    console.log(path);

    return await this.fs.readFile(path);
  }

  async writeFile(relativePath: string, data: Blob): Promise<boolean> {
    const path = join(this.workingDir, relativePath);

    return await this.fs.writeFile(path, data);
  }

  async tree(
    relativePath: string
  ): Promise<RecursiveDirectoryReadReturn | undefined> {
    const path = join(this.workingDir, relativePath);

    return await this.fs.tree(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const absoluteSource = join(this.workingDir, source);
    const absoluteDestination = join(this.workingDir, destination);

    return await this.fs.copyItem(absoluteSource, absoluteDestination);
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    const absoluteSource = join(this.workingDir, source);
    const absoluteDestination = join(this.workingDir, destination);

    return await this.fs.moveItem(absoluteSource, absoluteDestination);
  }

  async deleteItem(relativePath: string): Promise<boolean> {
    const absoluteSource = join(this.workingDir, relativePath);

    return await this.fs.deleteItem(absoluteSource);
  }
}
