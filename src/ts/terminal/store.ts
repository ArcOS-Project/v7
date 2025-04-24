import type { ArcTermConfiguration } from "$types/terminal";
import { AdminCommand } from "./commands/admin";
import { AppListCommand } from "./commands/applist";
import { ArcFetchCommand } from "./commands/arcfetch";
import { AtConfCommand } from "./commands/atconf";
import { CdCommand } from "./commands/cd";
import { ClearCommand } from "./commands/clear";
import { ConfigCommand } from "./commands/config";
import { CrTpaCommand } from "./commands/crtpa";
import { DirCommand } from "./commands/dir";
import { DispatchCommand } from "./commands/dispatch";
import { DrivesCommand } from "./commands/drives";
import { EchoCommand } from "./commands/echo";
import { ExitCommand } from "./commands/exit";
import { ExploreCommand } from "./commands/explore";
import { FindCommand } from "./commands/find";
import { HelpCommand } from "./commands/help";
import { HistoryCommand } from "./commands/history";
import { KillCommand } from "./commands/kill";
import { LogoutCommand } from "./commands/logout";
import { MkdirCommand } from "./commands/mkdir";
import { OpenCommand } from "./commands/open";
import { QuotaCommand } from "./commands/quota";
import { ReloadCommand } from "./commands/reload";
import { RestartCommand } from "./commands/restart";
import { RmCommand } from "./commands/rm";
import { ShutdownCommand } from "./commands/shutdown";
import { SpawnCommand } from "./commands/spawn";
import { TasksCommand } from "./commands/tasks";
import { TestCommand } from "./commands/test";
import { TreeCommand } from "./commands/tree";
import { VerCommand } from "./commands/ver";
import type { TerminalProcess } from "./process";

export const TerminalCommandStore: (typeof TerminalProcess)[] = [
  AppListCommand,
  DirCommand,
  CdCommand,
  ClearCommand,
  OpenCommand,
  ArcFetchCommand,
  MkdirCommand,
  VerCommand,
  RmCommand,
  ExitCommand,
  DispatchCommand,
  EchoCommand,
  HelpCommand,
  ExploreCommand,
  TestCommand,
  FindCommand,
  LogoutCommand,
  ShutdownCommand,
  RestartCommand,
  QuotaCommand,
  CrTpaCommand,
  TreeCommand,
  KillCommand,
  ReloadCommand,
  HistoryCommand,
  AtConfCommand,
  ConfigCommand,
  SpawnCommand,
  TasksCommand,
  AdminCommand,
  // DrivesCommand,
];

export const ESC = `\x1b[`;
export const BLACK = `${ESC}30m`;
export const RED = `${ESC}31m`;
export const GREEN = `${ESC}32m`;
export const YELLOW = `${ESC}33m`;
export const BLUE = `${ESC}34m`;
export const PURPLE = `${ESC}35m`;
export const CYAN = `${ESC}36m`;
export const WHITE = `${ESC}37m`;
export const BRBLACK = `${ESC}90m`;
export const BRRED = `${ESC}91m`;
export const BRGREEN = `${ESC}92m`;
export const BRYELLOW = `${ESC}93m`;
export const BRBLUE = `${ESC}94m`;
export const BRPURPLE = `${ESC}95m`;
export const BRCYAN = `${ESC}96m`;
export const BRWHITE = `${ESC}97m`;
export const RESET = `${ESC}0m`;
export const BOLD = `${ESC}1m`;
export const DIM = `${ESC}2m`;
export const UNDERLINE = `${ESC}4m`;
export const INVERTED = `${ESC}7m`;
export const HIDDEN = `${ESC}8m`;

export const DefaultArcTermConfiguration: ArcTermConfiguration = {
  prompt: `$BRGREEN$username$RESET: $BRGREEN$pwd $RESULTCOLOR$ $RESET`,
  greeting: "ArcTerm & ArcOS v$version\r\n\r\nLicensed under GPLv3. Created by Izaak Kuipers.",
};
