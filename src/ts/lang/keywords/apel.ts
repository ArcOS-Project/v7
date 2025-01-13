import type { Keyword } from "$types/lang";

export const apel: Keyword = async (lang) => {
  lang.expectTokenLength(2, "apel");

  const [element, target] = lang.tokens as HTMLElement[];

  target.append(element);
};
