import type { Keyword } from "$types/lang";

export const Btoa: Keyword = async (lang) => {
  lang.expectTokenLength(1, "btoa");

  const [string] = lang.tokens;

  return `"${btoa(string)}"`;
};
