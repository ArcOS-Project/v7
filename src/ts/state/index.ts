import { AppProcess } from "$ts/apps/process";
import { getKMod, Kernel, Stack } from "$ts/env";
import type { ProcessHandlerType } from "$types/kernel";
import { LogLevel } from "$types/logging";
import type { State } from "../../types/state";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { StateError } from "./error";
import { States } from "./store";

export class StateHandler extends Process {
  store: Record<string, State> = {};
  currentState: string = "";
  stateProps: Record<string, Record<any, any>> = {};
  stateAppProcess: AppProcess | undefined;
  public _criticalProcess: boolean = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, instanceName: string, store = States) {
    super(pid, parentPid);
    this.store = store;
    this.name = `StateHandler::${instanceName}`;

    this.Log(`Constructing new StateHandler with a store containing ${Object.entries(store).length} states`);

    this.setSource(__SOURCE__);
  }

  async start() {
    const { htmlLoader } = this.getStateLoaders();

    htmlLoader.innerText = "...";
  }

  protected async stop(): Promise<any> {
    throw new Error("Tried to kill StateHandler!");
  }

  //#endregion

  async loadState(id: string, props: Record<string, any> = {}, instant = false) {
    if (this._disposed) return;

    if (Kernel?.PANICKED && id !== "crash-screen") return;

    const data = this.store[id];

    if (!data) throw new StateError(`No such state ${id} on handler with PID ${this.pid}`);

    if (this.stateAppProcess) {
      this.Log(`Closing previous state app process...`);

      await this.stateAppProcess.closeWindow();

      this.stateAppProcess = undefined;
    }

    const { htmlLoader, cssLoader, main } = this.getStateLoaders();

    htmlLoader.innerHTML = "";
    cssLoader.href = "";

    if (!data.appModule && !data.html) {
      throw new StateError(`${id}: Tried to load a state without any valid code.`);
    }

    this.stateProps[id] = props || {};

    if (!instant) {
      main.classList.add("hidden");

      await Sleep(400);
    }

    const appRenderer = Stack.renderer?.target;

    if (appRenderer) {
      appRenderer.className = "";
      appRenderer.removeAttribute("style");
      appRenderer.querySelector("#userStyleLoader")?.remove();
      appRenderer.querySelector(".virtual-desktop-container")?.remove();
    }

    if (data.appModule) {
      await this.loadStateAsApp(data, props);
    } else {
      await this.loadStateNormally(id, data, htmlLoader, cssLoader);
    }

    if (!instant) {
      await Sleep(500);

      main.classList.remove("hidden");
    }

    this.currentState = id;

    if (!data.appModule) {
      try {
        if (!data.render) {
          throw new StateError(`${id}: No render function`);
        }

        this.Log(`==> Rendering`);

        await data.render(props || {}, {
          state: this,
        });
      } catch (e) {
        throw new StateError(`${id}: ${(e as any).stack}`);
      }
    }
  }

  async loadStateNormally(id: string, data: State, htmlLoader: HTMLDivElement, cssLoader: HTMLLinkElement) {
    if (this._disposed) return;

    this.Log(`BEGINNING NORMAL LOAD OF ${data.name} (${id})`);

    try {
      if (!data.html) throw "";
      const htmlContents = await (await fetch(data.html)).text();

      htmlLoader.innerHTML = htmlContents;
      this.Log(` -> Loaded ${data.html}`);
    } catch {
      this.Log(`Failed to load HTML for state ${id}, is it specified?`, LogLevel.warning);
    }

    if (this.currentState) htmlLoader.classList.remove(this.currentState);

    htmlLoader.classList.add(`fullscreen`, id);
  }

  async loadStateAsApp(data: State, props: Record<string, any>) {
    if (this._disposed) return;

    this.Log(`BEGINNING LOAD OF ${data.name} (${data.identifier}) IN APP MODE`);

    const stack = getKMod<ProcessHandlerType>("stack");

    if (!data.appModule) return;

    const mod = await data.appModule();
    const app = mod.default;
    const proc = await stack.spawn<AppProcess>(
      app.assets.runtime,
      undefined,
      "SYSTEM",
      this.pid,
      {
        ...{
          data: app,
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
    const cssLoader = document.getElementById("stateCSSLoader") as HTMLLinkElement;
    const htmlLoader = document.getElementById("stateLoader") as HTMLDivElement;

    if (!cssLoader || !htmlLoader || !main) throw new StateError("Missing elements of state handling.");

    return { htmlLoader, cssLoader, main };
  }
}
