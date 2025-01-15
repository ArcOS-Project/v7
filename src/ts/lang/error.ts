import type { InterpreterCommand } from "$types/lang";
import type { LanguageInstance } from "./instance";

export class LanguageExecutionError extends Error {
  public pointer = -1;
  public executionCount = 0;
  public keyword: string = "";
  public message: string;
  public tokens: string[];
  public instruction: InterpreterCommand;

  constructor(message: string, lang: LanguageInstance, keyword = "") {
    super(message);

    this.message = message;
    this.pointer = lang.pointer;
    this.instruction = lang.source[this.pointer];
    this.executionCount = lang.executionCount;
    this.keyword = keyword;
    this.tokens = lang.tokens;
  }

  getObject() {
    return {
      pointer: this.pointer,
      executionCount: this.executionCount,
      keyword: this.keyword,
      message: this.message,
      tokens: this.tokens,
      instruction: this.instruction,
    };
  }
}

export class PrematureLanguageError extends Error {
  public message: string;

  constructor(message: string) {
    super(message);

    this.message = message;
  }
}
