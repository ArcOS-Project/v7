import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { NativeFunction } from "$types/lang";
import type { ASTNode } from "./ast";
import { LangError } from "./error";
import { Lexer } from "./lexer";
import { Parser } from "./parser";

export class Interpreter extends Process {
  ast: ASTNode | undefined;
  globalEnvironment: Record<string, any>;
  currentEnvironment: Record<string, any>;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    ast?: ASTNode
  ) {
    super(handler, pid, parentPid);

    if (ast) this.ast = ast;

    this.globalEnvironment = {
      print: {
        parameters: ["message"],
        body: (...args: any[]) => {
          console.log(...args);

          return null;
        },

        native: true,
      },
      performance: {
        now: {
          parameters: [],
          body: () => {
            return performance.now();
          },
          native: true,
        },
      },
    };

    this.currentEnvironment = this.globalEnvironment;
  }

  interpret(ast: ASTNode | undefined = this.ast) {
    if (!ast) return;

    return this.visit(ast);
  }

  visit(node: ASTNode): any {
    switch (node.type) {
      case "PROGRAM":
        return this.visitProgram(node);
      case "ASSIGNMENT":
        return this.visitAssignment(node);
      case "EXPRESSION_STATEMENT":
        return this.visitExpressionStatement(node);
      case "IF_STATEMENT":
        return this.visitIfStatement(node);
      case "WHILE_STATEMENT":
        return this.visitWhileStatement(node);
      case "FOR_STATEMENT":
        return this.visitForStatement(node);
      case "BLOCK_STATEMENT":
        return this.visitBlockStatement(node);
      case "FUNCTION_DECLARATION":
        return this.visitFunctionDeclaration(node);
      case "FUNCTION_CALL":
        return this.visitFunctionCall(node);
      case "RETURN_STATEMENT":
        return this.visitReturnStatement(node);
      case "ARRAY_LITERAL":
        return this.visitArrayLiteral(node);
      case "ARRAY_ACCESS":
        return this.visitArrayAccess(node);
      case "OBJECT_LITERAL":
        return this.visitObjectLiteral(node);
      case "PROPERTY_ACCESS":
        return this.visitPropertyAccess(node);
      case "INTEGER":
      case "FLOAT":
      case "STRING":
      case "BOOLEAN":
      case "NULL":
        return node.value;
      case "IDENTIFIER":
        return this.visitIdentifier(node);
      case "PLUS":
      case "MINUS":
      case "MULTIPLY":
      case "DIVIDE":
      case "MODULO":
      case "EQUAL_EQUAL":
      case "NOT_EQUAL":
      case "GREATER":
      case "LESS":
      case "GREATER_EQUAL":
      case "LESS_EQUAL":
      case "AND":
      case "OR":
      case "NOT":
        return this.visitBinaryOperator(node);
      default:
        this.error(`Unknown node type: ${node.type}`);
    }
  }

  visitProgram(node: ASTNode) {
    let result = null;

    for (const child of node.children) {
      result = this.visit(child!);
    }

    return result;
  }

  visitExpressionStatement(node: ASTNode) {
    return this.visit(node.children[0]!);
  }

  visitAssignment(node: ASTNode) {
    const target = node.children[0];
    const value = this.visit(node.children[1]!);

    if (target?.type === "IDENTIFIER") {
      this.currentEnvironment[target?.value] = value;
    } else if (target?.type === "PROPERTY_ACCESS") {
      const object = this.visit(target?.children[0]!);
      const propertyName = target?.children[1]?.value;

      if (typeof object !== "object" || object === null) {
        this.error("Cannot set property on a non-object");
      }

      object[propertyName] = value;
    }

    return value;
  }

  visitIfStatement(node: ASTNode) {
    const condition = this.visit(node.children[0]!);

    if (condition) {
      return this.visit(node.children[1]!);
    } else if (node.children[2]) {
      return this.visit(node.children[2]);
    }

    return null;
  }

  visitWhileStatement(node: ASTNode) {
    let result = null;

    while (this.visit(node.children[0]!)) {
      result = this.visit(node.children[1]!);
    }

    return result;
  }
  visitForStatement(node: ASTNode) {
    const init = node.children[0];
    const condition = node.children[1];
    const update = node.children[2];
    const body = node.children[3];

    this.visit(init!);

    while (this.visit(condition!)) {
      this.visit(body!);
      this.visit(update!);
    }

    return null;
  }

  visitBlockStatement(node: ASTNode) {
    const previousEnvironment = this.currentEnvironment;

    this.currentEnvironment = Object.create(this.currentEnvironment);

    let result = null;

    for (const child of node.children) {
      result = this.visit(child!);

      if (child?.type === "RETURN_STATEMENT") {
        break;
      }
    }

    this.currentEnvironment = previousEnvironment;

    return result;
  }

  visitFunctionDeclaration(node: ASTNode) {
    const functionName = node.children[0]?.value;
    const parameters = node.children[1]?.children.map((param) => param?.value);
    const body = node.children[2];

    this.globalEnvironment[functionName] = {
      parameters: parameters,
      body: body,
    };

    return null;
  }

  visitFunctionCall(node: ASTNode) {
    const functionName = node.children[0]?.value;
    const args = node.children[1]?.children.map((arg) => this.visit(arg!));
    const functionDefinition: NativeFunction =
      this.globalEnvironment[functionName];

    if (!functionDefinition) {
      this.error(`Undefined function: ${functionName}`);
    }

    const functionParams = functionDefinition.parameters || [];

    const functionBody = functionDefinition.body;

    if ((args?.length || 0) < functionParams.length) {
      this.error(
        `Not enough arguments for function ${functionName}: expected ${
          functionParams.length
        }, got ${args?.length || 0}`
      );
    }

    const previousEnvironment = this.currentEnvironment;

    this.currentEnvironment = Object.create(this.globalEnvironment);

    for (let i = 0; i < functionParams.length; i++) {
      this.currentEnvironment[functionParams[i]] = args![i];
    }

    let result: ASTNode;

    if (functionDefinition.native) {
      const nativeArgs = functionParams.map(
        (param) => this.currentEnvironment[param]
      );

      result = (functionDefinition.body as any)(...nativeArgs);
    } else {
      result = this.visit(functionBody as ASTNode);
    }

    this.currentEnvironment = previousEnvironment;

    return result;
  }

  visitReturnStatement(node: ASTNode) {
    return this.visit(node.children[0]!);
  }

  visitArrayLiteral(node: ASTNode) {
    return node.children.map((child) => this.visit(child!));
  }

  visitArrayAccess(node: ASTNode) {
    const identifier = node.children[0]?.value;
    const index = this.visit(node.children[1]!);

    const value = this.currentEnvironment[identifier];

    if (typeof value === "string") {
      if (typeof index !== "number") {
        this.error("String index must be a number");
      }

      if (index < 0 || index >= value.length) {
        this.error("String index out of bounds");
      }

      return value[index];
    } else if (Array.isArray(value)) {
      if (typeof index !== "number") {
        this.error("Array index must be a number");
      }

      if (index < 0 || index >= value.length) {
        this.error("Array index out of bounds");
      }

      return value[index];
    } else {
      this.error(`${identifier} is not an array or a string`);
    }
  }

  visitObjectLiteral(node: ASTNode) {
    const obj: Record<string, ASTNode> = {};

    for (const property of node.children) {
      obj[property!.key] = this.visit(property!.value);
    }

    return obj;
  }

  visitPropertyAccess(node: ASTNode) {
    const object = this.visit(node.children[0]!);
    const propertyName = node.children[1]?.value;
    if (typeof object !== "object" || object === null) {
      this.error("Cannot access property on a non-object");
    }
    return object[propertyName];
  }

  visitIdentifier(node: ASTNode) {
    const identifier = node.value;

    let env = this.currentEnvironment;

    while (env) {
      if (Object.hasOwn(env, identifier)) {
        return env[identifier];
      }

      env = Object.getPrototypeOf(env);
    }

    this.error(`Undefined variable: ${identifier}`);
  }

  visitBinaryOperator(node: ASTNode) {
    const left = this.visit(node.children[0]!);
    const right = this.visit(node.children[1]!);

    switch (node.type) {
      case "PLUS":
        return left + right;
      case "MINUS":
        return left - right;
      case "MULTIPLY":
        return left * right;
      case "DIVIDE":
        if (right === 0) {
          this.error("Division by zero");
        }
        return left / right;
      case "MODULO":
        return left % right;
      case "EQUAL_EQUAL":
        return left === right;
      case "NOT_EQUAL":
        return left !== right;
      case "GREATER":
        return left > right;
      case "LESS":
        return left < right;
      case "GREATER_EQUAL":
        return left >= right;
      case "LESS_EQUAL":
        return left <= right;
      case "AND":
        return left && right;
      case "OR":
        return left || right;
      case "NOT":
        return !this.visit(node.children[0]!);
      default:
        this.error(`Unknown operator: ${node.type}`);
    }
  }

  error(message: string): void {
    throw new LangError(message, null, null);
  }

  async run(code: string): Promise<any> {
    const lexer = new Lexer(code);
    const parser = new Parser(lexer);
    const ast = parser.parse();

    return await this.interpret(ast);
  }
}
