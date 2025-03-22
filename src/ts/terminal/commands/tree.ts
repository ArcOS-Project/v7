import { join } from "$ts/fs/util";
import { Plural } from "$ts/util";
import type { RecursiveDirectory } from "$types/fs";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, BRGREEN, RESET } from "../store";

export const TreeCommand: TerminalCommand = {
  keyword: "tree",
  async exec(term, flags, argv) {
    const noColor = flags["no-color"];
    const resolveShortcuts = flags.shortcuts || flags.s;
    const filename = argv.join(" ");
    const tree = await term.tree(filename);

    if (!tree) {
      term.Error(`Failed to get tree! The current drive might not support this operation.`);

      return 1;
    }

    const accent = noColor ? RESET : BRBLUE;
    const shortcutArrow = noColor ? `↗` : `${BRGREEN}↗${RESET}`;
    const counts = { dirs: 0, files: 0 };

    function walk(directory: RecursiveDirectory, prefix: string) {
      const { dirs, files, shortcuts } = directory.children;
      const items = [...dirs.map((d) => ({ ...d, isDir: true })), ...files];

      for (let i = 0; i < items.length; i++) {
        const file = items[i];
        const isDir = (file as any).isDir;
        if (file.name.charAt(0) != ".") {
          const name =
            resolveShortcuts && !isDir && shortcuts[file.name]
              ? `${shortcutArrow} ${shortcuts[file.name].name}`
              : `${isDir ? accent : RESET}${file.name}${isDir ? "/" : ""}${RESET}`;
          const parts = i == items.length - 1 ? ["└── ", "    "] : ["├── ", "│   "];

          term.rl?.println(`${prefix}${parts[0]}${name}`);

          if (isDir) {
            counts.dirs += 1;
            walk(file as RecursiveDirectory, `${prefix}${parts[1]}`);
          } else {
            counts.files += 1;
          }
        }
      }
    }
    term.rl?.println(
      `\n Reading drive ${term.drive?.label}\n Drive UUID is ${term.drive?.uuid}\n\n Tree of ${join(term.path, filename)}\n`
    );
    term.rl?.println(`${accent}${filename || "."}${RESET}`);

    walk(
      {
        name: filename || ".",
        dateCreated: new Date(),
        dateModified: new Date(),
        children: {
          dirs: tree.dirs,
          files: tree.files,
          shortcuts: tree.shortcuts,
        },
        itemId: "none",
      },
      ""
    );

    term.rl?.println(`\r\n${counts.dirs} ${Plural("folder", counts.dirs)}, ${counts.files} ${Plural("file", counts.files)}`);

    return 0;
  },
  description: "Print a recursive tree of the current or specified folder",
};
