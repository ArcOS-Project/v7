import { __Console__ } from "$ts/console";
import { Kernel } from "$ts/env";

export async function getLicense() {
  __Console__.time("Get License");
  const kernel = Kernel()!;

  kernel.Log("branding", "Attempting to retrieve project license from /license");

  try {
    const req = await (await fetch(`./license?t=${Date.now()}`)).text();
    const str = req;

    kernel.ARCOS_LICENSE = str.startsWith("<!") ? "not found" : str;
  } catch {
    kernel.ARCOS_LICENSE = "not found";
  } finally {
    __Console__.timeEnd("Get License");
  }
}

export const ArcLicense = () => Kernel()!.ARCOS_LICENSE;
