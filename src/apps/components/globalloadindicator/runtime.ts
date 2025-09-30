import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class GlobalLoadIndicatorRuntime extends AppProcess {
  caption = Store<string>("%general.genericStatus%");

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, caption: string) {
    super(pid, parentPid, app);

    if (caption) this.caption.set(caption);

    this.setSource(__SOURCE__);
  }

  //#endregion
}
