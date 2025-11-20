import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack } from "$ts/env";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { SqlInterfaceProcess } from "$ts/sql";
import { getItemNameFromPath } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { SqeletonError, SqeletonHistoryItem, SqeletonTabs, SqlTable, SqlTableColumn } from "./types";

export class SqeletonRuntime extends AppProcess {
  openedFile = Store<string>("");
  openedFileName = Store<string>("");
  _intf = Store<SqlInterfaceProcess | undefined>();
  queries = Store<string[]>([""]);
  queryIndex = Store<number>(0);
  errors = Store<SqeletonError[]>([]);
  queryHistory = Store<SqeletonHistoryItem[]>([]);
  working = Store<boolean>(false);
  errored = Store<boolean>(false);
  result = Store<Record<string, any>[][] | undefined>();
  tables = Store<SqlTable[]>(); // TODO: dedicated type
  busy = false;
  currentTab = Store<string>("result");
  syntaxError = Store<boolean>(false);
  tempDbPath = `T:/${UUID()}.db.tmp`;
  tempDb?: SqlInterfaceProcess;
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

  get Interface(): SqlInterfaceProcess | undefined {
    return this._intf();
  }

  set Interface(value: SqlInterfaceProcess | undefined) {
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
    this.tempDb = await KernelStack().spawn(
      SqlInterfaceProcess,
      undefined,
      this.userDaemon?.userInfo?._id,
      this.pid,
      this.tempDbPath
    );
  }

  async stop() {
    await this.fs.deleteItem(this.tempDbPath);
  }

  async render({ path }: { path?: string }) {
    if (path) {
      await this.readFile(path);
    }

    await import("$css/apps/user/sqeleton.css");
  }

  //#endregion

  async readFile(path: string) {
    if (this.openedFile()) {
      this.ExistingConnectionError();
      return;
    }

    try {
      this.Interface = await KernelStack().spawn(SqlInterfaceProcess, undefined, this.userDaemon?.userInfo?._id, this.pid, path);

      if (!this.Interface?.db) throw "Failed to open database. The resource might be locked.";

      this.updateTables();
      this.openedFile.set(path);
      this.openedFileName.set(getItemNameFromPath(path));
    } catch (e) {
      this.DbOpenError(`${e}`);
    }
  }

  async openFile() {
    const [path] = await this.userDaemon!.files!.LoadSaveDialog({
      title: "Select a database to open",
      icon: "SqeletonIcon",
      startDir: UserPaths.Documents,
      extensions: [".db"],
    });

    if (!path) return;

    this.readFile(path);
  }

  async newFile() {
    const [path] = await this.userDaemon!.files!.LoadSaveDialog({
      title: "Choose where to save the new database",
      icon: "SqeletonIcon",
      startDir: UserPaths.Documents,
      extensions: [".db"],
      isSave: true,
      saveName: "database",
    });

    if (!path) return;

    const db = await KernelStack().spawn<SqlInterfaceProcess>(
      SqlInterfaceProcess,
      undefined,
      this.userDaemon?.userInfo?._id,
      this.pid,
      path
    );
    await db?.writeFile();
    await db?.killSelf();

    this.readFile(path);
  }

  async execute(code: string, simple = false, system = false) {
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
        this.soundBus.playSound("arcos.dialog.error");
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

    if (!simple) this.updateTables();

    this.working.set(false);
    this.busy = false;
    return result;
  }

  async updateTables() {
    const query = await this.execute(
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
      const columns = await this.execute(columnQueryStr, true, true);

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

  newQuery(value = "") {
    this.queryIndex.set(this.queries().length);
    this.queries.update((v) => {
      v[this.queryIndex()] = value;
      return v;
    });
  }

  openOrCreateQuery(value: string) {
    const index = this.queries().indexOf(value);

    if (index < 0) return this.newQuery(value);

    this.queryIndex.set(index);
  }

  deleteQuery(index = this.queryIndex()) {
    this.queries.update((v) => {
      v.splice(index, 1);
      return v;
    });
  }

  async tableToSql(table: SqlTable, pretty = true, dropFirst = false) {
    const items = (await this.execute(`SELECT * FROM ${table.name} WHERE 1;`, true, true))?.[0];
    if (!items) return undefined;

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

    return result;
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

  dropTableInteractively(table: string) {
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
              await this.execute(`DROP TABLE IF EXISTS ${table};`, true, true);
              this.updateTables();
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
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
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
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
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
              this.updateTables();
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

  //#endregion
}
