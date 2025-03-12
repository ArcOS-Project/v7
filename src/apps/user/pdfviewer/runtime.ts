import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob } from "$ts/fs/convert";
import { getDirectoryName } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import { PdfMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class PdfViewerRuntime extends AppProcess {
  openedFile = Store<string>();
  documentUrl = Store<string>();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: { path: string }) {
    if (!path) return this.closeWindow();

    await this.readFile(path);
  }

  async readFile(path: string) {
    const url = await this.fs.direct(path);

    if (!url) {
      return await this.readFileIndirectFallback(path);
    }

    this.openedFile.set(path);
    this.documentUrl.set(url);
    this.windowTitle.set(getDirectoryName(path));
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

    const contents = await this.fs.readFile(path, (progress) => {
      prog.setWait(false);
      prog.setWork(true);
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
    this.windowTitle.set(getDirectoryName(path));
  }
}
