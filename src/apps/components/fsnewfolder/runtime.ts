import { AppProcess } from "$ts/apps/process";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class NewFolderRuntime extends AppProcess {
  newFolder = Store<string>();
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

  async createFolder() {
    try {
      await this.fs.createDirectory(join(this.path, this.newFolder()));
    } catch {
      // silently error
    }

    this.closeWindow();
  }
}
