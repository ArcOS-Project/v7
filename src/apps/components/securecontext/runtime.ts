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
    if (await this.closeIfSecondInstance()) return;

    this.soundBus.playSound("arcos.dialog.info");
  }

  async validate() {
    this.Log("Validating elevation request");

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
    this.Log("Approving elevation request");

    if (this._disposed) return;
    if (!(await this.validate())) return;

    await this.closeWindow();

    this.systemDispatch.dispatch("elevation-approve", [this.id, this.key], true);
  }

  async deny() {
    this.Log("Denying elevation request");

    if (this._disposed) return;

    await this.closeWindow();

    this.systemDispatch.dispatch("elevation-deny", [this.id, this.key], true);
  }

  async passwordIncorrect() {
    this.Log("Password incorrect");

    if (this._disposed) return;

    return new Promise<void>(async (r) => {
      await MessageBox(
        {
          title: "Authentication failed",
          message: "The password you entered is incorrect. Please try typing it again.",
          image: ErrorIcon,
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
        },
        this.pid,
        true
      );
    });
  }

  async settings() {
    this.Log("Displaying confirmation for Security Settings");

    await MessageBox(
      {
        title: "Cancel elevation?",
        message: "Going to the security settings from here will cancel the elevation request. Are you sure?",
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
