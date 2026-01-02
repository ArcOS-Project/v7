import { SoundBus } from "./env";

export async function doPing() {
  SoundBus?.playSound("arcos.notification");
  return;
}
