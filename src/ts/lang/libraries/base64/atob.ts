import type { Keyword } from "$types/lang";

export const Atob: Keyword = async (lang) => {
  lang.expectTokenLength(1, "atob");

  const [string] = lang.tokens;

  return `"${atob(string)}"`;
};
