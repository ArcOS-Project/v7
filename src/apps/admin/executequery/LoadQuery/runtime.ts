import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class LoadQueryOverlayRuntime extends AppProcess {
  parent: IExecuteQueryRuntime;
  queries: string[] = [];
  selectedQuery = Store<string>("");
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, parent: IExecuteQueryRuntime) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.parent = parent;
  }

  async start() {
    this.queries = await this.parent.loadQueryList();
  }

  //#endregion LIFECYCLE

  async Confirm() {
    const selected = this.selectedQuery();

    this.Log(`Confirm -> ${selected}`);

    if (!this.queries.includes(selected)) return;

    await this.parent.loadQuery(selected.replace(".json", ""));
    await this.closeWindow();
  }
}
