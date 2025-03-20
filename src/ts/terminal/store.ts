import type { TerminalCommand } from "$types/terminal";
import { AppListCommand } from "./commands/applist";
import { ArcFetchCommand } from "./commands/arcfetch";
import { CdCommand } from "./commands/cd";
import { ClearCommand } from "./commands/clear";
import { DirCommand } from "./commands/dir";
import { OpenCommand } from "./commands/open";

export const TerminalCommandStore: TerminalCommand[] = [
  AppListCommand,
  DirCommand,
  CdCommand,
  ClearCommand,
  OpenCommand,
  ArcFetchCommand,
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
export const BRWRITE = `${ESC}97m`;
export const RESET = `${ESC}0m`;
