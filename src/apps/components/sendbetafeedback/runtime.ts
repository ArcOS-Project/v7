import type { IAppProcess } from "$interfaces/IAppProcess";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";

export class SendBetaFeedbackRuntime extends AppProcess implements IAppProcess {
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  //#endregion
}
