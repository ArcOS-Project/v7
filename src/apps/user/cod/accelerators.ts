import type { ICodRuntime } from "$interfaces/runtimes/ICodRuntime";
import type { AppKeyCombinations } from "$types/accelerator";

export function CodAccelerators(runtime: ICodRuntime): AppKeyCombinations {
  return [
    {
      alt: true,
      key: "o",
      action: () => runtime.openFile(),
    },
    {
      alt: true,
      shift: true,
      key: "s",
      action: () => runtime.saveAs(),
    },
    {
      alt: true,
      key: "s",
      action: () => runtime.saveChanges(),
    },
    {
      key: "f3",
      action: (_, e) => {
        e.preventDefault();
        runtime.spawnOverlay("replace");
      },
    },
  ];
}
