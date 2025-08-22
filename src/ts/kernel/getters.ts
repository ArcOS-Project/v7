import { WaveKernel } from ".";

export const Kernel = () => WaveKernel.get();
export const KernelLogs = () => Kernel().Logs;
export const KernelParams = () => Kernel().params;
export const KernelInitPid = () => Kernel().initPid;
export const KernelModules = () => `${Kernel().modules.join(",")}`.split(",");
export const KernelStateHandler = () => Kernel().state;
export const KernelIsPanicked = () => WaveKernel.isPanicked();
export const KernelPremature = () => Kernel().PREMATURE;
