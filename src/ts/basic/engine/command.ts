import { ArcBasicEngine } from ".";

export class BasicCommand {
  protected interpreter: ArcBasicEngine;
  static keyword: string;

  constructor(interpreter: ArcBasicEngine) {
    this.interpreter = interpreter;
  }

  async execute(line: string): Promise<string | undefined> {
    return undefined; // undefined = ok status
  }
}
