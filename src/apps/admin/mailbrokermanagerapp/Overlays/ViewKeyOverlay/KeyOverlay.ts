import type { App } from "$types/apps/app";
import KeyOverlaySvelte from "./KeyOverlay.svelte";
import { MailbrokerViewKeyOverlayRuntime } from "./runtime";

const KeyOverlay: App = {
  metadata: {
    name: "View mailbroker key",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "MailbrokerAdminIcon",
  },
  position: { centered: true },
  size: {
    w: 450,
    h: 300,
  },
  minSize: {
    w: 450,
    h: 300,
  },
  maxSize: {
    w: 450,
    h: 300,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  state: {
    resizable: false,
    headless: true,
    fullscreen: false,
    maximized: false,
    minimized: false,
  },
  assets: {
    runtime: MailbrokerViewKeyOverlayRuntime,
    component: KeyOverlaySvelte as any,
  },
  hidden: true,
  id: "MailbrokerManagerApp_KeyOverlay",
};

export default KeyOverlay;