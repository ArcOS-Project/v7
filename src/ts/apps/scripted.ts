import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { AppProcess } from "./process";

export class ScriptedAppProcess extends AppProcess {
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    ...args: any[]
  ) {
    super(handler, pid, parentPid, app, ...args);
  }

  override async __render__() {
    await this.render();
  }
}
