import "$css/apps/components/sharemgmtgui.css";
import { ShareIcon } from "$ts/images/filesystem";
import type { App } from "$types/app";
import { ShareMgmtGuiRuntime } from "./runtime";
import ShareMgmtGui from "./ShareMgmtGui.svelte";

export const ShareMgmtGuiApp: App = {
  metadata: {
    name: "ShareMgmtGui",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ShareIcon,
  },
  size: {
    w: 460,
    h: 530,
  },
  minSize: {
    w: 460,
    h: 530,
  },
  maxSize: {
    w: 460,
    h: 530,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: ShareMgmtGuiRuntime,
    component: ShareMgmtGui as any,
  },
  hidden: true,
  glass: true,
  id: "ShareMgmtGui",
};
