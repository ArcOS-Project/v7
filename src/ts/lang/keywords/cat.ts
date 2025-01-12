import { Filesystem } from "$ts/fs";
import type { Keyword } from "$types/lang";

export const cat: Keyword = async (lang) => {
  lang.expectTokenLength(1, "cat");

  const [path] = lang.tokens;
  const fs = lang.kernel.getModule<Filesystem>("fs");

  const contents = await fs.readFile(path);

  if (!contents) throw new Error("File not found");

  return contents;
};
