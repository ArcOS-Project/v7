import type { Keyword } from "$types/lang";

export const append: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "append")) return;

  const [element, target] = lang.tokens as HTMLElement[];

  target.append(element);
};
