import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Plural as P } from "$ts/util";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";
import type { FsProgressOperation } from "./types";

export class FsProgressRuntime extends AppProcess {
  public Progress = Store<FsProgressOperation>();

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

    let errorNotified = false;

    (store as ReadableStore<FsProgressOperation>).subscribe(async (v) => {
      this.Progress.set(v);
      this.windowTitle.set(v.caption);
      this.windowIcon.set(v.icon);

      if (v.done >= v.max && v.max > 0 && !v.errors.length) {
        await this.closeWindow();

        return;
      }

      if (v.done >= v.max && v.max && v.errors.length && !errorNotified) {
        errorNotified = true;

        const message = [
          `${v.errors.length} ${P("Error", v.errors.length)} occured while <b>${
            v.caption
          }</b> was running.`,
          `<code class='block'> - ${v.errors.join("<br> - ")}</code>`,
        ];

        await this.closeWindow();

        await MessageBox(
          {
            title: "Errors Occured",
            message: message.join("<br>"),
            buttons: [
              {
                caption: "Okay",
                action: async () => {},
                suggested: true,
              },
            ],
            image: WarningIcon,
            sound: "arcos.dialog.warning",
          },
          this.parentPid || 0,
          !!this.parentPid
        );
      }
    });
  }
}
