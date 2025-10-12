import { EchoIntro } from "$ts/intro";
import { WaveKernel } from "$ts/kernel/wavekernel";
import { createAxiosOverlay } from "$ts/server/axios";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  await createAxiosOverlay();

  const kernel = new WaveKernel();

  await kernel._init();
}

Main(); // Let's get started
