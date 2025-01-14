import type { Keyword } from "$types/lang";

export const div: Keyword = async (lang) => {
  lang.expectTokenLength(2, "gui.element.div");

  const [className, target] = lang.tokens;

  if (!(target instanceof HTMLElement)) {
    lang.error("Target has to be an HTML element", "gui.element.div");
    return;
  }

  const div = document.createElement("div");

  div.className = className;

  target.append(div);

  return div;
};
