import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Store } from "../writable";

export class AppProcess extends Process {
  crashReason = "";
  windowTitle = Store("");

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: any
  ) {
    super(handler, pid, parentPid);
  }
}
