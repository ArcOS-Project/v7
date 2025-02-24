import { AppProcess } from "$ts/apps/process";
import { getDirectoryName } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData, AppStorage } from "$types/app";
import type { RenderArgs } from "$types/process";

export class OpenWithRuntime extends AppProcess {
  available = Store<AppStorage>();
  all = Store<AppStorage>();
  filename = Store<string>();
  path = Store<string>();
  selectedId = Store<string>();
  showAll = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path: string
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: RenderArgs) {
    if (!path) return;

    this.available.set(await this.userDaemon!.findAppToOpenFile(path));
    this.all.set(await this.userDaemon!.appStore!.get());
    this.filename.set(getDirectoryName(path));
    this.path.set(path);
  }

  async go(id = this.selectedId()) {
    if (!id) return;

    await this.spawnApp(id, this.parentPid, this.path());
    await this.closeWindow();
  }
}
