import type { TerminalCommand } from "$types/terminal";
import { SelectionList } from "../select";

export const TestCommand: TerminalCommand = {
  keyword: "test",
  async exec(term, flags, argv) {
    const items = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    const selectionList = new SelectionList(term.term, items, "Choose an option:");
    const selectedItem = await selectionList.show();

    term.Info(selectedItem || "None");

    return 0;
  },
  description: "test",
};
