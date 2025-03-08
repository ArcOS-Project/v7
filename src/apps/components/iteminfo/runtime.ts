import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName, getParentDirectory } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { FileEntry, FolderEntry } from "$types/fs";
import type { RenderArgs } from "$types/process";
import { RenameItemApp } from "./renameitem/metadata";
import type { ItemInfo } from "./types";

export class ItemInfoRuntime extends AppProcess {
  info = Store<ItemInfo>();

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

  protected overlayStore: Record<string, App> = {
    renameItem: RenameItemApp,
  };

  render({ path, file }: RenderArgs) {
    file = file as FileEntry | FolderEntry;

    const drive = this.fs.getDriveByPath(path);
    const driveId = this.fs.getDriveIdByIdentifier(drive.driveLetter || drive.uuid);
    const name = getDirectoryName(path);
    const parent = getDirectoryName(getParentDirectory(path));
    const split = path.split(".");
    const extension = file.mimeType ? split[split.length - 1] : undefined;

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
        driveId,
        drive: drive.driveLetter ? `${drive.driveLetter}:/` : undefined,
        parent,
        extension,
      },
      isFolder: !file.mimeType,
      name,
    });
  }

  async open() {
    const info = this.info();

    if (info.isFolder) {
      await this.spawnApp("fileManager", +this.env.get("shell_pid"), info.location.fullPath);
    } else {
      const path = info.location.fullPath;
      const filename = getDirectoryName(path);
      const apps = await this.userDaemon?.findAppToOpenFile(path)!;

      if (!apps.length) {
        MessageBox(
          {
            title: `Unknown file type`,
            message: `ArcOS doesn't have an app that can open '${filename}'. Click <b>Open With</b> to pick from a list of applications.`,
            buttons: [
              {
                caption: "Open With",
                action: async () => {
                  await this.openWith(path);
                  this.closeWindow();
                },
              },
              {
                caption: "Okay",
                action: () => {
                  this.closeWindow();
                },
                suggested: true,
              },
            ],
            sound: "arcos.dialog.warning",
            image: ErrorIcon,
          },
          this.pid,
          true
        );

        return;
      }

      await this.closeWindow();
      return await this.spawnApp(apps[0].id, this.pid, path);
    }
  }

  async openWith(path: string) {
    await this.spawnOverlayApp("OpenWith", this.parentPid, path);
  }

  async renameItem() {
    this.spawnOverlay("renameItem", this.info().location.fullPath);
  }
}
