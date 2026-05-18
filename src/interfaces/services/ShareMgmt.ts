import type { IFilesystemDrive } from "$interfaces/fs";
import type { IBaseService } from "$interfaces/service";
import type { FilesystemProgressCallback } from "$types/fs";
import type { SharedDriveType } from "$types/shares";

export interface IShareManager extends IBaseService {
  getOwnedShares(): Promise<SharedDriveType[]>;
  mountOwnedShares(): Promise<void>;
  getJoinedShares(): Promise<SharedDriveType[]>;
  createShare(name: string, password: string): Promise<SharedDriveType | undefined>;
  deleteShare(shareId: string): Promise<boolean>;
  changeSharePassword(shareId: string, newPassword: string): Promise<boolean>;
  renameShare(shareId: string, newName: string): Promise<boolean>;
  joinShare(
    username: string,
    shareName: string,
    password: string,
    mountAlso?: boolean
  ): Promise<boolean | IFilesystemDrive | undefined>;
  leaveShare(shareId: string): Promise<boolean>;
  unmountIfMounted(shareId: string): Promise<void>;
  kickUserFromShare(shareId: string, userId: string): Promise<boolean>;
  mountShare(
    username: string,
    shareName: string,
    letter?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<false | IFilesystemDrive | undefined>;
  mountShareById(shareId: string, letter?: string, onProgress?: FilesystemProgressCallback): Promise<false | IFilesystemDrive>;
  getShareMembers(shareId: string): Promise<Record<string, string>>;
  getShareInfoByName(username: string, shareName: string): Promise<SharedDriveType | undefined>;
  getShareInfoById(shareId: string): Promise<SharedDriveType | undefined>;
}
