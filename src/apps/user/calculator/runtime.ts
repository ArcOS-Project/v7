import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";
import { CalculatorStore } from "./store";
import type { CalculatorKey, CalculatorKeys, CalculatorOverrides } from "./types";

export class CalculatorRuntime extends AppProcess {
  public Value = Store<string>("");
  public Store = new CalculatorStore();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.keys = this.compileKeys(this.Store.AllowedKeys, this.Store.Overrides);
  }

  async render(args: RenderArgs) {
    this.acceleratorStore.push(...this.generateKeyboardShortcuts());
  }

  public keys: CalculatorKeys = [];
  public Functions: { [key: string]: [string, () => void, string] } = {
    // Special functions used
    "%%C": ["C", () => this.Value.set(""), "clear"],
    "%%E": ["=", () => this.evaluate(), "process"],
  };

  private eval(expr: string) {
    // Evaluate the user input safely
    try {
      return Function(`'use strict'; return (${expr})`)();
    } catch {
      return expr;
    }
  }

  // Compile keypad keys by merging allowed keys and their overrides for the Calculator UI
  private compileKeys(keys: string[], overrides: CalculatorOverrides): CalculatorKeys {
    const value: CalculatorKeys = [];

    for (let i = 0; i < keys.length; i++) {
      let v: CalculatorKey = [null, null];

      v[0] = overrides[keys[i]] || keys[i];
      v[1] = keys[i];

      value.push(v);
    }

    return value;
  }

  // Calculate the calculator value and set it to itself
  public evaluate(): string | false {
    const value = this.Value.get();

    if (!this.isValid(value)) return false;

    const evaluated = this.eval(value);

    this.Value.set(evaluated);

    return value;
  }

  // Tests the current value plus the new input to evaluate if it's valid.
  private isValid(input: string) {
    if (!input || typeof input !== "string") return;

    // %% represents keys that have a function other than adding to the value
    if (input.startsWith("%%")) return false;

    for (let i = 0; i < input.length; i++) {
      if (this.Store.AllowedKeys.includes(input[i])) continue;

      return false;
    }

    return true;
  }

  // Generate a list of keyboard shortcuts from keys to pass to the Calculator AppData.
  generateKeyboardShortcuts() {
    let result: AppKeyCombinations = [];

    for (const shortcut of this.Store.Shortcuts) {
      result.push({
        key: shortcut,
        action: () => this.processKey(shortcut),
      });
    }

    return [...result, { key: "enter", action: () => this.evaluate() }, { key: "escape", action: () => this.Value.set("") }];
  }

  // Processes incoming key inputs from either the window
  // or the AppShortcuts (Calculator Events)
  processKey(key: string) {
    if (!this.isValid(key)) return false;

    // Note: Added the zero to prevent stuff like "+" at the end,
    // causing it to return invalid.
    const newValue = `${this.Value.get()}${key}0`;

    if (!this.validate(newValue)) {
      return false;
    }

    this.Value.set(this.Value.get() + key);
  }

  public validate(expr: string) {
    const re = /(?:(?:^|[-+_*%\/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

    return re.test(expr);
  }
}
