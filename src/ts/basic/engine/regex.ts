export const REGEXES = {
  STRING: /"(?<str>[^"]+|)"/gm,
  FUNCTION: /(?<name>[a-zA-Z]+)\((?<val>.+|)\)/gm,
  IF: /(?<not>NOT |not |)(?<expr>.+) (?:THEN|then)($| (?<inline>.+))/,
  DUALEXPR: /(?<left>.+) (?<mode>[A-Za-z]+) (?<right>.+)/,
  WHILE: /(?<not>NOT |not |)(?<expr>.+) (?:DO|do)($| (?<inline>.+))/,
  VARGET: /\$(?<name>[A-Za-z]{1,6})(?:\[(?<idx>[0-9\-]+|\+|\$[A-Za-z]{1,6}|LEN)\]|\{(?<hierarchy>[a-zA-Z\_\.0-9]+)\}|)/g,
  VARSET:
    /(?<key>[A-Za-z]{1,6})(?:\[(?<idx>[0-9\-]+|\+|\$[A-Za-z]{1,6}|LEN)\]|\{(?<hierarchy>[a-zA-Z\_\.0-9]+)\}|) = (?<value>.+|)/,
};
