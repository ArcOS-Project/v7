import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
import type { AppProcess } from "$ts/apps/process";
import { Environment } from "$ts/kernel/env";
import { KernelStack } from "$ts/process/handler";
import { getKMod } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import { UUID } from "$ts/uuid";
import type { ContextMenuItem } from "$types/app";

export function contextProps(node: HTMLElement, args: any[]) {
  const env = getKMod<Environment>("env", true);
  const stack = getKMod<ProcessHandler>("stack", true);

  const contextMenuPid = env?.get("contextmenu_pid");
  if (!contextMenuPid) return;

  const contextmenu = stack?.getProcess<ContextMenuRuntime>(+contextMenuPid);
  if (!contextmenu) return;

  const uuid = UUID();

  contextmenu.contextProps[uuid] = args;
  node.setAttribute(`data-contextprops`, uuid);

  return {
    destroy: () => {
      delete contextmenu.contextProps[uuid];
      node.removeAttribute(`data-contextprops`);
    },
  };
}

export function contextMenu(node: HTMLElement, [items, process]: [ContextMenuItem[], AppProcess]) {
  const contextMenuPid = process.env?.get("contextmenu_pid");
  if (!contextMenuPid) return;
  const contextmenu = KernelStack()?.getProcess<ContextMenuRuntime>(+contextMenuPid);
  if (!contextmenu) return;

  function callback(e: MouseEvent) {
    contextmenu?.createContextMenu({
      x: e.clientX,
      y: e.clientY,
      process,
      items,
    });
  }

  node.addEventListener("contextmenu", callback);

  return {
    destroy: () => node.removeEventListener("contextmenu", callback),
  };
}
