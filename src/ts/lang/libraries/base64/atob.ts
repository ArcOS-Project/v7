import type { Keyword } from "$types/lang";

export const Atob: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "atob")) return;

  const [string] = lang.tokens;

  return `"${atob(string)}"`;
};
