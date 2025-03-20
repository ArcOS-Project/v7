import { Crash } from "./crash";

export function handleGlobalErrors() {
  let LOCKED = false;
  function Error(e: ErrorEvent | PromiseRejectionEvent) {
    if (LOCKED) {
      e.preventDefault();
      return false;
    }
    LOCKED = true;
    if (e instanceof ErrorEvent) {
      console.log(e.error);
      e.filename;
    } else if (e instanceof PromiseRejectionEvent) {
      console.log(e.reason);
    }

    e.preventDefault();

    Crash(e);
    return false;
  }

  window.addEventListener("error", Error, { passive: false });
  window.addEventListener("unhandledrejection", Error, { passive: false });
}
