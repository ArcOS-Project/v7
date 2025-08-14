import type { FilesystemDrive } from "$ts/fs/drive";
import { formatBytes, join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { FormatLargeNumber, Gap, maxLength, Plural, Truncate } from "$ts/util";
import type { Arguments } from "$types/terminal";
import dayjs from "dayjs";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRGREEN, RESET } from "../store";

export class DirCommand extends TerminalProcess {
  public static keyword = "dir";
  public static description = "List the contents of the current or specified directory";
  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const dir = argv.join(" ") || "";

    try {
      let drive: FilesystemDrive | undefined;
      try {
        drive = dir ? this.fs.getDriveByPath(dir) : term.drive;
      } catch {
        drive = term.drive;
      }

      const contents = await term.readDir(dir);
      const quota = await drive?.quota();

      if (!contents || !quota) {
        throw "";
      }

      const MAXLEN = 32;
      const SIZELEN = 12;

      term.rl?.println(
        `\n Reading drive ${drive?.label}\n Drive UUID is ${drive?.uuid}\n\n Directory of ${join(term.path, dir)}\n`
      );

      for (const dir of contents.dirs) {
        const date = dayjs(dir.dateModified).format("MMM DD YYYY, HH:mm");
        const name = Truncate(dir.name + "/", MAXLEN).padEnd(MAXLEN, " ");
        const size = "<DIR>".padEnd(SIZELEN, " ");

        term.rl?.println(`${date} ${BRBLACK}${size}${RESET}    ${BRBLUE}${name}${RESET}`);
      }

      let totalBytes = 0;

      for (const file of contents.files) {
        const shortcut = contents.shortcuts[file.name];
        const date = dayjs(file.dateModified).format("MMM DD YYYY, HH:mm");
        const name = Truncate(shortcut ? shortcut.name : file.name, MAXLEN).padEnd(MAXLEN, " ");
        const size = Truncate(formatBytes(file.size), SIZELEN).padEnd(SIZELEN, " ");
        totalBytes += file.size;

        term.rl?.println(`${date} ${size} ${shortcut ? ` ${BRGREEN}↗${RESET}` : "  "} ${BRBLUE}${name}${RESET}`);
      }

      const totalFiles = `${contents.files.length} ${Plural("file", contents.files.length)}`;
      const totalFolders = `${contents.dirs.length} ${Plural("folder", contents.dirs.length)}`;
      const byteSize = `${FormatLargeNumber(totalBytes)} bytes     `;
      const freeSize = `${FormatLargeNumber(quota.free)} bytes free`;

      const longestByteLength = maxLength([byteSize, freeSize], 1);
      const longestCountLength = maxLength([totalFiles, totalFolders]);

      term.rl?.println("");
      term.rl?.print(Gap(16));
      term.rl?.println(`${totalFiles.padStart(longestCountLength)} ${byteSize.padStart(longestByteLength)}`);
      term.rl?.print(Gap(16));
      term.rl?.println(`${totalFolders.padStart(longestCountLength)} ${freeSize.padStart(longestByteLength)}\r\n`);

      return 0;
    } catch {
      term.Error(`No such directory or read error on '${join(term.path, dir)}'`);

      return 1;
    }
  }
}
