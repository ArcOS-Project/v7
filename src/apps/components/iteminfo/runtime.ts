import { AppProcess } from "$ts/apps/process";
import { Env, Fs } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { arrayBufferToText } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { FileEntry, FolderEntry } from "$types/fs";
import type { RenderArgs } from "$types/process";
import type { ArcShortcut } from "$types/shortcut";
import type { ItemInfo } from "./types";

export class ItemInfoRuntime extends AppProcess {
  info = Store<ItemInfo>();
  shortcut = Store<ArcShortcut>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path: string, file: FileEntry | FolderEntry) {
    super(pid, parentPid, app);

    this.renderArgs = { path, file };

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.renderArgs.path || !this.renderArgs.file) return false;
  }

  async render({ path, file }: RenderArgs) {
    file = file as FileEntry | FolderEntry;

    try {
      const drive = Fs.getDriveByPath(path);
      const name = getItemNameFromPath(path);
      const parent = getItemNameFromPath(getParentDirectory(path));
      const split = path.split(".");
      const extension = file.mimeType ? split[split.length - 1] : undefined;
      const isShortcut = file?.name?.endsWith(".arclnk");
      const info = Daemon?.assoc?.getFileAssociation(path);

      this.info.set({
        meta: {
          sort: file.mimeType ? "file" : "folder",
          created: file.dateModified,
          modified: file.dateCreated,
          mimetype: info?.friendlyName || file.mimeType,
          size: file.mimeType ? file.size : undefined,
        },
        location: {
          fullPath: path,
          driveFs: drive.FILESYSTEM_SHORT,
          drive: drive.driveLetter ? `${drive.driveLetter}:/` : undefined,
          parent,
          extension,
        },
        isFolder: !file.mimeType,
        isShortcut,
        name,
      });

      if (isShortcut) {
        // Longwinded and godawful way to get the shortcut metadata in this file
        this.shortcut.set(JSON.parse(arrayBufferToText((await Fs.readFile(this.info().location.fullPath))!)!)); // hoooo this is awful ;-;
      }
    } catch {
      this.closeWindow();
    }
  }

  //#endregion
  //#region ACTIONS

  async open() {
    this.Log(`Opening item`);

    const info = this.info();
    await this.closeWindow(); // First get the process out of here

    if (info.isFolder) {
      await this.spawnApp("fileManager", +Env.get("shell_pid"), info.location.fullPath);
    } else {
      const path = info.location.fullPath;

      Daemon?.files?.openFile(path, this.shortcut());
    }
  }

  async openWith(path: string) {
    this.Log(`openWith: ${path}`);

    await this.spawnOverlayApp("OpenWith", this.parentPid, path);
  }

  async renameItem() {
    this.Log(`renameItem`);

    this.spawnOverlayApp("FsRenameItem", this.pid, this.info().location.fullPath);
  }

  //#endregion
}
