import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
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
                this.userDaemon?.spawnApp("systemSettings", +this.env.get("shell_pid"), "apps");
              },
            },
            {
              caption: "%general.okay%",
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

    const prog = await this.userDaemon?.FileProgress(
      {
        type: "size",
        icon: "DownloadIcon",
        caption: "%apps.AppPreInstall.readingPackage%",
        subtitle: this.pkgPath,
      },
      +this.env.get("shell_pid")
    );

    try {
      const content = await this.userDaemon?.fs.readFile(this.pkgPath, (progress) => {
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
      const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

      if (!metadata || typeof metadata === "string") {
        return this.fail("%apps.AppPreInstall.errors.noMeta%");
      }

      if (metadata.appId.includes(".") || metadata.appId.includes("-")) {
        return this.fail("%apps.AppPreInstall.errors.appIdMalformed%");
      }

      this.metadata.set(metadata);
    } catch {
      return this.fail("%apps.AppPreInstall.errors.fsError%");
    }
  }

  //#endregion
  //#region DISTRIB

  fail(reason: string) {
    MessageBox(
      {
        title: "%apps.AppPreInstall.fail.title%",
        message: `%apps.AppPreInstall.fail.messagePartial% ${reason}`,
        buttons: [{ caption: "%general.okay%", action: () => {}, suggested: true }],
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
    const elevated = await this.userDaemon?.manuallyElevate({
      what: "%apps.AppPreInstall.elevation.what%",
      title: meta.name,
      description: `%apps.AppPreInstall.elevation.description(${meta.author}::${meta.version})%`,
      image: "ArcAppMimeIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    await this.closeWindow();
    this.spawnOverlayApp("AppInstaller", +this.env.get("shell_pid"), this.metadata, this.zip);
  }

  //#endregion
}
