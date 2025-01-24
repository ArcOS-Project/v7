import { WaveKernel } from "$ts/kernel";
import { ServerManager } from "$ts/server";
import type { StateProps } from "$types/state";

export default async function render(props: StateProps) {
  const serverManager = WaveKernel.get().getModule<ServerManager>("server");
  const serverUrlP = document.querySelector<HTMLParagraphElement>(
    "div.serverdown #serverUrl"
  );

  if (!serverUrlP) return;

  serverUrlP.innerText = serverManager.url;
}
