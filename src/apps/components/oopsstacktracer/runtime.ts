import { AppProcess } from "$ts/apps/process";
import type { App, AppProcessData } from "$types/app";
import type { ParsedStackFrame } from "../oopsnotifier/types";

export class OopsStackTracerRuntime extends AppProcess {
  data: App;
  proc?: AppProcess;
  exception: Error | PromiseRejectionEvent;
  stackFrames: ParsedStackFrame[];
  trace: string = "";
  string: string;

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    data: App,
    exception: Error | PromiseRejectionEvent,
    process: AppProcess | undefined,
    stackFrames: ParsedStackFrame[]
  ) {
    super(pid, parentPid, app);

    this.data = data;
    this.exception = exception;
    this.proc = process;
    this.stackFrames = stackFrames;
    this.trace =
      this.exception instanceof PromiseRejectionEvent ? this.exception.reason.stack : this.exception?.stack || "No stack";
    this.string = this.exception ? `${this.exception}` : "";

    this.setSource(__SOURCE__);
  }

  //#endregion
}
