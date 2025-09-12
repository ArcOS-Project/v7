import type { ASTNode } from "$ts/kernel/mods/lang/ast";
import type { LangError } from "$ts/kernel/mods/lang/error";
import type { Interpreter } from "$ts/kernel/mods/lang/interpreter";

export interface NativeFunction {
  parameters: string[];
  body: ASTNode | ((...args: any[]) => any);
  native?: boolean;
}

export type TokenType =
  | "PLUS"
  | "MINUS"
  | "MULTIPLY"
  | "DIVIDE"
  | "MODULO"
  | "LPAREN"
  | "RPAREN"
  | "LBRACE"
  | "RBRACE"
  | "LBRACKET"
  | "RBRACKET"
  | "SEMICOLON"
  | "COMMA"
  | "COLON"
  | "DOT"
  | "EQUAL_EQUAL"
  | "ASSIGN"
  | "NOT_EQUAL"
  | "NOT"
  | "GREATER_EQUAL"
  | "GREATER"
  | "LESS_EQUAL"
  | "LESS"
  | "AND"
  | "OR"
  | "EOF"
  | "STRING"
  | "BOOLEAN"
  | "IDENTIFIER"
  | "NULL"
  | "FLOAT"
  | "INTEGER"
  | "FUN"
  | "IF"
  | "WHILE"
  | "FOR"
  | "RETURN"
  | "ELSE";

export type LangErrorCallback = (error: LangError) => void;
export type LangStdoutCallback = (...args: any[]) => void;
export type LangStdinCallback = () => Promise<string>;
export type LangExitCallback = (interpreter: Interpreter) => void;
export type GlobalEnvironmentCallback = (interpreter: Interpreter) => Record<string, any>;

export interface ArcLangOptions {
  onError?: LangErrorCallback;
  stdout?: LangStdoutCallback;
  stdin?: LangStdinCallback;
  onExit?: LangExitCallback;
  allowUnsafe?: boolean;
  globalEnvironment?: GlobalEnvironmentCallback;
  arguments?: any[];
  workingDir?: string;
  ast?: ASTNode;
}
