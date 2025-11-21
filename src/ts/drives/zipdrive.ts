import { FilesystemDrive } from "$ts/drives/drive";
import { getKMod } from "$ts/env";
import type { DirectoryReadReturn, DriveCapabilities, FilesystemProgressCallback, RecursiveDirectoryReadReturn } from "$types/fs";
import type { FilesystemType } from "$types/kernel";
import JSZip from "jszip";

export class ZIPDrive extends FilesystemDrive {
  override label = "";
  private _buffer: JSZip | undefined;
  private _path: string;
  override REMOVABLE = true;
  public READONLY: boolean = true;
  public IDENTIFIES_AS: string = "zip";
  public FILESYSTEM_SHORT: string = "ZipFS";
  public FILESYSTEM_LONG: string = "ZIP Filesystem";
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: false,
    readFile: true,
    writeFile: false,
    tree: true,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    direct: false,
    quota: false,
    bulk: false,
    stat: false,
    bulkytree: false,
  };

  constructor(uuid: string, letter: string, path: string) {
    super(uuid, letter);

    this._path = path;
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    const fs = getKMod<FilesystemType>("fs");
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

    if (await this.readFile(path)) return undefined;

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
    return false;
  }

  async createDirectory(path: string): Promise<boolean> {
    return false;
  }

  async deleteItem(path: string): Promise<boolean> {
    return false;
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
    return false;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    return false;
  }

  async _sync(progress?: FilesystemProgressCallback) {
    this.Log("Syncing " + this._path);
    const file = await this._buffer?.generateAsync({ type: "blob" });
    const fs = getKMod<FilesystemType>("fs");

    if (!file) throw new Error(`Failed to sync to file '${this._path}'`);

    await fs.writeFile(this._path, file, progress);
  }
}
