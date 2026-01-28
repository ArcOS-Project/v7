import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class InputCommand extends TerminalProcess {
  static keyword: string = "input";
  static description: string = "Input a string from the user";
  static allowInterrupt: boolean = true;

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const target = argv[0];
    const prompt = `${flags.prompt || "?"}`;
    const validation = flags.validation;
    const validationError = `${flags.validationError || "Try again"}`;

    const result = await term.rl?.read(prompt);

    if (!result) return 0;
    console.log(validation);

    if (Array.isArray(validation) && validation.length === 2 && validation[1].match(/^[gmJAUsxi]+$/g)) {
      const [regexStr, flags] = validation;

      if (!result.match(new RegExp(regexStr, flags))) {
        await term.Error(validationError);

        await term.processLine(term.lastLine);
        return -256;
      }
    }

    term.var?.set(target, result);

    return 0;
  }
}
