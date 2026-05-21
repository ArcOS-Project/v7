import type { IAppProcess } from "$interfaces/IAppProcess";
import type { App } from "$types/app";
import type { ParsedStackFrame } from "$types/error";

export interface IOopsNotifierRuntime extends IAppProcess {
  data: App;
  exception: Error | PromiseRejectionEvent;
  process?: IAppProcess;
  installed: boolean;
  parseFailed: boolean;
  stackFrames: ParsedStackFrame[];

  details(): Promise<void>;
  reopen(): Promise<void>;
}
