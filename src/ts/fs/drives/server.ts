import { toForm } from "$ts/form";
import type { WaveKernel } from "$ts/kernel";
import { Axios } from "$ts/server/axios";
import type {
  DirectoryReadReturn,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import { FilesystemDrive } from "../drive";
import { getDirectoryName, join } from "../util";

export class ServerDrive extends FilesystemDrive {
  private token = "";
  override label = "Your Drive";
  override FIXED = true;

  constructor(kernel: WaveKernel, uuid: string, letter: string, token: string) {
    super(kernel, uuid, letter);

    this.token = token;
  }

  async readDir(path: string = ""): Promise<DirectoryReadReturn | undefined> {
    try {
      const response = await Axios.get<DirectoryReadReturn>(
        path ? `/fs/dir/${path}` : `/fs/dir`,
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    try {
      const response = await Axios.post<DirectoryReadReturn>(
        `/fs/dir/${path}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readFile(
    path: string,
    onProgress: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined> {
    if (this.fileLocks[path])
      throw new Error(`Not reading locked file '${path}'`);

    try {
      const response = await Axios.get(`/fs/file/${path}`, {
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

  async writeFile(
    path: string,
    blob: Blob,
    onProgress: FilesystemProgressCallback
  ): Promise<boolean> {
    try {
      const response = await Axios.post(`/fs/file/${path}`, blob, {
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

  async tree(
    path: string = ""
  ): Promise<RecursiveDirectoryReadReturn | undefined> {
    try {
      const response = await Axios.get(path ? `/fs/tree/${path}` : `/fs/tree`, {
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
      const response = await Axios.post(
        `/fs/cp/${source}`,
        toForm({
          destination: destination.endsWith(sourceFilename)
            ? destination
            : join(destination, sourceFilename),
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
    if (this.fileLocks[source])
      throw new Error(`Not moving locked file '${source}'`);

    const sourceFilename = getDirectoryName(source);

    try {
      const response = await Axios.post(
        `/fs/mv/${source}`,
        toForm({
          destination: destination.endsWith(sourceFilename)
            ? destination
            : join(destination, sourceFilename),
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
    if (this.fileLocks[path])
      throw new Error(`Not deleting locked file '${path}'`);

    try {
      const response = await Axios.delete(`/fs/rm/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async quota(): Promise<UserQuota> {
    try {
      const response = await Axios.get("/fs/quota", {
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
}
