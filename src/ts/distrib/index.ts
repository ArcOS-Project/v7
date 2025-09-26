import type { ApplicationStorage } from "$ts/apps/storage";
import { KernelStack } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { Backend } from "$ts/server/axios";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToBlob, arrayToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { compareVersion } from "$ts/version";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ArcPackage, PartialStoreItem, StoreItem, UpdateInfo } from "$types/package";
import type { Service } from "$types/service";
import type { UserPreferencesStore } from "$types/user";
import JSZip from "jszip";
import { InstallerProcess } from "./installer";

export class DistributionServiceProcess extends BaseService {
  private readonly dataFolder = join(UserPaths.Configuration, "DistribSvc");
  private readonly tempFolder = `T:/DistribSvcTemp`;
  private readonly installedListPath = join(this.dataFolder, "Installed.json");
  _BUSY: string = "";
  private installListCache: StoreItem[] = [];

  preferences: UserPreferencesStore;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.preferences = host.daemon.preferences;

    this.setSource(__SOURCE__);
  }

  async start() {
    try {
      await this.fs.createDirectory(this.tempFolder);
    } catch {
      return false;
    }
    this.installListCache = await this.loadInstalledList();
  }

  //#endregion

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

  async packageInstaller(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<InstallerProcess | undefined> {
    this.Log(`packageInstaller: ${metadata.appId}, ${item?._id || "no store item"}`);

    if (this.checkBusy("packageInstaller")) return undefined;

    const proc = await KernelStack().spawn<InstallerProcess>(
      InstallerProcess,
      undefined,
      this.host.daemon.userInfo?._id,
      this.pid,
      zip,
      metadata,
      item
    );

    return proc;
  }

  async getStoreItem(id: string): Promise<StoreItem | undefined> {
    try {
      const response = await Backend.get(`/store/package/id/${id}`, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
      });

      const data = response.data as StoreItem;

      data.user = await this.host.daemon.getPublicUserInfoOf(data.userId);

      return data as StoreItem;
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

    try {
      const result = await this.fs.writeFile(path, arrayToBlob(buffer));
      if (!result) {
        return false;
      }
    } catch {
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
    if (this.installListCache.length) return this.installListCache;

    try {
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
    } catch {
      return [];
    }
  }

  async writeInstalledList(list: StoreItem[]) {
    this.Log(`writeInstalledList: ${list.length} items`);

    if (this.checkBusy("writeInstalledList")) return false;

    this.installListCache = list;

    this.BUSY = "writeInstalledList";

    try {
      await this.fs.createDirectory(this.dataFolder);
      const result = await this.fs.writeFile(this.installedListPath, textToBlob(JSON.stringify(list, null, 2)));

      this.BUSY = "";

      return result;
    } catch {
      return false;
    }
  }

  async publishPackage(data: Blob, onProgress?: FilesystemProgressCallback) {
    this.Log(`publishPackage: ${data.size} bytes`);

    if (this.checkBusy("publishPackage")) return false;

    this.BUSY = "publishPackage";
    try {
      const response = await Backend.post("/store/publish", data, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
        onUploadProgress: (ev) => {
          onProgress?.({
            max: ev.total || 0,
            value: ev.loaded,
            type: "size",
            what: "Uploading package",
          });
        },
      });

      this.BUSY = "";
      return response.status === 200;
    } catch {
      this.BUSY = "";
      return false;
    }
  }

  async publishPackageFromPath(path: string, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    this.Log(`publishPackageFromPath: ${path}`);

    if (this.checkBusy("publishPackageFromPath")) return false;

    try {
      const content = await this.fs.readFile(path, (p) => {
        onProgress?.({ ...p, what: "Loading package" });
      });

      if (!content) return false;

      return await this.publishPackage(arrayToBlob(content), onProgress);
    } catch {
      return false;
    }
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

  async updateStoreItem(itemId: string, newData: Blob, onProgress?: FilesystemProgressCallback) {
    this.Log(`updateStoreItem: ${itemId} -> ${newData.size} bytes`);

    if (this.checkBusy("updateStoreItem")) return false;

    this.BUSY = "updateStoreItem";

    try {
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
        onUploadProgress: (ev) => {
          onProgress?.({
            max: ev.total || 0,
            value: ev.loaded,
            type: "size",
            what: "Uploading update package",
          });
        },
      });

      this.BUSY = "";

      return response.status === 200;
    } catch {
      this.BUSY = "";

      return false;
    }
  }

  async updateStoreItemFromPath(itemId: string, updatePath: string, onProgress?: FilesystemProgressCallback) {
    this.Log(`updateStoreItemFromPath: ${itemId} -> ${updatePath}`);

    if (this.checkBusy("updateStoreItemFromPath")) return false;

    try {
      const contents = await this.fs.readFile(updatePath, (p) => {
        onProgress?.({ ...p, what: "Loading update package" });
      });

      if (!contents) return false;

      const newData = arrayToBlob(contents);
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${this.host.daemon.token}` },
        onUploadProgress: (ev) => {
          onProgress?.({
            max: ev.total || 0,
            value: ev.loaded,
            type: "size",
            what: "Uploading update package",
          });
        },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deprecateStoreItem(id: string): Promise<boolean> {
    this.Log(`deprecateStoreItem: ${id}`);

    try {
      const response = await Backend.post(
        `/store/publish/deprecate/${id}`,
        {},
        { headers: { Authorization: `Bearer ${this.host.daemon.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteStoreItem(id: string): Promise<boolean> {
    this.Log(`deleteStoreItem: ${id}`);

    try {
      const response = await Backend.delete(`/store/publish/${id}`, {
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
    this.Log(`uninstallApp: ${appId}, deleteFiles=${deleteFiles}`);

    const stage = (s: string) => {
      this.Log(`uninstallApp: ${appId}: STAGE ${s}`);
      onStage?.(s);
    };

    if (this.checkBusy("uninstallApp")) return false;

    const appStore = this.host.getService<ApplicationStorage>("AppStorage");
    const app = appStore?.getAppSynchronous(appId);

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

    await this.fs.deleteItem(join(UserPaths.AppRepository, `${appId}.json`));

    stage("Refreshing app store...");

    await appStore?.refresh();
    if (deleteFiles) {
      stage("Deleting app files...");
      try {
        await this.fs.deleteItem(app.workingDirectory!);
      } catch {}
    }

    this.host.daemon.unpinApp(appId);

    this.BUSY = "";

    return true;
  }

  async checkForUpdate(id: string, installedList?: StoreItem[], allPackages?: StoreItem[]): Promise<UpdateInfo | false> {
    this.Log(`checkForUpdate: ${id}`);

    if (this.checkBusy("checkForUpdate")) return false;

    const installedPkg = await this.getInstalledPackage(id, installedList);
    if (!installedPkg) return false;

    const onlinePkg = allPackages ? allPackages.filter((p) => p._id === id)[0] : await this.getStoreItem(id);
    if (!onlinePkg) return false;

    const isHigher = compareVersion(installedPkg.pkg.version, onlinePkg.pkg.version) === "higher";

    return isHigher
      ? { oldVer: installedPkg.pkg.version, newVer: onlinePkg.pkg.version, name: installedPkg.name, pkg: installedPkg }
      : false;
  }

  async checkForAllUpdates(list?: StoreItem[]) {
    this.Log(`checkForAllUpdates`);

    if (this.checkBusy("checkForAllUpdates")) return [];

    const allPackages = await this.getAllStoreItems();
    const installedList = list || (await this.loadInstalledList());
    const result: UpdateInfo[] = [];

    for (const item of installedList) {
      const outdated = await this.checkForUpdate(item._id, installedList, allPackages);
      if (outdated) result.push(outdated);
    }

    return result;
  }

  async updatePackage(id: string, force = false, progress?: FilesystemProgressCallback): Promise<InstallerProcess | false> {
    this.Log(`updatePackage: ${id}`);
    if (this.checkBusy("updatePackage")) return false;

    const outdated = force || (await this.checkForUpdate(id));
    if (!outdated) {
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

  async getAllStoreItems(): Promise<StoreItem[]> {
    try {
      const response = await Backend.get("/store/list", { headers: { Authorization: `Bearer ${this.host.daemon.token}` } });

      return response.data as StoreItem[];
    } catch {
      return [];
    }
  }

  async getStoreItemsByAuthor(userId: string): Promise<StoreItem[]> {
    const all = await this.getAllStoreItems();

    return all.filter((v) => v.userId === userId);
  }

  async storeItemReadme(id: string): Promise<string> {
    try {
      const response = await Backend.get(`/store/assets/${id}/readme`, { responseType: "text" });

      return response.data as string;
    } catch {
      return "";
    }
  }
}

export const distributionService: Service = {
  name: "DistribSvc",
  description: "Handles the installation and distribution of ArcOS packages",
  process: DistributionServiceProcess,
  initialState: "started",
};
