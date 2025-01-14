import type { Keyword } from "$types/lang";

export const button: Keyword = async (lang) => {
  lang.expectTokenLength(4, "gui.element.button");

  const [caption, className, codepoint, target] = lang.tokens as [
    string,
    string,
    string,
    HTMLElement
  ];

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
