import { AppProcess } from "$ts/apps/process";
import { isPopulatable } from "$ts/apps/util";
import { getIconPath } from "$ts/images";
import { DefaultMimeIcon } from "$ts/images/mime";
import { LogoutIcon, RestartIcon, ShutdownIcon } from "$ts/images/power";
import type { ProcessHandler } from "$ts/process/handler";
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

  //#region CONTROL FLOW

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.systemDispatch.subscribe("fs-flush-file", () => this.refresh());
  }

  async start() {
    this.env.set("arcfind_pid", this.pid);
    this.refresh();
  }

  //#endregion
  //#region REFRESHING

  async refresh() {
    this.Log("Refreshing ArcTerm");

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
          image: ShutdownIcon,
          action: () => {
            this.userDaemon?.shutdown();
          },
        },
        {
          caption: "Restart",
          description: "Leave the desktop and restart ArcOS",
          image: RestartIcon,
          action: () => {
            this.userDaemon?.restart();
          },
        },
        {
          caption: "Log off",
          description: "Leave the desktop and log out ArcOS",
          image: LogoutIcon,
          action: () => {
            this.userDaemon?.logoff();
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
      const info = this.userDaemon?.assoc?.getFileAssociation(file.name);
      result.push({
        caption: file.shortcut ? file.shortcut.name : file.name,
        description: file.shortcut ? `Shortcut - ${file.path}` : file.path,
        action: () => {
          this.userDaemon?.openFile(file.path, file.shortcut);
        },
        image: (file.shortcut ? getIconPath(file.shortcut.icon) : info?.icon) || DefaultMimeIcon,
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
          image: this.userDaemon?.getAppIcon(app),
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
      const tree = await this.fs.tree(UserPaths.Home);

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
