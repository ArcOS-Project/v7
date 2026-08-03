import "$css/apps/admin/mailbroker.css";
import type { App } from "$types/apps/app";
import MailbrokerManager from "./MailbrokerManager.svelte";
import { MailbrokerRuntime } from "./runtime";

const MailbrokerManagerApp: App = {
  metadata: {
    name: "Mailbroker Manager",
    version: "1.0.0",
    author: "Izaak Kuipers",
    appGroup: "adminTools",
    icon: "MailbrokerAdminIcon",
  },
  position: { centered: true },
  size: { w: 800, h: 480 },
  minSize: { w: 800, h: 480 },
  maxSize: { w: NaN, h: NaN },
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
    component: MailbrokerManager as any,
  },
  glass: true,
  elevated: true,
  hidden: false,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "MailbrokerManagerApp",
};

export default MailbrokerManagerApp;
