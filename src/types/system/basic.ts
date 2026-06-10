import { BasicCommand } from "../../ts/basic/engine/command";
import { ArcBasicEngine } from "../../ts/basic/engine";

export namespace BasicLang {
  export type Fn = (
    val: string,
    interpreter: ArcBasicEngine,
  ) => Promise<string> | string;

  export type StdinCallback = () => Promise<string> | string;
  export type StdoutCallback = (msg: string) => void;
  export type VariableCallback = () => Promise<any> | any;

  export interface Config {
    version: string;
    functions?: Record<string, Fn>;
    builtinVariables?: Record<string, VariableCallback>;
    commands?: (typeof BasicCommand)[];
    stdin: StdinCallback;
    stdout: StdoutCallback;
    readScriptFile?: (path: string) => Promise<string | undefined>;
  }

  export interface SubRoutine {
    start: number;
    end: number;
  }
}
