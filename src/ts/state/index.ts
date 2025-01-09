import { AppProcess } from "$ts/apps/process";
import { LogLevel } from "$types/logging";
import type { State } from "../../types/state";
import { WaveKernel } from "../kernel";
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

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    instanceName: string,
    store = States
  ) {
    super(handler, pid, parentPid);
    this.store = store;
    this.name = `StateHandler::${instanceName}`;

    this.Log(
      `Constructing new StateHandler with a store containing ${
        Object.entries(store).length
      } states`
    );
  }

  async loadState(
    id: string,
    props: Record<string, any> = {},
    instant = false
  ) {
    if (WaveKernel.isPanicked() && id !== "crash-screen") return;

    const data = this.store[id];

    console.group(`LoadState: ${id}`);

    if (!data)
      throw new StateError(
        `No such state ${id} on handler with PID ${this.pid}`
      );

    if (this.stateAppProcess) {
      console.group(`loadState: previous state app close`);

      this.Log(`Closing previous state app process...`);

      await this.stateAppProcess.closeWindow();

      this.stateAppProcess = undefined;

      console.groupEnd();
    }

    const { htmlLoader, cssLoader, main } = this.getStateLoaders();

    htmlLoader.innerHTML = "";
    cssLoader.href = "";

    if (!data.app && !(data.html && data.css)) {
      console.groupEnd();

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
      await this.loadStateAsApp(data, props);
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
        if (!data.render) {
          console.groupEnd();

          throw new StateError(`${id}: No render function`);
        }

        this.Log(`==> Rendering`);

        console.groupEnd();

        await data.render(props || {}, {
          state: this,
          kernel: this.kernel,
          stack: this.handler,
        });
      } catch (e) {
        console.groupEnd();

        throw new StateError(`${id}: ${(e as any).stack}`);
      }
    }

    console.groupEnd();
  }

  async loadStateNormally(
    id: string,
    data: State,
    htmlLoader: HTMLDivElement,
    cssLoader: HTMLLinkElement
  ) {
    this.Log(`BEGINNING NORMAL LOAD OF ${data.name} (${id})`);

    try {
      if (!data.html) throw "";
      const htmlContents = await (await fetch(data.html)).text();

      htmlLoader.innerHTML = htmlContents;
      this.Log(` -> Loaded ${data.html}`);
    } catch {
      this.Log(
        `Failed to load HTML for state ${id}, is it specified?`,
        LogLevel.warning
      );
    }

    if (this.currentState) htmlLoader.classList.remove(this.currentState);

    htmlLoader.classList.add(`fullscreen`, id);
    cssLoader.href = data.css || "";

    this.Log(` -> Loaded ${data.css}`);
  }

  async loadStateAsApp(data: State, props: Record<string, any>) {
    await Sleep(500);
    this.Log(`BEGINNING LOAD OF ${data.name} (${data.identifier}) IN APP MODE`);

    const stack = this.kernel.getModule<ProcessHandler>("stack");

    if (!data.app) return;

    const { app } = data;

    const proc = await stack.spawn<AppProcess>(
      app.assets.runtime,
      this.pid,
      {
        ...{
          data: app,
          meta: app,
          id: app.id,
        },
      },
      props
    );

    if (!proc) throw new StateError(`Failed to spawn state app ${app.id}`);

    this.stateAppProcess = proc;

    this.Log(` -> Loaded ${data.identifier}`);
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
