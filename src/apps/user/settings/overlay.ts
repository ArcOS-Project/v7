import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { AppProcessData } from "$types/app";
import type { SettingsRuntime } from "./runtime";

export class OverlayRuntime extends AppProcess {
  parentProcess: SettingsRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parentProcess = Stack.getProcess(this.parentPid)!;

    this.setSource(__SOURCE__);
  }

  //#endregion
}
