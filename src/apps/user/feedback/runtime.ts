import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";

export class FeedbackProcess extends Process {
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid);
  }

  async start() {
    Daemon.helpers?.iHaveFeedback(Daemon.getShell()!);
  }
}
