import type { Keyword } from "$types/lang";

export const echo: Keyword = async (lang) => {
  return lang.tokens.join(" ");
};
