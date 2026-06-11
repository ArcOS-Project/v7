import { Sleep } from "$ts/sleep";
import { tryParseInt } from "$ts/util";
import { tryJsonParse } from "$ts/util/json";
import type { BasicLang } from "$types/system/basic";
import { BasicCommand } from "./command";
import { REGEXES } from "./regex";

export class ArcBasicEngine {
  public source: string[];
  public programCounter = 0;
  public jumped = false;
  private variables: Record<string, () => Promise<any>> = {};
  private stdin: BasicLang.StdinCallback = () => "";
  private stdout: BasicLang.StdoutCallback = (m) => {};
  private stderr: BasicLang.StdoutCallback = (m) => {};
  private subroutines: Record<string, BasicLang.SubRoutine> = {};
  private functions: Record<string, BasicLang.Fn> = {};
  private commands: (typeof BasicCommand)[] = [];
  public version: string;
  public suborigins: number[] = [];
  public slowdown = 0;

  private get EOF() {
    return this.programCounter >= this.source.length;
  }

  async getFromStdin(): Promise<string> {
    return await this.stdin();
  }

  async sendToStdout(message: string) {
    this.stdout(message);
  }

  async sendToStderr(message: string) {
    this.stderr(message);
  }

  constructor(source: string, config: BasicLang.Config) {
    this.source = source.split("\n").map((s) => s.replaceAll(/[\t\r]/g, ""));
    this.stdin = config.stdin;
    this.stdout = config.stdout;
    this.stderr = config.stderr;
    this.version = config.version;
    if (config.builtinVariables) this.variables = config.builtinVariables;
    if (config.functions) this.functions = config.functions;
    if (config.commands) this.commands = config.commands;
    if (config.slowdown) this.slowdown = config.slowdown;
  }

  async execute() {
    while (!this.EOF) {
      this.jumped = false;
      await this.parseLine(this.source[this.programCounter]);
      if (!this.jumped) this.programCounter++;
    }
  }

  async parseLine(line: string) {
    line = line.trim();
    if (!line) return;

    await Sleep(this.slowdown);

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

  async getStrings(input: string, replaceVars = false): Promise<string[]> {
    const strings = [...input.matchAll(REGEXES.STRING)].map((s) => s.groups?.str || "");

    if (!strings.length) strings.push(input);

    if (!replaceVars) return strings;

    return await Promise.all(strings.map((s) => this.replaceVariables(s)));
  }

  async replaceVariables(input: string, runFunctions = true): Promise<string> {
    if (!input) return input;
    if (runFunctions) input = await this.runFunctions(input);
    const getters = [...input.matchAll(REGEXES.VARGET)];

    for (const getter of getters) {
      const key = getter.groups?.name;
      if (!key) continue;

      input = input.replace(`$${key}`, await this.getVariable(key));
    }

    return input;
  }

  async runFunctions(input: string) {
    if (!input) return input;

    const matches = [...input.matchAll(REGEXES.FUNCTION)];

    if (!matches.length) return input;
    if (input.match(/^"(.+)"$/)) input = input.replace(/^"(.+)"$/, "$1");

    for (const match of matches) {
      const { name, val } = match?.groups ?? {};
      const func = name ? this.functions[name.toLowerCase()] : undefined;

      if (!func) continue;

      const newVal = await func(await this.replaceVariables(tryJsonParse(val)), this);

      input = input.replace(`${name}(${val})`, newVal);
    }

    return input;
  }

  async getVariable(key: string): Promise<string> {
    return (await this.variables[key.toLowerCase()]?.()) ?? `$${key}`;
  }

  async setVariable(key: string, rawValue: string) {
    const value = await this.replaceVariables(rawValue);
    console.log(value);
    this.variables[key.toLowerCase()] = async () => value;
  }

  async error(message: string, exit = false) {
    await this.setVariable("ERR", message);

    if (exit) {
      this.sendToStderr(`\nError on line ${this.programCounter + 1} - ${message}\n`);
      this.jump(this.source.length);
    }
  }

  async createSubRoutine(name: string, startIdx: number = this.programCounter) {
    const endIdx = await this.findNextEndling("sub", startIdx);
    if (!endIdx) return;

    this.subroutines[name.toLowerCase()] = {
      start: startIdx + 1,
      end: endIdx - 1,
    };
    return endIdx + 1; // AFTER endsub
  }

  async goSubroutine(name: string) {
    const sub = this.subroutines[name.toLowerCase()];
    if (!sub) return await this.error(`SUB ${name}?`, true);

    this.suborigins.push(this.programCounter + 1); // AFTER gosub command
    this.jump(sub.start);
  }

  async returnFromSubroutine() {
    const returnTo = this.suborigins.pop();
    if (returnTo === undefined) return await this.error(`RETURN without GOSUB`, true);

    this.jump(returnTo);
  }

  async expression(input: string) {
    console.log(input);

    const dualMatch = input.match(REGEXES.DUALEXPR);

    if (!dualMatch) return !!tryJsonParse(input);

    const { left: rawLeft, mode, right: rawRight } = dualMatch?.groups ?? {};
    const left = tryParseInt(tryJsonParse(await this.replaceVariables(rawLeft)));
    const right = tryParseInt(tryJsonParse(await this.replaceVariables(rawRight)));

    console.log(left, right, typeof left, typeof right);

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

    await this.error(`Unknown expression '${mode}'`, true);
    return false;
  }

  async findNextEndling(endling: string, startIdx = this.programCounter): Promise<number | undefined> {
    const lookahead = this.source.slice(startIdx, this.source.length - 1);
    const endKeyword = `end${endling.toLowerCase()}`;
    const idx = lookahead.findIndex((l) => l.toLowerCase().startsWith(endKeyword));

    if (idx <= 0) {
      await this.error(`Expected ${endKeyword.toUpperCase()}`, true);
      return undefined;
    }

    return startIdx + idx;
  }

  jump(idx: number) {
    this.jumped = true;
    this.programCounter = idx;
  }

  jumpEnd() {
    this.jump(this.source.length);
  }

  static async FromSource(relativePath: string, config: BasicLang.Config) {
    if (!config.readScriptFile) {
      throw new Error("readScriptFile is not configured.");
    }

    const contents = await config.readScriptFile(relativePath);
    if (!contents) throw new Error("Failed to read file");

    return new ArcBasicEngine(contents, config);
  }
}
