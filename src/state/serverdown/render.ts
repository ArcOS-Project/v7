import { State } from "$ts/env";

export default async function render() {
  const status = document.querySelector<HTMLParagraphElement>("div.serverdown #status");

  if (!status) return;

  status.innerText = `Server offline. Please try again later.`;

  function keydown(e: KeyboardEvent) {
    if (e.key === "F4") {
      document.removeEventListener("keydown", keydown);
      State.loadState("switchServer");
    }
  }

  document.addEventListener("keydown", keydown);
}
