import type { Keyword } from "$types/msl";

export const exit: Keyword = async (lang) => {
  await lang.killSelf();
};
