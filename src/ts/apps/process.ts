import type { IAppProcess, IAppProcessConstructor } from "$interfaces/IAppProcess";
import type { IProcess } from "$interfaces/IProcess";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import { Daemon, Env, Stack, State } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { DefaultUserPreferences } from "$ts/user/default";
import { LogLevel } from "$types/shared/logging";
import type { ReadableStore } from "$types/shared/writable";
import { type ElevationData } from "$types/system/elevation";
import type { UserPreferences } from "$types/user";
import type { Draggable } from "@neodrag/vanilla";
import { type App, type AppProcessData } from "../../types/apps/app";
import { Store } from "../writable";
import { AppRuntimeError } from "./error";
import { AppRendererContext } from "./renderercontext";
import type { IAppRendererContext } from "$interfaces/IAppRenderer";

export const KEY_IGNORE_LIST = ["tab", "pagedown", "pageup"];

export class AppProcess extends Process implements IAppProcess {
  appId: string;
  desktop?: string;
  parentContextId?: string;
  app: App;
  crashReason = "";
  userPreferences: ReadableStore<UserPreferences> = Store<UserPreferences>(DefaultUserPreferences);
  username: string = "";
  renderTarget?: HTMLDivElement;
  public safeMode = false;
  protected overlayStore: Record<string, App> = {};
  protected elevations: Record<string, ElevationData> = {};
  primaryAppContext: () => IAppRendererContext<this> = () =>
    AppRendererContext.InferPrimaryContext(this, (...args) => this.Log(...args), this.parentContextId);

  get shell() {
    return Stack.getProcess<IShellRuntime>(+Env.get("shell_pid"));
  }

  draggable: Draggable | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, ...args: any[]) {
    super(pid, parentPid, app, ...args);
    this.appId = app.id;
    this.name = app.data.id;
    this.app = app.data;
    this.desktop = app.desktop;

    const desktopProps = State?.stateProps["desktop"];
    const daemon: IUserDaemon | undefined = desktopProps?.userDaemon || Daemon;

    if (daemon) {
      this.userPreferences = daemon.preferences;
      this.username = daemon.username;
      this.safeMode = daemon.safeMode;
    }

    if (!this.userPreferences().appPreferences[app.id]) {
      this.userPreferences.update((v) => {
        v.appPreferences[app.id] = {};

        return v;
      });
    }
  }

  //#endregion

  getSingleton(): this[] {
    return (Stack.renderer?.getAppInstances(this.app.id, this.pid) || []) as this[];
  }

  async closeIfSecondInstance(): Promise<this | undefined> {
    if (this.STATE !== "rendering") {
      throw new AppRuntimeError(
        "Violation: only call closeIfSecondInstance in IAppProcess.render so that it doesn't hang the stack."
      );
    }

    this.Log("Closing if second instance");

    const instances = this.getSingleton();
    if (!instances.length) return undefined;

    await this.killSelf();

    const contexts = Stack.renderer!.getContextsOfPid(instances[0].pid);

    if (!this.app.core) Stack.renderer?.focusContext(contexts[0].identifier);
    if (contexts[0].desktop) Daemon?.workspaces?.switchToDesktopByUuid(contexts[0].desktop);

    return instances[0];
  }

  public async __start(): Promise<any> {
    if (this.userPreferences().disabledApps.includes(this.appId)) {
      if (this.safeMode) {
        Daemon?.notifications?.sendNotification({
          title: "Running disabled app!",
          message: `Allowing execution of disabled app '${this.app.metadata.name}' because of Safe Mode.`,
          buttons: [
            {
              caption: "Manage apps",
              action: () => {
                this.spawnApp("systemSettings", +Env.get("shell_pid"), "apps", "apps_manageApps");
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

    const context = this.primaryAppContext();
    await context!.__start(this.renderTarget);
  }

  public async __stop(): Promise<any> {
    this.Log(`STOPPING PROCESS`);

    this.shell?.trayHost?.disposeProcessTrayIcons(this.pid);

    return await this.stop();
  }

  async spawnOverlay(id: string, ...args: any[]) {
    const metadata = this.overlayStore[id];

    if (!metadata) {
      this.Log(`Tried spawning non-existent overlay '${id}'`, LogLevel.error);

      return false;
    }

    const proc = await Stack.spawn<IAppProcess>(
      metadata.assets.runtime as IAppProcessConstructor,
      undefined,
      Daemon?.userInfo?._id,
      this.pid,
      {
        data: { ...metadata, overlay: true },
        id,
      },
      ...args
    );

    // if (proc) Stack.renderer?.focusContext(Stack.renderer.determineParentContextId(proc.pid)?.identifier); // TODO

    return !!proc;
  }

  async spawnApp<T extends IProcess = IAppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await Daemon?.spawn?.spawnApp<T>(id, parentPid ?? this.parentPid, {}, ...args);
  }

  async spawnOverlayApp<T extends IProcess = IAppProcess>(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await Daemon?.spawn?.spawnApp<T>(id, parentPid ?? this.parentPid, { asOverlay: true }, ...args);
  }

  async elevate(id: string) {
    if (!this.elevations[id]) return false;
    return await Daemon!.elevation!.manuallyElevate(this.elevations[id]);
  }

  appStore() {
    return Daemon?.serviceHost?.getService("AppStorage") as IApplicationStorage;
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

  blink() {}
}
