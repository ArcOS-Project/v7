import { FilesystemDrive } from "$ts/kernel/mods/fs/drives/generic";
import { ArchiveReaderProcess } from "$ts/zip";
import type { DirectoryReadReturn, DriveCapabilities, FilesystemProgressCallback, RecursiveDirectoryReadReturn } from "$types/fs";

export class ZIPDrive extends FilesystemDrive {
  override label = "";
  private _path: string;
  private _reader?: ArchiveReaderProcess;
  override REMOVABLE = true;
  public READONLY: boolean = true;
  public IDENTIFIES_AS: string = "zip";
  public FILESYSTEM_SHORT: string = "ZipFS";
  public FILESYSTEM_LONG: string = "ZIP Filesystem";
  public override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: false,
    readFile: true,
    writeFile: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    tree: true,
    direct: false,
    bulk: false,
    stat: false,
    quota: false,
  };

  constructor(uuid: string, letter: string, path: string) {
    super(uuid, letter);

    this._path = path;
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    const split = this._path.split("/");
    this.label = split[split.length - 1] || "ZIP file";

    const reader = await ArchiveReaderProcess.Create(this._path);
    await reader?.open(onProgress);
    
    this._reader = reader;

    return true;
  }

  async _spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    this._reader?.killSelf();
    this._path = "";

    return true;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    return await this._reader?.readDir(path);
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    if (!path) return;

    return await this._reader?.readFile(path);
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
}
