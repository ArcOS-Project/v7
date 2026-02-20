import type { IAppProcess } from "$interfaces/app";
import type { IProcess } from "$interfaces/process";

export interface AppKeyCombination<T extends IProcess = IAppProcess> {
  alt?: boolean;
  ctrl?: boolean;
  shift?: boolean;
  key?: string;
  action(proc: T, event: KeyboardEvent): void;
  actionKeyUp?(proc: T, event: KeyboardEvent): void;
  global?: boolean;
}

export type AppKeyCombinations<T extends IProcess = IAppProcess> = AppKeyCombination<T>[];
