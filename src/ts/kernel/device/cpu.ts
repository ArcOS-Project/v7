import type { CPU } from "$types/system/device";

export function getCPU(): CPU {
  const cpu = {
    cores: navigator.hardwareConcurrency || 4,
  };

  return cpu as CPU;
}
