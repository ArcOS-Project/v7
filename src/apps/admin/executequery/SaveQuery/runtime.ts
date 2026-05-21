import type { IExecuteQueryRuntime, ISaveQueryOverlayRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class SaveQueryOverlayRuntime extends AppProcess implements ISaveQueryOverlayRuntime {
  parent: IExecuteQueryRuntime;
  queryName = Store<string>();
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, parent: IExecuteQueryRuntime) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.parent = parent;
  }

  //#endregion LIFECYCLE

  async Confirm() {
    const queryName = this.queryName();

    this.Log(`Confirm -> ${queryName}`);

    if (!queryName) return;

    await this.parent.saveQuery(queryName);
    await this.closeWindow();
  }
}
