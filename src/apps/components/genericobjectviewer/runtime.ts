import type { GenericObjectViewerOptions, IGenericObjectViewerRuntime } from "$interfaces/runtimes/IGenericObjectViewerRuntime";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";

export class GenericObjectViewerRuntime extends AppProcess implements IGenericObjectViewerRuntime {
  data: object;
  withProto = true;

  constructor(pid: number, parentPid: number, app: AppProcessData, object: object, options?: GenericObjectViewerOptions) {
    super(pid, parentPid, app);

    options ??= {};

    if (options.windowTitle) {
      this.windowTitle.set(options.windowTitle);
    }

    if (options.windowIcon) {
      this.windowIcon.set(options.windowIcon);
    }

    if (options.dataName) {
      this.data = Object.seal({ [options.dataName]: object });
      this.withProto = false;
    } else {
      this.data = object;
    }
  }
}
