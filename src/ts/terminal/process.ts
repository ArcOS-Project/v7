import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from ".";

export class TerminalProcess extends Process {
  public static keyword: string;
  public static description: string;
  private exitCode: number = 0;

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    return 0;
  }

  public async _main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<any> {
    const result = await this.main(term, flags, argv);

    await this.killSelf();

    return result;
  }
}
