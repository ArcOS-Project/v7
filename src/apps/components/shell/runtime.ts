import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type {
  AppContextMenu,
  AppProcessData,
  ContextMenuInstance,
  ContextMenuItem,
} from "$types/app";
import { fetchWeatherApi } from "openmeteo";
import {
  weatherCaptions,
  weatherClasses,
  weatherGradients,
  weatherIconColors,
  weatherIcons,
} from "./store";
import type { WeatherInformation } from "./types";
import { AppsIcon, DesktopIcon } from "$ts/images/general";
import { ShutdownIcon } from "$ts/images/power";
import type { Workspace } from "$types/user";
import { WarningIcon } from "$ts/images/dialog";
import { MessageBox } from "$ts/dialog";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);
  public workspaceManagerOpened = Store<boolean>(false);
  public contextData = Store<ContextMenuInstance | null>();
  public stackBusy = Store<boolean>(false);
  public CLICKLOCKED = false;
  private readonly validContexMenuTags = [
    "button",
    "div",
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "img",
  ];
  override contextMenu: AppContextMenu = {
    "shell-taskbar": [
      {
        caption: "Settings",
        action: () => {
          this.notImplemented();
        },
      },
    ],
    "taskbar-openedapp": [
      {
        caption: "Launch another",
        icon: "rocket",
        action: (proc: AppProcess) => {
          this.spawnApp(proc.app.id, this.pid);
        },
      },
      { sep: true },
      {
        caption: "App info",
        image: AppsIcon,
        action: (proc: AppProcess) => {
          this.spawnOverlayApp("AppInfo", this.pid, proc.app.id);
        },
      },
      {
        caption: "Close window",
        image: ShutdownIcon,
        action: (proc: AppProcess) => {
          proc.closeWindow();
        },
      },
    ],
    "actioncenter-weather-card": [
      {
        caption: "Refresh",
        action: (_, refresh) => {
          refresh(true);
        },
        icon: "rotate-cw",
      },
      {
        caption: "Change location...",
        icon: "map-pin",
        action: (changeLocation) => {
          changeLocation();
        },
      },
    ],
    "workspaces-desktop": [
      {
        caption: "Go here",
        action: (desktop: Workspace) => {
          this.userDaemon?.switchToDesktopByUuid(desktop.uuid);
        },
      },
      {
        caption: "Delete workspace",
        icon: "trash",
        action: (desktop: Workspace) => {
          this.deleteWorkspace(desktop);
        },
      },
    ],
  };
  public contextProps: Record<string, any[]> = {};

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.env.set("shell_pid", this.pid);
    this.globalDispatch.subscribe("stack-busy", () => this.stackBusy.set(true));
    this.globalDispatch.subscribe("stack-not-busy", () =>
      this.stackBusy.set(false)
    );
  }

  async render() {
    this.assignContextMenuHooks();

    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector(
        "#arcShell button.start-button"
      );
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector(
        "#arcShell button.action-center-button"
      );
      const workspaceManager = document.querySelector(
        "#arcShell div.virtual-desktops"
      );
      const workspaceManagerButton = document.querySelector(
        "#arcShell button.workspace-manager-button"
      );

      const composed = e.composedPath();

      if (
        startMenu &&
        startButton &&
        !composed.includes(startMenu) &&
        !composed.includes(startButton)
      )
        this.startMenuOpened.set(false);

      if (
        actionCenter &&
        actionCenterButton &&
        !composed.includes(actionCenter) &&
        !composed.includes(actionCenterButton)
      )
        this.actionCenterOpened.set(false);

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
      }
    );

    this.dispatch.subscribe("open-action-center", () =>
      this.actionCenterOpened.set(true)
    );

    this.dispatch.subscribe("open-start-menu", () =>
      this.startMenuOpened.set(true)
    );

    this.dispatch.subscribe("open-workspace-manager", () =>
      this.workspaceManagerOpened.set(true)
    );

    this.dispatch.subscribe("close-workspace-manager", () =>
      this.workspaceManagerOpened.set(false)
    );

    this.dispatch.subscribe("close-action-center", () =>
      this.actionCenterOpened.set(false)
    );

    this.dispatch.subscribe("close-start-menu", () =>
      this.startMenuOpened.set(false)
    );
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
      .filter(
        (proc) =>
          proc &&
          !proc._disposed &&
          proc instanceof AppProcess &&
          !proc.app.data.core &&
          !proc.app.data.overlay
      )
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
    this.Log(
      `Spawning context menu with ${data.items.length} items at ${data.x}, ${data.y}`
    );

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

  composePosition(
    x: number,
    y: number,
    mW: number,
    mH: number
  ): [number, number] {
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

    const menu = Object.entries(proc.contextMenu);

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
}
