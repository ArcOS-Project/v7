import type { ApplicationStorage } from "$ts/apps/storage";
import { join } from "$ts/util/fs";
import type { ArcPackage, StoreItem } from "$types/package";
import type JSZip from "jszip";
import { InstallerProcessBase } from "./base";
import { TryGetDaemon } from "$ts/server/user/daemon";
import type { DistributionServiceProcess } from "..";
import { UserPaths } from "$ts/server/user/store";

export class AppInstallerProcess extends InstallerProcessBase {
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, zip: JSZip, metadata: ArcPackage, item: StoreItem) {
    super(pid, parentPid, zip, metadata, item);

    this.name = "AppInstallerProcess";

    this.setSource(__SOURCE__);
  }

  async initialize(): Promise<void> {
    this.workingDirectory = this.metadata!.installLocation;
    this.TOTAL_COUNT.set(this.TOTAL_COUNT() + Object.keys((await this.getFiles()).files).length);
    this.MISC_STEPCOUNT = 2;
  }

  async go() {
    if (!(await this.createInstallLocation())) {
      this.parent!.BUSY = "";
      return false;
    }

    const { files, sortedPaths } = await this.getFiles();

    for (const path of sortedPaths) {
      if (!path) continue;
      const target = join(this.metadata!.installLocation, path);
      const item = files[path];

      if (!item) continue;
      if (item.dir) {
        if (!(await this.mkdir(target))) return false;
      } else {
        if (!(await this.writeFile(target, await item.async("arraybuffer")))) return false;
      }
    }

    return true;
  }

  protected override async afterSuccessfulInstallation(): Promise<boolean> {
    if (!(await this.registerApp())) {
      return false;
    }

    this.checkDesktopIcon();

    return true;
  }

  //#endregion

  async checkDesktopIcon() {
    if (!this.item) return;

    const existing = this.userDaemon.preferences().pinnedApps.includes(this.metadata?.appId!);
    const appStore = this.userDaemon.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const app = appStore?.getAppSynchronous(this.metadata?.appId!)!;

    if (existing) return;

    if (app.hidden || app.core) {
      this.userDaemon?.notifications!.sendNotification({
        title: `Open ${this.metadata?.name}`,
        message: `Do you want open ${this.metadata?.name}?`,
        image: this.userDaemon.appreg!.getAppIcon(app),
        buttons: [
          {
            caption: "Open",
            action: async () => {
              await this.userDaemon?.spawn?.spawnApp(app.id, +this.env.get("shell_pid"));
            },
          },
        ],
      });
    } else {
      this.userDaemon?.notifications!.sendNotification({
        title: `Pin ${this.metadata?.name}`,
        message: `Do you want to pin ${this.metadata?.name} to the taskbar so that you can easily launch it in the future?`,
        image: this.userDaemon.appreg!.getAppIcon(app),
        buttons: [
          {
            caption: "Pin to taskbar",
            action: () => {
              this.userDaemon.appreg!.pinApp(this.metadata?.appId!);
            },
          },
        ],
      });
    }
  }

  async registerApp(): Promise<boolean> {
    this.Log("registerApp");

    this.logStatus(this.metadata!.name, "registration");

    try {
      const result = await this.userDaemon?.appreg!.registerAppFromPath(join(this.metadata!.installLocation, "_app.tpa"));
      if (!result) {
        this.setCurrentStatus("done");
        return true;
      }

      throw result;
    } catch (e) {
      this.fail(`Could not register: ${e}`);
      return false;
    }
  }

  static async validatePackage(metadata: ArcPackage, zip: JSZip): Promise<boolean> {
    if (!zip.files["payload/_app.tpa"]) return false;

    if (metadata.appId.includes(".") || metadata.appId.includes("-")) {
      return false;
    }

    return true;
  }

  static async uninstallPackage(metadata: ArcPackage, deleteFiles = true, onStage?: (stage: string) => void): Promise<void> {
    onStage?.("Getting installed package");

    const host = TryGetDaemon()?.serviceHost;
    const distrib = host?.getService<DistributionServiceProcess>("DistribSvc")!;
    const appStore = host?.getService<ApplicationStorage>("AppStorage");

    const installedPkg = await distrib?.getInstalledStoreItemById(metadata.appId);

    if (installedPkg) {
      onStage?.("Removing package from installed...");

      distrib.BUSY = "";
      distrib.BUSY = "uninstallApp";
    }

    onStage?.("Updating user preferences");

    await distrib.fs.deleteItem(join(UserPaths.AppRepository, `${metadata.appId}.json`), false);

    onStage?.("Refreshing app store...");

    delete appStore!.appIconCache[metadata.appId];
    await appStore?.refresh();

    if (deleteFiles) {
      onStage?.("Deleting app files...");
      try {
        await distrib.fs.deleteItem(metadata.installLocation!, false);
      } catch {}
    }

    host?.daemon.appreg!.unpinApp(metadata.appId);
  }
}
