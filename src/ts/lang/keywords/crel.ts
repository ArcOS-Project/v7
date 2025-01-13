import type { Keyword } from "$types/lang";

export const crel: Keyword = async (lang) => {
  lang.expectTokenLength(1, "crel");

  const [tag] = lang.tokens;
  const element = document.createElement(tag);

  return element;
};
