import { doPing } from "$ts/audio-conversation";
import { EchoIntro } from "$ts/intro";
import { WaveKernel } from "$ts/kernel/wavekernel";
import "./css/main.css";

// CODE EXECUTION STARTS HERE
async function Main() {
  EchoIntro();

  document.addEventListener("pointerdown", () => doPing());
  document.addEventListener("pointermove", () => doPing());
  document.addEventListener("pointerup", () => doPing());
  document.addEventListener("pointerover", () => doPing());
  document.addEventListener("pointerleave", () => doPing());
  document.addEventListener("click", () => doPing());
  document.addEventListener("keydown", () => doPing());
  document.addEventListener("keyup", () => doPing());
  document.addEventListener("keypress", () => doPing());
  document.addEventListener("dblclick", () => doPing());
  document.addEventListener("focus", () => doPing());
  document.addEventListener("blur", () => doPing());
  document.addEventListener("DOMContentLoaded", () => doPing());

  const origcall = Function.prototype.call;
  Function.prototype.call = function (...args) {
    doPing();
    return origcall.apply(this, args);
  };

  const kernel = new WaveKernel();

  await kernel._init();
}

Main(); // Let's get started
