import { Process } from "$ts/kernel/mods/stack/process/instance";
import { Daemon } from "$ts/daemon";
import type { AppProcessData } from "$types/app";

export class FeedbackProcess extends Process {
  //#region LIFECYCLE
    
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  async start() {
    Daemon.helpers?.iHaveFeedback(Daemon.getShell()!);
  }

  //#endregion
}
