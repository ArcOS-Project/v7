import type { Keyword } from "$types/lang";

export const exec: Keyword = async (lang) => {
  if (!lang.options.allowUnsafe) {
    lang.error("Unsafe code execution is not enabled!", "keyword");
    return;
  }
  if (!lang.expectTokenLength(1, "exec")) return;

  const [func, ...args] = lang.tokens as [Function, ...any];

  console.log(func);

  if (!(func instanceof Function)) {
    lang.error("Function must be a function", "keyword");

    return;
  }

  return await func.bind(lang.appProcess || lang)(...args)();
};
