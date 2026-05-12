import type { MultiUpdateStatus, MultiUpdateStatusNode } from "$apps/components/multiupdategui/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { InstallStatus, StoreItem } from "$types/package";
import type { ReadableStore } from "$types/writable";

export interface IMultiUpdateGuiRuntime extends IAppProcess {
  status: ReadableStore<MultiUpdateStatus>;
  currentPackage: ReadableStore<StoreItem | undefined>;
  working: ReadableStore<boolean>;
  done: ReadableStore<boolean>;
  errored: ReadableStore<string[]>;
  logs: ReadableStore<Record<string, InstallStatus>>;
  focused: ReadableStore<string>;
  showLog: ReadableStore<boolean>;
  unified: ReadableStore<boolean>;
  start(): Promise<false | undefined>;
  render(): Promise<void>;
  onClose(): Promise<boolean>;
  updatePackageStatus(appId: string, newData: Partial<MultiUpdateStatusNode>): void;
  packageFailed(appId: string): void;
  go(): Promise<void>;
  checkForErrors(): void;
  mainAction(): void;
  toggleLog(): void;
}
