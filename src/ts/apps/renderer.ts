import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
import { contextProps } from "$ts/context/actions.svelte";
import { MessageBox } from "$ts/dialog";
import { BugReportIcon, ComponentIcon } from "$ts/images/general";
import { Draggable } from "@neodrag/vanilla";
import { unmount } from "svelte";
import type { App, AppProcessData } from "../../types/app";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { htmlspecialchars } from "../util";
import { Store } from "../writable";
import { AppRendererError } from "./error";
import { AppProcess } from "./process";
import { BuiltinApps } from "./store";
import { ArcMode } from "$ts/metadata/mode";
import { BETA } from "$ts/env";

export class AppRenderer extends Process {
  currentState: number[] = [];
  target: HTMLDivElement;
  maxZIndex = 1e6;
  focusedPid = Store(-1);
  appStore = Store<Map<string, AppProcessData>>(new Map());
  defaultApps = BuiltinApps;
  override _criticalProcess: boolean = true;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, target: string) {
    super(handler, pid, parentPid);

    const targetDiv = document.getElementById(target) as HTMLDivElement;

    if (!targetDiv) throw new AppRendererError("Tried to create an app renderer on a non existent element");

    this.target = targetDiv;
    handler.rendererPid = this.pid;
  }

  disposedCheck() {
    if (this._disposed) {
      throw new AppRendererError(`AppRenderer with PID ${this.pid} was killed`);
    }
  }

  async render(process: AppProcess, renderTarget: HTMLDivElement | undefined) {
    this.disposedCheck();

    if (process._disposed) return;

    this.Log(`Rendering PID ${process.pid}`);

    renderTarget ||= this.target;
    const window = document.createElement("div");
    const titlebar = this._renderTitlebar(process);
    const body = document.createElement("div");

    const { app } = process;
    const { data } = app;

    body.className = "body";

    window.className = "window";
    window.setAttribute("data-pid", process.pid.toString());
    window.id = data.id;

    if (!data.core && !data.state.headless) {
      window.append(titlebar as HTMLDivElement, body);
    } else {
      window.append(body);
    }

    if (data.state.headless) window.classList.add("headless");

    window.classList.add(data.id);

    if (data.glass) window.classList.add("glass");

    this._windowClasses(process, window, data);
    this._windowEvents(process, window, titlebar, data);

    if (data.overlay && process.parentPid) {
      const wrapper = document.createElement("div");
      const parent = document.querySelector(`div.window[data-pid="${process.parentPid}"]`);

      if (!parent) {
        renderTarget.append(window);
      } else {
        wrapper.setAttribute("data-pid", process.pid.toString());
        wrapper.className = `overlay-wrapper shade-${process.app.id}`;

        window.classList.add("overlay");

        wrapper.append(window);
        parent.append(wrapper);

        setTimeout(() => {
          wrapper.classList.add("visible");
        }, 100);
      }
    } else {
      renderTarget.append(window);
    }

    setTimeout(() => {
      window.classList.add("visible");
    }, 100);

    this.currentState.push(process.pid);
    if (!data.core) this.focusPid(process.pid);

    try {
      await process.__render__(body);
      await process.CrashDetection();
    } catch (e) {
      if (!process._disposed) {
        this.notifyCrash(data, e as Error, process);
      }

      await this.handler.kill(process.pid);
    }
  }

  _windowClasses(proc: AppProcess, window: HTMLDivElement, data: App) {
    this.disposedCheck();

    if (data.core) window.classList.add("core");
    else {
      window.style.maxWidth = `${data.maxSize?.w}px`;
      window.style.maxHeight = `${data.maxSize?.h}px`;
      window.style.minWidth = `${data.minSize?.w}px`;
      window.style.minHeight = `${data.minSize?.h}px`;
      window.style.width = `${data.size?.w}px`;
      window.style.height = `${data.size?.h}px`;

      if (!data.overlay) {
        if (data.position?.centered) {
          const x = data.position?.x || (document.body.offsetWidth - data.size?.w) / 2;
          const y = data.position?.y || (document.body.offsetHeight - 60 - data.size?.h) / 2;

          window.style.top = `${y}px`;
          window.style.left = `${x}px`;
          window.style.transform = `translate3d(0px, 0px, 0px)`;
        } else if (`${data.position?.x}` && `${data.position?.y}`) {
          window.style.top = `${data.position?.y}px`;
          window.style.left = `${data.position?.x}px`;
        } else {
          throw new Error(`Attempted to create a window without valid position`);
        }
      }

      if (data.state?.resizable) window.classList.add("resizable");
      if (data.state?.minimized) window.classList.add("minimized");
      if (data.state?.maximized) window.classList.add("maximized");
      if (data.state?.fullscreen) {
        window.classList.add("fullscreen");
        this.systemDispatch.dispatch("window-fullscreen", [proc.pid, proc.app.desktop]);
      }
      if (data.entrypoint || data.thirdParty || data.workingDirectory) window.classList.add("tp");
    }
  }

  _windowEvents(proc: AppProcess, window: HTMLDivElement, titlebar: HTMLDivElement | undefined, data: App) {
    this.disposedCheck();

    if (data.core || data.overlay) return;

    const draggable = new Draggable(window, {
      bounds: { top: 0, left: -10000000, right: -10000000 },
      handle: `.titlebar, .draggable`,
      cancel: `button, .nodrag`,
      legacyTranslate: false,
      gpuAcceleration: false,
    });

    proc.draggable = draggable;

    if (titlebar) {
      titlebar?.setAttribute("data-contextmenu", "_window-titlebar");
      contextProps(titlebar, [proc]);
    }

    window.addEventListener("mousedown", () => {
      this.focusPid(proc.pid);
    });

    this.focusedPid.subscribe((v) => {
      window.classList.remove("focused");

      if (v === proc.pid) window.classList.add("focused");
    });
  }

  focusPid(pid: number) {
    this.disposedCheck();

    const currentFocus = this.focusedPid.get();
    const window = document.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    this.unMinimize(pid);

    if (!window || currentFocus === pid) return;

    this.maxZIndex++;
    window.style.zIndex = this.maxZIndex.toString();

    this.focusedPid.set(pid);
  }

  _renderTitlebar(process: AppProcess) {
    this.disposedCheck();

    if (process.app.data.core) return undefined;

    const titlebar = document.createElement("div");
    const title = document.createElement("div");
    const titleIcon = document.createElement("img");
    const titleCaption = document.createElement("span");
    const controls = document.createElement("div");
    const feedbackButton = document.createElement("button");

    controls.className = "controls";

    const { app } = process;
    const { data } = app;

    if (data.controls.minimize) {
      const minimize = document.createElement("button");

      minimize.className = "minimize icon-chevron-down";
      minimize.addEventListener("click", () => this.toggleMinimize(process.pid));

      controls.append(minimize);
    }

    const unsnap = document.createElement("button");

    unsnap.className = "unsnap icon-arrow-down-left";
    unsnap.addEventListener("click", () => this.unsnapWindow(process.pid));

    controls.append(unsnap);

    if (data.controls.maximize) {
      const maximize = document.createElement("button");

      maximize.className = "maximize icon-chevron-up";
      maximize.addEventListener("click", () => this.toggleMaximize(process.pid));

      controls.append(maximize);
    }

    if (data.controls.close) {
      const close = document.createElement("button");

      close.className = "close icon-x";
      close.addEventListener("click", async () => {
        process.closeWindow();
      });

      controls.append(close);
    }

    titleCaption.innerText = `${data.metadata.name}`;

    process.windowTitle.subscribe((v) => {
      titleCaption.innerText = v;
    });

    process.windowIcon.subscribe((v) => {
      titleIcon.src = v;
    });

    titleIcon.src = process.userDaemon?.getAppIconByProcess(process) || ComponentIcon;

    title.className = "window-title";
    title.append(titleIcon, titleCaption);

    if (BETA) {
      const beta = document.createElement("span");

      beta.className = "beta-pill";
      beta.innerText = "BETA";

      title.append(beta);
    }

    titlebar.className = "titlebar";
    titlebar.append(title, this._renderAltMenu(process));

    if (BETA) {
      feedbackButton.className = "link feedback";
      feedbackButton.innerText = "Feedback?";
      feedbackButton.addEventListener("click", () => {
        process.userDaemon?.iHaveFeedback(process);
      });

      titlebar.append(feedbackButton);
    }

    titlebar.append(controls);

    return titlebar;
  }

  _renderAltMenu(process: AppProcess) {
    const menu = document.createElement("div");

    menu.className = "alt-menu";

    process.altMenu.subscribe((v) => {
      menu.classList.toggle("hidden", !v.length);
      menu.innerHTML = "";

      for (const item of v) {
        if (item.sep) {
          const hr = document.createElement("div");

          hr.className = "sep";

          menu.append(hr);

          continue;
        }

        if (!item.caption) continue;

        const button = document.createElement("button");

        button.className = "menu-item";
        button.innerText = item.caption;
        button.addEventListener("click", async (e) => {
          if (!item.subItems) {
            if (item.action) return await item.action(process);

            return;
          }

          const rect = button.getBoundingClientRect();
          const contextMenuPid = this.env.get("contextmenu_pid");
          if (!contextMenuPid) return;

          const contextMenu = this.handler.getProcess<ContextMenuRuntime>(+contextMenuPid);
          if (!contextMenu) return;

          contextMenu.createContextMenu({
            items: item.subItems || [],
            x: rect.x,
            y: rect.y + rect.height + 5,
          });
        });

        menu.append(button);
      }
    });

    return menu;
  }

  async remove(pid: number) {
    if (this._disposed) return;

    this.Log(`Removing render state of PID ${pid}`);

    if (!pid) return;

    const process = this.handler.getProcess<AppProcess>(pid, true);

    if (process?.componentMount && Object.entries(process.componentMount).length) unmount(process?.componentMount);

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`);
    const wrapper = this.target.querySelector(`div.overlay-wrapper[data-pid="${pid}"]`);
    const styling = document.body.querySelector(`link[id="$${pid}"]`);

    if (window) window.remove();
    if (styling) styling.remove();
    if (wrapper) {
      wrapper.remove();
    }

    if (this.focusedPid() === process?.pid) this.focusedPid.set(-1);

    const stateIndex = this.currentState.indexOf(pid);

    if (stateIndex > -1) this.currentState.splice(stateIndex, 1);
  }

  toggleMaximize(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;
    if (!window) return;

    window.classList.toggle("maximized");
    this.updateDraggableDisabledState(pid, window);

    this.systemDispatch.dispatch(window.classList.contains("maximized") ? "window-maximize" : "window-unmaximize", [pid]);
  }

  updateDraggableDisabledState(pid: number, window: HTMLDivElement) {
    const process = this.handler.getProcess<AppProcess>(pid);

    if (!process || !process.draggable) return;

    process.draggable.options = {
      ...process.draggable.options,
      disabled:
        window.classList.contains("snapped") ||
        window.classList.contains("maximized") ||
        window.classList.contains("minimized") ||
        window.classList.contains("fullscreen") ||
        window.classList.contains("overlay"),
    };
  }

  unMinimize(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window || !window.classList.contains("minimized")) return;

    window.classList.remove("minimized");
    const process = this.handler.getProcess<AppProcess>(+pid);

    if (!process || !process.app) return;

    this.systemDispatch.dispatch("window-unmaximize", [pid]);

    this.updateDraggableDisabledState(pid, window);
  }

  unsnapWindow(pid: number, dispatch = true) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window || !window.classList.contains("snapped")) return;

    window.classList.remove("snapped");

    if (window.dataset.snapstate) {
      window.classList.remove(window.dataset.snapstate);
      window.removeAttribute("data-snapstate");
    }

    if (dispatch) this.systemDispatch.dispatch("window-unsnap", [pid]);

    this.updateDraggableDisabledState(pid, window);
  }

  snapWindow(pid: number, variant: string) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window) return;
    if (window.dataset.snapstate) this.unsnapWindow(pid, false);
    if (!window.classList.contains("snapped")) window.classList.add("snapped");

    window.classList.add(variant);
    window.classList.remove("maximized");
    window.setAttribute("data-snapstate", variant);

    this.systemDispatch.dispatch("window-snap", [pid, variant]);
    this.updateDraggableDisabledState(pid, window);
  }

  toggleMinimize(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window) return;

    window.classList.toggle("minimized");

    const minimized = window.classList.contains("minimized");
    if (minimized) this.focusedPid.set(-1);

    this.systemDispatch.dispatch(minimized ? "window-minimize" : "window-unminimize", [pid]);
    this.updateDraggableDisabledState(pid, window);
  }

  toggleFullscreen(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window) return;

    window.classList.toggle("fullscreen");

    const process = this.handler.getProcess<AppProcess>(+pid);

    if (!process || !process.app) return;

    this.systemDispatch.dispatch(window.classList.contains("fullscreen") ? "window-fullscreen" : "window-unfullscreen", [
      pid,
      process.app.desktop,
    ]);
    this.updateDraggableDisabledState(pid, window);
  }

  getAppInstances(id: string, originPid?: number) {
    const result = [];

    for (const pid of this.currentState) {
      if (pid === originPid) continue;

      const proc = this.handler.getProcess<AppProcess>(pid);

      if (proc && proc.app && proc.app.data && proc.app.data.id === id) result.push(proc);
    }

    return result;
  }

  notifyCrash(data: App, e: Error, process: AppProcess) {
    console.warn(` - PID ${process?.pid} APPLICATION ERROR - `, e);
    const lines = [
      `<b><code>${data.id}::'${data.metadata.name}'</code> (PID ${
        process?.pid || "unknown"
      }) has encountered a problem and needs to close. I am sorry for the inconvenience.</b>`,
      `If you were in the middle of something, the information you were working on might be lost. You can choose to view the call stack, which may contain the reason for the crash.`,
      `<details><summary>Show call stack</summary><code class='block'>${htmlspecialchars(
        e.stack?.replaceAll(location.href, "") || ""
      )}</code></details>`,
    ];

    MessageBox(
      {
        title: `${data.metadata.name} - Application Error`,
        message: lines.join("<br><br>"),
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: BugReportIcon,
      },
      this.pid
    );
  }
}
