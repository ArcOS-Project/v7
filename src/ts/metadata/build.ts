import { WaveKernel } from "$ts/kernel";

export async function getBuild() {
  console.time("Get Build");
  const kernel = WaveKernel.get();

  kernel.Log("branding", "Attempting to retrieve git hash from /build");

  try {
    const req = await (await fetch(`./build?t=${Date.now()}`)).text();
    const str = req.split("\n")[0].trim();

    kernel.ARCOS_BUILD = str.startsWith("<!") ? "unknown" : str;
  } catch {
    kernel.ARCOS_BUILD = "unknown";
  } finally {
    console.timeEnd("Get Build");
  }
}

export const ArcBuild = () => WaveKernel.get().ARCOS_BUILD;
