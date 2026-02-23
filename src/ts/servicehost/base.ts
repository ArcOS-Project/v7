import type { IBaseService } from "$interfaces/service";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import type { ServiceHost } from ".";

export class BaseService extends Process implements IBaseService {
  host: ServiceHost;
  activated: boolean = false;
  initBroadcast?: (msg: string) => void;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid);

    this.name = `svc#${name}`;
    this.host = host;
    this.initBroadcast = initBroadcast;
  }

  async deactivate(broadcast?: (m: string) => void) {
    //
  }

  //#endregion
}
