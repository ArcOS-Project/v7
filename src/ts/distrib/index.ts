import { arrayToBlob, arrayToText, textToBlob } from "$ts/fs/convert";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ArcPackage, PartialStoreItem, StoreItem } from "$types/package";
import type { Service } from "$types/service";
import JSZip from "jszip";
import { InstallerProcess } from "./installer";
import { join } from "$ts/fs/util";
import type { InstallerProcProgressNode } from "$types/distrib";
import type { UserPreferencesStore } from "$types/user";
import type { ApplicationStorage } from "$ts/apps/storage";
import { compareVersion } from "$ts/version";

export class DistributionServiceProcess extends BaseService {
  private readonly dataFolder = join(UserPaths.Configuration, "DistribSvc");
  private readonly tempFolder = `T:/DistribSvcTemp`;
  private readonly installedListPath = join(this.dataFolder, "Installed.json");
  preferences: UserPreferencesStore;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    this.preferences = host.daemon.preferences;
  }

  async start() {
    await this.fs.createDirectory(this.tempFolder);
  }

  async packageInstallerFromPath(path: string, progress?: FilesystemProgressCallback, item?: StoreItem) {
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

    return await this.packageInstaller(zip, metadata, item);
  }

  async packageInstaller(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<InstallerProcProgressNode> {
    const proc = await this.handler.spawn<InstallerProcess>(InstallerProcess, undefined, this.pid, zip, metadata, item);

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
      const response = await Backend.get(`/store/package/id/${id}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.data as StoreItem;
    } catch {
      return undefined;
    }
  }

  async getStoreItemByName(name: string): Promise<StoreItem | undefined> {
    try {
      const response = await Backend.get(`/store/package/name/${name}`, {
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

  async storeItemInstaller(id: string, onProgress?: FilesystemProgressCallback) {
    const item = await this.getStoreItem(id);
    if (!item) return false;

    const buffer = await this.downloadStoreItem(id, onProgress);
    const path = join(this.tempFolder, `${id}.arc`);
    if (!buffer) return false;

    const result = await this.fs.writeFile(path, arrayToBlob(buffer));
    if (!result) return false;

    return await this.packageInstallerFromPath(path, undefined, item);
  }

  async addToInstalled(item: StoreItem) {
    const list = await this.loadInstalledList();

    if (list.filter((l) => l._id === item._id)[0]) return false;

    list.push(item);

    return await this.writeInstalledList(list);
  }

  async removeFromInstalled(id: string) {
    return await this.writeInstalledList((await this.loadInstalledList()).filter((s) => s._id !== id));
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

  async publishPackage(data: Blob) {
    try {
      const response = await Backend.post("/store/publish", data, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async publishPackageFromPath(path: string): Promise<boolean> {
    const content = await this.fs.readFile(path);

    if (!content) return false;

    return await this.publishPackage(arrayToBlob(content));
  }

  async getPublishedPackages(): Promise<StoreItem[]> {
    try {
      const response = await Backend.get("/store/publish/list", {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.data as StoreItem[];
    } catch {
      return [];
    }
  }

  async searchStoreItems(query: string) {
    try {
      const response = await Backend.get(`/store/search/${query}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.data.results as PartialStoreItem[];
    } catch {
      return [];
    }
  }

  async updateStoreItem(itemId: string, newData: Blob) {
    try {
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async updateStoreItemFromPath(itemId: string, updatePath: string) {
    const contents = await this.fs.readFile(updatePath);

    if (!contents) return false;

    try {
      const newData = arrayToBlob(contents);
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getInstalledPackage(id: string, installedList?: StoreItem[]) {
    const installed = installedList || (await this.loadInstalledList());

    return installed.filter((p) => p._id === id)[0];
  }

  async getInstalledPackageByAppId(appId: string): Promise<StoreItem | undefined> {
    return (await this.loadInstalledList()).filter((s) => s.pkg.appId === appId)[0];
  }

  async uninstallApp(appId: string, deleteFiles = false, onStage?: (stage: string) => void) {
    const app = this.preferences().userApps[appId];
    const appStore = this.host.getService<ApplicationStorage>("AppStorage");

    if (!app) return false;

    onStage?.("Getting installed package");

    const installedPkg = await this.getInstalledPackageByAppId(appId);

    if (installedPkg) {
      onStage?.("Removing package from installed...");

      await this.removeFromInstalled(installedPkg._id);
    }

    onStage?.("Updating user preferences");

    this.preferences.update((v) => {
      delete v.userApps[appId];
      return v;
    });

    onStage?.("Refreshing app store...");

    await appStore?.refresh();
    if (deleteFiles) {
      onStage?.("Deleting app files...");
      await this.fs.deleteItem(app.workingDirectory!);
    }

    this.host.daemon.unpinApp(appId);

    return true;
  }

  async checkForUpdate(
    id: string,
    installedList?: StoreItem[]
  ): Promise<{ name: string; oldVer: string; newVer: string; pkg: StoreItem } | false> {
    const installedPkg = await this.getInstalledPackage(id, installedList);
    if (!installedPkg) return false;

    const onlinePkg = await this.getStoreItem(id);
    if (!onlinePkg) return false;

    const isHigher = compareVersion(installedPkg.pkg.version, onlinePkg.pkg.version) === "higher";

    return isHigher
      ? { oldVer: installedPkg.pkg.version, newVer: onlinePkg.pkg.version, name: installedPkg.name, pkg: installedPkg }
      : false;
  }

  async checkForAllUpdates() {
    const installedList = await this.loadInstalledList();
    const result: { name: string; oldVer: string; newVer: string; pkg: StoreItem }[] = [];

    for (const item of installedList) {
      const outdated = await this.checkForUpdate(item._id, installedList);
      if (outdated) result.push(outdated);
    }

    return result;
  }

  async updatePackage(
    id: string,
    force = false,
    progress?: FilesystemProgressCallback
  ): Promise<InstallerProcProgressNode | false> {
    const outdated = await this.checkForUpdate(id);
    if (!outdated && !force) return false;

    const installer = await this.storeItemInstaller(id, progress);
    if (!installer) return false;

    return installer;
  }
}

export const distributionService: Service = {
  name: "DistribSvc",
  description: "Handles the installation and distribution of ArcOS packages",
  process: DistributionServiceProcess,
  initialState: "started",
};
