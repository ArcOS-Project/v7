import { FirstRunApp } from "$apps/components/firstrun/FirstRun";
import { FirstRunRuntime } from "$apps/components/firstrun/runtime";
import { TotpAuthGuiApp } from "$apps/components/totpauthgui/TotpAuthGui";
import { TotpAuthGuiRuntime } from "$apps/components/totpauthgui/runtime";
import { getKMod, KernelStack } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import { ProfilePictures } from "$ts/images/pfp";
import { tryJsonParse } from "$ts/json";
import { ProtocolServiceProcess } from "$ts/proto";
import { Backend } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
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

export class LoginAppRuntime extends AppProcess {
  public DEFAULT_WALLPAPER = Store<string>("");
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);
  public profileName = Store<string>("");
  public loginBackground = Store<string>(this.DEFAULT_WALLPAPER());
  public hideProfileImage = Store<boolean>(false);
  public persistence = Store<PersistenceInfo | undefined>();
  public serverInfo: ServerInfo | undefined;
  public unexpectedInvocation = false;
  public safeMode = false;
  private type = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, props?: LoginAppProps) {
    super(pid, parentPid, app);

    const server = getKMod<ServerManagerType>("server");

    this.DEFAULT_WALLPAPER.set(server.serverInfo?.loginWallpaper ? `${server.url}/loginbg${authcode()}` : Wallpapers.img18.url);
    this.errorMessage.subscribe((v) => {
      if (!v) {
        this.profileImage.set(ProfilePictures.def);
        this.loadPersistence();
      }
    });

    this.unexpectedInvocation =
      KernelStateHandler()?.currentState !== "boot" && KernelStateHandler()?.currentState !== "initialSetup" && !props?.type;
    this.serverInfo = server.serverInfo;
    this.safeMode = !!(props?.safeMode || this.env.get("safemode"));
    if (this.safeMode) this.env.set("safemode", true);
    this.loginBackground.set(this.DEFAULT_WALLPAPER());

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

      this.soundBus.playSound("arcos.system.logoff");
      props.userDaemon?.setAppRendererClasses(props.userDaemon.preferences());

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
      KernelStateHandler()?.getStateLoaders()?.main?.removeAttribute("style");
    }

    this.setSource(__SOURCE__);
  }

  async start() {
    this.env.set("loginapp_pid", this.pid);
  }

  async stop() {
    this.env.delete("loginapp_pid");
  }

  async render() {
    this.getBody().classList.add("theme-dark");

    if (this.serverInfo?.freshBackend) {
      KernelStateHandler()?.loadState("initialSetup");
      return false;
    }

    if (!this.type && !this.unexpectedInvocation) {
      const tokenResult = await this.loadToken();

      if (!tokenResult && this.serverInfo?.loginNotice) {
        this.errorMessage.set(this.serverInfo.loginNotice);
      }
    }
  }

  getWelcomeString(): string {
    const hour = dayjs().hour();

    if (hour < 6) return "%apps.loginApp.welcomeString.night%";
    if (hour < 12) return "%apps.loginApp.welcomeString.morning%";
    if (hour < 18) return "%apps.loginApp.welcomeString.afternoon%";
    return "%apps.loginApp.welcomeString.evening%";
  }

  //#endregion
  //#region DAEMON

  async startDaemon(token: string, username: string, info?: UserInfo) {
    this.Log(`Starting user daemon for '${username}'`);

    this.loadingStatus.set(this.getWelcomeString());

    const userDaemon = await KernelStack().spawn<UserDaemon>(
      UserDaemon,
      undefined,
      info?._id || "SYSTEM",
      1,
      token,
      username,
      info
    );

    if (!userDaemon) {
      this.loadingStatus.set("");
      this.errorMessage.set("%apps.loginApp.errors.noDaemon%");

      return;
    }

    this.loadingStatus.set("%apps.loginApp.startDaemon.savingToken%");

    this.saveToken(userDaemon);

    this.loadingStatus.set("%apps.loginApp.startDaemon.loadingSettings%");

    const userInfo = await userDaemon.getUserInfo();

    if (!userInfo) {
      this.loadingStatus.set("");
      this.errorMessage.set("%apps.loginApp.errors.noUserInfo%");

      return;
    }

    this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${userInfo._id}${authcode()}`);

    if (userInfo.hasTotp && userInfo.restricted) {
      this.loadingStatus.set("%apps.loginApp.startDaemon.request2fa%");
      const unlocked = await this.askForTotp(token, userDaemon.userInfo?._id);

      if (!unlocked) {
        await userDaemon.discontinueToken();
        await userDaemon.killSelf();
        this.resetCookies();
        this.loadingStatus.set("");
        this.errorMessage.set("%apps.loginApp.errors.totpInvalid%");
        return;
      }
    }

    this.loadingStatus.set(this.getWelcomeString());

    const verbose = userDaemon.preferences().enableVerboseLogin;
    const broadcast = (message: string) => {
      if (!verbose) return;
      this.loadingStatus.set(message);
    };

    this.loadPersistence();

    this.savePersistence(username, this.profileImage());

    broadcast("%apps.loginApp.startDaemon.startingFilesystem%");

    await userDaemon.startFilesystemSupplier();

    broadcast("%apps.loginApp.startDaemon.startingSync%");

    await userDaemon.startPreferencesSync();

    broadcast("%apps.loginApp.startDaemon.profileCustomization%");

    this.profileName.set(userDaemon.preferences().account.displayName || username);
    if (!this.safeMode) {
      this.loginBackground.set((await userDaemon.getWallpaper(userDaemon.preferences().account.loginBackground)).url);

      this.savePersistence(username, this.profileImage(), this.loginBackground());
    }

    broadcast("%apps.loginApp.startDaemon.notifyLoginActivity%");
    await userDaemon.logActivity("login");

    broadcast("%apps.loginApp.startDaemon.startServiceHost.initial%");
    await userDaemon.startServiceHost(async (serviceStep) => {
      if (serviceStep.id === "AppStorage") {
        broadcast("%apps.loginApp.startDaemon.loadingApps.initial%");
        await userDaemon.initAppStorage(userDaemon.appStorage()!, (app) =>
          broadcast(`%apps.loginApp.startDaemon.loadingApps.specific(${app.metadata.name})%`)
        );
      } else {
        broadcast(`%apps.loginApp.startDaemon.startServiceHost.specific(${serviceStep.name})%`);
      }
    });

    broadcast("%apps.loginApp.startDaemon.checkingAssoc%");
    await userDaemon.updateFileAssociations();

    broadcast("%apps.loginApp.startDaemon.globalDispatch%");
    await userDaemon.activateGlobalDispatch();

    broadcast("%apps.loginApp.startDaemon.welcome%");
    if (!userDaemon.preferences().firstRunDone && !userDaemon.preferences().appPreferences.arcShell) {
      await this.firstRun(userDaemon);
    }

    broadcast("%apps.loginApp.startDaemon.driveNotifierWatcher%");
    userDaemon.startDriveNotifierWatcher();

    broadcast("%apps.loginApp.startDaemon.shareManagement%");
    await userDaemon.startShareManager();

    const storage = userDaemon.appStorage();

    if (userDaemon.userInfo.admin) {
      broadcast("%apps.loginApp.startDaemon.adminBootstrapper%");
      await userDaemon.activateAdminBootstrapper();
    } else {
      await storage?.refresh();
    }

    broadcast("%apps.loginApp.startDaemon.statusRefresh%");
    await userDaemon.startSystemStatusRefresh();

    broadcast("%apps.loginApp.startDaemon.letsGo%");
    await KernelStateHandler()?.loadState("desktop", { userDaemon });
    this.soundBus.playSound("arcos.system.logon");
    userDaemon.setAppRendererClasses(userDaemon.preferences());
    userDaemon.checkNightly();

    broadcast("%apps.loginApp.startDaemon.startingWorkspaces%");
    await userDaemon.startVirtualDesktops();

    broadcast("%apps.loginApp.startDaemon.autoload%");
    await userDaemon.spawnAutoload();

    await this.appStore()?.refresh();

    await userDaemon.checkForUpdates();
    userDaemon.serviceHost?.getService<ProtocolServiceProcess>("ProtoService")?.parseProtoParam();
    await userDaemon.checkForMissedMessages();
    await userDaemon.updateAppShortcutsDir();
    await Backend.post("/fs/index", {}, { headers: { Authorization: `Bearer ${userDaemon.token}` } });

    userDaemon._blockLeaveInvocations = false;
  }

  //#endregion
  //#region POWER

  async logoff(daemon: UserDaemon) {
    this.Log(`Logging off user '${daemon.username}'`);

    // this.hideProfileImage.set(true);
    this.type = "logoff";

    this.loadingStatus.set(`%apps.loginApp.exit.logoff% ${daemon.username}!`);
    this.errorMessage.set("");

    for (const [_, proc] of [...KernelStack().store()]) {
      if (proc && !proc._disposed && proc instanceof AppProcess && proc.pid !== this.pid) {
        await proc.killSelf();
      }
    }

    this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${daemon.userInfo._id}${authcode()}`);

    this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    this.loginBackground.set((await daemon.getWallpaper(daemon.preferences().account.loginBackground)).url);

    await Sleep(2000);

    await daemon.logActivity("logout");

    this.resetCookies();
    await daemon.discontinueToken();
    await daemon.killSelf();

    setTimeout(() => {
      this.loadingStatus.set("");
      this.hideProfileImage.set(false);
      this.profileImage.set(ProfilePictures.def);
      this.profileName.set("");
      this.loginBackground.set(this.DEFAULT_WALLPAPER());
      KernelStateHandler()?.getStateLoaders()?.main?.removeAttribute("style");
    }, 600);
  }

  async shutdown(daemon?: UserDaemon) {
    this.Log(`Handling shutdown`);

    this.type = "shutdown";

    if (daemon) {
      this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${daemon.userInfo._id}${authcode()}`);
      this.loginBackground.set((await daemon.getWallpaper(daemon.preferences().account.loginBackground)).url);

      this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    }

    this.loadingStatus.set(`%apps.loginApp.exit.shutdown%`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    KernelStateHandler()?.loadState("turnedOff");
  }

  async restart(daemon?: UserDaemon) {
    this.Log(`Handling restart`);

    this.type = "restart";

    if (daemon) {
      this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${daemon.userInfo._id}${authcode()}`);
      this.loginBackground.set((await daemon.getWallpaper(daemon.preferences().account.loginBackground)).url);

      this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    }

    this.loadingStatus.set(`%apps.loginApp.exit.restart%`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    location.reload();
  }

  //#endregion
  //#region CREDENTIALS

  async proceed(username: string, password: string) {
    this.Log(`Trying login of '${username}'`);

    this.loadingStatus.set(this.getWelcomeString());

    const token = await LoginUser(username, password);

    if (!token) {
      this.loadingStatus.set("");
      this.errorMessage.set("%apps.loginApp.errors.credentialIncorrect%");

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
      this.systemDispatch.subscribe("totp-unlock-success", ([id]) => {
        if (id === returnId) r(true);
      });

      this.systemDispatch.subscribe("totp-unlock-cancel", ([id]) => {
        if (id === returnId) r(false);
      });

      await KernelStack().spawn(
        TotpAuthGuiRuntime,
        undefined,
        userId,
        this.pid,
        { data: { ...TotpAuthGuiApp, overlay: true }, id: "TotpAuthGuiApp" },
        token,
        returnId
      );
    });
  }

  async firstRun(daemon: UserDaemon) {
    const process = await KernelStack().spawn<FirstRunRuntime>(
      FirstRunRuntime,
      undefined,
      daemon.userInfo?._id,
      this.pid,
      { data: { ...FirstRunApp, overlay: true }, id: "FirstRun" },
      daemon
    );

    if (!process) return;

    await new Promise<void>((r) => process.done.subscribe((v) => v && r()));

    // daemon.preferences.update((v) => {
    //   v.firstRunDone = true;
    //   return v;
    // });
  }

  createUser() {
    KernelStateHandler()?.loadState("initialSetup");
  }

  //#endregion

  //#region PERSISTENCE

  loadPersistence() {
    const persistence = tryJsonParse<PersistenceInfo>(localStorage.getItem("arcLoginPersistence"));

    if (!persistence) return;

    this.persistence.set(persistence);
    this.profileImage.set(persistence.profilePicture);
    this.profileName.set(persistence.username);
    if (persistence.loginWallpaper) this.loginBackground.set(persistence.loginWallpaper);
  }

  savePersistence(username: string, profilePicture: string, loginWallpaper?: string) {
    localStorage.setItem("arcLoginPersistence", JSON.stringify({ username, profilePicture, loginWallpaper }));
  }

  deletePersistence() {
    localStorage.removeItem("arcLoginPersistence");
    this.persistence.set(undefined);
    this.profileImage.set(ProfilePictures.def);
    this.loginBackground.set(this.DEFAULT_WALLPAPER());
    this.profileName.set("");
  }

  //#endregion
}
