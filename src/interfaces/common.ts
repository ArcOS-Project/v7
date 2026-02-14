export interface Constructs<T, R extends Array<unknown> = any[]> {
  new (...args: R): T;
}
