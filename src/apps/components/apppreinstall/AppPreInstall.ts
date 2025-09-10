import "$css/apps/components/apppreinstall.css";
import { DownloadIcon } from "$ts/images/filesystem";
import type { App } from "$types/app";
import AppPreinstall from "./AppPreinstall.svelte";
import { AppPreInstallRuntime } from "./runtime";

const AppPreinstallApp: App = {
  metadata: {
    name: "AppPreInstallApp",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: DownloadIcon,
  },
  position: { centered: true },
  size: { w: 320, h: NaN },
  minSize: { w: 320, h: 430 },
  maxSize: { w: 320, h: NaN },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    maximize: false,
    minimize: false,
    close: true,
  },
  assets: {
    runtime: AppPreInstallRuntime,
    component: AppPreinstall as any,
  },
  hidden: true,
  id: "AppPreInstall",
};

export default AppPreinstallApp;
