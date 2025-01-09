import "$css/apps/core/loginapp.css";
import { SecurityHighIcon } from "$ts/images/general";
import type { App } from "../../../types/app";
import Login from "./LoginApp.svelte";
import { LoginAppRuntime } from "./runtime";

export const LoginApp: App = {
  metadata: {
    name: "Boot App",
    author: "Izaak Kuipers",
    version: "9.0.0",
    icon: SecurityHighIcon,
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
  position: {},
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    component: Login as any,
    runtime: LoginAppRuntime,
  },
  core: true,
  hidden: true,
  id: "loginApp",
};
