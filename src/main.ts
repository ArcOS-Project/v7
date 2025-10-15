import { EchoIntro } from "$ts/intro";
import { WaveKernel } from "$ts/kernel/wavekernel";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  const kernel = new WaveKernel();

  await kernel._init();
}

Main(); // Let's get started
