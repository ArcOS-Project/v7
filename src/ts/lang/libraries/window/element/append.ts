import type { Keyword } from "$types/lang";

export const append: Keyword = async (lang) => {
  lang.expectTokenLength(2, "append");

  const [element, target] = lang.tokens as HTMLElement[];

  target.append(element);
};
