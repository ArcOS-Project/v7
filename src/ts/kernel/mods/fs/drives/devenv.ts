import type { IFilesystemDrive } from "$interfaces/fs";
import { FilesystemDrive } from "$ts/kernel/mods/fs/drives/generic";
import { toForm } from "$ts/util/form";
import { getItemNameFromPath, join } from "$ts/util/fs";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FsAccess,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { AxiosInstance } from "axios";

export class DevDrive extends FilesystemDrive implements IFilesystemDrive {
  override FIXED = true;
  override REMOVABLE = true;
  override IDENTIFIES_AS: string = "devenv";
  override FILESYSTEM_SHORT: string = "DEFS";
  override FILESYSTEM_LONG: string = "DevEnv Filesystem";
  private axios: AxiosInstance;
  private url: string;
  public label: string = "Dev Drive";
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
    stat: false,
  };

  constructor(uuid: string, letter: string, axios: AxiosInstance, url: string) {
    super(uuid, letter);

    this.axios = axios;
    this.url = url;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
      try {
      const response = await this.axios.get<DirectoryReadReturn>(path ? `/fs/dir/${path}` : `/fs/dir`);

      return response.data;
    } catch {
      return undefined;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    try {
      const response = await this.axios.post(`/fs/dir/${path}`);

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path]) throw new Error(`DevDriveFilesystemDrive: resource is locked`);

    try {
      const response = await this.axios.get(`/fs/file/${path}`, {
        responseType: "arraybuffer",
        onDownloadProgress: (progress) => {
          onProgress?.({
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

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    try {
      const response = await this.axios.post(`/fs/file/${path}`, data, {
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
  async tree(path: string = ""): Promise<RecursiveDirectoryReadReturn | undefined> {
    try {
      const response = await this.axios.get(path ? `/fs/tree/${path}` : `/fs/tree`);

      return response.data;
    } catch {
      return undefined;
    }
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const sourceFilename = getItemNameFromPath(source);

    try {
      const response = await this.axios.post(
        `/fs/cp/${source}`,
        toForm({
          destination: destination.endsWith(sourceFilename) ? destination : join(destination, sourceFilename),
        })
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    if (this.fileLocks[source]) throw new Error(`DevDriveFilesystemDrive: resource is locked`);

    try {
      const response = await this.axios.post(
        `/fs/mv/${source}`,
        toForm({
          destination,
        })
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteItem(path: string): Promise<boolean> {
    if (this.fileLocks[path]) throw new Error(`DevDriveFilesystemDrive: resource is locked`);

    try {
      const response = await this.axios.delete(`/fs/rm/${path}`);

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await this.axios.get("/fs/quota");

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
      const response = await this.axios.post(`/fs/accessors/${path}`);
      const data = response.data as FsAccess;

      return `${this.url}/fs/direct/${data.accessor}`;
    } catch {
      return undefined;
    }
  }
}
