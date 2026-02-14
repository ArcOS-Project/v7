import type { IFilesystemDrive } from "$interfaces/fs";
import { Daemon } from "$ts/daemon";
import { FilesystemDrive } from "$ts/kernel/mods/fs/drives/generic";
import { Backend } from "$ts/kernel/mods/server/axios";
import { authcode } from "$ts/util";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FilesystemStat,
  FsAccess,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";

export class AdminServerDrive extends FilesystemDrive implements IFilesystemDrive {
  private targetUsername: string;
  override READONLY = true;
  override FIXED = false;
  override IDENTIFIES_AS: string = "aefs";
  override FILESYSTEM_SHORT: string = "AEFS";
  override FILESYSTEM_LONG: string = "Admin Enforcement FS";
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: false,
    readFile: true,
    writeFile: false,
    tree: true,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    direct: true,
    quota: true,
    bulk: true,
    stat: true,
  };

  constructor(uuid: string, letter: string, targetUsername: string) {
    super(uuid, letter);

    this.targetUsername = targetUsername;
    this.label = targetUsername;
  }

  async _spinUp(): Promise<boolean> {
    return true;
  }
  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    onProgress?.({
      value: 0,
      max: 0,
      type: "items",
    });
    return false;
  }

  async createDirectory(path: string): Promise<boolean> {
    return false;
  }

  async deleteItem(path: string): Promise<boolean> {
    return false;
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    return false;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    return false;
  }

  async readDir(path: string = ""): Promise<DirectoryReadReturn | undefined> {
    try {
      const response = await Backend.get<DirectoryReadReturn>(
        path ? `/admin/fs/dir/${this.targetUsername}/${path}` : `/admin/fs/dir/${this.targetUsername}`,
        {
          headers: { Authorization: `Bearer ${Daemon!.token}` },
        }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async readFile(path: string, onProgress: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path]) throw new Error(`Not reading locked file '${path}'`);

    try {
      const response = await Backend.get(`/admin/fs/file/${this.targetUsername}/${path}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        responseType: "arraybuffer",
        onDownloadProgress: (progress) => {
          onProgress({
            max: progress.total || 0,
            value: progress.loaded || 0,
            type: "size",
          });
        },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async tree(path: string = ""): Promise<RecursiveDirectoryReadReturn | undefined> {
    try {
      const response = await Backend.get(
        path ? `/admin/fs/tree/${this.targetUsername}/${path}` : `/admin/fs/tree/${this.targetUsername}`,
        {
          headers: { Authorization: `Bearer ${Daemon!.token}` },
        }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Backend.get(`/admin/fs/quota/${this.targetUsername}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data as UserQuota;
    } catch {
      return {
        used: 0,
        max: 0,
        free: 0,
        percentage: 0,
      };
    }
  }

  async direct(path: string): Promise<string | undefined> {
    try {
      const response = await Backend.post(
        `/admin/fs/direct/${this.targetUsername}/${path}`,
        {},
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
      );

      const data = response.data as FsAccess;

      return `${this.server.url}/fs/direct/${data.userId}/${data.accessor}${authcode()}`;
    } catch {
      return undefined;
    }
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    try {
      const response = await Backend.get(`/admin/fs/bulk/${this.targetUsername}/${extension}/${path}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      if (response.status !== 200) return {};

      const data = response.data as Record<string, any>;

      return data;
    } catch {
      return {};
    }
  }

  async stat(path: string): Promise<FilesystemStat | undefined> {
    try {
      const response = await Backend.get(`/admin/fs/stat/${this.targetUsername}/${path}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data as FilesystemStat;
    } catch {
      return undefined;
    }
  }
}
