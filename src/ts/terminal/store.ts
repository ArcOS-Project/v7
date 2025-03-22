import type { TerminalCommand } from "$types/terminal";
import { AppListCommand } from "./commands/applist";
import { ArcFetchCommand } from "./commands/arcfetch";
import { CdCommand } from "./commands/cd";
import { ClearCommand } from "./commands/clear";
import { CrTpaCommand } from "./commands/crtpa";
import { DirCommand } from "./commands/dir";
import { DispatchCommand } from "./commands/dispatch";
import { EchoCommand } from "./commands/echo";
import { ExitCommand } from "./commands/exit";
import { ExploreCommand } from "./commands/explore";
import { FindCommand } from "./commands/find";
import { HelpCommand } from "./commands/help";
import { LogoutCommand } from "./commands/logout";
import { MkdirCommand } from "./commands/mkdir";
import { OpenCommand } from "./commands/open";
import { QuotaCommand } from "./commands/quota";
import { RestartCommand } from "./commands/restart";
import { RmCommand } from "./commands/rm";
import { ShutdownCommand } from "./commands/shutdown";
import { TestCommand } from "./commands/test";
import { TreeCommand } from "./commands/tree";
import { VerCommand } from "./commands/ver";

export const TerminalCommandStore: TerminalCommand[] = [
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
