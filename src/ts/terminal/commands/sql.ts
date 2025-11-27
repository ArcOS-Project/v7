import { Fs, Stack } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { SqlInterfaceProcess } from "$ts/sql";
import { join } from "$ts/util/fs";
import type { Arguments } from "$types/terminal";
import type { QueryExecResult } from "sql.js";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { arrayBufferToText } from "$ts/util/convert";

export class SqlCommand extends TerminalProcess {
  public static keyword: string = "sql";
  public static description: string = "Interact with SQLite databases";
  #iface?: SqlInterfaceProcess;

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const file = flags.file;
    const newFile = flags.new;

    if (!file || typeof file !== "string") {
      term.Error("Missing input file");
      return 1;
    }

    const path = join(term.path, file);
    const stat = await Fs.stat(path);

    if (!stat && !newFile) {
      term.Error("File not found or read error. Use --new to create it.");
      return 1;
    }

    const proc = await Stack.spawn<SqlInterfaceProcess>(SqlInterfaceProcess, undefined, Daemon?.userInfo?._id, this.pid, path);
    if (newFile) {
      await proc?.writeFile();
    }

    this.#iface = proc;

    term.rl?.println(`\nArcOS SQLite monitor`);
    term.rl?.println(`SQLInterfaceProcess revision ${SqlInterfaceProcess.REVISION}\n`);
    term.rl?.println(`Ready.\n`);

    const result = await this.mainloop();

    return result;
  }

  async mainloop(): Promise<number> {
    let input = await this.term!.rl!.read("SQL> ");
    this.term?.rl?.println("");
    let proceedExecution = false;

    if (input.startsWith("load ")) {
      const filename = join(this.term?.path!, input.replace("load ", "./"));
      const content = arrayBufferToText((await Fs.readFile(filename, undefined)) || new ArrayBuffer());

      if (!content) {
        this.term?.rl?.println("Input file could not be read.");
        return await this.mainloop();
      }

      input = content;
    }

    switch (input?.toLowerCase()) {
      case "q":
        return 0;

      case "h":
        this.term?.rl?.println("help!");
        return await this.mainloop();

      case "w":
        this.term?.rl?.println("Saving database...");
        await this.#iface?.writeFile();

        this.term?.rl?.println("Done!");
        return await this.mainloop();

      default:
        proceedExecution = true;
    }

    if (proceedExecution) {
      const result = this.#iface!.exec(input);
      this.processResult(result);
    }

    return await this.mainloop();
  }

  processResult(result: Record<string, any>[][] | string) {
    if (typeof result === "string") {
      this.term?.rl?.println(result);
    } else {
      const parsed = SqlInterfaceProcess.sqlResultToObject(result);
      this.term?.rl?.println(JSON.stringify(parsed, null, 2));
    }
  }
}
