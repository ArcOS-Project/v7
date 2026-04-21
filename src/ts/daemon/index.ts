//#region IMPORTS
import type { IAccountUserContext } from "$interfaces/contexts/IAccountUserContext";
import type { IApplicationsUserContext } from "$interfaces/contexts/IApplicationsUserContext";
import type { IAppRegistrationUserContext } from "$interfaces/contexts/IAppRegistrationUserContext";
import type { IAppRendererUserContext } from "$interfaces/contexts/IAppRendererUserContext";
import type { IChecksUserContext } from "$interfaces/contexts/IChecksUserContext";
import type { IElevationUserContext } from "$interfaces/contexts/IElevationUserContext";
import type { IFilesystemUserContext } from "$interfaces/contexts/IFilesystemUserContext";
import type { IHelpersUserContext } from "$interfaces/contexts/IHelpersUserContext";
import type { IIconsUserContext } from "$interfaces/contexts/IIconsUserContext";
import type { IInitUserContext } from "$interfaces/contexts/IInitUserContext";
import type { ILoginActivityUserContext } from "$interfaces/contexts/ILoginActivityUserContext";
import type { INotificationsUserContext } from "$interfaces/contexts/INotificationsUserContext";
import type { IPowerUserContext } from "$interfaces/contexts/IPowerUserContext";
import type { IPreferencesUserContext } from "$interfaces/contexts/IPreferencesUserContext";
import type { IShortcutsUserContext } from "$interfaces/contexts/IShortcutsUserContext";
import type { ISpawnUserContext } from "$interfaces/contexts/ISpawnUserContext";
import type { IThemesUserContext } from "$interfaces/contexts/IThemesUserContext";
import type { IVersionUserContext } from "$interfaces/contexts/IVersionUserContext";
import type { IWallpaperUserContext } from "$interfaces/contexts/IWallpaperUserContext";
import type { IWorkspaceUserContext } from "$interfaces/contexts/IWorkspaceUserContext";
import type { IUserContext, IUserDaemon } from "$interfaces/IUserDaemon";
import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IServerConnector } from "$interfaces/modules/IServerManager";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IFileAssocService } from "$interfaces/services/IFileAssocService";
import type { IGlobalDispatch } from "$interfaces/services/IGlobalDispatch";
import type { ILibraryManagement } from "$interfaces/services/ILibraryManagement";
import { Daemon, Env, Fs, GetConnector, getKMod, SetDaemon, Stack, State } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { ServiceHost } from "$ts/servicehost";
import { DefaultUserInfo } from "$ts/user/default";
import { UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { UserInfo } from "$types/user";
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
  public serviceHost?: ServiceHost;

  public get globalDispatch() {
    return this.serviceHost?.getService<IGlobalDispatch>("GlobalDispatch");
  }

  public get assoc() {
    return this.serviceHost?.getService<IFileAssocService>("FileAssocSvc");
  }

  public get libraries() {
    return this.serviceHost?.getService<ILibraryManagement>("LibMgmtSvc");
  }

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
    SetDaemon(this)
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

  GetConnector<T extends IServerConnector>(name: string): T {
    return GetConnector<T>(name, this.token);
  }
}
