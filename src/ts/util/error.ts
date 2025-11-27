import type { ParsedStackFrame, ParsedStackUrl } from "$types/error";
import { parse } from "stacktrace-parser";

export class ErrorUtils {
  public static URL_REGEX =
    /http(s|)\:\/\/[a-zA-Z.\:0-9]+(\/tpa\/v3\/)(?<userId>[a-zA-Z0-9]+)\/(?<timestamp>[0-9]+)\/(?<appId>[A-Za-z0-9_-]+(_|)[A-Za-z0-9_-]+)@(?<filename>[a-zA-Z0-9_-]+\.js)/gm;

  public static parseStack(e: Error | PromiseRejectionEvent): ParsedStackFrame[] {
    const stack = e instanceof PromiseRejectionEvent ? e.reason : e.stack;
    if (!stack) return [];

    const parsed = parse(stack);
    const regex = new RegExp(this.URL_REGEX);
    const frames: ParsedStackFrame[] = [];

    for (const frame of parsed) {
      frames.push({
        ...frame,
        parsed: regex.exec(frame?.file || "")?.groups as ParsedStackUrl,
      });
    }

    return frames;
  }

  public static abbreviatedStackTrace(e: Error | PromiseRejectionEvent, prefix = "") {
    const stack = this.parseStack(e);

    let str = `${prefix}${e}`;

    for (const frame of stack) {
      const method = frame.methodName || "(anonymous)";

      str += `\n  at ${method}`;
    }

    return str;
  }
}
