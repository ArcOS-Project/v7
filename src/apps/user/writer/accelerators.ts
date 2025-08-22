import type { AppKeyCombinations } from "$types/accelerator";
import type { WriterRuntime } from "./runtime";

export function WriterAccelerators(runtime: WriterRuntime): AppKeyCombinations {
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
    {
      key: "tab",
      action: (_, e) => {
        e.preventDefault();

        const textarea = runtime.input();

        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      },
    },
  ];
}
