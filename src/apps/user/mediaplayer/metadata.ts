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
    w: 820,
    h: 530,
  },
  minSize: {
    w: 642,
    h: 392,
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
  opens: {
    extensions: [
      ".mp3",
      ".opus",
      ".wav",
      ".m4a",
      ".flac",
      ".mp4",
      ".mkv",
      ".mov",
      ".avi",
      ".arcpl",
    ],
  },
  position: { centered: true },
  id: "MediaPlayer",
  glass: false,
};
