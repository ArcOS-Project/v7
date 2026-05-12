import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";
import type { AppKeyCombinations } from "$types/accelerator";

export function WriterAccelerators(runtime: IWriterRuntime): AppKeyCombinations {
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
