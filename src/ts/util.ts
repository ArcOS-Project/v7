import { passwordStrength } from "check-password-strength";
import leoProfanity from "leo-profanity";
import validator from "validator";

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

  const disallowedTagsRegex = /<(script|meta|title|iframe|noscript|embed|object|base|head|html|body)\b[^>]*>/gi;
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

export async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
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
