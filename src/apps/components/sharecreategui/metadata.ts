import "$css/apps/components/sharecreategui.css";
import { ShareIcon } from "$ts/images/filesystem";
import type { App } from "$types/app";
import { ShareCreateGuiRuntime } from "./runtime";
import ShareCreateGui from "./ShareCreateGui.svelte";

export const ShareCreateGuiApp: App = {
  metadata: {
    name: "ShareCreateGui",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: ShareIcon,
  },
  position: { centered: true },
  size: {
    w: 360,
    h: 430,
  },
  minSize: {
    w: 360,
    h: 430,
  },
  maxSize: {
    w: 360,
    h: 430,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ShareCreateGuiRuntime,
    component: ShareCreateGui as any,
  },
  glass: true,
  hidden: true,
  id: "ShareCreateGui",
};
