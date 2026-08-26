import type { ICommandResult } from "$interfaces/ICommandResult";
import type { ISqlInterfaceProcess } from "$interfaces/ISqlInterfaceProcess";
import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Fs, SoundBus } from "$ts/env";
import { CommandResult } from "$ts/result";
import { Sleep } from "$ts/sleep";
import { SqlInterfaceProcess } from "$ts/sql";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { getItemNameFromPath } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { SqeletonAccelerators } from "./accelerators";
import type { SqeletonError, SqeletonHistoryItem, SqeletonOpenedQuery, SqeletonTabs, SqlTable, SqlTableColumn } from "./types";

export class SqeletonRuntime extends AppProcess implements ISqeletonRuntime {
  openedFile = Store<string>("");
  openedFileName = Store<string>("");
  _intf = Store<ISqlInterfaceProcess | undefined>();
  queries = Store<SqeletonOpenedQuery[]>([]);
  queryIndex = Store<number>(0);
  errors = Store<SqeletonError[]>([]);
  queryHistory = Store<SqeletonHistoryItem[]>([]);
  working = Store<boolean>(false);
  errored = Store<boolean>(false);
  result = Store<Record<string, any>[][] | undefined>();
  tables = Store<SqlTable[]>();
  busy = false;
  currentTab = Store<string>("result");
  syntaxError = Store<boolean>(false);
  tempDbPath = `T:/${UUID()}.db.tmp`;
  tempDb?: ISqlInterfaceProcess;
  tabs: SqeletonTabs = {
    result: {
      name: "Result",
    },
    errors: {
      name: "Errors",
      count: this.errors,
    },
    history: {
      name: "History",
      count: this.queryHistory,
    },
  };

  get Interface(): ISqlInterfaceProcess | undefined {
    return this._intf();
  }

  set Interface(value: ISqlInterfaceProcess | undefined) {
    if (this.Interface && value) {
      this.ExistingConnectionError();
      return;
    }

    this._intf.set(value);
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.renderArgs.path = path;

    this.setSource(__SOURCE__);
  }

  async start() {
    this.acceleratorStore.push(...SqeletonAccelerators(this));
    this.tempDb = await SqlInterfaceProcess.Create(this.pid, this.tempDbPath);
  }

  async stop() {
    await Fs.deleteItem(this.tempDbPath);
  }

  async render({ path }: { path?: string }) {
    if (path) {
      await this.readDatabase(path);
    }

    await import("$css/apps/user/sqeleton.css");
  }

  //#endregion

  async readDatabase(path: string) {
    if (this.openedFile()) {
      this.ExistingConnectionError();
      return;
    }

    try {
      this.Interface = await SqlInterfaceProcess.Create(this.pid, path);

      if (!this.Interface?.db) throw "Failed to open database. The resource might be locked.";

      this.updateTableList();
      this.openedFile.set(path);
      this.openedFileName.set(getItemNameFromPath(path));
      this.windowTitle.set(`${this.openedFileName()} - Sqeleton v${this.app.data.metadata.version}`);
    } catch (e) {
      this.DbOpenError(`${e}`);
    }
  }

  async openDatabase() {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Select a database to open",
      icon: "SqeletonIcon",
      startDir: UserPaths.Documents,
      extensions: [".db"],
    });

    if (!path) return;

    this.readDatabase(path);
  }

  async newDatabase() {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose where to save the new database",
      icon: "SqeletonIcon",
      startDir: UserPaths.Documents,
      extensions: [".db"],
      isSave: true,
      saveName: "database",
    });

    if (!path) return;

    const db = await SqlInterfaceProcess.Create(this.pid, path);
    await db?.writeFile();
    await db?.killSelf();

    this.readDatabase(path);
  }

  async executeSql(code: string, simple = false, system = false) {
    await this.waitForAvailable();
    this.busy = true;
    this.working.set(true);
    this.errored.set(false);

    const result = await this.Interface?.exec(code);

    if (typeof result === "string") {
      this.errors.update((v) => {
        v.push({
          uuid: UUID(),
          sql: code,
          text: result,
          timestamp: Date.now(),
          system,
        });
        return v;
      });
      if (!simple) {
        this.errored.set(true);
        SoundBus.playSound("arcos.dialog.error");
        this.currentTab.set("errors");
      }
    } else {
      if (!simple) this.result.set(result);

      this.queryHistory.update((v) => {
        v.push({
          uuid: UUID(),
          system,
          sql: code,
          result: result || [],
          timestamp: Date.now(),
        });
        return v;
      });
    }

    if (!simple) this.updateTableList();

    this.working.set(false);
    this.busy = false;
    return result;
  }

  async updateTableList() {
    const query = await this.executeSql(
      `SELECT * FROM sqlite_master WHERE NAME NOT LIKE "sqlite%" AND type IS NOT 'trigger';`,
      true,
      true
    );
    const result: SqlTable[] = [];

    if (typeof query === "string") {
      this.TablesUpdateError(query as string);
    } else if (!query?.[0]) {
      this.tables.set([]);
    } else {
      const columnQueryStr = (query[0] as SqlTable[]).map((table) => `PRAGMA table_info(${table.name});`).join("\n") + "\n";
      const columns = await this.executeSql(columnQueryStr, true, true);

      if (typeof columns === "string" || !columns?.length) {
        this.tables.set([]);
      } else {
        for (let i = 0; i < query[0].length; i++) {
          const table = query[0][i] as SqlTable;
          const columnDefs = columns[i] as SqlTableColumn[];

          result.push({
            ...(table as SqlTable),
            columns: columnDefs ? columnDefs.map((c) => ({ ...c, uuid: UUID() })) : [],
            uuid: UUID(),
          });
        }
        this.tables.set(result);
      }
    }
  }

  openEditor(value = "", filePath?: string) {
    this.queries.update((v) => {
      const query: SqeletonOpenedQuery = {
        content: value,
        filename: filePath ? getItemNameFromPath(filePath) : "Untitled",
        filePath,
        hasChanges: !filePath,
        id: UUID(),
      };

      if (v.length) {
        v.splice(this.queryIndex() + 1, 0, query);
        this.queryIndex.set(this.queryIndex() + 1);
      } else {
        v.push(query);
      }

      return v;
    });
  }

  async closeQueryAck(index: number) {
    const query = this.queries()[index];
    if (!query) return;

    if (!query.hasChanges) {
      this.closeQuery(index);
      return;
    }

    MessageBox(
      {
        title: "Save changes?",
        message: `Do you want to save the changes you made to '${query.filename}'?`,
        buttons: [
          {
            caption: "Cancel",
            action: () => {},
          },
          {
            caption: "No",
            action: async () => {
              this.closeQuery(index);
              return;
            },
          },
          {
            caption: "Yes",
            action: async () => {
              const result = await this.saveQuery(query, index);

              if (!result.success && result.errorMessage) {
                this.QuerySaveError(result);
                return;
              }

              this.closeQuery(index);

              return;
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async closeQuery(index: number) {
    this.queries.update((v) => {
      v.splice(index, 1);
      return v;
    });

    this.queryIndex.set(Math.max(index - 1, 0));
  }

  async saveCurrentQuery(): Promise<void> {
    const query = this.queries()[this.queryIndex()];
    if (!query) return;

    const result = await this.saveQuery(query, this.queryIndex());
    if (!result.success) this.QuerySaveError(result);
  }

  async saveQuery(query: SqeletonOpenedQuery, index: number): Promise<ICommandResult> {
    if (!query.filePath) return await this.saveQueryAs(query, index); // send to saveQueryAs...

    await Fs.writeFile(query.filePath, textToBlob(query.content));

    this.queries.update((v) => {
      if (v[index]) v[index].hasChanges = false;
      return v;
    });

    return CommandResult.Ok();
  }

  async saveQueryAs(query: SqeletonOpenedQuery, index: number): Promise<ICommandResult> {
    try {
      const [path] = await Daemon.files!.LoadSaveDialog({
        title: "Choose where to save this query",
        icon: "SqeletonIcon",
        isSave: true,
        extensions: [".sql"],
      });

      if (!path) return CommandResult.Error("");

      query.filePath = path;

      return await this.saveQuery(query, index); // ...and send back to saveQuery
    } catch (e: any) {
      return CommandResult.Error(`${e?.message ?? e}`);
    }
  }

  async openQuery(): Promise<void> {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Select an SQL file to open",
      icon: "SqeletonIcon",
      startDir: UserPaths.Documents,
      extensions: [".sql"],
    });

    if (!path) return;

    await this.readQuery(path);
  }

  async readQuery(path: string): Promise<void> {
    const content = await Fs.readFile(path);
    if (!content) {
      this.QueryReadError(path);
      return;
    }

    this.openEditor(arrayBufferToText(content), path);
  }

  deleteQuery(index = this.queryIndex()) {
    this.queries.update((v) => {
      v.splice(index, 1);
      return v;
    });
  }

  async tableToSql(table: SqlTable, pretty = true, dropFirst = false): Promise<ICommandResult<string>> {
    const items = (await this.executeSql(`SELECT * FROM ${table.name} WHERE 1;`, true, true))?.[0];

    if (!items) return CommandResult.Error("Didn't find any items");

    let result = ``;
    const delimiter = pretty ? ", " : ",";
    const nl = pretty ? "\n" : "";

    if (dropFirst) result += `DROP TABLE IF EXISTS ${table.name};${nl}`;

    const columns = Object.keys(items[0]).join(delimiter);

    result += `${table.sql}${table.sql.endsWith(";") ? "" : ";"}${nl}${nl}INSERT INTO ${table.name} (${columns}) VALUES${nl}`;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      let columns: string[] = [];
      result += `  (`;
      const values = Object.values(item);

      for (const value of values) {
        switch (typeof value) {
          case "number":
            columns.push(`${value}`);
            break;
          case "string":
          default:
            columns.push(`'${value}'`);
            break;
        }
      }
      result += `${columns.join(delimiter)})${items.length - 1 <= i ? ";" : ","}${nl}`;
    }

    return CommandResult.Ok(result);
  }

  async hasSyntaxError(input: string) {
    const result = this.tempDb?.exec(input);
    this.tempDb?.reset();
    return typeof result === "string" && result?.includes("syntax");
  }

  async waitForAvailable() {
    return new Promise<void>(async (r) => {
      if (!this.busy) r();
      await Sleep(1);
    });
  }

  //#region MESSAGES

  dropTableAck(table: string) {
    MessageBox(
      {
        title: "Are you sure?",
        message:
          "You are about to drop a table from this database. This is an action you cannot revert without discarding all changes made to the database. Are you sure you want to continue?",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Drop",
            action: async () => {
              await this.executeSql(`DROP TABLE IF EXISTS ${table};`, true, true);
              this.updateTableList();
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  ExistingConnectionError() {
    MessageBox(
      {
        title: "Existing connection",
        message: "Sqeleton is already connected to a file. To open another file, close the existing connection first.",
        buttons: [BTN_OKAY_SUG],
        image: "SqeletonIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  DbOpenError(e: string) {
    MessageBox(
      {
        title: "Failed to open database",
        message: `Sqeleton was unable to open this database. ${e}`,
        buttons: [BTN_OKAY_SUG],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }

  TablesUpdateError(e: string) {
    MessageBox(
      {
        title: "Failed to update tables",
        message: `Sqeleton was unable to update the sidebar table listing. ${e}`,
        buttons: [
          { caption: "Ignore", action: () => {} },
          {
            caption: "Retry",
            action: () => {
              this.updateTableList();
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
        image: "WarningIcon",
      },
      this.pid,
      true
    );
  }

  QuerySaveError(result: ICommandResult) {
    MessageBox(
      {
        title: "Failed to save query",
        message: `An error occurred while attempting to save the query. ${result.errorMessage ?? "Unknown failure."}`,
        buttons: [BTN_OKAY_SUG],
        sound: "arcos.dialog.error",
        image: "ErrorIcon",
      },
      this.pid,
      true
    );
  }

  QueryReadError(path: string) {
    MessageBox(
      {
        title: "Failed to read query",
        message: `An error occurred while attempting to read a query from disk.<br><br>${path}`,
        buttons: [BTN_OKAY_SUG],
        sound: "arcos.dialog.error",
        image: "ErrorIcon",
      },
      this.pid,
      true
    );
  }

  //#endregion
}
