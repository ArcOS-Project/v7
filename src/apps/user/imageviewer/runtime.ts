import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { arrayBufferToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getItemNameFromPath } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ImageViewerRuntime extends AppProcess {
  openedFile = Store<string>();
  imageUrl = Store<string>();
  indirect = Store<boolean>(false);
  overridePopulatable: boolean = true;

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
      const url = await Fs.direct(path);

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
    const prog = await Daemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Reading image`,
        subtitle: path,
        icon: "ImageViewerIcon",
      },
      this.pid
    );

    const contents = await Fs.readFile(path, (progress) => {
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
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        this.parentPid,
        true
      );
      this.closeWindow();

      return;
    }

    const blob = arrayBufferToBlob(contents);
    const url = URL.createObjectURL(blob);

    this.indirect.set(true);
    this.openedFile.set(path);
    this.imageUrl.set(url);
    this.windowTitle.set(getItemNameFromPath(path));
  }
}
