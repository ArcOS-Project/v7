import "$css/apps/components/securecontext.css";
import { SecureIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { SecureContextRuntime } from "./runtime";
import SecureContext from "./SecureContext.svelte";

export const SecureContextApp: App = {
  metadata: {
    name: "Secure Context",
    version: "2.0.0",
    author: "Izaak Kuipers",
    icon: SecureIcon,
  },
  size: { w: 400, h: 400 },
  minSize: { w: 400, h: 400 },
  maxSize: { w: 400, h: 400 },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  position: { centered: true },
  id: "SecureContext",
  assets: {
    runtime: SecureContextRuntime,
    component: SecureContext as any,
  },
  state: {
    fullscreen: false,
    resizable: false,
    minimized: false,
    maximized: false,
    headless: false,
  },
  glass: true,
  hidden: true,
  core: false,
};
