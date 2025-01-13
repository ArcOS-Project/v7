import type { Library } from "$types/lang";
import { Atob } from "./base64/atob";
import { Btoa } from "./base64/btoa";

export const Base64Library: Library = {
  Btoa,
  Atob,
};
