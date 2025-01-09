import type { UserDaemon } from "$ts/server/user/daemon";
import { StateError } from "$ts/state/error";
import type { StateProps, StateRendererAccessors } from "../../types/state";

export default async function render(
  props: StateProps,
  { state }: StateRendererAccessors
) {
  if (!props.userDaemon) throw new StateError(`Invalid desktop invocation`);

  const logoffButton = document.querySelector("#logoffButton");
  const shutdownButton = document.querySelector("#shutdownButton");
  const restartButton = document.querySelector("#restartButton");

  logoffButton?.addEventListener("click", () => {
    state.loadState("login", {
      type: "logoff",
      userDaemon: props.userDaemon as UserDaemon,
    });
  });

  shutdownButton?.addEventListener("click", () => {
    state.loadState("login", {
      type: "shutdown",
      userDaemon: props.userDaemon as UserDaemon,
    });
  });

  restartButton?.addEventListener("click", () => {
    state.loadState("login", {
      type: "restart",
      userDaemon: props.userDaemon as UserDaemon,
    });
  });

  console.log(props.userDaemon as UserDaemon);
}
