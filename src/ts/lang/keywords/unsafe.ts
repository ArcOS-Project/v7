import type { Keyword } from "$types/lang";

export const _unsafe: Keyword = async (lang) => {
  lang.expectTokenLength(1, "_unsafe");

  const [func, ...args] = lang.tokens as [(...args: any[]) => any, ...any[]];

  return await func(...args);
};
