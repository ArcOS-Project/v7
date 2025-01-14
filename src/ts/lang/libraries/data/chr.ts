import type { Keyword } from "$types/lang";

export const chr: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "chr")) return;

  return String.fromCharCode(Number(lang.tokens[0]));
};
