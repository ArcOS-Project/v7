import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IArcFindService } from "$interfaces/services/IArcFindService";
import { Stack, Env, Daemon, Fs } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { isPopulatable } from "$ts/util/apps";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { PathedFileEntry, RecursiveDirectoryReadReturn } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { Service } from "$types/service";
import type { UserPreferences } from "$types/user";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js";

export class ArcFindService extends BaseService implements IArcFindService {
  private fileSystemIndex: PathedFileEntry[] = [];
  private searchItems: SearchItem[] = [];
  public loading = Store<boolean>(false);
  public searchResults = Store<FuseResult<SearchItem>[]>([]);
  public searchQuery = Store<string>();
  public searching = Store<boolean>(false);
  public SelectionIndex = Store<number>(0);

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (message: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    if (Stack.getProcess(+Env.get("arcfind_pid"))) return false;

    Env.set("arcfind_pid", this.pid);

    let excludeShortcuts = Daemon.preferences().searchOptions.excludeShortcuts;

    Daemon.preferences.subscribe((v) => {
      if (v.searchOptions.excludeShortcuts !== excludeShortcuts) {
        this.refresh();
        excludeShortcuts = v.searchOptions.excludeShortcuts;
      }
    });

    this.searchQuery.subscribe(async (v) => {
      if (!v) {
        // Reset the search stuff
        this.SelectionIndex.set(0);
        this.searchResults.set([]);
        return;
      }

      this.searching.set(true);
      const result = await this.Search(v);

      if (result.length > 8) result.length = 8; // Cut the list down if it's too long

      this.searchResults.set(result);
      this.searching.set(false);
    });
  }

  async stop() {
    Env.delete("arcfind_pid");
  }
  //#region REFRESHING

  async refresh() {
    this.Log("Refreshing ArcFind");

    if (this.loading()) return;

    this.loading.set(true);

    const preferences = Daemon.preferences();
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
          image: Daemon.icons!.getIconCached("ShutdownIcon"),
          action: () => {
            Daemon?.power?.shutdown();
          },
        },
        {
          caption: "Restart",
          description: "Leave the desktop and restart ArcOS",
          image: Daemon.icons!.getIconCached("RestartIcon"),
          action: () => {
            Daemon?.power?.restart();
          },
        },
        {
          caption: "Log off",
          description: "Leave the desktop and log out ArcOS",
          image: Daemon.icons!.getIconCached("LogoutIcon"),
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
        image:
          (file.shortcut ? Daemon.icons!.getIconCached(file.shortcut.icon) : info?.icon) ||
          Daemon.icons!.getIconCached("DefaultMimeIcon"),
      });
    }

    return result;
  }

  async getAppSearchSupplier(preferences: UserPreferences) {
    const result: SearchItem[] = [];
    const apps = Daemon.appStorage()?.buffer() || [];

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
          image: Daemon.icons!.getIconCached(`@app::${app.id}`),
          action: () => {
            Daemon.spawn?.spawnApp(app.id, this.pid);
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
    if (Daemon.safeMode || this.loading()) return [];

    const options = {
      includeScore: true,
      keys: ["caption", "description"],
    };

    const fuse = new Fuse(this.searchItems, options);
    const result = fuse.search(query);

    return result.map((r) => ({ ...r, id: UUID() })); // Add a UUID to each search result
  }

  public async Trigger(result: SearchItem) {
    await result.action(result);

    this.shell!.startMenuOpened.set(false);
  }

  public Submit() {
    const index = this.SelectionIndex.get();
    const results = this.searchResults();
    if (!results.length) return;

    this.searchQuery.set("");

    // Trigger the selected search result
    this.Trigger(results[index == -1 ? 0 : index].item); // Default to index 0
  }

  public MutateIndex(e: KeyboardEvent) {
    if (!e?.key) return;

    if (e.key === "Escape") return this.shell!.startMenuOpened.set(false); // Close the start menu upon escape

    const key = e.key.toLowerCase();
    const results = this.searchResults();
    let index = this.SelectionIndex();

    if (!results.length) return (index = -1); // Reset the index if no results
    if (key == "enter") return this.Submit(); // Execute the selected result upon enter

    let length = results.length - 1;

    switch (key) {
      case "arrowup":
        index--;
        if (index < 0) index = length; // Reset to end of list if index below 0
        break;

      case "arrowdown":
        index++;
        if (index > length) index = 0; // Reset to 0 if index above length
        break;
    }

    this.SelectionIndex.set(index);
  }

  //#endregion
}

export const arcFindService: Service = {
  name: "ArcFindSvc",
  initialState: "started",
  description: "Search the world of ArcOS",
  process: ArcFindService,
};
