import type { Library } from "$types/msl";
import { abtostr } from "./convert/abtostr";
import { dataurl } from "./convert/dataurl";

export const ConvertLibrary: Library = {
  abtostr,
  dataurl,
};
