import { KernelServerUrl } from "$ts/env";
import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import { authcode } from "$ts/util";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  ExtendedStat,
  FilesystemProgressCallback,
  FsAccess,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import { FilesystemDrive } from "../drives/drive";
import { arrayToBlob } from "../util/convert";
import { getItemNameFromPath, join } from "../util/fs";

export class SharedDrive extends FilesystemDrive {
  shareId: string | undefined;
  token: string;
  shareInfo: SharedDriveType;
  public IDENTIFIES_AS: string = "share";
  public FILESYSTEM_SHORT: string = "SDFS";
  public FILESYSTEM_LONG: string = "Shared Drive Filesystem";
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: true,
    readFile: true,
    writeFile: true,
    tree: true,
    copyItem: true,
    moveItem: true,
    deleteItem: true,
    direct: true,
    quota: true,
    bulk: true,
    stat: true,
    bulkytree: false
  };
  constructor(uuid: string, letter: string, info: SharedDriveType, token: string) {
    super(uuid, letter);

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
    const sourceFilename = getItemNameFromPath(source);

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

      return `${this.server.url}/share/direct/${this.shareId}/${data.accessor}${authcode()}`;
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

  async stat(path: string): Promise<ExtendedStat | undefined> {
    try {
      const response = await Backend.get(`/share/stat/${this.shareId}/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      const data = response.data as ExtendedStat;

      if (data.modifiers?.createdBy?.user) {
        data.modifiers.createdBy.user.profilePicture = `${KernelServerUrl}${data.modifiers.createdBy.user.profilePicture}`;
      }
      if (data.modifiers?.lastWrite?.user) {
        data.modifiers.lastWrite.user.profilePicture = `${KernelServerUrl}${data.modifiers.lastWrite.user.profilePicture}`;
      }

      return data as ExtendedStat;
    } catch {
      return undefined;
    }
  }

  async imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    try {
      const response = await Backend.get(`/share/thumbnail/${this.shareId}/${width}x${height ?? width}/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
        responseType: "arraybuffer",
      });

      if (response.status !== 200) return undefined;

      const blob = arrayToBlob(response.data, response.headers["Content-Type"]?.toString());
      const url = URL.createObjectURL(blob);

      return url;
    } catch {
      return undefined;
    }
  }
}
