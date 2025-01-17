import { toForm } from "$ts/form";
import type { WaveKernel } from "$ts/kernel";
import { Axios } from "$ts/server/axios";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
  SupplierFlags,
} from "$types/fs";
import { FilesystemSupplier } from "../supplier";

export class ServerFilesystemSupplier extends FilesystemSupplier {
  private token = "";
  override readonly supplies: SupplierFlags = {
    readDir: true,
    createDirectory: true,
    readFile: true,
    writeFile: true,
    tree: true,
    copyItem: true,
    moveItem: true,
    deleteItem: true,
  };

  constructor(kernel: WaveKernel, token: string) {
    super(kernel);

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

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    try {
      const response = await Axios.get(`/fs/file/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
        responseType: "arraybuffer",
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async writeFile(path: string, blob: Blob): Promise<boolean> {
    try {
      const response = await Axios.post(`/fs/file/${path}`, blob, {
        headers: { Authorization: `Bearer ${this.token}` },
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
    try {
      const response = await Axios.post(
        `/fs/cp/${source}`,
        toForm({ destination }),
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
    try {
      const response = await Axios.post(
        `/fs/mv/${source}`,
        toForm({ destination }),
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
    try {
      const response = await Axios.delete(`/fs/rm/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
