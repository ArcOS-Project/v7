import type { ICommandResult } from "$interfaces/result";
import { Fs, Stack } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { CommandResult } from "$ts/result";
import { arrayBufferToText } from "$ts/util/convert";
import { tryJsonParse } from "$ts/util/json";
import type { DirectoryReadReturn, FilesystemProgressCallback } from "$types/fs";
import JSZip from "jszip";

export class ArchiveReaderProcess extends Process {
  filePath: string;
  private _zip?: JSZip;

  public get ZIP() {
    return this._zip;
  }

  constructor(pid: number, parentPid: number, filePath: string) {
    super(pid, parentPid);

    this.filePath = filePath;
  }

  async start() {
    if (!this.filePath) throw new Error("ArchiveReaderProcess requires a path to be specified.");
  }

  async open(onProgress?: FilesystemProgressCallback): Promise<ICommandResult> {
    try {
      const contents = await Fs.readFile(this.filePath, onProgress);
      if (!contents) throw new Error("Failed to obtain archive bytes from the filesystem");

      const zip = new JSZip();
      this._zip = await zip.loadAsync(contents, {});

      return CommandResult.Ok();
    } catch (e) {
      return CommandResult.ErrorEx(e);
    }
  }

  static async Create(path: string, parentPid?: number) {
    return await Stack.spawn(this, undefined, undefined, parentPid, path);
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const entries = this._zip?.files;
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

    const file = Object.entries(this._zip?.files || {}).filter(([itemPath, item]) => itemPath === path && !item.dir)[0];
    if (!file) return undefined;

    return await file[1].async("arraybuffer");
  }

  exist(...paths: string[]): boolean {
    for (const path of paths) {
      if (!this._zip?.files[path].name) return false;
    }

    return true;
  }

  async getJson<T = object>(path: string): Promise<ICommandResult<T>> {
    if (!this.exist(path)) return CommandResult.Error("File doesn't exist in archive");

    const arrayBuffer = await this.readFile(path);
    if (!arrayBuffer) {
      return CommandResult.Error("File is supposed to exist in archive but reading it failed");
    }

    const jsonic = tryJsonParse<T>(arrayBufferToText(arrayBuffer));
    if (!jsonic || typeof jsonic === "string") {
      return CommandResult.Error("Failed to convert input to JSON object");
    }

    return CommandResult.Ok(jsonic);
  }

  async stop() {
    this._zip = null!;
  }

  async close() {
    return await this.killSelf();
  }
}
