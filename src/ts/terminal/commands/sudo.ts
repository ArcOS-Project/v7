import type { IArcTerminal } from "$interfaces/terminal";
import { Stack } from "$ts/env";
import { Permissions } from "$ts/permissions";
import { LoginUser } from "$ts/server/user/auth";
import { Daemon } from "$ts/server/user/daemon";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { TerminalCommandStore } from "../store";

export class SudoCommand extends TerminalProcess {
  public static keyword: string = "sudo";
  public static description: string = "Execute a command with superuser privileges";
  private retryCount = 0;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    if (Permissions.hasSudo(term)) return await this.execute(term, argv);

    while (this.retryCount < 3) {
      const password = await term.rl?.read(`[sudo] password for ${Daemon.username}: `, true);

      const token = await LoginUser(Daemon?.username!, password!);

      if (!token) {
        term.rl?.println("Sorry, try again.");

        this.retryCount++;
      }

      await Daemon?.account?.discontinueToken(token);

      Permissions.grantSudo(term);

      return await this.execute(term, argv);
    }

    term.rl?.println(`sudo: ${this.retryCount} incorrect password attempts.`);

    return 1;
  }

  //#endregion

  async execute(term: IArcTerminal, parentArgv: string[]) {
    const text = parentArgv.join(" ");
    const str = term.var?.replace(text.trim()) || "";
    const [flags, args] = term.parseFlags(str);
    const argv = args.split(" ");
    const cmd = text.split(" ")[0];

    term.window?.windowTitle.set(`ArcTerm - ${cmd} ${term.path}`);

    argv.shift();

    if (cmd.endsWith(":")) {
      await term.changeDirectory(`${cmd}/`);

      return 0;
    } else {
      const command = TerminalCommandStore.filter((a) => a.keyword === cmd)[0];

      if (!command) {
        term.Error("Command not found.");
        term.lastCommandErrored = true;
      } else {
        const proc = await Stack.spawn<TerminalProcess>(command, undefined, Daemon?.userInfo?._id, this.pid);

        // BUG 68798d6957684017c3e9a085
        if (!proc) {
          term.lastCommandErrored = true;
          return;
        }

        Permissions.grantSudo(proc);

        const result = (await proc?._main(term, flags, argv)) || 0;

        if (result !== 0) term.lastCommandErrored = true;
        if (result <= -128) return term.rl?.dispose();

        return result;
      }
    }
  }
}
