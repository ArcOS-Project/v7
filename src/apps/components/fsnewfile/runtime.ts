import { AppProcess } from "$ts/apps/process";
import { Fs } from "$ts/env";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class NewFileRuntime extends AppProcess {
  newFile = Store<string>();
  path: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path: string) {
    super(pid, parentPid, app);

    this.path = path;

    this.setSource(__SOURCE__);
  }

  render() {
    if (!this.path) this.closeWindow();
  }

  //#endregion

  async createFile() {
    const blob = new Blob(); // Empty blob === empty file contents
    try {
      await Fs.writeFile(join(this.path, this.newFile()), blob);
    } catch {
      // silently error
    }

    this.closeWindow();
  }
}
