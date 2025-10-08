import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class TouchCommand extends TerminalProcess {
  public static keyword: string = "touch";
  public static description: string = "Creates an empty file with the specified name.";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const names = argv;

    for (const name of names) await term.writeFile(name, new Blob());
    return 0;
  }
}
