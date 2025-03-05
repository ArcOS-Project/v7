import type { ArcLangOptions } from "$types/lang";

export const DefaultArcLangOptions: ArcLangOptions = {
  onError: (e) => console.log(e),
  stdout: (m) => console.log(m),
  stdin: async () => "",
  onExit: () => {},
  workingDir: "U:/ ",
};
