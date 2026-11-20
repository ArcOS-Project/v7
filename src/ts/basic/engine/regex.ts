const FUNCTION_NEST_DEPTH = 10;

function functionArgs(depth: number): string {
  let level = `(?:"(?:[^"\\\\]|\\\\.)*"|[^()"])*`;

  for (let i = 0; i < depth; i++) {
    level = `(?:"(?:[^"\\\\]|\\\\.)*"|[^()"]|\\(${level}\\))*`;
  }

  return level;
}

export const REGEXES = {
  STRING: /"(?<str>[^"]+|)"/gm,
  FUNCTION: new RegExp(`\\b(?<name>[a-zA-Z]+)\\((?<val>${functionArgs(FUNCTION_NEST_DEPTH)})\\)`, "gm"),
  IF: /(?<not>NOT |not |)(?<expr>.+) (?:THEN|then)($| (?<inline>.+))/,
  DUALEXPR: /(?<left>.+) (?<mode>[A-Za-z]+) (?<right>.+)/,
  WHILE: /(?<not>NOT |not |)(?<expr>.+) (?:DO|do)($| (?<inline>.+))/,
  VARGET: /\$(?<name>[A-Za-z]{1,6})(?:\[(?<idx>[0-9\-]+|\+|\$[A-Za-z]{1,6}|LEN|len)\]|\{(?<hierarchy>[a-zA-Z\_\.0-9]+)\}|)/g,
  VARSET:
    /(?<key>[A-Za-z]{1,6})(?:\[(?<idx>[0-9\-]+|\+|\$[A-Za-z]{1,6}|LEN|len)\]|\{(?<hierarchy>[a-zA-Z\_\.0-9]+)\}|) = (?<value>.+|)/,
};
