import { Kernel } from "$ts/env";
import { LogLevel } from "../types/logging";

export function Log(source: string, message: string, level = LogLevel.info) {
  const kernel = Kernel();

  if (!kernel) return;

  //   kernel.Log(source, message, level);
}
