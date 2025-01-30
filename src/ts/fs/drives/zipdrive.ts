import type { WaveKernel } from "$ts/kernel";
import JSZip from "jszip";
import { Filesystem } from "..";
import { FilesystemDrive } from "../drive";
import type {
  DirectoryReadReturn,
  FileEntry,
  FolderEntry,
  RecursiveDirectoryReadReturn,
} from "$types/fs";

export class ZIPDrive extends FilesystemDrive {
  override label = "";
  private _buffer: JSZip | undefined;
  private _path: string;

  constructor(kernel: WaveKernel, letter: string, path: string) {
    super(kernel, letter);

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

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const contents = path ? this._buffer?.folder(path) : this._buffer;

    if (!contents) throw new Error("Folder not found");

    const dirs: FolderEntry[] = [];
    const files: FileEntry[] = [];

    for (const [path, item] of Object.entries(contents.files)) {
      const slashes = path.split("").filter((p) => p === "/").length;

      if (slashes > (item.dir ? 1 : 0)) continue;

      const name = item.dir ? path.slice(0, -1) : path;

      if (item.dir) {
        dirs.push({
          name,
          dateCreated: item.date,
          dateModified: item.date,
        });
      } else {
        files.push({
          name,
          size: (item as any)._data.uncompressedSize,
          dateCreated: item.date,
          dateModified: item.date,
        });
      }
    }

    return { dirs, files };
  }

  // TODO: implement all of these missing doodads

  readFile(path: string): Promise<ArrayBuffer | undefined> {}

  writeFile(path: string, data: Blob): Promise<boolean> {}

  createDirectory(path: string): Promise<boolean> {}

  deleteItem(path: string): Promise<boolean> {}

  tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {}

  copyItem(source: string, destination: string): Promise<boolean> {}

  moveItem(source: string, destination: string): Promise<boolean> {}
}
