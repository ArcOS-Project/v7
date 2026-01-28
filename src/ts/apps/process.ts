import type { ShellRuntime } from "$apps/components/shell/runtime";
import { ArcOSVersion, Env, Kernel, Stack, State, SysDispatch } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { ProcessWithPermissions } from "$ts/permissions/process";
import { Daemon, TryGetDaemon, UserDaemon } from "$ts/server/user/daemon";
import { DefaultUserPreferences } from "$ts/server/user/default";
import type { AppKeyCombinations } from "$types/accelerator";
import { type ElevationData } from "$types/elevation";
import { LogLevel } from "$types/logging";
import type { RenderArgs } from "$types/process";
import type { UserPreferences } from "$types/user";
import type { Draggable } from "@neodrag/vanilla";
import { mount } from "svelte";
import { type App, type AppContextMenu, type AppProcessData, type ContextMenuItem } from "../../types/app";
import { Sleep } from "../sleep";
import { Store, type ReadableStore } from "../writable";
import { AppRuntimeError } from "./error";
import { ApplicationStorage } from "./storage";
import type { MaybePromise } from "$types/common";
export const bannedKeys = ["tab", "pagedown", "pageup"];

export class AppProcess extends ProcessWithPermissions {
  crashReason = "";
  windowTitle = Store("");
  windowIcon = Store("");
  app: AppProcessData;
  componentMount: Record<string, any> = {};
  userPreferences: ReadableStore<UserPreferences> = Store<UserPreferences>(DefaultUserPreferences);
  username: string = "";
  shell: ShellRuntime | undefined;
  overridePopulatable: boolean = false;
  public safeMode = false;
  protected overlayStore: Record<string, App> = {};
  protected elevations: Record<string, ElevationData> = {};
  public renderArgs: RenderArgs = {};
  public acceleratorStore: AppKeyCombinations = [];
  public readonly contextMenu: AppContextMenu = {};
  public altMenu = Store<ContextMenuItem[]>([]);
  public windowFullscreen = Store<boolean>(false);
  draggable: Draggable | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, ...args: any[]) {
    super(pid, parentPid);

    this.app = {
      data: { ...app.data },
      id: app.data.id,
      desktop: app.desktop,
    };

    Stack.renderer!.lastInteract = this;

    this.windowTitle.set(app.data.metadata.name || "Application");
    this.name = app.data.id;
    this.shell = Stack.getProcess(+Env.get("shell_pid"));

    const desktopProps = State?.stateProps["desktop"];
    const daemon: UserDaemon | undefined = desktopProps?.userDaemon || TryGetDaemon();

    if (daemon) {
      this.userPreferences = daemon.preferences;
      this.username = daemon.username;
      this.safeMode = daemon.safeMode;
    }

    this.windowIcon.set(Daemon?.icons?.getAppIconByProcess(this) || this.getIconCached("ComponentIcon"));

    SysDispatch.subscribe("window-unfullscreen", ([pid]) => {
      if (this.pid === pid) this.windowFullscreen.set(false);
    });

    SysDispatch.subscribe("window-fullscreen", ([pid]) => {
      if (this.pid === pid) this.windowFullscreen.set(true);
    });

    const preferences = this.userPreferences();

    if (!preferences.appPreferences[app.id]) {
      this.userPreferences.update((v) => {
        v.appPreferences[app.id] = {};

        return v;
      });
    }
  }

  // Conditional function that can prohibit closing if it returns false
  async onClose() {
    return true;
  }

  async closeWindow(kill = true) {
    this.Log(`Closing window ${this.pid}`);

    Stack.renderer?.focusedPid.set(this.pid);

    const canClose = this._disposed || (this.onClose ? await this.onClose() : true);

    if (!canClose) {
      this.Log(`Can't close`);
      return false;
    }

    this.STATE = "stopping";

    this.shell?.trayHost?.disposeProcessTrayIcons?.(this.pid);

    if (this.getWindow()?.classList.contains("fullscreen"))
      SysDispatch.dispatch("window-unfullscreen", [this.pid, this.app.desktop]);

    const elements = [
      ...document.querySelectorAll(`div.window[data-pid="${this.pid}"]`),
      ...(document.querySelectorAll(`div.overlay-wrapper[data-pid="${this.pid}"]`) || []),
      ...(document.querySelectorAll(`button.opened-app[data-pid="${this.pid}"]`) || []),
    ];

    if (!elements.length) {
      this.Log(`No elements, calling killSelf`);

      return this.killSelf();
    }

    SysDispatch.dispatch("window-closing", [this.pid]);

    for (const element of elements) {
      element.classList.add("closing");
    }

    if (kill) {
      if (!this.app.data.core) await Sleep(400);
      await this.killSelf();
    }

    return true;
  }

  render(args: RenderArgs): MaybePromise<any> {
    /** */
  }

  async __render__(body: HTMLDivElement) {
    this.STATE = "rendering";
    this.startAcceleratorListener();

    if (this.userPreferences().disabledApps.includes(this.app.id)) {
      if (this.safeMode) {
        Daemon?.notifications?.sendNotification({
          title: "Running disabled app!",
          message: `Allowing execution of disabled app '${this.app.data.metadata.name}' because of Safe Mode.`,
          buttons: [
            {
              caption: "Manage apps",
              action: () => {
                Daemon?.spawn?.spawnApp("systemSettings", +Env.get("shell_pid"), "apps", "apps_manageApps");
              },
            },
          ],
          image: "SecurityHighIcon",
        });
      } else {
        this.Log(`Running application instance of app "${this.app.id}" is prohibited by the user. Terminating.`, LogLevel.error);

        return this.killSelf();
      }
    }

    this.Log("Rendering window contents");

    const component = this.app.data.assets.component;

    if (component)
      this.componentMount = mount(component, {
        target: body,
        props: {
          process: this,
          pid: this.pid,
          kernel: Kernel,
          app: this.app.data,
          windowTitle: this.windowTitle,
          windowIcon: this.windowIcon,
        },
      });

    const result = this.render(this.renderArgs);

    // Below lines make sure render methods can be either asynchronous or synchronous.
    if (result instanceof Promise) result.then(() => (this.STATE = "running"));
    else this.STATE = "running";
  }

  //#endregion

  async CrashDetection() {
    while (true) {
      if (this.crashReason) {
        throw new AppRuntimeError(this.crashReason);
      }

      if (this._disposed) {
        break;
      }

      await Sleep(1); // prevent hanging bleh
    }
  }

  getSingleton(): this[] {
    const { renderer } = Stack;

    return (renderer?.getAppInstances(this.app.data.id, this.pid) || []) as this[];
  }

  async closeIfSecondInstance(): Promise<this | undefined> {
    if (this.STATE !== "rendering") {
      throw new AppRuntimeError(
        "Violation: only call closeIfSecondInstance in AppProcess.render so that it doesn't hang the stack."
      );
    }
    this.Log("Closing if second instance");

    const instances = this.getSingleton();

    if (instances.length) {
      await this.killSelf();

      if (!this.app.data.core) Stack.renderer?.focusPid(instances[0].pid);

      if (instances[0].app.desktop) Daemon?.workspaces?.switchToDesktopByUuid(instances[0].app.desktop);
    }

    return instances.length ? instances[0] : undefined;
  }

  getWindow() {
    if (this.STATE === "starting") {
      throw new AppRuntimeError("Violation: Called getWindow during process startup: there's no window at this point.");
    }

    const window = document.querySelector(`div.window[data-pid="${this.pid}"]`);

    return (window as HTMLDivElement) || undefined;
  }

  getBody() {
    if (this.STATE === "starting") {
      throw new AppRuntimeError("Violation: Called getBody during process startup: there's no window body at this point.");
    }

    const body = document.querySelector(`div.window[data-pid="${this.pid}"] > div.body`);

    return (body as HTMLDivElement) || undefined;
  }

  hasOverlays(): boolean {
    const window = this.getWindow();

    if (!window) return false;

    return window.querySelectorAll("div.overlay-wrapper").length > 0;
  }

  public startAcceleratorListener() {
    this.Log("Starting listener!");

    document.addEventListener("keydown", (e) => this.processor(e));
  }

  public stopAcceleratorListener() {
    this.Log("Stopping listener!", LogLevel.warning);

    document.removeEventListener("keydown", (e) => this.processor(e));
  }

  public async __stop(): Promise<any> {
    this.Log(`STOPPING PROCESS`);

    this.stopAcceleratorListener();
    return await this.stop();
  }

  private async processor(e: KeyboardEvent) {
    if (!e.key || this.hasOverlays() || this._disposed) return;

    let focusingTextArea = false;

    const textareas = this.getWindow()?.querySelectorAll("textarea, [contenteditable]");

    for (const textarea of textareas || []) {
      if (document.activeElement === textarea) focusingTextArea = true;
    }

    if (!focusingTextArea && bannedKeys.includes(e.key.toLowerCase()) && State?.currentState === "desktop") {
      e.preventDefault();

      return false;
    }

    this.unfocusActiveElement();

    const state = State?.currentState;

    if (state != "desktop" || this._disposed) return;

    for (const combo of this.acceleratorStore) {
      const alt = combo.alt ? e.altKey : true;
      const ctrl = combo.ctrl ? e.ctrlKey : true;
      const shift = combo.shift ? e.shiftKey : true;
      /** */
      const modifiers = alt && ctrl && shift;
      /** */
      const pK = e.key.toLowerCase().trim();
      const key = combo.key?.trim().toLowerCase();
      const codedKey = String.fromCharCode(e.keyCode).toLowerCase();
      /** */
      const isFocused = Stack.renderer?.focusedPid() == this.pid || combo.global;

      if (!modifiers || (key != pK && key && key != codedKey) || !isFocused) continue;

      if (!Daemon?.elevation!._elevating) await combo.action(this, e);

      break;
    }
  }

  public unfocusActiveElement() {
    const el = document.activeElement as HTMLButtonElement;

    if (!el || el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el.isContentEditable) return;

    el.blur();
  }

  async spawnOverlay(id: string, ...args: any[]) {
    const metadata = this.overlayStore[id];

    if (!metadata) {
      this.Log(`Tried spawning non-existent overlay '${id}'`, LogLevel.error);

      return false;
    }

    const proc = await Stack.spawn<AppProcess>(
      metadata.assets.runtime,
      undefined,
      Daemon?.userInfo?._id,
      this.pid,
      {
        data: { ...metadata, overlay: true },
        id,
      },
      ...args
    );

    if (proc) Stack.renderer?.focusPid(proc?.pid);

    return !!proc;
  }

  async spawnApp<T = AppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await Daemon?.spawn?.spawnApp<T>(id, parentPid ?? this.parentPid, ...args);
  }

  async spawnOverlayApp<T = AppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await Daemon?.spawn?.spawnOverlay<T>(id, parentPid ?? this.parentPid, ...args);
  }

  async elevate(id: string) {
    if (!this.elevations[id]) return false;
    return await Daemon!.elevation!.manuallyElevate(this.elevations[id]);
  }

  notImplemented(what?: string) {
    this.Log(`Not implemented: ${what || "<unknown>"}`);
    // Manually invoking spawnOverlay method on daemon to work around AppProcess <> MessageBox circular import
    Daemon?.spawn?.spawnOverlay("messageBox", this.pid, {
      title: "Not implemented",
      message: `${
        what || "This feature"
      } isn't implemented yet ¯\\_(ツ)_/¯<br><br>Encountering this in a (recent) <b>release</b> build of ArcOS? Then I forgot to make something. Please let me know. Do that with this information:<br><code class='block'>ArcOS v${ArcOSVersion}-${ArcMode()} (${ArcBuild()}) - ${
        location.hostname
      }</code>`,
      buttons: [{ caption: "Sad :(", action: () => {}, suggested: true }],
      image: "BugReportIcon",
      sound: "arcos.dialog.warning",
    });
  }

  appStore() {
    return Daemon?.serviceHost?.getService("AppStorage") as ApplicationStorage;
  }

  async getIcon(id: string): Promise<string> {
    return Daemon?.icons?.getIcon(id)!;
  }

  getIconCached(id: string): string {
    return Daemon?.icons?.getIconCached(id)! || id;
  }

  getIconStore(id: string): ReadableStore<string> {
    return Daemon?.icons?.getIconStore(id)!;
  }
}
