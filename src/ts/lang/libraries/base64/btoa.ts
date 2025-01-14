import type { Keyword } from "$types/lang";

export const Btoa: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "btoa")) return;

  const [string] = lang.tokens;

  return `"${btoa(string)}"`;
};
