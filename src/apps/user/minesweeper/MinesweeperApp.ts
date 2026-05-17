import "$css/apps/user/minesweeper.css";
import type { App } from "$types/app";
import Minesweeper from "./Minesweeper.svelte";
import { MinesweeperRuntime } from "./runtime";

export const MinesweeperApp: App = {
  metadata: {
    name: "Minesweeper",
    version: "1.0.0",
    author: "Logan Cookson",
    icon: "MinesweeperIcon",
    appGroup: "entertainment",
  },
  size: {
    w: 430,
    h: 525,
  },
  minSize: { w: 430, h: 525 },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: MinesweeperRuntime,
    component: Minesweeper as any,
  },
  noSafeMode: true,
  id: "MinesweeperApp",
  hidden: false,
  glass: true,
};

export default MinesweeperApp;
