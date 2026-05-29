/**
 * ArcOS Scripting Engine
 *
 * Created by Allucat1000 for the ArcOS Project. This engine allows users to write and execute scripts
 * in ArcOS, with a focus on Terminal functionality. It is subject to expansion in the future.
 *
 * ArcScript is licensed under GPLv3. All rights belong to their respective authors.
 *
 * Copyright © 2026 ArcOS Project
 */
import {
  type ArcScriptAstNode,
  ArcScriptAstNodeType,
  type ArcScriptExpressionReference,
  type ArcScriptFunction,
  type ArcScriptLexerToken,
  ArcScriptLexerTokenType,
  type ArcScriptOptions,
  type ArcScriptPosition,
  type ArcScriptVariable,
  ArcScriptVariableType,
  type ExpressionData,
  type IArcScriptEngine,
} from "$interfaces/IArcScriptEngine";
import type { ICommandResult } from "$interfaces/ICommandResult";
import { Daemon, Fs, Stack } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { CommandResult } from "$ts/result";
import { arrayBufferToText } from "$ts/util/convert";
import { ArcScriptAst } from "./ast";
import { ArcScriptLexer } from "./lexer";

export class ArcScriptEngine extends Process implements IArcScriptEngine {
  errored = false;
  errorMessage: string | null = null;

  options: ArcScriptOptions;
  temp: string = "";
  startPos: number = 0;
  line: number = 1;
  blockStartPos: number = 0;
  lineStartPos: number = 0;
  type!: ArcScriptLexerTokenType;
  tokenOut: ArcScriptLexerToken[] = [];
  i: number = 0;

  variables: Record<string, ArcScriptVariable> = {};
  functions: Record<string, ArcScriptFunction> = {};
  derivedVars: Record<string, ArcScriptExpressionReference[]> = {};
  friendVars: string[] = [];

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, options: ArcScriptOptions) {
    super(pid, parentPid);

    this.options = options;
    this.setSource(__SOURCE__);
  }

  static async Create(parentPid: number, options: ArcScriptOptions) {
    return await Stack.spawn(this, undefined, Daemon?.userInfo?._id ?? "SYSTEM", parentPid, options);
  }

  static async ExecuteFile(path: string, parentPid: number, options: ArcScriptOptions): Promise<ICommandResult> {
    const process = await this.Create(parentPid, options);
    if (!process) return CommandResult.Error("Engine process didn't come up.");

    const fileContents = await Fs.readFile(path);
    if (!fileContents) return CommandResult.Error("Failed to read file contents.");

    return process.execute(arrayBufferToText(fileContents)!);
  }

  //#endregion

  execute(src: string): ICommandResult {
    try {
      if (this._disposed) return CommandResult.Error(`Engine is disposed`);

      const tokens = ArcScriptLexer.Lex(this, src);
      if (this.errored) return CommandResult.Error(`A syntax error occurred. Check the file.`);

      const ast = ArcScriptAst.GetAst(this, tokens);
      if (this.errored) return CommandResult.Error(`A syntax error occurred. Check the file.`);

      this.interpret(ast);

      return CommandResult.Ok();
    } catch (e: any) {
      return CommandResult.Error(e?.message ?? `${e}`);
    }
  }

  interpret(ast: ArcScriptAstNode[]) {
    if (this._disposed) return;

    this.variables = {};
    this.functions = {};
    this.derivedVars = {};
    this.friendVars = [];

    for (const line of ast) {
      this.interpretLine(line);

      if (this.errored) return;
    }
  }

  private nodeTypeToVarType(node: ArcScriptAstNode): ArcScriptVariableType {
    if (this._disposed) return ArcScriptVariableType.string;

    if (node.type === ArcScriptAstNodeType.BOOL) return ArcScriptVariableType.boolean;
    if (node.type === ArcScriptAstNodeType.NUM) return ArcScriptVariableType.number;
    return ArcScriptVariableType.string;
  }

  private getExpressionValue(input: ArcScriptAstNode[]): ExpressionData {
    const expression = structuredClone(input);
    const data: ExpressionData = {
      type: ArcScriptVariableType.string,
      value: null,
    };

    if (this._disposed) return data;

    for (let i = 0; i < expression.length; i++) {
      const t = expression[i];

      if (t.type === ArcScriptAstNodeType.OP) {
        const lefthand = expression[i - 2];
        const righthand = expression[i - 1];
        const lefthandValue = this.interpretLine(lefthand)!;
        const righthandValue = this.interpretLine(righthand)!;

        if (this.errored) return data;

        let res: any;

        switch (t.data.value) {
          case "+":
            res = lefthandValue.value + righthandValue.value;
            break;
          case "-":
            res = lefthandValue.value - righthandValue.value;
            break;
          case "*":
            res = lefthandValue.value * righthandValue.value;
            break;
          case "/":
            res = lefthandValue.value / righthandValue.value;
            break;
        }

        data.type = this.nodeTypeToVarType(lefthand);
        expression.splice(i - 2, 3, { type: lefthand.type, data: { value: res }, position: lefthand.position });

        i -= 2;
      }
    }

    data.value = expression[0].data.value;

    return data;
  }

  private getStringVariables(input: string, position: ArcScriptPosition): string {
    if (this._disposed) return "";

    let inVariable: boolean = false;
    let variableName: string = "";
    let output: string = "";

    for (let i = 0; i < input.length; i++) {
      const character = input[i];

      if (character === "%") {
        if (inVariable) {
          const val: ArcScriptVariable | undefined = this.variables[variableName];

          if (!val) {
            this.positionalError("unknown variable '" + variableName + "'", {
              start: position.start,
              end: {
                line: position.end.line,
                column: position.start.column + i,
              },
            });
          } else {
            output += val.value;
          }

          variableName = "";
          inVariable = false;
        } else {
          inVariable = true;
        }
      } else {
        if (inVariable) {
          variableName += character;
        } else {
          output += character;
        }
      }
    }

    return output;
  }

  private getValue(node: ArcScriptAstNode): string {
    if (this._disposed) return "";

    switch (node.type) {
      case ArcScriptAstNodeType.IDENT:
        return this.variables[node.data.value].value;
      case ArcScriptAstNodeType.BOOL:
      case ArcScriptAstNodeType.NUM:
        return String(node.data.value);
      case ArcScriptAstNodeType.STRING:
        return this.getStringVariables(node.data.value, node.position[0]);
    }

    return "";
  }

  private findReferences(line: ArcScriptAstNode): string[] {
    if (this._disposed) return [];

    const references: string[] = [];

    switch (line.type) {
      case ArcScriptAstNodeType.IDENT:
        const name = line.data.value;
        const value = this.variables[name];

        if (value) {
          references.push(name);
        }

        break;

      case ArcScriptAstNodeType.EXPR:
        for (const node of line.data.value as ArcScriptAstNode[]) {
          const reference = this.findReferences(node);

          if (reference.length > 0) {
            references.push(...reference);
          }
        }
    }

    return [...new Set(references)];
  }

  private recalculateFriends(varName: string) {
    if (this._disposed) return;

    const friends = this.derivedVars[varName];
    if (!friends) return;

    for (const friend of friends) {
      const v = this.interpretLine(friend.expression);
      if (v) {
        this.variables[friend.name] = {
          type: v.type,
          value: v.value,
        };
      }
    }
  }

  private interpretLine(line: ArcScriptAstNode): ExpressionData | undefined {
    if (!line || this._disposed) return;

    switch (line.type) {
      case ArcScriptAstNodeType.DECL:
      case ArcScriptAstNodeType.ASSIGN: {
        if (this.friendVars.includes(line.data.value)) {
          this.positionalError("cannot reassign friend variable", line.position[1]);
          return;
        }

        const value = this.interpretLine(line.data.value);

        if (value) {
          this.variables[line.data.name] = {
            type: value.type,
            value: value.value,
          };
          this.recalculateFriends(line.data.name);
        }

        break;
      }

      case ArcScriptAstNodeType.FRIEND: {
        const refs = this.findReferences(line.data.value);

        for (const ref of refs) {
          if (!this.derivedVars[ref]) this.derivedVars[ref] = [];

          this.derivedVars[ref].push({
            name: line.data.name,
            expression: line.data.value,
          });
        }

        const value = this.interpretLine(line.data.value);

        if (value) {
          this.friendVars.push(line.data.name);
          this.variables[line.data.name] = {
            type: value.type,
            value: value.value,
          };
        }

        break;
      }

      case ArcScriptAstNodeType.COMMAND: {
        const args: string[] = [];

        for (const parameter of line.data.parameters) {
          args.push(this.getValue(parameter));
        }

        this.options.execCommand?.(line.data.command, args);
        break;
      }

      case ArcScriptAstNodeType.EXPR:
        return this.getExpressionValue(line.data.value);

      case ArcScriptAstNodeType.IDENT: {
        const name = line.data.value;
        const value = this.variables[name];

        if (value) {
          return {
            type: value.type,
            value: value.value,
          };
        }

        this.positionalError("unrecognized identifier '" + name + "'", line.position[0]);
        break;
      }

      case ArcScriptAstNodeType.FUNC:
        this.functions[line.data.name] = {
          args: line.data.arguments,
          body: line.data.body,
        };
        return;

      case ArcScriptAstNodeType.CALL: {
        const functionDefinition = this.functions[line.data.name];

        if (!functionDefinition) {
          this.positionalError("unrecognized function '" + line.data.name + "'", line.position[0]);
          return;
        }

        const savedScope = structuredClone(this.variables);

        for (let i = 0; i < functionDefinition.args.length; i++) {
          const arg = functionDefinition.args[i].data.value;
          const argumentValue = line.data.arguments[i];

          if (!argumentValue) {
            this.positionalError("expected argument '" + arg + "'", functionDefinition.args[i].position[0]);
            return;
          }

          const data = this.interpretLine(argumentValue);
          this.variables[arg] = data!.value;
        }

        this.interpret(functionDefinition.body);
        this.variables = savedScope;
        break;
      }

      case ArcScriptAstNodeType.OP:
        break;

      case ArcScriptAstNodeType.NUM:
        return {
          type: ArcScriptVariableType.number,
          value: Number(line.data.value),
        };

      case ArcScriptAstNodeType.STRING:
        return {
          type: ArcScriptVariableType.string,
          value: line.data.value,
        };

      case ArcScriptAstNodeType.BOOL:
        return {
          type: ArcScriptVariableType.number,
          value: line.data.value === "true",
        };
    }
  }

  error(message: string): ArcScriptLexerToken[] {
    if (this._disposed) return [];

    this.errored = true;
    this.errorMessage = message;
    this.killSelf();

    throw new Error(`ArcScript - ${message} at ${this.line}:${this.i - this.lineStartPos}`);
  }

  positionalError(message: string, pos: ArcScriptPosition) {
    if (this._disposed) return;

    this.errored = true;
    this.errorMessage = message;
    this.killSelf();

    throw new Error(`ArcScript - ${message} at ${pos.end.line}:${pos.end.column}`);
  }
}
