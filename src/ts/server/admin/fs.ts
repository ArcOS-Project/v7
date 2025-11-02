import { FilesystemDrive } from "$ts/drives/drive";
import { toForm } from "$ts/form";
import { arrayToBlob } from "$ts/util/convert";
import { getItemNameFromPath, join } from "$ts/util/fs";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FilesystemStat,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import { Backend } from "../axios";

export class AdminFileSystem extends FilesystemDrive {
  private token: string;
  override READONLY = false;
  override FIXED = true;
  override IDENTIFIES_AS: string = "admin";
  override FILESYSTEM_SHORT: string = "AFS";
  override FILESYSTEM_LONG: string = "Admin Filesystem";
  public label: string = "Administrators";
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
    bulk: false,
    stat: true,
    bulkytree: false
  };

  constructor(uuid: string, letter: string, token: string) {
    super(uuid, letter);

    this.token = token;
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    try {
      const response = await Backend.post(`/admin/afs/file/${path}`, data, {
        headers: { Authorization: `Bearer ${this.token}` },
        onUploadProgress: (progress) => {
          onProgress?.({
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

  async createDirectory(path: string): Promise<boolean> {
    try {
      const response = await Backend.post<DirectoryReadReturn>(
        `/admin/afs/dir/${path}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteItem(path: string): Promise<boolean> {
    if (this.fileLocks[path]) throw new Error(`Not deleting locked file '${path}'`);

    try {
      const response = await Backend.delete(`/admin/afs/rm/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const sourceFilename = getItemNameFromPath(source);

    try {
      const response = await Backend.post(
        `/admin/afs/cp/${source}`,
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
        `/admin/afs/mv/${source}`,
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

  async readDir(path: string = ""): Promise<DirectoryReadReturn | undefined> {
    try {
      const response = await Backend.get<DirectoryReadReturn>(path ? `/admin/afs/dir/${path}` : `/admin/afs/dir`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async readFile(path: string, onProgress: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path]) throw new Error(`Not reading locked file '${path}'`);

    try {
      const response = await Backend.get(`/admin/afs/file/${path}`, {
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
      const response = await Backend.get(path ? `/admin/afs/tree/${path}` : `/admin/afs/tree`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Backend.get(`/admin/afs/quota`, {
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

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    return {};
  }

  async direct(path: string): Promise<string | undefined> {
    const content = await this.readFile(path, () => {});
    if (!content) return undefined;

    const blob = arrayToBlob(content);
    return URL.createObjectURL(blob);
  }

  async stat(path: string): Promise<FilesystemStat | undefined> {
    try {
      const response = await Backend.get(`/admin/afs/stat/${path}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FilesystemStat;
    } catch {
      return undefined;
    }
  }
}
