import "$css/apps/components/appinstaller.css";
import type { App } from "$types/app";
import AppInstaller from "./AppInstaller.svelte";
import { AppInstallerRuntime } from "./runtime";

const AppInstallerApp: App = {
  metadata: {
    name: "AppInstaller",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "DownloadIcon",
  },
  position: { centered: true },
  size: { w: 460, h: 390 },
  minSize: { w: 460, h: 390 },
  maxSize: { w: 460, h: 390 },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: AppInstallerRuntime,
    component: AppInstaller as any,
  },
  hidden: true,
  id: "AppInstaller",
};

export default AppInstallerApp;
