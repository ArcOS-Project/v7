import "$css/apps/user/settings.css";
import { SettingsIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import { SettingsRuntime } from "./runtime";
import Settings from "./Settings.svelte";

export const SystemSettings: App = {
  metadata: {
    name: "System Settings",
    author: "Izaak Kuipers",
    version: "6.0.0",
    icon: SettingsIcon,
  },
  size: { w: 730, h: 500 },
  minSize: { w: 730, h: 500 },
  maxSize: { w: 860, h: 650 },
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
  glass: true,
};
