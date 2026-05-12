import type { Box } from "$apps/user/qlorb/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface IQlorbRuntime extends IAppProcess {
  readonly random: (m: number) => number;
  readonly Boxes: ReadableStore<Box[]>;
  readonly BoxesOffset: ReadableStore<number>;
  readonly Clicks: ReadableStore<number>;
  readonly Score: ReadableStore<number>;
  readonly OldClicks: ReadableStore<number>;
  readonly BOX_SIZE: number;
  readonly BOX_VALUES: number[];
  readonly PAGES: string[];
  readonly CurrentPage: ReadableStore<string>;

  render(): Promise<void>;
  spawnBox(props?: Box | null, useOffset?: boolean, forcePositive?: boolean): Box;
  ScorePoints(box: Box, button?: HTMLButtonElement): void;
  ScoreNegativePoints(box: Box, button?: HTMLButtonElement): void;
  clickReset(): void;
  flushStores(): void;
  onSwitchPage(): void;
  switchPage(page: string): boolean;
}
