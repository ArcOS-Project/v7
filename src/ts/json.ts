export function tryJsonParse<T = any>(input: any): T {
  if (!input) return undefined as T;
  
  try {
    return JSON.parse(input) as T;
  } catch {
    return input;
  }
}

export function tryJsonStringify(input: any, indent: number): string {
  try {
    return JSON.stringify(input, null, indent);
  } catch {
    return input;
  }
}

export function keysToLowerCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToLowerCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => {
        acc[key.toLowerCase()] = keysToLowerCase(value);
        return acc;
      },
      {} as Record<string, any>
    );
  }
  return obj;
}
export type ValidationObject = { [key: string]: any };

export function validateObject(target: ValidationObject, validation: ValidationObject): boolean {
  if (typeof validation !== "object" || validation === null) return false;

  for (const key in validation) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) return false;

    const targetValue = target[key];
    const validationValue = validation[key];

    if (typeof validationValue === "object" && validationValue !== null) {
      if (Array.isArray(validationValue)) {
        if (!Array.isArray(targetValue) || validationValue.length > targetValue.length) return false;

        if (!validationValue.every((val, index) => validateObject(targetValue[index], val))) return false;
      } else {
        if (!validateObject(targetValue, validationValue)) return false;
      }
    } else {
      if (targetValue !== validationValue) {
        return false;
      }
    }
  }

  return true;
}
