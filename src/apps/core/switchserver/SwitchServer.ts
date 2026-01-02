import "$css/apps/core/switchserver.css";
import type { App } from "$types/app";
import { SwitchServerRuntime } from "./runtime";
import SwitchServer from "./SwitchServer.svelte";

const SwitchServerApp: App = {
  metadata: {
    name: "Switch Server",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 0, h: 0 },
  minSize: { w: 0, h: 0 },
  maxSize: { w: 0, h: 0 },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: true,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: SwitchServerRuntime,
    component: SwitchServer as any,
  },
  glass: true,
  elevated: false,
  hidden: true,
  core: true,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "SwitchServer",
};

export default SwitchServerApp;
