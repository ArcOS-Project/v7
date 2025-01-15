import type { Keyword } from "$types/lang";

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

  console.log(keyword, func);

  lang.libraries.user[keyword] = func;
};
