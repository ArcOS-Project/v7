import { SysDispatch } from "$ts/env";
import { ProcessWithPermissions } from "$ts/permissions/process";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from ".";

export class TerminalProcess extends ProcessWithPermissions {
  public static keyword: string;
  public static description: string;
  public static hidden = false;
  public static allowInterrupt = false;
  protected term?: ArcTerminal;
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

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    return 0;
  }

  public async _main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<any> {
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
