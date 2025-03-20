import type { TerminalCommand } from "$types/terminal";

export const OpenCommand: TerminalCommand = {
  keyword: "open",
  async exec(term, flags, argv) {
    const filename = argv.join(" ");
    const shortcuts = Object.entries(term.contents?.shortcuts || {});
    const translated = shortcuts.filter(([_, v]) => v.name === filename).map(([k, v]) => ({ ...v, filename: k }))[0];

    if (translated) {
      await term.daemon?.openFile(term.join(translated.filename), translated);
      return 0;
    } else if (term.contents?.files?.map((f) => f.name)?.includes(filename)) {
      await term.daemon?.openFile(term.join(filename), term.contents?.shortcuts[filename]);
      return 0;
    } else {
      return 1;
    }
  },
  description: "Opens the specified file",
};
