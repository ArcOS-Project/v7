export interface AppKeyCombination {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key?: string;
  action(proc: any, event: KeyboardEvent): void;
  global?: boolean;
}

export type AppKeyCombinations = AppKeyCombination[];
