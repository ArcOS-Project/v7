import type { Keyword } from "$types/lang";

export const _unsafe: Keyword = async (lang) => {
  if (!lang.options.allowUnsafe) {
    lang.error("Unsafe code execution is not enabled!", "source._unsafe");
    return;
  }
  if (!lang.expectTokenLength(1, "_unsafe")) return;

  const [func, ...args] = lang.tokens as [(...args: any[]) => any, ...any[]];

  return await func(...args);
};
