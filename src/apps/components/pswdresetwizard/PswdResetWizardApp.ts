import "$css/apps/components/pswdresetwizard.css";
import type { App } from "$types/apps/app";
import PswdResetWizard from "./PswdResetWizard.svelte";
import { PswdResetWizardRuntime } from "./runtime";

const PswdResetWizardApp: App = {
  metadata: {
    name: "Password reset wizard",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: {
    w: 480,
    h: 400,
  },
  minSize: {
    w: 480,
    h: 400,
  },
  maxSize: {
    w: 480,
    h: 400,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  assets: {
    runtime: PswdResetWizardRuntime,
    component: PswdResetWizard as any,
  },
  id: "PswdResetWizardApp",
};

export default PswdResetWizardApp;
