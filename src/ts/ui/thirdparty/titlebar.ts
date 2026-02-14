import type { IAppProcess } from "$interfaces/app";
import { contextProps } from "$ts/ui/context/actions.svelte";
import { Stack } from "$ts/env";

export class CustomTitlebar {
  #className = "";
  #process: IAppProcess;
  #titlebar?: HTMLDivElement;
  #target?: HTMLElement;

  constructor(process: IAppProcess, className = "") {
    this.#process = process;
    this.#className = className;
  }

  render(target: HTMLElement) {
    if (this.#titlebar) throw new Error("CustomTitlebar instance already consumed");

    this.#target = target;
    this.#titlebar = Stack?.renderer?._renderTitlebar(this.#process);

    if (!this.#titlebar) throw new Error("CustomTitlebar: failed to create titlebar");
    if (this.#className) this.#titlebar.classList.add(this.#className);

    if (!this.#process.app.data.overlay) {
      this.#titlebar.setAttribute("data-contextmenu", "_window-titlebar");
      contextProps(this.#titlebar, [this.#process]);
    }

    this.#titlebar.classList.add("custom");

    target.append(this.#titlebar);
  }

  dispose() {
    this.#titlebar?.remove();
    this.#titlebar = undefined;
    this.#target = undefined;
  }

  getTarget() {
    return this.#target;
  }

  getTitlebar() {
    return this.#titlebar;
  }
}
