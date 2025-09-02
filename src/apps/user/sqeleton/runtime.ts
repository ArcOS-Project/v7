import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { SqeletonIcon } from "$ts/images/apps";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { SqlInterfaceProcess } from "$ts/sql";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class SqeletonRuntime extends AppProcess {
  openedFile = Store<string>("");
  _intf = Store<SqlInterfaceProcess | undefined>();
  sqlCode = Store<string>("");
  errors = Store<string[]>([]);

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
      this.readFile(path);
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
      process.pid,
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
        sound: "arcos.dialog.warning",
      },
      process.pid,
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
}
