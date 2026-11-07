import "$css/apps/user/mediaplayer.css";
import type { App } from "$types/apps/app";
import MediaPlayer from "./MediaPlayer.svelte";
import { MediaPlayerRuntime } from "./runtime";

export const MediaCentreApp: App = {
  metadata: {
    name: "Media Centre",
    author: "Logan Cookson & Izaak Kuipers",
    version: "1.0.0",
    icon: "MediaPlayerIcon",
    appGroup: "multimedia",
  },
  size: {
    w: 820,
    h: 560,
  },
  minSize: {
    w: 642,
    h: 560,
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
      ".arcpl",
      ".avi",
      ".flac",
      ".m4a",
      ".m4v",
      ".m4p",
      ".mkv",
      ".mov",
      ".mp3",
      ".mp4",
      ".oga",
      ".ogg",
      ".ogv",
      ".opus",
      ".wav",
      ".webm",
    ],
  },
  position: { centered: true },
  id: "MediaCentre",
  glass: false,
  acceleratorDescriptions: {
    "Alt+Shift+O": "Open the file location of the playing file",
    "Alt+O": "Open a file to play",
    "Alt+A": "Add a media file to the queue",
  },
  noSafeMode: true,
};

export default MediaCentreApp;
