import type { App } from "$types/apps/app";
import BestTimes from "./HighScore.svelte";
import { MineSweeperHighScoreRuntime } from "./runtime";

export const MinesweeperHighScoreApp: App = {
  metadata: {
    name: "Minesweeper",
    icon: "MinesweeperIcon",
    version: "1.0.0",
    author: "Izaak Kuipers",
  },
  position: { centered: true },
  size: { w: 340, h: 200 }, 
  minSize: { w: 340, h: 200 },
  maxSize: { w: 340, h: 200 },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: MineSweeperHighScoreRuntime,
    component: BestTimes as any,
  },
  id: "MinesweeperHighScoreApp",
};
