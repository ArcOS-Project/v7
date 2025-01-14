import type { Keyword } from "$types/lang";

export const cat: Keyword = async (lang) => {
  lang.expectTokenLength(1, "cat");

  const [path] = lang.tokens;

  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error("File not found", "cat");
    return;
  }

  return contents;
};
