export const Operators: string[] = ["+", "-", "*", "/", "=", "(", ")", "^"];
export const TwoCharOps: string[] = ["+=", "-=", "*=", "/="];
export const AssignOps: string[] = [...TwoCharOps, "="];
export const Keywords: string[] = ["var", "fn", "return", "friend"];
export const Precedences: string[][] = [["+", "-"], ["*", "/"], ["^"], ["(", ")"]];
