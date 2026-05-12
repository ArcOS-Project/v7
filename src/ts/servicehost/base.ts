import type { IBaseService, IServiceHost } from "$interfaces/IServiceHost";
import type { IServerConnector } from "$interfaces/modules/IServerManager";
import { Daemon } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";

export class BaseService extends Process implements IBaseService {
  host: IServiceHost;
  activated: boolean = false;
  initBroadcast?: (msg: string) => void;

  GetConnector<T extends IServerConnector>(name: string): T {
    return Daemon.GetConnector<T>(name);
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
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
