import "$css/apps/components/roturauthgui.css";
import { RoturIcon } from "$ts/images/general";
import type { App } from "$types/app";
import RoturAuthGui from "./RoturAuthGui.svelte";
import { RoturAuthGuiProcess } from "./runtime";

export const RoturAuthGuiApp: App = {
  metadata: {
    name: "RoturAuthGui",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: RoturIcon,
  },
  size: {
    w: 300,
    h: 400,
  },
  minSize: {
    w: 300,
    h: 400,
  },
  maxSize: {
    w: 300,
    h: 400,
  },
  position: {
    centered: true,
  },
  assets: {
    runtime: RoturAuthGuiProcess,
    component: RoturAuthGui as any,
  },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: true,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  id: "RoturAuthGui",
  hidden: true,
  glass: true,
};
