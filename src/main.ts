import { EchoIntro } from "$ts/intro";
import { getBuild } from "$ts/metadata/build";
import { ChangeLogs } from "$ts/metadata/changelog";
import { getLicense } from "$ts/metadata/license";
import { getMode } from "$ts/metadata/mode";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  await getMode();
  await getBuild();
  await getLicense();
  await ChangeLogs.refreshChangelogs();

  const WaveKernel = (await import("./ts/kernel/wavekernel")).WaveKernel;
  const kernel = new WaveKernel();

  await kernel._init();
}

Main(); // Let's get started
