import type { Keyword } from "$types/lang";

export const create: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "create")) return;

  const [tag] = lang.tokens;
  const element = document.createElement(tag);

  return element;
};
