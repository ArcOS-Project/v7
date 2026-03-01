import type { IRecentFilesService } from "$interfaces/services/RecentFilesSvc";
import { ConfigurationBuilder } from "$ts/config";
import { Fs } from "$ts/env";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { Service } from "$types/service";

export class RecentFilesService extends BaseService implements IRecentFilesService {
  Recents = Store<string[]>([]);
  readonly CONFIG_PATH = join(UserPaths.System, "RecentFiles.json");
  private Configuration = new ConfigurationBuilder<string[]>()
    .ForProcess(this)
    .ReadsFrom(this.Recents)
    .WritesTo(this.CONFIG_PATH)
    .WithDefaults([])
    .WithCooldown(100)
    .Build();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    this.initBroadcast?.("Starting recent files service");
    await this.Configuration.initialize();
  }

  //#endregion LIFECYCLE
  //#region EXTERNAL API

  addToRecents(path: string) {
    try {
      Fs.validatePath(path);
    } catch {
      return false;
    }

    // Only allow files from the home folder or other drives except temp
    if (path.startsWith(UserPaths.System) || path.startsWith(UserPaths.Applications) || path.startsWith("T:/")) return false;

    // Remove if the path already exists in the list so that it'll be moved to the top
    if (this.Recents().includes(path)) {
      this.removeFromRecents(path);
    }

    this.Recents.update((v) => {
      v = [path].concat(v); // Push path to start of array
      return v;
    });

    return true;
  }

  removeFromRecents(path: string) {
    if (!this.Recents().includes(path)) return false;

    this.Recents.update((v) => {
      v.splice(v.indexOf(path), 1);
      return v;
    });

    return true;
  }

  getRecents() {
    return this.Recents();
  }

  //#endregion
}

export const recentFilesService: Service = {
  name: "RecentFilesSvc",
  description: "Handles the storage of recent files",
  initialState: "started",
  process: RecentFilesService,
};
