import { ShellRuntime } from "$apps/components/shell/runtime";
import { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import { ProcessHandler } from "$ts/process/handler";
import { UUID } from "$ts/uuid";

export function contextProps(node: HTMLElement, args: any[]) {
  const kernel = WaveKernel.get();
  const env = kernel.getModule<Environment>("env", true);
  const stack = kernel.getModule<ProcessHandler>("stack", true);
  const shellPid = env?.get("shell_pid");

  if (!shellPid) return;

  const shell = stack?.getProcess<ShellRuntime>(+shellPid);

  if (!shell) return;

  const uuid = UUID();

  shell.contextProps[uuid] = args;
  node.setAttribute(`data-contextprops`, uuid);
}
