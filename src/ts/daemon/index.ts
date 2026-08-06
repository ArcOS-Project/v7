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
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext, IUserDaemon } from "$interfaces/IUserDaemon";
import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IServerConnector } from "$interfaces/modules/IServerManager";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IFileAssocService } from "$interfaces/services/IFileAssocService";
import type { IGlobalDispatch } from "$interfaces/services/IGlobalDispatch";
import type { ILibraryManagement } from "$interfaces/services/ILibraryManagement";
import type { IMessagingInterface } from "$interfaces/services/IMessagingInterface";
import { Daemon, Env, Fs, GetConnector, SetDaemon, Stack, State, getKMod } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { ServiceHost } from "$ts/servicehost";
import { DefaultUserInfo } from "$ts/user/default";
import { UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { UserDaemonInitStage, UserDaemonStartOptions } from "$types/daemon";
import type { UserInfo } from "$types/user";
import axios from "axios";
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
  public InitComplete = Store<boolean>(false);

  public get betaClient() {
    return axios.create({
      baseURL: import.meta.env.DW_BETA_URL,
      responseType: "json",
      params: {
        token: this.token,
      },
    });
  }

  public get globalDispatch() {
    return this.serviceHost?.getService<IGlobalDispatch>("GlobalDispatch");
  }

  public get assoc() {
    return this.serviceHost?.getService<IFileAssocService>("FileAssocSvc");
  }

  public get libraries() {
    return this.serviceHost?.getService<ILibraryManagement>("LibMgmtSvc");
  }

  public get canPaste() {
    return this.cutList().length > 0 || this.copyList().length > 0;
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
    SetDaemon(this);
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

  static async Hello(token: string, username: string, userInfo?: UserInfo, parentPid = 1): Promise<ICommandResult<IUserDaemon>> {
    Log("UserDaemon.Hello", "HELLO!");
    const userDaemon = await Stack.spawn<IUserDaemon>(this, undefined, userInfo?._id ?? "SYSTEM", parentPid, token, username);
    if (!userDaemon) return CommandResult.Error("Daemon process didn't come up");

    return CommandResult.Ok(userDaemon);
  }

  async startUserDaemon(
    startOptions: UserDaemonStartOptions,
    broadcast: (m: string) => void
  ): Promise<ICommandResult<IUserDaemon>> {
    const { startStages, stageCallbacks } = startOptions;

    // Let's first get the user info
    const userInfoResult = await Daemon.account!.getUserInfo();
    if (!userInfoResult.success) return CommandResult.Error(userInfoResult.errorMessage ?? "Failed to request user info");

    const userInfo = userInfoResult.result!;
    const onUserInfoResult = (await startOptions.onUserInfo?.(userInfo)) ?? true;

    if (!onUserInfoResult.success) return onUserInfoResult;

    async function performStartStage(stage: UserDaemonInitStage, message: string, callback: () => Promise<void>) {
      if (startStages.includes(stage)) {
        broadcast(message);
        await callback();
        await stageCallbacks?.[stage]?.(Daemon, broadcast);
      }
    }

    await performStartStage("filesystem", "Starting filesystem", async () => {
      await this.init!.startFilesystemSupplier();
      await this.version!.mountSourceDrive();
    });

    await performStartStage("preferencesSync", "Starting synchronization", async () => {
      await this.preferencesCtx!.startPreferencesSync();
    });

    await performStartStage("notifyLogin", "Notifying login activity", async () => {
      await Daemon.activity!.logActivity("login");
    });

    await performStartStage("serviceHost", "Starting service host", async () => {
      await this.init!.startServiceHost(broadcast);
    });

    await performStartStage("firstRun", "", async () => {
      if (!Daemon.preferences().firstRunDone && !Daemon.preferences().appPreferences.arcShell) {
        broadcast("Welcome to ArcOS");

        await this.init!.firstRun();
      }
    });

    await performStartStage("statusRefresh", "Starting status refresh", async () => {
      await this.init!.startDriveNotifierWatcher();
      await this.init!.startSystemStatusRefresh();
    });

    await performStartStage("letsGo", "Let's go!", async () => {
      // stub; we only care about the stage callback
    });

    await performStartStage("workspaces", "Starting workspaces", async () => {
      await this.workspaces!.startVirtualDesktops();
    });

    await performStartStage("autorun", "Running autorun", async () => {
      await this.wallpaper?.updateWallpaper(this.preferences());
      await this.init?.handleShellAndAutorun();
      await this.checks?.checkForUpdates();
      await this.serviceHost?.getService<IMessagingInterface>("MessagingService")?.checkForMissedMessages();
    });

    this._blockLeaveInvocations = false;

    return CommandResult.Ok(this);
  }
}
