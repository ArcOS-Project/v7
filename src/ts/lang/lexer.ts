import type { TokenType } from "$types/lang";
import { LangError } from "./error";
import { Token } from "./token";

export class Lexer {
  input: string;
  position: number;
  line: number;
  column: number;
  currentChar: string | null;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
    this.line = 1;
    this.column = 1;
    this.currentChar = this.input[this.position];
  }

  advance(): void {
    if (this.currentChar === "\n") {
      this.line++;
      this.column = 1;
    } else {
      this.column++;
    }

    this.position++;

    if (this.position < this.input.length) {
      this.currentChar = this.input[this.position];
    } else {
      this.currentChar = null;
    }
  }

  skipWhitespace(): void {
    while (this.currentChar && /\s/g.test(this.currentChar)) {
      this.advance();
    }
  }

  skipComment(): void {
    if (this.currentChar === "/" && this.input[this.position + 1] === "/") {
      while (this.currentChar) {
        this.advance();
      }

      this.advance();
    }
  }

  getNumber(): Token {
    let result = "";
    let hasDecimal = false;

    while (
      this.currentChar &&
      (/[0-9]/.test(this.currentChar) || this.currentChar === ".")
    ) {
      if (this.currentChar === ".") {
        if (hasDecimal) {
          this.error("Invalid number: multiple decimal points");
        }

        hasDecimal = true;
      }

      result += this.currentChar;
      this.advance();
    }

    if (hasDecimal) {
      return new Token("FLOAT", parseFloat(result));
    } else {
      return new Token("INTEGER", parseInt(result));
    }
  }

  getString(): Token | undefined {
    let result = "";

    this.advance();
    while (this.currentChar && this.currentChar !== '"') {
      result += this.currentChar;
      this.advance();
    }

    if (this.currentChar === '"') {
      this.advance();

      return new Token("STRING", result);
    } else {
      this.error("Unterminated string");
    }
  }

  getIdentifier(): string {
    let result = "";

    while (this.currentChar && /[a-zA-Z_]/.test(this.currentChar)) {
      result += this.currentChar;
      this.advance();
    }

    return result;
  }

  getNextToken(): Token | undefined {
    while (this.currentChar) {
      this.skipWhitespace();
      this.skipComment();

      if (!this.currentChar) {
        break;
      }

      if (/[0-9]/.test(this.currentChar)) {
        return this.getNumber();
      }

      if (this.currentChar === '"') {
        return this.getString();
      }

      if (/[a-zA-Z_]/.test(this.currentChar)) {
        const identifier = this.getIdentifier();

        if (identifier === "true" || identifier === "false") {
          return new Token("BOOLEAN", identifier === "true");
        }

        if (identifier === "null") {
          return new Token("NULL", null);
        }

        if (
          identifier === "if" ||
          identifier === "else" ||
          identifier === "while" ||
          identifier === "fun" ||
          identifier === "return" ||
          identifier === "for"
        ) {
          return new Token(identifier.toUpperCase() as TokenType, identifier);
        }

        return new Token("IDENTIFIER", identifier);
      }

      const char = this.currentChar;

      switch (char) {
        case "+":
          this.advance();
          return new Token("PLUS", "+");
        case "-":
          this.advance();
          return new Token("MINUS", "-");
        case "*":
          this.advance();
          return new Token("MULTIPLY", "*");
        case "/":
          this.advance();
          return new Token("DIVIDE", "/");
        case "%":
          this.advance();
          return new Token("MODULO", "%");
        case "(":
          this.advance();
          return new Token("LPAREN", "(");
        case ")":
          this.advance();
          return new Token("RPAREN", ")");
        case "{":
          this.advance();
          return new Token("LBRACE", "{");
        case "}":
          this.advance();
          return new Token("RBRACE", "}");
        case "[":
          this.advance();
          return new Token("LBRACKET", "[");
        case "]":
          this.advance();
          return new Token("RBRACKET", "]");
        case ";":
          this.advance();
          return new Token("SEMICOLON", ";");
        case ",":
          this.advance();
          return new Token("COMMA", ",");
        case ":":
          this.advance();
          return new Token("COLON", ":");
        case ".":
          this.advance();
          return new Token("DOT", ".");
        case "=":
          this.advance();

          if (this.currentChar === "=") {
            this.advance();

            return new Token("EQUAL_EQUAL", "==");
          }

          return new Token("ASSIGN", "=");
        case "!":
          this.advance();

          if (this.currentChar === "=") {
            this.advance();

            return new Token("NOT_EQUAL", "!=");
          }

          return new Token("NOT", "!");
        case ">":
          this.advance();

          if (this.currentChar === "=") {
            this.advance();

            return new Token("GREATER_EQUAL", ">=");
          }

          return new Token("GREATER", ">");
        case "<":
          this.advance();

          if (this.currentChar === "=") {
            this.advance();

            return new Token("LESS_EQUAL", "<=");
          }

          return new Token("LESS", "<");
        case "&":
          this.advance();

          if (this.currentChar === "&") {
            this.advance();

            return new Token("AND", "&&");
          }

          this.error("Invalid character: '&'");
        case "|":
          this.advance();

          if (this.currentChar === "|") {
            this.advance();

            return new Token("OR", "||");
          }

          this.error("Invalid character: '|'");
        default:
          this.error(`Invalid character: '${this.currentChar}'`);
      }
    }

    return new Token("EOF", null);
  }

  error(message: string) {
    throw new LangError(message, this.line, this.column, this.input);
  }
}
