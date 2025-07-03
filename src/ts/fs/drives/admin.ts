import type { WaveKernel } from "$ts/kernel";
import { Backend } from "$ts/server/axios";
import { authcode } from "$ts/util";
import type {
  DirectoryReadReturn,
  FilesystemProgressCallback,
  FsAccess,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import { FilesystemDrive } from "../drive";

export class AdminServerDrive extends FilesystemDrive {
  private targetUsername: string;
  private token: string;
  override READONLY = true;
  override FIXED = false;
  override IDENTIFIES_AS: string = "admin";
  override FILESYSTEM_SHORT: string = "AFS";
  override FILESYSTEM_LONG: string = "Admin Filesystem";

  constructor(kernel: WaveKernel, uuid: string, letter: string, token: string, targetUsername: string) {
    super(kernel, uuid, letter);

    this.token = token;
    this.targetUsername = targetUsername;
    this.label = targetUsername;
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    try {
      await this.readDir("");
      await this.quota();
      await this.tree("");
      return true;
    } catch {
      return false;
    }
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
          headers: { Authorization: `Bearer ${this.token}` },
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
        headers: { Authorization: `Bearer ${this.token}` },
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
          headers: { Authorization: `Bearer ${this.token}` },
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
        headers: { Authorization: `Bearer ${this.token}` },
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
        { headers: { Authorization: `Bearer ${this.token}` } }
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
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.status !== 200) return {};

      const data = response.data as Record<string, any>;

      return data;
    } catch {
      return {};
    }
  }
}
