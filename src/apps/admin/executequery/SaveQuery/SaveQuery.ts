import type { App } from "$types/app";
import SaveQueryOverlay from "../Overlays/SaveQueryOverlay.svelte";
import { SaveQueryOverlayRuntime } from "./runtime";

const SaveQueryOverlayApp: App = {
  metadata: {
    name: "Save Query",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 400, h: 140 },
  minSize: { w: 400, h: 140 },
  maxSize: { w: 400, h: 140 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: SaveQueryOverlayRuntime,
    component: SaveQueryOverlay as any,
  },
  glass: true,
  elevated: false,
  hidden: true,
  core: false,
  overlay: true,
  noSafeMode: false,
  vital: true,
  id: "SaveQueryOverlay",
};

export default SaveQueryOverlayApp;
