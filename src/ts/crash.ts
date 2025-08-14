import { LogLevel } from "../types/logging";
import { BugHunt } from "./bughunt";
import { WaveKernel } from "./kernel";
import { KernelIsPanicked, KernelLogs, KernelPremature } from "./kernel/getters";
import { ASCII_ART } from "./kernel/intro";
import { getKMod } from "./kernel/module";
import { ServerManager } from "./server";

export function Crash(reason: ErrorEvent | PromiseRejectionEvent) {
  if (KernelIsPanicked()) return;

  const bughunt = getKMod<BugHunt>("bughunt", true);
  const connected = ServerManager.isConnected();

  const HEADER = [
    ...ASCII_ART,
    ``,
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
  const stack = reason instanceof ErrorEvent ? reason?.error?.stack : reason?.reason?.stack || reason?.reason || reason;

  let text = str;

  text += stack;
  text = text.replaceAll(location.href, "./");

  text += `\n\n${KernelLogs()()
    .map(
      ({ level, kernelTime, source, message }) =>
        `[${kernelTime.toString().padStart(8, "0")}] ${LogLevel[level]} ${source}: ${message}`
    )
    .reverse()
    .join("\n")}`;

  if (!import.meta.env.DEV)
    bughunt?.sendReport(
      bughunt?.createReport({
        title: !KernelPremature()
          ? `CRASH - ${reason instanceof PromiseRejectionEvent ? reason.reason : reason.error}`
          : `Premature kernel failure`,
        body: `${stack}`.replaceAll(location.href, "./"),
      })
    );

  WaveKernel.panic(text);
}
