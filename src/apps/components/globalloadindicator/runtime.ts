import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class GlobalLoadIndicatorRuntime extends AppProcess {
  caption = Store<string>("Just a moment...");

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, caption: string) {
    super(handler, pid, parentPid, app);

    if (caption) this.caption.set(caption);
  }
}
