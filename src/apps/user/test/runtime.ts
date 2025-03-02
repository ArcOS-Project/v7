import type { ArcMSL } from "$ts/msl";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class TestAppRuntime extends AppProcess {
  lang: ArcMSL;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.lang = this.kernel.getModule<ArcMSL>("msl");
  }

  async render() {}
}
