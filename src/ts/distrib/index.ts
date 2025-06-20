import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { InstallerProcProgressNode } from "$types/distrib";
import { InstallerProcess } from "./installer";

export class DistributionServiceProcess extends BaseService {
  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async installPackage(path: string, prog: (node: InstallerProcProgressNode) => void) {
    const proc = await this.handler.spawn<InstallerProcess>(InstallerProcess, undefined, this.pid);

    prog({
      status: proc!.status,
      failReason: proc!.failReason,
      installing: proc!.installing,
      completed: proc!.completed,
      focused: proc!.focused,
      verboseLog: proc!.verboseLog,
    });

    proc?.go();
  }
}
