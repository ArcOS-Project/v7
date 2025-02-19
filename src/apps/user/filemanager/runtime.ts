import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { FilesystemDrive } from "$ts/fs/drive";
import { getDriveLetter, getParentDirectory } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import { DriveIcon, FolderIcon } from "$ts/images/filesystem";
import { ShutdownIcon } from "$ts/images/power";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type {
  AppContextMenu,
  AppProcessData,
  ContextMenuItem,
} from "$types/app";
import type { DirectoryReadReturn, FolderEntry } from "$types/fs";
import { LogLevel } from "$types/logging";
import type { RenderArgs } from "$types/process";
import type { QuotedDrive } from "./types";

export class FileManagerRuntime extends AppProcess {
  path = Store<string>("");
  contents = Store<DirectoryReadReturn | undefined>();
  loading = Store<boolean>(false);
  errored = Store<boolean>(false);
  selection = Store<string[]>([]);
  copyList = Store<string[]>([]);
  cutList = Store<string[]>([]);
  starting = Store<boolean>(true);
  rootFolders = Store<FolderEntry[]>([]);
  drives = Store<Record<string, QuotedDrive>>({});
  private _refreshLocked = false;

  override contextMenu: AppContextMenu = {
    "sidebar-drive": [
      {
        caption: "Go here",
        action: (_, identifier) => {
          this.navigate(`${identifier}/`);
        },
        icon: "hard-drive",
      },
      { sep: true },
      {
        caption: "Unmount",
        action: (_, __, unmount) => {
          unmount();
        },
        icon: "x",
        disabled: (drive: FilesystemDrive) => drive.FIXED,
      },
    ],
  };

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path?: string
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  updateAltMenu() {
    const fileMenu = {
      caption: "File",
      subItems: [
        {
          caption: "New window",
          icon: "plus",
          action: () => {
            this.userDaemon?.spawnApp("fileManager", undefined, this.path());
          },
        },
        {
          caption: "Refresh",
          icon: "rotate-cw",
          action: async () => {
            this.loading.set(true);
            await this.refresh();
            this.loading.set(false);
          },
        },
        { sep: true },
        { caption: "Upload", icon: "upload" },
        { caption: "Download", icon: "download" },
        { sep: true },
        {
          caption: "Exit",
          image: ShutdownIcon,
          action: () => {
            this.closeWindow();
          },
        },
      ],
    };

    const menu: ContextMenuItem[] = [
      fileMenu,
      {
        caption: "Go",
        subItems: [
          ...this.folderGoItems(),
          { sep: true },
          ...this.driveGoItems(),
        ],
      },
    ];

    this.altMenu.set(menu);
  }

  driveGoItems(): ContextMenuItem[] {
    const result = [];
    const driveSubmenu = (drive: FilesystemDrive, id: string) => [
      {
        caption: "Go here",
        action: () => {
          this.navigate(`${drive.driveLetter || drive.uuid}:/`);
        },
        icon: "hard-drive",
      },
      { sep: true },
      {
        caption: "Unmount",
        action: () => {
          this.unmountDrive(drive, id);
        },
        disabled: () => drive.FIXED,
        icon: "x",
      },
    ];

    for (const [id, drive] of Object.entries(this.drives())) {
      const identifier = `${drive.data.driveLetter || drive.data.uuid}:`;

      result.push({
        caption: drive.data.driveLetter
          ? `${drive.data.label} (${drive.data.driveLetter}:)`
          : drive.data.label,
        subItems: driveSubmenu(drive.data, id),
        image: DriveIcon,
        isActive: () => this.path().startsWith(`${identifier}/`),
      });
    }

    return result;
  }

  folderGoItems(): ContextMenuItem[] {
    const result = [];

    for (const folder of this.rootFolders()) {
      result.push({
        caption: folder.name,
        image: FolderIcon,
        action: () => {
          this.navigate(`U:/${folder.name}`);
        },
      });
    }

    return result;
  }

  async render({ path }: RenderArgs) {
    this.updateDrives();

    await this.updateRootFolders();
    await this.navigate(path || "U:/");

    this.globalDispatch.subscribe("fs-umount-drive", () => this.updateDrives());
    this.globalDispatch.subscribe("fs-mount-drive", () => this.updateDrives());

    this.globalDispatch.subscribe("fs-flush-folder", ([path]) => {
      if (path && path.startsWith("U:")) {
        this.updateRootFolders();
      }
    });
    this.starting.set(false);
  }

  async updateDrives() {
    this.Log(`Updating drives`);

    const currentDrive = getDriveLetter(this.path(), true) || "";

    try {
      if (!this.fs.getDriveByLetter(currentDrive.slice(0, -1), false)) {
        this.navigate("U:/");
      }
    } catch {
      this.Log(
        "Failed to determine the currently selected drive",
        LogLevel.error
      );
    }

    const result: Record<string, QuotedDrive> = {};

    for (const [id, drive] of Object.entries(this.fs.drives)) {
      result[id] = { data: drive, quota: await drive.quota() };
    }

    this.drives.set(result);
    this.updateAltMenu();
  }

  async updateRootFolders() {
    this.Log(`Updating root folders`);

    try {
      const root = await this.fs.readDir("U:/");

      this.rootFolders.set(root?.dirs || []);
    } catch {
      this.rootFolders.set([]);
    }
    this.updateAltMenu();
  }

  async navigate(path: string) {
    this.Log(`Navigating to ${path}`);

    if (this.path() === path) return;

    this.loading.set(true);
    this.errored.set(false);
    this.path.set(path);

    await this.refresh();

    this.loading.set(false);
    this.updateAltMenu();
  }

  async refresh() {
    if (this._refreshLocked) return;

    this.Log(`Refreshing`);

    const path = this.path();

    if (!path) return;

    try {
      const contents = await this.fs.readDir(path);

      if (!contents) this.DirectoryNotFound();
      else {
        this.contents.set(contents);
      }
    } catch {
      this.DirectoryNotFound();
    } finally {
      await Sleep(10);
    }
  }

  DirectoryNotFound() {
    this.Log(`Directory Not Found!`);

    this.errored.set(true);

    MessageBox(
      {
        title: "Location unavailable",
        message: `The location you tried to navigate to is unavailable. Maybe the specified drive isn't mounted or the folder itself is missing.`,
        buttons: [
          {
            caption: "Your Drive",
            action: () => {
              this.navigate("U:/");
            },
          },
        ],
        sound: "arcos.dialog.error",
        image: ErrorIcon,
      },
      this.pid,
      true
    );
  }

  parentDir() {
    this.Log(`Navigating to parent directory`);

    const parent = getParentDirectory(this.path());

    this.navigate(parent || this.path());
  }

  public updateSelection(e: MouseEvent, path: string) {
    if (!e.shiftKey) {
      this.selection.set([path]);
      this.updateAltMenu();

      return;
    }

    const selected = this.selection.get();

    if (selected.includes(path)) selected.splice(selected.indexOf(path), 1);
    else selected.push(path);

    this.selection.set(selected);
    this.updateAltMenu();
  }

  public setCopyFiles(files = this.selection()) {
    this.Log(`Setting COPY list to ${files.length} items`);

    this.copyList.set(files || []);
    this.cutList.set([]);
    this.updateAltMenu();
  }

  public setCutFiles(files = this.selection()) {
    this.Log(`Setting CUT list to ${files.length} items`);
    this.cutList.set(files || []);
    this.copyList.set([]);
    this.updateAltMenu();
  }

  public async pasteFiles() {
    const copyList = this.copyList.get();
    const cutList = this.cutList.get();

    console.log(copyList, cutList);

    if (!copyList.length && !cutList.length) return;

    this.lockRefresh();

    if (copyList.length)
      await this.userDaemon?.copyMultiple(copyList, this.path(), this.pid);
    else if (cutList.length)
      await this.userDaemon?.moveMultiple(cutList, this.path(), this.pid);

    this.copyList.set([]);
    this.cutList.set([]);

    this.unlockRefresh();
  }

  unmountDrive(drive: FilesystemDrive, id: string) {
    const identifier = `${drive.driveLetter || drive.uuid}:`;

    MessageBox(
      {
        title: `Unmount ${drive.label || identifier}`,
        message: `Are you sure you want to unmount this drive?`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Unmount",
            action: async () => {
              await this.fs.umountDrive(id);
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

  public lockRefresh() {
    this._refreshLocked = true;
  }

  public unlockRefresh(refresh = true) {
    this._refreshLocked = false;

    if (refresh) this.refresh();
  }
}
