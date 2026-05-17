import { Process } from "$ts/kernel/mods/stack/process/instance";
import { type ArcScriptAstNode, ArcScriptAstNodeType, type ArcScriptFunction, type ArcScriptLexerToken, ArcScriptLexerTokenType, type ArcScriptPosition, type ArcScriptVariable, ArcScriptVariableType } from "$interfaces/IArcScriptEngine";
import { __Console__ } from "$ts/console";

const Operators: string[] = [
  "+",
  "-",
  "*",
  "/",
  "=",
  "(",
  ")",
  "^"
];

const TwoCharOps: string[] = [
  "+=",
  "-=",
  "*=",
  "/=",
];

const AssignOps: string[] = [
  ...TwoCharOps,
  "="
];

const Keywords: string[] = [
  "var",
  "fn",
  "return"
];

const Precedences: string[][] = [
  [
    "+",
    "-"
  ],
  [
    "*",
    "/"
  ],
  [
    "^"
  ],
  [
    "(",
    ")"
  ]
]

interface ExpressionData {
  value: any;
  type: ArcScriptVariableType;
}

function getPrecedence(str: string) {
  const precedence = Precedences.findIndex(a => a.includes(str));
  return precedence !== -1 ? precedence : 3;
}

export class ArcScriptEngine extends Process {
  constructor(pid: number, parentPid: number, execCommandCallback: (name: string, argv: string[]) => any) {
    super(pid, parentPid);

    this.execCommand = execCommandCallback;
  }
  errored = false;
  errorMessage: string | null = null;

  private execCommand: (name: string, argv: string[]) => any;
  private temp: string = "";
  private startPos: number = 0;
  private line: number = 1;
  private blockStartPos: number = 0;
  private lineStartPos: number = 0;
  private type!: ArcScriptLexerTokenType;
  private tokenOut: ArcScriptLexerToken[] = [];
  private i: number = 0;
  
  private variables: Record<string, ArcScriptVariable> = {};
  private functions: Record<string, ArcScriptFunction> = {};

  execute(src: string): void {
    const tokens = this.tokenize(src)
    if (this.errored) return;
    const ast = this.ast(tokens);
    if (this.errored) return;
    this.interpret(ast);
  }

  interpret(ast: ArcScriptAstNode[]) {
    this.variables = {};
    for (const l of ast) {
      this.interpretLine(l);
      if (this.errored) return;
    }
  }

  private nodeTypeToVarType(node: ArcScriptAstNode): ArcScriptVariableType {
    if (node.type === ArcScriptAstNodeType.BOOL) return ArcScriptVariableType.boolean;
    if (node.type === ArcScriptAstNodeType.NUM) return ArcScriptVariableType.number;
    return ArcScriptVariableType.string;
  }

  private getExpressionValue(expr: ArcScriptAstNode[]): ExpressionData {
    const data: ExpressionData = {
      type: ArcScriptVariableType.string,
      value: null
    };
    
    for (let i = 0; i < expr.length; i++) {
      const t = expr[i];
      if (t.type === ArcScriptAstNodeType.OP) {
        const n1 = expr[i - 2];
        const n2 = expr[i - 1];
        const v1 = this.interpretLine(n1)!;
        const v2 = this.interpretLine(n2)!;
        if (this.errored) return data;
        let res: any;
        switch (t.data.value) {
          case '+':
            res = v1.value + v2.value
            break;
          case '-':
            res = v1.value - v2.value;
            break;
          case '*':
            res = v1.value * v2.value;
            break;
          case '/':
            res = v1.value / v2.value;
            break;
        }
        data.type = this.nodeTypeToVarType(n1);
        expr.splice(i - 2, 3, { type: n1.type, data: { value: res }, position: n1.position });
        i -= 2;
      }
    }
    data.value = expr[0].data.value
    return data;
  }

  private getStringVariables(input: string, position: ArcScriptPosition) {
    let inVar: boolean = false;
    let varName: string = "";
    let out: string = "";
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      if (c === "%") {
        if (inVar) {
          const val: ArcScriptVariable | undefined = this.variables[varName]
          if (!val) {
            this.posError("unknown variable '" + varName + "'", {
              start: position.start,
              end: {
                line: position.end.line,
                column: position.start.column + i
              }
            });
          } else {
            out += val.value;
          }
          varName = "";
          inVar = false;
        } else {
          inVar = true;
        }
      } else {
        if (inVar) {
          varName += c;
        } else {
          out += c;
        }
      }
    }
    return out;
  }

  private getValue(node: ArcScriptAstNode): string {
    if (node.type === ArcScriptAstNodeType.IDENT) {
      return this.variables[node.data.value].value
    } else if (node.type === ArcScriptAstNodeType.BOOL || node.type === ArcScriptAstNodeType.NUM) {
      return String(node.data.value)
    } else if (node.type === ArcScriptAstNodeType.STRING) {
      return this.getStringVariables(node.data.value, node.position[0]);
    }
    return "";
  }

  private interpretLine(line: ArcScriptAstNode): ExpressionData | undefined {
    if (!line) return;
    switch (line.type) {
      case ArcScriptAstNodeType.DECL:
      case ArcScriptAstNodeType.ASSIGN: {
        const v = this.interpretLine(line.data.value);
        if (v) {
          this.variables[line.data.name] = {
            type: v.type,
            value: v.value
          };
        }
        break
      }

      case ArcScriptAstNodeType.COMMAND:{
        const args: string[] = [];
        for (const p of line.data.parameters) {
          args.push(this.getValue(p));
        }
        this.execCommand(line.data.command, args)
        break
      }

      case ArcScriptAstNodeType.EXPR:
        return this.getExpressionValue(line.data.value);

      case ArcScriptAstNodeType.IDENT: {
        const name = line.data.value;
        const v = this.variables[name];
        if (v) {
          return {
            type: v.type,
            value: v.value
          };
        } else {
          this.posError("unrecognized identifier '" + name + "'", line.position[0])
        }
        break;
      }

      case ArcScriptAstNodeType.FUNC:
        this.functions[line.data.name] = {
          args: line.data.arguments,
          body: line.data.body
        }
        return
      
      case ArcScriptAstNodeType.CALL:{
        const fn = this.functions[line.data.name];
        if (!fn) {
          this.posError("unrecognized function '" + line.data.name + "'", line.position[0])
          return
        }
        const savedScope = structuredClone(this.variables);
        for (let i = 0; i < fn.args.length; i++) {
          const arg = fn.args[i].data.value;
          const argvn = line.data.arguments[i];
          if (!argvn) {
            this.posError("expected argument '" + arg + "'", fn.args[i].position[0]);
            return;
          }
          const data = this.interpretLine(argvn);
          this.variables[arg] = data!.value;
        }
        this.interpret(fn.body);
        this.variables = savedScope;
        break
      }

      case ArcScriptAstNodeType.OP:
        break

      case ArcScriptAstNodeType.NUM:
        return {
          type: ArcScriptVariableType.number,
          value: Number(line.data.value)
        }

      case ArcScriptAstNodeType.STRING:
        return {
          type: ArcScriptVariableType.string,
          value: line.data.value
        }

      case ArcScriptAstNodeType.BOOL:
        return {
          type: ArcScriptVariableType.number,
          value: line.data.value === "true"
        }
    }
  }

  ast(tokens: ArcScriptLexerToken[]) {
    const astOut: ArcScriptAstNode[] = [];
    const lines: ArcScriptLexerToken[][] = [];
    const temp: ArcScriptLexerToken[] = [];
    let fnDepth: number = 0
    for (const tok of tokens) {
      if (tok.type !== ArcScriptLexerTokenType.NEWLINE || fnDepth > 0) {
        temp.push(tok);
        if (tok.type === ArcScriptLexerTokenType.KEYWORD && tok.value === "fn") fnDepth++;
        if (tok.type === ArcScriptLexerTokenType.IDENT && tok.value === "}" && fnDepth > 0) {
          fnDepth--;
          if (fnDepth === 0) {
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
    const out: ArcScriptAstNode = {
      type: ArcScriptAstNodeType.UNKNOWN,
      data: {},
      position: line.map(v => v.position)
    };

    if (line.length === 0) {
      out.type = ArcScriptAstNodeType.EMPTY;
      return out;
    }

    if (line[0].type === ArcScriptLexerTokenType.KEYWORD && line[0].value === "var") {
      out.type = ArcScriptAstNodeType.DECL;
      out.data.name = line[1].value;
      out.data.op = line[2].value;
      out.data.value = this.parseTokenLine(line.slice(3));
      return out;
    }

    if (line.length > 1 && line[0].type === ArcScriptLexerTokenType.KEYWORD && line[0].value === "fn" && line[1].type === ArcScriptLexerTokenType.IDENT) {
      if (line.length === 2) {
        this.posError("expected function parameters", line[1].position)
        return out;
      }
      let i = 3;
      let depth = 1;
      const args: ArcScriptLexerToken[][] = [];
      const temp: ArcScriptLexerToken[] = [];
      while (i < line.length && depth > 0) {
        const arg = line[i];
        if (arg.type === ArcScriptLexerTokenType.OP) {
          if (arg.value === '(') depth++;
          if (arg.value === ')') depth--;
          if (arg.value === ',') {
            args.push(structuredClone(temp));
            temp.length = 0;
          }
        }
        i++;
      }
      if (temp.length > 0) {
        args.push(structuredClone(temp));
      }
      if (line.length === i) {
        this.posError("expected function body", line[i].position)
        return out
      }
      const body = this.ast(line.slice(i + 1, -2));
      out.type = ArcScriptAstNodeType.FUNC;
      out.data.name = line[1].value;
      const argNodes: ArcScriptAstNode[] = []
      for (const arg of args) {
        const node = this.parseTokenLine(arg)
        if (node.type !== ArcScriptAstNodeType.EMPTY && node.type !== ArcScriptAstNodeType.UNKNOWN) argNodes.push(node);
      }
      out.data.arguments = argNodes;
      out.data.body = body;
      return out;
    }

    if (line.length > 1 && line[0].type === ArcScriptLexerTokenType.IDENT && line[1].type === ArcScriptLexerTokenType.OP && line[1].value === "(") {
      let i = 2;
      let depth = 1;
      const args: ArcScriptLexerToken[][] = [];
      const temp: ArcScriptLexerToken[] = [];
      while (i < line.length && depth > 0) {
        const arg = line[i];
        if (arg.type === ArcScriptLexerTokenType.OP) {
          if (arg.value === '(') depth++;
          if (arg.value === ')') depth--;
          if (arg.value === ',') {
            args.push(structuredClone(temp));
            temp.length = 0;
          }
        }
        i++;
      }
      if (temp.length > 0) {
        args.push(structuredClone(temp));
      }

      out.type = ArcScriptAstNodeType.CALL;
      out.data.name = line[0].value;

      const argNodes: ArcScriptAstNode[] = [];
      for (const arg of args) {
        const node = this.parseTokenLine(arg)
        if (node.type !== ArcScriptAstNodeType.EMPTY && node.type !== ArcScriptAstNodeType.UNKNOWN) argNodes.push(node);
      }
      out.data.arguments = argNodes;
      return out;
    }


    if (line.length > 1 && line[1].type === ArcScriptLexerTokenType.OP) { // i think this is a good enough way of detecting an expression; at least for now
      if (AssignOps.includes(line[1].value)) {
        out.type = ArcScriptAstNodeType.ASSIGN;
        out.data.name = line[0].value;
        out.data.op = line[1].value;
        out.data.value = this.parseTokenLine(line.slice(2));
        return out;
      } else {
        out.type = ArcScriptAstNodeType.EXPR;
        const val: ArcScriptAstNode[] = [];
        for (const tok of line) {
          val.push(this.parseTokenLine([tok]));
        }
        out.data.value = this.postfixExpr(val);
        return out;
      }
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.IDENT) {
      out.type = ArcScriptAstNodeType.IDENT;
      out.data.value = line[0].value;
      return out;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.NUM) {
      out.type = ArcScriptAstNodeType.NUM;
      out.data.value = line[0].value;
      return out;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.OP) {
      out.type = ArcScriptAstNodeType.OP;
      out.data.value = line[0].value;
      return out;
    }

    if (line.length === 1 && line[0].type === ArcScriptLexerTokenType.STRING) {
      out.type = ArcScriptAstNodeType.STRING;
      out.data.value = line[0].value;
      return out;
    }

    out.type = ArcScriptAstNodeType.COMMAND;
    out.data.command = line[0].value;
    const parameters: ArcScriptAstNode[] = [];
    for (const node of line.slice(1)) {
      parameters.push(this.parseTokenLine([node]))
    }
    out.data.parameters = parameters;

    return out;
  }

  private postfixExpr(expr: ArcScriptAstNode[]): ArcScriptAstNode[] {
    const out: ArcScriptAstNode[] = [];
    const ops: ArcScriptAstNode[] = [];

    for (const node of expr) {
      if (node.type !== ArcScriptAstNodeType.OP) {
        out.push(node);
        continue;
      }

      while (ops.length > 0) {
        const top = ops[ops.length - 1];

        if (top.type !== ArcScriptAstNodeType.OP) break;

        const p1 = getPrecedence(top.data.value);
        const p2 = getPrecedence(node.data.value);

        if (p1 >= p2) {
          out.push(ops.pop()!);
        } else {
          break;
        }
      }

      ops.push(node);
    }

    while (ops.length > 0) {
      out.push(ops.pop()!);
    }

    return out;
  }

  tokenize(src: string): ArcScriptLexerToken[] {
    this.tokenOut = [];
    this.type = ArcScriptLexerTokenType.UNKNOWN;
    this.i = 0;
    this.blockStartPos = 0;
    this.lineStartPos = 0;

    const next = () => {
      this.i++;
    }

    while (this.i < src.length) {
      const c = src[this.i];

      if (c == "\n" || (c == " " && this.type !== ArcScriptLexerTokenType.STRING)) {
        if (this.type === ArcScriptLexerTokenType.STRING) {
          return this.error("expected string terminator");
        }
        
        this.add();
        
        if (c === "\n") {
          this.type = ArcScriptLexerTokenType.NEWLINE;
          this.add();

          this.startPos = this.i + 1;
          this.line++;
          this.lineStartPos = this.startPos;

          this.blockStartPos = 0;
        }

        this.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      }
      
      if (c == `"` && !this.escaped(src, this.i)) {
        if (this.type === ArcScriptLexerTokenType.STRING) {
          next()
          this.add(false);
          this.type = ArcScriptLexerTokenType.UNKNOWN;
          continue;
        } else if (this.type === ArcScriptLexerTokenType.UNKNOWN) {
          this.add();
          this.type = ArcScriptLexerTokenType.STRING;
        }

        next();
        continue;
      }

      if (TwoCharOps.includes(c + src[this.i+1]) && this.type !== ArcScriptLexerTokenType.STRING) {
        this.i++;
        this.temp = c + src[this.i];

        this.type = ArcScriptLexerTokenType.OP;
        this.add();

        this.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      } else if (Operators.includes(c) && this.type !== ArcScriptLexerTokenType.STRING) {
        this.add();
        this.type = ArcScriptLexerTokenType.OP;
        this.temp = c;
        this.add();
        this.type = ArcScriptLexerTokenType.UNKNOWN;

        next();
        continue;
      }
      
      this.temp += c;
      next();
    }
    this.add();

    return structuredClone(this.tokenOut);
  }

  private add(trim: boolean = true) {
    if (this.type == ArcScriptLexerTokenType.UNKNOWN) {
      if (this.temp !== "") {
        if (Keywords.includes(this.temp.trim()))
          this.type = ArcScriptLexerTokenType.KEYWORD;
        else if (!isNaN(Number(this.temp)))
          this.type = ArcScriptLexerTokenType.NUM;
        else
          this.type = ArcScriptLexerTokenType.IDENT;
      } else {
        this.blockStartPos = this.i - this.startPos;
        return
      }
    }

    this.tokenOut.push({
      position: {
        start: {
          column: this.blockStartPos + 1,
          line: this.line
        },
        end: {
          column: (this.i - this.startPos) + 1,
          line: this.line
        }
      },

      type: this.type,
      value: trim ? this.temp.trim() : this.temp
    });

    this.blockStartPos = this.i - this.startPos;
    this.temp = "";
  }

  private error(message: string): ArcScriptLexerToken[] {
    this.Log("[ArcScript] Error: " + message + `\nat ${this.line}:${this.i - this.lineStartPos}`);

    this.errored = true;
    this.errorMessage = message;
    return [];
  }

  private posError(message: string, pos: ArcScriptPosition) {
    this.Log("[ArcScript] error: " + message + `\nat ${pos.end.line}:${pos.end.column}`);

    this.errored = true;
    this.errorMessage = message;
  }

  private escaped(src: string, i: number) {
    let c = 0;
    while (src[i] == "\\") {
      i--;
      c++;
    }
    return c % 2 === 1;
  }
}