import type { TerminalCommand } from "$types/terminal";

export const RmCommand: TerminalCommand = {
  keyword: "rm",
  async exec(term, flags, argv) {
    const recursive = flags.recursive || flags.r;
    const name = argv.join(" ");
    if (!name) {
      term.Error("Missing file or folder name");
      return 1;
    }
    try {
      const dirContents = await term.readDir(name);
      if (dirContents && !recursive) {
        term.Error(`-r omitted: not deleting directory '${name}'.`);
        return 1;
      }
    } catch {}

    const result = await term.deleteItem(name);

    return result ? 0 : 1;
  },
  description: "Delete the specified file or folder",
};
