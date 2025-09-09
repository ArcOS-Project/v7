import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { LightsOffIcon } from "$ts/images/apps";
import type { ProcessHandler } from "$ts/process/handler";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { LogLevel } from "$types/logging";
import { LightsOffLevels } from "./levels";
import type { LightsOffGrid } from "./types";

export class LightsOffRuntime extends AppProcess {
  xModifiers = [-1, 0, +1];
  yModifiers = [-1, +1];
  Grid: ReadableStore<LightsOffGrid> = Store([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  Transitioning = Store<boolean>(false);
  Clicks = Store<number>(0);
  LEVEL = Store<number>(0);
  Levels: LightsOffLevels;

  //#region LIFECYCLE

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.Levels = new LightsOffLevels(this);

    this.Grid.subscribe((v) => {
      if (!v) return;

      this.Levels.checkNextLevel();
      this.saveData();
    });
    this.LEVEL.subscribe(() => this.saveData());
    this.Clicks.subscribe(() => this.saveData());

    this.loadData();
  }

  //#endregion

  containsLights() {
    this.Log("Checking lights");
    return JSON.stringify(this.Grid.get()).includes("true");
  }

  finish() {
    this.Log("User has won! Finishing...");

    MessageBox(
      {
        title: "You Win!",
        message:
          "You've managed to complete all 8 levels of Lights Off. The game will be reset so you can play it again in the future.",
        buttons: [
          {
            caption: "Play again",
            action: () => {
              this.LEVEL.set(0);
              this.Clicks.set(0);
              this.Levels.loadLevel(this.LEVEL.get());
            },
            suggested: true,
          },
        ],
        image: LightsOffIcon,
      },
      this.pid,
      true
    );
  }

  ToggleLight(x: number, y: number) {
    this.Log(`Toggling ${x}x${y}`);

    const grid = this.Grid.get();

    if (!grid[y]) return;
    if (typeof grid[y][x] !== "boolean") return;

    this.Clicks.set(this.Clicks.get() + 1);

    for (let i = 0; i < this.xModifiers.length; i++) {
      const value = grid[y][x + this.xModifiers[i]];

      if (typeof value !== "boolean") continue;

      grid[y][x + this.xModifiers[i]] = !value;
    }

    for (let i = 0; i < this.yModifiers.length; i++) {
      const rowExists = Array.isArray(grid[y + this.yModifiers[i]]);

      if (!rowExists) continue;
      const value = grid[y + this.yModifiers[i]][x];

      if (typeof value !== "boolean") continue;

      grid[y + this.yModifiers[i]][x] = !value;
    }

    this.Grid.set(grid);
  }

  loadData() {
    this.Log("Loading Data from UserData");

    const data = this.userPreferences().appPreferences[this.app.id];

    if (data && data.level) {
      this.Levels.loadLevel(data.level as number);
      this.Grid.set(data.grid as LightsOffGrid);
      this.Clicks.set(data.clicks as number);

      return;
    }

    this.Levels.loadLevel(0);
  }

  saveData() {
    if (this.LEVEL.get() == 0 && !this.containsLights()) return this.Log("Not saving default state!", LogLevel.warning);

    this.userPreferences.update((udata) => {
      udata.appPreferences[this.app.id] = {
        clicks: this.Clicks.get(),
        level: this.LEVEL.get(),
        grid: this.Grid.get(),
      };

      return udata;
    });
  }
}
