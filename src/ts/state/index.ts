import { AppProcess } from "$ts/apps/process";
import { LogLevel } from "$types/logging";
import type { State } from "../../types/state";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { StateError } from "./error";
import { States } from "./store";

export class StateHandler extends Process {
  store: Record<string, State> = {};
  currentState: string = "";
  stateProps: Record<string, Record<any, any>> = {};
  stateAppProcess: AppProcess | undefined;

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

    if (this.stateAppProcess) await this.stateAppProcess.closeWindow();

    const { htmlLoader, cssLoader, main } = this.getStateLoaders();

    htmlLoader.innerHTML = "";
    cssLoader.href = "";

    if (!data.app && !(data.html && data.css)) {
      throw new StateError(
        `${id}: Tried to load a state without any valid code.`
      );
    }

    this.stateProps[id] = props || {};

    if (!instant) {
      main.classList.add("hidden");

      await Sleep(400);
    }

    if (data.app) {
      await this.loadStateAsApp(data);
    } else {
      await this.loadStateNormally(id, data, htmlLoader, cssLoader);
    }

    if (!instant) {
      await Sleep(500);

      main.classList.remove("hidden");
    }

    this.currentState = id;

    if (!data.app) {
      try {
        if (!data.render) throw new StateError(`${id}: No render function`);

        Log(`StateHandler.loadState`, `==> Rendering`);

        await data.render(props, {
          state: this,
          kernel: this.kernel,
          stack: this.handler,
        });
      } catch (e) {
        throw new StateError(`${id}: ${(e as any).stack}`);
      }
    }
  }

  async loadStateNormally(
    id: string,
    data: State,
    htmlLoader: HTMLDivElement,
    cssLoader: HTMLLinkElement
  ) {
    Log(
      `StateHandler.loadStateNormally`,
      `BEGINNING NORMAL LOAD OF ${data.name} (${id})`
    );

    try {
      if (!data.html) throw "";
      const htmlContents = await (await fetch(data.html)).text();

      htmlLoader.innerHTML = htmlContents;
      Log(`StateHandler.loadState`, ` -> Loaded ${data.html}`);
    } catch {
      Log(
        `StateHandler.loadState`,
        `Failed to load HTML for state ${id}, is it specified?`,
        LogLevel.warning
      );
    }

    if (this.currentState) htmlLoader.classList.remove(this.currentState);

    htmlLoader.classList.add(`fullscreen`, id);
    cssLoader.href = data.css || "";

    Log(`StateHandler.loadState`, ` -> Loaded ${data.css}`);
  }

  async loadStateAsApp(data: State) {
    Log(
      `StateHandler.loadStateAsApp`,
      `BEGINNING LOAD OF ${data.name} (${data.identifier}) IN APP MODE`
    );

    const stack = this.kernel.getModule<ProcessHandler>("stack");

    if (!data.app) return;

    const { app } = data;

    const proc = await stack.spawn<AppProcess>(app.assets.runtime, this.pid, {
      ...{
        data: app,
        meta: app,
        id: app.id,
      },
    });

    if (!proc) throw new StateError(`Failed to spawn state app ${app.id}`);

    this.stateAppProcess = proc;

    Log(`StateHandler.loadState`, ` -> Loaded ${data.identifier}`);
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
