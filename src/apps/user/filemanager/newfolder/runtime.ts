import { AppProcess } from "$ts/apps/process";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class NewFolderRuntime extends AppProcess {
  newFolder = Store<string>();
  path: string;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path: string
  ) {
    super(handler, pid, parentPid, app);

    this.path = path;
  }

  async createFolder() {
    await this.fs.createDirectory(join(this.path, this.newFolder()));

    this.closeWindow();
  }
}
