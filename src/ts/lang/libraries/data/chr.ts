import type { Keyword } from "$types/lang";

export const chr: Keyword = async (lang) => {
  lang.expectTokenLength(1, "chr");

  return String.fromCharCode(Number(lang.tokens[0]));
};
