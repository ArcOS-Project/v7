import type { IBugHuntUserDataRuntime } from "$interfaces/runtimes/IBugHuntUserDataRuntime";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";
import type { UserInfo } from "$types/user";

// TODO: generalize the two dodgy UserData viewers into one good quality application
export class BugHuntUserDataRuntime extends AppProcess implements IBugHuntUserDataRuntime {
  data: UserInfo;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, data: UserInfo) {
    super(pid, parentPid, app);

    this.data = data;
    this.setSource(__SOURCE__);
  }

  //#endregion
}
