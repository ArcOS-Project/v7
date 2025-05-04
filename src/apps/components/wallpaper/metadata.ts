import "$css/apps/components/wallpaper.css";
import { DesktopIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { WallpaperRuntime } from "./runtime";
import Wallpaper from "./Wallpaper.svelte";

export const WallpaperApp: App = {
  metadata: {
    name: "Wallpaper",
    author: "Izaak Kuipers",
    version: "3.1.0",
    icon: DesktopIcon,
    appGroup: "coreApps",
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
    headless: true,
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
  core: true,
  hidden: true,
};
