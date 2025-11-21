import { AppProcess } from "$ts/apps/process";
import { IsMobile } from "$ts/env";
import type { AppProcessData } from "$types/app";

export class MobileBlockRuntime extends AppProcess {
  public _criticalProcess: boolean = true;
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    const match = window.matchMedia("(max-width: 1000px)");
    IsMobile.set(match.matches);

    match.addEventListener("change", ({ matches }) => {
      IsMobile.set(matches);
    });
  }

  //#endregion
}
