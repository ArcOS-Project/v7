import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { ReadableStore } from "$types/shared/writable";

export interface IMailbrokerRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;
  currentPage: ReadableStore<string>;
  switchPage(pageId: string): void;
}
