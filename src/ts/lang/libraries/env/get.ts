import type { Keyword } from "$types/lang";

export const get: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "env.get")) return;

  const [key] = lang.tokens;

  return lang.env.get(key);
};
