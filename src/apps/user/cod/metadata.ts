import "$css/apps/user/cod.css";
import { CodIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import Cod from "./Cod.svelte";
import { CodRuntime } from "./runtime";

export const CodApp: App = {
  metadata: {
    name: "Cod",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: CodIcon,
    appGroup: "utilities",
  },
  position: { centered: true },
  size: {
    w: 700,
    h: 500,
  },
  minSize: {
    w: 480,
    h: 300,
  },
  maxSize: {
    w: 1800,
    h: 1000,
  },
  controls: {
    maximize: true,
    minimize: true,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  opens: {
    extensions: [".json", ".svg", ".html", ".css", ".js", ".tpa", "arcterm.conf", ".md", ".ini", ".xml"],
  },
  assets: {
    runtime: CodRuntime,
    component: Cod as any,
  },
  acceleratorDescriptions: {
    "Alt+O": "Select a file to edit",
    "Alt+Shift+S": "Save file under a different name",
    "Alt+S": "Save file",
  },
  id: "cod",
};
