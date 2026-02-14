import type { IFilesystemDrive } from "$interfaces/fs";
import type { IEnvironment } from "$interfaces/kernel";
import { Daemon } from "$ts/daemon";
import { getKMod, Server } from "$ts/env";
import { FilesystemDrive } from "$ts/kernel/mods/fs/drives/generic";
import { Backend } from "$ts/kernel/mods/server/axios";
import { ArcBuild } from "$ts/metadata/build";
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

export class UserDrive extends FilesystemDrive implements IFilesystemDrive {
  private isNightly = false;
  override label = "Your Drive";
  override FIXED = true;
  public IDENTIFIES_AS: string = "userfs";
  public FILESYSTEM_SHORT: string = "UFS";
  public FILESYSTEM_LONG: string = "User Filesystem";
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

  constructor(uuid: string, letter: string) {
    super(uuid, letter);

    this.isNightly = !!getKMod<IEnvironment>("env").get(`NIGHTLY_WHODIS_${ArcBuild()}`);
  }

  async readDir(path: string = ""): Promise<DirectoryReadReturn | undefined> {
    try {
      const response = await Backend.get<DirectoryReadReturn>(path ? `/fs/dir/${path}` : `/fs/dir`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    if (this.isNightly) {
      this.Log(`userfs createDirectory prohibited: nightly build`);

      return true;
    }

    try {
      const response = await Backend.post<DirectoryReadReturn>(
        `/fs/dir/${path}`,
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
      const response = await Backend.get(`/fs/file/${path}`, {
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
    if (this.isNightly) {
      this.Log(`userfs writeFile prohibited: nightly build`);

      return true;
    }

    try {
      const response = await Backend.post(`/fs/file/${path}`, blob, {
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
      const response = await Backend.get(path ? `/fs/tree/${path}` : `/fs/tree`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    if (this.isNightly) {
      this.Log(`userfs copyItem prohibited: nightly build`);

      return true;
    }

    const sourceFilename = getItemNameFromPath(source);

    try {
      const response = await Backend.post(
        `/fs/cp/${source}`,
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
    if (this.isNightly) {
      this.Log(`userfs moveItem prohibited: nightly build`);

      return true;
    }

    if (this.fileLocks[source]) throw new Error(`Not moving locked file '${source}'`);

    try {
      const response = await Backend.post(
        `/fs/mv/${source}`,
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
    if (this.isNightly) {
      this.Log(`userfs deleteItem prohibited: nightly build`);

      return true;
    }

    if (this.fileLocks[path]) throw new Error(`Not deleting locked file '${path}'`);

    try {
      const response = await Backend.delete(`/fs/rm/${path}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Backend.get("/fs/quota", {
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
      const response = await Backend.post(`/fs/accessors/${path}`, {}, { headers: { Authorization: `Bearer ${Daemon!.token}` } });

      const data = response.data as FsAccess;

      return `${this.server.url}/fs/direct/${data.userId}/${data.accessor}${authcode()}`;
    } catch {
      return undefined;
    }
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    try {
      const response = await Backend.get(`/fs/bulk/${extension}/${path}`, {
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
      const response = await Backend.get(`/fs/stat/${path}`, { headers: { Authorization: `Bearer ${Daemon!.token}` } });
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
      const response = await Backend.get(`/fs/thumbnail/${width}x${height ?? width}/${path}`, {
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
