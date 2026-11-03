import type { App } from "$types/apps/app";
import { MailbrokerSendOverlayRuntime } from "./runtime";
import SendOverlaySvelte from "./SendOverlay.svelte";

const SendOverlay: App = {
  metadata: {
    name: "Send mailbroker template",
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
    runtime: MailbrokerSendOverlayRuntime,
    component: SendOverlaySvelte as any,
  },
  hidden: true,
  id: "MailbrokerManagerApp_SendOverlay",
};

export default SendOverlay;