import { LogLevel } from "$types/logging";
import { Log } from "../logging";

/**
 * Converts the input to Base64
 * @param input The input
 * @returns The base64
 */
export function toBase64(input: string) {
  try {
    return btoa(input);
  } catch {
    Log(`base64`, `Couldn't convert ${input.length} bytes to Base64.`, LogLevel.error);
    return input;
  }
}

/**
 * Converts the Base64 to string
 * @param input The base64
 * @returns The string
 */
export function fromBase64(input: string) {
  try {
    return atob(input);
  } catch {
    Log(`base64`, `Couldn't convert ${input.length} bytes to string.`, LogLevel.error);
    return input;
  }
}
