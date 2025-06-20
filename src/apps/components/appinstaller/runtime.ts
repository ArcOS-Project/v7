import { AppProcess } from "$ts/apps/process";
import { arrayToBlob, textToBlob } from "$ts/fs/convert";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { UUID } from "$ts/uuid";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ArcPackage } from "$types/package";
import { fromExtension } from "human-filetypes";
import JSZip from "jszip";
import type { InstallStatus, InstallStatusMode, InstallStatusType } from "./types";
import { AppsIcon } from "$ts/images/general";
import { MessageBox } from "$ts/dialog";
import { UserPaths } from "$ts/server/user/store";

export class AppInstallerRuntime extends AppProcess {
  status = Store<InstallStatus>({});
  failReason = Store<string>();
  installing = Store<boolean>(false);
  completed = Store<boolean>(false);
  focused = Store<string>();
  verboseLog: string[] = [];
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
      this.verboseLog.push("Constructing process");
    }
  }

  async start() {
    if (!(this.zip instanceof JSZip) || !this.metadata) return false;

    this.verboseLog.push("Validated JSZip instance");
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

  logStatus(content: string, type: InstallStatusType = "other", status: InstallStatusMode = "working") {
    this.verboseLog.push(`${status}: ${type}: ${content}`);

    const uuid = UUID();

    this.setCurrentStatus("done");
    this.status.update((v) => {
      v[uuid] = { content, type, status };
      return v;
    });
    this.focused.set(uuid);
  }

  async setCurrentStatus(status: InstallStatusMode) {
    if (!this.focused()) return;

    this.verboseLog.push(`Setting status ${this.focused()} to ${status}`);

    this.status.update((v) => {
      v[this.focused()].status = status;
      return v;
    });
  }

  async setCurrentContent(content: string) {
    if (!this.focused()) return;

    this.verboseLog.push(`Setting status ${this.focused()} to ${status}`);

    this.status.update((v) => {
      v[this.focused()].content = content;
      return v;
    });
  }

  fail(reason: string) {
    this.installing.set(false);
    this.verboseLog.push(`INSTALL FAILED: ${reason}`);

    this.setCurrentStatus("failed");
    this.failReason.set(reason);
  }

  async viewLog() {
    this.verboseLog.push("Writing T:/InstallerApp_Verbose.log");

    await this.fs.writeFile("T:/InstallerApp_Verbose.log", textToBlob(this.verboseLog.join("\n")));
    this.spawnApp("writer", +this.env.get("shell_pid"), "T:/InstallerApp_Verbose.log");
    this.closeWindow();
  }

  async go() {
    this.installing.set(true);
    if (!(await this.createInstallLocation())) return;

    const { files, sortedPaths } = await this.getFiles();

    for (const path of sortedPaths) {
      if (!path) continue;
      const target = join(this.metadata!.installLocation, path);
      const item = files[path];

      if (!item) continue;
      if (item.dir) {
        if (!(await this.mkdir(target))) return;
      } else {
        if (!(await this.writeFile(target, await item.async("arraybuffer")))) return;
      }
    }

    if (!(await this.registerApp())) return;

    this.installing.set(false);
    this.completed.set(true);
  }

  async getFiles() {
    const files = Object.fromEntries(
      Object.entries(this.zip!.files)
        .filter(([k]) => k.startsWith("payload/"))
        .map(([k, v]) => [k.replace("payload/", ""), v])
    );

    // First, create all directories
    const sortedPaths = Object.keys(files).sort((p) => (files[p].dir ? -1 : 0));

    return { files, sortedPaths };
  }

  async createInstallLocation(): Promise<boolean> {
    this.logStatus(this.metadata!.installLocation, "mkdir");
    try {
      await this.fs.createDirectory(this.metadata!.installLocation);
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to create destination folder`);
      return false;
    }
  }

  async registerApp(): Promise<boolean> {
    this.logStatus(this.metadata!.name, "registration");

    try {
      const result = await this.userDaemon?.installAppFromPath(join(this.metadata!.installLocation, "_app.tpa"));
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

  async mkdir(path: string): Promise<boolean> {
    const formattedPath = path.replace(`${this.metadata!.installLocation}/`, "");
    this.logStatus(formattedPath, "mkdir");

    try {
      await this.fs.createDirectory(path);
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to create folder ${formattedPath}`);
      return false;
    }
  }

  async writeFile(path: string, content: ArrayBuffer): Promise<boolean> {
    const formattedPath = path.replace(`${this.metadata!.installLocation}/`, "");
    this.logStatus(formattedPath, "file");

    try {
      await this.fs.writeFile(path, arrayToBlob(content, fromExtension(path)), (prog) => {
        this.setCurrentContent(`${formattedPath} (${((100 / prog.max) * prog.value).toFixed(1)}%)`);
      });

      this.setCurrentContent(formattedPath);
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to write ${formattedPath}`);
      return false;
    }
  }

  async onClose(): Promise<boolean> {
    return !this.installing();
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
}
