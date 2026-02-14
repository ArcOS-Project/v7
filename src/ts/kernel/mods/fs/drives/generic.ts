import type { IFilesystemDrive } from "$interfaces/fs";
import type { IServerManager } from "$interfaces/kernel";
import { getKMod } from "$ts/env";
import { Log } from "$ts/logging";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FilesystemStat,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import { LogLevel } from "$types/logging";

export class FilesystemDrive implements IFilesystemDrive {
  server: IServerManager;
  public driveLetter: string | undefined;
  public label = "";
  public uuid = "";
  public readonly FIXED: boolean = false;
  public readonly REMOVABLE: boolean = false;
  public readonly READONLY: boolean = false;
  public readonly HIDDEN: boolean = false;
  public readonly IDENTIFIES_AS: string = "generic";
  public readonly FILESYSTEM_SHORT: string = "GFS";
  public readonly FILESYSTEM_LONG: string = "Generic Filesystem";
  public BUSY: boolean = false;
  protected fileLocks: Record<string, number> = {};

  protected CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: false,
    makeDir: false,
    readFile: false,
    writeFile: false,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    direct: false,
    quota: false,
    bulk: false,
    stat: false,
  };

  constructor(uuid: string, letter?: string, ...args: any[]) {
    this.server = getKMod("server");

    this.uuid = uuid;
    this.driveLetter = letter;
  }

  Log(message: string, level = LogLevel.info) {
    Log(`FilesystemDrive::${this.uuid}`, message, level);
  }

  async lockFile(path: string, pid: number) {
    if (this.fileLocks[path])
      throw new Error(`${this.constructor.name}: can't lock ${path}: file is in use by process ${this.fileLocks[path]}`);

    this.fileLocks[path] = pid;
  }

  async releaseLock(path: string, pid: number, fromSystem = false) {
    if (!this.fileLocks[path]) throw new Error(`${this.constructor.name}: can't unlock '${path}': not locked`);
    if (pid !== this.fileLocks[path] && !fromSystem)
      throw new Error(`${this.constructor.name}: can't unlock '${path}': expected PID ${this.fileLocks[path]}, got ${pid}`);

    delete this.fileLocks[path];
  }

  async __spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    this.Log("Spinning up drive...");

    const result = await this._spinUp(onProgress);

    if (result === true) this.Log("Heads loaded.");

    //
    // UNCOMMENT THE BELOW PROPERTY ASSIGNMENT TO DISABLE **ALL** FILESYSTEM OEPRATIONS
    //

    // this.CAPABILITIES = {
    //   readDir: false,
    //   makeDir: false,
    //   readFile: false,
    //   writeFile: false,
    //   tree: false,
    //   copyItem: false,
    //   moveItem: false,
    //   deleteItem: false,
    //   direct: false,
    //   quota: false,
    //   bulk: false,
    //   stat: true,
    // };

    return result;
  }

  async __spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    this.Log("Spinning down drive...");

    const result = await this._spinDown(onProgress);

    this.Log("READY.");

    return result;
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return true;
  }

  async _spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return true;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    return {
      files: [],
      dirs: [],
      totalFiles: 0,
      totalFolders: 0,
      totalSize: 0,
      shortcuts: {},
    };
  }

  async createDirectory(path: string): Promise<boolean> {
    return true;
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    return new ArrayBuffer(0);
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return true;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    return {
      dirs: [],
      files: [],
      shortcuts: {},
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

  async direct(path: string): Promise<string | undefined> {
    return undefined;
  }

  async quota(): Promise<UserQuota> {
    return {
      used: 0,
      max: 0,
      free: 0,
      percentage: 0,
      unknown: true,
    };
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    return {};
  }

  async stat(path: string): Promise<FilesystemStat | undefined> {
    return undefined;
  }

  isCapable(capability: DriveCapabilities) {
    if (!this.CAPABILITIES[capability]) {
      this.Log(`Detected illegal filesystem operation '${capability}'!`);
      throw new Error(`${this.constructor.name}: illegal ${capability} on ${this.FILESYSTEM_SHORT}`);
    }
  }

  async imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    return undefined;
  }
}
