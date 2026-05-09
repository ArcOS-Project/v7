import type { IAppProcess } from "$interfaces/IAppProcess";
import type { App } from "$types/app";
import type { ParsedStackFrame } from "$types/error";

export interface IOopsStackTracerRuntime extends IAppProcess {
  data: App;
  proc?: IAppProcess;
  exception: Error | PromiseRejectionEvent;
  stackFrames: ParsedStackFrame[];
  trace: string;
  string: string;
}
