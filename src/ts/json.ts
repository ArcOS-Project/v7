export function tryJsonParse<T = any>(input: string) {
  try {
    return JSON.parse(input) as T;
  } catch {
    return input;
  }
}
