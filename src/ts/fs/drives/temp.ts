import { deepCopyWithBlobs, sortByKey } from "$ts/util";
import { UUID } from "$ts/uuid";
import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FileEntry,
  FolderEntry,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import { FilesystemDrive } from "../drive";

export class MemoryFilesystemDrive extends FilesystemDrive {
  private readonly data: Record<string, any> = {};
  public FIXED: boolean = true;
  public override IDENTIFIES_AS: string = "temp";
  public override FILESYSTEM_LONG: string = "Temporary Filesystem";
  public override FILESYSTEM_SHORT: string = "TFS";
  public override HIDDEN: boolean = true;
  public label: string = "TEMP";
  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: true,
    readFile: true,
    writeFile: true,
    tree: true,
    copyItem: true,
    moveItem: true,
    deleteItem: true,
    direct: true,
    quota: true,
    bulk: true,
  };

  constructor(kernel: any, uuid: string, letter?: string) {
    super(kernel, uuid, letter);
  }

  private getPathParts(path: string): string[] {
    const parts = path.split("/");
    if (parts[0] === "") {
      parts.shift(); // Remove leading empty string for root paths
    }
    return parts;
  }

  private getEntry(path: string): any {
    const parts = this.getPathParts(path);
    let current = this.data;
    for (const part of parts) {
      if (!current[part]) {
        return undefined;
      }
      current = current[part];
    }
    return current;
  }

  private setEntry(path: string, value: any): void {
    const parts = this.getPathParts(path);
    let current = this.data;
    const lastPart = parts.pop();

    for (const part of parts) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }

    current[lastPart!] = value;
  }

  private deleteEntry(path: string): boolean {
    const parts = this.getPathParts(path);
    const lastPart = parts.pop();
    let current = this.data;

    if (parts.length === 0) {
      // Deleting from root
      if (this.data[lastPart!]) {
        delete this.data[lastPart!];
        return true;
      } else {
        return false;
      }
    }

    for (const part of parts) {
      if (!current[part]) {
        return false;
      }
      current = current[part];
    }

    if (current[lastPart!]) {
      delete current[lastPart!];
      return true;
    } else {
      return false;
    }
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const dir = this.getEntry(path);

    if (!dir || typeof dir !== "object") {
      return undefined;
    }

    const files: FileEntry[] = [];
    const dirs: FolderEntry[] = [];

    for (const name in dir) {
      if (dir.hasOwnProperty(name)) {
        const entry = dir[name];
        if (entry.isFile) {
          files.push({
            name: name,
            size: entry.data.size,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified,
            mimeType: entry.mimeType,
            itemId: entry.itemId,
          });
        } else if (entry.isDir) {
          dirs.push({
            name: name,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified,
            itemId: entry.itemId,
          });
        }
      }
    }

    return {
      files: sortByKey(files, "name"),
      dirs: sortByKey(dirs, "name"),
      totalFiles: files.length,
      totalFolders: dirs.length,
      totalSize: files.reduce((acc, file) => acc + file.size, 0),
      shortcuts: {},
    };
  }

  async createDirectory(path: string): Promise<boolean> {
    if (this.getEntry(path)) {
      return false; // Directory already exists
    }

    const itemId = UUID();
    const now = new Date();
    this.setEntry(path, {
      isDir: true,
      dateCreated: now,
      dateModified: now,
      itemId: itemId,
    });
    return true;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const file = this.getEntry(path);
    if (!file || !file.isFile) {
      return undefined;
    }

    return await file.data.arrayBuffer();
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    const parts = this.getPathParts(path);
    const filename = parts.pop();
    const dirPath = parts.join("/");

    if (!filename) {
      return false;
    }

    if (dirPath && !this.getEntry(dirPath)) {
      await this.createDirectory(dirPath);
    }

    const itemId = UUID();
    const now = new Date();

    const fileEntry = {
      isFile: true,
      data: data,
      dateCreated: now,
      dateModified: now,
      mimeType: data.type,
      itemId: itemId,
    };

    this.setEntry(path, fileEntry);

    return true;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    const dir = this.getEntry(path);

    if (!dir || typeof dir !== "object") {
      return undefined;
    }

    const dirs: any[] = [];
    const files: FileEntry[] = [];

    for (const name in dir) {
      if (dir.hasOwnProperty(name)) {
        const entry = dir[name];
        if (entry.isFile) {
          files.push({
            name: name,
            size: entry.data.size,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified,
            mimeType: entry.mimeType,
            itemId: entry.itemId,
          });
        } else if (entry.isDir) {
          const childTree = await this.tree(path ? `${path}/${name}` : name); // Handle root case
          dirs.push({
            name: name,
            dateCreated: entry.dateCreated,
            dateModified: entry.dateModified,
            itemId: entry.itemId,
            children: childTree,
          });
        }
      }
    }

    return {
      dirs: dirs,
      files: files,
      shortcuts: {},
    };
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const sourceFile = this.getEntry(source);
    if (!sourceFile || !sourceFile.isFile) {
      return false;
    }
    return await this.writeFile(destination, sourceFile.data);
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    if (!(await this.copyItem(source, destination))) {
      return false;
    }
    return await this.deleteItem(source);
  }

  async deleteItem(path: string): Promise<boolean> {
    return this.deleteEntry(path);
  }

  async direct(path: string): Promise<string | undefined> {
    const file = this.getEntry(path);
    if (!file || !file.isFile) {
      return undefined;
    }
    return URL.createObjectURL(file.data);
  }

  async quota(): Promise<UserQuota> {
    let used = 0;

    const calculateSize = (obj: any) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const entry = obj[key];
          if (entry && entry.isFile) {
            used += entry.data.size;
          } else if (typeof entry === "object") {
            calculateSize(entry); // Recurse into subdirectories
          }
        }
      }
    };

    calculateSize(this.data);

    return {
      used: used,
      max: 1024 * 1024 * 1024, // 1GB
      free: 1024 * 1024 * 1024 - used,
      percentage: (used / (1024 * 1024 * 1024)) * 100,
    };
  }

  async takeSnapshot() {
    return await deepCopyWithBlobs<Record<string, any>>(this.data);
  }

  restoreSnapshot(snapshot: Record<string, any>) {
    for (const key in this.data) {
      delete this.data[key];
    }

    for (const key in snapshot) {
      this.data[key] = snapshot[key];
    }
  }
}
