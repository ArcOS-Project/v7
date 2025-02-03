import type { WaveKernel } from "$ts/kernel";
import { Log } from "$ts/kernel/logging";
import { ServerManager } from "$ts/server";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
} from "$types/fs";
import { LogLevel } from "$types/logging";
import type { UserQuota } from "../../types/fs";

export class FilesystemDrive {
  server: ServerManager;
  public driveLetter: string | undefined;
  public label = "";
  public uuid = "";
  public kernel: WaveKernel;

  constructor(
    kernel: WaveKernel,
    uuid: string,
    letter?: string,
    ...args: any[]
  ) {
    this.server = kernel.getModule<ServerManager>("server");

    this.uuid = uuid;
    this.driveLetter = letter;
    this.kernel = kernel;
  }

  Log(message: string, level = LogLevel.info) {
    Log(`FilesystemDrive::${this.uuid}`, message, level);
  }

  async __spinUp() {
    this.Log("Spinning up drive...");

    await this._spinUp();

    this.Log("Heads loaded.");
  }

  async __spinDown() {
    this.Log("Spinning down drive...");

    await this._spinDown();

    this.Log("READY.");
  }

  async _spinUp() {}

  async _spinDown() {}

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

  async quota(): Promise<UserQuota> {
    return {
      used: 0,
      max: 0,
      free: 0,
      percentage: 0,
    };
  }
}
