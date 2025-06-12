import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { SearchItem } from "$types/search";
import type { Workspace } from "$types/user";
import { type FuseResult } from "fuse.js";
import { fetchWeatherApi } from "openmeteo";
import type { ArcFindRuntime } from "../arcfind/runtime";
import type { TrayHostRuntime } from "../trayhost/runtime";
import { ShellContextMenu } from "./context";
import { weatherClasses, weatherMetadata } from "./store";
import type { WeatherInformation } from "./types";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);
  public workspaceManagerOpened = Store<boolean>(false);
  public stackBusy = Store<boolean>(false);
  public searchQuery = Store<string>();
  public searchResults = Store<FuseResult<SearchItem>[]>([]);
  public searching = Store<boolean>(false);
  public SelectionIndex = Store<number>(0);
  public FullscreenCount = Store<Record<string, number>>({});
  public openedTrayPopup = Store<string>();
  public trayHost?: TrayHostRuntime;
  public arcFind?: ArcFindRuntime;
  public ready = Store<boolean>(false);

  override contextMenu: AppContextMenu = ShellContextMenu(this);

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async start() {
    if (await this.closeIfSecondInstance()) return;

    this.systemDispatch.subscribe("stack-busy", () => this.stackBusy.set(true)); // Subscribe to stack-busy
    this.systemDispatch.subscribe("stack-not-busy", () => this.stackBusy.set(false)); // Subscribe to stack-not-busy

    this.systemDispatch.subscribe("window-fullscreen", ([_, desktop]) => {
      desktop = `${desktop}`; // Ugly way to stringify

      this.FullscreenCount.update((v) => {
        v[desktop] ??= 0; // Set to zero if null or undefined
        v[desktop]++; // Increment
        return v;
      });
    });

    this.systemDispatch.subscribe("window-unfullscreen", ([_, desktop]) => {
      desktop = `${desktop}`;

      this.FullscreenCount.update((v) => {
        v[desktop] ??= 0; // Set to zero if null or undefined
        if (v[desktop] <= 0) return v; // If 0, return
        v[desktop]--; // Decrement
        return v;
      });
    });

    this.searchQuery.subscribe(async (v) => {
      if (!v) {
        // Reset the search stuff
        this.SelectionIndex.set(0);
        this.searchResults.set([]);
        return;
      }

      this.searching.set(true);
      const result = await this.arcFind?.Search(v)!;

      if (result.length > 8) result.length = 8; // Cut the list down if it's too long

      this.searchResults.set(result);
      this.searching.set(false);
    });

    this.dispatch.subscribe("ready", () => this.gotReadySignal());

    this.env.set("shell_pid", this.pid); // Set the shell PID
  }

  async gotReadySignal() {
    this.trayHost = this.handler.getProcess(+this.env.get("trayhost_pid"))!;
    this.arcFind = this.handler.getProcess(+this.env.get("arcfind_pid"))!;
    this.ready.set(true);
  }

  async render() {
    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector("#arcShell button.start-button");
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector("#arcShell button.action-center-button");
      const workspaceManager = document.querySelector("#arcShell div.virtual-desktops");
      const workspaceManagerButton = document.querySelector("#arcShell button.workspace-manager-button");
      const systemTray = document.querySelector("#arcShell div.tray-icons");

      const composed = e.composedPath();

      this.startMenuOpened.subscribe((v) => v && this.handler.renderer?.focusedPid.set(-1));
      this.actionCenterOpened.subscribe((v) => v && this.handler.renderer?.focusedPid.set(-1));
      this.openedTrayPopup.subscribe((v) => v && this.handler.renderer?.focusedPid.set(-1));

      // Clicked outside the start menu? Then close it
      if (startMenu && startButton && !composed.includes(startMenu) && !composed.includes(startButton))
        this.startMenuOpened.set(false);

      // Clicked outside the action center? Then close it
      if (actionCenter && actionCenterButton && !composed.includes(actionCenter) && !composed.includes(actionCenterButton))
        this.actionCenterOpened.set(false);

      // Clicked outside a tray popup? Close it
      if (systemTray && !composed.includes(systemTray)) this.openedTrayPopup.set("");

      if (
        workspaceManager &&
        workspaceManagerButton &&
        !composed.includes(workspaceManager) &&
        !composed.includes(workspaceManagerButton)
      )
        this.workspaceManagerOpened.set(false); // Clicked outside the wsman? close it
    });

    // Various controlling dispatches
    this.dispatch.subscribe("open-action-center", () => this.actionCenterOpened.set(true));
    this.dispatch.subscribe("open-start-menu", () => this.startMenuOpened.set(true));
    this.dispatch.subscribe("open-workspace-manager", () => this.workspaceManagerOpened.set(true));
    this.dispatch.subscribe("close-workspace-manager", () => this.workspaceManagerOpened.set(false));
    this.dispatch.subscribe("close-action-center", () => this.actionCenterOpened.set(false));
    this.dispatch.subscribe("close-start-menu", () => this.startMenuOpened.set(false));

    this.startMenuOpened.subscribe((v) => {
      if (!v) this.searchQuery.set(""); // Remove search query on close

      if (v) this.handler.renderer?.focusedPid.set(-1); // Unfocus window on start menu invocation
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
      const responses = await fetchWeatherApi(url, params); // Fetch some weather stuff

      const response = responses[0];
      const current = response.current()!;
      const temperature_2m = current.variables(0)!.value();
      const weather_code = current.variables(1)!.value();
      const is_day = current.variables(2)!.value();
      const metadata = weatherMetadata[weather_code]!;

      return {
        code: weather_code,
        condition: metadata.caption,
        temperature: temperature_2m,
        className: weatherClasses[weather_code],
        gradient: metadata.gradient,
        icon: metadata.icon,
        iconColor: metadata.iconColor,
        isNight: !is_day,
      };
    } catch {
      return false;
    }
  }

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const app = await this.appStore()?.getAppById(appId);

    if (!app) return;

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

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId), 1);

      return v;
    });
  }

  async deleteWorkspace(workspace: Workspace) {
    const windowCount = [...this.handler.store()].filter(
      ([_, p]) => p instanceof AppProcess && p.app.desktop === workspace.uuid
    ).length; // Get the window count using some arguably unreadable code

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

    this.userDaemon?.deleteVirtualDesktop(workspace.uuid); //First delete the desktop
    await Sleep(0); // Then wait for the next frame
    this.workspaceManagerOpened.set(true); // (ugly) and re-open the workspace manager
  }

  public MutateIndex(e: KeyboardEvent) {
    console.log(e);
    if (!e?.key) return;

    const key = e.key.toLowerCase();
    const results = this.searchResults();

    if (e.key === "Escape") return this.startMenuOpened.set(false); // Close the start menu upon escape
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

  public async Trigger(result: SearchItem) {
    await result.action(result);
  }

  public Submit() {
    const results = this.searchResults();
    const index = this.SelectionIndex.get();

    if (!results.length) return;

    this.searchQuery.set("");

    // Trigger the selected search result
    this.Trigger(results[index == -1 ? 0 : index].item); // Default to index 0
  }

  async exit() {
    this.startMenuOpened.set(false); // First close the start menu
    await this.spawnOverlayApp("ExitApp", this.pid); // Then spawn the exit overlay
  }
}
