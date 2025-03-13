import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText, textToBlob } from "$ts/fs/convert";
import { TextEditorIcon } from "$ts/images/apps";
import { WarningIcon } from "$ts/images/dialog";
import { DriveIcon } from "$ts/images/filesystem";
import type { ProcessHandler } from "$ts/process/handler";
import { detectJavaScript } from "$ts/util";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { fromExtension } from "human-filetypes";
import { WordPadAltMenu } from "./altmenu";

export class WordPadRuntime extends AppProcess {
  openedFile = Store<string>();
  filename = Store<string>();
  mimetype = Store<string>();
  directoryName = Store<string>();
  editor = Store<HTMLDivElement>();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: { path: string }) {
    if (path) this.readFile(path);

    this.altMenu.set(WordPadAltMenu(this));
  }

  async readFile(path: string) {
    try {
      const prog = await this.userDaemon!.FileProgress(
        {
          type: "size",
          caption: `Reading file`,
          subtitle: path,
          icon: TextEditorIcon,
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

      const str = arrayToText(contents);

      if (detectJavaScript(str)) throw new Error("Detected JavaScript code!");

      this.editor()!.innerHTML = str;
    } catch (e) {
      MessageBox(
        {
          title: "Failed to read file",
          message: `WordPad was unable to open the file you requested: ${e}`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.error",
        },
        this.parentPid,
        true
      );
    }
  }

  async saveChanges() {
    const opened = this.openedFile();
    const filename = this.filename();

    if (!opened) return await this.saveAs();

    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        caption: `Saving ${filename}`,
        subtitle: `Writing ${opened}`,
        icon: DriveIcon,
      },
      this.pid
    );

    await this.fs.writeFile(opened, textToBlob(this.editor().innerHTML), async (progress) => {
      await prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await prog.stop();
  }

  async saveAs() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose where to save the file",
      icon: TextEditorIcon,
      startDir: "U:/",
      isSave: true,
      saveName: this.openedFile() ? this.filename() : "",
    });

    if (!path) return;

    this.openedFile.set(path);
    await this.saveChanges();
    this.openedFile.set(path);
    this.mimetype.set(fromExtension(this.filename()));
    this.windowTitle.set(this.filename());
  }

  async openFile() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Select a file to open",
      icon: TextEditorIcon,
      startDir: "U:/",
    });

    if (!path) return;

    this.readFile(path);
  }

  formatDoc(cmd: string, value: any = null) {
    if (cmd === "fontSize") value = +value;

    document.execCommand(cmd, false, value);
  }
}
