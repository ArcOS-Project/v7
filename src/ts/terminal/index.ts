import TerminalWindow from "$apps/components/terminalwindow/TerminalWindow.svelte";
import type { FilesystemDrive } from "$ts/fs/drive";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { UserDaemon } from "$ts/server/user/daemon";
import type { DirectoryReadReturn } from "$types/fs";
import type { Arguments } from "$types/terminal";
import ansiEscapes from "ansi-escapes";
import type { Terminal } from "xterm";
import { Readline } from "xterm-readline";
import { BRBLUE, BRGREEN, BRRED, BRYELLOW, RESET, TerminalCommandStore } from "./store";
import { ArcTermVariables } from "./var";

export class ArcTerminal extends Process {
  path: string;
  drive: FilesystemDrive | undefined;
  term: Terminal;
  rl: Readline | undefined;
  var: ArcTermVariables | undefined;
  contents: DirectoryReadReturn | undefined;
  daemon: UserDaemon | undefined;
  ansiEscapes = ansiEscapes;
  lastCommandErrored = false;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, term: Terminal, path?: string) {
    super(handler, pid, parentPid);

    this.path = path || "U:/";
    this.changeDirectory(path || "U:/");
    this.daemon = handler.getProcess(+this.env.get("userdaemon_pid"));
    this.term = term;
  }

  async start() {
    const rl = new Readline();

    this.term.loadAddon(rl);
    this.rl = rl;
    this.var = new ArcTermVariables(this);
    this.readline();
  }

  async readline() {
    const username = this.env.get("currentuser") || "Stranger";
    const color = this.lastCommandErrored ? BRRED : RESET;
    const line = await this.rl?.read(`${BRGREEN}${username}${RESET}: ${BRGREEN}${this.path} ${color}$${RESET} `);

    await this.processLine(line);
  }

  async processLine(text: string | undefined) {
    this.lastCommandErrored = false;

    if (!text) return this.readline();

    const str = this.var?.replace(text.trim()) || "";
    const flags = this.parseFlags(str);
    const argv = str.split(" ");
    const cmd = argv[0];

    argv.shift();

    if (cmd.endsWith(":")) {
      await this.changeDirectory(`${cmd}/`);
    } else {
      const command = TerminalCommandStore.filter((a) => a.keyword === cmd)[0];

      if (!command) {
        this.Error("Command not found.");
      } else {
        const result = await command.exec(this, flags, argv);

        if (result !== 0) this.lastCommandErrored = true;
      }
    }

    this.readline();
  }

  join(path?: string) {
    if (!path) return this.path;
    if (path.includes(":/")) return path;

    return join(this.path, path || "");
  }

  async readDir(path?: string) {
    return await this.fs.readDir(this.join(path));
  }

  async createDirectory(path: string) {
    return await this.fs.createDirectory(this.join(path));
  }

  async writeFile(path: string, data: Blob) {
    return await this.fs.writeFile(this.join(path), data);
  }

  async tree(path: string) {
    return await this.fs.tree(this.join(path));
  }

  async copyItem(source: string, destination: string) {
    return await this.fs.copyItem(this.join(source), this.join(destination));
  }

  async moveItem(source: string, destination: string) {
    return await this.fs.moveItem(this.join(source), this.join(destination));
  }

  async readFile(path: string) {
    return await this.fs.readFile(this.join(path));
  }

  async deleteItem(path: string) {
    return await this.fs.deleteItem(this.join(path));
  }

  async Error(message: string, prefix = "Error") {
    this.rl?.println(`${BRRED}${prefix}${RESET}: ${message}`);
  }

  async Warning(message: string, prefix = "Warning") {
    this.rl?.println(`${BRYELLOW}${prefix}${RESET}: ${message}`);
  }

  async Info(message: string, prefix = "Info") {
    this.rl?.println(`${BRBLUE}${prefix}${RESET}: ${message}`);
  }

  async changeDirectory(path: string) {
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

    return true;
  }

  parseFlags(args: string): Arguments {
    const regex = /(?:--(?<nl>[a-z\-]+)(?:="(?<vl>.*?)"|(?:=(?<vs>.*?)(?: |$))|)|-(?<ns>[a-zA-Z]))/gm; //--name=?value
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

    return result;
  }

  async stop(): Promise<any> {
    const parent = this.handler.getProcess(this.parentPid);

    if (parent instanceof TerminalWindow) {
      this.handler.kill(this.parentPid);
    }
  }
}
