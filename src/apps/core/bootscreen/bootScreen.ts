import "$css/apps/core/bootscreen.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "../../../types/app";
import Boot from "./Boot.svelte";
import { BootScreenRuntime } from "./runtime";

export const BootScreen: App = {
  metadata: {
    name: "Boot App",
    author: "Izaak Kuipers",
    version: "9.0.0",
    icon: ComponentIcon,
    appGroup: "coreApps",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
  position: {},
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: true,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    component: Boot as any,
    runtime: BootScreenRuntime,
  },
  core: true,
  hidden: true,
  vital: true,
  id: "bootScreen",
};

export default BootScreen;
