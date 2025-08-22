export function prematurePanic() {
  const main = document.querySelector("#main");

  if (!main) return;

  main.innerHTML = "";
  main.className = "crash-screen";

  const wrapper = document.createElement("div");
  const icon = document.createElement("span");
  const header = document.createElement("h1");
  const text = document.createElement("p");
  const shortcutHint = document.createElement("div");
  const shortcutHintIcon = document.createElement("span");
  const shortcutHintText = document.createElement("span");

  icon.className = "lucide icon-hand";
  text.innerText = "arcos.izkuipers.nl/support";
  header.innerText = "The kernel failed prematurely";

  shortcutHint.className = "shortcut-hint";
  shortcutHintIcon.className = "lucide icon-rotate-cw";
  shortcutHintText.innerText = "Ctrl+R";

  shortcutHint.append(shortcutHintIcon, shortcutHintText);

  wrapper.id = "crashScreen";
  wrapper.append(icon, header, text, shortcutHint);

  main.append(wrapper);
}
