import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText } from "$ts/fs/convert";
import { TextEditorIcon } from "$ts/images/apps";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { detectJavaScript } from "$ts/util";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

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
}
