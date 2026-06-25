import type { IArcTerminal } from "$interfaces/IArcTerminal";
import type { MaybePromise } from "$types/shared/common";
import { ArcBasicEngine } from "../../ts/basic/engine";
import { BasicCommand } from "../../ts/basic/engine/command";

export namespace BasicLang {
  export type Fn = (val: string, interpreter: ArcBasicEngine) => MaybePromise<any>;

  export type StdinCallback = () => Promise<string> | string;
  export type StdoutCallback = (msg: string) => void;
  export type VariableCallback = () => Promise<any> | any;
  export type TerminalBuiltinFn = (term: IArcTerminal) => Fn;

  export interface BasicStackFrame {
    line: number;
    name: string;
    type: BasicStackFrameType;
  }

  export type BasicStackFrameType = "sub" | "while" | "if" | "engine";

  export interface Config {
    version: string;
    functions?: Record<string, Fn>;
    builtinVariables?: Record<string, VariableCallback>;
    commands?: (typeof BasicCommand)[];
    slowdown?: number;
    stdin: StdinCallback;
    stdout: StdoutCallback;
    stderr: StdoutCallback;
    readScriptFile?: (path: string) => Promise<string | undefined>;
    debug?: boolean;
  }

  export interface SubRoutine {
    start: number;
    end: number;
  }
}
