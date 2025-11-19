import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { DistributionServiceProcess } from "$ts/distrib";
import { tryJsonParse } from "$ts/json";
import { arrayToText } from "$ts/util/convert";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ArcPackage } from "$types/package";
import JSZip from "jszip";

export class AppPreInstallRuntime extends AppProcess {
  pkgPath: string;
  zip: JSZip | undefined;
  metadata = Store<ArcPackage>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, pkgPath: string) {
    super(pid, parentPid, app);

    this.pkgPath = pkgPath;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.pkgPath) return false;
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
                this.userDaemon?.spawn?.spawnApp("systemSettings", +this.env.get("shell_pid"), "apps");
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

    const prog = await this.userDaemon?.files!.FileProgress(
      {
        type: "size",
        icon: "DownloadIcon",
        caption: "Reading ArcOS package",
        subtitle: this.pkgPath,
      },
      +this.env.get("shell_pid")
    );

    try {
      const distrib = this.userDaemon?.serviceHost?.getService<DistributionServiceProcess>("DistribSvc")!;

      if (!(await distrib.validatePackage(this.pkgPath))) {
        return this.fail("Package is corrupt; missing files");
      }

      const content = await this.userDaemon?.fs.readFile(this.pkgPath, (progress) => {
        prog?.show();
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
      });

      await prog?.stop();

      if (!content) {
        return this.fail("The package contents could not be read");
      }

      this.zip = new JSZip();
      const buffer = await this.zip.loadAsync(content, {});
      const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
      const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));
      this.metadata.set(metadata);
    } catch {
      return this.fail("Filesystem error");
    }
  }

  //#endregion
  //#region DISTRIB

  fail(reason: string) {
    MessageBox(
      {
        title: "Failed to open package",
        message: `ArcOS failed to open the specified package. ${reason}`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      +this.env.get("shell_pid"),
      true
    );
    this.closeWindow();
  }

  async install() {
    const meta = this.metadata();
    const elevated = await this.userDaemon!.elevation!.manuallyElevate({
      what: "ArcOS wants to install an application",
      title: meta.name,
      description: `${meta.author} - ${meta.version}`,
      image: "ArcAppMimeIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    await this.closeWindow();
    this.spawnOverlayApp("AppInstaller", +this.env.get("shell_pid"), this.metadata, this.zip);
  }

  //#endregion
}
