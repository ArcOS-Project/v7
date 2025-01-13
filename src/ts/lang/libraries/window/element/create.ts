import type { Keyword } from "$types/lang";

export const create: Keyword = async (lang) => {
  lang.expectTokenLength(1, "create");

  const [tag] = lang.tokens;
  const element = document.createElement(tag);

  return element;
};
