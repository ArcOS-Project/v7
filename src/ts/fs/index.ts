import { GlobalDispatcher } from "$ts/dispatch";
import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { Sleep } from "$ts/sleep";
import {
  type DirectoryReadReturn,
  type FilesystemProgress,
  type FilesystemProgressCallback,
  type RecursiveDirectoryReadReturn,
  type UploadReturn,
} from "$types/fs";
import { arrayToBlob } from "./convert";
import type { FilesystemDrive } from "./drive";
import { formatBytes, getParentDirectory, join } from "./util";

export class Filesystem extends KernelModule {
  private dispatch: GlobalDispatcher;
  public drives: Record<string, FilesystemDrive> = {};

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.dispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
  }

  async _init() {}

  getDriveById(id: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    return this.drives[id];
  }

  async mountDrive(
    id: string,
    supplier: typeof FilesystemDrive,
    letter?: string,
    ...args: any[]
  ): Promise<FilesystemDrive | false> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Mounting drive '${id}' as letter ${letter || "<NONE>"}`);

    if (letter) this.validateDriveLetter(letter);

    if (this.drives[id] || (letter && this.getDriveByLetter(letter, false)))
      return false;

    const uuid = crypto.randomUUID();
    const instance = new supplier(this.kernel, uuid, letter, ...args);

    this.drives[id] = instance;

    await instance.__spinUp();

    this.dispatch.dispatch("fs-mount-drive", id);

    return instance as FilesystemDrive;
  }

  getDriveIdByIdentifier(identifier: string) {
    return Object.entries(this.drives)
      .filter(([id, drv]) => {
        return drv.driveLetter === identifier || drv.uuid === identifier;
      })
      .map(([id]) => id)[0];
  }

  async umountDrive(id: string, fromSystem = false) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Unmounting drive '${id}'`);

    if (!this.drives[id]) return false;
    if (this.drives[id].FIXED && !fromSystem) return false;

    await this.drives[id].__spinDown();

    delete this.drives[id];

    this.dispatch.dispatch("fs-umount-drive", id);

    return true;
  }

  getDriveByLetter(letter: string, error = true) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.validateDriveLetter(letter);

    const result = Object.values(this.drives).filter(
      (s) => s.driveLetter == letter || s.uuid == letter
    )[0];

    if (!result && error) throw new Error(`Not mounted: ${letter}:/`);

    return result;
  }

  getDriveIdentifier(path: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.validatePath(path);

    return path.split(":/")[0];
  }

  getDriveByPath(path: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    return this.getDriveByLetter(this.getDriveIdentifier(path));
  }

  validatePath(p: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    if (
      !/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|[a-zA-Z]):\/(.*?)$/g.test(
        p
      )
    )
      throw new Error(`Invalid path "${p}"`);
  }

  removeDriveLetter(p: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.validatePath(p);

    return p.replace(`${this.getDriveIdentifier(p)}:/`, "");
  }

  validateDriveLetter(letter: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    if (
      !/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|[a-zA-Z])$/g.test(
        letter
      )
    )
      throw new Error(`Invalid drive letter or UUID "${letter}"`);
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Reading directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);

    return await drive.readDir(this.removeDriveLetter(path));
  }

  async createDirectory(path: string): Promise<boolean> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Creating directory '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.createDirectory(scopedPath);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async readFile(
    path: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined> {
    onProgress ||= this.defaultProgress.bind(this);

    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Reading file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    path = this.removeDriveLetter(path);

    return await drive.readFile(path, onProgress);
  }

  async writeFile(
    path: string,
    data: Blob,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    onProgress ||= this.defaultProgress.bind(this);

    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Writing ${data.size} bytes to file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);
    const parent = getParentDirectory(path);
    const result = await drive.writeFile(scopedPath, data, onProgress);

    this.dispatch.dispatch("fs-flush-file", path);
    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Getting tree of '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);

    path = this.removeDriveLetter(path);

    return await drive.tree(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Copying '${source}' to '${destination}'`);
    this.validatePath(source);
    this.validatePath(destination);

    const sourceId = this.getDriveIdentifier(source);
    const destinationId = this.getDriveIdentifier(destination);

    if (sourceId !== destinationId)
      throw new Error("Copy operation across drives is not supported.");

    const drive = this.getDriveByPath(source);

    source = this.removeDriveLetter(source);
    destination = this.removeDriveLetter(destination);

    const result = await drive.copyItem(source, destination);
    const destinationParent = getParentDirectory(destination);

    this.dispatch.dispatch("fs-flush-folder", destinationParent);

    return result;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Moving '${source}' to '${destination}'`);
    this.validatePath(source);
    this.validatePath(destination);

    const sourceId = this.getDriveIdentifier(source);
    const destinationId = this.getDriveIdentifier(destination);

    if (sourceId !== destinationId)
      throw new Error("Move operation across drives is not supported.");

    const drive = this.getDriveByPath(source);

    const scopedDestination = this.removeDriveLetter(destination);
    const scopedSource = this.removeDriveLetter(source);
    const result = await drive.moveItem(scopedSource, scopedDestination);
    const sourceParent = getParentDirectory(source);
    const destinationParent = getParentDirectory(destination);

    this.dispatch.dispatch("fs-flush-folder", destinationParent);
    this.dispatch.dispatch("fs-flush-folder", sourceParent);

    return result;
  }

  async deleteItem(path: string): Promise<boolean> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Deleting item '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);
    const parent = getParentDirectory(path);
    const result = await drive.deleteItem(scopedPath);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async uploadFiles(
    target: string,
    accept = "*/*",
    multiple = false,
    onProgress?: FilesystemProgressCallback
  ): Promise<UploadReturn> {
    onProgress ||= this.defaultProgress.bind(this);

    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.validatePath(target);
    const uploader = document.createElement("input");

    return new Promise((resolve, reject) => {
      const result: UploadReturn = [];
      uploader.type = "file";
      uploader.accept = accept;
      uploader.multiple = multiple;

      uploader.onchange = async () => {
        try {
          const files = uploader.files;

          if (!files || !files.length) {
            throw new Error(`Didn't get any files`);
          }

          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const content = arrayToBlob(await file?.arrayBuffer()!);

            onProgress({
              max: files.length,
              value: i,
              type: "items",
              what: `(${i + 1} / ${files.length}) ${file.name}`,
            });

            if (!file?.name) {
              throw new Error(`File ${i} doesn't have a name`);
            }

            await this.createDirectory(target);

            const path = join(target, file.name);
            const written = await this.writeFile(path, content, onProgress);

            if (!written) {
              throw new Error(`Failed to write file "${path}"`);
            }

            result.push({
              path,
              file,
              content,
            });

            await Sleep(100); // prevent rate limit
          }

          resolve(result);
        } catch (e) {
          return reject(e);
        }
      };

      uploader.click();
    });
  }

  defaultProgress(d: FilesystemProgress) {
    this.Log(
      `Got filesystem progress: ${d.type}: ${
        d.type === "size" ? formatBytes(d.value) : d.value
      }/${d.type === "size" ? formatBytes(d.max) : d.max}`
    );
  }

  async lockFile(path: string, pid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Locking file '${path}' for process ${pid}`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    await drive.lockFile(scopedPath, pid);
  }

  async releaseLock(path: string, pid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Unlocking file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    await drive.releaseLock(scopedPath, pid);
  }
}
