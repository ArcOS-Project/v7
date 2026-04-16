import type { ITotpConnector } from "$interfaces/modules/server/ITotpConnector";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { GetConnector } from "$ts/env";
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
    const result = await GetConnector<ITotpConnector>("totp", Daemon!.token).Setup();
    if (!result.success) {
      this.closeWindow();
      return;
    }

    this.url.set(result.result!.url);
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

    this.Log(`activateTotp: ${string}`);

    if (string.length !== 6) return false;

    const result = await GetConnector<ITotpConnector>("totp", Daemon!.token).Activate(string);
    if (!result.success) return false;

    await this.closeWindow();
    Daemon!.userInfo.hasTotp = true;

    return true;
  }

  //#endregion
}
