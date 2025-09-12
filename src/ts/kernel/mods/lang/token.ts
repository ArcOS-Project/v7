import type { TokenType } from "$types/lang";

export class Token {
  type: TokenType;
  value: any;

  constructor(type: TokenType, value: any) {
    this.type = type;
    this.value = value;
  }
}
