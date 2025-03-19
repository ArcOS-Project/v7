import "$css/apps/components/terminalwindow.css";
import { TerminalWindowIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import "@xterm/xterm/css/xterm.css";
import { TerminalWindowRuntime } from "./runtime";
import TerminalWindow from "./TerminalWindow.svelte";

export const TerminalWindowApp: App = {
  metadata: {
    name: "Terminal Window",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: TerminalWindowIcon,
  },
  size: { w: 640, h: 480 },
  minSize: { w: 350, h: 250 },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: TerminalWindowRuntime,
    component: TerminalWindow as any,
  },
  glass: true,
  hidden: true,
  id: "TerminalWindow",
};
