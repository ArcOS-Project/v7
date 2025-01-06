import { LogLevel } from "../types/logging";
import { WaveKernel } from "./kernel";
import { ServerManager } from "./server";

export function Crash(reason: ErrorEvent | PromiseRejectionEvent) {
  const kernel = WaveKernel.get();
  if (WaveKernel.isPanicked()) return;

  const connected = ServerManager.isConnected();

  const HEADER = [
    `---! [ ArcOS Crashed ] !---`,
    ``,
    `An exception took place that wasn't handled. ArcOS has been halted.`,
    `Details of the error and the system log up to the crash can be found below.`,
    `Newest log item is at the top.`,
    ``,
    connected
      ? `A bug report has been sent to us so that we may fix this issue.`
      : `Please tell us about this issue on GitHub or in the Discord so that we can fix it.`,
    ``,
    ``,
  ];

  const str = HEADER.join("\n");
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
