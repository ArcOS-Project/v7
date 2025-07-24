import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToText } from "$ts/fs/convert";
import type { FilesystemDrive } from "$ts/fs/drive";
import { getItemNameFromPath, getParentDirectory } from "$ts/fs/util";
import { DriveIcon } from "$ts/images/filesystem";
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
  drive: FilesystemDrive | undefined;
  isDrive = false;

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

  async start() {
    if (!this.renderArgs.path || !this.renderArgs.file) return false;

    this.isDrive = getParentDirectory(this.renderArgs.path) === this.renderArgs.path;

    try {
      if (this.isDrive) {
        const id = this.renderArgs.path.split(":")[0]; // Drive discriminator

        this.drive = this.fs.getDriveByLetter(id);

        if (!this.drive) this.isDrive = false; // Verify the drive exists
      }
    } catch {
      return false;
    }
  }

  async render({ path, file }: RenderArgs) {
    file = file as FileEntry | FolderEntry;

    try {
      const drive = this.fs.getDriveByPath(path);
      const name = getItemNameFromPath(path);
      const parent = getItemNameFromPath(getParentDirectory(path));
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
        // Longwinded and godawful way to get the shortcut metadata in this file
        this.shortcut.set(JSON.parse(arrayToText((await this.fs.readFile(this.info().location.fullPath))!)));
      }
    } catch {
      this.closeWindow();
    }
  }

  async open() {
    const info = this.info();
    await this.closeWindow(); // First get the process out of here

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

  unmount() {
    const identifier = `${this.drive!.driveLetter || this.drive!.uuid}:`;

    MessageBox(
      {
        title: `Unmount ${this.drive!.label || identifier}`,
        message: `Are you sure you want to unmount this drive?`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Unmount",
            action: async () => {
              await this.confirmUmountDrive(this.drive!, this.fs.getDriveIdByIdentifier(this.drive!.uuid));
            },
            suggested: true,
          },
        ],
        image: DriveIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async confirmUmountDrive(drive: FilesystemDrive, id: string) {
    if (this._disposed) return;

    const prog = await this.userDaemon!.FileProgress(
      {
        waiting: true,
        icon: DriveIcon,
        caption: `Unmounting ${drive.label || "drive"}...`,
        subtitle: `${drive.driveLetter || drive.uuid}:/`,
      },
      this.pid
    );

    await this.fs.umountDrive(id, false, (progress) => {
      prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
      prog.setWait(false);
      prog.setWork(true);
    });

    prog.stop();
    this.closeWindow();
  }
}
