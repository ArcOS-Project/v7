import type { ShellRuntime } from "$apps/components/shell/runtime";
import { SystemDispatch } from "$ts/dispatch";
import { ArcOSVersion } from "$ts/env";
import { BugReportIcon, ComponentIcon, SecurityHighIcon } from "$ts/images/general";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { UserDaemon } from "$ts/server/user/daemon";
import { DefaultUserPreferences } from "$ts/server/user/default";
import type { AppKeyCombinations } from "$types/accelerator";
import type { ElevationData } from "$types/elevation";
import { LogLevel } from "$types/logging";
import type { RenderArgs } from "$types/process";
import type { UserPreferences } from "$types/user";
import type { Draggable } from "@neodrag/vanilla";
import { mount } from "svelte";
import { type App, type AppContextMenu, type AppProcessData, type ContextMenuItem } from "../../types/app";
import { WaveKernel } from "../kernel";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { Store, type ReadableStore } from "../writable";
import { AppRuntimeError } from "./error";
import { ApplicationStorage } from "./storage";
export const bannedKeys = ["tab", "pagedown", "pageup"];

export class AppProcess extends Process {
  crashReason = "";
  windowTitle = Store("");
  windowIcon = Store("");
  app: AppProcessData;
  componentMount: Record<string, any> = {};
  userPreferences: ReadableStore<UserPreferences> = Store<UserPreferences>(DefaultUserPreferences);
  username: string = "";
  systemDispatch: SystemDispatch;
  userDaemon: UserDaemon | undefined;
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

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, ...args: any[]) {
    super(handler, pid, parentPid);

    this.app = {
      data: { ...app.data },
      id: app.data.id,
      desktop: app.desktop,
    };

    this.handler.renderer!.lastInteract = this;

    this.windowTitle.set(app.data.metadata.name || "Application");
    this.name = app.data.id;
    this.systemDispatch = this.kernel.getModule<SystemDispatch>("dispatch");
    this.shell = this.handler.getProcess(+this.env.get("shell_pid"));

    const desktopProps = this.kernel.state?.stateProps["desktop"];
    const daemon: UserDaemon | undefined = desktopProps?.userDaemon || this.handler.getProcess(+this.env.get("userdaemon_pid"));

    if (daemon) {
      this.userPreferences = daemon.preferences;
      this.username = daemon.username;
      this.userDaemon = daemon;
      this.safeMode = daemon.safeMode;
    }

    this.windowIcon.set(this.userDaemon?.getAppIconByProcess(this) || ComponentIcon);
    this.startAcceleratorListener();

    this.systemDispatch.subscribe("window-unfullscreen", ([pid]) => {
      if (this.pid === pid) this.windowFullscreen.set(false);
    });

    this.systemDispatch.subscribe("window-fullscreen", ([pid]) => {
      if (this.pid === pid) this.windowFullscreen.set(true);
    });

    const preferences = this.userPreferences();

    if (!preferences.appPreferences[app.id]) {
      this.userPreferences.update((v) => {
        v.appPreferences[app.id] = {};

        return v;
      });
    }

    // Global interceptor for the Recycle Bin
    const userDaemon = this.userDaemon;

    this.fs = new Proxy(this.fs, {
      get: (target, prop, receiver) => {
        if (prop === "deleteItem" && typeof target[prop] === "function") {
          return async (path: string, dispatch?: boolean) => {
            if (!path.startsWith("U:/")) {
              return await target[prop].call(this.fs, path, dispatch);
            }

            const trash = userDaemon?.serviceHost?.getService("TrashSvc") as any;
            if (!trash) return await target[prop].call(this.fs, path, dispatch);

            return await trash.moveToTrash(path, dispatch);
          };
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  // Conditional function that can prohibit closing if it returns false
  async onClose() {
    return true;
  }

  async closeWindow(kill = true) {
    this.Log(`Closing window ${this.pid}`);

    const canClose = this._disposed || (await this.onClose());

    if (!canClose) {
      this.Log(`Can't close`);
      return;
    }

    this.shell?.trayHost?.disposeProcessTrayIcons?.(this.pid);

    if (this.getWindow()?.classList.contains("fullscreen"))
      this.systemDispatch.dispatch("window-unfullscreen", [this.pid, this.app.desktop]);

    const elements = [
      ...document.querySelectorAll(`div.window[data-pid="${this.pid}"]`),
      ...(document.querySelectorAll(`div.overlay-wrapper[data-pid="${this.pid}"]`) || []),
      ...(document.querySelectorAll(`button.opened-app[data-pid="${this.pid}"]`) || []),
    ];

    if (!elements.length) {
      this.Log(`No elements, calling killSelf`);

      return this.killSelf();
    }

    this.systemDispatch.dispatch("window-closing", [this.pid]);

    for (const element of elements) {
      element.classList.add("closing");
    }

    if (kill) {
      if (!this.app.data.core) await Sleep(400);
      await this.killSelf();
    }
  }

  async CrashDetection() {
    while (true) {
      if (this.crashReason) {
        throw new AppRuntimeError(this.crashReason);
      }

      // if (this._disposed) {
      //   throw new Error("Disposed.");
      // }

      await Sleep(1); // prevent hanging bleh
    }
  }

  render(args: RenderArgs): any {
    /** */
  }

  async __render__(body: HTMLDivElement) {
    if (this.userPreferences().disabledApps.includes(this.app.id)) {
      if (this.safeMode) {
        this.userDaemon?.sendNotification({
          title: "Running disabled app!",
          message: `Allowing execution of disabled app '${this.app.data.metadata.name}' because of Safe Mode.`,
          buttons: [
            {
              caption: "Manage apps",
              action: () => {
                this.userDaemon?.spawnApp("systemSettings", +this.env.get("shell_pid"), "apps", "apps_manageApps");
              },
            },
          ],
          image: SecurityHighIcon,
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
          kernel: WaveKernel.get(),
          handler: this.handler,
          app: this.app.data,
          windowTitle: this.windowTitle,
          windowIcon: this.windowIcon,
        },
      });

    this.render(this.renderArgs);
  }

  getSingleton() {
    const { renderer } = this.handler;

    return renderer?.getAppInstances(this.app.data.id, this.pid) || [];
  }

  async closeIfSecondInstance() {
    this.Log("Closing if second instance");

    const instances = this.getSingleton();

    if (instances.length) {
      await this.killSelf();

      if (!this.app.data.core) this.handler.renderer?.focusPid(instances[0].pid);

      if (instances[0].app.desktop) this.userDaemon?.switchToDesktopByUuid(instances[0].app.desktop);
    }

    return instances.length ? instances[0] : undefined;
  }

  getWindow() {
    const window = document.querySelector(`div.window[data-pid="${this.pid}"]`);

    return (window as HTMLDivElement) || undefined;
  }

  getBody() {
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

    if (!focusingTextArea && bannedKeys.includes(e.key.toLowerCase()) && this.kernel.state?.currentState === "desktop") {
      e.preventDefault();

      return false;
    }

    this.unfocusActiveElement();

    const state = this.kernel.state?.currentState;

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
      const isFocused = this.handler.renderer?.focusedPid() == this.pid || combo.global;

      if (!modifiers || (key != pK && key && key != codedKey) || !isFocused) continue;

      if (!this.userDaemon?._elevating) await combo.action(this, e);

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

    const proc = await this.handler.spawn<AppProcess>(
      metadata.assets.runtime,
      undefined,
      this.pid,
      {
        data: { ...metadata, overlay: true },
        id,
      },
      ...args
    );

    if (proc) this.handler.renderer?.focusPid(proc?.pid);

    return !!proc;
  }

  async spawnApp<T = AppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await this.userDaemon?.spawnApp<T>(id, parentPid ?? this.parentPid, ...args);
  }

  async spawnOverlayApp<T = AppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await this.userDaemon?.spawnOverlay<T>(id, parentPid ?? this.parentPid, ...args);
  }

  async elevate(id: string) {
    if (!this.elevations[id]) return false;
    return await this.userDaemon?.manuallyElevate(this.elevations[id]);
  }

  notImplemented(what?: string) {
    this.Log(`Not implemented: ${what || "<unknown>"}`);
    // Manually invoking spawnOverlay method on daemon to work around AppProcess <> MessageBox circular import
    this.userDaemon?.spawnOverlay("messageBox", this.pid, {
      title: "Not implemented",
      message: `${
        what || "This feature"
      } isn't implemented yet ¯\\_(ツ)_/¯<br><br>Encountering this in a (recent) <b>release</b> build of ArcOS? Then I forgot to make something. Please let me know. Do that with this information:<br><code class='block'>ArcOS v${ArcOSVersion}-${ArcMode()} (${ArcBuild()}) - ${
        location.hostname
      }</code>`,
      buttons: [{ caption: "Sad :(", action: () => {}, suggested: true }],
      image: BugReportIcon,
      sound: "arcos.dialog.warning",
    });
  }

  appStore() {
    return this.userDaemon?.serviceHost?.getService("AppStorage") as ApplicationStorage;
  }
}
