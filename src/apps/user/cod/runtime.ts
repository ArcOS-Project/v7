import type { IFilesystemDrive } from "$interfaces/fs";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppProcessData } from "$types/app";
import { CodAccelerators } from "./accelerators";
import { CodAltMenu } from "./altmenu";
import { CodTranslations } from "./store";
import type { CodLang } from "./types";

export class CodRuntime extends AppProcess {
  language = Store<CodLang>("plaintext");
  buffer = Store<string>("");
  openedFile = Store<string>("");
  filename = Store<string>("");
  mimetype = Store<string>("");
  directoryName = Store<string>("");
  original = Store<string>("");
  drive = Store<IFilesystemDrive | undefined>();
  mimeIcon = Store<string>(this.getIconCached("DefaultMimeIcon"));
  public acceleratorStore: AppKeyCombinations = CodAccelerators(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
  }

  async render({ path }: { path: string }) {
    this.altMenu.set(CodAltMenu(this));

    if (!path) return;

    await this.readFile(path);

    this.language.subscribe(() => {
      if (!this._disposed) this.buffer.set(this.buffer()); // Force re-render of <CodeEditor/>
    });
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
    this.Log(`readFile: ${path}`);
    const prog = await Daemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Reading code`,
        subtitle: path,
        icon: "CodIcon",
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
      await prog.stop();

      if (!contents) {
        throw new Error("Failed to get the contents of the file.");
      }

      this.drive.set(Fs.getDriveByPath(path));

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

      const split = path.split(".");
      const extension = split[split.length - 1];

      if (extension && CodTranslations[extension]) this.language.set(CodTranslations[extension]);
    } catch (e) {
      await Sleep(0);
      await prog?.stop();

      await MessageBox(
        {
          title: "Failed to read file",
          message: `Cod was unable to open the file you requested: ${e}`,
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
    this.Log(`saveChanges force=${force}`);

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
        icon: "CodIcon",
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
      icon: "CodIcon",
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
      icon: "CodIcon",
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    this.readFile(path);
  }
}
