import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class LoginAppRuntime extends AppProcess {
  public hideLockscreen = Store<boolean>(false);
  public loadingStatus = Store<string>("");
  public errorMessage = Store<string>("");
  public profileImage = Store<string>(ProfilePictures.def);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);
  }

  async render() {
    this.revealListener();
  }

  async proceed(username: string, password: string) {
    this.loadingStatus.set(`Hi, ${username}!`);

    const token = await LoginUser(username, password);

    if (!token) {
      this.loadingStatus.set("");
      this.errorMessage.set("Username or password incorrect.");

      return;
    }

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

    const userInfo = await userDaemon.getUserInfo();

    if (!userInfo) {
      this.loadingStatus.set("");
      this.errorMessage.set("Failed to request user info");

      return;
    }

    this.profileImage.set(
      getProfilePicture(userDaemon.preferences().account.profilePicture)
    );
  }

  revealListener() {
    const listener = this.safe(async (e: KeyboardEvent) => {
      console.log(e);
      if (this._disposed) return;

      if (e.key.toLowerCase() === " ") this.hideLockscreen.set(true);

      await Sleep(10);

      addListener();
    });

    const addListener = () =>
      document.addEventListener("keydown", listener, { once: true });

    addListener();
  }
}
