import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IShareManager } from "$interfaces/services/IShareManager";
import type { SharedDriveType } from "$types/shares";
import type { ReadableStore } from "$types/writable";

export interface IShareListGuiRuntime extends IAppProcess {
  ownedShares: ReadableStore<SharedDriveType[]>;
  joinedShares: ReadableStore<SharedDriveType[]>;
  selectedShare: ReadableStore<string>;
  selectedIsOwn: ReadableStore<boolean>;
  selectedIsMounted: ReadableStore<boolean>;
  loading: ReadableStore<boolean>;
  shares: IShareManager;
  thisUserId: string;

  start(): Promise<void>;
  manageShare(): Promise<void>;
  leaveShare(): Promise<void>;
  mountShare(): Promise<void>;
  openShare(): Promise<void>;
  createShare(): Promise<void>;
}
