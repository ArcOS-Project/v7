import { ArcTermIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import { ArcTermRuntime } from "./process";

export const ArcTermApp: App = {
  metadata: {
    name: "ArcTerm",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: ArcTermIcon,
    appGroup: "utilities",
  },
  size: {
    w: 640,
    h: 480,
  },
  minSize: {
    w: 350,
    h: 250,
  },
  maxSize: {
    w: NaN,
    h: NaN,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  position: { centered: true },
  assets: {
    runtime: ArcTermRuntime,
  },
  id: "ArcTerm",
};
