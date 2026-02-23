import type { App } from "$types/app";
import LoadQueryOverlay from "../Overlays/LoadQueryOverlay.svelte";
import { LoadQueryOverlayRuntime } from "./runtime";

const LoadQueryOverlayApp: App = {
  metadata: {
    name: "Load Query",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 400, h: 300 },
  minSize: { w: 400, h: 300 },
  maxSize: { w: 400, h: 300 },
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
    runtime: LoadQueryOverlayRuntime,
    component: LoadQueryOverlay as any,
  },
  glass: true,
  elevated: false,
  hidden: true,
  core: false,
  overlay: true,
  noSafeMode: false,
  vital: true,
  id: "LoadQueryOverlay",
};

export default LoadQueryOverlayApp;
