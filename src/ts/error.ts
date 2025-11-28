import type { ProcessHandlerType } from "$types/kernel";
import * as stackTraceParser from "stacktrace-parser";
import { __Console__ } from "./console";
import { Crash } from "./crash";
import { Kernel, Stack, SysDispatch } from "./env";
import { Log } from "./logging";

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

    Crash(e);

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
  const FPA_TEST_REGEXP = /http(s|):\/\/[a-zA-Z.0-9\/]+\/assets\/(?<appId>[a-zA-Z]+)-[a-f0-9A-F\-_]+\.js/gm;
  const handler = Stack;
  const renderer = Stack?.renderer;

  const parsed = stackTraceParser.parse(stack).filter((p) => !p.file?.includes("<anonymous>"));
  //
  const isTpa = !!parsed[0]?.file?.includes(`localhost:3128`) || !!parsed[0]?.file?.includes(`/tpa/`);
  const isFpa = parsed[0]?.file && FPA_TEST_REGEXP.test(parsed[0].file);
  //

  if (!renderer?.lastInteract) return false;

  const prevent = () => {
    handler.BUSY = false;
    SysDispatch.dispatch("stack-not-busy");
    renderer.notifyCrash(renderer!.lastInteract!.app.data, e, renderer.lastInteract);
    handler.kill(renderer!.lastInteract!.pid);
    renderer.lastInteract = undefined;
  };

  if (isTpa && parsed[0]?.file?.includes(`/${renderer.lastInteract.app.id}@`)) {
    Log("interceptTpaErrors", `Not crashing for ${e instanceof PromiseRejectionEvent ? e.reason : e}: source is a TPA`);

    prevent();
  } else if (!isTpa && isFpa) {
    const parsedAppId = parsed[0]?.file?.match(FPA_TEST_REGEXP)?.groups?.appId;

    if (parsedAppId) {
      prevent();
    }
  }

  return !!(isTpa || isFpa);
}
