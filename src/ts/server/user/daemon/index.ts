//#region IMPORTS
import type { ShellRuntime } from "$apps/components/shell/runtime";
import { ApplicationStorage } from "$ts/apps/storage";
import { ArcOSVersion, Env, Fs, getKMod, Stack, State, SysDispatch } from "$ts/env";
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
import { AdminAppImportPathAbsolutes } from "$ts/apps/store";
import { compareVersion } from "$ts/version";
import { MessageBox } from "$ts/dialog";
import { ArcMode } from "$ts/metadata/mode";
import { ArcBuild } from "$ts/metadata/build";
import { deepCopyWithBlobs } from "$ts/util";
import { join } from "$ts/util/fs";
import { UserPaths } from "../store";
import { textToBlob } from "$ts/util/convert";

//#endregion

export class UserDaemon extends Process {
  public username: string;
  public token: string;
  public userInfo: UserInfo = DefaultUserInfo;
  public autoLoadComplete = false;
  public safeMode = false;
  public initialized = false;
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
    } catch {
      return false;
    }
  }

  async stop() {
    if (this._disposed) return;

    if (!this._toLoginInvoked && State?.currentState === "desktop") {
      State?.loadState("login", { type: "restart", userDaemon: this });
      return false;
    }

    if (this.serviceHost) this.serviceHost._holdRestart = true;

    Env.delete("userdaemon_pid");
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

    await this.checkAdminEnablement();

    if (!this.userInfo.admin) return;
    const appStore = this.appStorage()!;

    const blocklist = Daemon!.preferences()._internalImportBlocklist || [];
    const adminApps = await Promise.all(
      Object.keys(AdminAppImportPathAbsolutes).map(async (path) => {
        if (!this.safeMode && blocklist.includes(path)) return null;
        try {
          const start = performance.now();
          const mod = await AdminAppImportPathAbsolutes[path]();
          const app = (mod as any).default as App;

          if (app._internalMinVer && compareVersion(ArcOSVersion, app._internalMinVer) === "higher")
            throw `Not loading ${app.metadata.name} because this app requires a newer version of ArcOS`;

          if (app._internalSysVer || app._internalOriginalPath)
            throw `Can't load dubious built-in app '${app.id}' because it contains runtime-level properties set before runtime`;

          const end = performance.now() - start;
          const appCopy = await deepCopyWithBlobs<App>(app);

          appCopy._internalSysVer = `v${ArcOSVersion}-${ArcMode()}-${ArcBuild()}`;
          appCopy._internalOriginalPath = path;
          appCopy._internalLoadTime = end;

          this.Log(
            `Loaded admin app: ${path}: ${appCopy.metadata.name} by ${appCopy.metadata.author}, version ${appCopy.metadata.version} (${end.toFixed(2)}ms)`
          );

          return appCopy;
        } catch (e) {
          await new Promise<void>((r) => {
            MessageBox(
              {
                title: "Admin app load error",
                message: `ArcOS failed to load an administrative application because of an error. ${e}.`,
                buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
                image: "WarningIcon",
              },
              +Env.get("loginapp_pid"),
              true
            );
            this.Log(`Failed to load admin app ${path}: ${e}`);
            return null;
          });
        }
      })
    ).then((apps) => apps.filter((a): a is App => a !== null));

    appStore.loadOrigin("admin", () => adminApps);

    await appStore.refresh();

    const proto = this.serviceHost?.getService<ProtocolServiceProcess>("ProtoService");

    for (const key in AdminProtocolHandlers) {
      proto?.registerHandler(key, AdminProtocolHandlers[key]);
    }
  }

  async checkAdminEnablement() {
    const path = join(UserPaths.System, "admin.lock");
    try {
      const lockfileExists = !!(await Fs.readFile(path));

      if (!lockfileExists) {
        if (this.userInfo.admin) {
          await Daemon.appreg?.updateStartMenuFolder(true);
          await Fs.writeFile(path, textToBlob(btoa("ooga booga")));
        }
      } else {
        if (!this.userInfo.admin) {
          MessageBox(
            {
              title: "Admin status revoked",
              message:
                "The administrator lockfile is present on your filesystem, but you're not an administrator. This means that your account no longer has admin rights.",
              buttons: [
                {
                  caption: "Okay",
                  action: async () => {
                    await Fs.deleteItem(path);
                    await Daemon.appreg?.updateStartMenuFolder();
                  },
                },
              ],
              image: "ElevationIcon",
              sound: "arcos.dialog.error",
            },
            this.getShell()?.pid!,
            true
          );
        }
      }
    } catch {
      await Daemon.appreg?.updateStartMenuFolder(true);
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

  updateGlobalDispatch() {
    this.serviceHost?.getService<GlobalDispatch>?.("GlobalDispatch")?.sendUpdate();
  }
}

export function TryGetDaemon(): UserDaemon | undefined {
  const env = getKMod<EnvironmentType>("env");
  const stack = Stack;
  const daemonPid = +env.get("userdaemon_pid");

  return stack.getProcess<UserDaemon>(daemonPid);
}

export let Daemon: UserDaemon;
