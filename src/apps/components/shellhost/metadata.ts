import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { ShellHostRuntime } from "./runtime";

export const ShellHostApp: App = {
  metadata: {
    name: "ShellHost",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  position: {},
  size: { w: 0, h: 0 },
  minSize: { w: 0, h: 0 },
  maxSize: { w: 0, h: 0 },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    fullscreen: true,
    resizable: false,
  },
  controls: {
    maximize: false,
    minimize: false,
    close: false,
  },
  assets: {
    runtime: ShellHostRuntime,
  },
  hidden: true,
  core: true,
  id: "shellHost",
};
