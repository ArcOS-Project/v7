import type { ICommandResult } from "$interfaces/ICommandResult";
import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { tryJsonParse } from "$ts/util/json";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/apps/app";
import type { DbQuery, DbQueryCollectionColumn, DbQueryOrderBy } from "$types/server/admin";
import type { ExpandedUserInfo } from "$types/user";
import SelectColumnsApp from "./Overlays/SelectColumns";
import type { NewExecuteQueryWhereClauses, SavedQuery } from "./types";

export class NewExecuteQueryRuntime extends AppProcess implements INewExecuteQueryRuntime {
  //#region LIFECYCLE

  public readonly USER_COLUMNS = ["userId", "authorId", "recipient", "repliesTo"];
  public users: ExpandedUserInfo[] = [];
  public loading = Store(true);
  public allowSensitiveColumns = false;

  public collections = Store<string[]>([]);
  public columns = Store<DbQueryCollectionColumn[]>();
  public selectedCollection = Store<string>();
  public selectedColumns = Store<Record<string, DbQueryCollectionColumn[]>>({}); // R<collection, columns[]>
  public whereClauses = Store<NewExecuteQueryWhereClauses>({}); // R<collection, clause[]>
  public orderBy = Store<Record<string, DbQueryOrderBy>>({});

  get admin() {
    return Daemon.serviceHost?.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

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

  async Execute(): Promise<void> {
    // TODO: make a proper result dialog or something
    const query = this.CompileDbQuery();
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

  //#endregion LIFECYCLE
  //#region SELECTION

  async RefreshCollections(): Promise<void> {
    const collectionsResult = await this.admin.DbQueryCollections();

    if (!collectionsResult.success) {
      await this.DisplayError(collectionsResult);
      return;
    }

    this.collections.set(collectionsResult.result!);
  }

  async SelectCollection(collection: string, quiet = false): Promise<ICommandResult> {
    this.loading.set(true);
    const columnsResult = await this.admin.DbQueryColumns(collection);

    this.loading.set(false);

    if (!columnsResult.success) {
      if (!quiet) await this.DisplayError(columnsResult);
      return columnsResult;
    }

    this.columns.set(columnsResult.result!);
    this.selectedCollection.set(collection);
    this.whereClauses.update((v) => {
      v[collection] ||= [];
      return v;
    });
    this.orderBy.update((v) => {
      v[collection] ||= {};
      return v;
    });

    return CommandResult.Ok();
  }

  async ShowSelectColumns(): Promise<void> {
    await this.spawnOverlay("selectColumns", this);
  }

  //#endregion
  //#region CLAUSES

  AddWhereClause(): void {
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

  DuplicateClause(i: number): void {
    const selectedCollection = this.selectedCollection();

    this.whereClauses.update((clauses) => {
      const sourceExpression = clauses[selectedCollection][i];
      if (!sourceExpression) return clauses;

      clauses[selectedCollection].push({ ...JSON.parse(JSON.stringify(sourceExpression)), uuid: UUID() });
      return clauses;
    });
  }

  DeleteClause(i: number): void {
    const selectedCollection = this.selectedCollection();

    this.whereClauses.update((clauses) => {
      const sourceExpression = clauses[selectedCollection][i];
      if (!sourceExpression) return clauses;

      clauses[selectedCollection].splice(i, 1);
      return clauses;
    });
  }

  //#endregion
  //#region COMPILE

  CompileDbQuery(): DbQuery {
    const collection = this.selectedCollection();
    const columns = this.selectedColumns()[collection];
    const clauses = this.whereClauses()[collection];
    const orderBy = this.orderBy()[collection];

    return {
      fromCollection: this.selectedCollection(),
      selectColumns: columns.map((columnInfo) => columnInfo.column),
      whereClauses: clauses,
      orderBy,
    };
  }

  CompileSavedQuery(): SavedQuery {
    const collection = this.selectedCollection();
    const orderBy = this.orderBy();
    const clauses = this.whereClauses();
    const selectedColumns = this.selectedColumns();

    return {
      collectionName: collection,
      orderBy: orderBy[collection],
      selectedColumns: selectedColumns[collection].map((info) => info.column),
      whereClauses: clauses[collection],
      generatedBy: Daemon.username,
      generatedAt: new Date().toISOString(),
    };
  }

  //#endregion
  //#region LOAD/SAVE

  /**
   * @returns A commandresult with warnings as its payload
   */
  async LoadSavedQuery(query: SavedQuery): Promise<ICommandResult<string[]>> {
    const selectResult = await this.SelectCollection(query.collectionName, true);
    if (!selectResult.success) return selectResult;

    const warnings: string[] = [];
    const columns = this.columns();
    const columnInfos: DbQueryCollectionColumn[] = [];

    for (const column of query.selectedColumns) {
      const info = columns.find((col) => column === col.column);
      if (!info) {
        warnings.push(`Column '${column}' could not be found in the collection`);
        continue;
      }

      if (info.sensitive && !this.allowSensitiveColumns) {
        warnings.push(`You don't have permission to access sensitive column '${column}'`);
        continue;
      }

      columnInfos.push(info);
    }

    for (let i = 0; i < query.whereClauses.length; i++) {
      const clause = query.whereClauses[i];
      if (columnInfos.find((column) => column.column === clause.columnName)) continue;

      warnings.push(`Omitted where-clause ${i + 1} because of unknown column '${clause.columnName}'`);
      query.whereClauses.splice(i, 1);
    }

    this.whereClauses.update((v) => {
      v[query.collectionName] = query.whereClauses;
      return v;
    });

    this.selectedColumns.update((v) => {
      v[query.collectionName] = columnInfos;
      return v;
    });

    this.orderBy.update((v) => {
      v[query.collectionName] = query.orderBy;
      return v;
    });

    return CommandResult.Ok(warnings);
  }

  async LoadSavedQueryFromFile(): Promise<ICommandResult<string[]>> {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose a query to open",
      icon: this.app.data.metadata.icon,
      extensions: [".json"],
      startDir: "A:/",
    });
    if (!path) return CommandResult.Ok([]);

    const fileContent = await Fs.readFile(path);
    if (!fileContent) return CommandResult.Error("Failed to open the file");

    const queryObject = tryJsonParse<SavedQuery>(arrayBufferToText(fileContent));
    return await this.LoadSavedQuery(queryObject);
  }

  async SaveQueryToFile(): Promise<ICommandResult> {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose where to save this query",
      icon: this.app.data.metadata.icon,
      extensions: [".esq.json"],
      startDir: "A:/",
      saveName: `query_${this.selectedCollection()}_${Date.now()}`,
      isSave: true,
    });
    if (!path) return CommandResult.Ok();

    const query = this.CompileSavedQuery();
    await Fs.writeFile(path, textToBlob(JSON.stringify(query, null, 2)));
    return CommandResult.Ok();
  }

  async DoLoadQueryFromFile(): Promise<void> {
    const result = await this.LoadSavedQueryFromFile();
    if (!result.success) {
      return this.DisplayError(result);
    }

    if (result.result?.length) {
      this.DisplayWarnings(result.result);
    }
  }

  async DoSaveQueryToFile(): Promise<void> {
    const result = await this.SaveQueryToFile();
    if (!result.success) {
      return this.DisplayError(result);
    }
  }

  //#endregion
  //#region UTILS

  async DisplayError(result: ICommandResult): Promise<void> {
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

  async DisplayWarnings(warnings: string[]): Promise<void> {
    return await MessageBox(
      {
        title: "Some warnings occurred",
        message: `<ol>${warnings.map((warning) => `<li>${warning}</li>`).join("")}</ol>`,
        buttons: [BTN_OKAY_SUG],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  //#endregion
}
