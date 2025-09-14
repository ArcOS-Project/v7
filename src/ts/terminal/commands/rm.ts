import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class RmCommand extends TerminalProcess {
  public static keyword = "rm";
  public static description = "Delete the specified file or folder";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const recursive = flags.recursive || flags.r;
    const name = argv.join(" ");
    if (!name) {
      term.Error("Missing file or folder name");
      return 1;
    }
    try {
      const dirContents = await term.readDir(name);
      if (dirContents && !recursive) {
        term.Error(`-r omitted: not deleting directory '${name}'.`);
        return 1;
      }
    } catch {}

    const result = await term.deleteItem(name);

    return result ? 0 : 1;
  }
}
