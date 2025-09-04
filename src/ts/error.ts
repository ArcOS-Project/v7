import * as stackTraceParser from "stacktrace-parser";
import { __Console__ } from "./console";
import { Crash } from "./crash";
import { WaveKernel } from "./kernel";
import { Log } from "./kernel/logging";
import { ProcessHandler } from "./process/handler";
import { getKMod } from "./kernel/module";
import { Environment } from "./kernel/env";
import { UserDaemon } from "./server/user/daemon";
import { WarningIcon } from "./images/dialog";
import { ArcOSApp } from "$apps/arcos";
export function handleGlobalErrors() {
  let LOCKED = false;
  function DoError(e: ErrorEvent | PromiseRejectionEvent) {
    if (LOCKED) {
      e.preventDefault();
      return false;
    }
    LOCKED = true;

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    if (e instanceof ErrorEvent) {
      if (interceptTpaErrors(e.error.stack, e.error)) {
        LOCKED = false;

        return false;
      }

      __Console__.warn(e.error);
    } else if (e instanceof PromiseRejectionEvent) {
      if (interceptTpaErrors(e.reason.stack, e.reason)) {
        LOCKED = false;

        return false;
      }

      __Console__.warn(e.reason);
    }

    // Crash(e);
    const stack = getKMod<ProcessHandler>("stack");
    const env = getKMod<Environment>("env");
    const daemon = stack.getProcess<UserDaemon>(+env.get("userdaemon_pid"));
    const lastInteract = stack.renderer?.lastInteract;

    if (daemon && lastInteract) {
      stack.BUSY = false;
      stack.dispatch.dispatch("stack-not-busy");
      daemon.spawnApp(
        "OopsNotifier",
        daemon.pid,
        lastInteract?.app?.data || ArcOSApp,
        e instanceof PromiseRejectionEvent ? e.reason : e,
        lastInteract
      );
      stack.kill(lastInteract?.pid, true);

      LOCKED = false;
    } else {
      Crash(e);
    }

    return false;
  }

  window.addEventListener("error", DoError, { passive: false });
  window.addEventListener("unhandledrejection", DoError, { passive: false });

  window.console = new Proxy(console, {
    set(target, prop, value) {
      if (prop === "warn") {
        // Silently ignore any attempts to override console.warn
        return true;
      }
      return Reflect.set(target, prop, value);
    },
  });
}

export function interceptTpaErrors(stack: string, e: Error): boolean {
  const parsed = stackTraceParser.parse(stack);
  const isTpa = !!parsed[0]?.file?.includes(`localhost:3128`) || !!parsed[0]?.file?.includes(`/tpa/`);
  const handler = WaveKernel?.get()?.getModule<ProcessHandler>?.("stack", true);
  const renderer = handler?.renderer;

  if (isTpa && renderer && renderer.lastInteract && parsed[0]?.file?.includes(`/${renderer.lastInteract.app.id}@`)) {
    Log("interceptTpaErrors", `Not crashing for ${e instanceof PromiseRejectionEvent ? e.reason : e}: source is a TPA`);
    handler.BUSY = false;
    handler.dispatch.dispatch("stack-not-busy");
    renderer.notifyCrash(renderer.lastInteract.app.data, e, renderer.lastInteract);
    handler.kill(renderer.lastInteract.pid);
    renderer.lastInteract = undefined;
  }

  return isTpa;
}
