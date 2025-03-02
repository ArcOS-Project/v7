import type { ASTNode } from "$ts/lang/ast";

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
