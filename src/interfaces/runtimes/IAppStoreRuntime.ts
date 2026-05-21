import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IInstallerProcessBase } from "$interfaces/IInstallerProcessBase";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import type { FilesystemProgressCallback } from "$types/fs";
import type { StoreItem } from "$types/package";
import type { BooleanStore, ReadableStore, StringStore } from "$types/writable";

export interface IAppStoreRuntime extends IAppProcess {
  searchQuery: StringStore;
  loadingPage: BooleanStore;
  pageProps: ReadableStore<Record<string, any>>;
  searching: BooleanStore;
  currentPage: StringStore;
  operations: Record<string, IInstallerProcessBase>;
  distrib: IDistributionServiceProcess;

  switchPage(id: string, props?: Record<string, any>, force?: boolean): Promise<void>;
  Search(): Promise<void>;
  installPackage(
    pkg: StoreItem,
    onDownloadProgress?: FilesystemProgressCallback
  ): Promise<false | 0 | IInstallerProcessBase | "elevateCancel">;
  updatePackage(pkg: StoreItem, onDownloadProgress?: FilesystemProgressCallback): Promise<false | 0 | IInstallerProcessBase>;
  deprecatePackage(pkg: StoreItem): Promise<boolean>;
  deletePackage(pkg: StoreItem): Promise<boolean>;
  publishPackage(): Promise<boolean>;
  updateStoreItem(pkg: StoreItem): Promise<void>;
  readmeFallback(pkg: StoreItem): string;
  learnMoreBlocking(): void;
  registerOperation(id: string, proc: IInstallerProcessBase): boolean;
  discardOperation(id: string): boolean;
  getRunningOperation(pkg: StoreItem): IInstallerProcessBase | undefined;
  viewImage(url: string, name?: string): Promise<void>;
}
