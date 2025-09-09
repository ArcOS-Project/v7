import { AppProcess } from "$ts/apps/process";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class NewFileRuntime extends AppProcess {
  newFile = Store<string>();
  path: string;

  //#region LIFECYCLE

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path: string) {
    super(handler, pid, parentPid, app);

    this.path = path;
  }

  render() {
    if (!this.path) this.closeWindow();
  }

  //#endregion

  async createFile() {
    const blob = new Blob(); // Empty blob === empty file contents
    try {
      await this.fs.writeFile(join(this.path, this.newFile()), blob);
    } catch {
      // silently error
    }

    this.closeWindow();
  }
}
