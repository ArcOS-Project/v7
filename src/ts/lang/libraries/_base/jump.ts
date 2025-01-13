import type { Keyword } from "$types/lang";

export const jump: Keyword = async (lang) => {
  lang.expectTokenLength(1, "jump");

  const location = lang.source.indexOf(lang.tokens[0]);

  if (location < 0)
    throw lang.error(`Missing code segment "${lang.tokens[0]}"`, "jump");

  lang.pointer = lang.source.indexOf(lang.tokens[0]);
};
