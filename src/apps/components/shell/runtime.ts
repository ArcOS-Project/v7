import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { IArcFindService } from "$interfaces/services/IArcFindService";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Env, Fs, Stack, SysDispatch } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/apps/accelerator";
import type { AppContextMenu, AppProcessData } from "$types/apps/app";
import type { SearchItem } from "$types/services/search";
import type { RecursiveDirectoryReadReturn } from "$types/system/fs";
import type { Workspace } from "$types/user";
import { ShellAccelerators } from "./accelerators";
import { ShellContextMenu } from "./context";

export class ShellRuntime extends AppProcess implements IShellRuntime {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);
  public workspaceManagerOpened = Store<boolean>(false);
  public calendarOpened = Store<boolean>(false);
  public stackBusy = Store<boolean>(false);
  public FullscreenCount = Store<Record<string, Set<number>>>({});
  public openedTrayPopup = Store<string>();
  public STARTMENU_FOLDER = UserPaths.StartMenu;
  public StartMenuContents = Store<RecursiveDirectoryReadReturn>();
  public selectedAppGroup = Store<string>("");

  override contextMenu: AppContextMenu = ShellContextMenu(this);
  override acceleratorStore: AppKeyCombinations = ShellAccelerators(this);

  get trayHost() {
    return Daemon.serviceHost?.getService<ITrayHostService>("TrayHostSvc");
  }

  get arcFind() {
    return Daemon.serviceHost?.getService<IArcFindService>("ArcFindSvc");
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  gotReadySignal(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteWorkspace(workspace: Workspace): Promise<void> {
    throw new Error("Method not implemented.");
  }
  MutateIndex(e: KeyboardEvent): void | -1 {
    throw new Error("Method not implemented.");
  }
  Trigger(result: SearchItem): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Submit(): void {
    throw new Error("Method not implemented.");
  }
  changeShell(id: string): Promise<false | undefined> {
    throw new Error("Method not implemented.");
  }

  async start() {
    if (Stack.getProcess(+Env.get("shell_pid"))) return false;

    Env.set("shell_pid", this.pid); // Set the shell PID

    SysDispatch.subscribe("stack-busy", () => this.stackBusy.set(true)); // Subscribe to stack-busy
    SysDispatch.subscribe("stack-not-busy", () => this.stackBusy.set(false)); // Subscribe to stack-not-busy
    SysDispatch.subscribe("window-fullscreen", () => this.updateFullscreenCount());
    SysDispatch.subscribe("window-unfullscreen", () => this.updateFullscreenCount());
    SysDispatch.subscribe("window-minimize", () => this.updateFullscreenCount());
    SysDispatch.subscribe("window-unminimize", () => this.updateFullscreenCount());

    SysDispatch.subscribe("startmenu-refresh", () => {
      this.refreshStartMenu();
    });
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

      this.startMenuOpened.subscribe((v) => v && Stack.renderer?.focusedPid.set(-1));
      this.actionCenterOpened.subscribe((v) => v && Stack.renderer?.focusedPid.set(-1));
      this.openedTrayPopup.subscribe((v) => v && Stack.renderer?.focusedPid.set(-1));

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
      if (!v) {
        this.arcFind?.searchQuery.set(""); // Remove search query on close
        this.selectedAppGroup.set(""); // Remove selected app group on close
      }
      if (v) Stack.renderer?.focusedPid.set(-1); // Unfocus window on start menu invocation
    });

    Daemon?.checks?.checkReducedMotion();
  }

  async stop() {
    Env.delete("shell_pid");
    return true;
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
  //#region STARTMENU

  public async refreshStartMenu(): Promise<void> {
    try {
      const tree = await Fs.tree(this.STARTMENU_FOLDER);

      if (!tree?.files?.length && !tree?.dirs?.length) {
        await Daemon?.appreg?.updateStartMenuFolder(); // Populate it if there's no content

        return; // Don't try again here because this method will be reinvoked by dispatch
      }

      this.StartMenuContents.set(tree);
    } catch {
      return;
    }
  }

  //#endregion
  //#region CALENDAR

  //#endregion
  //#region WEATHER

  async exit() {
    this.startMenuOpened.set(false); // First close the start menu
    await this.spawnOverlayApp("ExitApp", this.pid); // Then spawn the exit overlay
  }

  updateFullscreenCount() {
    const fullscreenCount: Record<string, Set<number>> = {};
    const procs: Record<number, IAppProcess> = Object.fromEntries(
      ([...Stack.store()] as [number, IAppProcess][]).filter(([_, proc]) => proc instanceof AppProcess)
    );
    const preferences = this.userPreferences();

    for (const workspace of preferences.workspaces.desktops) {
      fullscreenCount[workspace.uuid] = new Set(
        Object.values(procs)
          .filter((proc) => {
            const window = proc.getWindow();
            if (!window) return false;
            if (proc.app.desktop !== workspace.uuid) return false;

            return window.classList.contains("fullscreen") && !window.classList.contains("minimized");
          })
          .map((proc) => proc.pid)
      );
    }

    this.FullscreenCount.set(fullscreenCount);
  }

  //#endregion
}
