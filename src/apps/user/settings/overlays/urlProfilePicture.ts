import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import UrlProfilePictureSvelte from "../Settings/Overlays/UrlProfilePicture.svelte";

export const UrlProfilePicture: App = {
  metadata: {
    name: "URL Profile Picture",
    author: "ArcOS Team",
    version: "3.0.0",
    icon: "AccountIcon",
  },
  size: { w: 400, h: 200 },
  minSize: { w: 400, h: 200 },
  maxSize: { w: 400, h: 200 },
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
    component: UrlProfilePictureSvelte as any,
  },
  overlay: true,
  glass: true,
  id: "UrlProfilePicture",
};
