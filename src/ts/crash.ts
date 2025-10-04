import type { BugHuntType, ServerManagerType } from "$types/kernel";
import { LogLevel } from "../types/logging";
import { getKMod, Kernel } from "./env";
import { KernelIsPanicked, KernelLogs, KernelPremature } from "./getters";
import { ASCII_ART } from "./intro";

export function Crash(reason: ErrorEvent | PromiseRejectionEvent) {
  if (KernelIsPanicked()) return;
}
