import "$css/apps/user/mediaplayer.css";
import { MediaPlayerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import MediaPlayer from "./MediaPlayer.svelte";
import { MediaPlayerRuntime } from "./runtime";

export const MediaPlayerApp: App = {
  metadata: {
    name: "Media Player",
    author: "Izaak Kuipers",
    version: "4.0.0",
    icon: MediaPlayerIcon,
  },
  size: {
    w: 442,
    h: NaN,
  },
  minSize: {
    w: 442,
    h: 130,
  },
  maxSize: {
    w: NaN,
    h: NaN,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: MediaPlayerRuntime,
    component: MediaPlayer as any,
  },
  position: { centered: true },
  id: "MediaPlayer",
  glass: true,
};
