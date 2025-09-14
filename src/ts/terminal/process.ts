import { Process } from "$ts/process/instance";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from ".";

export class TerminalProcess extends Process {
  public static keyword: string;
  public static description: string;
  public static hidden = false;
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
    const result = await this.main(term, flags, argv);

    await this.killSelf();

    return result;
  }
}
