import { Crash } from "./crash";

export function handleGlobalErrors() {
  function Error(e: ErrorEvent | PromiseRejectionEvent) {
    e.preventDefault();

    Crash(e);
  }

  window.addEventListener("error", Error, { passive: false });
  window.addEventListener("unhandledrejection", Error, { passive: false });
}
