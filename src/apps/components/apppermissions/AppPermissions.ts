import type { App } from "$types/app";
import "$css/apps/components/apppermissions.css";
import AppPermissions from "./AppPermissions.svelte";
import { AppPermissionsRuntime } from "./runtime";

const AppPermissionsApp: App = {
  metadata: {
    name: "App Permissions",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: "DefaultIcon",
    appGroup: "components",
  },
  size: {
    w: 500,
    h: 450,
  },
  minSize: {
    w: 500,
    h: 450,
  },
  maxSize: {
    w: 500,
    h: 600,
  },
  position: {
    centered: true,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: AppPermissionsRuntime,
    component: AppPermissions as any,
  },
  hidden: true,
  vital: true,
  elevated: true,
  id: "AppPermissions",
  glass: false,
};

export default AppPermissionsApp;
