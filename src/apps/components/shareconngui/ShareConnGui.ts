import "$css/apps/components/shareconngui.css";
import type { App } from "$types/app";
import { ShareConnGuiRuntime } from "./runtime";
import ShareConnGui from "./ShareConnGui.svelte";

export const ShareConnGuiApp: App = {
  metadata: {
    name: "ShareConnGui",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "ShareIcon",
    appGroup: "components",
  },
  size: {
    w: 360,
    h: 490,
  },
  minSize: {
    w: 360,
    h: 490,
  },
  maxSize: {
    w: 360,
    h: 490,
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
    close: true,
  },
  assets: {
    runtime: ShareConnGuiRuntime,
    component: ShareConnGui as any,
  },
  hidden: true,
  glass: true,
  id: "ShareConnGui",
};

export default ShareConnGuiApp;
