import { GlobalDispatcher } from "$ts/dispatch";
import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import {
  type DirectoryReadReturn,
  type RecursiveDirectoryReadReturn,
} from "$types/fs";
import type { FilesystemDrive } from "./drive";
import { getParentDirectory } from "./util";

export class Filesystem extends KernelModule {
  private drives: Record<string, FilesystemDrive> = {};
  private dispatch: GlobalDispatcher;

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

    return instance as FilesystemDrive;
  }

  async umountDrive(id: string) {
    this.Log(`Unmounting drive '${id}'`);

    if (!this.drives[id]) return false;

    await this.drives[id].__spinDown();

    delete this.drives[id];

    return true;
  }

  getDriveByLetter(letter: string, error = true) {
    this.validateDriveLetter(letter);

    const result = Object.values(this.drives).filter(
      (s) => s.driveLetter == letter
    )[0];

    if (!result && error) throw new Error(`Not mounted: ${letter}:/`);

    return result;
  }

  validatePath(p: string) {
    if (!/^[a-zA-Z]:\/(.*?)$/g.test(p)) throw new Error(`Invalid path "${p}"`);
  }

  removeDriveLetter(p: string) {
    this.validatePath(p);

    return p.replace(`${p[0]}:/`, "");
  }

  validateDriveLetter(letter: string) {
    if (!/^[a-zA-Z]$/g.test(letter))
      throw new Error(`Invalid drive letter "${letter}"`);
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    this.Log(`Reading directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByLetter(path[0]);

    return await drive.readDir(this.removeDriveLetter(path));
  }

  async createDirectory(path: string): Promise<boolean> {
    this.Log(`Creating directory '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByLetter(path[0]);
    path = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.createDirectory(path);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    this.Log(`Reading file '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByLetter(path[0]);
    path = this.removeDriveLetter(path);

    return await drive.readFile(path);
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    this.Log(`Writing ${data.size} bytes to file '${path}'`);

    this.validatePath(path);
    const drive = this.getDriveByLetter(path[0]);

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

    const drive = this.getDriveByLetter(path[0]);

    path = this.removeDriveLetter(path);

    return await drive.tree(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    this.Log(`Copying '${source}' to '${destination}'`);

    this.validatePath(source);
    this.validatePath(destination);

    if (source[0] !== destination[0])
      throw new Error("Copy operation across drives is not supported.");
    const drive = this.getDriveByLetter(source[0]);

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

    if (source[0] !== destination[0])
      throw new Error("Move operation across drives is not supported.");

    const drive = this.getDriveByLetter(source[0]);

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

    const drive = this.getDriveByLetter(path[0]);

    path = this.removeDriveLetter(path);

    const parent = getParentDirectory(path);
    const result = await drive.deleteItem(path);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  // TODO: proper handlers for uploading files with and/or without progress indication
}
