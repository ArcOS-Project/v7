import type { IArcTerminal } from "$interfaces/terminal";
import { Plural } from "$ts/util";
import { join } from "$ts/util/fs";
import type { RecursiveDirectory } from "$types/fs";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLUE, BRGREEN, RESET } from "../store";

export class TreeCommand extends TerminalProcess {
  public static keyword = "tree";
  public static description = "Print a recursive tree of the current or specified folder";
  private resolveShortcuts = false;
  private shortcutArrow = "";
  private counts = { dirs: 0, files: 0 };
  private accent = "";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const noColor = flags["no-color"];
    this.resolveShortcuts = !!(flags.shortcuts || flags.s);
    const filename = argv.join(" ");
    const tree = await term.tree(filename);

    if (!tree) {
      term.Error(`Failed to get tree! The current drive might not support this operation.`);

      return 1;
    }

    this.accent = noColor ? RESET : BRBLUE;
    this.shortcutArrow = noColor ? `↗` : `${BRGREEN}↗${RESET}`;

    term.rl?.println(
      `\n Reading drive ${term.drive?.label}\n Drive UUID is ${term.drive?.uuid}\n\n Tree of ${join(term.path, filename)}\n`
    );
    term.rl?.println(`${this.accent}${filename || "."}${RESET}`);

    this.walk(
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

    this.rl?.println(
      `\r\n${this.counts.dirs} ${Plural("folder", this.counts.dirs)}, ${this.counts.files} ${Plural("file", this.counts.files)}`
    );

    return 0;
  }

  walk(directory: RecursiveDirectory, prefix: string) {
    const { dirs, files, shortcuts } = directory.children;
    const items = [...dirs.map((d) => ({ ...d, isDir: true })), ...files];

    for (let i = 0; i < items.length; i++) {
      const file = items[i];
      const isDir = (file as any).isDir;
      if (file.name.charAt(0) != ".") {
        const name =
          this.resolveShortcuts && !isDir && shortcuts[file.name]
            ? `${this.shortcutArrow} ${shortcuts[file.name].name}`
            : `${isDir ? this.accent : RESET}${file.name}${isDir ? "/" : ""}${RESET}`;
        const parts = i == items.length - 1 ? ["└── ", "    "] : ["├── ", "│   "];

        this.rl?.println(`${prefix}${parts[0]}${name}`);

        if (isDir) {
          this.counts.dirs += 1;
          this.walk(file as RecursiveDirectory, `${prefix}${parts[1]}`);
        } else {
          this.counts.files += 1;
        }
      }
    }
  }
}
