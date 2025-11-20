import { Sleep } from "$ts/sleep";
import type { StateProps } from "../../types/state";

export default async function render(props: StateProps) {
  // Necessary timeout to prevent certain conflicts
  await Sleep(100);

  const crashText = document.getElementById("crashText")!;
  const crashTextBrief = document.getElementById("crashTextBrief")!;
  const crashScreen = document.getElementById("crashScreen")!;

  if (!crashText || !crashTextBrief) return;

  const appRenderer = document.querySelector("div#appRenderer")!;
  const main = document.querySelector("main#main")!;

  if (appRenderer) appRenderer.remove();

  const { text, brief } = props;

  crashText.innerText = text || "";
  crashTextBrief.innerText = brief || "";
  crashTextBrief.style.display = brief ? "block" : "none";

  setTimeout(() => {
    if (main) main.classList.remove("hidden");
  }, 600);

  document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      crashScreen?.classList.toggle("hidden");
    }
    if (e.key.toLowerCase() === "r") location.reload();
  });
}
