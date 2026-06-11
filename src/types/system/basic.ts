import { BasicCommand } from "../../ts/basic/engine/command";
import { ArcBasicEngine } from "../../ts/basic/engine";
import type { MaybePromise } from "$types/shared/common";

export namespace BasicLang {
  export type Fn = (val: string, interpreter: ArcBasicEngine) => MaybePromise<any>;

  export type StdinCallback = () => Promise<string> | string;
  export type StdoutCallback = (msg: string) => void;
  export type VariableCallback = () => Promise<any> | any;

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
  }

  export interface SubRoutine {
    start: number;
    end: number;
  }
}
