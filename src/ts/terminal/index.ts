import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import TerminalWindow from "$apps/components/terminalwindow/TerminalWindow.svelte";
import { hexToRgb } from "$ts/color";
import type { FilesystemDrive } from "$ts/drives/drive";
import { Env, Fs, Stack, State } from "$ts/env";
import { ASCII_ART } from "$ts/intro";
import { Process } from "$ts/process/instance";
import { LoginUser } from "$ts/server/user/auth";
import { Daemon, TryGetDaemon, type UserDaemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { noop, sha256 } from "$ts/util";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { ErrorUtils } from "$ts/util/error";
import { join } from "$ts/util/fs";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import type { DirectoryReadReturn } from "$types/fs";
import type { ArcTermConfiguration, Arguments } from "$types/terminal";
import ansiEscapes from "ansi-escapes";
import { Terminal } from "xterm";
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
  DefaultColors,
  RESET,
  TerminalCommandStore,
} from "./store";
import { ArcTermVariables } from "./var";
import { Sleep } from "$ts/sleep";

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
  configProvidedExternal = false;
  window: TerminalWindowRuntime | undefined;
  IS_ARCTERM_MODE = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, term: Terminal, path?: string, config?: ArcTermConfiguration) {
    super(pid, parentPid);

    this.path = path || UserPaths.Home;
    this.changeDirectory(this.path);
    this.daemon = TryGetDaemon();

    this.term = term;
    this.tryGetTermWindow();
    this.name = "ArcTerminal";
    if (config) {
      this.config = config;
      this.configProvidedExternal = true;
    }

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.term) return this.killSelf();

    try {
      await Fs.createDirectory(join(UserPaths.Configuration, "ArcTerm"));
    } catch {
      return false;
    }

    await this.readConfig();
    const rl = await Stack.spawn<Readline>(Readline, undefined, Daemon?.userInfo?._id, this.pid, this);

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

    if ((await sha256(text)).startsWith("a9e0b55d02b87876")) {
      const url = location.href + "debug.js";
      const mod = await import(/* @vite-ignore */ url);
      const fn: ({ term, rl, Sleep }: { term: Terminal; rl: Readline; Sleep: () => Promise<unknown> }) => Promise<void> =
        mod.default;

      await fn({ term: this.term, rl: this.rl!, Sleep });
      this.readline();

      return;
    }

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
        try {
          const proc = await Stack.spawn<TerminalProcess>(command, undefined, Daemon?.userInfo?._id, this.pid);

          // BUG 68798d6957684017c3e9a085
          if (!proc) {
            this.lastCommandErrored = true;
            return;
          }

          this.rl?.setCtrlCHandler(async () => {
            this.rl?.println("^C");
            if (command.allowInterrupt) await proc?.killSelf();
          });

          const result = (await proc?._main(this, flags, argv)) || 0;

          if (result !== 0) this.lastCommandErrored = true;
          if (result <= -128) return this.rl?.dispose();

          this.rl?.setCtrlCHandler(noop);
        } catch (e) {
          this.lastCommandErrored = true;
          this.handleCommandError(e as Error, command);
        }
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

    return await Fs.readDir(this.join(path));
  }

  async createDirectory(path: string) {
    this.Log(`FS: mkdir: ${path}`);

    if (this._disposed) return;

    return await Fs.createDirectory(this.join(path));
  }

  async writeFile(path: string, data: Blob) {
    this.Log(`FS: write: ${path}`);

    if (this._disposed) return;

    return await Fs.writeFile(this.join(path), data);
  }

  async tree(path: string) {
    this.Log(`FS: tree: ${path}`);

    if (this._disposed) return;

    return await Fs.tree(this.join(path));
  }

  async copyItem(source: string, destination: string) {
    this.Log(`FS: cp: ${source} -> ${destination}`);

    if (this._disposed) return;

    return await Fs.copyItem(this.join(source), this.join(destination));
  }

  async moveItem(source: string, destination: string) {
    this.Log(`FS: mv: ${source} -> destination`);

    if (this._disposed) return;

    return await Fs.moveItem(this.join(source), this.join(destination));
  }

  async readFile(path: string) {
    this.Log(`FS: read: ${path}`);

    if (this._disposed) return;

    return await Fs.readFile(this.join(path));
  }

  async deleteItem(path: string) {
    this.Log(`FS: rm: ${path}`);

    if (this._disposed) return;

    return await Fs.deleteItem(this.join(path));
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
      const drive = Fs.getDriveByPath(path);

      if (!drive) return false;

      this.drive = drive;
    } catch {
      return false;
    }

    try {
      const contents = await Fs.readDir(path);

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
    const parent = Stack.getProcess(this.parentPid);

    if (parent instanceof TerminalWindow) {
      Stack.kill(this.parentPid);
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

    await this.daemon?.account?.discontinueToken(token);

    return true;
  }

  async readConfig() {
    this.Log("Reading configuration file");

    if (this._disposed) return;
    try {
      if (!this.configProvidedExternal) {
        const contents = await Fs.readFile(this.CONFIG_PATH);
        if (!contents) throw "";

        const json = JSON.parse(arrayBufferToText(contents)!);
        this.config = json as ArcTermConfiguration;
      } else {
        this.configProvidedExternal = false;
      }

      this.term!.options.theme = {
        // RED
        brightRed: this.config.red || DefaultColors.red,
        red: this.config.red || DefaultColors.red,
        // GREEN
        brightGreen: this.config.green || DefaultColors.green,
        green: this.config.green || DefaultColors.green,
        // YELLOW
        brightYellow: this.config.yellow || DefaultColors.yellow,
        yellow: this.config.yellow || DefaultColors.yellow,
        // BLUE
        brightBlue: this.config.blue || DefaultColors.blue,
        blue: this.config.blue || DefaultColors.blue,
        // CYAN
        brightCyan: this.config.cyan || DefaultColors.cyan,
        cyan: this.config.cyan || DefaultColors.cyan,
        // MAGENTA
        brightMagenta: this.config.magenta || DefaultColors.magenta,
        magenta: this.config.magenta || DefaultColors.magenta,
        // FORE/BACK GROUND
        background: this.config.background || DefaultColors.background,
        foreground: this.config.foreground || DefaultColors.foreground,
        brightBlack: this.config.brightBlack || DefaultColors.brightBlack,
      };

      if (State.currentState === "arcterm") {
        const wrapper = document.querySelector<HTMLDivElement>("#arcTermWrapper");
        const target = document.querySelector<HTMLDivElement>("#arcTermMode");

        target!.style.setProperty("--fg", this.config.foreground || DefaultColors.foreground);
        wrapper!.style.backgroundColor = this.config.background || DefaultColors.background;
      } else {
        const window = this.window?.getWindow();

        window?.style.setProperty(
          "--terminal-background",
          `rgba(${hexToRgb(this.config.background || DefaultColors.background).join(", ")}, ${this.config.backdropOpacity ?? DefaultColors.backdropOpacity})`
        );
        window?.style.setProperty("--terminal-background-inactive", this.config.background || DefaultColors.background);
        window?.style.setProperty("--fg", this.config.foreground || DefaultColors.foreground);
      }
    } catch {
      await this.writeConfig();
    }
  }

  async writeConfig() {
    this.Log("Writing configuration file");

    if (this._disposed) return;

    try {
      await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(this.config, null, 2)));
    } catch {
      return;
    }
  }

  /**
   * WARNING: this method ONLY works if there's no active readline prompt in progress. Running this method whilst
   * receiving input from the user will cause two readlines to happen on the same instance. DO NOT DO THAT.
   */
  async reload() {
    this.Log("Soft-reloading ArcTerm");

    await this.rl?.dispose();
    await this.killSelf();
    await Stack.spawn(ArcTerminal, undefined, Daemon?.userInfo?._id, this.parentPid, this.term, this.path);
  }

  tryGetTermWindow() {
    this.Log("Trying to get TermWindProc");

    const parent = Stack.getProcess(this.parentPid);

    if (parent instanceof TerminalWindowRuntime) {
      this.window = parent;

      this.window.altMenu.set([
        {
          caption: "Terminal",
          subItems: [
            {
              caption: "New window",
              action: () => {
                Daemon.spawn?.spawnApp("ArcTerm", this.window?.parentPid, this.path);
              },
              icon: "square-plus",
            },
            {
              caption: "Edit colors...",
              action: () => this.window?.spawnOverlayApp("ArcTermColors", +Env.get("shell_pid")),
              icon: "palette",
            },
            {
              caption: "Exit",
              action: () => this.window?.closeWindow(),
              icon: "power",
            },
          ],
        },
      ]);
    }
  }

  // MIGRATION: 7.0.3 -> 7.0.4
  /**
   * @deprecated This migration has expired
   */
  async migrateConfigurationPath() {
    noop();
  }

  handleCommandError(e: Error, command: typeof TerminalProcess) {
    this.rl?.println(ErrorUtils.abbreviatedStackTrace(e, `${BRRED}${command.name}: `));
    this.rl?.println(`${RESET}`);
  }
}
