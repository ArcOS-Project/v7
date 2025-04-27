import "$css/apps/admin/adminportal.css";
import { ElevationIcon } from "$ts/images/general";
import type { App } from "$types/app";
import AdminPortal from "./AdminPortal.svelte";
import { AdminPortalRuntime } from "./runtime";

export const AdminPortalApp: App = {
  metadata: {
    name: "Admin Portal",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ElevationIcon,
  },
  position: { centered: true },
  size: { w: 770, h: 550 },
  minSize: { w: 770, h: 550 },
  maxSize: { w: NaN, h: NaN },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: AdminPortalRuntime,
    component: AdminPortal as any,
  },
  glass: true,
  elevated: true,
  id: "AdminPortal",
};
