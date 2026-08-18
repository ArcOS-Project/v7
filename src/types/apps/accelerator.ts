import type { MaybePromise } from "$types/shared/common";

// !tpa
export interface AppKeyCombination {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key?: string;
  action(proc: any, event: KeyboardEvent): MaybePromise<void>;
  global?: boolean;
}

export type AppKeyCombinations = AppKeyCombination[];
// !endtpa
