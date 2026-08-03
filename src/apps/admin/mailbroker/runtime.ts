import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { mailbrokerPages } from "./store";

export class MailbrokerRuntime extends AppProcess implements IMailbrokerRuntime {
  currentPage = Store<string>("");
  pageProps = Store<Record<string, any>>({});

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.switchPage("activeTemplates");

    this.setSource(__SOURCE__);
  }

  switchPage(pageId: string, props?: Record<string, any>, force = false) {
    this.Log(`Loading page '${pageId}'`);

    if (!mailbrokerPages.has(pageId)) return;

    if (force) {
      this.currentPage.set("");
    }

    this.pageProps.set({});

    const page = mailbrokerPages.get(pageId);

    this.pageProps.set(props ?? {});
    this.currentPage.set(pageId);
    this.windowTitle.set(`${page?.name}`);
  }

  async start() {}

  async stop() {}

  async render() {}

  //#endregion LIFECYCLE
}
