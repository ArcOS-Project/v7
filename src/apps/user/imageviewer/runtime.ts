import type { IImageViewerRuntime } from "$interfaces/runtimes/IImageViewerRuntime";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Fs } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { arrayBufferToBlob } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { ImageViewer } from "svelte-image-viewer";
import { ImageViewerAccelerators } from "./accelerators";
import { ImageViewerAltMenu } from "./altmenu";

export class ImageViewerRuntime extends AppProcess implements IImageViewerRuntime {
  openedFile = Store<string>();
  imageUrl = Store<string>();
  viewer = Store<ImageViewer>();
  scale = Store<number>(1);
  indirect = Store<boolean>(false);
  overridePopulatable: boolean = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
    this.altMenu.set(ImageViewerAltMenu(this));
    this.acceleratorStore.push(...ImageViewerAccelerators(this));
  }

  async start() {
    this.viewer.subscribe(async (v) => {
      if (!v) return;

      await Sleep(100);
      v.scaleImageToFit();
    });
  }

  async render({ path }: { path: string }) {
    if (!path) return this.closeWindow();

    await this.readFile(path);
  }

  //#endregion

  async readFileDialog() {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose an image to view",
      extensions: this.app.data.opens?.extensions ?? [],
      icon: this.app.data.metadata.icon,
      startDir: getParentDirectory(this.openedFile()),
      targetPid: this.pid,
    });

    if (!path) return;

    return await this.readFile(path);
  }

  async readFile(path: string) {
    this.Log(`readFile: ${path}`);
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
    this.Log(`Reading file in full using readFile because accessing using DFA failed: ${path}`);

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
          buttons: [BTN_OKAY_SUG],
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
