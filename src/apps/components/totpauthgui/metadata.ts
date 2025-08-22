import "$css/apps/components/totpauthgui.css";
import { ElevationIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { TotpAuthGuiRuntime } from "./runtime";
import TotpAuthGui from "./TotpAuthGui.svelte";

export const TotpAuthGuiApp: App = {
  metadata: {
    name: "TotpAuthGui",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ElevationIcon,
    appGroup: "components",
  },
  size: {
    w: 370,
    h: 285,
  },
  minSize: {
    w: 370,
    h: 285,
  },
  maxSize: {
    w: 370,
    h: 285,
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
    runtime: TotpAuthGuiRuntime,
    component: TotpAuthGui as any,
  },
  hidden: true,
  overlay: true,
  noSafeMode: true,
  id: "TotpAuthGui",
};
