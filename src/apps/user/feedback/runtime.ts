import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
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
