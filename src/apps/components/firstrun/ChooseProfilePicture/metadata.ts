import { AppProcess } from "$ts/apps/process";
import type { App } from "$types/app";
import ChooseProfilePicture from "./ChooseProfilePicture.svelte";

export const ChooseProfilePictureApp: App = {
  metadata: {
    name: "%apps.FirstRun.ChooseProfilePicture._name%",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "AccountIcon",
  },
  position: { centered: true },
  size: { w: 348, h: 416 },
  minSize: { w: 348, h: 416 },
  maxSize: { w: 348, h: 416 },
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
    runtime: AppProcess,
    component: ChooseProfilePicture as any,
  },
  id: "FirstRun_ChooseProfilePicture",
};
