import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { SettingsRuntime } from "./runtime";

export class OverlayRuntime extends AppProcess {
  parentProcess: SettingsRuntime;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.parentProcess = this.handler.getProcess(this.parentPid)!;
  }
}
