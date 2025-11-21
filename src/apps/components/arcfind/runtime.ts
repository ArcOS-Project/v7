import { AppProcess } from "$ts/apps/process";
import { isPopulatable } from "$ts/apps/util";
import { Env, Fs, Stack, SysDispatch } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { PathedFileEntry, RecursiveDirectoryReadReturn } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { UserPreferences } from "$types/user";
import Fuse from "fuse.js";

export class ArcFindRuntime extends AppProcess {
  private fileSystemIndex: PathedFileEntry[] = [];
  private searchItems: SearchItem[] = [];
  public loading = Store<boolean>(false);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    SysDispatch.subscribe("fs-flush-file", () => this.refresh());

    this.setSource(__SOURCE__);
  }
  async start() {
    if (Stack.getProcess(+Env.get("arcfind_pid"))) return false;

    Env.set("arcfind_pid", this.pid);
    this.refresh();
    const preferences = this.userPreferences();
    let excludeShortcuts = preferences.searchOptions.excludeShortcuts;
    this.userPreferences.subscribe((v) => {
      if (v.searchOptions.excludeShortcuts !== excludeShortcuts) {
        this.refresh();
        excludeShortcuts = v.searchOptions.excludeShortcuts;
      }
    });
  }

  async stop() {
    Env.delete("arcfind_pid");
  }

  //#endregion
  //#region REFRESHING

  async refresh() {
    this.Log("Refreshing ArcFind");

    if (this.loading()) return;

    this.loading.set(true);

    const preferences = this.userPreferences();
    const sources = {
      filesystem: preferences.searchOptions.includeFilesystem,
      apps: preferences.searchOptions.includeApps,
      power: preferences.searchOptions.includePower,
    };
    const items: SearchItem[] = [];

    if (sources.filesystem) items.push(...(await this.getFilesystemSearchSupplier(preferences)));
    if (sources.apps) items.push(...(await this.getAppSearchSupplier(preferences)));
    if (sources.power)
      items.push(
        {
          caption: "Shut down",
          description: "Leave the desktop and turn off ArcOS",
          image: this.getIconCached("ShutdownIcon"),
          action: () => {
            Daemon?.power?.shutdown();
          },
        },
        {
          caption: "Restart",
          description: "Leave the desktop and restart ArcOS",
          image: this.getIconCached("RestartIcon"),
          action: () => {
            Daemon?.power?.restart();
          },
        },
        {
          caption: "Log off",
          description: "Leave the desktop and log out ArcOS",
          image: this.getIconCached("LogoutIcon"),
          action: () => {
            Daemon?.power?.logoff();
          },
        }
      );

    this.searchItems = items;
    this.loading.set(false);
    return items;
  }

  async getFilesystemSearchSupplier(preferences: UserPreferences) {
    const result: SearchItem[] = [];
    const index =
      preferences.searchOptions.cacheFilesystem && this.fileSystemIndex && this.fileSystemIndex.length
        ? this.fileSystemIndex
        : await this.getFlatTree(); // Resort to caching if it exists and the user allows it

    this.fileSystemIndex = index; // Set the cache

    for (const file of index) {
      const info = Daemon?.assoc?.getFileAssociation(file.name);
      if (preferences.searchOptions.excludeShortcuts && !!file.shortcut) continue;
      result.push({
        caption: file.shortcut ? file.shortcut.name : file.name,
        description: file.shortcut ? `Shortcut - ${file.path}` : file.path,
        action: () => {
          Daemon?.files?.openFile(file.path, file.shortcut);
        },
        // Not using getIconCached for info?.icon because FileAssocSvc already returns a resolved icon path
        image: (file.shortcut ? this.getIconCached(file.shortcut.icon) : info?.icon) || this.getIconCached("DefaultMimeIcon"),
      });
    }

    return result;
  }

  async getAppSearchSupplier(preferences: UserPreferences) {
    const result: SearchItem[] = [];
    const apps = this.appStore()?.buffer() || [];

    for (const app of apps) {
      const populatable = isPopulatable(app);
      const thirdParty = app.thirdParty || app.entrypoint;

      // Longwinded way to determine if an app can be searched for
      if (
        (preferences.searchOptions.showHiddenApps || preferences.shell.visuals.showHiddenApps ? true : populatable) &&
        (preferences.searchOptions.showThirdPartyApps ? true : !thirdParty)
      ) {
        result.push({
          caption: app.metadata.name,
          description: `By ${app.metadata.author}`,
          image: this.getIconCached(`@app::${app.id}`),
          action: () => {
            this.spawnApp(app.id, this.pid);
          },
        });
      }
    }

    return result;
  }

  async getFlatTree() {
    try {
      const result: PathedFileEntry[] = [];
      const tree = await Fs.tree(UserPaths.Home);

      const recurse = (tree: RecursiveDirectoryReadReturn, path = "U:") => {
        try {
          for (const file of tree.files) {
            result.push({ ...file, path: `${path}/${file.name}`, shortcut: tree.shortcuts?.[file.name] }); // Add path to each file
          }
          for (const dir of tree.dirs) {
            recurse(dir.children, `${path}/${dir.name}`); // Get the contents of the enclosed dir
          }
        } catch {
          /** silently error */
        }
      };

      recurse(tree!, UserPaths.Home); // Recurse the contents

      return result;
    } catch {
      return [];
    }
  }

  //#endregion
  //#region ARCFIND

  async Search(query: string) {
    if (this.safeMode || this.loading()) return [];

    const options = {
      includeScore: true,
      keys: ["caption", "description"],
    };

    const fuse = new Fuse(this.searchItems, options);
    const result = fuse.search(query);

    return result.map((r) => ({ ...r, id: UUID() })); // Add a UUID to each search result
  }

  //#endregion
}
