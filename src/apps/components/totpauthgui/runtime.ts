import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { toForm } from "$ts/form";
import { InfoIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";

export class TotpAuthGuiRuntime extends AppProcess {
  private token: string;
  private dispatchId: string;
  public digits = Store<(number | undefined)[]>([undefined, undefined, undefined, undefined, undefined, undefined]);
  public inputs = Store<HTMLInputElement[]>([]);

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, token: string, dispatchId: string) {
    super(handler, pid, parentPid, app);

    this.token = token;
    this.dispatchId = dispatchId;
  }

  render(args: RenderArgs) {
    if (!this.token || !this.dispatchId) {
      this.closeWindow();
      return false;
    }
  }

  validate() {
    const digits = this.digits().map(Number);

    for (const digit of digits) {
      if (Number.isNaN(digit) || digit === null || digit === undefined) {
        return false;
      }
    }

    return true;
  }

  async verifyTotp() {
    if (!this.validate()) return false;

    const string = this.digits().map(Number).join("");

    if (string.length !== 6) return false;

    try {
      const response = await Backend.post("/totp/unlock", toForm({ code: string }), {
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

  async doDispatch() {
    this.systemDispatch.dispatch("totp-unlock-success", [this.dispatchId]);
  }

  async cancel() {
    this.systemDispatch.dispatch("totp-unlock-cancel", [this.dispatchId]);
    this.closeWindow();
  }

  cantAccess() {
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
}
