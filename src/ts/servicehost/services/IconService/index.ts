import type { IIconService } from "$interfaces/services/IconService";
import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import { getAllImages, getGroupedIcons, iconIdFromPath, maybeIconId } from "$ts/images";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { Service } from "$types/service";

export class IconService extends BaseService implements IIconService {
  PATH = join(UserPaths.System, "IconSet.json");
  FILE_CACHE: Record<string, string> = {}; // R<id, url>
  ICON_TYPES = ["fs", "builtin", "app"];
  DEFAULT_ICON = "";
  Configuration = Store<Record<string, string>>({});
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Starting icon service");
    this.Configuration.set(await this.loadConfiguration());
    await this.cacheEverything();

    let initialDone = false;

    this.Configuration.subscribe((v) => {
      if (!initialDone) return (initialDone = true);

      this.writeConfiguration(v);
      this.cacheEverything();
    });
  }

  //#endregion
  //#region CONFIGURATION

  async loadConfiguration() {
    this.Log(`Loading configuration`);
    const config = tryJsonParse<Record<string, string>>(arrayBufferToText((await Fs.readFile(this.PATH))!));

    if (!config || typeof config === "string") {
      return await this.writeConfiguration(this.defaultConfiguration());
    }

    return config;
  }

  async writeConfiguration(config: Record<string, string>) {
    this.Log(`Writing configuration: ${Object.keys(config).length} icons`);

    await Fs.writeFile(this.PATH, textToBlob(JSON.stringify(config, null, 2)));

    return config;
  }

  defaultConfiguration() {
    const icons = getAllImages();
    const config: Record<string, string> = {};

    for (const icon in icons) {
      config[icon] = `@builtin::${icon}`;
    }

    return config;
  }

  //#endregion

  async getIcon(id: string, noCache = false): Promise<string> {
    if (!id) return this.DEFAULT_ICON;
    const icon = id.startsWith("@") ? id : this.Configuration()[id];

    if (!icon) return this.DEFAULT_ICON;
    try {
      const [type, data] = this.parseIcon(icon);
      let iconPath: string;

      switch (type) {
        case "app":
          const app = Daemon!.appStorage()?.getAppSynchronous(data);
          if (!app) iconPath = this.DEFAULT_ICON;
          else iconPath = this.getAppIcon(app);
          break;
        case "builtin":
          iconPath = maybeIconId(data) || this.DEFAULT_ICON;
          break;
        case "fs":
          const direct = (noCache ? undefined : this.FILE_CACHE[data]) || (await Fs.direct(data));
          if (!direct) iconPath = this.DEFAULT_ICON;
          else {
            this.FILE_CACHE[data] = iconPath = direct;
          }
          break;
      }

      // iconPath = maybeIconId(iconPath);

      return iconPath;
    } catch (e) {
      this.Log(`Falling back to default because of error: ${e}`);
      return this.DEFAULT_ICON;
    }
  }

  getIconCached(id: string): string {
    if (!id) return this.DEFAULT_ICON;

    // The below if statement is an ugly way to fix #50.
    //
    // There's no real way to know the workingDirectory at this stage, since this function is being called from
    // IconService.getAppIcon with just a bare @local call, not specifying any additional data to help us identify
    // the app in question. Without knowing the app, we can't possibly know where the file is supposed to be read from,
    // so I'm just returning DEFAULT_ICON because I don't feel like rewriting this stuff rn.
    //
    // - Izaak Kuipers, September 25th 2025
    if (id.startsWith("@local:")) return this.DEFAULT_ICON;

    const icon = id.startsWith("@") ? id : this.Configuration()[id];

    if (!icon) return this.DEFAULT_ICON;
    try {
      const [type, data] = this.parseIcon(icon);
      let iconPath: string;

      switch (type) {
        case "app":
          const app = Daemon!.appStorage()?.getAppSynchronous(data);
          if (!app) iconPath = this.DEFAULT_ICON;
          else iconPath = this.getAppIcon(app, app.workingDirectory);
          break;
        case "builtin":
          iconPath = maybeIconId(data) || this.DEFAULT_ICON;
          break;
        case "fs":
          iconPath = this.FILE_CACHE[data] || this.DEFAULT_ICON;
          break;
        default:
          iconPath = this.DEFAULT_ICON;
      }

      // iconPath = maybeIconId(iconPath);

      return iconPath;
    } catch (e) {
      this.Log(`Falling back to default because of error: ${e}`);
      return this.DEFAULT_ICON;
    }
  }

  parseIcon(id: string): ["fs" | "builtin" | "app", string] {
    if (!id.startsWith("@") || !id.includes("::")) throw new Error(`Malformed icon ID ${id}`);

    const [type, data] = id.replace("@", "").split("::");

    if (!this.ICON_TYPES.includes(type)) throw new Error(`Unknown icon type ${type}`);

    return [type as any, data];
  }

  async cacheEverything() {
    const icons = this.Configuration();
    const promises = [];
    const known: string[] = [];

    this.Log(`cacheEverything: Now caching everything (${Object.entries(icons).length})...`);

    function noop() {}

    for (const icon in icons) {
      promises.push(known.includes(icons[icon]) ? noop() : this.getIcon(icon));
      if (!known.includes(icons[icon])) known.push(icons[icon]);
    }

    await Promise.all(promises);

    this.Log(`cacheEverything: Caching completed: ${promises.length} promises`);
  }

  getAppIcon(app: App, workingDirectory?: string) {
    if (!app) return this.getIconCached("QuestionIcon");

    const { icon } = app.metadata;
    try {
      const maybe = this.getIconCached(icon);
      const appStore = Daemon!.appStorage();

      if (icon.startsWith("http")) return icon;
      if (maybe !== icon && maybe !== this.DEFAULT_ICON) return maybe;
      if (icon.startsWith("@local:")) {
        const path = join(workingDirectory || app.workingDirectory || "", icon.replace("@local:", ""));

        if (appStore?.appIconCache[path]) return appStore?.appIconCache[path];
      }

      if (iconIdFromPath(icon)) return icon;

      return this.getIconCached("ComponentIcon");
    } catch {
      return this.getIconCached("ComponentIcon");
    }
  }

  getGroupedIcons() {
    const icons = getGroupedIcons();
    const result: Record<string, Record<string, string>> = {};

    for (const category in icons) {
      result[category] = {};

      for (const icon in icons[category]) {
        result[category][icon] = this.getIconCached(icon);
      }
    }

    return result;
  }
}

const iconService: Service = {
  name: "Icon service",
  description: "Manages icons in ArcOS",
  process: IconService,
  initialState: "started",
};

export default iconService;
