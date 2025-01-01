import {
  LogLevel,
  ShortLogLevelCaptions,
  type LogItem,
} from "../../types/logging";

let CurrentKernel: WaveKernel | undefined = undefined;

export class WaveKernel {
  Logs: LogItem[] = [];
  startMs: number;

  public static get() {
    return CurrentKernel;
  }

  constructor() {
    if (CurrentKernel) throw new Error("Attempted to reinitialize the kernel");

    CurrentKernel = this;
    this.startMs = Date.now();
  }

  async _init() {}

  public Log(source: string, message: string, level = LogLevel.info) {
    const timestamp = Date.now();

    this.Logs.push({ timestamp, source, message, level });

    console.log(
      `[${timestamp - this.startMs}] ${
        ShortLogLevelCaptions[level]
      } ${source}: ${message}`
    );
  }
}
