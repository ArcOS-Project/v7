import { TerminalMode } from "$ts/terminal/mode";
import type { StateProps, StateRendererAccessors } from "$types/state";

export default async function render(_: StateProps, { stack, kernel }: StateRendererAccessors) {
  const target = document.querySelector("#arcTermMode");
  await stack.spawn(TerminalMode, undefined, kernel.initPid, target);
}
