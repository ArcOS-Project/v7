//#region IMPORTS
import type { IAccountUserContext } from "$interfaces/contexts/account";
import type { ILoginActivityUserContext } from "$interfaces/contexts/activity";
import type { IAppRegistrationUserContext } from "$interfaces/contexts/appreg";
import type { IApplicationsUserContext } from "$interfaces/contexts/apps";
import type { IChecksUserContext } from "$interfaces/contexts/checks";
import type { IElevationUserContext } from "$interfaces/contexts/elevation";
import type { IFilesystemUserContext } from "$interfaces/contexts/files";
import type { IHelpersUserContext } from "$interfaces/contexts/helpers";
import type { IIconsUserContext } from "$interfaces/contexts/icons";
import type { IInitUserContext } from "$interfaces/contexts/init";
import type { INotificationsUserContext } from "$interfaces/contexts/notifications";
import type { IPowerUserContext } from "$interfaces/contexts/power";
import type { IPreferencesUserContext } from "$interfaces/contexts/preferences";
import type { IAppRendererUserContext } from "$interfaces/contexts/renderer";
import type { IShortcutsUserContext } from "$interfaces/contexts/shortcuts";
import type { ISpawnUserContext } from "$interfaces/contexts/spawn";
import type { IThemesUserContext } from "$interfaces/contexts/themes";
import type { IVersionUserContext } from "$interfaces/contexts/version";
import type { IWallpaperUserContext } from "$interfaces/contexts/wallpaper";
import type { IWorkspaceUserContext } from "$interfaces/contexts/workspaces";
import type { IUserContext, IUserDaemon } from "$interfaces/daemon";
import type { IEnvironment } from "$interfaces/modules/env";
import type { IApplicationStorage } from "$interfaces/services/AppStorage";
import type { IGlobalDispatch } from "$interfaces/services/GlobalDispatch";
import type { IProtocolServiceProcess } from "$interfaces/services/ProtoService";
import type { IShellRuntime } from "$interfaces/shell";
import { AdminAppImportPathAbsolutes } from "$ts/apps/store";
import { ArcOSVersion, Env, Fs, getKMod, Stack, State, SysDispatch } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { ServiceHost } from "$ts/servicehost";
import { AdminProtocolHandlers } from "$ts/servicehost/services/AdminBootstrapper/proto";
import { LibraryManagement } from "$ts/servicehost/services/LibMgmtSvc";
import { Sleep } from "$ts/sleep";
import { DefaultUserInfo } from "$ts/user/default";
import { UserPaths } from "$ts/user/store";
import { deepCopyWithBlobs } from "$ts/util";
import { textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { compareVersion } from "$ts/util/version";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { UserInfo, UserPreferences } from "$types/user";
import type { FileAssocService } from "../servicehost/services/FileAssocSvc";
import { UserContexts } from "./store";

//#endregion

export class UserDaemon extends Process implements IUserDaemon {
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
  public globalDispatch?: IGlobalDispatch;
  public assoc?: FileAssocService;
  public serviceHost?: ServiceHost;
  public libraries?: LibraryManagement;

  // CONTEXTS

  account?: IAccountUserContext;
  activity?: ILoginActivityUserContext;
  apps?: IApplicationsUserContext;
  appreg?: IAppRegistrationUserContext;
  renderer?: IAppRendererUserContext;
  checks?: IChecksUserContext;
  elevation?: IElevationUserContext;
  files?: IFilesystemUserContext;
  helpers?: IHelpersUserContext;
  icons?: IIconsUserContext;
  init?: IInitUserContext;
  notifications?: INotificationsUserContext;
  power?: IPowerUserContext;
  preferencesCtx?: IPreferencesUserContext;
  spawn?: ISpawnUserContext;
  themes?: IThemesUserContext;
  version?: IVersionUserContext;
  wallpaper?: IWallpaperUserContext;
  workspaces?: IWorkspaceUserContext;
  shortcuts?: IShortcutsUserContext;

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
      const context = (this as any)[id] as IUserContext;

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

    const proto = this.serviceHost?.getService<IProtocolServiceProcess>("ProtoService");

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
    this.globalDispatch = this.serviceHost!.getService<IGlobalDispatch>("GlobalDispatch");

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
    return this.serviceHost?.getService<IApplicationStorage>("AppStorage");
  }

  getShell(): IShellRuntime | undefined {
    return Stack.getProcess(+getKMod<IEnvironment>("env").get("shell_pid"));
  }

  //#endregion INIT

  updateGlobalDispatch() {
    this.serviceHost?.getService<IGlobalDispatch>?.("GlobalDispatch")?.sendUpdate();
  }
}

export function TryGetDaemon(): IUserDaemon | undefined {
  const env = getKMod<IEnvironment>("env");
  const stack = Stack;
  const daemonPid = +env.get("userdaemon_pid");

  return stack.getProcess<IUserDaemon>(daemonPid);
}

export let Daemon: IUserDaemon;
