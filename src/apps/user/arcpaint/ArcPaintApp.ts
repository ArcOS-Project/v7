import type { App } from "$types/app";
import ArcPaint from "./ArcPaint.svelte";
import { ArcPaintRuntime } from "./runtime";

export const ArcPaintApp: App = {
  metadata: {
    name: "ArcPaint",
    version: "1.0.0",
    author: "ArcOS Team", // maybe?
    icon: "ArcTermIcon", // todo
    appGroup: "utilities",
  },
  size: {
    w: 908,
    h: 570,
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
    runtime: ArcPaintRuntime,
    component: ArcPaint as any,
  },
  vital: true,
  id: "ArcPaint",
};

export default ArcPaintApp;
