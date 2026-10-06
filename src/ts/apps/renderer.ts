import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAppRenderer, IAppRendererContext } from "$interfaces/IAppRenderer";
import type { IContextMenuRuntime } from "$interfaces/runtimes/IContextMenuRuntime";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import type { IIconService } from "$interfaces/services/IIconService";
import { __Console__ } from "$ts/console";
import { BETA, BugHunt, Daemon, Env, Stack, SysDispatch } from "$ts/env";
import { ProcessesHelper } from "$ts/helpers/processes";
import { BlankIcon } from "$ts/images/general";
import { Sleep } from "$ts/sleep";
import { contextProps } from "$ts/ui/context/actions.svelte";
import { UUID } from "$ts/util/uuid";
import { LogLevel } from "$types/shared/logging";
import { Draggable } from "@neodrag/vanilla";
import { getContext, unmount } from "svelte";
import type { App, WindowResizer } from "../../types/apps/app";
import { Process } from "../kernel/mods/stack/process/instance";
import { Store } from "../writable";
import { AppRendererError } from "./error";
import { BuiltinAppImportPathAbsolutes } from "./store";

export class AppRenderer extends Process implements IAppRenderer {
  currentState: string[] = [];
  target: HTMLDivElement;
  maxZIndex = 1e6;
  focusedContext = Store("");
  state = Store<Map<string, IAppRendererContext>>(new Map());
  lastInteract?: IAppRendererContext;
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
    this.focusedContext.subscribe((v) => {
      if (this._disposed || !v) return;

      this.lastInteract = this.state().get(v);
      if (this.lastInteract?.process) this.lastInteract.blinking?.set(false);
    });
  }

  disposedCheck() {
    if (this._disposed) {
      throw new AppRendererError(`AppRenderer with PID ${this.pid} was killed`);
    }
  }

  //#endregion

  async render(context: IAppRendererContext, renderTarget: HTMLDivElement | undefined) {
    this.disposedCheck();

    if (context?.process?._disposed) return;

    this.Log(`Rendering PID ${context.process?.pid}`);

    renderTarget ||= this.target;
    const window = document.createElement("div");
    const titlebar = this._renderTitlebar(context);
    const toast = this._renderToast(context);
    const body = document.createElement("div");
    this._resizeGrabbers(context, window);

    body.className = "body";

    const shell = Stack.getProcess(+Env.get("shell_pid"));

    window.className = "window shell-colored";
    window.setAttribute("data-pid", context.ownerPid.toString());
    window.addEventListener("click", () => {
      this.lastInteract = context;
    });
    window.id = context.appId;
    window.classList.toggle("no-shell", !shell);

    Daemon?.preferences.subscribe((v) => {
      window.classList.toggle("colored", v.shell.taskbar.colored && !context.data.core);
    });

    if (!context.data.core && !context.data.state.headless) {
      window.append(titlebar as HTMLDivElement, body, toast);
    } else {
      window.append(body, toast);
    }

    if (context.data.state.headless) window.classList.add("headless");

    window.classList.add(context.data.id);

    if (context.data.glass) window.classList.add("glass");

    this._windowClasses(context, window, context.data);
    this._windowEvents(context, window, titlebar, context.data);

    if (context.data.overlay && context.parentContextId) {
      const wrapper = document.createElement("div");
      const parent = document.querySelector(`div.window[data-wcontext="${context.parentContextId}"]`) || this.target;

      if (!parent) {
        renderTarget.append(window);
      } else {
        wrapper.setAttribute("data-pid", context.ownerPid.toString());
        wrapper.setAttribute("data-wcontext", context.identifier.toString());
        wrapper.className = `window-overlay-wrapper shade-${context.appId}`;

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

    this.currentState.push(context.identifier);
    if (!context.data.core && !context.data.overlay && ProcessesHelper.IsAnyGraphicalAppProcess(context.process!))
      this.focusContext(context.identifier);

    try {
      await context.__render__(body);
      await context.CrashDetection();
    } catch (e) {
      if (!context.process?._disposed) {
        context.process!.STATE = "error";
        this.notifyCrash(context.data, e as Error, context.process);
      }
      this.removeAllOfProcess(context.ownerPid);
      await Stack.kill(context.ownerPid);
    }
  }

  _windowClasses(context: IAppRendererContext, window: HTMLDivElement, data: App) {
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
        SysDispatch.dispatch("window-fullscreen", [context.identifier, context.desktop]);
      }
      if (data.entrypoint || data.thirdParty || data.workingDirectory) window.classList.add("tp");
    }
  }

  async centerWindow(context: IAppRendererContext) {
    await Sleep(0);
    const data = context.data;
    const window = context.getWindow();
    const rect = window.getBoundingClientRect();

    if (data.position?.centered) {
      const x = (document.body.offsetWidth - rect.width) / 2;
      const y = (document.body.offsetHeight - 60 - rect.height) / 2;

      window.style.top = `${y}px`;
      window.style.left = `${x}px`;
      window.style.transform = `translate3d(0px, 0px, 0px)`;
      window.style.translate = `0 0`;
      this._windowDraggable(context, window);
    }
  }

  _windowDraggable(context: IAppRendererContext, window: HTMLDivElement) {
    context?.draggable?.destroy();

    const draggable = new Draggable(window, {
      bounds: { top: 0, left: -10000000, right: -10000000, bottom: -10000000 },
      handle: `.titlebar, .draggable`,
      cancel: `button, .nodrag`,
      legacyTranslate: false,
      gpuAcceleration: false,
    });

    context.draggable = draggable;
  }

  _windowEvents(context: IAppRendererContext, window: HTMLDivElement, titlebar: HTMLDivElement | undefined, data: App) {
    this.disposedCheck();

    if (data.core || data.overlay) return;

    this._windowDraggable(context, window);

    if (titlebar) {
      titlebar?.setAttribute("data-contextmenu", "_window-titlebar");
      contextProps(titlebar, [context]);
    }

    window.addEventListener("mousedown", () => {
      this.focusContext(context.identifier);
    });

    this.focusedContext.subscribe((v) => {
      window.classList.remove("focused");

      if (v === context.identifier) window.classList.add("focused");
    });
  }

  focusContext(contextId: string) {
    this.disposedCheck();

    const currentFocus = this.focusedContext.get();
    const window = document.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;

    this.unMinimize(contextId);

    if (!window || currentFocus === contextId) return;

    this.maxZIndex++;
    window.style.zIndex = this.maxZIndex.toString();

    this.focusedContext.set(contextId);
  }

  _renderTitlebar(context: IAppRendererContext) {
    this.disposedCheck();

    if (context.data.core) return undefined;

    const titlebar = document.createElement("div");
    const title = document.createElement("div");
    const titleIcon = document.createElement("img");
    const titleCaption = document.createElement("span");
    const controls = document.createElement("div");

    controls.className = "controls";

    if (context.data.controls.minimize) {
      const minimize = document.createElement("button");

      minimize.className = "minimize icon-chevron-down";
      minimize.addEventListener("click", () => this.toggleMinimize(context.identifier));

      controls.append(minimize);
    }

    const unsnap = document.createElement("button");

    unsnap.className = "unsnap icon-arrow-down-left";
    unsnap.addEventListener("click", () => this.unsnapWindow(context.identifier));

    controls.append(unsnap);

    if (context.data.controls.maximize) {
      const maximize = document.createElement("button");

      maximize.className = "maximize icon-chevron-up";
      maximize.addEventListener("click", () => this.toggleMaximize(context.identifier));

      controls.append(maximize);
    }

    if (context.data.controls.close) {
      const close = document.createElement("button");

      close.className = "close icon-x";
      close.addEventListener("click", async () => {
        context?.closeWindow();
      });

      controls.append(close);
    }

    titleCaption.innerText = `${context.data.metadata.name}`;

    context.windowTitle.subscribe((v) => {
      titleCaption.innerText = v;
    });

    context.windowIcon.subscribe((v) => {
      titleIcon.src = context.process?.getIconCached(v) || v;
    });

    Daemon?.serviceHost?.Gate<IIconService>(
      "IconService",
      () => {
        const icon =
          context.process?.getIconCached(`@app::${context.appId}`) ||
          context.process?.getIconCached("ComponentIcon") ||
          BlankIcon;
        titleIcon.src = icon === `@app::${context.appId}` ? BlankIcon : icon;
      },
      () => {
        titleIcon.src = BlankIcon;
      }
    );

    title.className = "window-title";
    title.append(titleIcon, titleCaption, this._renderAltMenu(context));

    if (BETA) {
      const beta = document.createElement("span");

      beta.className = "beta-pill";
      beta.innerText = "BETA";

      title.append(beta);
    }

    titlebar.className = "titlebar";
    titlebar.append(title);

    titlebar.append(controls);

    return titlebar;
  }

  _renderAltMenu(context: IAppRendererContext) {
    const menu = document.createElement("div");

    menu.className = "alt-menu nodrag";

    const contextMenuPid = Env.get("contextmenu_pid");
    const contextMenu = Stack.getProcess<IContextMenuRuntime>(+contextMenuPid);
    if (!contextMenu) return menu;

    context.altMenu.subscribe((v) => {
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

  _renderToast(context: IAppRendererContext) {
    const toast = document.createElement("div");
    const content = document.createElement("span");
    const icon = document.createElement("span");

    content.className = "content";
    toast.className = "window-toast-popup";
    icon.className = "lucide icon-info";

    toast.append(icon, content);

    context.toastMessage.subscribe((v) => {
      if (!v) {
        toast.classList.remove("show");

        return;
      }

      content.innerText = v.content;
      icon.className = "lucide icon-" + (v.icon ?? "");
      toast.classList.add("show");
    });

    return toast;
  }

  _resizeGrabbers(context: IAppRendererContext, window: HTMLDivElement) {
    if (!context.data.state.resizable || context.data.core) return undefined;

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

  remove(contextId: string) {
    if (this._disposed) return;

    this.Log(`Removing render state of context ${contextId}`);

    if (!contextId) return;

    const context = this.state().get(contextId);

    if (context?.componentMount && Object.entries(context.componentMount).length) unmount(context?.componentMount);

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`);
    const wrapper = this.target.querySelector(`div.window-overlay-wrapper[data-wcontext="${contextId}"]`);
    const styling = document.body.querySelector(`link[id="${contextId}"]`);

    if (window) window.remove();
    if (styling) styling.remove();
    if (wrapper) {
      wrapper.remove();
    }

    if (this.focusedContext() === context?.identifier) this.focusedContext.set("");

    const stateIndex = this.currentState.indexOf(contextId);
    if (stateIndex > -1) this.currentState.splice(stateIndex, 1);
  }

  removeAllOfProcess(pid: number) {
    const contexts = [...this.state()].filter(([_, context]) => context.ownerPid === pid);

    for (const [contextId] of contexts) {
      this.remove(contextId);
    }
  }

  toggleMaximize(contextId: string) {
    this.disposedCheck();

    const context = this.state().get(contextId);
    if (!context) return;

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;
    if (!window) return;

    if (window.classList.contains("maximized")) {
      window.classList.add("unmaximizing");
      setTimeout(() => {
        window.classList.remove("unmaximizing");
      }, 300);
    }

    window.classList.toggle("maximized");

    this.updateDraggableDisabledState(context, window);

    SysDispatch.dispatch(window.classList.contains("maximized") ? "window-maximize" : "window-unmaximize", [contextId]);
  }

  updateDraggableDisabledState(context: IAppRendererContext, window: HTMLDivElement) {
    if (!context.draggable) return;

    context.draggable.options = {
      ...context.draggable.options,
      disabled:
        window.classList.contains("snapped") ||
        window.classList.contains("maximized") ||
        window.classList.contains("minimized") ||
        window.classList.contains("fullscreen") ||
        window.classList.contains("overlay"),
    };
  }

  unMinimize(contextId: string) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;
    if (!window || !window.classList.contains("minimized")) return;

    window.classList.remove("minimized");

    const context = this.state().get(contextId);
    if (!context) return;

    SysDispatch.dispatch("window-unminimize", [context.identifier, context.desktop]);

    this.updateDraggableDisabledState(context, window);
  }

  unsnapWindow(contextId: string, dispatch = true) {
    this.disposedCheck();

    const context = this.state().get(contextId);
    if (!context) return;

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;
    if (!window || !window.classList.contains("snapped")) return;

    window.classList.remove("snapped");

    if (window.dataset.snapstate) {
      window.classList.remove(window.dataset.snapstate);
      window.removeAttribute("data-snapstate");
    }

    if (dispatch) SysDispatch.dispatch("window-unsnap", [contextId]);

    this.updateDraggableDisabledState(context, window);
  }

  snapWindow(contextId: string, variant: string) {
    this.disposedCheck();

    const context = this.state().get(contextId);
    if (!context) return;

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;
    if (!window) return;

    if (window.dataset.snapstate) this.unsnapWindow(contextId, false);
    if (!window.classList.contains("snapped")) window.classList.add("snapped");

    window.classList.add(variant);
    window.classList.remove("maximized");
    window.setAttribute("data-snapstate", variant);

    SysDispatch.dispatch("window-snap", [contextId, variant]);
    this.updateDraggableDisabledState(context, window);
  }

  toggleMinimize(contextId: string) {
    this.disposedCheck();

    const window = this.target.querySelector(`div.window[data-pid="${contextId}"]`) as HTMLDivElement;

    if (!window) return;

    window.classList.toggle("minimized");

    const minimized = window.classList.contains("minimized");
    if (minimized) this.focusedContext.set("");

    const context = this.state().get(contextId);
    if (!context) return;

    SysDispatch.dispatch(minimized ? "window-minimize" : "window-unminimize", [contextId, context.desktop]);
    this.updateDraggableDisabledState(context, window);
  }

  toggleFullscreen(contextId: string) {
    this.disposedCheck();

    const context = this.state().get(contextId);
    if (!context) return;

    const window = this.target.querySelector(`div.window[data-wcontext="${contextId}"]`) as HTMLDivElement;
    if (!window) return;

    window.classList.toggle("fullscreen");

    SysDispatch.dispatch(window.classList.contains("fullscreen") ? "window-fullscreen" : "window-unfullscreen", [
      contextId,
      context.desktop,
    ]);
    this.updateDraggableDisabledState(context, window);
  }

  getAppInstances(id: string, originPid?: number) {
    const result: IAppProcess[] = [];

    for (const contextId of this.currentState) {
      const context = this.state().get(contextId);
      if (
        context?.process &&
        context.appId === id &&
        (!originPid || context.process.pid !== originPid) &&
        !result.find((process) => process.pid === context.process!.pid)
      ) {
        result.push(context.process);
      }
    }

    return result;
  }

  async notifyCrash(data: App, reason: any, process?: IAppProcess) {
    if (!data) return;

    this.Log(
      `An unhandled exception occurred in process with PID ${process?.pid ?? "<unknown>"} -- ${data.id}`,
      LogLevel.warning
    );
    __Console__.warn(reason);

    const mod = await BuiltinAppImportPathAbsolutes["/src/apps/components/oopsnotifier/OopsNotifier.ts"]();
    const app = (mod as any).default as App;
    const storeItem = await Daemon.serviceHost
      ?.getService<IDistributionServiceProcess>("DistribSvc")
      ?.getInstalledStoreItemByAppId(data?.id);

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

  getContextsOfPid(pid: number): IAppRendererContext[] {
    return [
      ...this.state()
        .values()
        .filter((context) => context.ownerPid === pid),
    ];
  }

  determineParentContext(pid: number): IAppRendererContext | undefined {
    const contexts = this.getContextsOfPid(pid);
    if (!contexts.length) return undefined;

    return contexts[contexts.length - 1];
  }
}
