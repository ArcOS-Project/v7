import { applyDefaults } from "$ts/hierarchy";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type {
  ArcLangOptions,
  LangErrorCallback,
  LangExitCallback,
  LangStdinCallback,
  LangStdoutCallback,
} from "$types/lang";
import type { ASTNode } from "./ast";
import { LangError } from "./error";
import { Lexer } from "./lexer";
import { Parser } from "./parser";
import { DefaultArcLangOptions } from "./store";

export class Interpreter extends Process {
  ast: ASTNode | undefined;
  globalEnvironment: Record<string, any>;
  currentEnvironment: Record<string, any>;
  callStack: Record<string, any>[] = [];
  onError: LangErrorCallback;
  stdout: LangStdoutCallback;
  stdin: LangStdinCallback;
  onExit: LangExitCallback;
  allowUnsafe: boolean = false;
  arguments: any[] = [];
  workingDir: string = "U:/";

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    options?: ArcLangOptions
  ) {
    options ||= DefaultArcLangOptions;

    super(handler, pid, parentPid);

    const opt = applyDefaults<ArcLangOptions>(
      options || {},
      DefaultArcLangOptions
    );

    this.onError = opt.onError!;
    this.stdout = opt.stdout!;
    this.stdin = opt.stdin!;
    this.onExit = opt.onExit!;
    if (opt.allowUnsafe) this.allowUnsafe = opt.allowUnsafe;
    if (opt.arguments) this.arguments = opt.arguments;
    if (opt.workingDir) this.workingDir = opt.workingDir;
    if (opt.ast) this.ast = opt.ast;

    this.globalEnvironment = opt.globalEnvironment
      ? opt.globalEnvironment(this)
      : {
          print: {
            parameters: ["message"],
            body: (...args: any[]) => {
              this.stdout(...args);

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
          stack: {
            parameters: [],
            body: () => {
              return this.callStack;
            },
            native: true,
          },
          fs: {
            readDir: {
              parameters: ["path"],
              body: async (path: string) => {
                return await this.fs.readDir(path);
              },
              native: true,
            },
          },
          len: {
            parameters: ["x"],
            body: (x: any) => (x ?? "").length || 0,
            native: true,
          },
        };

    this.currentEnvironment = this.globalEnvironment;
  }

  protected async stop(): Promise<any> {
    this.onExit(this);
  }

  async interpret(ast: ASTNode | undefined = this.ast) {
    if (!ast) return;

    return await this.visit(ast);
  }

  async visit(node: ASTNode): Promise<any> {
    switch (node.type) {
      case "PROGRAM":
        return await this.visitProgram(node);
      case "ASSIGNMENT":
        return await this.visitAssignment(node);
      case "EXPRESSION_STATEMENT":
        return await this.visitExpressionStatement(node);
      case "IF_STATEMENT":
        return await this.visitIfStatement(node);
      case "WHILE_STATEMENT":
        return await this.visitWhileStatement(node);
      case "FOR_STATEMENT":
        return await this.visitForStatement(node);
      case "BLOCK_STATEMENT":
        return await this.visitBlockStatement(node);
      case "FUNCTION_DECLARATION":
        return await this.visitFunctionDeclaration(node);
      case "FUNCTION_CALL":
        return await this.visitFunctionCall(node);
      case "RETURN_STATEMENT":
        return await this.visitReturnStatement(node);
      case "ARRAY_LITERAL":
        return await this.visitArrayLiteral(node);
      case "ARRAY_ACCESS":
        return await this.visitArrayAccess(node);
      case "OBJECT_LITERAL":
        return await this.visitObjectLiteral(node);
      case "PROPERTY_ACCESS":
        return await this.visitPropertyAccess(node);
      case "INTEGER":
      case "FLOAT":
      case "STRING":
      case "BOOLEAN":
      case "NULL":
        return node.value;
      case "IDENTIFIER":
        return await this.visitIdentifier(node);
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
        return await this.visitBinaryOperator(node);
      default:
        this.error(`Unknown node type: ${node.type}`);
    }
  }

  async visitProgram(node: ASTNode) {
    let result = null;

    for (const child of node.children) {
      result = await this.visit(child!);
    }

    return result;
  }

  async visitExpressionStatement(node: ASTNode) {
    return await this.visit(node.children[0]!);
  }

  async visitAssignment(node: ASTNode) {
    const target = node.children[0];
    const value = await this.visit(node.children[1]!);

    if (target?.type === "IDENTIFIER") {
      this.currentEnvironment[target?.value] = value;
    } else if (target?.type === "PROPERTY_ACCESS") {
      const object = await this.visit(target?.children[0]!);
      const propertyName = target?.children[1]?.value;

      if (typeof object !== "object" || object === null) {
        this.error("Cannot set property on a non-object");
      }

      object[propertyName] = value;
    }

    return value;
  }

  async visitIfStatement(node: ASTNode) {
    const condition = await this.visit(node.children[0]!);

    if (condition) {
      return this.visit(node.children[1]!);
    } else if (node.children[2]) {
      return this.visit(node.children[2]);
    }

    return null;
  }

  async visitWhileStatement(node: ASTNode) {
    let result = null;

    while (await this.visit(node.children[0]!)) {
      result = await this.visit(node.children[1]!);
    }

    return result;
  }
  async visitForStatement(node: ASTNode) {
    const init = node.children[0];
    const condition = node.children[1];
    const update = node.children[2];
    const body = node.children[3];

    await this.visit(init!);

    while (await this.visit(condition!)) {
      await this.visit(body!);
      await this.visit(update!);
    }

    return null;
  }

  async visitBlockStatement(node: ASTNode) {
    const previousEnvironment = this.currentEnvironment;

    this.currentEnvironment = Object.create(this.currentEnvironment);

    let result = null;

    for (const child of node.children) {
      result = await this.visit(child!);

      if (child?.type === "RETURN_STATEMENT") {
        break;
      }
    }

    this.currentEnvironment = previousEnvironment;

    return result;
  }

  async visitFunctionDeclaration(node: ASTNode) {
    const functionName = node.children[0]?.value;
    const parameters = node.children[1]?.children.map((param) => param?.value);
    const body = node.children[2];

    return (this.globalEnvironment[functionName] = {
      parameters: parameters,
      body: body,
    });
  }

  async visitFunctionCall(node: ASTNode) {
    const functionIdentifier = node.children[0];
    const args = await Promise.all(
      node.children[1]?.children.map(async (arg) => await this.visit(arg!)) ||
        []
    );

    let functionName;
    let thisContext = this.globalEnvironment; // Default context
    let functionDefinition;

    if (functionIdentifier?.type === "IDENTIFIER") {
      functionName = functionIdentifier.value;
      functionDefinition =
        this.currentEnvironment[functionName] ||
        this.globalEnvironment[functionName];
    } else if (functionIdentifier?.type === "PROPERTY_ACCESS") {
      // Method call
      thisContext = await this.visit(functionIdentifier.children[0]!); // Object
      functionName = functionIdentifier.children[1]?.value; // Method name
      functionDefinition = thisContext[functionName]; // Look up function in object
      if (!functionDefinition) {
        this.error(`Undefined method: ${functionName} on object`);
      }
    } else {
      this.error("Invalid function identifier");
    }

    if (!functionDefinition) {
      this.error(`Undefined function: ${functionName}`);
    }

    const functionParams: string[] = functionDefinition.parameters;
    const functionBody = functionDefinition.body;

    if ((args?.length || 0) < functionParams.length) {
      this.error(
        `Not enough arguments for function ${functionName}: expected ${
          functionParams.length
        }, got ${args?.length || 0}`
      );
    }

    const previousEnvironment = this.currentEnvironment;
    this.currentEnvironment = Object.create(thisContext); // New scope, inheriting from the object's context

    // Bind arguments to parameters in the new scope
    for (let i = 0; i < functionParams.length; i++) {
      this.currentEnvironment[functionParams[i]] = args![i];
    }

    // Push a new frame onto the call stack
    this.callStack.push({
      functionName: functionName,
      functionParams,

      // You can add more information here, like line number, arguments, etc.
    });

    let result;
    try {
      if (functionDefinition.native) {
        // Call the native JavaScript function
        const nativeArgs = functionParams.map(
          (param, index) => this.currentEnvironment[param]
        );
        result = await functionDefinition.body.call(thisContext, ...nativeArgs); // Set 'this' context
      } else {
        result = await this.visit(functionBody);
      }
    } finally {
    }

    // Restore the previous scope
    this.currentEnvironment = previousEnvironment;

    return result;
  }

  async visitReturnStatement(node: ASTNode) {
    return await this.visit(node.children[0]!);
  }

  async visitArrayLiteral(node: ASTNode) {
    return node.children.map((child) => this.visit(child!));
  }

  async visitArrayAccess(node: ASTNode) {
    const target = node.children[0];
    let identifier: string;
    let value: any;

    if (target?.type === "IDENTIFIER") {
      identifier = target?.value;
      value = this.currentEnvironment[identifier];
    } else if (target?.type === "PROPERTY_ACCESS") {
      const object = await this.visit(target?.children[0]!);
      const propertyName = target?.children[1]?.value;

      if (typeof object !== "object" || object === null) {
        this.error("Cannot set property on a non-object");
      }

      identifier = propertyName;
      value = object[propertyName];
    }

    const index = await this.visit(node.children[1]!);

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
      this.error(`${identifier!} is not an array or a string`);
    }
  }

  async visitObjectLiteral(node: ASTNode) {
    const obj: Record<string, ASTNode> = {};

    for (const property of node.children) {
      obj[property!.key] = await this.visit(property!.value);
    }

    return obj;
  }

  async visitPropertyAccess(node: ASTNode) {
    const object = await this.visit(node.children[0]!);
    const propertyName = node.children[1]?.value;
    if (typeof object !== "object" || object === null) {
      this.error("Cannot access property on a non-object");
    }
    return object[propertyName];
  }

  async visitIdentifier(node: ASTNode) {
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

  async visitBinaryOperator(node: ASTNode) {
    const left = await this.visit(node.children[0]!);
    const right = await this.visit(node.children[1]!);

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
        return !(await this.visit(node.children[0]!));
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
