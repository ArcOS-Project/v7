import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Backend } from "$ts/kernel/mods/server/axios";
import { toForm } from "$ts/util/form";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class TotpSetupGuiRuntime extends AppProcess {
  public code = Store<string>("");
  public url = Store<string>("");

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async render() {
    try {
      const response = await Backend.post("/totp/setup", {}, { headers: { Authorization: `Bearer ${Daemon?.token}` } });

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

    this.Log(`activateTotp: ${string}`)

    if (string.length !== 6) return false;

    try {
      const response = await Backend.post("/totp/activate", toForm({ code: string }), {
        headers: { Authorization: `Bearer ${Daemon?.token}` },
      });

      const unlocked = response.status === 200;

      if (!unlocked) return false;

      await this.closeWindow();

      Daemon!.userInfo.hasTotp = true;

      return true;
    } catch {
      return false;
    }
  }

  //#endregion
}
