import { FirstRunApp } from "$apps/components/firstrun/FirstRun";
import { FirstRunRuntime } from "$apps/components/firstrun/runtime";
import { TotpAuthGuiApp } from "$apps/components/totpauthgui/TotpAuthGui";
import { TotpAuthGuiRuntime } from "$apps/components/totpauthgui/runtime";
import { Env, getKMod, SoundBus, Stack, State, SysDispatch } from "$ts/env";
import { ProfilePictures } from "$ts/images/pfp";
import { tryJsonParse } from "$ts/json";
import { ProtocolServiceProcess } from "$ts/proto";
import { Backend } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { Daemon, UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { authcode } from "$ts/util";
import { UUID } from "$ts/uuid";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import type { ServerManagerType } from "$types/kernel";
import type { ServerInfo } from "$types/server";
import type { UserInfo } from "$types/user";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import { AppProcess } from "../../../ts/apps/process";
import type { AppProcessData } from "../../../types/app";
import type { LoginAppProps, PersistenceInfo } from "./types";
import { MigrationService } from "../../../migrations";

export class LoginAppRuntime extends AppProcess {
  public DEFAULT_WALLPAPER = Store<string>("");
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);
  public profileName = Store<string>("");
  public loginBackground = Store<string>(this.DEFAULT_WALLPAPER());
  public hideProfileImage = Store<boolean>(false);
  public persistence = Store<PersistenceInfo | undefined>();
  public serverInfo = Store<ServerInfo>();
  public server: ServerManagerType;
  public unexpectedInvocation = false;
  public safeMode = false;
  private type = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, props?: LoginAppProps) {
    super(pid, parentPid, app);

    const server = getKMod<ServerManagerType>("server");

    this.unexpectedInvocation = State?.currentState !== "boot" && State?.currentState !== "initialSetup" && !props?.type;
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

    if (this.unexpectedInvocation) {
      this.app.data.core = false;
      this.app.data.position = { centered: true };
      this.app.data.minSize = { w: 700, h: 500 };
      this.app.data.maxSize = { w: NaN, h: NaN };
      this.app.data.size = { w: 700, h: 500 };
      this.app.data.state = {
        maximized: false,
        minimized: false,
        resizable: true,
        headless: false,
        fullscreen: false,
      };
      this.app.data.controls = {
        maximize: true,
        minimize: true,
        close: true,
      };
    } else if (props?.type) {
      this.hideProfileImage.set(true);

      if (!props.userDaemon) throw new Error(`LoginAppRuntimeConstructor: Irregular login type without daemon`);

      SoundBus.playSound("arcos.system.logoff");
      props.userDaemon?.renderer?.setAppRendererClasses(props.userDaemon.preferences());

      switch (props.type) {
        case "logoff":
          this.logoff(props.userDaemon);
          break;
        case "shutdown":
          this.shutdown(props.userDaemon);
          break;
        case "restart":
          this.restart(props.userDaemon);
          break;
        default:
          throw new Error(`LoginAppRuntimeConstructor: invalid login type '${props.type}'`);
      }
    } else {
      State?.getStateLoaders()?.main?.removeAttribute("style");
    }

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
      State?.loadState("initialSetup");
      return false;
    }

    if (!this.type && !this.unexpectedInvocation) {
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

  //#endregion
  //#region DAEMON

  async startDaemon(token: string, username: string, info?: UserInfo) {
    this.Log(`Starting user daemon for '${username}'`);

    this.loadingStatus.set(this.getWelcomeString());

    const userDaemon = await Stack.spawn<UserDaemon>(UserDaemon, undefined, info?._id || "SYSTEM", 1, token, username, info);

    if (!userDaemon) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to start user daemon");

      return;
    }

    this.loadingStatus.set("Saving token");

    this.saveToken(userDaemon);

    this.loadingStatus.set("Loading your settings");

    const userInfo = await userDaemon.account!.getUserInfo();

    if (!userInfo) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to request user info");

      return;
    }

    this.profileImage.set(`${this.server.url}/user/pfp/${userInfo._id}${authcode()}`);

    if (userInfo.hasTotp && userInfo.restricted) {
      this.loadingStatus.set("Requesting 2FA");
      const unlocked = await this.askForTotp(token, userDaemon.userInfo?._id);

      if (!unlocked) {
        await userDaemon.account!.discontinueToken();
        await userDaemon.killSelf();
        this.resetCookies();
        this.loadingStatus.set("");
        this.errorMessage.set("You didn't enter a valid 2FA code!");
        return;
      }
    }

    this.loadingStatus.set(this.getWelcomeString());

    const verbose = userDaemon.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.loadingStatus.set(message);
    };

    await this.loadPersistence();

    this.savePersistence(username, this.profileImage());

    broadcast("Starting filesystem");
    await userDaemon.init!.startFilesystemSupplier();

    broadcast("Starting synchronization");
    await userDaemon.init!.startPreferencesSync();

    broadcast("Reading profile customization");

    this.profileName.set(userDaemon.preferences().account.displayName || username);
    if (!this.safeMode) {
      this.loginBackground.set((await userDaemon.wallpaper!.getWallpaper(userDaemon.preferences().account.loginBackground)).url);

      this.savePersistence(username, this.profileImage(), this.loginBackground());
    }

    broadcast("Notifying login activity");
    await userDaemon.activity!.logActivity("login");

    broadcast("Starting service host");
    await userDaemon.init?.startServiceHost(async (serviceStep) => {
      switch (serviceStep.id) {
        case "AppStorage":
          broadcast("Loading apps");
          await userDaemon.appreg!.initAppStorage(userDaemon.appStorage()!, (app) => broadcast(`Loaded ${app.metadata.name}`));
          break;
        default:
          broadcast(`Started ${serviceStep.name}`);
          break;
      }
    });

    broadcast("Connecting global dispatch");
    await userDaemon.activateGlobalDispatch();

    broadcast("Welcome to ArcOS");
    if (!userDaemon.preferences().firstRunDone && !userDaemon.preferences().appPreferences.arcShell) {
      await this.firstRun(userDaemon);
    }

    broadcast("Starting drive notifier watcher");
    userDaemon.init!.startDriveNotifierWatcher();

    broadcast("Starting permission manager");
    await userDaemon.init!.startPermissionHandler();

    broadcast("Starting share management");
    await userDaemon.init!.startShareManager();

    broadcast("Running migrations");
    await userDaemon.serviceHost?.getService<MigrationService>("MigrationSvc")?.runMigrations(broadcast);

    const storage = userDaemon.appStorage();

    if (userDaemon.userInfo.admin) {
      broadcast("Activating admin bootstrapper");
      await userDaemon.activateAdminBootstrapper();
    } else {
      await storage?.refresh();
    }

    broadcast("Starting status refresh");
    await userDaemon.init!.startSystemStatusRefresh();

    broadcast("Let's go!");
    await State?.loadState("desktop", { userDaemon });
    SoundBus.playSound("arcos.system.logon");
    userDaemon.renderer!.setAppRendererClasses(userDaemon.preferences());
    userDaemon.checks!.checkNightly();

    broadcast("Starting Workspaces");
    await userDaemon.init!.startVirtualDesktops();

    broadcast("Running autorun");
    await userDaemon.apps!.spawnAutoload();

    await this.appStore()?.refresh();

    await userDaemon.checks!.checkForUpdates();
    userDaemon.serviceHost?.getService<ProtocolServiceProcess>("ProtoService")?.parseProtoParam();
    await userDaemon.checks!.checkForMissedMessages();
    await userDaemon.migrations!.updateAppShortcutsDir();
    await Backend.post("/fs/index", {}, { headers: { Authorization: `Bearer ${userDaemon.token}` } });

    userDaemon._blockLeaveInvocations = false;
  }

  //#endregion
  //#region POWER

  async logoff(daemon: UserDaemon) {
    this.Log(`Logging off user '${daemon.username}'`);

    // this.hideProfileImage.set(true);
    this.type = "logoff";

    this.loadingStatus.set(`Goodbye, ${daemon.username}!`);
    this.errorMessage.set("");

    for (const [_, proc] of [...Stack.store()]) {
      if (proc && !proc._disposed && proc instanceof AppProcess && proc.pid !== this.pid) {
        await proc.killSelf();
      }
    }

    this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    this.loginBackground.set((await daemon.wallpaper!.getWallpaper(daemon.preferences().account.loginBackground)).url);

    await Sleep(2000);
    await daemon.activity!.logActivity("logout");

    this.resetCookies();
    await daemon.account!.discontinueToken();
    await daemon.stopUserContexts();
    await daemon.killSelf();

    setTimeout(async () => {
      this.loadingStatus.set("");
      this.hideProfileImage.set(false);
      State?.getStateLoaders()?.main?.removeAttribute("style");

      await this.loadPersistence();
    }, 600);
  }

  async shutdown(daemon?: UserDaemon) {
    this.Log(`Handling shutdown`);

    this.type = "shutdown";

    if (daemon) {
      this.profileImage.set(`${this.server.url}/user/pfp/${daemon.userInfo._id}${authcode()}`);
      this.loginBackground.set((await daemon.wallpaper!.getWallpaper(daemon.preferences().account.loginBackground)).url);

      this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    }

    this.loadingStatus.set(`Shutting down...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    State?.loadState("turnedOff");
  }

  async restart(daemon?: UserDaemon) {
    this.Log(`Handling restart`);

    this.type = "restart";

    if (daemon) {
      this.profileImage.set(`${this.server.url}/user/pfp/${daemon.userInfo._id}${authcode()}`);
      this.loginBackground.set(
        (await daemon.wallpaper?.getWallpaper(daemon.preferences().account.loginBackground))?.url || this.DEFAULT_WALLPAPER()
      );

      this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    }

    this.loadingStatus.set(`Restarting...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    location.reload();
  }

  //#endregion
  //#region CREDENTIALS

  async proceed(username: string, password: string, serverName?: string) {
    this.Log(`Trying login of '${username}'`);

    this.loadingStatus.set(`Hi, ${username}!`);

    if (serverName) {
      this.loadingStatus.set(`Connecting to ${serverName}`);

      try {
        await this.server.set(`https://${serverName}`);

        if (this.server.serverInfo?.rejectTargetedAuthorization) {
          this.loadingStatus.set("");
          this.errorMessage.set(
            `Targeted server '${serverName}' does not allow connection via targeted authorization. Please contact your server administrator if you believe this to be an error.`
          );
          await this.server.reset();
          this.updateServerStuff();

          return;
        }

        this.updateServerStuff();
      } catch {
        this.loadingStatus.set("");
        this.errorMessage.set(
          `Targeted server '${serverName}' could not be reached. Please check the server name and try again. Also note that ArcOS only connects to targeted servers over HTTPS.`
        );

        return;
      }
    }

    const token = await LoginUser(username, password);

    if (!token) {
      this.loadingStatus.set("");
      this.errorMessage.set("Username or password incorrect.");

      await this.server.reset();
      this.updateServerStuff();

      return;
    }

    await this.startDaemon(token, username);
  }

  private saveToken(daemon: UserDaemon) {
    const token = daemon.token;
    const username = daemon.username;

    this.Log(`Saving token of '${daemon.username}' to cookies`);

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

    try {
      const response = await Backend.get(`/user/self`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.status === 200 ? (response.data as UserInfo) : false;
    } catch {
      return false;
    }
  }

  resetCookies() {
    this.Log(`Resetting stored cookie state`);

    Cookies.remove("arcToken");
    Cookies.remove("arcUsername");
  }

  private async askForTotp(token: string, userId: string | undefined) {
    const returnId = UUID();

    return new Promise(async (r) => {
      SysDispatch.subscribe("totp-unlock-success", ([id]) => {
        if (id === returnId) r(true);
      });

      SysDispatch.subscribe("totp-unlock-cancel", ([id]) => {
        if (id === returnId) r(false);
      });

      await Stack.spawn(
        TotpAuthGuiRuntime,
        undefined,
        userId,
        this.pid,
        { data: { ...TotpAuthGuiApp, overlay: true }, id: "TotpAuthGuiApp" },
        returnId
      );
    });
  }

  async firstRun(daemon: UserDaemon) {
    const process = await Stack.spawn<FirstRunRuntime>(
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

    if (persistence.serverUrl) {
      await this.server.set(persistence.serverUrl);
      this.updateServerStuff();
    }

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
    await this.server.reset();
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
