import type { IArcTerminal, ITerminalProcess } from "$interfaces/IArcTerminal";
import { Daemon } from "$ts/env";
import { setJsonHierarchy } from "$ts/util/hierarchy";
import { tryJsonParse } from "$ts/util/json";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class SudCommand extends TerminalProcess implements ITerminalProcess {
  static keyword = "sud";
  static description = "Set a user preference";

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const input = argv.shift();
    if (!input) return 1;

    const value = tryJsonParse(argv.join(" "));

    Daemon.preferences.update((v) => {
      setJsonHierarchy(v, input, value);
      return v;
    });

    return 0;
  }
}
