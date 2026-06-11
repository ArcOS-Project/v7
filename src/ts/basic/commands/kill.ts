import { Stack } from "$ts/env";
import { ProcessKillResultCaptions } from "$ts/kernel/mods/stack/process/store";
import { BasicCommand } from "../engine/command";

export class KillCommand extends BasicCommand {
  static keyword = "kill";

  async execute(line: string): Promise<string | undefined> {
    
    const PID = +(await this.interpreter.replaceVariables(line.split(" ")[0].trim()));
    if (!PID) return "PID is required for KILL";

    const result = await Stack.kill(PID);
    if (result !== "success") this.interpreter.error(ProcessKillResultCaptions[result]);

    return;
  }
}
