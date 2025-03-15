import { AppProcess } from "$ts/apps/process";
import { isPopulatable } from "$ts/apps/util";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import { DesktopIcon } from "$ts/images/general";
import { DefaultMimeIcon } from "$ts/images/mime";
import { LogoutIcon, RestartIcon, ShutdownIcon } from "$ts/images/power";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData, ContextMenuInstance, ContextMenuItem } from "$types/app";
import type { PathedFileEntry, RecursiveDirectoryReadReturn } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { UserPreferences, Workspace } from "$types/user";
import Fuse, { type FuseResult } from "fuse.js";
import { fetchWeatherApi } from "openmeteo";
import { ShellContextMenu, WindowSystemContextMenu } from "./context";
import { weatherCaptions, weatherClasses, weatherGradients, weatherIconColors, weatherIcons } from "./store";
import type { ShellTrayIcon, TrayIconDiscriminator, TrayIconOptions, WeatherInformation } from "./types";
import { getIconPath } from "$ts/images";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);
  public workspaceManagerOpened = Store<boolean>(false);
  public contextData = Store<ContextMenuInstance | null>();
  public stackBusy = Store<boolean>(false);
  public CLICKLOCKED = false;
  public searchQuery = Store<string>();
  public searchResults = Store<FuseResult<SearchItem>[]>([]);
  public searching = Store<boolean>(false);
  public SelectionIndex = Store<number>(0);
  public FullscreenCount = Store<Record<string, number>>({});
  public trayIcons = Store<Record<TrayIconDiscriminator, ShellTrayIcon>>({});
  public openedTrayPopup = Store<string>();

  private fileSystemIndex: PathedFileEntry[] = [];
  private readonly validContexMenuTags = ["button", "div", "span", "p", "h1", "h2", "h3", "h4", "h5", "img"];
  override contextMenu: AppContextMenu = ShellContextMenu(this);
  public contextProps: Record<string, any[]> = {};

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.env.set("shell_pid", this.pid);
    this.globalDispatch.subscribe("stack-busy", () => this.stackBusy.set(true));
    this.globalDispatch.subscribe("stack-not-busy", () => this.stackBusy.set(false));

    this.globalDispatch.subscribe("fs-flush-file", () => {
      this.fileSystemIndex = [];
    });

    this.globalDispatch.subscribe("window-fullscreen", ([pid, desktop]) => {
      desktop = `${desktop}`;

      this.FullscreenCount.update((v) => {
        v[desktop] ??= 0;
        v[desktop]++;
        return v;
      });
    });

    this.globalDispatch.subscribe("window-unfullscreen", ([_, desktop]) => {
      desktop = `${desktop}`;

      this.FullscreenCount.update((v) => {
        v[desktop] ??= 0;
        if (v[desktop] <= 0) return v;
        v[desktop]--;
        return v;
      });
    });

    this.getFilesystemSearchSupplier(this.userPreferences());

    this.searchQuery.subscribe(async (v) => {
      if (!v) {
        this.SelectionIndex.set(0);
        this.searchResults.set([]);
        return;
      }

      this.searching.set(true);
      const result = await this.Search(v);

      if (result.length > 8) result.length = 8;

      this.searchResults.set(result);
      this.searching.set(false);
    });
  }

  async render() {
    if (await this.closeIfSecondInstance()) return;
    this.assignContextMenuHooks();

    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector("#arcShell button.start-button");
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector("#arcShell button.action-center-button");
      const workspaceManager = document.querySelector("#arcShell div.virtual-desktops");
      const workspaceManagerButton = document.querySelector("#arcShell button.workspace-manager-button");
      const systemTray = document.querySelector("#arcShell div.tray-icons");

      const composed = e.composedPath();

      if (startMenu && startButton && !composed.includes(startMenu) && !composed.includes(startButton))
        this.startMenuOpened.set(false);

      if (actionCenter && actionCenterButton && !composed.includes(actionCenter) && !composed.includes(actionCenterButton))
        this.actionCenterOpened.set(false);

      if (systemTray && !composed.includes(systemTray)) this.openedTrayPopup.set("");

      if (
        workspaceManager &&
        workspaceManagerButton &&
        !composed.includes(workspaceManager) &&
        !composed.includes(workspaceManagerButton)
      )
        this.workspaceManagerOpened.set(false);
    });

    this.acceleratorStore.push(
      {
        ctrl: true,
        key: "q",
        global: true,
        action: () => {
          this.closeFocused();
        },
      },
      {
        alt: true,
        key: "[",
        global: true,
        action: () => {
          this.userDaemon?.previousDesktop();
        },
      },
      {
        alt: true,
        key: "]",
        global: true,
        action: () => {
          this.userDaemon?.nextDesktop();
        },
      },
      {
        ctrl: true,
        key: "/",
        action: () => {
          this.spawnOverlayApp("AcceleratorOverview", this.pid);
        },
        global: true,
      }
    );

    this.dispatch.subscribe("open-action-center", () => this.actionCenterOpened.set(true));
    this.dispatch.subscribe("open-start-menu", () => this.startMenuOpened.set(true));
    this.dispatch.subscribe("open-workspace-manager", () => this.workspaceManagerOpened.set(true));
    this.dispatch.subscribe("close-workspace-manager", () => this.workspaceManagerOpened.set(false));
    this.dispatch.subscribe("close-action-center", () => this.actionCenterOpened.set(false));
    this.dispatch.subscribe("close-start-menu", () => this.startMenuOpened.set(false));

    this.startMenuOpened.subscribe((v) => {
      if (!v) this.searchQuery.set("");

      if (v) this.handler.renderer?.focusedPid.set(-1);
    });

    this.userDaemon?.checkReducedMotion();
  }

  async getWeather(): Promise<WeatherInformation> {
    this.Log(`Retrieving weather`);

    const preferences = this.userPreferences();
    const params = {
      latitude: preferences.shell.actionCenter.weatherLocation.latitude,
      longitude: preferences.shell.actionCenter.weatherLocation.longitude,
      current: ["temperature_2m", "weather_code", "is_day"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    try {
      const responses = await fetchWeatherApi(url, params);

      const response = responses[0];
      const current = response.current()!;
      const temperature_2m = current.variables(0)!.value();
      const weather_code = current.variables(1)!.value();
      const is_day = current.variables(2)!.value();

      return {
        code: weather_code,
        condition: weatherCaptions[weather_code],
        temperature: temperature_2m,
        className: weatherClasses[weather_code],
        gradient: weatherGradients[weather_code],
        icon: weatherIcons[weather_code],
        iconColor: weatherIconColors[weather_code],
        isNight: !is_day,
      };
    } catch {
      return false;
    }
  }

  async closeFocused() {
    this.Log("Attempting to close focused window");

    const focusedPid = this.handler.renderer?.focusedPid();
    if (!focusedPid) return;

    const focusedProc = this.handler.getProcess(focusedPid);

    if (!focusedProc || !(focusedProc instanceof AppProcess)) return;

    await focusedProc?.closeWindow();

    const appProcesses = (this.handler.renderer?.currentState || [])
      .map((pid) => this.handler.getProcess(pid))
      .filter((proc) => proc && !proc._disposed && proc instanceof AppProcess && !proc.app.data.core && !proc.app.data.overlay)
      .filter((proc) => !!proc);

    const targetProcess = appProcesses[appProcesses.length - 1];

    if (!targetProcess) return;

    this.handler.renderer?.focusPid(targetProcess.pid);
  }

  pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    this.userPreferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    this.userPreferences.update((v) => {
      if (!v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId));

      return v;
    });
  }

  async createContextMenu(data: ContextMenuInstance) {
    this.Log(`Spawning context menu with ${data.items.length} items at ${data.x}, ${data.y}`);

    this.CLICKLOCKED = true;
    this.contextData.set(data);
    await Sleep(10);
    this.CLICKLOCKED = false;
  }

  closeContextMenu() {
    this.contextData.set(null);
  }

  assignContextMenuHooks() {
    this.Log("Assigning context menu hooks");

    document.addEventListener("click", (e) => {
      if (this.CLICKLOCKED) return;

      const el = document.querySelector("#arcShell div.shell > .context-menu");

      if (!el || e.button !== 0 || e.composedPath().includes(el)) return;

      this.contextData.set(null);
    });

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.handleContext(e);
    });
  }

  async handleContext(e: MouseEvent) {
    const window = this.getWindowByEventTarget(e.composedPath());
    const scope = this.getContextMenuScope(e);

    if (!window || !scope) return this.closeContextMenu();

    const pid = window.dataset.pid;

    if (!pid) return this.closeContextMenu();

    const contextmenu = scope.dataset.contextmenu || "";
    const contextProps = scope.dataset.contextprops || "";

    const items = this.getContextEntry(+pid, contextmenu);
    const proc = this.handler.getProcess(+pid);

    this.createContextMenu({
      x: e.clientX,
      y: e.clientY,
      items,
      process: proc && proc instanceof AppProcess ? proc : undefined,
      props: this.contextProps[contextProps] || [],
    });
  }

  getWindowByEventTarget(target: EventTarget[]): HTMLDivElement | null {
    for (const element of target as HTMLDivElement[]) {
      const classList = element.classList;

      if (!classList) continue;

      if (classList.contains("window")) return element;
    }

    return null;
  }

  composePosition(x: number, y: number, mW: number, mH: number): [number, number] {
    const dW = window.innerWidth;
    const dH = window.innerHeight;

    let newX = x;
    let newY = y;

    if (newX + mW > dW) newX = dW - mW - 10;
    if (newY + mH > dH) newY = dH - mH - 10;
    if (newX < 0) x = 10;
    if (newY < 0) y = 10;

    return [newX, newY];
  }

  getContextEntry(pid: number, scope: string): ContextMenuItem[] {
    const proc = this.handler.getProcess(pid);

    if (!(proc instanceof AppProcess)) return [];

    const menu = Object.entries({ ...proc.contextMenu, ...WindowSystemContextMenu(this) });

    for (const [key, items] of menu) {
      if (scope.includes(key)) return items;
    }

    return [];
  }

  getContextMenuScope(e: MouseEvent) {
    const path = e.composedPath() as HTMLDivElement[];

    for (const element of path) {
      const tag = element.tagName;

      if (!tag) continue;

      const contextmenu = element.dataset.contextmenu;

      if (this.validContexMenuTags.includes(tag.toLowerCase()) && contextmenu) {
        return element;
      }
    }

    return null;
  }

  async deleteWorkspace(workspace: Workspace) {
    const windowCount = [...this.handler.store()].filter(
      ([_, p]) => p instanceof AppProcess && p.app.desktop === workspace.uuid
    ).length;

    if (windowCount > 0) {
      MessageBox(
        {
          title: "Can't delete workspace",
          message:
            "The workspace you want to delete still has windows opened in it. You have to close all windows in a workspace before you can delete it.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: WarningIcon,
        },
        this.pid,
        true
      );

      return;
    }

    MessageBox(
      {
        title: "Delete workspace",
        message: "Are you sure you want to permanently delete this workspace?",
        image: DesktopIcon,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              this.userDaemon?.deleteVirtualDesktop(workspace.uuid);
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async Search(query: string) {
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

    const options = {
      includeScore: true,
      keys: ["caption", "description"],
    };

    const fuse = new Fuse(items, options);
    const result = fuse.search(query);

    return result.map((r) => ({ ...r, id: UUID() }));
  }

  async getFilesystemSearchSupplier(preferences: UserPreferences) {
    const result: SearchItem[] = [];
    const index =
      preferences.searchOptions.cacheFilesystem && this.fileSystemIndex && this.fileSystemIndex.length
        ? this.fileSystemIndex
        : await this.getFlatTree();

    this.fileSystemIndex = index;

    for (const file of index) {
      result.push({
        caption: file.shortcut ? file.shortcut.name : file.name,
        description: file.shortcut ? `Shortcut - ${file.path}` : file.path,
        action: () => {
          this.userDaemon?.openFile(file.path, file.shortcut);
        },
        image:
          (file.shortcut ? getIconPath(file.shortcut.icon) : this.userDaemon?.getMimeIconByFilename(file.name)) ||
          DefaultMimeIcon,
      });
    }

    return result;
  }

  async getAppSearchSupplier(preferences: UserPreferences) {
    const result: SearchItem[] = [];
    const apps = (await this.userDaemon?.appStore?.get()) || [];

    for (const app of apps) {
      const populatable = isPopulatable(app);
      const thirdParty = !!app.thirdParty;

      if (
        (preferences.searchOptions.showHiddenApps ? true : populatable) &&
        (preferences.searchOptions.showThirdPartyApps ? true : !thirdParty)
      ) {
        result.push({
          caption: app.metadata.name,
          description: `By ${app.metadata.author}`,
          image: app.metadata.icon,
          action: () => {
            this.spawnApp(app.id, this.pid);
          },
        });
      }
    }

    return result;
  }

  async getFlatTree() {
    const result: PathedFileEntry[] = [];
    const tree = await this.fs.tree("U:/");

    const recurse = (tree: RecursiveDirectoryReadReturn, path = "U:") => {
      for (const file of tree.files) {
        result.push({ ...file, path: `${path}/${file.name}`, shortcut: tree.shortcuts[file.name] });
      }
      for (const dir of tree.dirs) {
        recurse(dir.children, `${path}/${dir.name}`);
      }
    };

    recurse(tree!, "U:");

    return result;
  }

  public MutateIndex(e: KeyboardEvent) {
    const key = e.key.toLowerCase();
    const results = this.searchResults();

    if (e.key === "Escape") return this.startMenuOpened.set(false);
    let index = this.SelectionIndex();
    if (!results.length) return (index = -1);
    if (key == "enter") return this.Submit();
    let length = results.length - 1;

    switch (key) {
      case "arrowup":
        index--;
        if (index < 0) index = length;
        break;

      case "arrowdown":
        index++;
        if (index > length) index = 0;
        break;
    }

    this.SelectionIndex.set(index);
  }

  public async Trigger(result: SearchItem) {
    await result.action(result);
  }

  public Submit() {
    const results = this.searchResults();
    const index = this.SelectionIndex.get();

    if (!results.length) return;

    this.searchQuery.set("");

    // Trigger the selected search result
    this.Trigger(results[index == -1 ? 0 : index].item);
  }

  createTrayIcon(pid: number, identifier: string, options: TrayIconOptions) {
    const trayIcons = this.trayIcons();

    if (trayIcons[`${pid}#${identifier}`]) return false;

    trayIcons[`${pid}#${identifier}`] = { ...options, pid, identifier };

    this.trayIcons.set(trayIcons);
    this.globalDispatch.dispatch("tray-icon-create", [pid, identifier]);

    return true;
  }

  disposeTrayIcon(pid: number, identifier: string) {
    const trayIcons = this.trayIcons();
    const discriminator: TrayIconDiscriminator = `${pid}#${identifier}`;

    if (!trayIcons[discriminator]) return false;

    delete trayIcons[discriminator];

    this.trayIcons.set(trayIcons);
    this.globalDispatch.dispatch("tray-icon-dispose", [pid, identifier]);
  }

  disposeProcessTrayIcons(pid: number) {
    const trayIcons = this.trayIcons();

    for (const id of Object.keys(trayIcons) as TrayIconDiscriminator[]) {
      if (id.startsWith(`${pid}#`)) delete trayIcons[id];
    }

    this.trayIcons.set(trayIcons);
    this.globalDispatch.dispatch("tray-icon-dispose", [pid]);
  }
}
