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

import type { AppProcess } from "$ts/apps/process";
import { ArcOSVersion } from "$ts/env";
import { Filesystem } from "$ts/fs";
import { join } from "$ts/fs/util";
import { getJsonHierarchy, setJsonHierarchy } from "$ts/hierarchy";
import { keysToLowerCase, tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import type { AppProcessData } from "$types/app";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
} from "$types/fs";
import type {
  InterpreterCommand,
  LanguageOptions,
  Libraries,
} from "$types/lang";
import { LanguageExecutionError } from "./error";
import { BaseLibraries, DefaultLanguageOptions } from "./store";

export class LanguageInstance extends Process {
  public output: string[] = [];
  public variables = new Map<string, any>([]);
  public pointer = -1;
  public oldPointer = -1;
  public source: InterpreterCommand[] = [];
  public tokens: any[] = [];
  public stdin: () => Promise<string>;
  public stdout: (m: string) => void;
  public onTick: (l: LanguageInstance) => void;
  public onError: (error: LanguageExecutionError) => void;
  public onExit: (l: LanguageInstance) => void;
  private consumed = false;
  private MAX_EXECUTION_CAP = 1000;
  public libraries: Libraries = BaseLibraries;
  public executionCount = -1;
  public workingDir: string;
  public options: LanguageOptions;
  public fs: Filesystem;
  private exception: LanguageExecutionError | null = null;
  public app: AppProcessData | undefined;
  public appProcess: AppProcess | undefined;
  public userDaemon: UserDaemon | undefined;

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

    this.source = this.parseSource(source);
    this.stdin = options.stdin || (async () => "");
    this.stdout = options.stdout || ((m: string) => console.log(m));
    this.onTick = this.options.onTick || (() => {});
    this.onError = this.options.onError || (() => {});
    this.onExit = this.options.onExit || (() => {});
    this.workingDir = this.options.workingDir || ".";

    this.libraries = keysToLowerCase(libraries) as Libraries;

    this.fs = this.kernel.getModule<Filesystem>("fs");

    const daemonPid = this.env.get("userdaemon_pid");

    if (daemonPid) this.userDaemon = this.handler.getProcess(+daemonPid);
  }

  async stop() {
    this.onExit(this);

    await Sleep(10);
  }

  private parseSource(source: string): InterpreterCommand[] {
    const lines = `${source}\n:*idle\njump :*idle\n:EOF`.split("\n");
    const commands: InterpreterCommand[] = [];

    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      const line = lines[lineNumber];
      const segments = line.split("&&");
      const tokens: { col: number; text: string }[] = [];

      let length = 0;

      for (let i = 0; i < segments.length; i++) {
        tokens.push({
          col: length,
          text: segments[i].trim(),
        });

        length += segments[i].length + 2;
      }

      for (let columnNumber = 0; columnNumber < tokens.length; columnNumber++) {
        const command = tokens[columnNumber];
        if (command) {
          commands.push({
            line: lineNumber + 1,
            column: columnNumber + 1 + command.col,
            command: command.text,
          });
        }
      }
    }

    return commands;
  }

  async watchException() {
    while (!this._disposed) {
      if (this.exception) {
        this.onError(this.exception);

        await this.killSelf();

        break;
      }

      await Sleep(1); // prevent hanging or smth
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
      this.pointer++; // Increment pointer first

      const commandObj = this.source[this.pointer];

      if (commandObj.command.startsWith("#")) {
        continue;
      }

      // Check if commandObj is defined
      if (!commandObj) {
        this.error(`Command at pointer ${this.pointer} is undefined.`);
        break; // Exit the loop if commandObj is undefined
      }

      const command = commandObj.command;

      this.tokens = this.normalizeTokens(this.tokenise(command)) || [];

      await this.interpret();

      if (this._disposed) break;

      await Sleep(this.options.tickDelay || 1);

      if (
        this.pointer >= this.source.length - 1 &&
        this.options.continuous &&
        !this._disposed
      ) {
        this.jump(":*idle");
      }
    }

    await this.killSelf();

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

    if (
      typeof this.tokens[0] === "string" &&
      this.tokens[1] == "=" &&
      this.tokens[0].startsWith("@")
    ) {
      if (this.tokens[0].includes(".")) {
        const split = this.tokens[0].replace("@", "").split(".") as string[];
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
          this.tokens[0].replace("@", ""),
          tryJsonParse(this.tokens.slice(2, this.tokens.length).join(" "))
        );
      }
    } else if (
      typeof this.tokens[0] === "string" &&
      this.tokens[1] == "+=" &&
      this.tokens[0].startsWith("@")
    ) {
      const variable = this.tokens[0].replace("@", "");
      this.variables.set(
        variable,
        this.variables.get(variable) +
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
        this.variables.set(captureName, result);

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
    return new Map<string, any>([
      ["version", ArcOSVersion],
      ["mode", ArcMode()],
      ["build", ArcBuild()],
      ["argv", this.options?.arguments || []],
    ]);
  }

  expectTokenLength(length: number, where: string) {
    if (this._disposed) this.error("Disposed.");

    const notEnough = this.tokens.length < length;

    if (notEnough) {
      this.error(
        `Expected ${length} arguments, got ${this.tokens.length}.`,
        where
      );

      return false;
    }

    return true;
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

    const index = this.source.findIndex((cmd) => cmd.command === codepoint);

    if (index < 0) this.error(`Code point "${codepoint}" does not exist.`);

    this.oldPointer = this.pointer;
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
