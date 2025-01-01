import type { State } from "../../types/state";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { StateError } from "./error";
import { States } from "./store";

export class StateHandler extends Process {
  store: Record<string, State> = {};
  currentState: string = "";
  stateProps: Record<string, Record<any, any>> = {};
  override name = "StateHandler";

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

    console.log(store);
  }

  async loadState(
    id: string,
    props: Record<string, any> = {},
    instant = false
  ) {
    if (WaveKernel.isPanicked() && id !== "crash-screen") return;

    const data = this.store[id];

    if (!data)
      throw new StateError(
        `No such state ${id} on handler with PID ${this.pid}`
      );

    const { htmlLoader, cssLoader, main } = this.getStateLoaders();

    this.stateProps[id] = props || {};

    if (!instant) {
      main.classList.add("hidden");

      await Sleep(400);
    }

    Log(`StateHandler.loadState`, `BEGINNING LOAD OF ${data.name} (${id})`);

    try {
      const htmlContents = await (await fetch(data.html)).text();

      htmlLoader.innerHTML = htmlContents;
      Log(`StateHandler.loadState`, ` -> Loaded ${data.html}`);
    } catch {}

    if (this.currentState) htmlLoader.classList.remove(this.currentState);

    htmlLoader.classList.add(`fullscreen`, id);
    cssLoader.href = data.css;

    Log(`StateHandler.loadState`, ` -> Loaded ${data.css}`);

    if (!instant) {
      await Sleep(500);

      main.classList.remove("hidden");
    }

    this.currentState = id;

    try {
      if (!data.render) throw new StateError(`${id}: No render function`);

      Log(`StateHandler.loadState`, `==> Rendering`);

      await data.render();
    } catch (e) {
      throw new StateError(`${id}: ${(e as any).stack}`);
    }
  }

  getStateLoaders() {
    const main = document.querySelector("#main") as HTMLDivElement;
    const cssLoader = document.getElementById(
      "stateCSSLoader"
    ) as HTMLLinkElement;
    const htmlLoader = document.getElementById("stateLoader") as HTMLDivElement;

    if (!cssLoader || !htmlLoader || !main)
      throw new StateError("Missing elements of state handling.");

    return { htmlLoader, cssLoader, main };
  }
}
