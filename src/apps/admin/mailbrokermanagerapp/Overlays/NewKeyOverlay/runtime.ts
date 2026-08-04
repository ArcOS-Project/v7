import type { IMailbrokerRuntime, IMailbrokerNewKeyOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Stack } from "$ts/env";
import type { AppProcessData } from "$types/apps/app";

export class MailbrokerNewKeyOverlayRuntime extends AppProcess implements IMailbrokerNewKeyOverlayRuntime {
  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  get parent() {
    return Stack.getProcess<IMailbrokerRuntime>(this.parentPid)!;
  }

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
  }
}
