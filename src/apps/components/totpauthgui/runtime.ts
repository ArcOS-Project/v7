import type { ITotpConnector } from "$interfaces/modules/server/ITotpConnector";
import { AppProcess } from "$ts/apps/process";
import { Daemon, SysDispatch } from "$ts/env";
import { InfoIcon } from "$ts/images/dialog";
import { MessageBox } from "$ts/util/dialog";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";

export class TotpAuthGuiRuntime extends AppProcess {
  private dispatchId: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, dispatchId: string) {
    super(pid, parentPid, app);

    this.dispatchId = dispatchId;

    this.setSource(__SOURCE__);
  }

  render(args: RenderArgs) {
    if (!Daemon!.token || !this.dispatchId) {
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
    this.Log(`verifyTotp: ${code}`);

    if (!this.validate(code) || code.length !== 6) return false;

    const result = await Daemon.GetConnector<ITotpConnector>("TotpConnector").Unlock(code);
    if (!result.success) return false;

    await this.closeWindow();
    this.doDispatch();

    return true;
  }

  cantAccess() {
    this.Log(`cantAccess`);

    MessageBox(
      {
        title: "ArcOS Security",
        message:
          "Lost access to your authenticator app? Not a problem! Please contact an ArcOS System Admin in the Discord server to get your 2FA removed. We'll ask you questions to verify you own the account, and after that you can access it again.",
        buttons: [{ caption: "Okay", action: () => this.cancel(), suggested: true }],
        sound: "arcos.dialog.info",
        image: InfoIcon,
      },
      this.parentPid,
      true
    );
  }

  //#endregion
  //#region ACTIONS

  async doDispatch() {
    this.Log(`Dispatching unlock confirmation to ${this.dispatchId}`);

    SysDispatch.dispatch("totp-unlock-success", [this.dispatchId]);
  }

  async cancel() {
    this.Log(`Dispatching unlock cancellation to ${this.dispatchId}`);

    SysDispatch.dispatch("totp-unlock-cancel", [this.dispatchId]);
    this.closeWindow();
  }

  //#endregion
}
