import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
import type { AppKeyCombinations } from "$types/apps/accelerator";

export function SqeletonAccelerators(runtime: ISqeletonRuntime): AppKeyCombinations {
  return [
    {
      alt: true,
      key: "n",
      action: () => runtime.openEditor(),
    },
    {
      alt: true,
      key: "o",
      action: () => runtime.openQuery(),
    },
    {
      alt: true,
      key: "s",
      action: () => runtime.saveCurrentQuery(),
    },
  ];
}
