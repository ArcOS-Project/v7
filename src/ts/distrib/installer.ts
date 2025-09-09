import type { ApplicationStorage } from "$ts/apps/storage";
import { arrayToBlob } from "$ts/fs/convert";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { UserDaemon } from "$ts/server/user/daemon";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { ArcPackage, InstallStatus, InstallStatusMode, InstallStatusType, StoreItem } from "$types/package";
import { fromExtension } from "human-filetypes";
import type JSZip from "jszip";
import { DistributionServiceProcess } from ".";

export class InstallerProcess extends Process {
  status = Store<InstallStatus>({});
  failReason = Store<string>();
  installing = Store<boolean>(false);
  completed = Store<boolean>(false);
  focused = Store<string>();
  verboseLog: string[] = [];
  metadata?: ArcPackage;
  userDaemon: UserDaemon;
  parent: DistributionServiceProcess;
  TOTAL_COUNT = Store<number>(2);
  COUNT = Store<number>(0);
  item?: StoreItem;
  zip?: JSZip;

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, zip: JSZip, metadata: ArcPackage, item: StoreItem) {
    super(handler, pid, parentPid);

    this.userDaemon = handler.getProcess(+this.env.get("userdaemon_pid"))!;

    if (metadata && zip) {
      this.metadata = metadata;
      this.zip = zip;
      this.verboseLog.push("Constructing process");
    }

    if (item) this.item = item;

    this.parent = this.userDaemon?.serviceHost?.getService<DistributionServiceProcess>("DistribSvc")!;
    this.name = "InstallerProcess";
  }

  async start() {
    this.TOTAL_COUNT.set(this.TOTAL_COUNT() + Object.keys((await this.getFiles()).files).length);

    this.TOTAL_COUNT.subscribe((v) => {
      this.Log(`TOTAL_COUNT is now ${v}`);
    });

    this.COUNT.subscribe((v) => {
      this.Log(`COUNT is now ${v} / ${this.TOTAL_COUNT()}`);
    });
  }

  async stop() {
    await this.onStop();
    return true;
  }

  //#endregion

  logStatus(content: string, type: InstallStatusType = "other", status: InstallStatusMode = "working") {
    this.Log(`[${status} | ${type}] ${content}`);
    this.verboseLog.push(`${status}: ${type}: ${content}`);

    const uuid = UUID();

    this.setCurrentStatus("done");
    this.status.update((v) => {
      v[uuid] = { content, type, status };
      return v;
    });
    this.focused.set(uuid);

    this.COUNT.set(this.COUNT() + 1);
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

  async getFiles() {
    this.Log("getFiles");

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
    this.Log("createInstallLocation");

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
    this.Log("registerApp");

    this.logStatus(this.metadata!.name, "registration");

    try {
      const result = await this.userDaemon?.installAppFromPath(join(this.metadata!.installLocation, "_app.tpa"));
      if (!result) {
        this.setCurrentStatus("done");
        if (this.item) await this.parent.addToInstalled(this.item!);
        return true;
      }

      throw result;
    } catch (e) {
      this.fail(`Could not register: ${e}`);
      return false;
    }
  }

  async mkdir(path: string): Promise<boolean> {
    this.Log("mkdir: " + path);

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
    this.Log(`writeFile: ${path} ${content.byteLength}`);

    const formattedPath = path.replace(`${this.metadata!.installLocation}/`, "");
    this.logStatus(formattedPath, "file");

    try {
      await this.fs.writeFile(path, arrayToBlob(content, fromExtension(path)), (prog) => {
        // this.setCurrentContent(`${formattedPath} (${((100 / prog.max) * prog.value).toFixed(1)}%)`);
      });

      // this.setCurrentContent(formattedPath);
      // this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to write ${formattedPath}`);
      return false;
    }
  }

  fail(reason: string) {
    this.Log("fail: " + reason);

    this.installing.set(false);
    this.verboseLog.push(`INSTALL FAILED: ${reason}`);

    this.setCurrentStatus("failed");
    this.failReason.set(reason);
    this.killSelf();
  }

  async go() {
    this.Log("GO!");
    this.parent!.BUSY = "InstallerProcess";
    this.installing.set(true);

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
        if (!(await this.mkdir(target))) {
          this.parent!.BUSY = "";
          return false;
        }
      } else {
        if (!(await this.writeFile(target, await item.async("arraybuffer")))) {
          this.parent!.BUSY = "";
          return false;
        }
      }
    }

    this.parent!.BUSY = "";

    if (!(await this.registerApp())) {
      return false;
    }

    this.checkDesktopIcon();

    this.installing.set(false);
    this.completed.set(true);
    this.COUNT.set(this.COUNT() + 1);
    this.killSelf();
    return true;
  }

  async checkDesktopIcon() {
    if (!this.item) return;

    const existing = this.userDaemon.preferences().pinnedApps.includes(this.metadata?.appId!);
    const appStore = this.userDaemon.serviceHost?.getService<ApplicationStorage>("AppStorage");

    if (existing) return;

    this.userDaemon?.sendNotification({
      title: `Pin ${this.metadata?.name}`,
      message: `Do you want to pin ${this.metadata?.name} to the taskbar so that you can easily launch it in the future?`,
      image: this.userDaemon.getAppIcon((await appStore?.getAppById(this.metadata?.appId!))!),
      buttons: [
        {
          caption: "Pin to taskbar",
          action: () => {
            this.userDaemon.pinApp(this.metadata?.appId!);
          },
        },
      ],
    });
  }

  public async onStop() {
    /** */
  }
}
