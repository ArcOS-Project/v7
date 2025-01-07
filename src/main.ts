import { WaveKernel } from "./ts/kernel";
import "./css/main.css";
import { EchoIntro } from "$ts/kernel/intro";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  const kernel = new WaveKernel();

  await kernel._init();
}

Main();
