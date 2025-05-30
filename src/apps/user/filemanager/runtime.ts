import { AppProcess } from "$ts/apps/process";
import { GetConfirmation, MessageBox } from "$ts/dialog";
import { FilesystemDrive } from "$ts/fs/drive";
import { SharedDrive } from "$ts/fs/shares/drive";
import { DownloadFile, getDriveLetter, getItemNameFromPath, getParentDirectory, join } from "$ts/fs/util";
import { iconIdFromPath } from "$ts/images";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import { DownloadIcon, DriveIcon, FolderIcon } from "$ts/images/filesystem";
import { TrashIcon, UploadIcon } from "$ts/images/general";
import { DefaultMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { Plural } from "$ts/util";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { DirectoryReadReturn, FolderEntry } from "$types/fs";
import { LogLevel } from "$types/logging";
import type { RenderArgs } from "$types/process";
import type { ShortcutStore } from "$types/shortcut";
import { FileManagerAccelerators } from "./accelerators";
import { FileManagerAltMenu } from "./altmenu";
import { FileManagerContextMenu } from "./context";
import MyArcOs from "./FileManager/Virtual/MyArcOS.svelte";
import type { FileManagerNotice, LoadSaveDialogData, QuotedDrive, VirtualFileManagerLocation } from "./types";

export class FileManagerRuntime extends AppProcess {
  path = Store<string>("");
  contents = Store<DirectoryReadReturn | undefined>();
  shortcuts = Store<ShortcutStore>({});
  loading = Store<boolean>(false);
  errored = Store<boolean>(false);
  selection = Store<string[]>([]);
  copyList = Store<string[]>([]);
  cutList = Store<string[]>([]);
  starting = Store<boolean>(true);
  rootFolders = Store<FolderEntry[]>([]);
  drives = Store<Record<string, QuotedDrive>>({});
  notice = Store<FileManagerNotice | undefined>();
  showNotice = Store<boolean>(false);
  loadSave: LoadSaveDialogData | undefined;
  saveName = Store<string>();
  virtual = Store<VirtualFileManagerLocation | undefined>();
  directoryListing = Store<HTMLDivElement>();
  virtualLocations: Record<string, VirtualFileManagerLocation> = {
    my_arcos: {
      name: "My ArcOS",
      icon: "computer",
      component: MyArcOs as any,
    },
  };
  private _refreshLocked = false;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path?: string,
    loadSave?: LoadSaveDialogData
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
    this.loadSave = loadSave;

    if (loadSave) {
      this.windowTitle.set(loadSave.title);
      this.windowIcon.set(loadSave.icon);
      this.renderArgs.path = loadSave.startDir || UserPaths.Home;

      if (loadSave.isSave) {
        this.selection.subscribe((v) => {
          if (!v.length) return;

          this.saveName.set(getItemNameFromPath(v[0]));
        });

        if (loadSave.saveName) this.saveName.set(loadSave.saveName);
      }

      this.contextMenu = {};

      if (loadSave.isSave && loadSave.multiple) throw new Error("LoadSave: can't have both isSave and multiple");
      if (loadSave.folder && loadSave.isSave) throw new Error("LoadSave: can't have both folder and isSave");
      if (loadSave.folder && loadSave.multiple) throw new Error("LoadSave: can't have both folder and multiple");
    }

    this.dispatch.subscribe("navigate", (path) => {
      this.navigate(path);
    });
  }

  override contextMenu: AppContextMenu = FileManagerContextMenu(this);

  updateAltMenu() {
    if (this.loadSave) return;

    this.altMenu.set(FileManagerAltMenu(this));
  }

  async render({ path }: RenderArgs) {
    const startTime = performance.now();

    await this.navigate(path || "::my_arcos");
    await this.updateRootFolders();
    await this.updateDrives();

    this.systemDispatch.subscribe("fs-umount-drive", () => this.updateDrives());
    this.systemDispatch.subscribe("fs-mount-drive", () => this.updateDrives());

    this.systemDispatch.subscribe<string>("fs-flush-folder", (path) => {
      if (!path || this._disposed) return;

      if (path.startsWith("U:") && path.split("/").length == 1) {
        this.updateRootFolders();
      }

      this.updateDrives();

      if (this.path().startsWith(path) || this.path() === path) this.refresh();
    });

    this.acceleratorStore.push(...FileManagerAccelerators(this));

    this.starting.set(false);
    const startDuration = performance.now() - startTime;

    this.Log(`Starting file manager took ${startDuration}ms`);
  }

  async updateDrives() {
    if (this._disposed) return;
    this.Log(`Updating drives`);

    const currentDrive = getDriveLetter(this.path(), true) || "";

    try {
      if (!this.fs.getDriveByLetter(currentDrive.slice(0, -1), false)) {
        this.navigate(UserPaths.Home);
      }
    } catch {
      this.Log("Failed to determine the currently selected drive", LogLevel.error);
    }

    const result: Record<string, QuotedDrive> = {};

    for (const [id, drive] of Object.entries(this.fs.drives)) {
      result[id] = { data: drive, quota: await drive.quota() };
    }

    this.drives.set(result);
    this.updateAltMenu();
  }

  async updateRootFolders() {
    if (this._disposed) return;
    this.Log(`Updating root folders`);

    try {
      const root = this.path() === UserPaths.Home ? this.contents() : await this.fs.readDir(UserPaths.Home);

      this.rootFolders.set(root?.dirs || []);
    } catch {
      this.rootFolders.set([]);
    }
    this.updateAltMenu();
  }

  async navigate(path: string) {
    if (this._disposed) return;
    this.Log(`Navigating to ${path}`);

    if (this.path() === path) return;

    this.virtual.set(undefined);

    if (path.startsWith("::")) {
      const virtual = this.virtualLocations[path.replace("::", "")];

      if (!virtual) {
        this.DirectoryNotFound();
        return;
      }

      this.virtual.set(virtual);
      this.path.set(path);

      return;
    }

    this.loading.set(true);
    this.errored.set(false);
    this.path.set(path);
    this.selection.set([]);

    await this.refresh();

    this.loading.set(false);
    this.updateAltMenu();
  }

  async refresh() {
    if (this._disposed) return;
    if (this._refreshLocked) return;

    this.Log(`Refreshing`);

    const path = this.path();

    if (!path) return;

    try {
      const contents = await this.fs.readDir(path);
      const shortcuts = contents?.shortcuts;

      if (!contents) this.DirectoryNotFound();
      else {
        this.contents.set(contents);
        this.shortcuts.set(shortcuts || {});
        let driveLabel: string = "";
        const driveLetter = getDriveLetter(path, false);
        const driveIdentifier = getDriveLetter(path, true);

        if (driveIdentifier) {
          const drive = this.fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        }

        this.windowTitle.set(getItemNameFromPath(path) || (driveLetter ? `${driveLetter}/` : driveLabel));
      }

      this.checkNotice();
    } catch {
      this.DirectoryNotFound();
    }
  }

  DirectoryNotFound() {
    if (this._disposed) return;
    this.Log(`Directory Not Found!`);

    this.errored.set(true);
    this.contents.set(undefined);

    MessageBox(
      {
        title: "Location unavailable",
        message: `The location you tried to navigate to is unavailable. Maybe the specified drive isn't mounted or the folder itself is missing.`,
        buttons: [
          {
            caption: "Go Home",
            action: () => {
              this.navigate(UserPaths.Home);
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
    if (this._disposed) return;
    this.Log(`Navigating to parent directory`);

    const parent = getParentDirectory(this.path());

    this.navigate(parent || this.path());
  }

  public updateSelection(e: MouseEvent, path: string) {
    if (this._disposed) return;
    if (!e.shiftKey || (this.loadSave && !this.loadSave?.multiple)) {
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
    if (this._disposed) return;
    this.Log(`Setting COPY list to ${files.length} items`);

    this.copyList.set(files || []);
    this.cutList.set([]);
    this.updateAltMenu();
  }

  public setCutFiles(files = this.selection()) {
    if (this._disposed) return;
    this.Log(`Setting CUT list to ${files.length} items`);
    this.cutList.set(files || []);
    this.copyList.set([]);
    this.updateAltMenu();
  }

  public async pasteFiles() {
    if (this._disposed) return;

    const copyList = this.copyList.get();
    const cutList = this.cutList.get();

    if (!copyList.length && !cutList.length) return;

    this.lockRefresh();

    if (copyList.length) await this.userDaemon?.copyMultiple(copyList, this.path(), this.pid);
    else if (cutList.length) await this.userDaemon?.moveMultiple(cutList, this.path(), this.pid);

    this.copyList.set([]);
    this.cutList.set([]);

    this.unlockRefresh();
  }

  unmountDrive(drive: FilesystemDrive, id: string) {
    if (this._disposed) return;

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
              await this.confirmUmountDrive(drive, id);
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
  }

  async uploadItems() {
    if (this._disposed) return;

    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        icon: UploadIcon,
        waiting: true,
        caption: "Uploading your files...",
        subtitle: `To ${getItemNameFromPath(this.path())}`,
      },
      this.pid
    );

    try {
      await this.fs.uploadFiles(this.path(), "*/*", true, async (progress) => {
        prog.show();
        prog.setDone(0);
        prog.setMax(progress.max + 1);
        prog.setDone(progress.value);
        if (progress.what) prog.updSub(progress.what);
      });
    } catch {
      prog.mutErr(`Failed to upload files! One of the files you tried to upload might be too big.`);
    }

    prog.mutDone(+1);
  }

  public lockRefresh() {
    if (this._disposed) return;
    this._refreshLocked = true;
  }

  public unlockRefresh(refresh = true) {
    if (this._disposed) return;
    this._refreshLocked = false;

    if (refresh) this.refresh();
  }

  async openFile(path: string) {
    if (this._disposed) return;
    if (this.loadSave) {
      this.confirmLoadSave();
      return;
    }

    this.userDaemon?.openFile(path);
  }

  async deleteSelected() {
    if (this._disposed) return;
    const items = this.selection();
    if (!items.length) return;

    MessageBox(
      {
        title: `Delete ${items.length} ${Plural("item", items.length)}?`,
        message: `Are you sure you want to <b>permanently</b> delete the selected ${Plural(
          "item",
          items.length
        )}? This cannot be undone.`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => this.confirmDeleteSelected(),
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
        image: WarningIcon,
      },
      this.pid,
      true
    );
  }

  async confirmDeleteSelected() {
    if (this._disposed) return;
    const items = this.selection();
    const prog = await this.userDaemon!.FileProgress(
      {
        max: items.length,
        waiting: true,
        type: "quantity",
        icon: TrashIcon,
        caption: `Deleting ${items.length} ${Plural("item", items.length)}...`,
        subtitle: "Working...",
      },
      this.pid
    );

    prog.show();

    for (const item of items) {
      prog.setWait(false);
      prog.setWork(true);
      prog.updSub(item);

      try {
        await this.fs.deleteItem(item, false);
      } catch (e) {
        prog.mutErr(`Failed to delete ${item}: ${e}`);
      }

      prog.mutDone(+1);
    }

    this.systemDispatch.dispatch("fs-flush-folder", this.path());
  }

  async downloadSelected() {
    if (this._disposed) return;
    const selected = this.selection();

    if (!selected.length) return;

    const filename = getItemNameFromPath(selected[0]);

    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        caption: `Preparing for download`,
        subtitle: selected[0],
        icon: DownloadIcon,
      },
      this.pid
    );

    try {
      const file = await this.fs.readFile(selected[0], (progress) => {
        prog.setWait(false);
        prog.setWork(true);
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });
      const dir = await this.fs.readDir(selected[0]);

      if (!file && !dir) {
        MessageBox(
          {
            title: "Failed to download",
            message:
              "ArcOS can't find the file you are trying to download. It might be moved or otherwise unavailable. Please try again.",
            buttons: [
              {
                caption: "Okay",
                suggested: true,
                action: async () => {
                  this.refresh();
                },
              },
            ],
            image: ErrorIcon,
            sound: "arcos.dialog.error",
          },
          this.pid,
          true
        );

        return;
      }

      if (!file && dir) {
        // Check if the user is trying to download a folder
        return;
      }

      DownloadFile(file!, filename);
    } catch {
      prog.stop();
      return false;
    }
  }

  singlefySelected() {
    if (this._disposed) return;
    const selected = this.selection();

    if (!selected.length) return;

    this.selection.set([selected[selected.length - 1]]);
  }

  async selectorUp() {
    if (this._disposed) return;
    this.singlefySelected();
    const selected = this.selection.get()[0];
    const dir = this.contents.get();
    const workingDir = this.path();
    const paths = [
      ...(dir?.dirs.map((a) => join(workingDir, a.name)) || []),
      ...(dir?.files.map((a) => join(workingDir, a.name)) || []),
    ];
    const index = paths.indexOf(selected);

    if (!selected) this.selection.set([paths[0]]);

    const path = paths[index < 0 || index - 1 < 0 ? paths.length - 1 : index - 1];

    this.selection.set([path]);
    this.directoryListing()?.querySelector(`button.item[data-path="${path}"]`)?.scrollIntoView(false);
  }

  async selectorDown() {
    if (this._disposed) return;
    this.singlefySelected();
    const selected = this.selection.get()[0];
    const dir = this.contents.get();
    const workingDir = this.path();
    const paths = [
      ...(dir?.dirs.map((a) => join(workingDir, a.name)) || []),
      ...(dir?.files.map((a) => join(workingDir, a.name)) || []),
    ];
    const index = paths.indexOf(selected);

    if (!selected) this.selection.set([paths[0]]);

    const path = paths[index < 0 || index + 1 > paths.length - 1 ? 0 : index + 1];

    this.selection.set([path]);
    this.directoryListing()?.querySelector(`button.item[data-path="${path}"]`)?.scrollIntoView(false);
  }

  public async EnterKey(alternative = false) {
    if (this._disposed) return;
    if (this.loadSave) return;

    const paths = this.selection.get();

    if (alternative && paths.length > 1) {
      MessageBox(
        {
          title: "Can't do that",
          message:
            "It is not possible to use <code>Shift</code>+<code>Enter</code> on multiple items. Please select a single item, or press <code>Enter</code> without <code>Shift</code>.",
          image: ErrorIcon,
          buttons: [{ caption: "Okay", action() {}, suggested: true }],
        },
        this.pid,
        true
      );

      return;
    }

    if (paths.length > 1) {
      const continueOperation = await GetConfirmation(
        {
          title: "Hold up!",
          message:
            "You're about to open multiple items at the same time. This could cause unexpected behaviour, depending on the number of files. Continue?",
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );

      if (!continueOperation) return;
    }

    for (const path of paths) {
      if (!path) continue;

      const isDir = this.isDirectory(path);

      if (isDir) {
        if (!alternative) await this.navigate(path);
        else await this.spawnApp("fileManager", this.parentPid, path);

        continue;
      }

      if (alternative) await this.userDaemon?.openWith(path);
      else await this.openFile(path);
    }
  }

  public isDirectory(path: string, workingPath?: string) {
    if (this._disposed) return;
    workingPath ||= this.path();
    const dir = this.contents.get();

    return dir?.dirs.map((a) => join(workingPath, a.name)).includes(path);
  }

  async confirmLoadSave() {
    if (this._disposed) return;
    const selection = this.selection();
    const saveName = this.saveName();
    const path = this.path();
    const result = this.loadSave?.multiple
      ? this.selection()
      : this.loadSave?.folder
      ? [selection[0] || path]
      : [!this.loadSave?.isSave ? selection[0] : join(path, saveName)];

    this.systemDispatch.dispatch("ls-confirm", [this.loadSave?.returnId, result]);

    await this.closeWindow();
  }

  async createShortcut(name: string, path: string, folder = false) {
    const paths = await this.userDaemon?.LoadSaveDialog({
      title: "Pick where to create the shortcut",
      icon: FolderIcon,
      folder: true,
      startDir: UserPaths.Desktop,
    });

    if (!paths?.[0]) return;

    this.userDaemon?.createShortcut(
      {
        type: folder ? "folder" : "file",
        target: path,
        icon: folder ? "FolderIcon" : iconIdFromPath(this.userDaemon?.getMimeIconByFilename(name) || DefaultMimeIcon),
        name: `${name} - Shortcut`,
      },
      join(paths[0], `${name}.arclnk`)
    );
  }

  async checkNotice() {
    this.showNotice.set(false);
    this.notice.set(undefined);

    const drive = this.fs.getDriveByPath(this.path());

    if (this.shareAccessIsAdministrative(drive)) {
      this.notice.set({
        icon: "shield-user",
        text: "You're accessing a share as an administrator!",
        className: "warning",
      });
      this.showNotice.set(true);
    }
  }

  shareAccessIsAdministrative(drive: FilesystemDrive) {
    const userInfo = this.userDaemon?.userInfo!;
    const thisUser = userInfo._id;
    const userIsAdmin =
      userInfo.admin && (userInfo.adminScopes.includes("admin.god") || userInfo.adminScopes.includes("admin.shares.interact"));

    if (!drive || !(drive instanceof SharedDrive) || !thisUser) return false;

    if (!drive.shareInfo.accessors.includes(thisUser) && drive.shareInfo.userId !== thisUser && userIsAdmin) {
      return true;
    }

    return false;
  }
}
