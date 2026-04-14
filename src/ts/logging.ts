import { Kernel } from "$ts/env";
import { LogLevel } from "../types/logging";

export function Log(source: string, message: string, level = LogLevel.info) {
  const kernel = Kernel;

  if (!kernel) return;

  kernel.Log(source, message, level);
}

export function ImplicitLog(target: Object, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = (...args: any[]) => {
    Log("StartFn", key);
    originalMethod.call(target, ...args);
    Log("StopFn", key);
  };

  return descriptor;
}
