import type { IProcess } from "./IProcess";

// !tpa

export interface IArcScriptEngine extends IProcess {
  errored: boolean;
  errorMessage: string | null;

  options: ArcScriptOptions;
  temp: string;
  startPos: number;
  line: number;
  blockStartPos: number;
  lineStartPos: number;
  type: ArcScriptLexerTokenType;
  tokenOut: ArcScriptLexerToken[];
  i: number;
  variables: Record<string, ArcScriptVariable>;
  functions: Record<string, ArcScriptFunction>;
  derivedVars: Record<string, ArcScriptExpressionReference[]>;
  friendVars: string[];

  execute(source: string): void;
  interpret(source: ArcScriptAstNode[]): void;
  error(message: string): ArcScriptLexerToken[];
  positionalError(message: string, pos: ArcScriptPosition): void;
}

export const enum ArcScriptLexerTokenType {
  IDENT = "ident",
  STRING = "string",
  NUM = "number",
  OP = "operator",
  CHAR = "character",
  NEWLINE = "newline",
  UNKNOWN = "unknown",
  KEYWORD = "keyword",
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
  FRIEND = "friend",
}

export const enum ArcScriptVariableType {
  string = "string",
  number = "number",
  boolean = "boolean",
}

export interface ArcScriptPosition {
  start: {
    column: number;
    line: number;
  };
  end: {
    column: number;
    line: number;
  };
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

export interface ExpressionData {
  value: any;
  type: ArcScriptVariableType;
}

export interface ArcScriptExpressionReference {
  name: string;
  expression: ArcScriptAstNode;
}

export interface ArcScriptOptions {
  stdout?: (data: string) => void;
  stderr?: (data: string) => void;
  stdin?: () => Promise<string>;
  execCommand?: (name: string, argv: string[]) => any;
}
// !endtpa
