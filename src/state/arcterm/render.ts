import { Stack } from "$ts/env";
import { KernelInitPid } from "$ts/getters";
import { TerminalMode } from "$ts/terminal/mode";
import type { StateProps } from "$types/state";

export default async function render(_: StateProps) {
  const target = document.querySelector("#arcTermMode");
  
  await Stack.spawn(TerminalMode, undefined, "SYSTEM", KernelInitPid(), target);
}
