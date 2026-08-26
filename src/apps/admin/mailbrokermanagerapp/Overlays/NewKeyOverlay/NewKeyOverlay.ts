import type { App } from "$types/apps/app";
import NewKey from "./NewKey.svelte";
import { MailbrokerNewKeyOverlayRuntime } from "./runtime";

const NewKeyOverlay: App = {
  metadata: {
    name: "New mailbroker key",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "MailbrokerAdminIcon",
  },
  position: { centered: true },
  size: {
    w: 380,
    h: 200,
  },
  minSize: {
    w: 380,
    h: 200,
  },
  maxSize: {
    w: 380,
    h: 200,
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
    runtime: MailbrokerNewKeyOverlayRuntime,
    component: NewKey as any,
  },
  hidden: true,
  id: "MailbrokerManagerApp_NewKeyOverlay",
};

export default NewKeyOverlay;
