import type { ArcLang } from "$ts/lang";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class TestAppRuntime extends AppProcess {
  lang: ArcLang;
  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.lang = this.kernel.getModule<ArcLang>("lang");
  }

  async render() {}
}
