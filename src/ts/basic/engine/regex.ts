export const REGEXES = {
  FUNCTION: /(?<name>[a-zA-Z]+)\((?<val>.+|)\)/gm,
  VARGET: /\$(?<name>[A-Za-z]{1,3})/g,
  IF: /(?<not>NOT |)(?<expr>.+) THEN($| (?<inline>.+))/,
  DUALEXPR: /(?<left>.+) (?<mode>[A-Za-z]+) (?<right>.+)/,
  VARSET: /(?<key>[A-Za-z]{1,3}) = (?<value>.+|)/,
  STRING: /"(?<str>[^"]+|)"/g,
  MATH: /^(-?\d+(\.\d+)?)(\+|-|\*|\/)(\d+(\.\d+)?|\(-\d+(\.\d+)?\))$/g,
};
