import type { StateProps } from "$types/state";

export default async function render(props: StateProps) {
  const status = document.querySelector<HTMLParagraphElement>(
    "div.serverdown #status"
  );

  if (!status) return;

  status.innerText = `${
    props.rotur ? "Rotur" : "Server"
  } offline. Please try again later.`;
}
