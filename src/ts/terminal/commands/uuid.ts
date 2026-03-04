import type { IArcTerminal } from "$interfaces/terminal";
import { UUID } from "$ts/util/uuid";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class UuidCommand extends TerminalProcess {
  static keyword = "uuid";
  static description = "Generate a random UUID";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  protected async main(_: IArcTerminal, flags: Arguments): Promise<number> {
    const copy = flags.c || flags.copy;
    const uuid = UUID();

    if (copy) await navigator.clipboard.writeText(uuid);
    this.rl?.println(uuid);

    return 0;
  }

  //#endregion
}
