import "$css/apps/user/settings.css";
import type { App } from "$types/apps/app";
import { SettingsRuntime } from "./runtime";
import Settings from "./Settings.svelte";

export const SystemSettings: App = {
  metadata: {
    name: "System Settings",
    author: "Izaak Kuipers",
    version: "6.0.4",
    icon: "SettingsIcon",
    appGroup: "systemTools",
  },
  size: { w: 730, h: 560 },
  minSize: { w: 730, h: 560 },
  maxSize: { w: 1000, h: 800 },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    component: Settings as any,
    runtime: SettingsRuntime,
  },
  id: "systemSettings",
  vital: true,
  glass: true,
};

export default SystemSettings;
