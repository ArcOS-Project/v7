import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";

export class TotpAuthGuiRuntime extends AppProcess {
  private token: string;
  private dispatchId: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, token: string, dispatchId: string) {
    super(pid, parentPid, app);

    this.token = token;
    this.dispatchId = dispatchId;

    this.setSource(__SOURCE__);
  }

  render(args: RenderArgs) {
    if (!this.token || !this.dispatchId) {
      this.closeWindow();
      return false;
    }
  }

  //#endregion
  //#region ACCESS

  validate(code: string) {
    const digits = code.split("").map(Number);

    for (const digit of digits) {
      if (Number.isNaN(digit) || digit === null || digit === undefined) {
        return false;
      }
    }

    return true;
  }

  async verifyTotp(code: string) {
    if (!this.validate(code)) return false;

    if (code.length !== 6) return false;

    try {
      const response = await Backend.post("/totp/unlock", toForm({ code }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      const unlocked = response.status === 200;

      if (!unlocked) return false;

      await this.closeWindow();

      this.doDispatch();

      return true;
    } catch {
      return false;
    }
  }

  cantAccess() {
    MessageBox(
      {
        title: "ArcOS Security",
        message:
          "Lost access to your authenticator app? Not a problem! Please contact an ArcOS System Admin in the Discord server to get your 2FA removed. We'll ask you questions to verify you own the account, and after that you can access it again.",
        buttons: [{ caption: "Okay", action: () => this.cancel(), suggested: true }],
        sound: "arcos.dialog.info",
        image: this.getIconCached("InfoIcon"),
      },
      this.parentPid,
      true
    );
  }

  //#endregion
  //#region ACTIONS

  async doDispatch() {
    this.systemDispatch.dispatch("totp-unlock-success", [this.dispatchId]);
  }

  async cancel() {
    this.systemDispatch.dispatch("totp-unlock-cancel", [this.dispatchId]);
    this.closeWindow();
  }

  //#endregion
}
