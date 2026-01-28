import { Fs } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { Service } from "$types/service";
import { UserPaths } from "../store";

export class RecentFilesService extends BaseService {
  Configuration = Store<string[]>([]);
  readonly CONFIG_PATH = join(UserPaths.System, "RecentFiles.json");

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    await this.loadConfiguration();

    let firstDone = false;
    this.Configuration.subscribe((v) => {
      if (!firstDone) return (firstDone = true);

      this.writeConfiguration(v);
    });
  }

  //#endregion LIFECYCLE
  //#region CONFIGURATION

  async loadConfiguration() {
    try {
      const content = tryJsonParse(arrayBufferToText((await Fs.readFile(this.CONFIG_PATH))!));

      if (!content || typeof content === "string") throw "";

      this.Configuration.set(content as string[]);
    } catch {
      await this.writeConfiguration([]);
    }
  }

  async writeConfiguration(configuration: string[]) {
    await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(configuration, null, 2)));
  }

  //#endregion
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
    if (this.Configuration().includes(path)) {
      this.removeFromRecents(path);
    }

    this.Configuration.update((v) => {
      v = [path].concat(v); // Push path to start of array
      return v;
    });

    return true;
  }

  removeFromRecents(path: string) {
    if (!this.Configuration().includes(path)) return false;

    this.Configuration.update((v) => {
      v.splice(v.indexOf(path), 1);
      return v;
    });

    return true;
  }

  getRecents() {
    return this.Configuration();
  }

  //#endregion
}

export const recentFilesService: Service = {
  name: "RecentFilesSvc",
  description: "Handles the storage of recent files",
  initialState: "started",
  process: RecentFilesService,
};
