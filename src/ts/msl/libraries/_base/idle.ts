import type { Keyword } from "$types/msl";

export const idle: Keyword = async (lang) => {
  lang.jump(":*idle");
};
