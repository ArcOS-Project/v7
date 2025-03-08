import type { AppKeyCombinations } from "$types/accelerator";
import type { FileManagerRuntime } from "./runtime";

export function FileManagerAccelerators(runtime: FileManagerRuntime): AppKeyCombinations {
  return [
    {
      key: "Delete",
      action: () => {
        if (runtime.loadSave) return;

        runtime.deleteSelected();
      },
    },
    {
      alt: true,
      key: "Enter",
      action: () => {
        if (runtime.loadSave) return;

        const path = runtime.selection()[0];
        const contents = runtime.contents();
        const items = [...(contents?.dirs || []), ...(contents?.files || [])];
        const item = items.filter((a) => path?.endsWith(a.name))[0];

        if (!path || !item) return;

        runtime.selection.set([path]);
        runtime.spawnOverlayApp("ItemInfo", runtime.pid, path, item);
      },
    },
    {
      key: "F2",
      action: () => {
        const path = runtime.selection()[0];
        if (!path) return;

        runtime.selection.set([path]);
        runtime.spawnOverlay("renameItem", path);
      },
    },
    {
      key: "ArrowDown",
      action: (_, e) => {
        if (runtime.loadSave) return;

        e.preventDefault();
        runtime.selectorDown();
      },
    },
    {
      key: "ArrowUp",
      action: (_, e) => {
        if (runtime.loadSave) return;

        e.preventDefault();
        runtime.selectorUp();
      },
    },
    {
      key: "ArrowLeft",
      action: (_, e) => {
        if (!runtime.loadSave) e.preventDefault();
      },
    },
    {
      key: "ArrowRight",
      action: (_, e) => {
        if (!runtime.loadSave) e.preventDefault();
      },
    },
    {
      key: "Enter",
      shift: true,
      action: () => {
        runtime.EnterKey(true);
      },
    },
    {
      key: "Enter",
      action: () => {
        runtime.EnterKey(false);
      },
    },
  ];
}
