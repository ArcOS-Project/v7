import type { Keyword } from "$types/lang";

export const h1: Keyword = async (lang) => {
  lang.expectTokenLength(2, "gui.element.h1");

  const [innerText, className, target] = lang.tokens as [
    string,
    string,
    HTMLElement
  ];

  if (!(target instanceof HTMLElement)) {
    lang.error("Target has to be an HTML element", "gui.element.h1");
    return;
  }

  const h1 = document.createElement("h1");

  h1.innerText = innerText;
  h1.className = className;

  target.append(h1);

  return h1;
};
