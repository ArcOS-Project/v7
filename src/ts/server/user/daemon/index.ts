//#region IMPORTS
import type { ShellRuntime } from "$apps/components/shell/runtime";
import { ApplicationStorage } from "$ts/apps/storage";
import { Env, getKMod, KernelServerUrl, Stack, SysDispatch } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import { Process } from "$ts/process/instance";
import type { ProtocolServiceProcess } from "$ts/proto";
import { AdminProtocolHandlers } from "$ts/server/admin/proto";
import type { GlobalDispatch } from "$ts/server/ws";
import { ServiceHost } from "$ts/services";
import { Sleep } from "$ts/sleep";
import { LibraryManagement } from "$ts/tpa/libraries";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { EnvironmentType } from "$types/kernel";
import type { UserInfo, UserPreferences } from "$types/user";
import type { FileAssocService } from "../assoc";
import { DefaultUserInfo } from "../default";
import type { UserContext } from "./context";
import type { AccountUserContext } from "./contexts/account";
import type { LoginActivityUserContext } from "./contexts/activity";
import type { ApplicationsUserContext } from "./contexts/applications";
import type { AppRegistrationUserContext } from "./contexts/appregistration";
import type { AppRendererUserContext } from "./contexts/apprenderer";
import type { ChecksUserContext } from "./contexts/checks";
import type { ElevationUserContext } from "./contexts/elevation";
import type { FilesystemUserContext } from "./contexts/filesystem";
import type { HelpersUserContext } from "./contexts/helpers";
import type { IconsUserContext } from "./contexts/icons";
import type { InitUserContext } from "./contexts/init";
import type { MigrationsUserContext } from "./contexts/migrations";
import type { NotificationsUserContext } from "./contexts/notifications";
import type { PowerUserContext } from "./contexts/power";
import type { PreferencesUserContext } from "./contexts/preferences";
import type { ShortcutsUserContext } from "./contexts/shortcuts";
import type { SpawnUserContext } from "./contexts/spawn";
import type { ThemesUserContext } from "./contexts/themes";
import type { VersionUserContext } from "./contexts/version";
import type { WallpaperUserContext } from "./contexts/wallpaper";
import type { WorkspaceUserContext } from "./contexts/workspaces";
import { UserContexts } from "./store";
//#endregion

export class UserDaemon extends Process {
  public username: string;
  public token: string;
  public userInfo: UserInfo = DefaultUserInfo;
  public autoLoadComplete = false;
  public safeMode = false;
  public initialized = false;
  public usingTargetedAuthorization = false;
  public _blockLeaveInvocations = true;
  public _toLoginInvoked = false;
  override _criticalProcess: boolean = true;
  public copyList = Store<string[]>([]);
  public cutList = Store<string[]>([]);
  public globalDispatch?: GlobalDispatch;
  public assoc?: FileAssocService;
  public serviceHost?: ServiceHost;
  public libraries?: LibraryManagement;

  // CONTEXTS

  account?: AccountUserContext;
  activity?: LoginActivityUserContext;
  apps?: ApplicationsUserContext;
  appreg?: AppRegistrationUserContext;
  renderer?: AppRendererUserContext;
  checks?: ChecksUserContext;
  elevation?: ElevationUserContext;
  files?: FilesystemUserContext;
  helpers?: HelpersUserContext;
  icons?: IconsUserContext;
  init?: InitUserContext;
  migrations?: MigrationsUserContext;
  notifications?: NotificationsUserContext;
  power?: PowerUserContext;
  preferencesCtx?: PreferencesUserContext;
  spawn?: SpawnUserContext;
  themes?: ThemesUserContext;
  version?: VersionUserContext;
  wallpaper?: WallpaperUserContext;
  workspaces?: WorkspaceUserContext;
  shortcuts?: ShortcutsUserContext;

  get preferences() {
    return this.preferencesCtx!.preferences!;
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, token: string, username: string, userInfo?: UserInfo) {
    super(pid, parentPid);

    this.token = token;
    this.username = username;
    Env.set("userdaemon_pid", this.pid);
    if (userInfo) this.userInfo = userInfo;

    this.safeMode = !!Env.get("safemode");
    this.name = "UserDaemon";

    this.setSource(__SOURCE__);
    Daemon = this;
  }

  async start() {
    try {
      await this.startUserContexts();
      this.usingTargetedAuthorization = KernelServerUrl !== import.meta.env.DW_SERVER_URL;
    } catch {
      return false;
    }
  }

  async stop() {
    if (this._disposed) return;

    if (!this._toLoginInvoked && KernelStateHandler()?.currentState === "desktop") {
      KernelStateHandler()?.loadState("login", { type: "restart", userDaemon: this });
      return false;
    }

    if (this.serviceHost) this.serviceHost._holdRestart = true;
  }

  //#endregion
  //#region INIT

  async startUserContexts() {
    for (const id in UserContexts) {
      const context = new UserContexts[id](id, this);
      (this as any)[id] = context;
    }

    for (const id in UserContexts) {
      await (this as any)[id].__init();
    }
  }

  async stopUserContexts() {
    for (const id in UserContexts) {
      const context = (this as any)[id] as UserContext;

      await context.__deactivate();
    }
  }

  async activateAdminBootstrapper() {
    this.Log("Activating admin bootstrapper");

    if (!this.userInfo.admin) return;
    const appStore = this.appStorage()!;
    const adminPortal = (await import("$apps/admin/adminportal/AdminPortal")).default as App;

    appStore.loadOrigin("admin", () => [adminPortal]);
    await appStore.refresh();

    const proto = this.serviceHost?.getService<ProtocolServiceProcess>("ProtoService");

    for (const key in AdminProtocolHandlers) {
      proto?.registerHandler(key, AdminProtocolHandlers[key]);
    }
  }

  async activateGlobalDispatch() {
    this.globalDispatch = this.serviceHost!.getService<GlobalDispatch>("GlobalDispatch");

    this.globalDispatch?.subscribe("update-preferences", async (preferences: UserPreferences) => {
      this.preferencesCtx!.syncLock = true;
      await Sleep(0);
      this.preferencesCtx!.preferences.set(preferences);
      await Sleep(0);
      this.preferencesCtx!.syncLock = false;
    });

    this.globalDispatch?.subscribe("fs-flush-folder", (path) => {
      SysDispatch.dispatch("fs-flush-folder", path);
    });

    this.globalDispatch?.subscribe("fs-flush-file", (path) => {
      SysDispatch.dispatch("fs-flush-file", path);
    });
  }

  appStorage() {
    return this.serviceHost?.getService<ApplicationStorage>("AppStorage");
  }

  getShell(): ShellRuntime | undefined {
    return Stack.getProcess(+getKMod<EnvironmentType>("env").get("shell_pid"));
  }

  //#endregion INIT
}

export function TryGetDaemon(): UserDaemon | undefined {
  const env = getKMod<EnvironmentType>("env");
  const stack = Stack;
  const daemonPid = +env.get("userdaemon_pid");

  return stack.getProcess<UserDaemon>(daemonPid);
}

export let Daemon: UserDaemon;
