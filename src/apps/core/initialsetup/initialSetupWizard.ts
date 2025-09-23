import "$css/apps/core/initialsetup.css";
import { WaveIcon } from "$ts/images/general";
import type { App } from "../../../types/app";
import InitialSetup from "./InitialSetup.svelte";
import { InitialSetupRuntime } from "./runtime";

export const InitialSetupWizard: App = {
  metadata: {
    name: "%apps.initialSetupWizard._name%",
    author: "Izaak Kuipers",
    version: "7.0.0",
    icon: WaveIcon,
    appGroup: "coreApps",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
  position: {},
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: true,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    component: InitialSetup as any,
    runtime: InitialSetupRuntime,
  },
  core: true,
  hidden: true,
  vital: true,
  id: "initialSetupWizard",
};

export default InitialSetupWizard;
