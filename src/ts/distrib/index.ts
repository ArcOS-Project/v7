import { arrayToBlob } from "$ts/fs/convert";
import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { Store } from "$ts/writable";
import type {
  ArcPackage,
  InstallStatus,
  InstallStatusMode,
  InstallStatusType,
  PartialStoreItem,
  StoreItem,
} from "$types/package";
import { fromExtension } from "human-filetypes";
import type JSZip from "jszip";

export class DistributionServiceProcess extends BaseService {
  status = Store<InstallStatus>({});
  failReason = Store<string>();
  installing = Store<boolean>(false);
  completed = Store<boolean>(false);
  focused = Store<string>();
  verboseLog: string[] = [];
  metadata?: ArcPackage;
  zip?: JSZip;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
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

  async searchStoreItems(query: string): Promise<PartialStoreItem[]> {
    try {
      const result = await Backend.get(`/store/search/${query}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return result.data as PartialStoreItem[];
    } catch {
      return [];
    }
  }

  async getStoreItem(id: string): Promise<StoreItem | undefined> {
    try {
      const result = await Backend.get(`/store/package/${id}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return result.data as StoreItem;
    } catch {
      return undefined;
    }
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
    this.installing.set(false);
    this.verboseLog.push(`INSTALL FAILED: ${reason}`);

    this.setCurrentStatus("failed");
    this.failReason.set(reason);
  }
}
