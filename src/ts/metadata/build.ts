import { WaveKernel } from "$ts/kernel";

export async function getBuild() {
  const kernel = WaveKernel.get();

  kernel.Log("branding", "Attempting to retrieve git hash from /build");

  try {
    const req = await (await fetch("./build")).text();
    const str = req.split("\n")[0].trim();

    kernel.ARCOS_BUILD = str.startsWith("<!") ? "unknown" : str;
  } catch {
    kernel.ARCOS_BUILD = "unknown";
  }
}

export const ArcBuild = () => WaveKernel.get().ARCOS_BUILD;
