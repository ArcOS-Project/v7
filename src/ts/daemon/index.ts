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
import type { IFileAssocService } from "$interfaces/services/FileAssocSvc";
import type { IGlobalDispatch } from "$interfaces/services/GlobalDispatch";
import type { ILibraryManagement } from "$interfaces/services/LibMgmtSvc";
import type { IShellRuntime } from "$interfaces/shell";
import { Env, Fs, getKMod, Stack, State } from "$ts/env";
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
}

export let Daemon: IUserDaemon;
