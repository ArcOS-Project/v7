import type { WaveKernel } from "$ts/kernel";
import type { DirectoryReadReturn, DriveCapabilities, FilesystemProgressCallback, RecursiveDirectoryReadReturn } from "$types/fs";
import JSZip from "jszip";
import { Filesystem } from "..";
import { FilesystemDrive } from "../drive";

export class ZIPDrive extends FilesystemDrive {
  override label = "";
  private _buffer: JSZip | undefined;
  private _path: string;
  override REMOVABLE = true;
  public IDENTIFIES_AS: string = "zip";
  public FILESYSTEM_SHORT: string = "ZipFS";
  public FILESYSTEM_LONG: string = "ZIP Filesystem";
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: true,
    readFile: true,
    writeFile: true,
    tree: true,
    copyItem: true,
    moveItem: true,
    deleteItem: true,
    direct: false,
    quota: false,
    bulk: false,
  };

  constructor(kernel: WaveKernel, uuid: string, letter: string, path: string) {
    super(kernel, uuid, letter);

    this._path = path;
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    const fs = this.kernel.getModule<Filesystem>("fs");
    const contents = await fs.readFile(this._path, onProgress);

    if (!contents) {
      return false;
    }

    const split = this._path.split("/");

    this.label = split[split.length - 1] || "ZIP file";

    const zip = new JSZip();
    this._buffer = await zip.loadAsync(contents, {});

    return true;
  }

  async _spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    if (this._buffer) await this._sync(onProgress);

    this._buffer = undefined;
    this._path = "";

    return true;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const entries = this._buffer?.files;
    const result: DirectoryReadReturn = {
      dirs: [],
      files: [],
      shortcuts: {},
      totalFiles: 0,
      totalFolders: 0,
      totalSize: 0,
    };

    const normalizedPath = path ? (path.endsWith("/") ? path : path + "/") : "";
    const seenDirs = new Set<string>();

    for (const entryName in entries) {
      if (!normalizedPath || (entryName.startsWith(normalizedPath) && entryName !== normalizedPath)) {
        const relativePath = normalizedPath ? entryName.slice(normalizedPath.length) : entryName;
        const parts = relativePath.split("/");
        if (parts.length === 1) {
          const entry = entries[entryName];
          if (entry.dir) {
            result.dirs.push({
              name: relativePath.replace(/\/$/, ""),
              dateCreated: new Date(),
              dateModified: new Date(),
              itemId: "",
            });
          } else {
            result.files.push({
              name: relativePath.replace(/\/$/, ""),
              size: (entry as any)._data.uncompressedSize || 0,
              dateCreated: new Date(),
              dateModified: new Date(),
              mimeType: "",
              itemId: "",
            });
          }
        } else if (!seenDirs.has(parts[0])) {
          seenDirs.add(parts[0]);
          result.dirs.push({
            name: parts[0].replace(/\/$/, ""),
            dateCreated: new Date(),
            dateModified: new Date(),
            itemId: "",
          });
        }
      }
    }

    return result;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    if (!path) return;

    const file = Object.entries(this._buffer?.files || {}).filter(([itemPath, item]) => itemPath === path && !item.dir)[0];

    if (!file) return undefined;

    return await file[1].async("arraybuffer");
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    if (!path || !data) return false;

    this._buffer?.file(path, data);

    await this._sync(onProgress);

    return true;
  }

  async createDirectory(path: string): Promise<boolean> {
    if (!path) return false;

    this._buffer?.folder(path);

    return true;
  }

  async deleteItem(path: string): Promise<boolean> {
    if (!path) return false;

    this._buffer?.remove(path);

    await this._sync();

    return true;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    const result: RecursiveDirectoryReadReturn = {
      dirs: [],
      files: [],
      shortcuts: {},
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
    this._buffer?.file(destination, await this._buffer.file(source)?.async("arraybuffer")!);

    this._buffer?.remove(source);

    await this._sync();

    return true;
  }

  async _sync(progress?: FilesystemProgressCallback) {
    this.Log("Syncing " + this._path);
    const file = await this._buffer?.generateAsync({ type: "blob" });
    const fs = this.kernel.getModule<Filesystem>("fs");

    if (!file) throw new Error(`Failed to sync to file '${this._path}'`);

    await fs.writeFile(this._path, file, progress);
  }
}
