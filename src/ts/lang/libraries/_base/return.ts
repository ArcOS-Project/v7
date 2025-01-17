import type { Keyword } from "$types/lang";

export const Return: Keyword = async (lang) => {
  if (lang.oldPointer < 0) {
    lang.error("Can't return without having jumped somewhere", "return");

    return;
  }

  lang.pointer = lang.oldPointer + 1;
  lang.oldPointer = -1;
};
