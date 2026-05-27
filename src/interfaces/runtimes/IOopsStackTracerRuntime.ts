import type { IAppProcess } from "$interfaces/IAppProcess";
import type { App } from "$types/apps/app";
import type { ParsedStackFrame } from "$types/libraries/error";

// !tpa
export interface IOopsStackTracerRuntime extends IAppProcess {
  data: App;
  proc?: IAppProcess;
  exception: Error | PromiseRejectionEvent;
  stackFrames: ParsedStackFrame[];
  trace: string;
  string: string;
}
