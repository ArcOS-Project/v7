import { WaveKernel } from "$ts/kernel";

export async function getMode() {
  const kernel = WaveKernel.get();

  kernel.Log("branding", "Attempting to retrieve mode from /mode");

  try {
    const mode = await (await fetch("./mode")).text();

    kernel.ARCOS_MODE = mode.trim();
  } catch {
    kernel.ARCOS_MODE = "release";
  }
}

export const ArcMode = () => WaveKernel.get().ARCOS_MODE;
