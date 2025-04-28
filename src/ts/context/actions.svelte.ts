import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
import { ShellRuntime } from "$apps/components/shell/runtime";
import { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import { ProcessHandler } from "$ts/process/handler";
import { UUID } from "$ts/uuid";

export function contextProps(node: HTMLElement, args: any[]) {
  const kernel = WaveKernel.get();
  const env = kernel.getModule<Environment>("env", true);
  const stack = kernel.getModule<ProcessHandler>("stack", true);
  const contextMenuPid = env?.get("contextmenu_pid");

  if (!contextMenuPid) return;

  const contextmenu = stack?.getProcess<ContextMenuRuntime>(+contextMenuPid);

  if (!contextmenu) return;

  const uuid = UUID();

  contextmenu.contextProps[uuid] = args;
  node.setAttribute(`data-contextprops`, uuid);
}
