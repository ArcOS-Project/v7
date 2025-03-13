import { Sleep } from "$ts/sleep";
import type { LightsOffRuntime } from "./runtime";
import type { LightsOffGrid } from "./types";

export class LightsOffLevels {
  runtime: LightsOffRuntime;

  constructor(runtime: LightsOffRuntime) {
    this.runtime = runtime;
  }

  private _store: LightsOffGrid[] = [
    [
      [false, false, false, false, true],
      [false, false, false, true, true],
      [false, false, false, false, true],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
    [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [true, false, false, false, true],
      [true, true, false, true, true],
    ],
    [
      [true, true, false, true, true],
      [false, true, true, true, false],
      [false, true, true, true, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
    ],
    [
      [false, true, false, false, false],
      [true, true, false, false, false],
      [false, true, true, true, false],
      [true, true, false, false, false],
      [false, true, false, false, false],
    ],
    [
      [true, false, false, false, true],
      [false, true, false, true, false],
      [false, true, false, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
    [
      [true, true, true, false, false],
      [true, true, true, false, false],
      [true, false, true, true, false],
      [true, true, true, false, false],
      [true, true, true, false, false],
    ],
    [
      [true, true, false, false, false],
      [false, false, true, true, false],
      [false, false, true, false, false],
      [false, true, false, true, false],
      [true, true, false, true, true],
    ],
    [
      [true, false, false, false, true],
      [true, false, false, false, true],
      [false, true, true, true, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
    ],
  ];

  loadLevel(level: number) {
    if (level >= this._store.length) return this.runtime.finish();
    if (!this._store[level]) return;

    this.runtime.Grid.set(JSON.parse(JSON.stringify(this._store[level])));
    this.runtime.LEVEL.set(level);
    this.runtime.Clicks.set(0);
  }
  async checkNextLevel() {
    if (this.runtime.containsLights() || this.runtime.Clicks() == 0) return false;

    this.runtime.Transitioning.set(true);

    await Sleep(300);

    this.runtime.LEVEL.set(this.runtime.LEVEL() + 1);

    if (this.runtime.LEVEL() > this._store.length) return this.runtime.finish();

    this.loadLevel(this.runtime.LEVEL());

    await Sleep(200);

    this.runtime.Transitioning.set(false);

    return true;
  }
}
