import { AppProcess } from "$ts/apps/process";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class RenameItemRuntime extends AppProcess {
  newName = Store<string>();
  parentDir: string;
  path: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path: string) {
    super(pid, parentPid, app);

    path ||= "";

    this.parentDir = getParentDirectory(path);
    this.newName.set(getItemNameFromPath(path));
    this.path = path;

    this.setSource(__SOURCE__);
  }

  render() {
    if (!this.path) this.closeWindow(); // Probably unexpected invocation
  }

  //#endregion

  async rename() {
    try {
      await this.fs.moveItem(this.path, join(this.parentDir, this.newName()));
    } catch {
      // silently error
    }

    this.closeWindow();
  }
}
