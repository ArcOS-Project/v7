import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import type { InstallerProcess } from "$ts/distrib/installer";
import { type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ArcPackage } from "$types/package";
import JSZip from "jszip";

export class AppInstallerRuntime extends AppProcess {
  progress?: InstallerProcess;
  metadata?: ArcPackage;
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
    const distrib = this.userDaemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;

    if (!distrib) {
      // Should never happen unless nik fucked something up (yes, nik)
      MessageBox(
        {
          title: "Can't install package",
          message: "The Distribution Service isn't running anymore. Please restart ArcOS to fix this problem.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: this.getIconCached("ErrorIcon"),
          sound: "arcos.dialog.error",
        },
        +this.env.get("shell_pid"),
        true
      );
      return false;
    }

    this.progress = await distrib.packageInstaller(this.zip, this.metadata); // Spawn the actual package installer proc
  }

  async render() {
    if (!this.userPreferences().security.enableThirdParty) {
      // The user has to allow TPAs explicitly
      MessageBox(
        {
          title: "Can't install app",
          message:
            "Third-party apps aren't enabled on your account. Please enable third-party apps in the Settings to install this app.",
          image: this.getIconCached("AppsIcon"),
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Take me there",
              action: () => {
                this.userDaemon?.spawnApp("systemSettings", +this.env.get("shell_pid"), "apps");
              },
            },
            {
              caption: "Okay",
              action: () => {},
              suggested: true,
            },
          ],
        },
        +this.env.get("shell_pid"),
        true
      );

      this.closeWindow();
      return;
    }
  }

  //#endregion
  //#region DISTRIB

  async revert() {
    // I don't know how well this revert works because a package install
    // has never really errored for me before.
    const gli = await this.userDaemon?.GlobalLoadIndicator("Rolling back changes...", this.pid);

    try {
      await this.fs.deleteItem(this.metadata!.installLocation);
      await this.userDaemon?.deleteApp(this.metadata!.appId, false);
    } catch {
      // Silently error
    }

    await gli?.stop();

    this.closeWindow();
  }

  runNow() {
    this.closeWindow();
    this.spawnApp(this.metadata!.appId, +this.env.get("shell_pid"));
  }

  // More of a middleman than a method imho
  async go() {
    this.progress?.go();
  }

  //#endregion
}
