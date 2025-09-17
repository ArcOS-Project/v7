import type { App } from "$types/app";
import { OverlayRuntime } from "../overlay";
import ChangePassword from "../ShareMgmtGui/Overlays/ChangePassword.svelte";

export const ChangePasswordApp: App = {
  metadata: {
    name: "Change Share Password",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "PasswordIcon",
  },
  size: { w: 430, h: 250 },
  minSize: { w: 430, h: 250 },
  maxSize: { w: 430, h: 250 },
  position: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: OverlayRuntime,
    component: ChangePassword as any,
  },
  overlay: true,
  glass: true,
  id: "ChangePassword",
};
