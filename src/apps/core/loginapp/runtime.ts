import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
import { Axios } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import Cookies from "js-cookie";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";
import type { LoginAppProps } from "./types";
import { Wallpapers } from "$ts/wallpaper/store";
import { getWallpaper } from "$ts/wallpaper";

export class LoginAppRuntime extends AppProcess {
  private readonly DEFAULT_WALLPAPER = Wallpapers.img15.url;
  public hideLockscreen = Store<boolean>(false);
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);
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
      this.hideLockscreen.set(true);
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

    this.revealListener();
  }

  async proceed(username: string, password: string) {
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
    this.hideLockscreen.set(true);
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

    this.saveToken(userDaemon);

    const userInfo = await userDaemon.getUserInfo();

    if (!userInfo) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to request user info");

      return;
    }

    userDaemon.startPreferencesSync();
    await userDaemon.startFilesystemSupplier();

    this.profileImage.set(
      getProfilePicture(userDaemon.preferences().account.profilePicture)
    );
    this.loginBackground.set(
      (await getWallpaper(userDaemon.preferences().account.loginBackground)).url
    );

    await Sleep(2000);

    await this.kernel.state?.loadState("desktop", { userDaemon });

    userDaemon.setAppRendererClasses(userDaemon.preferences());
  }

  revealListener() {
    const listener = async (e: KeyboardEvent) => {
      if (this._disposed) return;

      if (e.key && e.key.toLowerCase() === " ") this.hideLockscreen.set(true);

      await Sleep(10);

      addListener();
    };

    const addListener = () =>
      document.addEventListener("keydown", listener, { once: true });

    addListener();
  }

  async logoff(daemon: UserDaemon) {
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
    this.loginBackground.set(
      (await getWallpaper(daemon.preferences().account.loginBackground)).url
    );

    await Sleep(2000);

    this.resetCookies();
    await daemon.discontinueToken();
    await daemon.killSelf();

    this.hideLockscreen.set(false);

    setTimeout(() => {
      this.loadingStatus.set("");
      this.hideProfileImage.set(false);
      this.profileImage.set(ProfilePictures.def);
      this.loginBackground.set(this.DEFAULT_WALLPAPER);
    }, 600);
  }

  async shutdown(daemon?: UserDaemon) {
    this.type = "shutdown";

    if (daemon) {
      this.profileImage.set(
        getProfilePicture(daemon.preferences().account.profilePicture)
      );
    }

    this.loadingStatus.set(`Shutting down...`);
    this.errorMessage.set("");

    await Sleep(2000);

    if (daemon) await daemon.killSelf();
    window.close();
  }

  async restart(daemon?: UserDaemon) {
    this.type = "restart";

    if (daemon) {
      this.profileImage.set(
        getProfilePicture(daemon.preferences().account.profilePicture)
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

    const cookieOptions = {
      expires: 2,
      domain: import.meta.env.DEV ? "localhost" : "izk-arcos.nl",
    };

    Cookies.set("arcToken", token, cookieOptions);
    Cookies.set("arcUsername", username, cookieOptions);
  }

  private async loadToken() {
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
    Cookies.remove("arcToken");
    Cookies.remove("arcUsername");
  }
}
