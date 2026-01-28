import { Fs } from "$ts/env";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "$types/fs";
import { Permissions } from ".";

export class PermissionedFilesystemInteractor {
  #process: any;

  constructor(process: any) {
    this.#process = process;
  }

  get mountDrive() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.mountDrive);
  }

  get getDriveIdByIdentifier() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.getDriveIdByIdentifier);
  }

  get umountDrive() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.umountDrive);
  }

  get getDriveByLetter() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.getDriveByLetter);
  }

  get getDriveIdentifier() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.getDriveIdentifier);
  }

  get getDriveByPath() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.getDriveByPath);
  }

  get validatePath() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.validatePath);
  }

  get removeDriveLetter() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.removeDriveLetter);
  }

  get validateDriveLetter() {
    return Permissions.hasPermissionExplicit(this.#process, "PERMISSION_FS_DRIVES", Fs.validateDriveLetter);
  }

  //#region CAPABILITIES

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.readDir(path);
  }

  async bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.bulk<T>(path, extension);
  }

  async createDirectory(path: string, dispath?: boolean): Promise<boolean> {
    Permissions.hasWritePermissionForPathExplicit(this.#process, path);

    return await Fs.createDirectory(path, dispath);
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.readFile(path, onProgress);
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    Permissions.hasWritePermissionForPathExplicit(this.#process, path);

    return await Fs.writeFile(path, data, onProgress);
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.tree(path);
  }

  async copyItem(
    source: string,
    destination: string,
    dispatch?: boolean,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, source);
    Permissions.hasWritePermissionForPathExplicit(this.#process, destination);

    return await this.copyItem(source, destination, dispatch, onProgress);
  }

  async moveItem(
    source: string,
    destination: string,
    dispatch?: boolean,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, source);
    Permissions.hasWritePermissionForPathExplicit(this.#process, source);
    Permissions.hasReadPermissionForPathExplicit(this.#process, destination);
    Permissions.hasWritePermissionForPathExplicit(this.#process, destination);

    return await this.moveItem(source, destination, dispatch, onProgress);
  }

  async deleteItem(path: string, dispatch?: boolean): Promise<boolean> {
    Permissions.hasWritePermissionForPathExplicit(this.#process, path);

    return await Fs.deleteItem(path, dispatch);
  }

  async uploadFiles(
    target: string,
    accept?: string,
    multiple?: boolean,
    onProgress?: FilesystemProgressCallback
  ): Promise<UploadReturn> {
    if (target === "U:/System") Permissions.throwError("PERMERR_DENIED");
    Permissions.hasWritePermissionForPathExplicit(this.#process, target);

    return await Fs.uploadFiles(target, accept, multiple, onProgress);
  }

  async direct(path: string): Promise<string | undefined> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.direct(path);
  }

  async isDirectory(path: string): Promise<boolean | DirectoryReadReturn> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.isDirectory(path);
  }

  async stat(path: string): Promise<ExtendedStat | undefined> {
    Permissions.hasReadPermissionForPathExplicit(this.#process, path);

    return await Fs.stat(path);
  }

  //#endregion CAPABILITIES
}
