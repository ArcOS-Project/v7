import "$css/apps/user/lightsoff.css";
import { LightsOffIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import LightsOff from "./LightsOff.svelte";
import { LightsOffRuntime } from "./runtime";

export const LightsOffApp: App = {
  metadata: {
    name: "Lights Off",
    version: "3.0.0",
    author: "Tim Horton, ported by Izaak Kuipers",
    icon: LightsOffIcon,
  },
  size: {
    w: 442,
    h: 554,
  },
  minSize: {
    w: 442,
    h: 554,
  },
  maxSize: {
    w: 442,
    h: 554,
  },
  position: { centered: true },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    fullscreen: false,
    headless: false,
  },
  assets: {
    runtime: LightsOffRuntime,
    component: LightsOff as any,
  },
  noSafeMode: true,
  id: "LightsOff",
};
