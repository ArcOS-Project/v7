import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IShareManager } from "$interfaces/services/IShareManager";
import type { SharedDriveType } from "$types/shares";
import type { ReadableStore, StringStore } from "$types/writable";

export interface IShareMgmtGuiRuntime extends IAppProcess {
  members: ReadableStore<Record<string, string>>;
  info?: SharedDriveType;
  shares: IShareManager;
  shareId: string;
  selectedMember: StringStore;
  myShare: boolean;

  updateMembers(): Promise<void>;
  kickUser(id: string, username: string): Promise<void>;
  deleteShare(): Promise<void>;
}
