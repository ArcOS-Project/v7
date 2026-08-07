import type { IAppPreInstallRuntime } from "$interfaces/runtimes/IAppPreinstallRuntime";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Env, Fs } from "$ts/env";
import { arrayBufferToText } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { tryJsonParse } from "$ts/util/json";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { ElevationLevel } from "$types/system/elevation";
import type { ArcPackage } from "$types/tpa/package";
import JSZip from "jszip";

export class AppPreInstallRuntime extends AppProcess implements IAppPreInstallRuntime {
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
    this.getBody().setAttribute("data-prefix", "apps.AppPreInstall");

    if (!this.userPreferences().security.enableThirdParty) {
      MessageBox(
        {
          title: "%apps.AppPreInstall.noEnableThirdParty.title%",
          message: "%apps.AppPreInstall.noEnableThirdParty.message%",
          image: "AppsIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "%apps.AppPreInstall.noEnableThirdParty.takeMeThere%",
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

    const prog = await Daemon?.files!.FileProgress(
      {
        type: "size",
        icon: "DownloadIcon",
        caption: "%apps.AppPreInstall.readingPackage%",
        subtitle: this.pkgPath,
      },
      +Env.get("shell_pid")
    );

    try {
      const distrib = Daemon?.serviceHost?.getService<IDistributionServiceProcess>("DistribSvc")!;

      if (!(await distrib.validatePackage(this.pkgPath))) {
        return this.fail("Package is corrupt; missing files");
      }

      const content = await Fs.readFile(this.pkgPath, (progress) => {
        prog?.show();
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
      });

      await prog?.stop();

      if (!content) {
        return this.fail("%apps.AppPreInstall.errors.noContents%");
      }

      this.zip = new JSZip();
      const buffer = await this.zip.loadAsync(content, {});

      if (!buffer.files["_metadata.json"] || !buffer.files["payload/_app.tpa"]) {
        return this.fail("%apps.AppPreInstall.errors.missingFiles%");
      }

      const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
      const metadata = tryJsonParse<ArcPackage>(arrayBufferToText(metaBinary));
      this.metadata.set(metadata);
    } catch {
      return this.fail("%apps.AppPreInstall.errors.fsError%");
    }
  }

  //#endregion
  //#region DISTRIB

  fail(reason: string) {
    this.Log(`Fail: ${reason}`);

    MessageBox(
      {
        title: "%apps.AppPreInstall.fail.title%",
        message: `%apps.AppPreInstall.fail.messagePartial% ${reason}`,
        buttons: [BTN_OKAY_SUG],
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
      what: "%apps.AppPreInstall.elevation.what%",
      title: meta.name,
      description: `%apps.AppPreInstall.elevation.description(${meta.author}::${meta.version})%`,
      image: "ArcAppMimeIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    await this.closeWindow();
    this.spawnOverlayApp("AppInstaller", +Env.get("shell_pid"), this.metadata, this.zip);
  }

  //#endregion
}
