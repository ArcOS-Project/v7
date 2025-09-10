import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { SettingsRuntime } from "./runtime";

export class OverlayRuntime extends AppProcess {
  parentProcess: SettingsRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parentProcess = KernelStack().getProcess(this.parentPid)!;
  }

  //#endregion
}
