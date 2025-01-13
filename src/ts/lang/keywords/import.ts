import type { Filesystem } from "$ts/fs";
import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const Import: Keyword = async (lang) => {
  lang.expectTokenLength(1, "$unsafe");

  const [path] = lang.tokens;
  const fs = lang.kernel.getModule<Filesystem>("fs");
  const contents = await fs.readFile(path);

  if (!contents) throw new Error(`File not found: ${path}`);

  const str = arrayToText(contents);

  try {
    const dataUrl = `data:application/javascript;base64,${btoa(str)}`;
    const { default: fn } = await import(dataUrl);

    return fn;
  } catch {
    throw new Error(`Keyword import failed: ${path}`);
  }
};
