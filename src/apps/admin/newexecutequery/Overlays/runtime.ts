import type { INewExecuteQueryOverlayRuntime, INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";

export class NewExecuteQueryOverlayRuntime extends AppProcess implements INewExecuteQueryOverlayRuntime {
  parent: INewExecuteQueryRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, parent: INewExecuteQueryRuntime) {
    super(pid, parentPid, app);

    this.parent = parent;
    this.setSource(__SOURCE__);
  }

  //#endregion
}
