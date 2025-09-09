import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";

export class UpdateNotifierRuntime extends AppProcess {
  //#region LIFECYCLE
  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async start() {
    if (this.userDaemon?.autoLoadComplete) return false;
  }

  async onClose() {
    const { stop } = await this.userDaemon!.GlobalLoadIndicator("Just a moment...", this.pid);

    await this.userDaemon?.updateRegisteredVersion();
    await this.updateFileDefinitions();
    stop();

    return true;
  }

  //#endregion

  async updateFileDefinitions() {
    this.userDaemon?.updateFileAssociations();
  }
}
