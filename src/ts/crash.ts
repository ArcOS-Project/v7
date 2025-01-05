import { LogLevel } from "../types/logging";
import { WaveKernel } from "./kernel";

export function Crash(reason: ErrorEvent | PromiseRejectionEvent) {
  const kernel = WaveKernel.get();
  if (WaveKernel.isPanicked()) return;

  const str = `**** INEPTA EXCEPTION ****\n\nAn error has occurred, and Inepta has been halted.\nDetails of the error and the system log can be found below.\nNewest log entry is at the top.\n\nIf this keeps happening, try unloading any sideloaded applications.\n\n`;
  const stack =
    reason instanceof ErrorEvent ? reason.error.stack : reason.reason.stack;

  let text = str;

  text += stack;
  text = text.replaceAll(location.href, "./");

  text += `\n\n${kernel.Logs.map(
    ({ level, kernelTime, source, message }) =>
      `[${kernelTime.toString().padStart(8, "0")}] ${
        LogLevel[level]
      } ${source}: ${message}`
  )
    .reverse()
    .join("\n")}`;

  WaveKernel.panic(text);
}
