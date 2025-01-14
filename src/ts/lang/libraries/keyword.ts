import type { Keyword } from "$types/lang";

export const keyword: Keyword = async (lang) => {
  lang.expectTokenLength(2, "keyword");

  const [keyword, func] = lang.tokens as [string, Keyword];

  if (!(func instanceof Function)) {
    lang.error("Function must be a function", "keyword");

    return;
  }

  lang.libraries.user[keyword] = func;
};
