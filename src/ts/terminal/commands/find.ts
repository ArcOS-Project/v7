import { ShellRuntime } from "$apps/components/shell/runtime";
import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { SelectionList } from "../select";

export class FindCommand extends TerminalProcess {
  public static keyword = "find";
  public static description = "Find files, folders and shortcuts in ArcOS";

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const query = argv.join(" ");
    const shellPid = +term.env.get("shell_pid");
    const shellProc = term.handler.getProcess<ShellRuntime>(shellPid);

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
