export interface AppKeyCombination {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key?: string;
  action(proc: any): void;
  global?: boolean;
}

export type AppKeyCombinations = AppKeyCombination[];
