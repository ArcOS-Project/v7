import type { TerminalCommand } from "$types/terminal";

export const ExploreCommand: TerminalCommand = {
  keyword: "explore",
  async exec(term, flags, argv) {
    const path = argv.join(" ");

    term.daemon?.spawnApp("fileManager", term.pid, path ? term.join(path) : term.path);
    return 0;
  },
  description: "Open a folder in the File manager",
};
