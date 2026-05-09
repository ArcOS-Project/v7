import type { LightsOffGrid } from "$apps/user/lightsoff/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore, NumberStore, ReadableStore } from "$types/writable";

export interface ILightsOffRuntime extends IAppProcess {
  xModifiers: number[];
  yModifiers: number[];
  Grid: ReadableStore<LightsOffGrid>;
  Transitioning: BooleanStore;
  Clicks: NumberStore;
  LEVEL: NumberStore;
  Levels: ILightsOffLevels;

  containsLights(): boolean;
  finish(): boolean;
  ToggleLight(x: number, y: number): void;
  loadData(): void;
  saveData(): void;
}

export interface ILightsOffLevels {
  runtime: ILightsOffRuntime;

  loadLevel(level: number): void;
  checkNextLevel(): Promise<boolean>;
}
