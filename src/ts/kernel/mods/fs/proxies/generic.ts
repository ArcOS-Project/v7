import type { IFilesystemProxy } from "$interfaces/fs";
import type { DirectoryReadReturn, FilesystemProgressCallback } from "$types/fs";

export class FilesystemProxy implements IFilesystemProxy {
  static PROXY_UUID = "";
  public uuid: string;
  public readonly displayName?: string;

  constructor(uuid: string) {
    this.uuid = uuid;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    return undefined;
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    return undefined;
  }
}
