import "$css/apps/components/exit.css";
import { ShutdownIcon } from "$ts/images/power";
import type { App } from "$types/app";
import Exit from "./Exit.svelte";
import { ExitRuntime } from "./runtime";

export const ExitApp: App = {
  metadata: {
    name: "Exit",
    author: "Izaak Kuipers",
    version: "6.0.0",
    icon: ShutdownIcon,
  },
  position: { centered: true },
  size: { w: 380, h: 300 },
  minSize: { w: 380, h: 300 },
  maxSize: { w: 380, h: 300 },
  state: {
    maximized: false,
    minimized: false,
    headless: true,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ExitRuntime,
    component: Exit as any,
  },
  id: "ExitApp",
};
