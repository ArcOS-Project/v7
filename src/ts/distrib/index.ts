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
  _BUSY: string = "";

  preferences: UserPreferencesStore;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    this.preferences = host.daemon.preferences;
  }

  async start() {
    await this.fs.createDirectory(this.tempFolder);
  }

  async packageInstallerFromPath(path: string, progress?: FilesystemProgressCallback, item?: StoreItem) {
    this.Log(`packageInstallerFromPath: ${path}, ${item?._id || "no store item"}`);

    if (this.checkBusy("packageInstallerFromPath")) return undefined;

    this.BUSY = "packageInstallerFromPath";

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

    this.BUSY = "";

    return await this.packageInstaller(zip, metadata, item);
  }

  async packageInstaller(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<InstallerProcProgressNode | undefined> {
    this.Log(`packageInstaller: ${metadata.appId}, ${item?._id || "no store item"}`);

    if (this.checkBusy("packageInstaller")) return undefined;

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
    this.Log(`getStoreItem: ${id}`);

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
    this.Log(`getStoreItemByName: ${name}`);

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
    this.Log(`downloadStoreItem: '${id}'`);
    if (this.checkBusy("downloadStoreItem")) return undefined;

    this.BUSY = "downloadStoreItem";

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

      this.BUSY = "";

      return response.data as ArrayBuffer;
    } catch {
      this.BUSY = "";

      return undefined;
    }
  }

  async storeItemInstaller(id: string, onProgress?: FilesystemProgressCallback) {
    this.Log(`storeItemInstaller: '${id}'`);

    if (this.checkBusy("storeItemInstaller")) return undefined;

    const item = await this.getStoreItem(id);
    if (!item) {
      return false;
    }

    const buffer = await this.downloadStoreItem(id, onProgress);
    const path = join(this.tempFolder, `${id}.arc`);
    if (!buffer) {
      return false;
    }

    const result = await this.fs.writeFile(path, arrayToBlob(buffer));
    if (!result) {
      return false;
    }

    return await this.packageInstallerFromPath(path, undefined, item);
  }

  async addToInstalled(item: StoreItem) {
    this.Log(`addToInstalled: '${item._id}'`);

    if (this.checkBusy("addToInstalled")) return undefined;

    const list = await this.loadInstalledList();

    if (list.filter((l) => l._id === item._id)[0]) return false;

    list.push(item);

    return await this.writeInstalledList(list);
  }

  async removeFromInstalled(id: string) {
    this.Log(`removeFromInstalled`);

    if (this.checkBusy("removeFromInstalled")) return undefined;

    return await this.writeInstalledList((await this.loadInstalledList()).filter((s) => s._id !== id));
  }

  async loadInstalledList() {
    this.Log(`loadInstalledList`);

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
    this.Log(`writeInstalledList: ${list.length} items`);

    if (this.checkBusy("writeInstalledList")) return false;

    this.BUSY = "writeInstalledList";

    await this.fs.createDirectory(this.dataFolder);
    const result = await this.fs.writeFile(this.installedListPath, textToBlob(JSON.stringify(list, null, 2)));

    this.BUSY = "";

    return result;
  }

  async publishPackage(data: Blob) {
    this.Log(`publishPackage: ${data.size} bytes`);

    if (this.checkBusy("publishPackage")) return false;

    this.BUSY = "publishPackage";
    try {
      const response = await Backend.post("/store/publish", data, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      this.BUSY = "";
      return response.status === 200;
    } catch {
      this.BUSY = "";
      return false;
    }
  }

  async publishPackageFromPath(path: string): Promise<boolean> {
    this.Log(`publishPackageFromPath: ${path}`);

    if (this.checkBusy("publishPackageFromPath")) return false;

    const content = await this.fs.readFile(path);

    if (!content) return false;

    return await this.publishPackage(arrayToBlob(content));
  }

  async getPublishedPackages(): Promise<StoreItem[]> {
    this.Log(`getPublishedPackages`);

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
    this.Log(`searchStoreItems: ${query}`);

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
    this.Log(`updateStoreItem: ${itemId} -> ${newData.size} bytes`);

    if (this.checkBusy("updateStoreItem")) return false;

    this.BUSY = "updateStoreItem";

    try {
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      this.BUSY = "";

      return response.status === 200;
    } catch {
      this.BUSY = "";

      return false;
    }
  }

  async updateStoreItemFromPath(itemId: string, updatePath: string) {
    this.Log(`updateStoreItemFromPath: ${itemId} -> ${updatePath}`);

    if (this.checkBusy("updateStoreItemFromPath")) return false;

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
    this.Log(`getInstalledPackage: ${id}`);

    const installed = installedList || (await this.loadInstalledList());

    return installed.filter((p) => p._id === id)[0];
  }

  async getInstalledPackageByAppId(appId: string): Promise<StoreItem | undefined> {
    this.Log(`getInstalledPackageByAppId: ${appId}`);

    return (await this.loadInstalledList()).filter((s) => s.pkg.appId === appId)[0];
  }

  async uninstallApp(appId: string, deleteFiles = false, onStage?: (stage: string) => void) {
    this.Log(`uninstallApp: ${appId}, deleteFiles=${deleteFiles}`);

    const stage = (s: string) => {
      this.Log(`uninstallApp: ${appId}: STAGE ${s}`);
      onStage?.(s);
    };

    if (this.checkBusy("uninstallApp")) return false;

    const app = this.preferences().userApps[appId];
    const appStore = this.host.getService<ApplicationStorage>("AppStorage");

    if (!app) {
      this.Log(`uninstallApp: ${appId}: no such app`);
      return false;
    }

    this.BUSY = "uninstallApp";
    stage("Getting installed package");

    const installedPkg = await this.getInstalledPackageByAppId(appId);

    if (installedPkg) {
      stage("Removing package from installed...");

      this.BUSY = "";
      await this.removeFromInstalled(installedPkg._id);
      this.BUSY = "uninstallApp";
    }

    stage("Updating user preferences");

    this.preferences.update((v) => {
      delete v.userApps[appId];
      return v;
    });

    stage("Refreshing app store...");

    await appStore?.refresh();
    if (deleteFiles) {
      stage("Deleting app files...");
      await this.fs.deleteItem(app.workingDirectory!);
    }

    this.host.daemon.unpinApp(appId);

    this.BUSY = "";

    return true;
  }

  async checkForUpdate(
    id: string,
    installedList?: StoreItem[]
  ): Promise<{ name: string; oldVer: string; newVer: string; pkg: StoreItem } | false> {
    this.Log(`checkForUpdate: ${id}`);

    if (this.checkBusy("checkForUpdate")) return false;

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
    this.Log(`checkForAllUpdates`);

    if (this.checkBusy("checkForAllUpdates")) return [];

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
    this.Log(`updatePackage: ${id}`);
    if (this.checkBusy("updatePackage")) return false;

    const outdated = await this.checkForUpdate(id);
    if (!outdated && !force) {
      this.BUSY = "";
      return false;
    }

    const installer = await this.storeItemInstaller(id, progress);
    if (!installer) {
      this.BUSY = "";
      return false;
    }

    this.BUSY = "";
    return installer;
  }

  checkBusy(action?: string) {
    if (this.BUSY) {
      this.Log(`Refusing to perform '${action || "action"}': DistribSvc is busy with ${this._BUSY}`);
    }

    return this.BUSY;
  }

  get BUSY() {
    return this._BUSY;
  }

  set BUSY(value: string) {
    if (!value) {
      this.Log(`NOT BUSY: ${this._BUSY} is done`);
    } else {
      this.Log(`BUSY -> ${value}`);
    }

    this._BUSY = value;
  }
}

export const distributionService: Service = {
  name: "DistribSvc",
  description: "Handles the installation and distribution of ArcOS packages",
  process: DistributionServiceProcess,
  initialState: "started",
};
