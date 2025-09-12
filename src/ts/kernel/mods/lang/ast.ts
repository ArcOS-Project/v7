export class ASTNode {
  type: string;
  value: any;
  children: (ASTNode | null)[];
  key: string = "";

  constructor(type: string, value = null, children: (ASTNode | null)[] = []) {
    this.type = type;
    this.value = value;
    this.children = children;
  }
}
