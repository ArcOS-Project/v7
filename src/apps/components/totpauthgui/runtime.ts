import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { SysDispatch } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { MessageBox } from "$ts/util/dialog";
import { toForm } from "$ts/util/form";
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

    if (!this.validate(code)) return false;

    if (code.length !== 6) return false;

    try {
      const response = await Backend.post("/totp/unlock", toForm({ code }), {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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
    this.Log(`cantAccess`);

    MessageBox(
      {
        title: "ArcOS Security",
        message:
          "Lost access to your authenticator app? Not a problem! Please contact an ArcOS System Admin in the Discord server to get your 2FA removed. We'll ask you questions to verify you own the account, and after that you can access it again.",
        buttons: [{ caption: "Okay", action: () => this.cancel(), suggested: true }],
        sound: "arcos.dialog.info",
        image: "InfoIcon",
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
