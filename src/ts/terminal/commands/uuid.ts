import type { IArcTerminal } from "$interfaces/terminal";
import { UUID } from "$ts/util/uuid";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class UuidCommand extends TerminalProcess {
  static keyword = "uuid";
  static description = "Generate a random UUID";

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const copy = flags.c || flags.copy;
    const uuid = UUID();

    if (copy) await navigator.clipboard.writeText(uuid);
    term.rl?.println(uuid);

    return 0;
  }
}
