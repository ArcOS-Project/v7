import type { IFilesystemDrive } from "$interfaces/fs";
import { Fs } from "$ts/env";
import type { DirectoryReadReturn, FilesystemProgressCallback } from "$types/fs";
import { FilesystemProxy } from "./generic";

export class MountsFilesystemProxy extends FilesystemProxy {
  static PROXY_UUID: string = "fedd3ed3-3550-4850-a7c4-c096b1907d91";

  constructor(uuid: string) {
    super(uuid);
  }

  private parsePath(path: string): { drive: IFilesystemDrive | undefined; path: string | undefined } {
    const parts = path.split("/").filter(Boolean);
    try {
      const drive = Fs.getDriveByPath(`${parts[0]}:/`);
      return { drive, path: path.replace(`${parts[0]}`, "").split("/").filter(Boolean).join("/") };
    } catch (e) {
      return { drive: undefined, path: undefined };
    }
  }

  async readFile(sourcePath: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    const { drive, path } = this.parsePath(sourcePath);

    if (!drive || !path) return undefined;

    return await drive.readFile(sourcePath, onProgress);
  }

  async readDir(sourcePath: string): Promise<DirectoryReadReturn | undefined> {
    if (!sourcePath || sourcePath == "/") {
      const result: DirectoryReadReturn = {
        files: [],
        dirs: [],
        totalFiles: 0,
        totalFolders: 0,
        totalSize: 0,
        shortcuts: {},
      };

      for (const driveId in Fs.drives) {
        const drive = Fs.drives[driveId];
        result.dirs.push({
          name: `${drive.uuid}`,
          dateCreated: new Date(),
          dateModified: new Date(),
          itemId: driveId,
        });
      }

      return result;
    }

    const { drive, path } = this.parsePath(sourcePath);
    if (!drive || path === undefined) return undefined;

    return await drive.readDir(path == "/" ? "" : path);
  }
}
