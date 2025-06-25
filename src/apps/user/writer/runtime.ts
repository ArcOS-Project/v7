import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText, textToBlob } from "$ts/fs/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/fs/util";
import { WarningIcon } from "$ts/images/dialog";
import { DriveIcon } from "$ts/images/filesystem";
import { DefaultMimeIcon, TextMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/accelerator";
import type { App, AppProcessData } from "$types/app";
import { fromExtension } from "human-filetypes";
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
  mimeIcon = Store<string>(DefaultMimeIcon);

  protected overlayStore: Record<string, App> = {
    replace: ReplaceOverlay,
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  public acceleratorStore: AppKeyCombinations = WriterAccelerators(this);

  async render({ path }: { path: string }) {
    this.altMenu.set(WriterAltMenu(this));

    if (!path) return;

    await this.readFile(path);
  }

  async readFile(path: string) {
    try {
      const prog = await this.userDaemon!.FileProgress(
        {
          type: "size",
          caption: `Reading file`,
          subtitle: path,
          icon: TextMimeIcon,
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
        throw new Error("Failed to get the contents of the file.");
      }

      this.buffer.set(arrayToText(contents));
      this.openedFile.set(path);
      this.filename.set(getItemNameFromPath(path));
      this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
      this.original.set(`${this.buffer()}`);
      this.mimetype.set(fromExtension(this.filename()));
      this.mimeIcon.set(this.userDaemon?.getMimeIconByFilename(path) || DefaultMimeIcon);
      this.windowTitle.set(this.filename());
      this.windowIcon.set(this.mimeIcon());
    } catch (e) {
      MessageBox(
        {
          title: "Failed to read file",
          message: `Writer was unable to open the file you requested: ${e}`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.error",
        },
        this.parentPid,
        true
      );
    }
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
        icon: DriveIcon,
      },
      this.pid
    );

    await this.fs.writeFile(opened, textToBlob(buffer), async (progress) => {
      await prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await prog.stop();
    this.original.set(this.buffer());
  }

  async saveAs() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose where to save the file",
      icon: TextMimeIcon,
      startDir: UserPaths.Documents,
      isSave: true,
      saveName: this.openedFile() ? this.filename() : "",
    });

    if (!path) return;

    this.openedFile.set(path);
    this.filename.set(getItemNameFromPath(path));
    this.directoryName.set(getItemNameFromPath(getParentDirectory(path)));
    this.original.set(`${this.buffer()}`);
    this.mimetype.set(fromExtension(this.filename()));
    this.mimeIcon.set(this.userDaemon?.getMimeIconByFilename(path) || DefaultMimeIcon);
    this.windowTitle.set(this.filename());
    this.windowIcon.set(this.mimeIcon());
    await this.saveChanges(true);
  }

  async openFile() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Select a file to open",
      icon: TextMimeIcon,
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    this.readFile(path);
  }

  public selectAll() {
    this.input()?.select();
  }
}
