import type { TokenType } from "$types/lang";
import { ASTNode } from "./ast";
import { LangError } from "./error";
import type { Lexer } from "./lexer";
import type { Token } from "./token";

export class Parser {
  lexer: Lexer;
  currentToken: Token | undefined;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.currentToken = this.lexer.getNextToken();
  }

  eat(tokenType: string) {
    if (this.currentToken?.type === tokenType) {
      this.currentToken = this.lexer.getNextToken();
    } else {
      this.error(`Expected ${tokenType}, got ${this.currentToken?.type}`);
    }
  }

  parse(): ASTNode {
    return this.program();
  }

  program(): ASTNode {
    const statements: ASTNode[] = [];

    while (this.currentToken?.type !== "EOF") {
      statements.push(this.declaration());
    }

    return new ASTNode("PROGRAM", null, statements);
  }

  declaration(): ASTNode {
    if (this.currentToken?.type === "FUN") {
      return this.functionDeclaration();
    } else {
      return this.statement();
    }
  }

  statement(): ASTNode {
    if (this.currentToken?.type === "IF") {
      return this.ifStatement();
    } else if (this.currentToken?.type === "WHILE") {
      return this.whileStatement();
    } else if (this.currentToken?.type === "FOR") {
      return this.forStatement();
    } else if (this.currentToken?.type === "RETURN") {
      return this.returnStatement();
    } else if (this.currentToken?.type === "IDENTIFIER") {
      // Check if it's an assignment statement
      if (
        this.lexer.input[this.lexer.position] === "=" ||
        (this.lexer.input[this.lexer.position] === " " &&
          this.lexer.input[this.lexer.position + 1] === "=")
      ) {
        console.log(this.lexer.input[this.lexer.position]);
        return this.assignmentStatement()!;
      } else if (this.lexer.input[this.lexer.position] === "(") {
        return this.expressionStatement();
      } else {
        return this.expressionStatement();
      }
    } else {
      return this.expressionStatement();
    }
  }

  functionDeclaration(): ASTNode {
    this.eat("FUN");

    let identifier = null;
    if (this.currentToken?.type === "IDENTIFIER") {
      identifier = new ASTNode("IDENTIFIER", this.currentToken.value);
      this.eat("IDENTIFIER");
    }

    this.eat("LPAREN");

    const parameters: ASTNode[] = [];

    if (this.currentToken?.type !== "RPAREN") {
      do {
        parameters.push(new ASTNode("IDENTIFIER", this.currentToken?.value));
        this.eat("IDENTIFIER");

        if (this.currentToken?.type === "COMMA") {
          this.eat("COMMA");
        }
      } while (this.currentToken?.type !== ("RPAREN" as TokenType));
    }

    this.eat("RPAREN");

    const body = this.blockStatement();

    return new ASTNode("FUNCTION_DECLARATION", identifier?.value ?? null, [
      identifier,
      new ASTNode("PARAMETERS", null, parameters),
      body,
    ]);
  }

  returnStatement(): ASTNode {
    this.eat("RETURN");

    const expression = this.expression();

    this.eat("SEMICOLON");

    return new ASTNode("RETURN_STATEMENT", null, [expression]);
  }

  ifStatement(): ASTNode {
    this.eat("IF");
    this.eat("LPAREN");

    const condition = this.expression();

    this.eat("RPAREN");

    const thenBranch = this.blockStatement();

    let elseBranch: ASTNode | null = null;

    if (this.currentToken?.type === "ELSE") {
      this.eat("ELSE");
      elseBranch = this.blockStatement();
    }

    return new ASTNode("IF_STATEMENT", null, [
      condition,
      thenBranch,
      elseBranch,
    ]);
  }

  whileStatement(): ASTNode {
    this.eat("WHILE");
    this.eat("LPAREN");

    const condition = this.expression();

    this.eat("RPAREN");

    const body = this.blockStatement();

    return new ASTNode("WHILE_STATEMENT", null, [condition, body]);
  }

  forStatement(): ASTNode {
    this.eat("FOR");
    this.eat("LPAREN");

    const init = this.statement();
    const condition = this.expression();

    this.eat("SEMICOLON");

    const update = this.statement();

    this.eat("RPAREN");

    const body = this.blockStatement();
    return new ASTNode("FOR_STATEMENT", null, [init, condition, update, body]);
  }

  blockStatement(): ASTNode {
    this.eat("LPAREN");

    const statements: ASTNode[] = [];

    while (this.currentToken?.type !== "RPAREN") {
      statements.push(this.declaration());
    }

    this.eat("RPAREN");

    return new ASTNode("BLOCK_STATEMENT", null, statements);
  }

  assignmentStatement(): ASTNode | undefined {
    let target: ASTNode | undefined;

    if (`${this.currentToken?.type}` === "IDENTIFIER") {
      let identifier = new ASTNode("IDENTIFIER", this.currentToken?.value);
      this.eat("IDENTIFIER");

      while (`${this.currentToken?.type}` === "DOT") {
        this.eat("DOT");

        if (this.currentToken?.type !== "IDENTIFIER") {
          this.error("Expected identifier after dot");
        }

        const property = new ASTNode("IDENTIFIER", this.currentToken?.value);

        this.eat("IDENTIFIER");

        identifier = new ASTNode("PROPERTY_ACCESS", null, [
          identifier,
          property,
        ]);
      }

      target = identifier;
    } else {
      this.error("Expected identifier at the beginning of assignment");
    }

    this.lexer.skipWhitespace();
    this.eat("ASSIGN");
    this.lexer.skipWhitespace();

    const expression = this.expression();

    this.eat("SEMICOLON");

    if (target) return new ASTNode("ASSIGNMENT", null, [target, expression]);
  }

  expressionStatement(): ASTNode {
    const expression = this.expression();

    this.eat("SEMICOLON");

    return new ASTNode("EXPRESSION_STATEMENT", null, [expression]);
  }

  expression(): ASTNode {
    return this.logicalOr();
  }

  logicalOr(): ASTNode {
    let node = this.logicalAnd();

    while (this.currentToken?.type === "OR") {
      const token = this.currentToken;

      this.eat("OR");

      node = new ASTNode(token.type, token.value, [node, this.logicalAnd()]);
    }

    return node;
  }

  logicalAnd(): ASTNode {
    let node = this.equality();

    while (this.currentToken?.type === "AND") {
      const token = this.currentToken;

      this.eat("AND");

      node = new ASTNode(token.type, token.value, [node, this.equality()]);
    }

    return node;
  }

  equality(): ASTNode {
    let node = this.relational();

    while (
      this.currentToken?.type === "EQUAL_EQUAL" ||
      this.currentToken?.type === "NOT_EQUAL"
    ) {
      const token = this.currentToken;

      if (token.type === "EQUAL_EQUAL") {
        this.eat("EQUAL_EQUAL");
      } else {
        this.eat("NOT_EQUAL");
      }

      node = new ASTNode(token.type, token.value, [node, this.relational()]);
    }

    return node;
  }

  relational(): ASTNode {
    let node = this.additive();

    while (
      this.currentToken?.type === "GREATER" ||
      this.currentToken?.type === "LESS" ||
      this.currentToken?.type === "GREATER_EQUAL" ||
      this.currentToken?.type === "LESS_EQUAL"
    ) {
      const token = this.currentToken;

      if (token.type === "GREATER") {
        this.eat("GREATER");
      } else if (token.type === "LESS") {
        this.eat("LESS");
      } else if (token.type === "GREATER_EQUAL") {
        this.eat("GREATER_EQUAL");
      } else {
        this.eat("LESS_EQUAL");
      }

      node = new ASTNode(token.type, token.value, [node, this.additive()]);
    }

    return node;
  }

  additive(): ASTNode {
    let node = this.multiplicative();

    while (
      this.currentToken?.type === "PLUS" ||
      this.currentToken?.type === "MINUS"
    ) {
      const token = this.currentToken;

      if (token.type === "PLUS") {
        this.eat("PLUS");
      } else {
        this.eat("MINUS");
      }

      node = new ASTNode(token.type, token.value, [
        node,
        this.multiplicative(),
      ]);
    }

    return node;
  }

  multiplicative(): ASTNode {
    let node = this.unary();

    while (
      this.currentToken?.type === "MULTIPLY" ||
      this.currentToken?.type === "DIVIDE" ||
      this.currentToken?.type === "MODULO"
    ) {
      const token = this.currentToken;

      if (token.type === "MULTIPLY") {
        this.eat("MULTIPLY");
      } else if (token.type === "DIVIDE") {
        this.eat("DIVIDE");
      } else {
        this.eat("MODULO");
      }

      node = new ASTNode(token.type, token.value, [node, this.unary()]);
    }

    return node;
  }

  unary(): any {
    if (
      this.currentToken?.type === "PLUS" ||
      this.currentToken?.type === "MINUS" ||
      this.currentToken?.type === "NOT"
    ) {
      const token = this.currentToken;

      if (token.type === "PLUS") {
        this.eat("PLUS");
      } else if (token.type === "MINUS") {
        this.eat("MINUS");
      } else {
        this.eat("NOT");
      }

      return new ASTNode(token.type, token.value, [this.primary()]);
    }

    return this.primary();
  }

  primary(): any {
    const currentTokenType = this.currentToken?.type;

    if (
      currentTokenType === "INTEGER" ||
      currentTokenType === "FLOAT" ||
      currentTokenType === "STRING" ||
      currentTokenType === "BOOLEAN" ||
      currentTokenType === "NULL"
    ) {
      let node = new ASTNode(
        this.currentToken?.type!,
        this.currentToken?.value
      );

      this.eat(this.currentToken?.type!);

      if (this.currentToken?.type === "LBRACKET") {
        this.eat("LBRACKET");

        const index = this.expression();

        this.eat("RBRACKET");

        node = new ASTNode("ARRAY_ACCESS", null, [node, index]);
      }

      return node;
    } else if (currentTokenType === "IDENTIFIER") {
      let identifier = new ASTNode("IDENTIFIER", this.currentToken?.value);

      this.eat("IDENTIFIER");

      while (this.currentToken?.type === "DOT") {
        this.eat("DOT");

        if (`${this.currentToken.type}` !== "IDENTIFIER") {
          this.error("Expected identifier after dot");
        }

        const property = new ASTNode("IDENTIFIER", this.currentToken.value);

        this.eat("IDENTIFIER");

        identifier = new ASTNode("PROPERTY_ACCESS", null, [
          identifier,
          property,
        ]);
      }

      if (`${this.currentToken?.type}` === "LPAREN") {
        this.eat("LPAREN");

        const args: ASTNode[] = [];

        if (this.currentToken?.type !== "RPAREN") {
          do {
            args.push(this.expression());

            if (this.currentToken?.type === "COMMA") {
              this.eat("COMMA");
            }
          } while (this.currentToken?.type !== ("RPAREN" as TokenType));
        }

        this.eat("RPAREN");

        return new ASTNode("FUNCTION_CALL", identifier.value, [
          identifier,
          new ASTNode("ARGUMENTS", null, args),
        ]);
      } else if (this.currentToken?.type === "LBRACKET") {
        this.eat("LBRACKET");
        const index = this.expression();
        this.eat("RBRACKET");

        identifier = new ASTNode("ARRAY_ACCESS", null, [identifier, index]);
      }

      return identifier;
    } else if (this.currentToken?.type === "LPAREN") {
      this.eat("LPAREN");
      const node = this.expression();
      this.eat("RPAREN");

      return node;
    } else if (this.currentToken?.type === "LBRACKET") {
      const node = this.arrayLiteral();

      if (this.currentToken.type === "LBRACKET") {
        this.eat("LBRACKET");
        const index = this.expression();
        this.eat("RBRACKET");
        return new ASTNode("ARRAY_ACCESS", null, [node, index]);
      }

      return node;
    } else if (this.currentToken?.type === "LBRACE") {
      return this.objectLiteral();
    } else {
      this.error(`Unexpected token: ${this.currentToken?.type}`);
    }
  }

  objectLiteral(): ASTNode {
    this.eat("LBRACE");

    const properties: any[] = [];

    while (this.currentToken?.type !== "RBRACE") {
      if (this.currentToken?.type !== "STRING") {
        this.error("Object keys must be strings");
      }

      const key = this.currentToken?.value;

      this.eat("STRING");
      this.eat("COLON");

      let value: ASTNode;
      if (this.currentToken?.type === "FUN") {
        value = this.functionDeclaration(); // Parse function definition
      } else {
        value = this.expression(); // Values can be any expression
      }

      properties.push({ key: key, value: value });

      if (this.currentToken?.type === "COMMA") {
        this.eat("COMMA");
      }
    }

    this.eat("RBRACE");

    return new ASTNode("OBJECT_LITERAL", null, properties);
  }

  arrayLiteral(): ASTNode {
    this.eat("LBRACKET");

    const elements: ASTNode[] = [];

    if (this.currentToken?.type !== "RBRACKET") {
      do {
        elements.push(this.expression());

        if (this.currentToken?.type === "COMMA") {
          this.eat("COMMA");
        }
      } while (this.currentToken?.type !== ("RBRACKET" as TokenType));
    }

    this.eat("RBRACKET");

    return new ASTNode("ARRAY_LITERAL", null, elements);
  }

  error(message: string) {
    throw new LangError(
      message,
      this.lexer.line,
      this.lexer.column,
      this.lexer.input
    );
  }
}
