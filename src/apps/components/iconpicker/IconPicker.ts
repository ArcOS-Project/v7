import "$css/apps/components/iconpicker.css";
import type { App } from "$types/app";
import IconPicker from "./IconPicker.svelte";
import { IconPickerRuntime } from "./runtime";

export const IconPickerApp: App = {
  metadata: {
    name: "Icon Picker",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: "IconLibraryIcon",
    appGroup: "components",
  },
  size: {
    w: 500,
    h: 630,
  },
  minSize: {
    w: 500,
    h: 630,
  },
  maxSize: {
    w: 500,
    h: 630,
  },
  position: { centered: true },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  assets: {
    runtime: IconPickerRuntime,
    component: IconPicker as any,
  },
  overlay: true,
  glass: true,
  id: "IconPicker",
};

export default IconPickerApp;
