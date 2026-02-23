import type { IShellRuntime } from "$interfaces/shell";
import type { IArcTerminal } from "$interfaces/terminal";
import { Env, Stack } from "$ts/env";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { SelectionList } from "../select";

export class FindCommand extends TerminalProcess {
  public static keyword = "find";
  public static description = "Find files, folders and shortcuts in ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const query = argv.join(" ");
    const shellPid = +Env.get("shell_pid");
    const shellProc = Stack.getProcess<IShellRuntime>(shellPid);

    if (!query) {
      term.Info("What do you want me to search for?");
      return 1;
    }

    if (!shellPid || !shellProc) {
      term.Error("shell not running!");
      return 1;
    }

    const results = ((await shellProc.arcFind?.Search(query)) || []).map((r) => r.item);

    if (!results.length) {
      term.Warning("Didn't find anything! Try changing your search query.");
      return 1;
    }

    results.splice(6);

    const selection = new SelectionList(term.term, [
      "(Cancel)",
      ...results.map((r) => `${r.caption.padEnd(30, " ")} - ${r.description || "No description"}`),
    ]);

    await selection.show();
    const index = selection.selectedIndex;

    if (index === 0) return 0;

    const result = results[index - 1];

    await result.action(result);

    return 0;
  }
}
