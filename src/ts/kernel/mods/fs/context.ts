import { getKMod } from "$ts/env";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgress,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "$types/fs";
import type { FilesystemType } from "$types/kernel";
import type { FilesystemDrive } from "./drive";

export class FilesystemContext {
  #pid: number;
  #PERMITTED = true;

  get #fs() {
    if (!this.#PERMITTED) throw new Error("Access is denied");

    return getKMod<FilesystemType>("fs");
  }

  //#region LIFECYCLE

  constructor(pid: number) {
    this.#pid = pid;
  }

  //#endregion

  getDriveById(id: string): FilesystemDrive {
    return this.#fs.getDriveById(id);
  }

  mountDrive<T = FilesystemDrive>(
    id: string,
    supplier: typeof FilesystemDrive,
    letter?: string,
    onProgress?: FilesystemProgressCallback,
    ...args: any[]
  ): Promise<T | false> {
    return this.#fs.mountDrive<T>(id, supplier, letter, onProgress, ...args);
  }

  getDriveIdByIdentifier(identifier: string): string {
    return this.#fs.getDriveIdByIdentifier(identifier);
  }

  umountDrive(id: string, fromSystem?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return this.#fs.umountDrive(id, fromSystem, onProgress);
  }

  getDriveByLetter(letter: string, error?: boolean): FilesystemDrive {
    return this.#fs.getDriveByLetter(letter, error);
  }

  getDriveIdentifier(path: string): string {
    return this.#fs.getDriveIdentifier(path);
  }

  getDriveByPath(path: string): FilesystemDrive {
    return this.#fs.getDriveByPath(path);
  }

  validatePath(p: string): void {
    return this.#fs.validatePath(p);
  }

  removeDriveLetter(p: string): string {
    return this.#fs.removeDriveLetter(p);
  }

  validateDriveLetter(letter: string): void {
    return this.#fs.validateDriveLetter(letter);
  }

  readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    return this.#fs.readDir(path);
  }

  bulk<T = any>(path: string, extension: string): Promise<Record<string, T>> {
    return this.#fs.bulk<T>(path, extension);
  }

  createDirectory(path: string, dispatch?: boolean): Promise<boolean> {
    return this.#fs.createDirectory(path, dispatch);
  }

  readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    return this.#fs.readFile(path, onProgress);
  }

  writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback, dispatch?: boolean): Promise<boolean> {
    return this.#fs.writeFile(path, data, onProgress, dispatch);
  }

  tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    return this.#fs.tree(path);
  }
  copyItem(source: string, destination: string, dispatch?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return this.#fs.copyItem(source, destination, dispatch, onProgress);
  }

  moveItem(source: string, destination: string, dispatch?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    return this.#fs.moveItem(source, destination, dispatch, onProgress);
  }

  deleteItem(path: string, dispatch?: boolean): Promise<boolean> {
    return this.#fs.deleteItem(path, dispatch);
  }

  uploadFiles(
    target: string,
    accept?: string,
    multiple?: boolean,
    onProgress?: FilesystemProgressCallback
  ): Promise<UploadReturn> {
    return this.#fs.uploadFiles(target, accept, multiple, onProgress);
  }

  defaultProgress(d: FilesystemProgress): void {
    return this.#fs.defaultProgress(d);
  }

  lockFile(path: string, pid: number): Promise<void> {
    return this.#fs.lockFile(path, this.#pid);
  }

  releaseLock(path: string, pid: number): Promise<void> {
    return this.#fs.releaseLock(path, this.#pid);
  }

  direct(path: string): Promise<string | undefined> {
    return this.#fs.direct(path);
  }
  nextAvailableDriveLetter(): string | undefined {
    return this.#fs.nextAvailableDriveLetter();
  }

  isDirectory(path: string): Promise<false | DirectoryReadReturn | undefined> {
    return this.#fs.isDirectory(path);
  }

  stat(path: string): Promise<ExtendedStat | undefined> {
    return this.#fs.stat(path);
  }

  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    return this.#fs.imageThumbnail(path, width, height);
  }
}
