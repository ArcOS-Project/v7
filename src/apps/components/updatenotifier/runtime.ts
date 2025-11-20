import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";

export class UpdateNotifierRuntime extends AppProcess {
  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    if (Daemon()?.autoLoadComplete) return false;
  }

  async onClose() {
    const { stop } = await Daemon()!.helpers!.GlobalLoadIndicator("Just a moment...", this.pid);

    await Daemon()?.version?.updateRegisteredVersion();
    await this.updateFileDefinitions();

    stop();

    await this.shell?.UpdateStartMenu();
    return true;
  }

  //#endregion

  async updateFileDefinitions() {
    Daemon()?.migrations?.updateFileAssociations();
  }
}
