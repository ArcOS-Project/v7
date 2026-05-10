import type { IShareMgmtGuiRuntime, IShareMgmtOverlayRuntime } from "$interfaces/runtimes/IShareMgmtGuiRuntime";
import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { AppProcessData } from "$types/app";

export class ShareMgmtOverlayRuntime extends AppProcess implements IShareMgmtOverlayRuntime {
  parentProcess: IShareMgmtGuiRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parentProcess = Stack.getProcess(this.parentPid)!; // Get the parent process

    this.setSource(__SOURCE__);
  }

  //#endregion
}
