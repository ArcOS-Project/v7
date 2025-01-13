import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const load: Keyword = async (lang) => {
  lang.expectTokenLength(1, "json.load");

  const [path] = lang.tokens;

  const contents = await lang.readFile(path);

  if (!contents) throw lang.error("File not found", "json.load");

  const str = arrayToText(contents);
  const json = JSON.parse(str);

  return json;
};
