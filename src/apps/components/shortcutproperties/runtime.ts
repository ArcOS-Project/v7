import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Env } from "$ts/env";
import { getAllImages } from "$ts/images";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ArcShortcut } from "$types/shortcut";

export class ShortcutPropertiesRuntime extends AppProcess {
  shortcutData = Store<ArcShortcut>();
  iconStore = getAllImages();
  path?: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path: string, data: ArcShortcut) {
    super(pid, parentPid, app);

    if (data && path) {
      this.shortcutData.set(JSON.parse(JSON.stringify(data)));
      this.path = path.toString();
    }

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.path) return false;
  }

  //#endregion
  //#region ACTIONS

  async save() {
    const result = await Daemon?.shortcuts?.createShortcut(this.shortcutData(), this.path!, true);

    if (result) {
      await this.closeWindow();
      return;
    }

    MessageBox(
      {
        title: "Failed to save",
        message: "An error occurred while trying to save the shortcut. Please try again",
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      this.parentPid,
      true
    );
  }

  async goTarget() {
    this.Log(`goTarget`);
    const data = this.shortcutData();

    await this.closeWindow();

    switch (data.type) {
      case "app":
        await this.spawnOverlayApp("AppInfo", +Env.get("shell_pid"), data.target);
        break;
      case "file":
        await this.spawnApp("fileManager", +Env.get("shell_pid"), getParentDirectory(data.target));
        break;
      case "folder":
        await this.spawnApp("fileManager", +Env.get("shell_pid"), data.target);
        break;
      case "new":
        await this.closeWindow();
        break;
    }
  }

  async changeIcon() {
    this.Log(`changeIcon`);

    const data = this.shortcutData();

    data.icon = await Daemon.helpers!.IconEditor(data.icon, data.icon, "Shortcut icon");

    this.shortcutData.set(data);
  }

  async pickTarget() {
    this.Log(`pickTarget`);

    const data = this.shortcutData();

    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Pick a new target",
      icon: data.icon,
      folder: data.type === "folder",
      startDir: getParentDirectory(data.target),
    });

    if (!path) return;

    data.target = path;
    this.shortcutData.set(data);
  }

  //#endregion
}
