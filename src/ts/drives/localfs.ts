import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FileEntry,
  FilesystemProgressCallback,
  FilesystemStat,
  FolderEntry,
  UserQuota,
} from "$types/fs";
import { FilesystemDrive } from "./drive";

export class LocalFilesystemDrive extends FilesystemDrive {
  override FILESYSTEM_LONG: string = "Local Filesystem Folder";
  override FILESYSTEM_SHORT: string = "lfsf";
  override IDENTIFIES_AS: string = "lfsf";
  override REMOVABLE: boolean = true;

  root: FileSystemDirectoryHandle;

  // todo: finnish implementing stuff
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: true,
    readFile: true,
    writeFile: true,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: true,
    direct: true,
    quota: true,
    bulk: false,
    stat: true,
  };

  constructor(uuid: string, letter: string, root: FileSystemDirectoryHandle) {
    super(uuid, letter);
    this.root = root;
    this.label = `${root.name} (Local)`;
  }

  async quota(): Promise<UserQuota> {
    return {
      max: 0,
      free: 0,
      percentage: 0,
      used: 0,
      unknown: true,
    };
  }

  private async getItemHandle(path: string, create?: "directory" | "file") {
    const parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return this.root;
    let dir: FileSystemDirectoryHandle = this.root;

    try {
      for (let i = 0; i < parts.length - 1; i++) dir = await dir.getDirectoryHandle(parts[i]);
      const lastPart = parts[parts.length - 1];

      try {
        return await dir.getDirectoryHandle(lastPart, { create: create === "directory" });
      } catch {
        return await dir.getFileHandle(lastPart, { create: create === "file" });
      }
    } catch {
      return undefined;
    }
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const dir = (await this.getItemHandle(path)) as FileSystemDirectoryHandle;
    if (!dir || dir.kind !== "directory") return undefined;

    const children = await Array.fromAsync(dir.values());
    const dirs: FolderEntry[] = [];
    const files: FileEntry[] = [];

    for (const child of children) {
      if (child.kind === "file") {
        const file = await (child as FileSystemFileHandle).getFile();
        files.push({
          name: file.name,
          itemId: path + "/" + file.name, // fixme: don't do this
          dateCreated: new Date(file.lastModified),
          dateModified: new Date(file.lastModified),
          mimeType: file.type,
          size: file.size,
        });

        continue;
      }

      if (child.kind === "directory") {
        const dir = child as FileSystemDirectoryHandle;
        dirs.push({
          name: dir.name,
          itemId: path + "/" + dir.name, // fixme: don't do this

          // we don't know these
          dateCreated: new Date(0),
          dateModified: new Date(0),
        });
        continue;
      }

      continue;
    }

    return {
      dirs,
      files,
      shortcuts: {},
      totalFiles: files.length,
      totalFolders: dirs.length,
      totalSize: files.map((f) => f.size).reduce((a, b) => a + b),
    };
  }

  async createDirectory(path: string): Promise<boolean> {
    const handle = (await this.getItemHandle(path, "directory")) as FileSystemDirectoryHandle;
    if (!handle || handle.kind !== "directory") return false;

    return true;
  }

  async readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined> {
    const handle = (await this.getItemHandle(path)) as FileSystemFileHandle;
    if (handle.kind !== "file") return undefined;

    const file = await handle.getFile();
    return await file.arrayBuffer();
  }

  async writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean> {
    const handle = (await this.getItemHandle(path, "file")) as FileSystemFileHandle;
    if (handle.kind !== "file") return false;

    const writer = await handle.createWritable();
    await writer.write(data);
    await writer.close();

    return true;
  }

  async deleteItem(path: string): Promise<boolean> {
    const split = path.split("/");

    const parent = (await this.getItemHandle(split.slice(0, split.length - 1).join("/"))) as FileSystemDirectoryHandle;
    if (!parent || parent.kind !== "directory") return false;

    try {
      await parent.removeEntry(split[split.length - 1]);
      return true;
    } catch (e) {
      return false;
    }
  }

  async direct(path: string): Promise<string | undefined> {
    const handle = (await this.getItemHandle(path)) as FileSystemFileHandle;
    const file = await handle.getFile();
    return URL.createObjectURL(file);
  }

  async stat(path: string): Promise<FilesystemStat | undefined> {
    const handle = (await this.getItemHandle(path))!;
    if (!handle) return undefined;

    if (handle.kind === "file") {
      const file = await (handle as FileSystemFileHandle).getFile();
      return {
        isFile: true,
        isDirectory: false,
        created: file.lastModified,
        modified: file.lastModified,
        size: file.size,
      };
    } else if (handle.kind === "directory")
      return {
        isFile: false,
        isDirectory: true,
        created: 0,
        modified: 0,
        size: -1,
      };

    return undefined;
  }
}
