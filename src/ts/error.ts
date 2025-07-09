import { __Console__ } from "./console";
import { Crash } from "./crash";
import * as stackTraceParser from "stacktrace-parser";
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

    if (e instanceof ErrorEvent) {
      if (checkIndevTpa(e.error.stack, e.error)) {
        LOCKED = false;
        console.warn(`Refusing to crash ArcOS for ${e}: source is a tpa`);

        return false;
      }

      __Console__.log(e.error);
    } else if (e instanceof PromiseRejectionEvent) {
      if (checkIndevTpa(e.reason.stack, e.reason)) {
        LOCKED = false;
        console.warn(`Refusing to crash ArcOS for ${e}: source is a tpa`);

        return false;
      }

      __Console__.log(e.reason);
    }

    Crash(e);
    return false;
  }

  window.addEventListener("error", Error, { passive: false });
  window.addEventListener("unhandledrejection", Error, { passive: false });
}

export function checkIndevTpa(stack: string, e: Error): boolean {
  const parsed = stackTraceParser.parse(stack);
  const isTpa = !!parsed[0]?.file?.includes(`localhost:3128`) || !!parsed[0]?.file?.includes(`/tpa/new/`);

  if (isTpa) {
    const handler = WaveKernel?.get()?.getModule<ProcessHandler>?.("stack", true);
    const renderer = handler?.renderer;

    if (renderer && renderer.lastInteract && parsed[0]?.file?.includes(`/${renderer.lastInteract.app.id}@`)) {
      renderer.notifyCrash(renderer.lastInteract.app.data, e, renderer.lastInteract);
      handler.kill(renderer.lastInteract.pid);
      renderer.lastInteract = undefined;
    }
  }

  return isTpa;
}
