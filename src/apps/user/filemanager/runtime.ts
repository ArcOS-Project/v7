import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { FilesystemDrive } from "$ts/fs/drive";
import { getDriveLetter, getParentDirectory } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import { ShutdownIcon } from "$ts/images/power";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { DirectoryReadReturn, FolderEntry } from "$types/fs";
import { LogLevel } from "$types/logging";
import type { RenderArgs } from "$types/process";

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
  drives = Store<Record<string, FilesystemDrive>>({});

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
    this.altMenu.set([
      {
        caption: "File",
        subItems: [
          { caption: "New window", icon: "plus" },
          { caption: "Refresh", icon: "rotate-cw" },
          { sep: true },
          { caption: "Upload", icon: "upload" },
          { caption: "Download", icon: "download" },
          { sep: true },
          { caption: "Exit", image: ShutdownIcon },
        ],
      },
      { caption: "Edit" },
      { caption: "View" },
      { caption: "Go" },
    ]);
    this.starting.set(false);
  }

  updateDrives() {
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

    this.drives.set(this.fs.drives);
  }

  async updateRootFolders() {
    this.Log(`Updating root folders`);

    try {
      const root = await this.fs.readDir("U:/");

      this.rootFolders.set(root?.dirs || []);
    } catch {
      this.rootFolders.set([]);
    }
  }

  async navigate(path: string) {
    this.Log(`Navigating to ${path}`);

    if (this.path() === path) return;

    this.loading.set(true);
    this.errored.set(false);
    this.path.set(path);

    await this.refresh();

    this.loading.set(false);
  }

  async refresh() {
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
    if (!e.shiftKey) return this.selection.set([path]);

    const selected = this.selection.get();

    if (selected.includes(path)) selected.splice(selected.indexOf(path), 1);
    else selected.push(path);

    this.selection.set(selected);

    return;
  }

  public setCopyFiles(files = this.selection()) {
    this.Log(`Setting COPY list to ${files.length} items`);

    this.copyList.set(files || []);
    this.cutList.set([]);
  }

  public setCutFiles(files = this.selection()) {
    this.Log(`Setting CUT list to ${files.length} items`);
    this.cutList.set(files || []);
    this.copyList.set([]);
  }
}
