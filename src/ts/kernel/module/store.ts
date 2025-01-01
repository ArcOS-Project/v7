import type { KernelModule } from ".";
import { ProcessHandler } from "../../process/handler";

export const KernelModules: Record<string, typeof KernelModule> = {
  stack: ProcessHandler,
};
