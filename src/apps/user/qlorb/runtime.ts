import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { LogLevel } from "$types/logging";
import type { Box } from "./types";

export class QlorbRuntime extends AppProcess {
  public readonly random = (m: number) => Math.floor(Math.random() * m);
  public readonly Boxes = Store<Box[]>([]);
  public readonly BoxesOffset = Store<number>(0);
  public readonly Clicks = Store<number>(0);
  public readonly Score = Store<number>(0);
  public readonly OldClicks = Store<number>(0);
  public readonly BOX_SIZE = 30;
  public readonly BOX_VALUES = [1, -1, -1, 5, 2, -5, -4, 1, -2];
  public readonly PAGES = ["intro", "start", "game"];
  public readonly CurrentPage = Store<string>("");

  //#region LIFECYCLE

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    setInterval(() => {
      if (this.Boxes.get().length - this.Clicks.get() < 21 && this.CurrentPage.get() == "game") this.spawnBox();
    }, 300);
  }

  async render() {
    this.switchPage("intro");
  }

  //#endregion

  public spawnBox(props?: Box | null, useOffset?: boolean, forcePositive = false): Box {
    this.Log(`Spawning box (useOffset = ${useOffset}, forcePositive = ${forcePositive})`);

    const boxProps: Box = props || this.createRandomBox(useOffset, forcePositive);

    this.Boxes.update((v) => {
      v.push(boxProps);

      return v;
    });

    this.BoxesOffset.update((v) => v + 1);

    return boxProps;
  }

  private createRandomBox(useOffset = true, forcePositive = false): Box {
    this.Log(`Creating random box (useOffset = ${useOffset}, forcePositive = ${forcePositive})`);
    const values = !forcePositive ? this.BOX_VALUES : this.BOX_VALUES.filter((v) => v > 0);
    const modifier = values[this.random(values.length)];
    const offset = this.random(this.BOX_SIZE * 2);

    const box: Box = {
      modifier,
      class: this.findBoxClass(modifier),
      yoffset: useOffset ? offset : 0,
    };

    return box;
  }

  private findBoxClass(mod: number): string {
    if (mod > 3) return "golden";
    if (mod < 0) return "bad";
    if (mod == 1) return "good";
    if (mod == 0) return "neutral";

    return "good";
  }

  public ScorePoints(box: Box, button?: HTMLButtonElement): void {
    this.Log(`Scoring ${box.modifier} points`);
    if (box.modifier < 0) return this.clickReset();

    this.Score.update((v) => v + box.modifier);
    this.Clicks.update((v) => v + 1);

    this.spawnBox();

    if (button) button.blur();
  }

  public ScoreNegativePoints(box: Box, button?: HTMLButtonElement): void {
    this.ScorePoints({ ...box, modifier: -box.modifier }, button);
  }

  private levelDown(): void {
    this.Log(`Deprecating the player's level down...`);

    const score = this.Score.get();

    if (score < 100) return this.Score.set(0);

    return this.Score.set(score - 100);
  }

  public clickReset(): void {
    this.Log(`Resetting click variables`);

    this.Clicks.set(1); // Set it to 1 first to force the subscribers to update
    this.Clicks.set(0);
    this.levelDown();
  }

  public flushStores(): void {
    this.Log(`Flushing all stores to their default values`);

    this.Score.set(0);
    this.Clicks.set(0);
    this.OldClicks.set(0);
    this.Boxes.set([]);
    this.BoxesOffset.set(0);
  }

  public onSwitchPage() {
    this.flushStores();
  }

  public switchPage(page: string): boolean {
    this.Log(`Switching page to ${page}`);

    if (!this.PAGES.includes(page)) {
      this.Log(`Page ${page} doesn't exist!`, LogLevel.error);

      return false;
    }

    this.CurrentPage.set(page);
    this.onSwitchPage();

    return true;
  }
}
