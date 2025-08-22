import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { ServiceHost } from ".";

export class BaseService extends Process {
  host: ServiceHost;
  activated: boolean = false;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid);

    this.name = `svc#${name}`;
    this.host = host;
  }
}
