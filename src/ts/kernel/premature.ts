/** @namespace KernelSpace */
export function prematurePanic(reason?: string) {
  const main = document.querySelector("#main");

  if (!main) return;

  main.innerHTML = "";
  main.className = "crash-screen";

  const wrapper = document.createElement("div");
  const icon = document.createElement("span");
  const header = document.createElement("h1");
  const text = document.createElement("p");
  const reasonText = document.createElement("p");
  const shortcutHint = document.createElement("div");
  const shortcutHintIcon = document.createElement("span");
  const shortcutHintText = document.createElement("span");

  icon.className = "lucide icon-hand";
  text.innerText = "arcweb.nl/support";
  header.innerText = "The kernel failed prematurely";

  shortcutHint.className = "shortcut-hint";
  shortcutHintIcon.className = "lucide icon-rotate-cw";
  shortcutHintText.innerText = "Ctrl+R";
  shortcutHintText.className = "key";

  shortcutHint.append(shortcutHintIcon, shortcutHintText);

  wrapper.id = "crashScreen";
  wrapper.append(icon, header, text);

  if (reason) {
    reasonText.innerText = reason;
    reasonText.id = "crashTextBrief";
    wrapper.append(reasonText);
  }

  wrapper.append(shortcutHint);

  main.append(wrapper);
}
