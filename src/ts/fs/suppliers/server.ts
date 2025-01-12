import { toForm } from "$ts/form";
import type { WaveKernel } from "$ts/kernel";
import { ServerManager } from "$ts/server";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
  SupplierFlags,
} from "$types/fs";
import axios from "axios";
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
    const url = ServerManager.url();

    try {
      const response = await axios.get<DirectoryReadReturn>(
        path ? `${url}/fs/dir/${path}` : `${url}/fs/dir`,
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    const url = ServerManager.url();

    try {
      const response = await axios.post<DirectoryReadReturn>(
        `${url}/fs/dir/${path}`,
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const url = ServerManager.url();

    try {
      const response = await axios.get(`${url}/fs/file/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
        responseType: "arraybuffer",
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async writeFile(path: string, blob: Blob): Promise<boolean> {
    const url = ServerManager.url();

    try {
      const response = await axios.post(`${url}/fs/file/${path}`, blob, {
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
    const url = ServerManager.url();

    try {
      const response = await axios.get(
        path ? `${url}/fs/tree/${path}` : `${url}/fs/tree`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.data;
    } catch {
      return undefined;
    }
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const url = ServerManager.url();

    try {
      const response = await axios.post(
        `${url}/fs/cp/${source}`,
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
    const url = ServerManager.url();

    try {
      const response = await axios.post(
        `${url}/fs/mv/${source}`,
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
    const url = ServerManager.url();

    try {
      const response = await axios.delete(`${url}/fs/rm/${path}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
