import type { Keyword } from "$types/msl";

export const div: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "gui.element.div")) return;

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
