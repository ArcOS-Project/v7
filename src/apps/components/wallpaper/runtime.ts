import type { IWallpaperRuntime } from "$interfaces/runtimes/IWallpaperRuntime";
import { AppProcess } from "$ts/apps/process";
import { ConfigurationBuilder } from "$ts/config";
import { Daemon, Fs, SysDispatch } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/apps/app";
import { LogLevel } from "$types/shared/logging";
import type { DirectoryReadReturn } from "$types/system/fs";
import type { ShortcutStore } from "$types/system/shortcut";
import { WallpaperContextMenu } from "./context";
import type { DesktopIcons } from "./types";

export class WallpaperRuntime extends AppProcess implements IWallpaperRuntime {
  CONFIG_PATH = join(UserPaths.System, "DesktopIcons.json");
  contents = Store<DirectoryReadReturn | undefined>();
  selected = Store<string>();
  shortcuts = Store<ShortcutStore>({});
  iconsElement = Store<HTMLDivElement>();
  orphaned = Store<string[]>([]);
  loading = Store<boolean>(false);
  directory: string;
  Positions = Store<DesktopIcons>({});
  Configuration = new ConfigurationBuilder<DesktopIcons>()
    .ForProcess(this)
    .ReadsFrom(this.Positions)
    .WritesTo(this.CONFIG_PATH)
    .WithDefaults({})
    .WithCooldown(500)
    .Build();

  public contextMenu: AppContextMenu = WallpaperContextMenu(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, desktopDir?: string) {
    super(pid, parentPid, app);

    this.directory = desktopDir || UserPaths.Desktop;
    SysDispatch.subscribe<string>("fs-flush-folder", async (path) => {
      if (!path || this._disposed) return;

      if (path.startsWith(this.directory)) {
        await this.updateContents();
      }
    });

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.Configuration.initialize();
  }

  async render() {
    if (await this.closeIfSecondInstance()) return false;

    try {
      await this.updateContents();
    } catch (e) {
      MessageBox(
        {
          title: "Failed to load the desktop",
          message: "ArcOS wasn't able to load your desktop icons. Please restart to try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        this.parentPid
      );
      this.closeWindow();
    }
  }

  //#endregion
  //#region ACTIONS

  async updateContents() {
    this.loading.set(true);
    this.Log("Refreshing desktop icons!");

    try {
      const contents = await Fs.readDir(this.directory);
      const shortcuts = contents?.shortcuts || {};

      this.shortcuts.set(shortcuts);
      this.contents.set(contents);

      this.findAndDeleteOrphans(this.contents());
    } catch {
      return;
    }
    this.loading.set(false);
  }

  //#endregion
  //#region DESKTOP ICONS

  findAndDeleteOrphans(contents: DirectoryReadReturn | undefined) {
    const orphaned = this.orphaned();
    const config = this.Positions();
    let orphanedCount = 0;

    for (const id of Object.keys(config)) {
      const items = [
        ...(contents?.files.filter((f) => id === `icon$${f.itemId}`) || []),
        ...(contents?.dirs.filter((d) => id === `icon$${d.itemId}`) || []),
      ];

      if (!items.length) {
        this.Log(`Found orphaned icon position '${id}' in config, deleting`, LogLevel.warning);

        orphaned.push(id);
        delete config[id];
        orphanedCount++;
      }
    }

    if (orphanedCount) this.Positions.set(config);
    this.orphaned.set(orphaned);
  }

  findFreeDesktopIconPosition(identifier: string, wrapper: HTMLDivElement = this.iconsElement()) {
    this.Log(`Finding first available icon position for '${identifier}'`);

    if (!wrapper) return { x: 0, y: 0 };

    return new Promise((r) => {
      this.Positions.update((v) => {
        function resolve(x: number, y: number) {
          r({ x, y });
          v[`icon$${identifier}`] = { x, y };
          return v;
        }

        let x = 0;
        let y = 0;

        function taken(x: number, y: number): boolean {
          const values = Object.values(v);
          const filtered = values.filter((v) => v.x == x * 80 && v.y == y * 85);

          return !!filtered.length;
        }

        if (!Object.keys(v).join(",").includes("icon$")) {
          return resolve(x, y);
        }

        if (!taken(0, 0)) return resolve(0, 0);

        let maxX = Math.floor(wrapper.offsetWidth / 80);
        let maxY = Math.floor(wrapper.offsetHeight / 85);

        let foundValue = false;

        while (!foundValue) {
          if (y >= maxY - 1) {
            y = 0;

            x++;
          } else {
            y++;
          }

          if (x > maxX - 1) {
            if (taken(x, y)) continue;
            return resolve(x * 80, y * 85);
          }

          const isTaken = taken(x, y);

          if (!isTaken) foundValue = true;
        }

        return resolve(x * 80, y * 85);
      });
    });
  }

  //#endregion
  //#region FILESYSTEM

  async deleteItem(path: string) {
    if (this._disposed) return false;
    this.Log(`deleteItem`);

    return await Daemon.files!.moveToTrashOrDeleteItem(path);
  }

  async uploadItems() {
    if (this._disposed) return;
    this.Log(`uploadItems`);

    await Daemon.files?.uploadItems(UserPaths.Desktop);
  }

  //#endregion
}
