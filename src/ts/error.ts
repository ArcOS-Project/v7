import { __Console__ } from "./console";
import { Crash } from "./crash";
import * as stackTraceParser from "stacktrace-parser";
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
      if (checkIndevTpa(e.error.stack)) {
        LOCKED = false;
        console.warn(`Refusing to crash ArcOS for ${e}: source is an indev tpa`);

        return false;
      }

      __Console__.log(e.error);
    } else if (e instanceof PromiseRejectionEvent) {
      if (checkIndevTpa(e.reason.stack)) {
        LOCKED = false;
        console.warn(`Refusing to crash ArcOS for ${e}: source is an indev tpa`);

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

export function checkIndevTpa(stack: string): boolean {
  const parsed = stackTraceParser.parse(stack);

  return !!parsed[0]?.file?.includes(`localhost:3128`) || !!parsed[0]?.file?.includes(`/tpa/new/`);
}
