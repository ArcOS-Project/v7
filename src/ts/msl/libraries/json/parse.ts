import type { Keyword } from "$types/msl";

export const parse: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "json")) return;

  const [string] = lang.tokens;

  return JSON.parse(`${JSON.stringify(string)}`);
};
