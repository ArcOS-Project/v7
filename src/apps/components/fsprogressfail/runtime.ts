import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";
import type { FsProgressProc } from "../fsprogress/types";

export class FsProgressFailRuntime extends AppProcess {
  prog?: FsProgressProc;
  errors: string[] = [];
  icon: string = "";
  title: string = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, prog: FsProgressProc) {
    super(pid, parentPid, app);

    if (prog && prog?.app && prog?.Progress?.()) this.prog = prog;
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
