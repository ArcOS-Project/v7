import "$css/apps/components/totpsetupgui.css";
import { ElevationIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { TotpSetupGuiRuntime } from "./runtime";
import TotpSetupGui from "./TotpSetupGui.svelte";

export const TotpSetupGuiApp: App = {
  metadata: {
    name: "TotpSetupGui",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ElevationIcon,
  },
  size: {
    w: 370,
    h: 395,
  },
  minSize: {
    w: 370,
    h: 395,
  },
  maxSize: {
    w: 370,
    h: 395,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: TotpSetupGuiRuntime,
    component: TotpSetupGui as any,
  },
  hidden: true,
  overlay: true,
  noSafeMode: true,
  id: "TotpSetupGui",
};
