import { StateError } from "$ts/state/error";
import type { StateProps, StateRendererAccessors } from "../../types/state";

export default async function render(
  props: StateProps,
  { stack }: StateRendererAccessors
) {
  if (!props.userDaemon) throw new StateError(`Invalid desktop invocation`);

  const { renderer } = stack;
  await renderer?.loadBuiltinApps();
}
