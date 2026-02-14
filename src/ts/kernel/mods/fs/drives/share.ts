import type { ISharedDrive } from "$interfaces/fs";
import { Daemon } from "$ts/daemon";
import { Server } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { authcode } from "$ts/util";
import { arrayBufferToBlob } from "$ts/util/convert";
import { toForm } from "$ts/util/form";
import { getItemNameFromPath, join } from "$ts/util/fs";
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
import { FilesystemDrive } from "./generic";

export class SharedDrive extends FilesystemDrive implements ISharedDrive {
  shareId: string | undefined;
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
    try {
      const response = await Backend.get<DirectoryReadReturn>(
        path ? `/share/dir/${this.shareId}/${path}` : `/share/dir/${this.shareId}`,
        {
          headers: { Authorization: `Bearer ${Daemon!.token}` },
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
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
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

  async writeFile(path: string, blob: Blob, onProgress: FilesystemProgressCallback): Promise<boolean> {
    try {
      const response = await Backend.post(`/share/file/${this.shareId}/${path}`, blob, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
          headers: { Authorization: `Bearer ${Daemon!.token}` },
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
          headers: { Authorization: `Bearer ${Daemon!.token}` },
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
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Backend.get(`/share/quota/${this.shareId}`, {
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
        `/share/accessor/${this.shareId}/${path}`,
        {},
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
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
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });
      const data = response.data as ExtendedStat;

      if (data.modifiers?.createdBy?.user) {
        data.modifiers.createdBy.user.profilePicture = `${Server.url}${data.modifiers.createdBy.user.profilePicture}`;
      }
      if (data.modifiers?.lastWrite?.user) {
        data.modifiers.lastWrite.user.profilePicture = `${Server.url}${data.modifiers.lastWrite.user.profilePicture}`;
      }

      return data as ExtendedStat;
    } catch {
      return undefined;
    }
  }

  async imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    try {
      const response = await Backend.get(`/share/thumbnail/${this.shareId}/${width}x${height ?? width}/${path}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        responseType: "arraybuffer",
      });

      if (response.status !== 200) return undefined;

      const blob = arrayBufferToBlob(response.data, response.headers["Content-Type"]?.toString());
      const url = URL.createObjectURL(blob);

      return url;
    } catch {
      return undefined;
    }
  }
}
