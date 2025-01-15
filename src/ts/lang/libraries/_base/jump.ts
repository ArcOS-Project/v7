import type { Keyword } from "$types/lang";

export const jump: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "jump")) return;

  const location = lang.source.findIndex((c) => c.command === lang.tokens[0]);

  if (location < 0) {
    lang.error(`Missing code segment "${lang.tokens[0]}"`, "jump");

    return;
  }

  lang.jump(lang.tokens[0]);
};
