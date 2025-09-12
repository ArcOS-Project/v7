import { EchoIntro } from "$ts/intro";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  const WaveKernel = (await import("./ts/kernel/wavekernel")).WaveKernel;
  const kernel = new WaveKernel();

  await kernel._init();
}

Main(); // Let's get started
