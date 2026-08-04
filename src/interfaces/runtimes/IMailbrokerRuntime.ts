import type { MailbrokerSendOverlay } from "$apps/admin/mailbrokermanagerapp/Overlays/SendOverlay/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { Mailbroker } from "$types/server/mailbroker";
import type { ReadableStore } from "$types/shared/writable";
import type { ExpandedUserInfo } from "$types/user";

export interface IMailbrokerRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;
  currentPage: ReadableStore<string>;
  pageProps: ReadableStore<Record<string, any>>;
  switchPage(pageId: string, props?: Record<string, any>, force?: boolean): void;
}

export interface IMailbrokerSendOverlayRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;
  properties: MailbrokerSendOverlay.Property[];
  template?: Mailbroker.MailTemplate;
  templateId: string;
  users: ExpandedUserInfo[];
}

export interface IMailbrokerViewKeyOverlayRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;

  key?: Mailbroker.MailKey;
  keyId: string;
  sentRecords: Mailbroker.SentMail[];
}

export interface IMailbrokerNewKeyOverlayRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;
  get parent(): IMailbrokerRuntime;
}
