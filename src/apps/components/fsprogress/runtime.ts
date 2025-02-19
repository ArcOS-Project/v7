import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Plural as P } from "$ts/util";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
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

    let errorNotified = false;

    store.subscribe(async (v) => {
      this.Progress.set(v);
      this.windowTitle.set(v.caption);
      this.windowIcon.set(v.icon);

      if (v.done >= v.max && v.max > 0 && !v.errors.length) {
        await Sleep(350);

        this.closeWindow();

        return;
      }

      if (v.done >= v.max && v.max && v.errors.length && !errorNotified) {
        errorNotified = true;

        const message = [
          `${v.errors.length} ${P("Error", v.errors.length)} occured while <b>${
            v.caption
          }</b> was running.`,
          `<code class='block'>`,
          v.errors.join("\n"),
          `</code>`,
        ];

        MessageBox(
          {
            title: "Errors Occured",
            message: message.join("<br>"),
            buttons: [
              {
                caption: "Okay",
                action() {
                  stop();
                },
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
