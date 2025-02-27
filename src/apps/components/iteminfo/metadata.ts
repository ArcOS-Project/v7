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
  size: { w: 480, h: 520 },
  minSize: { w: 480, h: 520 },
  maxSize: { w: 480, h: 520 },
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
  glass: false,
  hidden: true,
  overlay: true,
};
