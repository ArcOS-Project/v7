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
    (() =>
      (() => {
        throw new Error("asdfasdfadsf");
      })())();
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
          },
        ],
        sound: "arcos.dialog.warning",
        image: WarningIcon,
      },
      this.pid,
      true
    );
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
  }

  deleteQuery(index = this.queryIndex()) {
    this.queries.update((v) => {
      v.splice(index, 1);
      return v;
    });
  }
}
