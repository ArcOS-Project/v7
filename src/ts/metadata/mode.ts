import { __Console__ } from "$ts/console";
import { Kernel } from "$ts/env";

export async function getMode() {
  __Console__.time("Get Mode");
  const kernel = Kernel!;

  kernel.Log("branding", "Attempting to retrieve mode from /mode");

  try {
    const mode = await (await fetch(`./mode?t=${Date.now()}`)).text();

    kernel.ARCOS_MODE = mode.trim();
  } catch {
    kernel.ARCOS_MODE = "release";
  } finally {
    __Console__.timeEnd("Get Mode");
  }
}

export const ArcMode = () => Kernel!.ARCOS_MODE;
