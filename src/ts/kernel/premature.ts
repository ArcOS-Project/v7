export function prematurePanic() {
  const main = document.querySelector("#main");

  if (!main) return;

  main.innerHTML = "";
  main.className = "crash-screen";

  const wrapper = document.createElement("div");
  const icon = document.createElement("span");
  const header = document.createElement("h1");
  const text = document.createElement("p");

  icon.className = "lucide icon-ghost";
  text.innerText = "arcos.izkuipers.nl/support";
  header.innerText = "Kernel init failed";

  wrapper.id = "crashScreen";
  wrapper.append(icon, header, text);

  main.append(wrapper);
}
