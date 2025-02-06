import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
import { Axios } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import Cookies from "js-cookie";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";
import type { LoginAppProps } from "./types";

export class LoginAppRuntime extends AppProcess {
  private readonly DEFAULT_WALLPAPER = Wallpapers.img15.url;
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);
  public profileName = Store<string>("");
  public loginBackground = Store<string>(this.DEFAULT_WALLPAPER);
  public hideProfileImage = Store<boolean>(false);
  private type = "";

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    props: LoginAppProps
  ) {
    super(handler, pid, parentPid, app);

    if (props.type) {
      this.hideProfileImage.set(true);

      if (!props.userDaemon)
        throw new Error(`Irregular login type without a user daemon`);

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
    if (!this.type) await this.loadToken();
  }

  async proceed(username: string, password: string) {
    this.Log(`Trying login of '${username}'`);

    this.loadingStatus.set(`Hi, ${username}!`);

    const token = await LoginUser(username, password);

    if (!token) {
      await Sleep(1000);
      this.loadingStatus.set("");
      this.errorMessage.set("Username or password incorrect.");

      return;
    }

    await this.startDaemon(token, username);
  }

  async startDaemon(token: string, username: string) {
    this.Log(`Starting user daemon for '${username}'`);

    this.loadingStatus.set("Starting daemon");

    const userDaemon = await this.handler.spawn<UserDaemon>(
      UserDaemon,
      this.kernel.initPid,
      token,
      username
    );

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

    this.loadingStatus.set("Notifying login activity");

    await userDaemon.logActivity("login");

    this.loadingStatus.set("Starting filesystem");

    await userDaemon.startFilesystemSupplier();

    this.loadingStatus.set("Starting synchronization");

    await userDaemon.startPreferencesSync();

    this.profileImage.set(
      getProfilePicture(userDaemon.preferences().account.profilePicture)
    );
    this.profileName.set(
      userDaemon.preferences().account.displayName || username
    );
    this.loginBackground.set(
      (
        await userDaemon.getWallpaper(
          userDaemon.preferences().account.loginBackground
        )
      ).url
    );

    this.loadingStatus.set("Starting status refresh");

    await userDaemon.startSystemStatusRefresh();

    this.loadingStatus.set("Starting Rotur");

    await userDaemon.startRotur();

    this.loadingStatus.set("Let's go!");

    await this.kernel.state?.loadState("desktop", { userDaemon });
    this.soundBus.playSound("arcos.system.logon");

    userDaemon.setAppRendererClasses(userDaemon.preferences());
    await userDaemon.appStore?.refresh();
    await userDaemon.spawnAutoloadApps();
  }

  async logoff(daemon: UserDaemon) {
    this.Log(`Logging off user '${daemon.username}'`);

    this.hideProfileImage.set(true);
    this.type = "logoff";

    this.loadingStatus.set(`Goodbye, ${daemon.username}!`);
    this.errorMessage.set("");

    for (const [pid, proc] of [...this.handler.store()]) {
      if (
        proc &&
        !proc._disposed &&
        proc instanceof AppProcess &&
        proc.pid !== this.pid
      ) {
        await proc.killSelf();
      }
    }

    this.profileImage.set(
      getProfilePicture(daemon.preferences().account.profilePicture)
    );
    this.profileName.set(
      daemon.preferences().account.displayName || daemon.username
    );
    this.loginBackground.set(
      (await daemon.getWallpaper(daemon.preferences().account.loginBackground))
        .url
    );

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
      this.loginBackground.set(this.DEFAULT_WALLPAPER);
    }, 600);
  }

  async shutdown(daemon?: UserDaemon) {
    this.Log(`Handling shutdown`);

    this.type = "shutdown";

    if (daemon) {
      this.profileImage.set(
        getProfilePicture(daemon.preferences().account.profilePicture)
      );
      this.profileName.set(
        daemon.preferences().account.displayName || daemon.username
      );
    }

    this.loadingStatus.set(`Shutting down...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    window.close();
  }

  async restart(daemon?: UserDaemon) {
    this.Log(`Handling restart`);

    this.type = "restart";

    if (daemon) {
      this.profileImage.set(
        getProfilePicture(daemon.preferences().account.profilePicture)
      );
      this.profileName.set(
        daemon.preferences().account.displayName || daemon.username
      );
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
      expires: 2,
      domain: import.meta.env.DEV ? "localhost" : "izk-arcos.nl",
    };

    Cookies.set("arcToken", token, cookieOptions);
    Cookies.set("arcUsername", username, cookieOptions);
  }

  private async loadToken() {
    this.Log(`Loading token from cookies`);

    const token = Cookies.get("arcToken");
    const username = Cookies.get("arcUsername");

    if (!token || !username) return false;

    const tokenValid = await this.validateUserToken(token);

    if (!tokenValid) {
      this.resetCookies();

      return false;
    }

    this.loadingStatus.set(`Hi, ${username}!`);
    this.errorMessage.set("");
    this.hideProfileImage.set(false);

    await this.startDaemon(token, username);

    return true;
  }

  private async validateUserToken(token: string) {
    this.Log(`Validating user token for token login`);

    try {
      const response = await Axios.get(`/user/self`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  resetCookies() {
    this.Log(`Resetting stored cookie state`);

    Cookies.remove("arcToken");
    Cookies.remove("arcUsername");
  }
}
