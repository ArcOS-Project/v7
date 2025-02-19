import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class HexEditRuntime extends AppProcess {
  buffer = Store<ArrayBuffer>();
  view = Store<Uint8Array>();
  requestedFile: string;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    file: string
  ) {
    super(handler, pid, parentPid, app);

    this.requestedFile = file;
  }

  async render() {
    try {
      const contents = await this.fs.readFile(this.requestedFile);

      if (!contents) throw new Error();

      this.buffer.set(contents);
      this.view.set(new Uint8Array(contents));
    } catch {
      MessageBox(
        {
          title: "No file",
          message:
            "HexEdit was launched without a file to read. This shouldn't happen.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );
    }
  }
}
