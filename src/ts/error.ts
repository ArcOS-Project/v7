import { LogLevel } from "$types/logging";
import * as stackTraceParser from "stacktrace-parser";
import { __Console__ } from "./console";
import { Crash } from "./crash";
import { WaveKernel } from "./kernel";
import { ProcessHandler } from "./process/handler";
export function handleGlobalErrors() {
  let LOCKED = false;
  function Error(e: ErrorEvent | PromiseRejectionEvent) {
    if (LOCKED) {
      e.preventDefault();
      return false;
    }
    LOCKED = true;

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    if (e instanceof ErrorEvent) {
      if (checkIndevTpa(e.error.stack, e.error)) {
        LOCKED = false;

        return false;
      }

      __Console__.warn(e.error);
    } else if (e instanceof PromiseRejectionEvent) {
      if (checkIndevTpa(e.reason.stack, e.reason)) {
        LOCKED = false;

        return false;
      }

      __Console__.warn(e.reason);
    }

    Crash(e);
    return false;
  }

  window.addEventListener("error", Error, { passive: false });
  window.addEventListener("unhandledrejection", Error, { passive: false });

  window.console = new Proxy(console, {
    get(target, prop) {
      if (prop === "warn") {
        return (...args: any[]) => {
          WaveKernel.get().Log(`Console`, args.join(", "), LogLevel.warning);
        };
      }
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      if (prop === "warn") {
        // Silently ignore any attempts to override console.warn
        return true;
      }
      return Reflect.set(target, prop, value);
    },
  });
}

export function checkIndevTpa(stack: string, e: Error): boolean {
  const parsed = stackTraceParser.parse(stack);
  const isTpa = !!parsed[0]?.file?.includes(`localhost:3128`) || !!parsed[0]?.file?.includes(`/tpa/new/`);
  const isSvelte = stack.includes("https://svelte.dev/e/");

  const handler = WaveKernel?.get()?.getModule<ProcessHandler>?.("stack", true);
  const renderer = handler?.renderer;

  if (renderer && renderer.lastInteract && parsed[0]?.file?.includes(`/${renderer.lastInteract.app.id}@`)) {
    if (isTpa) {
      renderer.notifyCrash(renderer.lastInteract.app.data, e, renderer.lastInteract);
      handler.kill(renderer.lastInteract.pid);
      renderer.lastInteract = undefined;
    } else if (isSvelte) {
      renderer.notifyCrash(renderer.lastInteract.app.data, e, renderer.lastInteract);
      handler.kill(renderer.lastInteract.pid);
      renderer.lastInteract = undefined;
    }
  }

  return isTpa;
}
