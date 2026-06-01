import type { App } from "$types/apps/app";
import Mailbroker from "./Mailbroker.svelte";
import { MailbrokerRuntime } from "./runtime";

const MailbrokerApp: App = {
  metadata: {
    name: "Mailbroker Manager",
    version: "1.0.0",
    author: "Izaak Kuipers",
    appGroup: "adminTools",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 640, h: 480 },
  minSize: { w: 640, h: 480 },
  maxSize: { w: 640, h: 480 },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: MailbrokerRuntime,
    component: Mailbroker as any,
  },
  glass: true,
  elevated: true,
  hidden: false,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "Mailbroker",
};

export default MailbrokerApp;
