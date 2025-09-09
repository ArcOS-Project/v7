import { AppProcess } from "$ts/apps/process";
import { toForm } from "$ts/form";
import type { ProcessHandler } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class TotpSetupGuiRuntime extends AppProcess {
  public code = Store<string>("");
  public url = Store<string>("");

  //#region CONTROL FLOW

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async render() {
    try {
      const response = await Backend.post("/totp/setup", {}, { headers: { Authorization: `Bearer ${this.userDaemon?.token}` } });

      if (response.status !== 200) throw "";

      this.url.set(response.data.url);
    } catch {
      this.closeWindow();
    }
  }

  //#endregion
  //#region ACCESS

  validate() {
    const code = this.code();

    for (const digit of code) {
      if (Number.isNaN(digit) || digit === null || digit === undefined) {
        return false;
      }
    }

    return true;
  }

  async activateTotp() {
    if (!this.validate()) return false;

    const string = this.code();

    if (string.length !== 6) return false;

    try {
      const response = await Backend.post("/totp/activate", toForm({ code: string }), {
        headers: { Authorization: `Bearer ${this.userDaemon?.token}` },
      });

      const unlocked = response.status === 200;

      if (!unlocked) return false;

      await this.closeWindow();

      this.userDaemon!.userInfo.hasTotp = true;

      return true;
    } catch {
      return false;
    }
  }

  //#endregion
}
