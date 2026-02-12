import type { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import type { Readline } from "$ts/terminal/readline/readline";
import type { ArcTermVariables } from "$ts/terminal/var";
import type { ElevationData } from "$types/elevation";
import type { DirectoryReadReturn, IFilesystemDrive, RecursiveDirectoryReadReturn } from "$types/fs";
import type { ArcTermConfiguration, Arguments } from "$types/terminal";
import type ansiEscapes from "ansi-escapes";
import type { Terminal } from "xterm";
import type { IUserDaemon } from "./daemon";
import type { IProcess } from "./process";
import type { IAppProcess } from "./app";

export interface IArcTerminal extends IProcess {
  readonly CONFIG_PATH: string;
  IS_ARCTERM_MODE: boolean;
  lastLine?: string;
  path: string;
  drive: IFilesystemDrive | undefined;
  term: Terminal;
  rl: Readline | undefined;
  var: ArcTermVariables | undefined;
  contents: DirectoryReadReturn | undefined;
  daemon: IUserDaemon | undefined;
  ansiEscapes: typeof ansiEscapes;
  lastCommandErrored: boolean;
  config: ArcTermConfiguration;
  configProvidedExternal: boolean;
  window: TerminalWindowRuntime | undefined;
  start(): Promise<false | void>;
  readline(): Promise<void>;
  processLine(text: string | undefined): Promise<void>;
  join(path?: string): string;
  readDir(path?: string): Promise<DirectoryReadReturn | undefined>;
  createDirectory(path: string): Promise<boolean | undefined>;
  writeFile(path: string, data: Blob): Promise<boolean | undefined>;
  tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined>;
  copyItem(source: string, destination: string): Promise<boolean | undefined>;
  moveItem(source: string, destination: string): Promise<boolean | undefined>;
  readFile(path: string): Promise<ArrayBuffer | undefined>;
  deleteItem(path: string): Promise<boolean | undefined>;
  Error(message: string, prefix?: string): Promise<void>;
  Warning(message: string, prefix?: string): Promise<void>;
  Info(message: string, prefix?: string): Promise<void>;
  changeDirectory(path: string): Promise<boolean | undefined>;
  parseFlags(args: string): [Arguments, string];
  stop(): Promise<any>;
  elevate(data: ElevationData): Promise<boolean>;
  readConfig(): Promise<void>;
  writeConfig(): Promise<void>;
  reload(): Promise<void>;
  tryGetTermWindow(): void;
  migrateConfigurationPath(): Promise<void>;
  handleCommandError(e: Error, command: Function): void;
}

export interface ITerminalWindowRuntime extends IAppProcess {
  term: Terminal | undefined;
  overridePopulatable: boolean;
  start(): Promise<void>;
  render(): Promise<void>;
}
