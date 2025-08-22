import { __Console__ } from "$ts/console";
import type { ArcLangOptions } from "$types/lang";

export const DefaultArcLangOptions: ArcLangOptions = {
  onError: (e) => __Console__.log(e),
  stdout: (m) => __Console__.log(m),
  stdin: async () => "",
  onExit: () => {},
  workingDir: "U:/ ",
};
