import type { Keyword } from "$types/msl";

export const keyword: Keyword = async (lang) => {
  if (!lang.options.allowUnsafe) {
    lang.error("Unsafe code execution is not enabled!", "keyword");
    return;
  }
  if (!lang.expectTokenLength(2, "keyword")) return;

  const [keyword, func] = lang.tokens as [string, Keyword];

  if (!(func instanceof Function)) {
    lang.error("Function must be a function", "keyword");

    return;
  }

  lang.libraries.user[keyword] = func.bind(lang.appProcess || lang);
};
