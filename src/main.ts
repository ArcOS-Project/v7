import { EchoIntro } from "$ts/kernel/intro";
import "./css/main.css";
import { WaveKernel } from "./ts/kernel";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  const kernel = new WaveKernel();

  await kernel._init();
}

Main
(

)
 // Let's get started
