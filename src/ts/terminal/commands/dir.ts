import { formatBytes, join } from "$ts/fs/util";
import { Truncate } from "$ts/util";
import type { TerminalCommand } from "$types/terminal";
import dayjs from "dayjs";
import { BRBLUE, BRGREEN, RESET } from "../store";

export const DirCommand: TerminalCommand = {
  keyword: "dir",
  async exec(term, flags, argv) {
    const dir = argv[0] || "";

    try {
      const contents = await term.readDir(dir);

      if (!contents) {
        throw "";
      }

      const MAXLEN = 32;
      const SIZELEN = 8;

      term.rl?.println(
        `\n Reading drive ${term.drive?.label}\n Drive UUID is ${term.drive?.uuid}\n\n Directory of ${join(term.path, dir)}\n`
      );

      for (const dir of contents.dirs) {
        const date = dayjs(dir.dateModified).format("MMM MM YYYY, HH:mm");
        const name = Truncate(dir.name + "/", MAXLEN).padEnd(MAXLEN, " ");
        const size = "<DIR>".padEnd(SIZELEN, " ");

        term.rl?.println(`${date} ${size}    ${BRBLUE}${name}${RESET}`);
      }

      for (const file of contents.files) {
        const shortcut = contents.shortcuts[file.name];
        const date = dayjs(file.dateModified).format("MMM MM YYYY, HH:mm");
        const name = Truncate(shortcut ? shortcut.name : file.name, MAXLEN).padEnd(MAXLEN, " ");
        const size = Truncate(formatBytes(file.size), SIZELEN).padEnd(SIZELEN, " ");

        term.rl?.println(`${date} ${size} ${shortcut ? ` ${BRGREEN}↗${RESET}` : "  "} ${BRBLUE}${name}${RESET}`);
      }

      term.rl?.println("");

      return 0;
    } catch {
      term.Error(`No such directory '${join(term.path, dir)}'`);

      return 1;
    }
  },
  description: "List the contents of the current or specified directory",
};
