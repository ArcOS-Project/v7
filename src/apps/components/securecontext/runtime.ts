import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
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

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, id: string, key: string, data: ElevationData) {
    super(pid, parentPid, app);

    this.id = id;
    this.key = key;
    this.data = data;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.id || !this.key || !this.data) return false;
  }

  async render() {
    if (await this.closeIfSecondInstance()) return;

    this.soundBus.playSound("arcos.dialog.info");
  }

  //#endregion
  //#region MASTER

  async validate() {
    this.Log("Validating elevation request");

    if (this._disposed) return;

    const security = this.userPreferences().security;

    if (security.noPassword) return true; // Password field is irrelevant if noPassword is set
    if (security.disabled || !this.userDaemon?.username) return false; // 'Reject all elevation requests'

    const token = await LoginUser(this.userDaemon.username, this.password()); // Try to create a token to validate

    if (!token) {
      await this.passwordIncorrect();
      return false;
    }

    await this.userDaemon.discontinueToken(token); // Discontinue validated token

    return true;
  }

  async approve() {
    this.Log("Approving elevation request");

    if (this._disposed) return;
    if (!(await this.validate())) return; // Validation failed? then don't continue

    await this.closeWindow(); // Close the window first

    this.systemDispatch.dispatch("elevation-approve", [this.id, this.key], true); // Use dispatch to inform the invocator
  }

  async deny() {
    this.Log("Denying elevation request");

    if (this._disposed) return;

    await this.closeWindow(); // Close the window first

    this.systemDispatch.dispatch("elevation-deny", [this.id, this.key], true); // Use dispatch to inform the invocator
  }

  async passwordIncorrect() {
    this.Log("Password incorrect");

    if (this._disposed) return;

    return new Promise<void>(async (r) => {
      await MessageBox(
        {
          title: "Authentication failed",
          message: "The password you entered is incorrect. Please try typing it again.",
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
        },
        this.pid,
        true
      );
    });
  }

  //#endregion
  //#region EXTERNAL

  async settings() {
    this.Log("Displaying confirmation for Security Settings");

    await MessageBox(
      {
        title: "Cancel elevation?",
        message: "Going to the security settings from here will cancel the elevation request. Are you sure?",
        sound: "arcos.dialog.warning",
        image: "WarningIcon",
        buttons: [
          {
            caption: "Stay here",
            action() {},
          },
          {
            caption: "Continue",
            action: () => {
              this.deny();
              this.spawnApp("systemSettings", +this.env.get("shell_pid"), "securityCenter"); // Go to the 'securityCenter' page
            },
            suggested: true,
          },
        ],
      },
      this.pid,
      true
    );
  }

  //#endregion
}
