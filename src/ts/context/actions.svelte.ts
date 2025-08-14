import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
import { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import { getKMod } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import { UUID } from "$ts/uuid";

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
}
