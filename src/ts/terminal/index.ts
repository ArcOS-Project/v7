import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import TerminalWindow from "$apps/components/terminalwindow/TerminalWindow.svelte";
import { arrayToText, textToBlob } from "$ts/util/convert";
import type { FilesystemDrive } from "$ts/drives/drive";
import { join } from "$ts/util/fs";
import { KernelStack } from "$ts/env";
import { Process } from "$ts/process/instance";
import { LoginUser } from "$ts/server/user/auth";
import type { UserDaemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import type { DirectoryReadReturn } from "$types/fs";
import type { ArcTermConfiguration, Arguments } from "$types/terminal";
import ansiEscapes from "ansi-escapes";
import type { Terminal } from "xterm";
import { TerminalProcess } from "./process";
import { Readline } from "./readline/readline";
import {
  BOLD,
  BRBLACK,
  BRBLUE,
  BRGREEN,
  BRRED,
  BRYELLOW,
  DefaultArcTermConfiguration,
  RESET,
  TerminalCommandStore,
} from "./store";
import { ArcTermVariables } from "./var";
import { ASCII_ART } from "$ts/intro";

export class ArcTerminal extends Process {
  readonly CONFIG_PATH = join(UserPaths.Configuration, "ArcTerm/arcterm.conf");
  path: string;
  drive: FilesystemDrive | undefined;
  term: Terminal;
  rl: Readline | undefined;
  var: ArcTermVariables | undefined;
  contents: DirectoryReadReturn | undefined;
  daemon: UserDaemon | undefined;
  ansiEscapes = ansiEscapes;
  lastCommandErrored = false;
  config: ArcTermConfiguration = DefaultArcTermConfiguration;
  window: TerminalWindowRuntime | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, term: Terminal, path?: string) {
    super(pid, parentPid);

    this.path = path || UserPaths.Home;
    this.changeDirectory(this.path);
    this.daemon = KernelStack().getProcess(+this.env.get("userdaemon_pid"));

    this.term = term;
    this.tryGetTermWindow();
    this.name = "ArcTerminal";
  }

  async start() {
    if (!this.term) return this.killSelf();

    try {
      await this.fs.createDirectory(join(UserPaths.Configuration, "ArcTerm"));
    } catch {
      return false;
    }
    await this.migrateConfigurationPath();

    const rl = await KernelStack().spawn<Readline>(Readline, undefined, this.window?.userDaemon?.userInfo?._id, this.pid, this);
    await this.readConfig();

    this.term.loadAddon(rl!);
    this.rl = rl;
    this.var = new ArcTermVariables(this);

    if (!this.config.noLogo) {
      rl?.println(ASCII_ART.join("\n") + "\n");
    }
    if (this.config.greeting) {
      this.rl?.println(this.var.replace(`${this.config.greeting}`));
    }
    this.term.focus();
    this.readline();
  }

  //#endregion

  async readline() {
    if (this._disposed) return;

    this.window?.windowTitle.set(`ArcTerm - ${this.path}`);

    const line = await this.rl?.read(this.var?.replace(this.config.prompt || "$")!);

    await this.processLine(line);
  }

  async processLine(text: string | undefined) {
    if (this._disposed) return;

    this.lastCommandErrored = false;

    if (!text) return this.readline();

    const str = this.var?.replace(text.trim()) || "";
    const [flags, args] = this.parseFlags(str);
    const argv = args.split(" ");
    const cmd = text.split(" ")[0];
    this.window?.windowTitle.set(`ArcTerm - ${cmd} ${this.path}`);

    argv.shift();

    if (cmd.endsWith(":")) {
      await this.changeDirectory(`${cmd}/`);
    } else {
      const command = TerminalCommandStore.filter((a) => a.keyword === cmd)[0];

      if (!command) {
        this.Error("Command not found.");
        this.lastCommandErrored = true;
      } else {
        const proc = await KernelStack().spawn<TerminalProcess>(
          command,
          undefined,
          this.window?.userDaemon?.userInfo?._id,
          this.pid
        );

        // BUG 68798d6957684017c3e9a085
        if (!proc) {
          this.lastCommandErrored = true;
          return;
        }

        const result = (await proc?._main(this, flags, argv)) || 0;

        if (result !== 0) this.lastCommandErrored = true;
        if (result <= -128) return this.rl?.dispose();
      }
    }

    this.readline();
  }

  join(path?: string) {
    if (this._disposed) return "";

    if (!path) return this.path;
    if (path.includes(":/")) return path;

    return join(this.path, path || "");
  }

  async readDir(path?: string) {
    this.Log(`FS: list: ${path}`);

    if (this._disposed) return;

    return await this.fs.readDir(this.join(path));
  }

  async createDirectory(path: string) {
    this.Log(`FS: mkdir: ${path}`);

    if (this._disposed) return;

    return await this.fs.createDirectory(this.join(path));
  }

  async writeFile(path: string, data: Blob) {
    this.Log(`FS: write: ${path}`);

    if (this._disposed) return;

    return await this.fs.writeFile(this.join(path), data);
  }

  async tree(path: string) {
    this.Log(`FS: tree: ${path}`);

    if (this._disposed) return;

    return await this.fs.tree(this.join(path));
  }

  async copyItem(source: string, destination: string) {
    this.Log(`FS: cp: ${source} -> ${destination}`);

    if (this._disposed) return;

    return await this.fs.copyItem(this.join(source), this.join(destination));
  }

  async moveItem(source: string, destination: string) {
    this.Log(`FS: mv: ${source} -> destination`);

    if (this._disposed) return;

    return await this.fs.moveItem(this.join(source), this.join(destination));
  }

  async readFile(path: string) {
    this.Log(`FS: read: ${path}`);

    if (this._disposed) return;

    return await this.fs.readFile(this.join(path));
  }

  async deleteItem(path: string) {
    this.Log(`FS: rm: ${path}`);

    if (this._disposed) return;

    return await this.fs.deleteItem(this.join(path));
  }

  async Error(message: string, prefix = "Error") {
    if (this._disposed) return;

    this.rl?.println(`${BRRED}${prefix}${RESET}: ${message}`);
  }

  async Warning(message: string, prefix = "Warning") {
    if (this._disposed) return;

    this.rl?.println(`${BRYELLOW}${prefix}${RESET}: ${message}`);
  }

  async Info(message: string, prefix = "Info") {
    if (this._disposed) return;

    this.rl?.println(`${BRBLUE}${prefix}${RESET}: ${message}`);
  }

  async changeDirectory(path: string) {
    this.Log(`FS: chdir: CWD to ${path}`);

    if (this._disposed) return;

    try {
      const drive = this.fs.getDriveByPath(path);

      if (!drive) return false;

      this.drive = drive;
    } catch {
      return false;
    }

    try {
      const contents = await this.fs.readDir(path);

      if (!contents) throw "";

      this.contents = contents;
    } catch {
      return false;
    }

    this.path = path;
    this.window?.windowTitle.set(`ArcTerm - ${path}`);

    return true;
  }

  parseFlags(args: string): [Arguments, string] {
    if (this._disposed) return [{}, ""];

    const regex = /(?: --(?<nl>[a-z\-]+)(?:="(?<vl>.*?)"|(?:=(?<vs>.*?)(?: |$))|)| -(?<ns>[a-zA-Z]))/gm; //--name=?value
    const matches: RegExpMatchArray[] = [];

    let match: RegExpExecArray | null;

    while ((match = regex.exec(args))) {
      matches.push(match);
    }

    const result: Arguments = {};
    const arglist = matches.map((match) => {
      const name = match.groups?.nl || match.groups?.ns;
      const value = match.groups?.vl || match.groups?.vs || true; // make it true if the flag has no value at all

      return { name, value };
    });

    for (const arg of arglist) {
      if (arg.name) result[arg.name] = arg.value;
    }

    return [result, args.replace(regex, "").split(" ").filter(Boolean).join(" ")];
  }

  async stop(): Promise<any> {
    const parent = KernelStack().getProcess(this.parentPid);

    if (parent instanceof TerminalWindow) {
      KernelStack().kill(this.parentPid);
    }
  }

  async elevate(data: ElevationData) {
    this.Log("Starting ArcTerm elevation");

    if (this._disposed) return false;
    const color = data.level == ElevationLevel.low ? BRGREEN : data.level === ElevationLevel.medium ? BRYELLOW : BRRED;
    const pref = this.daemon?.preferences();

    if (!pref) return false;

    const { lockdown, noPassword, disabled } = pref.security;
    const continueCaption = lockdown
      ? `allow elevation in Settings.`
      : noPassword
        ? `type "yes", and hit ${BRBLUE}Enter${RESET}.`
        : `type in your password, and hit ${BRBLUE}Enter${RESET}.`;

    if (disabled) return true;

    this.rl?.println("");
    this.rl?.println(`🔒  ${BOLD}${color}${data.what}${RESET}`);
    this.rl?.println("");
    this.rl?.println(`  ${data.title}`);
    this.rl?.println(`  ${BRBLACK}${data.description}${RESET}`);
    this.rl?.println("");

    if (lockdown) {
      this.rl?.println("⛔  You can't continue because elevation is prohibited.");
      this.rl?.println("");

      return false;
    }

    this.rl?.println(`➡️  To continue, ${continueCaption}`);
    this.rl?.println("");

    const password = await this.rl?.read(
      noPassword
        ? `Type ${BRBLUE}yes${RESET} to continue: `
        : `🔑  Enter the password for ${BRBLUE}${this.daemon?.username}${RESET}:`,
      !noPassword
    );
    this.rl?.println("");

    if (noPassword) {
      return password === "yes";
    }

    if (lockdown || !password) return false;

    const token = await LoginUser(this.daemon?.username!, password!);

    if (!token) {
      this.Error("Incorrect password");
      this.rl?.println("");

      return false;
    }

    await this.daemon?.discontinueToken(token);

    return true;
  }

  async readConfig() {
    this.Log("Reading configuration file");

    if (this._disposed) return;
    try {
      const contents = await this.fs.readFile(this.CONFIG_PATH);

      if (!contents) throw "";

      const json = JSON.parse(arrayToText(contents));

      this.config = json as ArcTermConfiguration;
    } catch {
      await this.writeConfig();
    }
  }

  async writeConfig() {
    this.Log("Writing configuration file");

    if (this._disposed) return;

    try {
      await this.fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(this.config, null, 2)));
    } catch {
      return;
    }
  }

  async reload() {
    this.Log("Soft-reloading ArcTerm");

    await this.rl?.dispose();
    await this.killSelf();
    await KernelStack().spawn(
      ArcTerminal,
      undefined,
      this.window?.userDaemon?.userInfo?._id,
      this.parentPid,
      this.term,
      this.path
    );
  }

  tryGetTermWindow() {
    this.Log("Trying to get TermWindProc");

    const parent = KernelStack().getProcess(this.parentPid);

    if (parent instanceof TerminalWindowRuntime) this.window = parent;
  }

  async migrateConfigurationPath() {
    try {
      const oldPath = "U:/arcterm.conf";
      const newFile = await this.fs.readFile(this.CONFIG_PATH);
      const oldFile = newFile ? undefined : await this.fs.readFile(oldPath);

      if (oldFile && !newFile) {
        this.Log("Migrating old config path to " + this.CONFIG_PATH);
        await this.fs.moveItem(oldPath, this.CONFIG_PATH);
      }
    } catch {}
  }
}
