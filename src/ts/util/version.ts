type ComparisonResult = "lower" | "higher" | "equal";

export function compareVersion(left: string, right: string): ComparisonResult {
  const parse = (v: string) => v.split(".").map((n) => parseInt(n, 10));

  const [lMajor, lMinor, lPatch] = parse(left);
  const [rMajor, rMinor, rPatch] = parse(right);

  if (rMajor !== lMajor) return rMajor < lMajor ? "lower" : "higher";
  if (rMinor !== lMinor) return rMinor < lMinor ? "lower" : "higher";
  if (rPatch !== lPatch) return rPatch < lPatch ? "lower" : "higher";

  return "equal";
}
