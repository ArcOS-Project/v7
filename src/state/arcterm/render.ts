import { KernelInitPid } from "$ts/getters";
import { KernelStack } from "$ts/env";
import { TerminalMode } from "$ts/terminal/mode";
import type { StateProps } from "$types/state";

export default async function render(_: StateProps) {
  const target = document.querySelector("#arcTermMode");
  await KernelStack().spawn(TerminalMode, undefined, "SYSTEM", KernelInitPid(), target);
}
