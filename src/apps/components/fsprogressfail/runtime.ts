import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";
import { FsProgressRuntime } from "../fsprogress/runtime";

export class FsProgressFailRuntime extends AppProcess {
  prog?: FsProgressRuntime;
  errors: string[] = [];
  icon: string = "";
  title: string = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, prog: FsProgressRuntime) {
    super(pid, parentPid, app);

    if (prog && prog instanceof FsProgressRuntime) this.prog = prog;
  }

  async start() {
    if (!this.prog) return false;

    const progress = this.prog.Progress();

    this.errors = progress.errors;
    this.icon = progress.icon;
    this.title = progress.caption;
  }

  //#endregion
}
