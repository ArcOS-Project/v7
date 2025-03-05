export class LangError extends Error {
  line: number | null;
  column: number | null;
  input: string;

  constructor(
    message: string,
    line: number | null = null,
    column: number | null = null,
    input: string = ""
  ) {
    super(message);
    this.name = "LangError";
    this.line = line;
    this.column = column;
    this.input = input;
  }

  toString() {
    let location = "";
    let line = "";

    if (this.line !== null && this.column !== null) {
      location = ` (Line: ${this.line}, Column: ${this.column})`;
    }

    if (this.input && this.input.length && this.line !== null) {
      const split = this.input.split("\n");

      line = split[this.line - 1];
    }

    const lineNumber = `${this.line} | `;

    console.trace();
    return `${this.name}: ${
      this.message
    }${location}\n\n${lineNumber}${line}\n${" ".repeat(
      this.column || 0 + lineNumber.length - 1
    )}^ HERE`;
  }
}
