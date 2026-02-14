import type { DeviceInfo } from "$types/device";
import { getCPU } from "./cpu";
import { getGPU } from "./gpu";
import { getMEM } from "./mem";
import { getNET } from "./net";

export function getDeviceInfo(): DeviceInfo {
  return {
    gpu: getGPU(),
    cpu: getCPU(),
    mem: getMEM(),
    net: getNET(),
  };
}

export { getCPU, getGPU, getMEM, getNET };
