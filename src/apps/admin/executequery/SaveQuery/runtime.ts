import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ExecuteQueryRuntime } from "../runtime";

export class SaveQueryOverlayRuntime extends AppProcess {
  parent: ExecuteQueryRuntime;
  queryName = Store<string>();
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, parent: ExecuteQueryRuntime) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.parent = parent;
  }

  //#endregion LIFECYCLE

  async Confirm() {
    if (!this.queryName()) return;

    await this.parent.saveQuery(this.queryName());
    await this.closeWindow();
  }
}
