import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { UpdateInfo } from "$types/package";

export class MultiUpdateGuiRuntime extends AppProcess {
  private updates: UpdateInfo[];

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, updates: UpdateInfo[]) {
    super(handler, pid, parentPid, app);

    this.updates = Array.isArray(updates) ? updates : [];
  }

  async start() {
    if (!this.updates.length) return false;
  }
}
