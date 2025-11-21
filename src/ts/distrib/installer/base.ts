import { Fs } from "$ts/env";
import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import { arrayToBlob } from "$ts/util/convert";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { ArcPackage, InstallStatus, InstallStatusMode, InstallStatusType, StoreItem } from "$types/package";
import { fromExtension } from "human-filetypes";
import type JSZip from "jszip";
import type { DistributionServiceProcess } from "..";

export class InstallerProcessBase extends Process {
  protected verboseLog: string[] = [];
  protected metadata?: ArcPackage;
  protected item?: StoreItem;
  protected workingDirectory: string = "";
  protected zip?: JSZip;
  protected MISC_STEPCOUNT = 2;
  parent: DistributionServiceProcess;
  failReason = Store<string>();
  installing = Store<boolean>(false);
  TOTAL_COUNT = Store<number>(this.MISC_STEPCOUNT);
  completed = Store<boolean>(false);
  COUNT = Store<number>(0);
  focused = Store<string>();
  status = Store<InstallStatus>({});

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, zip: JSZip, metadata: ArcPackage, item: StoreItem) {
    super(pid, parentPid);

    if (metadata && zip) {
      this.metadata = metadata;
      this.zip = zip;
      this.verboseLog.push("Constructing process");
    }

    if (item) this.item = item;

    this.parent = Daemon?.serviceHost?.getService<DistributionServiceProcess>("DistribSvc")!;
    this.name = "InstallerProcess";

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.initialize();

    this.TOTAL_COUNT.subscribe((v) => {
      this.Log(`TOTAL_COUNT is now ${v}`);
    });

    this.COUNT.subscribe((v) => {
      this.Log(`COUNT is now ${v} / ${this.TOTAL_COUNT()}`);
    });

    if (!this.item) {
      const determinedStoreItem = await this.parent.getStoreItemByName(this.metadata?.appId!);

      if (determinedStoreItem) this.item = determinedStoreItem;
    }
  }

  async initialize() {
    /** */
  }

  protected async afterSuccessfulInstallation(): Promise<any> {
    /** */
    return false;
  }

  protected async afterFailedInstallation(): Promise<any> {
    /** */
    return false;
  }

  async stop() {
    await this.onStop();
  }

  public async onStop() {
    /** */
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

  fail(reason: string) {
    this.Log("fail: " + reason);

    this.installing.set(false);
    this.verboseLog.push(`INSTALL FAILED: ${reason}`);

    this.setCurrentStatus("failed");
    this.failReason.set(reason);
    this.killSelf();
  }

  async __go() {
    if (!this.workingDirectory) throw new Error("Can't install package without a working directory.");

    this.Log(`Beginning execution of ${this.name}: ${this.metadata?.name} (${this.metadata?.version})`);
    this.parent!.BUSY = this.name;
    this.installing.set(true);

    const goResult = await this.go();

    if (!goResult) {
      this.parent.BUSY = `${this.name}_afterFailedInstallation`;
      await this.afterFailedInstallation();
      this.parent.BUSY = "";
      return false;
    } else {
      if (this.item) {
        this.parent.BUSY = "";
        await this.parent.addStoreItemToInstalled(this.item!);
        await this.parent.addPackageToInstalled(this.metadata!);
      }

      this.parent.BUSY = `${this.name}_afterSuccessfulInstallation`;
      await this.afterSuccessfulInstallation();
      this.completed.set(true);
      this.parent.BUSY = "";
      return true;
    }
  }

  async go(): Promise<boolean> {
    /** */
    return false;
  }

  async mkdir(path: string): Promise<boolean> {
    this.Log("mkdir: " + path);

    const formattedPath = path.replace(`${this.workingDirectory}/`, "");
    this.logStatus(formattedPath, "mkdir");

    try {
      await Fs.createDirectory(path, false);
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to create folder ${formattedPath}`);
      return false;
    }
  }

  async writeFile(path: string, content: ArrayBuffer): Promise<boolean> {
    this.Log(`writeFile: ${path} ${content.byteLength}`);

    const formattedPath = path.replace(`${this.workingDirectory}/`, "");
    this.logStatus(formattedPath, "file");

    try {
      await Fs.writeFile(
        path,
        arrayToBlob(content, fromExtension(path)),
        (prog) => {
          // this.setCurrentContent(`${formattedPath} (${((100 / prog.max) * prog.value).toFixed(1)}%)`);
        },
        false
      );

      // this.setCurrentContent(formattedPath);
      // this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to write ${formattedPath}`);
      return false;
    }
  }

  async createInstallLocation(): Promise<boolean> {
    this.Log("createInstallLocation");

    this.logStatus(this.workingDirectory, "mkdir");
    try {
      await Fs.createDirectory(this.workingDirectory, false);
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to create destination folder`);
      return false;
    }
  }

  async getFiles() {
    this.Log("getFiles");

    const files = Object.fromEntries(
      Object.entries(this.zip!.files)
        .filter(([k]) => k.startsWith("payload/"))
        .map(([k, v]) => [k.replace("payload/", ""), v])
    );

    const sortedPaths = Object.keys(files).sort((p) => (files[p].dir ? -1 : 0));

    return { files, sortedPaths };
  }

  public static async validatePackage(metadata: ArcPackage, zip: JSZip): Promise<boolean> {
    /** */
    return false;
  }

  static async uninstallPackage(metadata: ArcPackage, deleteFiles?: boolean, onStage?: (stage: string) => void) {
    /** */
  }
}
