import { arrayToBlob } from "$ts/fs/convert";
import type { Keyword } from "$types/msl";

export const Img: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "source.img")) return;

  const [path] = lang.tokens;
  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error(`File not found: ${path}`);

    return;
  }

  const blob = arrayToBlob(contents);
  return URL.createObjectURL(blob);
};
