import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { DirectoryReadReturn } from "$types/fs";
import { LogLevel } from "$types/logging";
import type { ShortcutStore } from "$types/shortcut";

export class WallpaperRuntime extends AppProcess {
  contents = Store<DirectoryReadReturn | undefined>();
  selected = Store<string>();
  shortcuts = Store<ShortcutStore>({});
  iconsElement = Store<HTMLDivElement>();
  orphaned = Store<string[]>([]);
  directory: string;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    desktopDir?: string
  ) {
    super(handler, pid, parentPid, app);

    this.directory = desktopDir || "U:/Desktop";
    this.renderArgs = { desktopDir: this.directory };
    this.globalDispatch.subscribe<string>("fs-flush-folder", async (path) => {
      if (!path || this._disposed) return;

      if (path.startsWith(this.directory)) {
        await this.updateContents();
      }
    });
  }

  async render({ desktopDir }: { desktopDir: string }) {
    this.closeIfSecondInstance();

    try {
      await this.fs.createDirectory(desktopDir);
      await this.updateContents();
    } catch (e) {
      console.log(e);
      MessageBox(
        {
          title: "Failed to create home directory",
          message:
            "The desktop wasn't able to create the necessary desktop folder, which contains your desktop icons.",
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
    this.Log("Refreshing desktop icons!");

    const shortcuts = await this.fs.bulk(this.directory, "arclnk");
    const contents = await this.fs.readDir(this.directory);

    this.shortcuts.set(shortcuts);
    this.contents.set(contents);

    this.findAndDeleteOrphans(this.contents());
  }

  findAndDeleteOrphans(contents: DirectoryReadReturn | undefined) {
    const orphaned = this.orphaned();
    const udata = this.userPreferences();
    udata.appPreferences.desktopIcons ||= {};
    const desktopIcons = udata.appPreferences.desktopIcons;
    let orphanedCount = 0;

    for (const id of Object.keys(desktopIcons)) {
      const items = [
        ...(contents?.files.filter((f) => id === `icon$${f.itemId}`) || []),
        ...(contents?.dirs.filter((d) => id === `icon$${d.itemId}`) || []),
      ];

      if (!items.length) {
        this.Log(
          `Found orphaned icon position '${id}' in user preferences, deleting`,
          LogLevel.warning
        );

        orphaned.push(id);
        delete udata.appPreferences.desktopIcons[id];
        orphanedCount++;
      }
    }

    if (orphanedCount) this.userPreferences.set(udata);
    this.orphaned.set(orphaned);
  }

  findFreeDesktopIconPosition(
    identifier: string,
    wrapper: HTMLDivElement = this.iconsElement()
  ) {
    this.Log(`Finding first available icon position for '${identifier}'`);

    if (!wrapper) return { x: 0, y: 0 };

    return new Promise((r) => {
      this.userPreferences.update((v) => {
        function resolve(x: number, y: number) {
          r({ x, y });
          v.appPreferences.desktopIcons[`icon$${identifier}`] = { x, y };
          return v;
        }

        let x = 0;
        let y = 0;

        const desktopIcons = v?.appPreferences?.desktopIcons || {};

        function taken(x: number, y: number): boolean {
          const appdata = desktopIcons as Record<
            string,
            { x: number; y: number }
          >;
          const values = Object.values(appdata);
          const filtered = values.filter((v) => v.x == x * 80 && v.y == y * 85);

          return !!filtered.length;
        }

        if (!Object.keys(desktopIcons).join(",").includes("icon$")) {
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
}
