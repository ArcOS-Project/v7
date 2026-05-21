import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { SharedDriveType } from "$types/shares";

export interface ISharedDrive extends IFilesystemDrive {
  shareId?: string;
  shareInfo: SharedDriveType;
}
