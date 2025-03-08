import type { Keyword } from "$types/msl";

export const button: Keyword = async (lang) => {
  if (!lang.expectTokenLength(4, "gui.element.button")) return;

  const [caption, className, codepoint, target] = lang.tokens as [string, string, string, HTMLElement];

  if (!(target instanceof HTMLElement)) {
    lang.error("Target has to be an HTML element", "gui.element.button");
    return;
  }

  const button = document.createElement("button");

  button.innerText = caption;
  button.className = className;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    lang.jump(codepoint);
  });

  target.append(button);

  return button;
};
