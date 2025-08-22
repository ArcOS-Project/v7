import type { Keyword } from "$types/msl";

export const cat: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "cat")) return;

  const [path] = lang.tokens;

  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error("File not found", "cat");
    return;
  }

  return contents;
};
