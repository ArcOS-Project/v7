import type { IFilesystemDrive } from "$interfaces/fs";
import type { SharedDriveType } from "$types/shares";

export interface ISharedDrive extends IFilesystemDrive {
  shareId?: string;
  shareInfo: SharedDriveType;
}
