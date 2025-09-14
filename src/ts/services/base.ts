import { Process } from "$ts/process/instance";
import type { ServiceHost } from ".";

export class BaseService extends Process {
  host: ServiceHost;
  activated: boolean = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid);

    this.name = `svc#${name}`;
    this.host = host;

    this.setSource(__SOURCE__);
  }

  //#endregion
}
