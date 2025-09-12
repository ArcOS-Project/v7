import type { Keyword } from "$types/msl";

export const set: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "env.set")) return;

  const [key, value] = lang.tokens;

  return lang.env.set(key, value);
};
