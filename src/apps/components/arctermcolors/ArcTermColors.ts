import type { App } from "$types/app";
import ArcTermColors from "./ArcTermColors.svelte";
import { ArcTermColorsRuntime } from "./runtime";

const ArcTermColorsApp: App = {
  metadata: {
    name: "ArcTerm Colors",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ArcTermIcon",
  },
  position: { centered: true },
  size: { w: 380, h: 508 },
  minSize: { w: 380, h: 508 },
  maxSize: { w: 380, h: 508 },
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
    runtime: ArcTermColorsRuntime,
    component: ArcTermColors as any,
  },
  glass: false,
  elevated: false,
  hidden: true,
  core: false,
  overlay: true,
  noSafeMode: false,
  vital: false,
  opens: {
    extensions: [".atc"],
  },
  id: "ArcTermColors",
};

export default ArcTermColorsApp;
