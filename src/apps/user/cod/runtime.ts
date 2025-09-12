import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { CodIcon } from "$ts/images/apps";
import { WarningIcon } from "$ts/images/dialog";
import { DefaultMimeIcon } from "$ts/images/mime";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
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
  mimeIcon = Store<string>(DefaultMimeIcon);
  public acceleratorStore: AppKeyCombinations = CodAccelerators(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: { path: string }) {
    this.altMenu.set(CodAltMenu(this));

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
            image: WarningIcon,
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
    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        caption: `Reading code`,
        subtitle: path,
        icon: CodIcon,
      },
      this.pid
    );

    prog.show();

    try {
      const contents = await this.fs.readFile(path, (progress) => {
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      await Sleep(0);
      await prog.stop();

      if (!contents) {
        throw new Error("Failed to get the contents of the file.");
      }

      const info = this.userDaemon?.assoc?.getFileAssociation(path);

      this.buffer.set(arrayToText(contents));
      this.openedFile.set(path);
      this.filename.set(getItemNameFromPath(path));
      this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
      this.original.set(`${this.buffer()}`);
      this.mimetype.set(info?.friendlyName || "Unknown");
      this.mimeIcon.set(info?.icon || DefaultMimeIcon);
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
          image: WarningIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );
    }
  }

  async saveChanges(force = false) {
    const opened = this.openedFile();
    const buffer = this.buffer();

    if (!opened) return await this.saveAs();
    if (buffer === this.original() && !force) return;

    const filename = this.filename();

    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        caption: `Saving ${filename}`,
        subtitle: `Writing ${opened}`,
        icon: CodIcon,
      },
      this.pid
    );

    try {
      await this.fs.writeFile(opened, textToBlob(buffer), async (progress) => {
        await prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });
    } catch {}

    await prog.stop();
    this.original.set(this.buffer());
  }

  async saveAs() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose where to save the file",
      icon: CodIcon,
      startDir: UserPaths.Documents,
      isSave: true,
      saveName: this.openedFile() ? this.filename() : "",
    });

    if (!path) return;

    const info = this.userDaemon?.assoc?.getFileAssociation(path);

    this.openedFile.set(path);
    this.filename.set(getItemNameFromPath(path));
    this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
    this.original.set(`${this.buffer()}`);
    this.mimetype.set(info?.friendlyName || "Unknown");
    this.mimeIcon.set(info?.icon || DefaultMimeIcon);
    this.windowTitle.set(this.filename());
    this.windowIcon.set(this.mimeIcon());
    await this.saveChanges(true);
  }

  async openFile() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Select a file to open",
      icon: CodIcon,
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    this.readFile(path);
  }
}
