import { tryJsonParse } from "$ts/json";
import type { TerminalCommand } from "$types/terminal";

export const SpawnCommand: TerminalCommand = {
  keyword: "spawn",
  async exec(term, flags, argv) {
    const id = argv.shift();

    argv = argv.map(tryJsonParse);

    if (!id) {
      term.Error("missing app ID for _spawnApp call");
      return 1;
    }

    return (await term.daemon?.spawnApp(id, term.daemon?.pid, ...argv)) ? 0 : 1;
  },
  description: "Spawn an app with specified arguments",
};
