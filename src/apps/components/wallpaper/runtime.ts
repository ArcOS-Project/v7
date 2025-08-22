import { AppProcess } from "$ts/apps/process";
import { getReadableVibrantColor } from "$ts/color";
import { MessageBox } from "$ts/dialog";
import { arrayToText, textToBlob } from "$ts/fs/convert";
import { getItemNameFromPath, join } from "$ts/fs/util";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import { UploadIcon } from "$ts/images/general";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { DirectoryReadReturn } from "$types/fs";
import { LogLevel } from "$types/logging";
import type { ShortcutStore } from "$types/shortcut";
import { WallpaperContextMenu } from "./context";
import type { DesktopIcons } from "./types";

export class WallpaperRuntime extends AppProcess {
  CONFIG_PATH = join(UserPaths.System, "DesktopIcons.json");
  contents = Store<DirectoryReadReturn | undefined>();
  selected = Store<string>();
  shortcuts = Store<ShortcutStore>({});
  iconsElement = Store<HTMLDivElement>();
  orphaned = Store<string[]>([]);
  loading = Store<boolean>(false);
  directory: string;
  Configuration = Store<DesktopIcons>({});

  public contextMenu: AppContextMenu = WallpaperContextMenu(this);

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, desktopDir?: string) {
    super(handler, pid, parentPid, app);

    this.directory = desktopDir || UserPaths.Desktop;
    this.systemDispatch.subscribe<string>("fs-flush-folder", async (path) => {
      if (!path || this._disposed) return;

      if (path.startsWith(this.directory)) {
        await this.updateContents();
      }
    });
    this.userPreferences.subscribe(async (v) => {
      getReadableVibrantColor((await this.userDaemon?.getWallpaper(v.desktop.wallpaper))!.url).then((c) => console.log(c));
    });
  }

  async start() {
    const migrated = await this.migrateDesktopIcons();
    if (!migrated) await this.loadConfiguration();

    let firstSub = false;

    this.Configuration.subscribe((v) => {
      if (!firstSub) {
        firstSub = true;
        return;
      }
      this.writeConfiguration(v);
    });
  }

  async render() {
    this.closeIfSecondInstance();

    try {
      await this.updateContents();
    } catch (e) {
      MessageBox(
        {
          title: "Failed to load the desktop",
          message: "ArcOS wasn't able to load your desktop icons. Please restart to try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.parentPid
      );
      this.closeWindow();
    }
  }

  async updateContents() {
    this.loading.set(true);
    this.Log("Refreshing desktop icons!");

    try {
      const contents = await this.fs.readDir(this.directory);
      const shortcuts = contents?.shortcuts || {};

      this.shortcuts.set(shortcuts);
      this.contents.set(contents);

      this.findAndDeleteOrphans(this.contents());
    } catch {
      return;
    }
    this.loading.set(false);
  }

  findAndDeleteOrphans(contents: DirectoryReadReturn | undefined) {
    const orphaned = this.orphaned();
    const config = this.Configuration();
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

    if (orphanedCount) this.Configuration.set(config);
    this.orphaned.set(orphaned);
  }

  findFreeDesktopIconPosition(identifier: string, wrapper: HTMLDivElement = this.iconsElement()) {
    this.Log(`Finding first available icon position for '${identifier}'`);

    if (!wrapper) return { x: 0, y: 0 };

    return new Promise((r) => {
      this.Configuration.update((v) => {
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
            return resolve(x * 80, y * 85);
          }

          const isTaken = taken(x, y);

          if (!isTaken) foundValue = true;
        }

        return resolve(x * 80, y * 85);
      });
    });
  }

  async deleteItem(path: string) {
    const filename = getItemNameFromPath(path);

    MessageBox(
      {
        title: `Delete file?`,
        message: `Are you sure you want to <b>permanently</b> delete ${filename}? This cannot be undone.`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              try {
                this.fs.deleteItem(path, true);
              } catch {}
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      +this.env.get("shell_pid"),
      true
    );
  }

  async uploadItems() {
    if (this._disposed) return;

    const prog = await this.userDaemon!.FileProgress(
      {
        type: "size",
        icon: UploadIcon,
        waiting: true,
        caption: "Uploading your files...",
        subtitle: `To ${getItemNameFromPath(this.directory)}`,
      },
      +this.env.get("shell_pid")
    );

    try {
      await this.fs.uploadFiles(this.directory, "*/*", true, async (progress) => {
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

  async loadConfiguration() {
    const contents = await this.fs.readFile(this.CONFIG_PATH);
    if (!contents) return await this.writeConfiguration({});

    const json = tryJsonParse<DesktopIcons>(arrayToText(contents));
    if (!json || typeof json === "string") return await this.writeConfiguration({});

    this.Configuration.set(json);
  }

  async writeConfiguration(data: DesktopIcons) {
    await this.fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(data, null, 2)));

    return data;
  }

  // 7.0.5 -> 7.0.6+
  // Migration of desktop icons from the preferences to a dedicated file in U:/System
  async migrateDesktopIcons() {
    const migrationPath = join(UserPaths.Migrations, "DeskIconMig-706.lock");
    const pref = this.userPreferences().appPreferences.desktopIcons;
    const migration = await this.fs.stat(migrationPath);

    if (pref && !migration) {
      await this.writeConfiguration(pref);
      this.Configuration.set(pref);

      this.userPreferences.update((v) => {
        delete v.appPreferences.desktopIcons;
        return v;
      });

      await this.fs.writeFile(migrationPath, textToBlob(`${Date.now()}`));
      return true;
    }

    return false;
  }
}
