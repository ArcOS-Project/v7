import "$css/apps/components/shell.css";
import type { App } from "$types/app";
import { ShellRuntime } from "./runtime";
import Shell from "./Shell.svelte";

export const ArcShellApp: App = {
  metadata: {
    name: "ArcOS Shell",
    author: "Izaak Kuipers",
    version: "4.1.1",
    icon: "ComponentIcon",
    appGroup: "coreApps",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: 700, h: NaN },
  position: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    resizable: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: ShellRuntime,
    component: Shell as any,
  },
  id: "arcShell",
  core: true,
  hidden: true,
  vital: true,
  acceleratorDescriptions: {
    "Ctrl+Q": "Close the currently focused application",
    "Alt+[": "Switch to the previous workspace",
    "Alt+]": "Switch to the next workspace",
  },
};

export default ArcShellApp;
