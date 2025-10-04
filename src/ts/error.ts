import type { ProcessHandlerType } from "$types/kernel";
import * as stackTraceParser from "stacktrace-parser";
import { __Console__ } from "./console";
import { Crash } from "./crash";
import { Kernel } from "./env";
import { Log } from "./logging";

export function handleGlobalErrors() {
  function DoError(e: ErrorEvent | PromiseRejectionEvent) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    return false;
  }

  window.addEventListener("error", DoError, { passive: false });
  window.addEventListener("unhandledrejection", DoError, { passive: false });

  window.console = new Proxy(console, {
    set(target, prop, value) {
      if (prop === "warn") {
        return true;
      }
      return Reflect.set(target, prop, value);
    },
  });
}

export function interceptTpaErrors(stack: string, e: Error): boolean {
  return true;
}
