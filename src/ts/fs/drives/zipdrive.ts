import type { WaveKernel } from "$ts/kernel";
import type {
  DirectoryReadReturn,
  RecursiveDirectoryReadReturn,
} from "$types/fs";
import JSZip from "jszip";
import { Filesystem } from "..";
import { FilesystemDrive } from "../drive";

export class ZIPDrive extends FilesystemDrive {
  override label = "";
  private _buffer: JSZip | undefined;
  private _path: string;

  constructor(kernel: WaveKernel, uuid: string, letter: string, path: string) {
    super(kernel, uuid, letter);

    this._path = path;
  }

  async _spinUp(): Promise<void> {
    const fs = this.kernel.getModule<Filesystem>("fs");
    const contents = await fs.readFile(this._path);

    if (!contents)
      throw new Error("Tried to create ZIP drive on an invalid file");

    const zip = new JSZip();
    this._buffer = await zip.loadAsync(contents, {});
  }

  async _spinDown(): Promise<void> {
    await this._sync();

    this._buffer = undefined;
    this._path = "";
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const entries = this._buffer?.files;
    const result: DirectoryReadReturn = {
      dirs: [],
      files: [],
    };

    const normalizedPath = path ? (path.endsWith("/") ? path : path + "/") : "";
    const seenDirs = new Set<string>();

    for (const entryName in entries) {
      if (
        !normalizedPath ||
        (entryName.startsWith(normalizedPath) && entryName !== normalizedPath)
      ) {
        const relativePath = normalizedPath
          ? entryName.slice(normalizedPath.length)
          : entryName;
        const parts = relativePath.split("/");
        if (parts.length === 1) {
          const entry = entries[entryName];
          if (entry.dir) {
            result.dirs.push({
              name: relativePath.replace(/\/$/, ""),
              dateCreated: new Date(),
              dateModified: new Date(),
            });
          } else {
            result.files.push({
              name: relativePath.replace(/\/$/, ""),
              size: (entry as any)._data.uncompressedSize || 0,
              dateCreated: new Date(),
              dateModified: new Date(),
            });
          }
        } else if (!seenDirs.has(parts[0])) {
          seenDirs.add(parts[0]);
          result.dirs.push({
            name: parts[0].replace(/\/$/, ""),
            dateCreated: new Date(),
            dateModified: new Date(),
          });
        }
      }
    }

    return result;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const file = Object.entries(this._buffer?.files || {}).filter(
      ([itemPath, item]) => itemPath === path && !item.dir
    )[0];

    if (!file) return undefined;

    return await file[1].async("arraybuffer");
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    this._buffer?.file(path, data);

    await this._sync();

    return true;
  }

  async createDirectory(path: string): Promise<boolean> {
    this._buffer?.folder(path);

    await this._sync();

    return true;
  }

  async deleteItem(path: string): Promise<boolean> {
    this._buffer?.remove(path);

    await this._sync();

    return true;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    const result: RecursiveDirectoryReadReturn = {
      dirs: [],
      files: [],
    };

    const currentDirContents = await this.readDir(path);
    if (!currentDirContents) return result;

    result.files.push(...currentDirContents.files);

    for (const dir of currentDirContents.dirs) {
      const subDirPath = path ? `${path}${dir.name}/` : `${dir.name}/`;
      const subDirTree = await this.tree(subDirPath);

      if (subDirTree) {
        result.dirs.push({
          ...dir,
          children: subDirTree,
        });
      }
    }

    return result;
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const sourceContents = await this.readFile(source);

    if (!sourceContents) return false;

    this._buffer?.file(destination, sourceContents);

    await this._sync();

    return true;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    this._buffer?.file(
      destination,
      await this._buffer.file(source)?.async("arraybuffer")!
    );

    this._buffer?.remove(source);

    await this._sync();

    return true;
  }

  async _sync() {
    this.Log("Syncing " + this._path);
    const file = await this._buffer?.generateAsync({ type: "blob" });
    const fs = this.kernel.getModule<Filesystem>("fs");

    if (!file) throw new Error(`Failed to sync to file '${this._path}'`);

    await fs.writeFile(this._path, file);
  }
}
