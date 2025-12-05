import "$css/apps/admin/adminportal.css";
import type { App } from "$types/app";
import AdminPortal from "./AdminPortal.svelte";
import { AdminPortalRuntime } from "./runtime";

const AdminPortalApp: App = {
  metadata: {
    name: "Admin Portal",
    version: "1.0.0",
    author: "Izaak Kuipers",
    appGroup: "adminTools",
    icon: "ElevationIcon",
  },
  position: { centered: true },
  size: { w: 900, h: 500 },
  minSize: { w: 900, h: 500 },
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
    maximize: true,
    close: true,
  },
  assets: {
    runtime: AdminPortalRuntime,
    component: AdminPortal as any,
  },
  glass: true,
  elevated: true, // Making sure the admin has to approve the opening of this app
  id: "AdminPortal",
};

export default AdminPortalApp;
