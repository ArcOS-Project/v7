import type { IMailbrokerViewKeyOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import type { AppProcessData } from "$types/apps/app";
import type { Mailbroker } from "$types/server/mailbroker";

export class MailbrokerViewKeyOverlayRuntime extends AppProcess implements IMailbrokerViewKeyOverlayRuntime {
  public key?: Mailbroker.MailKey;
  public keyId: string;
  public sentRecords: Mailbroker.SentMail[] = [];

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  constructor(pid: number, parentPid: number, app: AppProcessData, key: string) {
    super(pid, parentPid, app);

    this.keyId = key;
  }

  protected async start(): Promise<any> {
    const result = await this.admin.getMailbrokerKey(this.keyId);

    if (!result.success) {
      MessageBox(
        {
          title: "Not found",
          message: `The mailbroker key specified could not be found on the server. Please try again. ${result.errorMessage ?? "Unknown failure"}`,
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
          buttons: [BTN_OKAY_SUG],
        },
        Daemon.getShell()?.pid!,
        true
      );

      return;
    }

    this.key = result.result;

    if (!this.admin.canAccess(AdminScopes.adminMailbrokerSentRead)) return;

    this.sentRecords =
      (await this.admin.getMailbrokerSentRecords()).result?.filter((record) => record.to?.serverName === this.key!.serverName) ??
      [];
  }
}
