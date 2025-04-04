import { AppProcess } from "$ts/apps/process";
import { arrayToText } from "$ts/fs/convert";
import { getDirectoryName, getParentDirectory } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { FileEntry, FolderEntry } from "$types/fs";
import type { RenderArgs } from "$types/process";
import type { ArcShortcut } from "$types/shortcut";
import type { ItemInfo } from "./types";

export class ItemInfoRuntime extends AppProcess {
  info = Store<ItemInfo>();
  shortcut = Store<ArcShortcut>();

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path: string,
    file: FileEntry | FolderEntry
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs = { path, file };
  }

  async render({ path, file }: RenderArgs) {
    file = file as FileEntry | FolderEntry;

    const drive = this.fs.getDriveByPath(path);
    const driveId = this.fs.getDriveIdByIdentifier(drive.driveLetter || drive.uuid);
    const name = getDirectoryName(path);
    const parent = getDirectoryName(getParentDirectory(path));
    const split = path.split(".");
    const extension = file.mimeType ? split[split.length - 1] : undefined;
    const isShortcut = file?.name?.endsWith(".arclnk");

    this.info.set({
      meta: {
        sort: file.mimeType ? "file" : "folder",
        created: file.dateModified,
        modified: file.dateCreated,
        mimetype: file.mimeType,
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
      this.shortcut.set(JSON.parse(arrayToText((await this.fs.readFile(this.info().location.fullPath))!)));
    }
  }

  async open() {
    const info = this.info();
    await this.closeWindow();

    if (info.isFolder) {
      await this.spawnApp("fileManager", +this.env.get("shell_pid"), info.location.fullPath);
    } else {
      const path = info.location.fullPath;

      this.userDaemon?.openFile(path, this.shortcut());
    }
  }

  async openWith(path: string) {
    await this.spawnOverlayApp("OpenWith", this.parentPid, path);
  }

  async renameItem() {
    this.spawnOverlayApp("FsRenameItem", this.pid, this.info().location.fullPath);
  }
}
