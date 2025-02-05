import { AccountIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import ChangeUsername from "../Settings/Overlays/ChangeUsername.svelte";

export const ChangeUsernameApp: App = {
  metadata: {
    name: "Change Username",
    author: "ArcOS Team",
    version: "3.0.0",
    icon: AccountIcon,
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
    component: ChangeUsername as any,
  },
  overlay: true,
  glass: true,
  id: "ChangeUsername",
};
