import type { Keyword } from "$types/lang";

export const length: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "length")) return;

  if (lang.tokens[0] === undefined) lang.tokens[0] = `${lang.tokens[0]}`;

  return lang.tokens[0].length;
};
