import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText } from "$ts/fs/convert";
import { ErrorIcon } from "$ts/images/dialog";
import { DownloadIcon } from "$ts/images/filesystem";
import { AppsIcon } from "$ts/images/general";
import { ArcAppMimeIcon } from "$ts/images/mime";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ArcPackage } from "$types/package";
import JSZip from "jszip";

export class AppPreInstallRuntime extends AppProcess {
  pkgPath: string;
  zip: JSZip | undefined;
  metadata = Store<ArcPackage>();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, pkgPath: string) {
    super(handler, pid, parentPid, app);

    this.pkgPath = pkgPath;
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

    const prog = await this.userDaemon?.FileProgress(
      {
        type: "size",
        icon: DownloadIcon,
        caption: "Reading ArcOS package",
        subtitle: this.pkgPath,
        waiting: true,
      },
      +this.env.get("shell_pid")
    );

    try {
      const content = await this.userDaemon?.fs.readFile(this.pkgPath, (progress) => {
        prog?.show();
        prog?.setWork(true);
        prog?.setWait(false);
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
      });

      await prog?.stop();

      if (!content) {
        return this.fail("The package contents could not be read");
      }

      this.zip = new JSZip();
      const buffer = await this.zip.loadAsync(content, {});

      if (!buffer.files["_metadata.json"] || !buffer.files["payload/_app.tpa"]) {
        return this.fail("Package is corrupt; missing package or app metadata.");
      }

      const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
      const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

      if (!metadata || typeof metadata === "string") {
        return this.fail("The package metadata could not be read");
      }

      if (metadata.appId.includes(".") || metadata.appId.includes("-")) {
        return this.fail(
          "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs."
        );
      }

      this.metadata.set(metadata);
    } catch {
      return this.fail("Filesystem error");
    }
  }

  fail(reason: string) {
    MessageBox(
      {
        title: "Failed to open package",
        message: `ArcOS failed to open the specified package. ${reason}`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: ErrorIcon,
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
      what: "ArcOS wants to install an application",
      title: meta.name,
      description: `${meta.author} - ${meta.version}`,
      image: ArcAppMimeIcon,
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    await this.closeWindow();
    this.spawnOverlayApp("AppInstaller", +this.env.get("shell_pid"), this.metadata, this.zip);
  }
}
