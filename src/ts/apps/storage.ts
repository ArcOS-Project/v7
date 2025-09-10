import { arrayToText } from "$ts/fs/convert";
import { getParentDirectory, join } from "$ts/fs/util";
import { tryJsonParse } from "$ts/json";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { sortByHierarchy } from "$ts/util";
import { Store } from "$ts/writable";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/app";
import type { Service } from "$types/service";

export class ApplicationStorage extends BaseService {
  private origins = new Map<string, AppStoreCb>([]);
  private injectedStore = new Map<string, App>([]);
  public buffer = Store<AppStorage>([]);
  public appIconCache: Record<string, string> = {};

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.loadOrigin("injected", () => this.injected());

    this.systemDispatch.subscribe("app-store-refresh", async () => {
      await this.refresh();
    });
  }

  async start() {
    this.host.daemon.initAppStorage(this);

    await this.refresh();
  }

  //#endregion

  loadOrigin(id: string, store: AppStoreCb) {
    if (this._disposed) return false;

    this.Log(`Loading app origin '${id}'`);

    if (this.origins.get(id)) return false;

    this.origins.set(id, store);

    return true;
  }

  unloadOrigin(id: string) {
    if (this._disposed) return false;

    this.Log(`Unloading app origin '${id}'`);

    if (!this.origins.get(id)) return false;

    this.origins.delete(id);
    this.systemDispatch.dispatch("app-store-refresh");

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

    const newBuffer = await this.get();
    const tasks: Promise<void>[] = [];

    for (const app of newBuffer) {
      const icon = app.metadata.icon;

      if (icon.startsWith("@local:")) {
        tasks.push(
          (async () => {
            try {
              const path = join(app.workingDirectory || "", icon.replace("@local:", ""));
              const direct = await this.fs.direct(path);
              if (direct) this.appIconCache[path] = direct;
            } catch {
              // ignore quietly
            }
          })()
        );
      }
    }

    // Run in parallel
    await Promise.all(tasks);

    this.buffer.set(newBuffer);
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

    return sortByHierarchy(
      result.sort((a) => (a.hidden ? 0 : -1)),
      "metadata.name"
    ) as AppStorage;
  }

  getAppSynchronous(id: string): App | undefined {
    return this.buffer().filter((a) => a.id === id)[0];
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

            if (!json || typeof json !== "object") return undefined;

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

export const appStoreService: Service = {
  name: "Application Storage",
  description: "Host process for application storage",
  process: ApplicationStorage,
  initialState: "started",
};
