import { WaveKernel } from "./ts/kernel";

// CODE EXECUTION STARTS HERE
async function Main() {
  const kernel = new WaveKernel();

  await kernel._init();
}

Main();
