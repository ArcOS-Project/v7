import { Log } from "$ts/logging";
import { Sleep } from "$ts/sleep";
import { tryParseInt } from "$ts/util";
import { getItemNameFromPath } from "$ts/util/fs";
import { getJsonHierarchy, setJsonHierarchy } from "$ts/util/hierarchy";
import { tryJsonParse, tryJsonStringify } from "$ts/util/json";
import { LogLevel } from "$types/shared/logging";
import type { BasicLang } from "$types/system/basic";
import { BasicCommand } from "./command";
import { REGEXES } from "./regex";

export class ArcBasicEngine {
  public source: string[];
  public programCounter = 0;
  public jumped = false;
  private variables: Record<string, () => Promise<any>> = {};
  private arrays: Record<string, Array<any>> = {};
  private stdin: BasicLang.StdinCallback = () => "";
  private stdout: BasicLang.StdoutCallback = () => {};
  private stderr: BasicLang.StdoutCallback = () => {};
  private subroutines: Record<string, BasicLang.SubRoutine> = {};
  private functions: Record<string, BasicLang.Fn> = {};
  private commands: (typeof BasicCommand)[] = [];
  private DEBUG = false;
  private filename: string = "<anonymous>";
  private stackFrames: BasicLang.BasicStackFrame[] = [];
  public HALT = false;
  public version: string;
  public suborigins: number[] = [];
  public slowdown = 0;

  private get EOF() {
    return this.programCounter > this.source.length - 1;
  }

  constructor(source: string, config: BasicLang.Config, filename?: string) {
    this.Log(`Constructing v${config.version}`);

    this.source = source.split("\n").map((s) => s.replaceAll(/[\t\r]/g, ""));
    this.stdin = config.stdin;
    this.stdout = config.stdout;
    this.stderr = config.stderr;
    this.version = config.version;
    this.DEBUG = config.debug ?? false;

    if (filename) this.filename = filename;
    if (config.builtinVariables) this.variables = config.builtinVariables;
    if (config.functions) this.functions = config.functions;
    if (config.commands) this.commands = config.commands;
    if (config.slowdown) this.slowdown = config.slowdown;
  }

  //#region UTILS

  private Log(message: string, level = LogLevel.info) {
    Log(`ArcBasicEngine`, message, level);
  }

  private Debug(message: string) {
    if (!this.DEBUG) return;

    this.sendToStderr(`*** DEBUG::${this.programCounter} *** ${message}\n`);
  }

  async getFromStdin(): Promise<string> {
    this.Debug(`getFromStdin`);
    return await this.stdin();
  }

  async sendToStdout(message: string) {
    this.Log(`'${message}' -> stdout`);
    this.stdout(message);
  }

  async sendToStderr(message: string) {
    this.Log(`'${message}' -> stderr`);
    this.stderr(message);
  }

  //#endregion
  //#region EXECUTION

  async execute() {
    if (this.filename) {
      this.captureStackFrame(`[EXECUTE]`, "engine");
    }

    while (!this.EOF) {
      this.jumped = false;
      await this.parseLine(this.source[this.programCounter]);
      if (!this.jumped) this.programCounter++;
    }
  }

  async parseLine(line: string) {
    this.Debug(`parseLine: >>${line}<<`);

    await Sleep(this.slowdown);

    if (this.HALT) return;

    line = line.trim();
    if (!line) return;

    const lower = line.toLowerCase();
    const command = this.commands.find(
      (c) => lower.startsWith(`${c.keyword.toLowerCase()} `) || lower === c.keyword.toLowerCase()
    );

    if (!command) {
      if (lower.startsWith("end")) return;
      return this.error(`unknown command ${line.split(" ")[0].toUpperCase()}`, true);
    }

    const instance = new command(this);
    const value = line.slice(command.keyword.length).trim();
    const result = await instance.execute(value);

    if (result !== undefined) this.error(result, true);
  }

  //#endregion
  //#region VARIABLES

  async getVariable(key: string): Promise<string> {
    this.Debug(`getVariable >>${key}<<`);

    if (!this.variables[key.toLowerCase()]) {
      this.error(`No such variable ${key}`, true, `$${key}`);
      return "";
    }

    return await this.variables[key.toLowerCase()]?.();
  }

  async setVariable(key: string, rawValue: string) {
    this.Debug(`setVariable >>${key}<< '${rawValue}'`);

    if (typeof rawValue !== "string") {
      this.error(`Variable value must be a string`, true, ` = `);
      return;
    }

    const keyLower = key.toLowerCase();
    const value = tryJsonParse(await this.replaceVariables(rawValue));

    if (rawValue.toLowerCase() === "@arr" || Array.isArray(value))
      return this.createArray(key, Array.isArray(value) ? value : []);

    if (this.arrays[keyLower]) {
      this.error(`An array with this name already exists.`, true, key);
      return;
    }

    this.variables[key.toLowerCase()] = async () => value;
  }

  async replaceVariables(input: string, runFunctions = true): Promise<string> {
    this.Debug(`replaceVariables >>${input}<< runFunctions=${runFunctions}`);

    if (!input || typeof input !== "string") return input;
    const getters = [...input.matchAll(REGEXES.VARGET)];

    for (const getter of getters) {
      const { name, idx, hierarchy } = getter.groups ?? {};
      if (!name) continue;

      let original = `$${name}`;
      let value: string;

      if (idx !== undefined) original += `[${idx}]`;
      else if (hierarchy) original += `{${hierarchy}}`;

      if (idx !== undefined) value = await this.getFromArray(name, idx);
      else if (hierarchy) value = await this.getFromObject(name, hierarchy);
      else value = await this.getVariable(name);

      input = input.replace(original, value);
    }

    if (runFunctions) input = await this.runFunctions(input);

    return input;
  }

  //#endregion
  //#region ARRAYS

  async createArray(key: string, value: any[] = []) {
    this.Debug(`createArray >>${key}<<`);

    this.arrays[key.toLowerCase()] = value;
  }

  async assignToArray(key: string, rawIdx: string, rawValue: string) {
    this.Debug(`assignToArray '${key}'['${rawIdx}'] >>${rawValue}<<`);

    const keyLower = key.toLowerCase();

    if (!this.arrays[keyLower]) {
      this.error(`No such array ${key}`, true, `$${key}`);
      return undefined;
    }

    const value = await this.replaceVariables(rawValue);
    const idx = await this.replaceVariables(rawIdx);
    const lowerIdx = idx?.toLowerCase?.() ?? "";

    if (!lowerIdx) {
      this.error(`Invalid array index`, true, `${key}[`);
      return undefined;
    }

    if (lowerIdx === "+") {
      this.arrays[keyLower].push(value);
    } else if (rawValue.toLowerCase() === "@del") {
      this.arrays[keyLower].splice(+lowerIdx, 1);
    } else {
      this.arrays[keyLower][+lowerIdx] = value;
    }
  }

  async getFromArray(key: string, rawIdx: string) {
    this.Debug(`getFromArray >>${key}<< '${rawIdx}'`);

    const array = this.arrays[key.toLowerCase()];

    if (!array) {
      this.error(`No such array ${key}`, true, `$${key}[`);
      return undefined;
    }

    const idx = await this.replaceVariables(rawIdx);
    const lowerIdx = idx?.toLowerCase?.() ?? "";

    if (!lowerIdx) {
      this.error(`Invalid array index`, true, `$${key}[${rawIdx}]`);
      return undefined;
    }

    switch (lowerIdx) {
      case "len":
        return array.length;
      case "+":
        this.error(`Addition index is invalid on an array getter`, true, `[+]`);
        return undefined;
      default:
        const idxInt = +lowerIdx;
        if (idxInt < 0) return array[array.length + idxInt];
        return array[idxInt];
    }
  }

  //#endregion
  //#region OBJECTS

  async assignToObject(key: string, rawHierarchy: string, rawValue: string) {
    const variable = tryJsonParse((await this.getVariable(key)) ?? "");

    if (typeof variable !== "object") return this.error(`Variable not found or not an object`, true, `${key}{`);

    const isDelete = rawValue.toLowerCase() === "@del";
    const hierarchy = await this.replaceVariables(rawHierarchy, true);
    const value = isDelete ? undefined : await this.replaceVariables(rawValue, true);

    setJsonHierarchy(variable, hierarchy, tryParseInt(tryJsonParse(value)));

    await this.setVariable(key, tryJsonStringify(variable, 0));
  }

  async getFromObject(key: string, rawHierarchy: string) {
    const variable = tryJsonParse((await this.getVariable(key)) ?? "");
    if (typeof variable !== "object") return this.error(`Variable not found or not an object`, true, `$${key}{${rawHierarchy}}`);

    const hierarchy = await this.replaceVariables(rawHierarchy, true);
    const value = getJsonHierarchy(variable, hierarchy);

    return typeof value === "object" ? tryJsonStringify(value, 0) : value;
  }

  //#endregion
  //#region SUBROUTINES

  async createSubRoutine(name: string, startIdx: number = this.programCounter) {
    this.Debug(`createSubRoutine >>${name}<< startIdx=${startIdx}`);

    const endIdx = await this.findNextEndling("sub", startIdx);
    if (!endIdx) return;

    this.subroutines[name.toLowerCase()] = {
      start: startIdx + 1,
      end: endIdx - 1,
    };
    return endIdx + 1; // AFTER endsub
  }

  async goSubroutine(name: string) {
    this.Debug(`goSubroutine >>${name}<<`);
    this.captureStackFrame(name, "sub");

    const sub = this.subroutines[name.toLowerCase()];
    if (!sub) return await this.error(`SUB ${name}?`, true, name);

    this.suborigins.push(this.programCounter + 1); // AFTER gosub command
    this.jump(sub.start);
  }

  async returnFromSubroutine() {
    this.Debug(`returnFromSubroutine`);

    const returnTo = this.suborigins.pop();
    if (returnTo === undefined) return await this.error(`RETURN without GOSUB`, true);

    this.jump(returnTo);
  }

  //#endregion
  //#region PARSING

  async runFunctions(input: string) {
    this.Debug(`runFunctions >>${input}<<`);

    if (!input) return input;

    const matches = [...input.matchAll(REGEXES.FUNCTION)];

    if (!matches.length) return input;
    if (input.match(/^"(.+)"$/)) input = input.replace(/^"(.+)"$/, "$1");

    for (const match of matches) {
      const { name, val } = match?.groups ?? {};
      const func = name ? this.functions[name.toLowerCase()] : undefined;

      if (!func) continue;

      const newVal = await func(await this.replaceVariables(tryJsonParse(val)), this);

      input = input.replace(`${name}(${val})`, typeof newVal !== "string" ? tryJsonStringify(newVal, 0) : newVal);
    }

    this.Debug(`runFunctions RESULT >>${input}<<`);

    return input;
  }

  async getStrings(input: string, replaceVars = false): Promise<string[]> {
    this.Debug(`getStrings >>${input}<< replaceVars=${replaceVars}`);

    const strings = [...input.matchAll(REGEXES.STRING)].map((s) => s.groups?.str || "");

    if (!strings.length) strings.push(input);

    if (!replaceVars) return strings;

    return await Promise.all(strings.map((s) => this.replaceVariables(s)));
  }

  async expression(input: string) {
    this.Debug(`expression >>${input}<<`);

    const dualMatch = input.match(REGEXES.DUALEXPR);

    if (!dualMatch) return !!tryJsonParse(input);

    const { left: rawLeft, mode, right: rawRight } = dualMatch?.groups ?? {};
    const left = tryParseInt(tryJsonParse(await this.replaceVariables(rawLeft)));
    const right = tryParseInt(tryJsonParse(await this.replaceVariables(rawRight)));

    switch (mode.toUpperCase()) {
      case "EQ":
        return left == right;
      case "GT":
        return left > right;
      case "LT":
        return left < right;
      case "GTE":
        return left >= right;
      case "LTE":
        return left <= right;
      case "NEQ":
        return left != right;
    }

    await this.error(`Unknown expression '${mode}'`, true, mode);
    return false;
  }

  //#endregion
  //#region JUMPING

  async findNextEndling(endling: string, startIdx = this.programCounter): Promise<number | undefined> {
    this.Debug(`findNextEndling >>${endling}<< startIdx=${startIdx}`);

    const lookahead = this.source.slice(startIdx, this.source.length - 1);
    const endKeyword = `end${endling.toLowerCase()}`;
    const idx = lookahead.findIndex((l) => l.toLowerCase().startsWith(endKeyword));

    if (idx <= 0) {
      await this.error(`Expected ${endKeyword.toUpperCase()}`, true);
      return undefined;
    }

    const endlingIdx = startIdx + idx;

    this.Debug(`findNextEndling: RESULT ${endlingIdx} >>${this.source[endlingIdx]}<<`);
    return endlingIdx;
  }

  jump(idx: number) {
    this.Debug(`jump >>${idx}<<`);

    this.jumped = true;
    this.programCounter = idx;
  }

  jumpEnd() {
    this.Debug(`jumpEnd`);

    this.HALT = true;
    this.jump(this.source.length);
  }

  //#endregion
  //#region ERROR HANDLING

  async error(message: string, exit = false, columnIndexHint?: string) {
    this.Debug(`error: >>${message}<< exit=${exit}`);
    if (exit) this.jumped = true;

    await this.setVariable("ERR", message);

    if (exit) {
      const line = this.source[this.programCounter];
      const lineNumber = `${this.programCounter + 1}`;
      const columnNumber = Math.max(columnIndexHint ? line.indexOf(columnIndexHint) : 0, 0);
      const linePrefix = " ".repeat(lineNumber.length) + "  ║  ";
      const leftOffset = " ".repeat(columnNumber);

      this.sendToStderr(`\nError in ${this.filename}:${lineNumber}:${columnNumber} - ${message}\n`);
      this.sendToStderr(`\n${linePrefix}`);
      this.sendToStderr(`\n ${lineNumber} ║  ${line}`);
      this.sendToStderr(`\n${linePrefix}${leftOffset}│`);
      this.sendToStderr(`\n${linePrefix}${leftOffset}└─ ${message} (${lineNumber}:${columnNumber})`);
      this.sendToStderr(`\n`);

      for (const { name, line, type } of this.stackFrames.reverse()) {
        this.sendToStderr(`\n  at ${type} ${name} (line ${line + 1})`);
      }

      this.sendToStderr(`\n`);
      this.jumpEnd();
    }
  }

  captureStackFrame(name: string, type: BasicLang.BasicStackFrameType) {
    this.stackFrames.push({
      line: this.programCounter,
      name,
      type,
    });
  }

  //#endregion

  static async FromSource(relativePath: string, config: BasicLang.Config) {
    if (!config.readScriptFile) {
      throw new Error("readScriptFile is not configured.");
    }

    const contents = await config.readScriptFile(relativePath);
    if (!contents) throw new Error("Failed to read file");

    return new ArcBasicEngine(contents, config, getItemNameFromPath(relativePath));
  }
}
