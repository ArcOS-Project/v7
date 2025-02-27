import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import ItemInfo from "./ItemInfo.svelte";
import { ItemInfoRuntime } from "./runtime";
import "$css/apps/components/iteminfo.css";

export const ItemInfoApp: App = {
  metadata: {
    name: "Item Info",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  size: { w: 420, h: 480 },
  minSize: { w: 420, h: 480 },
  maxSize: { w: 420, h: 480 },
  position: { centered: true },
  state: {
    fullscreen: false,
    maximized: false,
    minimized: false,
    resizable: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ItemInfoRuntime,
    component: ItemInfo as any,
  },
  id: "ItemInfo",
  glass: true,
  hidden: true,
  overlay: true,
};
