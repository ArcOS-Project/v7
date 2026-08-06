import type { IArcTerminal, ITerminalProcess } from "$interfaces/IArcTerminal";
import { Daemon } from "$ts/env";
import { getJsonHierarchy } from "$ts/util/hierarchy";
import { tryJsonStringify } from "$ts/util/json";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class GudCommand extends TerminalProcess implements ITerminalProcess {
  static keyword = "gud";
  static description = "Get a user preference";

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const input = argv[0];

    this.rl?.println(`${tryJsonStringify(getJsonHierarchy(Daemon.preferences(), input), 2)}`);

    return 0;
  }
}
