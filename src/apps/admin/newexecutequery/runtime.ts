import type { ICommandResult } from "$interfaces/ICommandResult";
import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/apps/app";
import type { DbQueryCollectionColumn } from "$types/server/admin";
import SelectColumnsApp from "./Overlays/SelectColumns";

export class NewExecuteQueryRuntime extends AppProcess implements INewExecuteQueryRuntime {
  //#region LIFECYCLE

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  public loading = Store(true);
  public collections = Store<string[]>([]);
  public selectedCollection = Store<string>();
  public columns = Store<DbQueryCollectionColumn[]>();
  public selectedColumns = Store<Record<string, string[]>>({}); // R<collection, columns[]>
  public allowSensitiveColumns = false;

  protected overlayStore: Record<string, App> = {
    selectColumns: SelectColumnsApp,
  };

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.admin) return false;

    this.allowSensitiveColumns = this.admin.canAccess(AdminScopes.adminDbQuerySensitive);
  }

  async stop() {}

  async render() {
    await this.RefreshCollections();
    this.loading.set(false);
  }

  //#endregion LIFECYCLE

  async RefreshCollections() {
    const collectionsResult = await this.admin.DbQueryCollections();

    if (!collectionsResult.success) {
      await this.Error(collectionsResult);
      return;
    }

    this.collections.set(collectionsResult.result!);

    if (!this.selectedCollection()) {
      this.SelectCollection(collectionsResult.result![0]);
    }
  }

  async SelectCollection(collection: string) {
    this.loading.set(true);
    const columnsResult = await this.admin.DbQueryColumns(collection);

    this.loading.set(false);

    if (!columnsResult.success) {
      await this.Error(columnsResult);
      return;
    }

    this.columns.set(columnsResult.result!);
    this.selectedCollection.set(collection);
  }

  async Error(result: ICommandResult) {
    return await MessageBox(
      {
        title: "Failure",
        message: `An error occurred. ${result.errorMessage ?? "Unknown failure."}`,
        buttons: [BTN_OKAY_SUG],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }

  async ShowSelectColumns() {
    await this.spawnOverlay("selectColumns", this);
  }
}
