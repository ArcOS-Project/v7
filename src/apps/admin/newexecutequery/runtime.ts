import type { ICommandResult } from "$interfaces/ICommandResult";
import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/apps/app";
import type { DbQuery, DbQueryCollectionColumn } from "$types/server/admin";
import type { ExpandedUserInfo } from "$types/user";
import SelectColumnsApp from "./Overlays/SelectColumns";
import type { NewExecuteQueryWhereClauses } from "./types";

export class NewExecuteQueryRuntime extends AppProcess implements INewExecuteQueryRuntime {
  //#region LIFECYCLE

  USER_COLUMNS = ["userId", "authorId", "recipient", "repliesTo"];

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  public loading = Store(true);
  public collections = Store<string[]>([]);
  public selectedCollection = Store<string>();
  public columns = Store<DbQueryCollectionColumn[]>();
  public selectedColumns = Store<Record<string, DbQueryCollectionColumn[]>>({}); // R<collection, columns[]>
  public whereClauses = Store<NewExecuteQueryWhereClauses>({}); // R<collection, clause[]>
  public allowSensitiveColumns = false;
  public users: ExpandedUserInfo[] = [];

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
    this.users = await this.admin.getAllUsers();
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

  AddWhereClause() {
    this.whereClauses.update((clauses) => {
      clauses[this.selectedCollection()] ||= [];
      clauses[this.selectedCollection()].push({
        columnName: "",
        mode: "isEqualTo",
        uuid: UUID(),
      });

      return clauses;
    });
  }

  DuplicateClause(i: number) {
    const selectedCollection = this.selectedCollection();

    this.whereClauses.update((clauses) => {
      const sourceExpression = clauses[selectedCollection][i];
      if (!sourceExpression) return clauses;

      clauses[selectedCollection].push({ ...JSON.parse(JSON.stringify(sourceExpression)), uuid: UUID() });
      return clauses;
    });
  }

  DeleteClause(i: number) {
    const selectedCollection = this.selectedCollection();

    this.whereClauses.update((clauses) => {
      const sourceExpression = clauses[selectedCollection][i];
      if (!sourceExpression) return clauses;

      clauses[selectedCollection].splice(i, 1);
      return clauses;
    });
  }

  CompileQuery(): DbQuery {
    const collection = this.selectedCollection();
    const columns = this.selectedColumns()[collection];
    const clauses = this.whereClauses()[collection];

    return {
      fromCollection: this.selectedCollection(),
      selectColumns: columns.map((columnInfo) => columnInfo.column),
      whereClauses: clauses,
    };
  }

  async Execute() {
    const query = this.CompileQuery();
    const result = await this.admin.DbQueryExecute(query);

    Daemon.helpers?.ViewGenericObject(
      result,
      {
        dataName: "DbQuery_Result",
        windowIcon: "ArcFindIcon",
        windowTitle: `Query results for '${query.fromCollection}'`,
      },
      this.pid
    );
  }
}
