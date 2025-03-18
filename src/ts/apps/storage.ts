import { arrayToText } from "$ts/fs/convert";
import { getParentDirectory } from "$ts/fs/util";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Store } from "$ts/writable";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/app";

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
    if (this._disposed) return false;

    this.Log(`Loading app origin '${id}'`);

    if (this.origins.get(id)) return false;

    this.origins.set(id, store);
    this.globalDispatch.dispatch("app-store-refresh");

    return true;
  }

  unloadOrigin(id: string) {
    if (this._disposed) return false;

    this.Log(`Unloading app origin '${id}'`);

    if (!this.origins.get(id)) return false;

    this.origins.delete(id);
    this.globalDispatch.dispatch("app-store-refresh");

    return true;
  }

  loadApp(app: App) {
    if (this._disposed) return false;

    this.Log(`Loading injected app '${app.id}'`);

    if (this.injectedStore.get(app.id)) return false;

    this.injectedStore.set(app.id, app);

    return app;
  }

  injected() {
    if (this._disposed) return [];

    return [...this.injectedStore].map(([_, app]) => ({ ...app }));
  }

  async refresh() {
    if (this._disposed) return;

    this.Log(`Refreshing store`);

    this.buffer.set(await this.get());
  }

  async get() {
    let result: AppStorage = [];

    if (this._disposed) return result;

    for (const [originId, origin] of [...this.origins]) {
      const apps = (await origin()).map((a) => {
        a.originId = originId;

        return a;
      });

      result.push(...apps);
    }

    return result;
  }

  async getAppById(id: string, fromBuffer = false): Promise<App | undefined> {
    if (this._disposed) return undefined;

    const apps = fromBuffer ? this.buffer() : await this.get();

    for (const app of apps) {
      if (app.id === id) {
        const tpaPath = (app as InstalledApp).tpaPath;

        if (tpaPath) {
          try {
            const json = tryJsonParse(arrayToText((await this.fs.readFile(tpaPath))!));

            return {
              ...Object.freeze({ ...json, workingDirectory: getParentDirectory(tpaPath), tpaPath, originId: "userApps" }),
            };
          } catch {
            continue;
          }
        }

        return { ...Object.freeze({ ...app }) };
      }
    }

    return undefined;
  }
}
