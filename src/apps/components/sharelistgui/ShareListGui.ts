import "$css/apps/components/sharelistgui.css";
import { ShareIcon } from "$ts/images/filesystem";
import type { App } from "$types/app";
import { ShareListGuiRuntime } from "./runtime";
import ShareListGui from "./ShareListGui.svelte";

export const ShareListGuiApp: App = {
  metadata: {
    name: "ShareListGui",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: ShareIcon,
    appGroup: "components",
  },
  position: { centered: true },
  size: {
    w: 520,
    h: 530,
  },
  minSize: {
    w: 520,
    h: 530,
  },
  maxSize: {
    w: 520,
    h: 530,
  },
  state: {
    minimized: false,
    maximized: false,
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
    runtime: ShareListGuiRuntime,
    component: ShareListGui as any,
  },
  glass: true,
  hidden: true,
  id: "ShareListGui",
};

export default ShareListGuiApp;
