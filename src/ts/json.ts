export function tryJsonParse<T = any>(input: string) {
  try {
    return JSON.parse(input) as T;
  } catch {
    return input;
  }
}

export function keysToLowerCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToLowerCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key.toLowerCase()] = keysToLowerCase(value);
      return acc;
    }, {} as Record<string, any>);
  }
  return obj;
}
