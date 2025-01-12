import type { WaveKernel } from "$ts/kernel";
import { ServerManager } from "$ts/server";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
  SupplierFlags,
} from "$types/fs";

export class FilesystemSupplier {
  server: ServerManager;
  supplies: SupplierFlags = {
    readDir: false,
    createDirectory: false,
    readFile: false,
    writeFile: false,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
  };

  constructor(kernel: WaveKernel, ...args: any[]) {
    this.server = kernel.getModule<ServerManager>("server");
  }

  async _init() {}

  async _windDown() {}

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    return {
      files: [],
      dirs: [],
    };
  }

  async createDirectory(path: string): Promise<boolean> {
    return true;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    return new ArrayBuffer();
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    return true;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    return {
      dirs: [],
      files: [],
    };
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    return true;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    return true;
  }

  async deleteItem(path: string): Promise<boolean> {
    return true;
  }
}
