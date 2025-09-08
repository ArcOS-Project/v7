import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";
import type { FsProgressOperation } from "./types";

export class FsProgressRuntime extends AppProcess {
  public Progress = Store<FsProgressOperation>();

  //#region CONTROL FLOW

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    store: ReadableStore<FsProgressOperation>
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs.store = store;
  }

  render({ store }: RenderArgs) {
    if (!store.subscribe) return this.closeWindow();

    let errorNotified = false; // true if errors have been broadcasted

    (store as ReadableStore<FsProgressOperation>).subscribe(async (v) => {
      this.Progress.set(v);
      this.windowTitle.set(v.caption);
      this.windowIcon.set(v.icon);

      if (v.done >= v.max && v.max > 0 && !v.errors.length) {
        await this.closeWindow(); // Close the window if pending operations are done

        return;
      }

      if (v.done >= v.max && v.max && v.errors.length && !errorNotified) {
        // Errors occured
        errorNotified = true;

        await this.closeWindow();
        await this.spawnOverlayApp("FsProgressFail", this.parentPid || 0, this);
      }
    });
  }

  async onClose(): Promise<boolean> {
    if (this.parentPid) this.handler.renderer?.focusedPid.set(this.parentPid); // Focus the parent PID upon close

    return true;
  }

  //#endregion
}
