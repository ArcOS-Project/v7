import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import initSqlJs from "sql.js";

export class SqlInterfaceProcess extends Process {
  private filePath: string;
  private sql?: initSqlJs.SqlJsStatic;
  public db?: initSqlJs.Database;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, path: string) {
    super(handler, pid, parentPid);

    this.filePath = path;
  }

  async start() {
    this.sql = await initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });
    await this.initialize();
  }

  async initialize() {
    try {
      await this.readFile();
    } catch {
      this.db = new this.sql!.Database();
      await this.writeFile();
    }
  }

  async readFile() {
    const ab = await this.fs.readFile(this.filePath);

    if (!ab) throw new Error("Failed to read SQL: file not found");

    await this.requestFileLock(this.filePath);

    this.db = new this.sql!.Database(new Uint8Array(ab));

    console.log(this.db);
  }

  async writeFile() {
    const ab = this.db?.export() as Uint8Array<ArrayBuffer>;

    if (!ab) return;

    await this.fs.writeFile(this.filePath, new Blob([ab]));
  }

  async stop() {
    await this.unlockFile(this.filePath);
  }
}
