import { CommandResult } from "$ts/result";
import type { DirectoryReadReturn, DriveCapabilities, FilesystemProgressCallback } from "$types/fs";
import type { GitFolder } from "$types/git";
import axios from "axios";
import { fromExtension } from "human-filetypes";
import { FilesystemDrive } from "./generic";
import { Daemon } from "$ts/daemon";

export class SourceFilesystemDrive extends FilesystemDrive {
  override IDENTIFIES_AS: string = "src";
  override FILESYSTEM_SHORT: string = "SCFS";
  override FILESYSTEM_LONG: string = "Source Code Filesystem";
  override label: string = "Source Code";
  override FIXED: boolean = false;
  override REMOVABLE: boolean = false;
  override READONLY: boolean = true;
  override HIDDEN: boolean = true;

  private readonly GIT_BRANCH = "main";
  private readonly GIT_REPO = "ArcOS-Project/v7";
  private readonly GIT_API = "https://api.github.com";
  private readonly GIT_RAW = "https://raw.githubusercontent.com";

  private rawClient = axios.create({ baseURL: this.GIT_RAW });
  private apiClient = axios.create({ baseURL: this.GIT_API });

  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: false,
    readFile: true,
    writeFile: false,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    direct: false,
    quota: false,
    bulk: false,
    stat: false,
  };

  constructor(uuid: string, letter?: string) {
    super(uuid, letter);
  }

  async _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean> {
    const enabled = Daemon.preferences().globalSettings.enableSourceDrive;

    return !!enabled;
  }

  private async getSourceFile(path: string): Promise<CommandResult<ArrayBuffer>> {
    try {
      const response = await this.rawClient.get(`/${this.GIT_REPO}/refs/heads/${this.GIT_BRANCH}/${path}`, {
        responseType: "arraybuffer",
      });
      if (response.status >= 400) throw "Invalid response type " + response.status;

      return CommandResult.Ok<ArrayBuffer>(response.data);
    } catch (e) {
      return CommandResult.Error(`Failed to read file: ${e}`);
    }
  }

  private async getSourceDirectory(path: string): Promise<CommandResult<GitFolder>> {
    try {
      const response = await this.apiClient.get(`/repos/${this.GIT_REPO}/contents/${path}`, { responseType: "json" });
      if (response.status >= 400) throw "Invalid response type " + response.status;

      return CommandResult.Ok<GitFolder>(response.data);
    } catch (e) {
      return CommandResult.Error(`Failed to read folder: ${e}`);
    }
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const dirResult = await this.getSourceDirectory(path);
    if (!dirResult.success) return undefined;

    const gitFolder = dirResult.result!;
    const fileCount = gitFolder.filter((i) => i.type === "file").length;
    const folderCount = gitFolder.filter((i) => i.type === "dir").length;
    const totalSize = gitFolder.map((i) => i.size).reduce((p, v) => p + v, 0);

    const directory: DirectoryReadReturn = {
      dirs: [],
      files: [],
      totalFiles: fileCount,
      totalFolders: folderCount,
      totalSize,
      shortcuts: {},
    };

    for (const item of gitFolder) {
      switch (item.type) {
        case "dir":
          directory.dirs.push({
            name: item.name,
            dateCreated: new Date(),
            dateModified: new Date(),
            itemId: item.sha,
          });
          break;
        case "file":
          directory.files.push({
            name: item.name,
            dateCreated: new Date(),
            dateModified: new Date(),
            itemId: item.sha,
            size: item.size,
            mimeType: fromExtension(item.name),
          });
          break;
      }
    }

    return directory;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const fileResult = await this.getSourceFile(path);
    if (!fileResult.success) return undefined;

    return fileResult.result!;
  }
}
