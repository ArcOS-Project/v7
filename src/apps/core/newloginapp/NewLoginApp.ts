import "$css/apps/core/newloginapp.css";
import type { App } from "$types/apps/app";
import NewLogin from "./NewLogin.svelte";
import { NewLoginAppRuntime } from "./runtime";

const NewLoginApp: App = {
  metadata: {
    name: "LogonUI",
    author: "Izaak Kuipers",
    version: "10.0.0",
    icon: "PasswordIcon",
    appGroup: "coreApps",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
  position: {},
  state: {
    minimized: false,
    maximized: false,
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
    component: NewLogin as any,
    runtime: NewLoginAppRuntime,
  },
  core: true,
  hidden: true,
  vital: true,
  id: "NewLoginApp",
};

export default NewLoginApp;
