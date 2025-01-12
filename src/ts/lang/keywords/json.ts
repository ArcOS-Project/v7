import type { Keyword } from "$types/lang";

export const json: Keyword = async (lang) => {
  lang.expectTokenLength(1, "json");

  const [string] = lang.tokens;

  return JSON.parse(`${JSON.stringify(string)}`);
};
