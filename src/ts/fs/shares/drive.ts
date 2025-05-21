import { toForm } from "$ts/form";
import type { WaveKernel } from "$ts/kernel";
import { Backend } from "$ts/server/axios";
import type {
  DirectoryReadReturn,
  FilesystemProgressCallback,
  FsAccess,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import { FilesystemDrive } from "../drive";
import { getDirectoryName, join } from "../util";

export class SharedDrive extends FilesystemDrive {
  shareId: string | undefined;
  token: string;
  shareInfo: SharedDriveType;
  public IDENTIFIES_AS: string = "share";
  public FILESYSTEM_SHORT: string = "SDFS";
  public FILESYSTEM_LONG: string = "Shared Drive Filesystem";

  constructor(kernel: WaveKernel, uuid: string, letter: string, info: SharedDriveType, token: string) {
    super(kernel, uuid, letter);

    this.token = token;
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
    try {
      const response = await Backend.get<DirectoryReadReturn>(
        path ? `/share/dir/${this.shareId}/${path}` : `/share/dir/${this.shareId}`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    try {
      const response = await Backend.post<DirectoryReadReturn>(
        `/share/dir/${this.shareId}/${path}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readFile(path: string, onProgress: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path]) throw new Error(`Not reading locked file '${path}'`);

    try {
      const response = await Backend.get(`/share/file/${this.shareId}/${path}`, {
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

  async writeFile(path: string, blob: Blob, onProgress: FilesystemProgressCallback): Promise<boolean> {
    try {
      const response = await Backend.post(`/share/file/${this.shareId}/${path}`, blob, {
        headers: { Authorization: `Bearer ${this.token}` },
        onUploadProgress: (progress) => {
          onProgress({
            max: progress.total || 0,
            value: progress.loaded || 0,
            type: "size",
          });
        },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async tree(path: string = ""): Promise<RecursiveDirectoryReadReturn | undefined> {
    try {
      const response = await Backend.get(path ? `/share/tree/${this.shareId}/${path}` : `/share/tree/${this.shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const sourceFilename = getDirectoryName(source);

    try {
      const response = await Backend.post(
        `/share/cp/${this.shareId}/${source}`,
        toForm({
          destination: destination.endsWith(sourceFilename) ? destination : join(destination, sourceFilename),
        }),
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    if (this.fileLocks[source]) throw new Error(`Not moving locked file '${source}'`);

    try {
      const response = await Backend.post(
        `/share/mv/${this.shareId}/${source}`,
        toForm({
          destination,
        }),
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteItem(path: string): Promise<boolean> {
    if (this.fileLocks[path]) throw new Error(`Not deleting locked file '${path}'`);

    try {
      const response = await Backend.delete(`/share/rm/${this.shareId}/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Backend.get(`/share/quota/${this.shareId}`, {
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
        `/share/accessor/${this.shareId}/${path}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      const data = response.data as FsAccess;

      return `${this.server.url}/share/direct/${this.shareId}/${data.accessor}?authcode=${
        import.meta.env.DW_SERVER_AUTHCODE || ""
      }`;
    } catch {
      return undefined;
    }
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    try {
      const response = await Backend.get(`/share/bulk/${this.shareId}/${extension}/${path}`, {
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
