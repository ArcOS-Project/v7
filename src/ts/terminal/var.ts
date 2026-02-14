import type { IEnvironment } from "$interfaces/kernel";
import type { IArcTerminal, IArcTermVariables } from "$interfaces/terminal";
import { getKMod } from "$ts/env";
import type { StaticVariableStore, Variable, VariableStore } from "$types/terminal";
import { getArcTermStore } from "./var/store";

export class ArcTermVariables implements IArcTermVariables {
  term: IArcTerminal;

  private store: VariableStore = {};

  constructor(t: IArcTerminal) {
    this.term = t;
    this.store = getArcTermStore(t);
  }

  getAll(): StaticVariableStore {
    const result: StaticVariableStore = {};
    const entries = Object.entries(this.store);

    for (const [key, variable] of entries) {
      const value = this.get(key);
      const ro = variable.readOnly;

      result[key] = { value, readOnly: ro };
    }

    return result;
  }

  get(key: string) {
    if (!this.store[key]) return key;

    return this.store[key].get();
  }

  async set(key: string, value: string) {
    if (!this.store[key]) {
      const variable: Variable = {
        get: () => variable.value,
        set: (v) => (variable.value = v),
        readOnly: false,
        canDelete: true,
        value,
      };

      this.store[key] = variable;

      return true;
    }

    if (this.store[key].readOnly) return false;

    const variable = this.store[key];

    if (!variable) return false;

    await variable.set?.(value);

    return true;
  }

  async delete(key: string) {
    if (!this.store[key] || this.store[key].readOnly) return false;

    await this.set(key, "");

    return true;
  }

  replace(str: string) {
    const all = this.getAll();
    const envVars = getKMod<IEnvironment>("env").getAll();

    for (const key in envVars) {
      all[`$${key}`] = {
        value: envVars[key],
        readOnly: true,
      };
    }

    for (const key in all) {
      const value = all[key]?.value;

      if (!value) continue;

      str = str.replaceAll(`$${key}`, value);
    }

    return str;

    // const variables = this.parseInlineNames(str);

    // if (!variables.length) return str;

    // for (const variable of variables) {
    //   const part = `$${variable}`;
    //   const value = this.get(variable);

    //   str = str.replace(part, value == variable && part ? part : value || "");
    // }

    // return str;
  }

  private parseInlineNames(str: string): string[] {
    const regex = /\$([a-zA-Z_][a-zA-Z0-9_]*|\$)/g;
    const matches: string[] = [];

    let match: RegExpExecArray | null;

    while ((match = regex.exec(str))) {
      matches.push(match[1]);
    }

    return matches;
  }
}
