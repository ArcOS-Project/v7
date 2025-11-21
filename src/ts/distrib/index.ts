import { Fs, Stack } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { Backend } from "$ts/server/axios";
import { Daemon } from "$ts/server/user/daemon";
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
import { AppInstallerProcess } from "./installer/appinstaller";
import { InstallerProcessBase } from "./installer/base";
import { LibraryInstallerProcess } from "./installer/libraryinstaller";

export class DistributionServiceProcess extends BaseService {
  private readonly dataFolder = join(UserPaths.Configuration, "DistribSvc");
  private readonly tempFolder = `T:/DistribSvcTemp`;
  private readonly installedStoreItemListPath = join(this.dataFolder, "Installed.json");
  private readonly installedPackagesListPath = join(this.dataFolder, "InstalledPackages.json");
  _BUSY: string = "";
  private installedStoreItemCache: StoreItem[] = [];
  private installedPackagesCache: ArcPackage[] = [];

  preferences: UserPreferencesStore;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.preferences = Daemon!.preferences;

    this.setSource(__SOURCE__);
  }

  async start() {
    try {
      await Fs.createDirectory(this.tempFolder, false);
    } catch {
      return false;
    }
    this.installedStoreItemCache = await this.loadInstalledStoreItemList();
    this.installedPackagesCache = await this.loadInstalledPackageList();
  }

  //#endregion
  //#region BUSY

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

  //#endregion
  //#region STORE ITEM CONFIG

  async addStoreItemToInstalled(item: StoreItem) {
    this.Log(`addStoreItemToInstalled: '${item._id}'`);

    if (this.checkBusy("addStoreItemToInstalled")) return undefined;

    const list = await this.loadInstalledStoreItemList();

    if (list.filter((l) => l._id === item._id)[0]) return false;

    list.push(item);

    return await this.writeInstalledStoreItemList(list);
  }

  async removeStoreItemFromInstalled(id: string) {
    this.Log(`removeStoreItemFromInstalled`);

    if (this.checkBusy("removeStoreItemFromInstalled")) return undefined;

    return await this.writeInstalledStoreItemList((await this.loadInstalledStoreItemList()).filter((s) => s._id !== id));
  }

  async removeStoreItemFromInstalledByAppId(id: string) {
    this.Log(`removeStoreItemFromInstalledByAppId`);

    if (this.checkBusy("removeStoreItemFromInstalledByAppId")) return undefined;

    return await this.writeInstalledStoreItemList((await this.loadInstalledStoreItemList()).filter((s) => s.pkg.appId !== id));
  }

  async loadInstalledStoreItemList(noCache = false) {
    if (this.installedStoreItemCache.length && !noCache) return this.installedStoreItemCache;

    try {
      const contents = await Fs.readFile(this.installedStoreItemListPath);

      if (!contents) {
        await this.writeInstalledStoreItemList([]);
        return [];
      }

      const json = tryJsonParse<StoreItem[]>(arrayToText(contents));

      if (typeof json === "string") {
        await this.writeInstalledStoreItemList([]);
        return [];
      }

      return json;
    } catch {
      return [];
    }
  }

  async writeInstalledStoreItemList(list: StoreItem[]) {
    this.Log(`writeInstalledStoreItemList: ${list.length} items`);

    if (this.checkBusy("writeInstalledStoreItemList")) return false;

    this.installedStoreItemCache = list;

    this.BUSY = "writeInstalledStoreItemList";

    try {
      await Fs.createDirectory(this.dataFolder, false);
      const result = await Fs.writeFile(
        this.installedStoreItemListPath,
        textToBlob(JSON.stringify(list, null, 2)),
        undefined,
        false
      );

      this.BUSY = "";

      return result;
    } catch {
      return false;
    }
  }

  async getInstalledStoreItemById(id: string): Promise<StoreItem | undefined> {
    return (await this.loadInstalledStoreItemList()).filter((s) => s.pkg.appId === id)[0];
  }

  //#endregion
  //#region PACKAGE CONFIG

  async addPackageToInstalled(item: ArcPackage) {
    this.Log(`addPackageToInstalled: '${item.appId}'`);

    if (this.checkBusy("addPackageToInstalled")) return undefined;

    const list = await this.loadInstalledPackageList();

    if (list.filter((l) => l.appId === item.appId)[0]) return false;

    list.push(item);

    return await this.writeInstalledPackageList(list);
  }

  async removePackageFromInstalled(id: string) {
    this.Log(`removePackageFromInstalled`);

    if (this.checkBusy("removePackageFromInstalled")) return undefined;

    return await this.writeInstalledPackageList((await this.loadInstalledPackageList()).filter((s) => s.appId !== id));
  }

  async loadInstalledPackageList() {
    if (this.installedPackagesCache.length) return this.installedPackagesCache;

    try {
      const contents = await Fs.readFile(this.installedPackagesListPath);

      if (!contents) {
        await this.writeInstalledPackageList([]);
        return [];
      }

      const json = tryJsonParse<ArcPackage[]>(arrayToText(contents));

      if (typeof json === "string") {
        await this.writeInstalledPackageList([]);
        return [];
      }

      return json;
    } catch {
      return [];
    }
  }

  async writeInstalledPackageList(list: ArcPackage[]) {
    this.Log(`writeInstalledPackageList: ${list.length} items`);

    if (this.checkBusy("writeInstalledPackageList")) return false;

    this.installedPackagesCache = list;

    this.BUSY = "writeInstalledPackageList";

    try {
      await Fs.createDirectory(this.dataFolder, false);
      const result = await Fs.writeFile(
        this.installedPackagesListPath,
        textToBlob(JSON.stringify(list, null, 2)),
        undefined,
        false
      );

      this.BUSY = "";

      return result;
    } catch {
      return false;
    }
  }

  async getInstalledPackageById(id: string): Promise<ArcPackage | undefined> {
    return (await this.loadInstalledPackageList()).filter((s) => s.appId === id)[0];
  }

  //#endregion
  //#region PACKAGES

  async uninstallPackage(appId: string, deleteFiles = false, onStage?: (stage: string) => void) {
    this.Log(`uninstallPackage: ${appId}, deleteFiles=${deleteFiles}`);

    const stage = (s: string) => {
      this.Log(`uninstallPackage: ${appId}: STAGE ${s}`);
      onStage?.(s);
    };

    if (this.checkBusy("uninstallPackage")) return false;
    this.BUSY = "uninstallPackage";

    const installedPkg = await this.getInstalledPackageById(appId);

    if (!installedPkg) {
      this.BUSY = "";
      return false;
    }

    const designatedProcess = this.getInstallerProcess(installedPkg);

    await designatedProcess.uninstallPackage(installedPkg, deleteFiles, stage);

    await this.removePackageFromInstalled(appId);
    await this.removeStoreItemFromInstalledByAppId(appId);

    this.BUSY = "";

    return true;
  }

  async packageInstallerFromPath<T = InstallerProcessBase>(
    path: string,
    progress?: FilesystemProgressCallback,
    item?: StoreItem
  ): Promise<T | undefined> {
    this.Log(`packageInstallerFromPath: ${path}, ${item?._id || "no store item"}`);

    if (this.checkBusy("packageInstallerFromPath")) return undefined;

    if (!(await this.validatePackage(path, progress))) return undefined;

    this.BUSY = "packageInstallerFromPath";

    const content = await Fs.readFile(path, progress);
    if (!content) return undefined;

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});
    const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
    const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

    this.BUSY = "";

    return await this.packageInstaller<T>(zip, metadata, item);
  }

  getInstallerProcess(metadata: ArcPackage): typeof InstallerProcessBase {
    switch (metadata.type) {
      case "library":
        return LibraryInstallerProcess;
      case "app":
      default:
        return AppInstallerProcess;
    }
  }

  async packageInstaller<T = InstallerProcessBase>(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<T | undefined> {
    this.Log(`packageInstaller: ${metadata.appId}, ${item?._id || "no store item"}`);

    if (this.checkBusy("packageInstaller")) return undefined;

    let designatedProcess = this.getInstallerProcess(metadata);

    const proc = await Stack.spawn(designatedProcess, undefined, Daemon!.userInfo?._id, this.pid, zip, metadata, item);

    return proc as T;
  }

  async validatePackage(path: string, progress?: FilesystemProgressCallback) {
    this.BUSY = "validatePackage";
    const content = await Fs.readFile(path, progress);

    if (!content) {
      this.BUSY = "";
      return false;
    }

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});

    if (!buffer.files["_metadata.json"]) {
      this.BUSY = "";
      return false;
    }

    const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
    const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

    if (!metadata || typeof metadata === "string") {
      this.BUSY = "";
      return false;
    }

    const designatedProcess = this.getInstallerProcess(metadata);
    const isValid = designatedProcess.validatePackage(metadata, buffer);

    this.BUSY = "";
    return isValid;
  }

  //#endregion
  //#region STORE ITEMS

  async getAllStoreItems(): Promise<StoreItem[]> {
    try {
      const response = await Backend.get("/store/list", { headers: { Authorization: `Bearer ${Daemon!.token}` } });

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

  async checkForStoreItemUpdate(id: string, installedList?: StoreItem[], allPackages?: StoreItem[]): Promise<UpdateInfo | false> {
    this.Log(`checkForStoreItemUpdate: ${id}`);

    if (this.checkBusy("checkForStoreItemUpdate")) return false;

    const installedPkg = await this.getInstalledStoreItem(id, installedList);
    if (!installedPkg) return false;

    const onlinePkg = allPackages ? allPackages.filter((p) => p._id === id)[0] : await this.getStoreItem(id);
    if (!onlinePkg) return false;

    const isHigher = compareVersion(installedPkg.pkg.version, onlinePkg.pkg.version) === "higher";

    return isHigher
      ? { oldVer: installedPkg.pkg.version, newVer: onlinePkg.pkg.version, name: installedPkg.name, pkg: installedPkg }
      : false;
  }

  async checkForAllStoreItemUpdates(list?: StoreItem[]) {
    this.Log(`checkForAllStoreItemUpdates`);

    if (this.checkBusy("checkForAllStoreItemUpdates")) return [];

    const allPackages = await this.getAllStoreItems();
    const installedList = list || (await this.loadInstalledStoreItemList());
    const result: UpdateInfo[] = [];

    for (const item of installedList) {
      const outdated = await this.checkForStoreItemUpdate(item._id, installedList, allPackages);
      if (outdated) result.push(outdated);
    }

    return result;
  }

  async updateStoreItem<T = InstallerProcessBase>(
    id: string,
    force = false,
    progress?: FilesystemProgressCallback
  ): Promise<T | false> {
    this.Log(`updateStoreItem: ${id}`);
    if (this.checkBusy("updateStoreItem")) return false;

    const outdated = force || (await this.checkForStoreItemUpdate(id));
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
    return installer as T;
  }

  async searchStoreItems(query: string) {
    this.Log(`searchStoreItems: ${query}`);

    try {
      const response = await Backend.get(`/store/search/${query}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data.results as PartialStoreItem[];
    } catch {
      return [];
    }
  }

  async getInstalledStoreItem(id: string, installedList?: StoreItem[], noCache?: boolean) {
    const installed = installedList || (await this.loadInstalledStoreItemList(noCache));

    return installed.filter((p) => p._id === id)[0];
  }

  async getStoreItem(id: string): Promise<StoreItem | undefined> {
    try {
      const response = await Backend.get(`/store/package/id/${id}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      const data = response.data as StoreItem;

      data.user = await Daemon!.account!.getPublicUserInfoOf(data.userId);

      return data as StoreItem;
    } catch {
      return undefined;
    }
  }

  async getStoreItemByName(name: string): Promise<StoreItem | undefined> {
    try {
      const response = await Backend.get(`/store/package/name/${name}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
      const result = await Fs.writeFile(path, arrayToBlob(buffer), undefined, false);
      if (!result) {
        return false;
      }
    } catch {
      return false;
    }

    return await this.packageInstallerFromPath(path, undefined, item);
  }

  //#endregion
  //#region PUBLISHING

  async publishing_publishPackage(data: Blob, onProgress?: FilesystemProgressCallback) {
    this.Log(`publishing_publishPackage: ${data.size} bytes`);

    if (this.checkBusy("publishing_publishPackage")) return false;

    this.BUSY = "publishing_publishPackage";
    try {
      const response = await Backend.post("/store/publish", data, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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

  async publishing_publishPackageFromPath(path: string, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    this.Log(`publishing_publishPackageFromPath: ${path}`);

    if (this.checkBusy("publishing_publishPackageFromPath")) return false;

    try {
      const content = await Fs.readFile(path, (p) => {
        onProgress?.({ ...p, what: "Loading package" });
      });

      if (!content) return false;

      return await this.publishing_publishPackage(arrayToBlob(content), onProgress);
    } catch {
      return false;
    }
  }

  async publishing_getPublishedPackages(): Promise<StoreItem[]> {
    try {
      const response = await Backend.get("/store/publish/list", {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data as StoreItem[];
    } catch {
      return [];
    }
  }

  async publishing_deprecateStoreItem(id: string): Promise<boolean> {
    this.Log(`publishing_deprecateStoreItem: ${id}`);

    try {
      const response = await Backend.post(
        `/store/publish/deprecate/${id}`,
        {},
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async publishing_deleteStoreItem(id: string): Promise<boolean> {
    this.Log(`publishing_deleteStoreItem: ${id}`);

    try {
      const response = await Backend.delete(`/store/publish/${id}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async publishing_updateStoreItem(itemId: string, newData: Blob, onProgress?: FilesystemProgressCallback) {
    this.Log(`publishing_updateStoreItem: ${itemId} -> ${newData.size} bytes`);

    if (this.checkBusy("publishing_updateStoreItem")) return false;

    this.BUSY = "publishing_updateStoreItem";

    try {
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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

  async publishing_updateStoreItemFromPath(itemId: string, updatePath: string, onProgress?: FilesystemProgressCallback) {
    this.Log(`publishing_updateStoreItemFromPath: ${itemId} -> ${updatePath}`);

    if (this.checkBusy("publishing_updateStoreItemFromPath")) return false;

    try {
      const contents = await Fs.readFile(updatePath, (p) => {
        onProgress?.({ ...p, what: "Loading update package" });
      });

      if (!contents) return false;

      const newData = arrayToBlob(contents);
      const response = await Backend.patch(`/store/publish/${itemId}`, newData, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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

  //#endregion
}

export const distributionService: Service = {
  name: "DistribSvc",
  description: "Handles the installation and distribution of ArcOS packages",
  process: DistributionServiceProcess,
  initialState: "started",
};
