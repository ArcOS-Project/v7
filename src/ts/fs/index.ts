import { GlobalDispatcher } from "$ts/dispatch";
import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import {
  type DirectoryReadReturn,
  type RecursiveDirectoryReadReturn,
  type SingleUploadReturn,
} from "$types/fs";
import { arrayToBlob } from "./convert";
import type { FilesystemDrive } from "./drive";
import { getParentDirectory, join } from "./util";

export class Filesystem extends KernelModule {
  private dispatch: GlobalDispatcher;
  public drives: Record<string, FilesystemDrive> = {};

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.dispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
  }

  async _init() {}

  getDriveById(id: string) {
    return this.drives[id];
  }

  async mountDrive(
    id: string,
    supplier: typeof FilesystemDrive,
    letter?: string,
    ...args: any[]
  ): Promise<FilesystemDrive | false> {
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

  async umountDrive(id: string) {
    this.Log(`Unmounting drive '${id}'`);

    if (!this.drives[id]) return false;

    await this.drives[id].__spinDown();

    delete this.drives[id];

    this.dispatch.dispatch("fs-umount-drive", id);

    return true;
  }

  getDriveByLetter(letter: string, error = true) {
    this.validateDriveLetter(letter);

    const result = Object.values(this.drives).filter(
      (s) => s.driveLetter == letter || s.uuid == letter
    )[0];

    if (!result && error) throw new Error(`Not mounted: ${letter}:/`);

    return result;
  }

  getDriveIdentifier(path: string) {
    this.validatePath(path);

    return path.split(":/")[0];
  }

  getDriveByPath(path: string) {
    return this.getDriveByLetter(this.getDriveIdentifier(path));
  }

  validatePath(p: string) {
    if (
      !/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|[a-zA-Z]):\/(.*?)$/g.test(
        p
      )
    )
      throw new Error(`Invalid path "${p}"`);
  }

  removeDriveLetter(p: string) {
    this.validatePath(p);

    return p.replace(`${this.getDriveIdentifier(p)}:/`, "");
  }

  validateDriveLetter(letter: string) {
    if (
      !/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|[a-zA-Z])$/g.test(
        letter
      )
    )
      throw new Error(`Invalid drive letter or UUID "${letter}"`);
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    this.Log(`Reading directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);

    return await drive.readDir(this.removeDriveLetter(path));
  }

  async createDirectory(path: string): Promise<boolean> {
    this.Log(`Creating directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);
    path = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.createDirectory(path);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    this.Log(`Reading file '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);
    path = this.removeDriveLetter(path);

    return await drive.readFile(path);
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    this.Log(`Writing ${data.size} bytes to file '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByPath(path);

    path = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.writeFile(path, data);

    this.dispatch.dispatch("fs-flush-file", path);
    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    this.Log(`Getting tree of '${path}'`);

    this.validatePath(path);

    const drive = this.getDriveByPath(path);

    path = this.removeDriveLetter(path);

    return await drive.tree(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
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
    this.Log(`Moving '${source}' to '${destination}'`);

    this.validatePath(source);
    this.validatePath(destination);

    const sourceId = this.getDriveIdentifier(source);
    const destinationId = this.getDriveIdentifier(destination);

    if (sourceId !== destinationId)
      throw new Error("Move operation across drives is not supported.");

    const drive = this.getDriveByPath(source);

    source = this.removeDriveLetter(source);
    destination = this.removeDriveLetter(destination);

    const result = await drive.moveItem(source, destination);
    const sourceParent = getParentDirectory(source);
    const destinationParent = getParentDirectory(destination);

    this.dispatch.dispatch("fs-flush-folder", destinationParent);
    this.dispatch.dispatch("fs-flush-folder", sourceParent);

    return result;
  }

  async deleteItem(path: string): Promise<boolean> {
    this.Log(`Deleting item '${path}'`);

    this.validatePath(path);

    const drive = this.getDriveByPath(path);

    path = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.deleteItem(path);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  uploadSingleFile(
    target: string,
    accept = "*/*"
  ): Promise<SingleUploadReturn> {
    this.validatePath(target);
    const uploader = document.createElement("input");

    uploader.type = "file";
    uploader.accept = accept;
    uploader.multiple = false;

    return new Promise((resolve, reject) => {
      uploader.onchange = async () => {
        try {
          const files = uploader.files;

          if (!files?.length) return reject("Didn't get a file");

          const file = files?.[0];
          const content = arrayToBlob(await file?.arrayBuffer()!);

          if (!file?.name) return reject("File doesn't have a name");

          await this.createDirectory(target);

          const path = join(target, file.name);
          const result = await this.writeFile(path, content);

          if (!result) return reject("Failed to write file");

          resolve({ path, file, content });
        } catch (e) {
          reject((e as any).message);
        }
      };

      uploader.click();
    });
  }

  // TODO: proper handlers for uploading files with and/or without progress indication
}
