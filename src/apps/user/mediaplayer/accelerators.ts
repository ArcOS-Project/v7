import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";
import type { AppKeyCombinations } from "$types/accelerator";

export const MediaPlayerAccelerators: (runtime: IMediaPlayerRuntime) => AppKeyCombinations = (runtime) => {
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
