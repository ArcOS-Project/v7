import { KernelInitPid } from "$ts/kernel/getters";
import { KernelStack } from "$ts/process/handler";
import { TerminalMode } from "$ts/terminal/mode";
import type { StateProps } from "$types/state";

export default async function render(_: StateProps) {
  const target = document.querySelector("#arcTermMode");
  await KernelStack().spawn(TerminalMode, undefined, "SYSTEM", KernelInitPid(), target);
}
