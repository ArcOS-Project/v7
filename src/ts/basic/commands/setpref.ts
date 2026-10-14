import { Daemon } from "$ts/env";
import { setJsonHierarchy } from "$ts/util/hierarchy";
import { BasicCommand } from "../engine/command";

export class SetprefCommand extends BasicCommand {
  static keyword: string = "setpref";

  async execute(line: string): Promise<string | undefined> {
    const [rawHierarchy, ...values] = await this.interpreter.getStrings(line, false);

    if (!rawHierarchy) {
      return "No hierarchy found. Did you wrap it in a string?"
    }

    if (values.length !== 1) {
      return "SETPREF takes exactly one value";
    }

    const hierarchy = await this.interpreter.replaceVariables(rawHierarchy, false);
    const value = await this.interpreter.replaceVariables(values[0], true);

    Daemon.preferences.update((v) => {
      setJsonHierarchy(v, hierarchy, value);
      return v;
    });

    return undefined;
  }
}
