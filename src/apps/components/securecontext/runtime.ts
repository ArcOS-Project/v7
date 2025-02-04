import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { LoginUser } from "$ts/server/user/auth";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ElevationData } from "$types/elevation";

export class SecureContextRuntime extends AppProcess {
  private id: string;
  private key: string;
  public data: ElevationData;
  public password = Store<string>("");
  public loading = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    id: string,
    key: string,
    data: ElevationData
  ) {
    super(handler, pid, parentPid, app);

    this.id = id;
    this.key = key;
    this.data = data;
  }

  async render() {
    await this.closeIfSecondInstance();
  }

  async validate() {
    if (this._disposed) return;

    const security = this.userPreferences().security;

    if (security.noPassword) return true;
    if (security.disabled || !this.userDaemon?.username) return false;

    const token = await LoginUser(this.userDaemon.username, this.password());

    if (!token) {
      await this.passwordIncorrect();
      return false;
    }

    await this.userDaemon.discontinueToken(token);

    return true;
  }

  async approve() {
    if (this._disposed) return;
    if (!(await this.validate())) return;

    this.globalDispatch.dispatch(
      "elevation-approve",
      [this.id, this.key],
      true
    );

    await this.closeWindow();
  }

  async deny() {
    if (this._disposed) return;

    this.globalDispatch.dispatch("elevation-deny", [this.id, this.key], true);

    await this.closeWindow();
  }

  passwordIncorrect() {
    if (this._disposed) return;

    return new Promise<void>((r) => {
      MessageBox(
        {
          title: "Authentication failed",
          message:
            "The password you entered is incorrect. Please try typing it again.",
          image: ErrorIcon,
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
        },
        this.pid,
        true
      );
    });
  }

  settings() {
    MessageBox(
      {
        title: "Cancel elevation?",
        message:
          "Going to the security settings from here will cancel the elevation request. Are you sure?",
        sound: "arcos.dialog.warning",
        image: WarningIcon,
        buttons: [
          {
            caption: "Stay here",
            action() {},
          },
          {
            caption: "Continue",
            action: () => {
              this.deny();
              this.spawnApp("systemSettings", undefined, "securityCenter");
            },
            suggested: true,
          },
        ],
      },
      this.pid,
      true
    );
  }
}
