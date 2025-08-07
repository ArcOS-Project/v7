import { TotpAuthGuiApp } from "$apps/components/totpauthgui/metadata";
import { TotpAuthGuiRuntime } from "$apps/components/totpauthgui/runtime";
import { ProfilePictures } from "$ts/images/pfp";
import { tryJsonParse } from "$ts/json";
import { ProtocolServiceProcess } from "$ts/proto";
import { ServerManager } from "$ts/server";
import { Backend } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { authcode } from "$ts/util";
import { UUID } from "$ts/uuid";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import type { ServerInfo } from "$types/server";
import type { UserInfo } from "$types/user";
import Cookies from "js-cookie";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";
import type { LoginAppProps, PersistenceInfo } from "./types";
import { FirstRunRuntime } from "$apps/components/firstrun/runtime";
import { FirstRunApp } from "$apps/components/firstrun/metadata";

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

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, props?: LoginAppProps) {
    super(handler, pid, parentPid, app);

    const server = this.kernel.getModule<ServerManager>("server");

    this.DEFAULT_WALLPAPER.set(server.serverInfo?.loginWallpaper ? `${server.url}/loginbg${authcode()}` : Wallpapers.img18.url);

    this.errorMessage.subscribe((v) => {
      if (!v) {
        this.profileImage.set(ProfilePictures.def);
        this.loadPersistence();
      }
    });

    this.unexpectedInvocation =
      this.kernel.state?.currentState !== "boot" && this.kernel.state?.currentState !== "initialSetup" && !props?.type;
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

      if (!props.userDaemon) throw new Error(`Irregular login type without a user daemon`);

      this.soundBus.playSound("arcos.system.logoff");

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
          throw new Error(`Invalid login type "${props.type}"`);
      }
    }
  }

  async render() {
    this.getBody().classList.add("theme-dark");

    if (!this.type && !this.unexpectedInvocation) await this.loadToken();

    if (this.serverInfo?.loginNotice) {
      this.errorMessage.set(this.serverInfo.loginNotice);
    }
  }

  async proceed(username: string, password: string) {
    this.Log(`Trying login of '${username}'`);

    this.loadingStatus.set(`Hi, ${username}!`);

    const token = await LoginUser(username, password);

    if (!token) {
      this.loadingStatus.set("");
      this.errorMessage.set("Username or password incorrect.");

      return;
    }

    await this.startDaemon(token, username);
  }

  async startDaemon(token: string, username: string, info?: UserInfo) {
    this.Log(`Starting user daemon for '${username}'`);

    this.loadingStatus.set("Starting daemon");

    const userDaemon = await this.handler.spawn<UserDaemon>(UserDaemon, undefined, this.kernel.initPid, token, username, info);

    if (!userDaemon) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to start user daemon");

      return;
    }

    this.loadingStatus.set("Saving token");

    this.saveToken(userDaemon);

    this.loadingStatus.set("Loading your settings");

    const userInfo = await userDaemon.getUserInfo();

    if (!userInfo) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to request user info");

      return;
    }

    this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${userInfo._id}${authcode()}`);

    this.savePersistence(username, this.profileImage());

    if (userInfo.hasTotp && userInfo.restricted) {
      this.loadingStatus.set("Requesting 2FA");
      const unlocked = await this.askForTotp(token);

      if (!unlocked) {
        await userDaemon.discontinueToken();
        await userDaemon.killSelf();
        this.resetCookies();
        this.loadingStatus.set("");
        this.errorMessage.set("You didn't enter a valid 2FA code!");
        return;
      }
    }

    this.loadingStatus.set("Starting filesystem");

    await userDaemon.startFilesystemSupplier();

    this.loadingStatus.set("Starting synchronization");

    await userDaemon.startPreferencesSync();

    this.loadingStatus.set("Reading profile customization");

    this.profileName.set(userDaemon.preferences().account.displayName || username);
    if (!this.safeMode) {
      this.loginBackground.set((await userDaemon.getWallpaper(userDaemon.preferences().account.loginBackground)).url);

      this.savePersistence(username, this.profileImage(), this.loginBackground());
    }

    this.loadingStatus.set("Notifying login activity");
    await userDaemon.logActivity("login");

    this.loadingStatus.set("Starting service host");
    await userDaemon.startServiceHost();

    this.loadingStatus.set("Connecting global dispatch");
    await userDaemon.activateGlobalDispatch();

    this.loadingStatus.set("Welcome to ArcOS");
    if (!userDaemon.preferences().firstRunDone && !userDaemon.preferences().appPreferences.arcShell) {
      await this.firstRun(userDaemon);
    }

    this.loadingStatus.set("Starting drive notifier watcher");
    userDaemon.startDriveNotifierWatcher();

    this.loadingStatus.set("Starting share management");
    await userDaemon.startShareManager();

    this.loadingStatus.set("Starting application storage");
    const storage = await userDaemon.startApplicationStorage();

    if (userDaemon.userInfo.admin) {
      this.loadingStatus.set("Activating admin bootstrapper");
      await userDaemon.activateAdminBootstrapper();
    } else {
      await storage?.refresh();
    }

    this.loadingStatus.set("Starting status refresh");
    await userDaemon.startSystemStatusRefresh();

    this.loadingStatus.set("Let's go!");
    await this.kernel.state?.loadState("desktop", { userDaemon });
    this.soundBus.playSound("arcos.system.logon");
    userDaemon.setAppRendererClasses(userDaemon.preferences());

    this.loadingStatus.set("Starting Workspaces");
    await userDaemon.startVirtualDesktops();

    this.loadingStatus.set("Running autorun");
    await userDaemon.spawnAutoload();

    await this.appStore()?.refresh();

    await userDaemon.checkForUpdates();
    userDaemon.serviceHost?.getService<ProtocolServiceProcess>("ProtoService")?.parseProtoParam();
    await userDaemon.checkForMissedMessages();

    userDaemon._blockLeaveInvocations = false;
  }

  async logoff(daemon: UserDaemon) {
    this.Log(`Logging off user '${daemon.username}'`);

    // this.hideProfileImage.set(true);
    this.type = "logoff";

    this.loadingStatus.set(`Goodbye, ${daemon.username}!`);
    this.errorMessage.set("");

    for (const [_, proc] of [...this.handler.store()]) {
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

    this.loadingStatus.set(`Shutting down...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    this.kernel.state?.loadState("turnedOff");
  }

  async restart(daemon?: UserDaemon) {
    this.Log(`Handling restart`);

    this.type = "restart";

    if (daemon) {
      this.profileImage.set(`${import.meta.env.DW_SERVER_URL}/user/pfp/${daemon.userInfo._id}${authcode()}`);
      this.loginBackground.set((await daemon.getWallpaper(daemon.preferences().account.loginBackground)).url);

      this.profileName.set(daemon.preferences().account.displayName || daemon.username);
    }

    this.loadingStatus.set(`Restarting...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    location.reload();
  }

  private saveToken(daemon: UserDaemon) {
    const token = daemon.token;
    const username = daemon.username;

    this.Log(`Saving token of '${daemon.username}' to cookies`);

    const cookieOptions = {
      expires: 14, // lmao
      domain: import.meta.env.DEV ? "localhost" : "izkuipers.nl",
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

  private async askForTotp(token: string) {
    const returnId = UUID();

    return new Promise(async (r) => {
      this.systemDispatch.subscribe("totp-unlock-success", ([id]) => {
        if (id === returnId) r(true);
      });

      this.systemDispatch.subscribe("totp-unlock-cancel", ([id]) => {
        if (id === returnId) r(false);
      });

      await this.handler.spawn(
        TotpAuthGuiRuntime,
        undefined,
        this.pid,
        { data: { ...TotpAuthGuiApp, overlay: true }, id: "TotpAuthGuiApp" },
        token,
        returnId
      );
    });
  }

  async firstRun(daemon: UserDaemon) {
    const process = await this.handler.spawn<FirstRunRuntime>(
      FirstRunRuntime,
      undefined,
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
}
