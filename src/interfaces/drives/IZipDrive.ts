import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { FilesystemProgressCallback } from "$types/system/fs";

export interface IZipDrive extends IFilesystemDrive {
  _sync(progress?: FilesystemProgressCallback): Promise<void>;
}
