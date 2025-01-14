import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const load: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "json.load")) return;

  const [path] = lang.tokens;

  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error("File not found", "json.load");
    return;
  }

  const str = arrayToText(contents);
  const json = JSON.parse(str);

  return json;
};
