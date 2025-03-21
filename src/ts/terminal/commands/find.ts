import { ShellRuntime } from "$apps/components/shell/runtime";
import type { TerminalCommand } from "$types/terminal";
import { SelectionList } from "../select";

export const FindCommand: TerminalCommand = {
  keyword: "find",
  async exec(term, flags, argv) {
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

    const results = (await shellProc.Search(query)).map((r) => r.item);

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
  },
  description: "Find files, folders and shortcuts in ArcOS",
};
