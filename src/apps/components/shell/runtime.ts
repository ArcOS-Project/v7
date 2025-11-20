import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack } from "$ts/env";
import { AppGroups, UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { RecursiveDirectoryReadReturn } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { Workspace } from "$types/user";
import dayjs from "dayjs";
import { type FuseResult } from "fuse.js";
import { fetchWeatherApi } from "openmeteo";
import type { ArcFindRuntime } from "../arcfind/runtime";
import type { TrayHostRuntime } from "../trayhost/runtime";
import { ShellContextMenu } from "./context";
import { weatherClasses, weatherMetadata } from "./store";
import { shortWeekDays, type CalendarMonth, type WeatherInformation } from "./types";
import { textToBlob } from "$ts/util/convert";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);
  public workspaceManagerOpened = Store<boolean>(false);
  public calendarOpened = Store<boolean>(false);
  public stackBusy = Store<boolean>(false);
  public searchQuery = Store<string>();
  public searchResults = Store<FuseResult<SearchItem>[]>([]);
  public searching = Store<boolean>(false);
  public SelectionIndex = Store<number>(0);
  public FullscreenCount = Store<Record<string, Set<number>>>({});
  public openedTrayPopup = Store<string>();
  public searchLoading = Store<boolean>(true);
  public trayHost?: TrayHostRuntime;
  public arcFind?: ArcFindRuntime;
  public ready = Store<boolean>(false);
  public STARTMENU_FOLDER = UserPaths.StartMenu;
  public StartMenuContents = Store<RecursiveDirectoryReadReturn>();

  override contextMenu: AppContextMenu = ShellContextMenu(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    if (this.handler.getProcess(+this.env.get("shell_pid"))) return false;

    this.env.set("shell_pid", this.pid); // Set the shell PID

    this.systemDispatch.subscribe("stack-busy", () => this.stackBusy.set(true)); // Subscribe to stack-busy
    this.systemDispatch.subscribe("stack-not-busy", () => this.stackBusy.set(false)); // Subscribe to stack-not-busy

    const minimizedFullscreens: Record<string, Set<number>> = {};

    this.systemDispatch.subscribe("window-fullscreen", ([pid, desktop]) =>
      this.FullscreenCount.update((v) => {
        minimizedFullscreens[desktop] ??= new Set();
        v[desktop] ??= new Set();

        v[desktop].add(pid);

        return v;
      })
    );

    this.systemDispatch.subscribe("window-unfullscreen", ([pid, desktop]) =>
      this.FullscreenCount.update((v) => {
        minimizedFullscreens[desktop] ??= new Set();
        v[desktop] ??= new Set();

        v[desktop].delete(pid);
        minimizedFullscreens[desktop].delete(pid);

        return v;
      })
    );

    this.systemDispatch.subscribe("window-minimize", ([pid, desktop]) =>
      this.FullscreenCount.update((v) => {
        minimizedFullscreens[desktop] ??= new Set();
        v[desktop] ??= new Set();

        if (v[desktop].has(pid)) {
          minimizedFullscreens[desktop].add(pid);
          v[desktop].delete(pid);
        }

        return v;
      })
    );

    this.systemDispatch.subscribe("window-unminimize", ([pid, desktop]) =>
      this.FullscreenCount.update((v) => {
        minimizedFullscreens[desktop] ??= new Set();
        v[desktop] ??= new Set();

        if (minimizedFullscreens[desktop].has(pid)) {
          v[desktop].add(pid);
          minimizedFullscreens[desktop].delete(pid);
        }

        return v;
      })
    );

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

    this.systemDispatch.subscribe("startmenu-refresh", () => {
      this.refreshStartMenu();
    });

    await this.refreshStartMenu();
  }

  async render() {
    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector("#arcShell button.start-button");
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector("#arcShell button.action-center-button");
      const workspaceManager = document.querySelector("#arcShell div.virtual-desktops");
      const workspaceManagerButton = document.querySelector("#arcShell button.workspace-manager-button");
      const calendarPopup = document.querySelector("#arcShell div.calendar-popup");
      const calendarButton = document.querySelector("#arcShell button.clock-button");
      const systemTray = document.querySelector("#arcShell div.tray-icons");
      const contextMenu = document.querySelector("#contextMenu div.context-menu");

      const composed = e.composedPath();

      this.startMenuOpened.subscribe((v) => v && KernelStack().renderer?.focusedPid.set(-1));
      this.actionCenterOpened.subscribe((v) => v && KernelStack().renderer?.focusedPid.set(-1));
      this.openedTrayPopup.subscribe((v) => v && KernelStack().renderer?.focusedPid.set(-1));

      // Clicked outside the start menu? Then close it
      if (
        startMenu &&
        startButton &&
        !composed.includes(startMenu) &&
        !composed.includes(startButton) &&
        !composed.includes(contextMenu!)
      )
        this.startMenuOpened.set(false);

      // Clicked outside the action center? Then close it
      if (
        actionCenter &&
        actionCenterButton &&
        !composed.includes(actionCenter) &&
        !composed.includes(actionCenterButton) &&
        !composed.includes(contextMenu!)
      )
        this.actionCenterOpened.set(false);

      // Clicked outside a tray popup? Close it
      if (systemTray && !composed.includes(systemTray) && !composed.includes(contextMenu!)) this.openedTrayPopup.set("");

      if (
        workspaceManager &&
        workspaceManagerButton &&
        !composed.includes(workspaceManager) &&
        !composed.includes(workspaceManagerButton) &&
        !composed.includes(contextMenu!)
      )
        this.workspaceManagerOpened.set(false); // Clicked outside the wsman? close it

      if (
        calendarPopup &&
        calendarButton &&
        !composed.includes(calendarButton) &&
        !composed.includes(calendarPopup) &&
        !composed.includes(contextMenu!)
      )
        this.calendarOpened.set(false); // Clicked outside calendar? close it
    });

    // Various controlling dispatches
    this.dispatch.subscribe("open-action-center", () => this.actionCenterOpened.set(true));
    this.dispatch.subscribe("open-start-menu", () => this.startMenuOpened.set(true));
    this.dispatch.subscribe("open-workspace-manager", () => this.workspaceManagerOpened.set(true));
    this.dispatch.subscribe("open-calendar", () => this.calendarOpened.set(true));
    this.dispatch.subscribe("close-workspace-manager", () => this.workspaceManagerOpened.set(false));
    this.dispatch.subscribe("close-action-center", () => this.actionCenterOpened.set(false));
    this.dispatch.subscribe("close-start-menu", () => this.startMenuOpened.set(false));
    this.dispatch.subscribe("close-calendar", () => this.calendarOpened.set(false));

    this.startMenuOpened.subscribe((v) => {
      if (!v) this.searchQuery.set(""); // Remove search query on close

      if (v) KernelStack().renderer?.focusedPid.set(-1); // Unfocus window on start menu invocation
    });

    this.userDaemon?.checks?.checkReducedMotion();
  }

  async stop() {
    this.env.delete("shell_pid");
    return true;
  }

  async gotReadySignal() {
    this.Log("Got ready signal!");
    this.trayHost = KernelStack().getProcess(+this.env.get("trayhost_pid"))!;
    this.arcFind = KernelStack().getProcess(+this.env.get("arcfind_pid"))!;
    this.arcFind.loading.subscribe((v) => this.searchLoading.set(v));
    this.ready.set(true);
  }

  //#endregion
  //#region PINNING

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const app = this.appStore()?.getAppSynchronous(appId);

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

  //#endregion
  //#region WORKSPACES

  async deleteWorkspace(workspace: Workspace) {
    const windowCount = [...KernelStack().store()].filter(
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
          image: "WarningIcon",
        },
        this.pid,
        true
      );

      return;
    }

    this.userDaemon?.workspaces?.deleteVirtualDesktop(workspace.uuid); //First delete the desktop
    await Sleep(0); // Then wait for the next frame
    this.workspaceManagerOpened.set(true); // (ugly) and re-open the workspace manager
  }

  //#endregion
  //#region ARCFIND

  public MutateIndex(e: KeyboardEvent) {
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

    this.startMenuOpened.set(false);
  }

  public Submit() {
    const results = this.searchResults();
    const index = this.SelectionIndex.get();

    if (!results.length) return;

    this.searchQuery.set("");

    // Trigger the selected search result
    this.Trigger(results[index == -1 ? 0 : index].item); // Default to index 0
  }

  //#endregion
  //#region STARTMENU

  public async refreshStartMenu() {
    const tree = await this.fs.tree(this.STARTMENU_FOLDER);

    if (!tree) return; // TODO: error handling

    this.StartMenuContents.set(tree);
  }

  // MIGRATION: 7.0.7 -> 7.0.8
  public async MigrateStartMenuToFs() {
    const migrationPath = join(UserPaths.Migrations, "StartMig-708.lock");
    const migrationFile = !!(await this.fs.stat(migrationPath));

    if (migrationFile) return;

    const installedApps = this.appStore().buffer();

    const { stop, incrementProgress, caption } = await this.userDaemon!.GlobalLoadIndicator(
      "Updating the start menu...",
      +this.env.get("shell_pid"),
      { max: Object.keys(AppGroups).length + installedApps.length, value: 0 }
    );

    for (const appGroup in AppGroups) {
      incrementProgress?.();
      caption.set(`Creating folder for ${AppGroups[appGroup]}`);

      await this.fs.createDirectory(join(this.STARTMENU_FOLDER, `$$${appGroup}`), false);
    }

    const promises = [];

    for (const app of installedApps) {
      promises.push(
        new Promise(async (r) => {
          await this.userDaemon?.createShortcut(
            {
              type: "app",
              target: app.id,
              icon: `@app::${app.id}`,
              name: `_${app.id}`,
            },
            join(this.STARTMENU_FOLDER, app.metadata.appGroup ? `$$${app.metadata.appGroup}` : "", `_${app.id}.arclnk`)
          );

          caption.set(`Created shortcut for ${app.metadata.name}`);

          incrementProgress?.();

          r(void 0);
        })
      );
    }

    await Promise.all(promises);

    caption.set("Finishing up...");

    await this.refreshStartMenu();
    await this.fs.writeFile(migrationPath, textToBlob(`${Date.now()}`), undefined, false);

    stop?.();
  }

  //#endregion
  //#region CALENDAR

  getCalendarMonth(date = dayjs().format("YYYY-MM-DD")): CalendarMonth {
    const result: CalendarMonth = {
      prepended: [],
      current: [],
      appended: [],
    };

    const today = dayjs().format("YYYY-MM-DD");
    const lastMonth = dayjs(date).subtract(1, "month").format("YYYY-MM");
    const thisMonth = dayjs(date).format("YYYY-MM");
    const nextMonth = dayjs(date).add(1, "month").format("YYYY-MM");
    const daysInCurrent = dayjs(date).daysInMonth();
    const firstDayOfCurrent = dayjs(date).format(`${thisMonth}-01`);
    const daysInPast = dayjs(date).subtract(1, "month").daysInMonth();
    const firstWeekdayCurrent = dayjs(firstDayOfCurrent).day();
    const prepended = firstWeekdayCurrent === 0 ? 0 : firstWeekdayCurrent;
    const appended = 42 - prepended - daysInCurrent;

    if (prepended > 0) {
      for (let i = prepended - 1; i >= 0; i--) {
        const dayOfMonth = daysInPast - i;
        const fullDate = `${lastMonth}-${String(dayOfMonth).padStart(2, "0")}`;
        const dayOfWeek = dayjs(fullDate).day();

        result.prepended.push({
          caption: shortWeekDays[dayOfWeek],
          dayOfMonth,
          fullDate,
          isToday: fullDate === today,
        });
      }
    }

    for (let i = 0; i < daysInCurrent; i++) {
      const dayOfMonth = i + 1;
      const fullDate = `${thisMonth}-${String(dayOfMonth).padStart(2, "0")}`;
      const dayOfWeek = dayjs(fullDate).day();

      result.current.push({
        caption: shortWeekDays[dayOfWeek],
        dayOfMonth,
        fullDate,
        isToday: fullDate === today,
      });
    }

    for (let i = 0; i < appended; i++) {
      const dayOfMonth = i + 1;
      const fullDate = `${nextMonth}-${String(dayOfMonth).padStart(2, "0")}`;
      const dayOfWeek = dayjs(fullDate).day();

      result.appended.push({
        caption: shortWeekDays[dayOfWeek],
        dayOfMonth,
        fullDate,
        isToday: fullDate === today,
      });
    }

    return result;
  }

  //#endregion
  //#region MISCELLANEOUS

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

  async exit() {
    this.startMenuOpened.set(false); // First close the start menu
    await this.spawnOverlayApp("ExitApp", this.pid); // Then spawn the exit overlay
  }

  async changeShell(id: string) {
    const appStore = this.userDaemon!.appStorage();
    const newShell = appStore?.getAppSynchronous(id);

    if (!newShell) return false;

    const proceed = await this.userDaemon?.helpers?.Confirm(
      "Change your shell",
      `${newShell.metadata.name} by ${newShell.metadata.author} wants to act as your ArcOS shell. Do you allow this?`,
      "Deny",
      "Allow"
    );

    if (!proceed) return false;

    this.userPreferences.update((v) => {
      v.globalSettings.shellExec = id;
      return v;
    });

    const restartNow = await this.userDaemon?.helpers?.Confirm(
      "Restart now?",
      "ArcOS has to restart before the changes will apply. Do you want to restart now?",
      "Not now",
      "Restart",
      "RestartIcon"
    );

    if (restartNow) await this.userDaemon?.power?.restart();
  }

  //#endregion
}
