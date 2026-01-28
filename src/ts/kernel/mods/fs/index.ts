import { getKMod } from "$ts/env";
import { KernelModule } from "$ts/kernel/module";
import { sha256, sliceIntoChunks } from "$ts/util";
import {
  type DirectoryReadReturn,
  type ExtendedStat,
  type FilesystemProgress,
  type FilesystemProgressCallback,
  type RecursiveDirectoryReadReturn,
  type UploadReturn,
} from "$types/fs";
import type { ConstructedWaveKernel, FilesystemType, SystemDispatchType } from "$types/kernel";
import type { FilesystemDrive } from "../../../drives/drive";
import { arrayBufferToBlob } from "../../../util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "../../../util/fs";

export class Filesystem extends KernelModule implements FilesystemType {
  private dispatch: SystemDispatchType;
  public drives: Record<string, FilesystemDrive> = {};

  //#region LIFECYCLE

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);

    this.dispatch = getKMod<SystemDispatchType>("dispatch");
  }

  async _init() {}

  //#endregion

  getDriveById(id: string) {
    this.isKmod();

    return this.drives[id];
  }

  async mountDrive<T = FilesystemDrive>(
    id: string,
    supplier: typeof FilesystemDrive,
    letter?: string,
    onProgress?: FilesystemProgressCallback,
    ...args: any[]
  ): Promise<T | false> {
    this.isKmod();

    this.Log(`Mounting drive '${id}' as letter ${letter || "<NONE>"}`);

    if (letter) this.validateDriveLetter(letter);

    if (this.drives[id] || (letter && this.getDriveByLetter(letter, false))) return false;

    const uuid = sliceIntoChunks((await sha256(id)).slice(0, 16).split(""), 4)
      .map((c) => c.join("").toUpperCase())
      .join("-");
    const instance = new supplier(uuid, letter, ...args);

    const ready = await instance.__spinUp(onProgress);

    if (!ready) return false;

    this.drives[id] = instance;
    this.dispatch.dispatch("fs-mount-drive", id);

    return instance as T;
  }

  getDriveIdByIdentifier(identifier: string) {
    return Object.entries(this.drives)
      .filter(([id, drv]) => {
        return drv.driveLetter === identifier || drv.uuid === identifier;
      })
      .map(([id]) => id)[0];
  }

  async umountDrive(id: string, fromSystem = false, onProgress?: FilesystemProgressCallback) {
    this.isKmod();

    this.Log(`Unmounting drive '${id}'`);

    if (!this.drives[id]) return false;
    if (this.drives[id].FIXED && !fromSystem) return false;

    await this.drives[id].__spinDown(onProgress);

    delete this.drives[id];

    this.dispatch.dispatch("fs-umount-drive", id);

    return true;
  }

  getDriveByLetter(letter: string, error = true) {
    this.isKmod();

    this.validateDriveLetter(letter);

    const result = Object.values(this.drives).filter((s) => s.driveLetter == letter || s.uuid == letter)[0];

    if (!result && error) throw new Error(`FilesystemGetDriveByLetter: Not mounted: ${letter}:/`);

    return result;
  }

  getDriveIdentifier(path: string) {
    this.isKmod();

    this.validatePath(path);

    return path.split(":/")[0];
  }

  getDriveByPath(path: string) {
    this.isKmod();

    return this.getDriveByLetter(this.getDriveIdentifier(path));
  }

  validatePath(p: string) {
    this.isKmod();

    if (!/^([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}|[a-zA-Z]):\/(.*?)$/g.test(p))
      throw new Error(`FilesystemValidatePath: Invalid path "${p}"`);
  }

  removeDriveLetter(p: string) {
    this.isKmod();

    this.validatePath(p);

    let newPath = p.replace(`${this.getDriveIdentifier(p)}:/`, "");
    if (newPath.startsWith("/")) newPath = newPath.substring(1);

    return newPath;
  }

  validateDriveLetter(letter: string) {
    this.isKmod();

    if (!/^([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}|[a-zA-Z])$/g.test(letter))
      throw new Error(`FilesystemValidateDriveLetter: Invalid drive letter or UUID "${letter}"`);
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    this.isKmod();

    this.Log(`Reading directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);

    drive.isCapable("readDir");

    return await drive.readDir(this.removeDriveLetter(path));
  }

  async bulk<T = any>(path: string, extension: string) {
    this.isKmod();

    this.Log(`Getting .${extension} files in bulk from '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    drive.isCapable("bulk");

    return await drive.bulk<T>(scopedPath, extension);
  }

  async createDirectory(path: string, dispatch = true): Promise<boolean> {
    this.isKmod();

    this.Log(`Creating directory '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.createDirectory(scopedPath);

    if (dispatch) this.dispatch.dispatch("fs-flush-folder", parent);
    drive.isCapable("makeDir");

    return result;
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    onProgress ||= this.defaultProgress.bind(this);

    this.isKmod();

    this.Log(`Reading file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    path = this.removeDriveLetter(path);
    drive.isCapable("readFile");

    return await drive.readFile(path, onProgress);
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback, dispatch = true): Promise<boolean> {
    onProgress ||= this.defaultProgress.bind(this);

    this.isKmod();

    this.Log(`Writing ${data.size} bytes to file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    drive.isCapable("writeFile");
    const scopedPath = this.removeDriveLetter(path);
    const parent = getParentDirectory(path);
    const result = await drive.writeFile(scopedPath, data, onProgress);

    if (dispatch) {
      this.dispatch.dispatch("fs-flush-file", path);
      this.dispatch.dispatch("fs-flush-folder", parent);
    }

    return result;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    this.isKmod();

    this.Log(`Getting tree of '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    drive.isCapable("tree");

    path = this.removeDriveLetter(path);

    return await drive.tree(path);
  }

  async copyItem(
    source: string,
    destination: string,
    dispatch = true,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    this.isKmod();

    this.Log(`Copying '${source}' to '${destination}'`);
    this.validatePath(source);
    this.validatePath(destination);

    const sourceId = this.getDriveIdentifier(source);
    const destinationId = this.getDriveIdentifier(destination);
    const drive = this.getDriveByPath(source);

    if (sourceId !== destinationId) {
      return await this.transferFileBetweenDrives(source, destination, onProgress, true);
    } else {
      drive.isCapable("copyItem");

      source = this.removeDriveLetter(source);
      destination = this.removeDriveLetter(destination);

      const result = await drive.copyItem(source, destination);
      const destinationParent = getParentDirectory(destination);

      if (dispatch) {
        this.dispatch.dispatch("fs-flush-folder", destinationParent);
      }

      return result;
    }
  }

  async moveItem(
    source: string,
    destination: string,
    dispatch = true,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    this.isKmod();

    this.Log(`Moving '${source}' to '${destination}'`);
    this.validatePath(source);
    this.validatePath(destination);

    const sourceId = this.getDriveIdentifier(source);
    const destinationId = this.getDriveIdentifier(destination);
    const drive = this.getDriveByPath(source);

    if (sourceId !== destinationId) {
      return await this.transferFileBetweenDrives(source, destination, onProgress, false);
    } else {
      drive.isCapable("moveItem");

      source = this.removeDriveLetter(source);
      destination = this.removeDriveLetter(destination);

      const result = await drive.moveItem(source, destination);
      const sourceParent = getParentDirectory(source);
      const destinationParent = getParentDirectory(destination);

      if (dispatch) {
        this.dispatch.dispatch("fs-flush-folder", destinationParent);
        if (sourceParent !== destinationParent) this.dispatch.dispatch("fs-flush-folder", sourceParent);
      }

      return result;
    }
  }

  private async transferFileBetweenDrives(
    source: string,
    destination: string,
    onProgress?: FilesystemProgressCallback,
    keepSource = false
  ) {
    const isDirectory = await this.isDirectory(source);

    if (isDirectory) {
      // We're transferring a folder

      const sourceDirectory = await this.readDir(source);
      if (!sourceDirectory) return false;

      const tree = await this.tree(source);
      if (!tree) return false;

      const sourceName = getItemNameFromPath(source);
      const target = destination.endsWith(sourceName) ? "" : sourceName;

      let counter = 0;

      onProgress?.({
        max: sourceDirectory.totalFiles - sourceDirectory.totalFolders,
        value: 0,
        type: "items",
      });

      await this.createDirectory(join(destination, target), false);

      const walk = async (data: RecursiveDirectoryReadReturn = tree, path = "") => {
        for (const dir of data.dirs) {
          await this.createDirectory(join(destination, target, path, dir.name), false);
          const result = await walk(
            {
              dirs: dir.children.dirs,
              files: dir.children.files,
              shortcuts: {},
            },
            join(path, dir.name)
          );

          if (!result) return false;
        }

        for (const file of data.files) {
          const sourcePath = join(source, path, file.name);
          const destinationPath = join(destination, target, path, file.name);
          const sourceContent = await this.readFile(sourcePath);
          if (!sourceContent) return false;

          const result = await this.writeFile(destinationPath, arrayBufferToBlob(sourceContent), undefined, false);

          counter++;

          if (!result) return false;

          onProgress?.({
            max: sourceDirectory.totalFiles - sourceDirectory.totalFolders,
            value: counter,
            type: "items",
          });
        }

        await this.deleteItem(join(source, path), false);

        return true;
      };

      const result = await walk();

      if (!keepSource) await this.deleteItem(source, false);

      return result;
    } else {
      // We're transferring a file

      const destinationIsDir = await this.isDirectory(destination);
      const sourceName = getItemNameFromPath(source);
      const sourceContent = await this.readFile(source);

      if (!sourceContent) return false;

      const result = await this.writeFile(
        destinationIsDir ? join(destination, sourceName) : destination,
        arrayBufferToBlob(sourceContent),
        undefined,
        false
      );

      if (!keepSource) await this.deleteItem(source, false);

      return result;
    }
  }

  async deleteItem(path: string, dispatch = true): Promise<boolean> {
    this.isKmod();

    this.Log(`Deleting item '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    drive.isCapable("deleteItem");
    const scopedPath = this.removeDriveLetter(path);
    const parent = getParentDirectory(path);
    const result = await drive.deleteItem(scopedPath);

    if (dispatch) this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async uploadFiles(
    target: string,
    accept = "*/*",
    multiple = false,
    onProgress?: FilesystemProgressCallback
  ): Promise<UploadReturn> {
    onProgress ||= this.defaultProgress.bind(this);

    this.isKmod();

    await this.createDirectory(target);

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
            const content = arrayBufferToBlob(await file?.arrayBuffer()!);

            onProgress({
              max: files.length,
              value: i,
              type: "items",
              what: `(${i + 1} / ${files.length}) ${file.name}`,
            });

            if (!file?.name) {
              throw new Error(`File ${i} doesn't have a name`);
            }

            const path = join(target, file.name);
            const written = await this.writeFile(path, content, onProgress, false);

            if (!written) {
              throw new Error(`Failed to upload ${getItemNameFromPath(path)}`);
            }

            result.push({
              path,
              file,
              content,
            });
          }

          this.dispatch.dispatch("fs-flush-folder", target);
          resolve(result);
        } catch (e) {
          return reject(`${e}`);
        }
      };

      uploader.click();
    });
  }

  defaultProgress(d: FilesystemProgress) {
    /** NOOP */
  }

  async lockFile(path: string, pid: number) {
    this.isKmod();

    this.Log(`Locking file '${path}' for process ${pid}`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    await drive.lockFile(scopedPath, pid);
  }

  async releaseLock(path: string, pid: number) {
    this.isKmod();

    this.Log(`Unlocking file '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    await drive.releaseLock(scopedPath, pid);
  }

  async direct(path: string): Promise<string | undefined> {
    this.isKmod();

    this.Log(`Requesting direct access of '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    drive.isCapable("direct");

    const scopedPath = this.removeDriveLetter(path);
    const result = await drive.direct(scopedPath);

    return result;
  }

  nextAvailableDriveLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTVWXYZ".split(""); // No U because U === userfs

    for (const letter of letters) {
      const drive = this.getDriveByLetter(letter, false);

      if (drive) continue;
      return letter;
    }
  }

  // COMPAT: not using stat calls here because we don't
  // know if the designated drive will have such capability

  // TODO: Add support for both stat-based checks and a
  // fallback for drives that can't stat
  async isDirectory(path: string) {
    try {
      const drive = this.getDriveByPath(path);

      drive.isCapable("stat");

      return !!(await this.stat(path))?.isDirectory;
    } catch {
      const contents = await this.readDir(path);
      const fileContents = await this.readFile(path);

      if (fileContents) return false;

      return contents!;
    }
  }

  async stat(path: string): Promise<ExtendedStat | undefined> {
    this.isKmod();

    this.Log(`stat '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    drive.isCapable("stat");
    const scopedPath = this.removeDriveLetter(path);

    return await drive.stat(scopedPath);
  }

  async imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined> {
    this.isKmod();

    this.Log(`imageThumbnail '${path}'`);
    this.validatePath(path);

    const drive = this.getDriveByPath(path);
    const scopedPath = this.removeDriveLetter(path);

    return await drive.imageThumbnail(scopedPath, width, height);
  }
}
