import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob } from "$ts/util/convert";
import { getItemNameFromPath } from "$ts/util/fs";
import { ErrorIcon } from "$ts/images/dialog";
import { PdfMimeIcon } from "$ts/images/mime";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class PdfViewerRuntime extends AppProcess {
  openedFile = Store<string>();
  documentUrl = Store<string>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
  }

  async render({ path }: { path: string }) {
    if (!path) return this.closeWindow();

    await this.readFile(path);
  }

  //#endregion

  async readFile(path: string) {
    try {
      const url = await this.fs.direct(path);

      if (!url) {
        return await this.readFileIndirectFallback(path);
      }

      this.openedFile.set(path);
      this.documentUrl.set(url);
      this.windowTitle.set(getItemNameFromPath(path));
    } catch {
      return await this.readFileIndirectFallback(path);
    }
  }

  async readFileIndirectFallback(path: string) {
    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        caption: `Reading image`,
        subtitle: path,
        icon: PdfMimeIcon,
      },
      this.pid
    );

    try {
      const contents = await this.fs.readFile(path, (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      prog.stop();

      if (!contents) {
        MessageBox(
          {
            title: "Failed to read PDF file",
            message: "The file you tried to open could not be read.",
            image: ErrorIcon,
            sound: "arcos.dialog.error",
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          },
          this.parentPid,
          true
        );
        this.closeWindow();

        return;
      }

      const blob = arrayToBlob(contents);
      const url = URL.createObjectURL(blob);

      this.openedFile.set(path);
      this.documentUrl.set(url);
      this.windowTitle.set(getItemNameFromPath(path));
    } catch {
      this.closeWindow();
    }
  }
}
