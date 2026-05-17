import type { App } from "$types/app";
import BestTimes from "./BestTimes.svelte";
import { MinesweeperBestTimesRuntime } from "./runtime";

export const MinesweeperBestTimesApp: App = {
  metadata: {
    name: "Fastest Mine Sweepers",
    icon: "MinesweeperIcon",
    version: "1.0.0",
    author: "Izaak Kuipers",
  },
  position: { centered: true },
  size: { w: 340, h: 160 }, 
  minSize: { w: 340, h: 160 },
  maxSize: { w: 340, h: 160 },
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
    close: true,
  },
  assets: {
    runtime: MinesweeperBestTimesRuntime,
    component: BestTimes as any,
  },
  id: "MinesweeperBestTimesApp",
};
