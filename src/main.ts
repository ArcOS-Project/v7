import type { Constructs } from "$interfaces/common";
import type { IWaveKernel } from "$interfaces/kernel";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  const mod = new URLSearchParams(location.search).get("kernel");

  let WaveKernel: Constructs<IWaveKernel> | undefined;

  if (!mod) {
    const { WaveKernel: W } = await import("$ts/kernel/wavekernel");
    WaveKernel = W;
  } else {
    const { WaveKernel: W } = await import(/* @vite-ignore */ mod);
    WaveKernel = W;
  }

  if (!WaveKernel) return;

  const kernel = new WaveKernel();

  window.__DW_STATUS__ = "async Main";
  document.querySelector<HTMLDivElement>("#stateLoader")!.innerText = "..";

  await kernel._init();
}

Main(); // Let's get started
