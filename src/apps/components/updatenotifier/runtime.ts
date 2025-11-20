import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";

export class UpdateNotifierRuntime extends AppProcess {
  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    if (this.userDaemon?.autoLoadComplete) return false;
  }

  async onClose() {
    const { stop } = await this.userDaemon!.helpers!.GlobalLoadIndicator("Just a moment...", this.pid);

    await this.userDaemon?.version?.updateRegisteredVersion();
    await this.updateFileDefinitions();

    stop();

    await this.shell?.UpdateStartMenu();
    return true;
  }

  //#endregion

  async updateFileDefinitions() {
    this.userDaemon?.migrations?.updateFileAssociations();
  }
}
