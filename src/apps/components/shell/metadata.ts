import "$css/apps/components/shell.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { ShellRuntime } from "./runtime";
import Shell from "./Shell.svelte";

export const ArcShellApp: App = {
  metadata: {
    name: "ArcOS Shell",
    author: "Izaak Kuipers",
    version: "4.1.0",
    icon: ComponentIcon,
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
  autoRun: true,
  core: true,
  hidden: true,
};
