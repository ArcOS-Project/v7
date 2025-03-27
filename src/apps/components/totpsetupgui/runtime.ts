import { AppProcess } from "$ts/apps/process";
import { toForm } from "$ts/form";
import type { ProcessHandler } from "$ts/process/handler";
import { Axios } from "$ts/server/axios";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class TotpSetupGuiRuntime extends AppProcess {
  public digits = Store<(number | undefined)[]>([undefined, undefined, undefined, undefined, undefined, undefined]);
  public inputs = Store<HTMLInputElement[]>([]);
  public url = Store<string>("");

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async render() {
    try {
      const response = await Axios.post("/totp/setup", {}, { headers: { Authorization: `Bearer ${this.userDaemon?.token}` } });

      if (response.status !== 200) throw "";

      this.url.set(response.data.url);
    } catch {
      this.closeWindow();
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

  async activateTotp() {
    if (!this.validate()) return false;

    const string = this.digits().map(Number).join("");

    if (string.length !== 6) return false;

    try {
      const response = await Axios.post("/totp/activate", toForm({ code: string }), {
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
}
