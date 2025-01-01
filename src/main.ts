import { WaveKernel } from "./ts/kernel";

async function Main() {
  const kernel = new WaveKernel();

  await kernel._init();
}

Main();
