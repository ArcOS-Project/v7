import { Precedences } from "./store";

export function getPrecedence(str: string) {
  const precedence = Precedences.findIndex((a) => a.includes(str));
  return precedence !== -1 ? precedence : 3;
}
