import type { Keyword } from "$types/lang";

export const length: Keyword = async (lang) => {
  lang.expectTokenLength(1, "length");

  return `${lang.tokens[0]}`.length;
};
