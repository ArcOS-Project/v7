import { WaveKernel } from "$ts/kernel";

export async function getLicense() {
  console.time("Get License");
  const kernel = WaveKernel.get();

  kernel.Log("branding", "Attempting to retrieve project license from /license");

  try {
    const req = await (await fetch("./license")).text();
    const str = req;

    kernel.ARCOS_LICENSE = str.startsWith("<!") ? "not found" : str;
  } catch {
    kernel.ARCOS_LICENSE = "not found";
  } finally {
    console.timeEnd("Get License");
  }
}

export const ArcLicense = () => WaveKernel.get().ARCOS_LICENSE;
