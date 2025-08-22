import type { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import type { ArcTerminal } from "$ts/terminal";
import type { Terminal } from "xterm";

export interface TerminalCommand {
  keyword: string;
  description: string;
  hidden?: boolean;
  exec: (term: ArcTerminal, flags: Arguments, argv: string[]) => number | Promise<number>;
}
export type Arguments = Record<string, string | boolean>;
export interface Variable {
  get: () => string | undefined;
  set?: (v: string) => Promise<any> | any;
  value?: string;
  readOnly: boolean;
  canDelete: boolean;
}
export type VariableStore = { [key: string]: Variable };
export interface StaticVariable {
  value: string | undefined;
  readOnly: boolean;
}
export type StaticVariableStore = { [key: string]: StaticVariable };
export type Sections = { [key: string]: string[] };
export interface ArcTermConfiguration {
  prompt?: string;
  greeting?: string;
  noLogo?: boolean;
  gooseBumps?: boolean;
}
export type ExpandedTerminal = Terminal & { process?: TerminalWindowRuntime };
