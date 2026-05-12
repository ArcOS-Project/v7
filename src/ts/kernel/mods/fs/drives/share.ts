import type { ISharedDrive } from "$interfaces/drives/ISharedDrive";
import type { IShareConnector } from "$interfaces/modules/server/IShareConnector";
import { Daemon } from "$ts/env";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  ExtendedStat,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import { FilesystemDrive } from "./generic";

export class SharedDrive extends FilesystemDrive implements ISharedDrive {
  shareId: string | undefined;
  shareInfo: SharedDriveType;
  public IDENTIFIES_AS: string = "share";
  public FILESYSTEM_SHORT: string = "SDFS";
  public FILESYSTEM_LONG: string = "Shared Drive Filesystem";
  public override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: true,
    readFile: true,
    writeFile: true,
    copyItem: true,
    moveItem: true,
    deleteItem: true,
    tree: true,
    direct: true,
    bulk: true,
    stat: true,
    quota: true,
  };
  constructor(uuid: string, letter: string, info: SharedDriveType) {
    super(uuid, letter);

    this.shareInfo = info;
  }

  async _spinUp(): Promise<boolean> {
    try {
      this.shareId = this.shareInfo._id.toString();
      this.label = `${this.shareInfo.shareName}`;

      return true;
    } catch {
      return false;
    }
  }

  async readDir(path: string = ""): Promise<DirectoryReadReturn | undefined> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").DirGet(this.shareId!, path);
    return response.result;
  }

  async createDirectory(path: string): Promise<boolean> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").DirPost(this.shareId!, path);
    return response.success;
  }

  async readFile(path: string, onProgress: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path]) throw new Error(`Not reading locked file '${path}'`);

    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").FileGet(this.shareId!, path, onProgress);
    return response.result;
  }

  async writeFile(path: string, blob: Blob, onProgress: FilesystemProgressCallback): Promise<boolean> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").FilePost(this.shareId!, path, blob, onProgress);
    return response.success;
  }

  async tree(path: string = ""): Promise<RecursiveDirectoryReadReturn | undefined> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").TreeGet(this.shareId!, path);
    return response.result!;
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").CpPost(this.shareId!, source, destination);
    return response.success!;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").MvPost(this.shareId!, source, destination);
    return response.success!;
  }

  async deleteItem(path: string): Promise<boolean> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").RmDelete(this.shareId!, path);
    return response.success!;
  }

  async quota(): Promise<UserQuota> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").QuotaGet(this.shareId!);
    return (
      response.result ?? {
        used: 0,
        max: 0,
        free: 0,
        percentage: 0,
      }
    );
  }

  async direct(path: string): Promise<string | undefined> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").AccessorPost(this.shareId!, path);
    return response.result;
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").BulkGet<T>(this.shareId!, extension, path);
    return response.result ?? {};
  }

  async stat(path: string): Promise<ExtendedStat | undefined> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").StatGet(this.shareId!, path);
    return response.result;
  }

  async imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    const response = await Daemon.GetConnector<IShareConnector>("ShareConnector").ThumbnailGet(
      this.shareId!,
      path,
      width,
      height
    );

    return response.result;
  }
}
