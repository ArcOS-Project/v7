import "$css/apps/core/loginapp.css";
import type { App } from "$types/app";
import Login from "./LoginApp.svelte";
import { LoginAppRuntime } from "./runtime";

export const LoginApp: App = {
  metadata: {
    name: "LogonUI",
    author: "Izaak Kuipers",
    version: "9.0.0",
    icon: "PasswordIcon",
    appGroup: "coreApps",
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
    headless: true,
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
  vital: true,
  id: "loginApp",
};

export default LoginApp;
