import type { Keyword } from "$types/lang";

export const exit: Keyword = async (lang) => {
  await lang.killSelf();
};
