import { __Console__ } from "$ts/console";
import { Kernel } from "$ts/env";

export async function getBuild() {
  __Console__.time("Get Build");
  const kernel = Kernel();

  kernel?.Log("branding", "Attempting to retrieve git hash from /build");

  try {
    const req = await (await fetch(`./build?t=${Date.now()}`)).text();
    const str = req.split("\n")[0].trim();

    kernel!.ARCOS_BUILD = str.startsWith("<!") ? "unknown" : str;
  } catch {
    kernel!.ARCOS_BUILD = "unknown";
  } finally {
    __Console__.timeEnd("Get Build");
  }
}

export const ArcBuild = () => Kernel()!.ARCOS_BUILD;
