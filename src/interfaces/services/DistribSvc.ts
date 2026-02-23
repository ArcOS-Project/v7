import type { Constructs } from "$interfaces/common";
import type { IInstallerProcessBase } from "$interfaces/distrib";
import type { IBaseService } from "$interfaces/service";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ArcPackage, PartialStoreItem, StoreItem, UpdateInfo } from "$types/package";
import type { UserPreferencesStore } from "$types/user";
import type JSZip from "jszip";

export interface IDistributionServiceProcess extends IBaseService {
  _BUSY: string;
  preferences: UserPreferencesStore;
  start(): Promise<false | undefined>;
  checkBusy(action?: string): string;
  get BUSY(): string;
  set BUSY(value: string);
  addStoreItemToInstalled(item: StoreItem): Promise<boolean | undefined>;
  removeStoreItemFromInstalled(id: string): Promise<boolean | undefined>;
  removeStoreItemFromInstalledByAppId(id: string): Promise<boolean | undefined>;
  loadInstalledStoreItemList(noCache?: boolean): Promise<StoreItem[]>;
  writeInstalledStoreItemList(list: StoreItem[]): Promise<boolean>;
  getInstalledStoreItemById(id: string): Promise<StoreItem | undefined>;
  addPackageToInstalled(item: ArcPackage): Promise<boolean | undefined>;
  removePackageFromInstalled(id: string): Promise<boolean | undefined>;
  loadInstalledPackageList(): Promise<ArcPackage[]>;
  writeInstalledPackageList(list: ArcPackage[]): Promise<boolean>;
  getInstalledPackageByAppId(id: string): Promise<ArcPackage | undefined>;
  getInstalledStoreItemByAppId(id: string): Promise<StoreItem | undefined>;
  uninstallPackage(appId: string, deleteFiles?: boolean, onStage?: (stage: string) => void): Promise<boolean>;
  packageInstallerFromPath<T = IInstallerProcessBase>(
    path: string,
    progress?: FilesystemProgressCallback,
    item?: StoreItem
  ): Promise<T | undefined>;
  getInstallerProcess(metadata: ArcPackage): Constructs<IInstallerProcessBase>;
  packageInstaller<T = IInstallerProcessBase>(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<T | undefined>;
  validatePackage(path: string, progress?: FilesystemProgressCallback): Promise<boolean>;
  getAllStoreItems(): Promise<StoreItem[]>;
  getStoreItemsByAuthor(userId: string): Promise<StoreItem[]>;
  storeItemReadme(id: string): Promise<string>;
  checkForStoreItemUpdate(id: string, installedList?: StoreItem[], allPackages?: StoreItem[]): Promise<UpdateInfo | false>;
  checkForAllStoreItemUpdates(list?: StoreItem[]): Promise<UpdateInfo[]>;
  updateStoreItem<T = IInstallerProcessBase>(
    id: string,
    force?: boolean,
    progress?: FilesystemProgressCallback
  ): Promise<T | false>;
  searchStoreItems(query: string): Promise<PartialStoreItem[]>;
  getInstalledStoreItem(id: string, installedList?: StoreItem[], noCache?: boolean): Promise<StoreItem>;
  getStoreItem(id: string): Promise<StoreItem | undefined>;
  getStoreItemByName(name: string): Promise<StoreItem | undefined>;
  downloadStoreItem(id: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
  storeItemInstaller(id: string, onProgress?: FilesystemProgressCallback): Promise<false | IInstallerProcessBase | undefined>;
  publishing_publishPackage(data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_publishPackageFromPath(path: string, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_getPublishedPackages(): Promise<StoreItem[]>;
  publishing_deprecateStoreItem(id: string): Promise<boolean>;
  publishing_deleteStoreItem(id: string): Promise<boolean>;
  publishing_updateStoreItem(itemId: string, newData: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_updateStoreItemFromPath(
    itemId: string,
    updatePath: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean>;
}