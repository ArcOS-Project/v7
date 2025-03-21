import type { TerminalCommand } from "$types/terminal";

export const MkdirCommand: TerminalCommand = {
  keyword: "mkdir",
  async exec(term, flags, argv) {
    const path = argv.join(" ");

    try {
      const created = await term.createDirectory(path);

      if (!created) throw "";

      return 0;
    } catch {
      term.Error(`Failed to create '${term.join(path)}': write error or conflict.`);
      return 1;
    }
  },
  description: "Create the specified directory",
};
