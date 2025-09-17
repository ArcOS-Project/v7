import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import SaveTheme from "../Settings/Overlays/SaveTheme.svelte";

export const SaveThemeApp: App = {
  metadata: {
    name: "Save Theme",
    author: "ArcOS Team",
    version: "2.0.0",
    icon: "SaveIcon",
  },
  size: { w: 350, h: 380 },
  minSize: { w: 350, h: 380 },
  maxSize: { w: 350, h: 380 },
  position: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: OverlayRuntime,
    component: SaveTheme as any,
  },
  overlay: true,
  glass: true,
  id: "SaveTheme",
};
