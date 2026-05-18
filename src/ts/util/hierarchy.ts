export function getAllJsonPaths(obj: any, prefix: string = ""): string[] {
  let paths: string[] = [];

  if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      paths = paths.concat(getAllJsonPaths(obj[key], currentPath));
    }
  } else {
    paths.push(prefix); // Leaf node
  }

  return paths;
}

export function getJsonHierarchy<T = any>(object: Object, hierarchy: string): T | null {
  const parts = hierarchy.split(".");

  let currentObj: Record<string, any> = object;

  for (const part of parts) {
    if (currentObj[part] === undefined || currentObj[part] === null) return null;

    currentObj = currentObj[part];
  }

  return currentObj as T;
}

export function setJsonHierarchy<T = any>(object: Object, hierarchy: string, value: any): T | null {
  const parts = hierarchy.split(".");
  const lastIndex = parts.length - 1;

  let currentObj: Record<string, any> = object;

  for (let i = 0; i < lastIndex; i++) {
    const key = parts[i];

    if (currentObj[key] === undefined) {
      currentObj[key] = {};
    }

    currentObj = currentObj[key];
  }

  if (!value) delete currentObj[parts[lastIndex]];
  else currentObj[parts[lastIndex]] = value;

  return object as T;
}

type NestedObject = Record<string, any>;

export function applyDefaults<T = NestedObject>(target: NestedObject, defaults: NestedObject): T {
  const result: NestedObject = { ...target };

  for (const key in defaults) {
    if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === undefined) {
      result[key] = defaults[key];
    } else if (Array.isArray(defaults[key]) && Array.isArray(target[key])) {
      result[key] = [...defaults[key], ...target[key]];
    } else if (
      typeof defaults[key] === "object" &&
      defaults[key] !== null &&
      typeof target[key] === "object" &&
      target[key] !== null
    ) {
      result[key] = applyDefaults(target[key], defaults[key]);
    }
  }

  return result as T;
}
