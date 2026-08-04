import type { IMailbrokerSendOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import type { AppProcessData } from "$types/apps/app";
import type { User } from "$types/server/admin";
import type { Mailbroker } from "$types/server/mailbroker";
import type { ExpandedUserInfo } from "$types/user";
import { MailbrokerSendOverlay } from "./types";

export class MailbrokerSendOverlayRuntime extends AppProcess implements IMailbrokerSendOverlayRuntime {
  public template?: Mailbroker.MailTemplate;
  public templateId: string;
  public properties: MailbrokerSendOverlay.Property[] = [];
  public users: ExpandedUserInfo[] = [];

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  constructor(pid: number, parentPid: number, app: AppProcessData, templateId: string) {
    super(pid, parentPid, app);

    this.templateId = templateId;
  }

  protected async start(): Promise<any> {
    const result = await this.admin.getMailbrokerTemplate(this.templateId);

    if (!result.success) {
      MessageBox(
        {
          title: "Not found",
          message: `The mailbroker template specified could not be found on the server. Please try again. ${result.errorMessage ?? "Unknown failure"}`,
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
          buttons: [BTN_OKAY_SUG],
        },
        Daemon.getShell()?.pid!,
        true
      );

      return;
    }

    this.template = result.result;
    this.users = await this.admin.getAllUsers();
    this.parseProperties();
  }

  private parseProperties() {
    if (!this.template) return;

    const result: MailbrokerSendOverlay.Property[] = [];
    const testStr = `${this.template.htmlContent}${this.template.subjectContent}${this.template.textContent}`;
    const regex = /%(?<name>[a-zA-Z_-]+)%/g;
    const matches = testStr.matchAll(regex);

    for (const match of matches ?? []) {
      const name = match?.groups?.name;
      if (!name || result.find((r) => r.name === name)) continue;

      const property: MailbrokerSendOverlay.Property = {
        variant: MailbrokerSendOverlay.PropertyVariant.Unknown,
        isUser: false,
        name,
      };

      switch (name.toLowerCase()) {
        case "url":
          property.variant = MailbrokerSendOverlay.PropertyVariant.Url;
          break;
        case "username":
          property.variant = MailbrokerSendOverlay.PropertyVariant.Username;
          property.isUser = true;
          break;
        case "userid":
          property.variant = MailbrokerSendOverlay.PropertyVariant.UserId;
          property.isUser = true;
          break;
        default:
          property.variant = MailbrokerSendOverlay.PropertyVariant.Unknown;
          break;
      }

      result.push(property);
    }

    this.properties = result;
  }
}
