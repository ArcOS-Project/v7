import { Fs } from "$ts/env";
import { Process } from "$ts/process/instance";
import initSqlJs from "sql.js";
import { sqljsResultToJSON } from "./util";

export class SqlInterfaceProcess extends Process {
  private filePath: string;
  #sql?: initSqlJs.SqlJsStatic;
  #db?: initSqlJs.Database;
  public isFresh = false;

  get DB_EXISTS() {
    return !!this.#db;
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, path: string) {
    super(pid, parentPid);

    this.filePath = path;
    this.name = "SqlInterfaceProcess";

    this.setSource(__SOURCE__);
  }

  async start() {
    this.#sql = await initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });
    await this.initialize();
  }

  //#endregion

  reset() {
    if (this._disposed) return;

    this.#db?.close();
    this.#db = new this.#sql!.Database();
    this.isFresh = true;
  }

  async initialize() {
    if (this._disposed) return;
    try {
      await this.readFile();
    } catch {
      this.#db = new this.#sql!.Database();
      await this.writeFile();
      this.isFresh = true;
    }
  }

  async readFile() {
    if (this._disposed) return;

    const ab = await Fs.readFile(this.filePath);

    if (!ab) throw new Error("Failed to read SQL: file not found");

    await this.requestFileLock(this.filePath);

    this.#db = new this.#sql!.Database(new Uint8Array(ab));
  }

  async writeFile() {
    if (this._disposed) return;

    const ab = this.#db?.export() as Uint8Array<ArrayBuffer>;

    if (!ab) return;

    await Fs.writeFile(this.filePath, new Blob([ab]));
  }

  async stop() {
    await this.unlockFile(this.filePath);
    this.#db = undefined;
  }

  exec(sql: string, params?: initSqlJs.BindParams | undefined): Record<string, any>[][] | string {
    if (this._disposed) throw new Error("SqlInterfaceProcess gone");

    try {
      const result = this.#db?.exec(sql, params);

      if (!result) return [];

      return sqljsResultToJSON(result);
    } catch (e) {
      return `${e}`;
    }
  }
}
