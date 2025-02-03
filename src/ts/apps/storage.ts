import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Store } from "$ts/writable";
import type { App, AppStorage, AppStoreCb } from "$types/app";

export class ApplicationStorage extends Process {
  private origins = new Map<string, AppStoreCb>([]);
  private injectedStore = new Map<string, App>([]);
  public buffer = Store<AppStorage>([]);

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);

    this.loadOrigin("injected", () => this.injected());

    this.globalDispatch.subscribe("app-store-refresh", async () => {
      await this.refresh();
    });
  }

  loadOrigin(id: string, store: AppStoreCb) {
    this.Log(`Loading app origin '${id}'`);

    if (this.origins.get(id)) return false;

    this.origins.set(id, store);
    this.globalDispatch.dispatch("app-store-refresh");

    return true;
  }

  unloadOrigin(id: string) {
    this.Log(`Unloading app origin '${id}'`);

    if (!this.origins.get(id)) return false;

    this.origins.delete(id);
    this.globalDispatch.dispatch("app-store-refresh");

    return true;
  }

  loadApp(app: App) {
    this.Log(`Loading injected app '${app.id}'`);

    if (this.injectedStore.get(app.id)) return false;

    this.injectedStore.set(app.id, app);

    return app;
  }

  injected() {
    return [...this.injectedStore].map(([_, app]) => ({ ...app }));
  }

  async refresh() {
    this.Log(`Refreshing store`);

    this.buffer.set(await this.get());
  }

  async get() {
    let result: AppStorage = [];

    for (const [originId, origin] of [...this.origins]) {
      const apps = (await origin()).map((a) => {
        a.originId = originId;

        return a;
      });

      result.push(...apps);
    }

    return result;
  }

  async getAppById(id: string, fromBuffer = false) {
    const apps = fromBuffer ? this.buffer() : await this.get();

    for (const app of apps) {
      if (app.id === id) return app;
    }

    return undefined;
  }
}
