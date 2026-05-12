import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { SysDispatch } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import type { Arguments } from "$types/terminal";

export class TerminalProcess extends Process {
  public static keyword: string;
  public static description: string;
  public static hidden = false;
  public static allowInterrupt = false;
  protected term?: IArcTerminal;
  protected flags?: Arguments;
  protected argv?: string[];
  private exitCode: number = 0;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
    this.name = "TerminalProcess";

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    return 0;
  }

  public async _main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<any> {
    this.term = term;
    this.flags = flags;
    this.argv = argv;

    const result = await new Promise((r) => {
      this.main(term, flags, argv).then((result) => r(result));

      const eventId = SysDispatch.subscribe<[number]>("proc-kill", ([pid]) => {
        if (pid === this.pid) {
          SysDispatch.unsubscribeId("proc-kill", eventId);
          r(0);
        }
      });
    });

    await this.killSelf();

    return result;
  }
}
