import type { MaybePromise } from "$types/shared/common";

// !tp

export interface AppKeyboardCombination {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key?: string;
  action(proc: any, event: KeyboardEvent): MaybePromise<any>;
  global?: boolean;
}

export type AppKeyboardCombinations = AppKeyboardCombination[];

// !endtpa
