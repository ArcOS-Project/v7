import "$css/apps/user/advsystemsettings.css";
import type { App } from "$types/app";
import AdvancedSystemSettings from "./AdvancedSystemSettings.svelte";
import { AdvSysSetRuntime } from "./runtime";

export const AdvSystemSettings: App = {
  metadata: {
    name: "Advanced System Settings",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "WindowSettingsIcon",
    appGroup: "systemTools",
  },
  position: { centered: true },
  size: { w: 450, h: 550 },
  minSize: { w: 450, h: 550 },
  maxSize: { w: 450, h: 550 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: AdvSysSetRuntime,
    component: AdvancedSystemSettings as any,
  },
  glass: true,
  hidden: true,
  vital: true,
  id: "AdvSystemSettings",
};
export default AdvSystemSettings;
