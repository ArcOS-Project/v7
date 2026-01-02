import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
import { contextProps } from "$ts/context/actions.svelte";
import { BETA, BugHunt, Env, Stack, SysDispatch } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UUID } from "$ts/uuid";
import { Draggable } from "@neodrag/vanilla";
import { unmount } from "svelte";
import type { App, AppProcessData, WindowResizer } from "../../types/app";
import { Process } from "../process/instance";
import { Store } from "../writable";
import { AppRendererError } from "./error";
import { AppProcess } from "./process";
import { BuiltinAppImportPathAbsolutes } from "./store";
import { DistributionServiceProcess } from "$ts/distrib";

export class AppRenderer extends Process {
  currentState: number[] = [];
  target: HTMLDivElement;
  maxZIndex = 1e6;
  focusedPid = Store(-1);
  appStore = Store<Map<string, AppProcessData>>(new Map());
  lastInteract?: AppProcess;
  override _criticalProcess: boolean = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, target: string) {
    super(pid, parentPid);

    const targetDiv = document.getElementById(target) as HTMLDivElement;

    if (!targetDiv) throw new AppRendererError("Tried to create an app renderer on a non existent element");

    this.target = targetDiv;
    Stack.rendererPid = this.pid;
    this.name = "AppRenderer";

    this.setSource(__SOURCE__);
  }

  protected async start() {
    this.focusedPid.subscribe((v) => {
      if (this._disposed || !v) return;

      this.lastInteract = Stack.getProcess(v);
    });
  }

  disposedCheck() {
    if (this._disposed) {
      throw new AppRendererError(`AppRenderer with PID ${this.pid} was killed`);
    }
  }

  //#endregion

  async render(process: AppProcess, renderTarget: HTMLDivElement | undefined) {
    this.disposedCheck();

    if (process._disposed) return;

    this.Log(`Rendering PID ${process.pid}`);

    renderTarget ||= this.target;
    const window = document.createElement("div");
    const titlebar = this._renderTitlebar(process);
    const body = document.createElement("div");
    this._resizeGrabbers(process, window);

    const { app } = process;
    const { data } = app;

    body.className = "body";

    const shell = Stack.getProcess(+Env.get("shell_pid"));

    window.className = "window shell-colored";
    window.setAttribute("data-pid", process.pid.toString());
    window.addEventListener("click", () => {
      this.lastInteract = process;
    });
    window.id = data.id;
    window.classList.toggle("no-shell", !shell);

    Daemon?.preferences.subscribe((v) => {
      window.classList.toggle("colored", v.shell.taskbar.colored && !app.data.core);
    });

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
        process.STATE = "error";
        this.notifyCrash(data, e as Error, process);
      }

      await Stack.kill(process.pid);
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
        SysDispatch.dispatch("window-fullscreen", [proc.pid, proc.app.desktop]);
      }
      if (data.entrypoint || data.thirdParty || data.workingDirectory) window.classList.add("tp");
    }
  }

  _windowEvents(proc: AppProcess, window: HTMLDivElement, titlebar: HTMLDivElement | undefined, data: App) {
    this.disposedCheck();

    if (data.core || data.overlay) return;

    const draggable = new Draggable(window, {
      bounds: { top: 0, left: -10000000, right: -10000000, bottom: -10000000 },
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
      titleIcon.src = process.getIconCached(v) || v;
    });

    titleIcon.src = Daemon?.icons?.getAppIconByProcess(process) || process.getIconCached("ComponentIcon");

    title.className = "window-title";
    title.append(titleIcon, titleCaption, this._renderAltMenu(process));

    if (BETA) {
      const beta = document.createElement("span");

      beta.className = "beta-pill";
      beta.innerText = "BETA";

      title.append(beta);
    }

    titlebar.className = "titlebar";
    titlebar.append(title);

    if (BETA && !process.app.data.entrypoint && !process.app.data.workingDirectory && !process.app.data.thirdParty) {
      feedbackButton.className = "link feedback";
      feedbackButton.innerText = "Feedback?";
      feedbackButton.addEventListener("click", () => {
        Daemon?.helpers?.iHaveFeedback(process);
      });

      titlebar.append(feedbackButton);
    }

    titlebar.append(controls);

    return titlebar;
  }

  _renderAltMenu(process: AppProcess) {
    const menu = document.createElement("div");

    menu.className = "alt-menu nodrag";

    const contextMenuPid = Env.get("contextmenu_pid");
    const contextMenu = Stack.getProcess<ContextMenuRuntime>(+contextMenuPid);
    if (!contextMenu) return menu;

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
        const uuid = UUID();

        contextMenu?.currentMenu.subscribe((v) => {
          button.classList.toggle("selected", uuid === v);
        });

        button.className = "menu-item";
        button.innerText = item.caption;
        button.addEventListener("click", async (e) => {
          if (!item.subItems) {
            if (item.action) return await item.action(process);

            return;
          }

          if (contextMenu?.currentMenu() === uuid) return;

          const rect = button.getBoundingClientRect();

          contextMenu?.currentMenu.set(uuid);
          contextMenu?.createContextMenu({
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

  _resizeGrabbers(process: AppProcess, window: HTMLDivElement) {
    if (!process.app.data.state.resizable || process.app.data.core) return undefined;

    const RESIZERS: WindowResizer[] = [
      { className: "top", cursor: "ns-resize", width: "100%", height: "7px", top: "-3px" },
      { className: "bottom", cursor: "ns-resize", width: "100%", height: "7px", bottom: "-3px" },
      { className: "left", cursor: "ew-resize", width: "7px", height: "100%", left: "-3px" },
      { className: "right", cursor: "ew-resize", width: "7px", height: "100%", right: "-3px" },
      { className: "top-left", cursor: "nwse-resize", width: "14px", height: "14px", top: "-3px", left: "-3px" },
      { className: "top-right", cursor: "nesw-resize", width: "14px", height: "14px", top: "-3px", right: "-3px" },
      { className: "bottom-left", cursor: "nesw-resize", width: "14px", height: "14px", bottom: "-3px", left: "-3px" },
      { className: "bottom-right", cursor: "nwse-resize", width: "14px", height: "14px", bottom: "-3px", right: "-3px" },
    ];

    for (const resizer of RESIZERS) {
      const el = this._resizer(window, resizer);

      window.append(el);
    }
  }

  _resizer(window: HTMLDivElement, resizer: WindowResizer) {
    const el = document.createElement("div");
    el.className = `resizer ${resizer.className}`;

    let style = `width: ${resizer.width}; height: ${resizer.height}; cursor: ${resizer.cursor};`;

    if (resizer.top) style += `top: ${resizer.top};`;
    if (resizer.left) style += `left: ${resizer.left};`;
    if (resizer.bottom) style += `bottom: ${resizer.bottom};`;
    if (resizer.right) style += `right: ${resizer.right};`;

    el.setAttribute("style", style);

    el.addEventListener("mousedown", (e) => {
      e.preventDefault();

      window.classList.add("resizing");

      const startX = e.clientX;
      const startY = e.clientY;
      const startWidth = window.offsetWidth;
      const startHeight = window.offsetHeight;
      const startLeft = window.offsetLeft;
      const startTop = window.offsetTop;

      function resizeMove(e: MouseEvent) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const minWidth = parseInt(window.style.minWidth) || 100;
        const minHeight = parseInt(window.style.minHeight) || 100;

        if (resizer.className.includes("right")) {
          const newWidth = startWidth + dx;
          if (newWidth >= minWidth) {
            window.style.width = newWidth + "px";
          }
        }

        if (resizer.className.includes("bottom")) {
          const newHeight = startHeight + dy;
          if (newHeight >= minHeight) {
            window.style.height = newHeight + "px";
          }
        }

        if (resizer.className.includes("left")) {
          const newWidth = startWidth - dx;
          if (newWidth >= minWidth) {
            window.style.width = newWidth + "px";
            window.style.left = startLeft + dx + "px";
          } else {
            window.style.width = minWidth + "px";
            window.style.left = startLeft + (startWidth - minWidth) + "px";
          }
        }

        if (resizer.className.includes("top")) {
          const newHeight = startHeight - dy;
          const newTop = startTop + dy;
          if (newHeight >= minHeight && newTop >= 0) {
            window.style.height = newHeight + "px";
            window.style.top = newTop + "px";
          } else if (newTop < 0) {
            window.style.top = "0px";
            window.style.height = startHeight + startTop + "px";
          } else {
            window.style.height = minHeight + "px";
            window.style.top = startTop + (startHeight - minHeight) + "px";
          }
        }
      }

      function stopResize(e: MouseEvent) {
        document.removeEventListener("mousemove", resizeMove);
        document.removeEventListener("mouseup", stopResize);

        const mouseUpEvent = new MouseEvent("mouseup", {
          clientX: e.clientX,
          clientY: e.clientY,
        });

        window.dispatchEvent(mouseUpEvent);
        window.classList.remove("resizing");
      }

      document.addEventListener("mousemove", resizeMove);
      document.addEventListener("mouseup", stopResize);
    });

    return el;
  }

  async remove(pid: number) {
    if (this._disposed) return;

    this.Log(`Removing render state of PID ${pid}`);

    if (!pid) return;

    const process = Stack.getProcess<AppProcess>(pid, true);

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

    if (window.classList.contains("maximized")) {
      window.classList.add("unmaximizing");
      setTimeout(() => {
        window.classList.remove("unmaximizing");
      }, 300);
    }

    window.classList.toggle("maximized");

    this.updateDraggableDisabledState(pid, window);

    SysDispatch.dispatch(window.classList.contains("maximized") ? "window-maximize" : "window-unmaximize", [pid]);
  }

  updateDraggableDisabledState(pid: number, window: HTMLDivElement) {
    const process = Stack.getProcess<AppProcess>(pid);

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
    const process = Stack.getProcess<AppProcess>(+pid);

    if (!process || !process.app) return;

    SysDispatch.dispatch("window-unminimize", [pid, process.app.desktop]);

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

    if (dispatch) SysDispatch.dispatch("window-unsnap", [pid]);

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

    SysDispatch.dispatch("window-snap", [pid, variant]);
    this.updateDraggableDisabledState(pid, window);
  }

  toggleMinimize(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window) return;

    window.classList.toggle("minimized");

    const minimized = window.classList.contains("minimized");
    if (minimized) this.focusedPid.set(-1);

    const process = Stack.getProcess<AppProcess>(+pid);

    if (!process || !process.app) return;

    SysDispatch.dispatch(minimized ? "window-minimize" : "window-unminimize", [pid, process.app.desktop]);
    this.updateDraggableDisabledState(pid, window);
  }

  toggleFullscreen(pid: number) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${pid}"]`) as HTMLDivElement;

    if (!window) return;

    window.classList.toggle("fullscreen");

    const process = Stack.getProcess<AppProcess>(+pid);

    if (!process || !process.app) return;

    SysDispatch.dispatch(window.classList.contains("fullscreen") ? "window-fullscreen" : "window-unfullscreen", [
      pid,
      process.app.desktop,
    ]);
    this.updateDraggableDisabledState(pid, window);
  }

  getAppInstances(id: string, originPid?: number) {
    const result = [];

    for (const pid of this.currentState) {
      if (pid === originPid) continue;

      const proc = Stack.getProcess<AppProcess>(pid);

      if (proc && proc.app && proc.app.data && proc.app.data.id === id) result.push(proc);
    }

    return result;
  }

  async notifyCrash(data: App, reason: any, process?: AppProcess) {
    const mod = await BuiltinAppImportPathAbsolutes["/src/apps/components/oopsnotifier/OopsNotifier.ts"]();
    const app = (mod as any).default as App;
    const storeItem = await Daemon.serviceHost
      ?.getService<DistributionServiceProcess>("DistribSvc")
      ?.getInstalledStoreItemByAppId(data.id);

    const stack = reason instanceof PromiseRejectionEvent ? reason.reason.stack : reason.stack || "No stack";

    // I'm not sending app reports to the servers if we're in dev,
    // even if they might be useful to some app developers.
    if (!import.meta.env.DEV)
      await BugHunt.sendReport(
        BugHunt.createReport(
          {
            body: `${stack}`,
            title: `APP - ${reason}`,
            public: true,
            anonymous: true,
          },
          data,
          storeItem?._id
        )
      );

    await Stack.waitForAvailable();
    const proc = await Stack.spawn(
      app.assets.runtime,
      undefined,
      "SYSTEM",
      +Env.get("shell_pid"),
      {
        data: { ...app, overlay: true },
        id: app.id,
        desktop: undefined,
      },
      data,
      reason,
      process
    );

    if (!proc) {
      this.Log(`OOPS FALLBACK - ${reason}`);
    }
  }
}
