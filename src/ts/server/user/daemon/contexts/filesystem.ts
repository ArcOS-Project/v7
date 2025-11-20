import {
  DummyFileProgress,
  type FileProgressMutator,
  type FsProgressOperation,
  type FsProgressProc,
} from "$apps/components/fsprogress/types";
import type { LoadSaveDialogData } from "$apps/user/filemanager/types";
import { MessageBox } from "$ts/dialog";
import type { MemoryFilesystemDrive } from "$ts/drives/temp";
import { ZIPDrive } from "$ts/drives/zipdrive";
import { Env, Fs, KernelDispatchS, KernelStack } from "$ts/env";
import { applyDefaults } from "$ts/hierarchy";
import { Sleep } from "$ts/sleep";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import { ElevationLevel } from "$types/elevation";
import type { FileHandler, FileOpenerResult } from "$types/fs";
import type { ArcShortcut } from "$types/shortcut";
import type { CategorizedDiskUsage } from "$types/user";
import { Daemon, type UserDaemon } from "..";
import { DefaultFileHandlers, UserPaths } from "../../store";
import { UserContext } from "../context";

export class FilesystemUserContext extends UserContext {
  private thumbnailCache: Record<string, string> = {};
  public TempFs?: MemoryFilesystemDrive;
  public fileHandlers: Record<string, FileHandler>;
  public mountedDrives: string[] = [];
  private TempFsSnapshot: Record<string, any> = {};

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);

    this.fileHandlers = DefaultFileHandlers(Daemon()!);
  }

  async _init() {
    this.TempFs = Fs().getDriveById("temp") as MemoryFilesystemDrive;
    this.TempFsSnapshot = await this.TempFs.takeSnapshot();
  }

  async _deactivate() {
    this.TempFs?.restoreSnapshot(this.TempFsSnapshot!);
    Fs().umountDrive(`userfs`, true);
    Fs().umountDrive(`admin`, true);
  }

  async mountZip(path: string, letter?: string, fromSystem = false) {
    if (this._disposed) return;

    this.Log(`Mounting ZIP file at ${path} as ${letter || "?"}:/`);

    const elevated =
      fromSystem ||
      (await Daemon()!?.elevation?.manuallyElevate({
        what: "ArcOS needs your permission to mount a ZIP file",
        title: getItemNameFromPath(path),
        description: letter ? `As ${letter}:/` : "As a drive",
        image: "DriveIcon",
        level: ElevationLevel.medium,
      }));

    if (!elevated) return;

    const prog = await this.FileProgress(
      {
        type: "size",
        caption: "Mounting drive",
        subtitle: `${path}${letter ? ` as ${letter}:/` : ""}`,
        icon: "DriveIcon",
      },
      +Env().get("shell_pid") || undefined
    );

    const mount = await Fs().mountDrive(
      btoa(path),
      ZIPDrive,
      letter,
      (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      },
      path
    );

    prog.stop();
    return mount;
  }

  async unmountMountedDrives() {
    this.Log("Unmounting mounted drives");

    for (const drive of this.mountedDrives) {
      Fs().umountDrive(drive, true);
    }
  }

  async FileProgress(initialData: Partial<FsProgressOperation>, parentPid?: number): Promise<FileProgressMutator> {
    const uuid = UUID();
    const progress = Store<FsProgressOperation>(
      applyDefaults(initialData, {
        max: 0,
        done: 0,
        type: "none",
        caption: ``,
        subtitle: ``,
        icon: "",
        errors: [],
      })
    );
    let process: FsProgressProc | undefined;
    let shown = false;

    const Log = (m: string) => /*this.Log(`FileProgress::${uuid}: ${m}`)*/ m;

    this.Log(`Creating file progress '${uuid}': ${initialData.caption}`);

    const show = async () => {
      Log(`Showing`);
      if (shown) return;
      shown = true;

      if (!parentPid) {
        process = await Daemon()!.spawn?.spawnApp<FsProgressProc>("FsProgress", 0, progress);

        if (typeof process == "string") return DummyFileProgress;
      } else {
        process = await Daemon()!.spawn?.spawnOverlay<FsProgressProc>("FsProgress", parentPid, progress);

        if (typeof process == "string") return DummyFileProgress;
      }
    };

    const mutateMax = (mutator: number) => {
      Log(`Mutating max value: ${mutator}`);

      progress.update((v) => {
        v.max += mutator;
        return v;
      });
    };

    const mutDone = (mutator: number) => {
      Log(`Mutating done: ${mutator}`);

      progress.update((v) => {
        v.done += mutator;
        return v;
      });
    };

    const setMax = (value: number) => {
      Log(`Setting max value: ${value}`);

      progress.update((v) => {
        v.max = value;
        return v;
      });
    };

    const setDone = (value: number) => {
      Log(`Setting done: ${value}`);

      progress.update((v) => {
        v.done = value;
        return v;
      });
    };

    const updateCaption = (caption: string) => {
      Log(`Updating caption: ${caption}`);

      progress.update((v) => {
        v.caption = caption;
        return v;
      });
    };

    const updSub = (subtitle: string) => {
      Log(`Updating subtitle: ${subtitle}`);

      progress.update((v) => {
        v.subtitle = subtitle;
        return v;
      });
    };

    const mutErr = (error: string) => {
      Log(`Mutating error: ${error}`);

      progress.update((v) => {
        v.errors.push(error);
        return v;
      });
    };

    const setErrors = (value: string[]) => {
      Log(`Setting errors: ${value.length} error(s)`);

      progress.update((v) => {
        v.errors = value;
        return v;
      });
    };

    const stop = async () => {
      Log(`Stopping`);

      await process?.closeWindow();
    };

    const setCancel = (cancel: (() => void) | undefined) => {
      Log(`Setting cancel: ${cancel}`);

      progress.update((v) => {
        v.cancel = cancel;

        return v;
      });
    };

    const setType = (type: "none" | "quantity" | "size") => {
      progress.update((v) => {
        v.type = type;

        return v;
      });
    };

    return {
      progress,
      process: () => process,
      mutateMax,
      mutDone,
      updateCaption,
      updSub,
      setMax,
      setDone,
      mutErr,
      setErrors,
      stop,
      show,
      setCancel,
      setType,
    };
  }

  async moveMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Moving ${sources.length} items to ${destination}`);

    const destinationName = getItemNameFromPath(destination);
    const firstSourceParent = getParentDirectory(sources[0]);

    const progress = await this.FileProgress(
      {
        type: "quantity",
        max: sources.length,
        icon: "FolderIcon",
        caption: `Moving files to ${destinationName || destination}`,
        subtitle: "Working...",
      },
      pid
    );

    for (const source of sources) {
      await progress.show();
      progress.updSub(source);

      const childProgress = await this.FileProgress(
        {
          type: "none",
          caption: `Moving ${getItemNameFromPath(source)} to ${destinationName || destination}`,
          subtitle: source,
          icon: "FolderIcon",
          done: 0,
          max: 100,
        },
        progress.process()?.pid || pid
      );

      try {
        const sourceName = getItemNameFromPath(source);
        await Fs().moveItem(source, `${destination}/${sourceName}`, false, (prog) => {
          childProgress.setMax(prog.max + 1);
          childProgress.setDone(prog.value);
          childProgress.setType("quantity");
          childProgress.show();
        });
      } catch {
        progress.mutErr(`Failed to move ${source}`);
      }

      progress.mutDone(+1);

      await Sleep(200); // prevent rate limit
      childProgress.stop();
    }
    progress.stop();

    KernelDispatchS().dispatch("fs-flush-folder", firstSourceParent);
    if (firstSourceParent !== destination) KernelDispatchS().dispatch("fs-flush-folder", destination);
    KernelStack()?.renderer?.focusPid(pid);
  }

  async copyMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Copying ${sources.length} items to ${destination}`);

    const destinationName = getItemNameFromPath(destination);

    const progress = await this.FileProgress(
      {
        type: "quantity",
        max: sources.length,
        done: 0,
        icon: "FolderIcon",
        caption: `Copying files to ${destinationName || destination}`,
        subtitle: "Working...",
      },
      pid
    );

    for (const source of sources) {
      await progress.show();
      progress.updSub(source);

      const childProgress = await this.FileProgress(
        {
          type: "none",
          caption: `Copying ${getItemNameFromPath(source)} to ${destinationName || destination}`,
          subtitle: source,
          icon: "FolderIcon",
          done: 0,
          max: 100,
        },
        progress.process()?.pid || pid
      );

      try {
        await Fs().copyItem(source, destination, false, (prog) => {
          childProgress.setMax(prog.max + 1);
          childProgress.setDone(prog.value);
          childProgress.setType("quantity");
          childProgress.show();
        });
      } catch {
        progress.mutErr(`Failed to copy ${source}`);
      }

      progress.mutDone(+1);

      await Sleep(200); // prevent rate limit
      childProgress.stop();
    }
    progress.stop();

    KernelDispatchS().dispatch("fs-flush-folder", destination);
    KernelStack()?.renderer?.focusPid(pid);
  }

  async findHandlerToOpenFile(path: string): Promise<FileOpenerResult[]> {
    this.Log(`Finding a handler to open ${path}`);

    const split = path.split(".");
    const filename = getItemNameFromPath(path);
    const extension = `.${split[split.length - 1]}`;
    const config = Daemon()!.assoc?.getConfiguration();
    const apps = config?.associations.apps;
    const handlers = config?.associations.handlers;
    const result: FileOpenerResult[] = [];
    const appStore = this.appStorage();

    for (const handlerId in handlers) {
      const handler = this.fileHandlers[handlerId];
      const extensions = handlers[handlerId];

      if (extensions.includes(extension)) {
        result.push({
          type: "handler",
          handler,
          id: handlerId,
        });
      }
    }

    for (const appId in apps) {
      const extensions = apps[appId];

      if (extensions.includes(extension) || extensions.includes(filename)) {
        result.push({
          type: "app",
          app: appStore?.getAppSynchronous(appId),
          id: appId,
        });
      }
    }

    return result;
  }

  async getAllFileHandlers() {
    const appStore = this.appStorage();
    const apps = await appStore?.get();
    const result: FileOpenerResult[] = [];

    for (const id in this.fileHandlers) {
      const handler = this.fileHandlers[id];

      result.push({
        type: "handler",
        handler,
        id,
      });
    }

    for (const app of apps!) {
      result.push({
        type: "app",
        app,
        id: app.id,
      });
    }

    return result;
  }

  async LoadSaveDialog(data: Omit<LoadSaveDialogData, "returnId">): Promise<string[] | [undefined]> {
    const uuid = UUID();

    this.Log(`Spawning LoadSaveDialog with UUID ${uuid}`);

    await Daemon()!.spawn?.spawnOverlay("fileManager", +Env().get("shell_pid"), data.startDir || UserPaths.Home, {
      ...data,
      returnId: uuid,
    });

    return new Promise<string[] | [undefined]>(async (r) => {
      KernelDispatchS().subscribe<[string, string[] | [undefined]]>("ls-confirm", ([id, paths]) => {
        if (id === uuid) r(paths);
      });
      KernelDispatchS().subscribe("ls-cancel", ([id]) => {
        if (id === uuid) r([undefined]);
      });
    });
  }

  async openFile(path: string, shortcut?: ArcShortcut): Promise<any> {
    this.Log(`Opening file "${path}" (${shortcut ? "Shortcut" : "File"})`);

    if (this._disposed) return;
    if (shortcut) return await Daemon()!?.shortcuts?.handleShortcut(path, shortcut);

    const filename = getItemNameFromPath(path);
    const result = Daemon()!.assoc?.getFileAssociation(path);

    if (!result?.handledBy.app && !result?.handledBy?.handler) {
      await MessageBox(
        {
          title: `Unknown file type`,
          message: `ArcOS doesn't have an app that can open '${filename}'. Click <b>Open With</b> to pick from a list of applications.`,
          buttons: [
            {
              caption: "Open With",
              action: async () => {
                await this.openWith(path);
              },
            },
            { caption: "Okay", action: () => {}, suggested: true },
          ],
          sound: "arcos.dialog.warning",
          image: "ErrorIcon",
        },
        +Env().get("shell_pid"),
        true
      );

      return;
    }

    if (result.handledBy.handler) return await result.handledBy.handler.handle(path);

    return await Daemon()!?.spawn?.spawnApp(result.handledBy.app?.id!, +Env().get("shell_pid"), path);
  }

  async openWith(path: string) {
    this.Log(`Opening OpenWith for "${path}"`);

    if (this._disposed) return;

    await Daemon()!?.spawn?.spawnOverlay("OpenWith", +Env().get("shell_pid"), path);
  }

  async determineCategorizedDiskUsage(): Promise<CategorizedDiskUsage> {
    const total = this.userInfo!.storageSize;
    const apps = (await Fs().readDir(UserPaths.Applications))?.totalSize || 0;
    const system = (await Fs().readDir(UserPaths.System))?.totalSize || 0;
    const trash = (await Fs().readDir(UserPaths.Trashcan))?.totalSize || 0;
    const home = (await Fs().readDir(UserPaths.Home))?.totalSize || 0;
    const used = apps + system + home;
    const result: CategorizedDiskUsage = {
      sizes: {
        apps,
        system: system - trash,
        trash,
        home,
      },
      absolutePercentages: {
        apps: (100 / total) * apps,
        system: (100 / total) * (system - trash),
        trash: (100 / total) * trash,
        home: (100 / total) * home,
      },
      relativePercentages: {
        apps: (100 / used) * apps,
        system: (100 / used) * (system - trash),
        trash: (100 / used) * trash,
        home: (100 / used) * home,
      },
      total,
      used,
      free: total - (apps + system + home),
    };

    return result;
  }

  async getThumbnailFor(path: string): Promise<string | undefined> {
    if (this.thumbnailCache[path]) return this.thumbnailCache[path];

    const dataUrl = await Fs().imageThumbnail(path, 64);
    if (dataUrl) this.thumbnailCache[path] = dataUrl;

    return dataUrl;
  }

}
