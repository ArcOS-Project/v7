import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ConnectIcon, RoturIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import type { UserDaemon } from "$ts/server/user/daemon";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class RoturAuthGuiProcess extends AppProcess {
  providedUserDaemon: UserDaemon;
  isRegistering = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    userDaemon: UserDaemon
  ) {
    super(handler, pid, parentPid, app);

    this.providedUserDaemon = userDaemon;
  }

  async start() {
    this.userDaemon ||= this.providedUserDaemon;
  }

  async render() {
    if (!this.userDaemon)
      throw new Error("Can't run RoturAuthGui without a user daemon");

    if (this.userDaemon?.preferences().account.rotur.username) {
      MessageBox(
        {
          title: "Unnecessary invocation",
          message:
            "RoturAuthGuiProcess was invoked while the user is already authenticated. This shouldn't happen.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.system.error",
          image: RoturIcon,
        },
        this.parentPid
      );

      this.killSelf();
    }
  }

  async loginToRotur(username: string, password: string) {
    if (!this.userDaemon)
      throw new Error("Can't run RoturAuthGui without a user daemon");

    try {
      await this.userDaemon?.rotur?.login(username, password);

      this.userDaemon?.preferences.update((v) => {
        v.account.rotur = {
          username: btoa(username),
          password: btoa(password),
        };

        return v;
      });

      this.globalDispatch.dispatch("ragui-loggedin");
      await this.closeWindow();
      await this.userDaemon?.restartRotur();

      return true;
    } catch (e) {
      console.log(e);
      MessageBox(
        {
          title: "Failed to log in",
          message:
            "ArcOS could not log in to Rotur. Please check your credentials and try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ConnectIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );

      this.globalDispatch.dispatch("ragui-login-failed");

      return false;
    }
  }

  async register(username: string, password: string) {
    try {
      await this.userDaemon?.rotur?.register(username, password);

      this.userDaemon?.preferences.update((v) => {
        v.account.rotur = {
          username: btoa(username),
          password: btoa(password),
        };

        return v;
      });

      this.globalDispatch.dispatch("ragui-registered");
      await this.closeWindow();
      await this.userDaemon?.restartRotur();

      return true;
    } catch {
      MessageBox(
        {
          title: "Failed to register",
          message:
            "ArcOS could not create your Rotur account. The username might already be taken. Please try something else and try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ConnectIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );

      this.globalDispatch.dispatch("ragui-register-failed");

      return false;
    }
  }
}
