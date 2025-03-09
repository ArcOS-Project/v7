import "$css/apps/components/shortcutproperties.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { ShortcutPropertiesRuntime } from "./runtime";
import ShortcutProperties from "./ShortcutProperties.svelte";

export const ShortcutPropertiesApp: App = {
  metadata: {
    name: "Shortcut Properties",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  size: {
    w: 360,
    h: 440,
  },
  minSize: {
    w: 360,
    h: 440,
  },
  maxSize: {
    w: 360,
    h: 440,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ShortcutPropertiesRuntime,
    component: ShortcutProperties as any,
  },
  glass: true,
  id: "ShortcutProperties",
};
