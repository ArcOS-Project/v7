import "$css/apps/components/wallpaper.css";
import { DesktopIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { WallpaperRuntime } from "./runtime";
import Wallpaper from "./Wallpaper.svelte";

export const WallpaperApp: App = {
  metadata: {
    name: "ArcOS Shell",
    author: "Izaak Kuipers",
    version: "3.1.0",
    icon: DesktopIcon,
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: 700, h: NaN },
  position: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: WallpaperRuntime,
    component: Wallpaper as any,
  },
  id: "wallpaper",
  autoRun: true,
  core: true,
  hidden: true,
};
