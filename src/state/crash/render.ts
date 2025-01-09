import { Sleep } from "$ts/sleep";
import type { StateProps } from "../../types/state";

export default async function render(props: StateProps) {
  await Sleep(100);
  const crashText = document.getElementById("crashText")!;

  if (!crashText) return;

  const appRenderer = document.querySelector("div#appRenderer")!;
  const main = document.querySelector("main#main")!;

  if (appRenderer) appRenderer.remove();

  const { text } = props;

  crashText.innerText = text || "";

  setTimeout(() => {
    if (main) main.classList.remove("hidden");
  }, 600);

  throw text;
}
