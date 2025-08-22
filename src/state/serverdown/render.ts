export default async function render() {
  const status = document.querySelector<HTMLParagraphElement>("div.serverdown #status");

  if (!status) return;

  status.innerText = `Server offline. Please try again later.`;
}
