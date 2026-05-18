export interface IEnvironment {
  _init(): Promise<void>;
  delete(key: string): boolean;
  get(key: string): any;
  getMultiple(keys: string[]): any[];
  getAll(): Record<string, string>;
  setReadonly(key: string): void;
  setWritable(key: string): void;
  set(key: string, value: any): boolean;
  setMultiple(entries: [string, any][]): void;
  reset(): void;
}
