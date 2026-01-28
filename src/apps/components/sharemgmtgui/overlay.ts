import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { AppProcessData } from "$types/app";
import type { ShareMgmtGuiRuntime } from "./runtime";

export class OverlayRuntime extends AppProcess {
  parentProcess: ShareMgmtGuiRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parentProcess = Stack.getProcess(this.parentPid)!; // Get the parent process

    this.setSource(__SOURCE__);
  }

  //#endregion
}
