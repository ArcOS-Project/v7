import { FirstRunApp } from "$apps/components/firstrun/FirstRun";
import { FirstRunRuntime } from "$apps/components/firstrun/runtime";
import { TotpAuthGuiApp } from "$apps/components/totpauthgui/TotpAuthGui";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IServerManager } from "$interfaces/modules/IServerManager";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
import type { ILoginAppRuntime } from "$interfaces/runtimes/ILoginAppRuntime";
import { AppProcess } from "$ts/apps/process";
import { UserDaemon } from "$ts/daemon";
import { Env, GetConnector, getKMod, SoundBus, Stack, State, SysDispatch } from "$ts/env";
import { ProfilePictures } from "$ts/images/pfp";
import { Sleep } from "$ts/sleep";
import { LoginUser } from "$ts/user/auth";
import { Wallpapers } from "$ts/user/wallpaper/store";
import { authcode } from "$ts/util";
import { tryJsonParse } from "$ts/util/json";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ServerInfo } from "$types/server";
import type { UserInfo } from "$types/user";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import { LoginUserDaemonStartOptions } from "./store";
import type { LoginAppProps, PersistenceInfo } from "./types";

export class LoginAppRuntime extends AppProcess implements ILoginAppRuntime {
  public DEFAULT_WALLPAPER = Store<string>("");
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);
  public profileName = Store<string>("");
  public loginBackground = Store<string>(this.DEFAULT_WALLPAPER());
  public hideProfileImage = Store<boolean>(false);
  public persistence = Store<PersistenceInfo | undefined>();
  public serverInfo = Store<ServerInfo>();
  public server: IServerManager;
  public safeMode = false;
  public loginProps?: LoginAppProps;
  private type = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, props?: LoginAppProps) {
    super(pid, parentPid, app);

    const server = getKMod<IServerManager>("server");

    this.server = server;
    this.serverInfo.set(server.serverInfo!);
    this.safeMode = !!(props?.safeMode || Env.get("safemode"));

    if (this.safeMode) Env.set("safemode", true);

    this.updateServerStuff();

    this.errorMessage.subscribe((v) => {
      if (!v) {
        this.loadPersistence();
      }
    });

    this.loginProps = props;

    this.setSource(__SOURCE__);
  }

  async start() {
    Env.set("loginapp_pid", this.pid);
  }

  async stop() {
    Env.delete("loginapp_pid");
  }

  async render() {
    this.getBody().classList.add("theme-dark");

    if (this.serverInfo().freshBackend) {
      await State?.loadState("initialSetup");
      return false;
    }

    if (this.loginProps?.type) {
      State?.getStateLoaders()?.main?.removeAttribute("style");
      // this.hideProfileImage.set(true);

      if (!this.loginProps.userDaemon) throw new Error(`LoginAppRuntimeConstructor: Irregular login type without daemon`);

      SoundBus.playSound("arcos.system.logoff");
      await this.loginProps.userDaemon?.renderer?.setAppRendererClasses(this.loginProps.userDaemon.preferences());

      switch (this.loginProps.type) {
        case "logoff":
          await this.logoff(this.loginProps.userDaemon);
          break;
        case "shutdown":
          await this.shutdown(this.loginProps.userDaemon);
          break;
        case "restart":
          await this.restart(this.loginProps.userDaemon);
          break;
        default:
          throw new Error(`LoginAppRuntimeConstructor: invalid login type '${this.loginProps.type}'`);
      }
    } else {
      State?.getStateLoaders()?.main?.removeAttribute("style");
    }

    if (!this.type) {
      await this.loadPersistence();

      const tokenResult = await this.loadToken();

      if (!tokenResult && this.serverInfo().loginNotice) {
        this.errorMessage.set(this.serverInfo().loginNotice);
      }
    }
  }

  getWelcomeString(): string {
    const hour = dayjs().hour();

    if (hour < 6) return "Hi, go to sleep";
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  async setUserDisplayStuff(userDaemon: IUserDaemon, applyBackground = true) {
    const userConnector = GetConnector<IUserConnector>("UserConnector");

    this.profileName.set(userDaemon.preferences().account.displayName || userDaemon.username);
    this.profileImage.set(userConnector.PictureUrl(userDaemon.userInfo._id));

    if (!this.safeMode && applyBackground) {
      this.loginBackground.set(userConnector.LoginBgUrl(userDaemon.userInfo._id));
    }
  }

  //#endregion
  //#region DAEMON

  async startDaemon(token: string, username: string, info?: UserInfo) {
    this.Log(`Starting user daemon for '${username}'`);
    this.loadingStatus.set(this.getWelcomeString());

    const { success, result: userDaemon, errorMessage } = await UserDaemon.Hello(token, username, info);

    if (!success) {
      this.loadingStatus.set("");
      this.errorMessage.set(errorMessage ?? "Unknown error");

      return;
    }

    const broadcast = (message: string) => {
      if (!userDaemon?.preferences()?.enableVerboseLogin || !message) return;
      this.loadingStatus.set(message);
    };

    this.loadingStatus.set("Saving token");
    this.saveToken(userDaemon!);

    const result = await userDaemon!.startUserDaemon(LoginUserDaemonStartOptions(this), broadcast);

    if (!result.success) {
      this.loadingStatus.set("");
      this.errorMessage.set(result.errorMessage ?? "Unknown error");
    }
  }

  //#endregion
  //#region POWER

  async logoff(userDaemon: IUserDaemon) {
    this.Log(`Logging off user '${userDaemon.username}'`);

    this.type = "logoff";
    this.loadingStatus.set(`Goodbye, ${userDaemon.username}!`);
    this.errorMessage.set("");

    const verbose = userDaemon.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.loadingStatus.set(message);
    };

    broadcast("Stopping Service Host");
    await userDaemon.serviceHost?.spinDown(broadcast);

    broadcast("Stopping processes");
    for (const proc of Stack.renderer?.currentState.map((pid) => Stack.getProcess(pid) as IAppProcess) ?? []) {
      if (!proc._disposed && proc.pid !== this.pid) {
        await proc.killSelf();
      }
    }

    broadcast("Reading user preferences");
    this.profileName.set(userDaemon.preferences().account.displayName || userDaemon.username);
    this.loginBackground.set((await userDaemon.wallpaper!.getWallpaper(userDaemon.preferences().account.loginBackground)).url);

    broadcast("Notifying activity");
    await Sleep(2000);
    await userDaemon.activity!.logActivity("logout");

    this.resetCookies();
    broadcast("Stopping User Contexts");
    await userDaemon.stopUserContexts();
    broadcast("Discontinuing token");
    await userDaemon.account!.discontinueToken();
    broadcast("Stopping User Daemon");
    await userDaemon.killSelf();

    setTimeout(async () => {
      this.loadingStatus.set("");
      this.hideProfileImage.set(false);
      State?.getStateLoaders()?.main?.removeAttribute("style");

      await this.loadPersistence();
    }, 600);
  }

  async shutdown(userDaemon?: IUserDaemon) {
    this.Log(`Handling shutdown`);
    this.type = "shutdown";

    this.loadingStatus.set(`Shutting down...`);
    this.errorMessage.set("");

    const verbose = userDaemon?.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.loadingStatus.set(message);
    };

    if (userDaemon) {
      broadcast("Stopping Service Host");
      await userDaemon.serviceHost?.spinDown(broadcast);

      broadcast("Stopping User Contexts");
      await userDaemon?.stopUserContexts();
      await this.setUserDisplayStuff(userDaemon);
    }

    await Sleep(2000);

    if (userDaemon) {
      broadcast("Stopping User Daemon");
      await userDaemon.killSelf();
    }
    State?.loadState("turnedOff");
  }

  async restart(userDaemon?: IUserDaemon) {
    this.Log(`Handling restart`);
    this.type = "restart";

    const verbose = userDaemon?.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.loadingStatus.set(message);
      this.Log(message);
    };

    this.loadingStatus.set(`Restarting...`);

    if (userDaemon) {
      broadcast("Stopping Service Host");
      await userDaemon.serviceHost?.spinDown(broadcast);

      broadcast("Stopping User Contexts");
      await userDaemon?.stopUserContexts();
      await this.setUserDisplayStuff(userDaemon);
    }

    this.errorMessage.set("");

    await Sleep(2000);

    if (userDaemon) {
      broadcast("Stopping User Daemon");
      await userDaemon.killSelf();
    }
    location.reload();
  }

  //#endregion
  //#region CREDENTIALS

  async proceed(username: string, password: string) {
    this.Log(`Trying login of '${username}'`);

    this.loadingStatus.set(`Hi, ${username}!`);

    const tokenResult = await LoginUser(username, password);

    if (!tokenResult.success) {
      this.loadingStatus.set("");
      this.errorMessage.set(tokenResult.errorMessage ?? "Username or password incorrect");

      this.updateServerStuff();

      return;
    }

    await this.startDaemon(tokenResult.result!, username);
  }

  private saveToken(userDaemon: IUserDaemon) {
    const token = userDaemon.token;
    const username = userDaemon.username;

    this.Log(`Saving token of '${userDaemon.username}' to cookies`);

    const cookieOptions = {
      expires: 14, // lmao
      domain: import.meta.env.DEV ? "localhost" : location.hostname,
    };

    Cookies.set("arcToken", token, cookieOptions);
    Cookies.set("arcUsername", username, cookieOptions);
  }

  private async loadToken() {
    this.Log(`Loading token from cookies`);

    const token = Cookies.get("arcToken");
    const username = Cookies.get("arcUsername");

    if (!token || !username) return false;

    const userInfo = await this.validateUserToken(token);

    if (!userInfo) {
      this.resetCookies();

      return false;
    }

    this.loadingStatus.set(`Hi, ${username}!`);
    this.errorMessage.set("");
    this.hideProfileImage.set(false);

    await this.startDaemon(token, username, userInfo);

    return true;
  }

  private async validateUserToken(token: string) {
    this.Log(`Validating user token for token login`);

    const infoResult = await GetConnector<IUserConnector>("UserConnector", token).Self();
    if (!infoResult.success) return false;

    return infoResult.result;
  }

  resetCookies() {
    this.Log(`Resetting stored cookie state`);

    Cookies.remove("arcToken");
    Cookies.remove("arcUsername");
  }

  public async askForTotp(userId: string | undefined) {
    const returnId = UUID();

    return new Promise(async (r) => {
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

  async firstRun(daemon: IUserDaemon) {
    const process = await Stack.spawn<IFirstRunRuntime>(
      FirstRunRuntime,
      undefined,
      daemon.userInfo?._id,
      this.pid,
      { data: { ...FirstRunApp, overlay: true }, id: "FirstRun" },
      daemon
    );

    if (!process) return;

    Env.set("shell_pid", this.pid);

    await new Promise<void>((r) => process.done.subscribe((v) => v && r()));

    Env.delete("shell_pid");
  }

  createUser() {
    State?.loadState("initialSetup");
  }

  //#endregion

  //#region PERSISTENCE

  async loadPersistence() {
    const persistence = tryJsonParse<PersistenceInfo>(localStorage.getItem("arcLoginPersistence"));

    if (!persistence) return;

    this.updateServerStuff();

    this.persistence.set(persistence);
    this.profileImage.set(persistence.profilePicture);
    this.profileName.set(persistence.username);
    if (persistence.loginWallpaper) this.loginBackground.set(persistence.loginWallpaper);
  }

  savePersistence(username: string, profilePicture: string, loginWallpaper?: string) {
    localStorage.setItem(
      "arcLoginPersistence",
      JSON.stringify({ username, profilePicture, loginWallpaper, serverUrl: this.server.url })
    );
  }

  async deletePersistence() {
    this.updateServerStuff();
    localStorage.removeItem("arcLoginPersistence");
    this.persistence.set(undefined);
    this.profileImage.set(ProfilePictures.def);
    this.loginBackground.set(this.DEFAULT_WALLPAPER());
    this.profileName.set("");
  }

  updateServerStuff() {
    if (this.server.serverInfo) this.serverInfo.set(this.server.serverInfo);
    this.DEFAULT_WALLPAPER.set(
      this.serverInfo()?.loginWallpaper ? `${this.server.url}/loginbg${authcode()}` : Wallpapers.img18.url
    );
    this.loginBackground.set(this.DEFAULT_WALLPAPER());
  }

  //#endregion
}
