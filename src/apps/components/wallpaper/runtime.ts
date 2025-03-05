import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";

export class WallpaperRuntime extends AppProcess {
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);
  }

  render(args: RenderArgs) {
    this.closeIfSecondInstance();
  }
}
