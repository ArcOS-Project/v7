import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class MkdirCommand extends TerminalProcess {
  public static keyword: string = "mkdir";
  public static description: string = "Create the specified directory";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");

    try {
      const created = await term.createDirectory(path);

      if (!created) throw "";

      return 0;
    } catch {
      term.Error(`Failed to create '${term.join(path)}': write error or conflict.`);
      return 1;
    }
  }
}
