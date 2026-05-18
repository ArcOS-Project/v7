import type { IProcess } from "./process";
export const enum ArcScriptLexerTokenType {
  IDENT = "ident",
  STRING = "string",
  NUM = "number",
  OP = "operator",
  CHAR = "character",
  NEWLINE = "newline",
  UNKNOWN = "unknown",
  KEYWORD = "keyword"
}

export const enum ArcScriptAstNodeType {
  DECL = "declarement",
  ASSIGN = "assignment",
  UNKNOWN = "unknown",
  COMMAND = "command",
  EXPR = "expression",
  IDENT = "identifier",
  EMPTY = "empty",
  OP = "operator",
  NUM = "number",
  STRING = "string",
  BOOL = "boolean",
  FUNC = "function",
  CALL = "call",
}

export const enum ArcScriptVariableType {
  string = "string",
  number = "number",
  boolean = "boolean"
}

export interface ArcScriptPosition {
  start: {
    column: number;
    line: number;
  }
  end: {
    column: number;
    line: number;
  }
}

export interface ArcScriptLexerToken {
  position: ArcScriptPosition;

  type: ArcScriptLexerTokenType;
  value: string;
}

export interface ArcScriptAstNode {
  type: ArcScriptAstNodeType;
  data: Record<string, any>;

  position: ArcScriptPosition[];
}

export interface ArcScriptVariable {
  type: ArcScriptVariableType;
  value: any;
}

export interface ArcScriptFunction {
  args: ArcScriptAstNode[];
  body: ArcScriptAstNode[];
}

export interface IArcScriptEngine extends IProcess {
  errored: boolean;
  errorMessage: string | null;

  execute(source: string): void;
  interpret(source: ArcScriptAstNode[]): void;
  ast(tokens: ArcScriptLexerToken[]): ArcScriptAstNode[];
  tokenize(source: string): ArcScriptLexerToken[];
}