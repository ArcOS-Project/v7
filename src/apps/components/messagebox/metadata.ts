import "$css/apps/components/messagebox.css";
import { ErrorIcon } from "$ts/images/dialog";
import type { App } from "$types/app";
import MessageBox from "./MessageBox.svelte";
import { MessageBoxRuntime } from "./runtime";

export const MessageBoxApp: App = {
  metadata: {
    name: "Error",
    author: "Izaak Kuipers",
    version: "5.1.0",
    icon: ErrorIcon,
    appGroup: "components",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: 120 },
  maxSize: { w: 550, h: NaN },
  position: { x: 60, y: 60 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    resizable: false,
    headless: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: MessageBoxRuntime,
    component: MessageBox as any,
  },
  id: "messageBox",
  hidden: true,
};
