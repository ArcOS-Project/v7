import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import RenameShare from "../ShareMgmtGui/Overlays/RenameShare.svelte";

export const RenameShareApp: App = {
  metadata: {
    name: "Rename share",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "ShareIcon",
  },
  size: { w: 350, h: 200 },
  minSize: { w: 350, h: 200 },
  maxSize: { w: 350, h: 200 },
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
    component: RenameShare as any,
  },
  overlay: true,
  glass: true,
  id: "RenameShare",
};
