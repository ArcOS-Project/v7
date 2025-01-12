import type { Keyword } from "$types/lang";

export const input: Keyword = async (lang) => {
  return await lang.stdin();
};
