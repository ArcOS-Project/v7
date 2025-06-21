import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { AppsIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { InstallerProcProgressNode } from "$types/distrib";
import type { ArcPackage } from "$types/package";
import JSZip from "jszip";

export class AppInstallerRuntime extends AppProcess {
  progress?: InstallerProcProgressNode;
  metadata?: ArcPackage;
  zip?: JSZip;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    metadata: ReadableStore<ArcPackage>,
    zip: JSZip
  ) {
    super(handler, pid, parentPid, app);

    if (metadata && zip) {
      this.metadata = metadata();
      this.zip = zip;
    }
  }

  async start() {
    if (!(this.zip instanceof JSZip) || !this.metadata) return false;

    this.progress = await this.userDaemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!.packageInstaller(
      this.zip,
      this.metadata
    );
  }

  async render() {
    if (!this.userPreferences().security.enableThirdParty) {
      MessageBox(
        {
          title: "Can't install app",
          message:
            "Third-party apps aren't enabled on your account. Please enable third-party apps in the Settings to install this app.",
          image: AppsIcon,
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

  async revert() {
    const gli = await this.userDaemon?.GlobalLoadIndicator("Rolling back changes...", this.pid);

    await this.fs.deleteItem(this.metadata!.installLocation);
    await this.userDaemon?.deleteApp(this.metadata!.appId, false);
    await gli?.stop();

    this.closeWindow();
  }

  runNow() {
    this.closeWindow();
    this.spawnApp(this.metadata!.appId, +this.env.get("shell_pid"));
  }

  async go() {
    this.progress?.proc?.go();
  }
}
