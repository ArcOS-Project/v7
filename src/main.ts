import "dseg/css/dseg.css";
import "./css/main.css";
import { HtmlUtil } from "$ts/util/html";
import { handleElectronInit } from "$ts/electron";

// CODE EXECUTION STARTS HERE
async function Main() {
  await handleElectronInit();

  const { WaveKernel } = await import("$ts/kernel/wavekernel");
  const kernel = new WaveKernel();

  window.__DW_STATUS__ = "async Main";
  HtmlUtil.GetStateLoader().innerText = "..";

  await kernel._init();
}

Main(); // Let's get started
