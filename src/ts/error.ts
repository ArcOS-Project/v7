import { WaveKernel } from "./kernel";

export function handleGlobalErrors() {
  function Error(e: ErrorEvent | PromiseRejectionEvent) {
    e.preventDefault();
    console.debug(e);

    WaveKernel.panic(
      e instanceof PromiseRejectionEvent ? e.reason.message : e.message
    );
  }

  window.addEventListener("error", Error, { passive: false });
  window.addEventListener("unhandledrejection", Error, { passive: false });
}
