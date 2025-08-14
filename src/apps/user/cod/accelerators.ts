import type { AppKeyCombinations } from "$types/accelerator";
import type { CodRuntime } from "./runtime";

export function CodAccelerators(runtime: CodRuntime): AppKeyCombinations {
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
