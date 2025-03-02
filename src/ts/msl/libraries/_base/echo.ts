import type { Keyword } from "$types/msl";

export const echo: Keyword = async (lang) => {
  const content = lang.tokens.join(" ");

  lang.stdout(content);
};
