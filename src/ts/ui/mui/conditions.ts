import { Daemon } from "$ts/env";
import type { MaybePromise } from "$types/shared/common";

export const BaseModularConditions: Record<string, () => MaybePromise<boolean>> = {
  SAFE_MODE: () => !!Daemon?.safeMode,
};
