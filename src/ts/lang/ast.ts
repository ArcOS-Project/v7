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
  type ArcScriptLexerToken,
  ArcScriptLexerTokenType,
  type IArcScriptEngine,
} from "$interfaces/IArcScriptEngine";
import { AssignOps } from "./store";
import { getPrecedence } from "./util";

export class ArcScriptAst {
  private engine: IArcScriptEngine;
  private tokens: ArcScriptLexerToken[];

  constructor(engine: IArcScriptEngine, tokens: ArcScriptLexerToken[]) {
    this.engine = engine;
    this.tokens = tokens;
  }

  static GetAst(engine: IArcScriptEngine, tokens: ArcScriptLexerToken[]): ArcScriptAstNode[] {
    return new this(engine, tokens).ast();
  }

  ast(): ArcScriptAstNode[] {
    if (this.engine._disposed) return [];

    const astOut: ArcScriptAstNode[] = [];
    const lines: ArcScriptLexerToken[][] = [];
    const temp: ArcScriptLexerToken[] = [];

    let functionDepth: number = 0;

    for (const token of this.tokens) {
      if (token.type !== ArcScriptLexerTokenType.NEWLINE || functionDepth > 0) {
        temp.push(token);

        if (token.type === ArcScriptLexerTokenType.KEYWORD && token.value === "fn") functionDepth++;
        if (token.type === ArcScriptLexerTokenType.IDENT && token.value === "}" && functionDepth > 0) {
          functionDepth--;

          if (functionDepth === 0) {
            lines.push(structuredClone(temp));
            temp.length = 0;
          }
        }
      } else {
        lines.push(structuredClone(temp));
        temp.length = 0;
      }
    }

    if (temp.length > 0) {
      lines.push(structuredClone(temp));
    }

    for (const line of lines) {
      const node = this.parseTokenLine(line);
      if (node.type !== ArcScriptAstNodeType.EMPTY && node.type !== ArcScriptAstNodeType.UNKNOWN) astOut.push(node);
    }

    return astOut;
  }

  private parseTokenLine(line: ArcScriptLexerToken[]): ArcScriptAstNode {
    const output: ArcScriptAstNode = {
      type: ArcScriptAstNodeType.UNKNOWN,
      data: {},
      position: line.map((v) => v.position),
    };

    if (this.engine._disposed) return output;

    if (line.length === 0) {
      output.type = ArcScriptAstNodeType.EMPTY;
      return output;
    }

    if (line[0].type === ArcScriptLexerTokenType.KEYWORD && line[0].value === "var") {
      if (line.length === 1) {
        this.engine.positionalError("expected variable name", line[0].position);
        return output;
      } else if (line.length === 2) {
        this.engine.positionalError("expected operator", line[1].position);
        return output;
      } else if (line.length === 3) {
        this.engine.positionalError("expected value", line[2].position);
        return output;
      }

      output.type = ArcScriptAstNodeType.DECL;
      output.data.name = line[1].value;
      output.data.op = line[2].value;
      output.data.value = this.parseTokenLine(line.slice(3));

      return output;
    }

    if (line[0].type === ArcScriptLexerTokenType.KEYWORD && line[0].value === "friend") {
      if (line.length === 1) {
        this.engine.positionalError("expected variable name", line[0].position);
        return output;
      } else if (line.length === 2) {
        this.engine.positionalError("expected operator", line[1].position);
        return output;
      } else if (line.length === 3) {
        this.engine.positionalError("expected value", line[2].position);
        return output;
      }

      output.type = ArcScriptAstNodeType.FRIEND;
      output.data.name = line[1].value;
      output.data.op = line[2].value;
      output.data.value = this.parseTokenLine(line.slice(3));

      return output;
    }

    if (
      line.length > 1 &&
      line[0].type === ArcScriptLexerTokenType.KEYWORD &&
      line[0].value === "fn" &&
      line[1].type === ArcScriptLexerTokenType.IDENT
    ) {
      if (line.length === 2) {
        this.engine.positionalError("expected function parameters", line[1].position);
        return output;
      }

      let idx = 3;
      let depth = 1;

      const functionArguments: ArcScriptLexerToken[][] = [];
      const temp: ArcScriptLexerToken[] = [];

      while (idx < line.length && depth > 0) {
        const argument = line[idx];

        if (argument.type === ArcScriptLexerTokenType.OP) {
          if (argument.value === "(") depth++;
          if (argument.value === ")") depth--;
          if (argument.value === ",") {
            functionArguments.push(structuredClone(temp));
            temp.length = 0;
            idx++;

            continue;
          }
        }

        temp.push(argument);
        idx++;
      }
      if (temp.length > 0) {
        functionArguments.push(structuredClone(temp));
      }

      if (line.length === idx) {
        this.engine.positionalError("expected function body", line[idx].position);
        return output;
      }

      const body = ArcScriptAst.GetAst(this.engine, line.slice(idx + 1, -2));
      const argNodes: ArcScriptAstNode[] = [];

      output.type = ArcScriptAstNodeType.FUNC;
      output.data.name = line[1].value;

      for (const argument of functionArguments) {
        const node = this.parseTokenLine(argument);
        if (node.type !== ArcScriptAstNodeType.EMPTY && node.type !== ArcScriptAstNodeType.UNKNOWN) argNodes.push(node);
      }

      output.data.arguments = argNodes;
      output.data.body = body;

      return output;
    }

    if (
      line.length > 1 &&
      line[0].type === ArcScriptLexerTokenType.IDENT &&
      line[1].type === ArcScriptLexerTokenType.OP &&
      line[1].value === "("
    ) {
      let idx = 2;
      let depth = 1;
      const args: ArcScriptLexerToken[][] = [];
      const temp: ArcScriptLexerToken[] = [];

      while (idx < line.length && depth > 0) {
        const argument = line[idx];

        if (argument.type === ArcScriptLexerTokenType.OP) {
          if (argument.value === "(") depth++;
          if (argument.value === ")") depth--;
          if (argument.value === ",") {
            args.push(structuredClone(temp));
            temp.length = 0;
            idx++;
            continue;
          }
        }

        temp.push(argument);
        idx++;
      }

      if (temp.length > 0) {
        args.push(structuredClone(temp));
      }

      output.type = ArcScriptAstNodeType.CALL;
      output.data.name = line[0].value;

      const argumentNodes: ArcScriptAstNode[] = [];

      for (const arg of args) {
        const node = this.parseTokenLine(arg);
        if (node.type !== ArcScriptAstNodeType.EMPTY && node.type !== ArcScriptAstNodeType.UNKNOWN) argumentNodes.push(node);
      }

      output.data.arguments = argumentNodes;
      return output;
    }

    if (line.length > 1 && line[1].type === ArcScriptLexerTokenType.OP) {
      // i think this is a good enough way of detecting an expression; at least for now
      if (AssignOps.includes(line[1].value)) {
        output.type = ArcScriptAstNodeType.ASSIGN;
        output.data.name = line[0].value;
        output.data.op = line[1].value;
        output.data.value = this.parseTokenLine(line.slice(2));

        return output;
      } else {
        output.type = ArcScriptAstNodeType.EXPR;

        const value: ArcScriptAstNode[] = [];
        for (const token of line) {
          value.push(this.parseTokenLine([token]));
        }

        output.data.value = this.postfixExpr(value);
        return output;
      }
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.IDENT) {
      output.type = ArcScriptAstNodeType.IDENT;
      output.data.value = line[0].value;
      return output;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.NUM) {
      output.type = ArcScriptAstNodeType.NUM;
      output.data.value = line[0].value;
      return output;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.OP) {
      output.type = ArcScriptAstNodeType.OP;
      output.data.value = line[0].value;
      return output;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.STRING) {
      output.type = ArcScriptAstNodeType.STRING;
      output.data.value = line[0].value;
      return output;
    }

    output.type = ArcScriptAstNodeType.COMMAND;
    output.data.command = line[0].value;

    const parameters: ArcScriptAstNode[] = [];
    for (const node of line.slice(1)) {
      parameters.push(this.parseTokenLine([node]));
    }

    output.data.parameters = parameters;
    return output;
  }

  private postfixExpr(expr: ArcScriptAstNode[]): ArcScriptAstNode[] {
    if (this.engine._disposed) return [];

    const output: ArcScriptAstNode[] = [];
    const operators: ArcScriptAstNode[] = [];

    for (const node of expr) {
      if (node.type !== ArcScriptAstNodeType.OP) {
        output.push(node);
        continue;
      }

      while (operators.length > 0) {
        const top = operators[operators.length - 1];

        if (top.type !== ArcScriptAstNodeType.OP) break;

        const p1 = getPrecedence(top.data.value);
        const p2 = getPrecedence(node.data.value);

        if (p1 >= p2) {
          output.push(operators.pop()!);
        } else {
          break;
        }
      }

      operators.push(node);
    }

    while (operators.length > 0) {
      output.push(operators.pop()!);
    }

    return output;
  }
}
