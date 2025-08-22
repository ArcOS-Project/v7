import { KernelInitPid } from "$ts/kernel/getters";
import { TerminalMode } from "$ts/terminal/mode";
import type { StateProps, StateRendererAccessors } from "$types/state";

export default async function render(_: StateProps, { stack }: StateRendererAccessors) {
  const target = document.querySelector("#arcTermMode");
  await stack.spawn(TerminalMode, undefined, KernelInitPid(), target);
}
