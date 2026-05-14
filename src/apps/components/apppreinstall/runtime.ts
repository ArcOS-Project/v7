import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Env } from "$ts/env";
import type { DistributionServiceProcess } from "$ts/servicehost/services/DistribSvc";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import { ArchiveReaderProcess } from "$ts/zip";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ArcPackage } from "$types/package";

export class AppPreInstallRuntime extends AppProcess {
  pkgPath: string;
  metadata = Store<ArcPackage>();
  reader?: ArchiveReaderProcess;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, pkgPath: string) {
    super(pid, parentPid, app);

    this.pkgPath = pkgPath;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.pkgPath) return false;
  }

  async stop() {
    await this.reader?.close();
  }

  async render() {
    if (!this.userPreferences().security.enableThirdParty) {
      MessageBox(
        {
          title: "Can't install app",
          message:
            "Third-party apps aren't enabled on your account. Please enable third-party apps in the Settings to install this app.",
          image: "AppsIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Take me there",
              action: () => {
                this.spawnApp("systemSettings", +Env.get("shell_pid"), "apps");
              },
            },
            {
              caption: "Okay",
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

    const prog = await Daemon?.files!.FileProgress(
      {
        type: "size",
        icon: "ArcAppMimeIcon",
        caption: "Reading ArcOS package",
        subtitle: this.pkgPath,
      },
      +Env.get("shell_pid")
    );

    try {
      const distrib = Daemon?.serviceHost?.getService<DistributionServiceProcess>("DistribSvc")!;

      this.reader = await ArchiveReaderProcess.Create(this.pkgPath, this.pid);
      await this.reader?.open((progress) => {
        prog?.show();
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
      });

      await prog?.stop();

      if (!(await distrib.validatePackageFromReader(this.reader!))) {
        return this.fail("Package is corrupt; missing files");
      }

      const metadataResult = await this.reader?.getJson<ArcPackage>("_metadata.json");
      if (!metadataResult?.success) return this.fail("Package does not contain valid metadata");

      this.metadata.set(metadataResult.result!);
    } catch {
      return this.fail("Filesystem error");
    }
  }

  //#endregion
  //#region DISTRIB

  fail(reason: string) {
    this.Log(`Fail: ${reason}`);

    MessageBox(
      {
        title: "Failed to open package",
        message: `ArcOS failed to open the specified package. ${reason}`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      +Env.get("shell_pid"),
      true
    );
    this.closeWindow();
  }

  async install() {
    this.Log(`Proceeding with installation`);

    const meta = this.metadata();
    const elevated = await Daemon!.elevation!.manuallyElevate({
      what: "ArcOS wants to install an application",
      title: meta.name,
      description: `${meta.author} - ${meta.version}`,
      image: "ArcAppMimeIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    await this.closeWindow();
    this.spawnOverlayApp("AppInstaller", +Env.get("shell_pid"), this.metadata, this.reader?.ZIP);
  }

  //#endregion
}
