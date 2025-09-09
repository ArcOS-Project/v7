import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { ShareMgmtGuiRuntime } from "./runtime";

export class OverlayRuntime extends AppProcess {
  parentProcess: ShareMgmtGuiRuntime;

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.parentProcess = this.handler.getProcess(this.parentPid)!; // Get the parent process
  }

  //#endregion
}
