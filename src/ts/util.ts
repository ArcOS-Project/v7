import { passwordStrength } from "check-password-strength";
import { sha256 as sha256Fallback } from "js-sha256";
import leoProfanity from "leo-profanity";
import validator from "validator";
import { getJsonHierarchy } from "./hierarchy";
import { Process } from "./process/instance";
import { Kernel, Server } from "./env";
import { ShortLogLevelCaptions, type LogItem } from "$types/logging";

leoProfanity.loadDictionary("en");

export function validateUsername(username: string): boolean {
  if (username.length < 3 || username.length > 32) return false;

  const isValid = validator.isAlphanumeric(username) && !leoProfanity.check(username);

  return isValid;
}

export function htmlspecialchars(text: string) {
  const el = document.createElement("div");

  el.innerText = text;

  return el.innerHTML;
}

export function detectJavaScript(htmlString: string) {
  const issues: string[] = [];

  const disallowedTagsRegex = /<(script|meta|title|noscript|embed|object|base|head|html|body)\b[^>]*>/gi;
  const disallowedAttributesRegex = /\b(on\w+|lang|charset|http-equiv|content|scheme|target|base)=["'][^"']*["']/gi;
  const javascriptURLRegex = /href=["']javascript:[^"']*["']/gi;

  let match;

  while ((match = disallowedTagsRegex.exec(htmlString)) !== null) {
    issues.push(`Disallowed tag: ${match[0]}`);
  }

  while ((match = disallowedAttributesRegex.exec(htmlString)) !== null) {
    issues.push(`Disallowed attribute: ${match[0]}`);
  }

  while ((match = javascriptURLRegex.exec(htmlString)) !== null) {
    issues.push(`JavaScript URL detected: ${match[0]}`);
  }

  return issues.length > 0 ? issues : null;
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function checkPasswordStrength(password: string) {
  return passwordStrength(password, [
    {
      id: 0,
      value: "tooWeak",
      minDiversity: 0,
      minLength: 0,
    },
    {
      id: 1,
      value: "weak",
      minDiversity: 2,
      minLength: 8,
    },
    {
      id: 2,
      value: "medium",
      minDiversity: 4,
      minLength: 10,
    },
    {
      id: 3,
      value: "strong",
      minDiversity: 4,
      minLength: 12,
    },
  ]);
}

export const Plural = (s: string, x: number) => `${s}${x == 1 ? "" : "s"}`;

export function sliceIntoChunks(arr: any[], chunkSize: number) {
  const res = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);

    res.push(chunk);
  }

  return res;
}

export const decimalToHex = (value: number, maxLength = 2) => value.toString(16).toUpperCase().padStart(maxLength, "0");

export async function sha256(message: string): Promise<string> {
  try {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  } catch (e) {
    // Fallback for browsers that don't support subtle crypto
    return sha256Fallback(message);
  }
}

export function CountInstances(input: string, search: string) {
  return input.split(search).length;
}

export const maxLength = (m: string[], padding = 0) => {
  let max = 0;

  for (let i = 0; i < m.length; i++) {
    if (m[i].length > max) max = m[i].length;
  }

  return max + padding;
};

export const Truncate = (s: string, m: number) => (s.length > m - 1 ? s.substring(0, m - 1) + "…" : s);
export const FormatLargeNumber = (n: number) => new Intl.NumberFormat().format(n);
export const Gap = (n: number, s = " ") => s.repeat(n);

export function tryParseInt(input: any, returnsUndefined = false) {
  try {
    return parseInt(input);
  } catch {
    return returnsUndefined ? undefined : input;
  }
}
export function sortByKey<T extends any[]>(array: T, key: string, reverse = false) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];

    const comparison = x < y ? -1 : x > y ? 1 : 0;
    return reverse ? -comparison : comparison;
  }) as T;
}

export function sortByHierarchy(array: any[], hierarchy: string) {
  return array.sort(function (a, b) {
    const x = `${getJsonHierarchy(a, hierarchy)}`.toLowerCase();
    const y = `${getJsonHierarchy(b, hierarchy)}`.toLowerCase();

    return x < y ? -1 : x > y ? 1 : 0;
  });
}
export function deepCopyWithBlobs<T>(obj: T): Promise<T> {
  const isObject = (val: any) => val && typeof val === "object";

  async function recurse(value: any): Promise<any> {
    if (value instanceof Blob) {
      // Clone the Blob by reading and reconstructing it
      const arrayBuffer = await value.arrayBuffer();
      return new Blob([arrayBuffer], { type: value.type });
    }

    if (Array.isArray(value)) {
      return Promise.all(value.map((item) => recurse(item)));
    }

    if (isObject(value)) {
      const entries = await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await recurse(v)]));
      return Object.fromEntries(entries);
    }

    // primitive
    return value;
  }

  return recurse(obj);
}

export function authcode() {
  return Server.authCode ?? "";
}

export function groupByTimeFrame<T extends Record<string, any>>(items: T[], column: keyof T = "createdAt") {
  const now = new Date();
  const today = new Date(now.setHours(0, 0, 0, 0));
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  const twentyEightDaysAgo = new Date(today);
  twentyEightDaysAgo.setDate(today.getDate() - 28);

  return items.reduce(
    (acc, item) => {
      const date = new Date(item[column]);
      if (date >= today) {
        acc.today.push(item);
      } else if (date >= yesterday) {
        acc.yesterday.push(item);
      } else if (date >= sevenDaysAgo) {
        acc.sevenDays.push(item);
      } else if (date >= twentyEightDaysAgo) {
        acc.twentyEightDays.push(item);
      } else {
        acc.older.push(item);
      }
      return acc;
    },
    {
      today: [],
      yesterday: [],
      sevenDays: [],
      twentyEightDays: [],
      older: [],
    } as Record<string, T[]>
  );
}

export function noop() {} // empty filler method

export function calculateMemory(process: Process): number {
  const seen = new WeakSet();

  function walk(node: any, root = false): number {
    if (node === null || typeof node !== "object") {
      return String(node).length;
    }

    if (seen.has(node)) {
      return 20; // length of "[CIRCULAR_REFERENCE]"
    }
    seen.add(node);

    if (Array.isArray(node)) {
      let len = 2;
      for (let i = 0; i < node.length; i++) {
        len += walk(node[i]);
      }
      return len;
    }

    let len = 2;

    // MEMORY BOUNDARY: each process has their own memory that does not "leak" to other processes.
    //
    // So; if a property of a process is another process, assume that that other process is calculated
    // elsewhere, and don't accumulate it here.
    if (node instanceof Process && !root) return 0;

    const keys = Object.keys(node);

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      len += k.length;
      len += walk(node[k]);
    }

    return len;
  }

  return walk(process, true);
}

export function stringifyProcess(obj: Process): string {
  const seen = new WeakSet();

  function walk(value: any, root = false): string {
    if (value === null || typeof value !== "object") {
      return String(value);
    }
    if (seen.has(value)) {
      return "[CIRCULAR_REFERENCE]";
    }
    seen.add(value);

    if (Array.isArray(value)) {
      return "[ " + value.map((v) => walk(v)).join(", ") + " ]";
    }

    if (value instanceof Process && !root) return "";

    const entries = Object.entries(value)
      .map(([k, v]) => `${JSON.stringify(k)}: ${walk(v)}`)
      .join(", ");

    return `{ ${entries} }`;
  }

  const str = walk(obj, true);

  return str;
}

export function logItemToStr(data: LogItem) {
  const timestamp = (data.timestamp - Kernel.startMs).toString().padStart(10, "0");
  const level = ShortLogLevelCaptions[data.level];
  const line = `[${timestamp}] ${level} ${data.source}: ${data.message}`;

  return line;
}
