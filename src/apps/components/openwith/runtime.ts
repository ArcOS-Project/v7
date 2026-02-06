import { AppProcess } from "$ts/apps/process";
import { isPopulatable } from "$ts/apps/util";
import { Daemon } from "$ts/server/user/daemon";
import { getItemNameFromPath } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { FileOpenerResult } from "$types/fs";
import type { RenderArgs } from "$types/process";

export class OpenWithRuntime extends AppProcess {
  available = Store<FileOpenerResult[]>();
  all = Store<FileOpenerResult[]>();
  apps = Store<FileOpenerResult[]>();
  filename = Store<string>();
  path = Store<string>();
  selectedId = Store<string>();
  viewMode = Store<"all" | "apps" | "compatible">("compatible");

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.renderArgs.path) return false;
  }

  async render({ path }: RenderArgs) {
    if (!path) return;

    const available = await Daemon!.files!.findHandlerToOpenFile(path);

    this.available.set(available);
    this.all.set(await Daemon!.files!.getAllFileHandlers());
    this.apps.set(this.all().filter((a) => a.type === "app" && isPopulatable(a.app!))); // Filter apps to populatable
    this.filename.set(getItemNameFromPath(path));
    this.path.set(path);

    if (!available || !available.length) this.viewMode.set("apps");
  }

  //#endregion

  async go(id = this.selectedId()) {
    this.Log(`GO!`);

    if (!id) return;

    await this.closeWindow();

    // Very questionable way to get and execute the selected file handler from the daemon's file handlers
    if (Daemon?.files!.fileHandlers?.[id]) return await Daemon?.files!.fileHandlers?.[id]?.handle(this.path());

    // In case the selection is an app, not a handler
    await this.spawnApp(id, this.parentPid, this.path());
  }
}
