import type { IGenericObjectViewerRuntime } from "$interfaces/runtimes/IGenericObjectViewerRuntime";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";

export class GenericObjectViewerRuntime extends AppProcess implements IGenericObjectViewerRuntime {
  data: object;

  constructor(pid: number, parentPid: number, app: AppProcessData, object: object, windowTitle?: string, windowIcon?: string) {
    super(pid, parentPid, app);

    if (windowTitle) {
      this.windowTitle.set(windowTitle);
    }

    if (windowIcon) {
      this.windowIcon.set(windowIcon);
    }

    this.data = object;
  }
}
