import { EchoIntro } from "$ts/intro";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  const { WaveKernel } = await import("$ts/kernel/wavekernel");

  const kernel = new WaveKernel();
  window.__DW_STATUS__ = "async Main";
  document.querySelector<HTMLDivElement>("#stateLoader")!.innerText = "..";

  await kernel._init();
}

Main(); // Let's get started
