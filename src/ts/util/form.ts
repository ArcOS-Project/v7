export function toForm(object: Record<string, any>): FormData {
  const result = new FormData();

  for (const [key, value] of Object.entries(object)) {
    result.set(key, value);
  }

  return result;
}
