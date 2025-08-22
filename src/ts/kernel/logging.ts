import { WaveKernel } from ".";
import { LogLevel } from "../../types/logging";

export function Log(source: string, message: string, level = LogLevel.info) {
  const kernel = WaveKernel.get();

  if (!kernel) return;

  kernel.Log(source, message, level);
}
