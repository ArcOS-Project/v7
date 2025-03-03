import type { ContextMenuItem } from "$types/app";
import type { MediaPlayerRuntime } from "../runtime";

export function AudioMenu(runtime: MediaPlayerRuntime): ContextMenuItem {
  return {
    caption: "Playback",
    subItems: [
      {
        caption: "Play",
        icon: "play",
        action() {
          runtime.Play();
        },
      },
      {
        caption: "Pause",
        icon: "pause",
        action() {
          runtime.Pause();
        },
      },
      { sep: true },
      {
        caption: "Stop",
        icon: "square",
        action() {
          runtime.Stop();
        },
      },
    ],
  };
}
