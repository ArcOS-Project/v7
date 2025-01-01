import type { State } from "../../types/state";
import { Log } from "../kernel/logging";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { States } from "./store";

export class StateHandler extends Process {
  store: Record<string, State> = {};
  currentState: string = "";

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    store = States
  ) {
    Log(
      "StateHandler.constructor",
      `Constructing new StateHandler with a store containing ${
        Object.entries(store).length
      } states`
    );

    super(handler, pid, parentPid);
    this.store = store;
  }
}
