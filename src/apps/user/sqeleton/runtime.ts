import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { SqeletonIcon } from "$ts/images/apps";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { SqlInterfaceProcess } from "$ts/sql";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { SqeletonTabs, SqlTable } from "./types";

export class SqeletonRuntime extends AppProcess {
  openedFile = Store<string>("");
  _intf = Store<SqlInterfaceProcess | undefined>();
  queries = Store<string[]>([""]);
  queryIndex = Store<number>(0);
  errors = Store<string[]>([]);
  queryHistory = Store<string[]>([]);
  working = Store<boolean>(false);
  errored = Store<boolean>(false);
  result = Store<Record<string, any>[][] | undefined>();
  maximizeBottom = Store<boolean>(false);
  tables = Store<SqlTable[]>(); // TODO: dedicated type
  currentTab = Store<string>("result");
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

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: { path?: string }) {
    if (path) {
      await this.readFile(path);
    }
  }

  async readFile(path: string) {
    if (this.openedFile()) {
      this.ExistingConnectionError();
      return;
    }

    try {
      this.Interface = await this.handler.spawn(SqlInterfaceProcess, undefined, this.pid, path);

      if (!this.Interface?.db) throw "Failed to open database. The resource might be locked.";

      this.updateTables();
      this.openedFile.set(path);
    } catch (e) {
      this.DbOpenError(`${e}`);
    }
  }

  async openFile() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Select a database to open",
      icon: SqeletonIcon,
      startDir: UserPaths.Documents,
      extensions: [".db"],
    });

    if (!path) return;

    this.readFile(path);
  }

  async newFile() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose where to save the new database",
      icon: SqeletonIcon,
      startDir: UserPaths.Documents,
      extensions: [".db"],
      isSave: true,
      saveName: "database",
    });

    if (!path) return;

    const db = await this.handler.spawn<SqlInterfaceProcess>(SqlInterfaceProcess, undefined, this.pid, path);
    await db?.writeFile();
    await db?.killSelf();

    this.readFile(path);
  }

  async execute(code: string, simple = false) {
    this.working.set(true);
    this.errored.set(false);

    this.queryHistory.update((v) => {
      v.push(code);
      return v;
    });
    const result = await this.Interface?.exec(code);

    if (typeof result === "string") {
      this.errors.update((v) => {
        v.push(result);
        return v;
      });
      this.errored.set(true);
      this.soundBus.playSound("arcos.dialog.error");
      this.currentTab.set("errors");
    } else if (!simple) {
      this.result.set(result);
    }

    if (!simple) this.updateTables();

    this.working.set(false);
    return result;
  }

  async updateTables() {
    const result = await this.execute(`SELECT * FROM sqlite_master;`, true);

    if (typeof result === "string") {
      this.TablesUpdateError(result as string);
    } else if (!result?.[0]) {
      this.tables.set([]);
    } else {
      this.tables.set(result[0] as SqlTable[]);
    }
  }

  newQuery(value = "") {
    this.queryIndex.set(this.queries().length);
    this.queries.update((v) => {
      v[this.queryIndex()] = value;
      return v;
    });
    this.maximizeBottom.set(false);
  }

  deleteQuery(index = this.queryIndex()) {
    this.queries.update((v) => {
      v.splice(index, 1);
      return v;
    });
  }

  async tableToSql(table: SqlTable, pretty = true, dropFirst = false) {
    const items = (await this.execute(`SELECT * FROM ${table.name} WHERE 1;`))?.[0];
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
            action: () => {
              this.execute(`DROP TABLE IF EXISTS ${table};`);
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
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
        image: SqeletonIcon,
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
        image: ErrorIcon,
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
        image: WarningIcon,
      },
      this.pid,
      true
    );
  }

  //#endregion
}
