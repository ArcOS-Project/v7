import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { ArcScriptEngine } from "$ts/lang";
import { join } from "$ts/util/fs";
import type { Arguments } from "$types/terminal";
import { BRRED, RESET } from "../colors";
import { TerminalProcess } from "../process";

export class RunCommand extends TerminalProcess {
  static keyword = "run";
  static description = "Run an ArcOS script file";

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const path = flags.path;

    if (!path) {
      term.Error("Missing --path to run.");
      return 1;
    }

    try {
      const result = await ArcScriptEngine.ExecuteFile(join(`${term.path}`, path as string), term.pid, {
        stdout: (m) => term.rl?.print(m),
        stderr: (m) => term.rl?.print(`${BRRED}${m}${RESET}`),
        execCommand: (name, argv) => {
          term.Info(name);
        },
      });

      if (!result.success) {
        term.Error(result.errorMessage ?? "Unknown error");
        return 1;
      }

      return 0;
    } catch (e) {
      term.Error(`${e}`);
      return 1;
    }
  }
}
