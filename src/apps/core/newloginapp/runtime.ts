import PswdResetWizardApp from "$apps/components/pswdresetwizard/PswdResetWizardApp";
import TotpAuthGuiApp from "$apps/components/totpauthgui/TotpAuthGui";
import type { Constructs } from "$interfaces/common";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";
import { AppProcess } from "$ts/apps/process";
import { ConfigurationBuilder } from "$ts/config";
import { UserDaemon } from "$ts/daemon";
import { Env, GetConnector, Server, Stack, State, SysDispatch } from "$ts/env";
import { ProfilePictures } from "$ts/images/pfp";
import { Sleep } from "$ts/sleep";
import { LoginUser } from "$ts/user/auth";
import { Wallpapers } from "$ts/user/wallpaper/store";
import { authcode } from "$ts/util";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import type { RenderArgs } from "$types/system/process";
import type { UserInfo } from "$types/user";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import { NewLoginUserDaemonStartOptions } from "./store";
import {
  LoginStatusVariant,
  type LoginPersistence,
  type LoginPersistenceUser,
  type LoginScreenOptions,
  type LoginState,
  type LoginStatus,
} from "./types";

export class NewLoginAppRuntime extends AppProcess implements INewLoginAppRuntime {
  private readonly PERSISTENCE_LS_ID = "arcNewLoginPersistence";
  private readonly DEFAULT_WALLPAPER_ID = "img39";
  private options?: LoginScreenOptions;
  public State = Store<LoginState>({});
  public Status = Store<LoginStatus>({
    variant: LoginStatusVariant.None,
  });
  public Persistence = Store<LoginPersistence>();
  public Config = new ConfigurationBuilder<LoginPersistence>()
    .WithLocalStorage(this.PERSISTENCE_LS_ID)
    .ReadsFrom(this.Persistence)
    .WithDefaults({ users: [] })
    .ForProcess(this)
    .Build();
  private onErrorDismissed?(): void;

  public get ServerInfo() {
    return Server.serverInfo;
  }

  public get WelcomeString() {
    const hour = dayjs().hour();

    if (hour < 6) return "Hi, go to sleep";
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, options?: LoginScreenOptions) {
    super(pid, parentPid, app);

    this.options = options;
    this.safeMode = !!(options?.safeMode || Env.get("safemode"));

    if (this.safeMode) Env.set("safemode", true);
  }

  async start() {
    Env.set("loginapp_pid", this.pid);

    await this.Config.initialize();
    this.State.set(this.GetDefaultLoginState());

    const lastUserId = this.Persistence().lastUserId;
    if (lastUserId) this.LoadLoginStateUsingPersistenceFrom(lastUserId);
  }

  async stop() {
    Env.delete("loginapp_pid");
  }

  async render(args: RenderArgs) {
    if (this.ServerInfo?.freshBackend) {
      await State.loadState("initialSetup");
      return false;
    }

    if (!this.options?.type) {
      State.getStateLoaders().main.removeAttribute("style");

      const tokenResult = await this.LoadToken();
      const loginNotice = this.ServerInfo?.loginNotice;

      if (!tokenResult && loginNotice) {
        this.ShowError(loginNotice);
      }

      return;
    }

    switch (this.options.type) {
      case "logoff":
        await this.PerformLogoff(this.options.userDaemon!);
        return;
      case "shutdown":
        await this.PerformShutdown(this.options.userDaemon);
        return;
      case "restart":
        await this.PerformRestart(this.options.userDaemon);
        return;

      default:
        throw new Error(`NewLoginAppRuntime.render: invalid login type '${this.options.type}'`);
    }
  }

  //#endregion
  //#region PERSISTENCE

  SaveUserPersistence(info: UserInfo) {
    this.Log(`SaveUserPersistence: ${info._id}`);

    this.Persistence.update((v) => {
      const userConnector = Server.GetConn<IUserConnector>("UserConnector", "");
      const persistence: LoginPersistenceUser = {
        displayName: info.preferences?.account?.displayName ?? info.username,
        username: info.username,
        userId: info._id,
        profilePictureUrl: userConnector.PictureUrl(info._id),
        wallpaperUrl: userConnector.LoginBgUrl(info._id),
        administrator: info.admin,
      };

      const index = v.users.findIndex((u) => u.userId === info._id);
      if (index < 0) v.users.push(persistence);
      else v.users[index] = persistence;

      v.lastUserId = info._id;

      return v;
    });
  }

  SetLastUsed(userId: string) {
    this.Log(`SetLastUsed: ${userId}`);
    this.Persistence.update((v) => {
      v.lastUserId = userId;

      return v;
    });
  }

  RemoveUser(userId: string) {
    this.Log(`RemoveUser: ${userId}`);
    this.Persistence.update((v) => {
      v.users = v.users.filter((user) => user.userId !== userId);

      if (v.lastUserId === userId) {
        v.lastUserId = v.users[0]?.userId ?? "";
      }

      return v;
    });

    this.LoadLoginStateUsingPersistenceFrom(this.Persistence().lastUserId ?? "");
  }

  SelectUser(userId: string) {
    this.Persistence.update((v) => {
      v.lastUserId = userId;
      return v;
    });
    this.LoadLoginStateUsingPersistenceFrom(userId);
  }

  LoadLoginStateUsingPersistenceFrom(userId: string) {
    this.Log(`LoadLoginStateUsingPersistenceFrom: ${userId}`);

    const userPersistence = this.Persistence().users.find((u) => u.userId === userId);
    if (!userPersistence) {
      this.State.set(this.GetDefaultLoginState());
      return;
    }

    this.State.set({
      wallpaperUrl: userPersistence.wallpaperUrl,
      profilePictureUrl: userPersistence.profilePictureUrl,
      displayName: userPersistence.displayName,
      selectedUser: userPersistence,
    });
  }

  //#endregion
  //#region LOGIN LOGIC

  async JumpstartUserDaemon(token: string, userInfo: UserInfo) {
    this.Log(`Staring user daemon for '${userInfo.username}' (v10)`);

    this.ShowLoading(this.WelcomeString);

    const { success, result: userDaemon, errorMessage } = await UserDaemon.Hello(token, userInfo.username, userInfo);

    if (!success) {
      this.ShowError(errorMessage ?? "Unknown error. Please contact support.");
      return;
    }

    const broadcast = (message: string) => {
      if (!userDaemon?.preferences()?.enableVerboseLogin || !message) return;
      this.ShowLoading(message);
    };

    this.ShowLoading("Saving token");
    this.SaveToken(userDaemon!);

    const result = await userDaemon?.startUserDaemon(NewLoginUserDaemonStartOptions(this), broadcast.bind(this));

    this.SaveUserPersistence(userDaemon?.userInfo!);

    if (!result?.success) {
      this.ShowError(
        result?.errorMessage ?? "Unknown failure while attempting to initialize the User Daemon. Please contact support."
      );
    }
  }

  async PerformLogin(identity: string, password: string): Promise<void> {
    this.Log(`Trying login of '${identity}' using login v10`);

    this.ShowLoading(this.WelcomeString);

    const tokenResult = await LoginUser(identity, password);

    if (!tokenResult.success) {
      await this.ShowErrorAndWait(tokenResult.errorMessage ?? "The credentials you entered are incorrect.");

      return;
    }

    const userInfoResult = await this.GetUserInfo(tokenResult.result!);
    if (!userInfoResult.success) {
      this.ResetCookies();
      this.ShowErrorAndWait(userInfoResult.errorMessage ?? "Session token is invalid.");

      return;
    }

    const userInfo = userInfoResult!.result;
    this.ShowLoading(`Hi, ${userInfo!.preferences?.account?.displayName ?? userInfo!.username}!`);

    await this.JumpstartUserDaemon(tokenResult.result!, userInfo!);
  }

  private async GetUserInfo(token: string): Promise<ICommandResult<UserInfo>> {
    this.Log(`GetUserInfo`);

    return await GetConnector<IUserConnector>("UserConnector", token).Self();
  }

  public CreateUser(): void {
    State?.loadState("initialSetup");
  }

  public async ForgotPassword(): Promise<void> {
    await new Promise<void>(async (resolve) => {
      const proc = await Stack.spawn<IPswdResetWizardRuntime>(
        PswdResetWizardApp.assets.runtime as Constructs<IPswdResetWizardRuntime>,
        undefined,
        "",
        this.pid,
        {
          data: { ...PswdResetWizardApp, overlay: true },
          id: PswdResetWizardApp.id,
        }
      );

      if (!proc) {
        // todo
        resolve();
        return;
      }

      const unsub = proc.Finished.subscribe((v) => {
        if (!v) return;

        resolve();
        unsub?.();
      });
    });
  }

  //#endregion
  //#region 2FA

  public async AskFor2FA(userId?: string): Promise<boolean> {
    this.Log(`AskFor2FA`);

    const returnId = UUID();

    return new Promise<boolean>(async (r) => {
      SysDispatch.subscribe("totp-unlock-success", ([id]) => {
        if (id === returnId) r(true);
      });

      SysDispatch.subscribe("totp-unlock-cancel", ([id]) => {
        if (id === returnId) r(false);
      });

      await Stack.spawn(
        TotpAuthGuiApp.assets.runtime,
        undefined,
        userId,
        this.pid,
        { data: { ...TotpAuthGuiApp, overlay: true }, id: "TotpAuthGuiApp" },
        returnId
      );
    });
  }

  //#endregion
  //#region POWER

  private async PerformLogoff(userDaemon: IUserDaemon) {
    this.Log(`Logging off user '${userDaemon.username}'`);

    this.ShowLoading(`Goodbye, ${userDaemon.preferences().account.displayName ?? userDaemon.username}!`);

    const verbose = userDaemon.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.ShowLoading(message);
    };

    this.LoadLoginStateUsingPersistenceFrom(userDaemon.userInfo._id);

    broadcast("Stopping service host");
    await userDaemon.serviceHost?.spinDown(broadcast.bind(this));

    broadcast("Stopping processes");
    for (const proc of Stack.renderer?.currentState.map((pid) => Stack.getProcess(pid) as IAppProcess) ?? []) {
      if (!proc._disposed && proc.pid !== this.pid) {
        await proc.killSelf();
      }
    }

    broadcast("Notifying activity");
    await userDaemon.activity!.logActivity("logout");
    this.ResetCookies();

    // mandatory timeout because of user daemon <> state handler timing mismatch
    await Sleep(2000);

    broadcast("Stopping user contexts");
    await userDaemon.stopUserContexts();

    broadcast("Discontinuing token");
    await userDaemon.account!.discontinueToken();

    broadcast("Stopping User Daemon");
    await userDaemon.killSelf();

    this.NoStatus();
    State?.getStateLoaders()?.main?.removeAttribute("style");
  }

  public async PerformShutdown(userDaemon?: IUserDaemon) {
    this.Log(`Handling shutdown`);

    this.ShowLoading("Shutting down...");

    const verbose = userDaemon?.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.ShowLoading(message);
    };

    if (userDaemon) {
      this.SaveUserPersistence(userDaemon.userInfo);
      this.LoadLoginStateUsingPersistenceFrom(userDaemon.userInfo._id);

      broadcast("Stopping Service Host");
      await userDaemon.serviceHost?.spinDown(broadcast);

      broadcast("Stopping User Contexts");
      await userDaemon?.stopUserContexts();
    }

    // mandatory timeout because of user daemon <> state handler timing mismatch
    await Sleep(2000);

    if (userDaemon) {
      broadcast("Stopping User Daemon");
      await userDaemon.killSelf();
    }

    State?.loadState("turnedOff");
  }

  public async PerformRestart(userDaemon?: IUserDaemon) {
    this.Log(`Handling restart`);

    this.ShowLoading("Restarting...");

    const verbose = userDaemon?.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.ShowLoading(message);
    };

    if (userDaemon) {
      this.SaveUserPersistence(userDaemon.userInfo);
      this.LoadLoginStateUsingPersistenceFrom(userDaemon.userInfo._id);

      broadcast("Stopping Service Host");
      await userDaemon.serviceHost?.spinDown(broadcast);

      broadcast("Stopping User Contexts");
      await userDaemon?.stopUserContexts();
    }

    await Sleep(2000);

    if (userDaemon) {
      broadcast("Stopping User Daemon");
      await userDaemon.killSelf();
    }

    location.reload();
  }

  //#endregion
  //#region COOKIES

  private SaveToken(userDaemon: IUserDaemon) {
    const token = userDaemon.token;
    const username = userDaemon.username;

    this.Log(`Saving token of '${userDaemon.username}' to cookies`);

    const cookieOptions: Cookies.CookieAttributes = {
      path: "/",
      secure: false,
      expires: 30,
      domain: location.hostname,
    };

    Cookies.set("arcToken", token, cookieOptions);
    Cookies.set("arcUsername", username, cookieOptions);
  }

  private async LoadToken() {
    this.Log("Loading token from cookies");

    const token = Cookies.get("arcToken");
    if (!token) return false;

    const userInfoResult = await this.GetUserInfo(token);
    if (!userInfoResult.success) {
      this.ResetCookies();

      return false;
    }

    this.LoadLoginStateUsingPersistenceFrom(userInfoResult.result!._id);
    await this.JumpstartUserDaemon(token, userInfoResult.result!);

    return true;
  }

  public ResetCookies() {
    this.Log(`Resetting stored cookie state`);

    Cookies.remove("arcToken");
    Cookies.remove("arcUsername");
  }

  //#region UTILS

  private GetDefaultLoginState(): LoginState {
    const wallpaperUrl = Server.serverInfo?.loginWallpaper
      ? `${Server.url}/loginbg${authcode()}`
      : Wallpapers[this.DEFAULT_WALLPAPER_ID].url;

    const profilePictureUrl = ProfilePictures.def;

    return {
      displayName: "",
      wallpaperUrl,
      profilePictureUrl,
    };
  }

  public DismissError(): void {
    this.Log("DismissError");

    if (this.Status().variant !== LoginStatusVariant.Error) return;

    this.Status.update((v) => {
      v.variant = LoginStatusVariant.None;
      return v;
    });

    this.onErrorDismissed?.();
    this.onErrorDismissed = undefined;
  }

  public ShowError(message: string) {
    this.Log(`ShowError: ${message}`);
    if (this.Status().variant === LoginStatusVariant.Error) return;

    this.Status.update((v) => {
      v.variant = LoginStatusVariant.Error;
      v.content = message;

      return v;
    });
  }

  public async ShowErrorAndWait(message: string): Promise<void> {
    this.Log(`ShowErrorAndWait: ${message}`);
    return new Promise<void>((resolve) => {
      this.onErrorDismissed = () => resolve();
      this.ShowError(message);
    });
  }

  public ShowLoading(message: string) {
    this.Log(`ShowLoading: ${message}`);
    this.Status.update((v) => {
      v.variant = LoginStatusVariant.Loading;
      v.content = message;
      return v;
    });
  }

  private NoStatus() {
    this.Log(`NoStatus`);
    this.Status.set({
      variant: LoginStatusVariant.None,
      content: "",
    });
  }

  //#endregion
}
