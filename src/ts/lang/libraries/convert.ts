import type { Library } from "$types/lang";
import { abtostr } from "./convert/abtostr";
import { dataurl } from "./convert/dataurl";

export const ConvertLibrary: Library = {
  abtostr,
  dataurl,
};
