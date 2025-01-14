import type { Keyword } from "$types/lang";

export const idle: Keyword = async (lang) => {
  lang.jump(":*idle");
};
