import type { IInstallerProcessBase } from "$interfaces/IInstallerProcessBase";
import type { IAppInstallerRuntime } from "$interfaces/runtimes/IAppInstallerRuntime";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Env, Fs } from "$ts/env";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import type { AppProcessData } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";
import type { ArcPackage } from "$types/tpa/package";
import JSZip from "jszip";

export class AppInstallerRuntime extends AppProcess implements IAppInstallerRuntime {
  progress?: IInstallerProcessBase;
  metadata?: ArcPackage;
  isLibrary = false;
  zip?: JSZip;

  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData, metadata: ReadableStore<ArcPackage>, zip: JSZip) {
    super(pid, parentPid, app);

    if (metadata && zip) {
      this.metadata = metadata();
      this.zip = zip;
    }

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!(this.zip instanceof JSZip) || !this.metadata) return false; // No ZIP object? Then die.

    // Get the distribution service
    const distrib = Daemon!.serviceHost!.getService<IDistributionServiceProcess>("DistribSvc")!;

    if (!distrib) {
      // Should never happen unless nik fucked something up (yes, nik)
      MessageBox(
        {
          title: "%apps.AppInstaller.noDistrib.title%",
          message: "%apps.AppInstaller.noDistrib.message%",
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        +Env.get("shell_pid"),
        true
      );
      return false;
    }

    this.isLibrary = this.metadata.type === "library";

    this.progress = await distrib.packageInstaller(this.zip, this.metadata); // Spawn the actual package installer proc
  }

  async render() {
    this.getBody().setAttribute("data-prefix", "apps.AppInstaller");

    if (!this.userPreferences().security.enableThirdParty) {
      // The user has to allow TPAs explicitly
      MessageBox(
        {
          title: "%apps.AppInstaller.noEnableThirdParty.title%",
          message: "%apps.AppInstaller.noEnableThirdParty.message%",
          image: "AppsIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "%apps.AppInstaller.noEnableThirdParty.takeMeThere%",
              action: () => {
                this.spawnApp("systemSettings", +Env.get("shell_pid"), "apps");
              },
            },
            {
              caption: "%general.okay%",
              action: () => {},
              suggested: true,
            },
          ],
        },
        +Env.get("shell_pid"),
        true
      );

      this.closeWindow();
      return;
    }
  }

  //#endregion
  //#region DISTRIB

  async revert() {
    this.Log(`Reverting changes`);

    // I don't know how well this revert works because a package install
    // has never really errored for me before.

    // TODO: change rollback for library installment

    if (!this.isLibrary) {
      const gli = await Daemon?.helpers?.GlobalLoadIndicator("Rolling back changes...", this.pid);

      try {
        await Fs.deleteItem(this.metadata!.installLocation);
        await Daemon?.appreg?.uninstallPackageWithStatus(this.metadata!.appId, false);
      } catch {
        // Silently error
      }

      await gli?.stop();
    }

    this.closeWindow();
  }

  runNow() {
    this.Log(`Running freshly installed application`);

    this.closeWindow();
    this.spawnApp(this.metadata!.appId, +Env.get("shell_pid"));
  }

  // More of a middleman than a method imho
  async go() {
    await this.progress?.__go();
  }

  //#endregion
}
