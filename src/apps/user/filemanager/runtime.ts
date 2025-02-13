import { AppProcess } from "$ts/apps/process";
import { ComponentIcon, DesktopIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import YourArc from "./FileManager/Contents/YourArc.svelte";
import type { Location, Tab } from "./types";

export class FileManagerRuntime extends AppProcess {
  private readonly DEFAULT_LOCATION = "$yourArc";
  readonly LOCATIONS: Record<string, Location> = {
    $yourArc: {
      name: "Your ArcOS",
      icon: DesktopIcon,
      component: YourArc,
    },
  };
  public tabs = Store<Record<string, Tab>>({});
  public currentTabUuid = Store<string>("");
  public editingAddress = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path?: string
  ) {
    super(handler, pid, parentPid, app);

    this.createTab(path || this.DEFAULT_LOCATION);
  }

  async render() {}

  createTab(location?: string, title?: string, icon?: string) {
    if (Object.entries(this.tabs()).length >= 8) return;

    location ||= this.DEFAULT_LOCATION;
    title ||= "%TAB%";
    icon ||= ComponentIcon;

    const uuid = crypto.randomUUID();

    this.tabs.update((v) => {
      v[uuid] = { location, title, icon };

      return v;
    });
    this.currentTabUuid.set(uuid);
  }

  closeTab(uuid: string) {
    if (!this.tabs()[uuid]) return;

    this.tabs.update((v) => {
      delete v[uuid];
      return v;
    });

    if (!Object.keys(this.tabs()).length) this.createTab();
    if (this.currentTabUuid() === uuid) {
      const tab = Object.entries(this.tabs())[0];

      this.currentTabUuid.set(tab[0]);
    }
  }

  changeTabTitle(uuid: string, title: string) {
    this.tabs.update((v) => {
      if (!v[uuid]) return v;

      v[uuid].title = title;

      return v;
    });
  }

  changeTabIcon(uuid: string, icon: string) {
    this.tabs.update((v) => {
      if (!v[uuid]) return v;

      v[uuid].icon = icon;

      return v;
    });
  }

  navigate(location: string) {
    this.tabs.update((v) => {
      if (!v) return v;

      v[this.currentTabUuid()].location = location;

      return v;
    });
  }
}
