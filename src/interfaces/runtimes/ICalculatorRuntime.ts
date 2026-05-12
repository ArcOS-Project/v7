import type { CalculatorKeys, CalculatorOverrides } from "$apps/user/calculator/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { AppKeyCombination } from "$types/accelerator";
import type { ReadableStore } from "$types/writable";

export interface ICalculatorRuntime extends IAppProcess {
  Value: ReadableStore<string>;
  Store: ICalculatorStore;
  keys: CalculatorKeys;
  Functions: {
    [key: string]: [string, () => void, string];
  };

  evaluate(): string | false;
  generateKeyboardShortcuts(): AppKeyCombination[];
  processKey(key: string): false | undefined;
  validate(expr: string): boolean;
}

export interface ICalculatorStore {
  AllowedKeys: string[];
  Shortcuts: string[];
  Overrides: CalculatorOverrides;
  altClasses: string[];
}
