import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Fs } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/accelerator";
import type { App, AppProcessData } from "$types/app";
import { WriterAccelerators } from "./accelerators";
import { WriterAltMenu } from "./altmenu";
import { ReplaceOverlay } from "./replace/metadata";

export class WriterRuntime extends AppProcess {
  buffer = Store<string>("");
  openedFile = Store<string>("");
  filename = Store<string>("");
  mimetype = Store<string>("");
  directoryName = Store<string>("");
  original = Store<string>("");
  input = Store<HTMLTextAreaElement>();
  mimeIcon = Store<string>(this.getIconCached("DefaultMimeIcon"));

  protected overlayStore: Record<string, App> = {
    replace: ReplaceOverlay,
  };
  public acceleratorStore: AppKeyCombinations = WriterAccelerators(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
  }

  async render({ path }: { path: string }) {
    this.altMenu.set(WriterAltMenu(this));

    if (!path) return;

    await this.readFile(path);
  }

  async onClose(): Promise<boolean> {
    const buffer = this.buffer();
    const original = this.original();
    const filename = this.filename() || "Untitled";

    if (original !== buffer) {
      return new Promise<boolean>((r) => {
        MessageBox(
          {
            title: "Save changes?",
            message: `Do you want to save the changes you made to ${filename}?`,
            image: "WarningIcon",
            sound: "arcos.dialog.warning",
            buttons: [
              {
                caption: "Cancel",
                action: () => {
                  r(false);
                },
              },
              {
                caption: "No",
                action: () => {
                  r(true);
                },
              },
              {
                caption: "Yes",
                action: async () => {
                  await this.saveChanges();
                  r(true);
                },
                suggested: true,
              },
            ],
          },
          this.pid,
          true
        );
      });
    }

    return true;
  }

  //#endregion

  async readFile(path: string) {
    this.Log(`readFile`);

    const prog = await Daemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Reading file`,
        subtitle: path,
        icon: "TextMimeIcon",
      },
      this.pid
    );

    prog.show();

    try {
      const contents = await Fs.readFile(path, (progress) => {
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      // Sleeping to give FsProgress the time to render if the file is done loading before FsProgress has a chance to show.
      await Sleep(500);
      prog.stop();

      if (!contents) {
        throw new Error("Failed to get the contents of the file.");
      }

      const info = Daemon?.assoc?.getFileAssociation(path);

      this.buffer.set(arrayBufferToText(contents)!);
      this.openedFile.set(path);
      this.filename.set(getItemNameFromPath(path));
      this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
      this.original.set(`${this.buffer()}`);
      this.mimetype.set(info?.friendlyName || "Unknown");
      this.mimeIcon.set(info?.icon || this.getIconCached("DefaultMimeIcon"));
      this.windowTitle.set(this.filename());
      this.windowIcon.set(this.mimeIcon());
    } catch (e) {
      await Sleep(0);
      await prog?.stop();

      await MessageBox(
        {
          title: "Failed to read file",
          message: `Writer was unable to open the file you requested: ${e}`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "WarningIcon",
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );
    }
  }

  async saveChanges(force = false) {
    this.Log(`saveChanges`);

    const opened = this.openedFile();
    const buffer = this.buffer();

    if (!opened) return await this.saveAs();
    if (buffer === this.original() && !force) return;

    const filename = this.filename();

    const prog = await Daemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Saving ${filename}`,
        subtitle: `Writing ${opened}`,
        icon: "DriveIcon",
      },
      this.pid
    );

    try {
      await Fs.writeFile(opened, textToBlob(buffer), async (progress) => {
        await prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });
    } catch {}

    await prog.stop();
    this.original.set(this.buffer());
  }

  async saveAs() {
    this.Log(`saveAs`);

    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose where to save the file",
      icon: "TextMimeIcon",
      startDir: UserPaths.Documents,
      isSave: true,
      saveName: this.openedFile() ? this.filename() : "",
    });

    if (!path) return;

    const info = Daemon?.assoc?.getFileAssociation(path);

    this.openedFile.set(path);
    this.filename.set(getItemNameFromPath(path));
    this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
    this.original.set(`${this.buffer()}`);
    this.mimetype.set(info?.friendlyName || "Unknown");
    this.mimeIcon.set(info?.icon || this.getIconCached("DefaultMimeIcon"));
    this.windowTitle.set(this.filename());
    this.windowIcon.set(this.mimeIcon());
    await this.saveChanges(true);
  }

  async openFile() {
    this.Log(`openFile`);

    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Select a file to open",
      icon: "TextMimeIcon",
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    this.readFile(path);
  }

  public selectAll() {
    this.Log(`selectAll`);

    this.input()?.select();
  }
}
