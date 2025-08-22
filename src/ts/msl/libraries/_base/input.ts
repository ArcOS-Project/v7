import type { Keyword } from "$types/msl";

export const input: Keyword = async (lang) => {
  return await lang.stdin();
};
