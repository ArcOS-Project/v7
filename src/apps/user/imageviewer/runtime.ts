import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob } from "$ts/fs/convert";
import { getItemNameFromPath } from "$ts/fs/util";
import { ImageViewerIcon } from "$ts/images/apps";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ImageViewerRuntime extends AppProcess {
  openedFile = Store<string>();
  imageUrl = Store<string>();
  indirect = Store<boolean>(false);
  overridePopulatable: boolean = true;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: { path: string }) {
    if (!path) return this.closeWindow();

    await this.readFile(path);
  }

  async readFile(path: string) {
    try {
      const url = await this.fs.direct(path);

      if (!url) {
        return await this.readFileIndirectFallback(path);
      }

      this.indirect.set(false);
      this.openedFile.set(path);
      this.imageUrl.set(url);
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
        icon: ImageViewerIcon,
      },
      this.pid
    );

    const contents = await this.fs.readFile(path, (progress) => {
      prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await Sleep(0);
    prog.stop();

    if (!contents) {
      MessageBox(
        {
          title: "Failed to read image",
          message: "The image you tried to open could not be read.",
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

    this.indirect.set(true);
    this.openedFile.set(path);
    this.imageUrl.set(url);
    this.windowTitle.set(getItemNameFromPath(path));
  }
}
