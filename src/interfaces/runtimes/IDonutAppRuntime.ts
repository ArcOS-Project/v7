import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

export interface IDonutAppRuntime extends IAppProcess {
  interval: NodeJS.Timeout;

  readonly FPS: number;
  Buffer: StringStore;
  A: number;
  B: number;

  Tick(): Promise<void>;
}
