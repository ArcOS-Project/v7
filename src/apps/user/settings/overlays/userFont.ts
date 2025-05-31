import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import UserFont from "../Settings/Overlays/UserFont.svelte";

export const UserFontApp: App = {
  metadata: {
    name: "Change Font",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: ComponentIcon,
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
    component: UserFont as any,
  },
  overlay: true,
  glass: true,
  id: "UserFont",
};
