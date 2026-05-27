import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { SharedDriveType } from "$types/shares";

// !tpa
export interface ISharedDrive extends IFilesystemDrive {
  shareId?: string;
  shareInfo: SharedDriveType;
}
// !endtpa