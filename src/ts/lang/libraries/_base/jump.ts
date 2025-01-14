import type { Keyword } from "$types/lang";

export const jump: Keyword = async (lang) => {
  lang.expectTokenLength(1, "jump");

  const location = lang.source.indexOf(lang.tokens[0]);

  if (location < 0) {
    lang.error(`Missing code segment "${lang.tokens[0]}"`, "jump");

    return;
  }

  lang.jump(lang.tokens[0]);
};
