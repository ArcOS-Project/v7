import { arrayToBlob, arrayToText, textToBlob } from "$ts/fs/convert";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ArcPackage, StoreItem } from "$types/package";
import JSZip from "jszip";
import { join } from "path";
import { InstallerProcess } from "./installer";

export class DistributionServiceProcess extends BaseService {
  private readonly dataFolder = join(UserPaths.Configuration, "DistribSvc");
  private readonly tempFolder = `T:/DistribSvcTemp`;
  private readonly installedListPath = join(this.dataFolder, "Installed.json");

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async start() {
    await this.fs.createDirectory(this.tempFolder);
  }

  async packageInstallerFromPath(path: string, progress?: FilesystemProgressCallback) {
    const content = await this.host.daemon.fs.readFile(path, progress);

    if (!content) return undefined;

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});

    if (!buffer.files["_metadata.json"] || !buffer.files["payload/_app.tpa"]) return undefined;

    const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
    const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

    if (!metadata || typeof metadata === "string") return undefined;
    if (metadata.appId.includes(".") || metadata.appId.includes("-")) {
      return undefined;
    }

    return await this.packageInstaller(zip, metadata);
  }

  async packageInstaller(zip: JSZip, metadata: ArcPackage) {
    const proc = await this.handler.spawn<InstallerProcess>(InstallerProcess, undefined, this.pid, zip, metadata);

    return {
      proc,
      status: proc!.status,
      failReason: proc!.failReason,
      installing: proc!.installing,
      completed: proc!.completed,
      focused: proc!.focused,
      verboseLog: proc!.verboseLog,
    };
  }

  async getStoreItem(id: string): Promise<StoreItem | undefined> {
    try {
      const response = await Backend.get(`/store/package/${id}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.data as StoreItem;
    } catch {
      return undefined;
    }
  }

  async downloadStoreItem(id: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    try {
      const response = await Backend.get(`/store/download/${id}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
        responseType: "arraybuffer",
        onDownloadProgress: (progress) => {
          onProgress?.({
            max: progress.total || 0,
            value: progress.loaded || 0,
            type: "size",
          });
        },
      });

      return response.data as ArrayBuffer;
    } catch {
      return undefined;
    }
  }

  async storeItemInstaller(id: string) {
    const buffer = await this.downloadStoreItem(id);
    const path = join(this.tempFolder, `${id}.arc`);
    if (!buffer) return false;

    const result = await this.fs.writeFile(path, arrayToBlob(buffer));
    if (!result) return false;

    return await this.packageInstallerFromPath(path);
  }

  async addToInstalled(item: StoreItem) {
    const list = await this.loadInstalledList();

    if (list.filter((l) => l._id === item._id)[0]) return false;

    list.push(item);

    return await this.writeInstalledList(list);
  }

  async loadInstalledList() {
    const contents = await this.fs.readFile(this.installedListPath);

    if (!contents) {
      await this.writeInstalledList([]);
      return [];
    }

    const json = tryJsonParse<StoreItem[]>(arrayToText(contents));

    if (typeof json === "string") {
      await this.writeInstalledList([]);
      return [];
    }

    return json;
  }

  async writeInstalledList(list: StoreItem[]) {
    await this.fs.createDirectory(this.dataFolder);

    return await this.fs.writeFile(this.installedListPath, textToBlob(JSON.stringify(list, null, 2)));
  }
}
