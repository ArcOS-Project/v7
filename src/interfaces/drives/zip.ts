import type { IFilesystemDrive } from "$interfaces/fs";
import type { FilesystemProgressCallback } from "$types/fs";

export interface IZipDrive extends IFilesystemDrive {
  _sync(progress?: FilesystemProgressCallback): Promise<void>;
}
