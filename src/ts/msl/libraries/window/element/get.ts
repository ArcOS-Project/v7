import type { Keyword } from "$types/msl";

export const ElementGet: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "gui.element.get")) return;

  const [element, selector] = lang.tokens as [HTMLElement, string];
  const result = element?.querySelector(selector);

  return result;
};
