import { Kernel } from "$ts/env";

export const KernelLogs = () => Kernel!.Logs;
export const KernelParams = () => Kernel!.params;
export const KernelInitPid = () => Kernel!.initPid;
export const KernelModules = () => `${Kernel!.modules.join(",")}`.split(",");
export const KernelStateHandler = () => Kernel!.state;
export const KernelIsPanicked = () => Kernel?.PANICKED;
export const KernelPremature = () => Kernel!.PREMATURE;
