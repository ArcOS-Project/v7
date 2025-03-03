import type { AppKeyCombinations } from "$types/accelerator";
import type { MediaPlayerRuntime } from "./runtime";

export const MediaPlayerAccelerators: (
  runtime: MediaPlayerRuntime
) => AppKeyCombinations = (runtime) => {
  return [
    {
      key: "o",
      alt: true,
      shift: true,
      action() {
        runtime.openFileLocation();
      },
    },
    {
      key: "o",
      alt: true,
      action() {
        runtime.openFile();
      },
    },
  ];
};
